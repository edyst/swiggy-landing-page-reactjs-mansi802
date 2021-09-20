import styled from "styled-components/macro";
import { second as datas } from "../data";

const Second = () => {
  return (
    <Container>
      {datas.map((data) => (
        <div className="container__div" key={data.img}>
          <img src={data.img} alt="img" />
          <h4>{data.heading}</h4>
          <p>{data.para}</p>
        </div>
      ))}
    </Container>
  );
};

export default Second;

const Container = styled.div`
  width: 100vw;
  background-color: #2b1e16;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 50px;

  @media (min-width: 768px) {
    flex-direction: row;

    .container__div {
    }
  }

  .container__div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 250px;
    text-align: center;
    font-size: 2rem;
    margin-top: 30px;

    img {
      width: 100px;
      margin-bottom: 40px;
    }

    h4 {
      margin-bottom: 15px;
    }

    p {
      font-weight: 100;
      font-size: 1.5rem;
    }

    @media (min-width: 768px) {
      margin-top: 0px;
    }
  }
`;
