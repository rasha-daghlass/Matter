import React from 'react'
import { useParams } from "react-router-dom";
import ProductDes from '../components/ProdcutDataBox/ProductDes';
import TextParagraph2 from '../components/ProductPage/TextParagraph2';
import Banner from '../components/ProductPage/Banner';
import AfterBanner from '../components/ProductPage/AfterBanner';
import AsSeenOnInstagram from '../components/ProductPage/AsSeenOnInstagram';
import AlsoLike from '../components/ProductPage/AlsoLike';



const ProductDetails = () => {
const {Product}=useParams();
console.log(Product)
  return (
    <div>
      {/* <ProductDes/> */}
      <Banner/>
      <AfterBanner />
      <TextParagraph2 />
      <AsSeenOnInstagram />
      {/* <Customer /> */}
      <AlsoLike/>



    </div>
  )
}

export default ProductDetails