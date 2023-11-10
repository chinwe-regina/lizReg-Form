import { useState } from 'react'
import styled from 'styled-components'
import { PageI } from './PageI'
import { PageII } from './PageII'
import { PageIII } from './PageIII'

<PageI/>;
<PageII/>;
<PageIII/>



const Registration = () => {
    const x = JSON.parse(localStorage.getItem("page")!)
    console.log("state", x);
    
  return (
    <div>
        <Container>
           
           {
            x===1? (<PageI/>): x===2? (<PageII/>): x===3? (<PageIII/>): null
           }

           <PageI />
        </Container>
    </div>
  )

}

export default Registration

const Container=styled.div`
display: flex;
justify-content: center;
height: 100vh;
width: 100vw;
align-items: center;

`