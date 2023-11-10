import styled from "styled-components";
import pix from "../assets/pix.jpg"
import { useState } from 'react';
import {BsCamera} from "react-icons/bs"



export const PageIII=()=> {
    const [image, setImage] =useState<string>("")
    const [avatar, setavatar] =useState<string>("pix")
    const x =JSON.parse(localStorage.getItem("page")!)
    console.log("state", x);
    

    const onHandleImage = (e:any)=>{
        const file = e.target.files![0]
        const readyImage = URL.createObjectURL(file)

        setImage(file)
        setavatar(readyImage)
    }
    return <Main>
        <CircleContainer>
            <Circle c="white" bg='yellowgreen'>1</Circle>
            <Line />
            <Circle c='white' bg='yellowgreen'>2</Circle>
            <Line />
            <Circle c='black' bg='yellowgreen'>3</Circle>
        </CircleContainer>
        <Hold>
            <Img src={avatar}/>
            <Input2 type='file' id='me' onChange={onHandleImage}/>
            <Label htmlFor="me">
                <BsCamera/>
            </Label>
        </Hold>
        <ButtonHolder>
            <Button bg="brown" onClick={()=>{localStorage.setItem("page", JSON.stringify(2));
             window.location.reload()}}>Prev</Button>
            <Button bg="green">Next</Button>
        </ButtonHolder>
    </Main>
}

const Input2 =styled.input` 
display: none;
`
const Img =styled.img`
width: 180px;
height: 180px;
justify-content: center;
object-fit: cover;
border-radius: 50%;
background-color: pink;         
`
const Label =styled.label`
width: 40px;
height: 40px;
display: flex;
background-color: blue;
position: absolute;
border-radius: 50%;
bottom: 10px;
right: 200px;
justify-content: center;
align-items: center;
`

const Hold =styled.div`
width: 100%;
display: flex;
justify-content: center;
position: relative;
`

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
