import styled from "styled-components"

const Container = styled.div`
height: 40px;
background-color:#fefdfd;
color: #352e3b;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 600;
border: 10px solid #627f9e;
border-bottom-left-radius:10px;
border-bottom-right-radius:10px;
`

const Announce = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over $45
    </Container>
  )
}

export default Announce