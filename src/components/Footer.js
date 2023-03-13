
import {  Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";


const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
`
const Left = styled.div`
flex: 1;
padding: 20px;
background-color: #dfe2e2;
`
const Logo = styled.h3`
font-size: 27px;
`
const Desc = styled.p`
font-size: 18px;
line-height: 1.5rem;
margin: 15px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcons = styled.div`
width: 35px;
height: 35px;
color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
cursor: pointer;
transition: all 0.6s ease;

&:hover{
    transform: scale(1.2);
}
`
const Center = styled.div`
flex: 1;
padding: 20px;
background-color: #d1d1d1;
`
const Title = styled.h3`
font-size: 23px;
margin-bottom: 20px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
background-color: #dfe2e2;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 40%;
cursor: pointer;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>$-Drag-Kart-$</Logo>
        <Desc> Find Any Product of your choice at Drag-Kart. Smooth with multiple Categories and pages. Get products of any brand at your own choice of discount.</Desc>
        <SocialContainer>
          <SocialIcons style={{backgroundColor:"#3b5998"}}><Facebook/></SocialIcons>
          <SocialIcons style={{backgroundColor:" #e95950"}}><Instagram/></SocialIcons>
          <SocialIcons style={{backgroundColor:" #00acee"}}><Twitter/></SocialIcons>
          <SocialIcons style={{backgroundColor:" #c8232c"}}><Pinterest/></SocialIcons>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Categories</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>621 Pixie Faith, South Polesh 23443</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/> +2 356 2636 265</ContactItem>
        <ContactItem><Mail style={{marginRight:"10px"}}/> hm@dragkart.com</ContactItem>
        <Payment src="https://media.horusrc.com/wysiwyg/pay_by_cards.jpg"/>
      </Right>
    </Container>
  );
};

export default Footer;
