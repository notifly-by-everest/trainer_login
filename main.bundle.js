webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./uploads/shared/upload.module": [
		"../../../../../src/app/uploads/shared/upload.module.ts",
		"upload.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_user_login_user_login_component__ = __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_items_list_items_list_component__ = __webpack_require__("../../../../../src/app/items/items-list/items-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/ui/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_add_trainer_add_trainer_component__ = __webpack_require__("../../../../../src/app/ui/add-trainer/add-trainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_availability_availability_component__ = __webpack_require__("../../../../../src/app/ui/availability/availability.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_schedule_schedule_component__ = __webpack_require__("../../../../../src/app/ui/schedule/schedule.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__ui_user_login_user_login_component__["a" /* UserLoginComponent */], },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__ui_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'add-a-trainer', component: __WEBPACK_IMPORTED_MODULE_6__ui_add_trainer_add_trainer_component__["a" /* AddTrainerComponent */] },
    { path: 'availability', component: __WEBPACK_IMPORTED_MODULE_7__ui_availability_availability_component__["a" /* AvailabilityComponent */] },
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_8__ui_schedule_schedule_component__["a" /* ScheduleComponent */] },
    { path: 'items', component: __WEBPACK_IMPORTED_MODULE_4__items_items_list_items_list_component__["a" /* ItemsListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]] },
    { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<top-nav></top-nav>\n\n  <div class=\"content columns\">\n\n    <aside class=\"column is-10 is-offset-1\">\n      <router-outlet></router-outlet>\n    </aside>\n\n    <aside class=\"column is-1\">\n    </aside>\n\n  </div>\n\n\n<footer-nav></footer-nav>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__items_shared_item_module__ = __webpack_require__("../../../../../src/app/items/shared/item.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ui_shared_ui_module__ = __webpack_require__("../../../../../src/app/ui/shared/ui.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ui_add_trainer_add_trainer_component__ = __webpack_require__("../../../../../src/app/ui/add-trainer/add-trainer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






///// Start FireStarter


var firebaseConfig = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebaseConfig;
// Core

// Shared/Widget

// Feature Modules



///// End FireStarter
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__ui_add_trainer_add_trainer_component__["a" /* AddTrainerComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_10__items_shared_item_module__["a" /* ItemModule */],
            __WEBPACK_IMPORTED_MODULE_11__ui_shared_ui_module__["a" /* UiModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = (function () {
    function AuthGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.afAuth.authState
            .take(1)
            .map(function (user) { return !!user; })
            .do(function (loggedIn) {
            if (!loggedIn) {
                console.log('access denied');
                _this.router.navigate(['/login']);
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
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
    function AuthService(afAuth, db, router, _http) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this._http = _http;
        this.authState = null;
        this.env = null;
        this.baseURL = null;
        this.authChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.env = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */];
        this.baseURL = this.env['base_url'];
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
            _this.authChange.emit(_this.authState);
            if (_this.authState) {
                // console.log(this.authState['uid']);
                // console.log(this.baseURL, ' ', this.authState.uid );
                _this._http.get(_this.baseURL + '/activity_tracking?user_uid=' + _this.authState.uid + '&action=login')
                    .map(function (res) { return res; }).subscribe(function (res) {
                    // console.log("Done)");
                });
            }
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        // Returns true if user is logged in
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        // Returns current user data
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserObservable", {
        // Returns
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        // Returns current user UID
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserAnonymous", {
        // Anonymous User
        get: function () {
            return this.authenticated ? this.authState.isAnonymous : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserDisplayName", {
        // Returns current user display name or Guest
        get: function () {
            if (!this.authState) {
                return 'Guest';
            }
            else if (this.currentUserAnonymous) {
                return 'Anonymous';
            }
            else {
                return this.authState['displayName'] || 'User without a Name';
            }
        },
        enumerable: true,
        configurable: true
    });
    //// Social Auth ////
    AuthService.prototype.githubLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"].GithubAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"].GoogleAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.facebookLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"].FacebookAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.twitterLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"].TwitterAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.socialSignIn = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.authState = credential.user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Anonymous Auth ////
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth.signInAnonymously()
            .then(function (user) {
            _this.authState = user;
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        var fbAuth = __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]();
        return fbAuth.sendPasswordResetEmail(email)
            .then(function () { return console.log('email sent'); })
            .catch(function (error) { return console.log(error); });
    };
    //// Sign Out ////
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/login']);
    };
    //// Helpers ////
    AuthService.prototype.updateUserData = function () {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features
        var path = "partner_user/" + this.currentUserId; // Endpoint on firebase
        var data = {
            email: this.authState.email,
            name: this.authState.displayName
        };
        // this.db.object(path).update(data)
        //   .catch(error => console.log(error));
    };
    return AuthService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], AuthService.prototype, "authChange", void 0);
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _d || Object])
], AuthService);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuthModule */]]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/items/item-detail/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 [ngClass]=\"{ 'strike-out': !item.active }\">\n  {{ item.title || 'missing title' }}\n</h3>\n\n\n<div class=\"card-content\">\n\n  Task Active?: {{ item.active }}<br>\n  {{ item.timeStamp | date: 'medium' }}\n\n</div>\n\n<div class=\"card-footer\">\n  <span class=\"button is-small is-info card-footer-item\" (click)='updateTimeStamp()'>Update Timestamp</span>\n  <span class=\"button is-small is-success card-footer-item\" *ngIf='item.active' (click)='updateActive(false)'>Mark Complete</span>\n  <span class=\"button is-small is-warning card-footer-item\" *ngIf='!item.active' (click)='updateActive(true)'>Mark Incomplete</span>\n  <span class=\"button is-small is-danger card-footer-item\" (click)='deleteItem()'>Delete</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/items/item-detail/item-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\n  border-radius: 0;\n  margin: 10px 5px; }\n\n.strike-out {\n  text-decoration: line-through;\n  color: darkred; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/item-detail/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_item__ = __webpack_require__("../../../../../src/app/items/shared/item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemSvc) {
        this.itemSvc = itemSvc;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
    };
    ItemDetailComponent.prototype.updateTimeStamp = function () {
        var date = new Date().getTime();
        this.itemSvc.updateItem(this.item.$key, { timeStamp: date });
    };
    ItemDetailComponent.prototype.updateActive = function (value) {
        this.itemSvc.updateItem(this.item.$key, { active: value });
    };
    ItemDetailComponent.prototype.deleteItem = function () {
        this.itemSvc.deleteItem(this.item.$key);
    };
    return ItemDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_item__["a" /* Item */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_item__["a" /* Item */]) === "function" && _a || Object)
], ItemDetailComponent.prototype, "item", void 0);
ItemDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'item-detail',
        template: __webpack_require__("../../../../../src/app/items/item-detail/item-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/items/item-detail/item-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_item_service__["a" /* ItemService */]) === "function" && _b || Object])
], ItemDetailComponent);

var _a, _b;
//# sourceMappingURL=item-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/items/item-form/item-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>New Task Form</h3>\n\n    <label class=\"label\">Name: </label>\n\n    <input placeholder=\"Item Title\" class=\"input\"\n    [(ngModel)]=\"item.title\"\n    required minlength=\"2\" maxlength=\"23\"\n    #title='ngModel' autofocus>\n\n    <div *ngIf=\"title.dirty\">\n      <span *ngIf='title.errors; then errors else valid'>template renders here...</span>\n    </div>\n\n\n    <button class=\"button is-primary\" (click)='createItem()' [disabled]=\"!title.valid\">Create</button>\n\n\n<ng-template #valid>\n  <p class=\"help is-success\">looks good!</p>\n</ng-template>\n\n<ng-template #errors>\n  <p class=\"help is-danger\">form contains errors!</p>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/items/item-form/item-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/item-form/item-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_item__ = __webpack_require__("../../../../../src/app/items/shared/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemFormComponent = (function () {
    function ItemFormComponent(itemSvc) {
        this.itemSvc = itemSvc;
        this.item = new __WEBPACK_IMPORTED_MODULE_1__shared_item__["a" /* Item */]();
    }
    ItemFormComponent.prototype.ngOnInit = function () {
    };
    ItemFormComponent.prototype.createItem = function () {
        this.itemSvc.createItem(this.item);
        this.item = new __WEBPACK_IMPORTED_MODULE_1__shared_item__["a" /* Item */](); // reset item
    };
    return ItemFormComponent;
}());
ItemFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'item-form',
        template: __webpack_require__("../../../../../src/app/items/item-form/item-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/items/item-form/item-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_item_service__["a" /* ItemService */]) === "function" && _a || Object])
], ItemFormComponent);

var _a;
//# sourceMappingURL=item-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/items/items-list/items-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Items</h1>\n\n<p>This page is a demo of a very basic todo list in Angular, using the Firebase Realtime DB on the backend.</p>\n\n<div *ngFor=\"let item of items | async\" class=\"card\">\n  <item-detail [item]='item'></item-detail>\n</div>\n\n<loading-spinner *ngIf=\"showSpinner\"></loading-spinner>\n\n\n\n<button type=\"button\" class=\"button is-danger\" (click)='deleteItems()'>Delete Entire List</button>\n\n<hr>\n\n<item-form></item-form>\n"

/***/ }),

/***/ "../../../../../src/app/items/items-list/items-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  margin-bottom: 10px;\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/items-list/items-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemsListComponent = (function () {
    function ItemsListComponent(itemSvc) {
        this.itemSvc = itemSvc;
        this.showSpinner = true;
    }
    ItemsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.itemSvc.getItemsList({ limitToLast: 5 });
        this.items.subscribe(function () { return _this.showSpinner = false; });
    };
    ItemsListComponent.prototype.deleteItems = function () {
        this.itemSvc.deleteAll();
    };
    return ItemsListComponent;
}());
ItemsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'items-list',
        template: __webpack_require__("../../../../../src/app/items/items-list/items-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/items/items-list/items-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_item_service__["a" /* ItemService */]) === "function" && _a || Object])
], ItemsListComponent);

var _a;
//# sourceMappingURL=items-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/items/shared/item.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__items_list_items_list_component__ = __webpack_require__("../../../../../src/app/items/items-list/items-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__item_form_item_form_component__ = __webpack_require__("../../../../../src/app/items/item-form/item-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__item_detail_item_detail_component__ = __webpack_require__("../../../../../src/app/items/item-detail/item-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ItemModule = (function () {
    function ItemModule() {
    }
    return ItemModule;
}());
ItemModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__items_list_items_list_component__["a" /* ItemsListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__item_form_item_form_component__["a" /* ItemFormComponent */],
            __WEBPACK_IMPORTED_MODULE_8__item_detail_item_detail_component__["a" /* ItemDetailComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__item_service__["a" /* ItemService */]
        ]
    })
], ItemModule);

//# sourceMappingURL=item.module.js.map

/***/ }),

/***/ "../../../../../src/app/items/shared/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = (function () {
    function ItemService(db) {
        this.db = db;
        this.basePath = '/items';
        this.items = null; //  list of objects
        this.item = null; //   single object
    }
    // Return an observable list with optional query
    // You will usually call this from OnInit in a component
    ItemService.prototype.getItemsList = function (query) {
        if (query === void 0) { query = {}; }
        this.items = this.db.list('/items', {
            query: query
        });
        return this.items;
    };
    // Return a single observable item
    ItemService.prototype.getItem = function (key) {
        var itemPath = this.basePath + "/" + key;
        this.item = this.db.object(itemPath);
        return this.item;
    };
    // Create a bramd new item
    ItemService.prototype.createItem = function (item) {
        var _this = this;
        this.items.push(item)
            .catch(function (error) { return _this.handleError(error); });
    };
    // Update an exisiting item
    ItemService.prototype.updateItem = function (key, value) {
        var _this = this;
        this.items.update(key, value)
            .catch(function (error) { return _this.handleError(error); });
    };
    // Deletes a single item
    ItemService.prototype.deleteItem = function (key) {
        var _this = this;
        this.items.remove(key)
            .catch(function (error) { return _this.handleError(error); });
    };
    // Deletes the entire list of items
    ItemService.prototype.deleteAll = function () {
        var _this = this;
        this.items.remove()
            .catch(function (error) { return _this.handleError(error); });
    };
    // Default error handling for all actions
    ItemService.prototype.handleError = function (error) {
        console.log(error);
    };
    return ItemService;
}());
ItemService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ItemService);

var _a;
//# sourceMappingURL=item.service.js.map

/***/ }),

/***/ "../../../../../src/app/items/shared/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item() {
        this.active = true;
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/ui/add-trainer/add-trainer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Preloader */\n@-webkit-keyframes spinner {\n    to {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n  }\n@keyframes spinner {\n    to {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n  }\n   \n  .spinner:before {\n    content: '';\n    box-sizing: border-box;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 60px;\n    height: 60px;\n    margin-top: -10px;\n    margin-left: -10px;\n    border-radius: 60%;\n    border: 4px solid transparent;\n    border-top-color: #07d;\n    border-bottom-color: #07d;\n    -webkit-animation: spinner .8s ease infinite;\n            animation: spinner .8s ease infinite;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/add-trainer/add-trainer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content columns\">\n  <div class=\"column is-10 is-offset-1\">\n    <h3>Add A Trainer</h3>\n\n    <div class=\"field\">\n      <label class=\"label\" for=\"\">First name:</label>\n      <div class=\"control\">\n        <input class=\"input\" type=\"text\" [(ngModel)]=\"fname\">\n      </div>\n    </div>\n      \n    <div class=\"field\">\n      <label class=\"label\" for=\"\">Last name:</label>\n      <div class=\"control\">\n        <input class=\"input\" type=\"text\" [(ngModel)]=\"lname\">\n      </div>\n    </div>\n      \n    <div class=\"field\">\n      <label class=\"label\" for=\"\">Email:</label>\n      <div class=\"control\">\n        <input class=\"input\" type=\"text\" [(ngModel)]=\"email\">\n      </div>\n    </div>\n\n    <div class=\"field\">\n      <label class=\"label\" for=\"\">Phone:</label>\n      <div class=\"control\">\n        <input class=\"input\" type=\"text\" [(ngModel)]=\"phone\">\n      </div>\n    </div>\n    \n    <button *ngIf=\"!showPreloader\" (click)=\"addTrainer()\" class=\"button\">Add</button>\n    <span class=\"spinner\" *ngIf=\"showPreloader\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/add-trainer/add-trainer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTrainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddTrainerComponent = (function () {
    function AddTrainerComponent(_fbAuthSrv, _authSrv, _router, _webService, db) {
        this._fbAuthSrv = _fbAuthSrv;
        this._authSrv = _authSrv;
        this._router = _router;
        this._webService = _webService;
        this.db = db;
        this.fname = '';
        this.lname = '';
        this.email = '';
        this.phone = '';
        this.showPreloader = false;
    }
    AddTrainerComponent.prototype.ngOnInit = function () {
        if (this._webService.org_name_internal == '') {
            this._router.navigate(['dashboard']);
        }
        else {
            this.org_name = this._webService.org_name_internal;
        }
    };
    AddTrainerComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            alert('Enter a Valid Email Address');
            return false;
        }
        return true;
    };
    AddTrainerComponent.prototype.validatePhone = function (phone) {
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!re.test(phone) && phone.length != 10) {
            alert('Enter a Valid, 10-digit Phone Number');
            return false;
        }
        return true;
    };
    AddTrainerComponent.prototype.addTrainer = function () {
        //firebase request
        var _this = this;
        var trainer = {
            firstName: this.fname,
            lastName: this.lname,
            email: this.email,
            phone: this.phone,
            org: this.org_name
        };
        if (this.validateEmail(this.email) && this.validatePhone(this.phone) && this.fname != '' && this.lname != '') {
            this.showPreloader = true;
            console.log(trainer);
            this._webService.newTrainer_v2(trainer).subscribe(function (Response) {
                _this.showPreloader = false;
                console.log(Response);
                alert("Great, we've added " + _this.fname + " as a trainer.");
                _this.fname = '';
                _this.lname = '';
                _this.phone = '';
                _this.email = '';
            });
        }
        else {
            console.log('Invalid phone number or email.');
        }
    };
    return AddTrainerComponent;
}());
AddTrainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-trainer',
        template: __webpack_require__("../../../../../src/app/ui/add-trainer/add-trainer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/add-trainer/add-trainer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_web_service__["a" /* WebService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object])
], AddTrainerComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-trainer.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/availability/availability.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n    <div class=\"column is-10 is-offset-1 jumbo\">\n        <h2 class=\"\">Manage Your Availability</h2>\n\n        <div class=\"day\" *ngFor=\"let day of scheduleMultArr\">\n            <h4>{{day.day}}</h4>\n            <div class=\"available_slots columns\">\n                <div class=\"column is-4 slot\" *ngFor=\"let slot of day.availableSlots\">\n                    <p>Start: {{slot.startHumanTime}}</p>\n                    <p>End: {{slot.endHumanTime}}</p>\n                    <button (click)=\"deleteTimeSlot(day.day, slot)\" class=\"button\" *ngIf=\"!showPreloader\">Delete</button>\n                    <span class=\"spinner\" *ngIf=\"showPreloader2\"></span>\n                </div>\n            </div>\n            <button class=\"add_btn button\" (click)=\"addTimeSlotModalOpen(day.day)\">Add Another Slot</button>\n        </div>\n    </div>\n</div> \n        \n\n<!-- Edit profile modal-->\n<div class=\"column is-12 addScheduleModalClose s-background-color modal-bg\" *ngIf=\"addSchedModalBool\">    \n    <div class=\"has-text-centered background-spacing-fix modal-main\">\n        <button (click)=\"addTimeSlotModalClose()\" class=\"button addSchedClose\">Close</button>\n        <h3 class=\"addSchedTitle\">Add A Schedule</h3>\n        \n        <label for=\"start-time\">Select Start Time</label>\n        <select class=\"addSchedSelect addschedSelectTime\" id=\"start-time-hr\" [(ngModel)]=\"startTimeHr\" [ngModelOptions]=\"{standalone: true}\" >\n            <option *ngFor=\"let hr of startTimeHrArr\" value=\"{{hr}}\">{{hr}}</option>\n        </select>\n        <select class=\"addSchedSelect addschedSelectTime\" id=\"start-time-min\" [(ngModel)]=\"startTimeMin\" [ngModelOptions]=\"{standalone: true}\" >\n            <option *ngFor=\"let min of startTimeMinArr\" value=\"{{min}}\">{{min}}</option>\n        </select>\n        <select class=\"addSchedSelect addschedSelectTime\" id=\"start-time-period\" [(ngModel)]=\"startTimePeriod\" [ngModelOptions]=\"{standalone: true}\" >\n            <option *ngFor=\"let period of startTimePeriodArr\" value=\"{{period}}\">{{period}}</option>\n        </select>\n\n        <br>\n\n        <label for=\"start-time\">Select End Time</label>\n        <select class=\"addSchedSelect addschedSelectTime\" id=\"end-time-hr\" [(ngModel)]=\"endTimeHr\" [ngModelOptions]=\"{standalone: true}\" >\n            <option *ngFor=\"let hr of endTimeHrArr\" value=\"{{hr}}\">{{hr}}</option>\n        </select>\n        <select class=\"addSchedSelect addschedSelectTime\" id=\"end-time-min\" [(ngModel)]=\"endTimeMin\" [ngModelOptions]=\"{standalone: true}\" >\n            <option *ngFor=\"let min of endTimeMinArr\" value=\"{{min}}\">{{min}}</option>\n        </select>\n        <select class=\"addSchedSelect addschedSelectTime\" id=\"end-time-period\" [(ngModel)]=\"endTimePeriod\" [ngModelOptions]=\"{standalone: true}\" >\n            <option *ngFor=\"let period of endTimePeriodArr\" value=\"{{period}}\">{{period}}</option>\n        </select>\n\n        <div class=\"form-group\">\n            <span class=\"spinner\" *ngIf=\"showPreloader\"></span>\n\n            <button *ngIf=\"!showPreloader\" (click)=\"addTimeSlotSubmit()\" type=\"submit\" class=\"button addSchedSubmit\">Submit</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/availability/availability.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".day {\n  background: #d2d2d2;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  border-radius: 0px;\n  margin-bottom: 1em; }\n  .day h4 {\n    margin-left: 1em; }\n  .day .add_btn {\n    display: block;\n    margin-left: 1em; }\n  .day .slot {\n    text-align: center; }\n    .day .slot p {\n      margin-bottom: 0; }\n\n.s-background-color {\n  /*background-color: rgba(238, 238, 238, 1);*/\n  background-size: cover;\n  position: relative;\n  top: -2px;\n  /*background-color: #414345;*/ }\n\n/* MODAL */\n.modal-bg {\n  position: fixed;\n  left: 0;\n  z-index: 1002;\n  width: 100%;\n  height: 100%;\n  background: rgba(79, 81, 82, 0.65);\n  color: white;\n  overflow-y: scroll; }\n\n.modal-main {\n  width: 50%;\n  margin: auto;\n  background: #6d6969;\n  padding: 30px;\n  border-radius: 5px;\n  margin-top: 7%; }\n\n.addSchedClose {\n  display: block;\n  margin-left: auto;\n  padding: 0px 18px;\n  border-radius: 2px;\n  line-height: 1.7; }\n\n.addSchedTitle {\n  color: white;\n  font-family: 'Lato', sans-serif;\n  font-weight: 300;\n  margin-top: 7px; }\n\n.addSchedLabel {\n  display: block;\n  font-size: 15px; }\n\n.addSchedSelect {\n  color: #5a5a5a;\n  font-size: 17px;\n  border-radius: 3px;\n  -webkit-appearance: inherit;\n  padding: 3px 7px;\n  margin-bottom: 6px;\n  width: 200px; }\n\n.addschedSelectTime {\n  width: 65px; }\n\n.addSchedSubmit {\n  margin-top: 1em;\n  line-height: 1.5; }\n\n/* END: MODAL */\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 60%;\n  border: 4px solid transparent;\n  border-top-color: #07d;\n  border-bottom-color: #07d;\n  -webkit-animation: spinner .8s ease infinite;\n          animation: spinner .8s ease infinite; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/availability/availability.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_schedule_service__ = __webpack_require__("../../../../../src/app/ui/shared/schedule.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AvailabilityComponent = (function () {
    function AvailabilityComponent(_router, _activeRoute, _webService, _SchedService, db) {
        this._router = _router;
        this._activeRoute = _activeRoute;
        this._webService = _webService;
        this._SchedService = _SchedService;
        this.db = db;
        this.trainer_key = null;
        this.trainer_obj = {};
        this.scheduleMultArr = [];
        // Add schedule modal variables
        this.addSchedModalBool = false;
        this.startTimeHr = null;
        this.startTimeMin = null;
        this.startTimePeriod = null;
        this.startTimeHrArr = [];
        this.startTimeMinArr = [];
        this.startTimePeriodArr = ['AM', 'PM'];
        this.endTimeHr = null;
        this.endTimeMin = null;
        this.endTimePeriod = null;
        this.endTimeHrArr = [];
        this.endTimeMinArr = [];
        this.endTimePeriodArr = ['AM', 'PM'];
        this.showPreloader = false;
        this.showPreloader2 = false;
    }
    AvailabilityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startTimeHrArr = this._SchedService.timeHrArrCreator();
        this.endTimeHrArr = this._SchedService.timeHrArrCreator();
        this.startTimeMinArr = this._SchedService.timeMinArrCreator();
        this.endTimeMinArr = this._SchedService.timeMinArrCreator();
        this._activeRoute.queryParams.subscribe(function (params) {
            _this.trainer_key = params['trainer'];
            console.log(_this.trainer_key);
            // make sure we have both trainer_key & trainers_arr
            if (_this._webService.trainers_arr == null || _this.trainer_key == undefined) {
                _this._router.navigate(['dashboard']);
            }
            else {
                console.log(_this._webService.trainers_arr);
                _this.trainer_obj = _this._webService.trainers_arr[_this.trainer_key];
                console.log(_this.trainer_obj);
                _this.populateMultArr();
            }
        });
    };
    AvailabilityComponent.prototype.populateMultArr = function () {
        // iterate over each day
        for (var i = 0; i < 7; i++) {
            // get the object for the nth day
            var dayName = this._SchedService.getDayIndex(i);
            var dayAvailability = this.trainer_obj['availability'][dayName];
            var dayObj = {
                day: dayName.toUpperCase(),
                availableSlots: []
            };
            if (dayAvailability) {
                for (var key in dayAvailability) {
                    var slot = dayAvailability[key];
                    slot['startHumanTime'] = this.getHumanTime(slot['start']);
                    slot['endHumanTime'] = this.getHumanTime(slot['end']);
                    slot['slot_key'] = key;
                    dayObj.availableSlots.push(dayAvailability[key]);
                }
            }
            this.scheduleMultArr.push(dayObj);
        }
        console.log(this.scheduleMultArr);
    };
    AvailabilityComponent.prototype.addTimeSlotModalOpen = function (day) {
        console.log(day);
        this.addSchedSelectedDay = day;
        this.addSchedModalBool = true;
    };
    AvailabilityComponent.prototype.addTimeSlotModalClose = function () {
        this.addSchedModalBool = false;
    };
    AvailabilityComponent.prototype.addTimeSlotSubmit = function () {
        // get the start time and end time (in sec) of the slot
        // check if any of those values is between the current time slots
        // I.e. if addedSlotStart is less than end or greater than start
        var _this = this;
        if (this.startTimeHr == null || this.startTimeMin == null || this.startTimePeriod == null || this.endTimeHr == null || this.endTimeMin == null || this.endTimePeriod == null) {
            alert("Please select a specific start time and end time.");
        }
        else {
            var addedSlotStartSec = this.getTimeInSeconds(this.startTimeHr, this.startTimeMin, this.startTimePeriod);
            var addedSlotEndSec = this.getTimeInSeconds(this.endTimeHr, this.endTimeMin, this.endTimePeriod);
            if (addedSlotEndSec > addedSlotStartSec) {
                console.log(addedSlotStartSec);
                console.log(addedSlotEndSec);
                var selectedDayAvailability = this.trainer_obj['availability'][this.addSchedSelectedDay.toLowerCase()];
                var selectSlotIsValid = true;
                for (var key in selectedDayAvailability) {
                    if (addedSlotStartSec > selectedDayAvailability[key]['start'] && addedSlotStartSec < selectedDayAvailability[key]['end']) {
                        selectSlotIsValid = false;
                    }
                    else if (addedSlotEndSec > selectedDayAvailability[key]['start'] && addedSlotEndSec < selectedDayAvailability[key]['end']) {
                        selectSlotIsValid = false;
                    }
                    else if (addedSlotEndSec == selectedDayAvailability[key]['end'] || addedSlotStartSec == selectedDayAvailability[key]['start']) {
                        selectSlotIsValid = false;
                    }
                    else if (addedSlotStartSec < selectedDayAvailability[key]['start'] && addedSlotEndSec > selectedDayAvailability[key]['end']) {
                        selectSlotIsValid = false;
                    }
                }
                if (selectSlotIsValid) {
                    // start the preloader
                    this.showPreloader = true;
                    // alert("great, i'll save this one");
                    console.log(this.addSchedSelectedDay.toLowerCase() + ", Added Slot Start Sec: " + addedSlotStartSec + ", Added Slot End Sec: " + addedSlotEndSec);
                    this._webService.addTrainerAvailability(this.trainer_key, this.addSchedSelectedDay.toLowerCase(), addedSlotStartSec, addedSlotEndSec)
                        .subscribe(function (res) {
                        _this.showPreloader = false;
                        console.log(res);
                        alert("Done saving, sending to dashboard.");
                        _this._router.navigate(['dashboard']);
                    });
                }
                else {
                    alert("This time slot overlaps with one of the current time slots");
                }
            }
            else {
                alert("The end time must be after the start time");
            }
        }
    };
    AvailabilityComponent.prototype.deleteTimeSlot = function (day, slot) {
        var _this = this;
        console.log(this.trainer_obj['availability'][day.toLowerCase()]);
        this.showPreloader2 = true;
        this._webService.deleteTrainerAvailability(this.trainer_key, day.toLowerCase(), slot['slot_key'])
            .subscribe(function (res) {
            _this.showPreloader2 = false;
            console.log(res);
            alert("Done deleting, sending to dashboard.");
            _this._router.navigate(['dashboard']);
        });
    };
    // HELPERS
    AvailabilityComponent.prototype.getHumanTime = function (time) {
        var hours, min, period;
        hours = Math.floor(parseInt(time) / 3600);
        if (parseInt(time) / 3600 > hours) {
            min = ':30 ';
        }
        else {
            min = ':00 ';
        }
        if (hours > 12) {
            hours = hours - 12;
            period = 'pm';
        }
        else {
            period = 'am';
        }
        return (hours + min + period);
    };
    AvailabilityComponent.prototype.getTimeInSeconds = function (passedHr, passedMin, passedPeriod) {
        var hours = parseInt(passedHr);
        if (passedPeriod == 'PM' && passedHr != 12) {
            hours += 12;
        }
        console.log("hours: ", hours, " min: ", passedMin);
        return ((hours * 3600) + (passedMin * 60));
    };
    return AvailabilityComponent;
}());
AvailabilityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'availability',
        template: __webpack_require__("../../../../../src/app/ui/availability/availability.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/availability/availability.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_schedule_service__["a" /* ScheduleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_schedule_service__["a" /* ScheduleService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object])
], AvailabilityComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=availability.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <div class=\"column is-10 is-offset-1 jumbo\">\n    <h2>{{org_name}}</h2>\n    <p>Welcome to your Notifly Dashboard</p>\n  </div>\n</div>\n\n<div class=\"content columns\">\n  <div class=\"column is-10 is-offset-1\">\n    <h4>Manage Trainers:</h4>\n    <span class=\"spinner\" *ngIf=\"showPreloader\"></span>\n\n    <div class=\"content columns\" *ngFor=\"let inner_arr of trainers_arr\">\n      <div class=\"column is-6 trainer_btns\" *ngFor=\"let trainer of inner_arr\">\n        <button class=\"trainer_btn button\"   (click)=\"trainer.show = !trainer.show\" [ngClass]=\"{'active': trainer.show }\">\n          {{trainer.firstName}} {{trainer.lastName}}\n          <!-- {{trainer.name}} -->\n        </button>\n        <div *ngIf=\"trainer.show\" class=\"secondary_btns\">\n          <!-- <h4>Select One of the following options:</h4> --> \n          <button class=\"btn\" routerLink=\"/availability\" [queryParams]=\"{ trainer: trainer.authUid }\" >Set Availability</button>\n          <button class=\"btn\" routerLink=\"/schedule\" [queryParams]=\"{ trainer: trainer.authUid }\">View Schedule</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\n  background-color: white; }\n\n.jumbo {\n  background: #e0e0e0;\n  padding: 1em;\n  border-radius: 0px;\n  margin-bottom: 2em; }\n\n.trainer_btns .trainer_btn {\n  display: block;\n  margin: auto; }\n\n.secondary_btns {\n  margin-top: 1em; }\n  .secondary_btns .btn {\n    border: none;\n    display: block;\n    margin: auto;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    font-size: 13px;\n    background-color: grey;\n    padding: 5px 10px;\n    border-radius: 0;\n    color: white; }\n\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 60%;\n  border: 4px solid transparent;\n  border-top-color: #07d;\n  border-bottom-color: #07d;\n  -webkit-animation: spinner .8s ease infinite;\n          animation: spinner .8s ease infinite; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(_fbAuthSrv, _authSrv, _router, _webService, db) {
        this._fbAuthSrv = _fbAuthSrv;
        this._authSrv = _authSrv;
        this._router = _router;
        this._webService = _webService;
        this.db = db;
        this.trainers_arr = [];
        this.org_name = '';
        this.showPreloader = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set copy
        this.org_name = this._webService.org_name;
        // Check if user logged in, if not, send to login screen
        if (this._authSrv.authState == null) {
            this._router.navigate(['login']);
        }
        else {
            this.showPreloader = true;
            this._webService.dashboardCall().subscribe(function (res) {
                _this.showPreloader = false;
                _this.res_obj = JSON.parse(res['_body']);
                console.log(_this.res_obj);
                _this.org_trainers = _this.res_obj['trainers'];
                _this._webService.org_name = _this.res_obj['trainer_org_external'];
                _this._webService.org_name_internal = _this.res_obj['trainer_org_internal'];
                _this.org_name = _this._webService.org_name;
                console.log(_this.org_trainers);
                var trainers_arr = [];
                for (var key in _this.org_trainers) {
                    _this.org_trainers[key]['show'] = false;
                    trainers_arr.push(_this.org_trainers[key]);
                }
                _this.distribute_trainers(trainers_arr);
                console.log(trainers_arr);
                // this._webService.trainers_arr = this.org_trainers;
                _this._webService.trainers_arr = _this.org_trainers;
            });
        }
    };
    DashboardComponent.prototype.distribute_trainers = function (trainers) {
        // console.log(trainers.length);
        var outer_arr = [];
        var inner_arr = [];
        var counter_bool = true;
        for (var i = 0; i < trainers.length; i++) {
            if (counter_bool) {
                inner_arr.push(trainers[i]);
                counter_bool = !counter_bool;
            }
            else {
                inner_arr.push(trainers[i]);
                outer_arr.push(inner_arr);
                inner_arr = [];
                counter_bool = !counter_bool;
            }
            if (i == (trainers.length - 1)) {
                outer_arr.push(inner_arr);
            }
        }
        this.trainers_arr = outer_arr;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/ui/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_web_service__["a" /* WebService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <p>notifly</p>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Pacifico|Syncopate);", ""]);

// module
exports.push([module.i, ".footer {\n  text-align: right; }\n  .footer p {\n    font-family: 'Syncopate', sans-serif; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterNavComponent; });
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

var FooterNavComponent = (function () {
    function FooterNavComponent() {
    }
    FooterNavComponent.prototype.ngOnInit = function () {
    };
    return FooterNavComponent;
}());
FooterNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'footer-nav',
        template: __webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterNavComponent);

//# sourceMappingURL=footer-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\n  margin: 100px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px; }\n\n.spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n\n.spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n.spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponent; });
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

var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    return LoadingSpinnerComponent;
}());
LoadingSpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'loading-spinner',
        template: __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LoadingSpinnerComponent);

//# sourceMappingURL=loading-spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a id=\"FireStarter__Angular4__Firebase_Starter_App_0\"></a>FireStarter - Angular4 + Firebase Starter App</h1>\n<p>FireStarter is designed to handle the basic features most Angular+Firebase apps need. It can serve as a foundation to quickly roll out more complex features.</p>\n<p><a href=\"https://angularfirebase.com\">Lessons and Screencasts</a></p>\n<p><a href=\"https://join.slack.com/angularfirebase/shared_invite/MjA2NTgxMTI0MTk2LTE0OTg4NTQ4MDAtMjhhZDIzMjc0Mg\">Let's talk about Angular+Firebase on Slack</a></p>\n<h2><a id=\"Features_7\"></a>Features</h2>\n<ul>\n<li>Authentication w/ Router Guard</li>\n<li>Realtime Database CRUD Demo</li>\n<li>File Uploads to Firebase Storage Demo</li>\n<li>SASS + Bulma + FontAwesome</li>\n<li>Reactive Form Validation</li>\n</ul>\n\n<h2>Installation</h2>\n\nGet the latest Firestarter build on <a href=\"https://github.com/codediodeio/angular-firestarter\">Github</a>\n\n<h2><a id=\"Apps_Using_FireStarter_in_Production_49\"></a>Apps Using FireStarter in Production</h2>\n<ul>\n<li><a href=\"https://app.artifilter.com\">ArtiFilter</a> - Neural Art Generator</li>\n<li><a href=\"https://flashlawyer.com\">FlashLawyer</a> - Legal Document Builder and Chatbot</li>\n</ul>\n\n\n<!-- <a href=\"https://github.com/codediodeio/angular-firestarter\"><img style=\"position: absolute; top: 0; right: 0; border: 0; z-index: 999999;\" src=\"https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67\" alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png\"></a> -->\n"

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadmePageComponent; });
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

var ReadmePageComponent = (function () {
    function ReadmePageComponent() {
    }
    ReadmePageComponent.prototype.ngOnInit = function () {
    };
    return ReadmePageComponent;
}());
ReadmePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'readme-page',
        template: __webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ReadmePageComponent);

//# sourceMappingURL=readme-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/schedule/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content columns\">\n  <div class=\"column is-10 is-offset-1 jumbo\">\n    <h2 class=\"\">View & Delete Appointments</h2>\n\n    <div class=\"day\" *ngFor=\"let day of scheduleMultArr\">\n      <h4>{{day.date_human}}</h4>\n      <div class=\"available_slots columns\">\n        <div class=\"column is-4 slot\" *ngFor=\"let appointment of day.appointments\">\n          <p>Start: {{appointment.humanTime}}<span *ngIf=\"appointment.humanTimeEnd\"> - {{appointment.humanTimeEnd}}</span></p>\n          <p *ngIf=\"appointment.aptType\">Appointment Type: {{appointment.aptType}}</p>\n          <p>User: {{appointment.userName}}</p>\n          <p>Email: {{appointment.userEmail}}</p>\n          <p>Phone: {{appointment.userPhone}}</p>\n          <button (click)=\"deleteAppointment(day)\" class=\"button\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/schedule/schedule.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".day {\n  background: #d2d2d2;\n  padding-bottom: 1em;\n  margin-bottom: 1em; }\n  .day h4 {\n    background: #b0daff;\n    padding: 1em 1em; }\n  .day .add_btn {\n    display: block;\n    margin-left: 1em; }\n  .day .slot {\n    text-align: center;\n    max-width: 31.3%;\n    margin-left: 1%;\n    margin-right: 1%; }\n    .day .slot p {\n      margin-bottom: 0; }\n\n.s-background-color {\n  /*background-color: rgba(238, 238, 238, 1);*/\n  background-size: cover;\n  position: relative;\n  top: -2px;\n  /*background-color: #414345;*/ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/schedule/schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_schedule_service__ = __webpack_require__("../../../../../src/app/ui/shared/schedule.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScheduleComponent = (function () {
    function ScheduleComponent(_router, _activeRoute, _webService, _SchedService, db) {
        this._router = _router;
        this._activeRoute = _activeRoute;
        this._webService = _webService;
        this._SchedService = _SchedService;
        this.db = db;
        this.scheduleMultArr = [];
        this.today = new Date();
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activeRoute.queryParams.subscribe(function (params) {
            _this.trainer_key = params['trainer'];
            if (_this._webService.trainers_arr == null || _this.trainer_key == undefined) {
                _this._router.navigate(['dashboard']);
            }
            else {
                _this.trainer_schedule = _this._webService.trainers_arr[_this.trainer_key]['schedule'];
                // console.log(this.trainer_schedule);
                _this.populateMultArr();
            }
        });
    };
    ScheduleComponent.prototype.populateMultArr = function () {
        var today = new Date();
        var dateInt = today.getDate();
        var monthInt = today.getMonth() + 1;
        var year = today.getFullYear();
        var date = (dateInt < 10) ? ('0' + dateInt) : dateInt;
        var month = (monthInt < 10) ? ('0' + monthInt) : monthInt;
        var date = (dateInt < 10) ? ('0' + dateInt) : dateInt;
        var month = (monthInt < 10) ? ('0' + monthInt) : monthInt;
        var todayDate = year + '-' + month + '-' + date;
        // Go through each entry in the trainer_schedule
        for (var key in this.trainer_schedule) {
            if (todayDate <= key) {
                // console.log(key);
                this._SchedService.getHumanDate(key);
                var dateObj = {
                    date: key,
                    appointments: [],
                    date_human: this._SchedService.getHumanDate(key)
                };
                for (var key1 in this.trainer_schedule[key]) {
                    dateObj.appointments.push(this.trainer_schedule[key][key1]);
                }
                this.scheduleMultArr.push(dateObj);
            }
            // console.log(this.scheduleMultArr);
        }
    };
    ScheduleComponent.prototype.deleteAppointment = function (day) {
        console.log(day);
        alert("This features coming soon! - The Notifly Team");
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'schedule',
        template: __webpack_require__("../../../../../src/app/ui/schedule/schedule.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/schedule/schedule.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_schedule_service__["a" /* ScheduleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_schedule_service__["a" /* ScheduleService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object])
], ScheduleComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/shared/schedule.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
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

var ScheduleService = (function () {
    function ScheduleService() {
    }
    // SCHEDULES' HELPER METHODS
    ScheduleService.prototype.addTimeStamps = function (raw) {
        // console.log(raw);
        raw[0][0].bg_text = "12 AM";
        raw[0][3].bg_text = "12 AM";
        raw[0][6].bg_text = "12 AM";
        raw[12][0].bg_text = "6 AM";
        raw[12][3].bg_text = "6 AM";
        raw[12][6].bg_text = "6 AM";
        raw[24][0].bg_text = "12 PM";
        raw[24][3].bg_text = "12 PM";
        raw[24][6].bg_text = "12 PM";
        raw[36][0].bg_text = "6 PM";
        raw[36][3].bg_text = "6 PM";
        raw[36][6].bg_text = "6 PM";
        raw[47][0].bg_text = "12 AM";
        raw[47][3].bg_text = "12 AM";
        raw[47][6].bg_text = "12 AM";
        return raw;
    };
    ScheduleService.prototype.addSomeSchedule = function (raw, schedulesArray) {
        console.log(raw);
        console.log(schedulesArray);
        for (var i = 0; i < schedulesArray.length; i++) {
            var dayIndex = this.getDayIndex(schedulesArray[i].day_id);
            var startingBlock = schedulesArray[i].start / 1800;
            var endingBlock = schedulesArray[i].end / 1800;
            // console.log(schedulesArray[i].day_id + ", Start: " + schedulesArray[i].start + ", End: " + schedulesArray[i].end);
            // console.log(dayIndex + ", Starting Block: " + startingBlock + ", Ending Block: " + endingBlock);
            raw[startingBlock][dayIndex].text = 'X';
            raw[startingBlock][dayIndex].time_block_id = schedulesArray[i].time_block_id || false;
            for (var j = startingBlock; j < endingBlock; j++) {
                raw[j][dayIndex].scheduled = true;
            }
        }
        return raw;
    };
    ScheduleService.prototype.addSomeTimeblockSchedule = function (raw, schedulesArray) {
        // console.log(raw);
        // console.log(schedulesArray);
        for (var i = 0; i < schedulesArray.length; i++) {
            var dayIndex = this.getDayIndex(schedulesArray[i].days[0]);
            var startingBlock = schedulesArray[i].start / 1800;
            var endingBlock = (schedulesArray[i].duration + schedulesArray[i].start) / 1800;
            // console.log(schedulesArray[i].day_id + ", Start: " + schedulesArray[i].start + ", End: " + schedulesArray[i].end);
            // console.log(dayIndex + ", Starting Block: " + startingBlock + ", Ending Block: " + endingBlock);
            raw[startingBlock][dayIndex].text = 'X';
            raw[startingBlock][dayIndex].time_block_id = schedulesArray[i].time_block_id || false;
            for (var j = startingBlock; j < endingBlock; j++) {
                raw[j][dayIndex].scheduled = true;
            }
        }
        return raw;
    };
    ScheduleService.prototype.timeHrArrCreator = function () {
        var returnArr = [];
        for (var i = 1; i <= 12; i++) {
            returnArr.push(i);
        }
        return returnArr;
    };
    ScheduleService.prototype.timeMinArrCreator = function () {
        return [0, 30];
    };
    ScheduleService.prototype.getDayIndex = function (dayIndex) {
        switch (dayIndex) {
            case 0:
                return "sunday";
            case 1:
                return "monday";
            case 2:
                return "tuesday";
            case 3:
                return "wednesday";
            case 4:
                return "thursday";
            case 5:
                return "friday";
            case 6:
                return "saturday";
        }
    };
    ScheduleService.prototype.getTimeInSec = function (raw_hour, min, period) {
        var hour = null;
        if (raw_hour == 12) {
            hour = 0;
        }
        else {
            hour = raw_hour;
        }
        var timeInSec = 0;
        if (period == "AM") {
            timeInSec += hour * 3600;
        }
        else {
            timeInSec += hour * 3600;
            timeInSec += 43200;
        }
        timeInSec += (min * 60);
        return timeInSec;
    };
    ScheduleService.prototype.getHumanDate = function (numerical_date) {
        var dateArr = numerical_date.split('-');
        var monthNum = parseInt(dateArr[1]);
        return dateArr[0] + '-' + this.getMonthFromMonthIndex(monthNum) + '-' + dateArr[2];
    };
    ScheduleService.prototype.getMonthFromMonthIndex = function (month_index) {
        switch (month_index) {
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
            default:
                return false;
        }
    };
    return ScheduleService;
}());
ScheduleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ScheduleService);

//# sourceMappingURL=schedule.service.js.map

/***/ }),

/***/ "../../../../../src/app/ui/shared/ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__schedule_service__ = __webpack_require__("../../../../../src/app/ui/shared/schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_form_user_form_component__ = __webpack_require__("../../../../../src/app/ui/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__top_nav_top_nav_component__ = __webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_nav_footer_nav_component__ = __webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__readme_page_readme_page_component__ = __webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/ui/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__availability_availability_component__ = __webpack_require__("../../../../../src/app/ui/availability/availability.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__schedule_schedule_component__ = __webpack_require__("../../../../../src/app/ui/schedule/schedule.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var UiModule = (function () {
    function UiModule() {
    }
    return UiModule;
}());
UiModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__user_login_user_login_component__["a" /* UserLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__top_nav_top_nav_component__["a" /* TopNavComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_nav_footer_nav_component__["a" /* FooterNavComponent */],
            __WEBPACK_IMPORTED_MODULE_10__user_form_user_form_component__["a" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_13__readme_page_readme_page_component__["a" /* ReadmePageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__availability_availability_component__["a" /* AvailabilityComponent */],
            __WEBPACK_IMPORTED_MODULE_16__schedule_schedule_component__["a" /* ScheduleComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__web_service__["a" /* WebService */],
            __WEBPACK_IMPORTED_MODULE_7__schedule_service__["a" /* ScheduleService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_11__top_nav_top_nav_component__["a" /* TopNavComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_nav_footer_nav_component__["a" /* FooterNavComponent */],
            __WEBPACK_IMPORTED_MODULE_9__user_profile_user_profile_component__["a" /* UserProfileComponent */],
        ]
    })
], UiModule);

//# sourceMappingURL=ui.module.js.map

/***/ }),

/***/ "../../../../../src/app/ui/shared/web.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebService = (function () {
    function WebService(_http, _authSrv) {
        this._http = _http;
        this._authSrv = _authSrv;
        this.trainers_arr = null;
        this.env = null;
        this.baseURL = '';
        this.org_name = '';
        this.org_name_internal = '';
        this.auth_uid = null;
        this.env = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */];
        this.baseURL = this.env['base_url'];
        this.org_name = this.env['org_name'];
    }
    WebService.prototype.dashboardCall = function () {
        this.auth_uid = this._authSrv.currentUserId;
        return this._http.get(this.baseURL + '/admin_dashboard_call?user_uid=' + this.auth_uid)
            .map(function (res) { return res; });
    };
    WebService.prototype.activityTracker = function (action) {
        this.auth_uid = this._authSrv.currentUserId;
        return this._http.get(this.baseURL + '/activity_tracking?user_uid=' + this.auth_uid + '&action=' + action)
            .map(function (res) { return res; });
    };
    WebService.prototype.anonActivityTracker = function (anon_uid, instance) {
        return this._http.get(this.baseURL + '/anon_activity_tracking?user_uid=' + anon_uid + '&action=landed_on_login_page')
            .map(function (res) { return res; });
    };
    WebService.prototype.newTrainer_v2 = function (trainer) {
        this.auth_uid = this._authSrv.currentUserId;
        return this._http.post(this.baseURL + '/new_trainer_v2?user_uid=' + this.auth_uid, trainer)
            .map(function (res) { return res; });
    };
    WebService.prototype.newTrainer = function (trainer) {
        this.auth_uid = this._authSrv.currentUserId;
        return this._http.post(this.baseURL + '/new_trainer?user_uid=' + this.auth_uid, trainer)
            .map(function (res) { return res; });
    };
    WebService.prototype.addTrainerAvailability = function (trainer_key, selected_day, start_time, end_time) {
        this.auth_uid = this._authSrv.currentUserId;
        return this._http.get(this.baseURL + '/add_availability?user_uid=' + this.auth_uid + '&trainer_key=' + trainer_key + '&selected_day=' + selected_day + '&start_time=' + start_time + '&end_time=' + end_time)
            .map(function (res) { return res; });
    };
    WebService.prototype.deleteTrainerAvailability = function (trainer_key, slot_day, slot_key) {
        this.auth_uid = this._authSrv.currentUserId;
        return this._http.get(this.baseURL + '/delete_availability?user_uid=' + this.auth_uid + '&trainer_key=' + trainer_key + '&slot_day=' + slot_day + '&slot_key=' + slot_key)
            .map(function (res) { return res; });
    };
    return WebService;
}());
WebService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], WebService);

var _a, _b;
//# sourceMappingURL=web.service.js.map

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n  <div class=\"nav-left\">\n    <a class=\"nav-item\" routerLink=\"/\">\n      <!-- <img src=\"assets/images/foodora.png\" alt=\"\"/> -->\n      <p class=\"logo_text\">notifly</p>\n    </a>\n  </div>\n\n\n  <!-- This \"nav-toggle\" hamburger menu is only visible on mobile -->\n  <!-- You need JavaScript to toggle the \"is-active\" class on \"nav-menu\" -->\n  <span class=\"nav-toggle\" (click)=\"toggleCollapse()\" [ngClass]=\"{'is-active': show}\">\n    <span></span>\n    <span></span>\n    <span></span>\n  </span>\n\n  <!-- This \"nav-menu\" is hidden on mobile -->\n  <!-- Add the modifier \"is-active\" to display it on mobile -->\n  <div class=\"nav-right nav-menu\" [ngClass]=\"{'is-active': show}\">\n\n    <a *ngIf=\"!isLoggedIn\" class=\"nav-item\" routerLink=\"/login\">\n      Login\n    </a>\n\n    <a *ngIf=\"isLoggedIn\" class=\"nav-item\" routerLink=\"/dashboard\">\n      Dashboard\n    </a>\n    <a *ngIf=\"isLoggedIn\" class=\"nav-item\" routerLink=\"/add-a-trainer\">\n      Add A Trainer\n    </a>\n    <a *ngIf=\"isLoggedIn\" class=\"nav-item\" (click)=\"logout()\">\n      Logout\n    </a>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Pacifico|Syncopate);", ""]);

// module
exports.push([module.i, "nav {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n  margin-bottom: 25px;\n  padding: 0 5em;\n  background: #242424;\n  height: 3.5em; }\n\n.nav-item {\n  color: white; }\n\n.logo_text {\n  font-family: 'Syncopate', sans-serif;\n  font-size: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopNavComponent = (function () {
    function TopNavComponent(_authSrv) {
        this._authSrv = _authSrv;
        // collapse:string = "closed";
        this.show = false;
        this.isLoggedIn = false;
    }
    TopNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authSrv.authChange.subscribe(function (res) {
            // console.log(res);
            if (res) {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    TopNavComponent.prototype.logout = function () {
        this._authSrv.signOut();
    };
    TopNavComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
        // this.collapse = this.collapse == "open" ? 'closed' : 'open';
    };
    return TopNavComponent;
}());
TopNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'top-nav',
        template: __webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('collapse', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: '1',
                    display: 'block',
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('closed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: '0',
                    display: 'none',
                    transform: 'translate3d(0, -100%, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('closed => open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('open => closed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], TopNavComponent);

var _a;
//# sourceMappingURL=top-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns content\">\n  <div *ngIf=\"newUser\" class=\"column is-10 is-offset-1\">\n\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"signup()\">\n    \n      <h3>New User Signup</h3>\n      <p class=\"button is-small\" (click)=\"toggleForm()\">Already Registered?</p>\n      <hr>\n    \n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" class=\"input\"\n             formControlName=\"email\" required >\n    \n      <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\n        {{ formErrors.email }}\n      </div>\n    \n      <label for=\"password\">Password</label>\n      <input type=\"password\" id=\"password\" class=\"input\"\n             formControlName=\"password\" required >\n    \n      <div *ngIf=\"formErrors.password\" class=\"help is-danger\">\n        {{ formErrors.password }}\n      </div>\n    \n      <div *ngIf=\"userForm.valid\" class=\"help is-success\">Form is valid</div>\n      <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\n\n    </form>\n  </div>\n\n  \n  <div *ngIf=\"!newUser\" class=\"login_form column is-10 is-offset-1 has-text-centered\">\n\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"login()\">\n    \n\n      <h3>{{org_name}}</h3>\n      <p>Trainer Portal Login</p>\n\n      <!-- <p class=\"button is-small\" (click)=\"toggleForm()\">New User?</p> -->\n      <hr>\n    \n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" class=\"input\"\n             formControlName=\"email\" required >\n    \n      <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\n        {{ formErrors.email }}\n      </div>\n    \n      <label for=\"password\">Password</label>\n      <input type=\"password\" id=\"password\" class=\"input\"\n             formControlName=\"password\" required >\n    \n      <div *ngIf=\"formErrors.password\" class=\"help is-danger\">\n        {{ formErrors.password }}\n      </div>\n    \n      <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\n    \n      <span *ngIf=\"userForm.valid\" class=\"help is-success\">Form Looks Valid</span>\n    \n      <a *ngIf=\"!passReset && userForm.controls.email.valid\" class=\"help is-info\" (click)=\"resetPassword()\">Reset Password for {{userForm.value.email}}?</a>\n      <p *ngIf=\"passReset\" class=\"help is-info\">Reset requested. Check your email instructions.</p>\n  \n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login_form {\n  max-width: 500px;\n  display: block;\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserFormComponent = (function () {
    function UserFormComponent(fb, auth, _webService) {
        this.fb = fb;
        this.auth = auth;
        this._webService = _webService;
        // Set copy
        this.org_name = '';
        this.newUser = false; // to toggle login or signup form
        this.passReset = false; // set to true when password reset is triggered
        this.formErrors = {
            'email': '',
            'password': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email'
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 4 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            }
        };
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.org_name = this._webService.org_name;
        this.buildForm();
    };
    UserFormComponent.prototype.toggleForm = function () {
        this.newUser = !this.newUser;
    };
    UserFormComponent.prototype.signup = function () {
        this.auth.emailSignUp(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.login = function () {
        this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.resetPassword = function () {
        var _this = this;
        this.auth.resetPassword(this.userForm.value['email'])
            .then(function () { return _this.passReset = true; });
    };
    UserFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].email
                ]
            ],
            'password': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern('^(?=.*[0-9_@./#&+-])(?=.*[a-zA-Z_@./#&+-])([a-zA-Z0-9_@./#&+-]+)$'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(25)
                ]
            ],
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    UserFormComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-form',
        template: __webpack_require__("../../../../../src/app/ui/user-form/user-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/user-form/user-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_web_service__["a" /* WebService */]) === "function" && _c || Object])
], UserFormComponent);

var _a, _b, _c;
//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!auth.currentUser; else alreadyLoggedIn\">\n  <user-form></user-form>\n</div>\n\n\n\n<ng-template #alreadyLoggedIn>\n  <p class=\"text-success\">\n    Already logged in!\n  </p>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_shared_web_service__ = __webpack_require__("../../../../../src/app/ui/shared/web.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLoginComponent = (function () {
    function UserLoginComponent(auth, router, _webSrv) {
        this.auth = auth;
        this.router = router;
        this._webSrv = _webSrv;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userTracking();
        this.auth.authChange.subscribe(function (res) {
            if (res) {
                console.log("Logged In");
                _this.router.navigate(['/']);
            }
            else {
                console.log("Not Logged In");
            }
        });
    };
    // User tracking
    UserLoginComponent.prototype.userTracking = function () {
        console.log('check ls');
        if (localStorage.getItem('notifly-login-page-user') == undefined) {
            console.log("landing here for the first time");
            var anon_uid = 'user-' + Date.now();
            localStorage.setItem('notifly-login-page-user', anon_uid);
            this._webSrv.anonActivityTracker(anon_uid, 'first-landing').subscribe(function (res) { return res; });
        }
        else {
            console.log("revisiting login page as anon-user");
            var anon_uid = localStorage.getItem('notifly-login-page-user');
            this._webSrv.anonActivityTracker(anon_uid, 'revisiting_login_page').subscribe(function (res) { return res; });
        }
    };
    /// Social Login
    UserLoginComponent.prototype.signInWithGithub = function () {
        var _this = this;
        this.auth.githubLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.auth.googleLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.auth.facebookLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithTwitter = function () {
        var _this = this;
        this.auth.twitterLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    /// Anonymous Sign In
    UserLoginComponent.prototype.signInAnonymously = function () {
        var _this = this;
        this.auth.anonymousLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    /// Shared
    UserLoginComponent.prototype.afterSignIn = function () {
        // Do after login stuff here, such router redirects, toast messages, etc.
        this.router.navigate(['/']);
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-login',
        template: __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/user-login/user-login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ui_shared_web_service__["a" /* WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ui_shared_web_service__["a" /* WebService */]) === "function" && _c || Object])
], UserLoginComponent);

var _a, _b, _c;
//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- User logged in -->\n    <div class=\"box\" *ngIf=\"auth.currentUser\">\n        <h3>Howdy, {{ auth.currentUserDisplayName }}</h3>\n        <img class=\"card-img-top\" [src]=\"auth.currentUser.photoURL || 'https://api.adorable.io/avatars/109/fire.png'\" width=50px>\n        <p class=\"text-truncate\">UID: {{ auth.currentUserId }}</p>\n        <button class=\"button\" (click)=\"logout()\">Logout</button>\n\n   </div>\n\n    <!-- User NOT logged in -->\n    <div class=\"box\" *ngIf=\"!auth.currentUser\">\n        <h3>Howdy, {{ auth.currentUserDisplayName }}</h3>\n        <p class=\"card-text\">Login to get started...</p>\n        <button class=\"button\" routerLink=\"/login\">Login</button>\n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(auth) {
        this.auth = auth;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-profile',
        template: __webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserProfileComponent);

var _a;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBZgG8wBksKpOcmiLqd9ojWafmqREXav64",
        authDomain: "notifly-2.firebaseapp.com",
        databaseURL: "https://notifly-2.firebaseio.com",
        projectId: "notifly-2",
        storageBucket: "notifly-2.appspot.com",
        messagingSenderId: "16805757008"
    },
    org_name: 'Toronto Personal Training',
    base_url: 'https://us-central1-notifly-2.cloudfunctions.net'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
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