"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{53289:function(e,a,s){s.r(a),a.default={src:"/_next/static/media/footer-logo.2eb548ed.png",height:35,width:132,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARklEQVR4nGPcUV76QlNJ/ot0Ylo8Myurwv9//64yMDJyMzAw2ALxTsalmZmX1ET5v5qUVIYx8PLp/f///ydQghmI5YH4GwDfsxSEWGWIMwAAAABJRU5ErkJggg=="}},58082:function(e,a,s){s.r(a),a.default={src:"/_next/static/media/logo-1.279e19a3.png",height:36,width:137,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAS0lEQVR4nGN8tHXzi9f7d32pPnIj/v633wqCLExXf/z9z83AwGALxLsYXx0/cunLpQtfm9JzQg8ZueiL/P/749c/BmagpAIDA8M3AMlHINEI2Gr0AAAAAElFTkSuQmCC"}},21577:function(e,a,s){s.r(a),a.default={src:"/_next/static/media/logo-2.544c553c.png",height:35,width:132,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARklEQVR4nGPcUV76QlNJ/ot0Ylo8Myurwv9//64yMDJyMzAw2ALxTsalmZmX1ET5v5qUVIYx8PLp/f///ydQghmI5YH4GwDfsxSEWGWIMwAAAABJRU5ErkJggg=="}},8295:function(e,a,s){s.d(a,{Z:function(){return H}});var n=s(85893),i=s(72280),l=s(58082),r=s(21577),t={icons:[{id:1,icon:"icon-phone-call",content:"+ 92 666 999 0000",subHref:"tel"},{id:2,icon:"icon-at",content:"needhelp@company.com",subHref:"mailto"}],navItems:[{id:1,name:"Home",href:"/",subNavItems:[]},{id:2,name:"Adventure Safari",href:"#",subNavItems:[]},{id:3,name:"Backpacker Budget",href:"#",subNavItems:[]},{id:4,name:"Excursions",href:"#",subNavItems:[]},{id:5,name:"Contact",href:"#",subNavItems:[]},{id:6,classs:"openTheModalAppear",name:"Book with us now",href:"#",subNavItems:[]}],social:[{icon:"fa-facebook-square",link:""},{icon:"fa-twitter",link:""},{icon:"fa-instagram",link:""},{icon:"fa-pinterest-p",link:""}],logo:l.default,logo2:r.default},c=s(67294),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=(0,c.useState)(!1),s=a[0],n=a[1],i=(0,c.useCallback)((function(){(null===window||void 0===window?void 0:window.scrollY)>e?n(!0):n(!1)}),[e]);return(0,c.useEffect)((function(){return i(),window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}),[i]),s},d=s(41664),m=s(10682),h=s(41330),x=s(11163),u=function(e){var a=e.navItem,s=void 0===a?{}:a,i=(0,x.useRouter)().pathname,l=s.classs,r=s.name,t=s.href,c=s.subNavItems,o=c.map((function(e){return e.href})),m=i===t||o.includes(i);return(0,n.jsxs)("li",{className:"dropdown".concat(m?" current":""),children:[(0,n.jsx)(d.default,{href:t,children:(0,n.jsx)("a",{href:t,className:"".concat(l?"openTheModalAppear":""),children:r})}),(0,n.jsx)("ul",{children:c.map((function(e){var a,s;return(0,n.jsxs)("li",{className:(null===(a=e.subItems)||void 0===a?void 0:a.length)?"dropdown":"",children:[(0,n.jsx)(d.default,{href:e.href,children:(0,n.jsx)("a",{href:t,children:e.name})}),(0,n.jsx)("ul",{children:null===(s=e.subItems)||void 0===s?void 0:s.map((function(e){return(0,n.jsx)("li",{children:(0,n.jsx)(d.default,{href:e.href,children:(0,n.jsx)("a",{href:t,children:e.name})})},e.id)}))})]},e.id)}))})]})},j=t.icons,f=t.navItems,p=t.social,g=t.logo,N=t.logo2,v=function(e){var a=e.pageTitle,s=o(130),l=(0,i.E)(),r=l.toggleMenu,t=l.toggleSearch;return(0,n.jsxs)("header",{className:"main-header".concat("Home Two"===a?" main-header-two":""," clearfix"),children:[(0,n.jsx)("div",{className:"main-header__top d-none",children:(0,n.jsx)(m.Z,{children:(0,n.jsxs)("div",{className:"main-header__top-inner clearfix",children:[(0,n.jsx)("div",{className:"main-header__top-left",children:(0,n.jsx)("ul",{className:"list-unstyled main-header__top-address",children:j.map((function(e){var a=e.id,s=e.icon,i=e.content,l=e.subHref;return(0,n.jsxs)("li",{children:[(0,n.jsx)("div",{className:"icon",children:(0,n.jsx)("span",{className:s})}),(0,n.jsx)("div",{className:"text",children:(0,n.jsx)("a",{href:"".concat(l,":").concat(i),children:i})})]},a)}))})}),(0,n.jsx)("div",{className:"main-header__top-right",children:(0,n.jsxs)("div",{className:"main-header__top-right-inner",children:[(0,n.jsx)("div",{className:"main-header__top-right-social",children:p.map((function(e,a){var s=e.icon,i=e.link;return(0,n.jsx)("a",{href:i,children:(0,n.jsx)("i",{className:"fab ".concat(s)})},a)}))}),(0,n.jsx)("div",{className:"main-header__top-right-btn-box",children:(0,n.jsx)("a",{href:"#",className:"thm-btn main-header__top-right-btn",children:"Become a local guide"})})]})})]})})}),(0,n.jsx)("nav",{className:s?"stricky-header stricked-menu main-menu".concat("Home Two"===a?" main-menu-two":""," stricky-fixed slideInDown animated clearfix"):"main-menu".concat("Home Two"===a?" main-menu-two":""," slideIn animated clearfix"),children:(0,n.jsx)("div",{className:s?"sticky-header__content main-menu-wrapper clearfix":"main-menu-wrapper clearfix",children:(0,n.jsx)(m.Z,{className:"clearfix",children:(0,n.jsxs)("div",{className:"main-menu-wrapper-inner clearfix",children:[(0,n.jsxs)("div",{className:"main-menu-wrapper__left clearfix",children:[(0,n.jsx)("div",{className:"main-menu-wrapper__logo",children:(0,n.jsx)(d.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)(h.Z,{src:"Home Two"===a?N.src:g.src,alt:""})})})}),(0,n.jsxs)("div",{className:"main-menu-wrapper__main-menu",children:[(0,n.jsx)("span",{onClick:function(){return r()},className:"mobile-nav__toggler",children:(0,n.jsx)("i",{className:"fa fa-bars"})}),(0,n.jsx)("ul",{className:"main-menu__list",children:f.map((function(e){return(0,n.jsx)(u,{navItem:e},e.id)}))})]})]}),(0,n.jsxs)("div",{className:"main-menu-wrapper__right d-none",children:[(0,n.jsx)("span",{onClick:t,style:{cursor:"pointer"},className:"main-menu__search search-toggler icon-magnifying-glass"}),(0,n.jsx)("a",{href:"#",className:"main-menu__user icon-avatar"})]})]})})})})]})},b="/_next/static/media/loader.9d1b84e3.png",_=function(e){var a=e.loading;return(0,n.jsx)("div",{style:{opacity:a?1:0,zIndex:a?9999:-1},className:"preloader",children:(0,n.jsx)(h.Z,{className:"preloader__image",width:60,src:b,alt:""})})},w=s(9008),A=function(e){var a=e.subItem,s=void 0===a?{}:a,i=(0,c.useState)(!1),l=i[0],r=i[1],t=s.href,o=s.subItems,m=s.name;return(0,n.jsxs)("li",{children:[(0,n.jsx)(d.default,{href:t,children:(0,n.jsxs)("a",{className:l&&(null===o||void 0===o?void 0:o.length)?" expanded":"",children:[m,(null===o||void 0===o?void 0:o.length)&&(0,n.jsx)("button",{onClick:function(e){e.preventDefault(),e.stopPropagation(),r((function(e){return!e}))},"aria-label":"dropdown toggler",className:l?"expanded":"",children:(0,n.jsx)("i",{className:"fa fa-angle-down"})})]})}),(0,n.jsx)("ul",{style:{display:l?"block":"none"},children:null===o||void 0===o?void 0:o.map((function(e){return(0,n.jsx)("li",{children:(0,n.jsx)(d.default,{href:e.href,children:e.name})},e.id)}))})]})},y=function(e){var a=e.item,s=void 0===a?{}:a,i=(0,x.useRouter)().pathname,l=(0,c.useState)(!1),r=l[0],t=l[1],o=s.name,m=s.href,h=s.subNavItems;return(0,n.jsxs)("li",{className:"dropdown".concat(i===m?" current":""),children:[(0,n.jsx)(d.default,{href:m,children:(0,n.jsxs)("a",{className:r?" expanded":"",children:[o,(0,n.jsx)("button",{onClick:function(e){e.preventDefault(),e.stopPropagation(),t((function(e){return!e}))},"aria-label":"dropdown toggler",className:r?"expanded":"",children:(0,n.jsx)("i",{className:"fa fa-angle-down"})})]})}),(0,n.jsx)("ul",{style:{display:r?"block":"none"},children:h.map((function(e){return(0,n.jsx)(A,{subItem:e},e.id)}))})]})};function k(e,a){if(null==e)return{};var s,n,i=function(e,a){if(null==e)return{};var s,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)s=l[n],a.indexOf(s)>=0||(i[s]=e[s]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)s=l[n],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var I=t.social,T=t.logo,S=t.navItems,E=function(){var e=(0,i.E)(),a=e.toggleMenu,s=e.menuStatus;return(0,n.jsxs)("div",{className:"mobile-nav__wrapper  animated fadeInLeft".concat(s?" expanded":""),children:[(0,n.jsx)("div",{onClick:function(){return a()},className:"mobile-nav__overlay mobile-nav__toggler"}),(0,n.jsxs)("div",{className:"mobile-nav__content",children:[(0,n.jsx)("span",{onClick:function(){return a()},className:"mobile-nav__close mobile-nav__toggler",children:(0,n.jsx)("i",{className:"fa fa-times"})}),(0,n.jsx)("div",{className:"logo-box",children:(0,n.jsx)(d.default,{href:"/",children:(0,n.jsx)("a",{"aria-label":"logo image",children:(0,n.jsx)(h.Z,{src:T.src,width:155,alt:""})})})}),(0,n.jsx)("div",{className:"mobile-nav__container",children:(0,n.jsx)("ul",{className:"main-menu__list",children:S.map((function(e){var a=e.id,s=k(e,["id"]);return(0,n.jsx)(y,{item:s},a)}))})}),(0,n.jsxs)("ul",{className:"mobile-nav__contact list-unstyled",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"fa fa-envelope"}),(0,n.jsx)("a",{href:"mailto:needhelp@packageName__.com",children:"needhelp@tevily.com"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"fa fa-phone-alt"}),(0,n.jsx)("a",{href:"tel:666-888-0000",children:"666 888 0000"})]})]}),(0,n.jsx)("div",{className:"mobile-nav__top",children:(0,n.jsx)("div",{className:"mobile-nav__social",children:I.map((function(e,a){var s=e.icon,i=e.link;return(0,n.jsx)("a",{href:i,className:"fab ".concat(s)},a)}))})})]})]})},C=function(){var e=(0,i.E)(),a=e.openSearch,s=e.toggleSearch;return(0,n.jsxs)("div",{className:"search-popup".concat(a?" active":""),children:[(0,n.jsx)("div",{onClick:s,className:"search-popup__overlay search-toggler"}),(0,n.jsx)("div",{className:"search-popup__content",children:(0,n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=new FormData(e.target);console.log(a.get("search")),s()},children:[(0,n.jsx)("label",{htmlFor:"search",className:"sr-only",children:"search here"}),(0,n.jsx)("input",{type:"text",id:"search",name:"search",placeholder:"Search Here..."}),(0,n.jsx)("button",{type:"submit","aria-label":"search submit",className:"thm-btn",children:(0,n.jsx)("i",{className:"icon-magnifying-glass"})})]})})]})},M={logo:s(53289).default,social:[{icon:"fa-twitter",link:""},{icon:"fa-facebook-square",link:""},{icon:"fa-pinterest-p",link:""},{icon:"fa-instagram",link:""}],year:(new Date).getFullYear(),author:"Tevily",about:"Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.",icons:[{id:1,icon:"fas fa-phone-square-alt",content:"+ 92 666 999 0000",subHref:"tel"},{id:2,icon:"fas fa-envelope",content:"needhelp@company.com",subHref:"mailto"},{id:3,icon:"fas fa-map-marker-alt",content:"666 road, broklyn street new york"}],companies:[{id:1,link:"/about",title:"About Us"},{id:2,link:"#",title:"Community Blog"},{id:3,link:"#",title:"Rewards"},{id:4,link:"#",title:"Work with Us"},{id:5,link:"#",title:"Meet the Team"}],explore:[{id:1,link:"#",title:"Account"},{id:2,link:"#",title:"Legal"},{id:3,link:"#",title:"Contact"},{id:4,link:"#",title:"Affilitate Program"},{id:5,link:"#",title:"Privacy Policy"}]},q=(s(73935),s(83253),s(21608)),L=s(31555),D=M.logo,U=M.icons,Z=M.social,P=M.about,B=function(){return(0,c.useEffect)((function(){var e=document.querySelector(".openTheModalAppear"),a=document.querySelector(".openTheModalAppearModal"),s=document.querySelector(".openTheModalAppearModalClosed");e.addEventListener("click",(function(){a.classList.add("yes-modalShow")})),s.addEventListener("click",(function(){a.classList.remove("yes-modalShow")}))})),(0,n.jsxs)("footer",{className:"site-footer",children:[(0,n.jsx)("div",{className:"site-footer__top",children:(0,n.jsx)(m.Z,{children:(0,n.jsx)("div",{className:"site-footer__top-inner",children:(0,n.jsxs)(q.Z,{children:[(0,n.jsx)(L.Z,{xl:4,lg:6,md:6,className:"animated fadeInUp",children:(0,n.jsxs)("div",{className:"footer-widget__column footer-widget__about",children:[(0,n.jsx)("div",{className:"footer-widget__about-logo",children:(0,n.jsx)(d.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)(h.Z,{src:D.src,alt:""})})})}),(0,n.jsx)("p",{className:"footer-widget__about-text",children:P}),(0,n.jsx)("ul",{className:"footer-widget__about-contact list-unstyled",children:U.map((function(e){var a=e.id,s=e.icon,i=e.content,l=e.subHref;return(0,n.jsxs)("li",{children:[(0,n.jsx)("div",{className:"icon",children:(0,n.jsx)("i",{className:s})}),(0,n.jsx)("div",{className:"text",children:l?(0,n.jsx)("a",{href:"".concat(l,":").concat(i),children:i}):(0,n.jsx)("p",{children:i})})]},a)}))})]})}),(0,n.jsx)(L.Z,{xl:2,lg:6,md:6,className:"animated fadeInUp",children:(0,n.jsxs)("div",{className:"footer-widget__column footer-widget__company clearfix",children:[(0,n.jsx)("h3",{className:"footer-widget__title",children:"Top Destinations"}),(0,n.jsxs)("ul",{className:"footer-widget__company-list list-unstyled topDestinations",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"Ngorongoro Conservation Area"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"Serengeti National Park"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"Zanzibar"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"Kilimanjaro"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"Lake Manyara"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"Arusha National Park"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"Tarangire National Park"})})]})]})}),(0,n.jsx)(L.Z,{xl:2,lg:6,md:6,className:"animated fadeInUp",children:(0,n.jsxs)("div",{className:"footer-widget__column footer-widget__explore",children:[(0,n.jsx)("h3",{className:"footer-widget__title",children:"Top Trips"}),(0,n.jsxs)("ul",{className:"list-unstyled footer-widget__explore-list topTrips",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"5 Day Safari"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"12 Day Kilimanjaro Trecking"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"7 Day Killimanjaro Trecking + Zanzibar"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"5 Day Safari + 5 day Zanzibar"})})]})]})}),(0,n.jsx)(L.Z,{xl:4,lg:6,md:6,className:"animated fadeInUp",children:(0,n.jsxs)("div",{className:"footer-widget__column footer-widget__newsletter",children:[(0,n.jsx)("h3",{className:"footer-widget__title",children:"Newsletter"}),(0,n.jsxs)("ul",{className:"socialNewsLetter",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("i",{className:"fab fa-youtube"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("i",{className:"fab fa-google"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("i",{className:"fab fa-instagram"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("i",{className:"fab fa-facebook"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("i",{className:"fab fa-pinterest"})})})]}),(0,n.jsx)("p",{className:"newsletter_msg",children:"Make email address input field thinner and move down a bit. Make subscribe button smaller also and move down."}),(0,n.jsx)("form",{className:"footer-widget__newsletter-form mc-form",onSubmit:function(e){e.preventDefault();var a=new FormData(e.target);console.log(a.get("email"))},children:(0,n.jsxs)("div",{className:"footer-widget__newsletter-input-box",children:[(0,n.jsx)("input",{type:"email",placeholder:"Email address",name:"email",required:!0}),(0,n.jsx)("button",{type:"submit",className:"footer-widget__newsletter-btn",children:"Subscribe"})]})}),(0,n.jsx)("div",{className:"mc-form__response text-center"}),(0,n.jsxs)("div",{className:"footer-widget__newsletter-bottom",children:[(0,n.jsx)("div",{className:"footer-widget__newsletter-bottom-icon",children:(0,n.jsx)("i",{className:"fa fa-check"})}),(0,n.jsx)("div",{className:"footer-widget__newsletter-bottom-text",children:(0,n.jsx)("p",{children:"I agree to all terms and policies"})})]})]})})]})})})}),(0,n.jsx)("div",{className:"site-footer__bottom",children:(0,n.jsx)(m.Z,{children:(0,n.jsx)(q.Z,{children:(0,n.jsx)(L.Z,{xs:12,children:(0,n.jsxs)("div",{className:"site-footer__bottom-inner",children:[(0,n.jsx)("div",{className:"site-footer__bottom-left",children:(0,n.jsx)("div",{className:"footer-widget__social",children:Z.map((function(e,a){var s=e.icon,i=e.link;return(0,n.jsx)("a",{href:i,children:(0,n.jsx)("i",{className:"fab ".concat(s)})},a)}))})}),(0,n.jsx)("div",{className:"site-footer__bottom-right",children:(0,n.jsx)("p",{children:"\xa9 2023 Safari Expert"})}),(0,n.jsx)("div",{className:"site-footer__bottom-left-arrow",children:(0,n.jsx)("a",{href:"#",className:"scroll-to-target scroll-to-top",children:(0,n.jsx)("span",{className:"icon-right-arrow"})})})]})})})})}),(0,n.jsx)("div",{className:"modal fade openTheModalAppearModal",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,n.jsx)("div",{className:"modal-dialog",role:"document",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsx)("button",{type:"button",className:"close openTheModalAppearModalClosed","data-dismiss":"modal","aria-label":"Close",children:(0,n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),(0,n.jsxs)("p",{className:"two",children:[(0,n.jsx)("label",{children:"Type of trip"}),(0,n.jsx)("select",{children:(0,n.jsx)("option",{children:"Safari"})})]}),(0,n.jsxs)("p",{className:"two",children:[(0,n.jsx)("label",{children:"Duration of your stay"}),(0,n.jsx)("select",{children:(0,n.jsx)("option",{children:"...."})})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("label",{children:"Budget per person (excluding international flights)"}),(0,n.jsx)("select",{children:(0,n.jsx)("option",{children:"...."})})]}),(0,n.jsxs)("p",{className:"two",children:[(0,n.jsxs)("label",{children:["Estimated arrival date",(0,n.jsx)("span",{className:"required"})]}),(0,n.jsx)("input",{type:"date"})]}),(0,n.jsxs)("p",{className:"two",children:[(0,n.jsxs)("label",{children:["Country",(0,n.jsx)("span",{className:"required"})]}),(0,n.jsx)("select",{children:(0,n.jsx)("option",{children:"United Kingdom"})})]}),(0,n.jsxs)("p",{className:"two",children:[(0,n.jsxs)("label",{children:["Number of Adults",(0,n.jsx)("span",{className:"required"})]}),(0,n.jsx)("input",{type:"number",value:"2"})]}),(0,n.jsxs)("p",{className:"two",children:[(0,n.jsxs)("label",{children:["Adults age 1",(0,n.jsx)("span",{className:"required"})]}),(0,n.jsx)("input",{type:"number"})]}),(0,n.jsxs)("p",{className:"two right",children:[(0,n.jsxs)("label",{children:["Adults age 2",(0,n.jsx)("span",{className:"required"})]}),(0,n.jsx)("input",{type:"number"})]}),(0,n.jsxs)("p",{className:"two",children:[(0,n.jsxs)("label",{children:["Number of Children",(0,n.jsx)("span",{className:"required"})]}),(0,n.jsx)("input",{type:"number",value:"2"})]}),(0,n.jsxs)("p",{className:"two",children:[(0,n.jsxs)("label",{children:["Childs age 1",(0,n.jsx)("span",{className:"required"})]}),(0,n.jsx)("input",{type:"number"})]}),(0,n.jsxs)("p",{className:"two right",children:[(0,n.jsxs)("label",{children:["Childs age 2",(0,n.jsx)("span",{className:"required"})]}),(0,n.jsx)("input",{type:"number"})]}),(0,n.jsxs)("p",{className:"two",children:[(0,n.jsxs)("label",{children:["Your first name",(0,n.jsx)("span",{className:"required"})]}),(0,n.jsx)("input",{type:"text"})]}),(0,n.jsxs)("p",{className:"two",children:[(0,n.jsxs)("label",{children:["Your last name",(0,n.jsx)("span",{className:"required"})]}),(0,n.jsx)("input",{type:"text"})]}),(0,n.jsxs)("p",{className:"two",children:[(0,n.jsxs)("label",{children:["Email address",(0,n.jsx)("span",{className:"required"})]}),(0,n.jsx)("input",{type:"text"})]}),(0,n.jsxs)("p",{className:"two",children:[(0,n.jsxs)("label",{children:["Phone number",(0,n.jsx)("span",{className:"required"})]}),(0,n.jsx)("input",{type:"text"})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("label",{children:"Announcements"}),(0,n.jsx)("textarea",{placeholder:"Tell us more about your wishes regarding budget and accommodation or if you have any other request."})]}),(0,n.jsxs)("p",{className:"checkbox",children:[(0,n.jsx)("input",{type:"checkbox"})," By checking this, I accept that I will receive a proposal for my travel request, and that I can receive other news updates regarding my holidays."]}),(0,n.jsxs)("p",{className:"info",children:["Your data will be processed according to our ",(0,n.jsx)("a",{children:"Privacy Policy"}),"."]}),(0,n.jsx)("button",{type:"button",className:"btn btn-primary",children:"Submit"})]})})})]})},H=function(e){var a=e.children,s=e.pageTitle,l=(0,c.useState)(!0),r=l[0],t=l[1],o=(0,i.E)().menuStatus;return(0,c.useEffect)((function(){var e=setTimeout((function(){t(!1)}),500);return function(){return clearTimeout(e)}}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(w.default,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsxs)("title",{children:[s," || Tevily || Tevily NextJS Template For Tour"]})]}),(0,n.jsx)(_,{loading:r}),(0,n.jsxs)("main",{style:{opacity:r?0:1},className:"page-wrapper",children:[(0,n.jsx)(v,{pageTitle:s}),a,(0,n.jsx)(B,{})]}),o&&(0,n.jsx)(E,{}),(0,n.jsx)(C,{})]})}}}]);