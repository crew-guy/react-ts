import React from 'react';
import { useState } from 'react'
import {useQuery} from 'react-query'
 
// Components
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'

// Styles
import {Wrapper} from './App.styles'

// Types
export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number
}

const getProducts = async () : Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json()
}

function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  )

  console.log(data)

  const getTotalItems = () => null;
  const handleAddToCart = () => null
  const handleRemoveFromCart = () => null
  
  if (isLoading) return <LinearProgress />
  if (error) <div>Something went wrong..</div>


  return (
    <h1>Hello world</h1>
  );
}

export default App;
