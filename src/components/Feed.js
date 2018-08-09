import React from 'react';
import { List, AutoSizer } from 'react-virtualized';
import styled from 'styled-components';

// List data as an array of strings
const list = [
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  'LemBoy',
  // And so on...
];

const Element = ({ element }) => <div>{element}</div>;

const Row = styled.div`
  background-color: ${props => (props.index ? `#ff${props.index}` : '#ff0')};
`;

function rowRenderer({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}) {
  return (
    <Row key={key} style={style} index={index}>
      <Element element={list[index]} />
    </Row>
  );
}

const Feed = () => (
  <div>
    <div className="list">
      <AutoSizer disableHeight>
        {({ width }) => (
          <List
            width={width}
            height={300}
            rowCount={list.length}
            rowHeight={50}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  </div>
);

export default Feed;
