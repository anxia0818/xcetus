import{_ as ye}from"./token-warning.24a17de7.js";import{_ as ve}from"./status-block.20a6f496.js";import{u as ae,e as be,q as oe,a as l,c as he,b as ne,d as a}from"./pool.6aa8f4bc.js";import{a as le,r as q,l as k,m as me,q as te,e as ue,o as i,f as n,h as r,j as ie,v as o,i as W,w as _,u as s,x as t,F as z,P as ke,p as ce,k as fe,$ as ge,y as pe,H as Pe,a8 as Ie,Q as Se,s as we,c as re,t as Z,O as Re,a1 as Ae,B as De}from"./entry.2d0457a5.js";/* empty css              */import{D as y}from"./decimal.0bdeb344.js";import{u as Ce,c as Ue}from"./sha256.86dbf6c4.js";/* empty css              */import{i as de}from"./import-icon.de3e6c66.js";import{u as Ne}from"./notifi.da5ecb0c.js";y.config({precision:64,rounding:y.ROUND_DOWN,toExpNeg:-64,toExpPos:64});const $e=le({props:{minPrice:{type:String,default:""},maxPrice:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},fixedFromCoin:{type:Boolean,default:!0},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},slippage:{type:Number,default:0},currentPrice:{type:Number,default:0},currentPriceReverse:{type:Number,default:0},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},positionTotalAmount:{type:Number,default:0},tickLower:{type:Number,default:0},tickUpper:{type:Number,default:0}},setup(e){const v=q("--"),L=q("--"),g=Ce(),j=k(()=>g);k(()=>j.value.chainName);const K=ae(),p=k(()=>K),O=k(()=>j.value.chainName?be(j.value.chainName):{});console.log(e,"props====>145");const I=me(),X=async()=>{var Y;if(!e.minPrice&&!e.maxPrice)return;const{TickUtil:c,TickMath:P,getNearestTickByTick:h}=O.value,T=e.poolInfo.token_a.decimals,D=e.poolInfo.token_b.decimals;let w,R,f,C,S,U,b,d=1,u=1;const A=e.poolInfo.current_tick_index;console.log(A,"==>currentTickIndex");let B=p.value.poolPriceConfigObj&&p.value.poolPriceConfigObj[e.poolInfo.address]&&p.value.poolPriceConfigObj[e.poolInfo.address].recommend_ranges||{};if(console.log(e.poolInfo.token_a.address,e.fromCoin.address,e.poolInfo.token_b.address,e.toCoin.address,"164===>"),e.poolInfo.token_a.address.toLowerCase()===e.fromCoin.address.toLowerCase()&&e.poolInfo.token_b.address.toLowerCase()===e.toCoin.address.toLowerCase()?b=!0:b=!1,console.log(b,"===>directs178"),e.minPrice==="0"&&e.maxPrice==="∞")f=c.getMinIndex(e.poolInfo.tickSpacing),C=c.getMaxIndex(e.poolInfo.tickSpacing);else if(e.currentPriceTab=="custom"||(Y=I==null?void 0:I.query)!=null&&Y.action){b?(w=e.minPrice,R=e.maxPrice):(w=new y(1).div(e.maxPrice).toString(),R=new y(1).div(e.minPrice).toString()),console.log(w,R,"min===>");try{S=P.priceToTickIndex(new y(w),T,D)}catch{S=-443636}try{U=P.priceToTickIndex(new y(R),T,D)}catch{U=443636}w==0&&(S=-443636),console.log(e.poolInfo.tickSpacing,"===>props.poolInfo.tickSpacing"),f=I.name=="increase-liquidity"||I.name=="new-position-detail"?e.tickLower:h(S,Number(e.poolInfo.tickSpacing),!0),C=I.name=="increase-liquidity"||I.name=="new-position-detail"?e.tickUpper:h(U,Number(e.poolInfo.tickSpacing),!0),console.log(f,C,"===>tick_upper")}else f=B&&B[e.currentPriceTab]&&B[e.currentPriceTab].lower,C=B&&B[e.currentPriceTab]&&B[e.currentPriceTab].upper;if(e.maxPrice==="∞"||A>=f&&A<=C){let M;if(e.fixedFromCoin){const J=new y(e.fromCoinAmount||1).mul(Math.pow(10,e.fromCoin.decimals)).toString();M=new ne(J)}else{const J=new y(e.toCoinAmount||1).mul(Math.pow(10,e.toCoin.decimals)).toString();M=new ne(J)}const{tokenMaxA:N,tokenMaxB:$}=await O.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:e.poolInfo.token_a,tokenB:e.poolInfo.token_b,lowerTick:f,upperTick:C,coinAmount:M,iscoinA:b?e.fixedFromCoin:!e.fixedFromCoin,roundUp:!0,slippage:Number(e.slippage)/100,curSqrtPrice:new ne(e.poolInfo.current_sqrt_price)});console.log(N,$,"===>tokenMaxA, tokenMaxB"),b?e.fixedFromCoin?(u=Number($)>0?$:"",d=Number(N)>0?N:""):(d=Number(N)>0?N:"",u=Number($)>0?$:""):(e.fixedFromCoin,u=N,d=$)}else A>C?b?(u=1,d=0):(d=1,u=0):A<f&&(b?(u=0,d=1):(u=1,d=0));const V=d?Number(d):0,Q=u?Number(u):0;console.log(V,Q,"amountA===>amountB"),console.log(b,e.currentPrice,e.currentPriceReverse,"===>currentPriceReverse");const G=new y(Q).add(new y(b?new y(V*e.currentPrice):new y(V*e.currentPriceReverse)));console.log(G,"===>totalAmount");const x=a(new y(V).mul(new y(b?e.currentPrice:e.currentPriceReverse)).div(G).mul(100).toNumber().toFixed(2),2),ee=a(new y(Q).div(G).mul(100).toNumber().toFixed(2),2);v.value=x,L.value=ee,console.log(v.value,L.value,w,R,"====>336")};te(()=>[e.poolInfo,e.minPrice,e.maxPrice,e.fromCoinAmount,e.toCoinAmount],([c,P,h])=>{console.log("0421####ratio###watch###poolInfo###",c),console.log("0421####ratio###watch###minPrice###",P),console.log("0421####ratio###watch###maxPrice###",h),P&&h&&c&&!he(c)&&(P!=="0"||h!=="0")?X():(v.value="",L.value="")},{immediate:!0,deep:!0});let m={};te(()=>p.value.RATES,c=>{c&&(m=c)},{immediate:!0});const E=k(()=>{const c=m&&m[e.fromCoin.address]&&m[e.fromCoin.address].price,P=m&&m[e.toCoin.address]&&m[e.toCoin.address].price,h=Number(e.fromCoinAmount)*Number(m&&m[e.fromCoin.address]&&m[e.fromCoin.address].price),T=Number(e.toCoinAmount)*Number(m&&m[e.toCoin.address]&&m[e.toCoin.address].price);if(c&&P){const D=Number(h)+Number(T);return console.log(D,"==>total"),D}else return"--"});return{positionAmount:k(()=>E.value!=="--"?(console.log(e,"props377===>"),console.log(new y(e.positionTotalAmount).toString(),"403"),new y(e.positionTotalAmount).add(new y(E.value)).toString()):0),fromCoinRatio:v,toCoinRatio:L,totalAmount:E,fixD:oe,addCommom:l,route:I}}});const Te=e=>(ce("data-v-0d8e2b27"),e=e(),fe(),e),Be={class:"deposit-ratio"},qe={class:"lebal"},Le=Te(()=>r("svg",{class:"icon","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-icon-information"})],-1)),Oe={key:0,class:"text"},Fe={key:1},Me={key:0,class:"deposit-ratio totalAmount"},je={class:"lebal"},Ee={class:"text"},Ve={key:0,class:"liquidity-update"},We={key:1};function ze(e,v,L,g,j,K){const p=ke;return i(),n(z,null,[r("div",Be,[r("div",qe,[ie(o(e.$t("newAdd.depositRatio"))+" ",1),W(p,{placement:"bottom","arrow-point-at-center":""},{title:_(()=>[r("span",null,o(e.$t("newAdd.depositRatioTips")),1)]),default:_(()=>[Le]),_:1})]),e.currentPriceTab!=="full range"?(i(),n("div",Oe,o(e.fromCoinRatio!=="--"?e.fromCoinRatio+"%":"--")+" "+o(e.fromCoinRatio!=="--"?e.fromCoin&&e.fromCoin.symbol:"")+" / "+o(e.toCoinRatio!=="--"?e.toCoinRatio+"%":"--")+" "+o(e.toCoinRatio!=="--"?e.toCoin&&e.toCoin.symbol:""),1)):(i(),n("div",Fe," 50% "+o(e.fromCoin&&e.fromCoin.symbol)+" / 50% "+o(e.toCoin&&e.toCoin.symbol),1))]),e.totalAmount!==0?(i(),n("div",Me,[r("div",je,o(e.$t("newAdd.totalAmount")),1),r("div",Ee,[e.route.name=="increase-liquidity"?(i(),n("div",Ve,[r("span",null,o(e.positionTotalAmount>0&&e.positionTotalAmount<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:s(l))(("fixD"in e?e.fixD:s(oe))(e.positionTotalAmount,2),2)}`)+" → ",1),r("span",null,o(Number(e.positionAmount)>0&&Number(e.positionAmount)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:s(l))(("fixD"in e?e.fixD:s(oe))(e.positionAmount,2),2)}`),1)])):(i(),n("div",We,o(e.totalAmount>0&&e.totalAmount<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:s(l))(("fixD"in e?e.fixD:s(oe))(e.totalAmount,2))}`),1))])])):t("",!0)],64)}const He=ue($e,[["render",ze],["__scopeId","data-v-0d8e2b27"]]),Qe=le({components:{Modal:ge},props:{title:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},fromCoinAmount:{type:String,default:"1245566.008946"},toCoinAmount:{type:String,default:"11111111111"},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},isIncrease:{type:Boolean,default:!1},fixedFromCoin:{type:Boolean,default:!0},currentPriceTab:{type:String,default:""},currentPrice:{type:String,default:""},currentPriceReverse:{type:String,default:""},showFromCoinLock:{type:Boolean,default:!1},showToCoinLock:{type:Boolean,default:!1},currentDirect:{type:Boolean,default:!0},positionTotalAmount:{type:Number,default:0},tickLower:{type:Number,default:0},tickUpper:{type:Number,default:0},isCreate:{type:Boolean,default:!1}},setup(e,v){const{t:L}=pe(),g=k(()=>{var d,u,A;return((d=e==null?void 0:e.poolInfo)==null?void 0:d.needReverse)||((A=(u=e==null?void 0:e.poolInfo)==null?void 0:u.poolInfo)==null?void 0:A.needReverse)}),j=ae(),K=k(()=>j),p=Ce(),O=k(()=>p),I=d=>{var u;return(d==null?void 0:d.logoURI)||(d==null?void 0:d.logo_url)||((u=K.value.tokensObj[d==null?void 0:d.address])==null?void 0:u.logo_url)||(O.value.theme==="default"?de("/image/coins/unknown.png"):de("/image/coins/sui-unknown.png"))},X=q(!1),m=q(!0);function E(){m.value=!m.value}const F=k(()=>O.value.slippage),c=Ne(),P=k(()=>c),h=k(()=>P.value.status),T=k(()=>O.value.chainName),D=k(()=>Ue[T.value].hasNotifi),w=me(),R=q(!1),f=q(""),C=q(""),S=q(""),U=q("");Pe(()=>{f.value=String(a(String(e.minPrice),6)),C.value=String(a(String(e.maxPrice),6)),S.value=e.currentPrice,U.value=e.currentPriceReverse,e.isIncrease&&(f.value=g.value?String(a(String(1/e.maxPrice),6)):String(a(String(e.minPrice),6)),C.value=g.value?String(a(String(1/e.minPrice),6)):String(a(String(e.maxPrice),6)),S.value=g.value?e.currentPriceReverse:e.currentPrice,U.value=g.value?e.currentPrice:e.currentPriceReverse),console.log(S,"===>currentPrice"),console.log("0421###onMounted###poolInfo####",e.poolInfo)}),te(m,d=>{!e.isIncrease&&d||e.isIncrease&&!g.value&&d?(console.log("0517####add-liquidity###direct###11111###val###",d),f.value=String(a(String(e.minPrice),6)),C.value=String(a(String(e.maxPrice),6))):!e.isIncrease&&!d||e.isIncrease&&!g.value&&!d?(console.log("0517####add-liquidity###direct###22222###val####",d),f.value=String(a(String(1/Number(e.maxPrice)),6)),C.value=String(a(String(1/Number(e.minPrice)),6))):e.isIncrease&&g.value&&(e.currentDirect?d:!d)?(console.log("0517####add-liquidity###direct###3333###val###",d),f.value=String(a(String(1/Number(e.maxPrice)),6)),C.value=String(a(String(1/Number(e.minPrice)),6))):e.isIncrease&&g.value&&(e.currentDirect?!d:d)&&(console.log("0517####add-liquidity###direct###44444###val###",d),f.value=String(a(String(e.minPrice),6)),C.value=String(a(String(e.maxPrice),6))),S.value=e.currentPrice,U.value=e.currentPriceReverse});const b=()=>{e.isIncrease?v.emit("toAdd"):e.title==Ie.global.t("newAdd.preview")?v.emit("createPool"):v.emit("toAdd",R.value&&h.value=="authenticated")};return console.log(e,"props451"),{needReverse:g,getCoinIcon:I,addCommom:l,rateChange:X,changeDirect:E,direct:m,t:L,slippage:F,notifiStatus:h,hasNotifi:D,route:w,checked:R,min:f,max:C,decimalUi:a,clickSubmit:b}}});const H=e=>(ce("data-v-338a9577"),e=e(),fe(),e),Ge=H(()=>r("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Je={class:"modal-content"},Ke={class:"pool-info"},Xe={class:"left"},Ye={alt:""},Ze={alt:""},_e={class:"pool-name"},xe={class:"right"},eo={class:"coin-info"},oo={class:"from-coin-info"},io={class:"left"},no={class:"coin-amount"},ro={class:"coin-symbol"},to={class:"right"},so={class:"to-coin-info"},ao={class:"left"},lo={class:"coin-amount"},mo={class:"coin-symbol"},uo={class:"right"},co=H(()=>r("div",{class:"to-swap-logo"},null,-1)),fo={class:"select-range"},Co=H(()=>r("div",{class:"select-range-title"},"Selected Range",-1)),yo={class:"price-conent"},vo={class:"current-price"},bo={class:"left"},ho={key:0,class:"current-price-title"},ko={key:1,class:"current-price-title"},go={key:0,class:"a2b"},po={key:0},Po={key:1},Io={key:2},So={key:3},wo={key:4},Ro={key:5},Ao={key:6},Do={key:7},Uo={key:1,class:"a2b"},No={key:0},$o={key:1},To={key:2},Bo={key:3},qo={key:4},Lo={key:5},Oo={key:6},Fo={key:7},Mo={key:2,class:"a2b"},jo={key:0},Eo={key:1},Vo={key:2},Wo={key:3},zo={key:3,class:"a2b"},Ho={key:0},Qo={key:1},Go={key:2},Jo={key:3},Ko={key:0,class:"a2b"},Xo={key:0},Yo={key:1},Zo={key:2},_o={key:3},xo={key:4},ei={key:5},oi={key:6},ii={key:7},ni={key:1,class:"a2b"},ri={key:0},ti={key:1},si={key:2},di={key:3},ai={key:4},li={key:5},mi={key:6},ui={key:7},ci={class:"right"},fi={alt:""},Ci={class:"coin-rate"},yi=H(()=>r("div",null,[r("svg",{class:"icon icon-up","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),vi=H(()=>r("div",null,[r("svg",{class:"icon icon-down","aria-hidden":"true"},[r("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),bi=[yi,vi],hi={class:"price-range-block-content"},ki={class:"price-range-block"},gi={class:"price-item"},pi={class:"title"},Pi={class:"price"},Ii={key:0,class:"text"},Si={key:1,class:"text"},wi={key:0,class:"text"},Ri={key:1,class:"text"},Ai={key:0,class:"text"},Di={key:1,class:"text"},Ui={class:"note"},Ni={class:"price-item"},$i={class:"title"},Ti={class:"price"},Bi={key:0,class:"text"},qi={key:1,class:"text"},Li={key:0,class:"text"},Oi={key:1,class:"text"},Fi={key:0,class:"text"},Mi={key:1,class:"text"},ji={class:"note"},Ei={class:"deposit-ratio-content"},Vi={key:0,class:"range-alerts"},Wi={class:"range-alerts-top"},zi=H(()=>r("div",{class:"title"}," Range alerts for this position ",-1)),Hi=H(()=>r("div",{class:"range-alerts-bottom"}," Subscribe to receive alerts on email, SMS, or Telegram when the price for this pool moves out of your selected range. ",-1));function Qi(e,v,L,g,j,K){const p=ye,O=ve,I=He,X=Ae,m=De,E=Se("Modal"),F=we("image");return i(),re(E,{width:"440px",visible:!0,footer:null,title:e.title,onCancel:v[2]||(v[2]=c=>e.$emit("onClose"))},{closeIcon:_(()=>[Ge]),default:_(()=>{var c,P,h,T,D,w,R,f,C,S,U,b,d,u,A,B,V,Q,G,x,ee,Y,M,N,$,J;return[r("div",Je,[r("div",Ke,[r("div",Xe,[r("div",null,[Z(r("img",Ye,null,512),[[F,e.needReverse?(T=(h=e.poolInfo)==null?void 0:h.token_b)==null?void 0:T.logo_url:(P=(c=e.poolInfo)==null?void 0:c.token_a)==null?void 0:P.logo_url]]),W(p,{address:e.needReverse?(f=(R=e.poolInfo)==null?void 0:R.token_b)==null?void 0:f.address:(w=(D=e.poolInfo)==null?void 0:D.token_a)==null?void 0:w.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),r("div",null,[Z(r("img",Ze,null,512),[[F,e.needReverse?(b=(U=e.poolInfo)==null?void 0:U.token_a)==null?void 0:b.logo_url:(S=(C=e.poolInfo)==null?void 0:C.token_b)==null?void 0:S.logo_url]]),W(p,{address:e.needReverse?(B=(A=e.poolInfo)==null?void 0:A.token_a)==null?void 0:B.address:(u=(d=e.poolInfo)==null?void 0:d.token_b)==null?void 0:u.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),r("div",_e,[r("span",null,o(e.needReverse?(x=(G=e.poolInfo)==null?void 0:G.token_b)==null?void 0:x.symbol:(Q=(V=e.poolInfo)==null?void 0:V.token_a)==null?void 0:Q.symbol),1),ie(" - "),r("span",null,o(e.needReverse?(N=(M=e.poolInfo)==null?void 0:M.token_a)==null?void 0:N.symbol:(Y=(ee=e.poolInfo)==null?void 0:ee.token_b)==null?void 0:Y.symbol),1)])]),r("div",xe,[ie(" Fee tier "),r("span",null,o(e.poolInfo&&e.poolInfo.fee*100)+"%",1)])]),r("div",eo,[r("div",oo,[r("div",io,[r("div",no,o(("addCommom"in e?e.addCommom:s(l))(e.fromCoinAmount)||0),1),r("div",ro,o(e.fromCoin&&e.fromCoin.symbol),1)]),r("div",to,[Z(r("img",null,null,512),[[F,e.fromCoin&&e.fromCoin.logoURI||e.getCoinIcon(e.fromCoin)]]),W(p,{address:e.fromCoin&&e.fromCoin.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])])]),r("div",so,[r("div",ao,[r("div",lo,o(("addCommom"in e?e.addCommom:s(l))(e.toCoinAmount)||0),1),r("div",mo,o(e.toCoin&&e.toCoin.symbol),1)]),r("div",uo,[Z(r("img",null,null,512),[[F,e.toCoin&&e.toCoin.logoURI||e.getCoinIcon(e.toCoin)]]),W(p,{address:e.toCoin&&e.toCoin.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),co])]),r("div",fo,[Co,e.title!==e.$t("newAdd.preview")?(i(),re(O,{key:0,"current-status":e.showFromCoinLock||e.showToCoinLock?"Inactive":"Active"},null,8,["current-status"])):t("",!0)]),r("div",yo,[r("div",vo,[r("div",bo,[e.title!==e.$t("newAdd.preview")?(i(),n("div",ho,"Current Price")):(i(),n("div",ko,"Initial Price")),e.isCreate?(i(),n(z,{key:3},[!e.isIncrease&&!e.needReverse?(i(),n("div",Ko,[e.direct&&e.currentDirect?(i(),n("span",Xo,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPrice,e.toCoin.decimals))),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("span",Yo,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPriceReverse,e.toCoin.decimals))),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("span",Zo,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPriceReverse,e.fromCoin.decimals))),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("span",_o,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPrice,e.fromCoin.decimals))),1)):t("",!0),e.direct&&e.currentDirect?(i(),n("div",xo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("div",ei,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("div",oi,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("div",ii,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0)])):!e.isIncrease&&e.needReverse?(i(),n("div",ni,[e.direct&&e.currentDirect?(i(),n("span",ri,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPrice,e.toCoin.decimals))),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("span",ti,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPriceReverse,e.fromCoin.decimals))),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("span",si,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPrice,e.toCoin.decimals))),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("span",di,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPriceReverse,e.fromCoin.decimals))),1)):t("",!0),e.direct&&e.currentDirect?(i(),n("div",ai,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("div",li,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("div",mi,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("div",ui,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0)])):t("",!0)],64)):(i(),n(z,{key:2},[!e.isIncrease&&!e.needReverse?(i(),n("div",go,[e.direct&&e.currentDirect?(i(),n("span",po,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPrice,e.toCoin.decimals))),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("span",Po,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPriceReverse,e.toCoin.decimals))),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("span",Io,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPriceReverse,e.fromCoin.decimals))),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("span",So,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPrice,e.fromCoin.decimals))),1)):t("",!0),e.direct&&e.currentDirect?(i(),n("div",wo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("div",Ro,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("div",Ao,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("div",Do,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0)])):!e.isIncrease&&e.needReverse?(i(),n("div",Uo,[e.direct&&e.currentDirect?(i(),n("span",No,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPrice,e.toCoin.decimals))),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("span",$o,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPriceReverse,e.fromCoin.decimals))),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("span",To,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPriceReverse,e.toCoin.decimals))),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("span",Bo,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPrice,e.fromCoin.decimals))),1)):t("",!0),e.direct&&e.currentDirect?(i(),n("div",qo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),!e.direct&&e.currentDirect?(i(),n("div",Lo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0),e.direct&&!e.currentDirect?(i(),n("div",Oo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),!e.direct&&!e.currentDirect?(i(),n("div",Fo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0)])):t("",!0),e.isIncrease&&!e.needReverse?(i(),n("div",Mo,[e.direct?(i(),n("span",jo,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPrice,e.toCoin.decimals))),1)):(i(),n("span",Eo,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPriceReverse,6))),1)),e.direct?(i(),n("div",Wo,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):(i(),n("div",Vo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1))])):t("",!0),e.isIncrease&&e.needReverse?(i(),n("div",zo,[e.direct?(i(),n("span",Ho,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPriceReverse,e.fromCoin.decimals))),1)):(i(),n("span",Qo,o(("addCommom"in e?e.addCommom:s(l))(("decimalUi"in e?e.decimalUi:s(a))(e.currentPrice,e.toCoin.decimals))),1)),e.direct?(i(),n("div",Go,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):(i(),n("div",Jo,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1))])):t("",!0)],64))]),r("div",ci,[Z(r("img",fi,null,512),[[F,e.direct?e.fromCoin.logo_url:e.toCoin.logo_url]]),r("span",null,o(e.direct?($=e.fromCoin)==null?void 0:$.symbol:(J=e.toCoin)==null?void 0:J.symbol),1),r("div",Ci,[r("div",{onClick:v[0]||(v[0]=(...se)=>e.changeDirect&&e.changeDirect(...se))},bi)])])]),r("div",hi,[r("div",ki,[r("div",gi,[r("div",pi,o(e.$t("common.minPrice")),1),r("p",Pi,o(("addCommom"in e?e.addCommom:s(l))(e.min)),1),!e.isIncrease&&!e.direct?(i(),n("div",Ii,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):!e.isIncrease&&e.direct?(i(),n("div",Si,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),e.isIncrease&&e.needReverse?(i(),n(z,{key:2},[e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(i(),n("div",wi,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(i(),n("div",Ri,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0)],64)):t("",!0),e.isIncrease&&!e.needReverse?(i(),n(z,{key:3},[e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(i(),n("div",Ai,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(i(),n("div",Di,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0)],64)):t("",!0),r("div",Ui,o(e.t("common.positionwillBe",{symbol:e.isIncrease?`${e.needReverse&&e.direct?e.fromCoin.symbol:e.toCoin.symbol}`:`${e.direct?e.fromCoin.symbol:e.toCoin.symbol}`})),1)]),r("div",Ni,[r("div",$i,o(e.$t("common.maxPrice")),1),r("p",Ti,o(e.maxPrice.indexOf("∞")>-1||e.maxPrice.indexOf("+")>-1?"∞":("addCommom"in e?e.addCommom:s(l))(e.max)),1),!e.isIncrease&&!e.direct?(i(),n("div",Bi,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):!e.isIncrease&&e.direct?(i(),n("div",qi,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0),e.isIncrease&&e.needReverse?(i(),n(z,{key:2},[e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(i(),n("div",Li,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(i(),n("div",Oi,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):t("",!0)],64)):t("",!0),e.isIncrease&&!e.needReverse?(i(),n(z,{key:3},[e.isIncrease&&(e.needReverse?e.direct:!e.direct)?(i(),n("div",Fi,o(e.fromCoin.symbol)+" per "+o(e.toCoin.symbol),1)):e.isIncrease&&(e.needReverse?!e.direct:e.direct)?(i(),n("div",Mi,o(e.toCoin.symbol)+" per "+o(e.fromCoin.symbol),1)):t("",!0)],64)):t("",!0),r("div",ji,o(e.t("common.positionwillBe",{symbol:e.isIncrease?`${e.needReverse&&e.direct?e.toCoin.symbol:e.fromCoin.symbol}`:`${e.direct?e.toCoin.symbol:e.fromCoin.symbol}`})),1)])])])]),r("div",Ei,[e.poolInfo?(i(),re(I,{key:0,"min-price":e.minPrice,"max-price":e.maxPrice,"pool-info":e.poolInfo,"fixed-from-coin":e.fixedFromCoin,"from-coin":e.fromCoin,"to-coin":e.toCoin,"current-price-tab":e.currentPriceTab,slippage:e.slippage,"current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"position-total-amount":e.positionTotalAmount,"tick-lower":e.tickLower,"tick-upper":e.tickUpper},null,8,["min-price","max-price","pool-info","fixed-from-coin","from-coin","to-coin","current-price-tab","slippage","current-price","current-price-reverse","from-coin-amount","to-coin-amount","position-total-amount","tick-lower","tick-upper"])):t("",!0)])]),e.notifiStatus=="authenticated"&&e.hasNotifi&&e.route.name=="liquidity-deposit"&&e.title==e.$t("button.addLiquidity")&&e.minPrice!=="0"&&e.maxPrice!=="∞"?(i(),n("div",Vi,[r("div",Wi,[zi,W(X,{class:"range-alerts-switch",checked:e.checked,onClick:v[1]||(v[1]=se=>e.checked=!e.checked)},null,8,["checked"])]),Hi])):t("",!0),W(m,{class:"big-btn liquidity-btn",style:Re(e.notifiStatus=="authenticated"&&e.hasNotifi&&e.route.name=="liquidity-deposit"&&e.title==e.$t("button.addLiquidity")&&e.minPrice!=="0"&&e.maxPrice!=="∞"?{bottom:"-172px"}:{bottom:"-65px"}),onClick:e.clickSubmit},{default:_(()=>[ie(o(e.isIncrease?"Increase Liquidity":e.title==e.$t("button.addLiquidity")?"Add Liquidity":"Create and Add Liquidity"),1)]),_:1},8,["style","onClick"])]}),_:1},8,["title"])}const nn=ue(Qe,[["render",Qi],["__scopeId","data-v-338a9577"]]);export{He as _,nn as a};
