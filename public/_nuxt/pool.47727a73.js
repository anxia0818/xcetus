import{_ as Z}from"./nuxt-link.03e44298.js";import{u as x,c as R,a as ee}from"./sha256.160e359b.js";import{a as oe,x as te,b as se,r as n,l as d,E as ne,H as K,e as ae,z as L,o as S,f as w,h as u,i as a,w as l,u as P,t as y,s as T,A as ie,W as le,j as I,X as re,p as ue,k as ce}from"./entry.9b70370c.js";/* empty css              *//* empty css              */import{u as de,a as pe}from"./pool.e39ccd2c.js";import"./decimal.0e8aa3f1.js";const me=oe({setup(e,s){const{t:N,locale:C}=te(),t=se(),D=n(!1),f=n(!1),p=n(!1),g=n("TVL"),$=n(["APR","VOL"]),V=n([]),v=n(["pools"]),r=de(),m=x(),z=n(!0),M=n(!1),O=n(!1),j=n(!1),b=n(""),q=d(()=>r),W=d(()=>{const o=Array.from(new Set(q.value.poolConfigList.flatMap(i=>!i.category||i.category==""?"All":i.category)));return console.log(o,"newArr"),o.length<=1?[]:o}),F=o=>{q.value.setCurrentPoolTab(o)},A=d(()=>m),H=d(()=>m.theme),U=d(()=>R[A.value.chainName]),X=d(()=>m.statsData);ne(()=>{var h,_,k,c;const o=(h=t==null?void 0:t.currentRoute)==null?void 0:h.value.name.split("-")[1];v.value=!o||o=="list"||o==""?["pools"]:[`${o}`];const i=(c=(k=(_=t==null?void 0:t.currentRoute)==null?void 0:_.value)==null?void 0:k.query)==null?void 0:c.language;i&&B(i),b.value=C.value,document.addEventListener("click",()=>{p.value=!1})}),K(()=>t,o=>{var i,h,_,k;if(o){const c=(i=t==null?void 0:t.currentRoute)==null?void 0:i.value.name.split("-")[1];v.value=!c||c=="list"||c==""?["pools"]:[`${c}`];const E=(k=(_=(h=t==null?void 0:t.currentRoute)==null?void 0:h.value)==null?void 0:_.query)==null?void 0:k.language;E&&B(E),b.value=C.value}},{deep:!0});const{setLang:G}=m,B=o=>{G(o),C.value=o};K(()=>A.value.chainName,(o,i)=>{o&&m.getStatsData(o,A.value.filterCoinsObj)},{immediate:!0});const J=()=>{z.value=!0,f.value=!0,m.setisRefresh(),setTimeout(()=>{f.value=!1},1e3)},Q=ee(),Y=d(()=>Q);return{tabArr:W,changeTab:F,isViewCard:j,isDisplayAll:M,isFarms:O,clickRefresh:J,store:A,config:U,t:N,router:t,loading:D,refresh:f,current:v,addCommom:pe,list:V,theme:H,statsData:X,pools:q,isOpenSort:p,selectValue:g,selectList:$,listLoading:z,languageValue:b,wallet:Y}}});const fe=e=>(ue("data-v-5d676510"),e=e(),ce(),e),ge={class:"upgrade-pools-container"},ve={class:"upgrade-pools-header"},he={class:"header-left"},_e={key:0},ke={key:0},ye={class:"header-right"},Ce=["href"],$e=fe(()=>u("svg",{"aria-hidden":"true",class:"refresh-icon"},[u("use",{"xlink:href":"#icon-icon-refresh2"})],-1)),Ae=[$e];function Se(e,s,N,C,t,D){const f=L("mail-outlined"),p=Z,g=re,$=L("appstore-outlined"),V=le,v=L("router-view");return S(),w("div",ge,[u("div",ve,[u("div",he,[a(V,{selectedKeys:e.current,"onUpdate:selectedKeys":s[2]||(s[2]=r=>e.current=r),mode:"horizontal"},{default:l(()=>[a(g,{key:"pools"},{default:l(()=>[a(p,{to:"/pool/list"},{icon:l(()=>[a(f)]),default:l(()=>[I(" "+y(e.$t("menu.pools"))+" ",1),e.store.poolAmount!=="--"?(S(),w("i",_e,y(e.store.poolAmount),1)):T("",!0)]),_:1})]),_:1}),a(g,{key:"position",onClick:s[0]||(s[0]=r=>e.current=["position"])},{default:l(()=>[a(p,{to:"/pool/position"},{icon:l(()=>[a($)]),default:l(()=>[I(" "+y(e.$t("common.myPosition"))+" ",1),e.store.positionAmount!=="--"&&e.wallet.connected?(S(),w("i",ke,y(e.store.positionAmount),1)):T("",!0)]),_:1})]),_:1}),a(g,{key:"auto",onClick:s[1]||(s[1]=r=>e.current=["auto"])},{default:l(()=>[a(p,{to:"/pool/auto"},{icon:l(()=>[a($)]),default:l(()=>[I(" Auto Pools ")]),_:1})]),_:1})]),_:1},8,["selectedKeys"])]),u("div",ye,[e.store.theme=="default"?(S(),w("a",{key:0,class:"quickly-enter-link quickly-enter",href:`${("config"in e?e.config:P(R)).ammSite}/pools?language=${e.languageValue}&chain=aptos`},y(e.$t("common.ammPools")),9,Ce)):T("",!0),u("div",{class:"quickly-enter",onClick:s[3]||(s[3]=r=>e.router.push(`/liquidity/create?toCoin=${("config"in e?e.config:P(R)).currentChainTokenAddress}`))}," Create Pool "),u("div",{class:"quickly-enter",onClick:s[4]||(s[4]=r=>e.router.push(`/liquidity/deposit?action=newposition&toCoin=${("config"in e?e.config:P(R)).currentChainTokenAddress}`))}," + Add Liquidity "),u("div",{class:ie(e.refresh?"refresh fresh-box":"fresh-box"),onClick:s[5]||(s[5]=(...r)=>e.clickRefresh&&e.clickRefresh(...r))},Ae,2)])]),a(v)])}const Te=ae(me,[["render",Se],["__scopeId","data-v-5d676510"]]);export{Te as default};
