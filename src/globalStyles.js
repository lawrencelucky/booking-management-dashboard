import styled, { createGlobalStyle } from 'styled-components';

export const root = {
  primaryFont: `'Lato', sans-serif`,
  secondaryFont: `'Raleway', sans-serif`,
  primaryBgColor: '#F7F8FA',
  secondaryBgColor: '#FFFFFF',
  secondaryDarkBgColor: '#322A7D',
  fadedSecondaryDarkBgColor: 'rgba(50, 42, 125, 0.3)',
  opaqueSecondaryDarkBgColor: 'rgba(50, 42, 125, .95)',
  secondaryFadedDarkBgColor: '#69519E',
  textColor: '#11141A',
  secondaryTextColor: '#354052',
  fadedTextColor: '#7F8FA4',
  secondaryFadedTextColor: '#BBC5D5',
  darkBorderColor: '#E2E7EE',
  lightBorderColor: '#EAEAEA',
  oddColor: '#FFA101',
  opaqueOddColor: 'rgba(255, 161, 1, 0.3)',
  boxShadowColor: '#BBC5D54D',
  dangerColor: '#F35162',
  opaqueDangerColor: 'rgba(243, 81, 98, 0.3)',
};

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: ${root.primaryFont};
  scrollbar-width: none;
}

html {
  font-size: 62.5%;
}

body {
  font-family: ${root.primaryFont};
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  line-height: 1.3;
  font-weight: 400;
  background-color: ${root.primaryBgColor};
  color: ${root.textColor};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: 0;
}

::selection {
  background-color: ${root.textColor};
  color: ${root.primaryBgColor};
}

&::-webkit-scrollbar {
    display: none;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
`;

export default GlobalStyle;
