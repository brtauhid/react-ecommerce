import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
const Container = styled.div``;
const Circle = styled.div``;
const Image = styled.img``;
const Info = styled.div``;
const Icon = styled.div``;

const Product = ({ product }) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={product.img}></Image>
      <Info>
        <Icon>
          <ShoppingCartOutlined></ShoppingCartOutlined>
        </Icon>
        <Icon>
          <SearchOutlined></SearchOutlined>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined></FavoriteBorderOutlined>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
