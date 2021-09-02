import React, { useState, useEffect }from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";

const StyledContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

const StyledSliderContainer = styled.div`
  padding: 45px 25px 25px 25px;
`;

const StyledInfoMessage = styled.p`
`;

const StyledChangeMessage = styled.span`
  font-size: 0.8rem;
  color: grey;
`
const StyledCentering = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledButton = styled.button`
  margin-top: 10px;
  background-color: black;
  padding: 3px;
  min-height: 25px;
`;

const StyledQuestion = styled.div`
  border-radius: 5px;
  font-weight: 700;
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
  animation: textgrowth 2s infinite alternate;
  @keyframes textgrowth {
    0% {
    font-size: 2rem;
    }
    100% {
    font-size: 2.5rem;
    }
  }
  cursor: grab;
`;
const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${props =>
    props.index === 2 ? "#f00" : props.index === 1 ? "silver" : "grey"};
`;

const StyledSliderNoInterval = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: grey;
  color: white;
  font-size: 2rem;
  font-weight: 800;  
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

const RecommendationComp = ({childCallback, resp, populateComp }) => {
  const [deviateRecommendation, setDeviateRecommendation] = useState(false)
  const [buttonMessage, setButtonMessage] = useState(populateComp.btnmessdeviate)
// console.log("inside", deviateRecommendation)
  const setLengthValue = (lengthValue, state) => {
    console.log("callback", deviateRecommendation)
      childCallback(lengthValue, "skilenght", deviateRecommendation)
  }

  useEffect(() => {
    setButtonMessage(!deviateRecommendation ? (populateComp.btnmessdeviate) : (populateComp.btnmessrecommended))
  }, [deviateRecommendation, resp.average, populateComp.btnmessdeviate, populateComp.btnmessrecommended])

  useEffect(() => {
      childCallback(resp.average, "skilenght", deviateRecommendation)
  }, [deviateRecommendation])

  const Track = (props, state) => <StyledTrack {...props} index={state.index} />;
  const Thumb = (props, state) => ( <StyledThumb {...props}>{state.valueNow}</StyledThumb>);

  return (
      <StyledContainer>
        
        <StyledQuestion>
          {deviateRecommendation ?  populateComp.deviatemessage : populateComp.recommendmessage }
        </StyledQuestion>

        <StyledCentering>
          <StyledButton onClick={() => setDeviateRecommendation(prev => !prev )}>
            {buttonMessage}
          </StyledButton>
        </StyledCentering>
    
        <StyledSliderContainer>
          {(resp.interval || deviateRecommendation) && 
            <StyledChangeMessage>
              {deviateRecommendation ? populateComp.intervalmessagenorec : populateComp.intervalmessage }
            </StyledChangeMessage>
          }

          {(!resp.interval && !deviateRecommendation) && 
            <StyledSliderNoInterval>
              {resp.average}
            </StyledSliderNoInterval>
          }
          
          {(resp.interval && !deviateRecommendation) &&
            <StyledSlider
              max={ !deviateRecommendation ? resp.recommendationhighest : resp.optionalinterval.highest }
              min={ !deviateRecommendation ? resp.recommendationlowest : resp.optionalinterval.lowest }
              defaultValue={[resp.average]}
              renderTrack={Track}
              renderThumb={Thumb}
              onAfterChange={setLengthValue}
            />
          }
          
          {deviateRecommendation &&
            <StyledSlider
            max={ resp.optionalinterval.highest }
            min={ resp.optionalinterval.lowest }
            defaultValue={[resp.average]}
            renderTrack={Track}
            renderThumb={Thumb}
            onAfterChange={setLengthValue}
            />
          }

          <SliderAdditions>
            <span>{populateComp.min} { deviateRecommendation ?  resp.optionalinterval.lowest : resp.recommendationlowest }</span>
            <span>{populateComp.cm}</span> 
            <span>{populateComp.max} { deviateRecommendation ? resp.optionalinterval.highest : resp.recommendationhighest }</span>
          </SliderAdditions>
        </StyledSliderContainer>

        <StyledInfoMessage>{deviateRecommendation ? populateComp.notrecommendedmessage : resp.message}</StyledInfoMessage> 

      </StyledContainer>
  );
}

export default RecommendationComp;

