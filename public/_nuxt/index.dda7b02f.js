import{a as y,C as c,r as x,e as h,o as b,f as C,i as S,w as _,B as w,j as U}from"./entry.61679925.js";import{u as $,a as k}from"./sha256.7649f183.js";import{g as v,c as o}from"./index.9332ea9a.js";const R=y({async setup(){console.log("this is test");const n=$(),p=c(()=>n.chainName),i=c(()=>n),u=k(),s=c(()=>u),f=()=>{const e=v({appId:"d2baaf93-cda5-404c-9be2-36695a530d02",destinationWallets:[{address:"0xabcdef",blockchains:["sui"]},{address:"0x123456",assets:["ETH","USDC"]}]});console.log("0629###testfun###onRampURL###",e),window.open(e,"Coinbase Pay","height=600, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")},l=(e,a)=>{try{const t=o.enc.Utf8.parse(a),g=o.enc.Utf8.parse(a.substring(0,16)),E=o.enc.Utf8.parse(e),r=o.AES.encrypt(e,t,{iv:g,mode:o.mode.CBC});return console.log("0614###encrypted###",r),console.log("0614###encrypted.toString()###",r.toString()),console.log("0614###encrypted###",r),r.toString()}catch(t){console.log(`0613###AES encrypting exception, msg is ${t}`)}return null},d=x(!1),m=c(()=>{if(s.value.address){const e=`address=${s.value.address}&appId=eux4fx43yH39DsW0`,a=l(e,"J8Y2oKoFAKiw6OCq"),t=encodeURIComponent(a);return console.log("0614###sign###",t),`https://ramp.alchemypay.org/?network=SUI&appId=eux4fx43yH39DsW0&sign=${t}&address=${s.value.address}`}return""});return{testfun:f,chainName:p,testShow:d,iframeUrl:m,openTestModal:()=>{d.value=!0},closeTestModal:()=>{d.value=!0},index:i}}});function I(n,p,i,u,s,f){const l=w;return b(),C("div",null,[S(l,{type:"primary",onClick:n.testfun},{default:_(()=>[U("test")]),_:1},8,["onClick"])])}const A=h(R,[["render",I]]);export{A as default};
