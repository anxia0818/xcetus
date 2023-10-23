import{_ as V}from"./token-warning.7651177d.js";import{u as F,l as H,a as g,h as P,c as M}from"./pool.1338590d.js";import{a as U,z as J,l,I as G,L as K,q as Q,m as X,e as Y,s as Z,o as a,f as d,h as i,c,v as r,C as B,t as x,x as p,i as L,w,u as f,j as I,J as ee,S as oe,a5 as ne,P as ae,B as te,p as se,k as le}from"./entry.af38826c.js";/* empty css              *//* empty css              *//* empty css              */import{i as ie}from"./import-icon.de3e6c66.js";import{u as de,a as re}from"./sha256.caba64f7.js";import{D as T}from"./decimal.0e8aa3f1.js";const ue=U({components:{TokenWarning:V},props:{inputValue:{type:String,default:""},inputDisabled:{type:Boolean,default:!1},coinName:{type:String,default:""},coinSymbol:{type:String,default:""},balance:{type:Number,default:null},coinIcon:{type:String,default:""},havemax:{type:Boolean,default:!0},havehalf:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!0},isTotal:{type:Boolean,default:!1},importPage:{type:String,default:""},address:{type:String,default:""},amountLeabl:{type:String,default:""}},setup(e,t){const{t:N,locale:D}=J(),O=de(),k=l(()=>O),h=l(()=>new T(Number(e.balance)).div(2)),y=G(K,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function $(){this.$emit("onSelect")}const S=n=>{const s=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${(u==null?void 0:u.value)&&(u==null?void 0:u.value)}})?).*$`);n.target.value=n.target.value.replace(s,"$1")},C=re(),v=l(()=>C),j=F(),o=l(()=>j),A=l(()=>o.value.tokensWarningObj);let b={};Q(()=>o.value.RATES,n=>{n&&(console.log(n,"price====>"),b=n)},{immediate:!0});const W=l(()=>{console.log(e.inputValue,"==>props.inputValue"),console.log(e.coinName,"===>props.coinName");const n=b&&b[e.address]&&b[e.address].price||0,s=new T(e.inputValue||0).mul(n).toNumber();return n<=0?0:s>0&&s<.01?"<$0.01":H(s,2)}),z=l(()=>{var n,s,m;return console.log((n=o.value.tokensObj[e.address])==null?void 0:n.labels,"===> pool.value.tokensObj[props.address]?.labels"),o.value.tokensObj&&e.address&&o.value.tokensObj[e.address]&&((s=o.value.tokensObj[e.address])==null?void 0:s.labels)&&((m=o.value.tokensObj[e.address])==null?void 0:m.labels[0])}),u=l(()=>{var n;return o.value.tokensObj&&e.address&&o.value.tokensObj[e.address]&&((n=o.value.tokensObj[e.address])==null?void 0:n.decimals)}),R=l(()=>{var n,s,m,_;return e.coinIcon||((s=(n=o==null?void 0:o.value)==null?void 0:n.tokensObj[e.address])==null?void 0:s.logo_url)||((_=(m=o==null?void 0:o.value)==null?void 0:m.tokensObj[e.address])==null?void 0:_.logoURI)||""}),E=l(()=>o.value.tokensObj),q=l(()=>k.value.theme);return{route:X(),theme:q,currentIcon:R,tokensObj:E,pool:o,halfBalance:h,coinLabels:z,t:N,addCommom:g,store:k,wallet:v,indicator:y,inputChange:S,importIcon:ie,selectCoin:$,amountPirce:W,coinDecimals:u,formatNumber:P,tokensWarningObj:A,checkNullObj:M}}});const me=e=>(se("data-v-25000035"),e=e(),le(),e),ce={class:"card"},pe={class:"top"},ve={key:1,class:"input-div"},be={key:0},fe={class:"loading-token"},ge={key:1},ke={key:0},he=me(()=>i("use",{"xlink:href":"#icon-icon_on"},null,-1)),ye=[he],$e={class:"bottom"},Se={key:0,class:"amount-price"},Ce={key:1},je={class:"top"},we={class:"right"},Ie={class:"balance"};function Ne(e,t,N,D,O,k){const h=ee,y=oe,$=ne,S=V,C=ae,v=te,j=Z("image");return a(),d("div",ce,[i("div",pe,[e.inputDisabled?(a(),d("div",ve,[e.inputValue?(a(),d("span",be,r(e.inputValue),1)):(a(),c(y,{key:1,indicator:e.indicator},null,8,["indicator"]))])):(a(),c(h,{key:0,value:e.inputValue=="InsufficientLiquidity"?"":e.inputValue,placeholder:"0.0",disabled:e.inputDisabled,onChange:e.inputChange,onInput:t[0]||(t[0]=o=>e.$emit("onInput",o.target.value)),onFocus:t[1]||(t[1]=o=>e.$emit("onFocus"))},null,8,["value","disabled","onChange"])),i("div",{class:B(["left",[e.hasArrow?"":"nohands",e.route.name=="swap"?"left-opcity":""].join("")]),onClick:t[2]||(t[2]=o=>e.hasArrow&&!e.pool.isTokenLoading?e.selectCoin():"")},[i("div",fe,[e.pool.isTokenLoading?(a(),c($,{key:0,active:e.active,size:"small",paragraph:!1},null,8,["active"])):e.address?x((a(),d("img",ge,null,512)),[[j,e.currentIcon]]):p("",!0),L(S,{address:e.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),L(C,{loading:e.pool.isTokenLoading,class:"loading-token-skeleton",active:"",paragraph:!1},{default:w(()=>[i("div",null,[i("p",null,r(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1),e.coinLabels?(a(),d("p",ke,r(e.coinLabels),1)):p("",!0)])]),_:1},8,["loading"])]),e.hasArrow?(a(),d("svg",{key:0,class:B(["icon",e.pool.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},ye,2)):p("",!0)],2)]),i("div",$e,[e.inputValue&&e.amountPirce!="--"&&(Number(e.amountPirce)>0||e.amountPirce=="<$0.01")?(a(),d("div",Se,r(e.amountPirce!=="<$0.01"?`$${("formatNumber"in e?e.formatNumber:f(P))(e.amountPirce)}`:`${e.amountPirce}`),1)):(a(),d("div",Ce)),i("div",je,[i("div",we,[I(r(e.amountLeabl?e.amountLeabl:e.isTotal?e.$t("common.total"):e.$t("common.balance"))+" ",1),i("span",Ie,r(e.wallet.connected?("addCommom"in e?e.addCommom:f(g))(e.balance,e.coinDecimals):"0"),1),e.havehalf&&e.wallet.connected?(a(),c(v,{key:0,disabled:!e.coinName||("addCommom"in e?e.addCommom:f(g))(e.halfBalance,e.coinDecimals)==0,class:"max-btn",onClick:t[3]||(t[3]=o=>e.$emit("onHalf"))},{default:w(()=>[I(r("Half"))]),_:1},8,["disabled"])):p("",!0),e.havemax&&e.wallet.connected?(a(),c(v,{key:1,disabled:!e.coinName||("addCommom"in e?e.addCommom:f(g))(e.balance,e.coinDecimals)==0,class:"max-btn",onClick:t[4]||(t[4]=o=>e.$emit("onMax"))},{default:w(()=>[I(r(e.$t("button.max")),1)]),_:1},8,["disabled"])):p("",!0)])])])])}const ze=Y(ue,[["render",Ne],["__scopeId","data-v-25000035"]]);export{ze as _};
