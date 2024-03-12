import styled from "styled-components";
import Card from "./Card";

import iconBrand from "../../images/icon-brand-recognition.svg";
import iconDetailed from "../../images/icon-detailed-records.svg";
import iconFully from "../../images/icon-fully-customizable.svg";

import { Slide } from "react-awesome-reveal";

const StyledStatistics = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #eff1f7;
  width: 100%;
  div.texts {
    display: flex;
    flex-direction: column;
    padding: 90px 0 100px 0;
    h1 {
      font-size: 32px;
      font-weight: 700;
    }
    p {
      max-width: 600px;
    }
  }
  div.cards {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    .card:nth-child(2) {
      margin-top: 40px;
    }
    .card:nth-child(3) {
      margin-top: 80px;
    }
  }
  @media (max-width: 1125px) {
    div.cards {
      .card:nth-child(2) {
        margin-top: 0;
      }
      .card:nth-child(3) {
        margin-top: 30px;
      }
    }
  }
  @media (max-width: 745px) {
    div.cards {
      .card:nth-child(2) {
        margin-top: 30px;
      }
    }
  }
`;

const Statistics = () => {
  return (
    <>
      <StyledStatistics>
        <div className="texts">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <Slide direction="up" triggerOnce={true} >
              <Card
                icon={iconBrand}
                title="Brand Recognition"
                description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
              />
            </Slide>
          </div>
          <div className="card">
            <Slide direction="up" triggerOnce={true} >
              <Card
                icon={iconDetailed}
                title="Detailed Records"
                description="Gain insights into who clicking your links. Knowing when and where people engage with your content helps inform better decisions"
              />
            </Slide>
          </div>
          <div className="card">
            <Slide direction="up" triggerOnce={true} >
              <Card
                icon={iconFully}
                title="Fully Customizable"
                description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              />
            </Slide>
          </div>
        </div>
      </StyledStatistics>
    </>
  );
};

export default Statistics;
