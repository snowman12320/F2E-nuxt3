import { create, NButton, NTooltip, NTag, NSpace } from 'naive-ui' 

export default defineNuxtPlugin((nuxtApp) => { 
  const naive = create({   
    components: [NButton, NTooltip, NTag, NSpace]   
  })  
  nuxtApp.vueApp.use(naive) 
})