import styled from "styled-components";
import bgDesktop from "../../images/bg-shorten-desktop.svg";
import bgMobile from "../../images/bg-shorten-mobile.svg";
import { useRef, useState } from "react";
import axios from "axios";
import URLShorted from "./URLShorted";
import { Slide } from "react-awesome-reveal";

const StyledContainer = styled.div`
  background-color: #eff1f7;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  overflow: hidden;
`;

const StyledInputSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${bgDesktop});
  background-repeat: no-repeat;
  padding: 40px 0;
  padding-left: 60px;
  background-size: cover;
  width: 900px;
  border-radius: 12px;
  margin: 30px 0;
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
  @media (max-width: 780px) {
    width: 650px;
    padding: 30px;
    button {
      width: 190px;
    }
  }
  @media (max-width: 500px) {
    background-image: url(${bgMobile});
    width: 330px;
    div {
      flex-direction: column;
      button {
        width: 100%;
      }
    }
  }
`;

const StyledInput = styled.input`
  border: 0;
  outline: 0;
  padding: 16px;
  width: 600px;
  border-radius: 12px;
  height: 50px;
  border: 2px solid ${(props) => (props.$isInvalid ? "#f46262" : "transparent")};
  &::placeholder {
    color: ${(props) => (props.$isInvalid ? "#f46262" : "#757575")};
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

// https://ulvis.net/api.php?url=YOUR-LONG-URL&custom=YOUR-CUSTOM-NAME&private=1
const API_URL = `http://localhost:3001/shorten?url=`;

const URLInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputInvalid, setInputInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [URLS, setURLS] = useState([]);
  const [shortedURLS, setShortedURLS] = useState([]);

  const handleClick = async () => {
    setLoading(true);
    setInputInvalid(false);
    await axios
      .get(`${API_URL}${inputValue}`)
      .then((res) => {
        if (inputValue === "") {
          setInputInvalid(true);
        } else {
          if (res.data === "Error: Invalid Url!") {
            setInputInvalid(true);
            return;
          }
          const shortURL = res.data;
          setShortedURLS((prevURLs) => [...prevURLs, shortURL]);
          setURLS((prevURLs) => [...prevURLs, inputValue]);
        }
      })
      .catch((err) => {
        console.log("Error:", err.message);
      })
      .finally(() => {
        setLoading(false);
        setInputValue("");
      });
  };

  const ref = useRef()

  return (
    <StyledContainer>
      <Slide direction="up" triggerOnce={true} >
        <StyledInputSection ref={ref}>
          <div>
            <StyledInput
              type="text"
              placeholder="Shorten a link here..."
              value={inputValue}
              onChange={(ev) => setInputValue(ev.target.value)}
              $isInvalid={inputInvalid}
            />
            <button onClick={handleClick}>
              {loading ? `Loading...` : "Shorten it!"}
            </button>
          </div>
          {inputInvalid && <span>Please add a link</span>}
        </StyledInputSection>
      </Slide>
      <div>
        {shortedURLS.length <= 0
          ? ""
          : shortedURLS.map((url, i) => (
              <URLShorted key={i} originalURL={URLS[i]} shortedURL={url} />
            ))}
      </div>
    </StyledContainer>
  );
};

export default URLInput;
