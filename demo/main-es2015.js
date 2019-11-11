(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-slider-main></app-slider-main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/slider-main/slider-main.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slider-main/slider-main.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"\">\n<div class=\"sliderParent\" appNavDir appNextNav appPrev appDotNav #lenCalc appCloneDir>\n    <div class=\"sliderMain\" appWidthDir>\n        <ng-template [ngIf]=\"sliderControl != null\">\n            <div class=\"slider\" *ngFor=\"let items of sliderText; index as i\" id='slider_{{i}}' [ngStyle]=\"{\n                backgroundImage: sliderControl.imgSelect != 'html' ? 'url(../../'+items.src+')' : 'url(null)',\n                backgroundSize: 'cover',\n                backgroundPosition: 'center'\n             }\" [class.bg]=\"sliderControl.imgSelect != 'html'\">\n                <img *ngIf=\"sliderControl.imgSelect == 'html'\" [src]=\"items.src\" [name]=\"items.name\">\n                <div class=\"textBanner\" *ngIf=\"items.heading != '' && items.paraText != ''\">\n                    <h2 *ngIf=\"items.heading != ''\">{{items.heading}}</h2>\n                    <p *ngIf=\"items.paraText != ''\">{{items.paraText}}</p>\n                    <button type=\"button\">{{items.buttonText}}</button>\n                </div>\n            </div>\n        </ng-template>\n    </div>\n    <div *ngIf=\"loader\" class=\"slidLoad\">\n        <img src=\"assets/loader.gif\">\n    </div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'sliderAngular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _slider_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider.module */ "./src/app/slider.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _slider_module__WEBPACK_IMPORTED_MODULE_4__["SliderModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/directive/clone-dir.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directive/clone-dir.directive.ts ***!
  \**************************************************/
/*! exports provided: CloneDirDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneDirDirective", function() { return CloneDirDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CloneDirDirective = class CloneDirDirective {
    constructor(el, renderer) {
        this.el = el;
        this.loopCount = 0;
        this.mainLen = 0;
        this.wid = window.innerWidth;
    }
    callAfter(len) {
        this.mainLen = Number(len);
        this.cloneFun();
    }
    resize() {
        // this.resetClone();
    }
    resetClone() {
        const a = this.el.nativeElement.querySelectorAll('.sliderMain')[0];
        let b = a.getElementsByClassName('slider_clone');
        for (let i = 0; i < this.loopCount; i++) {
            a.removeChild(b[0]);
        }
        this.cloneFun();
    }
    cloneFun() {
        let c = 0;
        const a = this.el.nativeElement.attributes.data_items.value;
        const b = this.mainLen % a;
        if (b == 0) {
            this.loopCount = 0;
        }
        else {
            this.loopCount = a - b;
        }
        this.cloneInsert(this.loopCount);
    }
    cloneInsert(loop) {
        let a = this.el.nativeElement.querySelectorAll('.sliderMain')[0];
        setTimeout(() => {
            const b = a.getElementsByClassName('slider');
            for (let i = 0; i < loop; i++) {
                let d = b[i].cloneNode(true);
                d.id = 'slider_clone_' + i + '';
                d.className = 'slider slider_clone';
                a.appendChild(d);
            }
        }, 0);
    }
};
CloneDirDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], CloneDirDirective.prototype, "resize", null);
CloneDirDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appCloneDir]'
    })
], CloneDirDirective);



/***/ }),

/***/ "./src/app/directive/dot-nav.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directive/dot-nav.directive.ts ***!
  \************************************************/
/*! exports provided: DotNavDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotNavDirective", function() { return DotNavDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DotNavDirective = class DotNavDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.elem = this.el.nativeElement;
        this.a = null;
        this.valuePass = null;
        this.condCheck = null;
    }
    // @Output() passCount = new EventEmitter;
    windowResize() {
        if (this.condCheck) {
            //  this.calcWidth();
            //  this.lengthSlider();
        }
    }
    callAfter() {
        let constChck = this.elem.attributes.data_dot.value;
        if (constChck == 'true') {
            this.frstSt();
        }
    }
    ngAfterViewInit() {
    }
    frstSt() {
        this.a = this.elem.querySelector('.nav_dots');
        let b = this.a.querySelectorAll('.dotsInner');
        for (let index = 0; index < b.length; index++) {
            this.renderer.listen(b[index], 'click', (value) => {
                for (let index = 0; index < b.length; index++) {
                    this.renderer.removeClass(b[index], 'active');
                }
                let idd = value.target.id;
                this.renderer.addClass(b[index], 'active');
                this.widthCalc(idd);
            });
        }
    }
    activetop(id) {
        let b = this.a.querySelectorAll('.dotsInner');
        for (let index = 0; index < b.length; index++) {
            this.renderer.removeClass(b[index], 'active');
        }
        this.renderer.addClass(b[id], 'active');
    }
    widthCalc(idd) {
        this.renderer.setStyle(this.elem.children[0], 'transform', 'translate3d(-' + this.calcWidth() * idd + 'px,0,0)');
        this.renderer.setAttribute(this.elem, 'data_count', idd.toString());
        this.renderer.setAttribute(this.elem, 'data_id', (this.calcWidth() * idd).toString());
        this.disableNav();
    }
    disableNav() {
        let count = this.elem.attributes.data_count.value;
        const len = this.elem.attributes.data_len.value;
        const lenNext = this.elem.querySelector('#next');
        if (lenNext != null) {
            if (count == 0) {
                this.renderer.removeAttribute(this.el.nativeElement.querySelector('#next'), 'disabled');
                this.renderer.setAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled', 'true');
            }
            else if (count == len - 1) {
                this.renderer.removeAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled');
                this.renderer.setAttribute(this.el.nativeElement.querySelector('#next'), 'disabled', 'true');
            }
            else {
                this.renderer.removeAttribute(this.el.nativeElement.querySelector('#next'), 'disabled');
                this.renderer.removeAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled');
            }
        }
        //  this.passCount.emit(count);
    }
    calcWidth() {
        if (window.innerWidth - this.el.nativeElement.offsetWidth < 20) {
            return window.innerWidth;
        }
        else {
            return this.el.nativeElement.offsetWidth;
        }
    }
};
DotNavDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], DotNavDirective.prototype, "windowResize", null);
DotNavDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDotNav]'
    })
], DotNavDirective);



/***/ }),

/***/ "./src/app/directive/nav-dir.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directive/nav-dir.directive.ts ***!
  \************************************************/
/*! exports provided: NavDirDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDirDirective", function() { return NavDirDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavDirDirective = class NavDirDirective {
    constructor(el, rendere) {
        this.el = el;
        this.rendere = rendere;
        this.obj = null;
        this.callAfterdata = null;
    }
    resize() {
    }
    resetResp() {
        if (this.callAfterdata != null) {
            const a = this.el.nativeElement;
            const b = a.getElementsByClassName('navClass')[0];
            const c = a.getElementsByClassName('nav_dots')[0];
            if (b != undefined || c != undefined) {
                if (b != undefined) {
                    a.removeChild(b);
                }
                if (c != undefined) {
                    a.removeChild(c);
                }
            }
            this.callMain();
        }
    }
    condCheck(val) {
        this.callAfterdata = true;
        this.obj = val;
        this.callMain();
    }
    callMain() {
        if (this.obj.nav == 'true')
            this.createNav();
        this.callAfter();
    }
    createNav() {
        const di = this.rendere.createElement('div');
        this.rendere.addClass(di, 'navClass');
        const a = this.rendere.createElement('button');
        this.rendere.setAttribute(a, 'type', 'button');
        this.rendere.addClass(a, 'nav');
        this.rendere.addClass(a, 'nav-prev');
        this.rendere.setProperty(a, 'id', 'prev');
        const d = this.rendere.createText('prev');
        this.rendere.appendChild(a, d);
        const e = this.rendere.createElement('button');
        this.rendere.setAttribute(e, 'type', 'button');
        this.rendere.addClass(e, 'nav');
        this.rendere.addClass(e, 'nav-next');
        this.rendere.setProperty(e, 'id', 'next');
        const h = this.rendere.createText('next');
        this.rendere.appendChild(e, h);
        this.rendere.appendChild(di, a);
        this.rendere.appendChild(di, e);
        this.rendere.appendChild(this.el.nativeElement, di);
    }
    navDots() {
        const a = this.rendere.createElement('div');
        this.rendere.addClass(a, 'nav_dots');
        const len = this.el.nativeElement.attributes.data_len.value;
        for (let i = 0; i < len; i++) {
            const b = this.rendere.createElement('button');
            this.rendere.setAttribute(b, 'type', 'button');
            this.rendere.setAttribute(b, 'id', i.toString());
            this.rendere.addClass(b, 'dotsInner');
            this.rendere.appendChild(a, b);
        }
        this.rendere.appendChild(this.el.nativeElement, a);
        this.rendere.addClass(this.el.nativeElement.querySelector('.dotsInner'), 'active');
    }
    callAfter() {
        if (this.obj.dot == 'true')
            this.navDots();
        this.rendere.setAttribute(this.el.nativeElement, 'data_count', (0).toString());
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
};
NavDirDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window: resize', ['$event'])
], NavDirDirective.prototype, "resize", null);
NavDirDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appNavDir]'
    })
], NavDirDirective);



/***/ }),

/***/ "./src/app/directive/next-nav.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directive/next-nav.directive.ts ***!
  \*************************************************/
/*! exports provided: NextNavDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextNavDirective", function() { return NextNavDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dot_nav_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dot-nav.directive */ "./src/app/directive/dot-nav.directive.ts");



let NextNavDirective = class NextNavDirective {
    constructor(el, renderer, dotNav) {
        this.el = el;
        this.renderer = renderer;
        this.dotNav = dotNav;
        this.width = null;
        this.count = 0;
        this.countLen = 0;
        this.countCount = 0;
        this.elem = this.el.nativeElement;
        this.ev = null;
        this.condDot = null;
        this.condResize = true;
    }
    widthCal() {
        this.renderer.setAttribute(this.elem, 'data_count', '-1'.toString());
        // this.renderer.setAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled', 'true');
        this.condResize = false;
        this.setAtrr();
    }
    onKeyDown(event) {
        if (this.condDot != null) {
            let constChck = this.elem.attributes.data_key.value;
            if (constChck == 'true') {
                this.keymousecond(event);
            }
        }
    }
    onMouseWheel(event) {
        if (this.condDot != null) {
            let constChck = this.elem.attributes.data_wheel.value;
            event.preventDefault();
            if (constChck == 'true') {
                this.keymousecond(event);
            }
        }
        //  return false;
    }
    keymousecond(event) {
        let cc = Number(this.elem.attributes.data_count.value);
        let cclen = Number(this.elem.attributes.data_len.value);
        if (event.keyCode == 39 || event.deltaY > 0) {
            if (cc == cclen - 1) {
                return false;
            }
            else if (cc == 0) {
                this.setAtrr();
            }
            else {
                this.setAtrr();
            }
        }
    }
    ngOnInit() {
    }
    callAfter() {
        let condCheck = this.elem.attributes.data_nav.value;
        this.condDot = this.elem.attributes.data_dot.value;
        if (condCheck == 'true') {
            this.mainCal();
        }
    }
    ngAfterViewInit() {
    }
    mainCal() {
        this.renderer.listen(this.elem.querySelector('#prev'), 'click', () => {
            this.count = Number(this.elem.attributes.data_count.value);
        });
        this.renderer.listen(this.elem.querySelector('#next'), 'click', () => {
            this.condResize = true;
            this.setAtrr();
        });
    }
    setAtrr() {
        this.widthMain();
        this.count = Number(this.elem.attributes.data_count.value);
        this.renderer.setAttribute(this.elem, 'data_count', (++this.count).toString());
        this.countCount = Number(this.elem.attributes.data_count.value);
        if (this.condDot == 'true') {
            this.dotNav.activetop(this.countCount);
        }
        this.widthCalc();
    }
    widthMain() {
        if (window.innerWidth - this.el.nativeElement.offsetWidth < 20) {
            this.width = window.innerWidth;
        }
        else {
            this.width = this.el.nativeElement.offsetWidth;
        }
    }
    widthCalc() {
        //  console.log(this.countCount);
        this.renderer.setStyle(this.elem.children[0], 'transform', 'translate3d(-' + this.width * this.countCount + 'px,0,0)');
        this.renderer.setAttribute(this.elem, 'data_id', (this.width * this.countCount).toString());
        if (this.condResize) {
            this.navDisable();
        }
    }
    navDisable() {
        const lenNext = this.elem.querySelector('#next');
        if (lenNext != null) {
            console.log(this.countCount, Number(this.elem.attributes.data_len.value - 1));
            if (this.countCount == Number(this.elem.attributes.data_len.value - 1)) {
                this.renderer.setAttribute(this.el.nativeElement.querySelector('#next'), 'disabled', 'true');
                this.renderer.removeAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled');
                return true;
            }
            else {
                this.renderer.removeAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled');
            }
        }
    }
};
NextNavDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _dot_nav_directive__WEBPACK_IMPORTED_MODULE_2__["DotNavDirective"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')
], NextNavDirective.prototype, "widthCal", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window: keydown', ['$event'])
], NextNavDirective.prototype, "onKeyDown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousewheel', ['$event'])
], NextNavDirective.prototype, "onMouseWheel", null);
NextNavDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appNextNav]'
    })
], NextNavDirective);



/***/ }),

/***/ "./src/app/directive/prev.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/directive/prev.directive.ts ***!
  \*********************************************/
/*! exports provided: PrevDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevDirective", function() { return PrevDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dot_nav_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dot-nav.directive */ "./src/app/directive/dot-nav.directive.ts");



let PrevDirective = class PrevDirective {
    constructor(el, render, dotNav) {
        this.el = el;
        this.render = render;
        this.dotNav = dotNav;
        this.elem = this.el.nativeElement;
        this.widMain = null;
        this.dataId = null;
        this.dataCount = null;
        this.condDot = null;
    }
    callFun(event) {
        if (this.condDot != null) {
            let constChck = this.elem.attributes.data_key.value;
            if (constChck == 'true') {
                this.keymousecond(event);
            }
        }
    }
    onMouseWheel(event) {
        if (this.condDot != null) {
            let constChck = this.elem.attributes.data_wheel.value;
            event.preventDefault();
            if (constChck == 'true') {
                this.keymousecond(event);
            }
        }
        //  return false;
    }
    keymousecond(event) {
        let cc = Number(this.elem.attributes.data_count.value);
        if (event.keyCode == 37 || event.deltaY < 0) {
            if (cc == 0) {
                return false;
            }
            else {
                this.setAttr();
            }
        }
    }
    ngAfterViewInit() {
    }
    callAfter() {
        this.render.setAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled', 'true');
        let condCheck = this.elem.attributes.data_nav.value;
        this.condDot = this.elem.attributes.data_dot.value;
        if (condCheck == 'true') {
            this.mainCal();
        }
    }
    mainCal() {
        this.render.listen(this.elem.querySelector('#prev'), 'click', () => {
            this.setAttr();
        });
    }
    setAttr() {
        this.windowWid();
        this.dataId = this.el.nativeElement.attributes.data_id.value;
        this.widthCalc();
    }
    widthCalc() {
        this.render.setStyle(this.el.nativeElement.children[0], 'transform', 'translate3d(-' + (Number(this.dataId) - Number(this.widMain)) + 'px,0,0)');
        this.render.setAttribute(this.el.nativeElement, 'data_id', (Number(this.dataId) - Number(this.widMain)).toString());
        let countLen = Number(this.elem.attributes.data_count.value);
        countLen = countLen - 1;
        this.render.setAttribute(this.el.nativeElement, 'data_count', countLen.toString());
        this.dataCount = this.el.nativeElement.attributes.data_count.value;
        if (this.condDot == 'true') {
            this.dotNav.activetop(this.dataCount); //pass dot nav
        }
        this.navDisable();
    }
    navDisable() {
        const lenNext = this.elem.querySelector('#next');
        if (lenNext != null) {
            if (this.dataCount == 0) {
                this.render.setAttribute(this.el.nativeElement.querySelector('#prev'), 'disabled', 'true');
                this.render.removeAttribute(this.el.nativeElement.querySelector('#next'), 'disabled');
            }
            else {
                this.render.removeAttribute(this.el.nativeElement.querySelector('#next'), 'disabled');
            }
        }
    }
    windowWid() {
        if (window.innerWidth - this.el.nativeElement.offsetWidth < 20) {
            this.widMain = window.innerWidth;
        }
        else {
            this.widMain = this.el.nativeElement.offsetWidth;
        }
    }
};
PrevDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _dot_nav_directive__WEBPACK_IMPORTED_MODULE_2__["DotNavDirective"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window: keydown', ['$event'])
], PrevDirective.prototype, "callFun", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousewheel', ['$event'])
], PrevDirective.prototype, "onMouseWheel", null);
PrevDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appPrev]'
    })
], PrevDirective);



/***/ }),

/***/ "./src/app/directive/width-dir.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directive/width-dir.directive.ts ***!
  \**************************************************/
/*! exports provided: WidthDirDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidthDirDirective", function() { return WidthDirDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clone_dir_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clone-dir.directive */ "./src/app/directive/clone-dir.directive.ts");



let WidthDirDirective = class WidthDirDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.len = 0;
        this.cond = false;
        this.data = null;
        this.arraKey = [];
        this.itemsCal = 0;
        this.condLopp = 0;
        this.itemsLen = 0;
    }
    windowResize() {
        if (this.cond) {
        }
    }
    callAfter(data) {
        this.condLopp++;
        if (this.condLopp == 1) {
            this.itemsLen = this.el.nativeElement.parentElement.attributes.data_len.value;
        }
        this.itemsCal = this.el.nativeElement.parentElement.attributes.data_items.value;
        // console.log(this.itemsCal)
        this.data = data;
        this.respData();
        this.calcWidth(); // length calculuate
        this.lengthSlider();
        this.cond = true;
    }
    ngAfterViewInit() {
    }
    lengthSlider() {
        let a = null;
        //  console.log(this.calcItems())
        if (this.itemsCal > 1) {
            a = this.calcWidth() * this.calcItems();
            this.childWidth(true);
            this.renderer.setAttribute(this.el.nativeElement.parentElement, 'data_len', this.calcItems().toString());
        }
        else {
            a = this.calcWidth() * this.itemsLen;
            this.childWidth(false);
            this.renderer.setAttribute(this.el.nativeElement.parentElement, 'data_len', this.calcItems().toString());
        }
        // console.log(a);
        this.renderer.setStyle(this.el.nativeElement, 'width', '' + a + 'px');
    }
    childWidth(a) {
        setTimeout(() => {
            const b = this.el.nativeElement.querySelectorAll('.slider');
            b.forEach((key) => {
                if (a) {
                    this.renderer.setStyle(key, 'width', '' + this.calcWidth() / this.itemsCal + 'px');
                }
                else {
                    this.renderer.setStyle(key, 'width', '' + this.calcWidth() + 'px');
                }
            });
        }, 0);
    }
    calcWidth() {
        if (window.innerWidth - this.el.nativeElement.parentElement.offsetWidth < 20) {
            return window.innerWidth;
        }
        else {
            return this.el.nativeElement.parentElement.offsetWidth;
        }
    }
    calcItems() {
        const a = this.itemsCal;
        const b = this.itemsLen;
        const c = Math.ceil(b / Number(a));
        return c;
    }
    respData() {
        for (let x in this.data.resp) {
            this.arraKey.push(Number(x.split('_')[1]));
        }
        this.arraKey.sort((a, b) => { return a - b; });
        this.calRespMedia();
    }
    calRespMedia() {
        for (let i = 0; i < this.arraKey.length; i++) {
            if (this.arraKey.length - 1 > i) {
                const a = window.matchMedia('(min-width:' + this.arraKey[i] + 'px) and (max-width: ' + Number(this.arraKey[i + 1] - 1) + 'px)');
                const r = window.matchMedia('(min-width:' + Number(this.arraKey[this.arraKey.length - 1]) + 'px) and (max-width: ' + window.innerWidth + 'px)');
                if (a.matches || r.matches) {
                    let b = null;
                    if (r.matches) {
                        b = this.arraKey[this.arraKey.length - 1];
                    }
                    else {
                        b = this.arraKey[i];
                    }
                    this.itemsCal = Number(this.data.resp['_' + b + '']);
                    console.log(this.itemsCal);
                    this.renderer.setAttribute(this.el.nativeElement.parentElement, 'data_items', this.itemsCal.toString());
                }
            }
        }
    }
    ngOnInit() {
    }
};
WidthDirDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_clone_dir_directive__WEBPACK_IMPORTED_MODULE_2__["CloneDirDirective"], { static: true })
], WidthDirDirective.prototype, "clone", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], WidthDirDirective.prototype, "windowResize", null);
WidthDirDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appWidthDir]'
    })
], WidthDirDirective);



/***/ }),

/***/ "./src/app/service/http.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    getData(url) {
        return this.http.get(url);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/slider-main/slider-main.component.scss":
/*!********************************************************!*\
  !*** ./src/app/slider-main/slider-main.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slider {\n  position: relative;\n  text-align: center;\n  width: 100%;\n}\n.slider.bg {\n  height: 601px;\n}\n.sliderParent {\n  overflow: hidden;\n  position: relative;\n  min-height: 150px;\n}\n.navClass {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: 0;\n}\nbutton#next {\n  float: right;\n}\n.sliderMain {\n  transition: all 1s ease;\n  -webkit-transition: all 1s ease;\n  display: flex;\n  flex-wrap: wrap;\n}\n.nav_dots button {\n  width: 15px;\n  height: 15px;\n  display: inline-block;\n}\n.textBanner {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: rgba(255, 255, 255, 0.72);\n  width: 75%;\n  margin: auto;\n  border-radius: 5px;\n  padding: 16px 0;\n}\n.textBanner p {\n  margin: 9px 0;\n  color: #4e4e4e;\n  font-size: 15px;\n}\n.textBanner h2 {\n  font-size: 26px;\n  text-transform: uppercase;\n}\n.textBanner button {\n  background-color: #f00;\n  border: 0;\n  color: #fff;\n  padding: 7px 19px;\n  text-transform: uppercase;\n}\n.nav_dots {\n  position: absolute;\n  bottom: 30px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  text-align: center;\n}\n.nav_dots button {\n  background-color: #000;\n  border: 0;\n  margin: 0 4px;\n  border-radius: 50%;\n  position: relative;\n}\n.nav_dots button.active:before {\n  position: absolute;\n  left: 1px;\n  right: 0;\n  width: 7px;\n  height: 7px;\n  background-color: #fff;\n  content: \"\";\n  border-radius: 50%;\n  top: 4px;\n  margin: auto;\n}\n.slidLoad {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  margin: auto;\n  text-align: center;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zbGlkZXItbWFpbi9EOlxcc2xpZGVyQW5ndWxhclxcc3JjL2FwcFxcc2xpZGVyLW1haW5cXHNsaWRlci1tYWluLmNvbXBvbmVudC5zY3NzIiwiYXBwL3NsaWRlci1tYWluL3NsaWRlci1tYWluLmNvbXBvbmVudC5zY3NzIiwiYXBwL3NsaWRlci1tYWluL0Q6XFxzbGlkZXJBbmd1bGFyXFxzcmMvX21peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RKO0FERUk7RUFDSSxhQUFBO0FDQVI7QURJQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0RKO0FES0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDRko7QURLQTtFQUNJLFlBQUE7QUNGSjtBREtBO0VBQ0ksdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRko7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNGSjtBREtBO0VFbENRLGtCRm1Da0I7RUU3QnRCLE9BTHNCO0VBTXRCLFFBTndCO0VBT3hCLFFBUDJCO0VBUjFCLDJCQUFBO0VGMkNGLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHSDtBREZHO0VBQ0MsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSUo7QURGSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQ0lSO0FERkk7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0lSO0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDR1o7QURHQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUNBSiIsImZpbGUiOiJhcHAvc2xpZGVyLW1haW4vc2xpZGVyLW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9taXhpbic7XHJcblxyXG4uc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgJi5iZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDFweDtcclxuICAgIH1cclxufVxyXG5cclxuLnNsaWRlclBhcmVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcblxyXG4ubmF2Q2xhc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbmJ1dHRvbiNuZXh0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnNsaWRlck1haW4ge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLm5hdl9kb3RzIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRleHRCYW5uZXJ7XHJcbiAgIEBpbmNsdWRlIHBvc2l0SWRlbnRpZnkoYWJzb2x1dGUpO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpO1xyXG4gICB3aWR0aDogNzUlO1xyXG4gICBtYXJnaW46IGF1dG87XHJcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAmIHAge1xyXG4gICAgbWFyZ2luOiA5cHggMDtcclxuICAgIGNvbG9yOiAjNGU0ZTRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgJiBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDE5cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4ubmF2X2RvdHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgJiBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmLmFjdGl2ZTpiZWZvcmV7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMXB4O1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDdweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uc2xpZExvYWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIuc2xpZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNsaWRlci5iZyB7XG4gIGhlaWdodDogNjAxcHg7XG59XG5cbi5zbGlkZXJQYXJlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuXG4ubmF2Q2xhc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG5idXR0b24jbmV4dCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNsaWRlck1haW4ge1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ubmF2X2RvdHMgYnV0dG9uIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udGV4dEJhbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTZweCAwO1xufVxuLnRleHRCYW5uZXIgcCB7XG4gIG1hcmdpbjogOXB4IDA7XG4gIGNvbG9yOiAjNGU0ZTRlO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4udGV4dEJhbm5lciBoMiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi50ZXh0QmFubmVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDA7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCAxOXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubmF2X2RvdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5hdl9kb3RzIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubmF2X2RvdHMgYnV0dG9uLmFjdGl2ZTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDFweDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogNHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zbGlkTG9hZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogMTtcbn0iLCJAbWl4aW4gY3Jvc3NCcm93KCRzdWZmaXgsICRwcmVmZml4KSB7XHJcbiAgICAtd2Via2l0LSN7JHN1ZmZpeH06IHRyYW5zbGF0ZVkoLSRwcmVmZml4KTtcclxuICAgICAjeyRzdWZmaXh9IDogdHJhbnNsYXRlWSgtJHByZWZmaXgpO1xyXG59XHJcblxyXG5AbWl4aW4gcG9zaXRJZGVudGlmeSgkcG9zKXtcclxuICAgIEBpZiAkcG9zID09ICdyZWxhdGl2ZScge1xyXG4gICAgICAgIEBpbmNsdWRlIHBvc0FsaWduKGF1dG8sYXV0bywgYXV0bywgZmFsc2UpO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgcG9zaXRpb246ICRwb3M7XHJcbiAgICAgICAgQGluY2x1ZGUgcG9zQWxpZ24oMCwwLCA1MCUsIHRydWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gcG9zQWxpZ24oJGxlZnQsICRyaWdodCwgJHRvcCwgJGZhbHNlKXtcclxuICAgIGxlZnQ6ICRsZWZ0O1xyXG4gICAgcmlnaHQ6ICRyaWdodDtcclxuICAgIHRvcDogJHRvcDtcclxuICAgIEBpZiAkZmFsc2UgPT0gdHJ1ZSB7XHJcbiAgICAgICAgQGluY2x1ZGUgY3Jvc3NCcm93KHRyYW5zZm9ybSwgJHRvcCk7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/slider-main/slider-main.component.ts":
/*!******************************************************!*\
  !*** ./src/app/slider-main/slider-main.component.ts ***!
  \******************************************************/
/*! exports provided: SliderMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderMainComponent", function() { return SliderMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _directive_nav_dir_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directive/nav-dir.directive */ "./src/app/directive/nav-dir.directive.ts");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/http.service */ "./src/app/service/http.service.ts");
/* harmony import */ var _directive_width_dir_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directive/width-dir.directive */ "./src/app/directive/width-dir.directive.ts");
/* harmony import */ var _directive_prev_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directive/prev.directive */ "./src/app/directive/prev.directive.ts");
/* harmony import */ var _directive_next_nav_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directive/next-nav.directive */ "./src/app/directive/next-nav.directive.ts");
/* harmony import */ var _directive_dot_nav_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directive/dot-nav.directive */ "./src/app/directive/dot-nav.directive.ts");
/* harmony import */ var _directive_clone_dir_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directive/clone-dir.directive */ "./src/app/directive/clone-dir.directive.ts");









let SliderMainComponent = class SliderMainComponent {
    constructor(el, rendere, http) {
        this.el = el;
        this.rendere = rendere;
        this.http = http;
        this.sliderControl = null;
        this.sliderText = {};
        this.sliderLibrary = {};
        this.loader = true;
        this.data = null;
        this.datget();
    }
    checkCnctn() {
        let cn = navigator.onLine;
        if (cn) {
            this.datget();
        }
        else {
            this.checkCnctn();
        }
    }
    datget() {
        this.http.getData('http://onlinedemo.best/sliderApi/get_data.php')
            .subscribe(resp => {
            this.data = resp;
            this.sliderControl = this.data.dataControl;
            this.sliderText = this.data.data;
            this.attrSelect(this.sliderControl);
            this.rendere.setAttribute(this.len.nativeElement, 'data_len', (this.data.length).toString());
            this.widths.callAfter(this.data);
            this.createNav.condCheck(this.sliderControl);
            this.prevDir.callAfter();
            this.nextDir.callAfter();
            this.dotDir.callAfter();
            this.loader = false;
            this.clone.callAfter(this.data.length);
        });
    }
    resize() {
        this.widths.callAfter(this.data);
        this.createNav.resetResp();
        this.prevDir.callAfter();
        this.nextDir.callAfter();
        this.dotDir.callAfter();
        this.clone.resetClone();
    }
    attrSelect(slidCont) {
        if (slidCont.nav == 'true') {
            this.rendere.setAttribute(this.len.nativeElement, 'data_nav', slidCont.nav);
        }
        else {
            this.rendere.setAttribute(this.len.nativeElement, 'data_nav', slidCont.nav);
        }
        if (slidCont.dot == 'true') {
            this.rendere.setAttribute(this.len.nativeElement, 'data_dot', slidCont.dot);
        }
        else {
            this.rendere.setAttribute(this.len.nativeElement, 'data_dot', slidCont.dot);
        }
        if (slidCont.keyBoard == 'true') {
            this.rendere.setAttribute(this.len.nativeElement, 'data_key', slidCont.keyBoard);
        }
        else {
            this.rendere.setAttribute(this.len.nativeElement, 'data_key', slidCont.keyBoard);
        }
        if (slidCont.mouse == 'true') {
            this.rendere.setAttribute(this.len.nativeElement, 'data_wheel', slidCont.mouse);
        }
        else {
            this.rendere.setAttribute(this.len.nativeElement, 'data_wheel', slidCont.mouse);
        }
        this.rendere.setAttribute(this.len.nativeElement, 'data_items', slidCont.items);
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
};
SliderMainComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_directive_nav_dir_directive__WEBPACK_IMPORTED_MODULE_2__["NavDirDirective"], { static: true })
], SliderMainComponent.prototype, "createNav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lenCalc', { static: true })
], SliderMainComponent.prototype, "len", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_directive_width_dir_directive__WEBPACK_IMPORTED_MODULE_4__["WidthDirDirective"], { static: true })
], SliderMainComponent.prototype, "widths", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_directive_prev_directive__WEBPACK_IMPORTED_MODULE_5__["PrevDirective"], { static: true })
], SliderMainComponent.prototype, "prevDir", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_directive_next_nav_directive__WEBPACK_IMPORTED_MODULE_6__["NextNavDirective"], { static: true })
], SliderMainComponent.prototype, "nextDir", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_directive_dot_nav_directive__WEBPACK_IMPORTED_MODULE_7__["DotNavDirective"], { static: true })
], SliderMainComponent.prototype, "dotDir", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_directive_clone_dir_directive__WEBPACK_IMPORTED_MODULE_8__["CloneDirDirective"], { static: true })
], SliderMainComponent.prototype, "clone", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], SliderMainComponent.prototype, "resize", null);
SliderMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slider-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/slider-main/slider-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slider-main.component.scss */ "./src/app/slider-main/slider-main.component.scss")).default]
    })
], SliderMainComponent);



/***/ }),

/***/ "./src/app/slider.module.ts":
/*!**********************************!*\
  !*** ./src/app/slider.module.ts ***!
  \**********************************/
/*! exports provided: SliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderModule", function() { return SliderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _slider_main_slider_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider-main/slider-main.component */ "./src/app/slider-main/slider-main.component.ts");
/* harmony import */ var _directive_nav_dir_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive/nav-dir.directive */ "./src/app/directive/nav-dir.directive.ts");
/* harmony import */ var _directive_width_dir_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive/width-dir.directive */ "./src/app/directive/width-dir.directive.ts");
/* harmony import */ var _directive_next_nav_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/next-nav.directive */ "./src/app/directive/next-nav.directive.ts");
/* harmony import */ var _directive_prev_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/prev.directive */ "./src/app/directive/prev.directive.ts");
/* harmony import */ var _directive_dot_nav_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directive/dot-nav.directive */ "./src/app/directive/dot-nav.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _directive_clone_dir_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directive/clone-dir.directive */ "./src/app/directive/clone-dir.directive.ts");











let SliderModule = class SliderModule {
};
SliderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _slider_main_slider_main_component__WEBPACK_IMPORTED_MODULE_3__["SliderMainComponent"],
            _directive_nav_dir_directive__WEBPACK_IMPORTED_MODULE_4__["NavDirDirective"],
            _directive_width_dir_directive__WEBPACK_IMPORTED_MODULE_5__["WidthDirDirective"],
            _directive_next_nav_directive__WEBPACK_IMPORTED_MODULE_6__["NextNavDirective"],
            _directive_prev_directive__WEBPACK_IMPORTED_MODULE_7__["PrevDirective"],
            _directive_dot_nav_directive__WEBPACK_IMPORTED_MODULE_8__["DotNavDirective"],
            _directive_clone_dir_directive__WEBPACK_IMPORTED_MODULE_10__["CloneDirDirective"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ],
        exports: [
            _slider_main_slider_main_component__WEBPACK_IMPORTED_MODULE_3__["SliderMainComponent"]
        ]
    })
], SliderModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\sliderAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map