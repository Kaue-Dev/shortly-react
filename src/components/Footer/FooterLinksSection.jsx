/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    color: #FFF;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: fit-content;
    a {
      width: fit-content;
    }
    a:hover {
      color: hsl(180, 66%, 49%);
    }
  }
`;

const FooterLinksSection = ({ title, ...props }) => {
  return (
    <StyledSection>
      <h3>{title}</h3>
      <div>
        <a href="">{props.firstLinkText}</a>
        <a href="">{props.secondLinkText}</a>
        <a href="">{props.thirdLinkText}</a>
        <a href="">{props.fourthLinkText}</a>
      </div>
    </StyledSection>
  );
};

export default FooterLinksSection;