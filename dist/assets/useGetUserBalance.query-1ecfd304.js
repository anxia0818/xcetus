import{Q as t}from"./index-79c5dd77.js";import{u as c}from"./graphql-hooks-5a557af1.js";function l(o){const{loading:a,error:r,data:n}=c({variables:{owner:o},skip:!o,onError:e=>{t.error((e==null?void 0:e.message)??`Failed to fetch balance from address: ${o}`)},fetchPolicy:"no-cache"});return{loading:a,error:r,data:n}}export{l as u};
