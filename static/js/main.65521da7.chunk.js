(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),o=(a(15),a(1)),c=a(2),s=a(4),u=a(3),m=a(5),d=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},f=a(6),h="/alf-tarot",b=h+"/frontSideImage.jpg",p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={backSideImage:h+"/"+a.props.backSideImage+".jpg"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(f.c,{flipOnHover:!1,flipOnClick:!0,flipDirection:"horizontal",ref:function(t){return e.flippy=t},style:{width:"277px",height:"440px"}},r.a.createElement(f.b,null,r.a.createElement("img",{src:b,alt:"front",style:{maxWidth:"100%",maxHeight:"100%"}})),r.a.createElement(f.a,null,r.a.createElement("img",{src:this.state.backSideImage,alt:"back",style:{maxWidth:"100%",maxHeight:"100%"}})))}}]),t}(n.Component),g={display:"flex",flexDirection:"row",width:"60%",margin:"auto"};var y=function(){var e=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],t=function(e){return e[Math.floor(Math.random()*e.length)]},a=function(e,t){return e.filter(function(e,a,n){return e!==t})},n=t(e),l=t(a(e,n)),i=t(a(e,l));return r.a.createElement("div",{class:"row",style:{style:g}},r.a.createElement("div",{class:"col order-last"},r.a.createElement(p,{backSideImage:n})),r.a.createElement("div",{class:"col"},r.a.createElement(p,{backSideImage:l})),r.a.createElement("div",{class:"col order-first"},r.a.createElement(p,{backSideImage:i})))},v=(a(17),{backgroundColor:"#4B0082",borderStyle:"solid",color:"white",display:"table",margin:"auto",padding:20}),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={flippy:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleButtonClick",value:function(e){this.setState({flippy:function(){return y()}})}},{key:"componentWillMount",value:function(){this.setState({flippy:function(){return y()}})}},{key:"render",value:function(){var e=this.state.flippy;return r.a.createElement("div",{class:"container"},r.a.createElement(e,null),r.a.createElement("button",{style:v,className:"btn btn-secondary btn-lg",onClick:this.handleButtonClick.bind(this)},"Shuffle",r.a.createElement(d,{symbol:"\ud83d\udd01"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.65521da7.chunk.js.map