import{d as e}from"./entry.6922467d.js";const c=e("cartListStore",{state(){return{cartList:[]}},getters:{getCartList(s){return this.cartList},getTotalSum(s){return this.cartList.reduce((t,r)=>t+r.price*r.amount,0)},getTotalElements(s){return this.cartList.reduce((t,r)=>t+r.amount,0)}},actions:{fetchCartList(){localStorage&&(this.cartList=JSON.parse(localStorage.getItem("cartListStorage"))||[])},addToCart(s){const t=this.cartList.findIndex(i=>i.id===s.id),r=[...this.cartList];let a={...s,amount:1};if(t>-1){const i=r[t].amount+1;a={...a,amount:i},r.splice(t,1,a),this.cartList=r;return}this.cartList=[...this.cartList,a],localStorage.setItem("cartListStorage",JSON.stringify(this.cartList))},removeFromCart(s){this.cartList=this.cartList.filter(t=>t.id!==s),localStorage.setItem("cartListStorage",JSON.stringify(this.cartList))},incrementQuantity(s){const t=this.cartList.find(r=>r.id===s);t&&t.amount++,localStorage.setItem("cartListStorage",JSON.stringify(this.cartList))},decrementQuantity(s){const t=this.cartList.find(r=>r.id===s);t&&t.amount>1?t.amount--:this.cartList=this.cartList.filter(r=>r.id!==s),localStorage.setItem("cartListStorage",JSON.stringify(this.cartList))},clearCartList(){this.cartList=[],localStorage.removeItem("cartListStorage")}}}),n=e("modalStore",{state(){return{modalTexts:""}},actions:{openVoiceModal(s){this.modalTexts=s},closeVoiceModal(){this.modalTexts=""}}});export{n as a,c as u};
