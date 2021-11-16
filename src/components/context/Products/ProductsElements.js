import styled from 'styled-components';

export const ProductsContainer = styled.div`
   /*width: 100vw;*/ 
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #f6f8fd;
  color: #000;
  
`;

export const Container = styled.div`
  background: #e5f0fe;

`
export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 1.7;
  width: 350px;
  background: #ffffff;
  margin: 10px;
  border-radius: 7px ;
`;

export const ContainerImg = styled.div`
height: 290px;
`


export const ProductImg = styled.img`
  
  min-width: 300px;
  max-width: 100%;
  box-shadow:  #009eff;
  border-radius: 10px;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  
  margin-bottom: 5rem;
  color: #000;
`;

export const ProductTitle = styled.h2`
  font-weight: 400px;
  font-size: 1.4rem;
  position: relative;
  
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #009eff;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  font-weight: bold;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #009eff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const ProductCalendar = styled.div`
font-weight: bold;
margin: 0px 5px;
`
export const ProductPlace = styled.div`
font-weight: bold;
margin: 0px 5px;
`

export const ContainerPlace = styled.div`
  background: #bcc7d6;
  text-align: right;
  border-radius: 5px;
  margin: 0px 20px 0px 150px;
`