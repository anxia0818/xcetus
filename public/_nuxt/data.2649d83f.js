import{D as u}from"./decimal.0bdeb344.js";import{r as e}from"./entry.41263a76.js";const l=e(""),t=e(""),w=e(""),O=e(""),x=e(),S=e(),r=e(),d=e(),f=e(),m=e(),n=e(),i=e(),g=e(!0),s=e(!0),L=e(!1),T=e(!1),M=()=>{g.value=!g.value;const v=r.value;if(r.value=d.value,d.value=v,s.value?(m.value=f.value,s.value=!1):(f.value=m.value,s.value=!0),l.value!==""&&t.value!==""){if(l.value=="0"&&t.value=="∞")return;if(l.value!=="0"&&t.value!=="∞"){const o=l.value,a=t.value;l.value=new u(1).div(a).toString(),t.value=new u(1).div(o).toString();const c=n.value,k=i.value;n.value=new u(1).div(k).toString(),i.value=new u(1).div(c).toString()}else if(t.value=="∞"){const o=l.value;l.value="0",t.value=new u(1).div(o).toString();const a=n.value;i.value,n.value="0",i.value=new u(1).div(a).toString()}else if(l.value=="0"){const o=t.value;l.value=new u(1).div(o).toString(),t.value="∞",n.value;const a=i.value;n.value=new u(1).div(a).toString(),i.value="∞"}}console.log("执行了吗776#")},P=e(),D=async(v,o)=>{console.log("0412###resetTickList####");const a=await v.value.getTicks(o.value);console.log("0412###resetTickList###result####",a);const c=a?v.value.getTickDataFromUrlData(a):[];P.value=c,console.log("0412###resetTickList###tickList####",c)},A=()=>{l.value="",t.value="",w.value="",O.value="",x.value="",S.value="",r.value=null,d.value=null,f.value="",m.value="",n.value="",i.value="",g.value=!0,s.value=!0,P.value=[],T.value=!1};export{x as currentPrice,S as currentPriceReverse,w as currentPriceTab,i as defaultMaxPrice,n as defaultMinPrice,g as direction,s as fixedFromCoin,r as fromCoin,f as fromCoinAmount,T as isInputTotalAmount,t as maxPrice,l as minPrice,L as positionError,O as priceConfigObj,A as resetData,D as resetTickList,P as tickList,d as toCoin,m as toCoinAmount,M as toggle};
