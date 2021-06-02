import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlayBtns } from "../styles/MusicStyles";

export const PlayBtn = ({
  faRandom,
  faBackward,
  faPause,
  faForward,
  faRetweet,
}) => {
  return (
    <>
      <PlayBtns>
        <FontAwesomeIcon icon={faRandom} />
      </PlayBtns>
      <PlayBtns>
        <FontAwesomeIcon icon={faBackward} />
      </PlayBtns>
      <PlayBtns>
        <FontAwesomeIcon icon={faPause} />
      </PlayBtns>
      <PlayBtns>
        <FontAwesomeIcon icon={faForward} />
      </PlayBtns>
      <PlayBtns>
        <FontAwesomeIcon icon={faRetweet} />
      </PlayBtns>
    </>
  );
};
