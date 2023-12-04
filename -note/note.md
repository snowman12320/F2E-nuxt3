### //// Schedule ///

-
-

### ////////////////// tailwind /////////////////

- 要 npm run build 才有 tailwind.config
-
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

### //

```
import _ from 'lodash';

  if (_.every(selectedData.value, _.isEmpty)) {
    alert("already clear");
    return;
  }
  // if (Object.keys(selectedData.value).every((key) => !selectedData.value[key])) {
  //   alert('already clear');
  //   return
  // }
```

# //// TSC ///

- 修改 要重新開啟 dev
