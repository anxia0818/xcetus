import{a as I,r as u,l as v,q as m,e as y,o as p,f as g,c as b,a0 as S,w as h,j as O,h as d,A as w,x as P,P as F,p as C,k as L}from"./entry.06329c18.js";/* empty css              */import{u as B}from"./farms.d4cb084b.js";import{c as j}from"./pool.ade63acd.js";const N=I({props:{poolInfo:{type:Object,default:()=>({})},isActive:{type:Boolean,default:!0}},setup(e,o){const l=B(),r=u(!1),a=u(),t=u(!0),c=v(()=>l),i=v(()=>c.value.farmsPoolList.filter(s=>s.status=="Live"));m(()=>e.poolInfo,s=>{s&&!j(s)&&l.getFarmsPoolList()},{immediate:!0});const k=s=>{const n=s.filter(_=>{var f;return _.status=="Live"&&_.clmm_pool_id==((f=e.poolInfo)==null?void 0:f.poolAddress)});n&&n.length>0&&(r.value=!0,a.value=n[0],o.emit("sendFarmsPoolInfo",t.value&&e.isActive?a.value:"")),console.log(n,"##isFarmingPool")};return m(()=>i.value,s=>{s&&s.length>0&&k(s)},{immediate:!0}),m(()=>e.isActive,s=>{console.log(e.isActive,"##props.isActive"),s||o.emit("sendFarmsPoolInfo",t.value&&e.isActive?a.value:"")},{immediate:!0}),{isShowAutoStake:r,changeIsOpen:()=>{t.value=!t.value,o.emit("sendFarmsPoolInfo",t.value&&e.isActive?a.value:"")},isOpen:t}}}),T=""+globalThis.__publicAssetsURL("sui-image/farming_huo.png"),$=""+globalThis.__publicAssetsURL("sui-image/farming-auto-open.png"),R=""+globalThis.__publicAssetsURL("sui-image/farmimg-auto-close.png");const A=e=>(C("data-v-ec647314"),e=e(),L(),e),U={key:0,class:"farms-auto-stake"},V=A(()=>d("img",{class:"farms-icon",src:T,alt:""},null,-1)),q=A(()=>d("div",{class:"desc"},"Automatically stake your position into the farming pool to enjoy more rewards",-1)),z=["disabled"];function E(e,o,l,r,a,t){const c=F;return e.isShowAutoStake?(p(),g("div",U,[V,q,e.isOpen&&e.isActive?(p(),g("img",{key:0,class:"close-auto",src:$,alt:"",onClick:o[0]||(o[0]=(...i)=>e.changeIsOpen&&e.changeIsOpen(...i))})):(p(),b(c,{key:1,"overlay-style":{"min-width":"200px"}},S({default:h(()=>[d("img",{class:w(["close-auto",e.isActive?"":"disabled-auto"]),disabled:!e.isActive,src:R,alt:"",onClick:o[1]||(o[1]=(...i)=>e.changeIsOpen&&e.changeIsOpen(...i))},null,10,z)]),_:2},[e.isActive?void 0:{name:"title",fn:h(()=>[O("Farming rewards only available for active positions.")]),key:"0"}]),1024))])):P("",!0)}const M=y(N,[["render",E],["__scopeId","data-v-ec647314"]]);export{M as _};
