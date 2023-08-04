import{_ as x}from"./nuxt-link.40889b5a.js";import{u as ee,c as w,a as oe}from"./sha256.743615b9.js";import{a as te,l as se,b as ne,r as n,m as d,y as ae,D as B,e as re,K as P,o as p,f as m,h as u,i as l,w as f,F as ie,s as le,x as b,u as D,v as g,z as F,V as ue,j as M,W as ce,p as de,k as pe}from"./entry.529755dd.js";/* empty css              *//* empty css              */import{u as me,e as fe}from"./pool.73654337.js";import"./decimal.0e8aa3f1.js";const ge=te({setup(e,a){const{t:I,locale:$}=se(),t=ne(),N=n(!1),v=n(!1),h=n(!1),A=n("TVL"),V=n(["APR","VOL"]),q=n([]),_=n(["pools"]),s=me(),i=ee(),L=n(!0),O=n(!1),j=n(!1),E=n(!1),R=n(""),T=d(()=>s),W=d(()=>{const o=Array.from(new Set(T.value.poolConfigList.flatMap(r=>!r.category||r.category==""?"All":r.category)));return console.log(o,"newArr"),o.length<=1?[]:o}),U=o=>{T.value.setCurrentPoolTab(o)},S=d(()=>i),G=d(()=>i.theme),H=d(()=>w[S.value.chainName]),J=d(()=>i.statsData);ae(()=>{var y,k,C,c;const o=(y=t==null?void 0:t.currentRoute)==null?void 0:y.value.name.split("-")[1];_.value=!o||o=="list"||o==""?["pools"]:[`${o}`];const r=(c=(C=(k=t==null?void 0:t.currentRoute)==null?void 0:k.value)==null?void 0:C.query)==null?void 0:c.language;r&&K(r),R.value=$.value,document.addEventListener("click",()=>{h.value=!1})}),B(()=>t,o=>{var r,y,k,C;if(o){const c=(r=t==null?void 0:t.currentRoute)==null?void 0:r.value.name.split("-")[1];_.value=!c||c=="list"||c==""?["pools"]:[`${c}`];const z=(C=(k=(y=t==null?void 0:t.currentRoute)==null?void 0:y.value)==null?void 0:k.query)==null?void 0:C.language;z&&K(z),R.value=$.value}},{deep:!0});const{setLang:Q}=i,K=o=>{Q(o),$.value=o};B(()=>S.value.chainName,(o,r)=>{o&&i.getStatsData(o,S.value.filterCoinsObj)},{immediate:!0});const X=()=>{L.value=!0,v.value=!0,i.setisRefresh(),setTimeout(()=>{v.value=!1},1e3)},Y=oe(),Z=d(()=>Y);return{tabArr:W,changeTab:U,isViewCard:E,isDisplayAll:O,isFarms:j,clickRefresh:X,store:S,config:H,t:I,router:t,loading:N,refresh:v,current:_,addCommom:fe,list:q,theme:G,statsData:J,pools:T,isOpenSort:h,selectValue:A,selectList:V,listLoading:L,languageValue:R,wallet:Z}}});const ve=e=>(de("data-v-4e4933c6"),e=e(),pe(),e),he={class:"upgrade-pools-container"},_e={class:"upgrade-pools-header"},ye={class:"header-left"},ke={key:0},Ce={key:0},$e={class:"header-right"},Ae={key:0,class:"tag-list"},Se=["onClick"],be=["href"],we=ve(()=>u("svg",{"aria-hidden":"true",class:"refresh-icon"},[u("use",{"xlink:href":"#icon-icon-refresh2"})],-1)),Ve=[we];function qe(e,a,I,$,t,N){const v=P("mail-outlined"),h=x,A=ce,V=P("appstore-outlined"),q=ue,_=P("router-view");return p(),m("div",he,[u("div",_e,[u("div",ye,[l(q,{selectedKeys:e.current,"onUpdate:selectedKeys":a[1]||(a[1]=s=>e.current=s),mode:"horizontal"},{default:f(()=>[l(A,{key:"pools"},{default:f(()=>[l(h,{to:"/pool/list"},{icon:f(()=>[l(v)]),default:f(()=>[M(" "+g(e.$t("menu.pools"))+" ",1),e.store.poolAmount!=="--"?(p(),m("i",ke,g(e.store.poolAmount),1)):b("",!0)]),_:1})]),_:1}),l(A,{key:"position",onClick:a[0]||(a[0]=s=>e.current=["position"])},{default:f(()=>[l(h,{to:"/pool/position"},{icon:f(()=>[l(V)]),default:f(()=>[M(" "+g(e.$t("common.myPosition"))+" ",1),e.store.positionAmount!=="--"&&e.wallet.connected?(p(),m("i",Ce,g(e.store.positionAmount),1)):b("",!0)]),_:1})]),_:1})]),_:1},8,["selectedKeys"])]),u("div",$e,[e.tabArr.length>1?(p(),m("div",Ae,[(p(!0),m(ie,null,le(e.tabArr,(s,i)=>(p(),m("div",{key:i,class:F(["tag-item",s==e.pools.currentPoolTab?"tag-active":""]),onClick:L=>e.changeTab(s)},g(s),11,Se))),128))])):b("",!0),e.store.theme=="default"?(p(),m("a",{key:1,class:"quickly-enter-link quickly-enter",href:`${("config"in e?e.config:D(w)).ammSite}/pools?language=${e.languageValue}&chain=aptos`},g(e.$t("common.ammPools")),9,be)):b("",!0),u("div",{class:"quickly-enter",onClick:a[2]||(a[2]=s=>e.router.push(`/liquidity/creat-pool?toCoin=${("config"in e?e.config:D(w)).currentChainTokenAddress}`))}," Create Pool "),u("div",{class:"quickly-enter",onClick:a[3]||(a[3]=s=>e.router.push(`/liquidity/privide-liquidity?toCoin=${("config"in e?e.config:D(w)).currentChainTokenAddress}`))}," + Add Liquidity "),u("div",{class:F(e.refresh?"refresh fresh-box":"fresh-box"),onClick:a[4]||(a[4]=(...s)=>e.clickRefresh&&e.clickRefresh(...s))},Ve,2)])]),l(_)])}const Ke=re(ge,[["render",qe],["__scopeId","data-v-4e4933c6"]]);export{Ke as default};
