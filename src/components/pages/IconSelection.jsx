import React, { useState, useEffect }from "react";
import styled from "styled-components";
import IconCase from '../dynamicsvg/DynamicIcons';

const StyledContainer = styled.div`
  flex-direction: column;
`;

const StyledQuestion = styled.div`
  /* background-color: #f7f7f7; */
  border-radius: 5px;
  font-weight: 700;
`;

const StyledCases = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 45px 25px 25px 25px;
`;

const StyledMessage = styled.p`
`;

const IconSelection = ({childCallback, userCase, populateComp}) => {
  const [message, setMessage] = useState()
  const [selectedArr, setSelectedArr] = useState([{selected: false },{selected: false}, {selected: false}]);

  const handleAgeCaseClick = (selectedAgeCase) => {
    childCallback(selectedAgeCase, populateComp[0].case)
    }

    useEffect(() => {
      if(selectedArr[0].selected) {
        setMessage(populateComp[0].caseinfo);
      } else if(selectedArr[1].selected)  {
        setMessage(populateComp[1].caseinfo);
      } else if(selectedArr[2]?.selected)  {
        setMessage(populateComp[2]?.caseinfo);
      } else {
        setMessage("")
      }
    }, [selectedArr, populateComp])

    useEffect(() => {
      if (userCase !== null) { 
        setSelectedArr( prev => prev.map((item, i) =>
        i === userCase
          ? { ...item, selected: true }
          : { ...item, selected: false}
        ))
      }
    }, [userCase])

    return (
      <StyledContainer>
        <StyledQuestion>{populateComp[0].titlequestion}</StyledQuestion>
    
        <StyledCases>
          {populateComp.map((item, i) => 
            <div key={item.id} onClick={() => handleAgeCaseClick(i)}><IconCase width={item.width} clickedItem={selectedArr[i].selected} id={item.id} iconText={item.iconText}/></div>
          )}
        </StyledCases>

        <StyledMessage>{message}</StyledMessage> 
    
      </StyledContainer>
    );
    }

export default IconSelection;



