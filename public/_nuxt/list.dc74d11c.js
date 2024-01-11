import{_ as ve}from"./upgrade-select-input.039cf77e.js";import{_ as he}from"./upgrade-loading.c0eb3c3a.js";import{_ as pe}from"./apr-tips.39a71b32.js";import{_ as ge}from"./coin-tips.e9014f43.js";import{_ as _e}from"./nuxt-link.9e35bc36.js";import{_ as fe}from"./pools-list-item.efe48084.js";import{u as be,c as gs}from"./sha256.06e8e27c.js";import{u as ke,a as R,k as Os,d as we,l as ye,j as Ts,c as X}from"./pool.f22676bb.js";import{i as ds}from"./import-icon.de3e6c66.js";import{a as me,y as Ae,b as Ce,r as w,l as C,H as Oe,q as G,m as Se,X as je,e as Le,s as Ne,o as l,f as n,h as o,F as T,E as V,x as h,i as O,A as D,z as ks,v as p,j as $,t as Q,u as b,c as Ss,w as js,p as Be,k as Ie,M as $e}from"./entry.a472e018.js";/* empty css              */import{p as Pe}from"./precision.a7a6c57b.js";import{u as Fe}from"./autoPool.0ee4e209.js";import{u as Te}from"./farms.ba0d2db1.js";import{_ as ws}from"./icon-selected_3x.09e9a6f0.js";import{_ as Rs}from"./icon_on_2x.5e96733d.js";import{_ as Vs,a as Ds}from"./farms.8384bc80.js";import{_ as Ms}from"./icon_autopools_2x.e9ca61f2.js";import{_ as qs,a as Es}from"./farms.f8391065.js";import{_ as Us}from"./token-warning_2x.c4f554a0.js";import{_ as Re}from"./img-no-Positions_2x.a1714630.js";import{_ as Ve}from"./img-no-Positions_2x.4deb213d.js";import"./coin-select.7e4ea72c.js";/* empty css              *//* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./icon_rewards_2x.c7ef16fd.js";import"./decimal.0bdeb344.js";const De=me({setup(){const{t:e,locale:y}=Ae(),J=Ce(),Ls=w(!1),_s=w(!1),Y=w(!1),is=w(!1),us=w(!1),M=w("VOL"),W=w(["APR","TVL"]),P=w(!1),q=w(e("tab.all")),cs=w([e("tab.wormhole"),e("tab.celer")]),E=C(()=>{const a=Array.from(new Set(i.value.poolConfigList.flatMap(t=>!t.category||t.category==""?"All":t.category)));return console.log(a,"newArr"),a.length<=1?[]:a}),s=a=>{i.value.setCurrentPoolTab(a)},g=w([]),j=w(""),Z=w(["pools"]),K=ke(),S=be(),U=w(!0),I=w(!1),m=w(!1),x=w(!1),k=w([]),z=w(""),_=C(()=>S),ss=C(()=>S.theme),i=C(()=>K),L=C(()=>S.statsData);Oe(()=>{var v,c,d;const a=(d=(c=(v=J==null?void 0:J.currentRoute)==null?void 0:v.value)==null?void 0:c.query)==null?void 0:d.language;a&&ls(a),z.value=y.value,document.addEventListener("click",()=>{us.value=!1,P.value=!1});const t=localStorage.getItem(`pools-${es.value}-selectall`),r=localStorage.getItem(`pools-${es.value}-farms`),f=localStorage.getItem(`pools-${es.value}-viewCard`);I.value=t==="true",m.value=r==="true",Y.value=f==="true"}),G(()=>Y.value,async(a,t)=>{a!==t&&(is.value=!0,await ye(1500),is.value=!1)}),G(()=>_.value.chainName,(a,t)=>{a&&S.getStatsData(a,_.value.filterCoinsObj)},{immediate:!0});const{setLang:A}=S,ls=a=>{A(a),y.value=a},zs=(a,t)=>a&&t?Pe.plus(Os(a),Os(t)):a||0,ys=a=>{let t=0;return a&&a.forEach(r=>{t+=Os(String(r))}),String(we(String(t),2))},Js=(a=[])=>{const t=a&&a.length>0?a:Object.values(i.value.poolsObj),r=[];console.log(t,"====>newPoolList"),t.filter(c=>!c.is_closed).forEach(c=>{var vs,hs,ps,Is,$s,Ps,Fs;const d=_.value.addressLpTokens[c.address],H=i.value.poolsObj[c.address];let rs,F,ts,bs;d&&(rs=d.rewarder_apr[0]?Number(d.rewarder_apr[0].substring(0,d.rewarder_apr[0].length-1)):0,F=d.rewarder_apr[1]?Number(d.rewarder_apr[1].substring(0,d.rewarder_apr[1].length-1)):0,ts=d.rewarder_apr[2]?Number(d.rewarder_apr[2].substring(0,d.rewarder_apr[2].length-1)):0,bs=rs+F+ts);const as=c.needReverse?((hs=i.value.tokensObj[c.coinB.address])==null?void 0:hs.labels)||[]:((vs=i.value.tokensObj[c.coinA.address])==null?void 0:vs.labels)||[],As=c.needReverse?((ps=i.value.tokensObj[c.coinA.address])==null?void 0:ps.labels)||[]:((Is=i.value.tokensObj[c.coinB.address])==null?void 0:Is.labels)||[],Cs=[...new Set(as.concat(As))];r.push({...c,...d,liqidity:d?d.tvl_in_usd:"0.00000000001",vol:d?d.vol_in_usd_24h:"0",apr:d&&d.apr_7day?($s=d.apr_7day)==null?void 0:$s.replace("%",""):"--",fee:c.fee?c.fee:H!=null&&H.fee?H.fee:"--",aprNum:d&&d.apr_7day?String(Number(d.apr_7day.substring(0,d.apr_7day.length-1))+bs):"0",rewarder_apr:ys(d&&d.rewarder_apr),aprTotal:zs(d&&d.apr_7day,d&&ys(d.rewarder_apr)),rewarders0:d&&d.rewarder_apr[0],rewarders1:d&&d.rewarder_apr[1],rewarders2:d&&d.rewarder_apr[2],labels:Cs,isFarming:c==null?void 0:c.isFarming,fee_24_h:d&&d.fee_24_h,isAuthorized:!!(ns.value[(Ps=c==null?void 0:c.token_a)==null?void 0:Ps.address]&&ns.value[(Fs=c==null?void 0:c.token_b)==null?void 0:Fs.address])})});let f=[];if(M.value=="APR"?f=r.sort((c,d)=>d.aprNum-c.aprNum):M.value=="VOL"?f=r.sort((c,d)=>d.vol-c.vol):f=r.sort((c,d)=>d.liqidity-c.liqidity),q.value!=e("tab.all")){const c=[];f.forEach(d=>{d.labels.indexOf(q.value)!==-1&&c.push(d)}),g.value=c}else g.value=f;if(j.value){var v=new RegExp("[\\u4E00-\\u9FFF]+","g");if(v.test(j.value)){j.value="";return}const c=g.value.filter(d=>d.symbol.toLowerCase().includes(j.value.toLowerCase()));g.value=c}console.log(g.value,"=====>>>>list.value"),U.value=!1},ns=C(()=>{if(i.value.tokens&&i.value.tokens.length>0){const a={};return i.value.tokens.forEach(t=>{a[t.address]={...t}}),a}return null});G(()=>[ns.value,i.value.poolConfigList,_.value.chainName,_.value.addressLpTokens,j.value,M.value,q.value],([a,t,r,f])=>{a&&t&&(t==null?void 0:t.length)>0&&t[0]&&r&&(r!=null&&r.toLowerCase().includes(t[0].chain))&&Js(t)},{immediate:!0,deep:!0}),Se();const Ws=Fe(),Ns=()=>{U.value=!0,_s.value=!0,S.getStatsData(_.value.chainName,_.value.filterCoinsObj),K.setPoolConfigList(_.value.chainName,_.value.filterCoinsObj),setTimeout(()=>{_s.value=!1},1e3)};G(()=>_.value.isRefresh,a=>{var r;const t=(r=J==null?void 0:J.currentRoute)==null?void 0:r.value.name.split("-")[1];a&&(!t||t=="list"||t=="")&&Ns()});const Ks=a=>{const t=[];t.push(M.value),W.value.forEach((r,f)=>{r!=a&&t.push(r)}),W.value=t,M.value=a},Xs=a=>{const t=[];cs.value.forEach((r,f)=>{r==a?t[f]=q.value:t[f]=r}),cs.value=t,q.value=a};G(()=>S.lang,a=>{z.value=a});const Gs=C(()=>gs[_.value.chainName]);G(()=>_.value.isSelect,a=>{a!=="pools"&&(us.value=!1,P.value=!1)});const Qs=C(()=>i.value.poolConfigList.filter(t=>t.address==gs[_.value.chainName].newPositionAddress)[0]),Ys=C(()=>gs[_.value.chainName].hasCreatePool),es=C(()=>_.value.chainName),Zs=()=>{localStorage.setItem(`pools-${es.value}-selectall`,I.value?"":"true"),I.value=!I.value},xs=()=>{localStorage.setItem(`pools-${es.value}-farms`,m.value?"":"true"),m.value=!m.value},se=()=>{localStorage.setItem(`pools-${es.value}-viewCard`,Y.value?"":"true"),Y.value=!Y.value},ee=a=>{var t;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((t=i.value.tokensObj[a==null?void 0:a.address])==null?void 0:t.logo_url)||(_.value.theme==="default"?ds("/image/coins/unknown.png"):ds("/image/coins/sui-unknown.png"))},os=w(null),N=C(()=>os.value&&os.value.firstToken?os.value.firstToken:null),B=C(()=>os.value&&os.value.lastToken?os.value.lastToken:null),oe=C(()=>{if(_.value.chainName!=="Sui")return g.value;if(ns.value&&g.value&&g.value.length>0){const a=[];return g.value.forEach(r=>{var f,v;ns.value[(f=r==null?void 0:r.token_a)==null?void 0:f.address]&&ns.value[(v=r==null?void 0:r.token_b)==null?void 0:v.address]&&(m.value?r.isFarming&&r.rewarderInfo&&r.rewarderInfo.length>0&&(i.value.currentPoolTab=="All"&&(r.category==""||!r.category)||i.value.currentPoolTab!=="All"&&r.category==i.value.currentPoolTab)&&a.push(r):(i.value.currentPoolTab=="All"&&(r.category==""||!r.category)||i.value.currentPoolTab!=="All"&&r.category==i.value.currentPoolTab)&&a.push(r))}),a.filter((r,f)=>N.value&&B.value?r.coinA.address==N.value.address&&r.coinB.address==B.value.address||r.coinA.address==B.value.address&&r.coinB.address==N.value.address:N.value?r.coinA.address.toLowerCase().includes(N.value.address.toLowerCase())||r.coinB.address.toLowerCase().includes(N.value.address.toLowerCase()):B.value?r.coinA.address.toLowerCase().includes(B.value.address.toLowerCase())||r.coinB.address.toLowerCase().includes(B.value.address.toLowerCase()):a)}return[]}),ms=w([]),ae=()=>{let a=[];a=g.value,console.log(a,"##pageList");const t=a.filter((v,c)=>N.value&&B.value?v.coinA.address==N.value.address&&v.coinB.address==B.value.address||v.coinA.address==B.value.address&&v.coinB.address==N.value.address:N.value?v.coinA.address.toLowerCase().includes(N.value.address.toLowerCase())||v.coinB.address.toLowerCase().includes(N.value.address.toLowerCase()):B.value?v.coinA.address.toLowerCase().includes(B.value.address.toLowerCase())||v.coinB.address.toLowerCase().includes(B.value.address.toLowerCase()):a);let r=[],f=[];t.forEach((v,c)=>{const d=[];if(v.rewarderInfo&&v.rewarderInfo.length>0){v.rewarderInfo.forEach((F,ts)=>{var vs,hs,ps;const bs=(vs=i.value.tokensObj[F.coinAddress])==null?void 0:vs.decimals,as=Ts(F.emissionsEveryDay/Math.pow(10,bs),4),As=Number(as)>0?R(as):as,Cs=Ts(Number(as)*i.value.RATES[F.coinAddress]&&i.value.RATES[F.coinAddress].price,4);d.push({...F,logoUrl:(hs=i.value.tokensObj[F.coinAddress])==null?void 0:hs.logoURI,day:As,dayUSD:Cs,symbol:(ps=i.value.tokensObj[F.coinAddress])==null?void 0:ps.symbol,rewarders:v[`rewarders${ts}`]&&v[`rewarders${ts}`].replace("%",""),rewarder_display:v[`rewarder_display${ts+1}`],resultDay:as})});const H=d.filter(F=>F.rewarder_display);let rs=[];(!v.rewarderInfo||v.rewarderInfo.length<1||JSON.stringify(v.rewarderInfo)!==JSON.stringify(H))&&(rs=H),(i.value.currentPoolTab=="All"||i.value.currentPoolTab!=="All"&&v.category==i.value.currentPoolTab)&&(f.push({...v,rewardes:rs}),r.push({...v,rewardes:rs}))}else(i.value.currentPoolTab=="All"||i.value.currentPoolTab!=="All"&&v.category==i.value.currentPoolTab)&&r.push({...v})}),console.log(r,"121arrnewValnewValnewVal"),ms.value=m.value?f:r,U.value||(I.value?m.value?S.setPoolAmount(f.length):S.setPoolAmount(r.length):S.setPoolAmount(oe.value.length))};je(()=>{S.setPoolAmount("--")}),G(()=>[N.value,B.value,g.value,m.value,I.value,i.value.currentPoolTab],([a,t,r,f,v,c])=>{var d,H;(a&&((d=i==null?void 0:i.value.tokensObj[a.address])!=null&&d.isSelfBuilt)||t&&((H=i==null?void 0:i.value.tokensObj[t.address])!=null&&H.isSelfBuilt))&&!v?ms.value=[]:(a||t||r||f)&&(console.log("newValnewValnewVal",a,t,r,JSON.stringify(r)),ae())},{deep:!0});const le=C(()=>_.value.poolAmount!=="--"?4-Number(_.value.poolAmount)%4:0),ne=a=>i.value.tokensObj&&i.value.tokensObj[a]&&i.value.tokensObj[a].labels,re=C(()=>Ws),te=C(()=>re.value.autoPoolObj),de=Te(),ie=C(()=>de),ue=C(()=>ie.value.farmsPoolObj),ce=a=>{const t=["All Pools","Farms","Mining"];if(a!=="All Pools"){if(k.value.includes("All Pools")){const f=k.value.indexOf("All Pools");k.value.splice(f,1)}const r=k.value.indexOf(a);r!==-1?k.value.splice(r,1):k.value.length==t.length-2?k.value=t:k.value.push(a)}else k.value.length!==t.length?k.value=t:k.value=[];console.log(k.value,t,"selectedOptions.value")},fs=w(!1),Bs=C(()=>k.value.includes("All Pools")?"All Pools":k.value.includes("Farms")?"Farms":k.value.includes("Mining")?"Mining":"Farms/Mining");return G(()=>Bs.value,a=>{console.log(a,"21213123"),a=="All Pools"?(fs.value=!0,m.value=!0):a=="Farms"?(fs.value=!1,m.value=!0):a=="Mining"?(fs.value=!0,m.value=!1):(fs.value=!1,m.value=!1)},{immediate:!0}),{currentChecked:Bs,isCheckOpen:x,changeCheckBox:ce,selectedOptions:k,tabArr:E,changeTab:s,getLabel:ne,patchNumber:le,getRewarderApr:ys,childTokenSelectRef:os,firstToken:N,lastToken:B,showList:ms,isFarms:m,getCoinIcon:ee,isViewCard:Y,clickDisplayAll:Zs,clickFarms:xs,clickViewCard:se,isSelectAll:I,chainName:es,hasCreatePool:Ys,store:_,lpInfo:Qs,config:Gs,t:e,router:J,loading:Ls,clickRefresh:Ns,refresh:_s,searchKey:j,current:Z,addCommom:R,list:g,theme:ss,statsData:L,pools:i,select:us,selectValue:M,selectList:W,label:P,labelValue:q,labelList:cs,changeSort:Ks,changeSortLabel:Xs,listLoading:U,languageValue:z,isSwitchDisplayMode:is,autoPoolObj:te,farmsPoolObj:ue}}}),Hs=""+globalThis.__publicAssetsURL("sui-image/icon_autopools@2x.gif");const u=e=>(Be("data-v-a7c09df2"),e=e(),Ie(),e),Me={class:"upgrade-pools-list-container"},qe={class:"content-top"},Ee={class:"content-top-left"},Ue={key:0,class:"tag-list"},He=["onClick"],ze={class:"content-top-right"},Je={class:"radio"},We={key:0,src:ws},Ke=u(()=>o("span",null,"Display all pools",-1)),Xe={class:"check-box"},Ge=u(()=>o("span",null,"Show:",-1)),Qe={key:0,class:"select-list"},Ye={class:"radio"},Ze={key:0,src:ws},xe=u(()=>o("span",null,"All Pools",-1)),so={class:"radio"},eo={key:0,src:ws},oo=u(()=>o("span",null,"Farms",-1)),ao={class:"radio"},lo={key:0,src:ws},no=u(()=>o("span",null,"Mining",-1)),ro={class:"search-select-box"},to=u(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),io=[to],uo={key:0,class:"select-list"},co=["onClick"],vo={class:"search-select-box"},ho=u(()=>o("img",{src:Rs,alt:""},null,-1)),po=u(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),go=[po],_o={key:0,class:"select-list"},fo=["onClick"],bo=u(()=>o("img",{src:Rs,alt:""},null,-1)),ko={key:0,"aria-hidden":"true",class:"cardIcon"},wo=u(()=>o("use",{"xlink:href":"#icon-icon-card"},null,-1)),yo=[wo],mo={key:1,"aria-hidden":"true",class:"listIcon"},Ao=u(()=>o("use",{"xlink:href":"#icon-icon-list1"},null,-1)),Co=[Ao],Oo={key:0,class:"upgrade-loading"},So={key:1,class:"table-contianer"},jo={class:"table"},Lo={class:"table-header"},No={class:"table-tr"},Bo=u(()=>o("th",null,"Pools",-1)),Io=u(()=>o("th",null,"Liquidity",-1)),$o=u(()=>o("th",null,"Volume (24H)",-1)),Po=u(()=>o("th",null,null,-1)),Fo=u(()=>o("th",null,"Rewards",-1)),To={class:"hover-box"},Ro={class:"apr-hover-content"},Vo=u(()=>o("th",null,"Action",-1)),Do={class:"table-body"},Mo=["onClick"],qo={class:"token"},Eo={class:"img-box"},Uo={key:0,class:"pool-warning"},Ho={class:"img-box img-last-box"},zo={key:0,class:"pool-warning"},Jo={class:"name"},Wo={class:"top"},Ko={class:"token-name"},Xo={class:"tokena"},Go={class:"tokenb"},Qo={class:"fee-tier-top"},Yo={key:0,class:"isFarming farming-logo"},Zo=u(()=>o("img",{class:"default-img",src:Vs,alt:""},null,-1)),xo=u(()=>o("img",{class:"hover-img",src:Ds,alt:""},null,-1)),sa=u(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),ea=[Zo,xo,sa],oa={key:1,class:"isFarming vault-logo"},aa=u(()=>o("img",{class:"default-img",src:Ms,alt:""},null,-1)),la=u(()=>o("img",{class:"hover-img",src:Hs,alt:""},null,-1)),na=u(()=>o("div",{class:"hover-text"},"Vault available",-1)),ra=[aa,la,na],ta={key:2,class:"isFarming vault-logo"},da=u(()=>o("img",{class:"default-img",src:qs,alt:""},null,-1)),ia=u(()=>o("img",{class:"hover-img",src:Es,alt:""},null,-1)),ua=u(()=>o("div",{class:"hover-text"},"Farming rewards available",-1)),ca=[da,ia,ua],va={key:3,class:"pool-warning"},ha=u(()=>o("img",{src:Us,alt:""},null,-1)),pa={class:"hover-text"},ga={class:"label-all"},_a={key:0},fa={key:0},ba={class:"skeleton-box"},ka={key:1},wa={key:2},ya={class:"skeleton-box"},ma={key:3},Aa=u(()=>o("td",null,null,-1)),Ca={key:4},Oa={class:"skeleton-box"},Sa={key:5},ja={class:"rewards-hover"},La={alt:""},Na={key:6},Ba={key:7},Ia={class:"skeleton-box"},$a={class:"hover-box"},Pa={class:"apr"},Fa=u(()=>o("br",null,null,-1)),Ta={key:0,class:"farming-apr"},Ra={key:1,class:"apr-hover-content"},Va={key:2,class:"item-container"},Da={class:"h5-pool-item"},Ma={class:"token"},qa={class:"token"},Ea={class:"img-box"},Ua={key:0,class:"pool-warning"},Ha={class:"img-box img-last-box"},za={key:0,class:"pool-warning"},Ja={class:"name"},Wa={class:"top"},Ka={class:"token-name"},Xa={class:"tokena"},Ga={class:"tokenb"},Qa={class:"fee-tier-top"},Ya={key:0,class:"isFarming farming-logo"},Za=u(()=>o("img",{class:"default-img",src:Vs,alt:""},null,-1)),xa=u(()=>o("img",{class:"hover-img",src:Ds,alt:""},null,-1)),sl=u(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),el=[Za,xa,sl],ol={key:1,class:"isFarming vault-logo"},al=u(()=>o("img",{class:"default-img",src:Ms,alt:""},null,-1)),ll=u(()=>o("img",{class:"hover-img",src:Hs,alt:""},null,-1)),nl=u(()=>o("div",{class:"hover-text"},"Vault available",-1)),rl=[al,ll,nl],tl={key:2,class:"isFarming vault-logo"},dl=u(()=>o("img",{class:"default-img",src:qs,alt:""},null,-1)),il=u(()=>o("img",{class:"hover-img",src:Es,alt:""},null,-1)),ul=u(()=>o("div",{class:"hover-text"},"Farming rewards available",-1)),cl=[dl,il,ul],vl={key:3,class:"pool-warning"},hl=u(()=>o("img",{src:Us,alt:""},null,-1)),pl={class:"hover-text"},gl={class:"label-all"},_l={key:0},fl={class:"bottom"},bl={class:"row"},kl=u(()=>o("div",{class:"left"},"APR (24H)",-1)),wl={key:0,class:"right"},yl=u(()=>o("br",null,null,-1)),ml={key:0},Al={class:"apr-hover-content"},Cl={class:"row"},Ol=u(()=>o("div",{class:"left"},"Liquidity",-1)),Sl={key:0,class:"right"},jl={key:1,class:"right"},Ll={class:"row"},Nl=u(()=>o("div",{class:"left"},"Volume (24H)",-1)),Bl={key:0,class:"right"},Il={key:1,class:"right"},$l={class:"row"},Pl=u(()=>o("div",{class:"left"},"Rewards",-1)),Fl={key:0,class:"right"},Tl={key:1,class:"right reward-right"},Rl={class:"rewards-hover"},Vl={alt:""},Dl={key:3,class:"no-data"},Ml={key:0,src:Re},ql={key:1,src:Ve};function El(e,y,J,Ls,_s,Y){const is=ve,us=he,M=pe,W=ge,P=$e,q=_e,cs=fe,E=Ne("image");return l(),n("div",Me,[o("div",qe,[o("div",Ee,[e.tabArr.length>1?(l(),n("div",Ue,[(l(!0),n(T,null,V(e.tabArr,(s,g)=>(l(),n("div",{key:g,class:D(["tag-item",s==e.pools.currentPoolTab?`tag-active tab-num-${e.tabArr.length}`:`tab-num-${e.tabArr.length}`]),onClick:j=>e.changeTab(s)},p(s),11,He))),128))])):h("",!0),O(is,{ref:"childTokenSelectRef"},null,512)]),o("div",ze,[o("div",{class:D(["tab-item",e.isSelectAll?"tab-item-active":""]),onClick:y[0]||(y[0]=ks(s=>e.clickDisplayAll(),["stop"]))},[o("div",Je,[e.isSelectAll&&e.store.theme=="sui"?(l(),n("img",We)):h("",!0)]),Ke],2),o("div",Xe,[o("div",{class:"search-select search-label",onClick:y[4]||(y[4]=ks(()=>{e.isCheckOpen=!e.isCheckOpen,e.label=!1,e.select=!1},["stop"]))},[Ge,o("div",null,p(e.currentChecked),1),e.isCheckOpen?(l(),n("div",Qe,[o("div",{class:"select-menu-item",onClick:y[1]||(y[1]=s=>e.changeCheckBox("All Pools"))},[o("div",Ye,[e.selectedOptions.includes("All Pools")&&e.store.theme=="sui"?(l(),n("img",Ze)):h("",!0)]),xe]),o("div",{class:"select-menu-item",onClick:y[2]||(y[2]=s=>e.changeCheckBox("Farms"))},[o("div",so,[e.selectedOptions.includes("Farms")&&e.store.theme=="sui"?(l(),n("img",eo)):h("",!0)]),oo]),o("div",{class:"select-menu-item",onClick:y[3]||(y[3]=s=>e.changeCheckBox("Mining"))},[o("div",ao,[e.selectedOptions.includes("Mining")&&e.store.theme=="sui"?(l(),n("img",lo)):h("",!0)]),no])])):h("",!0)])]),o("div",ro,[o("div",{class:"search-select search-label",onClick:y[5]||(y[5]=ks(()=>{e.store.setIsSelect("pools"),e.isCheckOpen=!1,e.label=!e.label,e.select=!1},["stop"]))},[o("span",null,p(e.$t("newAdd.label")),1),o("div",null,[$(p(e.labelValue)+" ",1),(l(),n("svg",{"aria-hidden":"true",class:D(e.label?"show-icon icon":"icon")},io,2))]),e.label?(l(),n("div",uo,[(l(!0),n(T,null,V(e.labelList,(s,g)=>(l(),n("div",{key:g,class:"select-menu-item",onClick:j=>e.changeSortLabel(s)},p(s),9,co))),128))])):h("",!0)])]),o("div",vo,[o("div",{class:"search-select",onClick:y[6]||(y[6]=ks(()=>{e.store.setIsSelect("pools"),e.isCheckOpen=!1,e.select=!e.select,e.label=!1},["stop"]))},[o("span",null,p(e.$t("newAdd.sortBy")),1),o("div",null,[$(p(e.selectValue)+" ",1),ho,(l(),n("svg",{"aria-hidden":"true",class:D(e.select?"show-icon icon":"icon")},go,2))]),e.select?(l(),n("div",_o,[(l(!0),n(T,null,V(e.selectList,(s,g)=>(l(),n("div",{key:g,class:"select-menu-item",onClick:j=>e.changeSort(s)},[$(p(s)+" ",1),bo],8,fo))),128))])):h("",!0)])]),o("div",{class:"change-view",onClick:y[7]||(y[7]=s=>e.clickViewCard())},[e.isViewCard&&e.current[0]=="pools"?(l(),n("svg",ko,yo)):(l(),n("svg",mo,Co))])])]),e.listLoading||e.isSwitchDisplayMode?(l(),n("div",Oo,[O(us,{loading:e.listLoading||e.isSwitchDisplayMode,type:e.isViewCard?"poolsCard":"poolsList"},null,8,["loading","type"])])):h("",!0),!e.isSwitchDisplayMode&&!e.isViewCard&&!e.listLoading?(l(),n("div",So,[o("table",jo,[o("thead",Lo,[o("tr",No,[Bo,Io,$o,Po,Fo,o("th",null,[o("span",To,[$(" APR (24H) "),o("div",Ro,[O(M,{class:"noHover apr-hover-con"})])])]),Vo])]),o("tbody",Do,[(l(!0),n(T,null,V(e.showList,s=>{var g,j,Z,K,S,U,I,m,x,k,z,_,ss,i,L;return l(),n("tr",{key:s.address,class:D(["table-tr",e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none"]),onClick:A=>s.needReverse?e.router.push(`/liquidity/deposit?poolAddress=${s.address}`):e.router.push(`/liquidity/deposit?poolAddress=${s.address}`)},[o("td",null,[o("div",qo,[o("div",Eo,[Q(o("img",null,null,512),[[E,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(K=(Z=e.pools)==null?void 0:Z.tokensObj[s.coinB.address])!=null&&K.isSelfBuilt:(j=(g=e.pools)==null?void 0:g.tokensObj[s.coinA.address])!=null&&j.isSelfBuilt)?(l(),n("div",Uo)):h("",!0)]),o("div",Ho,[Q(o("img",null,null,512),[[E,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(U=(S=e.pools)==null?void 0:S.tokensObj[s.coinA.address])!=null&&U.isSelfBuilt:(m=(I=e.pools)==null?void 0:I.tokensObj[s.coinB.address])!=null&&m.isSelfBuilt)?(l(),n("div",zo)):h("",!0)]),o("div",Jo,[o("div",Wo,[o("p",Ko,[o("span",Xo,[$(p(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),O(W,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),$(" - "),o("span",Go,[$(p(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),O(W,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",Qo,p((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),n("div",Yo,ea)):h("",!0),e.chainName=="Sui"&&e.autoPoolObj[s.address]&&("config"in e?e.config:b(gs)).hasVault?(l(),n("div",oa,ra)):h("",!0),e.chainName=="Sui"&&e.farmsPoolObj[s.address]&&e.farmsPoolObj[s.address].status=="Live"?(l(),n("div",ta,ca)):h("",!0),(k=(x=e.pools)==null?void 0:x.tokensObj[s.coinA.address])!=null&&k.isSelfBuilt||(_=(z=e.pools)==null?void 0:z.tokensObj[s.coinB.address])!=null&&_.isSelfBuilt?(l(),n("div",va,[ha,o("div",pa,p(e.t("newAdd.poolWarning")),1)])):h("",!0)]),o("div",ga,[(l(!0),n(T,null,V(s.labels,(A,ls)=>(l(),n("div",{key:ls,class:D(["label",A])},[A!=="Native"?(l(),n("span",_a,p(A),1)):h("",!0)],2))),128))])])])]),("checkNullObj"in e?e.checkNullObj:b(X))(e.store.statsData)?(l(),n("td",fa,[o("div",ba,[O(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),n("td",ka," $"+p(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:b(R))(s.liqidity,2)),1)),("checkNullObj"in e?e.checkNullObj:b(X))(e.store.statsData)?(l(),n("td",wa,[o("div",ya,[O(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),n("td",ma," $"+p(Number(s.vol)!==0&&Number(s.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:b(R))(s.vol,2)),1)),Aa,("checkNullObj"in e?e.checkNullObj:b(X))(e.store.statsData)?(l(),n("td",Ca,[o("div",Oa,[O(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),n("td",Sa,[(l(!0),n(T,null,V(s.rewardes,A=>{var ls;return l(),n("div",{key:A.address,class:D(["rewarder-token",A.day===0?"reward-none":""])},[Q(o("img",null,null,512),[[E,e.getCoinIcon((ls=e.pools)==null?void 0:ls.tokensObj[A.coinAddress])]]),o("div",ja,[Q(o("img",La,null,512),[[E,A.logoUrl?A.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:b(ds))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:b(ds))("/image/coins/sui-unknown.png")]]),o("span",null,p(`${A.day} ${A.symbol} per day`),1)])],2)}),128))])):(l(),n("td",Na," ")),("checkNullObj"in e?e.checkNullObj:b(X))(e.store.statsData)?(l(),n("td",Ba,[o("div",Ia,[O(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(l(),n("td",{key:8,class:D(s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(ss=s==null?void 0:s.stable_farming)!=null&&ss.stable_farming_pool?"":"noCursor")},[o("span",$a,[o("i",Pa,p(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:b(R))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:b(R))(s.apr,2))+"%",1),Fa,(i=s==null?void 0:s.stable_farming)!=null&&i.stable_farming_pool?(l(),n("i",Ta,p(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:b(R))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)):h("",!0),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(L=s==null?void 0:s.stable_farming)!=null&&L.stable_farming_pool?(l(),n("div",Ra,[O(M,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):h("",!0)])],2)),o("td",null,[s.needReverse?(l(),Ss(q,{key:0,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:js(()=>[$("+")]),_:2},1032,["to"])):(l(),Ss(q,{key:1,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:js(()=>[$("+")]),_:2},1032,["to"]))])],10,Mo)}),128))])])])):h("",!0),!e.isSwitchDisplayMode&&e.isViewCard&&!e.listLoading?(l(),n("div",Va,[e.showList&&e.showList.length>0?(l(),n(T,{key:0},[(l(!0),n(T,null,V(e.showList,(s,g)=>(l(),Ss(cs,{key:g,"l-item":s,"is-select-all":e.isSelectAll,"is-farms":e.isFarms},null,8,["l-item","is-select-all","is-farms"]))),128)),(l(!0),n(T,null,V(e.patchNumber,s=>(l(),n("div",{key:s,class:"patch-item"}))),128))],64)):h("",!0)])):h("",!0),o("div",Da,[(l(!0),n(T,null,V(e.showList,s=>{var g,j,Z,K,S,U,I,m,x,k,z,_,ss,i;return l(),n("div",{key:s.address,class:D([e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none","item"])},[o("div",Ma,[o("div",qa,[o("div",Ea,[Q(o("img",null,null,512),[[E,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),(s.needReverse?(K=(Z=e.pools)==null?void 0:Z.tokensObj[s.coinB.address])!=null&&K.isSelfBuilt:(j=(g=e.pools)==null?void 0:g.tokensObj[s.coinA.address])!=null&&j.isSelfBuilt)?(l(),n("div",Ua)):h("",!0)]),o("div",Ha,[Q(o("img",null,null,512),[[E,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),(s.needReverse?(U=(S=e.pools)==null?void 0:S.tokensObj[s.coinA.address])!=null&&U.isSelfBuilt:(m=(I=e.pools)==null?void 0:I.tokensObj[s.coinB.address])!=null&&m.isSelfBuilt)?(l(),n("div",za)):h("",!0)]),o("div",Ja,[o("div",Wa,[o("p",Ka,[o("span",Xa,[$(p(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),O(W,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),$(" - "),o("span",Ga,[$(p(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),O(W,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",Qa,p((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),n("div",Ya,el)):h("",!0),e.chainName=="Sui"&&e.autoPoolObj[s.address]&&("config"in e?e.config:b(gs)).hasVault?(l(),n("div",ol,rl)):h("",!0),s.isStableFarming?(l(),n("div",tl,cl)):h("",!0),(k=(x=e.pools)==null?void 0:x.tokensObj[s.coinA.address])!=null&&k.isSelfBuilt||(_=(z=e.pools)==null?void 0:z.tokensObj[s.coinB.address])!=null&&_.isSelfBuilt?(l(),n("div",vl,[hl,o("div",pl,p(e.t("newAdd.poolWarning")),1)])):h("",!0)]),o("div",gl,[(l(!0),n(T,null,V(s.labels,(L,A)=>(l(),n("div",{key:A,class:D(["label",L])},[L!=="Native"?(l(),n("span",_l,p(L),1)):h("",!0)],2))),128))])])])]),o("div",fl,[o("div",bl,[kl,("checkNullObj"in e?e.checkNullObj:b(X))(e.store.statsData)?(l(),n("div",wl,[O(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),n("div",{key:1,class:D(["right theme-right",s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(ss=s==null?void 0:s.stable_farming)!=null&&ss.stable_farming_pool?"":"noCursor"])},[o("div",null,p(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:b(R))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:b(R))(s.apr,2))+"%",1),yl,(i=s==null?void 0:s.stable_farming)!=null&&i.stable_farming_pool?(l(),n("div",ml,p(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"<0.01":`+${("addCommom"in e?e.addCommom:b(R))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)):h("",!0),o("div",Al,[O(M,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])],2))]),o("div",Cl,[Ol,("checkNullObj"in e?e.checkNullObj:b(X))(e.store.statsData)?(l(),n("div",Sl,[O(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),n("div",jl," $"+p(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:b(R))(s.liqidity,2)),1))]),o("div",Ll,[Nl,("checkNullObj"in e?e.checkNullObj:b(X))(e.store.statsData)?(l(),n("div",Bl,[O(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(l(),n("div",Il," $"+p(Number(s.vol)!==0&&Number(s.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:b(R))(s.vol,2)),1))]),o("div",$l,[Pl,("checkNullObj"in e?e.checkNullObj:b(X))(e.store.statsData)?(l(),n("div",Fl,[O(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(l(),n("div",Tl,[(l(!0),n(T,null,V(s.rewardes,L=>{var A;return l(),n("div",{key:L.address,class:"rewarder-token"},[Q(o("img",null,null,512),[[E,e.getCoinIcon((A=e.pools)==null?void 0:A.tokensObj[L.coinAddress])]]),o("div",Rl,[Q(o("img",Vl,null,512),[[E,L.logoUrl?L.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:b(ds))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:b(ds))("/image/coins/sui-unknown.png")]]),o("span",null,p(`${L.day} ${L.symbol} per day`),1)])])}),128))])):h("",!0)])]),O(q,{to:`/liquidity/deposit?poolAddress=${s.address}`,class:"add-btn"},{default:js(()=>[$("+ Add Liquidity")]),_:2},1032,["to"])],2)}),128))]),!e.isSwitchDisplayMode&&e.store.poolAmount!=="--"&&e.store.poolAmount<=0&&!e.listLoading?(l(),n("div",Dl,[e.theme=="default"?(l(),n("img",Ml)):(l(),n("img",ql)),o("span",null,p(e.$t("common.poolsNotFound")),1)])):h("",!0)])}const bn=Le(De,[["render",El],["__scopeId","data-v-a7c09df2"]]);export{bn as default};
