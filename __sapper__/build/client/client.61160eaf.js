function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n,r){if(t){const s=i(t,e,n,r);return t[0](s)}}function i(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e,n,r,s,o,c){const a=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(a){const s=i(e,n,r,c);t.p(s,a)}}function f(e){return e&&o(e.destroy)?e.destroy:t}function u(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function v(){return $(" ")}function _(){return $("")}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return Array.from(t.childNodes)}function E(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?g(e):m(e)}function k(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return $(e)}function w(t){return k(t," ")}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function P(t,e,n){t.classList[n?"add":"remove"](e)}function N(t,e=document.body){return Array.from(e.querySelectorAll(t))}let A;function I(t){A=t}function C(){if(!A)throw new Error("Function called outside component initialization");return A}function R(t){C().$$.on_mount.push(t)}function O(){const t=C();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,s)}))}}}const L=[],T=[],B=[],U=[],J=Promise.resolve();let q=!1;function M(t){B.push(t)}let z=!1;const H=new Set;function V(){if(!z){z=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];I(e),D(e.$$)}for(I(null),L.length=0;T.length;)T.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];H.has(e)||(H.add(e),e())}B.length=0}while(L.length);for(;U.length;)U.pop()();q=!1,z=!1,H.clear()}}function D(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const W=new Set;let F;function K(){F={r:0,c:[],p:F}}function G(){F.r||s(F.c),F=F.p}function Y(t,e){t&&t.i&&(W.delete(t),t.i(e))}function X(t,e,n,r){if(t&&t.o){if(W.has(t))return;W.add(t),F.c.push((()=>{W.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function Q(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const c=t[o],a=e[o];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in c)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Z(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function et(t,e){t&&t.l(e)}function nt(t,e,r,c){const{fragment:a,on_mount:i,on_destroy:l,after_update:f}=t.$$;a&&a.m(e,r),c||M((()=>{const e=i.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),f.forEach(M)}function rt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(L.push(t),q||(q=!0,J.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,o,c,a,i,l=[-1]){const f=A;I(e);const u=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(u.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return u.ctx&&a(u.ctx[t],u.ctx[t]=s)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](s),p&&st(e,t)),n})):[],u.update(),p=!0,s(u.before_update),u.fragment=!!c&&c(u.ctx),n.target){if(n.hydrate){const t=x(n.target);u.fragment&&u.fragment.l(t),t.forEach(h)}else u.fragment&&u.fragment.c();n.intro&&Y(e.$$.fragment),nt(e,n.target,n.anchor,n.customElement),V()}I(f)}class ct{$destroy(){rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function it(e,n=t){let r;const s=[];function o(t){if(c(e,t)&&(e=t,r)){const t=!at.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),at.push(n,e)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(c,a=t){const i=[c,a];return s.push(i),1===s.length&&(r=n(o)||t),c(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const lt={};function ft(e){let n,r,s;return{c(){n=m("a"),r=$(e[0]),this.h()},l(t){n=E(t,"A",{class:!0,"aria-current":!0,href:!0});var s=x(n);r=k(s,e[0]),s.forEach(h),this.h()},h(){y(n,"class",e[2]),y(n,"aria-current",s=e[1]===e[3]?"page":void 0),y(n,"href",e[3])},m(t,e){p(t,n,e),u(n,r)},p(t,[e]){1&e&&S(r,t[0]),4&e&&y(n,"class",t[2]),10&e&&s!==(s=t[1]===t[3]?"page":void 0)&&y(n,"aria-current",s),8&e&&y(n,"href",t[3])},i:t,o:t,d(t){t&&h(n)}}}function ut(t,e,n){let{text:r}=e,{segment:s}=e,{classes:o}=e,{linkk:c}=e;return t.$$set=t=>{"text"in t&&n(0,r=t.text),"segment"in t&&n(1,s=t.segment),"classes"in t&&n(2,o=t.classes),"linkk"in t&&n(3,c=t.linkk)},[r,s,o,c]}class pt extends ct{constructor(t){super(),ot(this,t,ut,ft,c,{text:0,segment:1,classes:2,linkk:3})}}function ht(t){let e,n,r,o,c,a,i,l,f,d,_,S,j,P,N,A,I,C,R,O,L,T,B,U,J,q,M,z,H,V,D,W,F,K,G,Q,Z,st,ot;return O=new pt({props:{text:"Home",classes:"lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400",linkk:".",segment:t[1]}}),B=new pt({props:{text:"About",classes:"lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400",linkk:"about",segment:t[1]}}),q=new pt({props:{text:"Services",classes:"lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400",linkk:"services",segment:t[1]}}),H=new pt({props:{text:"Portfolio",classes:"lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400",linkk:"portfolio",segment:t[1]}}),H.$on("click",t[2]),W=new pt({props:{text:"Blog",classes:"lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400",linkk:"posts",segment:t[1]}}),W.$on("click",t[2]),G=new pt({props:{text:"Contact",classes:"lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400",linkk:"contact",segment:t[1]}}),{c(){e=m("header"),n=m("div"),r=m("a"),o=m("span"),c=$("Webdesign Ninjas"),a=v(),i=m("label"),l=g("svg"),f=g("title"),d=$("menu"),_=g("path"),S=v(),j=m("input"),N=v(),A=m("div"),I=m("nav"),C=m("ul"),R=m("li"),tt(O.$$.fragment),L=v(),T=m("li"),tt(B.$$.fragment),U=v(),J=m("li"),tt(q.$$.fragment),M=v(),z=m("li"),tt(H.$$.fragment),V=v(),D=m("li"),tt(W.$$.fragment),F=v(),K=m("li"),tt(G.$$.fragment),this.h()},l(t){e=E(t,"HEADER",{class:!0});var s=x(e);n=E(s,"DIV",{class:!0});var u=x(n);r=E(u,"A",{href:!0});var p=x(r);o=E(p,"SPAN",{class:!0});var m=x(o);c=k(m,"Webdesign Ninjas"),m.forEach(h),p.forEach(h),u.forEach(h),a=w(s),i=E(s,"LABEL",{for:!0,class:!0});var g=x(i);l=E(g,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0},1);var $=x(l);f=E($,"title",{},1);var v=x(f);d=k(v,"menu"),v.forEach(h),_=E($,"path",{d:!0},1),x(_).forEach(h),$.forEach(h),g.forEach(h),S=w(s),j=E(s,"INPUT",{class:!0,type:!0,id:!0}),N=w(s),A=E(s,"DIV",{class:!0,id:!0});var b=x(A);I=E(b,"NAV",{});var y=x(I);C=E(y,"UL",{class:!0});var P=x(C);R=E(P,"LI",{});var Y=x(R);et(O.$$.fragment,Y),Y.forEach(h),L=w(P),T=E(P,"LI",{});var X=x(T);et(B.$$.fragment,X),X.forEach(h),U=w(P),J=E(P,"LI",{});var Q=x(J);et(q.$$.fragment,Q),Q.forEach(h),M=w(P),z=E(P,"LI",{});var Z=x(z);et(H.$$.fragment,Z),Z.forEach(h),V=w(P),D=E(P,"LI",{});var tt=x(D);et(W.$$.fragment,tt),tt.forEach(h),F=w(P),K=E(P,"LI",{});var nt=x(K);et(G.$$.fragment,nt),nt.forEach(h),P.forEach(h),y.forEach(h),b.forEach(h),s.forEach(h),this.h()},h(){y(o,"class","font-extrabold font-2xl"),y(r,"href","."),y(n,"class","flex-1 flex justify-between items-center"),y(_,"d","M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"),y(l,"class","fill-current text-gray-900"),y(l,"xmlns","http://www.w3.org/2000/svg"),y(l,"width","20"),y(l,"height","20"),y(l,"viewBox","0 0 20 20"),y(i,"for","menu-toggle"),y(i,"class","pointer-cursor lg:hidden block"),y(j,"class",P=t[0]?"hidden":""),y(j,"type","hidden"),y(j,"id","menu-toggle"),y(C,"class","lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"),y(A,"class",Q=(t[0]?"hidden":"")+" lg:flex lg:items-center lg:w-auto w-full"),y(A,"id","menu"),y(e,"class","lg:px-16 px-6 bg-gray-50 flex flex-wrap items-center lg:py-2 py-2")},m(s,h){p(s,e,h),u(e,n),u(n,r),u(r,o),u(o,c),u(e,a),u(e,i),u(i,l),u(l,f),u(f,d),u(l,_),u(e,S),u(e,j),u(e,N),u(e,A),u(A,I),u(I,C),u(C,R),nt(O,R,null),u(C,L),u(C,T),nt(B,T,null),u(C,U),u(C,J),nt(q,J,null),u(C,M),u(C,z),nt(H,z,null),u(C,V),u(C,D),nt(W,D,null),u(C,F),u(C,K),nt(G,K,null),Z=!0,st||(ot=[b(i,"click",t[2]),b(R,"click",t[2]),b(T,"click",t[2]),b(J,"click",t[2]),b(z,"click",t[2]),b(D,"click",t[2]),b(K,"click",t[2])],st=!0)},p(t,[e]){(!Z||1&e&&P!==(P=t[0]?"hidden":""))&&y(j,"class",P);const n={};2&e&&(n.segment=t[1]),O.$set(n);const r={};2&e&&(r.segment=t[1]),B.$set(r);const s={};2&e&&(s.segment=t[1]),q.$set(s);const o={};2&e&&(o.segment=t[1]),H.$set(o);const c={};2&e&&(c.segment=t[1]),W.$set(c);const a={};2&e&&(a.segment=t[1]),G.$set(a),(!Z||1&e&&Q!==(Q=(t[0]?"hidden":"")+" lg:flex lg:items-center lg:w-auto w-full"))&&y(A,"class",Q)},i(t){Z||(Y(O.$$.fragment,t),Y(B.$$.fragment,t),Y(q.$$.fragment,t),Y(H.$$.fragment,t),Y(W.$$.fragment,t),Y(G.$$.fragment,t),Z=!0)},o(t){X(O.$$.fragment,t),X(B.$$.fragment,t),X(q.$$.fragment,t),X(H.$$.fragment,t),X(W.$$.fragment,t),X(G.$$.fragment,t),Z=!1},d(t){t&&h(e),rt(O),rt(B),rt(q),rt(H),rt(W),rt(G),st=!1,s(ot)}}}function dt(t,e,n){let{segment:r}=e,{isOpen:s=!0}=e;return t.$$set=t=>{"segment"in t&&n(1,r=t.segment),"isOpen"in t&&n(0,s=t.isOpen)},[s,r,function(){n(0,s=!s)}]}class mt extends ct{constructor(t){super(),ot(this,t,dt,ht,c,{segment:1,isOpen:0})}}function gt(t,e,n){let{propertyId:r=""}=e,{chatId:s="default"}=e;return R((()=>{var t,e;t=document.createElement("script"),e=document.getElementsByTagName("script")[0],t.async=!0,t.src=`https://embed.tawk.to/${r}/${s}`,t.charset="UTF-8",t.setAttribute("crossorigin","*"),e.parentNode.insertBefore(t,e)})),t.$$set=t=>{"propertyId"in t&&n(0,r=t.propertyId),"chatId"in t&&n(1,s=t.chatId)},[r,s]}class $t extends ct{constructor(t){super(),ot(this,t,gt,null,c,{propertyId:0,chatId:1})}}function vt(e){let n,r,s,o,c,a,i,l,f,d,_,b,S,j,P,N,A,I,C,R,O,L,T,B,U,J,q,M,z,H,V,D,W,F,K;return F=new $t({props:{propertyId:"59f359984854b82732ff8281",chatId:"default"}}),{c(){n=m("footer"),r=m("div"),s=m("a"),o=g("svg"),c=g("path"),a=v(),i=m("span"),l=$("Webdesign Ninjas"),f=v(),d=m("p"),_=$("© 2021 Webdesign Ninjas —\r\n      "),b=m("a"),S=$("Shiv Srivastava"),j=v(),P=m("span"),N=m("a"),A=g("svg"),I=g("path"),C=v(),R=m("a"),O=g("svg"),L=g("path"),T=v(),B=m("a"),U=g("svg"),J=g("rect"),q=g("path"),M=v(),z=m("a"),H=g("svg"),V=g("path"),D=g("circle"),W=v(),tt(F.$$.fragment),this.h()},l(t){n=E(t,"FOOTER",{class:!0});var e=x(n);r=E(e,"DIV",{class:!0});var u=x(r);s=E(u,"A",{href:!0,class:!0});var p=x(s);o=E(p,"svg",{xmlns:!0,fill:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,class:!0,viewBox:!0},1);var m=x(o);c=E(m,"path",{d:!0},1),x(c).forEach(h),m.forEach(h),a=w(p),i=E(p,"SPAN",{class:!0});var g=x(i);l=k(g,"Webdesign Ninjas"),g.forEach(h),p.forEach(h),f=w(u),d=E(u,"P",{class:!0});var $=x(d);_=k($,"© 2021 Webdesign Ninjas —\r\n      "),b=E($,"A",{href:!0,class:!0,rel:!0,target:!0});var v=x(b);S=k(v,"Shiv Srivastava"),v.forEach(h),$.forEach(h),j=w(u),P=E(u,"SPAN",{class:!0});var y=x(P);N=E(y,"A",{href:!0,class:!0});var K=x(N);A=E(K,"svg",{fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,class:!0,viewBox:!0},1);var G=x(A);I=E(G,"path",{d:!0},1),x(I).forEach(h),G.forEach(h),K.forEach(h),C=w(y),R=E(y,"A",{href:!0,class:!0});var Y=x(R);O=E(Y,"svg",{fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,class:!0,viewBox:!0},1);var X=x(O);L=E(X,"path",{d:!0},1),x(L).forEach(h),X.forEach(h),Y.forEach(h),T=w(y),B=E(y,"A",{href:!0,class:!0});var Q=x(B);U=E(Q,"svg",{fill:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,class:!0,viewBox:!0},1);var Z=x(U);J=E(Z,"rect",{width:!0,height:!0,x:!0,y:!0,rx:!0,ry:!0},1),x(J).forEach(h),q=E(Z,"path",{d:!0},1),x(q).forEach(h),Z.forEach(h),Q.forEach(h),M=w(y),z=E(y,"A",{href:!0,class:!0});var tt=x(z);H=E(tt,"svg",{fill:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,class:!0,viewBox:!0},1);var nt=x(H);V=E(nt,"path",{stroke:!0,d:!0},1),x(V).forEach(h),D=E(nt,"circle",{cx:!0,cy:!0,r:!0,stroke:!0},1),x(D).forEach(h),nt.forEach(h),tt.forEach(h),y.forEach(h),u.forEach(h),W=w(e),et(F.$$.fragment,e),e.forEach(h),this.h()},h(){y(c,"d","M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"),y(o,"xmlns","http://www.w3.org/2000/svg"),y(o,"fill","none"),y(o,"stroke","currentColor"),y(o,"stroke-linecap","round"),y(o,"stroke-linejoin","round"),y(o,"stroke-width","2"),y(o,"class","w-10 h-10 text-white p-2 bg-pink-500 rounded-full"),y(o,"viewBox","0 0 24 24"),y(i,"class","ml-3 text-xl"),y(s,"href","."),y(s,"class","flex title-font font-medium items-center md:justify-start justify-center text-gray-900"),y(b,"href","https://twitter.com/@const_shiv"),y(b,"class","text-gray-600 ml-1"),y(b,"rel","noopener noreferrer"),y(b,"target","_blank"),y(d,"class","text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"),y(I,"d","M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"),y(A,"fill","currentColor"),y(A,"stroke-linecap","round"),y(A,"stroke-linejoin","round"),y(A,"stroke-width","2"),y(A,"class","w-5 h-5"),y(A,"viewBox","0 0 24 24"),y(N,"href","."),y(N,"class","text-gray-500"),y(L,"d","M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"),y(O,"fill","currentColor"),y(O,"stroke-linecap","round"),y(O,"stroke-linejoin","round"),y(O,"stroke-width","2"),y(O,"class","w-5 h-5"),y(O,"viewBox","0 0 24 24"),y(R,"href","."),y(R,"class","ml-3 text-gray-500"),y(J,"width","20"),y(J,"height","20"),y(J,"x","2"),y(J,"y","2"),y(J,"rx","5"),y(J,"ry","5"),y(q,"d","M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"),y(U,"fill","none"),y(U,"stroke","currentColor"),y(U,"stroke-linecap","round"),y(U,"stroke-linejoin","round"),y(U,"stroke-width","2"),y(U,"class","w-5 h-5"),y(U,"viewBox","0 0 24 24"),y(B,"href","."),y(B,"class","ml-3 text-gray-500"),y(V,"stroke","none"),y(V,"d","M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"),y(D,"cx","4"),y(D,"cy","4"),y(D,"r","2"),y(D,"stroke","none"),y(H,"fill","currentColor"),y(H,"stroke","currentColor"),y(H,"stroke-linecap","round"),y(H,"stroke-linejoin","round"),y(H,"stroke-width","0"),y(H,"class","w-5 h-5"),y(H,"viewBox","0 0 24 24"),y(z,"href","."),y(z,"class","ml-3 text-gray-500"),y(P,"class","inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"),y(r,"class","container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"),y(n,"class","text-white bg-gray-50 body-font")},m(t,e){p(t,n,e),u(n,r),u(r,s),u(s,o),u(o,c),u(s,a),u(s,i),u(i,l),u(r,f),u(r,d),u(d,_),u(d,b),u(b,S),u(r,j),u(r,P),u(P,N),u(N,A),u(A,I),u(P,C),u(P,R),u(R,O),u(O,L),u(P,T),u(P,B),u(B,U),u(U,J),u(U,q),u(P,M),u(P,z),u(z,H),u(H,V),u(H,D),u(n,W),nt(F,n,null),K=!0},p:t,i(t){K||(Y(F.$$.fragment,t),K=!0)},o(t){X(F.$$.fragment,t),K=!1},d(t){t&&h(n),rt(F)}}}class _t extends ct{constructor(t){super(),ot(this,t,null,vt,c,{})}}function bt(t){let e,n,r,s,o;e=new mt({props:{segment:t[0]}});const c=t[2].default,i=a(c,t,t[1],null);return s=new _t({}),{c(){tt(e.$$.fragment),n=v(),i&&i.c(),r=v(),tt(s.$$.fragment)},l(t){et(e.$$.fragment,t),n=w(t),i&&i.l(t),r=w(t),et(s.$$.fragment,t)},m(t,c){nt(e,t,c),p(t,n,c),i&&i.m(t,c),p(t,r,c),nt(s,t,c),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),i&&i.p&&(!o||2&n)&&l(i,c,t,t[1],n,null,null)},i(t){o||(Y(e.$$.fragment,t),Y(i,t),Y(s.$$.fragment,t),o=!0)},o(t){X(e.$$.fragment,t),X(i,t),X(s.$$.fragment,t),o=!1},d(t){rt(e,t),t&&h(n),i&&i.d(t),t&&h(r),rt(s,t)}}}function yt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class xt extends ct{constructor(t){super(),ot(this,t,yt,bt,c,{segment:0})}}function Et(t){let e,n,r=t[1].stack+"";return{c(){e=m("pre"),n=$(r)},l(t){e=E(t,"PRE",{});var s=x(e);n=k(s,r),s.forEach(h)},m(t,r){p(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&h(e)}}}function kt(e){let n,r,s,o,c,a,i,l,f,d=e[1].message+"";document.title=n=e[0];let g=e[2]&&e[1].stack&&Et(e);return{c(){r=v(),s=m("h1"),o=$(e[0]),c=v(),a=m("p"),i=$(d),l=v(),g&&g.c(),f=_(),this.h()},l(t){N('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(h),r=w(t),s=E(t,"H1",{class:!0});var n=x(s);o=k(n,e[0]),n.forEach(h),c=w(t),a=E(t,"P",{class:!0});var u=x(a);i=k(u,d),u.forEach(h),l=w(t),g&&g.l(t),f=_(),this.h()},h(){y(s,"class","svelte-8od9u6"),y(a,"class","svelte-8od9u6")},m(t,e){p(t,r,e),p(t,s,e),u(s,o),p(t,c,e),p(t,a,e),u(a,i),p(t,l,e),g&&g.m(t,e),p(t,f,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&S(o,t[0]),2&e&&d!==(d=t[1].message+"")&&S(i,d),t[2]&&t[1].stack?g?g.p(t,e):(g=Et(t),g.c(),g.m(f.parentNode,f)):g&&(g.d(1),g=null)},i:t,o:t,d(t){t&&h(r),t&&h(s),t&&h(c),t&&h(a),t&&h(l),g&&g.d(t),t&&h(f)}}}function wt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class St extends ct{constructor(t){super(),ot(this,t,wt,kt,c,{status:0,error:1})}}function jt(t){let n,r,s;const o=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&tt(n.$$.fragment),r=_()},l(t){n&&et(n.$$.fragment,t),r=_()},m(t,e){n&&nt(n,t,e),p(t,r,e),s=!0},p(t,e){const s=16&e?Q(o,[Z(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){K();const t=n;X(t.$$.fragment,1,0,(()=>{rt(t,1)})),G()}c?(n=new c(a()),tt(n.$$.fragment),Y(n.$$.fragment,1),nt(n,r.parentNode,r)):n=null}else c&&n.$set(s)},i(t){s||(n&&Y(n.$$.fragment,t),s=!0)},o(t){n&&X(n.$$.fragment,t),s=!1},d(t){t&&h(r),n&&rt(n,t)}}}function Pt(t){let e,n;return e=new St({props:{error:t[0],status:t[1]}}),{c(){tt(e.$$.fragment)},l(t){et(e.$$.fragment,t)},m(t,r){nt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){rt(e,t)}}}function Nt(t){let e,n,r,s;const o=[Pt,jt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=o[e](t),{c(){n.c(),r=_()},l(t){n.l(t),r=_()},m(t,n){c[e].m(t,n),p(t,r,n),s=!0},p(t,s){let i=e;e=a(t),e===i?c[e].p(t,s):(K(),X(c[i],1,1,(()=>{c[i]=null})),G(),n=c[e],n?n.p(t,s):(n=c[e]=o[e](t),n.c()),Y(n,1),n.m(r.parentNode,r))},i(t){s||(Y(n),s=!0)},o(t){X(n),s=!1},d(t){c[e].d(t),t&&h(r)}}}function At(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Nt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new xt({props:o}),{c(){tt(n.$$.fragment)},l(t){et(n.$$.fragment,t)},m(t,e){nt(n,t,e),r=!0},p(t,[e]){const r=12&e?Q(s,[4&e&&{segment:t[2][0]},8&e&&Z(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(Y(n.$$.fragment,t),r=!0)},o(t){X(n.$$.fragment,t),r=!1},d(t){rt(n,t)}}}function It(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var f,u,p;return f=l,C().$$.after_update.push(f),u=lt,p=r,C().$$.context.set(u,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,c,a,i,r,l]}class Ct extends ct{constructor(t){super(),ot(this,t,It,At,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Rt=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],Ot=[{js:()=>Promise.all([import("./index.d2769f30.js"),__inject_styles(["client-a2a37a6a.css","Image-25b76098.css","index-693bfac8.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./portfolio.8223cd08.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./services.42cde36b.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./contact.6f4c3195.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.fa8b517f.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[permalink].415402f5.js"),__inject_styles(["client-a2a37a6a.css","Tags-a88a6247.css","Image-25b76098.css","[permalink]-bc6e37f0.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./posts.20544ba0.js"),__inject_styles(["client-a2a37a6a.css","Tags-a88a6247.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.6e79cbe6.js"),__inject_styles(["client-a2a37a6a.css","index-7ed37c94.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].bfdc2843.js"),__inject_styles(["client-a2a37a6a.css","[slug]-5bc8f95f.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[tag].3cc721dc.js"),__inject_styles(["client-a2a37a6a.css","Tags-a88a6247.css"])]).then((function(t){return t[0]}))}],Lt=(Tt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/portfolio\/?$/,parts:[{i:1}]},{pattern:/^\/services\/?$/,parts:[{i:2}]},{pattern:/^\/contact\/?$/,parts:[{i:3}]},{pattern:/^\/about\/?$/,parts:[{i:4}]},{pattern:/^\/posts\/([^/]+?)\/?$/,parts:[null,{i:5,params:t=>({permalink:Tt(t[1])})}]},{pattern:/^\/posts\/?$/,parts:[{i:6}]},{pattern:/^\/blog\/?$/,parts:[{i:7}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:8,params:t=>({slug:Tt(t[1])})}]},{pattern:/^\/tag\/([^/]+?)\/?$/,parts:[null,{i:9,params:t=>({tag:Tt(t[1])})}]}]);var Tt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Bt(t,e,n,r){return new(n||(n=Promise))((function(s,o){function c(t){try{i(r.next(t))}catch(t){o(t)}}function a(t){try{i(r.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))}function Ut(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Jt,qt=1;const Mt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},zt={};let Ht,Vt;function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Wt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ht))return null;let e=t.pathname.slice(Ht.length);if(""===e&&(e="/"),!Rt.some((t=>t.test(e))))for(let n=0;n<Lt.length;n+=1){const r=Lt[n],s=r.pattern.exec(e);if(s){const n=Dt(t.search),o=r.parts[r.parts.length-1],c=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:s,page:a}}}}function Ft(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Ut(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Wt(s);if(o){Yt(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),Mt.pushState({id:Jt},"",s.href)}}function Kt(){return{x:pageXOffset,y:pageYOffset}}function Gt(t){if(zt[Jt]=Kt(),t.state){const e=Wt(new URL(location.href));e?Yt(e,t.state.id):location.href=location.href}else qt=qt+1,function(t){Jt=t}(qt),Mt.replaceState({id:Jt},"",location.href)}function Yt(t,e,n,r){return Bt(this,void 0,void 0,(function*(){const s=!!e;if(s)Jt=e;else{const t=Kt();zt[Jt]=t,Jt=e=++qt,zt[Jt]=n?t:{x:0,y:0}}if(yield Vt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=zt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),zt[Jt]=n,s||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Xt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Qt,Zt=null;function te(t){const e=Ut(t.target);e&&"prefetch"===e.rel&&function(t){const e=Wt(new URL(t,Xt(document)));if(e)Zt&&t===Zt.href||(Zt={href:t,promise:$e(e)}),Zt.promise}(e.href)}function ee(t){clearTimeout(Qt),Qt=setTimeout((()=>{te(t)}),20)}function ne(t,e={noscroll:!1,replaceState:!1}){const n=Wt(new URL(t,Xt(document)));return n?(Mt[e.replaceState?"replaceState":"pushState"]({id:Jt},"",t),Yt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const re="undefined"!=typeof __SAPPER__&&__SAPPER__;let se,oe,ce,ae=!1,ie=[],le="{}";const fe={page:function(t){const e=it(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:it(null),session:it(re&&re.session)};let ue,pe,he;function de(t,e){const{error:n}=t;return Object.assign({error:n},e)}function me(t){return Bt(this,void 0,void 0,(function*(){se&&fe.preloading.set(!0);const e=function(t){return Zt&&Zt.href===t.href?Zt.promise:$e(t)}(t),n=oe={},r=yield e,{redirect:s}=r;if(n===oe)if(s)yield ne(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ge(n,e,de(e,t.page))}}))}function ge(t,e,n){return Bt(this,void 0,void 0,(function*(){fe.page.set(n),fe.preloading.set(!1),se?se.$set(e):(e.stores={page:{subscribe:fe.page.subscribe},preloading:{subscribe:fe.preloading.subscribe},session:fe.session},e.level0={props:yield ce},e.notify=fe.page.notify,se=new Ct({target:he,props:e,hydrate:!0})),ie=t,le=JSON.stringify(n.query),ae=!0,pe=!1}))}function $e(t){return Bt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!ce){const t=()=>({});ce=re.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},ue)}let a,i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let f=!1;a=yield Promise.all(e.parts.map(((e,a)=>Bt(this,void 0,void 0,(function*(){const u=r[a];if(function(t,e,n,r){if(r!==le)return!0;const s=ie[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,u,l,s)&&(f=!0),o.segments[i]=r[a+1],!e)return{segment:u};const p=i++;if(!pe&&!f&&ie[a]&&ie[a].part===e.i)return ie[a];f=!1;const{default:h,preload:d}=yield Ot[e.i].js();let m;return m=ae||!re.preloaded[a+1]?d?yield d.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ue):{}:re.preloaded[a+1],o[`level${p}`]={component:h,props:m,segment:u,match:l,part:e.i}})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var ve,_e,be;fe.session.subscribe((t=>Bt(void 0,void 0,void 0,(function*(){if(ue=t,!ae)return;pe=!0;const e=Wt(new URL(location.href)),n=oe={},{redirect:r,props:s,branch:o}=yield $e(e);n===oe&&(r?yield ne(r.location,{replaceState:!0}):yield ge(o,s,de(s,e.page)))})))),ve={target:document.querySelector("#sapper")},_e=ve.target,he=_e,be=re.baseUrl,Ht=be,Vt=me,"scrollRestoration"in Mt&&(Mt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Mt.scrollRestoration="auto"})),addEventListener("load",(()=>{Mt.scrollRestoration="manual"})),addEventListener("click",Ft),addEventListener("popstate",Gt),addEventListener("touchstart",te),addEventListener("mousemove",ee),re.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:c}=re;ce||(ce=s&&s[0]);const a={error:c,status:o,session:r,level0:{props:ce},level1:{props:{status:o,error:c},component:St},segments:s},i=Dt(n);ge([],a,{host:t,path:e,query:i,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Mt.replaceState({id:qt},"",e);const n=Wt(new URL(location.href));if(n)return Yt(n,qt,!0,t)}));export{$ as A,k as B,t as C,N as D,R as E,_ as F,d as G,S as H,ct as S,X as a,x as b,E as c,h as d,m as e,y as f,p as g,f as h,ot as i,K as j,G as k,O as l,a as m,tt as n,et as o,nt as p,rt as q,v as r,c as s,Y as t,l as u,w as v,j as w,P as x,u as y,g as z};

import __inject_styles from './inject_styles.5607aec6.js';