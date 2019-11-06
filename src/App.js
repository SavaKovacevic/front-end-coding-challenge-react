import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ListView from './components/ListView/ListView';
import GridView from './components/GridView/GridView';
import OfficeContextProvider from './contexts/OfficeContext';
import Loader from './components/Loader/Loader';
import MapLocations from './components/MapLocations/MapLocations';

function App() {
  return (
    <div className="App">
      <OfficeContextProvider>
        <Loader />
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={ListView} />
            <Route exact path='/grid' component={GridView} />
            <Route path='/map' component={MapLocations} />
          </Switch>
        </BrowserRouter>
      </OfficeContextProvider>
    </div>
    
  );
}

export default App;
