import styled from "styled-components";
import svg from "../../images/illustration-working.svg";

import { Slide } from "react-awesome-reveal";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  overflow-x: hidden;
  .textsAndButton {
    padding: 0px 80px;
    h1 {
      font-size: 64px;
      width: 500px;
      font-weight: 700;
      line-height: 75px;
    }
    p {
      margin-bottom: 30px;
      width: 400px;
    }
  }
  @media (max-width: 780px) {
    // Tablet
    flex-direction: column-reverse;
    .textsAndButton {
      text-align: center;
      h1 {
        font-size: 52px;
        line-height: 65px;
      }
      h1,
      p {
        width: 100%;
      }
    }
    img {
      width: 500px;
    }
  }
  @media (max-width: 500px) {
    // Mobile
    .textsAndButton {
      h1 {
        font-size: 48px;
        line-height: 55px;
      }
    }
    img {
      width: 400px;
    }
  }
`;

const GetStarted = () => {
  return (
    <>
      <StyledSection>
        <Slide direction="left" triggerOnce={true}>
          <div className="textsAndButton">
            <h1>More than just shorter links</h1>
            <p>
              Build your brands recognation and get detailed insights on how
              your links are performing.
            </p>
            <button>Get Started</button>
          </div>
        </Slide>
        <div>
          <img src={svg} alt="People on Computer" />
        </div>
      </StyledSection>
    </>
  );
};

export default GetStarted;
