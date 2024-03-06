import styled from "styled-components"
import GetStarted from "./components/GetStartedSection/GetStarted"
import Header from "./components/Header/Header"
import URLInput from "./components/URLShorterInput/URLInput"
import Statistics from "./components/AdvancedStatistics/Statistics"

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`

const App = () => {
  return (
    <>
      <div>
        <Header />
        <GetStarted />
        <StyledContainer>
          <URLInput />
        </StyledContainer>
        <Statistics />
      </div>
    </>
  )
}

export default App