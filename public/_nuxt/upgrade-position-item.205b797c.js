import{_ as Pe}from"./status-block.c7ec4803.js";import{g as J,b as Oe,u as je,s as Ae,j as Q,a as i,i as Se,e as De,c as Z,d as l}from"./pool.e39ccd2c.js";import{a as oe,x as ne,l as k,e as re,o as n,f as r,h as s,i as P,u as a,t as o,c as Fe,w as ae,s as I,j as H,A as K,O as Be,p as de,k as ie,b as Te,r as E,H as Ee,E as He,m as Ve,q as g,F as W,C as G,S as Le}from"./entry.9b70370c.js";/* empty css              */import{u as te,c as qe}from"./sha256.160e359b.js";/* empty css              */import{i as Y}from"./import-icon.de3e6c66.js";import{D as Me}from"./decimal.0e8aa3f1.js";import{_ as me}from"./icon-arrow_2x.948aedb2.js";import{_ as le}from"./icon-arrow_2x.4ffddb8e.js";const ze=oe({props:{pItem:{type:Object,required:!0},currentStatus:{type:String,required:!0},rewarderInfo:{type:Number,required:!0},aprAmount:{type:Number,required:!0}},setup(e){const{t:c}=ne(),R=te(),C=k(()=>R),u=k(()=>C.value.chainName);console.log(e.pItem,"pItempItem121221");const O=k(()=>qe[u.value]);return{getExplorerUrl:J,store:C,config:O,t:c}}});const pe=e=>(de("data-v-4530e4e6"),e=e(),ie(),e),We={class:"status-block-box"},Ge={key:0,class:"owner-addres"},Je=["href"],Ke=["href"],Qe={class:"copy-link"},Xe=pe(()=>s("use",{"xlink:href":"#icon-icon-copy"},null,-1)),Ye=["href"],Ze=pe(()=>s("svg",{class:"icon","aria-hidden":"true"},[H(" > "),s("use",{"xlink:href":"#icon-icon-link"})],-1)),xe=[Ze];function es(e,c,R,C,u,O){const N=Pe,m=Be;return n(),r("div",{class:K(["upgrade-position-status",`position-status-${e.pItem.currentStatus.toLowerCase()}`])},[s("div",We,[P(N,{class:"status-block","current-status":e.pItem.currentStatus||"","is-pause":e.pItem.is_pause,"apr-amount":e.aprAmount,"block-name":"position"},null,8,["current-status","is-pause","apr-amount"])]),e.pItem.tokenName?(n(),r("div",Ge,[e.pItem.tokenName.length<=24?(n(),r("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:a(J))("nftAddress",e.pItem.nftHash),target:"_blank"},o(e.pItem.tokenName.split("|")[1]),9,Je)):(n(),Fe(m,{key:1,placement:"bottom","arrow-point-at-center":""},{title:ae(()=>[s("span",null,o(e.pItem.tokenName),1)]),default:ae(()=>[s("a",{target:"_blank",href:("getExplorerUrl"in e?e.getExplorerUrl:a(J))("nftAddress",e.pItem.nftHash)},o(e.pItem.tokenName.substr(0,4))+" ... "+o(e.pItem.tokenName.substr(e.pItem.tokenName.length-4,4)),9,Ke)]),_:1}))])):I("",!0),s("div",Qe,[(n(),r("svg",{class:"icon","aria-hidden":"true",onClick:c[0]||(c[0]=h=>e.store.copy(e.pItem.nftHash))},[H(" > "),Xe])),e.pItem.tokenName.length<=24?(n(),r("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:a(J))("nftAddress",e.pItem.nftHash),target:"_blank"},xe,8,Ye)):I("",!0)])],2)}const ss=re(ze,[["render",es],["__scopeId","data-v-4530e4e6"]]),as=oe({props:{pItem:{type:Object,required:!0}},setup(e){const{t:c}=ne(),R=Te(),C=te(),u=k(()=>C),O=k(()=>u.value.chainName?Oe(u.value.chainName):{}),N=je(),m=k(()=>N),h=()=>{N.setPositionDetailCurrentTab("increase"),u.value.chainName==="Aptos"?R.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}`):R.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}&pos=${e.pItem.pos_object_id}`)},V=k(()=>m.value.allTokenObj&&e.pItem.token_a.address&&m.value.allTokenObj[e.pItem.token_a.address]&&m.value.allTokenObj[e.pItem.token_a.address].logo_url),d=k(()=>m.value.allTokenObj&&e.pItem.token_b.address&&m.value.allTokenObj[e.pItem.token_b.address]&&m.value.allTokenObj[e.pItem.token_b.address].logo_url),ue=k(()=>m.value.feeOwedObj[e.pItem.tokenName]&&m.value.feeOwedObj[e.pItem.tokenName].feeOwed),ve=k(()=>(console.log(m.value.feeOwedObj[e.pItem.tokenName]&&m.value.feeOwedObj[e.pItem.tokenName].feesResult,"772"),m.value.feeOwedObj[e.pItem.tokenName]&&m.value.feeOwedObj[e.pItem.tokenName].feesResult)),Ie=k(()=>m.value.rewarderObj[e.pItem.tokenName]&&m.value.rewarderObj[e.pItem.tokenName].pendingRewarder),ke=k(()=>m.value.rewarderObj[e.pItem.tokenName]&&m.value.rewarderObj[e.pItem.tokenName].pendingRewarderView),he=k(()=>m.value.rewarderObj[e.pItem.tokenName]&&m.value.rewarderObj[e.pItem.tokenName].pendingRewarderArr),ce=E(0),be=E();Ee(()=>m.value.RATES,t=>{t&&(be.value=t)},{immediate:!0});const ge=t=>{var w;return(t==null?void 0:t.logoURI)||(t==null?void 0:t.logo_url)||((w=m.value.tokensObj[t==null?void 0:t.address])==null?void 0:w.logo_url)||(u.value.theme==="default"?Y("/image/coins/unknown.png"):Y("/image/coins/sui-unknown.png"))},we=k(()=>m.value.tokensObj);He(()=>{Re(e.pItem),ye(e.pItem.minPrice,e.pItem.maxPrice)});const X=E("--"),ye=(t,w)=>{t!=="0"&&w!=="∞"?X.value=Ae(1/(1-Number((t/w)**.25)),2)+"x":X.value=1},$=E(30),v=E(null),Re=async t=>{var x,ee,se;console.log("0607###list###aprPercentageObj###poolInfo###",t),console.log("0607###list###aprPercentageObj###props.pItem###",e.pItem),console.log("0607###list###aprPercentageObj###directs###",!0);const j=Number(e.pItem.minPrice),A=isNaN(Number(e.pItem.maxPrice))||e.pItem.maxPrice=="∞"?2**50:Number(e.pItem.maxPrice);let b=[];b=u.value&&u.value.addressHistTokens&&u.value.addressHistTokens[t.poolAddress]&&u.value.addressHistTokens[t.poolAddress].data&&u.value.addressHistTokens[t.poolAddress].data.length>0&&Object.fromEntries(u.value.addressHistTokens[t.poolAddress].data.map(L=>[L.key,L.value]));const S=Number(Number($.value==7?b.before_7_d_contract_price_lowest:$.value==24?b.before_24_h_contract_price_lowest:b.before_30_d_contract_price_lowest)),D=Number(Number($.value==7?b.before_7_d_contract_price_highest:$.value==24?b.before_24_h_contract_price_highest:b.before_30_d_contract_price_highest));console.log("0607###list###aprPercentageObj###lowerUserPrice###",j),console.log("0607###list###aprPercentageObj###upperUserPrice###",A),console.log("0607###list###aprPercentageObj###lowerHistPrice###",S),console.log("0607###list###aprPercentageObj###upperHistPrice###",D);const _=m.value.tokensObj,F=await O.value.getEstPositionAPRWithMulti(j,A,S,D);console.log("0607###lis###resMulti####",F.toString());const f=Number(F.toString()),p=u.value.newTopPoolsObj[t.poolAddress];let U;if(p){$.value==7?U=p.apr_7day?Number(p.apr_7day.substring(0,p.apr_7day.length-1)):0:$.value==24?U=p.apr_24h?Number(p.apr_24h.substring(0,p.apr_24h.length-1)):0:U=p.apr_30day?Number(p.apr_30day.substring(0,p.apr_30day.length-1)):0;const L=p.rewarder_apr[0]?Number(p.rewarder_apr[0].substring(0,p.rewarder_apr[0].length-1)):0,fe=p.rewarder_apr[1]?Number(p.rewarder_apr[1].substring(0,p.rewarder_apr[1].length-1)):0,Ue=p.rewarder_apr[2]?Number(p.rewarder_apr[2].substring(0,p.rewarder_apr[2].length-1)):0,B=Number(f*U),q=Number(f*L),M=Number(f*fe),z=Number(f*Ue),T=B+(t.rewarder_display1?q:0)+(t.rewarder_display2?M:0)+(t.rewarder_display3?z:0),Ce=t.rewarder_infos[0]?(x=_[t.rewarder_infos[0].coinAddress])==null?void 0:x.symbol:"--",Ne=t.rewarder_infos[1]?(ee=_[t.rewarder_infos[1].coinAddress])==null?void 0:ee.symbol:"--",$e=t.rewarder_infos[2]?(se=_[t.rewarder_infos[2].coinAddress])==null?void 0:se.symbol:"--",_e={aprFee:B==1/0||isNaN(B)?0:B,rewardAprList:[{rewarder_name:Ce,rewarder_apr:q==1/0||isNaN(q)?0:q,styleName:"one",rewarder_display:t.rewarder_display1},{rewarder_name:Ne,rewarder_apr:M==1/0||isNaN(M)?0:M,styleName:"two",rewarder_display:t.rewarder_display2},{rewarder_name:$e,rewarder_apr:z==1/0||isNaN(z)?0:z,styleName:"three",rewarder_display:t.rewarder_display2}],aprPercentageTotal:T==1/0||isNaN(T)||T===0?0:T,aprPercentage:Q(B/T,2),is_display_rewarder:t.is_display_rewarder};v.value=_e}};return{aprNum:k(()=>{var t,w,j,A,b,S,D,_,F,f,p,U;return v.value?v.value.is_display_rewarder?(t=v.value)!=null&&t.aprPercentageTotal?((w=v.value)==null?void 0:w.aprPercentageTotal)>1e4?">10,000":((j=v.value)==null?void 0:j.aprPercentageTotal)<.01&&((A=v.value)==null?void 0:A.aprPercentageTotal)>0?"<0.01":i((b=v.value)==null?void 0:b.aprPercentageTotal,2):(S=v.value)!=null&&S.rewardAprList?"0":"--":(D=v.value)!=null&&D.aprFee?((_=v.value)==null?void 0:_.aprFee)>1e4?">10,000":((F=v.value)==null?void 0:F.aprFee)<.01&&((f=v.value)==null?void 0:f.aprFee)>0?"<0.01":i((p=v.value)==null?void 0:p.aprFee,2):(U=v.value)!=null&&U.rewardAprList?"0":"--":"--"}),lever:X,tokensObj:we,showNum:Se,fromCoinUrl:V,toCoinUrl:d,decimalFormat:De,clickDetails:h,t:c,addCommom:i,importIcon:Y,router:R,store:u,pendingRewarder:Ie,pendingFees:ue,pendingRewarderArr:he,pendingFeesArr:ve,checkNullObj:Z,fixD:Q,decimalUi:l,pendingRewarderView:ke,aprAmount:ce,getCoinIcon:ge,Decimal:Me}}});const y=e=>(de("data-v-c789eaad"),e=e(),ie(),e),os={class:"upgrade-position-item"},ns={class:"card-content"},rs={class:"left"},ds={class:"top card-header"},is={class:"token-item"},ts={class:"item"},ms={key:0,class:"token-warning"},ls={key:0},ps={class:"item"},us={key:0,class:"token-warning"},vs={key:0},Is={class:"card-header-right"},ks={key:0,class:"item"},hs=y(()=>s("span",null,"Leverage",-1)),cs=y(()=>s("div",{class:"more-img"},null,-1)),bs={class:"bottom"},gs={class:"info-block-container"},ws={class:"info-block"},ys=y(()=>s("div",{class:"leabl"},"Fee Tier",-1)),Rs={class:"text"},fs={class:"info-block"},Us=y(()=>s("div",{class:"leabl"},"Price Range",-1)),Cs={class:"text"},Ns={class:"min-and-max"},$s={class:"left-text"},_s={class:"text"},Ps={class:"hover-text"},Os={key:0,src:me,alt:""},js={key:1,src:le,alt:""},As={class:"right-text"},Ss={class:"text"},Ds={class:"hover-text"},Fs={class:"leabl"},Bs={class:"text"},Ts={key:0,class:"hover-rewarder"},Es={class:"rewarder-info"},Hs={class:"left-rewarder"},Vs={alt:""},Ls={class:"right-rewarder"},qs={class:"amount"},Ms={key:0,class:"amount-usd"},zs={key:1,class:"amount-usd"},Ws={class:"rewarder-info"},Gs={class:"left-rewarder"},Js={alt:""},Ks={class:"right-rewarder"},Qs={class:"amount"},Xs={key:0,class:"amount-usd"},Ys={key:1,class:"amount-usd"},Zs={class:"leabl"},xs={key:0,class:"text"},ea={key:1,class:"text"},sa={key:2,class:"text"},aa={key:3,class:"hover-rewarder"},oa={class:"left-rewarder"},na={alt:""},ra={class:"right-rewarder"},da={class:"amount"},ia={class:"amount-usd"},ta={class:"leabl"},ma={key:0,class:"text"},la={key:1,class:"text"},pa={key:2,class:"hover-rewarder"},ua={class:"left-rewarder"},va={alt:""},Ia={class:"right-rewarder"},ka={class:"amount"},ha={class:"amount-usd"},ca={class:"h5-bottom"},ba={class:"item"},ga=y(()=>s("span",null,"Leverage",-1)),wa=y(()=>s("div",{class:"more-img"},null,-1)),ya={class:"info"},Ra={class:"info-item"},fa=y(()=>s("div",{class:"left"},"Fee Tier",-1)),Ua={class:"right"},Ca={class:"info-item range-item"},Na={class:"left"},$a={class:"right"},_a={class:"min-and-max"},Pa={class:"text"},Oa={key:0,src:me,alt:""},ja={key:1,src:le,alt:""},Aa={class:"text"},Sa={class:"info-item"},Da=y(()=>s("div",{class:"left"},"Liquidity",-1)),Fa={class:"right"},Ba={key:0,class:"hover-rewarder"},Ta={class:"rewarder-info"},Ea={class:"left-rewarder"},Ha={alt:""},Va={class:"right-rewarder"},La={class:"amount"},qa={key:0,class:"amount-usd"},Ma={key:1,class:"amount-usd"},za={class:"rewarder-info"},Wa={class:"left-rewarder"},Ga={alt:""},Ja={class:"right-rewarder"},Ka={class:"amount"},Qa={key:0,class:"amount-usd"},Xa={key:1,class:"amount-usd"},Ya={class:"info-item"},Za=y(()=>s("div",{class:"left"},"Pending Fees",-1)),xa={key:0,class:"right"},eo={key:1,class:"right"},so={key:2,class:"right"},ao={key:3,class:"hover-rewarder"},oo={class:"left-rewarder"},no={alt:""},ro={class:"right-rewarder"},io={class:"amount"},to={class:"amount-usd"},mo={key:0,class:"info-item"},lo={class:"left"},po={key:0,class:"right"},uo={key:1,class:"right"},vo={key:2,class:"hover-rewarder"},Io={class:"left-rewarder"},ko={alt:""},ho={class:"right-rewarder"},co={class:"amount"},bo={class:"amount-usd"};function go(e,c,R,C,u,O){var V;const N=ss,m=Le,h=Ve("image");return n(),r("div",os,[s("div",ns,[s("div",rs,[P(N,{"p-item":e.pItem,"current-status":((V=e.pItem)==null?void 0:V.currentStatus)||"","rewarder-info":e.pendingRewarder,"apr-amount":e.aprAmount},null,8,["p-item","current-status","rewarder-info","apr-amount"])]),s("div",{class:"right",onClick:c[0]||(c[0]=(...d)=>e.clickDetails&&e.clickDetails(...d))},[s("div",ds,[s("div",is,[s("div",ts,[s("div",null,[g(s("img",null,null,512),[[h,(e.pItem.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt)?(n(),r("div",ms)):I("",!0),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("p",null,[H(o(e.pItem.needReverse?e.pItem.token_b.name:e.pItem.token_a.name)+" ",1),e.store.theme=="default"?(n(),r("span",ls,o(e.pItem.needReverse?e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:"":e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:""),1)):I("",!0)])]),s("div",ps,[s("div",null,[g(s("img",null,null,512),[[h,(e.pItem.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt)?(n(),r("div",us)):I("",!0),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("p",null,[H(o(e.pItem.needReverse?e.pItem.token_a.name:e.pItem.token_b.name)+" ",1),e.store.theme=="default"?(n(),r("span",vs,o(e.pItem.needReverse?e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:"":e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:""),1)):I("",!0)])])]),s("div",Is,[e.pItem.minPrice!=="0"&&e.pItem.maxPrice!=="∞"?(n(),r("div",ks,[hs,s("p",null,o(e.lever),1)])):I("",!0),cs])]),s("div",bs,[s("div",gs,[s("div",ws,[ys,s("div",Rs,o(e.pItem.fee*100)+"%",1)]),s("div",fs,[Us,s("div",Cs,[s("div",Ns,[s("div",$s,[s("div",_s,o(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.minPrice,6))),1),s("div",Ps,o(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.minPrice,6))),1)]),e.store.theme=="default"?(n(),r("img",Os)):(n(),r("img",js)),s("div",As,[s("div",Ss,o((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.maxPrice,6))),1),s("div",Ds,o((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.maxPrice,6))),1)]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)])])]),s("div",{class:K(["info-block cursor-block",e.pItem.amountUSD=="--"||Number(e.pItem.amountUSD)==0?"block-none":""])},[s("div",Fs,o(e.$t("common.liquidity")),1),s("div",Bs," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:a(i))(e.pItem.amountUSD,2)),1),e.pItem.amountUSD>0?(n(),r("div",Ts,[s("div",Es,[s("div",Hs,[g(s("img",Vs,null,512),[[h,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",Ls,[s("div",qs,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(n(),r("div",zs,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("fixD"in e?e.fixD:a(Q))(e.pItem.tokenBRates,2):"<$0.01"),1)):(n(),r("div",Ms,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("fixD"in e?e.fixD:a(Q))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",Ws,[s("div",Gs,[g(s("img",Js,null,512),[[h,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",Ks,[s("div",Qs,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(n(),r("div",Ys,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.tokenARates,2)):"<$0.01"),1)):(n(),r("div",Xs,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):I("",!0)],2),s("div",{class:K(["info-block cursor-block",e.pendingFees==0?"block-none":""])},[s("div",Zs,o(e.$t("newAdd.pendingFees")),1),e.pendingFees==="--"?(n(),r("div",xs,"$ --")):isNaN(e.pendingFees)?(n(),r("div",sa,[P(m,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),r("div",ea,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:a(i))(e.pendingFees,2)),1)),e.pendingFees>0?(n(),r("div",aa,[(n(!0),r(W,null,G(e.pendingFeesArr,d=>(n(),r("div",{key:d,class:"rewarder-info"},[s("div",oa,[g(s("img",na,null,512),[[h,e.getCoinIcon(d)]]),s("span",null,o(d.symbol),1)]),s("div",ra,[s("div",da,o(Number(d.amount)==0?0:Number(d.amount)>1e-6?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(d.amount,d.decimals),d.decimals):"<0.000001"),1),s("div",ia,o(Number(d.amountUSD)==0?"$0":Number(d.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:a(i))(d.amountUSD,2):"<$0.01"),1)])]))),128))])):I("",!0)],2),e.pItem.is_display_rewarder&&!("checkNullObj"in e?e.checkNullObj:a(Z))(e.pItem.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(n(),r("div",{key:0,class:K(["info-block cursor-block",e.pendingRewarder==0?"block-none":""])},[s("div",ta,o(e.$t("newAdd.pendingRewards")),1),e.pendingRewarder||e.pendingRewarder==0?(n(),r("div",ma," $"+o(e.pendingRewarder>0&&e.pendingRewarderView>0?e.pendingRewarderView:e.pendingRewarder>0&&e.pendingRewarderView<=0?"<0.01":0),1)):(n(),r("div",la,[P(m,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])),e.pendingRewarder>0?(n(),r("div",pa,[(n(!0),r(W,null,G(e.pendingRewarderArr,d=>(n(),r("div",{key:d,class:"rewarder-info"},[s("div",ua,[g(s("img",va,null,512),[[h,d.logoURI]]),s("span",null,o(d.symbol),1)]),s("div",Ia,[s("div",ka,o(("decimalUi"in e?e.decimalUi:a(l))(d.amount,d.decimals)),1),s("div",ha,o(Number(d.amountUSD)==0?"$0":Number(d.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:a(i))(d.amountUSD,2):"<$0.01"),1)])]))),128))])):I("",!0)],2)):I("",!0)])])])]),s("div",ca,[s("div",{class:"card-header-right",onClick:c[1]||(c[1]=(...d)=>e.clickDetails&&e.clickDetails(...d))},[s("div",ba,[ga,s("p",null,o(e.lever),1)]),wa]),s("div",ya,[s("div",Ra,[fa,s("div",Ua,o(e.pItem.fee*100)+"%",1)]),s("div",Ca,[s("div",Na,[H("Price Range ("),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol)+")",1)]),s("div",$a,[s("div",_a,[s("div",Pa,o(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.minPrice,6))),1),e.store.theme=="default"?(n(),r("img",Oa)):(n(),r("img",ja)),s("div",Aa,o((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.maxPrice,6))),1)])])]),s("div",Sa,[Da,s("div",Fa," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:a(i))(e.pItem.amountUSD,2)),1),e.pItem.amountUSD>0?(n(),r("div",Ba,[s("div",Ta,[s("div",Ea,[g(s("img",Ha,null,512),[[h,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",Va,[s("div",La,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(n(),r("div",Ma,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:a(i))(e.pItem.tokenBRates,2):"<$0.01"),1)):(n(),r("div",qa,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:a(i))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",za,[s("div",Wa,[g(s("img",Ga,null,512),[[h,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",Ja,[s("div",Ka,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(n(),r("div",Xa,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.tokenARates,2)):"<$0.01"),1)):(n(),r("div",Qa,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):I("",!0)]),s("div",Ya,[Za,e.pendingFees==="--"?(n(),r("div",xa,"$ --")):isNaN(e.pendingFees)?(n(),r("div",so,[P(m,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),r("div",eo,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:a(i))(e.pendingFees,2)),1)),e.pendingFees>0?(n(),r("div",ao,[(n(!0),r(W,null,G(e.pendingFeesArr,d=>(n(),r("div",{key:d,class:"rewarder-info"},[s("div",oo,[g(s("img",no,null,512),[[h,e.getCoinIcon(d)]]),s("span",null,o(d.symbol),1)]),s("div",ro,[s("div",io,o(Number(d.amount)==0?0:Number(d.amount)>1e-6?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(d.amount,d.decimals),d.decimals):"<0.000001"),1),s("div",to,o(Number(d.amountUSD)==0?"$0":Number(d.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:a(i))(d.amountUSD,2):"<$0.01"),1)])]))),128))])):I("",!0)]),e.pItem.is_display_rewarder&&!("checkNullObj"in e?e.checkNullObj:a(Z))(e.pItem.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(n(),r("div",mo,[s("div",lo,o(e.$t("newAdd.pendingRewards")),1),e.pendingRewarder||e.pendingRewarder==0?(n(),r("div",po," $"+o(e.pendingRewarder>0&&e.pendingRewarderView>0?e.pendingRewarderView:e.pendingRewarder>0&&e.pendingRewarderView<=0?"<0.01":0),1)):(n(),r("div",uo,[P(m,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])),e.pendingRewarder>0?(n(),r("div",vo,[(n(!0),r(W,null,G(e.pendingRewarderArr,d=>(n(),r("div",{key:d,class:"rewarder-info"},[s("div",Io,[g(s("img",ko,null,512),[[h,d.logoURI]]),s("span",null,o(d.symbol),1)]),s("div",ho,[s("div",co,o(("decimalUi"in e?e.decimalUi:a(l))(d.amount,d.decimals)),1),s("div",bo,o(Number(d.amountUSD)==0?"$0":Number(d.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:a(i))(d.amountUSD,2):"<$0.01"),1)])]))),128))])):I("",!0)])):I("",!0)])])])}const jo=re(as,[["render",go],["__scopeId","data-v-c789eaad"]]);export{jo as _};
