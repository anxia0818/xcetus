import{a as I,r as m,l as g,q as _,e as S,o as n,f as d,x as k,c as b,a0 as P,w as y,j as w,P as F,p as O,k as B,h as p}from"./entry.127064e0.js";/* empty css              */import{u as L}from"./farms.1d8a4a66.js";import{c as j}from"./pool.835fa2a4.js";const x=I({props:{poolInfo:{type:Object,default:()=>({})},isActive:{type:Boolean,default:!0}},setup(e,s){const c=L(),l=m(!1),a=m(),o=m(!0),r=g(()=>c),u=g(()=>r.value.farmsPoolList.filter(t=>t.status=="Live"));_(()=>e.poolInfo,t=>{t&&!j(t)&&c.getFarmsPoolList()},{immediate:!0});const A=t=>{const i=t.filter(v=>{var h;return v.status=="Live"&&v.clmm_pool_id==((h=e.poolInfo)==null?void 0:h.poolAddress)});i&&i.length>0&&(l.value=!0,a.value=i[0],s.emit("sendFarmsPoolInfo",o.value&&e.isActive?a.value:"")),console.log(i,"##isFarmingPool")};return _(()=>u.value,t=>{t&&t.length>0&&A(t)},{immediate:!0}),_(()=>e.isActive,t=>{console.log(e.isActive,"##props.isActive"),t||s.emit("sendFarmsPoolInfo",o.value&&e.isActive?a.value:"")},{immediate:!0}),{isShowAutoStake:l,changeIsOpen:()=>{o.value=!o.value,s.emit("sendFarmsPoolInfo",o.value&&e.isActive?a.value:"")},isOpen:o}}}),C=""+globalThis.__publicAssetsURL("sui-image/farming_huo.png"),N=""+globalThis.__publicAssetsURL("sui-image/icon_sel@2x.png");const f=e=>(O("data-v-8e1129ce"),e=e(),B(),e),$={key:0,class:"farms-auto-stake"},T=f(()=>p("img",{class:"farms-icon",src:C,alt:""},null,-1)),V=f(()=>p("div",{class:"desc"},"Automatically stake your position into the farm to enjoy higher yield.",-1)),R={key:0,src:N,alt:""},U=f(()=>p("div",{class:"check-box"},null,-1));function q(e,s,c,l,a,o){const r=F;return e.isShowAutoStake?(n(),d("div",$,[T,V,e.isActive?(n(),d("div",{key:0,class:"check-box-active",onClick:s[0]||(s[0]=(...u)=>e.changeIsOpen&&e.changeIsOpen(...u))},[e.isOpen?(n(),d("img",R)):k("",!0)])):(n(),b(r,{key:1,"overlay-style":{"min-width":"200px"}},P({default:y(()=>[U]),_:2},[e.isActive?void 0:{name:"title",fn:y(()=>[w("Farming rewards only available for active positions.")]),key:"0"}]),1024))])):k("",!0)}const J=S(x,[["render",q],["__scopeId","data-v-8e1129ce"]]);export{J as _};
