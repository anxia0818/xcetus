import{_ as Le}from"./back.b9113b81.js";import{_ as Re}from"./token-warning.cdf81c4d.js";import{_ as je}from"./nuxt-link.9af189f5.js";import{_ as Oe}from"./apr-tips.f0d43d45.js";import{_ as Fe}from"./coin-select.c7f64cda.js";import{_ as Be}from"./token-warning-modal.01f09f9e.js";import{u as De,b as Ee,c as x,a as K,s as qe,T as We,d as Ae}from"./pool.dacc333d.js";import{a as Ve,l as ze,b as He,r as w,E as Ke,C as q,z as Xe,A as Ge,D as G,e as Ye,q as fe,G as Je,o as d,f as v,h as n,i as T,v as R,L as Y,x as P,H,w as N,t as y,F as $e,s as Pe,u as V,c as Ce,R as Qe,a0 as Ze,j as pe,p as xe,k as eo,a1 as oo}from"./entry.aa0fa5b5.js";/* empty css              *//* empty css              *//* empty css              */import{u as so,c as Ie}from"./sha256.bcac7df8.js";import{g as no}from"./common-fun.c480a214.js";import{i as Se}from"./import-icon.de3e6c66.js";import"./decimal.633e31ee.js";import{direction as Me,createPoolFromCoin as lo,createPoolToCoin as ao}from"./create-pool-data.aad345bc.js";import{D as j}from"./decimal.0e8aa3f1.js";import{_ as io}from"./icon-Farms_2x.ed8dace0.js";import{_ as ro,a as to}from"./img-no-data_2x.43925dcc.js";/* empty css              */import"./img-no-Positions_2x.99f1ef5b.js";import"./icon-selected_3x.09e9a6f0.js";import"./precision.a7a6c57b.js";const uo=Ve({setup(e,m){var Te;const{t:A,locale:Ue}=ze(),r=He(),ee=w([`${(Te=r==null?void 0:r.currentRoute)==null?void 0:Te.value.name.split("-")[1]}`]),oe=w(!1),F=w(!1),se=w(!0),ve=De(),B=so(),b=Ke(),L=w(""),u=w(null),c=w(null),J=w(null),$=w(b.query.poolAddress),Q=w(""),k=q(()=>B),ne=q(()=>B.theme),f=q(()=>ve),le=q(()=>Ie[k.value.chainName]),ae=q(()=>B.statsData),O=q(()=>k.value.chainName),D=q(()=>O.value?Ee(O.value):null),ie=q(()=>[{label:.01+"% "+A("common.feeTier"),title:.01+"% ",fee:1e-4,text:A("newAdd.bestVeryStablePairs")},{label:.05+"% "+A("common.feeTier"),title:.05+"% ",fee:5e-4,text:A("newAdd.bestStablePairs")},k.value.chainName=="Aptos"?{label:.2+"% "+A("common.feeTier"),title:.2+"% ",fee:.002,text:A("newAdd.bestMostPairs")}:{label:.25+"% "+A("common.feeTier"),title:.25+"% ",fee:.0025,text:A("newAdd.bestMostPairs")},k.value.chainName=="Aptos"?{label:.6+"% "+A("common.feeTier"),title:.6+"% ",fee:.006,text:A("newAdd.besteExoticPairs")}:{label:"1% "+A("common.feeTier"),title:"1% ",fee:.01,text:A("newAdd.besteExoticPairs")}]),Z=q(()=>{if(f.value.poolConfigList&&u.value&&c.value){const o=f.value.poolConfigList.filter(a=>{var h,C,i,p;return a.token_a.address.toUpperCase()===((h=u.value.address)==null?void 0:h.toUpperCase())&&a.token_b.address.toUpperCase()===((C=c.value.address)==null?void 0:C.toUpperCase())||a.token_b.address.toUpperCase()===((i=u.value.address)==null?void 0:i.toUpperCase())&&a.token_a.address.toUpperCase()===((p=c.value.address)==null?void 0:p.toUpperCase())}),s=[];return o.forEach(a=>{s.push(Number(a.fee))}),s}else return[]}),re=o=>{const s={};let a=new j(0);o.forEach(t=>{var I;const g=(I=t==null?void 0:t.object)==null?void 0:I.liquidity;a=a.add(new j(g||0))});const h=[];let C=new j(0);o.forEach(t=>{const g=new j(t.object.liquidity),I=g.gt(0)?new j(g).div(a).mul(100).toString():0,U=qe(I,2);C=C.plus(U);const W=U.split(".");h.push({value:U,int:W[0],decimal:W[1],fee:t.fee})});let i=new j(100).minus(C).toNumber();const p=h.sort((t,g)=>Number(g.decimal)-Number(t.decimal));if(i)for(let t=0;t<p.length&&i;t++)p[t].value=new j(p[t].value).plus(.01).toString(),i=new j(i).minus(.01).toNumber();return o.forEach(t=>{var I;const g=(I=p.find(U=>t.fee===U.fee))==null?void 0:I.value;s[t.fee]={rateText:(g>0&&g<.01?"<0.01":g==0?0:qe(g,2))+"% select",rate:g}}),s},te=q(()=>{if(f.value.poolConfigList&&u.value&&c.value){const o=f.value.poolConfigList.filter(a=>{var h,C,i,p;return a.token_a.address.toUpperCase()===((h=u.value.address)==null?void 0:h.toUpperCase())&&a.token_b.address.toUpperCase()===((C=c.value.address)==null?void 0:C.toUpperCase())||a.token_b.address.toUpperCase()===((i=u.value.address)==null?void 0:i.toUpperCase())&&a.token_a.address.toUpperCase()===((p=c.value.address)==null?void 0:p.toUpperCase())});return re(o)}else return""}),X=q(()=>{var o;return(o=k.value)==null?void 0:o.filterCreatePoolCoin});Xe(()=>{document.addEventListener("click",()=>{F.value=!1})}),Ge(()=>{u.value=null,c.value=null,document.removeEventListener("click",()=>{F.value=!1})}),G(()=>[r,f.value.tokensObj],async([o,s])=>{var a,h;if(console.log("0727####491watch####  feeValue",b),o){const C=(a=r==null?void 0:r.currentRoute)==null?void 0:a.value.name.split("-")[1];ee.value=!C||C=="privide"||C==""?["privide"]:[`${C}`],console.log(ee.value,"##current.value")}(((h=r==null?void 0:r.currentRoute)==null?void 0:h.value.name)=="liquidity-create"||b.query.action=="newposition")&&s&&(u.value||(u.value=f.value.tokensObj[b.query.fromCoin]||await D.value.getTokenBySymbol(s,b.query.fromCoin)),c.value||(c.value=f.value.tokensObj[b.query.toCoin]||await D.value.getTokenBySymbol(s,b.query.toCoin)),console.log(b.query.fee!=="null","######558"),L.value=b.query.fee!=="null"&&b.query.fee?b.query.fee:"",console.log(L.value,"######558"))},{immediate:!0,deep:!0});const l=()=>{var a,h,C,i,p,t,g,I;let o=null;const s=f.value.poolConfigList;for(let U=0;U<s.length;U++){const W=s[U];if(W.token_a.address.toUpperCase()===((h=(a=u==null?void 0:u.value)==null?void 0:a.address)==null?void 0:h.toUpperCase())&&W.token_b.address.toUpperCase()===((i=(C=c==null?void 0:c.value)==null?void 0:C.address)==null?void 0:i.toUpperCase())||W.token_b.address.toUpperCase()===((t=(p=u==null?void 0:u.value)==null?void 0:p.address)==null?void 0:t.toUpperCase())&&W.token_a.address.toUpperCase()===((I=(g=c==null?void 0:c.value)==null?void 0:g.address)==null?void 0:I.toUpperCase())){o=W;break}}return o},S=o=>{var a;const s=l();if(s&&(lo.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,ao.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,u.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,c.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,console.log("0524###test###11111###samePoolInfo###",s),console.log(c.value.address,"#####tokenB.value.address"),Me.value=u.value.address===((a=s==null?void 0:s.token_a)==null?void 0:a.address)),console.log(Me.value,"===>direction.value"),Z.value.includes(o.fee))J.value=o,L.value=o.fee,F.value=!1;else{if(O.value!=="Aptos"&&!X.value[u.value.address]&&!X.value[c.value.address])return;J.value=o,L.value=o.fee,F.value=!1}},M=w(!1),E=w(!1),de=o=>{Q.value=o,o=="coinA"&&b.name=="liquidity-create"?(M.value=!0,E.value=!1):o=="coinB"&&b.name=="liquidity-create"&&(M.value=!1,E.value=!0),console.log(E.value,E.value,o,b.name,"#####selectToken"),oe.value=!0},ue=q(()=>Ie[O.value].hasCreatePool);G(()=>[u.value,c.value,L.value,f.value.poolConfigList,ue.value],([o,s,a,h,C])=>{if(console.log(o,s,a,"watch####  feeValue"),h.length>0){if(o&&s&&a){let i=null;i=h.find(p=>o.address==p.coinA.address&&s.address==p.coinB.address&&a==p.fee||o.address==p.coinB.address&&s.address==p.coinA.address&&a==p.fee),console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress1",i,i==null?void 0:i.fee,a),i?$.value=i?i.address:"":($.value="",C?(console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress411"),r.replace(`/liquidity/create?fromCoin=${o.address}&toCoin=${s.address}&fee=${a}`)):r.replace(`/liquidity/deposit?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${a}&pool=notfount`))}else if(o&&s&&!a){let i=null;const p=h.filter(t=>(o==null?void 0:o.address)==t.coinA.address&&(s==null?void 0:s.address)==t.coinB.address||(o==null?void 0:o.address)==t.coinB.address&&(s==null?void 0:s.address)==t.coinA.address);console.log(p,"poolTvl sort######"),i=p.sort((t,g)=>{var I,U;return((I=g==null?void 0:g.object)==null?void 0:I.liquidity)-((U=t==null?void 0:t.object)==null?void 0:U.liquidity)})[0],console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress2",i,i==null?void 0:i.fee,a),i?$.value=i?i.address:"":($.value="",r.replace(`/liquidity/deposit?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${a}&pool=notfount`))}}});const z=q(()=>{if($.value){const o=$.value;return f.value.poolConfigObj[o]}else return null}),ge=q(()=>{if($.value){const o=$.value;return f.value.poolsObj[o]}else return null}),ce=w("--"),me=w("--");G(()=>[z.value,ge.value],async([o,s])=>{var a,h,C,i;if(o&&!x(o)){((a=r==null?void 0:r.currentRoute)==null?void 0:a.value.name)=="liquidity-deposit"||((h=r==null?void 0:r.currentRoute)==null?void 0:h.value.name)=="liquidity-create"?r.replace(`/liquidity/deposit?poolAddress=${o.address}`):((C=r==null?void 0:r.currentRoute)==null?void 0:C.value.name)=="liquidity-position"?r.replace(`/liquidity/position?poolAddress=${o.address}`):((i=r==null?void 0:r.currentRoute)==null?void 0:i.value.name)=="liquidity-analytics"&&r.replace(`/liquidity/analytics?poolAddress=${o.address}`),u.value=o.needReverse?o.coinB:o.coinA,c.value=o.needReverse?o.coinA:o.coinB,L.value=o.fee,$.value=o.address;const p=o.token_a.decimals,t=o.token_b.decimals;if(k.value.chainName&&k.value.chainName.includes("Aptos")){const g=await D.value.getPool(o.address);ce.value=D.value.TickMath.sqrtPriceX64ToPrice(g.current_sqrt_price,p,t).toString(),me.value=new j(1).div(D.value.TickMath.sqrtPriceX64ToPrice(g.current_sqrt_price,p,t)).toString()}else ce.value=o.price,x(s||{})||(me.value=new j(1).div(We.sqrtPriceX64ToPrice(s.current_sqrt_price,p,t)).toString());console.log(ce.value,"currentPrice.value")}},{immediate:!0,deep:!0});const he=q(()=>f.value.currentPoolMoreInfo);G(()=>[z.value,f.value.addressLpTokens],o=>{o&&no(z.value,f,k)},{immediate:!0,deep:!0}),console.log(he.value,"===>poolMoreInfo"),G(()=>k.value.chainName,(o,s)=>{o&&B.getStatsData(o,k.value.filterCoinsObj)},{immediate:!0});const Ne=o=>{L.value="",Q.value=="coinA"?(u.value=o,(c.value&&c.value.address)==o.address&&(c.value=null,$.value="")):(c.value=o,(u.value&&u.value.address)==o.address&&(u.value=null,$.value=""))},_e=o=>{var s;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((s=f.value.tokensObj[o==null?void 0:o.address])==null?void 0:s.logo_url)||(k.value.theme==="default"?Se("/image/coins/unknown.png"):Se("/image/coins/sui-unknown.png"))},ke=w(),ye=w(),be=w(!1),we=(o,s)=>{console.log(o);const a=localStorage.getItem(o.address);console.log(f.value.tokensObj,"===>pools.value.tokensObj"),console.log(a,"===>coinLocak"),f.value.tokensObj&&f.value.tokensObj[o.address]&&f.value.tokensObj[o.address].isSelfBuilt&&!a&&(s=="fromCoin"&&(ke.value=o),s=="toCoin"&&(ye.value=o),be.value=!0)};return G(()=>[u.value,c.value],([o,s])=>{o&&!x(o)&&we(o,"fromCoin"),s&&!x(s)&&we(s,"toCoin")},{immediate:!0}),{currentPriceReverse:me,Decimal:j,chainName:O,warningFromCoin:ke,warningToCoin:ye,isShowTokenWarning:be,closeTokenWarning:()=>{O.value!=="Aptos"?r.push("/pool/list"):r.push("/pools")},direct:se,currentPrice:ce,creatFeeItem:J,feeValue:L,checkNullObj:x,poolMoreInfo:he,poolTvl:te,isShowFeeList:F,filterCreatePoolCoin:X,route:b,selectFee:S,isCreatePool:Z,feeTierList:ie,currentToken:Q,tokenA:u,tokenB:c,selectToken:de,showCoinSelect:oe,onCoinSelect:Ne,getCoinIcon:_e,currentPoolAddress:$,poolInfo:z,store:k,config:le,t:A,router:r,current:ee,addCommom:K,theme:ne,statsData:ae,pools:f,isCreatePoolFromCoin:M,isCreatePoolToCoin:E}}});const _=e=>(xe("data-v-3ecc8555"),e=e(),eo(),e),co={class:"liquidity-container"},po={class:"back-div"},vo={class:"upgrade-liquidity-header"},mo={class:"left"},fo={class:"select-token-box"},Co={class:"loading-token"},go={class:"name-label"},ho={class:"label"},ko=_(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),yo=[ko],bo={class:"select-token"},wo={class:"name-label"},To={class:"label"},qo=_(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ao=[qo],$o={class:"fee-tier"},Po=_(()=>n("span",null,"Fee tier",-1)),Io={key:0,class:"icon edit-fee-icon","aria-hidden":"true"},So=_(()=>n("use",{"xlink:href":"#icon-btn_edit"},null,-1)),Mo=[So],Uo={key:0,class:"fee-tier-box"},No=["onClick"],_o={key:0,class:"text-active"},Lo={key:1},Ro={key:0,class:"icon fee-disabled","aria-hidden":"true"},jo=_(()=>n("use",{"xlink:href":"#icon-icon-disable"},null,-1)),Oo=[jo],Fo={class:"right"},Bo={key:0,class:"price"},Do={key:0,class:"coin"},Eo={class:"pre-span"},Wo={key:1,class:"coin"},Vo={class:"pre-span"},zo=_(()=>n("div",null,[n("svg",{class:"icon icon-up","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Ho=_(()=>n("div",null,[n("svg",{class:"icon icon-down","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Ko=[zo,Ho],Xo={key:0,class:"header-left header-creat-pool"},Go={key:1,class:"header-left"},Yo={key:2,class:"header-right"},Jo={class:"item"},Qo=_(()=>n("div",{class:"label"},"Pool APR",-1)),Zo={class:"value"},xo={class:"value-border"},es={key:0,class:"apr-hover-content"},os={key:0,class:"isFarming"},ss=_(()=>n("img",{src:io,alt:""},null,-1)),ns={class:"hover-text"},ls=_(()=>n("p",null,"Rewards:",-1)),as={class:"item"},is=_(()=>n("div",{class:"label"},"TVL",-1)),rs={class:"value"},ts={class:"item"},ds=_(()=>n("div",{class:"label"},"Volume (24H)",-1)),us={class:"value"},cs={key:0,class:"no-pool-info"},ps={key:0,src:ro,alt:""},vs={key:1,src:to,alt:""},ms={key:1,class:"router-view-container"};function fs(e,m,A,Ue,r,ee){var ne,f,le,ae,O,D,ie,Z,re,te,X;const oe=Le,F=Re,se=Qe,ve=fe("mail-outlined"),B=je,b=oo,L=fe("appstore-outlined"),u=Ze,c=Oe,J=fe("router-view"),$=Fe,Q=Be,k=Je("image");return d(),v("div",{class:R(["upgrade-liquidity-container",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none-container":""])},[n("div",co,[n("div",po,[T(oe,{label:"Pools",url:e.chainName=="Sui"?"/pool/list":"/pools"},null,8,["url"]),e.$route.name!=="liquidity-create"?(d(),v("div",{key:0,class:R(["linkSwap",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""]),onClick:m[0]||(m[0]=Y(l=>{var S,M;return e.router.push(`/swap?from=${(S=e.tokenA)==null?void 0:S.address}&to=${(M=e.tokenB)==null?void 0:M.address}`)},["stop"]))}," Trade → ",2)):P("",!0)]),n("div",vo,[n("div",mo,[n("div",fo,[n("div",{class:"select-token",onClick:m[1]||(m[1]=Y(l=>e.pools.isTokenLoading?"":e.selectToken("coinA"),["stop"]))},[n("div",Co,[H(n("img",null,null,512),[[k,e.getCoinIcon(e.tokenA)]]),T(F,{address:(ne=e.tokenA)==null?void 0:ne.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),n("div",go,[T(se,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:N(()=>[n("p",ho,y(e.tokenA?e.tokenA.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),n("span",null,y(e.tokenA?((le=e.pools.tokensObj[(f=e.tokenA)==null?void 0:f.address])==null?void 0:le.labels)&&((O=e.pools.tokensObj[(ae=e.tokenA)==null?void 0:ae.address])==null?void 0:O.labels[0]):""),1)]),(d(),v("svg",{class:R(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},yo,2))])]),n("div",bo,[n("div",{class:"loading-token",onClick:m[2]||(m[2]=Y(l=>e.pools.isTokenLoading?"":e.selectToken("coinB"),["stop"]))},[H(n("img",null,null,512),[[k,e.getCoinIcon(e.tokenB)]]),T(F,{address:(D=e.tokenB)==null?void 0:D.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),n("div",wo,[T(se,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:N(()=>[n("p",To,y(e.tokenB?e.tokenB.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),n("span",null,y(e.tokenB?((Z=e.pools.tokensObj[(ie=e.tokenB)==null?void 0:ie.address])==null?void 0:Z.labels)&&((te=e.pools.tokensObj[(re=e.tokenB)==null?void 0:re.address])==null?void 0:te.labels[0]):""),1)]),(d(),v("svg",{class:R(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},Ao,2))])])]),n("div",$o,[n("div",{class:R(["fee-text",[{"fee-tier-action":e.store.chainName!=="Aptos"&&e.tokenA&&e.tokenB},{"no-cursor":e.store.chainName=="Aptos"||!e.tokenA||!e.tokenB}]]),onClick:m[3]||(m[3]=Y(l=>e.store.chainName=="Aptos"||!e.tokenA||!e.tokenB?"":e.isShowFeeList=!e.isShowFeeList,["stop"]))},[Po,n("div",null,[n("p",null,y(e.feeValue?e.feeValue*100:"--")+"%",1),e.store.chainName!=="Aptos"?(d(),v("svg",Io,Mo)):P("",!0)])],2),e.isShowFeeList?(d(),v("div",Uo,[(d(!0),v($e,null,Pe(e.feeTierList,(l,S)=>{var M,E,de,ue,z;return d(),v("div",{key:S,class:R(["fee-item",[e.feeValue==l.fee?"fee-item-active":"",e.isCreatePool.includes(l.fee)?" pool-created":" pool-not-created",e.store.chainName!=="Aptos"&&!e.isCreatePool.includes(l.fee)&&!e.filterCreatePoolCoin[(M=e.tokenA)==null?void 0:M.address]&&!e.filterCreatePoolCoin[(E=e.tokenB)==null?void 0:E.address]?"disabled":""]]),onClick:Y(ge=>e.selectFee(l),["stop"])},[n("p",{class:R(e.isCreatePool&&e.isCreatePool.includes(l.fee)?"text-active":"text-default")},y(l.title),3),n("div",null,[e.isCreatePool&&e.isCreatePool.includes(l.fee)?(d(),v("p",_o,y(e.poolTvl&&e.poolTvl[l.fee]&&((de=e.poolTvl[l.fee])==null?void 0:de.rateText)),1)):P("",!0),e.isCreatePool&&!e.isCreatePool.includes(l.fee)?(d(),v("p",Lo,[pe(y(e.$t("newAdd.notCreated"))+" ",1),e.chainName!=="Aptos"&&!e.isCreatePool.includes(l.fee)&&!e.filterCreatePoolCoin[(ue=e.tokenA)==null?void 0:ue.address]&&!e.filterCreatePoolCoin[(z=e.tokenB)==null?void 0:z.address]?(d(),v("svg",Ro,Oo)):P("",!0)])):P("",!0),n("span",null,y(l.text),1)])],10,No)}),128))])):P("",!0)])]),n("div",Fo,[e.$route.name!=="liquidity-deposit"&&e.$route.name!=="liquidity-create"?(d(),v("div",Bo,[((X=e.poolInfo)!=null&&X.needReverse?!e.direct:e.direct)?(d(),v("div",Do,[H(n("img",null,null,512),[[k,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),n("span",Eo,"1 "+y(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol)+" ≈ ",1),H(n("img",null,null,512),[[k,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),n("span",null,y(e.currentPrice=="--"?"--":("addCommom"in e?e.addCommom:V(K))(("decimalUi"in e?e.decimalUi:V(Ae))(e.currentPrice,6)))+" "+y(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1)])):(d(),v("div",Wo,[H(n("img",null,null,512),[[k,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),n("span",Vo,"1 "+y(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol)+" ≈ ",1),H(n("img",null,null,512),[[k,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),n("span",null,y(e.currentPriceReverse=="--"?"--":("addCommom"in e?e.addCommom:V(K))(("decimalUi"in e?e.decimalUi:V(Ae))(e.currentPriceReverse,6)))+" "+y(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1)])),n("div",{class:"icon-change",onClick:m[4]||(m[4]=l=>e.direct=!e.direct)},Ko)])):P("",!0),e.$route.name!=="liquidity-create"?(d(),v("div",{key:1,class:R(["linkSwap",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""]),onClick:m[5]||(m[5]=Y(l=>{var S,M;return e.router.push(`/swap?from=${(S=e.tokenA)==null?void 0:S.address}&to=${(M=e.tokenB)==null?void 0:M.address}`)},["stop"]))}," Trade → ",2)):P("",!0)])]),n("div",{class:R(["upgrade-liquidity-tab",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""])},[e.$route.name==="liquidity-create"?(d(),v("div",Xo," Create Concentrated Pool ")):(d(),v("div",Go,[T(u,{selectedKeys:e.current,"onUpdate:selectedKeys":m[8]||(m[8]=l=>e.current=l),mode:"horizontal"},{default:N(()=>[T(b,{key:"deposit"},{default:N(()=>{var l;return[T(B,{to:`/liquidity/deposit?poolAddress=${(l=e.poolInfo)==null?void 0:l.address}`},{icon:N(()=>[T(ve)]),default:N(()=>[pe(" Provide Liquidity ")]),_:1},8,["to"])]}),_:1}),T(b,{key:"position",onClick:m[6]||(m[6]=l=>e.current=["position"])},{default:N(()=>{var l;return[T(B,{to:`/liquidity/position?poolAddress=${(l=e.poolInfo)==null?void 0:l.address}`},{icon:N(()=>[T(L)]),default:N(()=>[pe(" Your Liquidity ")]),_:1},8,["to"])]}),_:1}),e.theme=="sui"?(d(),Ce(b,{key:"analytics",onClick:m[7]||(m[7]=l=>e.current=["analytics"])},{default:N(()=>{var l;return[T(B,{to:`/liquidity/analytics?poolAddress=${(l=e.poolInfo)==null?void 0:l.address}`},{icon:N(()=>[T(L)]),default:N(()=>[pe(" Analytics ")]),_:1},8,["to"])]}),_:1})):P("",!0)]),_:1},8,["selectedKeys"])])),e.$route.name!=="liquidity-create"?(d(),v("div",Yo,[n("div",Jo,[Qo,n("div",Zo,[n("div",xo,[n("div",{class:R(["apr-value",e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0?"":"noCursor"])},[n("i",null,y(e.poolMoreInfo.is_display_rewarder?e.poolMoreInfo.aprTotal>0&&e.poolMoreInfo.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:V(K))(e.poolMoreInfo.aprTotal,2):e.poolMoreInfo.apr>0&&e.poolMoreInfo.apr<.01?"<0.01":("addCommom"in e?e.addCommom:V(K))(e.poolMoreInfo.apr,2))+"%",1),e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0?(d(),v("div",es,[T(c,{"l-item":e.poolMoreInfo,"rewarder-info":e.poolMoreInfo.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):P("",!0)],2)]),e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0?(d(),v("div",os,[ss,n("div",ns,[ls,(d(!0),v($e,null,Pe(e.poolMoreInfo.rewardes,l=>{var S;return d(),v("div",{key:l.address,class:R(["rewarder-token",l.day===0?"reward-none":""])},[H(n("img",null,null,512),[[k,e.getCoinIcon((S=e.pools)==null?void 0:S.tokensObj[l.coinAddress])]]),n("span",null,y(`${l.day} ${l.symbol} per day`),1)],2)}),128))])])):P("",!0)])]),n("div",as,[is,n("div",rs,"$"+y(Number(e.poolMoreInfo.liqidity)!==0&&Number(e.poolMoreInfo.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:V(K))(e.poolMoreInfo.liqidity,2)),1)]),n("div",ts,[ds,n("div",us,"$"+y(Number(e.poolMoreInfo.vol)!==0&&Number(e.poolMoreInfo.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:V(K))(e.poolMoreInfo.vol,2)),1)])])):P("",!0)],2)]),!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?(d(),v("div",cs,[e.store.theme=="default"?(d(),v("img",ps)):(d(),v("img",vs)),n("p",null,y(e.$t("newAdd.positionAppear")),1)])):(d(),v("div",ms,[T(J)])),e.showCoinSelect?(d(),Ce($,{key:2,"existing-coins":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"last-select-coin":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"is-create-pool-to-coin":e.isCreatePoolToCoin,"is-create-pool-from-coin":e.isCreatePoolFromCoin,onOnSelect:e.onCoinSelect,onOnClose:m[9]||(m[9]=l=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","is-create-pool-to-coin","is-create-pool-from-coin","onOnSelect"])):P("",!0),e.chainName=="Sui"&&e.isShowTokenWarning?(d(),Ce(Q,{key:3,"from-coin":e.warningFromCoin,"to-coin":e.warningToCoin,onClose:e.closeTokenWarning,onClickContinue:m[10]||(m[10]=l=>e.isShowTokenWarning=!1)},null,8,["from-coin","to-coin","onClose"])):P("",!0)],2)}const Ds=Ye(uo,[["render",fs],["__scopeId","data-v-3ecc8555"]]);export{Ds as default};
