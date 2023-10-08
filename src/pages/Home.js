import React, {useState, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MainCarousel from '../components/carousel/MainCarousel';
import ProductCarusel from '../components/carousel/ProductCarusel';
import TopCategories from '../components/HeadingLinks/TopCategories';

const Home = () => {

  const [caruselImages, setCaruselImages] = useState([]);
  const [topBrands, setTopBrands] = useState([]);
  const [newArrivals, setNewArrivals] = useState([])
  const [bestSellers, setBestSellers] = useState([])
  const [topCategories, setTopCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  

  return (
    <div className='bg-[#F1F3F6]'>
      <MainCarousel />
      <TopCategories title={'Top Categories'} topCategories={topCategories} path={'category'} />
      <TopCategories title={'Top Brands'} topCategories={topBrands} path={'brand'} />
      <ProductCarusel title={'New Arrivals'} products={newArrivals} />
      <ProductCarusel title={'Best Sellers'} products={bestSellers} />
    </div>
  )
}

export default Home