import { RecoilRoot } from "recoil";
import { Router } from "./router/Router";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  );
}

export default App;
