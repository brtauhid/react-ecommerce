import styled from "styled-components";
import Anouncements from "../components/Anouncements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.h1``;
const Desc = styled.p``;
const Price = styled.span``;

const Product = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Anouncements></Anouncements>
      <Wrapper>
        <ImgContainer>
          <Image src="https://image.shutterstock.com/image-photo/high-fashion-photo-beautiful-elegant-600w-2063320898.jpg"></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            accusamus? Quidem delectus hic aliquid repellendus amet rerum iste
            animi aut suscipit commodi minima unde, magnam, fugit itaque
            voluptate sit accusantium!
          </Desc>
          <Price>$20</Price>
        </InfoContainer>
      </Wrapper>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </Container>
  );
};

export default Product;
