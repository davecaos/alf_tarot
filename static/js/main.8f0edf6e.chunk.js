(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),o=(a(15),a(1)),c=a(2),s=a(4),d=a(3),u=a(5),h=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},f=a(6),m={backgroundColor:"#4B0082",borderStyle:"solid"},p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={firstCard:0,secondCard:0,thirdCard:0,play:!0,carta:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"shuffle",value:function(){for(var e=[],t=function(e){return Math.floor(Math.random()*e.length+1)},a=function(e,t){return e.filter(function(e,a,n){return e!==t})},n=1;n<=32;n++)e.push(n);var r=t(e),l=t(e=a(e,this.state.firstCard)),i=t(e=a(e,this.state.secondCard));this.setState({firstCard:r,secondCard:l,thirdCard:i})}},{key:"componentWillMount",value:function(){this.shuffle()}},{key:"renderCard",value:function(e){var t=this;return r.a.createElement(f.c,{flipOnHover:!1,flipOnClick:!0,flipDirection:"horizontal",ref:function(e){return t.flippy=e},style:{width:"277px",height:"440px"}},r.a.createElement(f.b,{style:{cardStyle:m}},r.a.createElement("img",{src:"/alf-tarot/34.jpg",style:{maxWidth:"100%",maxHeight:"100%"}})),r.a.createElement(f.a,{style:{cardStyle:m}},r.a.createElement("img",{src:"/alf-tarot/"+e+".jpg",style:{maxWidth:"100%",maxHeight:"100%"}})))}},{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col order-last"},this.renderCard(this.state.firstCard)),r.a.createElement("div",{class:"col"},this.renderCard(this.state.secondCard)),r.a.createElement("div",{class:"col order-first"},this.renderCard(this.state.thirdCard))))}}]),t}(n.Component),y=(a(17),{backgroundColor:"#4B0082",borderStyle:"solid",color:"white",display:"table",margin:"auto",padding:20}),b=function(){return function(e){return r.a.createElement(p,null)}},v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={play:!0,carta:null},new Audio("/alf-tarot/alf-series-tv.mp3").play(),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleButtonClick",value:function(e){var t=b();this.setState({flippy:t})}},{key:"componentWillMount",value:function(){var e=b();this.setState({flippy:e})}},{key:"render",value:function(){var e=this.state.flippy;return r.a.createElement("div",{class:"container"},r.a.createElement(e,null),r.a.createElement("button",{style:y,className:"btn btn-secondary btn-lg",onClick:this.handleButtonClick.bind(this)},"Shuffle",r.a.createElement(h,{symbol:"\ud83d\udd01"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.8f0edf6e.chunk.js.map