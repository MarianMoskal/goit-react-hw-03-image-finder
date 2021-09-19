(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{33:function(e,n,t){},80:function(e,n,t){"use strict";t.r(n);var a,o,i,r,c,s=t(0),l=t.n(s),d=t(6),p=t.n(d),h=(t(33),t(15)),u=t(7),b=t(8),g=t(10),x=t(9),m=t(2),f=t(3),j=f.a.form(a||(a=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),v=f.a.header(o||(o=Object(m.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: red;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),y=f.a.button(i||(i=Object(m.a)(['\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n']))),O=f.a.label(r||(r=Object(m.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),w=f.a.input(c||(c=Object(m.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  line-height: 50px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),k=t(1);var S,I,C=function(e){var n=e.onChange,t=e.onSubmit;return Object(k.jsx)(s.Fragment,{children:Object(k.jsx)(v,{children:Object(k.jsxs)(j,{onSubmit:t,children:[Object(k.jsx)(y,{type:"submit",children:Object(k.jsx)(O,{children:"Search"})}),Object(k.jsx)(w,{className:"SearchForm-input",id:"textInput",type:"text",onChange:n,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})},L=(t(38),t(26)),z=t.n(L),M=f.a.img(S||(S=Object(m.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),F=f.a.li(I||(I=Object(m.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"])));var R,V,q=function(e){var n=e.alt,t=e.onClick,a=e.largeImageURL;return Object(k.jsx)(s.Fragment,{children:Object(k.jsx)(F,{children:Object(k.jsx)(M,{onClick:function(e){return t(a,n)},src:a,alt:n})})})},U=f.a.ul(R||(R=Object(m.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  /* margin-bottom: 0; */\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),E=f.a.div(V||(V=Object(m.a)(["\n  text-align: center;\n"])));var T,D=function(e){var n=e.hits,t=e.visible,a=e.onSelect;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(U,{children:n.map((function(e){var n=e.webformatURL,t=e.tags,o=e.largeImageURL,i=e.id;return Object(k.jsx)(q,{onClick:a,largeImageURL:o,src:n,alt:t},"".concat(i,"+").concat(n))}))}),t&&Object(k.jsx)(E,{children:Object(k.jsx)(z.a,{type:"ThreeDots",color:"Orange",height:100,width:100,timeout:7e3})})]})},N=f.a.button(T||(T=Object(m.a)(["\n  padding: 8px 16px;\n  margin: 0 auto;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  :focus {\n    background-color: #303f9f;\n  }\n"])));var H=function(e){return Object(k.jsx)(N,{type:"button",onClick:e.onClick,children:"Load more"})},K=t(14),P=t.n(K),A=t(27),J=t(11),W=t.n(J);W.a.defaults.baseURL="https://pixabay.com/api/",W.a.defaults.params={key:"22788715-8437fcb04a405122d442af916",per_page:12,image_type:"photo",orientation:"horizontal"};var _,B,G,Q=function(){var e=Object(A.a)(P.a.mark((function e(n){var t,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,a=n.page,e.next=3,W()("",{params:{q:t,page:a}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),X=f.a.div(_||(_=Object(m.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),Y=f.a.div(B||(B=Object(m.a)(["\n  /* position: absolute; */\n  padding: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 75vw;\n  height: 50vh;\n"]))),Z=function(e){Object(g.a)(t,e);var n=Object(x.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).handleKeyPress=function(n){"Escape"===n.key&&e.props.closeModal()},e.handleOverlayClick=function(n){"IMG"!==n.target.nodeName&&e.props.closeModal()},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){null!==this.props.selectedImage&&(window.addEventListener("keydown",this.handleKeyPress),document.body.className="noScrollWhileModal")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress),document.body.className=""}},{key:"render",value:function(){var e=this.props.selectedImage,n=e.src,t=e.alt;return Object(k.jsx)(X,{onClick:this.handleOverlayClick,children:Object(k.jsx)(Y,{children:Object(k.jsx)("img",{src:n,alt:t})})})}}]),t}(s.Component),$=t(16),ee=(t(79),f.a.div(G||(G=Object(m.a)(["\n  padding-bottom: 24px;\n"])))),ne=function(e){Object(g.a)(t,e);var n=Object(x.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={data:{},hits:[],query:"",page:1,selectedImage:null,loaderVisible:!1},e.handleInput=function(n){e.setState({query:n.target.value})},e.onSubmit=function(n){n.preventDefault(),e.toggleLoaderVisible(),n.target.textInput.value="",e.setState({page:1,hits:[]},(function(){e.handleFetchResponse()}))},e.loadMore=function(n){e.toggleLoaderVisible(),setTimeout(e.setState({page:e.state.page+1},(function(){e.handleFetchResponse()})),2e3)},e.handleFetchResponse=function(){try{Q(e.state).then((function(n){var t=n.data;e.setState((function(e){return{data:t,hits:[].concat(Object(h.a)(e.hits),Object(h.a)(t.hits))}})),e.toggleLoaderVisible()}))}catch(n){console.log(n),alert(n)}},e.handleSelectedImage=function(n,t){e.setState({selectedImage:{src:n,alt:t}})},e.toggleLoaderVisible=function(){e.setState({loaderVisible:!e.state.loaderVisible})},e.handleCloseModal=function(){e.setState({selectedImage:null})},e.notify=function(){$.b.warn("There are no more images that fit to your query",{theme:"colored"})},e}return Object(b.a)(t,[{key:"componentDidUpdate",value:function(e,n){var t=this.state,a=t.page,o=t.data,i=t.hits,r=t.selectedImage,c=t.query,s=a!==n.page||r!==n.selectedImage,l=i.length===o.totalHits&&null===r&&c===n.query;s&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),l&&setTimeout(this.notify,3e3)}},{key:"render",value:function(){var e=this.state,n=e.hits,t=e.loaderVisible,a=e.selectedImage,o=e.data,i=n.length>11&&!t&&n.length<o.totalHits;return Object(k.jsxs)(ee,{children:[Object(k.jsx)($.a,{position:"bottom-center",autoClose:"off"}),Object(k.jsx)(C,{onSubmit:this.onSubmit,onChange:this.handleInput}),Object(k.jsx)(D,{hits:n,visible:t,onSelect:this.handleSelectedImage}),i&&Object(k.jsx)(H,{onClick:this.loadMore}),a&&Object(k.jsx)(Z,{selectedImage:a,closeModal:this.handleCloseModal})]})}}]),t}(s.Component);p.a.render(Object(k.jsx)(l.a.StrictMode,{children:Object(k.jsx)(ne,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.6811ae57.chunk.js.map