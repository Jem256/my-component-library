import React, { useState } from 'react';
// import { PrimaryButton, SecondaryButton, TertiaryButton} from './components/Button';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';
import { ThemeProvider } from 'styled-components';
import { SignUpModal, SignInModal } from "./components/Modals";
import { PrimaryButton } from "./components/Buttons"

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{
          margin: "0 16px 24px",
          padding: "8px",
          background: "none",
          cursor: "pointer",
          border: "2px solid #000",
          marginTop: "60px"
        }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{
          margin: "0 16px 24px",
          padding: "8px",
          background: "none",
          cursor: "pointer",
          border: "2px solid #000",
          marginTop: "60px"
        }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <PrimaryButton
        style={{ margin: "0 16px" }}
        onClick={() => setShowModal(true)}
      >
        Show modal
      </PrimaryButton>
      <div 
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        {/* <SignInModal showModal={showModal} setShowModal={setShowModal} /> */}
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;