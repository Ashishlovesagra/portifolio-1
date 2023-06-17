import{r as x,c as Ee}from"./index-7f6596c2.js";var De={},te={},he={},ae={},J={},Ae={get exports(){return J},set exports(t){J=t}},se,Se;function We(){if(Se)return se;Se=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return se=t,se}var ue,we;function ke(){if(we)return ue;we=1;var t=We();function n(){}function r(){}return r.resetWarningCache=n,ue=function(){function i(a,s,l,d,h,v){if(v!==t){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}i.isRequired=i;function e(){return i}var o={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:e,element:i,elementType:i,instanceOf:e,node:i,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:n};return o.PropTypes=o,o},ue}var be;function ze(){return be||(be=1,Ae.exports=ke()()),J}var ge;function Ne(){return ge||(ge=1,function(t){(function(n,r){r(t,x,ze())})(Ee,function(n,r,i){Object.defineProperty(n,"__esModule",{value:!0}),n.setHasSupportToCaptureOption=T;var e=a(r),o=a(i);function a(f){return f&&f.__esModule?f:{default:f}}var s=Object.assign||function(f){for(var m=1;m<arguments.length;m++){var w=arguments[m];for(var u in w)Object.prototype.hasOwnProperty.call(w,u)&&(f[u]=w[u])}return f};function l(f,m){var w={};for(var u in f)m.indexOf(u)>=0||Object.prototype.hasOwnProperty.call(f,u)&&(w[u]=f[u]);return w}function d(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}var h=function(){function f(m,w){for(var u=0;u<w.length;u++){var b=w[u];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(m,b.key,b)}}return function(m,w,u){return w&&f(m.prototype,w),u&&f(m,u),m}}();function v(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:f}function _(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}var g=!1;function T(f){g=f}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){T(!0)}}))}catch{}function B(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return g?f:f.capture}function oe(f){if("touches"in f){var m=f.touches[0],w=m.pageX,u=m.pageY;return{x:w,y:u}}var b=f.screenX,E=f.screenY;return{x:b,y:E}}var z=function(f){_(m,f);function m(){var w;d(this,m);for(var u=arguments.length,b=Array(u),E=0;E<u;E++)b[E]=arguments[E];var S=v(this,(w=m.__proto__||Object.getPrototypeOf(m)).call.apply(w,[this].concat(b)));return S._handleSwipeStart=S._handleSwipeStart.bind(S),S._handleSwipeMove=S._handleSwipeMove.bind(S),S._handleSwipeEnd=S._handleSwipeEnd.bind(S),S._onMouseDown=S._onMouseDown.bind(S),S._onMouseMove=S._onMouseMove.bind(S),S._onMouseUp=S._onMouseUp.bind(S),S._setSwiperRef=S._setSwiperRef.bind(S),S}return h(m,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,B({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,B({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(u){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(u))}},{key:"_onMouseMove",value:function(u){this.mouseDown&&this._handleSwipeMove(u)}},{key:"_onMouseUp",value:function(u){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(u)}},{key:"_handleSwipeStart",value:function(u){var b=oe(u),E=b.x,S=b.y;this.moveStart={x:E,y:S},this.props.onSwipeStart(u)}},{key:"_handleSwipeMove",value:function(u){if(this.moveStart){var b=oe(u),E=b.x,S=b.y,X=E-this.moveStart.x,ye=S-this.moveStart.y;this.moving=!0;var Le=this.props.onSwipeMove({x:X,y:ye},u);Le&&u.cancelable&&u.preventDefault(),this.movePosition={deltaX:X,deltaY:ye}}}},{key:"_handleSwipeEnd",value:function(u){this.props.onSwipeEnd(u);var b=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-b?this.props.onSwipeLeft(1,u):this.movePosition.deltaX>b&&this.props.onSwipeRight(1,u),this.movePosition.deltaY<-b?this.props.onSwipeUp(1,u):this.movePosition.deltaY>b&&this.props.onSwipeDown(1,u)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(u){this.swiper=u,this.props.innerRef(u)}},{key:"render",value:function(){var u=this.props;u.tagName;var b=u.className,E=u.style,S=u.children;u.allowMouseEvents,u.onSwipeUp,u.onSwipeDown,u.onSwipeLeft,u.onSwipeRight,u.onSwipeStart,u.onSwipeMove,u.onSwipeEnd,u.innerRef,u.tolerance;var X=l(u,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return e.default.createElement(this.props.tagName,s({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:b,style:E},X),S)}}]),m}(r.Component);z.displayName="ReactSwipe",z.propTypes={tagName:o.default.string,className:o.default.string,style:o.default.object,children:o.default.node,allowMouseEvents:o.default.bool,onSwipeUp:o.default.func,onSwipeDown:o.default.func,onSwipeLeft:o.default.func,onSwipeRight:o.default.func,onSwipeStart:o.default.func,onSwipeMove:o.default.func,onSwipeEnd:o.default.func,innerRef:o.default.func,tolerance:o.default.number.isRequired},z.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},n.default=z})}(ae)),ae}(function(t){(function(n,r){r(t,Ne())})(Ee,function(n,r){Object.defineProperty(n,"__esModule",{value:!0});var i=e(r);function e(o){return o&&o.__esModule?o:{default:o}}n.default=i.default})})(he);var U={},le={},He={get exports(){return le},set exports(t){le=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var n={}.hasOwnProperty;function r(){for(var i=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var a=typeof o;if(a==="string"||a==="number")i.push(o);else if(Array.isArray(o)){if(o.length){var s=r.apply(null,o);s&&i.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){i.push(o.toString());continue}for(var l in o)n.call(o,l)&&o[l]&&i.push(l)}}}return i.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r})()})(He);Object.defineProperty(U,"__esModule",{value:!0});U.default=void 0;var A=$e(le);function $e(t){return t&&t.__esModule?t:{default:t}}function Fe(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var xe={ROOT:function(n){return(0,A.default)(Fe({"carousel-root":!0},n||"",!!n))},CAROUSEL:function(n){return(0,A.default)({carousel:!0,"carousel-slider":n})},WRAPPER:function(n,r){return(0,A.default)({"thumbs-wrapper":!n,"slider-wrapper":n,"axis-horizontal":r==="horizontal","axis-vertical":r!=="horizontal"})},SLIDER:function(n,r){return(0,A.default)({thumbs:!n,slider:n,animated:!r})},ITEM:function(n,r,i){return(0,A.default)({thumb:!n,slide:n,selected:r,previous:i})},ARROW_PREV:function(n){return(0,A.default)({"control-arrow control-prev":!0,"control-disabled":n})},ARROW_NEXT:function(n){return(0,A.default)({"control-arrow control-next":!0,"control-disabled":n})},DOT:function(n){return(0,A.default)({dot:!0,selected:n})}};U.default=xe;var q={},ne={};Object.defineProperty(ne,"__esModule",{value:!0});ne.outerWidth=void 0;var Ue=function(n){var r=n.offsetWidth,i=getComputedStyle(n);return r+=parseInt(i.marginLeft)+parseInt(i.marginRight),r};ne.outerWidth=Ue;var N={};Object.defineProperty(N,"__esModule",{value:!0});N.default=void 0;var qe=function(n,r,i){var e=n===0?n:n+r,o=i==="horizontal"?[e,0,0]:[0,e,0],a="translate3d",s="("+o.join(",")+")";return a+s};N.default=qe;var j={};Object.defineProperty(j,"__esModule",{value:!0});j.default=void 0;var je=function(){return window};j.default=je;Object.defineProperty(q,"__esModule",{value:!0});q.default=void 0;var I=Xe(x),W=re(U),Ke=ne,_e=re(N),Be=re(he),Y=re(j);function re(t){return t&&t.__esModule?t:{default:t}}function Ie(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return Ie=function(){return t},t}function Xe(t){if(t&&t.__esModule)return t;if(t===null||$(t)!=="object"&&typeof t!="function")return{default:t};var n=Ie();if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var o=i?Object.getOwnPropertyDescriptor(t,e):null;o&&(o.get||o.set)?Object.defineProperty(r,e,o):r[e]=t[e]}return r.default=t,n&&n.set(t,r),r}function $(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$=function(r){return typeof r}:$=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},$(t)}function fe(){return fe=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},fe.apply(this,arguments)}function Ye(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Pe(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Ve(t,n,r){return n&&Pe(t.prototype,n),r&&Pe(t,r),t}function Ge(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&ce(t,n)}function ce(t,n){return ce=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i},ce(t,n)}function Je(t){var n=Ze();return function(){var i=Q(t),e;if(n){var o=Q(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return Qe(this,e)}}function Qe(t,n){return n&&($(n)==="object"||typeof n=="function")?n:O(t)}function O(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ze(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Q(t){return Q=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Q(t)}function P(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var et=function(n){return n.hasOwnProperty("key")},me=function(t){Ge(r,t);var n=Je(r);function r(i){var e;return Ye(this,r),e=n.call(this,i),P(O(e),"itemsWrapperRef",void 0),P(O(e),"itemsListRef",void 0),P(O(e),"thumbsRef",void 0),P(O(e),"setItemsWrapperRef",function(o){e.itemsWrapperRef=o}),P(O(e),"setItemsListRef",function(o){e.itemsListRef=o}),P(O(e),"setThumbsRef",function(o,a){e.thumbsRef||(e.thumbsRef=[]),e.thumbsRef[a]=o}),P(O(e),"updateSizes",function(){if(!(!e.props.children||!e.itemsWrapperRef||!e.thumbsRef)){var o=I.Children.count(e.props.children),a=e.itemsWrapperRef.clientWidth,s=e.props.thumbWidth?e.props.thumbWidth:(0,Ke.outerWidth)(e.thumbsRef[0]),l=Math.floor(a/s),d=l<o,h=d?o-l:0;e.setState(function(v,_){return{itemSize:s,visibleItems:l,firstItem:d?e.getFirstItem(_.selectedItem):0,lastPosition:h,showArrows:d}})}}),P(O(e),"handleClickItem",function(o,a,s){if(!et(s)||s.key==="Enter"){var l=e.props.onSelectItem;typeof l=="function"&&l(o,a)}}),P(O(e),"onSwipeStart",function(){e.setState({swiping:!0})}),P(O(e),"onSwipeEnd",function(){e.setState({swiping:!1})}),P(O(e),"onSwipeMove",function(o){var a=o.x;if(!e.state.itemSize||!e.itemsWrapperRef||!e.state.visibleItems)return!1;var s=0,l=I.Children.count(e.props.children),d=-(e.state.firstItem*100)/e.state.visibleItems,h=Math.max(l-e.state.visibleItems,0),v=-h*100/e.state.visibleItems;d===s&&a>0&&(a=0),d===v&&a<0&&(a=0);var _=e.itemsWrapperRef.clientWidth,g=d+100/(_/a);return e.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(T){e.itemsListRef.style[T]=(0,_e.default)(g,"%",e.props.axis)}),!0}),P(O(e),"slideRight",function(o){e.moveTo(e.state.firstItem-(typeof o=="number"?o:1))}),P(O(e),"slideLeft",function(o){e.moveTo(e.state.firstItem+(typeof o=="number"?o:1))}),P(O(e),"moveTo",function(o){o=o<0?0:o,o=o>=e.state.lastPosition?e.state.lastPosition:o,e.setState({firstItem:o})}),e.state={selectedItem:i.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},e}return Ve(r,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(e){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,Y.default)().addEventListener("resize",this.updateSizes),(0,Y.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,Y.default)().removeEventListener("resize",this.updateSizes),(0,Y.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(e){var o=e;return e>=this.state.lastPosition&&(o=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(o=this.state.firstItem),e<this.state.firstItem&&(o=e),o}},{key:"renderItems",value:function(){var e=this;return this.props.children.map(function(o,a){var s=W.default.ITEM(!1,a===e.state.selectedItem),l={key:a,ref:function(h){return e.setThumbsRef(h,a)},className:s,onClick:e.handleClickItem.bind(e,a,e.props.children[a]),onKeyDown:e.handleClickItem.bind(e,a,e.props.children[a]),"aria-label":"".concat(e.props.labels.item," ").concat(a+1),style:{width:e.props.thumbWidth}};return I.default.createElement("li",fe({},l,{role:"button",tabIndex:0}),o)})}},{key:"render",value:function(){var e=this;if(!this.props.children)return null;var o=I.Children.count(this.props.children)>1,a=this.state.showArrows&&this.state.firstItem>0,s=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,l={},d=-this.state.firstItem*(this.state.itemSize||0),h=(0,_e.default)(d,"px",this.props.axis),v=this.props.transitionTime+"ms";return l={WebkitTransform:h,MozTransform:h,MsTransform:h,OTransform:h,transform:h,msTransform:h,WebkitTransitionDuration:v,MozTransitionDuration:v,MsTransitionDuration:v,OTransitionDuration:v,transitionDuration:v,msTransitionDuration:v},I.default.createElement("div",{className:W.default.CAROUSEL(!1)},I.default.createElement("div",{className:W.default.WRAPPER(!1),ref:this.setItemsWrapperRef},I.default.createElement("button",{type:"button",className:W.default.ARROW_PREV(!a),onClick:function(){return e.slideRight()},"aria-label":this.props.labels.leftArrow}),o?I.default.createElement(Be.default,{tagName:"ul",className:W.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:l,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):I.default.createElement("ul",{className:W.default.SLIDER(!1,this.state.swiping),ref:function(g){return e.setItemsListRef(g)},style:l},this.renderItems()),I.default.createElement("button",{type:"button",className:W.default.ARROW_NEXT(!s),onClick:function(){return e.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),r}(I.Component);q.default=me;P(me,"displayName","Thumbs");P(me,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var ie={};Object.defineProperty(ie,"__esModule",{value:!0});ie.default=void 0;var tt=function(){return document};ie.default=tt;var R={};Object.defineProperty(R,"__esModule",{value:!0});R.setPosition=R.getPosition=R.isKeyboardEvent=R.defaultStatusFormatter=R.noop=void 0;var nt=x,rt=it(N);function it(t){return t&&t.__esModule?t:{default:t}}var ot=function(){};R.noop=ot;var at=function(n,r){return"".concat(n," of ").concat(r)};R.defaultStatusFormatter=at;var st=function(n){return n?n.hasOwnProperty("key"):!1};R.isKeyboardEvent=st;var ut=function(n,r){if(r.infiniteLoop&&++n,n===0)return 0;var i=nt.Children.count(r.children);if(r.centerMode&&r.axis==="horizontal"){var e=-n*r.centerSlidePercentage,o=i-1;return n&&(n!==o||r.infiniteLoop)?e+=(100-r.centerSlidePercentage)/2:n===o&&(e+=100-r.centerSlidePercentage),e}return-n*100};R.getPosition=ut;var lt=function(n,r){var i={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(e){i[e]=(0,rt.default)(n,"%",r)}),i};R.setPosition=lt;var C={};Object.defineProperty(C,"__esModule",{value:!0});C.fadeAnimationHandler=C.slideStopSwipingHandler=C.slideSwipeAnimationHandler=C.slideAnimationHandler=void 0;var Me=x,ft=ct(N),L=R;function ct(t){return t&&t.__esModule?t:{default:t}}function Oe(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,i)}return r}function k(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Oe(Object(r),!0).forEach(function(i){pt(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Oe(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function pt(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var dt=function(n,r){var i={},e=r.selectedItem,o=e,a=Me.Children.count(n.children)-1,s=n.infiniteLoop&&(e<0||e>a);if(s)return o<0?n.centerMode&&n.centerSlidePercentage&&n.axis==="horizontal"?i.itemListStyle=(0,L.setPosition)(-(a+2)*n.centerSlidePercentage-(100-n.centerSlidePercentage)/2,n.axis):i.itemListStyle=(0,L.setPosition)(-(a+2)*100,n.axis):o>a&&(i.itemListStyle=(0,L.setPosition)(0,n.axis)),i;var l=(0,L.getPosition)(e,n),d=(0,ft.default)(l,"%",n.axis),h=n.transitionTime+"ms";return i.itemListStyle={WebkitTransform:d,msTransform:d,OTransform:d,transform:d},r.swiping||(i.itemListStyle=k(k({},i.itemListStyle),{},{WebkitTransitionDuration:h,MozTransitionDuration:h,OTransitionDuration:h,transitionDuration:h,msTransitionDuration:h})),i};C.slideAnimationHandler=dt;var ht=function(n,r,i,e){var o={},a=r.axis==="horizontal",s=Me.Children.count(r.children),l=0,d=(0,L.getPosition)(i.selectedItem,r),h=r.infiniteLoop?(0,L.getPosition)(s-1,r)-100:(0,L.getPosition)(s-1,r),v=a?n.x:n.y,_=v;d===l&&v>0&&(_=0),d===h&&v<0&&(_=0);var g=d+100/(i.itemSize/_),T=Math.abs(v)>r.swipeScrollTolerance;return r.infiniteLoop&&T&&(i.selectedItem===0&&g>-100?g-=s*100:i.selectedItem===s-1&&g<-s*100&&(g+=s*100)),(!r.preventMovementUntilSwipeScrollTolerance||T||i.swipeMovementStarted)&&(i.swipeMovementStarted||e({swipeMovementStarted:!0}),o.itemListStyle=(0,L.setPosition)(g,r.axis)),T&&!i.cancelClick&&e({cancelClick:!0}),o};C.slideSwipeAnimationHandler=ht;var mt=function(n,r){var i=(0,L.getPosition)(r.selectedItem,n),e=(0,L.setPosition)(i,n.axis);return{itemListStyle:e}};C.slideStopSwipingHandler=mt;var vt=function(n,r){var i=n.transitionTime+"ms",e="ease-in-out",o={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:e,msTransitionTimingFunction:e,MozTransitionTimingFunction:e,WebkitTransitionTimingFunction:e,OTransitionTimingFunction:e};return r.swiping||(o=k(k({},o),{},{WebkitTransitionDuration:i,MozTransitionDuration:i,OTransitionDuration:i,transitionDuration:i,msTransitionDuration:i})),{slideStyle:o,selectedStyle:k(k({},o),{},{opacity:1,position:"relative"}),prevStyle:k({},o)}};C.fadeAnimationHandler=vt;Object.defineProperty(te,"__esModule",{value:!0});te.default=void 0;var y=wt(x),yt=K(he),D=K(U),St=K(q),V=K(ie),G=K(j),H=R,Z=C;function K(t){return t&&t.__esModule?t:{default:t}}function Ce(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return Ce=function(){return t},t}function wt(t){if(t&&t.__esModule)return t;if(t===null||F(t)!=="object"&&typeof t!="function")return{default:t};var n=Ce();if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var o=i?Object.getOwnPropertyDescriptor(t,e):null;o&&(o.get||o.set)?Object.defineProperty(r,e,o):r[e]=t[e]}return r.default=t,n&&n.set(t,r),r}function F(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?F=function(r){return typeof r}:F=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},F(t)}function pe(){return pe=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},pe.apply(this,arguments)}function Re(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,i)}return r}function M(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Re(Object(r),!0).forEach(function(i){c(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Re(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function bt(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Te(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function gt(t,n,r){return n&&Te(t.prototype,n),r&&Te(t,r),t}function _t(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&de(t,n)}function de(t,n){return de=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i},de(t,n)}function Pt(t){var n=Rt();return function(){var i=ee(t),e;if(n){var o=ee(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return Ot(this,e)}}function Ot(t,n){return n&&(F(n)==="object"||typeof n=="function")?n:p(t)}function p(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Rt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function ee(t){return ee=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},ee(t)}function c(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var ve=function(t){_t(r,t);var n=Pt(r);function r(i){var e;bt(this,r),e=n.call(this,i),c(p(e),"thumbsRef",void 0),c(p(e),"carouselWrapperRef",void 0),c(p(e),"listRef",void 0),c(p(e),"itemsRef",void 0),c(p(e),"timer",void 0),c(p(e),"animationHandler",void 0),c(p(e),"setThumbsRef",function(a){e.thumbsRef=a}),c(p(e),"setCarouselWrapperRef",function(a){e.carouselWrapperRef=a}),c(p(e),"setListRef",function(a){e.listRef=a}),c(p(e),"setItemsRef",function(a,s){e.itemsRef||(e.itemsRef=[]),e.itemsRef[s]=a}),c(p(e),"autoPlay",function(){y.Children.count(e.props.children)<=1||(e.clearAutoPlay(),e.props.autoPlay&&(e.timer=setTimeout(function(){e.increment()},e.props.interval)))}),c(p(e),"clearAutoPlay",function(){e.timer&&clearTimeout(e.timer)}),c(p(e),"resetAutoPlay",function(){e.clearAutoPlay(),e.autoPlay()}),c(p(e),"stopOnHover",function(){e.setState({isMouseEntered:!0},e.clearAutoPlay)}),c(p(e),"startOnLeave",function(){e.setState({isMouseEntered:!1},e.autoPlay)}),c(p(e),"isFocusWithinTheCarousel",function(){return e.carouselWrapperRef?!!((0,V.default)().activeElement===e.carouselWrapperRef||e.carouselWrapperRef.contains((0,V.default)().activeElement)):!1}),c(p(e),"navigateWithKeyboard",function(a){if(e.isFocusWithinTheCarousel()){var s=e.props.axis,l=s==="horizontal",d={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},h=l?d.ArrowRight:d.ArrowDown,v=l?d.ArrowLeft:d.ArrowUp;h===a.keyCode?e.increment():v===a.keyCode&&e.decrement()}}),c(p(e),"updateSizes",function(){if(!(!e.state.initialized||!e.itemsRef||e.itemsRef.length===0)){var a=e.props.axis==="horizontal",s=e.itemsRef[0];if(s){var l=a?s.clientWidth:s.clientHeight;e.setState({itemSize:l}),e.thumbsRef&&e.thumbsRef.updateSizes()}}}),c(p(e),"setMountState",function(){e.setState({hasMount:!0}),e.updateSizes()}),c(p(e),"handleClickItem",function(a,s){if(y.Children.count(e.props.children)!==0){if(e.state.cancelClick){e.setState({cancelClick:!1});return}e.props.onClickItem(a,s),a!==e.state.selectedItem&&e.setState({selectedItem:a})}}),c(p(e),"handleOnChange",function(a,s){y.Children.count(e.props.children)<=1||e.props.onChange(a,s)}),c(p(e),"handleClickThumb",function(a,s){e.props.onClickThumb(a,s),e.moveTo(a)}),c(p(e),"onSwipeStart",function(a){e.setState({swiping:!0}),e.props.onSwipeStart(a)}),c(p(e),"onSwipeEnd",function(a){e.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),e.props.onSwipeEnd(a),e.clearAutoPlay(),e.state.autoPlay&&e.autoPlay()}),c(p(e),"onSwipeMove",function(a,s){e.props.onSwipeMove(s);var l=e.props.swipeAnimationHandler(a,e.props,e.state,e.setState.bind(p(e)));return e.setState(M({},l)),!!Object.keys(l).length}),c(p(e),"decrement",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;e.moveTo(e.state.selectedItem-(typeof a=="number"?a:1))}),c(p(e),"increment",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;e.moveTo(e.state.selectedItem+(typeof a=="number"?a:1))}),c(p(e),"moveTo",function(a){if(typeof a=="number"){var s=y.Children.count(e.props.children)-1;a<0&&(a=e.props.infiniteLoop?s:0),a>s&&(a=e.props.infiniteLoop?0:s),e.selectItem({selectedItem:a}),e.state.autoPlay&&e.state.isMouseEntered===!1&&e.resetAutoPlay()}}),c(p(e),"onClickNext",function(){e.increment(1)}),c(p(e),"onClickPrev",function(){e.decrement(1)}),c(p(e),"onSwipeForward",function(){e.increment(1),e.props.emulateTouch&&e.setState({cancelClick:!0})}),c(p(e),"onSwipeBackwards",function(){e.decrement(1),e.props.emulateTouch&&e.setState({cancelClick:!0})}),c(p(e),"changeItem",function(a){return function(s){(!(0,H.isKeyboardEvent)(s)||s.key==="Enter")&&e.moveTo(a)}}),c(p(e),"selectItem",function(a){e.setState(M({previousItem:e.state.selectedItem},a),function(){e.setState(e.animationHandler(e.props,e.state))}),e.handleOnChange(a.selectedItem,y.Children.toArray(e.props.children)[a.selectedItem])}),c(p(e),"getInitialImage",function(){var a=e.props.selectedItem,s=e.itemsRef&&e.itemsRef[a],l=s&&s.getElementsByTagName("img")||[];return l[0]}),c(p(e),"getVariableItemHeight",function(a){var s=e.itemsRef&&e.itemsRef[a];if(e.state.hasMount&&s&&s.children.length){var l=s.children[0].getElementsByTagName("img")||[];if(l.length>0){var d=l[0];if(!d.complete){var h=function g(){e.forceUpdate(),d.removeEventListener("load",g)};d.addEventListener("load",h)}}var v=l[0]||s.children[0],_=v.clientHeight;return _>0?_:null}return null});var o={initialized:!1,previousItem:i.selectedItem,selectedItem:i.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:i.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return e.animationHandler=typeof i.animationHandler=="function"&&i.animationHandler||i.animationHandler==="fade"&&Z.fadeAnimationHandler||Z.slideAnimationHandler,e.state=M(M({},o),e.animationHandler(i,o)),e}return gt(r,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(e,o){!e.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!e.autoFocus&&this.props.autoFocus&&this.forceFocus(),o.swiping&&!this.state.swiping&&this.setState(M({},this.props.stopSwipingHandler(this.props,this.state))),(e.selectedItem!==this.props.selectedItem||e.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),e.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var e=this;this.bindEvents(),this.state.autoPlay&&y.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var o=e.getInitialImage();o&&!o.complete?o.addEventListener("load",e.setMountState):e.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,G.default)().addEventListener("resize",this.updateSizes),(0,G.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,V.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,G.default)().removeEventListener("resize",this.updateSizes),(0,G.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,V.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var e;(e=this.carouselWrapperRef)===null||e===void 0||e.focus()}},{key:"renderItems",value:function(e){var o=this;return this.props.children?y.Children.map(this.props.children,function(a,s){var l=s===o.state.selectedItem,d=s===o.state.previousItem,h=l&&o.state.selectedStyle||d&&o.state.prevStyle||o.state.slideStyle||{};o.props.centerMode&&o.props.axis==="horizontal"&&(h=M(M({},h),{},{minWidth:o.props.centerSlidePercentage+"%"})),o.state.swiping&&o.state.swipeMovementStarted&&(h=M(M({},h),{},{pointerEvents:"none"}));var v={ref:function(g){return o.setItemsRef(g,s)},key:"itemKey"+s+(e?"clone":""),className:D.default.ITEM(!0,s===o.state.selectedItem,s===o.state.previousItem),onClick:o.handleClickItem.bind(o,s,a),style:h};return y.default.createElement("li",v,o.props.renderItem(a,{isSelected:s===o.state.selectedItem,isPrevious:s===o.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var e=this,o=this.props,a=o.showIndicators,s=o.labels,l=o.renderIndicator,d=o.children;return a?y.default.createElement("ul",{className:"control-dots"},y.Children.map(d,function(h,v){return l&&l(e.changeItem(v),v===e.state.selectedItem,v,s.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?y.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,y.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||y.Children.count(this.props.children)===0?null:y.default.createElement(St.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var e=this;if(!this.props.children||y.Children.count(this.props.children)===0)return null;var o=this.props.swipeable&&y.Children.count(this.props.children)>1,a=this.props.axis==="horizontal",s=this.props.showArrows&&y.Children.count(this.props.children)>1,l=s&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,d=s&&(this.state.selectedItem<y.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,h=this.renderItems(!0),v=h.shift(),_=h.pop(),g={className:D.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},T={};if(a){if(g.onSwipeLeft=this.onSwipeForward,g.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var B=this.getVariableItemHeight(this.state.selectedItem);T.height=B||"auto"}}else g.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,g.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,g.style=M(M({},g.style),{},{height:this.state.itemSize}),T.height=this.state.itemSize;return y.default.createElement("div",{"aria-label":this.props.ariaLabel,className:D.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},y.default.createElement("div",{className:D.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,l,this.props.labels.leftArrow),y.default.createElement("div",{className:D.default.WRAPPER(!0,this.props.axis),style:T},o?y.default.createElement(yt.default,pe({tagName:"ul",innerRef:this.setListRef},g,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&_,this.renderItems(),this.props.infiniteLoop&&v):y.default.createElement("ul",{className:D.default.SLIDER(!0,this.state.swiping),ref:function(z){return e.setListRef(z)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&_,this.renderItems(),this.props.infiniteLoop&&v)),this.props.renderArrowNext(this.onClickNext,d,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),r}(y.default.Component);te.default=ve;c(ve,"displayName","Carousel");c(ve,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:H.noop,onClickThumb:H.noop,onChange:H.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(n,r,i){return y.default.createElement("button",{type:"button","aria-label":i,className:D.default.ARROW_PREV(!r),onClick:n})},renderArrowNext:function(n,r,i){return y.default.createElement("button",{type:"button","aria-label":i,className:D.default.ARROW_NEXT(!r),onClick:n})},renderIndicator:function(n,r,i,e){return y.default.createElement("li",{className:D.default.DOT(r),onClick:n,onKeyDown:n,value:i,key:i,role:"button",tabIndex:0,"aria-label":"".concat(e," ").concat(i+1)})},renderItem:function(n){return n},renderThumbs:function(n){var r=y.Children.map(n,function(i){var e=i;if(i.type!=="img"&&(e=y.Children.toArray(i.props.children).find(function(o){return o.type==="img"})),!!e)return e});return r.filter(function(i){return i}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):r},statusFormatter:H.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:Z.slideSwipeAnimationHandler,stopSwipingHandler:Z.slideStopSwipingHandler});var Tt={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Carousel",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"CarouselProps",{enumerable:!0,get:function(){return r.CarouselProps}}),Object.defineProperty(t,"Thumbs",{enumerable:!0,get:function(){return i.default}});var n=e(te),r=Tt,i=e(q);function e(o){return o&&o.__esModule?o:{default:o}}})(De);
