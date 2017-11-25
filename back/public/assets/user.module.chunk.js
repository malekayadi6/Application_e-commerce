webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/user/components/admin/add-admin/add-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#error-container {\r\n  margin-top:10px;\r\n  position: fixed;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-admin/add-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\n  <div class=\"box\">\n    <h1>New account</h1>\n\n    <p class=\"lead\">Not our registered customer yet?</p>\n\n    <hr>\n\n    <form [formGroup]=\"loginForm\"  (ngSubmit)=\"onSubmit()\" novalidate>\n      <div class=\"form-group\"\n           [ngClass]=\"{'has-error':!loginForm.controls['name'].valid && loginForm.controls['name'].touched}\" >\n\n        <label for=\"name\">{{ 'signup-page.Name' | translate }}</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n        <div *ngIf=\"loginForm.controls['name'].hasError('required') && loginForm.controls['name'].touched\" class=\"alert alert-danger\"> {{ 'signup-page.You-must-include-a-name' | translate }} </div>\n        <div *ngIf=\"loginForm.controls['name'].hasError('minlength') && loginForm.controls['name'].touched\" class=\"alert alert-danger\"> {{ 'signup-page.You-must-include-caracteres' | translate }} </div>\n\n      </div>\n      <div class=\"form-group\"\n           [ngClass]=\"{'has-error':! loginForm.controls['email'].valid && loginForm.controls['email'].touched}\">\n\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n        <div *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched\" class=\"alert alert-danger\">{{ 'signup-page.You-must-include-a-email' | translate }}</div>\n        <div *ngIf=\"loginForm.controls['email'].hasError('pattern') && loginForm.controls['email'].touched\" class=\"alert alert-danger\">{{ 'signup-page.You-must-include-a-valid-email' | translate }}</div>\n\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Type of User </label>\n\n        <select  class=\"form-control\" id=\"expirationMonth\" formControlName=\"type\">\n          <option [value]=\"1\">\n            admin\n          </option>\n          <option [value]=\"2\">\n            clinet\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group\"\n           [ngClass]=\"{'has-error':!loginForm.controls['password'].valid && loginForm.controls['password'].touched}\" >\n\n        <label for=\"password\">{{ 'login-page.Password' | translate }}</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\">\n        <div *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\" class=\"alert alert-danger\">{{ 'signup-page.You-must-include-a-password' | translate }}</div>\n        <div *ngIf=\"loginForm.controls['password'].hasError('minlength') && loginForm.controls['password'].touched\" class=\"alert alert-danger\">{{ 'signup-page.You-must-include-caracteres6' | translate }}</div>\n\n      </div>\n      <div class=\"form-group\">\n        <label for=\"confpassword\"> {{ 'signup-page.Confirm-Password' | translate }}</label>\n        <input type=\"password\" class=\"form-control\" id=\"confpassword\">\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\" ><i class=\"fa fa-user-md\"></i> {{ 'signup-page.Register' | translate }}</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-admin/add-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddAdminComponent = (function () {
    function AddAdminComponent(store, authService, authActions, userActions, 
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
    AddAdminComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    AddAdminComponent.prototype.onSubmit = function () {
        var values = this.loginForm.value;
        this.formSubmit = true;
        this.errorSubmit = false;
        this.errorMsg = '';
        //g("values" + values)
        this.authService.signUp(values).subscribe(function (res) {
            //g(JSON.stringify(res));
        });
    };
    AddAdminComponent.prototype.initForm = function () {
        var email = ''; // email address attribute in Atg
        var password = '';
        var type = '';
        var name = '';
        this.loginForm = this.fb.group({
            'email': [email, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            'name': [name, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(3)]],
            'type': [type],
            'password': [password, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6)]],
            'confPassword': '' /*[confPassword, [Validators.required,
              Validators.minLength(6)],*/
        });
    };
    return AddAdminComponent;
}());
AddAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-admin',
        template: __webpack_require__("../../../../../src/app/user/components/admin/add-admin/add-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/admin/add-admin/add-admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_actions_auth_actions__["a" /* AuthActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_user_actions__["a" /* UserActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object])
], AddAdminComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-catalog/add-catalog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-catalog/add-catalog.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"all\">\n\n  <div id=\"content\">\n    <div class=\"container\">\n\n   <router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-catalog/add-catalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCatalogComponent; });
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

var AddCatalogComponent = (function () {
    function AddCatalogComponent() {
    }
    AddCatalogComponent.prototype.ngOnInit = function () {
    };
    return AddCatalogComponent;
}());
AddCatalogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-catalog',
        template: __webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-catalog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-catalog.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddCatalogComponent);

//# sourceMappingURL=add-catalog.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-catalog/add-categorie/add-categorie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-catalog/add-categorie/add-categorie.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-9\" id=\"checkout\">\n\n  <div class=\"box\">\n\n\n    <h1>Add Categoire</h1>\n    <ul class=\"nav nav-pills nav-justified\">\n      <li class=\"\"><a [routerLink]=\"['/user/admin/add/product']\"><i class=\"fa-product-hunt\"></i><br>Product</a>\n      </li>\n      <li class=\"active\"><a [routerLink]=\"['/user/admin/add/categorie']\"><br>Categorie </a>\n      </li>\n      <li class=\"\"><a [routerLink]=\"['/user/admin/add/subcategorie']\"><i class=\"fa fa-money\"></i><br> Sub Categorie </a>\n      </li>\n      <li class=\"\"><a [routerLink]=\"['/user/admin/add/product']\"><i class=\"fa fa-eye\"></i><br> Autre </a>\n      </li>\n    </ul>\n    <div class=\"content\">\n\n      <!--\n                ****************     form add categorie     ** * * * * * *  *\n      -->\n\n<!--\n      {{ imageTable | json }}\n-->\n\n      <form [formGroup]=\"loginForm\"  (ngSubmit)=\"onSubmit()\" novalidate>\n        <div class=\"row\">\n          <div class=\"col-sm-3 col-md-3\">\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"CreditCardNumber\">title </label>\n              <input type=\"text\" class=\"form-control\" id=\"CreditCardNumber\" formControlName=\"title\" >\n            </div>\n          </div>\n\n          <div class=\"col-sm-3 col-md-3\">\n\n          </div>\n        </div>\n        <!-- /.row -->\n\n\n        <!-- /.row -->\n        <div class=\"row\">\n          <div class=\"col-sm-2 col-md-2\">\n          </div>\n          <div class=\"col-sm-8 col-md-8\">\n            <image-upload\n              [url]=\"'http://localhost/slim-cart-master/upload.php'\"\n              [buttonCaption]=\"'Select Images!'\"\n              [dropBoxMessage]=\"'Drop your images here!'\"\n              (onFileUploadFinish)=\"imageUploaded($event)\"\n              (onRemove)=\"imageRemoved($event)\"\n              (onFileUploadFinish)=\"imageFinishedUploading($event)\"\n            >\n            </image-upload>\n          </div>\n          <div class=\"col-sm-2 col-md-2\">\n          </div>\n\n        </div>\n\n        <!-- /.row -->\n\n        <div class=\"box-footer\">\n          <div class=\"pull-left\">\n          </div>\n          <div class=\"pull-right\">\n            <button class=\"btn btn-default\">  Cancel</button>\n            <button type=\"submit\" class=\"btn btn-primary\">Add Categorie\n\n            </button>\n          </div>\n\n\n        </div>\n\n      </form>\n\n\n    </div>\n    <!-- /.box -->\n\n\n\n  </div>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-catalog/add-categorie/add-categorie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCategorieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__catalog_actions_catalog_actions__ = __webpack_require__("../../../../../src/app/catalog/actions/catalog-actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddCategorieComponent = (function () {
    function AddCategorieComponent(store, fb, userService, toastr, catalogAction) {
        this.store = store;
        this.fb = fb;
        this.userService = userService;
        this.toastr = toastr;
        this.catalogAction = catalogAction;
        this.imageTable = [];
    }
    AddCategorieComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    AddCategorieComponent.prototype.onSubmit = function () {
        var _this = this;
        var values = this.loginForm.value;
        // service by asma
        this.userService.addCategorie(values).subscribe(function (res) {
            //(JSON.stringify(res));
            _this.toastr.success(res.msg, 'success!');
            _this.store.dispatch(_this.catalogAction.getAllCategories());
            _this.initForm();
        });
    };
    AddCategorieComponent.prototype.initForm = function () {
        var title = '';
        var images = this.imageTable = [];
        this.loginForm = this.fb.group({
            'title': [title],
            'image': [images],
        });
    };
    AddCategorieComponent.prototype.imageUploaded = function (event) {
        this.imageTable.push(event.file.name);
    };
    AddCategorieComponent.prototype.imageFinishedUploading = function (file) {
        //  //("test"+JSON.stringify(file.serverResponse));
    };
    AddCategorieComponent.prototype.imageRemoved = function (file) {
        // do some stuff with the removed file.
        ////("test"+JSON.stringify(file.serverResponse));
    };
    return AddCategorieComponent;
}());
AddCategorieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-categorie',
        template: __webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-categorie/add-categorie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-categorie/add-categorie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__catalog_actions_catalog_actions__["a" /* CatalogActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__catalog_actions_catalog_actions__["a" /* CatalogActions */]) === "function" && _e || Object])
], AddCategorieComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-categorie.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-catalog/add-product/add-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-catalog/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-9\" id=\"checkout\">\n\n  <div class=\"box\">\n\n\n      <h1>Add Products</h1>\n      <ul class=\"nav nav-pills nav-justified\">\n        <li class=\"active\"><a [routerLink]=\"['/user/admin/add/product']\"><i class=\"fa-product-hunt\"></i><br>Product</a>\n        </li>\n        <li class=\"\"><a [routerLink]=\"['/user/admin/add/categorie']\"><br>Categorie </a>\n        </li>\n        <li class=\"\"><a [routerLink]=\"['/user/admin/add/subcategorie']\"><i class=\"fa fa-money\"></i><br> Sub Categorie </a>\n        </li>\n        <li class=\"\"><a [routerLink]=\"['/user/admin/add/product']\"><i class=\"fa fa-eye\"></i><br> Autre </a>\n        </li>\n      </ul>\n      <div class=\"content\">\n\n        <!--\n                  ****************     form add product    ** * * * * * *  *\n        -->\n\n        <form [formGroup]=\"loginForm\"  (ngSubmit)=\"onSubmit()\" novalidate>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n\n              <div class=\"form-group\">\n                <label for=\"CreditCardNumber\">title </label>\n                <input type=\"text\" class=\"form-control\" id=\"CreditCardNumber\" formControlName=\"title\" >\n              </div>\n\n            </div>\n\n            <div class=\"col-sm-3 col-md-3\">\n              <div class=\"form-group\">\n\n                <label> categories </label>\n                  <select  class=\"form-control\" id=\"creditCardType\"\n                           (ngModelChange)=\"onChange($event)\" formControlName=\"categorie\"  >\n                  <option [value]=\"i\" *ngFor=\"let categorie of rootCategorie?.categorie ; let i = index\">\n                    {{categorie?.title}}\n\n                  </option>\n\n\n                </select>\n              </div>\n\n            </div>\n\n\n\n            <div  *ngIf=\"catSelect\"  class=\"col-sm-3 col-md-3\">\n\n              <div class=\"form-group\">\n                <label for=\"expirationMonth\">sub categorie </label>\n                <select  class=\"form-control\" id=\"expirationMonth\" formControlName=\"subCategorie\" >\n                  <option> Select sub categorie</option>\n\n                <option [value]=\"subcategorie?.id\" *ngFor=\"let subcategorie of subCat?.subcategories\" >\n                  {{subcategorie?.title}}\n                </option>\n                </select>\n              </div>\n\n            </div>\n\n          </div>\n          <!-- /.row -->\n\n\n          <!-- /.row -->\n          <div class=\"row\">\n\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\" >\n                <label for=\"firstName\">price </label>\n                <input type=\"number\" class=\"form-control\" id=\"firstName\" formControlName=\"price\" >\n              </div>\n            </div><!--firstName-->\n\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\">\n                <label for=\"lastName\"> stock </label>\n                <input type=\"number\" class=\"form-control\" id=\"lastName\" formControlName=\"stock\" >\n              </div>\n            </div><!--lastName-->\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"address1\">description  </label>\n                <textarea  class=\"form-control\" id=\"address1\" formControlName=\"description\">\n                </textarea>\n              </div>\n            </div><!--address1-->\n\n          </div>\n\n          <!-- /.row -->\n\n\n          <div class=\"row\">\n            <image-upload\n              [url]=\"'http://localhost/slim-cart-master/upload.php'\"\n              [buttonCaption]=\"'Select Images!'\"\n              [dropBoxMessage]=\"'Drop your images here!'\"\n              (onFileUploadFinish)=\"imageUploaded($event)\"\n              (onRemove)=\"imageRemoved($event)\"\n              (onFileUploadFinish)=\"imageFinishedUploading($event)\"\n            >\n            </image-upload>\n\n\n\n\n          </div>\n          <!-- /.row -->\n           <div class=\"box-footer\">\n            <div class=\"pull-left\">\n            </div>\n            <div class=\"pull-right\">\n              <button type=\"submit\" class=\"btn btn-default\">Cancel</button>\n\n              <button type=\"submit\" class=\"btn btn-primary\">Add Product\n              </button>\n            </div>\n          </div>\n\n    </form>\n  </div>\n      <!-- /.box -->\n\n\n\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-catalog/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalog_actions_catalog_actions__ = __webpack_require__("../../../../../src/app/catalog/actions/catalog-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalog_reducers_selectores__ = __webpack_require__("../../../../../src/app/catalog/reducers/selectores.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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








var AddProductComponent = (function () {
    function AddProductComponent(catalogAction, store, fb, userService, toastr) {
        this.catalogAction = catalogAction;
        this.store = store;
        this.fb = fb;
        this.userService = userService;
        this.toastr = toastr;
        this.imageTable = [];
        this.catSelect = false;
        this.formSubmit = false;
        this.errorSubmit = false;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__catalog_reducers_selectores__["a" /* getAllCategories */]).
            subscribe(function (rootCategorie) {
            _this.rootCategorie = rootCategorie;
            //("root " +JSON.stringify(rootCategorie));
        });
    };
    AddProductComponent.prototype.onSubmit = function () {
        var _this = this;
        var values = this.loginForm.value;
        //g(JSON.stringify(values));
        //("submit")
        this.userService.addProduct(values).subscribe(function (res) {
            _this.toastr.success(res.msg, 'success!');
            _this.initForm();
        });
    };
    AddProductComponent.prototype.onChange = function (value) {
        this.subCat = this.rootCategorie.categorie[value];
        this.catSelect = true;
        //  //("test asme 2  "+JSON.stringify(this.rootCategorie.categorie[value]));
    };
    AddProductComponent.prototype.imageFinishedUploading = function (file) {
        //  //("test"+JSON.stringify(file.serverResponse));
    };
    AddProductComponent.prototype.imageRemoved = function (file) {
        // do some stuff with the removed file.
        // //("test"+JSON.stringify(file.serverResponse));
    };
    AddProductComponent.prototype.imageUploaded = function (event) {
        this.imageTable.push(event.file.name);
    };
    AddProductComponent.prototype.initForm = function () {
        var title = ''; // email address attribute in Atg
        var price = '';
        var images = this.imageTable = [];
        this.loginForm = this.fb.group({
            'title': [title],
            'price': [price],
            'stock': '',
            'description': '',
            'subCategorie': '',
            'categorie': '',
            'image': [images],
        });
    };
    return AddProductComponent;
}());
AddProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-product',
        template: __webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-product/add-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-product/add-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__catalog_actions_catalog_actions__["a" /* CatalogActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__catalog_actions_catalog_actions__["a" /* CatalogActions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__core_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */]) === "function" && _e || Object])
], AddProductComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-catalog/add-sub-categoire/add-sub-categoire.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-catalog/add-sub-categoire/add-sub-categoire.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-9\" id=\"checkout\">\n\n  <div class=\"box\">\n\n\n    <h1>Add sub categorie</h1>\n    <ul class=\"nav nav-pills nav-justified\">\n      <li class=\"\"><a [routerLink]=\"['/user/admin/add/product']\"><i class=\"fa-product-hunt\"></i><br>Product</a>\n      </li>\n      <li class=\"\"><a [routerLink]=\"['/user/admin/add/categorie']\"><br>Categorie </a>\n      </li>\n      <li class=\"active\"><a [routerLink]=\"['/user/admin/add/subcategorie']\"><i class=\"fa fa-money\"></i><br> Sub Categorie </a>\n      </li>\n      <li class=\"\"><a [routerLink]=\"['/user/admin/add/product']\"><i class=\"fa fa-eye\"></i><br> Autre </a>\n      </li>\n    </ul>\n    <div class=\"content\">\n\n      <!--\n                ****************     form add product    ** * * * * * *  *\n      -->\n\n      <form [formGroup]=\"loginForm\"  (ngSubmit)=\"onSubmit()\" novalidate>\n        <div class=\"row\">\n          <div class=\"col-sm-3 col-md-3\">\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"CreditCardNumber\">title </label>\n              <input type=\"text\" class=\"form-control\" id=\"CreditCardNumber\" formControlName=\"title\" >\n            </div>\n          </div>\n\n          <div class=\"col-sm-3 col-md-3\">\n\n          </div>\n        </div>\n        <!-- /.row -->\n\n\n        <!-- /.row -->\n        <div class=\"row\">\n          <div class=\"col-sm-3 col-md-3\">\n          </div>\n          <div class=\"col-sm-6 col-md-6\">\n            <div class=\"form-group\">\n              <label> categories </label>\n              <select  class=\"form-control\" id=\"creditCardType\" formControlName=\"categorie\"                        >\n                <option  [value]=\"categorie.id\"  *ngFor=\"let categorie of rootCategorie?.categorie ; let i = index\">\n                  {{categorie.title}}\n\n                </option>\n\n\n              </select>\n            </div>\n          </div>\n          <div class=\"col-sm-3 col-md-3\">\n          </div>\n\n        </div>\n\n        <!-- /.row -->\n\n        <div class=\"box-footer\">\n          <div class=\"pull-left\">\n          </div>\n          <div class=\"pull-right\">\n            <button class=\"btn btn-default\"> Cancel </button>\n            <button type=\"submit\" class=\"btn btn-primary\"> Add Categorie\n\n            </button>\n\n          </div>\n\n        </div>\n\n      </form>\n\n\n    </div>\n    <!-- /.box -->\n\n\n\n  </div>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/user/components/admin/add-catalog/add-sub-categoire/add-sub-categoire.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSubCategoireComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalog_reducers_selectores__ = __webpack_require__("../../../../../src/app/catalog/reducers/selectores.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__catalog_actions_catalog_actions__ = __webpack_require__("../../../../../src/app/catalog/actions/catalog-actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddSubCategoireComponent = (function () {
    function AddSubCategoireComponent(store, fb, userService, toastr, catalogAction) {
        this.store = store;
        this.fb = fb;
        this.userService = userService;
        this.toastr = toastr;
        this.catalogAction = catalogAction;
    }
    AddSubCategoireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_1__catalog_reducers_selectores__["a" /* getAllCategories */]).
            subscribe(function (rootCategorie) {
            _this.rootCategorie = rootCategorie;
        });
        this.initForm();
    };
    AddSubCategoireComponent.prototype.onSubmit = function () {
        var _this = this;
        var values = this.loginForm.value;
        var keys = Object.keys(values);
        //(JSON.stringify(values))
        //("submit")
        this.userService.addSubCategorie(values).subscribe(function (res) {
            _this.toastr.success(res.msg, 'success!');
            _this.store.dispatch(_this.catalogAction.getAllCategories());
        });
    };
    AddSubCategoireComponent.prototype.initForm = function () {
        var title = '';
        var categorie = '';
        this.loginForm = this.fb.group({
            'title': [title],
            'categorie': [categorie],
        });
    };
    return AddSubCategoireComponent;
}());
AddSubCategoireComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-sub-categoire',
        template: __webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-sub-categoire/add-sub-categoire.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-sub-categoire/add-sub-categoire.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__catalog_actions_catalog_actions__["a" /* CatalogActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__catalog_actions_catalog_actions__["a" /* CatalogActions */]) === "function" && _e || Object])
], AddSubCategoireComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-sub-categoire.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"all\">\n\n  <div id=\"content\">\n    <div class=\"container\">\n\n\n      <div class=\"col-md-3\">\n        <!-- *** PAGES MENU ***\n_________________________________________________________ -->\n        <div class=\"panel panel-default sidebar-menu\">\n\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Pages</h3>\n          </div>\n\n          <div class=\"panel-body\">\n            <ul class=\"nav nav-pills nav-stacked\">\n              <li>\n                <a [routerLink]=\"['/user/admin']\" >Add catalog</a>\n              </li>\n\n              <li [routerLinkActive]=\"['active']\">\n                <a [routerLink]=\"['/user/admin/addusers']\"> Add admin   </a>\n              </li>\n              <li [routerLinkActive]=\"['active']\">\n                <a [routerLink]=\"['/user/admin/show']\" >Display catalog Method</a>\n              </li>\n              <li [routerLinkActive]=\"['active']\">\n                <a [routerLink]=\"['/user/admin/orders']\" > Orders</a>\n              </li>\n            </ul>\n\n          </div>\n        </div>\n\n        <!-- *** PAGES MENU END *** -->\n\n      </div>\n\n      <div class=\"col-md-9\" id=\"checkout\">\n\n\n      <router-outlet></router-outlet>\n\n      </div>\n\n\n      <!-- /.container -->\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/user/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(userService) {
        this.userService = userService;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.test = function () {
        this.userService.getUser(1).
            subscribe();
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/user/components/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/admin/display-catalog/display-catalog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/admin/display-catalog/display-catalog.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\n\n  <div id=\"content\">\n    <div class=\"container\">\n\n\n      <div class=\"col-md-9\" id=\"checkout\">\n\n        <div class=\"box\">\n\n\n          <h1>Edit  Products</h1>\n<div class=\"row\">\n          <div class=\"col-sm-3 col-md-3\">\n            <div class=\"form-group\">\n              <label> categories </label>\n              <select  class=\"form-control\" id=\"creditCardType\"  [ngModel]=\"selectedDevice\" (ngModelChange)=\"onChange($event)\">\n\n                <option [value]=\"i\" *ngFor=\"let categorie of rootCategorie?.categorie ; let i = index\">\n                  {{categorie.title}}\n\n                </option>\n              </select>\n            </div>\n          </div>\n\n\n          <div *ngIf=\"catSelect\" class=\"col-sm-3 col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"expirationMonth\">sub categorie </label>\n              <select  class=\"form-control\" id=\"expirationMonth\"   [ngModel]=\"selectedSubCat\" (ngModelChange)=\"onChangeSub($event)\">\n                <option>Select sub Categorie</option>\n                <option [value]=\"subcategorie.id\" *ngFor=\"let subcategorie of subCat?.subcategories\">\n                  {{subcategorie.title}}\n                </option>\n              </select>\n            </div>\n          </div>\n\n        </div>\n\n\n<!--\n          {{ products | json }}\n-->\n          <table id=\"example\" class=\"table table-striped table-bordered dt-responsive nowrap\" cellspacing=\"0\" width=\"100%\">\n            <thead>\n            <tr>\n              <th>Image</th>\n              <th>Name </th>\n              <th>Price</th>\n\n              <th>Stock</th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr  *ngFor=\"let product of products?.products \">\n              <td>\n                <img class=\"align-content-center\" [src]=\"getImage(product?.image[0]?.title)\" alt=\"\" >\n              </td>\n              <td>                <inline-editor type=\"textarea\" [(ngModel)]=\"product.title\" (onSave)=\"updateTitle(product.title,product.id)\"> </inline-editor>\n              </td>\n              <td>  <div>\n\n                <inline-editor type=\"textarea\" [(ngModel)]=\"product.price\" (onSave)=\"updatePrice(product.price,product.id)\"> </inline-editor>\n\n              </div></td>\n              <td>\n                <inline-editor type=\"textarea\" [(ngModel)]=\"product.stock\" (onSave)=\"updateStock(product.stock,product.id)\"> </inline-editor>\n\n              </td>\n              <td>\n                <a\n                  class=\"btn btn-default\"\n                  mwlConfirmationPopover\n                  [title]=\"title\"\n                  [message]=\"message\"\n                  placement=\"left\"\n                  (confirm)=\"remove(product?.id)\"\n                  (cancel)=\"cancelClicked = true\"\n                ><i class=\"fa fa-trash-o\"></i></a>\n              </td>\n\n            </tr>\n\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n"

/***/ }),

/***/ "../../../../../src/app/user/components/admin/display-catalog/display-catalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayCatalogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalog_actions_catalog_actions__ = __webpack_require__("../../../../../src/app/catalog/actions/catalog-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__catalog_reducers_selectores__ = __webpack_require__("../../../../../src/app/catalog/reducers/selectores.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DisplayCatalogComponent = (function () {
    function DisplayCatalogComponent(catalogAction, store, userService, catalogActions, toastr) {
        this.catalogAction = catalogAction;
        this.store = store;
        this.userService = userService;
        this.catalogActions = catalogActions;
        this.toastr = toastr;
        this.imageTable = [];
        this.catSelect = false;
        this.title = 'Confirmation';
        this.message = 'You want to delete it ?';
        this.confirmClicked = false;
        this.cancelClicked = false;
    }
    DisplayCatalogComponent.prototype.updateTitle = function (title, id) {
        this.userService.updateTitle(id, title).subscribe(function (res) {
            console.log(JSON.stringify(res));
        });
    };
    DisplayCatalogComponent.prototype.updateStock = function (stock, id) {
        this.userService.updateStock(id, stock).subscribe(function (res) {
            console.log(JSON.stringify(res));
        });
    };
    DisplayCatalogComponent.prototype.updatePrice = function (price, id) {
        this.userService.updatePrice(id, price).subscribe(function (res) {
            console.log(JSON.stringify(res));
        });
    };
    DisplayCatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_5__catalog_reducers_selectores__["a" /* getAllCategories */]).
            subscribe(function (rootCategorie) {
            _this.rootCategorie = rootCategorie;
        });
    };
    DisplayCatalogComponent.prototype.onChange = function (value) {
        this.subCat = this.rootCategorie.categorie[value];
        this.catSelect = true;
    };
    DisplayCatalogComponent.prototype.onChangeSub = function (value) {
        var _this = this;
        this.asma = value;
        this.store.dispatch(this.catalogActions.getListProducts(value));
        this.store.select(__WEBPACK_IMPORTED_MODULE_5__catalog_reducers_selectores__["b" /* getListProducts */])
            .subscribe(function (products) {
            _this.products = products;
        });
        console.log("change sub " + value);
    };
    DisplayCatalogComponent.prototype.getImage = function (item) {
        return __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API_ENDPOINT + item;
    };
    DisplayCatalogComponent.prototype.remove = function (id) {
        var _this = this;
        this.confirmClicked = true;
        this.userService.remove(id)
            .subscribe(function (res) {
            //  this.showToastr(item.skuName);
            if (!res.erreur) {
                _this.store.dispatch(_this.catalogActions.getListProducts(_this.asma));
                _this.toastr.success(res.msg, 'success!');
            }
            else {
                _this.toastr.error(res.msg, 'erreur!');
            }
        });
    };
    return DisplayCatalogComponent;
}());
DisplayCatalogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-display-catalog',
        template: __webpack_require__("../../../../../src/app/user/components/admin/display-catalog/display-catalog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/admin/display-catalog/display-catalog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__catalog_actions_catalog_actions__["a" /* CatalogActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__catalog_actions_catalog_actions__["a" /* CatalogActions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__catalog_actions_catalog_actions__["a" /* CatalogActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__catalog_actions_catalog_actions__["a" /* CatalogActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _e || Object])
], DisplayCatalogComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=display-catalog.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/admin/display-catalog/show-products/show-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/admin/display-catalog/show-products/show-products.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  show-products works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user/components/admin/display-catalog/show-products/show-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowProductsComponent; });
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

var ShowProductsComponent = (function () {
    function ShowProductsComponent() {
    }
    ShowProductsComponent.prototype.ngOnInit = function () {
    };
    return ShowProductsComponent;
}());
ShowProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-show-products',
        template: __webpack_require__("../../../../../src/app/user/components/admin/display-catalog/show-products/show-products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/admin/display-catalog/show-products/show-products.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ShowProductsComponent);

//# sourceMappingURL=show-products.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/admin/orders-admin/orders-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/admin/orders-admin/orders-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  orders-admin works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user/components/admin/orders-admin/orders-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersAdminComponent; });
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

var OrdersAdminComponent = (function () {
    function OrdersAdminComponent() {
    }
    OrdersAdminComponent.prototype.ngOnInit = function () {
    };
    return OrdersAdminComponent;
}());
OrdersAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders-admin',
        template: __webpack_require__("../../../../../src/app/user/components/admin/orders-admin/orders-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/admin/orders-admin/orders-admin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrdersAdminComponent);

//# sourceMappingURL=orders-admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/client/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/client/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\n  <div class=\"box\">\n    <h1>My account</h1>\n    <p class=\"lead\">Change your personal details or your password here.</p>\n    <p class=\"text-muted\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n\n    <h3>Change password</h3>\n\n    <form>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"password_old\">Old password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password_old\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"password_1\">New password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password_1\">\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"password_2\">Retype new password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password_2\">\n          </div>\n        </div>\n      </div>\n      <!-- /.row -->\n\n      <div class=\"col-sm-12 text-center\">\n        <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-save\"></i> Save new password</button>\n      </div>\n    </form>\n\n    <hr>\n\n    <h3>Personal details</h3>\n    <form>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"firstname\">Firstname</label>\n            <input type=\"text\" class=\"form-control\" id=\"firstname\">\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"lastname\">Lastname</label>\n            <input type=\"text\" class=\"form-control\" id=\"lastname\">\n          </div>\n        </div>\n      </div>\n      <!-- /.row -->\n\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"company\">Company</label>\n            <input type=\"text\" class=\"form-control\" id=\"company\">\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"street\">Street</label>\n            <input type=\"text\" class=\"form-control\" id=\"street\">\n          </div>\n        </div>\n      </div>\n      <!-- /.row -->\n\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-md-3\">\n          <div class=\"form-group\">\n            <label for=\"city\">Company</label>\n            <input type=\"text\" class=\"form-control\" id=\"city\">\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-3\">\n          <div class=\"form-group\">\n            <label for=\"zip\">ZIP</label>\n            <input type=\"text\" class=\"form-control\" id=\"zip\">\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-3\">\n          <div class=\"form-group\">\n            <label for=\"state\">State</label>\n            <select class=\"form-control\" id=\"state\"></select>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-3\">\n          <div class=\"form-group\">\n            <label for=\"country\">Country</label>\n            <select class=\"form-control\" id=\"country\"></select>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"phone\">Telephone</label>\n            <input type=\"text\" class=\"form-control\" id=\"phone\">\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" class=\"form-control\" id=\"email\">\n          </div>\n        </div>\n        <div class=\"col-sm-12 text-center\">\n          <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-save\"></i> Save changes</button>\n\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/components/client/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
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

var AccountComponent = (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../src/app/user/components/client/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/client/account/account.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AccountComponent);

//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/client/client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!-- *** NAVBAR END *** -->\n\n<div id=\"all\">\n\n  <div id=\"content\">\n    <div class=\"container\">\n\n      <div class=\"col-md-12\">\n\n        <ul class=\"breadcrumb\">\n          <li><a href=\"#\">Home</a>\n          </li>\n          <li>My account</li>\n        </ul>\n\n      </div>\n\n      <div class=\"col-md-3\">\n        <!-- *** CUSTOMER MENU ***\n_________________________________________________________ -->\n        <div class=\"panel panel-default sidebar-menu\">\n\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Customer section</h3>\n          </div>\n\n          <div class=\"panel-body\">\n\n            <ul class=\"nav nav-pills nav-stacked\">\n              <li [routerLinkActive]=\"['active']\">\n                <a [routerLink]=\"['./orders']\"><i class=\"fa fa-list\"></i> My orders</a>\n              </li>\n              <li [routerLinkActive]=\"['active']\">\n                <a [routerLink]=\"['./wishlist']\"><i class=\"fa fa-heart\"></i> My wishlist</a>\n              </li>\n              <li [routerLinkActive]=\"['active']\">\n                <a [routerLink]=\"['./account']\"  ><i class=\"fa fa-user\"></i> My account</a>\n              </li>\n              <li [routerLinkActive]=\"['active']\">\n                <a (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i> Logout</a>\n              </li>\n            </ul>\n          </div>\n\n        </div>\n        <!-- /.col-md-3 -->\n\n        <!-- *** CUSTOMER MENU END *** -->\n      </div>\n\n  <router-outlet></router-outlet>\n    </div>\n    <!-- /.container -->\n  </div>\n  <!-- /#content -->\n\n\n  <!-- *** FOOTER ***\n_________________________________________________________ -->\n  <!-- /#footer -->\n\n\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/user/components/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientComponent = (function () {
    function ClientComponent(store, authActions, toastr, router, authService, translate) {
        this.store = store;
        this.authActions = authActions;
        this.toastr = toastr;
        this.router = router;
        this.authService = authService;
        this.translate = translate;
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    ClientComponent.prototype.logout = function () {
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
    return ClientComponent;
}());
ClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client',
        template: __webpack_require__("../../../../../src/app/user/components/client/client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/client/client.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_actions_auth_actions__["a" /* AuthActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _f || Object])
], ClientComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/client/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/client/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\" id=\"customer-orders\">\n  <div class=\"box\">\n    <h1>My orders</h1>\n\n    <p class=\"lead\">Your orders on one place.</p>\n    <p class=\"text-muted\">If you have any questions, please feel free to <a href=\"contact.html\">contact us</a>, our customer service center is working for you 24/7.</p>\n\n    <hr>\n    <div class=\"table-responsive\">\n      <table class=\"table table-hover\">\n        <thead>\n        <tr>\n          <th>Order</th>\n          <th>Total item</th>\n          <th>Total</th>\n          <th>Status</th>\n          <th>Action</th>\n        </tr>\n        </thead>\n        <tbody>\n<!--\n        <tr *ngFor=\"let myOrder of order\">\n-->\n<tr>\n          <th># myOrder?.id</th>\n          <td>myOrder?.totalCommerceItemCount</td>\n          <td>$ myOrder?.priceInfo?.total}}</td>\n          <td><span class=\"label label-info\">status</span>\n          </td>\n          <td><a class=\"btn btn-primary btn-sm\">View</a>\n          </td>\n        </tr>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/components/client/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
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

var OrdersComponent = (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__("../../../../../src/app/user/components/client/orders/orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/client/orders/orders.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrdersComponent);

//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/client/wishlist/wishlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/client/wishlist/wishlist.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  wishlist works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user/components/client/wishlist/wishlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistComponent; });
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

var WishlistComponent = (function () {
    function WishlistComponent() {
    }
    WishlistComponent.prototype.ngOnInit = function () {
    };
    return WishlistComponent;
}());
WishlistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wishlist',
        template: __webpack_require__("../../../../../src/app/user/components/client/wishlist/wishlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/client/wishlist/wishlist.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WishlistComponent);

//# sourceMappingURL=wishlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/user/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_client_client_component__ = __webpack_require__("../../../../../src/app/user/components/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_routes__ = __webpack_require__("../../../../../src/app/user/user.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_add_catalog_add_catalog_component__ = __webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_add_catalog_add_product_add_product_component__ = __webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_add_catalog_add_categorie_add_categorie_component__ = __webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-categorie/add-categorie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_add_catalog_add_sub_categoire_add_sub_categoire_component__ = __webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-sub-categoire/add-sub-categoire.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_display_catalog_display_catalog_component__ = __webpack_require__("../../../../../src/app/user/components/admin/display-catalog/display-catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admin_display_catalog_show_products_show_products_component__ = __webpack_require__("../../../../../src/app/user/components/admin/display-catalog/show-products/show-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_admin_add_admin_add_admin_component__ = __webpack_require__("../../../../../src/app/user/components/admin/add-admin/add-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_inline_editor__ = __webpack_require__("../../../../ng2-inline-editor/ng2-inline-editor.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_confirmation_popover__ = __webpack_require__("../../../../angular-confirmation-popover/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_client_account_account_component__ = __webpack_require__("../../../../../src/app/user/components/client/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_client_orders_orders_component__ = __webpack_require__("../../../../../src/app/user/components/client/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_client_wishlist_wishlist_component__ = __webpack_require__("../../../../../src/app/user/components/client/wishlist/wishlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_orders_admin_orders_admin_component__ = __webpack_require__("../../../../../src/app/user/components/admin/orders-admin/orders-admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__user_routes__["a" /* UserRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__["ImageUploadModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_13__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_15_ng2_inline_editor__["a" /* InlineEditorModule */],
            __WEBPACK_IMPORTED_MODULE_20__ngx_translate_core__["b" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_16_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot({
                confirmButtonType: 'danger' // set defaults here
            }),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_client_client_component__["a" /* ClientComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_admin_add_catalog_add_catalog_component__["a" /* AddCatalogComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_admin_add_catalog_add_product_add_product_component__["a" /* AddProductComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_admin_add_catalog_add_categorie_add_categorie_component__["a" /* AddCategorieComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_admin_add_catalog_add_sub_categoire_add_sub_categoire_component__["a" /* AddSubCategoireComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_admin_display_catalog_display_catalog_component__["a" /* DisplayCatalogComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_admin_display_catalog_show_products_show_products_component__["a" /* ShowProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_admin_add_admin_add_admin_component__["a" /* AddAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_client_account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_client_orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_client_wishlist_wishlist_component__["a" /* WishlistComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_admin_orders_admin_orders_admin_component__["a" /* OrdersAdminComponent */]
        ]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/user/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_client_client_component__ = __webpack_require__("../../../../../src/app/user/components/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_admin_add_catalog_add_product_add_product_component__ = __webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_admin_add_catalog_add_sub_categoire_add_sub_categoire_component__ = __webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-sub-categoire/add-sub-categoire.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_admin_add_catalog_add_catalog_component__ = __webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_admin_add_catalog_add_categorie_add_categorie_component__ = __webpack_require__("../../../../../src/app/user/components/admin/add-catalog/add-categorie/add-categorie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_admin_display_catalog_display_catalog_component__ = __webpack_require__("../../../../../src/app/user/components/admin/display-catalog/display-catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_add_admin_add_admin_component__ = __webpack_require__("../../../../../src/app/user/components/admin/add-admin/add-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_client_orders_orders_component__ = __webpack_require__("../../../../../src/app/user/components/client/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_client_account_account_component__ = __webpack_require__("../../../../../src/app/user/components/client/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_client_wishlist_wishlist_component__ = __webpack_require__("../../../../../src/app/user/components/client/wishlist/wishlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_orders_admin_orders_admin_component__ = __webpack_require__("../../../../../src/app/user/components/admin/orders-admin/orders-admin.component.ts");












var UserRoutes = [
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_0__components_admin_admin_component__["a" /* AdminComponent */],
        children: [
            { path: '', redirectTo: 'add', pathMatch: 'full' },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_4__components_admin_add_catalog_add_catalog_component__["a" /* AddCatalogComponent */],
                children: [
                    { path: '', redirectTo: 'product', pathMatch: 'full' },
                    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_2__components_admin_add_catalog_add_product_add_product_component__["a" /* AddProductComponent */] },
                    { path: 'subcategorie', component: __WEBPACK_IMPORTED_MODULE_3__components_admin_add_catalog_add_sub_categoire_add_sub_categoire_component__["a" /* AddSubCategoireComponent */] },
                    { path: 'categorie', component: __WEBPACK_IMPORTED_MODULE_5__components_admin_add_catalog_add_categorie_add_categorie_component__["a" /* AddCategorieComponent */] },
                ],
            },
            { path: 'show', component: __WEBPACK_IMPORTED_MODULE_6__components_admin_display_catalog_display_catalog_component__["a" /* DisplayCatalogComponent */] },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_11__components_admin_orders_admin_orders_admin_component__["a" /* OrdersAdminComponent */] },
            /*       children: [
                     { path: '', redirectTo: 'product', pathMatch: 'full' },
                     { path: 'product', component:ShowProductsComponent },
           
                   ],
           
                 },*/
            { path: 'addusers', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_add_admin_add_admin_component__["a" /* AddAdminComponent */] },
        ]
    },
    { path: 'client', component: __WEBPACK_IMPORTED_MODULE_1__components_client_client_component__["a" /* ClientComponent */],
        children: [
            { path: '', redirectTo: 'account', pathMatch: 'full' },
            { path: 'wishlist', component: __WEBPACK_IMPORTED_MODULE_10__components_client_wishlist_wishlist_component__["a" /* WishlistComponent */] },
            { path: 'account', component: __WEBPACK_IMPORTED_MODULE_9__components_client_account_account_component__["a" /* AccountComponent */] },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_8__components_client_orders_orders_component__["a" /* OrdersComponent */] }
        ]
    },
];
//# sourceMappingURL=user.routes.js.map

/***/ }),

/***/ "../../../../angular2-image-upload/index.js":
/***/ (function(module, exports, __webpack_require__) {

exports.ImageUploadModule = __webpack_require__("../../../../angular2-image-upload/lib/image-upload.module.js").ImageUploadModule;


/***/ }),

/***/ "../../../../angular2-image-upload/lib/file-drop.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FileDropDirective = (function () {
    function FileDropDirective() {
        this.isFileOver = new core_1.EventEmitter();
        this.fileDrop = new core_1.EventEmitter();
    }
    FileDropDirective.prototype.onDragOver = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        dataTransfer.dropEffect = 'copy';
        event.preventDefault();
        this.isFileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        this.isFileOver.emit(false);
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        event.preventDefault();
        var files = this.filterFiles(dataTransfer.files);
        event.preventDefault();
        this.isFileOver.emit(false);
        this.fileDrop.emit(files);
    };
    FileDropDirective.prototype.filterFiles = function (files) {
        if (!this.accept || this.accept.length === 0) {
            return files;
        }
        var acceptedFiles = [];
        for (var i = 0; i < files.length; i++) {
            for (var j = 0; j < this.accept.length; j++) {
                if (FileDropDirective.matchRule(this.accept[j], files[i].type)) {
                    acceptedFiles.push(files[i]);
                    break;
                }
            }
        }
        return acceptedFiles;
    };
    FileDropDirective.matchRule = function (rule, candidate) {
        return new RegExp("^" + rule.split("*").join(".*") + "$").test(candidate);
    };
    FileDropDirective.getDataTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    };
    FileDropDirective.hasFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        if (types.contains) {
            return types.contains('Files');
        }
        return false;
    };
    return FileDropDirective;
}());
FileDropDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[fileDrop]'
            },] },
];
FileDropDirective.ctorParameters = function () { return []; };
FileDropDirective.propDecorators = {
    'accept': [{ type: core_1.Input },],
    'isFileOver': [{ type: core_1.Output },],
    'fileDrop': [{ type: core_1.Output },],
    'onDragOver': [{ type: core_1.HostListener, args: ['dragover', ['$event'],] },],
    'onDragLeave': [{ type: core_1.HostListener, args: ['dragleave', ['$event'],] },],
    'onDrop': [{ type: core_1.HostListener, args: ['drop', ['$event'],] },],
};
exports.FileDropDirective = FileDropDirective;
//# sourceMappingURL=file-drop.directive.js.map

/***/ }),

/***/ "../../../../angular2-image-upload/lib/image-upload.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var file_drop_directive_1 = __webpack_require__("../../../../angular2-image-upload/lib/file-drop.directive.js");
var image_upload_component_1 = __webpack_require__("../../../../angular2-image-upload/lib/image-upload/image-upload.component.js");
var image_service_1 = __webpack_require__("../../../../angular2-image-upload/lib/image.service.js");
var ImageUploadModule = (function () {
    function ImageUploadModule() {
    }
    ImageUploadModule.forRoot = function () {
        return {
            ngModule: ImageUploadModule,
            providers: [image_service_1.ImageService]
        };
    };
    return ImageUploadModule;
}());
ImageUploadModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    http_1.HttpModule
                ],
                declarations: [
                    image_upload_component_1.ImageUploadComponent,
                    file_drop_directive_1.FileDropDirective
                ],
                exports: [image_upload_component_1.ImageUploadComponent]
            },] },
];
ImageUploadModule.ctorParameters = function () { return []; };
exports.ImageUploadModule = ImageUploadModule;
//# sourceMappingURL=image-upload.module.js.map

/***/ }),

/***/ "../../../../angular2-image-upload/lib/image-upload/image-upload.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var image_service_1 = __webpack_require__("../../../../angular2-image-upload/lib/image.service.js");
var FileHolder = (function () {
    function FileHolder(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
    }
    return FileHolder;
}());
exports.FileHolder = FileHolder;
var ImageUploadComponent = (function () {
    function ImageUploadComponent(imageService) {
        this.imageService = imageService;
        this.max = 100;
        this.preview = true;
        this.withCredentials = false;
        this.isPending = new core_1.EventEmitter();
        this.onFileUploadFinish = new core_1.EventEmitter();
        this.onRemove = new core_1.EventEmitter();
        this.files = [];
        this.showFileTooLargeMessage = false;
        this.fileCounter = 0;
        this.isFileOver = false;
        this.buttonCaption = 'Select Images';
        this.dropBoxMessage = 'Drop your images here!';
        this.pendingFilesCounter = 0;
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
        if (!this.fileTooLargeMessage) {
            this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
        }
        this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map(function (ext) { return 'image/' + ext; }) : ['image/*'];
    };
    ImageUploadComponent.prototype.fileChange = function (files) {
        var remainingSlots = this.countRemainingSlots();
        var filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;
        if (this.url && filesToUploadNum != 0) {
            this.isPending.emit(true);
        }
        this.fileCounter += filesToUploadNum;
        this.showFileTooLargeMessage = false;
        this.uploadFiles(files, filesToUploadNum);
    };
    ImageUploadComponent.prototype.deleteFile = function (file) {
        var index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.fileCounter--;
        this.inputElement.nativeElement.value = '';
        this.onRemove.emit(file);
    };
    ImageUploadComponent.prototype.deleteAll = function () {
        var _this = this;
        this.files.forEach(function (f) { return _this.onRemove.emit(f); });
        this.files = [];
        this.fileCounter = 0;
        this.inputElement.nativeElement.value = '';
    };
    ImageUploadComponent.prototype.fileOver = function (isOver) {
        this.isFileOver = isOver;
    };
    ImageUploadComponent.prototype.uploadFiles = function (files, filesToUploadNum) {
        var _this = this;
        var _loop_1 = function (i) {
            var file = files[i];
            if (this_1.maxFileSize && file.size > this_1.maxFileSize) {
                this_1.showFileTooLargeMessage = true;
                return "continue";
            }
            var img = document.createElement('img');
            img.src = window.URL.createObjectURL(file);
            var reader = new FileReader();
            reader.addEventListener('load', function (event) {
                var fileHolder = new FileHolder(event.target.result, file);
                _this.uploadSingleFile(fileHolder);
                _this.files.push(fileHolder);
            }, false);
            reader.readAsDataURL(file);
        };
        var this_1 = this;
        for (var i = 0; i < filesToUploadNum; i++) {
            _loop_1(i);
        }
    };
    ImageUploadComponent.prototype.onResponse = function (response, fileHolder) {
        fileHolder.serverResponse = response;
        fileHolder.pending = false;
        this.onFileUploadFinish.emit(fileHolder);
        if (--this.pendingFilesCounter == 0) {
            this.isPending.emit(false);
        }
    };
    ImageUploadComponent.prototype.uploadSingleFile = function (fileHolder) {
        var _this = this;
        if (this.url) {
            this.pendingFilesCounter++;
            fileHolder.pending = true;
            this.imageService
                .postImage(this.url, fileHolder.file, this.headers, this.partName, this.withCredentials)
                .subscribe(function (response) { return _this.onResponse(response, fileHolder); }, function (error) {
                _this.onResponse(error, fileHolder);
                _this.deleteFile(fileHolder);
            });
        }
        else {
            this.onFileUploadFinish.emit(fileHolder);
        }
    };
    ImageUploadComponent.prototype.countRemainingSlots = function () {
        return this.max - this.fileCounter;
    };
    return ImageUploadComponent;
}());
ImageUploadComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'image-upload',
                template: "\n    <div class=\"image-upload\"\n         fileDrop\n         [accept]=\"supportedExtensions\"\n         (isFileOver)=\"fileOver($event)\"\n         (fileDrop)=\"fileChange($event)\"\n         [ngClass]=\"{'file-is-over': isFileOver}\"\n    >\n      <div class=\"file-upload hr-inline-group\">\n        <label class=\"upload button\">\n          <span [innerText]=\"buttonCaption\"></span>\n          <input\n            type=\"file\"\n            [accept]=\"supportedExtensions\"\n            multiple (change)=\"fileChange(input.files)\"\n            #input>\n        </label>\n        <label *ngIf=\"fileCounter > 0\" class=\"clear button\" (click)=\"deleteAll()\">\n          <span [innerText]=\"'Clear'\"></span>\n        </label>\n\n        <div class=\"drag-box-message\" [innerText]=\"dropBoxMessage\"></div>\n      </div>\n\n      <p class=\"file-too-large\" *ngIf=\"showFileTooLargeMessage\" [innerText]=\"fileTooLargeMessage\">\n      </p>\n\n      <div *ngIf=\"preview\" class=\"image-container hr-inline-group\">\n        <div\n          class=\"image\"\n          *ngFor=\"let file of files\"\n          [ngStyle]=\"{'background-image': 'url('+ file.src +')'}\"\n        >\n          <div *ngIf=\"file.pending\" class=\"loading-overlay\">\n            <div class=\"spinningCircle\"></div>\n          </div>\n          <div *ngIf=\"!file.pending\" class=\"x-mark\" (click)=\"deleteFile(file)\">\n            <span class=\"close\"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                styles: ["\n    .image-upload {\n      --common-radius: 3px;\n      --active-color: #33CC99;\n      position: relative;\n      border-radius: var(--common-radius);\n      border: #d0d0d0 dashed 1px;\n      font-family: sans-serif;\n    }\n\n    .file-is-over {\n      border-color: var(--active-color);\n      border-style: solid;\n    }\n\n    .hr-inline-group:after {\n      display: table;\n      clear: both;\n      content: \"\";\n    }\n\n    .file-upload {\n      padding: 16px;\n      background-color: #f8f8f8;\n    }\n\n    .drag-box-message {\n      float: left;\n      display: inline-block;\n      margin-left: 12px;\n      padding-top: 14px;\n      color: #9b9b9b;\n      font-weight: 600;\n    }\n\n    label.button input[type=file] {\n      display: none;\n      position: fixed;\n      top: -99999px;\n    }\n\n    .clear {\n      background-color: #FF0000;\n    }\n\n    .button {\n      cursor: pointer;\n      padding: 10px;\n      color: white;\n      font-size: 1.25em;\n      font-weight: 500;\n      text-transform: uppercase;\n      display: inline-block;\n      float: left;\n      -webkit-box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n      -moz-box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n      box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n    }\n\n    .button:active span {\n      position: relative;\n      display: block;\n      top: 1px;\n    }\n\n    .upload {\n      background-color: var(--active-color);\n    }\n\n    .image-container {\n      background-color: #fdfdfd;\n      padding: 0 10px 0 10px;\n    }\n\n    .image {\n      float: left;\n      display: inline-block;\n      margin: 6px;\n      width: 86px;\n      height: 86px;\n      background: center center no-repeat;\n      background-size: contain;\n      position: relative;\n    }\n\n    .x-mark {\n      width: 20px;\n      height: 20px;\n      text-align: center;\n      cursor: pointer;\n      border-radius: 2px;\n      float: right;\n      background-color: black;\n      opacity: .7;\n      color: white;\n      margin: 2px;\n    }\n\n    .close {\n      width: 20px;\n      height: 20px;\n      opacity: .7;\n      position: relative;\n      padding-right: 3px;\n    }\n\n    .x-mark:hover .close {\n      opacity: 1;\n    }\n\n    .close:before, .close:after {\n      border-radius: 2px;\n      position: absolute;\n      content: '';\n      height: 16px;\n      width: 2px;\n      top: 2px;\n      background-color: #FFFFFF;\n    }\n\n    .close:before {\n      transform: rotate(45deg);\n    }\n\n    .close:after {\n      transform: rotate(-45deg);\n    }\n\n    .loading-overlay {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      background-color: black;\n      opacity: .7;\n    }\n\n    .spinningCircle {\n      height: 30px;\n      width: 30px;\n      margin: auto;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      border-radius: 50%;\n      border: 3px solid rgba(255, 255, 255, 0);\n      border-top: 3px solid white;\n      border-right: 3px solid white;\n      -webkit-animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n      animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n    }\n\n    .file-too-large {\n      color: red;\n      padding: 0 15px;\n    }\n\n    @-webkit-keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n      }\n    }\n\n    @keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n\n      }\n    }\n  "]
            },] },
];
ImageUploadComponent.ctorParameters = function () { return [
    { type: image_service_1.ImageService, },
]; };
ImageUploadComponent.propDecorators = {
    'max': [{ type: core_1.Input },],
    'url': [{ type: core_1.Input },],
    'headers': [{ type: core_1.Input },],
    'preview': [{ type: core_1.Input },],
    'maxFileSize': [{ type: core_1.Input },],
    'withCredentials': [{ type: core_1.Input },],
    'partName': [{ type: core_1.Input },],
    'isPending': [{ type: core_1.Output },],
    'onFileUploadFinish': [{ type: core_1.Output },],
    'onRemove': [{ type: core_1.Output },],
    'buttonCaption': [{ type: core_1.Input },],
    'dropBoxMessage': [{ type: core_1.Input },],
    'fileTooLargeMessage': [{ type: core_1.Input },],
    'supportedExtensions': [{ type: core_1.Input, args: ['extensions',] },],
    'inputElement': [{ type: core_1.ViewChild, args: ['input',] },],
};
exports.ImageUploadComponent = ImageUploadComponent;
//# sourceMappingURL=image-upload.component.js.map

/***/ }),

/***/ "../../../../angular2-image-upload/lib/image.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
    }
    ImageService.prototype.postImage = function (url, image, headers, partName, withCredentials) {
        if (partName === void 0) { partName = 'image'; }
        if (!url || url === '') {
            throw new Error('Url is not set! Please set it before doing queries');
        }
        var options = new http_1.RequestOptions();
        if (withCredentials) {
            options.withCredentials = withCredentials;
        }
        if (headers) {
            options.headers = new http_1.Headers();
            for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
                var header = headers_1[_i];
                options.headers.append(header.header, header.value);
            }
        }
        var formData = new FormData();
        formData.append(partName, image);
        return this.http.post(url, formData, options);
    };
    return ImageService;
}());
ImageService.decorators = [
    { type: core_1.Injectable },
];
ImageService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ "../../../../ng2-inline-editor/ng2-inline-editor.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlineEditorModule; });
/* unused harmony export InputComponets */
/* unused harmony export InlineEditorComponent */
/* unused harmony export InputDateTimeComponent */
/* unused harmony export InputDateComponent */
/* unused harmony export InputNumberComponent */
/* unused harmony export InputPasswordComponent */
/* unused harmony export InputRangeComponent */
/* unused harmony export InputSelectComponent */
/* unused harmony export InputTextComponent */
/* unused harmony export InputTextareaComponent */
/* unused harmony export InputTimeComponent */
/* unused harmony export InputBase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * @abstract
 */
var InputBase = (function () {
    /**
     * @param {?} renderer
     */
    function InputBase(renderer) {
        this.renderer = renderer;
        this.isNumeric = false;
        this.isRegexTestable = false;
    }
    /**
     * @param {?} _context
     * @return {?}
     */
    InputBase.prototype.setContext = function (_context) {
        this.context = _context;
        this.whenContextIsReady();
    };
    /**
     * @return {?}
     */
    InputBase.prototype.whenContextIsReady = function () { };
    /**
     * @return {?}
     */
    InputBase.prototype.getPlaceholder = function () {
        return this.context.isEmpty ? this.context.empty : ((this.context.value));
    };
    /**
     * @return {?}
     */
    InputBase.prototype.focus = function () {
        var _this = this;
        setTimeout(function () { return _this.renderer.invokeElementMethod(_this.inputElement, "focus", []); });
    };
    return InputBase;
}());
var InputNumberComponent = (function (_super) {
    __extends(InputNumberComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputNumberComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isNumeric = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputNumberComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputNumberComponent;
}(InputBase));
InputNumberComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: "inline-editor-number",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"number\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputNumberComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
InputNumberComponent.propDecorators = {
    'inputRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["inputRef",] },],
};
var InputTextComponent = (function (_super) {
    __extends(InputTextComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputTextComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputTextComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputTextComponent;
}(InputBase));
InputTextComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: "inline-editor-text",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"text\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputTextComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
InputTextComponent.propDecorators = {
    'inputRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["inputRef",] },],
};
var InputPasswordComponent = (function (_super) {
    __extends(InputPasswordComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputPasswordComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputPasswordComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    /**
     * @return {?}
     */
    InputPasswordComponent.prototype.getPlaceholder = function () {
        return "*****";
    };
    return InputPasswordComponent;
}(InputBase));
InputPasswordComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: "inline-editor-password",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"password\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputPasswordComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
InputPasswordComponent.propDecorators = {
    'inputRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["inputRef",] },],
};
var InputRangeComponent = (function (_super) {
    __extends(InputRangeComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputRangeComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isNumeric = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputRangeComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputRangeComponent;
}(InputBase));
InputRangeComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: "inline-editor-range",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"range\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\"\n                      [min]=\"context.min\" [max]=\"context.max\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputRangeComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
InputRangeComponent.propDecorators = {
    'inputRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["inputRef",] },],
};
var InputTextareaComponent = (function (_super) {
    __extends(InputTextareaComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputTextareaComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputTextareaComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputTextareaComponent;
}(InputBase));
InputTextareaComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: "inline-editor-textarea",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<textarea #inputRef class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [rows]=\"context.rows\" [cols]=\"context.cols\" [disabled]=\"context.disabled\" [name]=\"context.name\"\n                      [placeholder]=\"context.placeholder\"></textarea>",
            },] },
];
/**
 * @nocollapse
 */
InputTextareaComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
InputTextareaComponent.propDecorators = {
    'inputRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["inputRef",] },],
};
var InputSelectComponent = (function (_super) {
    __extends(InputSelectComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputSelectComponent(renderer) {
        return _super.call(this, renderer) || this;
    }
    /**
     * @return {?}
     */
    InputSelectComponent.prototype.getPlaceholder = function () {
        return this.optionSelected();
    };
    /**
     * @return {?}
     */
    InputSelectComponent.prototype.optionSelected = function () {
        var /** @type {?} */ selectedOptionText;
        var /** @type {?} */ options = this.context.options;
        if (options && options.data) {
            for (var _i = 0, _a = options.data; _i < _a.length; _i++) {
                var option = _a[_i];
                selectedOptionText = this.getTextOfSelectedOption(option);
                if (selectedOptionText) {
                    break;
                }
            }
        }
        return selectedOptionText ? selectedOptionText : this.context.empty;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    InputSelectComponent.prototype.getTextOfSelectedOption = function (options) {
        var /** @type {?} */ textOfSelectedOption;
        var _a = ((this.context.options)), text = _a.text, value = _a.value;
        if (options.children) {
            for (var _i = 0, _b = options.children; _i < _b.length; _i++) {
                var child = _b[_i];
                textOfSelectedOption = this.getTextOfSelectedOption(child);
                if (textOfSelectedOption) {
                    break;
                }
            }
        }
        else {
            // tslint:disable-next-line:triple-equals
            if (options[value] == this.context.value) {
                textOfSelectedOption = options[text];
            }
        }
        return textOfSelectedOption;
    };
    /**
     * @return {?}
     */
    InputSelectComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputSelectComponent;
}(InputBase));
InputSelectComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: "inline-editor-select",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "\n    <select #inputRef class=\"form-control\" [(ngModel)]=\"context.value\">\n        <ng-template ngFor let-option [ngForOf]=\"context.options.data\">\n            <optgroup *ngIf=\"option.children\" [label]=\"option[context.options.text]\">\n                <option *ngFor=\"let child of option.children\" [value]=\"child[context.options.value]\">\n                    {{child[context.options.text]}}\n                </option>\n            </optgroup>\n            <option *ngIf=\"!option.children\" [value]=\"option[context.options.value]\">{{option[context.options.text]}}</option>\n        </ng-template>\n    </select>\n            ",
            },] },
];
/**
 * @nocollapse
 */
InputSelectComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
InputSelectComponent.propDecorators = {
    'inputRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["inputRef",] },],
};
var InputDateComponent = (function (_super) {
    __extends(InputDateComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputDateComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputDateComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputDateComponent;
}(InputBase));
InputDateComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: "inline-editor-date",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"date\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"\n                      [min]=\"context.min\" [max]=\"context.max\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputDateComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
InputDateComponent.propDecorators = {
    'inputRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["inputRef",] },],
};
var InputTimeComponent = (function (_super) {
    __extends(InputTimeComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputTimeComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputTimeComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputTimeComponent;
}(InputBase));
InputTimeComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: "inline-editor-time",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"time\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"\n                      [min]=\"context.min\" [max]=\"context.max\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputTimeComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
InputTimeComponent.propDecorators = {
    'inputRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["inputRef",] },],
};
var InputDateTimeComponent = (function (_super) {
    __extends(InputDateTimeComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputDateTimeComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputDateTimeComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputDateTimeComponent;
}(InputBase));
InputDateTimeComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: "inline-editor-datetime",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"datetime-local\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"\n                      [min]=\"context.min\" [max]=\"context.max\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputDateTimeComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
InputDateTimeComponent.propDecorators = {
    'inputRef': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["inputRef",] },],
};
var InputComponets = [
    InputTextComponent,
    InputNumberComponent,
    InputPasswordComponent,
    InputRangeComponent,
    InputTextareaComponent,
    InputSelectComponent,
    InputDateComponent,
    InputTimeComponent,
    InputDateTimeComponent,
];
// TO-DO Default's value
var inputConfig = {
    options: {
        data: [],
        text: "text",
        value: "value",
    },
    empty: "empty",
    placeholder: "",
    type: "text",
    disabled: false,
    name: "",
    size: 8,
    min: 1,
    pattern: "",
    max: Infinity,
    /**
     * @return {?}
     */
    fnErrorLength: function () { alert("Error: Lenght!"); },
    /**
     * @return {?}
     */
    fnErrorPattern: function () { alert("Error: Pattern!"); },
};
var InlineEditorComponent = (function () {
    /**
     * @param {?} componentFactoryResolver
     */
    function InlineEditorComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cols = 50;
        this.rows = 4;
        this.editing = false;
        this.isEmpty = false;
        this._value = "";
        this.preValue = "";
        this.components = {
            text: InputTextComponent,
            number: InputNumberComponent,
            password: InputPasswordComponent,
            range: InputRangeComponent,
            textarea: InputTextareaComponent,
            select: InputSelectComponent,
            date: InputDateComponent,
            time: InputTimeComponent,
            datetime: InputDateTimeComponent,
        };
    }
    Object.defineProperty(InlineEditorComponent.prototype, "options", {
        /**
         * @return {?}
         */
        get: function () { return this._options; },
        /**
         * @param {?} options
         * @return {?}
         */
        set: function (options) {
            this._options = options instanceof Array ?
                {
                    data: options,
                    value: "value",
                    text: "text",
                } : options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineEditorComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () { return this._value; },
        /**
         * @param {?} newValue
         * @return {?}
         */
        set: function (newValue) {
            if (newValue !== this._value) {
                this._value = newValue;
                this.onChange(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @param {?} typeName
     * @return {?}
     */
    InlineEditorComponent.prototype.getComponentType = function (typeName) {
        var /** @type {?} */ type = this.components[typeName];
        if (!type) {
            throw new Error("That type does not exist or it is not implemented yet!");
        }
        return type;
    };
    /**
     * @return {?}
     */
    InlineEditorComponent.prototype.ngOnInit = function () {
        if (this.type) {
            this.initializeProperties();
            this.generateComponent(this.type);
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    InlineEditorComponent.prototype.generateComponent = function (type) {
        var /** @type {?} */ componentType = this.getComponentType(type);
        this.inputInstance = this.createInputInstance(componentType);
        this.inputInstance.setContext(this);
    };
    /**
     * @param {?} componentType
     * @return {?}
     */
    InlineEditorComponent.prototype.createInputInstance = function (componentType) {
        var /** @type {?} */ factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        this.componentRef = this.container.createComponent(factory);
        return (this.componentRef.instance);
    };
    /**
     * @return {?}
     */
    InlineEditorComponent.prototype.initializeProperties = function () {
        this.initProperty("type");
        this.initProperty("disabled");
        this.initProperty("placeholder");
        this.initProperty("empty");
        this.initProperty("name");
        this.initProperty("size");
        this.initProperty("min");
        this.initProperty("max");
        this.initProperty("pattern");
        this.initProperty("options");
        this.initProperty("fnErrorLength");
        this.initProperty("fnErrorPattern");
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InlineEditorComponent.prototype.writeValue = function (value) {
        if (value == null) {
            this.isEmpty = true;
        }
        else {
            this.value = value;
            this.isEmpty = false;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    InlineEditorComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    InlineEditorComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    InlineEditorComponent.prototype.edit = function (value) {
        this.preValue = value; // Store original value in case the form is cancelled
        this.editing = true;
        this.inputInstance.focus();
        this.onEdit.emit(this);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InlineEditorComponent.prototype.onSubmit = function (value) {
        if (this.pattern && this.inputInstance.isRegexTestable && !new RegExp(this.pattern).test(value)) {
            return this.fnErrorPattern();
        }
        var /** @type {?} */ length = this.inputInstance.isNumeric ? Number(value) : value.length;
        if (length < this.min || length > this.max) {
            return this.fnErrorLength();
        }
        this.onSave.emit(value);
        this.editing = false;
        this.isEmpty = false;
    };
    /**
     * @return {?}
     */
    InlineEditorComponent.prototype.cancel = function () {
        this.value = this.preValue;
        this.editing = false;
        this.onCancel.emit(this);
    };
    /**
     * @param {?} property
     * @return {?}
     */
    InlineEditorComponent.prototype.initProperty = function (property) {
        this[property] = typeof this[property] !== "undefined"
            ? this[property]
            : inputConfig[property];
    };
    /**
     * @return {?}
     */
    InlineEditorComponent.prototype.showText = function () {
        return this.inputInstance ? this.inputInstance.getPlaceholder() : "Loading...";
    };
    return InlineEditorComponent;
}());
InlineEditorComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: "inline-editor",
                template: "<div>   <div id=\"inlineEditWrapper\">     <a [ngClass]=\"{'editable-empty': isEmpty, 'c-inline-editor' :true }\" (click)=\"edit(value)\" [hidden]=\"editing && !disabled\">{{ showText() }}</a>     <div class=\"c-inline-editor inlineEditForm form-inline\" [hidden]=\"!editing || disabled\">       <div class=\"form-group\">         <div #container></div>         <span class=\"c-inline-editor inline-editor-button-group\">          <button id=\"inline-editor-button-save\" class=\"btn btn-xs btn-primary c-inline-editor\"             (click)=\"onSubmit(value)\"><span class=\"fa fa-check\"></span></button>         <button class=\"btn btn-xs btn-danger c-inline-editor\" (click)=\"cancel()\"><span class=\"fa fa-remove\"></span> </button>         </span>        </div>     </div>   </div> </div>",
                providers: [{
                        provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                        useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return InlineEditorComponent; }),
                        multi: true,
                    }],
                entryComponents: InputComponets,
            },] },
];
/**
 * @nocollapse
 */
InlineEditorComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
]; };
InlineEditorComponent.propDecorators = {
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'onSave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onEdit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onCancel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'empty': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'required': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'min': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'pattern': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'fnErrorLength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'fnErrorPattern': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'cols': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'rows': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["container", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] },] },],
};
var InlineEditorModule = (function () {
    function InlineEditorModule() {
    }
    return InlineEditorModule;
}());
InlineEditorModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */]],
                declarations: [InlineEditorComponent].concat(InputComponets),
                exports: [InlineEditorComponent],
            },] },
];
/**
 * @nocollapse
 */
InlineEditorModule.ctorParameters = function () { return []; };



/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map