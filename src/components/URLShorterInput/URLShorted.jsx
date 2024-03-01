/* eslint-disable react/prop-types */
import { useState } from "react"
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
    width: 450px;
    overflow-x: hidden;
    white-space: nowrap;
  }
  .shortURLAndButton {
    display: flex;
    align-items: center;
    gap: 30px;
    a {
      color: hsl(180, 66%, 49%);
    }
  }
  @media (max-width: 780px) {
    width: 650px;
    div p {
      width: 250px;
    }
    .shortURLAndButton {
      gap: 16px;
    }
  }
  @media (max-width: 500px) {
    width: 330px;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20px 0 20px;
    gap: 20px;
    div p {
      width: 280px;
    }
    .shortURLAndButton {
      border-top: 1px solid #bfbfbf;
      padding: 20px 0;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`

const StyledButton = styled.button`
  border-radius: 12px;
  background-color: ${(props) => props.$copied ? '#3b3054' : '#2acfcf'};
  &:hover {
    background-color: ${(props) => props.$copied ? '#4a3f68' : '#1bc0c0'};
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`

const URLShorted = ({ originalURL, shortedURL }) => {

  const [copied, setCopied] = useState(false)

  const copyURL = () => {
    try {
      navigator.clipboard.writeText(shortedURL)
      setCopied(!copied)
    } catch (err) {
      console.log('Erro ao copiar URL', err.message)
    }
  }

  return (
    <>
      <StyledURL>
        <div>
          <p>{originalURL}</p>
        </div>
        <div className="shortURLAndButton">
          <a href={shortedURL} target="_blank">{shortedURL}</a>
          <StyledButton onClick={copyURL} $copied={copied}>{copied ? 'Copied!' : 'Copy'}</StyledButton>
        </div>
      </StyledURL>
    </>
  )
}

export default URLShorted