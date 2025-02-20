import React from "react";
import styled from "styled-components";
import Background from "../assets/startpage-assets/Background2.jpg";
import logo from "../assets/startpage-assets/Netflix_2015_logo.svg";
import TrendingSwiper from "../swiper-components/TrendingSwiper";
import Download from "../assets/startpage-icons/download.svg";
import Kids from "../assets/startpage-icons/kids.svg";
import Tele from "../assets/startpage-icons/television.svg";
import Mobile from "../assets/startpage-icons/mobile.svg";
import DropDownButton from "../sub-components-swipers/DropDownButton";
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  font-family: "Plus Jakarta Sans", serif;
  overflow-x: hidden;
  overflow-y: visible;
`;
const Section1 = styled.div`
  color: white;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -2;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    filter: brightness(0.6);
  }
  @media (max-width: 800px) {
    height: 30%;
  }
`;
const Section1Content = styled.div`
  color: white;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top: 20vh;
  @media (max-width: 800px) {
    margin-top: 6vh;
  }
`;
const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  max-width: 500px;
  text-align: center;
  margin-bottom: 8px;
  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
`;
const H2 = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 8px;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  
`;
const H3 = styled.h3`
  font-size: 1rem;
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`;
const CH2 = styled.h2`
  width:86%;
  @media (max-width:800px) {
    width:85%
  }
`;
const Section2 = styled.div`
  position: relative;
  color: white;
  background: radial-gradient(
      50% 500% at 50% -420%,
      rgba(64, 97, 231, 0.4) 80%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    black;
  display: flex;
  align-items: center;
  width: 200%;
  height: 146.7px;
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  margin-top: 100px;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    margin-top: -5px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: linear-gradient(
      to right,
      rgba(33, 13, 22, 1) 16%,
      rgba(184, 40, 105, 1),
      rgba(229, 9, 20, 1),
      rgba(184, 40, 105, 1),
      rgba(33, 13, 22, 1) 84%
    );
  }
`;
const GetStartedButton = styled.button`
  width: 160px;
  height: 45px;
  background: linear-gradient(to right, #628eff, #8740cd 53%, #580475);
  border-style: none;
  color: white;
  padding: 10px 14px;
  font-size: 22px;
  font-weight: 600;
  border-radius: 1px;
`;
const Logo = styled.img`
  width: 148px;
  height: 40px;
`;
const Topbar = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  height: 5.5rem;
  padding-top: 30px;
`;

const Section3 = styled.div`
  background: black;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column wrap;
  color: white;
`;
const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 30%;
  height:230px;
  padding: 10px 20px;
  border-radius: 1rem;
  background: linear-gradient(149deg, #192247 0%, #210e17 96.86%);
  @media (max-width:800px) {
    flex-basis: 42%;
    
  }
`;
const Info = styled.p`
  display: flex;
  font-size: 15px;
`;
const Icon = styled.img`
  max-height: 60px;
  max-width: 60px;
  align-self: flex-end;
  margin-top: auto;
`;
const Presentations=styled.div`
  width:86%;
  height:auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:15px;
  margin-bottom:50px;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }   
`;
const dropinfo = [
  {
    header: "What is netflix",
    info: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    header: "how much does netflix cost",
    info: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP 100 to EGP 240 a month. No extra costs, no contracts.",
  },
  {
    header: "where can i watch",
    info: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    header: "how can i cancel",
    info: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    header: "what can i watch on netflix",
    info: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
];
const presentation = [
  {
    header: "Enjoy on your TV",
    info: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,Blu-ray players, and more.",
    url: `${Tele}`
  },
  {
    header: "watch offline",
    info: "Save your favorites easily and always have something to watch.",
    url: `${Download}`
  },
  {
    header: "Watch Everywhere",
    info: "Stream unlimited movies and TV shows on your phone, tablet,laptop, and TV.",
    url: `${Mobile}`
  },
  {
    header: "profiles for kids",
    info: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    url: `${Kids}`
  },
];
export default function StartPage(props) {
  const { handlelogin } = props;
  const handleClick = (id) => {
    handlelogin(id);
  };
  return (
    <Container>
      <Section1>
        <Topbar>
          <Logo src={logo} alt="" />
          <Logo src={logo} alt="" />
        </Topbar>
        <Section1Content>
          <H1>Unlimited movies, TV shows, and more</H1>
          <H2>
            Starts at 15 USD. Cancel anytime.
          </H2>
          <H3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </H3>
        </Section1Content>
        <GetStartedButton
          id="login"
          onClick={(e) => {
            handleClick(e.target.id);
          }}
        >
          Get Started
        </GetStartedButton>
      </Section1>
      <Section2 />
      <Section3>
        <CH2>Trending Now</CH2>
        <TrendingSwiper />
        <CH2>More Reasons to Join</CH2>
        <Presentations>
          {presentation.map((card) => {
            return (
              <Card>
                <h2>{card.header}</h2>
                <Info>{card.info}</Info>
                <Icon src={card.url} />
              </Card>
            );
          })}
        </Presentations>
        <CH2>Frequently Asked Questions</CH2>
        {dropinfo.map((info, i) => {
          return <DropDownButton header={info.header} text={info.info} />;
        })}
      </Section3>
    </Container>
  );
}
