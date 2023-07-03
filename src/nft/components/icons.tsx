import React from "react";
import styled, { useTheme } from "styled-components/macro";
import ammos_logo from "../../assets/svg/ammos_logo.svg";
import { themeVars, vars } from "../css/sprinkles.css";

// ESLint reports `fill` is missing, whereas it exists on an SVGProps type
type SVGProps = React.SVGProps<SVGSVGElement> & {
  fill?: string;
  height?: string | number;
  width?: string | number;
  gradientId?: string;
};

export const UniIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
    viewBox="0 0 1080 1080"
    {...props}
  >
    <path
      d="M0 0h1920v1080H0z"
      style={{
        fill: "none",
      }}
      transform="scale(.5625 1)"
    />
    <circle
      cx={30675.1}
      cy={17790.8}
      r={370.805}
      transform="matrix(1.2952 0 0 1.29519 -39190.275 -22502.5)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#a)",
        strokeWidth: "2.95px",
      }}
      transform="translate(-35834.883 -20556.51) scale(1.18581)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#b)",
        strokeWidth: "3.08px",
      }}
      transform="matrix(1.13783 0 0 1.13783 -34363.174 -19703.32)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#c)",
        strokeWidth: "3.17px",
      }}
      transform="matrix(1.10367 0 0 1.10367 -33315.288 -19095.83)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#d)",
        strokeWidth: "3.27px",
      }}
      transform="matrix(1.07054 0 0 1.07054 -32298.886 -18506.6)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#e)",
        strokeWidth: "3.37px",
      }}
      transform="translate(-31312.967 -17935.04) scale(1.0384)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#f)",
        strokeWidth: "3.47px",
      }}
      transform="matrix(1.00722 0 0 1.00722 -30356.663 -17380.674)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#g)",
        strokeWidth: "3.58px",
      }}
      transform="matrix(.97698 0 0 .97698 -29429.107 -16842.909)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#h)",
        strokeWidth: "3.69px",
      }}
      transform="matrix(.94765 0 0 .94765 -28529.367 -16321.271)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#i)",
        strokeWidth: "3.81px",
      }}
      transform="matrix(.9192 0 0 .9192 -27656.64 -15815.286)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#j)",
        strokeWidth: "3.93px",
      }}
      transform="matrix(.8916 0 0 .8916 -26810.128 -15324.598)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#k)",
        strokeWidth: "4.05px",
      }}
      transform="matrix(.86484 0 0 .86484 -25989.028 -14848.495)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#l)",
        strokeWidth: "4.17px",
      }}
      transform="matrix(.83888 0 0 .83887 -25192.542 -14386.74)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#m)",
        strokeWidth: "4.3px",
      }}
      transform="matrix(.81369 0 0 .81369 -24420.001 -13938.979)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#n)",
        strokeWidth: "4.43px",
      }}
      transform="translate(-23670.607 -13504.498) scale(.78926)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#o)",
        strokeWidth: "4.57px",
      }}
      transform="matrix(.76556 0 0 .76556 -22943.757 -13083.061)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#p)",
        strokeWidth: "4.71px",
      }}
      transform="matrix(.74258 0 0 .74258 -22238.719 -12674.431)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#q)",
        strokeWidth: "4.86px",
      }}
      transform="matrix(.72029 0 0 .72029 -21554.892 -12277.896)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#r)",
        strokeWidth: "5.01px",
      }}
      transform="translate(-20891.542 -11893.362) scale(.69866)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#s)",
        strokeWidth: "5.16px",
      }}
      transform="matrix(.67768 0 0 .67769 -20248.137 -11520.353)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#t)",
        strokeWidth: "5.32px",
      }}
      transform="translate(-19624.008 -11158.539) scale(.65734)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#u)",
        strokeWidth: "5.49px",
      }}
      transform="matrix(.6376 0 0 .6376 -19018.622 -10807.587)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#v)",
        strokeWidth: "5.66px",
      }}
      transform="matrix(.61846 0 0 .61846 -18431.446 -10467.176)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#w)",
        strokeWidth: "5.83px",
      }}
      transform="matrix(.5999 0 0 .5999 -17861.88 -10136.976)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#x)",
        strokeWidth: "6.01px",
      }}
      transform="matrix(.58189 0 0 .58189 -17309.388 -9816.688)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#y)",
        strokeWidth: "6.2px",
      }}
      transform="matrix(.56442 0 0 .56442 -16773.506 -9506.03)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#z)",
        strokeWidth: "6.39px",
      }}
      transform="translate(-16253.765 -9204.692) scale(.54747)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#A)",
        strokeWidth: "6.59px",
      }}
      transform="matrix(.53103 0 0 .53103 -15749.566 -8912.39)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#B)",
        strokeWidth: "6.79px",
      }}
      transform="matrix(.5151 0 0 .5151 -15260.509 -8628.874)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#C)",
        strokeWidth: "7.01px",
      }}
      transform="matrix(.49963 0 0 .49963 -14786.125 -8353.873)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#D)",
        strokeWidth: "7.22px",
      }}
      transform="matrix(.48463 0 0 .48463 -14326.016 -8087.125)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#E)",
        strokeWidth: "7.45px",
      }}
      transform="matrix(.47008 0 0 .47008 -13879.714 -7828.381)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#F)",
        strokeWidth: "7.68px",
      }}
      transform="matrix(.45596 0 0 .45597 -13446.753 -7577.405)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#G)",
        strokeWidth: "7.91px",
      }}
      transform="matrix(.44228 0 0 .44228 -13026.865 -7333.97)"
    />
    <path
      d="M30694.2 17515.1c-90.7 19.5-195.9-88.6-321.8-31.4-133.5 60.6-152.2 199.7-146.4 411 5.4 200.9 145.4 240.5 230.5 234.9 97.7-6.3 133.3-70.7 238.9-82.4 167-18.4 234.3 41.9 323.9-15.3 70.4-45 111-188.6 105.4-304.8-6.1-126.4-62.7-243.4-150.2-280.7-91.3-38.9-191.5 49.5-280.3 68.7Z"
      style={{
        fill: "none",
        stroke: "url(#H)",
        strokeWidth: "8.16px",
      }}
      transform="matrix(.429 0 0 .429 -12619.584 -7097.84)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="b"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="c"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="d"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="e"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="f"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="g"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="h"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="i"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="j"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="k"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="l"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="m"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="n"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="o"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="p"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="q"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="r"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="s"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="t"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="u"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="v"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="w"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="x"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="y"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="z"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="A"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="B"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="C"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="D"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="E"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="F"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="G"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="H"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(880.672 0 0 727.111 30225.1 17783.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#e9d69c",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.16}
          style={{
            stopColor: "#db8840",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.33}
          style={{
            stopColor: "#d76f22",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.62}
          style={{
            stopColor: "#edf6fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#ecc384",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
  </svg>
);

export const ChevronUpIcon = ({
  secondaryColor,
  secondaryWidth,
  secondaryHeight,
  ...props
}: SVGProps & {
  secondaryWidth?: string;
  secondaryHeight?: string;
  secondaryColor?: string;
}) => (
  <svg
    width={secondaryWidth || "29"}
    height={secondaryHeight || "28"}
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_564_11230)">
      <path
        d="M7.2207 16.0615L13.9092 9.22363C14.1377 8.97754 14.4102 8.86328 14.7178 8.86328C15.0254 8.86328 15.3066 8.98633 15.5352 9.22363L22.2148 16.0615C22.4082 16.2549 22.5137 16.501 22.5137 16.791C22.5137 17.3799 22.0566 17.8369 21.4766 17.8369C21.1953 17.8369 20.9229 17.7314 20.7207 17.5205L14.7266 11.3594L8.71484 17.5205C8.52148 17.7227 8.24902 17.8369 7.95898 17.8369C7.37891 17.8369 6.92188 17.3799 6.92188 16.791C6.92188 16.5098 7.02734 16.2549 7.2207 16.0615Z"
        fill={secondaryColor || themeVars.colors.textSecondary}
      />
    </g>
    <defs>
      <clipPath id="clip0_564_11230">
        <rect
          width="28"
          height="28"
          fill="white"
          transform="translate(0.716797)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const BackArrowIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    {...props}
  >
    <path d="M5.676 13.645c0 .263.114.527.316.72l5.801 5.792c.21.202.44.3.694.3.554 0 .958-.396.958-.933a.934.934 0 00-.29-.694l-1.977-2.004-2.55-2.329 2.049.123h10.652c.58 0 .985-.404.985-.975 0-.58-.405-.985-.985-.985H10.677l-2.04.123 2.54-2.329 1.978-2.004a.934.934 0 00.29-.694c0-.536-.404-.932-.958-.932-.255 0-.492.097-.72.317l-5.775 5.774a1.012 1.012 0 00-.316.73z" />
  </svg>
);

export const VerifiedIcon = (props: SVGProps) => {
  const theme = useTheme();
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.52795 13.8056C4.52719 14.4043 4.6712 14.8474 4.95997 15.135C5.24798 15.4233 5.68496 15.5651 6.27091 15.5605H7.57497C7.62945 15.5585 7.68379 15.5676 7.73463 15.5873C7.78547 15.607 7.83176 15.6369 7.87062 15.6752L8.79884 16.5928C9.22054 17.0142 9.63382 17.2237 10.0387 17.2214C10.4436 17.2191 10.8569 17.0096 11.2786 16.5928L12.1954 15.6752C12.2356 15.6365 12.2832 15.6063 12.3354 15.5866C12.3876 15.5669 12.4433 15.558 12.499 15.5605H13.7951C14.3871 15.5613 14.8283 15.4171 15.1186 15.1281C15.4089 14.839 15.5541 14.3959 15.5541 13.7987V12.5014C15.5511 12.389 15.5923 12.2799 15.6687 12.1974L16.5854 11.2798C17.0125 10.86 17.2245 10.4467 17.2214 10.0399C17.2184 9.63305 17.0064 9.21935 16.5854 8.79878L15.6687 7.88115C15.592 7.79886 15.5509 7.68965 15.5541 7.57719V6.2799C15.5533 5.68191 15.4093 5.23878 15.1221 4.95049C14.8348 4.66221 14.3925 4.51806 13.7951 4.51806H12.499C12.4433 4.52036 12.3877 4.51138 12.3355 4.49168C12.2834 4.47197 12.2357 4.44193 12.1954 4.40336L11.2786 3.48574C10.8569 3.06439 10.4436 2.85487 10.0387 2.85717C9.63382 2.85946 9.22054 3.06898 8.79884 3.48574L7.87062 4.40336C7.83164 4.44148 7.78536 4.4713 7.73454 4.49101C7.68373 4.51072 7.62943 4.51993 7.57497 4.51806H6.27091C5.67961 4.51883 5.23995 4.66182 4.95194 4.94705C4.66393 5.23228 4.51992 5.67656 4.51992 6.2799V7.58063C4.52314 7.69309 4.48197 7.80229 4.40533 7.88459L3.48859 8.80222C3.06765 9.22203 2.85718 9.63572 2.85718 10.0433C2.85718 10.4509 3.07033 10.8653 3.49662 11.2867L4.41336 12.2043C4.48979 12.2867 4.53092 12.3958 4.52795 12.5083V13.8056Z"
        fill={theme.accentAction}
      />
      <path
        d="M9.99737 12.4943C9.86205 12.7005 9.6623 12.8164 9.43032 12.8164C9.19191 12.8164 9.00504 12.7198 8.83106 12.4943L7.31036 10.6385C7.20082 10.5032 7.14282 10.3614 7.14282 10.2068C7.14282 9.88458 7.38768 9.63327 7.70342 9.63327C7.89673 9.63327 8.05138 9.70415 8.20603 9.90391L9.40455 11.4311L11.9498 7.34577C12.0851 7.12669 12.2591 7.02359 12.4524 7.02359C12.7553 7.02359 13.0388 7.23623 13.0388 7.55197C13.0388 7.70017 12.9615 7.85482 12.8777 7.99014L9.99737 12.4943Z"
        fill="white"
      />
    </svg>
  );
};

export const PoolIcon = ({ width, height, ...props }: SVGProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    {...props}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.19993 7.5915H12.3999V3.59138C12.3999 1.82406 13.8326 0.39143 15.5999 0.39143C17.3672 0.39143 18.8 1.82406 18.8 3.59138H17.1999C17.1999 2.70774 16.4835 1.99148 15.5999 1.99148C14.7162 1.99148 14 2.70774 14 3.59138V12.3915H12.3999V9.19155H5.19993V10.7915H3.59988V3.59145C3.59988 1.82413 5.03265 0.391498 6.79998 0.391498C8.5673 0.391498 9.99993 1.82413 9.99993 3.59145H8.39988C8.39988 2.70781 7.68362 1.99154 6.79998 1.99154C5.91633 1.99154 5.19993 2.70781 5.19993 3.59145V7.5915ZM1.49707 14.7342L0.902832 13.2487C3.75352 12.1084 6.88055 12.1084 10.2529 13.2325C13.2806 14.2417 16.0201 14.2417 18.5027 13.2487L19.097 14.7342C16.2463 15.8745 13.1192 15.8745 9.7469 14.7503C6.71916 13.7411 3.9797 13.7411 1.49707 14.7342ZM1.49707 18.734L0.902832 17.2485C3.75352 16.1082 6.88055 16.1082 10.2529 17.2324C13.2806 18.2416 16.0201 18.2416 18.5027 17.2485L19.097 18.734C16.2463 19.8743 13.1192 19.8743 9.7469 18.7502C6.71916 17.7411 3.9797 17.7411 1.49707 18.734Z"
      fill="currentColor"
    />
  </svg>
);

export const XMarkIcon = (props: SVGProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill={props.fill ?? themeVars.colors.textSecondary}
      d="M10.2706 27.2148C9.74321 27.7421 9.7181 28.6838 10.2831 29.2362C10.8356 29.7887 11.7773 29.7761 12.3046 29.2488L19.9887 21.5521L27.6855 29.2488C28.2254 29.7887 29.1545 29.7887 29.7069 29.2362C30.2468 28.6712 30.2594 27.7547 29.7069 27.2148L22.0228 19.518L29.7069 11.8339C30.2594 11.294 30.2594 10.3649 29.7069 9.81241C29.1419 9.27251 28.2254 9.25995 27.6855 9.79985L19.9887 17.4966L12.3046 9.79985C11.7773 9.27251 10.823 9.2474 10.2831 9.81241C9.73066 10.3649 9.74321 11.3065 10.2706 11.8339L17.9673 19.518L10.2706 27.2148Z"
    />
  </svg>
);

export const ArrowRightIcon = (props: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7494 7.79771C12.7494 7.64202 12.6842 7.49135 12.5686 7.38086L9.26897 4.08119C9.13839 3.95564 9.00279 3.90039 8.86216 3.90039C8.54074 3.90039 8.30971 4.1264 8.30971 4.43276C8.30971 4.59347 8.375 4.72907 8.47545 4.82952L9.60547 5.97461L11.0619 7.30552L9.89676 7.23521H3.80971C3.47321 7.23521 3.24219 7.46624 3.24219 7.79771C3.24219 8.12416 3.47321 8.35519 3.80971 8.35519H9.89676L11.0619 8.28488L9.60547 9.61579L8.47545 10.7609C8.375 10.8613 8.30971 10.9969 8.30971 11.1576C8.30971 11.464 8.54074 11.69 8.86216 11.69C9.00279 11.69 9.13839 11.6348 9.25893 11.5193L12.5686 8.20954C12.6842 8.09905 12.7494 7.94838 12.7494 7.79771Z"
      fill="currentColor"
    />
  </svg>
);

export const ExternalIcon = (props: SVGProps) => (
  <svg {...props} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.91993 13.9991C4.91993 18.9722 9.03078 23.0758 13.9946 23.0782C13.9953 23.0782 13.9959 23.0782 13.9966 23.0782C13.997 23.0782 13.9974 23.0782 13.9978 23.0782C13.9982 23.0782 13.9986 23.0782 13.999 23.0782C13.9997 23.0782 14.0003 23.0782 14.001 23.0782C18.9648 23.0758 23.0757 18.9722 23.0757 13.9991C23.0757 9.43823 19.5985 5.59653 15.1841 5.00029C14.8058 4.94735 14.4136 4.92 14.0078 4.92C14.0045 4.92 14.0011 4.92 13.9978 4.92C13.9945 4.92 13.9911 4.92 13.9878 4.92C9.36477 4.92 5.49758 8.47078 4.97903 12.9708C4.97912 12.9708 4.97921 12.9707 4.9793 12.9707C4.94009 13.3086 4.91993 13.6518 4.91993 13.9991ZM18.4807 13.3839L18.4814 13.3663C18.4375 12.2764 18.2969 11.2745 18.0596 10.3692C18.7499 10.1516 19.3569 9.87637 19.8424 9.55441C19.9241 9.50192 20.0028 9.4483 20.0786 9.39363C20.9488 10.5186 21.52 11.8985 21.6343 13.3839H18.4807ZM17.2222 14.6143H14.6143V17.0928C14.6176 17.093 14.6211 17.0931 14.6245 17.0933C15.3934 17.1203 16.1361 17.2166 16.8267 17.3477C17.0464 16.5128 17.187 15.5899 17.2222 14.6143ZM14.6232 18.3238C14.6707 18.3262 14.7263 18.3287 14.7883 18.3313C15.3825 18.3611 15.9463 18.4207 16.4663 18.5167C15.9922 19.7809 15.3428 20.7031 14.6143 21.0468V18.3234C14.6172 18.3235 14.6202 18.3237 14.6232 18.3238ZM16.2881 21.304C16.2563 21.3075 16.2267 21.311 16.1996 21.3145C16.7877 20.7176 17.3063 19.8565 17.688 18.8155C18.3032 19.0089 18.8218 19.2462 19.2525 19.545C18.4189 20.3445 17.4042 20.9548 16.2881 21.304ZM13.3814 18.3234V21.0468C12.6529 20.7031 12.0034 19.7809 11.5293 18.5167C12.0999 18.4113 12.7231 18.3498 13.3814 18.3234ZM13.3814 14.6143H10.7734C10.8086 15.5899 10.9492 16.5128 11.1689 17.3477C11.8595 17.2166 12.6022 17.1203 13.3711 17.0933C13.3746 17.0931 13.378 17.093 13.3814 17.0928V14.6143ZM9.51492 13.3839H6.36133C6.47559 11.8985 7.04688 10.5186 7.917 9.39363C7.99279 9.4483 8.07156 9.50191 8.15322 9.5544C8.6387 9.87637 9.24574 10.1516 9.93606 10.3692C9.69875 11.2745 9.55813 12.2764 9.51418 13.3663L9.51492 13.3839ZM18.631 8.85777C18.8652 8.74186 19.0785 8.61524 19.27 8.47957C18.4126 7.63961 17.3548 7.0174 16.166 6.66499C16.7786 7.26197 17.3125 8.138 17.7069 9.22351C17.7978 9.1952 17.8866 9.16558 17.9734 9.13471C18.2063 9.04964 18.4255 8.95751 18.631 8.85777ZM10.2888 9.22351C10.6831 8.138 11.217 7.26197 11.8296 6.66499C10.6408 7.0174 9.58305 7.63961 8.72559 8.47957C8.91713 8.61524 9.13042 8.74186 9.36462 8.85777C9.57011 8.95752 9.78933 9.04965 10.0223 9.13472C10.109 9.16559 10.1979 9.1952 10.2888 9.22351ZM14.6143 6.96014V9.71873C15.2726 9.69231 15.9045 9.63081 16.4839 9.52547C16.0098 8.23491 15.3428 7.28636 14.6143 6.96014ZM13.3814 6.96014C12.6528 7.28636 11.9858 8.23491 11.5117 9.52547C12.0911 9.63081 12.7231 9.69231 13.3814 9.71873V6.96014ZM17.2222 13.3839C17.1871 12.4267 17.0467 11.5046 16.836 10.6878C16.1446 10.8272 15.3925 10.9231 14.6143 10.9493V13.3839H17.2222ZM13.3814 13.3839V10.9493C12.6031 10.9231 11.851 10.8272 11.1596 10.6878C10.949 11.5046 10.8086 12.4267 10.7734 13.3839H13.3814ZM9.52539 14.6143C9.56055 15.7218 9.70996 16.7501 9.94727 17.6641C9.14746 17.919 8.46192 18.2442 7.94336 18.6397C7.05567 17.5059 6.47559 16.1173 6.36133 14.6143H9.52539ZM10.3076 18.8155C10.6943 19.8702 11.2217 20.7403 11.8193 21.338C10.6592 20.9952 9.6045 20.3712 8.74317 19.545C9.17383 19.2462 9.69239 19.0089 10.3076 18.8155ZM18.4702 14.6143C18.4351 15.7218 18.2857 16.7501 18.0484 17.6641C18.8482 17.919 19.5337 18.2442 20.0523 18.6397C20.94 17.5059 21.52 16.1173 21.6343 14.6143H18.4702Z"
      fill={props.fill}
    />
  </svg>
);

export const InstagramIcon = (props: SVGProps) => (
  <svg
    role="img"
    viewBox="-3 -3 23 23"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.16295 0.285156H11.2695C13.5526 0.285156 15.4305 2.17023 15.4305 4.45603V11.5429C15.4305 13.8313 13.5499 15.7137 11.2695 15.7137H4.16295C1.87988 15.7137 0.00195312 13.8313 0.00195312 11.5429V4.45603C0.00195312 2.16754 1.87988 0.285156 4.16295 0.285156ZM11.859 2.97813C12.0924 2.98133 12.3154 3.0757 12.4804 3.24117C12.6455 3.40663 12.7397 3.63013 12.7429 3.86411C12.7395 4.098 12.6453 4.32136 12.4803 4.48671C12.3152 4.65206 12.0923 4.74636 11.859 4.74956C11.7425 4.75115 11.6269 4.72934 11.519 4.68542C11.4111 4.64149 11.313 4.57634 11.2306 4.49381C11.1482 4.41127 11.0832 4.31303 11.0393 4.20488C10.9954 4.09673 10.9736 3.98086 10.9751 3.86411C10.9735 3.74732 10.9953 3.63139 11.0391 3.52318C11.083 3.41497 11.148 3.31666 11.2304 3.23407C11.3128 3.15147 11.4109 3.08628 11.5188 3.04232C11.6268 2.99836 11.7425 2.97653 11.859 2.97813ZM7.69797 3.79409H7.73451C10.0176 3.79409 11.9326 5.71364 11.9326 8.00213C11.9326 10.3278 10.0176 12.2102 7.73451 12.2102H7.69797C5.4149 12.2102 3.53698 10.3278 3.53698 8.00213C3.53698 5.71364 5.4149 3.79409 7.69797 3.79409ZM7.69797 5.23376H7.73451C9.24438 5.23376 10.4963 6.48867 10.4963 8.00213C10.4963 9.5522 9.24438 10.8071 7.73451 10.8071H7.69797C6.1881 10.8071 4.93615 9.5522 4.93615 8.00213C4.93615 6.48867 6.1881 5.23376 7.69797 5.23376ZM4.19949 1.61386H11.233C11.9945 1.61486 12.7245 1.91856 13.2629 2.45834C13.8013 2.99811 14.1041 3.7299 14.105 4.49319V11.5062C14.104 12.2694 13.8011 13.0011 13.2627 13.5407C12.7243 14.0804 11.9944 14.384 11.233 14.385H4.19949C3.4381 14.384 2.70818 14.0804 2.1698 13.5407C1.63141 13.0011 1.32852 12.2694 1.32752 11.5062V4.49427C1.32837 3.73098 1.63121 2.99919 2.16961 2.45942C2.70801 1.91964 3.43801 1.61594 4.19949 1.61494V1.61386Z"
      fill={props.fill}
    />
  </svg>
);

export const EllipsisIcon = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 10.8334C10.4603 10.8334 10.8334 10.4603 10.8334 10C10.8334 9.53978 10.4603 9.16669 10 9.16669C9.5398 9.16669 9.16671 9.53978 9.16671 10C9.16671 10.4603 9.5398 10.8334 10 10.8334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.8334 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10C16.6667 9.53978 16.2936 9.16669 15.8334 9.16669C15.3731 9.16669 15 9.53978 15 10C15 10.4603 15.3731 10.8334 15.8334 10.8334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.16671 10.8334C4.62694 10.8334 5.00004 10.4603 5.00004 10C5.00004 9.53978 4.62694 9.16669 4.16671 9.16669C3.70647 9.16669 3.33337 9.53978 3.33337 10C3.33337 10.4603 3.70647 10.8334 4.16671 10.8334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LightningBoltIcon = (props: SVGProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.51562 12.6003C6.51562 12.9092 6.7567 13.1427 7.08817 13.1427H11.4576L9.15988 19.3126C8.851 20.1338 9.70229 20.5707 10.2447 19.9078L17.281 11.1991C17.4166 11.0258 17.4844 10.8676 17.4844 10.6943C17.4844 10.3779 17.2433 10.1519 16.9118 10.1519H12.5424L14.8401 3.97447C15.149 3.15332 14.2977 2.71638 13.7553 3.38686L6.72656 12.0956C6.59096 12.2613 6.51562 12.4195 6.51562 12.6003Z"
      fill="#FB118E"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1845_11847"
        x1="17.4844"
        y1="3.05859"
        x2="1.90385"
        y2="13.0107"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4673FA" />
        <stop offset="1" stopColor="#9646FA" />
      </linearGradient>
    </defs>
  </svg>
);

export const SweepIcon = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.4177 11.9534C12.3508 11.6675 11.2541 12.3006 10.9682 13.3676C9.90129 13.0817 8.80461 13.7148 8.51873 14.7818L8.25991 15.7477M13.4177 11.9534C14.4846 12.2392 15.1178 13.3359 14.8319 14.4028C15.8989 14.6887 16.532 15.7855 16.2461 16.8524L15.9873 17.8183M13.4177 11.9534L16.0059 2.2941M8.25991 15.7477L15.9873 17.8183M8.25991 15.7477C8.25991 15.7477 7.74227 17.6796 7.48345 18.6455C7.22463 19.6114 5.99989 20.3185 5.99989 20.3185C9.86359 21.3538 12.3131 19.9396 12.3131 19.9396L11.7954 21.8714C13.4053 22.3028 14.9197 21.8027 15.2109 20.716L15.9873 17.8183"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.18229 6.58808C5.25706 6.38601 5.54287 6.38601 5.61764 6.58808C5.99377 7.60457 6.79521 8.406 7.8117 8.78214C8.01377 8.85691 8.01377 9.14272 7.8117 9.21749C6.79521 9.59363 5.99377 10.3951 5.61764 11.4116C5.54286 11.6136 5.25706 11.6136 5.18229 11.4116C4.80615 10.3951 4.00471 9.59363 2.98822 9.21749C2.78615 9.14272 2.78615 8.85691 2.98822 8.78214C4.00471 8.406 4.80615 7.60457 5.18229 6.58808Z"
      fill="currentColor"
    />
  </svg>
);

export const CrossIcon = (props: SVGProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.0304 17.9341C8.66126 18.3032 8.64369 18.9624 9.03919 19.3403C9.41712 19.7358 10.0851 19.7183 10.4542 19.3491L14.7169 15.0864L18.9796 19.3491C19.3576 19.7271 20.0079 19.7358 20.3859 19.3403C20.7814 18.9624 20.7726 18.3032 20.3947 17.9253L16.132 13.6626L20.3947 9.40869C20.7726 9.02197 20.7814 8.37158 20.3859 7.99365C20.0079 7.59814 19.3576 7.60693 18.9796 7.98486L14.7169 12.2476L10.4542 7.98486C10.0851 7.61572 9.41712 7.59814 9.03919 7.99365C8.64369 8.37158 8.66126 9.03076 9.0304 9.3999L13.2931 13.6626L9.0304 17.9341Z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5166 5.71191C8.91211 5.29883 9.52734 5.30762 9.91406 5.71191L14.3438 10.2471C14.5195 10.4229 14.6338 10.6953 14.6338 10.9326C14.6338 11.4863 14.2471 11.8643 13.7021 11.8643C13.4385 11.8643 13.2275 11.7764 13.0518 11.5918L11.2412 9.71094L10.0811 8.375L10.1514 10.2383L10.1514 21.6465C10.1514 22.1914 9.75586 22.5869 9.21094 22.5869C8.66602 22.5869 8.2793 22.1914 8.2793 21.6465L8.2793 10.2383L8.34082 8.375L7.18945 9.71094L5.37891 11.5918C5.20313 11.7764 4.9834 11.8643 4.71973 11.8643C4.18359 11.8643 3.79688 11.4863 3.79688 10.9326C3.79688 10.6953 3.91113 10.4229 4.08691 10.2471L8.5166 5.71191ZM20.1533 22.2793C19.7578 22.6924 19.1426 22.6836 18.7559 22.2793L14.3262 17.7529C14.1504 17.5684 14.0361 17.2959 14.0361 17.0586C14.0361 16.5137 14.4229 16.1357 14.9678 16.1357C15.2227 16.1357 15.4424 16.2236 15.6182 16.3994L17.4287 18.2803L18.5801 19.6162L18.5186 17.7529L18.5186 6.34473C18.5186 5.80859 18.9141 5.4043 19.459 5.4043C19.9951 5.4043 20.3906 5.80859 20.3906 6.34473L20.3906 17.7529L20.3291 19.6162L21.4805 18.2803L23.291 16.3994C23.4668 16.2236 23.6865 16.1357 23.9414 16.1357C24.4863 16.1357 24.873 16.5137 24.873 17.0586C24.873 17.2959 24.7588 17.5684 24.583 17.7529L20.1533 22.2793Z"
      fill="currentColor"
    />
  </svg>
);

export const ReversedArrowsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 3 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.4834 5.71191C19.0879 5.29883 18.4727 5.30762 18.0859 5.71191L13.6562 10.2471C13.4805 10.4229 13.3662 10.6953 13.3662 10.9326C13.3662 11.4863 13.7529 11.8643 14.2979 11.8643C14.5615 11.8643 14.7725 11.7764 14.9482 11.5918L16.7588 9.71094L17.9189 8.375L17.8486 10.2383L17.8486 21.6465C17.8486 22.1914 18.2441 22.5869 18.7891 22.5869C19.334 22.5869 19.7207 22.1914 19.7207 21.6465L19.7207 10.2383L19.6592 8.375L20.8105 9.71094L22.6211 11.5918C22.7969 11.7764 23.0166 11.8643 23.2803 11.8643C23.8164 11.8643 24.2031 11.4863 24.2031 10.9326C24.2031 10.6953 24.0889 10.4229 23.9131 10.2471L19.4834 5.71191ZM7.84668 22.2793C8.24218 22.6924 8.85742 22.6836 9.24414 22.2793L13.6738 17.7529C13.8496 17.5684 13.9639 17.2959 13.9639 17.0586C13.9639 16.5137 13.5771 16.1357 13.0322 16.1357C12.7773 16.1357 12.5576 16.2236 12.3818 16.3994L10.5713 18.2803L9.41992 19.6162L9.48144 17.7529L9.48144 6.34473C9.48144 5.80859 9.08594 5.4043 8.54101 5.4043C8.00488 5.4043 7.60937 5.80859 7.60937 6.34473L7.60937 17.7529L7.6709 19.6162L6.51953 18.2803L4.70898 16.3994C4.5332 16.2236 4.31347 16.1357 4.05859 16.1357C3.51367 16.1357 3.12695 16.5137 3.12695 17.0586C3.12695 17.2959 3.24121 17.5684 3.41699 17.7529L7.84668 22.2793Z"
      fill="currentColor"
    />
  </svg>
);

export const RarityVerifiedIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5686 3.53439C4.74662 3.33093 5.0038 3.21423 5.27414 3.21423L10.1451 3.21423C10.4154 3.21423 10.6726 3.33093 10.8506 3.53438L13.0437 6.04077C13.3654 6.40839 13.3509 6.96139 13.0104 7.31163L8.38181 12.0724C8.01367 12.4511 7.40558 12.4511 7.03744 12.0724L2.40887 7.31163C2.06836 6.96139 2.05385 6.40839 2.37552 6.04077L4.5686 3.53439Z"
      fill="#4673FA"
    />
    <path
      d="M7.50864 9.74988C7.31466 9.74988 7.15641 9.6669 7.01348 9.47501L5.76283 7.92953C5.67094 7.81544 5.625 7.69097 5.625 7.56131C5.625 7.29682 5.82919 7.079 6.09463 7.079C6.25288 7.079 6.37539 7.14123 6.50301 7.30719L7.48822 8.5778L9.60157 5.14456C9.70877 4.96823 9.85681 4.87488 10.0151 4.87488C10.2703 4.87488 10.5 5.05639 10.5 5.32607C10.5 5.44536 10.4438 5.57501 10.3673 5.69429L7.97827 9.47501C7.86597 9.65653 7.69751 9.74988 7.50864 9.74988Z"
      fill="white"
    />
  </svg>
);

export const BrokenLinkIcon = (props: SVGProps) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_79_4612)">
      <path
        d="M14.4344 11.3181L16.9344 8.81813C17.6934 8.03229 18.1133 6.97978 18.1039 5.8873C18.0944 4.79481 17.6562 3.74976 16.8836 2.97722C16.1111 2.20469 15.066 1.76649 13.9735 1.75699C12.8811 1.7475 11.8286 2.16748 11.0427 2.92647L9.60938 4.35147"
        stroke="#98A1C0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.20088 8.75098L2.70088 11.251C1.94189 12.0368 1.52191 13.0893 1.53141 14.1818C1.5409 15.2743 1.9791 16.3194 2.75164 17.0919C3.52417 17.8644 4.56922 18.3026 5.66171 18.3121C6.7542 18.3216 7.80671 17.9016 8.59255 17.1426L10.0175 15.7176"
        stroke="#98A1C0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 3.24316L14.7368 16.6952"
        stroke="#98A1C0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_79_4612">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0.128906 0.0341797)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const RowsCollpsedIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9912 5.42773C13.71 5.42773 13.4639 5.55957 13.1738 5.78809L7.24121 10.5869C7.03027 10.7627 6.89844 11.0264 6.89844 11.3516C6.89844 11.9492 7.38184 12.3887 7.93555 12.3887C8.19043 12.3887 8.44531 12.292 8.7002 12.0898L14 7.81836L19.291 12.0898C19.5371 12.292 19.8008 12.3887 20.0557 12.3887C20.6094 12.3887 21.0928 11.9492 21.0928 11.3516C21.0928 11.0264 20.9609 10.7627 20.75 10.5869L14.8086 5.78809C14.5273 5.55957 14.2812 5.42773 13.9912 5.42773ZM13.9912 21.7139C14.2812 21.7139 14.5273 21.5908 14.8086 21.3623L20.75 16.5635C20.9609 16.3789 21.0928 16.1152 21.0928 15.7988C21.0928 15.1924 20.6094 14.7529 20.0557 14.7529C19.8008 14.7529 19.5371 14.8584 19.291 15.0605L14 19.332L8.7002 15.0605C8.44531 14.8584 8.19043 14.7529 7.93555 14.7529C7.38184 14.7529 6.89844 15.1924 6.89844 15.7988C6.89844 16.1152 7.03027 16.3789 7.24121 16.5635L13.1738 21.3535C13.4639 21.5908 13.71 21.7139 13.9912 21.7139Z"
      fill="#70757A"
    />
  </svg>
);

export const RowsExpandedIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9912 11.9609C14.2812 11.9609 14.5273 11.8379 14.8086 11.6094L20.75 6.81055C20.9609 6.62598 21.0928 6.3623 21.0928 6.0459C21.0928 5.43945 20.6094 5 20.0557 5C19.8008 5 19.5371 5.10547 19.291 5.30762L14 9.5791L8.7002 5.30762C8.44531 5.10547 8.19043 5 7.93555 5C7.38184 5 6.89844 5.43945 6.89844 6.0459C6.89844 6.3623 7.03027 6.62598 7.24121 6.81055L13.1738 11.6006C13.4639 11.8379 13.71 11.9609 13.9912 11.9609Z"
      fill="#70757A"
    />
    <path
      d="M14.0928 15C13.8115 15 13.5654 15.1318 13.2754 15.3604L7.34277 20.1592C7.13184 20.335 7 20.5986 7 20.9238C7 21.5215 7.4834 21.9609 8.03711 21.9609C8.29199 21.9609 8.54688 21.8643 8.80176 21.6621L14.1016 17.3906L19.3926 21.6621C19.6387 21.8643 19.9023 21.9609 20.1572 21.9609C20.7109 21.9609 21.1943 21.5215 21.1943 20.9238C21.1943 20.5986 21.0625 20.335 20.8516 20.1592L14.9102 15.3604C14.6289 15.1318 14.3828 15 14.0928 15Z"
      fill="#70757A"
    />
  </svg>
);

export const ClockIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7474 4.99984C10.7474 4.58562 10.4116 4.24984 9.9974 4.24984C9.58318 4.24984 9.2474 4.58562 9.2474 4.99984H10.7474ZM9.9974 9.99984H9.2474C9.2474 10.2839 9.4079 10.5436 9.66199 10.6707L9.9974 9.99984ZM12.9953 12.3373C13.3658 12.5226 13.8163 12.3724 14.0015 12.0019C14.1868 11.6314 14.0366 11.1809 13.6661 10.9957L12.9953 12.3373ZM17.5807 9.99984C17.5807 14.188 14.1856 17.5832 9.9974 17.5832V19.0832C15.014 19.0832 19.0807 15.0164 19.0807 9.99984H17.5807ZM9.9974 17.5832C5.80924 17.5832 2.41406 14.188 2.41406 9.99984H0.914062C0.914062 15.0164 4.98081 19.0832 9.9974 19.0832V17.5832ZM2.41406 9.99984C2.41406 5.81168 5.80924 2.4165 9.9974 2.4165V0.916504C4.98081 0.916504 0.914062 4.98325 0.914062 9.99984H2.41406ZM9.9974 2.4165C14.1856 2.4165 17.5807 5.81168 17.5807 9.99984H19.0807C19.0807 4.98325 15.014 0.916504 9.9974 0.916504V2.4165ZM9.2474 4.99984V9.99984H10.7474V4.99984H9.2474ZM9.66199 10.6707L12.9953 12.3373L13.6661 10.9957L10.3328 9.32902L9.66199 10.6707Z"
      fill={vars.color.gray300}
    />
  </svg>
);

export const ApprovedCheckmarkIcon = (props: SVGProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.7464 21.1101C13.3792 21.6796 12.8372 22 12.2076 22C11.5607 22 11.0536 21.733 10.5814 21.1101L6.45464 15.9844C6.15738 15.6107 6 15.2191 6 14.792C6 13.9021 6.66448 13.208 7.52131 13.208C8.0459 13.208 8.46557 13.4038 8.88525 13.9555L12.1377 18.1735L19.0448 6.88988C19.412 6.28476 19.8842 6 20.4087 6C21.2306 6 22 6.58732 22 7.4594C22 7.86874 21.7902 8.29588 21.5628 8.66963L13.7464 21.1101Z"
      fill="currentColor"
    />
  </svg>
);

export const FilterIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="1 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.3332 2.5H1.6665L8.33317 10.3833V15.8333L11.6665 17.5V10.3833L18.3332 2.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MagnifyingGlassIcon = (props: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 15L11.2439 11.2439M12.3821 6.69106C12.3821 9.83414 9.83414 12.3821 6.69106 12.3821C3.54797 12.3821 1 9.83414 1 6.69106C1 3.54797 3.54797 1 6.69106 1C9.83414 1 12.3821 3.54797 12.3821 6.69106Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NavMagnifyingGlassIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-cy="magnifying-icon"
  >
    <path
      d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 21L16 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BagIcon = (props: SVGProps) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M19.2893 5H4.5115C3.34557 5 2.40039 5.89543 2.40039 7V21C2.40039 22.1046 3.34557 23 4.5115 23H19.2893C20.4552 23 21.4004 22.1046 21.4004 21V7C21.4004 5.89543 20.4552 5 19.2893 5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 5L9 4.25C9 3.45435 9.31607 2.69129 9.87868 2.12868C10.4413 1.56607 11.2044 1.25 12 1.25C12.7957 1.25 13.5587 1.56607 14.1213 2.12868C14.6839 2.69129 15 3.45435 15 4.25L15 5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HundredsOverflowIcon = () => (
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.781304 6.5554C0.565868 6.5554 0.381209 6.47964 0.227327 6.32812C0.073444 6.17661 -0.00231359 5.99195 5.38039e-05 5.77415C-0.00231359 5.56108 0.073444 5.37879 0.227327 5.22727C0.381209 5.07576 0.565868 5 0.781304 5C0.989637 5 1.17075 5.07576 1.32463 5.22727C1.48088 5.37879 1.56019 5.56108 1.56255 5.77415C1.56019 5.91856 1.52231 6.04995 1.44892 6.16832C1.37789 6.2867 1.2832 6.38139 1.16483 6.45242C1.04882 6.52107 0.920982 6.5554 0.781304 6.5554Z"
      fill="white"
    />
    <path
      d="M3.68169 6.5554C3.46626 6.5554 3.2816 6.47964 3.12772 6.32812C2.97383 6.17661 2.89808 5.99195 2.90044 5.77415C2.89808 5.56108 2.97383 5.37879 3.12772 5.22727C3.2816 5.07576 3.46626 5 3.68169 5C3.89003 5 4.07114 5.07576 4.22502 5.22727C4.38127 5.37879 4.46058 5.56108 4.46294 5.77415C4.46058 5.91856 4.4227 6.04995 4.34931 6.16832C4.27829 6.2867 4.18359 6.38139 4.06522 6.45242C3.94921 6.52107 3.82137 6.5554 3.68169 6.5554Z"
      fill="white"
    />
    <path
      d="M6.58209 6.5554C6.36665 6.5554 6.18199 6.47964 6.02811 6.32812C5.87423 6.17661 5.79847 5.99195 5.80084 5.77415C5.79847 5.56108 5.87423 5.37879 6.02811 5.22727C6.18199 5.07576 6.36665 5 6.58209 5C6.79042 5 6.97153 5.07576 7.12541 5.22727C7.28166 5.37879 7.36097 5.56108 7.36333 5.77415C7.36097 5.91856 7.32309 6.04995 7.2497 6.16832C7.17868 6.2867 7.08398 6.38139 6.96561 6.45242C6.8496 6.52107 6.72176 6.5554 6.58209 6.5554Z"
      fill="white"
    />
  </svg>
);

export const TagIcon = (props: SVGProps) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M8.33333 8.33333H8.34097M20.7908 14.2092L14.2183 20.7817C14.0481 20.9521 13.8459 21.0873 13.6233 21.1796C13.4007 21.2719 13.1622 21.3194 12.9213 21.3194C12.6803 21.3194 12.4418 21.2719 12.2192 21.1796C11.9966 21.0873 11.7944 20.9521 11.6242 20.7817L3.75 12.9167V3.75H12.9167L20.7908 11.6242C21.1323 11.9677 21.324 12.4323 21.324 12.9167C21.324 13.401 21.1323 13.8657 20.7908 14.2092Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BarChartIcon = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 20V10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 20V4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 20V16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DiscordIcon = (props: SVGProps) => (
  <svg
    role="img"
    width="44"
    height="44"
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M27.2113 25.4989C25.6574 25.4989 24.3869 24.1067 24.3869 22.3837C24.3869 20.6607 25.63 19.2685 27.2113 19.2685C27.5983 19.2814 27.9789 19.3726 28.331 19.5367C28.6831 19.7007 28.9998 19.9345 29.2625 20.2243C29.5253 20.5141 29.729 20.8543 29.8617 21.225C29.9944 21.5956 30.0536 21.9895 30.0358 22.3837C30.0358 24.0927 28.7892 25.4989 27.2113 25.4989ZM16.7708 25.4989C15.2203 25.4989 13.9464 24.1067 13.9464 22.3837C13.9464 20.6607 15.1929 19.2685 16.7708 19.2685C17.1578 19.2814 17.5384 19.3726 17.8905 19.5367C18.2426 19.7007 18.5593 19.9345 18.822 20.2243C19.0848 20.5141 19.2885 20.8543 19.4212 21.225C19.5539 21.5956 19.6131 21.9895 19.5952 22.3837C19.5987 24.0927 18.3487 25.4989 16.7708 25.4989ZM32.8978 11.402C30.8261 10.4652 28.6454 9.80198 26.4087 9.42847C26.103 9.96986 25.8259 10.5276 25.5788 11.0992C23.2005 10.749 20.7851 10.749 18.4067 11.0992C18.1547 10.5281 17.8743 9.97046 17.5666 9.42847C15.3293 9.80279 13.1484 10.4684 11.0775 11.409C6.97921 17.4167 5.86241 23.2748 6.4191 29.0493C8.83313 30.8106 11.521 32.145 14.3699 32.9964C15.0139 32.1426 15.5852 31.2343 16.0775 30.2815C15.1502 29.9373 14.2533 29.5134 13.3965 29.0145C13.6185 28.8544 13.8405 28.6664 14.0522 28.5098C16.5478 29.6693 19.2586 30.2693 22.0013 30.2693C24.744 30.2693 27.4548 29.6693 29.9504 28.5098C30.1655 28.6838 30.3841 28.8578 30.6061 29.0145C29.7492 29.5157 28.851 29.9396 27.9217 30.2815C28.4139 31.2355 28.9852 32.145 29.6293 32.9999C32.4808 32.1479 35.171 30.8123 37.5869 29.0493C38.2222 22.3559 36.4531 16.55 32.8978 11.402Z"
      fill="currentColor"
    />
  </svg>
);

export const TwitterIcon = (props: SVGProps) => (
  <svg
    {...props}
    role="img"
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.7923 16.074C20.5417 9.18217 28.4609 5.08251 33.1294 10.0503C33.1294 10.0503 35.2141 9.43965 37.0472 8.21838C36.5107 9.80217 35.4837 11.1529 34.1294 12.0558C34.1294 12.0558 36.6307 11.7074 37.7143 11.0093C37.7143 11.0093 36.6307 13.3645 34.6306 14.2374C35.713 30.0313 19.4592 39.6302 6.28571 31.7758C6.28571 31.7758 12.7884 32.1242 15.5414 28.81C15.5414 28.81 11.5389 29.1643 9.53874 24.0997C9.53874 24.0997 11.0388 24.7103 12.54 23.9249C12.54 23.9249 7.87157 23.1394 7.45393 17.2953C7.45393 17.2953 8.95516 18.5165 10.6223 18.0795C10.6223 18.0795 5.45382 14.8527 8.37161 9.00736C8.37161 9.00736 13.8731 16.3303 21.7934 16.074H21.7923Z"
      fill="currentColor"
    />
  </svg>
);

export const DiscordIconMenu = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17.0325 6.95914C16.0748 6.51107 15.0508 6.18542 13.9802 6C13.8487 6.23771 13.6951 6.55743 13.5892 6.81177C12.4512 6.64062 11.3236 6.64062 10.2065 6.81177C10.1006 6.55743 9.94354 6.23771 9.81089 6C8.73916 6.18542 7.71399 6.51226 6.7563 6.96152C4.82465 9.8805 4.30101 12.727 4.56283 15.5331C5.844 16.4898 7.08562 17.071 8.30628 17.4513C8.60767 17.0365 8.87646 16.5956 9.10803 16.1309C8.66701 15.9633 8.24461 15.7565 7.84549 15.5164C7.95137 15.438 8.05494 15.356 8.15501 15.2716C10.5894 16.4102 13.2343 16.4102 15.6396 15.2716C15.7408 15.356 15.8444 15.438 15.9491 15.5164C15.5488 15.7577 15.1253 15.9645 14.6842 16.1321C14.9158 16.5956 15.1834 17.0377 15.486 17.4525C16.7078 17.0722 17.9506 16.491 19.2318 15.5331C19.539 12.2801 18.707 9.45977 17.0325 6.95914ZM9.43967 13.8074C8.70891 13.8074 8.10962 13.1251 8.10962 12.2944C8.10962 11.4636 8.69611 10.7802 9.43967 10.7802C10.1833 10.7802 10.7825 11.4624 10.7697 12.2944C10.7709 13.1251 10.1833 13.8074 9.43967 13.8074ZM14.3549 13.8074C13.6242 13.8074 13.0249 13.1251 13.0249 12.2944C13.0249 11.4636 13.6113 10.7802 14.3549 10.7802C15.0985 10.7802 15.6978 11.4624 15.685 12.2944C15.685 13.1251 15.0985 13.8074 14.3549 13.8074Z"
      fill="currentColor"
    />
  </svg>
);

export const TwitterIconMenu = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18.955 7.34849C18.4393 7.57725 17.885 7.73179 17.3033 7.80132C17.897 7.44542 18.3531 6.88184 18.5678 6.21026C18.012 6.53989 17.3966 6.77916 16.7415 6.90812C16.217 6.34918 15.4695 6 14.6424 6C13.0542 6 11.7665 7.28758 11.7665 8.87576C11.7665 9.10117 11.7919 9.32068 11.841 9.53116C9.45084 9.41124 7.33181 8.26628 5.91338 6.52636C5.66583 6.95109 5.52397 7.44507 5.52397 7.97213C5.52397 8.96989 6.03168 9.85012 6.80335 10.3658C6.33194 10.3509 5.8885 10.2215 5.50077 10.0061C5.50044 10.0181 5.50044 10.0302 5.50044 10.0423C5.50044 11.4356 6.49176 12.5979 7.80738 12.8623C7.56607 12.928 7.312 12.9631 7.04973 12.9631C6.86442 12.9631 6.6843 12.9451 6.50866 12.9116C6.87465 14.054 7.93669 14.8855 9.19518 14.9086C8.21094 15.68 6.97095 16.1398 5.62352 16.1398C5.39139 16.1398 5.16248 16.1261 4.9375 16.0996C6.21022 16.9156 7.72187 17.3917 9.34594 17.3917C14.6357 17.3917 17.5284 13.0096 17.5284 9.20917C17.5284 9.08449 17.5256 8.9605 17.52 8.83708C18.0819 8.43169 18.5694 7.92524 18.955 7.34849H18.955Z"
      fill="currentColor"
    />
  </svg>
);

export const GithubIconMenu = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.25C8.27062 5.25 5.25 8.34703 5.25 12.1707C5.25 15.2332 7.18219 17.8198 9.86531 18.7368C10.2028 18.7973 10.3294 18.5897 10.3294 18.408C10.3294 18.2437 10.3209 17.6987 10.3209 17.1191C8.625 17.4391 8.18625 16.6952 8.05125 16.3059C7.97531 16.1069 7.64625 15.4927 7.35938 15.3283C7.12312 15.1986 6.78562 14.8785 7.35094 14.8698C7.8825 14.8612 8.26219 15.3716 8.38875 15.5792C8.99625 16.626 9.96656 16.3318 10.3547 16.1502C10.4138 15.7003 10.5909 15.3975 10.785 15.2245C9.28312 15.0515 7.71375 14.4546 7.71375 11.8074C7.71375 11.0548 7.97531 10.4319 8.40563 9.94745C8.33812 9.77443 8.10187 9.06505 8.47312 8.11345C8.47312 8.11345 9.03844 7.93178 10.3294 8.82283C10.8694 8.66711 11.4431 8.58925 12.0169 8.58925C12.5906 8.58925 13.1644 8.66711 13.7044 8.82283C14.9953 7.92313 15.5606 8.11345 15.5606 8.11345C15.9319 9.06505 15.6956 9.77443 15.6281 9.94745C16.0584 10.4319 16.32 11.0461 16.32 11.8074C16.32 14.4632 14.7422 15.0515 13.2403 15.2245C13.485 15.4408 13.6959 15.856 13.6959 16.5048C13.6959 17.4305 13.6875 18.1745 13.6875 18.408C13.6875 18.5897 13.8141 18.806 14.1516 18.7368C16.8178 17.8198 18.75 15.2245 18.75 12.1707C18.75 8.34703 15.7294 5.25 12 5.25Z"
      fill="currentColor"
    />
  </svg>
);

export const CheckMarkIcon = (props: SVGProps) => (
  <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.6693 5.33789L7.5026 14.3175L3.33594 10.2358"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GovernanceIcon = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18.75 16.5V6.00002C18.7512 5.7042 18.6939 5.41106 18.5813 5.13752C18.4686 4.86397 18.3029 4.61544 18.0938 4.40626C17.8846 4.19708 17.636 4.0314 17.3625 3.91876C17.089 3.80613 16.7958 3.74878 16.5 3.75002H3.75"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.75 8.75H15.75"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.75 12.75H15.75"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.07187 7.49977C1.829 7.22785 1.65585 6.90097 1.56733 6.54728C1.4788 6.19359 1.47756 5.82369 1.56369 5.46941C1.64983 5.11513 1.82077 4.7871 2.0618 4.51353C2.30283 4.23997 2.60673 4.02908 2.94734 3.89902C3.28795 3.76895 3.65507 3.72361 4.01709 3.76689C4.37911 3.81017 4.72519 3.94077 5.02554 4.14747C5.32589 4.35416 5.57151 4.63074 5.74126 4.95342C5.91101 5.27609 5.9998 5.63518 6 5.99977V17.9998C6.00019 18.3644 6.08899 18.7235 6.25874 19.0461C6.42849 19.3688 6.67411 19.6454 6.97446 19.8521C7.27481 20.0588 7.62089 20.1894 7.98291 20.2327C8.34493 20.2759 8.71205 20.2306 9.05266 20.1005C9.39327 19.9705 9.69717 19.7596 9.9382 19.486C10.1792 19.2125 10.3502 18.8844 10.4363 18.5301C10.5224 18.1759 10.5212 17.806 10.4327 17.4523C10.3441 17.0986 10.171 16.7717 9.92813 16.4998H20.4281C20.7177 16.8236 20.9074 17.2243 20.9743 17.6536C21.0411 18.0828 20.9823 18.5223 20.8048 18.9188C20.6274 19.3154 20.3389 19.6521 19.9743 19.8882C19.6096 20.1244 19.1844 20.25 18.75 20.2498H8.25"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronLeftIcon = (props: SVGProps) => (
  <svg
    width="8"
    height="16"
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 1L1 7L7 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronRightIcon = styled(ChevronLeftIcon)`
  transform: rotate(180deg);
`;

export const TrendingArrow = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.5 5.8335H18.25C18.25 5.41928 17.9142 5.0835 17.5 5.0835V5.8335ZM11.0227 12.4307L10.4876 12.9562C10.6286 13.0998 10.8214 13.1807 11.0227 13.1807C11.224 13.1807 11.4169 13.0998 11.5579 12.9562L11.0227 12.4307ZM7.61364 8.9585L8.14881 8.43305C8.00778 8.28941 7.81493 8.2085 7.61364 8.2085C7.41234 8.2085 7.21949 8.28941 7.07846 8.43305L7.61364 8.9585ZM1.96483 13.6414C1.67463 13.937 1.67899 14.4118 1.97456 14.702C2.27013 14.9922 2.74498 14.9878 3.03517 14.6923L1.96483 13.6414ZM13.4091 5.0835C12.9949 5.0835 12.6591 5.41928 12.6591 5.8335C12.6591 6.24771 12.9949 6.5835 13.4091 6.5835V5.0835ZM16.75 10.0002C16.75 10.4144 17.0858 10.7502 17.5 10.7502C17.9142 10.7502 18.25 10.4144 18.25 10.0002H16.75ZM16.9648 5.30805L10.4876 11.9053L11.5579 12.9562L18.0352 6.35894L16.9648 5.30805ZM11.5579 11.9053L8.14881 8.43305L7.07846 9.48394L10.4876 12.9562L11.5579 11.9053ZM7.07846 8.43305L1.96483 13.6414L3.03517 14.6923L8.14881 9.48394L7.07846 8.43305ZM13.4091 6.5835H17.5V5.0835H13.4091V6.5835ZM16.75 5.8335V10.0002H18.25V5.8335H16.75Z"
      fill={vars.color.gray300}
    />
  </svg>
);
export const ActivityListingIcon = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.7254 9.93992L9.94537 14.7199C9.82153 14.8439 9.67448 14.9422 9.51262 15.0093C9.35076 15.0764 9.17725 15.111 9.00203 15.111C8.82681 15.111 8.65331 15.0764 8.49145 15.0093C8.32958 14.9422 8.18253 14.8439 8.0587 14.7199L2.33203 8.99992V2.33325H8.9987L14.7254 8.05992C14.9737 8.30974 15.1131 8.64767 15.1131 8.99992C15.1131 9.35217 14.9737 9.6901 14.7254 9.93992V9.93992Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.66797 5.66675H5.6763"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ActivitySaleIcon = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.6667 4.00012H3.33333C2.59695 4.00012 2 4.54733 2 5.22234V13.7779C2 14.4529 2.59695 15.0001 3.33333 15.0001H12.6667C13.403 15.0001 14 14.4529 14 13.7779V5.22234C14 4.54733 13.403 4.00012 12.6667 4.00012Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 6.66675C10 7.19718 9.78929 7.70589 9.41421 8.08096C9.03914 8.45603 8.53043 8.66675 8 8.66675C7.46957 8.66675 6.96086 8.45603 6.58579 8.08096C6.21071 7.70589 6 7.19718 6 6.66675"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 4.00012L6 3.50012C6 2.96969 6.21071 2.46098 6.58579 2.08591C6.96086 1.71083 7.46957 1.50012 8 1.50012C8.53043 1.50012 9.03914 1.71083 9.41421 2.08591C9.78929 2.46098 10 2.96969 10 3.50012L10 4.00012"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ActivityTransferIcon = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.6654 1.33337L7.33203 8.66671"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6654 1.33337L9.9987 14.6667L7.33203 8.66671L1.33203 6.00004L14.6654 1.33337Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ActivityExternalLinkIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="path-1-outside-1_3799_46574"
      maskUnits="userSpaceOnUse"
      x="2"
      y="2"
      width="15"
      height="15"
      fill="black"
    >
      <rect fill="white" x="2" y="2" width="15" height="15" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0078 3.5C11.0078 3.22386 11.2317 3 11.5078 3H15.5094L15.5127 3.00001C15.6416 2.99918 15.7709 3.04794 15.8693 3.14631C15.9877 3.26455 16.0344 3.42734 16.0094 3.58074V7.50474C16.0094 7.78088 15.7855 8.00474 15.5094 8.00474C15.2332 8.00474 15.0094 7.78088 15.0094 7.50474V4.71431L8.53338 11.1954C8.3382 11.3908 8.02161 11.3909 7.82627 11.1957C7.63093 11.0005 7.63081 10.6839 7.82599 10.4886L14.3095 4H11.5078C11.2317 4 11.0078 3.77614 11.0078 3.5ZM4.24437 6.24684C4.40078 6.09031 4.61283 6.00244 4.83386 6.00244H8.83544C9.11158 6.00244 9.33544 5.77858 9.33544 5.50244C9.33544 5.2263 9.11158 5.00244 8.83544 5.00244H4.83386C4.34736 5.00244 3.88087 5.19586 3.53699 5.54001C3.19311 5.88416 3 6.35083 3 6.83735V14.1794C3 14.6659 3.19311 15.1326 3.53699 15.4767C3.88087 15.8209 4.34736 16.0143 4.83386 16.0143H12.1701C12.6566 16.0143 13.1231 15.8209 13.467 15.4767C13.8108 15.1326 14.0039 14.6659 14.0039 14.1794V10.1746C14.0039 9.8985 13.7801 9.67464 13.5039 9.67464C13.2278 9.67464 13.0039 9.8985 13.0039 10.1746V14.1794C13.0039 14.4009 12.916 14.6133 12.7596 14.7699C12.6032 14.9264 12.3911 15.0143 12.1701 15.0143H4.83386C4.61283 15.0143 4.40078 14.9264 4.24437 14.7699C4.08795 14.6133 4 14.4009 4 14.1794V6.83735C4 6.61579 4.08795 6.40339 4.24437 6.24684Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.0078 3.5C11.0078 3.22386 11.2317 3 11.5078 3H15.5094L15.5127 3.00001C15.6416 2.99918 15.7709 3.04794 15.8693 3.14631C15.9877 3.26455 16.0344 3.42734 16.0094 3.58074V7.50474C16.0094 7.78088 15.7855 8.00474 15.5094 8.00474C15.2332 8.00474 15.0094 7.78088 15.0094 7.50474V4.71431L8.53338 11.1954C8.3382 11.3908 8.02161 11.3909 7.82627 11.1957C7.63093 11.0005 7.63081 10.6839 7.82599 10.4886L14.3095 4H11.5078C11.2317 4 11.0078 3.77614 11.0078 3.5ZM4.24437 6.24684C4.40078 6.09031 4.61283 6.00244 4.83386 6.00244H8.83544C9.11158 6.00244 9.33544 5.77858 9.33544 5.50244C9.33544 5.2263 9.11158 5.00244 8.83544 5.00244H4.83386C4.34736 5.00244 3.88087 5.19586 3.53699 5.54001C3.19311 5.88416 3 6.35083 3 6.83735V14.1794C3 14.6659 3.19311 15.1326 3.53699 15.4767C3.88087 15.8209 4.34736 16.0143 4.83386 16.0143H12.1701C12.6566 16.0143 13.1231 15.8209 13.467 15.4767C13.8108 15.1326 14.0039 14.6659 14.0039 14.1794V10.1746C14.0039 9.8985 13.7801 9.67464 13.5039 9.67464C13.2278 9.67464 13.0039 9.8985 13.0039 10.1746V14.1794C13.0039 14.4009 12.916 14.6133 12.7596 14.7699C12.6032 14.9264 12.3911 15.0143 12.1701 15.0143H4.83386C4.61283 15.0143 4.40078 14.9264 4.24437 14.7699C4.08795 14.6133 4 14.4009 4 14.1794V6.83735C4 6.61579 4.08795 6.40339 4.24437 6.24684Z"
      fill="currentColor"
    />
    <path
      d="M15.5094 3L15.51 2.8H15.5094V3ZM15.5127 3.00001L15.512 3.20002L15.514 3.20001L15.5127 3.00001ZM15.8693 3.14631L16.0107 3.00483V3.00483L15.8693 3.14631ZM16.0094 3.58074L15.812 3.54861C15.8103 3.55923 15.8094 3.56998 15.8094 3.58074H16.0094ZM15.0094 4.71431H15.2094C15.2094 4.6334 15.1606 4.56047 15.0859 4.52952C15.0111 4.49857 14.9251 4.51571 14.8679 4.57294L15.0094 4.71431ZM8.53338 11.1954L8.67486 11.3368V11.3368L8.53338 11.1954ZM7.82627 11.1957L7.68491 11.3372L7.82627 11.1957ZM7.82599 10.4886L7.96747 10.63L7.82599 10.4886ZM14.3095 4L14.451 4.14137C14.5081 4.08415 14.5252 3.99814 14.4942 3.92343C14.4633 3.84871 14.3904 3.8 14.3095 3.8V4ZM4.24437 6.24684L4.38585 6.38821H4.38585L4.24437 6.24684ZM3.53699 5.54001L3.39551 5.39865H3.39551L3.53699 5.54001ZM3.53699 15.4767L3.67846 15.3354L3.67846 15.3354L3.53699 15.4767ZM13.467 15.4767L13.6084 15.6181L13.467 15.4767ZM12.7596 14.7699L12.6181 14.6285L12.6181 14.6285L12.7596 14.7699ZM4.24437 14.7699L4.10289 14.9113H4.10289L4.24437 14.7699ZM11.5078 2.8C11.1212 2.8 10.8078 3.1134 10.8078 3.5H11.2078C11.2078 3.33431 11.3421 3.2 11.5078 3.2V2.8ZM15.5094 2.8H11.5078V3.2H15.5094V2.8ZM15.5133 2.80001L15.51 2.8L15.5087 3.2L15.512 3.20001L15.5133 2.80001ZM16.0107 3.00483C15.8729 2.86715 15.6916 2.79885 15.5114 2.80001L15.514 3.20001C15.5917 3.1995 15.6689 3.22873 15.728 3.28778L16.0107 3.00483ZM16.2068 3.61287C16.2417 3.39869 16.1765 3.17048 16.0107 3.00483L15.728 3.28778C15.7989 3.35862 15.8271 3.456 15.812 3.54861L16.2068 3.61287ZM16.2094 7.50474V3.58074H15.8094V7.50474H16.2094ZM15.5094 8.20474C15.896 8.20474 16.2094 7.89134 16.2094 7.50474H15.8094C15.8094 7.67042 15.6751 7.80474 15.5094 7.80474V8.20474ZM14.8094 7.50474C14.8094 7.89134 15.1228 8.20474 15.5094 8.20474V7.80474C15.3437 7.80474 15.2094 7.67042 15.2094 7.50474H14.8094ZM14.8094 4.71431V7.50474H15.2094V4.71431H14.8094ZM8.67486 11.3368L15.1509 4.85568L14.8679 4.57294L8.3919 11.0541L8.67486 11.3368ZM7.68491 11.3372C7.95838 11.6105 8.4016 11.6103 8.67486 11.3368L8.3919 11.0541C8.27479 11.1713 8.08484 11.1713 7.96764 11.0542L7.68491 11.3372ZM7.68452 10.3472C7.41126 10.6207 7.41143 11.0639 7.68491 11.3372L7.96764 11.0542C7.85044 10.9371 7.85036 10.7472 7.96747 10.63L7.68452 10.3472ZM14.168 3.85863L7.68452 10.3472L7.96747 10.63L14.451 4.14137L14.168 3.85863ZM11.5078 4.2H14.3095V3.8H11.5078V4.2ZM10.8078 3.5C10.8078 3.8866 11.1212 4.2 11.5078 4.2V3.8C11.3421 3.8 11.2078 3.66569 11.2078 3.5H10.8078ZM4.83386 5.80244C4.55974 5.80244 4.2968 5.91142 4.10289 6.10548L4.38585 6.38821C4.50476 6.2692 4.66593 6.20244 4.83386 6.20244V5.80244ZM8.83544 5.80244H4.83386V6.20244H8.83544V5.80244ZM9.13544 5.50244C9.13544 5.66813 9.00112 5.80244 8.83544 5.80244V6.20244C9.22204 6.20244 9.53544 5.88904 9.53544 5.50244H9.13544ZM8.83544 5.20244C9.00112 5.20244 9.13544 5.33676 9.13544 5.50244H9.53544C9.53544 5.11584 9.22204 4.80244 8.83544 4.80244V5.20244ZM4.83386 5.20244H8.83544V4.80244H4.83386V5.20244ZM3.67846 5.68138C3.98485 5.37475 4.40046 5.20244 4.83386 5.20244V4.80244C4.29427 4.80244 3.77689 5.01697 3.39551 5.39865L3.67846 5.68138ZM3.2 6.83735C3.2 6.40382 3.37208 5.988 3.67846 5.68138L3.39551 5.39865C3.01415 5.78031 2.8 6.29784 2.8 6.83735H3.2ZM3.2 14.1794V6.83735H2.8V14.1794H3.2ZM3.67846 15.3354C3.37208 15.0287 3.2 14.6129 3.2 14.1794H2.8C2.8 14.7189 3.01415 15.2364 3.39551 15.6181L3.67846 15.3354ZM4.83386 15.8143C4.40046 15.8143 3.98485 15.642 3.67846 15.3354L3.39551 15.6181C3.77689 15.9998 4.29427 16.2143 4.83386 16.2143V15.8143ZM12.1701 15.8143H4.83386V16.2143H12.1701V15.8143ZM13.3255 15.3354C13.0191 15.642 12.6035 15.8143 12.1701 15.8143V16.2143C12.7097 16.2143 13.2271 15.9998 13.6084 15.6181L13.3255 15.3354ZM13.8039 14.1794C13.8039 14.6129 13.6319 15.0287 13.3255 15.3354L13.6084 15.6181C13.9898 15.2364 14.2039 14.7189 14.2039 14.1794H13.8039ZM13.8039 10.1746V14.1794H14.2039V10.1746H13.8039ZM13.5039 9.87464C13.6696 9.87464 13.8039 10.009 13.8039 10.1746H14.2039C14.2039 9.78804 13.8905 9.47464 13.5039 9.47464V9.87464ZM13.2039 10.1746C13.2039 10.009 13.3383 9.87464 13.5039 9.87464V9.47464C13.1173 9.47464 12.8039 9.78804 12.8039 10.1746H13.2039ZM13.2039 14.1794V10.1746H12.8039V14.1794H13.2039ZM12.9011 14.9113C13.095 14.7172 13.2039 14.4539 13.2039 14.1794H12.8039C12.8039 14.3479 12.737 14.5095 12.6181 14.6285L12.9011 14.9113ZM12.1701 15.2143C12.4442 15.2143 12.7071 15.1053 12.9011 14.9113L12.6181 14.6285C12.4992 14.7475 12.338 14.8143 12.1701 14.8143V15.2143ZM4.83386 15.2143H12.1701V14.8143H4.83386V15.2143ZM4.10289 14.9113C4.2968 15.1053 4.55974 15.2143 4.83386 15.2143V14.8143C4.66593 14.8143 4.50476 14.7475 4.38585 14.6285L4.10289 14.9113ZM3.8 14.1794C3.8 14.4539 3.90898 14.7172 4.10289 14.9113L4.38585 14.6285C4.26691 14.5095 4.2 14.3479 4.2 14.1794H3.8ZM3.8 6.83735V14.1794H4.2V6.83735H3.8ZM4.10289 6.10548C3.90898 6.29954 3.8 6.5628 3.8 6.83735H4.2C4.2 6.66879 4.26691 6.50724 4.38585 6.38821L4.10289 6.10548Z"
      fill="currentColor"
      mask="url(#path-1-outside-1_3799_46574)"
    />
  </svg>
);

export const LargeTagIcon = (props: SVGProps) => (
  <svg
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M55.6215 80.6815L55.621 80.6819C55.0823 81.2212 54.4427 81.649 53.7386 81.9409C53.0345 82.2328 52.2797 82.383 51.5175 82.383C50.7553 82.383 50.0006 82.2328 49.2965 81.9409C48.5923 81.649 47.9527 81.2212 47.414 80.6819L47.413 80.681L17.7 51.0025V17.7H51.0029L80.714 47.411C80.7141 47.4111 80.7142 47.4112 80.7143 47.4113C81.7943 48.498 82.4006 49.9679 82.4006 51.5C82.4006 53.032 81.7944 54.5017 80.7146 55.5884C80.7144 55.5886 80.7142 55.5888 80.714 55.589L55.6215 80.6815Z"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="34" cy="34" r="3" fill="currentColor" />
  </svg>
);

export const CircularCloseIcon = (props: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="8" cy="8" r="8" fill="#293249" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.64645 4.64645C4.84171 4.45118 5.15829 4.45118 5.35355 4.64645L8 7.29289L10.6464 4.64645C10.8417 4.45118 11.1583 4.45118 11.3536 4.64645C11.5488 4.84171 11.5488 5.15829 11.3536 5.35355L8.70711 8L11.3536 10.6464C11.5488 10.8417 11.5488 11.1583 11.3536 11.3536C11.1583 11.5488 10.8417 11.5488 10.6464 11.3536L8 8.70711L5.35355 11.3536C5.15829 11.5488 4.84171 11.5488 4.64645 11.3536C4.45118 11.1583 4.45118 10.8417 4.64645 10.6464L7.29289 8L4.64645 5.35355C4.45118 5.15829 4.45118 4.84171 4.64645 4.64645Z"
      fill="white"
    />
  </svg>
);

export const SquareArrowDownIcon = (props: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.66797 4.66663L11.3346 11.3333M11.3346 11.3333V4.66663M11.3346 11.3333H4.66797"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SquareArrowUpIcon = (props: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.66797 11.3334L11.3346 4.66671M11.3346 4.66671V11.3334M11.3346 4.66671H4.66797"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseTimerIcon = (props: SVGProps) => (
  <svg
    width="11"
    height="12"
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.2435 3.95892C8.53639 3.66603 8.53639 3.19115 8.2435 2.89826C7.95061 2.60537 7.47573 2.60537 7.18284 2.89826L8.2435 3.95892ZM2.03998 8.04112C1.74709 8.33401 1.74709 8.80888 2.03998 9.10178C2.33288 9.39467 2.80775 9.39467 3.10064 9.10178L2.03998 8.04112ZM3.10064 2.89826C2.80775 2.60537 2.33288 2.60537 2.03998 2.89826C1.74709 3.19115 1.74709 3.66603 2.03998 3.95892L3.10064 2.89826ZM7.18284 9.10178C7.47573 9.39467 7.95061 9.39467 8.2435 9.10178C8.53639 8.80888 8.53639 8.33401 8.2435 8.04112L7.18284 9.10178ZM7.18284 2.89826L2.03998 8.04112L3.10064 9.10178L8.2435 3.95892L7.18284 2.89826ZM2.03998 3.95892L7.18284 9.10178L8.2435 8.04112L3.10064 2.89826L2.03998 3.95892Z"
      fill="currentColor"
    />
  </svg>
);

export const ChevronDownBagIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronUpBagIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 12.5L10 7.5L15 12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BagCloseIcon = (props: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L18.7071 6.70711ZM5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L5.29289 17.2929ZM6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L6.70711 5.29289ZM17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L17.2929 18.7071ZM17.2929 5.29289L5.29289 17.2929L6.70711 18.7071L18.7071 6.70711L17.2929 5.29289ZM5.29289 6.70711L17.2929 18.7071L18.7071 17.2929L6.70711 5.29289L5.29289 6.70711Z"
      fill="currentColor"
    />
  </svg>
);

export const CancelListingIcon = (props: SVGProps) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.6667 6L13.3933 6.72667C13.6417 6.97648 13.7811 7.31442 13.7811 7.66667C13.7811 8.01891 13.6417 8.35685 13.3933 8.60667L8.61333 13.3867C8.4895 13.5106 8.34245 13.609 8.18059 13.6761C8.01872 13.7432 7.84522 13.7777 7.67 13.7777C7.49478 13.7777 7.32128 13.7432 7.15941 13.6761C6.99755 13.609 6.8505 13.5106 6.72667 13.3867L6 12.6667M8.8 2.13333L7.66667 1H1V7.66667L2.13333 8.8M13.7811 1L1.10498 13.6761M4.33333 4.33333H4.33889"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ListingModalWindowActive = (props: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="8"
      cy="8"
      r="8"
      fill={props.fill ? props.fill : themeVars.colors.accentAction}
      fillOpacity="0.24"
    />
    <circle
      cx="8"
      cy="8"
      r="5"
      fill={props.fill ? props.fill : themeVars.colors.accentAction}
    />
  </svg>
);

export const ListingModalWindowClosed = (props: SVGProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="8" cy="8" r="7" stroke="#333D59" strokeWidth="2" />
  </svg>
);

export const OpenSeaMarketplaceIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 16.06V14.806C24 14.69 23.888 14.606 23.778 14.638L17.856 16.35C17.824 16.358 17.796 16.376 17.774 16.4C17.1396 17.1008 16.6005 17.571 16.4578 17.6955L16.448 17.704C16.08 18.016 15.624 18.186 15.144 18.186H14.093C13.4894 18.186 13 17.6966 13 17.093C13 16.4894 13.4894 16 14.093 16H14.704C14.748 16 14.79 15.984 14.822 15.956L15.042 15.754C15.136 15.668 15.248 15.564 15.382 15.43C15.3933 15.4187 15.4047 15.4073 15.4163 15.3958C15.4868 15.3256 15.5621 15.2505 15.636 15.168C15.724 15.082 15.81 14.986 15.89 14.892C16.024 14.748 16.152 14.598 16.286 14.44C16.382 14.336 16.47 14.218 16.556 14.1C16.652 13.988 16.746 13.862 16.834 13.742C16.8666 13.6941 16.9013 13.6457 16.9367 13.5963C16.9708 13.5486 17.0057 13.5 17.04 13.45C17.104 13.354 17.168 13.252 17.222 13.156C17.39 12.896 17.532 12.618 17.652 12.34C17.707 12.2211 17.751 12.096 17.7937 11.9743C17.7992 11.9588 17.8046 11.9434 17.81 11.928C17.858 11.786 17.898 11.652 17.928 11.51C18 11.176 18.016 10.844 17.984 10.512C17.9764 10.4136 17.9688 10.317 17.9477 10.2255C17.9454 10.2152 17.944 10.2046 17.944 10.194C17.936 10.126 17.92 10.05 17.898 9.98001C17.826 9.65601 17.714 9.332 17.572 9.014C17.524 8.89599 17.468 8.77599 17.414 8.66598C17.286 8.42802 17.152 8.19001 17 7.96C16.9695 7.91136 16.9357 7.86209 16.902 7.81289C16.8762 7.77511 16.8503 7.73737 16.826 7.70002C16.7297 7.5514 16.6213 7.40815 16.5163 7.26916C16.4926 7.2379 16.4692 7.20686 16.446 7.17602C16.384 7.09458 16.3161 7.01314 16.2477 6.93116C16.2103 6.88629 16.1728 6.84127 16.136 6.79599C16.032 6.66998 15.93 6.54998 15.826 6.43201C15.454 6.01201 15.064 5.63198 14.716 5.30802C14.652 5.24399 14.582 5.18001 14.51 5.11798C14.24 4.87201 13.994 4.65801 13.788 4.49198C13.726 4.44425 13.6703 4.39722 13.6185 4.35345C13.5835 4.32387 13.5503 4.29579 13.518 4.26998C13.4545 4.22272 13.3996 4.18086 13.3537 4.14585C13.3258 4.12459 13.3012 4.10585 13.28 4.08998C13.264 4.078 13.246 4.06999 13.228 4.06398C13.0932 4.02615 13 3.90323 13 3.76322V2.11201C13 1.80401 12.876 1.52802 12.678 1.326C12.48 1.12398 12.204 1 11.9 1C11.292 1 10.8 1.498 10.8 2.11201V3.2656C10.8 3.32504 10.7432 3.36806 10.686 3.35198L10.376 3.26399L10.102 3.18821C10.1004 3.18775 10.0987 3.18716 10.097 3.18657C10.0934 3.18529 10.0898 3.18401 10.086 3.18401C10.082 3.18401 10.078 3.18348 10.0742 3.18244L7.93999 2.60399C7.84603 2.578 7.766 2.68 7.81402 2.766L8.15602 3.39801C8.17546 3.44665 8.2001 3.4953 8.22543 3.54529C8.24175 3.57751 8.25835 3.61028 8.27403 3.64398C8.33001 3.75602 8.38603 3.87399 8.44002 3.992C8.48799 4.09599 8.53601 4.198 8.59203 4.30999C8.61561 4.36275 8.63965 4.41614 8.66403 4.4703C8.75336 4.6687 8.8473 4.87732 8.94 5.10202L8.94079 5.10389C9.02051 5.29326 9.10024 5.48265 9.17001 5.68C9.36199 6.178 9.54402 6.70999 9.70201 7.25601C9.7413 7.37805 9.7727 7.49617 9.80452 7.61587C9.81806 7.66682 9.83168 7.71806 9.84601 7.77001L9.86799 7.866C9.93201 8.12001 9.98799 8.372 10.028 8.62601C10.06 8.8 10.09 8.96598 10.106 9.134L10.106 9.13407C10.13 9.32404 10.154 9.51401 10.162 9.70398C10.178 9.87801 10.186 10.06 10.186 10.234C10.186 10.678 10.146 11.106 10.052 11.51C10.0462 11.5316 10.0403 11.5534 10.0344 11.5755C10.008 11.6739 9.98068 11.776 9.94802 11.874C9.91838 11.9792 9.87997 12.0844 9.84008 12.1937C9.82613 12.2319 9.812 12.2706 9.798 12.31C9.7957 12.3162 9.7934 12.3224 9.7911 12.3286C9.76138 12.4087 9.73114 12.4902 9.694 12.57C9.49601 13.046 9.24999 13.52 8.99602 13.964C8.624 14.622 8.25002 15.2 7.988 15.572C7.97207 15.5959 7.95652 15.6186 7.94154 15.6405C7.92269 15.6681 7.90474 15.6944 7.88803 15.72C7.80601 15.836 7.89002 16 8.032 16H9.707C10.3106 16 10.8 16.4894 10.8 17.093C10.8 17.6966 10.3106 18.186 9.707 18.186H8.00003C7.24802 18.186 6.55203 17.76 6.21599 17.078C6.042 16.736 5.974 16.36 6.01402 15.992C6.02401 15.882 5.94199 15.778 5.82999 15.778H0.17403C0.0779956 15.778 0 15.856 0 15.952V16.068C0 19.676 2.914 22.6 6.51002 22.6H16.656C18.5579 22.6 19.6378 20.8669 20.6993 19.1634C20.9951 18.6886 21.2896 18.216 21.6 17.784C22.158 17.008 23.5 16.392 23.892 16.224C23.956 16.196 24 16.132 24 16.06ZM1.51195 13.202L1.42794 13.334C1.35397 13.448 1.43594 13.6 1.57593 13.6H6.78395C6.84196 13.6 6.89594 13.572 6.92796 13.524C6.99596 13.4201 7.05994 13.312 7.11795 13.202C7.56797 12.446 7.96794 11.628 8.11394 11.024C8.45594 9.55604 7.72595 7.19805 6.87994 5.30201C6.82396 5.17604 6.64993 5.16401 6.57596 5.28004L1.51195 13.202Z"
      fill="white"
    />
  </svg>
);

export const CollectionSelectedAssetIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M17.5 9.16667V6.52778C17.5 5.68401 16.7538 5 15.8333 5H4.16667C3.24619 5 2.5 5.68401 2.5 6.52778V17.2222C2.5 18.066 3.24619 18.75 4.16667 18.75H11.25"
      stroke="#F5F6FC"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 14.6667L14.4048 16.6667L19.1667 11.6667"
      stroke="#F5F6FC"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66671 5L6.66671 4.16666C6.66671 3.28261 7.0179 2.43476 7.64302 1.80964C8.26814 1.18452 9.11599 0.833333 10 0.833333C10.8841 0.833333 11.7319 1.18452 12.3571 1.80964C12.9822 2.43476 13.3334 3.28261 13.3334 4.16667L13.3334 5"
      stroke="#F5F6FC"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Nft20Icon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.1797 2C18.6608 1.99964 17.2055 2.60684 16.1403 3.68523V2H15.3199C13.8003 1.99901 12.3441 2.60626 11.2784 3.68523V2H10.4603C7.32315 2.00245 4.78057 4.53488 4.77811 7.65966V16.3545H4.51732C4.29849 16.3542 4.08024 16.3773 3.86643 16.4234C3.47831 16.5022 3.10944 16.6561 2.78085 16.8763C2.54716 16.3376 2.0146 15.9887 1.42549 15.9881C1.32123 15.9869 1.21723 15.998 1.11563 16.0214C0.327205 16.2173 -0.15257 17.0126 0.0440797 17.7979C0.202958 18.4325 0.764814 18.8854 1.42105 18.9079H1.46342C1.39473 19.2972 1.40305 19.6962 1.48796 20.0824C1.80032 21.5009 3.05723 22.515 4.51518 22.5248C4.95221 22.5247 5.38438 22.4332 5.78359 22.2562C6.32672 22.7363 7.02799 23.001 7.75417 23H18.0085C19.6557 23.0049 20.9951 21.6788 21 20.0381V20.0314V2H20.1797ZM20.1797 20.0314C20.176 21.2182 19.211 22.1793 18.0195 22.183H7.75417C7.02124 22.1819 6.33891 21.8107 5.94184 21.1971C5.66604 21.4217 5.34054 21.5777 4.99223 21.6523C4.83388 21.6855 4.67254 21.7026 4.51073 21.7034C3.43635 21.7023 2.50819 20.9554 2.28156 19.9093C2.21779 19.6077 2.21779 19.2962 2.28156 18.9946C2.29731 18.9073 2.31892 18.8213 2.34617 18.737C2.35062 18.6819 2.34607 18.6264 2.33278 18.5727C2.27026 18.273 2.00466 18.0586 1.69742 18.0598C1.65102 18.06 1.60483 18.0645 1.55921 18.0731C1.51396 18.0838 1.4675 18.089 1.42099 18.0886C1.06149 18.0888 0.769941 17.7986 0.769836 17.4405C0.769732 17.1328 0.986836 16.8673 1.28947 16.8052C1.33483 16.7953 1.38129 16.7909 1.42769 16.792C1.73362 16.7923 1.99802 17.0049 2.06305 17.3027C2.12556 17.6023 2.39116 17.8167 2.6984 17.8155C2.74496 17.8159 2.79131 17.8106 2.83662 17.8C2.89113 17.7895 2.94381 17.7708 2.99267 17.7445C3.0589 17.6862 3.12811 17.6314 3.19999 17.5801C3.45231 17.401 3.73925 17.2762 4.04262 17.2138C4.19925 17.1794 4.35923 17.1623 4.51968 17.1627C4.89739 17.162 5.26913 17.2559 5.60086 17.4358V7.66633C5.59589 4.99306 7.76766 2.82204 10.4516 2.81709H10.4605V7.65503C10.4617 4.98388 12.6355 2.81834 15.3179 2.81709H15.3201V7.65504C15.3214 4.98389 17.4952 2.81834 20.1776 2.81709H20.1798L20.1797 20.0314ZM18.5612 15.3443V19.3409C18.5576 20.0184 18.0064 20.5663 17.3263 20.5687H16.9406V19.7628C16.9171 19.317 16.5353 18.9746 16.0878 18.998C15.6731 19.0197 15.3417 19.3497 15.3199 19.7628V20.571H10.4603V19.7628C10.4579 19.3181 10.0953 18.959 9.64886 18.959C9.2032 18.9578 8.84092 19.3167 8.83966 19.7606V19.7628V20.571H8.45405C7.7725 20.5697 7.22033 20.0197 7.21907 19.3409V15.3443C7.22033 14.6654 7.7725 14.1154 8.45405 14.1142H8.83966V14.9202C8.83966 15.3657 9.20157 15.7272 9.64886 15.7285C10.0965 15.7272 10.4591 15.3661 10.4603 14.9202V14.1142H15.3199V14.9202C15.2965 15.366 15.6402 15.7463 16.0878 15.7697C16.5353 15.7931 16.9171 15.4507 16.9406 15.0049C16.9421 14.9767 16.9421 14.9484 16.9406 14.9202V14.1142H17.3263C18.0073 14.1166 18.5588 14.6659 18.5612 15.3443ZM12.1764 12.4616C12.1764 12.4616 11.7194 11.9677 11.6458 11.7557C11.5454 11.4663 11.6201 10.5311 11.6201 10.5311C11.6188 10.276 11.5133 10.1986 11.2572 10.1998H10.3578C10.1029 10.1998 9.97363 10.3285 9.97363 10.5824V11.6915C9.97363 12.0851 10.8363 12.4616 12.1764 12.4616ZM15.4274 10.531C15.4286 10.276 15.5341 10.1986 15.7902 10.1997H16.6897C16.9445 10.1997 17.0738 10.3285 17.0738 10.5823V11.6915C17.0738 12.0851 16.2111 12.4615 14.871 12.4615C14.871 12.4615 15.328 11.9676 15.4016 11.7556C15.502 11.4663 15.4274 10.531 15.4274 10.531ZM8.21559 4.38903C8.63871 4.05164 9.10875 3.7772 9.61102 3.57419C9.03525 3.5955 8.47512 3.7662 7.98603 4.06931C7.48842 4.37684 7.07127 4.79765 6.76889 5.29714C6.46039 5.79429 6.27902 6.35923 6.24057 6.94241C6.22832 7.08576 6.22832 7.22983 6.24057 7.37318C6.24427 7.49333 6.25569 7.60731 6.26714 7.72155L6.27399 7.7906L6.2902 7.91729L6.2902 7.9173C6.31983 8.15043 6.34945 8.38349 6.39662 8.61659C6.44525 8.36635 6.47544 8.11619 6.50563 7.86601L6.51474 7.7906C6.51977 7.74621 6.5241 7.70159 6.52841 7.65719L6.52841 7.65718C6.53747 7.56388 6.54643 7.47154 6.56157 7.38427C6.56575 7.35291 6.56947 7.32154 6.57315 7.29039C6.57729 7.25541 6.5814 7.22073 6.5861 7.18669C6.59119 7.14987 6.59921 7.11302 6.60722 7.07617L6.60722 7.07616L6.60722 7.07615C6.61322 7.0486 6.61921 7.02105 6.62398 6.99353C6.72766 6.48387 6.92008 5.99615 7.19242 5.55252C7.46524 5.11003 7.8112 4.71673 8.21559 4.38903ZM14.4706 3.57419C13.9924 3.77173 13.5427 4.03153 13.1331 4.34683C12.7415 4.65248 12.402 5.0191 12.1278 5.43257C11.8553 5.8463 11.6486 6.29936 11.5148 6.77588C11.4959 6.8404 11.4827 6.90553 11.4695 6.97063L11.4695 6.97067C11.4576 7.02879 11.4458 7.08688 11.43 7.14448C11.4093 7.22036 11.3997 7.2988 11.39 7.37768C11.3842 7.42576 11.3783 7.47401 11.3698 7.52194C11.3386 7.78393 11.3052 8.04373 11.2517 8.30797C11.2001 8.06325 11.1695 7.82238 11.1387 7.57998L11.1387 7.57994L11.1313 7.52194C11.1313 7.44632 11.1256 7.36927 11.1198 7.29161L11.1198 7.29159L11.1198 7.29156C11.1154 7.23241 11.1109 7.17291 11.109 7.11342C11.1045 6.97576 11.1224 6.84033 11.1402 6.70491C11.2114 6.14982 11.4088 5.61817 11.7176 5.15067C12.0234 4.68604 12.4342 4.29899 12.9169 4.02053C13.3875 3.74072 13.9228 3.58701 14.4706 3.57419ZM17.995 4.34683C18.4047 4.03168 18.8545 3.77188 19.3326 3.57419C18.7861 3.59217 18.2534 3.74968 17.7855 4.03158C17.3018 4.30566 16.8895 4.68891 16.5817 5.15067C16.2722 5.61802 16.074 6.14961 16.0021 6.70491C15.9843 6.84033 15.9687 6.97576 15.9731 7.11342C15.975 7.17161 15.9789 7.22981 15.9827 7.28768C15.988 7.36667 15.9932 7.44504 15.9932 7.52194C15.9985 7.56064 16.0036 7.59929 16.0088 7.63791C16.0386 7.8608 16.0683 8.08276 16.1158 8.30797C16.1649 8.0657 16.1952 7.82716 16.2256 7.58724C16.2284 7.56549 16.2312 7.54372 16.2339 7.52194C16.2406 7.48004 16.246 7.4379 16.2514 7.39584C16.2624 7.31085 16.2733 7.22618 16.2941 7.14448C16.3071 7.09389 16.3173 7.04293 16.3276 6.9919C16.3422 6.91973 16.3567 6.84743 16.3789 6.77588C16.5127 6.29936 16.7194 5.8463 16.9919 5.43257C17.266 5.01968 17.6047 4.65316 17.995 4.34683Z"
      fill="white"
    />
  </svg>
);

export const NftXIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0L2.80713 9.19286L10.5399 16.6017C9.50042 17.3018 8.96753 18.0136 8.48384 18.6597L8.48313 18.6607L8.48293 18.6609C7.9305 19.4002 7.45337 20.0387 6.10491 20.7007C5.15896 21.1652 4.48456 21.2978 3.84753 21.3305C4.34999 21.9968 5.19599 22.5819 6.27942 23.0318C6.53176 22.9339 6.79713 22.818 7.07742 22.6803C8.90264 21.7852 9.61871 20.8277 10.2506 19.9829L10.2514 19.9817C10.8039 19.2423 11.281 18.6039 12.6296 17.9417C13.9782 17.2795 14.7753 17.2918 15.698 17.306H15.698L15.6982 17.306C16.3164 17.3158 16.9831 17.3259 17.7963 17.1518C16.8046 16.619 15.5296 16.2159 14.0884 15.9998L21.1928 9.19286L12 0ZM7.37363 17.0155L7.37899 17.0083L7.37901 17.0083C7.57949 16.7399 7.76995 16.4849 7.99763 16.237C5.23472 16.9028 3.33203 18.2972 3.33203 19.9111C3.33203 19.9712 3.33529 20.0311 3.34043 20.0904C3.61146 19.9875 3.8974 19.8644 4.20117 19.7151C6.0262 18.8185 6.74209 17.8606 7.37363 17.0155ZM18.6096 18.0667C17.5547 18.0496 16.3591 18.0312 14.5339 18.928C12.7087 19.8247 11.9928 20.7825 11.3613 21.6278L11.3609 21.6284C10.8085 22.3673 10.3313 23.0057 8.98288 23.6678C8.92185 23.6978 8.86288 23.7261 8.80322 23.7535C9.74427 23.9195 10.6982 24.002 11.6537 24C11.8645 24 12.0731 23.9962 12.2796 23.9885C12.6172 23.6313 12.8796 23.2809 13.1282 22.9481C13.6805 22.2088 14.1578 21.5702 15.5064 20.9081C16.855 20.2461 17.6523 20.2584 18.5748 20.2726H18.575C18.9998 20.2793 19.4476 20.2862 19.95 20.2337C19.967 20.1272 19.9755 20.0195 19.9756 19.9116C19.9756 19.2494 19.6548 18.6242 19.0862 18.071C18.9683 18.0715 18.8504 18.0699 18.7306 18.0683H18.7304L18.6096 18.0667ZM19.5883 21.1462C18.8621 22.2725 17.1703 23.1878 14.9902 23.6572C15.5194 23.0755 16.2343 22.4722 17.4111 21.8937C18.2554 21.4786 18.9648 21.2601 19.5883 21.1462Z"
      fill="white"
    />
  </svg>
);

export const X2y2Icon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.528 4.70405C19.6893 2.90732 17.174 1.8 14.4 1.8C8.7667 1.8 4.2 6.3667 4.2 12C4.2 17.6333 8.7667 22.2 14.4 22.2C17.1739 22.2 19.6893 21.0927 21.528 19.296C19.3347 22.156 15.8827 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C15.8827 0 19.3347 1.84402 21.528 4.70405ZM6.77759 17.8368C8.24862 19.2742 10.2609 20.16 12.48 20.16C16.9867 20.16 20.64 16.5067 20.64 12C20.64 7.49337 16.9867 3.84002 12.48 3.84002C10.2609 3.84002 8.24862 4.72587 6.77759 6.16324C8.53226 3.87524 11.2939 2.40002 14.4 2.40002C19.702 2.40002 24 6.69809 24 12C24 17.302 19.702 21.6 14.4 21.6C11.2939 21.6 8.53226 20.1248 6.77759 17.8368ZM12 19.2C15.9765 19.2 19.2001 15.9764 19.2001 12C19.2001 8.02353 15.9765 4.79999 12 4.79999C8.0236 4.79999 4.80005 8.02353 4.80005 12C4.80005 15.9764 8.0236 19.2 12 19.2ZM12 16.8C14.651 16.8 16.8 14.651 16.8 12C16.8 9.34902 14.651 7.19999 12 7.19999C9.34908 7.19999 7.20005 9.34902 7.20005 12C7.20005 14.651 9.34908 16.8 12 16.8Z"
      fill="white"
    />
  </svg>
);

export const SudoSwapIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM4.37501 7.35706V7.33475V7.3125H5.05176H5.72851L5.92208 7.82812L6.11564 8.34375L6.51939 9.4375L6.92308 10.5312L7.18845 11.2647L7.45383 11.9982L7.10851 12.9522L6.76326 13.9062L6.24608 15.2969L5.72895 16.6875H5.05201H4.37501V16.6622V16.6369L5.12889 14.5841L5.88276 12.5312L5.97514 12.2656L6.06745 12L5.97501 11.7344L5.88258 11.4688L5.12883 9.41288L4.37501 7.35706ZM18.0691 7.84375L18.168 7.57812L18.267 7.3125H18.9527H19.6384L19.6096 7.39062L19.5808 7.46875L18.7554 9.73438L17.93 12L18.7554 14.2656L19.5808 16.5312L19.6096 16.6094L19.6384 16.6875H18.9527H18.267L18.168 16.4219L18.0691 16.1562L17.5731 14.8125L17.0773 13.4688L16.8114 12.7344L16.5455 12L16.8114 11.2656L17.0773 10.5312L17.5731 9.1875L18.0691 7.84375ZM10.779 9.492L10.9989 9.43669L11.2188 9.38131L12.2188 9.39819L13.2188 9.41506L13.5938 9.5595L13.9688 9.70387L14.2512 9.993L14.5336 10.2821L14.6106 10.5389L14.6875 10.7957V10.9291V11.0625H14.0999H13.5123L13.4463 10.8734L13.3804 10.6842L13.0496 10.5302L12.7188 10.3763L12.0303 10.3756L11.3418 10.375L11.124 10.4914L10.9063 10.6079L10.7871 10.8109L10.668 11.0138L10.672 11.2816L10.676 11.5492L10.7441 11.6765L10.8123 11.8038L11.0043 11.9406L11.1965 12.0774L12.2701 12.2621L13.3438 12.4468L13.7313 12.6314L14.1188 12.8159L14.3195 13.0166L14.5203 13.2174L14.6481 13.4993L14.7759 13.7812L14.776 14.3125L14.7761 14.8438L14.6353 15.1984L14.4946 15.553L14.2499 15.8052L14.0051 16.0573L13.5495 16.1999L13.0938 16.3424L12.0625 16.3431L11.0313 16.3438L10.6875 16.2258L10.3438 16.1079L10.09 15.9612L9.83614 15.8145L9.70239 15.6721L9.56864 15.5297L9.44551 15.2493L9.32239 14.9688L9.27926 14.7344L9.23608 14.5H9.88564H10.5351L10.627 14.7647L10.7188 15.0293L11 15.1866L11.2813 15.3438H12.0625H12.8438L13.0542 15.255L13.2646 15.1663L13.4448 14.9175L13.625 14.6687L13.6247 14.35L13.6244 14.0312L13.4841 13.865L13.3438 13.6987L12.875 13.5398L12.4063 13.3808L11.8241 13.2834L11.242 13.1861L10.8554 13.0576L10.4688 12.9291L10.2395 12.7795L10.0101 12.6299L9.85439 12.4243L9.69864 12.2188L9.59164 11.8483L9.4847 11.4777L9.51633 11.1295L9.54795 10.7812L9.62876 10.5118L9.70958 10.2423L9.95214 9.99238L10.1946 9.7425L10.4868 9.61725L10.779 9.492Z"
      fill="white"
    />
  </svg>
);

export const LooksRareIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.13513 3.08105L0 10.2211L12 22.2162L24 10.2211L16.8649 3.08105H7.13513ZM6.48649 7.62158C9.51816 4.5766 14.4818 4.57658 17.5135 7.62156L20.1081 10.2162L17.5135 12.8108C14.4818 15.8558 9.51816 15.8558 6.48649 12.8108L3.89189 10.2162L6.48649 7.62158ZM8.27026 10.2162C8.27026 12.2769 9.94096 13.946 12 13.946C14.059 13.946 15.7297 12.2769 15.7297 10.2162C15.7297 8.15553 14.059 6.48651 12 6.48651C9.94096 6.48651 8.27026 8.15553 8.27026 10.2162ZM12 11.8379C11.1048 11.8379 10.3784 11.1122 10.3784 10.2162C10.3784 9.32028 11.1048 8.59462 12 8.59462C12.8952 8.59462 13.6216 9.32028 13.6216 10.2162C13.6216 11.1122 12.8952 11.8379 12 11.8379Z"
      fill="white"
    />
  </svg>
);

export const LarvaLabsMarketplaceIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 5H12V17H9V5ZM13 5H16V13H13V5ZM13 14V17H22V14H13ZM2 17V14H8V17H2Z"
      fill="white"
    />
  </svg>
);

export const SquareOpenSeaMarketplaceIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="360"
    height="361"
    viewBox="0 0 360 361"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_992_26814)">
      <rect y="0.5" width="360" height="360" rx="48" fill="#2081E2" />
      <g clipPath="url(#clip1_992_26814)">
        <path
          d="M360 180C360 279.406 279.406 360 180 360C80.5944 360 0 279.406 0 180C0 80.5944 80.5944 0 180 0C279.426 0 360 80.5944 360 180Z"
          fill="#2081E2"
        />
        <path
          d="M88.8044 186.048L89.5812 184.828L136.406 111.576C137.09 110.503 138.7 110.614 139.217 111.779C147.04 129.311 153.79 151.114 150.628 164.688C149.278 170.273 145.579 177.837 141.418 184.828C140.882 185.845 140.29 186.844 139.661 187.805C139.365 188.249 138.866 188.508 138.33 188.508H90.1728C88.8784 188.508 88.1204 187.102 88.8044 186.048Z"
          fill="white"
        />
        <path
          d="M297.52 199.66V211.255C297.52 211.92 297.113 212.512 296.522 212.771C292.897 214.325 280.488 220.021 275.328 227.196C262.161 245.523 252.1 271.728 229.612 271.728H135.796C102.545 271.728 75.6 244.691 75.6 211.329V210.256C75.6 209.368 76.3212 208.647 77.2092 208.647H129.508C130.544 208.647 131.302 209.609 131.21 210.626C130.84 214.029 131.468 217.506 133.077 220.668C136.184 226.974 142.62 230.913 149.574 230.913H175.464V210.7H149.869C148.556 210.7 147.78 209.184 148.538 208.111C148.815 207.686 149.13 207.242 149.462 206.742C151.885 203.303 155.343 197.958 158.783 191.874C161.132 187.768 163.406 183.385 165.237 178.984C165.607 178.189 165.903 177.375 166.199 176.58C166.698 175.174 167.216 173.861 167.586 172.548C167.956 171.439 168.252 170.274 168.548 169.182C169.417 165.447 169.787 161.489 169.787 157.384C169.787 155.775 169.713 154.092 169.565 152.483C169.491 150.726 169.269 148.969 169.047 147.212C168.899 145.659 168.622 144.124 168.326 142.515C167.956 140.166 167.438 137.836 166.846 135.488L166.643 134.6C166.199 132.991 165.829 131.456 165.311 129.847C163.85 124.798 162.167 119.879 160.392 115.274C159.745 113.444 159.005 111.687 158.265 109.93C157.174 107.285 156.064 104.881 155.048 102.606C154.53 101.571 154.086 100.628 153.642 99.666C153.143 98.5748 152.625 97.484 152.107 96.448C151.737 95.6528 151.312 94.9132 151.016 94.1736L147.854 88.3296C147.41 87.5344 148.15 86.5912 149.018 86.8316L168.806 92.1948H168.862C168.899 92.1948 168.918 92.2132 168.936 92.2132L171.544 92.9344L174.41 93.748L175.464 94.044V82.2824C175.464 76.6048 180.014 72 185.636 72C188.446 72 190.998 73.1464 192.829 75.0144C194.66 76.8824 195.807 79.4344 195.807 82.2824V99.74L197.915 100.332C198.082 100.387 198.248 100.461 198.396 100.572C198.914 100.96 199.653 101.534 200.596 102.236C201.336 102.828 202.132 103.55 203.093 104.289C204.998 105.824 207.272 107.803 209.769 110.078C210.435 110.651 211.082 111.243 211.674 111.835C214.892 114.83 218.498 118.344 221.938 122.228C222.9 123.319 223.843 124.428 224.804 125.594C225.766 126.777 226.783 127.942 227.671 129.108C228.836 130.661 230.093 132.27 231.184 133.953C231.702 134.748 232.294 135.562 232.794 136.357C234.199 138.484 235.438 140.684 236.622 142.885C237.121 143.902 237.639 145.012 238.082 146.103C239.396 149.043 240.431 152.039 241.097 155.035C241.3 155.682 241.448 156.385 241.522 157.014V157.162C241.744 158.05 241.818 158.993 241.892 159.954C242.188 163.024 242.04 166.094 241.374 169.182C241.097 170.496 240.727 171.734 240.283 173.048C239.839 174.305 239.396 175.618 238.822 176.857C237.713 179.428 236.4 181.998 234.846 184.402C234.347 185.29 233.755 186.233 233.163 187.121C232.516 188.064 231.85 188.952 231.258 189.821C230.445 190.931 229.576 192.096 228.688 193.131C227.893 194.222 227.079 195.314 226.191 196.275C224.952 197.736 223.769 199.123 222.53 200.455C221.79 201.324 220.995 202.212 220.181 203.007C219.386 203.894 218.572 204.69 217.832 205.429C216.593 206.668 215.558 207.63 214.688 208.425L212.654 210.293C212.358 210.552 211.97 210.7 211.563 210.7H195.807V230.913H215.632C220.07 230.913 224.286 229.341 227.689 226.456C228.854 225.439 233.94 221.038 239.95 214.399C240.154 214.177 240.413 214.01 240.708 213.936L295.467 198.106C296.484 197.81 297.52 198.587 297.52 199.66Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_992_26814">
        <rect y="0.5" width="360" height="360" rx="48" fill="white" />
      </clipPath>
      <clipPath id="clip1_992_26814">
        <rect width="360" height="360" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const SquareLooksRareMarketplaceIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="360"
    height="361"
    viewBox="0 0 360 361"
    fill="none"
    {...props}
  >
    <rect y="0.5" width="360" height="360" rx="48" fill="black" />
    <path
      d="M114.128 130.914C150.508 94.74 209.492 94.74 245.872 130.914L277.297 162.162L245.872 193.409C209.492 229.584 150.508 229.584 114.128 193.409L82.7026 162.162L114.128 130.914Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M60 162.211L131.351 90.8105H228.649L300 162.211L180 282.162L60 162.211ZM235.135 136.216C204.818 105.766 155.182 105.766 124.865 136.216L98.919 162.162L124.865 188.108C155.182 218.558 204.818 218.558 235.135 188.108L261.081 162.162L235.135 136.216Z"
      fill="#0CE466"
    />
    <path
      d="M180 184.865C167.467 184.865 157.297 174.705 157.297 162.162C157.297 149.618 167.467 139.459 180 139.459C192.533 139.459 202.703 149.618 202.703 162.162C202.703 174.705 192.533 184.865 180 184.865Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M142.703 162.163C142.703 182.77 159.41 199.46 180 199.46C200.59 199.46 217.297 182.77 217.297 162.163C217.297 141.555 200.59 124.865 180 124.865C159.41 124.865 142.703 141.555 142.703 162.163ZM163.784 162.163C163.784 171.122 171.048 178.379 180 178.379C188.952 178.379 196.216 171.122 196.216 162.163C196.216 153.203 188.952 145.946 180 145.946C171.048 145.946 163.784 153.203 163.784 162.163Z"
      fill="white"
    />
  </svg>
);

export const SquareLooksX2Y2MarketplaceIcon = ({
  gradientId,
  ...rest
}: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="360"
    height="361"
    viewBox="0 0 360 361"
    fill="none"
    {...rest}
  >
    <g clipPath="url(#clip0_992_26815)">
      <rect y="0.5" width="360" height="360" rx="48" fill="white" />
      <g clipPath="url(#clip1_992_26815)">
        <path
          d="M360 180C360 80.5887 279.411 0 180 0C80.5887 0 0 80.5887 0 180C0 279.411 80.5887 360 180 360C279.411 360 360 279.411 360 180Z"
          fill="white"
        />
        <path
          d="M294.337 92.4489C272.272 70.8879 242.087 57.6 208.8 57.6C141.2 57.6 86.4 112.4 86.4 180C86.4 247.6 141.2 302.4 208.8 302.4C242.087 302.4 272.272 289.112 294.337 267.551C268.016 301.872 226.592 324 180 324C100.471 324 36 259.529 36 180C36 100.471 100.471 36 180 36C226.592 36 268.016 58.1282 294.337 92.4489Z"
          fill={`url(#${gradientId}paint0_linear_992_26815)`}
        />
        <path
          d="M117.33 250.042C134.983 267.29 159.13 277.92 185.76 277.92C239.84 277.92 283.68 234.08 283.68 180C283.68 125.92 239.84 82.08 185.76 82.08C159.13 82.08 134.983 92.7099 117.33 109.958C138.387 82.5025 171.526 64.8 208.8 64.8C272.423 64.8 324 116.377 324 180C324 243.623 272.423 295.2 208.8 295.2C171.526 295.2 138.387 277.497 117.33 250.042Z"
          fill={`url(#${gradientId}paint1_linear_992_26815)`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M266.4 180C266.4 227.717 227.717 266.4 180 266.4C132.283 266.4 93.6 227.717 93.6 180C93.6 132.283 132.283 93.6 180 93.6C227.717 93.6 266.4 132.283 266.4 180ZM237.6 180C237.6 211.811 211.811 237.6 180 237.6C148.189 237.6 122.4 211.811 122.4 180C122.4 148.189 148.189 122.4 180 122.4C211.811 122.4 237.6 148.189 237.6 180Z"
          fill={`url(#${gradientId}paint2_linear_992_26815)`}
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id={`${gradientId}paint0_linear_992_26815`}
        x1="36"
        y1="175.035"
        x2="324"
        y2="175.035"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00E0FF" />
        <stop offset="1" stopColor="#562EC8" />
      </linearGradient>
      <linearGradient
        id={`${gradientId}paint1_linear_992_26815`}
        x1="36"
        y1="175.035"
        x2="324"
        y2="175.035"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00E0FF" />
        <stop offset="1" stopColor="#562EC8" />
      </linearGradient>
      <linearGradient
        id={`${gradientId}paint2_linear_992_26815`}
        x1="36"
        y1="175.035"
        x2="324"
        y2="175.035"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00E0FF" />
        <stop offset="1" stopColor="#562EC8" />
      </linearGradient>
      <clipPath id="clip0_992_26815">
        <rect y="0.5" width="360" height="360" rx="48" fill="white" />
      </clipPath>
      <clipPath id="clip1_992_26815">
        <rect width="360" height="360" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const SquareLooksBlurMarketplaceIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="360"
    height="361"
    viewBox="0 0 360 361"
    fill="none"
    {...props}
  >
    <rect y="0.5" width="360" height="360" rx="48" fill="#070705" />
    <g filter="url(#filter0_d_992_26824)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.2584 85.2127H160.057C159.917 85.0441 159.801 84.8965 159.696 84.7645C159.515 84.5348 159.37 84.3524 159.207 84.1891C158.539 83.5307 157.866 82.8766 157.192 82.2223L157.192 82.2219C156.051 81.1131 154.909 80.0037 153.79 78.8714C153.154 78.2257 152.472 78.0105 151.58 78.0105C146.579 78.0236 141.581 78.0162 136.584 78.0089C133.586 78.0044 130.588 78 127.59 78C110.545 78 93.5053 78.0053 76.4657 78.0158C76.1878 78.0193 75.9122 78.0487 75.6453 78.0773C75.514 78.0913 75.3848 78.1051 75.2584 78.1155V85.2127ZM169.685 95.2076H75.4C75.1008 94.2207 75.0483 89.6327 75.3213 88.0999C75.4166 88.0902 75.5145 88.0775 75.6141 88.0646L75.6145 88.0645L75.6145 88.0645L75.6146 88.0645C75.8382 88.0355 76.0706 88.0054 76.3029 88.0054L90.4786 88.0083C114.107 88.0134 137.737 88.0185 161.364 88.0054C162.404 88.0054 163.175 88.2731 163.9 89.029C164.832 89.9951 165.801 90.9245 166.771 91.8546C167.314 92.3749 167.857 92.8955 168.393 93.4228C168.736 93.758 169.058 94.1134 169.381 94.4698C169.524 94.6269 169.666 94.7841 169.811 94.9399C169.763 95.0291 169.721 95.1183 169.685 95.2076ZM170.882 117.943H75.1848C75.1376 120.4 75.1376 122.688 75.1796 125.155H77.2898L77.4081 125.155C97.9359 125.161 118.469 125.166 139.002 125.166C141.624 125.168 144.245 125.167 146.866 125.167H146.866H146.867H146.867H146.867H146.867H146.867H146.867H146.867H146.867H146.868H146.868H146.868H146.868H146.868H146.868H146.868H146.869H146.869H146.869H146.869H146.869H146.869C152.108 125.165 157.347 125.164 162.588 125.182C163.485 125.187 164.152 124.93 164.777 124.279C165.896 123.112 167.04 121.971 168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.184 120.829L168.185 120.829L168.185 120.828L168.186 120.827C168.832 120.182 169.478 119.537 170.12 118.888C170.288 118.717 170.432 118.527 170.601 118.305L170.601 118.305L170.602 118.305L170.602 118.304L170.602 118.304L170.602 118.304C170.687 118.192 170.778 118.072 170.882 117.943ZM75.1743 135.14H170.908C170.844 135.024 170.798 134.932 170.76 134.859L170.76 134.859C170.69 134.72 170.653 134.647 170.598 134.599C170.154 134.157 169.711 133.713 169.268 133.27C167.673 131.675 166.079 130.081 164.456 128.515C164.147 128.216 163.632 128.027 163.191 127.98C162.199 127.875 161.186 127.864 160.183 127.864C132.309 127.859 104.429 127.859 76.5549 127.864C76.2654 127.864 75.9758 127.888 75.6531 127.916L75.6527 127.916L75.6521 127.916L75.6514 127.916L75.6509 127.916L75.6504 127.916L75.6496 127.916L75.6492 127.916L75.6486 127.916C75.4988 127.929 75.3418 127.942 75.1743 127.953C75.1429 130.389 75.1376 132.715 75.1743 135.14ZM169.357 158.562C169.465 158.437 169.576 158.308 169.695 158.174C168.252 157.828 76.4499 157.828 75.2426 158.153V165.135C75.6265 165.144 75.9997 165.157 76.366 165.17L76.3665 165.17C77.0269 165.192 77.6649 165.214 78.303 165.214C82.2712 165.211 86.2395 165.206 90.2078 165.201C95.4995 165.194 100.791 165.187 106.083 165.187C115.432 165.187 124.776 165.198 134.125 165.208C136.224 165.211 138.322 165.214 140.419 165.218C143.563 165.224 146.707 165.229 149.852 165.229C153.695 165.229 157.543 165.219 161.385 165.203C162.042 165.203 162.661 165.187 163.196 164.652C164.328 163.521 165.477 162.408 166.626 161.296L166.628 161.294L166.63 161.292L166.631 161.29L166.633 161.288L166.635 161.286C167.333 160.611 168.031 159.935 168.724 159.256C168.944 159.043 169.143 158.811 169.357 158.563L169.357 158.562L169.357 158.562ZM274.479 158.106V165.067C274.292 165.081 274.11 165.098 273.932 165.115C273.578 165.15 273.24 165.182 272.904 165.182C267.028 165.189 261.152 165.192 255.276 165.194L255.247 165.194C252.309 165.195 249.37 165.196 246.431 165.198C237.518 165.203 228.61 165.208 219.696 165.208C217.327 165.208 214.957 165.206 212.587 165.203H212.586H212.585H212.585H212.584H212.584H212.583H212.583H212.582H212.582H212.581H212.581H212.58H212.579H212.579H212.578H212.578H212.577C207.83 165.197 203.082 165.191 198.336 165.208C197.25 165.214 196.441 164.888 195.691 164.096C194.496 162.834 193.26 161.615 192.022 160.395L192.02 160.394C191.518 159.898 191.015 159.403 190.515 158.904C190.367 158.756 190.227 158.601 190.095 158.454L190.095 158.453L190.015 158.365L189.978 158.324L189.932 158.274C189.947 158.234 189.958 158.204 189.966 158.179L189.966 158.179C189.981 158.135 189.989 158.11 190.006 158.09C190.027 158.059 190.063 158.006 190.095 158.006C218.006 157.985 245.922 157.964 273.833 157.949C273.932 157.949 274.034 157.979 274.175 158.021C274.26 158.047 274.359 158.076 274.479 158.106ZM75.2376 175.03V168.122C75.3844 168.106 75.5292 168.086 75.6726 168.067C75.996 168.023 76.3124 167.98 76.6287 167.98C96.6762 167.954 116.724 167.928 136.771 167.917C141.45 167.914 146.126 167.929 150.803 167.944H150.805H150.807H150.809H150.811H150.812H150.814H150.816H150.818H150.82H150.822H150.824H150.826H150.828H150.83H150.832H150.834H150.836L150.857 167.944C153.194 167.952 155.531 167.959 157.869 167.964H159.653C159.549 168.117 159.467 168.249 159.395 168.363L159.395 168.363L159.395 168.364L159.394 168.364L159.394 168.364L159.394 168.364C159.272 168.559 159.181 168.704 159.065 168.82C158.322 169.572 157.574 170.32 156.827 171.069C155.663 172.234 154.499 173.4 153.349 174.579C152.924 175.014 152.456 175.046 151.926 175.041C149.701 175.025 147.47 175.02 145.244 175.02H76.319C76.0146 175.03 75.7101 175.03 75.2376 175.03ZM274.453 174.957V168.19C274.375 168.162 274.309 168.135 274.251 168.112C274.139 168.066 274.057 168.033 273.97 168.022C273.665 167.991 273.361 167.975 273.056 167.975C260.918 167.985 248.78 167.995 236.641 168.004C224.485 168.013 212.329 168.022 200.174 168.033C200.137 168.033 200.09 168.064 200.063 168.096C200.046 168.116 200.038 168.144 200.03 168.17L200.027 168.179L200.024 168.19L200.021 168.2L200.018 168.207L200.016 168.211C200.025 168.237 200.031 168.267 200.036 168.296C200.048 168.354 200.06 168.412 200.095 168.447C200.503 168.857 200.911 169.267 201.318 169.677C202.881 171.249 204.444 172.821 206.042 174.353C206.394 174.689 206.966 174.843 207.474 174.98L207.544 174.999C207.802 175.069 208.083 175.053 208.364 175.038H208.364H208.365H208.365H208.365H208.365H208.365H208.365H208.366C208.484 175.031 208.603 175.025 208.72 175.025C219.47 175.025 230.22 175.026 240.969 175.027C251.719 175.029 262.468 175.03 273.219 175.03C273.485 175.03 273.754 175.009 274.055 174.986H274.055C274.181 174.976 274.313 174.966 274.453 174.957ZM220.421 155.13H187.37C187.05 154.164 186.987 149.57 187.276 148.011C187.395 148.003 187.518 147.993 187.643 147.982C187.925 147.958 188.218 147.933 188.509 147.933C190.887 147.933 193.265 147.935 195.642 147.937C200.992 147.941 206.341 147.946 211.691 147.927C212.725 147.922 213.507 148.195 214.237 148.946C215.353 150.09 216.502 151.202 217.651 152.314C218.226 152.869 218.8 153.425 219.371 153.985C219.568 154.176 219.752 154.382 219.993 154.653L219.993 154.654C220.117 154.793 220.257 154.95 220.421 155.13ZM145.851 114.409L145.851 114.409L145.85 114.41L145.85 114.41C145.621 114.645 145.384 114.889 145.128 115.145C147.238 115.486 171.228 115.407 172.283 115.092V108.111C172.15 108.095 172.023 108.076 171.899 108.058C171.617 108.017 171.354 107.979 171.092 107.979C163.837 107.969 156.588 107.964 149.333 107.964C149.081 107.964 148.828 108.005 148.555 108.049C148.424 108.07 148.289 108.092 148.147 108.111C148.147 108.413 148.137 108.703 148.127 108.984C148.106 109.591 148.087 110.155 148.173 110.704C148.325 111.691 148.01 112.373 147.291 113.003C146.802 113.431 146.349 113.896 145.851 114.409ZM144.089 155.088C144.416 154.752 144.734 154.422 145.046 154.099C145.841 153.275 146.6 152.489 147.38 151.728C147.952 151.172 148.273 150.594 148.141 149.765C148.084 149.396 148.098 149.016 148.112 148.608C148.119 148.418 148.126 148.221 148.126 148.017H172.074C172.394 148.935 172.467 153.46 172.178 155.088H144.089ZM172.257 105.04V98.121C171.076 97.8008 145.427 97.8165 144.32 98.1525C144.549 98.3839 144.773 98.6162 144.994 98.8462L144.994 98.8462C145.51 99.3833 146.014 99.9078 146.561 100.378C147.69 101.344 148.346 102.41 148.146 103.99C148.01 105.055 148.215 105.171 149.338 105.171C156.63 105.181 163.921 105.176 171.212 105.166C171.44 105.166 171.668 105.129 171.908 105.091L171.908 105.091C172.021 105.073 172.137 105.055 172.257 105.04ZM75.2218 115.05V108.216C76.2612 107.859 97.5371 107.864 98.9859 108.205C99.2589 109.092 99.3429 113.381 99.1171 115.056C99.111 115.063 99.1048 115.071 99.0985 115.079C99.0783 115.104 99.0572 115.13 99.0331 115.15L99.0331 115.15C99.0016 115.182 98.9649 115.218 98.9282 115.224C98.8779 115.234 98.8273 115.245 98.7765 115.256C98.6151 115.292 98.4514 115.329 98.2877 115.329C90.8837 115.329 83.4849 115.318 76.0809 115.308L76.025 115.308C75.8518 115.308 75.6785 115.266 75.5105 115.224C75.4613 115.214 75.4183 115.183 75.3571 115.14L75.3571 115.14C75.3203 115.114 75.277 115.084 75.2218 115.05ZM172.063 138.001H145.69C145.648 138.084 145.601 138.168 145.554 138.252L145.553 138.253C145.657 138.363 145.758 138.475 145.86 138.587C146.102 138.855 146.343 139.122 146.614 139.355C147.747 140.332 148.288 141.518 148.125 143.04C148.078 143.502 148.114 143.973 148.151 144.46C148.167 144.677 148.184 144.896 148.194 145.119H172.199C172.472 143.324 172.393 138.946 172.063 138.001ZM187.113 128.1C188.305 127.785 209.932 127.78 211.161 128.079C211.339 130.363 211.281 132.678 211.203 135.087C210.813 135.103 210.439 135.122 210.075 135.14L210.075 135.141C209.338 135.178 208.644 135.213 207.948 135.213C203.101 135.221 198.256 135.22 193.411 135.219C191.796 135.219 190.182 135.219 188.567 135.219C188.351 135.219 188.14 135.214 187.924 135.208H187.924H187.924L187.911 135.208C187.386 135.198 187.103 134.956 187.108 134.41C187.116 132.845 187.115 131.283 187.114 129.7C187.113 129.169 187.113 128.637 187.113 128.1ZM187.202 115.113C188.724 115.46 209.307 115.392 211.16 115.035C211.173 114.865 211.189 114.702 211.204 114.543L211.204 114.542C211.232 114.254 211.259 113.98 211.265 113.706C211.276 112.268 211.276 110.83 211.265 109.391C211.25 108.027 211.202 107.979 209.874 107.979L209.812 107.979C202.715 107.974 195.622 107.969 188.525 107.969C188.232 107.969 187.942 107.999 187.611 108.033C187.461 108.048 187.304 108.064 187.134 108.079C187.134 108.772 187.124 109.457 187.113 110.133L187.113 110.135C187.088 111.831 187.063 113.481 187.202 115.113ZM211.082 145.145H187.16C187.075 143.407 187.098 141.7 187.123 139.949L187.123 139.949C187.132 139.337 187.14 138.72 187.144 138.095C187.281 138.077 187.411 138.056 187.537 138.035L187.537 138.035L187.537 138.035L187.538 138.035L187.538 138.035L187.538 138.035L187.538 138.035L187.538 138.035C187.81 137.99 188.064 137.948 188.315 137.948C195.606 137.948 202.898 137.954 210.189 137.964C210.384 137.964 210.578 137.991 210.767 138.017C210.869 138.03 210.969 138.044 211.066 138.053C211.402 139.156 211.418 143.917 211.082 145.145ZM99.1327 154.941V148.022H75.3161C75.0484 149.523 75.0956 154.127 75.3738 155.067C77.5313 155.34 98.1825 155.24 99.1327 154.941ZM99.122 145.145H75.3789C75.0955 144.179 75.043 139.597 75.2949 138.164C76.2503 137.885 97.7782 137.854 99.122 138.153V145.145ZM187.197 105.124H211.082C211.108 104.987 211.136 104.867 211.162 104.758L211.162 104.757C211.208 104.561 211.246 104.399 211.25 104.237L211.253 103.653V103.652V103.652V103.651V103.65C211.263 102.104 211.273 100.561 211.25 99.0134C211.234 97.9688 211.092 97.8795 209.979 97.8795C202.845 97.8795 195.716 97.8847 188.582 97.89L188.52 97.89C188.241 97.8935 187.963 97.9178 187.657 97.9444L187.656 97.9444C187.501 97.958 187.339 97.9721 187.165 97.9845C187.097 100.415 187.034 102.735 187.197 105.124ZM99.1328 98.0685V105.16C94.2564 105.215 89.4135 105.205 84.5919 105.195H84.5918H84.5916H84.5914H84.5909H84.5903H84.5898C81.5277 105.188 78.4743 105.182 75.4264 105.192C75.1009 104.189 75.0275 99.8218 75.2742 98.1262C75.2861 98.1143 75.2965 98.1017 75.3068 98.0891C75.3238 98.0685 75.3406 98.0481 75.3634 98.0318C75.3949 98.0055 75.4369 97.974 75.4737 97.9688C75.5251 97.9625 75.5766 97.9557 75.6281 97.949C75.8338 97.9221 76.0396 97.8953 76.2453 97.8953C83.7085 97.89 91.1718 97.8953 98.6297 97.9005L98.6341 97.9005C98.7156 97.9005 98.795 97.9335 98.9092 97.981L98.9092 97.981C98.9714 98.0069 99.0439 98.037 99.1328 98.0685ZM211.248 82.7776C211.268 81.25 211.289 79.695 211.124 78.0997H187.171C187.103 80.525 187.04 82.8452 187.192 85.1392C189.055 85.4437 210.184 85.3439 211.239 85.008C211.227 84.2702 211.237 83.5272 211.248 82.7776ZM211.208 88.0894L211.22 88.7146C211.264 90.923 211.306 93.0171 211.181 95.1813H187.37C187.05 94.2312 186.987 89.7377 187.27 88.0894H211.208ZM187.186 117.953V125.087C187.368 125.096 187.537 125.106 187.696 125.114C188.095 125.137 188.434 125.155 188.772 125.155C189.762 125.162 190.752 125.16 191.743 125.158C192.238 125.157 192.733 125.155 193.228 125.155C195.079 125.154 196.93 125.153 198.78 125.151C202.476 125.149 206.171 125.147 209.869 125.14C211.181 125.14 211.239 125.092 211.255 123.854C211.276 122.237 211.271 120.625 211.25 119.014C211.246 118.76 211.191 118.504 211.138 118.26C211.116 118.155 211.094 118.053 211.076 117.953H187.186Z"
        fill="#F96C27"
      />
    </g>
    <g filter="url(#filter1_d_992_26824)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172.089 193.697V186.894C170.724 186.563 149.223 186.605 148.225 186.909C147.958 188.668 148.036 192.993 148.357 193.865C150.671 194.143 170.945 194.012 172.089 193.697ZM188.277 186.706L188.277 186.706C188.58 186.687 188.807 186.673 189.034 186.673C212.752 186.673 236.47 186.678 260.187 186.684L260.188 186.684L260.327 186.684C260.908 186.684 261.491 186.688 262.074 186.693C262.89 186.699 263.706 186.706 264.521 186.699C265.119 186.694 265.618 186.841 266.059 187.277C267.038 188.237 268.021 189.193 269.003 190.148L269.004 190.148L269.004 190.149L269.005 190.149L269.007 190.151L269.012 190.156C269.997 191.114 270.983 192.072 271.965 193.035C272.091 193.158 272.188 193.311 272.325 193.527C272.404 193.651 272.496 193.797 272.615 193.97H270.857L270.762 193.97C254.106 193.975 237.449 193.98 220.793 193.98C210.441 193.98 200.084 193.98 189.733 193.97C189.57 193.97 189.421 193.971 189.283 193.972C188.56 193.978 188.176 193.981 187.974 193.791C187.745 193.576 187.747 193.115 187.753 192.133V192.133L187.753 191.97C187.757 190.842 187.756 189.718 187.755 188.557C187.754 187.962 187.753 187.357 187.753 186.736C187.953 186.726 188.125 186.715 188.277 186.706ZM188.011 196.663H189.255L269.964 196.694C270.473 196.694 270.982 196.697 271.491 196.699L271.492 196.699C272.511 196.704 273.53 196.708 274.552 196.694C275.104 196.684 275.571 196.773 275.98 197.177C277.183 198.38 278.391 199.577 279.6 200.774L279.6 200.775L279.601 200.775L279.602 200.776C280.407 201.574 281.213 202.372 282.017 203.172C282.114 203.269 282.186 203.393 282.263 203.524L282.263 203.524C282.298 203.585 282.334 203.646 282.374 203.707C281.14 204.012 189.249 204.054 187.963 203.765C187.659 202.658 187.664 197.865 188.011 196.663ZM282.897 227.487L282.898 227.486L282.905 227.478C283.09 227.281 283.274 227.084 283.46 226.889C283.403 226.794 283.345 226.7 283.287 226.611H187.795C187.727 229.004 187.674 231.325 187.832 233.76C188.025 233.771 188.205 233.783 188.378 233.794C188.726 233.818 189.042 233.839 189.354 233.839C203.36 233.839 217.361 233.834 231.366 233.829L231.413 233.829L231.425 233.829C246.009 233.818 260.588 233.808 275.172 233.823C276.122 233.829 276.809 233.571 277.471 232.878C278.367 231.938 279.308 231.035 280.248 230.132C280.756 229.644 281.264 229.157 281.765 228.663C282.153 228.282 282.524 227.885 282.897 227.487ZM278.463 243.897H283.712C283.656 243.765 283.619 243.67 283.592 243.598L283.592 243.597C283.545 243.475 283.524 243.422 283.481 243.383C283.029 242.936 282.578 242.489 282.126 242.042C280.471 240.401 278.816 238.761 277.124 237.157C276.788 236.837 276.195 236.684 275.707 236.653C274.269 236.558 272.825 236.532 271.387 236.532C258.111 236.529 244.833 236.528 231.556 236.527C218.268 236.526 204.981 236.524 191.695 236.522C191.376 236.522 191.056 236.519 190.736 236.517L190.735 236.517C190.094 236.512 189.454 236.508 188.814 236.522C187.848 236.548 187.758 236.627 187.743 237.582C187.722 239.241 187.727 240.894 187.743 242.553C187.753 243.839 187.8 243.871 189.071 243.892C189.217 243.895 189.361 243.894 189.506 243.893H189.506H189.507H189.507H189.507H189.507C189.58 243.892 189.653 243.892 189.727 243.892C199.559 243.886 209.386 243.886 219.218 243.886C229.092 243.889 238.966 243.89 248.841 243.892L248.926 243.892C258.772 243.893 268.617 243.894 278.463 243.897ZM169.496 266.874C168.304 266.543 79.6628 266.448 77.5368 266.779C78.1716 267.404 78.7954 268.009 79.408 268.603C80.7864 269.939 82.1078 271.22 83.3689 272.554C84.2508 273.493 85.1747 273.897 86.4503 273.887C89.8597 273.867 93.2713 273.877 96.6836 273.886H96.6843H96.6851H96.6858H96.6866H96.6874H96.6881H96.6889H96.6896H96.6904H96.6912H96.6919H96.6927H96.6935H96.6942H96.695H96.6957H96.6965H96.6973H96.698H96.6988H96.6995H96.7003H96.7011H96.7018H96.7026H96.7033H96.7041H96.7049H96.7056H96.7064C98.6612 273.892 100.616 273.897 102.571 273.897C119.611 273.897 136.656 273.897 153.695 273.892C155.592 273.892 157.492 273.883 159.393 273.874L159.433 273.874C160.054 273.871 160.675 273.868 161.296 273.866C161.958 273.866 162.562 273.813 163.092 273.278C164.162 272.198 165.251 271.138 166.341 270.079L166.342 270.077L166.344 270.076L166.345 270.075L166.346 270.074C166.976 269.462 167.605 268.85 168.231 268.233C168.521 267.95 168.795 267.647 169.083 267.328C169.216 267.18 169.353 267.028 169.496 266.874ZM159.423 276.701H87.8888L87.8886 276.702C87.8624 276.796 87.8362 276.89 87.8101 276.989C88.3277 277.501 88.8507 278.007 89.3736 278.513L89.3736 278.513L89.3737 278.513L89.3738 278.513L89.3738 278.513L89.3739 278.513L89.3739 278.513L89.374 278.513L89.3741 278.513L89.3741 278.513L89.3742 278.513L89.3742 278.513L89.3743 278.513L89.3744 278.513L89.3744 278.514L89.3745 278.514L89.3745 278.514L89.3747 278.514L89.3748 278.514L89.3749 278.514L89.375 278.514L89.375 278.514L89.3751 278.514L89.3751 278.514L89.3752 278.514L89.3752 278.514L89.3753 278.514L89.3753 278.515L89.3754 278.515L89.3754 278.515C90.639 279.737 91.9017 280.959 93.0857 282.254C94.0884 283.352 95.1592 283.735 96.6291 283.729C110.303 283.694 123.977 283.7 137.651 283.706C140.14 283.707 142.629 283.708 145.118 283.709H145.132C147.311 283.709 149.49 283.709 151.669 283.719C152.199 283.719 152.667 283.703 153.097 283.268C154.327 282.013 155.571 280.775 156.814 279.536L156.815 279.536L156.815 279.536L156.815 279.536L156.815 279.535L156.815 279.535L156.815 279.535L156.816 279.535L156.816 279.535L156.816 279.535L156.816 279.534L156.816 279.534L156.816 279.534L156.817 279.534L156.817 279.534L156.817 279.534L156.817 279.534L156.817 279.533L156.817 279.533L156.818 279.533L156.818 279.533L156.818 279.533L156.818 279.533L156.818 279.532L156.818 279.532L156.818 279.532L156.819 279.532L156.819 279.532L156.819 279.532L156.822 279.528C157.492 278.861 158.162 278.194 158.829 277.525C158.952 277.402 159.05 277.253 159.174 277.066C159.245 276.958 159.325 276.837 159.423 276.701ZM75.1064 263.756V256.69C75.275 256.679 75.4315 256.665 75.5805 256.651C75.8492 256.628 76.0935 256.606 76.34 256.606C78.4517 256.606 80.5638 256.607 82.6761 256.608H82.6766H82.6772H82.6777H82.6782H82.6788H82.6793H82.6798H82.6804H82.6809H82.6814H82.6819H82.6825H82.683H82.6835H82.6841H82.6846H82.6851H82.6857H82.6862H82.6867H82.6873H82.6878H82.6883H82.6889H82.6894H82.6899H82.6905H82.6957C88.3429 256.611 93.9913 256.614 99.6369 256.595C100.619 256.59 101.364 256.847 102.067 257.566C103.336 258.861 104.642 260.123 105.948 261.385C106.554 261.971 107.16 262.557 107.763 263.147C107.851 263.232 107.932 263.326 108.039 263.451L108.039 263.451C108.11 263.535 108.193 263.633 108.298 263.75C97.1592 263.756 86.1984 263.756 75.1064 263.756ZM139.243 263.572C139.211 263.629 139.173 263.696 139.123 263.776C143.008 264.065 171.05 263.929 172.074 263.619V256.711C171.951 256.697 171.837 256.682 171.729 256.668L171.729 256.668C171.499 256.638 171.297 256.611 171.097 256.611C167.697 256.609 164.295 256.609 160.893 256.61H160.893H160.893H160.893H160.893H160.893H160.893H160.893H160.893H160.893H160.892H160.892H160.892H160.892H160.892H160.892H160.892H160.892H160.892H160.892H160.892H160.891H160.891H160.891H160.891H160.891H160.891C156.354 256.611 151.816 256.612 147.281 256.606C146.477 256.606 145.868 256.874 145.312 257.44C143.966 258.805 142.604 260.157 141.243 261.509L141.237 261.515C140.621 262.127 140.005 262.738 139.391 263.351C139.337 263.405 139.299 263.473 139.243 263.572L139.243 263.572L139.243 263.572ZM267.213 224.018H267.213C264.136 224.009 261.06 223.999 257.975 224.017C257.989 223.44 258.348 223.179 258.654 222.957L258.704 222.92C260.41 221.645 261.287 220.044 260.877 217.86C260.835 217.642 260.874 217.409 260.912 217.187L260.913 217.187C260.93 217.083 260.948 216.981 260.956 216.884C262.048 216.558 283.702 216.558 284.899 216.889C285.051 219.141 285.014 221.419 284.899 223.881C278.96 224.053 273.087 224.036 267.213 224.018ZM260.983 213.807H284.873C284.887 213.615 284.903 213.439 284.918 213.274C284.947 212.95 284.973 212.669 284.973 212.39C284.978 211.823 284.976 211.256 284.975 210.689C284.974 210.122 284.972 209.555 284.978 208.988C284.995 206.5 284.976 206.501 283.597 206.56C283.329 206.572 283.011 206.586 282.631 206.584H281.975C274.093 206.584 266.206 206.589 258.324 206.595H258.322H258.32H258.318H258.316H258.315H258.313H258.311H258.309H258.307H258.305H258.304H258.302H258.3H258.298H258.296H258.294H258.293H258.291H258.289H258.287H258.285H258.283H258.282H258.28L258.253 206.595C257.997 206.595 257.74 206.612 257.429 206.633L257.428 206.633C257.288 206.643 257.135 206.653 256.967 206.663C257.051 206.788 257.118 206.899 257.177 206.997C257.282 207.169 257.364 207.303 257.471 207.414C257.645 207.597 257.817 207.781 257.99 207.966C258.594 208.611 259.197 209.256 259.854 209.844C260.599 210.505 260.967 211.246 260.878 212.248C260.849 212.584 260.889 212.926 260.93 213.286C260.949 213.456 260.969 213.629 260.983 213.807ZM211.906 216.752V223.876C211.796 223.889 211.687 223.906 211.578 223.922L211.577 223.922C211.311 223.962 211.047 224.002 210.783 224.002C203.538 224.007 196.294 224.012 189.05 224.002C187.822 224.002 187.759 223.933 187.748 222.773C187.733 221.12 187.733 219.461 187.748 217.807C187.759 216.705 187.838 216.632 188.961 216.626C192.451 216.618 195.944 216.623 199.436 216.628C200.308 216.629 201.181 216.63 202.053 216.632C204.888 216.632 207.728 216.637 210.562 216.647C210.831 216.651 211.097 216.677 211.382 216.705C211.549 216.722 211.722 216.739 211.906 216.752ZM99.1171 243.739V236.632C98.8746 236.617 98.6555 236.601 98.4502 236.585L98.4494 236.585L98.4488 236.585L98.4483 236.585L98.448 236.585C98.1298 236.56 97.8449 236.538 97.558 236.532C95.4948 236.524 93.4315 236.525 91.3682 236.526C90.6808 236.526 89.9934 236.527 89.3059 236.527C87.8703 236.527 86.4341 236.526 84.9977 236.526H84.9971H84.9965H84.9959H84.9954H84.9948H84.9942H84.9936H84.993H84.9925H84.9919H84.9913H84.9907H84.9901H84.9896H84.989H84.9884H84.9878H84.9872H84.9866H84.9861H84.9855H84.9849C82.103 236.524 79.2203 236.523 76.3399 236.527C75.0748 236.527 75.0223 236.585 75.0118 237.865C74.9961 239.435 74.9961 241.005 75.0118 242.574C75.0223 243.792 75.0906 243.876 76.2454 243.876C83.4476 243.886 90.6551 243.886 97.8573 243.881C98.1429 243.881 98.426 243.839 98.7169 243.795L98.717 243.795L98.7172 243.795C98.8486 243.776 98.9816 243.756 99.1171 243.739ZM99.1173 216.742V223.834C98.9973 223.851 98.8797 223.872 98.7639 223.893C98.4996 223.94 98.2442 223.986 97.9887 223.986C90.7393 223.991 83.4899 223.991 76.2404 223.981C75.1118 223.981 75.0278 223.897 75.0173 222.805C75.0016 221.104 75.0121 219.403 75.0226 217.708C75.0226 217.514 75.0566 217.321 75.0948 217.104L75.0948 217.104C75.1147 216.991 75.1358 216.871 75.1538 216.742H99.1173ZM172.105 216.91C171.029 216.574 149.532 216.527 148.099 216.878C148.098 217.448 148.094 218.014 148.091 218.576L148.091 218.579C148.08 220.329 148.07 222.048 148.125 223.739C149.574 224.117 170.981 224.101 172.105 223.75V216.91ZM172.099 243.823C171.863 243.833 171.65 243.845 171.45 243.856C171.113 243.875 170.816 243.892 170.519 243.892C163.574 243.892 156.635 243.886 149.69 243.881C149.428 243.881 149.166 243.876 148.904 243.871L148.902 243.871C148.383 243.86 148.089 243.629 148.089 243.078C148.092 241.696 148.091 240.315 148.09 238.893L148.09 238.871C148.089 238.151 148.089 237.421 148.089 236.674C148.262 236.655 148.425 236.632 148.582 236.61L148.582 236.61C148.872 236.57 149.14 236.532 149.406 236.532C156.524 236.527 163.643 236.527 170.761 236.537C171.035 236.537 171.312 236.569 171.607 236.602C171.763 236.62 171.925 236.638 172.094 236.653C172.099 239.068 172.099 241.361 172.099 243.823ZM284.904 253.808C285.041 251.446 284.994 249.167 284.931 246.837C283.44 246.527 259.298 246.558 258.138 246.863C258.327 247.051 258.51 247.238 258.69 247.422L258.69 247.422C259.103 247.845 259.501 248.252 259.933 248.621C260.663 249.241 260.92 249.971 260.888 250.921C260.883 251.085 260.874 251.251 260.864 251.418C260.821 252.198 260.777 252.999 261.093 253.808H284.904ZM211.895 256.674V263.766H187.79C187.722 261.383 187.711 259.063 187.811 256.674H211.895ZM211.927 206.616H187.895C187.877 206.761 187.854 206.897 187.832 207.027L187.832 207.027C187.793 207.264 187.757 207.482 187.753 207.702C187.743 209.356 187.732 211.015 187.753 212.668C187.769 213.765 187.864 213.865 188.961 213.865C196.193 213.865 203.43 213.855 210.663 213.844H210.663H210.663H210.663H210.664H210.664H210.664H210.665H210.665H210.665H210.665H210.666H210.666H210.666H210.667H210.667H210.667L210.699 213.844C210.965 213.844 211.234 213.813 211.535 213.778L211.536 213.778C211.662 213.763 211.793 213.748 211.932 213.734C212.001 211.324 212.021 209.009 211.927 206.616ZM99.0857 246.7V253.808H75.0801C74.968 251.677 74.9972 249.609 75.0272 247.488C75.0309 247.227 75.0347 246.964 75.0381 246.7H99.0857ZM211.89 253.787V246.847C210.777 246.558 189.018 246.522 187.785 246.826C187.78 247.368 187.768 247.912 187.756 248.458C187.718 250.21 187.68 251.986 187.864 253.787H211.89ZM211.885 273.834C204.159 273.946 196.521 273.906 188.736 273.865L187.859 273.861C187.694 271.732 187.736 269.707 187.778 267.722V267.722V267.722V267.722L187.778 267.717L187.778 267.713C187.784 267.42 187.79 267.128 187.796 266.837C189.176 266.506 210.798 266.538 211.885 266.858V273.834ZM75.1118 226.621V233.645C77.2274 233.997 98.0885 233.886 99.1699 233.508V227.304C99.1699 226.836 98.9389 226.574 98.456 226.563C98.1935 226.558 97.931 226.553 97.6686 226.553L97.6229 226.553C90.6091 226.548 83.5954 226.542 76.5817 226.542C76.2589 226.542 75.9387 226.565 75.5933 226.589H75.5933H75.5933H75.5932H75.5932H75.5932H75.5931H75.5931L75.5923 226.589L75.5921 226.589L75.5919 226.589L75.5917 226.589C75.4376 226.6 75.2785 226.611 75.1118 226.621ZM99.0435 213.813C93.8849 213.877 88.7526 213.869 83.5799 213.861H83.5796H83.5793H83.5789H83.5786H83.5783H83.5779H83.5776H83.5773H83.5769H83.5766H83.5763C80.7493 213.857 77.9103 213.852 75.0484 213.86C75.046 213.291 75.0385 212.731 75.031 212.178C75.0057 210.299 74.9814 208.496 75.1639 206.642H98.9332C99.2167 207.587 99.2902 211.807 99.0435 213.813ZM99.0806 203.854V196.826C97.2171 196.553 76.0199 196.658 75.1065 196.967C75.1065 197.687 75.0827 198.411 75.0587 199.14C75.008 200.683 74.9565 202.251 75.1275 203.854H99.0806ZM75.2956 186.783H99.0859V193.923C93.7084 193.986 88.3691 193.976 83.0567 193.966C80.4918 193.961 77.9332 193.956 75.3796 193.959C74.9911 193.067 74.9439 188.327 75.2956 186.783ZM172.068 206.658V213.587C171.013 213.918 150.094 214.028 148.173 213.697C148.015 211.408 148.073 209.088 148.147 206.658H172.068ZM172.042 246.679H148.278C147.947 248.522 148.016 252.894 148.367 253.797H172.131C172.137 253.256 172.149 252.719 172.16 252.186V252.186C172.199 250.336 172.238 248.525 172.042 246.679ZM260.899 256.664H284.647C285.051 257.645 285.125 262.233 284.731 263.845C276.904 263.855 269.025 263.855 260.998 263.85C260.823 262.093 260.85 260.388 260.878 258.644V258.644V258.643V258.643V258.643V258.642C260.888 257.99 260.899 257.332 260.899 256.664ZM172.053 196.747H148.11C148.084 199.203 148.073 201.492 148.105 203.734C149.575 204.043 170.976 204.001 172.11 203.697L172.123 203.244V203.244V203.244V203.244V203.243C172.183 201.098 172.244 198.934 172.053 196.747ZM172.073 233.818C164.042 233.834 156.157 233.839 148.178 233.808V226.768C149.202 226.474 170.729 226.443 172.073 226.747V233.818ZM260.941 266.884V273.777C261.028 273.784 261.112 273.793 261.193 273.801C261.261 273.807 261.327 273.814 261.391 273.821C261.708 273.854 261.976 273.882 262.243 273.882C269.308 273.882 276.374 273.876 283.44 273.866C283.752 273.866 284.066 273.824 284.367 273.784C284.506 273.766 284.642 273.748 284.773 273.735C285.109 272.123 285.041 267.703 284.699 266.774C283.088 266.454 261.917 266.532 260.941 266.884ZM211.864 283.625H188.1C187.711 282.449 187.69 278.018 188.042 276.869C189.139 276.564 210.562 276.548 211.869 276.874C211.864 279.084 211.864 281.315 211.864 283.625ZM261.183 283.646H284.941C284.941 282.904 284.942 282.18 284.943 281.467C284.944 280.074 284.945 278.725 284.941 277.378C284.936 276.895 284.616 276.695 284.165 276.674C283.902 276.664 283.64 276.653 283.377 276.653C276.385 276.648 269.393 276.648 262.4 276.653C262.088 276.653 261.776 276.689 261.475 276.724C261.331 276.741 261.189 276.757 261.051 276.769C260.731 278.433 260.82 282.701 261.183 283.646Z"
        fill="#F96C27"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_992_26824"
        x="47.1274"
        y="50"
        width="255.352"
        height="153.051"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="14" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.976471 0 0 0 0 0.423529 0 0 0 0 0.152941 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_992_26824"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_992_26824"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_992_26824"
        x="47"
        y="158.663"
        width="266"
        height="153.067"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="14" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.976471 0 0 0 0 0.423529 0 0 0 0 0.152941 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_992_26824"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_992_26824"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const SquareSudoSwapMarketplaceIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="360"
    height="361"
    viewBox="0 0 360 361"
    fill="none"
    {...props}
  >
    <rect y="0.5" width="360" height="360" rx="48" fill="#B9B9FF" />
    <path
      d="M174.524 244C164.482 244 156.951 241.49 150.256 237.305C144.398 233.121 141.888 226.427 141.888 218.895H158.624C158.624 222.242 159.461 224.753 162.809 227.263C165.319 228.937 169.503 229.774 174.524 229.774H182.056C186.461 229.779 190.79 228.624 194.608 226.427C197.119 223.916 198.792 220.569 198.792 217.221C198.792 213.037 197.119 210.527 194.608 208.016C191.36 205.788 187.634 204.354 183.729 203.832L171.177 201.322C152.767 198.811 143.561 189.606 143.561 175.38C143.154 167.762 146.234 160.371 151.93 155.296C156.951 151.112 165.319 148.602 175.361 148.602H182.056C191.261 148.602 198.792 151.112 205.487 155.296C210.508 159.48 213.855 165.338 213.855 172.033H197.118C197.118 169.522 195.445 167.012 192.934 165.338C190.424 163.664 186.24 162.828 182.056 162.828H174.524C169.503 162.828 166.156 164.501 162.809 166.175C160.298 168.685 158.624 171.196 158.624 174.543C158.624 181.238 163.645 185.422 172.85 187.096L185.403 188.769C193.771 188.769 200.466 192.117 207.16 197.138C212.181 202.159 213.855 208.016 213.855 216.385C214.262 224.003 211.183 231.393 205.487 236.469C199.629 241.49 191.261 244 180.382 244H174.524Z"
      fill="black"
    />
    <path
      d="M73 118H92.2471L114.841 180.762L91.4102 243.524H73L96.4312 180.762L73 118Z"
      fill="black"
    />
    <path
      d="M286.362 118H267.115L244.52 180.762L267.952 243.524H286.362L262.931 180.762L286.362 118Z"
      fill="black"
    />
  </svg>
);

export const SquareNftXMarketplaceIcon = ({
  gradientId,
  ...rest
}: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="360"
    height="361"
    viewBox="0 0 360 361"
    fill="none"
    {...rest}
  >
    <rect y="0.5" width="360" height="360" rx="48" fill="white" />
    <g clipPath="url(#clip0_992_26819)">
      <path
        d="M180 60L88.0715 151.929L180 240.007L271.929 151.929L180 60Z"
        fill={`url(#${gradientId}paint0_linear_992_26819)`}
      />
      <path
        d="M133.737 230.155C135.761 227.445 137.679 224.871 139.977 222.37C112.347 229.029 93.3206 242.973 93.3206 259.111C93.3206 259.713 93.3531 260.311 93.4046 260.904C96.1148 259.875 98.9743 258.645 102.012 257.151C120.262 248.186 127.421 238.606 133.737 230.155Z"
        fill="black"
      />
      <path
        d="M162.514 259.817C168.039 252.423 172.81 246.039 186.296 239.417C199.783 232.795 207.754 232.918 216.982 233.061C223.164 233.158 229.831 233.259 237.963 231.518C228.046 226.19 215.295 222.159 200.883 219.998L180 240L165.403 226.015C155 233.019 149.671 240.142 144.831 246.607C139.306 254.001 134.535 260.386 121.049 267.007C111.59 271.653 104.846 272.978 98.4753 273.305C103.5 279.969 111.96 285.819 122.794 290.318C125.318 289.339 127.971 288.18 130.774 286.803C149.035 277.848 156.194 268.269 162.514 259.817Z"
        fill="black"
      />
      <path
        d="M246.096 240.667C235.546 240.495 223.591 240.312 205.339 249.279C187.087 258.247 179.928 267.825 173.613 276.278C168.087 283.67 163.317 290.055 149.829 296.678C149.218 296.978 148.629 297.261 148.032 297.535C157.443 299.195 166.981 300.02 176.537 300C178.645 300 180.731 299.962 182.796 299.885C186.171 296.313 188.796 292.809 191.282 289.481C196.805 282.087 201.578 275.702 215.064 269.081C228.55 262.461 236.523 262.584 245.75 262.726C249.998 262.793 254.475 262.862 259.5 262.337C259.669 261.272 259.755 260.195 259.755 259.116C259.755 252.494 256.548 246.242 250.862 240.71C249.288 240.717 247.714 240.686 246.096 240.667Z"
        fill="black"
      />
      <path
        d="M209.902 296.571C231.703 291.878 248.621 282.725 255.883 271.462C249.648 272.601 242.554 274.786 234.111 278.937C222.343 284.722 215.194 290.755 209.902 296.571Z"
        fill="black"
      />
      <path
        opacity="0.5"
        d="M180 151.929H88.0715L180 60V151.929Z"
        fill={`url(#${gradientId}paint1_linear_992_26819)`}
      />
    </g>
    <defs>
      <linearGradient
        id={`${gradientId}paint0_linear_992_26819`}
        x1="224.308"
        y1="107.621"
        x2="138.982"
        y2="192.946"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.09" stopColor="#FF6D41" />
        <stop offset="0.5" stopColor="#FA297F" />
        <stop offset="1" stopColor="#FA297F" />
      </linearGradient>
      <linearGradient
        id={`${gradientId}paint1_linear_992_26819`}
        x1="200.673"
        y1="85.2926"
        x2="114.996"
        y2="170.967"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#652CB4" />
        <stop offset="0.07" stopColor="#652CB4" stopOpacity="0.82" />
        <stop offset="0.19" stopColor="#652CB4" stopOpacity="0.53" />
        <stop offset="0.3" stopColor="#652CB4" stopOpacity="0.3" />
        <stop offset="0.4" stopColor="#652CB4" stopOpacity="0.14" />
        <stop offset="0.49" stopColor="#652CB4" stopOpacity="0.04" />
        <stop offset="0.55" stopColor="#652CB4" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_992_26819">
        <rect
          width="240"
          height="240"
          fill="white"
          transform="translate(60 60)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const SquareGemMarketplaceIcon = ({ gradientId, ...rest }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="360"
    height="361"
    viewBox="0 0 360 361"
    fill="none"
    {...rest}
  >
    <g clipPath="url(#clip0_992_26820)">
      <path
        d="M120.925 -208L-186 323.611L-88.8168 379.717L218.108 -151.892L120.925 -208Z"
        fill={`url(#${gradientId}paint0_linear_992_26820)`}
      />
      <path
        d="M206.116 -158.82L-100.809 372.791L-5.832 427.626L301.093 -103.985L206.116 -158.82Z"
        fill={`url(#${gradientId}paint1_linear_992_26820)`}
      />
      <path
        d="M291.285 -109.641L-15.6418 421.97L82.2684 478.498L389.195 -53.1126L291.285 -109.641Z"
        fill={`url(#${gradientId}paint2_linear_992_26820)`}
      />
      <path
        d="M376.478 -60.4641L69.5518 471.147L169.353 528.769L476.279 -2.84365L376.478 -60.4641Z"
        fill={`url(#${gradientId}paint3_linear_992_26820)`}
      />
      <path
        d="M461.641 -11.2825L154.716 520.327L239.895 569.506L546.82 37.896L461.641 -11.2825Z"
        fill={`url(#${gradientId}paint4_linear_992_26820)`}
      />
      <path
        d="M301.251 214.115V214.119V214.152C301.251 214.9 300.844 215.562 300.146 215.853C296.333 217.486 283.758 223.305 278.515 230.607C265.021 249.396 254.708 278.957 231.664 278.957H135.509C101.466 278.957 72.9645 251.931 73 215.939C73 215.038 73.7503 214.302 74.6508 214.302H120.227C121.785 214.302 123.048 215.566 123.048 217.125V225.922C123.048 230.599 126.84 234.39 131.516 234.39L166.085 234.379V214.272H142.46C156.032 197.059 164.135 175.336 164.135 151.716C164.135 125.329 154.026 101.305 137.474 83.2967C147.486 84.4559 157.057 86.4494 166.085 89.1117V83.5189C166.085 77.7087 170.795 73 176.605 73C182.415 73 187.125 77.7099 187.125 83.5189V97.012C219.409 112.073 240.525 137.064 240.525 165.35C240.525 181.934 233.264 197.387 220.749 210.371C218.341 212.869 215.004 214.274 211.535 214.274H187.125V234.377L217.735 234.369C224.347 234.369 236.187 221.857 241.809 214.306C241.809 214.306 242.048 213.931 242.694 213.744C243.34 213.558 298.919 200.793 298.919 200.793C300.075 200.47 301.251 201.355 301.251 202.563V214.115Z"
        fill="black"
      />
      <path
        d="M129.696 103.591C140.095 116.805 146.298 133.474 146.298 151.593C146.298 167.284 141.634 181.88 133.635 194.095H77.3803L129.696 103.591Z"
        fill="black"
      />
    </g>
    <defs>
      <linearGradient
        id={`${gradientId}paint0_linear_992_26820`}
        x1="-22.6145"
        y1="34.8522"
        x2="50.9502"
        y2="131.894"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E272E4" />
        <stop offset="0.995" stopColor="#E15BD3" />
      </linearGradient>
      <linearGradient
        id={`${gradientId}paint1_linear_992_26820`}
        x1="161.807"
        y1="111.959"
        x2="13.6812"
        y2="165.872"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3708B" />
        <stop offset="0.313" stopColor="#F26F8D" />
        <stop offset="0.511" stopColor="#F06C96" />
        <stop offset="0.678" stopColor="#EC69A4" />
        <stop offset="0.827" stopColor="#E863B9" />
        <stop offset="0.963" stopColor="#E15CD4" />
        <stop offset="1" stopColor="#E05ADD" />
      </linearGradient>
      <linearGradient
        id={`${gradientId}paint2_linear_992_26820`}
        x1="134.637"
        y1="106.681"
        x2="225.152"
        y2="241.656"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F47E7C" />
        <stop offset="1" stopColor="#F76DA1" />
      </linearGradient>
      <linearGradient
        id={`${gradientId}paint3_linear_992_26820`}
        x1="214.871"
        y1="145.838"
        x2="310.344"
        y2="291.102"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE146" />
        <stop offset="1" stopColor="#F771A2" />
      </linearGradient>
      <linearGradient
        id={`${gradientId}paint4_linear_992_26820`}
        x1="306.109"
        y1="229.415"
        x2="390.15"
        y2="322.932"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FCC945" />
        <stop offset="1" stopColor="#F89E85" />
      </linearGradient>
      <clipPath id="clip0_992_26820">
        <rect y="0.5" width="360" height="360" rx="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const SquareZoraMarketplaceIcon = ({
  gradientId,
  ...rest
}: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="360"
    height="361"
    viewBox="0 0 360 361"
    fill="none"
    {...rest}
  >
    <g clipPath="url(#clip0_992_26823)">
      <path
        d="M0 180C0 279.267 80.734 360 180 360C279.266 360 360 279.267 360 180C359.909 80.734 279.174 0 180 0C80.734 0 0 80.734 0 180Z"
        fill={`url(#${gradientId}paint0_radial_992_26823)`}
      />
      <path
        d="M0 180C0 279.267 80.734 360 180 360C279.266 360 360 279.267 360 180C359.909 80.734 279.174 0 180 0C80.734 0 0 80.734 0 180Z"
        fill={`url(#${gradientId}paint1_radial_992_26823)`}
      />
      <path
        d="M0 180C0 279.267 80.734 360 180 360C279.266 360 360 279.267 360 180C359.909 80.734 279.174 0 180 0C80.734 0 0 80.734 0 180Z"
        fill={`url(#${gradientId}paint2_radial_992_26823)`}
      />
    </g>
    <defs>
      <radialGradient
        id={`${gradientId}paint0_radial_992_26823`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(233.851 87.6869) scale(271.046 271.047)"
      >
        <stop offset="0.00520833" stopColor="white" />
        <stop offset="0.458333" stopColor="#B7D8C8" />
        <stop offset="0.65625" stopColor="#6D9487" />
        <stop offset="1" stopColor="#4B4C3C" />
      </radialGradient>
      <radialGradient
        id={`${gradientId}paint1_radial_992_26823`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(233.851 87.6869) scale(271.046 271.047)"
      >
        <stop offset="0.00520833" stopColor="white" />
        <stop offset="0.458333" stopColor="#B5B4C6" />
        <stop offset="0.65625" stopColor="#9B8F8F" />
        <stop offset="1" stopColor="#4B4C3C" />
      </radialGradient>
      <radialGradient
        id={`${gradientId}paint2_radial_992_26823`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(233.851 87.6869) scale(271.046 271.047)"
      >
        <stop offset="0.15625" stopColor="#DCC8D0" />
        <stop offset="0.302083" stopColor="#78C8CF" />
        <stop offset="0.427083" stopColor="#4D959E" />
        <stop offset="0.557292" stopColor="#305EB9" />
        <stop offset="0.796875" stopColor="#311F12" />
        <stop offset="0.90625" stopColor="#684232" />
        <stop offset="1" stopColor="#2D1C13" />
      </radialGradient>
      <clipPath id="clip0_992_26823">
        <rect y="0.5" width="360" height="360" rx="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const SquareEnsVisionMarketplaceIcon = ({
  gradientId,
  ...rest
}: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="360"
    height="361"
    viewBox="0 0 360 361"
    fill="none"
    {...rest}
  >
    <rect y="0.5" width="360" height="360" rx="48" fill="#1E1E1E" />
    <g clipPath="url(#clip0_992_26817)">
      <path
        d="M179.922 299.993C113.794 299.993 59.9961 246.195 59.9961 180.067C59.9961 104.175 127.963 51.3302 196.801 61.178C187.547 72.135 181.883 85.8809 180.521 96.7767C135.175 96.4473 96.6574 133.127 96.6574 180.067C96.6574 225.979 134.009 263.33 179.92 263.33C227.542 263.33 264.367 223.775 263.195 177.926C275.845 175.801 288.256 169.93 298.347 161.114C309.99 234.255 253.267 299.993 179.922 299.993Z"
        fill={`url(#${gradientId}paint0_linear_992_26817)`}
      />
      <path
        d="M216.842 163.824V163.833C228.618 193.261 207.245 220.395 179.927 220.395C140.143 220.395 124.494 168.534 157.615 146.513C179.728 131.818 207.319 142.206 216.842 163.824ZM225.582 95.0598C238.724 68.0697 279.697 77.3379 279.743 107.386C279.743 124.206 265.63 136.385 250.546 135.927C243.586 124.753 234.06 115.402 222.76 108.65C222.548 103.955 223.519 99.2819 225.582 95.0598Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id={`${gradientId}paint0_linear_992_26817`}
        x1="194.663"
        y1="57.5714"
        x2="299.868"
        y2="179.996"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F59E0B" />
        <stop offset="1" stopColor="#FACC15" />
      </linearGradient>
      <clipPath id="clip0_992_26817">
        <rect
          width="239.876"
          height="240"
          fill="white"
          transform="translate(60 60)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const SquareCryptopunksMarketplaceIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="361"
    height="361"
    viewBox="0 0 361 361"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_992_26825)">
      <rect
        x="0.432617"
        y="0.5"
        width="360"
        height="360"
        rx="48"
        fill="#EA34B0"
      />
      <path
        d="M85.2899 358.604C85.2899 333.816 85.2899 309.038 85.2999 284.26V209.52C85.2999 207.53 85.2299 207.46 83.2799 207.46C79.0299 207.46 74.7799 207.47 70.5299 207.46C68.3999 207.46 68.2399 207.3 68.2399 205.2C68.2399 190.28 68.2499 175.37 68.2399 160.45C68.2399 159.5 68.1699 158.54 68.0099 157.6C67.8699 156.78 68.1399 156.39 68.9299 156.34C69.6299 156.29 70.3399 156.26 71.0499 156.26H114.67C115.58 156.26 116.5 156.19 117.41 156.12C119.19 155.97 119.49 156.22 119.49 157.97C119.49 162.39 119.49 166.8 119.48 171.22C119.48 173.53 119.5 173.55 121.88 173.55C126.13 173.55 130.38 173.57 134.63 173.52C135.78 173.51 136.32 173.87 136.3 175.08C136.25 177.54 136.21 180 136.28 182.45C136.36 184.94 136.53 187.44 136.76 189.92C136.79 190.25 137.43 190.75 137.83 190.79C139.32 190.95 140.82 191 142.32 191C150.898 191.01 159.487 191 168.065 190.99H168.07C168.74 190.99 169.4 190.94 170.07 190.91C171.72 190.83 171.78 190.77 171.78 189.19C171.78 185.11 171.77 181.02 171.78 176.94C171.8 173.04 171.35 173.58 175.17 173.56C179.25 173.54 183.34 173.53 187.42 173.55C188.5 173.55 189.03 173.19 189.02 172.02C188.98 168.82 189.02 165.61 189 162.41C188.99 161.03 188.93 159.66 188.85 158.29C188.75 156.55 188.99 156.25 190.78 156.25C197.03 156.25 203.28 156.28 209.53 156.25C213.48 156.23 217.44 156.14 221.39 156.07C223.21 156.04 223.42 156.39 223.38 158.16C223.29 161.82 223.36 165.49 223.36 169.15C223.37 170.06 223.43 170.98 223.38 171.89C223.3 173.28 223.46 173.54 224.85 173.54C229.298 173.56 233.755 173.55 238.213 173.54H238.22C240.22 173.53 240.24 173.55 240.24 175.56C240.24 180.06 240.23 184.56 240.25 189.06C240.25 190.81 240.46 191 242.2 191C252.2 191 262.2 190.99 272.2 190.99C272.87 190.99 273.53 191.02 274.2 191.01C275.1 191.01 275.5 191.45 275.46 192.33C275.44 192.7 275.46 193.07 275.46 193.45C275.46 224.37 275.47 255.28 275.44 286.2C275.44 288.19 275.2 290.19 275 292.17C274.85 293.63 274.38 294 272.86 294C268.45 294 264.03 293.96 259.62 294C258.07 294.01 257.96 294.19 257.96 295.79C257.95 300.29 257.96 304.79 257.95 309.29C257.95 311.08 257.8 311.23 256.03 311.24C251.61 311.26 247.2 311.24 242.78 311.25C240.72 311.25 240.52 311.41 240.48 313.41C240.39 318.07 240.31 322.74 240.31 327.4C240.31 328.44 239.9 328.72 239 328.72C237.67 328.72 236.33 328.74 235 328.74C215.08 328.74 195.17 328.74 175.25 328.75C174.41 328.75 173.58 328.79 172.75 328.84C171.83 328.89 171.43 329.38 171.47 330.31C171.56 332.47 171.67 334.64 171.68 336.8C171.71 342.5 171.69 348.21 171.69 353.92C171.69 355.78 171.66 357.65 171.69 359.52C171.7 360.57 171.22 361.06 170.19 361.05C168.32 361.03 166.45 360.99 164.58 360.99H88.2099C87.6699 360.99 87.1299 360.96 86.5899 360.99C85.6099 361.04 85.2199 360.57 85.2899 359.63C85.3099 359.34 85.2899 359.05 85.2899 358.76V358.604Z"
        fill="white"
      />
      <path
        d="M269.31 138.25H180.32H87.8599C85.3099 138.25 85.3199 138.26 85.3199 135.71V72.21C85.3199 69.51 85.3199 69.53 87.9999 69.53C92.3299 69.53 96.6699 69.53 101 69.52C102.62 69.51 102.79 69.33 102.79 67.71V67.6851C102.79 63.3234 102.79 58.9517 102.8 54.59C102.8 52.9 102.98 52.74 104.68 52.75C109.22 52.77 113.76 52.77 118.3 52.84C119.47 52.86 119.77 52.22 119.78 51.29C119.81 49 119.8 46.71 119.81 44.42C119.81 41.88 119.8 39.34 119.82 36.8C119.83 35.22 120.04 35.02 121.65 35.01C123.77 34.99 125.9 35 128.02 35H237.39C237.81 35 238.23 35.03 238.64 35C239.81 34.92 240.3 35.44 240.28 36.62C240.23 39.32 240.23 42.03 240.27 44.74C240.3 46.87 240.46 48.99 240.46 51.11C240.46 52.39 241.02 52.78 242.21 52.77C246.75 52.74 251.29 52.76 255.83 52.77C257.88 52.77 257.95 52.83 257.95 54.85V67.6C257.95 69.48 258.01 69.54 259.94 69.54C264.48 69.53 269.02 69.52 273.56 69.52C275.26 69.52 275.44 69.68 275.44 71.37C275.44 92.08 275.44 112.78 275.43 133.49C275.42 134.7 275.28 135.9 275.24 137.11C275.21 137.9 274.82 138.23 274.06 138.23C272.48 138.23 270.89 138.25 269.31 138.25Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_992_26825">
        <rect
          x="0.432617"
          y="0.5"
          width="360"
          height="360"
          rx="48"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const SquareRaribleMarketplaceIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="360"
    height="361"
    viewBox="0 0 360 361"
    fill="none"
    {...props}
  >
    <rect y="0.5" width="360" height="360" rx="48" fill="#FEDA03" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M271.949 148.877C271.949 166.845 261.411 175.782 249.568 178.887C263.742 183.12 274 194.691 274 213.036V246.715H219.912V214.729C219.912 204.945 214.131 200.994 204.246 200.994H140.087V246.715H86V112H214.504C246.77 112 271.949 118.961 271.949 148.877ZM140.111 149.638H213.231C213.34 149.634 213.45 149.638 213.56 149.638C218.587 149.638 222.664 153.749 222.664 158.821C222.664 163.893 218.587 168.005 213.56 168.005C213.45 168.005 213.34 168.003 213.231 167.999L140.111 168.005V149.638Z"
      fill="black"
    />
  </svg>
);

export const SquareFoundationMarketplaceIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="360"
    height="361"
    viewBox="0 0 360 361"
    fill="none"
    {...props}
  >
    <rect y="0.5" width="360" height="360" rx="48" fill="black" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M216.977 180.397C216.977 201.604 199.836 218.795 178.691 218.795C157.547 218.795 140.406 201.604 140.406 180.397C140.406 159.191 157.547 142 178.691 142C199.836 142 216.977 159.191 216.977 180.397ZM105.324 145.657C106.026 144.438 107.78 144.438 108.482 145.657L147.558 213.538C148.26 214.757 147.383 216.281 145.98 216.281H67.8258C66.4224 216.281 65.5453 214.757 66.247 213.538L105.324 145.657ZM225.633 144.285C223.62 144.285 221.987 145.922 221.987 147.942V212.852C221.987 214.872 223.62 216.509 225.633 216.509H290.354C292.368 216.509 294 214.872 294 212.852V147.942C294 145.922 292.368 144.285 290.354 144.285H225.633Z"
      fill="white"
    />
  </svg>
);

export const SquareNft20MarketplaceIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="363"
    height="364"
    viewBox="0 0 363 364"
    fill="none"
    {...props}
  >
    <rect width="363" height="364" rx="48" fill="#3D3D3D" />
    <path
      d="M218.1 115.8V102.1C218.1 102.1 187 101 177.94 115.76L177.72 102.31C177.72 102.31 148.79 100.74 135.52 117.68C131.99 122.19 129.43 125.82 127.64 130.38C123.78 140.19 124.37 155.26 124.37 155.26V221.26C124.37 221.26 115.51 219.54 110.05 224.26C109.786 224.509 109.449 224.666 109.088 224.708C108.728 224.749 108.364 224.673 108.05 224.49C107.77 224.301 107.567 224.017 107.48 223.69C105.96 218.31 95.1501 214.78 88.7401 221.6C81.8701 228.91 85.5401 242.18 97.4601 242.66C97.4601 242.66 94.9701 262.44 111.08 269.82C124.46 275.95 133.08 269.82 133.08 269.82C133.08 269.82 138.08 276.74 150.69 276.74H237.4C243.64 276.74 257.72 269.55 257.72 255.01V102.27C257.72 102.27 225 101.08 218.1 115.8ZM250.17 256C250.17 266.83 236.76 269.94 234.94 269.94H149.49C146.518 269.946 143.587 269.246 140.938 267.899C138.288 266.552 135.996 264.595 134.25 262.19C128.63 267.08 120.36 265.87 120.36 265.87C104.36 264.78 103.6 246.55 104.69 242.94C105.78 239.33 104.95 236.07 98.4101 236.17C91.8701 236.27 90.3301 229.24 94.6401 226.48C98.9501 223.72 103.05 226.32 103.08 229.67C103.08 231.67 105.08 234.1 108.27 234.2C112.5 234.33 114.48 228.68 120.95 228.32C124.697 228.061 128.438 228.894 131.72 230.72C131.72 230.72 132.54 178.65 132.54 144.77C132.54 137.08 136.37 129.65 140.33 124.47C142.583 121.477 145.281 118.847 148.33 116.67C154.964 111.879 162.979 109.379 171.16 109.55V147.14C171.16 112.84 211.04 109.55 211.04 109.55V146.48C211.04 111.87 250.14 109.55 250.14 109.55L250.17 256Z"
      fill="#24DDD8"
    />
    <path
      d="M238.24 214.27V245.74C238.24 248.657 237.081 251.455 235.018 253.518C232.955 255.581 230.157 256.74 227.24 256.74H225.34C225.168 256.74 225.002 256.672 224.88 256.55C224.759 256.428 224.69 256.262 224.69 256.09V249.6C224.712 247.961 224.141 246.37 223.083 245.119C222.024 243.867 220.55 243.04 218.93 242.79C217.992 242.666 217.038 242.744 216.132 243.019C215.226 243.293 214.389 243.758 213.677 244.382C212.965 245.005 212.395 245.774 212.004 246.636C211.613 247.498 211.411 248.433 211.41 249.38V255.67C211.411 255.81 211.385 255.949 211.332 256.079C211.28 256.208 211.202 256.327 211.103 256.426C211.005 256.525 210.887 256.604 210.758 256.658C210.629 256.712 210.49 256.74 210.35 256.74H172.55C172.266 256.74 171.994 256.627 171.793 256.427C171.593 256.226 171.48 255.954 171.48 255.67V249.67C171.506 247.91 170.85 246.208 169.65 244.92C168.45 243.632 166.798 242.858 165.04 242.76C164.151 242.733 163.266 242.885 162.438 243.207C161.609 243.529 160.853 244.013 160.215 244.633C159.577 245.252 159.07 245.993 158.724 246.812C158.378 247.631 158.2 248.511 158.2 249.4V256.11C158.2 256.282 158.132 256.448 158.01 256.57C157.888 256.692 157.722 256.76 157.55 256.76H156.1C153.183 256.76 150.385 255.601 148.322 253.538C146.259 251.475 145.1 248.677 145.1 245.76V214.28C145.1 211.363 146.259 208.565 148.322 206.502C150.385 204.439 153.183 203.28 156.1 203.28H157.55C157.722 203.28 157.888 203.348 158.01 203.47C158.132 203.592 158.2 203.758 158.2 203.93V210.77C158.2 212.531 158.9 214.22 160.145 215.465C161.39 216.71 163.079 217.41 164.84 217.41C166.601 217.41 168.29 216.71 169.535 215.465C170.781 214.22 171.48 212.531 171.48 210.77V204.3C171.48 204.16 171.508 204.021 171.562 203.892C171.616 203.763 171.695 203.645 171.794 203.547C171.894 203.448 172.012 203.37 172.141 203.318C172.271 203.265 172.41 203.239 172.55 203.24H210.35C210.49 203.239 210.628 203.265 210.757 203.318C210.887 203.371 211.004 203.449 211.103 203.547C211.201 203.646 211.279 203.764 211.332 203.893C211.385 204.022 211.411 204.16 211.41 204.3V210.44C211.384 212.2 212.04 213.902 213.24 215.19C214.44 216.478 216.092 217.252 217.85 217.35C218.737 217.378 219.621 217.228 220.449 216.908C221.278 216.588 222.033 216.105 222.671 215.487C223.309 214.87 223.816 214.131 224.163 213.314C224.51 212.496 224.689 211.618 224.69 210.73V203.89C224.69 203.718 224.759 203.552 224.88 203.43C225.002 203.308 225.168 203.24 225.34 203.24H227.25C228.696 203.241 230.128 203.528 231.463 204.083C232.799 204.638 234.012 205.451 235.032 206.476C236.053 207.5 236.862 208.716 237.412 210.054C237.963 211.391 238.244 212.824 238.24 214.27Z"
      fill="#24DDD8"
    />
    <path
      d="M168.19 170.28H161.75C159.695 170.28 158.03 171.946 158.03 174V186.66C158.03 188.715 159.695 190.38 161.75 190.38H168.19C170.244 190.38 171.91 188.715 171.91 186.66V174C171.91 171.946 170.244 170.28 168.19 170.28Z"
      fill="#24DDD8"
    />
    <path
      d="M221.27 170.28H214.83C212.775 170.28 211.11 171.946 211.11 174V186.66C211.11 188.715 212.775 190.38 214.83 190.38H221.27C223.324 190.38 224.99 188.715 224.99 186.66V174C224.99 171.946 223.324 170.28 221.27 170.28Z"
      fill="#24DDD8"
    />
    <path
      d="M242.71 116.19C242.71 116.19 212.91 118.65 217.2 153.99C218.927 145.935 221.729 138.149 225.53 130.84C229.06 124.34 237.32 119.4 242.71 116.19Z"
      fill="#24DDD8"
    />
    <path
      d="M202.64 116.19C202.64 116.19 172.84 118.65 177.13 153.99C178.858 145.935 181.659 138.149 185.46 130.84C189 124.34 197.25 119.4 202.64 116.19Z"
      fill="#24DDD8"
    />
    <path
      d="M163.31 116.19C163.31 116.19 133.51 118.65 137.8 153.99C139.528 145.935 142.329 138.149 146.13 130.84C149.65 124.34 157.92 119.4 163.31 116.19Z"
      fill="#24DDD8"
    />
  </svg>
);

export const UniswapMagentaIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.26028 7.69661C8.2265 7.827 8.16752 7.94944 8.0867 8.05696C7.93627 8.25309 7.73717 8.40605 7.50935 8.50052C7.30443 8.58922 7.08744 8.64655 6.8656 8.67061C6.81999 8.67641 6.77273 8.68001 6.72695 8.68349L6.72692 8.68349L6.71944 8.68406C6.57894 8.68943 6.44384 8.73983 6.33392 8.82791C6.224 8.91598 6.14503 9.03709 6.10858 9.17351C6.09189 9.24138 6.07949 9.31024 6.07143 9.37969C6.05867 9.4844 6.0521 9.59161 6.04499 9.70758L6.04499 9.7076C6.03989 9.79082 6.03451 9.87856 6.02636 9.97313C5.97864 10.3583 5.86772 10.7329 5.6981 11.0817C5.66343 11.155 5.62809 11.2261 5.59338 11.2959C5.40739 11.6701 5.23937 12.008 5.28761 12.4607C5.32537 12.8095 5.50321 13.0432 5.73951 13.2842C5.85174 13.3995 6.00056 13.4981 6.15504 13.6003C6.58739 13.8866 7.06406 14.2022 6.90702 14.9973C6.77851 15.6415 5.71515 16.3175 4.2206 16.5537C4.36557 16.5316 4.04625 15.9843 4.01077 15.9235L4.00866 15.9199C3.96746 15.855 3.92525 15.7912 3.88311 15.7274L3.88309 15.7274L3.88309 15.7274C3.76142 15.5433 3.64034 15.3601 3.5458 15.157C3.29609 14.6265 3.18038 14.0129 3.2827 13.4317C3.37538 12.9056 3.72157 12.4854 4.05489 12.0808C4.10923 12.0149 4.16323 11.9493 4.21573 11.8838C4.66153 11.3277 5.12927 10.599 5.2328 9.87708C5.24153 9.81436 5.24933 9.74598 5.25753 9.67402C5.2722 9.54524 5.28819 9.40501 5.31319 9.26528C5.35036 9.02398 5.4256 8.79019 5.53609 8.57271C5.61152 8.43009 5.71082 8.30157 5.82965 8.19278C5.8916 8.13503 5.93248 8.05806 5.94573 7.9742C5.95898 7.89035 5.94384 7.80445 5.90273 7.73026L3.52022 3.4256L6.94234 7.66786C6.98131 7.71701 7.03057 7.75695 7.08663 7.78484C7.14269 7.81273 7.20417 7.82788 7.26671 7.82922C7.32925 7.83056 7.39132 7.81807 7.44852 7.79261C7.50571 7.76716 7.55663 7.72937 7.59765 7.68193C7.641 7.63115 7.66558 7.56689 7.66725 7.50002C7.66891 7.43314 7.64756 7.36774 7.60679 7.31484C7.44767 7.11058 7.28207 6.90352 7.11724 6.69742L7.11693 6.69703C7.05033 6.61376 6.98385 6.53063 6.91798 6.44792L6.05682 5.37726L4.32839 3.23962L2.40918 0.957275L4.55008 3.04812L6.38995 5.09155L7.30776 6.11571C7.39208 6.21109 7.4764 6.30562 7.56072 6.40016C7.78091 6.64702 8.0011 6.89388 8.2213 7.15578L8.27124 7.21696L8.2822 7.31179C8.29704 7.44037 8.28963 7.57057 8.26028 7.69661ZM17.0557 9.13522L17.0593 9.14073L17.0593 9.14022C17.0585 8.68377 16.7771 7.93092 16.2079 7.20681L16.1945 7.18907C16.0191 6.97129 15.828 6.7668 15.6226 6.57727L15.6058 6.56111L15.625 6.57774C15.6005 6.55502 15.5756 6.53252 15.5507 6.51012L15.5032 6.467L15.5386 6.49973L15.5008 6.46653C15.2378 6.23604 14.9502 6.03537 14.6433 5.86818L14.6214 5.85717C13.6573 5.32979 12.4027 5.05815 10.8558 5.36406C10.648 5.11068 10.4242 4.87097 10.1859 4.64641C9.82077 4.29694 9.39101 4.02277 8.9209 3.83944C8.45502 3.66813 7.9561 3.607 7.46289 3.66079C7.93832 3.70379 8.40139 3.83664 8.82772 4.05235C9.23946 4.27394 9.61026 4.56489 9.92397 4.91254C10.2419 5.26742 10.5408 5.63911 10.8192 6.02603L10.8891 6.11741C11.1616 6.47389 11.439 6.83678 11.7846 7.1597C11.9748 7.33953 12.187 7.49433 12.4161 7.62039C12.477 7.65159 12.5385 7.68096 12.5988 7.70666C12.6591 7.73235 12.7158 7.75621 12.7767 7.77824C12.8942 7.82412 13.016 7.86205 13.1378 7.89693C13.625 8.03642 14.1238 8.08659 14.611 8.11351C14.6789 8.11709 14.7466 8.12044 14.814 8.12378C14.988 8.13239 15.1604 8.14093 15.3303 8.15327C15.5631 8.16717 15.794 8.20363 16.0197 8.26217C16.3589 8.35099 16.6575 8.55399 16.8657 8.83727C16.9364 8.93161 17 9.03121 17.0557 9.13522ZM15.0299 11.0846C13.4631 10.446 11.8242 9.77791 12.0682 7.90283C12.5913 8.46392 13.4125 8.58159 14.3056 8.70957C15.1158 8.82566 15.9851 8.95023 16.745 9.42194C18.5379 10.5342 18.2761 12.6951 17.667 13.4904C17.7219 12.182 16.4037 11.6446 15.0299 11.0846ZM8.70682 10.1459C9.12035 10.1061 10.0016 9.89012 9.60757 9.19327C9.52279 9.05151 9.39993 8.93664 9.25309 8.86186C9.10626 8.78708 8.94141 8.75542 8.77747 8.77052C8.6111 8.78845 8.45424 8.85736 8.32819 8.9679C8.20214 9.07844 8.11298 9.22526 8.07283 9.38844C7.95041 9.84423 8.08013 10.207 8.70682 10.1459ZM8.59812 4.63104C8.33868 4.33003 7.93611 4.17219 7.54146 4.11468C7.5267 4.21341 7.51734 4.31287 7.51345 4.41263C7.49579 5.23428 7.78629 6.1367 8.34842 6.7638C8.52823 6.96652 8.74511 7.13267 8.98729 7.25324C9.12737 7.32176 9.49887 7.49185 9.63651 7.3389C9.64699 7.32488 9.65359 7.30832 9.65562 7.29091C9.65765 7.2735 9.65505 7.25585 9.64808 7.23978C9.62528 7.17428 9.58121 7.11485 9.53747 7.05585L9.53747 7.05585C9.50644 7.01401 9.47558 6.97239 9.45259 6.92899C9.42932 6.88521 9.40443 6.84254 9.37956 6.7999L9.37956 6.79989L9.37955 6.79988L9.37955 6.79988L9.37955 6.79987L9.37954 6.79986L9.37954 6.79985C9.33282 6.71975 9.28616 6.63975 9.25039 6.55272C9.15602 6.3249 9.10688 6.08265 9.05789 5.84116C9.04807 5.79277 9.03826 5.74441 9.0281 5.6962C8.95319 5.32361 8.85757 4.93205 8.59812 4.63104ZM14.1416 11.1862C13.7391 12.3144 14.3883 13.2674 15.0336 14.2147C15.7554 15.2744 16.4724 16.3271 15.7074 17.6101C17.1941 16.9934 17.8999 15.1305 17.283 13.6524C16.8942 12.7175 15.9573 12.2106 15.0876 11.7402C14.7501 11.5577 14.4228 11.3806 14.1416 11.1862ZM9.78299 13.8799C9.51358 13.9903 9.25954 14.1353 9.02718 14.3112C9.5555 14.1187 10.1101 14.0088 10.6716 13.9851C10.7734 13.9791 10.8758 13.9743 10.9792 13.9695L10.9793 13.9695C11.1579 13.9613 11.3391 13.9529 11.5242 13.9374C11.8277 13.9167 12.127 13.855 12.414 13.7538C12.7148 13.6481 12.9885 13.4768 13.2155 13.2522C13.4448 13.0203 13.6056 12.7291 13.6802 12.4109C13.7457 12.1104 13.7365 11.7982 13.6533 11.5021C13.5702 11.2059 13.4156 10.935 13.2033 10.7132C13.3057 10.9741 13.3687 11.249 13.3903 11.5287C13.4088 11.7891 13.3736 12.0505 13.2867 12.2965C13.2019 12.5297 13.0634 12.7394 12.8823 12.9083C12.6953 13.0789 12.4788 13.2137 12.2435 13.306C11.9164 13.4384 11.5466 13.4925 11.1613 13.5489C10.9856 13.5746 10.8066 13.6009 10.6271 13.6352C10.3383 13.6883 10.0555 13.7703 9.78299 13.8799ZM14.4825 18.5143L14.4282 18.558L14.4282 18.5581C14.3601 18.6131 14.2909 18.6691 14.2164 18.7193C14.1214 18.7822 14.0218 18.8378 13.9186 18.8857C13.7036 18.9911 13.4671 19.0449 13.2279 19.0429C12.5799 19.0307 12.1219 18.5462 11.854 17.9986C11.7837 17.8551 11.7218 17.7071 11.6599 17.5591C11.5609 17.3223 11.4618 17.0855 11.3284 16.8667C11.0184 16.3583 10.4879 15.949 9.86671 16.0249C9.61335 16.0567 9.37583 16.1711 9.23515 16.392C8.86486 16.9689 9.39654 17.7771 10.0744 17.6627C10.132 17.6539 10.1885 17.6383 10.2425 17.6162C10.2963 17.5932 10.3466 17.5625 10.3917 17.525C10.4864 17.4458 10.5578 17.3422 10.5981 17.2253C10.6427 17.1033 10.6526 16.9714 10.6268 16.8441C10.599 16.7111 10.5208 16.5942 10.4087 16.518C10.539 16.5793 10.6405 16.689 10.6919 16.8239C10.7453 16.9628 10.759 17.1139 10.7315 17.2601C10.7049 17.4125 10.638 17.555 10.5379 17.6725C10.4846 17.7329 10.4231 17.7855 10.3551 17.8285C10.2878 17.871 10.2156 17.9053 10.1402 17.9307C9.98719 17.9832 9.82434 18.0001 9.6639 17.9802C9.43863 17.948 9.22616 17.8554 9.04878 17.7123C9.01043 17.6818 8.97388 17.6496 8.93858 17.6162C8.82611 17.5169 8.72353 17.4067 8.63236 17.2871C8.58742 17.2373 8.54176 17.1881 8.49396 17.1408C8.27683 16.912 8.02065 16.724 7.73755 16.5859C7.54232 16.4998 7.33801 16.4362 7.12852 16.3963C7.02316 16.3742 6.91658 16.3583 6.81 16.3449C6.79841 16.3437 6.77607 16.3398 6.7483 16.335C6.65931 16.3194 6.51457 16.2942 6.48904 16.318C6.81846 16.0133 7.17757 15.7428 7.56093 15.5104C7.95455 15.2757 8.37719 15.0941 8.81796 14.9702C9.27496 14.8409 9.75294 14.8041 10.2242 14.8619C10.4668 14.8911 10.7044 14.9529 10.9307 15.0454C11.1678 15.1405 11.3866 15.2763 11.5775 15.4467C11.7663 15.6255 11.919 15.8393 12.0269 16.0763C12.1244 16.2982 12.1971 16.5303 12.2437 16.7682C12.2687 16.8963 12.2876 17.037 12.3071 17.1827C12.3959 17.8464 12.4984 18.6121 13.259 18.7456C13.3073 18.755 13.3561 18.762 13.4052 18.7664L13.5568 18.7701C13.6611 18.7626 13.7647 18.7477 13.8668 18.7254C14.0784 18.6754 14.2846 18.6047 14.4825 18.5143Z"
      fill="#FC72FF"
    />
  </svg>
);

export const HomeSearchIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.898 7.57097L11.7212 2.49102C10.7237 1.67268 9.27795 1.67185 8.28045 2.49102L2.10379 7.57016C1.83796 7.78932 1.79877 8.18268 2.01794 8.45018C2.2371 8.71768 2.63213 8.75437 2.89796 8.53604L3.54209 8.00605V15.0002C3.54209 17.0152 4.65209 18.1252 6.66709 18.1252H13.3338C15.3488 18.1252 16.4588 17.0152 16.4588 15.0002V8.00605L17.1029 8.53604C17.2195 8.63187 17.3604 8.67845 17.5004 8.67845C17.6804 8.67845 17.8596 8.601 17.9829 8.451C18.2029 8.1835 18.1638 7.79014 17.898 7.57097ZM15.2088 15.0002C15.2088 16.3143 14.6479 16.8752 13.3338 16.8752H6.66709C5.35292 16.8752 4.79209 16.3143 4.79209 15.0002V6.97852L9.07462 3.45771C9.61045 3.01688 10.3913 3.01688 10.9271 3.45771L15.2096 6.97934V15.0002H15.2088ZM6.45875 10.7643C6.45875 12.4493 7.82958 13.8202 9.51458 13.8202C10.1312 13.8202 10.7038 13.6335 11.1838 13.3176L12.4746 14.6085C12.5962 14.7302 12.7563 14.7918 12.9163 14.7918C13.0763 14.7918 13.2363 14.731 13.358 14.6085C13.6021 14.3644 13.6021 13.9685 13.358 13.7243L12.0663 12.4326C12.3813 11.9518 12.568 11.3794 12.568 10.7627C12.568 9.07854 11.1971 7.70688 9.51295 7.70688C7.82962 7.70854 6.45875 9.07933 6.45875 10.7643ZM11.3196 10.7643C11.3196 11.7602 10.5096 12.5702 9.51458 12.5702C8.51875 12.5702 7.70875 11.7602 7.70875 10.7643C7.70875 9.7685 8.51875 8.9585 9.51458 8.9585C10.5096 8.9585 11.3196 9.7685 11.3196 10.7643Z"
      fill="#7780A0"
    />
  </svg>
);

export const AddToBagIcon = (props: SVGProps) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.51389 18.25H5.44444C4.6467 18.25 4 17.653 4 16.9167V7.58333C4 6.84695 4.6467 6.25 5.44444 6.25H14.5556C15.3533 6.25 16 6.84695 16 7.58333V10.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 6.25L7 5.45C7 4.60131 7.31607 3.78737 7.87868 3.18726C8.44129 2.58714 9.20435 2.25 10 2.25C10.7956 2.25 11.5587 2.58714 12.1213 3.18726C12.6839 3.78737 13 4.60131 13 5.45L13 6.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 15.25H17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 12.25L14 18.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const HandHoldingDollarIcon = (props: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 22H3C2.448 22 2 21.552 2 21V17C2 16.448 2.448 16 3 16H5C5.552 16 6 16.448 6 17V21C6 21.552 5.552 22 5 22ZM19.66 16.02C19.43 16.02 19.2 16.08 18.98 16.21L16.71 17.5699C16.5 18.7999 15.42 19.75 14.12 19.75H11C10.59 19.75 10.25 19.41 10.25 19C10.25 18.59 10.59 18.25 11 18.25H14.12C14.74 18.25 15.25 17.75 15.25 17.12C15.25 16.5 14.74 16 14.12 16H9C7.9 16 7 16.9 7 18V20C7 21.1 7.9 22 9 22H14.6C15.51 22 16.39 21.69 17.1 21.12L20.5 18.4C20.82 18.15 21 17.76 21 17.36C21 16.58 20.36 16.02 19.66 16.02ZM18 7.5C18 10.809 15.309 13.5 12 13.5C8.691 13.5 6 10.809 6 7.5C6 4.191 8.691 1.5 12 1.5C15.309 1.5 18 4.191 18 7.5ZM14.25 8.91199C14.25 7.96999 13.626 7.14894 12.731 6.91394L11.646 6.63403C11.535 6.60503 11.438 6.53894 11.363 6.43994C11.29 6.34394 11.25 6.21901 11.25 6.08801C11.25 5.77901 11.48 5.52698 11.764 5.52698H12.237C12.497 5.52698 12.717 5.74102 12.748 6.02502C12.792 6.43702 13.157 6.73194 13.575 6.68994C13.987 6.64594 14.284 6.27504 14.24 5.86304C14.146 4.99204 13.531 4.307 12.737 4.099V3.99902C12.737 3.58502 12.401 3.24902 11.987 3.24902C11.573 3.24902 11.237 3.58502 11.237 3.99902V4.10803C10.384 4.34703 9.75201 5.13904 9.75201 6.08704C9.75201 6.54404 9.90101 6.99004 10.169 7.34204C10.442 7.70604 10.833 7.96898 11.272 8.08398L12.357 8.36401C12.59 8.42501 12.753 8.65003 12.753 8.91003C12.753 9.06303 12.696 9.20696 12.593 9.31396C12.536 9.37296 12.416 9.46997 12.239 9.46997H11.766C11.506 9.46997 11.286 9.25605 11.255 8.97205C11.211 8.56005 10.847 8.26401 10.428 8.30701C10.016 8.35101 9.719 8.72203 9.763 9.13403C9.856 9.99303 10.456 10.671 11.236 10.889V11C11.236 11.414 11.572 11.75 11.986 11.75C12.4 11.75 12.736 11.414 12.736 11V10.9C13.085 10.808 13.408 10.6281 13.67 10.3571C14.044 9.96906 14.25 9.45499 14.25 8.91199Z"
      fill="white"
    />
  </svg>
);
