import{a as K,r as S,E as oe,m as $,D as M,e as Q,o as y,f as A,h as a,v as w,i as E,w as z,z as H,x as V,I as re,S as se,y as ue,j as J,B as ce,l as Pe,a0 as ye,a1 as he,q as _e,c as W,t as Se,u as Y,J as Ce,a2 as Te,p as de,k as me,H as ie,L as $e,C as we,b as Ie}from"./entry.06373f20.js";/* empty css              *//* empty css              */import{a as fe,d as U,u as ne,i as Ne,e as x,v as ve,c as te,f as Z}from"./pool.68b91df5.js";import{D as h}from"./decimal.0e8aa3f1.js";import{g as ae,t as le}from"./tick.505fdad3.js";import{u as X,a as Ae}from"./sha256.97b1e8c2.js";import{i as ee}from"./import-icon.de3e6c66.js";import{_ as ge}from"./token-warning.dec0de57.js";/* empty css              *//* empty css              */import{_ as Me}from"./refresh-icon.87a2307b.js";import{_ as Be}from"./swap-setting.fe695109.js";const Oe=K({props:{inputValue:{type:String,default:""},pType:{type:String,required:!0},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},dirction:{type:Boolean,default:!0},defaultMaxPrice:{type:String,default:""},defaultMinPrice:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},loading:{type:Boolean,default:!1},intPrice:{type:String,default:""}},emits:["onInput"],setup(e,t){const r=S(""),m=S("");let k=S(""),c=S("");const n=oe(),P=X(),s=$(()=>P),N=$(()=>s.value.chainName?fe(s.value.chainName):{}),C=()=>{if(!(Number.isNaN(r.value)||Number(r.value)!==0&&!r.value||!e.poolInfo.tickSpacing))try{const o=ae(new h(r.value.toString()),Number(d.value.tickSpacing)),l=le(o+Number(d.value.tickSpacing));if(e.pType=="Min"&&Number(l.toString())>=Number(c.value.toString()))return;const u=l.toString();t.emit("onInput",u)}catch{t.emit("onInput","")}},L=()=>{try{if(Number.isNaN(r.value)||!r.value||!e.poolInfo.tickSpacing)return;const o=ae(new h(r.value),Number(d.value.tickSpacing)),l=le(o-Number(d.value.tickSpacing)),u=l.toString();if(e.pType=="Max"&&Number(l)<=Number(k.value))return;t.emit("onInput",u)}catch{t.emit("onInput","")}},F=o=>{let l=o.toString().replace(/[^\d.]/g,"");const u=/^\d+(\.\d+)?$/;l.split(".").length>2&&!u.exec(l)&&(l=l.substr(0,l.length-1)),m.value=String(l),console.log(l,"v===>")},i=o=>{var j,v,f,g;const{TickUtil:l,TickMath:u,getNearestTickByTick:B}=N.value;console.log("0519###onBlur###event###",o);const _=o.target.value;console.log("0519###onBlur###value###",_);let T;if(_==="0"){T=-443636,t.emit("onInput","0");return}else if(_!=="0"&&_){const I=u.priceToTickIndex(new h(_),(j=d.value.token_a)==null?void 0:j.decimals,(v=d.value.token_b)==null?void 0:v.decimals);console.log("0519###onBlur###t###",I),T=B(Number(I),Number(d.value.tickSpacing)),console.log("0519###onBlur###tick###",T);const q=u.tickIndexToPrice(new h(T),(f=d.value.token_a)==null?void 0:f.decimals,(g=d.value.token_b)==null?void 0:g.decimals);console.log("0519###onBlur###price###",q.toString()),t.emit("onInput",q.toString())}else t.emit("onInput")};M(()=>e.defaultMinPrice,(o,l)=>{o!==l&&(console.log(e.defaultMinPrice,"props.defaultMinPrice===>"),k.value=e.defaultMinPrice,console.log(k.value,"props.minPrice.value===>"))},{immediate:!0}),M(()=>e.defaultMaxPrice,(o,l)=>{o!==l&&(c.value=e.defaultMaxPrice)},{immediate:!0}),M(()=>m.value,o=>{console.log(o,"=sdajlaksjdkldas")},{immediate:!0}),M(()=>[e.inputValue,n.query.action],([o])=>{if(console.log(o,"==>newValue"),o&&o!=="0"&&o!=="∞"){r.value=o;const u=o.toString().split(".")[1];m.value=o!=="0"&&o!=="∞"&&u&&u.length>6?U(o.toString(),6):o.toString()}else(o=="0"||o=="∞"||n.query.action)&&(m.value=o);console.log(m.value,"===> oValue.value")},{immediate:!0});const d=S({});M(()=>e.poolInfo,(o,l)=>{o&&(d.value=o)},{immediate:!0});const p=S("");return M(()=>e.currentPriceTab,o=>{p.value=o,console.log(e.currentPriceTab,"===>props.currentPriceTab")},{immediate:!0}),console.log(e,"props=======>"),{addPrice:C,minusPrice:L,oValue:m,changeValue:F,isDisabled:p,route:n,onBlur:i}}});const je={class:"set-price-item"},Re={class:"title"},Le={class:"input-box"},Fe={key:0,class:"minus-btn"},qe={key:1,class:"plus-btn"};function De(e,t,r,m,k,c){const n=re,P=se;return y(),A("div",je,[a("div",Re,w(e.pType=="Max"?e.$t("common.maxPrice"):e.pType=="Min"?e.$t("common.minPrice"):""),1),E(P,{loading:e.loading,active:"",paragraph:!1},{default:z(()=>[a("div",Le,[e.currentPriceTab!=="full range"?(y(),A("a",Fe,[a("div",{class:H(!e.fromCoin&&!e.toCoin||e.poolInfo&&!e.poolInfo.tickSpacing&&!e.$route.query.action?"reductionDis":"reduction"),onClick:t[0]||(t[0]=(...s)=>e.minusPrice&&e.minusPrice(...s))},"-",2)])):V("",!0),E(n,{id:"pValu",value:e.oValue,"onUpdate:value":t[1]||(t[1]=s=>e.oValue=s),disabled:e.route.query.action&&!e.intPrice,autocomplete:"off",placeholder:"0",onChange:t[2]||(t[2]=s=>e.changeValue(s.target.value)),onBlur:t[3]||(t[3]=s=>e.onBlur(s))},null,8,["value","disabled"]),e.currentPriceTab!=="full range"?(y(),A("a",qe,[a("div",{class:H(!e.fromCoin&&!e.toCoin||e.poolInfo&&!e.poolInfo.tickSpacing&&!e.$route.query.action?"addDis":"add"),onClick:t[4]||(t[4]=(...s)=>e.addPrice&&e.addPrice(...s))},"+",2)])):V("",!0)])]),_:1},8,["loading"]),a("p",{class:H(["per-text",!e.toCoin&&!e.fromCoin?"per-text-disabled":""])},w(e.toCoin&&e.toCoin.symbol)+" per "+w(e.fromCoin&&e.fromCoin.symbol),3)])}const pe=Q(Oe,[["render",De],["__scopeId","data-v-a5dcc408"]]),Ue=K({components:{NewLiquiditySetPrice:pe},props:{min:{type:String,default:""},max:{type:String,default:""},defaultMinPrice:{type:String,default:""},defaultMaxPrice:{type:String,default:""},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},dirction:{type:Boolean,default:!0},invalidPriceRange:{type:Boolean,default:!1},poolInfo:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},loading:{type:Boolean,default:!1},intPrice:{type:String,default:""}},setup(e,t){let r=S(""),m=S(""),k=S(),c=S(!1),n=S(!1);const P=S({}),s=X(),N=$(()=>s);ue(()=>{r.value=e.min,m.value=e.max}),M(()=>e.currentPriceTab,(o,l)=>{o!==l&&(k.value=e.currentPriceTab)},{immediate:!0}),M(()=>e.min,(o,l)=>{o!==l&&(r.value=o,console.log(e.min,"===> props.min"))}),M(()=>e.max,(o,l)=>{o!==l&&(m.value=o)}),M(()=>e.poolInfo,(o,l)=>{o&&(P.value=o)},{immediate:!0});const C=S("");M(()=>e.intPrice,o=>{console.log(e.intPrice,"===>props.intPrice"),C.value=o},{immediate:!0,deep:!0});const L=o=>{console.log(o,"val===>123"),r.value=o,t.emit("onChangeMinPrice",o)},F=o=>{m.value=o,t.emit("onChangeMaxPrice",o)};M(c,(o,l)=>{o!==l&&t.emit("onChangeFullRange",o)});const i=()=>{r.value=e.defaultMinPrice,m.value=e.defaultMaxPrice,n.value=!1,c.value=!1},d=()=>{n.value=!1,r.value="0",m.value="∞"};return M(c,(o,l)=>{o!==l&&t.emit("onChangeFullRange",o)}),{store:N,changeMinPrice:L,changeMaxPrice:F,importIcon:ee,resetPrice:i,changeShowUnderStand:()=>{c.value=!c.value,c.value?n.value=!0:i(),n.value||(r.value=e.defaultMinPrice,m.value=e.defaultMaxPrice)},showUnderStand:n,minPrice:r,maxPrice:m,understand:d,isRadio:c,initPirce:C}}});const Ve={class:"set-price"},Ee={class:"card-container"},ze={key:0,class:"card"},We={key:1,class:"understand"},He={class:"left"},Je={class:"right"};function Ge(e,t,r,m,k,c){const n=pe,P=ce;return y(),A("div",Ve,[a("div",Ee,[e.showUnderStand?(y(),A("div",We,[a("div",He,[a("p",null,w(e.$t("common.lowerEfficiency")),1),a("p",null,w(e.$t("common.lowerEfficiencyTips")),1)]),a("div",Je,[E(P,{onClick:e.understand},{default:z(()=>[J(w(e.$t("common.understand")),1)]),_:1},8,["onClick"])])])):(y(),A("div",ze,[E(n,{value:e.minPrice,"onUpdate:value":t[0]||(t[0]=s=>e.minPrice=s),"input-value":e.minPrice,"p-type":"Min","default-max-price":e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,dirction:e.dirction,"pool-info":e.poolInfo,loading:e.loading,"current-price-tab":e.currentPriceTab,"int-price":e.initPirce,onOnInput:e.changeMinPrice,onAddValue:e.changeMinPrice,onDelValue:e.changeMinPrice},null,8,["value","input-value","default-max-price","from-coin","to-coin","dirction","pool-info","loading","current-price-tab","int-price","onOnInput","onAddValue","onDelValue"]),E(n,{value:e.maxPrice,"onUpdate:value":t[1]||(t[1]=s=>e.maxPrice=s),"input-value":e.maxPrice,"p-type":"Max","default-min-price":e.minPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,dirction:e.dirction,"pool-info":e.poolInfo,loading:e.loading,"int-price":e.initPirce,"current-price-tab":e.currentPriceTab,onOnInput:e.changeMaxPrice,onAddValue:e.changeMaxPrice,onDelValue:e.changeMaxPrice},null,8,["value","input-value","default-min-price","from-coin","to-coin","dirction","pool-info","loading","int-price","current-price-tab","onOnInput","onAddValue","onDelValue"])]))])])}const zo=Q(Ue,[["render",Ge],["__scopeId","data-v-e3859dff"]]),Ke=K({components:{TokenWarning:ge},props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinSymbol:{type:String,default:""},balance:{type:Number,default:null},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},importPage:{type:String,default:""},address:{type:String,default:""}},setup(e,t){const{t:r,locale:m}=Pe(),k=X(),c=$(()=>k),n=$(()=>new h(Number(e.balance)).div(2)),P=ye(he,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function s(){this.$emit("onSelect")}const N=v=>{const f=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(u==null?void 0:u.value)&&(u==null?void 0:u.value)}})?).*$`);v.target.value=v.target.value.replace(f,"$1")},C=Ae(),L=$(()=>C),F=ne(),i=$(()=>F),d=$(()=>i.value.tokensWarningObj);let p={};M(()=>i.value.RATES,v=>{v&&(console.log(v,"price====>"),p=v)},{immediate:!0});const o=$(()=>(console.log(e.inputValue,"==>props.inputValue"),console.log(e.coinName,"===>props.coinName"),Ne(Number(e.inputValue)*Number(p&&p[e.address]&&p[e.address].price),2))),l=$(()=>{var v,f,g;return console.log((v=i.value.tokensObj[e.address])==null?void 0:v.labels,"===> pool.value.tokensObj[props.address]?.labels"),i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((f=i.value.tokensObj[e.address])==null?void 0:f.labels)&&((g=i.value.tokensObj[e.address])==null?void 0:g.labels[0])}),u=$(()=>{var v;return i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((v=i.value.tokensObj[e.address])==null?void 0:v.decimals)}),B=$(()=>{var v,f,g,I;return e.coinIcon||((f=(v=i==null?void 0:i.value)==null?void 0:v.tokensObj[e.address])==null?void 0:f.logo_url)||((I=(g=i==null?void 0:i.value)==null?void 0:g.tokensObj[e.address])==null?void 0:I.logoURI)||(c.value.theme==="default"?ee("/image/coins/unknown.png"):ee("/image/coins/sui-unknown.png"))}),_=$(()=>i.value.tokensObj),T=$(()=>c.value.theme);return{route:oe(),theme:T,currentIcon:B,tokensObj:_,pool:i,halfBalance:n,coinLabels:l,t:r,addCommom:x,store:c,wallet:L,indicator:P,inputChange:N,importIcon:ee,selectCoin:s,amountPirce:o,coinDecimals:u,formatNumber:ve,tokensWarningObj:d,checkNullObj:te}}});const Qe=e=>(de("data-v-3a378845"),e=e(),me(),e),Xe={class:"card"},Ye={class:"top"},Ze={key:1,class:"input-div"},xe={key:0},eo={class:"loading-token"},oo={key:1},no={key:0},to=Qe(()=>a("use",{"xlink:href":"#icon-icon_on"},null,-1)),io=[to],ao={class:"bottom"},lo={key:0,class:"amount-price"},ro={key:1},so={class:"top"},uo={class:"right"},co={class:"balance"};function mo(e,t,r,m,k,c){const n=re,P=Ce,s=Te,N=ge,C=se,L=ce,F=_e("image");return y(),A("div",Xe,[a("div",Ye,[e.inputDisabled?(y(),A("div",Ze,[e.inputValue?(y(),A("span",xe,w(e.inputValue),1)):(y(),W(P,{key:1,indicator:e.indicator},null,8,["indicator"]))])):(y(),W(n,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.inputValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:t[0]||(t[0]=i=>e.$emit("onInput",i.target.value)),onFocus:t[1]||(t[1]=i=>e.$emit("onFocus"))},null,8,["value","disabled","onChange"])),a("div",{class:H(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"?"left-opcity":""].join("")]),onClick:t[2]||(t[2]=i=>e.pool.isTokenLoading?"":e.selectCoin())},[a("div",eo,[e.pool.isTokenLoading?(y(),W(s,{key:0,active:e.active,size:"small",paragraph:!1},null,8,["active"])):e.address?Se((y(),A("img",oo,null,512)),[[F,e.currentIcon]]):V("",!0),E(N,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),E(C,{loading:e.pool.isTokenLoading,class:"loading-token-skeleton",active:"",paragraph:!1},{default:z(()=>[a("div",null,[a("p",null,w(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(y(),A("p",no,w(e.coinLabels),1)):V("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(y(),A("svg",{key:0,class:H(["icon",e.pool.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},io,2)):V("",!0)],2)]),a("div",ao,[e.inputValue&&e.amountPirce!="--"?(y(),A("div",lo," $"+w(("formatNumber"in e?e.formatNumber:Y(ve))(e.amountPirce)),1)):(y(),A("div",ro)),a("div",so,[a("div",uo,[J(w(e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),a("span",co,w(e.wallet.connected?("addCommom"in e?e.addCommom:Y(x))(e.balance,e.coinDecimals):"0"),1),e.havemax&&e.wallet.connected?(y(),W(L,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:Y(x))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[3]||(t[3]=i=>e.$emit("onHalf"))},{default:z(()=>[J(w("Half"))]),_:1},8,["disabled"])):V("",!0),e.havemax&&e.wallet.connected?(y(),W(L,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:Y(x))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[4]||(t[4]=i=>e.$emit("onMax"))},{default:z(()=>[J(w(e.$t("button.max")),1)]),_:1},8,["disabled"])):V("",!0)])])])])}const Wo=Q(Ke,[["render",mo],["__scopeId","data-v-3a378845"]]),fo=K({props:{fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},fixedFromCoin:{type:Boolean,defalut:!0},isInputTotalAmount:{type:Boolean,default:!1},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},createPoolInfo:{type:Object,default:()=>({})},currentPrice:{type:Number,default:0},currentPriceReverse:{type:Number,default:0},currentPriceTab:{type:String,default:""}},setup(e){const t=ne(),r=$(()=>t),m=X(),k=$(()=>m),c=oe(),n=$(()=>{let i=null;if(console.log(c.name,"91==>"),c.name=="liquidity-creat-pool")i=e.createPoolInfo;else for(const d in r.value.poolsObj){const p=r.value.poolsObj[d];p.address==c.query.poolAddress&&(console.log(p,"p===>"),i=p)}return i}),P=$(()=>k.value.chainName?fe(k.value.chainName):{}),s=$(()=>k.value.slippage),N=S(),C=S(),L=async()=>{if(!e.minPrice&&!e.maxPrice)return;const{TickUtil:i,TickMath:d,getNearestTickByTick:p}=P.value,o=n.value.token_a.decimals,l=n.value.token_b.decimals;let u,B,_,T,j,v,f,g=1,I=1;const q=n.value.current_tick_index;console.log(q,"==>currentTickIndex");let D=r.value.poolPriceConfigObj&&r.value.poolPriceConfigObj[n.value.address]&&r.value.poolPriceConfigObj[n.value.address].recommend_ranges||{};if(n.value.token_a.address.toLowerCase()===e.fromCoin.address.toLowerCase()&&n.value.token_b.address.toLowerCase()===e.toCoin.address.toLowerCase()?f=!0:f=!1,console.log(e.minPrice==="0"&&e.maxPrice==="∞","#### getRatio 171"),e.minPrice==="0"&&e.maxPrice==="∞")_=i.getMinIndex(n.value.tickSpacing),T=i.getMaxIndex(n.value.tickSpacing);else if(e.currentPriceTab=="custom"){f?(u=Number(e.minPrice),B=Number(e.maxPrice)):(u=new h(1).div(e.maxPrice).toString(),B=new h(1).div(e.minPrice).toString()),console.log(u,B,"min===>");try{j=d.priceToTickIndex(new h(u),o,l)}catch{j=-443636}try{v=d.priceToTickIndex(new h(B),o,l)}catch{v=443636}u==0&&(j=-443636),_=p(j,Number(n.value.tickSpacing)),T=p(v,Number(n.value.tickSpacing)),console.log(_,T,"===>tick_upper")}else _=D&&D[e.currentPriceTab]&&D[e.currentPriceTab].lower,T=D&&D[e.currentPriceTab]&&D[e.currentPriceTab].upper;if(e.maxPrice==="∞"||q>=_&&q<=T){let R;if(e.fixedFromCoin){const G=new h(e.fromCoinAmount||1).mul(Math.pow(10,e.fromCoin.decimals)).toString();R=new Z(G)}else{const G=new h(e.toCoinAmount||1).mul(Math.pow(10,e.toCoin.decimals)).toString();R=new Z(G)}const{tokenMaxA:O,tokenMaxB:b}=await P.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:n.value.token_a,tokenB:n.value.token_b,lowerTick:_,upperTick:T,coinAmount:R,iscoinA:f?e.fixedFromCoin:!e.fixedFromCoin,roundUp:!0,slippage:Number(s.value)/100,curSqrtPrice:new Z(n.value.current_sqrt_price)});console.log(O,b,"===>tokenMaxA, tokenMaxB"),f?e.fixedFromCoin?(I=Number(b)>0?b:"",g=Number(O)>0?O:""):(g=Number(O)>0?O:"",I=Number(b)>0?b:""):(e.fixedFromCoin,I=O,g=b)}else q>T?f?(I=1,g=0):(g=1,I=0):q<_&&(f?(I=0,g=1):(I=1,g=0));if(e.minPrice=="0"&&e.maxPrice=="∞")N.value=50,C.value=50;else{const R=g?Number(g):0,O=I?Number(I):0;console.log(R,O,"amountA===>amountB");const b=new h(O).add(new h(f?new h(R*e.currentPrice):new h(R*e.currentPriceReverse)));console.log(b,"===>totalAmount");const G=U(new h(R).mul(new h(f?e.currentPrice:e.currentPriceReverse)).div(b).mul(100).toNumber().toFixed(2),2),ke=U(new h(O).div(b).mul(100).toNumber().toFixed(2),2);N.value=G,C.value=ke,console.log(N.value,C.value,u,B,"====>336")}},F=()=>{var I,q,D,R,O;if(!e.minPrice&&!e.maxPrice)return;const{TickUtil:i,TickMath:d,getNearestTickByTick:p}=P.value,o=(I=n.value)==null?void 0:I.token_a.decimals,l=(q=n.value)==null?void 0:q.token_b.decimals;let u,B,_,T,j,v,f;console.log(n.value,"==>currentTickIndex"),n.value.current_tick_index;let g=r.value.poolPriceConfigObj&&r.value.poolPriceConfigObj[n.value.address]&&r.value.poolPriceConfigObj[n.value.address].recommend_ranges||{};if(((D=n.value)==null?void 0:D.token_a.address.toLowerCase())===e.fromCoin.address.toLowerCase()&&((R=n.value)==null?void 0:R.token_b.address.toLowerCase())===e.toCoin.address.toLowerCase()?f=!0:f=!1,console.log(f,"===>directs178"),e.minPrice==="0"&&e.maxPrice==="∞")_=i.getMinIndex(n.value.tickSpacing),T=i.getMaxIndex(n.value.tickSpacing);else if(e.currentPriceTab=="custom"||(O=c==null?void 0:c.query)!=null&&O.action){f?(u=Number(e.minPrice),B=Number(e.maxPrice)):(u=new h(1).div(e.maxPrice).toString(),B=new h(1).div(e.minPrice).toString()),console.log(u,B,"min===>");try{j=d.priceToTickIndex(new h(u),o,l)}catch{j=-443636}try{v=d.priceToTickIndex(new h(B),o,l)}catch{v=443636}u==0&&(j=-443636),_=p(j,Number(n.value.tickSpacing)),T=p(v,Number(n.value.tickSpacing)),console.log(_,T,"===>tick_upper")}else _=g&&g[e.currentPriceTab]&&g[e.currentPriceTab].lower,T=g&&g[e.currentPriceTab]&&g[e.currentPriceTab].upper;try{const b=P.value.calculateDepositRatioFixTokenA(_,T,new Z(n.value.current_sqrt_price));console.log(b.ratioB.toNumber(),b.ratioA.toNumber(),"ratio===>"),console.log(f,"===>directs"),n.value.needReverse?f?(N.value=U(b.ratioB.mul(100).toNumber().toFixed(2),2),C.value=U(b.ratioA.mul(100).toNumber().toFixed(2),2)):(N.value=U(b.ratioA.mul(100).toNumber().toFixed(2),2),C.value=U(b.ratioB.mul(100).toNumber().toFixed(2),2)):(N.value=U(b.ratioA.mul(100).toNumber().toFixed(2),2),C.value=U(b.ratioB.mul(100).toNumber().toFixed(2),2))}catch(b){console.log(b,"###calculateDepositRatioFixTokenA error")}};return M(()=>[n.value,e.minPrice,e.maxPrice,e.fromCoinAmount,e.toCoinAmount,e.isInputTotalAmount],([i,d,p])=>{console.log("0421####ratio###watch###poolInfo###",i),console.log("0421####ratio###watch###minPrice###",d),console.log("0421####ratio###watch###maxPrice###",p),e.isInputTotalAmount?F():d&&p&&i&&!te(i)&&(d!=="0"||p!=="0")?(L(),console.log("getRatio")):(console.log("0421####ratio###watch###clear###"),N.value="",C.value="")},{immediate:!0,deep:!0}),{fromCoinRatio:N,toCoinRatio:C}}});const vo={class:"deposit-ratio"},go={class:"deposit-ratio-text"},po=a("span",null,"Deposit Ratio",-1),bo=a("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-tips1"})],-1),ko={class:"deposit-ratio-content"},Po={class:"coin-ratio"},yo={class:"coin-a-ratio"},ho={class:"coin-b-ratio"},_o={class:"ratio-progress"};function So(e,t,r,m,k,c){var P,s;const n=$e;return y(),A("div",vo,[a("div",go,[po,E(n,{placement:"bottom","arrow-point-at-center":""},{title:z(()=>[a("span",null,w(e.$t("newAdd.depositRatioTips")),1)]),default:z(()=>[bo]),_:1})]),a("div",ko,[a("div",Po,[a("div",yo,[a("span",null,w((P=e.fromCoin)==null?void 0:P.symbol),1),J(" "+w(e.fromCoinRatio)+"% ",1)]),a("div",ho,[a("span",null,w((s=e.toCoin)==null?void 0:s.symbol),1),J(" "+w(e.toCoinRatio)+"% ",1)])]),a("div",_o,[a("div",{class:"from-percent",style:ie({width:e.fromCoinRatio+"%"})},null,4),a("div",{class:"to-percent",style:ie({width:e.toCoinRatio+"%"})},null,4)])])])}const Ho=Q(fo,[["render",So]]),Co=K({props:{poolInfo:{type:Object,default:()=>({})}},setup(e,t){const r=S(!1),m=S(null),k=S(0);let c=S(!1);const n=S(20),P=ne(),s=X(),N=S(!1);ue(()=>{}),we(()=>{clearInterval(m.value)});const C=()=>{c.value=!1,m.value=setInterval(()=>{var o;N.value||k.value<n.value&&(k.value+=1,k.value===n.value&&((o=e==null?void 0:e.poolInfo)!=null&&o.poolAddress&&P.updateCurrentPools(e.poolInfo.poolAddress,s.chainName),k.value=0))},1e3)},L=$(()=>s.slippage),F=()=>{t.emit("clearAll")},i=()=>{c.value=!0,k.value=0,t.emit("clickRefresh"),setTimeout(()=>{c.value=!1,C()},1e3)};M(()=>e.poolInfo,o=>{o&&!m.value&&C()},{immediate:!0});const d=Ie(),p=oe();return console.log(p,"route"),{refresh:c,clickRefresh:i,isShowSwapSetting:r,countdown:k,autoRefreshTime:n,slippage:L,clearAll:F,checkNullObj:te,router:d,route:p}}});const be=e=>(de("data-v-5a66c0f7"),e=e(),me(),e),To={class:"title"},$o=be(()=>a("div",{class:"left"},[a("span",null,"Deposit Amounts")],-1)),wo=be(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),Io={class:"deposit-progress"};function No(e,t,r,m,k,c){const n=Me,P=Be;return y(),A("div",To,[$o,e.route.name!=="liquidity-creat-pool"?(y(),A("div",{key:0,class:H(["right title-right deposit-setting",e.poolInfo?"havePoolInfo":"noPoolInfo"])},[a("div",{class:"slippage-icon",onClick:t[0]||(t[0]=s=>e.isShowSwapSetting=!0)},[wo,a("span",null,w(e.slippage)+"%",1)]),a("div",Io,[E(n,{loading:e.refresh,"auto-refresh-time":e.autoRefreshTime,countdown:e.countdown,onClickRefresh:e.clickRefresh},null,8,["loading","auto-refresh-time","countdown","onClickRefresh"])])],2)):V("",!0),e.isShowSwapSetting?(y(),W(P,{key:1,onOnClose:t[1]||(t[1]=s=>e.isShowSwapSetting=!1)})):V("",!0)])}const Jo=Q(Co,[["render",No],["__scopeId","data-v-5a66c0f7"]]);export{Jo as _,Ho as a,Wo as b,zo as c};
