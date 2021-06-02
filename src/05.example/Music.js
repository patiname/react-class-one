import {
  faBackward,
  faBars,
  faChevronDown,
  faForward,
  faPause,
  faRandom,
  faRetweet,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { PlayBtn } from "./components/PlayBtns";
import {
  Wrap,
  Container,
  Header,
  Icon,
  CoverImg,
  Title,
  Desc,
  BarWrap,
  GageWrap,
  Gage,
  TimeNum,
  Times,
  PlayWrap,
  PlayBtns,
} from "./styles/MusicStyles";

const Bottom = styled.div``;

const UserInfo = styled.div``;

const AvatarImg = styled.div``;

const UserName = styled.div``;

const RightBtn = styled.div``;

export const Music = () => {
  return (
    <Wrap>
      <Container>
        <Header>
          <Icon>
            <FontAwesomeIcon icon={faChevronDown} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faBars} />
          </Icon>
        </Header>

        <CoverImg bg="https://cdn.smehost.net/sonymusiccokr-45pressprod/wp-content/uploads/2020/05/Album-Cover-KATIE_ECHO.jpg"></CoverImg>

        <Title>Blue bird</Title>
        <Desc>Pick Dreams</Desc>

        <BarWrap>
          <GageWrap>
            <Gage></Gage>
          </GageWrap>
          <TimeNum>
            <Times>00:03</Times>
            <Times>03:40</Times>
          </TimeNum>
        </BarWrap>

        <PlayWrap>
          <PlayBtn
            faRandom={faRandom}
            faBackward={faBackward}
            faPause={faPause}
            faForward={faForward}
            faRetweet={faRetweet}
          />
        </PlayWrap>

        <Bottom>
          <UserInfo>
            <AvatarImg></AvatarImg>
            <UserName></UserName>
          </UserInfo>
          <RightBtn>
            <FontAwesomeIcon icon={faStepForward} />
          </RightBtn>
        </Bottom>
      </Container>
    </Wrap>
  );
};
