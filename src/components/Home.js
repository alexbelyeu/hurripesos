import React from 'react';
import Map from './Map';
import Feed from './Feed';

const Home = () => (
  <div>
    <Feed />
    <Map isMarkerShown />
  </div>
);

export default Home;
