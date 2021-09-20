import styled from "styled-components/macro";

const Login = ({ setShow }) => {
  return (
    <>
      <Upper>
        <div className="left">
          <h2>Login</h2>
          <span>
            or{" "}
            <button onClick={() => setShow("signUp")}>create an account</button>
          </span>
          <hr />
        </div>
        <div className="right">
          <img src="/images/login.webp" alt="" />
        </div>
      </Upper>
      <Lower>
        <input placeholder="Phone Number" text="number" />
        <button>Login</button>
      </Lower>
    </>
  );
};

export default Login;

const Upper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    width: 80%;
  }

  .left {
    h2 {
      font-size: 3rem;
      font-weight: 500;
    }

    span {
      font-size: 1.5rem;

      button {
        border: none;
        background-color: white;
        color: var(--orange);
      }
    }

    hr {
      margin-top: 20px;
      height: 2px;
      width: 30px;
      border: 1px solid black;
    }
  }

  .right {
    img {
      width: 70px;

      @media (min-width: 768px) {
        width: 120px;
      }
    }
  }
`;

const Lower = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 80%;
  }

  input {
    width: 100%;
    padding: 18px;
    font-size: 2rem;
    outline: none;
    border: 1px solid gray;
  }

  button {
    margin-top: 20px;
    padding: 12px;
    background-color: var(--orange);
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
  }
`;
