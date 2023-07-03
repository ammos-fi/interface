import { Trans } from "@lingui/macro";
import herobg from "assets/images/waves.png";
import waves from "assets/images/waves_tiled.png";
import { Trace, TraceEvent } from "@uniswap/analytics";
import {
  BrowserEvent,
  InterfaceElementName,
  InterfacePageName,
  SharedEventName,
} from "@uniswap/analytics-events";
import { AboutFooter } from "components/About/AboutFooter";
import { useAccountDrawer } from "components/AccountDrawer";
import { BaseButton } from "components/Button";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as NativeLink } from "react-router-dom";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useAppSelector } from "state/hooks";
import styled, { css } from "styled-components/macro";
import { BREAKPOINTS } from "theme";
import { useIsDarkMode } from "theme/components/ThemeToggle";
import { TRANSITION_DURATIONS } from "theme/styles";
import { Z_INDEX } from "theme/zIndex";

const PageContainer = styled.div`
  padding: 0;
  margin-top: ${({ theme }) => -theme.navHeight}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
  overflow-x: hidden;
`;

const Gradient = styled.div<{ isDarkMode: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  width: 100%;
  min-height: 550px;
  ${({ isDarkMode }) =>
    isDarkMode
      ? css`
          background: linear-gradient(
            rgba(8, 10, 24, 0) 0%,
            rgb(8 10 24 / 100%) 45%
          );
        `
      : css`
          background: linear-gradient(
            rgba(255, 255, 255, 0) 0%,
            rgb(255 255 255 /100%) 45%
          );
        `};
  z-index: ${Z_INDEX.under_dropdown};
  pointer-events: none;
  height: ${({ theme }) => `calc(100vh - ${theme.mobileBottomBarHeight}px)`};
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    height: 100vh;
  }
`;

const ContentContainer = styled.div<{ isDarkMode: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 40px;
  min-height: 500px;
  transition: ${({ theme }) =>
    `${theme.transition.duration.medium} ${theme.transition.timing.ease} opacity`};
  pointer-events: none;
  * {
    pointer-events: auto;
  }
`;

const TitleText = styled.h1<{ isDarkMode: boolean }>`
  color: transparent;
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  margin: 0 0 24px;
  text-align: center;
  background: linear-gradient(20deg, #fbbf24 10%, #ea580c 100%);
  background-clip: text;
  -webkit-background-clip: text;

  @media screen and (min-width: ${BREAKPOINTS.sm}px) {
    font-size: 48px;
    line-height: 56px;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    font-size: 64px;
    line-height: 72px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    font-size: 90px;
    line-height: 100px;
  }
`;

const SubText = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  max-width: 600px;
  margin: 0 0 32px;
  text-align: center;

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const SubTextContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LandingButton = styled(BaseButton)`
  padding: 16px 0px;
  border-radius: 24px;
`;

const ButtonCTA = styled(LandingButton)`
  margin-top: 32px;
  background: linear-gradient(93.06deg, #fbbf24 2.66%, #ea580c 98.99%);
  border: none;
  color: ${({ theme }) => theme.white};
  transition: ${({ theme }) =>
    `all ${theme.transition.duration.medium} ${theme.transition.timing.ease}`};

  &:hover {
    box-shadow: 0px 0px 16px 0px #fbbf24;
  }
`;

const ButtonCTAText = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;

  @media screen and (min-width: ${BREAKPOINTS.sm}px) {
    font-size: 20px;
  }
`;

const ActionsContainer = styled.span`
  max-width: 300px;
  width: 100%;
  pointer-events: auto;
`;

const AboutContentContainer = styled.div<{ isDarkMode: boolean }>`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 5rem;
  width: 100%;
  box-shadow: 0 0 200px 200px black;
  z-index: ${Z_INDEX.under_dropdown};
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    padding: 0 96px 5rem;
  }
`;

const LinkCss = css`
  text-decoration: none;
  max-width: 480px;
  width: 100%;
`;

const Link = styled(NativeLink)`
  ${LinkCss}
`;

const FeaturesContainer = styled.div`
  z-index: ${Z_INDEX.under_dropdown};
  position: relative;
  width: 100%;
  padding: 50px;
  background: black;
  box-shadow: 0 0 100px 100px black;
`;

const FeaturesWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const FeaturesTitle = styled.h2`
  color: transparent;
  background: linear-gradient(20deg, #fbbf24 10%, #ea580c 100%);
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  margin: 0 0 24px;
  text-align: center;
`;

import React from "react";

const HeroBG = ({ scale, opacity }: { scale: number; opacity: number }) => {
  return (
    <motion.div
      style={{
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        position: "fixed",
        backgroundImage: `url(${herobg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
        scale: scale,
        opacity: opacity,
      }}
    />
  );
};

const FeatureBox = ({ title, content }: { title: string; content: string }) => {
  const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 50px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: #121212f2;
    transition: all 0.3s ease-in-out;

    &:hover {
      height: calc(100% - 5px);
      transition: all 0.3s ease-in-out;
    }
  `;

  const Outer = styled.div`
    border-radius: 20px;
    padding: 1px;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 1;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-5px);
      transition: transform 0.3s ease-in-out;
    }

    &::before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(93.06deg, #ea580c 2.66%, #fbbf24 98.99%);
      z-index: -1;
      transition: opacity 0.3s ease-in-out;
      opacity: 0;
      border-radius: 20px;
    }

    &:hover::before {
      opacity: 1;
    }
  `;

  const Title = styled.h3``;
  const Content = styled.p`
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    color: ${({ theme }) => theme.textSecondary};
  `;

  return (
    <Outer>
      <Inner>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </Inner>
    </Outer>
  );
};

const FeatureBoxContainer = ({ children }: { children?: React.ReactNode }) => {
  const Outer = styled.div`
    position: relative;
    margin: 0 auto;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px 20px;
    grid-auto-flow: row;
  `;

  const Arrow = () => {
    const Outer = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #121212;
      border: 1px solid rgba(255, 255, 255, 0.05);
      z-index: ${Z_INDEX.under_dropdown};
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    return (
      <Outer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-trending-up"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      </Outer>
    );
  };

  return (
    <Outer>
      <Arrow />
      {children}
    </Outer>
  );
};

const Features = [
  {
    title: "Ultra-Concentrated Liquidity Bins",
    content:
      "Pools have extremely thin liquidity bins to create minimum slippage and maximum amount of fees generated for LPs, cleverly designed to let you save money while trading and earn elevated yield passively.",
  },
  {
    title: "Set Limit Orders for Your AMM Trades",
    content:
      "Trade the non-custodial way like a pro with limit orders on Ammos. Set limit orders to get into a position, reduce trading losses and take profits. No more regretful trades from unpredictable price volatility.",
  },
  {
    title: "Managed Liquidity Positions",
    content:
      "Options to delegate LP liquidity management to another natively-integrated protocol with a variety of strategies at choice. Without the need for active management, liquidity will be actively moved around the price via the vaults, generating more yield for the liquidity providers and less fee for traders. ",
  },
  {
    title: "Bribe for Boosted $AMMOS Yield",
    content:
      "Bootstrap onchain liquidity with the native bribing market, $veAMMOS holders will play the hidden hand to direct future $AMMOS emission to different pools, helping new projects attract and maintain their token trading activities.",
  },
];

const HeroContainer = ({
  opacity,
  children,
}: {
  opacity: number;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "150px 20px",
        position: "fixed",
        opacity: opacity,
      }}
    >
      {children}
    </motion.div>
  );
};

const LinksContainer = () => {
  const Outer = styled.div`
    padding: 200px 50px;
    z-index: ${Z_INDEX.under_dropdown};
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 20px 20px;
    grid-auto-flow: row;
    grid-template-areas:
      "left right-top"
      "left right-bottom"
      "bottom bottom";

    .bottom {
      grid-area: bottom;
    }

    .left {
      grid-area: left;
    }

    .right-top {
      grid-area: right-top;
    }

    .right-bottom {
      grid-area: right-bottom;
    }

    .linkbox {
      padding: 20px;
      background: #121212;
      border-radius: 20px;
    }
  `;

  const LinksBG = () => {
    return (
      <motion.div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          background: `url(${waves}) center fixed`,
          backgroundSize: "cover",
          opacity: "0.5",
          backgroundPositionX: "0%",
        }}
        initial={{ backgroundPositionX: "-100vw" }}
        animate={{ backgroundPositionX: "100vw" }}
        transition={{
          duration: 50,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
    );
  };

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <LinksBG />
      <Outer>
        <div className={"left linkbox"}>
          <h3>Lean more about Ammos</h3>
          <h1>Read the documentation</h1>
        </div>
        <div className={"right-top linkbox"}>
          <h3>Join the community</h3>
          <h1>Join Discord</h1>
        </div>
        <div className={"right-bottom linkbox"}>
          <h3>Chat about Ammos</h3>
          <h1>Join Telegram</h1>
        </div>
        <div className={"bottom linkbox"}>
          <h3>Twitter</h3>
          <h1>Follow us</h1>
        </div>
      </Outer>
    </div>
  );
};

export default function Landing() {
  const isDarkMode = useIsDarkMode();

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 800], [1, 1.5]) as any;
  const opacity = useTransform(scrollY, [0, 800], [1, 0]) as any;

  const [showContent, setShowContent] = useState(false);
  const selectedWallet = useAppSelector((state) => state.user.selectedWallet);
  const navigate = useNavigate();

  const [accountDrawerOpen] = useAccountDrawer();
  useEffect(() => {
    if (!selectedWallet && !accountDrawerOpen) {
      setShowContent(true);
    } else {
      setShowContent(false);
      setTimeout(() => {
        navigate("/swap");
      }, TRANSITION_DURATIONS.medium);
    }
  }, [navigate, selectedWallet, accountDrawerOpen]);

  return (
    <Trace page={InterfacePageName.LANDING_PAGE} shouldLogImpression>
      <PageContainer data-testid="landing-page">
        {showContent && (
          <>
            <HeroBG scale={scale} opacity={opacity} />
            <ContentContainer isDarkMode={isDarkMode}>
              <HeroContainer opacity={opacity}>
                <TitleText isDarkMode={isDarkMode}>
                  <Trans>
                    Bring your
                    <br />
                    liquidity to life.
                  </Trans>
                </TitleText>
                <SubTextContainer>
                  <SubText>
                    <Trans>
                      Ultra capital-efficient decentralised exchange (DEX) with
                      low fees, built on Mantle Layer 2.
                    </Trans>
                  </SubText>
                </SubTextContainer>
                <ActionsContainer>
                  <TraceEvent
                    events={[BrowserEvent.onClick]}
                    name={SharedEventName.ELEMENT_CLICKED}
                    element={InterfaceElementName.CONTINUE_BUTTON}
                  >
                    <ButtonCTA as={Link} to="/swap">
                      <ButtonCTAText>
                        <Trans>Get started</Trans>
                      </ButtonCTAText>
                    </ButtonCTA>
                  </TraceEvent>
                </ActionsContainer>
              </HeroContainer>
            </ContentContainer>
            <FeaturesContainer>
              <FeaturesWrapper>
                <FeaturesTitle>Ultra Capital-Efficient AMM</FeaturesTitle>
                <FeatureBoxContainer>
                  {Features.map((feature) => (
                    <FeatureBox
                      title={feature.title}
                      content={feature.content}
                    />
                  ))}
                </FeatureBoxContainer>
              </FeaturesWrapper>
            </FeaturesContainer>
            <LinksContainer></LinksContainer>
            <AboutContentContainer isDarkMode={isDarkMode}>
              <AboutFooter />
            </AboutContentContainer>
          </>
        )}
      </PageContainer>
    </Trace>
  );
}
