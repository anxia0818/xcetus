import{_ as Me}from"./back.90d994e4.js";import{_ as Ue}from"./token-warning.bbd60f04.js";import{_ as _e}from"./nuxt-link.851abc64.js";import{_ as Ne}from"./apr-tips.f2576336.js";import{_ as Le}from"./coin-select.dc826caa.js";import{_ as Fe}from"./token-warning-modal.e1c57277.js";import{u as Re,a as je,c as ae,e as W,s as he,d as ye}from"./pool.44ae24f9.js";import{a as Be,l as Oe,b as De,r as w,E as Ee,m as A,y as We,C as Ve,D as V,e as Ke,Q as ue,q as ze,o as c,f as v,h as n,i as q,z as F,K,x as P,t as z,w as _,v as b,F as He,s as Qe,j as O,u as D,c as ce,S as Xe,U as Ye,p as Ge,k as Je,V as Ze}from"./entry.7c7b73e2.js";/* empty css              *//* empty css              *//* empty css              */import{u as xe,c as ke}from"./sha256.be3434e1.js";import{g as eo}from"./common-fun.7f3ce7fb.js";import{i as be}from"./import-icon.de3e6c66.js";import"./decimal.633e31ee.js";import{direction as we,createPoolFromCoin as oo,createPoolToCoin as so}from"./create-pool-data.7b81e61b.js";import{D as E}from"./decimal.0e8aa3f1.js";import{_ as no}from"./icon-Farms_2x.dbfd333f.js";import{_ as lo,a as io}from"./img-no-data_2x.7776fad3.js";/* empty css              */import"./img-no-Positions_2x.500809f9.js";import"./icon-selected_3x.09e9a6f0.js";import"./precision.a7a6c57b.js";const ao=Be({setup(e,m){var ge;const{t:T,locale:qe}=Oe(),r=De(),re=w([`${(ge=r==null?void 0:r.currentRoute)==null?void 0:ge.value.name.split("-")[1]}`]),G=w(!1),R=w(!1),J=w(!0),te=Re(),j=xe(),k=Ee(),L=w(""),u=w(null),d=w(null),H=w(null),M=w(k.query.poolAddress),Q=w(""),y=A(()=>j),Z=A(()=>j.theme),C=A(()=>te),x=A(()=>ke[y.value.chainName]),i=A(()=>j.statsData),$=A(()=>y.value.chainName),I=A(()=>$.value?je($.value):null),ee=A(()=>[{label:.01+"% "+T("common.feeTier"),title:.01+"% ",fee:1e-4,text:T("newAdd.bestVeryStablePairs")},{label:.05+"% "+T("common.feeTier"),title:.05+"% ",fee:5e-4,text:T("newAdd.bestStablePairs")},y.value.chainName=="Aptos"?{label:.2+"% "+T("common.feeTier"),title:.2+"% ",fee:.002,text:T("newAdd.bestMostPairs")}:{label:.25+"% "+T("common.feeTier"),title:.25+"% ",fee:.0025,text:T("newAdd.bestMostPairs")},y.value.chainName=="Aptos"?{label:.6+"% "+T("common.feeTier"),title:.6+"% ",fee:.006,text:T("newAdd.besteExoticPairs")}:{label:"1% "+T("common.feeTier"),title:"1% ",fee:.01,text:T("newAdd.besteExoticPairs")}]),X=A(()=>{if(C.value.poolConfigList&&u.value&&d.value){const o=C.value.poolConfigList.filter(l=>{var g,f,a,p;return l.token_a.address.toUpperCase()===((g=u.value.address)==null?void 0:g.toUpperCase())&&l.token_b.address.toUpperCase()===((f=d.value.address)==null?void 0:f.toUpperCase())||l.token_b.address.toUpperCase()===((a=u.value.address)==null?void 0:a.toUpperCase())&&l.token_a.address.toUpperCase()===((p=d.value.address)==null?void 0:p.toUpperCase())}),s=[];return o.forEach(l=>{s.push(Number(l.fee))}),s}else return[]}),oe=o=>{const s={};let l=new E(0);o.forEach(t=>{var S;const h=(S=t==null?void 0:t.object)==null?void 0:S.liquidity;l=l.add(new E(h||0))});const g=[];let f=new E(0);o.forEach(t=>{const h=new E(t.object.liquidity),S=h.gt(0)?new E(h).div(l).mul(100).toString():0,U=he(S,2);f=f.plus(U);const B=U.split(".");g.push({value:U,int:B[0],decimal:B[1],fee:t.fee})});let a=new E(100).minus(f).toNumber();const p=g.sort((t,h)=>Number(h.decimal)-Number(t.decimal));if(a)for(let t=0;t<p.length&&a;t++)p[t].value=new E(p[t].value).plus(.01).toString(),a=new E(a).minus(.01).toNumber();return o.forEach(t=>{var S;const h=(S=p.find(U=>t.fee===U.fee))==null?void 0:S.value;s[t.fee]={rateText:(h>0&&h<.01?"<0.01":h==0?0:he(h,2))+"% select",rate:h}}),s},se=A(()=>{if(C.value.poolConfigList&&u.value&&d.value){const o=C.value.poolConfigList.filter(l=>{var g,f,a,p;return l.token_a.address.toUpperCase()===((g=u.value.address)==null?void 0:g.toUpperCase())&&l.token_b.address.toUpperCase()===((f=d.value.address)==null?void 0:f.toUpperCase())||l.token_b.address.toUpperCase()===((a=u.value.address)==null?void 0:a.toUpperCase())&&l.token_a.address.toUpperCase()===((p=d.value.address)==null?void 0:p.toUpperCase())});return oe(o)}else return""}),ne=A(()=>{var o;return(o=y.value)==null?void 0:o.filterCreatePoolCoin});We(()=>{document.addEventListener("click",()=>{R.value=!1})}),Ve(()=>{u.value=null,d.value=null,document.removeEventListener("click",()=>{R.value=!1})}),V(()=>[r,C.value.tokensObj],async([o,s])=>{var l,g;if(console.log("0727####491watch####  feeValue",k),o){const f=(l=r==null?void 0:r.currentRoute)==null?void 0:l.value.name.split("-")[1];re.value=!f||f=="privide"||f==""?["privide"]:[`${f}`]}(((g=r==null?void 0:r.currentRoute)==null?void 0:g.value.name)=="liquidity-creat-pool"||k.query.action=="newposition")&&s&&(u.value||(u.value=C.value.tokensObj[k.query.fromCoin]||await I.value.getTokenBySymbol(s,k.query.fromCoin)),d.value||(d.value=C.value.tokensObj[k.query.toCoin]||await I.value.getTokenBySymbol(s,k.query.toCoin)),console.log(k.query.fee!=="null","######558"),L.value=k.query.fee!=="null"&&k.query.fee?k.query.fee:"",console.log(L.value,"######558"))},{immediate:!0,deep:!0});const Te=()=>{var l,g,f,a,p,t,h,S;let o=null;const s=C.value.poolConfigList;for(let U=0;U<s.length;U++){const B=s[U];if(B.token_a.address.toUpperCase()===((g=(l=u==null?void 0:u.value)==null?void 0:l.address)==null?void 0:g.toUpperCase())&&B.token_b.address.toUpperCase()===((a=(f=d==null?void 0:d.value)==null?void 0:f.address)==null?void 0:a.toUpperCase())||B.token_b.address.toUpperCase()===((t=(p=u==null?void 0:u.value)==null?void 0:p.address)==null?void 0:t.toUpperCase())&&B.token_a.address.toUpperCase()===((S=(h=d==null?void 0:d.value)==null?void 0:h.address)==null?void 0:S.toUpperCase())){o=B;break}}return o},$e=o=>{var l;const s=Te();if(s&&(oo.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,so.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,u.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,d.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,console.log("0524###test###11111###samePoolInfo###",s),we.value=d.value.address===((l=s==null?void 0:s.token_a)==null?void 0:l.address)),console.log(we.value,"===>direction.value"),X.value.includes(o.fee))H.value=o,L.value=o.fee,R.value=!1;else{if($.value!=="Aptos"&&!ne.value[u.value.address]&&!ne.value[d.value.address])return;H.value=o,L.value=o.fee,R.value=!1}},de=w(!1),Y=w(!1),Ae=o=>{Q.value=o,o=="coinA"&&k.name=="liquidity-creat-pool"?(de.value=!0,Y.value=!1):o=="coinB"&&k.name=="liquidity-creat-pool"&&(de.value=!1,Y.value=!0),console.log(Y.value,Y.value,o,k.name,"#####selectToken"),G.value=!0},Pe=A(()=>ke[$.value].hasCreatePool);V(()=>[u.value,d.value,L.value,C.value.poolConfigList,Pe.value],([o,s,l,g,f])=>{if(console.log(o,s,l,"watch####  feeValue"),g.length>0){if(o&&s&&l){let a=null;a=g.find(p=>o.address==p.coinA.address&&s.address==p.coinB.address&&l==p.fee||o.address==p.coinB.address&&s.address==p.coinA.address&&l==p.fee),console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress1",a,a==null?void 0:a.fee,l),a?M.value=a?a.address:"":(M.value="",f?(console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress411"),r.replace(`/liquidity/creat-pool?fromCoin=${o.address}&toCoin=${s.address}&fee=${l}`)):r.replace(`/liquidity/privide-liquidity?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${l}&pool=notfount`))}else if(o&&s&&!l){let a=null;const p=g.filter(t=>(o==null?void 0:o.address)==t.coinA.address&&(s==null?void 0:s.address)==t.coinB.address||(o==null?void 0:o.address)==t.coinB.address&&(s==null?void 0:s.address)==t.coinA.address);console.log(p,"poolTvl sort######"),a=p.sort((t,h)=>{var S,U;return((S=h==null?void 0:h.object)==null?void 0:S.liquidity)-((U=t==null?void 0:t.object)==null?void 0:U.liquidity)})[0],console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress2",a,a==null?void 0:a.fee,l),a?M.value=a?a.address:"":(M.value="",r.replace(`/liquidity/privide-liquidity?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${l}&pool=notfount`))}}});const le=A(()=>{if(M.value){const o=M.value;return C.value.poolConfigObj[o]}else return null}),ie=w("--");V(()=>le.value,async(o,s)=>{var l,g,f,a;if(o&&!ae(o)){if(((l=r==null?void 0:r.currentRoute)==null?void 0:l.value.name)=="liquidity-privide-liquidity"||((g=r==null?void 0:r.currentRoute)==null?void 0:g.value.name)=="liquidity-creat-pool"?r.replace(`/liquidity/privide-liquidity?poolAddress=${o.address}`):((f=r==null?void 0:r.currentRoute)==null?void 0:f.value.name)=="liquidity-your-liquidity"?r.replace(`/liquidity/your-liquidity?poolAddress=${o.address}`):((a=r==null?void 0:r.currentRoute)==null?void 0:a.value.name)=="liquidity-analytics"&&r.replace(`/liquidity/analytics?poolAddress=${o.address}`),u.value=o.needReverse?o.coinB:o.coinA,d.value=o.needReverse?o.coinA:o.coinB,L.value=o.fee,M.value=o.address,y.value.chainName&&y.value.chainName.includes("Aptos")){const p=await I.value.getPool(o.address),t=o.coinA.decimals,h=o.coinB.decimals;ie.value=I.value.TickMath.sqrtPriceX64ToPrice(p.current_sqrt_price,t,h).toString()}else ie.value=o.price;console.log(ie.value,"currentPrice.value")}},{immediate:!0,deep:!0});const pe=A(()=>C.value.currentPoolMoreInfo);V(()=>[le.value,y.value.addressLpTokens],o=>{o&&eo(le.value,C,y)},{deep:!0}),console.log(pe.value,"===>poolMoreInfo"),V(()=>y.value.chainName,(o,s)=>{o&&j.getStatsData(o,y.value.filterCoinsObj)},{immediate:!0});const Ie=o=>{L.value="",Q.value=="coinA"?(u.value=o,(d.value&&d.value.address)==o.address&&(d.value=null,M.value="")):(d.value=o,(u.value&&u.value.address)==o.address&&(u.value=null,M.value=""))},Se=o=>{var s;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((s=C.value.tokensObj[o==null?void 0:o.address])==null?void 0:s.logo_url)||(y.value.theme==="default"?be("/image/coins/unknown.png"):be("/image/coins/sui-unknown.png"))},ve=w(),me=w(),fe=w(!1),Ce=(o,s)=>{console.log(o);const l=localStorage.getItem(o.address);console.log(C.value.tokensObj,"===>pools.value.tokensObj"),console.log(l,"===>coinLocak"),C.value.tokensObj&&C.value.tokensObj[o.address]&&C.value.tokensObj[o.address].isSelfBuilt&&!l&&(s=="fromCoin"&&(ve.value=o),s=="toCoin"&&(me.value=o),fe.value=!0)};return V(()=>[u.value,d.value],([o,s])=>{o&&!ae(o)&&Ce(o,"fromCoin"),s&&!ae(s)&&Ce(s,"toCoin")},{immediate:!0}),{chainName:$,warningFromCoin:ve,warningToCoin:me,isShowTokenWarning:fe,closeTokenWarning:()=>{$.value!=="Aptos"?r.push("/pool/list"):r.push("/pools")},direct:J,currentPrice:ie,creatFeeItem:H,feeValue:L,checkNullObj:ae,poolMoreInfo:pe,poolTvl:se,isShowFeeList:R,filterCreatePoolCoin:ne,route:k,selectFee:$e,isCreatePool:X,feeTierList:ee,currentToken:Q,tokenA:u,tokenB:d,selectToken:Ae,showCoinSelect:G,onCoinSelect:Ie,getCoinIcon:Se,currentPoolAddress:M,poolInfo:le,store:y,config:x,t:T,router:r,current:re,addCommom:W,theme:Z,statsData:i,pools:C,isCreatePoolFromCoin:de,isCreatePoolToCoin:Y}}});const N=e=>(Ge("data-v-be1e5870"),e=e(),Je(),e),ro={class:"liquidity-container"},to={class:"back-div"},uo={class:"upgrade-liquidity-header"},co={class:"left"},po={class:"select-token-box"},vo={class:"loading-token"},mo={class:"label"},fo=N(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),Co=[fo],go={class:"select-token"},ho={class:"label"},yo=N(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),ko=[yo],bo={class:"fee-tier"},wo=N(()=>n("span",null,"Fee tier",-1)),qo={key:0,class:"icon edit-fee-icon","aria-hidden":"true"},To=N(()=>n("use",{"xlink:href":"#icon-btn_edit"},null,-1)),$o=[To],Ao={key:0,class:"fee-tier-box"},Po=["onClick"],Io={key:0,class:"text-active"},So={key:1},Mo={key:0,class:"icon fee-disabled","aria-hidden":"true"},Uo=N(()=>n("use",{"xlink:href":"#icon-icon-disable"},null,-1)),_o=[Uo],No={class:"right"},Lo={key:0,class:"price"},Fo={key:0,class:"coin"},Ro={key:1,class:"coin"},jo=N(()=>n("div",null,[n("svg",{class:"icon icon-up","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Bo=N(()=>n("div",null,[n("svg",{class:"icon icon-down","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Oo=[jo,Bo],Do={key:0,class:"header-left header-creat-pool"},Eo={key:1,class:"header-left"},Wo={key:2,class:"header-right"},Vo={class:"item"},Ko=N(()=>n("div",{class:"label"},"APR",-1)),zo={class:"value"},Ho={class:"value-border"},Qo={key:0,class:"apr-hover-content"},Xo={key:0,class:"isFarming"},Yo=N(()=>n("img",{src:no,alt:""},null,-1)),Go=N(()=>n("div",{class:"hover-text"},"Farming rewards available",-1)),Jo=[Yo,Go],Zo={class:"item"},xo=N(()=>n("div",{class:"label"},"TVL",-1)),es={class:"value"},os={class:"item"},ss=N(()=>n("div",{class:"label"},"Volume (24H)",-1)),ns={class:"value"},ls={key:0,class:"no-pool-info"},is={key:0,src:lo,alt:""},as={key:1,src:io,alt:""},rs={key:1,class:"router-view-container"};function ts(e,m,T,qe,r,re){var Z,C,x;const G=Me,R=Ue,J=Xe,te=ue("mail-outlined"),j=_e,k=Ze,L=ue("appstore-outlined"),u=Ye,d=Ne,H=ue("router-view"),M=Le,Q=Fe,y=ze("image");return c(),v("div",{class:F(["upgrade-liquidity-container",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none-container":""])},[n("div",ro,[n("div",to,[q(G,{label:"Pools",url:e.chainName=="Sui"?"/pool/list":"/pools"},null,8,["url"]),e.$route.name!=="liquidity-creat-pool"?(c(),v("div",{key:0,class:F(["linkSwap",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""]),onClick:m[0]||(m[0]=K(i=>{var $,I;return e.router.push(`/swap?from=${($=e.tokenA)==null?void 0:$.address}&to=${(I=e.tokenB)==null?void 0:I.address}`)},["stop"]))}," Trade → ",2)):P("",!0)]),n("div",uo,[n("div",co,[n("div",po,[n("div",{class:"select-token",onClick:m[1]||(m[1]=K(i=>e.pools.isTokenLoading?"":e.selectToken("coinA"),["stop"]))},[n("div",vo,[z(n("img",null,null,512),[[y,e.getCoinIcon(e.tokenA)]]),q(R,{address:(Z=e.tokenA)==null?void 0:Z.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),q(J,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:_(()=>[n("p",mo,b(e.tokenA?e.tokenA.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),(c(),v("svg",{class:F(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},Co,2))])]),n("div",go,[n("div",{class:"loading-token",onClick:m[2]||(m[2]=K(i=>e.pools.isTokenLoading?"":e.selectToken("coinB"),["stop"]))},[z(n("img",null,null,512),[[y,e.getCoinIcon(e.tokenB)]]),q(R,{address:(C=e.tokenB)==null?void 0:C.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),q(J,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:_(()=>[n("p",ho,b(e.tokenB?e.tokenB.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),(c(),v("svg",{class:F(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},ko,2))])])]),n("div",bo,[n("div",{class:F(["fee-text",e.tokenA&&e.tokenB?"fee-tier-action":""]),onClick:m[3]||(m[3]=K(i=>e.store.chainName=="Aptos"||!e.tokenA||!e.tokenB?"":e.isShowFeeList=!e.isShowFeeList,["stop"]))},[wo,n("div",null,[n("p",null,b(e.feeValue?e.feeValue*100:"--")+"%",1),e.store.chainName!=="Aptos"?(c(),v("svg",qo,$o)):P("",!0)])],2),e.isShowFeeList?(c(),v("div",Ao,[(c(!0),v(He,null,Qe(e.feeTierList,(i,$)=>{var I,ee,X,oe,se;return c(),v("div",{key:$,class:F(["fee-item",[e.feeValue==i.fee?"fee-item-active":"",e.isCreatePool.includes(i.fee)?" pool-created":" pool-not-created",e.store.chainName!=="Aptos"&&!e.isCreatePool.includes(i.fee)&&!e.filterCreatePoolCoin[(I=e.tokenA)==null?void 0:I.address]&&!e.filterCreatePoolCoin[(ee=e.tokenB)==null?void 0:ee.address]?"disabled":""]]),onClick:K(ne=>e.selectFee(i),["stop"])},[n("p",{class:F(e.isCreatePool&&e.isCreatePool.includes(i.fee)?"text-active":"text-default")},b(i.title),3),n("div",null,[e.isCreatePool&&e.isCreatePool.includes(i.fee)?(c(),v("p",Io,b(e.poolTvl&&e.poolTvl[i.fee]&&((X=e.poolTvl[i.fee])==null?void 0:X.rateText)),1)):P("",!0),e.isCreatePool&&!e.isCreatePool.includes(i.fee)?(c(),v("p",So,[O(b(e.$t("newAdd.notCreated"))+" ",1),e.chainName!=="Aptos"&&!e.isCreatePool.includes(i.fee)&&!e.filterCreatePoolCoin[(oe=e.tokenA)==null?void 0:oe.address]&&!e.filterCreatePoolCoin[(se=e.tokenB)==null?void 0:se.address]?(c(),v("svg",Mo,_o)):P("",!0)])):P("",!0),n("span",null,b(i.text),1)])],10,Po)}),128))])):P("",!0)])]),n("div",No,[e.$route.name!=="liquidity-privide-liquidity"&&e.$route.name!=="liquidity-creat-pool"?(c(),v("div",Lo,[((x=e.poolInfo)!=null&&x.needReverse?!e.direct:e.direct)?(c(),v("div",Fo,[z(n("img",null,null,512),[[y,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),O(" 1"+b(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol)+" ≈  ",1),z(n("img",null,null,512),[[y,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),O(" "+b(e.currentPrice=="--"?"--":("addCommom"in e?e.addCommom:D(W))(("decimalUi"in e?e.decimalUi:D(ye))(e.currentPrice,6)))+" "+b(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1)])):(c(),v("div",Ro,[z(n("img",null,null,512),[[y,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),O(" 1 "+b(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol)+" ≈  ",1),z(n("img",null,null,512),[[y,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),O(" "+b(e.currentPrice=="--"?"--":("addCommom"in e?e.addCommom:D(W))(("decimalUi"in e?e.decimalUi:D(ye))(1/e.currentPrice,6)))+" "+b(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1)])),n("div",{class:"icon-change",onClick:m[4]||(m[4]=i=>e.direct=!e.direct)},Oo)])):P("",!0),e.$route.name!=="liquidity-creat-pool"?(c(),v("div",{key:1,class:F(["linkSwap",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""]),onClick:m[5]||(m[5]=K(i=>{var $,I;return e.router.push(`/swap?from=${($=e.tokenA)==null?void 0:$.address}&to=${(I=e.tokenB)==null?void 0:I.address}`)},["stop"]))}," Trade → ",2)):P("",!0)])]),n("div",{class:F(["upgrade-liquidity-tab",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""])},[e.$route.name==="liquidity-creat-pool"?(c(),v("div",Do," Create Concentrated Pool ")):(c(),v("div",Eo,[q(u,{selectedKeys:e.current,"onUpdate:selectedKeys":m[8]||(m[8]=i=>e.current=i),mode:"horizontal"},{default:_(()=>[q(k,{key:"privide"},{default:_(()=>{var i;return[q(j,{to:`/liquidity/privide-liquidity?poolAddress=${(i=e.poolInfo)==null?void 0:i.address}`},{icon:_(()=>[q(te)]),default:_(()=>[O(" Privide Liquidity ")]),_:1},8,["to"])]}),_:1}),q(k,{key:"your",onClick:m[6]||(m[6]=i=>e.current=["your"])},{default:_(()=>{var i;return[q(j,{to:`/liquidity/your-liquidity?poolAddress=${(i=e.poolInfo)==null?void 0:i.address}`},{icon:_(()=>[q(L)]),default:_(()=>[O(" Your Liquidity ")]),_:1},8,["to"])]}),_:1}),e.theme=="sui"?(c(),ce(k,{key:"analytics",onClick:m[7]||(m[7]=i=>e.current=["analytics"])},{default:_(()=>{var i;return[q(j,{to:`/liquidity/analytics?poolAddress=${(i=e.poolInfo)==null?void 0:i.address}`},{icon:_(()=>[q(L)]),default:_(()=>[O(" Analytics ")]),_:1},8,["to"])]}),_:1})):P("",!0)]),_:1},8,["selectedKeys"])])),e.$route.name!=="liquidity-creat-pool"?(c(),v("div",Wo,[n("div",Vo,[Ko,n("div",zo,[n("div",Ho,[n("div",{class:F(["apr-value",e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0?"":"noCursor"])},[n("i",null,b(e.poolMoreInfo.is_display_rewarder?e.poolMoreInfo.aprTotal>0&&e.poolMoreInfo.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:D(W))(e.poolMoreInfo.aprTotal,2):e.poolMoreInfo.apr>0&&e.poolMoreInfo.apr<.01?"<0.01":("addCommom"in e?e.addCommom:D(W))(e.poolMoreInfo.apr,2))+"%",1),e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0?(c(),v("div",Qo,[q(d,{"l-item":e.poolMoreInfo,"rewarder-info":e.poolMoreInfo.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):P("",!0)],2)]),e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0?(c(),v("div",Xo,Jo)):P("",!0)])]),n("div",Zo,[xo,n("div",es,"$"+b(Number(e.poolMoreInfo.liqidity)!==0&&Number(e.poolMoreInfo.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:D(W))(e.poolMoreInfo.liqidity,2)),1)]),n("div",os,[ss,n("div",ns,"$"+b(Number(e.poolMoreInfo.vol)!==0&&Number(e.poolMoreInfo.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:D(W))(e.poolMoreInfo.vol,2)),1)])])):P("",!0)],2)]),!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?(c(),v("div",ls,[e.store.theme=="default"?(c(),v("img",is)):(c(),v("img",as)),n("p",null,b(e.$t("newAdd.positionAppear")),1)])):(c(),v("div",rs,[q(H)])),e.showCoinSelect?(c(),ce(M,{key:2,"existing-coins":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"last-select-coin":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"is-create-pool-to-coin":e.isCreatePoolToCoin,"is-create-pool-from-coin":e.isCreatePoolFromCoin,onOnSelect:e.onCoinSelect,onOnClose:m[9]||(m[9]=i=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","is-create-pool-to-coin","is-create-pool-from-coin","onOnSelect"])):P("",!0),e.chainName=="Sui"&&e.isShowTokenWarning?(c(),ce(Q,{key:3,"from-coin":e.warningFromCoin,"to-coin":e.warningToCoin,onClose:e.closeTokenWarning,onClickContinue:m[10]||(m[10]=i=>e.isShowTokenWarning=!1)},null,8,["from-coin","to-coin","onClose"])):P("",!0)],2)}const Ns=Ke(ao,[["render",ts],["__scopeId","data-v-be1e5870"]]);export{Ns as default};
