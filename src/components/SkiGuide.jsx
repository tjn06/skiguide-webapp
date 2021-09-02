import React, { useState, useEffect }from "react";
import styled from "styled-components";

//Imported components
import IconSelection from './pages/IconSelection'
import Height from './pages/Height';
import RecommendationComp from './pages/RecommendationComp';
import Confirmed from './pages/Confirmed';
import UserDataPresentation from './presentation/UserDataPresentation'

//Populate components data
import { populateAgeData } from './data'
import { populateStyleData } from './data'
import { populateRecommendationComp } from './data'
import { populateConfirmedComp } from './data'

//Get information from fakeserver, (just functions from another file)
import { generateRecommendation } from './fakeServer.js'
import { confirmOrder } from './fakeServer.js'

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  width: 600px;
`;

const StyledHeightField = styled.div`
  border-radius: 50px;
  padding: 25px;
  flex-direction: column;
  background-color: white;
`;

const StyledBackToFirstPage = styled.u`
  cursor: pointer;
`;

const SkiGuide = () => {
  const [userData, setUserData] = useState({ agecase: null , height: null , stylecase: null });

  const [recommendation, setRecommendation] = useState(null);
  const [skiLenght, setSkiLength] = useState(null)
  const [skiLengthConfirmation, setSkiLengthConfirmation ] = useState(null);
  const [recommendedOrNot, setRecommendedOrNot] = useState(false)

  const [ageIsTouched, setAgeIsTouched] = useState(true)
  const [styleIsTouched, setStyleIsTouched] = useState(true)
  
  const [page, setPage] = useState(1)

  //Data from childcomponents, set state in parent (SkiGuide)
  const childCallback = (selectedFromChild, category, deviateRecommendation) => {
    if (category === "agecase") {
      setUserData({ ...userData, agecase: selectedFromChild })
    }
    if (category === "height") {
      setUserData({ ...userData, height: selectedFromChild })
    }
    if (category === "stylecase") {
      setUserData({ ...userData, stylecase: selectedFromChild })
    }
    if (category === "skilenght") {
      setSkiLength(selectedFromChild)
      setRecommendedOrNot(deviateRecommendation)
    }
    
  }

  //Fakerequest
  const getRecommendation = async (userDataToSend) => {
    const resp = await generateRecommendation(userDataToSend)
    console.log("RESP",resp)
    await setRecommendation(resp)
    setPage(prev=> prev + 1)
  }

  //Fakerequest
  const handleOrderRequest = async (skiLenght, recommendedOrNot) => {
    const userDataToSend = {skiLenght, recommendedOrNot}
    const resp = await confirmOrder(userDataToSend)
    console.log("confiii",resp)
    await setSkiLengthConfirmation(resp)
    setPage(prev=> prev + 1)
  }

  //Clear all, go to first page
  const handleNewRecommendation = () => {
    setUserData({ agecase: null , height: null , stylecase: null });
    setRecommendation(null);
    setSkiLength(null)
    setSkiLengthConfirmation(null);
    setAgeIsTouched(true)
    setStyleIsTouched(true)
    setPage(1)
  }

  //Check if icons/alternatives is selected, used to disable/undisable btns prevents you from go to next step
  useEffect(() => {
    if (userData.agecase) { 
      setAgeIsTouched(false)
    } else {
      setAgeIsTouched(true);
    }
    
    if (userData.stylecase) {
      setStyleIsTouched(false);
    } else {
      setStyleIsTouched(true);
    }

  }, [userData])

  //Buttons for handeling pages and requests
  const Buttons = (
    <>
    {page > 1 && 
      <button onClick={() => setPage(prev=> prev - 1) }>Tillbaka</button>}&nbsp;

      {page < Object.keys(userData).length && 
      <button disabled={ageIsTouched} onClick={() => setPage(prev=> prev + 1) }>Nästa</button>}

      {page === Object.keys(userData).length && 
      <button disabled={styleIsTouched} onClick={() => getRecommendation(userData) }>Få rekommendation</button>}

      {page === (Object.keys(userData).length + 1) && 
      <button disabled={styleIsTouched} onClick={() => handleOrderRequest(skiLenght, recommendedOrNot) }>Välj längden</button>}

      {page === (Object.keys(userData).length + 2) && 
      <button disabled={styleIsTouched} onClick={() => handleNewRecommendation() }>Ny rekommenadation</button>}
    </>
  )

        
  return (
    <StyledForm>
     <UserDataPresentation userData={userData}/>
      <StyledHeightField>
        {   
          (() => {
              switch (page) {
                case 1:/*Case 0 */
                  return (
                    <IconSelection childCallback={childCallback} userCase={userData.agecase} populateComp={populateAgeData}/> 
                  )
                case 2: /*Case 1 */
                  return ( 
                    <Height childCallback={childCallback} heigtValue={userData.height} />
                  )
                case 3:/*Case 2 */
                  return ( 
                    <IconSelection childCallback={childCallback} userCase={userData.stylecase} populateComp={populateStyleData}/> 
                  )
                case 4:
                  return ( 
                    <RecommendationComp childCallback={childCallback} resp={recommendation} populateComp={populateRecommendationComp}/> 
                  )
                case 5:
                  return ( 
                    <Confirmed skiLengthConfirmation={skiLengthConfirmation} populateComp={populateConfirmedComp}/> 
                  )
                  default:
                    return (
                      // <Age/>
                      <p>Något gick fel, <StyledBackToFirstPage onClick={() => setPage(1) }>gå tillbaka till början av guiden.</StyledBackToFirstPage></p>
                    );
              }
          })()
        }

        {Buttons}
        
      </StyledHeightField>

    </StyledForm>
  );
}

export default SkiGuide;

