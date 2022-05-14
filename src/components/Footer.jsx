import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Logo = styled.h1``;
const Desc = styled.p``;
const SocialContainer = styled.div``;
const SocialIcon = styled.div``;

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
          <SocialIcon>
            <Facebook></Facebook>
            <YouTube></YouTube>
            <Instagram></Instagram>
            <Twitter></Twitter>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
