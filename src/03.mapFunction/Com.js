import { comList } from "./Api";

const Com = () => {
  return (
    <div>
      <h1>컴퓨터 리스트</h1>
      <ol>
        {comList.map((list) => (
          <li key={list.id}>
            브랜드:{" "}
            <b style={{ color: "red", textDecoration: "underLine" }}>
              {list.brand}
            </b>
            , 모니터: <b>{list.monitor.slice(0, 4) + "..."}</b>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Com;
