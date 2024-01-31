import{s as E,a as i,d as g}from"./pool.6aa8f4bc.js";import{i as v}from"./import-icon.de3e6c66.js";import{e as N,a as T,y as C,m as R,l as m,s as B,o as s,f as o,F as A,x as t,h as a,v as n,u as d,E as y,A as I,t as U,p as G,k as F}from"./entry.2d0457a5.js";import{u as L}from"./sha256.86dbf6c4.js";import{u as S}from"./farms.e78aa44a.js";import{_ as M}from"./icon_rewards_2x.9a963b3f.js";const Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAADUGqULAAAE6klEQVRYCdVZXWxURRQ+W2q7tFtDRZTadJUQxFbAxPBgiNL4E01UajWiElQaoaa+8YgJTQgmBmMML8YIKlKNQaMREXmpwloLiQ9qBLQ/RmtttTUaRENr0QiX75t2hvt/73bv1vQkp3PmnDNnvs6c+bubksJoOZo3gRvAV9kYoozYuAfyh+CT4BkjgtsJHgBbeTLbsC1jFI2yiNwBPgfOF6DbnzEYizETozJE2gE+C3Z3WGh9Yio2+yiIFqB1N7hQQFHt2Qf7mhatQKtBcFQnSdnZF/vMi9jgDDgpEHHjsM/YYDkFg/8DSP3PsO/INGBSz0ROalBBJTGELrDn4BDU2Fq64X6r+bO3rI1/fWk9fPKgteqFLdYlmcpA/7BYlTVXRLXjTuNL3NO4XfgGuP3N5602q8/D6wcOWzE6dcRsaH3I2jT+tVV3580OvatvYjH7bAkqmp6BkNYVe4mRlCWPrlGqcxP/yM+dx2R8+FdVr1pUK42vsGk8AkhZvWu7lFak5a79L0rFwsB0JBZPYB5pgScOp5uj2fr3ceuyZdeqUSidm7aaj+4zI1xx5eVho6NsHMm281OzgrJ+44NRbYhJHbd6RJ+AQssQnTT/huuUYrT7C/njm++U/N/EWenf+75x1D5G4RL0SEoKBsDrat0qva+95/LyVImJ2Ay4+zwuNsXY0IiqVdcvFoyksSy48Xojjw2PGtktTBOkDqOwlaLGDXaR1vqVw8jJ6mVLpLJuodz78etqJAmyoe0R5T7204j82Tfg11QKBMmYxLaCE7EV7Ela6AyVVWVk7YkDUnVNrdEZAdN48I4W+eXI50alhfpNa6VxN0LnN926ub1sZw7U2zV+8r9nxuSDVetk6FCXw8yRnAGQ7FNhzEGIWn3GztXN/Q/5aqVKSozeHgMjme/q9o1ji5mDLP02RVSDSHsRQLJPYkzullQkkATKW1UyQIsI0gAteOo9IJGjGIAkWU19rpCgHpABx2IqlVILkAsxznHrwpTjhj957EDIlwDSuU8+2e57LNbedpPcuudZyVzNp/8kcavram2X8dHftCqsHOE+2hvmEWTzBfnqux53glzzyV4HSDpl72mU5mP7BPdZTxsfRc8cKE+Dn/IxBqrigsQ+K01HOqRsXpXK2J6X35ae3e9Ien61ZLI1Ul59qZSmy2W482hgX1OGzdqBB3Ws5PfkZMjC4aGgL9urX9pm4vOK+NjQp8rGl0JE3+oSwaknHZgswv/GHUkdJVNXo0X5/atvjcwr4uneH1Q9k72Yt8bBKShsGuge2M477c5aviDZ+tTxPhNkacsD5oqIy7fU3LJS2ew+xvmiQEzEpu41Wt0B4XFdsZd4E8m67zvV84EJ0sXV7bNw7G20fPdHu9TCYZ3PF44kQc6ZW65cci1PS3/Hfu3uLt+AYoNbmYUi8PsS9z8+yJij8IvNfPit//GwyVWdsyz5YAyJ5XjcucGGPpfzfW1qELjPqqc1Fw6f2nyD8emt7QHlDjc4e33WfIAg6FnxSUeP7qz4SGYHO4hKVC4lZWdfsb/kwddBTINucFJgguKwj8BPJg5EIRUuMK7AwK0LtiAAUXpuQYzNPhIj7rM8FAI//cAWBUzbGYOxGLNoxG9BO8EDYN1x3JJt2FZ9T0IZm1KxPf0dmfxNYL67w34Q452XP4idAE+LLgDdRuc2n6FW3gAAAABJRU5ErkJggg==",Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAADUGqULAAAFAUlEQVRYCdVZa2xURRQ+W2u3QLtAFvrwUShompLaGkM0gfAHDMXUlMcPIAI+KiWQGEB+NGowISFBMEHUqBGKREI1kR88Gkh4WRIaCBpjaCGFKo+lainVYmghhSCM55vdGe7ex967u7clPcnZe+bMeXw7O3PuzGyA0qPn2L2aeRLzEwZmkToN3MZyI/NZ5kEjgNvCfJlZJMnwgS9iDBgVceSdzPeZkwVotkcMxEJM3yiLI21kvsNsTphuuz8WGznSorHs3cycLiA3f+RArpSonL0izG5J/OpHLuRMiuDQx+wXCK9xkNMzWPwEkUcAUn0Z5HadBpjUgzEnFSinJzAkXGCb2MDJWZRVvSFe23pCrG66KWq+Pyumr9ossobnONonipUzptDND5VGU0BL0ZrWzu1sg06Lr67bRZNmLdZtJdy8doW+q51Kt/65plSuz4o5tTTj3U9pb91cuvLTESd7lMMS5g4YZOAjRuv5aQuSR1KD/O9uP0V+PkJ93X9It5GFxTTrg3oVw/UJkJXvbaXM4HCa+/FeygkXOPkACzBJUkDxSrMOV8yovPptKQHkrpoXaffKSto+v4T+aj0p9ROmVNGIcH7M2vmhQBLhhxR0bPNKutXT5ewQxSRftwpoDVsr2eKY92yF1P3Z0kx/Xzon5Xt3+uncwW+1bd4zURutMAlmkIc21FJr4zcmK0sTmIBNg5ttMTEoers6ZCs8vpQezx6me/JLXtByb2wqaIVBSBGkiiCxZXILBbZYae2eEZ7wYyaUUW7e0zT/86NyJAHy+XnLpXlv11W6Eblg50ppgkRMYCvHZFnLrCctyxYKjsiltxpaKVQ43tKHufbDOy/T1V+aLH0Vs5dS5fvbWB+dkx5/bkscVnyIOVBq12PU3b3dRw21U+jyqYNGNWEkBwEkckqMx1lwK766n1e3KH5ppggXl4pARobWG2PwSIq60w+YhXxy1bC1M/q4yMe5n1Dk0w2k/QcAJGIDo3+7pAECCaB9mKO+kI8LxxYPgHba9iShNIM8/NEyL8U8iQzUmTZQM0iUoJb92y0gAoEA8QIkXoieXremAJ0o+CmPqBmk00iOmzydXlm7g0IF43R+lDp8KY+7Ljmi57V3EoIdSLuRBMgFXxyLA4k02Mgsqj9JvJ/1krXtMbb6l3mFF2tl4xUk11la+GUTBXNGsaugM3u+ppZ922jYyDCF8osoO3c0ZWZlJ9qTqpSrlYAbDF0LE8kMMq6Yo+1kj5dCtOgLMbPuK23HGxuxorFD9uGk4OQf0wOb3j3tR8ONvI6kihPiTYyi6+2/KpGwReyJRGdcqMD1skRiU3V0B0d5oCPZCMmCRIjuiy06UlnVm3qLOHZiGT1VMU32df/+0EYbPxSACdgIqx6EW7YG5tfRMBMfxGjGms9YHd0FYXXbLRyz3+2e63Ijg4XzZPlUWrq7XY4kQGYGo/tal80zMMkbQGRWVMTCb8xBpTA+Uf9wxvnxk1WeQCpffMnF9adst4hthxrowLolytT8jDvcmTs3scJxcns44tr68n5WHq2xcHDUxpEbR+9EubhvoxmcsT1kLiAAekhc6ajRHRKXZEawEW64zSW/+pHL800e28YRpkEzs19gnOIgh+sNXhwymwYWGFYgyoVTolT1vl2NG3Gjzu5kvu8DYMRALMQcMHokf98Y30ypfDNM/mpmnLsT/SGGHQj+EGtlTon+B3ie92TJ5YyPAAAAAElFTkSuQmCC",D=""+globalThis.__publicAssetsURL("sui-image/icon_fee@2x.png");const V=T({props:{rewarderInfo:{type:Array,default:()=>[]},lItem:{type:Object,default:()=>({})}},setup(e){const{t:h}=C(),w=R(),k=L(),p=m(()=>k),c=m(()=>p.value.chainName),u=m(()=>p.value.addressLpTokens),r=S(),f=m(()=>r),b=m(()=>f.value.farmsPoolObj);return console.log(e.lItem,e.rewarderInfo,"===>rewarderInfo"),{route:w,t:h,sFixD:E,store:p,chainName:c,addressLpTokens:u,farmsPoolObj:b}}}),l=e=>(G("data-v-350de907"),e=e(),F(),e),P={key:0,class:"title"},X={key:1,class:"value"},z={key:2,class:"apr-hover-bottom"},q={class:"apr-hover-bottom-item"},j={class:"left"},J={key:0,src:Y,alt:""},K={key:1,src:Q,alt:""},W=l(()=>a("span",null,"Fee Earnings",-1)),Z={class:"right"},H={class:"left"},O={alt:""},_={class:"right"},$={key:3,class:"apr-hover-top"},x={key:4,class:"apr-hover-top"},ee={key:0,class:"apr-desc"},re={key:1,class:"apr-desc"},ae={key:2,class:"apr-desc"},se={key:3,class:"apr-desc apr-desc-style"},oe={key:4,class:"fees"},de=l(()=>a("div",{class:"leabl"},[a("img",{src:D,alt:""}),a("span",null,"Fees")],-1)),ie={class:"text"},ne={key:5,class:"mining"},te={key:0,class:"mining-conent"},le=l(()=>a("div",{class:"leabl"},[a("img",{src:M,alt:""}),a("span",null,"Mining")],-1)),me=l(()=>a("div",{class:"text"},null,-1)),Ae=[le,me],pe={class:"reward-list"},ue={class:"left"},ge={class:"right"},Ie={key:6,class:"stable-farming"},he=l(()=>a("div",{class:"left"},[a("div",{class:"title"},"Farming"),a("div",{class:"desc"},"Stake position to earn")],-1)),we={class:"right"},ke={key:7,class:"total-apr"},ce=l(()=>a("div",{class:"left"},"Total APR",-1)),ve={key:0,class:"right"},ye={key:1,class:"right"};function fe(e,h,w,k,p,c){const u=B("image");return s(),o("div",{class:I(["apr-hover-con",e.chainName=="Aptos"?"aptos-apr-hover-con":"sui-apr-hover-con"])},[e.chainName=="Aptos"?(s(),o(A,{key:0},[e.lItem.is_display_rewarder&&e.rewarderInfo&&e.rewarderInfo.length>0?(s(),o("div",P," Total APR : ")):t("",!0),e.lItem.is_display_rewarder&&e.rewarderInfo&&e.rewarderInfo.length>0?(s(),o("div",X,[a("span",null,n(e.lItem.is_display_rewarder?e.lItem.aprTotal>0&&e.lItem.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:d(i))(e.lItem.aprTotal,2):e.lItem.apr>0&&e.lItem.apr<.01?"<0.01":("addCommom"in e?e.addCommom:d(i))(e.lItem.apr,2))+"% APR",1)])):t("",!0),e.lItem.is_display_rewarder&&e.rewarderInfo&&e.rewarderInfo.length>0?(s(),o("div",z,[a("div",q,[a("div",j,[e.chainName=="Aptos"?(s(),o("img",J)):(s(),o("img",K)),W]),a("div",Z,[a("span",null,n(Number(e.lItem.apr)!==0&&Number(e.lItem.apr)<.01?"<0.01":("addCommom"in e?e.addCommom:d(i))(e.lItem.apr,2,0))+"%",1)])]),(s(!0),o(A,null,y(e.rewarderInfo,r=>(s(),o("div",{key:r},[r.rewarder_display?(s(),o("div",{key:0,class:I(["apr-hover-bottom-item",r.rewarders=="0%"||r.rewarderApr=="0%"?"reward-none":""])},[a("div",H,[U(a("img",O,null,512),[[u,r.logoUrl||(e.store.theme==="default"?("importIcon"in e?e.importIcon:d(v))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:d(v))("/image/coins/sui-unknown.png"))]]),a("span",null,n(r.symbol)+" Rewards",1)]),a("div",_,[a("span",null,n(r.rewarders||r.rewarderApr?(r.rewarders||r.rewarderApr)>0&&(r.rewarders||r.rewarderApr)<.01?"<0.01":("addCommom"in e?e.addCommom:d(i))(r.rewarders||r.rewarderApr,2):"")+"%",1)])],2)):t("",!0)]))),128))])):t("",!0),e.lItem.is_display_rewarder&&e.rewarderInfo&&e.rewarderInfo.length>0?(s(),o("div",$,n(e.chainName=="Aptos"?e.$t("tips.aprTips1"):e.$t("tips.aprTips")),1)):(s(),o("div",x,n(e.chainName=="Aptos"?e.$t("tips.aprTipsTest1"):e.$t("tips.aprTipsTest")),1))],64)):(s(),o(A,{key:1},[e.lItem.is_display_rewarder&&e.rewarderInfo&&e.rewarderInfo.length>0&&e.lItem.isStableFarming?(s(),o("div",ee," Estimated according to trading activity in the past 24 hours plus mining and farming rewards ")):e.lItem.is_display_rewarder&&e.rewarderInfo&&e.rewarderInfo.length>0&&!e.lItem.isStableFarming?(s(),o("div",re," Estimated according to trading activity in the past 24 hours plus mining rewards ")):e.lItem.isStableFarming?(s(),o("div",ae," Estimated according to trading activity in the past 24 hours plus farming rewards ")):(s(),o("div",se," Estimated according to trading activity in the past 24 hours ")),e.lItem.apr?(s(),o("div",oe,[de,a("div",ie,n(Number(e.lItem.apr)!==0&&Number(e.lItem.apr)<.01?"<0.01":("addCommom"in e?e.addCommom:d(i))(e.lItem.apr,2,0))+"% ",1)])):t("",!0),e.rewarderInfo&&e.rewarderInfo.length>0?(s(),o("div",ne,[e.lItem.is_display_rewarder?(s(),o("div",te,Ae)):t("",!0),a("div",pe,[(s(!0),o(A,null,y(e.rewarderInfo,r=>(s(),o(A,{key:r},[r.rewarder_display?(s(),o("div",{key:0,class:I(["apr-hover-bottom-item",r.rewarders=="0%"||r.rewarderApr=="0%"?"reward-none":""])},[a("div",ue,[a("span",null,n(r.symbol)+" Rewards",1)]),a("div",ge,[a("span",null,n(r.rewarders||r.rewarderApr?(r.rewarders||r.rewarderApr)>0&&(r.rewarders||r.rewarderApr)<.01?"<0.01":("addCommom"in e?e.addCommom:d(i))(r.rewarders||r.rewarderApr,2):"")+"%",1)])],2)):t("",!0)],64))),128))])])):t("",!0),e.lItem.isStableFarming?(s(),o("div",Ie,[he,a("div",we," +"+n(Number(e.lItem.stableFarmingApr)>1e4?`${("addCommom"in e?e.addCommom:d(i))(("decimalUi"in e?e.decimalUi:d(g))(e.lItem.stableFarmingApr,0))}%`:e.lItem.stableFarmingApr>0&&e.lItem.stableFarmingApr<.01?"<0.01%":`${("addCommom"in e?e.addCommom:d(i))(e.lItem.stableFarmingApr,2)}%`),1)])):t("",!0),e.lItem.aprTotal||e.lItem.isStableFarming?(s(),o("div",ke,[ce,e.lItem.isStableFarming?(s(),o("div",ve,n(e.lItem.is_display_rewarder?e.lItem.aprTotal>0&&e.lItem.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:d(i))(("decimalUi"in e?e.decimalUi:d(g))(e.lItem.aprTotal+e.lItem.stableFarmingApr,2)):e.lItem.apr>0&&e.lItem.apr<.01?"<0.01":("addCommom"in e?e.addCommom:d(i))(("decimalUi"in e?e.decimalUi:d(g))(Number(e.lItem.apr)+Number(e.lItem.stableFarmingApr),2)))+"% ",1)):(s(),o("div",ye,n(e.lItem.is_display_rewarder?e.lItem.aprTotal>0&&e.lItem.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:d(i))(e.lItem.aprTotal,2):e.lItem.apr>0&&e.lItem.apr<.01?"<0.01":("addCommom"in e?e.addCommom:d(i))(e.lItem.apr,2))+"% ",1))])):t("",!0)],64))],2)}const Be=N(V,[["render",fe],["__scopeId","data-v-350de907"]]);export{Be as _};
