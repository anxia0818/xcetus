import{_ as Qs}from"./upgrade-select-input.346a99c3.js";import{_ as Xs}from"./upgrade-loading.91d53c2a.js";import{_ as Ys}from"./apr-tips.0f2194b7.js";import{_ as Zs,a as xs}from"./pools-list-item.7268b106.js";import{_ as se}from"./nuxt-link.e8a9bfa8.js";import{u as ee,e as M,h as oe,t as ys,d as ae,b as Is,c as K}from"./pool.9f7ebf91.js";import{i as rs}from"./import-icon.de3e6c66.js";import{a as le,l as re,b as ne,r as w,m as L,y as te,D as es,U as de,e as ie,q as ce,o as l,f as r,h as o,F as R,s as P,x as b,i as A,z as F,L as gs,v as p,j as B,t as G,u as k,c as vs,w as _s,p as ue,k as ve,S as he}from"./entry.95a6c2a7.js";/* empty css              */import{u as pe,c as As}from"./sha256.bf2ff97c.js";import{p as ge}from"./precision.a7a6c57b.js";import{_ as js}from"./icon-selected_3x.09e9a6f0.js";import{_ as Ns}from"./icon_on_2x.5e96733d.js";import{a as Ts}from"./coin-select.ce4db286.js";import{_ as _e,a as fe}from"./img-no-Positions_2x.f7e09fa9.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";/* empty css              *//* empty css              */const be=le({setup(){const{t:e,locale:I}=re(),H=ne(),Cs=w(!1),hs=w(!1),Q=w(!1),ns=w(!1),ts=w(!1),V=w("VOL"),J=w(["APR","TVL"]),N=w(!1),m=w(e("tab.all")),ds=w([e("tab.wormhole"),e("tab.celer")]),E=L(()=>{const a=Array.from(new Set(i.value.poolConfigList.flatMap(d=>!d.category||d.category==""?"All":d.category)));return console.log(a,"newArr"),a.length<=1?[]:a}),s=a=>{i.value.setCurrentPoolTab(a)},v=w([]),C=w(""),X=w(["pools"]),W=ee(),y=pe(),q=w(!0),j=w(!1),S=w(!1),z=w(""),h=L(()=>y),Y=L(()=>y.theme),i=L(()=>W),g=L(()=>y.statsData);te(()=>{var u,c,t;const a=(t=(c=(u=H==null?void 0:H.currentRoute)==null?void 0:u.value)==null?void 0:c.query)==null?void 0:t.language;a&&Fs(a),z.value=I.value,document.addEventListener("click",()=>{ts.value=!1,N.value=!1});const d=localStorage.getItem(`pools-${Z.value}-selectall`),n=localStorage.getItem(`pools-${Z.value}-farms`),f=localStorage.getItem(`pools-${Z.value}-viewCard`);j.value=d==="true",S.value=n==="true",Q.value=f==="true"}),es(()=>Q.value,async(a,d)=>{a!==d&&(ns.value=!0,await oe(1500),ns.value=!1)}),es(()=>h.value.chainName,(a,d)=>{a&&y.getStatsData(a,h.value.filterCoinsObj)},{immediate:!0});const{setLang:D}=y,Fs=a=>{D(a),I.value=a},ms=(a,d)=>a&&d?ge.plus(ys(a),ys(d)):a||0,fs=a=>{let d=0;return a&&a.forEach(n=>{d+=ys(String(n))}),String(ae(String(d),2))},Ds=(a=[])=>{const d=a&&a.length>0?a:Object.values(i.value.poolsObj),n=[];console.log(d,"====>newPoolList"),d.filter(c=>!c.is_closed).forEach(c=>{var is,cs,us,$s,Os,Ls,Bs;const t=h.value.addressLpTokens[c.address],U=i.value.poolsObj[c.address];let as,T,ls,ps;t&&(as=t.rewarder_apr[0]?Number(t.rewarder_apr[0].substring(0,t.rewarder_apr[0].length-1)):0,T=t.rewarder_apr[1]?Number(t.rewarder_apr[1].substring(0,t.rewarder_apr[1].length-1)):0,ls=t.rewarder_apr[2]?Number(t.rewarder_apr[2].substring(0,t.rewarder_apr[2].length-1)):0,ps=as+T+ls);const ss=c.needReverse?((cs=i.value.tokensObj[c.coinB.address])==null?void 0:cs.labels)||[]:((is=i.value.tokensObj[c.coinA.address])==null?void 0:is.labels)||[],ks=c.needReverse?((us=i.value.tokensObj[c.coinA.address])==null?void 0:us.labels)||[]:(($s=i.value.tokensObj[c.coinB.address])==null?void 0:$s.labels)||[],ws=[...new Set(ss.concat(ks))];n.push({...c,liqidity:t?t.tvl_in_usd:"0.00000000001",vol:t?t.vol_in_usd_24h:"0",apr:t&&t.apr_7day?(Os=t.apr_7day)==null?void 0:Os.replace("%",""):"--",fee:c.fee?c.fee:U!=null&&U.fee?U.fee:"--",aprNum:t&&t.apr_7day?String(Number(t.apr_7day.substring(0,t.apr_7day.length-1))+ps):"0",rewarder_apr:fs(t&&t.rewarder_apr),aprTotal:ms(t&&t.apr_7day,t&&fs(t.rewarder_apr)),rewarders0:t&&t.rewarder_apr[0],rewarders1:t&&t.rewarder_apr[1],rewarders2:t&&t.rewarder_apr[2],labels:ws,isFarming:c==null?void 0:c.isFarming,fee_24_h:t&&t.fee_24_h,isAuthorized:!!(os.value[(Ls=c==null?void 0:c.token_a)==null?void 0:Ls.address]&&os.value[(Bs=c==null?void 0:c.token_b)==null?void 0:Bs.address])})});let f=[];if(V.value=="APR"?f=n.sort((c,t)=>t.aprNum-c.aprNum):V.value=="VOL"?f=n.sort((c,t)=>t.vol-c.vol):f=n.sort((c,t)=>t.liqidity-c.liqidity),m.value!=e("tab.all")){const c=[];f.forEach(t=>{t.labels.indexOf(m.value)!==-1&&c.push(t)}),v.value=c}else v.value=f;if(C.value){var u=new RegExp("[\\u4E00-\\u9FFF]+","g");if(u.test(C.value)){C.value="";return}const c=v.value.filter(t=>t.symbol.toLowerCase().includes(C.value.toLowerCase()));v.value=c}console.log(v.value,"=====>>>>list.value"),q.value=!1},os=L(()=>{if(i.value.tokens&&i.value.tokens.length>0){const a={};return i.value.tokens.forEach(d=>{a[d.address]={...d}}),a}return null});es(()=>[os.value,i.value.poolConfigList,h.value.chainName,h.value.addressLpTokens,C.value,V.value,m.value],([a,d,n,f])=>{a&&d&&(d==null?void 0:d.length)>0&&d[0]&&n&&(n!=null&&n.toLowerCase().includes(d[0].chain))&&Ds(d)},{immediate:!0,deep:!0});const Ss=()=>{q.value=!0,hs.value=!0,y.getStatsData(h.value.chainName,h.value.filterCoinsObj),W.setPoolConfigList(h.value.chainName,h.value.filterCoinsObj),setTimeout(()=>{hs.value=!1},1e3)};es(()=>h.value.isRefresh,a=>{var n;const d=(n=H==null?void 0:H.currentRoute)==null?void 0:n.value.name.split("-")[1];a&&(!d||d=="list"||d=="")&&Ss()});const Ps=a=>{const d=[];d.push(V.value),J.value.forEach((n,f)=>{n!=a&&d.push(n)}),J.value=d,V.value=a},Vs=a=>{const d=[];ds.value.forEach((n,f)=>{n==a?d[f]=m.value:d[f]=n}),ds.value=d,m.value=a};es(()=>y.lang,a=>{z.value=a});const Es=L(()=>As[h.value.chainName]);es(()=>h.value.isSelect,a=>{a!=="pools"&&(ts.value=!1,N.value=!1)});const qs=L(()=>i.value.poolConfigList.filter(d=>d.address==As[h.value.chainName].newPositionAddress)[0]),Us=L(()=>As[h.value.chainName].hasCreatePool),Z=L(()=>h.value.chainName),Ms=()=>{localStorage.setItem(`pools-${Z.value}-selectall`,j.value?"":"true"),j.value=!j.value},zs=()=>{localStorage.setItem(`pools-${Z.value}-farms`,S.value?"":"true"),S.value=!S.value},Hs=()=>{localStorage.setItem(`pools-${Z.value}-viewCard`,Q.value?"":"true"),Q.value=!Q.value},Js=a=>{var d;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((d=i.value.tokensObj[a==null?void 0:a.address])==null?void 0:d.logo_url)||(h.value.theme==="default"?rs("/image/coins/unknown.png"):rs("/image/coins/sui-unknown.png"))},x=w(null),$=L(()=>x.value&&x.value.firstToken?x.value.firstToken:null),O=L(()=>x.value&&x.value.lastToken?x.value.lastToken:null),Ws=L(()=>{if(h.value.chainName!=="Sui")return v.value;if(os.value&&v.value&&v.value.length>0){const a=[];return v.value.forEach(n=>{var f,u;os.value[(f=n==null?void 0:n.token_a)==null?void 0:f.address]&&os.value[(u=n==null?void 0:n.token_b)==null?void 0:u.address]&&(S.value?n.isFarming&&n.rewarderInfo&&n.rewarderInfo.length>0&&(i.value.currentPoolTab=="All"&&(n.category==""||!n.category)||i.value.currentPoolTab!=="All"&&n.category==i.value.currentPoolTab)&&a.push(n):(i.value.currentPoolTab=="All"&&(n.category==""||!n.category)||i.value.currentPoolTab!=="All"&&n.category==i.value.currentPoolTab)&&a.push(n))}),a.filter((n,f)=>$.value&&O.value?n.coinA.address==$.value.address&&n.coinB.address==O.value.address||n.coinA.address==O.value.address&&n.coinB.address==$.value.address:$.value?n.coinA.address.toLowerCase().includes($.value.address.toLowerCase())||n.coinB.address.toLowerCase().includes($.value.address.toLowerCase()):O.value?n.coinA.address.toLowerCase().includes(O.value.address.toLowerCase())||n.coinB.address.toLowerCase().includes(O.value.address.toLowerCase()):a)}return[]}),bs=w([]),Ks=()=>{let a=[];a=v.value;const d=a.filter((u,c)=>$.value&&O.value?u.coinA.address==$.value.address&&u.coinB.address==O.value.address||u.coinA.address==O.value.address&&u.coinB.address==$.value.address:$.value?u.coinA.address.toLowerCase().includes($.value.address.toLowerCase())||u.coinB.address.toLowerCase().includes($.value.address.toLowerCase()):O.value?u.coinA.address.toLowerCase().includes(O.value.address.toLowerCase())||u.coinB.address.toLowerCase().includes(O.value.address.toLowerCase()):a);let n=[],f=[];d.forEach((u,c)=>{const t=[];if(u.rewarderInfo&&u.rewarderInfo.length>0){u.rewarderInfo.forEach((T,ls)=>{var is,cs,us;const ps=(is=i.value.tokensObj[T.coinAddress])==null?void 0:is.decimals,ss=Is(T.emissionsEveryDay/Math.pow(10,ps),4),ks=Number(ss)>0?M(ss):ss,ws=Is(Number(ss)*i.value.RATES[T.coinAddress]&&i.value.RATES[T.coinAddress].price,4);t.push({...T,logoUrl:(cs=i.value.tokensObj[T.coinAddress])==null?void 0:cs.logoURI,day:ks,dayUSD:ws,symbol:(us=i.value.tokensObj[T.coinAddress])==null?void 0:us.symbol,rewarders:u[`rewarders${ls}`]&&u[`rewarders${ls}`].replace("%",""),rewarder_display:u[`rewarder_display${ls+1}`],resultDay:ss})});const U=t.filter(T=>T.rewarder_display);let as=[];(!u.rewarderInfo||u.rewarderInfo.length<1||JSON.stringify(u.rewarderInfo)!==JSON.stringify(U))&&(as=U),(i.value.currentPoolTab=="All"&&(u.category==""||!u.category)||i.value.currentPoolTab!=="All"&&u.category==i.value.currentPoolTab)&&(f.push({...u,rewardes:as}),n.push({...u,rewardes:as}))}else(i.value.currentPoolTab=="All"&&(u.category==""||!u.category)||i.value.currentPoolTab!=="All"&&u.category==i.value.currentPoolTab)&&n.push({...u})}),console.log(n,"121arrnewValnewValnewVal"),bs.value=S.value?f:n,q.value||(j.value?S.value?y.setPoolAmount(f.length):y.setPoolAmount(n.length):y.setPoolAmount(Ws.value.length))};de(()=>{y.setPoolAmount("--")}),es(()=>[$.value,O.value,v.value,S.value,j.value,i.value.currentPoolTab],([a,d,n,f,u,c])=>{var t,U;(a&&((t=i==null?void 0:i.value.tokensObj[a.address])!=null&&t.isSelfBuilt)||d&&((U=i==null?void 0:i.value.tokensObj[d.address])!=null&&U.isSelfBuilt))&&!u?bs.value=[]:(a||d||n||f)&&(console.log("newValnewValnewVal",a,d,n,JSON.stringify(n)),Ks())},{deep:!0});const Gs=L(()=>h.value.poolAmount!=="--"?4-Number(h.value.poolAmount)%4:0);return{tabArr:E,changeTab:s,getLabel:a=>i.value.tokensObj&&i.value.tokensObj[a]&&i.value.tokensObj[a].labels,patchNumber:Gs,getRewarderApr:fs,childTokenSelectRef:x,firstToken:$,lastToken:O,showList:bs,isFarms:S,getCoinIcon:Js,isViewCard:Q,clickDisplayAll:Ms,clickFarms:zs,clickViewCard:Hs,isSelectAll:j,chainName:Z,hasCreatePool:Us,store:h,lpInfo:qs,config:Es,t:e,router:H,loading:Cs,clickRefresh:Ss,refresh:hs,searchKey:C,current:X,addCommom:M,list:v,theme:Y,statsData:g,pools:i,select:ts,selectValue:V,selectList:J,label:N,labelValue:m,labelList:ds,changeSort:Ps,changeSortLabel:Vs,listLoading:q,languageValue:z,isSwitchDisplayMode:ns}}}),Rs=""+new URL("icon-Farms_2x.a9e99fb2.png",import.meta.url).href;const _=e=>(ue("data-v-fc8fadab"),e=e(),ve(),e),ke={class:"upgrade-pools-list-container"},we={class:"content-top"},ye={class:"content-top-left"},Ae={key:0,class:"tag-list"},Ce=["onClick"],Se={class:"content-top-right"},$e={class:"radio"},Oe={key:0,src:js},Le=_(()=>o("span",null,"Display all pools",-1)),Be={class:"radio"},Ie={key:0,src:js},je=_(()=>o("span",null,"Farms",-1)),Ne={class:"search-select-box"},Te=_(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Re=[Te],Fe={key:0,class:"select-list"},me=["onClick"],De={class:"search-select-box"},Pe=_(()=>o("img",{src:Ns,alt:""},null,-1)),Ve=_(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ee=[Ve],qe={key:0,class:"select-list"},Ue=["onClick"],Me=_(()=>o("img",{src:Ns,alt:""},null,-1)),ze={key:0,"aria-hidden":"true",class:"cardIcon"},He=_(()=>o("use",{"xlink:href":"#icon-icon-card"},null,-1)),Je=[He],We={key:1,"aria-hidden":"true",class:"listIcon"},Ke=_(()=>o("use",{"xlink:href":"#icon-icon-list1"},null,-1)),Ge=[Ke],Qe={key:0,class:"upgrade-loading"},Xe={key:1,class:"table-contianer"},Ye={class:"table"},Ze={class:"table-header"},xe={class:"table-tr"},so=_(()=>o("th",null,"Pools",-1)),eo=_(()=>o("th",null,"Liquidity",-1)),oo=_(()=>o("th",null,"Volume (24H)",-1)),ao=_(()=>o("th",null,null,-1)),lo=_(()=>o("th",null,"Rewards",-1)),ro={class:"hover-box"},no={class:"apr-hover-content"},to=_(()=>o("th",null,"Action",-1)),io={class:"table-body"},co=["onClick"],uo={class:"token"},vo={class:"img-box"},ho={key:0,class:"pool-warning"},po={class:"img-box img-last-box"},go={key:0,class:"pool-warning"},_o={class:"name"},fo={class:"top"},bo={class:"token-name"},ko={class:"tokena"},wo={class:"tokenb"},yo={class:"fee-tier-top"},Ao={key:0,class:"isFarming"},Co=_(()=>o("img",{src:Rs,alt:""},null,-1)),So=_(()=>o("div",{class:"hover-text"},"Farming rewards available",-1)),$o=[Co,So],Oo={key:1,class:"pool-warning"},Lo=_(()=>o("img",{src:Ts,alt:""},null,-1)),Bo={class:"hover-text"},Io={class:"label-all"},jo={key:0},No={key:0},To={class:"skeleton-box"},Ro={key:1},Fo={key:2},mo={class:"skeleton-box"},Do={key:3},Po=_(()=>o("td",null,null,-1)),Vo={key:4},Eo={class:"skeleton-box"},qo={key:5},Uo={class:"rewards-hover"},Mo={alt:""},zo={key:6},Ho={key:7},Jo={class:"skeleton-box"},Wo={class:"hover-box"},Ko={key:0,class:"apr-hover-content"},Go={key:2,class:"item-container"},Qo={class:"h5-pool-item"},Xo={class:"token"},Yo={class:"token"},Zo={class:"img-box"},xo={key:0,class:"pool-warning"},sa={class:"img-box img-last-box"},ea={key:0,class:"pool-warning"},oa={class:"name"},aa={class:"top"},la={class:"token-name"},ra={class:"tokena"},na={class:"tokenb"},ta={class:"fee-tier-top"},da={key:0,class:"isFarming"},ia=_(()=>o("img",{src:Rs,alt:""},null,-1)),ca=_(()=>o("div",{class:"hover-text"},"Farming rewards available",-1)),ua=[ia,ca],va={key:1,class:"pool-warning"},ha=_(()=>o("img",{src:Ts,alt:""},null,-1)),pa={class:"hover-text"},ga={class:"label-all"},_a={key:0},fa={class:"bottom"},ba={class:"row"},ka=_(()=>o("div",{class:"left"},"APR (24H)",-1)),wa={key:0,class:"right"},ya={class:"apr-hover-content"},Aa={class:"row"},Ca=_(()=>o("div",{class:"left"},"Liquidity",-1)),Sa={key:0,class:"right"},$a={key:1,class:"right"},Oa={class:"row"},La=_(()=>o("div",{class:"left"},"Volume (24H)",-1)),Ba={key:0,class:"right"},Ia={key:1,class:"right"},ja={class:"row"},Na=_(()=>o("div",{class:"left"},"Rewards",-1)),Ta={key:0,class:"right"},Ra={key:1,class:"right reward-right"},Fa={class:"rewards-hover"},ma={alt:""},Da={key:3,class:"no-data"},Pa={key:0,src:_e},Va={key:1,src:fe};function Ea(e,I,H,Cs,hs,Q){const ns=Qs,ts=Xs,V=Ys,J=Zs,N=he,m=se,ds=xs,E=ce("image");return l(),r("div",ke,[o("div",we,[o("div",ye,[e.tabArr.length>1?(l(),r("div",Ae,[(l(!0),r(R,null,P(e.tabArr,(s,v)=>(l(),r("div",{key:v,class:F(["tag-item",s==e.pools.currentPoolTab?`tag-active tab-num-${e.tabArr.length}`:`tab-num-${e.tabArr.length}`]),onClick:C=>e.changeTab(s)},p(s),11,Ce))),128))])):b("",!0),A(ns,{ref:"childTokenSelectRef"},null,512)]),o("div",Se,[o("div",{class:F(["tab-item",e.isSelectAll?"tab-item-active":""]),onClick:I[0]||(I[0]=gs(s=>e.clickDisplayAll(),["stop"]))},[o("div",$e,[e.isSelectAll&&e.store.theme=="sui"?(l(),r("img",Oe)):b("",!0)]),Le],2),o("div",{class:F(["tab-item",e.isFarms?"tab-item-active tab-item-farms-active":""]),onClick:I[1]||(I[1]=gs(s=>e.clickFarms(),["stop"]))},[o("div",Be,[e.isFarms&&e.store.theme=="sui"?(l(),r("img",Ie)):b("",!0)]),je],2),o("div",Ne,[o("div",{class:"search-select search-label",onClick:I[2]||(I[2]=gs(()=>{e.store.setIsSelect("pools"),e.label=!e.label,e.select=!1},["stop"]))},[o("span",null,p(e.$t("newAdd.label")),1),o("div",null,[B(p(e.labelValue)+" ",1),(l(),r("svg",{"aria-hidden":"true",class:F(e.label?"show-icon icon":"icon")},Re,2))]),e.label?(l(),r("div",Fe,[(l(!0),r(R,null,P(e.labelList,(s,v)=>(l(),r("div",{key:v,class:"select-menu-item",onClick:C=>e.changeSortLabel(s)},p(s),9,me))),128))])):b("",!0)])]),o("div",De,[o("div",{class:"search-select",onClick:I[3]||(I[3]=gs(()=>{e.store.setIsSelect("pools"),e.select=!e.select,e.label=!1},["stop"]))},[o("span",null,p(e.$t("newAdd.sortBy")),1),o("div",null,[B(p(e.selectValue)+" ",1),Pe,(l(),r("svg",{"aria-hidden":"true",class:F(e.select?"show-icon icon":"icon")},Ee,2))]),e.select?(l(),r("div",qe,[(l(!0),r(R,null,P(e.selectList,(s,v)=>(l(),r("div",{key:v,class:"select-menu-item",onClick:C=>e.changeSort(s)},[B(p(s)+" ",1),Me],8,Ue))),128))])):b("",!0)])]),o("div",{class:"change-view",onClick:I[4]||(I[4]=s=>e.clickViewCard())},[e.isViewCard&&e.current[0]=="pools"?(l(),r("svg",ze,Je)):(l(),r("svg",We,Ge))])])]),e.listLoading||e.isSwitchDisplayMode?(l(),r("div",Qe,[A(ts,{loading:e.listLoading||e.isSwitchDisplayMode,type:e.isViewCard?"poolsCard":"poolsList"},null,8,["loading","type"])])):b("",!0),!e.isSwitchDisplayMode&&!e.isViewCard&&!e.listLoading?(l(),r("div",Xe,[o("table",Ye,[o("thead",Ze,[o("tr",xe,[so,eo,oo,ao,lo,o("th",null,[o("span",ro,[B(" APR (24H) "),o("div",no,[A(V,{class:"noHover apr-hover-con"})])])]),to])]),o("tbody",io,[(l(!0),r(R,null,P(e.showList,s=>{var v,C,X,W,y,q,j,S,z,h,Y,i;return l(),r("tr",{key:s.address,class:F(["table-tr",e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none"]),onClick:g=>s.needReverse?e.router.push(`/deposit?poolAddress=${s.address}&tokena=${s.coinB.address}&tokenb=${s.coinA.address}&fee=${s.fee}`):e.router.push(`/deposit?poolAddress=${s.address}&tokena=${s.coinA.address}&tokenb=${s.coinB.address}&fee=${s.fee}`)},[o("td",null,[o("div",uo,[o("div",vo,[G(o("img",null,null,512),[[E,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(W=(X=e.pools)==null?void 0:X.tokensObj[s.coinB.address])!=null&&W.isSelfBuilt:(C=(v=e.pools)==null?void 0:v.tokensObj[s.coinA.address])!=null&&C.isSelfBuilt)?(l(),r("div",ho)):b("",!0)]),o("div",po,[G(o("img",null,null,512),[[E,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(q=(y=e.pools)==null?void 0:y.tokensObj[s.coinA.address])!=null&&q.isSelfBuilt:(S=(j=e.pools)==null?void 0:j.tokensObj[s.coinB.address])!=null&&S.isSelfBuilt)?(l(),r("div",go)):b("",!0)]),o("div",_o,[o("div",fo,[o("p",bo,[o("span",ko,[B(p(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),A(J,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),B(" - "),o("span",wo,[B(p(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),A(J,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",yo,p((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",Ao,$o)):b("",!0),(h=(z=e.pools)==null?void 0:z.tokensObj[s.coinA.address])!=null&&h.isSelfBuilt||(i=(Y=e.pools)==null?void 0:Y.tokensObj[s.coinB.address])!=null&&i.isSelfBuilt?(l(),r("div",Oo,[Lo,o("div",Bo,p(e.t("newAdd.poolWarning")),1)])):b("",!0)]),o("div",Io,[(l(!0),r(R,null,P(s.labels,(g,D)=>(l(),r("div",{key:D,class:F(["label",g])},[g!=="Native"?(l(),r("span",jo,p(g),1)):b("",!0)],2))),128))])])])]),("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("td",No,[o("div",To,[A(N,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),r("td",Ro,"$"+p(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.liqidity,2)),1)),("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("td",Fo,[o("div",mo,[A(N,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),r("td",Do,"$"+p(Number(s.vol)!==0&&Number(s.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.vol,2)),1)),Po,("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("td",Vo,[o("div",Eo,[A(N,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("td",qo,[(l(!0),r(R,null,P(s.rewardes,g=>{var D;return l(),r("div",{key:g.address,class:F(["rewarder-token",g.day===0?"reward-none":""])},[G(o("img",null,null,512),[[E,e.getCoinIcon((D=e.pools)==null?void 0:D.tokensObj[g.coinAddress])]]),o("div",Uo,[G(o("img",Mo,null,512),[[E,g.logoUrl?g.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:k(rs))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:k(rs))("/image/coins/sui-unknown.png")]]),o("span",null,p(`${g.day} ${g.symbol} per day`),1)])],2)}),128))])):(l(),r("td",zo," ")),("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("td",Ho,[o("div",Jo,[A(N,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),r("td",{key:8,class:F(s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"noCursor")},[o("span",Wo,[o("i",null,p(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.apr,2))+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",Ko,[A(V,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):b("",!0)])],2)),o("td",null,[s.needReverse?(l(),vs(m,{key:0,class:"action-add",to:`/deposit?poolAddress=${s.address}&tokena=${s.coinB.address}&tokenb=${s.coinA.address}&fee=${s.fee}`},{default:_s(()=>[B("+")]),_:2},1032,["to"])):(l(),vs(m,{key:1,class:"action-add",to:`/deposit?poolAddress=${s.address}&tokena=${s.coinA.address}&tokenb=${s.coinB.address}&fee=${s.fee}`},{default:_s(()=>[B("+")]),_:2},1032,["to"]))])],10,co)}),128))])])])):b("",!0),!e.isSwitchDisplayMode&&e.isViewCard&&!e.listLoading?(l(),r("div",Go,[e.showList&&e.showList.length>0?(l(),r(R,{key:0},[(l(!0),r(R,null,P(e.showList,(s,v)=>(l(),vs(ds,{key:v,"l-item":s,"is-select-all":e.isSelectAll,"is-farms":e.isFarms},null,8,["l-item","is-select-all","is-farms"]))),128)),(l(!0),r(R,null,P(e.patchNumber,s=>(l(),r("div",{key:s,class:"patch-item"}))),128))],64)):b("",!0)])):b("",!0),o("div",Qo,[(l(!0),r(R,null,P(e.showList,s=>{var v,C,X,W,y,q,j,S,z,h,Y,i;return l(),r("div",{key:s.address,class:F([e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none","item"])},[o("div",Xo,[o("div",Yo,[o("div",Zo,[G(o("img",null,null,512),[[E,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(W=(X=e.pools)==null?void 0:X.tokensObj[s.coinB.address])!=null&&W.isSelfBuilt:(C=(v=e.pools)==null?void 0:v.tokensObj[s.coinA.address])!=null&&C.isSelfBuilt)?(l(),r("div",xo)):b("",!0)]),o("div",sa,[G(o("img",null,null,512),[[E,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(q=(y=e.pools)==null?void 0:y.tokensObj[s.coinA.address])!=null&&q.isSelfBuilt:(S=(j=e.pools)==null?void 0:j.tokensObj[s.coinB.address])!=null&&S.isSelfBuilt)?(l(),r("div",ea)):b("",!0)]),o("div",oa,[o("div",aa,[o("p",la,[o("span",ra,[B(p(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),A(J,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),B(" - "),o("span",na,[B(p(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),A(J,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",ta,p((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",da,ua)):b("",!0),(h=(z=e.pools)==null?void 0:z.tokensObj[s.coinA.address])!=null&&h.isSelfBuilt||(i=(Y=e.pools)==null?void 0:Y.tokensObj[s.coinB.address])!=null&&i.isSelfBuilt?(l(),r("div",va,[ha,o("div",pa,p(e.t("newAdd.poolWarning")),1)])):b("",!0)]),o("div",ga,[(l(!0),r(R,null,P(s.labels,(g,D)=>(l(),r("div",{key:D,class:F(["label",g])},[g!=="Native"?(l(),r("span",_a,p(g),1)):b("",!0)],2))),128))])])])]),o("div",fa,[o("div",ba,[ka,("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("div",wa,[A(N,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),r("div",{key:1,class:F(["right theme-right",s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"noCursor"])},[o("i",null,p(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.apr,2))+"%",1),o("div",ya,[A(V,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])],2))]),o("div",Aa,[Ca,("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("div",Sa,[A(N,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),r("div",$a,"$"+p(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.liqidity,2)),1))]),o("div",Oa,[La,("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("div",Ba,[A(N,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),r("div",Ia,"$"+p(Number(s.vol)!==0&&Number(s.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.vol,2)),1))]),o("div",ja,[Na,("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("div",Ta,[A(N,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",Ra,[(l(!0),r(R,null,P(s.rewardes,g=>{var D;return l(),r("div",{key:g.address,class:"rewarder-token"},[G(o("img",null,null,512),[[E,e.getCoinIcon((D=e.pools)==null?void 0:D.tokensObj[g.coinAddress])]]),o("div",Fa,[G(o("img",ma,null,512),[[E,g.logoUrl?g.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:k(rs))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:k(rs))("/image/coins/sui-unknown.png")]]),o("span",null,p(`${g.day} ${g.symbol} per day`),1)])])}),128))])):b("",!0)])]),s.needReverse?(l(),vs(m,{key:0,to:`/deposit?poolAddress=${s.address}&tokena=${s.coinB.address}&tokenb=${s.coinA.address}&fee=${s.fee}`,class:"add-btn"},{default:_s(()=>[B("+ Add Liquidity")]),_:2},1032,["to"])):(l(),vs(m,{key:1,to:`/deposit?poolAddress=${s.address}&tokena=${s.coinA.address}&tokenb=${s.coinB.address}&fee=${s.fee}`,class:"add-btn"},{default:_s(()=>[B("+ Add Liquidity")]),_:2},1032,["to"]))],2)}),128))]),!e.isSwitchDisplayMode&&e.store.poolAmount!=="--"&&e.store.poolAmount<=0&&!e.listLoading?(l(),r("div",Da,[e.theme=="default"?(l(),r("img",Pa)):(l(),r("img",Va)),o("span",null,p(e.$t("common.poolsNotFound")),1)])):b("",!0)])}const nl=ie(be,[["render",Ea],["__scopeId","data-v-fc8fadab"]]);export{nl as default};
