import{_ as Te}from"./back.1adf9b67.js";import{_ as $e}from"./token-warning.26304a22.js";import{_ as Pe}from"./nuxt-link.d0c91994.js";import{_ as Se}from"./apr-tips.2ae5a9b2.js";import{_ as _e}from"./coin-select.6d3a24d9.js";import{_ as Ne}from"./token-warning-modal.4668d827.js";import{u as Me,a as Ue,c as le,e as F,s as he,d as Ce}from"./pool.94e0aeaf.js";import{a as Be,l as Le,b as Fe,r as w,E as je,m as A,y as Re,C as Oe,D as K,e as De,Q as ae,q as Ee,o as f,f as y,h as s,i as k,K as D,x as P,t as E,w as T,z,v as I,F as We,s as Ve,j as R,u as M,c as ge,S as Ke,U as ze,p as He,k as Qe,V as Xe}from"./entry.7c8af6d6.js";/* empty css              *//* empty css              *//* empty css              */import{u as Ye,c as Ge}from"./sha256.f59f8bf2.js";import{g as Je}from"./common-fun.18db3dba.js";import{i as ye}from"./import-icon.de3e6c66.js";import"./decimal.633e31ee.js";import{D as L}from"./decimal.0e8aa3f1.js";import{_ as Ze}from"./icon-Farms_2x.6af42132.js";/* empty css              */import"./img-no-Positions_2x.e64a6472.js";import"./icon-selected_3x.09e9a6f0.js";import"./precision.a7a6c57b.js";const xe=Be({setup(e,d){var ve;const{t:q,locale:ke}=Le(),n=Fe(),ee=w([`${(ve=n==null?void 0:n.currentRoute)==null?void 0:ve.value.name.split("-")[1]}`]),H=w(!1),j=w(!1),Q=w(!0),oe=Me(),U=Ye(),b=je(),S=w(""),c=w(null),p=w(null),X=w(null),_=w(b.query.poolAddress),W=w(""),m=A(()=>U),Y=A(()=>U.theme),h=A(()=>oe),G=A(()=>Ge[m.value.chainName]),i=A(()=>U.statsData),se=A(()=>[{label:.01+"% "+q("common.feeTier"),title:.01+"% ",fee:1e-4,text:q("newAdd.bestVeryStablePairs")},{label:.05+"% "+q("common.feeTier"),title:.05+"% ",fee:5e-4,text:q("newAdd.bestStablePairs")},m.value.chainName=="Aptos"?{label:.2+"% "+q("common.feeTier"),title:.2+"% ",fee:.002,text:q("newAdd.bestMostPairs")}:{label:.25+"% "+q("common.feeTier"),title:.25+"% ",fee:.0025,text:q("newAdd.bestMostPairs")},m.value.chainName=="Aptos"?{label:.6+"% "+q("common.feeTier"),title:.6+"% ",fee:.006,text:q("newAdd.besteExoticPairs")}:{label:"1% "+q("common.feeTier"),title:"1% ",fee:.01,text:q("newAdd.besteExoticPairs")}]),O=A(()=>{if(h.value.poolConfigList&&c.value&&p.value){const o=h.value.poolConfigList.filter(l=>{var C,v,t,u;return l.token_a.address.toUpperCase()===((C=c.value.address)==null?void 0:C.toUpperCase())&&l.token_b.address.toUpperCase()===((v=p.value.address)==null?void 0:v.toUpperCase())||l.token_b.address.toUpperCase()===((t=c.value.address)==null?void 0:t.toUpperCase())&&l.token_a.address.toUpperCase()===((u=p.value.address)==null?void 0:u.toUpperCase())}),a=[];return o.forEach(l=>{a.push(Number(l.fee))}),a}else return[]}),J=o=>{const a={};let l=new L(0);o.forEach(r=>{var N;const g=(N=r==null?void 0:r.object)==null?void 0:N.liquidity;l=l.add(new L(g||0))});const C=[];let v=new L(0);o.forEach(r=>{const g=new L(r.object.liquidity),N=g.gt(0)?new L(g).div(l).mul(100).toString():0,B=he(N,2);v=v.plus(B);const fe=B.split(".");C.push({value:B,int:fe[0],decimal:fe[1],fee:r.fee})});let t=new L(100).minus(v).toNumber();const u=C.sort((r,g)=>Number(g.decimal)-Number(r.decimal));if(t)for(let r=0;r<u.length&&t;r++)u[r].value=new L(u[r].value).plus(.01).toString(),t=new L(t).minus(.01).toNumber();return o.forEach(r=>{var N;const g=(N=u.find(B=>r.fee===B.fee))==null?void 0:N.value;a[r.fee]={rateText:(g>0&&g<.01?"<0.01":g==0?0:he(g,2))+"% select",rate:g}}),a},Z=A(()=>{if(h.value.poolConfigList&&c.value&&p.value){const o=h.value.poolConfigList.filter(l=>{var C,v,t,u;return l.token_a.address.toUpperCase()===((C=c.value.address)==null?void 0:C.toUpperCase())&&l.token_b.address.toUpperCase()===((v=p.value.address)==null?void 0:v.toUpperCase())||l.token_b.address.toUpperCase()===((t=c.value.address)==null?void 0:t.toUpperCase())&&l.token_a.address.toUpperCase()===((u=p.value.address)==null?void 0:u.toUpperCase())});return J(o)}else return""}),te=A(()=>{var o;return(o=m.value)==null?void 0:o.filterCreatePoolCoin});Re(()=>{document.addEventListener("click",()=>{j.value=!1})}),Oe(()=>{document.removeEventListener("click",()=>{j.value=!1})}),K(()=>[n,h.value.tokensObj],([o,a])=>{var l,C;if(o){const v=(l=n==null?void 0:n.currentRoute)==null?void 0:l.value.name.split("-")[1];ee.value=!v||v=="privide"||v==""?["privide"]:[`${v}`]}(((C=n==null?void 0:n.currentRoute)==null?void 0:C.value.name)=="liquidity-creat-pool"||!b.query.poolAddress)&&a&&(console.log("0727####491",b.query),c.value||(c.value=h.value.tokensObj[b.query.fromCoin]),p.value||(p.value=h.value.tokensObj[b.query.toCoin]),S.value=b.query.fee!=="null"&&b.query.fee?b.query.fee:"")},{immediate:!0,deep:!0});const Ie=o=>{O.value&&!O.value.includes(o.fee)&&(X.value=o),S.value=o.fee,j.value=!1},ne=w(!1),V=w(!1),be=o=>{W.value=o,o=="coinA"&&b.name=="liquidity-creat-pool"?(ne.value=!0,V.value=!1):o=="coinB"&&b.name=="liquidity-creat-pool"&&(ne.value=!1,V.value=!0),console.log(V.value,V.value,o,b.name,"#####selectToken"),H.value=!0};K(()=>[c.value,p.value,S.value,h.value.poolConfigList],([o,a,l,C])=>{var v;if(console.log(l,"watch####  feeValue"),C.length>0)if(o&&a&&l){let t=null;t=C.find(u=>o.address==u.coinA.address&&a.address==u.coinB.address&&l==u.fee||o.address==u.coinB.address&&a.address==u.coinA.address&&l==u.fee),t?(console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress",t,l,t&&t.address),_.value=t?t.address:""):(_.value="",n.replace(`/liquidity/creat-pool?fromCoin=${o.address}&toCoin=${a.address}&fee=${l}`))}else if(o&&a){let t=null;const u=C.filter(r=>o.address==r.coinA.address&&a.address==r.coinB.address||o.address==r.coinB.address&&a.address==r.coinA.address);console.log(u,"poolTvl sort######"),t=u.sort((r,g)=>{var N,B;return((N=g==null?void 0:g.object)==null?void 0:N.liquidity)-((B=r==null?void 0:r.object)==null?void 0:B.liquidity)})[0],t?(console.log("4411poolpoolcurrentPoolAddresscurrentPoolAddress",t,l,t&&t.address),_.value=t?t.address:""):(_.value="",n.replace(`/liquidity/creat-pool?fromCoin=${o.address}&toCoin=${a.address}&fee=${l}`))}else((v=n==null?void 0:n.currentRoute)==null?void 0:v.value.name)=="liquidity-creat-pool"&&n.replace(`/liquidity/creat-pool?fromCoin=${o==null?void 0:o.address}&toCoin=${a==null?void 0:a.address}&fee=${l}`)});const ie=A(()=>{if(_.value){const o=_.value;return h.value.poolConfigObj[o]}else return null}),re=Ue(m.value.chainName),x=w("--");K(()=>ie.value,async(o,a)=>{var l,C,v,t;if(o){if(((l=n==null?void 0:n.currentRoute)==null?void 0:l.value.name)=="liquidity-privide-liquidity"||((C=n==null?void 0:n.currentRoute)==null?void 0:C.value.name)=="liquidity-creat-pool"?n.replace(`/liquidity/privide-liquidity?poolAddress=${o.address}`):((v=n==null?void 0:n.currentRoute)==null?void 0:v.value.name)=="liquidity-your-liquidity"?n.replace(`/liquidity/your-liquidity?poolAddress=${o.address}`):((t=n==null?void 0:n.currentRoute)==null?void 0:t.value.name)=="liquidity-analytics"&&n.replace(`/liquidity/analytics?poolAddress=${o.address}`),c.value=o.needReverse?o.coinB:o.coinA,p.value=o.needReverse?o.coinA:o.coinB,S.value=o.fee,_.value=o.address,m.value.chainName&&m.value.chainName.includes("Aptos")){const u=await re.getPool(o.address),r=o.coinA.decimals,g=o.coinB.decimals;x.value=re.TickMath.sqrtPriceX64ToPrice(u.current_sqrt_price,r,g).toString()}else x.value=o.price;console.log(x.value,"currentPrice.value")}else c.value&&p.value&&n.replace(`/liquidity/creat-pool?fromCoin=${c.value.address}&toCoin=${p.value.address}&fee=${S.value}`)},{immediate:!0,deep:!0});const we=A(()=>Je(ie.value,h,m));K(()=>m.value.chainName,(o,a)=>{o&&U.getStatsData(o,m.value.filterCoinsObj)},{immediate:!0});const qe=o=>{S.value="",W.value=="coinA"?(c.value=o,(p.value&&p.value.address)==o.address&&(p.value={})):(p.value=o,(c.value&&c.value.address)==o.address&&(c.value={}))},Ae=o=>{var a;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((a=h.value.tokensObj[o==null?void 0:o.address])==null?void 0:a.logo_url)||(m.value.theme==="default"?ye("/image/coins/unknown.png"):ye("/image/coins/sui-unknown.png"))},de=w(),ue=w(),ce=w(!1),pe=(o,a)=>{console.log(o);const l=localStorage.getItem(o.address);console.log(h.value.tokensObj,"===>pools.value.tokensObj"),console.log(l,"===>coinLocak"),h.value.tokensObj&&h.value.tokensObj[o.address]&&h.value.tokensObj[o.address].isSelfBuilt&&!l&&(a=="fromCoin"&&(de.value=o),a=="toCoin"&&(ue.value=o),ce.value=!0)};K(()=>[c.value,p.value],([o,a])=>{o&&!le(o)&&pe(o,"fromCoin"),a&&!le(a)&&pe(a,"toCoin")},{immediate:!0});const me=A(()=>m.value.chainName);return{chainName:me,warningFromCoin:de,warningToCoin:ue,isShowTokenWarning:ce,closeTokenWarning:()=>{me.value!=="Aptos"?n.push("/pool/list"):n.push("/pools")},direct:Q,currentPrice:x,creatFeeItem:X,feeValue:S,checkNullObj:le,poolMoreInfo:we,poolTvl:Z,isShowFeeList:j,filterCreatePoolCoin:te,route:b,selectFee:Ie,isCreatePool:O,feeTierList:se,currentToken:W,tokenA:c,tokenB:p,selectToken:be,showCoinSelect:H,onCoinSelect:qe,getCoinIcon:Ae,currentPoolAddress:_,poolInfo:ie,store:m,config:G,t:q,router:n,current:ee,addCommom:F,theme:Y,statsData:i,pools:h,isCreatePoolFromCoin:ne,isCreatePoolToCoin:V}}});const $=e=>(He("data-v-80017d01"),e=e(),Qe(),e),eo={class:"upgrade-liquidity-container"},oo={class:"liquidity-container"},so={class:"back-div"},no={class:"upgrade-liquidity-header"},io={class:"left"},lo={class:"select-token-box"},ao={class:"loading-token"},to={class:"label"},ro=$(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),uo=[ro],co={class:"select-token"},po={class:"label"},mo=$(()=>s("use",{"xlink:href":"#icon-icon_on"},null,-1)),vo=[mo],fo={class:"fee-tier"},ho=$(()=>s("span",null,"Fee tier",-1)),Co={key:0,class:"icon","aria-hidden":"true"},go=$(()=>s("use",{"xlink:href":"#icon-btn_edit"},null,-1)),yo=[go],ko={key:0,class:"fee-tier-box"},Io=["onClick"],bo={key:0,class:"text-active"},wo={key:1},qo={class:"right"},Ao={key:0,class:"price"},To={key:0,class:"coin"},$o={key:1,class:"coin"},Po=$(()=>s("div",null,[s("svg",{class:"icon icon-up","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),So=$(()=>s("div",null,[s("svg",{class:"icon icon-down","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),_o=[Po,So],No={class:"upgrade-liquidity-tab"},Mo={key:0,class:"header-left header-creat-pool"},Uo={key:1,class:"header-left"},Bo={key:2,class:"header-right"},Lo={class:"item"},Fo=$(()=>s("div",{class:"label"},"APR",-1)),jo={class:"value"},Ro={class:"value-border"},Oo={class:"apr-hover-content"},Do={key:0,class:"isFarming"},Eo=$(()=>s("img",{src:Ze,alt:""},null,-1)),Wo=$(()=>s("div",{class:"hover-text"},"Farming rewards available",-1)),Vo=[Eo,Wo],Ko={class:"item"},zo=$(()=>s("div",{class:"label"},"TVL",-1)),Ho={class:"value"},Qo={class:"item"},Xo=$(()=>s("div",{class:"label"},"Volume (24H)",-1)),Yo={class:"value"},Go={class:"item"},Jo=$(()=>s("div",{class:"label"},"Fees (24H)",-1)),Zo={class:"value"},xo={class:"router-view-container"};function es(e,d,q,ke,n,ee){var Y,h,G;const H=Te,j=$e,Q=Ke,oe=ae("mail-outlined"),U=Pe,b=Xe,S=ae("appstore-outlined"),c=ze,p=Se,X=ae("router-view"),_=_e,W=Ne,m=Ee("image");return f(),y("div",eo,[s("div",oo,[s("div",so,[k(H,{label:"Pools",url:e.chainName=="Sui"?"/pool/list":"/pools"},null,8,["url"]),e.$route.name!=="liquidity-creat-pool"?(f(),y("div",{key:0,class:"linkSwap",onClick:d[0]||(d[0]=D(i=>e.router.push(`/swap?from=${e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.address}&to=${e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.address}`),["stop"]))}," Trade → ")):P("",!0)]),s("div",no,[s("div",io,[s("div",lo,[s("div",{class:"select-token",onClick:d[1]||(d[1]=D(i=>e.pools.isTokenLoading?"":e.selectToken("coinA"),["stop"]))},[s("div",ao,[E(s("img",null,null,512),[[m,e.getCoinIcon(e.tokenA)]]),k(j,{address:(Y=e.tokenA)==null?void 0:Y.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),k(Q,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:T(()=>[s("p",to,I(e.tokenA?e.tokenA.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),(f(),y("svg",{class:z(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},uo,2))])]),s("div",co,[s("div",{class:"loading-token",onClick:d[2]||(d[2]=D(i=>e.pools.isTokenLoading?"":e.selectToken("coinB"),["stop"]))},[E(s("img",null,null,512),[[m,e.getCoinIcon(e.tokenB)]]),k(j,{address:(h=e.tokenB)==null?void 0:h.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),k(Q,{loading:e.pools.isTokenLoading,class:"loading-token-skeleton upgrade-reward-skeleton",active:"",paragraph:!1},{default:T(()=>[s("p",po,I(e.tokenB?e.tokenB.symbol:e.$t("modal.selectTokenModalTitle")),1)]),_:1},8,["loading"]),(f(),y("svg",{class:z(["icon",e.pools.isTokenLoading?"loading-drop-icon":""]),"aria-hidden":"true"},vo,2))])])]),s("div",fo,[s("div",{class:"fee-text",onClick:d[3]||(d[3]=D(i=>e.store.chainName=="Aptos"||e.$route.name=="liquidity-creat-pool"&&(!e.tokenA||!e.tokenB)?"":e.isShowFeeList=!e.isShowFeeList,["stop"]))},[ho,s("div",null,[s("p",null,I(e.feeValue?e.feeValue*100:"--")+"%",1),e.store.chainName!=="Aptos"?(f(),y("svg",Co,yo)):P("",!0)])]),e.isShowFeeList?(f(),y("div",ko,[(f(!0),y(We,null,Ve(e.feeTierList,(i,se)=>{var O,J,Z;return f(),y("div",{key:se,class:z(["fee-item",[e.feeValue==i.fee?"fee-item-active":"",e.isCreatePool.includes(i.fee)&&e.$route.query.action?" pool-created":" pool-not-created",e.store.chainName!=="Aptos"&&!e.isCreatePool.includes(i.fee)&&!e.filterCreatePoolCoin[(O=e.tokenA)==null?void 0:O.address]&&!e.filterCreatePoolCoin[(J=e.tokenB)==null?void 0:J.address]?"disabled":""]]),onClick:D(te=>e.selectFee(i),["stop"])},[s("p",{class:z(e.isCreatePool&&e.isCreatePool.includes(i.fee)?"text-active":"text-default")},I(i.title),3),s("div",null,[e.isCreatePool&&e.isCreatePool.includes(i.fee)?(f(),y("p",bo,I(e.poolTvl&&e.poolTvl[i.fee]&&((Z=e.poolTvl[i.fee])==null?void 0:Z.rateText)),1)):P("",!0),e.isCreatePool&&!e.isCreatePool.includes(i.fee)?(f(),y("p",wo,I(e.$t("newAdd.notCreated")),1)):P("",!0),s("span",null,I(i.text),1)])],10,Io)}),128))])):P("",!0)])]),s("div",qo,[e.$route.name!=="liquidity-privide-liquidity"&&e.$route.name!=="liquidity-creat-pool"?(f(),y("div",Ao,[((G=e.poolInfo)!=null&&G.needReverse?!e.direct:e.direct)?(f(),y("div",To,[E(s("img",null,null,512),[[m,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),R(" 1"+I(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol)+" ≈  ",1),E(s("img",null,null,512),[[m,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),R(" "+I(e.currentPrice=="--"?"--":("addCommom"in e?e.addCommom:M(F))(("decimalUi"in e?e.decimalUi:M(Ce))(e.currentPrice,6)))+" "+I(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1)])):(f(),y("div",$o,[E(s("img",null,null,512),[[m,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),R(" 1 "+I(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol)+" ≈  ",1),E(s("img",null,null,512),[[m,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),R(" "+I(e.currentPrice=="--"?"--":("addCommom"in e?e.addCommom:M(F))(("decimalUi"in e?e.decimalUi:M(Ce))(1/e.currentPrice,6)))+" "+I(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1)])),s("div",{class:"icon-change",onClick:d[4]||(d[4]=i=>e.direct=!e.direct)},_o)])):P("",!0),e.$route.name!=="liquidity-creat-pool"?(f(),y("div",{key:1,class:"linkSwap",onClick:d[5]||(d[5]=D(i=>e.router.push(`/swap?from=${e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.address}&to=${e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.address}`),["stop"]))}," Trade → ")):P("",!0)])]),s("div",No,[e.$route.name==="liquidity-creat-pool"?(f(),y("div",Mo," Create Concentrated Pool ")):(f(),y("div",Uo,[k(c,{selectedKeys:e.current,"onUpdate:selectedKeys":d[8]||(d[8]=i=>e.current=i),mode:"horizontal"},{default:T(()=>[k(b,{key:"privide"},{default:T(()=>{var i;return[k(U,{to:`/liquidity/privide-liquidity?poolAddress=${(i=e.poolInfo)==null?void 0:i.address}`},{icon:T(()=>[k(oe)]),default:T(()=>[R(" Privide Liquidity ")]),_:1},8,["to"])]}),_:1}),k(b,{key:"your",onClick:d[6]||(d[6]=i=>e.current=["your"])},{default:T(()=>{var i;return[k(U,{to:`/liquidity/your-liquidity?poolAddress=${(i=e.poolInfo)==null?void 0:i.address}`},{icon:T(()=>[k(S)]),default:T(()=>[R(" Your Liquidity ")]),_:1},8,["to"])]}),_:1}),k(b,{key:"analytics",onClick:d[7]||(d[7]=i=>e.current=["analytics"])},{default:T(()=>{var i;return[k(U,{to:`/liquidity/analytics?poolAddress=${(i=e.poolInfo)==null?void 0:i.address}`},{icon:T(()=>[k(S)]),default:T(()=>[R(" Analytics ")]),_:1},8,["to"])]}),_:1})]),_:1},8,["selectedKeys"])])),e.$route.name!=="liquidity-creat-pool"?(f(),y("div",Bo,[s("div",Lo,[Fo,s("div",jo,[s("div",Ro,[s("div",{class:z(["apr-value",e.poolInfo&&e.poolInfo.isFarming&&e.poolInfo.rewarderInfo&&e.poolInfo.rewarderInfo.length>0?"":"noCursor"])},[s("i",null,I(e.poolMoreInfo.is_display_rewarder?e.poolMoreInfo.aprTotal>0&&e.poolMoreInfo.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:M(F))(e.poolMoreInfo.aprTotal,2):e.poolMoreInfo.apr>0&&e.poolMoreInfo.apr<.01?"<0.01":("addCommom"in e?e.addCommom:M(F))(e.poolMoreInfo.apr,2))+"%",1),s("div",Oo,[k(p,{"l-item":e.poolMoreInfo,"rewarder-info":e.poolMoreInfo.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])],2)]),e.poolInfo&&e.poolInfo.isFarming&&e.poolInfo.rewarderInfo&&e.poolInfo.rewarderInfo.length>0?(f(),y("div",Do,Vo)):P("",!0)])]),s("div",Ko,[zo,s("div",Ho,"$"+I(Number(e.poolMoreInfo.liqidity)!==0&&Number(e.poolMoreInfo.liqidity)<.01?"<0.01":("addCommom"in e?e.addCommom:M(F))(e.poolMoreInfo.liqidity,2)),1)]),s("div",Qo,[Xo,s("div",Yo,"$"+I(Number(e.poolMoreInfo.vol)!==0&&Number(e.poolMoreInfo.vol)<.01?"<0.01":("addCommom"in e?e.addCommom:M(F))(e.poolMoreInfo.vol,2)),1)]),s("div",Go,[Jo,s("div",Zo,"$"+I(Number(e.poolMoreInfo.fee_24_h)!==0&&Number(e.poolMoreInfo.fee_24_h)<.01?"<0.01":("addCommom"in e?e.addCommom:M(F))(e.poolMoreInfo.fee_24_h,2)),1)])])):P("",!0)])]),s("div",xo,[k(X)]),e.showCoinSelect?(f(),ge(_,{key:0,"existing-coins":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"last-select-coin":e.currentToken=="coinA"?e.tokenA&&e.tokenA.address:e.tokenB&&e.tokenB.address,"is-create-pool-to-coin":e.isCreatePoolToCoin,"is-create-pool-from-coin":e.isCreatePoolFromCoin,onOnSelect:e.onCoinSelect,onOnClose:d[9]||(d[9]=i=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","is-create-pool-to-coin","is-create-pool-from-coin","onOnSelect"])):P("",!0),e.chainName=="Sui"&&e.isShowTokenWarning?(f(),ge(W,{key:1,"from-coin":e.warningFromCoin,"to-coin":e.warningToCoin,onClose:e.closeTokenWarning,onClickContinue:d[10]||(d[10]=i=>e.isShowTokenWarning=!1)},null,8,["from-coin","to-coin","onClose"])):P("",!0)])}const ws=De(xe,[["render",es],["__scopeId","data-v-80017d01"]]);export{ws as default};
