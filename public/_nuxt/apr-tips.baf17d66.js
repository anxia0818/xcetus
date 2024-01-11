import{s as i,a as l}from"./pool.a37afa52.js";import{i as b}from"./import-icon.de3e6c66.js";import{e as E,a as L,y as N,m as R,l as t,s as B,o as a,f as o,F as m,x as A,h as e,v as n,u as d,E as T,A as h,t as G,p as D,k as P}from"./entry.1a38dbaf.js";import{u as F}from"./sha256.a76639dd.js";import{u as U}from"./farms.0ce1d361.js";import{_ as C}from"./icon_rewards_2x.6c8faba7.js";const M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAADUGqULAAAE6klEQVRYCdVZXWxURRQ+W2q7tFtDRZTadJUQxFbAxPBgiNL4E01UajWiElQaoaa+8YgJTQgmBmMML8YIKlKNQaMREXmpwloLiQ9qBLQ/RmtttTUaRENr0QiX75t2hvt/73bv1vQkp3PmnDNnvs6c+bubksJoOZo3gRvAV9kYoozYuAfyh+CT4BkjgtsJHgBbeTLbsC1jFI2yiNwBPgfOF6DbnzEYizETozJE2gE+C3Z3WGh9Yio2+yiIFqB1N7hQQFHt2Qf7mhatQKtBcFQnSdnZF/vMi9jgDDgpEHHjsM/YYDkFg/8DSP3PsO/INGBSz0ROalBBJTGELrDn4BDU2Fq64X6r+bO3rI1/fWk9fPKgteqFLdYlmcpA/7BYlTVXRLXjTuNL3NO4XfgGuP3N5602q8/D6wcOWzE6dcRsaH3I2jT+tVV3580OvatvYjH7bAkqmp6BkNYVe4mRlCWPrlGqcxP/yM+dx2R8+FdVr1pUK42vsGk8AkhZvWu7lFak5a79L0rFwsB0JBZPYB5pgScOp5uj2fr3ceuyZdeqUSidm7aaj+4zI1xx5eVho6NsHMm281OzgrJ+44NRbYhJHbd6RJ+AQssQnTT/huuUYrT7C/njm++U/N/EWenf+75x1D5G4RL0SEoKBsDrat0qva+95/LyVImJ2Ay4+zwuNsXY0IiqVdcvFoyksSy48Xojjw2PGtktTBOkDqOwlaLGDXaR1vqVw8jJ6mVLpLJuodz78etqJAmyoe0R5T7204j82Tfg11QKBMmYxLaCE7EV7Ela6AyVVWVk7YkDUnVNrdEZAdN48I4W+eXI50alhfpNa6VxN0LnN926ub1sZw7U2zV+8r9nxuSDVetk6FCXw8yRnAGQ7FNhzEGIWn3GztXN/Q/5aqVKSozeHgMjme/q9o1ji5mDLP02RVSDSHsRQLJPYkzullQkkATKW1UyQIsI0gAteOo9IJGjGIAkWU19rpCgHpABx2IqlVILkAsxznHrwpTjhj957EDIlwDSuU8+2e57LNbedpPcuudZyVzNp/8kcavram2X8dHftCqsHOE+2hvmEWTzBfnqux53glzzyV4HSDpl72mU5mP7BPdZTxsfRc8cKE+Dn/IxBqrigsQ+K01HOqRsXpXK2J6X35ae3e9Ien61ZLI1Ul59qZSmy2W482hgX1OGzdqBB3Ws5PfkZMjC4aGgL9urX9pm4vOK+NjQp8rGl0JE3+oSwaknHZgswv/GHUkdJVNXo0X5/atvjcwr4uneH1Q9k72Yt8bBKShsGuge2M477c5aviDZ+tTxPhNkacsD5oqIy7fU3LJS2ew+xvmiQEzEpu41Wt0B4XFdsZd4E8m67zvV84EJ0sXV7bNw7G20fPdHu9TCYZ3PF44kQc6ZW65cci1PS3/Hfu3uLt+AYoNbmYUi8PsS9z8+yJij8IvNfPit//GwyVWdsyz5YAyJ5XjcucGGPpfzfW1qELjPqqc1Fw6f2nyD8emt7QHlDjc4e33WfIAg6FnxSUeP7qz4SGYHO4hKVC4lZWdfsb/kwddBTINucFJgguKwj8BPJg5EIRUuMK7AwK0LtiAAUXpuQYzNPhIj7rM8FAI//cAWBUzbGYOxGLNoxG9BO8EDYN1x3JJt2FZ9T0IZm1KxPf0dmfxNYL67w34Q452XP4idAE+LLgDdRuc2n6FW3gAAAABJRU5ErkJggg==",Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAADUGqULAAAFAUlEQVRYCdVZa2xURRQ+W2u3QLtAFvrwUShompLaGkM0gfAHDMXUlMcPIAI+KiWQGEB+NGowISFBMEHUqBGKREI1kR88Gkh4WRIaCBpjaCGFKo+lainVYmghhSCM55vdGe7ex967u7clPcnZe+bMeXw7O3PuzGyA0qPn2L2aeRLzEwZmkToN3MZyI/NZ5kEjgNvCfJlZJMnwgS9iDBgVceSdzPeZkwVotkcMxEJM3yiLI21kvsNsTphuuz8WGznSorHs3cycLiA3f+RArpSonL0izG5J/OpHLuRMiuDQx+wXCK9xkNMzWPwEkUcAUn0Z5HadBpjUgzEnFSinJzAkXGCb2MDJWZRVvSFe23pCrG66KWq+Pyumr9ossobnONonipUzptDND5VGU0BL0ZrWzu1sg06Lr67bRZNmLdZtJdy8doW+q51Kt/65plSuz4o5tTTj3U9pb91cuvLTESd7lMMS5g4YZOAjRuv5aQuSR1KD/O9uP0V+PkJ93X9It5GFxTTrg3oVw/UJkJXvbaXM4HCa+/FeygkXOPkACzBJUkDxSrMOV8yovPptKQHkrpoXaffKSto+v4T+aj0p9ROmVNGIcH7M2vmhQBLhhxR0bPNKutXT5ewQxSRftwpoDVsr2eKY92yF1P3Z0kx/Xzon5Xt3+uncwW+1bd4zURutMAlmkIc21FJr4zcmK0sTmIBNg5ttMTEoers6ZCs8vpQezx6me/JLXtByb2wqaIVBSBGkiiCxZXILBbZYae2eEZ7wYyaUUW7e0zT/86NyJAHy+XnLpXlv11W6Eblg50ppgkRMYCvHZFnLrCctyxYKjsiltxpaKVQ43tKHufbDOy/T1V+aLH0Vs5dS5fvbWB+dkx5/bkscVnyIOVBq12PU3b3dRw21U+jyqYNGNWEkBwEkckqMx1lwK766n1e3KH5ppggXl4pARobWG2PwSIq60w+YhXxy1bC1M/q4yMe5n1Dk0w2k/QcAJGIDo3+7pAECCaB9mKO+kI8LxxYPgHba9iShNIM8/NEyL8U8iQzUmTZQM0iUoJb92y0gAoEA8QIkXoieXremAJ0o+CmPqBmk00iOmzydXlm7g0IF43R+lDp8KY+7Ljmi57V3EoIdSLuRBMgFXxyLA4k02Mgsqj9JvJ/1krXtMbb6l3mFF2tl4xUk11la+GUTBXNGsaugM3u+ppZ922jYyDCF8osoO3c0ZWZlJ9qTqpSrlYAbDF0LE8kMMq6Yo+1kj5dCtOgLMbPuK23HGxuxorFD9uGk4OQf0wOb3j3tR8ONvI6kihPiTYyi6+2/KpGwReyJRGdcqMD1skRiU3V0B0d5oCPZCMmCRIjuiy06UlnVm3qLOHZiGT1VMU32df/+0EYbPxSACdgIqx6EW7YG5tfRMBMfxGjGms9YHd0FYXXbLRyz3+2e63Ijg4XzZPlUWrq7XY4kQGYGo/tal80zMMkbQGRWVMTCb8xBpTA+Uf9wxvnxk1WeQCpffMnF9adst4hthxrowLolytT8jDvcmTs3scJxcns44tr68n5WHq2xcHDUxpEbR+9EubhvoxmcsT1kLiAAekhc6ajRHRKXZEawEW64zSW/+pHL800e28YRpkEzs19gnOIgh+sNXhwymwYWGFYgyoVTolT1vl2NG3Gjzu5kvu8DYMRALMQcMHokf98Y30ypfDNM/mpmnLsT/SGGHQj+EGtlTon+B3ie92TJ5YyPAAAAAElFTkSuQmCC",j=""+globalThis.__publicAssetsURL("sui-image/icon_fee@2x.png");const Q=L({props:{rewarderInfo:{type:Array,default:()=>[]},lItem:{type:Object,default:()=>({})}},setup(s){const{t:f}=N(),v=R(),y=F(),u=t(()=>y),c=t(()=>u.value.chainName),w=t(()=>u.value.addressLpTokens),I=U(),g=t(()=>I),k=t(()=>g.value.farmsPoolObj);return console.log(s.lItem,s.rewarderInfo,"===>rewarderInfo"),{route:v,t:f,sFixD:i,store:u,chainName:c,addressLpTokens:w,farmsPoolObj:k}}}),p=s=>(D("data-v-80ef9605"),s=s(),P(),s),S={key:0,class:"title"},V={key:1,class:"value"},X={key:2,class:"apr-hover-bottom"},z={class:"apr-hover-bottom-item"},q={class:"left"},O={key:0,src:M,alt:""},J={key:1,src:Y,alt:""},K=p(()=>e("span",null,"Fee Earnings",-1)),W={class:"right"},Z={class:"left"},H={alt:""},_={class:"right"},$={key:3,class:"apr-hover-top"},x={key:4,class:"apr-hover-top"},ss={key:0,class:"apr-desc"},es={key:1,class:"apr-desc"},rs={class:"fees"},as=p(()=>e("div",{class:"leabl"},[e("img",{src:j,alt:""}),e("span",null,"Fees")],-1)),os={class:"text"},ds={key:2,class:"mining"},ns=p(()=>e("div",{class:"mining-conent"},[e("div",{class:"leabl"},[e("img",{src:C,alt:""}),e("span",null,"Mining")]),e("div",{class:"text"})],-1)),As={class:"reward-list"},ls={class:"left"},is={class:"right"},ts={key:3,class:"stable-farming"},ms=p(()=>e("div",{class:"left"},[e("div",{class:"title"},"Farming"),e("div",{class:"desc"},"Stake position to earn")],-1)),ps={class:"right"},us={class:"total-apr"},Is=p(()=>e("div",{class:"left"},"Total APR",-1)),gs={key:0,class:"right"},ks={key:1,class:"right"};function ws(s,f,v,y,u,c){var I,g,k;const w=B("image");return a(),o("div",{class:h(["apr-hover-con",s.chainName=="Aptos"?"aptos-apr-hover-con":"sui-apr-hover-con"])},[s.chainName=="Aptos"?(a(),o(m,{key:0},[s.lItem.is_display_rewarder&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),o("div",S," Total APR : ")):A("",!0),s.lItem.is_display_rewarder&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),o("div",V,[e("span",null,n(s.lItem.is_display_rewarder?s.lItem.aprTotal>0&&s.lItem.aprTotal<.01?"<0.01":("addCommom"in s?s.addCommom:d(l))(s.lItem.aprTotal,2):s.lItem.apr>0&&s.lItem.apr<.01?"<0.01":("addCommom"in s?s.addCommom:d(l))(s.lItem.apr,2))+"% APR",1)])):A("",!0),s.lItem.is_display_rewarder&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),o("div",X,[e("div",z,[e("div",q,[s.chainName=="Aptos"?(a(),o("img",O)):(a(),o("img",J)),K]),e("div",W,[e("span",null,n(Number(s.lItem.apr)!==0&&Number(s.lItem.apr)<.01?"<0.01":("sFixD"in s?s.sFixD:d(i))(s.lItem.apr,2,0))+"%",1)])]),(a(!0),o(m,null,T(s.rewarderInfo,r=>(a(),o("div",{key:r},[r.rewarder_display?(a(),o("div",{key:0,class:h(["apr-hover-bottom-item",r.rewarders=="0%"||r.rewarderApr=="0%"?"reward-none":""])},[e("div",Z,[G(e("img",H,null,512),[[w,r.logoUrl||(s.store.theme==="default"?("importIcon"in s?s.importIcon:d(b))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:d(b))("/image/coins/sui-unknown.png"))]]),e("span",null,n(r.symbol)+" Rewards",1)]),e("div",_,[e("span",null,n(r.rewarders||r.rewarderApr?(r.rewarders||r.rewarderApr)>0&&(r.rewarders||r.rewarderApr)<.01?"<0.01":("sFixD"in s?s.sFixD:d(i))(r.rewarders||r.rewarderApr,2):"")+"%",1)])],2)):A("",!0)]))),128))])):A("",!0),s.lItem.is_display_rewarder&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),o("div",$,n(s.chainName=="Aptos"?s.$t("tips.aprTips1"):s.$t("tips.aprTips")),1)):(a(),o("div",x,n(s.chainName=="Aptos"?s.$t("tips.aprTipsTest1"):s.$t("tips.aprTipsTest")),1))],64)):(a(),o(m,{key:1},[s.lItem.is_display_rewarder&&s.rewarderInfo&&s.rewarderInfo.length>0&&s.farmsPoolObj&&s.farmsPoolObj[s.lItem.address]&&s.farmsPoolObj[s.lItem.address].status!=="Ended"?(a(),o("div",ss," Estimated according to trading activity in the past 24 hours plus mining and farming rewards ")):(a(),o("div",es," Estimated according to trading activity in the past 24 hours plus mining rewards ")),e("div",rs,[as,e("div",os,n(Number(s.lItem.apr)!==0&&Number(s.lItem.apr)<.01?"<0.01":("sFixD"in s?s.sFixD:d(i))(s.lItem.apr,2,0))+"% ",1)]),s.rewarderInfo&&s.rewarderInfo.length>0?(a(),o("div",ds,[ns,e("div",As,[(a(!0),o(m,null,T(s.rewarderInfo,r=>(a(),o(m,{key:r},[r.rewarder_display?(a(),o("div",{key:0,class:h(["apr-hover-bottom-item",r.rewarders=="0%"||r.rewarderApr=="0%"?"reward-none":""])},[e("div",ls,[e("span",null,n(r.symbol)+" Rewards",1)]),e("div",is,[e("span",null,n(r.rewarders||r.rewarderApr?(r.rewarders||r.rewarderApr)>0&&(r.rewarders||r.rewarderApr)<.01?"<0.01":("sFixD"in s?s.sFixD:d(i))(r.rewarders||r.rewarderApr,2):"")+"%",1)])],2)):A("",!0)],64))),128))])])):A("",!0),s.farmsPoolObj&&s.farmsPoolObj[s.lItem.address]&&s.farmsPoolObj[s.lItem.address].status!=="Ended"?(a(),o("div",ts,[ms,e("div",ps," +"+n(((I=s.addressLpTokens[s.lItem.address])==null?void 0:I.stable_farming.apr)*100>0&&((g=s.addressLpTokens[s.lItem.address])==null?void 0:g.stable_farming.apr)*100<.01?"<0.01%":`${("sFixD"in s?s.sFixD:d(i))(((k=s.addressLpTokens[s.lItem.address])==null?void 0:k.stable_farming.apr)*100,2)}%`),1)])):A("",!0),e("div",us,[Is,s.farmsPoolObj&&s.farmsPoolObj[s.lItem.address]&&s.farmsPoolObj[s.lItem.address].status!=="Ended"?(a(),o("div",gs,n(s.lItem.is_display_rewarder?s.lItem.aprTotal>0&&s.lItem.aprTotal<.01?"<0.01":("addCommom"in s?s.addCommom:d(l))(s.lItem.aprTotal+s.addressLpTokens[s.lItem.address].stable_farming.apr*100,2):s.lItem.apr>0&&s.lItem.apr<.01?"<0.01":("addCommom"in s?s.addCommom:d(l))(s.lItem.apr+s.addressLpTokens[s.lItem.address].stable_farming.apr*100,2))+"% ",1)):(a(),o("div",ks,n(s.lItem.is_display_rewarder?s.lItem.aprTotal>0&&s.lItem.aprTotal<.01?"<0.01":("addCommom"in s?s.addCommom:d(l))(s.lItem.aprTotal,2):s.lItem.apr>0&&s.lItem.apr<.01?"<0.01":("addCommom"in s?s.addCommom:d(l))(s.lItem.apr,2))+"% ",1))])],64))],2)}const Ts=E(Q,[["render",ws],["__scopeId","data-v-80ef9605"]]);export{Ts as _};
