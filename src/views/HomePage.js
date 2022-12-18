import React from "react";
import AboutMatter from "../components/HomePage/AboutMatter";
import AsSeenOn from "../components/HomePage/AsSeenOn";
import Carousels from "../components/HomePage/Carousels";
import Explore from "../components/HomePage/Explore";
import Featured from "../components/HomePage/Featured";
import RecommendedVideos from "../components/HomePage/Recommended Videos";
import Shop from "../components/HomePage/Shop";

const HomePage = () => {
  return (
    <>
      <Carousels />
      <Featured />
      <AboutMatter />
      <Explore/>
      <Shop/>
      <RecommendedVideos />
      <AsSeenOn />
    </>
  );
};

export default HomePage;
