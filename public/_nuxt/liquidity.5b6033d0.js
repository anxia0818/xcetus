import{_ as Pe}from"./back.23e049f1.js";import{_ as Se}from"./token-warning.a1bbf628.js";import{_ as Me}from"./nuxt-link.b7034c3d.js";import{_ as Ne}from"./apr-tips.dd097373.js";import{_ as Be}from"./coin-select.698e1175.js";import{_ as _e}from"./token-warning-modal.8e709a33.js";import{u as Ue,a as Le,c as ie,e as F,s as ge,d as ke}from"./pool.33aab128.js";import{a as Fe,l as je,b as Re,r as b,E as Oe,m as q,y as De,C as Ee,D,e as We,Q as ae,q as Ve,o as c,f as C,h as s,i as w,K as E,x as T,t as W,w as $,z as H,v as y,F as Ke,s as ze,j as R,u as B,c as te,S as He,U as Qe,p as Xe,k as Ye,V as Ge}from"./entry.a8601451.js";/* empty css              *//* empty css              *//* empty css              */import{u as Je,c as ye}from"./sha256.6b1ed61e.js";import{g as Ze}from"./common-fun.471b0caa.js";import{i as Ie}from"./import-icon.de3e6c66.js";import"./decimal.633e31ee.js";import{D as L}from"./decimal.0e8aa3f1.js";import{_ as xe}from"./icon-Farms_2x.2b6b6823.js";/* empty css              */import"./img-no-Positions_2x.0466a283.js";import"./icon-selected_3x.09e9a6f0.js";import"./precision.a7a6c57b.js";const eo=Fe({setup(e,d){var he;const{t:A,locale:be}=je(),i=Re(),se=b([`${(he=i==null?void 0:i.currentRoute)==null?void 0:he.value.name.split("-")[1]}`]),Q=b(!1),j=b(!1),X=b(!0),ne=Ue(),_=Je(),I=Oe(),S=b(""),m=b(null),v=b(null),Y=b(null),M=b(I.query.poolAddress),V=b(""),p=q(()=>_),G=q(()=>_.theme),f=q(()=>ne),J=q(()=>ye[p.value.chainName]),n=q(()=>_.statsData),K=q(()=>p.value.chainName),Z=q(()=>[{label:.01+"% "+A("common.feeTier"),title:.01+"% ",fee:1e-4,text:A("newAdd.bestVeryStablePairs")},{label:.05+"% "+A("common.feeTier"),title:.05+"% ",fee:5e-4,text:A("newAdd.bestStablePairs")},p.value.chainName=="Aptos"?{label:.2+"% "+A("common.feeTier"),title:.2+"% ",fee:.002,text:A("newAdd.bestMostPairs")}:{label:.25+"% "+A("common.feeTier"),title:.25+"% ",fee:.0025,text:A("newAdd.bestMostPairs")},p.value.chainName=="Aptos"?{label:.6+"% "+A("common.feeTier"),title:.6+"% ",fee:.006,text:A("newAdd.besteExoticPairs")}:{label:"1% "+A("common.feeTier"),title:"1% ",fee:.01,text:A("newAdd.besteExoticPairs")}]),O=q(()=>{if(f.value.poolConfigList&&m.value&&v.value){const o=f.value.poolConfigList.filter(l=>{var g,h,t,u;return l.token_a.address.toUpperCase()===((g=m.value.address)==null?void 0:g.toUpperCase())&&l.token_b.address.toUpperCase()===((h=v.value.address)==null?void 0:h.toUpperCase())||l.token_b.address.toUpperCase()===((t=m.value.address)==null?void 0:t.toUpperCase())&&l.token_a.address.toUpperCase()===((u=v.value.address)==null?void 0:u.toUpperCase())}),a=[];return o.forEach(l=>{a.push(Number(l.fee))}),a}else return[]}),x=o=>{const a={};let l=new L(0);o.forEach(r=>{var N;const k=(N=r==null?void 0:r.object)==null?void 0:N.liquidity;l=l.add(new L(k||0))});const g=[];let h=new L(0);o.forEach(r=>{const k=new L(r.object.liquidity),N=k.gt(0)?new L(k).div(l).mul(100).toString():0,U=ge(N,2);h=h.plus(U);const Ce=U.split(".");g.push({value:U,int:Ce[0],decimal:Ce[1],fee:r.fee})});let t=new L(100).minus(h).toNumber();const u=g.sort((r,k)=>Number(k.decimal)-Number(r.decimal));if(t)for(let r=0;r<u.length&&t;r++)u[r].value=new L(u[r].value).plus(.01).toString(),t=new L(t).minus(.01).toNumber();return o.forEach(r=>{var N;const k=(N=u.find(U=>r.fee===U.fee))==null?void 0:N.value;a[r.fee]={rateText:(k>0&&k<.01?"<0.01":k==0?0:ge(k,2))+"% select",rate:k}}),a},re=q(()=>{if(f.value.poolConfigList&&m.value&&v.value){const o=f.value.poolConfigList.filter(l=>{var g,h,t,u;return l.token_a.address.toUpperCase()===((g=m.value.address)==null?void 0:g.toUpperCase())&&l.token_b.address.toUpperCase()===((h=v.value.address)==null?void 0:h.toUpperCase())||l.token_b.address.toUpperCase()===((t=m.value.address)==null?void 0:t.toUpperCase())&&l.token_a.address.toUpperCase()===((u=v.value.address)==null?void 0:u.toUpperCase())});return x(o)}else return""}),we=q(()=>{var o;return(o=p.value)==null?void 0:o.filterCreatePoolCoin});De(()=>{document.addEventListener("click",()=>{j.value=!1})}),Ee(()=>{document.removeEventListener("click",()=>{j.value=!1})}),D(()=>[i,f.value.tokensObj],([o,a])=>{var l,g;if(o){const h=(l=i==null?void 0:i.currentRoute)==null?void 0:l.value.name.split("-")[1];se.value=!h||h=="privide"||h==""?["privide"]:[`${h}`]}(((g=i==null?void 0:i.currentRoute)==null?void 0:g.value.name)=="liquidity-creat-pool"||!I.query.poolAddress)&&a&&(console.log("0727####491",I.query),m.value||(m.value=f.value.tokensObj[I.query.fromCoin]),v.value||(v.value=f.value.tokensObj[I.query.toCoin]),S.value=I.query.fee!=="null"&&I.query.fee?I.query.fee:"")},{immediate:!0,deep:!0});const Ae=o=>{O.value&&!O.value.includes(o.fee)&&(Y.value=o),S.value=o.fee,j.value=!1},le=b(!1),z=b(!1),qe=o=>{V.value=o,o=="coinA"&&I.name=="liquidity-creat-pool"?(le.value=!0,z.value=!1):o=="coinB"&&I.name=="liquidity-creat-pool"&&(le.value=!1,z.value=!0),console.log(z.value,z.value,o,I.name,"#####selectToken"),Q.value=!0},de=q(()=>ye[K.value].hasCreatePool);D(()=>[m.value,v.value,S.value,f.value.poolConfigList,de.value],([o,a,l,g,h])=>{if(console.log(l,"watch####  feeValue"),g.length>0){if(o&&a&&l&&h){let t=null;t=g.find(u=>o.address==u.coinA.address&&a.address==u.coinB.address&&l==u.fee||o.address==u.coinB.address&&a.address==u.coinA.address&&l==u.fee),t?(console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress",t,l,t&&t.address),M.value=t?t.address:""):(M.value="",i.replace(`/liquidity/creat-pool?fromCoin=${o.address}&toCoin=${a.address}&fee=${l}`))}else if(o&&a&&h){let t=null;const u=g.filter(r=>o.address==r.coinA.address&&a.address==r.coinB.address||o.address==r.coinB.address&&a.address==r.coinA.address);console.log(u,"poolTvl sort######"),t=u.sort((r,k)=>{var N,U;return((N=k==null?void 0:k.object)==null?void 0:N.liquidity)-((U=r==null?void 0:r.object)==null?void 0:U.liquidity)})[0],t?(console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress",t,l,t&&t.address),M.value=t?t.address:""):(M.value="",i.replace(`/liquidity/creat-pool?fromCoin=${o.address}&toCoin=${a.address}&fee=${l}`))}}});const ee=q(()=>{if(M.value){const o=M.value;return f.value.poolConfigObj[o]}else return null}),ue=Le(p.value.chainName),oe=b("--");D(()=>ee.value,async(o,a)=>{var l,g,h,t;if(o){if(((l=i==null?void 0:i.currentRoute)==null?void 0:l.value.name)=="liquidity-privide-liquidity"||((g=i==null?void 0:i.currentRoute)==null?void 0:g.value.name)=="liquidity-creat-pool"?i.replace(`/liquidity/privide-liquidity?poolAddress=${o.address}`):((h=i==null?void 0:i.currentRoute)==null?void 0:h.value.name)=="liquidity-your-liquidity"?i.replace(`/liquidity/your-liquidity?poolAddress=${o.address}`):((t=i==null?void 0:i.currentRoute)==null?void 0:t.value.name)=="liquidity-analytics"&&i.replace(`/liquidity/analytics?poolAddress=${o.address}`),m.value=o.needReverse?o.coinB:o.coinA,v.value=o.needReverse?o.coinA:o.coinB,S.value=o.fee,M.value=o.address,p.value.chainName&&p.value.chainName.includes("Aptos")){const u=await ue.getPool(o.address),r=o.coinA.decimals,k=o.coinB.decimals;oe.value=ue.TickMath.sqrtPriceX64ToPrice(u.current_sqrt_price,r,k).toString()}else oe.value=o.price;console.log(oe.value,"currentPrice.value")}else m.value&&v.value&&de.value&&i.replace(`/liquidity/creat-pool?fromCoin=${m.value.address}&toCoin=${v.value.address}&fee=${S.value}`)},{immediate:!0,deep:!0});const ce=q(()=>f.value.currentPoolMoreInfo);D(()=>[ee.value,p.value.addressLpTokens],o=>{o&&Ze(ee.value,f,p)},{deep:!0}),console.log(ce.value,"===>poolMoreInfo"),D(()=>p.value.chainName,(o,a)=>{o&&_.getStatsData(o,p.value.filterCoinsObj)},{immediate:!0});const Te=o=>{S.value="",V.value=="coinA"?(m.value=o,(v.value&&v.value.address)==o.address&&(v.value={})):(v.value=o,(m.value&&m.value.address)==o.address&&(m.value={}))},$e=o=>{var a;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((a=f.value.tokensObj[o==null?void 0:o.address])==null?void 0:a.logo_url)||(p.value.theme==="default"?Ie("/image/coins/unknown.png"):Ie("/image/coins/sui-unknown.png"))},pe=b(),me=b(),ve=b(!1),fe=(o,a)=>{console.log(o);const l=localStorage.getItem(o.address);console.log(f.value.tokensObj,"===>pools.value.tokensObj"),console.log(l,"===>coinLocak"),f.value.tokensObj&&f.value.tokensObj[o.address]&&f.value.tokensObj[o.address].isSelfBuilt&&!l&&(a=="fromCoin"&&(pe.value=o),a=="toCoin"&&(me.value=o),ve.value=!0)};return D(()=>[m.value,v.value],([o,a])=>{o&&!ie(o)&&fe(o,"fromCoin"),a&&!ie(a)&&fe(a,"toCoin")},{immediate:!0}),{chainName:K,warningFromCoin:pe,warningToCoin:me,isShowTokenWarning:ve,closeTokenWarning:()=>{K.value!=="Aptos"?i.push("/pool/list"):i.push("/pools")},direct:X,currentPrice:oe,creatFeeItem:Y,feeValue:S,checkNullObj:ie,poolMoreInfo:ce,poolTvl:re,isShowFeeList:j,filterCreatePoolCoin:we,route:I,selectFee:Ae,isCreatePool:O,feeTierList:Z,currentToken:V,tokenA:m,tokenB:v,selectToken:qe,showCoinSelect:Q,onCoinSelect:Te,getCoinIcon:$e,currentPoolAddress:M,poolInfo:ee,store:p,config:J,t:A,router:i,current:se,addCommom:F,theme:G,statsData:n,pools:f,isCreatePoolFromCoin:le,isCreatePoolToCoin:z}}});const P=e=>(Xe("data-v-4c3a871d"),e=e(),Ye(),e),oo={class:"upgrade-liquidity-container"},so={class:"liquidity-container"},no={class:"back-div"},lo={class:"upgrade-liquidity-header"},io={class:"left"},ao={class:"select-token-box"},to={class:"loading-token"},ro={class:"label"},uo=P(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),co=[uo],po={class:"select-token"},mo={class:"label"},vo=P(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),fo=[vo],ho={class:"fee-tier"},Co=P(()=>s("span",null,"Fee tier",-1)),go={key:0,class:"icon","aria-hidden":"true"},ko=P(()=>s("use",{"xlink:href":"#icon-btn_edit"},null,-1)),yo=[ko],Io={key:0,class:"fee-tier-box"},bo=["onClick"],wo={key:0,class:"text-active"},Ao={key:1},qo={class:"right"},To={key:0,class:"price"},$o={key:0,class:"coin"},Po={key:1,class:"coin"},So=P(()=>s("div",null,[s("svg",{class:"icon icon-up","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Mo=P(()=>s("div",null,[s("svg",{class:"icon icon-down","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),No=[So,Mo],Bo={class:"upgrade-liquidity-tab"},_o={key:0,class:"header-left header-creat-pool"},Uo={key:1,class:"header-left"},Lo={key:2,class:"header-right"},Fo={class:"item"},jo=P(()=>s("div",{class:"label"},"APR",-1)),Ro={class:"value"},Oo={class:"value-border"},Do={key:0,class:"apr-hover-content"},Eo={key:0,class:"isFarming"},Wo=P(()=>s("img",{src:xe,alt:""},null,-1)),Vo=P(()=>s("div",{class:"hover-text"},"Farming rewards available",-1)),Ko=[Wo,Vo],zo={class:"item"},Ho=P(()=>s("div",{class:"label"},"TVL",-1)),Qo={class:"value"},Xo={class:"item"},Yo=P(()=>s("div",{class:"label"},"Volume (24H)",-1)),Go={class:"value"},Jo={class:"item"},Zo=P(()=>s("div",{class:"label"},"Fees (24H)",-1)),xo={class:"value"},es={class:"router-view-container"};function os(e,d,A,be,i,se){var G,f,J;const Q=Pe,j=Se,X=He,ne=ae("mail-outlined"),_=Me,I=Ge,S=ae("appstore-outlined"),m=Qe,v=Ne,Y=ae("router-view"),M=Be,V=_e,p=Ve("image");return c(),C("div",oo,[s("div",so,[s("div",no,[w(Q,{label:"Pools",url:e.chainName=="Sui"?"/pool/list":"/pools"},null,8,["url"]),e.$route.name!=="liquidity-creat-pool"?(c(),C("div",{key:0,class:"linkSwap",onClick:d[0]||(d[0]=E(n=>e.router.push(`/swap?from=${e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.address}&to=${e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.address}`),["stop"]))}," Trade → ")):T("",!0)]),s("div",lo,[s("div",io,[s("div",ao,[s("div",{class:"select-token",onClick:d[1]||(d[1]=E(n=>e.pools.isTokenLoading?"":e.selectToken("coinA"),["stop"]))},[s("div",to,[W(s("img",null,null,512),[[p,e.getCoinIcon(e.tokenA)]]),w(j,{address:(G=e.tokenA)==null?void 0:G.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),w(X,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:$(()=>[s("p",ro,y(e.tokenA?e.tokenA.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),(c(),C("svg",{class:H(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},co,2))])]),s("div",po,[s("div",{class:"loading-token",onClick:d[2]||(d[2]=E(n=>e.pools.isTokenLoading?"":e.selectToken("coinB"),["stop"]))},[W(s("img",null,null,512),[[p,e.getCoinIcon(e.tokenB)]]),w(j,{address:(f=e.tokenB)==null?void 0:f.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),w(X,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:$(()=>[s("p",mo,y(e.tokenB?e.tokenB.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),(c(),C("svg",{class:H(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},fo,2))])])]),s("div",ho,[s("div",{class:"fee-text",onClick:d[3]||(d[3]=E(n=>e.store.chainName=="Aptos"||e.$route.name=="liquidity-creat-pool"&&(!e.tokenA||!e.tokenB)?"":e.isShowFeeList=!e.isShowFeeList,["stop"]))},[Co,s("div",null,[s("p",null,y(e.feeValue?e.feeValue*100:"--")+"%",1),e.store.chainName!=="Aptos"?(c(),C("svg",go,yo)):T("",!0)])]),e.isShowFeeList?(c(),C("div",Io,[(c(!0),C(Ke,null,ze(e.feeTierList,(n,K)=>{var Z,O,x;return c(),C("div",{key:K,class:H(["fee-item",[e.feeValue==n.fee?"fee-item-active":"",e.isCreatePool.includes(n.fee)&&e.$route.query.action?" pool-created":" pool-not-created",e.store.chainName!=="Aptos"&&!e.isCreatePool.includes(n.fee)&&!e.filterCreatePoolCoin[(Z=e.tokenA)==null?void 0:Z.address]&&!e.filterCreatePoolCoin[(O=e.tokenB)==null?void 0:O.address]?"disabled":""]]),onClick:E(re=>e.selectFee(n),["stop"])},[s("p",{class:H(e.isCreatePool&&e.isCreatePool.includes(n.fee)?"text-active":"text-default")},y(n.title),3),s("div",null,[e.isCreatePool&&e.isCreatePool.includes(n.fee)?(c(),C("p",wo,y(e.poolTvl&&e.poolTvl[n.fee]&&((x=e.poolTvl[n.fee])==null?void 0:x.rateText)),1)):T("",!0),e.isCreatePool&&!e.isCreatePool.includes(n.fee)?(c(),C("p",Ao,y(e.$t("newAdd.notCreated")),1)):T("",!0),s("span",null,y(n.text),1)])],10,bo)}),128))])):T("",!0)])]),s("div",qo,[e.$route.name!=="liquidity-privide-liquidity"&&e.$route.name!=="liquidity-creat-pool"?(c(),C("div",To,[((J=e.poolInfo)!=null&&J.needReverse?!e.direct:e.direct)?(c(),C("div",$o,[W(s("img",null,null,512),[[p,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),R(" 1"+y(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol)+" ≈  ",1),W(s("img",null,null,512),[[p,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),R(" "+y(e.currentPrice=="--"?"--":("addCommom"in e?e.addCommom:B(F))(("decimalUi"in e?e.decimalUi:B(ke))(e.currentPrice,6)))+" "+y(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1)])):(c(),C("div",Po,[W(s("img",null,null,512),[[p,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),R(" 1 "+y(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol)+" ≈  ",1),W(s("img",null,null,512),[[p,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),R(" "+y(e.currentPrice=="--"?"--":("addCommom"in e?e.addCommom:B(F))(("decimalUi"in e?e.decimalUi:B(ke))(1/e.currentPrice,6)))+" "+y(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1)])),s("div",{class:"icon-change",onClick:d[4]||(d[4]=n=>e.direct=!e.direct)},No)])):T("",!0),e.$route.name!=="liquidity-creat-pool"?(c(),C("div",{key:1,class:"linkSwap",onClick:d[5]||(d[5]=E(n=>e.router.push(`/swap?from=${e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.address}&to=${e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.address}`),["stop"]))}," Trade → ")):T("",!0)])]),s("div",Bo,[e.$route.name==="liquidity-creat-pool"?(c(),C("div",_o," Create Concentrated Pool ")):(c(),C("div",Uo,[w(m,{selectedKeys:e.current,"onUpdate:selectedKeys":d[8]||(d[8]=n=>e.current=n),mode:"horizontal"},{default:$(()=>[w(I,{key:"privide"},{default:$(()=>{var n;return[w(_,{to:`/liquidity/privide-liquidity?poolAddress=${(n=e.poolInfo)==null?void 0:n.address}`},{icon:$(()=>[w(ne)]),default:$(()=>[R(" Privide Liquidity ")]),_:1},8,["to"])]}),_:1}),w(I,{key:"your",onClick:d[6]||(d[6]=n=>e.current=["your"])},{default:$(()=>{var n;return[w(_,{to:`/liquidity/your-liquidity?poolAddress=${(n=e.poolInfo)==null?void 0:n.address}`},{icon:$(()=>[w(S)]),default:$(()=>[R(" Your Liquidity ")]),_:1},8,["to"])]}),_:1}),e.theme=="sui"?(c(),te(I,{key:"analytics",onClick:d[7]||(d[7]=n=>e.current=["analytics"])},{default:$(()=>{var n;return[w(_,{to:`/liquidity/analytics?poolAddress=${(n=e.poolInfo)==null?void 0:n.address}`},{icon:$(()=>[w(S)]),default:$(()=>[R(" Analytics ")]),_:1},8,["to"])]}),_:1})):T("",!0)]),_:1},8,["selectedKeys"])])),e.$route.name!=="liquidity-creat-pool"?(c(),C("div",Lo,[s("div",Fo,[jo,s("div",Ro,[s("div",Oo,[s("div",{class:H(["apr-value",e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0?"":"noCursor"])},[s("i",null,y(e.poolMoreInfo.is_display_rewarder?e.poolMoreInfo.aprTotal>0&&e.poolMoreInfo.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:B(F))(e.poolMoreInfo.aprTotal,2):e.poolMoreInfo.apr>0&&e.poolMoreInfo.apr<.01?"<0.01":("addCommom"in e?e.addCommom:B(F))(e.poolMoreInfo.apr,2))+"%",1),e.poolInfo&&e.poolInfo.isFarming&&e.poolMoreInfo.rewardes&&e.poolMoreInfo.rewardes.length>0?(c(),C("div",Do,[w(v,{"l-item":e.poolMoreInfo,"rewarder-info":e.poolMoreInfo.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):T("",!0)],2)]),e.poolInfo&&e.poolInfo.isFarming&&e.poolInfo.rewarderInfo&&e.poolInfo.rewarderInfo.length>0?(c(),C("div",Eo,Ko)):T("",!0)])]),s("div",zo,[Ho,s("div",Qo,"$"+y(Number(e.poolMoreInfo.liqidity)!==0&&Number(e.poolMoreInfo.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:B(F))(e.poolMoreInfo.liqidity,2)),1)]),s("div",Xo,[Yo,s("div",Go,"$"+y(Number(e.poolMoreInfo.vol)!==0&&Number(e.poolMoreInfo.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:B(F))(e.poolMoreInfo.vol,2)),1)]),s("div",Jo,[Zo,s("div",xo,"$"+y(Number(e.poolMoreInfo.fee_24_h)!==0&&Number(e.poolMoreInfo.fee_24_h)<.01?"<0.01":("addCommom"in e?e.addCommom:B(F))(e.poolMoreInfo.fee_24_h,2)),1)])])):T("",!0)])]),s("div",es,[w(Y)]),e.showCoinSelect?(c(),te(M,{key:0,"existing-coins":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"last-select-coin":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"is-create-pool-to-coin":e.isCreatePoolToCoin,"is-create-pool-from-coin":e.isCreatePoolFromCoin,onOnSelect:e.onCoinSelect,onOnClose:d[9]||(d[9]=n=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","is-create-pool-to-coin","is-create-pool-from-coin","onOnSelect"])):T("",!0),e.chainName=="Sui"&&e.isShowTokenWarning?(c(),te(V,{key:1,"from-coin":e.warningFromCoin,"to-coin":e.warningToCoin,onClose:e.closeTokenWarning,onClickContinue:d[10]||(d[10]=n=>e.isShowTokenWarning=!1)},null,8,["from-coin","to-coin","onClose"])):T("",!0)])}const As=We(eo,[["render",os],["__scopeId","data-v-4c3a871d"]]);export{As as default};
