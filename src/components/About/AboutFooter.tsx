import { TraceEvent } from "@uniswap/analytics";
import {
  BrowserEvent,
  InterfaceElementName,
  SharedEventName,
} from "@uniswap/analytics-events";
import styled from "styled-components/macro";
import { BREAKPOINTS, ExternalLink, StyledRouterLink } from "theme";
import { useIsDarkMode } from "theme/components/ThemeToggle";

import { DiscordIcon, GithubIcon, TwitterIcon } from "./Icons";
import darkUnicornImgSrc from "./images/unicornEmbossDark.png";
import lightUnicornImgSrc from "./images/unicornEmbossLight.png";
import { AmmosIcon } from "../../nft/components/icons";
import * as styles from "../NavBar/style.css";

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 48px;
  max-width: 1440px;

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoSectionLeft = styled(LogoSection)`
  display: none;

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    display: flex;
  }
`;

const LogoSectionBottom = styled(LogoSection)`
  display: flex;

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    display: none;
  }
`;

const StyledLogo = styled.img`
  width: 72px;
  height: 72px;
  display: none;

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    display: block;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0 0 0;
`;

const SocialLink = styled.a`
  display: flex;
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  @media screen and (min-width: ${BREAKPOINTS.xl}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 200px;
  margin: 20px 0 0 0;
  @media screen and (min-width: ${BREAKPOINTS.xl}px) {
    margin: 0;
  }
`;

const LinkGroupTitle = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
`;

const ExternalTextLink = styled(ExternalLink)`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.textSecondary};
`;

const TextLink = styled(StyledRouterLink)`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.textSecondary};
`;

const Copyright = styled.span`
  font-size: 16px;
  line-height: 20px;
  margin: 1rem 0 0 0;
  color: ${({ theme }) => theme.textTertiary};
`;

const links = {
  discord: "https://discord.gg/z8dsDRPD",
  twitter: "https://twitter.com/ammosfinance",
  github: "https://github.com/ammos-fi",
  telegram: "https://t.me/AmmosFinance",
  docs: "https://ammos.gitbook.io/ammos-docs/",
};

const LogoSectionContent = () => {
  const isDarkMode = useIsDarkMode();
  return (
    <>
      <AmmosIcon width="100" height="100" data-testid="uniswap-logo" />
      <SocialLinks>
        <SocialLink
          href={`${links.discord}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiscordIcon size={32} />
        </SocialLink>
        <TraceEvent
          events={[BrowserEvent.onClick]}
          name={SharedEventName.ELEMENT_CLICKED}
          element={InterfaceElementName.TWITTER_LINK}
        >
          <SocialLink
            href={`${links.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon size={32} />
          </SocialLink>
        </TraceEvent>
        <SocialLink
          href={`${links.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size={32} />
        </SocialLink>
      </SocialLinks>
      <Copyright>© {new Date().getFullYear()} Ammos Finance</Copyright>
    </>
  );
};

export const AboutFooter = () => {
  return (
    <Footer>
      <LogoSectionLeft>
        <LogoSectionContent />
      </LogoSectionLeft>

      <FooterLinks>
        <LinkGroup>
          <LinkGroupTitle>Communities</LinkGroupTitle>
          <ExternalTextLink href={`${links.telegram}`}>
            Telegram
          </ExternalTextLink>
          <ExternalTextLink href={`${links.discord}`}>Discord</ExternalTextLink>
          <ExternalTextLink href={`${links.twitter}`}>Twitter</ExternalTextLink>
        </LinkGroup>
        <LinkGroup>
          <LinkGroupTitle>Learn</LinkGroupTitle>
          <ExternalTextLink href={`${links.docs}`}>Docs</ExternalTextLink>
        </LinkGroup>
      </FooterLinks>

      <LogoSectionBottom>
        <LogoSectionContent />
      </LogoSectionBottom>
    </Footer>
  );
};
