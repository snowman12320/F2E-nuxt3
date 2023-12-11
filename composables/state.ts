export const useLoading = () => useState<boolean>('isLoading', () => false)
export const useToggleSelectNames = () =>
  useState<boolean>('toggleSelectNames', () => '')

export const useSelectedListStore = () =>
  useState<object>('selectedListStore', () => {
    const selectedListStore = ref({
      縣市: '',
      區域: '',
      鄉鎮: ''
    })
    return selectedListStore
  })
