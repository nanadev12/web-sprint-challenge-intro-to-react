// Write your Character component here
import React from "react";
import styled from "styled-components";


const StyledContainer = styled.div`
width: 100vw;
display: flex;
justify-content: center;
border: 5px solid green;
`;

const StyledDiv = styled.div`
border: pink solid 5px;
margin: 10px;
padding: 3px;
background-color: black;
padding: 10px;
`;

const StyledName = styled.h2`
color: white;
font-size: 24px;
text-transform: uppercase;
background-color: dodgerblue;
letter-spacing: 1px;
`;

const StyledStats = styled.p`
color: white;
font-size: 18px;
line-height: 2;
`;


export default function Character(props) {
   const { charactersData } = props;

   return (
    <StyledContainer>
        {charactersData.map((char) => {
            return (
                <StyledDiv>
                   <StyledName>{char.name}</StyledName>
                       <StyledStats>
                           <div>Height: {char.height}</div>
                           <div>Hair Color: {char.hair_color}</div>
                           <div>Birth Year:{char.birth_year}</div>
                           <div>Weight: {char.mass}</div>
                       </StyledStats>
               </StyledDiv>
            )
        })}; 
    </StyledContainer>   
   )
}