import styled from "styled-components";

//components
import Header from "./components/Header/Header";
import Techs from "./components/Techs/Techs";
import Projects from "./components/Projects/Projects";

const Division = styled.div`
  display: flex;
`;
function App() {
  return (
    <div style={{background: '#18181b', width:'100%', margin: '0'}}>
      <Header />
      <Division>
        <Techs />
        <Projects />
      </Division>
    </div>
  );
}

export default App;
