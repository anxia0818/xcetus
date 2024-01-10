import{_ as te}from"./upgrade-select-input.dbee006b.js";import{_ as de}from"./upgrade-loading.3717a1dc.js";import{_ as ie}from"./apr-tips.c430c379.js";import{_ as ce}from"./coin-tips.69570bf3.js";import{_ as ue}from"./nuxt-link.881b0928.js";import{_ as ve}from"./pools-list-item.24d87a22.js";import{u as he,c as _s}from"./sha256.ff3c4ce9.js";import{u as pe,a as P,k as As,d as _e,l as ge,j as Bs,c as X}from"./pool.17ddd992.js";import{i as ds}from"./import-icon.de3e6c66.js";import{a as fe,y as be,b as ke,r as w,l as y,H as we,q as ls,m as ye,X as Ae,e as me,s as Ce,o as a,f as r,h as o,F as T,E as V,x as h,i as A,A as R,z as bs,v as p,j as B,t as G,u as f,c as ms,w as Cs,p as Se,k as Oe,M as je}from"./entry.f3da9174.js";/* empty css              */import{p as Le}from"./precision.a7a6c57b.js";import{u as Ne}from"./autoPool.4d40b1e4.js";import{u as Ie}from"./farms.10021bac.js";import{_ as $s}from"./icon-selected_3x.09e9a6f0.js";import{_ as Fs}from"./icon_on_2x.5e96733d.js";import{_ as Ts,a as Rs}from"./farms.bd12eea1.js";import{_ as Ps}from"./icon_autopools_2x.f15dfbcc.js";import{_ as Vs,a as Ds}from"./farms.164ba912.js";import{_ as qs}from"./token-warning_2x.58b7a5c0.js";import{_ as Be}from"./img-no-Positions_2x.15c18087.js";import{_ as $e}from"./img-no-Positions_2x.2b98d542.js";import"./coin-select.048e77e9.js";/* empty css              *//* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./icon_rewards_2x.9837d35f.js";import"./decimal.0bdeb344.js";const Fe=fe({setup(){const{t:e,locale:N}=be(),z=ke(),Ss=w(!1),gs=w(!1),Q=w(!1),is=w(!1),cs=w(!1),D=w("VOL"),J=w(["APR","TVL"]),$=w(!1),q=w(e("tab.all")),us=w([e("tab.wormhole"),e("tab.celer")]),E=y(()=>{const l=Array.from(new Set(i.value.poolConfigList.flatMap(d=>!d.category||d.category==""?"All":d.category)));return console.log(l,"newArr"),l.length<=1?[]:l}),s=l=>{i.value.setCurrentPoolTab(l)},_=w([]),C=w(""),Y=w(["pools"]),W=pe(),m=he(),M=w(!0),I=w(!1),S=w(!1),H=w(""),g=y(()=>m),Z=y(()=>m.theme),i=y(()=>W),x=y(()=>m.statsData);we(()=>{var v,u,t;const l=(t=(u=(v=z==null?void 0:z.currentRoute)==null?void 0:v.value)==null?void 0:u.query)==null?void 0:t.language;l&&O(l),H.value=N.value,document.addEventListener("click",()=>{cs.value=!1,$.value=!1});const d=localStorage.getItem(`pools-${es.value}-selectall`),n=localStorage.getItem(`pools-${es.value}-farms`),b=localStorage.getItem(`pools-${es.value}-viewCard`);I.value=d==="true",S.value=n==="true",Q.value=b==="true"}),ls(()=>Q.value,async(l,d)=>{l!==d&&(is.value=!0,await ge(1500),is.value=!1)}),ls(()=>g.value.chainName,(l,d)=>{l&&m.getStatsData(l,g.value.filterCoinsObj)},{immediate:!0});const{setLang:ss}=m,O=l=>{ss(l),N.value=l},k=(l,d)=>l&&d?Le.plus(As(l),As(d)):l||0,K=l=>{let d=0;return l&&l.forEach(n=>{d+=As(String(n))}),String(_e(String(d),2))},Ms=(l=[])=>{const d=l&&l.length>0?l:Object.values(i.value.poolsObj),n=[];console.log(d,"====>newPoolList"),d.filter(u=>!u.is_closed).forEach(u=>{var vs,hs,ps,js,Ls,Ns,Is;const t=g.value.addressLpTokens[u.address],U=i.value.poolsObj[u.address];let ns,F,ts,fs;t&&(ns=t.rewarder_apr[0]?Number(t.rewarder_apr[0].substring(0,t.rewarder_apr[0].length-1)):0,F=t.rewarder_apr[1]?Number(t.rewarder_apr[1].substring(0,t.rewarder_apr[1].length-1)):0,ts=t.rewarder_apr[2]?Number(t.rewarder_apr[2].substring(0,t.rewarder_apr[2].length-1)):0,fs=ns+F+ts);const as=u.needReverse?((hs=i.value.tokensObj[u.coinB.address])==null?void 0:hs.labels)||[]:((vs=i.value.tokensObj[u.coinA.address])==null?void 0:vs.labels)||[],ws=u.needReverse?((ps=i.value.tokensObj[u.coinA.address])==null?void 0:ps.labels)||[]:((js=i.value.tokensObj[u.coinB.address])==null?void 0:js.labels)||[],ys=[...new Set(as.concat(ws))];n.push({...u,...t,liqidity:t?t.tvl_in_usd:"0.00000000001",vol:t?t.vol_in_usd_24h:"0",apr:t&&t.apr_7day?(Ls=t.apr_7day)==null?void 0:Ls.replace("%",""):"--",fee:u.fee?u.fee:U!=null&&U.fee?U.fee:"--",aprNum:t&&t.apr_7day?String(Number(t.apr_7day.substring(0,t.apr_7day.length-1))+fs):"0",rewarder_apr:K(t&&t.rewarder_apr),aprTotal:k(t&&t.apr_7day,t&&K(t.rewarder_apr)),rewarders0:t&&t.rewarder_apr[0],rewarders1:t&&t.rewarder_apr[1],rewarders2:t&&t.rewarder_apr[2],labels:ys,isFarming:u==null?void 0:u.isFarming,fee_24_h:t&&t.fee_24_h,isAuthorized:!!(rs.value[(Ns=u==null?void 0:u.token_a)==null?void 0:Ns.address]&&rs.value[(Is=u==null?void 0:u.token_b)==null?void 0:Is.address])})});let b=[];if(D.value=="APR"?b=n.sort((u,t)=>t.aprNum-u.aprNum):D.value=="VOL"?b=n.sort((u,t)=>t.vol-u.vol):b=n.sort((u,t)=>t.liqidity-u.liqidity),q.value!=e("tab.all")){const u=[];b.forEach(t=>{t.labels.indexOf(q.value)!==-1&&u.push(t)}),_.value=u}else _.value=b;if(C.value){var v=new RegExp("[\\u4E00-\\u9FFF]+","g");if(v.test(C.value)){C.value="";return}const u=_.value.filter(t=>t.symbol.toLowerCase().includes(C.value.toLowerCase()));_.value=u}console.log(_.value,"=====>>>>list.value"),M.value=!1},rs=y(()=>{if(i.value.tokens&&i.value.tokens.length>0){const l={};return i.value.tokens.forEach(d=>{l[d.address]={...d}}),l}return null});ls(()=>[rs.value,i.value.poolConfigList,g.value.chainName,g.value.addressLpTokens,C.value,D.value,q.value],([l,d,n,b])=>{l&&d&&(d==null?void 0:d.length)>0&&d[0]&&n&&(n!=null&&n.toLowerCase().includes(d[0].chain))&&Ms(d)},{immediate:!0,deep:!0}),ye();const Us=Ne(),Os=()=>{M.value=!0,gs.value=!0,m.getStatsData(g.value.chainName,g.value.filterCoinsObj),W.setPoolConfigList(g.value.chainName,g.value.filterCoinsObj),setTimeout(()=>{gs.value=!1},1e3)};ls(()=>g.value.isRefresh,l=>{var n;const d=(n=z==null?void 0:z.currentRoute)==null?void 0:n.value.name.split("-")[1];l&&(!d||d=="list"||d=="")&&Os()});const Hs=l=>{const d=[];d.push(D.value),J.value.forEach((n,b)=>{n!=l&&d.push(n)}),J.value=d,D.value=l},zs=l=>{const d=[];us.value.forEach((n,b)=>{n==l?d[b]=q.value:d[b]=n}),us.value=d,q.value=l};ls(()=>m.lang,l=>{H.value=l});const Js=y(()=>_s[g.value.chainName]);ls(()=>g.value.isSelect,l=>{l!=="pools"&&(cs.value=!1,$.value=!1)});const Ws=y(()=>i.value.poolConfigList.filter(d=>d.address==_s[g.value.chainName].newPositionAddress)[0]),Ks=y(()=>_s[g.value.chainName].hasCreatePool),es=y(()=>g.value.chainName),Xs=()=>{localStorage.setItem(`pools-${es.value}-selectall`,I.value?"":"true"),I.value=!I.value},Gs=()=>{localStorage.setItem(`pools-${es.value}-farms`,S.value?"":"true"),S.value=!S.value},Qs=()=>{localStorage.setItem(`pools-${es.value}-viewCard`,Q.value?"":"true"),Q.value=!Q.value},Ys=l=>{var d;return(l==null?void 0:l.logoURI)||(l==null?void 0:l.logo_url)||((d=i.value.tokensObj[l==null?void 0:l.address])==null?void 0:d.logo_url)||(g.value.theme==="default"?ds("/image/coins/unknown.png"):ds("/image/coins/sui-unknown.png"))},os=w(null),j=y(()=>os.value&&os.value.firstToken?os.value.firstToken:null),L=y(()=>os.value&&os.value.lastToken?os.value.lastToken:null),Zs=y(()=>{if(g.value.chainName!=="Sui")return _.value;if(rs.value&&_.value&&_.value.length>0){const l=[];return _.value.forEach(n=>{var b,v;rs.value[(b=n==null?void 0:n.token_a)==null?void 0:b.address]&&rs.value[(v=n==null?void 0:n.token_b)==null?void 0:v.address]&&(S.value?n.isFarming&&n.rewarderInfo&&n.rewarderInfo.length>0&&(i.value.currentPoolTab=="All"&&(n.category==""||!n.category)||i.value.currentPoolTab!=="All"&&n.category==i.value.currentPoolTab)&&l.push(n):(i.value.currentPoolTab=="All"&&(n.category==""||!n.category)||i.value.currentPoolTab!=="All"&&n.category==i.value.currentPoolTab)&&l.push(n))}),l.filter((n,b)=>j.value&&L.value?n.coinA.address==j.value.address&&n.coinB.address==L.value.address||n.coinA.address==L.value.address&&n.coinB.address==j.value.address:j.value?n.coinA.address.toLowerCase().includes(j.value.address.toLowerCase())||n.coinB.address.toLowerCase().includes(j.value.address.toLowerCase()):L.value?n.coinA.address.toLowerCase().includes(L.value.address.toLowerCase())||n.coinB.address.toLowerCase().includes(L.value.address.toLowerCase()):l)}return[]}),ks=w([]),xs=()=>{let l=[];l=_.value,console.log(l,"##pageList");const d=l.filter((v,u)=>j.value&&L.value?v.coinA.address==j.value.address&&v.coinB.address==L.value.address||v.coinA.address==L.value.address&&v.coinB.address==j.value.address:j.value?v.coinA.address.toLowerCase().includes(j.value.address.toLowerCase())||v.coinB.address.toLowerCase().includes(j.value.address.toLowerCase()):L.value?v.coinA.address.toLowerCase().includes(L.value.address.toLowerCase())||v.coinB.address.toLowerCase().includes(L.value.address.toLowerCase()):l);let n=[],b=[];d.forEach((v,u)=>{const t=[];if(v.rewarderInfo&&v.rewarderInfo.length>0){v.rewarderInfo.forEach((F,ts)=>{var vs,hs,ps;const fs=(vs=i.value.tokensObj[F.coinAddress])==null?void 0:vs.decimals,as=Bs(F.emissionsEveryDay/Math.pow(10,fs),4),ws=Number(as)>0?P(as):as,ys=Bs(Number(as)*i.value.RATES[F.coinAddress]&&i.value.RATES[F.coinAddress].price,4);t.push({...F,logoUrl:(hs=i.value.tokensObj[F.coinAddress])==null?void 0:hs.logoURI,day:ws,dayUSD:ys,symbol:(ps=i.value.tokensObj[F.coinAddress])==null?void 0:ps.symbol,rewarders:v[`rewarders${ts}`]&&v[`rewarders${ts}`].replace("%",""),rewarder_display:v[`rewarder_display${ts+1}`],resultDay:as})});const U=t.filter(F=>F.rewarder_display);let ns=[];(!v.rewarderInfo||v.rewarderInfo.length<1||JSON.stringify(v.rewarderInfo)!==JSON.stringify(U))&&(ns=U),(i.value.currentPoolTab=="All"||i.value.currentPoolTab!=="All"&&v.category==i.value.currentPoolTab)&&(b.push({...v,rewardes:ns}),n.push({...v,rewardes:ns}))}else(i.value.currentPoolTab=="All"||i.value.currentPoolTab!=="All"&&v.category==i.value.currentPoolTab)&&n.push({...v})}),console.log(n,"121arrnewValnewValnewVal"),ks.value=S.value?b:n,M.value||(I.value?S.value?m.setPoolAmount(b.length):m.setPoolAmount(n.length):m.setPoolAmount(Zs.value.length))};Ae(()=>{m.setPoolAmount("--")}),ls(()=>[j.value,L.value,_.value,S.value,I.value,i.value.currentPoolTab],([l,d,n,b,v,u])=>{var t,U;(l&&((t=i==null?void 0:i.value.tokensObj[l.address])!=null&&t.isSelfBuilt)||d&&((U=i==null?void 0:i.value.tokensObj[d.address])!=null&&U.isSelfBuilt))&&!v?ks.value=[]:(l||d||n||b)&&(console.log("newValnewValnewVal",l,d,n,JSON.stringify(n)),xs())},{deep:!0});const se=y(()=>g.value.poolAmount!=="--"?4-Number(g.value.poolAmount)%4:0),ee=l=>i.value.tokensObj&&i.value.tokensObj[l]&&i.value.tokensObj[l].labels,oe=y(()=>Us),ae=y(()=>oe.value.autoPoolObj),le=Ie(),re=y(()=>le),ne=y(()=>re.value.farmsPoolObj);return{tabArr:E,changeTab:s,getLabel:ee,patchNumber:se,getRewarderApr:K,childTokenSelectRef:os,firstToken:j,lastToken:L,showList:ks,isFarms:S,getCoinIcon:Ys,isViewCard:Q,clickDisplayAll:Xs,clickFarms:Gs,clickViewCard:Qs,isSelectAll:I,chainName:es,hasCreatePool:Ks,store:g,lpInfo:Ws,config:Js,t:e,router:z,loading:Ss,clickRefresh:Os,refresh:gs,searchKey:C,current:Y,addCommom:P,list:_,theme:Z,statsData:x,pools:i,select:cs,selectValue:D,selectList:J,label:$,labelValue:q,labelList:us,changeSort:Hs,changeSortLabel:zs,listLoading:M,languageValue:H,isSwitchDisplayMode:is,autoPoolObj:ae,farmsPoolObj:ne}}}),Es=""+globalThis.__publicAssetsURL("sui-image/icon_autopools@2x.gif");const c=e=>(Se("data-v-9d2a560c"),e=e(),Oe(),e),Te={class:"upgrade-pools-list-container"},Re={class:"content-top"},Pe={class:"content-top-left"},Ve={key:0,class:"tag-list"},De=["onClick"],qe={class:"content-top-right"},Ee={class:"radio"},Me={key:0,src:$s},Ue=c(()=>o("span",null,"Display all pools",-1)),He={class:"radio"},ze={key:0,src:$s},Je=c(()=>o("span",null,"Farms",-1)),We={class:"search-select-box"},Ke=c(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Xe=[Ke],Ge={key:0,class:"select-list"},Qe=["onClick"],Ye={class:"search-select-box"},Ze=c(()=>o("img",{src:Fs,alt:""},null,-1)),xe=c(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),so=[xe],eo={key:0,class:"select-list"},oo=["onClick"],ao=c(()=>o("img",{src:Fs,alt:""},null,-1)),lo={key:0,"aria-hidden":"true",class:"cardIcon"},ro=c(()=>o("use",{"xlink:href":"#icon-icon-card"},null,-1)),no=[ro],to={key:1,"aria-hidden":"true",class:"listIcon"},io=c(()=>o("use",{"xlink:href":"#icon-icon-list1"},null,-1)),co=[io],uo={key:0,class:"upgrade-loading"},vo={key:1,class:"table-contianer"},ho={class:"table"},po={class:"table-header"},_o={class:"table-tr"},go=c(()=>o("th",null,"Pools",-1)),fo=c(()=>o("th",null,"Liquidity",-1)),bo=c(()=>o("th",null,"Volume (24H)",-1)),ko=c(()=>o("th",null,null,-1)),wo=c(()=>o("th",null,"Rewards",-1)),yo={class:"hover-box"},Ao={class:"apr-hover-content"},mo=c(()=>o("th",null,"Action",-1)),Co={class:"table-body"},So=["onClick"],Oo={class:"token"},jo={class:"img-box"},Lo={key:0,class:"pool-warning"},No={class:"img-box img-last-box"},Io={key:0,class:"pool-warning"},Bo={class:"name"},$o={class:"top"},Fo={class:"token-name"},To={class:"tokena"},Ro={class:"tokenb"},Po={class:"fee-tier-top"},Vo={key:0,class:"isFarming farming-logo"},Do=c(()=>o("img",{class:"default-img",src:Ts,alt:""},null,-1)),qo=c(()=>o("img",{class:"hover-img",src:Rs,alt:""},null,-1)),Eo=c(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),Mo=[Do,qo,Eo],Uo={key:1,class:"isFarming vault-logo"},Ho=c(()=>o("img",{class:"default-img",src:Ps,alt:""},null,-1)),zo=c(()=>o("img",{class:"hover-img",src:Es,alt:""},null,-1)),Jo=c(()=>o("div",{class:"hover-text"},"Vault available",-1)),Wo=[Ho,zo,Jo],Ko={key:2,class:"isFarming vault-logo"},Xo=c(()=>o("img",{class:"default-img",src:Vs,alt:""},null,-1)),Go=c(()=>o("img",{class:"hover-img",src:Ds,alt:""},null,-1)),Qo=c(()=>o("div",{class:"hover-text"},"Farming rewards available",-1)),Yo=[Xo,Go,Qo],Zo={key:3,class:"pool-warning"},xo=c(()=>o("img",{src:qs,alt:""},null,-1)),sa={class:"hover-text"},ea={class:"label-all"},oa={key:0},aa={key:0},la={class:"skeleton-box"},ra={key:1},na={key:2},ta={class:"skeleton-box"},da={key:3},ia=c(()=>o("td",null,null,-1)),ca={key:4},ua={class:"skeleton-box"},va={key:5},ha={class:"rewards-hover"},pa={alt:""},_a={key:6},ga={key:7},fa={class:"skeleton-box"},ba={class:"hover-box"},ka=c(()=>o("br",null,null,-1)),wa={key:0},ya={key:1,class:"apr-hover-content"},Aa={key:2,class:"item-container"},ma={class:"h5-pool-item"},Ca={class:"token"},Sa={class:"token"},Oa={class:"img-box"},ja={key:0,class:"pool-warning"},La={class:"img-box img-last-box"},Na={key:0,class:"pool-warning"},Ia={class:"name"},Ba={class:"top"},$a={class:"token-name"},Fa={class:"tokena"},Ta={class:"tokenb"},Ra={class:"fee-tier-top"},Pa={key:0,class:"isFarming farming-logo"},Va=c(()=>o("img",{class:"default-img",src:Ts,alt:""},null,-1)),Da=c(()=>o("img",{class:"hover-img",src:Rs,alt:""},null,-1)),qa=c(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),Ea=[Va,Da,qa],Ma={key:1,class:"isFarming vault-logo"},Ua=c(()=>o("img",{class:"default-img",src:Ps,alt:""},null,-1)),Ha=c(()=>o("img",{class:"hover-img",src:Es,alt:""},null,-1)),za=c(()=>o("div",{class:"hover-text"},"Vault available",-1)),Ja=[Ua,Ha,za],Wa={key:2,class:"isFarming vault-logo"},Ka=c(()=>o("img",{class:"default-img",src:Vs,alt:""},null,-1)),Xa=c(()=>o("img",{class:"hover-img",src:Ds,alt:""},null,-1)),Ga=c(()=>o("div",{class:"hover-text"},"Farming rewards available",-1)),Qa=[Ka,Xa,Ga],Ya={key:3,class:"pool-warning"},Za=c(()=>o("img",{src:qs,alt:""},null,-1)),xa={class:"hover-text"},sl={class:"label-all"},el={key:0},ol={class:"bottom"},al={class:"row"},ll=c(()=>o("div",{class:"left"},"APR (24H)",-1)),rl={key:0,class:"right"},nl=c(()=>o("br",null,null,-1)),tl={key:0},dl={class:"apr-hover-content"},il={class:"row"},cl=c(()=>o("div",{class:"left"},"Liquidity",-1)),ul={key:0,class:"right"},vl={key:1,class:"right"},hl={class:"row"},pl=c(()=>o("div",{class:"left"},"Volume (24H)",-1)),_l={key:0,class:"right"},gl={key:1,class:"right"},fl={class:"row"},bl=c(()=>o("div",{class:"left"},"Rewards",-1)),kl={key:0,class:"right"},wl={key:1,class:"right reward-right"},yl={class:"rewards-hover"},Al={alt:""},ml={key:3,class:"no-data"},Cl={key:0,src:Be},Sl={key:1,src:$e};function Ol(e,N,z,Ss,gs,Q){const is=te,cs=de,D=ie,J=ce,$=je,q=ue,us=ve,E=Ce("image");return a(),r("div",Te,[o("div",Re,[o("div",Pe,[e.tabArr.length>1?(a(),r("div",Ve,[(a(!0),r(T,null,V(e.tabArr,(s,_)=>(a(),r("div",{key:_,class:R(["tag-item",s==e.pools.currentPoolTab?`tag-active tab-num-${e.tabArr.length}`:`tab-num-${e.tabArr.length}`]),onClick:C=>e.changeTab(s)},p(s),11,De))),128))])):h("",!0),A(is,{ref:"childTokenSelectRef"},null,512)]),o("div",qe,[o("div",{class:R(["tab-item",e.isSelectAll?"tab-item-active":""]),onClick:N[0]||(N[0]=bs(s=>e.clickDisplayAll(),["stop"]))},[o("div",Ee,[e.isSelectAll&&e.store.theme=="sui"?(a(),r("img",Me)):h("",!0)]),Ue],2),o("div",{class:R(["tab-item",e.isFarms?"tab-item-active tab-item-farms-active":""]),onClick:N[1]||(N[1]=bs(s=>e.clickFarms(),["stop"]))},[o("div",He,[e.isFarms&&e.store.theme=="sui"?(a(),r("img",ze)):h("",!0)]),Je],2),o("div",We,[o("div",{class:"search-select search-label",onClick:N[2]||(N[2]=bs(()=>{e.store.setIsSelect("pools"),e.label=!e.label,e.select=!1},["stop"]))},[o("span",null,p(e.$t("newAdd.label")),1),o("div",null,[B(p(e.labelValue)+" ",1),(a(),r("svg",{"aria-hidden":"true",class:R(e.label?"show-icon icon":"icon")},Xe,2))]),e.label?(a(),r("div",Ge,[(a(!0),r(T,null,V(e.labelList,(s,_)=>(a(),r("div",{key:_,class:"select-menu-item",onClick:C=>e.changeSortLabel(s)},p(s),9,Qe))),128))])):h("",!0)])]),o("div",Ye,[o("div",{class:"search-select",onClick:N[3]||(N[3]=bs(()=>{e.store.setIsSelect("pools"),e.select=!e.select,e.label=!1},["stop"]))},[o("span",null,p(e.$t("newAdd.sortBy")),1),o("div",null,[B(p(e.selectValue)+" ",1),Ze,(a(),r("svg",{"aria-hidden":"true",class:R(e.select?"show-icon icon":"icon")},so,2))]),e.select?(a(),r("div",eo,[(a(!0),r(T,null,V(e.selectList,(s,_)=>(a(),r("div",{key:_,class:"select-menu-item",onClick:C=>e.changeSort(s)},[B(p(s)+" ",1),ao],8,oo))),128))])):h("",!0)])]),o("div",{class:"change-view",onClick:N[4]||(N[4]=s=>e.clickViewCard())},[e.isViewCard&&e.current[0]=="pools"?(a(),r("svg",lo,no)):(a(),r("svg",to,co))])])]),e.listLoading||e.isSwitchDisplayMode?(a(),r("div",uo,[A(cs,{loading:e.listLoading||e.isSwitchDisplayMode,type:e.isViewCard?"poolsCard":"poolsList"},null,8,["loading","type"])])):h("",!0),!e.isSwitchDisplayMode&&!e.isViewCard&&!e.listLoading?(a(),r("div",vo,[o("table",ho,[o("thead",po,[o("tr",_o,[go,fo,bo,ko,wo,o("th",null,[o("span",yo,[B(" APR (24H) "),o("div",Ao,[A(D,{class:"noHover apr-hover-con"})])])]),mo])]),o("tbody",Co,[(a(!0),r(T,null,V(e.showList,s=>{var _,C,Y,W,m,M,I,S,H,g,Z,i,x,ss,O;return a(),r("tr",{key:s.address,class:R(["table-tr",e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none"]),onClick:k=>s.needReverse?e.router.push(`/liquidity/deposit?poolAddress=${s.address}`):e.router.push(`/liquidity/deposit?poolAddress=${s.address}`)},[o("td",null,[o("div",Oo,[o("div",jo,[G(o("img",null,null,512),[[E,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(W=(Y=e.pools)==null?void 0:Y.tokensObj[s.coinB.address])!=null&&W.isSelfBuilt:(C=(_=e.pools)==null?void 0:_.tokensObj[s.coinA.address])!=null&&C.isSelfBuilt)?(a(),r("div",Lo)):h("",!0)]),o("div",No,[G(o("img",null,null,512),[[E,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(M=(m=e.pools)==null?void 0:m.tokensObj[s.coinA.address])!=null&&M.isSelfBuilt:(S=(I=e.pools)==null?void 0:I.tokensObj[s.coinB.address])!=null&&S.isSelfBuilt)?(a(),r("div",Io)):h("",!0)]),o("div",Bo,[o("div",$o,[o("p",Fo,[o("span",To,[B(p(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),A(J,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),B(" - "),o("span",Ro,[B(p(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),A(J,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",Po,p((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),r("div",Vo,Mo)):h("",!0),e.chainName=="Sui"&&e.autoPoolObj[s.address]&&("config"in e?e.config:f(_s)).hasVault?(a(),r("div",Uo,Wo)):h("",!0),e.chainName=="Sui"&&e.farmsPoolObj[s.address]&&e.farmsPoolObj[s.address].status=="Live"?(a(),r("div",Ko,Yo)):h("",!0),(g=(H=e.pools)==null?void 0:H.tokensObj[s.coinA.address])!=null&&g.isSelfBuilt||(i=(Z=e.pools)==null?void 0:Z.tokensObj[s.coinB.address])!=null&&i.isSelfBuilt?(a(),r("div",Zo,[xo,o("div",sa,p(e.t("newAdd.poolWarning")),1)])):h("",!0)]),o("div",ea,[(a(!0),r(T,null,V(s.labels,(k,K)=>(a(),r("div",{key:K,class:R(["label",k])},[k!=="Native"?(a(),r("span",oa,p(k),1)):h("",!0)],2))),128))])])])]),("checkNullObj"in e?e.checkNullObj:f(X))(e.store.statsData)?(a(),r("td",aa,[o("div",la,[A($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),r("td",ra," $"+p(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:f(P))(s.liqidity,2)),1)),("checkNullObj"in e?e.checkNullObj:f(X))(e.store.statsData)?(a(),r("td",na,[o("div",ta,[A($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),r("td",da," $"+p(Number(s.vol)!==0&&Number(s.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:f(P))(s.vol,2)),1)),ia,("checkNullObj"in e?e.checkNullObj:f(X))(e.store.statsData)?(a(),r("td",ca,[o("div",ua,[A($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),r("td",va,[(a(!0),r(T,null,V(s.rewardes,k=>{var K;return a(),r("div",{key:k.address,class:R(["rewarder-token",k.day===0?"reward-none":""])},[G(o("img",null,null,512),[[E,e.getCoinIcon((K=e.pools)==null?void 0:K.tokensObj[k.coinAddress])]]),o("div",ha,[G(o("img",pa,null,512),[[E,k.logoUrl?k.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:f(ds))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:f(ds))("/image/coins/sui-unknown.png")]]),o("span",null,p(`${k.day} ${k.symbol} per day`),1)])],2)}),128))])):(a(),r("td",_a," ")),("checkNullObj"in e?e.checkNullObj:f(X))(e.store.statsData)?(a(),r("td",ga,[o("div",fa,[A($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),r("td",{key:8,class:R(s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(x=s==null?void 0:s.stable_farming)!=null&&x.stable_farming_pool?"":"noCursor")},[o("span",ba,[o("i",null,p(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:f(P))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:f(P))(s.apr,2))+"%",1),ka,(ss=s==null?void 0:s.stable_farming)!=null&&ss.stable_farming_pool?(a(),r("i",wa," +"+p(("addCommom"in e?e.addCommom:f(P))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2))+"% ",1)):h("",!0),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(O=s==null?void 0:s.stable_farming)!=null&&O.stable_farming_pool?(a(),r("div",ya,[A(D,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):h("",!0)])],2)),o("td",null,[s.needReverse?(a(),ms(q,{key:0,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:Cs(()=>[B("+")]),_:2},1032,["to"])):(a(),ms(q,{key:1,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:Cs(()=>[B("+")]),_:2},1032,["to"]))])],10,So)}),128))])])])):h("",!0),!e.isSwitchDisplayMode&&e.isViewCard&&!e.listLoading?(a(),r("div",Aa,[e.showList&&e.showList.length>0?(a(),r(T,{key:0},[(a(!0),r(T,null,V(e.showList,(s,_)=>(a(),ms(us,{key:_,"l-item":s,"is-select-all":e.isSelectAll,"is-farms":e.isFarms},null,8,["l-item","is-select-all","is-farms"]))),128)),(a(!0),r(T,null,V(e.patchNumber,s=>(a(),r("div",{key:s,class:"patch-item"}))),128))],64)):h("",!0)])):h("",!0),o("div",ma,[(a(!0),r(T,null,V(e.showList,s=>{var _,C,Y,W,m,M,I,S,H,g,Z,i,x,ss;return a(),r("div",{key:s.address,class:R([e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none","item"])},[o("div",Ca,[o("div",Sa,[o("div",Oa,[G(o("img",null,null,512),[[E,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(W=(Y=e.pools)==null?void 0:Y.tokensObj[s.coinB.address])!=null&&W.isSelfBuilt:(C=(_=e.pools)==null?void 0:_.tokensObj[s.coinA.address])!=null&&C.isSelfBuilt)?(a(),r("div",ja)):h("",!0)]),o("div",La,[G(o("img",null,null,512),[[E,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(M=(m=e.pools)==null?void 0:m.tokensObj[s.coinA.address])!=null&&M.isSelfBuilt:(S=(I=e.pools)==null?void 0:I.tokensObj[s.coinB.address])!=null&&S.isSelfBuilt)?(a(),r("div",Na)):h("",!0)]),o("div",Ia,[o("div",Ba,[o("p",$a,[o("span",Fa,[B(p(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),A(J,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),B(" - "),o("span",Ta,[B(p(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),A(J,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",Ra,p((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),r("div",Pa,Ea)):h("",!0),e.chainName=="Sui"&&e.autoPoolObj[s.address]&&("config"in e?e.config:f(_s)).hasVault?(a(),r("div",Ma,Ja)):h("",!0),s.isStableFarming?(a(),r("div",Wa,Qa)):h("",!0),(g=(H=e.pools)==null?void 0:H.tokensObj[s.coinA.address])!=null&&g.isSelfBuilt||(i=(Z=e.pools)==null?void 0:Z.tokensObj[s.coinB.address])!=null&&i.isSelfBuilt?(a(),r("div",Ya,[Za,o("div",xa,p(e.t("newAdd.poolWarning")),1)])):h("",!0)]),o("div",sl,[(a(!0),r(T,null,V(s.labels,(O,k)=>(a(),r("div",{key:k,class:R(["label",O])},[O!=="Native"?(a(),r("span",el,p(O),1)):h("",!0)],2))),128))])])])]),o("div",ol,[o("div",al,[ll,("checkNullObj"in e?e.checkNullObj:f(X))(e.store.statsData)?(a(),r("div",rl,[A($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),r("div",{key:1,class:R(["right theme-right",s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(x=s==null?void 0:s.stable_farming)!=null&&x.stable_farming_pool?"":"noCursor"])},[o("div",null,p(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:f(P))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:f(P))(s.apr,2))+"%",1),nl,(ss=s==null?void 0:s.stable_farming)!=null&&ss.stable_farming_pool?(a(),r("div",tl," +"+p(("addCommom"in e?e.addCommom:f(P))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2))+"% ",1)):h("",!0),o("div",dl,[A(D,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])],2))]),o("div",il,[cl,("checkNullObj"in e?e.checkNullObj:f(X))(e.store.statsData)?(a(),r("div",ul,[A($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),r("div",vl," $"+p(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:f(P))(s.liqidity,2)),1))]),o("div",hl,[pl,("checkNullObj"in e?e.checkNullObj:f(X))(e.store.statsData)?(a(),r("div",_l,[A($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),r("div",gl," $"+p(Number(s.vol)!==0&&Number(s.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:f(P))(s.vol,2)),1))]),o("div",fl,[bl,("checkNullObj"in e?e.checkNullObj:f(X))(e.store.statsData)?(a(),r("div",kl,[A($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),r("div",wl,[(a(!0),r(T,null,V(s.rewardes,O=>{var k;return a(),r("div",{key:O.address,class:"rewarder-token"},[G(o("img",null,null,512),[[E,e.getCoinIcon((k=e.pools)==null?void 0:k.tokensObj[O.coinAddress])]]),o("div",yl,[G(o("img",Al,null,512),[[E,O.logoUrl?O.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:f(ds))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:f(ds))("/image/coins/sui-unknown.png")]]),o("span",null,p(`${O.day} ${O.symbol} per day`),1)])])}),128))])):h("",!0)])]),A(q,{to:`/liquidity/deposit?poolAddress=${s.address}`,class:"add-btn"},{default:Cs(()=>[B("+ Add Liquidity")]),_:2},1032,["to"])],2)}),128))]),!e.isSwitchDisplayMode&&e.store.poolAmount!=="--"&&e.store.poolAmount<=0&&!e.listLoading?(a(),r("div",ml,[e.theme=="default"?(a(),r("img",Cl)):(a(),r("img",Sl)),o("span",null,p(e.$t("common.poolsNotFound")),1)])):h("",!0)])}const or=me(Fe,[["render",Ol],["__scopeId","data-v-9d2a560c"]]);export{or as default};
