webpackJsonp([3],{"7Ogj":function(t,s,e){t.exports=e.p+"img/logo.c432ec6.png"},CnSn:function(t,s,e){"use strict";s.a={data:function(){return{redesSociales:[{nombre:"Linkedin",url:"https://www.linkedin.com/pub/kristof-orts/61/320/a02"},{nombre:"Twitter",url:"http://twitter.com/kristoforts"}],scrolledY:!1,maxWidth:!1}},methods:{handleScroll:function(){this.scrolledY=window.scrollY>199},handleWidth:function(){this.maxWidth=window.innerWidth<768}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},mounted:function(){this.handleWidth(),this.handleScroll(),window.addEventListener("resize",this.handleWidth)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleWidth)}}},JS8K:function(t,s,e){t.exports=e.p+"img/add.dcf892c.png"},Ma2J:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("CnSn"),n=e("STrE"),i=e("VU/8")(a.a,n.a,!1,null,null,null);i.options.__file="layouts\\default.vue",s.default=i.exports},STrE:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"vistas"},[a("b-navbar",{staticClass:"py-0 px-0",class:{"margen-color":t.scrolledY||t.maxWidth},attrs:{toggleable:"md",type:"light",fixed:"top"}},[a("b-container",{staticClass:"py-1 py-md-3 px-3"},[a("b-navbar-brand",[a("nuxt-link",{attrs:{to:"/"}},[a("img",{attrs:{src:e("7Ogj")}}),a("img",{staticClass:"ml-3 d-none d-md-inline",attrs:{src:e("y9jg")}})])],1),a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",{staticClass:"mr-auto"},[a("nuxt-link",{staticClass:"ruta px-3 py-2",attrs:{to:"/",exact:"","active-class":"activo"}},[t._v("WORK")]),a("nuxt-link",{staticClass:"ruta px-3 py-2",attrs:{to:"about","active-class":"activo"}},[t._v("ABOUT")]),a("nuxt-link",{staticClass:"ruta px-3 py-2",attrs:{to:"contact","active-class":"activo"}},[t._v("CONTACT")])],1)],1)],1)],1),a("nuxt"),a("footer",{staticClass:"footer py-5"},[a("b-container",[a("b-row",{staticClass:"d-flex justify-content-center align-items-center"},[a("b-col",{staticClass:"mb-3 mb-lg-0",attrs:{cols:"12",lg:"2"}},[t._v("© 2014 A Different Design")]),a("b-col",{attrs:{cols:"12",lg:"3"}},[t._v("Kattendijkdok-westkaai 27, 2000 Antwerpen")]),a("b-col",{staticClass:"my-3 my-lg-0",attrs:{cols:"12",lg:"2"}},[a("img",{attrs:{src:e("JS8K"),alt:""}})]),a("b-col",{attrs:{cols:"12",lg:"3"}},[a("a",{attrs:{href:"mailto:hello@adifferentdesign.be"}},[t._v("hello@adifferentdesign.be")])]),a("b-col",{staticClass:"mt-3 mt-lg-0",attrs:{cols:"12",lg:"2"}},[a("ul",{staticClass:"redes-sociales"},t._l(t.redesSociales,function(s,e){return a("li",{key:s+e,staticClass:"red"},[a("a",{staticClass:"red-enlace",attrs:{href:s.url}},[t._v(t._s(s.nombre))])])}))])],1)],1)],1)],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};s.a=n},y9jg:function(t,s,e){t.exports=e.p+"img/type.4bb722b.png"}});