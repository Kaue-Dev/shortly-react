import styled from "styled-components";
import GetStarted from "./components/GetStartedSection/GetStarted";
import Header from "./components/Header/Header";
import URLInput from "./components/URLShorterInput/URLInput";
import Statistics from "./components/AdvancedStatistics/Statistics";
import Booster from "./components/Booster/Booster";
import Footer from "./components/Footer/Footer";

import { Slide } from "react-awesome-reveal";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <div>
        <Slide direction="down" triggerOnce={true}>
          <Header />
        </Slide>
        <GetStarted />
        <StyledContainer>
          <URLInput />
        </StyledContainer>
        <Statistics />
        <Booster />
        <Footer />
      </div>
    </>
  );
};

export default App;
