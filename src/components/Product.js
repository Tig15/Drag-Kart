import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
align-items : center;
justify-content: center;
background-color: rgba(0,0,0,0.3);
z-index: 3;
`

const Container = styled.div`
flex: 1;
min-width: 430px;
height: 310px;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
position: relative;
background-color:#567582;
margin: 10px;
transition: all 0.5s ease;
cursor: pointer;

&:hover ${Info}{
    opacity: 1;
}
`
const Circle = styled.div`
width: 300px;
height: 300px;
border-radius: 50%;
background-color: #d5e8ff;
position: absolute;
`
const Image = styled.img`
height: 85%;
z-index: 3;
`

const Icon = styled.div`
height: 45px;
width: 45px;
border-radius: 50%;
background-color: #d5e8ff;
display: flex;
align-items: center;
justify-content: center;
margin: 4px;
transition: all 0.4s ease-in-out;
cursor: pointer;

&:hover{
    background-color: #5baaec;
    transform: scale(1.1);
}
`
const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product