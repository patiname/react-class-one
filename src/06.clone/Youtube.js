import styled from "styled-components";
import { Header } from "./components/Header";
import { WebConArr } from "../ConApi";

console.log(WebConArr);

const Wrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 60px;
`;

const SideMenu = styled.div`
  width: 240px;
  height: 100vh;
  padding: 24px;
  background-color: #212121;
`;

const Section = styled.div`
  padding: 30px 80px;
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const Contents = styled.div`
  width: 400px;
`;

const BGImg = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  margin-right: 10px;
`;

const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.userImg});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

const TitleWrap = styled.div``;

const Title = styled.div`
  font-weight: 700;
  margin-bottom: 10px;
`;

const Desc = styled.p``;

export const Youtube = () => {
  return (
    <div>
      <Header />

      <Wrap>
        <SideMenu></SideMenu>
        <Section>
          {WebConArr.map((con) => (
            <Contents key={con.id}>
              <BGImg bg={con.bgImg} />
              <ProfileWrap>
                <ProfileImg userImg={con.bgImg} />
                <TitleWrap>
                  <Title>{con.title}</Title>
                  <Desc>{con.description.slice(0, 30) + "..."}</Desc>
                </TitleWrap>
              </ProfileWrap>
            </Contents>
          ))}
        </Section>
      </Wrap>
    </div>
  );
};
