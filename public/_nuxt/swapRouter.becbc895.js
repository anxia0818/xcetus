import{a6 as r}from"./entry.59a2cdcc.js";import{e as s}from"./pool.acb16d99.js";const n=r("swapRouter",{state:()=>({swapRouterContract:{},isInitRouter:!0}),actions:{initSwapRouter(t,o,e){this.swapRouterContract=s(t),this.swapRouterContract.initSwapRouter(o,e),this.isInitRouter=!1,console.log(new Date().getTime(),"初始化完成时间戳"),console.log(this.swapRouterContract,"===>this.swapRouterContract")}}});export{n as u};
