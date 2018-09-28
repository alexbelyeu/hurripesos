import React from 'react';
import { List, AutoSizer } from 'react-virtualized';
import styled from 'styled-components';
import 'react-virtualized/styles.css';
import Card from './Card';

// List data as an array of strings
const list = [
  { content: 'We got a situation in Curacao', timestamp: '10', user: 'Lemi' },
  { content: 'We got a situation in Aruba', timestamp: '20', user: 'Alex' },
  { content: 'We got a situation in Bonaire', timestamp: '30', user: 'Gabe' },
  { content: 'We got a situation in Martinique', timestamp: '40', user: 'Dan' },
  { content: 'We got a situation in Curacao', timestamp: '10', user: 'LemBoy' },
  { content: 'We got a situation in Curacao', timestamp: '10', user: 'LemBoy' },
  { content: 'We got a situation in Curacao', timestamp: '10', user: 'LemBoy' },
  { content: 'We got a situation in Curacao', timestamp: '10', user: 'LemBoy' },
  { content: 'We got a situation in Curacao', timestamp: '10', user: 'LemBoy' },
  { content: 'We got a situation in Curacao', timestamp: '10', user: 'LemBoy' },
];

const Container = styled.div`
  display: flex;
`;

function rowRenderer({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}) {
  return (
    <Container key={key} style={style}>
      <Card element={list[index]} />
    </Container>
  );
}

const Feed = () => (
  <AutoSizer disableHeight>
    {({ width }) => (
      <List
        width={width}
        height={350}
        rowCount={list.length}
        rowHeight={150}
        rowRenderer={rowRenderer}
      />
    )}
  </AutoSizer>
);

export default Feed;
