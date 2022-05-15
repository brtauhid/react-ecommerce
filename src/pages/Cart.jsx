import styled from "styled-components";
import Anouncements from "../components/Anouncements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Container = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Anouncements></Anouncements>
      cart
      <Footer></Footer>
    </Container>
  );
};

export default Cart;
