import{i as $}from"./import-icon.de3e6c66.js";import{u as ue,a as le,e as ce,p as de,O as ve}from"./pool.b1a6ac91.js";import{a as pe,a1 as be,L as _e,y as he,l as S,r as L,H as ge,q as D,aj as fe,e as ke,Q as z,s as me,o as r,c as oe,w as g,h as a,t as Z,a9 as Ce,f as i,x as I,F as q,E,A as H,u as K,v,i as O,j as Q,z as ye,P as we,ak as Se,S as Le,p as Te,k as Ie}from"./entry.f33f81c0.js";/* empty css              *//* empty css              */import{a as Oe,u as te}from"./sha256.ed498e29.js";import{_ as $e}from"./img-no-Positions_2x.535e5f31.js";import{_ as Ae}from"./img-no-Positions_2x.8ff7c4f9.js";const Ne=pe({components:{Modal:be,LoadingOutlined:_e},props:{existingCoins:{type:String,default:""},lastSelectCoin:{type:String,default:""},isCreatePoolToCoin:{type:Boolean,default:!1},isCreatePoolFromCoin:{type:Boolean,default:!1}},setup(s,_){const{t:n,locale:ae}=he(),W=Oe(),f=S(()=>W),T=ue(),c=S(()=>T),j=te(),h=S(()=>j),A=S(()=>{var t;return(t=h.value)==null?void 0:t.filterCreatePoolCoin}),P=S(()=>{const t=[n("tab.all"),n("tab.native")],u=Array.from(new Set(c.value.tokens.flatMap(p=>p.labels?p.labels:null)));return console.log(u,"newArr"),h.value.theme=="default"?t.concat(u):[n("tab.all"),n("tab.native"),n("tab.wormhole"),n("tab.celer")]}),d=L(n("tab.all")),o=L(n("tab.all")),y=te(),M=S(()=>y.chainName),k=L([]);console.log(k,"===>tokenList");const N=L(null);ge(()=>{});const B=L(!1);D(d,t=>{t!==n("tab.all")&&(B.value=!1),t==n("tab.all")?o.value=n("tab.all"):t==n("tab.layerZero")?o.value=n("tab.layerZero"):t==n("tab.wormhole")?o.value=n("tab.wormhole"):t==n("tab.celer")?o.value=n("tab.celer"):t==n("tab.native")&&(o.value=n("tab.native")),R(N.value)});const R=async t=>{var J,X,Y,V,x,ee,se;let u=[],p=c.value.tokens;if(!(h.value.chainName&&p&&p[0]&&h.value.chainName.toLowerCase().includes((J=p[0])==null?void 0:J.chain))){k.value=[];return}let U=p;if(t&&t.split("::")&&t.split("::").length==3&&M.value=="Sui"){const l=ce("Sui");try{const e=c.value.tokensObj[t]||await l.getTokenBySymbol(c.value.tokens,t);e&&((X=p.filter(b=>(b==null?void 0:b.address)===(e==null?void 0:e.address)))==null?void 0:X.length)<1&&(T.setNewTokens({[t]:e}),U=p.concat(e))}catch(e){console.log("searchToken##err##",e)}}let G=!1;for(const l of Object.keys(U)){let e=fe(U[l]);const b=f.value.assets[e.address]&&f.value.assets[e.address].balance?de(f.value.assets&&f.value.assets[e.address].balance,e.decimals):0;s.lastSelectCoin&&e&&e.address===s.lastSelectCoin?(e.unusable=!0,G=!0):e.unusable=!1;const re=((Y=c.value.tokensObj[e.address])==null?void 0:Y.labels)&&((V=c.value.tokensObj[e.address])==null?void 0:V.labels[0]),ie=c.value.tokensObj[e.address]?(x=c.value.tokensObj[e.address])==null?void 0:x.name:e.name;e={...e,balance:b,labels:re,name:ie,sort:(h.value.chainName==="Aptos"?e.symbol=="APT":e.symbol=="SUI")?1:-1},u.push(e)}if(!G&&c.value.tokensObj[s.lastSelectCoin]){const l={...c.value.tokensObj[s.lastSelectCoin],unusable:!0};u.push(l)}let w;f.value.address?w=u.sort((l,e)=>e.balance-l.balance):w=u;let m=[];if(t){console.log(w,"sortResult=====>");const l=w.filter(e=>e.symbol.toLowerCase().indexOf(t.toLowerCase())!==-1||e.address.toLowerCase().indexOf(t.toLowerCase())!==-1||e.address.toLowerCase().indexOf(ve(t).full_address.toLowerCase())!==-1||e.name.toLowerCase().indexOf(t.toLowerCase())!==-1);console.log(l,"===>result"),d.value!==n("tab.all")?m=l.filter(b=>d.value==n("tab.native")?!b.labels||b.labels=="Native":b.labels&&b.labels.toLowerCase()==d.value.toLowerCase()):m=l}else console.log(d.value,"===>currentTab.value"),d.value!==n("tab.all")?m=w.filter(e=>d.value==n("tab.native")?!e.labels||e.labels=="Native":e.labels&&e.labels.toLowerCase()==d.value.toLowerCase()):m=w;s.isCreatePoolToCoin?k.value=(ee=m.filter(l=>A.value[l==null?void 0:l.address]))==null?void 0:ee.sort((l,e)=>e.sort-l.sort).sort((l,e)=>e.unusable-l.unusable):k.value=m.sort((l,e)=>e.sort-l.sort).sort((l,e)=>e.unusable-l.unusable),s.isCreatePoolFromCoin&&(k.value=(se=m.filter(l=>!A.value[l==null?void 0:l.address]))==null?void 0:se.sort((l,e)=>e.sort-l.sort).sort((l,e)=>e.unusable-l.unusable)),console.log(k.value,"tokenList.value===>322")},ne=t=>{t.unusable||(_.emit("onSelect",t),_.emit("onClose"))};D(()=>[N.value,B.value],([t,u])=>{console.log(t,"===>keyword"),R(t)},{immediate:!0});const F=L([]);return D(()=>c.value.tokens,t=>{t&&(console.log(c.value.tokens,"===>pools.value.tokens"),R(N.value),F.value=t.filter(u=>(s.lastSelectCoin&&u.address===s.lastSelectCoin?u.unusable=!0:u.unusable=!1,u.suggested_priority&&u.suggested_priority>0)).sort((u,p)=>Number(p.suggested_priority)-Number(u.suggested_priority)),console.log(F.value,"===>popularList.value"))},{immediate:!0}),{getCoinIcon:t=>{var u;return(t==null?void 0:t.logoURI)||(t==null?void 0:t.logo_url)||((u=c.value.tokensObj[t==null?void 0:t.address])==null?void 0:u.logo_url)||(h.value.theme==="default"?$("/image/coins/unknown.png"):$("/image/coins/sui-unknown.png"))},popularList:F,pools:c,t:n,chainName:M,tabList:P,currentTab:d,addCommom:le,tokenList:k,importIcon:$,keyword:N,wallet:f,toSelect:ne,store:h,isShowAll:B}}}),je=""+globalThis.__publicAssetsURL("sui-image/token-warning@2x.png");const C=s=>(Te("data-v-1ed5267f"),s=s(),Ie(),s),Pe=C(()=>a("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Me={class:"coin-select-modal"},Be={class:"search-input"},Re=["placeholder"],Fe=C(()=>a("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),Ue=[Fe],De={key:0,class:"popular"},ze=["onClick"],Ze={class:"tab-list"},qe=["onClick"],Ee={key:0,class:"item"},He=C(()=>a("div",{class:"line"},null,-1)),Ke={class:"coin-list-box"},Qe={key:0,class:"coin-list"},We=["onClick"],Ge={class:"left"},Je={class:"token-icon",alt:""},Xe=C(()=>a("img",{class:"token-waring",src:je,alt:""},null,-1)),Ye={class:"name-box"},Ve=["onClick"],xe=C(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon_copy1"})],-1)),es={key:0,class:"label"},ss={class:"balance-box"},os={class:"balance"},ts={key:0},ls={key:1},as={key:2},ns={key:3},rs=C(()=>a("p",null,null,-1)),is={key:1,class:"no-data"},us={key:0,class:"token-loading"},cs={key:1,class:"no-data-content"},ds={key:0,src:$e},vs={key:1,src:Ae},ps=C(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-information"})],-1));function bs(s,_,n,ae,W,f){const T=we,c=z("loading-outlined"),j=Se,h=Le,A=z("vue-scroll"),P=z("Modal"),d=me("image");return r(),oe(P,{title:s.$t("modal.selectTokenModalTitle"),class:"select-mod",width:420,centered:"",visible:!0,footer:null,onCancel:_[2]||(_[2]=o=>s.$emit("onClose"))},{closeIcon:g(()=>[Pe]),default:g(()=>[a("div",Me,[a("div",Be,[Z(a("input",{"onUpdate:modelValue":_[0]||(_[0]=o=>s.keyword=o),onkeyup:"value=value.replace(/[^[a-zA-Z0-9\\s]+$/g,'')",placeholder:s.$t("inputPlaceholder.selectTokenModalPlaceholder")},null,8,Re),[[Ce,s.keyword]]),s.keyword?(r(),i("svg",{key:0,class:"clear-icon icon modal-icon-close","aria-hidden":"true",onClick:_[1]||(_[1]=o=>s.keyword="")},Ue)):I("",!0)]),s.popularList&&s.popularList.length>0?(r(),i("div",De,[(r(!0),i(q,null,E(s.popularList,o=>(r(),i("div",{key:o.address,class:H(["img-box",o.unusable?"img-box-unusable":"img-box-usable"]),onClick:y=>s.toSelect(o)},[Z(a("img",null,null,512),[[d,o.icon||o.logo_url||(s.store.theme=="default"?("importIcon"in s?s.importIcon:K($))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:K($))("/image/coins/sui-unknown.png"))]]),a("span",null,v(o.symbol),1)],10,ze))),128))])):I("",!0),a("div",Ze,[(r(!0),i(q,null,E(s.tabList,(o,y)=>(r(),i("div",{key:y,class:H(["item-container",s.currentTab==o?"item-container-active item-container":"item-container"]),onClick:M=>s.currentTab=o},[o!==null&&o!=="test"?(r(),i("div",Ee,v(o),1)):I("",!0)],10,qe))),128))]),He,a("div",Ke,[O(A,null,{default:g(()=>[s.tokenList&&s.tokenList.length>0?(r(),i("ul",Qe,[(r(!0),i(q,null,E(s.tokenList,o=>(r(),i("li",{key:o.address,class:H(o.unusable?"unusable":""),onClick:y=>s.toSelect(o)},[a("div",Ge,[Z(a("img",Je,null,512),[[d,s.getCoinIcon(o)]]),o.isSelfBuilt?(r(),oe(T,{key:0,placement:"right","arrow-point-at-center":""},{title:g(()=>[a("span",null,v(s.t("newAdd.notCetusTokenList")),1)]),default:g(()=>[Xe]),_:1})):I("",!0),a("div",Ye,[a("div",null,[Q(v(o.symbol)+" ",1),a("p",{class:"copy-text",onClick:ye(y=>s.store.copy(o&&o.address),["stop"])},[a("span",null,v(o.address&&o.address.substr(0,4))+" ... "+v(o.address&&o.address.substr(o.address.length-4,4)),1),xe],8,Ve)]),a("p",null,[Q(v(o.name)+" ",1),s.chainName!=="Sui"?(r(),i("span",es,v(o.labels?`(${o.labels})`:""),1)):I("",!0)])])]),a("div",ss,[a("div",os,[s.wallet.loading?(r(),i("div",ts,[O(j,null,{default:g(()=>[O(c)]),_:1})])):o.balance&&s.wallet.connected?(r(),i("div",ls,v(("addCommom"in s?s.addCommom:K(le))(o.balance,o.decimals)),1)):!o.balance&&s.wallet.connected?(r(),i("div",as,"0")):(r(),i("div",ns))]),rs])],10,We))),128))])):(r(),i("div",is,[s.pools.isTokenLoading?(r(),i("div",us,[O(h)])):(r(),i("div",cs,[s.store.theme=="default"?(r(),i("img",ds)):(r(),i("img",vs)),a("p",null,v(s.t("newAdd.noTokensFound")),1),a("div",null,[Q(v(s.t("newAdd.enterCoinType"))+" ",1),O(T,{placement:"bottom","arrow-point-at-center":""},{title:g(()=>[a("span",null,v(s.t("newAdd.uniqueIdOfCoin")),1)]),default:g(()=>[ps]),_:1})])]))]))]),_:1})])])]),_:1},8,["title"])}const Ss=ke(Ne,[["render",bs],["__scopeId","data-v-1ed5267f"]]);export{Ss as _,je as a};
