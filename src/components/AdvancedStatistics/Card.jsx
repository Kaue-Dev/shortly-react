/* eslint-disable react/prop-types */
import styled from 'styled-components'

const StyledCard = styled.div`
  max-width: 350px;
  height: 250px;
  text-align: start;
  border-radius: 12px;
  background-color: #FFF;
  padding: 30px;
  margin-bottom: 200px;
  position: relative;
  display: flex;
  align-items: center;
  div.imgContainer {
    background-color: hsl(257, 27%, 26%);
    padding: 20px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: -40px;
  } 
  div.titleAndDescription {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 30px;
    h3 {
      font-weight: 700;
      font-size: 18px;
    }
  }
`

const Card = ({ icon, title, description }) => {
  return (
    <StyledCard>
      <div className='imgContainer'>
        <img src={icon} alt="Card Icon" width={40} />
      </div>
      <div className='titleAndDescription'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </StyledCard>
  )
}

export default Card