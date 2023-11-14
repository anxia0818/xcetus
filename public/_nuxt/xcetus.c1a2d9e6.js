import{_ as ln}from"./xwhale-header.74f14e78.js";import{r as C,$ as Ve,D as O,e as j,o as c,f as y,h as a,t as A,j as x,l as se,C as r,G as sn,x as L,H as He,c as P,R as Fe,p as J,k as Q,i as U,w as Y,B as ie,q as Xe,u as Be,v as we,a as Pe,O as un,P as rn,I as dn,M as cn,z as mn,A as vn,F as We,s as Oe,ab as gn,J as fn}from"./entry.9bbcce65.js";/* empty css              */import{a as ee,u as ue}from"./sha256.64408122.js";import{u as De}from"./xcetus.52363de5.js";import{i as K}from"./import-icon.de3e6c66.js";import{a as $,s as Ce,e as Ee,c as xe,p as G,u as je,x as _e}from"./pool.e2cb8075.js";import{u as Ue}from"./useWhale.6cbde79c.js";import{_ as Ze}from"./xWHALE-icon.2df34cd4.js";import{_ as qe}from"./WHALE-icon.28f954ba.js";import{_ as hn}from"./head-switch.add41d52.js";/* empty css              */import{_ as pn}from"./icon-selected_3x.09e9a6f0.js";/* empty css              *//* empty css              */import{D as Ye}from"./decimal.0bdeb344.js";import{u as _n}from"./useTheme.97d3967a.js";import{_ as wn}from"./img-leverage_2x.1c577303.js";import"./index.dc838d76.js";const Cn={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const s=C("--"),n=C("--"),S=C("--"),h=C("--");let v=null;Ve(()=>{window.clearInterval(v)});const b=()=>{const _=new Date().getTime()/1e3;Number(_)<=Number(e.startTime)&&p(e.startTime),Number(_)>Number(e.startTime)&&Number(_)<=Number(e.endTime)&&p(e.endTime)},p=_=>{clearInterval(v),window.clearInterval(v),v=setInterval(()=>{let f=new Date().getTime()/1e3,u=_-parseInt(String(f));if(u==0){t.emit("countDown"),clearInterval(v),window.clearInterval(v),v=null;return}else u<0&&(clearInterval(v),window.clearInterval(v),t.emit("countDown"),v=null);u--;let m=parseInt(String(u/60/60/24));m=(m<10,m);let l=parseInt(String(u/60/60%24));l=(l<10,l);let T=parseInt(String(u/60%60));T=(T<10,T);let D=parseInt(String(u%60));D=D<10?+D:D,s.value=m,n.value=l,S.value=T,h.value=D},1e3)};return O(()=>e.startTime,(_,f)=>{_!==f&&b()},{immediate:!0}),{day:s,hour:n,min:S,sec:h}}};const bn={class:"count-time"};function yn(e,t,s,n,S,h){return c(),y("div",bn,[a("p",null,A(n.day)+"d",1),x(" : "),a("p",null,A(n.hour)+"h",1),x(" : "),a("p",null,A(n.min)+"m",1),x(" : "),a("p",null,A(n.sec)+"s",1)])}const Sn=j(Cn,[["render",yn],["__scopeId","data-v-ce10c596"]]),Tn={props:{titleText:{type:String,default:""},tipsText:{type:String,default:""},imgIcon:{type:String,default:""},value:{type:String,default:"--"}},setup(e){const{t}=se();console.log(e.value,"props.value####");const s=ee(),n=r(()=>s);return{t,wallet:n}}};const An=e=>(J("data-v-9cbd6f52"),e=e(),Q(),e),kn={class:"table-rewards"},In={class:"text-top-all"},Nn={key:0,class:"icon-hover-box"},Bn=An(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-information"})],-1)),xn={class:"tips-text-box"},Pn={key:0},Dn={key:0,alt:""},En={key:2};function Un(e,t,s,n,S,h){const v=Fe,b=sn("image");return c(),y("div",kn,[a("div",In,[a("p",null,A(s.titleText),1),s.tipsText?(c(),y("div",Nn,[Bn,a("div",xn,A(s.titleText=="est.APR"?"Estimated APR of the current epoch for all xCETUS holders.":"The number of qualified positions in this epoch."),1)])):L("",!0)]),a("span",null,[s.value!=="--"?(c(),y("p",Pn,[s.imgIcon?He((c(),y("img",Dn,null,512)),[[b,s.imgIcon]]):L("",!0),x(A(s.value),1)])):s.value=="--"&&n.wallet&&n.wallet.address?(c(),P(v,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(c(),y("p",En,"--"))])])}const $n=j(Tn,[["render",Un],["__scopeId","data-v-9cbd6f52"]]),Rn={setup(e){const{t}=se(),s=De(),n=r(()=>s),S=r(()=>n.value.pendingAmount),h=r(()=>n.value.newPendingAmount),v=r(()=>(console.log(n.value.nextStartTime,"===>xcetus.value.nextStartTime"),n.value.nextStartTime)),b=r(()=>1683094391),p=r(()=>n.value.xcetusShare&&$(n.value.xcetusShare,3)),_=ee(),f=r(()=>_),i=r(()=>n.value.cetusApr&&n.value.cetusApr>.01?$(Ce(n.value.cetusApr,2),2):$(n.value.cetusApr,2)),u=r(()=>n.value.pendingCoinInfo),m=r(()=>n.value.newPendingCoinInfo),l=C("");O(()=>u.value,g=>{g&&!xe(g)?l.value=`Pending yield (${g.symbol})`:l.value="Pending yield"},{immediate:!0});const T=C("");O(()=>m.value,g=>{g&&!xe(g)?T.value=`Pending yield (${g.symbol})`:T.value="Pending yield"},{immediate:!0});const D=()=>{setTimeout(()=>{s.getDividendManager()},3e3)},de=r(()=>n.value.dividendManagerInfo),Se=r(()=>{const g=parseInt(String(new Date().getTime()/1e3)),M=de.value.interval_day,q=(g-Number(de.value.start_time))/(M*60);return console.log(parseInt(String(q))>0,"====>(parseInt(String(time))) > 0"),parseInt(String(q))>0}),ce=ue(),me=r(()=>ce),{setIsShowSuccess:Z,setIsShowRejected:ve,setIsShowWaiting:V,setTransactionDesc:Te,setTransactionTxid:ge}=ce,I=Ue("Sui"),H=C(!1),Ae=r(()=>n.value.venft_id),ne=r(()=>me.value.chainName?Ee(me.value.chainName):{});return{t,pendingAmount:S,nextStartTime:v,wallet:f,myShare:p,importIcon:K,nextEndTime:b,pendingYieldText:l,cetusApr:i,pendingCoinInfo:u,getNextEpoch:D,canClaim:Se,claimPendingYield:async()=>{H.value=!0,V(!0),ge(""),Te(`${t("tips.claimingPendingYield")} ${S.value} ${u.value.symbol} ${Number(h.value)>0?"and":""} ${Number(h.value)>0?h.value+" "+m.value.symbol:""}`);try{let g;const M=await I.getRedeemDividendV2Payload(Ae.value);console.log(M,"payload==>");const q=await f.value.currentWallet.signAndExecuteTransactionBlock(M);if(g=ne.value.handleTx(q),g&&g.hash){ge(g.hash),V(!1),Z(!0);const w={title:"Claim",desc:`Claimed ${S.value} ${u.value.symbol} ${Number(h.value)>0?"and":""} ${Number(h.value)>0?h.value+" "+m.value.symbol:""} successfully.`,hash:g.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:u.value.symbol,numa:`+ ${S.value}`,logoa:u.value.logo_url}};ne.value.showTransitionPending(w);const te=await ne.value.watchTransaction(w);console.log("0221###swap###transitionStatus####",te),te&&setTimeout(()=>{s.getVeNFTDividendInfo(),H.value=!1},3e3),s.getOwnerLockCetuss(f.value.address)}else V(!1),ve(!0),H.value=!1}catch(g){V(!1),ve(!0),H.value=!1,console.log(g,"error===>")}},claimLoading:H,addCommom:$,newPendingCoinInfo:m,newPendingAmount:h,newPendingYieldText:T}}},Mn=""+new URL("staking-rewards-banner-h5.1c7401db.png",import.meta.url).href,Ln="data:image/png;base64,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";const be=e=>(J("data-v-37de7f6d"),e=e(),Q(),e),Wn={class:"top-banner"},On=be(()=>a("img",{src:Mn,alt:""},null,-1)),Yn=be(()=>a("p",null,"Convert CETUS to xCETUS to start earning",-1)),Vn={class:"bot-count"},Hn=be(()=>a("span",null,"Reward distribution in ",-1)),Fn={class:"holder-rewards"},Xn={class:"title"},jn=be(()=>a("div",{class:"left"},[a("img",{src:Ln,alt:""}),a("span",null,"xCETUS Staking Rewards")],-1)),Zn={class:"right"},qn={class:"rewards-value"},Gn={key:0,class:"rewards-value"},Kn={class:"claim-h5"};function Jn(e,t,s,n,S,h){var _,f,i,u,m;const v=Sn,b=ie,p=$n;return c(),y("div",null,[a("div",Wn,[On,Yn,a("div",Vn,[Hn,U(v,{"start-time":n.nextStartTime,onCountDown:t[0]||(t[0]=l=>e.$emit("getNextEpoch"))},null,8,["start-time"])])]),a("div",Fn,[a("div",Xn,[jn,a("div",Zn,[n.wallet&&n.wallet.address?(c(),P(b,{key:0,loading:n.claimLoading,disabled:!n.canClaim||n.pendingAmount=="--"||n.pendingAmount<=0,onClick:n.claimPendingYield},{default:Y(()=>[x(" Claim ")]),_:1},8,["loading","disabled","onClick"])):L("",!0)])]),a("div",qn,[U(p,{"title-text":"est.APR","tips-text":"good",value:"≈"+n.cetusApr+"%"},null,8,["title-text","value"]),U(p,{"title-text":"My share",value:n.myShare!=="--"?"≈"+n.myShare+"%":"--"},null,8,["value"]),Number(n.pendingAmount)>0&&n.newPendingAmount=="0"?(c(),P(p,{key:0,"title-text":n.pendingYieldText,"img-icon":(_=n.pendingCoinInfo)==null?void 0:_.logo_url,value:n.addCommom(n.pendingAmount,6)},null,8,["title-text","img-icon","value"])):Number(n.newPendingAmount)>0&&n.pendingAmount=="0"?(c(),P(p,{key:1,"title-text":n.newPendingYieldText,"img-icon":(f=n.newPendingCoinInfo)==null?void 0:f.logo_url,value:n.addCommom(n.newPendingAmount,6)},null,8,["title-text","img-icon","value"])):n.newPendingAmount=="0"&&n.pendingAmount=="0"?(c(),P(p,{key:2,"title-text":n.newPendingYieldText,"img-icon":(i=n.newPendingCoinInfo)==null?void 0:i.logo_url,value:n.addCommom(n.newPendingAmount,6)},null,8,["title-text","img-icon","value"])):L("",!0)]),Number(n.pendingAmount)>0&&Number(n.newPendingAmount)>0?(c(),y("div",Gn,[U(p,{"title-text":n.pendingYieldText,"img-icon":(u=n.pendingCoinInfo)==null?void 0:u.logo_url,value:n.addCommom(n.pendingAmount,6)},null,8,["title-text","img-icon","value"]),U(p,{"title-text":n.newPendingYieldText,"img-icon":(m=n.newPendingCoinInfo)==null?void 0:m.logo_url,value:n.addCommom(n.newPendingAmount,6)},null,8,["title-text","img-icon","value"])])):L("",!0),a("div",Kn,[n.wallet&&n.wallet.address?(c(),P(b,{key:0,disabled:!n.canClaim||n.pendingAmount=="--"||n.pendingAmount<=0,loading:n.claimLoading,onClick:t[1]||(t[1]=l=>e.$emit("claimPendingYield"))},{default:Y(()=>[x(" Claim ")]),_:1},8,["disabled","loading"])):L("",!0)])])])}const Qn=j(Rn,[["render",Jn],["__scopeId","data-v-37de7f6d"]]),zn={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const s=C("--"),n=C("--"),S=C("--"),h=C("--");let v=null;Ve(()=>{window.clearInterval(v)});const b=()=>{const _=new Date().getTime()/1e3;Number(_)<=Number(e.startTime)&&p(e.startTime),Number(_)>Number(e.startTime)&&Number(_)<=Number(e.endTime)&&p(e.endTime)},p=_=>{v=setInterval(()=>{let f=new Date().getTime()/1e3,u=_-parseInt(String(f));if(u==0){t.emit("countDown"),clearInterval(v),window.clearInterval(v),v=null;return}else u<0&&(clearInterval(v),window.clearInterval(v),t.emit("countDown"),v=null);u--;let m=parseInt(String(u/60/60/24));m=m<10?"0"+m:m;let l=parseInt(String(u/60/60%24));l=l<10?"0"+l:l;let T=parseInt(String(u/60%60));T=T<10?"0"+T:T;let D=parseInt(String(u%60));D=D<10?"0"+D:D,s.value=m,n.value=l,S.value=T,h.value=D},1e3)};return O(()=>e.startTime,(_,f)=>{_!==f&&b()},{immediate:!0}),{day:s,hour:n,min:S,sec:h}}};const ye=e=>(J("data-v-131b3f4e"),e=e(),Q(),e),et={class:"count-down"},nt=ye(()=>a("span",null,"D : ",-1)),tt=ye(()=>a("span",null,"H : ",-1)),at=ye(()=>a("span",null,"M : ",-1)),ot=ye(()=>a("span",null,"S",-1));function lt(e,t,s,n,S,h){return c(),y("div",et,[x(A(n.day)+" ",1),nt,x(" "+A(n.hour)+" ",1),tt,x(" "+A(n.min)+" ",1),at,x(" "+A(n.sec)+" ",1),ot])}const st=j(zn,[["render",lt],["__scopeId","data-v-131b3f4e"]]),it={components:{WcountDown:st},props:{vItem:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1}},setup(e,t){const{t:s}=se();console.log(e.vItem,"vItem");const n=De(),S=ue(),h=r(()=>S),v=m=>{t.emit("claim",m),n.setClaimLoading(m.id)},b=r(()=>n),p=r(()=>new Date().getTime()/1e3>e.vItem.locked_until_time),_=m=>{t.emit("cancelRedeemPayload",m),n.setClaimLoading(m.id)};r(()=>h.value.chainName),Ue("Sui");const f=ee();return r(()=>f),r(()=>b.value.venft_id),r(()=>h.value.chainName?Ee(h.value.chainName):{}),{t:s,prettyAmount:G,claimBoolean:p,toClaim:v,toCancel:_,claimWhale:m=>{t.emit("claimWhale",m)},cancelRedeemPayload:m=>{t.emit("cancelRedeemPayload",m)}}}};const $e=e=>(J("data-v-22a782cd"),e=e(),Q(),e),ut={class:"vesting-box"},rt={class:"left"},dt=$e(()=>a("img",{src:Ze,alt:""},null,-1)),ct=$e(()=>a("svg",{class:"icon","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-icon-swap2"})],-1)),mt=$e(()=>a("img",{src:qe,alt:""},null,-1)),vt={class:"available-all"},gt={class:"available"},ft={key:0},ht={key:1};function pt(e,t,s,n,S,h){const v=Xe("WcountDown"),b=ie;return c(),y("div",ut,[a("div",rt,[a("p",null,[a("span",null,[dt,x(" "+A(("addCommom"in e?e.addCommom:Be($))(n.prettyAmount(s.vItem.xcetus_amount,9),9))+" xCETUS ",1)]),ct,a("span",null,[mt,x(" "+A(("addCommom"in e?e.addCommom:Be($))(n.prettyAmount(s.vItem.cetus_amount,9),9))+" CETUS ",1)])]),a("div",vt,[a("div",gt,[a("span",null,A(n.claimBoolean?"Available":"Available in"),1),n.claimBoolean?L("",!0):(c(),P(v,{key:0,"start-time":s.vItem.locked_start_time,"end-time":s.vItem.locked_until_time,onCountDown:t[0]||(t[0]=p=>e.$emit("countDown"))},null,8,["start-time","end-time"]))]),a("div",{class:we(n.claimBoolean?"highlight right-h5":"right-h5")},[n.claimBoolean?(c(),y("span",ft,"Claim")):(c(),y("span",ht,"Cancel"))],2)])]),n.claimBoolean?(c(),P(b,{key:0,disabled:!n.claimBoolean||s.loading,loading:s.loading,onClick:t[1]||(t[1]=p=>n.claimWhale(s.vItem))},{default:Y(()=>[x(A(n.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"])):(c(),P(b,{key:1,type:"text",class:"right",disabled:s.loading,loading:s.loading,onClick:t[2]||(t[2]=p=>n.cancelRedeemPayload(s.vItem))},{default:Y(()=>[x(A(n.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"]))])}const _t=j(it,[["render",pt],["__scopeId","data-v-22a782cd"]]),wt=Pe({props:{inputValue:{type:String,default:""},coinSymbol:{type:String,default:""},whaleDirection:{type:String,default:""},address:{type:String,default:""},balance:{type:String,default:""}},setup(e,t){const{t:s,locale:n}=se(),S=ue(),h=r(()=>S),v=un(rn,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),b=ee(),p=r(()=>b),_=je(),f=r(()=>_),i=m=>{const T=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,9})?).*$");m.target.value=m.target.value.replace(T,"$1")},u=r(()=>{var m;return f.value.tokensObj&&e.address&&f.value.tokensObj[e.address]&&((m=f.value.tokensObj[e.address])==null?void 0:m.decimals)});return O(()=>f.value.RATES,m=>{m&&console.log(m,"price====>")},{immediate:!0}),{pool:f,t:s,addCommom:$,store:h,wallet:p,indicator:v,inputChange:i,importIcon:K,coinDecimals:u}}});const Ct=e=>(J("data-v-c5336450"),e=e(),Q(),e),bt={class:"card"},yt={class:"top"},St={class:"left"},Tt={class:"loading-token"},At={key:0,src:qe,alt:""},kt={key:1,src:Ze,alt:""},It={class:"bottom"},Nt=Ct(()=>a("div",null,null,-1)),Bt={class:"top"},xt={class:"right"},Pt={key:0,class:"balance"},Dt={key:2,class:"balance"};function Et(e,t,s,n,S,h){var _,f;const v=dn,b=Fe,p=ie;return c(),y("div",bt,[a("div",yt,[U(v,{value:e.inputValue,placeholder:"0.0",onChange:e.inputChange,onInput:t[0]||(t[0]=i=>e.$emit("onInput",i.target.value)),onFocus:t[1]||(t[1]=i=>e.$emit("onFocus"))},null,8,["value","onChange"]),a("div",St,[a("div",Tt,[e.coinSymbol=="CETUS"?(c(),y("img",At)):(c(),y("img",kt)),a("div",null,[a("p",null,A(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1)])])])]),a("div",It,[Nt,a("div",Bt,[a("div",xt,[a("span",null,A(e.$t("common.balance")),1),e.balance!=="--"?(c(),y("span",Pt,A(e.balance>1?("addCommom"in e?e.addCommom:Be($))(e.balance):e.balance),1)):e.balance=="--"&&e.wallet&&e.wallet.address?(c(),P(b,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(c(),y("span",Dt,"--")),e.whaleDirection=="From"?(c(),P(p,{key:3,class:"max-btn",disabled:!e.balance||e.balance==0||!((_=e.wallet)!=null&&_.address),onClick:t[2]||(t[2]=i=>e.$emit("halfBalanne"))},{default:Y(()=>[x(A("Half"))]),_:1},8,["disabled"])):L("",!0),e.whaleDirection=="From"?(c(),P(p,{key:4,class:"max-btn",disabled:!e.balance||e.balance==0||!((f=e.wallet)!=null&&f.address),onClick:t[3]||(t[3]=i=>e.$emit("maxBalanne"))},{default:Y(()=>[x(A(e.$t("button.max")),1)]),_:1},8,["disabled"])):L("",!0)])])])])}const Ut=j(wt,[["render",Et],["__scopeId","data-v-c5336450"]]);const $t=Pe({components:{Modal:cn},setup(e,t){const s=ue(),n=C(!1);r(()=>s);const S=ee(),h=r(()=>S);return{store:s,isSelect:n,clickConvert:()=>{n.value&&localStorage.setItem(`notRemind${h.value.address}`,!0),t.emit("clickConvert")}}}}),Re=e=>(J("data-v-ee04003a"),e=e(),Q(),e),Rt=Re(()=>a("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),Mt=[Rt],Lt={class:"token-waring-conetnt"},Wt=Re(()=>a("div",{class:"tips-text"},[x(" Please note that after conversion, if you want to convert xCETUS back to CETUS, a vesting period will be applied & different vesting durations correspond to different redeem ratios. "),a("a",{href:"https://cetus-1.gitbook.io/cetus-docs/tokenomics/xcetus",target:"_blank"}," Learn more")],-1)),Ot={class:"read-text"},Yt={key:0,src:pn},Vt=Re(()=>a("span",null," Do not remind again. ",-1));function Ht(e,t,s,n,S,h){const v=ie,b=Xe("Modal");return c(),P(b,{width:"440px",visible:!0,footer:null,title:null,"mask-closable":!0,onCancel:t[3]||(t[3]=p=>e.$emit("close"))},{closeIcon:Y(()=>[(c(),y("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:t[0]||(t[0]=p=>e.$emit("close"))},Mt))]),default:Y(()=>[a("div",Lt,[Wt,a("div",Ot,[a("div",{class:"radio",onClick:t[1]||(t[1]=p=>e.isSelect=!e.isSelect)},[e.isSelect?(c(),y("img",Yt)):L("",!0)]),Vt]),U(v,{class:"big-btn continue",onClick:t[2]||(t[2]=()=>e.clickConvert())},{default:Y(()=>[x("Convert")]),_:1})])]),_:1})}const Ft=j($t,[["render",Ht],["__scopeId","data-v-ee04003a"]]),Xt=Pe({setup(){const e=De(),t=r(()=>e),s=r(()=>t.value.venft_id),n=r(()=>t.value.venftInfo),S=je(),h=r(()=>S),v=ue(),b=r(()=>v),p=_n();r(()=>h.value.tokensObj&&h.value.tokensObj["0x2a4f647bc73f070182436658bff75060246019857c769ad9268c22c4472bca7f::cetus::CETUS"]);const _=C("");let f=C(!1);const i=C(""),u=C(""),m=C(!1),l=C("convert"),{t:T}=se(),D=C([{time:"15 D",num:15},{time:"30 D",num:30},{time:"90 D",num:90},{time:"180 D",num:180}]),de=C([{name:"est.APR",value:"100.12%"},{name:"My share",value:"<0.1%"},{name:"Pending yield (USDC)",value:0}]),Se=C([{name:"My total locked",value:"$100.12"},{name:"Pending rewards (xCETUS)",value:"100.12"},{name:"",value:""}]),ce=C([{name:"My positions",value:"12"},{name:"My qualified positions",value:"0"},{name:"Pending rewards (xCETUS)",value:"100.12"}]),me=window.setInterval(()=>{e.getXcetusApr(),w.value.address&&(e.getMyShare(w.value.address),e.getVeNFTDividendInfo())},6e4);mn(()=>{document.addEventListener("visibilitychange",()=>{document.hidden||e.getDividendManager()}),e.getXcetusApr(),e.getDividendManager()}),vn(()=>{window.clearInterval(me),document.removeEventListener("visibilitychange",()=>{console.log("移除监听")})}),O(()=>b.value.theme,o=>{o!=="sui"&&p.selectSuiTheme()},{immediate:!0});const Z=r(()=>(console.log(t.value.whaleBalance,"==>xcetus.value.whaleBalance"),t.value.whaleBalance)),ve=r(()=>t.value.xWhaleBalance),V=r(()=>t.value.availableXwhale),Te=r(()=>t.value.redeemingXwhale),ge=r(()=>{if(l.value=="convert"){if(Number(i.value)>Number(Z.value))return!0}else if(Number(i.value)>Number(V.value))return!0;return!i.value||!u.value||Number(i.value)==0||Number(u.value)==0}),I=C("180"),H=r(()=>(console.log(l.value=="convert","===>1212211"),l.value=="convert"&&Number(i.value)>Number(Z.value)?T("button.insufficientBalance",{name:"CETUS"}):l.value!=="convert"&&Number(i.value)>Number(V.value)?T("button.insufficientBalance",{name:"xCETUS"}):Number(I.value)<15?"Minimum vesting duration is 15 days":l.value=="convert"&&s?"Convert":l.value!=="convert"&&s?"Redeem":"Convert"));console.log(H.value,"btnText.value===>");const Ae=o=>{i.value="",u.value="",l.value=o},ne=()=>{f.value=!0,setTimeout(()=>{f.value=!1},300)},Me=o=>{I.value=o},g=C(!1),M=Ue("Sui"),q=ee(),w=r(()=>q),te=r(()=>t.value.ownerLocks);O(()=>w.value.address,o=>{console.log("触发",o),o?(e.getOwnerVeNFT(o),e.getAccountWhaleBalance(o),e.getOwnerLockCetuss(o),e.getMyShare(o)):e.loginOut()},{immediate:!0});const E=r(()=>b.value.chainName?Ee(b.value.chainName):{}),ae=r(()=>b.value.chainName),{setIsShowSuccess:oe,setIsShowRejected:F,setIsShowWaiting:N,setTransactionDesc:le,setTransactionTxid:X}=v,ke=async()=>{g.value=!0,N(!0),X(""),le(T("tips.converting",{from:`${$(i.value,9)} CETUS`,and:"to",to:`${$(i.value,9)} xCETUS`}));try{let o;const d=_e(i.value,9);console.log(s.value,"===>venft_id.value");const k=await M.depositCetus(d,s.value);console.log(k,"payload==>");const R=await w.value.currentWallet.signAndExecuteTransactionBlock(k);if(o=E.value.handleTx(R),o&&o.hash){X(o.hash),N(!1),oe(!0);const B={title:"Converted",desc:`Converted ${$(i.value,9)} xCETUS successfully`,hash:o.hash,tit:"Converted",icon:"icon-icon-Swap",tokenInfo:{tokena:"CETUS",numa:`- ${i.value}`,logoa:K("/sui-image/WHALE-icon.png"),tokenb:"xCETUS",numb:`+ ${i.value}`,logob:K("/sui-image/xWHALE-icon.png")}};ae.value!=="Aptos"&&(B.res=o.res),E.value.showTransitionPending(B);const W=await E.value.watchTransaction(B);console.log("0221###swap###transitionStatus####",W),W&&setTimeout(()=>{e.getAccountWhaleBalance(w.value.address),e.getOwnerVeNFT(w.value.address),e.getOwnerLockCetuss(w.value.address),e.getMyShare(w.value.address)},3e3),g.value=!1}else N(!1),F(!0),g.value=!1;i.value=""}catch(o){N(!1),F(!0),g.value=!1,i.value="",console.log(o,"error===>")}},z=C(!0),Ie=C("0"),Ge=async()=>{const o=_e(i.value,9),d=await M.redeemNum(o,Number(I.value));u.value=G(d.amountOut,9),console.log("===>amount2222"),Ie.value=d.percent},Ke=async()=>{const o=_e(u.value,9),d=await M.reverseRedeemNum(o,Number(I.value));console.log(d,"===>amount111"),i.value=G(d.amountOut,9),Ie.value=d.percent};O(()=>[i.value,I.value,z.value],([o,d,k])=>{console.log(o,"===>>>>>>>fromCoinAmount",typeof o),o&&d&&k&&Number(d)>=15&&Ge(),!o&&k&&(u.value="")},{immediate:!0}),O(()=>[u.value,I.value,z.value],([o,d,k])=>{o&&d&&!k&&Number(d)>=15&&(Ke(),console.log(o,"===>toCoinAmount")),!o&&!k&&(i.value="")},{immediate:!0}),O(()=>[I.value,z.value],([o,d])=>{Number(o)>180?I.value="180":Number(o)<15?d?u.value="":i.value="":o||(d?i.value="":u.value="")},{immediate:!0});const Je=()=>{z.value=!0,i.value=Ce(new Ye(l.value!=="convert"?V.value:Z.value).div(new Ye(2)).toString(),9)},Qe=()=>{z.value=!0,i.value=l.value!=="convert"?Ce(V.value,9):Ce(Z.value,9)},Le=async()=>{g.value=!0,N(!0),X(""),le(T("tips.redeeming",{from:`${$(i.value,9)} xCETUS`,to:`${$(u.value,9)} CETUS`}));try{let o;const d=_e(i.value,9);console.log(d.toString(),"538====>");const k=await M.getRedeemLockPayload(d,s.value,Number(I.value));console.log(k,"payload==>");const R=await w.value.currentWallet.signAndExecuteTransactionBlock(k);if(o=E.value.handleTx(R),o&&o.hash){X(o.hash),N(!1),oe(!0);const B={title:"Redemption",desc:"Redemption transaction submitted successfully.",hash:o.hash,tit:"Vesting",icon:"icon-icon-Removed",tokenInfo:{tokena:"xCETUS",numa:`- ${i.value}`,logoa:K("/sui-image/xWHALE-icon.png")}};ae.value!=="Aptos"&&(B.res=o.res),E.value.showTransitionPending(B);const W=await E.value.watchTransaction(B);console.log("0221###swap###transitionStatus####",W),W&&setTimeout(()=>{e.getAccountWhaleBalance(w.value.address),e.getOwnerVeNFT(w.value.address),e.getOwnerLockCetuss(w.value.address),e.getMyShare(w.value.address)},3e3),g.value=!1}else N(!1),F(!0),g.value=!1;i.value="",u.value=""}catch(o){N(!1),F(!0),g.value=!1,i.value="",u.value="",console.log(o,"error===>")}};O(()=>[s.value,te.value,n.value,w.value.address],([o,d,k,R])=>{R&&(o&&e.getVeNFTDividendInfo(),o&&!xe(k)&&d&&d.length>0&&(console.log("执行了",d),e.getAvailableXCetus()))},{immediate:!0,deep:!0});const ze=async o=>{g.value=!0,N(!0),X(""),le("");try{let d;console.log(o.id,"==>vItem.id");const k=await M.getCancelRedeemPayload(o.id,s.value);console.log(k,"payload==>");const R=await w.value.currentWallet.signAndExecuteTransactionBlock(k);if(d=E.value.handleTx(R),d&&d.hash){X(d.hash),N(!1),oe(!0);const B={title:"Cancelled Redemption",desc:"Cancelled redemption successfully.",hash:d.hash,tit:"Cancelled Redemption",icon:"icon-a-icon-Shutdown",tokenInfo:{tokena:"xCETUS",numa:`+ ${G(o.xcetus_amount,9)}`,logoa:K("/sui-image/xWHALE-icon.png")}};ae.value!=="Aptos"&&(B.res=d.res),E.value.showTransitionPending(B);const W=await E.value.watchTransaction(B);console.log("0221###swap###transitionStatus####",W),W&&setTimeout(()=>{e.getOwnerVeNFT(w.value.address),e.getOwnerLockCetuss(w.value.address),g.value=!1},3e3)}else N(!1),F(!0),g.value=!1;i.value="",u.value=""}catch(d){N(!1),F(!0),g.value=!1,i.value="",u.value="",e.setClaimLoading(""),console.log(d,"error===>")}},en=C({}),nn=()=>{console.log("倒计时结束"),e.getOwnerLockCetuss(w.value.address)},tn=async o=>{console.log(o,"vItem===>"),g.value=!0,N(!0),X(""),le(`${T("tips.claimingPendingYield")} ${$(G(o.cetus_amount,9),9)} CETUS`);try{let d;const k=await M.getRedeemPayload(o.id,s.value);console.log(k,"payload==>");const R=await w.value.currentWallet.signAndExecuteTransactionBlock(k);if(d=E.value.handleTx(R),d&&d.hash){X(d.hash),N(!1),oe(!0);const B={title:"Claimed",desc:`Claimed ${$(G(o.cetus_amount,9),9)} CETUS successfully.`,hash:d.hash,tit:"CETUS Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:"CETUS",numa:`+ ${G(o.cetus_amount,9)}`,logoa:K("/sui-image/WHALE-icon.png")}};ae.value!=="Aptos"&&(B.res=d.res),E.value.showTransitionPending(B);const W=await E.value.watchTransaction(B);console.log("0221###swap###transitionStatus####",W),W&&setTimeout(()=>{e.getOwnerLockCetuss(w.value.address),e.getAccountWhaleBalance(w.value.address),e.getOwnerVeNFT(w.value.address),e.getMyShare(w.value.address),e.getAvailableXCetus(),g.value=!1},3e3)}else N(!1),F(!0),g.value=!1;i.value="",u.value=""}catch(d){N(!1),F(!0),g.value=!1,i.value="",u.value="",e.setClaimLoading(""),console.log(d,"error===>")}},Ne=C(!1),an=()=>{!localStorage.getItem(`notRemind${w.value.address}`)&&H.value=="Convert"?Ne.value=!0:H.value=="Redeem"?Le():ke()},on=()=>{Ne.value=!1,ke()},fe=r(()=>t.value.pendingCoinInfo),he=r(()=>t.value.pendingAmount),pe=C(!1);return{clickModalConvert:on,openConfirmModal:Ne,validateInput:()=>{I.value&&(I.value=I.value.replace(/[^\d]/g,""),I.value.charAt(0)==="0"&&(I.value=I.value.slice(1)))},countDown:nn,value:_,change:f,clickExchange:ne,fromCoinAmount:i,toCoinAmount:u,showCoinSelect:m,headSwitchValue:l,headSwitchChange:Ae,vestingDateList:D,vestingParameter:I,vestingTab:Me,holderList:de,lockupList:Se,leaderboardList:ce,whaleBalance:Z,depositCetus:ke,btnText:H,loading:g,redeemRatio:Ie,halfBalanne:Je,maxBalanne:Qe,xWhaleBalance:ve,availableXwhale:V,redeemingXwhale:Te,withdrawWhale:Le,ownerLocks:te,cancelRedeemPayload:ze,holderInfo:en,btnDisabled:ge,fixedFromCoin:z,walletStore:q,claimWhale:tn,wallet:w,depositOrWithdraw:an,pendingAmount:he,claimPendingYield:async()=>{pe.value=!0,N(!0),X(""),le(`${T("tips.claimingPendingYield")} ${he.value} ${fe.value.symbol}`);try{let o;const d=await M.getRedeemDividendV2Payload(s.value);console.log(d,"payload==>");const k=await w.value.currentWallet.signAndExecuteTransactionBlock(d);if(o=E.value.handleTx(k),o&&o.hash){X(o.hash),N(!1),oe(!0);const R={title:"Claim",desc:`Claimed ${he.value} ${fe.value.symbol} successfully.`,hash:o.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:fe.value.symbol,numa:`+ ${he.value}`,logoa:fe.value.logo_url}};ae.value!=="Aptos"&&(R.res=o.res),E.value.showTransitionPending(R);const B=await E.value.watchTransaction(R);console.log("0221###swap###transitionStatus####",B),B&&setTimeout(()=>{e.getVeNFTDividendInfo(),pe.value=!1},3e3),e.getOwnerLockCetuss(w.value.address)}else N(!1),F(!0),pe.value=!1,g.value=!1}catch(o){N(!1),F(!0),pe.value=!1,console.log(o,"error===>")}},inputBlur:()=>{Number(I.value)<15&&(I.value="15")},getNextEpoch:()=>{e.getDividendManager()}}}});const re=e=>(J("data-v-924bb0a1"),e=e(),Q(),e),jt={class:"dashboard-all"},Zt={class:"dashboard-content"},qt={class:"content-left"},Gt={key:0,class:"vesting"},Kt=re(()=>a("p",null,"Vesting",-1)),Jt={class:"content-right"},Qt={key:0,class:"card-container"},zt={class:"card-item"},ea={class:"card-item"},na={class:"exchange"},ta=re(()=>a("use",{"xlink:href":"#icon-icon-swap2"},null,-1)),aa=[ta],oa={key:1,class:"card-redeem"},la={class:"card-item"},sa={class:"vesting-duration"},ia=re(()=>a("p",null,"Vesting duration",-1)),ua={class:"vesting-content"},ra={class:"vesting-left"},da={class:"value-days"},ca=re(()=>a("span",null,"days",-1)),ma={class:"vesting-right"},va=["onClick"],ga={class:"card-item"},fa={class:"redeem-ratio"},ha=re(()=>a("span",null,"Redeem ratio",-1));function pa(e,t,s,n,S,h){const v=ln,b=Qn,p=_t,_=hn,f=Ut,i=fn,u=ie,m=Ft;return c(),y("div",jt,[U(v,{title:"Dashboard","total-xwhale":e.xWhaleBalance,"available-xwhale":e.availableXwhale,"redeeming-xwhale":e.redeemingXwhale},null,8,["total-xwhale","available-xwhale","redeeming-xwhale"]),a("div",Zt,[a("div",qt,[U(b,{"holder-info":e.holderInfo,"pending-amount":e.pendingAmount,"claim-loading":e.claimLoading,onClaimPendingYield:e.claimPendingYield,onGetNextEpoch:e.getNextEpoch},null,8,["holder-info","pending-amount","claim-loading","onClaimPendingYield","onGetNextEpoch"]),e.ownerLocks&&e.ownerLocks.length>0?(c(),y("div",Gt,[Kt,(c(!0),y(We,null,Oe(e.ownerLocks,l=>(c(),P(p,{key:l,"v-item":l,loading:e.loading,onCountDown:e.countDown,onClaimWhale:e.claimWhale,onCancelRedeemPayload:e.cancelRedeemPayload},null,8,["v-item","loading","onCountDown","onClaimWhale","onCancelRedeemPayload"]))),128))])):L("",!0)]),a("div",Jt,[U(_,{"head-switch-value":e.headSwitchValue,"left-text":"Get xCETUS","right-text":"Redeem CETUS",onHeadSwitchChange:t[0]||(t[0]=l=>{e.headSwitchChange(l)})},null,8,["head-switch-value"]),e.headSwitchValue=="convert"?(c(),y("div",Qt,[a("div",zt,[U(f,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[1]||(t[1]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"CETUS","whale-direction":"From",balance:e.whaleBalance,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[2]||(t[2]=l=>{e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),a("div",ea,[U(f,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[3]||(t[3]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"To",balance:e.availableXwhale,onOnInput:t[4]||(t[4]=l=>{e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance"])]),a("img",{class:we(e.change?"gang animationex":"gang"),src:wn,alt:""},null,2),a("div",na,[(c(),y("svg",{class:we(e.change?"icon animationex":"icon"),"aria-hidden":"true"},aa,2))])])):(c(),y("div",oa,[a("div",la,[U(f,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[5]||(t[5]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"From",balance:e.availableXwhale,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[6]||(t[6]=l=>{e.fixedFromCoin=!0,e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),a("div",sa,[ia,a("div",ua,[a("div",ra,[a("div",da,[He(a("input",{"onUpdate:modelValue":t[7]||(t[7]=l=>e.vestingParameter=l),onInput:t[8]||(t[8]=(...l)=>e.validateInput&&e.validateInput(...l)),onBlur:t[9]||(t[9]=(...l)=>e.inputBlur&&e.inputBlur(...l))},null,544),[[gn,e.vestingParameter]])]),ca]),a("div",ma,[(c(!0),y(We,null,Oe(e.vestingDateList,l=>(c(),y("div",{key:l.time,class:we(["box-table",{"box-table-active":l.num===Number(e.vestingParameter)}]),onClick:T=>e.vestingTab(l.num)},A(l.time),11,va))),128))])]),U(i,{value:e.vestingParameter,"onUpdate:value":t[10]||(t[10]=l=>e.vestingParameter=l),max:180,min:15},null,8,["value"])]),a("div",ga,[U(f,{modelValue:e.toCoinAmount,"onUpdate:modelValue":t[11]||(t[11]=l=>e.toCoinAmount=l),"input-value":e.toCoinAmount,"coin-symbol":"CETUS","whale-direction":"To",balance:e.whaleBalance,onOnInput:t[12]||(t[12]=l=>{e.fixedFromCoin=!1,e.toCoinAmount=l})},null,8,["modelValue","input-value","balance"])]),a("div",fa,[ha,a("p",null,A(e.redeemRatio)+"%",1)])])),e.wallet&&e.wallet.address?(c(),P(u,{key:2,class:"big-btn",loading:e.loading,disabled:e.btnDisabled,onClick:e.depositOrWithdraw},{default:Y(()=>[a("span",null,A(e.btnText),1)]),_:1},8,["loading","disabled","onClick"])):(c(),P(u,{key:3,class:"big-btn",onClick:t[13]||(t[13]=l=>e.walletStore.setIsShowWalletModal(!0))},{default:Y(()=>[a("span",null,A(e.$t("button.connectWallet")),1)]),_:1}))])]),e.openConfirmModal?(c(),P(m,{key:0,onClickConvert:e.clickModalConvert,onClose:t[14]||(t[14]=()=>e.openConfirmModal=!e.openConfirmModal)},null,8,["onClickConvert"])):L("",!0)])}const Ya=j(Xt,[["render",pa],["__scopeId","data-v-924bb0a1"]]);export{Ya as default};
