const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};I();function b(){}function C(e){return e()}function O(){return Object.create(null)}function h(e){e.forEach(C)}function M(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function z(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function D(e,t,n){e.insertBefore(t,n||null)}function B(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function j(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function F(e){return function(t){return t.preventDefault(),e.call(this,t)}}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function K(e){return Array.from(e.childNodes)}function N(e,t){e.value=t==null?"":t}let w;function p(e){w=e}const d=[],S=[],_=[],P=[],T=Promise.resolve();let v=!1;function V(){v||(v=!0,T.then(G))}function $(e){_.push(e)}const x=new Set;let g=0;function G(){const e=w;do{for(;g<d.length;){const t=d[g];g++,p(t),H(t.$$)}for(p(null),d.length=0,g=0;S.length;)S.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];x.has(n)||(x.add(n),n())}_.length=0}while(d.length);for(;P.length;)P.pop()();v=!1,x.clear(),p(e)}function H(e){if(e.fragment!==null){e.update(),h(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}const J=new Set;function Q(e,t){e&&e.i&&(J.delete(e),e.i(t))}function R(e,t,n,o){const{fragment:r,on_mount:i,on_destroy:s,after_update:c}=e.$$;r&&r.m(t,n),o||$(()=>{const u=i.map(C).filter(M);s?s.push(...u):h(u),e.$$.on_mount=[]}),c.forEach($)}function U(e,t){const n=e.$$;n.fragment!==null&&(h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,t){e.$$.dirty[0]===-1&&(d.push(e),V(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,o,r,i,s,c=[-1]){const u=w;p(e);const l=e.$$={fragment:null,ctx:null,props:i,update:b,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:O(),dirty:c,skip_bound:!1,root:t.target||u.$$.root};s&&s(l.root);let k=!1;if(l.ctx=n?n(e,t.props||{},(f,E,...A)=>{const L=A.length?A[0]:E;return l.ctx&&r(l.ctx[f],l.ctx[f]=L)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](L),k&&W(e,f)),E}):[],l.update(),k=!0,h(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const f=K(t.target);l.fragment&&l.fragment.l(f),f.forEach(B)}else l.fragment&&l.fragment.c();t.intro&&Q(e.$$.fragment),R(e,t.target,t.anchor,t.customElement),G()}p(u)}class Y{$destroy(){U(this,1),this.$destroy=b}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!z(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Z(e){let t,n,o,r,i,s;return{c(){t=m("main"),n=m("div"),o=m("form"),r=m("input"),a(r,"type","text"),a(r,"width","800"),a(r,"height","90"),a(r,"placeholder","Para guardar, Enter \u23CE"),a(r,"class","svelte-roxbrb"),a(n,"class","input svelte-roxbrb")},m(c,u){D(c,t,u),y(t,n),y(n,o),y(o,r),N(r,e[0]),i||(s=[j(r,"input",e[2]),j(o,"submit",F(e[1]))],i=!0)},p(c,[u]){u&1&&r.value!==c[0]&&N(r,c[0])},i:b,o:b,d(c){c&&B(t),i=!1,h(s)}}}function ee(e,t,n){let o;const r=async()=>{window.api.send("savenewfile",o),n(0,o="")};function i(){o=this.value,n(0,o)}return[o,r,i]}class te extends Y{constructor(t){super(),X(this,t,ee,Z,q,{})}}new te({target:document.getElementById("app")});