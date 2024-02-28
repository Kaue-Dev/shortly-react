/* eslint-disable no-unused-vars */
import styled from "styled-components"
import bgDesktop from "../../images/bg-shorten-desktop.svg"
import { useState } from "react"
import axios from "axios"
import URLShorted from "./URLShorted"

const StyledInputSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${bgDesktop});
  background-repeat: no-repeat;
  padding: 30px;
  background-size: cover;
  width: 900px;
  border-radius: 12px;
  margin-bottom: 20px;
  div {
    display: flex;
    gap: 20px;
    button {
      border-radius: 12px;
      height: 50px;
    }
  }
  span {
    color: #f46262;
    font-style: italic;
    padding: 10px 0 0 10px;
  }
`

const StyledInput = styled.input`
  border: 0;
  outline: 0;
  padding: 16px;
  width: 600px;
  border-radius: 12px;
  height: 50px;
  border: 2px solid ${(props) => props.$isInvalid ? '#f46262' : 'transparent'};
  &::placeholder {
    color: ${(props) => props.$isInvalid ? '#f46262' : '#757575'};
  }
`

// https://ulvis.net/api.php?url=YOUR-LONG-URL&custom=YOUR-CUSTOM-NAME&private=1
const API_URL = `http://localhost:3001/shorten?url=`

const URLInput = () => {

  const [inputValue, setInputValue] = useState('')
  const [inputInvalid, setInputInvalid] = useState(false)
  const [shortURL, setShortURL] = useState('') // Verificar isso aqui depois
  const [loading, setLoading] = useState(false)
  const [URLS, setURLS] = useState([])
  const [shortedURLS, setShortedURLS] = useState([])

  const handleClick = async () => {
    setLoading(true)
    setInputInvalid(false)
    await axios.get(`${API_URL}${inputValue}`)
    .then(res => {
      if (inputValue === '') {
        setInputInvalid(true)
      } else {
        const shortURL = res.data
        setShortURL(shortURL) // Verificar isso aqui depois
        setShortedURLS(prevURLs => [...prevURLs, shortURL])
        setURLS(prevURLs => [...prevURLs, inputValue])
      }
    })
    .catch(err => {
      console.log("Error:", err.message)
    })
    .finally(() => {
      setLoading(false)
      setInputValue('')
    })
  }
  
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#EFF1F7", width: "100%", marginTop: "90px"}}>
      <StyledInputSection>
        <div>
          <StyledInput 
            type="text" placeholder="Shorten a link here..."
            value={inputValue} 
            onChange={ev => setInputValue(ev.target.value)} 
            $isInvalid={inputInvalid}
          />
          <button onClick={handleClick}>
            {loading ? `Loading...` : 'Shorten it!'}
          </button>
        </div>
        {inputInvalid && <span>Please add a link</span>}
      </StyledInputSection>
      <div>
        {
          shortedURLS.length <= 0 ? '' : 
          shortedURLS.map((url, i) => <URLShorted key={i} originalURL={URLS[i]} shortedURL={url} />)
        }
      </div>
    </div>
  )
}

export default URLInput