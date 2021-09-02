import React, { useState, useEffect }from "react";
import styled from "styled-components";
import AgeCase from '../dynamicsvg/AlterantiveIcons';

const StyledContainer = styled.div`
  flex-direction: column;
`;

const StyledQuestion = styled.div`
  background-color: #f7f7f7;
`;

const StyledCases = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 45px 25px 25px 25px;
`;

const StyledMessage = styled.p`
`;

const SkiStyle = ({childCallback, selectedSkiStyle}) => {
  const [message, setMessage] = useState()
  const [question] = useState("Vilken skidstil väljer du?")

  const handleStyleClick = (selecteSkiStyle) => {
    childCallback(selecteSkiStyle, "stylecase")
    }

    useEffect(() => {
      if(selectedSkiStyle[0].selected) {
        setMessage("Klassisk");
      } else if(selectedSkiStyle[1].selected)  {
        setMessage("Fristil");
      } else {
        setMessage("")
      }
    }, [selectedSkiStyle])

    return (
      <StyledContainer>
        <StyledQuestion>
          {question}
        </StyledQuestion>
    
        <StyledCases>
          <div onClick={() => handleStyleClick(0)}><AgeCase width={"100px"} clickedItem={selectedSkiStyle[0].selected} id={"classic"} iconText={"Klassisk"}/></div>
          <div onClick={() => handleStyleClick(1)}><AgeCase width={"100px"} clickedItem={selectedSkiStyle[1].selected} id={"freestyle"} iconText={"Fristil"}/></div>
        </StyledCases>
        <StyledMessage>{message}</StyledMessage> 
    
      </StyledContainer>
    );
    }

export default SkiStyle;



