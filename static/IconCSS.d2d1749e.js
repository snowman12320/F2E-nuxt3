import{d as m,ah as _,ad as f,p as r,o as d,c as I,Q as v}from"./entry.c44ea944.js";import{r as x}from"./index.df58e121.js";import{_ as S}from"./_plugin-vue_export-helper.c27b6911.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){_(e=>({b433ccec:p.value}));const t=f(),o=u,l=r(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[o.name]?t.nuxtIcon.aliases[o.name]:o.name}),a=r(()=>x(l.value)),p=r(()=>{var s,c;const e=(c=(s=t.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:c.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${a.value.prefix}/${a.value.name}.svg')`}),i=r(()=>{var n,s,c;if(!o.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=t.nuxtIcon)!=null&&s.size))return;const e=o.size||((c=t.nuxtIcon)==null?void 0:c.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(d(),I("span",{style:v({width:i.value,height:i.value})},null,4))}});const U=S(y,[["__scopeId","data-v-0377d788"]]);export{U as default};
