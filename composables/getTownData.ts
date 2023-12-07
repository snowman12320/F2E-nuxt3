// npm i -g ts-node
// npm install --save-dev @types/node
// tsconfig,json
// "compilerOptions": {
//   "types": ["node"]
// }

// Declare and set an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];
// console.log(typeof numbers);
// console.log(Array.isArray(numbers)); // true
interface Person {
  name: string;
  age: number;
}
const people: Person[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

interface TownData {
  鄉鎮: string;
}
// run ts-node
// async function getTownData(city: string) {
//   const townArray: TownData[] = await require(`./${city}.json`);
//   const formattedTownArray = townArray.map((item: TownData) => item.鄉鎮);
//   const filteredTownArray = formattedTownArray.filter(
//     (item) => item !== null && item !== "",
//   );
//   console.log(filteredTownArray);
// console.log(Array.isArray(filteredTownArray));
//   return filteredTownArray;
// }
// getTownData("南投縣");

// export
export async function getTownData(city: string) {
  // 要放上面去ignore  /* @vite-ignore */ > 好像也不用...
  const importedModule = await import(`~/assets/json/2020/${city}.json`);
  const townArray: TownData[] = importedModule.default; //! 這樣array才有map等功能
  // console.log(Array.isArray(townArray)); // true

  const formattedTownArray = townArray.map((item: TownData) => item.鄉鎮);
  const filteredTownArray = formattedTownArray.filter(
    (item) => item !== null && item !== "",
  );
  return filteredTownArray;
}

export async function getCityVoteData(city: string) {
  const importedModule = await import(`~/assets/json/2020/${city}.json`);
  const townArray: TownData[] = importedModule.default;

  const formattedTownArray = townArray.filter(
    (item: TownData) => item.全部 == "總　計",
  );

  return formattedTownArray;
}
export async function getAreaVoteData(city: string) {
  const importedModule = await import(`~/assets/json/2020/${city}.json`);
  const townArray: TownData[] = importedModule.default;

  const formattedTownArray = townArray.filter(
    (item: TownData) => item["城市"] !== null && item["城市"] !== "").map((item: TownData) => {
      item["城市"] = item["城市"].trim();
      return item
    });

  return formattedTownArray;
}
export async function getTownVoteData(city: string) {
  const importedModule = await import(`~/assets/json/2020/${city}.json`);
  const townArray: TownData[] = importedModule.default;

  const formattedTownArray = townArray.filter(
    (item: TownData) => item["鄉鎮"] !== null && item["鄉鎮"] !== "").map((item: TownData) => {
      item["鄉鎮"] = item["鄉鎮"].trim();
      return item
    });

  return formattedTownArray;
}

// Promise
// function getTownData(city: string) {
//   return new Promise((resolve, reject) => {
//     const townArray: TownData[] = require(`./${city}.json`);
//     const formattedTownArray = townArray.map((item: TownData) => item.鄉鎮);
//     const filteredTownArray = formattedTownArray.filter(
//       (item) => item !== null && item !== "",
//     );
//     resolve(filteredTownArray);
//     console.log(filteredTownArray);
//   });
// }
