import React from 'react';

// SSR
import { GetServerSideProps } from 'next';

import api from '../services/api';
import { Container } from '../styles/Dashboard/styles'

interface IProducts {
  id: number,
  title:string
}

interface ProductsProps{
  products:IProducts[]
}

export default function Home({products}: ProductsProps){
  console.log(products)

  return (
    <Container>
      
    </Container>
  )
}

export const getserverSideProps: GetServerSideProps<ProductsProps> = async () => {
    
    const response = await api.get('http://localhost:3333/products')
    
    const products = await response.data
    
    return {
      props: {
        products
      }
    }
}
  
      