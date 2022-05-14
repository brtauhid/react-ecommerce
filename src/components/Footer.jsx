import {
  AlternateEmail,
  ContactMail,
  ContactPhone,
  Facebook,
  Home,
  Instagram,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Laura.</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit distinctio repudiandae nisi a sit! Modi expedita
          praesentium molestiae earum quidem.
        </Desc>
        <SocialContainer>
          <SocialIcon color="red">
            <Facebook></Facebook>
          </SocialIcon>
          <SocialIcon color="green">
            <YouTube></YouTube>
          </SocialIcon>
          <SocialIcon color="orange">
            <Instagram></Instagram>
          </SocialIcon>
          <SocialIcon color="blue">
            <Twitter></Twitter>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Ordre Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Home style={{ paddingRight: "10px" }}></Home>6 Jogendra Narayan Shil
          Street.
        </ContactItem>
        <ContactItem>
          <ContactPhone style={{ paddingRight: "10px" }}></ContactPhone>
          +8801865 457 854
        </ContactItem>
        <ContactItem>
          <AlternateEmail style={{ paddingRight: "10px" }}></AlternateEmail>
          contact@laura.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
