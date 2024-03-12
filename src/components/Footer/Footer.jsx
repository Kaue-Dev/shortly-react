import styled from 'styled-components'
import FooterLinksSection from './FooterLinksSection'

import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'
import pinterest from '../../images/icon-pinterest.svg'
import instagram from '../../images/icon-instagram.svg'

const StyledFooter = styled.footer`
  background-color: hsl(260, 8%, 14%);
  height: 300px;
  display: flex;
  gap: 120px;
  justify-content: center;
  align-items: flex-start;
  padding-top: 90px;
  h1 {
    font-size: 32px;
    margin-right: 150px;
    font-weight: 700;
    color: #FFF;
  }
  .links {
    display: flex;
    gap: 90px;
  }
  .socialMediaIcons {
    display: flex;
    gap: 20px;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <h1>Shortly</h1>
      </div>
      <div className='links'>
        <FooterLinksSection 
          title='Features'
          firstLinkText='Link Shortening'
          secondLinkText='Branded Links'
          thirdLinkText='Analytics'
        />
        <FooterLinksSection 
          title='Resources'
          firstLinkText='Blog'
          secondLinkText='Developers'
          thirdLinkText='Support'
        />
        <FooterLinksSection 
          title='Company'
          firstLinkText='About'
          secondLinkText='Our Team'
          thirdLinkText='Careers'
          fourthLinkText='Contact'
        /> 
      </div>
      <div className='socialMediaIcons'>
        <a href="">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="">
          <img src={pinterest} alt="Pinterest" />
        </a>
        <a href="">
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer