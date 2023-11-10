import styled from "styled-components";

export const PageI=()=> {

    return <Main>
        <CircleContainer>
            <Circle c="white" bg='yellowgreen'>1</Circle>
            <Line />
            <Circle c='black' bg=''>2</Circle>
            <Line />
            <Circle c='yellowgreen' bg=''>3</Circle>
        </CircleContainer>
        <Input placeholder='input your name' />
        <Input placeholder='input your name' />
        <ButtonHolder>
            <Button bg="brown" onClick={()=>{localStorage.setItem("page", JSON.stringify(2));
            window.location.reload()}}>Next</Button>
        </ButtonHolder>
    </Main>
}

const Button=styled.div<{bg:string}>`
width: 70px;
height: 40px;
color: white;
background-color: ${({bg})=>bg};
display: flex;
align-items: center;
justify-content: center;
margin: 0 10px;
`
const ButtonHolder=styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`
const Input=styled.input`
height: 45px;
width: 100%;
border-radius: 3px;
border: 1px solid silver;
background-color: #fff;
outline: none;
margin: 10px 0;
&::placeholder{
    padding-left: 10px;
}
`
const Line=styled.div`
width: 80px;
height: 5px;
margin: 0 10px;
background-color: green;
`
const Circle=styled.div<{bg:string, c:string}>`
display: flex;
width: 40px;
height: 40px;
justify-content: center;
align-items: center;
background-color: ${({bg})=>bg};
color: ${({c})=>c};
font: 20px;
border: 1px solid yellow;
border-radius:50%;

`
const CircleContainer=styled.div`
width: 100%;
display: flex;
cursor: pointer;
margin-bottom: 50px;
justify-content: center;
align-items: center;
/* background-color: red; */
`
const Main=styled.div`
width: 600px;
min-height: 300px;
display: flex;
align-items: center;
border: 2px solid red;
padding: 10px 40px;
justify-content: center;
flex-direction:column;
/* background-color: blue; */
`
const Container=styled.div`
display: flex;
justify-content: center;
height: 100vh;
width: 100vw;
align-items: center;

`