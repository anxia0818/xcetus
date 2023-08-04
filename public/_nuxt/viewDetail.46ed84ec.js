import{_ as V}from"./status-block.8c56df70.js";import{u as F,q as j,e as b,b as Q,c as M,d as C}from"./pool.16528a62.js";import{a as T,W,r as A,m as v,b as G,D as J,e as K,Q as X,q as Y,o as r,c as Z,w as p,h as e,i as k,j as L,v as s,f as d,u as t,z as x,t as q,S as oo,B as eo,p as no,k as so}from"./entry.0896c5aa.js";/* empty css              */import{i as P}from"./import-icon.de3e6c66.js";import{u as io,c as to}from"./sha256.a943f970.js";import{_ as z}from"./icon-arrow_2x.948aedb2.js";import{_ as H}from"./icon-arrow_2x.4ffddb8e.js";const ao=T({components:{Modal:W},props:{poolInfo:{type:Object,required:!0}},setup(o){const i=A({}),E=io(),_=v(()=>E),$=v(()=>_.value.chainName),O=v(()=>to[$.value]);let m=A(!0);const U=F(),u=v(()=>U),w=G(),y=v(()=>o.poolInfo.needReverse);return J(()=>u.value.currentPositionInfo,n=>{console.log(n,"==>newVal111111"),n&&(i.value=n)},{immediate:!0}),{getExplorerUrl:j,addCommom:b,router:w,pools:u,positionInfo:i,decimalFormat:Q,rateChange:m,config:O,importIcon:P,store:_,chainName:$,checkNullObj:M,needReverse:y,getCoinIcon:n=>{var l;return(n==null?void 0:n.logoURI)||(n==null?void 0:n.logo_url)||((l=u.value.tokensObj[n==null?void 0:n.address])==null?void 0:l.logo_url)||(_.value.theme==="default"?P("/image/coins/unknown.png"):P("/image/coins/sui-unknown.png"))},decimalUi:C}}});const S=o=>(no("data-v-a2edb48c"),o=o(),so(),o),ro=S(()=>e("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),lo={class:"rejected-container"},po={class:"coin-pair"},mo=S(()=>e("use",{"xlink:href":"#icon-icon-copy"},null,-1)),uo=[mo],co=["href"],fo=S(()=>e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-icon-jump"})],-1)),Io=[fo],go={class:"coin-pair"},ho={class:"fee"},vo={class:"status"},ko={class:"min-and-max"},bo={key:0},Co={class:"text"},_o={key:0,src:z,alt:""},yo={key:1,src:H,alt:""},So={class:"text"},$o={key:1},Uo={class:"text"},wo={key:0,src:z,alt:""},No={key:1,src:H,alt:""},Po={class:"text"},jo=S(()=>e("use",{"xlink:href":"#icon-a-icon-change2"},null,-1)),Eo=[jo];function Oo(o,i,E,_,$,O){const m=oo,U=V,u=eo,w=X("Modal"),y=Y("image");return r(),Z(w,{visible:!0,class:"transiaction-rejected",centered:"",title:o.$t("newAdd.openPositionSuccessful"),width:"340px",footer:null,onCancel:i[3]||(i[3]=a=>o.$emit("onClose"))},{closeIcon:p(()=>[ro]),default:p(()=>[e("div",lo,[k(m,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:p(()=>[e("div",po,[L(s(o.positionInfo.tokenName)+" ",1),(r(),d("svg",{class:"icon","aria-hidden":"true",onClick:i[0]||(i[0]=a=>o.store.copy(o.positionInfo.nftHash))},uo)),e("a",{href:o.chainName==="Aptos"?("getExplorerUrl"in o?o.getExplorerUrl:t(j))("nftAddress",o.positionInfo.nftHash):("getExplorerUrl"in o?o.getExplorerUrl:t(j))("nftAddress",o.positionInfo.pos_object_id),target:"_blank"},Io,8,co)])]),_:1},8,["loading"]),e("div",{class:x(["left",`position-status-${o.positionInfo&&o.positionInfo.currentStatus&&o.positionInfo.currentStatus.toLowerCase()}`])},[k(m,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:p(()=>{var a,n,l,c,f,I,g,h,N,R,B,D;return[e("div",go,[e("div",null,[q(e("img",null,null,512),[[y,o.getCoinIcon(o.needReverse?(n=o.positionInfo)==null?void 0:n.token_b:(a=o.positionInfo)==null?void 0:a.token_a)]]),q(e("img",null,null,512),[[y,o.getCoinIcon(o.needReverse?(c=o.positionInfo)==null?void 0:c.token_a:(l=o.positionInfo)==null?void 0:l.token_b)]])]),e("span",null,s(o.needReverse?(h=(g=o.positionInfo)==null?void 0:g.token_b)==null?void 0:h.symbol:(I=(f=o.positionInfo)==null?void 0:f.token_a)==null?void 0:I.symbol)+" - "+s(o.needReverse?(D=(B=o.positionInfo)==null?void 0:B.token_a)==null?void 0:D.symbol:(R=(N=o.positionInfo)==null?void 0:N.token_b)==null?void 0:R.symbol),1)]),e("div",ho,s(o.$t("common.fee"))+" "+s(o.positionInfo.fee*100)+"%",1)]}),_:1},8,["loading"])],2),e("div",vo,[k(U,{"current-status":o.positionInfo.currentStatus||""},null,8,["current-status"])]),k(m,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:p(()=>{var a,n,l,c,f,I,g,h;return[e("div",ko,[(o.needReverse?!o.rateChange:o.rateChange)?(r(),d("div",bo,[e("div",Co,s(("addCommom"in o?o.addCommom:t(b))(("decimalUi"in o?o.decimalUi:t(C))(String(o.positionInfo&&o.positionInfo.minPrice),6))),1),o.store.theme=="default"?(r(),d("img",_o)):(r(),d("img",yo)),e("div",So,s(o.positionInfo&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:t(b))(("decimalUi"in o?o.decimalUi:t(C))(String(o.positionInfo&&o.positionInfo.maxPrice),6)))+" "+s((n=(a=o.positionInfo)==null?void 0:a.token_b)==null?void 0:n.symbol)+" per "+s((c=(l=o.positionInfo)==null?void 0:l.token_a)==null?void 0:c.symbol),1)])):(r(),d("div",$o,[e("div",Uo,s(("addCommom"in o?o.addCommom:t(b))(("decimalUi"in o?o.decimalUi:t(C))(String(1/Number(o.positionInfo&&o.positionInfo.maxPrice)),6))),1),o.store.theme=="default"?(r(),d("img",wo)):(r(),d("img",No)),e("div",Po,s(o.positionInfo&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:t(b))(("decimalUi"in o?o.decimalUi:t(C))(String(1/Number(o.positionInfo&&o.positionInfo.minPrice)),6)))+" "+s((I=(f=o.positionInfo)==null?void 0:f.token_a)==null?void 0:I.symbol)+" per "+s((h=(g=o.positionInfo)==null?void 0:g.token_b)==null?void 0:h.symbol),1)])),(r(),d("svg",{class:"icon-change","aria-hidden":"true",onClick:i[1]||(i[1]=N=>o.rateChange=!o.rateChange)},Eo))])]}),_:1},8,["loading"])]),k(u,{disabled:("checkNullObj"in o?o.checkNullObj:t(M))(o.positionInfo),onClick:i[2]||(i[2]=a=>o.router.push(`/new-position-detail?collect=${o.positionInfo.collectionName}&&token=${o.positionInfo.tokenName}&&address=${o.positionInfo.pool}&pos=${o.positionInfo.pos_object_id}`))},{default:p(()=>[L(s(o.$t("newAdd.viewDetail")),1)]),_:1},8,["disabled"])]),_:1},8,["title"])}const Ho=K(ao,[["render",Oo],["__scopeId","data-v-a2edb48c"]]);export{Ho as _};
