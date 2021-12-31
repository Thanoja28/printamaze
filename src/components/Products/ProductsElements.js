import styled from 'styled-components';

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 2rem;
  line-height: 2;
  width: 300px;
  background:rgba(225, 225, 225, 0.1);
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  &:hover {
    cursor: pointer;
  }
  `;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: 2px solid #76520e;
  border-radius: 40px;
  background: #e9ecef;
  color: #76520e;
  transition: 0.2 ease-out;
  font-weight: 700;
  &:hover {
    background: #76520e;
    border: 2px solid #e9ecef;
    transform scale(1.03);
    transition: 0.4s ease-out;
    cursor: pointer;
    color: #e9ecef;
  }
`;