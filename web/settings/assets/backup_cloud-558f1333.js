import{_ as c,p as o,k as r,l as d,A as n,L as l,u as _,q as f,x as m}from"./vendor-94ac8c48.js";import"./vendor-sortablejs-dbc23470.js";const b={name:"BackupCloudNfs",emits:["update:configuration"],props:{configuration:{type:Object,required:!0}},data(){return{}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},g={class:"backup-cloud-nfs"},h={class:"small"};function k(t,e,a,v,x,s){const u=o("openwb-base-heading"),i=o("openwb-base-text-input");return r(),d("div",g,[n(u,null,{default:l(()=>[_(" Einstellungen für NFS-Backup Cloud "),f("span",h,"(Modul: "+m(t.$options.name)+")",1)]),_:1}),n(i,{title:"Pfad zum NFS Share",pattern:"^([^/: ]+):(\\/[^/: ]+)+$","model-value":a.configuration.nfs_share,"onUpdate:modelValue":e[0]||(e[0]=p=>s.updateConfiguration(p,"configuration.nfs_share"))},null,8,["model-value"])])}const C=c(b,[["render",k],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/nfs/backup_cloud.vue"]]);export{C as default};
