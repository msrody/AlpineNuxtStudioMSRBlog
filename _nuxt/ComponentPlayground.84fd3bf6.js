import{M as m,I as p,d as c,a9 as i,r as u,N as e,k as l}from"./entry.a1671de6.js";import{u as d}from"./asyncData.0a7238ba.js";import f from"./Ellipsis.00cdda24.js";import _ from"./ComponentPlaygroundData.d6786565.js";import"./TabsHeader.86a12146.js";import"./ComponentPlaygroundProps.04228c13.js";import"./ProseH4.ab6b7fb8.js";import"./ProseCodeInline.4f617dd9.js";import"./Badge.7e7c455d.js";import"./MDCSlot.bbb38ac9.js";import"./slot.44328e06.js";import"./ProseP.fb9e5d89.js";import"./index.812f5195.js";import"./ComponentPlaygroundSlots.vue.1ba0598b.js";import"./ComponentPlaygroundTokens.vue.69727975.js";async function y(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=l(g,[["__scopeId","data-v-51227037"]]);export{V as default};