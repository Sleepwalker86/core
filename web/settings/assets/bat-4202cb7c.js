import{_ as r,u as t,k as c,l,D as n,N as p,y as m,x as _,z as b}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const f={name:"DeviceSolisBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},g={class:"device-solis-bat"},v={class:"small"};function h(o,e,s,w,x,a){const i=t("openwb-base-heading"),d=t("openwb-base-number-input");return c(),l("div",g,[n(i,null,{default:p(()=>[m(" Einstellungen für Solis Batteriespeicher "),_("span",v,"(Modul: "+b(o.$options.name)+")",1)]),_:1}),n(d,{title:"Modbus ID",required:"","model-value":s.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=u=>a.updateConfiguration(u,"configuration.modbus_id"))},null,8,["model-value"])])}const D=r(f,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solis/bat.vue"]]);export{D as default};
