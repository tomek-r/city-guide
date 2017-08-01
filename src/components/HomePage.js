import React from 'react';
import Map from '../containers/Map';

// Home page component. This serves as the welcome page with link to the library
const HomePage = () => (
  <div>
    <div className="jumbotron center">
      <h1 className="lead">Welcome to City Guide built with React, Redux, and Redux-saga</h1>
    </div>
    <Map />
  </div>
);

export default HomePage;
