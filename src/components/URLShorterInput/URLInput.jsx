import styled from "styled-components"
import bg from "../../images/bg-shorten-desktop.svg"
import { useState } from "react"
import axios from "axios"

const StyledInputSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${bg});
  background-repeat: no-repeat;
  padding: 30px;
  background-size: cover;
  width: 900px;
  border-radius: 12px;
  margin: 90px 0;
  div {
    display: flex;
    gap: 20px;
    input {
      border: 0;
      outline: 0;
      padding: 16px;
      width: 600px;
    }
    input, button {
      border-radius: 12px;
      height: 50px;
    }
  }
  
`

// https://ulvis.net/api.php?url=YOUR-LONG-URL&custom=YOUR-CUSTOM-NAME&private=1
const API_URL = `http://localhost:3001/shorten?url=`

const URLInput = () => {

  const [inputValue, setInputValue] = useState('')
  const [shortURL, setShortURL] = useState('')

  const handleClick = async () => {
    await axios.get(`${API_URL}${inputValue}`)
    .then(res => {
      setShortURL(res.data)
    })
    .catch(err => {
      console.log("Error:", err.message)
    })
  }

  return (
    <>
      <StyledInputSection>
        <div>
          <input 
            type="text" placeholder="Shorten a link here..." 
            onChange={ev => setInputValue(ev.target.value)} 
          />
          <button onClick={handleClick}>Shorten it!</button>
        </div>
      </StyledInputSection>
    </>
  )
}

export default URLInput