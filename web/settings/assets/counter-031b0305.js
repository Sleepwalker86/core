import{_ as c,u as t,k as d,l,D as n,N as s,y as a,x as u,z as p}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const _={name:"DeviceSolarWorldCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,o=void 0){this.$emit("update:configuration",{value:e,object:o})}}},f={class:"device-solar_world-counter"},m={class:"small"};function b(e,o,g,h,v,w){const r=t("openwb-base-heading"),i=t("openwb-base-alert");return d(),l("div",f,[n(r,null,{default:s(()=>[a(" Einstellungen für SolarWorld Zähler "),u("span",m,"(Modul: "+p(e.$options.name)+")",1)]),_:1}),n(i,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const k=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_world/solar_world/counter.vue"]]);export{k as default};