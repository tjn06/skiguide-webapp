import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

const StyledLength = styled.div `
  font-size: 3rem;
  padding: 2rem 0rem 0rem 0rem;
  font-weight: 800;
`;

const StyledStatement = styled.div`
  /* background-color: #f7f7f7; */
  border-radius: 5px;
  font-weight: 700;
`;

const StyledRecMess = styled.span`
  font-size: 0.8rem;
  /* color: ${props => props.recommended ? "red" : "green"}; */
  padding-bottom: 3rem;
`;

const Confirmed = ({skiLengthConfirmation, populateComp }) => {
  
  return (
      <StyledContainer>
        <StyledStatement>{populateComp.confirmedstatement}</StyledStatement> 
        <StyledLength>{skiLengthConfirmation.skiLenght} cm</StyledLength>
        <StyledRecMess>
          {skiLengthConfirmation.recommendedOrNot ? populateComp.notrecommended: populateComp.recommended}
        </StyledRecMess>
      </StyledContainer>
  );
}


export default Confirmed;
