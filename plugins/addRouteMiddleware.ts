export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'global-test',
    () => {
      // console.log(
      // '這個是由 plugins 插件添加的全域中間件 (都會觸發)，並將在每次路由變更時執行'
      // )
    },
    { global: true }
  )
})
