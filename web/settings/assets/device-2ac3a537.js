import{_ as c,q as o,k as u,l as p,B as n,M as l,x as _,u as m,y as f}from"./vendor-033b944b.js";import"./vendor-sortablejs-01d816ac.js";const v={name:"DeviceVictron",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},b={class:"device-victron"},g={class:"small"};function h(t,e,s,x,w,i){const a=o("openwb-base-heading"),r=o("openwb-base-text-input");return u(),p("div",b,[n(a,null,{default:l(()=>[_(" Einstellungen für Victron "),m("span",g,"(Modul: "+f(t.$options.name)+")",1)]),_:1}),n(r,{title:"IP oder Hostname",subtype:"host",required:"","model-value":s.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=d=>i.updateConfiguration(d,"configuration.ip_address"))},null,8,["model-value"])])}const q=c(v,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/victron/device.vue"]]);export{q as default};