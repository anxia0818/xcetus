import{b as Pe,u as be,j as oe,a as N,c as le,s as ve}from"./pool.e39ccd2c.js";import{a as _e,b as fe,r as h,l as re,E as ye,H as ae,ab as we,e as Le,o as l,f as c,h as s,A as P,j as C,i as se,w as f,t as n,s as K,F as te,C as ie,K as ne,u as y,q as ce,J as pe,O as je,p as Oe,k as Ae}from"./entry.9b70370c.js";/* empty css              */import"./index.41eef1af.js";import{u as Te}from"./sha256.160e359b.js";const Ce=_e({props:{aprRewardsDateList:{type:Array,default:()=>[]},aprRewardsParameter:{type:Number,default:30},aprTitle:{type:String,default:""},nameTab:{type:String,default:""},poolInfo:{type:Object,default:()=>({})},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},minPrice:{type:String,default:""},maxPrice:{type:String,default:""}},setup(e,de){fe();const M=h(0),E=h(0),S=h(0),D=h(0),m=h(1e4),H=h("echartsBox"+Date.now()+Math.random()),G=Te(),d=re(()=>G),Q=re(()=>d.value.chainName?Pe(d.value.chainName):{}),v=h(!1),g=h({});ye(()=>{document.body.clientWidth<750?v.value=!1:v.value=!0,window.onresize=()=>{document.body.clientWidth<750?v.value=!1:v.value=!0,setTimeout(()=>{k()},500)}}),console.log(e,"props===>"),ae(()=>g.value,(r,t)=>{le(r)||(M.value=r==null?void 0:r.aprFee,E.value=r!=null&&r.rewardAprList[0].rewarder_display?r==null?void 0:r.rewardAprList[0].rewarder_apr:0,S.value=r!=null&&r.rewardAprList[1].rewarder_display?r==null?void 0:r.rewardAprList[1].rewarder_apr:0,D.value=r!=null&&r.rewardAprList[2].rewarder_display?r==null?void 0:r.rewardAprList[2].rewarder_apr:0,(r==null?void 0:r.aprPercentageTotal)==0||isNaN(r==null?void 0:r.aprPercentageTotal)||(r==null?void 0:r.aprPercentageTotal)==1/0?m.value=1e9:m.value=0,!r.is_display_rewarder&&M.value==0&&(m.value=1e9),r.is_display_rewarder||(E.value=0,S.value=0,D.value=0),setTimeout(()=>{k()},500))},{immediate:!0,deep:!0});const k=()=>{const r=document.getElementById(H.value);if(!r)return;const t=we(r);let p={tooltip:{show:!0,trigger:"axis",axisPointer:{type:"shadow",axis:"auto",snap:!0},renderMode:"html",backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderWidth:0,padding:5,textStyle:{color:"#fff",fontStyle:"normal",fontWeight:"normal",fontFamily:"sans-serif",fontSize:14},extraCssText:"box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",confine:!1,formatter:function(o){return o[0].name+"的分数是:"+o[0].data}},title:{text:"",left:"center",top:"center"},series:[{type:"pie",silent:!0,data:[{value:M.value,name:"A"},{value:E.value,name:"B"},{value:S.value,name:"C"},{value:D.value,name:"D"},{value:m.value,name:"E"}],labelLine:{show:!1},itemStyle:{normal:{color:function(o){var u=d.value.theme=="default"?["#9EFFC3","#9E65FF","#6C65FF","#D3E97C","#8D8D8D"]:["#65C8FF","#9E65FF","#6C65FF","#D3E97C","#D3E97C"];return u[o.dataIndex]}}},radius:["74%","100%"]}]};p&&t.setOption(p,!0)},X=re(()=>{var t;let r=0;return g.value&&g.value.rewardAprList&&((t=g.value)==null?void 0:t.rewardAprList).forEach(o=>{o!=null&&o.rewarder_display&&r++}),r}),Z=be(),w=re(()=>Z),W=async r=>{var q,z,Y;console.log("0607###detail###getAprMethod###poolInfo###",r),console.log("0607###detail###getAprMethod###props.fromCoin###",e.fromCoin),console.log("0607###detail###getAprMethod###props.toCoin###",e.toCoin),console.log("0607###detail###getAprMethod###props.nameTab###",e.nameTab);let t;e.nameTab=="position"||r.token_a.address.toLowerCase()===e.fromCoin.address.toLowerCase()&&r.token_b.address.toLowerCase()===e.toCoin.address.toLowerCase()?t=!0:t=!1,console.log("0607###detail###getAprMethod###directs###",t),console.log("0607###detail###getAprMethod###props.minPrice###",e.minPrice),console.log("0607###detail###getAprMethod###props.maxPrice###",e.maxPrice);const p=t?Number(e.minPrice):e.maxPrice=="∞"?1/2**50:1/Number(e.maxPrice),o=isNaN(Number(e.maxPrice))||e.maxPrice=="∞"?2**50:t?Number(e.maxPrice):1/Number(e.minPrice);console.log("0607###detail###getAprMethod###lowerUserPrice###",p),console.log("0607###detail###getAprMethod###upperUserPrice###",o);let u=[];console.log(d.value.addressHistTokens,"===>index.value.addressHistTokens"),u=d.value&&d.value.addressHistTokens&&d.value.addressHistTokens[r.poolAddress]&&d.value.addressHistTokens[r.poolAddress].data&&d.value.addressHistTokens[r.poolAddress].data.length>0&&Object.fromEntries(d.value.addressHistTokens[r.poolAddress].data.map(A=>[A.key,A.value])),console.log(e.aprRewardsParameter,"=====>>>>>>>>>>aprRewardsParameteraprRewardsParameteraprRewardsParameter");const B=Number(Number(e.aprRewardsParameter==7?u.before_7_d_contract_price_lowest:e.aprRewardsParameter==24?u.before_24_h_contract_price_lowest:u.before_30_d_contract_price_lowest)),$=Number(Number(e.aprRewardsParameter==7?u.before_7_d_contract_price_highest:e.aprRewardsParameter==24?u.before_24_h_contract_price_highest:u.before_30_d_contract_price_highest)),F=w.value.tokensObj;console.log("getEstPositionAPRWithMulti###params###lowerUserPrice###",p),console.log("getEstPositionAPRWithMulti###params###upperUserPrice###",o),console.log("getEstPositionAPRWithMulti###params###lowerHistPrice###",B),console.log("getEstPositionAPRWithMulti###params###upperHistPrice###",$);const U=await Q.value.getEstPositionAPRWithMulti(p,o,B,$);console.log("getEstPositionAPRWithMulti###resMulti###",U.toString());const j=Number(U.toString()),i=d.value.newTopPoolsObj[r.poolAddress];let O;if(i){e.aprRewardsParameter==7?O=i.apr_7day?Number(i.apr_7day.substring(0,i.apr_7day.length-1)):0:e.aprRewardsParameter==24?O=i.apr_24h?Number(i.apr_24h.substring(0,i.apr_24h.length-1)):0:O=i.apr_30day?Number(i.apr_30day.substring(0,i.apr_30day.length-1)):0;const A=i.rewarder_apr[0]?Number(i.rewarder_apr[0].substring(0,i.rewarder_apr[0].length-1)):0,V=i.rewarder_apr[1]?Number(i.rewarder_apr[1].substring(0,i.rewarder_apr[1].length-1)):0,ee=i.rewarder_apr[2]?Number(i.rewarder_apr[2].substring(0,i.rewarder_apr[2].length-1)):0,_=Number(j*O),T=Number(j*A),a=Number(j*V),R=Number(j*ee),J=_+(r.rewarder_display1?T:0)+(r.rewarder_display2?a:0)+(r.rewarder_display3?R:0);console.log();const ue=r.rewarder_infos[0]?(q=F[r.rewarder_infos[0].coinAddress])==null?void 0:q.symbol:"--",ge=r.rewarder_infos[1]?(z=F[r.rewarder_infos[1].coinAddress])==null?void 0:z.symbol:"--",me=r.rewarder_infos[2]?(Y=F[r.rewarder_infos[2].coinAddress])==null?void 0:Y.symbol:"--",he={aprFee:_==1/0||isNaN(_)?0:_,rewardAprList:[{rewarder_name:ue,rewarder_apr:T==1/0||isNaN(T)?0:T,styleName:"one",rewarder_display:r.rewarder_display1},{rewarder_name:ge,rewarder_apr:a==1/0||isNaN(a)?0:a,styleName:"two",rewarder_display:r.rewarder_display2},{rewarder_name:me,rewarder_apr:R==1/0||isNaN(R)?0:R,styleName:"three",rewarder_display:r.rewarder_display2}],aprPercentageTotal:J==1/0||isNaN(J)||J===0?0:J,aprPercentage:oe(_/J,2),is_display_rewarder:r.is_display_rewarder};g.value=he,console.log(g.value,"===>aprPercentageObj.value")}};ae(()=>[e.aprRewardsParameter],()=>{e.nameTab=="position"&&W(e.poolInfo)});const L=h("--"),I=(r,t)=>{r!=="0"&&t!=="∞"?L.value=ve(1/(1-Number((r/t)**.25)),2)+"x":L.value=1};ae(()=>[e.poolInfo,e.minPrice,e.maxPrice,d.value.addressHistTokens],([r,t,p,o])=>{r&&!le(r)&&o&&W(r),t&&p&&I(t,p)},{immediate:!0});const x=(r,t)=>{de.emit("aprTab",r)};return ae(()=>w.value.currentPositionLoading,r=>{w.value.currentPositionLoading&&(g.value={},L.value="--")},{immediate:!0}),{pools:w,initialize:k,aprOne:M,aprTwo:E,aprThree:S,aprFour:D,echartsBox:H,aprPercentageObjList:g,rewardLength:X,fixD:oe,addCommom:N,aprTab:x,lever:L,isPc:v}}});const b=e=>(Oe("data-v-074fc9fe"),e=e(),Ae(),e),Ne={key:0,class:"apr-lever"},ke={class:"top"},Fe={key:0,class:"left"},Re=b(()=>s("span",null,"The concentration degree of your liquidity compared with allocating liquidity to full range like a constant product AMM pool. You would enjoy multiplied capital efficiency but with higher impermanent loss possibility accordingly.",-1)),Me=b(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-information"})],-1)),Ee={class:"lever-text"},Se={class:"right"},De={class:"top"},He={class:"apr-rewards"},We=b(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-information"})],-1)),Be={class:"apr-tab"},$e=["onClick"],Ue={class:"tottom"},qe={class:"fees-all"},ze={key:0,class:"right-box"},Ye=["id"],Je=b(()=>s("div",{class:"ratio-bg"},null,-1)),Ke={class:"progress-fees progress-all"},Ge=b(()=>s("div",{class:"light-hint"},null,-1)),Qe={key:1,class:"apr-lever-h5"},Xe={key:0,class:"top"},Ze={class:"leverage"},Ie={class:"leverage-title"},xe=b(()=>s("span",null,"The concentration degree of your liquidity compared with allocating liquidity to full range like a constant product AMM pool. You would enjoy multiplied capital efficiency but with higher impermanent loss possibility accordingly.",-1)),Ve=b(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-information"})],-1)),er={class:"leverage-text"},rr={class:"left"},ar=b(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-icon-information"})],-1)),sr={class:"apr-tab"},tr=["onClick"],ir={class:"right"},or={key:0,class:"right-box"},nr=["id"],dr=b(()=>s("div",{class:"ratio-bg"},null,-1)),lr={class:"fees-all"},cr={class:"hover-fees-all"};function pr(e,de,M,E,S,D){var H,G,d,Q,v,g,k,X,Z,w,W,L,I,x,r,t,p,o,u,B,$,F,U,j,i,O,q,z,Y,A,V,ee,_,T;const m=je;return e.isPc?(l(),c("div",Ne,[s("div",ke,[e.minPrice!=="0"&&e.maxPrice!=="∞"?(l(),c("div",Fe,[s("div",{class:P(["lever-title apr-title",e.nameTab])},[C(" Leverage "),se(m,{placement:"bottom","arrow-point-at-center":""},{title:f(()=>[Re]),default:f(()=>[Me]),_:1})],2),s("div",Ee,n(e.lever),1)])):K("",!0),s("div",Se,[s("div",De,[s("div",He,[s("div",{class:P(["apr-title",e.nameTab])},[C(n(e.aprTitle)+" ",1),se(m,{placement:"bottom","arrow-point-at-center":""},{title:f(()=>[s("span",null," Estimated according to trading activity and farming rewards in the past "+n(e.aprRewardsParameter==7?"7 days":e.aprRewardsParameter==24?"24 hours":"30 days")+". Historical data is only a reference. By no means can it guarantee future returns. ",1)]),default:f(()=>[We]),_:1})],2),s("div",Be,[(l(!0),c(te,null,ie(e.aprRewardsDateList,a=>(l(),c("div",{key:a,class:P(["apr-item",{"apr-item-active":a.num===e.aprRewardsParameter}]),onClick:R=>e.aprTab(a)},n(a.time),11,$e))),128))])])]),s("div",Ue,[s("div",{class:"lever-and-apr",style:ne({justifyContent:e.minPrice!=="0"&&e.maxPrice!=="∞"?"flex-start":"center"})},[s("div",{class:P(["trade-fees",e.rewardLength>0&&e.aprPercentageObjList.is_display_rewarder?"rewarded":""])},[s("div",qe,[s("span",null,n(e.pools.currentPositionLoading?"--":e.aprPercentageObjList.is_display_rewarder?(H=e.aprPercentageObjList)!=null&&H.aprPercentageTotal?((G=e.aprPercentageObjList)==null?void 0:G.aprPercentageTotal)>1e4?">10,000":((d=e.aprPercentageObjList)==null?void 0:d.aprPercentageTotal)<.01&&((Q=e.aprPercentageObjList)==null?void 0:Q.aprPercentageTotal)>0?"<0.01":("fixD"in e?e.fixD:y(oe))((v=e.aprPercentageObjList)==null?void 0:v.aprPercentageTotal,2):(g=e.aprPercentageObjList)!=null&&g.rewardAprList?"0":"--":(k=e.aprPercentageObjList)!=null&&k.aprFee?((X=e.aprPercentageObjList)==null?void 0:X.aprFee)>1e4?">10,000":((Z=e.aprPercentageObjList)==null?void 0:Z.aprFee)<.01&&((w=e.aprPercentageObjList)==null?void 0:w.aprFee)>0?"<0.01":("addCommom"in e?e.addCommom:y(N))((W=e.aprPercentageObjList)==null?void 0:W.aprFee,2):(L=e.aprPercentageObjList)!=null&&L.rewardAprList?"0":"--")+"% ",1),e.aprPercentageObjList&&e.aprPercentageObjList.aprPercentageTotal>0?(l(),c("div",ze,[s("div",{id:e.echartsBox,class:"right"},null,8,Ye),Je])):K("",!0)]),e.aprPercentageObjList&&e.aprPercentageObjList.aprPercentageTotal>0?(l(),c("div",{key:0,class:P(["percentage-fee",e.nameTab])},[s("div",{class:"progress-all-in",style:ne({height:e.aprPercentageObjList&&e.aprPercentageObjList.aprPercentageTotal>0?"auto":"25px",lineHeight:e.$route.name=="position-detail"?"25px":""})},[s("div",Ke,[Ge,C(" Fees  "+n(e.pools.currentPositionLoading?"--":(I=e.aprPercentageObjList)!=null&&I.aprFee?((x=e.aprPercentageObjList)==null?void 0:x.aprFee)>1e4?">10,000":((r=e.aprPercentageObjList)==null?void 0:r.aprFee)<.01?"<0.01":("addCommom"in e?e.addCommom:y(N))((t=e.aprPercentageObjList)==null?void 0:t.aprFee,2):(p=e.aprPercentageObjList)!=null&&p.rewardAprList?"<0.01":"--")+"% ",1)]),(l(!0),c(te,null,ie((o=e.aprPercentageObjList)==null?void 0:o.rewardAprList,a=>ce((l(),c("div",{key:a,class:"progress-rewards progress-all"},[s("div",{class:P(["light-hint",a==null?void 0:a.styleName])},null,2),C(" "+n(a==null?void 0:a.rewarder_name)+" Rewards  "+n(a!=null&&a.rewarder_apr?(a==null?void 0:a.rewarder_apr)>1e4?">10,000":(a==null?void 0:a.rewarder_apr)<.01?"<0.01":("addCommom"in e?e.addCommom:y(N))(a==null?void 0:a.rewarder_apr,2):"0")+"% ",1)])),[[pe,(a==null?void 0:a.rewarder_name)!="--"&&a.rewarder_display&&e.aprPercentageObjList.is_display_rewarder&&!e.pools.currentPositionLoading]])),128))],4)],2)):K("",!0)],2)],4)])])])])):(l(),c("div",Qe,[e.minPrice!=="0"&&e.maxPrice!=="∞"?(l(),c("div",Xe,[s("div",Ze,[s("div",Ie,[C(" Leverage "),se(m,{placement:"bottom","arrow-point-at-center":""},{title:f(()=>[xe]),default:f(()=>[Ve]),_:1})]),s("div",er,n(e.lever),1)])])):K("",!0),s("div",{class:"bottom",style:ne(e.minPrice!=="0"&&e.maxPrice!=="∞"?{}:{border:"none"})},[s("div",rr,[s("div",{class:P(["apr-title",e.nameTab])},[C(n(e.aprTitle)+" ",1),se(m,{placement:"bottom","arrow-point-at-center":""},{title:f(()=>[s("span",null," Estimated according to trading activity and farming bonus in the past "+n(e.aprRewardsParameter==7?"7 days":e.aprRewardsParameter==24?"24 hours":"30 days")+". Historical data is only a reference. By no means can it guarantee future returns. ",1)]),default:f(()=>[ar]),_:1})],2),s("div",sr,[(l(!0),c(te,null,ie(e.aprRewardsDateList,a=>(l(),c("div",{key:a,class:P(["apr-item",{"apr-item-active":a.num===e.aprRewardsParameter}]),onClick:R=>e.aprTab(a)},n(a.time),11,tr))),128))])]),s("div",ir,[e.aprPercentageObjList&&e.aprPercentageObjList.aprPercentageTotal>0?(l(),c("div",or,[s("div",{id:e.echartsBox,class:"right"},null,8,nr),dr])):K("",!0),s("div",{class:P(["trade-fees",e.rewardLength>0&&e.aprPercentageObjList.is_display_rewarder?"rewarded":""])},[s("div",lr,[s("span",null,n(e.pools.currentPositionLoading?"--":e.aprPercentageObjList.is_display_rewarder?(u=e.aprPercentageObjList)!=null&&u.aprPercentageTotal?((B=e.aprPercentageObjList)==null?void 0:B.aprPercentageTotal)>1e4?">10,000":(($=e.aprPercentageObjList)==null?void 0:$.aprPercentageTotal)<.01?"<0.01":("fixD"in e?e.fixD:y(oe))((F=e.aprPercentageObjList)==null?void 0:F.aprPercentageTotal,2):(U=e.aprPercentageObjList)!=null&&U.rewardAprList?"0":"--":(j=e.aprPercentageObjList)!=null&&j.aprFee?((i=e.aprPercentageObjList)==null?void 0:i.aprFee)>1e4?">10,000":((O=e.aprPercentageObjList)==null?void 0:O.aprFee)<.01?"<0.01":("addCommom"in e?e.addCommom:y(N))((q=e.aprPercentageObjList)==null?void 0:q.aprFee,2):(z=e.aprPercentageObjList)!=null&&z.rewardAprList?"0":"--")+"% ",1),s("div",cr,[C(" Fees  :  "),s("span",null,n(e.pools.currentPositionLoading?"--":(Y=e.aprPercentageObjList)!=null&&Y.aprFee?((A=e.aprPercentageObjList)==null?void 0:A.aprFee)>1e4?">10,000":((V=e.aprPercentageObjList)==null?void 0:V.aprFee)<.01?"<0.01":("addCommom"in e?e.addCommom:y(N))((ee=e.aprPercentageObjList)==null?void 0:ee.aprFee,2):(_=e.aprPercentageObjList)!=null&&_.rewardAprList?"0":"--")+"% ",1),(l(!0),c(te,null,ie((T=e.aprPercentageObjList)==null?void 0:T.rewardAprList,a=>ce((l(),c("div",{key:a},n(a==null?void 0:a.rewarder_name)+" Rewards  :  "+n(a!=null&&a.rewarder_apr?(a==null?void 0:a.rewarder_apr)>1e4?">10,000":(a==null?void 0:a.rewarder_apr)<.01?"<0.01":("addCommom"in e?e.addCommom:y(N))(a==null?void 0:a.rewarder_apr,2):"<0.01")+"% ",1)),[[pe,(a==null?void 0:a.rewarder_name)!="--"&&a.rewarder_display&&e.aprPercentageObjList.is_display_rewarder&&!e.pools.currentPositionLoading]])),128))])])],2)])],4)]))}const br=Le(Ce,[["render",pr],["__scopeId","data-v-074fc9fe"]]);export{br as _};
