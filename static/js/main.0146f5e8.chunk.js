(this["webpackJsonplisten-music-app"]=this["webpackJsonplisten-music-app"]||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),s=n.n(i),r=(n(111),n(34)),o=n(180),l=n(181),d=n(177),j=n(176),u=n(182),h=(n(112),n(113),n(40)),b=n.n(h),p=n(48),x=n(44),O=n(178),m=n(183),f=n(184),g=n(179),v=n(174),y=n(144),w=n(145),S=n(81),k=n.n(S),C=n(83),L=n.n(C),N=n(82),z=n.n(N),B=n(52),A=n(59),F=n.n(A),M=Object(B.b)({name:"song",initialState:{currentSong:{},searchList:{list:[],visibility:!1},playList:[]},reducers:{playsong:function(e,t){e.currentSong={id:t.payload}},addSearchList:function(e,t){var n=t.payload.data;void 0!==n&&0!==n.length?e.searchList.list=n[0].song?n[0].song:[]:e.searchList.list=[]},visibilitySearchList:function(e){e.searchList.visibility=!0}}}),T=function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.a.get("https://proxy-306409.an.r.appspot.com/",{headers:{"Target-URL":"http://ac.mp3.zing.vn/complete?type=artist,song,key,code&num=500&query=".concat(e)}});case 3:a=t.sent,console.log(a),200===a.status&&n(q(a.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},W=M.reducer,J=function(e){return e.song},P=M.actions,R=P.playsong,q=P.addSearchList,D=P.visibilitySearchList,E=W,I=n(24),K=n(6),V=Object(w.a)({root:{display:"flex",height:115,width:"100%"},detail:{textAlign:"start",padding:6}}),_=function(e){var t=e.name,n=e.artist,a=e.thumb,c=e.id,i=V(),s=Object(I.b)();return Object(K.jsx)(v.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(K.jsxs)(y.a,{className:i.root,square:!0,elevation:3,children:[Object(K.jsx)(v.a,{item:!0,xs:4,children:Object(K.jsx)("img",{height:"115",alt:"img",width:"100%",src:"https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/"+a})}),Object(K.jsxs)(v.a,{className:i.detail,item:!0,xs:8,children:[Object(K.jsx)(j.a,{style:{textTransform:"capitalize",fontSize:22,display:"inline-block",whiteSpace:"nowrap",overflow:"hidden",width:"100%",textOverflow:"ellipsis"},variant:"h6",component:"h6",children:t}),Object(K.jsx)(j.a,{style:{fontSize:14,textTransform:"capitalize",display:"inline-block",whiteSpace:"nowrap",overflow:"hidden",width:"100%",textOverflow:"ellipsis"},variant:"subtitle1",children:n}),Object(K.jsxs)(f.a,{display:"flex",spacing:2,justifyContent:"center",children:[Object(K.jsx)(d.a,{"aria-label":"Play",onClick:function(){return function(e){console.log(e),s(R(e))}(c)},children:Object(K.jsx)(k.a,{color:"secondary"})}),Object(K.jsx)(d.a,{"aria-label":"Add to playlist",children:Object(K.jsx)(z.a,{color:"secondary"})}),Object(K.jsx)(d.a,{"aria-label":"Download",children:Object(K.jsx)(L.a,{color:"secondary"})})]})]})]})})},U=n(185),$=Object(O.a)({root:{width:"100%",paddingTop:50,paddingBottom:50,"& ul":{justifyContent:"center"}}}),G=function(e){var t=e.visibility,n=e.list,c=$(),i=Object(a.useState)(1),s=Object(x.a)(i,2),o=s[0],l=s[1],d=Math.ceil(n.length/10),j=10*(o-1),u=j+10,h=n.slice(j,u);return Object(K.jsx)(K.Fragment,{children:t&&Object(K.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(K.jsx)("div",{style:{width:"80%"},children:h.length>0?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(v.a,{container:!0,spacing:2,children:h.map((function(e){return Object(K.jsx)(_,Object(r.a)({},e),e.id)}))}),Object(K.jsx)(U.a,{className:c.root,page:o,onChange:function(e,t){l(t)},count:d,color:"secondary"})]}):Object(K.jsx)(f.a,{margin:10,component:"h4",children:"No Result"})})})})},H=Object(O.a)({root:{"& .MuiFilledInput-root":{borderRadius:"unset"}}}),Q=function(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),s=Object(x.a)(i,2),o=s[0],l=s[1],d=H(),j=Object(I.b)(),u=Object(I.c)(J).searchList,h=function(){var e=Object(p.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l(!0),""!==(a=n.trim())){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,j(T(a));case 7:return e.next=9,j(D());case 9:l(!1),c("");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("div",{style:{marginBottom:"22px"},children:Object(K.jsx)("form",{onSubmit:h,children:Object(K.jsx)(m.a,{color:"secondary",value:n,onChange:function(e){c(e.target.value)},className:d.root,variant:"filled",label:"What's song you want?",style:{width:"80%"}})})}),!0===o?Object(K.jsx)(f.a,{display:"flex",justifyContent:"center",my:15,children:Object(K.jsx)(g.a,{style:{width:"80%"},color:"secondary"})}):Object(K.jsx)(G,Object(r.a)(Object(r.a)({},u),{},{loading:o}))]})},X=n(95),Y=(n(140),n(141),function(e){var t=e.id,n="http://api.mp3.zing.vn/api/streaming/audio/".concat(t,"/320");return Object(K.jsx)("div",{className:"player-component",children:Object(K.jsx)(X.a,{src:n,onPlay:function(e){return console.log("onPlay")},onEnded:function(e){return console.log("end")},showSkipControls:!0,showJumpControls:!1,showFilledVolume:!0,layout:"horizontal",customAdditionalControls:[],customVolumeControls:[]})})});var Z=function(){var e=Object(I.c)(J).currentSong;return Object(K.jsxs)("div",{className:"App",children:[Object(K.jsx)("div",{className:"App-header",children:Object(K.jsx)(o.a,{color:"secondary",children:Object(K.jsxs)(l.a,{children:[Object(K.jsx)(d.a,{children:Object(K.jsx)(u.a,{})}),Object(K.jsx)(j.a,{variant:"h5",component:"h2",children:"320KBps"})]})})}),Object(K.jsxs)("div",{className:"app-main",children:[Object(K.jsx)(j.a,{variant:"h3",component:"div",style:{padding:"80px",fontWeight:"bold",color:"whitesmoke"},children:"Music with 320KBps"}),Object(K.jsx)("div",{className:"search-component",children:Object(K.jsx)(Q,{})}),Object(K.jsx)(Y,Object(r.a)({},e))]}),Object(K.jsx)("div",{className:"app-footer"})]})},ee=Object(B.a)({reducer:{song:E}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(K.jsx)(c.a.StrictMode,{children:Object(K.jsx)(I.a,{store:ee,children:Object(K.jsx)(Z,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[142,1,2]]]);
//# sourceMappingURL=main.0146f5e8.chunk.js.map