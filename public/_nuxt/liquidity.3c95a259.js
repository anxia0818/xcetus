import{_ as De}from"./back.1b95a29a.js";import{_ as Ee}from"./token-warning.57884278.js";import{_ as We}from"./apr-tips.42d97c4b.js";import{_ as Ye}from"./coin-select.5afd040e.js";import{_ as Ve}from"./token-warning-modal.d2879e5b.js";import{u as ze,c as ee,a as E,s as fe,e as He,T as Xe,d as qe}from"./pool.29982694.js";import{a as Ke,y as Qe,b as Ge,r as T,m as Je,l as y,H as Ze,K as xe,q as Q,e as eo,Q as oo,s as so,o as d,f as p,h as n,i as Y,A as N,z as G,x as $,t as J,w as we,v as g,F as Ae,E as Pe,u as F,c as $e,M as no,j as lo,p as ao,k as io}from"./entry.bc47c957.js";/* empty css              */import{u as ro,c as Se}from"./sha256.e607382f.js";import{g as to}from"./common-fun.761c6476.js";import{i as Ie}from"./import-icon.de3e6c66.js";import{direction as Me,createPoolFromCoin as uo,createPoolToCoin as co}from"./create-pool-data.d000b680.js";import{u as po}from"./farms.ad791865.js";import{D as U}from"./decimal.0bdeb344.js";import{_ as vo,a as fo}from"./img-no-data_2x.05154651.js";import"./icon_rewards_2x.246398bf.js";/* empty css              *//* empty css              */import"./img-no-Positions_2x.ea6f5e5a.js";import"./img-no-Positions_2x.bf007236.js";import"./icon-selected_3x.09e9a6f0.js";import"./precision.a7a6c57b.js";const mo=Ke({setup(e,k){var Te;const{t:S,locale:Le}=Qe(),a=Ge(),me=["Provide Liquidity","Your Liquidity","Analytics"],V=T(`${(Te=a==null?void 0:a.currentRoute)==null?void 0:Te.value.name.split("-")[1]}`||"Provide Liquidity"),Z=T(!1),B=T(!1),pe=T(!0),ve=ze(),z=ro(),b=Je(),A=T(""),u=T(null),c=T(null),H=T(null),q=T(b.query.poolAddress),X=T(""),P=y(()=>z),oe=y(()=>z.theme),f=y(()=>ve),se=y(()=>Se[P.value.chainName]),ne=y(()=>z.statsData),R=y(()=>P.value.chainName),_=y(()=>R.value?He(R.value):null),le=y(()=>[{label:.01+"% "+S("common.feeTier"),title:.01+"% ",fee:1e-4,text:S("newAdd.bestVeryStablePairs")},{label:.05+"% "+S("common.feeTier"),title:.05+"% ",fee:5e-4,text:S("newAdd.bestStablePairs")},P.value.chainName=="Aptos"?{label:.2+"% "+S("common.feeTier"),title:.2+"% ",fee:.002,text:S("newAdd.bestMostPairs")}:{label:.25+"% "+S("common.feeTier"),title:.25+"% ",fee:.0025,text:S("newAdd.bestMostPairs")},P.value.chainName=="Aptos"?{label:.6+"% "+S("common.feeTier"),title:.6+"% ",fee:.006,text:S("newAdd.besteExoticPairs")}:{label:"1% "+S("common.feeTier"),title:"1% ",fee:.01,text:S("newAdd.besteExoticPairs")}]),x=y(()=>{if(f.value.poolConfigList&&u.value&&c.value){const o=f.value.poolConfigList.filter(l=>{var C,m,i,v;return l.token_a.address.toUpperCase()===((C=u.value.address)==null?void 0:C.toUpperCase())&&l.token_b.address.toUpperCase()===((m=c.value.address)==null?void 0:m.toUpperCase())||l.token_b.address.toUpperCase()===((i=u.value.address)==null?void 0:i.toUpperCase())&&l.token_a.address.toUpperCase()===((v=c.value.address)==null?void 0:v.toUpperCase())}),s=[];return o.forEach(l=>{s.push(Number(l.fee))}),s}else return[]}),ae=o=>{const s={};let l=new U(0);o.forEach(r=>{var M;const h=(M=r==null?void 0:r.object)==null?void 0:M.liquidity;l=l.add(new U(h||0))});const C=[];let m=new U(0);o.forEach(r=>{const h=new U(r.object.liquidity),M=h.gt(0)?new U(h).div(l).mul(100).toString():0,L=fe(M,2);m=m.plus(L);const D=L.split(".");C.push({value:L,int:D[0],decimal:D[1],fee:r.fee})});let i=new U(100).minus(m).toNumber();const v=C.sort((r,h)=>Number(h.decimal)-Number(r.decimal));if(i)for(let r=0;r<v.length&&i;r++)v[r].value=new U(v[r].value).plus(.01).toString(),i=new U(i).minus(.01).toNumber();return o.forEach(r=>{var M;const h=(M=v.find(L=>r.fee===L.fee))==null?void 0:M.value;s[r.fee]={rateText:(h>0&&h<.01?"<0.01":h==0?0:fe(h,2))+"% select",rate:h}}),s},ie=y(()=>{if(f.value.poolConfigList&&u.value&&c.value){const o=f.value.poolConfigList.filter(l=>{var C,m,i,v;return l.token_a.address.toUpperCase()===((C=u.value.address)==null?void 0:C.toUpperCase())&&l.token_b.address.toUpperCase()===((m=c.value.address)==null?void 0:m.toUpperCase())||l.token_b.address.toUpperCase()===((i=u.value.address)==null?void 0:i.toUpperCase())&&l.token_a.address.toUpperCase()===((v=c.value.address)==null?void 0:v.toUpperCase())});return ae(o)}else return""}),K=y(()=>{var o;return(o=P.value)==null?void 0:o.filterCreatePoolCoin});Ze(()=>{document.addEventListener("click",()=>{B.value=!1})}),xe(()=>{u.value=null,c.value=null,document.removeEventListener("click",()=>{B.value=!1})}),Q(()=>[a,f.value.tokensObj],async([o,s])=>{var l,C;if(console.log("0727####491watch####  feeValue",b),o){const m=(l=a==null?void 0:a.currentRoute)==null?void 0:l.value.name.split("-")[1];V.value=!m||m=="privide"||m==""?"Provide Liquidity":m=="position"?"Your Liquidity":m=="analytics"?"Analytics":"Provide Liquidity",console.log(V.value,"##current.value")}(((C=a==null?void 0:a.currentRoute)==null?void 0:C.value.name)=="liquidity-create"||b.query.action=="newposition")&&s&&(u.value||(u.value=f.value.tokensObj[b.query.fromCoin]||await _.value.getTokenBySymbol(s,b.query.fromCoin)),c.value||(c.value=f.value.tokensObj[b.query.toCoin]||await _.value.getTokenBySymbol(s,b.query.toCoin)),console.log(b.query.fee!=="null","######558"),A.value=b.query.fee!=="null"&&b.query.fee?b.query.fee:"",console.log(A.value,"######558"))},{immediate:!0,deep:!0});const re=()=>{var l,C,m,i,v,r,h,M;let o=null;const s=f.value.poolConfigList;for(let L=0;L<s.length;L++){const D=s[L];if(D.token_a.address.toUpperCase()===((C=(l=u==null?void 0:u.value)==null?void 0:l.address)==null?void 0:C.toUpperCase())&&D.token_b.address.toUpperCase()===((i=(m=c==null?void 0:c.value)==null?void 0:m.address)==null?void 0:i.toUpperCase())||D.token_b.address.toUpperCase()===((r=(v=u==null?void 0:u.value)==null?void 0:v.address)==null?void 0:r.toUpperCase())&&D.token_a.address.toUpperCase()===((M=(h=c==null?void 0:c.value)==null?void 0:h.address)==null?void 0:M.toUpperCase())){o=D;break}}return o},te=o=>{var l;const s=re();if(s&&(uo.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,co.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,u.value=s.needReverse?s==null?void 0:s.token_b:s==null?void 0:s.token_a,c.value=s.needReverse?s==null?void 0:s.token_a:s==null?void 0:s.token_b,console.log("0524###test###11111###samePoolInfo###",s),console.log(c.value.address,"#####tokenB.value.address"),Me.value=u.value.address===((l=s==null?void 0:s.token_a)==null?void 0:l.address)),console.log(Me.value,"===>direction.value"),x.value.includes(o.fee))H.value=o,A.value=o.fee,B.value=!1;else{if(R.value!=="Aptos"&&!K.value[u.value.address]&&!K.value[c.value.address])return;H.value=o,A.value=o.fee,B.value=!1}},t=T(!1),I=T(!1),j=o=>{X.value=o,o=="coinA"&&b.name=="liquidity-create"?(t.value=!0,I.value=!1):o=="coinB"&&b.name=="liquidity-create"&&(t.value=!1,I.value=!0),console.log(I.value,I.value,o,b.name,"#####selectToken"),Z.value=!0},de=y(()=>Se[R.value].hasCreatePool);Q(()=>[u.value,c.value,A.value,f.value.poolConfigList,de.value],([o,s,l,C,m])=>{if(console.log(o,s,l,"watch####  feeValue"),C.length>0){if(o&&s&&l){let i=null;i=C.find(v=>o.address==v.coinA.address&&s.address==v.coinB.address&&l==v.fee||o.address==v.coinB.address&&s.address==v.coinA.address&&l==v.fee),console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress1",i,i==null?void 0:i.fee,l),i?q.value=i?i.address:"":(q.value="",m?(console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress411"),a.replace(`/liquidity/create?fromCoin=${o.address}&toCoin=${s.address}&fee=${l}`)):a.replace(`/liquidity/deposit?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${l}&pool=notfount`))}else if(o&&s&&!l){let i=null;const v=C.filter(r=>(o==null?void 0:o.address)==r.coinA.address&&(s==null?void 0:s.address)==r.coinB.address||(o==null?void 0:o.address)==r.coinB.address&&(s==null?void 0:s.address)==r.coinA.address);console.log(v,"poolTvl sort######"),i=v.sort((r,h)=>{var M,L;return((M=h==null?void 0:h.object)==null?void 0:M.liquidity)-((L=r==null?void 0:r.object)==null?void 0:L.liquidity)})[0],console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress2",i,i==null?void 0:i.fee,l),i?q.value=i?i.address:"":(q.value="",a.replace(`/liquidity/deposit?fromCoin=${o==null?void 0:o.address}&toCoin=${s==null?void 0:s.address}&fee=${l}&pool=notfount`))}}});const w=y(()=>{if(q.value){const o=q.value;return f.value.poolConfigObj[o]}else return null}),ue=y(()=>{if(q.value){const o=q.value;return f.value.poolsObj[o]}else return null}),W=T("--"),ce=T("--");Q(()=>[w.value,ue.value],async([o,s])=>{var l,C,m,i;if(o&&!ee(o)){((l=a==null?void 0:a.currentRoute)==null?void 0:l.value.name)=="liquidity-deposit"||((C=a==null?void 0:a.currentRoute)==null?void 0:C.value.name)=="liquidity-create"?a.replace(`/liquidity/deposit?poolAddress=${o.address}`):((m=a==null?void 0:a.currentRoute)==null?void 0:m.value.name)=="liquidity-position"?a.replace(`/liquidity/position?poolAddress=${o.address}`):((i=a==null?void 0:a.currentRoute)==null?void 0:i.value.name)=="liquidity-analytics"&&a.replace(`/liquidity/analytics?poolAddress=${o.address}`),u.value=o.needReverse?o.coinB:o.coinA,c.value=o.needReverse?o.coinA:o.coinB,A.value=o.fee,q.value=o.address;const v=o.token_a.decimals,r=o.token_b.decimals;if(P.value.chainName&&P.value.chainName.includes("Aptos")){const h=await _.value.getPool(o.address);W.value=_.value.TickMath.sqrtPriceX64ToPrice(h.current_sqrt_price,v,r).toString(),ce.value=new U(1).div(_.value.TickMath.sqrtPriceX64ToPrice(h.current_sqrt_price,v,r)).toString()}else W.value=o.price,ee(s||{})||(ce.value=new U(1).div(Xe.sqrtPriceX64ToPrice(s.current_sqrt_price,v,r)).toString());console.log(W.value,"currentPrice.value")}},{immediate:!0,deep:!0});const he=y(()=>f.value.currentPoolMoreInfo),Ne=y(()=>be.value.farmsPoolObj[q.value]);Q(()=>[w.value,f.value.addressLpTokens],o=>{o&&to(w.value,f,P)},{immediate:!0,deep:!0}),console.log(he.value,"===>poolMoreInfo"),Q(()=>P.value.chainName,(o,s)=>{o&&z.getStatsData(o,P.value.filterCoinsObj)},{immediate:!0});const Ue=o=>{A.value="",X.value=="coinA"?(u.value=o,(c.value&&c.value.address)==o.address&&(c.value=null,q.value="")):(c.value=o,(u.value&&u.value.address)==o.address&&(u.value=null,q.value=""))},je=o=>{var s;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((s=f.value.tokensObj[o==null?void 0:o.address])==null?void 0:s.logo_url)||(P.value.theme==="default"?Ie("/image/coins/unknown.png"):Ie("/image/coins/sui-unknown.png"))},ge=T(),Ce=T(),ye=T(!1),ke=(o,s)=>{console.log(o);const l=localStorage.getItem(o.address);console.log(f.value.tokensObj,"===>pools.value.tokensObj"),console.log(l,"===>coinLocak"),f.value.tokensObj&&f.value.tokensObj[o.address]&&f.value.tokensObj[o.address].isSelfBuilt&&!l&&(s=="fromCoin"&&(ge.value=o),s=="toCoin"&&(Ce.value=o),ye.value=!0)};Q(()=>[u.value,c.value],([o,s])=>{o&&!ee(o)&&ke(o,"fromCoin"),s&&!ee(s)&&ke(s,"toCoin")},{immediate:!0});const Oe=()=>{R.value!=="Aptos"?a.push("/pool/list"):a.push("/pools")},Re=po(),be=y(()=>Re),Fe=y(()=>be.value.farmsPoolObj),Be=o=>{V.value=o,o=="Provide Liquidity"&&a.push(`/liquidity/deposit?poolAddress=${w==null?void 0:w.value.address}`),o=="Your Liquidity"&&a.push(`/liquidity/position?poolAddress=${w==null?void 0:w.value.address}`),o=="Analytics"&&a.push(`/liquidity/analytics?poolAddress=${w==null?void 0:w.value.address}`)},_e=y(()=>f.value.poolPositions);return{currentTab:V,changeTab:Be,tabList:me,currentPriceReverse:ce,Decimal:U,chainName:R,warningFromCoin:ge,warningToCoin:Ce,isShowTokenWarning:ye,closeTokenWarning:Oe,direct:pe,currentPrice:W,creatFeeItem:H,feeValue:A,checkNullObj:ee,poolMoreInfo:he,poolTvl:ie,isShowFeeList:B,filterCreatePoolCoin:K,route:b,selectFee:te,isCreatePool:x,feeTierList:le,currentToken:X,tokenA:u,tokenB:c,selectToken:j,showCoinSelect:Z,onCoinSelect:Ue,getCoinIcon:je,currentPoolAddress:q,poolInfo:w,store:P,config:se,t:S,router:a,addCommom:E,theme:oe,statsData:ne,pools:f,isCreatePoolFromCoin:t,isCreatePoolToCoin:I,farmsPoolObj:Fe,sFixD:fe,farmsPoolInfo:Ne,poolPositions:_e}}});const O=e=>(ao("data-v-34f3c1a9"),e=e(),io(),e),ho={class:"liquidity-container"},go={class:"back-div"},Co={class:"upgrade-liquidity-header"},yo={class:"left"},ko={class:"select-token-box"},bo={class:"loading-token"},To={class:"name-label"},qo={class:"label"},wo=O(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ao=[wo],Po={class:"select-token"},$o={class:"name-label"},So={class:"label"},Io=O(()=>n("use",{"xlink:href":"#icon-icon_on"},null,-1)),Mo=[Io],Lo={class:"fee-tier"},No=O(()=>n("span",null,"Fee tier",-1)),Uo={key:0,class:"icon edit-fee-icon","aria-hidden":"true"},jo=O(()=>n("use",{"xlink:href":"#icon-btn_edit"},null,-1)),Oo=[jo],Ro={key:0,class:"fee-tier-box"},Fo=["onClick"],Bo={key:0,class:"text-active"},_o={key:1},Do={key:0,class:"icon fee-disabled","aria-hidden":"true"},Eo=O(()=>n("use",{"xlink:href":"#icon-icon-disable"},null,-1)),Wo=[Eo],Yo={class:"right"},Vo={key:0,class:"price"},zo={key:0,class:"coin"},Ho={class:"pre-span"},Xo={key:1,class:"coin"},Ko={class:"pre-span"},Qo=O(()=>n("div",null,[n("svg",{class:"icon icon-up","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Go=O(()=>n("div",null,[n("svg",{class:"icon icon-down","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Jo=[Qo,Go],Zo={key:0,class:"header-left header-creat-pool"},xo={key:1,class:"header-left"},es=["onClick"],os={key:0},ss={key:1,class:"position-length"},ns={key:2,class:"header-right"},ls={class:"poolApr"},as={class:"item item-apr"},is=O(()=>n("div",{class:"label"},"Pool APR",-1)),rs={class:"value"},ts={class:"value-border"},ds={style:{color:"#fff",border:"none"}},us={key:0,style:{"font-size":"12px",border:"none"}},cs={key:1,class:"apr-hover-content"},ps={class:"item"},vs=O(()=>n("div",{class:"label"},"TVL",-1)),fs={class:"value"},ms={class:"item"},hs=O(()=>n("div",{class:"label"},"Volume (24H)",-1)),gs={class:"value"},Cs={key:0,class:"no-pool-info"},ys={key:0,src:vo,alt:""},ks={key:1,src:fo,alt:""},bs={key:1,class:"router-view-container"};function Ts(e,k,S,Le,a,me){var u,c,H,q,X,P,oe,f,se,ne,R,_,le,x,ae,ie,K,re,te;const V=De,Z=Ee,B=no,pe=We,ve=oo("router-view"),z=Ye,b=Ve,A=so("image");return d(),p("div",{class:N(["upgrade-liquidity-container",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none-container":""])},[n("div",ho,[n("div",go,[Y(V,{label:"Pools",url:e.chainName=="Sui"?"/pool/list":"/pools"},null,8,["url"]),e.$route.name!=="liquidity-create"?(d(),p("div",{key:0,class:N(["linkSwap",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""]),onClick:k[0]||(k[0]=G(t=>{var I,j;return e.router.push(`/swap?from=${(I=e.tokenA)==null?void 0:I.address}&to=${(j=e.tokenB)==null?void 0:j.address}`)},["stop"]))}," Trade → ",2)):$("",!0)]),n("div",Co,[n("div",yo,[n("div",ko,[n("div",{class:"select-token",onClick:k[1]||(k[1]=G(t=>e.pools.isTokenLoading?"":e.selectToken("coinA"),["stop"]))},[n("div",bo,[J(n("img",null,null,512),[[A,e.getCoinIcon(e.tokenA)]]),Y(Z,{address:(u=e.tokenA)==null?void 0:u.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),n("div",To,[Y(B,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:we(()=>[n("p",qo,g(e.tokenA?e.tokenA.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),n("span",null,g(e.tokenA?((H=e.pools.tokensObj[(c=e.tokenA)==null?void 0:c.address])==null?void 0:H.labels)&&((X=e.pools.tokensObj[(q=e.tokenA)==null?void 0:q.address])==null?void 0:X.labels[0]):""),1)]),(d(),p("svg",{class:N(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},Ao,2))])]),n("div",Po,[n("div",{class:"loading-token",onClick:k[2]||(k[2]=G(t=>e.pools.isTokenLoading?"":e.selectToken("coinB"),["stop"]))},[J(n("img",null,null,512),[[A,e.getCoinIcon(e.tokenB)]]),Y(Z,{address:(P=e.tokenB)==null?void 0:P.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),n("div",$o,[Y(B,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:we(()=>[n("p",So,g(e.tokenB?e.tokenB.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),n("span",null,g(e.tokenB?((f=e.pools.tokensObj[(oe=e.tokenB)==null?void 0:oe.address])==null?void 0:f.labels)&&((ne=e.pools.tokensObj[(se=e.tokenB)==null?void 0:se.address])==null?void 0:ne.labels[0]):""),1)]),(d(),p("svg",{class:N(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},Mo,2))])])]),n("div",Lo,[n("div",{class:N(["fee-text",[{"fee-tier-action":e.store.chainName!=="Aptos"&&e.tokenA&&e.tokenB},{"no-cursor":e.store.chainName=="Aptos"||!e.tokenA||!e.tokenB}]]),onClick:k[3]||(k[3]=G(t=>e.store.chainName=="Aptos"||!e.tokenA||!e.tokenB?"":e.isShowFeeList=!e.isShowFeeList,["stop"]))},[No,n("div",null,[n("p",null,g(e.feeValue?e.feeValue*100:"--")+"%",1),e.store.chainName!=="Aptos"?(d(),p("svg",Uo,Oo)):$("",!0)])],2),e.isShowFeeList?(d(),p("div",Ro,[(d(!0),p(Ae,null,Pe(e.feeTierList,(t,I)=>{var j,de,w,ue,W;return d(),p("div",{key:I,class:N(["fee-item",[e.feeValue==t.fee?"fee-item-active":"",e.isCreatePool.includes(t.fee)?" pool-created":" pool-not-created",e.store.chainName!=="Aptos"&&!e.isCreatePool.includes(t.fee)&&!e.filterCreatePoolCoin[(j=e.tokenA)==null?void 0:j.address]&&!e.filterCreatePoolCoin[(de=e.tokenB)==null?void 0:de.address]?"disabled":""]]),onClick:G(ce=>e.selectFee(t),["stop"])},[n("p",{class:N(e.isCreatePool&&e.isCreatePool.includes(t.fee)?"text-active":"text-default")},g(t.title),3),n("div",null,[e.isCreatePool&&e.isCreatePool.includes(t.fee)?(d(),p("p",Bo,g(e.poolTvl&&e.poolTvl[t.fee]&&((w=e.poolTvl[t.fee])==null?void 0:w.rateText)),1)):$("",!0),e.isCreatePool&&!e.isCreatePool.includes(t.fee)?(d(),p("p",_o,[lo(g(e.$t("newAdd.notCreated"))+" ",1),e.chainName!=="Aptos"&&!e.isCreatePool.includes(t.fee)&&!e.filterCreatePoolCoin[(ue=e.tokenA)==null?void 0:ue.address]&&!e.filterCreatePoolCoin[(W=e.tokenB)==null?void 0:W.address]?(d(),p("svg",Do,Wo)):$("",!0)])):$("",!0),n("span",null,g(t.text),1)])],10,Fo)}),128))])):$("",!0)])]),n("div",Yo,[e.$route.name!=="liquidity-deposit"&&e.$route.name!=="liquidity-create"?(d(),p("div",Vo,[((R=e.poolInfo)!=null&&R.needReverse?!e.direct:e.direct)?(d(),p("div",zo,[J(n("img",null,null,512),[[A,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),n("span",Ho,"1 "+g(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol)+" ≈ ",1),J(n("img",null,null,512),[[A,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),n("span",null,g(e.currentPrice=="--"?"--":("addCommom"in e?e.addCommom:F(E))(("decimalUi"in e?e.decimalUi:F(qe))(e.currentPrice,6)))+" "+g(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1)])):(d(),p("div",Xo,[J(n("img",null,null,512),[[A,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),n("span",Ko,"1 "+g(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol)+" ≈ ",1),J(n("img",null,null,512),[[A,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),n("span",null,g(e.currentPriceReverse=="--"?"--":("addCommom"in e?e.addCommom:F(E))(("decimalUi"in e?e.decimalUi:F(qe))(e.currentPriceReverse,6)))+" "+g(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1)])),n("div",{class:"icon-change",onClick:k[4]||(k[4]=t=>e.direct=!e.direct)},Jo)])):$("",!0),e.$route.name!=="liquidity-create"?(d(),p("div",{key:1,class:N(["linkSwap",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""]),onClick:k[5]||(k[5]=G(t=>{var I,j;return e.router.push(`/swap?from=${(I=e.tokenA)==null?void 0:I.address}&to=${(j=e.tokenB)==null?void 0:j.address}`)},["stop"]))}," Trade → ",2)):$("",!0)])]),n("div",{class:N(["upgrade-liquidity-tab",!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?"style-none":""])},[e.$route.name==="liquidity-create"?(d(),p("div",Zo," Create Concentrated Pool ")):(d(),p("div",xo,[(d(!0),p(Ae,null,Pe(e.tabList,t=>(d(),p("div",{key:t,class:N(["tab-item",e.currentTab==t?"tab-item-active":""]),onClick:I=>e.changeTab(t)},[e.chainName!="Aptos"||t!=="Analytics"?(d(),p("span",os,g(t),1)):$("",!0),t=="Your Liquidity"&&e.currentTab=="Your Liquidity"?(d(),p("div",ss,g(e.poolPositions&&e.poolPositions.length),1)):$("",!0)],10,es))),128))])),e.$route.name!=="liquidity-create"?(d(),p("div",ns,[n("div",ls,[n("div",as,[is,n("div",rs,[n("div",ts,[n("div",{class:N(["apr-value",e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0||(le=(_=e.poolMoreInfo)==null?void 0:_.stable_farming)!=null&&le.stable_farming_pool?"":"noCursor"])},[n("i",ds,g(e.poolMoreInfo.is_display_rewarder?e.poolMoreInfo.aprTotal>0&&e.poolMoreInfo.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:F(E))(e.poolMoreInfo.aprTotal,2):e.poolMoreInfo.apr>0&&e.poolMoreInfo.apr<.01?"<0.01":("addCommom"in e?e.addCommom:F(E))(e.poolMoreInfo.apr,2))+"%",1),(ae=(x=e.poolMoreInfo)==null?void 0:x.stable_farming)!=null&&ae.stable_farming_pool?(d(),p("i",us," +"+g(("addCommom"in e?e.addCommom:F(E))(e.poolMoreInfo.stable_farming?(ie=e.farmsPoolInfo)==null?void 0:ie.stableFarmingApr:0,2))+"% ",1)):$("",!0),e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0||(re=(K=e.poolMoreInfo)==null?void 0:K.stable_farming)!=null&&re.stable_farming_pool?(d(),p("div",cs,[Y(pe,{"l-item":{...e.poolMoreInfo,stableFarmingApr:(te=e.farmsPoolInfo)==null?void 0:te.stableFarmingApr},"rewarder-info":e.poolMoreInfo.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):$("",!0)],2)])])])]),n("div",ps,[vs,n("div",fs,"$"+g(Number(e.poolMoreInfo.liqidity)!==0&&Number(e.poolMoreInfo.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:F(E))(e.poolMoreInfo.liqidity,2)),1)]),n("div",ms,[hs,n("div",gs,"$"+g(Number(e.poolMoreInfo.vol)!==0&&Number(e.poolMoreInfo.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:F(E))(e.poolMoreInfo.vol,2)),1)])])):$("",!0)],2)]),!e.tokenA||!e.tokenB||e.route.query.pool=="notfount"?(d(),p("div",Cs,[e.store.theme=="default"?(d(),p("img",ys)):(d(),p("img",ks)),n("p",null,g(e.$t("newAdd.positionAppear")),1)])):(d(),p("div",bs,[Y(ve)])),e.showCoinSelect?(d(),$e(z,{key:2,"existing-coins":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"last-select-coin":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"is-create-pool-to-coin":e.isCreatePoolToCoin,"is-create-pool-from-coin":e.isCreatePoolFromCoin,onOnSelect:e.onCoinSelect,onOnClose:k[6]||(k[6]=t=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","is-create-pool-to-coin","is-create-pool-from-coin","onOnSelect"])):$("",!0),e.chainName=="Sui"&&e.isShowTokenWarning?(d(),$e(b,{key:3,"from-coin":e.warningFromCoin,"to-coin":e.warningToCoin,onClose:e.closeTokenWarning,onClickContinue:k[7]||(k[7]=t=>e.isShowTokenWarning=!1)},null,8,["from-coin","to-coin","onClose"])):$("",!0)],2)}const zs=eo(mo,[["render",Ts],["__scopeId","data-v-34f3c1a9"]]);export{zs as default};
