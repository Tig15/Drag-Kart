import { Send } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
height: 350px;
width: 100%;
background-color: #c9d6df;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h2`
margin-top: -30px;
font-size: 80px;
margin-bottom: 15px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-shadow: 4px 4px 1px #070d59 ;
color: #5893d4;
`
const Desc = styled.div`
font-size: 35px;
font-weight: bold;
margin-bottom: 30px;
color: #6e7da2;
text-shadow: 2px 2px 1px #070d59;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
const InputContainer = styled.div`
background-color: white;
width: 550px;
display: flex;
justify-content: space-between;
border: 1px solid gray;
`
const Input = styled.input`
border: none;
flex: 9;
`
const Button = styled.button`
flex: 1;
border: none;
background-color: #d6ecfa;
color: #083d56;
cursor: pointer;
transition: all 0.4s ease;

&:hover{
    background-color: #22d1ee;
    transform: scale(1.1);
}
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc> Get Timely Update About any product from here.</Desc>
        <InputContainer>
            <Input placeholder='Enter Your Email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter