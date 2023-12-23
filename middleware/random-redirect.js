export default defineNuxtRouteMiddleware(() => {
  if (Math.random() > 0.5) {
    // console.log(`[random-redirect 具名中間件] 重新導向至 /plugin`)
    return navigateTo('/plugin')
  }
  // console.log(`[random-redirect 具名中間件] 沒發生什麼特別的事情～`)
})
