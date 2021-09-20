import styled from "styled-components/macro";

const Third = () => {
  return (
    <Container>
      <Left>
        <LeftCenter>
          <h1>Restaurants in your pocket</h1>
          <p>
            Order from your favorite restaurants & track on the go, with the
            all-new Swiggy app.
          </p>
          <div className="left__imgs">
            <img src="images/google-play.png" alt="img" />
            <img src="images/app-store.png" alt="img" />
          </div>
        </LeftCenter>
      </Left>
      <Right>
        <img
          src="/images/half-bottom-mobile.png"
          alt="img"
          className="bottom hidden"
        />
        <img src="/images/half-up-mobile.png" alt="img" className="up" />
      </Right>
    </Container>
  );
};

export default Third;

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 85vh;
  }
`;

const Left = styled.div`
  flex: 1;
  width: 80%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  @media (min-width: 768px) {
    flex: 0.4;
    padding-left: 67px;
    padding-top: 0px;
  }
`;

const LeftCenter = styled.div`
  h1 {
    color: var(--dark-blue);
    font-size: 4rem;
    text-align: left;
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    font-size: 1.9rem;
    color: gray;
    margin-bottom: 40px;
    width: 90%;
    font-weight: 500;
  }

  .left__imgs {
    display: flex;
    justify-content: flex-start;
    width: 60%;
  }

  .left__imgs > img {
    width: 150px;
    cursor: pointer;
    margin-right: 20px;
  }

  @media (min-width: 768px) {
    h1 {
      width: 60%;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  /* overflow-y: hidden; */

  img {
    width: 300px;
  }

  img.up {
    justify-content: flex-start;
  }

  img.bottom {
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    .hidden {
      display: none;
    }
  }

  @media (min-width: 768px) {
    flex: 0.6;
    margin-top: 0px;

    img {
      width: 50%;
      height: 550px;
    }
  }
`;
