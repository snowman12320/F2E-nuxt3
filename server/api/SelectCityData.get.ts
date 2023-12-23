import districts from '~/assets/json/districts.json'

export default defineEventHandler(async () => {
  // console.log('接收到 API 請求 /api/SelectCityData.get')
  return districts
})
