import C from"./Header.c834c057.js";import{_ as b}from"./nuxt-link.7628fdd8.js";import{r as q,g as N,u as B,h as T,i as V,j as H,k as h,o as n,c as s,b as m,f as i,F as d,a,l as g,m as M,w as y,d as k,t as l}from"./entry.242aa71c.js";import{q as v}from"./query.2c5e5877.js";import{f as E}from"./utils.b83e48aa.js";import"./preview.ad8910a9.js";import"./utils.54695135.js";function F(p,t){const o=q({});return N(()=>{const u=T(p),{title:c,titleTemplate:_,...r}=u;o.value={title:c,titleTemplate:_,meta:V(r)}}),B(o,t)}const I=a("h2",null,"Drafts ",-1),L={class:"text-sm font-bold"},S={class:"text-sm"},j="Oleksandr Gituliar",w="TastyCode",x="Blog about C++ programming and quantitative finance",K=H({__name:"index",async setup(p){let t,o;F({author:j,title:w,ogTitle:w,description:x,ogDescription:x});const u=([t,o]=h(()=>v("blog").where({_partial:!0}).sort({_id:1}).find()),t=await t,o(),t),c=([t,o]=h(()=>v("blog").where({_partial:!1}).sort({_id:-1}).find()),t=await t,o(),t),_=!1;return(r,A)=>{const D=C,f=b;return n(),s("article",null,[m(D),i(_)?(n(),s(d,{key:0},[I,a("nav",null,[a("ul",null,[(n(!0),s(d,null,g(i(u),e=>(n(),s("li",{key:e._path},[m(f,{to:e._path},{default:y(()=>[k(l(e.title),1)]),_:2},1032,["to"])]))),128))])])],64)):M("",!0),a("nav",null,[(n(!0),s(d,null,g(i(c),e=>(n(),s("div",{class:"pb-2",key:r.article._path},[a("h3",null,[a("div",L,[a("time",null,l(("formatDate"in r?r.formatDate:i(E))(e.date)),1)]),m(f,{to:e._path},{default:y(()=>[k(l(e.title),1)]),_:2},1032,["to"])]),a("p",S,l(e.description),1)]))),128))])])}}});export{K as default};