import styled from "styled-components";

const Container = styled.div`
flex: 1;
margin: 5px;
height: 55vh;
position: relative;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
background-color:#aaa6a4;
opacity: 0.8;
`

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 25px;
`

const Title = styled.h2`
color: black;
font-weight: bolder;
color: whitesmoke;
text-shadow: 2px 2px 1px black;
`
const Button = styled.button`
border: none;
background-color: white;
color: #46322b;
cursor: pointer;
padding: 2px;
`

const CategoryItems = ({ item }) => {
  return <Container>
    <Image src={item.img}/>
    <Info>
      <Title>{item.title}</Title>
      <Button>Shop It Now</Button>
    </Info>
  </Container>;
};

export default CategoryItems;
