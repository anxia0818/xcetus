import{_ as X}from"./back.a5132918.js";import{u as E,_ as G,a as F,b as J}from"./unclock-modal.94960c4c.js";import{l as q,r as h,m as f,e as P,q as K,o as n,f as a,h as t,F as C,s as U,t as R,v as b,x as g,j as d,i as r,p as B,k as I,y as Q,z as L,w as $,c as T,B as N,A as V,a as W,b as Y}from"./entry.f6bb9ee2.js";import{u as A}from"./pool.35fd4e00.js";import{_ as x}from"./xWHALE-icon.2df34cd4.js";import{_ as Z,a as tt}from"./ubxt.0b188c59.js";import{_ as O}from"./position-Inactive.df1ec633.js";import{_ as j}from"./icon-arrow_2x.4ffddb8e.js";import{_ as D}from"./WHALE-icon.28f954ba.js";import"./sha256.dba739f5.js";import"./index.5c9b9022.js";import"./decimal.0e8aa3f1.js";const ot={props:{rewardsList:{type:Object,default:()=>({})},tabelList:{type:Object,default:()=>({})},titleText:{type:String,default:""}},setup(o){const{t:_}=q(),l=h(!1),e=A(),u=f(()=>e),m=f(()=>u.value.poolConfigObj),i=E(),p=f(()=>i),s=f(()=>(console.log(p.value.loading,"==>booster.value.loading"),p.value.loading));return{t:_,select:l,poolInfoObj:m,loadings:s}}};const v=o=>(B("data-v-03c70595"),o=o(),I(),o),et={class:"lockup-table"},st={class:"table"},lt=v(()=>t("thead",null,[t("tr",null,[t("th"),t("th",null,[t("div",null,"Total locked")]),t("th",null,"Multiplier 1x up to"),t("th",null,[t("div",null," APR up to ")]),t("th",null,"Rewards"),t("th",null,[t("div",null," My locked ")]),t("th",null,"Earned")])],-1)),nt={class:"td-pools"},at={class:"img-list"},it={alt:""},dt={alt:""},ct={key:0,class:"percentage"},rt={class:"td-locked"},_t=v(()=>t("td",{class:"td-multiplier"},[t("div",null,[t("div",{class:"multiplier"},"4x")])],-1)),ut={class:"td-upto"},pt=v(()=>t("td",{class:"td-bonus"},[t("div",null,[t("img",{src:x,alt:""}),t("span",null,"xCETUS")])],-1)),vt={class:"td-mylocked"},ht=v(()=>t("td",{class:"td-earned-manage"},[t("div",null,[t("img",{src:x,alt:""}),t("span",null,"12,345.671")])],-1)),bt={class:"table-h5"},mt={class:"table-box"},kt={class:"top-table"},gt=v(()=>t("div",{class:"img-list"},[t("img",{src:Z,alt:""}),t("img",{src:tt,alt:""})],-1)),ft=v(()=>t("div",{class:"percentage"},"0.02%",-1)),yt={key:0,class:"content-table"},wt=v(()=>t("div",null,[t("span",null,"Total locked"),t("p",null,"$1.21M")],-1)),$t=v(()=>t("div",null,[t("span",null,"Multiplier 1x up to"),t("div",{class:"multiplier"},"2x")],-1)),xt=v(()=>t("span",null,"APR up to",-1)),St={class:"table-h5-box"},Lt=v(()=>t("div",null,[t("span",null,"Rewards"),t("div",{class:"table-h5-box"},[t("img",{src:x,alt:""}),t("p",null,"xCETUS")])],-1)),Ct=v(()=>t("div",null,[t("span",null,"My locked"),t("p",null,"$111.21")],-1)),Ut=v(()=>t("div",null,[t("span",null,"Earned(xCETUS)"),t("div",{class:"table-h5-box"},[t("img",{src:x,alt:""}),t("p",null,"12,345.67")])],-1));function Pt(o,_,l,e,u,m){const i=G,p=K("image");return n(),a("div",et,[t("table",st,[lt,t("tbody",null,[(n(!0),a(C,null,U(l.tabelList,(s,c)=>{var y,S;return n(),a("tr",{key:c},[t("td",nt,[t("div",null,[t("div",at,[R(t("img",it,null,512),[[p,(y=s==null?void 0:s.token_a)==null?void 0:y.logo_url]]),R(t("img",dt,null,512),[[p,(S=s==null?void 0:s.token_b)==null?void 0:S.logo_url]])]),t("p",null,b(s.name),1),e.poolInfoObj&&e.poolInfoObj[s.clmm_pool_id]&&e.poolInfoObj[s.clmm_pool_id].fee?(n(),a("div",ct,b(e.poolInfoObj&&e.poolInfoObj[s.clmm_pool_id]&&e.poolInfoObj[s.clmm_pool_id].fee*100)+"% ",1)):g("",!0)])]),t("td",rt," $"+b(s.locked),1),_t,t("td",ut,[t("div",null,[d(b(s.aprUpto)+"% ",1),r(i,{"rewards-list":l.rewardsList},null,8,["rewards-list"])])]),pt,t("td",vt," $"+b(s.myLocked),1),ht])}),128))])]),t("ul",bt,[(n(!0),a(C,null,U(l.tabelList,(s,c)=>(n(),a("li",{key:c},[t("div",mt,[t("div",kt,[gt,t("p",null,b(s.name),1),ft]),l.titleText=="manage"?(n(),a("div",yt,[wt,$t,t("div",null,[xt,t("div",St,[d(" 13.3% "),r(i,{"rewards-list":l.rewardsList},null,8,["rewards-list"])])]),Lt,Ct,Ut])):g("",!0)])]))),128))])])}const Bt=P(ot,[["render",Pt],["__scopeId","data-v-03c70595"]]),It={props:{rewardsList:{type:Object,default:()=>({})},tabelList:{type:Object,default:()=>({})},titleText:{type:String,default:""}},setup(o){const{t:_}=q(),l=h([]),e=(z,H)=>H.liquidity-z.liquidity,u=h(!1),m=()=>{u.value=!u.value};Q(()=>{l.value=o.tabelList,l.value.sort(e)});const i=A(),p=f(()=>i),s=f(()=>p.value.poolConfigObj),c=E(),y=f(()=>c),S=f(()=>(console.log(y.value.loading,"==>booster.value.loading"),y.value.loading));return{t:_,showUnclock:u,changeShowUnclock:m,poolInfoObj:s,loadings:S}}};const k=o=>(B("data-v-2a96621e"),o=o(),I(),o),Tt={class:"lockup-table"},qt={class:"table"},Ot=k(()=>t("thead",null,[t("tr",null,[t("th",null,"NFT ID"),t("th",null,"Price range (SUI per USDC)"),t("th",null,"Liquidity"),t("th",null,"Fees"),t("th",null,"Rewards"),t("th")])],-1)),jt=["onClick"],Mt={class:"td-nft-id"},Rt=k(()=>t("div",{class:"nft-img"},[t("img",{src:O,alt:""})],-1)),Dt=k(()=>t("td",{class:"td-price-range"},[t("div",null,[d(" 22.292324 "),t("img",{class:"rotate-img",src:j,alt:""}),d(" 22.292324 ")])],-1)),Et=k(()=>t("td",null,"$100.12",-1)),Ft=k(()=>t("td",null,"$100.12",-1)),Nt={class:"table-h5"},Vt={class:"table-box"},At={class:"content-table"},zt={class:"h5-position-box"},Ht={class:"h5-nft"},Xt=k(()=>t("div",{class:"nft-img"},[t("img",{src:O,alt:""})],-1)),Gt=k(()=>t("div",{class:"h5-price-range"},[t("span",null,"Price range (SUI per USDC)"),t("div",{class:"price-range"},[d(" 22.292324 "),t("img",{class:"rotate-img",src:j,alt:""}),d(" 22.292324 ")])],-1)),Jt=k(()=>t("span",null,"Liquidity",-1)),Kt=k(()=>t("div",null,[t("span",null,"Fees"),t("p",null,"$100.12")],-1)),Qt=k(()=>t("div",null,[t("span",null,"Rewards"),t("p",null,"$100.12")],-1)),Wt={class:"bot-table"};function Yt(o,_,l,e,u,m){const i=N,p=F;return n(),a("div",Tt,[t("table",qt,[Ot,t("tbody",null,[(n(!0),a(C,null,U(l.tabelList,(s,c)=>(n(),a("tr",{key:c,class:L(l.titleText=="manage"?"manage-tr":""),onClick:y=>o.$emit("toBoosterManage",s.pool_id,s.clmm_pool_id)},[t("td",Mt,[t("div",null,[t("p",{onClick:_[0]||(_[0]=y=>o.$emit("toLockupLiquidity"))},b(s.name),1),Rt])]),Dt,t("td",null,"$"+b(s.liquidity),1),Et,Ft,t("td",null,[r(i,{onClick:e.changeShowUnclock},{default:$(()=>[d(" Lock ")]),_:1},8,["onClick"])])],10,jt))),128))]),e.showUnclock?(n(),T(p,{key:0,"lock-show":!0,onOnClose:e.changeShowUnclock},null,8,["onOnClose"])):g("",!0)]),t("ul",Nt,[(n(!0),a(C,null,U(l.tabelList,(s,c)=>(n(),a("li",{key:c},[t("div",Vt,[t("div",At,[t("div",zt,[t("div",Ht,[t("p",null,b(s.name),1),Xt])]),Gt,t("div",null,[Jt,t("p",null,b(s.liquidity),1)]),Kt,Qt]),t("div",Wt,[r(i,{onClick:e.changeShowUnclock},{default:$(()=>[d(" Lock ")]),_:1},8,["onClick"])])])]))),128))])])}const Zt=P(It,[["render",Yt],["__scopeId","data-v-2a96621e"]]),to={props:{unlockBoolean:{type:Boolean,default:!1},activeState:{type:Boolean,default:!1},whetherToRegister:{type:Boolean,default:!1}},setup(o){const{t:_}=q(),l=h(!1),e=()=>{l.value=!l.value},u=h(!1);return{t:_,showPosition:l,showUnclock:u,changeShowUnclock:()=>{u.value=!u.value},changeShowPosition:e}}},oo=""+new URL("Boosted-rewards-bonus.b98b5d7c.gif",import.meta.url).href;const w=o=>(B("data-v-8d3db5e7"),o=o(),I(),o),eo={class:"position-pond"},so={class:"position-box"},lo=V('<div class="box-top" data-v-8d3db5e7><div class="box" data-v-8d3db5e7><span data-v-8d3db5e7>Locked period</span><div class="box-locked-hover" data-v-8d3db5e7> 15 days <div class="icon-box-locked" data-v-8d3db5e7><svg class="icon" aria-hidden="true" data-v-8d3db5e7><use xlink:href="#icon-icon-information" data-v-8d3db5e7></use></svg><div class="locked-text" data-v-8d3db5e7> 2023.04.30 12:34:56 - 2023.05.16 12:34:56 (UTC) </div></div></div></div><div class="box" data-v-8d3db5e7><span data-v-8d3db5e7>Locked ends in</span><p data-v-8d3db5e7>6D : 13H : 59M : 58S</p></div><div class="box" data-v-8d3db5e7><span data-v-8d3db5e7>Boost</span><p class="multiplier" data-v-8d3db5e7>2x</p></div></div>',1),no={class:"box-content"},ao=V('<span data-v-8d3db5e7>Rewards</span><div class="content-box" data-v-8d3db5e7><p data-v-8d3db5e7>Fees</p><div class="left-rewards" data-v-8d3db5e7><img src="'+x+'" alt="" data-v-8d3db5e7> 110.12 SUI </div></div><div class="content-box near-point" data-v-8d3db5e7><p data-v-8d3db5e7></p><div class="left-rewards" data-v-8d3db5e7><img src="'+D+'" alt="" data-v-8d3db5e7> 110.12 SUI </div></div><div class="content-box rewards-near" data-v-8d3db5e7><p data-v-8d3db5e7>Rewards</p><div class="left-rewards" data-v-8d3db5e7><img src="'+D+'" alt="" data-v-8d3db5e7> 110.12 CETUS </div></div><div class="content-box near-point" data-v-8d3db5e7><p data-v-8d3db5e7></p><div class="left-rewards" data-v-8d3db5e7><img src="'+J+'" alt="" data-v-8d3db5e7> 110.12 USDT </div></div>',5),io={class:"content-box Boosted-rewards"},co={key:0,src:oo,alt:""},ro=w(()=>t("div",{class:"left-rewards"},[t("img",{src:x,alt:""}),d(" 110.12 xCETUS ")],-1)),_o=w(()=>t("svg",{"aria-hidden":"true",class:"icon"},[t("use",{"xlink:href":"#icon-icon_on"})],-1)),uo={key:0,class:"price-range"},po=w(()=>t("p",null,"Price range",-1)),vo=w(()=>t("span",null,[d(" 22.292324 "),t("img",{src:j,alt:""}),d(" 22.292324 ")],-1)),ho=[po,vo],bo={key:1,class:"price-range-state"},mo={key:0,src:O,alt:""},ko={key:1},go=w(()=>t("p",null,"SUI per USDC",-1)),fo={key:2,class:"liquidity-value"},yo=w(()=>t("p",null,"Liquidity",-1)),wo=w(()=>t("span",null,"$200.01",-1)),$o=[yo,wo],xo={key:3,class:"claim-position"},So={key:4,class:"no-register"};function Lo(o,_,l,e,u,m){const i=N,p=F;return n(),a("div",eo,[t("div",so,[t("div",{class:L(["box-title",l.unlockBoolean?"":"box-title-unlock"])},[d(" Cetus LP | Pool4-10001 "),l.unlockBoolean?g("",!0):(n(),T(i,{key:0},{default:$(()=>[d(" Unlocked ")]),_:1}))],2),lo,t("div",no,[ao,t("div",io,[t("p",null,[d(" Boosted rewards "),l.activeState?(n(),a("img",co)):g("",!0)]),ro])]),t("div",{class:L(["position-detail",e.showPosition?"expand":""]),onClick:_[0]||(_[0]=(...s)=>e.changeShowPosition&&e.changeShowPosition(...s))},[d(" Position detail "),_o],2),e.showPosition?(n(),a("div",uo,ho)):g("",!0),e.showPosition?(n(),a("div",bo,[l.activeState?(n(),a("img",mo)):(n(),a("div",ko)),go])):g("",!0),e.showPosition?(n(),a("div",fo,$o)):g("",!0),l.whetherToRegister?(n(),a("div",xo,[r(i,{class:L(l.unlockBoolean?"unblock":""),onClick:e.changeShowUnclock},{default:$(()=>[d(b(l.unlockBoolean?"Unlock":"Claim Position & Rewards"),1)]),_:1},8,["class","onClick"])])):(n(),a("div",So,[r(i,{onClick:e.changeShowUnclock},{default:$(()=>[d(" Register xCETUS ")]),_:1},8,["onClick"]),r(i,{disabled:!0,onClick:e.changeShowUnclock},{default:$(()=>[d(" Claim Position & Rewards ")]),_:1},8,["onClick"])]))]),e.showUnclock?(n(),T(p,{key:0,onOnClose:e.changeShowUnclock},null,8,["onOnClose"])):g("",!0)])}const Co=P(to,[["render",Lo],["__scopeId","data-v-8d3db5e7"]]),Uo=W({setup(){const o=h(""),_=h(!0),l=h(!0),e=h([{name:"Cetus LP - 10001",myLocked:"$100",liquidity:"113.45"},{name:"Cetus LP - 10001",myLocked:"$300",liquidity:"68.11"}]),u=h([{name:"Sol-USDC",locked:"23.78",aprUpto:"87.29",earned:"12.32",myLocked:"300"}]),m=h([{day:"15 days"},{day:"30 days"},{day:"90 days"}]),i=Y();return{topValue:o,checked:_,tabelList:e,rewardsList:m,unlockBoolean:l,tabelListPools:u,toLockupLiquidity:()=>{i&&i.push("/lockup-liquidity")}}}});const M=o=>(B("data-v-6167ddd3"),o=o(),I(),o),Po={class:"leaderboard-all"},Bo={class:"manage-booster"},Io=M(()=>t("div",{class:"title-manage"},[t("span",null," Pools ")],-1)),To=M(()=>t("div",{class:"title-manage position"},[t("span",null," My Positions "),t("p",null,"(2)")],-1)),qo=M(()=>t("div",{class:"title-manage position"},[t("span",null," My Locked Positions "),t("p",null,"(3)")],-1)),Oo={class:"booster-position-list"};function jo(o,_,l,e,u,m){const i=X,p=Bt,s=Zt,c=Co;return n(),a("div",Po,[t("div",Bo,[r(i),Io,r(p,{"title-text":"manage","tabel-list":o.tabelListPools,"rewards-list":o.rewardsList},null,8,["tabel-list","rewards-list"]),To,r(s,{"title-text":"position","tabel-list":o.tabelList,"rewards-list":o.rewardsList,onToLockupLiquidity:o.toLockupLiquidity},null,8,["tabel-list","rewards-list","onToLockupLiquidity"]),qo,t("div",Oo,[r(c,{"unlock-boolean":!1,"whether-to-register":!1,"active-state":!1}),r(c,{"unlock-boolean":!0,"whether-to-register":!0,"active-state":!0}),r(c,{"unlock-boolean":!0,"whether-to-register":!1,"active-state":!1}),r(c,{"unlock-boolean":!0,"whether-to-register":!0,"active-state":!0}),r(c,{"unlock-boolean":!1,"whether-to-register":!0,"active-state":!1}),r(c,{"unlock-boolean":!0,"whether-to-register":!0,"active-state":!0})])])])}const Jo=P(Uo,[["render",jo],["__scopeId","data-v-6167ddd3"]]);export{Jo as default};
