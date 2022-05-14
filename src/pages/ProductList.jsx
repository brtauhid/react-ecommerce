import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncements from "../components/Anouncements";
const Container = styled.div``;

const Title = styled.div`
  font-size: 50px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div``;

const ProductList = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Anouncements></Anouncements>
      <Title>This is title</Title>
      <FilterContainer>
        <Filter>filter1</Filter>
        <Filter>filter2</Filter>
      </FilterContainer>
    </Container>
  );
};

export default ProductList;
