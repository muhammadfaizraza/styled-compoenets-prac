import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import {light} from './styles/Themes'


import Navigation from '../src/Components/Navigation'
import Home from '../src/Components/Section/Home'
import About from '../src/Components/Section/About'
import Roadmap from '../src/Components/Section/Roadmap'
import Showcase from '../src/Components/Section/Showcase'
import Team from '../src/Components/Section/Team'
import Faq from '../src/Components/Section/Faq'
import Footer from '../src/Components/Footer'
import ScrollTop from "./Components/ScrollTop";


function App() {
  return (
    <>
    <GlobalStyles/>
   
   <ThemeProvider theme = {light}>
  
   <Navigation/>
   <Home/>
<About/>
<Roadmap/>
<Showcase/>
<Team/>
<Faq/>
<Footer/>
   </ThemeProvider>
   <ScrollTop/>
    </>
  );
}

export default App;
