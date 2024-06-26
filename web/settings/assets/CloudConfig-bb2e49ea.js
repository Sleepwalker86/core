import{l as S,a6 as q,F as P}from"./vendor-fortawesome-994bfc1e.js";import{C as z}from"./index-22e7bacc.js";import{_ as Z,q as d,k as l,l as f,B as r,M as t,u as p,z as m,A as i,a3 as v,I,x as s,p as k}from"./vendor-d624aab7.js";import"./vendor-bootstrap-f73ddddf.js";import"./vendor-jquery-b0321e08.js";import"./vendor-axios-e5457936.js";import"./vendor-sortablejs-c0fcb1ea.js";S.add(q);const M={name:"OpenwbCloudConfig",mixins:[z],emits:["sendCommand"],components:{FontAwesomeIcon:P},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/system/dataprotection_acknowledged","openWB/system/mqtt/bridge/+","openWB/system/mqtt/valid_partner_ids"],enableNewCloudButton:!0,newCloudData:{email:"",username:"",partner:!1},enableCloudConnectButton:!0,connectCloudData:{username:"",password:"",partner:!1},enableRemoveCloudButton:!0,showCloudRemoveModal:!1}},computed:{cloudBridge:{get(){let o=this.getWildcardTopics("openWB/system/mqtt/bridge/+");for(const[e,y]of Object.entries(o))y.remote.is_openwb_cloud||delete o[e];return o}},cloudBridgeKey:{get(){for(const[o,e]of Object.entries(this.cloudBridge))if(e.remote.is_openwb_cloud)return o}},cloudSettings:{get(){return{username:this.cloudBridge[this.cloudBridgeKey].remote.username,password:this.cloudBridge[this.cloudBridgeKey].remote.password,partner:this.cloudBridge[this.cloudBridgeKey].access?this.cloudBridge[this.cloudBridgeKey].access.partner:!1}}}},methods:{getMqttBridgeIndex(o){return parseInt(o.match(/(?:\/)(\d+)$/)[1])},createCloud(){document.forms.cloudConfigCreateForm.reportValidity()&&(this.$emit("save"),this.$emit("sendCommand",{command:"initCloud",data:this.newCloudData}),this.enableNewCloudButton=!1)},connectCloud(){document.forms.cloudConfigConnectForm.reportValidity()&&(this.$emit("save"),this.$emit("sendCommand",{command:"connectCloud",data:this.connectCloudData}),this.enableCloudConnectButton=!1)},removeCloudModal(o){o.stopPropagation(),this.showCloudRemoveModal=!0},removeCloud(o){this.showCloudRemoveModal=!1,o=="confirm"&&(console.info("request removal of cloud"),this.updateState("openWB/system/mqtt/valid_partner_ids",[]),this.$emit("sendCommand",{command:"removeMqttBridge",data:{bridge:this.getMqttBridgeIndex(this.cloudBridgeKey)}}),this.enableCloudConnectButton=!0)}}},x={class:"cloud-config"},K={key:1},U={key:1,name:"cloudConfigCreateForm"},A=p("a",{href:"mailto:support@openwb.de",subject:"Cloud Zugangsdaten"}," support@openwb.de ",-1),N={class:"row justify-content-center"},R={key:2,name:"cloudConfigConnectForm"},F={class:"row justify-content-center"},j={key:3,name:"cloudConfigured"},E=p("span",null,[s(" Mit diesen Zugangsdaten können Sie sich in der "),p("a",{href:"https://remote.openwb.de/",target:"_blank",rel:"noopener noreferrer"}," openWB Cloud "),s(" anmelden. ")],-1),G=p("hr",null,null,-1),T={class:"row justify-content-center"};function L(o,e,y,O,a,u){const D=d("openwb-base-modal-dialog"),h=d("router-link"),g=d("openwb-base-alert"),c=d("openwb-base-text-input"),w=d("openwb-base-button-group-input"),b=d("font-awesome-icon"),C=d("openwb-base-array-input"),B=d("openwb-base-click-button"),_=d("openwb-base-card"),V=d("openwb-base-heading"),W=d("openwb-base-submit-buttons");return l(),f(I,null,[r(D,{show:a.showCloudRemoveModal,title:"Cloud Zugang löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:e[0]||(e[0]=n=>u.removeCloud(n))},{default:t(()=>[s(" Wollen Sie den vorhandenen Cloud Zugang wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ")]),_:1},8,["show"]),p("div",x,[o.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]!==!0?(l(),m(g,{key:0,subtype:"danger"},{default:t(()=>[s(" Sie müssen der "),r(h,{to:"/System/LegalSettings"},{default:t(()=>[s(" Datenschutzerklärung ")]),_:1}),s(" zustimmen, um die openWB Cloud nutzen zu können. ")]),_:1})):(l(),f("div",K,[r(g,{subtype:"success"},{default:t(()=>[s(" Sie haben der "),r(h,{to:"/System/LegalSettings"},{default:t(()=>[s(" Datenschutzerklärung ")]),_:1}),s(" zugestimmt und können die openWB Cloud nutzen. ")]),_:1}),a.enableRemoveCloudButton?i("",!0):(l(),m(g,{key:0,subtype:"warning"},{default:t(()=>[s(" Der Zugang wurde entfernt. Bitte starten Sie die openWB neu, um die Änderungen anzuwenden! ")]),_:1})),u.cloudBridgeKey?i("",!0):(l(),f("form",U,[r(_,{title:"Neuen Zugang erstellen"},v({default:t(()=>[r(g,{subtype:"warning"},{default:t(()=>[s(" Derzeit können keine neuen Zugänge für die openWB Cloud angelegt werden. Bitte nutzen Sie die in/an der openWB notierten Zugangsdaten im unteren Bereich dieser Seite. Wenn bei einer gekauften openWB keine Zugangsdaten vorhanden sind, schreiben Sie bitte eine Mail unter Angabe der Bestell- und/oder Seriennummer an "),A,s(" . ")]),_:1}),r(c,{title:"Benutzername",required:"",subtype:"user",pattern:"[a-zA-Z]+",modelValue:a.newCloudData.username,"onUpdate:modelValue":e[1]||(e[1]=n=>a.newCloudData.username=n),disabled:""},null,8,["modelValue"]),r(c,{title:"E-Mail",required:"",subtype:"email",modelValue:a.newCloudData.email,"onUpdate:modelValue":e[2]||(e[2]=n=>a.newCloudData.email=n),disabled:""},null,8,["modelValue"]),r(w,{disabled:"",title:"Zugang für Partner",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],modelValue:a.newCloudData.partner,"onUpdate:modelValue":e[3]||(e[3]=n=>a.newCloudData.partner=n)},{help:t(()=>[s(" Wenn diese openWB über einen Partner erworben wurde, kann hier ein Support-Zugang für diesen freigegeben werden. ")]),_:1},8,["modelValue"]),a.newCloudData.partner?(l(),m(C,{key:0,title:"Gültige Partner-IDs",noElementsMessage:"Keine Partner-ID zugeordnet.","model-value":o.$store.state.mqtt["openWB/system/mqtt/valid_partner_ids"],"onUpdate:modelValue":e[4]||(e[4]=n=>o.updateState("openWB/system/mqtt/valid_partner_ids",n))},{"input-prefix":t(()=>[r(b,{"fixed-width":"",icon:["fas","user-gear"]})]),"element-prefix":t(()=>[r(b,{"fixed-width":"",icon:["fas","user-gear"]})]),help:t(()=>[s(" Die Partner-ID erhältst Du von Deinem Installateur. Ist hier keine Partner-ID eingetragen, dann kann auch niemand - trotz aktiviertem Zugang für Partner - über das Partner-Portal auf diese openWB zugreifen! ")]),_:1},8,["model-value"])):i("",!0)]),_:2},[o.$store.state.mqtt["openWB/general/extern"]===!1&&o.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]===!0?{name:"footer",fn:t(()=>[p("div",N,[r(B,{class:"col-4 btn-outline-success",disabled:""},{default:t(()=>[s(" Zugang erstellen ")]),_:1})])]),key:"0"}:void 0]),1024),a.enableNewCloudButton?i("",!0):(l(),m(g,{key:0,subtype:"info",class:"mb-2"},{default:t(()=>[s(" Der neue Zugang wird eingerichtet. Dieser Vorgang kann bis zu einer Minute dauern. Bitte warten. ")]),_:1}))])),u.cloudBridgeKey?i("",!0):(l(),f("form",R,[r(_,{title:"Vorhandenen Zugang einrichten"},v({default:t(()=>[r(c,{title:"Benutzername",required:"",subtype:"user",modelValue:a.connectCloudData.username,"onUpdate:modelValue":e[5]||(e[5]=n=>a.connectCloudData.username=n)},null,8,["modelValue"]),r(c,{title:"Passwort",required:"",subtype:"password",modelValue:a.connectCloudData.password,"onUpdate:modelValue":e[6]||(e[6]=n=>a.connectCloudData.password=n)},null,8,["modelValue"]),r(w,{title:"Zugang für Partner",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],modelValue:a.connectCloudData.partner,"onUpdate:modelValue":e[7]||(e[7]=n=>a.connectCloudData.partner=n)},{help:t(()=>[s(" Wenn diese openWB über einen Partner erworben wurde, kann hier ein Support-Zugang für diesen freigegeben werden. ")]),_:1},8,["modelValue"]),a.connectCloudData.partner?(l(),m(C,{key:0,title:"Gültige Partner-IDs",noElementsMessage:"Keine Partner-ID zugeordnet.","model-value":o.$store.state.mqtt["openWB/system/mqtt/valid_partner_ids"],"onUpdate:modelValue":e[8]||(e[8]=n=>o.updateState("openWB/system/mqtt/valid_partner_ids",n))},{"input-prefix":t(()=>[r(b,{"fixed-width":"",icon:["fas","user-gear"]})]),"element-prefix":t(()=>[r(b,{"fixed-width":"",icon:["fas","user-gear"]})]),help:t(()=>[s(" Die Partner-ID erhältst Du von Deinem Installateur. Ist hier keine Partner-ID eingetragen, dann kann auch niemand - trotz aktiviertem Zugang für Partner - über das Partner-Portal auf diese openWB zugreifen! ")]),_:1},8,["model-value"])):i("",!0)]),_:2},[o.$store.state.mqtt["openWB/general/extern"]===!1&&o.$store.state.mqtt["openWB/system/dataprotection_acknowledged"]===!0?{name:"footer",fn:t(()=>[p("div",F,[r(B,{class:k(["col-4",a.enableCloudConnectButton?"btn-success":"btn-outline-success"]),disabled:!a.enableCloudConnectButton,onButtonClicked:u.connectCloud},{default:t(()=>[s(" Mit Cloud verbinden ")]),_:1},8,["class","disabled","onButtonClicked"])])]),key:"0"}:void 0]),1024)])),u.cloudBridgeKey?(l(),f("form",j,[!a.enableCloudConnectButton||!a.enableNewCloudButton?(l(),m(g,{key:0,subtype:"warning"},{default:t(()=>[s(" Der Zugang wurde eingerichtet. Bitte starten Sie die openWB neu, um die Änderungen anzuwenden! ")]),_:1})):i("",!0),r(_,{title:"Vorhandener Cloud Zugang"},{footer:t(()=>[p("div",T,[r(B,{class:k(["col-4",a.enableRemoveCloudButton?"btn-danger":"btn-outline-danger"]),disabled:!a.enableRemoveCloudButton,onButtonClicked:e[13]||(e[13]=n=>u.removeCloudModal(n))},{default:t(()=>[s(" Zugang löschen ")]),_:1},8,["class","disabled"])])]),default:t(()=>[r(V,null,{default:t(()=>[E]),_:1}),r(c,{title:"Benutzername",required:"",subtype:"user",modelValue:u.cloudSettings.username,"onUpdate:modelValue":e[9]||(e[9]=n=>u.cloudSettings.username=n),disabled:""},null,8,["modelValue"]),r(c,{title:"Passwort",required:"",subtype:"password",modelValue:u.cloudSettings.password,"onUpdate:modelValue":e[10]||(e[10]=n=>u.cloudSettings.password=n),disabled:""},null,8,["modelValue"]),G,r(w,{title:"Zugang für Partner",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":u.cloudSettings.partner,"onUpdate:modelValue":e[11]||(e[11]=n=>o.updateState(u.cloudBridgeKey,n,"access.partner"))},{help:t(()=>[s(" Wenn diese openWB über einen Partner erworben wurde, kann hier ein Support-Zugang für diesen freigegeben werden. ")]),_:1},8,["model-value"]),u.cloudSettings.partner?(l(),m(C,{key:0,title:"Gültige Partner-IDs",noElementsMessage:"Keine Partner-ID zugeordnet.","model-value":o.$store.state.mqtt["openWB/system/mqtt/valid_partner_ids"],"onUpdate:modelValue":e[12]||(e[12]=n=>o.updateState("openWB/system/mqtt/valid_partner_ids",n))},{"input-prefix":t(()=>[r(b,{"fixed-width":"",icon:["fas","user-gear"]})]),"element-prefix":t(()=>[r(b,{"fixed-width":"",icon:["fas","user-gear"]})]),help:t(()=>[s(" Die Partner-ID erhältst Du von Deinem Installateur. Ist hier keine Partner-ID eingetragen, dann kann auch niemand - trotz aktiviertem Zugang für Partner - über das Partner-Portal auf diese openWB zugreifen! ")]),_:1},8,["model-value"])):i("",!0)]),_:1})])):i("",!0),u.cloudBridgeKey?(l(),m(W,{key:4,formName:"cloudConfigured",onSave:e[14]||(e[14]=n=>o.$emit("save")),onReset:e[15]||(e[15]=n=>o.$emit("reset")),onDefaults:e[16]||(e[16]=n=>o.$emit("defaults"))})):i("",!0)]))])],64)}const te=Z(M,[["render",L],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/CloudConfig.vue"]]);export{te as default};
