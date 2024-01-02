import{_ as ee}from"./upgrade-select-input.e6eff5f0.js";import{_ as oe}from"./upgrade-loading.d79ebdfe.js";import{_ as ae}from"./apr-tips.2df7049d.js";import{_ as le}from"./coin-tips.6265495c.js";import{_ as re}from"./nuxt-link.23c0c1d5.js";import{_ as ne}from"./pools-list-item.c75d9828.js";import{u as te,c as vs}from"./sha256.3c86449e.js";import{u as de,a as M,k as ws,d as ie,l as ue,j as Is,c as K}from"./pool.f82ea964.js";import{i as rs}from"./import-icon.de3e6c66.js";import{a as ce,y as ve,b as he,r as w,l as m,H as pe,q as es,m as _e,Y as ge,e as fe,s as be,o as l,f as r,h as o,F as T,E as P,x as f,i as y,A as R,z as _s,v as _,j as N,t as Y,u as k,c as ys,w as As,p as ke,k as we,M as ye}from"./entry.34270a91.js";/* empty css              */import{p as Ae}from"./precision.a7a6c57b.js";import{u as me}from"./autoPool.59ddb807.js";import{_ as Ns}from"./icon-selected_3x.09e9a6f0.js";import{_ as Bs}from"./icon_on_2x.5e96733d.js";import{_ as $s,a as Ts}from"./farms.72563f67.js";import{_ as Rs}from"./icon_autopools_2x.bb51a019.js";import{a as Fs}from"./coin-select.b334804c.js";import{_ as Ce,a as Se}from"./img-no-Positions_2x.ccb0cf0b.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";/* empty css              */import"./decimal.0bdeb344.js";/* empty css              */const Oe=ce({setup(){const{t:e,locale:L}=ve(),z=he(),ms=w(!1),hs=w(!1),G=w(!1),ns=w(!1),ts=w(!1),V=w("VOL"),J=w(["APR","TVL"]),B=w(!1),D=w(e("tab.all")),ds=w([e("tab.wormhole"),e("tab.celer")]),q=m(()=>{const a=Array.from(new Set(i.value.poolConfigList.flatMap(d=>!d.category||d.category==""?"All":d.category)));return console.log(a,"newArr"),a.length<=1?[]:a}),s=a=>{i.value.setCurrentPoolTab(a)},h=w([]),C=w(""),Q=w(["pools"]),W=de(),A=te(),E=w(!0),I=w(!1),S=w(!1),H=w(""),p=m(()=>A),X=m(()=>A.theme),i=m(()=>W),g=m(()=>A.statsData);pe(()=>{var c,u,t;const a=(t=(u=(c=z==null?void 0:z.currentRoute)==null?void 0:c.value)==null?void 0:u.query)==null?void 0:t.language;a&&Ps(a),H.value=L.value,document.addEventListener("click",()=>{ts.value=!1,B.value=!1});const d=localStorage.getItem(`pools-${Z.value}-selectall`),n=localStorage.getItem(`pools-${Z.value}-farms`),b=localStorage.getItem(`pools-${Z.value}-viewCard`);I.value=d==="true",S.value=n==="true",G.value=b==="true"}),es(()=>G.value,async(a,d)=>{a!==d&&(ns.value=!0,await ue(1500),ns.value=!1)}),es(()=>p.value.chainName,(a,d)=>{a&&A.getStatsData(a,p.value.filterCoinsObj)},{immediate:!0});const{setLang:F}=A,Ps=a=>{F(a),L.value=a},Vs=(a,d)=>a&&d?Ae.plus(ws(a),ws(d)):a||0,gs=a=>{let d=0;return a&&a.forEach(n=>{d+=ws(String(n))}),String(ie(String(d),2))},Ds=(a=[])=>{const d=a&&a.length>0?a:Object.values(i.value.poolsObj),n=[];console.log(d,"====>newPoolList"),d.filter(u=>!u.is_closed).forEach(u=>{var is,us,cs,Ss,Os,js,Ls;const t=p.value.addressLpTokens[u.address],U=i.value.poolsObj[u.address];let as,$,ls,ps;t&&(as=t.rewarder_apr[0]?Number(t.rewarder_apr[0].substring(0,t.rewarder_apr[0].length-1)):0,$=t.rewarder_apr[1]?Number(t.rewarder_apr[1].substring(0,t.rewarder_apr[1].length-1)):0,ls=t.rewarder_apr[2]?Number(t.rewarder_apr[2].substring(0,t.rewarder_apr[2].length-1)):0,ps=as+$+ls);const ss=u.needReverse?((us=i.value.tokensObj[u.coinB.address])==null?void 0:us.labels)||[]:((is=i.value.tokensObj[u.coinA.address])==null?void 0:is.labels)||[],bs=u.needReverse?((cs=i.value.tokensObj[u.coinA.address])==null?void 0:cs.labels)||[]:((Ss=i.value.tokensObj[u.coinB.address])==null?void 0:Ss.labels)||[],ks=[...new Set(ss.concat(bs))];n.push({...u,liqidity:t?t.tvl_in_usd:"0.00000000001",vol:t?t.vol_in_usd_24h:"0",apr:t&&t.apr_7day?(Os=t.apr_7day)==null?void 0:Os.replace("%",""):"--",fee:u.fee?u.fee:U!=null&&U.fee?U.fee:"--",aprNum:t&&t.apr_7day?String(Number(t.apr_7day.substring(0,t.apr_7day.length-1))+ps):"0",rewarder_apr:gs(t&&t.rewarder_apr),aprTotal:Vs(t&&t.apr_7day,t&&gs(t.rewarder_apr)),rewarders0:t&&t.rewarder_apr[0],rewarders1:t&&t.rewarder_apr[1],rewarders2:t&&t.rewarder_apr[2],labels:ks,isFarming:u==null?void 0:u.isFarming,fee_24_h:t&&t.fee_24_h,isAuthorized:!!(os.value[(js=u==null?void 0:u.token_a)==null?void 0:js.address]&&os.value[(Ls=u==null?void 0:u.token_b)==null?void 0:Ls.address])})});let b=[];if(V.value=="APR"?b=n.sort((u,t)=>t.aprNum-u.aprNum):V.value=="VOL"?b=n.sort((u,t)=>t.vol-u.vol):b=n.sort((u,t)=>t.liqidity-u.liqidity),D.value!=e("tab.all")){const u=[];b.forEach(t=>{t.labels.indexOf(D.value)!==-1&&u.push(t)}),h.value=u}else h.value=b;if(C.value){var c=new RegExp("[\\u4E00-\\u9FFF]+","g");if(c.test(C.value)){C.value="";return}const u=h.value.filter(t=>t.symbol.toLowerCase().includes(C.value.toLowerCase()));h.value=u}console.log(h.value,"=====>>>>list.value"),E.value=!1},os=m(()=>{if(i.value.tokens&&i.value.tokens.length>0){const a={};return i.value.tokens.forEach(d=>{a[d.address]={...d}}),a}return null});es(()=>[os.value,i.value.poolConfigList,p.value.chainName,p.value.addressLpTokens,C.value,V.value,D.value],([a,d,n,b])=>{a&&d&&(d==null?void 0:d.length)>0&&d[0]&&n&&(n!=null&&n.toLowerCase().includes(d[0].chain))&&Ds(d)},{immediate:!0,deep:!0}),_e();const qs=me(),Cs=()=>{E.value=!0,hs.value=!0,A.getStatsData(p.value.chainName,p.value.filterCoinsObj),W.setPoolConfigList(p.value.chainName,p.value.filterCoinsObj),setTimeout(()=>{hs.value=!1},1e3)};es(()=>p.value.isRefresh,a=>{var n;const d=(n=z==null?void 0:z.currentRoute)==null?void 0:n.value.name.split("-")[1];a&&(!d||d=="list"||d=="")&&Cs()});const Es=a=>{const d=[];d.push(V.value),J.value.forEach((n,b)=>{n!=a&&d.push(n)}),J.value=d,V.value=a},Us=a=>{const d=[];ds.value.forEach((n,b)=>{n==a?d[b]=D.value:d[b]=n}),ds.value=d,D.value=a};es(()=>A.lang,a=>{H.value=a});const Ms=m(()=>vs[p.value.chainName]);es(()=>p.value.isSelect,a=>{a!=="pools"&&(ts.value=!1,B.value=!1)});const Hs=m(()=>i.value.poolConfigList.filter(d=>d.address==vs[p.value.chainName].newPositionAddress)[0]),zs=m(()=>vs[p.value.chainName].hasCreatePool),Z=m(()=>p.value.chainName),Js=()=>{localStorage.setItem(`pools-${Z.value}-selectall`,I.value?"":"true"),I.value=!I.value},Ws=()=>{localStorage.setItem(`pools-${Z.value}-farms`,S.value?"":"true"),S.value=!S.value},Ks=()=>{localStorage.setItem(`pools-${Z.value}-viewCard`,G.value?"":"true"),G.value=!G.value},Ys=a=>{var d;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((d=i.value.tokensObj[a==null?void 0:a.address])==null?void 0:d.logo_url)||(p.value.theme==="default"?rs("/image/coins/unknown.png"):rs("/image/coins/sui-unknown.png"))},x=w(null),O=m(()=>x.value&&x.value.firstToken?x.value.firstToken:null),j=m(()=>x.value&&x.value.lastToken?x.value.lastToken:null),Gs=m(()=>{if(p.value.chainName!=="Sui")return h.value;if(os.value&&h.value&&h.value.length>0){const a=[];return h.value.forEach(n=>{var b,c;os.value[(b=n==null?void 0:n.token_a)==null?void 0:b.address]&&os.value[(c=n==null?void 0:n.token_b)==null?void 0:c.address]&&(S.value?n.isFarming&&n.rewarderInfo&&n.rewarderInfo.length>0&&(i.value.currentPoolTab=="All"&&(n.category==""||!n.category)||i.value.currentPoolTab!=="All"&&n.category==i.value.currentPoolTab)&&a.push(n):(i.value.currentPoolTab=="All"&&(n.category==""||!n.category)||i.value.currentPoolTab!=="All"&&n.category==i.value.currentPoolTab)&&a.push(n))}),a.filter((n,b)=>O.value&&j.value?n.coinA.address==O.value.address&&n.coinB.address==j.value.address||n.coinA.address==j.value.address&&n.coinB.address==O.value.address:O.value?n.coinA.address.toLowerCase().includes(O.value.address.toLowerCase())||n.coinB.address.toLowerCase().includes(O.value.address.toLowerCase()):j.value?n.coinA.address.toLowerCase().includes(j.value.address.toLowerCase())||n.coinB.address.toLowerCase().includes(j.value.address.toLowerCase()):a)}return[]}),fs=w([]),Qs=()=>{let a=[];a=h.value,console.log(a,"##pageList");const d=a.filter((c,u)=>O.value&&j.value?c.coinA.address==O.value.address&&c.coinB.address==j.value.address||c.coinA.address==j.value.address&&c.coinB.address==O.value.address:O.value?c.coinA.address.toLowerCase().includes(O.value.address.toLowerCase())||c.coinB.address.toLowerCase().includes(O.value.address.toLowerCase()):j.value?c.coinA.address.toLowerCase().includes(j.value.address.toLowerCase())||c.coinB.address.toLowerCase().includes(j.value.address.toLowerCase()):a);let n=[],b=[];d.forEach((c,u)=>{const t=[];if(c.rewarderInfo&&c.rewarderInfo.length>0){c.rewarderInfo.forEach(($,ls)=>{var is,us,cs;const ps=(is=i.value.tokensObj[$.coinAddress])==null?void 0:is.decimals,ss=Is($.emissionsEveryDay/Math.pow(10,ps),4),bs=Number(ss)>0?M(ss):ss,ks=Is(Number(ss)*i.value.RATES[$.coinAddress]&&i.value.RATES[$.coinAddress].price,4);t.push({...$,logoUrl:(us=i.value.tokensObj[$.coinAddress])==null?void 0:us.logoURI,day:bs,dayUSD:ks,symbol:(cs=i.value.tokensObj[$.coinAddress])==null?void 0:cs.symbol,rewarders:c[`rewarders${ls}`]&&c[`rewarders${ls}`].replace("%",""),rewarder_display:c[`rewarder_display${ls+1}`],resultDay:ss})});const U=t.filter($=>$.rewarder_display);let as=[];(!c.rewarderInfo||c.rewarderInfo.length<1||JSON.stringify(c.rewarderInfo)!==JSON.stringify(U))&&(as=U),(i.value.currentPoolTab=="All"||i.value.currentPoolTab!=="All"&&c.category==i.value.currentPoolTab)&&(b.push({...c,rewardes:as}),n.push({...c,rewardes:as}))}else(i.value.currentPoolTab=="All"||i.value.currentPoolTab!=="All"&&c.category==i.value.currentPoolTab)&&n.push({...c})}),console.log(n,"121arrnewValnewValnewVal"),fs.value=S.value?b:n,E.value||(I.value?S.value?A.setPoolAmount(b.length):A.setPoolAmount(n.length):A.setPoolAmount(Gs.value.length))};ge(()=>{A.setPoolAmount("--")}),es(()=>[O.value,j.value,h.value,S.value,I.value,i.value.currentPoolTab],([a,d,n,b,c,u])=>{var t,U;(a&&((t=i==null?void 0:i.value.tokensObj[a.address])!=null&&t.isSelfBuilt)||d&&((U=i==null?void 0:i.value.tokensObj[d.address])!=null&&U.isSelfBuilt))&&!c?fs.value=[]:(a||d||n||b)&&(console.log("newValnewValnewVal",a,d,n,JSON.stringify(n)),Qs())},{deep:!0});const Xs=m(()=>p.value.poolAmount!=="--"?4-Number(p.value.poolAmount)%4:0),Zs=a=>i.value.tokensObj&&i.value.tokensObj[a]&&i.value.tokensObj[a].labels,xs=m(()=>qs),se=m(()=>xs.value.autoPoolObj);return{tabArr:q,changeTab:s,getLabel:Zs,patchNumber:Xs,getRewarderApr:gs,childTokenSelectRef:x,firstToken:O,lastToken:j,showList:fs,isFarms:S,getCoinIcon:Ys,isViewCard:G,clickDisplayAll:Js,clickFarms:Ws,clickViewCard:Ks,isSelectAll:I,chainName:Z,hasCreatePool:zs,store:p,lpInfo:Hs,config:Ms,t:e,router:z,loading:ms,clickRefresh:Cs,refresh:hs,searchKey:C,current:Q,addCommom:M,list:h,theme:X,statsData:g,pools:i,select:ts,selectValue:V,selectList:J,label:B,labelValue:D,labelList:ds,changeSort:Es,changeSortLabel:Us,listLoading:E,languageValue:H,isSwitchDisplayMode:ns,autoPoolObj:se}}});const v=e=>(ke("data-v-65c98465"),e=e(),we(),e),je={class:"upgrade-pools-list-container"},Le={class:"content-top"},Ie={class:"content-top-left"},Ne={key:0,class:"tag-list"},Be=["onClick"],$e={class:"content-top-right"},Te={class:"radio"},Re={key:0,src:Ns},Fe=v(()=>o("span",null,"Display all pools",-1)),Pe={class:"radio"},Ve={key:0,src:Ns},De=v(()=>o("span",null,"Farms",-1)),qe={class:"search-select-box"},Ee=v(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ue=[Ee],Me={key:0,class:"select-list"},He=["onClick"],ze={class:"search-select-box"},Je=v(()=>o("img",{src:Bs,alt:""},null,-1)),We=v(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ke=[We],Ye={key:0,class:"select-list"},Ge=["onClick"],Qe=v(()=>o("img",{src:Bs,alt:""},null,-1)),Xe={key:0,"aria-hidden":"true",class:"cardIcon"},Ze=v(()=>o("use",{"xlink:href":"#icon-icon-card"},null,-1)),xe=[Ze],so={key:1,"aria-hidden":"true",class:"listIcon"},eo=v(()=>o("use",{"xlink:href":"#icon-icon-list1"},null,-1)),oo=[eo],ao={key:0,class:"upgrade-loading"},lo={key:1,class:"table-contianer"},ro={class:"table"},no={class:"table-header"},to={class:"table-tr"},io=v(()=>o("th",null,"Pools",-1)),uo=v(()=>o("th",null,"Liquidity",-1)),co=v(()=>o("th",null,"Volume (24H)",-1)),vo=v(()=>o("th",null,null,-1)),ho=v(()=>o("th",null,"Rewards",-1)),po={class:"hover-box"},_o={class:"apr-hover-content"},go=v(()=>o("th",null,"Action",-1)),fo={class:"table-body"},bo=["onClick"],ko={class:"token"},wo={class:"img-box"},yo={key:0,class:"pool-warning"},Ao={class:"img-box img-last-box"},mo={key:0,class:"pool-warning"},Co={class:"name"},So={class:"top"},Oo={class:"token-name"},jo={class:"tokena"},Lo={class:"tokenb"},Io={class:"fee-tier-top"},No={key:0,class:"isFarming farming-logo"},Bo=v(()=>o("img",{class:"default-img",src:$s,alt:""},null,-1)),$o=v(()=>o("img",{class:"hover-img",src:Ts,alt:""},null,-1)),To=v(()=>o("div",{class:"hover-text"},"Farming rewards available",-1)),Ro=[Bo,$o,To],Fo={key:1,class:"isFarming vault-logo"},Po=v(()=>o("img",{src:Rs,alt:""},null,-1)),Vo=v(()=>o("div",{class:"hover-text"},"Vault available",-1)),Do=[Po,Vo],qo={key:2,class:"pool-warning"},Eo=v(()=>o("img",{src:Fs,alt:""},null,-1)),Uo={class:"hover-text"},Mo={class:"label-all"},Ho={key:0},zo={key:0},Jo={class:"skeleton-box"},Wo={key:1},Ko={key:2},Yo={class:"skeleton-box"},Go={key:3},Qo=v(()=>o("td",null,null,-1)),Xo={key:4},Zo={class:"skeleton-box"},xo={key:5},sa={class:"rewards-hover"},ea={alt:""},oa={key:6},aa={key:7},la={class:"skeleton-box"},ra={class:"hover-box"},na={key:0,class:"apr-hover-content"},ta={key:2,class:"item-container"},da={class:"h5-pool-item"},ia={class:"token"},ua={class:"token"},ca={class:"img-box"},va={key:0,class:"pool-warning"},ha={class:"img-box img-last-box"},pa={key:0,class:"pool-warning"},_a={class:"name"},ga={class:"top"},fa={class:"token-name"},ba={class:"tokena"},ka={class:"tokenb"},wa={class:"fee-tier-top"},ya={key:0,class:"isFarming farming-logo"},Aa=v(()=>o("img",{class:"default-img",src:$s,alt:""},null,-1)),ma=v(()=>o("img",{class:"hover-img",src:Ts,alt:""},null,-1)),Ca=v(()=>o("div",{class:"hover-text"},"Farming rewards available",-1)),Sa=[Aa,ma,Ca],Oa={key:1,class:"isFarming vault-logo"},ja=v(()=>o("img",{src:Rs,alt:""},null,-1)),La=v(()=>o("div",{class:"hover-text"},"Vault available",-1)),Ia=[ja,La],Na={key:2,class:"pool-warning"},Ba=v(()=>o("img",{src:Fs,alt:""},null,-1)),$a={class:"hover-text"},Ta={class:"label-all"},Ra={key:0},Fa={class:"bottom"},Pa={class:"row"},Va=v(()=>o("div",{class:"left"},"APR (24H)",-1)),Da={key:0,class:"right"},qa={class:"apr-hover-content"},Ea={class:"row"},Ua=v(()=>o("div",{class:"left"},"Liquidity",-1)),Ma={key:0,class:"right"},Ha={key:1,class:"right"},za={class:"row"},Ja=v(()=>o("div",{class:"left"},"Volume (24H)",-1)),Wa={key:0,class:"right"},Ka={key:1,class:"right"},Ya={class:"row"},Ga=v(()=>o("div",{class:"left"},"Rewards",-1)),Qa={key:0,class:"right"},Xa={key:1,class:"right reward-right"},Za={class:"rewards-hover"},xa={alt:""},sl={key:3,class:"no-data"},el={key:0,src:Ce},ol={key:1,src:Se};function al(e,L,z,ms,hs,G){const ns=ee,ts=oe,V=ae,J=le,B=ye,D=re,ds=ne,q=be("image");return l(),r("div",je,[o("div",Le,[o("div",Ie,[e.tabArr.length>1?(l(),r("div",Ne,[(l(!0),r(T,null,P(e.tabArr,(s,h)=>(l(),r("div",{key:h,class:R(["tag-item",s==e.pools.currentPoolTab?`tag-active tab-num-${e.tabArr.length}`:`tab-num-${e.tabArr.length}`]),onClick:C=>e.changeTab(s)},_(s),11,Be))),128))])):f("",!0),y(ns,{ref:"childTokenSelectRef"},null,512)]),o("div",$e,[o("div",{class:R(["tab-item",e.isSelectAll?"tab-item-active":""]),onClick:L[0]||(L[0]=_s(s=>e.clickDisplayAll(),["stop"]))},[o("div",Te,[e.isSelectAll&&e.store.theme=="sui"?(l(),r("img",Re)):f("",!0)]),Fe],2),o("div",{class:R(["tab-item",e.isFarms?"tab-item-active tab-item-farms-active":""]),onClick:L[1]||(L[1]=_s(s=>e.clickFarms(),["stop"]))},[o("div",Pe,[e.isFarms&&e.store.theme=="sui"?(l(),r("img",Ve)):f("",!0)]),De],2),o("div",qe,[o("div",{class:"search-select search-label",onClick:L[2]||(L[2]=_s(()=>{e.store.setIsSelect("pools"),e.label=!e.label,e.select=!1},["stop"]))},[o("span",null,_(e.$t("newAdd.label")),1),o("div",null,[N(_(e.labelValue)+" ",1),(l(),r("svg",{"aria-hidden":"true",class:R(e.label?"show-icon icon":"icon")},Ue,2))]),e.label?(l(),r("div",Me,[(l(!0),r(T,null,P(e.labelList,(s,h)=>(l(),r("div",{key:h,class:"select-menu-item",onClick:C=>e.changeSortLabel(s)},_(s),9,He))),128))])):f("",!0)])]),o("div",ze,[o("div",{class:"search-select",onClick:L[3]||(L[3]=_s(()=>{e.store.setIsSelect("pools"),e.select=!e.select,e.label=!1},["stop"]))},[o("span",null,_(e.$t("newAdd.sortBy")),1),o("div",null,[N(_(e.selectValue)+" ",1),Je,(l(),r("svg",{"aria-hidden":"true",class:R(e.select?"show-icon icon":"icon")},Ke,2))]),e.select?(l(),r("div",Ye,[(l(!0),r(T,null,P(e.selectList,(s,h)=>(l(),r("div",{key:h,class:"select-menu-item",onClick:C=>e.changeSort(s)},[N(_(s)+" ",1),Qe],8,Ge))),128))])):f("",!0)])]),o("div",{class:"change-view",onClick:L[4]||(L[4]=s=>e.clickViewCard())},[e.isViewCard&&e.current[0]=="pools"?(l(),r("svg",Xe,xe)):(l(),r("svg",so,oo))])])]),e.listLoading||e.isSwitchDisplayMode?(l(),r("div",ao,[y(ts,{loading:e.listLoading||e.isSwitchDisplayMode,type:e.isViewCard?"poolsCard":"poolsList"},null,8,["loading","type"])])):f("",!0),!e.isSwitchDisplayMode&&!e.isViewCard&&!e.listLoading?(l(),r("div",lo,[o("table",ro,[o("thead",no,[o("tr",to,[io,uo,co,vo,ho,o("th",null,[o("span",po,[N(" APR (24H) "),o("div",_o,[y(V,{class:"noHover apr-hover-con"})])])]),go])]),o("tbody",fo,[(l(!0),r(T,null,P(e.showList,s=>{var h,C,Q,W,A,E,I,S,H,p,X,i;return l(),r("tr",{key:s.address,class:R(["table-tr",e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none"]),onClick:g=>s.needReverse?e.router.push(`/liquidity/deposit?poolAddress=${s.address}`):e.router.push(`/liquidity/deposit?poolAddress=${s.address}`)},[o("td",null,[o("div",ko,[o("div",wo,[Y(o("img",null,null,512),[[q,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(W=(Q=e.pools)==null?void 0:Q.tokensObj[s.coinB.address])!=null&&W.isSelfBuilt:(C=(h=e.pools)==null?void 0:h.tokensObj[s.coinA.address])!=null&&C.isSelfBuilt)?(l(),r("div",yo)):f("",!0)]),o("div",Ao,[Y(o("img",null,null,512),[[q,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(E=(A=e.pools)==null?void 0:A.tokensObj[s.coinA.address])!=null&&E.isSelfBuilt:(S=(I=e.pools)==null?void 0:I.tokensObj[s.coinB.address])!=null&&S.isSelfBuilt)?(l(),r("div",mo)):f("",!0)]),o("div",Co,[o("div",So,[o("p",Oo,[o("span",jo,[N(_(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),y(J,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),N(" - "),o("span",Lo,[N(_(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),y(J,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",Io,_((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",No,Ro)):f("",!0),e.chainName=="Sui"&&e.autoPoolObj[s.address]&&("config"in e?e.config:k(vs)).hasVault?(l(),r("div",Fo,Do)):f("",!0),(p=(H=e.pools)==null?void 0:H.tokensObj[s.coinA.address])!=null&&p.isSelfBuilt||(i=(X=e.pools)==null?void 0:X.tokensObj[s.coinB.address])!=null&&i.isSelfBuilt?(l(),r("div",qo,[Eo,o("div",Uo,_(e.t("newAdd.poolWarning")),1)])):f("",!0)]),o("div",Mo,[(l(!0),r(T,null,P(s.labels,(g,F)=>(l(),r("div",{key:F,class:R(["label",g])},[g!=="Native"?(l(),r("span",Ho,_(g),1)):f("",!0)],2))),128))])])])]),("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("td",zo,[o("div",Jo,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),r("td",Wo," $"+_(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.liqidity,2)),1)),("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("td",Ko,[o("div",Yo,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),r("td",Go," $"+_(Number(s.vol)!==0&&Number(s.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.vol,2)),1)),Qo,("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("td",Xo,[o("div",Zo,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("td",xo,[(l(!0),r(T,null,P(s.rewardes,g=>{var F;return l(),r("div",{key:g.address,class:R(["rewarder-token",g.day===0?"reward-none":""])},[Y(o("img",null,null,512),[[q,e.getCoinIcon((F=e.pools)==null?void 0:F.tokensObj[g.coinAddress])]]),o("div",sa,[Y(o("img",ea,null,512),[[q,g.logoUrl?g.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:k(rs))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:k(rs))("/image/coins/sui-unknown.png")]]),o("span",null,_(`${g.day} ${g.symbol} per day`),1)])],2)}),128))])):(l(),r("td",oa," ")),("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("td",aa,[o("div",la,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),r("td",{key:8,class:R(s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"noCursor")},[o("span",ra,[o("i",null,_(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.apr,2))+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",na,[y(V,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):f("",!0)])],2)),o("td",null,[s.needReverse?(l(),ys(D,{key:0,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:As(()=>[N("+")]),_:2},1032,["to"])):(l(),ys(D,{key:1,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:As(()=>[N("+")]),_:2},1032,["to"]))])],10,bo)}),128))])])])):f("",!0),!e.isSwitchDisplayMode&&e.isViewCard&&!e.listLoading?(l(),r("div",ta,[e.showList&&e.showList.length>0?(l(),r(T,{key:0},[(l(!0),r(T,null,P(e.showList,(s,h)=>(l(),ys(ds,{key:h,"l-item":s,"is-select-all":e.isSelectAll,"is-farms":e.isFarms},null,8,["l-item","is-select-all","is-farms"]))),128)),(l(!0),r(T,null,P(e.patchNumber,s=>(l(),r("div",{key:s,class:"patch-item"}))),128))],64)):f("",!0)])):f("",!0),o("div",da,[(l(!0),r(T,null,P(e.showList,s=>{var h,C,Q,W,A,E,I,S,H,p,X,i;return l(),r("div",{key:s.address,class:R([e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none","item"])},[o("div",ia,[o("div",ua,[o("div",ca,[Y(o("img",null,null,512),[[q,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(W=(Q=e.pools)==null?void 0:Q.tokensObj[s.coinB.address])!=null&&W.isSelfBuilt:(C=(h=e.pools)==null?void 0:h.tokensObj[s.coinA.address])!=null&&C.isSelfBuilt)?(l(),r("div",va)):f("",!0)]),o("div",ha,[Y(o("img",null,null,512),[[q,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(E=(A=e.pools)==null?void 0:A.tokensObj[s.coinA.address])!=null&&E.isSelfBuilt:(S=(I=e.pools)==null?void 0:I.tokensObj[s.coinB.address])!=null&&S.isSelfBuilt)?(l(),r("div",pa)):f("",!0)]),o("div",_a,[o("div",ga,[o("p",fa,[o("span",ba,[N(_(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),y(J,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),N(" - "),o("span",ka,[N(_(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),y(J,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",wa,_((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",ya,Sa)):f("",!0),e.chainName=="Sui"&&e.autoPoolObj[s.address]&&("config"in e?e.config:k(vs)).hasVault?(l(),r("div",Oa,Ia)):f("",!0),(p=(H=e.pools)==null?void 0:H.tokensObj[s.coinA.address])!=null&&p.isSelfBuilt||(i=(X=e.pools)==null?void 0:X.tokensObj[s.coinB.address])!=null&&i.isSelfBuilt?(l(),r("div",Na,[Ba,o("div",$a,_(e.t("newAdd.poolWarning")),1)])):f("",!0)]),o("div",Ta,[(l(!0),r(T,null,P(s.labels,(g,F)=>(l(),r("div",{key:F,class:R(["label",g])},[g!=="Native"?(l(),r("span",Ra,_(g),1)):f("",!0)],2))),128))])])])]),o("div",Fa,[o("div",Pa,[Va,("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("div",Da,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),r("div",{key:1,class:R(["right theme-right",s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"noCursor"])},[o("i",null,_(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.apr,2))+"%",1),o("div",qa,[y(V,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])],2))]),o("div",Ea,[Ua,("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("div",Ma,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),r("div",Ha," $"+_(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.liqidity,2)),1))]),o("div",za,[Ja,("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("div",Wa,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),r("div",Ka," $"+_(Number(s.vol)!==0&&Number(s.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:k(M))(s.vol,2)),1))]),o("div",Ya,[Ga,("checkNullObj"in e?e.checkNullObj:k(K))(e.store.statsData)?(l(),r("div",Qa,[y(B,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),r("div",Xa,[(l(!0),r(T,null,P(s.rewardes,g=>{var F;return l(),r("div",{key:g.address,class:"rewarder-token"},[Y(o("img",null,null,512),[[q,e.getCoinIcon((F=e.pools)==null?void 0:F.tokensObj[g.coinAddress])]]),o("div",Za,[Y(o("img",xa,null,512),[[q,g.logoUrl?g.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:k(rs))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:k(rs))("/image/coins/sui-unknown.png")]]),o("span",null,_(`${g.day} ${g.symbol} per day`),1)])])}),128))])):f("",!0)])]),y(D,{to:`/liquidity/deposit?poolAddress=${s.address}`,class:"add-btn"},{default:As(()=>[N("+ Add Liquidity")]),_:2},1032,["to"])],2)}),128))]),!e.isSwitchDisplayMode&&e.store.poolAmount!=="--"&&e.store.poolAmount<=0&&!e.listLoading?(l(),r("div",sl,[e.theme=="default"?(l(),r("img",el)):(l(),r("img",ol)),o("span",null,_(e.$t("common.poolsNotFound")),1)])):f("",!0)])}const Ll=fe(Oe,[["render",al],["__scopeId","data-v-65c98465"]]);export{Ll as default};
