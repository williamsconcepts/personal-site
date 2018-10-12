import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
`;

const SocialIcons = styled.div`
  width: 280px;
  margin: 38px auto 10px;
  padding-bottom: 0;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IconLink = styled.a`
  text-decoration: none;
  outline: 0;
  @media (min-width: 420px) {
    width: 320px;
  }
`;

const Icon = styled.img`
  height: 30px;
  width: auto;
`;

const Copyright = styled.p`
  font-family: 'Montserrat', 'Helvetica', sans-serif;
  {/* // color defined inline */}
  text-align: center;
  font-weight: 200;
  font-size: 14px;
  letter-spacing: 2px;
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <SocialIcons>
          <IconLink href="https://twitter.com/jacobdcastro" target="_blank">
            <Icon src={this.props.backgroundIsBlack ? require('../images/icons/twitter-white.svg') : require('../images/icons/twitter-black.svg')} alt="Twitter" />
          </IconLink>
          <IconLink href="https://www.instagram.com/jacobdcastro/" target="_blank">
            <Icon src={this.props.backgroundIsBlack ? require('../images/icons/instagram-logo-white.svg') : require('../images/icons/instagram-logo-black.svg')} alt="Intstagram" />
          </IconLink>
          <IconLink href="https://www.facebook.com/jacobdcastro/" target="_blank">
            <Icon src={this.props.backgroundIsBlack ? require('../images/icons/facebook-letter-logo-white.svg') : require('../images/icons/facebook-letter-logo-black.svg')} alt="Facebook" />
          </IconLink>
          <IconLink href="https://github.com/jacobdcastro" target="_blank">
            <Icon src={this.props.backgroundIsBlack ? require('../images/icons/github-logo-white.svg') : require('../images/icons/github-logo-black.svg')} alt="Github" />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/jacob-c-5b6257a4/" target="_blank">
            <Icon src={this.props.backgroundIsBlack ? require('../images/icons/linkedin-logo-white.svg') : require('../images/icons/linkedin-logo-black.svg')} alt="Linkedin" />
          </IconLink>
          {/* <Link href="https://www.medium.com/jacobdcastro" target="_blank"><img className="socialIcon" src="images/icons/medium-logo.svg" alt="Medium" /></a> */}
        </SocialIcons>
        <Copyright style={this.props.backgroundIsBlack ? {color:'white'} : {color:'black'}}>&copy; Jacob D. Castro - 2018</Copyright>
      </FooterContainer>
    );
  }
}

export default Footer;