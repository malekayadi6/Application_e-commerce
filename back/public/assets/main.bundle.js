webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts"
	],
	"./catalog/catalog.module": [
		"../../../../../src/app/catalog/catalog.module.ts",
		"catalog.module"
	],
	"./checkout/checkout.module": [
		"../../../../../src/app/checkout/checkout.module.ts"
	],
	"./home/Home.module": [
		"../../../../../src/app/home/Home.module.ts",
		"Home.module"
	],
	"./user/user.module": [
		"../../../../../src/app/user/user.module.ts",
		"user.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-asma {\r\n  color: #D8000C;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n\n\n<div *ngIf=\"isAuth\">\n  userrr {{ user.email}}\n\n\n\n  test <br>\n</div>\n<div *ngIf=\"!isAuth\">\n</div>\n<router-outlet></router-outlet>\n\n\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__catalog_actions_catalog_actions__ = __webpack_require__("../../../../../src/app/catalog/actions/catalog-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = (function () {
    function AppComponent(store, checkoutActions, catalogActions, toastr, authActions, userActions, translate) {
        this.store = store;
        this.checkoutActions = checkoutActions;
        this.catalogActions = catalogActions;
        this.toastr = toastr;
        this.authActions = authActions;
        this.userActions = userActions;
        this.translate = translate;
        this.title = 'app';
        translate.setDefaultLang('en');
        translate.use('en');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.store.dispatch(this.checkoutActions.fetchShoppingCart());
        this.store.dispatch(this.catalogActions.getAllCategories());
        var auth = localStorage.getItem("auth");
        if (auth) {
            this.store.dispatch(this.authActions.loginSuccess());
            var user = JSON.parse(localStorage.getItem("user"));
            this.store.dispatch(this.userActions.getUserSuccess(user));
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__checkout_actions_checkout_actions__["a" /* CheckoutActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__checkout_actions_checkout_actions__["a" /* CheckoutActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__catalog_actions_catalog_actions__["a" /* CatalogActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__catalog_actions_catalog_actions__["a" /* CatalogActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__auth_actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_actions_auth_actions__["a" /* AuthActions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__user_actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__user_actions_user_actions__["a" /* UserActions */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]) === "function" && _g || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__checkout_effects_checkout_effects__ = __webpack_require__("../../../../../src/app/checkout/effects/checkout-effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__checkout_actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reducers_root_reducers__ = __webpack_require__("../../../../../src/app/reducers/root-reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__checkout_checkout_module__ = __webpack_require__("../../../../../src/app/checkout/checkout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__catalog_actions_catalog_actions__ = __webpack_require__("../../../../../src/app/catalog/actions/catalog-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__catalog_effects_catalog_effects__ = __webpack_require__("../../../../../src/app/catalog/effects/catalog-effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__auth_actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__user_actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__user_effects_user_effects__ = __webpack_require__("../../../../../src/app/user/effects/user.effects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_19_ngx_toastr__["a" /* ToastrModule */].forRoot({
                timeOut: 5000,
                positionClass: 'toast-top-right',
                preventDuplicates: false,
                closeButton: true,
                progressBar: true,
            }),
            __WEBPACK_IMPORTED_MODULE_22__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_4__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_6__auth_auth_module__["AuthModule"],
            __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_17__checkout_checkout_module__["CheckoutModule"],
            __WEBPACK_IMPORTED_MODULE_15__ngrx_store__["c" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_16__reducers_root_reducers__["a" /* reducer */]),
            __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_12__checkout_effects_checkout_effects__["a" /* CheckoutEffects */]),
            __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_21__catalog_effects_catalog_effects__["a" /* CatalogEffects */]),
            __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_25__user_effects_user_effects__["a" /* UserEffects */]),
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"]]
                }
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__checkout_actions_checkout_actions__["a" /* CheckoutActions */], __WEBPACK_IMPORTED_MODULE_20__catalog_actions_catalog_actions__["a" /* CatalogActions */], __WEBPACK_IMPORTED_MODULE_23__auth_actions_auth_actions__["a" /* AuthActions */], __WEBPACK_IMPORTED_MODULE_24__user_actions_user_actions__["a" /* UserActions */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/Home.module#HomeModule' },
    { path: 'catalog', loadChildren: './catalog/catalog.module#CatalogModule' },
    { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/auth/actions/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthActions; });
var AuthActions = (function () {
    function AuthActions() {
    }
    AuthActions.prototype.authorize = function () {
        return { type: AuthActions.AUTHORIZE };
    };
    AuthActions.prototype.login = function () {
        return { type: AuthActions.LOGIN };
    };
    AuthActions.prototype.loginSuccess = function () {
        return { type: AuthActions.LOGIN_SUCCESS };
    };
    AuthActions.prototype.logout = function () {
        return { type: AuthActions.LOGOUT };
    };
    AuthActions.prototype.logoutSuccess = function () {
        return { type: AuthActions.LOGOUT_SUCCESS };
    };
    return AuthActions;
}());

AuthActions.LOGIN = 'LOGIN';
AuthActions.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
AuthActions.LOGOUT = 'LOGOUT';
AuthActions.LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
AuthActions.AUTHORIZE = 'AUTHORIZE';
//# sourceMappingURL=auth.actions.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/auth/auth/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_routes__ = __webpack_require__("../../../../../src/app/auth/auth.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__auth_routes__["a" /* AuthRoutes */]),
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_component__["a" /* AuthComponent */], __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_5__auth_sign_up_sign_up_component__["a" /* SignUpComponent */]],
        providers: [],
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth/auth.component.ts");

var AuthRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__auth_auth_component__["a" /* AuthComponent */] },
];
//# sourceMappingURL=auth.routes.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div id=\"all\">\n\n  <div id=\"content\">\n    <div class=\"container\">\n\n      <app-sign-up></app-sign-up>\n\n      <app-login></app-login>\n\n\n    </div>\n    <!-- /.container -->\n  </div>\n  <!-- /#content -->\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuthComponent);

//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <div class=\"box\">\n    <h1>Login</h1>\n\n    <p class=\"lead\">{{ 'login-page.Already-our-customer' | translate }}</p>\n  <!--  <p class=\"text-muted\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies\n      mi vitae est. Mauris placerat eleifend leo.</p>-->\n\n    <hr>\n\n    <form [formGroup]=\"loginForm\"  (ngSubmit)=\"onSubmit()\" novalidate>\n      <div class=\"  text-center\">\n\n        <div *ngIf=\"errorSubmit\" class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n      </div>\n      <div class=\"form-group\"\n           [ngClass]=\"{'has-error':! loginForm.controls['email'].valid && loginForm.controls['email'].touched}\">\n\n      <label for=\"login\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"login\"  formControlName=\"email\" >\n        <div *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched\" class=\"alert alert-danger\">{{ 'signup-page.You-must-include-a-email' | translate }}</div>\n        <div *ngIf=\"loginForm.controls['email'].hasError('pattern') && loginForm.controls['email'].touched\" class=\"alert alert-danger\">{{ 'signup-page.You-must-include-a-valid-email' | translate }}</div>\n\n      </div>\n      <div class=\"form-group\"\n           [ngClass]=\"{'has-error':!loginForm.controls['password'].valid && loginForm.controls['password'].touched}\" >\n\n      <label for=\"password\"> {{ 'login-page.Password' | translate }} </label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" >\n        <div *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\" class=\"alert alert-danger\">{{ 'signup-page.You-must-include-a-password' | translate }}</div>\n\n\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\" ><i class=\"fa fa-user-md\"></i> {{ 'signup-page.Register' | translate }}</button>\n\n      </div>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(store, authService, authActions, userActions, 
        // private route: ActivatedRoute,
        fb, router) {
        this.store = store;
        this.authService = authService;
        this.authActions = authActions;
        this.userActions = userActions;
        this.fb = fb;
        this.router = router;
        this.formSubmit = false;
        this.errorSubmit = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var values = this.loginForm.value;
        this.formSubmit = true;
        this.errorSubmit = false;
        this.errorMsg = '';
        this.authService.login(values).subscribe(function (res) {
            if (!res.error) {
                _this.errorSubmit = false;
                _this.errorMsg = "";
                localStorage.setItem("auth", JSON.stringify(true));
                localStorage.setItem("user", JSON.stringify(res.user));
                _this.store.dispatch(_this.authActions.loginSuccess());
                _this.store.dispatch(_this.userActions.getUserSuccess(res.user));
                if (res.user.type == 1) {
                    _this.router.navigate(['/user/admin']);
                }
                else if (res.user.type == 2) {
                    _this.router.navigate(['/user/client']);
                }
                else {
                }
            }
            else {
                _this.errorSubmit = true;
                _this.errorMsg = res.msg;
            }
        });
    };
    LoginComponent.prototype.initForm = function () {
        var email = ''; // email address attribute in Atg
        var password = '';
        this.loginForm = this.fb.group({
            'email': [email, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            'password': [password, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* Validators */].required],
        });
        ////g(this.loginForm);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/auth/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__["a" /* AuthActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_actions_user_actions__["a" /* UserActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#error-container {\r\n  margin-top:10px;\r\n  position: fixed;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <div class=\"box\">\n    <h1>{{ 'top-bar.New-account' | translate }}</h1>\n\n    <p class=\"lead\">  {{ 'signup-page.Not-our-registered' | translate }}</p>\n    <p>{{ 'signup-page.With-registration-with' | translate }}</p>\n    <p class=\"text-muted\">{{ 'signup-page.If-you-have-any-questions' | translate }} <a href=\"contact.html\">{{ 'signup-page.If-you-have-any-questions2' | translate }} </a>{{ 'signup-page.If-you-have-any-questions3' | translate }} </p>\n\n    <hr>\n\n    <form [formGroup]=\"loginForm\"  (ngSubmit)=\"onSubmit()\" novalidate>\n      <div class=\"form-group\"\n           [ngClass]=\"{'has-error':!loginForm.controls['name'].valid && loginForm.controls['name'].touched}\" >\n\n      <label for=\"name\">{{ 'signup-page.Name' | translate }}</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n        <div *ngIf=\"loginForm.controls['name'].hasError('required') && loginForm.controls['name'].touched\" class=\"alert alert-danger\"> {{ 'signup-page.You-must-include-a-name' | translate }} </div>\n        <div *ngIf=\"loginForm.controls['name'].hasError('minlength') && loginForm.controls['name'].touched\" class=\"alert alert-danger\"> {{ 'signup-page.You-must-include-caracteres' | translate }} </div>\n\n      </div>\n      <div class=\"form-group\"\n           [ngClass]=\"{'has-error':! loginForm.controls['email'].valid && loginForm.controls['email'].touched}\">\n\n      <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n        <div *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched\" class=\"alert alert-danger\">{{ 'signup-page.You-must-include-a-email' | translate }}</div>\n        <div *ngIf=\"loginForm.controls['email'].hasError('pattern') && loginForm.controls['email'].touched\" class=\"alert alert-danger\">{{ 'signup-page.You-must-include-a-valid-email' | translate }}</div>\n\n      </div>\n\n      <div class=\"form-group\"\n           [ngClass]=\"{'has-error':!loginForm.controls['password'].valid && loginForm.controls['password'].touched}\" >\n\n      <label for=\"password\">{{ 'login-page.Password' | translate }}</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\">\n        <div *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\" class=\"alert alert-danger\">{{ 'signup-page.You-must-include-a-password' | translate }}</div>\n        <div *ngIf=\"loginForm.controls['password'].hasError('minlength') && loginForm.controls['password'].touched\" class=\"alert alert-danger\">{{ 'signup-page.You-must-include-caracteres6' | translate }}</div>\n\n      </div>\n      <div class=\"form-group\">\n<!--\n           [ngClass]=\"{'has-error':!loginForm.controls['confPassword'].valid && loginForm.controls['confPassword'].touched}\" >\n-->\n\n      <label for=\"confpassword\">{{ 'signup-page.Confirm-Password' | translate }}</label>\n        <input type=\"password\" class=\"form-control\" id=\"confpassword\" formControlName=\"confPassword\">\n    <!--    <div *ngIf=\"loginForm.controls['confPassword'].hasError('required') && loginForm.controls['confPassword'].touched\" class=\"alert alert-danger\">{{ 'signup-page.You-must-include-a-valid-password-confirmation' | translate }}</div>\n        <div *ngIf=\"!loginForm.get('confPassword').hasError('required') && loginForm.get('confPassword').errors && signUpForm.get('confPassword').touched\n              || loginForm.get('confPassword').hasError('minlength') && loginForm.get('confPassword').touched \" class=\"alert alert-danger\">{{ 'signup-page.You-must-include-a-same-password' | translate }}</div>\n-->\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\" ><i class=\"fa fa-user-md\"></i> {{ 'signup-page.Register' | translate }}</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignUpComponent = (function () {
    function SignUpComponent(store, authService, authActions, userActions, 
        // private route: ActivatedRoute,
        fb, toastr, router) {
        this.store = store;
        this.authService = authService;
        this.authActions = authActions;
        this.userActions = userActions;
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.formSubmit = false;
        this.errorSubmit = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        var values = this.loginForm.value;
        this.formSubmit = true;
        this.errorSubmit = false;
        this.errorMsg = '';
        //g("values" + JSON.stringify(values));
        this.authService.signUp(values).subscribe(function (res) {
            /* localStorage.setItem("auth", JSON.stringify(true));
             localStorage.setItem("user", JSON.stringify(res.user))
             this.store.dispatch(this.authActions.loginSuccess());
             this.store.dispatch(this.userActions.getUserSuccess(res.user));
             //g(JSON.stringify(res));
             this.router.navigate(['/user/client']);*/
            //g(JSON.stringify(res));
            _this.toastr.success(res.msg, 'success!');
        });
    };
    SignUpComponent.prototype.initForm = function () {
        var email = ''; // email address attribute in Atg
        var password = '';
        var type = '2';
        var name = '';
        var confPassword = '';
        this.loginForm = this.fb.group({
            'email': [email, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            'name': [name, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].minLength(3)]],
            'type': [type],
            'password': [password, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].minLength(6)]],
            'confPassword': '' /*[confPassword, [Validators.required,
              Validators.minLength(6)],*/
        });
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__("../../../../../src/app/auth/auth/sign-up/sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth/sign-up/sign-up.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__["a" /* AuthActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_actions_user_actions__["a" /* UserActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _g || Object])
], SignUpComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/reducers/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_state__ = __webpack_require__("../../../../../src/app/auth/reducers/auth.state.ts");


var initialState = new __WEBPACK_IMPORTED_MODULE_1__auth_state__["a" /* AuthStateRecord */]();
var authReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["a" /* AuthActions */].LOGIN_SUCCESS:
            //("auth success");
            return state.merge({ isAuthenticated: true });
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["a" /* AuthActions */].LOGOUT_SUCCESS:
            return state.merge({ isAuthenticated: false });
        default:
            //("default");
            return state;
    }
};
//# sourceMappingURL=auth.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/auth/reducers/auth.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthStateRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);

var AuthStateRecord = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    isAuthenticated: false
});
//# sourceMappingURL=auth.state.js.map

/***/ }),

/***/ "../../../../../src/app/auth/reducers/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAuthStatus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);

// Base product state function
function getAuthState(state) {
    return state.auth;
}
// ******************** Individual selectors ***************************
var fetchAuthStatus = function (state) {
    return state.isAuthenticated;
};
// *************************** PUBLIC API's ****************************
var getAuthStatus = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getAuthState, fetchAuthStatus);
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/actions/catalog-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogActions; });
var CatalogActions = (function () {
    function CatalogActions() {
    }
    CatalogActions.prototype.getListProducts = function (id) {
        return {
            type: CatalogActions.LOAD_LIST_PRODUCTS,
            payload: id
        };
    };
    CatalogActions.prototype.getListProductsSuccess = function (products) {
        return {
            type: CatalogActions.LOAD_LIST_PRODUCTS_SUCCESS,
            payload: products
        };
    };
    CatalogActions.prototype.getDetailProduct = function (id) {
        return {
            type: CatalogActions.LOAD_DETAIL_PRODUCT,
            payload: id
        };
    };
    CatalogActions.prototype.getDetailProductSuccess = function (product) {
        return {
            type: CatalogActions.LOAD_DETAIL_PRODUCT_SUCCESS,
            payload: product
        };
    };
    CatalogActions.prototype.getAllCategories = function () {
        return {
            type: CatalogActions.LOAD_ALL_CATEGORIES
        };
    };
    CatalogActions.prototype.getAllCategoriesSuccess = function (product) {
        return {
            type: CatalogActions.LOAD_ALL_CATEGORIES_SUCCESS,
            payload: product
        };
    };
    return CatalogActions;
}());

CatalogActions.LOAD_ALL_CATEGORIES = 'LOAD_ALL_CATEGORIES';
CatalogActions.LOAD_ALL_CATEGORIES_SUCCESS = 'LOAD_ALL_CATEGORIES_SUCCESS';
CatalogActions.LOAD_DETAIL_PRODUCT = 'LOAD_DETAIL_PRODUCT';
CatalogActions.LOAD_DETAIL_PRODUCT_SUCCESS = 'LOAD_DETAIL_PRODUCT_SUCCESS';
CatalogActions.LOAD_LIST_PRODUCTS = 'LOAD_LIST_PRODUCTS';
CatalogActions.LOAD_LIST_PRODUCTS_SUCCESS = 'LOAD_LIST_PRODUCTS_SUCCESS';
//# sourceMappingURL=catalog-actions.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/effects/catalog-effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_catalog_service__ = __webpack_require__("../../../../../src/app/core/catalog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_catalog_actions__ = __webpack_require__("../../../../../src/app/catalog/actions/catalog-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CatalogEffects = (function () {
    function CatalogEffects(catalogService, actions$, catalogActions) {
        var _this = this;
        this.catalogService = catalogService;
        this.actions$ = actions$;
        this.catalogActions = catalogActions;
        this.GetDetailProduct = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_catalog_actions__["a" /* CatalogActions */].LOAD_DETAIL_PRODUCT)
            .switchMap(function (action) { return _this.catalogService.getDetailProduct(action.payload); })
            .map(function (product) { return _this.catalogActions.getDetailProductSuccess(product); });
        this.GetAllCategories = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_catalog_actions__["a" /* CatalogActions */].LOAD_ALL_CATEGORIES)
            .switchMap(function (action) { return _this.catalogService.getAllCategories(); })
            .map(function (categories) { return _this.catalogActions.getAllCategoriesSuccess(categories); });
        this.GetListProducts = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_catalog_actions__["a" /* CatalogActions */].LOAD_LIST_PRODUCTS)
            .switchMap(function (action) { return _this.catalogService.getListProducts(action.payload); })
            .map(function (categories) { return _this.catalogActions.getListProductsSuccess(categories); });
    }
    return CatalogEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], CatalogEffects.prototype, "GetDetailProduct", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], CatalogEffects.prototype, "GetAllCategories", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], CatalogEffects.prototype, "GetListProducts", void 0);
CatalogEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__core_catalog_service__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_catalog_service__["a" /* CatalogService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__actions_catalog_actions__["a" /* CatalogActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_catalog_actions__["a" /* CatalogActions */]) === "function" && _f || Object])
], CatalogEffects);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=catalog-effects.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/reducers/catalog-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return catalogReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__catalog_state__ = __webpack_require__("../../../../../src/app/catalog/reducers/catalog-state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_catalog_actions__ = __webpack_require__("../../../../../src/app/catalog/actions/catalog-actions.ts");


var initialState = new __WEBPACK_IMPORTED_MODULE_0__catalog_state__["a" /* CatalogStateRecord */]();
var catalogReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_catalog_actions__["a" /* CatalogActions */].LOAD_DETAIL_PRODUCT_SUCCESS:
            var _product = payload;
            return state.merge({
                productState: _product,
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_catalog_actions__["a" /* CatalogActions */].LOAD_ALL_CATEGORIES_SUCCESS:
            var _categories = payload;
            return state.merge({
                categoriesState: _categories,
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_catalog_actions__["a" /* CatalogActions */].LOAD_LIST_PRODUCTS_SUCCESS:
            var _listProducts = payload;
            return state.merge({
                listProudctsState: _listProducts,
            });
        default:
            return state;
    }
};
//# sourceMappingURL=catalog-reducer.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/reducers/catalog-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogStateRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);

var CatalogStateRecord = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    productState: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({}),
    categoriesState: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({}),
    listProudctsState: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({}),
});
//# sourceMappingURL=catalog-state.js.map

/***/ }),

/***/ "../../../../../src/app/catalog/reducers/selectores.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCatalogState */
/* unused harmony export getProductState */
/* unused harmony export getCategoriesState */
/* unused harmony export getListProductsState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getListProducts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);

function getCatalogState(state) {
    return state.catalog;
}
// products detail
function getProductState(state) {
    return state.productState.toJS();
}
// categories
function getCategoriesState(state) {
    return state.categoriesState.toJS();
}
//liste of products
function getListProductsState(state) {
    return state.listProudctsState.toJS();
}
// *************************** PUBLIC API's ****************************
var getProductDetail = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCatalogState, getProductState);
var getAllCategories = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCatalogState, getCategoriesState);
var getListProducts = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCatalogState, getListProductsState);
//# sourceMappingURL=selectores.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/actions/checkout-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutActions; });
var CheckoutActions = (function () {
    function CheckoutActions() {
    }
    CheckoutActions.prototype.addShoppingCart = function () {
    };
    CheckoutActions.prototype.fetchShoppingCart = function () {
        return { type: CheckoutActions.FETCH_SHOPPING_CART };
    };
    CheckoutActions.prototype.fetchShoppingCartSuccess = function (cart) {
        //  //("tessté Action " +JSON.stringify(cart));
        return {
            type: CheckoutActions.FETCH_SHOPPING_CART_SUCCESS,
            payload: cart
        };
    };
    return CheckoutActions;
}());

CheckoutActions.FETCH_SHOPPING_CART = 'FETCH_SHOPPING_CART';
CheckoutActions.FETCH_SHOPPING_CART_SUCCESS = 'FETCH_SHOPPING_CART_SUCCESS';
//# sourceMappingURL=checkout-actions.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/checkout/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_cart_list_item_list_item_component__ = __webpack_require__("../../../../../src/app/checkout/shopping-cart/list-item/list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_routes__ = __webpack_require__("../../../../../src/app/checkout/checkout.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_confirmation_popover__ = __webpack_require__("../../../../angular-confirmation-popover/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__payment_payment_component__ = __webpack_require__("../../../../../src/app/checkout/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__payment_payment_form_payment_form_component__ = __webpack_require__("../../../../../src/app/checkout/payment/payment-form/payment-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__show_order_show_order_component__ = __webpack_require__("../../../../../src/app/checkout/show-order/show-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_summary_order_summary_component__ = __webpack_require__("../../../../../src/app/checkout/order-summary/order-summary.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CheckoutModule = (function () {
    function CheckoutModule() {
    }
    return CheckoutModule;
}());
CheckoutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__checkout_routes__["a" /* CheckoutRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot({
                confirmButtonType: 'danger' // set defaults here
            }),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */], __WEBPACK_IMPORTED_MODULE_3__shopping_cart_list_item_list_item_component__["a" /* ListItemComponent */], __WEBPACK_IMPORTED_MODULE_7__payment_payment_component__["a" /* PaymentComponent */], __WEBPACK_IMPORTED_MODULE_8__payment_payment_form_payment_form_component__["a" /* PaymentFormComponent */], __WEBPACK_IMPORTED_MODULE_9__show_order_show_order_component__["a" /* ShowOrderComponent */], __WEBPACK_IMPORTED_MODULE_10__order_summary_order_summary_component__["a" /* OrderSummaryComponent */]]
    })
], CheckoutModule);

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/checkout/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payment_payment_component__ = __webpack_require__("../../../../../src/app/checkout/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_order_show_order_component__ = __webpack_require__("../../../../../src/app/checkout/show-order/show-order.component.ts");



var CheckoutRoutes = [
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_0__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_1__payment_payment_component__["a" /* PaymentComponent */] },
    { path: 'showorder/:hash', component: __WEBPACK_IMPORTED_MODULE_2__show_order_show_order_component__["a" /* ShowOrderComponent */] }
];
//# sourceMappingURL=checkout.routes.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/effects/checkout-effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_checkout_service_service__ = __webpack_require__("../../../../../src/app/core/services/checkout-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutEffects = (function () {
    function CheckoutEffects(checkoutService, actions$, checkoutActions) {
        var _this = this;
        this.checkoutService = checkoutService;
        this.actions$ = actions$;
        this.checkoutActions = checkoutActions;
        this.FetchCurrentOrder$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_checkout_actions__["a" /* CheckoutActions */].FETCH_SHOPPING_CART)
            .switchMap(function (action) { return _this.checkoutService.getShopingCart(); })
            .map(function (cart) { return _this.checkoutActions.fetchShoppingCartSuccess(cart); });
    }
    return CheckoutEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], CheckoutEffects.prototype, "FetchCurrentOrder$", void 0);
CheckoutEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_services_checkout_service_service__["a" /* CheckoutServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_services_checkout_service_service__["a" /* CheckoutServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__actions_checkout_actions__["a" /* CheckoutActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__actions_checkout_actions__["a" /* CheckoutActions */]) === "function" && _c || Object])
], CheckoutEffects);

var _a, _b, _c;
//# sourceMappingURL=checkout-effects.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/order-summary/order-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/order-summary/order-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3\">\n  <div class=\"box\" id=\"order-summary\">\n    <div class=\"box-header\">\n      <h3>Order summary</h3>\n    </div>\n    <p class=\"text-muted\">Shipping and additional costs are calculated based on the values you have entered.</p>\n\n    <div class=\"table-responsive\">\n      <table class=\"table\">\n        <tbody>\n        <tr>\n          <td>Order subtotal</td>\n          <th>{{ cart?.subTotal }}</th>\n        </tr>\n\n        <tr>\n          <td>Tax</td>\n          <th>$5.00</th>\n        </tr>\n        <tr class=\"total\">\n          <td>Total</td>\n          <th>${{ cart?.subTotal + 5 }}</th>\n        </tr>\n        </tbody>\n      </table>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/checkout/order-summary/order-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_selectors__ = __webpack_require__("../../../../../src/app/checkout/reducers/selectors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderSummaryComponent = (function () {
    function OrderSummaryComponent(store, checkoutActions) {
        this.store = store;
        this.checkoutActions = checkoutActions;
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers_selectors__["a" /* getShoppingCartState */])
            .subscribe(function (cart) {
            ////("select === "+JSON.stringify(cart);
            _this.cart = cart;
        });
    };
    return OrderSummaryComponent;
}());
OrderSummaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-summary',
        template: __webpack_require__("../../../../../src/app/checkout/order-summary/order-summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/order-summary/order-summary.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__actions_checkout_actions__["a" /* CheckoutActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__actions_checkout_actions__["a" /* CheckoutActions */]) === "function" && _b || Object])
], OrderSummaryComponent);

var _a, _b;
//# sourceMappingURL=order-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/payment/payment-form/payment-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/payment/payment-form/payment-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form  method=\"post\"   id=\"my-sample-form\" action=\"http://localhost/slim-cart-master/public/order\" >\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h3>Your details</h3>\n          <hr>\n\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" name=\"email\" id=\"email\"  formControlName=\"email\" class=\"form-control\" >\n\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"name\">Full name</label>\n            <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" >\n\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <h3>Shipping address</h3>\n          <hr>\n\n          <div class=\"form-group\">\n            <label for=\"address1\">Address line 1</label>\n            <input type=\"text\" name=\"address1\" id=\"address1\" class=\"form-control\" >\n\n          </div>\n\n\n\n          <div class=\"form-group\">\n            <label for=\"city\">City</label>\n            <input type=\"text\" name=\"city\" id=\"city\" class=\"form-control\" >\n\n            <span class=\"help-block\">\n\n\t\t\t</span>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"postal_code\">Postal code</label>\n            <input type=\"text\" name=\"postal_code\" id=\"postal_code\" class=\"form-control\" >\n\n\n          </div>\n        </div>\n      </div>\n\n      <h3>Payment</h3>\n\n\n      <div id=\"payment\"></div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\">\n      Place order\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/checkout/payment/payment-form/payment-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PaymentFormComponent = (function () {
    function PaymentFormComponent(_renderer2, _document) {
        this._renderer2 = _renderer2;
        this._document = _document;
    }
    PaymentFormComponent.prototype.ngOnInit = function () {
        var s = this._renderer2.createElement('script');
        s.type = "text/javascript";
        s.src = "http://localhost/slim-cart-master/test.js";
        this._renderer2.appendChild(this._document.body, s);
    };
    return PaymentFormComponent;
}());
PaymentFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payment-form',
        template: __webpack_require__("../../../../../src/app/checkout/payment/payment-form/payment-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/payment/payment-form/payment-form.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _a || Object, Object])
], PaymentFormComponent);

var _a;
//# sourceMappingURL=payment-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/payment/payment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"all\">\n\n  <div id=\"content\">\n    <div class=\"container\">\n\n\n      <div class=\"col-md-9\" id=\"checkout\">\n\n        <div class=\"box\">\n          <form method=\"post\" action=\"checkout2.html\">\n\n\n\n             <app-payment-form></app-payment-form>\n\n\n          </form>\n        </div>\n        <!-- /.box -->\n\n\n      </div>\n      <!-- /.col-md-9 -->\n\n    <app-order-summary></app-order-summary>\n      <!-- /.col-md-3 -->\n\n    </div>\n    <!-- /.container -->\n  </div>\n  <!-- /#content -->\n\n\n\n</div>\n<!-- /#all -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/checkout/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payment',
        template: __webpack_require__("../../../../../src/app/checkout/payment/payment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/payment/payment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PaymentComponent);

//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/reducers/checkout-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkoutReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkout_state__ = __webpack_require__("../../../../../src/app/checkout/reducers/checkout-state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout-actions.ts");


var initialState = new __WEBPACK_IMPORTED_MODULE_0__checkout_state__["a" /* CheckoutStateRecord */]();
var checkoutReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_checkout_actions__["a" /* CheckoutActions */].FETCH_SHOPPING_CART_SUCCESS:
            var _cartState = payload;
            return state.merge({
                cartState: _cartState,
            });
        default:
            return state;
    }
};
//# sourceMappingURL=checkout-reducer.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/reducers/checkout-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutStateRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);

var CheckoutStateRecord = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    cartState: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({}),
});
//# sourceMappingURL=checkout-state.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/reducers/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCheckoutState */
/* unused harmony export fetchOrderState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getShoppingCartState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);

function getCheckoutState(state) {
    return state.checkout;
}
function fetchOrderState(state) {
    return state.cartState.toJS();
}
// *************************** PUBLIC API's ****************************
var getShoppingCartState = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchOrderState);
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/shopping-cart/list-item/list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/shopping-cart/list-item/list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  list-item works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/checkout/shopping-cart/list-item/list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListItemComponent = (function () {
    function ListItemComponent() {
    }
    ListItemComponent.prototype.ngOnInit = function () {
    };
    return ListItemComponent;
}());
ListItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list-item',
        template: __webpack_require__("../../../../../src/app/checkout/shopping-cart/list-item/list-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/shopping-cart/list-item/list-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListItemComponent);

//# sourceMappingURL=list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"all\">\n\n  <div id=\"content\">\n    <div class=\"container\">\n\n\n\n      <div  class=\"col-md-9\" id=\"basket\">\n\n        <div *ngIf=\"cart?.itemCount > 0\"  class=\"box\">\n\n\n            <h1>Shopping cart</h1>\n            <p class=\"text-muted\">You currently have {{cart?.itemCount}} item(s) in your cart.</p>\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead>\n                <tr>\n                  <th colspan=\"2\">Product</th>\n                  <th>Quantity</th>\n                  <th>Unit price</th>\n                  <th>Discount</th>\n                  <th colspan=\"2\">Total</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of cart?.allIem\">\n\n                <td>\n                    <a [routerLink]=\"['/catalog/product/',item?.product.id]\">\n                      <img [src]=\"getImage(item?.product?.image)\"  alt=\"{{item?.product?.title}}\">\n                    </a>\n                  </td>\n                  <td><a [routerLink]=\"['/catalog/product/',item?.product.id]\">{{item?.product?.title}}</a>\n                  </td>\n                  <td>\n                    <input type=\"number\" value=\"{{item?.quantity}}\" class=\"form-control\" (change)=\"updateQt($event,item?.product?.id)\">\n                  </td>\n                  <td>${{item?.product?.price}}</td>\n                  <td>$0.00</td>\n                  <td>${{item?.product?.price * item?.quantity}}</td>\n                  <td>\n                    <a\n                    class=\"btn btn-default\"\n                    mwlConfirmationPopover\n                    [title]=\"title\"\n                    [message]=\"message\"\n                    placement=\"left\"\n                    (confirm)=\"remove(item?.product?.id)\"\n                    (cancel)=\"cancelClicked = true\"\n                    ><i class=\"fa fa-trash-o\"></i></a>\n                  </td>\n                </tr>\n\n                </tbody>\n                <tfoot>\n                <tr>\n                  <th colspan=\"5\">Total</th>\n                  <th colspan=\"2\">${{cart?.subTotal}}</th>\n                </tr>\n                </tfoot>\n              </table>\n\n            </div>\n            <!-- /.table-responsive -->\n\n            <div class=\"box-footer\">\n              <div class=\"pull-left\">\n              </div>\n              <div class=\"pull-right\">\n                <a [routerLink]=\"['/checkout/payment']\" class=\"btn btn-primary\">Proceed to checkout <i class=\"fa fa-chevron-right\"></i>\n                </a>\n              </div>\n            </div>\n\n\n\n        </div>\n        <!-- /.box -->\n\n\n\n        <p *ngIf=\"cart?.itemCount == 0\">You have no items in your cart. <a [routerLink]=\"['/']\" >Start shopping</a></p>\n\n\n      </div>\n      <!-- /.col-md-9 -->\n\n\n      <app-order-summary></app-order-summary>\n\n\n    </div>\n    <!-- /.container -->\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/checkout/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_selectors__ = __webpack_require__("../../../../../src/app/checkout/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_checkout_service_service__ = __webpack_require__("../../../../../src/app/core/services/checkout-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(store, checkoutService, checkoutActions, toastr) {
        this.store = store;
        this.checkoutService = checkoutService;
        this.checkoutActions = checkoutActions;
        this.toastr = toastr;
        this.title = 'Confirmation';
        this.message = 'You want to delete it ?';
        this.confirmClicked = false;
        this.cancelClicked = false;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers_selectors__["a" /* getShoppingCartState */])
            .subscribe(function (cart) {
            ////("select === "+JSON.stringify(cart);
            _this.cart = cart;
        });
    };
    ShoppingCartComponent.prototype.getImage = function (item) {
        return __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_ENDPOINT + item;
    };
    ShoppingCartComponent.prototype.updateQt = function (event, id) {
        //("test event " + id + event.target.value );
        var _this = this;
        this.checkoutService.updateQt(id, event.target.value)
            .subscribe(function (res) {
            //(res.msg);
            if (!res.erreur) {
                _this.toastr.success(res.msg, 'success!');
            }
            else {
                _this.toastr.error(res.msg, 'erreur!');
            }
            _this.store.dispatch(_this.checkoutActions.fetchShoppingCart());
        });
    };
    ShoppingCartComponent.prototype.remove = function (id) {
        var _this = this;
        this.confirmClicked = true;
        this.checkoutService.removeItem(id)
            .subscribe(function (res) {
            //  this.showToastr(item.skuName);
            if (!res.erreur) {
                _this.toastr.success(res.msg, 'success!');
            }
            else {
                _this.toastr.error(res.msg, 'erreur!');
            }
            _this.store.dispatch(_this.checkoutActions.fetchShoppingCart());
        });
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shopping-cart',
        template: __webpack_require__("../../../../../src/app/checkout/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/shopping-cart/shopping-cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_services_checkout_service_service__["a" /* CheckoutServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_services_checkout_service_service__["a" /* CheckoutServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__actions_checkout_actions__["a" /* CheckoutActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__actions_checkout_actions__["a" /* CheckoutActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */]) === "function" && _d || Object])
], ShoppingCartComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=shopping-cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/show-order/show-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/show-order/show-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-md-12\" id=\"basket\">\n    <div class=\"box\">\n    <h3>Order #{{order?.id}}</h3>\n    <hr>\n\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <h4>Shipping to</h4>\n        <p>\n          {{order?.address?.address1}}\n        </p>\n      <p>\n          {{order?.address?.city}}\n        </p>\n      <p>\n          {{order?.address?.postal_code}}\n        </p>\n      <p>\n          {{order?.address?.created_at}}\n        </p>\n\n      </div>\n      <div class=\"col-md-8\">\n        <h4>Items</h4>\n\n\n\n\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead>\n                  <tr>\n                    <th>Product</th>\n                    <th>Quantity</th>\n                    <th>Unit price</th>\n                    <th>Discount</th>\n                    <th>Total</th>\n                  </tr>\n                  </thead>\n                  <tbody>\n\n                  <tr *ngFor=\"let product of order?.products\" >\n\n                    <td>\n                      <a [routerLink]=\"['/catalog/product/',product?.id] \">{{product?.title}}</a>\n                    </td>\n                    <td>\n                      {{product?.pivot?.quantity}}\n\n                    </td>\n                    <td>{{product?.price}}</td>\n                    <td>$0.00</td>\n                    <td>{{product?.pivot?.quantity * product?.price}}</td>\n\n                  </tr>\n\n                  </tbody>\n                  <tfoot>\n                  <tr>\n                    <th colspan=\"3\"></th>\n\n                    <th >Total</th>\n                    <th>$ {{order?.total}}</th>\n                  </tr>\n                  </tfoot>\n                </table>\n\n              </div>\n              <!-- /.table-responsive -->\n\n\n\n\n\n\n\n\n\n      </div>\n    </div>\n\n    <hr>\n\n    <p>\n      Shipping: &#8369;5.00<br>\n      <strong>Order total:</strong>\n    </p>\n    </div>\n    <!-- /.box -->\n\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/checkout/show-order/show-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_checkout_service_service__ = __webpack_require__("../../../../../src/app/core/services/checkout-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowOrderComponent = (function () {
    function ShowOrderComponent(route, chekoutService) {
        this.route = route;
        this.chekoutService = chekoutService;
    }
    ShowOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actionsSubscription = this.route.params.subscribe(function (params) {
            _this.hash = params['hash'];
            //("idd"+ this.hash);
            _this.chekoutService.showOrder(_this.hash)
                .subscribe(function (order) {
                //("idddd"+order.id);
                //("ok");
                _this.order = order;
            });
        });
    };
    return ShowOrderComponent;
}());
ShowOrderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-show-order',
        template: __webpack_require__("../../../../../src/app/checkout/show-order/show-order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/show-order/show-order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_checkout_service_service__["a" /* CheckoutServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_checkout_service_service__["a" /* CheckoutServiceService */]) === "function" && _b || Object])
], ShowOrderComponent);

var _a, _b;
//# sourceMappingURL=show-order.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/catalog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogService = (function () {
    function CatalogService(http) {
        this.http = http;
    }
    CatalogService.prototype.getAllCategories = function () {
        var url = "http://localhost/slim-cart-master/public/cat";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
            if (res) {
                return res.json();
            }
        });
    };
    CatalogService.prototype.getListProducts = function (id) {
        var url = "http://localhost/slim-cart-master/public/listproducts/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
            if (res) {
                return res.json();
            }
        });
    };
    CatalogService.prototype.getDetailProduct = function (idProduct) {
        var url = "http://localhost/slim-cart-master/public/products/" + idProduct;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
            return res.json();
        });
    };
    CatalogService.prototype.addToCart = function (idProduct, qt) {
        var url = "http://localhost/slim-cart-master/public/cart/add/" + idProduct + "/" + qt;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
            return res.json();
        });
    };
    return CatalogService;
}());
CatalogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CatalogService);

var _a;
//# sourceMappingURL=catalog.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalog_service__ = __webpack_require__("../../../../../src/app/core/catalog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_checkout_service_service__ = __webpack_require__("../../../../../src/app/core/services/checkout-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"]
        ],
        declarations: [],
        providers: [__WEBPACK_IMPORTED_MODULE_2__catalog_service__["a" /* CatalogService */], __WEBPACK_IMPORTED_MODULE_4__services_checkout_service_service__["a" /* CheckoutServiceService */], __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, authActions, store) {
        this.http = http;
        this.authActions = authActions;
        this.store = store;
    }
    AuthService.prototype.login = function (data) {
        //(JSON.stringify("teeeestté+"+data))
        var url = "http://localhost/slim-cart-master/public/auth/login";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.post(url, JSON.stringify(data), options)
            .map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.logout = function () {
        var url = "http://localhost/slim-cart-master/public/logout";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.signUp = function (data) {
        var url = "http://localhost/slim-cart-master/public/auth/signup";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.post(url, JSON.stringify(data), options)
            .map(function (res) {
            return res.json();
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_actions_auth_actions__["a" /* AuthActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/checkout-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutServiceService = (function () {
    function CheckoutServiceService(http) {
        this.http = http;
    }
    CheckoutServiceService.prototype.getShopingCart = function () {
        //("getShopingCart service ");
        var url = "http://localhost/slim-cart-master/public/cart";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
            if (res) {
                return res.json().cart;
            }
        });
    };
    CheckoutServiceService.prototype.updateQt = function (id, quantity) {
        //("getShopingCart service ");
        var url = "http://localhost/slim-cart-master/public/cart/update/" + id + "/" + quantity;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
            if (res) {
                return res.json();
            }
        });
    };
    CheckoutServiceService.prototype.removeItem = function (id) {
        //("getShopingCart service ");
        var url = "http://localhost/slim-cart-master/public/cart/remove/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
            if (res) {
                return res.json();
            }
        });
    };
    CheckoutServiceService.prototype.showOrder = function (hash) {
        //("test appel service");
        var url = "http://localhost/slim-cart-master/public/order/" + hash;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
            if (res) {
                if (res.json().erreur) {
                    //("erreur")
                }
                return res.json().order;
            }
        });
    };
    return CheckoutServiceService;
}());
CheckoutServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CheckoutServiceService);

var _a;
//# sourceMappingURL=checkout-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function (id) {
        var url = "http://localhost/slim-cart-master/public/user/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
        });
    };
    UserService.prototype.addProduct = function (values) {
        var url = "http://localhost/slim-cart-master/public/product/add";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.post(url, JSON.stringify(values), options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.addSubCategorie = function (values) {
        var url = "http://localhost/slim-cart-master/public/subcategorie/add";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.post(url, JSON.stringify(values), options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.addCategorie = function (values) {
        //("service data " + JSON.stringify(values))
        var url = "http://localhost/slim-cart-master/public/categorie/add";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.post(url, JSON.stringify(values), options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateTitle = function (id, title) {
        //("service data " + JSON.stringify(values))
        var url = 'http://localhost/slim-cart-master/public/user/uptitle/' + id + '/' + title;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateStock = function (id, title) {
        //("service data " + JSON.stringify(values))
        var url = 'http://localhost/slim-cart-master/public/user/upstock/' + id + '/' + title;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updatePrice = function (id, title) {
        //("service data " + JSON.stringify(values))
        var url = 'http://localhost/slim-cart-master/public/user/upprice/' + id + '/' + title;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.remove = function (id) {
        //("service data " + JSON.stringify(values))
        var url = 'http://localhost/slim-cart-master/public/user/remove/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, withCredentials: true });
        return this.http.get(url, options)
            .map(function (res) {
            return res.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- *** FOOTER ***\n_________________________________________________________ -->\n<div id=\"footer\" data-animate=\"fadeInUp\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-6\">\n        <h4>Pages</h4>\n\n        <ul>\n          <li><a href=\"text.html\">About us</a>\n          </li>\n          <li><a href=\"text.html\">Terms and conditions</a>\n          </li>\n          <li><a href=\"faq.html\">FAQ</a>\n          </li>\n          <li><a href=\"contact.html\">Contact us</a>\n          </li>\n        </ul>\n\n        <hr>\n\n        <h4>User section</h4>\n\n        <ul>\n          <li><a href=\"#\" data-toggle=\"modal\" data-target=\"#login-modal\">Login</a>\n          </li>\n          <li><a href=\"register.html\">Regiter</a>\n          </li>\n        </ul>\n\n        <hr class=\"hidden-md hidden-lg hidden-sm\">\n\n      </div>\n      <!-- /.col-md-3 -->\n\n      <div class=\"col-md-3 col-sm-6\">\n\n        <h4>Top categories</h4>\n\n        <h5>Men</h5>\n\n        <ul>\n          <li><a href=\"category.html\">T-shirts</a>\n          </li>\n          <li><a href=\"category.html\">Shirts</a>\n          </li>\n          <li><a href=\"category.html\">Accessories</a>\n          </li>\n        </ul>\n\n        <h5>Ladies</h5>\n        <ul>\n          <li><a href=\"category.html\">T-shirts</a>\n          </li>\n          <li><a href=\"category.html\">Skirts</a>\n          </li>\n          <li><a href=\"category.html\">Pants</a>\n          </li>\n          <li><a href=\"category.html\">Accessories</a>\n          </li>\n        </ul>\n\n        <hr class=\"hidden-md hidden-lg\">\n\n      </div>\n      <!-- /.col-md-3 -->\n\n      <div class=\"col-md-3 col-sm-6\">\n\n        <h4>Where to find us</h4>\n\n        <p><strong>Obaju Ltd.</strong>\n          <br>13/25 New Avenue\n          <br>New Heaven\n          <br>45Y 73J\n          <br>England\n          <br>\n          <strong>Great Britain</strong>\n        </p>\n\n        <a href=\"contact.html\">Go to contact page</a>\n\n        <hr class=\"hidden-md hidden-lg\">\n\n      </div>\n      <!-- /.col-md-3 -->\n\n\n\n      <div class=\"col-md-3 col-sm-6\">\n\n        <h4>Get the news</h4>\n\n        <p class=\"text-muted\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n\n        <form>\n          <div class=\"input-group\">\n\n            <input type=\"text\" class=\"form-control\">\n\n            <span class=\"input-group-btn\">\n\n\t\t\t    <button class=\"btn btn-default\" type=\"button\">Subscribe!</button>\n\n\t\t\t</span>\n\n          </div>\n          <!-- /input-group -->\n        </form>\n\n        <hr>\n\n        <h4>Stay in touch</h4>\n\n        <p class=\"social\">\n          <a href=\"#\" class=\"facebook external\" data-animate-hover=\"shake\"><i class=\"fa fa-facebook\"></i></a>\n          <a href=\"#\" class=\"twitter external\" data-animate-hover=\"shake\"><i class=\"fa fa-twitter\"></i></a>\n          <a href=\"#\" class=\"instagram external\" data-animate-hover=\"shake\"><i class=\"fa fa-instagram\"></i></a>\n          <a href=\"#\" class=\"gplus external\" data-animate-hover=\"shake\"><i class=\"fa fa-google-plus\"></i></a>\n          <a href=\"#\" class=\"email external\" data-animate-hover=\"shake\"><i class=\"fa fa-envelope\"></i></a>\n        </p>\n\n\n      </div>\n      <!-- /.col-md-3 -->\n\n    </div>\n    <!-- /.row -->\n\n  </div>\n  <!-- /.container -->\n</div>\n<!-- /#footer -->\n\n<!-- *** FOOTER END *** -->\n\n\n\n\n\n\n<!-- *** COPYRIGHT ***\n_________________________________________________________ -->\n<div id=\"copyright\">\n  <div class=\"container\">\n    <div class=\"col-md-6\">\n      <p class=\"pull-left\">© 2017 asma bouchoucha</p>\n\n    </div>\n    <div class=\"col-md-6\">\n       <p>Template by asma bouchoucha</p>\n\n\n    </div>\n  </div>\n</div>\n<!-- *** COPYRIGHT END *** -->\n"

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/layout/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__ = __webpack_require__("../../../../../src/app/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/layout/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */]
        ]
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.flag-icon-background {\r\n  background-size: contain;\r\n  background-position: 50%;\r\n  background-repeat: no-repeat;\r\n}\r\n.flag-icon {\r\n  background-size: contain;\r\n  background-position: 50%;\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 1.33333333em;\r\n  line-height: 1em;\r\n}\r\n.flag-icon:before {\r\n  content: \"\\A0\";\r\n}\r\n.flag-icon.flag-icon-squared {\r\n  width: 1em;\r\n}\r\n.flag-icon-gb {\r\n  background-image: url(/assets/flags/4x3/gb.svg);\r\n}\r\n.flag-icon-fr {\r\n  background-image: url(/assets/flags/4x3/fr.svg);\r\n}\r\n.flag-icon-ad.flag-icon-squared {\r\n  background-image: url(/assets/flags/1x1/ad.svg);\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- *** TOPBAR ***\n_________________________________________________________ -->\n<div id=\"top\">\n  <div class=\"container\">\n    <div class=\"col-md-6 offer\" data-animate=\"fadeInDown\">   <div id=\"radioBtn\" class=\"btn-group\">\n      <a class=\"btn btn-primary btn-sm\" (click)=\"changeLanguage('en')\" [class.active]=\"!currentLangFr\" data-toggle=\"campus\" ><span class=\"flag-icon flag-icon-gb\" > </span> </a>\n      <a class=\"btn btn-primary btn-sm\" (click)=\"changeLanguage('fr')\" [class.active]=\"currentLangFr\"  data-toggle=\"campus\" ><span class=\"flag-icon flag-icon-fr\" > </span> </a>\n    </div>\n    </div>\n    <div class=\"col-md-6\" data-animate=\"fadeInDown\">\n      <ul class=\"menu\">\n\n          <li *ngIf=\"isAuth\">\n            <a class=\"asma\" (click)=\"asma(user)\"> {{ user.name}} </a>\n          </li>\n        <li *ngIf=\"isAuth\">\n          <a  class=\"asma\" (click)=\"logout()\" > {{ 'top-bar.Logout' | translate }} </a>\n        </li>\n        <li *ngIf=\"!isAuth\">\n        <a [routerLink]=\"['/auth']\">{{ 'top-bar.Register' | translate }}  / {{ 'top-bar.Login' | translate }}</a>\n        </li>\n        <li><a>Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n\n\n\n</div>\n\n<!-- *** TOP BAR END *** -->\n\n<!-- *** NAVBAR ***\n_________________________________________________________ -->\n\n<div class=\"navbar navbar-default yamm\" role=\"navigation\" id=\"navbar\">\n  <div class=\"container\">\n\n    <div class=\"navbar-collapse collapse\" id=\"navigation\">\n\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li class=\"\"><a [routerLink]=\"['/']\">Home</a>\n        </li>\n\n\n        <li *ngFor=\"let categorie of categories?.categorie\" class=\"dropdown yamm-fw\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-delay=\"200\">{{categorie?.title}} <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <div class=\"yamm-content\">\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <h5>{{categorie.title}}</h5>\n                    <ul>\n                      <li *ngFor=\"let subCategorie of categorie?.subcategories\">\n                        <a [routerLink]=\"['/catalog',subCategorie?.title,subCategorie?.id]\">{{subCategorie?.title}}</a>\n                      </li>\n\n                    </ul>\n                  </div>\n                  <div class=\"col-sm-3\">\n                    <div class=\"banner\">\n\n                        <img [src]=\"getImage(categorie?.img1)\"  class=\"img img-responsive\" alt=\"\">\n\n                    </div>\n\n                  </div>\n                  <div class=\"col-sm-3\">\n                    <div class=\"banner\">\n\n                        <img [src]=\"getImage(categorie?.img2)\"  class=\"img img-responsive\" alt=\"\">\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </li>\n          </ul>\n        </li>\n\n      </ul>\n\n    </div>\n    <!--/.nav-collapse -->\n\n    <div class=\"navbar-buttons\">\n\n      <div class=\"navbar-collapse collapse right\" id=\"basket-overview\">\n        <ul class=\"nav navbar-nav navbar-left\">\n          <li>\n        <a [routerLink]=\"['/checkout/cart']\" class=\"\"><i></i>\n          <span class=\"glyphicon glyphicon-shopping-cart\" aria-hidden=\"true\"></span> Cart ({{ cart?.itemCount}})\n\n        </a>\n          </li>\n        </ul>\n      </div>\n      <!--/.nav-collapse -->\n\n      <div class=\"navbar-collapse collapse right\" id=\"search-not-mobile\">\n        <button type=\"button\" class=\"btn navbar-btn btn-primary\" data-toggle=\"collapse\" data-target=\"#search\">\n          <span class=\"sr-only\">Toggle search</span>\n          <i class=\"fa fa-search\"></i>\n        </button>\n      </div>\n\n    </div>\n\n    <div class=\"collapse clearfix\" id=\"search\">\n\n      <form class=\"navbar-form\" role=\"search\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n          <span class=\"input-group-btn\">\n\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button>\n\n\t\t    </span>\n        </div>\n      </form>\n\n    </div>\n    <!--/.nav-collapse -->\n\n  </div>\n  <!-- /.container -->\n</div>\n<!-- /#navbar -->\n\n<!-- *** NAVBAR END *** -->\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_reducers_selectors__ = __webpack_require__("../../../../../src/app/checkout/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalog_reducers_selectores__ = __webpack_require__("../../../../../src/app/catalog/reducers/selectores.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_reducers_selectores__ = __webpack_require__("../../../../../src/app/user/reducers/selectores.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_reducers_selectors__ = __webpack_require__("../../../../../src/app/auth/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var NavbarComponent = (function () {
    function NavbarComponent(store, authActions, toastr, router, authService, translate) {
        this.store = store;
        this.authActions = authActions;
        this.toastr = toastr;
        this.router = router;
        this.authService = authService;
        this.translate = translate;
    }
    NavbarComponent.prototype.getImage = function (item) {
        return __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API_ENDPOINT + item;
    };
    NavbarComponent.prototype.asma = function (user) {
        if (user.type == 1) {
            this.router.navigate(['/user/admin']);
        }
        else if (this.user.type == 2) {
            this.router.navigate(['/user/client']);
        }
        else {
            this.router.navigate(['/user/client']);
        }
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        //("clicl logout");
        this.authService.logout().subscribe(function (res) {
            if (!res.error) {
                _this.store.dispatch(_this.authActions.logoutSuccess());
                localStorage.clear();
                _this.toastr.info(res.msg, 'info !');
                _this.router.navigate(['/auth']);
            }
        });
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentLang = this.translate.currentLang;
        if (this.currentLang == 'fr') {
            this.currentLangFr = true;
        }
        if (this.currentLang == 'en') {
            this.currentLangFr = false;
        }
        this.store.select(__WEBPACK_IMPORTED_MODULE_2__checkout_reducers_selectors__["a" /* getShoppingCartState */])
            .subscribe(function (cart) {
            _this.cart = cart;
        });
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__catalog_reducers_selectores__["a" /* getAllCategories */])
            .subscribe(function (categories) {
            _this.categories = categories;
        });
        this.store.select(__WEBPACK_IMPORTED_MODULE_6__auth_reducers_selectors__["a" /* getAuthStatus */])
            .subscribe(function (isAuth) {
            _this.isAuth = isAuth;
            if (isAuth) {
                _this.store.select(__WEBPACK_IMPORTED_MODULE_5__user_reducers_selectores__["a" /* getUser */])
                    .subscribe(function (user) {
                    _this.user = user;
                });
            }
        });
    };
    NavbarComponent.prototype.changeLanguage = function (lang) {
        this.translate.use(lang);
        /* this.currentLang = this.translate.currentLang;*/
        this.currentLang = lang;
        if (this.currentLang == 'fr') {
            this.currentLangFr = true;
        }
        if (this.currentLang == 'en') {
            this.currentLangFr = false;
        }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/layout/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__auth_actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__auth_actions_auth_actions__["a" /* AuthActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__core_services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */]) === "function" && _f || Object])
], NavbarComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/reducers/root-reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rootReducer */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkout_reducers_checkout_reducer__ = __webpack_require__("../../../../../src/app/checkout/reducers/checkout-reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalog_reducers_catalog_reducer__ = __webpack_require__("../../../../../src/app/catalog/reducers/catalog-reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_reducers_auth_reducer__ = __webpack_require__("../../../../../src/app/auth/reducers/auth.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_reducers_user_reducer__ = __webpack_require__("../../../../../src/app/user/reducers/user.reducer.ts");





var rootReducer = {
    checkout: __WEBPACK_IMPORTED_MODULE_0__checkout_reducers_checkout_reducer__["a" /* checkoutReducer */],
    catalog: __WEBPACK_IMPORTED_MODULE_2__catalog_reducers_catalog_reducer__["a" /* catalogReducer */],
    auth: __WEBPACK_IMPORTED_MODULE_3__auth_reducers_auth_reducer__["a" /* authReducer */],
    user: __WEBPACK_IMPORTED_MODULE_4__user_reducers_user_reducer__["a" /* UserReducer */],
};
var combinedReducer = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* combineReducers */])(rootReducer);
function reducer(state, action) { return combinedReducer(state, action); }
//# sourceMappingURL=root-reducers.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
        ],
        declarations: []
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/actions/user.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActions; });
var UserActions = (function () {
    function UserActions() {
    }
    UserActions.prototype.getUser = function (id) {
        return {
            type: UserActions.LOAD_USER,
            payload: id
        };
    };
    UserActions.prototype.getUserSuccess = function (user) {
        //("test user load suucces !!! "+ user.id)
        return {
            type: UserActions.LOAD_USER_SUCCESS,
            payload: user
        };
    };
    return UserActions;
}());

UserActions.LOAD_USER = 'LOAD_USER';
UserActions.LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
//# sourceMappingURL=user.actions.js.map

/***/ }),

/***/ "../../../../../src/app/user/effects/user.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserEffects = (function () {
    function UserEffects(userService, actions$, userActions) {
        var _this = this;
        this.userService = userService;
        this.actions$ = actions$;
        this.userActions = userActions;
        this.GetUser = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__actions_user_actions__["a" /* UserActions */].LOAD_USER)
            .switchMap(function (action) { return _this.userService.getUser(action.payload); })
            .map(function (user) { return _this.userActions.getUserSuccess(user); });
    }
    return UserEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], UserEffects.prototype, "GetUser", void 0);
UserEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__actions_user_actions__["a" /* UserActions */]) === "function" && _d || Object])
], UserEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=user.effects.js.map

/***/ }),

/***/ "../../../../../src/app/user/reducers/selectores.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);

// Base product state function
function getUserState(state) {
    return state.user;
}
// ******************** Individual selectors ***************************
var fetchUserStatus = function (state) {
    return state.userState.toJS();
};
// *************************** PUBLIC API's ****************************
var getUser = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, fetchUserStatus);
//# sourceMappingURL=selectores.js.map

/***/ }),

/***/ "../../../../../src/app/user/reducers/user.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_state__ = __webpack_require__("../../../../../src/app/user/reducers/user.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");


var initialState = new __WEBPACK_IMPORTED_MODULE_0__user_state__["a" /* UserStateRecord */]();
var UserReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_user_actions__["a" /* UserActions */].LOAD_USER_SUCCESS:
            var _user = payload;
            //("teeeeeeeeesst paypload user "+JSON.stringify(_user))
            //("teeeeeeeeesst paypload user id  "+ _user.id)
            return state.merge({
                userState: payload,
            });
        default:
            //("defaullllllllttttttttttmmmmmmmmm");
            return state;
    }
};
//# sourceMappingURL=user.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/user/reducers/user.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStateRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);

var UserStateRecord = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    userState: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({}),
});
//# sourceMappingURL=user.state.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    urlImage: '',
    API_ENDPOINT: 'http://localhost/slim-cart-master/resources/img/',
    AppName: 'Asma'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map