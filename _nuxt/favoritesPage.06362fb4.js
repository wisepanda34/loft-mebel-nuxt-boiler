import{_}from"./OneCard.539241bd.js";import{u as l}from"./favorites.95fdf89f.js";import{o,a as r,f as e,m as i,s as n,t as v,l as d,F as f,i as m,c as u,p as h,q as g}from"./swiper-vue.520d28f9.js";import{_ as y}from"./_plugin-vue_export-helper.c27b6911.js";import"./entry.6922467d.js";import"./MyButton.1f5d35d1.js";import"./modal.924e5f6a.js";const S={name:"FavoritesPage",components:{OneCard:_},setup(){return{favorites:l().favorites}}},x=t=>(h("data-v-ae9e766b"),t=t(),g(),t),F={class:"favoritesList"},L={class:"favoritesList__wrapper"},k=x(()=>e("h3",null,"Your favorites",-1)),w={class:"favoritesList__empty"},B={class:"favoritesList__cards"};function I(t,c,b,s,P,C){const p=_;return o(),r("section",F,[e("div",L,[k,i(e("h4",null,[e("span",null,v(s.favorites.length),1),d(" items")],512),[[n,s.favorites.length!==0]]),i(e("h2",w," Favorites list is currently empty ",512),[[n,s.favorites.length===0]]),e("div",B,[(o(!0),r(f,null,m(s.favorites,a=>(o(),u(p,{key:a.id,item:a},null,8,["item"]))),128))])])])}const Y=y(S,[["render",I],["__scopeId","data-v-ae9e766b"]]);export{Y as default};
