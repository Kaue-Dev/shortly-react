import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 80px;
  .titleAndLinks {
    display: flex;
    align-items: center;
    gap: 30px;
    h1 {
      font-size: 32px;
      margin-right: 40px;
      cursor: pointer;
      font-weight: 700;
    }
  }
  a {
    font-weight: 700;
    transition: .2s;
  }
  a:hover {
    color: hsl(255, 11%, 22%);
  }
  .buttons {
    display: flex;
    gap: 40px;
    align-items: center;
  }
  @media (max-width: 780px) { // Tablet
    width: 100%;
    padding: 18px;
    .titleAndLinks {
      gap: 22px;
      a {
        display: none;
      }
      h1 {
        margin-right: 8px;
      }
    }
    .buttons {
      gap: 22px;
    }
  }
  @media (max-width: 500px) { // Celular
    padding: 12px;
    .titleAndLinks h1 {
      font-size: 24px;
    }
    .buttons {
      gap: 18px;
      button {
        padding: 8px 22px;
        font-size: 14px;
      }
      a {
        font-size: 14px;
      }
    }  
  }
`

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="titleAndLinks">
          <h1>Shortly</h1>
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Resources</a>
        </div>
        <div className="buttons">
          <a href="">Login</a>
          <button>Sign Up</button>
        </div>
      </StyledHeader>
    </>
  )
}

export default Header