import{_ as se}from"./nuxt-link.170347c8.js";import{u as ne,c as w,a as ae}from"./sha256.71c5a4e6.js";import{a as le,y as re,b as ie,r as n,l as u,J as ue,q as L,m as ce,e as de,z as T,o as c,f as p,h as f,i as l,w as r,C as j,u as q,v as h,x as m,Z as pe,j as I,c as me,$ as fe,p as ge,k as ve}from"./entry.a0b7f242.js";/* empty css              *//* empty css              */import{u as he,a as _e}from"./pool.159ffd74.js";import{_ as ke}from"./icon_autopools_2x.c5d21f00.js";import"./decimal.0e8aa3f1.js";const ye=le({setup(e,s){const{t:D,locale:N}=re(),t=ie(),B=n(!1),_=n(!1),g=n(!1),k=n("TVL"),V=n(["APR","VOL"]),P=n([]),y=n(["pools"]),i=he(),v=ne(),z=n(!0),F=n(!1),J=n(!1),U=n(!1),b=n(""),R=u(()=>i),W=u(()=>{const o=Array.from(new Set(R.value.poolConfigList.flatMap(a=>!a.category||a.category==""?"All":a.category)));return console.log(o,"newArr"),o.length<=1?[]:o}),Z=o=>{R.value.setCurrentPoolTab(o)},$=u(()=>v),G=u(()=>v.theme),H=u(()=>w[$.value.chainName]),Q=u(()=>v.statsData);ue(()=>{var C,A,S,d;const o=(C=t==null?void 0:t.currentRoute)==null?void 0:C.value.name.split("-")[1];y.value=!o||o=="list"||o==""?["pools"]:[`${o}`];const a=(d=(S=(A=t==null?void 0:t.currentRoute)==null?void 0:A.value)==null?void 0:S.query)==null?void 0:d.language;a&&K(a),b.value=N.value,document.addEventListener("click",()=>{g.value=!1})}),L(()=>t,o=>{var a,C,A,S;if(o){const d=(a=t==null?void 0:t.currentRoute)==null?void 0:a.value.name.split("-")[1];y.value=!d||d=="list"||d==""?["pools"]:[`${d}`];const O=(S=(A=(C=t==null?void 0:t.currentRoute)==null?void 0:C.value)==null?void 0:A.query)==null?void 0:S.language;O&&K(O),b.value=N.value}},{deep:!0});const{setLang:X}=v,K=o=>{X(o),N.value=o};L(()=>$.value.chainName,(o,a)=>{o&&v.getStatsData(o,$.value.filterCoinsObj)},{immediate:!0});const Y=()=>{z.value=!0,_.value=!0,v.setisRefresh(),setTimeout(()=>{_.value=!1},1e3)},x=ae(),ee=u(()=>x),oe=u(()=>R.value.autoPoolNum),M=u(()=>$.value.chainName),te=ce();return L(()=>M.value,o=>{o=="Aptos"&&te.name=="pool-list"&&t.replace("/pools")},{immediate:!0}),{autoPoolNum:oe,tabArr:W,changeTab:Z,isViewCard:U,isDisplayAll:F,isFarms:J,clickRefresh:Y,store:$,config:H,t:D,router:t,loading:B,refresh:_,current:y,addCommom:_e,list:P,theme:G,statsData:Q,pools:R,isOpenSort:g,selectValue:k,selectList:V,listLoading:z,languageValue:b,wallet:ee,chainName:M}}});const E=e=>(ge("data-v-cc33fdcf"),e=e(),ve(),e),$e={class:"upgrade-pools-container"},Ce={class:"upgrade-pools-header"},Ae={class:"header-left"},Se={key:0},we={key:0},Ne=E(()=>f("img",{src:ke,alt:""},null,-1)),Ve={key:0},Re=["href"],qe=E(()=>f("svg",{"aria-hidden":"true",class:"refresh-icon"},[f("use",{"xlink:href":"#icon-icon-refresh2"})],-1)),Pe=[qe];function be(e,s,D,N,t,B){const _=T("mail-outlined"),g=se,k=fe,V=T("appstore-outlined"),P=pe,y=T("router-view");return c(),p("div",$e,[f("div",Ce,[f("div",Ae,[l(P,{selectedKeys:e.current,"onUpdate:selectedKeys":s[2]||(s[2]=i=>e.current=i),mode:"horizontal"},{default:r(()=>[l(k,{key:"pools"},{default:r(()=>[l(g,{to:"/pool/list"},{icon:r(()=>[l(_)]),default:r(()=>[I(" "+h(e.$t("menu.pools"))+" ",1),e.store.poolAmount!=="--"?(c(),p("i",Se,h(e.store.poolAmount),1)):m("",!0)]),_:1})]),_:1}),l(k,{key:"position",onClick:s[0]||(s[0]=i=>e.current=["position"])},{default:r(()=>[l(g,{to:"/pool/position"},{icon:r(()=>[l(V)]),default:r(()=>[I(" "+h(e.$t("common.myPosition"))+" ",1),e.store.positionAmount!=="--"&&e.wallet.connected?(c(),p("i",we,h(e.store.positionAmount),1)):m("",!0)]),_:1})]),_:1}),e.chainName=="Sui"&&("config"in e?e.config:q(w)).hasVault?(c(),me(k,{key:"auto",onClick:s[1]||(s[1]=i=>e.current=["auto"])},{default:r(()=>[Ne,l(g,{to:"/pool/auto"},{icon:r(()=>[l(V)]),default:r(()=>[I(" Vaults "),e.autoPoolNum!=="--"&&e.wallet.connected?(c(),p("i",Ve,h(e.autoPoolNum),1)):m("",!0)]),_:1})]),_:1})):m("",!0)]),_:1},8,["selectedKeys"])]),f("div",{class:j(["header-right",e.$route.name=="pool-auto"?"header-none":""])},[e.store.theme=="default"?(c(),p("a",{key:0,class:"quickly-enter-link quickly-enter",href:`${("config"in e?e.config:q(w)).ammSite}/pools?language=${e.languageValue}&chain=aptos`},h(e.$t("common.ammPools")),9,Re)):m("",!0),e.$route.name!=="pool-auto"?(c(),p("div",{key:1,class:"quickly-enter",onClick:s[3]||(s[3]=i=>e.router.push(`/liquidity/create?toCoin=${("config"in e?e.config:q(w)).currentChainTokenAddress}`))}," Create Pool ")):m("",!0),e.$route.name!=="pool-auto"?(c(),p("div",{key:2,class:"quickly-enter",onClick:s[4]||(s[4]=i=>e.router.push(`/liquidity/deposit?action=newposition&toCoin=${("config"in e?e.config:q(w)).currentChainTokenAddress}`))}," + Add Liquidity ")):m("",!0),f("div",{class:j(e.refresh?"refresh fresh-box":"fresh-box"),onClick:s[5]||(s[5]=(...i)=>e.clickRefresh&&e.clickRefresh(...i))},Pe,2)],2)]),l(y)])}const Oe=de(ye,[["render",be],["__scopeId","data-v-cc33fdcf"]]);export{Oe as default};
