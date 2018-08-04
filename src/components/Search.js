import React from 'react';
import Autocomplete from 'react-autocomplete';
import styled from 'styled-components';

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
      value: '',
      names: [],
      loading: false,
    };
  }

  render() {
    return (
      <SearchBox>
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
            this.setState({ value, loading: true, names: [] });
            let searchedTerm = value
              ? nameList.filter(
                  name =>
                    name.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
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
                <Item>Search for a person</Item>
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
      </SearchBox>
    );
  }
}

export default Search;
