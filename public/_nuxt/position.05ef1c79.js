import{_ as X}from"./upgrade-loading.87a61d98.js";import{_ as z}from"./upgrade-position-item.1d81b94c.js";import{a as Q,r as w,y as Y,b as Z,m as M,l as a,H as x,R as ee,q as R,X as oe,e as se,o as l,f as r,i as O,x as N,F as te,E as ne,h as ae,v as U,w as le,B as re,c as ue,j as ie}from"./entry.a6cbae18.js";import{u as ce,c as de}from"./sha256.b069b7e0.js";import{u as pe}from"./notifi.a65524d7.js";import{u as me}from"./pool.7cff6715.js";import{u as ve}from"./wallet.aced3adf.js";import{i as q}from"./import-icon.de3e6c66.js";import{_ as ge,a as _e}from"./img-no-Positions_2x.92462f29.js";import{_ as fe,a as he}from"./img-connect-wallet_2x.464136c5.js";/* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./status-block.4ae5d36b.js";/* empty css              */import"./decimal.0bdeb344.js";import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";import"./useWhale.cc746fc0.js";import"./index.6fe08b24.js";const ye=Q({setup(){const s=w(!1),{t:S}=Y(),C=w(["position"]),G=Z(),E=M(),$=w(""),h=ce(),c=a(()=>h),A=a(()=>{const e=E.query.poolAddress,o=n.value.poolConfigObj[e];return console.log(o,"infoinfoinfo"),o}),P=a(()=>c.value.chainName?de[c.value.chainName]:{});let u=w([]);const y=me(),n=a(()=>y),V=ve(),b=a(()=>V),D=()=>{s.value=!0,u.value=[],b.value.address&&y.getMyPositons(b.value.address,n.value.poolsObj,c.value.chainName),setTimeout(()=>{s.value=!1},1e3)};x(()=>{u.value=[],y.setMyPositionsLoading(!0)}),ee(()=>{b.value.connected||(u.value=[])});const F=()=>{s.value=!0;let e=[];n.value.poolPositions.forEach(o=>{var L,f,T,B;let t,i;const p=o.amountA*((L=n.value.RATES[o.token_a.address])==null?void 0:L.price),m=o.amountB*((f=n.value.RATES[o.token_b.address])==null?void 0:f.price);(T=n.value.RATES[o.token_a.address])!=null&&T.price&&((B=n.value.RATES[o.token_b.address])!=null&&B.price)?(t=p+m,i=p+m):(t=" --",i=0),e.push({...o,amountUSD:t,amountUSDOrigin:i,tokenARates:p,tokenBRates:m})}),u.value=e,console.log(u.value,"list.value========>")};R(()=>[n.value.poolPositions,n.value.RATES,A.value],([e,o,t])=>{e&&o&&t&&(console.log("0605==>updateLpList9099999"),F())},{immediate:!0}),R(()=>[b.value.address,A.value,c.value.chainName],([e,o,t])=>{e&&o&&t&&y.getMyPositonsByPool(e,o,t)},{immediate:!0,deep:!0});const k=pe(),d=a(()=>k),j=a(()=>y),J=async e=>{await k.getSourceGroups();const o=d.value.sourceGroups&&d.value.sourceGroups.length>0&&d.value.sourceGroups[0]&&d.value.sourceGroups[0].sources||[];for(let t=0;t<o.length;t++){const{pool_address:i,position_index:p}=JSON.parse(o[t].blockchainAddress);let m=!1,L;for(let f=0;f<e.length;f++){const{poolAddress:T,index:B}=e[f];i==T&&Number(B)==Number(p)&&(m=!0),L={pool_address:i,position_index:p}}m||await k.subscribePosition(L,"",!1,!1)}},W=async()=>{await k.getSourceGroups();const e=d.value.sourceGroups&&d.value.sourceGroups.length>0&&d.value.sourceGroups[0]&&d.value.sourceGroups[0].sources||[];for(let o=0;o<e.length;o++){const{pool_address:t,position_index:i}=JSON.parse(e[o].blockchainAddress),{name:p}=e[o],m={pool_address:t,position_index:i};await k.subscribePosition(m,p,!1,!1)}},H=a(()=>j.value.myPositionsLoading);R(()=>j.value.poolPositions,(e,o)=>{P.value.hasNotifi&&(e&&e.length>0&&o&&o.length!==e.length?J(e):e&&e.length==0&&!H.value&&W())},{immediate:!0});const I=e=>{var o;return(e==null?void 0:e.logoURI)||(e==null?void 0:e.logo_url)||((o=n.value.tokensObj[e==null?void 0:e.address])==null?void 0:o.logo_url)||(c.value.theme==="default"?q("/image/coins/unknown.png"):q("/image/coins/sui-unknown.png"))},v=w(null),g=a(()=>v.value&&v.value.firstToken?v.value.firstToken:null),_=a(()=>v.value&&v.value.lastToken?v.value.lastToken:null),K=a(()=>{let e=[];e=u.value;const o=e.filter((t,i)=>g.value&&_.value?t.coinA.symbol==g.value.symbol&&t.coinB.symbol==_.value.symbol||t.coinA.symbol==_.value.symbol&&t.coinB.symbol==g.value.symbol:g.value?t.coinA.symbol.toLowerCase().includes(g.value.symbol.toLowerCase())||t.coinB.symbol.toLowerCase().includes(g.value.symbol.toLowerCase()):_.value?t.coinA.symbol.toLowerCase().includes(_.value.symbol.toLowerCase())||t.coinB.symbol.toLowerCase().includes(_.value.symbol.toLowerCase()):e);return n.value.myPositionsLoading||h.setPositiomAmount(o.length),o});return oe(()=>{h.setPositiomAmount("--")}),{showList:K,childTokenSelectRef:v,firstToken:g,lastToken:_,getCoinIcon:I,t:S,pools:n,store:c,wallet:b,list:u,clickRefresh:D,refresh:s,current:C,router:G,searchKey:$}}});const be={class:"your-liquidity-container"},ke={key:0,class:"upgrade-loading"},Le={key:1,class:"position-list"},we={key:2,class:"no-data"},Se={key:0,src:ge,alt:""},Ae={key:1,src:_e,alt:""},Pe={key:3,class:"no-data"},Te={key:0,src:fe,alt:""},Be={key:1,src:he,alt:""};function Ne(s,S,C,G,E,$){const h=X,c=z,A=re;return l(),r("div",be,[s.pools.myPositionsLoading&&s.wallet.connected?(l(),r("div",ke,[O(h,{loading:s.pools.myPositionsLoading,type:"position"},null,8,["loading"])])):N("",!0),s.showList&&s.showList.length>0&&s.wallet.connected&&!s.pools.myPositionsLoading?(l(),r("div",Le,[(l(!0),r(te,null,ne(s.showList,(P,u)=>(l(),ue(c,{key:u,"p-item":P},null,8,["p-item"]))),128))])):N("",!0),s.showList&&s.showList.length<=0&&!s.pools.myPositionsLoading&&s.wallet.connected?(l(),r("div",we,[s.store.theme=="default"?(l(),r("img",Se)):(l(),r("img",Ae)),ae("span",null,U(s.$t("common.noLiquidityPositions")),1)])):N("",!0),s.wallet.connected?N("",!0):(l(),r("div",Pe,[s.store.theme=="default"?(l(),r("img",Te)):(l(),r("img",Be)),O(A,{class:"connect-wallet",onClick:S[0]||(S[0]=P=>s.wallet.setIsShowWalletModal(!0))},{default:le(()=>[ie(U(s.$t("button.connectWallet")),1)]),_:1})]))])}const Ye=se(ye,[["render",Ne],["__scopeId","data-v-46b7787d"]]);export{Ye as default};
