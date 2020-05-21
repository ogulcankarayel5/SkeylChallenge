import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./shared";
import { MainRouter } from "./routes";
import { GlobalStyle } from "./utils";
import FormState from './context/formContext/FormState'
function App() {
  return (
    <FormState>
      <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <MainRouter />
      </Theme>
    </BrowserRouter>
    </FormState>
  );
}

export default App;
