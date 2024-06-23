(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(601),o=n.n(a),r=n(314),d=n.n(r)()(o());d.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap);"]),d.push([e.id,"* {\n    font-family: Inter;\n    padding: 0px;\n    margin: 0px;\n    --photo-width: calc(100vw - 265px);\n    overflow: overlay;\n}\n\n/* side margins */\n/* header,\n.name-and-photo,\n.menu-middle,\n.about-middle,\nfooter {\n    margin-left: 125px;\n    margin-right: 125px;\n    font-weight: 300;\n} */\nheader,\n#content,\nfooter {\n    margin-left: 125px;\n    margin-right: 125px;\n    font-weight: 300;\n}\n/* header */\nheader {\n    padding-top: 50px;\n    padding-bottom: 50px;\n    font-size: 16px;\n}\n\nheader,\n.page-names {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.page-names {\n    gap: 75px;\n    font-size: 18px;\n}\n.page-names nav {\n    font-weight: 300;\n}\n\n.page-names nav:hover {\n    cursor: pointer;\n}\n\n.restaurant-header-name {\n    font-weight: 400;\n}\n\nbutton {\n    background-color: black;\n    color: white;\n    border-radius: 8px;\n    padding: 10px;\n    border: solid;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: rgb(47, 47, 47);\n}\n\n/* home */\n.name-and-photo {\n    position: relative;\n}\n.name-photo img {\n    width: var(--photo-width);\n    border-radius: 15px;\n}\n\n.name-photo-top-div {\n    position: absolute;\n    top: 100px;\n    right: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n}\n.name-photo-top-div h1{\n    font-weight: bold;\n    color: white;\n    font-size: 54px;\n}\n\n/* menu */\n.menu-middle {\n    display: flex;\n}\n\n.menu-item {\n    border: black solid 1px;\n    border-radius: 12px;\n    height: 250px;\n    width: 250px;\n    display: flex;\n    flex-direction:column;\n}\n\n.appetizers,\n.entrees,\n.desserts {\n    margin-left: 20px;\n    margin-bottom: 35px;\n}\n\n.appetizers div,\n.entrees div,\n.desserts div {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 25px;\n    justify-content: center;\n    align-items: center;\n}\n\n.appetizers h2,\n.entrees h2,\n.desserts h2 {\n    font-size: 36px;\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 30px;\n}\n\n/* about */\n\n.about-middle h1 {\n    font-size: 48px;\n    font-weight: 400;\n    text-align: center;\n    margin-bottom: 35px;\n}\n\n.picture-and-about {\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 35px;\n    border-bottom: solid black 1px;\n    margin-bottom: 35px;\n}\n\n.picture-and-about img {\n    width: 575px;\n    border-radius: 12px;\n}\n\n.about-us-text {\n    font-size: 24px;\n    line-break: normal;\n    padding: 30px;\n    width: 505px ;\n}\n\n.contact-us {\n    display: flex;\n    justify-content: space-evenly;\n    font-size: 18px;\n}\n\n.contact-us h2 {\n    font-weight: 200;\n}\n\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.hours {\n    display: grid;\n    grid-template-columns: 60px 1fr;\n    gap: 5px;\n    margin-top: 10px;\n    padding-left: 10px;\n}\n\n/* footer */\nfooter {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 50px;\n    border-top: solid black;\n    padding-top: 35px;\n    margin-top: 35px;\n}\n.footer-address {\n    margin-left: 10px;\n}\n\n.footer-right {\n    display: flex;\n    gap: 75px;\n}\n.socials {\n    display: grid;\n    grid-template-columns: 40px 1fr;\n    grid-template-rows: repeat(5, 1fr);\n    gap: 10px;\n    align-items: center;\n    justify-content: center;\n}\n\n.socials-h2 {\n    grid-area: 1/1/2/3;\n}\n.socials img {\n    height: 25px;\n    justify-self: flex-end;\n}\n\n.get-in-touch div,\n.deals div {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin-left: 10px;\n    margin-top: 10px;\n\n}\n",""]);const i=d},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(d[c]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);a&&d[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},d=[],i=0;i<e.length;i++){var c=e[i],p=a.base?c[0]+a.base:c[0],l=r[p]||0,s="".concat(p," ").concat(l);r[p]=l+1;var m=n(s),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var f=o(u,a);a.byIndex=i,t.splice(i,0,{identifier:s,updater:f,references:1})}d.push(s)}return d}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<r.length;d++){var i=n(r[d]);t[i].references--}for(var c=a(e,o),p=0;p<r.length;p++){var l=n(r[p]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=c}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),a=n(825),o=n.n(a),r=n(659),d=n.n(r),i=n(56),c=n.n(i),p=n(540),l=n.n(p),s=n(113),m=n.n(s),u=n(208),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(u.A,f),u.A&&u.A.locals&&u.A.locals;let h=document.getElementById("content");function x(){for(;h.firstChild;)h.removeChild(h.firstChild)}function v(){x();let e=document.createElement("div");e.classList.add("name-and-photo");let t=document.createElement("div");t.classList.add("name-photo");let n=document.createElement("img");n.src="../images/restuarant-image.jpeg";let a=document.createElement("div");a.classList.add("name-photo-top-div");let o=document.createElement("h1");o.textContent="Verdanza Tavola";let r=document.createElement("p");r.textContent="Look at this sick view",t.append(n),a.append(o,r),e.append(t,a),h.append(e)}h.onload=v(),document.getElementById("home").addEventListener("click",(e=>{e.preventDefault,v()})),document.getElementById("menu").addEventListener("click",(e=>{e.preventDefault,function(){x();let e=document.createElement("div");e.classList.add("menu-middle");let t=document.createElement("div");t.classList.add("menu");let n=document.createElement("div");n.classList.add("appetizers");let a=document.createElement("h2");a.textContent="Appetizers",n.append(a);let o=document.createElement("div");n.append(o);let r=document.createElement("div");r.classList.add("entrees");let d=document.createElement("h2");r.append(d),d.textContent="Entrees";let i=document.createElement("div");r.append(i);let c=document.createElement("div");c.classList.add("desserts");let p=document.createElement("h2");p.textContent="Desserts",c.append(p);let l=document.createElement("div");c.append(l);let s=0;for(;s<6;){let e=document.createElement("div");e.classList.add("menu-item");let t=document.createElement("div");t.classList.add("menu_div");let n=document.createElement("h3");n.textContent="Name";let a=document.createElement("p");a.textContent="Description";let r=document.createElement("p");r.textContent="$0.00",e.append(n,a,r),t.append(e),t.style.display="flex",o.append(t),s++}let m=0;for(;m<10;){let e=document.createElement("div");e.classList.add("menu-item");let t=document.createElement("div");t.classList.add("menu_div");let n=document.createElement("h3");n.textContent="Name";let a=document.createElement("p");a.textContent="Description";let o=document.createElement("p");o.textContent="$0.00",e.append(n,a,o),t.append(e),i.append(t),m++}let u=0;for(;u<3;){let e=document.createElement("div");e.classList.add("menu-item");let t=document.createElement("div");t.classList.add("menu_div");let n=document.createElement("h3");n.textContent="Name";let a=document.createElement("p");a.textContent="Description";let o=document.createElement("p");o.textContent="$0.00",e.append(n,a,o),t.append(e),l.append(t),u++}t.append(n,r,c),e.append(t),h.append(e)}()})),document.getElementById("about").addEventListener("click",(e=>{e.preventDefault(),function(){x();let e=document.createElement("about-middle");e.classList.add("about-middle"),h.append(e);let t=document.createElement("h1");t.textContent="About Verdanza Tavola",e.append(t);let n=document.createElement("div");n.classList.add("picture-and-about"),e.append(n);let a=document.createElement("img");a.src="../images/about.jpeg",n.append(a);let o=document.createElement("div");o.classList.add("about-us-text"),n.append(o);let r=document.createElement("p");r.textContent="Welcome to Verdanza Tavola, a restaurant born from a shared passion for food and family. Founded by siblings Anya and Rafael Delgado, our establishment is the culmination of a lifelong dream to create a space where people can gather and enjoy exceptional cuisine in a warm, inviting atmosphere.";let d=document.createElement("br"),i=document.createElement("p");i.textContent="Our mission is to provide our customers with high-quality meals that are made with the finest ingredients. We source our ingredients from local farms and use traditional methods to create our dishes. We are committed to sustainable practices and work to reduce our environmental impact.";let c=document.createElement("br"),p=document.createElement("p");p.textContent="Join us at Verdanza Tavola, where the spirit of family and the love of good food come together to create unforgettable dining experiences.",o.append(r,d,i,c,p);let l=document.createElement("div");e.append(l);let s=document.createElement("h1");s.textContent="Contact Us",l.append(s);let m=document.createElement("div");m.classList.add("contact-us");let u=document.createElement("div");u.classList.add("contact-info"),m.append(u),l.append(m);let f=document.createElement("div"),v=document.createElement("p");v.textContent="Phone:";let g=document.createElement("p");g.textContent="+1 (234) 567-8910",f.append(v,g);let E=document.createElement("div"),b=document.createElement("p");b.textContent="Email:";let y=document.createElement("p");y.textContent="info@verdanzatavola.com",E.append(b,y);let w=document.createElement("div"),C=document.createElement("div"),L=document.createElement("p");L.textContent="Address:";let z=document.createElement("p");z.textContent="1234 Culinary Road,";let T=document.createElement("p");T.textContent="Flavor Town, USA 56789",C.append(z,T),w.append(L,C),u.append(f,E,w);let j=document.createElement("div");m.append(j);let A=document.createElement("h2");A="Hours:",j.append("Hours:");let k=document.createElement("div");k.classList.add("hours");let I=["Sun :","1pm-10pm","Mon :","1pm-8pm","Tues :","1pm-8pm","Wed :","1pm-8pm","Thurs :","1pm-3am","Fri :","1pm-3am","Sat :","1pm-10pm"];for(const e in I){let t=document.createElement("p");t.textContent=I[e],k.append(t)}j.append(k)}()}))})()})();