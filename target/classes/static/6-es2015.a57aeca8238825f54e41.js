(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{qoJi:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),r=n("3Pt+"),s=n("tyNb"),i=n("McNs"),c=n("fXoL"),a=n("aceb");function l(e,t){if(1&e&&(c.Wb(0,"li",24),c.Bc(1),c.Vb()),2&e){const e=t.$implicit;c.Eb(1),c.Cc(e)}}function b(e,t){if(1&e&&(c.Wb(0,"nb-alert",20),c.Wb(1,"p",21),c.Wb(2,"b"),c.Bc(3,"Oh snap!"),c.Vb(),c.Vb(),c.Wb(4,"ul",22),c.zc(5,l,2,1,"li",23),c.Vb(),c.Vb()),2&e){const e=c.gc();c.Eb(5),c.mc("ngForOf",e.errors)}}function u(e,t){if(1&e&&(c.Wb(0,"li",24),c.Bc(1),c.Vb()),2&e){const e=t.$implicit;c.Eb(1),c.Cc(e)}}function g(e,t){if(1&e&&(c.Wb(0,"nb-alert",25),c.Wb(1,"p",21),c.Wb(2,"b"),c.Bc(3,"Hooray!"),c.Vb(),c.Vb(),c.Wb(4,"ul",22),c.zc(5,u,2,1,"li",23),c.Vb(),c.Vb()),2&e){const e=c.gc();c.Eb(5),c.mc("ngForOf",e.messages)}}function d(e,t){1&e&&(c.Wb(0,"p",27),c.Bc(1," Email is required! "),c.Vb())}function f(e,t){if(1&e&&(c.Ub(0),c.zc(1,d,2,0,"p",26),c.Tb()),2&e){c.gc();const e=c.rc(12);c.Eb(1),c.mc("ngIf",null==e.errors?null:e.errors.required)}}function p(e,t){1&e&&(c.Wb(0,"p",27),c.Bc(1," Password is required! "),c.Vb())}function m(e,t){if(1&e&&(c.Wb(0,"p",27),c.Bc(1),c.Vb()),2&e){const e=c.gc(2);c.Eb(1),c.Ec(" Password should contains from ",e.getConfigValue("forms.validation.password.minLength")," to ",e.getConfigValue("forms.validation.password.maxLength")," characters ")}}function h(e,t){if(1&e&&(c.Ub(0),c.zc(1,p,2,0,"p",26),c.zc(2,m,2,2,"p",26),c.Tb()),2&e){c.gc();const e=c.rc(18);c.Eb(1),c.mc("ngIf",null==e.errors?null:e.errors.required),c.Eb(1),c.mc("ngIf",(null==e.errors?null:e.errors.minlength)||(null==e.errors?null:e.errors.maxlength))}}function w(e,t){if(1&e){const e=c.Xb();c.Wb(0,"nb-checkbox",28),c.ec("ngModelChange",(function(t){return c.tc(e),c.gc().user.rememberMe=t})),c.Bc(1,"Remember me"),c.Vb()}if(2&e){const e=c.gc();c.mc("ngModel",e.user.rememberMe)}}function v(e,t){if(1&e&&(c.Wb(0,"a",34),c.Bc(1),c.Vb()),2&e){const e=c.gc().$implicit;c.Hb("with-icon",e.icon),c.mc("routerLink",e.link),c.Fb("target",e.target)("class",e.icon),c.Eb(1),c.Cc(e.title)}}function V(e,t){if(1&e&&(c.Wb(0,"a"),c.Bc(1),c.Vb()),2&e){const e=c.gc().$implicit;c.Hb("with-icon",e.icon),c.Fb("href",e.url,c.vc)("target",e.target)("class",e.icon),c.Eb(1),c.Cc(e.title)}}function W(e,t){if(1&e&&(c.Ub(0),c.zc(1,v,2,6,"a",32),c.zc(2,V,2,6,"a",33),c.Tb()),2&e){const e=t.$implicit;c.Eb(1),c.mc("ngIf",e.link),c.Eb(1),c.mc("ngIf",e.url)}}function M(e,t){if(1&e&&(c.Wb(0,"section",29),c.Bc(1," Or connect with: "),c.Wb(2,"div",30),c.zc(3,W,3,2,"ng-container",31),c.Vb(),c.Vb()),2&e){const e=c.gc();c.Eb(3),c.mc("ngForOf",e.socialLinks)}}let O=(()=>{class e extends i.h{constructor(){super(...arguments),this.loading=!1}login(){this.loading=!0,console.log("authenticating..."),this.errors=[],this.messages=[],this.submitted=!0,this.service.authenticate(this.strategy,this.user).subscribe(e=>{this.submitted=!1,e.isSuccess()?this.messages=e.getMessages():this.errors=e.getErrors();const t=e.getRedirect();t&&setTimeout(()=>(this.loading=!1,this.router.navigateByUrl(t)),this.redirectDelay),this.cd.detectChanges()})}}return e.\u0275fac=function(t){return k(t||e)},e.\u0275cmp=c.Kb({type:e,selectors:[["ngx-login"]],features:[c.Bb],decls:31,vars:19,consts:[["id","title",1,"title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group"],["for","input-email",1,"label"],["nbInput","","fullWidth","","name","email","id","input-email","placeholder","Email address","autofocus","",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],[4,"ngIf"],["for","input-password",1,"label"],["nbInput","","fullWidth","","name","password","type","password","id","input-password","placeholder","Password",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],[1,"form-control-group","accept-group"],["name","rememberMe",3,"ngModel","ngModelChange",4,"ngIf"],["routerLink","/auth/pwd-forgot"],["nbButton","","fullWidth","",3,"disabled"],["class","links","aria-label","Social sign in",4,"ngIf"],["aria-label","Register",1,"another-action"],["routerLink","/auth/sign-up"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","error-message",4,"ngIf"],[1,"error-message"],["name","rememberMe",3,"ngModel","ngModelChange"],["aria-label","Social sign in",1,"links"],[1,"socials"],[4,"ngFor","ngForOf"],[3,"routerLink","with-icon",4,"ngIf"],[3,"with-icon",4,"ngIf"],[3,"routerLink"]],template:function(e,t){if(1&e&&(c.Wb(0,"h1",0),c.Bc(1,"Sign In"),c.Vb(),c.zc(2,b,6,1,"nb-alert",1),c.zc(3,g,6,1,"nb-alert",2),c.Wb(4,"nb-card"),c.Wb(5,"nb-card-body"),c.Wb(6,"form",3,4),c.ec("ngSubmit",(function(){return t.login()})),c.Wb(8,"div",5),c.Wb(9,"label",6),c.Bc(10,"Email address:"),c.Vb(),c.Wb(11,"input",7,8),c.ec("ngModelChange",(function(e){return t.user.username=e})),c.Vb(),c.zc(13,f,2,1,"ng-container",9),c.Vb(),c.Wb(14,"div",5),c.Wb(15,"label",10),c.Bc(16,"Password:"),c.Vb(),c.Wb(17,"input",11,12),c.ec("ngModelChange",(function(e){return t.user.password=e})),c.Vb(),c.zc(19,h,3,2,"ng-container",9),c.Vb(),c.Wb(20,"div",13),c.zc(21,w,2,1,"nb-checkbox",14),c.Wb(22,"a",15),c.Bc(23,"Forgot Password?"),c.Vb(),c.Vb(),c.Wb(24,"button",16),c.Bc(25," Sign In "),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.zc(26,M,4,1,"section",17),c.Wb(27,"section",18),c.Bc(28," Don't have an account? "),c.Wb(29,"a",19),c.Bc(30,"Sign Up"),c.Vb(),c.Vb()),2&e){const e=c.rc(7),n=c.rc(12),o=c.rc(18);c.Eb(2),c.mc("ngIf",t.showMessages.error&&(null==t.errors?null:t.errors.length)&&!t.submitted),c.Eb(1),c.mc("ngIf",t.showMessages.success&&(null==t.messages?null:t.messages.length)&&!t.submitted),c.Eb(8),c.mc("ngModel",t.user.username)("status",n.dirty?n.invalid?"danger":"success":"")("required",t.getConfigValue("forms.validation.email.required")),c.Fb("aria-invalid",!(!n.invalid||!n.touched)||null),c.Eb(2),c.mc("ngIf",n.invalid&&n.touched),c.Eb(4),c.mc("ngModel",t.user.password)("status",o.dirty?o.invalid?"danger":"success":"")("required",t.getConfigValue("forms.validation.password.required"))("minlength",t.getConfigValue("forms.validation.password.minLength"))("maxlength",t.getConfigValue("forms.validation.password.maxLength")),c.Fb("aria-invalid",!(!o.invalid||!o.touched)||null),c.Eb(2),c.mc("ngIf",o.invalid&&o.touched),c.Eb(2),c.mc("ngIf",t.rememberMe),c.Eb(3),c.Hb("btn-pulse",t.submitted),c.mc("disabled",!e.valid),c.Eb(2),c.mc("ngIf",t.socialLinks&&t.socialLinks.length>0)}},directives:[o.m,a.o,a.n,r.n,r.h,r.i,a.B,r.a,r.g,r.j,r.l,r.d,r.c,s.f,a.l,a.j,o.l,a.s],styles:["a[_ngcontent-%COMP%]:link{color:red}a[_ngcontent-%COMP%]:visited{color:green}a[_ngcontent-%COMP%]:hover{color:#ff69b4}a[_ngcontent-%COMP%]:active{color:#00f}"]}),e})();const k=c.Yb(O),E=[{path:"",component:i.c,children:[{path:"login",component:O},{path:"logout",component:(()=>{class e extends i.i{constructor(e,t={},n,o){super(e,t,n),this.service=e,this.options=t,this.router=n,this.tokenService=o}ngOnInit(){super.ngOnInit()}logout(e){super.logout(e),this.tokenService.clear(),console.log("logging out"),this.router.navigateByUrl("/api/authenticate")}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(i.f),c.Qb(i.a),c.Qb(s.c),c.Qb(i.k))},e.\u0275cmp=c.Kb({type:e,selectors:[["ngx-logout"]],features:[c.Bb],decls:2,vars:0,template:function(e,t){1&e&&(c.Wb(0,"div"),c.Bc(1,"Logging out, please wait..."),c.Vb())},encapsulation:2}),e})()}]}];let I=(()=>{class e{}return e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({factory:function(t){return new(t||e)},imports:[[s.g.forChild(E)],s.g]}),e})();var B=n("LRne"),C=n("lJxs"),j=n("JIr8"),y=n("tk/3");let L=(()=>{class e{constructor(e){this.http=e}updateUserProfile(e){return this.http.post("./users/user-profile",e).pipe(Object(C.a)(e=>e.json()),Object(j.a)((e,t)=>(console.log(e),Object(B.a)(t))))}forgotPwdRequest(e){return this.http.post("./forgot-password/email",e).pipe(Object(C.a)(e=>e.json()),Object(j.a)((e,t)=>(console.log(e),Object(B.a)(t))))}validateToken(e){return this.http.get("./reset-password/validatetoken/?token="+e,{responseType:"text"}).pipe(Object(C.a)(e=>e.json()),Object(j.a)((e,t)=>(console.log(e),Object(B.a)(t))))}resetPassword(e,t){return this.http.post("./reset-password/changepassword",{password:e,token:t},{responseType:"text"}).pipe(Object(C.a)(e=>e,Object(j.a)((e,t)=>(console.log(e),Object(B.a)(t)))))}userSignupRequest(e){return this.http.post("./user-signup",e).pipe(Object(C.a)(e=>e.json()),Object(j.a)((e,t)=>(console.log(e),Object(B.a)(t))))}}return e.\u0275fac=function(t){return new(t||e)(c.ac(y.b))},e.\u0275prov=c.Mb({token:e,factory:e.\u0275fac}),e})();n.d(t,"AuthModule",(function(){return q}));let q=(()=>{class e{}return e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({factory:function(t){return new(t||e)},providers:[L],imports:[[o.c,r.b,a.k,a.C,a.m,a.t,I,a.q,a.X,i.e,a.C,a.t]]}),e})()}}]);