var l=(c,e,t)=>new Promise((i,s)=>{var o=r=>{try{n(t.next(r))}catch(a){s(a)}},d=r=>{try{n(t.throw(r))}catch(a){s(a)}},n=r=>r.done?i(r.value):Promise.resolve(r.value).then(o,d);n((t=t.apply(c,e)).next())});import{renderListWithTemplate as h}from"./utils.js";export default class u{constructor(e,t,i,s){this.category=e,this.datasource=t,this.listElement=i,this.idList=s}init(){return l(this,null,function*(){const e=yield this.datasource.getData(),t=this.filterList(e,this.idList);this.renderList(t)})}renderList(e){this.listElement.innerHTML="";const t=document.getElementById("product-card-template");h(t,this.listElement,e,this.prepareTemplate)}prepareTemplate(e,t){return e.querySelector("a").href+=t.Id,e.querySelector("img").src=t.Image,e.querySelector("img").alt+=t.Name,e.querySelector(".card__brand").textContent=t.Brand.Name,e.querySelector(".card__name").textContent=t.NameWithoutBrand,e.querySelector(".product-card__price").textContent+=t.FinalPrice,e}filterList(e,t){return e.filter(i=>t.includes(i.Id))}}
