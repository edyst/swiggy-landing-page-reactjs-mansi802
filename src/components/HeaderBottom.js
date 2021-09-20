import styled from "styled-components/macro";
import { cities } from "../data";
import "./css/transition.css";

const HeaderBottom = () => {
  return (
    <Container>
      <div className="words">
        <h1>Hungry ?</h1>
        <h1>Unexpected Guests ?</h1>
        <h1>Cooking gone wrong ?</h1>
        <h1>Game night ?</h1>
        <h1>Movie marathon ?</h1>
        <h1>Late night at office ?</h1>
      </div>
      <p>Order food from favourite restaurants near you.</p>
      <div className="input">
        <input type="text" placeholder="Enter your delivery location " />
        <button className="input__btn">Find Food</button>
      </div>
      <div className="cities">
        <p>POPULAR CITIES IN INDIA</p>
        <div className="spans">
          {cities.map((city) => (
            <span>{city}</span>
          ))}
          <span>& more.</span>
        </div>
      </div>
    </Container>
  );
};

export default HeaderBottom;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding-top: 70px;

  .words {
    overflow-y: hidden;
    height: 70px;
  }

  .words > h1 {
    font-size: 3.2rem;
    color: var(--dark-blue);
  }

  p {
    font-size: 2.5rem;
    color: #686b78;
    font-weight: 450;
  }

  .input {
    margin-top: 30px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      flex: 1;
      border: none;
      outline: none;
      padding: 17px 10px;
      padding-left: 20px;
      color: gray;
      font-size: 1.8rem;
      font-weight: bold;
      border: 1px solid gray;
      caret-color: var(--orange);

      :focus {
        border: 1px solid var(--orange);
      }
    }

    button {
      color: white;
      background-color: var(--orange);
      padding: 21px 10px;
      border: none;
      font-size: 1.4rem;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  .cities {
    margin-top: 25px;
    p {
      font-size: 1.8rem;
      font-weight: 200;
      color: gray;
    }

    .spans {
      display: flex;
      flex-wrap: wrap;
      font-size: 1.8rem;
      margin-top: 10px;

      span {
        margin-right: 15px;
        font-weight: 500;
      }

      span:nth-child(odd) {
        color: gray;
      }

      span:nth-child(even) {
        color: var(--dark-gray);
      }
    }
  }

  @media (min-width: 768px) {
    width: 90%;
    margin-left: 80px;
    height: 60vh;

    .words {
      height: 80px;
    }

    .words > h1 {
      font-size: 4rem;
    }

    .input > button {
      padding: 22px 27px;
    }

    .spans {
      width: 90%;
    }

    .spans > span {
      font-size: 1.65rem;
    }
  }
`;
