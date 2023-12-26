import{u as H}from"./sha256.b069b7e0.js";import{a as K,l as y,e as G,o as f,f as h,r as P,m as Z,q as O,h as i,v as $,i as U,w as V,A as E,M as ae,x as F,I as le,H as re,B as se,j as z,y as ge,C as ke,L as be,s as _e,c as W,t as ye,u as Q,S as he,a5 as Pe,p as ue,k as ce,O as ie,P as Se,K as $e,b as Ce}from"./entry.a6cbae18.js";import{_ as Te}from"./img-lock_2x.a28135f4.js";import{_ as Ie}from"./lock.fcd9d1b3.js";/* empty css              *//* empty css              */import{e as de,d as ee,u as ne,a as X,h as me,c as oe,o as we,b as x}from"./pool.7cff6715.js";import{D as I}from"./decimal.0bdeb344.js";import{i as Y}from"./import-icon.de3e6c66.js";import{_ as fe}from"./token-warning.a90516eb.js";/* empty css              */import{u as Ne}from"./wallet.aced3adf.js";/* empty css              */import{_ as Me}from"./swap-setting.5fe83c08.js";const Ae=K({setup(){const e=H();return{storeIndex:y(()=>e)}}});const Oe={class:"create-pool-lock"},Be={key:0,src:Te,alt:""},je={key:1,src:Ie,alt:""};function Re(e,o,s,p,g,u){return f(),h("div",Oe,[e.storeIndex.theme=="default"?(f(),h("img",Be)):(f(),h("img",je))])}const Qn=G(Ae,[["render",Re],["__scopeId","data-v-fb497971"]]),Le=K({props:{inputValue:{type:String,default:""},pType:{type:String,required:!0},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},dirction:{type:Boolean,default:!0},defaultMaxPrice:{type:String,default:""},defaultMinPrice:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},loading:{type:Boolean,default:!1},intPrice:{type:String,default:""}},emits:["onInput"],setup(e,o){const s=P(""),p=P("");let g=P(""),u=P("");const t=Z(),k=H(),m=y(()=>k),w=y(()=>m.value.chainName?de(m.value.chainName):{}),N=()=>{var n,r,b,M;if(!(Number.isNaN(s.value)||Number(s.value)!==0&&!s.value||!e.poolInfo.tickSpacing))try{const{TickUtil:B,TickMath:A,getNearestTickByTick:c}=w.value,v=A.priceToTickIndex(new I(s.value.toString()),(n=d.value.token_a)==null?void 0:n.decimals,(r=d.value.token_b)==null?void 0:r.decimals),_=c(v,Number(d.value.tickSpacing),!0);let C;if(C=A.tickIndexToPrice(_+Number(d.value.tickSpacing),(b=d.value.token_a)==null?void 0:b.decimals,(M=d.value.token_b)==null?void 0:M.decimals),e.pType=="Min"&&Number(C.toString())>Number(u.value.toString()))return;const R=C.toString();o.emit("onInput",R)}catch{console.log(""),o.emit("onInput","")}},L=()=>{var n,r,b,M;try{if(Number.isNaN(s.value)||!s.value||!e.poolInfo.tickSpacing)return;const{TickUtil:B,TickMath:A,getNearestTickByTick:c}=w.value,v=A.priceToTickIndex(new I(s.value.toString()),(n=d.value.token_a)==null?void 0:n.decimals,(r=d.value.token_b)==null?void 0:r.decimals),_=c(v,Number(d.value.tickSpacing),!0);let C;C=A.tickIndexToPrice(_-Number(d.value.tickSpacing),(b=d.value.token_a)==null?void 0:b.decimals,(M=d.value.token_b)==null?void 0:M.decimals);const R=C.toString();if(e.pType=="Max"&&Number(C)<Number(g.value))return;o.emit("onInput",R)}catch{o.emit("onInput","")}},S=n=>{let r=n.toString().replace(/[^\d.]/g,"");const b=/^\d+(\.\d+)?$/;r.split(".").length>2&&!b.exec(r)&&(r=r.substr(0,r.length-1)),p.value=String(r),console.log(r,"v===>")},a=n=>{if(n&&n!=="0"&&n!=="∞"){s.value=n;const b=n.toString().split(".")[1];p.value=n!=="0"&&n!=="∞"&&b&&b.length>6?ee(n.toString(),6):n.toString()}else(n=="0"||n=="∞"||t.query.action)&&(p.value=n)},T=n=>{var c,v,_,C;const{TickUtil:r,TickMath:b,getNearestTickByTick:M}=w.value;console.log("1113###newLiquiditySetPrice###onBlur###event###",n);const B=n.target.value;console.log("1113###newLiquiditySetPrice###onBlur###value###",B);let A;if(B==="0"){A=-443636,o.emit("onInput","0");return}else if(B!=="0"&&B){const R=b.priceToTickIndex(new I(B),(c=d.value.token_a)==null?void 0:c.decimals,(v=d.value.token_b)==null?void 0:v.decimals);console.log("1113###newLiquiditySetPrice###onBlur###t###",R),A=M(Number(R),Number(d.value.tickSpacing),!0),console.log("1113###newLiquiditySetPrice###onBlur###tick###",A);const j=b.tickIndexToPrice(new I(A),(_=d.value.token_a)==null?void 0:_.decimals,(C=d.value.token_b)==null?void 0:C.decimals);console.log("1113###newLiquiditySetPrice###onBlur###price###",j.toString()),a(j.toString()),o.emit("onInput",j.toString())}else o.emit("onInput")};O(()=>e.defaultMinPrice,(n,r)=>{n!==r&&(console.log(e.defaultMinPrice,"props.defaultMinPrice===>"),g.value=e.defaultMinPrice,console.log(g.value,"props.minPrice.value===>"))},{immediate:!0}),O(()=>e.defaultMaxPrice,(n,r)=>{n!==r&&(u.value=e.defaultMaxPrice)},{immediate:!0}),O(()=>[e.inputValue,t.query.action],([n])=>{console.log("1113###newLiquiditySetPrice###watch###newValue###",n),a(n)},{immediate:!0});const d=P({});O(()=>e.poolInfo,(n,r)=>{n&&(d.value=n)},{immediate:!0});const l=P("");return O(()=>e.currentPriceTab,n=>{l.value=n,console.log(e.currentPriceTab,"===>props.currentPriceTab")},{immediate:!0}),console.log(e,"props=======>"),{addPrice:N,minusPrice:L,oValue:p,changeValue:S,isDisabled:l,route:t,onBlur:T}}});const qe={class:"set-price-item"},De={class:"title"},Fe={class:"input-box"},Ue={key:0,class:"minus-btn"},Ve={key:1,class:"plus-btn"};function Ee(e,o,s,p,g,u){const t=le,k=ae;return f(),h("div",qe,[i("div",De,$(e.pType=="Max"?e.$t("common.maxPrice"):e.pType=="Min"?e.$t("common.minPrice"):""),1),U(k,{loading:e.loading,active:"",paragraph:!1},{default:V(()=>[i("div",Fe,[e.currentPriceTab!=="full range"?(f(),h("a",Ue,[i("div",{class:E(!e.fromCoin&&!e.toCoin||e.poolInfo&&!e.poolInfo.tickSpacing&&!e.$route.query.action?"reductionDis":"reduction"),onClick:o[0]||(o[0]=(...m)=>e.minusPrice&&e.minusPrice(...m))},"-",2)])):F("",!0),U(t,{id:"pValu",value:e.oValue,"onUpdate:value":o[1]||(o[1]=m=>e.oValue=m),disabled:e.route.query.action&&!e.intPrice,autocomplete:"off",placeholder:"0",onChange:o[2]||(o[2]=m=>e.changeValue(m.target.value)),onBlur:o[3]||(o[3]=m=>e.onBlur(m))},null,8,["value","disabled"]),e.currentPriceTab!=="full range"?(f(),h("a",Ve,[i("div",{class:E(!e.fromCoin&&!e.toCoin||e.poolInfo&&!e.poolInfo.tickSpacing&&!e.$route.query.action?"addDis":"add"),onClick:o[4]||(o[4]=(...m)=>e.addPrice&&e.addPrice(...m))},"+",2)])):F("",!0)])]),_:1},8,["loading"]),i("p",{class:E(["per-text",!e.toCoin&&!e.fromCoin?"per-text-disabled":""])},$(e.toCoin&&e.toCoin.symbol)+" per "+$(e.fromCoin&&e.fromCoin.symbol),3)])}const pe=G(Le,[["render",Ee],["__scopeId","data-v-2cc9c58e"]]),We=K({components:{NewLiquiditySetPrice:pe},props:{min:{type:String,default:""},max:{type:String,default:""},defaultMinPrice:{type:String,default:""},defaultMaxPrice:{type:String,default:""},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},dirction:{type:Boolean,default:!0},invalidPriceRange:{type:Boolean,default:!1},poolInfo:{type:Object,default:()=>({})},currentPriceTab:{type:String,default:""},loading:{type:Boolean,default:!1},intPrice:{type:String,default:""}},setup(e,o){let s=P(""),p=P(""),g=P(),u=P(!1),t=P(!1);const k=P({}),m=H(),w=y(()=>m);re(()=>{s.value=e.min,p.value=e.max}),O(()=>e.currentPriceTab,(l,n)=>{l!==n&&(g.value=e.currentPriceTab)},{immediate:!0}),O(()=>e.min,(l,n)=>{l!==n&&(s.value=l,console.log(e.min,"===> props.min"))}),O(()=>e.max,(l,n)=>{l!==n&&(p.value=l)}),O(()=>e.poolInfo,(l,n)=>{l&&(k.value=l)},{immediate:!0});const N=P("");O(()=>e.intPrice,l=>{console.log(e.intPrice,"===>props.intPrice"),N.value=l},{immediate:!0,deep:!0});const L=l=>{console.log(l,"val===>123"),s.value=l,o.emit("onChangeMinPrice",l)},S=l=>{console.error("1113###new-liquidity-set-price###changeMaxPrice###val###",l),p.value=l,o.emit("onChangeMaxPrice",l)};O(u,(l,n)=>{l!==n&&o.emit("onChangeFullRange",l)});const a=()=>{s.value=e.defaultMinPrice,p.value=e.defaultMaxPrice,t.value=!1,u.value=!1},T=()=>{t.value=!1,s.value="0",p.value="∞"};return O(u,(l,n)=>{l!==n&&o.emit("onChangeFullRange",l)}),{store:w,changeMinPrice:L,changeMaxPrice:S,importIcon:Y,resetPrice:a,changeShowUnderStand:()=>{u.value=!u.value,u.value?t.value=!0:a(),t.value||(s.value=e.defaultMinPrice,p.value=e.defaultMaxPrice)},showUnderStand:t,minPrice:s,maxPrice:p,understand:T,isRadio:u,initPirce:N}}});const ze={class:"set-price"},He={class:"card-container"},Ke={key:0,class:"card"},Ge={key:1,class:"understand"},Je={class:"left"},Qe={class:"right"};function Xe(e,o,s,p,g,u){const t=pe,k=se;return f(),h("div",ze,[i("div",He,[e.showUnderStand?(f(),h("div",Ge,[i("div",Je,[i("p",null,$(e.$t("common.lowerEfficiency")),1),i("p",null,$(e.$t("common.lowerEfficiencyTips")),1)]),i("div",Qe,[U(k,{onClick:e.understand},{default:V(()=>[z($(e.$t("common.understand")),1)]),_:1},8,["onClick"])])])):(f(),h("div",Ke,[U(t,{value:e.minPrice,"onUpdate:value":o[0]||(o[0]=m=>e.minPrice=m),"input-value":e.minPrice,"p-type":"Min","default-max-price":e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,dirction:e.dirction,"pool-info":e.poolInfo,loading:e.loading,"current-price-tab":e.currentPriceTab,"int-price":e.initPirce,onOnInput:e.changeMinPrice,onAddValue:e.changeMinPrice,onDelValue:e.changeMinPrice},null,8,["value","input-value","default-max-price","from-coin","to-coin","dirction","pool-info","loading","current-price-tab","int-price","onOnInput","onAddValue","onDelValue"]),U(t,{value:e.maxPrice,"onUpdate:value":o[1]||(o[1]=m=>e.maxPrice=m),"input-value":e.maxPrice,"p-type":"Max","default-min-price":e.minPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,dirction:e.dirction,"pool-info":e.poolInfo,loading:e.loading,"int-price":e.initPirce,"current-price-tab":e.currentPriceTab,onOnInput:e.changeMaxPrice,onAddValue:e.changeMaxPrice,onDelValue:e.changeMaxPrice},null,8,["value","input-value","default-min-price","from-coin","to-coin","dirction","pool-info","loading","int-price","current-price-tab","onOnInput","onAddValue","onDelValue"])]))])])}const Xn=G(We,[["render",Xe],["__scopeId","data-v-d95990c1"]]),Ye=K({components:{TokenWarning:fe},props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinSymbol:{type:String,default:""},balance:{type:Number,default:null},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},importPage:{type:String,default:""},address:{type:String,default:""}},setup(e,o){const{t:s,locale:p}=ge(),g=H(),u=y(()=>g),t=y(()=>new I(Number(e.balance)).div(2)),k=ke(be,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function m(){this.$emit("onSelect")}const w=c=>{const v=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(r==null?void 0:r.value)&&(r==null?void 0:r.value)}})?).*$`);c.target.value=c.target.value.replace(v,"$1")},N=Ne(),L=y(()=>N),S=ne(),a=y(()=>S),T=y(()=>a.value.tokensWarningObj);let d={};O(()=>a.value.RATES,c=>{c&&(console.log(c,"price====>"),d=c)},{immediate:!0});const l=y(()=>(console.log(e.inputValue,"==>props.inputValue"),console.log(e.coinName,"===>props.coinName"),we(Number(e.inputValue)*Number(d&&d[e.address]&&d[e.address].price),2))),n=y(()=>{var c,v,_;return console.log((c=a.value.tokensObj[e.address])==null?void 0:c.labels,"===> pool.value.tokensObj[props.address]?.labels"),a.value.tokensObj&&e.address&&a.value.tokensObj[e.address]&&((v=a.value.tokensObj[e.address])==null?void 0:v.labels)&&((_=a.value.tokensObj[e.address])==null?void 0:_.labels[0])}),r=y(()=>{var c;return a.value.tokensObj&&e.address&&a.value.tokensObj[e.address]&&((c=a.value.tokensObj[e.address])==null?void 0:c.decimals)}),b=y(()=>{var c,v,_,C;return e.coinIcon||((v=(c=a==null?void 0:a.value)==null?void 0:c.tokensObj[e.address])==null?void 0:v.logo_url)||((C=(_=a==null?void 0:a.value)==null?void 0:_.tokensObj[e.address])==null?void 0:C.logoURI)||(u.value.theme==="default"?Y("/image/coins/unknown.png"):Y("/image/coins/sui-unknown.png"))}),M=y(()=>a.value.tokensObj),B=y(()=>u.value.theme);return{route:Z(),theme:B,currentIcon:b,tokensObj:M,pool:a,halfBalance:t,coinLabels:n,t:s,addCommom:X,store:u,wallet:L,indicator:k,inputChange:w,importIcon:Y,selectCoin:m,amountPirce:l,coinDecimals:r,formatNumber:me,tokensWarningObj:T,checkNullObj:oe}}});const Ze=e=>(ue("data-v-3a378845"),e=e(),ce(),e),xe={class:"card"},en={class:"top"},nn={key:1,class:"input-div"},on={key:0},tn={class:"loading-token"},an={key:1},ln={key:0},rn=Ze(()=>i("use",{"xlink:href":"#icon-icon_on"},null,-1)),sn=[rn],un={class:"bottom"},cn={key:0,class:"amount-price"},dn={key:1},mn={class:"top"},fn={class:"right"},pn={class:"balance"};function vn(e,o,s,p,g,u){const t=le,k=he,m=Pe,w=fe,N=ae,L=se,S=_e("image");return f(),h("div",xe,[i("div",en,[e.inputDisabled?(f(),h("div",nn,[e.inputValue?(f(),h("span",on,$(e.inputValue),1)):(f(),W(k,{key:1,indicator:e.indicator},null,8,["indicator"]))])):(f(),W(t,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.inputValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:o[0]||(o[0]=a=>e.$emit("onInput",a.target.value)),onFocus:o[1]||(o[1]=a=>e.$emit("onFocus"))},null,8,["value","disabled","onChange"])),i("div",{class:E(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"?"left-opcity":""].join("")]),onClick:o[2]||(o[2]=a=>e.pool.isTokenLoading?"":e.selectCoin())},[i("div",tn,[e.pool.isTokenLoading?(f(),W(m,{key:0,active:e.active,size:"small",paragraph:!1},null,8,["active"])):e.address?ye((f(),h("img",an,null,512)),[[S,e.currentIcon]]):F("",!0),U(w,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),U(N,{loading:e.pool.isTokenLoading,class:"loading-token-skeleton",active:"",paragraph:!1},{default:V(()=>[i("div",null,[i("p",null,$(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(f(),h("p",ln,$(e.coinLabels),1)):F("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(f(),h("svg",{key:0,class:E(["icon",e.pool.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},sn,2)):F("",!0)],2)]),i("div",un,[e.inputValue&&e.amountPirce!="--"?(f(),h("div",cn," $"+$(("formatNumber"in e?e.formatNumber:Q(me))(e.amountPirce)),1)):(f(),h("div",dn)),i("div",mn,[i("div",fn,[z($(e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),i("span",pn,$(e.wallet.connected?("addCommom"in e?e.addCommom:Q(X))(e.balance,e.coinDecimals):"0"),1),e.havemax&&e.wallet.connected?(f(),W(L,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:Q(X))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:o[3]||(o[3]=a=>e.$emit("onHalf"))},{default:V(()=>[z($("Half"))]),_:1},8,["disabled"])):F("",!0),e.havemax&&e.wallet.connected?(f(),W(L,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:Q(X))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:o[4]||(o[4]=a=>e.$emit("onMax"))},{default:V(()=>[z($(e.$t("button.max")),1)]),_:1},8,["disabled"])):F("",!0)])])])])}const Yn=G(Ye,[["render",vn],["__scopeId","data-v-3a378845"]]),gn=K({props:{fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},fixedFromCoin:{type:Boolean,defalut:!0},isInputTotalAmount:{type:Boolean,default:!1},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},createPoolInfo:{type:Object,default:()=>({})},currentPrice:{type:Number,default:0},currentPriceReverse:{type:Number,default:0},currentPriceTab:{type:String,default:""}},setup(e){const o=ne(),s=y(()=>o),p=H(),g=y(()=>p),u=Z(),t=y(()=>{let S=null;if(console.log(u.name,"91==>"),u.name=="liquidity-create")S=e.createPoolInfo;else for(const a in s.value.poolsObj){const T=s.value.poolsObj[a];T.address==u.query.poolAddress&&(console.log(T,"p===>"),S=T)}return S}),k=y(()=>g.value.chainName?de(g.value.chainName):{}),m=y(()=>g.value.slippage),w=P(),N=P(),L=async()=>{if(!e.minPrice&&!e.maxPrice)return;const{TickUtil:S,TickMath:a,getNearestTickByTick:T}=k.value,d=t.value.token_a.decimals,l=t.value.token_b.decimals;let n,r,b,M,B,A,c,v=1,_=1;const C=t.value.current_tick_index;console.log(C,"==>currentTickIndex");let R=s.value.poolPriceConfigObj&&s.value.poolPriceConfigObj[t.value.address]&&s.value.poolPriceConfigObj[t.value.address].recommend_ranges||{};if(t.value.token_a.address.toLowerCase()===e.fromCoin.address.toLowerCase()&&t.value.token_b.address.toLowerCase()===e.toCoin.address.toLowerCase()?c=!0:c=!1,console.log(e.minPrice==="0"&&e.maxPrice==="∞","#### getRatio 171"),e.minPrice==="0"&&e.maxPrice==="∞")b=S.getMinIndex(t.value.tickSpacing),M=S.getMaxIndex(t.value.tickSpacing);else if(e.currentPriceTab=="custom"){c?(n=e.minPrice,r=e.maxPrice):(n=e.maxPrice!=="∞"?new I(1).div(e.maxPrice).toString():1/0,r=new I(1).div(e.minPrice).toString()),console.log(n,r,"min===>");try{B=a.priceToTickIndex(new I(n),d,l)}catch{B=-443636}try{A=a.priceToTickIndex(new I(r),d,l)}catch{A=443636}n==0&&(B=-443636),b=T(B,Number(t.value.tickSpacing),!0),M=T(A,Number(t.value.tickSpacing),!0),console.log(b,M,"===>tick_upper")}else b=R&&R[e.currentPriceTab]&&R[e.currentPriceTab].lower,M=R&&R[e.currentPriceTab]&&R[e.currentPriceTab].upper;if(e.maxPrice==="∞"||C>=b&&C<=M){let j;if(e.fixedFromCoin){const J=new I(Number(e.fromCoinAmount)==0?1:e.fromCoinAmount).mul(Math.pow(10,e.fromCoin.decimals)).toString();j=new x(J)}else{const J=new I(Number(e.toCoinAmount)==0?1:e.toCoinAmount).mul(Math.pow(10,e.toCoin.decimals)).toString();j=new x(J)}const{tokenMaxA:q,tokenMaxB:D}=await k.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:t.value.token_a,tokenB:t.value.token_b,lowerTick:b,upperTick:M,coinAmount:j,iscoinA:c?e.fixedFromCoin:!e.fixedFromCoin,roundUp:!0,slippage:Number(m.value)/100,curSqrtPrice:new x(t.value.current_sqrt_price)});console.log(q,D,"===>tokenMaxA, tokenMaxB"),c?e.fixedFromCoin?(_=Number(D)>0?D:"",v=Number(q)>0?q:""):(v=Number(q)>0?q:"",_=Number(D)>0?D:""):(e.fixedFromCoin,_=q,v=D)}else C>M?c?(_=1,v=0):(v=1,_=0):C<b&&(c?(_=0,v=1):(_=1,v=0));if(e.minPrice=="0"&&e.maxPrice=="∞")w.value=50,N.value=50;else{const j=v?Number(v):0,q=_?Number(_):0;console.log(j,q,"amountA===>amountB");const D=new I(q).add(new I(c?new I(j*e.currentPrice):new I(j*e.currentPriceReverse)));console.log(D,"===>totalAmount");const J=ee(new I(j).mul(new I(c?e.currentPrice:e.currentPriceReverse)).div(D).mul(100).toNumber().toFixed(2),2),ve=ee(new I(q).div(D).mul(100).toNumber().toFixed(2),2);w.value=J,N.value=ve,console.log(w.value,N.value,n,r,"====>336")}};return O(()=>[t.value,e.minPrice,e.maxPrice,e.fromCoinAmount,e.toCoinAmount,e.isInputTotalAmount],([S,a,T,d,l])=>{console.log("0421####ratio###watch###poolInfo###",S),console.log("0421####ratio###watch###minPrice###",a),console.log("0421####ratio###watch###maxPrice###",T),a&&T&&S&&!oe(S)&&(a!=="0"||T!=="0")?(L(),console.log("getRatio 440")):(console.log("0421####ratio###watch###clear###"),w.value="",N.value=""),console.log("getRatioFromTotalAmount 440")},{immediate:!0,deep:!0}),{fromCoinRatio:w,toCoinRatio:N}}});const kn={class:"deposit-ratio"},bn={class:"deposit-ratio-text"},_n=i("span",null,"Deposit Ratio",-1),yn=i("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[i("use",{"xlink:href":"#icon-icon-tips1"})],-1),hn={class:"deposit-ratio-content"},Pn={class:"coin-ratio"},Sn={class:"coin-a-ratio"},$n={class:"coin-b-ratio"},Cn={class:"ratio-progress"};function Tn(e,o,s,p,g,u){var k,m;const t=Se;return f(),h("div",kn,[i("div",bn,[_n,U(t,{placement:"bottom","arrow-point-at-center":""},{title:V(()=>[i("span",null,$(e.$t("newAdd.depositRatioTips")),1)]),default:V(()=>[yn]),_:1})]),i("div",hn,[i("div",Pn,[i("div",Sn,[i("span",null,$((k=e.fromCoin)==null?void 0:k.symbol),1),z(" "+$(e.fromCoinRatio)+"% ",1)]),i("div",$n,[i("span",null,$((m=e.toCoin)==null?void 0:m.symbol),1),z(" "+$(e.toCoinRatio)+"% ",1)])]),i("div",Cn,[i("div",{class:"from-percent",style:ie({width:e.fromCoinRatio+"%"})},null,4),i("div",{class:"to-percent",style:ie({width:e.toCoinRatio+"%"})},null,4)])])])}const Zn=G(gn,[["render",Tn]]),In=K({props:{poolInfo:{type:Object,default:()=>({})}},setup(e,o){const s=P(!1),p=P(null),g=P(0);let u=P(!1);const t=P(20),k=ne(),m=H(),w=P(!1);re(()=>{}),$e(()=>{clearInterval(p.value)});const N=()=>{u.value=!1,console.log("执行了吗72"),p.value=setInterval(()=>{var l;w.value||g.value<t.value&&(g.value+=1,g.value===t.value&&(u.value=!0,(l=e==null?void 0:e.poolInfo)!=null&&l.poolAddress&&(console.log("更新##"),k.updateCurrentPools(e.poolInfo.poolAddress,m.chainName)),g.value=0,setTimeout(()=>{u.value=!1},1e3)))},1e3)},L=y(()=>m.slippage),S=()=>{o.emit("clearAll")},a=()=>{u.value||(u.value=!0,g.value=0,o.emit("clickRefresh"),setTimeout(()=>{u.value=!1,N()},1e3))};O(()=>e.poolInfo,l=>{l&&!p.value&&N()},{immediate:!0});const T=Ce(),d=Z();return console.log(d,"route"),{refresh:u,clickRefresh:a,isShowSwapSetting:s,countdown:g,autoRefreshTime:t,slippage:L,clearAll:S,checkNullObj:oe,router:T,route:d}}});const te=e=>(ue("data-v-a59bdc76"),e=e(),ce(),e),wn={class:"title"},Nn=te(()=>i("div",{class:"left"},[i("span",null,"Deposit Amounts")],-1)),Mn=te(()=>i("svg",{class:"icon","aria-hidden":"true"},[i("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),An={key:0,class:"deposit-progress"},On=te(()=>i("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Bn=[On];function jn(e,o,s,p,g,u){const t=Me;return f(),h("div",wn,[Nn,i("div",{class:E(["right title-right deposit-setting",e.poolInfo?"havePoolInfo":"noPoolInfo"])},[i("div",{class:"slippage-icon",onClick:o[0]||(o[0]=k=>e.isShowSwapSetting=!0)},[Mn,i("span",null,$(e.slippage)+"%",1)]),e.route.name!=="liquidity-create"?(f(),h("div",An,[(f(),h("svg",{"aria-hidden":"true",class:E(e.refresh?"refresh-icon ":"refresh-icon"),onClick:o[1]||(o[1]=(...k)=>e.clickRefresh&&e.clickRefresh(...k))},Bn,2))])):F("",!0)],2),e.isShowSwapSetting?(f(),W(t,{key:0,onOnClose:o[2]||(o[2]=k=>e.isShowSwapSetting=!1)})):F("",!0)])}const xn=G(In,[["render",jn],["__scopeId","data-v-a59bdc76"]]);export{xn as _,Zn as a,Qn as b,Yn as c,Xn as d};
