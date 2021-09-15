import { RecoilRoot } from 'recoil';

import '@elastic/eui/dist/eui_theme_light.css';
import '@elastic/eui/dist/eui_theme_dark.css';

import Header from "../CharacterCreation/Header"
import Body from "../CharacterCreation/Body"

export const App = () => {
  return (
    <RecoilRoot>
      <Header />
      <Body />
    </RecoilRoot>
  );
}

export default App;
