import{S as s,i as t,s as a,b as e,m as r,e as l,q as m,f as o,g as n,o as f,c,d as i,j as p,k as d,p as g,l as x,r as $,u,v as w}from"./client.04308afa.js";import{a as h,B as v,S as y}from"./Sidebar.1d64db6b.js";import{P as b}from"./PostList.62b14b02.js";function E(s){let t,a,h,E,j,I,L,S,A,D,V,P;return document.title=t="Latest Articles for "+s[0],h=new v({props:{title1:"Latest Articles for ",title2:s[0]}}),S=new b({props:{posts:s[1]}}),V=new y({}),{c(){a=e(),r(h.$$.fragment),E=e(),j=l("section"),I=l("div"),L=l("div"),r(S.$$.fragment),A=e(),D=l("div"),r(V.$$.fragment),this.h()},l(s){m('[data-svelte="svelte-or9t1u"]',document.head).forEach(o),a=n(s),f(h.$$.fragment,s),E=n(s),j=c(s,"SECTION",{class:!0});var t=i(j);I=c(t,"DIV",{class:!0});var e=i(I);L=c(e,"DIV",{class:!0});var r=i(L);f(S.$$.fragment,r),r.forEach(o),A=n(e),D=c(e,"DIV",{class:!0});var l=i(D);f(V.$$.fragment,l),l.forEach(o),e.forEach(o),t.forEach(o),this.h()},h(){p(L,"class","container my-1 px-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:px-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3 bg-gray-50"),p(D,"class","containermy-6 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"),p(I,"class","flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2"),p(j,"class","text-gray-600 body-font relative mb-4")},m(s,t){d(s,a,t),g(h,s,t),d(s,E,t),d(s,j,t),x(j,I),x(I,L),g(S,L,null),x(I,A),x(I,D),g(V,D,null),P=!0},p(s,[a]){(!P||1&a)&&t!==(t="Latest Articles for "+s[0])&&(document.title=t);const e={};1&a&&(e.title2=s[0]),h.$set(e);const r={};2&a&&(r.posts=s[1]),S.$set(r)},i(s){P||($(h.$$.fragment,s),$(S.$$.fragment,s),$(V.$$.fragment,s),P=!0)},o(s){u(h.$$.fragment,s),u(S.$$.fragment,s),u(V.$$.fragment,s),P=!1},d(s){s&&o(a),w(h,s),s&&o(E),s&&o(j),w(S),w(V)}}}function j(s){const{tag:t}=s.params;return{tag:t,posts:h(t)}}function I(s,t,a){let{tag:e}=t,{posts:r}=t;return s.$$set=s=>{"tag"in s&&a(0,e=s.tag),"posts"in s&&a(1,r=s.posts)},[e,r]}export default class extends s{constructor(s){super(),t(this,s,I,E,a,{tag:0,posts:1})}}export{j as preload};
