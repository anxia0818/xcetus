import{_ as Pe}from"./status-block.18cdf388.js";import{g as Y,e as Oe,u as je,s as Ae,o as x,a as i,m as Se,j as De,c as ae,d as l}from"./pool.7c12ee80.js";import{a as ie,y as te,l as I,e as me,o as n,f as r,h as s,i as P,u as a,v as o,c as Fe,w as de,x as k,j as V,A as Z,P as Ee,p as le,k as pe,b as Be,r as T,q as Te,H as Ve,s as qe,t as b,F as Q,E as X,M as Me}from"./entry.41263a76.js";/* empty css              */import{u as ue,c as He}from"./sha256.21a938bb.js";/* empty css              */import{i as se}from"./import-icon.de3e6c66.js";import{D as ze}from"./decimal.0bdeb344.js";import{_ as ve}from"./icon-arrow_2x.948aedb2.js";import{_ as Ie}from"./icon-arrow_2x.4ffddb8e.js";const We=ie({props:{pItem:{type:Object,required:!0},currentStatus:{type:String,required:!0},rewarderInfo:{type:Number,required:!0},aprAmount:{type:Number,required:!0}},setup(e){const{t:g}=te(),R=ue(),U=I(()=>R),v=I(()=>U.value.chainName);console.log(e.pItem,"pItempItem121221");const O=I(()=>He[v.value]),y=I(()=>U.value.currentExplorer);return{getExplorerUrl:Y,store:U,config:O,t:g,currentExplorer:y}}});const he=e=>(le("data-v-3d46c709"),e=e(),pe(),e),Ge={class:"status-block-box"},Je={key:0,class:"owner-addres"},Ke=["href"],Le=["href"],Qe={class:"copy-link"},Xe=he(()=>s("use",{"xlink:href":"#icon-icon-copy"},null,-1)),Ye=["href"],Ze=he(()=>s("svg",{class:"icon","aria-hidden":"true"},[V(" > "),s("use",{"xlink:href":"#icon-icon-link"})],-1)),xe=[Ze];function es(e,g,R,U,v,O){const y=Pe,m=Ee;return n(),r("div",{class:Z(["upgrade-position-status",`position-status-${e.pItem.currentStatus.toLowerCase()}`])},[s("div",Ge,[P(y,{class:"status-block","current-status":e.pItem.currentStatus||"","is-pause":e.pItem.is_pause,"apr-amount":e.aprAmount,"block-name":"position"},null,8,["current-status","is-pause","apr-amount"])]),e.pItem.tokenName?(n(),r("div",Je,[e.pItem.tokenName.length<=24?(n(),r("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:a(Y))(e.currentExplorer,"nftAddress",e.pItem.nftHash),target:"_blank"},o(e.pItem.tokenName.split("|")[1]),9,Ke)):(n(),Fe(m,{key:1,placement:"bottom","arrow-point-at-center":""},{title:de(()=>[s("span",null,o(e.pItem.tokenName),1)]),default:de(()=>[s("a",{target:"_blank",href:("getExplorerUrl"in e?e.getExplorerUrl:a(Y))(e.currentExplorer,"nftAddress",e.pItem.nftHash)},o(e.pItem.tokenName.substr(0,4))+" ... "+o(e.pItem.tokenName.substr(e.pItem.tokenName.length-4,4)),9,Le)]),_:1}))])):k("",!0),s("div",Qe,[(n(),r("svg",{class:"icon","aria-hidden":"true",onClick:g[0]||(g[0]=c=>e.store.copy(e.pItem.nftHash))},[V(" > "),Xe])),e.pItem.tokenName.length<=24?(n(),r("a",{key:0,href:("getExplorerUrl"in e?e.getExplorerUrl:a(Y))(e.currentExplorer,"nftAddress",e.pItem.nftHash),target:"_blank"},xe,8,Ye)):k("",!0)])],2)}const ss=me(We,[["render",es],["__scopeId","data-v-3d46c709"]]),as=ie({props:{pItem:{type:Object,required:!0}},setup(e){const{t:g}=te(),R=Be(),U=ue(),v=I(()=>U),O=I(()=>v.value.chainName?Oe(v.value.chainName):{}),y=je(),m=I(()=>y),c=()=>{y.setPositionDetailCurrentTab("increase"),v.value.chainName==="Aptos"?R.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}`):R.push(`/new-position-detail?collect=${e.pItem.collectionName}&&token=${e.pItem.tokenName}&&address=${e.pItem.pool}&pos=${e.pItem.pos_object_id}`)},q=I(()=>m.value.allTokenObj&&e.pItem.token_a.address&&m.value.allTokenObj[e.pItem.token_a.address]&&m.value.allTokenObj[e.pItem.token_a.address].logo_url),M=I(()=>m.value.allTokenObj&&e.pItem.token_b.address&&m.value.allTokenObj[e.pItem.token_b.address]&&m.value.allTokenObj[e.pItem.token_b.address].logo_url),H=I(()=>m.value.feeOwedObj[e.pItem.tokenName]&&m.value.feeOwedObj[e.pItem.tokenName].feeOwed),z=I(()=>(console.log(m.value.feeOwedObj[e.pItem.tokenName]&&m.value.feeOwedObj[e.pItem.tokenName].feesResult,"772"),m.value.feeOwedObj[e.pItem.tokenName]&&m.value.feeOwedObj[e.pItem.tokenName].feesResult)),W=I(()=>m.value.rewarderObj[e.pItem.tokenName]&&m.value.rewarderObj[e.pItem.tokenName].pendingRewarder),d=I(()=>m.value.rewarderObj[e.pItem.tokenName]&&m.value.rewarderObj[e.pItem.tokenName].pendingRewarderView),ke=I(()=>m.value.rewarderObj[e.pItem.tokenName]&&m.value.rewarderObj[e.pItem.tokenName].pendingRewarderArr),ce=T(0),ge=T();Te(()=>m.value.RATES,t=>{t&&(ge.value=t)},{immediate:!0});const be=t=>{var w;return(t==null?void 0:t.logoURI)||(t==null?void 0:t.logo_url)||((w=m.value.tokensObj[t==null?void 0:t.address])==null?void 0:w.logo_url)||(v.value.theme==="default"?se("/image/coins/unknown.png"):se("/image/coins/sui-unknown.png"))},we=I(()=>m.value.tokensObj);Ve(()=>{ye(e.pItem),fe(e.pItem.minPrice,e.pItem.maxPrice)});const ee=T("--"),fe=(t,w)=>{t!=="0"&&w!=="∞"?ee.value=Ae(1/(1-Number((t/w)**.25)),2)+"x":ee.value="1x"},$=T(30),h=T(null),ye=async t=>{var oe,ne,re;console.log("0607###list###aprPercentageObj###poolInfo###",t),console.log("0607###list###aprPercentageObj###props.pItem###",e.pItem),console.log("0607###list###aprPercentageObj###directs###",!0);const j=Number(e.pItem.minPrice),A=isNaN(Number(e.pItem.maxPrice))||e.pItem.maxPrice=="∞"?2**50:Number(e.pItem.maxPrice);let p=[];p=v.value&&v.value.addressHistTokens&&v.value.addressHistTokens[t.poolAddress]&&v.value.addressHistTokens[t.poolAddress].data&&v.value.addressHistTokens[t.poolAddress].data.length>0&&Object.fromEntries(v.value.addressHistTokens[t.poolAddress].data.map(G=>[G.key,G.value])),console.log(p,"###addressHistTokensList");const S=Number(Number($.value==7?p==null?void 0:p.before_7_d_contract_price_lowest:$.value==24?p==null?void 0:p.before_24_h_contract_price_lowest:p==null?void 0:p.before_30_d_contract_price_lowest)),D=Number(Number($.value==7?p==null?void 0:p.before_7_d_contract_price_highest:$.value==24?p==null?void 0:p.before_24_h_contract_price_highest:p==null?void 0:p.before_30_d_contract_price_highest));console.log("0607###list###aprPercentageObj###lowerUserPrice###",j),console.log("0607###list###aprPercentageObj###upperUserPrice###",A),console.log("0607###list###aprPercentageObj###lowerHistPrice###",S),console.log("0607###list###aprPercentageObj###upperHistPrice###",D);const _=m.value.tokensObj,F=await O.value.getEstPositionAPRWithMulti(j,A,S,D);console.log("0607###lis###resMulti####",F.toString());const C=Number(F.toString()),u=v.value.newTopPoolsObj[t.poolAddress];let N;if(u){$.value==7?N=u.apr_7day?Number(u.apr_7day.substring(0,u.apr_7day.length-1)):0:$.value==24?N=u.apr_24h?Number(u.apr_24h.substring(0,u.apr_24h.length-1)):0:N=u.apr_30day?Number(u.apr_30day.substring(0,u.apr_30day.length-1)):0;const G=u.rewarder_apr[0]?Number(u.rewarder_apr[0].substring(0,u.rewarder_apr[0].length-1)):0,Re=u.rewarder_apr[1]?Number(u.rewarder_apr[1].substring(0,u.rewarder_apr[1].length-1)):0,Ue=u.rewarder_apr[2]?Number(u.rewarder_apr[2].substring(0,u.rewarder_apr[2].length-1)):0,E=Number(C*N),J=Number(C*G),K=Number(C*Re),L=Number(C*Ue),B=E+(t.rewarder_display1?J:0)+(t.rewarder_display2?K:0)+(t.rewarder_display3?L:0),Ce=t.rewarder_infos[0]?(oe=_[t.rewarder_infos[0].coinAddress])==null?void 0:oe.symbol:"--",Ne=t.rewarder_infos[1]?(ne=_[t.rewarder_infos[1].coinAddress])==null?void 0:ne.symbol:"--",$e=t.rewarder_infos[2]?(re=_[t.rewarder_infos[2].coinAddress])==null?void 0:re.symbol:"--",_e={aprFee:E==1/0||isNaN(E)?0:E,rewardAprList:[{rewarder_name:Ce,rewarder_apr:J==1/0||isNaN(J)?0:J,styleName:"one",rewarder_display:t.rewarder_display1},{rewarder_name:Ne,rewarder_apr:K==1/0||isNaN(K)?0:K,styleName:"two",rewarder_display:t.rewarder_display2},{rewarder_name:$e,rewarder_apr:L==1/0||isNaN(L)?0:L,styleName:"three",rewarder_display:t.rewarder_display2}],aprPercentageTotal:B==1/0||isNaN(B)||B===0?0:B,aprPercentage:x(E/B,2),is_display_rewarder:t.is_display_rewarder};h.value=_e}};return{aprNum:I(()=>{var t,w,j,A,p,S,D,_,F,C,u,N;return h.value?h.value.is_display_rewarder?(t=h.value)!=null&&t.aprPercentageTotal?((w=h.value)==null?void 0:w.aprPercentageTotal)>1e4?">10,000":((j=h.value)==null?void 0:j.aprPercentageTotal)<.01&&((A=h.value)==null?void 0:A.aprPercentageTotal)>0?"<0.01":i((p=h.value)==null?void 0:p.aprPercentageTotal,2):(S=h.value)!=null&&S.rewardAprList?"0":"--":(D=h.value)!=null&&D.aprFee?((_=h.value)==null?void 0:_.aprFee)>1e4?">10,000":((F=h.value)==null?void 0:F.aprFee)<.01&&((C=h.value)==null?void 0:C.aprFee)>0?"<0.01":i((u=h.value)==null?void 0:u.aprFee,2):(N=h.value)!=null&&N.rewardAprList?"0":"--":"--"}),lever:ee,tokensObj:we,showNum:Se,fromCoinUrl:q,toCoinUrl:M,decimalFormat:De,clickDetails:c,t:g,addCommom:i,importIcon:se,router:R,store:v,pendingRewarder:W,pendingFees:H,pendingRewarderArr:ke,pendingFeesArr:z,checkNullObj:ae,fixD:x,decimalUi:l,pendingRewarderView:d,aprAmount:ce,getCoinIcon:be,Decimal:ze}}});const f=e=>(le("data-v-fa0ad34f"),e=e(),pe(),e),os={class:"upgrade-position-item"},ns={class:"card-content"},rs={class:"left"},ds={class:"top card-header"},is={class:"token-item"},ts={class:"item"},ms={key:0,class:"token-warning"},ls={key:0},ps={class:"item"},us={key:0,class:"token-warning"},vs={key:0},Is={class:"card-header-right"},hs={class:"item"},ks=f(()=>s("span",null,"Leverage",-1)),cs=f(()=>s("div",{class:"more-img"},null,-1)),gs={class:"bottom"},bs={class:"info-block-container"},ws={class:"info-block"},fs=f(()=>s("div",{class:"leabl"},"Fee Tier",-1)),ys={class:"text"},Rs={class:"info-block"},Us=f(()=>s("div",{class:"leabl"},"Price Range",-1)),Cs={class:"text"},Ns={class:"min-and-max"},$s={class:"left-text"},_s={class:"text"},Ps={class:"hover-text"},Os={key:0,src:ve,alt:""},js={key:1,src:Ie,alt:""},As={class:"right-text"},Ss={class:"text"},Ds={class:"hover-text"},Fs={class:"leabl"},Es={class:"text"},Bs={key:0,class:"hover-rewarder"},Ts={class:"rewarder-info"},Vs={class:"left-rewarder"},qs={alt:""},Ms={class:"right-rewarder"},Hs={class:"amount"},zs={key:0,class:"amount-usd"},Ws={key:1,class:"amount-usd"},Gs={class:"rewarder-info"},Js={class:"left-rewarder"},Ks={alt:""},Ls={class:"right-rewarder"},Qs={class:"amount"},Xs={key:0,class:"amount-usd"},Ys={key:1,class:"amount-usd"},Zs={class:"leabl"},xs={key:0,class:"text"},ea={key:1,class:"text"},sa={key:2,class:"text"},aa={key:3,class:"hover-rewarder"},oa={class:"left-rewarder"},na={alt:""},ra={class:"right-rewarder"},da={class:"amount"},ia={class:"amount-usd"},ta={class:"leabl"},ma={key:0,class:"text"},la={key:1,class:"text"},pa={key:2,class:"hover-rewarder"},ua={class:"left-rewarder"},va={alt:""},Ia={class:"right-rewarder"},ha={class:"amount"},ka={class:"amount-usd"},ca={class:"h5-bottom"},ga={class:"item"},ba=f(()=>s("span",null,"Leverage",-1)),wa=f(()=>s("div",{class:"more-img"},null,-1)),fa={class:"info"},ya={class:"info-item"},Ra=f(()=>s("div",{class:"left"},"Fee Tier",-1)),Ua={class:"right"},Ca={class:"info-item range-item"},Na={class:"left"},$a={class:"right"},_a={class:"min-and-max"},Pa={class:"text"},Oa={key:0,src:ve,alt:""},ja={key:1,src:Ie,alt:""},Aa={class:"text"},Sa={class:"info-item"},Da=f(()=>s("div",{class:"left"},"Liquidity",-1)),Fa={class:"right"},Ea={key:0,class:"hover-rewarder"},Ba={class:"rewarder-info"},Ta={class:"left-rewarder"},Va={alt:""},qa={class:"right-rewarder"},Ma={class:"amount"},Ha={key:0,class:"amount-usd"},za={key:1,class:"amount-usd"},Wa={class:"rewarder-info"},Ga={class:"left-rewarder"},Ja={alt:""},Ka={class:"right-rewarder"},La={class:"amount"},Qa={key:0,class:"amount-usd"},Xa={key:1,class:"amount-usd"},Ya={class:"info-item"},Za=f(()=>s("div",{class:"left"},"Pending Fees",-1)),xa={key:0,class:"right"},eo={key:1,class:"right"},so={key:2,class:"right"},ao={key:3,class:"hover-rewarder"},oo={class:"left-rewarder"},no={alt:""},ro={class:"right-rewarder"},io={class:"amount"},to={class:"amount-usd"},mo={key:0,class:"info-item"},lo={class:"left"},po={key:0,class:"right"},uo={key:1,class:"right"},vo={key:2,class:"hover-rewarder"},Io={class:"left-rewarder"},ho={alt:""},ko={class:"right-rewarder"},co={class:"amount"},go={class:"amount-usd"};function bo(e,g,R,U,v,O){var q,M,H,z,W;const y=ss,m=Me,c=qe("image");return n(),r("div",os,[s("div",ns,[s("div",rs,[P(y,{"p-item":e.pItem,"current-status":((q=e.pItem)==null?void 0:q.currentStatus)||"","rewarder-info":e.pendingRewarder,"apr-amount":e.aprAmount},null,8,["p-item","current-status","rewarder-info","apr-amount"])]),s("div",{class:"right",onClick:g[0]||(g[0]=(...d)=>e.clickDetails&&e.clickDetails(...d))},[s("div",ds,[s("div",is,[s("div",ts,[s("div",null,[b(s("img",null,null,512),[[c,(e.pItem.needReverse?e.toCoinUrl:e.fromCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt)?(n(),r("div",ms)):k("",!0),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("p",null,[V(o(e.pItem.needReverse?e.pItem.token_b.name:e.pItem.token_a.name)+" ",1),e.store.theme=="default"?(n(),r("span",ls,o(e.pItem.needReverse?e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:"":e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:""),1)):k("",!0)])]),s("div",ps,[s("div",null,[b(s("img",null,null,512),[[c,(e.pItem.needReverse?e.fromCoinUrl:e.toCoinUrl)||e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),(e.pItem.needReverse?e.tokensObj&&e.tokensObj[e.pItem.token_a.address]&&e.tokensObj[e.pItem.token_a.address].isSelfBuilt:e.tokensObj&&e.tokensObj[e.pItem.token_b.address]&&e.tokensObj[e.pItem.token_b.address].isSelfBuilt)?(n(),r("div",us)):k("",!0),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("p",null,[V(o(e.pItem.needReverse?e.pItem.token_a.name:e.pItem.token_b.name)+" ",1),e.store.theme=="default"?(n(),r("span",vs,o(e.pItem.needReverse?e.pItem.token_a.labels&&e.pItem.token_a.labels[0]?`(${e.pItem.token_a.labels[0]})`:"":e.pItem.token_b.labels&&e.pItem.token_b.labels[0]?`(${e.pItem.token_b.labels[0]})`:""),1)):k("",!0)])])]),s("div",Is,[s("div",hs,[ks,s("p",null,o(e.lever),1)]),cs])]),s("div",gs,[s("div",bs,[s("div",ws,[fs,s("div",ys,o(e.pItem.fee*100)+"%",1)]),s("div",Rs,[Us,s("div",Cs,[s("div",Ns,[s("div",$s,[s("div",_s,o(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.minPrice,6))),1),s("div",Ps,o(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.minPrice,6))),1)]),e.store.theme=="default"?(n(),r("img",Os)):(n(),r("img",js)),s("div",As,[s("div",Ss,o((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.maxPrice,6))),1),s("div",Ds,o((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.maxPrice,6))),1)]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)])])]),s("div",{class:Z(["info-block cursor-block",e.pItem.amountUSD=="--"||Number(e.pItem.amountUSD)==0?"block-none":""])},[s("div",Fs,o(e.$t("common.liquidity")),1),s("div",Es," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:a(i))(e.pItem.amountUSD,2)),1),e.pItem.amountUSD>0?(n(),r("div",Bs,[s("div",Ts,[s("div",Vs,[b(s("img",qs,null,512),[[c,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",Ms,[s("div",Hs,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(n(),r("div",Ws,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("fixD"in e?e.fixD:a(x))(e.pItem.tokenBRates,2):"<$0.01"),1)):(n(),r("div",zs,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("fixD"in e?e.fixD:a(x))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",Gs,[s("div",Js,[b(s("img",Ks,null,512),[[c,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",Ls,[s("div",Qs,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(n(),r("div",Ys,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.tokenARates,2)):"<$0.01"),1)):(n(),r("div",Xs,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):k("",!0)],2),s("div",{class:Z(["info-block cursor-block",e.pendingFees==0?"block-none":""])},[s("div",Zs,o(e.$t("newAdd.pendingFees")),1),e.pendingFees==="--"?(n(),r("div",xs,"$ --")):isNaN(e.pendingFees)?(n(),r("div",sa,[P(m,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),r("div",ea,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:a(i))(e.pendingFees,2)),1)),e.pendingFees>0?(n(),r("div",aa,[(n(!0),r(Q,null,X(e.pendingFeesArr,d=>(n(),r("div",{key:d,class:"rewarder-info"},[s("div",oa,[b(s("img",na,null,512),[[c,e.getCoinIcon(d)]]),s("span",null,o(d.symbol),1)]),s("div",ra,[s("div",da,o(Number(d.amount)==0?0:Number(d.amount)>1e-6?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(d.amount,d.decimals),d.decimals):"<0.000001"),1),s("div",ia,o(Number(d.amountUSD)==0?"$0":Number(d.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:a(i))(d.amountUSD,2):"<$0.01"),1)])]))),128))])):k("",!0)],2),e.pItem.is_display_rewarder&&((M=e.pItem)!=null&&M.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:a(ae))((H=e.pItem)==null?void 0:H.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(n(),r("div",{key:0,class:Z(["info-block cursor-block",e.pendingRewarder==0?"block-none":""])},[s("div",ta,o(e.$t("newAdd.pendingRewards")),1),e.pendingRewarder||e.pendingRewarder==0?(n(),r("div",ma," $"+o(e.pendingRewarder>0&&e.pendingRewarderView>0?e.pendingRewarderView:e.pendingRewarder>0&&e.pendingRewarderView<=0?"<0.01":0),1)):(n(),r("div",la,[P(m,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])),e.pendingRewarder>0?(n(),r("div",pa,[(n(!0),r(Q,null,X(e.pendingRewarderArr,d=>(n(),r("div",{key:d,class:"rewarder-info"},[s("div",ua,[b(s("img",va,null,512),[[c,d.logoURI]]),s("span",null,o(d.symbol),1)]),s("div",Ia,[s("div",ha,o(("decimalUi"in e?e.decimalUi:a(l))(d.amount,d.decimals)),1),s("div",ka,o(Number(d.amountUSD)==0?"$0":Number(d.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:a(i))(d.amountUSD,2):"<$0.01"),1)])]))),128))])):k("",!0)],2)):k("",!0)])])])]),s("div",ca,[s("div",{class:"card-header-right",onClick:g[1]||(g[1]=(...d)=>e.clickDetails&&e.clickDetails(...d))},[s("div",ga,[ba,s("p",null,o(e.lever),1)]),wa]),s("div",fa,[s("div",ya,[Ra,s("div",Ua,o(e.pItem.fee*100)+"%",1)]),s("div",Ca,[s("div",Na,[V("Price Range ("),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol)+" per "+o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol)+")",1)]),s("div",$a,[s("div",_a,[s("div",Pa,o(e.pItem.needReverse?e.pItem.maxPrice==="∞"?"0":("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(new e.Decimal(1).div(e.pItem.maxPrice).toString(),6)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.minPrice,6))),1),e.store.theme=="default"?(n(),r("img",Oa)):(n(),r("img",ja)),s("div",Aa,o((e.pItem.needReverse?e.pItem.minPrice.indexOf("+")>-1||e.pItem.minPrice=="0":e.pItem.maxPrice.indexOf("+")>-1||e.pItem.maxPrice==="∞")?"∞":e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(1/e.pItem.minPrice,6)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.maxPrice,6))),1)])])]),s("div",Sa,[Da,s("div",Fa," $"+o(e.pItem.amountUSD=="--"?"--":Number(e.pItem.amountUSD)==0?0:Number(e.pItem.amountUSD)<.01?"<0.01":("addCommom"in e?e.addCommom:a(i))(e.pItem.amountUSD,2)),1),e.pItem.amountUSD>0?(n(),r("div",Ea,[s("div",Ba,[s("div",Ta,[b(s("img",Va,null,512),[[c,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_b:e.pItem.token_a)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_b.symbol:e.pItem.token_a.symbol),1)]),s("div",qa,[s("div",Ma,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountB,e.pItem.token_b.decimals)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountA,e.pItem.token_a.decimals))),1),e.pItem.needReverse?(n(),r("div",za,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:a(i))(e.pItem.tokenBRates,2):"<$0.01"),1)):(n(),r("div",Ha,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:a(i))(e.pItem.tokenARates,2):"<$0.01"),1))])]),s("div",Wa,[s("div",Ga,[b(s("img",Ja,null,512),[[c,e.getCoinIcon(e.pItem.needReverse?e.pItem.token_a:e.pItem.token_b)]]),s("span",null,o(e.pItem.needReverse?e.pItem.token_a.symbol:e.pItem.token_b.symbol),1)]),s("div",Ka,[s("div",La,o(e.pItem.needReverse?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountA,e.pItem.token_a.decimals)):("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.amountB,e.pItem.token_b.decimals))),1),e.pItem.needReverse?(n(),r("div",Xa,o(e.pItem.tokenARates==0?"$0":e.pItem.tokenARates>.01?"$"+("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.tokenARates,2)):"<$0.01"),1)):(n(),r("div",Qa,o(e.pItem.tokenBRates==0?"$0":e.pItem.tokenBRates>.01?"$"+("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(e.pItem.tokenBRates,2)):"<$0.01"),1))])])])):k("",!0)]),s("div",Ya,[Za,e.pendingFees==="--"?(n(),r("div",xa,"$ --")):isNaN(e.pendingFees)?(n(),r("div",so,[P(m,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),r("div",eo,o(e.pendingFees==0?"$0":e.pendingFees<.01?"<$0.01":"$"+("addCommom"in e?e.addCommom:a(i))(e.pendingFees,2)),1)),e.pendingFees>0?(n(),r("div",ao,[(n(!0),r(Q,null,X(e.pendingFeesArr,d=>(n(),r("div",{key:d,class:"rewarder-info"},[s("div",oo,[b(s("img",no,null,512),[[c,e.getCoinIcon(d)]]),s("span",null,o(d.symbol),1)]),s("div",ro,[s("div",io,o(Number(d.amount)==0?0:Number(d.amount)>1e-6?("addCommom"in e?e.addCommom:a(i))(("decimalUi"in e?e.decimalUi:a(l))(d.amount,d.decimals),d.decimals):"<0.000001"),1),s("div",to,o(Number(d.amountUSD)==0?"$0":Number(d.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:a(i))(d.amountUSD,2):"<$0.01"),1)])]))),128))])):k("",!0)]),e.pItem.is_display_rewarder&&((z=e.pItem)!=null&&z.rewarder_infos)&&!("checkNullObj"in e?e.checkNullObj:a(ae))((W=e.pItem)==null?void 0:W.rewarder_infos)&&e.pendingRewarderArr&&e.pendingRewarderArr.length>0?(n(),r("div",mo,[s("div",lo,o(e.$t("newAdd.pendingRewards")),1),e.pendingRewarder||e.pendingRewarder==0?(n(),r("div",po," $"+o(e.pendingRewarder>0&&e.pendingRewarderView>0?e.pendingRewarderView:e.pendingRewarder>0&&e.pendingRewarderView<=0?"<0.01":0),1)):(n(),r("div",uo,[P(m,{class:"upgrade-reward-skeleton",loading:!0,active:"",paragraph:!1})])),e.pendingRewarder>0?(n(),r("div",vo,[(n(!0),r(Q,null,X(e.pendingRewarderArr,d=>(n(),r("div",{key:d,class:"rewarder-info"},[s("div",Io,[b(s("img",ho,null,512),[[c,d.logoURI]]),s("span",null,o(d.symbol),1)]),s("div",ko,[s("div",co,o(("decimalUi"in e?e.decimalUi:a(l))(d.amount,d.decimals)),1),s("div",go,o(Number(d.amountUSD)==0?"$0":Number(d.amountUSD)>.01?"$"+("addCommom"in e?e.addCommom:a(i))(d.amountUSD,2):"<$0.01"),1)])]))),128))])):k("",!0)])):k("",!0)])])])}const jo=me(as,[["render",bo],["__scopeId","data-v-fa0ad34f"]]);export{jo as _};
