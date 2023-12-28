export const useLoading = () => useState<boolean>('isLoading', () => false)
export const useDark = () => useState<boolean>('isDark', () => false)
// use useVue plugin that useToggle(isDark)
export const useToggleDark = () => useToggle('isDark')


export const useToggleSelectNames = () =>
  useState<boolean>('toggleSelectNames', () => false) // Fix: Change the return type to boolean

export const useSelectedListStore = () =>
  useState<object>('selectedListStore', () => {
    const selectedListStore = ref({
      縣市: '',
      區域: '',
      鄉鎮: ''
    })
    return selectedListStore
  })
