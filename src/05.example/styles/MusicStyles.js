import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  width: 375px;
  height: 700px;
  background-color: #2a2a2a;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    background-color: white;
    color: black;
    font-size: 12px;
  }
`;

export const CoverImg = styled.div`
  width: 250px;
  height: 270px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  margin: 30px 0 30px 0;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const Desc = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin: 15px 0 20px 0;
`;

export const BarWrap = styled.div`
  width: 100%;
`;

export const GageWrap = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
`;

export const Gage = styled.div`
  width: 10%;
  height: 100%;
  background-color: teal;
`;

export const TimeNum = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 300;
`;

export const Times = styled.div``;

export const PlayWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

export const PlayBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(3) {
    width: 60px;
    height: 60px;
    background-color: teal;
    border-radius: 50%;
    font-size: 20px;
  }
`;
