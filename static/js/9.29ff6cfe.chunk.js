(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{203:function(e,t,a){"use strict";a.r(t);var c=a(0),l=a.n(c),n=a(47),r=a(81);t.default=(()=>{const{isCartOpen:e,cart:t}=Object(n.c)(e=>e.cartReducer),a=Object(n.b)(),c=t.map(e=>(console.log(e.price,e.quantity),e.price*e.quantity)).reduce((e,t)=>e+t,0);if(e)return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"cart"},l.a.createElement("div",{className:"cart_content"},l.a.createElement("div",{className:"cart_head"},l.a.createElement("h2",null,"Cart ",l.a.createElement("small",null,"(",t.length,")")),l.a.createElement("div",{title:"Close",className:"close_btn",onClick:()=>a(Object(r.e)(!1))})),l.a.createElement("div",{className:"cart_body"},t.map(e=>{const{id:t,title:c,price:n,description:s,category:i,image:m,quantity:o}=e;return l.a.createElement("div",{className:"cart_items",key:t},l.a.createElement("figure",{class:"cart_items_img"},l.a.createElement("img",{src:m,class:"img-thumbnail",alt:"product-img"})),l.a.createElement("div",{className:"cart_items_info"},l.a.createElement("h4",null,c),l.a.createElement("h3",{className:"price"},"\u20b9 ",n.toLocaleString())),l.a.createElement("div",{className:"cart_items_quantity"},l.a.createElement("span",{onClick:()=>a(Object(r.b)(t)),class:"btn btn-danger",title:"Minus"},"\u2212"),l.a.createElement("b",null,o),l.a.createElement("span",{onClick:()=>a(Object(r.c)(t)),class:"btn btn-success",title:"Plus"},"+")),l.a.createElement("div",{title:"Remove Item",className:"cart_items_delete",onClick:()=>a(Object(r.d)(t))},l.a.createElement("span",null,"\xd7")))})),l.a.createElement("div",{className:"cart_foot"},l.a.createElement("h3",null,l.a.createElement("small",null,"Total:"),l.a.createElement("b",null,"\u20b9 ",c.toLocaleString())),l.a.createElement("button",{type:"button",className:"checkout_btn",disabled:!c},"Checkout")))))})}}]);
//# sourceMappingURL=9.29ff6cfe.chunk.js.map