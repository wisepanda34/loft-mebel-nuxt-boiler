import{_ as y}from"./Menu.6cf04981.js";import{b as V,e as h,o as l,a as _,f as e,l as m,j as i,h as f,y as D,m as v,s as I,z as L,k as g,F as B,i as F,t as T,p as C,q as w}from"./swiper-vue.520d28f9.js";import{M as P,u as E,r as b,m as x,a as S,n as A}from"./MyInput.74164eff.js";import{u as O}from"./linksFooter.a901e7ff.js";import{d as U}from"./entry.6922467d.js";import{M as z}from"./MyButton.1f5d35d1.js";import{_ as p}from"./_plugin-vue_export-helper.c27b6911.js";import"./menuList.eca2452d.js";const q=U("clientStore",{state(){return{clientData:[]}},actions:{addNewClient(t){this.clientData=[...this.clientData,t],localStorage.setItem("clientStorage",JSON.stringify(this.clientData))},fetchClientData(){localStorage&&(this.clientData=JSON.parse(localStorage.getItem("clientStorage"))||[])}}});const J={name:"Connect",components:{MyInput:P,MyButton:z},setup(){const t=E(),n=O(),r=q();return{linksFooter:V(()=>n.linksFooter),linksFooterStore:n,clientStore:r,v$:t}},data(){return{connectName:"",connectPhone:"",connectText:"",loading:!1}},validations(){return{connectName:{required:b,minLength:x(3),maxLength:S(20)},connectPhone:{required:b,numeric:A,minLength:x(2),maxLength:S(10)}}},methods:{handleSubmit(t){if(t.preventDefault(),this.loading)return;this.loading=!0;const n=t.target.elements.input_name.value,r=t.target.elements.input_phone.value,a=t.target.elements.textarea_message.value,s=new Date,c={name:n,phone:r,message:a,date:s};this.clientStore.addNewClient(c),t.target.reset(),this.connectText="",this.loading=!1},checkError(t){var n;return(n=this.v$[t])==null?void 0:n.$error}},mounted(){this.clientStore.fetchClientData()}},M=t=>(C("data-v-eebe8bec"),t=t(),w(),t),Y={class:"connect"},j=M(()=>e("div",{class:"connect__title"},"Connect with us",-1)),G={class:"connect__wrapper"},H={class:"connect__form_inputs"},K={class:"connect__form_name"},Q={for:"input_name"},R={key:0,class:"invalidMessage"},W={class:"connect__form_phone"},X={for:"input_phone"},Z={class:"invalidMessage"},ee={class:"connect__form_textarea"},te={class:"connect__form_buttons"},ne={class:"connect__contacts"},oe={class:"connect__contacts_list"},se=["href"],ce=["src"],ae=M(()=>e("div",{class:"connect__contacts_address"}," Boston, Lincoln avenue, 19 Lincoln center, 2 floor ",-1));function ie(t,n,r,a,s,c){const d=h("my-input"),u=h("my-button");return l(),_("section",Y,[j,e("div",G,[e("form",{class:"connect__form",novalidate:"",onSubmit:n[5]||(n[5]=(...o)=>c.handleSubmit&&c.handleSubmit(...o))},[e("div",H,[e("div",K,[e("label",Q,[m("Your name "),i(d,{modelValue:s.connectName,"onUpdate:modelValue":n[0]||(n[0]=o=>s.connectName=o),modelModifiers:{trim:!0},class:f(["connect__form_input",{invalidBorder:c.checkError("connectName")}]),name:"input_name",onInput:n[1]||(n[1]=o=>a.v$.connectName.$touch())},null,8,["modelValue","class"])]),c.checkError("connectName")?(l(),_("div",R," This field is not an valid. 3-20 symbols ")):D("",!0)]),e("div",W,[e("label",X,[m("Your phone "),i(d,{modelValue:s.connectPhone,"onUpdate:modelValue":n[2]||(n[2]=o=>s.connectPhone=o),modelModifiers:{trim:!0},class:f(["connect__form_input connect__form_input-phone",{invalidBorder:c.checkError("connectPhone")}]),name:"input_phone",type:"tel",onInput:n[3]||(n[3]=o=>a.v$.connectPhone.$touch())},null,8,["modelValue","class"])]),v(e("div",Z," This field is not an valid. Only numeric 3-10 symbols ",512),[[I,c.checkError("connectPhone")]])])]),e("div",ee,[e("label",null,[m("Message "),v(e("textarea",{"onUpdate:modelValue":n[4]||(n[4]=o=>s.connectText=o),name:"textarea_message"},null,512),[[L,s.connectText]])])]),e("div",te,[i(u,{class:"connect__form_attach",type:"file",multiple:""},{default:g(()=>[m(" Attach file ")]),_:1}),i(u,{class:"connect__form_submit",type:"submit",disabled:s.loading},{default:g(()=>[m(" Send ")]),_:1},8,["disabled"])])],32),e("div",ne,[e("ul",oe,[(l(!0),_(B,null,F(a.linksFooter,(o,$)=>(l(),_("li",{key:$,class:"connect__contacts_item"},[e("a",{href:o.href,class:"connect__contacts_link"},[e("img",{src:`${o.src}`,alt:"i"},null,8,ce),e("div",null,T(o.value),1)],8,se)]))),128))]),ae])])])}const k=p(J,[["render",ie],["__scopeId","data-v-eebe8bec"]]);const re={name:"MapComponent",data:()=>({MapComponent:null})},le=t=>(C("data-v-e891a92d"),t=t(),w(),t),_e={class:"mapcomponent"},me=le(()=>e("div",{class:"mapcomponent__wrapper"},[e("h3",{class:"mapcomponent__title"},"Our company address"),e("div",{class:"mapcomponent__map"},[e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7012.809134982793!2d-71.06391284644356!3d42.35269147149964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370828f9ffb51%3A0x7f3417a2160f1925!2s19%20Lincoln%20St%2C%20Boston%2C%20MA%2002111%2C%20USA!5e0!3m2!1sen!2sru!4v1690202928241!5m2!1sen!2sru",width:"auto",height:"400",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})])],-1)),de=[me];function ue(t,n,r,a,s,c){return l(),_("section",_e,de)}const N=p(re,[["render",ue],["__scopeId","data-v-e891a92d"]]),pe={name:"Contacts",components:{MapComponent:N,Connect:k,Menu:y}};function he(t,n,r,a,s,c){const d=y,u=k,o=N;return l(),_("div",null,[i(d),i(u),i(o)])}const we=p(pe,[["render",he]]);export{we as default};
