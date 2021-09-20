import First from "./components/First";
import Footer from "./components/Footer";
import Second from "./components/Second";
import Third from "./components/Third";
import styled from "styled-components/macro";
import { useState } from "react";
import Login from "./components/Login";
import ClearIcon from "@material-ui/icons/Clear";
import SignUp from "./components/SignUp";

//in the end do yarn build , change its name to dist
function App() {
  const [show, setShow] = useState("");

  return (
    <Container>
      {show !== "" && (
        <div className="second__div">
          <div className="second__left" onClick={() => setShow("")}></div>
          <div className="second__right">
            <ClearIcon className="icon" onClick={() => setShow("")} />
            {show === "login" && <Login setShow={setShow} />}
            {show === "signUp" && <SignUp setShow={setShow} />}
          </div>
        </div>
      )}
      <First setShow={setShow} />
      <Second />
      <Third />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;

  .second__div {
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;

    .second__left {
      flex: 0.15;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      background-color: #696c79;
    }

    .second__right {
      flex: 0.85;
      background-color: white;
      z-index: 100;
      width: 100%;
      height: 100%;
      padding: 20px 15px;

      .icon {
        font-size: 3rem;
        margin-bottom: 30px;
        font-weight: 500;
        color: gray;
      }
    }

    @media (min-width: 768px) {
      .second__left {
        flex: 0.65;
      }

      .second__right {
        flex: 0.35;
        padding: 20px 30px;
      }
    }
  }
`;
