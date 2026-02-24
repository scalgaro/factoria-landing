var tE=Object.defineProperty,nE=Object.defineProperties;var iE=Object.getOwnPropertyDescriptors;var uy=Object.getOwnPropertySymbols;var rE=Object.prototype.hasOwnProperty,oE=Object.prototype.propertyIsEnumerable;var dy=(n,e,t)=>e in n?tE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,me=(n,e)=>{for(var t in e||={})rE.call(e,t)&&dy(n,t,e[t]);if(uy)for(var t of uy(e))oE.call(e,t)&&dy(n,t,e[t]);return n},bt=(n,e)=>nE(n,iE(e));var ln=null,rl=!1,xh=1,sE=null,gn=Symbol("SIGNAL");function Qe(n){let e=ln;return ln=n,e}function sl(){return ln}var ia={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ra(n){if(rl)throw new Error("");if(ln===null)return;ln.consumerOnSignalRead(n);let e=ln.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=ln.recomputing;if(i&&(t=e!==void 0?e.nextProducer:ln.producers,t!==void 0&&t.producer===n)){ln.producersTail=t,t.lastReadVersion=n.version;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===ln&&(!i||cE(r,ln)))return;let o=Ho(ln),s={producer:n,consumer:ln,nextProducer:t,prevConsumer:r,lastReadVersion:n.version,nextConsumer:void 0};ln.producersTail=s,e!==void 0?e.nextProducer=s:ln.producers=s,o&&my(n,s)}function fy(){xh++}function Mh(n){if(!(Ho(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===xh)){if(!n.producerMustRecompute(n)&&!cl(n)){_h(n);return}n.producerRecomputeValue(n),_h(n)}}function Sh(n){if(n.consumers===void 0)return;let e=rl;rl=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||aE(i)}}finally{rl=e}}function bh(){return ln?.consumerAllowSignalWrites!==!1}function aE(n){n.dirty=!0,Sh(n),n.consumerMarkedDirty?.(n)}function _h(n){n.dirty=!1,n.lastCleanEpoch=xh}function oa(n){return n&&hy(n),Qe(n)}function hy(n){n.producersTail=void 0,n.recomputing=!0}function al(n,e){Qe(e),n&&py(n)}function py(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(Ho(n))do t=Eh(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function cl(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||(Mh(t),i!==t.version))return!0}return!1}function sa(n){if(Ho(n)){let e=n.producers;for(;e!==void 0;)e=Eh(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function my(n,e){let t=n.consumersTail,i=Ho(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)my(r.producer,r)}function Eh(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(e.consumers=i,!Ho(e)){let o=e.producers;for(;o!==void 0;)o=Eh(o)}return t}function Ho(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function wh(n){sE?.(n)}function cE(n,e){let t=e.producersTail;if(t!==void 0){let i=e.producers;do{if(i===n)return!0;if(i===t)break;i=i.nextProducer}while(i!==void 0)}return!1}function Th(n,e){return Object.is(n,e)}function Ch(n,e){let t=Object.create(lE);t.computation=n,e!==void 0&&(t.equal=e);let i=()=>{if(Mh(t),ra(t),t.value===ol)throw t.error;return t.value};return i[gn]=t,wh(t),i}var vh=Symbol("UNSET"),yh=Symbol("COMPUTING"),ol=Symbol("ERRORED"),lE=bt(me({},ia),{value:vh,dirty:!0,error:null,equal:Th,kind:"computed",producerMustRecompute(n){return n.value===vh||n.value===yh},producerRecomputeValue(n){if(n.value===yh)throw new Error("");let e=n.value;n.value=yh;let t=oa(n),i,r=!1;try{i=n.computation(),Qe(null),r=e!==vh&&e!==ol&&i!==ol&&n.equal(e,i)}catch(o){i=ol,n.error=o}finally{al(n,t)}if(r){n.value=e;return}n.value=i,n.version++}});function uE(){throw new Error}var gy=uE;function vy(n){gy(n)}function Ih(n){gy=n}var dE=null;function Ah(n,e){let t=Object.create(ll);t.value=n,e!==void 0&&(t.equal=e);let i=()=>yy(t);return i[gn]=t,wh(t),[i,s=>aa(t,s),s=>_y(t,s)]}function yy(n){return ra(n),n.value}function aa(n,e){bh()||vy(n),n.equal(n.value,e)||(n.value=e,fE(n))}function _y(n,e){bh()||vy(n),aa(n,e(n.value))}var ll=bt(me({},ia),{equal:Th,value:void 0,kind:"signal"});function fE(n){n.version++,fy(),Sh(n),dE?.(n)}function Dh(n){let e=Qe(null);try{return n()}finally{Qe(e)}}function Ue(n){return typeof n=="function"}function zo(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ul=zo(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function ca(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Qt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let o of t)o.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ue(i))try{i()}catch(o){e=o instanceof ul?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{xy(o)}catch(s){e=e??[],s instanceof ul?e=[...e,...s.errors]:e.push(s)}}if(e)throw new ul(e)}}add(e){var t;if(e&&e!==this)if(this.closed)xy(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&ca(t,e)}remove(e){let{_finalizers:t}=this;t&&ca(t,e),e instanceof n&&e._removeParent(this)}};Qt.EMPTY=(()=>{let n=new Qt;return n.closed=!0,n})();var Rh=Qt.EMPTY;function dl(n){return n instanceof Qt||n&&"closed"in n&&Ue(n.remove)&&Ue(n.add)&&Ue(n.unsubscribe)}function xy(n){Ue(n)?n():n.unsubscribe()}var Kn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Go={setTimeout(n,e,...t){let{delegate:i}=Go;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Go;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function fl(n){Go.setTimeout(()=>{let{onUnhandledError:e}=Kn;if(e)e(n);else throw n})}function la(){}var My=Nh("C",void 0,void 0);function Sy(n){return Nh("E",void 0,n)}function by(n){return Nh("N",n,void 0)}function Nh(n,e,t){return{kind:n,value:e,error:t}}var Jr=null;function jo(n){if(Kn.useDeprecatedSynchronousErrorHandling){let e=!Jr;if(e&&(Jr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Jr;if(Jr=null,t)throw i}}else n()}function Ey(n){Kn.useDeprecatedSynchronousErrorHandling&&Jr&&(Jr.errorThrown=!0,Jr.error=n)}var Kr=class extends Qt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,dl(e)&&e.add(this)):this.destination=mE}static create(e,t,i){return new Wo(e,t,i)}next(e){this.isStopped?Oh(by(e),this):this._next(e)}error(e){this.isStopped?Oh(Sy(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Oh(My,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},hE=Function.prototype.bind;function Ph(n,e){return hE.call(n,e)}var Lh=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){hl(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){hl(i)}else hl(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){hl(t)}}},Wo=class extends Kr{constructor(e,t,i){super();let r;if(Ue(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let o;this&&Kn.useDeprecatedNextContext?(o=Object.create(e),o.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Ph(e.next,o),error:e.error&&Ph(e.error,o),complete:e.complete&&Ph(e.complete,o)}):r=e}this.destination=new Lh(r)}};function hl(n){Kn.useDeprecatedSynchronousErrorHandling?Ey(n):fl(n)}function pE(n){throw n}function Oh(n,e){let{onStoppedNotification:t}=Kn;t&&Go.setTimeout(()=>t(n,e))}var mE={closed:!0,next:la,error:pE,complete:la};var $o=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Qn(n){return n}function Fh(...n){return kh(n)}function kh(n){return n.length===0?Qn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var st=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let o=vE(t)?t:new Wo(t,i,r);return jo(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=wy(i),new i((r,o)=>{let s=new Wo({next:a=>{try{t(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[$o](){return this}pipe(...t){return kh(t)(this)}toPromise(t){return t=wy(t),new t((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return n.create=e=>new n(e),n})();function wy(n){var e;return(e=n??Kn.Promise)!==null&&e!==void 0?e:Promise}function gE(n){return n&&Ue(n.next)&&Ue(n.error)&&Ue(n.complete)}function vE(n){return n&&n instanceof Kr||gE(n)&&dl(n)}function yE(n){return Ue(n?.lift)}function lt(n){return e=>{if(yE(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function _t(n,e,t,i,r){return new Uh(n,e,t,i,r)}var Uh=class extends Kr{constructor(e,t,i,r,o,s){super(e),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var Ty=zo(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var en=(()=>{class n extends st{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new pl(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Ty}next(t){jo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){jo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){jo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Rh:(this.currentObservers=null,o.push(t),new Qt(()=>{this.currentObservers=null,ca(o,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:o}=this;i?t.error(r):o&&t.complete()}asObservable(){let t=new st;return t.source=this,t}}return n.create=(e,t)=>new pl(e,t),n})(),pl=class extends en{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Rh}};var tn=class extends en{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var nn=new st(n=>n.complete());function Cy(n){return n&&Ue(n.schedule)}function Iy(n){return n[n.length-1]}function Ay(n){return Ue(Iy(n))?n.pop():void 0}function hr(n){return Cy(Iy(n))?n.pop():void 0}function Ry(n,e,t,i){function r(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(i.next(u))}catch(d){s(d)}}function c(u){try{l(i.throw(u))}catch(d){s(d)}}function l(u){u.done?o(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Dy(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Qr(n){return this instanceof Qr?(this.v=n,this):new Qr(n)}function Ny(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(_){return new Promise(function(m,p){o.push([h,_,m,p])>1||c(h,_)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(_){f(o[0][3],_)}}function l(h){h.value instanceof Qr?Promise.resolve(h.value.v).then(u,d):f(o[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),o.shift(),o.length&&c(o[0][0],o[0][1])}}function Py(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Dy=="function"?Dy(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(o){t[o]=n[o]&&function(s){return new Promise(function(a,c){s=n[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var ml=n=>n&&typeof n.length=="number"&&typeof n!="function";function gl(n){return Ue(n?.then)}function vl(n){return Ue(n[$o])}function yl(n){return Symbol.asyncIterator&&Ue(n?.[Symbol.asyncIterator])}function _l(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function _E(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var xl=_E();function Ml(n){return Ue(n?.[xl])}function Sl(n){return Ny(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield Qr(t.read());if(r)return yield Qr(void 0);yield yield Qr(i)}}finally{t.releaseLock()}})}function bl(n){return Ue(n?.getReader)}function $t(n){if(n instanceof st)return n;if(n!=null){if(vl(n))return xE(n);if(ml(n))return ME(n);if(gl(n))return SE(n);if(yl(n))return Oy(n);if(Ml(n))return bE(n);if(bl(n))return EE(n)}throw _l(n)}function xE(n){return new st(e=>{let t=n[$o]();if(Ue(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ME(n){return new st(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function SE(n){return new st(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,fl)})}function bE(n){return new st(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Oy(n){return new st(e=>{wE(n,e).catch(t=>e.error(t))})}function EE(n){return Oy(Sl(n))}function wE(n,e){var t,i,r,o;return Ry(this,void 0,void 0,function*(){try{for(t=Py(n);i=yield t.next(),!i.done;){let s=i.value;if(e.next(s),e.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=t.return)&&(yield o.call(t))}finally{if(r)throw r.error}}e.complete()})}function wn(n,e,t,i=0,r=!1){let o=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(o),!r)return o}function El(n,e=0){return lt((t,i)=>{t.subscribe(_t(i,r=>wn(i,n,()=>i.next(r),e),()=>wn(i,n,()=>i.complete(),e),r=>wn(i,n,()=>i.error(r),e)))})}function wl(n,e=0){return lt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Ly(n,e){return $t(n).pipe(wl(e),El(e))}function Fy(n,e){return $t(n).pipe(wl(e),El(e))}function ky(n,e){return new st(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Uy(n,e){return new st(t=>{let i;return wn(t,e,()=>{i=n[xl](),wn(t,e,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){t.error(s);return}o?t.complete():t.next(r)},0,!0)}),()=>Ue(i?.return)&&i.return()})}function Tl(n,e){if(!n)throw new Error("Iterable cannot be null");return new st(t=>{wn(t,e,()=>{let i=n[Symbol.asyncIterator]();wn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function By(n,e){return Tl(Sl(n),e)}function Vy(n,e){if(n!=null){if(vl(n))return Ly(n,e);if(ml(n))return ky(n,e);if(gl(n))return Fy(n,e);if(yl(n))return Tl(n,e);if(Ml(n))return Uy(n,e);if(bl(n))return By(n,e)}throw _l(n)}function qt(n,e){return e?Vy(n,e):$t(n)}function nt(...n){let e=hr(n);return qt(n,e)}function Bh(n,e){let t=Ue(n)?n:()=>n,i=r=>r.error(t());return new st(e?r=>e.schedule(i,0,r):i)}function Cl(n){return!!n&&(n instanceof st||Ue(n.lift)&&Ue(n.subscribe))}var eo=zo(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Nt(n,e){return lt((t,i)=>{let r=0;t.subscribe(_t(i,o=>{i.next(n.call(e,o,r++))}))})}var{isArray:TE}=Array;function CE(n,e){return TE(e)?n(...e):n(e)}function Hy(n){return Nt(e=>CE(n,e))}var{isArray:IE}=Array,{getPrototypeOf:AE,prototype:DE,keys:RE}=Object;function zy(n){if(n.length===1){let e=n[0];if(IE(e))return{args:e,keys:null};if(NE(e)){let t=RE(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function NE(n){return n&&typeof n=="object"&&AE(n)===DE}function Gy(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Vh(...n){let e=hr(n),t=Ay(n),{args:i,keys:r}=zy(n);if(i.length===0)return qt([],e);let o=new st(PE(i,e,r?s=>Gy(r,s):Qn));return t?o.pipe(Hy(t)):o}function PE(n,e,t=Qn){return i=>{jy(e,()=>{let{length:r}=n,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)jy(e,()=>{let l=qt(n[c],e),u=!1;l.subscribe(_t(i,d=>{o[c]=d,u||(u=!0,a--),a||i.next(t(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function jy(n,e,t){n?wn(t,n,e):e()}function Wy(n,e,t,i,r,o,s,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=_=>l<i?g(_):c.push(_),g=_=>{o&&e.next(_),l++;let m=!1;$t(t(_,u++)).subscribe(_t(e,p=>{r?.(p),o?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();s?wn(e,s,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(_t(e,h,()=>{d=!0,f()})),()=>{a?.()}}function vn(n,e,t=1/0){return Ue(e)?vn((i,r)=>Nt((o,s)=>e(i,o,r,s))($t(n(i,r))),t):(typeof e=="number"&&(t=e),lt((i,r)=>Wy(i,r,n,t)))}function $y(n=1/0){return vn(Qn,n)}function qy(){return $y(1)}function qo(...n){return qy()(qt(n,hr(n)))}function ua(n){return new st(e=>{$t(n()).subscribe(e)})}function Vi(n,e){return lt((t,i)=>{let r=0;t.subscribe(_t(i,o=>n.call(e,o,r++)&&i.next(o)))})}function da(n){return lt((e,t)=>{let i=null,r=!1,o;i=e.subscribe(_t(t,void 0,void 0,s=>{o=$t(n(s,da(n)(e))),i?(i.unsubscribe(),i=null,o.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(t))})}function Il(n,e){return Ue(e)?vn(n,e,1):vn(n,1)}function Xy(n){return lt((e,t)=>{let i=!1;e.subscribe(_t(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function Hi(n){return n<=0?()=>nn:lt((e,t)=>{let i=0;e.subscribe(_t(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Yy(n=OE){return lt((e,t)=>{let i=!1;e.subscribe(_t(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function OE(){return new eo}function Hh(n){return lt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function zi(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Vi((r,o)=>n(r,o,i)):Qn,Hi(1),t?Xy(e):Yy(()=>new eo))}function Al(n){return n<=0?()=>nn:lt((e,t)=>{let i=[];e.subscribe(_t(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function zh(...n){let e=hr(n);return lt((t,i)=>{(e?qo(n,t,e):qo(n,t)).subscribe(i)})}function Gi(n,e){return lt((t,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();t.subscribe(_t(i,c=>{r?.unsubscribe();let l=0,u=o++;$t(n(c,u)).subscribe(r=_t(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function fa(n){return lt((e,t)=>{$t(n).subscribe(_t(t,()=>t.complete(),la)),!t.closed&&e.subscribe(t)})}function gi(n,e,t){let i=Ue(n)||e||t?{next:n,error:e,complete:t}:n;return i?lt((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(_t(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Qn}var Gh;function Dl(){return Gh}function vi(n){let e=Gh;return Gh=n,e}var Zy=Symbol("NotFound");function Xo(n){return n===Zy||n?.name==="\u0275NotFound"}var Ce=class extends Error{code;constructor(e,t){super(ya(e,t)),this.code=e}};function kE(n){return`NG0${Math.abs(n)}`}function ya(n,e){return`${kE(n)}${e?": "+e:""}`}function ut(n){for(let e in n)if(n[e]===ut)return e;throw Error("")}function pr(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(pr).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function rp(n,e){return n?e?`${n} ${e}`:n:e||""}var UE=ut({__forward_ref__:ut});function Fl(n){return n.__forward_ref__=Fl,n.toString=function(){return pr(this())},n}function Tn(n){return op(n)?n():n}function op(n){return typeof n=="function"&&n.hasOwnProperty(UE)&&n.__forward_ref__===Fl}function Fe(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function _a(n){return BE(n,kl)}function sp(n){return _a(n)!==null}function BE(n,e){return n.hasOwnProperty(e)&&n[e]||null}function VE(n){let e=n?.[kl]??null;return e||null}function Wh(n){return n&&n.hasOwnProperty(Nl)?n[Nl]:null}var kl=ut({\u0275prov:ut}),Nl=ut({\u0275inj:ut}),Pe=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Fe({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function ap(n){return n&&!!n.\u0275providers}var cp=ut({\u0275cmp:ut}),lp=ut({\u0275dir:ut}),up=ut({\u0275pipe:ut}),dp=ut({\u0275mod:ut}),pa=ut({\u0275fac:ut}),oo=ut({__NG_ELEMENT_ID__:ut}),Jy=ut({__NG_ENV_ID__:ut});function fp(n){return Ul(n,"@NgModule"),n[dp]||null}function vr(n){return Ul(n,"@Component"),n[cp]||null}function hp(n){return Ul(n,"@Directive"),n[lp]||null}function t_(n){return Ul(n,"@Pipe"),n[up]||null}function Ul(n,e){if(n==null)throw new Ce(-919,!1)}var n_=ut({ngErrorCode:ut}),HE=ut({ngErrorMessage:ut}),zE=ut({ngTokenPath:ut});function pp(n,e){return i_("",-200,e)}function Bl(n,e){throw new Ce(-201,!1)}function i_(n,e,t){let i=new Ce(e,n);return i[n_]=e,i[HE]=n,t&&(i[zE]=t),i}function GE(n){return n[n_]}var $h;function r_(){return $h}function An(n){let e=$h;return $h=n,e}function mp(n,e,t){let i=_a(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;Bl(n,"")}var jE={},to=jE,WE="__NG_DI_FLAG__",qh=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=no(t)||0;try{return this.injector.get(e,i&8?null:to,i)}catch(r){if(Xo(r))return r;throw r}}};function $E(n,e=0){let t=Dl();if(t===void 0)throw new Ce(-203,!1);if(t===null)return mp(n,void 0,e);{let i=qE(e),r=t.retrieve(n,i);if(Xo(r)){if(i.optional)return null;throw r}return r}}function Ke(n,e=0){return(r_()||$E)(Tn(n),e)}function ie(n,e){return Ke(n,no(e))}function no(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function qE(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function Xh(n){let e=[];for(let t=0;t<n.length;t++){let i=Tn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ce(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=XE(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}e.push(Ke(r,o))}else e.push(Ke(i))}return e}function XE(n){return n[WE]}function io(n,e){let t=n.hasOwnProperty(pa);return t?n[pa]:null}function o_(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],o=e[i];if(t&&(r=t(r),o=t(o)),o!==r)return!1}return!0}function s_(n){return n.flat(Number.POSITIVE_INFINITY)}function Vl(n,e){n.forEach(t=>Array.isArray(t)?Vl(t,e):e(t))}function gp(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function xa(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var so={},mr=[],ao=new Pe(""),vp=new Pe("",-1),yp=new Pe(""),ma=class{get(e,t=to){if(t===to){let r=i_("",-201);throw r.name="\u0275NotFound",r}return t}};function Jo(n){return{\u0275providers:n}}function a_(n){return Jo([{provide:ao,multi:!0,useValue:n}])}function c_(...n){return{\u0275providers:_p(!0,n),\u0275fromNgModule:!0}}function _p(n,...e){let t=[],i=new Set,r,o=s=>{t.push(s)};return Vl(e,s=>{let a=s;Pl(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&l_(r,o),t}function l_(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];xp(r,o=>{e(o,i)})}}function Pl(n,e,t,i){if(n=Tn(n),!n)return!1;let r=null,o=Wh(n),s=!o&&vr(n);if(!o&&!s){let c=n.ngModule;if(o=Wh(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=n}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)Pl(l,e,t,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;Vl(o.imports,u=>{Pl(u,e,t,i)&&(l||=[],l.push(u))}),l!==void 0&&l_(l,e)}if(!a){let l=io(r)||(()=>new r);e({provide:r,useFactory:l,deps:mr},r),e({provide:yp,useValue:r,multi:!0},r),e({provide:ao,useValue:()=>Ke(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=n;xp(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function xp(n,e){for(let t of n)ap(t)&&(t=t.\u0275providers),Array.isArray(t)?xp(t,e):e(t)}var YE=ut({provide:String,useValue:ut});function u_(n){return n!==null&&typeof n=="object"&&YE in n}function ZE(n){return!!(n&&n.useExisting)}function JE(n){return!!(n&&n.useFactory)}function Ol(n){return typeof n=="function"}var Ma=new Pe(""),Rl={},Ky={},jh;function Sa(){return jh===void 0&&(jh=new ma),jh}var Vt=class{},ro=class extends Vt{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,Zh(e,s=>this.processProvider(s)),this.records.set(vp,Yo(void 0,this)),r.has("environment")&&this.records.set(Vt,Yo(void 0,this));let o=this.records.get(Ma);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(yp,mr,{self:!0}))}retrieve(e,t){let i=no(t)||0;try{return this.get(e,to,i)}catch(r){if(Xo(r))return r;throw r}}destroy(){ha(this),this._destroyed=!0;let e=Qe(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Qe(e)}}onDestroy(e){return ha(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){ha(this);let t=vi(this),i=An(void 0),r;try{return e()}finally{vi(t),An(i)}}get(e,t=to,i){if(ha(this),e.hasOwnProperty(Jy))return e[Jy](this);let r=no(i),o,s=vi(this),a=An(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=nw(e)&&_a(e);u&&this.injectableDefInScope(u)?l=Yo(Yh(e),Rl):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?Sa():this.parent;return t=r&8&&t===to?null:t,c.get(e,t)}catch(c){let l=GE(c);throw l===-200||l===-201?new Ce(l,null):c}finally{An(a),vi(s)}}resolveInjectorInitializers(){let e=Qe(null),t=vi(this),i=An(void 0),r;try{let o=this.get(ao,mr,{self:!0});for(let s of o)s()}finally{vi(t),An(i),Qe(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(pr(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=Tn(e);let t=Ol(e)?e:Tn(e&&e.provide),i=QE(e);if(!Ol(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Yo(void 0,Rl,!0),r.factory=()=>Xh(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=Qe(null);try{if(t.value===Ky)throw pp(pr(e));return t.value===Rl&&(t.value=Ky,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&tw(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Qe(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Tn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Yh(n){let e=_a(n),t=e!==null?e.factory:io(n);if(t!==null)return t;if(n instanceof Pe)throw new Ce(204,!1);if(n instanceof Function)return KE(n);throw new Ce(204,!1)}function KE(n){if(n.length>0)throw new Ce(204,!1);let t=VE(n);return t!==null?()=>t.factory(n):()=>new n}function QE(n){if(u_(n))return Yo(void 0,n.useValue);{let e=d_(n);return Yo(e,Rl)}}function d_(n,e,t){let i;if(Ol(n)){let r=Tn(n);return io(r)||Yh(r)}else if(u_(n))i=()=>Tn(n.useValue);else if(JE(n))i=()=>n.useFactory(...Xh(n.deps||[]));else if(ZE(n))i=(r,o)=>Ke(Tn(n.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Tn(n&&(n.useClass||n.provide));if(ew(n))i=()=>new r(...Xh(n.deps));else return io(r)||Yh(r)}return i}function ha(n){if(n.destroyed)throw new Ce(205,!1)}function Yo(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function ew(n){return!!n.deps}function tw(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function nw(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function Zh(n,e){for(let t of n)Array.isArray(t)?Zh(t,e):t&&ap(t)?Zh(t.\u0275providers,e):e(t)}function un(n,e){let t;n instanceof ro?(ha(n),t=n):t=new qh(n);let i,r=vi(t),o=An(void 0);try{return e()}finally{vi(r),An(o)}}function f_(){return r_()!==void 0||Dl()!=null}var ei=0,Be=1,ze=2,Xt=3,Vn=4,Hn=5,ba=6,Ea=7,Dn=8,co=9,$i=10,Rn=11,Ko=12,Mp=13,Qo=14,zn=15,yr=16,lo=17,_i=18,_r=19,Sp=20,ji=21,Hl=22,wa=23,Nn=24,zl=25,Ta=26,Gn=27,h_=1;var xr=7,Ca=8,uo=9,xn=10;function qi(n){return Array.isArray(n)&&typeof n[h_]=="object"}function ti(n){return Array.isArray(n)&&n[h_]===!0}function bp(n){return(n.flags&4)!==0}function es(n){return n.componentOffset>-1}function Ep(n){return(n.flags&1)===1}function fo(n){return!!n.template}function ts(n){return(n[ze]&512)!==0}function ho(n){return(n[ze]&256)===256}var wp="svg",p_="math";function xi(n){for(;Array.isArray(n);)n=n[ei];return n}function Mr(n,e){return xi(e[n.index])}function Tp(n,e){return n.data[e]}function Xi(n,e){let t=e[n];return qi(t)?t:t[ei]}function Gl(n){return(n[ze]&128)===128}function m_(n){return ti(n[Xt])}function Ia(n,e){return e==null?null:n[e]}function Cp(n){n[lo]=0}function Ip(n){n[ze]&1024||(n[ze]|=1024,Gl(n)&&Da(n))}function Aa(n){return!!(n[ze]&9216||n[Nn]?.dirty)}function jl(n){n[$i].changeDetectionScheduler?.notify(8),n[ze]&64&&(n[ze]|=1024),Aa(n)&&Da(n)}function Da(n){n[$i].changeDetectionScheduler?.notify(0);let e=gr(n);for(;e!==null&&!(e[ze]&8192||(e[ze]|=8192,!Gl(e)));)e=gr(e)}function Ap(n,e){if(ho(n))throw new Ce(911,!1);n[ji]===null&&(n[ji]=[]),n[ji].push(e)}function g_(n,e){if(n[ji]===null)return;let t=n[ji].indexOf(e);t!==-1&&n[ji].splice(t,1)}function gr(n){let e=n[Xt];return ti(e)?e[Xt]:e}function v_(n){return n[Ea]??=[]}function y_(n){return n.cleanup??=[]}function __(n,e,t,i){let r=v_(e);r.push(t),n.firstCreatePass&&y_(n).push(i,r.length-1)}var at={lFrame:N_(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Jh=!1;function x_(){return at.lFrame.elementDepthCount}function M_(){at.lFrame.elementDepthCount++}function Dp(){at.lFrame.elementDepthCount--}function S_(){return at.bindingsEnabled}function b_(){return at.skipHydrationRootTNode!==null}function Rp(n){return at.skipHydrationRootTNode===n}function Np(){at.skipHydrationRootTNode=null}function dn(){return at.lFrame.lView}function Wl(){return at.lFrame.tView}function Mi(){let n=Pp();for(;n!==null&&n.type===64;)n=n.parent;return n}function Pp(){return at.lFrame.currentTNode}function E_(){let n=at.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Ra(n,e){let t=at.lFrame;t.currentTNode=n,t.isParent=e}function Op(){return at.lFrame.isParent}function w_(){at.lFrame.isParent=!1}function Lp(){return Jh}function Fp(n){let e=Jh;return Jh=n,e}function T_(n){return at.lFrame.bindingIndex=n}function C_(){return at.lFrame.inI18n}function I_(n,e){let t=at.lFrame;t.bindingIndex=t.bindingRootIndex=n,$l(e)}function A_(){return at.lFrame.currentDirectiveIndex}function $l(n){at.lFrame.currentDirectiveIndex=n}function D_(){return at.lFrame.currentQueryIndex}function ql(n){at.lFrame.currentQueryIndex=n}function iw(n){let e=n[Be];return e.type===2?e.declTNode:e.type===1?n[Hn]:null}function kp(n,e,t){if(t&4){let r=e,o=n;for(;r=r.parent,r===null&&!(t&1);)if(r=iw(o),r===null||(o=o[Qo],r.type&10))break;if(r===null)return!1;e=r,n=o}let i=at.lFrame=R_();return i.currentTNode=e,i.lView=n,!0}function Xl(n){let e=R_(),t=n[Be];at.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function R_(){let n=at.lFrame,e=n===null?null:n.child;return e===null?N_(n):e}function N_(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function P_(){let n=at.lFrame;return at.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Up=P_;function Yl(){let n=P_();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function O_(){return at.lFrame.selectedIndex}function Sr(n){at.lFrame.selectedIndex=n}function Zl(){at.lFrame.currentNamespace=wp}function Jl(){rw()}function rw(){at.lFrame.currentNamespace=null}function L_(){return at.lFrame.currentNamespace}var F_=!0;function Bp(){return F_}function Vp(n){F_=n}function Kh(n,e=null,t=null,i){let r=Hp(n,e,t,i);return r.resolveInjectorInitializers(),r}function Hp(n,e=null,t=null,i,r=new Set){let o=[t||mr,c_(n)];return i=i||(typeof n=="object"?void 0:pr(n)),new ro(o,e||Sa(),i||null,r)}var yi=class n{static THROW_IF_NOT_FOUND=to;static NULL=new ma;static create(e,t){if(Array.isArray(e))return Kh({name:""},t,e,"");{let i=e.name??"";return Kh({name:i},e.parent,e.providers,i)}}static \u0275prov=Fe({token:n,providedIn:"any",factory:()=>Ke(vp)});static __NG_ELEMENT_ID__=-1},Ht=new Pe(""),br=(()=>{class n{static __NG_ELEMENT_ID__=ow;static __NG_ENV_ID__=t=>t}return n})(),Qh=class extends br{_lView;constructor(e){super(),this._lView=e}get destroyed(){return ho(this._lView)}onDestroy(e){let t=this._lView;return Ap(t,e),()=>g_(t,e)}};function ow(){return new Qh(dn())}var k_=!1,U_=new Pe(""),Er=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new tn(!1);debugTaskTracker=ie(U_,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new st(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=Fe({token:n,providedIn:"root",factory:()=>new n})}return n})(),ep=class extends en{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,f_()&&(this.destroyRef=ie(br,{optional:!0})??void 0,this.pendingTasks=ie(Er,{optional:!0})??void 0)}emit(e){let t=Qe(null);try{super.next(e)}finally{Qe(t)}}subscribe(e,t,i){let r=e,o=t||(()=>null),s=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return e instanceof Qt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},yn=ep;function Ll(...n){}function zp(n){let e,t;function i(){n=Ll;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function B_(n){return queueMicrotask(()=>n()),()=>{n=Ll}}var Gp="isAngularZone",ga=Gp+"_ID",sw=0,_n=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new yn(!1);onMicrotaskEmpty=new yn(!1);onStable=new yn(!1);onError=new yn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=k_}=e;if(typeof Zone>"u")throw new Ce(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,lw(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Gp)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ce(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ce(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,e,aw,Ll,Ll);try{return o.runTask(s,t,i)}finally{o.cancelTask(s)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},aw={};function jp(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function cw(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){zp(()=>{n.callbackScheduled=!1,tp(n),n.isCheckStableRunning=!0,jp(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),tp(n)}function lw(n){let e=()=>{cw(n)},t=sw++;n._inner=n._inner.fork({name:"angular",properties:{[Gp]:!0,[ga]:t,[ga+t]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(uw(c))return i.invokeTask(o,s,a,c);try{return Qy(n),i.invokeTask(o,s,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),e_(n)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return Qy(n),i.invoke(o,s,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!dw(c)&&e(),e_(n)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,tp(n),jp(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function tp(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Qy(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function e_(n){n._nesting--,jp(n)}var va=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new yn;onMicrotaskEmpty=new yn;onStable=new yn;onError=new yn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function uw(n){return V_(n,"__ignore_ng_zone__")}function dw(n){return V_(n,"__scheduler_tick__")}function V_(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Wi=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Yi=new Pe("",{factory:()=>{let n=ie(_n),e=ie(Vt),t;return i=>{n.runOutsideAngular(()=>{e.destroyed&&!t?setTimeout(()=>{throw i}):(t??=e.get(Wi),t.handleError(i))})}}}),H_={provide:ao,useValue:()=>{let n=ie(Wi,{optional:!0})},multi:!0},fw=new Pe("",{factory:()=>{let n=ie(Ht).defaultView;if(!n)return;let e=ie(Yi),t=o=>{e(o.reason),o.preventDefault()},i=o=>{o.error?e(o.error):e(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{n.addEventListener("unhandledrejection",t),n.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),ie(br).onDestroy(()=>{n.removeEventListener("error",i),n.removeEventListener("unhandledrejection",t)})}});function Wp(){return Jo([a_(()=>{ie(fw)})])}function po(n,e){let[t,i,r]=Ah(n,e?.equal),o=t,s=o[gn];return o.set=i,o.update=r,o.asReadonly=z_.bind(o),o}function z_(){let n=this[gn];if(n.readonlyFn===void 0){let e=()=>this();e[gn]=n,n.readonlyFn=e}return n.readonlyFn}var Zo=class{},Na=new Pe("",{factory:()=>!0});var $p=new Pe("");var qp=(()=>{class n{static \u0275prov=Fe({token:n,providedIn:"root",factory:()=>new np})}return n})(),np=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}},ip=class{[gn];constructor(e){this[gn]=e}destroy(){this[gn].destroy()}};function Zi(n){return Dh(n)}function pu(n){return{toString:n}.toString()}function Ew(n){return typeof n=="function"}function h0(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var nu=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}},gm=(()=>{let n=()=>p0;return n.ngInherit=!0,n})();function p0(n){return n.type.prototype.ngOnChanges&&(n.setInput=Tw),ww}function ww(){let n=g0(this),e=n?.current;if(e){let t=n.previous;if(t===so)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function Tw(n,e,t,i,r){let o=this.declaredInputs[i],s=g0(n)||Cw(n,{previous:so,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new nu(l&&l.currentValue,t,c===so),h0(n,e,r,t)}var m0="__ngSimpleChanges__";function g0(n){return n[m0]||null}function Cw(n,e){return n[m0]=e}var G_=[];var Tt=function(n,e=null,t){for(let i=0;i<G_.length;i++){let r=G_[i];r(n,e,t)}},mt=(function(n){return n[n.TemplateCreateStart=0]="TemplateCreateStart",n[n.TemplateCreateEnd=1]="TemplateCreateEnd",n[n.TemplateUpdateStart=2]="TemplateUpdateStart",n[n.TemplateUpdateEnd=3]="TemplateUpdateEnd",n[n.LifecycleHookStart=4]="LifecycleHookStart",n[n.LifecycleHookEnd=5]="LifecycleHookEnd",n[n.OutputStart=6]="OutputStart",n[n.OutputEnd=7]="OutputEnd",n[n.BootstrapApplicationStart=8]="BootstrapApplicationStart",n[n.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",n[n.BootstrapComponentStart=10]="BootstrapComponentStart",n[n.BootstrapComponentEnd=11]="BootstrapComponentEnd",n[n.ChangeDetectionStart=12]="ChangeDetectionStart",n[n.ChangeDetectionEnd=13]="ChangeDetectionEnd",n[n.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",n[n.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",n[n.AfterRenderHooksStart=16]="AfterRenderHooksStart",n[n.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",n[n.ComponentStart=18]="ComponentStart",n[n.ComponentEnd=19]="ComponentEnd",n[n.DeferBlockStateStart=20]="DeferBlockStateStart",n[n.DeferBlockStateEnd=21]="DeferBlockStateEnd",n[n.DynamicComponentStart=22]="DynamicComponentStart",n[n.DynamicComponentEnd=23]="DynamicComponentEnd",n[n.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",n[n.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",n})(mt||{});function Iw(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=e.type.prototype;if(i){let s=p0(e);(t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s)}r&&(t.preOrderHooks??=[]).push(0-n,r),o&&((t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o))}function Aw(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let o=n.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=o;s&&(n.contentHooks??=[]).push(-t,s),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Kl(n,e,t){v0(n,e,3,t)}function Ql(n,e,t,i){(n[ze]&3)===t&&v0(n,e,t,i)}function Xp(n,e){let t=n[ze];(t&3)===e&&(t&=16383,t+=1,n[ze]=t)}function v0(n,e,t,i){let r=i!==void 0?n[lo]&65535:0,o=i??-1,s=e.length-1,a=0;for(let c=r;c<s;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[lo]+=65536),(a<o||o==-1)&&(Dw(n,t,e,c),n[lo]=(n[lo]&4294901760)+c+2),c++}function j_(n,e){Tt(mt.LifecycleHookStart,n,e);let t=Qe(null);try{e.call(n)}finally{Qe(t),Tt(mt.LifecycleHookEnd,n,e)}}function Dw(n,e,t,i){let r=t[i]<0,o=t[i+1],s=r?-t[i]:t[i],a=n[s];r?n[ze]>>14<n[lo]>>16&&(n[ze]&3)===e&&(n[ze]+=16384,j_(a,o)):j_(a,o)}var is=-1,La=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=i}};function Rw(n){return(n.flags&8)!==0}function Nw(n){return(n.flags&16)!==0}function Pw(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let o=t[i++],s=t[i++],a=t[i++];n.setAttribute(e,s,a,o)}else{let o=r,s=t[++i];Lw(o)?n.setProperty(e,o,s):n.setAttribute(e,o,s),i++}}return i}function Ow(n){return n===3||n===4||n===6}function Lw(n){return n.charCodeAt(0)===64}function vm(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?W_(n,t,r,null,e[++i]):W_(n,t,r,null,null))}}return n}function W_(n,e,t,i,r){let o=0,s=n.length;if(e===-1)s=-1;else for(;o<n.length;){let a=n[o++];if(typeof a=="number"){if(a===e){s=-1;break}else if(a>e){s=o-1;break}}}for(;o<n.length;){let a=n[o];if(typeof a=="number")break;if(a===t){r!==null&&(n[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(n.splice(s,0,e),o=s+1),n.splice(o++,0,t),r!==null&&n.splice(o++,0,r)}function y0(n){return n!==is}function iu(n){return n&32767}function Fw(n){return n>>16}function ru(n,e){let t=Fw(n),i=e;for(;t>0;)i=i[Qo],t--;return i}var Kp=!0;function $_(n){let e=Kp;return Kp=n,e}var kw=256,_0=kw-1,x0=5,Uw=0,Si={};function Bw(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(oo)&&(i=t[oo]),i==null&&(i=t[oo]=Uw++);let r=i&_0,o=1<<r;e.data[n+(r>>x0)]|=o}function M0(n,e){let t=S0(n,e);if(t!==-1)return t;let i=e[Be];i.firstCreatePass&&(n.injectorIndex=e.length,Yp(i.data,n),Yp(e,null),Yp(i.blueprint,null));let r=ym(n,e),o=n.injectorIndex;if(y0(r)){let s=iu(r),a=ru(r,e),c=a[Be].data;for(let l=0;l<8;l++)e[o+l]=a[s+l]|c[s+l]}return e[o+8]=r,o}function Yp(n,e){n.push(0,0,0,0,0,0,0,0,e)}function S0(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function ym(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=C0(r),i===null)return is;if(t++,r=r[Qo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return is}function Vw(n,e,t){Bw(n,e,t)}function b0(n,e,t){if(t&8||n!==void 0)return n;Bl(e,"NodeInjector")}function E0(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[co],o=An(void 0);try{return r?r.get(e,i,t&8):mp(e,i,t&8)}finally{An(o)}}return b0(i,e,t)}function w0(n,e,t,i=0,r){if(n!==null){if(e[ze]&2048&&!(i&2)){let s=jw(n,e,t,i,Si);if(s!==Si)return s}let o=T0(n,e,t,i,Si);if(o!==Si)return o}return E0(e,t,i,r)}function T0(n,e,t,i,r){let o=zw(t);if(typeof o=="function"){if(!kp(e,n,i))return i&1?b0(r,t,i):E0(e,t,i,r);try{let s;if(s=o(i),s==null&&!(i&8))Bl(t);else return s}finally{Up()}}else if(typeof o=="number"){let s=null,a=S0(n,e),c=is,l=i&1?e[zn][Hn]:null;for((a===-1||i&4)&&(c=a===-1?ym(n,e):e[a+8],c===is||!X_(i,!1)?a=-1:(s=e[Be],a=iu(c),e=ru(c,e)));a!==-1;){let u=e[Be];if(q_(o,a,u.data)){let d=Hw(a,e,t,s,i,l);if(d!==Si)return d}c=e[a+8],c!==is&&X_(i,e[Be].data[a+8]===l)&&q_(o,a,e)?(s=u,a=iu(c),e=ru(c,e)):a=-1}}return r}function Hw(n,e,t,i,r,o){let s=e[Be],a=s.data[n+8],c=i==null?es(a)&&Kp:i!=s&&(a.type&3)!==0,l=r&1&&o===a,u=eu(a,s,t,c,l);return u!==null?ou(e,s,u,a,r):Si}function eu(n,e,t,i,r){let o=n.providerIndexes,s=e.data,a=o&1048575,c=n.directiveStart,l=n.directiveEnd,u=o>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=s[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=s[c];if(h&&fo(h)&&h.type===t)return c}return null}function ou(n,e,t,i,r){let o=n[t],s=e.data;if(o instanceof La){let a=o;if(a.resolving)throw pp("");let c=$_(a.canSeeViewProviders);a.resolving=!0;let l=s[t].type||s[t],u,d=a.injectImpl?An(a.injectImpl):null,f=kp(n,i,0);try{o=n[t]=a.factory(void 0,r,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&Iw(t,s[t],e)}finally{d!==null&&An(d),$_(c),a.resolving=!1,Up()}}return o}function zw(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(oo)?n[oo]:void 0;return typeof e=="number"?e>=0?e&_0:Gw:e}function q_(n,e,t){let i=1<<n;return!!(t[e+(n>>x0)]&i)}function X_(n,e){return!(n&2)&&!(n&1&&e)}var mo=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return w0(this._tNode,this._lView,e,no(i),t)}};function Gw(){return new mo(Mi(),dn())}function mu(n){return pu(()=>{let e=n.prototype.constructor,t=e[pa]||Qp(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let o=r[pa]||Qp(r);if(o&&o!==t)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Qp(n){return op(n)?()=>{let e=Qp(Tn(n));return e&&e()}:io(n)}function jw(n,e,t,i,r){let o=n,s=e;for(;o!==null&&s!==null&&s[ze]&2048&&!ts(s);){let a=T0(o,s,t,i|2,Si);if(a!==Si)return a;let c=o.parent;if(!c){let l=s[Sp];if(l){let u=l.get(t,Si,i);if(u!==Si)return u}c=C0(s),s=s[Qo]}o=c}return r}function C0(n){let e=n[Be],t=e.type;return t===2?e.declTNode:t===1?n[Hn]:null}function Ww(){return as(Mi(),dn())}function as(n,e){return new Va(Mr(n,e))}var Va=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=Ww}return n})();function $w(n){return n instanceof Va?n.nativeElement:n}function qw(){return this._results[Symbol.iterator]()}var su=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new en}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=s_(e);(this._changesDetected=!o_(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=qw};function I0(n){return(n.flags&128)===128}var _m=(function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n})(_m||{}),A0=new Map,Xw=0;function Yw(){return Xw++}function Zw(n){A0.set(n[_r],n)}function em(n){A0.delete(n[_r])}var Y_="__ngContext__";function Fa(n,e){qi(e)?(n[Y_]=e[_r],Zw(e)):n[Y_]=e}function D0(n){return N0(n[Ko])}function R0(n){return N0(n[Vn])}function N0(n){for(;n!==null&&!ti(n);)n=n[Vn];return n}var Jw;function xm(n){Jw=n}var gu=new Pe("",{factory:()=>Kw}),Kw="ng";var vu=new Pe(""),Ha=new Pe("",{providedIn:"platform",factory:()=>"unknown"});var yu=new Pe("",{factory:()=>ie(Ht).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var P0=!1,O0=new Pe("",{factory:()=>P0});function Mm(n){return(n.flags&32)===32}var Qw=()=>null;function L0(n,e,t=!1){return Qw(n,e,t)}function F0(n,e){let t=n.contentQueries;if(t!==null){let i=Qe(null);try{for(let r=0;r<t.length;r+=2){let o=t[r],s=t[r+1];if(s!==-1){let a=n.data[s];ql(o),a.contentQueries(2,e[s],s)}}}finally{Qe(i)}}}function tm(n,e,t){ql(0);let i=Qe(null);try{e(n,t)}finally{Qe(i)}}function k0(n,e,t){if(bp(e)){let i=Qe(null);try{let r=e.directiveStart,o=e.directiveEnd;for(let s=r;s<o;s++){let a=n.data[s];if(a.contentQueries){let c=t[s];a.contentQueries(1,c,s)}}}finally{Qe(i)}}}var ii=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n[n.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",n})(ii||{});function eT(n,e){return n.createText(e)}function U0(n,e,t){return n.createElement(e,t)}function au(n,e,t,i,r){n.insertBefore(e,t,i,r)}function B0(n,e,t){n.appendChild(e,t)}function Z_(n,e,t,i,r){i!==null?au(n,e,t,i,r):B0(n,e,t)}function tT(n,e,t,i){n.removeChild(null,e,t,i)}function nT(n,e,t){n.setAttribute(e,"style",t)}function iT(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function V0(n,e,t){let{mergedAttrs:i,classes:r,styles:o}=t;i!==null&&Pw(n,e,i),r!==null&&iT(n,e,r),o!==null&&nT(n,e,o)}function H0(n){return n instanceof Function?n():n}function rT(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let o=e.length;if(r+o===i||n.charCodeAt(r+o)<=32)return r}t=r+1}}var z0="ng-template";function oT(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&rT(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Sm(n))return!1;if(r=e.indexOf(1,r),r>-1){let o;for(;++r<e.length&&typeof(o=e[r])=="string";)if(o.toLowerCase()===t)return!0}return!1}function Sm(n){return n.type===4&&n.value!==z0}function sT(n,e,t){let i=n.type===4&&!t?z0:n.value;return e===i}function aT(n,e,t){let i=4,r=n.attrs,o=r!==null?uT(r):0,s=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!s&&!ni(i)&&!ni(c))return!1;if(s&&ni(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!sT(n,c,t)||c===""&&e.length===1){if(ni(i))return!1;s=!0}}else if(i&8){if(r===null||!oT(n,r,c,t)){if(ni(i))return!1;s=!0}}else{let l=e[++a],u=cT(c,r,Sm(n),t);if(u===-1){if(ni(i))return!1;s=!0;continue}if(l!==""){let d;if(u>o?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(ni(i))return!1;s=!0}}}}return ni(i)||s}function ni(n){return(n&1)===0}function cT(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let o=!1;for(;r<e.length;){let s=e[r];if(s===n)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return dT(e,n)}function lT(n,e,t=!1){for(let i=0;i<e.length;i++)if(aT(n,e[i],t))return!0;return!1}function uT(n){for(let e=0;e<n.length;e++){let t=n[e];if(Ow(t))return e}return n.length}function dT(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function J_(n,e){return n?":not("+e.trim()+")":e}function fT(n){let e=n[0],t=1,i=2,r="",o=!1;for(;t<n.length;){let s=n[t];if(typeof s=="string")if(i&2){let a=n[++t];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!ni(s)&&(e+=J_(o,r),r=""),i=s,o=o||!ni(i);t++}return r!==""&&(e+=J_(o,r)),e}function hT(n){return n.map(fT).join(",")}function pT(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let o=n[i];if(typeof o=="string")r===2?o!==""&&e.push(o,n[++i]):r===8&&t.push(o);else{if(!ni(r))break;r=o}i++}return t.length&&e.push(1,...t),e}var bm={};function G0(n,e,t,i,r,o,s,a,c,l,u){let d=Gn+i,f=d+r,h=mT(d,f),g=typeof l=="function"?l():l;return h[Be]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function mT(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:bm);return t}function gT(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=G0(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Em(n,e,t,i,r,o,s,a,c,l,u){let d=e.blueprint.slice();return d[ei]=r,d[ze]=i|4|128|8|64|1024,(l!==null||n&&n[ze]&2048)&&(d[ze]|=2048),Cp(d),d[Xt]=d[Qo]=n,d[Dn]=t,d[$i]=s||n&&n[$i],d[Rn]=a||n&&n[Rn],d[co]=c||n&&n[co]||null,d[Hn]=o,d[_r]=Yw(),d[ba]=u,d[Sp]=l,d[zn]=e.type==2?n[zn]:d,d}function vT(n,e,t){let i=Mr(e,n),r=gT(t),o=n[$i].rendererFactory,s=$0(n,Em(n,r,null,j0(t),i,e,null,o.createRenderer(i,t),null,null,null));return n[e.index]=s}function j0(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function W0(n,e,t,i){if(t===0)return-1;let r=e.length;for(let o=0;o<t;o++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function $0(n,e){return n[Ko]?n[Mp][Vn]=e:n[Ko]=e,n[Mp]=e,e}function yT(n,e,t,i){if(!i)if((e[ze]&3)===3){let o=n.preOrderCheckHooks;o!==null&&Kl(e,o,t)}else{let o=n.preOrderHooks;o!==null&&Ql(e,o,0,t)}Sr(t)}var _u=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(_u||{});function nm(n,e,t,i){let r=Qe(null);try{let[o,s,a]=n.inputs[t],c=null;(s&_u.SignalBased)!==0&&(c=e[o][gn]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,o):h0(e,c,o,i)}finally{Qe(r)}}var vo=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(vo||{}),_T;function wm(n,e){return _T(n,e)}var rs=new Set,Tm=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(Tm||{}),za=new Pe(""),K_=new Set;function Cm(n){K_.has(n)||(K_.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var q0=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Fe({token:n,providedIn:"root",factory:()=>new n})}return n})();var X0=new Pe("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:ie(Vt)})});function Y0(n,e,t){let i=n.get(X0);if(Array.isArray(e))for(let r of e)i.queue.add(r),t?.detachedLeaveAnimationFns?.push(r);else i.queue.add(e),t?.detachedLeaveAnimationFns?.push(e);i.scheduler&&i.scheduler(n)}function xT(n,e){for(let[t,i]of e)Y0(n,i.animateFns)}function MT(n,e){let t=n.get(X0);if(Array.isArray(e))for(let i of e)t.queue.delete(i);else t.queue.delete(e)}function Q_(n,e,t,i){let r=n?.[Ta]?.enter;e!==null&&r&&r.has(t.index)&&xT(i,r)}function ns(n,e,t,i,r,o,s,a){if(r!=null){let c,l=!1;ti(r)?c=r:qi(r)&&(l=!0,r=r[ei]);let u=xi(r);n===0&&i!==null?(Q_(a,i,o,t),s==null?B0(e,i,u):au(e,i,u,s||null,!0)):n===1&&i!==null?(Q_(a,i,o,t),au(e,i,u,s||null,!0)):n===2?e0(a,o,t,d=>{tT(e,u,l,d)}):n===3&&e0(a,o,t,()=>{e.destroyNode(u)}),c!=null&&OT(e,n,t,c,o,i,s)}}function ST(n,e){Z0(n,e),e[ei]=null,e[Hn]=null}function bT(n,e,t,i,r,o){i[ei]=r,i[Hn]=e,xu(n,i,t,1,r,o)}function Z0(n,e){e[$i].changeDetectionScheduler?.notify(9),xu(n,e,e[Rn],2,null,null)}function ET(n){let e=n[Ko];if(!e)return Zp(n[Be],n);for(;e;){let t=null;if(qi(e))t=e[Ko];else{let i=e[xn];i&&(t=i)}if(!t){for(;e&&!e[Vn]&&e!==n;)qi(e)&&Zp(e[Be],e),e=e[Xt];e===null&&(e=n),qi(e)&&Zp(e[Be],e),t=e&&e[Vn]}e=t}}function Im(n,e){let t=n[uo],i=t.indexOf(e);t.splice(i,1)}function J0(n,e){if(ho(e))return;let t=e[Rn];t.destroyNode&&xu(n,e,t,3,null,null),ET(e)}function Zp(n,e){if(ho(e))return;let t=Qe(null);try{e[ze]&=-129,e[ze]|=256,e[Nn]&&sa(e[Nn]),CT(n,e),TT(n,e),e[Be].type===1&&e[Rn].destroy();let i=e[yr];if(i!==null&&ti(e[Xt])){i!==e[Xt]&&Im(i,e);let r=e[_i];r!==null&&r.detachView(n)}em(e)}finally{Qe(t)}}function e0(n,e,t,i){let r=n?.[Ta];if(r?.enter?.has(e.index)&&MT(t,r.enter.get(e.index).animateFns),r==null||r.leave==null||!r.leave.has(e.index))return i(!1);n&&rs.add(n[_r]),Y0(t,()=>{if(r.leave&&r.leave.has(e.index)){let s=r.leave.get(e.index),a=[];if(s){for(let c=0;c<s.animateFns.length;c++){let l=s.animateFns[c],{promise:u}=l();a.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),wT(n,i)}else n&&rs.delete(n[_r]),i(!1)},r)}function wT(n,e){let t=n[Ta]?.running;if(t){t.then(()=>{n[Ta].running=void 0,rs.delete(n[_r]),e(!0)});return}e(!1)}function TT(n,e){let t=n.cleanup,i=e[Ea];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let a=t[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[t[s+1]];t[s].call(a)}i!==null&&(e[Ea]=null);let r=e[ji];if(r!==null){e[ji]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=e[wa];if(o!==null){e[wa]=null;for(let s of o)s.destroy()}}function CT(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof La)){let o=t[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];Tt(mt.LifecycleHookStart,a,c);try{c.call(a)}finally{Tt(mt.LifecycleHookEnd,a,c)}}else{Tt(mt.LifecycleHookStart,r,o);try{o.call(r)}finally{Tt(mt.LifecycleHookEnd,r,o)}}}}}function IT(n,e,t){return AT(n,e.parent,t)}function AT(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[ei];if(es(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===ii.None||r===ii.Emulated)return null}return Mr(i,t)}function DT(n,e,t){return NT(n,e,t)}function RT(n,e,t){return n.type&40?Mr(n,t):null}var NT=RT,t0;function K0(n,e,t,i){let r=IT(n,i,e),o=e[Rn],s=i.parent||e[Hn],a=DT(s,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Z_(o,r,t[c],a,!1);else Z_(o,r,t,a,!1);t0!==void 0&&t0(o,i,e,t,r)}function Pa(n,e){if(e!==null){let t=e.type;if(t&3)return Mr(e,n);if(t&4)return im(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Pa(n,i);{let r=n[e.index];return ti(r)?im(-1,r):xi(r)}}else{if(t&128)return Pa(n,e.next);if(t&32)return wm(e,n)()||xi(n[e.index]);{let i=Q0(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=gr(n[zn]);return Pa(r,i)}else return Pa(n,e.next)}}}return null}function Q0(n,e){if(e!==null){let i=n[zn][Hn],r=e.projection;return i.projection[r]}return null}function im(n,e){let t=xn+n+1;if(t<e.length){let i=e[t],r=i[Be].firstChild;if(r!==null)return Pa(i,r)}return e[xr]}function Am(n,e,t,i,r,o,s){for(;t!=null;){let a=i[co];if(t.type===128){t=t.next;continue}let c=i[t.index],l=t.type;if(s&&e===0&&(c&&Fa(xi(c),i),t.flags|=2),!Mm(t))if(l&8)Am(n,e,t.child,i,r,o,!1),ns(e,n,a,r,c,t,o,i);else if(l&32){let u=wm(t,i),d;for(;d=u();)ns(e,n,a,r,d,t,o,i);ns(e,n,a,r,c,t,o,i)}else l&16?PT(n,e,i,t,r,o):ns(e,n,a,r,c,t,o,i);t=s?t.projectionNext:t.next}}function xu(n,e,t,i,r,o){Am(t,i,n.firstChild,e,r,o,!1)}function PT(n,e,t,i,r,o){let s=t[zn],c=s[Hn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];ns(e,n,t[co],r,u,i,o,t)}else{let l=c,u=s[Xt];I0(i)&&(l.flags|=128),Am(n,e,l,u,r,o,!0)}}function OT(n,e,t,i,r,o,s){let a=i[xr],c=xi(i);a!==c&&ns(e,n,t,o,a,r,s);for(let l=xn;l<i.length;l++){let u=i[l];xu(u[Be],u,n,e,o,a)}}function ex(n,e,t,i,r){let o=O_(),s=i&2;try{Sr(-1),s&&e.length>Gn&&yT(n,e,Gn,!1);let a=s?mt.TemplateUpdateStart:mt.TemplateCreateStart;Tt(a,r,t),t(i,r)}finally{Sr(o);let a=s?mt.TemplateUpdateEnd:mt.TemplateCreateEnd;Tt(a,r,t)}}function tx(n,e,t){UT(n,e,t),(t.flags&64)===64&&BT(n,e,t)}function nx(n,e,t=Mr){let i=e.localNames;if(i!==null){let r=e.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?t(e,n):n[s];n[r++]=a}}}function LT(n,e,t,i){let o=i.get(O0,P0)||t===ii.ShadowDom||t===ii.ExperimentalIsolatedShadowDom,s=n.selectRootElement(e,o);return FT(s),s}function FT(n){kT(n)}var kT=()=>null;function UT(n,e,t){let i=t.directiveStart,r=t.directiveEnd;es(t)&&vT(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||M0(t,e);let o=t.initialInputs;for(let s=i;s<r;s++){let a=n.data[s],c=ou(e,n,s,t);if(Fa(c,e),o!==null&&zT(e,s-i,c,a,t,o),fo(a)){let l=Xi(t.index,e);l[Dn]=ou(e,n,s,t)}}}function BT(n,e,t){let i=t.directiveStart,r=t.directiveEnd,o=t.index,s=A_();try{Sr(o);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];$l(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&VT(c,l)}}finally{Sr(-1),$l(s)}}function VT(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function HT(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let o=t[r];lT(e,o.selectors,!1)&&(i??=[],fo(o)?i.unshift(o):i.push(o))}return i}function zT(n,e,t,i,r,o){let s=o[e];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];nm(i,t,c,l)}}function ix(n,e,t,i,r){let o=Gn+t,s=e[Be],a=r(s,e,n,i,t);e[o]=a,Ra(n,!0);let c=n.type===2;return c?(V0(e[Rn],a,n),(x_()===0||Ep(n))&&Fa(a,e),M_()):Fa(a,e),Bp()&&(!c||!Mm(n))&&K0(s,e,a,n),n}function rx(n){let e=n;return Op()?w_():(e=e.parent,Ra(e,!1)),e}function ox(n,e,t,i,r){let o=n.inputs?.[i],s=n.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1],d=e.data[l];nm(d,t[l],u,r),a=!0}if(o)for(let c of o){let l=t[c],u=e.data[c];nm(u,l,i,r),a=!0}return a}function GT(n,e){let t=Xi(e,n),i=t[Be];jT(i,t);let r=t[ei];r!==null&&t[ba]===null&&(t[ba]=L0(r,t[co])),Tt(mt.ComponentStart);try{Dm(i,t,t[Dn])}finally{Tt(mt.ComponentEnd,t[Dn])}}function jT(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Dm(n,e,t){Xl(e);try{let i=n.viewQuery;i!==null&&tm(1,i,t);let r=n.template;r!==null&&ex(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[_i]?.finishViewCreation(n),n.staticContentQueries&&F0(n,e),n.staticViewQueries&&tm(2,n.viewQuery,t);let o=n.components;o!==null&&WT(e,o)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[ze]&=-5,Yl()}}function WT(n,e){for(let t=0;t<e.length;t++)GT(n,e[t])}function $T(n,e,t,i){let r=Qe(null);try{let o=e.tView,a=n[ze]&4096?4096:16,c=Em(n,o,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[yr]=l;let u=n[_i];return u!==null&&(c[_i]=u.createEmbeddedView(o)),Dm(o,c,t),c}finally{Qe(r)}}function n0(n,e){return!e||e.firstChild===null||I0(n)}function ka(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let o=e[t.index];o!==null&&i.push(xi(o)),ti(o)&&sx(o,i);let s=t.type;if(s&8)ka(n,e,t.child,i);else if(s&32){let a=wm(t,e),c;for(;c=a();)i.push(c)}else if(s&16){let a=Q0(e,t);if(Array.isArray(a))i.push(...a);else{let c=gr(e[zn]);ka(c[Be],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function sx(n,e){for(let t=xn;t<n.length;t++){let i=n[t],r=i[Be].firstChild;r!==null&&ka(i[Be],i,r,e)}n[xr]!==n[ei]&&e.push(n[xr])}function ax(n){if(n[zl]!==null){for(let e of n[zl])e.impl.addSequence(e);n[zl].length=0}}var cx=[];function qT(n){return n[Nn]??XT(n)}function XT(n){let e=cx.pop()??Object.create(ZT);return e.lView=n,e}function YT(n){n.lView[Nn]!==n&&(n.lView=null,cx.push(n))}var ZT=bt(me({},ia),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Da(n.lView)},consumerOnSignalRead(){this.lView[Nn]=this}});function JT(n){let e=n[Nn]??Object.create(KT);return e.lView=n,e}var KT=bt(me({},ia),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=gr(n.lView);for(;e&&!lx(e[Be]);)e=gr(e);e&&Ip(e)},consumerOnSignalRead(){this.lView[Nn]=this}});function lx(n){return n.type!==2}function ux(n){if(n[wa]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[wa])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[ze]&8192)}}var QT=100;function dx(n,e=0){let i=n[$i].rendererFactory,r=!1;r||i.begin?.();try{eC(n,e)}finally{r||i.end?.()}}function eC(n,e){let t=Lp();try{Fp(!0),rm(n,e);let i=0;for(;Aa(n);){if(i===QT)throw new Ce(103,!1);i++,rm(n,1)}}finally{Fp(t)}}function tC(n,e,t,i){if(ho(e))return;let r=e[ze],o=!1,s=!1;Xl(e);let a=!0,c=null,l=null;o||(lx(n)?(l=qT(e),c=oa(l)):sl()===null?(a=!1,l=JT(e),c=oa(l)):e[Nn]&&(sa(e[Nn]),e[Nn]=null));try{Cp(e),T_(n.bindingStartIndex),t!==null&&ex(n,e,t,2,i);let u=(r&3)===3;if(!o)if(u){let h=n.preOrderCheckHooks;h!==null&&Kl(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Ql(e,h,0,null),Xp(e,0)}if(s||nC(e),ux(e),fx(e,0),n.contentQueries!==null&&F0(n,e),!o)if(u){let h=n.contentCheckHooks;h!==null&&Kl(e,h)}else{let h=n.contentHooks;h!==null&&Ql(e,h,1),Xp(e,1)}rC(n,e);let d=n.components;d!==null&&px(e,d,0);let f=n.viewQuery;if(f!==null&&tm(2,f,i),!o)if(u){let h=n.viewCheckHooks;h!==null&&Kl(e,h)}else{let h=n.viewHooks;h!==null&&Ql(e,h,2),Xp(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Hl]){for(let h of e[Hl])h();e[Hl]=null}o||(ax(e),e[ze]&=-73)}catch(u){throw o||Da(e),u}finally{l!==null&&(al(l,c),a&&YT(l)),Yl()}}function fx(n,e){for(let t=D0(n);t!==null;t=R0(t))for(let i=xn;i<t.length;i++){let r=t[i];hx(r,e)}}function nC(n){for(let e=D0(n);e!==null;e=R0(e)){if(!(e[ze]&2))continue;let t=e[uo];for(let i=0;i<t.length;i++){let r=t[i];Ip(r)}}}function iC(n,e,t){Tt(mt.ComponentStart);let i=Xi(e,n);try{hx(i,t)}finally{Tt(mt.ComponentEnd,i[Dn])}}function hx(n,e){Gl(n)&&rm(n,e)}function rm(n,e){let i=n[Be],r=n[ze],o=n[Nn],s=!!(e===0&&r&16);if(s||=!!(r&64&&e===0),s||=!!(r&1024),s||=!!(o?.dirty&&cl(o)),s||=!1,o&&(o.dirty=!1),n[ze]&=-9217,s)tC(i,n,i.template,n[Dn]);else if(r&8192){let a=Qe(null);try{ux(n),fx(n,1);let c=i.components;c!==null&&px(n,c,1),ax(n)}finally{Qe(a)}}}function px(n,e,t){for(let i=0;i<e.length;i++)iC(n,e[i],t)}function rC(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Sr(~r);else{let o=r,s=t[++i],a=t[++i];I_(s,o);let c=e[o];Tt(mt.HostBindingsUpdateStart,c);try{a(2,c)}finally{Tt(mt.HostBindingsUpdateEnd,c)}}}}finally{Sr(-1)}}function mx(n,e){let t=Lp()?64:1088;for(n[$i].changeDetectionScheduler?.notify(e);n;){n[ze]|=t;let i=gr(n);if(ts(n)&&!i)return n;n=i}return null}function oC(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function sC(n,e,t,i=!0){let r=e[Be];if(aC(r,e,n,t),i){let s=im(t,n),a=e[Rn],c=a.parentNode(n[xr]);c!==null&&bT(r,n[Hn],a,e,c,s)}let o=e[ba];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function om(n,e){if(n.length<=xn)return;let t=xn+e,i=n[t];if(i){let r=i[yr];r!==null&&r!==n&&Im(r,i),e>0&&(n[t-1][Vn]=i[Vn]);let o=xa(n,xn+e);ST(i[Be],i);let s=o[_i];s!==null&&s.detachView(o[Be]),i[Xt]=null,i[Vn]=null,i[ze]&=-129}return i}function aC(n,e,t,i){let r=xn+i,o=t.length;i>0&&(t[r-1][Vn]=e),i<o-xn?(e[Vn]=t[r],gp(t,xn+i,e)):(t.push(e),e[Vn]=null),e[Xt]=t;let s=e[yr];s!==null&&t!==s&&gx(s,e);let a=e[_i];a!==null&&a.insertView(n),jl(e),e[ze]|=128}function gx(n,e){let t=n[uo],i=e[Xt];if(qi(i))n[ze]|=2;else{let r=i[Xt][zn];e[zn]!==r&&(n[ze]|=2)}t===null?n[uo]=[e]:t.push(e)}var wr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[Be];return ka(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[Dn]}set context(e){this._lView[Dn]=e}get destroyed(){return ho(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Xt];if(ti(e)){let t=e[Ca],i=t?t.indexOf(this):-1;i>-1&&(om(e,i),xa(t,i))}this._attachedToViewContainer=!1}J0(this._lView[Be],this._lView)}onDestroy(e){Ap(this._lView,e)}markForCheck(){mx(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ze]&=-129}reattach(){jl(this._lView),this._lView[ze]|=128}detectChanges(){this._lView[ze]|=1024,dx(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ce(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=ts(this._lView),t=this._lView[yr];t!==null&&!e&&Im(t,this._lView),Z0(this._lView[Be],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ce(902,!1);this._appRef=e;let t=ts(this._lView),i=this._lView[yr];i!==null&&!t&&gx(i,this._lView),jl(this._lView)}};var Ua=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=cC;constructor(t,i,r){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,r){let o=$T(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:r});return new wr(o)}}return n})();function cC(){return Rm(Mi(),dn())}function Rm(n,e){return n.type&4?new Ua(e,n,as(n,e)):null}function Nm(n,e,t,i,r){let o=n.data[e];if(o===null)o=lC(n,e,t,i,r),C_()&&(o.flags|=32);else if(o.type&64){o.type=t,o.value=i,o.attrs=r;let s=E_();o.injectorIndex=s===null?-1:s.injectorIndex}return Ra(o,!0),o}function lC(n,e,t,i,r){let o=Pp(),s=Op(),a=s?o:o&&o.parent,c=n.data[e]=dC(n,a,t,e,i,r);return uC(n,c,o,s),c}function uC(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function dC(n,e,t,i,r,o){let s=e?e.injectorIndex:-1,a=0;return b_()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,fieldIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var fC=()=>null;function i0(n,e){return fC(n,e)}var vx=class{},Mu=class{},sm=class{resolveComponentFactory(e){throw new Ce(917,!1)}},Ga=class{static NULL=new sm},go=class{};var yx=(()=>{class n{static \u0275prov=Fe({token:n,providedIn:"root",factory:()=>null})}return n})();var tu={},am=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,tu,i);return r!==tu||t===tu?r:this.parentInjector.get(e,t,i)}};function cu(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,o=0;if(e!==null)for(let s=0;s<e.length;s++){let a=e[s];if(typeof a=="number")o=a;else if(o==1)r=rp(r,a);else if(o==2){let c=a,l=e[++s];i=rp(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function _x(n,e=0){let t=dn();if(t===null)return Ke(n,e);let i=Mi();return w0(i,t,Tn(n),e)}function hC(n,e,t,i,r){let o=i===null?null:{"":-1},s=r(n,t);if(s!==null){let a=s,c=null,l=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(s);break}gC(n,e,t,a,o,c,l)}o!==null&&i!==null&&pC(t,i,o)}function pC(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let o=t[e[r+1]];if(o==null)throw new Ce(-301,!1);i.push(e[r],o)}}function mC(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function gC(n,e,t,i,r,o,s){let a=i.length,c=null;for(let f=0;f<a;f++){let h=i[f];c===null&&fo(h)&&(c=h,mC(n,t,f)),Vw(M0(t,e),n,h.type)}SC(t,n.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=W0(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=vm(t.mergedAttrs,h.hostAttrs),yC(n,t,e,d,h),MC(d,h,r),s!==null&&s.has(h)){let[_,m]=s.get(h);t.directiveToIndex.set(h.type,[d,_+t.directiveStart,m+t.directiveStart])}else(o===null||!o.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}vC(n,t,o)}function vC(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))r0(0,e,r,i),r0(1,e,r,i),s0(e,i,!1);else{let o=t.get(r);o0(0,e,o,i),o0(1,e,o,i),s0(e,i,!0)}}}function r0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;n===0?s=e.inputs??={}:s=e.outputs??={},s[o]??=[],s[o].push(i),xx(e,o)}}function o0(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),xx(e,s)}}function xx(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function s0(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:o}=n;if(i===null||!t&&r===null||t&&o===null||Sm(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){s??=[],s.push(c,i[a+1]);break}}else if(t&&o.hasOwnProperty(c)){let l=o[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){s??=[],s.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(s)}function yC(n,e,t,i,r){n.data[i]=r;let o=r.factory||(r.factory=io(r.type,!0)),s=new La(o,fo(r),_x,null);n.blueprint[i]=s,t[i]=s,_C(n,e,i,W0(n,t,r.hostVars,bm),r)}function _C(n,e,t,i,r){let o=r.hostBindings;if(o){let s=n.hostBindingOpCodes;s===null&&(s=n.hostBindingOpCodes=[]);let a=~e.index;xC(s)!=a&&s.push(a),s.push(t,i,o)}}function xC(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function MC(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;fo(e)&&(t[""]=n)}}function SC(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Mx(n,e,t,i,r,o,s,a){let c=e[Be],l=c.consts,u=Ia(l,s),d=Nm(c,n,t,i,u);return o&&hC(c,e,d,Ia(l,a),r),d.mergedAttrs=vm(d.mergedAttrs,d.attrs),d.attrs!==null&&cu(d,d.attrs,!1),d.mergedAttrs!==null&&cu(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function Sx(n,e){Aw(n,e),bp(e)&&n.queries.elementEnd(e)}function bC(n,e,t,i,r,o){let s=e.consts,a=Ia(s,r),c=Nm(e,n,t,i,a);if(c.mergedAttrs=vm(c.mergedAttrs,c.attrs),o!=null){let l=Ia(s,o);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&cu(c,c.attrs,!1),c.mergedAttrs!==null&&cu(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}var cm=Symbol("BINDING");var lu=class extends Ga{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=vr(e);return new os(t,this.ngModule)}};function EC(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],o={propName:t,templateName:e,isSignal:(i&_u.SignalBased)!==0};return r&&(o.transform=r),o})}function wC(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function TC(n,e,t){let i=e instanceof Vt?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new am(t,i):t}function CC(n){let e=n.get(go,null);if(e===null)throw new Ce(407,!1);let t=n.get(yx,null),i=n.get(Zo,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1}}function IC(n,e){let t=bx(n);return U0(e,t,t==="svg"?wp:t==="math"?p_:null)}function bx(n){return(n.selectors[0][0]||"div").toLowerCase()}var os=class extends Mu{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=EC(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=wC(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=hT(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,o,s){Tt(mt.DynamicComponentStart);let a=Qe(null);try{let c=this.componentDef,l=AC(i,c,s,o),u=TC(c,r||this.ngModule,e),d=CC(u),f=d.rendererFactory.createRenderer(null,c),h=i?LT(f,i,c.encapsulation,u):IC(c,f),g=s?.some(a0)||o?.some(p=>typeof p!="function"&&p.bindings.some(a0)),_=Em(null,l,null,512|j0(c),null,null,d,f,u,null,L0(h,u,!0));_[Gn]=h,Xl(_);let m=null;try{let p=Mx(Gn,_,2,"#host",()=>l.directiveRegistry,!0,0);V0(f,h,p),Fa(h,_),tx(l,_,p),k0(l,p,_),Sx(l,p),t!==void 0&&RC(p,this.ngContentSelectors,t),m=Xi(p.index,_),_[Dn]=m[Dn],Dm(l,_,null)}catch(p){throw m!==null&&em(m),em(_),p}finally{Tt(mt.DynamicComponentEnd),Yl()}return new uu(this.componentType,_,!!g)}finally{Qe(a)}}};function AC(n,e,t,i){let r=n?["ng-version","21.1.5"]:pT(e.selectors[0]),o=null,s=null,a=0;if(t)for(let u of t)a+=u[cm].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let d=i[u];if(typeof d!="function")for(let f of d.bindings){a+=f[cm].requiredVars;let h=u+1;f.create&&(f.targetIdx=h,(o??=[]).push(f)),f.update&&(f.targetIdx=h,(s??=[]).push(f))}}let c=[e];if(i)for(let u of i){let d=typeof u=="function"?u:u.type,f=hp(d);c.push(f)}return G0(0,null,DC(o,s),1,a,c,null,null,null,[r],null)}function DC(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function a0(n){let e=n[cm].kind;return e==="input"||e==="twoWay"}var uu=class extends vx{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=Tp(t[Be],Gn),this.location=as(this._tNode,t),this.instance=Xi(this._tNode.index,t)[Dn],this.hostView=this.changeDetectorRef=new wr(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,o=ox(i,r[Be],r,e,t);this.previousInputValues.set(e,t);let s=Xi(i.index,r);mx(s,1)}get injector(){return new mo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function RC(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let o=t[r];i.push(o!=null&&o.length?Array.from(o):null)}}var cs=(()=>{class n{static __NG_ELEMENT_ID__=NC}return n})();function NC(){let n=Mi();return wx(n,dn())}var PC=cs,Ex=class extends PC{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return as(this._hostTNode,this._hostLView)}get injector(){return new mo(this._hostTNode,this._hostLView)}get parentInjector(){let e=ym(this._hostTNode,this._hostLView);if(y0(e)){let t=ru(e,this._hostLView),i=iu(e),r=t[Be].data[i+8];return new mo(r,t)}else return new mo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=c0(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-xn}createEmbeddedView(e,t,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=i0(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},o,s);return this.insertImpl(a,r,n0(this._hostTNode,s)),a}createComponent(e,t,i,r,o,s,a){let c=e&&!Ew(e),l;if(c)l=t;else{let m=t||{};l=m.index,i=m.injector,r=m.projectableNodes,o=m.environmentInjector||m.ngModuleRef,s=m.directives,a=m.bindings}let u=c?e:new os(vr(e)),d=i||this.parentInjector;if(!o&&u.ngModule==null){let p=(c?d:this.parentInjector).get(Vt,null);p&&(o=p)}let f=vr(u.componentType??{}),h=i0(this._lContainer,f?.id??null),g=h?.firstChild??null,_=u.create(d,r,g,o,s,a);return this.insertImpl(_.hostView,l,n0(this._hostTNode,h)),_}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(m_(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Xt],l=new Ex(c,c[Hn],c[Xt]);l.detach(l.indexOf(e))}}let o=this._adjustIndex(t),s=this._lContainer;return sC(s,r,o,i),e.attachToViewContainerRef(),gp(Jp(s),o,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=c0(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=om(this._lContainer,t);i&&(xa(Jp(this._lContainer),t),J0(i[Be],i))}detach(e){let t=this._adjustIndex(e,-1),i=om(this._lContainer,t);return i&&xa(Jp(this._lContainer),t)!=null?new wr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function c0(n){return n[Ca]}function Jp(n){return n[Ca]||(n[Ca]=[])}function wx(n,e){let t,i=e[n.index];return ti(i)?t=i:(t=oC(i,e,null,n),e[n.index]=t,$0(e,t)),LC(t,e,n,i),new Ex(t,n,e)}function OC(n,e){let t=n[Rn],i=t.createComment(""),r=Mr(e,n),o=t.parentNode(r);return au(t,o,i,t.nextSibling(r),!1),i}var LC=FC;function FC(n,e,t,i){if(n[xr])return;let r;t.type&8?r=xi(i):r=OC(e,t),n[xr]=r}var lm=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},um=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let o=0;o<i;o++){let s=t.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Ix(e,t).matches!==null&&this.queries[t].setDirty()}},dm=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=GC(e):this.predicate=e}},fm=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,o=this.getByIndex(i).embeddedTView(e,r);o&&(o.indexInDeclarationView=i,t!==null?t.push(o):t=[o])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},hm=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(e,t,kC(t,o)),this.matchTNodeWithReadOption(e,t,eu(t,e,o,!1,!1))}else i===Ua?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,eu(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Va||r===cs||r===Ua&&t.type&4)this.addMatch(t.index,-2);else{let o=eu(t,e,r,!1,!1);o!==null&&this.addMatch(t.index,o)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function kC(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function UC(n,e){return n.type&11?as(n,e):n.type&4?Rm(n,e):null}function BC(n,e,t,i){return t===-1?UC(e,n):t===-2?VC(n,e,i):ou(n,n[Be],t,e)}function VC(n,e,t){if(t===Va)return as(e,n);if(t===Ua)return Rm(e,n);if(t===cs)return wx(e,n)}function Tx(n,e,t,i){let r=e[_i].queries[i];if(r.matches===null){let o=n.data,s=t.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let u=o[l];a.push(BC(e,u,s[c+1],t.metadata.read))}}r.matches=a}return r.matches}function pm(n,e,t,i){let r=n.queries.getByIndex(t),o=r.matches;if(o!==null){let s=Tx(n,e,r,t);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],u=e[-c];for(let d=xn;d<u.length;d++){let f=u[d];f[yr]===f[Xt]&&pm(f[Be],f,l,i)}if(u[uo]!==null){let d=u[uo];for(let f=0;f<d.length;f++){let h=d[f];pm(h[Be],h,l,i)}}}}}return i}function Cx(n,e){return n[_i].queries[e].queryList}function HC(n,e,t){let i=new su((t&4)===4);return __(n,e,i,i.destroy),(e[_i]??=new um).queries.push(new lm(i))-1}function zC(n,e,t){let i=Wl();return i.firstCreatePass&&(jC(i,new dm(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),HC(i,dn(),e)}function GC(n){return n.split(",").map(e=>e.trim())}function jC(n,e,t){n.queries===null&&(n.queries=new fm),n.queries.track(new hm(e,t))}function Ix(n,e){return n.queries.getByIndex(e)}function WC(n,e){let t=n[Be],i=Ix(t,e);return i.crossesNgTemplate?pm(t,n,e,[]):Tx(t,n,i,e)}function Ax(n,e,t){let i,r=Ch(()=>{i._dirtyCounter();let o=qC(i,n);if(e&&o===void 0)throw new Ce(-951,!1);return o});return i=r[gn],i._dirtyCounter=po(0),i._flatValue=void 0,r}function Dx(n){return Ax(!0,!1,n)}function Rx(n){return Ax(!0,!0,n)}function $C(n,e){let t=n[gn];t._lView=dn(),t._queryIndex=e,t._queryList=Cx(t._lView,e),t._queryList.onDirty(()=>t._dirtyCounter.update(i=>i+1))}function qC(n,e){let t=n._lView,i=n._queryIndex;if(t===void 0||i===void 0||t[ze]&4)return e?void 0:mr;let r=Cx(t,i),o=WC(t,i);return r.reset(o,$w),e?r.first:r._changesDetected||n._flatValue===void 0?n._flatValue=r.toArray():n._flatValue}var ss=class{},Su=class{};var du=class extends ss{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new lu(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let o=fp(e);this._bootstrapComponents=H0(o.bootstrap),this._r3Injector=Hp(e,t,[{provide:ss,useValue:this},{provide:Ga,useValue:this.componentFactoryResolver},...i],pr(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},fu=class extends Su{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new du(this.moduleType,e,[])}};var Ba=class extends ss{injector;componentFactoryResolver=new lu(this);instance=null;constructor(e){super();let t=new ro([...e.providers,{provide:ss,useValue:this},{provide:Ga,useValue:this.componentFactoryResolver}],e.parent||Sa(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function ja(n,e,t=null){return new Ba({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var XC=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=_p(!1,t.type),r=i.length>0?ja([i],this._injector,""):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Fe({token:n,providedIn:"environment",factory:()=>new n(Ke(Vt))})}return n})();function Mn(n){return pu(()=>{let e=Nx(n),t=bt(me({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===_m.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(XC).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ii.Emulated,styles:n.styles||mr,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Cm("NgStandalone"),Px(t);let i=n.dependencies;return t.directiveDefs=l0(i,YC),t.pipeDefs=l0(i,t_),t.id=KC(t),t})}function YC(n){return vr(n)||hp(n)}function ZC(n,e){if(n==null)return so;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=_u.None,c=null),t[o]=[i,a,c],e[o]=s}return t}function JC(n){if(n==null)return so;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Pm(n){return pu(()=>{let e=Nx(n);return Px(e),e})}function Nx(n){let e={};return{type:n.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||so,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||mr,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:ZC(n.inputs,e),outputs:JC(n.outputs),debugInfo:null}}function Px(n){n.features?.forEach(e=>e(n))}function l0(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let r of t){let o=e(r);o!==null&&i.push(o)}return i}:null}function KC(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let o of i.join("|"))e=Math.imul(31,e)+o.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var Om=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var Lm=new Pe("");function Wa(n){return!!n&&typeof n.then=="function"}function Ox(n){return!!n&&typeof n.subscribe=="function"}var Lx=new Pe("");var Fm=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=ie(Lx,{optional:!0})??[];injector=ie(yi);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let o=un(this.injector,r);if(Wa(o))t.push(o);else if(Ox(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});t.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bu=new Pe("");function Fx(){Ih(()=>{let n="";throw new Ce(600,n)})}function kx(n){return n.isBoundToModule}var QC=10;var ls=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ie(Yi);afterRenderManager=ie(q0);zonelessEnabled=ie(Na);rootEffectScheduler=ie(qp);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new en;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=ie(Er);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(Nt(t=>!t))}constructor(){ie(za,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=ie(Vt);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=yi.NULL){return this._injector.get(_n).run(()=>{Tt(mt.BootstrapComponentStart);let s=t instanceof Mu;if(!this._injector.get(Fm).done){let g="";throw new Ce(405,g)}let c;s?c=t:c=this._injector.get(Ga).resolveComponentFactory(t),this.componentTypes.push(c.componentType);let l=kx(c)?void 0:this._injector.get(ss),u=i||c.selector,d=c.create(r,[],u,l),f=d.location.nativeElement,h=d.injector.get(Lm,null);return h?.registerApplication(f),d.onDestroy(()=>{this.detachView(d.hostView),Oa(this.components,d),h?.unregisterApplication(f)}),this._loadComponent(d),Tt(mt.BootstrapComponentEnd,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Tt(mt.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Tm.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Tt(mt.ChangeDetectionEnd),new Ce(101,!1);let t=Qe(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Qe(t),this.afterTick.next(),Tt(mt.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(go,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<QC;){Tt(mt.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Tt(mt.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Aa(r))continue;let o=i&&!this.zonelessEnabled?0:1;dx(r,o),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Aa(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Oa(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(bu,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Oa(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ce(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Oa(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var vV=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function u0(n,e,t,i,r){ox(e,n,t,r?"class":"style",i)}function $a(n,e,t,i){let r=dn(),o=r[Be],s=n+Gn,a=o.firstCreatePass?Mx(s,r,2,e,HT,S_(),t,i):o.data[s];if(ix(a,r,n,e,Ux),Ep(a)){let c=r[Be];tx(c,r,a),k0(c,a,r)}return i!=null&&nx(r,a),$a}function qa(){let n=Wl(),e=Mi(),t=rx(e);return n.firstCreatePass&&Sx(n,t),Rp(t)&&Np(),Dp(),t.classesWithoutHost!=null&&Rw(t)&&u0(n,t,dn(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&Nw(t)&&u0(n,t,dn(),t.stylesWithoutHost,!1),qa}function yo(n,e,t,i){return $a(n,e,t,i),qa(),yo}function Oe(n,e,t,i){let r=dn(),o=r[Be],s=n+Gn,a=o.firstCreatePass?bC(s,o,2,e,t,i):o.data[s];return ix(a,r,n,e,Ux),i!=null&&nx(r,a),Oe}function Ge(){let n=Mi(),e=rx(n);return Rp(e)&&Np(),Dp(),Ge}function gt(n,e,t,i){return Oe(n,e,t,i),Ge(),gt}var Ux=(n,e,t,i,r)=>(Vp(!0),U0(e[Rn],i,L_()));var Xa="en-US";var eI=Xa;function Bx(n){typeof n=="string"&&(eI=n.toLowerCase().replace(/_/g,"-"))}function bi(n,e,t,i){return $C(n,zC(e,t,i)),bi}function Ji(n=1){ql(D_()+n)}function Ae(n,e=""){let t=dn(),i=Wl(),r=n+Gn,o=i.firstCreatePass?Nm(i,r,1,e,null):i.data[r],s=tI(i,t,o,e);t[r]=s,Bp()&&K0(i,t,s,o),Ra(o,!1)}var tI=(n,e,t,i)=>(Vp(!0),eT(e[Rn],i));var hu=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},km=(()=>{class n{compileModuleSync(t){return new fu(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=fp(t),o=H0(r.declarations).reduce((s,a)=>{let c=vr(a);return c&&s.push(new os(c)),s},[]);return new hu(i,o)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Vx=(()=>{class n{applicationErrorHandler=ie(Yi);appRef=ie(ls);taskService=ie(Er);ngZone=ie(_n);zonelessEnabled=ie(Na);tracing=ie(za,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Qt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ga):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ie($p,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?B_:zp;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ga+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Hx(){return[{provide:Zo,useExisting:Vx},{provide:_n,useClass:va},{provide:Na,useValue:!0}]}function nI(){return typeof $localize<"u"&&$localize.locale||Xa}var Um=new Pe("",{factory:()=>ie(Um,{optional:!0,skipSelf:!0})||nI()});var $x=Symbol("InputSignalNode#UNSET"),fI=bt(me({},ll),{transformFn:void 0,applyValueToInputSignal(n,e){aa(n,e)}});function qx(n,e){let t=Object.create(fI);t.value=n,t.transformFn=e?.transform;function i(){if(ra(t),t.value===$x){let r=null;throw new Ce(-950,r)}return t.value}return i[gn]=t,i}function zx(n,e){return qx(n,e)}function hI(n){return qx($x,n)}var Xx=(zx.required=hI,zx);function Gx(n,e){return Dx(e)}function pI(n,e){return Rx(e)}var rn=(Gx.required=pI,Gx);var Bm=new Pe(""),mI=new Pe("");function Ya(n){return!n.moduleRef}function gI(n){let e=Ya(n)?n.r3Injector:n.moduleRef.injector,t=e.get(_n);return t.run(()=>{Ya(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Yi),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),Ya(n)){let o=()=>e.destroy(),s=n.platformInjector.get(Bm);s.add(o),e.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>n.moduleRef.destroy(),s=n.platformInjector.get(Bm);s.add(o),n.moduleRef.onDestroy(()=>{Oa(n.allPlatformModules,n.moduleRef),r.unsubscribe(),s.delete(o)})}return yI(i,t,()=>{let o=e.get(Er),s=o.add(),a=e.get(Fm);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(Um,Xa);if(Bx(c||Xa),!e.get(mI,!0))return Ya(n)?e.get(ls):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Ya(n)){let u=e.get(ls);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return vI?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{o.remove(s)})})})}var vI;function yI(n,e,t){try{let i=t();return Wa(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var Eu=null;function _I(n=[],e){return yi.create({name:e,providers:[{provide:Ma,useValue:"platform"},{provide:Bm,useValue:new Set([()=>Eu=null])},...n]})}function xI(n=[]){if(Eu)return Eu;let e=_I(n);return Eu=e,Fx(),MI(e),e}function MI(n){let e=n.get(vu,null);un(n,()=>{e?.forEach(t=>t())})}var SI=1e4;var xW=SI-1e3;var Yx=(()=>{class n{static __NG_ELEMENT_ID__=bI}return n})();function bI(n){return EI(Mi(),dn(),(n&16)===16)}function EI(n,e,t){if(es(n)&&!t){let i=Xi(n.index,e);return new wr(i,i)}else if(n.type&175){let i=e[zn];return new wr(i,e)}return null}function Zx(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;Tt(mt.BootstrapApplicationStart);try{let o=r?.injector??xI(i),s=[Hx(),H_,...t||[]],a=new Ba({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return gI({r3Injector:a.injector,platformInjector:o,rootComponent:e})}catch(o){return Promise.reject(o)}finally{Tt(mt.BootstrapApplicationEnd)}}var Jx=null;function Ki(){return Jx}function Vm(n){Jx??=n}var Za=class{},wu=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>ie(Kx),providedIn:"platform"})}return n})();var Kx=(()=>{class n extends wu{_location;_history;_doc=ie(Ht);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ki().getBaseHref(this._doc)}onPopState(t){let i=Ki().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Ki().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function tM(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function Qx(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Tr(n){return n&&n[0]!=="?"?`?${n}`:n}var Tu=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>ie(TI),providedIn:"root"})}return n})(),wI=new Pe(""),TI=(()=>{class n extends Tu{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??ie(Ht).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return tM(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Tr(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,o){let s=this.prepareExternalUrl(r+Tr(o));this._platformLocation.pushState(t,i,s)}replaceState(t,i,r,o){let s=this.prepareExternalUrl(r+Tr(o));this._platformLocation.replaceState(t,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Ke(wu),Ke(wI,8))};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ds=(()=>{class n{_subject=new en;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=AI(Qx(eM(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Tr(i))}normalize(t){return n.stripTrailingSlash(II(this._basePath,eM(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Tr(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Tr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Tr;static joinWithSlash=tM;static stripTrailingSlash=Qx;static \u0275fac=function(i){return new(i||n)(Ke(Tu))};static \u0275prov=Fe({token:n,factory:()=>CI(),providedIn:"root"})}return n})();function CI(){return new ds(Ke(Tu))}function II(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function eM(n){return n.replace(/\/index.html$/,"")}function AI(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function Hm(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,o]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(o)}return null}var Ja=class{};var nM="browser";var Ka=class{_doc;constructor(e){this._doc=e}manager},Cu=(()=>{class n extends Ka{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,o){return t.addEventListener(i,r,o),()=>this.removeEventListener(t,i,r,o)}removeEventListener(t,i,r,o){return t.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||n)(Ke(Ht))};static \u0275prov=Fe({token:n,factory:n.\u0275fac})}return n})(),Du=new Pe(""),Wm=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(s=>{s.manager=this});let r=t.filter(s=>!(s instanceof Cu));this._plugins=r.slice().reverse();let o=t.find(s=>s instanceof Cu);o&&this._plugins.push(o)}addEventListener(t,i,r,o){return this._findPluginFor(i).addEventListener(t,i,r,o)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(o=>o.supports(t)),!i)throw new Ce(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Ke(Du),Ke(_n))};static \u0275prov=Fe({token:n,factory:n.\u0275fac})}return n})(),zm="ng-app-id";function iM(n){for(let e of n)e.remove()}function rM(n,e){let t=e.createElement("style");return t.textContent=n,t}function DI(n,e,t,i){let r=n.head?.querySelectorAll(`style[${zm}="${e}"],link[${zm}="${e}"]`);if(r)for(let o of r)o.removeAttribute(zm),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]})}function jm(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var $m=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,r,o={}){this.doc=t,this.appId=i,this.nonce=r,DI(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,rM);i?.forEach(r=>this.addUsage(r,this.external,jm))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let o=i.get(t);o?o.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(iM(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])iM(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,rM(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,jm(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Ke(Ht),Ke(gu),Ke(yu,8),Ke(Ha))};static \u0275prov=Fe({token:n,factory:n.\u0275fac})}return n})(),Gm={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},qm=/%COMP%/g;var sM="%COMP%",RI=`_nghost-${sM}`,NI=`_ngcontent-${sM}`,PI=!0,OI=new Pe("",{factory:()=>PI});function LI(n){return NI.replace(qm,n)}function FI(n){return RI.replace(qm,n)}function aM(n,e){return e.map(t=>t.replace(qm,n))}var Xm=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,i,r,o,s,a,c=null,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.defaultRenderer=new Qa(t,s,a,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof Au?r.applyToHost(t):r instanceof ec&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.tracingService;switch(i.encapsulation){case ii.Emulated:o=new Au(c,l,i,this.appId,u,s,a,d);break;case ii.ShadowDom:return new Iu(c,t,i,s,a,this.nonce,d,l);case ii.ExperimentalIsolatedShadowDom:return new Iu(c,t,i,s,a,this.nonce,d);default:o=new ec(c,l,i,u,s,a,d);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(Ke(Wm),Ke($m),Ke(gu),Ke(OI),Ke(Ht),Ke(_n),Ke(yu),Ke(za,8))};static \u0275prov=Fe({token:n,factory:n.\u0275fac})}return n})(),Qa=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Gm[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(oM(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(oM(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ce(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let o=Gm[r];o?e.setAttributeNS(o,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Gm[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(vo.DashCase|vo.Important)?e.style.setProperty(t,i,r&vo.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&vo.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=Ki().getGlobalEventTarget(this.doc,e),!e))throw new Ce(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(e,t,o)),this.eventManager.addEventListener(e,t,o,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function oM(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Iu=class extends Qa{hostEl;sharedStylesHost;shadowRoot;constructor(e,t,i,r,o,s,a,c){super(e,r,o,a),this.hostEl=t,this.sharedStylesHost=c,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=aM(i.id,l);for(let d of l){let f=document.createElement("style");s&&f.setAttribute("nonce",s),f.textContent=d,this.shadowRoot.appendChild(f)}let u=i.getExternalStyles?.();if(u)for(let d of u){let f=jm(d,r);s&&f.setAttribute("nonce",s),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ec=class extends Qa{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,o,s,a,c){super(e,o,s,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?aM(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&rs.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Au=class extends ec{contentAttr;hostAttr;constructor(e,t,i,r,o,s,a,c){let l=r+"-"+i.id;super(e,t,i,o,s,a,c,l),this.contentAttr=LI(l),this.hostAttr=FI(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var Ru=class n extends Za{supportsDOMEvents=!0;static makeCurrent(){Vm(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=kI();return t==null?null:UI(t)}resetBaseElement(){tc=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Hm(document.cookie,e)}},tc=null;function kI(){return tc=tc||document.head.querySelector("base"),tc?tc.getAttribute("href"):null}function UI(n){return new URL(n,document.baseURI).pathname}var BI=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac})}return n})(),cM=["alt","control","meta","shift"],VI={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},HI={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},lM=(()=>{class n extends Ka{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,o){let s=n.parseEventName(i),a=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ki().onAndCancel(t,s.domEventName,a,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),cM.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(t,i){let r=VI[t.key]||t.key,o="";return i.indexOf("code.")>-1&&(r=t.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),cM.forEach(s=>{if(s!==r){let a=HI[s];a(t)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(t,i,r){return o=>{n.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>i(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Ke(Ht))};static \u0275prov=Fe({token:n,factory:n.\u0275fac})}return n})();async function Ym(n,e,t){let i=me({rootComponent:n},zI(e,t));return Zx(i)}function zI(n,e){return{platformRef:e?.platformRef,appProviders:[...qI,...n?.providers??[]],platformProviders:$I}}function GI(){Ru.makeCurrent()}function jI(){return new Wi}function WI(){return xm(document),document}var $I=[{provide:Ha,useValue:nM},{provide:vu,useValue:GI,multi:!0},{provide:Ht,useFactory:WI}];var qI=[{provide:Ma,useValue:"root"},{provide:Wi,useFactory:jI},{provide:Du,useClass:Cu,multi:!0},{provide:Du,useClass:lM,multi:!0},Xm,$m,Wm,{provide:go,useExisting:Xm},{provide:Ja,useClass:BI},[]];var uM=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(Ke(Ht))};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ve="primary",fc=Symbol("RouteTitle"),eg=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function gs(n){return new eg(n)}function Zm(n,e,t){for(let i=0;i<n.length;i++){let r=n[i],o=e[i];if(r[0]===":")t[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function YI(n,e,t){let i=t.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let c={},l=n.slice(0,i.length);return Zm(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>n.length||t.pathMatch==="full"&&e.hasChildren()&&t.path!=="**")return null;let a={};return!Zm(o,n.slice(0,o.length),a)||!Zm(s,n.slice(n.length-s.length),a)?null:{consumed:n,posParams:a}}function ku(n){return new Promise((e,t)=>{n.pipe(zi()).subscribe({next:i=>e(i),error:i=>t(i)})})}function ZI(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Ei(n[t],e[t]))return!1;return!0}function Ei(n,e){let t=n?tg(n):void 0,i=e?tg(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let o=0;o<t.length;o++)if(r=t[o],!xM(n[r],e[r]))return!1;return!0}function tg(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function xM(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,o)=>i[o]===r)}else return n===e}function JI(n){return n.length>0?n[n.length-1]:null}function bo(n){return Cl(n)?n:Wa(n)?qt(Promise.resolve(n)):nt(n)}function MM(n){return Cl(n)?ku(n):Promise.resolve(n)}var KI={exact:bM,subset:EM},SM={exact:QI,subset:eA,ignored:()=>!0};function dM(n,e,t){return KI[t.paths](n.root,e.root,t.matrixParams)&&SM[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function QI(n,e){return Ei(n,e)}function bM(n,e,t){if(!xo(n.segments,e.segments)||!Ou(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!bM(n.children[i],e.children[i],t))return!1;return!0}function eA(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>xM(n[t],e[t]))}function EM(n,e,t){return wM(n,e,e.segments,t)}function wM(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!xo(r,t)||e.hasChildren()||!Ou(r,t,i))}else if(n.segments.length===t.length){if(!xo(n.segments,t)||!Ou(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!EM(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),o=t.slice(n.segments.length);return!xo(n.segments,r)||!Ou(n.segments,r,i)||!n.children[Ve]?!1:wM(n.children[Ve],e,o,i)}}function Ou(n,e,t){return e.every((i,r)=>SM[t](n[r].parameters,i.parameters))}var wi=class{root;queryParams;fragment;_queryParamMap;constructor(e=new dt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=gs(this.queryParams),this._queryParamMap}toString(){return iA.serialize(this)}},dt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Lu(this)}},_o=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=gs(this.parameters),this._parameterMap}toString(){return CM(this)}};function tA(n,e){return xo(n,e)&&n.every((t,i)=>Ei(t.parameters,e[i].parameters))}function xo(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function nA(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ve&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ve&&(t=t.concat(e(r,i)))}),t}var qu=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>new Mo,providedIn:"root"})}return n})(),Mo=class{parse(e){let t=new ig(e);return new wi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${nc(e.root,!0)}`,i=sA(e.queryParams),r=typeof e.fragment=="string"?`#${rA(e.fragment)}`:"";return`${t}${i}${r}`}},iA=new Mo;function Lu(n){return n.segments.map(e=>CM(e)).join("/")}function nc(n,e){if(!n.hasChildren())return Lu(n);if(e){let t=n.children[Ve]?nc(n.children[Ve],!1):"",i=[];return Object.entries(n.children).forEach(([r,o])=>{r!==Ve&&i.push(`${r}:${nc(o,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=nA(n,(i,r)=>r===Ve?[nc(n.children[Ve],!1)]:[`${r}:${nc(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ve]!=null?`${Lu(n)}/${t[0]}`:`${Lu(n)}/(${t.join("//")})`}}function TM(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Nu(n){return TM(n).replace(/%3B/gi,";")}function rA(n){return encodeURI(n)}function ng(n){return TM(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Fu(n){return decodeURIComponent(n)}function fM(n){return Fu(n.replace(/\+/g,"%20"))}function CM(n){return`${ng(n.path)}${oA(n.parameters)}`}function oA(n){return Object.entries(n).map(([e,t])=>`;${ng(e)}=${ng(t)}`).join("")}function sA(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Nu(t)}=${Nu(r)}`).join("&"):`${Nu(t)}=${Nu(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var aA=/^[^\/()?;#]+/;function Jm(n){let e=n.match(aA);return e?e[0]:""}var cA=/^[^\/()?;=#]+/;function lA(n){let e=n.match(cA);return e?e[0]:""}var uA=/^[^=?&#]+/;function dA(n){let e=n.match(uA);return e?e[0]:""}var fA=/^[^&#]+/;function hA(n){let e=n.match(fA);return e?e[0]:""}var ig=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new dt([],{}):new dt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(e=0){if(e>50)throw new Ce(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,e));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,e)),(t.length>0||Object.keys(i).length>0)&&(r[Ve]=new dt(t,i)),r}parseSegment(){let e=Jm(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ce(4009,!1);return this.capture(e),new _o(Fu(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=lA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Jm(this.remaining);r&&(i=r,this.capture(i))}e[Fu(t)]=Fu(i)}parseQueryParam(e){let t=dA(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let s=hA(this.remaining);s&&(i=s,this.capture(i))}let r=fM(t),o=fM(i);if(e.hasOwnProperty(r)){let s=e[r];Array.isArray(s)||(s=[s],e[r]=s),s.push(o)}else e[r]=o}parseParens(e,t){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Jm(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new Ce(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ve);let a=this.parseChildren(t+1);i[s??Ve]=Object.keys(a).length===1&&a[Ve]?a[Ve]:new dt([],a),this.consumeOptional("//")}return i}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ce(4011,!1)}};function IM(n){return n.segments.length>0?new dt([],{[Ve]:n}):n}function AM(n){let e={};for(let[i,r]of Object.entries(n.children)){let o=AM(r);if(i===Ve&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))e[s]=a;else(o.segments.length>0||o.hasChildren())&&(e[i]=o)}let t=new dt(n.segments,e);return pA(t)}function pA(n){if(n.numberOfChildren===1&&n.children[Ve]){let e=n.children[Ve];return new dt(n.segments.concat(e.segments),e.children)}return n}function vs(n){return n instanceof wi}function mA(n,e,t=null,i=null,r=new Mo){let o=DM(n);return RM(o,e,t,i,r)}function DM(n){let e;function t(o){let s={};for(let c of o.children){let l=t(c);s[c.outlet]=l}let a=new dt(o.url,s);return o===n&&(e=a),a}let i=t(n.root),r=IM(i);return e??r}function RM(n,e,t,i,r){let o=n;for(;o.parent;)o=o.parent;if(e.length===0)return Km(o,o,o,t,i,r);let s=gA(e);if(s.toRoot())return Km(o,o,new dt([],{}),t,i,r);let a=vA(s,o,n),c=a.processChildren?rc(a.segmentGroup,a.index,s.commands):PM(a.segmentGroup,a.index,s.commands);return Km(o,a.segmentGroup,c,t,i,r)}function Uu(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function ac(n){return typeof n=="object"&&n!=null&&n.outlets}function hM(n,e,t){n||="\u0275";let i=new wi;return i.queryParams={[n]:e},t.parse(t.serialize(i)).queryParams[n]}function Km(n,e,t,i,r,o){let s={};for(let[l,u]of Object.entries(i??{}))s[l]=Array.isArray(u)?u.map(d=>hM(l,d,o)):hM(l,u,o);let a;n===e?a=t:a=NM(n,e,t);let c=IM(AM(a));return new wi(c,s,r)}function NM(n,e,t){let i={};return Object.entries(n.children).forEach(([r,o])=>{o===e?i[r]=t:i[r]=NM(o,e,t)}),new dt(n.segments,i)}var Bu=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Uu(i[0]))throw new Ce(4003,!1);let r=i.find(ac);if(r&&r!==JI(i))throw new Ce(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function gA(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Bu(!0,0,n);let e=0,t=!1,i=n.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new Bu(t,e,i)}var hs=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function vA(n,e,t){if(n.isAbsolute)return new hs(e,!0,0);if(!t)return new hs(e,!1,NaN);if(t.parent===null)return new hs(t,!0,0);let i=Uu(n.commands[0])?0:1,r=t.segments.length-1+i;return yA(t,r,n.numberOfDoubleDots)}function yA(n,e,t){let i=n,r=e,o=t;for(;o>r;){if(o-=r,i=i.parent,!i)throw new Ce(4005,!1);r=i.segments.length}return new hs(i,!1,r-o)}function _A(n){return ac(n[0])?n[0].outlets:{[Ve]:n}}function PM(n,e,t){if(n??=new dt([],{}),n.segments.length===0&&n.hasChildren())return rc(n,e,t);let i=xA(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let o=new dt(n.segments.slice(0,i.pathIndex),{});return o.children[Ve]=new dt(n.segments.slice(i.pathIndex),n.children),rc(o,0,r)}else return i.match&&r.length===0?new dt(n.segments,{}):i.match&&!n.hasChildren()?rg(n,e,t):i.match?rc(n,0,r):rg(n,e,t)}function rc(n,e,t){if(t.length===0)return new dt(n.segments,{});{let i=_A(t),r={};if(Object.keys(i).some(o=>o!==Ve)&&n.children[Ve]&&n.numberOfChildren===1&&n.children[Ve].segments.length===0){let o=rc(n.children[Ve],e,t);return new dt(n.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=PM(n.children[o],e,s))}),Object.entries(n.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new dt(n.segments,r)}}function xA(n,e,t){let i=0,r=e,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return o;let s=n.segments[r],a=t[i];if(ac(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!mM(c,l,s))return o;i+=2}else{if(!mM(c,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function rg(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let o=t[r];if(ac(o)){let c=MA(o.outlets);return new dt(i,c)}if(r===0&&Uu(t[0])){let c=n.segments[e];i.push(new _o(c.path,pM(t[0]))),r++;continue}let s=ac(o)?o.outlets[Ve]:`${o}`,a=r<t.length-1?t[r+1]:null;s&&a&&Uu(a)?(i.push(new _o(s,pM(a))),r+=2):(i.push(new _o(s,{})),r++)}return new dt(i,{})}function MA(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=rg(new dt([],{}),0,i))}),e}function pM(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function mM(n,e,t){return n==t.path&&Ei(e,t.parameters)}var oc="imperative",on=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(on||{}),Wn=class{id;url;constructor(e,t){this.id=e,this.url=t}},ys=class extends Wn{type=on.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Cr=class extends Wn{urlAfterRedirects;type=on.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Sn=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Sn||{}),Vu=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Vu||{}),oi=class extends Wn{reason;code;type=on.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function OM(n){return n instanceof oi&&(n.code===Sn.Redirect||n.code===Sn.SupersededByNewNavigation)}var Ir=class extends Wn{reason;code;type=on.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},_s=class extends Wn{error;target;type=on.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},cc=class extends Wn{urlAfterRedirects;state;type=on.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},og=class extends Wn{urlAfterRedirects;state;type=on.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},sg=class extends Wn{urlAfterRedirects;state;shouldActivate;type=on.GuardsCheckEnd;constructor(e,t,i,r,o){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ag=class extends Wn{urlAfterRedirects;state;type=on.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cg=class extends Wn{urlAfterRedirects;state;type=on.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},lg=class{route;type=on.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ug=class{route;type=on.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},dg=class{snapshot;type=on.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fg=class{snapshot;type=on.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hg=class{snapshot;type=on.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pg=class{snapshot;type=on.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var xs=class{},Ms=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function SA(n){return!(n instanceof xs)&&!(n instanceof Ms)}var mg=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new hc(this.rootInjector)}},hc=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new mg(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(Ke(Vt))};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Hu=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=gg(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=gg(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=vg(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return vg(e,this._root).map(t=>t.value)}};function gg(n,e){if(n===e.value)return e;for(let t of e.children){let i=gg(n,t);if(i)return i}return null}function vg(n,e){if(n===e.value)return[e];for(let t of e.children){let i=vg(n,t);if(i.length)return i.unshift(e),i}return[]}var Pn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function fs(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var zu=class extends Hu{snapshot;constructor(e,t){super(e),this.snapshot=t,Tg(this,e)}toString(){return this.snapshot.toString()}};function LM(n,e){let t=bA(n,e),i=new tn([new _o("",{})]),r=new tn({}),o=new tn({}),s=new tn({}),a=new tn(""),c=new So(i,r,s,a,o,Ve,n,t.root);return c.snapshot=t.root,new zu(new Pn(c,[]),t)}function bA(n,e){let t={},i={},r={},s=new ps([],t,r,"",i,Ve,n,null,{},e);return new ju("",new Pn(s,[]))}var So=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,o,s,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Nt(l=>l[fc]))??nt(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Nt(e=>gs(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Nt(e=>gs(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Gu(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:me(me({},e.params),n.params),data:me(me({},e.data),n.data),resolve:me(me(me(me({},n.data),e.data),r?.data),n._resolvedData)}:i={params:me({},n.params),data:me({},n.data),resolve:me(me({},n.data),n._resolvedData??{})},r&&kM(r)&&(i.resolve[fc]=r.title),i}var ps=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[fc]}constructor(e,t,i,r,o,s,a,c,l,u){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=gs(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=gs(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},ju=class extends Hu{url;constructor(e,t){super(t),this.url=e,Tg(this,t)}toString(){return FM(this._root)}};function Tg(n,e){e.value._routerState=n,e.children.forEach(t=>Tg(n,t))}function FM(n){let e=n.children.length>0?` { ${n.children.map(FM).join(", ")} } `:"";return`${n.value}${e}`}function Qm(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Ei(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Ei(e.params,t.params)||n.paramsSubject.next(t.params),ZI(e.url,t.url)||n.urlSubject.next(t.url),Ei(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function yg(n,e){let t=Ei(n.params,e.params)&&tA(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||yg(n.parent,e.parent))}function kM(n){return typeof n.title=="string"||n.title===null}var EA=new Pe(""),UM=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ve;activateEvents=new yn;deactivateEvents=new yn;attachEvents=new yn;detachEvents=new yn;routerOutletData=Xx();parentContexts=ie(hc);location=ie(cs);changeDetector=ie(Yx);inputBinder=ie(Xu,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ce(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ce(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ce(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Ce(4013,!1);this._activatedRoute=t;let r=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new _g(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=Pm({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[gm]})}return n})(),_g=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===So?this.route:e===hc?this.childContexts:e===EA?this.outletData:this.parent.get(e,t)}},Xu=new Pe("");var BM=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Mn({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&yo(0,"router-outlet")},dependencies:[UM],encapsulation:2})}return n})();function Cg(n){let e=n.children&&n.children.map(Cg),t=e?bt(me({},n),{children:e}):me({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ve&&(t.component=BM),t}function wA(n,e,t){let i=lc(n,e._root,t?t._root:void 0);return new zu(i,e)}function lc(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=TA(n,e,t);return new Pn(i,r)}else{if(n.shouldAttach(e.value)){let o=n.retrieve(e.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=e.value,s.children=e.children.map(a=>lc(n,a)),s}}let i=CA(e.value),r=e.children.map(o=>lc(n,o));return new Pn(i,r)}}function TA(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return lc(n,i,r);return lc(n,i)})}function CA(n){return new So(new tn(n.url),new tn(n.params),new tn(n.queryParams),new tn(n.fragment),new tn(n.data),n.outlet,n.component,n)}var uc=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},VM="ngNavigationCancelingError";function Wu(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=vs(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=HM(!1,Sn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function HM(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[VM]=!0,t.cancellationCode=e,t}function IA(n){return zM(n)&&vs(n.url)}function zM(n){return!!n&&n[VM]}var xg=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,o){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Qm(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=fs(t);e.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(e,t,s.children)}else this.deactivateChildRoutes(e,t,i);else o&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=fs(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:s,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=fs(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=fs(t);e.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new pg(o.value.snapshot))}),e.children.length&&this.forwardEvent(new fg(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(Qm(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,s.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Qm(a.route.value),this.activateChildRoutes(e,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(e,null,s.children)}else this.activateChildRoutes(e,null,i)}},$u=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},ms=class{component;route;constructor(e,t){this.component=e,this.route=t}};function AA(n,e,t){let i=n._root,r=e?e._root:null;return ic(i,r,t,[i.value])}function DA(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function bs(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!sp(n)?n:e.get(n):i}function ic(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=fs(e);return n.children.forEach(s=>{RA(s,o[s.value.outlet],t,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>sc(a,t.getContext(s),r)),r}function RA(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,s=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=NA(s,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new $u(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?ic(n,e,a?a.children:null,i,r):ic(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new ms(a.outlet.component,s))}else s&&sc(e,a,r),r.canActivateChecks.push(new $u(i)),o.component?ic(n,null,a?a.children:null,i,r):ic(n,null,t,i,r);return r}function NA(n,e,t){if(typeof t=="function")return un(e._environmentInjector,()=>t(n,e));switch(t){case"pathParamsChange":return!xo(n.url,e.url);case"pathParamsOrQueryParamsChange":return!xo(n.url,e.url)||!Ei(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!yg(n,e)||!Ei(n.queryParams,e.queryParams);default:return!yg(n,e)}}function sc(n,e,t){let i=fs(n),r=n.value;Object.entries(i).forEach(([o,s])=>{r.component?e?sc(s,e.children.getContext(o),t):sc(s,null,t):sc(s,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new ms(e.outlet.component,r)):t.canDeactivateChecks.push(new ms(null,r)):t.canDeactivateChecks.push(new ms(null,r))}function pc(n){return typeof n=="function"}function PA(n){return typeof n=="boolean"}function OA(n){return n&&pc(n.canLoad)}function LA(n){return n&&pc(n.canActivate)}function FA(n){return n&&pc(n.canActivateChild)}function kA(n){return n&&pc(n.canDeactivate)}function UA(n){return n&&pc(n.canMatch)}function GM(n){return n instanceof eo||n?.name==="EmptyError"}var Pu=Symbol("INITIAL_VALUE");function Ss(){return Gi(n=>Vh(n.map(e=>e.pipe(Hi(1),zh(Pu)))).pipe(Nt(e=>{for(let t of e)if(t!==!0){if(t===Pu)return Pu;if(t===!1||BA(t))return t}return!0}),Vi(e=>e!==Pu),Hi(1)))}function BA(n){return vs(n)||n instanceof uc}function jM(n){return n.aborted?nt(void 0).pipe(Hi(1)):new st(e=>{let t=()=>{e.next(),e.complete()};return n.addEventListener("abort",t),()=>n.removeEventListener("abort",t)})}function WM(n){return fa(jM(n))}function VA(n){return vn(e=>{let{targetSnapshot:t,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=e;return o.length===0&&r.length===0?nt(bt(me({},e),{guardsResult:!0})):HA(o,t,i).pipe(vn(s=>s&&PA(s)?zA(t,r,n):nt(s)),Nt(s=>bt(me({},e),{guardsResult:s})))})}function HA(n,e,t){return qt(n).pipe(vn(i=>qA(i.component,i.route,t,e)),zi(i=>i!==!0,!0))}function zA(n,e,t){return qt(e).pipe(Il(i=>qo(jA(i.route.parent,t),GA(i.route,t),$A(n,i.path),WA(n,i.route))),zi(i=>i!==!0,!0))}function GA(n,e){return n!==null&&e&&e(new hg(n)),nt(!0)}function jA(n,e){return n!==null&&e&&e(new dg(n)),nt(!0)}function WA(n,e){let t=e.routeConfig?e.routeConfig.canActivate:null;if(!t||t.length===0)return nt(!0);let i=t.map(r=>ua(()=>{let o=e._environmentInjector,s=bs(r,o),a=LA(s)?s.canActivate(e,n):un(o,()=>s(e,n));return bo(a).pipe(zi())}));return nt(i).pipe(Ss())}function $A(n,e){let t=e[e.length-1],r=e.slice(0,e.length-1).reverse().map(o=>DA(o)).filter(o=>o!==null).map(o=>ua(()=>{let s=o.guards.map(a=>{let c=o.node._environmentInjector,l=bs(a,c),u=FA(l)?l.canActivateChild(t,n):un(c,()=>l(t,n));return bo(u).pipe(zi())});return nt(s).pipe(Ss())}));return nt(r).pipe(Ss())}function qA(n,e,t,i){let r=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!r||r.length===0)return nt(!0);let o=r.map(s=>{let a=e._environmentInjector,c=bs(s,a),l=kA(c)?c.canDeactivate(n,e,t,i):un(a,()=>c(n,e,t,i));return bo(l).pipe(zi())});return nt(o).pipe(Ss())}function XA(n,e,t,i,r){let o=e.canLoad;if(o===void 0||o.length===0)return nt(!0);let s=o.map(a=>{let c=bs(a,n),l=OA(c)?c.canLoad(e,t):un(n,()=>c(e,t)),u=bo(l);return r?u.pipe(WM(r)):u});return nt(s).pipe(Ss(),$M(i))}function $M(n){return Fh(gi(e=>{if(typeof e!="boolean")throw Wu(n,e)}),Nt(e=>e===!0))}function YA(n,e,t,i,r){let o=e.canMatch;if(!o||o.length===0)return nt(!0);let s=o.map(a=>{let c=bs(a,n),l=UA(c)?c.canMatch(e,t):un(n,()=>c(e,t));return bo(l).pipe(WM(r))});return nt(s).pipe(Ss(),$M(i))}var Qi=class n extends Error{segmentGroup;constructor(e){super(),this.segmentGroup=e||null,Object.setPrototypeOf(this,n.prototype)}},dc=class n extends Error{urlTree;constructor(e){super(),this.urlTree=e,Object.setPrototypeOf(this,n.prototype)}};function ZA(n){throw new Ce(4e3,!1)}function JA(n){throw HM(!1,Sn.GuardRejected)}var Mg=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}async lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[Ve])throw ZA(`${e.redirectTo}`);r=r.children[Ve]}}async applyRedirectCommands(e,t,i,r,o){let s=await KA(t,r,o);if(s instanceof wi)throw new dc(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),e,i);if(s[0]==="/")throw new dc(a);return a}applyRedirectCreateUrlTree(e,t,i,r){let o=this.createSegmentGroup(e,t.root,i,r);return new wi(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=t[a]}else i[r]=o}),i}createSegmentGroup(e,t,i,r){let o=this.createSegments(e,t.segments,i,r),s={};return Object.entries(t.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(e,c,i,r)}),new dt(o,s)}createSegments(e,t,i,r){return t.map(o=>o.path[0]===":"?this.findPosParam(e,o,r):this.findOrReturn(o,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Ce(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}};function KA(n,e,t){if(typeof n=="string")return Promise.resolve(n);let i=n,{queryParams:r,fragment:o,routeConfig:s,url:a,outlet:c,params:l,data:u,title:d,paramMap:f,queryParamMap:h}=e;return ku(bo(un(t,()=>i({params:l,data:u,queryParams:r,fragment:o,routeConfig:s,url:a,outlet:c,title:d,paramMap:f,queryParamMap:h}))))}function QA(n,e){return n.providers&&!n._injector&&(n._injector=ja(n.providers,e,`Route: ${n.path}`)),n._injector??e}function ri(n){return n.outlet||Ve}function eD(n,e){let t=n.filter(i=>ri(i)===e);return t.push(...n.filter(i=>ri(i)!==e)),t}var Sg={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function tD(n,e,t,i,r,o){let s=qM(n,e,t);return s.matched?(i=QA(e,i),YA(i,e,t,r,o).pipe(Nt(a=>a===!0?s:me({},Sg)))):nt(s)}function qM(n,e,t){if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?me({},Sg):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||YI)(t,n,e);if(!r)return me({},Sg);let o={};Object.entries(r.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=r.consumed.length>0?me(me({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function gM(n,e,t,i){return t.length>0&&rD(n,t,i)?{segmentGroup:new dt(e,iD(i,new dt(t,n.children))),slicedSegments:[]}:t.length===0&&oD(n,t,i)?{segmentGroup:new dt(n.segments,nD(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new dt(n.segments,n.children),slicedSegments:t}}function nD(n,e,t,i){let r={};for(let o of t)if(Yu(n,e,o)&&!i[ri(o)]){let s=new dt([],{});r[ri(o)]=s}return me(me({},i),r)}function iD(n,e){let t={};t[Ve]=e;for(let i of n)if(i.path===""&&ri(i)!==Ve){let r=new dt([],{});t[ri(i)]=r}return t}function rD(n,e,t){return t.some(i=>Yu(n,e,i)&&ri(i)!==Ve)}function oD(n,e,t){return t.some(i=>Yu(n,e,i))}function Yu(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function sD(n,e,t){return e.length===0&&!n.children[t]}var bg=class{};async function aD(n,e,t,i,r,o,s="emptyOnly",a){return new Eg(n,e,t,i,r,s,o,a).recognize()}var cD=31,Eg=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,o,s,a,c){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new Mg(this.urlSerializer,this.urlTree)}noMatchError(e){return new Ce(4002,`'${e.segmentGroup}'`)}async recognize(){let e=gM(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:i}=await this.match(e),r=new Pn(i,t),o=new ju("",r),s=mA(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(e){let t=new ps([],Object.freeze({}),Object.freeze(me({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ve,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,e,Ve,t),rootSnapshot:t}}catch(i){if(i instanceof dc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Qi?this.noMatchError(i):i}}async processSegmentGroup(e,t,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(e,t,i,o);let s=await this.processSegment(e,t,i,i.segments,r,!0,o);return s instanceof Pn?[s]:[]}async processChildren(e,t,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let s=[];for(let c of o){let l=i.children[c],u=eD(t,c),d=await this.processSegmentGroup(e,u,l,c,r);s.push(...d)}let a=XM(s);return lD(a),a}async processSegment(e,t,i,r,o,s,a){for(let c of t)try{return await this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,o,s,a)}catch(l){if(l instanceof Qi||GM(l))continue;throw l}if(sD(i,r,o))return new bg;throw new Qi(i)}async processSegmentAgainstRoute(e,t,i,r,o,s,a,c){if(ri(i)!==s&&(s===Ve||!Yu(r,o,i)))throw new Qi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(e,r,i,o,s,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,o,s,c);throw new Qi(r)}async expandSegmentAgainstRouteUsingRedirect(e,t,i,r,o,s,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=qM(t,r,o);if(!c)throw new Qi(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>cD&&(this.allowRedirects=!1));let h=new ps(o,l,Object.freeze(me({},this.urlTree.queryParams)),this.urlTree.fragment,vM(r),ri(r),r.component??r._loadedComponent??null,r,yM(r),e),g=Gu(h,a,this.paramsInheritanceStrategy);if(h.params=Object.freeze(g.params),h.data=Object.freeze(g.data),this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let _=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e),m=await this.applyRedirects.lineralizeSegments(r,_);return this.processSegment(e,i,t,m.concat(f),s,!1,a)}async matchSegmentAgainstRoute(e,t,i,r,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=await ku(tD(t,i,r,e,this.urlSerializer,this.abortSignal));if(i.path==="**"&&(t.children={}),!a?.matched)throw new Qi(t);e=i._injector??e;let{routes:c}=await this.getChildConfig(e,i,r),l=i._loadedInjector??e,{parameters:u,consumedSegments:d,remainingSegments:f}=a,h=new ps(d,u,Object.freeze(me({},this.urlTree.queryParams)),this.urlTree.fragment,vM(i),ri(i),i.component??i._loadedComponent??null,i,yM(i),e),g=Gu(h,s,this.paramsInheritanceStrategy);h.params=Object.freeze(g.params),h.data=Object.freeze(g.data);let{segmentGroup:_,slicedSegments:m}=gM(t,d,f,c);if(m.length===0&&_.hasChildren()){let w=await this.processChildren(l,c,_,h);return new Pn(h,w)}if(c.length===0&&m.length===0)return new Pn(h,[]);let p=ri(i)===o,M=await this.processSegment(l,c,_,m,p?Ve:o,!0,h);return new Pn(h,M instanceof Pn?[M]:[])}async getChildConfig(e,t,i){if(t.children)return{routes:t.children,injector:e};if(t.loadChildren){if(t._loadedRoutes!==void 0){let o=t._loadedNgModuleFactory;return o&&!t._loadedInjector&&(t._loadedInjector=o.create(e).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await ku(XA(e,t,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(e,t);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}throw JA(t)}return{routes:[],injector:e}}};function lD(n){n.sort((e,t)=>e.value.outlet===Ve?-1:t.value.outlet===Ve?1:e.value.outlet.localeCompare(t.value.outlet))}function uD(n){let e=n.value.routeConfig;return e&&e.path===""}function XM(n){let e=[],t=new Set;for(let i of n){if(!uD(i)){e.push(i);continue}let r=e.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=XM(i.children);e.push(new Pn(i.value,r))}return e.filter(i=>!t.has(i))}function vM(n){return n.data||{}}function yM(n){return n.resolve||{}}function dD(n,e,t,i,r,o,s){return vn(async a=>{let{state:c,tree:l}=await aD(n,e,t,i,a.extractedUrl,r,o,s);return bt(me({},a),{targetSnapshot:c,urlAfterRedirects:l})})}function fD(n){return vn(e=>{let{targetSnapshot:t,guards:{canActivateChecks:i}}=e;if(!i.length)return nt(e);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let c of YM(a))o.add(c);let s=0;return qt(o).pipe(Il(a=>r.has(a)?hD(a,t,n):(a.data=Gu(a,a.parent,n).resolve,nt(void 0))),gi(()=>s++),Al(1),vn(a=>s===o.size?nt(e):nn))})}function YM(n){let e=n.children.map(t=>YM(t)).flat();return[n,...e]}function hD(n,e,t){let i=n.routeConfig,r=n._resolve;return i?.title!==void 0&&!kM(i)&&(r[fc]=i.title),ua(()=>(n.data=Gu(n,n.parent,t).resolve,pD(r,n,e).pipe(Nt(o=>(n._resolvedData=o,n.data=me(me({},n.data),o),null)))))}function pD(n,e,t){let i=tg(n);if(i.length===0)return nt({});let r={};return qt(i).pipe(vn(o=>mD(n[o],e,t).pipe(zi(),gi(s=>{if(s instanceof uc)throw Wu(new Mo,s);r[o]=s}))),Al(1),Nt(()=>r),da(o=>GM(o)?nn:Bh(o)))}function mD(n,e,t){let i=e._environmentInjector,r=bs(n,i),o=r.resolve?r.resolve(e,t):un(i,()=>r(e,t));return bo(o)}function _M(n){return Gi(e=>{let t=n(e);return t?qt(t).pipe(Nt(()=>e)):nt(e)})}var ZM=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===Ve);return i}getResolvedTitleForRoute(t){return t.data[fc]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>ie(gD),providedIn:"root"})}return n})(),gD=(()=>{class n extends ZM{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(Ke(uM))};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Zu=new Pe("",{factory:()=>({})}),Ju=new Pe(""),JM=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=ie(km);async loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await MM(un(t,()=>i.loadComponent())),s=await QM(KM(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await vD(i,this.compiler,t,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function vD(n,e,t,i){let r=await MM(un(t,()=>n.loadChildren())),o=await QM(KM(r)),s;o instanceof Su||Array.isArray(o)?s=o:s=await e.compileModuleAsync(o),i&&i(n);let a,c,l=!1,u;return Array.isArray(s)?(c=s,l=!0):(a=s.create(t).injector,u=s,c=a.get(Ju,[],{optional:!0,self:!0}).flat()),{routes:c.map(Cg),injector:a,factory:u}}function yD(n){return n&&typeof n=="object"&&"default"in n}function KM(n){return yD(n)?n.default:n}async function QM(n){return n}var Ig=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>ie(_D),providedIn:"root"})}return n})(),_D=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),eS=new Pe("");var xD=()=>{},tS=new Pe(""),nS=(()=>{class n{currentNavigation=po(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=po(null);events=new en;transitionAbortWithErrorSubject=new en;configLoader=ie(JM);environmentInjector=ie(Vt);destroyRef=ie(br);urlSerializer=ie(qu);rootContexts=ie(hc);location=ie(ds);inputBindingEnabled=ie(Xu,{optional:!0})!==null;titleStrategy=ie(ZM);options=ie(Zu,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=ie(Ig);createViewTransition=ie(eS,{optional:!0});navigationErrorHandler=ie(tS,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>nt(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new lg(r)),i=r=>this.events.next(new ug(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;Zi(()=>{this.transitions?.next(bt(me({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i}))})}setupNavigations(t){return this.transitions=new tn(null),this.transitions.pipe(Vi(i=>i!==null),Gi(i=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===i.id;return nt(i).pipe(Gi(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Sn.SupersededByNewNavigation),nn;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:c?bt(me({},c),{previousNavigation:null}):null,abort:()=>o.abort()});let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload")return this.events.next(new Ir(a.id,this.urlSerializer.serialize(a.rawUrl),"",Vu.IgnoredSameUrlNavigation)),a.resolve(!1),nn;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return nt(a).pipe(Gi(d=>(this.events.next(new ys(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),d.id!==this.navigationId?nn:Promise.resolve(d))),dD(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),gi(d=>{i.targetSnapshot=d.targetSnapshot,i.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=d.urlAfterRedirects,h));let f=new cc(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:d,extractedUrl:f,source:h,restoredState:g,extras:_}=a,m=new ys(d,this.urlSerializer.serialize(f),h,g);this.events.next(m);let p=LM(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=bt(me({},a),{targetSnapshot:p,urlAfterRedirects:f,extras:bt(me({},_),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(M=>(M.finalUrl=f,M)),nt(i)}else return this.events.next(new Ir(a.id,this.urlSerializer.serialize(a.extractedUrl),"",Vu.IgnoredByUrlHandlingStrategy)),a.resolve(!1),nn}),Nt(a=>{let c=new og(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(c),this.currentTransition=i=bt(me({},a),{guards:AA(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),VA(a=>this.events.next(a)),Gi(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Wu(this.urlSerializer,a.guardsResult);let c=new sg(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(c),!s())return nn;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",Sn.GuardRejected),nn;if(a.guards.canActivateChecks.length===0)return nt(a);let l=new ag(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(l),!s())return nn;let u=!1;return nt(a).pipe(fD(this.paramsInheritanceStrategy),gi({next:()=>{u=!0;let d=new cg(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(d)},complete:()=>{u||this.cancelNavigationTransition(a,"",Sn.NoDataFromResolver)}}))}),_M(a=>{let c=u=>{let d=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let f=u._environmentInjector;d.push(this.configLoader.loadComponent(f,u.routeConfig).then(h=>{u.component=h}))}for(let f of u.children)d.push(...c(f));return d},l=c(a.targetSnapshot.root);return l.length===0?nt(a):qt(Promise.all(l).then(()=>a))}),_M(()=>this.afterPreactivation()),Gi(()=>{let{currentSnapshot:a,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return l?qt(l).pipe(Nt(()=>i)):nt(i)}),Hi(1),Nt(a=>{let c=wA(t.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=bt(me({},a),{targetRouterState:c}),this.currentNavigation.update(l=>(l.targetRouterState=c,l)),this.events.next(new xs),s()&&(new xg(t.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(l=>(l.abort=xD,l)),this.lastSuccessfulNavigation.set(Zi(this.currentNavigation)),this.events.next(new Cr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)))}),fa(jM(o.signal).pipe(Vi(()=>!r&&!i.targetRouterState),gi(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Sn.Aborted)}))),gi({complete:()=>{r=!0}}),fa(this.transitionAbortWithErrorSubject.pipe(gi(a=>{throw a}))),Hh(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Sn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),da(a=>{if(r=!0,this.destroyed)return i.resolve(!1),nn;if(zM(a))this.events.next(new oi(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),IA(a)?this.events.next(new Ms(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let c=new _s(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let l=un(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof uc){let{message:u,cancellationCode:d}=Wu(this.urlSerializer,l);this.events.next(new oi(i.id,this.urlSerializer.serialize(i.extractedUrl),u,d)),this.events.next(new Ms(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),a}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return nn}))}))}cancelNavigationTransition(t,i,r){let o=new oi(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Zi(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function MD(n){return n!==oc}var iS=new Pe("");var SD=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>ie(bD),providedIn:"root"})}return n})(),wg=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}shouldDestroyInjector(e){return!0}},bD=(()=>{class n extends wg{static \u0275fac=(()=>{let t;return function(r){return(t||(t=mu(n)))(r||n)}})();static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ag=(()=>{class n{urlSerializer=ie(qu);options=ie(Zu,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=ie(ds);urlHandlingStrategy=ie(Ig);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new wi;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,s=r??o;return s instanceof wi?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=LM(null,ie(Vt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:()=>ie(ED),providedIn:"root"})}return n})(),ED=(()=>{class n extends Ag{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate")})})}handleRouterEvent(t,i){t instanceof ys?this.updateStateMemento():t instanceof Ir?this.commitTransition(i):t instanceof cc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof xs?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof oi&&!OM(t)?this.restoreHistory(i):t instanceof _s?this.restoreHistory(i,!0):t instanceof Cr&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:o,state:s}=i;if(this.location.isCurrentPathEqualTo(t)||o){let a=this.browserPageId,c=me(me({},s),this.generateNgRouterState(r,a));this.location.replaceState(t,"",c)}else{let a=me(me({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=mu(n)))(r||n)}})();static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function rS(n,e){n.events.pipe(Vi(t=>t instanceof Cr||t instanceof oi||t instanceof _s||t instanceof Ir),Nt(t=>t instanceof Cr||t instanceof Ir?0:(t instanceof oi?t.code===Sn.Redirect||t.code===Sn.SupersededByNewNavigation:!1)?2:1),Vi(t=>t!==2),Hi(1)).subscribe(()=>{e()})}var oS={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},sS={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Dg=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=ie(Om);stateManager=ie(Ag);options=ie(Zu,{optional:!0})||{};pendingTasks=ie(Er);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=ie(nS);urlSerializer=ie(qu);location=ie(ds);urlHandlingStrategy=ie(Ig);injector=ie(Vt);_events=new en;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=ie(SD);injectorCleanup=ie(iS,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=ie(Ju,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!ie(Xu,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Qt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Zi(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof oi&&i.code!==Sn.Redirect&&i.code!==Sn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Cr)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Ms){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=me({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||MD(r.source)},s);this.scheduleNavigation(a,oc,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}SA(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),oc,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r)=>{this.navigateToSyncWithBrowser(t,r,i)})}navigateToSyncWithBrowser(t,i,r){let o={replaceUrl:!0},s=r?.navigationId?r:null;if(r){let c=me({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(o.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,s,o).catch(c=>{this.disposed||this.injector.get(Yi)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Zi(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Cg),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=me(me({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=DM(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return RM(d,t,u,l??null,this.urlSerializer)}navigateByUrl(t,i={skipLocationChange:!1}){let r=vs(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,oc,null,i)}navigate(t,i={skipLocationChange:!1}){return wD(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(ya(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=me({},oS):i===!1?r=me({},sS):r=i,vs(t))return dM(this.currentUrlTree,t,r);let o=this.parseUrl(t);return dM(this.currentUrlTree,o,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(t,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return rS(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Fe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function wD(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ce(4008,!1)}var TD=new Pe("");function Rg(n,...e){return Jo([{provide:Ju,multi:!0,useValue:n},[],{provide:So,useFactory:CD},{provide:bu,multi:!0,useFactory:ID},e.map(t=>t.\u0275providers)])}function CD(){return ie(Dg).routerState.root}function ID(){let n=ie(yi);return e=>{let t=n.get(ls);if(e!==t.components[0])return;let i=n.get(Dg),r=n.get(AD);n.get(DD)===1&&i.initialNavigation(),n.get(RD,null,{optional:!0})?.setUpPreloading(),n.get(TD,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var AD=new Pe("",{factory:()=>new en}),DD=new Pe("",{factory:()=>1});var RD=new Pe("");var aS=[];var cS={providers:[Wp(),Rg(aS)]};var LS=0,mv=1,FS=2;var $c=1,kS=2,Js=3,ar=0,En=1,Ni=2,Pi=0,Ao=1,gv=2,vv=3,yv=4,US=5;var Fr=100,BS=101,VS=102,HS=103,zS=104,GS=200,jS=201,WS=202,$S=203,Cd=204,Id=205,qS=206,XS=207,YS=208,ZS=209,JS=210,KS=211,QS=212,eb=213,tb=214,Ad=0,Dd=1,Rd=2,Do=3,Nd=4,Pd=5,Od=6,Ld=7,_v=0,nb=1,ib=2,fi=0,xv=1,Mv=2,Sv=3,bv=4,Ev=5,wv=6,Tv=7;var ov=300,Wr=301,Po=302,ff=303,hf=304,qc=306,Fd=1e3,Ai=1001,kd=1002,Zt=1003,rb=1004;var Xc=1005;var an=1006,pf=1007;var $r=1008;var Cn=1009,Cv=1010,Iv=1011,Ks=1012,mf=1013,hi=1014,pi=1015,Oi=1016,gf=1017,vf=1018,Qs=1020,Av=35902,Dv=35899,Rv=1021,Nv=1022,Yn=1023,Di=1026,qr=1027,Pv=1028,yf=1029,Oo=1030,_f=1031;var xf=1033,Yc=33776,Zc=33777,Jc=33778,Kc=33779,Mf=35840,Sf=35841,bf=35842,Ef=35843,wf=36196,Tf=37492,Cf=37496,If=37488,Af=37489,Df=37490,Rf=37491,Nf=37808,Pf=37809,Of=37810,Lf=37811,Ff=37812,kf=37813,Uf=37814,Bf=37815,Vf=37816,Hf=37817,zf=37818,Gf=37819,jf=37820,Wf=37821,$f=36492,qf=36494,Xf=36495,Yf=36283,Zf=36284,Jf=36285,Kf=36286;var bc=2300,Ud=2301,Td=2302,sv=2303,av=2400,cv=2401,lv=2402;var ob=3200;var Ov=0,sb=1,ur="",Fn="srgb",Ro="srgb-linear",Ec="linear",ft="srgb";var Io=7680;var uv=519,ab=512,cb=513,lb=514,Qf=515,ub=516,db=517,eh=518,fb=519,Bd=35044;var Lv="300 es",li=2e3,Hs=2001;function PD(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function OD(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function wc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hb(){let n=wc("canvas");return n.style.display="block",n}var lS={},zs=null;function Tc(...n){let e="THREE."+n.shift();zs?zs("log",e,...n):console.log(e,...n)}function pb(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Re(...n){n=pb(n);let e="THREE."+n.shift();if(zs)zs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function De(...n){n=pb(n);let e="THREE."+n.shift();if(zs)zs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Cc(...n){let e=n.join(" ");e in lS||(lS[e]=!0,Re(...n))}function mb(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}var gb={[Ad]:Dd,[Rd]:Od,[Nd]:Ld,[Do]:Pd,[Dd]:Ad,[Od]:Rd,[Ld]:Nd,[Pd]:Do},cr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ng=Math.PI/180,Vd=180/Math.PI;function Lr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function LD(n,e){return(n%e+e)%e}function Pg(n,e,t){return(1-t)*n+t*e}function Ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var qe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ri=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=o[s+0],h=o[s+1],g=o[s+2],_=o[s+3];if(d!==_||c!==f||l!==h||u!==g){let m=c*f+l*h+u*g+d*_;m<0&&(f=-f,h=-h,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,a=Math.sin(a*M)/w,c=c*p+f*a,l=l*p+h*a,u=u*p+g*a,d=d*p+_*a}else{c=c*p+f*a,l=l*p+h*a,u=u*p+g*a,d=d*p+_*a;let M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,s){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=o[s],f=o[s+1],h=o[s+2],g=o[s+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(o/2),f=c(i/2),h=c(r/2),g=c(o/2);switch(s){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(o-l)*h,this._z=(s-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(o-l)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(s-r)/h,this._x=(o+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-i*l,this._z=o*u+s*l+i*c-r*a,this._w=s*u-i*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uS.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uS.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*i),u=2*(a*t-o*r),d=2*(o*i-s*t);return this.x=t+c*l+s*d-a*u,this.y=i+c*u+a*l-o*d,this.z=r+c*d+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Og.copy(this).projectOnVector(e),this.sub(Og)}reflect(e){return this.sub(Og.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Og=new O,uS=new Ri,je=class n{constructor(e,t,i,r,o,s,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l)}set(e,t,i,r,o,s,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],M=r[1],w=r[4],b=r[7],T=r[2],C=r[5],D=r[8];return o[0]=s*_+a*M+c*T,o[3]=s*m+a*w+c*C,o[6]=s*p+a*b+c*D,o[1]=l*_+u*M+d*T,o[4]=l*m+u*w+d*C,o[7]=l*p+u*b+d*D,o[2]=f*_+h*M+g*T,o[5]=f*m+h*w+g*C,o[8]=f*p+h*b+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-i*o*u+i*a*c+r*o*l-r*s*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*s-a*l,f=a*c-u*o,h=l*o-s*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*s)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*o-a*t)*_,e[6]=h*_,e[7]=(i*c-l*t)*_,e[8]=(s*t-i*o)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){let c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lg.makeScale(e,t)),this}rotate(e){return this.premultiply(Lg.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lg.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lg=new je,dS=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fS=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FD(){let n={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===ft&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ft&&(r.r=Vs(r.r),r.g=Vs(r.g),r.b=Vs(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ur?Ec:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Cc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Cc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ro]:{primaries:e,whitePoint:i,transfer:Ec,toXYZ:dS,fromXYZ:fS,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:dS,fromXYZ:fS,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),n}var it=FD();function sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Es,Hd=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Es===void 0&&(Es=wc("canvas")),Es.width=e.width,Es.height=e.height;let r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Es}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=sr(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(sr(t[i]/255)*255):t[i]=sr(t[i]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kD=0,Gs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kD++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Fg(r[s].image)):o.push(Fg(r[s]))}else o=Fg(r);i.url=o}return t||(e.images[this.uuid]=i),i}};function Fg(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var UD=0,kg=new O,Li=(()=>{class n extends cr{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Ai,o=Ai,s=an,a=$r,c=Yn,l=Cn,u=n.DEFAULT_ANISOTROPY,d=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UD++}),this.uuid=Lr(),this.name="",this.source=new Gs(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kg).x}get height(){return this.source.getSize(kg).y}get depth(){return this.source.getSize(kg).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let o=this[i];if(o===void 0){Re(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ov)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fd:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case kd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fd:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case kd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=ov,n.DEFAULT_ANISOTROPY=1,n})(),Dt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,b=(h+1)/2,T=(p+1)/2,C=(u+f)/4,D=(d+_)/4,y=(g+m)/4;return w>b&&w>T?w<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(w),r=C/i,o=D/i):b>T?b<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),i=C/r,o=y/r):T<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(T),i=D/o,r=y/o),this.set(i,r,o,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(f-u)/M,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zd=class extends cr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},o=new Li(r),s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends zd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ic=class extends Li{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gd=class extends Li{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var It=class n{constructor(e,t,i,r,o,s,a,c,l,u,d,f,h,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l,u,d,f,h,g,_,m)}set(e,t,i,r,o,s,a,c,l,u,d,f,h,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/ws.setFromMatrixColumn(e,0).length(),o=1/ws.setFromMatrixColumn(e,1).length(),s=1/ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){let f=s*u,h=s*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+h*l,t[10]=s*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,_=l*d;t[0]=f+_*a,t[4]=g*a-h,t[8]=s*l,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=h*a-g,t[6]=_+f*a,t[10]=s*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,_=l*d;t[0]=f-_*a,t[4]=-s*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=s*u,t[9]=_-f*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){let f=s*u,h=s*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){let f=s*c,h=s*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-f*d,t[8]=g*d+h,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-_*d}else if(e.order==="XZY"){let f=s*c,h=s*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=s*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BD,e,VD)}lookAt(e,t,i){let r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Ar.crossVectors(i,On),Ar.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Ar.crossVectors(i,On)),Ar.normalize(),Ku.crossVectors(On,Ar),r[0]=Ar.x,r[4]=Ku.x,r[8]=On.x,r[1]=Ar.y,r[5]=Ku.y,r[9]=On.y,r[2]=Ar.z,r[6]=Ku.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],w=i[7],b=i[11],T=i[15],C=r[0],D=r[4],y=r[8],S=r[12],j=r[1],I=r[5],L=r[9],k=r[13],G=r[2],B=r[6],H=r[10],F=r[14],Q=r[3],Z=r[7],ue=r[11],ge=r[15];return o[0]=s*C+a*j+c*G+l*Q,o[4]=s*D+a*I+c*B+l*Z,o[8]=s*y+a*L+c*H+l*ue,o[12]=s*S+a*k+c*F+l*ge,o[1]=u*C+d*j+f*G+h*Q,o[5]=u*D+d*I+f*B+h*Z,o[9]=u*y+d*L+f*H+h*ue,o[13]=u*S+d*k+f*F+h*ge,o[2]=g*C+_*j+m*G+p*Q,o[6]=g*D+_*I+m*B+p*Z,o[10]=g*y+_*L+m*H+p*ue,o[14]=g*S+_*k+m*F+p*ge,o[3]=M*C+w*j+b*G+T*Q,o[7]=M*D+w*I+b*B+T*Z,o[11]=M*y+w*L+b*H+T*ue,o[15]=M*S+w*k+b*F+T*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=c*h-l*f,w=a*h-l*d,b=a*f-c*d,T=s*h-l*u,C=s*f-c*u,D=s*d-a*u;return t*(_*M-m*w+p*b)-i*(g*M-m*T+p*C)+r*(g*w-_*T+p*D)-o*(g*b-_*C+m*D)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=t*a-i*s,w=t*c-r*s,b=t*l-o*s,T=i*c-r*a,C=i*l-o*a,D=r*l-o*c,y=u*_-d*g,S=u*m-f*g,j=u*p-h*g,I=d*m-f*_,L=d*p-h*_,k=f*p-h*m,G=M*k-w*L+b*I+T*j-C*S+D*y;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/G;return e[0]=(a*k-c*L+l*I)*B,e[1]=(r*L-i*k-o*I)*B,e[2]=(_*D-m*C+p*T)*B,e[3]=(f*C-d*D-h*T)*B,e[4]=(c*j-s*k-l*S)*B,e[5]=(t*k-r*j+o*S)*B,e[6]=(m*b-g*D-p*w)*B,e[7]=(u*D-f*b+h*w)*B,e[8]=(s*L-a*j+l*y)*B,e[9]=(i*j-t*L-o*y)*B,e[10]=(g*C-_*b+p*M)*B,e[11]=(d*b-u*C-h*M)*B,e[12]=(a*S-s*I-c*y)*B,e[13]=(t*I-i*S+r*y)*B,e[14]=(_*w-g*T-m*M)*B,e[15]=(u*T-d*w+f*M)*B,this}scale(e){let t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,d=a+a,f=o*l,h=o*u,g=o*d,_=s*u,m=s*d,p=a*d,M=c*l,w=c*u,b=c*d,T=i.x,C=i.y,D=i.z;return r[0]=(1-(_+p))*T,r[1]=(h+b)*T,r[2]=(g-w)*T,r[3]=0,r[4]=(h-b)*C,r[5]=(1-(f+p))*C,r[6]=(m+M)*C,r[7]=0,r[8]=(g+w)*D,r[9]=(m-M)*D,r[10]=(1-(f+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let s=ws.set(r[0],r[1],r[2]).length(),a=ws.set(r[4],r[5],r[6]).length(),c=ws.set(r[8],r[9],r[10]).length();o<0&&(s=-s),si.copy(this);let l=1/s,u=1/a,d=1/c;return si.elements[0]*=l,si.elements[1]*=l,si.elements[2]*=l,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,t.setFromRotationMatrix(si),i.x=s,i.y=a,i.z=c,this}makePerspective(e,t,i,r,o,s,a=li,c=!1){let l=this.elements,u=2*o/(t-e),d=2*o/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),g,_;if(c)g=o/(s-o),_=s*o/(s-o);else if(a===li)g=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===Hs)g=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=li,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),g,_;if(c)g=1/(s-o),_=s/(s-o);else if(a===li)g=-2/(s-o),_=-(s+o)/(s-o);else if(a===Hs)g=-1/(s-o),_=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ws=new O,si=new It,BD=new O(0,0,0),VD=new O(1,1,1),Ar=new O,Ku=new O,On=new O,hS=new It,pS=new Ri,kr=(()=>{class n{constructor(t=0,i=0,r=0,o=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,o=this._order){return this._x=t,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let o=t.elements,s=o[0],a=o[4],c=o[8],l=o[1],u=o[5],d=o[9],f=o[2],h=o[6],g=o[10];switch(i){case"XYZ":this._y=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return hS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hS,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return pS.setFromEuler(this),this.setFromQuaternion(pS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Ac=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},HD=0,mS=new O,Ts=new Ri,er=new It,Qu=new O,mc=new O,zD=new O,GD=new Ri,gS=new O(1,0,0),vS=new O(0,1,0),yS=new O(0,0,1),_S={type:"added"},jD={type:"removed"},Cs={type:"childadded",child:null},Ug={type:"childremoved",child:null},Zn=(()=>{class n extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HD++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,i=new kr,r=new Ri,o=new O(1,1,1);function s(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new It},normalMatrix:{value:new je}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ts.setFromAxisAngle(t,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,i){return Ts.setFromAxisAngle(t,i),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(gS,t)}rotateY(t){return this.rotateOnAxis(vS,t)}rotateZ(t){return this.rotateOnAxis(yS,t)}translateOnAxis(t,i){return mS.copy(t).applyQuaternion(this.quaternion),this.position.add(mS.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(gS,t)}translateY(t){return this.translateOnAxis(vS,t)}translateZ(t){return this.translateOnAxis(yS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Qu.copy(t):Qu.set(t,i,r);let o=this.parent;this.updateWorldMatrix(!0,!1),mc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(mc,Qu,this.up):er.lookAt(Qu,mc,this.up),this.quaternion.setFromRotationMatrix(er),o&&(er.extractRotation(o.matrixWorld),Ts.setFromRotationMatrix(er),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_S),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(jD),Ug.child=t,this.dispatchEvent(Ug),Ug.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),er.multiply(t.parent.matrixWorld)),t.applyMatrix4(er),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_S),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,o=this.children.length;r<o;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mc,t,zD),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mc,GD,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,o=t.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*r-s[8]*o,s[13]+=r-s[1]*i-s[5]*r-s[9]*o,s[14]+=o-s[2]*i-s[6]*r-s[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>bt(me({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>me({},c)),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(s(t.materials,this.material[l]));o.material=c}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];o.animations.push(s(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),_=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),_.length>0&&(r.nodes=_)}return r.object=o,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let o=t.children[r];this.add(o.clone())}return this}}return n.DEFAULT_UP=new O(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),qn=class extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}},WD={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WD)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},vb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},ed={h:0,s:0,l:0};function Bg(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var et=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=LD(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=Bg(s,o,e+1/3),this.g=Bg(s,o,e),this.b=Bg(s,o,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=Fn){function i(o){o!==void 0&&parseFloat(o)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){let i=vb[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return it.workingToColorSpace(hn.copy(this),e),Math.round(tt(hn.r*255,0,255))*65536+Math.round(tt(hn.g*255,0,255))*256+Math.round(tt(hn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(hn.copy(this),t);let i=hn.r,r=hn.g,o=hn.b,s=Math.max(i,r,o),a=Math.min(i,r,o),c,l,u=(a+s)/2;if(a===s)c=0,l=0;else{let d=s-a;switch(l=u<=.5?d/(s+a):d/(2-s-a),s){case i:c=(r-o)/d+(r<o?6:0);break;case r:c=(o-i)/d+2;break;case o:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Fn){it.workingToColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,r=hn.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(ed);let i=Pg(Dr.h,ed.h,t),r=Pg(Dr.s,ed.s,t),o=Pg(Dr.l,ed.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new et;et.NAMES=vb;var Dc=class extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kr,this.environmentIntensity=1,this.environmentRotation=new kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ai=new O,tr=new O,Vg=new O,nr=new O,Is=new O,As=new O,xS=new O,Hg=new O,zg=new O,Gg=new O,jg=new Dt,Wg=new Dt,$g=new Dt,or=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ai.subVectors(e,t),r.cross(ai);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){ai.subVectors(r,t),tr.subVectors(i,t),Vg.subVectors(e,t);let s=ai.dot(ai),a=ai.dot(tr),c=ai.dot(Vg),l=tr.dot(tr),u=tr.dot(Vg),d=s*l-a*a;if(d===0)return o.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(s*u-a*c)*f;return o.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,i,r,o,s,a,c){return this.getBarycoord(e,t,i,r,nr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,nr.x),c.addScaledVector(s,nr.y),c.addScaledVector(a,nr.z),c)}static getInterpolatedAttribute(e,t,i,r,o,s){return jg.setScalar(0),Wg.setScalar(0),$g.setScalar(0),jg.fromBufferAttribute(e,t),Wg.fromBufferAttribute(e,i),$g.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(jg,o.x),s.addScaledVector(Wg,o.y),s.addScaledVector($g,o.z),s}static isFrontFacing(e,t,i,r){return ai.subVectors(i,t),tr.subVectors(e,t),ai.cross(tr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),ai.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,o=this.c,s,a;Is.subVectors(r,i),As.subVectors(o,i),Hg.subVectors(e,i);let c=Is.dot(Hg),l=As.dot(Hg);if(c<=0&&l<=0)return t.copy(i);zg.subVectors(e,r);let u=Is.dot(zg),d=As.dot(zg);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(Is,s);Gg.subVectors(e,o);let h=Is.dot(Gg),g=As.dot(Gg);if(g>=0&&h<=g)return t.copy(o);let _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(As,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return xS.subVectors(o,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(xS,a);let p=1/(m+_+f);return s=_*p,a=f*p,t.copy(i).addScaledVector(Is,s).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ur=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,ci):ci.fromBufferAttribute(o,s),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),td.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),td.copy(i.boundingBox)),td.applyMatrix4(e.matrixWorld),this.union(td)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gc),nd.subVectors(this.max,gc),Ds.subVectors(e.a,gc),Rs.subVectors(e.b,gc),Ns.subVectors(e.c,gc),Rr.subVectors(Rs,Ds),Nr.subVectors(Ns,Rs),Eo.subVectors(Ds,Ns);let t=[0,-Rr.z,Rr.y,0,-Nr.z,Nr.y,0,-Eo.z,Eo.y,Rr.z,0,-Rr.x,Nr.z,0,-Nr.x,Eo.z,0,-Eo.x,-Rr.y,Rr.x,0,-Nr.y,Nr.x,0,-Eo.y,Eo.x,0];return!qg(t,Ds,Rs,Ns,nd)||(t=[1,0,0,0,1,0,0,0,1],!qg(t,Ds,Rs,Ns,nd))?!1:(id.crossVectors(Rr,Nr),t=[id.x,id.y,id.z],qg(t,Ds,Rs,Ns,nd))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ir=[new O,new O,new O,new O,new O,new O,new O,new O],ci=new O,td=new Ur,Ds=new O,Rs=new O,Ns=new O,Rr=new O,Nr=new O,Eo=new O,gc=new O,nd=new O,id=new O,wo=new O;function qg(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){wo.fromArray(n,o);let a=r.x*Math.abs(wo.x)+r.y*Math.abs(wo.y)+r.z*Math.abs(wo.z),c=e.dot(wo),l=t.dot(wo),u=i.dot(wo);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Ut=new O,rd=new qe,$D=0,pn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$D++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bd,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rd.fromBufferAttribute(this,t),rd.applyMatrix3(e),this.setXY(t,rd.x,rd.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array),o=xt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bd&&(e.usage=this.usage),e}};var Rc=class extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Nc=class extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Bt=class extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}},qD=new Ur,vc=new O,Xg=new O,Br=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):qD.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vc.subVectors(e,this.center);let t=vc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(vc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vc.copy(e.center).add(Xg)),this.expandByPoint(vc.copy(e.center).sub(Xg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},XD=0,$n=new It,Yg=new Zn,Ps=new O,Ln=new Ur,yc=new Ur,Yt=new O,Jt=class n extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XD++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(PD(e)?Nc:Rc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new je().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return Yg.lookAt(e),Yg.updateMatrix(),this.applyMatrix4(Yg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Bt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let o=t[i];Ln.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];yc.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Ln.min,yc.min),Ln.expandByPoint(Yt),Yt.addVectors(Ln.max,yc.max),Ln.expandByPoint(Yt)):(Ln.expandByPoint(yc.min),Ln.expandByPoint(yc.max))}Ln.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Yt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Yt.fromBufferAttribute(a,l),c&&(Ps.fromBufferAttribute(e,l),Yt.add(Ps)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),a=[],c=[];for(let y=0;y<i.count;y++)a[y]=new O,c[y]=new O;let l=new O,u=new O,d=new O,f=new qe,h=new qe,g=new qe,_=new O,m=new O;function p(y,S,j){l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,j),f.fromBufferAttribute(o,y),h.fromBufferAttribute(o,S),g.fromBufferAttribute(o,j),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(I),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(I),a[y].add(_),a[S].add(_),a[j].add(_),c[y].add(m),c[S].add(m),c[j].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,S=M.length;y<S;++y){let j=M[y],I=j.start,L=j.count;for(let k=I,G=I+L;k<G;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let w=new O,b=new O,T=new O,C=new O;function D(y){T.fromBufferAttribute(r,y),C.copy(T);let S=a[y];w.copy(S),w.sub(T.multiplyScalar(T.dot(S))).normalize(),b.crossVectors(C,S);let I=b.dot(c[y])<0?-1:1;s.setXYZW(y,w.x,w.y,w.z,I)}for(let y=0,S=M.length;y<S;++y){let j=M[y],I=j.start,L=j.count;for(let k=I,G=I+L;k<G;k+=3)D(e.getX(k+0)),D(e.getX(k+1)),D(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new O,o=new O,s=new O,a=new O,c=new O,l=new O,u=new O,d=new O;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new pn(f,u,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,c=s.length;a<c;a++){let l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let o=e.morphAttributes;for(let l in o){let u=[],d=o[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,u=s.length;l<u;l++){let d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jd=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bd,this.updateRanges=[],this.version=0,this.uuid=Lr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new O,Pc=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),r=xt(r,this.array),o=xt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){Tc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},YD=0,ui=class extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YD++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=Ao,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Id,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Io,this.stencilZFail=Io,this.stencilZPass=Io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ao&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Id&&(i.blendDst=this.blendDst),this.blendEquation!==Fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Io&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Io&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Io&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let s=[];for(let a in o){let c=o[a];delete c.metadata,s.push(c)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},lr=class extends ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Os,_c=new O,Ls=new O,Fs=new O,ks=new qe,xc=new qe,yb=new It,od=new O,Mc=new O,sd=new O,MS=new qe,Zg=new qe,SS=new qe,di=class extends Zn{constructor(e=new lr){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new Jt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jd(t,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new Pc(i,3,0,!1)),Os.setAttribute("uv",new Pc(i,2,3,!1))}this.geometry=Os,this.material=e,this.center=new qe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&De('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),yb.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Fs.z);let i=this.material.rotation,r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));let s=this.center;ad(od.set(-.5,-.5,0),Fs,s,Ls,r,o),ad(Mc.set(.5,-.5,0),Fs,s,Ls,r,o),ad(sd.set(.5,.5,0),Fs,s,Ls,r,o),MS.set(0,0),Zg.set(1,0),SS.set(1,1);let a=e.ray.intersectTriangle(od,Mc,sd,!1,_c);if(a===null&&(ad(Mc.set(-.5,.5,0),Fs,s,Ls,r,o),Zg.set(0,1),a=e.ray.intersectTriangle(od,sd,Mc,!1,_c),a===null))return;let c=e.ray.origin.distanceTo(_c);c<e.near||c>e.far||t.push({distance:c,point:_c.clone(),uv:or.getInterpolation(_c,od,Mc,sd,MS,Zg,SS,new qe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ad(n,e,t,i,r,o){ks.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(xc.x=o*ks.x-r*ks.y,xc.y=r*ks.x+o*ks.y):xc.copy(ks),n.copy(e),n.x+=xc.x,n.y+=xc.y,n.applyMatrix4(yb)}var rr=new O,Jg=new O,cd=new O,Pr=new O,Kg=new O,ld=new O,Qg=new O,Ws=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Jg.copy(e).add(t).multiplyScalar(.5),cd.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(Jg);let o=e.distanceTo(t)*.5,s=-this.direction.dot(cd),a=Pr.dot(this.direction),c=-Pr.dot(cd),l=Pr.lengthSq(),u=Math.abs(1-s*s),d,f,h,g;if(u>0)if(d=s*c-a,f=s*a-c,g=o*u,d>=0)if(f>=-g)if(f<=g){let _=1/u;d*=_,f*=_,h=d*(d+s*f+2*a)+f*(s*d+f+2*c)+l}else f=o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;else f=-o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-c),o),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-o,-c),o),h=f*(f+2*c)+l):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-c),o),h=-d*d+f*(f+2*c)+l);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Jg).addScaledVector(cd,f),h}intersectSphere(e,t){rr.subVectors(e.center,this.origin);let i=rr.dot(this.direction),r=rr.dot(rr)-i*i,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(o=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,i,r,o){Kg.subVectors(t,e),ld.subVectors(i,e),Qg.crossVectors(Kg,ld);let s=this.direction.dot(Qg),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Pr.subVectors(this.origin,e);let c=a*this.direction.dot(ld.crossVectors(Pr,ld));if(c<0)return null;let l=a*this.direction.dot(Kg.cross(Pr));if(l<0||c+l>s)return null;let u=-a*Pr.dot(Qg);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$s=class extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.combine=_v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bS=new It,To=new Ws,ud=new Br,ES=new O,dd=new O,fd=new O,hd=new O,ev=new O,pd=new O,wS=new O,md=new O,Ot=class extends Zn{constructor(e=new Jt,t=new $s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){pd.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let u=a[c],d=o[c];u!==0&&(ev.fromBufferAttribute(d,e),s?pd.addScaledVector(ev,u):pd.addScaledVector(ev.sub(t),u))}t.add(pd)}return t}raycast(e,t){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ud.copy(i.boundingSphere),ud.applyMatrix4(o),To.copy(e.ray).recast(e.near),!(ud.containsPoint(To.origin)===!1&&(To.intersectSphere(ud,ES)===null||To.origin.distanceToSquared(ES)>(e.far-e.near)**2))&&(bS.copy(o).invert(),To.copy(e.ray).applyMatrix4(bS),!(i.boundingBox!==null&&To.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,To)))}_computeIntersections(e,t,i){let r,o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=s[m.materialIndex],M=Math.max(m.start,h.start),w=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,T=w;b<T;b+=3){let C=a.getX(b),D=a.getX(b+1),y=a.getX(b+2);r=gd(this,p,e,i,l,u,d,C,D,y),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){let M=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);r=gd(this,s,e,i,l,u,d,M,w,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=s[m.materialIndex],M=Math.max(m.start,h.start),w=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,T=w;b<T;b+=3){let C=b,D=b+1,y=b+2;r=gd(this,p,e,i,l,u,d,C,D,y),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){let M=m,w=m+1,b=m+2;r=gd(this,s,e,i,l,u,d,M,w,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function ZD(n,e,t,i,r,o,s,a){let c;if(e.side===En?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===ar,a),c===null)return null;md.copy(a),md.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(md);return l<t.near||l>t.far?null:{distance:l,point:md.clone(),object:n}}function gd(n,e,t,i,r,o,s,a,c,l){n.getVertexPosition(a,dd),n.getVertexPosition(c,fd),n.getVertexPosition(l,hd);let u=ZD(n,e,t,i,dd,fd,hd,wS);if(u){let d=new O;or.getBarycoord(wS,dd,fd,hd,d),r&&(u.uv=or.getInterpolatedAttribute(r,a,c,l,d,new qe)),o&&(u.uv1=or.getInterpolatedAttribute(o,a,c,l,d,new qe)),s&&(u.normal=or.getInterpolatedAttribute(s,a,c,l,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};or.getNormal(dd,fd,hd,f.normal),u.face=f,u.barycoord=d}return u}var Wd=class extends Li{constructor(e=null,t=1,i=1,r,o,s,a,c,l=Zt,u=Zt,d,f){super(null,s,a,c,l,u,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tv=new O,JD=new O,KD=new je,Ci=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=tv.subVectors(i,t).cross(JD.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(tv),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||KD.getNormalMatrix(e),r=this.coplanarPoint(tv).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Co=new Br,QD=new qe(.5,.5),vd=new O,qs=class{constructor(e=new Ci,t=new Ci,i=new Ci,r=new Ci,o=new Ci,s=new Ci){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li,i=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],c=o[2],l=o[3],u=o[4],d=o[5],f=o[6],h=o[7],g=o[8],_=o[9],m=o[10],p=o[11],M=o[12],w=o[13],b=o[14],T=o[15];if(r[0].setComponents(l-s,h-u,p-g,T-M).normalize(),r[1].setComponents(l+s,h+u,p+g,T+M).normalize(),r[2].setComponents(l+a,h+d,p+_,T+w).normalize(),r[3].setComponents(l-a,h-d,p-_,T-w).normalize(),i)r[4].setComponents(c,f,m,b).normalize(),r[5].setComponents(l-c,h-f,p-m,T-b).normalize();else if(r[4].setComponents(l-c,h-f,p-m,T-b).normalize(),t===li)r[5].setComponents(l+c,h+f,p+m,T+b).normalize();else if(t===Hs)r[5].setComponents(c,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Co.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Co.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Co)}intersectsSprite(e){Co.center.set(0,0,0);let t=QD.distanceTo(e.center);return Co.radius=.7071067811865476+t,Co.applyMatrix4(e.matrixWorld),this.intersectsSphere(Co)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(vd.x=r.normal.x>0?e.max.x:e.min.x,vd.y=r.normal.y>0?e.max.y:e.min.y,vd.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vd)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Oc=class extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$d=new O,qd=new O,TS=new It,Sc=new Ws,yd=new Br,nv=new O,CS=new O,Xd=class extends Zn{constructor(e=new Jt,t=new Oc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)$d.fromBufferAttribute(t,r-1),qd.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=$d.distanceTo(qd);e.setAttribute("lineDistance",new Bt(i,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yd.copy(i.boundingSphere),yd.applyMatrix4(r),yd.radius+=o,e.ray.intersectsSphere(yd)===!1)return;TS.copy(r).invert(),Sc.copy(e.ray).applyMatrix4(TS);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let _=h,m=g-1;_<m;_+=l){let p=u.getX(_),M=u.getX(_+1),w=_d(this,e,Sc,c,p,M,_);w&&t.push(w)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(h),p=_d(this,e,Sc,c,_,m,g-1);p&&t.push(p)}}else{let h=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let _=h,m=g-1;_<m;_+=l){let p=_d(this,e,Sc,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=_d(this,e,Sc,c,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function _d(n,e,t,i,r,o,s){let a=n.geometry.attributes.position;if($d.fromBufferAttribute(a,r),qd.fromBufferAttribute(a,o),t.distanceSqToSegment($d,qd,nv,CS)>i)return;nv.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(nv);if(!(l<e.near||l>e.far))return{distance:l,point:CS.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Xs=class extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},IS=new It,dv=new Ws,xd=new Br,Md=new O,Lc=class extends Zn{constructor(e=new Jt,t=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xd.copy(i.boundingSphere),xd.applyMatrix4(r),xd.radius+=o,e.ray.intersectsSphere(xd)===!1)return;IS.copy(r).invert(),dv.copy(e.ray).applyMatrix4(IS);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let f=Math.max(0,s.start),h=Math.min(l.count,s.start+s.count);for(let g=f,_=h;g<_;g++){let m=l.getX(g);Md.fromBufferAttribute(d,m),AS(Md,m,c,r,e,t,this)}}else{let f=Math.max(0,s.start),h=Math.min(d.count,s.start+s.count);for(let g=f,_=h;g<_;g++)Md.fromBufferAttribute(d,g),AS(Md,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function AS(n,e,t,i,r,o,s){let a=dv.distanceSqToPoint(n);if(a<t){let c=new O;dv.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Fc=class extends Li{constructor(e=[],t=Wr,i,r,o,s,a,c,l,u){super(e,t,i,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vr=class extends Li{constructor(e,t,i,r,o,s,a,c,l){super(e,t,i,r,o,s,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hr=class extends Li{constructor(e,t,i=hi,r,o,s,a=Zt,c=Zt,l,u=Di,d=1){if(u!==Di&&u!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,o,s,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Yd=class extends Hr{constructor(e,t=hi,i=Wr,r,o,s=Zt,a=Zt,c,l=Di){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,o,s,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},kc=class extends Li{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xn=class n extends Jt{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(d,2));function g(_,m,p,M,w,b,T,C,D,y,S){let j=b/D,I=T/y,L=b/2,k=T/2,G=C/2,B=D+1,H=y+1,F=0,Q=0,Z=new O;for(let ue=0;ue<H;ue++){let ge=ue*I-k;for(let fe=0;fe<B;fe++){let $e=fe*j-L;Z[_]=$e*M,Z[m]=ge*w,Z[p]=G,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=C>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(fe/D),d.push(1-ue/y),F+=1}}for(let ue=0;ue<y;ue++)for(let ge=0;ge<D;ge++){let fe=f+ge+B*ue,$e=f+ge+B*(ue+1),At=f+(ge+1)+B*(ue+1),Ct=f+(ge+1)+B*ue;c.push(fe,$e,Ct),c.push($e,At,Ct),Q+=6}a.addGroup(h,Q,S),h+=Q,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Zd=class n extends Jt{constructor(e=1,t=1,i=1,r=32,o=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),o=Math.floor(o);let u=[],d=[],f=[],h=[],g=0,_=[],m=i/2,p=0;M(),s===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Bt(d,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(h,2));function M(){let b=new O,T=new O,C=0,D=(t-e)/i;for(let y=0;y<=o;y++){let S=[],j=y/o,I=j*(t-e)+e;for(let L=0;L<=r;L++){let k=L/r,G=k*c+a,B=Math.sin(G),H=Math.cos(G);T.x=I*B,T.y=-j*i+m,T.z=I*H,d.push(T.x,T.y,T.z),b.set(B,D,H).normalize(),f.push(b.x,b.y,b.z),h.push(k,1-j),S.push(g++)}_.push(S)}for(let y=0;y<r;y++)for(let S=0;S<o;S++){let j=_[S][y],I=_[S+1][y],L=_[S+1][y+1],k=_[S][y+1];(e>0||S!==0)&&(u.push(j,I,k),C+=3),(t>0||S!==o-1)&&(u.push(I,L,k),C+=3)}l.addGroup(p,C,0),p+=C}function w(b){let T=g,C=new qe,D=new O,y=0,S=b===!0?e:t,j=b===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,m*j,0),f.push(0,j,0),h.push(.5,.5),g++;let I=g;for(let L=0;L<=r;L++){let G=L/r*c+a,B=Math.cos(G),H=Math.sin(G);D.x=S*H,D.y=m*j,D.z=S*B,d.push(D.x,D.y,D.z),f.push(0,j,0),C.x=B*.5+.5,C.y=H*.5*j+.5,h.push(C.x,C.y),g++}for(let L=0;L<r;L++){let k=T+L,G=I+L;b===!0?u.push(G,G+1,k):u.push(G+1,G,k),y+=3}l.addGroup(p,y,b===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jd=class n extends Zd{constructor(e=1,t=1,i=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,e,t,i,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Uc=class n extends Jt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let M=p*f-s;for(let w=0;w<l;w++){let b=w*d-o;g.push(b,-M,0),_.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let w=M+l*p,b=M+l*(p+1),T=M+1+l*(p+1),C=M+1+l*p;h.push(w,b,C),h.push(b,T,C)}this.setIndex(h),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Bc=class n extends Jt{constructor(e=1,t=.4,i=12,r=48,o=Math.PI*2,s=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:o,thetaStart:s,thetaLength:a},i=Math.floor(i),r=Math.floor(r);let c=[],l=[],u=[],d=[],f=new O,h=new O,g=new O;for(let _=0;_<=i;_++){let m=s+_/i*a;for(let p=0;p<=r;p++){let M=p/r*o;h.x=(e+t*Math.cos(m))*Math.cos(M),h.y=(e+t*Math.cos(m))*Math.sin(M),h.z=t*Math.sin(m),l.push(h.x,h.y,h.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),g.subVectors(h,f).normalize(),u.push(g.x,g.y,g.z),d.push(p/r),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=r;m++){let p=(r+1)*_+m-1,M=(r+1)*(_-1)+m-1,w=(r+1)*(_-1)+m,b=(r+1)*_+m;c.push(p,M,b),c.push(M,w,b)}this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function Lo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mn(n){let e={};for(let t=0;t<n.length;t++){let i=Lo(n[t]);for(let r in i)e[r]=i[r]}return e}function eR(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fv(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var _b={clone:Lo,merge:mn},tR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tR,this.fragmentShader=nR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=eR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Kd=class extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},No=class extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ov,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Qd=class extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ob,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ef=class extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sd(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var zr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],o=t[i-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(i=2,o=a);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=t[--i-1],e>=o)break e}s=i,i=0;break t}break n}for(;i<s;){let a=i+s>>>1;e<t[a]?s=a:i=a+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=i[o+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tf=class extends zr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:av,endingEnd:av}}intervalChanged_(e,t,i){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],c=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case cv:o=e,a=2*t-i;break;case lv:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case cv:s=e,c=2*i-t;break;case lv:s=1,c=i+r[1]-r[0];break;default:s=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,w=(-1-h)*m+(1.5+h)*_+.5*g,b=h*m-h*_;for(let T=0;T!==a;++T)o[T]=p*s[u+T]+M*s[l+T]+w*s[c+T]+b*s[d+T];return o}},nf=class extends zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)o[f]=s[l+f]*d+s[c+f]*u;return o}},rf=class extends zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},of=class extends zr{interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.settings||this.DefaultSettings_,d=u.inTangents,f=u.outTangents;if(!d||!f){let _=(i-t)/(r-t),m=1-_;for(let p=0;p!==a;++p)o[p]=s[l+p]*m+s[c+p]*_;return o}let h=a*2,g=e-1;for(let _=0;_!==a;++_){let m=s[l+_],p=s[c+_],M=g*h+_*2,w=f[M],b=f[M+1],T=e*h+_*2,C=d[T],D=d[T+1],y=(i-t)/(r-t),S,j,I,L,k;for(let G=0;G<8;G++){S=y*y,j=S*y,I=1-y,L=I*I,k=L*I;let H=k*t+3*L*y*w+3*I*S*C+j*r-i;if(Math.abs(H)<1e-10)break;let F=3*L*(w-t)+6*I*y*(C-w)+3*S*(r-C);if(Math.abs(F)<1e-10)break;y=y-H/F,y=Math.max(0,Math.min(1,y))}o[_]=k*m+3*L*y*b+3*I*S*D+j*p}return o}},Bn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sd(t,this.TimeBufferType),this.values=Sd(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sd(e.times,Array),values:Sd(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new of(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case bc:t=this.InterpolantFactoryMethodDiscrete;break;case Ud:t=this.InterpolantFactoryMethodLinear;break;case Td:t=this.InterpolantFactoryMethodSmooth;break;case sv:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Re("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bc;case this.InterpolantFactoryMethodLinear:return Ud;case this.InterpolantFactoryMethodSmooth:return Td;case this.InterpolantFactoryMethodBezier:return sv}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,o=0,s=r-1;for(;o!==r&&i[o]<e;)++o;for(;s!==-1&&i[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=i.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,o=i.length;o===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){De("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(s!==null&&s>c){De("KeyframeTrack: Out of order keys.",this,a,c,s),e=!1;break}s=c}if(r!==void 0&&OD(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){De("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Td,o=e.length-1,s=1;for(let a=1;a<o;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[f+g]||_!==t[h+g]){c=!0;break}}}if(c){if(a!==s){e[s]=e[a];let d=a*i,f=s*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++s}}if(o>0){e[s]=e[o];for(let a=o*i,c=s*i,l=0;l!==i;++l)t[c+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Ud;var Gr=class extends Bn{constructor(e,t,i){super(e,t,i)}};Gr.prototype.ValueTypeName="bool";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=bc;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var sf=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}};sf.prototype.ValueTypeName="color";var af=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}};af.prototype.ValueTypeName="number";var cf=class extends zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Ri.slerpFlat(o,0,s,l-a,s,l,c);return o}},Vc=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new cf(this.times,this.values,this.getValueSize(),e)}};Vc.prototype.ValueTypeName="quaternion";Vc.prototype.InterpolantFactoryMethodSmooth=void 0;var jr=class extends Bn{constructor(e,t,i){super(e,t,i)}};jr.prototype.ValueTypeName="string";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=bc;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;var lf=class extends Bn{constructor(e,t,i,r){super(e,t,i,r)}};lf.prototype.ValueTypeName="vector";var Hc=class extends Zn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var iv=new It,DS=new O,RS=new O,fv=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;DS.setFromMatrixPosition(e.matrixWorld),t.position.copy(DS),RS.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(RS),t.updateMatrixWorld(),iv.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iv,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Hs||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(iv)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bd=new O,Ed=new Ri,Ti=new O,zc=class extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bd,Ed,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bd,Ed,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(bd,Ed,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bd,Ed,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Or=new O,NS=new qe,PS=new qe,sn=class extends zc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ng*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vd*2*Math.atan(Math.tan(Ng*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,t){return this.getViewBounds(e,NS,PS),t.subVectors(PS,NS)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ng*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var hv=class extends fv{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},Ys=class extends Hc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Gc=class extends zc{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var jc=class extends Hc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Us=-90,Bs=1,uf=class extends Zn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new sn(Us,Bs,e,t);r.layers=this.layers,this.add(r);let o=new sn(Us,Bs,e,t);o.layers=this.layers,this.add(o);let s=new sn(Us,Bs,e,t);s.layers=this.layers,this.add(s);let a=new sn(Us,Bs,e,t);a.layers=this.layers,this.add(a);let c=new sn(Us,Bs,e,t);c.layers=this.layers,this.add(c);let l=new sn(Us,Bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,c]=t;for(let l of t)this.remove(l);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},df=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var kv="\\[\\]\\.:\\/",iR=new RegExp("["+kv+"]","g"),Uv="[^"+kv+"]",rR="[^"+kv.replace("\\.","")+"]",oR=/((?:WC+[\/:])*)/.source.replace("WC",Uv),sR=/(WCOD+)?/.source.replace("WCOD",rR),aR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uv),cR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uv),lR=new RegExp("^"+oR+sR+aR+cR+"$"),uR=["material","materials","bones","map"],pv=class{constructor(e,t,i){let r=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(iR,"")}static parseTrackName(t){let i=lR.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},o=r.nodeName&&r.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let s=r.nodeName.substring(o+1);uR.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,o),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let a=0;a<s.length;a++){let c=s[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},o=r(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)t[i++]=r[o]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,o=i.propertyName,s=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[o];if(a===void 0){let u=i.nodeName;De("PropertyBinding: Trying to update property for track: "+u+"."+o+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=pv,n})();Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var A$=new Float32Array(1);var Wc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Re("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var OS=new O,wd,rv,Zs=class extends Zn{constructor(e=new O(0,0,1),t=new O(0,0,0),i=1,r=16776960,o=i*.2,s=o*.2){super(),this.type="ArrowHelper",wd===void 0&&(wd=new Jt,wd.setAttribute("position",new Bt([0,0,0,0,1,0],3)),rv=new Jd(.5,1,5,1),rv.translate(0,-.5,0)),this.position.copy(t),this.line=new Xd(wd,new Oc({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ot(rv,new $s({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,o,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{OS.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(OS,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};function Bv(n,e,t,i){let r=dR(i);switch(t){case Rv:return n*e;case Pv:return n*e/r.components*r.byteLength;case yf:return n*e/r.components*r.byteLength;case Oo:return n*e*2/r.components*r.byteLength;case _f:return n*e*2/r.components*r.byteLength;case Nv:return n*e*3/r.components*r.byteLength;case Yn:return n*e*4/r.components*r.byteLength;case xf:return n*e*4/r.components*r.byteLength;case Yc:case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jc:case Kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sf:case Ef:return Math.max(n,16)*Math.max(e,8)/4;case Mf:case bf:return Math.max(n,8)*Math.max(e,8)/2;case wf:case Tf:case If:case Af:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cf:case Df:case Rf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Of:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case kf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Gf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $f:case qf:case Xf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yf:case Zf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jf:case Kf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dR(n){switch(n){case Cn:case Cv:return{byteLength:1,components:1};case Ks:case Iv:case Oi:return{byteLength:2,components:1};case gf:case vf:return{byteLength:2,components:4};case hi:case mf:case pi:return{byteLength:4,components:1};case Av:case Dv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function zb(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function hR(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let _=d[h];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:o,update:s}}var pR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_R=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ER=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,IR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,DR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,BR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jR="gl_FragColor = linearToOutputTexel( gl_FragColor );",WR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$R=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,s1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,a1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,G1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_N=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,bN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ON=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$N=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:pR,alphahash_pars_fragment:mR,alphamap_fragment:gR,alphamap_pars_fragment:vR,alphatest_fragment:yR,alphatest_pars_fragment:_R,aomap_fragment:xR,aomap_pars_fragment:MR,batching_pars_vertex:SR,batching_vertex:bR,begin_vertex:ER,beginnormal_vertex:wR,bsdfs:TR,iridescence_fragment:CR,bumpmap_pars_fragment:IR,clipping_planes_fragment:AR,clipping_planes_pars_fragment:DR,clipping_planes_pars_vertex:RR,clipping_planes_vertex:NR,color_fragment:PR,color_pars_fragment:OR,color_pars_vertex:LR,color_vertex:FR,common:kR,cube_uv_reflection_fragment:UR,defaultnormal_vertex:BR,displacementmap_pars_vertex:VR,displacementmap_vertex:HR,emissivemap_fragment:zR,emissivemap_pars_fragment:GR,colorspace_fragment:jR,colorspace_pars_fragment:WR,envmap_fragment:$R,envmap_common_pars_fragment:qR,envmap_pars_fragment:XR,envmap_pars_vertex:YR,envmap_physical_pars_fragment:s1,envmap_vertex:ZR,fog_vertex:JR,fog_pars_vertex:KR,fog_fragment:QR,fog_pars_fragment:e1,gradientmap_pars_fragment:t1,lightmap_pars_fragment:n1,lights_lambert_fragment:i1,lights_lambert_pars_fragment:r1,lights_pars_begin:o1,lights_toon_fragment:a1,lights_toon_pars_fragment:c1,lights_phong_fragment:l1,lights_phong_pars_fragment:u1,lights_physical_fragment:d1,lights_physical_pars_fragment:f1,lights_fragment_begin:h1,lights_fragment_maps:p1,lights_fragment_end:m1,logdepthbuf_fragment:g1,logdepthbuf_pars_fragment:v1,logdepthbuf_pars_vertex:y1,logdepthbuf_vertex:_1,map_fragment:x1,map_pars_fragment:M1,map_particle_fragment:S1,map_particle_pars_fragment:b1,metalnessmap_fragment:E1,metalnessmap_pars_fragment:w1,morphinstance_vertex:T1,morphcolor_vertex:C1,morphnormal_vertex:I1,morphtarget_pars_vertex:A1,morphtarget_vertex:D1,normal_fragment_begin:R1,normal_fragment_maps:N1,normal_pars_fragment:P1,normal_pars_vertex:O1,normal_vertex:L1,normalmap_pars_fragment:F1,clearcoat_normal_fragment_begin:k1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:B1,iridescence_pars_fragment:V1,opaque_fragment:H1,packing:z1,premultiplied_alpha_fragment:G1,project_vertex:j1,dithering_fragment:W1,dithering_pars_fragment:$1,roughnessmap_fragment:q1,roughnessmap_pars_fragment:X1,shadowmap_pars_fragment:Y1,shadowmap_pars_vertex:Z1,shadowmap_vertex:J1,shadowmask_pars_fragment:K1,skinbase_vertex:Q1,skinning_pars_vertex:eN,skinning_vertex:tN,skinnormal_vertex:nN,specularmap_fragment:iN,specularmap_pars_fragment:rN,tonemapping_fragment:oN,tonemapping_pars_fragment:sN,transmission_fragment:aN,transmission_pars_fragment:cN,uv_pars_fragment:lN,uv_pars_vertex:uN,uv_vertex:dN,worldpos_vertex:fN,background_vert:hN,background_frag:pN,backgroundCube_vert:mN,backgroundCube_frag:gN,cube_vert:vN,cube_frag:yN,depth_vert:_N,depth_frag:xN,distance_vert:MN,distance_frag:SN,equirect_vert:bN,equirect_frag:EN,linedashed_vert:wN,linedashed_frag:TN,meshbasic_vert:CN,meshbasic_frag:IN,meshlambert_vert:AN,meshlambert_frag:DN,meshmatcap_vert:RN,meshmatcap_frag:NN,meshnormal_vert:PN,meshnormal_frag:ON,meshphong_vert:LN,meshphong_frag:FN,meshphysical_vert:kN,meshphysical_frag:UN,meshtoon_vert:BN,meshtoon_frag:VN,points_vert:HN,points_frag:zN,shadow_vert:GN,shadow_frag:jN,sprite_vert:WN,sprite_frag:$N},ae={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ki={basic:{uniforms:mn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:mn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:mn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:mn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:mn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new et(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:mn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:mn([ae.points,ae.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:mn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:mn([ae.common,ae.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:mn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:mn([ae.sprite,ae.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:mn([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:mn([ae.lights,ae.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ki.physical={uniforms:mn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var th={r:0,b:0,g:0},Fo=new kr,qN=new It;function XN(n,e,t,i,r,o){let s=new et(0),a=r===!0?0:1,c,l,u=null,d=0,f=null;function h(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let b=M.backgroundBlurriness>0;w=e.get(w,b)}return w}function g(M){let w=!1,b=h(M);b===null?m(s,a):b&&b.isColor&&(m(b,1),w=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,w){let b=h(w);b&&(b.isCubeTexture||b.mapping===qc)?(l===void 0&&(l=new Ot(new Xn(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Lo(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Fo.copy(w.backgroundRotation),Fo.x*=-1,Fo.y*=-1,Fo.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fo.y*=-1,Fo.z*=-1),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(qN.makeRotationFromEuler(Fo)),l.material.toneMapped=it.getTransfer(b.colorSpace)!==ft,(u!==b||d!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ot(new Uc(2,2),new Un({name:"BackgroundMaterial",uniforms:Lo(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=it.getTransfer(b.colorSpace)!==ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(th,Fv(n)),t.buffers.color.setClear(th.r,th.g,th.b,w,o)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(M,w=1){s.set(M),a=w,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(s,a)},render:g,addToRenderList:_,dispose:p}}function YN(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),o=r,s=!1;function a(I,L,k,G,B){let H=!1,F=d(I,G,k,L);o!==F&&(o=F,l(o.object)),H=h(I,G,k,B),H&&g(I,G,k,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,b(I,L,k,G),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function d(I,L,k,G){let B=G.wireframe===!0,H=i[L.id];H===void 0&&(H={},i[L.id]=H);let F=I.isInstancedMesh===!0?I.id:0,Q=H[F];Q===void 0&&(Q={},H[F]=Q);let Z=Q[k.id];Z===void 0&&(Z={},Q[k.id]=Z);let ue=Z[B];return ue===void 0&&(ue=f(c()),Z[B]=ue),ue}function f(I){let L=[],k=[],G=[];for(let B=0;B<t;B++)L[B]=0,k[B]=0,G[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:G,object:I,attributes:{},index:null}}function h(I,L,k,G){let B=o.attributes,H=L.attributes,F=0,Q=k.getAttributes();for(let Z in Q)if(Q[Z].location>=0){let ge=B[Z],fe=H[Z];if(fe===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor)),ge===void 0||ge.attribute!==fe||fe&&ge.data!==fe.data)return!0;F++}return o.attributesNum!==F||o.index!==G}function g(I,L,k,G){let B={},H=L.attributes,F=0,Q=k.getAttributes();for(let Z in Q)if(Q[Z].location>=0){let ge=H[Z];ge===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor));let fe={};fe.attribute=ge,ge&&ge.data&&(fe.data=ge.data),B[Z]=fe,F++}o.attributes=B,o.attributesNum=F,o.index=G}function _(){let I=o.newAttributes;for(let L=0,k=I.length;L<k;L++)I[L]=0}function m(I){p(I,0)}function p(I,L){let k=o.newAttributes,G=o.enabledAttributes,B=o.attributeDivisors;k[I]=1,G[I]===0&&(n.enableVertexAttribArray(I),G[I]=1),B[I]!==L&&(n.vertexAttribDivisor(I,L),B[I]=L)}function M(){let I=o.newAttributes,L=o.enabledAttributes;for(let k=0,G=L.length;k<G;k++)L[k]!==I[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function w(I,L,k,G,B,H,F){F===!0?n.vertexAttribIPointer(I,L,k,B,H):n.vertexAttribPointer(I,L,k,G,B,H)}function b(I,L,k,G){_();let B=G.attributes,H=k.getAttributes(),F=L.defaultAttributeValues;for(let Q in H){let Z=H[Q];if(Z.location>=0){let ue=B[Q];if(ue===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),ue!==void 0){let ge=ue.normalized,fe=ue.itemSize,$e=e.get(ue);if($e===void 0)continue;let At=$e.buffer,Ct=$e.type,X=$e.bytesPerElement,ne=Ct===n.INT||Ct===n.UNSIGNED_INT||ue.gpuType===mf;if(ue.isInterleavedBufferAttribute){let se=ue.data,We=se.stride,Ie=ue.offset;if(se.isInstancedInterleavedBuffer){for(let Le=0;Le<Z.locationSize;Le++)p(Z.location+Le,se.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Le=0;Le<Z.locationSize;Le++)m(Z.location+Le);n.bindBuffer(n.ARRAY_BUFFER,At);for(let Le=0;Le<Z.locationSize;Le++)w(Z.location+Le,fe/Z.locationSize,Ct,ge,We*X,(Ie+fe/Z.locationSize*Le)*X,ne)}else{if(ue.isInstancedBufferAttribute){for(let se=0;se<Z.locationSize;se++)p(Z.location+se,ue.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let se=0;se<Z.locationSize;se++)m(Z.location+se);n.bindBuffer(n.ARRAY_BUFFER,At);for(let se=0;se<Z.locationSize;se++)w(Z.location+se,fe/Z.locationSize,Ct,ge,fe*X,fe/Z.locationSize*se*X,ne)}}else if(F!==void 0){let ge=F[Q];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(Z.location,ge);break;case 3:n.vertexAttrib3fv(Z.location,ge);break;case 4:n.vertexAttrib4fv(Z.location,ge);break;default:n.vertexAttrib1fv(Z.location,ge)}}}}M()}function T(){S();for(let I in i){let L=i[I];for(let k in L){let G=L[k];for(let B in G){let H=G[B];for(let F in H)u(H[F].object),delete H[F];delete G[B]}}delete i[I]}}function C(I){if(i[I.id]===void 0)return;let L=i[I.id];for(let k in L){let G=L[k];for(let B in G){let H=G[B];for(let F in H)u(H[F].object),delete H[F];delete G[B]}}delete i[I.id]}function D(I){for(let L in i){let k=i[L];for(let G in k){let B=k[G];if(B[I.id]===void 0)continue;let H=B[I.id];for(let F in H)u(H[F].object),delete H[F];delete B[I.id]}}}function y(I){for(let L in i){let k=i[L],G=I.isInstancedMesh===!0?I.id:0,B=k[G];if(B!==void 0){for(let H in B){let F=B[H];for(let Q in F)u(F[Q].object),delete F[Q];delete B[H]}delete k[G],Object.keys(k).length===0&&delete i[L]}}}function S(){j(),s=!0,o!==r&&(o=r,l(o.object))}function j(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:j,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfObject:y,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function ZN(n,e,t){let i;function r(l){i=l}function o(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function s(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)s(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function JN(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(D){return!(D!==Yn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let y=D===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Cn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==pi&&!y)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Re("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:b,maxSamples:T,samples:C}}function KN(n){let e=this,t=null,i=0,r=!1,o=!1,s=new Ci,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||o&&!m)o?u(null):l();else{let M=o?0:i,w=M*4,b=p.clippingState||null;c.value=b,b=u(g,f,w,h);for(let T=0;T!==w;++T)b[T]=t[T];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=h+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=h;w!==_;++w,b+=4)s.copy(d[w]).applyMatrix4(M,a),s.normal.toArray(m,b),m[b+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Xr=4,xb=[.125,.215,.35,.446,.526,.582],Uo=20,QN=256,Qc=new Gc,Mb=new et,Vv=null,Hv=0,zv=0,Gv=!1,eP=new O,ih=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){let{size:s=256,position:a=eP}=o;Vv=this._renderer.getRenderTarget(),Hv=this._renderer.getActiveCubeFace(),zv=this._renderer.getActiveMipmapLevel(),Gv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vv,Hv,zv),this._renderer.xr.enabled=Gv,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vv=this._renderer.getRenderTarget(),Hv=this._renderer.getActiveCubeFace(),zv=this._renderer.getActiveMipmapLevel(),Gv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Oi,format:Yn,colorSpace:Ro,depthBuffer:!1},r=Sb(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sb(e,t,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tP(o)),this._blurMaterial=iP(o,e,t),this._ggxMaterial=nP(o,e,t)}return r}_compileMaterial(e){let t=new Ot(new Jt,e);this._renderer.compile(t,Qc)}_sceneToCubeUV(e,t,i,r,o){let c=new sn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Mb),d.toneMapping=fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new Xn,new $s({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Mb),p=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(c.up.set(0,l[w],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[w],o.y,o.z)):b===1?(c.up.set(0,0,l[w]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[w],o.z)):(c.up.set(0,l[w],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[w]));let T=this._cubeSize;ea(r,b*T,w>2?T:0,T,T),d.setRenderTarget(r),p&&d.render(_,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Wr||e.mapping===Po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eb()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bb());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let c=this._cubeSize;ea(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,Qc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;let c=s.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=0+l*1.25,h=d*f,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Xr?i-g+Xr:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,ea(o,m,p,3*_,2*_),r.setRenderTarget(o),r.render(a,Qc),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=g-i,ea(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(a,Qc)}_blur(e,t,i,r,o){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[r];d.material=l;let f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*Uo-1),_=o/g,m=isFinite(o)?1+Math.floor(u*_):Uo;m>Uo&&Re(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Uo}`);let p=[],M=0;for(let D=0;D<Uo;++D){let y=D/_,S=Math.exp(-y*y/2);p.push(S),D===0?M+=S:D<m&&(M+=2*S)}for(let D=0;D<p.length;D++)p[D]=p[D]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;let b=this._sizeLods[r],T=3*b*(r>w-Xr?r-w+Xr:0),C=4*(this._cubeSize-b);ea(t,T,C,3*b,2*b),c.setRenderTarget(t),c.render(d,Qc)}};function tP(n){let e=[],t=[],i=[],r=n,o=n-Xr+1+xb.length;for(let s=0;s<o;s++){let a=Math.pow(2,r);e.push(a);let c=1/a;s>n-Xr?c=xb[s-n+Xr-1]:s===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*h),w=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let C=0;C<h;C++){let D=C%3*2/3-1,y=C>2?0:-1,S=[D,y,0,D+2/3,y,0,D+2/3,y+1,0,D,y,0,D+2/3,y+1,0,D,y+1,0];M.set(S,_*g*C),w.set(f,m*g*C);let j=[C,C,C,C,C,C];b.set(j,p*g*C)}let T=new Jt;T.setAttribute("position",new pn(M,_)),T.setAttribute("uv",new pn(w,m)),T.setAttribute("faceIndex",new pn(b,p)),i.push(new Ot(T,null)),r>Xr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Sb(n,e,t){let i=new kn(n,e,t);return i.texture.mapping=qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function nP(n,e,t){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function iP(n,e,t){let i=new Float32Array(Uo),r=new O(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Uo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function bb(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Eb(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var rh=class extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Fc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xn(5,5,5),o=new Un({name:"CubemapFromEquirect",uniforms:Lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Pi});o.uniforms.tEquirect.value=t;let s=new Ot(r,o),a=t.minFilter;return t.minFilter===$r&&(t.minFilter=an),new uf(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}};function rP(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?s(f):o(f)}function o(f){if(f&&f.isTexture){let h=f.mapping;if(h===ff||h===hf)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let _=new rh(g.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",l),a(_.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let h=f.mapping,g=h===ff||h===hf,_=h===Wr||h===Po;if(g||_){let m=t.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new ih(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let M=f.image;return g&&M&&M.height>0||_&&M&&c(M)?(i===null&&(i=new ih(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===ff?f.mapping=Wr:h===hf&&(f.mapping=Po),f}function c(f){let h=0,g=6;for(let _=0;_<g;_++)f[_]!==void 0&&h++;return h===g}function l(f){let h=f.target;h.removeEventListener("dispose",l);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function oP(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Cc("WebGLRenderer: "+i+" extension not supported."),r}}}function sP(n,e,t,i){let r={},o=new WeakMap;function s(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete r[f.id];let h=o.get(f);h&&(e.remove(h),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(h!==null){let M=h.array;_=h.version;for(let w=0,b=M.length;w<b;w+=3){let T=M[w+0],C=M[w+1],D=M[w+2];f.push(T,C,C,D,D,T)}}else{let M=g.array;_=g.version;for(let w=0,b=M.length/3-1;w<b;w+=3){let T=w+0,C=w+1,D=w+2;f.push(T,C,C,D,D,T)}}let m=new(g.count>=65535?Nc:Rc)(f,1);m.version=_;let p=o.get(d);p&&e.remove(p),o.set(d,m)}function u(d){let f=o.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function aP(n,e,t){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function c(f,h){n.drawElements(i,h,o,f*s),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,o,f*s,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/s,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,o,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M]*_[M];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function cP(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:De("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lP(n,e,t){let i=new WeakMap,r=new Dt;function o(s,a,c){let l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let j=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",j)};var h=j;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let T=a.attributes.position.count*b,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let D=new Float32Array(T*C*4*d),y=new Ic(D,T,C,d);y.type=pi,y.needsUpdate=!0;let S=b*4;for(let I=0;I<d;I++){let L=p[I],k=M[I],G=w[I],B=T*C*4*I;for(let H=0;H<L.count;H++){let F=H*S;g===!0&&(r.fromBufferAttribute(L,H),D[B+F+0]=r.x,D[B+F+1]=r.y,D[B+F+2]=r.z,D[B+F+3]=0),_===!0&&(r.fromBufferAttribute(k,H),D[B+F+4]=r.x,D[B+F+5]=r.y,D[B+F+6]=r.z,D[B+F+7]=0),m===!0&&(r.fromBufferAttribute(G,H),D[B+F+8]=r.x,D[B+F+9]=r.y,D[B+F+10]=r.z,D[B+F+11]=G.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new qe(T,C)},i.set(a,f),a.addEventListener("dispose",j)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function uP(n,e,t,i,r){let o=new WeakMap;function s(l){let u=r.render.frame,d=l.geometry,f=e.get(l,d);if(o.get(f)!==u&&(e.update(f),o.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),o.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;o.get(h)!==u&&(h.update(),o.set(h,u))}return f}function a(){o=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}var dP={[xv]:"LINEAR_TONE_MAPPING",[Mv]:"REINHARD_TONE_MAPPING",[Sv]:"CINEON_TONE_MAPPING",[bv]:"ACES_FILMIC_TONE_MAPPING",[wv]:"AGX_TONE_MAPPING",[Tv]:"NEUTRAL_TONE_MAPPING",[Ev]:"CUSTOM_TONE_MAPPING"};function fP(n,e,t,i,r){let o=new kn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),s=new kn(e,t,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),a=new Jt;a.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Bt([0,2,0,0,2,0],2));let c=new Kd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Ot(a,c),u=new Gc(-1,1,1,-1,0,1),d=null,f=null,h=!1,g,_=null,m=[],p=!1;this.setSize=function(M,w){o.setSize(M,w),s.setSize(M,w);for(let b=0;b<m.length;b++){let T=m[b];T.setSize&&T.setSize(M,w)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;let w=o.width,b=o.height;for(let T=0;T<m.length;T++){let C=m[T];C.setSize&&C.setSize(w,b)}},this.begin=function(M,w){if(h||M.toneMapping===fi&&m.length===0)return!1;if(_=w,w!==null){let b=w.width,T=w.height;(o.width!==b||o.height!==T)&&this.setSize(b,T)}return p===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=fi,!0},this.hasRenderPass=function(){return p},this.end=function(M,w){M.toneMapping=g,h=!0;let b=o,T=s;for(let C=0;C<m.length;C++){let D=m[C];if(D.enabled!==!1&&(D.render(M,T,b,w),D.needsSwap!==!1)){let y=b;b=T,T=y}}if(d!==M.outputColorSpace||f!==M.toneMapping){d=M.outputColorSpace,f=M.toneMapping,c.defines={},it.getTransfer(d)===ft&&(c.defines.SRGB_TRANSFER="");let C=dP[f];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(_),M.render(l,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s.dispose(),a.dispose(),c.dispose()}}var Gb=new Li,$v=new Hr(1,1),jb=new Ic,Wb=new Gd,$b=new Fc,wb=[],Tb=[],Cb=new Float32Array(16),Ib=new Float32Array(9),Ab=new Float32Array(4);function na(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,o=wb[r];if(o===void 0&&(o=new Float32Array(r),wb[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ah(n,e){let t=Tb[e];t===void 0&&(t=new Int32Array(e),Tb[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function mP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function gP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function vP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;Ab.set(i),n.uniformMatrix2fv(this.addr,!1,Ab),Gt(t,i)}}function yP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;Ib.set(i),n.uniformMatrix3fv(this.addr,!1,Ib),Gt(t,i)}}function _P(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;Cb.set(i),n.uniformMatrix4fv(this.addr,!1,Cb),Gt(t,i)}}function xP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function MP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function SP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function bP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function EP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function TP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function CP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function IP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?($v.compareFunction=t.isReversedDepthBuffer()?eh:Qf,o=$v):o=Gb,t.setTexture2D(e||o,r)}function AP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wb,r)}function DP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||$b,r)}function RP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||jb,r)}function NP(n){switch(n){case 5126:return hP;case 35664:return pP;case 35665:return mP;case 35666:return gP;case 35674:return vP;case 35675:return yP;case 35676:return _P;case 5124:case 35670:return xP;case 35667:case 35671:return MP;case 35668:case 35672:return SP;case 35669:case 35673:return bP;case 5125:return EP;case 36294:return wP;case 36295:return TP;case 36296:return CP;case 35678:case 36198:case 36298:case 36306:case 35682:return IP;case 35679:case 36299:case 36307:return AP;case 35680:case 36300:case 36308:case 36293:return DP;case 36289:case 36303:case 36311:case 36292:return RP}}function PP(n,e){n.uniform1fv(this.addr,e)}function OP(n,e){let t=na(e,this.size,2);n.uniform2fv(this.addr,t)}function LP(n,e){let t=na(e,this.size,3);n.uniform3fv(this.addr,t)}function FP(n,e){let t=na(e,this.size,4);n.uniform4fv(this.addr,t)}function kP(n,e){let t=na(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UP(n,e){let t=na(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function BP(n,e){let t=na(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VP(n,e){n.uniform1iv(this.addr,e)}function HP(n,e){n.uniform2iv(this.addr,e)}function zP(n,e){n.uniform3iv(this.addr,e)}function GP(n,e){n.uniform4iv(this.addr,e)}function jP(n,e){n.uniform1uiv(this.addr,e)}function WP(n,e){n.uniform2uiv(this.addr,e)}function $P(n,e){n.uniform3uiv(this.addr,e)}function qP(n,e){n.uniform4uiv(this.addr,e)}function XP(n,e,t){let i=this.cache,r=e.length,o=ah(t,r);zt(i,o)||(n.uniform1iv(this.addr,o),Gt(i,o));let s;this.type===n.SAMPLER_2D_SHADOW?s=$v:s=Gb;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function YP(n,e,t){let i=this.cache,r=e.length,o=ah(t,r);zt(i,o)||(n.uniform1iv(this.addr,o),Gt(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Wb,o[s])}function ZP(n,e,t){let i=this.cache,r=e.length,o=ah(t,r);zt(i,o)||(n.uniform1iv(this.addr,o),Gt(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||$b,o[s])}function JP(n,e,t){let i=this.cache,r=e.length,o=ah(t,r);zt(i,o)||(n.uniform1iv(this.addr,o),Gt(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||jb,o[s])}function KP(n){switch(n){case 5126:return PP;case 35664:return OP;case 35665:return LP;case 35666:return FP;case 35674:return kP;case 35675:return UP;case 35676:return BP;case 5124:case 35670:return VP;case 35667:case 35671:return HP;case 35668:case 35672:return zP;case 35669:case 35673:return GP;case 5125:return jP;case 36294:return WP;case 36295:return $P;case 36296:return qP;case 35678:case 36198:case 36298:case 36306:case 35682:return XP;case 35679:case 36299:case 36307:return YP;case 35680:case 36300:case 36308:case 36293:return ZP;case 36289:case 36303:case 36311:case 36292:return JP}}var qv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=NP(t.type)}},Xv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KP(t.type)}},Yv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],i)}}},jv=/(\w+)(\])?(\[|\.)?/g;function Db(n,e){n.seq.push(e),n.map[e.id]=e}function QP(n,e,t){let i=n.name,r=i.length;for(jv.lastIndex=0;;){let o=jv.exec(i),s=jv.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){Db(t,l===void 0?new qv(a,n,e):new Xv(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Yv(a),Db(t,d)),t=d}}}var ta=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);QP(a,c,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,i,r){let o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function Rb(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var eO=37297,tO=0;function nO(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}var Nb=new je;function iO(n){it._getMatrix(Nb,it.workingColorSpace,n);let e=`mat3( ${Nb.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Ec:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Pb(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+nO(n.getShaderSource(e),a)}else return o}function rO(n,e){let t=iO(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var oO={[xv]:"Linear",[Mv]:"Reinhard",[Sv]:"Cineon",[bv]:"ACESFilmic",[wv]:"AgX",[Tv]:"Neutral",[Ev]:"Custom"};function sO(n,e){let t=oO[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nh=new O;function aO(){it.getLuminanceCoefficients(nh);let n=nh.x.toFixed(4),e=nh.y.toFixed(4),t=nh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cO(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function lO(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uO(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r),s=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function tl(n){return n!==""}function Ob(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lb(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dO=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zv(n){return n.replace(dO,hO)}var fO=new Map;function hO(n,e){let t=Xe[e];if(t===void 0){let i=fO.get(e);if(i!==void 0)t=Xe[i],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zv(t)}var pO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fb(n){return n.replace(pO,mO)}function mO(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function kb(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var gO={[$c]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function vO(n){return gO[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yO={[Wr]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE",[qc]:"ENVMAP_TYPE_CUBE_UV"};function _O(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":yO[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var xO={[Po]:"ENVMAP_MODE_REFRACTION"};function MO(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":xO[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var SO={[_v]:"ENVMAP_BLENDING_MULTIPLY",[nb]:"ENVMAP_BLENDING_MIX",[ib]:"ENVMAP_BLENDING_ADD"};function bO(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":SO[n.combine]||"ENVMAP_BLENDING_NONE"}function EO(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function wO(n,e,t,i){let r=n.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,c=vO(t),l=_O(t),u=MO(t),d=bO(t),f=EO(t),h=cO(t),g=lO(o),_=r.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tl).join(`
`),p.length>0&&(p+=`
`)):(m=[kb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),p=[kb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==fi?sO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,rO("linearToOutputTexel",t.outputColorSpace),aO(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tl).join(`
`)),s=Zv(s),s=Ob(s,t),s=Lb(s,t),a=Zv(a),a=Ob(a,t),a=Lb(a,t),s=Fb(s),a=Fb(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+s,b=M+p+a,T=Rb(r,r.VERTEX_SHADER,w),C=Rb(r,r.FRAGMENT_SHADER,b);r.attachShader(_,T),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(I){if(n.debug.checkShaderErrors){let L=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(T)||"",G=r.getShaderInfoLog(C)||"",B=L.trim(),H=k.trim(),F=G.trim(),Q=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,T,C);else{let ue=Pb(r,T,"vertex"),ge=Pb(r,C,"fragment");De("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+ue+`
`+ge)}else B!==""?Re("WebGLProgram: Program Info Log:",B):(H===""||F==="")&&(Z=!1);Z&&(I.diagnostics={runnable:Q,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:F,prefix:p}})}r.deleteShader(T),r.deleteShader(C),y=new ta(r,_),S=uO(r,_)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=r.getProgramParameter(_,eO)),j},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tO++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=C,this}var TO=0,Jv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Kv(e),t.set(e,i)),i}},Kv=class{constructor(e){this.id=TO++,this.code=e,this.usedTimes=0}};function CO(n,e,t,i,r,o){let s=new Ac,a=new Jv,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer,f=i.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,S,j,I,L){let k=I.fog,G=L.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,F=e.get(y.envMap||B,H),Q=F&&F.mapping===qc?F.image.height:null,Z=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Re("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ge=ue!==void 0?ue.length:0,fe=0;G.morphAttributes.position!==void 0&&(fe=1),G.morphAttributes.normal!==void 0&&(fe=2),G.morphAttributes.color!==void 0&&(fe=3);let $e,At,Ct,X;if(Z){let pt=ki[Z];$e=pt.vertexShader,At=pt.fragmentShader}else $e=y.vertexShader,At=y.fragmentShader,a.update(y),Ct=a.getVertexShaderID(y),X=a.getFragmentShaderID(y);let ne=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),We=L.isInstancedMesh===!0,Ie=L.isBatchedMesh===!0,Le=!!y.map,jt=!!y.matcap,rt=!!F,ht=!!y.aoMap,Mt=!!y.lightMap,Ye=!!y.bumpMap,Lt=!!y.normalMap,A=!!y.displacementMap,kt=!!y.emissiveMap,ct=!!y.metalnessMap,Et=!!y.roughnessMap,Se=y.anisotropy>0,E=y.clearcoat>0,v=y.dispersion>0,N=y.iridescence>0,q=y.sheen>0,Y=y.transmission>0,$=Se&&!!y.anisotropyMap,ve=E&&!!y.clearcoatMap,re=E&&!!y.clearcoatNormalMap,Te=E&&!!y.clearcoatRoughnessMap,Ne=N&&!!y.iridescenceMap,J=N&&!!y.iridescenceThicknessMap,ee=q&&!!y.sheenColorMap,ye=q&&!!y.sheenRoughnessMap,xe=!!y.specularMap,de=!!y.specularColorMap,Ze=!!y.specularIntensityMap,R=Y&&!!y.transmissionMap,oe=Y&&!!y.thicknessMap,te=!!y.gradientMap,pe=!!y.alphaMap,K=y.alphaTest>0,W=!!y.alphaHash,_e=!!y.extensions,ke=fi;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ke=n.toneMapping);let wt={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:$e,fragmentShader:At,defines:y.defines,customVertexShaderID:Ct,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&L._colorsTexture!==null,instancing:We,instancingColor:We&&L.instanceColor!==null,instancingMorph:We&&L.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ro,alphaToCoverage:!!y.alphaToCoverage,map:Le,matcap:jt,envMap:rt,envMapMode:rt&&F.mapping,envMapCubeUVHeight:Q,aoMap:ht,lightMap:Mt,bumpMap:Ye,normalMap:Lt,displacementMap:A,emissiveMap:kt,normalMapObjectSpace:Lt&&y.normalMapType===sb,normalMapTangentSpace:Lt&&y.normalMapType===Ov,metalnessMap:ct,roughnessMap:Et,anisotropy:Se,anisotropyMap:$,clearcoat:E,clearcoatMap:ve,clearcoatNormalMap:re,clearcoatRoughnessMap:Te,dispersion:v,iridescence:N,iridescenceMap:Ne,iridescenceThicknessMap:J,sheen:q,sheenColorMap:ee,sheenRoughnessMap:ye,specularMap:xe,specularColorMap:de,specularIntensityMap:Ze,transmission:Y,transmissionMap:R,thicknessMap:oe,gradientMap:te,opaque:y.transparent===!1&&y.blending===Ao&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:K,alphaHash:W,combine:y.combine,mapUv:Le&&g(y.map.channel),aoMapUv:ht&&g(y.aoMap.channel),lightMapUv:Mt&&g(y.lightMap.channel),bumpMapUv:Ye&&g(y.bumpMap.channel),normalMapUv:Lt&&g(y.normalMap.channel),displacementMapUv:A&&g(y.displacementMap.channel),emissiveMapUv:kt&&g(y.emissiveMap.channel),metalnessMapUv:ct&&g(y.metalnessMap.channel),roughnessMapUv:Et&&g(y.roughnessMap.channel),anisotropyMapUv:$&&g(y.anisotropyMap.channel),clearcoatMapUv:ve&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(y.sheenRoughnessMap.channel),specularMapUv:xe&&g(y.specularMap.channel),specularColorMapUv:de&&g(y.specularColorMap.channel),specularIntensityMapUv:Ze&&g(y.specularIntensityMap.channel),transmissionMapUv:R&&g(y.transmissionMap.channel),thicknessMapUv:oe&&g(y.thicknessMap.channel),alphaMapUv:pe&&g(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Lt||Se),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(Le||pe),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||G.attributes.normal===void 0&&Lt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:se,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Le&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===ft,decodeVideoTextureEmissive:kt&&y.emissiveMap.isVideoTexture===!0&&it.getTransfer(y.emissiveMap.colorSpace)===ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ni,flipSided:y.side===En,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_e&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&y.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function m(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let j in y.defines)S.push(j),S.push(y.defines[j]);return y.isRawShaderMaterial===!1&&(p(S,y),M(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function p(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),y.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),y.push(s.mask)}function w(y){let S=h[y.type],j;if(S){let I=ki[S];j=_b.clone(I.uniforms)}else j=y.uniforms;return j}function b(y,S){let j=u.get(S);return j!==void 0?++j.usedTimes:(j=new wO(n,S,y,r),l.push(j),u.set(S,j)),j}function T(y){if(--y.usedTimes===0){let S=l.indexOf(y);l[S]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function C(y){a.remove(y)}function D(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:b,releaseProgram:T,releaseShaderCache:C,programs:l,dispose:D}}function IO(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,c){n.get(s)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function AO(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ub(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bb(){let n=[],e=0,t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,_,m,p){let M=n[e];return M===void 0?(M={id:f.id,object:f,geometry:h,material:g,materialVariant:s(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:p},n[e]=M):(M.id=f.id,M.object=f,M.geometry=h,M.material=g,M.materialVariant=s(f),M.groupOrder=_,M.renderOrder=f.renderOrder,M.z=m,M.group=p),e++,M}function c(f,h,g,_,m,p){let M=a(f,h,g,_,m,p);g.transmission>0?i.push(M):g.transparent===!0?r.push(M):t.push(M)}function l(f,h,g,_,m,p){let M=a(f,h,g,_,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?r.unshift(M):t.unshift(M)}function u(f,h){t.length>1&&t.sort(f||AO),i.length>1&&i.sort(h||Ub),r.length>1&&r.sort(h||Ub)}function d(){for(let f=e,h=n.length;f<h;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:c,unshift:l,finish:d,sort:u}}function DO(){let n=new WeakMap;function e(i,r){let o=n.get(i),s;return o===void 0?(s=new Bb,n.set(i,[s])):r>=o.length?(s=new Bb,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function RO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new et};break;case"SpotLight":t={position:new O,direction:new O,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function NO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var PO=0;function OO(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LO(n){let e=new RO,t=NO(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let r=new O,o=new It,s=new It;function a(l){let u=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,M=0,w=0,b=0,T=0,C=0,D=0;l.sort(OO);for(let S=0,j=l.length;S<j;S++){let I=l[S],L=I.color,k=I.intensity,G=I.distance,B=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Oo?B=I.shadow.map.texture:B=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=L.r*k,d+=L.g*k,f+=L.b*k;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],k);D++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let F=I.shadow,Q=t.get(I);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,i.directionalShadow[h]=Q,i.directionalShadowMap[h]=B,i.directionalShadowMatrix[h]=I.shadow.matrix,M++}i.directional[h]=H,h++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(L).multiplyScalar(k),H.distance=G,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[_]=H;let F=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,F.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[_]=F.matrix,I.castShadow){let Q=t.get(I);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=B,b++}_++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(L).multiplyScalar(k),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=H,m++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let F=I.shadow,Q=t.get(I);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,Q.shadowCameraNear=F.camera.near,Q.shadowCameraFar=F.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=H,g++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(k),H.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let y=i.hash;(y.directionalLength!==h||y.pointLength!==g||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==M||y.numPointShadows!==w||y.numSpotShadows!==b||y.numSpotMaps!==T||y.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,y.directionalLength=h,y.pointLength=g,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=M,y.numPointShadows=w,y.numSpotShadows=b,y.numSpotMaps=T,y.numLightProbes=D,i.version=PO++)}function c(l,u){let d=0,f=0,h=0,g=0,_=0,m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let w=l[p];if(w.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(w.isSpotLight){let b=i.spot[h];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(w.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),s.identity(),o.copy(w.matrixWorld),o.premultiply(m),s.extractRotation(o),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),g++}else if(w.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let b=i.hemi[_];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Vb(n){let e=new LO(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function o(u){t.push(u)}function s(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function FO(n){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new Vb(n),e.set(r,[a])):o>=s.length?(a=new Vb(n),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var kO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BO=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],VO=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Hb=new It,el=new O,Wv=new O;function HO(n,e,t){let i=new qs,r=new qe,o=new qe,s=new Dt,a=new Qd,c=new ef,l={},u=t.maxTextureSize,d={[ar]:En,[En]:ar,[Ni]:Ni},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:kO,fragmentShader:UO}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Jt;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ot(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let p=this.type;this.render=function(C,D,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===kS&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$c);let S=n.getRenderTarget(),j=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Pi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=p!==this.type;k&&D.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(B=>B.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,B=C.length;G<B;G++){let H=C[G],F=H.shadow;if(F===void 0){Re("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let Q=F.getFrameExtents();r.multiply(Q),o.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/Q.x),r.x=o.x*Q.x,F.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/Q.y),r.y=o.y*Q.y,F.mapSize.y=o.y));let Z=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Z,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Js){if(H.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new kn(r.x,r.y,{format:Oo,type:Oi,minFilter:an,magFilter:an,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new Hr(r.x,r.y,pi),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=Di,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Zt,F.map.depthTexture.magFilter=Zt}else H.isPointLight?(F.map=new rh(r.x),F.map.depthTexture=new Yd(r.x,hi)):(F.map=new kn(r.x,r.y),F.map.depthTexture=new Hr(r.x,r.y,hi)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=Di,this.type===$c?(F.map.depthTexture.compareFunction=Z?eh:Qf,F.map.depthTexture.minFilter=an,F.map.depthTexture.magFilter=an):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Zt,F.map.depthTexture.magFilter=Zt);F.camera.updateProjectionMatrix()}let ue=F.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<ue;ge++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(F.map),n.clear());let fe=F.getViewport(ge);s.set(o.x*fe.x,o.y*fe.y,o.x*fe.z,o.y*fe.w),L.viewport(s)}if(H.isPointLight){let fe=F.camera,$e=F.matrix,At=H.distance||fe.far;At!==fe.far&&(fe.far=At,fe.updateProjectionMatrix()),el.setFromMatrixPosition(H.matrixWorld),fe.position.copy(el),Wv.copy(fe.position),Wv.add(BO[ge]),fe.up.copy(VO[ge]),fe.lookAt(Wv),fe.updateMatrixWorld(),$e.makeTranslation(-el.x,-el.y,-el.z),Hb.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Hb,fe.coordinateSystem,fe.reversedDepth)}else F.updateMatrices(H);i=F.getFrustum(),b(D,y,F.camera,H,this.type)}F.isPointLightShadow!==!0&&this.type===Js&&M(F,y),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,j,I)};function M(C,D){let y=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new kn(r.x,r.y,{format:Oo,type:Oi})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,y,f,_,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,y,h,_,null)}function w(C,D,y,S){let j=null,I=y.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)j=I;else if(j=y.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let L=j.uuid,k=D.uuid,G=l[L];G===void 0&&(G={},l[L]=G);let B=G[k];B===void 0&&(B=j.clone(),G[k]=B,D.addEventListener("dispose",T)),j=B}if(j.visible=D.visible,j.wireframe=D.wireframe,S===Js?j.side=D.shadowSide!==null?D.shadowSide:D.side:j.side=D.shadowSide!==null?D.shadowSide:d[D.side],j.alphaMap=D.alphaMap,j.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,j.map=D.map,j.clipShadows=D.clipShadows,j.clippingPlanes=D.clippingPlanes,j.clipIntersection=D.clipIntersection,j.displacementMap=D.displacementMap,j.displacementScale=D.displacementScale,j.displacementBias=D.displacementBias,j.wireframeLinewidth=D.wireframeLinewidth,j.linewidth=D.linewidth,y.isPointLight===!0&&j.isMeshDistanceMaterial===!0){let L=n.properties.get(j);L.light=y}return j}function b(C,D,y,S,j){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&j===Js)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,C.matrixWorld);let k=e.update(C),G=C.material;if(Array.isArray(G)){let B=k.groups;for(let H=0,F=B.length;H<F;H++){let Q=B[H],Z=G[Q.materialIndex];if(Z&&Z.visible){let ue=w(C,Z,S,j);C.onBeforeShadow(n,C,D,y,k,ue,Q),n.renderBufferDirect(y,null,k,ue,C,Q),C.onAfterShadow(n,C,D,y,k,ue,Q)}}}else if(G.visible){let B=w(C,G,S,j);C.onBeforeShadow(n,C,D,y,k,B,null),n.renderBufferDirect(y,null,k,B,C,null),C.onAfterShadow(n,C,D,y,k,B,null)}}let L=C.children;for(let k=0,G=L.length;k<G;k++)b(L[k],D,y,S,j)}function T(C){C.target.removeEventListener("dispose",T);for(let y in l){let S=l[y],j=C.target.uuid;j in S&&(S[j].dispose(),delete S[j])}}}function zO(n,e){function t(){let R=!1,oe=new Dt,te=null,pe=new Dt(0,0,0,0);return{setMask:function(K){te!==K&&!R&&(n.colorMask(K,K,K,K),te=K)},setLocked:function(K){R=K},setClear:function(K,W,_e,ke,wt){wt===!0&&(K*=ke,W*=ke,_e*=ke),oe.set(K,W,_e,ke),pe.equals(oe)===!1&&(n.clearColor(K,W,_e,ke),pe.copy(oe))},reset:function(){R=!1,te=null,pe.set(-1,0,0,0)}}}function i(){let R=!1,oe=!1,te=null,pe=null,K=null;return{setReversed:function(W){if(oe!==W){let _e=e.get("EXT_clip_control");W?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),oe=W;let ke=K;K=null,this.setClear(ke)}},getReversed:function(){return oe},setTest:function(W){W?ne(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(W){te!==W&&!R&&(n.depthMask(W),te=W)},setFunc:function(W){if(oe&&(W=gb[W]),pe!==W){switch(W){case Ad:n.depthFunc(n.NEVER);break;case Dd:n.depthFunc(n.ALWAYS);break;case Rd:n.depthFunc(n.LESS);break;case Do:n.depthFunc(n.LEQUAL);break;case Nd:n.depthFunc(n.EQUAL);break;case Pd:n.depthFunc(n.GEQUAL);break;case Od:n.depthFunc(n.GREATER);break;case Ld:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=W}},setLocked:function(W){R=W},setClear:function(W){K!==W&&(K=W,oe&&(W=1-W),n.clearDepth(W))},reset:function(){R=!1,te=null,pe=null,K=null,oe=!1}}}function r(){let R=!1,oe=null,te=null,pe=null,K=null,W=null,_e=null,ke=null,wt=null;return{setTest:function(pt){R||(pt?ne(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(pt){oe!==pt&&!R&&(n.stencilMask(pt),oe=pt)},setFunc:function(pt,Ui,Bi){(te!==pt||pe!==Ui||K!==Bi)&&(n.stencilFunc(pt,Ui,Bi),te=pt,pe=Ui,K=Bi)},setOp:function(pt,Ui,Bi){(W!==pt||_e!==Ui||ke!==Bi)&&(n.stencilOp(pt,Ui,Bi),W=pt,_e=Ui,ke=Bi)},setLocked:function(pt){R=pt},setClear:function(pt){wt!==pt&&(n.clearStencil(pt),wt=pt)},reset:function(){R=!1,oe=null,te=null,pe=null,K=null,W=null,_e=null,ke=null,wt=null}}}let o=new t,s=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,M=null,w=null,b=null,T=null,C=null,D=new et(0,0,0),y=0,S=!1,j=null,I=null,L=null,k=null,G=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,F=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=F>=1):Q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=F>=2);let Z=null,ue={},ge=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),$e=new Dt().fromArray(ge),At=new Dt().fromArray(fe);function Ct(R,oe,te,pe){let K=new Uint8Array(4),W=n.createTexture();n.bindTexture(R,W),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<te;_e++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,K):n.texImage2D(oe+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,K);return W}let X={};X[n.TEXTURE_2D]=Ct(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),s.setFunc(Do),Ye(!1),Lt(mv),ne(n.CULL_FACE),ht(Pi);function ne(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function se(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function We(R,oe){return d[R]!==oe?(n.bindFramebuffer(R,oe),d[R]=oe,R===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=oe),R===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ie(R,oe){let te=h,pe=!1;if(R){te=f.get(oe),te===void 0&&(te=[],f.set(oe,te));let K=R.textures;if(te.length!==K.length||te[0]!==n.COLOR_ATTACHMENT0){for(let W=0,_e=K.length;W<_e;W++)te[W]=n.COLOR_ATTACHMENT0+W;te.length=K.length,pe=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,pe=!0);pe&&n.drawBuffers(te)}function Le(R){return g!==R?(n.useProgram(R),g=R,!0):!1}let jt={[Fr]:n.FUNC_ADD,[BS]:n.FUNC_SUBTRACT,[VS]:n.FUNC_REVERSE_SUBTRACT};jt[HS]=n.MIN,jt[zS]=n.MAX;let rt={[GS]:n.ZERO,[jS]:n.ONE,[WS]:n.SRC_COLOR,[Cd]:n.SRC_ALPHA,[JS]:n.SRC_ALPHA_SATURATE,[YS]:n.DST_COLOR,[qS]:n.DST_ALPHA,[$S]:n.ONE_MINUS_SRC_COLOR,[Id]:n.ONE_MINUS_SRC_ALPHA,[ZS]:n.ONE_MINUS_DST_COLOR,[XS]:n.ONE_MINUS_DST_ALPHA,[KS]:n.CONSTANT_COLOR,[QS]:n.ONE_MINUS_CONSTANT_COLOR,[eb]:n.CONSTANT_ALPHA,[tb]:n.ONE_MINUS_CONSTANT_ALPHA};function ht(R,oe,te,pe,K,W,_e,ke,wt,pt){if(R===Pi){_===!0&&(se(n.BLEND),_=!1);return}if(_===!1&&(ne(n.BLEND),_=!0),R!==US){if(R!==m||pt!==S){if((p!==Fr||b!==Fr)&&(n.blendEquation(n.FUNC_ADD),p=Fr,b=Fr),pt)switch(R){case Ao:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gv:n.blendFunc(n.ONE,n.ONE);break;case vv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:De("WebGLState: Invalid blending: ",R);break}else switch(R){case Ao:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gv:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vv:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yv:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",R);break}M=null,w=null,T=null,C=null,D.set(0,0,0),y=0,m=R,S=pt}return}K=K||oe,W=W||te,_e=_e||pe,(oe!==p||K!==b)&&(n.blendEquationSeparate(jt[oe],jt[K]),p=oe,b=K),(te!==M||pe!==w||W!==T||_e!==C)&&(n.blendFuncSeparate(rt[te],rt[pe],rt[W],rt[_e]),M=te,w=pe,T=W,C=_e),(ke.equals(D)===!1||wt!==y)&&(n.blendColor(ke.r,ke.g,ke.b,wt),D.copy(ke),y=wt),m=R,S=!1}function Mt(R,oe){R.side===Ni?se(n.CULL_FACE):ne(n.CULL_FACE);let te=R.side===En;oe&&(te=!te),Ye(te),R.blending===Ao&&R.transparent===!1?ht(Pi):ht(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),o.setMask(R.colorWrite);let pe=R.stencilWrite;a.setTest(pe),pe&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),kt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(R){j!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),j=R)}function Lt(R){R!==LS?(ne(n.CULL_FACE),R!==I&&(R===mv?n.cullFace(n.BACK):R===FS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),I=R}function A(R){R!==L&&(H&&n.lineWidth(R),L=R)}function kt(R,oe,te){R?(ne(n.POLYGON_OFFSET_FILL),(k!==oe||G!==te)&&(k=oe,G=te,s.getReversed()&&(oe=-oe),n.polygonOffset(oe,te))):se(n.POLYGON_OFFSET_FILL)}function ct(R){R?ne(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function Et(R){R===void 0&&(R=n.TEXTURE0+B-1),Z!==R&&(n.activeTexture(R),Z=R)}function Se(R,oe,te){te===void 0&&(Z===null?te=n.TEXTURE0+B-1:te=Z);let pe=ue[te];pe===void 0&&(pe={type:void 0,texture:void 0},ue[te]=pe),(pe.type!==R||pe.texture!==oe)&&(Z!==te&&(n.activeTexture(te),Z=te),n.bindTexture(R,oe||X[R]),pe.type=R,pe.texture=oe)}function E(){let R=ue[Z];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(R){De("WebGLState:",R)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(R){De("WebGLState:",R)}}function q(){try{n.texSubImage2D(...arguments)}catch(R){De("WebGLState:",R)}}function Y(){try{n.texSubImage3D(...arguments)}catch(R){De("WebGLState:",R)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(R){De("WebGLState:",R)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(R){De("WebGLState:",R)}}function re(){try{n.texStorage2D(...arguments)}catch(R){De("WebGLState:",R)}}function Te(){try{n.texStorage3D(...arguments)}catch(R){De("WebGLState:",R)}}function Ne(){try{n.texImage2D(...arguments)}catch(R){De("WebGLState:",R)}}function J(){try{n.texImage3D(...arguments)}catch(R){De("WebGLState:",R)}}function ee(R){$e.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),$e.copy(R))}function ye(R){At.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),At.copy(R))}function xe(R,oe){let te=l.get(oe);te===void 0&&(te=new WeakMap,l.set(oe,te));let pe=te.get(R);pe===void 0&&(pe=n.getUniformBlockIndex(oe,R.name),te.set(R,pe))}function de(R,oe){let pe=l.get(oe).get(R);c.get(oe)!==pe&&(n.uniformBlockBinding(oe,pe,R.__bindingPointIndex),c.set(oe,pe))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,ue={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,M=null,w=null,b=null,T=null,C=null,D=new et(0,0,0),y=0,S=!1,j=null,I=null,L=null,k=null,G=null,$e.set(0,0,n.canvas.width,n.canvas.height),At.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ne,disable:se,bindFramebuffer:We,drawBuffers:Ie,useProgram:Le,setBlending:ht,setMaterial:Mt,setFlipSided:Ye,setCullFace:Lt,setLineWidth:A,setPolygonOffset:kt,setScissorTest:ct,activeTexture:Et,bindTexture:Se,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:Ne,texImage3D:J,updateUBOMapping:xe,uniformBlockBinding:de,texStorage2D:re,texStorage3D:Te,texSubImage2D:q,texSubImage3D:Y,compressedTexSubImage2D:$,compressedTexSubImage3D:ve,scissor:ee,viewport:ye,reset:Ze}}function GO(n,e,t,i,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return h?new OffscreenCanvas(E,v):wc("canvas")}function _(E,v,N){let q=1,Y=Se(E);if((Y.width>N||Y.height>N)&&(q=N/Math.max(Y.width,Y.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let $=Math.floor(q*Y.width),ve=Math.floor(q*Y.height);d===void 0&&(d=g($,ve));let re=v?g($,ve):d;return re.width=$,re.height=ve,re.getContext("2d").drawImage(E,0,0,$,ve),Re("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+$+"x"+ve+")."),re}else return"data"in E&&Re("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(E,v,N,q,Y=!1){if(E!==null){if(n[E]!==void 0)return n[E];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=v;if(v===n.RED&&(N===n.FLOAT&&($=n.R32F),N===n.HALF_FLOAT&&($=n.R16F),N===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&($=n.R8UI),N===n.UNSIGNED_SHORT&&($=n.R16UI),N===n.UNSIGNED_INT&&($=n.R32UI),N===n.BYTE&&($=n.R8I),N===n.SHORT&&($=n.R16I),N===n.INT&&($=n.R32I)),v===n.RG&&(N===n.FLOAT&&($=n.RG32F),N===n.HALF_FLOAT&&($=n.RG16F),N===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&($=n.RG8UI),N===n.UNSIGNED_SHORT&&($=n.RG16UI),N===n.UNSIGNED_INT&&($=n.RG32UI),N===n.BYTE&&($=n.RG8I),N===n.SHORT&&($=n.RG16I),N===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&($=n.RGB8UI),N===n.UNSIGNED_SHORT&&($=n.RGB16UI),N===n.UNSIGNED_INT&&($=n.RGB32UI),N===n.BYTE&&($=n.RGB8I),N===n.SHORT&&($=n.RGB16I),N===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&($=n.RGBA8UI),N===n.UNSIGNED_SHORT&&($=n.RGBA16UI),N===n.UNSIGNED_INT&&($=n.RGBA32UI),N===n.BYTE&&($=n.RGBA8I),N===n.SHORT&&($=n.RGBA16I),N===n.INT&&($=n.RGBA32I)),v===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),v===n.RGBA){let ve=Y?Ec:it.getTransfer(q);N===n.FLOAT&&($=n.RGBA32F),N===n.HALF_FLOAT&&($=n.RGBA16F),N===n.UNSIGNED_BYTE&&($=ve===ft?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(E,v){let N;return E?v===null||v===hi||v===Qs?N=n.DEPTH24_STENCIL8:v===pi?N=n.DEPTH32F_STENCIL8:v===Ks&&(N=n.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hi||v===Qs?N=n.DEPTH_COMPONENT24:v===pi?N=n.DEPTH_COMPONENT32F:v===Ks&&(N=n.DEPTH_COMPONENT16),N}function T(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Zt&&E.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){let v=E.target;v.removeEventListener("dispose",C),y(v),v.isVideoTexture&&u.delete(v)}function D(E){let v=E.target;v.removeEventListener("dispose",D),j(v)}function y(E){let v=i.get(E);if(v.__webglInit===void 0)return;let N=E.source,q=f.get(N);if(q){let Y=q[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(E),Object.keys(q).length===0&&f.delete(N)}i.remove(E)}function S(E){let v=i.get(E);n.deleteTexture(v.__webglTexture);let N=E.source,q=f.get(N);delete q[v.__cacheKey],s.memory.textures--}function j(E){let v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let Y=0;Y<v.__webglFramebuffer[q].length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[q][Y]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let N=E.textures;for(let q=0,Y=N.length;q<Y;q++){let $=i.get(N[q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),s.memory.textures--),i.remove(N[q])}i.remove(E)}let I=0;function L(){I=0}function k(){let E=I;return E>=r.maxTextures&&Re("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),I+=1,E}function G(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function B(E,v){let N=i.get(E);if(E.isVideoTexture&&ct(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){let q=E.image;if(q===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,E,v);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+v)}function H(E,v){let N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){X(N,E,v);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+v)}function F(E,v){let N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){X(N,E,v);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+v)}function Q(E,v){let N=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){ne(N,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+v)}let Z={[Fd]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[kd]:n.MIRRORED_REPEAT},ue={[Zt]:n.NEAREST,[rb]:n.NEAREST_MIPMAP_NEAREST,[Xc]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[pf]:n.LINEAR_MIPMAP_NEAREST,[$r]:n.LINEAR_MIPMAP_LINEAR},ge={[ab]:n.NEVER,[fb]:n.ALWAYS,[cb]:n.LESS,[Qf]:n.LEQUAL,[lb]:n.EQUAL,[eh]:n.GEQUAL,[ub]:n.GREATER,[db]:n.NOTEQUAL};function fe(E,v){if(v.type===pi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===pf||v.magFilter===Xc||v.magFilter===$r||v.minFilter===an||v.minFilter===pf||v.minFilter===Xc||v.minFilter===$r)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Z[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Z[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Z[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ue[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Zt||v.minFilter!==Xc&&v.minFilter!==$r||v.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function $e(E,v){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));let q=v.source,Y=f.get(q);Y===void 0&&(Y={},f.set(q,Y));let $=G(v);if($!==E.__cacheKey){Y[$]===void 0&&(Y[$]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,N=!0),Y[$].usedTimes++;let ve=Y[E.__cacheKey];ve!==void 0&&(Y[E.__cacheKey].usedTimes--,ve.usedTimes===0&&S(v)),E.__cacheKey=$,E.__webglTexture=Y[$].texture}return N}function At(E,v,N){return Math.floor(Math.floor(E/N)/v)}function Ct(E,v,N,q){let $=E.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,N,q,v.data);else{$.sort((J,ee)=>J.start-ee.start);let ve=0;for(let J=1;J<$.length;J++){let ee=$[ve],ye=$[J],xe=ee.start+ee.count,de=At(ye.start,v.width,4),Ze=At(ee.start,v.width,4);ye.start<=xe+1&&de===Ze&&At(ye.start+ye.count-1,v.width,4)===de?ee.count=Math.max(ee.count,ye.start+ye.count-ee.start):(++ve,$[ve]=ye)}$.length=ve+1;let re=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let J=0,ee=$.length;J<ee;J++){let ye=$[J],xe=Math.floor(ye.start/4),de=Math.ceil(ye.count/4),Ze=xe%v.width,R=Math.floor(xe/v.width),oe=de,te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,R),t.texSubImage2D(n.TEXTURE_2D,0,Ze,R,oe,te,N,q,v.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function X(E,v,N){let q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=n.TEXTURE_3D);let Y=$e(E,v),$=v.source;t.bindTexture(q,E.__webglTexture,n.TEXTURE0+N);let ve=i.get($);if($.version!==ve.__version||Y===!0){t.activeTexture(n.TEXTURE0+N);let re=it.getPrimaries(it.workingColorSpace),Te=v.colorSpace===ur?null:it.getPrimaries(v.colorSpace),Ne=v.colorSpace===ur||re===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let J=_(v.image,!1,r.maxTextureSize);J=Et(v,J);let ee=o.convert(v.format,v.colorSpace),ye=o.convert(v.type),xe=w(v.internalFormat,ee,ye,v.colorSpace,v.isVideoTexture);fe(q,v);let de,Ze=v.mipmaps,R=v.isVideoTexture!==!0,oe=ve.__version===void 0||Y===!0,te=$.dataReady,pe=T(v,J);if(v.isDepthTexture)xe=b(v.format===qr,v.type),oe&&(R?t.texStorage2D(n.TEXTURE_2D,1,xe,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,xe,J.width,J.height,0,ee,ye,null));else if(v.isDataTexture)if(Ze.length>0){R&&oe&&t.texStorage2D(n.TEXTURE_2D,pe,xe,Ze[0].width,Ze[0].height);for(let K=0,W=Ze.length;K<W;K++)de=Ze[K],R?te&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,de.width,de.height,ee,ye,de.data):t.texImage2D(n.TEXTURE_2D,K,xe,de.width,de.height,0,ee,ye,de.data);v.generateMipmaps=!1}else R?(oe&&t.texStorage2D(n.TEXTURE_2D,pe,xe,J.width,J.height),te&&Ct(v,J,ee,ye)):t.texImage2D(n.TEXTURE_2D,0,xe,J.width,J.height,0,ee,ye,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){R&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,xe,Ze[0].width,Ze[0].height,J.depth);for(let K=0,W=Ze.length;K<W;K++)if(de=Ze[K],v.format!==Yn)if(ee!==null)if(R){if(te)if(v.layerUpdates.size>0){let _e=Bv(de.width,de.height,v.format,v.type);for(let ke of v.layerUpdates){let wt=de.data.subarray(ke*_e/de.data.BYTES_PER_ELEMENT,(ke+1)*_e/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,ke,de.width,de.height,1,ee,wt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,J.depth,ee,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,xe,de.width,de.height,J.depth,0,de.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,J.depth,ee,ye,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,xe,de.width,de.height,J.depth,0,ee,ye,de.data)}else{R&&oe&&t.texStorage2D(n.TEXTURE_2D,pe,xe,Ze[0].width,Ze[0].height);for(let K=0,W=Ze.length;K<W;K++)de=Ze[K],v.format!==Yn?ee!==null?R?te&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,de.width,de.height,ee,de.data):t.compressedTexImage2D(n.TEXTURE_2D,K,xe,de.width,de.height,0,de.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?te&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,de.width,de.height,ee,ye,de.data):t.texImage2D(n.TEXTURE_2D,K,xe,de.width,de.height,0,ee,ye,de.data)}else if(v.isDataArrayTexture)if(R){if(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,xe,J.width,J.height,J.depth),te)if(v.layerUpdates.size>0){let K=Bv(J.width,J.height,v.format,v.type);for(let W of v.layerUpdates){let _e=J.data.subarray(W*K/J.data.BYTES_PER_ELEMENT,(W+1)*K/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,W,J.width,J.height,1,ee,ye,_e)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ee,ye,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,J.width,J.height,J.depth,0,ee,ye,J.data);else if(v.isData3DTexture)R?(oe&&t.texStorage3D(n.TEXTURE_3D,pe,xe,J.width,J.height,J.depth),te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ee,ye,J.data)):t.texImage3D(n.TEXTURE_3D,0,xe,J.width,J.height,J.depth,0,ee,ye,J.data);else if(v.isFramebufferTexture){if(oe)if(R)t.texStorage2D(n.TEXTURE_2D,pe,xe,J.width,J.height);else{let K=J.width,W=J.height;for(let _e=0;_e<pe;_e++)t.texImage2D(n.TEXTURE_2D,_e,xe,K,W,0,ee,ye,null),K>>=1,W>>=1}}else if(Ze.length>0){if(R&&oe){let K=Se(Ze[0]);t.texStorage2D(n.TEXTURE_2D,pe,xe,K.width,K.height)}for(let K=0,W=Ze.length;K<W;K++)de=Ze[K],R?te&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ee,ye,de):t.texImage2D(n.TEXTURE_2D,K,xe,ee,ye,de);v.generateMipmaps=!1}else if(R){if(oe){let K=Se(J);t.texStorage2D(n.TEXTURE_2D,pe,xe,K.width,K.height)}te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee,ye,J)}else t.texImage2D(n.TEXTURE_2D,0,xe,ee,ye,J);m(v)&&p(q),ve.__version=$.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ne(E,v,N){if(v.image.length!==6)return;let q=$e(E,v),Y=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);let $=i.get(Y);if(Y.version!==$.__version||q===!0){t.activeTexture(n.TEXTURE0+N);let ve=it.getPrimaries(it.workingColorSpace),re=v.colorSpace===ur?null:it.getPrimaries(v.colorSpace),Te=v.colorSpace===ur||ve===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Ne=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ee=[];for(let W=0;W<6;W++)!Ne&&!J?ee[W]=_(v.image[W],!0,r.maxCubemapSize):ee[W]=J?v.image[W].image:v.image[W],ee[W]=Et(v,ee[W]);let ye=ee[0],xe=o.convert(v.format,v.colorSpace),de=o.convert(v.type),Ze=w(v.internalFormat,xe,de,v.colorSpace),R=v.isVideoTexture!==!0,oe=$.__version===void 0||q===!0,te=Y.dataReady,pe=T(v,ye);fe(n.TEXTURE_CUBE_MAP,v);let K;if(Ne){R&&oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ze,ye.width,ye.height);for(let W=0;W<6;W++){K=ee[W].mipmaps;for(let _e=0;_e<K.length;_e++){let ke=K[_e];v.format!==Yn?xe!==null?R?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,_e,0,0,ke.width,ke.height,xe,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,_e,Ze,ke.width,ke.height,0,ke.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,_e,0,0,ke.width,ke.height,xe,de,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,_e,Ze,ke.width,ke.height,0,xe,de,ke.data)}}}else{if(K=v.mipmaps,R&&oe){K.length>0&&pe++;let W=Se(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ze,W.width,W.height)}for(let W=0;W<6;W++)if(J){R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ee[W].width,ee[W].height,xe,de,ee[W].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ze,ee[W].width,ee[W].height,0,xe,de,ee[W].data);for(let _e=0;_e<K.length;_e++){let wt=K[_e].image[W].image;R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,_e+1,0,0,wt.width,wt.height,xe,de,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,_e+1,Ze,wt.width,wt.height,0,xe,de,wt.data)}}else{R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,xe,de,ee[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ze,xe,de,ee[W]);for(let _e=0;_e<K.length;_e++){let ke=K[_e];R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,_e+1,0,0,xe,de,ke.image[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,_e+1,Ze,xe,de,ke.image[W])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),$.__version=Y.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function se(E,v,N,q,Y,$){let ve=o.convert(N.format,N.colorSpace),re=o.convert(N.type),Te=w(N.internalFormat,ve,re,N.colorSpace),Ne=i.get(v),J=i.get(N);if(J.__renderTarget=v,!Ne.__hasExternalTextures){let ee=Math.max(1,v.width>>$),ye=Math.max(1,v.height>>$);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,$,Te,ee,ye,v.depth,0,ve,re,null):t.texImage2D(Y,$,Te,ee,ye,0,ve,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),kt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Y,J.__webglTexture,0,A(v)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Y,J.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(E,v,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){let q=v.depthTexture,Y=q&&q.isDepthTexture?q.type:null,$=b(v.stencilBuffer,Y),ve=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;kt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(v),$,v.width,v.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(v),$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,E)}else{let q=v.textures;for(let Y=0;Y<q.length;Y++){let $=q[Y],ve=o.convert($.format,$.colorSpace),re=o.convert($.type),Te=w($.internalFormat,ve,re,$.colorSpace);kt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(v),Te,v.width,v.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(v),Te,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Te,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(E,v,N){let q=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(v.depthTexture);if(Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),fe(n.TEXTURE_CUBE_MAP,v.depthTexture);let Ne=o.convert(v.depthTexture.format),J=o.convert(v.depthTexture.type),ee;v.depthTexture.format===Di?ee=n.DEPTH_COMPONENT24:v.depthTexture.format===qr&&(ee=n.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ee,v.width,v.height,0,Ne,J,null)}}else B(v.depthTexture,0);let $=Y.__webglTexture,ve=A(v),re=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,Te=v.depthTexture.format===qr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Di)kt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Te,re,$,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,Te,re,$,0);else if(v.depthTexture.format===qr)kt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Te,re,$,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,Te,re,$,0);else throw new Error("Unknown depthTexture format")}function Le(E){let v=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let q=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){let Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",Y)};q.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=q}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)Ie(v.__webglFramebuffer[q],E,q);else{let q=E.texture.mipmaps;q&&q.length>0?Ie(v.__webglFramebuffer[0],E,0):Ie(v.__webglFramebuffer,E,0)}else if(N){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=n.createRenderbuffer(),We(v.__webglDepthbuffer[q],E,!1);else{let Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,$)}}else{let q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),We(v.__webglDepthbuffer,E,!1);else{let Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(E,v,N){let q=i.get(E);v!==void 0&&se(q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Le(E)}function rt(E){let v=E.texture,N=i.get(E),q=i.get(v);E.addEventListener("dispose",D);let Y=E.textures,$=E.isWebGLCubeRenderTarget===!0,ve=Y.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=v.version,s.memory.textures++),$){N.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[re]=[];for(let Te=0;Te<v.mipmaps.length;Te++)N.__webglFramebuffer[re][Te]=n.createFramebuffer()}else N.__webglFramebuffer[re]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)N.__webglFramebuffer[re]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ve)for(let re=0,Te=Y.length;re<Te;re++){let Ne=i.get(Y[re]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),s.memory.textures++)}if(E.samples>0&&kt(E)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let re=0;re<Y.length;re++){let Te=Y[re];N.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[re]);let Ne=o.convert(Te.format,Te.colorSpace),J=o.convert(Te.type),ee=w(Te.internalFormat,Ne,J,Te.colorSpace,E.isXRRenderTarget===!0),ye=A(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ee,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,N.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),We(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),fe(n.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)se(N.__webglFramebuffer[re][Te],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te);else se(N.__webglFramebuffer[re],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let re=0,Te=Y.length;re<Te;re++){let Ne=Y[re],J=i.get(Ne),ee=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ee=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,J.__webglTexture),fe(ee,Ne),se(N.__webglFramebuffer,E,Ne,n.COLOR_ATTACHMENT0+re,ee,0),m(Ne)&&p(ee)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),fe(re,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)se(N.__webglFramebuffer[Te],E,v,n.COLOR_ATTACHMENT0,re,Te);else se(N.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,re,0);m(v)&&p(re),t.unbindTexture()}E.depthBuffer&&Le(E)}function ht(E){let v=E.textures;for(let N=0,q=v.length;N<q;N++){let Y=v[N];if(m(Y)){let $=M(E),ve=i.get(Y).__webglTexture;t.bindTexture($,ve),p($),t.unbindTexture()}}}let Mt=[],Ye=[];function Lt(E){if(E.samples>0){if(kt(E)===!1){let v=E.textures,N=E.width,q=E.height,Y=n.COLOR_BUFFER_BIT,$=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(E),re=v.length>1;if(re)for(let Ne=0;Ne<v.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let Te=E.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ne=0;Ne<v.length;Ne++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ne]);let J=i.get(v[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,N,q,0,0,N,q,Y,n.NEAREST),c===!0&&(Mt.length=0,Ye.length=0,Mt.push(n.COLOR_ATTACHMENT0+Ne),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Mt.push($),Ye.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Ne=0;Ne<v.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ne]);let J=i.get(v[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function A(E){return Math.min(r.maxSamples,E.samples)}function kt(E){let v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ct(E){let v=s.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Et(E,v){let N=E.colorSpace,q=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Ro&&N!==ur&&(it.getTransfer(N)===ft?(q!==Yn||Y!==Cn)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",N)),v}function Se(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=F,this.setTextureCube=Q,this.rebindTextures=jt,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=se,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jO(n,e){function t(i,r=ur){let o,s=it.getTransfer(r);if(i===Cn)return n.UNSIGNED_BYTE;if(i===gf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Av)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dv)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cv)return n.BYTE;if(i===Iv)return n.SHORT;if(i===Ks)return n.UNSIGNED_SHORT;if(i===mf)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===Oi)return n.HALF_FLOAT;if(i===Rv)return n.ALPHA;if(i===Nv)return n.RGB;if(i===Yn)return n.RGBA;if(i===Di)return n.DEPTH_COMPONENT;if(i===qr)return n.DEPTH_STENCIL;if(i===Pv)return n.RED;if(i===yf)return n.RED_INTEGER;if(i===Oo)return n.RG;if(i===_f)return n.RG_INTEGER;if(i===xf)return n.RGBA_INTEGER;if(i===Yc||i===Zc||i===Jc||i===Kc)if(s===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Yc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Yc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Kc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mf||i===Sf||i===bf||i===Ef)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Mf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ef)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wf||i===Tf||i===Cf||i===If||i===Af||i===Df||i===Rf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===wf||i===Tf)return s===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Cf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===If)return o.COMPRESSED_R11_EAC;if(i===Af)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Df)return o.COMPRESSED_RG11_EAC;if(i===Rf)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Nf||i===Pf||i===Of||i===Lf||i===Ff||i===kf||i===Uf||i===Bf||i===Vf||i===Hf||i===zf||i===Gf||i===jf||i===Wf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Nf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Of)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ff)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wf)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$f||i===qf||i===Xf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===$f)return s===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yf||i===Zf||i===Jf||i===Kf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Yf)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Zf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var WO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$O=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new kc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Un({vertexShader:WO,fragmentShader:$O,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new Uc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ey=class extends cr{constructor(e,t){super();let i=this,r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,_=typeof XRWebGLBinding<"u",m=new Qv,p={},M=t.getContextAttributes(),w=null,b=null,T=[],C=[],D=new qe,y=null,S=new sn;S.viewport=new Dt;let j=new sn;j.viewport=new Dt;let I=[S,j],L=new df,k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=T[X];return ne===void 0&&(ne=new js,T[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=T[X];return ne===void 0&&(ne=new js,T[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=T[X];return ne===void 0&&(ne=new js,T[X]=ne),ne.getHandSpace()};function B(X){let ne=C.indexOf(X.inputSource);if(ne===-1)return;let se=T[ne];se!==void 0&&(se.update(X.inputSource,X.frame,l||s),se.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",F);for(let X=0;X<T.length;X++){let ne=C[X];ne!==null&&(C[X]=null,T[X].disconnect(ne))}k=null,G=null,m.reset();for(let X in p)delete p[X];e.setRenderTarget(w),h=null,f=null,d=null,r=null,b=null,Ct.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",H),r.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,We=null,Ie=null;M.depth&&(Ie=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=M.stencil?qr:Di,We=M.stencil?Qs:hi);let Le={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:o};d=this.getBinding(),f=d.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new kn(f.textureWidth,f.textureHeight,{format:Yn,type:Cn,depthTexture:new Hr(f.textureWidth,f.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new kn(h.framebufferWidth,h.framebufferHeight,{format:Yn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),Ct.setContext(r),Ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(X){for(let ne=0;ne<X.removed.length;ne++){let se=X.removed[ne],We=C.indexOf(se);We>=0&&(C[We]=null,T[We].disconnect(se))}for(let ne=0;ne<X.added.length;ne++){let se=X.added[ne],We=C.indexOf(se);if(We===-1){for(let Le=0;Le<T.length;Le++)if(Le>=C.length){C.push(se),We=Le;break}else if(C[Le]===null){C[Le]=se,We=Le;break}if(We===-1)break}let Ie=T[We];Ie&&Ie.connect(se)}}let Q=new O,Z=new O;function ue(X,ne,se){Q.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);let We=Q.distanceTo(Z),Ie=ne.projectionMatrix.elements,Le=se.projectionMatrix.elements,jt=Ie[14]/(Ie[10]-1),rt=Ie[14]/(Ie[10]+1),ht=(Ie[9]+1)/Ie[5],Mt=(Ie[9]-1)/Ie[5],Ye=(Ie[8]-1)/Ie[0],Lt=(Le[8]+1)/Le[0],A=jt*Ye,kt=jt*Lt,ct=We/(-Ye+Lt),Et=ct*-Ye;if(ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Et),X.translateZ(ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ie[10]===-1)X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Se=jt+ct,E=rt+ct,v=A-Et,N=kt+(We-Et),q=ht*rt/E*Se,Y=Mt*rt/E*Se;X.projectionMatrix.makePerspective(v,N,q,Y,Se,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ge(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ne=X.near,se=X.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(se=m.depthFar)),L.near=j.near=S.near=ne,L.far=j.far=S.far=se,(k!==L.near||G!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,G=L.far),L.layers.mask=X.layers.mask|6,S.layers.mask=L.layers.mask&-5,j.layers.mask=L.layers.mask&-3;let We=X.parent,Ie=L.cameras;ge(L,We);for(let Le=0;Le<Ie.length;Le++)ge(Ie[Le],We);Ie.length===2?ue(L,S,j):L.projectionMatrix.copy(S.projectionMatrix),fe(X,L,We)};function fe(X,ne,se){se===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Vd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(X){return p[X]};let $e=null;function At(X,ne){if(u=ne.getViewerPose(l||s),g=ne,u!==null){let se=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let We=!1;se.length!==L.cameras.length&&(L.cameras.length=0,We=!0);for(let rt=0;rt<se.length;rt++){let ht=se[rt],Mt=null;if(h!==null)Mt=h.getViewport(ht);else{let Lt=d.getViewSubImage(f,ht);Mt=Lt.viewport,rt===0&&(e.setRenderTargetTextures(b,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(b))}let Ye=I[rt];Ye===void 0&&(Ye=new sn,Ye.layers.enable(rt),Ye.viewport=new Dt,I[rt]=Ye),Ye.matrix.fromArray(ht.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ht.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),rt===0&&(L.matrix.copy(Ye.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),We===!0&&L.cameras.push(Ye)}let Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let rt=d.getDepthInformation(se[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,r.renderState)}if(Ie&&Ie.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let rt=0;rt<se.length;rt++){let ht=se[rt].camera;if(ht){let Mt=p[ht];Mt||(Mt=new kc,p[ht]=Mt);let Ye=d.getCameraImage(ht);Mt.sourceTexture=Ye}}}}for(let se=0;se<T.length;se++){let We=C[se],Ie=T[se];We!==null&&Ie!==void 0&&Ie.update(We,ne,l||s)}$e&&$e(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}let Ct=new zb;Ct.setAnimationLoop(At),this.setAnimationLoop=function(X){$e=X},this.dispose=function(){}}},ko=new kr,qO=new It;function XO(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Fv(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,w,b){p.isMeshBasicMaterial?o(m,p):p.isMeshLambertMaterial?(o(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),_(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),w=M.envMap,b=M.envMapRotation;w&&(m.envMap.value=w,ko.copy(b),ko.x*=-1,ko.y*=-1,ko.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ko.y*=-1,ko.z*=-1),m.envMapRotation.value.setFromMatrix4(qO.makeRotationFromEuler(ko)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YO(n,e,t,i){let r={},o={},s=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){let b=w.program;i.uniformBlockBinding(M,b)}function l(M,w){let b=r[M.id];b===void 0&&(g(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",m));let T=w.program;i.updateUBOMapping(M,T);let C=e.render.frame;o[M.id]!==C&&(f(M),o[M.id]=C)}function u(M){let w=d();M.__bindingPointIndex=w;let b=n.createBuffer(),T=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,T,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function d(){for(let M=0;M<a;M++)if(s.indexOf(M)===-1)return s.push(M),M;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let w=r[M.id],b=M.uniforms,T=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let C=0,D=b.length;C<D;C++){let y=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,j=y.length;S<j;S++){let I=y[S];if(h(I,C,S,T)===!0){let L=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],G=0;for(let B=0;B<k.length;B++){let H=k[B],F=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,L+G,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,G),G+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,w,b,T){let C=M.value,D=w+"_"+b;if(T[D]===void 0)return typeof C=="number"||typeof C=="boolean"?T[D]=C:T[D]=C.clone(),!0;{let y=T[D];if(typeof C=="number"||typeof C=="boolean"){if(y!==C)return T[D]=C,!0}else if(y.equals(C)===!1)return y.copy(C),!0}return!1}function g(M){let w=M.uniforms,b=0,T=16;for(let D=0,y=w.length;D<y;D++){let S=Array.isArray(w[D])?w[D]:[w[D]];for(let j=0,I=S.length;j<I;j++){let L=S[j],k=Array.isArray(L.value)?L.value:[L.value];for(let G=0,B=k.length;G<B;G++){let H=k[G],F=_(H),Q=b%T,Z=Q%F.boundary,ue=Q+Z;b+=Z,ue!==0&&T-ue<F.storage&&(b+=T-ue),L.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=F.storage}}}let C=b%T;return C>0&&(b+=T-C),M.__size=b,M.__cache={},this}function _(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Re("WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){let w=M.target;w.removeEventListener("dispose",m);let b=s.indexOf(w.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete o[w.id]}function p(){for(let M in r)n.deleteBuffer(r[M]);s=[],r={},o={}}return{bind:c,update:l,dispose:p}}var ZO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fi=null;function JO(){return Fi===null&&(Fi=new Wd(ZO,16,16,Oo,Oi),Fi.name="DFG_LUT",Fi.minFilter=an,Fi.magFilter=an,Fi.wrapS=Ai,Fi.wrapT=Ai,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}var oh=class{constructor(e={}){let{canvas:t=hb(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Cn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=s;let _=h,m=new Set([xf,_f,yf]),p=new Set([Cn,hi,Ks,Qs,gf,vf]),M=new Uint32Array(4),w=new Int32Array(4),b=null,T=null,C=[],D=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,j=!1;this._outputColorSpace=Fn;let I=0,L=0,k=null,G=-1,B=null,H=new Dt,F=new Dt,Q=null,Z=new et(0),ue=0,ge=t.width,fe=t.height,$e=1,At=null,Ct=null,X=new Dt(0,0,ge,fe),ne=new Dt(0,0,ge,fe),se=!1,We=new qs,Ie=!1,Le=!1,jt=new It,rt=new O,ht=new Dt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function Lt(){return k===null?$e:1}let A=i;function kt(x,P){return t.getContext(x,P)}try{let x={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",wt,!1),A===null){let P="webgl2";if(A=kt(P,x),A===null)throw kt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw De("WebGLRenderer: "+x.message),x}let ct,Et,Se,E,v,N,q,Y,$,ve,re,Te,Ne,J,ee,ye,xe,de,Ze,R,oe,te,pe;function K(){ct=new oP(A),ct.init(),oe=new jO(A,ct),Et=new JN(A,ct,e,oe),Se=new zO(A,ct),Et.reversedDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),E=new cP(A),v=new IO,N=new GO(A,ct,Se,v,Et,oe,E),q=new rP(S),Y=new hR(A),te=new YN(A,Y),$=new sP(A,Y,E,te),ve=new uP(A,$,Y,te,E),de=new lP(A,Et,N),ee=new KN(v),re=new CO(S,q,ct,Et,te,ee),Te=new XO(S,v),Ne=new DO,J=new FO(ct),xe=new XN(S,q,Se,ve,g,c),ye=new HO(S,ve,Et),pe=new YO(A,E,Et,Se),Ze=new ZN(A,ct,E),R=new aP(A,ct,E),E.programs=re.programs,S.capabilities=Et,S.extensions=ct,S.properties=v,S.renderLists=Ne,S.shadowMap=ye,S.state=Se,S.info=E}K(),_!==Cn&&(y=new fP(_,t.width,t.height,r,o));let W=new ey(S,A);this.xr=W,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let x=ct.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ct.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return $e},this.setPixelRatio=function(x){x!==void 0&&($e=x,this.setSize(ge,fe,!1))},this.getSize=function(x){return x.set(ge,fe)},this.setSize=function(x,P,z=!0){if(W.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=x,fe=P,t.width=Math.floor(x*$e),t.height=Math.floor(P*$e),z===!0&&(t.style.width=x+"px",t.style.height=P+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(ge*$e,fe*$e).floor()},this.setDrawingBufferSize=function(x,P,z){ge=x,fe=P,$e=z,t.width=Math.floor(x*z),t.height=Math.floor(P*z),this.setViewport(0,0,x,P)},this.setEffects=function(x){if(_===Cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let P=0;P<x.length;P++)if(x[P].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(H)},this.getViewport=function(x){return x.copy(X)},this.setViewport=function(x,P,z,V){x.isVector4?X.set(x.x,x.y,x.z,x.w):X.set(x,P,z,V),Se.viewport(H.copy(X).multiplyScalar($e).round())},this.getScissor=function(x){return x.copy(ne)},this.setScissor=function(x,P,z,V){x.isVector4?ne.set(x.x,x.y,x.z,x.w):ne.set(x,P,z,V),Se.scissor(F.copy(ne).multiplyScalar($e).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(x){Se.setScissorTest(se=x)},this.setOpaqueSort=function(x){At=x},this.setTransparentSort=function(x){Ct=x},this.getClearColor=function(x){return x.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,z=!0){let V=0;if(x){let U=!1;if(k!==null){let ce=k.texture.format;U=m.has(ce)}if(U){let ce=k.texture.type,he=p.has(ce),le=xe.getClearColor(),Me=xe.getClearAlpha(),Ee=le.r,He=le.g,Je=le.b;he?(M[0]=Ee,M[1]=He,M[2]=Je,M[3]=Me,A.clearBufferuiv(A.COLOR,0,M)):(w[0]=Ee,w[1]=He,w[2]=Je,w[3]=Me,A.clearBufferiv(A.COLOR,0,w))}else V|=A.COLOR_BUFFER_BIT}P&&(V|=A.DEPTH_BUFFER_BIT),z&&(V|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&A.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),xe.dispose(),Ne.dispose(),J.dispose(),v.dispose(),q.dispose(),ve.dispose(),te.dispose(),pe.dispose(),re.dispose(),W.dispose(),W.removeEventListener("sessionstart",ny),W.removeEventListener("sessionend",iy),Yr.stop()};function _e(x){x.preventDefault(),Tc("WebGLRenderer: Context Lost."),j=!0}function ke(){Tc("WebGLRenderer: Context Restored."),j=!1;let x=E.autoReset,P=ye.enabled,z=ye.autoUpdate,V=ye.needsUpdate,U=ye.type;K(),E.autoReset=x,ye.enabled=P,ye.autoUpdate=z,ye.needsUpdate=V,ye.type=U}function wt(x){De("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function pt(x){let P=x.target;P.removeEventListener("dispose",pt),Ui(P)}function Ui(x){Bi(x),v.remove(x)}function Bi(x){let P=v.get(x).programs;P!==void 0&&(P.forEach(function(z){re.releaseProgram(z)}),x.isShaderMaterial&&re.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,z,V,U,ce){P===null&&(P=Mt);let he=U.isMesh&&U.matrixWorld.determinant()<0,le=Yb(x,P,z,V,U);Se.setMaterial(V,he);let Me=z.index,Ee=1;if(V.wireframe===!0){if(Me=$.getWireframeAttribute(z),Me===void 0)return;Ee=2}let He=z.drawRange,Je=z.attributes.position,we=He.start*Ee,vt=(He.start+He.count)*Ee;ce!==null&&(we=Math.max(we,ce.start*Ee),vt=Math.min(vt,(ce.start+ce.count)*Ee)),Me!==null?(we=Math.max(we,0),vt=Math.min(vt,Me.count)):Je!=null&&(we=Math.max(we,0),vt=Math.min(vt,Je.count));let Ft=vt-we;if(Ft<0||Ft===1/0)return;te.setup(U,V,le,z,Me);let Rt,yt=Ze;if(Me!==null&&(Rt=Y.get(Me),yt=R,yt.setIndex(Rt)),U.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*Lt()),yt.setMode(A.LINES)):yt.setMode(A.TRIANGLES);else if(U.isLine){let cn=V.linewidth;cn===void 0&&(cn=1),Se.setLineWidth(cn*Lt()),U.isLineSegments?yt.setMode(A.LINES):U.isLineLoop?yt.setMode(A.LINE_LOOP):yt.setMode(A.LINE_STRIP)}else U.isPoints?yt.setMode(A.POINTS):U.isSprite&&yt.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Cc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))yt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let cn=U._multiDrawStarts,be=U._multiDrawCounts,In=U._multiDrawCount,ot=Me?Y.get(Me).bytesPerElement:1,Jn=v.get(V).currentProgram.getUniforms();for(let mi=0;mi<In;mi++)Jn.setValue(A,"_gl_DrawID",mi),yt.render(cn[mi]/ot,be[mi])}else if(U.isInstancedMesh)yt.renderInstances(we,Ft,U.count);else if(z.isInstancedBufferGeometry){let cn=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,be=Math.min(z.instanceCount,cn);yt.renderInstances(we,Ft,be)}else yt.render(we,Ft)};function ty(x,P,z){x.transparent===!0&&x.side===Ni&&x.forceSinglePass===!1?(x.side=En,x.needsUpdate=!0,il(x,P,z),x.side=ar,x.needsUpdate=!0,il(x,P,z),x.side=Ni):il(x,P,z)}this.compile=function(x,P,z=null){z===null&&(z=x),T=J.get(z),T.init(P),D.push(T),z.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(T.pushLight(U),U.castShadow&&T.pushShadow(U))}),x!==z&&x.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(T.pushLight(U),U.castShadow&&T.pushShadow(U))}),T.setupLights();let V=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ce=U.material;if(ce)if(Array.isArray(ce))for(let he=0;he<ce.length;he++){let le=ce[he];ty(le,z,U),V.add(le)}else ty(ce,z,U),V.add(ce)}),T=D.pop(),V},this.compileAsync=function(x,P,z=null){let V=this.compile(x,P,z);return new Promise(U=>{function ce(){if(V.forEach(function(he){v.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){U(x);return}setTimeout(ce,10)}ct.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let mh=null;function Xb(x){mh&&mh(x)}function ny(){Yr.stop()}function iy(){Yr.start()}let Yr=new zb;Yr.setAnimationLoop(Xb),typeof self<"u"&&Yr.setContext(self),this.setAnimationLoop=function(x){mh=x,W.setAnimationLoop(x),x===null?Yr.stop():Yr.start()},W.addEventListener("sessionstart",ny),W.addEventListener("sessionend",iy),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;let z=W.enabled===!0&&W.isPresenting===!0,V=y!==null&&(k===null||z)&&y.begin(S,k);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(P),P=W.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,P,k),T=J.get(x,D.length),T.init(P),D.push(T),jt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),We.setFromProjectionMatrix(jt,li,P.reversedDepth),Le=this.localClippingEnabled,Ie=ee.init(this.clippingPlanes,Le),b=Ne.get(x,C.length),b.init(),C.push(b),W.enabled===!0&&W.isPresenting===!0){let he=S.xr.getDepthSensingMesh();he!==null&&gh(he,P,-1/0,S.sortObjects)}gh(x,P,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(At,Ct),Ye=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ye&&xe.addToRenderList(b,x),this.info.render.frame++,Ie===!0&&ee.beginShadows();let U=T.state.shadowsArray;if(ye.render(U,x,P),Ie===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&y.hasRenderPass())===!1){let he=b.opaque,le=b.transmissive;if(T.setupLights(),P.isArrayCamera){let Me=P.cameras;if(le.length>0)for(let Ee=0,He=Me.length;Ee<He;Ee++){let Je=Me[Ee];oy(he,le,x,Je)}Ye&&xe.render(x);for(let Ee=0,He=Me.length;Ee<He;Ee++){let Je=Me[Ee];ry(b,x,Je,Je.viewport)}}else le.length>0&&oy(he,le,x,P),Ye&&xe.render(x),ry(b,x,P)}k!==null&&L===0&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),V&&y.end(S),x.isScene===!0&&x.onAfterRender(S,x,P),te.resetDefaultState(),G=-1,B=null,D.pop(),D.length>0?(T=D[D.length-1],Ie===!0&&ee.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null};function gh(x,P,z,V){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||We.intersectsSprite(x)){V&&ht.setFromMatrixPosition(x.matrixWorld).applyMatrix4(jt);let he=ve.update(x),le=x.material;le.visible&&b.push(x,he,le,z,ht.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||We.intersectsObject(x))){let he=ve.update(x),le=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ht.copy(x.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ht.copy(he.boundingSphere.center)),ht.applyMatrix4(x.matrixWorld).applyMatrix4(jt)),Array.isArray(le)){let Me=he.groups;for(let Ee=0,He=Me.length;Ee<He;Ee++){let Je=Me[Ee],we=le[Je.materialIndex];we&&we.visible&&b.push(x,he,we,z,ht.z,Je)}}else le.visible&&b.push(x,he,le,z,ht.z,null)}}let ce=x.children;for(let he=0,le=ce.length;he<le;he++)gh(ce[he],P,z,V)}function ry(x,P,z,V){let{opaque:U,transmissive:ce,transparent:he}=x;T.setupLightsView(z),Ie===!0&&ee.setGlobalState(S.clippingPlanes,z),V&&Se.viewport(H.copy(V)),U.length>0&&nl(U,P,z),ce.length>0&&nl(ce,P,z),he.length>0&&nl(he,P,z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function oy(x,P,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let we=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new kn(1,1,{generateMipmaps:!0,type:we?Oi:Cn,minFilter:$r,samples:Et.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}let ce=T.state.transmissionRenderTarget[V.id],he=V.viewport||H;ce.setSize(he.z*S.transmissionResolutionScale,he.w*S.transmissionResolutionScale);let le=S.getRenderTarget(),Me=S.getActiveCubeFace(),Ee=S.getActiveMipmapLevel();S.setRenderTarget(ce),S.getClearColor(Z),ue=S.getClearAlpha(),ue<1&&S.setClearColor(16777215,.5),S.clear(),Ye&&xe.render(z);let He=S.toneMapping;S.toneMapping=fi;let Je=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Ie===!0&&ee.setGlobalState(S.clippingPlanes,V),nl(x,z,V),N.updateMultisampleRenderTarget(ce),N.updateRenderTargetMipmap(ce),ct.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let vt=0,Ft=P.length;vt<Ft;vt++){let Rt=P[vt],{object:yt,geometry:cn,material:be,group:In}=Rt;if(be.side===Ni&&yt.layers.test(V.layers)){let ot=be.side;be.side=En,be.needsUpdate=!0,sy(yt,z,V,cn,be,In),be.side=ot,be.needsUpdate=!0,we=!0}}we===!0&&(N.updateMultisampleRenderTarget(ce),N.updateRenderTargetMipmap(ce))}S.setRenderTarget(le,Me,Ee),S.setClearColor(Z,ue),Je!==void 0&&(V.viewport=Je),S.toneMapping=He}function nl(x,P,z){let V=P.isScene===!0?P.overrideMaterial:null;for(let U=0,ce=x.length;U<ce;U++){let he=x[U],{object:le,geometry:Me,group:Ee}=he,He=he.material;He.allowOverride===!0&&V!==null&&(He=V),le.layers.test(z.layers)&&sy(le,P,z,Me,He,Ee)}}function sy(x,P,z,V,U,ce){x.onBeforeRender(S,P,z,V,U,ce),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(S,P,z,V,x,ce),U.transparent===!0&&U.side===Ni&&U.forceSinglePass===!1?(U.side=En,U.needsUpdate=!0,S.renderBufferDirect(z,P,V,U,x,ce),U.side=ar,U.needsUpdate=!0,S.renderBufferDirect(z,P,V,U,x,ce),U.side=Ni):S.renderBufferDirect(z,P,V,U,x,ce),x.onAfterRender(S,P,z,V,U,ce)}function il(x,P,z){P.isScene!==!0&&(P=Mt);let V=v.get(x),U=T.state.lights,ce=T.state.shadowsArray,he=U.state.version,le=re.getParameters(x,U.state,ce,P,z),Me=re.getProgramCacheKey(le),Ee=V.programs;V.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,V.fog=P.fog;let He=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;V.envMap=q.get(x.envMap||V.environment,He),V.envMapRotation=V.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,Ee===void 0&&(x.addEventListener("dispose",pt),Ee=new Map,V.programs=Ee);let Je=Ee.get(Me);if(Je!==void 0){if(V.currentProgram===Je&&V.lightsStateVersion===he)return cy(x,le),Je}else le.uniforms=re.getUniforms(x),x.onBeforeCompile(le,S),Je=re.acquireProgram(le,Me),Ee.set(Me,Je),V.uniforms=le.uniforms;let we=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(we.clippingPlanes=ee.uniform),cy(x,le),V.needsLights=Jb(x),V.lightsStateVersion=he,V.needsLights&&(we.ambientLightColor.value=U.state.ambient,we.lightProbe.value=U.state.probe,we.directionalLights.value=U.state.directional,we.directionalLightShadows.value=U.state.directionalShadow,we.spotLights.value=U.state.spot,we.spotLightShadows.value=U.state.spotShadow,we.rectAreaLights.value=U.state.rectArea,we.ltc_1.value=U.state.rectAreaLTC1,we.ltc_2.value=U.state.rectAreaLTC2,we.pointLights.value=U.state.point,we.pointLightShadows.value=U.state.pointShadow,we.hemisphereLights.value=U.state.hemi,we.directionalShadowMatrix.value=U.state.directionalShadowMatrix,we.spotLightMatrix.value=U.state.spotLightMatrix,we.spotLightMap.value=U.state.spotLightMap,we.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Je,V.uniformsList=null,Je}function ay(x){if(x.uniformsList===null){let P=x.currentProgram.getUniforms();x.uniformsList=ta.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function cy(x,P){let z=v.get(x);z.outputColorSpace=P.outputColorSpace,z.batching=P.batching,z.batchingColor=P.batchingColor,z.instancing=P.instancing,z.instancingColor=P.instancingColor,z.instancingMorph=P.instancingMorph,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphColors=P.morphColors,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents,z.toneMapping=P.toneMapping}function Yb(x,P,z,V,U){P.isScene!==!0&&(P=Mt),N.resetTextureUnits();let ce=P.fog,he=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?P.environment:null,le=k===null?S.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ro,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ee=q.get(V.envMap||he,Me),He=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Je=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),we=!!z.morphAttributes.position,vt=!!z.morphAttributes.normal,Ft=!!z.morphAttributes.color,Rt=fi;V.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Rt=S.toneMapping);let yt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,cn=yt!==void 0?yt.length:0,be=v.get(V),In=T.state.lights;if(Ie===!0&&(Le===!0||x!==B)){let Wt=x===B&&V.id===G;ee.setState(V,x,Wt)}let ot=!1;V.version===be.__version?(be.needsLights&&be.lightsStateVersion!==In.state.version||be.outputColorSpace!==le||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==Ee||V.fog===!0&&be.fog!==ce||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ee.numPlanes||be.numIntersection!==ee.numIntersection)||be.vertexAlphas!==He||be.vertexTangents!==Je||be.morphTargets!==we||be.morphNormals!==vt||be.morphColors!==Ft||be.toneMapping!==Rt||be.morphTargetsCount!==cn)&&(ot=!0):(ot=!0,be.__version=V.version);let Jn=be.currentProgram;ot===!0&&(Jn=il(V,P,U));let mi=!1,Zr=!1,Bo=!1,St=Jn.getUniforms(),Kt=be.uniforms;if(Se.useProgram(Jn.program)&&(mi=!0,Zr=!0,Bo=!0),V.id!==G&&(G=V.id,Zr=!0),mi||B!==x){Se.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),St.setValue(A,"projectionMatrix",x.projectionMatrix),St.setValue(A,"viewMatrix",x.matrixWorldInverse);let fr=St.map.cameraPosition;fr!==void 0&&fr.setValue(A,rt.setFromMatrixPosition(x.matrixWorld)),Et.logarithmicDepthBuffer&&St.setValue(A,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(A,"isOrthographic",x.isOrthographicCamera===!0),B!==x&&(B=x,Zr=!0,Bo=!0)}if(be.needsLights&&(In.state.directionalShadowMap.length>0&&St.setValue(A,"directionalShadowMap",In.state.directionalShadowMap,N),In.state.spotShadowMap.length>0&&St.setValue(A,"spotShadowMap",In.state.spotShadowMap,N),In.state.pointShadowMap.length>0&&St.setValue(A,"pointShadowMap",In.state.pointShadowMap,N)),U.isSkinnedMesh){St.setOptional(A,U,"bindMatrix"),St.setOptional(A,U,"bindMatrixInverse");let Wt=U.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),St.setValue(A,"boneTexture",Wt.boneTexture,N))}U.isBatchedMesh&&(St.setOptional(A,U,"batchingTexture"),St.setValue(A,"batchingTexture",U._matricesTexture,N),St.setOptional(A,U,"batchingIdTexture"),St.setValue(A,"batchingIdTexture",U._indirectTexture,N),St.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&St.setValue(A,"batchingColorTexture",U._colorsTexture,N));let dr=z.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&de.update(U,z,Jn),(Zr||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,St.setValue(A,"receiveShadow",U.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&P.environment!==null&&(Kt.envMapIntensity.value=P.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=JO()),Zr&&(St.setValue(A,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&Zb(Kt,Bo),ce&&V.fog===!0&&Te.refreshFogUniforms(Kt,ce),Te.refreshMaterialUniforms(Kt,V,$e,fe,T.state.transmissionRenderTarget[x.id]),ta.upload(A,ay(be),Kt,N)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ta.upload(A,ay(be),Kt,N),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(A,"center",U.center),St.setValue(A,"modelViewMatrix",U.modelViewMatrix),St.setValue(A,"normalMatrix",U.normalMatrix),St.setValue(A,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Wt=V.uniformsGroups;for(let fr=0,Vo=Wt.length;fr<Vo;fr++){let ly=Wt[fr];pe.update(ly,Jn),pe.bind(ly,Jn)}}return Jn}function Zb(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function Jb(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(x,P,z){let V=v.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),v.get(x.texture).__webglTexture=P,v.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){let z=v.get(x);z.__webglFramebuffer=P,z.__useDefaultFramebuffer=P===void 0};let Kb=A.createFramebuffer();this.setRenderTarget=function(x,P=0,z=0){k=x,I=P,L=z;let V=null,U=!1,ce=!1;if(x){let le=v.get(x);if(le.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(A.FRAMEBUFFER,le.__webglFramebuffer),H.copy(x.viewport),F.copy(x.scissor),Q=x.scissorTest,Se.viewport(H),Se.scissor(F),Se.setScissorTest(Q),G=-1;return}else if(le.__webglFramebuffer===void 0)N.setupRenderTarget(x);else if(le.__hasExternalTextures)N.rebindTextures(x,v.get(x.texture).__webglTexture,v.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let He=x.depthTexture;if(le.__boundDepthTexture!==He){if(He!==null&&v.has(He)&&(x.width!==He.image.width||x.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(x)}}let Me=x.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ce=!0);let Ee=v.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ee[P])?V=Ee[P][z]:V=Ee[P],U=!0):x.samples>0&&N.useMultisampledRTT(x)===!1?V=v.get(x).__webglMultisampledFramebuffer:Array.isArray(Ee)?V=Ee[z]:V=Ee,H.copy(x.viewport),F.copy(x.scissor),Q=x.scissorTest}else H.copy(X).multiplyScalar($e).floor(),F.copy(ne).multiplyScalar($e).floor(),Q=se;if(z!==0&&(V=Kb),Se.bindFramebuffer(A.FRAMEBUFFER,V)&&Se.drawBuffers(x,V),Se.viewport(H),Se.scissor(F),Se.setScissorTest(Q),U){let le=v.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+P,le.__webglTexture,z)}else if(ce){let le=P;for(let Me=0;Me<x.textures.length;Me++){let Ee=v.get(x.textures[Me]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Me,Ee.__webglTexture,z,le)}}else if(x!==null&&z!==0){let le=v.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,le.__webglTexture,z)}G=-1},this.readRenderTargetPixels=function(x,P,z,V,U,ce,he,le=0){if(!(x&&x.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=v.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&he!==void 0&&(Me=Me[he]),Me){Se.bindFramebuffer(A.FRAMEBUFFER,Me);try{let Ee=x.textures[le],He=Ee.format,Je=Ee.type;if(x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+le),!Et.textureFormatReadable(He)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Je)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-V&&z>=0&&z<=x.height-U&&A.readPixels(P,z,V,U,oe.convert(He),oe.convert(Je),ce)}finally{let Ee=k!==null?v.get(k).__webglFramebuffer:null;Se.bindFramebuffer(A.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(x,P,z,V,U,ce,he,le=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=v.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&he!==void 0&&(Me=Me[he]),Me)if(P>=0&&P<=x.width-V&&z>=0&&z<=x.height-U){Se.bindFramebuffer(A.FRAMEBUFFER,Me);let Ee=x.textures[le],He=Ee.format,Je=Ee.type;if(x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+le),!Et.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let we=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,we),A.bufferData(A.PIXEL_PACK_BUFFER,ce.byteLength,A.STREAM_READ),A.readPixels(P,z,V,U,oe.convert(He),oe.convert(Je),0);let vt=k!==null?v.get(k).__webglFramebuffer:null;Se.bindFramebuffer(A.FRAMEBUFFER,vt);let Ft=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await mb(A,Ft,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,we),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ce),A.deleteBuffer(we),A.deleteSync(Ft),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,z=0){let V=Math.pow(2,-z),U=Math.floor(x.image.width*V),ce=Math.floor(x.image.height*V),he=P!==null?P.x:0,le=P!==null?P.y:0;N.setTexture2D(x,0),A.copyTexSubImage2D(A.TEXTURE_2D,z,0,0,he,le,U,ce),Se.unbindTexture()};let Qb=A.createFramebuffer(),eE=A.createFramebuffer();this.copyTextureToTexture=function(x,P,z=null,V=null,U=0,ce=0){let he,le,Me,Ee,He,Je,we,vt,Ft,Rt=x.isCompressedTexture?x.mipmaps[ce]:x.image;if(z!==null)he=z.max.x-z.min.x,le=z.max.y-z.min.y,Me=z.isBox3?z.max.z-z.min.z:1,Ee=z.min.x,He=z.min.y,Je=z.isBox3?z.min.z:0;else{let Kt=Math.pow(2,-U);he=Math.floor(Rt.width*Kt),le=Math.floor(Rt.height*Kt),x.isDataArrayTexture?Me=Rt.depth:x.isData3DTexture?Me=Math.floor(Rt.depth*Kt):Me=1,Ee=0,He=0,Je=0}V!==null?(we=V.x,vt=V.y,Ft=V.z):(we=0,vt=0,Ft=0);let yt=oe.convert(P.format),cn=oe.convert(P.type),be;P.isData3DTexture?(N.setTexture3D(P,0),be=A.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(N.setTexture2DArray(P,0),be=A.TEXTURE_2D_ARRAY):(N.setTexture2D(P,0),be=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,P.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,P.unpackAlignment);let In=A.getParameter(A.UNPACK_ROW_LENGTH),ot=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Jn=A.getParameter(A.UNPACK_SKIP_PIXELS),mi=A.getParameter(A.UNPACK_SKIP_ROWS),Zr=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Rt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Rt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ee),A.pixelStorei(A.UNPACK_SKIP_ROWS,He),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Je);let Bo=x.isDataArrayTexture||x.isData3DTexture,St=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){let Kt=v.get(x),dr=v.get(P),Wt=v.get(Kt.__renderTarget),fr=v.get(dr.__renderTarget);Se.bindFramebuffer(A.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Se.bindFramebuffer(A.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let Vo=0;Vo<Me;Vo++)Bo&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,v.get(x).__webglTexture,U,Je+Vo),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,v.get(P).__webglTexture,ce,Ft+Vo)),A.blitFramebuffer(Ee,He,he,le,we,vt,he,le,A.DEPTH_BUFFER_BIT,A.NEAREST);Se.bindFramebuffer(A.READ_FRAMEBUFFER,null),Se.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(U!==0||x.isRenderTargetTexture||v.has(x)){let Kt=v.get(x),dr=v.get(P);Se.bindFramebuffer(A.READ_FRAMEBUFFER,Qb),Se.bindFramebuffer(A.DRAW_FRAMEBUFFER,eE);for(let Wt=0;Wt<Me;Wt++)Bo?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Kt.__webglTexture,U,Je+Wt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Kt.__webglTexture,U),St?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,dr.__webglTexture,ce,Ft+Wt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,dr.__webglTexture,ce),U!==0?A.blitFramebuffer(Ee,He,he,le,we,vt,he,le,A.COLOR_BUFFER_BIT,A.NEAREST):St?A.copyTexSubImage3D(be,ce,we,vt,Ft+Wt,Ee,He,he,le):A.copyTexSubImage2D(be,ce,we,vt,Ee,He,he,le);Se.bindFramebuffer(A.READ_FRAMEBUFFER,null),Se.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else St?x.isDataTexture||x.isData3DTexture?A.texSubImage3D(be,ce,we,vt,Ft,he,le,Me,yt,cn,Rt.data):P.isCompressedArrayTexture?A.compressedTexSubImage3D(be,ce,we,vt,Ft,he,le,Me,yt,Rt.data):A.texSubImage3D(be,ce,we,vt,Ft,he,le,Me,yt,cn,Rt):x.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ce,we,vt,he,le,yt,cn,Rt.data):x.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ce,we,vt,Rt.width,Rt.height,yt,Rt.data):A.texSubImage2D(A.TEXTURE_2D,ce,we,vt,he,le,yt,cn,Rt);A.pixelStorei(A.UNPACK_ROW_LENGTH,In),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ot),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Jn),A.pixelStorei(A.UNPACK_SKIP_ROWS,mi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Zr),ce===0&&P.generateMipmaps&&A.generateMipmap(be),Se.unbindTexture()},this.initRenderTarget=function(x){v.get(x).__webglFramebuffer===void 0&&N.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?N.setTextureCube(x,0):x.isData3DTexture?N.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?N.setTexture2DArray(x,0):N.setTexture2D(x,0),Se.unbindTexture()},this.resetState=function(){I=0,L=0,k=null,Se.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var QO=["canvas"],qb={0:{desktop:{x:2.4,y:0,wideFactor:.7},mobile:{x:0,y:-1.1},scaleMultiplier:1.4},1:{desktop:{x:0,y:0},mobile:{x:0,y:.2},scaleMultiplier:1},2:{desktop:{x:-2,y:0,wideFactor:.8},mobile:{x:0,y:-1.4},scaleMultiplier:.85},3:{desktop:{x:3,y:0,wideFactor:.7},mobile:{x:0,y:1.5},scaleMultiplier:1.2}},ch={iaiCenter:1,whatsapp:2.8},lh=class n{canvasRef=rn.required("canvas");zone=ie(_n);renderer;scene;camera;businessGroup;particles;flowchartGroup;solutionGroup;whatsappGroup;animFrameId;clock=new Wc;rotX=0;rotY=0;rotXTarget=0;rotYTarget=0;posX=0;posXTarget=0;posY=0;posYTarget=0;scale=1;scaleTarget=1;businessOpacity=1;businessOpacityTarget=1;flowOpacity=0;flowOpacityTarget=0;solutionOpacity=0;solutionOpacityTarget=0;whatsappOpacity=0;whatsappOpacityTarget=0;currentSection=-1;targetSection=-1;ngAfterViewInit(){this.zone.runOutsideAngular(()=>{this.initScene(),this.startRenderLoop(),this.syncSectionState(),window.addEventListener("scroll",this.onScroll,{passive:!0}),window.addEventListener("resize",this.onResize)})}syncSectionState(){let e=window.scrollY+window.innerHeight/2,t=Math.floor(e/window.innerHeight),i=Math.max(0,Math.min(3,t));i!==this.currentSection&&(this.currentSection=i,this.triggerSpinBurst(),this.updateSectionPosition(i))}initScene(){let e=this.canvasRef().nativeElement,t=window.innerWidth,i=window.innerHeight;this.renderer=new oh({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,i,!1),this.scene=new Dc,this.camera=new sn(50,t/i,.1,100),this.camera.position.set(0,0,5.5),this.buildBusinessObject(),this.buildChaosFlowchart(),this.buildSolutionFlowchart(),this.buildWhatsAppObject();let r=350,o=new Float32Array(r*3);for(let l=0;l<r;l++)o[l*3]=(Math.random()-.5)*10,o[l*3+1]=(Math.random()-.5)*10,o[l*3+2]=(Math.random()-.5)*10;let s=new Jt;s.setAttribute("position",new pn(o,3)),this.particles=new Lc(s,new Xs({color:10980346,size:.03,transparent:!0,opacity:.5})),this.scene.add(this.particles),this.scene.add(new jc(1704e3,3));let a=new Ys(8141549,90,20);a.position.set(3,3,4),this.scene.add(a);let c=new Ys(12891645,45,20);c.position.set(-3,-2,2),this.scene.add(c)}buildBusinessObject(){this.businessGroup=new qn;let e=new Xn(2.4,1.6,.4),t=new No({color:4988309,metalness:.6,roughness:.2,transparent:!0,opacity:.95}),i=new Ot(e,t),r=new Xn(2.4,1,.1),o=t.clone();o.color.set(5972406);let s=new Ot(r,o);s.position.set(0,.3,.2),i.add(s);let a=new Bc(.35,.07,16,32,Math.PI),c=new No({color:1973067,metalness:.8}),l=new Ot(a,c);l.position.y=.8,i.add(l);let u=new No({color:16766720,metalness:.9,roughness:.1,emissive:4469504,emissiveIntensity:.2}),d=new Xn(.12,.38,.15),f=new Ot(d,u);f.position.set(-.7,-.15,.25),i.add(f);let h=f.clone();h.position.set(.7,-.15,.25),i.add(h);let g=new Xn(.28,.22,.15),_=new Ot(g,u);_.position.set(0,-.05,.25),i.add(_);let m=new Xn(.15,.15,.15),p=new Ot(m,u);p.position.set(-.35,.8,0),i.add(p);let M=p.clone();M.position.set(.35,.8,0),i.add(M),this.businessGroup.add(i),[{pos:[1.8,1.2,.5],emoji:"\u{1F4BC}"},{pos:[-1.8,-1,.8],emoji:"\u{1F4C8}"},{pos:[1.2,-1.6,-.5],emoji:"\u{1F4B0}"},{pos:[-1.4,1.6,-.3],emoji:"\u{1F3E6}"}].forEach(({pos:b,emoji:T})=>{let C=this.createEmojiSprite(T);C.position.set(...b),C.scale.set(.6,.6,.6),this.businessGroup.add(C)}),this.scene.add(this.businessGroup)}buildChaosFlowchart(){this.flowchartGroup=new qn;let e=[{pos:[-1.6,1.8,-1.2],emoji:"\u{1F464}"},{pos:[0,1.8,.8],emoji:"\u{1F4E7}"},{pos:[1.6,1.6,-1.5],emoji:"\u{1F4C1}"},{pos:[-1.6,.4,1.4],emoji:"\u{1F4E7}"},{pos:[0,.4,-.6],emoji:"\u{1F464}"},{pos:[1.6,.2,1.2],emoji:"\u{1F4C1}"},{pos:[-.8,-.8,-1],emoji:"\u{1F4E7}"},{pos:[.6,-1,.9],emoji:"\u{1F464}"},{pos:[1.6,-.9,-1.4],emoji:"\u{1F4C1}"},{pos:[-.2,-1.9,1.1],emoji:"\u{1F4E7}"}];e.forEach(({pos:r,emoji:o})=>{let s=this.createEmojiSprite(o);s.position.set(...r),s.scale.set(.55,.55,.55),this.flowchartGroup.add(s)});let t=[[0,1],[0,3],[1,2],[1,4],[2,5],[3,4],[4,5],[4,6],[5,8],[6,7],[7,9],[8,9],[2,8],[3,7],[0,4],[1,6],[5,7],[3,9]],i=[16281969,16486972,16436245,10265519];t.forEach(([r,o],s)=>{let a=this.makeArrow(e[r].pos,e[o].pos,i[s%i.length]);this.flowchartGroup.add(a)}),this.scene.add(this.flowchartGroup)}buildSolutionFlowchart(){this.solutionGroup=new qn;let e=[0,0,0],t=this.createIAILogoSprite();t.position.set(...e),t.scale.set(ch.iaiCenter,ch.iaiCenter,1),this.solutionGroup.add(t);let i=[{pos:[-1.4,1.4,-1.2],emoji:"\u{1F464}"},{pos:[0,1.7,1.1],emoji:"\u{1F4E7}"},{pos:[1.4,1.3,-.8],emoji:"\u{1F4C1}"},{pos:[1.8,0,1.4],emoji:"\u{1F464}"},{pos:[1.2,-1.3,-1.1],emoji:"\u{1F4E7}"},{pos:[-.1,-1.7,.9],emoji:"\u{1F4C1}"},{pos:[-1.4,-1.1,-1.4],emoji:"\u{1F464}"},{pos:[-1.8,.1,1.2],emoji:"\u{1F4E7}"}],r=[10980346,8141549,12891645,7153881];i.forEach(({pos:o,emoji:s},a)=>{let c=this.createEmojiSprite(s);c.position.set(...o),c.scale.set(.55,.55,.55),this.solutionGroup.add(c);let l=this.makeArrow(o,e,r[a%r.length]);this.solutionGroup.add(l)}),this.scene.add(this.solutionGroup)}createIAILogoSprite(){let t=document.createElement("canvas");t.width=512,t.height=512;let i=t.getContext("2d"),r=new Vr(t);r.anisotropy=16;let o=new lr({map:r,transparent:!0,depthWrite:!1}),s=new di(o),a=l=>{i.clearRect(0,0,512,512);let u=512/2,d=512/2,f=512*.46,h=i.createRadialGradient(u,d,0,u,d,f);if(h.addColorStop(0,"rgba(25, 25, 50, 1)"),h.addColorStop(1,"rgba(10, 10, 30, 1)"),i.fillStyle=h,i.beginPath(),i.arc(u,d,f,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(30, 94, 243, 0.8)",i.lineWidth=10,i.beginPath(),i.arc(u,d,f-5,0,Math.PI*2),i.stroke(),l){let p=document.createElement("canvas");p.width=512,p.height=512;let M=p.getContext("2d");M.drawImage(l,40.96,40.96,430.08,430.08);let w=M.getImageData(0,0,512,512),b=w.data;for(let T=0;T<b.length;T+=4){let C=b[T],D=b[T+1],y=b[T+2];C>225&&D>225&&y>225?b[T+3]=0:C<100&&D<100&&y<100&&(b[T]=Math.max(C,160),b[T+1]=Math.max(D,160),b[T+2]=Math.max(y,180))}M.putImageData(w,0,0),i.save(),i.beginPath(),i.arc(u,d,f-10,0,Math.PI*2),i.clip(),i.drawImage(p,0,0),i.globalCompositeOperation="screen",i.globalAlpha=.2,i.drawImage(p,0,0),i.restore()}r.needsUpdate=!0};a(null);let c=new Image;return c.onload=()=>a(c),c.src="/logo.png",s}buildWhatsAppObject(){this.whatsappGroup=new qn;let e=this.createWhatsAppLogoSprite();e.scale.set(ch.whatsapp,ch.whatsapp,1),e.position.set(0,0,0),this.whatsappGroup.add(e);for(let t=0;t<4;t++){let i=this.createEmojiSprite("\u{1F4AC}"),r=t/4*Math.PI*2,o=2.4;i.position.set(Math.cos(r)*o,Math.sin(r)*o,(Math.random()-.5)*1.5),i.scale.set(.8,.8,1),this.whatsappGroup.add(i)}this.whatsappGroup.visible=!1,this.scene.add(this.whatsappGroup)}createWhatsAppLogoSprite(){let t=document.createElement("canvas");t.width=512,t.height=512;let i=t.getContext("2d");i.clearRect(0,0,512,512);let r=512/2,o=512*.4;i.save(),i.shadowColor="#22c55e",i.shadowBlur=40;let s=i.createRadialGradient(r,r,o*.1,r,r,o);s.addColorStop(0,"#22c55e"),s.addColorStop(1,"#16a34a"),i.fillStyle=s,i.beginPath(),i.arc(r,r,o,0,Math.PI*2),i.fill(),i.restore();let a=o*.7;i.fillStyle="#ffffff",i.beginPath(),i.arc(r,r,a,0,Math.PI*2),i.fill(),i.beginPath();let c=Math.PI*.65,l=Math.PI*.85,u=Math.PI*.75,d=a*1.35,f=a*.95;i.moveTo(r+Math.cos(c)*f,r+Math.sin(c)*f),i.lineTo(r+Math.cos(u)*d,r+Math.sin(u)*d),i.lineTo(r+Math.cos(l)*f,r+Math.sin(l)*f),i.closePath(),i.fill();let h=new Vr(t);return h.anisotropy=16,new di(new lr({map:h,transparent:!0}))}makeArrow(e,t,i){let r=new O(...e),o=new O(...t),s=new O().subVectors(o,r),a=s.length();s.normalize();let c=.25,l=r.clone().add(s.clone().multiplyScalar(c)),u=Math.max(.1,a-c*2.1),d=Math.min(.2,u*.3),f=d*.5,h=new Zs(s,l,u,i,d,f);return h.line.material.transparent=!0,h.cone.material.transparent=!0,h}createEmojiSprite(e){let i=document.createElement("canvas");i.width=128,i.height=128;let r=i.getContext("2d");r.font=`${Math.round(128*.62)}px serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(e,128/2,128/2);let o=new Vr(i);return new di(new lr({map:o,transparent:!0}))}createTextSprite(e){let i=document.createElement("canvas");i.width=256,i.height=256;let r=i.getContext("2d"),o=r.createRadialGradient(256/2,256/2,10,256/2,256/2,256/2-4);o.addColorStop(0,"rgba(109, 40, 217, 0.9)"),o.addColorStop(1,"rgba(76, 29, 149, 0.6)"),r.fillStyle=o,r.beginPath(),r.arc(256/2,256/2,256/2-4,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(167, 139, 250, 0.9)",r.lineWidth=6,r.stroke(),r.fillStyle="#ffffff",r.font=`bold ${Math.round(256*.22)}px monospace`,r.textAlign="center",r.textBaseline="middle",r.fillText(e,256/2,256/2);let s=new Vr(i);return new di(new lr({map:s,transparent:!0}))}applyGroupOpacity(e,t){e.visible=t>.01,e.visible&&e.traverse(i=>{i instanceof di?i.material.opacity=t:i instanceof Zs&&(i.line.material.opacity=t*.5,i.cone.material.opacity=t*.75)})}applyBusinessOpacity(e){this.businessGroup.visible=e>.01,this.businessGroup.visible&&this.businessGroup.traverse(t=>{t instanceof di?t.material.opacity=e:t instanceof Ot&&(t.material.opacity=e*.95)})}startRenderLoop(){let i=()=>{this.animFrameId=requestAnimationFrame(i);let r=this.clock.getElapsedTime();this.rotX+=(this.rotXTarget-this.rotX)*.075,this.rotY+=(this.rotYTarget-this.rotY)*.075,this.posX+=(this.posXTarget-this.posX)*.075,this.posY+=(this.posYTarget-this.posY)*.075,this.scale+=(this.scaleTarget-this.scale)*.075,this.businessGroup.rotation.y=this.rotY+r*.4,this.businessGroup.rotation.x=this.rotX+Math.sin(r*.4)*.1,this.businessGroup.position.x=this.posX,this.businessGroup.position.y=this.posY+Math.sin(r*.45)*.14,this.businessGroup.scale.setScalar(this.scale),this.flowchartGroup.rotation.y=this.rotY+r*.18,this.flowchartGroup.rotation.x=this.rotX+Math.sin(r*.3)*.08,this.flowchartGroup.position.x=this.posX,this.flowchartGroup.position.y=this.posY+Math.sin(r*.4)*.1,this.flowchartGroup.scale.setScalar(this.scale*.9),this.solutionGroup.rotation.y=this.rotY+r*.12,this.solutionGroup.rotation.x=this.rotX+Math.sin(r*.25)*.06,this.solutionGroup.position.x=this.posX,this.solutionGroup.position.y=this.posY+Math.sin(r*.35)*.12,this.solutionGroup.scale.setScalar(this.scale),this.whatsappGroup.rotation.y=this.rotY+r*.3,this.whatsappGroup.rotation.x=this.rotX+Math.sin(r*.35)*.1,this.whatsappGroup.position.x=this.posX,this.whatsappGroup.position.y=this.posY+Math.sin(r*.4)*.12,this.whatsappGroup.scale.setScalar(this.scale),this.businessOpacity<.05&&this.flowOpacity<.05&&this.solutionOpacity<.05&&this.whatsappOpacity<.05&&(this.targetSection===0?this.businessOpacityTarget=1:this.targetSection===1?this.flowOpacityTarget=1:this.targetSection===2?this.solutionOpacityTarget=1:this.targetSection===3&&(this.whatsappOpacityTarget=1)),this.businessOpacity+=(this.businessOpacityTarget-this.businessOpacity)*.07,this.flowOpacity+=(this.flowOpacityTarget-this.flowOpacity)*.07,this.solutionOpacity+=(this.solutionOpacityTarget-this.solutionOpacity)*.07,this.whatsappOpacity+=(this.whatsappOpacityTarget-this.whatsappOpacity)*.07,this.applyBusinessOpacity(this.businessOpacity),this.applyGroupOpacity(this.flowchartGroup,this.flowOpacity),this.applyGroupOpacity(this.solutionGroup,this.solutionOpacity),this.whatsappGroup.visible=this.whatsappOpacity>.01,this.whatsappGroup.visible&&this.whatsappGroup.traverse(o=>{o instanceof di?o.material.opacity=this.whatsappOpacity:o instanceof Ot&&(o.material.opacity=this.whatsappOpacity*.95)}),this.particles.rotation.y=r*.035,this.particles.rotation.x=r*.018,this.renderer.render(this.scene,this.camera)};i()}onScroll=()=>{this.syncSectionState()};updateSectionPosition(e){this.targetSection=e;let t=window.innerWidth,i=window.innerHeight,r=t/i,o=t<=768||i>t,s=qb[e]||qb[0];if(r<1?this.scaleTarget=r*s.scaleMultiplier:this.scaleTarget=1,this.businessOpacityTarget=e===0?1:0,this.flowOpacityTarget=e===1?1:0,this.solutionOpacityTarget=e===2?1:0,this.whatsappOpacityTarget=e===3?1:0,o)this.posXTarget=s.mobile.x,this.posYTarget=s.mobile.y;else{let a=r>2&&s.desktop.wideFactor?s.desktop.wideFactor:1;this.posXTarget=s.desktop.x*a,this.posYTarget=s.desktop.y}}triggerSpinBurst(){this.rotXTarget+=Math.PI*2,this.rotYTarget+=Math.PI*2}onResize=()=>{let e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.syncSectionState()};ngOnDestroy(){cancelAnimationFrame(this.animFrameId),window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize),this.renderer.dispose()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Mn({type:n,selectors:[["app-three-scene"]],viewQuery:function(t,i){t&1&&bi(i.canvasRef,QO,5),t&2&&Ji()},decls:2,vars:0,consts:[["canvas",""],["aria-hidden","true","role","presentation",1,"three-canvas"]],template:function(t,i){t&1&&gt(0,"canvas",1,0)},styles:["[_nghost-%COMP%]{display:block;position:fixed;inset:0;z-index:0;pointer-events:none}.three-canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%}"],changeDetection:0})};var eL=["content"],uh=class n{contentRef=rn("content");ngAfterViewInit(){let e=this.contentRef()?.nativeElement;e&&setTimeout(()=>e.classList.add("visible"),50)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Mn({type:n,selectors:[["app-hero"]],viewQuery:function(t,i){t&1&&bi(i.contentRef,eL,5),t&2&&Ji()},decls:26,vars:0,consts:[["content",""],["aria-label","Secci\xF3n principal",1,"section","hero-section"],["aria-hidden","true",1,"section-backdrop"],[1,"grid-overlay","hero-grid"],[1,"orb","orb-1"],[1,"orb","orb-2"],[1,"hero-layout"],[1,"hero-content","animate-on-scroll"],[1,"hero-eyebrow"],[1,"hero-title"],[1,"hero-highlight"],[1,"hero-subtitle"],["aria-label","Scrolle\xE1 para ver m\xE1s",1,"scroll-hint"],[1,"scroll-text"],[1,"scroll-arrow"],["width","24","height","24","viewBox","0 0 24 24","fill","none","aria-hidden","true"],["d","M12 5v14M5 12l7 7 7-7","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["aria-hidden","true",1,"hero-right"]],template:function(t,i){t&1&&(Oe(0,"section",1)(1,"div",2),gt(2,"div",3)(3,"div",4)(4,"div",5),Ge(),Oe(5,"div",6)(6,"div",7,0)(8,"p",8),Ae(9,"Hola!"),Ge(),Oe(10,"h1",9),Ae(11," \xBFTen\xE9s un"),gt(12,"br"),Oe(13,"span",10),Ae(14,"negocio?"),Ge()(),Oe(15,"p",11),Ae(16," Sabemos lo complicado que es aceitar los procesos de una empresa."),gt(17,"br"),Ae(18," Y podemos ayudarte. "),Ge(),Oe(19,"div",12)(20,"span",13),Ae(21,"Scrolle\xE1 para ver"),Ge(),Oe(22,"div",14),Zl(),Oe(23,"svg",15),gt(24,"path",16),Ge()()()(),Jl(),gt(25,"div",17),Ge()())},styles:[".hero-section[_ngcontent-%COMP%]{background:transparent;position:relative;overflow:hidden}.section-backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0}.hero-grid[_ngcontent-%COMP%]{-webkit-mask-image:radial-gradient(ellipse 100% 100% at 0% 50%,black 30%,transparent 80%);mask-image:radial-gradient(ellipse 100% 100% at 0% 50%,black 30%,transparent 80%)}.orb[_ngcontent-%COMP%]{position:absolute;border-radius:50%;filter:blur(100px)}.orb-1[_ngcontent-%COMP%]{width:400px;height:400px;background:radial-gradient(circle,rgba(124,58,237,.14) 0%,transparent 70%);top:-100px;left:-80px}.orb-2[_ngcontent-%COMP%]{width:260px;height:260px;background:radial-gradient(circle,rgba(79,70,229,.12) 0%,transparent 70%);bottom:10%;left:20%}.hero-layout[_ngcontent-%COMP%]{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;align-items:center;width:100%;max-width:1600px;padding:2rem 3rem;height:100%}.hero-right[_ngcontent-%COMP%]{height:100%}@media(max-width:768px),(orientation:portrait){.hero-layout[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:auto 1fr;padding:4rem 1.5rem 2rem;text-align:center;align-items:flex-start}.hero-title[_ngcontent-%COMP%]{font-size:clamp(2rem,10vw,3.5rem)}.hero-subtitle[_ngcontent-%COMP%]{margin-bottom:1.5rem;font-size:clamp(.95rem,4vw,1.15rem)}.hero-right[_ngcontent-%COMP%]{min-height:40vh}.hero-grid[_ngcontent-%COMP%]{-webkit-mask-image:radial-gradient(circle at 50% 25%,black 40%,transparent 90%);mask-image:radial-gradient(circle at 50% 25%,black 40%,transparent 90%)}.scroll-hint[_ngcontent-%COMP%]{margin:.5rem auto 0}}.hero-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}@media(max-width:768px){.hero-content[_ngcontent-%COMP%]{align-items:center}}.animate-on-scroll[_ngcontent-%COMP%]{opacity:0;transform:translateY(40px);transition:opacity 1s cubic-bezier(.22,1,.36,1),transform 1s cubic-bezier(.22,1,.36,1)}.animate-on-scroll.visible[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.hero-eyebrow[_ngcontent-%COMP%]{display:inline-block;font-size:.82rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--color-accent);border:1px solid rgba(167,139,250,.3);padding:.35rem 1rem;border-radius:999px;margin-bottom:1.5rem;background:#7c3aed1a}.hero-title[_ngcontent-%COMP%]{font-size:clamp(2.8rem,7vw,5.5rem);font-weight:900;line-height:1.05;letter-spacing:-.03em;color:var(--color-text);margin-bottom:1.5rem;overflow-wrap:break-word;word-break:break-word;text-shadow:0 0 10px rgba(10,10,18,.95),0 0 20px rgba(10,10,18,.8),0 4px 30px rgba(10,10,18,.8)}.hero-highlight[_ngcontent-%COMP%]{background:linear-gradient(135deg,#a78bfa,#7c3aed,#c4b5fd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-shadow:none}.hero-subtitle[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw,1.15rem);font-weight:300;color:var(--color-muted);line-height:1.75;margin-bottom:3rem;max-width:420px}.scroll-hint[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.5rem;color:var(--color-muted);animation:_ngcontent-%COMP%_bounce-hint 2.4s ease-in-out infinite}.scroll-text[_ngcontent-%COMP%]{font-size:.72rem;letter-spacing:.12em;text-transform:uppercase}.scroll-arrow[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border:1px solid rgba(144,144,176,.25);border-radius:50%}@keyframes _ngcontent-%COMP%_bounce-hint{0%,to{transform:translateY(0);opacity:.55}50%{transform:translateY(7px);opacity:1}}"],changeDetection:0})};var dh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Mn({type:n,selectors:[["app-complex-flow"]],decls:29,vars:0,consts:[["header",""],["subtitle",""],["aria-label","Secci\xF3n de flujo de trabajo complejo",1,"section","complex-flow-section"],["aria-hidden","true",1,"section-backdrop"],[1,"grid-overlay","complex-grid"],[1,"section-layout"],[1,"section-header","section-left"],[1,"section-eyebrow"],[1,"section-title"],[1,"text-danger"],["aria-hidden","true",1,"section-center"],[1,"section-right"],[1,"section-title","section-title-right"],[1,"section-subtitle"]],template:function(t,i){t&1&&(Oe(0,"section",2)(1,"div",3),gt(2,"div",4),Ge(),Oe(3,"div",5)(4,"div",6,0)(6,"p",7),Ae(7,"Te pasa que..."),Ge(),Oe(8,"h2",8),Ae(9," \xBFTu flujo"),gt(10,"br"),Oe(11,"span",9),Ae(12,"de trabajo"),Ge()()(),gt(13,"div",10),Oe(14,"div",11,1)(16,"h2",12),Ae(17," es muy"),gt(18,"br"),Oe(19,"span",9),Ae(20,"lento?"),Ge()(),Oe(21,"p",13),Ae(22," \xBFSent\xEDs que te falta un sistema?"),gt(23,"br"),Ae(24," \xBFO tal vez ten\xE9s demasiados y ninguno se conecta?"),gt(25,"br"),Ae(26," \xBFLas aprobaciones tardan horas?"),gt(27,"br"),Ae(28," \xBFTen\xE9s una idea y quer\xE9s hacerla realidad? "),Ge()()()())},styles:[".complex-flow-section[_ngcontent-%COMP%]{padding:2rem;position:relative;overflow:hidden}.complex-grid[_ngcontent-%COMP%]{-webkit-mask-image:linear-gradient(90deg,black 0%,black 28%,transparent 45%,transparent 55%,black 72%,black 100%);mask-image:linear-gradient(90deg,black 0%,black 28%,transparent 45%,transparent 55%,black 72%,black 100%)}.section-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;width:100%;max-width:1800px;height:100%;gap:2rem;padding:0 2rem}.section-left[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.section-eyebrow[_ngcontent-%COMP%]{display:inline-block;font-size:.82rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--color-danger);border:1px solid rgba(248,113,113,.3);padding:.3rem 1rem;border-radius:999px;margin-bottom:1.25rem;background:#f8717114}.section-title[_ngcontent-%COMP%]{font-size:clamp(2.8rem,7vw,5.5rem);font-weight:900;line-height:1.1;letter-spacing:-.02em;color:var(--color-text);margin-bottom:0;overflow-wrap:break-word;word-break:break-word;text-shadow:0 0 10px rgba(10,10,18,.95),0 0 20px rgba(10,10,18,.8),0 4px 30px rgba(10,10,18,.8)}.text-danger[_ngcontent-%COMP%]{color:var(--color-danger)}.section-right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;text-align:right}.section-title-right[_ngcontent-%COMP%]{margin-bottom:1.25rem}.section-subtitle[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw,1.15rem);color:var(--color-muted);line-height:1.7;text-align:right}@media(max-width:900px),(orientation:portrait){.section-layout[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:auto 1fr auto;padding:2rem 1.5rem 1rem;text-align:center;gap:1rem}.section-title[_ngcontent-%COMP%]{font-size:clamp(2rem,10vw,3.5rem)}.section-center[_ngcontent-%COMP%]{min-height:30vh;order:2}.section-left[_ngcontent-%COMP%]{align-items:center;order:1}.section-eyebrow[_ngcontent-%COMP%]{margin-bottom:.5rem}.section-right[_ngcontent-%COMP%]{align-items:center;text-align:center;order:3}.section-title-right[_ngcontent-%COMP%]{margin-bottom:.5rem}.section-subtitle[_ngcontent-%COMP%]{text-align:center;font-size:clamp(.95rem,4vw,1.15rem);line-height:1.4}.complex-grid[_ngcontent-%COMP%]{-webkit-mask-image:radial-gradient(circle at 50% 50%,black 40%,transparent 90%);mask-image:radial-gradient(circle at 50% 50%,black 40%,transparent 90%)}}@media(min-width:901px)and (orientation:landscape){.section-left[_ngcontent-%COMP%]{align-self:start;margin-top:10vh}.section-right[_ngcontent-%COMP%]{align-self:end;margin-bottom:10vh}}"],changeDetection:0})};var tL=["flowCanvas"],nL=["step1"],iL=["step2"],rL=["aiStep"],oL=["step4"],sL=["step5"],aL=["conn1"],cL=["conn2"],lL=["conn3"],uL=["conn4"],fh=class n{flowCanvasRef=rn("flowCanvas");step1Ref=rn("step1");step2Ref=rn("step2");aiStepRef=rn("aiStep");step4Ref=rn("step4");step5Ref=rn("step5");conn1Ref=rn("conn1");conn2Ref=rn("conn2");conn3Ref=rn("conn3");conn4Ref=rn("conn4");observer;ngAfterViewInit(){let e=this.flowCanvasRef()?.nativeElement;if(e){let t=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&(this.animateSteps(),t.unobserve(r.target))})},{threshold:.1,root:null});t.observe(e)}}animateSteps(){[this.step1Ref()?.nativeElement,this.conn1Ref()?.nativeElement,this.step2Ref()?.nativeElement,this.conn2Ref()?.nativeElement,this.aiStepRef()?.nativeElement,this.conn3Ref()?.nativeElement,this.step4Ref()?.nativeElement,this.conn4Ref()?.nativeElement,this.step5Ref()?.nativeElement].forEach((t,i)=>{t&&setTimeout(()=>{t.classList.add(t.classList.contains("flow-connector")?"conn-visible":"step-visible")},i*160)})}ngOnDestroy(){this.observer?.disconnect()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Mn({type:n,selectors:[["app-simple-flow"]],viewQuery:function(t,i){t&1&&bi(i.flowCanvasRef,tL,5)(i.step1Ref,nL,5)(i.step2Ref,iL,5)(i.aiStepRef,rL,5)(i.step4Ref,oL,5)(i.step5Ref,sL,5)(i.conn1Ref,aL,5)(i.conn2Ref,cL,5)(i.conn3Ref,lL,5)(i.conn4Ref,uL,5),t&2&&Ji(10)},decls:46,vars:0,consts:[["header",""],["badge",""],["aria-label","Secci\xF3n de flujo de trabajo simplificado con IA",1,"section","simple-flow-section"],["aria-hidden","true",1,"section-backdrop"],[1,"grid-overlay","simple-grid"],[1,"section-layout"],["aria-hidden","true",1,"section-left"],[1,"section-content"],[1,"section-header"],[1,"section-eyebrow"],[1,"section-title"],[1,"text-accent"],[1,"section-subtitle"],[1,"comparison-row"],[1,"comparison-badge"],[1,"material-symbols-outlined","badge-icon"]],template:function(t,i){t&1&&(Oe(0,"section",2)(1,"div",3),gt(2,"div",4),Ge(),Oe(3,"div",5),gt(4,"div",6),Oe(5,"div",7)(6,"div",8,0)(8,"p",9),Ae(9,"En Factor IA"),Ge(),Oe(10,"h2",10),Ae(11," \xA1Podemos"),gt(12,"br"),Oe(13,"span",11),Ae(14,"ayudarte a"),gt(15,"br"),Ae(16,"mejorarlo!"),Ge()(),Oe(17,"p",12),Ae(18," Desarrollamos sistemas a medida."),gt(19,"br"),Ae(20," Mejoramos y automatizamos procesos con IA."),gt(21,"br"),Ae(22," Somos tu nuevo socio tecnol\xF3gico. "),Ge()(),Oe(23,"div",13,1)(25,"div",14)(26,"span",15),Ae(27,"bolt"),Ge(),Oe(28,"span"),Ae(29,"De horas a "),Oe(30,"strong"),Ae(31,"segundos"),Ge()()(),Oe(32,"div",14)(33,"span",15),Ae(34,"track_changes"),Ge(),Oe(35,"span"),Ae(36,"Disminuimos el riesgo de "),Oe(37,"strong"),Ae(38,"error humano"),Ge()()(),Oe(39,"div",14)(40,"span",15),Ae(41,"autorenew"),Ge(),Oe(42,"span")(43,"strong"),Ae(44,"Optimizamos"),Ge(),Ae(45," tus procesos"),Ge()()()()()())},styles:[".simple-flow-section[_ngcontent-%COMP%]{padding:2rem;position:relative;overflow:hidden}.simple-grid[_ngcontent-%COMP%]{-webkit-mask-image:radial-gradient(ellipse 100% 100% at 100% 50%,black 30%,transparent 80%);mask-image:radial-gradient(ellipse 100% 100% at 100% 50%,black 30%,transparent 80%)}.section-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.2fr 1fr;align-items:center;width:100%;max-width:1800px;height:100%;gap:3rem;padding:0 2rem}.section-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem;align-items:flex-end;text-align:right;justify-content:center}.section-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.section-eyebrow[_ngcontent-%COMP%]{display:inline-block;font-size:.82rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--color-accent);border:1px solid rgba(167,139,250,.3);padding:.3rem 1rem;border-radius:999px;margin-bottom:1.25rem;background:#7c3aed1a}.section-title[_ngcontent-%COMP%]{font-size:clamp(2.8rem,7vw,5.5rem);font-weight:900;line-height:1.1;letter-spacing:-.02em;color:var(--color-text);margin-bottom:1rem;overflow-wrap:break-word;word-break:break-word;text-shadow:0 0 10px rgba(10,10,18,.95),0 0 20px rgba(10,10,18,.8),0 4px 30px rgba(10,10,18,.8)}.text-accent[_ngcontent-%COMP%]{color:var(--color-accent)}.section-subtitle[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw,1.15rem);color:var(--color-muted);line-height:1.7}.flow-canvas[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-wrap:wrap;gap:0;row-gap:1.5rem;width:100%}.flow-step[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.75rem;opacity:0;transform:translateY(24px) scale(.92);transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1)}.flow-step.step-visible[_ngcontent-%COMP%]{opacity:1;transform:translateY(0) scale(1)}.step-node[_ngcontent-%COMP%]{width:68px;height:68px;border-radius:18px;display:flex;align-items:center;justify-content:center;background:#ffffff0a;border:1.5px solid rgba(255,255,255,.1);color:var(--color-muted);transition:border-color .3s,box-shadow .3s}.step-node.step-normal[_ngcontent-%COMP%]{color:var(--color-accent);border-color:#a78bfa40}.step-node.step-success[_ngcontent-%COMP%]{color:var(--color-success);border-color:#34d3994d}.step-label[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;color:var(--color-muted);text-align:center;letter-spacing:.04em;text-transform:uppercase}.ai-step[_ngcontent-%COMP%]{position:relative;transform:translateY(24px) scale(.92)}.ai-glow-ring[_ngcontent-%COMP%]{position:absolute;top:-14px;left:50%;translate:-50% 0;width:100px;height:100px;border-radius:50%;background:var(--color-primary-glow);filter:blur(28px);animation:_ngcontent-%COMP%_ai-pulse 2.6s ease-in-out infinite;pointer-events:none;opacity:0;transition:opacity .8s ease 1s}.ai-step.step-visible[_ngcontent-%COMP%]   .ai-glow-ring[_ngcontent-%COMP%]{opacity:1}@keyframes _ngcontent-%COMP%_ai-pulse{0%,to{transform:scale(1);opacity:.7}50%{transform:scale(1.25);opacity:1}}.step-node.step-ai[_ngcontent-%COMP%]{width:86px;height:86px;border-radius:50%;background:linear-gradient(135deg,#4c1d95,#7c3aed);border:2px solid var(--color-primary);box-shadow:0 0 0 6px #7c3aed26,0 0 32px #7c3aed66;color:#fff;font-weight:900}.ai-label-icon[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:900;letter-spacing:-.04em;color:#fff}.ai-text[_ngcontent-%COMP%]{color:var(--color-accent);font-weight:700}.flow-connector[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 4px 30px;opacity:0;transition:opacity .5s ease}.flow-connector.conn-visible[_ngcontent-%COMP%]{opacity:1}.connector-line[_ngcontent-%COMP%]{width:32px;height:2px;background:linear-gradient(90deg,#7c3aed4d,#a78bfab3)}.connector-arrow[_ngcontent-%COMP%]{font-size:10px;color:var(--color-accent);opacity:.8}.comparison-row[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-wrap:wrap;justify-content:flex-end}.comparison-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;padding:.65rem 1.1rem;background:#7c3aed14;border:1px solid rgba(124,58,237,.2);border-radius:12px;font-size:.85rem;color:var(--color-muted);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);text-shadow:0 0 8px rgba(10,10,18,.9),0 2px 12px rgba(10,10,18,.8)}.comparison-badge[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--color-accent);text-shadow:0 0 8px rgba(10,10,18,.9),0 2px 12px rgba(10,10,18,.8)}.badge-icon[_ngcontent-%COMP%]{font-size:1.2rem;color:var(--color-accent)}.delay-2[_ngcontent-%COMP%]{transition-delay:.2s}.delay-4[_ngcontent-%COMP%]{transition-delay:.4s}@media(max-width:900px),(orientation:portrait){.section-layout[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:1fr auto;padding:2rem 1.5rem 4rem;gap:1.5rem}.section-title[_ngcontent-%COMP%]{font-size:clamp(2rem,10vw,3.5rem)}.section-left[_ngcontent-%COMP%]{order:2;min-height:48vh}.section-content[_ngcontent-%COMP%]{order:1;align-items:center;text-align:center}.section-subtitle[_ngcontent-%COMP%]{font-size:clamp(.95rem,4vw,1.15rem)}.section-header[_ngcontent-%COMP%]{align-items:center}.flow-canvas[_ngcontent-%COMP%], .comparison-row[_ngcontent-%COMP%]{justify-content:center}.simple-grid[_ngcontent-%COMP%]{-webkit-mask-image:radial-gradient(circle at 50% 25%,black 40%,transparent 90%);mask-image:radial-gradient(circle at 50% 25%,black 40%,transparent 90%)}}"],changeDetection:0})};var dL=["content"],hh=class n{contentRef=rn("content");ngAfterViewInit(){let e=this.contentRef()?.nativeElement;e&&setTimeout(()=>e.classList.add("visible"),50)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Mn({type:n,selectors:[["app-contact"]],viewQuery:function(t,i){t&1&&bi(i.contentRef,dL,5),t&2&&Ji()},decls:35,vars:0,consts:[["content",""],["aria-label","Secci\xF3n de contacto",1,"section","contact-section"],["aria-hidden","true",1,"section-backdrop"],[1,"grid-overlay","contact-grid"],[1,"orb","orb-contact"],[1,"contact-layout"],[1,"contact-content","animate-on-scroll"],[1,"contact-eyebrow"],[1,"contact-title"],[1,"text-accent"],[1,"contact-description"],[1,"contact-actions"],["href","https://wa.me/5491172393213?text=Hola!","target","_blank",1,"cta-button"],[1,"material-symbols-outlined","cta-icon"],["aria-hidden","true",1,"contact-right"]],template:function(t,i){t&1&&(Oe(0,"section",1)(1,"div",2),gt(2,"div",3)(3,"div",4),Ge(),Oe(4,"div",5)(5,"div",6,0)(7,"p",7),Ae(8,"Ponete en Contacto"),Ge(),Oe(9,"h2",8),Ae(10," \xBFQuer\xE9s que"),gt(11,"br"),Oe(12,"span",9),Ae(13,"trabajemos juntos?"),Ge()(),Oe(14,"div",10)(15,"p"),Ae(16,"Comunicate con "),Oe(17,"strong"),Ae(18,"FactOS"),Ge(),Ae(19,"."),Ge(),Oe(20,"p"),Ae(21,"Nuestro asistente virtual atiende las 24 horas del d\xEDa, los 7 d\xEDas de la semana."),Ge(),Oe(22,"p"),Ae(23,"Preguntale todo lo que necesites, que no le molesta."),Ge(),Oe(24,"p"),Ae(25,"\xC9l te ayudar\xE1 a "),Oe(26,"strong"),Ae(27,"agendar una cita"),Ge(),Ae(28," con nuestro equipo."),Ge()(),Oe(29,"div",11)(30,"a",12)(31,"span",13),Ae(32,"chat"),Ge(),Ae(33," Haz click aqu\xED "),Ge()()(),gt(34,"div",14),Ge()())},styles:[".contact-section[_ngcontent-%COMP%]{position:relative;padding:0 5%;display:flex;align-items:center;background:transparent}.contact-layout[_ngcontent-%COMP%]{width:100%;max-width:1600px;margin:0 auto;display:grid;grid-template-columns:1.2fr 1fr;gap:4rem;align-items:center;z-index:2}.contact-content[_ngcontent-%COMP%]{opacity:0;transform:translateY(30px);transition:all .8s cubic-bezier(.2,.8,.2,1)}.contact-content.visible[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.contact-eyebrow[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;text-transform:uppercase;letter-spacing:.15em;color:var(--color-accent);margin-bottom:1rem}.contact-title[_ngcontent-%COMP%]{font-size:clamp(2.5rem,5vw,4.5rem);line-height:1.1;font-weight:900;margin-bottom:2rem;color:var(--color-text);-webkit-text-stroke:0;text-shadow:0 0 10px rgba(10,10,18,.95),0 0 20px rgba(10,10,18,.8),0 4px 30px rgba(10,10,18,.8)}.contact-description[_ngcontent-%COMP%]{font-size:clamp(1.1rem,1.5vw,1.3rem);line-height:1.6;color:var(--color-muted);margin-bottom:2.5rem;max-width:550px}.contact-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:1rem}.contact-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--color-text)}.contact-actions[_ngcontent-%COMP%]{display:flex;gap:1.5rem}.cta-button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.8rem;padding:1rem 2rem;background:var(--color-primary);color:#fff;text-decoration:none;border-radius:50px;font-weight:600;font-size:1.1rem;transition:all .3s ease;box-shadow:0 4px 15px #7c3aed4d}.cta-button[_ngcontent-%COMP%]:hover{background:#6d28d9;transform:translateY(-2px);box-shadow:0 6px 20px #7c3aed66}.cta-icon[_ngcontent-%COMP%]{font-size:1.4rem}.orb-contact[_ngcontent-%COMP%]{position:absolute;top:30%;right:10%;width:400px;height:400px;background:radial-gradient(circle,rgba(34,197,94,.1) 0%,transparent 70%);filter:blur(60px);z-index:1}@media(orientation:portrait),(max-width:768px){.contact-layout[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:1fr auto;gap:2rem;text-align:center;padding-bottom:4rem}.contact-title[_ngcontent-%COMP%]{font-size:clamp(2rem,10vw,3.5rem)}.contact-content[_ngcontent-%COMP%]{order:2;display:flex;flex-direction:column;align-items:center}.contact-right[_ngcontent-%COMP%]{order:1;min-height:35vh}.contact-description[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-bottom:1rem;font-size:clamp(.95rem,4vw,1.15rem)}.contact-actions[_ngcontent-%COMP%]{justify-content:center}}"],changeDetection:0})};var ph=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Mn({type:n,selectors:[["app-root"]],decls:6,vars:0,template:function(t,i){t&1&&(yo(0,"app-three-scene"),$a(1,"main"),yo(2,"app-hero")(3,"app-complex-flow")(4,"app-simple-flow")(5,"app-contact"),qa())},dependencies:[lh,uh,dh,fh,hh],styles:["main[_ngcontent-%COMP%]{position:relative;z-index:1;display:flex;flex-direction:column}"],changeDetection:0})};Ym(ph,cS).catch(n=>console.error(n));
