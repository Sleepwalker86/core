import{_ as b,a3 as L,p as r,k as a,y as u,L as x,q as n,n as g,A as _,z as p,u as h,x as w,l as f,m as C}from"./vendor-94ac8c48.js";import{l as v,a5 as H,J as O,K as S,L as N,M as B,F as y,f as E,a as A}from"./vendor-fortawesome-ad83e535.js";v.add(H,O,S,N,B);const j={name:"OpenwbNestedList",props:{list:{type:Object},labels:{type:Object}},components:{draggable:L,FontAwesomeIcon:y},methods:{classes(e){var t="";switch(e.type){case"bat":t+="battery";break;case"cp":t+="charge-point";break;default:t+=e.type;break}return t},getElementLabel(e){return this.labels&&e in this.labels?this.labels[e]:e},getElementIcon(e){switch(e.type){case"bat":return["fas","car-battery"];case"counter":return["fas","gauge-high"];case"cp":return["fas","charging-station"];case"inverter":return["fas","solar-panel"];default:return}}}};function q(e,t,o,k,c,s){const d=r("font-awesome-icon"),m=r("openwb-nested-list",!0),i=r("draggable");return a(),u(i,{class:"dragArea w-100 mb-0",tag:"ul",list:o.list,group:{name:"g1"},"item-key":"id",handle:".handle"},{item:x(({element:l})=>[n("li",null,[n("div",{class:g(["element-titel",s.classes(l)])},[n("span",null,[_(d,{class:"handle","fixed-width":"",icon:["fas","arrows-alt"]}),s.getElementIcon(l)?(a(),u(d,{key:0,"fixed-width":"",icon:s.getElementIcon(l)},null,8,["icon"])):p("v-if",!0),h(" "+w(s.getElementLabel(l.id)),1)]),p(` <span class="element-actions">
						<font-awesome-icon
							fixed-width
							:icon="['fas', 'edit']"
							@click="elementEdit(element.id)"
						/>
					</span> `)],2),_(m,{modelValue:l.children,"onUpdate:modelValue":V=>l.children=V,labels:o.labels},null,8,["modelValue","onUpdate:modelValue","labels"])])]),_:1},8,["list"])}const I=b(j,[["render",q],["__scopeId","data-v-82c9421a"],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/OpenwbNestedList.vue"]]);v.add(E,A);const U={name:"OpenwbSortableList",props:{id:String,title:String,modelValue:Object,labels:{type:Object,default:void 0}},emits:["update:modelValue"],components:{FontAwesomeIcon:y,OpenwbNestedList:I},data(){return{showHelp:!1}},computed:{value:{get(){return this.modelValue},set(e){console.debug("update in sortableList",e),this.$emit("update:modelValue",e)}}},methods:{toggleHelp(){this.showHelp=!this.showHelp&&this.$slots.help!==void 0}}},W={class:"form-row mb-1"},z={class:"col-md-8"},D={class:"form-row"},F={key:1},Q={key:0,class:"form-row alert alert-info my-1 small"};function G(e,t,o,k,c,s){const d=r("font-awesome-icon"),m=r("openwb-nested-list");return a(),f("div",W,[n("label",{onClick:t[0]||(t[0]=(...i)=>s.toggleHelp&&s.toggleHelp(...i)),class:"col-md-4 col-form-label"},[h(w(o.title)+" ",1),e.$slots.help?(a(),u(d,{key:0,icon:c.showHelp?["fas","question-circle"]:["far","question-circle"],class:g(c.showHelp?"text-info":"")},null,8,["icon","class"])):p("v-if",!0)]),n("div",z,[n("div",D,[s.value!==void 0?(a(),u(m,{key:0,modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=i=>s.value=i),labels:o.labels},null,8,["modelValue","labels"])):(a(),f("div",F,"Warte auf Daten..."))]),c.showHelp?(a(),f("span",Q,[C(e.$slots,"help")])):p("v-if",!0)])])}const M=b(U,[["render",G],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/OpenwbSortableList.vue"]]);export{M as S};
