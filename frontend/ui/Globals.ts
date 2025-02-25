/*!
 * This file is part of the Stooa codebase.
 *
 * (c) 2020 - present Runroom SL
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { createGlobalStyle } from 'styled-components';

import { Button } from '@/ui/Resets';
import Texts from '@/ui/Texts';
import Titles from '@/ui/Titles';
import Overrides from '@/ui/Overrides';
import { media, space } from '@/ui/helpers';
import {
  COLOR_GREEN_100,
  COLOR_GREEN_500,
  COLOR_GREEN_800,
  COLOR_NEUTRO_700,
  COLOR_RED_100,
  COLOR_RED_600,
  COLOR_YELLOW_100,
  COLOR_YELLOW_500,
  FONT_BASE_SIZE,
  FONT_PRIMARY
} from '@/ui/settings';
import { getIconCSS } from '@/ui/Icons';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Geomanist';
    font-style: normal;
    font-weight: 400;
    src: local('Geomanist Regular'), url("/fonts/geomanist-regular.woff2") format("woff2"),url("fonts/geomanist-regular.woff") format("woff");
  }

  @font-face {
    font-display: swap;
    font-family: 'Geomanist';
    font-style: normal;
    font-weight: 500;
    src: local('Geomanist Medium'), url("/fonts/geomanist-medium.woff2") format("woff2"),url("fonts/geomanist-medium.woff") format("woff");
  }

  @font-face {
    font-display: swap;
    font-family: 'Geomanist';
    font-style: normal;
    font-weight: 700;
    src: local('Geomanist Bold'), url("/fonts/geomanist-bold.woff2") format("woff2"),url("fonts/geomanist-bold.woff") format("woff");
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  html {
    font-size: ${FONT_BASE_SIZE}px;
  }

  body {
    font-family: ${FONT_PRIMARY};
    line-height: 1.5;
    min-height: 100vh;
    overflow-x: hidden;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  ul:not([class]),
  ol:not([class]) {
    list-style: none;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    text-decoration-skip-ink: auto;

    &.decorated {
      text-decoration: underline;
    }

    * {
      pointer-events: none;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  dt, dd {
    margin: 0 0 ${space()};
  }

  dt {
    font-weight: 700;
  }

  ${media.min('phone')`
    dl {
      display: grid;
      grid-template-columns: max-content auto;
    }

    dt {
      grid-column-start: 1;
    }

    dd {
      grid-column-start: 2;
      padding: 0 0 0 ${space(2)};
    }
  `}

  ${Button};
  ${Titles};
  ${Texts};
  ${Overrides};

  .prewrap { white-space: pre-wrap; }
  .centered { text-align: center; }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  .hide-mobile {
    ${media.max('tablet')`
      display: none !important;
    `}
  }

  .hide-desktop {
    ${media.min('tablet')`
      display: none !important;
    `}
  }

  .icon {
    ${getIconCSS()};
    color: ${COLOR_NEUTRO_700};
    height: ${space(4)};
    margin: 0 ${space(0.25)};
    width: ${space(4)};
  }

  .icon-small {
    height: ${space(2)};
    width: ${space(2)};
  }

  /*  CUSTOM TOASTS STYLES */
  :root {
    --toastify-toast-width: fit-content !important;

    --toastify-text-color-light: ${COLOR_NEUTRO_700} !important;
    --toastify-color-success: ${COLOR_GREEN_500} !important;
    --toastify-text-color-success: ${COLOR_GREEN_800} !important;
    --toastify-color-warning: ${COLOR_YELLOW_500} !important;
    --toastify-color-error: ${COLOR_RED_600} !important;
  }

  .toastify-custom {

      & .Toastify__toast {
        padding: ${space(0)} ${space(2)};
      }

      & .Toastify__toast-theme--light.Toastify__toast--warning {
        --toastify-color-light: ${COLOR_YELLOW_100};
      }

      & .Toastify__toast-theme--light.Toastify__toast--error {
        --toastify-color-light: ${COLOR_RED_100};
      }

      & .Toastify__toast-theme--light.Toastify__toast--success {
        --toastify-color-light: ${COLOR_GREEN_100};
        --toastify-text-color-light: ${COLOR_GREEN_800};

        & .Toastify__close-button.Toastify__close-button--light {
          color: ${COLOR_GREEN_800};
          opacity: 1;
          }
      }

      &.Toastify__toast-container--bottom-center {
        bottom: ${space(10)}
      }

      & .Toastify__toast-body {
        padding-right: ${space(3)};
      }

      & .Toastify__close-button {
        align-self: center;
      }
    }



`;

export default GlobalStyle;
