import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div``;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product product={product}></Product>
      ))}
    </Container>
  );
};

export default Products;
