import styled from "styled-components";
import GetStarted from "./components/GetStartedSection/GetStarted";
import Header from "./components/Header/Header";
import URLInput from "./components/URLShorterInput/URLInput";
import Statistics from "./components/AdvancedStatistics/Statistics";
import Booster from "./components/Booster/Booster";
import Footer from "./components/Footer/Footer";

import { Slide } from "react-awesome-reveal";
import { useRef } from "react";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {

  const ref = useRef()

  const scroll = () => {
    console.log(ref);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div>
        <Slide direction="down" triggerOnce={true}>
          <Header />
        </Slide>
        <GetStarted scroll={scroll} />
        <StyledContainer ref={ref}>
          <URLInput />
        </StyledContainer>
        <Statistics />
        <Booster scroll={scroll} />
        <Footer />
      </div>
    </>
  );
};

export default App;
