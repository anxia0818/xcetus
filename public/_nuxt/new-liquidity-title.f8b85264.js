import{u as G,a as _e}from"./sha256.be3434e1.js";import{a as K,m as S,e as Q,o as g,f as I,r as C,E as oe,D as M,h as a,v as w,i as E,w as z,z as H,x as V,I as re,S as se,y as ue,j as J,B as ce,l as Pe,a0 as ye,a1 as he,q as Se,c as W,t as Ce,u as Y,J as $e,a2 as Te,p as de,k as me,H as ie,L as Ie,C as we,b as Ne}from"./entry.7c7b73e2.js";import{_ as Ae}from"./new-add-or-create.e798c370.js";import{_ as Me}from"./lock.01d8c649.js";/* empty css              *//* empty css              */import{a as fe,d as U,u as ne,i as Be,e as x,w as ve,c as te,f as Z}from"./pool.44ae24f9.js";import{D as y}from"./decimal.0e8aa3f1.js";import{g as ae,t as le}from"./tick.505fdad3.js";import{i as ee}from"./import-icon.de3e6c66.js";import{_ as pe}from"./token-warning.bbd60f04.js";/* empty css              *//* empty css              */import{_ as Oe}from"./refresh-icon.b845c1b8.js";import{_ as je}from"./swap-setting.efabd12e.js";const Re=K({setup(){const e=G();return{storeIndex:S(()=>e)}}});const Le={class:"create-pool-lock"},Fe={key:0,src:Ae,alt:""},qe={key:1,src:Me,alt:""};function De(e,t,r,d,k,s){return g(),I("div",Le,[e.storeIndex.theme=="default"?(g(),I("img",Fe)):(g(),I("img",qe))])}const Zo=Q(Re,[["render",De],["__scopeId","data-v-fb497971"]]),Ue=K({props:{inputValue:{type:String,default:""},pType:{type:String,required:!0},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},dirction:{type:Boolean,default:!0},defaultMaxPrice:{type:String,default:""},defaultMinPrice:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},loading:{type:Boolean,default:!1},intPrice:{type:String,default:""}},emits:["onInput"],setup(e,t){const r=C(""),d=C("");let k=C(""),s=C("");const n=oe(),P=G(),u=S(()=>P),A=S(()=>u.value.chainName?fe(u.value.chainName):{}),$=()=>{if(!(Number.isNaN(r.value)||Number(r.value)!==0&&!r.value||!e.poolInfo.tickSpacing))try{const o=ae(new y(r.value.toString()),Number(m.value.tickSpacing)),l=le(o+Number(m.value.tickSpacing));if(e.pType=="Min"&&Number(l.toString())>=Number(s.value.toString()))return;const c=l.toString();t.emit("onInput",c)}catch{t.emit("onInput","")}},L=()=>{try{if(Number.isNaN(r.value)||!r.value||!e.poolInfo.tickSpacing)return;const o=ae(new y(r.value),Number(m.value.tickSpacing)),l=le(o-Number(m.value.tickSpacing)),c=l.toString();if(e.pType=="Max"&&Number(l)<=Number(k.value))return;t.emit("onInput",c)}catch{t.emit("onInput","")}},F=o=>{let l=o.toString().replace(/[^\d.]/g,"");const c=/^\d+(\.\d+)?$/;l.split(".").length>2&&!c.exec(l)&&(l=l.substr(0,l.length-1)),d.value=String(l),console.log(l,"v===>")},i=o=>{var j,v,f,p;const{TickUtil:l,TickMath:c,getNearestTickByTick:B}=A.value;console.log("0519###onBlur###event###",o);const h=o.target.value;console.log("0519###onBlur###value###",h);let T;if(h==="0"){T=-443636,t.emit("onInput","0");return}else if(h!=="0"&&h){const N=c.priceToTickIndex(new y(h),(j=m.value.token_a)==null?void 0:j.decimals,(v=m.value.token_b)==null?void 0:v.decimals);console.log("0519###onBlur###t###",N),T=B(Number(N),Number(m.value.tickSpacing)),console.log("0519###onBlur###tick###",T);const q=c.tickIndexToPrice(new y(T),(f=m.value.token_a)==null?void 0:f.decimals,(p=m.value.token_b)==null?void 0:p.decimals);console.log("0519###onBlur###price###",q.toString()),t.emit("onInput",q.toString())}else t.emit("onInput")};M(()=>e.defaultMinPrice,(o,l)=>{o!==l&&(console.log(e.defaultMinPrice,"props.defaultMinPrice===>"),k.value=e.defaultMinPrice,console.log(k.value,"props.minPrice.value===>"))},{immediate:!0}),M(()=>e.defaultMaxPrice,(o,l)=>{o!==l&&(s.value=e.defaultMaxPrice)},{immediate:!0}),M(()=>d.value,o=>{console.log(o,"=sdajlaksjdkldas")},{immediate:!0}),M(()=>[e.inputValue,n.query.action],([o])=>{if(console.log(o,"==>newValue"),o&&o!=="0"&&o!=="∞"){r.value=o;const c=o.toString().split(".")[1];d.value=o!=="0"&&o!=="∞"&&c&&c.length>6?U(o.toString(),6):o.toString()}else(o=="0"||o=="∞"||n.query.action)&&(d.value=o);console.log(d.value,"===> oValue.value")},{immediate:!0});const m=C({});M(()=>e.poolInfo,(o,l)=>{o&&(m.value=o)},{immediate:!0});const b=C("");return M(()=>e.currentPriceTab,o=>{b.value=o,console.log(e.currentPriceTab,"===>props.currentPriceTab")},{immediate:!0}),console.log(e,"props=======>"),{addPrice:$,minusPrice:L,oValue:d,changeValue:F,isDisabled:b,route:n,onBlur:i}}});const Ve={class:"set-price-item"},Ee={class:"title"},ze={class:"input-box"},We={key:0,class:"minus-btn"},He={key:1,class:"plus-btn"};function Je(e,t,r,d,k,s){const n=re,P=se;return g(),I("div",Ve,[a("div",Ee,w(e.pType=="Max"?e.$t("common.maxPrice"):e.pType=="Min"?e.$t("common.minPrice"):""),1),E(P,{loading:e.loading,active:"",paragraph:!1},{default:z(()=>[a("div",ze,[e.currentPriceTab!=="full range"?(g(),I("a",We,[a("div",{class:H(!e.fromCoin&&!e.toCoin||e.poolInfo&&!e.poolInfo.tickSpacing&&!e.$route.query.action?"reductionDis":"reduction"),onClick:t[0]||(t[0]=(...u)=>e.minusPrice&&e.minusPrice(...u))},"-",2)])):V("",!0),E(n,{id:"pValu",value:e.oValue,"onUpdate:value":t[1]||(t[1]=u=>e.oValue=u),disabled:e.route.query.action&&!e.intPrice,autocomplete:"off",placeholder:"0",onChange:t[2]||(t[2]=u=>e.changeValue(u.target.value)),onBlur:t[3]||(t[3]=u=>e.onBlur(u))},null,8,["value","disabled"]),e.currentPriceTab!=="full range"?(g(),I("a",He,[a("div",{class:H(!e.fromCoin&&!e.toCoin||e.poolInfo&&!e.poolInfo.tickSpacing&&!e.$route.query.action?"addDis":"add"),onClick:t[4]||(t[4]=(...u)=>e.addPrice&&e.addPrice(...u))},"+",2)])):V("",!0)])]),_:1},8,["loading"]),a("p",{class:H(["per-text",!e.toCoin&&!e.fromCoin?"per-text-disabled":""])},w(e.toCoin&&e.toCoin.symbol)+" per "+w(e.fromCoin&&e.fromCoin.symbol),3)])}const ge=Q(Ue,[["render",Je],["__scopeId","data-v-a5dcc408"]]),Ge=K({components:{NewLiquiditySetPrice:ge},props:{min:{type:String,default:""},max:{type:String,default:""},defaultMinPrice:{type:String,default:""},defaultMaxPrice:{type:String,default:""},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},dirction:{type:Boolean,default:!0},invalidPriceRange:{type:Boolean,default:!1},poolInfo:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},loading:{type:Boolean,default:!1},intPrice:{type:String,default:""}},setup(e,t){let r=C(""),d=C(""),k=C(),s=C(!1),n=C(!1);const P=C({}),u=G(),A=S(()=>u);ue(()=>{r.value=e.min,d.value=e.max}),M(()=>e.currentPriceTab,(o,l)=>{o!==l&&(k.value=e.currentPriceTab)},{immediate:!0}),M(()=>e.min,(o,l)=>{o!==l&&(r.value=o,console.log(e.min,"===> props.min"))}),M(()=>e.max,(o,l)=>{o!==l&&(d.value=o)}),M(()=>e.poolInfo,(o,l)=>{o&&(P.value=o)},{immediate:!0});const $=C("");M(()=>e.intPrice,o=>{console.log(e.intPrice,"===>props.intPrice"),$.value=o},{immediate:!0,deep:!0});const L=o=>{console.log(o,"val===>123"),r.value=o,t.emit("onChangeMinPrice",o)},F=o=>{d.value=o,t.emit("onChangeMaxPrice",o)};M(s,(o,l)=>{o!==l&&t.emit("onChangeFullRange",o)});const i=()=>{r.value=e.defaultMinPrice,d.value=e.defaultMaxPrice,n.value=!1,s.value=!1},m=()=>{n.value=!1,r.value="0",d.value="∞"};return M(s,(o,l)=>{o!==l&&t.emit("onChangeFullRange",o)}),{store:A,changeMinPrice:L,changeMaxPrice:F,importIcon:ee,resetPrice:i,changeShowUnderStand:()=>{s.value=!s.value,s.value?n.value=!0:i(),n.value||(r.value=e.defaultMinPrice,d.value=e.defaultMaxPrice)},showUnderStand:n,minPrice:r,maxPrice:d,understand:m,isRadio:s,initPirce:$}}});const Ke={class:"set-price"},Qe={class:"card-container"},Xe={key:0,class:"card"},Ye={key:1,class:"understand"},Ze={class:"left"},xe={class:"right"};function eo(e,t,r,d,k,s){const n=ge,P=ce;return g(),I("div",Ke,[a("div",Qe,[e.showUnderStand?(g(),I("div",Ye,[a("div",Ze,[a("p",null,w(e.$t("common.lowerEfficiency")),1),a("p",null,w(e.$t("common.lowerEfficiencyTips")),1)]),a("div",xe,[E(P,{onClick:e.understand},{default:z(()=>[J(w(e.$t("common.understand")),1)]),_:1},8,["onClick"])])])):(g(),I("div",Xe,[E(n,{value:e.minPrice,"onUpdate:value":t[0]||(t[0]=u=>e.minPrice=u),"input-value":e.minPrice,"p-type":"Min","default-max-price":e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,dirction:e.dirction,"pool-info":e.poolInfo,loading:e.loading,"current-price-tab":e.currentPriceTab,"int-price":e.initPirce,onOnInput:e.changeMinPrice,onAddValue:e.changeMinPrice,onDelValue:e.changeMinPrice},null,8,["value","input-value","default-max-price","from-coin","to-coin","dirction","pool-info","loading","current-price-tab","int-price","onOnInput","onAddValue","onDelValue"]),E(n,{value:e.maxPrice,"onUpdate:value":t[1]||(t[1]=u=>e.maxPrice=u),"input-value":e.maxPrice,"p-type":"Max","default-min-price":e.minPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,dirction:e.dirction,"pool-info":e.poolInfo,loading:e.loading,"int-price":e.initPirce,"current-price-tab":e.currentPriceTab,onOnInput:e.changeMaxPrice,onAddValue:e.changeMaxPrice,onDelValue:e.changeMaxPrice},null,8,["value","input-value","default-min-price","from-coin","to-coin","dirction","pool-info","loading","int-price","current-price-tab","onOnInput","onAddValue","onDelValue"])]))])])}const xo=Q(Ge,[["render",eo],["__scopeId","data-v-e3859dff"]]),oo=K({components:{TokenWarning:pe},props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinSymbol:{type:String,default:""},balance:{type:Number,default:null},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},importPage:{type:String,default:""},address:{type:String,default:""}},setup(e,t){const{t:r,locale:d}=Pe(),k=G(),s=S(()=>k),n=S(()=>new y(Number(e.balance)).div(2)),P=ye(he,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function u(){this.$emit("onSelect")}const A=v=>{const f=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(c==null?void 0:c.value)&&(c==null?void 0:c.value)}})?).*$`);v.target.value=v.target.value.replace(f,"$1")},$=_e(),L=S(()=>$),F=ne(),i=S(()=>F),m=S(()=>i.value.tokensWarningObj);let b={};M(()=>i.value.RATES,v=>{v&&(console.log(v,"price====>"),b=v)},{immediate:!0});const o=S(()=>(console.log(e.inputValue,"==>props.inputValue"),console.log(e.coinName,"===>props.coinName"),Be(Number(e.inputValue)*Number(b&&b[e.address]&&b[e.address].price),2))),l=S(()=>{var v,f,p;return console.log((v=i.value.tokensObj[e.address])==null?void 0:v.labels,"===> pool.value.tokensObj[props.address]?.labels"),i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((f=i.value.tokensObj[e.address])==null?void 0:f.labels)&&((p=i.value.tokensObj[e.address])==null?void 0:p.labels[0])}),c=S(()=>{var v;return i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((v=i.value.tokensObj[e.address])==null?void 0:v.decimals)}),B=S(()=>{var v,f,p,N;return e.coinIcon||((f=(v=i==null?void 0:i.value)==null?void 0:v.tokensObj[e.address])==null?void 0:f.logo_url)||((N=(p=i==null?void 0:i.value)==null?void 0:p.tokensObj[e.address])==null?void 0:N.logoURI)||(s.value.theme==="default"?ee("/image/coins/unknown.png"):ee("/image/coins/sui-unknown.png"))}),h=S(()=>i.value.tokensObj),T=S(()=>s.value.theme);return{route:oe(),theme:T,currentIcon:B,tokensObj:h,pool:i,halfBalance:n,coinLabels:l,t:r,addCommom:x,store:s,wallet:L,indicator:P,inputChange:A,importIcon:ee,selectCoin:u,amountPirce:o,coinDecimals:c,formatNumber:ve,tokensWarningObj:m,checkNullObj:te}}});const no=e=>(de("data-v-3a378845"),e=e(),me(),e),to={class:"card"},io={class:"top"},ao={key:1,class:"input-div"},lo={key:0},ro={class:"loading-token"},so={key:1},uo={key:0},co=no(()=>a("use",{"xlink:href":"#icon-icon_on"},null,-1)),mo=[co],fo={class:"bottom"},vo={key:0,class:"amount-price"},po={key:1},go={class:"top"},bo={class:"right"},ko={class:"balance"};function _o(e,t,r,d,k,s){const n=re,P=$e,u=Te,A=pe,$=se,L=ce,F=Se("image");return g(),I("div",to,[a("div",io,[e.inputDisabled?(g(),I("div",ao,[e.inputValue?(g(),I("span",lo,w(e.inputValue),1)):(g(),W(P,{key:1,indicator:e.indicator},null,8,["indicator"]))])):(g(),W(n,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.inputValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:t[0]||(t[0]=i=>e.$emit("onInput",i.target.value)),onFocus:t[1]||(t[1]=i=>e.$emit("onFocus"))},null,8,["value","disabled","onChange"])),a("div",{class:H(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"?"left-opcity":""].join("")]),onClick:t[2]||(t[2]=i=>e.pool.isTokenLoading?"":e.selectCoin())},[a("div",ro,[e.pool.isTokenLoading?(g(),W(u,{key:0,active:e.active,size:"small",paragraph:!1},null,8,["active"])):e.address?Ce((g(),I("img",so,null,512)),[[F,e.currentIcon]]):V("",!0),E(A,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),E($,{loading:e.pool.isTokenLoading,class:"loading-token-skeleton",active:"",paragraph:!1},{default:z(()=>[a("div",null,[a("p",null,w(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(g(),I("p",uo,w(e.coinLabels),1)):V("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(g(),I("svg",{key:0,class:H(["icon",e.pool.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},mo,2)):V("",!0)],2)]),a("div",fo,[e.inputValue&&e.amountPirce!="--"?(g(),I("div",vo," $"+w(("formatNumber"in e?e.formatNumber:Y(ve))(e.amountPirce)),1)):(g(),I("div",po)),a("div",go,[a("div",bo,[J(w(e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),a("span",ko,w(e.wallet.connected?("addCommom"in e?e.addCommom:Y(x))(e.balance,e.coinDecimals):"0"),1),e.havemax&&e.wallet.connected?(g(),W(L,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:Y(x))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[3]||(t[3]=i=>e.$emit("onHalf"))},{default:z(()=>[J(w("Half"))]),_:1},8,["disabled"])):V("",!0),e.havemax&&e.wallet.connected?(g(),W(L,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:Y(x))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[4]||(t[4]=i=>e.$emit("onMax"))},{default:z(()=>[J(w(e.$t("button.max")),1)]),_:1},8,["disabled"])):V("",!0)])])])])}const en=Q(oo,[["render",_o],["__scopeId","data-v-3a378845"]]),Po=K({props:{fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},fixedFromCoin:{type:Boolean,defalut:!0},isInputTotalAmount:{type:Boolean,default:!1},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},createPoolInfo:{type:Object,default:()=>({})},currentPrice:{type:Number,default:0},currentPriceReverse:{type:Number,default:0},currentPriceTab:{type:String,default:""}},setup(e){const t=ne(),r=S(()=>t),d=G(),k=S(()=>d),s=oe(),n=S(()=>{let i=null;if(console.log(s.name,"91==>"),s.name=="liquidity-creat-pool")i=e.createPoolInfo;else for(const m in r.value.poolsObj){const b=r.value.poolsObj[m];b.address==s.query.poolAddress&&(console.log(b,"p===>"),i=b)}return i}),P=S(()=>k.value.chainName?fe(k.value.chainName):{}),u=S(()=>k.value.slippage),A=C(),$=C(),L=async()=>{if(!e.minPrice&&!e.maxPrice)return;const{TickUtil:i,TickMath:m,getNearestTickByTick:b}=P.value,o=n.value.token_a.decimals,l=n.value.token_b.decimals;let c,B,h,T,j,v,f,p=1,N=1;const q=n.value.current_tick_index;console.log(q,"==>currentTickIndex");let D=r.value.poolPriceConfigObj&&r.value.poolPriceConfigObj[n.value.address]&&r.value.poolPriceConfigObj[n.value.address].recommend_ranges||{};if(n.value.token_a.address.toLowerCase()===e.fromCoin.address.toLowerCase()&&n.value.token_b.address.toLowerCase()===e.toCoin.address.toLowerCase()?f=!0:f=!1,console.log(e.minPrice==="0"&&e.maxPrice==="∞","#### getRatio 171"),e.minPrice==="0"&&e.maxPrice==="∞")h=i.getMinIndex(n.value.tickSpacing),T=i.getMaxIndex(n.value.tickSpacing);else if(e.currentPriceTab=="custom"){f?(c=Number(e.minPrice),B=Number(e.maxPrice)):(c=e.maxPrice!=="∞"?new y(1).div(e.maxPrice).toString():1/0,B=new y(1).div(e.minPrice).toString()),console.log(c,B,"min===>");try{j=m.priceToTickIndex(new y(c),o,l)}catch{j=-443636}try{v=m.priceToTickIndex(new y(B),o,l)}catch{v=443636}c==0&&(j=-443636),h=b(j,Number(n.value.tickSpacing)),T=b(v,Number(n.value.tickSpacing)),console.log(h,T,"===>tick_upper")}else h=D&&D[e.currentPriceTab]&&D[e.currentPriceTab].lower,T=D&&D[e.currentPriceTab]&&D[e.currentPriceTab].upper;if(e.maxPrice==="∞"||q>=h&&q<=T){let R;if(e.fixedFromCoin){const X=new y(e.fromCoinAmount||1).mul(Math.pow(10,e.fromCoin.decimals)).toString();R=new Z(X)}else{const X=new y(e.toCoinAmount||1).mul(Math.pow(10,e.toCoin.decimals)).toString();R=new Z(X)}const{tokenMaxA:O,tokenMaxB:_}=await P.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:n.value.token_a,tokenB:n.value.token_b,lowerTick:h,upperTick:T,coinAmount:R,iscoinA:f?e.fixedFromCoin:!e.fixedFromCoin,roundUp:!0,slippage:Number(u.value)/100,curSqrtPrice:new Z(n.value.current_sqrt_price)});console.log(O,_,"===>tokenMaxA, tokenMaxB"),f?e.fixedFromCoin?(N=Number(_)>0?_:"",p=Number(O)>0?O:""):(p=Number(O)>0?O:"",N=Number(_)>0?_:""):(e.fixedFromCoin,N=O,p=_)}else q>T?f?(N=1,p=0):(p=1,N=0):q<h&&(f?(N=0,p=1):(N=1,p=0));if(e.minPrice=="0"&&e.maxPrice=="∞")A.value=50,$.value=50;else{const R=p?Number(p):0,O=N?Number(N):0;console.log(R,O,"amountA===>amountB");const _=new y(O).add(new y(f?new y(R*e.currentPrice):new y(R*e.currentPriceReverse)));console.log(_,"===>totalAmount");const X=U(new y(R).mul(new y(f?e.currentPrice:e.currentPriceReverse)).div(_).mul(100).toNumber().toFixed(2),2),ke=U(new y(O).div(_).mul(100).toNumber().toFixed(2),2);A.value=X,$.value=ke,console.log(A.value,$.value,c,B,"====>336")}},F=()=>{var N,q,D,R,O;if(!e.minPrice&&!e.maxPrice)return;const{TickUtil:i,TickMath:m,getNearestTickByTick:b}=P.value,o=(N=n.value)==null?void 0:N.token_a.decimals,l=(q=n.value)==null?void 0:q.token_b.decimals;let c,B,h,T,j,v,f;console.log(n.value,"==>currentTickIndex"),n.value.current_tick_index;let p=r.value.poolPriceConfigObj&&r.value.poolPriceConfigObj[n.value.address]&&r.value.poolPriceConfigObj[n.value.address].recommend_ranges||{};if(((D=n.value)==null?void 0:D.token_a.address.toLowerCase())===e.fromCoin.address.toLowerCase()&&((R=n.value)==null?void 0:R.token_b.address.toLowerCase())===e.toCoin.address.toLowerCase()?f=!0:f=!1,console.log(f,"===>directs178"),e.minPrice==="0"&&e.maxPrice==="∞")h=i.getMinIndex(n.value.tickSpacing),T=i.getMaxIndex(n.value.tickSpacing);else if(e.currentPriceTab=="custom"||(O=s==null?void 0:s.query)!=null&&O.action){f?(c=Number(e.minPrice),B=Number(e.maxPrice)):(c=e.maxPrice!=="∞"?new y(1).div(e.maxPrice).toString():1/0,B=new y(1).div(e.minPrice).toString()),console.log(c,B,"min===>");try{j=m.priceToTickIndex(new y(c),o,l)}catch{j=-443636}try{v=m.priceToTickIndex(new y(B),o,l)}catch{v=443636}c==0&&(j=-443636),h=b(j,Number(n.value.tickSpacing)),T=b(v,Number(n.value.tickSpacing)),console.log(h,T,"===>tick_upper")}else h=p&&p[e.currentPriceTab]&&p[e.currentPriceTab].lower,T=p&&p[e.currentPriceTab]&&p[e.currentPriceTab].upper;try{const _=P.value.calculateDepositRatioFixTokenA(h,T,new Z(n.value.current_sqrt_price));console.log(_.ratioB.toNumber(),_.ratioA.toNumber(),"ratio===>"),console.log(f,"===>directs"),n.value.needReverse?f?(A.value=U(_.ratioA.mul(100).toNumber().toFixed(2),2),$.value=U(_.ratioB.mul(100).toNumber().toFixed(2),2)):(A.value=U(_.ratioB.mul(100).toNumber().toFixed(2),2),$.value=U(_.ratioA.mul(100).toNumber().toFixed(2),2)):(A.value=U(_.ratioA.mul(100).toNumber().toFixed(2),2),$.value=U(_.ratioB.mul(100).toNumber().toFixed(2),2))}catch(_){console.log(_,"###calculateDepositRatioFixTokenA error")}};return M(()=>[n.value,e.minPrice,e.maxPrice,e.fromCoinAmount,e.toCoinAmount,e.isInputTotalAmount],([i,m,b])=>{console.log("0421####ratio###watch###poolInfo###",i),console.log("0421####ratio###watch###minPrice###",m),console.log("0421####ratio###watch###maxPrice###",b),e.isInputTotalAmount?F():m&&b&&i&&!te(i)&&(m!=="0"||b!=="0")?(L(),console.log("getRatio")):(console.log("0421####ratio###watch###clear###"),A.value="",$.value="")},{immediate:!0,deep:!0}),{fromCoinRatio:A,toCoinRatio:$}}});const yo={class:"deposit-ratio"},ho={class:"deposit-ratio-text"},So=a("span",null,"Deposit Ratio",-1),Co=a("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-tips1"})],-1),$o={class:"deposit-ratio-content"},To={class:"coin-ratio"},Io={class:"coin-a-ratio"},wo={class:"coin-b-ratio"},No={class:"ratio-progress"};function Ao(e,t,r,d,k,s){var P,u;const n=Ie;return g(),I("div",yo,[a("div",ho,[So,E(n,{placement:"bottom","arrow-point-at-center":""},{title:z(()=>[a("span",null,w(e.$t("newAdd.depositRatioTips")),1)]),default:z(()=>[Co]),_:1})]),a("div",$o,[a("div",To,[a("div",Io,[a("span",null,w((P=e.fromCoin)==null?void 0:P.symbol),1),J(" "+w(e.fromCoinRatio)+"% ",1)]),a("div",wo,[a("span",null,w((u=e.toCoin)==null?void 0:u.symbol),1),J(" "+w(e.toCoinRatio)+"% ",1)])]),a("div",No,[a("div",{class:"from-percent",style:ie({width:e.fromCoinRatio+"%"})},null,4),a("div",{class:"to-percent",style:ie({width:e.toCoinRatio+"%"})},null,4)])])])}const on=Q(Po,[["render",Ao]]),Mo=K({props:{poolInfo:{type:Object,default:()=>({})}},setup(e,t){const r=C(!1),d=C(null),k=C(0);let s=C(!1);const n=C(20),P=ne(),u=G(),A=C(!1);ue(()=>{}),we(()=>{clearInterval(d.value)});const $=()=>{s.value=!1,d.value=setInterval(()=>{var o;A.value||k.value<n.value&&(k.value+=1,k.value===n.value&&((o=e==null?void 0:e.poolInfo)!=null&&o.poolAddress&&P.updateCurrentPools(e.poolInfo.poolAddress,u.chainName),k.value=0))},1e3)},L=S(()=>u.slippage),F=()=>{t.emit("clearAll")},i=()=>{s.value=!0,k.value=0,t.emit("clickRefresh"),setTimeout(()=>{s.value=!1,$()},1e3)};M(()=>e.poolInfo,o=>{o&&!d.value&&$()},{immediate:!0});const m=Ne(),b=oe();return console.log(b,"route"),{refresh:s,clickRefresh:i,isShowSwapSetting:r,countdown:k,autoRefreshTime:n,slippage:L,clearAll:F,checkNullObj:te,router:m,route:b}}});const be=e=>(de("data-v-592c46fc"),e=e(),me(),e),Bo={class:"title"},Oo=be(()=>a("div",{class:"left"},[a("span",null,"Deposit Amounts")],-1)),jo=be(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),Ro={key:0,class:"deposit-progress"};function Lo(e,t,r,d,k,s){const n=Oe,P=je;return g(),I("div",Bo,[Oo,a("div",{class:H(["right title-right deposit-setting",e.poolInfo?"havePoolInfo":"noPoolInfo"])},[a("div",{class:"slippage-icon",onClick:t[0]||(t[0]=u=>e.isShowSwapSetting=!0)},[jo,a("span",null,w(e.slippage)+"%",1)]),e.route.name!=="liquidity-creat-pool"?(g(),I("div",Ro,[E(n,{loading:e.refresh,"auto-refresh-time":e.autoRefreshTime,countdown:e.countdown,onClickRefresh:e.clickRefresh},null,8,["loading","auto-refresh-time","countdown","onClickRefresh"])])):V("",!0)],2),e.isShowSwapSetting?(g(),W(P,{key:0,onOnClose:t[1]||(t[1]=u=>e.isShowSwapSetting=!1)})):V("",!0)])}const nn=Q(Mo,[["render",Lo],["__scopeId","data-v-592c46fc"]]);export{nn as _,on as a,Zo as b,en as c,xo as d};
