import{a7 as r}from"./entry.234eaa43.js";import{e as s}from"./pool.7c4b57b4.js";const n=r("swapRouter",{state:()=>({swapRouterContract:{},isInitRouter:!0}),actions:{initSwapRouter(t,o,e){this.swapRouterContract=s(t),this.swapRouterContract.initSwapRouter(o,e),this.isInitRouter=!1,console.log(new Date().getTime(),"初始化完成时间戳"),console.log(this.swapRouterContract,"===>this.swapRouterContract")}}});export{n as u};
