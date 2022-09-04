import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom'
import ProductCarousel from '../components/ProductCarousel'

export default function HomeScreen() {
  const dispatch = useDispatch()
  let keyword = window.location.href;
  keyword = keyword.split("/")
  keyword = keyword[3]
  const productList = useSelector(state => state.productList)
  const { error, loading, products } = productList
  useEffect(() =>{
    dispatch(listProducts(keyword))
  }, [dispatch, keyword])

  return (  
    <div>
        {!keyword && <ProductCarousel/>}
        <h1>Latest Products</h1>
        {loading ? <Loader />
        : error ? <Message variant="danger">{error}</Message>
            :
            <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
            </Row>
          }
    </div>
  )
}
