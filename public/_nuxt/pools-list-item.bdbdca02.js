import{_ as me}from"./coin-tips.29ab3f48.js";import{_ as ue}from"./apr-tips.6c33800f.js";import{_ as ce}from"./nuxt-link.c3fb7b78.js";import{a as ve,u as Ie,c as de}from"./sha256.7dedb7ce.js";import{u as he,c as h,j as se,a as _,M as pe,o as ge,d as Y}from"./pool.84109310.js";import{i as S}from"./import-icon.de3e6c66.js";import{a as fe,r as ne,C as ke,L as we,y as be,b as ye,l as u,e as _e,s as Ae,o as n,f as a,h as o,x as I,u as i,A,t as G,j as J,v as t,i as y,F as ae,E as le,c as te,w as ie,M as Se,S as je,B as Oe,p as $e,k as Be}from"./entry.485eaeb8.js";/* empty css              *//* empty css              */import{u as Ne}from"./autoPool.8447367b.js";import{D as re}from"./decimal.0bdeb344.js";import{_ as Ce,a as Ue}from"./farms.142e94a5.js";const Te=fe({props:{lItem:{type:Object,required:!0},isSelectAll:{type:Boolean,default:!1},isFarms:{type:Boolean,default:!1}},setup(e){const j=ne(!1),Z=ke(we,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),{t:x}=be(),N=ye(),ee=ve(),C=u(()=>ee),f=ne(!1);function K(s){const r=s.balance,v=ge(r).div(Math.pow(10,s.decimals)).toString();return _(v,s.decimals)}const Q=s=>{f.value=!0,setTimeout(()=>{f.value=!1},2e3),console.log(N,"==>router"),console.log(s,"===>pool163"),console.log("0428###toAdd###pool.address###",s.address),console.log("0428###toAdd###pool.coinA.address###",s.coinA.address),console.log("0428###toAdd###pool.coinB.address###",s.coinB.address),console.log("0428###toAdd###pool.fee###",s.fee),N.push(`/liquidity/deposit?poolAddress=${s.address}`)},X=he(),l=u(()=>X),O=u(()=>l.value.tokensObj&&e.lItem.coinA.address&&l.value.tokensObj[e.lItem.coinA.address]&&l.value.tokensObj[e.lItem.coinA.address].logo_url),U=u(()=>l.value.tokensObj&&e.lItem.coinB.address&&l.value.tokensObj[e.lItem.coinB.address]&&l.value.tokensObj[e.lItem.coinB.address].logo_url),$=Ie(),c=u(()=>$),T=u(()=>c.value.theme),F=u(()=>{var k,w;let s=[],r={};if(console.log(e.lItem,"====335"),(k=e.lItem)!=null&&k.rewarderInfo)!h(l.value.tokensObj)&&!h(l.value.RATES)&&(s=(w=e.lItem)==null?void 0:w.rewarderInfo,r=l.value.tokensObj);else if(!h(c.value.addressLpTokens)&&!h(l.value.tokensObj)&&!h(l.value.RATES)&&!h(c.value.newTopPoolsObj)){const m=e.lItem.address&&c.value.addressLpTokens[e.lItem.address]&&c.value.addressLpTokens[e.lItem.address].rewarder_infos||[];console.log(c.value.addressLpTokens,"result===>"),s=m,console.log(s,"===>rewarderInfos"),r=l.value.tokensObj}const v=[];s.forEach((m,B)=>{var d,W,oe;const H=(d=r[m.coinAddress])==null?void 0:d.decimals,b=se(new re(m.emissionsEveryDay/Math.pow(10,H)).toDP(2,re.ROUND_HALF_UP).toString(),4),M=Number(b)>0?_(b):b,z=se(Number(b)*l.value.RATES[m.coinAddress]&&l.value.RATES[m.coinAddress].price,4);v.push({...m,logoUrl:(W=r[m.coinAddress])==null?void 0:W.logoURI,day:M,dayUSD:z,symbol:(oe=r[m.coinAddress])==null?void 0:oe.symbol,rewarders:e.lItem[`rewarders${B}`]&&e.lItem[`rewarders${B}`].replace("%",""),rewarder_display:e.lItem[`rewarder_display${B+1}`],resultDay:b})}),console.log(v,"===>mockArr");const g=v.filter(m=>m.rewarder_display);return g&&g.length>0?(console.log(g,"result===>380"),g):[]});console.log(e.lItem,"props.lItem====>");const L=u(()=>{var s,r,v,g,k,w;return(r=(s=e.lItem)==null?void 0:s.coinA)!=null&&r.address&&l.value.tokensWarningObj?!l.value.tokensWarningObj[(g=(v=e.lItem)==null?void 0:v.coinA)==null?void 0:g.address]||!l.value.tokensObj[(w=(k=e.lItem)==null?void 0:k.coinB)==null?void 0:w.address]:!1}),R=s=>{var r;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((r=l.value.tokensObj[s==null?void 0:s.address])==null?void 0:r.logo_url)||($.theme==="default"?S("/image/coins/unknown.png"):S("/image/coins/sui-unknown.png"))},D=Ne(),q=u(()=>D),P=u(()=>q.value.autoPoolObj),V=u(()=>c.value.chainName),E=u(()=>de[c.value.chainName]);return{checkNullObj:h,store:$,t:x,isShow:j,indicator:Z,thousands:pe,importIcon:S,router:N,wallet:C,addCommom:_,getLpView:K,toAdd:Q,fromCoinUrl:O,toCoinUrl:U,addLiquidity:f,rewarderInfo:F,theme:T,isSelfBuilt:L,pools:l,getCoinIcon:R,autoPoolObj:P,chainName:V,config:E}}}),Fe=""+new URL("farms.9e3b3bf6.png",import.meta.url).href,Le=""+new URL("farms.17df0806.gif",import.meta.url).href,Re=""+globalThis.__publicAssetsURL("sui-image/icon_autopools@2x.png");const p=e=>($e("data-v-67f47c44"),e=e(),Be(),e),De={class:"farming-and-vault"},qe={key:0,class:"isFarming"},Pe=p(()=>o("img",{class:"default-img",src:Fe,alt:""},null,-1)),Ve=p(()=>o("img",{class:"hover-img",src:Le,alt:""},null,-1)),Ee=p(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),He=[Pe,Ve,Ee],Me={key:1,class:"isFarming vault-logo"},ze=p(()=>o("img",{class:"default-img",src:Ce,alt:""},null,-1)),We=p(()=>o("img",{class:"hover-img",src:Ue,alt:""},null,-1)),Ge=p(()=>o("div",{class:"hover-text"},"Farm rewards available",-1)),Je=[ze,We,Ge],Ke=p(()=>o("div",{class:"hover-text"},"Vault available",-1)),Qe=p(()=>o("img",{src:Re,alt:""},null,-1)),Xe=[Ke,Qe],Ye=p(()=>o("div",{class:"topBg"},null,-1)),Ze={class:"top"},xe={key:0},eo={key:1},oo={class:"coin-name"},so={class:"token-a"},no=p(()=>o("span",null," - ",-1)),ao={class:"token-b"},lo={key:0,class:"pool-warning"},to={class:"hover-text"},io={class:"symbol-label"},ro={class:"apr"},mo={key:0,class:"skeleton-box"},uo={class:"bottom"},co={class:"induction"},vo={class:"item"},Io={class:"induction-text"},ho={class:"induction-value"},po={class:"item"},go={class:"induction-text"},fo={key:0,class:"induction-value"},ko={key:1,class:"induction-value"},wo={class:"item"},bo={class:"induction-text"},yo={key:0,class:"induction-value"},_o={key:1,class:"induction-value"},Ao={key:0,class:"item"},So=p(()=>o("div",{class:"induction-text"},"Fees (24H)",-1)),jo={key:0,class:"induction-value"},Oo={key:1,class:"induction-value"},$o={key:1,class:"item rewards-item"},Bo={class:"induction-text"},No={class:"induction-value induction-value-rewards"},Co={class:"rewards-hover"},Uo={alt:""},To={alt:""};function Fo(e,j,Z,x,N,ee){var U,$,c,T,F,L,R,D,q,P,V,E,s,r,v,g,k,w,m,B,H,b,M,z;const C=me,f=Se,K=ue,Q=je,X=Oe,l=ce,O=Ae("image");return n(),a("div",{class:A(["pools-list-item",[e.isSelectAll||(U=e.lItem)!=null&&U.isAuthorized?e.isFarms?e.lItem.isFarming&&e.lItem.rewarderInfo&&e.lItem.rewarderInfo.length>0?"":"none":"":"none",e.chainName=="Sui"?"sui-pool-card":""]])},[o("div",De,[($=e.lItem)!=null&&$.isFarming&&e.rewarderInfo&&e.rewarderInfo.length>0?(n(),a("div",qe,He)):I("",!0),e.lItem.isStableFarming?(n(),a("div",Me,Je)):I("",!0),e.chainName=="Sui"&&e.autoPoolObj[e.lItem.address]&&("config"in e?e.config:i(de)).hasVault?(n(),a("div",{key:2,class:A([(c=e.lItem)!=null&&c.isFarming&&e.rewarderInfo&&e.rewarderInfo.length>0?"isVaultAndFarming":"","isVault"])},Xe,2)):I("",!0)]),Ye,o("div",Ze,[o("div",{class:A(e.lItem.needReverse?"img-box reverse":"img-box")},[(T=e.lItem)!=null&&T.coinA?G((n(),a("img",xe,null,512)),[[O,e.fromCoinUrl||e.getCoinIcon((F=e.lItem)==null?void 0:F.coinA)]]):I("",!0),(L=e.lItem)!=null&&L.coinB?G((n(),a("img",eo,null,512)),[[O,e.toCoinUrl||e.getCoinIcon((R=e.lItem)==null?void 0:R.coinB)]]):I("",!0)],2),o("div",oo,[o("div",so,[J(t(e.lItem.needReverse?(V=(P=e.lItem)==null?void 0:P.coinB)==null?void 0:V.symbol:(q=(D=e.lItem)==null?void 0:D.coinA)==null?void 0:q.symbol)+" ",1),y(C,{"coin-info":e.lItem.needReverse?(s=e.lItem)==null?void 0:s.coinB:(E=e.lItem)==null?void 0:E.coinA},null,8,["coin-info"])]),no,o("div",ao,[J(t(e.lItem.needReverse?(k=(g=e.lItem)==null?void 0:g.coinA)==null?void 0:k.symbol:(v=(r=e.lItem)==null?void 0:r.coinB)==null?void 0:v.symbol)+" ",1),y(C,{"coin-info":e.lItem.needReverse?(m=e.lItem)==null?void 0:m.coinA:(w=e.lItem)==null?void 0:w.coinB},null,8,["coin-info"])]),e.theme=="sui"&&((H=(B=e.pools)==null?void 0:B.tokensObj[e.lItem.coinA.address])!=null&&H.isSelfBuilt||(M=(b=e.pools)==null?void 0:b.tokensObj[e.lItem.coinB.address])!=null&&M.isSelfBuilt)?(n(),a("div",lo,[o("div",to,t(e.t("newAdd.poolWarning")),1)])):I("",!0)]),o("div",io,[(n(!0),a(ae,null,le((z=e.lItem)==null?void 0:z.labels,(d,W)=>(n(),a("div",{key:W,class:A(["lable",d])},null,2))),128))]),o("div",ro,[("checkNullObj"in e?e.checkNullObj:i(h))(e.store.statsData)?(n(),a("div",mo,[y(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),a("span",{key:1,class:"apr-text",onClick:j[0]||(j[0]=d=>e.isShow=!e.isShow)},t(e.lItem.is_display_rewarder?e.lItem.aprTotal>0&&e.lItem.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:i(_))(e.lItem.aprTotal,2):e.lItem.apr>0&&e.lItem.apr<.01?"<0.01":("addCommom"in e?e.addCommom:i(_))(e.lItem.apr,2))+"% ",1)),o("span",{onClick:j[1]||(j[1]=d=>e.isShow=!e.isShow)},t(e.$t("common.apr")),1),y(K,{class:A(e.isShow?"showHover apr-hover-con":"noHover apr-hover-con"),"l-item":e.lItem,"rewarder-info":e.rewarderInfo},null,8,["class","l-item","rewarder-info"])])]),o("div",uo,[o("div",co,[o("div",vo,[o("div",Io,t(e.$t("common.feeTier")),1),o("div",ho,t(e.lItem.fee!=="--"?e.lItem.fee*100:"--")+"%",1)]),o("div",po,[o("div",go,t(e.$t("common.liquidity")),1),("checkNullObj"in e?e.checkNullObj:i(h))(e.store.statsData)?(n(),a("div",fo,[y(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),a("div",ko,t(Number(e.lItem.liqidity)!==0&&Number(e.lItem.liqidity)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:i(_))(("decimalUi"in e?e.decimalUi:i(Y))(e.lItem.liqidity,2),2)}`),1))]),o("div",wo,[o("div",bo,t(e.$t("common.volume24H")),1),("checkNullObj"in e?e.checkNullObj:i(h))(e.store.statsData)?(n(),a("div",yo,[y(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),a("div",_o,t(Number(e.lItem.vol)!==0&&Number(e.lItem.vol)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:i(_))(("decimalUi"in e?e.decimalUi:i(Y))(e.lItem.vol,2),2)}`),1))]),e.chainName=="Sui"?(n(),a("div",Ao,[So,("checkNullObj"in e?e.checkNullObj:i(h))(e.store.statsData)?(n(),a("div",jo,[y(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),a("div",Oo,t(Number(e.lItem.fee_24_h)!==0&&Number(e.lItem.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:i(_))(("decimalUi"in e?e.decimalUi:i(Y))(e.lItem.fee_24_h,2),2)}`),1))])):I("",!0),e.lItem.is_display_rewarder&&e.rewarderInfo&&e.rewarderInfo.length>0?(n(),a("div",$o,[o("div",Bo,t(e.$t("common.rewards")),1),o("div",No,[e.rewarderInfo&&e.rewarderInfo.length>0?(n(!0),a(ae,{key:0},le(e.rewarderInfo,d=>(n(),a("div",{key:d,class:A(["rewards",d.day===0?"reward-none":""])},[o("div",Co,[G(o("img",Uo,null,512),[[O,d.logoUrl?d.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:i(S))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:i(S))("/image/coins/sui-unknown.png")]]),o("span",null,t(`${d.day} ${d.symbol} per day`),1)]),G(o("img",To,null,512),[[O,d.logoUrl?d.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:i(S))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:i(S))("/image/coins/sui-unknown.png")]]),o("span",null,t(d.symbol),1)],2))),128)):e.rewarderInfo&&e.rewarderInfo.length==0&&e.lItem.rewarder_apr!=="0%"?(n(),te(Q,{key:1,size:"small"})):I("",!0)]),e.rewarderInfo&&e.rewarderInfo.length==0&&e.lItem.rewarder_apr=="0%"?(n(),a("div",{key:0,class:A(["induction-value",e.lItem.rewarder_apr=="0%"?"text-default":"induction-value-rewards"])},t(e.$t("newAdd.noRewards")),3)):I("",!0)])):I("",!0)]),e.lItem.is_pause?(n(),te(X,{key:0,class:"addBtn",disabled:e.lItem.is_pause,loading:e.addLiquidity},{default:ie(()=>[J(t(e.lItem.is_pause?"Pool Closed":e.$t("button.addLiquidity")),1)]),_:1},8,["disabled","loading"])):I("",!0),y(l,{class:"addBtn",to:`/liquidity/deposit?poolAddress=${e.lItem.address}`},{default:ie(()=>[J(t(e.$t("button.addLiquidity")),1)]),_:1},8,["to"])])],2)}const Jo=_e(Te,[["render",Fo],["__scopeId","data-v-67f47c44"]]);export{Jo as _,Fe as a,Le as b,Re as c};
