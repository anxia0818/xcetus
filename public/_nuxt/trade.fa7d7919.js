import{a as ke,r as v,b as y,w as X,e as w,f as O,o as c,h as d,i as e,j as b,t as _,k as h,l as k,m as B,p as $,q as x,s as P,v as le,x as q,y as ee,z as E,M as ce,A as te,c as W,B as de,C as re,F as I,D as U,E as F,G as ie,H as K,u as ye,I as fe,J as Ce,K as be}from"./entry.5f528174.js";import{c as ue,D as j,u as T,i as A,f as $e,d as ae,t as H,a as pe}from"./index.179be405.js";import{priceValue as _e}from"./data.67699b25.js";async function Se(t,n){var r,u,o;const a=t==="0x2::sui::SUI"?"0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI":t,i=`${ue.Sui.api}/v2/sui/coin/kline?coin_address=${a}&interval=day&market=${n}`;try{const s=await $fetch(i);return console.log("0621###getprice###res###",s),{price:((u=(r=s==null?void 0:s.data)==null?void 0:r.list)==null?void 0:u.reverse())||[],daily_rate:(o=s==null?void 0:s.data)==null?void 0:o.daily_rate.replace("%","")}}catch{return{price:[],daily_rate:""}}}async function Ie(t){try{const{prices:n}=await $fetch(`https://api.coingecko.com/api/v3/coins/${t}/market_chart?vs_currency=usd&id=${t}&days=7&interval=daily`,{headers:{Connection:"keep-alive",Accept:"*/*"}}),i=(await $fetch(`https://api.coingecko.com/api/v3/coins/markets?ids=${t}&vs_currency=usd&price_change_percentage=24h`,{headers:{Connection:"keep-alive",Accept:"*/*"}}))[0].price_change_percentage_24h,r=[];return n.forEach(u=>{r.push({price:new j(u[1]).toString(),timestamp:u[0]})}),{price:r,daily_rate:i}}catch{return{price:[],daily_rate:""}}}const Ue={props:{coin:{type:Object,default:()=>({})},refresh:{type:Boolean,default:!1},id:{type:String,default:""},market:{type:String,default:""}},setup(t,n){const{$echarts:a}=ke();let i=null,r;const u=v(!0),o=T(),s=y(()=>o),l=y(()=>s.value.chainName),m=y(()=>ue[l.value]),p=(S,M,L)=>{r={xAxis:{type:"category",boundaryGap:!1,show:!1,data:M},yAxis:{type:"value",show:!1,min:function(g){return g.min-g.min*.1},max:function(g){return g.max+g.max*.1}},grid:{top:1,right:1,bottom:1,left:1},tooltip:{trigger:"axis",borderWidth:0,padding:0,backgroundColor:"transparent",axisPointer:{lineStyle:{color:s.value.chainName=="Aptos"?"#68FFD8":"#76C8FF"}},formatter:function(g){return`<div class="chart-tip">
              <div>${g&&g[0]&&g[0].name}</div>
              <div>$${ae(g&&g[0]&&g[0].value,4)}</div>
            </chart-tip>`}},color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:s.value.chainName=="Aptos"?"#0C4535":"#2E546D"},{offset:1,color:s.value.chainName=="Aptos"?"#151817":"#1B1B1B"}]},series:[{data:S,type:"line",showSymbol:!1,areaStyle:{},lineStyle:{color:s.value.chainName=="Aptos"?"#68FFD8":"#76C8FF",width:2,type:"solid"}}]},r&&i.clear(),r&&i.setOption(r,!0),i.resize(),u.value=!1},C=v("3.95"),D=v("0.99998"),R=async S=>{var ne,oe;const M=[],L=[],{price:g,daily_rate:se}=l.value==="Aptos"?await Ie(S):await Se(S,t.market);l.value=="Sui",C.value=se,D.value=g&&g.length>1&&g[g.length-1].price,l.value==="Aptos"?g.forEach(V=>{M.push(V.price);const Y=H(Number(V.timestamp),"MD"),G=H(Number(V.timestamp),"HM");L.push(Y+" "+G)}):g.forEach(V=>{M.push(V.price);const Y=H(new j(V.timestamp).mul(1e3).toNumber(),"MD"),G=H(new j(V.timestamp).mul(1e3).toNumber(),"HM");L.push(Y+" "+G)});let Ae=document.getElementById(`main${(ne=t.coin)==null?void 0:ne.name}`);i=a.init(Ae),p(M,L,(oe=t.coin)==null?void 0:oe.name)};X(()=>t.id,(S,M)=>{console.log(S,M,"===>oldValue"),console.log(!u.value,"!isFirst.value"),S&&(C.value="",D.value="",setTimeout(()=>{R(S)},1e3))},{immediate:!0});const f=v(""),J=v(""),z=v(""),Z=v("");X(()=>t.refresh,S=>{S&&R(t.id)});const N=y(()=>s.value.theme);return console.log(t.coin.address=="0x2::sui::SUI","0x2::sui::SUI"),{theme:N,store:o,importIcon:A,fixD:$e,config:m,price_rate_24h:C,nowPrice:D,coinName:f,coinLabels:J,coinSymbol:z,address:Z,decimalUi:ae}}},we="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAk1BMVEUAAADn2v/m2//r2//v4//n2v/55P/n2v/o3P//+P/m2v/n2f/n2v/n2v/n2v/n2v/n2v/o2//p2//n3f/o3v/n2f/n2v/n2v/n2v/n2v/n2//o2v/q3f/r4f/u3f/n2v/o2v/n2//p3P/o3P/m2v/n2v/n2f/n2v/o2f/n2//r3f/t3P/n2v/m2v/o2v/r3v/m2f/tUDLHAAAAMHRSTlMAl5oyFNMJqSwFhvvr5d7Yr2FGNSD0zb2lkIltOhkOxoJoT0D48aJzWFYlHeB8Wief0nHAAAABSElEQVQ4y52Q53LCMBCEZWK5g0swBpveQknZ93+6rFxAHkSYyf6x9+67JqHLKxOZRzJJbWHStkCn0Fo8pG0XuvJv0dciBjVZb+dZeoxABb38MlbpXeucr5z2QwdUf8vX1h0ByLT9aAeCGlez4Ozw5zoE4nvFBJB0yymUhqp0B2DT5ec0O+YlWlUMJsCqAwJA8jNV1W4RAnuvqepeYwWsOR/AkfM9ji8YjYBTC3wCZyEq1jvKnoCQP8X90j0wF2IGuM2jArjUE8sWAPAmxACwavtDf623XJsBtoqa2zcm4MI8Ag7iNZkBeAcVc8cUOPhPgJjP4I/UzkYgKtWxpQqaAGfMvvUATIUBaOQHAEb2M2CZcj4OnrhJasDYXYVQ9Vpe2LJ/BeWyf4/oAXlC25e9uI0IqswRJulX/BOwXgG2JPCCIPA3sXmM/QK1PTc8LGCPoAAAAABJRU5ErkJggg==",Be="data:image/png;base64,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";const ve=t=>(q("data-v-c862bd1a"),t=t(),ee(),t),De={class:"token-info"},Me={class:"token-info-padding"},xe={class:"token-info-header"},Ee={class:"left"},Pe=["onerror"],Te=ve(()=>e("div",{class:"name"},_("USDC"),-1)),Re={class:"desc"},Le={class:"right"},Ve={class:"price-info"},Je={key:0,src:we,alt:""},We={key:1,src:Be,alt:""},Oe={class:"token-info-footer"},Fe={class:"left"},Qe={class:"address"},ze={key:0,class:"pc-address"},Ze={key:1,class:"pc-address"},Ne={class:"h5-address"},He=ve(()=>e("use",{"xlink:href":"#icon-icon-copy1"},null,-1)),Xe=[He],Ke={class:"right"},Ye=["id"];function Ge(t,n,a,i,r,u){var l,m,p,C,D,R,f,J,z,Z,N,S,M,L,g;const o=le,s=O("image");return c(),d("div",De,[e("div",Me,[e("div",xe,[e("div",Ee,[b(e("img",{onerror:i.theme=="default"?i.importIcon("/image/coins/unknown.png"):i.importIcon("/image/coins/sui-unknown.png")},null,8,Pe),[[s,a.coin.logoURI||i.importIcon(`/image/coins/${a.coin&&((m=(l=a.coin)==null?void 0:l.symbol)==null?void 0:m.toLowerCase())}.png`)]]),e("div",null,[Te,e("div",Re,[e("span",null,_("USD Coin (Portal from Ethereum)")+" ",1)])])]),e("div",Le,[h(o,{placement:"top","arrow-point-at-center":""},{title:k(()=>[B(_(a.market==="pyth"?"Data source: Pyth Network":"Data source: CoinGecko"),1)]),default:k(()=>[e("div",Ve,[a.market==="pyth"?(c(),d("img",Je)):(c(),d("img",We)),e("span",null,"$"+_(i.nowPrice?Number(i.nowPrice)<1?i.decimalUi(i.nowPrice,4):i.fixD(i.nowPrice,2):"--"),1),i.price_rate_24h?(c(),d("i",{key:2,class:$(i.price_rate_24h>0?"up":i.price_rate_24h<0?"down":"up")},_(i.price_rate_24h>0?`+ ${i.fixD(i.price_rate_24h,2)}`:i.price_rate_24h<0?+`${i.fixD(i.price_rate_24h,2)}`:`+${i.fixD(i.price_rate_24h,2)}`)+"%",3)):x("",!0)])]),_:1})])]),e("div",Oe,[e("div",Fe,[e("div",Qe,[a.coin&&i.address!=="0x2::sui::SUI"?(c(),d("span",ze," 0x5d4b302506"+_(a.coin&&((C=(p=a.coin)==null?void 0:p.address)==null?void 0:C.substr(0,13)))+" ... "+_(a.coin&&((J=(D=a.coin)==null?void 0:D.address)==null?void 0:J.substr(((f=(R=a.coin)==null?void 0:R.address)==null?void 0:f.length)-13,13)))+"f::coin::COIN ",1)):(c(),d("span",Ze,_(a.coin&&a.coin.address),1)),e("span",Ne," 0x5d"+_(a.coin&&((Z=(z=a.coin)==null?void 0:z.address)==null?void 0:Z.substr(0,4)))+" ... "+_(a.coin&&((L=(N=a.coin)==null?void 0:N.address)==null?void 0:L.substr(((M=(S=a.coin)==null?void 0:S.address)==null?void 0:M.length)-4,4)))+"COIN ",1),(c(),d("svg",{class:"icon","aria-hidden":"true",onClick:n[0]||(n[0]=P(se=>i.store.copy(a.coin&&a.coin.address),["stop"]))},Xe))])]),e("div",Ke,[e("div",{id:`main${(g=a.coin)==null?void 0:g.name}`,class:"main"},null,8,Ye)])])])])}const je=w(Ue,[["render",Ge],["__scopeId","data-v-c862bd1a"]]);const qe=E({components:{Modal:ce},setup(){const t=T(),n=y(()=>t),a=s=>{var l;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((l=pools.value.tokensObj[s==null?void 0:s.address])==null?void 0:l.logo_url)||(n.value.theme==="default"?A("/image/coins/unknown.png"):A("/image/coins/sui-unknown.png"))},i=v({}),r=v({}),u=y(()=>null),o=y(()=>null);return{fromCoin:i,toCoin:r,formCoinMarket:u,toCoinMarket:o,getCoinIcon:a}}}),Q=t=>(q("data-v-f553a64c"),t=t(),ee(),t),et=Q(()=>e("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),tt={class:"market-details-conetnt"},st=Q(()=>e("div",{class:"min-size"},[e("div",{class:"left"},"Min Order Size"),e("div",{class:"right"},"0.001")],-1)),nt={class:"token-info-container"},ot={class:"token-info-title"},it=Q(()=>e("span",{class:"coingecko"},"Price Reference",-1)),at=Q(()=>e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-icon-information"})],-1)),lt=Q(()=>e("div",{class:"empty-box"},null,-1));function ct(t,n,a,i,r,u){const o=le,s=je,l=te("Modal");return c(),W(l,{width:"440px",visible:!0,footer:null,title:"SUI-USDC Market Details","mask-closable":!0,onCancel:n[0]||(n[0]=m=>t.$emit("onClose"))},{closeIcon:k(()=>[et]),default:k(()=>[e("div",tt,[st,e("div",nt,[e("div",ot,[it,h(o,{placement:"top","arrow-point-at-center":""},{title:k(()=>[B(" The following price is only an external reference from 3rd party data providers, which does not reflect actual data on Cetus. ")]),default:k(()=>[at]),_:1})]),h(s,{id:null,coin:t.fromCoin,market:t.formCoinMarket,refresh:!1},null,8,["coin","market"]),lt,h(s,{id:null,coin:t.toCoin,market:t.toCoinMarket,refresh:!1},null,8,["coin","market"])])])]),_:1})}const dt=w(qe,[["render",ct],["__scopeId","data-v-f553a64c"]]),rt=E({setup(){const t=v(!1),n=T(),a=y(()=>n),i=y(()=>a.value.theme),r=l=>(l==null?void 0:l.logoURI)||(l==null?void 0:l.logo_url)||(i.value==="default"?A("/image/coins/unknown.png"):A("/image/coins/sui-unknown.png")),u=v({symbol:"SUI - USDC",price:"9.87654",address:"1211111",priceChange:"0.08"}),o=v(!1),s=[{symbol:"SUI - WUSDCe",price:"9.87654",address:"1211111",priceChange:"0.08"},{symbol:"WUSDTe - WUSDCe",price:"9.87654",address:"1211111",priceChange:"-0.08"},{symbol:"WUSDTe - WUSDCe",price:"9.87654",address:"1211111",priceChange:"0.08"},{symbol:"WUSDTe - WUSDCe",price:"9.87654",address:"1211111",priceChange:"0.08"},{symbol:"WUSDTe - WUSDCe",price:"9.87654",address:"1211111",priceChange:"-0.08"},{symbol:"WUSDTe - WUSDCe",price:"9.87654",address:"1211111",priceChange:"-0.08"},{symbol:"WUSDTe - WUSDCe",price:"9.87654",address:"1211111",priceChange:"-0.08"}];return de(()=>{document.addEventListener("click",()=>{o.value=!1})}),re(()=>{document.removeEventListener("click",()=>{o.value=!1})}),{currentPool:u,isShowPoolList:o,poolList:s,isOpenMarketDetails:t,importIcon:A,getCoinIcon:r}}}),ut="data:image/png;base64,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";const pt={class:"pool-info-box-container"},_t={class:"token-info-item"},vt={class:"img-symbol"},ht={alt:""},mt={alt:""},gt=e("use",{"xlink:href":"#icon-icon_on"},null,-1),At=[gt],kt={key:0,class:"pool-list"},yt=["onClick"],ft={class:"img-symbol"},Ct={alt:""},bt={alt:""},$t={class:"price"},St={class:"price-change"},It=e("use",{"xlink:href":"#icon-icon_on"},null,-1),Ut=[It],wt=F('<div class="line"></div><div class="right"><div class="item"><div class="top">Price (USDC)</div><div class="bottom"> 0.56<span class="price-usd">$0.57</span></div></div><div class="item"><div class="top">24h Change</div><div class="bottom"><svg class="price-change-icon price-change-green-icon" aria-hidden="true"><use xlink:href="#icon-icon_on"></use></svg><span class="price-change-green">0.08%</span></div></div><div class="item"><div class="top">24h Volume (USDC)</div><div class="bottom"> 28,256.85 </div></div><div class="item pc-item"><div class="top"><span class="price-text">24h High</span><span class="price-high">0.581246</span></div><div class="bottom"><span class="price-text">24h Low</span><span class="price-low">0.547692</span></div></div><div class="item h5-item"><div class="top"><span class="price-text">24h High</span></div><div class="bottom"><span class="price-high">0.581246</span></div></div><div class="item h5-item"><div class="top"><span class="price-text">24h Low</span></div><div class="bottom"><span class="price-low">0.547692</span></div></div></div>',2),Bt=e("img",{src:ut,alt:""},null,-1),Dt=e("span",null,"Market Details",-1),Mt=[Bt,Dt];function xt(t,n,a,i,r,u){const o=dt,s=O("image");return c(),d("div",pt,[e("div",_t,[e("div",{class:"token-info",onClick:n[0]||(n[0]=P(l=>t.isShowPoolList=!t.isShowPoolList,["stop"]))},[e("div",vt,[b(e("img",ht,null,512),[[s,t.getCoinIcon({})]]),b(e("img",mt,null,512),[[s,t.getCoinIcon({})]]),e("span",null,_(t.currentPool.symbol),1)]),(c(),d("svg",{class:$(["icon select-icon",t.isShowPoolList?"deg-svg":""]),"aria-hidden":"true"},At,2)),t.isShowPoolList?(c(),d("div",kt,[(c(!0),d(I,null,U(t.poolList,l=>(c(),d("div",{key:l.address,class:"item",onClick:P(()=>{t.currentPool=l,t.isShowPoolList=!1},["stop"])},[e("div",ft,[b(e("img",Ct,null,512),[[s,t.getCoinIcon({})]]),b(e("img",bt,null,512),[[s,t.getCoinIcon({})]]),e("span",null,_(l.symbol),1)]),e("span",$t,_(l.price),1),e("div",St,[(c(),d("svg",{class:$(["price-change-icon price-change-green-icon",l.priceChange>0?"price-change-green-icon":"price-change-red-icon"]),"aria-hidden":"true"},Ut,2)),e("span",{class:$(l.priceChange>0?"price-change-green":"price-change-red")},_(l.priceChange<0?l.priceChange.split("-")[1]:l.priceChange),3)])],8,yt))),128))])):x("",!0)]),wt]),e("div",{class:"details",onClick:n[1]||(n[1]=P(l=>t.isOpenMarketDetails=!0,["stop"]))},Mt),t.isOpenMarketDetails?(c(),W(o,{key:0,onOnClose:n[2]||(n[2]=l=>t.isOpenMarketDetails=!1)})):x("",!0)])}const Et=w(rt,[["render",xt]]),Pt=E({setup(){const t=[{name:"buyMode",icon:"/img-dbk/icon_greenprice@2x.png"},{name:"defaultMode",icon:"/img-dbk/icon_greenredprice@2x.png"},{name:"sellMode",icon:"/img-dbk/icon_redprice@2x.png"}],n=[1e-4,.001,.01,.1],a=v(1e-4),i=v("defaultMode");return{modeList:t,tickSize:a,tickSizeList:n,currentMode:i,sellList:[{price:"0.5589",amt:"259.00",total:"424,918"},{price:"0.5588",amt:"259.00",total:"424,918"},{price:"0.5587",amt:"259.00",total:"424,918"},{price:"0.5586",amt:"259.00",total:"424,918"},{price:"0.5585",amt:"259.00",total:"424,918"},{price:"0.5584",amt:"259.00",total:"424,918"},{price:"0.5583",amt:"259.00",total:"424,918"},{price:"0.5582",amt:"259.00",total:"424,918"},{price:"0.5581",amt:"259.00",total:"424,918"},{price:"0.5580",amt:"259.00",total:"424,918"},{price:"0.5589",amt:"259.00",total:"424,918"},{price:"0.5589",amt:"259.00",total:"424,918"},{price:"0.5589",amt:"259.00",total:"424,918"},{price:"0.5589",amt:"259.00",total:"424,918"},{price:"0.5589",amt:"259.00",total:"424,918"}],buyList:[{price:"0.5589",amt:"259.00",total:"424,918"},{price:"0.5580",amt:"259.00",total:"424,918"},{price:"0.5581",amt:"259.00",total:"424,918"},{price:"0.5582",amt:"259.00",total:"424,918"},{price:"0.5583",amt:"259.00",total:"424,918"},{price:"0.5584",amt:"259.00",total:"424,918"},{price:"0.5585",amt:"259.00",total:"424,918"},{price:"0.5586",amt:"259.00",total:"424,918"},{price:"0.5587",amt:"259.00",total:"424,918"},{price:"0.5588",amt:"259.00",total:"424,918"},{price:"0.5589",amt:"259.00",total:"424,918"}],priceValue:_e}}});const Tt={class:"order-book"},Rt={class:"order-book-title-box"},Lt={class:"order-book-title"},Vt=e("span",{class:"order-book-text"},"Orderbook",-1),Jt={class:"mode-order"},Wt={class:"mode-btn-list"},Ot=["onClick"],Ft=["src"],Qt={class:"tick-size"},zt=e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-icon_arrow"})],-1),Zt={class:"tick-size-list-box"},Nt={class:"tick-size-list"},Ht=["onClick"],Xt={class:"sell-order"},Kt=e("div",{class:"sell-list-title"},[e("div",null,"Price (USDC)"),e("div",null,"Amt. (SUI)"),e("div",null,"Toatal (USDT)")],-1),Yt=["onClick"],Gt=e("div",{class:"market-price"},[e("div",null,[e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-icon_arrow"})]),e("span",null,"0.5283")]),e("div",null,"0.5%")],-1),jt=["onClick"];function qt(t,n,a,i,r,u){return c(),d("div",Tt,[e("div",Rt,[e("div",Lt,[Vt,e("div",Jt,[e("div",Wt,[(c(!0),d(I,null,U(t.modeList,o=>(c(),d("div",{key:o.name,class:$(["mode-btn-item",t.currentMode==o.name?"mode-btn-item-active":""]),onClick:s=>t.currentMode=o.name},[e("img",{src:o.icon,alt:""},null,8,Ft)],10,Ot))),128))]),e("div",Qt,[e("span",null,_(t.tickSize),1),zt,e("div",Zt,[e("div",Nt,[(c(!0),d(I,null,U(t.tickSizeList,o=>(c(),d("div",{key:o,class:"tick-size-item",onClick:s=>t.tickSize=o},_(o),9,Ht))),128))])])])])])]),e("div",Xt,[Kt,e("div",{class:"sell-list",style:ie(t.currentMode=="buyMode"?{height:0}:t.currentMode=="sellMode"?{height:"218px"}:{})},[(c(!0),d(I,null,U(t.sellList,(o,s)=>(c(),d("div",{key:s,class:"sell-list-item",onClick:l=>t.priceValue=o.price},[e("div",null,_(o.price),1),e("div",null,_(o.amt),1),e("div",null,_(o.total),1)],8,Yt))),128))],4)]),Gt,e("div",{class:"buy-list",style:ie(t.currentMode=="buyMode"?{height:"100%"}:t.currentMode=="sellMode"?{height:"0"}:{})},[(c(!0),d(I,null,U(t.buyList,(o,s)=>(c(),d("div",{key:s,class:"sell-list-item",onClick:l=>t.priceValue=o.price},[e("div",null,_(o.price),1),e("div",null,_(o.amt),1),e("div",null,_(o.total),1)],8,jt))),128))],4)])}const es=w(Pt,[["render",qt]]),ts=E({props:{inputValue:{type:String,default:""},title:{type:String,default:""},symbol:{type:String,default:""},tradeType:{type:String,default:""}},setup(){return{}}});const ss={class:"trade-input"},ns={class:"title"},os={class:"input-box"},is=["value","disabled"],as={class:"symbol"};function ls(t,n,a,i,r,u){return c(),d("div",ss,[e("div",ns,_(t.title),1),e("div",os,[e("input",{value:t.tradeType=="Market"&&t.title=="Price"?"Market":t.inputValue,disabled:t.tradeType=="Market"&&t.title=="Price"},null,8,is),e("div",as,_(t.symbol),1)])])}const cs=w(ts,[["render",ls],["__scopeId","data-v-02385e02"]]),ds=E({setup(){const t=v("Limit"),n=v("Buy"),a=v("");return{tradeType:t,orderType:n,priceValue:_e,amount:a}}});const rs={class:"trade-card"},us={class:"limit-market"},ps={class:"buy-sell"},_s=F('<div class="trade-info" data-v-398f7490><div class="trade-info-item" data-v-398f7490><div class="leabl" data-v-398f7490>Total</div><div class="value" data-v-398f7490><span data-v-398f7490>3.8325 USDC</span><span data-v-398f7490>$4.12</span></div></div><div class="trade-info-item" data-v-398f7490><div class="leabl" data-v-398f7490>Available</div><div class="value" data-v-398f7490><span data-v-398f7490>8.0031 USDC</span></div></div></div>',1);function vs(t,n,a,i,r,u){const o=cs,s=K;return c(),d("div",rs,[e("div",us,[e("div",{class:$(t.tradeType=="Limit"?"current-type":""),onClick:n[0]||(n[0]=l=>t.tradeType="Limit")},"Limit",2),e("div",{class:$(t.tradeType=="Market"?"current-type":""),onClick:n[1]||(n[1]=l=>t.tradeType="Market")},"Market",2)]),e("div",ps,[e("div",{class:$(["buy",t.orderType!=="Buy"?"buy-nor":""]),onClick:n[2]||(n[2]=l=>t.orderType="Buy")},"Buy",2),e("div",{class:$(["sell",t.orderType!=="Buy"?"sell-sel":""]),onClick:n[3]||(n[3]=l=>t.orderType="Sell")},"Sell",2)]),h(o,{"input-value":t.priceValue,"trade-type":t.tradeType,title:"Price",symbol:"USDC"},null,8,["input-value","trade-type"]),h(o,{"input-value":t.amount,"trade-type":t.tradeType,title:"Amount",symbol:"SUI"},null,8,["input-value","trade-type"]),_s,h(s,{class:"sub-btn"},{default:k(()=>[B("Place "+_(t.orderType)+" Order",1)]),_:1})])}const hs=w(ds,[["render",vs],["__scopeId","data-v-398f7490"]]);const ms=E({components:{Modal:ce},props:{token:{type:Object,default:()=>({})}},setup(t,n){const a=T(),i=y(()=>a),r=f=>(f==null?void 0:f.logoURI)||(f==null?void 0:f.logo_url)||(i.value.theme==="default"?A("/image/coins/unknown.png"):A("/image/coins/sui-unknown.png")),u=v("25"),o=v(1000.7126),s=[{name:"25%",value:25},{name:"50%",value:50},{name:"75%",value:75},{name:"MAX",value:100}],l=v(u.value*o.value/100),m=f=>{const J=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,6})?).*$");f.target.value=f.target.value.replace(J,"$1")},p=f=>{l.value=f,u.value=Number(f)/o.value*100},C=v(t.token),D=v(!1),R=[{symbol:"USDC",name:"usdc",address:"1211111"},{symbol:"SUI",name:"usdc",address:"33666"},{symbol:"USDC",name:"usdc",address:"1211111"},{symbol:"SUI",name:"usdc",address:"33666"}];return de(()=>{document.addEventListener("click",()=>{D.value=!1})}),re(()=>{document.removeEventListener("click",()=>{D.value=!1})}),{currentToken:C,isShowList:D,tokenList:R,onInput:p,inputChange:m,addCommom:pe,available:o,ratioValue:u,inputValue:l,ratioArr:s,getCoinIcon:r}}}),he=t=>(q("data-v-f6c677b3"),t=t(),ee(),t),gs=he(()=>e("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),As={class:"withdraw-container"},ks={class:"card"},ys={class:"top"},fs={class:"loading-token"},Cs={alt:""},bs=he(()=>e("use",{"xlink:href":"#icon-icon_on"},null,-1)),$s=[bs],Ss={key:0,class:"token-list"},Is=["onClick"],Us={alt:""},ws={class:"bottom"},Bs={class:"left"},Ds={key:0,class:"amount-price"},Ms={key:1},xs={class:"right"},Es={class:"balance"},Ps={class:"ratio-list"},Ts=["onClick"];function Rs(t,n,a,i,r,u){const o=fe,s=K,l=te("Modal"),m=O("image");return c(),W(l,{width:"440px",visible:!0,footer:null,title:"Withdraw","mask-closable":!0,onCancel:n[3]||(n[3]=p=>t.$emit("onClose"))},{closeIcon:k(()=>[gs]),default:k(()=>[e("div",As,[e("div",ks,[e("div",ys,[h(o,{value:t.inputValue,placeholder:"0.0",onChange:t.inputChange,onInput:n[0]||(n[0]=p=>t.onInput(p.target.value)),onFocus:n[1]||(n[1]=p=>t.$emit("onFocus"))},null,8,["value","onChange"]),e("div",{class:"right",onClick:n[2]||(n[2]=P(p=>t.isShowList=!t.isShowList,["stop"]))},[e("div",fs,[b(e("img",Cs,null,512),[[m,t.getCoinIcon({})]]),e("div",null,[e("p",null,_(t.currentToken.symbol),1)])]),(c(),d("svg",{class:$(["icon",t.isShowList?"deg-svg":""]),"aria-hidden":"true"},$s,2)),t.isShowList?(c(),d("div",Ss,[(c(!0),d(I,null,U(t.tokenList,p=>(c(),d("div",{key:p.address,class:"item",onClick:P(C=>t.currentToken=p,["stop"])},[b(e("img",Us,null,512),[[m,t.getCoinIcon({})]]),e("span",null,_(p.symbol),1)],8,Is))),128))])):x("",!0)])]),e("div",ws,[e("div",Bs,[t.inputValue?(c(),d("div",Ds," $999.85 ")):(c(),d("div",Ms))]),e("div",xs,[B(" Available "),e("span",Es,_(("addCommom"in t?t.addCommom:ye(pe))(t.available,4)),1)])])]),e("div",Ps,[(c(!0),d(I,null,U(t.ratioArr,(p,C)=>(c(),d("div",{key:C,class:$(["ratio-item",t.ratioValue==p.value?"ratio-item-active":""]),onClick:P(()=>{t.ratioValue=p.value,t.inputValue=t.available*p.value/100},["stop"])},_(p.name),11,Ts))),128))])]),h(s,{class:"big-btn withdraw-btn"},{default:k(()=>[B(" Withdraw ")]),_:1})]),_:1})}const Ls=w(ms,[["render",Rs],["__scopeId","data-v-f6c677b3"]]),Vs=E({setup(){const t=[{},{}],n=T(),a=y(()=>n),i=y(()=>a.value.theme),r={symbol:"SUI",name:"sui",address:"121211"},u=s=>(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||(i.value==="default"?A("/image/coins/unknown.png"):A("/image/coins/sui-unknown.png")),o=v(!1);return{tokenInfo:r,list:t,isOpenWithdraw:o,importIcon:A,getCoinIcon:u}}});const Js={class:"asset-info-container"},Ws=e("div",{class:"asset-title"},"Asset Info",-1),Os={class:"item-box"},Fs={class:"token-info"},Qs={alt:""},zs=e("span",null,"SUI",-1),Zs=F('<div class="item-row"><div class="left"><span>Locked</span><svg aria-hidden="true" class="icon"><use xlink:href="#icon-icon-tips1"></use></svg></div><div class="right">0.00</div></div><div class="item-row"><div class="left">Free Balance</div><div class="right">0.00</div></div><div class="item-row"><div class="left">Wallet Balance</div><div class="right">0.00</div></div>',3),Ns={class:"btn-box"};function Hs(t,n,a,i,r,u){const o=K,s=Ls,l=O("image");return c(),d("div",Js,[Ws,e("div",Os,[(c(!0),d(I,null,U(t.list,(m,p)=>(c(),d("div",{key:p,class:"item"},[e("div",Fs,[b(e("img",Qs,null,512),[[l,t.getCoinIcon({})]]),zs]),Zs,e("div",Ns,[h(o,null,{default:k(()=>[B(" Deposit ")]),_:1}),h(o,{onClick:n[0]||(n[0]=C=>t.isOpenWithdraw=!0)},{default:k(()=>[B(" Withdraw ")]),_:1})])]))),128))]),t.isOpenWithdraw?(c(),W(s,{key:0,token:t.tokenInfo,onOnClose:n[1]||(n[1]=m=>t.isOpenWithdraw=!1)},null,8,["token"])):x("",!0)])}const Xs=w(Vs,[["render",Hs]]),Ks=E({props:{cancelAll:{type:Boolean,default:!1},allMarkets:{type:Boolean,default:!1}},setup(t,n){const a=v([{},{},{}]);X(()=>t.cancelAll,s=>{s&&(a.value=[])},{immediate:!0});const i=T(),r=y(()=>i),u=y(()=>r.value.theme);return{list:a,importIcon:A,getCoinIcon:s=>(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||(u.value==="default"?A("/image/coins/unknown.png"):A("/image/coins/sui-unknown.png"))}}}),me=""+new URL("img-no-data_2x.74c8c73d.png",import.meta.url).href;const Ys={class:"orders-container"},Gs={class:"orders-table"},js=e("thead",{class:"table-header"},[e("tr",{class:"table-tr"},[e("th",null,"Market"),e("th",null,"Side"),e("th",null,"Type"),e("th",null,"Price"),e("th",null,"Quantity"),e("th",null,"Action")])],-1),qs={class:"table-body"},en={class:"token-info"},tn={alt:""},sn={alt:""},nn=e("span",null,"SUI - USDC",-1),on=e("td",null,[e("span",null,"       Limit ")],-1),an=e("td",null,[e("span",null,"       0.1 ")],-1),ln=e("td",null,[e("span",null,"       5.2 ")],-1),cn={class:"card-box"},dn={class:"token-info"},rn={alt:""},un={alt:""},pn=e("span",null,"SUI - USDC",-1),_n={class:"item"},vn=e("div",{class:"left"},"Side",-1),hn={class:"right"},mn=F('<div class="item"><div class="left">Type</div><div class="right"><span> Limit </span></div></div><div class="item"><div class="left">Price</div><div class="right"><span> 0.1 </span></div></div><div class="item"><div class="left">Quantity</div><div class="right"><span> 5.2 </span></div></div>',3),gn={key:0,class:"noData"},An=e("img",{src:me},null,-1),kn=e("p",null,"No data",-1),yn=[An,kn];function fn(t,n,a,i,r,u){var l;const o=K,s=O("image");return c(),d("div",Ys,[e("table",Gs,[js,e("tbody",qs,[(c(!0),d(I,null,U(t.list,(m,p)=>(c(),d("tr",{key:p,class:"table-tr"},[e("td",null,[e("div",en,[b(e("img",tn,null,512),[[s,t.getCoinIcon({})]]),b(e("img",sn,null,512),[[s,t.getCoinIcon({})]]),nn])]),e("td",null,[e("span",{class:$(m.text=="Sell"?"sell-text":"buy-text")}," Buy ",2)]),on,an,ln,e("td",null,[h(o,null,{default:k(()=>[B(" Cancel ")]),_:1})])]))),128))])]),e("div",cn,[(c(!0),d(I,null,U(t.list,(m,p)=>(c(),d("div",{key:p,class:"card"},[e("div",dn,[b(e("img",rn,null,512),[[s,t.getCoinIcon({})]]),b(e("img",un,null,512),[[s,t.getCoinIcon({})]]),pn]),e("div",_n,[vn,e("div",hn,[e("span",{class:$(m.text=="Sell"?"sell-text":"buy-text")}," Buy ",2)])]),mn,h(o,null,{default:k(()=>[B(" Cancel ")]),_:1})]))),128))]),((l=t.list)==null?void 0:l.length)<1?(c(),d("div",gn,yn)):x("",!0)])}const Cn=w(Ks,[["render",fn]]),bn=E({props:{cancelAll:{type:Boolean,default:!1},allMarkets:{type:Boolean,default:!1}},setup(t,n){const a=v([{},{},{}]);X(()=>t.cancelAll,s=>{s&&(a.value=[])},{immediate:!0});const i=T(),r=y(()=>i),u=y(()=>r.value.theme);return{list:a,importIcon:A,getCoinIcon:s=>(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||(u.value==="default"?A("/image/coins/unknown.png"):A("/image/coins/sui-unknown.png"))}}});const $n={class:"history-container"},Sn={class:"history-table"},In=e("thead",{class:"table-header"},[e("tr",{class:"table-tr"},[e("th",null,"Market"),e("th",null,"Side"),e("th",null,"Price"),e("th",null,"Quantity"),e("th",null,"Txns")])],-1),Un={class:"table-body"},wn={class:"token-info"},Bn={alt:""},Dn={alt:""},Mn=e("span",null,"SUI - USDC",-1),xn=e("td",null,[e("span",null,"       0.1 ")],-1),En=e("td",null,[e("span",null,"       5.2 ")],-1),Pn=e("td",null,[e("div",{class:"tx"},[e("span",null,"EgZSXa ... pLUr"),e("svg",{class:"icon link-icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-icon-link"})])])],-1),Tn={class:"card-box"},Rn={class:"token-info"},Ln={alt:""},Vn={alt:""},Jn=e("span",null,"SUI - USDC",-1),Wn={class:"item"},On=e("div",{class:"left"},"Side",-1),Fn={class:"right"},Qn=F('<div class="item"><div class="left">Price</div><div class="right"><span> 0.1 </span></div></div><div class="item"><div class="left">Quantity</div><div class="right"><span> 5.2 </span></div></div><div class="item"><div class="left">Txns</div><div class="right"><div class="tx"><span>EgZSXa ... pLUr</span><svg class="icon link-icon" aria-hidden="true"><use xlink:href="#icon-icon-link"></use></svg></div></div></div>',3),zn={key:0,class:"noData"},Zn=e("img",{src:me},null,-1),Nn=e("p",null,"No data",-1),Hn=[Zn,Nn];function Xn(t,n,a,i,r,u){var s;const o=O("image");return c(),d("div",$n,[e("table",Sn,[In,e("tbody",Un,[(c(!0),d(I,null,U(t.list,(l,m)=>(c(),d("tr",{key:m,class:"table-tr"},[e("td",null,[e("div",wn,[b(e("img",Bn,null,512),[[o,t.getCoinIcon({})]]),b(e("img",Dn,null,512),[[o,t.getCoinIcon({})]]),Mn])]),e("td",null,[e("span",{class:$(l.text=="Sell"?"sell-text":"buy-text")}," Buy ",2)]),xn,En,Pn]))),128))])]),e("div",Tn,[(c(!0),d(I,null,U(t.list,(l,m)=>(c(),d("div",{key:m,class:"card"},[e("div",Rn,[b(e("img",Ln,null,512),[[o,t.getCoinIcon({})]]),b(e("img",Vn,null,512),[[o,t.getCoinIcon({})]]),Jn]),e("div",Wn,[On,e("div",Fn,[e("span",{class:$(l.text=="Sell"?"sell-text":"buy-text")}," Buy ",2)])]),Qn]))),128))]),((s=t.list)==null?void 0:s.length)<1?(c(),d("div",zn,Hn)):x("",!0)])}const Kn=w(bn,[["render",Xn]]);const Yn=E({setup(){const t=v(["orders"]),n=v("orders"),a=T(),i=y(()=>a),r=y(()=>i.value.theme),u=p=>(p==null?void 0:p.logoURI)||(p==null?void 0:p.logo_url)||(r.value==="default"?A("/image/coins/unknown.png"):A("/image/coins/sui-unknown.png")),o=v(!1),s=()=>{o.value=!0,setTimeout(()=>{o.value=!1},2e3)},l=v(!1);return{isCancelAll:o,clickCancelAll:s,clickMarketsAll:()=>{l.value=!l.value},isSelectAll:l,current:t,theme:r,currentTab:n,importIcon:A,getCoinIcon:u}}}),Gn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAADoUlEQVRYCe2XSWgTURjHv2+SKFERBPEugketYho9eDB1w6WHggsuoCiKoB5UTOtBItgkLSqiBxUUBRW1Fw9uIIo7JGkEcUXEfV9raW1UTD7/L5hxMp2ZpIakCH3Qznvf9n7ve9+8eSHqa/9ZBri3eHc9kv6vv9AJ1mhn1MeXcxy9AhS6J/26OugkIGYQ0zeXRtMiPr6hoLQcWaWeIRF3qpNaMN+M7JxCA9NpOteQFL8aVzRDLSKumwk6JkJzsjDGf0xfNaHJFQNCZrRUgg4DZoGRI6/PdKkiWyYinIrTAScYZrrv8tC8sgMpmGCc9grRkrxsGAdMD71MNZGx/NFtlJej35CgXYi7wjY202NPf6oJVfE7ZVNWoGBctmeEVtvBoICfkYsCjVX8OmdTti0LxiSCmlmXm8j8RM288jAFmsbxC6OuG9C+pHiMBv/SDyZkC2qm3s4XMG89/Siw1c9PzTZ5QA0xWfwkTa2hpAw1GxY7xjZtkgxtdrD/oGGbto7hR1Y2+jlUn5B5mQwdhZELx+UtzUuB6Chus3KykyHGesTYZqdH3E9ujSaFfXzXziYLtDEhdZyhE0izXuRIayvQpmCP2+2cjXJkZg1qRr1Rlg0TteGbFQhX8y1Lgz9CDfs9m4SOG2GUDsF9gm8MPoSDnAIoHWBWOsIwtbuZphaCUbE0wCzDn3UhC03o6qSzqKkBytiqIbtLsZg9Vro/sg7ATm/0c9LBRldp3mE0H3t7UZeYO0ITU2k6teOleM0qZHcRC+3HgvRazLNRVwummc3jOZYndxhooeH8fYCLalEzV+3ssMLA+zd0Ul2qcjaAmYu36RB0eW9qTo9nCoraiJ+vGWQFu/rKVK1ge85jtRNsvZhOj3BR3dM0zQJIi7nudD+mH7hK1EbH83ldVmRHB1L2oZgMTjFdwGQ+O384XBcmv13dIdM/4VvX5OczdjGc5HlAyrD+tgyRFF0E1BgnRysdgv0C0Nyon9X19J9at/1XhyGEUxD8Tg8jplFNC0uBUfN1A1JCFOJnrzd7nXygxoUaspLBr4clTdWs7solNUsgFTE0mj+43FSDruU3R5+VcYYyLQfMEV1WQscWSMUMj+O3eASQgSd2c2BrVzVX80E7fU/ljkAqGA61V25PFuqFOThA1+Jt2meWlzIuCKSCN47l56iRScjG35udRhsAs7uUya18MUfxrSEuI9NEV+C0GzDh4j3LaFnK5a2MWH2h+zKgZ+A3vN8kkm5JPIsAAAAASUVORK5CYII=";const jn={class:"orders-and-history-container"},qn={class:"tab-action"},eo={class:"tab"},to={class:"action"},so={class:"radio"},no={key:0,src:Gn},oo=e("span",null,"All Markets",-1);function io(t,n,a,i,r,u){const o=te("mail-outlined"),s=Ce,l=be,m=Cn,p=Kn;return c(),d("div",jn,[e("div",qn,[e("div",eo,[h(l,{selectedKeys:t.current,"onUpdate:selectedKeys":n[2]||(n[2]=C=>t.current=C),mode:"horizontal"},{default:k(()=>[h(s,{key:"orders",onClick:n[0]||(n[0]=()=>{t.currentTab="orders",t.current=["orders"]})},{icon:k(()=>[h(o)]),default:k(()=>[B(" Open Orders ")]),_:1}),h(s,{key:"history",onClick:n[1]||(n[1]=()=>{t.currentTab="history",t.current=["history"]})},{icon:k(()=>[h(o)]),default:k(()=>[B(" Recent Trade History ")]),_:1})]),_:1},8,["selectedKeys"])]),e("div",to,[e("div",{class:$(["item",t.isSelectAll?"item-active":""]),onClick:n[3]||(n[3]=P(C=>t.clickMarketsAll(),["stop"]))},[e("div",so,[t.isSelectAll&&t.theme=="sui"?(c(),d("img",no)):x("",!0)]),oo],2),e("span",{class:"cancelAll",onClick:n[4]||(n[4]=C=>t.clickCancelAll())},"Cancel All")])]),t.currentTab=="orders"?(c(),W(m,{key:0,"cancel-all":t.isCancelAll,"all-markets":t.isSelectAll},null,8,["cancel-all","all-markets"])):x("",!0),t.currentTab=="history"?(c(),W(p,{key:1,"cancel-all":t.isCancelAll,"all-markets":t.isSelectAll},null,8,["cancel-all","all-markets"])):x("",!0)])}const ao=w(Yn,[["render",io]]),ge=""+globalThis.__publicAssetsURL("img-dbk/logo-deeplook@2x.png");const lo={},co={class:"trade-container"},ro={class:"market-data-box"},uo={class:"pool-info-box"},po={class:"chart-and-orderbook"},_o=e("div",{class:"chart-box"},null,-1),vo={class:"orderbook-box"},ho={class:"trade-and-asset h5-trade-and-asset"},mo={class:"trade-box"},go=e("div",{class:"settlement-venue"},[e("span",null,"Settlement venue:"),e("img",{src:ge,alt:""})],-1),Ao={class:"asset-info-box"},ko={class:"order-and-history"},yo={class:"trade-and-asset pc-trade-and-asset"},fo={class:"trade-box"},Co=e("div",{class:"settlement-venue"},[e("span",null,"Settlement venue:"),e("img",{src:ge,alt:""})],-1),bo={class:"asset-info-box"};function $o(t,n){const a=Et,i=es,r=hs,u=Xs,o=ao;return c(),d("div",co,[e("div",ro,[e("div",uo,[h(a)]),e("div",po,[_o,e("div",vo,[h(i)])]),e("div",ho,[e("div",mo,[h(r)]),go,e("div",Ao,[h(u)])]),e("div",ko,[h(o)])]),e("div",yo,[e("div",fo,[h(r)]),Co,e("div",bo,[h(u)])])])}const wo=w(lo,[["render",$o]]);export{wo as default};
