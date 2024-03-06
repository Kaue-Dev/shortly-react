import styled from 'styled-components'
import Card from './Card'

import iconBrand from '../../images/icon-brand-recognition.svg'
import iconDetailed from '../../images/icon-detailed-records.svg'
import iconFully from '../../images/icon-fully-customizable.svg'

const StyledStatistics = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #EFF1F7; 
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
  }
`

const Statistics = () => {
  return (
    <>
      <StyledStatistics>
        <div className='texts'>
          <h1>Advanced Statistics</h1>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className='cards'>
          <Card 
            icon={iconBrand}
            title="Brand Recognition"
            description="lorem ipsum dolor sit amet consectetur and consectetur adipiscing elit esse cillum dolore magna"
          />
          <Card 
            icon={iconDetailed}
            title="Detailed Records"
            description="lorem ipsum dolor sit amet consectetur and consectetur adipiscing elit esse cillum dolore magna"
          />
          <Card 
            icon={iconFully}
            title="Fully Customizable"
            description="lorem ipsum dolor sit amet consectetur and consectetur adipiscing elit esse cillum dolore magna"
          />
        </div>
      </StyledStatistics>
    </>
  )
}

export default Statistics