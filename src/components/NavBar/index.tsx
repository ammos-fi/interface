import { Trans } from "@lingui/macro";
import { Link as NativeLink } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { useAccountDrawer } from "components/AccountDrawer";
import Web3Status from "components/Web3Status";
import { chainIdToBackendName } from "graphql/data/util";
import { useIsNftPage } from "hooks/useIsNftPage";
import { useIsPoolsPage } from "hooks/useIsPoolsPage";
import { useAtomValue } from "jotai/utils";
import { Box } from "nft/components/Box";
import { Row } from "nft/components/Flex";
import { AmmosIcon } from "nft/components/icons";
import { useProfilePageState } from "nft/hooks";
import { ProfilePageStateType } from "nft/types";
import { ReactNode, useCallback } from "react";
import {
  NavLink,
  NavLinkProps,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { shouldDisableNFTRoutesAtom } from "state/application/atoms";
import styled from "styled-components/macro";

import { useIsNavSearchInputVisible } from "../../nft/hooks/useIsNavSearchInputVisible";
import { Bag } from "./Bag";
import Blur from "./Blur";
import { ChainSelector } from "./ChainSelector";
import { MenuDropdown } from "./MenuDropdown";
import { SearchBar } from "./SearchBar";
import * as styles from "./style.css";
import { vars } from "../../nft/css/sprinkles.css";

const Nav = styled.nav`
  padding: ${({ theme }) => `${theme.navVerticalPad}px 12px`};
  width: 100%;
  height: ${({ theme }) => theme.navHeight}px;
  z-index: 2;
`;

interface MenuItemProps {
  href: string;
  id?: NavLinkProps["id"];
  isActive?: boolean;
  children: ReactNode;
  dataTestId?: string;
}

const MenuItem = ({
  href,
  dataTestId,
  id,
  isActive,
  children,
}: MenuItemProps) => {
  return (
    <NavLink
      to={href}
      className={isActive ? styles.activeMenuItem : styles.menuItem}
      id={id}
      style={{
        marginTop: "4px",
        padding: "8px 14px",
        borderRadius: "12",
        transition: "250",
        height: "min",
        width: "full",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        gap: "4",
        lineHeight: "24px",
        textDecoration: "none",
      }}
      data-testid={dataTestId}
    >
      {children}
    </NavLink>
  );
};

export const PageTabs = () => {
  const { pathname } = useLocation();
  const { chainId: connectedChainId } = useWeb3React();
  const chainName = chainIdToBackendName(connectedChainId);

  const isPoolActive = useIsPoolsPage();
  const isNftPage = useIsNftPage();

  const shouldDisableNFTRoutes = useAtomValue(shouldDisableNFTRoutesAtom);

  const LinkWrapper = styled.a`
    text-decoration: none;
    color: inherit;
    margin-left: 10px;
    padding: 10px 15px;
    border-radius: 20px;
    transition: 250ms;
    opacity: 0.8;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transition: 250ms;
      opacity: 1;
    }
  `;

  return (
    <>
      <LinkWrapper
        href={"https://ammos.gitbook.io/ammos-docs/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Trans>Docs</Trans>
      </LinkWrapper>
    </>
  );
};

const Navbar = ({ blur }: { blur: boolean }) => {
  const isNftPage = useIsNftPage();
  const sellPageState = useProfilePageState((state) => state.state);
  const navigate = useNavigate();
  const isNavSearchInputVisible = useIsNavSearchInputVisible();

  const [accountDrawerOpen, toggleAccountDrawer] = useAccountDrawer();

  const handleUniIconClick = useCallback(() => {
    if (accountDrawerOpen) {
      toggleAccountDrawer();
    }
    navigate({
      pathname: "/",
      search: "?intro=true",
    });
  }, [accountDrawerOpen, navigate, toggleAccountDrawer]);

  return (
    <>
      {blur && <Blur />}
      <Nav>
        <Box display="flex" height="full" flexWrap="nowrap">
          <Box className={styles.leftSideContainer}>
            <Box className={styles.logoContainer}>
              <AmmosIcon
                width="38"
                height="38"
                data-testid="uniswap-logo"
                className={styles.logo}
                onClick={handleUniIconClick}
              />
            </Box>
            <Row display={{ sm: "none", lg: "flex" }}>
              <PageTabs />
            </Row>
          </Box>
          <Box className={styles.rightSideContainer}>
            <Row gap="12">
              <Box
                position="relative"
                display={isNavSearchInputVisible ? "none" : { sm: "flex" }}
              ></Box>

              <Web3Status />
            </Row>
          </Box>
        </Box>
      </Nav>
    </>
  );
};

export default Navbar;
