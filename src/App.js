import './App.css';
import styled from'styled-components'
import SkiGuide from './components/SkiGuide';

import {ReactComponent as Logo} from './assets/logo.svg'

const StyledApp = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`;

const StyledLogo = styled(Logo)`
padding-top: 6%;
padding-bottom: 1rem;
`


function App() {
  return (
    <StyledApp>
        <StyledLogo />
        <SkiGuide />
    </StyledApp>
  );
}

export default App;

// Uppgiften
// Din uppgift är att konstruera en webbapplikation (server och klient) som hjälper
// användaren att välja rätt längd på längdskidor.
// Välj att lägga tyngd på den del du föredrar att arbeta med, föredrar du
// klientsideutveckling lägger du ett extra fokus där eller tvärtom.

// Kravspecifikation
// • Applikationen skall ha ett användargränssnitt (enkelt eller utförligt)
// • Applikationen skall kommunicera mellan klient och server
// • Användaren skall ange
// o Längd
// o Ålder
// o Klassisk eller fristil

// Rekommendationer vid beräkning av skidlängd
// • Barn 0-4 år: kroppslängd + 0 cm.
// 2 (2)

// • Barn 5-8 år: kroppslängd + 10 till 20 cm.
// • Klassisk: kroppslängd + 20cm. Klassiska skidor tillverkas bara till längder upp till
// 207cm.

// • Fristil: kroppslängd + 10 till 15 cm. Enligt tävlingsreglerna får inte skidan
// understiga kroppslängden med mer än 10cm.
