function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function i(t,e,n,r,s,o,c){const i=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(i){const s=a(e,n,r,c);t.p(s,i)}}function l(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function v(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?d(e):h(e)}function x(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function E(t){return x(t," ")}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function j(t){S=t}function P(){if(!S)throw new Error("Function called outside component initialization");return S}function N(t){P().$$.on_mount.push(t)}const A=[],I=[],C=[],R=[],O=Promise.resolve();let L=!1;function B(t){C.push(t)}let T=!1;const M=new Set;function z(){if(!T){T=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];j(e),U(e.$$)}for(j(null),A.length=0;I.length;)I.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];M.has(e)||(M.add(e),e())}C.length=0}while(A.length);for(;R.length;)R.pop()();L=!1,T=!1,M.clear()}}function U(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const J=new Set;let H;function q(){H={r:0,c:[],p:H}}function V(){H.r||s(H.c),H=H.p}function W(t,e){t&&t.i&&(J.delete(t),t.i(e))}function D(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),H.c.push((()=>{J.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function K(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const c=t[o],a=e[o];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in c)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function G(t,e){t&&t.l(e)}function X(t,e,r,c){const{fragment:a,on_mount:i,on_destroy:l,after_update:f}=t.$$;a&&a.m(e,r),c||B((()=>{const e=i.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),f.forEach(B)}function Q(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(A.push(t),L||(L=!0,O.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,o,c,a,i,l=[-1]){const f=S;j(e);const p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),h&&Z(e,t)),n})):[],p.update(),h=!0,s(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=b(n.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();n.intro&&W(e.$$.fragment),X(e,n.target,n.anchor,n.customElement),z()}j(f)}class et{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt=[];function rt(e,n=t){let r;const s=[];function o(t){if(c(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(c,a=t){const i=[c,a];return s.push(i),1===s.length&&(r=n(o)||t),c(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const st={};function ot(e){let n,r,s;return{c(){n=h("a"),r=m(e[0]),this.h()},l(t){n=y(t,"A",{class:!0,"aria-current":!0,href:!0});var s=b(n);r=x(s,e[0]),s.forEach(u),this.h()},h(){_(n,"class",e[2]),_(n,"aria-current",s=e[1]===e[3]?"page":void 0),_(n,"href",e[3])},m(t,e){f(t,n,e),l(n,r)},p(t,[e]){1&e&&k(r,t[0]),4&e&&_(n,"class",t[2]),10&e&&s!==(s=t[1]===t[3]?"page":void 0)&&_(n,"aria-current",s),8&e&&_(n,"href",t[3])},i:t,o:t,d(t){t&&u(n)}}}function ct(t,e,n){let{text:r}=e,{segment:s}=e,{classes:o}=e,{linkk:c}=e;return t.$$set=t=>{"text"in t&&n(0,r=t.text),"segment"in t&&n(1,s=t.segment),"classes"in t&&n(2,o=t.classes),"linkk"in t&&n(3,c=t.linkk)},[r,s,o,c]}class at extends et{constructor(t){super(),tt(this,t,ct,ot,c,{text:0,segment:1,classes:2,linkk:3})}}function it(e){let n,r,s,o,c,a,i,p,$,v,k,w,S,j;return{c(){n=h("div"),r=h("a"),s=d("svg"),o=d("path"),c=d("path"),a=d("path"),i=d("path"),p=d("path"),$=d("path"),v=d("path"),k=d("path"),w=g(),S=h("span"),j=m("Webdesign Ninjas"),this.h()},l(t){n=y(t,"DIV",{class:!0});var e=b(n);r=y(e,"A",{href:!0,class:!0});var l=b(r);s=y(l,"svg",{class:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var f=b(s);o=y(f,"path",{d:!0},1),b(o).forEach(u),c=y(f,"path",{d:!0},1),b(c).forEach(u),a=y(f,"path",{d:!0},1),b(a).forEach(u),i=y(f,"path",{d:!0},1),b(i).forEach(u),p=y(f,"path",{d:!0},1),b(p).forEach(u),$=y(f,"path",{d:!0},1),b($).forEach(u),v=y(f,"path",{d:!0},1),b(v).forEach(u),k=y(f,"path",{d:!0},1),b(k).forEach(u),f.forEach(u),w=E(l),S=y(l,"SPAN",{class:!0});var h=b(S);j=x(h,"Webdesign Ninjas"),h.forEach(u),l.forEach(u),e.forEach(u),this.h()},h(){_(o,"d","M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"),_(c,"d","M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"),_(a,"d","M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"),_(i,"d","M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"),_(p,"d","M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"),_($,"d","M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"),_(v,"d","M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"),_(k,"d","M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"),_(s,"class","h-6 w-6 text-pink-500"),_(s,"viewBox","0 0 24 24"),_(s,"fill","none"),_(s,"stroke","currentColor"),_(s,"stroke-width","2"),_(s,"stroke-linecap","round"),_(s,"stroke-linejoin","round"),_(S,"class","font-extrabold font-2xl ml-1"),_(r,"href","."),_(r,"class","flex flex-nowrap inline"),_(n,"class","flex-1 flex justify-between items-start")},m(t,e){f(t,n,e),l(n,r),l(r,s),l(s,o),l(s,c),l(s,a),l(s,i),l(s,p),l(s,$),l(s,v),l(s,k),l(r,w),l(r,S),l(S,j)},p:t,i:t,o:t,d(t){t&&u(n)}}}class lt extends et{constructor(t){super(),tt(this,t,null,it,c,{})}}function ft(t){let e,n,r,o,c,a,i,p,$,k,w,S,j,P,N,A,I,C,R,O,L,B,T,M,z,U,J,H,q,V,K,F,Z,tt,et,nt;return n=new lt({}),I=new at({props:{text:"Home",classes:"lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400",linkk:".",segment:t[1]}}),O=new at({props:{text:"About",classes:"lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400",linkk:"about",segment:t[1]}}),T=new at({props:{text:"Services",classes:"lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400",linkk:"services",segment:t[1]}}),U=new at({props:{text:"Portfolio",classes:"lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400",linkk:"portfolio",segment:t[1]}}),U.$on("click",t[2]),q=new at({props:{text:"Blog",classes:"lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400",linkk:"posts",segment:t[1]}}),q.$on("click",t[2]),F=new at({props:{text:"Contact",classes:"lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400",linkk:"contact",segment:t[1]}}),{c(){e=h("header"),Y(n.$$.fragment),r=g(),o=h("label"),c=d("svg"),a=d("title"),i=m("menu"),p=d("path"),$=g(),k=h("input"),S=g(),j=h("div"),P=h("nav"),N=h("ul"),A=h("li"),Y(I.$$.fragment),C=g(),R=h("li"),Y(O.$$.fragment),L=g(),B=h("li"),Y(T.$$.fragment),M=g(),z=h("li"),Y(U.$$.fragment),J=g(),H=h("li"),Y(q.$$.fragment),V=g(),K=h("li"),Y(F.$$.fragment),this.h()},l(t){e=y(t,"HEADER",{class:!0});var s=b(e);G(n.$$.fragment,s),r=E(s),o=y(s,"LABEL",{for:!0,class:!0});var l=b(o);c=y(l,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0},1);var f=b(c);a=y(f,"title",{},1);var h=b(a);i=x(h,"menu"),h.forEach(u),p=y(f,"path",{d:!0},1),b(p).forEach(u),f.forEach(u),l.forEach(u),$=E(s),k=y(s,"INPUT",{class:!0,type:!0,id:!0}),S=E(s),j=y(s,"DIV",{class:!0,id:!0});var d=b(j);P=y(d,"NAV",{});var m=b(P);N=y(m,"UL",{class:!0});var g=b(N);A=y(g,"LI",{});var v=b(A);G(I.$$.fragment,v),v.forEach(u),C=E(g),R=y(g,"LI",{});var _=b(R);G(O.$$.fragment,_),_.forEach(u),L=E(g),B=y(g,"LI",{});var w=b(B);G(T.$$.fragment,w),w.forEach(u),M=E(g),z=y(g,"LI",{});var W=b(z);G(U.$$.fragment,W),W.forEach(u),J=E(g),H=y(g,"LI",{});var D=b(H);G(q.$$.fragment,D),D.forEach(u),V=E(g),K=y(g,"LI",{});var Y=b(K);G(F.$$.fragment,Y),Y.forEach(u),g.forEach(u),m.forEach(u),d.forEach(u),s.forEach(u),this.h()},h(){_(p,"d","M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"),_(c,"class","fill-current text-gray-900"),_(c,"xmlns","http://www.w3.org/2000/svg"),_(c,"width","20"),_(c,"height","20"),_(c,"viewBox","0 0 20 20"),_(o,"for","menu-toggle"),_(o,"class","pointer-cursor lg:hidden block"),_(k,"class",w=t[0]?"hidden":""),_(k,"type","hidden"),_(k,"id","menu-toggle"),_(N,"class","lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"),_(j,"class",Z=(t[0]?"hidden":"")+" lg:flex lg:items-center lg:w-auto w-full"),_(j,"id","menu"),_(e,"class","lg:px-16 px-6 bg-gray-50 flex flex-wrap items-center lg:py-2 py-2")},m(s,u){f(s,e,u),X(n,e,null),l(e,r),l(e,o),l(o,c),l(c,a),l(a,i),l(c,p),l(e,$),l(e,k),l(e,S),l(e,j),l(j,P),l(P,N),l(N,A),X(I,A,null),l(N,C),l(N,R),X(O,R,null),l(N,L),l(N,B),X(T,B,null),l(N,M),l(N,z),X(U,z,null),l(N,J),l(N,H),X(q,H,null),l(N,V),l(N,K),X(F,K,null),tt=!0,et||(nt=[v(o,"click",t[2]),v(A,"click",t[2]),v(R,"click",t[2]),v(B,"click",t[2]),v(z,"click",t[2]),v(H,"click",t[2]),v(K,"click",t[2])],et=!0)},p(t,[e]){(!tt||1&e&&w!==(w=t[0]?"hidden":""))&&_(k,"class",w);const n={};2&e&&(n.segment=t[1]),I.$set(n);const r={};2&e&&(r.segment=t[1]),O.$set(r);const s={};2&e&&(s.segment=t[1]),T.$set(s);const o={};2&e&&(o.segment=t[1]),U.$set(o);const c={};2&e&&(c.segment=t[1]),q.$set(c);const a={};2&e&&(a.segment=t[1]),F.$set(a),(!tt||1&e&&Z!==(Z=(t[0]?"hidden":"")+" lg:flex lg:items-center lg:w-auto w-full"))&&_(j,"class",Z)},i(t){tt||(W(n.$$.fragment,t),W(I.$$.fragment,t),W(O.$$.fragment,t),W(T.$$.fragment,t),W(U.$$.fragment,t),W(q.$$.fragment,t),W(F.$$.fragment,t),tt=!0)},o(t){D(n.$$.fragment,t),D(I.$$.fragment,t),D(O.$$.fragment,t),D(T.$$.fragment,t),D(U.$$.fragment,t),D(q.$$.fragment,t),D(F.$$.fragment,t),tt=!1},d(t){t&&u(e),Q(n),Q(I),Q(O),Q(T),Q(U),Q(q),Q(F),et=!1,s(nt)}}}function ut(t,e,n){let{segment:r}=e,{isOpen:s=!0}=e;return t.$$set=t=>{"segment"in t&&n(1,r=t.segment),"isOpen"in t&&n(0,s=t.isOpen)},[s,r,function(){n(0,s=!s)}]}class pt extends et{constructor(t){super(),tt(this,t,ut,ft,c,{segment:1,isOpen:0})}}function ht(t,e,n){let{propertyId:r=""}=e,{chatId:s="default"}=e;return N((()=>{var t,e;t=document.createElement("script"),e=document.getElementsByTagName("script")[0],t.async=!0,t.src=`https://embed.tawk.to/${r}/${s}`,t.charset="UTF-8",t.setAttribute("crossorigin","*"),e.parentNode.insertBefore(t,e)})),t.$$set=t=>{"propertyId"in t&&n(0,r=t.propertyId),"chatId"in t&&n(1,s=t.chatId)},[r,s]}class dt extends et{constructor(t){super(),tt(this,t,ht,null,c,{propertyId:0,chatId:1})}}function mt(e){let n,r,s,o,c,a,i,p,$,v,k,w,S,j,P,N,A,I,C,R,O,L,B,T,M,z,U,J,H,q,V,K,F,Z,tt;return Z=new dt({props:{propertyId:"59f359984854b82732ff8281",chatId:"default"}}),{c(){n=h("footer"),r=h("div"),s=h("a"),o=d("svg"),c=d("path"),a=g(),i=h("span"),p=m("Webdesign Ninjas"),$=g(),v=h("p"),k=m("© 2021 Webdesign Ninjas —\r\n      "),w=h("a"),S=m("Shiv Srivastava"),j=g(),P=h("span"),N=h("a"),A=d("svg"),I=d("path"),C=g(),R=h("a"),O=d("svg"),L=d("path"),B=g(),T=h("a"),M=d("svg"),z=d("rect"),U=d("path"),J=g(),H=h("a"),q=d("svg"),V=d("path"),K=d("circle"),F=g(),Y(Z.$$.fragment),this.h()},l(t){n=y(t,"FOOTER",{class:!0});var e=b(n);r=y(e,"DIV",{class:!0});var l=b(r);s=y(l,"A",{href:!0,class:!0});var f=b(s);o=y(f,"svg",{xmlns:!0,fill:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,class:!0,viewBox:!0},1);var h=b(o);c=y(h,"path",{d:!0},1),b(c).forEach(u),h.forEach(u),a=E(f),i=y(f,"SPAN",{class:!0});var d=b(i);p=x(d,"Webdesign Ninjas"),d.forEach(u),f.forEach(u),$=E(l),v=y(l,"P",{class:!0});var m=b(v);k=x(m,"© 2021 Webdesign Ninjas —\r\n      "),w=y(m,"A",{href:!0,class:!0,rel:!0,target:!0});var g=b(w);S=x(g,"Shiv Srivastava"),g.forEach(u),m.forEach(u),j=E(l),P=y(l,"SPAN",{class:!0});var _=b(P);N=y(_,"A",{href:!0,class:!0});var W=b(N);A=y(W,"svg",{fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,class:!0,viewBox:!0},1);var D=b(A);I=y(D,"path",{d:!0},1),b(I).forEach(u),D.forEach(u),W.forEach(u),C=E(_),R=y(_,"A",{href:!0,class:!0});var Y=b(R);O=y(Y,"svg",{fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,class:!0,viewBox:!0},1);var X=b(O);L=y(X,"path",{d:!0},1),b(L).forEach(u),X.forEach(u),Y.forEach(u),B=E(_),T=y(_,"A",{href:!0,class:!0});var Q=b(T);M=y(Q,"svg",{fill:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,class:!0,viewBox:!0},1);var tt=b(M);z=y(tt,"rect",{width:!0,height:!0,x:!0,y:!0,rx:!0,ry:!0},1),b(z).forEach(u),U=y(tt,"path",{d:!0},1),b(U).forEach(u),tt.forEach(u),Q.forEach(u),J=E(_),H=y(_,"A",{href:!0,class:!0});var et=b(H);q=y(et,"svg",{fill:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,class:!0,viewBox:!0},1);var nt=b(q);V=y(nt,"path",{stroke:!0,d:!0},1),b(V).forEach(u),K=y(nt,"circle",{cx:!0,cy:!0,r:!0,stroke:!0},1),b(K).forEach(u),nt.forEach(u),et.forEach(u),_.forEach(u),l.forEach(u),F=E(e),G(Z.$$.fragment,e),e.forEach(u),this.h()},h(){_(c,"d","M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"),_(o,"xmlns","http://www.w3.org/2000/svg"),_(o,"fill","none"),_(o,"stroke","currentColor"),_(o,"stroke-linecap","round"),_(o,"stroke-linejoin","round"),_(o,"stroke-width","2"),_(o,"class","w-10 h-10 text-white p-2 bg-pink-500 rounded-full"),_(o,"viewBox","0 0 24 24"),_(i,"class","ml-3 text-xl"),_(s,"href","."),_(s,"class","flex title-font font-medium items-center md:justify-start justify-center text-gray-900"),_(w,"href","https://twitter.com/@const_shiv"),_(w,"class","text-gray-600 ml-1"),_(w,"rel","noopener noreferrer"),_(w,"target","_blank"),_(v,"class","text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"),_(I,"d","M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"),_(A,"fill","currentColor"),_(A,"stroke-linecap","round"),_(A,"stroke-linejoin","round"),_(A,"stroke-width","2"),_(A,"class","w-5 h-5"),_(A,"viewBox","0 0 24 24"),_(N,"href","."),_(N,"class","text-gray-500"),_(L,"d","M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"),_(O,"fill","currentColor"),_(O,"stroke-linecap","round"),_(O,"stroke-linejoin","round"),_(O,"stroke-width","2"),_(O,"class","w-5 h-5"),_(O,"viewBox","0 0 24 24"),_(R,"href","."),_(R,"class","ml-3 text-gray-500"),_(z,"width","20"),_(z,"height","20"),_(z,"x","2"),_(z,"y","2"),_(z,"rx","5"),_(z,"ry","5"),_(U,"d","M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"),_(M,"fill","none"),_(M,"stroke","currentColor"),_(M,"stroke-linecap","round"),_(M,"stroke-linejoin","round"),_(M,"stroke-width","2"),_(M,"class","w-5 h-5"),_(M,"viewBox","0 0 24 24"),_(T,"href","."),_(T,"class","ml-3 text-gray-500"),_(V,"stroke","none"),_(V,"d","M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"),_(K,"cx","4"),_(K,"cy","4"),_(K,"r","2"),_(K,"stroke","none"),_(q,"fill","currentColor"),_(q,"stroke","currentColor"),_(q,"stroke-linecap","round"),_(q,"stroke-linejoin","round"),_(q,"stroke-width","0"),_(q,"class","w-5 h-5"),_(q,"viewBox","0 0 24 24"),_(H,"href","."),_(H,"class","ml-3 text-gray-500"),_(P,"class","inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"),_(r,"class","container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"),_(n,"class","text-white bg-gray-50 body-font")},m(t,e){f(t,n,e),l(n,r),l(r,s),l(s,o),l(o,c),l(s,a),l(s,i),l(i,p),l(r,$),l(r,v),l(v,k),l(v,w),l(w,S),l(r,j),l(r,P),l(P,N),l(N,A),l(A,I),l(P,C),l(P,R),l(R,O),l(O,L),l(P,B),l(P,T),l(T,M),l(M,z),l(M,U),l(P,J),l(P,H),l(H,q),l(q,V),l(q,K),l(n,F),X(Z,n,null),tt=!0},p:t,i(t){tt||(W(Z.$$.fragment,t),tt=!0)},o(t){D(Z.$$.fragment,t),tt=!1},d(t){t&&u(n),Q(Z)}}}class gt extends et{constructor(t){super(),tt(this,t,null,mt,c,{})}}function $t(t){let e,n,r,s,o;e=new pt({props:{segment:t[0]}});const c=t[2].default,l=function(t,e,n,r){if(t){const s=a(t,e,n,r);return t[0](s)}}(c,t,t[1],null);return s=new gt({}),{c(){Y(e.$$.fragment),n=g(),l&&l.c(),r=g(),Y(s.$$.fragment)},l(t){G(e.$$.fragment,t),n=E(t),l&&l.l(t),r=E(t),G(s.$$.fragment,t)},m(t,c){X(e,t,c),f(t,n,c),l&&l.m(t,c),f(t,r,c),X(s,t,c),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),l&&l.p&&(!o||2&n)&&i(l,c,t,t[1],n,null,null)},i(t){o||(W(e.$$.fragment,t),W(l,t),W(s.$$.fragment,t),o=!0)},o(t){D(e.$$.fragment,t),D(l,t),D(s.$$.fragment,t),o=!1},d(t){Q(e,t),t&&u(n),l&&l.d(t),t&&u(r),Q(s,t)}}}function vt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class _t extends et{constructor(t){super(),tt(this,t,vt,$t,c,{segment:0})}}function bt(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=m(r)},l(t){e=y(t,"PRE",{});var s=b(e);n=x(s,r),s.forEach(u)},m(t,r){f(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&k(n,r)},d(t){t&&u(e)}}}function yt(e){let n,r,s,o,c,a,i,p,d,v=e[1].message+"";document.title=n=e[0];let S=e[2]&&e[1].stack&&bt(e);return{c(){r=g(),s=h("h1"),o=m(e[0]),c=g(),a=h("p"),i=m(v),p=g(),S&&S.c(),d=$(),this.h()},l(t){w('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=E(t),s=y(t,"H1",{class:!0});var n=b(s);o=x(n,e[0]),n.forEach(u),c=E(t),a=y(t,"P",{class:!0});var l=b(a);i=x(l,v),l.forEach(u),p=E(t),S&&S.l(t),d=$(),this.h()},h(){_(s,"class","svelte-8od9u6"),_(a,"class","svelte-8od9u6")},m(t,e){f(t,r,e),f(t,s,e),l(s,o),f(t,c,e),f(t,a,e),l(a,i),f(t,p,e),S&&S.m(t,e),f(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&k(o,t[0]),2&e&&v!==(v=t[1].message+"")&&k(i,v),t[2]&&t[1].stack?S?S.p(t,e):(S=bt(t),S.c(),S.m(d.parentNode,d)):S&&(S.d(1),S=null)},i:t,o:t,d(t){t&&u(r),t&&u(s),t&&u(c),t&&u(a),t&&u(p),S&&S.d(t),t&&u(d)}}}function xt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Et extends et{constructor(t){super(),tt(this,t,xt,yt,c,{status:0,error:1})}}function kt(t){let n,r,s;const o=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&Y(n.$$.fragment),r=$()},l(t){n&&G(n.$$.fragment,t),r=$()},m(t,e){n&&X(n,t,e),f(t,r,e),s=!0},p(t,e){const s=16&e?K(o,[F(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){q();const t=n;D(t.$$.fragment,1,0,(()=>{Q(t,1)})),V()}c?(n=new c(a()),Y(n.$$.fragment),W(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else c&&n.$set(s)},i(t){s||(n&&W(n.$$.fragment,t),s=!0)},o(t){n&&D(n.$$.fragment,t),s=!1},d(t){t&&u(r),n&&Q(n,t)}}}function wt(t){let e,n;return e=new Et({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function St(t){let e,n,r,s;const o=[wt,kt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=o[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){c[e].m(t,n),f(t,r,n),s=!0},p(t,s){let i=e;e=a(t),e===i?c[e].p(t,s):(q(),D(c[i],1,1,(()=>{c[i]=null})),V(),n=c[e],n?n.p(t,s):(n=c[e]=o[e](t),n.c()),W(n,1),n.m(r.parentNode,r))},i(t){s||(W(n),s=!0)},o(t){D(n),s=!1},d(t){c[e].d(t),t&&u(r)}}}function jt(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[St]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new _t({props:o}),{c(){Y(n.$$.fragment)},l(t){G(n.$$.fragment,t)},m(t,e){X(n,t,e),r=!0},p(t,[e]){const r=12&e?K(s,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(W(n.$$.fragment,t),r=!0)},o(t){D(n.$$.fragment,t),r=!1},d(t){Q(n,t)}}}function Pt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var f,u,p;return f=l,P().$$.after_update.push(f),u=st,p=r,P().$$.context.set(u,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,c,a,i,r,l]}class Nt extends et{constructor(t){super(),tt(this,t,Pt,jt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const At=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],It=[{js:()=>Promise.all([import("./index.8b1ceead.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./portfolio.64010cad.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./services.954482d6.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./contact.c8395051.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.6f0cd37b.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[permalink].20fb7c77.js"),__inject_styles(["client-a2a37a6a.css","Sidebar-a88a6247.css","[permalink]-87969caa.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./posts.54af93d2.js"),__inject_styles(["client-a2a37a6a.css","Sidebar-a88a6247.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.7d4967bd.js"),__inject_styles(["client-a2a37a6a.css","index-7ed37c94.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].f4df8401.js"),__inject_styles(["client-a2a37a6a.css","[slug]-5bc8f95f.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[tag].85d1ca83.js"),__inject_styles(["client-a2a37a6a.css","Sidebar-a88a6247.css"])]).then((function(t){return t[0]}))}],Ct=(Rt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/portfolio\/?$/,parts:[{i:1}]},{pattern:/^\/services\/?$/,parts:[{i:2}]},{pattern:/^\/contact\/?$/,parts:[{i:3}]},{pattern:/^\/about\/?$/,parts:[{i:4}]},{pattern:/^\/posts\/([^/]+?)\/?$/,parts:[null,{i:5,params:t=>({permalink:Rt(t[1])})}]},{pattern:/^\/posts\/?$/,parts:[{i:6}]},{pattern:/^\/blog\/?$/,parts:[{i:7}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:8,params:t=>({slug:Rt(t[1])})}]},{pattern:/^\/tag\/([^/]+?)\/?$/,parts:[null,{i:9,params:t=>({tag:Rt(t[1])})}]}]);var Rt;
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
function Ot(t,e,n,r){return new(n||(n=Promise))((function(s,o){function c(t){try{i(r.next(t))}catch(t){o(t)}}function a(t){try{i(r.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))}function Lt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Bt,Tt=1;const Mt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},zt={};let Ut,Jt;function Ht(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function qt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ut))return null;let e=t.pathname.slice(Ut.length);if(""===e&&(e="/"),!At.some((t=>t.test(e))))for(let n=0;n<Ct.length;n+=1){const r=Ct[n],s=r.pattern.exec(e);if(s){const n=Ht(t.search),o=r.parts[r.parts.length-1],c=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:s,page:a}}}}function Vt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Lt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=qt(s);if(o){Kt(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),Mt.pushState({id:Bt},"",s.href)}}function Wt(){return{x:pageXOffset,y:pageYOffset}}function Dt(t){if(zt[Bt]=Wt(),t.state){const e=qt(new URL(location.href));e?Kt(e,t.state.id):location.href=location.href}else Tt=Tt+1,function(t){Bt=t}(Tt),Mt.replaceState({id:Bt},"",location.href)}function Kt(t,e,n,r){return Ot(this,void 0,void 0,(function*(){const s=!!e;if(s)Bt=e;else{const t=Wt();zt[Bt]=t,Bt=e=++Tt,zt[Bt]=n?t:{x:0,y:0}}if(yield Jt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=zt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),zt[Bt]=n,s||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ft(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Yt,Gt=null;function Xt(t){const e=Lt(t.target);e&&"prefetch"===e.rel&&function(t){const e=qt(new URL(t,Ft(document)));if(e)Gt&&t===Gt.href||(Gt={href:t,promise:de(e)}),Gt.promise}(e.href)}function Qt(t){clearTimeout(Yt),Yt=setTimeout((()=>{Xt(t)}),20)}function Zt(t,e={noscroll:!1,replaceState:!1}){const n=qt(new URL(t,Ft(document)));return n?(Mt[e.replaceState?"replaceState":"pushState"]({id:Bt},"",t),Kt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const te="undefined"!=typeof __SAPPER__&&__SAPPER__;let ee,ne,re,se=!1,oe=[],ce="{}";const ae={page:function(t){const e=rt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:rt(null),session:rt(te&&te.session)};let ie,le,fe;function ue(t,e){const{error:n}=t;return Object.assign({error:n},e)}function pe(t){return Ot(this,void 0,void 0,(function*(){ee&&ae.preloading.set(!0);const e=function(t){return Gt&&Gt.href===t.href?Gt.promise:de(t)}(t),n=ne={},r=yield e,{redirect:s}=r;if(n===ne)if(s)yield Zt(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield he(n,e,ue(e,t.page))}}))}function he(t,e,n){return Ot(this,void 0,void 0,(function*(){ae.page.set(n),ae.preloading.set(!1),ee?ee.$set(e):(e.stores={page:{subscribe:ae.page.subscribe},preloading:{subscribe:ae.preloading.subscribe},session:ae.session},e.level0={props:yield re},e.notify=ae.page.notify,ee=new Nt({target:fe,props:e,hydrate:!0})),oe=t,ce=JSON.stringify(n.query),se=!0,le=!1}))}function de(t){return Ot(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!re){const t=()=>({});re=te.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},ie)}let a,i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let f=!1;a=yield Promise.all(e.parts.map(((e,a)=>Ot(this,void 0,void 0,(function*(){const u=r[a];if(function(t,e,n,r){if(r!==ce)return!0;const s=oe[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,u,l,s)&&(f=!0),o.segments[i]=r[a+1],!e)return{segment:u};const p=i++;if(!le&&!f&&oe[a]&&oe[a].part===e.i)return oe[a];f=!1;const{default:h,preload:d}=yield It[e.i].js();let m;return m=se||!te.preloaded[a+1]?d?yield d.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ie):{}:te.preloaded[a+1],o[`level${p}`]={component:h,props:m,segment:u,match:l,part:e.i}})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var me,ge,$e;ae.session.subscribe((t=>Ot(void 0,void 0,void 0,(function*(){if(ie=t,!se)return;le=!0;const e=qt(new URL(location.href)),n=ne={},{redirect:r,props:s,branch:o}=yield de(e);n===ne&&(r?yield Zt(r.location,{replaceState:!0}):yield he(o,s,ue(s,e.page)))})))),me={target:document.querySelector("#sapper")},ge=me.target,fe=ge,$e=te.baseUrl,Ut=$e,Jt=pe,"scrollRestoration"in Mt&&(Mt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Mt.scrollRestoration="auto"})),addEventListener("load",(()=>{Mt.scrollRestoration="manual"})),addEventListener("click",Vt),addEventListener("popstate",Dt),addEventListener("touchstart",Xt),addEventListener("mousemove",Qt),te.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:c}=te;re||(re=s&&s[0]);const a={error:c,status:o,session:r,level0:{props:re},level1:{props:{status:o,error:c},component:Et},segments:s},i=Ht(n);he([],a,{host:t,path:e,query:i,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Mt.replaceState({id:Tt},"",e);const n=qt(new URL(location.href));if(n)return Kt(n,Tt,!0,t)}));export{q as A,V as B,et as S,d as a,g as b,y as c,b as d,h as e,u as f,E as g,x as h,tt as i,_ as j,f as k,l,Y as m,t as n,G as o,X as p,w as q,W as r,c as s,m as t,D as u,Q as v,N as w,$ as x,p as y,k as z};

import __inject_styles from './inject_styles.5607aec6.js';