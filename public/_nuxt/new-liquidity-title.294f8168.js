import{a as Y,r as S,E as te,m as T,D as w,e as Z,o as _,f as A,h as a,v as I,i as D,w as X,z as G,I as de,S as me,y as fe,j as K,B as ve,l as Ce,a0 as Te,a1 as $e,q as Ie,c as J,t as Ne,x as z,u as ee,J as we,a2 as Ae,p as pe,k as ge,H as se,C as Me,b as Be}from"./entry.f6bb9ee2.js";/* empty css              *//* empty css              */import{a as be,d as F,u as ae,i as Oe,e as ne,v as ke,c as le,f as oe}from"./pool.35fd4e00.js";import{D as y}from"./decimal.0e8aa3f1.js";import{g as ue,t as ce}from"./tick.505fdad3.js";import{u as x,a as je}from"./sha256.dba739f5.js";import{i as ye}from"./import-icon.de3e6c66.js";import{_ as Pe}from"./token-warning.1111f41b.js";/* empty css              */import{_ as Re}from"./refresh-icon.ff90eb0a.js";import{_ as Le}from"./swap-setting.5f3ca5d0.js";const qe=Y({props:{inputValue:{type:String,default:""},pType:{type:String,required:!0},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},dirction:{type:Boolean,default:!0},defaultMaxPrice:{type:String,default:""},defaultMinPrice:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},loading:{type:Boolean,default:!1},intPrice:{type:String,default:""}},emits:["onInput"],setup(e,t){const r=S(""),f=S("");let g=S(""),s=S("");const n=te(),b=x(),c=T(()=>b),N=T(()=>c.value.chainName?be(c.value.chainName):{}),$=()=>{if(!(Number.isNaN(r.value)||Number(r.value)!==0&&!r.value||!e.poolInfo.tickSpacing))try{const o=ue(new y(r.value.toString()),Number(d.value.tickSpacing)),l=ce(o+Number(d.value.tickSpacing));if(e.pType=="Min"&&Number(l.toString())>=Number(s.value.toString()))return;const u=l.toString();t.emit("onInput",u)}catch{t.emit("onInput","")}},j=()=>{try{if(Number.isNaN(r.value)||!r.value||!e.poolInfo.tickSpacing)return;const o=ue(new y(r.value),Number(d.value.tickSpacing)),l=ce(o-Number(d.value.tickSpacing)),u=l.toString();if(e.pType=="Max"&&Number(l)<=Number(g.value))return;t.emit("onInput",u)}catch{t.emit("onInput","")}},R=o=>{let l=o.toString().replace(/[^\d.]/g,"");const u=/^\d+(\.\d+)?$/;l.split(".").length>2&&!u.exec(l)&&(l=l.substr(0,l.length-1)),f.value=String(l),console.log(l,"v===>")},i=o=>{var O,v,m,h;const{TickUtil:l,TickMath:u,getNearestTickByTick:M}=N.value;console.log("0519###onBlur###event###",o);const P=o.target.value;console.log("0519###onBlur###value###",P);let C;if(P==="0"){C=-443636,t.emit("onInput","0");return}else if(P!=="0"&&P){const k=u.priceToTickIndex(new y(P),(O=d.value.token_a)==null?void 0:O.decimals,(v=d.value.token_b)==null?void 0:v.decimals);console.log("0519###onBlur###t###",k),C=M(Number(k),Number(d.value.tickSpacing)),console.log("0519###onBlur###tick###",C);const L=u.tickIndexToPrice(new y(C),(m=d.value.token_a)==null?void 0:m.decimals,(h=d.value.token_b)==null?void 0:h.decimals);console.log("0519###onBlur###price###",L.toString()),t.emit("onInput",L.toString())}else t.emit("onInput")};w(()=>e.defaultMinPrice,(o,l)=>{o!==l&&(console.log(e.defaultMinPrice,"props.defaultMinPrice===>"),g.value=e.defaultMinPrice,console.log(g.value,"props.minPrice.value===>"))},{immediate:!0}),w(()=>e.defaultMaxPrice,(o,l)=>{o!==l&&(s.value=e.defaultMaxPrice)},{immediate:!0}),w(()=>f.value,o=>{console.log(o,"=sdajlaksjdkldas")},{immediate:!0}),w(()=>[e.inputValue,n.query.action],([o])=>{if(console.log(o,"==>newValue"),o&&o!=="0"&&o!=="∞"){r.value=o;const u=o.toString().split(".")[1];f.value=o!=="0"&&o!=="∞"&&u&&u.length>6?F(o.toString(),6):o.toString()}else(o=="0"||o=="∞"||n.query.action)&&(f.value=o);console.log(f.value,"===> oValue.value")},{immediate:!0});const d=S({});w(()=>e.poolInfo,(o,l)=>{o&&(d.value=o)},{immediate:!0});const p=S("");return w(()=>e.currentPriceTab,o=>{p.value=o},{immediate:!0}),console.log(e,"props=======>"),{addPrice:$,minusPrice:j,oValue:f,changeValue:R,isDisabled:p,route:n,onBlur:i}}});const Fe={class:"set-price-item"},De={class:"title"},Ue={class:"input-box"},Ve={class:"minus-btn"},Ee=["disabled"],ze={class:"plus-btn"};function We(e,t,r,f,g,s){const n=de,b=me;return _(),A("div",Fe,[a("div",De,I(e.pType=="Max"?e.$t("common.maxPrice"):e.pType=="Min"?e.$t("common.minPrice"):""),1),D(b,{loading:e.loading,active:"",paragraph:!1},{default:X(()=>[a("div",Ue,[a("a",Ve,[a("div",{class:G(!e.fromCoin&&!e.toCoin||e.poolInfo&&!e.poolInfo.tickSpacing&&!e.$route.query.action?"reductionDis":"reduction"),disabled:e.isDisabled!=="Custom",onClick:t[0]||(t[0]=(...c)=>e.minusPrice&&e.minusPrice(...c))},"-",10,Ee)]),D(n,{id:"pValu",value:e.oValue,"onUpdate:value":t[1]||(t[1]=c=>e.oValue=c),disabled:e.route.query.action&&!e.intPrice,autocomplete:"off",placeholder:"0",onChange:t[2]||(t[2]=c=>e.changeValue(c.target.value)),onBlur:t[3]||(t[3]=c=>e.onBlur(c))},null,8,["value","disabled"]),a("a",ze,[a("div",{class:G(!e.fromCoin&&!e.toCoin||e.poolInfo&&!e.poolInfo.tickSpacing&&!e.$route.query.action?"addDis":"add"),onClick:t[4]||(t[4]=(...c)=>e.addPrice&&e.addPrice(...c))},"+",2)])])]),_:1},8,["loading"]),a("p",{class:G(["per-text",!e.toCoin&&!e.fromCoin?"per-text-disabled":""])},I(e.toCoin&&e.toCoin.symbol)+" per "+I(e.fromCoin&&e.fromCoin.symbol),3)])}const he=Z(qe,[["render",We],["__scopeId","data-v-1c770680"]]),He=Y({components:{NewLiquiditySetPrice:he},props:{min:{type:String,default:""},max:{type:String,default:""},defaultMinPrice:{type:String,default:""},defaultMaxPrice:{type:String,default:""},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},dirction:{type:Boolean,default:!0},invalidPriceRange:{type:Boolean,default:!1},poolInfo:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},loading:{type:Boolean,default:!1},intPrice:{type:String,default:""}},setup(e,t){let r=S(""),f=S(""),g=S(),s=S(!1),n=S(!1);const b=S({}),c=x(),N=T(()=>c);fe(()=>{r.value=e.min,f.value=e.max}),w(()=>e.currentPriceTab,(o,l)=>{o!==l&&(g.value=e.currentPriceTab)},{immediate:!0}),w(()=>e.min,(o,l)=>{o!==l&&(r.value=o,console.log(e.min,"===> props.min"))}),w(()=>e.max,(o,l)=>{o!==l&&(f.value=o)}),w(()=>e.poolInfo,(o,l)=>{o&&(b.value=o)},{immediate:!0});const $=S("");w(()=>e.intPrice,o=>{console.log(e.intPrice,"===>props.intPrice"),$.value=o},{immediate:!0,deep:!0});const j=o=>{console.log(o,"val===>123"),r.value=o,t.emit("onChangeMinPrice",o)},R=o=>{f.value=o,t.emit("onChangeMaxPrice",o)};w(s,(o,l)=>{o!==l&&t.emit("onChangeFullRange",o)});const i=()=>{r.value=e.defaultMinPrice,f.value=e.defaultMaxPrice,n.value=!1,s.value=!1},d=()=>{n.value=!1,r.value="0",f.value="∞"};return w(s,(o,l)=>{o!==l&&t.emit("onChangeFullRange",o)}),{store:N,changeMinPrice:j,changeMaxPrice:R,importIcon:ye,resetPrice:i,changeShowUnderStand:()=>{s.value=!s.value,s.value?n.value=!0:i(),n.value||(r.value=e.defaultMinPrice,f.value=e.defaultMaxPrice)},showUnderStand:n,minPrice:r,maxPrice:f,understand:d,isRadio:s,initPirce:$}}});const Je={class:"set-price"},Ge={class:"card-container"},Ke={key:0,class:"card"},Qe={key:1,class:"understand"},Xe={class:"left"},Ye={class:"right"};function Ze(e,t,r,f,g,s){const n=he,b=ve;return _(),A("div",Je,[a("div",Ge,[e.showUnderStand?(_(),A("div",Qe,[a("div",Xe,[a("p",null,I(e.$t("common.lowerEfficiency")),1),a("p",null,I(e.$t("common.lowerEfficiencyTips")),1)]),a("div",Ye,[D(b,{onClick:e.understand},{default:X(()=>[K(I(e.$t("common.understand")),1)]),_:1},8,["onClick"])])])):(_(),A("div",Ke,[D(n,{value:e.minPrice,"onUpdate:value":t[0]||(t[0]=c=>e.minPrice=c),"input-value":e.minPrice,"p-type":"Min","default-max-price":e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,dirction:e.dirction,"pool-info":e.poolInfo,loading:e.loading,"current-price-tab":e.currentPriceTab,"int-price":e.initPirce,onOnInput:e.changeMinPrice,onAddValue:e.changeMinPrice,onDelValue:e.changeMinPrice},null,8,["value","input-value","default-max-price","from-coin","to-coin","dirction","pool-info","loading","current-price-tab","int-price","onOnInput","onAddValue","onDelValue"]),D(n,{value:e.maxPrice,"onUpdate:value":t[1]||(t[1]=c=>e.maxPrice=c),"input-value":e.maxPrice,"p-type":"Max","default-min-price":e.minPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,dirction:e.dirction,"pool-info":e.poolInfo,loading:e.loading,"int-price":e.initPirce,"current-price-tab":e.currentPriceTab,onOnInput:e.changeMaxPrice,onAddValue:e.changeMaxPrice,onDelValue:e.changeMaxPrice},null,8,["value","input-value","default-min-price","from-coin","to-coin","dirction","pool-info","loading","int-price","current-price-tab","onOnInput","onAddValue","onDelValue"])]))])])}const Ho=Z(He,[["render",Ze],["__scopeId","data-v-e3859dff"]]),xe=Y({components:{TokenWarning:Pe},props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinSymbol:{type:String,default:""},balance:{type:Number,default:null},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},importPage:{type:String,default:""},address:{type:String,default:""}},setup(e,t){const{t:r,locale:f}=Ce(),g=x(),s=T(()=>g),n=T(()=>new y(Number(e.balance)).div(2)),b=Te($e,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function c(){this.$emit("onSelect")}const N=v=>{const m=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(u==null?void 0:u.value)&&(u==null?void 0:u.value)}})?).*$`);v.target.value=v.target.value.replace(m,"$1")},$=je(),j=T(()=>$),R=ae(),i=T(()=>R),d=T(()=>i.value.tokensWarningObj);let p={};w(()=>i.value.RATES,v=>{v&&(console.log(v,"price====>"),p=v)},{immediate:!0});const o=T(()=>(console.log(e.inputValue,"==>props.inputValue"),console.log(e.coinName,"===>props.coinName"),Oe(Number(e.inputValue)*Number(p&&p[e.address]&&p[e.address].price),2))),l=T(()=>{var v,m,h;return console.log((v=i.value.tokensObj[e.address])==null?void 0:v.labels,"===> pool.value.tokensObj[props.address]?.labels"),i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((m=i.value.tokensObj[e.address])==null?void 0:m.labels)&&((h=i.value.tokensObj[e.address])==null?void 0:h.labels[0])}),u=T(()=>{var v;return i.value.tokensObj&&e.address&&i.value.tokensObj[e.address]&&((v=i.value.tokensObj[e.address])==null?void 0:v.decimals)}),M=T(()=>{var v,m,h,k;return e.coinIcon||((m=(v=i==null?void 0:i.value)==null?void 0:v.tokensObj[e.address])==null?void 0:m.logo_url)||((k=(h=i==null?void 0:i.value)==null?void 0:h.tokensObj[e.address])==null?void 0:k.logoURI)||""}),P=T(()=>i.value.tokensObj),C=T(()=>s.value.theme);return{route:te(),theme:C,currentIcon:M,tokensObj:P,pool:i,halfBalance:n,coinLabels:l,t:r,addCommom:ne,store:s,wallet:j,indicator:b,inputChange:N,importIcon:ye,selectCoin:c,amountPirce:o,coinDecimals:u,formatNumber:ke,tokensWarningObj:d,checkNullObj:le}}});const eo=e=>(pe("data-v-20cd6bb7"),e=e(),ge(),e),oo={class:"card"},no={class:"top"},to={key:1,class:"input-div"},io={key:0},ao={class:"loading-token"},lo={key:1},ro={key:0},so=eo(()=>a("use",{"xlink:href":"#icon-icon_on"},null,-1)),uo=[so],co={class:"bottom"},mo={key:0,class:"amount-price"},fo={key:1},vo={class:"top"},po={class:"right"},go={class:"balance"};function bo(e,t,r,f,g,s){const n=de,b=we,c=Ae,N=Pe,$=me,j=ve,R=Ie("image");return _(),A("div",oo,[a("div",no,[e.inputDisabled?(_(),A("div",to,[e.inputValue?(_(),A("span",io,I(e.inputValue),1)):(_(),J(b,{key:1,indicator:e.indicator},null,8,["indicator"]))])):(_(),J(n,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.inputValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:t[0]||(t[0]=i=>e.$emit("onInput",i.target.value)),onFocus:t[1]||(t[1]=i=>e.$emit("onFocus"))},null,8,["value","disabled","onChange"])),a("div",{class:G(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"?"left-opcity":""].join("")]),onClick:t[2]||(t[2]=i=>e.pool.isTokenLoading?"":e.selectCoin())},[a("div",ao,[e.pool.isTokenLoading?(_(),J(c,{key:0,active:e.active,size:"small",paragraph:!1},null,8,["active"])):e.address?Ne((_(),A("img",lo,null,512)),[[R,e.currentIcon]]):z("",!0),D(N,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),D($,{loading:e.pool.isTokenLoading,class:"loading-token-skeleton",active:"",paragraph:!1},{default:X(()=>[a("div",null,[a("p",null,I(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(_(),A("p",ro,I(e.coinLabels),1)):z("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(_(),A("svg",{key:0,class:G(["icon",e.pool.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},uo,2)):z("",!0)],2)]),a("div",co,[e.inputValue&&e.amountPirce!="--"?(_(),A("div",mo," $"+I(("formatNumber"in e?e.formatNumber:ee(ke))(e.amountPirce)),1)):(_(),A("div",fo)),a("div",vo,[a("div",po,[K(I(e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),a("span",go,I(e.wallet.connected?("addCommom"in e?e.addCommom:ee(ne))(e.balance,e.coinDecimals):"0"),1),e.havemax&&e.wallet.connected?(_(),J(j,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:ee(ne))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[3]||(t[3]=i=>e.$emit("onHalf"))},{default:X(()=>[K(I("Half"))]),_:1},8,["disabled"])):z("",!0),e.havemax&&e.wallet.connected?(_(),J(j,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:ee(ne))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[4]||(t[4]=i=>e.$emit("onMax"))},{default:X(()=>[K(I(e.$t("button.max")),1)]),_:1},8,["disabled"])):z("",!0)])])])])}const Jo=Z(xe,[["render",bo],["__scopeId","data-v-20cd6bb7"]]),ko=Y({props:{fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},fixedFromCoin:{type:Boolean,defalut:!0},isInputTotalAmount:{type:Boolean,default:!1},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},createPoolInfo:{type:Object,default:()=>({})},currentPrice:{type:Number,default:0},currentPriceReverse:{type:Number,default:0},currentPriceTab:{type:String,default:""}},setup(e){const t=ae(),r=T(()=>t),f=x(),g=T(()=>f),s=te(),n=T(()=>{let i=null;if(console.log(s.name,"91==>"),s.name=="liquidity-creat-pool")i=e.createPoolInfo;else for(const d in r.value.poolsObj){const p=r.value.poolsObj[d];p.address==s.query.poolAddress&&(console.log(p,"p===>"),i=p)}return i}),b=T(()=>g.value.chainName?be(g.value.chainName):{}),c=T(()=>g.value.slippage),N=S(),$=S(),j=async()=>{var re;if(!e.minPrice&&!e.maxPrice)return;const{TickUtil:i,TickMath:d,getNearestTickByTick:p}=b.value,o=n.value.token_a.decimals,l=n.value.token_b.decimals;let u,M,P,C,O,v,m,h=1,k=1;const L=n.value.current_tick_index;console.log(L,"==>currentTickIndex");let q=r.value.poolPriceConfigObj&&r.value.poolPriceConfigObj[n.value.address]&&r.value.poolPriceConfigObj[n.value.address].recommend_ranges||{};if(n.value.token_a.address.toLowerCase()===e.fromCoin.address.toLowerCase()&&n.value.token_b.address.toLowerCase()===e.toCoin.address.toLowerCase()?m=!0:m=!1,console.log(m,"===>directs178"),e.minPrice==="0"&&e.maxPrice==="∞")P=i.getMinIndex(n.value.tickSpacing),C=i.getMaxIndex(n.value.tickSpacing);else if(e.currentPriceTab=="custom"||(re=s==null?void 0:s.query)!=null&&re.action){m?(u=Number(e.minPrice),M=Number(e.maxPrice)):(u=new y(1).div(e.maxPrice).toString(),M=new y(1).div(e.minPrice).toString()),console.log(u,M,"min===>");try{O=d.priceToTickIndex(new y(u),o,l)}catch{O=-443636}try{v=d.priceToTickIndex(new y(M),o,l)}catch{v=443636}u==0&&(O=-443636),P=p(O,Number(n.value.tickSpacing)),C=p(v,Number(n.value.tickSpacing)),console.log(P,C,"===>tick_upper")}else P=q&&q[e.currentPriceTab]&&q[e.currentPriceTab].lower,C=q&&q[e.currentPriceTab]&&q[e.currentPriceTab].upper;if(e.maxPrice==="∞"||L>=P&&L<=C){let Q;if(e.fixedFromCoin){const ie=new y(e.fromCoinAmount||1).mul(Math.pow(10,e.fromCoin.decimals)).toString();Q=new oe(ie)}else{const ie=new y(e.toCoinAmount||1).mul(Math.pow(10,e.toCoin.decimals)).toString();Q=new oe(ie)}const{tokenMaxA:V,tokenMaxB:E}=await b.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:n.value.token_a,tokenB:n.value.token_b,lowerTick:P,upperTick:C,coinAmount:Q,iscoinA:m?e.fixedFromCoin:!e.fixedFromCoin,roundUp:!0,slippage:Number(c.value)/100,curSqrtPrice:new oe(n.value.current_sqrt_price)});console.log(V,E,"===>tokenMaxA, tokenMaxB"),m?e.fixedFromCoin?(k=Number(E)>0?E:"",h=Number(V)>0?V:""):(h=Number(V)>0?V:"",k=Number(E)>0?E:""):(e.fixedFromCoin,k=V,h=E)}else L>C?m?(k=1,h=0):(h=1,k=0):L<P&&(m?(k=0,h=1):(k=1,h=0));const U=h?Number(h):0,W=k?Number(k):0;console.log(U,W,"amountA===>amountB");const H=new y(W).add(new y(m?new y(U*e.currentPrice):new y(U*e.currentPriceReverse)));console.log(H,"===>totalAmount");const B=F(new y(U).mul(new y(m?e.currentPrice:e.currentPriceReverse)).div(H).mul(100).toNumber().toFixed(2),2),Se=F(new y(W).div(H).mul(100).toNumber().toFixed(2),2);N.value=B,$.value=Se,console.log(N.value,$.value,u,M,"====>336")},R=()=>{var L,q,U,W,H;if(!e.minPrice&&!e.maxPrice)return;const{TickUtil:i,TickMath:d,getNearestTickByTick:p}=b.value,o=(L=n.value)==null?void 0:L.token_a.decimals,l=(q=n.value)==null?void 0:q.token_b.decimals;let u,M,P,C,O,v,m;const h=n.value.current_tick_index;console.log(h,"==>currentTickIndex");let k=r.value.poolPriceConfigObj&&r.value.poolPriceConfigObj[n.value.address]&&r.value.poolPriceConfigObj[n.value.address].recommend_ranges||{};if(((U=n.value)==null?void 0:U.token_a.address.toLowerCase())===e.fromCoin.address.toLowerCase()&&((W=n.value)==null?void 0:W.token_b.address.toLowerCase())===e.toCoin.address.toLowerCase()?m=!0:m=!1,console.log(m,"===>directs178"),e.minPrice==="0"&&e.maxPrice==="∞")P=i.getMinIndex(n.value.tickSpacing),C=i.getMaxIndex(n.value.tickSpacing);else if(e.currentPriceTab=="custom"||(H=s==null?void 0:s.query)!=null&&H.action){m?(u=Number(e.minPrice),M=Number(e.maxPrice)):(u=new y(1).div(e.maxPrice).toString(),M=new y(1).div(e.minPrice).toString()),console.log(u,M,"min===>");try{O=d.priceToTickIndex(new y(u),o,l)}catch{O=-443636}try{v=d.priceToTickIndex(new y(M),o,l)}catch{v=443636}u==0&&(O=-443636),P=p(O,Number(n.value.tickSpacing)),C=p(v,Number(n.value.tickSpacing)),console.log(P,C,"===>tick_upper")}else P=k&&k[e.currentPriceTab]&&k[e.currentPriceTab].lower,C=k&&k[e.currentPriceTab]&&k[e.currentPriceTab].upper;try{const B=b.value.calculateDepositRatioFixTokenA(P,C,new oe(n.value.current_sqrt_price));console.log(B.ratioB.toNumber(),B.ratioA.toNumber(),"ratio===>"),console.log(m,"===>directs"),n.value.needReverse?m?(N.value=F(B.ratioB.mul(100).toNumber().toFixed(2),2),$.value=F(B.ratioA.mul(100).toNumber().toFixed(2),2)):(N.value=F(B.ratioA.mul(100).toNumber().toFixed(2),2),$.value=F(B.ratioB.mul(100).toNumber().toFixed(2),2)):(N.value=F(B.ratioA.mul(100).toNumber().toFixed(2),2),$.value=F(B.ratioB.mul(100).toNumber().toFixed(2),2))}catch(B){console.log(B,"###calculateDepositRatioFixTokenA error")}};return w(()=>[n.value,e.minPrice,e.maxPrice,e.fromCoinAmount,e.toCoinAmount,e.isInputTotalAmount],([i,d,p])=>{console.log("0421####ratio###watch###poolInfo###",i),console.log("0421####ratio###watch###minPrice###",d),console.log("0421####ratio###watch###maxPrice###",p),e.isInputTotalAmount?R():d&&p&&i&&!le(i)&&(d!=="0"||p!=="0")?(j(),console.log("getRatio")):(console.log("0421####ratio###watch###clear###"),N.value="",$.value="")},{immediate:!0,deep:!0}),{fromCoinRatio:N,toCoinRatio:$}}});const yo={class:"deposit-ratio"},Po=a("div",{class:"deposit-ratio-text"},[a("span",null,"Deposit Ratio"),a("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-tips1"})])],-1),ho={class:"deposit-ratio-content"},_o={class:"coin-ratio"},So={class:"coin-a-ratio"},Co={class:"coin-b-ratio"},To={class:"ratio-progress"};function $o(e,t,r,f,g,s){var n,b;return _(),A("div",yo,[Po,a("div",ho,[a("div",_o,[a("div",So,[a("span",null,I((n=e.fromCoin)==null?void 0:n.symbol),1),K(" "+I(e.fromCoinRatio)+"% ",1)]),a("div",Co,[a("span",null,I((b=e.toCoin)==null?void 0:b.symbol),1),K(" "+I(e.toCoinRatio)+"% ",1)])]),a("div",To,[a("div",{class:"from-percent",style:se({width:e.fromCoinRatio+"%"})},null,4),a("div",{class:"to-percent",style:se({width:e.toCoinRatio+"%"})},null,4)])])])}const Go=Z(ko,[["render",$o]]),Io=Y({props:{poolInfo:{type:Object,default:()=>({})}},setup(e,t){const r=S(!1),f=S(null),g=S(0);let s=S(!1);const n=S(20),b=ae(),c=x(),N=S(!1);fe(()=>{}),Me(()=>{clearInterval(f.value)});const $=()=>{s.value=!1,f.value=setInterval(()=>{var o;N.value||g.value<n.value&&(g.value+=1,g.value===n.value&&((o=e==null?void 0:e.poolInfo)!=null&&o.poolAddress&&b.updateCurrentPools(e.poolInfo.poolAddress,c.chainName),g.value=0))},1e3)},j=T(()=>c.slippage),R=()=>{t.emit("clearAll")},i=()=>{s.value=!0,g.value=0,t.emit("clickRefresh"),setTimeout(()=>{s.value=!1,$()},1e3)};w(()=>e.poolInfo,o=>{o&&!f.value&&$()},{immediate:!0});const d=Be(),p=te();return console.log(p,"route"),{refresh:s,clickRefresh:i,isShowSwapSetting:r,countdown:g,autoRefreshTime:n,slippage:j,clearAll:R,checkNullObj:le,router:d,route:p}}});const _e=e=>(pe("data-v-0c0f6800"),e=e(),ge(),e),No={class:"title"},wo=_e(()=>a("div",{class:"left"},[a("span",null,"Deposit Amounts")],-1)),Ao=_e(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),Mo={class:"deposit-progress"};function Bo(e,t,r,f,g,s){const n=Re,b=Le;return _(),A("div",No,[wo,e.route.name!=="liquidity-creat-pool"?(_(),A("div",{key:0,class:G(["right title-right deposit-setting",e.poolInfo?"havePoolInfo":"noPoolInfo"])},[a("div",{class:"slippage-icon",onClick:t[0]||(t[0]=c=>e.isShowSwapSetting=!0)},[Ao,a("span",null,I(e.slippage)+"%",1)]),a("div",Mo,[D(n,{loading:e.refresh,"auto-refresh-time":e.autoRefreshTime,countdown:e.countdown,onClickRefresh:e.clickRefresh},null,8,["loading","auto-refresh-time","countdown","onClickRefresh"])])],2)):z("",!0),e.isShowSwapSetting?(_(),J(b,{key:1,onOnClose:t[1]||(t[1]=c=>e.isShowSwapSetting=!1)})):z("",!0)])}const Ko=Z(Io,[["render",Bo],["__scopeId","data-v-0c0f6800"]]);export{Ko as _,Go as a,Jo as b,Ho as c};
