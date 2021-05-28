// const nums = [1, 2, 3, 4];

// const newNums = nums.map((num) => num * 2);
// console.log("기존배열:" + nums);
// console.log("새로운배열:" + newNums);

const foods = [
  {
    id: 1,
    name: "스포츠서울",
  },
  {
    id: 2,
    name: "치킨",
  },
  {
    id: 3,
    name: "햄버거",
  },
  {
    id: 4,
    name: "햄버거2",
  },
];

// const newFoods = foods.map((food) => food.name + "🥰");

// const pushFoods = foods.push({
//   id: 1,
//   name: "케익",
// });
// console.log(foods);

// const newFoods = foods.map((food) => food);
// newFoods.push({
//   id: 1,
//   name: "케익",
// });

// console.log(foods);
// console.log(newFoods);

const MapFn = () => {
  return (
    <div>
      <h3>맵 함수!</h3>
      {foods.map((food) => (
        <i key={food.id}>{food.name},</i>
      ))}
    </div>
  );
};

export default MapFn;
