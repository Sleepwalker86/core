import{_ as p,u as n,k as r,l as c,D as o,N as l,y as _,x as f,z as m}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const v={name:"DeviceOpenDTU",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},b={class:"device-opendtu"},g={class:"small"};function h(t,e,a,x,w,s){const i=n("openwb-base-heading"),d=n("openwb-base-text-input");return r(),c("div",b,[o(i,null,{default:l(()=>[_(" Einstellungen für OpenDTU "),f("span",g,"(Modul: "+m(t.$options.name)+")",1)]),_:1}),o(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":a.configuration.url,"onUpdate:modelValue":e[0]||(e[0]=u=>s.updateConfiguration(u,"configuration.url"))},null,8,["model-value"])])}const B=p(v,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/opendtu/opendtu/device.vue"]]);export{B as default};