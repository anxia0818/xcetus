import{s as Is,a as q,u as us,d as _s,c as K}from"./pool.a1941d40.js";import{a as es,l as v,r as A,e as ts,o as t,f as n,h as o,i as r,v as g,u as V,S as Fs,p as is,k as ds,j as N,F as U,E as ss,M as Vs,b as hs,s as Rs,w as J,t as F,B as ps,y as Bs,z as rs,A as os,x as M,P as Es,H as Os,q as x,K as Ws,Q as Hs,c as zs}from"./entry.58564c79.js";/* empty css              */import{a as ns,u as vs}from"./sha256.21b2e963.js";import{_ as Ns}from"./auto-pool-apy-tips.99697542.js";/* empty css              */import{u as Js}from"./farms.6671d8b0.js";import{_ as Ks}from"./upgrade-loading.06777c35.js";import{_ as js}from"./token-warning.dbbd8992.js";import{i as as}from"./import-icon.de3e6c66.js";import{u as cs}from"./autoPool.fc5df0fa.js";import{_ as Ts}from"./img-connect-wallet_2x.00f92a37.js";/* empty css              */import{_ as Qs}from"./img-no-Positions_2x.db6f1802.js";import"./decimal.0bdeb344.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";const Gs=es({props:{list:{type:Array,default:()=>[]},listLoading:{type:Boolean,default:!1},totalTVL:{type:Number,default:0}},setup(s){const l=ns(),b=v(()=>l),m=A(!1);return{wallet:b,sFixD:Is,loading:m,addCommom:q}}});const gs=s=>(is("data-v-77985698"),s=s(),ds(),s),Xs={class:"farms-banner-bg"},Zs={class:"vaults-banner"},xs={class:"vaults-banner-center"},so=gs(()=>o("div",{class:"title"},"Vaults",-1)),oo=gs(()=>o("div",{class:"desc"},"Automate your liquidity to enjoy high yield with ease.",-1)),eo={class:"claim-rewards"},to={class:"claim-title"},no=gs(()=>o("span",null,"Total Value Locked",-1)),lo={key:0,class:"loading-spin"},ao={key:1};function io(s,l,b,m,C,$){const _=Fs;return t(),n("div",Xs,[o("div",Zs,[o("div",xs,[so,oo,o("div",eo,[o("div",to,[no,s.listLoading?(t(),n("span",lo,[r(_)])):(t(),n("span",ao,"$"+g(("addCommom"in s?s.addCommom:V(q))(("sFixD"in s?s.sFixD:V(Is))(s.totalTVL||0,2))),1))])])])])])}const co=ts(Gs,[["render",io],["__scopeId","data-v-77985698"]]),ro=es({setup(){const s=A(!1),l=ns(),b=v(()=>l),m=Js(),C=v(()=>m),$=v(()=>C.value.farmsPoolList);return{isShowMore:s,wallet:b,walletStore:l,farmsPoolList:$}}});const G=s=>(is("data-v-6e4541ed"),s=s(),ds(),s),uo={class:"vaults-table"},_o=G(()=>o("th",null,"Vaults",-1)),ho=G(()=>o("th",null,"TVL",-1)),po=G(()=>o("th",null,"Rewards",-1)),vo=G(()=>o("th",null,"Your Holdings",-1)),go=G(()=>o("th",null,"Actions",-1)),mo=G(()=>o("tr",{style:{height:"4px",background:"unset"}},null,-1)),ko={class:"pool"},yo={class:"staked-tvl"},bo={class:"apr"},$o={class:"my-staked"},fo={class:"my-staked"},wo={class:"actions"},So=G(()=>o("tr",{style:{height:"8px",background:"unset !important"}},null,-1));function Lo(s,l,b,m,C,$){const _=Ns,d=Vs;return t(),n("div",uo,[o("table",null,[o("thead",null,[o("tr",null,[_o,ho,o("th",null,[o("span",null,[N("APY "),r(_)])]),po,vo,go]),mo]),o("tbody",null,[(t(),n(U,null,ss(4,(f,R)=>(t(),n(U,{key:R},[o("tr",null,[o("td",null,[o("div",ko,[r(d,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1}),r(d,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",yo,[r(d,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",bo,[o("span",null,[r(d,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])])]),o("td",null,[o("div",$o,[r(d,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",fo,[r(d,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",wo,[r(d,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])])]),So],64))),64))])])])}const Co=ts(ro,[["render",Lo],["__scopeId","data-v-6e4541ed"]]),Po=es({props:{pItem:{type:Object,default:()=>({})}},setup(s){const l=vs(),b=v(()=>l),m=us(),C=v(()=>m),$=c=>{var i;return(c==null?void 0:c.logoURI)||(c==null?void 0:c.logo_url)||((i=C.value.tokensObj[c==null?void 0:c.address])==null?void 0:i.logo_url)||(b.value.theme==="default"?as("/image/coins/unknown.png"):as("/image/coins/sui-unknown.png"))},_=A(!0),d=cs(),f=v(()=>d),R=v(()=>f.value.positionInfoObj[s.pItem.id]),P=hs(),w=(c,i)=>{P.push(`/vaults-detail/${c.id}?action=${i}`)},p=c=>{const i=c.needReverse,I=i?c.token_b.address:c.token_a.address,D=i?c.token_a.address:c.token_b.address;P.push(`/swap?from=${I}&to=${D}`)},e=ns(),y=v(()=>e);return console.log(s.pItem,"pItem##"),{getCoinIcon:$,direct:_,decimalUi:_s,addCommom:q,autoPool:f,positionInfo:R,toAutoPoolDetail:w,toSwap:p,wallet:y}}});const X=s=>(is("data-v-98d84d67"),s=s(),ds(),s),Ao={class:"vaults-position-card"},Io={class:"auto-position-card-conetent"},Vo={key:0,class:"no-vaults-data no-data"},Ro=X(()=>o("img",{src:Ts},null,-1)),Bo={class:"item lp-tokens"},Oo={alt:""},No={class:"right"},jo=X(()=>o("div",{class:"top"},"Your LP tokens",-1)),To={class:"bottom"},Do={key:0,class:"lp-num"},qo={key:1,class:"lp-num"},Uo={class:"item yourBanlance"},Mo=X(()=>o("div",{class:"top"},"Pooled assets",-1)),Yo={class:"bottom"},Fo={class:"token-info"},Eo={class:"token-num"},Wo={alt:""},Ho={key:0},zo={key:1},Jo=X(()=>o("p",null,"--",-1)),Ko=[Jo],Qo={class:"token-num"},Go={alt:""},Xo={key:0},Zo={key:1},xo=X(()=>o("p",null,"--",-1)),se=[xo],oe={class:"item share"},ee=X(()=>o("div",{class:"top"},"Share of pool",-1)),te={class:"bottom"},ne={key:0},le={key:1},ae=X(()=>o("div",{class:"action"},[o("div",null,[o("div",{class:"remove-btn"}," Details> ")])],-1));function ie(s,l,b,m,C,$){var f,R,P,w,p,e,y,c,i,I;const _=ps,d=Rs("image");return t(),n("div",Ao,[o("div",Io,[s.wallet.address?(t(),n("div",{key:1,class:"auto-position-card",onClick:l[1]||(l[1]=D=>s.toAutoPoolDetail(s.pItem,"deposit"))},[o("div",Bo,[F(o("img",Oo,null,512),[[d,(R=(f=s.positionInfo)==null?void 0:f.lpInfo)==null?void 0:R.logo_url]]),o("div",No,[jo,o("div",To,[(P=s.wallet)!=null&&P.connected?(t(),n("div",Do,g(("addCommom"in s?s.addCommom:V(q))(("decimalUi"in s?s.decimalUi:V(_s))((w=s.positionInfo)==null?void 0:w.myLiquidity),4))+" LP",1)):(t(),n("div",qo,"--"))])])]),o("div",Uo,[Mo,o("div",Yo,[o("div",Fo,[o("div",Eo,[F(o("img",Wo,null,512),[[d,s.pItem.needReverse?s.pItem.coinB.logo_url:s.pItem.coinA.logo_url]]),(p=s.wallet)!=null&&p.connected?(t(),n("div",Ho,[o("span",null,g(("addCommom"in s?s.addCommom:V(q))((e=s.positionInfo)==null?void 0:e.amountA)),1),N(" "+g(s.pItem.needReverse?s.pItem.coinB.symbol:s.pItem.coinA.symbol)+" ",1)])):(t(),n("div",zo,Ko))]),o("div",Qo,[F(o("img",Go,null,512),[[d,s.pItem.needReverse?s.pItem.coinA.logo_url:s.pItem.coinB.logo_url]]),(y=s.wallet)!=null&&y.connected?(t(),n("div",Xo,[o("span",null,g(("addCommom"in s?s.addCommom:V(q))((c=s.positionInfo)==null?void 0:c.amountB)),1),N(" "+g(s.pItem.needReverse?s.pItem.coinA.symbol:s.pItem.coinB.symbol)+" ",1)])):(t(),n("div",Zo,se))])])])]),o("div",oe,[ee,o("div",te,[(i=s.wallet)!=null&&i.connected?(t(),n("span",ne,g((I=s.positionInfo)==null?void 0:I.myShare)+"%",1)):(t(),n("span",le,"--%"))])]),ae])):(t(),n("div",Vo,[Ro,r(_,{class:"add-liquidity-btn",onClick:l[0]||(l[0]=D=>s.wallet.setIsShowWalletModal(!0))},{default:J(()=>[N("Connect Wallet")]),_:1})]))])])}const de=ts(Po,[["render",ie],["__scopeId","data-v-98d84d67"]]),ce=es({components:{TokenWarning:js},props:{list:{type:Array,default:()=>[]}},setup(){const{t:s}=Bs(),l=vs(),b=v(()=>l),m=us(),C=v(()=>m),$=a=>{var B;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((B=C.value.tokensObj[a==null?void 0:a.address])==null?void 0:B.logo_url)||(b.value.theme==="default"?as("/image/coins/unknown.png"):as("/image/coins/sui-unknown.png"))},_=v(()=>C.value.tokensObj),d=v(()=>b.value.statsData),f=v(()=>b.value.theme),R=cs(),P=v(()=>R),w=A({}),p=a=>{w.value[a]?w.value[a]=!1:w.value[a]=!0,console.log(w.value,"##isShowPosition.value")},e=v(()=>P.value.positionInfoObj),y=ns(),c=v(()=>y),i=A(!1),I=hs(),D=(a,B)=>{console.log(a,"item##"),I.push(`/vaults-detail/${a.id}?action=${B}`)},j=a=>{const B=a.needReverse,E=B?a.token_b.address:a.token_a.address,W=B?a.token_a.address:a.token_b.address;I.push(`/swap?from=${E}&to=${W}`)},T=A(!0);return{router:I,getCoinIcon:$,tokensObj:_,t:s,statsData:d,checkNullObj:K,addCommom:q,importIcon:as,theme:f,isShowPosition:w,togglePosition:p,positionInfo:e,wallet:c,isShowDetail:i,toAutoPoolDetail:D,toSwap:j,direct:T}}});const L=s=>(is("data-v-096b073b"),s=s(),ds(),s),re={class:"vaults-table-contianer"},ue={class:"table pc-pool-item"},_e={class:"table-header"},he={class:"table-tr"},pe=L(()=>o("th",null,"Vaults",-1)),ve=L(()=>o("th",null,"TVL",-1)),ge={class:"apy"},me=L(()=>o("span",null,"APY",-1)),ke=L(()=>o("svg",{"aria-hidden":"true",class:"icon"},[o("use",{"xlink:href":"#icon-icon-tips1"})],-1)),ye=L(()=>o("th",null,"Rewards",-1)),be=L(()=>o("th",null,"Your Holdings",-1)),$e=L(()=>o("th",null,"Actions",-1)),fe=L(()=>o("tr",{style:{height:"4px",background:"unset"}},null,-1)),we={class:"table-body"},Se=["onClick"],Le={class:"token"},Ce={class:"img-box"},Pe={class:"img-box img-last-box"},Ae={class:"name"},Ie={class:"top"},Ve={class:"token-name"},Re={class:"tokena"},Be={class:"tokenb"},Oe={class:"fee-warning"},Ne={class:"fee-tier-top"},je={key:0},Te={class:"skeleton-box"},De={key:1},qe={key:2},Ue={class:"skeleton-box"},Me={key:3},Ye={class:"rewards-coin"},Fe={key:4},Ee={class:"skeleton-box"},We={key:5},He={class:"show-position"},ze={class:"svg-icon"},Je=L(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ke=[Je],Qe={key:0,class:"table-tr view-table-tr"},Ge={colspan:"6"},Xe=L(()=>o("td",null,null,-1)),Ze=L(()=>o("tr",{style:{height:"8px",background:"unset"}},null,-1)),xe={class:"h5-pool-item"},st={class:"token"},ot={class:"img-box"},et={key:0,class:"pool-warning"},tt={class:"img-box img-last-box"},nt={key:0,class:"pool-warning"},lt={class:"name"},at={class:"top"},it={class:"token-name"},dt={class:"tokena"},ct={class:"tokenb"},rt={class:"fee-warning"},ut={class:"fee-tier-top"},_t={class:"bottom"},ht={class:"row"},pt=L(()=>o("div",{class:"left"},"TVL",-1)),vt={key:0,class:"right"},gt={key:1,class:"right"},mt={class:"row"},kt=L(()=>o("div",{class:"left"},"APY",-1)),yt={key:0,class:"right"},bt={key:1,class:"right theme-right"},$t={class:"row"},ft=L(()=>o("div",{class:"left"},"Rewards",-1)),wt={class:"right"},St={class:"rewards-coin"},Lt={class:"row"},Ct=L(()=>o("div",{class:"left"},"Your Holdings",-1)),Pt={key:0,class:"right"},At={key:1,class:"right"},It=["onClick"],Vt=L(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Rt=[Vt],Bt={key:0,class:"h5-auto-pool-details"},Ot={class:"h5-item lp-tokens"},Nt=L(()=>o("div",{class:"top"},"Your LP tokens",-1)),jt={class:"bottom"},Tt={key:0,class:"lp-num"},Dt={key:1,class:"lp-num"},qt={class:"h5-item share"},Ut=L(()=>o("div",{class:"top"},"Share",-1)),Mt={class:"bottom"},Yt={key:0},Ft={key:1},Et={class:"h5-item yourBanlance"},Wt=L(()=>o("div",{class:"top"},"Pooled assets",-1)),Ht={class:"bottom"},zt={class:"token-info"},Jt={class:"token-num"},Kt={alt:""},Qt={key:0},Gt={key:1},Xt=L(()=>o("p",null,"--",-1)),Zt=[Xt],xt={class:"token-num"},sn={alt:""},on={key:0},en={key:1},tn=L(()=>o("p",null,"--",-1)),nn=[tn],ln={class:"action"},an=["onClick"];function dn(s,l,b,m,C,$){const _=Ns,d=js,f=Vs,R=Es,P=ps,w=de,p=Rs("image");return t(),n("div",re,[o("table",ue,[o("thead",_e,[o("tr",he,[pe,ve,o("th",null,[o("div",ge,[me,ke,r(_)])]),ye,be,$e]),fe]),o("tbody",we,[(t(!0),n(U,null,ss(s.list,(e,y)=>{var c,i,I,D,j,T,a,B,E,W,Q;return t(),n(U,{key:y},[o("tr",{class:"table-tr",onClick:Y=>s.togglePosition(y)},[o("td",null,[o("div",Le,[o("div",Ce,[F(o("img",null,null,512),[[p,s.getCoinIcon(e.needReverse?e.coinB:e.coinA)]]),r(d,{address:e.needReverse?(i=e==null?void 0:e.coinB)==null?void 0:i.address:(c=e==null?void 0:e.coinA)==null?void 0:c.address,"style-params":{right:0,bottom:0,width:"14px",height:"14px"}},null,8,["address"])]),o("div",Pe,[F(o("img",null,null,512),[[p,s.getCoinIcon(e.needReverse?e.coinA:e.coinB)]]),r(d,{address:e.needReverse?(D=e.coinA)==null?void 0:D.address:(I=e==null?void 0:e.coinB)==null?void 0:I.address,"style-params":{right:0,bottom:0,width:"14px",height:"14px"}},null,8,["address"])]),o("div",Ae,[o("div",Ie,[o("p",Ve,[o("span",Re,g(e.needReverse?(T=e==null?void 0:e.coinB)==null?void 0:T.symbol:(j=e==null?void 0:e.coinA)==null?void 0:j.symbol),1),N(" - "),o("span",Be,g(e.needReverse?(a=e==null?void 0:e.coinA)==null?void 0:a.symbol:(B=e==null?void 0:e.coinB)==null?void 0:B.symbol),1)]),o("div",Oe,[o("div",Ne,g((e==null?void 0:e.fee)*100)+"%",1)])])])])]),("checkNullObj"in s?s.checkNullObj:V(K))(s.statsData)?(t(),n("td",je,[o("div",Te,[r(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",De," $"+g(Number(e.poolUSD)!==0&&Number(e.poolUSD)<.01?"<0.01":("addCommom"in s?s.addCommom:V(q))(e.poolUSD,2)),1)),("checkNullObj"in s?s.checkNullObj:V(K))(s.statsData)?(t(),n("td",qe,[o("div",Ue,[r(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",Me,g(e.apy),1)),o("td",null,[r(R,{"overlay-class-name":"reward-coin-tips"},{title:J(()=>[N("Rewards will be auto harvested and compounded to your position.")]),default:J(()=>[o("div",Ye,[(t(!0),n(U,null,ss(e.rewardList,Y=>(t(),n("div",{key:Y,class:"img-box"},[F(o("img",null,null,512),[[p,s.getCoinIcon({address:Y})]]),r(d,{address:Y,"style-params":{right:0,bottom:0,width:"8px",height:"8px"}},null,8,["address"])]))),128))])]),_:2},1024)]),(E=s.wallet)!=null&&E.connected&&!s.positionInfo[e.id].myLiquidityUSD?(t(),n("td",Fe,[o("div",Ee,[r(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",We,[s.wallet.connected?(t(),n(U,{key:0},[N(g(((W=s.positionInfo[e.id])==null?void 0:W.myLiquidityUSD)!=="<0.01"?`$${("addCommom"in s?s.addCommom:V(q))((Q=s.positionInfo[e.id])==null?void 0:Q.myLiquidityUSD)}`:"<$0.01"),1)],64)):(t(),n(U,{key:1},[N("--")],64))])),o("td",null,[o("div",He,[r(P,{class:"add-liquidity-btn",onClick:rs(Y=>s.router.push(`/vaults-detail/${e.id}?action=deposit`),["stop"])},{default:J(()=>[N("Deposit")]),_:2},1032,["onClick"]),o("div",ze,[(t(),n("svg",{"aria-hidden":"true",class:os(["icon",s.isShowPosition&&s.isShowPosition[y]?"icon-open":""])},Ke,2))])])])],8,Se),s.isShowPosition&&s.isShowPosition[y]?(t(),n("tr",Qe,[o("td",Ge,[r(w,{"p-item":e},null,8,["p-item"])]),Xe])):M("",!0),Ze],64)}),128))])]),o("div",xe,[(t(!0),n(U,null,ss(s.list,(e,y)=>{var c,i,I,D,j,T,a,B,E,W,Q,Y;return t(),n("div",{key:e.address,class:"item"},[o("div",st,[o("div",ot,[F(o("img",null,null,512),[[p,s.getCoinIcon(e.needReverse?e.coinB:e.coinA)]]),(e.needReverse?(i=s.tokensObj[e.coinB.address])!=null&&i.isSelfBuilt:(c=s.tokensObj[e.coinA.address])!=null&&c.isSelfBuilt)?(t(),n("div",et)):M("",!0)]),o("div",tt,[F(o("img",null,null,512),[[p,s.getCoinIcon(e.needReverse?e.coinA:e.coinB)]]),(e.needReverse?(I=s.tokensObj[e.coinA.address])!=null&&I.isSelfBuilt:(D=s.tokensObj[e.coinB.address])!=null&&D.isSelfBuilt)?(t(),n("div",nt)):M("",!0)]),o("div",lt,[o("div",at,[o("p",it,[o("span",dt,g(e.needReverse?e.coinB.symbol:e.coinA.symbol),1),N(" - "),o("span",ct,g(e.needReverse?e.coinA.symbol:e.coinB.symbol),1)]),o("div",rt,[o("div",ut,g((e==null?void 0:e.fee)*100)+"%",1)])])])]),o("div",_t,[o("div",ht,[pt,("checkNullObj"in s?s.checkNullObj:V(K))(s.statsData)?(t(),n("div",vt,[r(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",gt," $"+g(Number(e.poolUSD)!==0&&Number(e.poolUSD)<.01?"<0.01":("addCommom"in s?s.addCommom:V(q))(e.poolUSD,2)),1))]),o("div",mt,[kt,("checkNullObj"in s?s.checkNullObj:V(K))(s.statsData)?(t(),n("div",yt,[r(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",bt,[o("span",null,g(e.apy),1),r(_)]))]),o("div",$t,[ft,o("div",wt,[r(R,{"overlay-class-name":"reward-coin-tips"},{title:J(()=>[N("Rewards will be auto harvested and compounded to your position.")]),default:J(()=>[o("div",St,[(t(!0),n(U,null,ss(e.rewardList,H=>(t(),n("div",{key:H,class:"img-box"},[F(o("img",null,null,512),[[p,s.getCoinIcon({address:H})]]),r(d,{address:H,"style-params":{right:0,bottom:0,width:"8px",height:"8px"}},null,8,["address"])]))),128))])]),_:2},1024)])]),o("div",Lt,[Ct,("checkNullObj"in s?s.checkNullObj:V(K))(s.positionInfo)&&((j=s.wallet)!=null&&j.connected)?(t(),n("div",Pt,[r(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",At,[(T=s.wallet)!=null&&T.connected?(t(),n(U,{key:0},[N(g(((a=s.positionInfo[e.id])==null?void 0:a.myLiquidityUSD)!=="<0.01"?`$${("addCommom"in s?s.addCommom:V(q))((B=s.positionInfo[e.id])==null?void 0:B.myLiquidityUSD)}`:"<$0.01"),1)],64)):(t(),n(U,{key:1},[N("--")],64))]))])]),r(P,{class:"h5-add-liquidity-btn",onClick:rs(H=>s.router.push(`/vaults-detail/${e.id}?action=deposit`),["stop"])},{default:J(()=>[N("Deposit")]),_:2},1032,["onClick"]),o("div",{class:os(["details-btn",s.isShowPosition&&s.isShowPosition[y]?"details-btn-text-active":""]),onClick:H=>s.togglePosition(y)},[(t(),n("svg",{"aria-hidden":"true",class:os(["icon",s.isShowPosition&&s.isShowPosition[y]?"icon-active":""])},Rt,2))],10,It),s.isShowPosition&&s.isShowPosition[y]?(t(),n("div",Bt,[o("div",Ot,[Nt,o("div",jt,[(E=s.wallet)!=null&&E.connected?(t(),n("div",Tt,g(("addCommom"in s?s.addCommom:V(q))(("decimalUi"in s?s.decimalUi:V(_s))(e==null?void 0:e.myLiquidity,4)))+" LP",1)):(t(),n("div",Dt,"--"))])]),o("div",qt,[Ut,o("div",Mt,[(W=s.wallet)!=null&&W.connected?(t(),n("span",Yt,g(e==null?void 0:e.myShare)+"%",1)):(t(),n("span",Ft,"--%"))])]),o("div",Et,[Wt,o("div",Ht,[o("div",zt,[o("div",Jt,[F(o("img",Kt,null,512),[[p,e.needReverse?e.coinB.logo_url:e.coinA.logo_url]]),(Q=s.wallet)!=null&&Q.connected?(t(),n("div",Qt,[o("span",null,g(("addCommom"in s?s.addCommom:V(q))(e==null?void 0:e.amountA))+" "+g(e.needReverse?e.coinB.symbol:e.coinA.symbol),1)])):(t(),n("div",Gt,Zt))]),o("div",xt,[F(o("img",sn,null,512),[[p,e.needReverse?e.coinA.logo_url:e.coinB.logo_url]]),(Y=s.wallet)!=null&&Y.connected?(t(),n("div",on,[o("span",null,g(("addCommom"in s?s.addCommom:V(q))(e==null?void 0:e.amountB))+" "+g(e.needReverse?e.coinA.symbol:e.coinB.symbol),1)])):(t(),n("div",en,nn))])])])]),o("div",ln,[o("div",null,[o("div",{class:"remove-btn",onClick:H=>s.toAutoPoolDetail(e,"remove")},"Details",8,an)])])])):M("",!0)])}),128))])])}const cn=ts(ce,[["render",dn],["__scopeId","data-v-096b073b"]]),rn=es({props:{selectValue:{type:String,default:""},showList:{type:Object,default:()=>({})}},setup(s,l){const b=["All Vaults","My Vaults"],m=A("All Vaults"),C=A(s.selectValue),$=A(!1),_=A(!1),d=ns(),f=v(()=>d),R=cs(),P=v(()=>R),w=v(()=>P.value.autoPoolList),p=()=>s.showList.length,e=()=>{l.emit("clickRefresh")},y=i=>{C.value=i,l.emit("changeSort",i)},c=i=>{m.value=i,console.log(i,"itemitem"),i=="My Vaults"?l.emit("changeTab",!0):l.emit("changeTab",!1)};return Os(()=>{document.addEventListener("click",()=>{_.value=!1})}),{isOpenList:_,wallet:f,changeSort:y,tabList:b,currentTab:m,sortValue:C,clickRefresh:e,isRefresh:$,vaultsPoolList:w,getListNum:p,changeTab:c}}});const ls=s=>(is("data-v-1d1eae2e"),s=s(),ds(),s),un={class:"vaults-tab"},_n={class:"tab-left"},hn=["onClick"],pn={key:0},vn={class:"tab-right"},gn={class:"sort-select"},mn=ls(()=>o("div",null,"Sort by",-1)),kn={class:"showSort"},yn=ls(()=>o("svg",{class:"sort-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),bn=ls(()=>o("use",{"xlink:href":"#icon-icon_arrow"},null,-1)),$n=[bn],fn={key:0,class:"sort-list"},wn=ls(()=>o("svg",{class:"sort-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),Sn=ls(()=>o("svg",{class:"sort-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),Ln={class:"refresh"},Cn=ls(()=>o("use",{"xlink:href":"#icon-icon-refresh2"},null,-1)),Pn=[Cn];function An(s,l,b,m,C,$){return t(),n("div",un,[o("div",_n,[(t(!0),n(U,null,ss(s.tabList,_=>(t(),n("div",{key:_,class:os(["tab-item",s.currentTab==_?"tab-item-active":""]),onClick:d=>s.changeTab(_)},[o("span",null,g(_),1),s.currentTab==_&&s.getListNum()?(t(),n("p",pn,g(s.currentTab=="My Vaults"&&!s.wallet.address?0:s.getListNum()),1)):M("",!0)],10,hn))),128))]),o("div",vn,[o("div",gn,[o("div",{class:"sort-select-box",onClick:l[0]||(l[0]=rs(_=>s.isOpenList=!s.isOpenList,["stop"]))},[mn,o("div",kn,[o("span",null,g(s.sortValue),1),yn,(t(),n("svg",{class:os(["arrow-icon",s.isOpenList?"arrow-icon-active":""]),"aria-hidden":"true"},$n,2))])]),s.isOpenList?(t(),n("div",fn,[o("div",{class:"sort-item",onClick:l[1]||(l[1]=_=>s.changeSort("APY"))},[N(" APY "),wn]),o("div",{class:"sort-item",onClick:l[2]||(l[2]=_=>s.changeSort("TVL"))},[N(" TVL "),Sn])])):M("",!0)]),o("div",Ln,[(t(),n("svg",{"aria-hidden":"true",class:os(["refresh-icon",s.isRefresh?"refreshing":""]),onClick:l[3]||(l[3]=(..._)=>s.clickRefresh&&s.clickRefresh(..._))},Pn,2))])])])}const In=ts(rn,[["render",An],["__scopeId","data-v-1d1eae2e"]]),Vn=es({components:{VaultsTabs:In},setup(){Bs();const s=vs(),l=v(()=>s),b=us(),m=v(()=>b),C=cs(),$=v(()=>C),_=ns(),d=v(()=>_),f=v(()=>$.value.positionInfoObj),R=v(()=>l.value.chainName),P=A(!1),w=A(!1),p=A("TVL"),e=A(["APY"]),y=A(!1),c=h=>{console.log(h,"w121");const O=[];O.push(p.value),e.value.forEach((S,u)=>{S!=h&&O.push(S)}),e.value=O,p.value=h,D($.value.positionInfoList)};Os(()=>{document.addEventListener("click",()=>{Y("")})});const i=A([]),I=A(!0),D=h=>{console.log(h,p.value,"##poolListselectValue.valueselectValue.value");const O=[];h.filter(u=>!u.is_pause).forEach(u=>{var ks,ys,bs,$s,fs,ws,Ss,Ls,Cs,Ps,As;const k=l.value.addressLpTokens[u.address],z=m.value.poolsObj[u.address];console.log($.value.apyObj,"##autoPool.value.apyObj");const Z=((ks=$.value.apyObj[u.id])==null?void 0:ks.apr)||"0%",Ds=((ys=$.value.apyObj[u.id])==null?void 0:ys.resultApr)||"0",qs=((bs=$.value.apyObj[u.id])==null?void 0:bs.tvl)||0;console.log(u.autoPoolPositionInfo.id,"###watchPools 246"),console.log(k,"##statsObj");const Us=u.needReverse?((Ss=m.value.tokensObj[(ws=u.coinB)==null?void 0:ws.address])==null?void 0:Ss.labels)||[]:((fs=m.value.tokensObj[($s=u.coinA)==null?void 0:$s.address])==null?void 0:fs.labels)||[],Ms=u.needReverse?((Cs=m.value.tokensObj[(Ls=u.coinA)==null?void 0:Ls.address])==null?void 0:Cs.labels)||[]:((As=m.value.tokensObj[(Ps=u.coinB)==null?void 0:Ps.address])==null?void 0:As.labels)||[],Ys=[...new Set(Us.concat(Ms))];O.push({...u,liqidity:qs,vol:k?k.vol_in_usd_24h:"0",fee:u.fee?u.fee:z!=null&&z.fee?z.fee:"--",labels:Ys,isFarming:u==null?void 0:u.isFarming,fee_24_h:k&&k.fee_24_h,apy:Z,resultApr:Ds})});let S=[];p.value=="APY"?(console.log(p.value,"selectValue.valueselectValue.value"),S=O.sort((u,k)=>Number(k.resultApr)-Number(u.resultApr))):S=O.sort((u,k)=>Number(k.liqidity)-Number(u.liqidity)),i.value=S,console.log(i.value.length,"##list.value.length"),b.setAutoPoolNum(i.value.length),I.value=!1,console.log(i.value,"##list.value")};x(()=>[$.value.positionInfoList,$.value.apyObj,m.value.poolConfigObj],([h,O,S])=>{console.log("执行次数###",S),h&&h.length>0&&S&&!K(S)&&(console.log(h,"###autoPoolList"),D(h))},{immediate:!0,deep:!0}),x(()=>[d.value.address,$.value.autoPoolList,m.value.poolConfigObj],([h,O,S])=>{h&&O&&O.length>0&&S&&!K(S)&&C.getMyAutoPoolPosition()},{immediate:!0});const j=A(null),T=v(()=>j.value&&j.value.firstToken?j.value.firstToken:null),a=v(()=>j.value&&j.value.lastToken?j.value.lastToken:null),B=A(),E=A(0),W=()=>{let h=[];h=i.value,console.log(h,"##pageList"),E.value=h.reduce((k,z)=>Number(k)+Number(z.poolUSD),0);const O=h.filter((k,z)=>T.value&&a.value?k.coinA.address==T.value.address&&k.coinB.address==a.value.address||k.coinA.address==a.value.address&&k.coinB.address==T.value.address:T.value?k.coinA.address.toLowerCase().includes(T.value.address.toLowerCase())||k.coinB.address.toLowerCase().includes(T.value.address.toLowerCase()):a.value?k.coinA.address.toLowerCase().includes(a.value.address.toLowerCase())||k.coinB.address.toLowerCase().includes(a.value.address.toLowerCase()):h);let S=[],u=[];console.log(O,"##filterArr"),O.forEach((k,z)=>{console.log(k,"irem##");const Z=f.value&&f.value[k.id];console.log(Z,"##positionInfo"),P.value&&Number(Z==null?void 0:Z.myLiquidity)>0&&d.value.connected?u.push(k):S.push({...k})}),console.log(S,"121arrnewValnewValnewVal"),B.value=P.value&&d.value.connected?u:S,console.log(B.value,"##showList.value "),I.value||(P.value&&d.value.connected?b.setAutoPoolNum(u.length):b.setAutoPoolNum(S.length))};x(()=>[T.value,a.value,i.value,P.value,d.value.address],([h,O,S,u])=>{(h||O||S||u)&&(console.log("newValnewValnewVal",h,O,S,JSON.stringify(S)),W())},{immediate:!0}),Ws(()=>{b.setAutoPoolNum("--")});const Q=v(()=>m.value.autoPoolNum),Y=h=>{h=="label"?(s.setIsSelect("pools"),y.value=!y.value,w.value=!1,l.value.setIsShowMore(!1)):h=="select"?(s.setIsSelect("pools"),w.value=!w.value,y.value=!1,l.value.setIsShowMore(!1)):(w.value=!1,y.value=!1)};x(()=>l.value.isSelect,h=>{h!=="pools"&&Y("")},{immediate:!0});const H=hs(),ms=()=>{I.value=!0,C.getAutoPoolList(),C.getAutoPoolAPY()};return x(()=>l.value.isRefresh,h=>{ms()},{immediate:!0}),x(()=>R.value,h=>{h=="Aptos"&&H.push("/pools")},{immediate:!0}),{totalTVL:E,clickRefresh:ms,isMyLiquidity:P,chainName:R,store:l,select:w,selectValue:p,selectList:e,label:y,changeSort:c,list:i,listLoading:I,showList:B,childTokenSelectRef:j,wallet:d,autoPoolNum:Q}}});const Rn={class:"vaults-container-new"},Bn={class:"vaults-container-center"},On={class:"auto-pool"},Nn={key:0,class:"no-vaults-data no-data"},jn=o("img",{src:Ts},null,-1),Tn={key:0,class:"upgrade-loading pc-loading"},Dn={key:1,class:"upgrade-loading h5-loading"},qn={key:3,class:"no-vaults-data"},Un=o("img",{src:Qs},null,-1),Mn=o("span",{class:"no-vaults"},"No vaults found",-1),Yn=[Un,Mn];function Fn(s,l,b,m,C,$){const _=co,d=Hs("VaultsTabs"),f=ps,R=Co,P=Ks,w=cn;return t(),n("div",Rn,[r(_,{list:s.showList,"total-t-v-l":s.totalTVL,"list-loading":s.listLoading},null,8,["list","total-t-v-l","list-loading"]),o("div",Bn,[r(d,{"select-value":s.selectValue,"show-list":s.showList,onChangeSort:l[0]||(l[0]=p=>s.changeSort(p)),onChangeTab:l[1]||(l[1]=p=>{s.isMyLiquidity=p}),onClickRefresh:s.clickRefresh},null,8,["select-value","show-list","onClickRefresh"]),o("div",On,[s.isMyLiquidity&&!s.wallet.address?(t(),n("div",Nn,[jn,r(f,{class:"add-liquidity-btn",onClick:l[2]||(l[2]=p=>s.wallet.setIsShowWalletModal(!0))},{default:J(()=>[N("Connect Wallet")]),_:1})])):M("",!0),s.isMyLiquidity&&s.wallet.address&&s.listLoading||!s.isMyLiquidity&&s.listLoading?(t(),n(U,{key:1},[s.listLoading?(t(),n("div",Tn,[r(R)])):M("",!0),s.listLoading?(t(),n("div",Dn,[r(P,{type:"poolsCard",loading:!0,source:"vaults"})])):M("",!0)],64)):M("",!0),s.isMyLiquidity&&s.wallet.address&&!s.listLoading||!s.isMyLiquidity&&!s.listLoading?(t(),zs(w,{key:2,list:s.showList},null,8,["list"])):M("",!0),s.autoPoolNum!=="--"&&Number(s.autoPoolNum)<=0&&!s.listLoading?(t(),n("div",qn,Yn)):M("",!0)])])])}const al=ts(Vn,[["render",Fn]]);export{al as default};
