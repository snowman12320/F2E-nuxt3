interface TownData {
  鄉鎮: string
}

export async function getTownData(city: string, area: string) {
  const importedModule = await import(`~/assets/json/2020/${city}.json`)
  const townArray: TownData[] = importedModule.default //! 這樣array才有map等功能

  const formattedTownArray = townArray.map((item: TownData) => item.鄉鎮)
  const filteredTownArray = formattedTownArray.filter(
    (item) => item !== null && item !== ''
  )
  return filteredTownArray
}

export async function getCityVoteData(city: string) {
  const importedModule = await import(`~/assets/json/2020/${city}.json`)
  const townArray: TownData[] = importedModule.default

  const formattedTownArray = townArray.filter(
    (item: TownData) => item.全部 == '總　計'
  )

  return formattedTownArray
}

export async function getAreaVoteData(city: string) {
  const importedModule = await import(`~/assets/json/2020/${city}.json`)
  const townArray: TownData[] = importedModule.default

  const formattedTownArray = townArray
    .filter((item: TownData) => item['城市'] !== null && item['城市'] !== '')
    .map((item: TownData) => {
      item['城市'] = item['城市'].trim()
      return item
    })

  return formattedTownArray
}

export async function getTownVoteData(city: string) {
  const importedModule = await import(`~/assets/json/2020/${city}.json`)
  const townArray: TownData[] = importedModule.default

  const formattedTownArray = townArray
    .filter((item: TownData) => item['鄉鎮'] !== null && item['鄉鎮'] !== '')
    .map((item: TownData) => {
      item['鄉鎮'] = item['鄉鎮'].trim()
      return item
    })

  return formattedTownArray
}

