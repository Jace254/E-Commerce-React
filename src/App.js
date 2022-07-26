import React from 'react'
import './App.css';
import { FilterBrand } from './components';
import { Navbar, Footer, ProductView } from './containers';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <div className='products'>
        <FilterBrand/>
        <ProductView/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
