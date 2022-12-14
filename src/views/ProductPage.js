import React from "react";
import AfterBanner from "../components/ProductPage/AfterBanner";
import AlsoLike from "../components/ProductPage/AlsoLike";
import AsSeenOnInstagram from "../components/ProductPage/AsSeenOnInstagram";
import Banner from "../components/ProductPage/Banner";
// import Customer from "../components/ProductPage/customerReviews";
import TextParagraph2 from "../components/ProductPage/TextParagraph2";

const ProductPage = () => {
  return (
    <div>
      {/* <ProductModal/> */}
      <Banner />
      <AfterBanner />
      <TextParagraph2 />
      <AsSeenOnInstagram />
      {/* <Customer /> */}
      <AlsoLike/>
    </div>
  );
};

export default ProductPage;
