/* eslint-disable react/prop-types */
import styled from "styled-components"

import bgDesktop from '../../images/bg-boost-desktop.svg'
import bgMobile from '../../images/bg-boost-mobile.svg'

import { Fade } from "react-awesome-reveal"

const StyledContainer = styled.div`
  background-color: #EFF1F7; 
  padding-top: 120px;
`

const StyledBooster = styled.section`
  background-image: url(${bgDesktop});
  background-color: hsl(257, 27%, 26%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  h1 {
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
  }
  button {
    padding: 14px 36px;
    font-size: 18px;
  }
  @media (max-width: 780px) {
    text-align: center;
  }
  @media (max-width: 500px) {
    background-image: url(${bgMobile});
    h1 {
      font-size: 26px;
    }
    button {
      font-size: 16px;
    }
  }
`

const Booster = ({ scroll }) => {
  return (
    <StyledContainer>
      <StyledBooster>
        <Fade direction="left" triggerOnce={true}>
          <h1>Boost your links today</h1>
        </Fade>
        <Fade direction="right" triggerOnce={true}>
          <button onClick={scroll}>Get Started</button>
        </Fade>
      </StyledBooster>
    </StyledContainer>
  )
}

export default Booster