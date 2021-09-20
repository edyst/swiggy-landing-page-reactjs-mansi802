import styled from "styled-components/macro";
import { footer as datas } from "../data";

const Footer = () => {
  return (
    <Container>
      <Upper>
        {datas.map((data) => (
          <div className="upper__div">
            <p>{data.heading}</p>
            {data.sub.map((curr) => (
              <span>{curr}</span>
            ))}
          </div>
        ))}
        <div className="upper__div">
          <img src="/images/app-store.png" alt="img" />
          <img src="/images/google-play.png" alt="img" />
        </div>
      </Upper>
      <Bottom>
        <div className="img__span">
          <img src="/images/black-logo.png" alt="img" />
          <span>© 2021 Swiggy</span>
        </div>
        <div className="bottom__icons">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </Bottom>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: black;
  color: white;
  font-size: 1.5rem;
`;

const Upper = styled.div`
  background-color: black;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  text-align: left;
  padding: 20px;
  max-width: 90vw;
  margin: auto;
  padding-top: 50px;

  @media (min-width: 786px) {
    grid-template-columns: 2fr 2fr 2fr 1fr;
    grid-template-rows: 1fr;
  }

  .upper__div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;

    p {
      font-size: 1.5rem;
      color: gray;
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 20px;
    }

    span {
      font-size: 1.7rem;
      cursor: pointer;
      padding: 5px 2px;

      :hover {
        font-weight: bolder;
      }
    }

    img {
      width: 150px;
      border: 1px solid white;
      border-radius: 10px;
      margin-bottom: 15px;
      cursor: pointer;
      margin-left: 20px;

      @media (min-width: 768px) {
        width: 200px;
        margin-left: 0px;
      }
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 90vw;
  margin: auto;
  border-top: 1px solid gray;
  flex-direction: column;

  .img__span {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
      flex: 0.55;
      margin-bottom: 0px;
    }

    img {
      width: 150px;
    }

    span {
      font-size: 2rem;
    }
  }

  .bottom__icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;

    i {
      font-size: 2rem;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    .bottom__icons {
      flex: 0.2;
    }
  }
`;
