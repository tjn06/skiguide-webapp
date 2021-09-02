import React from "react";
import styled from "styled-components";

const StyledUserData = styled.div`
  height: 45px;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-around;
`;

const StyledSize = styled.span`
  width: 33%;
`;

const UserDataPresentation = ({userData}) => {

  const setAgeCase = (value) => { 
    if (value === 0 ) {
      return "Ålderspann: 0-4 år"
    } if (value === 1 )  {
      return "Ålderspann: 5-8 år"
    } if (value === 2 )  {
      return "Ålderspann: + 9 år >"
    }
  }

  const setStyleCase = (value) => { 
    if (value === 0 ) {
      return "Skidstil: Klassisk"
    } if (value === 1 )  {
      return "Skidstil: Fristil"
    }
  }

  const setHeightCase = (value) => { 
    if (value) {
      return "Din längd: " + value;
    }
  }

  const prestationValue = (key, value) => {
    switch(key) {
    case "agecase":
      return setAgeCase(value)
    case "height":
      return setHeightCase(value)
    case "stylecase": 
      return setStyleCase(value)
    default:
      return 
    }
  }
  
  return (
    <StyledUserData>
      { Object.entries(userData).map(([key, value]) => {
        return <StyledSize key={key}> {prestationValue(key, value)} </StyledSize>
      })}
    </StyledUserData>
  );
}

export default UserDataPresentation;

// const prestationValue = (key, value) => {
//   if (key === "agecase") {
//     if (value === 0 ) {
//       return "Ålderspann: 0-4 år"
//     } if (value === 1 )  {
//       return "Ålderspann: 5-9 år"
//     } if (value === 2 )  {
//       return "Ålderspann: + 9 år >>  år"
//     }
//   } else if (key === "height") {
//       if (value) {
//         return "Din längd: " + value;
//       }
//   } else if (key === "stylecase") {
//     if (value === 0 ) {
//       return "Skidstil: Klassisk"
//     } if (value === 1 )  {
//       return "Skidstil: Fristil"
//     }
//   } 
// }