export default defineNuxtPlugin(() => {
  addRouteMiddleware('random-redirect', () => {
    console.log(
      '這個是由 plugins 插件添加的具名中間件 （有定義 random-redirect的vue 才有），並將會覆蓋任何現有的同名中間件'
    )
  })

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
