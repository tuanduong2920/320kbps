(this["webpackJsonplisten-music-app"]=this["webpackJsonplisten-music-app"]||[]).push([[0],{111:function(t,e,n){},112:function(t,e,n){},141:function(t,e,n){},142:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(11),r=n.n(i),s=(n(111),n(33)),o=n(180),l=n(181),d=n(177),j=n(176),u=n(182),h=(n(112),n(113),n(40)),b=n.n(h),p=n(48),x=n(44),O=n(178),m=n(183),g=n(184),f=n(179),v=n(174),y=n(144),w=n(145),S=n(81),k=n.n(S),C=n(83),L=n.n(C),N=n(82),z=n.n(N),B=n(52),A=n(72),F=n.n(A),M="https://proxy-306409.an.r.appspot.com/?url=",W=Object(B.b)({name:"song",initialState:{currentSong:{},searchList:{list:[],visibility:!1},playList:[]},reducers:{addCurrentSong:function(t,e){t.currentSong={id:e.payload}},addSearchList:function(t,e){var n=e.payload.data;void 0!==n&&0!==n.length?t.searchList.list=n[0].song?n[0].song:[]:t.searchList.list=[]},visibilitySearchList:function(t){t.searchList.visibility=!0}}}),E=function(t){return function(){var e=Object(p.a)(b.a.mark((function e(n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("".concat(M,"http://ac.mp3.zing.vn/complete?type=artist,song,key,code&num=500&query=").concat(t));case 3:a=e.sent,console.log("songList",a),200===a.status&&n(D(a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("getSongErr",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},J=W.reducer,P=function(t){return t.song},T=W.actions,q=T.addCurrentSong,D=T.addSearchList,I=T.visibilitySearchList,K=J,R=n(24),V=n(6),_=Object(w.a)({root:{display:"flex",height:115,width:"100%"},detail:{textAlign:"start",padding:6}}),$=function(t){var e=t.name,n=t.artist,a=t.thumb,c=t.id,i=_(),r=Object(R.b)();return Object(V.jsx)(v.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(V.jsxs)(y.a,{className:i.root,square:!0,elevation:3,children:[Object(V.jsx)(v.a,{item:!0,xs:4,children:Object(V.jsx)("img",{height:"115",alt:"img",width:"100%",src:"https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/"+a})}),Object(V.jsxs)(v.a,{className:i.detail,item:!0,xs:8,children:[Object(V.jsx)(j.a,{style:{textTransform:"capitalize",fontSize:22,display:"inline-block",whiteSpace:"nowrap",overflow:"hidden",width:"100%",textOverflow:"ellipsis"},variant:"h6",component:"h6",children:e}),Object(V.jsx)(j.a,{style:{fontSize:14,textTransform:"capitalize",display:"inline-block",whiteSpace:"nowrap",overflow:"hidden",width:"100%",textOverflow:"ellipsis"},variant:"subtitle1",children:n}),Object(V.jsxs)(g.a,{display:"flex",spacing:2,justifyContent:"center",children:[Object(V.jsx)(d.a,{"aria-label":"Play",onClick:function(){return function(t){console.log(t),r(q(t))}(c)},children:Object(V.jsx)(k.a,{color:"secondary"})}),Object(V.jsx)(d.a,{"aria-label":"Add to playlist",children:Object(V.jsx)(z.a,{color:"secondary"})}),Object(V.jsx)(d.a,{"aria-label":"Download",children:Object(V.jsx)(L.a,{color:"secondary"})})]})]})]})})},G=n(185),H=Object(O.a)({root:{width:"100%",paddingTop:50,paddingBottom:50,"& ul":{justifyContent:"center"}}}),Q=function(t){var e=t.visibility,n=t.list,c=H(),i=Object(a.useState)(1),r=Object(x.a)(i,2),o=r[0],l=r[1],d=Math.ceil(n.length/10),j=10*(o-1),u=j+10,h=n.slice(j,u);return Object(V.jsx)(V.Fragment,{children:e&&Object(V.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(V.jsx)("div",{style:{width:"80%"},children:h.length>0?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(v.a,{container:!0,spacing:2,children:h.map((function(t){return Object(V.jsx)($,Object(s.a)({},t),t.id)}))}),Object(V.jsx)(G.a,{className:c.root,page:o,onChange:function(t,e){l(e)},count:d,color:"secondary"})]}):Object(V.jsx)(g.a,{margin:10,component:"h4",children:"No Result"})})})})},U=Object(O.a)({root:{"& .MuiFilledInput-root":{borderRadius:"unset"}}}),X=function(){var t=Object(a.useState)(""),e=Object(x.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(!1),r=Object(x.a)(i,2),o=r[0],l=r[1],d=U(),j=Object(R.b)(),u=Object(R.c)(P).searchList,h=function(){var t=Object(p.a)(b.a.mark((function t(e){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),l(!0),""!==(a=n.trim())){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,j(E(a));case 7:return t.next=9,j(I());case 9:l(!1),c("");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("div",{style:{marginBottom:"22px"},children:Object(V.jsx)("form",{onSubmit:h,children:Object(V.jsx)(m.a,{color:"secondary",value:n,onChange:function(t){c(t.target.value)},className:d.root,variant:"filled",label:"What's song you want?",style:{width:"80%"}})})}),!0===o?Object(V.jsx)(g.a,{display:"flex",justifyContent:"center",my:15,children:Object(V.jsx)(f.a,{style:{width:"80%"},color:"secondary"})}):Object(V.jsx)(Q,Object(s.a)(Object(s.a)({},u),{},{loading:o}))]})},Y=n(95),Z=(n(140),n(141),function(t){var e=t.id,n="".concat(M,"http://api.mp3.zing.vn/api/streaming/audio/").concat(e,"/320");return Object(V.jsx)("div",{className:"player-component",children:Object(V.jsx)(Y.a,{src:n,onPlay:function(t){return console.log("onPlay")},onEnded:function(t){return console.log("end")},showSkipControls:!0,showJumpControls:!1,showFilledVolume:!0,layout:"horizontal",customAdditionalControls:[],customVolumeControls:[]})})});var tt=function(){var t=Object(R.c)(P).currentSong;return Object(V.jsxs)("div",{className:"App",children:[Object(V.jsx)("div",{className:"App-header",children:Object(V.jsx)(o.a,{color:"secondary",children:Object(V.jsxs)(l.a,{children:[Object(V.jsx)(d.a,{children:Object(V.jsx)(u.a,{})}),Object(V.jsx)(j.a,{variant:"h5",component:"h2",children:"320KBps"})]})})}),Object(V.jsxs)("div",{className:"app-main",children:[Object(V.jsx)(j.a,{variant:"h3",component:"div",style:{padding:"80px",fontWeight:"bold",color:"whitesmoke"},children:"Music with 320KBps"}),Object(V.jsx)("div",{className:"search-component",children:Object(V.jsx)(X,{})}),Object(V.jsx)(Z,Object(s.a)({},t))]}),Object(V.jsx)("div",{className:"app-footer"})]})},et=Object(B.a)({reducer:{song:K}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(V.jsx)(c.a.StrictMode,{children:Object(V.jsx)(R.a,{store:et,children:Object(V.jsx)(tt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[142,1,2]]]);
//# sourceMappingURL=main.1b5ced7f.chunk.js.map