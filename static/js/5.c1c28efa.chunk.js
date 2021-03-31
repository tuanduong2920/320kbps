(this["webpackJsonplisten-music-app"]=this["webpackJsonplisten-music-app"]||[]).push([[5],{211:function(t,e,n){"use strict";var i=n(19),a=n.n(i),c=n(28),r=n(34),s=n(192),o=n(236),l=n(206),j=n(234),u=n(1),d=n(41),b=n(233),h=n(204),p=n(168),x=n(65),O=n(195),f=n(214),m=n.n(f),v=n(108),y=n(215),g=n.n(y),w=n(217),k=n.n(w),S=n(216),C=n.n(S),N=n(30),B=n(36),F=n(58),z=n(3),L=Object(v.a)({root:{display:"flex",height:115,width:"100%"},detail:{textAlign:"start",padding:6}}),M=function(t){var e=t.name,n=t.artist,i=t.thumb,r=t.id,s=t.src,o=L(),j=Object(B.b)(),u=function(){var t=Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.a.get(s);case 2:n=t.sent,m()(n,"".concat(e,".mp3"));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(z.jsx)(b.a,{in:!0,timeout:1e3,children:Object(z.jsx)(h.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(z.jsxs)(p.a,{className:o.root,square:!0,elevation:3,children:[Object(z.jsx)(h.a,{item:!0,xs:4,children:Object(z.jsx)("img",{height:"115",alt:"img",width:"100%",src:i})}),Object(z.jsxs)(h.a,{className:o.detail,item:!0,xs:8,children:[Object(z.jsx)(x.a,{style:{textTransform:"capitalize",fontSize:22,display:"inline-block",whiteSpace:"nowrap",overflow:"hidden",width:"100%",textOverflow:"ellipsis"},variant:"h6",component:"h6",children:e}),Object(z.jsx)(x.a,{style:{fontSize:14,textTransform:"capitalize",display:"inline-block",whiteSpace:"nowrap",overflow:"hidden",width:"100%",textOverflow:"ellipsis"},variant:"subtitle1",children:n}),Object(z.jsxs)(l.a,{display:"flex",spacing:2,justifyContent:"center",children:[Object(z.jsx)(O.a,{"aria-label":"Play",onClick:function(){return function(){var t={id:r,name:e,artist:n,thumb:i,src:s};j(Object(N.c)(t))}()},children:Object(z.jsx)(g.a,{color:"secondary"})}),Object(z.jsx)(O.a,{"aria-label":"Add to playlist",onClick:function(){return function(){var t={id:r,name:e,artist:n,thumb:i,src:s};j(Object(N.b)(t))}()},children:Object(z.jsx)(C.a,{color:"secondary"})}),Object(z.jsx)(O.a,{"aria-label":"Download",onClick:function(){return u()},children:Object(z.jsx)(k.a,{color:"secondary"})})]})]})]})})})},T=n(237),A=Object(s.a)({root:{width:"100%",paddingTop:50,paddingBottom:50,"& ul":{justifyContent:"center"}}}),D=function(t){var e=t.visibility,n=t.list,i=A(),a=Object(u.useState)(1),c=Object(r.a)(a,2),s=c[0],o=c[1],j=Math.ceil(n.length/12),p=12*(s-1),x=p+12,O=n.slice(p,x);return Object(z.jsx)(z.Fragment,{children:e&&Object(z.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(z.jsx)("div",{style:{width:"80%"},children:O.length>0?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(b.a,{in:!0,children:Object(z.jsx)(h.a,{container:!0,spacing:2,children:O.map((function(t){return Object(z.jsx)(M,Object(d.a)({},t),t.id)}))})}),Object(z.jsx)(T.a,{className:i.root,page:s,onChange:function(t,e){o(e)},count:j,color:"secondary"})]}):Object(z.jsx)(l.a,{margin:10,component:"h4",children:"No Result"})})})})},J=Object(s.a)({root:{"& .MuiFilledInput-root":{borderRadius:"unset"}}});e.a=function(t){var e=t.list,n=t.visibility,i=t.getSongByName,s=t.visibilitySearchList,d=Object(u.useState)(""),b=Object(r.a)(d,2),h=b[0],p=b[1],x=Object(u.useState)(!1),O=Object(r.a)(x,2),f=O[0],m=O[1],v=J(),y=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),m(!0),""!==(n=h.trim())){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,i(n);case 7:return t.next=9,s();case 9:m(!1),p("");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("div",{style:{marginBottom:"22px"},children:Object(z.jsx)("form",{onSubmit:y,children:Object(z.jsx)(o.a,{color:"secondary",value:h,onChange:function(t){p(t.target.value)},className:v.root,variant:"filled",label:"What's song you want?",style:{width:"80%"}})})}),Object(z.jsx)("div",{style:{minHeight:275},children:!0===f?Object(z.jsx)(l.a,{display:"flex",justifyContent:"center",my:15,children:Object(z.jsx)(j.a,{style:{width:"80%"},color:"secondary"})}):Object(z.jsx)(D,{list:e,visibility:n,loading:f})})]})}},232:function(t,e,n){"use strict";n.r(e);var i=n(41),a=n(19),c=n.n(a),r=n(28),s=(n(1),n(211)),o=n(65),l=n(36),j=n(91),u=n(3);e.default=function(){var t=Object(l.c)(j.c).searchList,e=Object(l.b)(),n=function(){var t=Object(r.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(j.d)());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(r.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(j.b)(n));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.a,{variant:"h3",component:"div",style:{padding:"80px",fontWeight:"bold",color:"whitesmoke"},children:"Music with 320KBps"}),Object(u.jsx)("div",{className:"search-component",children:Object(u.jsx)(s.a,Object(i.a)({visibilitySearchList:n,getSongByName:a},t))})]})}}}]);
//# sourceMappingURL=5.c1c28efa.chunk.js.map