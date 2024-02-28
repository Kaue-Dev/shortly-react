/* eslint-disable react/prop-types */
import styled from "styled-components"

const StyledURL = styled.section`
  background-color: #FFF;
  width: 900px;
  border-radius: 12px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  div p {
    color: hsl(260, 8%, 14%);
  }
  .shortURLAndButton {
    display: flex;
    align-items: center;
    gap: 30px;
    a {
      color: hsl(180, 66%, 49%);
    }
    button {
      border-radius: 12px;
    }
  }
`

const URLShorted = ({ originalURL, shortedURL }) => {
  return (
    <>
      <StyledURL>
        <div>
          <p>{originalURL}</p>
        </div>
        <div className="shortURLAndButton">
          <a href={shortedURL} target="_blank">{shortedURL}</a>
          <button>Copy</button>
        </div>
      </StyledURL>
    </>
  )
}

export default URLShorted