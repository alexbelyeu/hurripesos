import React from 'react';
import Autocomplete from 'react-autocomplete';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

const nameList = [
  { name: 'Alex Belyeu' },
  { name: 'Lemi Boyce' },
  { name: 'Gabe LaFontant' },
  { name: 'Dan Brady' },
];

const SearchBox = styled.div`
  margin-bottom: 10px;
`;
const Menu = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: max-content;
  border: 1px solid #cccccc;
  background-color: white;
`;
const Item = styled.div`
  padding: 2px 6px;
  cursor: pointer;
`;
const HighlightedItem = styled(Item)`
  color: white;
  background-color: #4095bf;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
      loading: false,
      names: [],
      value: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.setState(prevState => {
      if (prevState.fireRedirect === true) {
        return { fireRedirect: false };
      }
    });
  }

  handleSubmit(event) {
    // Search for person's info through API and redirect to /persontracker
    event.preventDefault();
    this.setState(prevState => {
      if (prevState.names.length !== 0) {
        return { fireRedirect: true };
      }
    });
  }

  render() {
    const { from } = this.props.location.state || '/';
    const { fireRedirect, value } = this.state;
    return (
      <SearchBox>
        <form onSubmit={this.handleSubmit}>
          <Autocomplete
            value={this.state.value}
            inputProps={{
              id: 'names-autocomplete',
              placeholder: 'Search for a person...',
            }}
            items={this.state.names}
            getItemValue={item => item.name}
            onSelect={(value, name) => this.setState({ value, names: [name] })}
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
          <input type="submit" value="Search" />
        </form>
        {fireRedirect && (
          <Redirect
            to={{
              pathname: from || '/persontracker',
              state: { person: value },
            }}
          />
        )}
      </SearchBox>
    );
  }
}

export default withRouter(Search);
