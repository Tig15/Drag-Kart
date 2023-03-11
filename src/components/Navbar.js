import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:70px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`

const Left = styled.div`
flex:1;
display: flex;
left: 50px;
align-items: center;
`
const Language = styled.span`
font-size:19px;
cursor: pointer;
margin-left: 20px;
`
const SearchContainer = styled.div`
margin: 0px 15px;
padding: 4px;
display: flex;
align-items: center;
border: 0.5px solid gray;
border-radius: 22px;
`
const Input = styled.input`
border: none;
`

const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h2`
font-weight: 800;
`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 20px;
`

const MenuItem = styled.div`
font-style: 14px;
cursor: pointer;
margin-left: 25px;
`


function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left> <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:"gray", fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center> <Logo>$-Drag-Kart-$</Logo> </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={1} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar