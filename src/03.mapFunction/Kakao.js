import { kakaoList } from "./Api";

console.log(kakaoList);

const Kakao = () => {
  return (
    <div>
      <h2>카카오</h2>
      <div style={{ display: "flex" }}>
        {kakaoList.map((con) => (
          <div style={{ width: 400, marginRight: 30 }}>
            <div style={{ backgroundImage: `url(${con.bg})` }}></div>
            <h4 style={{ fontSize: 30 }}>{con.title}</h4>
            <p>{con.description.slice(0, 50) + "..."}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kakao;
