import{_ as F}from"./back.2041d6be.js";import{_ as L}from"./coin-pair-name.4f15e8f1.js";import{_ as P}from"./status-block.03456dc1.js";import{_ as T}from"./swap-setting.e590805f.js";import{a as D,r as a,f as q,i as G,l as N,o as i,m as c,q as s,p as t,t as r,s as _,c as S,v as k,ad as R,ae as A,w as V,x as B,N as X,at as j,B as K,y as M,z as U}from"./entry.06eb55ea.js";/* empty css               *//* empty css              */const W=D({setup(){let e=a(!1);const o=a(!1),u=()=>{o.value=!0,setTimeout(()=>{o.value=!1},1e3)},m=[{name:"25%",value:25},{name:"50%",value:50},{name:"75%",value:75},{name:"MAX",value:100}],v=q({name:"CUSDT-CUSDC",fee:"0.0001",swap_account:"6jZ1KK9LephzTTTL4pRnHwL9qBG8ymHk5Biv7vFdNtrR",token_a:{symbol:"CUSDT",name:"CUSDT",token_mint:"Gcu9zjxrjez4xWGj8bi2gTLXYN8hD8Avu2tN8xfnV65Q",swap_token_account:"EPyDSacqb9PH4SoXFov21VPnVSdMBw4N4aQurC89k8ei",decimal:8,show_decimal:4,calculate_decimal:6},token_b:{symbol:"CUSDC",name:"CUSDC",token_mint:"GHStiPQDe4HEQxtDzyFFuNjP6Z6GqYhbPqJ6oiRFmGWT",swap_token_account:"EDSWfuCTcCNXM5WeMZntLkQUjZuXeCp6mEKe5FbEXNX",decimal:8,show_decimal:4,calculate_decimal:6},price_interval:{lower_price:"0.995",upper_price:"1.0004"},version:2,tokenSwapKey:"6jZ1KK9LephzTTTL4pRnHwL9qBG8ymHk5Biv7vFdNtrR",accountType:0,isInitialized:1,nonce:255,tokenProgramId:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",manager:"AYKFAKqx6ZWWC6Hkr4Csj3AcwLxCyLpq1tRk5TRWwqyz",managerTokenA:"FQEcvmkiiP95pkJ1s17qe6P5nGZtXFph45eeSggmQRni",managerTokenB:"Ch5BksXMFLGQ6CcL2dD8MACy1JsNAr5bQWfqKS5DEFTJ",swapTokenA:"EPyDSacqb9PH4SoXFov21VPnVSdMBw4N4aQurC89k8ei",swapTokenB:"EDSWfuCTcCNXM5WeMZntLkQUjZuXeCp6mEKe5FbEXNX",tokenAMint:"Gcu9zjxrjez4xWGj8bi2gTLXYN8hD8Avu2tN8xfnV65Q",tokenBMint:"GHStiPQDe4HEQxtDzyFFuNjP6Z6GqYhbPqJ6oiRFmGWT",ticksKey:"25SMMLkn91997idMeyHSQCKHLdyAK5xgc2xy9y1ErrRL",positionsKey:"CeLGR1idhpsdym3LFm9oodFa5fkWSmGjJ1CW9SGyfzvD",curveType:0,managerFee:"0.00002",tickSpace:1,currentSqrtPrice:"0.999768630519",currentLiquity:"246658087861075202",feeGrowthGlobal0:"0.0000133953863346",feeGrowthGlobal1:"0.0000126495577595",managerFeeA:"782334664",managerFeeB:"408082167",feeView:.01,currentPriceView:.9995373145698367,currentPriceViewReverse:"1.000462899607067",index:"58",positionId:"3XLR74hZpFVGKMNwoedHccq99LR5wP3gmSueSW6pjSks",lowerTick:-50,upperTick:4,liquity:"232423209336",feeGrowthInsideALast:"0.0000133914429271",feeGrowthInsideBLast:"0.0000126457075474",tokenAFee:"0",tokenBFee:"0",minPrice:"0.99501272792",maxPrice:"1.00040006000",nftTokenAccount:"7TNUCpcZfFoTNDPynwGHRpjuvZAz9sYAeoxz2JteioxF",nftTokenMint:"3XLR74hZpFVGKMNwoedHccq99LR5wP3gmSueSW6pjSks",nftTokenId:"3XLR74hZpFVGKMNwoedHccq99LR5wP3gmSueSW6pjSks",fromCoinAmount:"1.00265752",toCoinAmount:"5.26527690",tokenaFee:"0.0000091653942686965242",tokenbFee:"0.000008948786529063001656",amountUSD:"6.2674",feeUSD:"0.00001810994010336969776027693945159814",currentStatus:"Active",id:"3XLR74hZpFVGKMNwoedHccq99LR5wP3gmSueSW6pjSks",fromPercent:16,toPercent:84}),p=a(50),l=a(1);return{refresh:o,amountArr:m,sliderVal:p,currentPositionInfo:v,slippage:l,importIcon:G,clickRefresh:u,isShowSwapSetting:e}}});const d=e=>(M("data-v-806c54b3"),e=e(),U(),e),H={class:"remove-liquidity"},I={class:"remove-liquidity-top"},Q={class:"remove-title"},Z={class:"right title-right"},z=d(()=>t("svg",{class:"icon","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),E=d(()=>t("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),x=[E],$={class:"remove-liquidity-center"},J={class:"top"},Y={class:"bottom"},O={class:"add-amount"},ee={class:"add-amount-header"},te={class:"amount-list"},oe=["onClick"],ne={class:"slider-box"},ie=B('<div class="induction remove-liquidity-bottom" data-v-806c54b3><div class="item" data-v-806c54b3><div class="induction-text" data-v-806c54b3>Liquidity</div><div class="induction-value" data-v-806c54b3>26.42 USDC \u2192 23.172 USDC</div></div><div class="item" data-v-806c54b3><div class="induction-text" data-v-806c54b3></div><div class="induction-value" data-v-806c54b3>0.02403 USDT \u2192 0.00821 USDT</div></div><div class="item" data-v-806c54b3><div class="induction-text" data-v-806c54b3>Fees Earned</div><div class="induction-value" data-v-806c54b3>26.42 USDC</div></div><div class="item" data-v-806c54b3><div class="induction-text" data-v-806c54b3></div><div class="induction-value" data-v-806c54b3>0.02403 USDT</div></div></div>',1),se=d(()=>t("svg",{"aria-hidden":"true"},[t("use",{"xlink:href":"#icon-icon-Remove"})],-1)),ae=d(()=>t("span",null,"Remove",-1));function ce(e,o,u,m,v,p){const l=F,f=L,h=P,w=X,C=j,b=K,y=T;return i(),c("div",H,[s(l),t("div",I,[t("div",Q,r(e.$t("common.removeLiquidity")),1),t("div",Z,[t("div",{class:"slippage-icon",onClick:o[0]||(o[0]=n=>e.isShowSwapSetting=!0)},[z,t("span",null,r(e.slippage)+"%",1)]),(i(),c("svg",{"aria-hidden":"true",class:_(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:o[1]||(o[1]=(...n)=>e.clickRefresh&&e.clickRefresh(...n))},x,2))])]),t("div",$,[t("div",J,[e.currentPositionInfo?(i(),S(f,{key:0,"from-coin":e.currentPositionInfo.token_a,"to-coin":e.currentPositionInfo.token_b},null,8,["from-coin","to-coin"])):k("",!0),s(h,{"current-status":e.currentPositionInfo&&e.currentPositionInfo.currentStatus},null,8,["current-status"])]),t("div",Y,[t("div",O,[t("div",ee,[t("span",null,r(e.$t("common.amount")),1),t("div",te,[(i(!0),c(R,null,A(e.amountArr,(n,g)=>(i(),c("div",{key:g,class:_(["amount-item",e.sliderVal==n.value?"amount-item-active":""]),onClick:re=>e.sliderVal=n.value},r(n.name),11,oe))),128))])]),t("div",ne,[s(w,{value:e.sliderVal,"onUpdate:value":o[2]||(o[2]=n=>e.sliderVal=n),suffix:"%"},null,8,["value"]),s(C,{value:e.sliderVal,"onUpdate:value":o[3]||(o[3]=n=>e.sliderVal=n)},null,8,["value"])])])])]),ie,s(b,{class:"remove-btn big-btn"},{default:V(()=>[se,ae]),_:1}),e.isShowSwapSetting?(i(),S(y,{key:0,onOnClose:o[4]||(o[4]=n=>e.isShowSwapSetting=!1)})):k("",!0)])}const Se=N(W,[["render",ce],["__scopeId","data-v-806c54b3"]]);export{Se as default};
