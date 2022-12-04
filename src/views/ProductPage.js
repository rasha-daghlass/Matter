import React from 'react'
import AfterBanner from '../components/ProductPage/AfterBanner'
import AsSeenOnInstagram from '../components/ProductPage/AsSeenOnInstagram'
import Banner from '../components/ProductPage/Banner'
import TextParagraph2 from '../components/ProductPage/TextParagraph2'

const ProductPage = () => {
  return (
    <div>
        <Banner/>
        <AfterBanner/>
        <TextParagraph2/>
        <AsSeenOnInstagram/>
    </div>
  )
}

export default ProductPage