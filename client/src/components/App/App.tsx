import './App.scss';

import '@elastic/eui/dist/eui_theme_light.css';
import '@elastic/eui/dist/eui_theme_dark.css';

import Header from "../Header"
import Body from "../Body"

export const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
