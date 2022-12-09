import React from 'react'
import Banner from '../components/ProductList/Banner'
import FilterdData from '../components/ProductList/Filtration'
import SortBy from '../components/ProductList/SortBy'

const ProductList = () => {
  return (
    <div>
      <Banner/>
      <SortBy/>
      <FilterdData/>
    </div>
  )
}

export default ProductList