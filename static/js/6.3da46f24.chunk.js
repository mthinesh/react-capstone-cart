(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9],{203:function(e,t,a){"use strict";a.r(t);var l=a(0),c=a.n(l),n=a(47),r=a(81);t.default=(()=>{const{isCartOpen:e,cart:t}=Object(n.c)(e=>e.cartReducer),a=Object(n.b)(),l=t.map(e=>(console.log(e.price,e.quantity),e.price*e.quantity)).reduce((e,t)=>e+t,0);if(e)return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"cart"},c.a.createElement("div",{className:"cart_content"},c.a.createElement("div",{className:"cart_head"},c.a.createElement("h2",null,"Cart ",c.a.createElement("small",null,"(",t.length,")")),c.a.createElement("div",{title:"Close",className:"close_btn",onClick:()=>a(Object(r.e)(!1))})),c.a.createElement("div",{className:"cart_body"},t.map(e=>{const{id:t,title:l,price:n,description:s,category:m,image:i,quantity:o}=e;return c.a.createElement("div",{className:"cart_items",key:t},c.a.createElement("figure",{class:"cart_items_img"},c.a.createElement("img",{src:i,class:"img-thumbnail",alt:"product-img"})),c.a.createElement("div",{className:"cart_items_info"},c.a.createElement("h4",null,l),c.a.createElement("h3",{className:"price"},"\u20b9 ",n.toLocaleString())),c.a.createElement("div",{className:"cart_items_quantity"},c.a.createElement("span",{onClick:()=>a(Object(r.b)(t)),class:"btn btn-danger",title:"Minus"},"\u2212"),c.a.createElement("b",null,o),c.a.createElement("span",{onClick:()=>a(Object(r.c)(t)),class:"btn btn-success",title:"Plus"},"+")),c.a.createElement("div",{title:"Remove Item",className:"cart_items_delete",onClick:()=>a(Object(r.d)(t))},c.a.createElement("span",null,"\xd7")))})),c.a.createElement("div",{className:"cart_foot"},c.a.createElement("h3",null,c.a.createElement("small",null,"Total:"),c.a.createElement("b",null,"\u20b9 ",l.toLocaleString())),c.a.createElement("button",{type:"button",className:"checkout_btn",disabled:!l},"Checkout")))))})},236:function(e,t,a){"use strict";a.r(t);var l=a(0),c=a.n(l),n=(a(203),a(83)),r=a(47),s=a(81),m=a(16),i=a(200);var o=e=>{const{title:t,price:a,description:l,category:n,image:o,quantity:d}=e,E=Object(r.b)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{class:"col-md-12 col-xl-6"},c.a.createElement("div",{class:"card shadow-0 border rounded-3"},c.a.createElement("div",{class:"card-body",key:e.id},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0"},c.a.createElement("div",{class:"bg-image hover-zoom ripple rounded ripple-surface"},c.a.createElement("img",{src:e.image,alt:e.title,class:"w-100"}),c.a.createElement("a",{href:"#!"},c.a.createElement("div",{class:"hover-overlay"},c.a.createElement("div",{class:"mask"}))))),c.a.createElement("div",{class:"col-md-6 col-lg-6 col-xl-6"},c.a.createElement("h5",null,e.title),c.a.createElement("div",{class:"d-flex flex-row"},c.a.createElement("span",null,e.rating.rate,"-Rate"),c.a.createElement("div",{class:"text-danger mb-1 me-2"},c.a.createElement("i",{class:"fa-solid fa-star"}),c.a.createElement(i.a,{icon:"fa-solid fa-star"}),c.a.createElement(i.a,{icon:"fa-solid fa-star"}),c.a.createElement("i",{class:"bi bi-star"})),c.a.createElement("span",null,e.rating.count,"(Review)")),c.a.createElement("div",{class:"mb-2 text-muted small"},c.a.createElement("span",{class:"text-primary"}," \u2022 "),c.a.createElement("span",null,e.category),c.a.createElement("span",{class:"text-primary"}," \u2022 ")),c.a.createElement("p",{class:"text-truncate mb-4 mb-md-0"},e.description)),c.a.createElement("div",{class:"col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start"},c.a.createElement("div",{class:"d-flex flex-row align-items-center mb-1"},c.a.createElement("h4",{class:"mb-1 me-1"},"$",e.price)),c.a.createElement("h6",{class:"text-success"},"Free shipping"),c.a.createElement("div",{class:"d-flex flex-column mt-4"},c.a.createElement(m.b,{component:m.b,to:"/viewproduct/".concat(e.id),class:"btn btn-primary btn-sm",type:"button"},"Details"),c.a.createElement("button",{class:"btn btn-outline-primary btn-sm mt-2",type:"button",onClick:()=>E(Object(s.a)({...e}))},"Add to wishlist"))))))))},d=a(235);t.default=(()=>{const[e,t]=Object(l.useState)(""),[a,r]=Object(l.useState)([]);Object(l.useEffect)(()=>{s()});const s=async()=>{const t=await Object(n.a)();console.log(t.data);const a=t.data.filter(t=>""===e.trim()?t:(console.log(t),t.title.toLowerCase().includes(e.trim())));r(a)};return c.a.createElement(c.a.Fragment,null,"  ",c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"text-center"},"   ",c.a.createElement("h4",null,"Products List")),c.a.createElement("div",{className:"search"},c.a.createElement(d.a,{id:"outlined-basic",onChange:e=>{var a=e.target.value.toLowerCase();console.log(a),t(a)},variant:"outlined",fullWidth:!0,label:"Search"}))),c.a.createElement("section",{id:"home"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},a.map(e=>c.a.createElement(o,Object.assign({key:e.id},e)))))))})}}]);
//# sourceMappingURL=6.3da46f24.chunk.js.map