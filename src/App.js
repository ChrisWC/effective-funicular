import React from 'react';
import StockonGrid from './containers/StockonGrid';
import Cell from './components/Cell';

function App() {
  return <StockonGrid width={50} height={50} cellComponent={Cell}/>
}

export default App;
