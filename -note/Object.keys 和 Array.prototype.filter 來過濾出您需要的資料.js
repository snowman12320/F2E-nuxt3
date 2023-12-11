// Object.keys 和 Array.prototype.filter 來過濾出您需要的資料
let data = {
  全部: null,
  城市: "中寮鄉",
  鄉鎮: "",
  蔡英文: "396",
  韓國瑜: "3,760",
  宋楚瑜: "4,849",
  有效票數: "9,005",
  無效票數: "104",
  投票數: "9,109",
};

let keysToRemove = ["全部", "城市", "鄉鎮", "有效票數", "無效票數", "投票數"];
let filteredData = {};

Object.keys(data)
  .filter((key) => !keysToRemove.includes(key))
  .forEach((key) => {
    filteredData[key] = data[key];
  });

console.log(filteredData);
