import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import cross from "../assets/icons-intro-page/cross.svg";
import TrendingSwiper from "../swiper-components/TrendingSwiper.jsx";
import download from "../assets/icons-intro-page/download.svg";
import kids from "../assets/icons-intro-page/kids.svg";
import tele from "../assets/icons-intro-page/television.svg";
import mobile from "../assets/icons-intro-page/mobile.svg";
import Banner from "../sub-components-intro-page/Banner.jsx";
import BannerContent from "../sub-components-intro-page/BannerContent.jsx";
import BannerH1 from "../sub-components-intro-page/BannerH1.jsx";
import BannerH2 from "../sub-components-intro-page/BannerH2.jsx";
import BannerH3 from "../sub-components-intro-page/BannerH3.jsx";
import GetStartedButton from "../sub-components-intro-page/GetStartedButton.jsx";
import BannerTopBar from "../sub-components-intro-page/BannerTopBar.jsx";
import Logo from "../sub-components-general/Logo.jsx";
import BannerBottom from "../sub-components-intro-page/BannerBottom.jsx";
import IntroStudio from "../sub-components-intro-page/IntroStudio.jsx";
import IntroStudioHeader from "../sub-components-intro-page/IntroStudioHeader.jsx";
import IntroStudioPresentation from "../sub-components-intro-page/IntroStudioPresentation.jsx";
import IntroStudioPresentationCard from "../sub-components-intro-page/IntroStudioPresentationCard.jsx";
import IntroStudioPresentationIcon from "../sub-components-intro-page/IntroStudipPresentationIcon.jsx";
import IntroStudioPresentationParagraph from "../sub-components-intro-page/IntroStudioPresentationParagraph.jsx";
import DropDownButton from "../sub-components-intro-page/DropDownButton.jsx";
import DropDownCard from "../sub-components-intro-page/DropDownCard.jsx";
import DropDownIcon from "../sub-components-intro-page/DropDownIcon.jsx";
import DropDownContainer from "../sub-components-intro-page/DropDownContainer.jsx";
import IntroBackground from "../sub-components-intro-page/IntroBackground.jsx";
import EmailFormRow from "../sub-components-intro-page/EmailFormRow.jsx";
import EmailInput from "../sub-components-intro-page/EmailInput.jsx";
import FloatingCTABar from "../sub-components-intro-page/FloatingCTABar.jsx";
import FloatingGetStartedButton from "../sub-components-intro-page/FloatingGetStartedButton.jsx";
import Footer from "../sub-components-intro-page/Footer.jsx";
import LanguageSelect from "../sub-components-intro-page/LanguageSelect.jsx";
import TopBarRight from "../sub-components-intro-page/TopBarRight.jsx";
import FooterIntroPage from "../sub-components-intro-page/Footer.jsx";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  font-family: "Plus Jakarta Sans", serif;
  overflow-x: visible;
  overflow-y: visible;
`;

const dropinfo = [
  {
    header: "What is StreamFlow ?",
    info: "StreamFlow is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    header: "How much does StreamFlow cost ?",
    info: "Watch StreamFlow on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP 100 to EGP 240 a month. No extra costs, no contracts.",
  },
  {
    header: "Where can i watch ?",
    info: "Watch anywhere, anytime. Sign in with your StreamFlow account to watch instantly on the web at our website from your personal computer or on any internet-connected device that offers the StreamFlow app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    header: "How can i cancel ?",
    info: "StreamFlow is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    header: "What can i watch on StreamFlow   ?",
    info: "StreamFlow has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
];
const presentation = [
  {
    header: "Enjoy on your TV",
    info: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,Blu-ray players, and more.",
    url: `${tele}`,
  },
  {
    header: "watch offline",
    info: "Save your favorites easily and always have something to watch.",
    url: `${download}`,
  },
  {
    header: "Watch Everywhere",
    info: "Stream unlimited movies and TV shows on your phone, tablet,laptop, and TV.",
    url: `${mobile}`,
  },
  {
    header: "profiles for kids",
    info: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    url: `${kids}`,
  },
];

export default function IntroPage(props) {
  const [show, setShow] = useState(null);
  const [email, setEmail] = useState("");
  const [emailBottom, setEmailBottom] = useState("");
  const { handlelogin } = props;
  const [inBottomSection, setInBottomSection] = useState(false);
  const [inTrendingSection, setInTrendingSection] = useState(false);
  const [trendingNode, setTrendingNode] = useState(null);
  const [bottomNode, setBottomNode] = useState(null);
  const showFloatingCTA = inTrendingSection || inBottomSection;

  const handleClick = (id) => {
    handlelogin(id);
  };
  const handleOpen = (index) => {
    if (index === show) {
      setShow(null);
    } else {
      setShow(index);
    }
  };

  const handleSignIn = () => {
    console.log("Sign In clicked");
  };

  const handleLanguageChange = (e) => {
    console.log("Language changed to:", e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Get Started submitted with email:", email);
  };

  const handleBottomEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Bottom Get Started submitted with email:", emailBottom);
  };
  const handleFloatingGetStarted = () => {
    console.log("Floating mobile Get Started clicked");
    handleClick("login");
  };

  const bottomSentinelRef = (node) => {
    setBottomNode(node);
  };

  const trendingSectionRef = (node) => {
    setTrendingNode(node);
  };

  useEffect(() => {
    if (!trendingNode) return;
    const trendingObserver = new IntersectionObserver(
      ([entry]) => {
        setInTrendingSection(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    trendingObserver.observe(trendingNode);
    return () => trendingObserver.disconnect();
  }, [trendingNode]);

  useEffect(() => {
    if (!bottomNode) return;
    const bottomObserver = new IntersectionObserver(
      ([entry]) => {
        setInBottomSection(entry.isIntersecting);
      },
      { threshold: 0.01 },
    );
    bottomObserver.observe(bottomNode);
    return () => bottomObserver.disconnect();
  }, [bottomNode]);

  return (
    <Container>
      <Banner>
        <BannerTopBar>
          <Logo type="Banner" src={logo} alt="" />
          <TopBarRight>
            <LanguageSelect defaultValue="en" onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="ar">عربي</option>
            </LanguageSelect>
            <GetStartedButton onClick={handleSignIn}>Sign In</GetStartedButton>
          </TopBarRight>
        </BannerTopBar>
        <BannerContent>
          <BannerH1>Unlimited movies, TV shows, and more</BannerH1>
          <BannerH2>Starts at 15 USD. Cancel anytime.</BannerH2>
          <BannerH3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </BannerH3>
        </BannerContent>
        <EmailFormRow onSubmit={handleEmailSubmit}>
          <EmailInput
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <GetStartedButton
            id="login"
            type="submit"
            onClick={(e) => {
              handleClick(e.target.id);
            }}
          >
            Get Started
          </GetStartedButton>
        </EmailFormRow>
      </Banner>
      <BannerBottom />
      <IntroStudio>
        <IntroBackground />
        <IntroStudioHeader>Trending Now </IntroStudioHeader>
        <TrendingSwiper />
        <IntroStudioHeader>More Reasons to Join</IntroStudioHeader>
        <div
          ref={trendingSectionRef}
          style={{ width: "100%", height: "1px" }}
        />
        <IntroStudioPresentation>
          {presentation.map((card) => {
            return (
              <IntroStudioPresentationCard>
                <h2>{card.header}</h2>
                <IntroStudioPresentationParagraph>
                  {card.info}
                </IntroStudioPresentationParagraph>
                <IntroStudioPresentationIcon src={card.url} />
              </IntroStudioPresentationCard>
            );
          })}
        </IntroStudioPresentation>
        <IntroStudioHeader>Frequently Asked Questions</IntroStudioHeader>
        {dropinfo.map((info, i) => {
          return (
            <DropDownContainer id={i}>
              <DropDownButton
                id={i}
                onClick={(e) => {
                  handleOpen(e.currentTarget.id);
                }}
              >
                {info.header}
                <DropDownIcon id={i} show={show} src={cross} alt="" />
              </DropDownButton>
              <DropDownCard id={i} show={show}>
                {info.info}
              </DropDownCard>
            </DropDownContainer>
          );
        })}
        <IntroStudioHeader type="secondary">
          Ready to watch? Enter your email to create or restart your membership.
        </IntroStudioHeader>
        <EmailFormRow onSubmit={handleBottomEmailSubmit}>
          <EmailInput
            type="email"
            placeholder="Email address"
            value={emailBottom}
            onChange={(e) => setEmailBottom(e.target.value)}
          />
          <GetStartedButton
            id="login"
            type="submit"
            onClick={(e) => {
              handleClick(e.target.id);
            }}
          >
            Get Started
          </GetStartedButton>
        </EmailFormRow>
      </IntroStudio>
      <FooterIntroPage />
      <div ref={bottomSentinelRef} style={{ width: "100%", height: "1px" }} />
      {typeof document !== "undefined" &&
        createPortal(
          <FloatingCTABar $visible={showFloatingCTA}>
            <FloatingGetStartedButton onClick={handleFloatingGetStarted}>
              Get Started
            </FloatingGetStartedButton>
          </FloatingCTABar>,
          document.body,
        )}
    </Container>
  );
}
