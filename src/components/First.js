import styled from "styled-components/macro";
import HeaderBottom from "./HeaderBottom";

const First = ({ setShow }) => {
  const toggle = (text) => {
    setShow(text);
  };

  return (
    <Container>
      <Left>
        <div className="header">
          <img src="/images/logo.png" alt="img" />
          <div className="header__btns">
            <span onClick={() => toggle("login")}>Login</span>
            <button onClick={() => toggle("signUp")}>Sign Up</button>
          </div>
        </div>
        <HeaderBottom />
      </Left>
      <Right>
        <img src="/images/food.jpg" alt="img" />
      </Right>
    </Container>
  );
};

export default First;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  flex: 1;
  width: 90vw;
  margin: 20px auto;
  margin-top: 61px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 120px;
      cursor: pointer;
    }

    .header__btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 35%;

      span {
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;

        :hover {
          color: var(--orange);
        }
      }

      button {
        background-color: black;
        color: white;
        padding: 10px;
        border: none;
        font-weight: bold;
      }
    }
  }

  @media (min-width: 768px) {
    flex: 0.55;

    .header {
      width: 80%;
      margin: auto;
    }

    .header > img {
      width: 200px;
    }

    .header > .header__btns {
      width: 30%;
    }

    .header > .header__btns > button {
      padding: 10px 25px;
    }
  }
`;

const Right = styled.div`
  flex: 1;

  img {
    width: 100vw;
  }

  @media (min-width: 768px) {
    flex: 0.45;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
