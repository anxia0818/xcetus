import{i as $}from"./import-icon.de3e6c66.js";import{u as ue,a as le,e as ce,p as de,N as be}from"./pool.7cff6715.js";import{a as ve,$ as pe,L as _e,y as he,l as S,r as L,H as fe,q as z,ai as ge,e as me,Q as Z,s as ke,o as r,c as oe,w as f,h as a,t as q,a9 as Ce,f as i,x as I,F as E,E as H,A as K,u as Q,v as b,i as N,j,z as ye,P as we,aj as Se,S as Le,p as Te,k as Ie}from"./entry.a6cbae18.js";/* empty css              *//* empty css              */import{u as Ne}from"./wallet.aced3adf.js";import{u as te}from"./sha256.b069b7e0.js";import{_ as $e,a as Ae}from"./img-no-Positions_2x.92462f29.js";const Oe=ve({components:{Modal:pe,LoadingOutlined:_e},props:{existingCoins:{type:String,default:""},lastSelectCoin:{type:String,default:""},isCreatePoolToCoin:{type:Boolean,default:!1},isCreatePoolFromCoin:{type:Boolean,default:!1}},setup(s,_){const{t:n,locale:ae}=he(),W=Ne(),g=S(()=>W),T=ue(),c=S(()=>T),P=te(),h=S(()=>P),A=S(()=>{var t;return(t=h.value)==null?void 0:t.filterCreatePoolCoin}),M=S(()=>{const t=[n("tab.all"),n("tab.native")],u=Array.from(new Set(c.value.tokens.flatMap(v=>v.labels?v.labels:null)));return console.log(u,"newArr"),h.value.theme=="default"?t.concat(u):[n("tab.all"),n("tab.native"),n("tab.wormhole"),n("tab.celer")]}),d=L(n("tab.all")),o=L(n("tab.all")),y=te(),B=S(()=>y.chainName),m=L([]);console.log(m,"===>tokenList");const O=L(null);fe(()=>{});const R=L(!1);z(d,t=>{t!==n("tab.all")&&(R.value=!1),t==n("tab.all")?o.value=n("tab.all"):t==n("tab.layerZero")?o.value=n("tab.layerZero"):t==n("tab.wormhole")?o.value=n("tab.wormhole"):t==n("tab.celer")?o.value=n("tab.celer"):t==n("tab.native")&&(o.value=n("tab.native")),F(O.value)});const F=async t=>{var J,X,Y,V,x,ee,se;let u=[],v=c.value.tokens;if(!(h.value.chainName&&v&&v[0]&&h.value.chainName.toLowerCase().includes((J=v[0])==null?void 0:J.chain))){m.value=[];return}let D=v;if(t&&t.split("::")&&t.split("::").length==3&&B.value=="Sui"){const l=ce("Sui");try{const e=c.value.tokensObj[t]||await l.getTokenBySymbol(c.value.tokens,t);e&&((X=v.filter(p=>(p==null?void 0:p.address)===(e==null?void 0:e.address)))==null?void 0:X.length)<1&&(T.setNewTokens({[t]:e}),D=v.concat(e))}catch(e){console.log("searchToken##err##",e)}}let G=!1;for(const l of Object.keys(D)){let e=ge(D[l]);const p=g.value.assets[e.address]&&g.value.assets[e.address].balance?de(g.value.assets&&g.value.assets[e.address].balance,e.decimals):0;s.lastSelectCoin&&e&&e.address===s.lastSelectCoin?(e.unusable=!0,G=!0):e.unusable=!1;const re=((Y=c.value.tokensObj[e.address])==null?void 0:Y.labels)&&((V=c.value.tokensObj[e.address])==null?void 0:V.labels[0]),ie=c.value.tokensObj[e.address]?(x=c.value.tokensObj[e.address])==null?void 0:x.name:e.name;e={...e,balance:p,labels:re,name:ie,sort:(h.value.chainName==="Aptos"?e.symbol=="APT":e.symbol=="SUI")?1:-1},u.push(e)}if(!G&&c.value.tokensObj[s.lastSelectCoin]){const l={...c.value.tokensObj[s.lastSelectCoin],unusable:!0};u.push(l)}let w;g.value.address?w=u.sort((l,e)=>e.balance-l.balance):w=u;let k=[];if(t){console.log(w,"sortResult=====>");const l=w.filter(e=>e.symbol.toLowerCase().indexOf(t.toLowerCase())!==-1||e.address.toLowerCase().indexOf(t.toLowerCase())!==-1||e.address.toLowerCase().indexOf(be(t).full_address.toLowerCase())!==-1||e.name.toLowerCase().indexOf(t.toLowerCase())!==-1);console.log(l,"===>result"),d.value!==n("tab.all")?k=l.filter(p=>d.value==n("tab.native")?!p.labels||p.labels=="Native":p.labels&&p.labels.toLowerCase()==d.value.toLowerCase()):k=l}else console.log(d.value,"===>currentTab.value"),d.value!==n("tab.all")?k=w.filter(e=>d.value==n("tab.native")?!e.labels||e.labels=="Native":e.labels&&e.labels.toLowerCase()==d.value.toLowerCase()):k=w;s.isCreatePoolToCoin?m.value=(ee=k.filter(l=>A.value[l==null?void 0:l.address]))==null?void 0:ee.sort((l,e)=>e.sort-l.sort).sort((l,e)=>e.unusable-l.unusable):m.value=k.sort((l,e)=>e.sort-l.sort).sort((l,e)=>e.unusable-l.unusable),s.isCreatePoolFromCoin&&(m.value=(se=k.filter(l=>!A.value[l==null?void 0:l.address]))==null?void 0:se.sort((l,e)=>e.sort-l.sort).sort((l,e)=>e.unusable-l.unusable)),console.log(m.value,"tokenList.value===>322")},ne=t=>{t.unusable||(_.emit("onSelect",t),_.emit("onClose"))};z(()=>[O.value,R.value],([t,u])=>{console.log(t,"===>keyword"),F(t)},{immediate:!0});const U=L([]);return z(()=>c.value.tokens,t=>{t&&(console.log(c.value.tokens,"===>pools.value.tokens"),F(O.value),U.value=t.filter(u=>(s.lastSelectCoin&&u.address===s.lastSelectCoin?u.unusable=!0:u.unusable=!1,u.suggested_priority&&u.suggested_priority>0)).sort((u,v)=>Number(v.suggested_priority)-Number(u.suggested_priority)),console.log(U.value,"===>popularList.value"))},{immediate:!0}),{getCoinIcon:t=>{var u;return(t==null?void 0:t.logoURI)||(t==null?void 0:t.logo_url)||((u=c.value.tokensObj[t==null?void 0:t.address])==null?void 0:u.logo_url)||(h.value.theme==="default"?$("/image/coins/unknown.png"):$("/image/coins/sui-unknown.png"))},popularList:U,pools:c,t:n,chainName:B,tabList:M,currentTab:d,addCommom:le,tokenList:m,importIcon:$,keyword:O,wallet:g,toSelect:ne,store:h,isShowAll:R}}}),je=""+globalThis.__publicAssetsURL("sui-image/token-warning@2x.png");const C=s=>(Te("data-v-4b20bf7a"),s=s(),Ie(),s),Pe=C(()=>a("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Me={class:"coin-select-modal"},Be={class:"search-input"},Re=["placeholder"],Fe=C(()=>a("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),Ue=[Fe],De={key:0,class:"popular"},ze=["onClick"],Ze={class:"tab-list"},qe=["onClick"],Ee={key:0,class:"item"},He=C(()=>a("div",{class:"line"},null,-1)),Ke={class:"coin-list-box"},Qe={key:0,class:"coin-list"},We=["onClick"],Ge={class:"left"},Je={alt:""},Xe={class:"name-box"},Ye=["onClick"],Ve=C(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-copy"})],-1)),xe=C(()=>a("img",{src:je,alt:""},null,-1)),es={key:0,class:"label"},ss={class:"balance-box"},os={class:"balance"},ts={key:0},ls={key:1},as={key:2},ns={key:3},rs=C(()=>a("p",null,null,-1)),is={key:1,class:"no-data"},us={key:0,class:"token-loading"},cs={key:1,class:"no-data-content"},ds={key:0,src:$e},bs={key:1,src:Ae},vs=C(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-information"})],-1));function ps(s,_,n,ae,W,g){const T=we,c=Z("loading-outlined"),P=Se,h=Le,A=Z("vue-scroll"),M=Z("Modal"),d=ke("image");return r(),oe(M,{title:s.$t("modal.selectTokenModalTitle"),class:"select-mod",width:420,centered:"",visible:!0,footer:null,onCancel:_[2]||(_[2]=o=>s.$emit("onClose"))},{closeIcon:f(()=>[Pe]),default:f(()=>[a("div",Me,[a("div",Be,[q(a("input",{"onUpdate:modelValue":_[0]||(_[0]=o=>s.keyword=o),onkeyup:"value=value.replace(/[^[a-zA-Z0-9\\s]+$/g,'')",placeholder:s.$t("inputPlaceholder.selectTokenModalPlaceholder")},null,8,Re),[[Ce,s.keyword]]),s.keyword?(r(),i("svg",{key:0,class:"clear-icon icon modal-icon-close","aria-hidden":"true",onClick:_[1]||(_[1]=o=>s.keyword="")},Ue)):I("",!0)]),s.popularList&&s.popularList.length>0?(r(),i("div",De,[(r(!0),i(E,null,H(s.popularList,o=>(r(),i("div",{key:o.address,class:K(["img-box",o.unusable?"img-box-unusable":"img-box-usable"]),onClick:y=>s.toSelect(o)},[q(a("img",null,null,512),[[d,o.icon||o.logo_url||(s.store.theme=="default"?("importIcon"in s?s.importIcon:Q($))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:Q($))("/image/coins/sui-unknown.png"))]]),a("span",null,b(o.symbol),1)],10,ze))),128))])):I("",!0),a("div",Ze,[(r(!0),i(E,null,H(s.tabList,(o,y)=>(r(),i("div",{key:y,class:K(["item-container",s.currentTab==o?"item-container-active item-container":"item-container"]),onClick:B=>s.currentTab=o},[o!==null&&o!=="test"?(r(),i("div",Ee,b(o),1)):I("",!0)],10,qe))),128))]),He,a("div",Ke,[N(A,null,{default:f(()=>[s.tokenList&&s.tokenList.length>0?(r(),i("ul",Qe,[(r(!0),i(E,null,H(s.tokenList,o=>(r(),i("li",{key:o.address,class:K(o.unusable?"unusable":""),onClick:y=>s.toSelect(o)},[a("div",Ge,[q(a("img",Je,null,512),[[d,s.getCoinIcon(o)]]),a("div",Xe,[a("span",null,[j(b(o.symbol)+" ",1),a("span",{class:"copy-text",onClick:ye(y=>s.store.copy(o&&o.address),["stop"])},[j(b(o.address&&o.address.substr(0,4))+" ... "+b(o.address&&o.address.substr(o.address.length-4,4))+" ",1),Ve],8,Ye),o.isSelfBuilt?(r(),oe(T,{key:0,placement:"right","arrow-point-at-center":""},{title:f(()=>[a("span",null,b(s.t("newAdd.notCetusTokenList")),1)]),default:f(()=>[xe]),_:1})):I("",!0)]),a("p",null,[j(b(o.name)+" ",1),s.chainName!=="Sui"?(r(),i("span",es,b(o.labels?`(${o.labels})`:""),1)):I("",!0)])])]),a("div",ss,[a("div",os,[s.wallet.loading?(r(),i("div",ts,[N(P,null,{default:f(()=>[N(c)]),_:1})])):o.balance&&s.wallet.connected?(r(),i("div",ls,b(("addCommom"in s?s.addCommom:Q(le))(o.balance,o.decimals)),1)):!o.balance&&s.wallet.connected?(r(),i("div",as,"0")):(r(),i("div",ns))]),rs])],10,We))),128))])):(r(),i("div",is,[s.pools.isTokenLoading?(r(),i("div",us,[N(h)])):(r(),i("div",cs,[s.store.theme=="default"?(r(),i("img",ds)):(r(),i("img",bs)),a("p",null,b(s.t("newAdd.noTokensFound")),1),a("div",null,[j(b(s.t("newAdd.enterCoinType"))+" ",1),N(T,{placement:"bottom","arrow-point-at-center":""},{title:f(()=>[a("span",null,b(s.t("newAdd.uniqueIdOfCoin")),1)]),default:f(()=>[vs]),_:1})])]))]))]),_:1})])])]),_:1},8,["title"])}const Ss=me(Oe,[["render",ps],["__scopeId","data-v-4b20bf7a"]]);export{Ss as _,je as a};
