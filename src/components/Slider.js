import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: seashell;
  position: absolute;
  top: -100px;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.9;
  cursor: pointer;
  z-index: 3;
`;

const Wrapper = styled.div`
  margin: 30px 5px;
  height: 100%;
  display: flex;
  transition: all 2.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex *( -100)}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 2;
  padding: 30px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 80px;
  text-transform: uppercase;
  position: absolute;
  top: -130px;
  text-shadow: black 4px 4px 8px;
`;
const Desc = styled.p`
  margin-right: 90px;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 4px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const Button = styled.button`
  padding: 7px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
  box-shadow: black 4px 4px 1px;
`;

const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0);
  
  return (
    <Container>
      <Arrow direction="left" onClick={() =>setslideIndex(slideIndex > 0 ? slideIndex-1:5)}>
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
              <Slide bg={item.bg}>
                <ImageContainer>
                  <Image src={item.img} />
                </ImageContainer>
            <InfoContainer>
              <Title> {item.title} </Title>
              <Desc>{item.desc}</Desc>
              <Button> Go For It </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => setslideIndex(slideIndex < 5 ? slideIndex+1:0)}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
