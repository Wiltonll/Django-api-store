import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Message from "./Message";
import { fetchTopRatedProducts } from "../redux/slices/productSlice";


function ProductCarousel() {
  const dispatch = useDispatch();
  const topRatedProducts = useSelector((state) => state.product.topRatedProducts);
  const { error, loading, products } = topRatedProducts;

  useEffect(() => {
    dispatch(fetchTopRatedProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel fade pause="hover" className="carousel-container" interval={5000}>
      <Carousel.Item>
        <Link to={`/product/iphone-id`}> 
          <img src="/images/banner1.jpg" alt="" className="d-block w-100" />
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to={`/product/mouse-id`}>
          <img src="/images/banner2.jpg" alt="" className="d-block w-100" />
        </Link>
      </Carousel.Item>
      
      <Carousel.Item>
        <Link to={`/product/mouse-id`}>
          <img src="/images/banner3.jpg" alt="" className="d-block w-100" />
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to={`/product/mouse-id`}>
          <img src="/images/banner4.jpg" alt="" className="d-block w-100" />
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to={`/product/mouse-id`}>
          <img src="/images/banner5.jpg" alt="" className="d-block w-100" />
        </Link>
      </Carousel.Item>


    </Carousel>
  );
}

export default ProductCarousel;
