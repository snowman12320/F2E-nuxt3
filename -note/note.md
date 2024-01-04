### //// Schedule ///

-
-

### // tailwind 

- +++ 要 npm run build 才有 tailwind.config
  編譯和開發環境都要重啟 (都要重按pnpm) ，才會更新config

- +++ use bard

  > add tailwinid with all h tag
  > this is my expecting result demo ,

  > h1 {
  > @apply md:text-[56px] text-[40px] leading-[1.2];
  > }

  > "img files"

- `npx tailwindcss init --full`

- plugins
  https://stackoverflow.com/questions/67119992/how-to-access-all-the-direct-children-of-a-div-in-tailwindcss

```
    <p class="child:text-blue-500 space-x-xs">
      <span>投票率</span>
      <span>14,464,571 票</span>
    </p>

    <p class="space-x-xs">
      <span class="nth-[1]:text-blue-500">投票率</span>
      <span>14,464,571 票</span>
    </p>
```

### // config.js

報錯就要刪掉，用官方的示範黨，找錯誤在哪，比如sm:'390px'就有錯
！！！sm 沒放在extend 所以md:xx[xx] 沒有md，導致報錯，要改就要全改，不然就放extend（就算是原本就有的sm，也應該放，就會直接覆蓋）

- +++ main.css
  - 有奇怪空格，就會無法排版
  - 不用編譯和重開開發

## // vscode plugin

- x Tailwind Snippets
- -x Tailwind Twin IntelliSense
- +++ .prettierrc.js
  https://ithelp.ithome.com.tw/articles/10294705
  pnpm 也可，prettier套件也要設定on save 排版

### //////////// nuxt ///////////

- nuxt 不用 import

```
import { useMouse } from "@vueuse/core";
```

- // 第一層要value 第二層不用
  selectedListStore.value["區域"] = areaNames.value[0].district[0];

- 假引入
// import { defineProps } from '#imports';
defineProps<{
  loading: boolean;
}>();

-
// useVue 調整true false植 會有問題
// const [loading, toggleLoading] = useToggle();

- const afterBg = ref() // do not use ref(null)

-
<!-- 清空時，畫面會抖動 -->
<!-- <LazyIndexRightBarView v-if="!isLoading" /> -->

## // state management

- 內建狀態管理工具

```
https://www.youtube.com/watch?v=q1oVtkqv8Ww
```

- 全域使用，用nuxt link 以外跳轉會刷新
  export const useCount = () => useState<number>("count", () => Math.round(Math.random() \* 1000));
- 區域內使用
  const counter = useState('counter', () => Math.round(Math.random() \* 1000))
- 引用全域
  const counter = useCounter();

- 清除暫存，右側資料區，就不會抱錯

### // plugin

- vue Snippets for vue/nuxt projects

### //////////// UI ///////////

- https://www.figma.com/file/Caoi6yMxwbeKMneS5tsCt6/2020%E7%B8%BD%E7%B5%B1%E9%81%B8%E8%88%89%E5%8D%B3%E6%99%82%E9%96%8B%E7%A5%A8%E5%9C%B0%E5%9C%96?node-id=66%3A6594&mode=dev
- 參考
  https://github.com/TimingJL/presidential-election-results-map-by-yuni/blob/main/src/vite-env.d.ts
- 詳細地圖資料
  https://github.com/penspulse326/F2E2023-2/blob/dev/src/constants/city-path.json

# //// other ///

```
                <!-- {{ selectedData[label] ? selectedData[label] : '請選擇' }} -->
                {{ selectedData[label] || "請選擇" }}
```

```
// 這個錯誤訊息表明 TypeScript 認為在 cityList.data 中的 Ref 類型上不存在 _rawValue 屬性。為了解決這個問題，你可以確保 cityList.data 不為空並且是一個物件。
// const cityNames = cityList.data._rawValue?.map((city:any) => city.name);
const cityNames = cityList?.data?._rawValue?.map((city: any) => city.name) || [];
```

```
  // 因為 'string' 類型的運算式無法用於索引類型 '{ 縣市: string; 區域: string; 鄉鎮: string; }'，所以項目隱含 'any' 類型。
  //   在類型 '{ 縣市: string; 區域: string; 鄉鎮: string; }' 中找不到任何具有 'string' 類型之參數的索引簽章。ts(7053)
  // selectedData.value[label] = item;
  selectedData.value[label as keyof typeof selectedData.value] = item;
```

- [Vue warn]: Failed to resolve component: P
  If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.
    <!-- <P class="h7">點擊選擇縣市、區、村里，可查看選舉結果</P> -->
  xxx compilerOptions: {
  isCustomElement: (tag) => tag.startsWith('P')
  }

## // emit

```
// Import the defineEmits function
const emit = defineEmits(['update:loading'])
const clearSelections = () => {
  selectedData.value = {
    縣市: "",
    區域: "",
    鄉鎮: "",
  };
  // Emit an event named 'update:loading' with the value 'true'
  emit("update:loading", true);
  // Simulate some async operation
  setTimeout(() => {
    // Once the operation is done, emit the event with the value 'false'
    emit("update:loading", false);
  }, 3000);
};

// template
@update:loading="handleLoading"
//script
const isLoading = ref(false);
const handleLoading = (state: boolean) => {
  isLoading.value = state;
};

```

### // props

import { defineProps } from 'vue'

const props = defineProps(['data', 'options'])


### //// TSC ///

- 修改 要重新開啟 dev
- sudo npm install -g ts-node

- let timerId: NodeJS.Timeout | null = null;
- 響應式寫法 let timerId = ref< NodeJS.Timeout | null >();

### //// git rebase origin/main > 拆遠端和本地的記錄黨並合併，同個記錄名稱，不能改名 > git rebase --continue > 就將兩個合併的，推上去 ///

### // Object.keys 和 Array.prototype.filter 來過濾出您需要的資料

```
let data = {
  "全部": null,
  "城市": "中寮鄉",
  "鄉鎮": "",
  "蔡英文": "396",
  "韓國瑜": "3,760",
  "宋楚瑜": "4,849",
  "有效票數": "9,005",
  "無效票數": "104",
  "投票數": "9,109"
};

let keysToRemove = ["全部", "城市", "鄉鎮", "有效票數", "無效票數", "投票數"];
let filteredData = {};

Object.keys(data).filter(key => !keysToRemove.includes(key)).forEach(key => {
  filteredData[key] = data[key];
});

console.log(filteredData); // { 全部: null, 城市: "中寮鄉", 鄉鎮: "", 蔡英文: "396", 韓國瑜: "

```

### // AI test

```
window.addEventListener("resize", () => {
  if (window.innerWidth < 640) {
    isToggleArrow.value = false;
  } else {
    isToggleArrow.value = true;
  }
});
why window is not defined?
```

### //// 非同步 坑 ///

v-if="importedAllVote && '投票數/選舉人數' in importedAllVote"

> 確定非同步引入 整包值有 才渲染
> 一定要 XXX in XXXX 才不會有物件取不到直 就是都要客製化到最裡面的其中一個key有值才渲染

### //// SD ///

/\*\*

- 1.  favicon
- 2.  leftbar
- \*/

### //// eslint ///

- https://ithelp.ithome.com.tw/articles/10293758
  需重新開啟vscode
  安裝eslint / prettier套件 ,新增設定檔

//帳號的 setting.json
// 儲存自動修正 ESLint
"editor.codeActionsOnSave": {
"source.fixAll.eslint": "explicit"
},

去啟動的順序
-1. js檔 用prettier-format ( 有單引號，去掉; ) (vue檔也需要) (但tailwindcss排版會沒有)
-2. vue檔 用volar ( 有空格在前() )

- @workspace /fix 1:30 error Delete ␍ prettier/prettier
- 這個錯誤是由於你的程式碼中存在不必要的換行符號，這可能是因為在不同的作業系統間轉移檔案所導致的。在 Windows 系統中，換行通常由兩個字符 (\r\n) 表示，而在 Unix 或 Linux 系統中，則只由一個字符 (\n) 表示。這個錯誤訊息是 Prettier 在嘗試將你的程式碼格式化為 Unix 風格的換行符號時所產生的。
  你可以透過設定你的程式碼編輯器（例如 Visual Studio Code）來自動轉換換行符號，或者使用一些工具（例如 dos2unix）來手動轉換。以下是在 Visual Studio Code 中設定的步驟：
  打開 Visual Studio Code。
  在右下角，你會看到 "CRLF" 或 "LF" 的文字，點擊它。
  在彈出的選單中選擇 "LF"。
  這樣就可以將你的檔案中的換行符號轉換為 Unix 風格的了。如果你的專案中有多個檔案需要轉換，你可能需要使用一些工具來批次處理。
  <!--  -->
  // Problem 1 & 11: 確保您的專案中存在該模組，並且路徑正確
  import { getTownData } from "@/composables/getTownData";

// Problem 2, 4, 5, 15, 16, 18: toggleSelectNames 應該是一個 string，而不是 boolean
const toggleSelectNames = ref<string>("");

// Problem 6 & 14: townNames 應該是一個 string[]，而不是 Promise<string[]>
const townNames = ref<string[]>([]);

// Problem 7, 8, 12, 13: 您應該直接存取 data 屬性，而不是 \_rawValue
const SelectCityData = ref<City[]>([]);
const cityNames = computed(() => SelectCityData.value?.map((city: City) => city.name) || []);

// Problem 9, 10: 確保 useSelectedListStore 回傳的是正確的類型
interface SelectedListStore {
value: {
縣市: string;
區域: string;
鄉鎮: string;
};
}
const selectedListStore: SelectedListStore = useSelectedListStore();

// Problem 17: 您應該使用具體的鍵來索引 selectedListStore.value
function selectItem(label: "縣市" | "區域" | "鄉鎮", item: string) {
selectedListStore.value[label] = item;
}

// Problem 19, 20, 21, 22: 如果這些函數和變數沒有被使用，您可以選擇刪除它們，或者確保它們在其他地方被正確使用
function selectTab(tab: string) {
// your code here
}

function toggleSelect(select: string) {
toggleSelectNames.value = select === toggleSelectNames.value ? "" : select;
inputSelectFocus.value.focus();
inputSelect.value = "";
}

### //// terminal ///

- To create a new file at the specified path in Visual Studio Code, you can follow these steps:
  mkdir -p ./server/api/hello
  touch "./server/api/hello/\[name\].js"

### //// test git ///

remote commit

local test use add not commit ,then pull remote commit ,is it confilc or need rebase?

<!-- test remote -->
<!-- test 2 -->

local

<!-- test remote commit merge to main -->
<!-- test main branch agree remote merge in -->

error: Your local changes to the following files would be overwritten by merge:
-note/note.md
Please commit your changes or stash them before you merge.
Aborting

<!-- test windows conflict in local -->
## test windows conflict in remote



### //// loadash ///
// import { get as _get, trim as _trim, isEqual as _isEqual } from 'lodash';

import _ from 'lodash';

  if (_.every(selectedData.value, _.isEmpty)) {
    alert("already clear");
    return;
  }
  // if (Object.keys(selectedData.value).every((key) => !selectedData.value[key])) {
  //   alert('already clear');
  //   return
  // }


### //// firebase ///
// nuxt 影片文章有說明 https://ithelp.ithome.com.tw/articles/10331492

// 純資料
The first section is the simplest form. It uses the $fetch function to make a request to the /api/firebase endpoint and waits for the response using the await keyword. The response is then stored in the dataTest constant. However, this section of the code is commented out.
// const dataTest = await $fetch('/api/firebase')
// console.log(dataTest)

// 詳細
The second section uses the useAsyncData function, which is a custom hook that fetches data asynchronously. It takes two arguments: a key ('firebase') and a fetcher function (() => $fetch('/api/firebase')). The fetcher function is where you define how to fetch your data. The useAsyncData function returns an object with a data property, which contains the fetched data. This section of the code is also commented out.
// const { data } = await useAsyncData('firebase', () => $fetch('/api/firebase'))
// console.log(data);

// 更詳細
The third section is the most detailed. It uses the useFetch function, which is similar to useAsyncData but provides more information about the fetch operation. It returns an object with several properties: data (the fetched data), pending (a boolean indicating whether the fetch operation is still ongoing), refresh (a function to refresh the data), error (any error that occurred during the fetch operation), and status (the HTTP status code of the response). This section of the code is not commented out, so it will be executed when this file is run.
// const { data, pending, refresh, error, status } =
//   await useFetch('/api/firebase')
// console.log(data)

使用編譯方式
npm run build --preset=firebase

npx firebase-tools deploy  
