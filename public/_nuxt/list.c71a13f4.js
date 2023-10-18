import{_ as se}from"./upgrade-select-input.3b8ff181.js";import{_ as ee}from"./upgrade-loading.68a21c30.js";import{_ as oe}from"./apr-tips.1bf4a8b0.js";import{_ as ae}from"./coin-tips.0be2ce59.js";import{_ as le}from"./nuxt-link.170347c8.js";import{_ as re}from"./pools-list-item.77bd211b.js";import{u as ne,c as vs}from"./sha256.71c5a4e6.js";import{u as te,a as M,j as de,t as ws,d as ie,i as Ls,c as G}from"./pool.159ffd74.js";import{i as rs}from"./import-icon.de3e6c66.js";import{a as ue,y as ce,b as ve,r as w,l as C,J as he,q as es,m as pe,Y as _e,e as ge,s as fe,o as l,f as r,h as o,F as T,G as P,x as f,i as y,C as R,A as _s,v as _,j as N,t as K,u as k,c as ys,w as As,p as be,k as ke,O as we}from"./entry.a0b7f242.js";/* empty css              */import{p as ye}from"./precision.a7a6c57b.js";import{u as Ae}from"./autoPool.7e623d63.js";import{_ as Ns}from"./icon-selected_3x.09e9a6f0.js";import{_ as Bs}from"./icon_on_2x.5e96733d.js";import{_ as $s}from"./icon-Farms_2x.f1b61aa2.js";import{_ as Ts}from"./icon_autopools_2x.c5d21f00.js";import{a as Rs}from"./coin-select.13232411.js";import{_ as Ce,a as Se}from"./img-no-Positions_2x.3a8199d4.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";/* empty css              */import"./decimal.0e8aa3f1.js";import"./index.3a57871d.js";/* empty css              */const me=ue({setup(){const{t:e,locale:I}=ce(),z=ve(),Cs=w(!1),hs=w(!1),Y=w(!1),ns=w(!1),ts=w(!1),V=w("VOL"),J=w(["APR","TVL"]),B=w(!1),D=w(e("tab.all")),ds=w([e("tab.wormhole"),e("tab.celer")]),q=C(()=>{const a=Array.from(new Set(i.value.poolConfigList.flatMap(d=>!d.category||d.category==""?"All":d.category)));return console.log(a,"newArr"),a.length<=1?[]:a}),s=a=>{i.value.setCurrentPoolTab(a)},h=w([]),S=w(""),Q=w(["pools"]),W=te(),A=ne(),E=w(!0),L=w(!1),m=w(!1),H=w(""),p=C(()=>A),X=C(()=>A.theme),i=C(()=>W),g=C(()=>A.statsData);he(()=>{var c,u,t;const a=(t=(u=(c=z==null?void 0:z.currentRoute)==null?void 0:c.value)==null?void 0:u.query)==null?void 0:t.language;a&&Fs(a),H.value=I.value,document.addEventListener("click",()=>{ts.value=!1,B.value=!1});const d=localStorage.getItem(`pools-${Z.value}-selectall`),n=localStorage.getItem(`pools-${Z.value}-farms`),b=localStorage.getItem(`pools-${Z.value}-viewCard`);L.value=d==="true",m.value=n==="true",Y.value=b==="true"}),es(()=>Y.value,async(a,d)=>{a!==d&&(ns.value=!0,await de(1500),ns.value=!1)}),es(()=>p.value.chainName,(a,d)=>{a&&A.getStatsData(a,p.value.filterCoinsObj)},{immediate:!0});const{setLang:F}=A,Fs=a=>{F(a),I.value=a},Ps=(a,d)=>a&&d?ye.plus(ws(a),ws(d)):a||0,gs=a=>{let d=0;return a&&a.forEach(n=>{d+=ws(String(n))}),String(ie(String(d),2))},Vs=(a=[])=>{const d=a&&a.length>0?a:Object.values(i.value.poolsObj),n=[];console.log(d,"====>newPoolList"),d.filter(u=>!u.is_closed).forEach(u=>{var is,us,cs,ms,Os,js,Is;const t=p.value.addressLpTokens[u.address],U=i.value.poolsObj[u.address];let as,$,ls,ps;t&&(as=t.rewarder_apr[0]?Number(t.rewarder_apr[0].substring(0,t.rewarder_apr[0].length-1)):0,$=t.rewarder_apr[1]?Number(t.rewarder_apr[1].substring(0,t.rewarder_apr[1].length-1)):0,ls=t.rewarder_apr[2]?Number(t.rewarder_apr[2].substring(0,t.rewarder_apr[2].length-1)):0,ps=as+$+ls);const ss=u.needReverse?((us=i.value.tokensObj[u.coinB.address])==null?void 0:us.labels)||[]:((is=i.value.tokensObj[u.coinA.address])==null?void 0:is.labels)||[],bs=u.needReverse?((cs=i.value.tokensObj[u.coinA.address])==null?void 0:cs.labels)||[]:((ms=i.value.tokensObj[u.coinB.address])==null?void 0:ms.labels)||[],ks=[...new Set(ss.concat(bs))];n.push({...u,liqidity:t?t.tvl_in_usd:"0.00000000001",vol:t?t.vol_in_usd_24h:"0",apr:t&&t.apr_7day?(Os=t.apr_7day)==null?void 0:Os.replace("%",""):"--",fee:u.fee?u.fee:U!=null&&U.fee?U.fee:"--",aprNum:t&&t.apr_7day?String(Number(t.apr_7day.substring(0,t.apr_7day.length-1))+ps):"0",rewarder_apr:gs(t&&t.rewarder_apr),aprTotal:Ps(t&&t.apr_7day,t&&gs(t.rewarder_apr)),rewarders0:t&&t.rewarder_apr[0],rewarders1:t&&t.rewarder_apr[1],rewarders2:t&&t.rewarder_apr[2],labels:ks,isFarming:u==null?void 0:u.isFarming,fee_24_h:t&&t.fee_24_h,isAuthorized:!!(os.value[(js=u==null?void 0:u.token_a)==null?void 0:js.address]&&os.value[(Is=u==null?void 0:u.token_b)==null?void 0:Is.address])})});let b=[];if(V.value=="APR"?b=n.sort((u,t)=>t.aprNum-u.aprNum):V.value=="VOL"?b=n.sort((u,t)=>t.vol-u.vol):b=n.sort((u,t)=>t.liqidity-u.liqidity),D.value!=e("tab.all")){const u=[];b.forEach(t=>{t.labels.indexOf(D.value)!==-1&&u.push(t)}),h.value=u}else h.value=b;if(S.value){var c=new RegExp("[\\u4E00-\\u9FFF]+","g");if(c.test(S.value)){S.value="";return}const u=h.value.filter(t=>t.symbol.toLowerCase().includes(S.value.toLowerCase()));h.value=u}console.log(h.value,"=====>>>>list.value"),E.value=!1},os=C(()=>{if(i.value.tokens&&i.value.tokens.length>0){const a={};return i.value.tokens.forEach(d=>{a[d.address]={...d}}),a}return null});es(()=>[os.value,i.value.poolConfigList,p.value.chainName,p.value.addressLpTokens,S.value,V.value,D.value],([a,d,n,b])=>{a&&d&&(d==null?void 0:d.length)>0&&d[0]&&n&&(n!=null&&n.toLowerCase().includes(d[0].chain))&&Vs(d)},{immediate:!0,deep:!0}),pe();const Ds=Ae(),Ss=()=>{E.value=!0,hs.value=!0,A.getStatsData(p.value.chainName,p.value.filterCoinsObj),W.setPoolConfigList(p.value.chainName,p.value.filterCoinsObj),setTimeout(()=>{hs.value=!1},1e3)};es(()=>p.value.isRefresh,a=>{var n;const d=(n=z==null?void 0:z.currentRoute)==null?void 0:n.value.name.split("-")[1];a&&(!d||d=="list"||d=="")&&Ss()});const qs=a=>{const d=[];d.push(V.value),J.value.forEach((n,b)=>{n!=a&&d.push(n)}),J.value=d,V.value=a},Es=a=>{const d=[];ds.value.forEach((n,b)=>{n==a?d[b]=D.value:d[b]=n}),ds.value=d,D.value=a};es(()=>A.lang,a=>{H.value=a});const Us=C(()=>vs[p.value.chainName]);es(()=>p.value.isSelect,a=>{a!=="pools"&&(ts.value=!1,B.value=!1)});const Ms=C(()=>i.value.poolConfigList.filter(d=>d.address==vs[p.value.chainName].newPositionAddress)[0]),Hs=C(()=>vs[p.value.chainName].hasCreatePool),Z=C(()=>p.value.chainName),zs=()=>{localStorage.setItem(`pools-${Z.value}-selectall`,L.value?"":"true"),L.value=!L.value},Js=()=>{localStorage.setItem(`pools-${Z.value}-farms`,m.value?"":"true"),m.value=!m.value},Ws=()=>{localStorage.setItem(`pools-${Z.value}-viewCard`,Y.value?"":"true"),Y.value=!Y.value},Gs=a=>{var d;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((d=i.value.tokensObj[a==null?void 0:a.address])==null?void 0:d.logo_url)||(p.value.theme==="default"?rs("/image/coins/unknown.png"):rs("/image/coins/sui-unknown.png"))},x=w(null),O=C(()=>x.value&&x.value.firstToken?x.value.firstToken:null),j=C(()=>x.value&&x.value.lastToken?x.value.lastToken:null),Ks=C(()=>{if(p.value.chainName!=="Sui")return h.value;if(os.value&&h.value&&h.value.length>0){const a=[];return h.value.forEach(n=>{var b,c;os.value[(b=n==null?void 0:n.token_a)==null?void 0:b.address]&&os.value[(c=n==null?void 0:n.token_b)==null?void 0:c.address]&&(m.value?n.isFarming&&n.rewarderInfo&&n.rewarderInfo.length>0&&(i.value.currentPoolTab=="All"&&(n.category==""||!n.category)||i.value.currentPoolTab!=="All"&&n.category==i.value.currentPoolTab)&&a.push(n):(i.value.currentPoolTab=="All"&&(n.category==""||!n.category)||i.value.currentPoolTab!=="All"&&n.category==i.value.currentPoolTab)&&a.push(n))}),a.filter((n,b)=>O.value&&j.value?n.coinA.address==O.value.address&&n.coinB.address==j.value.address||n.coinA.address==j.value.address&&n.coinB.address==O.value.address:O.value?n.coinA.address.toLowerCase().includes(O.value.address.toLowerCase())||n.coinB.address.toLowerCase().includes(O.value.address.toLowerCase()):j.value?n.coinA.address.toLowerCase().includes(j.value.address.toLowerCase())||n.coinB.address.toLowerCase().includes(j.value.address.toLowerCase()):a)}return[]}),fs=w([]),Ys=()=>{let a=[];a=h.value;const d=a.filter((c,u)=>O.value&&j.value?c.coinA.address==O.value.address&&c.coinB.address==j.value.address||c.coinA.address==j.value.address&&c.coinB.address==O.value.address:O.value?c.coinA.address.toLowerCase().includes(O.value.address.toLowerCase())||c.coinB.address.toLowerCase().includes(O.value.address.toLowerCase()):j.value?c.coinA.address.toLowerCase().includes(j.value.address.toLowerCase())||c.coinB.address.toLowerCase().includes(j.value.address.toLowerCase()):a);let n=[],b=[];d.forEach((c,u)=>{const t=[];if(c.rewarderInfo&&c.rewarderInfo.length>0){c.rewarderInfo.forEach(($,ls)=>{var is,us,cs;const ps=(is=i.value.tokensObj[$.coinAddress])==null?void 0:is.decimals,ss=Ls($.emissionsEveryDay/Math.pow(10,ps),4),bs=Number(ss)>0?M(ss):ss,ks=Ls(Number(ss)*i.value.RATES[$.coinAddress]&&i.value.RATES[$.coinAddress].price,4);t.push({...$,logoUrl:(us=i.value.tokensObj[$.coinAddress])==null?void 0:us.logoURI,day:bs,dayUSD:ks,symbol:(cs=i.value.tokensObj[$.coinAddress])==null?void 0:cs.symbol,rewarders:c[`rewarders${ls}`]&&c[`rewarders${ls}`].replace("%",""),rewarder_display:c[`rewarder_display${ls+1}`],resultDay:ss})});const U=t.filter($=>$.rewarder_display);let as=[];(!c.rewarderInfo||c.rewarderInfo.length<1||JSON.stringify(c.rewarderInfo)!==JSON.stringify(U))&&(as=U),(i.value.currentPoolTab=="All"&&(c.category==""||!c.category)||i.value.currentPoolTab!=="All"&&c.category==i.value.currentPoolTab)&&(b.push({...c,rewardes:as}),n.push({...c,rewardes:as}))}else(i.value.currentPoolTab=="All"&&(c.category==""||!c.category)||i.value.currentPoolTab!=="All"&&c.category==i.value.currentPoolTab)&&n.push({...c})}),console.log(n,"121arrnewValnewValnewVal"),fs.value=m.value?b:n,E.value||(L.value?m.value?A.setPoolAmount(b.length):A.setPoolAmount(n.length):A.setPoolAmount(Ks.value.length))};_e(()=>{A.setPoolAmount("--")}),es(()=>[O.value,j.value,h.value,m.value,L.value,i.value.currentPoolTab],([a,d,n,b,c,u])=>{var t,U;(a&&((t=i==null?void 0:i.value.tokensObj[a.address])!=null&&t.isSelfBuilt)||d&&((U=i==null?void 0:i.value.tokensObj[d.address])!=null&&U.isSelfBuilt))&&!c?fs.value=[]:(a||d||n||b)&&(console.log("newValnewValnewVal",a,d,n,JSON.stringify(n)),Ys())},{deep:!0});const Qs=C(()=>p.value.poolAmount!=="--"?4-Number(p.value.poolAmount)%4:0),Xs=a=>i.value.tokensObj&&i.value.tokensObj[a]&&i.value.tokensObj[a].labels,Zs=C(()=>Ds),xs=C(()=>Zs.value.autoPoolObj);return{tabArr:q,changeTab:s,getLabel:Xs,patchNumber:Qs,getRewarderApr:gs,childTokenSelectRef:x,firstToken:O,lastToken:j,showList:fs,isFarms:m,getCoinIcon:Gs,isViewCard:Y,clickDisplayAll:zs,clickFarms:Js,clickViewCard:Ws,isSelectAll:L,chainName:Z,hasCreatePool:Hs,store:p,lpInfo:Ms,config:Us,t:e,router:z,loading:Cs,clickRefresh:Ss,refresh:hs,searchKey:S,current:Q,addCommom:M,list:h,theme:X,statsData:g,pools:i,select:ts,selectValue:V,selectList:J,label:B,labelValue:D,labelList:ds,changeSort:qs,changeSortLabel:Es,listLoading:E,languageValue:H,isSwitchDisplayMode:ns,autoPoolObj:xs}}});const v=e=>(be("data-v-112887e7"),e=e(),ke(),e),Oe={class:"upgrade-pools-list-container"},je={class:"content-top"},Ie={class:"content-top-left"},Le={key:0,class:"tag-list"},Ne=["onClick"],Be={class:"content-top-right"},$e={class:"radio"},Te={key:0,src:Ns},Re=v(()=>o("span",null,"Display all pools",-1)),Fe={class:"radio"},Pe={key:0,src:Ns},Ve=v(()=>o("span",null,"Farms",-1)),De={class:"search-select-box"},qe=v(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ee=[qe],Ue={key:0,class:"select-list"},Me=["onClick"],He={class:"search-select-box"},ze=v(()=>o("img",{src:Bs,alt:""},null,-1)),Je=v(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),We=[Je],Ge={key:0,class:"select-list"},Ke=["onClick"],Ye=v(()=>o("img",{src:Bs,alt:""},null,-1)),Qe={key:0,"aria-hidden":"true",class:"cardIcon"},Xe=v(()=>o("use",{"xlink:href":"#icon-icon-card"},null,-1)),Ze=[Xe],xe={key:1,"aria-hidden":"true",class:"listIcon"},so=v(()=>o("use",{"xlink:href":"#icon-icon-list1"},null,-1)),eo=[so],oo={key:0,class:"upgrade-loading"},ao={key:1,class:"table-contianer"},lo={class:"table"},ro={class:"table-header"},no={class:"table-tr"},to=v(()=>o("th",null,"Pools",-1)),io=v(()=>o("th",null,"Liquidity",-1)),uo=v(()=>o("th",null,"Volume (24H)",-1)),co=v(()=>o("th",null,null,-1)),vo=v(()=>o("th",null,"Rewards",-1)),ho={class:"hover-box"},po={class:"apr-hover-content"},_o=v(()=>o("th",null,"Action",-1)),go={class:"table-body"},fo=["onClick"],bo={class:"token"},ko={class:"img-box"},wo={key:0,class:"pool-warning"},yo={class:"img-box img-last-box"},Ao={key:0,class:"pool-warning"},Co={class:"name"},So={class:"top"},mo={class:"token-name"},Oo={class:"tokena"},jo={class:"tokenb"},Io={class:"fee-tier-top"},Lo={key:0,class:"isFarming"},No=v(()=>o("img",{src:$s,alt:""},null,-1)),Bo=v(()=>o("div",{class:"hover-text"},"Farming rewards available",-1)),$o=[No,Bo],To={key:1,class:"isFarming"},Ro=v(()=>o("img",{src:Ts,alt:""},null,-1)),Fo=v(()=>o("div",{class:"hover-text"},"Vault available",-1)),Po=[Ro,Fo],Vo={key:2,class:"pool-warning"},Do=v(()=>o("img",{src:Rs,alt:""},null,-1)),qo={class:"hover-text"},Eo={class:"label-all"},Uo={key:0},Mo={key:0},Ho={class:"skeleton-box"},zo={key:1},Jo={key:2},Wo={class:"skeleton-box"},Go={key:3},Ko=v(()=>o("td",null,null,-1)),Yo={key:4},Qo={class:"skeleton-box"},Xo={key:5},Zo={class:"rewards-hover"},xo={alt:""},sa={key:6},ea={key:7},oa={class:"skeleton-box"},aa={class:"hover-box"},la={key:0,class:"apr-hover-content"},ra={key:2,class:"item-container"},na={class:"h5-pool-item"},ta={class:"token"},da={class:"token"},ia={class:"img-box"},ua={key:0,class:"pool-warning"},ca={class:"img-box img-last-box"},va={key:0,class:"pool-warning"},ha={class:"name"},pa={class:"top"},_a={class:"token-name"},ga={class:"tokena"},fa={class:"tokenb"},ba={class:"fee-tier-top"},ka={key:0,class:"isFarming"},wa=v(()=>o("img",{src:$s,alt:""},null,-1)),ya=v(()=>o("div",{class:"hover-text"},"Farming rewards available",-1)),Aa=[wa,ya],Ca={key:1,class:"isFarming"},Sa=v(()=>o("img",{src:Ts,alt:""},null,-1)),ma=v(()=>o("div",{class:"hover-text"},"Vault available",-1)),Oa=[Sa,ma],ja={key:2,class:"pool-warning"},Ia=v(()=>o("img",{src:Rs,alt:""},null,-1)),La={class:"hover-text"},Na={class:"label-all"},Ba={key:0},$a={class:"bottom"},Ta={class:"row"},Ra=v(()=>o("div",{class:"left"},"APR (24H)",-1)),Fa={key:0,class:"right"},Pa={class:"apr-hover-content"},Va={class:"row"},Da=v(()=>o("div",{class:"left"},"Liquidity",-1)),qa={key:0,class:"right"},Ea={key:1,class:"right"},Ua={class:"row"},Ma=v(()=>o("div",{class:"left"},"Volume (24H)",-1)),Ha={key:0,class:"right"},za={key:1,class:"right"},Ja={class:"row"},Wa=v(()=>o("div",{class:"left"},"Rewards",-1)),Ga={key:0,class:"right"},Ka={key:1,class:"right reward-right"},Ya={class:"rewards-hover"},Qa={alt:""},Xa={key:3,class:"no-data"},Za={key:0,src:Ce},xa={key:1,src:Se};function sl(e,I,z,Cs,hs,Y){const ns=se,ts=ee,V=oe,J=ae,B=we,D=le,ds=re,q=fe("image");return l(),r("div",Oe,[o("div",je,[o("div",Ie,[e.tabArr.length>1?(l(),r("div",Le,[(l(!0),r(T,null,P(e.tabArr,(s,h)=>(l(),r("div",{key:h,class:R(["tag-item",s==e.pools.currentPoolTab?`tag-active tab-num-${e.tabArr.length}`:`tab-num-${e.tabArr.length}`]),onClick:S=>e.changeTab(s)},_(s),11,Ne))),128))])):f("",!0),y(ns,{ref:"childTokenSelectRef"},null,512)]),o("div",Be,[o("div",{class:R(["tab-item",e.isSelectAll?"tab-item-active":""]),onClick:I[0]||(I[0]=_s(s=>e.clickDisplayAll(),["stop"]))},[o("div",$e,[e.isSelectAll&&e.store.theme=="sui"?(l(),r("img",Te)):f("",!0)]),Re],2),o("div",{class:R(["tab-item",e.isFarms?"tab-item-active tab-item-farms-active":""]),onClick:I[1]||(I[1]=_s(s=>e.clickFarms(),["stop"]))},[o("div",Fe,[e.isFarms&&e.store.theme=="sui"?(l(),r("img",Pe)):f("",!0)]),Ve],2),o("div",De,[o("div",{class:"search-select search-label",onClick:I[2]||(I[2]=_s(()=>{e.store.setIsSelect("pools"),e.label=!e.label,e.select=!1},["stop"]))},[o("span",null,_(e.$t("newAdd.label")),1),o("div",null,[N(_(e.labelValue)+" ",1),(l(),r("svg",{"aria-hidden":"true",class:R(e.label?"show-icon icon":"icon")},Ee,2))]),e.label?(l(),r("div",Ue,[(l(!0),r(T,null,P(e.labelList,(s,h)=>(l(),r("div",{key:h,class:"select-menu-item",onClick:S=>e.changeSortLabel(s)},_(s),9,Me))),128))])):f("",!0)])]),o("div",He,[o("div",{class:"search-select",onClick:I[3]||(I[3]=_s(()=>{e.store.setIsSelect("pools"),e.select=!e.select,e.label=!1},["stop"]))},[o("span",null,_(e.$t("newAdd.sortBy")),1),o("div",null,[N(_(e.selectValue)+" ",1),ze,(l(),r("svg",{"aria-hidden":"true",class:R(e.select?"show-icon icon":"icon")},We,2))]),e.select?(l(),r("div",Ge,[(l(!0),r(T,null,P(e.selectList,(s,h)=>(l(),r("div",{key:h,class:"select-menu-item",onClick:S=>e.changeSort(s)},[N(_(s)+" ",1),Ye],8,Ke))),128))])):f("",!0)])]),o("div",{class:"change-view",onClick:I[4]||(I[4]=s=>e.clickViewCard())},[e.isViewCard&&e.current[0]=="pools"?(l(),r("svg",Qe,Ze)):(l(),r("svg",xe,eo))])])]),e.listLoading||e.isSwitchDisplayMode?(l(),r("div",oo,[y(ts,{loading:e.listLoading||e.isSwitchDisplayMode,type:e.isViewCard?"poolsCard":"poolsList"},null,8,["loading","type"])])):f("",!0),!e.isSwitchDisplayMode&&!e.isViewCard&&!e.listLoading?(l(),r("div",ao,[o("table",lo,[o("thead",ro,[o("tr",no,[to,io,uo,co,vo,o("th",null,[o("span",ho,[N(" APR (24H) "),o("div",po,[y(V,{class:"noHover apr-hover-con"})])])]),_o])]),o("tbody",go,[(l(!0),r(T,null,P(e.showList,s=>{var h,S,Q,W,A,E,L,m,H,p,X,i;return l(),r("tr",{key:s.address,class:R(["table-tr",e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none"]),onClick:g=>s.needReverse?e.router.push(`/liquidity/deposit?poolAddress=${s.address}`):e.router.push(`/liquidity/deposit?poolAddress=${s.address}`)},[o("td",null,[o("div",bo,[o("div",ko,[K(o("img",null,null,512),[[q,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(W=(Q=e.pools)==null?void 0:Q.tokensObj[s.coinB.address])!=null&&W.isSelfBuilt:(S=(h=e.pools)==null?void 0:h.tokensObj[s.coinA.address])!=null&&S.isSelfBuilt)?(l(),r("div",wo)):f("",!0)]),o("div",yo,[K(o("img",null,null,512),[[q,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(E=(A=e.pools)==null?void 0:A.tokensObj[s.coinA.address])!=null&&E.isSelfBuilt:(m=(L=e.pools)==null?void 0:L.tokensObj[s.coinB.address])!=null&&m.isSelfBuilt)?(l(),r("div",Ao)):f("",!0)]),o("div",Co,[o("div",So,[o("p",mo,[o("span",Oo,[N(_(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),y(J,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),N(" - "),o("span",jo,[N(_(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),y(J,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",Io,_((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",Lo,$o)):f("",!0),e.chainName=="Sui"&&e.autoPoolObj[s.address]&&("config"in e?e.config:k(vs)).hasVault?(l(),r("div",To,Po)):f("",!0),(p=(H=e.pools)==null?void 0:H.tokensObj[s.coinA.address])!=null&&p.isSelfBuilt||(i=(X=e.pools)==null?void 0:X.tokensObj[s.coinB.address])!=null&&i.isSelfBuilt?(l(),r("div",Vo,[Do,o("div",qo,_(e.t("newAdd.poolWarning")),1)])):f("",!0)]),o("div",Eo,[(l(!0),r(T,null,P(s.labels,(g,F)=>(l(),r("div",{key:F,class:R(["label",g])},[g!=="Native"?(l(),r("span",Uo,_(g),1)):f("",!0)],2))),128))])])])]),("checkNullObj"in e?e.checkNullObj:k(G))(e.store.statsData)?(l(),r("td",Mo,[o("div",Ho,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),r("td",zo,"$"+_(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.liqidity,2)),1)),("checkNullObj"in e?e.checkNullObj:k(G))(e.store.statsData)?(l(),r("td",Jo,[o("div",Wo,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),r("td",Go,"$"+_(Number(s.vol)!==0&&Number(s.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.vol,2)),1)),Ko,("checkNullObj"in e?e.checkNullObj:k(G))(e.store.statsData)?(l(),r("td",Yo,[o("div",Qo,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("td",Xo,[(l(!0),r(T,null,P(s.rewardes,g=>{var F;return l(),r("div",{key:g.address,class:R(["rewarder-token",g.day===0?"reward-none":""])},[K(o("img",null,null,512),[[q,e.getCoinIcon((F=e.pools)==null?void 0:F.tokensObj[g.coinAddress])]]),o("div",Zo,[K(o("img",xo,null,512),[[q,g.logoUrl?g.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:k(rs))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:k(rs))("/image/coins/sui-unknown.png")]]),o("span",null,_(`${g.day} ${g.symbol} per day`),1)])],2)}),128))])):(l(),r("td",sa," ")),("checkNullObj"in e?e.checkNullObj:k(G))(e.store.statsData)?(l(),r("td",ea,[o("div",oa,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),r("td",{key:8,class:R(s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"noCursor")},[o("span",aa,[o("i",null,_(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.apr,2))+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",la,[y(V,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):f("",!0)])],2)),o("td",null,[s.needReverse?(l(),ys(D,{key:0,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:As(()=>[N("+")]),_:2},1032,["to"])):(l(),ys(D,{key:1,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:As(()=>[N("+")]),_:2},1032,["to"]))])],10,fo)}),128))])])])):f("",!0),!e.isSwitchDisplayMode&&e.isViewCard&&!e.listLoading?(l(),r("div",ra,[e.showList&&e.showList.length>0?(l(),r(T,{key:0},[(l(!0),r(T,null,P(e.showList,(s,h)=>(l(),ys(ds,{key:h,"l-item":s,"is-select-all":e.isSelectAll,"is-farms":e.isFarms},null,8,["l-item","is-select-all","is-farms"]))),128)),(l(!0),r(T,null,P(e.patchNumber,s=>(l(),r("div",{key:s,class:"patch-item"}))),128))],64)):f("",!0)])):f("",!0),o("div",na,[(l(!0),r(T,null,P(e.showList,s=>{var h,S,Q,W,A,E,L,m,H,p,X,i;return l(),r("div",{key:s.address,class:R([e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none","item"])},[o("div",ta,[o("div",da,[o("div",ia,[K(o("img",null,null,512),[[q,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(W=(Q=e.pools)==null?void 0:Q.tokensObj[s.coinB.address])!=null&&W.isSelfBuilt:(S=(h=e.pools)==null?void 0:h.tokensObj[s.coinA.address])!=null&&S.isSelfBuilt)?(l(),r("div",ua)):f("",!0)]),o("div",ca,[K(o("img",null,null,512),[[q,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(E=(A=e.pools)==null?void 0:A.tokensObj[s.coinA.address])!=null&&E.isSelfBuilt:(m=(L=e.pools)==null?void 0:L.tokensObj[s.coinB.address])!=null&&m.isSelfBuilt)?(l(),r("div",va)):f("",!0)]),o("div",ha,[o("div",pa,[o("p",_a,[o("span",ga,[N(_(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),y(J,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),N(" - "),o("span",fa,[N(_(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),y(J,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",ba,_((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",ka,Aa)):f("",!0),e.chainName=="Sui"&&e.autoPoolObj[s.address]&&("config"in e?e.config:k(vs)).hasVault?(l(),r("div",Ca,Oa)):f("",!0),(p=(H=e.pools)==null?void 0:H.tokensObj[s.coinA.address])!=null&&p.isSelfBuilt||(i=(X=e.pools)==null?void 0:X.tokensObj[s.coinB.address])!=null&&i.isSelfBuilt?(l(),r("div",ja,[Ia,o("div",La,_(e.t("newAdd.poolWarning")),1)])):f("",!0)]),o("div",Na,[(l(!0),r(T,null,P(s.labels,(g,F)=>(l(),r("div",{key:F,class:R(["label",g])},[g!=="Native"?(l(),r("span",Ba,_(g),1)):f("",!0)],2))),128))])])])]),o("div",$a,[o("div",Ta,[Ra,("checkNullObj"in e?e.checkNullObj:k(G))(e.store.statsData)?(l(),r("div",Fa,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),r("div",{key:1,class:R(["right theme-right",s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"noCursor"])},[o("i",null,_(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.apr,2))+"%",1),o("div",Pa,[y(V,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])],2))]),o("div",Va,[Da,("checkNullObj"in e?e.checkNullObj:k(G))(e.store.statsData)?(l(),r("div",qa,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),r("div",Ea,"$"+_(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.liqidity,2)),1))]),o("div",Ua,[Ma,("checkNullObj"in e?e.checkNullObj:k(G))(e.store.statsData)?(l(),r("div",Ha,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),r("div",za,"$"+_(Number(s.vol)!==0&&Number(s.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.vol,2)),1))]),o("div",Ja,[Wa,("checkNullObj"in e?e.checkNullObj:k(G))(e.store.statsData)?(l(),r("div",Ga,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",Ka,[(l(!0),r(T,null,P(s.rewardes,g=>{var F;return l(),r("div",{key:g.address,class:"rewarder-token"},[K(o("img",null,null,512),[[q,e.getCoinIcon((F=e.pools)==null?void 0:F.tokensObj[g.coinAddress])]]),o("div",Ya,[K(o("img",Qa,null,512),[[q,g.logoUrl?g.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:k(rs))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:k(rs))("/image/coins/sui-unknown.png")]]),o("span",null,_(`${g.day} ${g.symbol} per day`),1)])])}),128))])):f("",!0)])]),y(D,{to:`/liquidity/deposit?poolAddress=${s.address}`,class:"add-btn"},{default:As(()=>[N("+ Add Liquidity")]),_:2},1032,["to"])],2)}),128))]),!e.isSwitchDisplayMode&&e.store.poolAmount!=="--"&&e.store.poolAmount<=0&&!e.listLoading?(l(),r("div",Xa,[e.theme=="default"?(l(),r("img",Za)):(l(),r("img",xa)),o("span",null,_(e.$t("common.poolsNotFound")),1)])):f("",!0)])}const Ol=ge(me,[["render",sl],["__scopeId","data-v-112887e7"]]);export{Ol as default};
