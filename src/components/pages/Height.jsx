import React, { useState, useEffect }from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";

const StyledContainer = styled.div`
  flex-direction: column;
`;

const StyledQuestion = styled.div`
  /* background-color: #f7f7f7; */
  border-radius: 5px;
  font-weight: 700;
`;

const StyledMessage = styled.p`
`;
const StyledSliderContainer = styled.div`
  /* display: flex; */
  padding: 45px 25px 25px 25px;
`;

//Rangeslider
const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 55px;
`;
const StyledThumb = styled.div`
  display: flex;
  justify-content: center;
  height: 48px;
  line-height: 45px;
  width: 4px;
  text-align: right;
  font-size: 2rem;
  font-weight: 800;
  background-color: silver;
  border-top: 7px solid black;
  border-bottom: 8px solid black;
  color: black;
  cursor: grab;
  animation: textgrowth 2s infinite alternate;
  @keyframes textgrowth {
    0% {
    font-size: 2rem;
    }
    100% {
    font-size: 2.5rem;
    }
  }
`;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${props =>
    props.index === 2 ? "#f00" : props.index === 1 ? "silver" : "grey"};
`;

const SliderAdditions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1.5rem;
  background-color: white;
  border-top: 4px solid black;
  color: grey;
`;

const Height = ({childCallback, heigtValue}) => {
  const [message] = useState("")
  const [question] = useState("Hur lång är du?")
  const [max] = useState(220)
  const [min] = useState(70)
  const [deafault] = useState(Math.floor((max + min) / 2))

  useEffect(() => {
    if (heigtValue === null) {
      childCallback(deafault, "height")
    }
  }, [childCallback, heigtValue, deafault])

  const handleHeightChange = (props, state) => {
    childCallback(props, "height")
  }

  const Track = (props, state) => <StyledTrack {...props} index={state.index} />;
  const Thumb = (props, state) => ( <StyledThumb {...props}>{state.valueNow}</StyledThumb>);

  return (
    <StyledContainer>
      <StyledQuestion>
        {question}
      </StyledQuestion>
  
      <StyledSliderContainer>
        <StyledSlider
          max={max}
          min={min}
          defaultValue={[heigtValue ? heigtValue : deafault]}
          renderTrack={Track}
          renderThumb={Thumb}
          onAfterChange={handleHeightChange}
        />
        <SliderAdditions>
          <span>Min: {min}</span>
          <span>cm</span> 
          <span>Max: {max}</span>
        </SliderAdditions>
      </StyledSliderContainer>
      {/* <p>{ageValue}</p> */}
      <StyledMessage>{message}</StyledMessage> 

    </StyledContainer>
  );
}

export default Height;

