import styled from "styled-components";
const Container = styled.div``;

const Product = ({ product }) => {
  return <Container>This is product {product.img}</Container>;
};

export default Product;
