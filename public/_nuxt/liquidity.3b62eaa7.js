import{_ as Le}from"./back.814c3070.js";import{_ as Re}from"./token-warning.6e01bf92.js";import{_ as je}from"./nuxt-link.cd6c689e.js";import{_ as Oe}from"./apr-tips.312d7dfe.js";import{_ as Fe}from"./coin-select.83ba19e7.js";import{_ as Be}from"./token-warning-modal.4d72cbec.js";import{u as De,a as Ee,c as x,e as X,s as Te,T as We,d as Ae}from"./pool.3ecfc54d.js";import{a as Ve,l as Ke,b as ze,r as w,E as Xe,m as T,y as He,C as Qe,D as Q,e as Ye,Q as fe,q as Ge,o as d,f as v,h as n,i as q,z as R,K as Y,x as P,t as z,w as N,v as k,F as $e,s as Pe,u as V,c as Ce,S as Je,U as Ze,j as pe,p as xe,k as eo,V as oo}from"./entry.dec4f018.js";/* empty css              *//* empty css              *//* empty css              */import{u as so,c as Ie}from"./sha256.0d877cc3.js";import{g as no}from"./common-fun.d43fca16.js";import{i as Se}from"./import-icon.de3e6c66.js";import"./decimal.633e31ee.js";import{direction as Me,createPoolFromCoin as lo,createPoolToCoin as io}from"./create-pool-data.254161ab.js";import{D as j}from"./decimal.0e8aa3f1.js";import{_ as ao}from"./icon-Farms_2x.6e42c79d.js";import{_ as ro,a as to}from"./img-no-data_2x.a993c9db.js";/* empty css              */import"./img-no-Positions_2x.33467ecb.js";import"./icon-selected_3x.09e9a6f0.js";import"./precision.a7a6c57b.js";const uo=Ve({setup(e,m){var qe;const{t:A,locale:Ue}=Ke(),r=ze(),ce=w([`${(qe=r==null?void 0:r.currentRoute)==null?void 0:qe.value.name.split("-")[1]}`]),ee=w(!1),F=w(!1),oe=w(!0),ve=De(),B=so(),b=Xe(),L=w(""),u=w(null),p=w(null),G=w(null),$=w(b.query.poolAddress),J=w(""),h=T(()=>B),se=T(()=>B.theme),f=T(()=>ve),ne=T(()=>Ie[h.value.chainName]),le=T(()=>B.statsData),O=T(()=>h.value.chainName),D=T(()=>O.value?Ee(O.value):null),ie=T(()=>[{label:.01+"% "+A("common.feeTier"),title:.01+"% ",fee:1e-4,text:A("newAdd.bestVeryStablePairs")},{label:.05+"% "+A("common.feeTier"),title:.05+"% ",fee:5e-4,text:A("newAdd.bestStablePairs")},h.value.chainName=="Aptos"?{label:.2+"% "+A("common.feeTier"),title:.2+"% ",fee:.002,text:A("newAdd.bestMostPairs")}:{label:.25+"% "+A("common.feeTier"),title:.25+"% ",fee:.0025,text:A("newAdd.bestMostPairs")},h.value.chainName=="Aptos"?{label:.6+"% "+A("common.feeTier"),title:.6+"% ",fee:.006,text:A("newAdd.besteExoticPairs")}:{label:"1% "+A("common.feeTier"),title:"1% ",fee:.01,text:A("newAdd.besteExoticPairs")}]),Z=T(()=>{if(f.value.poolConfigList&&u.value&&p.value){const o=f.value.poolConfigList.filter(i=>{var y,C,a,c;return i.token_a.address.toUpperCase()===((y=u.value.address)==null?void 0:y.toUpperCase())&&i.token_b.address.toUpperCase()===((C=p.value.address)==null?void 0:C.toUpperCase())||i.token_b.address.toUpperCase()===((a=u.value.address)==null?void 0:a.toUpperCase())&&i.token_a.address.toUpperCase()===((c=p.value.address)==null?void 0:c.toUpperCase())}),s=[];return o.forEach(i=>{s.push(Number(i.fee))}),s}else return[]}),ae=o=>{const s={};let i=new j(0);o.forEach(t=>{var I;const g=(I=t==null?void 0:t.object)==null?void 0:I.liquidity;i=i.add(new j(g||0))});const y=[];let C=new j(0);o.forEach(t=>{const g=new j(t.object.liquidity),I=g.gt(0)?new j(g).div(i).mul(100).toString():0,U=Te(I,2);C=C.plus(U);const W=U.split(".");y.push({value:U,int:W[0],decimal:W[1],fee:t.fee})});let a=new j(100).minus(C).toNumber();const c=y.sort((t,g)=>Number(g.decimal)-Number(t.decimal));if(a)for(let t=0;t<c.length&&a;t++)c[t].value=new j(c[t].value).plus(.01).toString(),a=new j(a).minus(.01).toNumber();return o.forEach(t=>{var I;const g=(I=c.find(U=>t.fee===U.fee))==null?void 0:I.value;s[t.fee]={rateText:(g>0&&g<.01?"<0.01":g==0?0:Te(g,2))+"% select",rate:g}}),s},re=T(()=>{if(f.value.poolConfigList&&u.value&&p.value){const o=f.value.poolConfigList.filter(i=>{var y,C,a,c;return i.token_a.address.toUpperCase()===((y=u.value.address)==null?void 0:y.toUpperCase())&&i.token_b.address.toUpperCase()===((C=p.value.address)==null?void 0:C.toUpperCase())||i.token_b.address.toUpperCase()===((a=u.value.address)==null?void 0:a.toUpperCase())&&i.token_a.address.toUpperCase()===((c=p.value.address)==null?void 0:c.toUpperCase())});return ae(o)}else return""}),H=T(()=>{var o;return(o=h.value)==null?void 0:o.filterCreatePoolCoin});He(()=>{document.addEventListener("click",()=>{F.value=!1})}),Qe(()=>{u.value=null,p.value=null,document.removeEventListener("click",()=>{F.value=!1})}),Q(()=>[r,f.value.tokensObj],async([o,s])=>{var i,y;if(console.log("0727####491watch####  feeValue",b),o){const C=(i=r==null?void 0:r.currentRoute)==null?void 0:i.value.name.split("-")[1];ce.value=!C||C=="privide"||C==""?["privide"]:[`${C}`]}(((y=r==null?void 0:r.currentRoute)==null?void 0:y.value.name)=="liquidity-creat-pool"||b.query.action=="newposition")&&s&&(u.value||(u.value=f.value.tokensObj[b.query.fromCoin]||await D.value.getTokenBySymbol(s,b.query.fromCoin)),p.value||(p.value=f.value.tokensObj[b.query.toCoin]||await D.value.getTokenBySymbol(s,b.query.toCoin)),console.log(b.query.fee!=="null","######558"),L.value=b.query.fee!=="null"&&b.query.fee?b.query.fee:"",console.log(L.value,"######558"))},{immediate:!0,deep:!0});const l=()=>{var i,y,C,a,c,t,g,I;let o=null;const s=f.value.poolConfigList;for(let U=0;U<s.length;U++){const W=s[U];if(W.token_a.address.toUpperCase()===((y=(i=u==null?void 0:u.value)==null?void 0:i.address)==null?void 0:y.toUpperCase())&&W.token_b.address.toUpperCase()===((a=(C=p==null?void 0:p.value)==null?void 0:C.address)==null?void 0:a.toUpperCase())||W.token_b.address.toUpperCase()===((t=(c=u==null?void 0:u.value)==null?void 0:c.address)==null?void 0:t.toUpperCase())&&W.token_a.address.toUpperCase()===((I=(g=p==null?void 0:p.value)==null?void 0:g.address)==null?void 0:I.toUpperCase())){o=W;break}}return o},S=o=>{var i;const s=l();if(s&&(lo.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,io.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,u.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,p.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,console.log("0524###test###11111###samePoolInfo###",s),console.log(p.value.address,"#####tokenB.value.address"),Me.value=u.value.address===((i=s==null?void 0:s.token_a)==null?void 0:i.address)),console.log(Me.value,"===>direction.value"),Z.value.includes(o.fee))G.value=o,L.value=o.fee,F.value=!1;else{if(O.value!=="Aptos"&&!H.value[u.value.address]&&!H.value[p.value.address])return;G.value=o,L.value=o.fee,F.value=!1}},M=w(!1),E=w(!1),te=o=>{J.value=o,o=="coinA"&&b.name=="liquidity-creat-pool"?(M.value=!0,E.value=!1):o=="coinB"&&b.name=="liquidity-creat-pool"&&(M.value=!1,E.value=!0),console.log(E.value,E.value,o,b.name,"#####selectToken"),ee.value=!0},de=T(()=>Ie[O.value].hasCreatePool);Q(()=>[u.value,p.value,L.value,f.value.poolConfigList,de.value],([o,s,i,y,C])=>{if(console.log(o,s,i,"watch####  feeValue"),y.length>0){if(o&&s&&i){let a=null;a=y.find(c=>o.address==c.coinA.address&&s.address==c.coinB.address&&i==c.fee||o.address==c.coinB.address&&s.address==c.coinA.address&&i==c.fee),console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress1",a,a==null?void 0:a.fee,i),a?$.value=a?a.address:"":($.value="",C?(console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress411"),r.replace(`/liquidity/creat-pool?fromCoin=${o.address}&toCoin=${s.address}&fee=${i}`)):r.replace(`/liquidity/privide-liquidity?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${i}&pool=notfount`))}else if(o&&s&&!i){let a=null;const c=y.filter(t=>(o==null?void 0:o.address)==t.coinA.address&&(s==null?void 0:s.address)==t.coinB.address||(o==null?void 0:o.address)==t.coinB.address&&(s==null?void 0:s.address)==t.coinA.address);console.log(c,"poolTvl sort######"),a=c.sort((t,g)=>{var I,U;return((I=g==null?void 0:g.object)==null?void 0:I.liquidity)-((U=t==null?void 0:t.object)==null?void 0:U.liquidity)})[0],console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress2",a,a==null?void 0:a.fee,i),a?$.value=a?a.address:"":($.value="",r.replace(`/liquidity/privide-liquidity?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${i}&pool=notfount`))}}});const K=T(()=>{if($.value){const o=$.value;return f.value.poolConfigObj[o]}else return null}),ge=T(()=>{if($.value){const o=$.value;return f.value.poolsObj[o]}else return null}),ue=w("--"),me=w("--");Q(()=>[K.value,ge.value],async([o,s])=>{var i,y,C,a;if(o&&!x(o)){((i=r==null?void 0:r.currentRoute)==null?void 0:i.value.name)=="liquidity-privide-liquidity"||((y=r==null?void 0:r.currentRoute)==null?void 0:y.value.name)=="liquidity-creat-pool"?r.replace(`/liquidity/privide-liquidity?poolAddress=${o.address}`):((C=r==null?void 0:r.currentRoute)==null?void 0:C.value.name)=="liquidity-your-liquidity"?r.replace(`/liquidity/your-liquidity?poolAddress=${o.address}`):((a=r==null?void 0:r.currentRoute)==null?void 0:a.value.name)=="liquidity-analytics"&&r.replace(`/liquidity/analytics?poolAddress=${o.address}`),u.value=o.needReverse?o.coinB:o.coinA,p.value=o.needReverse?o.coinA:o.coinB,L.value=o.fee,$.value=o.address;const c=o.token_a.decimals,t=o.token_b.decimals;if(h.value.chainName&&h.value.chainName.includes("Aptos")){const g=await D.value.getPool(o.address);ue.value=D.value.TickMath.sqrtPriceX64ToPrice(g.current_sqrt_price,c,t).toString(),me.value=new j(1).div(D.value.TickMath.sqrtPriceX64ToPrice(g.current_sqrt_price,c,t)).toString()}else ue.value=o.price,x(s||{})||(me.value=new j(1).div(We.sqrtPriceX64ToPrice(s.current_sqrt_price,c,t)).toString());console.log(ue.value,"currentPrice.value")}},{immediate:!0,deep:!0});const he=T(()=>f.value.currentPoolMoreInfo);Q(()=>[K.value,h.value.addressLpTokens],o=>{o&&no(K.value,f,h)},{deep:!0}),console.log(he.value,"===>poolMoreInfo"),Q(()=>h.value.chainName,(o,s)=>{o&&B.getStatsData(o,h.value.filterCoinsObj)},{immediate:!0});const Ne=o=>{L.value="",J.value=="coinA"?(u.value=o,(p.value&&p.value.address)==o.address&&(p.value=null,$.value="")):(p.value=o,(u.value&&u.value.address)==o.address&&(u.value=null,$.value=""))},_e=o=>{var s;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((s=f.value.tokensObj[o==null?void 0:o.address])==null?void 0:s.logo_url)||(h.value.theme==="default"?Se("/image/coins/unknown.png"):Se("/image/coins/sui-unknown.png"))},ye=w(),ke=w(),be=w(!1),we=(o,s)=>{console.log(o);const i=localStorage.getItem(o.address);console.log(f.value.tokensObj,"===>pools.value.tokensObj"),console.log(i,"===>coinLocak"),f.value.tokensObj&&f.value.tokensObj[o.address]&&f.value.tokensObj[o.address].isSelfBuilt&&!i&&(s=="fromCoin"&&(ye.value=o),s=="toCoin"&&(ke.value=o),be.value=!0)};return Q(()=>[u.value,p.value],([o,s])=>{o&&!x(o)&&we(o,"fromCoin"),s&&!x(s)&&we(s,"toCoin")},{immediate:!0}),{currentPriceReverse:me,Decimal:j,chainName:O,warningFromCoin:ye,warningToCoin:ke,isShowTokenWarning:be,closeTokenWarning:()=>{O.value!=="Aptos"?r.push("/pool/list"):r.push("/pools")},direct:oe,currentPrice:ue,creatFeeItem:G,feeValue:L,checkNullObj:x,poolMoreInfo:he,poolTvl:re,isShowFeeList:F,filterCreatePoolCoin:H,route:b,selectFee:S,isCreatePool:Z,feeTierList:ie,currentToken:J,tokenA:u,tokenB:p,selectToken:te,showCoinSelect:ee,onCoinSelect:Ne,getCoinIcon:_e,currentPoolAddress:$,poolInfo:K,store:h,config:ne,t:A,router:r,current:ce,addCommom:X,theme:se,statsData:le,pools:f,isCreatePoolFromCoin:M,isCreatePoolToCoin:E}}});const _=e=>(xe("data-v-80df4c7c"),e=e(),eo(),e),po={class:"liquidity-container"},co={class:"back-div"},vo={class:"upgrade-liquidity-header"},mo={class:"left"},fo={class:"select-token-box"},Co={class:"loading-token"},go={class:"name-label"},ho={class:"label"},yo=_(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),ko=[yo],bo={class:"select-token"},wo={class:"name-label"},qo={class:"label"},To=_(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ao=[To],$o={class:"fee-tier"},Po=_(()=>n("span",null,"Fee tier",-1)),Io={key:0,class:"icon edit-fee-icon","aria-hidden":"true"},So=_(()=>n("use",{"xlink:href":"#icon-btn_edit"},null,-1)),Mo=[So],Uo={key:0,class:"fee-tier-box"},No=["onClick"],_o={key:0,class:"text-active"},Lo={key:1},Ro={key:0,class:"icon fee-disabled","aria-hidden":"true"},jo=_(()=>n("use",{"xlink:href":"#icon-icon-disable"},null,-1)),Oo=[jo],Fo={class:"right"},Bo={key:0,class:"price"},Do={key:0,class:"coin"},Eo={class:"pre-span"},Wo={key:1,class:"coin"},Vo={class:"pre-span"},Ko=_(()=>n("div",null,[n("svg",{class:"icon icon-up","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),zo=_(()=>n("div",null,[n("svg",{class:"icon icon-down","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Xo=[Ko,zo],Ho={key:0,class:"header-left header-creat-pool"},Qo={key:1,class:"header-left"},Yo={key:2,class:"header-right"},Go={class:"item"},Jo=_(()=>n("div",{class:"label"},"APR",-1)),Zo={class:"value"},xo={class:"value-border"},es={key:0,class:"apr-hover-content"},os={key:0,class:"isFarming"},ss=_(()=>n("img",{src:ao,alt:""},null,-1)),ns={class:"hover-text"},ls=_(()=>n("p",null,"Rewards:",-1)),is={class:"item"},as=_(()=>n("div",{class:"label"},"TVL",-1)),rs={class:"value"},ts={class:"item"},ds=_(()=>n("div",{class:"label"},"Volume (24H)",-1)),us={class:"value"},ps={key:0,class:"no-pool-info"},cs={key:0,src:ro,alt:""},vs={key:1,src:to,alt:""},ms={key:1,class:"router-view-container"};function fs(e,m,A,Ue,r,ce){var se,f,ne,le,O,D,ie,Z,ae,re,H;const ee=Le,F=Re,oe=Je,ve=fe("mail-outlined"),B=je,b=oo,L=fe("appstore-outlined"),u=Ze,p=Oe,G=fe("router-view"),$=Fe,J=Be,h=Ge("image");return d(),v("div",{class:R(["upgrade-liquidity-container",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none-container":""])},[n("div",po,[n("div",co,[q(ee,{label:"Pools",url:e.chainName=="Sui"?"/pool/list":"/pools"},null,8,["url"]),e.$route.name!=="liquidity-creat-pool"?(d(),v("div",{key:0,class:R(["linkSwap",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""]),onClick:m[0]||(m[0]=Y(l=>{var S,M;return e.router.push(`/swap?from=${(S=e.tokenA)==null?void 0:S.address}&to=${(M=e.tokenB)==null?void 0:M.address}`)},["stop"]))}," Trade → ",2)):P("",!0)]),n("div",vo,[n("div",mo,[n("div",fo,[n("div",{class:"select-token",onClick:m[1]||(m[1]=Y(l=>e.pools.isTokenLoading?"":e.selectToken("coinA"),["stop"]))},[n("div",Co,[z(n("img",null,null,512),[[h,e.getCoinIcon(e.tokenA)]]),q(F,{address:(se=e.tokenA)==null?void 0:se.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),n("div",go,[q(oe,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:N(()=>[n("p",ho,k(e.tokenA?e.tokenA.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),n("span",null,k(e.tokenA?((ne=e.pools.tokensObj[(f=e.tokenA)==null?void 0:f.address])==null?void 0:ne.labels)&&((O=e.pools.tokensObj[(le=e.tokenA)==null?void 0:le.address])==null?void 0:O.labels[0]):""),1)]),(d(),v("svg",{class:R(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},ko,2))])]),n("div",bo,[n("div",{class:"loading-token",onClick:m[2]||(m[2]=Y(l=>e.pools.isTokenLoading?"":e.selectToken("coinB"),["stop"]))},[z(n("img",null,null,512),[[h,e.getCoinIcon(e.tokenB)]]),q(F,{address:(D=e.tokenB)==null?void 0:D.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),n("div",wo,[q(oe,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:N(()=>[n("p",qo,k(e.tokenB?e.tokenB.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),n("span",null,k(e.tokenB?((Z=e.pools.tokensObj[(ie=e.tokenB)==null?void 0:ie.address])==null?void 0:Z.labels)&&((re=e.pools.tokensObj[(ae=e.tokenB)==null?void 0:ae.address])==null?void 0:re.labels[0]):""),1)]),(d(),v("svg",{class:R(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},Ao,2))])])]),n("div",$o,[n("div",{class:R(["fee-text",[{"fee-tier-action":e.store.chainName!=="Aptos"&&e.tokenA&&e.tokenB},{"no-cursor":e.store.chainName=="Aptos"||!e.tokenA||!e.tokenB}]]),onClick:m[3]||(m[3]=Y(l=>e.store.chainName=="Aptos"||!e.tokenA||!e.tokenB?"":e.isShowFeeList=!e.isShowFeeList,["stop"]))},[Po,n("div",null,[n("p",null,k(e.feeValue?e.feeValue*100:"--")+"%",1),e.store.chainName!=="Aptos"?(d(),v("svg",Io,Mo)):P("",!0)])],2),e.isShowFeeList?(d(),v("div",Uo,[(d(!0),v($e,null,Pe(e.feeTierList,(l,S)=>{var M,E,te,de,K;return d(),v("div",{key:S,class:R(["fee-item",[e.feeValue==l.fee?"fee-item-active":"",e.isCreatePool.includes(l.fee)?" pool-created":" pool-not-created",e.store.chainName!=="Aptos"&&!e.isCreatePool.includes(l.fee)&&!e.filterCreatePoolCoin[(M=e.tokenA)==null?void 0:M.address]&&!e.filterCreatePoolCoin[(E=e.tokenB)==null?void 0:E.address]?"disabled":""]]),onClick:Y(ge=>e.selectFee(l),["stop"])},[n("p",{class:R(e.isCreatePool&&e.isCreatePool.includes(l.fee)?"text-active":"text-default")},k(l.title),3),n("div",null,[e.isCreatePool&&e.isCreatePool.includes(l.fee)?(d(),v("p",_o,k(e.poolTvl&&e.poolTvl[l.fee]&&((te=e.poolTvl[l.fee])==null?void 0:te.rateText)),1)):P("",!0),e.isCreatePool&&!e.isCreatePool.includes(l.fee)?(d(),v("p",Lo,[pe(k(e.$t("newAdd.notCreated"))+" ",1),e.chainName!=="Aptos"&&!e.isCreatePool.includes(l.fee)&&!e.filterCreatePoolCoin[(de=e.tokenA)==null?void 0:de.address]&&!e.filterCreatePoolCoin[(K=e.tokenB)==null?void 0:K.address]?(d(),v("svg",Ro,Oo)):P("",!0)])):P("",!0),n("span",null,k(l.text),1)])],10,No)}),128))])):P("",!0)])]),n("div",Fo,[e.$route.name!=="liquidity-privide-liquidity"&&e.$route.name!=="liquidity-creat-pool"?(d(),v("div",Bo,[((H=e.poolInfo)!=null&&H.needReverse?!e.direct:e.direct)?(d(),v("div",Do,[z(n("img",null,null,512),[[h,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),n("span",Eo,"1 "+k(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol)+" ≈ ",1),z(n("img",null,null,512),[[h,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),n("span",null,k(e.currentPrice=="--"?"--":("addCommom"in e?e.addCommom:V(X))(("decimalUi"in e?e.decimalUi:V(Ae))(e.currentPrice,6)))+" "+k(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1)])):(d(),v("div",Wo,[z(n("img",null,null,512),[[h,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),n("span",Vo,"1 "+k(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol)+" ≈ ",1),z(n("img",null,null,512),[[h,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),n("span",null,k(e.currentPriceReverse=="--"?"--":("addCommom"in e?e.addCommom:V(X))(("decimalUi"in e?e.decimalUi:V(Ae))(e.currentPriceReverse,6)))+" "+k(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1)])),n("div",{class:"icon-change",onClick:m[4]||(m[4]=l=>e.direct=!e.direct)},Xo)])):P("",!0),e.$route.name!=="liquidity-creat-pool"?(d(),v("div",{key:1,class:R(["linkSwap",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""]),onClick:m[5]||(m[5]=Y(l=>{var S,M;return e.router.push(`/swap?from=${(S=e.tokenA)==null?void 0:S.address}&to=${(M=e.tokenB)==null?void 0:M.address}`)},["stop"]))}," Trade → ",2)):P("",!0)])]),n("div",{class:R(["upgrade-liquidity-tab",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""])},[e.$route.name==="liquidity-creat-pool"?(d(),v("div",Ho," Create Concentrated Pool ")):(d(),v("div",Qo,[q(u,{selectedKeys:e.current,"onUpdate:selectedKeys":m[8]||(m[8]=l=>e.current=l),mode:"horizontal"},{default:N(()=>[q(b,{key:"privide"},{default:N(()=>{var l;return[q(B,{to:`/liquidity/privide-liquidity?poolAddress=${(l=e.poolInfo)==null?void 0:l.address}`},{icon:N(()=>[q(ve)]),default:N(()=>[pe(" Privide Liquidity ")]),_:1},8,["to"])]}),_:1}),q(b,{key:"your",onClick:m[6]||(m[6]=l=>e.current=["your"])},{default:N(()=>{var l;return[q(B,{to:`/liquidity/your-liquidity?poolAddress=${(l=e.poolInfo)==null?void 0:l.address}`},{icon:N(()=>[q(L)]),default:N(()=>[pe(" Your Liquidity ")]),_:1},8,["to"])]}),_:1}),e.theme=="sui"?(d(),Ce(b,{key:"analytics",onClick:m[7]||(m[7]=l=>e.current=["analytics"])},{default:N(()=>{var l;return[q(B,{to:`/liquidity/analytics?poolAddress=${(l=e.poolInfo)==null?void 0:l.address}`},{icon:N(()=>[q(L)]),default:N(()=>[pe(" Analytics ")]),_:1},8,["to"])]}),_:1})):P("",!0)]),_:1},8,["selectedKeys"])])),e.$route.name!=="liquidity-creat-pool"?(d(),v("div",Yo,[n("div",Go,[Jo,n("div",Zo,[n("div",xo,[n("div",{class:R(["apr-value",e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0?"":"noCursor"])},[n("i",null,k(e.poolMoreInfo.is_display_rewarder?e.poolMoreInfo.aprTotal>0&&e.poolMoreInfo.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:V(X))(e.poolMoreInfo.aprTotal,2):e.poolMoreInfo.apr>0&&e.poolMoreInfo.apr<.01?"<0.01":("addCommom"in e?e.addCommom:V(X))(e.poolMoreInfo.apr,2))+"%",1),e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0?(d(),v("div",es,[q(p,{"l-item":e.poolMoreInfo,"rewarder-info":e.poolMoreInfo.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):P("",!0)],2)]),e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0?(d(),v("div",os,[ss,n("div",ns,[ls,(d(!0),v($e,null,Pe(e.poolMoreInfo.rewardes,l=>{var S;return d(),v("div",{key:l.address,class:R(["rewarder-token",l.day===0?"reward-none":""])},[z(n("img",null,null,512),[[h,e.getCoinIcon((S=e.pools)==null?void 0:S.tokensObj[l.coinAddress])]]),n("span",null,k(`${l.day} ${l.symbol} per day`),1)],2)}),128))])])):P("",!0)])]),n("div",is,[as,n("div",rs,"$"+k(Number(e.poolMoreInfo.liqidity)!==0&&Number(e.poolMoreInfo.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:V(X))(e.poolMoreInfo.liqidity,2)),1)]),n("div",ts,[ds,n("div",us,"$"+k(Number(e.poolMoreInfo.vol)!==0&&Number(e.poolMoreInfo.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:V(X))(e.poolMoreInfo.vol,2)),1)])])):P("",!0)],2)]),!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?(d(),v("div",ps,[e.store.theme=="default"?(d(),v("img",cs)):(d(),v("img",vs)),n("p",null,k(e.$t("newAdd.positionAppear")),1)])):(d(),v("div",ms,[q(G)])),e.showCoinSelect?(d(),Ce($,{key:2,"existing-coins":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"last-select-coin":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"is-create-pool-to-coin":e.isCreatePoolToCoin,"is-create-pool-from-coin":e.isCreatePoolFromCoin,onOnSelect:e.onCoinSelect,onOnClose:m[9]||(m[9]=l=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","is-create-pool-to-coin","is-create-pool-from-coin","onOnSelect"])):P("",!0),e.chainName=="Sui"&&e.isShowTokenWarning?(d(),Ce(J,{key:3,"from-coin":e.warningFromCoin,"to-coin":e.warningToCoin,onClose:e.closeTokenWarning,onClickContinue:m[10]||(m[10]=l=>e.isShowTokenWarning=!1)},null,8,["from-coin","to-coin","onClose"])):P("",!0)],2)}const Ds=Ye(uo,[["render",fs],["__scopeId","data-v-80df4c7c"]]);export{Ds as default};
