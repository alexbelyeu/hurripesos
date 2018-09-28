import React from 'react';
import Autocomplete from 'react-autocomplete';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const nameList = [
  { name: 'Alex Belyeu' },
  { name: 'Lemi Boyce' },
  { name: 'Gabe LaFontant' },
  { name: 'Dan Brady' },
];
const SearchElement = styled.div`
  cursor: pointer;
`;
const Menu = styled.div`
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  background-color: #f2fff7;
`;
const Item = styled.div`
  color: black;
  padding: 2px 6px;
  cursor: pointer;
`;
const HighlightedItem = styled(Item)`
  color: #f2fff7;
  background-color: cadetblue;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
      loading: false,
      names: [],
      searchButtonClicked: false,
      value: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  componentDidUpdate() {
    this.setState(prevState => {
      if (prevState.fireRedirect === true) {
        return { fireRedirect: false };
      }
    });
  }

  closeNav() {
    const navElement = document.getElementsByClassName('App-nav')[0];
    navElement.classList.remove('open-nav');
  }

  handleSearchClick() {
    this.setState({ searchButtonClicked: true });
  }

  handleSubmit(event) {
    // Search for person's info through API and redirect to /persontracker
    event.preventDefault();
    this.input.blur();
    this.closeNav();
    this.setState(prevState => {
      if (prevState.names.length !== 0) {
        return { fireRedirect: true };
      }
    });
  }

  render() {
    const { from } = this.props.location.state || '/';
    const { fireRedirect, searchButtonClicked, value } = this.state;
    return (
      <div>
        {searchButtonClicked ? (
          <form onSubmit={this.handleSubmit}>
            <Autocomplete
              ref={el => (this.input = el)}
              value={this.state.value}
              inputProps={{
                autoFocus: true,
                id: 'names-autocomplete',
                onBlur: () => {
                  this.setState({ searchButtonClicked: false });
                },
              }}
              items={this.state.names}
              getItemValue={item => item.name}
              onSelect={(value, name) =>
                this.setState({ value, names: [name] })
              }
              onChange={(event, value) => {
                this.setState({
                  fireRedirect: false,
                  loading: true,
                  names: [],
                  value,
                });
                let searchedTerm = value
                  ? nameList.filter(
                      name =>
                        name.name.toLowerCase().indexOf(value.toLowerCase()) !==
                        -1
                    )
                  : nameList;
                this.setState({ names: searchedTerm, loading: false });
              }}
              renderItem={(item, isHighlighted) =>
                isHighlighted ? (
                  <HighlightedItem key={item.name}>{item.name}</HighlightedItem>
                ) : (
                  <Item key={item.name}>{item.name}</Item>
                )
              }
              renderMenu={(items, value) => (
                <Menu>
                  {value === '' ? (
                    <Item>Search a name</Item>
                  ) : this.state.loading ? (
                    <Item>Loading...</Item>
                  ) : items.length === 0 ? (
                    <Item>No matches for {value}</Item>
                  ) : (
                    items
                  )}
                </Menu>
              )}
              isItemSelectable={item => !item.header}
            />
            <input hidden type="submit" value="" />
          </form>
        ) : (
          <SearchElement onClick={this.handleSearchClick}>
            <FaSearch /> Search
          </SearchElement>
        )}
        {fireRedirect && (
          <Redirect
            to={{
              pathname: from || '/persontracker',
              state: { person: value },
            }}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Search);
