import{_ as K}from"./token-warning.f13c4a59.js";import{u as X,a as v,d as Y}from"./pool.a88d0648.js";import{a as Z,a1 as x,y as oo,l as h,m as eo,r as no,e as to,Q as so,s as lo,o as W,c as io,w as y,h as e,t as c,i as m,v as s,j as g,f as H,u as Q,x as J,B as ao,p as ro,k as uo}from"./entry.a156a04a.js";import{i as z}from"./import-icon.de3e6c66.js";import{u as mo}from"./sha256.4699b2b5.js";const co=Z({components:{Modal:x},props:{poolInfo:{type:Object,default:()=>({})},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},totalAmount:{type:String,default:""},shareOfPool:{type:String,default:""},minimumReceivedLP:{type:String,default:""},isOnlyA:{type:Boolean,default:!1},isOnlyB:{type:Boolean,default:!1}},setup(o,r){const{t:b}=oo(),C=h(()=>{var n,t,d;return((n=o==null?void 0:o.poolInfo)==null?void 0:n.needReverse)||((d=(t=o==null?void 0:o.poolInfo)==null?void 0:t.poolInfo)==null?void 0:d.needReverse)}),I=X(),k=h(()=>I),i=mo(),p=h(()=>i),_=n=>{var t;return(n==null?void 0:n.logoURI)||(n==null?void 0:n.logo_url)||((t=k.value.tokensObj[n==null?void 0:n.address])==null?void 0:t.logo_url)||(p.value.theme==="default"?z("/image/coins/unknown.png"):z("/image/coins/sui-unknown.png"))},l=eo(),a=no(!1),u=()=>{r.emit("toAdd")};return console.log(o,"props451"),{needReverse:C,getCoinIcon:_,addCommom:v,t:b,route:l,checked:a,decimalUi:Y,clickSubmit:u}}});const G=o=>(ro("data-v-aa72c95e"),o=o(),uo(),o),po=G(()=>e("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),_o={class:"modal-content"},fo={class:"pool-info"},vo={class:"left"},ho={alt:""},yo={alt:""},go={class:"pool-name"},bo={class:"right"},Co={class:"coin-info"},Io={key:0,class:"from-coin-info"},ko={class:"left"},$o={class:"coin-amount"},So={class:"coin-symbol"},Ro={class:"right"},wo={key:1,class:"to-coin-info"},Ao={class:"left"},Oo={class:"coin-amount"},Bo={class:"coin-symbol"},Po={class:"right"},Lo={key:0,class:"to-swap-logo"},Uo={class:"add-info"},jo={class:"total-amount"},qo=G(()=>e("span",null,"Total Amount",-1)),To={class:"total-amount"},Do=G(()=>e("span",null,"Share of Pool",-1)),Mo={class:"total-amount"},No=G(()=>e("span",null,"Minimum Received LP",-1));function Fo(o,r,b,C,I,k){const i=K,p=ao,_=so("Modal"),l=lo("image");return W(),io(_,{width:"440px",visible:!0,footer:null,title:"Add Liquidity",onCancel:r[0]||(r[0]=a=>o.$emit("onClose"))},{closeIcon:y(()=>[po]),default:y(()=>{var a,u,n,t,d,$,S,R,w,A,O,B,P,L,U,j,q,T,D,M,N,F,V,E;return[e("div",_o,[e("div",fo,[e("div",vo,[e("div",null,[c(e("img",ho,null,512),[[l,o.needReverse?(t=(n=o.poolInfo)==null?void 0:n.token_b)==null?void 0:t.logo_url:(u=(a=o.poolInfo)==null?void 0:a.token_a)==null?void 0:u.logo_url]]),m(i,{address:o.needReverse?(R=(S=o.poolInfo)==null?void 0:S.token_b)==null?void 0:R.address:($=(d=o.poolInfo)==null?void 0:d.token_a)==null?void 0:$.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),e("div",null,[c(e("img",yo,null,512),[[l,o.needReverse?(B=(O=o.poolInfo)==null?void 0:O.token_a)==null?void 0:B.logo_url:(A=(w=o.poolInfo)==null?void 0:w.token_b)==null?void 0:A.logo_url]]),m(i,{address:o.needReverse?(j=(U=o.poolInfo)==null?void 0:U.token_a)==null?void 0:j.address:(L=(P=o.poolInfo)==null?void 0:P.token_b)==null?void 0:L.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),e("div",go,[e("span",null,s(o.needReverse?(M=(D=o.poolInfo)==null?void 0:D.token_b)==null?void 0:M.symbol:(T=(q=o.poolInfo)==null?void 0:q.token_a)==null?void 0:T.symbol),1),g(" - "),e("span",null,s(o.needReverse?(E=(V=o.poolInfo)==null?void 0:V.token_a)==null?void 0:E.symbol:(F=(N=o.poolInfo)==null?void 0:N.token_b)==null?void 0:F.symbol),1)])]),e("div",bo,[g(" Fee tier "),e("span",null,s(o.poolInfo&&o.poolInfo.fee*100)+"%",1)])]),e("div",Co,[o.isOnlyA||!o.isOnlyA&&!o.isOnlyB?(W(),H("div",Io,[e("div",ko,[e("div",$o,s(("addCommom"in o?o.addCommom:Q(v))(o.fromCoinAmount)||0),1),e("div",So,s(o.fromCoin&&o.fromCoin.symbol),1)]),e("div",Ro,[c(e("img",null,null,512),[[l,o.fromCoin&&o.fromCoin.logoURI||o.getCoinIcon(o.fromCoin)]]),m(i,{address:o.fromCoin&&o.fromCoin.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])])])):J("",!0),o.isOnlyB||!o.isOnlyA&&!o.isOnlyB?(W(),H("div",wo,[e("div",Ao,[e("div",Oo,s(("addCommom"in o?o.addCommom:Q(v))(o.toCoinAmount)||0),1),e("div",Bo,s(o.toCoin&&o.toCoin.symbol),1)]),e("div",Po,[c(e("img",null,null,512),[[l,o.toCoin&&o.toCoin.logoURI||o.getCoinIcon(o.toCoin)]]),m(i,{address:o.toCoin&&o.toCoin.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),!o.isOnlyA&&!o.isOnlyB?(W(),H("div",Lo)):J("",!0)])):J("",!0)]),e("div",Uo,[e("div",jo,[qo,e("span",null,"$"+s(("addCommom"in o?o.addCommom:Q(v))(o.totalAmount,2)),1)]),e("div",To,[Do,e("span",null,s(o.shareOfPool)+"%",1)]),e("div",Mo,[No,e("span",null,s(("addCommom"in o?o.addCommom:Q(v))(o.minimumReceivedLP))+" "+s(o.fromCoin.symbol)+"-"+s(o.toCoin.symbol),1)])])]),m(p,{class:"big-btn liquidity-btn",onClick:o.clickSubmit},{default:y(()=>[g(" Add Liquidity ")]),_:1},8,["onClick"])]}),_:1})}const pe=to(co,[["render",Fo],["__scopeId","data-v-aa72c95e"]]),Vo=Z({components:{Modal:x},props:{title:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},fromCoinAmount:{type:String,default:"1245566.008946"},toCoinAmount:{type:String,default:"11111111111"},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},isIncrease:{type:Boolean,default:!1},fixedFromCoin:{type:Boolean,default:!0},currentPriceTab:{type:String,default:""},currentPrice:{type:String,default:""},currentPriceReverse:{type:String,default:""},showFromCoinLock:{type:Boolean,default:!1},showToCoinLock:{type:Boolean,default:!1},currentDirect:{type:Boolean,default:!0},positionTotalAmount:{type:Number,default:0},tickLower:{type:Number,default:0},tickUpper:{type:Number,default:0},isCreate:{type:Boolean,default:!1}},setup(o,r){const{t:b}=oo(),C=h(()=>{var n,t,d;return((n=o==null?void 0:o.poolInfo)==null?void 0:n.needReverse)||((d=(t=o==null?void 0:o.poolInfo)==null?void 0:t.poolInfo)==null?void 0:d.needReverse)}),I=X(),k=h(()=>I),i=mo(),p=h(()=>i),_=n=>{var t;return(n==null?void 0:n.logoURI)||(n==null?void 0:n.logo_url)||((t=k.value.tokensObj[n==null?void 0:n.address])==null?void 0:t.logo_url)||(p.value.theme==="default"?z("/image/coins/unknown.png"):z("/image/coins/sui-unknown.png"))},l=eo(),a=no(!1),u=()=>{r.emit("toAdd")};return console.log(o,"props451"),{needReverse:C,getCoinIcon:_,addCommom:v,t:b,route:l,checked:a,decimalUi:Y,clickSubmit:u}}});const f=o=>(ro("data-v-a27577b5"),o=o(),uo(),o),Eo=f(()=>e("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Wo={class:"modal-content"},Qo={class:"pool-info"},zo={class:"left"},Go={alt:""},Ho={alt:""},Jo={class:"pool-name"},Ko={class:"right"},Xo=f(()=>e("div",{class:"lp-info"},[e("div",{class:"lp-num"},[e("p",null,"1,126,122.123456"),e("span",null,"USDT-USDC LP")]),e("div",{class:"lp-bg"})],-1)),Yo={class:"est-receive"},Zo=f(()=>e("div",{class:"est-receive-title"},"Estimated Receive",-1)),xo={class:"token-a"},oe=f(()=>e("div",null,"0.941824",-1)),ee={alt:""},ne=f(()=>e("span",null,"USDT",-1)),te={class:"token-a"},se=f(()=>e("div",null,"0.941824",-1)),le={alt:""},ie=f(()=>e("span",null,"USDC",-1));function ae(o,r,b,C,I,k){const i=K,p=ao,_=so("Modal"),l=lo("image");return W(),io(_,{width:"440px",visible:!0,footer:null,title:"Add Liquidity",onCancel:r[0]||(r[0]=a=>o.$emit("onClose"))},{closeIcon:y(()=>[Eo]),default:y(()=>{var a,u,n,t,d,$,S,R,w,A,O,B,P,L,U,j,q,T,D,M,N,F,V,E;return[e("div",Wo,[e("div",Qo,[e("div",zo,[e("div",null,[c(e("img",Go,null,512),[[l,o.needReverse?(t=(n=o.poolInfo)==null?void 0:n.token_b)==null?void 0:t.logo_url:(u=(a=o.poolInfo)==null?void 0:a.token_a)==null?void 0:u.logo_url]]),m(i,{address:o.needReverse?(R=(S=o.poolInfo)==null?void 0:S.token_b)==null?void 0:R.address:($=(d=o.poolInfo)==null?void 0:d.token_a)==null?void 0:$.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),e("div",null,[c(e("img",Ho,null,512),[[l,o.needReverse?(B=(O=o.poolInfo)==null?void 0:O.token_a)==null?void 0:B.logo_url:(A=(w=o.poolInfo)==null?void 0:w.token_b)==null?void 0:A.logo_url]]),m(i,{address:o.needReverse?(j=(U=o.poolInfo)==null?void 0:U.token_a)==null?void 0:j.address:(L=(P=o.poolInfo)==null?void 0:P.token_b)==null?void 0:L.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),e("div",Jo,[e("span",null,s(o.needReverse?(M=(D=o.poolInfo)==null?void 0:D.token_b)==null?void 0:M.symbol:(T=(q=o.poolInfo)==null?void 0:q.token_a)==null?void 0:T.symbol),1),g(" - "),e("span",null,s(o.needReverse?(E=(V=o.poolInfo)==null?void 0:V.token_a)==null?void 0:E.symbol:(F=(N=o.poolInfo)==null?void 0:N.token_b)==null?void 0:F.symbol),1)])]),e("div",Ko,[g(" Fee tier "),e("span",null,s(o.poolInfo&&o.poolInfo.fee*100)+"%",1)])]),Xo,e("div",Yo,[Zo,e("div",xo,[oe,e("div",null,[c(e("img",ee,null,512),[[l,"1"]]),ne])]),e("div",te,[se,e("div",null,[c(e("img",le,null,512),[[l,"1"]]),ie])])])]),m(p,{class:"big-btn liquidity-btn",onClick:o.clickSubmit},{default:y(()=>[g(s(o.isIncrease?"Increase Liquidity":o.title==o.$t("button.addLiquidity")?"Add Liquidity":"Create and Add Liquidity"),1)]),_:1},8,["onClick"])]}),_:1})}const _e=to(Vo,[["render",ae],["__scopeId","data-v-a27577b5"]]);export{pe as _,_e as a};
