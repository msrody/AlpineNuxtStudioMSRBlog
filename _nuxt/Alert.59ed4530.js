import s from"./ContentSlot.bb67a9cb.js";import{d as o,b as a,c as r,e as c,g as l,n as _,l as p}from"./entry.5c9de12b.js";const d={class:"alert-content"},i=o({__name:"Alert",props:{type:{type:String,default:"info",validator(e){return["info","success","warning","danger","primary"].includes(e)}}},setup(e){return(t,u)=>{const n=s;return a(),r("div",{class:_(["alert",[e.type]])},[c("div",d,[l(n,{use:t.$slots.default,unwrap:"p"},null,8,["use"])])],2)}}});const v=p(i,[["__scopeId","data-v-ffb9cc56"]]);export{v as default};
