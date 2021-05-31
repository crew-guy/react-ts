import React from 'react';
import { useState } from 'react'
import {useQuery} from 'react-query'
 
// Components
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'

// Styles
import {Wrapper} from './App.styles'

const getProducts = async () => {
  await (await fetch('https://fakestoreapi.com/products')).json()
}

function App() {
  return (
    <h1>Hello world</h1>
  );
}

export default App;
