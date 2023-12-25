import{_ as se}from"./nuxt-link.a2eb26ea.js";import{u as ne,a as ae,c as w}from"./sha256.21a938bb.js";import{a as le,y as re,b as ie,r as n,l as u,H as ue,q as L,m as ce,e as pe,Q as T,o as c,f as d,h as f,i as l,w as r,A as z,u as q,v as h,x as m,Y as de,j as I,c as me,Z as fe,p as ve,k as ge}from"./entry.41263a76.js";/* empty css              *//* empty css              */import{u as he,a as _e}from"./pool.7c12ee80.js";import{_ as ke}from"./icon_autopools_2x.33abc653.js";import"./decimal.0bdeb344.js";const ye=le({setup(e,s){const{t:D,locale:N}=re(),t=ie(),B=n(!1),_=n(!1),v=n(!1),k=n("TVL"),V=n(["APR","VOL"]),P=n([]),y=n(["pools"]),i=he(),g=ne(),K=n(!0),F=n(!1),H=n(!1),Q=n(!1),b=n(""),R=u(()=>i),U=u(()=>{const o=Array.from(new Set(R.value.poolConfigList.flatMap(a=>!a.category||a.category==""?"All":a.category)));return console.log(o,"newArr"),o.length<=1?[]:o}),W=o=>{R.value.setCurrentPoolTab(o)},$=u(()=>g),Y=u(()=>g.theme),Z=u(()=>w[$.value.chainName]),G=u(()=>g.statsData);ue(()=>{var C,A,S,p;const o=(C=t==null?void 0:t.currentRoute)==null?void 0:C.value.name.split("-")[1];y.value=!o||o=="list"||o==""?["pools"]:[`${o}`];const a=(p=(S=(A=t==null?void 0:t.currentRoute)==null?void 0:A.value)==null?void 0:S.query)==null?void 0:p.language;a&&M(a),b.value=N.value,document.addEventListener("click",()=>{v.value=!1})}),L(()=>t,o=>{var a,C,A,S;if(o){const p=(a=t==null?void 0:t.currentRoute)==null?void 0:a.value.name.split("-")[1];y.value=!p||p=="list"||p==""?["pools"]:[`${p}`];const j=(S=(A=(C=t==null?void 0:t.currentRoute)==null?void 0:C.value)==null?void 0:A.query)==null?void 0:S.language;j&&M(j),b.value=N.value}},{deep:!0});const{setLang:J}=g,M=o=>{J(o),N.value=o};L(()=>$.value.chainName,(o,a)=>{o&&g.getStatsData(o,$.value.filterCoinsObj)},{immediate:!0});const X=()=>{K.value=!0,_.value=!0,g.setisRefresh(),setTimeout(()=>{_.value=!1},1e3)},x=ae(),ee=u(()=>x),oe=u(()=>R.value.autoPoolNum),O=u(()=>$.value.chainName),te=ce();return L(()=>O.value,o=>{o=="Aptos"&&te.name=="pool-list"&&t.replace("/pools")},{immediate:!0}),{autoPoolNum:oe,tabArr:U,changeTab:W,isViewCard:Q,isDisplayAll:F,isFarms:H,clickRefresh:X,store:$,config:Z,t:D,router:t,loading:B,refresh:_,current:y,addCommom:_e,list:P,theme:Y,statsData:G,pools:R,isOpenSort:v,selectValue:k,selectList:V,listLoading:K,languageValue:b,wallet:ee,chainName:O}}});const E=e=>(ve("data-v-168a7989"),e=e(),ge(),e),$e={class:"upgrade-pools-container"},Ce={class:"upgrade-pools-header"},Ae={class:"header-left"},Se={key:0},we={key:0},Ne=E(()=>f("img",{src:ke,alt:""},null,-1)),Ve={key:0},Re=["href"],qe=E(()=>f("svg",{"aria-hidden":"true",class:"refresh-icon"},[f("use",{"xlink:href":"#icon-icon-refresh2"})],-1)),Pe=[qe];function be(e,s,D,N,t,B){const _=T("mail-outlined"),v=se,k=fe,V=T("appstore-outlined"),P=de,y=T("router-view");return c(),d("div",$e,[f("div",Ce,[f("div",Ae,[l(P,{selectedKeys:e.current,"onUpdate:selectedKeys":s[2]||(s[2]=i=>e.current=i),mode:"horizontal"},{default:r(()=>[l(k,{key:"pools"},{default:r(()=>[l(v,{to:"/pool/list"},{icon:r(()=>[l(_)]),default:r(()=>[I(" "+h(e.$t("menu.pools"))+" ",1),e.store.poolAmount!=="--"?(c(),d("i",Se,h(e.store.poolAmount),1)):m("",!0)]),_:1})]),_:1}),l(k,{key:"position",onClick:s[0]||(s[0]=i=>e.current=["position"])},{default:r(()=>[l(v,{to:"/pool/position"},{icon:r(()=>[l(V)]),default:r(()=>[I(" "+h(e.$t("common.myPosition"))+" ",1),e.store.positionAmount!=="--"&&e.wallet.connected?(c(),d("i",we,h(e.store.positionAmount),1)):m("",!0)]),_:1})]),_:1}),e.chainName=="Sui"&&("config"in e?e.config:q(w)).hasVault?(c(),me(k,{key:"vaults",onClick:s[1]||(s[1]=i=>e.current=["vaults"])},{default:r(()=>[Ne,l(v,{to:"/pool/vaults"},{icon:r(()=>[l(V)]),default:r(()=>[I(" Vaults "),e.autoPoolNum!=="--"&&e.wallet.connected?(c(),d("i",Ve,h(e.autoPoolNum),1)):m("",!0)]),_:1})]),_:1})):m("",!0)]),_:1},8,["selectedKeys"])]),f("div",{class:z(["header-right",e.$route.name=="pool-vaults"?"header-none":""])},[e.store.theme=="default"?(c(),d("a",{key:0,class:"quickly-enter-link quickly-enter",href:`${("config"in e?e.config:q(w)).ammSite}/pools?language=${e.languageValue}&chain=aptos`},h(e.$t("common.ammPools")),9,Re)):m("",!0),e.$route.name!=="pool-vaults"?(c(),d("div",{key:1,class:"quickly-enter",onClick:s[3]||(s[3]=i=>e.router.push(`/liquidity/create?toCoin=${("config"in e?e.config:q(w)).currentChainTokenAddress}`))}," Create Pool ")):m("",!0),e.$route.name!=="pool-vaults"?(c(),d("div",{key:2,class:"quickly-enter",onClick:s[4]||(s[4]=i=>e.router.push(`/liquidity/deposit?action=newposition&toCoin=${("config"in e?e.config:q(w)).currentChainTokenAddress}`))}," + Add Liquidity ")):m("",!0),f("div",{class:z(e.refresh?"refresh fresh-box":"fresh-box"),onClick:s[5]||(s[5]=(...i)=>e.clickRefresh&&e.clickRefresh(...i))},Pe,2)],2)]),l(y)])}const je=pe(ye,[["render",be],["__scopeId","data-v-168a7989"]]);export{je as default};
