export const useLoading = () => useState<boolean>("isLoading", () => false);

export const useSelectedListStore = () =>
  useState<object>("selectedListStore", () => {
    const selectedListStore = ref({
  縣市: "南投縣",
      區域: "南投市",
      鄉鎮: "龍泉里",
    });
    return selectedListStore;
  });
