import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 10px;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow>
        <KeyboardArrowLeftOutlined></KeyboardArrowLeftOutlined>
      </Arrow>
      <Arrow>
        <KeyboardArrowRightOutlined></KeyboardArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
