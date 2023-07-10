import { Trans } from "@lingui/macro";
import herobg from "assets/images/waves.png";
import waves from "assets/images/waves_tiled.png";
import { ReactComponent as MantleLogo } from "assets/svg/mantle_logo.svg";
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

const links = {
  discord: "https://discord.com/invite/ammosfinance",
  twitter: "https://twitter.com/ammosfinance",
  github: "https://github.com/ammos-fi",
  telegram: "https://t.me/AmmosFinance",
  docs: "https://ammos.gitbook.io/ammos-docs/",
};

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
  padding: 0 30px;
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

  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    margin-top: 0px;
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

  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    padding: 20px;
  }
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
import { ArrowRight } from "react-feather";

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

const ChevronIcon = styled(ArrowRight)`
  margin-left: 10px;
  opacity: 0;
  transition: all 0.3s ease;
  transform: translateX(-10px);
`;

const FeatureBox = ({
  index,
  setHoveredBox,
  title,
  content,
  link,
}: {
  index: number;
  setHoveredBox: (index: number | null) => void;
  title: string;
  content: string;
  link: string;
}) => {
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

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
      align-items: center;
      padding: 20px;
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
    min-height: 350px;

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
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
      min-height: 300px;
    }
  `;

  const Title = styled.h3`
    color: ${({ theme }) => theme.white};
  `;

  const Content = styled.p`
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    color: ${({ theme }) => theme.textSecondary};
  `;

  const LearnMore = ({ children }: { children?: React.ReactNode }) => {
    const LinkButton = styled.a`
      color: #fbbf24;
      opacity: 0.6;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      text-decoration: none;
      display: flex;
      align-items: center;
    `;

    const Outer = styled.div`
      margin-top: auto;
    `;

    return (
      <Outer>
        <LinkButton href={link}>
          {children}
          <ChevronIcon size={20} />
        </LinkButton>
      </Outer>
    );
  };

  const LinkContainer = styled.a`
    text-decoration: none;
    transition: opacity 0.3s ease-in-out;

    &:hover a {
      opacity: 1;
    }

    &:hover ${ChevronIcon} {
      opacity: 1;
      transform: translateX(0);
    }
  `;

  return (
    <Outer onMouseEnter={() => setHoveredBox(index)}>
      <LinkContainer href={link}>
        <Inner>
          <Title>{title}</Title>
          <Content>{content}</Content>
          <LearnMore>Learn more</LearnMore>
        </Inner>
      </LinkContainer>
    </Outer>
  );
};

const FeatureBoxContainer = ({
  hoveredBox,
  children,
}: {
  hoveredBox: number | null;
  children?: React.ReactNode;
}) => {
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

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
    }
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

      @media screen and (max-width: ${BREAKPOINTS.md}px) {
        display: none;
      }
    `;

    const SvgContainer = styled.div`
      transition: all 2s ease-in-out;
    `;

    return (
      <Outer>
        <SvgContainer>
          {hoveredBox === null && (
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
              className="lucide lucide-dot"
            >
              <circle cx="12.1" cy="12.1" r="1" />
            </svg>
          )}
          {hoveredBox === 0 && (
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
              className="lucide lucide-bar-chart-2"
            >
              <line x1="18" x2="18" y1="20" y2="10" />
              <line x1="12" x2="12" y1="20" y2="4" />
              <line x1="6" x2="6" y1="20" y2="14" />
            </svg>
          )}
          {hoveredBox === 1 && (
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
          )}
          {hoveredBox === 2 && (
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
              className="lucide lucide-coins"
            >
              <circle cx="8" cy="8" r="6" />
              <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
              <path d="M7 6h1v4" />
              <path d="m16.71 13.88.7.71-2.82 2.82" />
            </svg>
          )}
          {hoveredBox === 3 && (
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
              className="lucide lucide-badge-dollar-sign"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 18V6" />
            </svg>
          )}
        </SvgContainer>
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
    title: "Optimised Liquidity Provision",
    content:
      "Pools have an extremely capital efficient setup to create minimum slippage and maximum amount of fees generated for LPs, cleverly designed to let you save money while trading and earn elevated yield passively.",
    link: "https://ammos.gitbook.io/ammos-docs/features/optimised-liquidity-provision",
  },
  {
    title: "Limit Orders",
    content:
      "Trade the non-custodial way with limit orders on Ammos like a pro. Set limit orders to get into a position, reduce trading losses and take profits. No more regretful trades from unpredictable price volatility.",
    link: "https://ammos.gitbook.io/ammos-docs/features/limit-orders",
  },
  {
    title: "Managed Liquidity Positions (MLP)",
    content:
      "MLP gives users the option to delegate LP liquidity management to another natively-integrated protocol with a variety of strategies of choice. Without the need for active management, liquidity will be actively moved around the price, generating more yield for the liquidity providers and lower fees for traders.",
    link: "https://ammos.gitbook.io/ammos-docs/features/managed-liquidity-provision",
  },
  {
    title: "Bribe for Boosted $AMMOS Yield",
    content:
      "Bootstrap onchain liquidity with the native bribing market. $veAMMOS holders will play the hidden hand to direct future $AMMOS emission to different pools, helping new projects attract and maintain their token trading activities.",
    link: "https://ammos.gitbook.io/ammos-docs/features/bribing-markets",
  },
];

const StyledHeroContainer = styled.div`
  z-index: 1;
  padding: 150px 20px;
  position: fixed;
  background: #000000b0;
  box-shadow: 0 0 300px 200px #000000b0;

  @media screen and (max-width: ${BREAKPOINTS.md}px) {
    padding: 100px 20px;
  }
`;

const HeroContainer = ({
  opacity,
  children,
}: {
  opacity: number;
  children?: React.ReactNode;
}) => {
  return (
    <StyledHeroContainer>
      <motion.div
        style={{
          opacity: opacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </motion.div>
    </StyledHeroContainer>
  );
};

const LinksContainer = () => {
  const Outer = styled.div`
    margin: 0 auto;
    padding: 200px 100px;
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
      background: #121212e6;
      border: 1px solid rgba(255, 255, 255, 0.05);
      position: relative;
      cursor: pointer;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: translateY(-5px);
        transition: all 0.3s ease-in-out;
        background: #12121200;
      }

      &::before {
        width: 0;
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(93.06deg, #ea580cb3 20%, #fbbf24b3 98.99%);
        z-index: -1;
        transition: all 0.3s ease-in-out;
        opacity: 0;
        border-radius: 20px;
      }

      &:hover::before {
        width: 100%;
        transition: all 0.3s ease-in-out;
        opacity: 1;
      }
    }

    h3 {
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
      opacity: 0.8;
    }

    h1 {
      font-size: 48px;
      font-weight: 600;
      letter-spacing: -1.5px;
      margin: 0;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
      padding: 200px 20px;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-areas:
        "left"
        "right-top"
        "right-bottom"
        "bottom";

      h1 {
        font-size: 32px;
      }

      h3 {
        font-size: 14px;
      }
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

  const LinkTitleWrapper = styled.div`
    display: flex;
    align-items: center;
  `;

  const LinkContainer = styled.a`
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: white;
    padding: 40px !important;

    ${ChevronIcon} {
      margin-bottom: -5px;
    }

    &:hover ${ChevronIcon} {
      opacity: 1;
      transform: translateX(0);
    }
  `;

  return (
    <div
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
      id={"links"}
    >
      <LinksBG />
      <Outer>
        <LinkContainer href={links.docs} className={"left linkbox"}>
          <h3>Learn more about Ammos</h3>
          <LinkTitleWrapper>
            <h1>
              Read the documentation
              <ChevronIcon size={40} />
            </h1>
          </LinkTitleWrapper>
        </LinkContainer>
        <LinkContainer href={links.telegram} className={"right-top linkbox"}>
          <h3>Chat about Ammos</h3>
          <LinkTitleWrapper>
            <h1>
              Join Telegram
              <ChevronIcon size={40} />
            </h1>
          </LinkTitleWrapper>
        </LinkContainer>
        <LinkContainer href={links.discord} className={"right-bottom linkbox"}>
          <h3>Join the community</h3>
          <LinkTitleWrapper>
            <h1>
              Join Discord
              <ChevronIcon size={40} />
            </h1>
          </LinkTitleWrapper>
        </LinkContainer>
        <LinkContainer href={links.twitter} className={"bottom linkbox"}>
          <h3>Twitter</h3>
          <LinkTitleWrapper>
            <h1>
              Follow us
              <ChevronIcon size={40} />
            </h1>
          </LinkTitleWrapper>
        </LinkContainer>
      </Outer>
    </div>
  );
};

const AirdropContainer = () => {
  const Inner = styled.div`
    margin: 0 auto;
    max-width: 500px;
    padding: 200px 20px;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      background: linear-gradient(20deg, #fbbf24 10%, #ea580c 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 50px;
      font-weight: 900;
      margin-bottom: 20px;

      @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 40px;
      }
    }

    & > p {
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: 500;
      line-height: 1.5;
    }
  `;

  const buttonStyle = {
    background: "grey",
    cursor: "help",
    width: "fit-content",
    paddingLeft: "20px",
    paddingRight: "20px",
  };

  const Outer = styled.div`
    width: 100%;
    box-shadow: 0 0 200px 200px black;
    z-index: ${Z_INDEX.under_dropdown - 1};
    background: black;
  `;

  return (
    <Outer>
      <Inner>
        <h1>$AMMOS Airdrop: Epoch 1</h1>
        <p>
          Get a head start in earning Epoch 1 rewards by providing liquidity and
          trade on Ammos.
        </p>
        <ButtonCTA style={buttonStyle}>
          <ButtonCTAText>Coming Soon 👀</ButtonCTAText>
        </ButtonCTA>
      </Inner>
    </Outer>
  );
};

export default function Landing() {
  const isDarkMode = useIsDarkMode();

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 800], [1, 1.5]) as any;
  const opacity = useTransform(scrollY, [0, 800], [1, 0]) as any;

  const [showContent, setShowContent] = useState(true);
  const selectedWallet = useAppSelector((state) => state.user.selectedWallet);
  const navigate = useNavigate();
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

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
    <PageContainer data-testid="landing-page">
      <>
        <HeroBG scale={scrollY ? scale : 1} opacity={scrollY ? opacity : 1} />
        <ContentContainer isDarkMode={true}>
          <HeroContainer opacity={opacity}>
            <TitleText isDarkMode={true}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Bring your
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                liquidity to life
              </motion.div>
            </TitleText>
            <SubTextContainer>
              <SubText>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  Ultra capital-efficient decentralised exchange with low fees,
                  built on Mantle Layer 2.
                </motion.div>
              </SubText>
            </SubTextContainer>
            <ActionsContainer>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 1 }}
              >
                <ButtonCTA
                  as={Link}
                  to="#links"
                  onClick={() => {
                    const element = document.getElementById("links");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <ButtonCTAText>
                    <Trans>Join Communities</Trans>
                  </ButtonCTAText>
                </ButtonCTA>
              </motion.div>
            </ActionsContainer>
          </HeroContainer>
        </ContentContainer>
        <FeaturesContainer>
          <FeaturesWrapper>
            <FeaturesTitle>Ultra Capital-Efficient AMM</FeaturesTitle>
            <FeatureBoxContainer hoveredBox={hoveredBox}>
              {Features.map((feature, index) => (
                <FeatureBox
                  index={index}
                  setHoveredBox={setHoveredBox}
                  title={feature.title}
                  content={feature.content}
                  link={feature.link}
                />
              ))}
            </FeatureBoxContainer>
          </FeaturesWrapper>
        </FeaturesContainer>
        <AirdropContainer />
        <LinksContainer></LinksContainer>
        <AboutContentContainer isDarkMode={isDarkMode}>
          <AboutFooter />
        </AboutContentContainer>
      </>
    </PageContainer>
  );
}
