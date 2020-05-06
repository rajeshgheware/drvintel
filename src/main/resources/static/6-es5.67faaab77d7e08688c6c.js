function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_superPropBase(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{qoJi:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),o=n("3Pt+"),i=n("tyNb"),s=n("McNs"),c=n("fXoL"),a=n("aceb");function l(e,t){if(1&e&&(c.Wb(0,"li",24),c.Bc(1),c.Vb()),2&e){var n=t.$implicit;c.Eb(1),c.Cc(n)}}function u(e,t){if(1&e&&(c.Wb(0,"nb-alert",20),c.Wb(1,"p",21),c.Wb(2,"b"),c.Bc(3,"Oh snap!"),c.Vb(),c.Vb(),c.Wb(4,"ul",22),c.zc(5,l,2,1,"li",23),c.Vb(),c.Vb()),2&e){var n=c.gc();c.Eb(5),c.mc("ngForOf",n.errors)}}function b(e,t){if(1&e&&(c.Wb(0,"li",24),c.Bc(1),c.Vb()),2&e){var n=t.$implicit;c.Eb(1),c.Cc(n)}}function g(e,t){if(1&e&&(c.Wb(0,"nb-alert",25),c.Wb(1,"p",21),c.Wb(2,"b"),c.Bc(3,"Hooray!"),c.Vb(),c.Vb(),c.Wb(4,"ul",22),c.zc(5,b,2,1,"li",23),c.Vb(),c.Vb()),2&e){var n=c.gc();c.Eb(5),c.mc("ngForOf",n.messages)}}function f(e,t){1&e&&(c.Wb(0,"p",27),c.Bc(1," Email is required! "),c.Vb())}function p(e,t){if(1&e&&(c.Ub(0),c.zc(1,f,2,0,"p",26),c.Tb()),2&e){c.gc();var n=c.rc(12);c.Eb(1),c.mc("ngIf",null==n.errors?null:n.errors.required)}}function d(e,t){1&e&&(c.Wb(0,"p",27),c.Bc(1," Password is required! "),c.Vb())}function h(e,t){if(1&e&&(c.Wb(0,"p",27),c.Bc(1),c.Vb()),2&e){var n=c.gc(2);c.Eb(1),c.Ec(" Password should contains from ",n.getConfigValue("forms.validation.password.minLength")," to ",n.getConfigValue("forms.validation.password.maxLength")," characters ")}}function m(e,t){if(1&e&&(c.Ub(0),c.zc(1,d,2,0,"p",26),c.zc(2,h,2,2,"p",26),c.Tb()),2&e){c.gc();var n=c.rc(18);c.Eb(1),c.mc("ngIf",null==n.errors?null:n.errors.required),c.Eb(1),c.mc("ngIf",(null==n.errors?null:n.errors.minlength)||(null==n.errors?null:n.errors.maxlength))}}function v(e,t){if(1&e){var n=c.Xb();c.Wb(0,"nb-checkbox",28),c.ec("ngModelChange",(function(e){return c.tc(n),c.gc().user.rememberMe=e})),c.Bc(1,"Remember me"),c.Vb()}if(2&e){var r=c.gc();c.mc("ngModel",r.user.rememberMe)}}function y(e,t){if(1&e&&(c.Wb(0,"a",34),c.Bc(1),c.Vb()),2&e){var n=c.gc().$implicit;c.Hb("with-icon",n.icon),c.mc("routerLink",n.link),c.Fb("target",n.target)("class",n.icon),c.Eb(1),c.Cc(n.title)}}function O(e,t){if(1&e&&(c.Wb(0,"a"),c.Bc(1),c.Vb()),2&e){var n=c.gc().$implicit;c.Hb("with-icon",n.icon),c.Fb("href",n.url,c.vc)("target",n.target)("class",n.icon),c.Eb(1),c.Cc(n.title)}}function w(e,t){if(1&e&&(c.Ub(0),c.zc(1,y,2,6,"a",32),c.zc(2,O,2,6,"a",33),c.Tb()),2&e){var n=t.$implicit;c.Eb(1),c.mc("ngIf",n.link),c.Eb(1),c.mc("ngIf",n.url)}}function _(e,t){if(1&e&&(c.Wb(0,"section",29),c.Bc(1," Or connect with: "),c.Wb(2,"div",30),c.zc(3,w,3,2,"ng-container",31),c.Vb(),c.Vb()),2&e){var n=c.gc();c.Eb(3),c.mc("ngForOf",n.socialLinks)}}var C,k,V,W,P=((C=function(e){function t(){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))).loading=!1,e}return _inherits(t,e),_createClass(t,[{key:"login",value:function(){var e=this;this.loading=!0,this.errors=[],this.messages=[],this.submitted=!0,this.service.authenticate(this.strategy,this.user).subscribe((function(t){e.submitted=!1,t.isSuccess()?e.messages=t.getMessages():e.errors=t.getErrors();var n=t.getRedirect();n&&setTimeout((function(){return e.loading=!1,e.router.navigateByUrl(n)}),e.redirectDelay),e.cd.detectChanges()}))}}]),t}(s.h)).\u0275fac=function(e){return j(e||C)},C.\u0275cmp=c.Kb({type:C,selectors:[["ngx-login"]],features:[c.Bb],decls:31,vars:19,consts:[["id","title",1,"title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group"],["for","input-email",1,"label"],["nbInput","","fullWidth","","name","email","id","input-email","placeholder","Email address","autofocus","",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],[4,"ngIf"],["for","input-password",1,"label"],["nbInput","","fullWidth","","name","password","type","password","id","input-password","placeholder","Password",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],[1,"form-control-group","accept-group"],["name","rememberMe",3,"ngModel","ngModelChange",4,"ngIf"],["routerLink","/auth/pwd-forgot"],["nbButton","","fullWidth","",3,"disabled"],["class","links","aria-label","Social sign in",4,"ngIf"],["aria-label","Register",1,"another-action"],["routerLink","/auth/sign-up"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","error-message",4,"ngIf"],[1,"error-message"],["name","rememberMe",3,"ngModel","ngModelChange"],["aria-label","Social sign in",1,"links"],[1,"socials"],[4,"ngFor","ngForOf"],[3,"routerLink","with-icon",4,"ngIf"],[3,"with-icon",4,"ngIf"],[3,"routerLink"]],template:function(e,t){if(1&e&&(c.Wb(0,"h1",0),c.Bc(1,"Sign In"),c.Vb(),c.zc(2,u,6,1,"nb-alert",1),c.zc(3,g,6,1,"nb-alert",2),c.Wb(4,"nb-card"),c.Wb(5,"nb-card-body"),c.Wb(6,"form",3,4),c.ec("ngSubmit",(function(){return t.login()})),c.Wb(8,"div",5),c.Wb(9,"label",6),c.Bc(10,"Email address:"),c.Vb(),c.Wb(11,"input",7,8),c.ec("ngModelChange",(function(e){return t.user.username=e})),c.Vb(),c.zc(13,p,2,1,"ng-container",9),c.Vb(),c.Wb(14,"div",5),c.Wb(15,"label",10),c.Bc(16,"Password:"),c.Vb(),c.Wb(17,"input",11,12),c.ec("ngModelChange",(function(e){return t.user.password=e})),c.Vb(),c.zc(19,m,3,2,"ng-container",9),c.Vb(),c.Wb(20,"div",13),c.zc(21,v,2,1,"nb-checkbox",14),c.Wb(22,"a",15),c.Bc(23,"Forgot Password?"),c.Vb(),c.Vb(),c.Wb(24,"button",16),c.Bc(25," Sign In "),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.zc(26,_,4,1,"section",17),c.Wb(27,"section",18),c.Bc(28," Don't have an account? "),c.Wb(29,"a",19),c.Bc(30,"Sign Up"),c.Vb(),c.Vb()),2&e){var n=c.rc(7),r=c.rc(12),o=c.rc(18);c.Eb(2),c.mc("ngIf",t.showMessages.error&&(null==t.errors?null:t.errors.length)&&!t.submitted),c.Eb(1),c.mc("ngIf",t.showMessages.success&&(null==t.messages?null:t.messages.length)&&!t.submitted),c.Eb(8),c.mc("ngModel",t.user.username)("status",r.dirty?r.invalid?"danger":"success":"")("required",t.getConfigValue("forms.validation.email.required")),c.Fb("aria-invalid",!(!r.invalid||!r.touched)||null),c.Eb(2),c.mc("ngIf",r.invalid&&r.touched),c.Eb(4),c.mc("ngModel",t.user.password)("status",o.dirty?o.invalid?"danger":"success":"")("required",t.getConfigValue("forms.validation.password.required"))("minlength",t.getConfigValue("forms.validation.password.minLength"))("maxlength",t.getConfigValue("forms.validation.password.maxLength")),c.Fb("aria-invalid",!(!o.invalid||!o.touched)||null),c.Eb(2),c.mc("ngIf",o.invalid&&o.touched),c.Eb(2),c.mc("ngIf",t.rememberMe),c.Eb(3),c.Hb("btn-pulse",t.submitted),c.mc("disabled",!n.valid),c.Eb(2),c.mc("ngIf",t.socialLinks&&t.socialLinks.length>0)}},directives:[r.m,a.o,a.n,o.n,o.h,o.i,a.B,o.a,o.g,o.j,o.l,o.d,o.c,i.f,a.l,a.j,r.l,a.s],styles:["a[_ngcontent-%COMP%]:link{color:red}a[_ngcontent-%COMP%]:visited{color:green}a[_ngcontent-%COMP%]:hover{color:#ff69b4}a[_ngcontent-%COMP%]:active{color:#00f}"]}),C),j=c.Yb(P),M=[{path:"",component:s.c,children:[{path:"login",component:P},{path:"logout",component:(k=function(e){function t(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,r,o))).service=e,n.options=r,n.router=o,n.tokenService=i,n}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){_get(_getPrototypeOf(t.prototype),"ngOnInit",this).call(this)}},{key:"logout",value:function(e){_get(_getPrototypeOf(t.prototype),"logout",this).call(this,e),this.tokenService.clear(),console.log("logging out"),this.router.navigateByUrl("/api/authenticate")}}]),t}(s.i),k.\u0275fac=function(e){return new(e||k)(c.Qb(s.f),c.Qb(s.a),c.Qb(i.c),c.Qb(s.k))},k.\u0275cmp=c.Kb({type:k,selectors:[["ngx-logout"]],features:[c.Bb],decls:2,vars:0,template:function(e,t){1&e&&(c.Wb(0,"div"),c.Bc(1,"Logging out, please wait..."),c.Vb())},encapsulation:2}),k)}]}],E=((V=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:V}),V.\u0275inj=c.Nb({factory:function(e){return new(e||V)},imports:[[i.g.forChild(M)],i.g]}),V),I=n("LRne"),B=n("lJxs"),z=n("JIr8"),L=n("tk/3"),q=((W=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"updateUserProfile",value:function(e){return this.http.post("./users/user-profile",e).pipe(Object(B.a)((function(e){return e.json()})),Object(z.a)((function(e,t){return console.log(e),Object(I.a)(t)})))}},{key:"forgotPwdRequest",value:function(e){return this.http.post("./forgot-password/email",e).pipe(Object(B.a)((function(e){return e.json()})),Object(z.a)((function(e,t){return console.log(e),Object(I.a)(t)})))}},{key:"validateToken",value:function(e){return this.http.get("./reset-password/validatetoken/?token="+e,{responseType:"text"}).pipe(Object(B.a)((function(e){return e.json()})),Object(z.a)((function(e,t){return console.log(e),Object(I.a)(t)})))}},{key:"resetPassword",value:function(e,t){return this.http.post("./reset-password/changepassword",{password:e,token:t},{responseType:"text"}).pipe(Object(B.a)((function(e){return e}),Object(z.a)((function(e,t){return console.log(e),Object(I.a)(t)}))))}},{key:"userSignupRequest",value:function(e){return this.http.post("./user-signup",e).pipe(Object(B.a)((function(e){return e.json()})),Object(z.a)((function(e,t){return console.log(e),Object(I.a)(t)})))}}]),e}()).\u0275fac=function(e){return new(e||W)(c.ac(L.b))},W.\u0275prov=c.Mb({token:W,factory:W.\u0275fac}),W);n.d(t,"AuthModule",(function(){return F}));var x,F=((x=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:x}),x.\u0275inj=c.Nb({factory:function(e){return new(e||x)},providers:[q],imports:[[r.c,o.b,a.k,a.C,a.m,a.t,E,a.q,a.X,s.e,a.C,a.t]]}),x)}}]);