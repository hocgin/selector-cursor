"use strict";(self.webpackChunk_hocgin_selector_cursor=self.webpackChunk_hocgin_selector_cursor||[]).push([[368],{91368:function(Fe,re,m){m.r(re),m.d(re,{Selectable:function(){return de},defineElements:function(){return ce},useSelectable:function(){return ze}});var ve=m(67855),A=m.n(ve),me=m(28152),P=m.n(me),pe=m(15033),q=m.n(pe),fe=m(96345),W=m.n(fe),be=m(13762),j=m.n(be),ge=m(41206),X=m.n(ge),Te=m(5947),ye=m(90696),we=m.n(ye),xe=m(27797),oe=m.n(xe),w=m(79189),K=`
:host {
  --theme-bg: hsl(0 0% 100%);
  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));
  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));
  --theme-bd-opacity: 1;
  --theme-bd-2-opacity: 1;
  --theme-color: hotpink;
  --theme-blue: hsl(188 90% 45%);
  --theme-purple: hsl(267 100% 58%);

  --theme-text_color: hsl(0 0% 10%);
  --theme-icon_color: hsl(0 0% 20%);
  --theme-icon_hover-bg: hsl(0 0% 95%);
  --theme-icon_active-bg: hsl(0 0% 90%);

  --layer-top: 2147483647;
  --layer-1: 2147483646;
  --layer-2: 2147483645;
  --layer-3: 2147483644;
  --layer-4: 2147483643;
  --layer-5: 2147483642;

  --text-shadow: 0 1px hsl(0 0% 0% / 40%);

  @media (-webkit-min-device-pixel-ratio: 2) {
    --text-shadow: 0 .5px hsl(0 0% 0% / 50%);
  }

  @media (prefers-color-scheme: dark) {
    --theme-bg: hsl(0 0% 10%);
    --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));
    --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));
    --theme-color: hsl(330deg 65% 75%);
    --theme-text_color: hsl(0 0% 90%);
    --theme-icon_color: hsl(0 0% 80%);
    --theme-icon_hover-bg: hsl(0 0% 15%);
    --theme-icon_active-bg: hsl(0 0% 20%);
  }

  @supports (backdrop-filter: blur(5px)) {
    --theme-bd-opacity: .8;
    --theme-bd-2-opacity: .9;
  }

  @supports (-webkit-backdrop-filter: blur(5px)) {
    --theme-bd-opacity: .8;
    --theme-bd-2-opacity: .9;
  }
}
`,G=function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new CSSStyleSheet;return i.replaceSync(o),i},ie=G(`
`.concat(K,`

:host {
    position: var(--position, 'absolute');
    top: var(--top);
    left: var(--left);
    overflow: visible;
    pointer-events: none;
    z-index: var(--layer-3);
    width: var(--width);
    height: var(--height);
    display: grid;
    grid-template-rows: 1fr;
    isolation: isolate;
}

:host > svg {
    position: absolute;
}
`)),Se=G(`
`.concat(K,`
:host {
  display: grid;
  grid-area: 1 / -1;

  place-self: var(--align-self, center) var(--justify-self, center);
  transform: translate(var(--translate-x, 0), var(--translate-y, 0));
}

:host([hidden]) {
  display: none;
}

:host > button {
  pointer-events: auto;
  background-color: white;
  border: 1px solid hotpink;
  padding: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;
  cursor: var(--cursor);

  /* increase tap target size */

  &::before {
    content: '';
    position: absolute;
    inset: -10px;
  }
}

:host([placement^="top"]) {
  --align-self: start;
  --translate-y: -50%;
}

:host([placement^="bottom"]) {
  --align-self: end;
  --translate-y: 50%;
}

:host([placement$="start"]) {
  --justify-self: start;
  --translate-x: -50%;
}

:host([placement$="end"]) {
  --justify-self: end;
  --translate-x: 50%;
}

:host([placement^="top"]),
:host([placement^="bottom"]) {
  --cursor: ns-resize;
}

:host([placement$="start"]),
:host([placement$="end"]) {
  --cursor: ew-resize;
}

:host([placement="top-start"]) {
  --cursor: nw-resize;
}

:host([placement="top-end"]) {
  --cursor: ne-resize;
}

:host([placement="bottom-start"]) {
  --cursor: sw-resize;
}

:host([placement="bottom-end"]) {
  --cursor: se-resize;
}

`)),Ce=G(`
`.concat(K,`
:host rect {
  --layer-5: 2147483642;
  width: 100%;
  height: 100%;
  vector-effect: non-scaling-stroke;
  stroke: var(--hover-stroke, var(--theme-purple, hsl(267 100% 58%)));
  stroke-width: 1px;
  fill: none;
}

:host > svg {
  z-index: var(--layer-5);
}
`)),F=function(o){do if(window.getComputedStyle(o).position=="fixed")return!0;while(o=o.offsetParent);return!1},L=function(o,i){if(document.defaultView&&document.defaultView.getComputedStyle){i=i.replace(/([A-Z])/g,"-$1"),i=i.toLowerCase();var e=document.defaultView.getComputedStyle(o,"");return e&&e.getPropertyValue(i)}},le=function(r){j()(i,r);var o=X()(i);function i(){var e;return q()(this,i),e=o.call(this),e.$shadow=e.attachShadow({mode:"closed"}),e.styles=[ie],e.on_resize=e.on_window_resize.bind(we()(e)),e}return W()(i,[{key:"connectedCallback",value:function(){this.$shadow.adoptedStyleSheets=this.styles,window.addEventListener("resize",this.on_window_resize)}},{key:"disconnectedCallback",value:function(){window.removeEventListener("resize",this.on_window_resize)}},{key:"on_window_resize",value:function(){var t=this;window.requestAnimationFrame(function(){var s,d,l=(s=t.$shadow)===null||s===void 0||(s=s.host)===null||s===void 0||(d=s.getAttribute)===null||d===void 0?void 0:d.call(s,"data-label-id"),p=(0,w.ZP)('[data-label-id="'.concat(l,'"]')),f=P()(p,1),c=f[0];c&&(t.position={node_label_id:l,el:c,isFixed:F(c)})})}},{key:"position",set:function(t){var s=t.el,d=t.node_label_id;this.$shadow.innerHTML=this.render(s.getBoundingClientRect(),d,F(s)),this._backdrop&&(this.backdrop={element:this._backdrop.update(s),update:this._backdrop.update})}},{key:"backdrop",set:function(t){this._backdrop=t;var s=this.$shadow.querySelector("visbug-boxmodel");s?this.$shadow.replaceChild(t.element,s):this.$shadow.appendChild(t.element)}},{key:"render",value:function(t,s,d){var l=t.x,p=t.y,f=t.width,c=t.height,H=t.top,z=t.left;return this.$shadow.host.setAttribute("data-label-id",s),this.style.setProperty("--top","".concat(H+(d?0:window.scrollY),"px")),this.style.setProperty("--left","".concat(z,"px")),this.style.setProperty("--position",d?"fixed":"absolute"),this.style.setProperty("--width","".concat(f,"px")),this.style.setProperty("--height","".concat(c,"px")),`
      <svg
        class="visbug-handles"
        width="`.concat(f,'" height="').concat(c,`"
        viewBox="0 0 `).concat(f," ").concat(c,`"
        version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <rect stroke="hotpink" fill="none" width="100%" height="100%"></rect>
      </svg>
      <visbug-handle placement="top-start"></visbug-handle>
      <visbug-handle placement="top-center"></visbug-handle>
      <visbug-handle placement="top-end"></visbug-handle>
      <visbug-handle placement="middle-start"></visbug-handle>
      <visbug-handle placement="middle-end"></visbug-handle>
      <visbug-handle placement="bottom-start"></visbug-handle>
      <visbug-handle placement="bottom-center"></visbug-handle>
      <visbug-handle placement="bottom-end"></visbug-handle>
    `)}}]),i}(oe()(HTMLElement)),ke=function(r){j()(i,r);var o=X()(i);function i(){var e;return q()(this,i),e=o.call(this),e.styles=[ie,Ce],e}return W()(i,[{key:"render",value:function(t,s,d){var l=t.width,p=t.height,f=t.top,c=t.left;return this.style.setProperty("--top","".concat(f+(d?0:window.scrollY),"px")),this.style.setProperty("--left","".concat(c,"px")),this.style.setProperty("--position",d?"fixed":"absolute"),`
      <svg width="`.concat(l,'" height="').concat(p,'" viewBox="0 0 ').concat(l," ").concat(p,`">
        <rect fill="none" width="100%" height="100%"></rect>
    `)}}]),i}(le);function Ze(r,o){return Math.floor(r+Math.random()*(o-r))}function se(r,o,i){return Math.max(r,Math.min(o,i))}var Ee=function(r){j()(i,r);var o=X()(i);function i(){var e;return q()(this,i),e=o.call(this),e.$shadow=e.attachShadow({mode:"closed"}),e.styles=[Se],e}return W()(i,[{key:"connectedCallback",value:function(){this.$shadow.adoptedStyleSheets=this.styles,this.$shadow.innerHTML=this.render(),this.button=this.$shadow.querySelector("button"),this.button.addEventListener("pointerdown",this.on_element_resize_start.bind(this)),this.placement=this.getAttribute("placement")}},{key:"attributeChangedCallback",value:function(t,s,d){t==="placement"&&(this.placement=d)}},{key:"on_element_resize_start",value:function(t){if(t.preventDefault(),t.stopPropagation(),t.button!==0)return;var s=this.placement,d=t.composedPath().find(function(S){return S.tagName==="VISBUG-HANDLES"}),l=d.getAttribute("data-label-id"),p=(0,w.ZP)('[data-label-id="'.concat(l,'"]')),f=P()(p,1),c=f[0];if(!c)return;var H=t.x,z=t.y,M=getComputedStyle(c),C=parseFloat(M.width),k=parseFloat(M.height),$=new DOMMatrix(M.transform),O=c.style.transition,Q=document.body.style.cursor,ee=document.body.style.userSelect;c.style.transition="none",document.body.style.cursor=getComputedStyle(this).getPropertyValue("--cursor"),document.body.style.userSelect="none",document.addEventListener("pointermove",V);function V(S){S.preventDefault(),S.stopPropagation();var D=se(0,S.clientX,document.documentElement.clientWidth),te=se(0,S.clientY,document.documentElement.clientHeight),g=D-H,y=te-z;switch(s){case"top-start":{var U=C-g,ne=k-y,_=$.translate(g,y).transformPoint();requestAnimationFrame(function(){c.style.width="".concat(U,"px"),c.style.height="".concat(ne,"px"),c.style.transform="translate(".concat(_.x,"px, ").concat(_.y,"px)")});break}case"top-center":{var ae=k-y,N=$.translate(0,y).transformPoint();requestAnimationFrame(function(){c.style.height="".concat(ae,"px"),c.style.transform="translate(".concat(N.x,"px, ").concat(N.y,"px)")});break}case"top-end":{var h=C+g,n=k-y,a=$.translate(0,y).transformPoint();requestAnimationFrame(function(){c.style.width="".concat(h,"px"),c.style.height="".concat(n,"px"),c.style.transform="translate(".concat(a.x,"px, ").concat(a.y,"px)")});break}case"middle-start":{var u=C-g,v=$.translate(g).transformPoint();requestAnimationFrame(function(){c.style.width="".concat(u,"px"),c.style.transform="translate(".concat(v.x,"px, ").concat(v.y,"px)")});break}case"middle-end":{var b=C+g;requestAnimationFrame(function(){c.style.width="".concat(b,"px")});break}case"bottom-start":{var E=C-g,R=k+y,B=$.translate(g,0).transformPoint();requestAnimationFrame(function(){c.style.width="".concat(E,"px"),c.style.height="".concat(R,"px"),c.style.transform="translate(".concat(B.x,"px, ").concat(B.y,"px)")});break}case"bottom-center":{var Y=k+y;requestAnimationFrame(function(){c.style.height="".concat(Y,"px")});break}case"bottom-end":{var he=C+g,Be=k+y;requestAnimationFrame(function(){c.style.width="".concat(he,"px"),c.style.height="".concat(Be,"px")});break}}}document.addEventListener("pointerup",I,{once:!0}),document.addEventListener("mouseleave",I,{once:!0});function I(){document.removeEventListener("pointermove",V),document.body.style.cursor=Q,document.body.style.userSelect=ee,c.style.transition=O}}},{key:"disconnectedCallback",value:function(){this.button.removeEventListener("pointerdown",this.on_element_resize_start.bind(this))}},{key:"render",value:function(){return`
      <button type="button" aria-label="Resize"></button>
    `}}],[{key:"observedAttributes",get:function(){return["placement"]}}]),i}(oe()(HTMLElement)),x={distances:[],target:null};function $e(r){var o=r.$anchor,i=r.$target;if(!(x.target==i&&x.distances.length)){x.target=i,x.distances.length&&T();var e=o.getBoundingClientRect(),t=i.getBoundingClientRect(),s=[];e.right<t.left&&s.push({x:e.right,y:e.top+e.height/2-3,d:t.left-e.right,q:"right"}),e.right<t.right&&e.right>t.left&&s.push({x:e.right,y:e.top+e.height/2-3,d:t.right-e.right,q:"right"}),e.left>t.right&&s.push({x:window.innerWidth-e.left,y:e.top+e.height/2-3,d:e.left-t.right,q:"left"}),e.left>t.left&&e.left<t.right&&s.push({x:window.innerWidth-e.left,y:e.top+e.height/2-3,d:e.left-t.left,q:"left"}),e.top>t.bottom&&s.push({x:e.left+e.width/2-3,y:t.bottom,d:e.top-t.bottom,q:"top",v:!0}),e.top>t.top&&e.top<t.bottom&&s.push({x:e.left+e.width/2-3,y:t.top,d:e.top-t.top,q:"top",v:!0}),e.bottom<t.top&&s.push({x:e.left+e.width/2-3,y:e.bottom,d:t.top-e.bottom,q:"bottom",v:!0}),e.bottom<t.bottom&&e.bottom>t.top&&s.push({x:e.left+e.width/2-3,y:e.bottom,d:t.bottom-e.bottom,q:"bottom",v:!0}),e.right>t.right&&e.left<t.left&&(s.push({x:window.innerWidth-e.right,y:e.top+e.height/2-3,d:e.right-t.right,q:"left"}),s.push({x:e.left,y:e.top+e.height/2-3,d:t.left-e.left,q:"right"})),e.top<t.top&&e.bottom>t.bottom&&(s.push({x:e.left+e.width/2-3,y:e.top,d:t.top-e.top,q:"bottom",v:!0}),s.push({x:e.left+e.width/2-3,y:t.bottom,d:e.bottom-t.bottom,q:"top",v:!0})),s.map(function(d){return Object.assign(d,{d:Math.round(d.d.toFixed(1)*100)/100})}).forEach(function(d){var l=document.createElement("visbug-distance");l.position={line_model:d,node_label_id:x.distances.length},document.body.appendChild(l),x.distances[x.distances.length]=l})}}function T(){x.distances&&((0,w.ZP)("[data-measuring]").forEach(function(r){return r.removeAttribute("data-measuring")}),x.distances.forEach(function(r){return r.remove()}),x.distances=[])}function Oe(){var r=_toConsumableArray(x.distances);return x.distances=[],r}function Ae(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=r.getBoundingClientRect(),e=getStyle(r,"padding"),t=document.createElement("visbug-boxmodel");if(e!=="0px"){var s={top:getStyle(r,"paddingTop"),right:getStyle(r,"paddingRight"),bottom:getStyle(r,"paddingBottom"),left:getStyle(r,"paddingLeft")};Object.entries(s).forEach(function(d){var l=P()(d,2),p=l[0],f=l[1];typeof f!="number"&&(f=parseInt(getStyle(r,"padding-"+p).slice(0,-2))),s[p]=Math.round(f.toFixed(1)*100)/100}),t.position={mode:"padding",color:o?"purple":"pink",bounds:i,sides:s}}return t}function Pe(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=r.getBoundingClientRect(),e=L(r,"margin"),t=document.createElement("visbug-boxmodel");if(e!=="0px"){var s={top:L(r,"marginTop"),right:L(r,"marginRight"),bottom:L(r,"marginBottom"),left:L(r,"marginLeft")};Object.entries(s).forEach(function(d){var l=P()(d,2),p=l[0],f=l[1];typeof f!="number"&&(f=parseInt(L(r,"margin-"+p).slice(0,-2))),s[p]=Math.round(f.toFixed(1)*100)/100}),t.position={mode:"margin",color:o?"purple":"pink",bounds:i,sides:s}}return t}var Le=m(50959),He={drag:{src:null,parent:null,parent_ui:[],siblings:new Map,swapping:new Map},hover:{dropzones:[],observers:[]}},Ve=function(o){var i=document.createElement("visbug-hover"),e=document.createElement("visbug-label");i.position={el:o},i.setAttribute("visbug-drag-container",!0),e.text="Drag Bounds",e.position={boundingRect:o.getBoundingClientRect()},e.style.setProperty("--label-bg","var(--theme-purple)"),document.body.appendChild(i),document.body.appendChild(e);var t=new MutationObserver(function(s){i.position={el:o},e.position={boundingRect:o.getBoundingClientRect()}});return t.observe(o,{childList:!0,subtree:!0}),He.hover.observers.push(t),[i,e]},ce=function(){customElements.define("visbug-hover",ke),customElements.define("visbug-handles",le),customElements.define("visbug-handle",Ee)};function de(r){var o=document.body,i=(0,w.ZP)(o),e=[],t=[],s=[],d=[],l={target:null,element:null,label:null},p=function(){o.addEventListener("click",D,!0),o.addEventListener("dblclick",U,!0),i.on("selectstart",H),i.on("mousemove",c)},f=function(){o.removeEventListener("click",D,!0),o.removeEventListener("dblclick",U,!0),i.off("selectstart",H),i.off("mousemove",c)},c=function(n){var a=ue(n.clientX,n.clientY),u=r==null?void 0:r.activeTool;if(Z(a)||a.hasAttribute("data-selected")||a.hasAttribute("draggable"))return T(),z();if(k({el:a,no_label:u==="guides"||u==="accessibility"||u==="margin"||u==="padding"||u==="inspector"}),u==="guides"&&e.length>=1&&!e.includes(a)){a.setAttribute("data-measuring",!0);var v=e,b=P()(v,1),E=b[0];$e({$anchor:E,$target:a})}else u==="margin"&&!l.element.$shadow.querySelector("visbug-boxmodel")?l.element.$shadow.appendChild(Pe(l.target,!0)):u==="padding"&&!l.element.$shadow.querySelector("visbug-boxmodel")?l.element.$shadow.appendChild(Ae(l.target,!0)):(a.hasAttribute("data-measuring")||e.includes(a))&&T()},H=function(n){return!Z(n.target)&&e.length&&e[0].textContent!=n.target.textContent&&n.preventDefault()},z=function(){l.target&&(l.element&&l.element.remove(),l.label&&l.label.remove(),l.target=null,l.element=null,l.label=null)},M=function(n){if(!n.hasAttribute("data-pseudo-select")&&!n.hasAttribute("data-label-id"))return l.element&&l.element.remove(),l.element=document.createElement("visbug-hover"),document.body.appendChild(l.element),l.element.position={el:n},l.element},C=function(n,a){if(!n.hasAttribute("data-pseudo-select")&&!n.hasAttribute("data-label-id"))return l.label&&l.label.remove(),l.label=document.createElement("visbug-label"),document.body.appendChild(l.label),l.label.text=a,l.label.position={boundingRect:n.getBoundingClientRect(),node_label_id:"hover"},l.label.style.setProperty("--label-bg","hsl(267, 100%, 58%)"),l.label},k=function(n){var a=n.el,u=n.no_hover,v=u===void 0?!1:u,b=n.no_label,E=b===void 0?!0:b;l.target!==a&&(l.target=a,l.element=v?null:M(a),l.label=E?null:C(a,J(a,r==null?void 0:r.activeTool)))},$=function(n,a){a.position={el:n,node_label_id:n.getAttribute("data-label-id")}},O=function(n,a){var u=a.label,v=a.handle;return new MutationObserver(function(b){u&&ee(n,u),v&&$(n,v)})},Q=function(n){var a=n.el,u=n.id,v=n.no_label,b=v===void 0?!0:v,E=I({el:a,id:u}),R=b?null:V({el:a,id:u,template:J(a,r==null?void 0:r.activeTool)}),B=O(a,{handle:E,label:R}),Y=O(a,{handle:E,label:R});B.observe(a,{attributes:!0}),Y.observe(a.parentNode,{childList:!0,subtree:!0}),(0,w.ZP)(R).on("DOMNodeRemoved",function(he){B.disconnect(),Y.disconnect()})},ee=function(n,a){a.text=J(n,r==null?void 0:r.activeTool),a.update={boundingRect:n.getBoundingClientRect(),isFixed:F(n)}},V=function(n){var a=n.el,u=n.id,v=n.template;if(!s[u]){var b=document.createElement("visbug-label");return b.text=v,b.position={boundingRect:a.getBoundingClientRect(),node_label_id:u,isFixed:F(a)},document.body.appendChild(b),s[s.length]=b,b}},I=function(n){var a=n.el,u=n.id;if(!d[u]){var v=document.createElement("visbug-handles");return v.position={el:a,node_label_id:u},document.body.appendChild(v),d[d.length]=v,v}},S=function(n){console.log("select",n);var a=d.length,u=r==null?void 0:r.activeTool;n.setAttribute("data-selected",!0),n.setAttribute("data-label-id",a),z(),Q({el:n,id:a,no_label:u==="inspector"||u==="guides"||u==="accessibility"}),e.unshift(n),g()},D=function(n){var a=ue(n==null?void 0:n.clientX,n==null?void 0:n.clientY);Z(a)&&!e.filter(function(u){return u==a}).length||(n.preventDefault(),n.altKey||n.stopPropagation(),n.shiftKey||(y({silent:!0}),T()),n.shiftKey&&a.hasAttribute("data-selected")?te(a.getAttribute("data-label-id")):S(a))},te=function(n){[].concat(A()(s),A()(d)).filter(function(a){return a.getAttribute("data-label-id")===n}).forEach(function(a){return a.remove()}),e.filter(function(a){return a.getAttribute("data-label-id")===n}).forEach(function(a){return(0,w.ZP)(a).attr({"data-selected":null,"data-selected-hide":null,"data-label-id":null,"data-pseudo-select":null,"data-measuring":null,"data-outward":null})}),e=e.filter(function(a){return a.getAttribute("data-label-id")!==n}),g()},g=function(){return t.forEach(function(n){return n(e)})},y=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.silent,u=a===void 0?!1:a;e.forEach(function(v){return(0,w.ZP)(v).attr({"data-selected":null,"data-selected-hide":null,"data-label-id":null,"data-pseudo-select":null,"data-outward":null})}),(0,w.ZP)("[data-pseudo-select]").forEach(function(v){return v.removeAttribute("data-pseudo-select")}),Array.from([].concat(A()((0,w.ZP)("visbug-handles")),A()((0,w.ZP)("visbug-label")),A()((0,w.ZP)("visbug-hover")),A()((0,w.ZP)("visbug-distance")))).forEach(function(v){return v.remove()}),s=[],d=[],e=[],!u&&g()},U=function(n){n.preventDefault(),n.stopPropagation(),Z(n.target)},ne=function(){return e},_=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;t.push(n),a&&n(e)},ae=function(n){return t=t.filter(function(a){return a!=n})},N=function(){y(),f()};return{connect:function(){return p()},disconnect:N,selection:ne,select:S,unselect_all:y,onSelectedUpdate:_,removeSelectedCallback:ae}}var ze=function(o){if(typeof window=="undefined")return{};var i=(0,Le.useState)(function(){return ce(),de()}),e=P()(i,2),t=e[0],s=e[1];return t},ue=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=document.elementFromPoint(o,i),t=function d(l){if(l.shadowRoot){var p=l.shadowRoot.elementFromPoint(o,i);return p==l?l:p.shadowRoot?d(p):p}else return l},s=t(e);return s||e},Z=function(o){return o.closest&&(o.closest("vis-bug")||o.closest("hotkey-map")||o.closest("visbug-metatip")||o.closest("visbug-ally")||o.closest("visbug-label")||o.closest("visbug-handles")||o.closest("visbug-corners")||o.closest("visbug-grip")||o.closest("visbug-gridlines"))},J=function(o,i){switch(i){case"align":return Me(o,"display");default:return`
        <a node>`.concat(o.nodeName.toLowerCase(),`</a>
        <a>`).concat(o.id&&"#"+o.id,`</a>
        `).concat(Re(o).split(".").filter(function(e){return e!=""}).reduce(function(e,t){return`
            `.concat(e,`
            <a>.`).concat(t,`</a>
          `)},""),`
      `)}},Me=function(o,i){if(document.defaultView&&document.defaultView.getComputedStyle){i=i.replace(/([A-Z])/g,"-$1"),i=i.toLowerCase();var e=document.defaultView.getComputedStyle(o,"");return e&&e.getPropertyValue(i)}},Re=function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!o.className)return"";var e=Array.from(o.classList).reduce(function(t,s){return t+="."+s},"");return i&&e.length>30?e.substring(0,30)+"...":e};function Ie(r,o){}}}]);
