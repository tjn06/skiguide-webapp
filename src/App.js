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


