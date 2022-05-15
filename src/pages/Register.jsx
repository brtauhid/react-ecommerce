import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(121, 121, 121, 0.5)
    ),
    url("https://previews.123rf.com/images/scottff72/scottff721303/scottff72130300013/18657953-column-interior-empty-room-law-or-government-background-concept-3d-model-scene.jpg")
      center;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div``;
const Title = styled.h1``;
const Form = styled.form``;
const Input = styled.input``;
const Agreement = styled.span``;
const Button = styled.button``;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="User name" />
          <Input placeholder="email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            quisquam tempore esse ipsam provident consectetur excepturi saepe
            deserunt et ad!
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
