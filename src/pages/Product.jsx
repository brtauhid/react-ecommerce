import { Add, Remove } from "@material-ui/icons";
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
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 70%;
`;
const InfoContainer = styled.div`
  flex: 1.5;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  padding-right: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  color: white;
  margin: 0 10px;
`;
const Button = styled.button`
  transition: all 0.3s ease;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, vel. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Doloremque, accusamus? Quidem delectus hic aliquid
            repellendusLorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, vel. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Doloremque, accusamus? Quidem delectus hic aliquid repellendus
            amet rerum iste animi aut suscipit commodi minima unde, magnam,
            fugit itaque voluptate sit accusantium!
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="gray"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption selected disabled>
                  Size
                </FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXS</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove></Remove>
              <Amount>1</Amount>
              <Add></Add>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </Container>
  );
};

export default Product;
