import React from 'react';
import {FaBars, FaCalendarAlt, FaMapMarkerAlt} from 'react-icons/fa'
import Product from '../Product';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  Container,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ContainerImg,
  ProductDesc,
  ProductPlace,
  ProductCalendar,
  ProductPrice,
  ContainerPlace,
  ProductButton
} from './ProductsElements';

const Products = ({ heading, data }) => {
  
  return (
    <ProductsContainer>
      <Container>
          <ProductsHeading>{heading}</ProductsHeading>
      </Container>
      <ProductWrapper>
        {data.filter(Product => 
      Product.alt == 'Laptop').map((product, index) => {
          return (
            <ProductCard key={index}>
              
              <ProductInfo>
                   <ContainerImg>
                       <ProductImg src={product.img} alt={product.alt} />
                  </ContainerImg>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ContainerPlace>
                    <ProductPlace>{product.city} <FaMapMarkerAlt/></ProductPlace>
                    <ProductCalendar>{product.date} <FaCalendarAlt/></ProductCalendar>
                </ContainerPlace>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton> <a href="/Product" >+ Plus de détails</a></ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;