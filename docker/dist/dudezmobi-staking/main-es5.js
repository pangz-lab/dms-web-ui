function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- App Main Page -->\n<!-- <app-main></app-main> -->\n<!-- App Temporary Main Page -->\n<app-main-registration></app-main-registration>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-main-body/app-main-body.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-main-body/app-main-body.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAppMainBodyAppMainBodyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <mat-toolbar color=\"basic\" style=\"min-height:25px;height:40px;\">Transaction Summary</mat-toolbar> -->\n<div style=\"padding:30px;\">\n  <mat-toolbar color=\"basic\" style=\"min-height:20px; height:50px;\">\n    <div class=\"container-fluid text-right\">\n      <div class=\"row\">\n      <div class=\"col\">{{pageHeaderTitle}}</div>\n      </div>\n    </div>\n  </mat-toolbar>\n  <mat-card>\n    <mat-card-content>\n      <ng-content></ng-content>\n    </mat-card-content>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-main/app-main.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-main/app-main.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAppMainAppMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar>\n  <button mat-icon-button color=\"accent\" aria-label=\"Example icon-button with a heart icon\" (click)=\"drawer.toggle()\">\n    <mat-icon color=\"basic\">view_headline</mat-icon>\n  </button> <span>Dudezmobi Staking Pool</span>\n</mat-toolbar>\n<mat-drawer-container class=\"app-main-container\">\n  <mat-drawer #drawer class=\"app-sidenav\" mode=\"side\">\n    <!-- <img class=\"w3-circle sidenav-image-container\" src=\"https://pbs.twimg.com/profile_images/1319800229/cosmic_web_3b.jpg\" alt=\"Dudezmobi\"> -->\n    <img class=\"w3-circle sidenav-image-container\" src=\"../../../assets/images/primary-pic\" alt=\"Dudezmobi\">\n    <mat-card>\n      <mat-card-content>\n        <mat-list>\n          <mat-list-item routerLink=\"/transaction-summary\">\n            <button mat-raised-button color=\"basic\" class=\"menu-item\">Transaction Summary</button>\n          </mat-list-item>\n          <mat-list-item routerLink=\"/transaction-detail\">\n            <button mat-raised-button color=\"basic\" class=\"menu-item\">\n              Transaction Detail\n            </button>\n          </mat-list-item>\n          <mat-list-item routerLink=\"/update-history\">\n            <button mat-raised-button color=\"basic\" class=\"menu-item\">\n              Update History\n            </button>\n          </mat-list-item>\n        </mat-list>\n        <br>\n        <mat-divider></mat-divider>\n        <mat-list>\n          <mat-list-item routerLink=\"/user-registration\">\n            <button mat-raised-button color=\"accent\" class=\"menu-item\">Join the pool!</button>\n          </mat-list-item>\n        </mat-list>\n\n      </mat-card-content>\n    </mat-card>\n  </mat-drawer>\n  <div class=\"app-main-content\" [@routeAnimation]=\"getAnimationData(routerOutlet)\">\n    <!-- <app-transaction-summary></app-transaction-summary> -->\n    <router-outlet #routerOutlet=\"outlet\"></router-outlet>\n  </div>\n</mat-drawer-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/loading-dialog/loading-dialog.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/loading-dialog/loading-dialog.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDialogLoadingDialogLoadingDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"loading-parent\">\n  <mat-spinner [diameter]=\"100\"></mat-spinner>\n</div> -->\n<mat-progress-bar mode=\"buffer\">Processing data....</mat-progress-bar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/message-dialog/message-dialog.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/message-dialog/message-dialog.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDialogMessageDialogMessageDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"typeIs('generic')\">\n  <h2 mat-dialog-title>{{data.title}}</h2>\n  <mat-dialog-content>{{data.reason}}</mat-dialog-content>\n  <mat-dialog-actions>\n    <!-- <button mat-button mat-dialog-close>Cancel</button> -->\n    <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n    <button mat-button [mat-dialog-close]=\"true\">OK</button>\n  </mat-dialog-actions>\n</div>\n\n<div *ngIf=\"typeIs('warning')\">\n  <h2 mat-dialog-title>{{data.title}}</h2>\n  <mat-dialog-content>\n    <p>\n      <mat-icon>warning</mat-icon>\n      {{data.reason}}\n    <p>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <!-- <button mat-button mat-dialog-close>Cancel</button> -->\n    <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n    <button mat-button [mat-dialog-close]=\"true\">OK</button>\n  </mat-dialog-actions>\n</div>\n\n<div *ngIf=\"typeIs('network_error')\">\n  <mat-dialog-content>\n    <mat-toolbar color=\"warn\">\n      <h3 mat-dialog-title>\n        {{data.title}}\n      </h3>\n    </mat-toolbar>\n    <mat-divider></mat-divider>\n    <span mat-subheader>\n      <mat-icon>cloud_off</mat-icon>\n      {{data.reason}}\n    </span>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"true\">\n      Close\n    </button>\n  </mat-dialog-actions>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-registration/main-registration.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-registration/main-registration.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainRegistrationMainRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span style=\"scrollbar-width: thin;\">\n  <div class=\"w3-container page-header\">\n    <div class=\"w3-cell-row w3-cell-middle\" style=\"height:100%\">\n      <div class=\"w3-container w3-cell\"></div>\n\n      <div class=\"w3-container w3-cell w3-cell-middle w3-animate-opacity\">\n        <div class=\"w3-display-container\">\n          <div class=\"w3-display-middle w3-large\">\n            <div class=\"w3-row\">\n              <svg width=\"500\" height=\"300\" xmlns=\"http://www.w3.org/2000/svg\">\n                <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->\n                <g>\n                 <title>background</title>\n                </g>\n                <g>\n                 <title>DudezMobi Staking Pool</title>\n                 <ellipse stroke=\"#000000\" transform=\"rotate(10.400800704956055 232.97685241699227,208.07136535644537) \" ry=\"46.170975\" rx=\"227.405763\" id=\"svg_8\" cy=\"208.071363\" cx=\"232.976861\" stroke-opacity=\"null\" stroke-width=\"0\" fill=\"#666666\"/>\n                 <text stroke-width=\"8\" stroke=\"#0d3e70\" transform=\"matrix(1.5599656565599707,0,0,1.6409298904776253,-63.74296651760022,-54.99475623132037) \" font-weight=\"bold\" xml:space=\"preserve\" text-anchor=\"start\" font-family=\"Helvetica, Arial, sans-serif\" font-size=\"120\" id=\"svg_1\" y=\"161.016378\" x=\"70.525302\" fill=\"#5b7bb2\">DM</text>\n                 <path id=\"svg_28\" d=\"m380.203869,14.285683c0,0 -368.162642,150.203827 -368.162642,150.203827c0,0 33.877494,31.428518 33.877494,31.428518c0,0 55.101947,28.163218 55.101947,28.163218c0,0 294.285216,44.571353 293.877053,44.16319\" opacity=\"0.5\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"0\" stroke=\"#000000\" fill=\"#7f7f7f\"/>\n                 <ellipse stroke=\"#000000\" transform=\"rotate(-13 402.3088378906249,143.467803955078) \" ry=\"130.829477\" rx=\"86.557796\" id=\"svg_19\" cy=\"143.467806\" cx=\"402.308836\" fill=\"#aa8239\"/>\n                 <path stroke=\"#000000\" transform=\"rotate(-13 414.8453979492187,136.4424743652345) \" id=\"svg_17\" d=\"m414.845377,9.000154c-41.756899,0 -75.606827,57.056458 -75.606827,127.442286c0,70.384364 33.849928,127.442333 75.606827,127.442333c41.75738,0 75.606827,-57.057969 75.606827,-127.442333c0,-70.385828 -33.849447,-127.442286 -75.606827,-127.442286zm6.528776,196.53715l0,17.950573l-10.185612,0l0,-17.748326c-16.71437,-3.858339 -24.038863,-27.007071 -24.038863,-27.007071l10.41474,-14.669201c0,0 6.63793,19.492623 18.654713,19.492623c6.637397,0 11.673345,-5.988933 11.673345,-16.214468c0,-23.927965 -38.230029,-21.026407 -38.230029,-65.403745c0,-19.292009 9.041073,-33.19018 21.520675,-36.468344l0,-17.948781l10.186032,0l0,17.938854c8.697809,1.92999 18.99795,9.646741 18.99795,26.244468l0,12.732361l-13.505031,0l0,-6.172861c0,-6.365529 -4.811768,-10.610334 -10.190516,-10.610334c-6.866612,0 -11.902577,5.786911 -11.902577,13.889876c0,24.498549 38.230011,18.519328 38.230011,65.019173c0.005463,19.106164 -8.463568,35.697116 -21.624838,38.975214l0,-0.000009z\" stroke-width=\"0\" fill=\"#ffe1aa\"/>\n                 <ellipse stroke=\"#000000\" transform=\"rotate(-23.958349227905273 452.3460083007813,105.02985382080084) \" ry=\"25.636118\" rx=\"9.270975\" id=\"svg_6\" cy=\"105.02985\" cx=\"452.345712\" stroke-width=\"0\" fill=\"#ffffff\"/>\n                 <ellipse stroke=\"#000000\" transform=\"rotate(-27.570255279541016 461.92962646484375,146.1099700927735) \" ry=\"10.285052\" rx=\"5.650694\" id=\"svg_7\" cy=\"146.109999\" cx=\"461.929355\" stroke-width=\"0\" fill=\"#ffffff\"/>\n                </g>\n               </svg>\n            </div>\n            <div class=\"w3-row\">\n              <svg width=\"500\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\">\n                <g>\n                 <title>background</title>\n                 <rect fill=\"none\" id=\"canvas_background\" height=\"102\" width=\"502\" y=\"-1\" x=\"-1\"/>\n                 <g display=\"none\" overflow=\"visible\" y=\"0\" x=\"0\" height=\"100%\" width=\"100%\" id=\"canvasGrid\">\n                  <rect fill=\"url(#gridpattern)\" stroke-width=\"0\" y=\"0\" x=\"0\" height=\"100%\" width=\"100%\"/>\n                 </g>\n                </g>\n                <g>\n                 <title>Pool Owner</title>\n                 <text font-weight=\"bold\" stroke=\"#803315\" transform=\"matrix(1.683822812868161,0,0,2.6855935833103217,-7.169296302068176,-132.4861024543756) \" xml:space=\"preserve\" text-anchor=\"start\" font-family=\"Helvetica, Arial, sans-serif\" font-size=\"24\" id=\"svg_25\" y=\"74.76541\" x=\"15.31678\" fill=\"#ffc2aa\">DudezMobi Staking Pool</text>\n                </g>\n               </svg>\n            </div>\n            <div class=\"w3-row-padding w3-animate-zoom\">\n              <div class=\"w3-cell-middle content-center\">\n                <button\n                  matRipple\n                  class=\"w3-button w3-green register-button\"\n                  (click)=\"goToRegsitration()\">\n                  Register\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"w3-container w3-cell w3-cell-bottom\"></div>\n    </div>\n  </div>\n\n  <div class=\"w3-container registration-form\">\n    <div class=\"w3-row\">\n      <div class=\"w3-col l12 w3-green w3-center\">\n        <p class=\"title-header\">Register</p>\n      </div>\n    </div>\n\n    <div class=\"w3-row\" style=\"height: 15%\">\n      <div class=\"w3-col l12\"><p></p></div>\n    </div>\n    <div class=\"w3-row\">\n      <div class=\"w3-col l2\"><p> </p></div>\n      <div class=\"w3-col l8\">\n        <mat-card>\n          <mat-card-title>Fill out the form to join the pool!</mat-card-title>\n          <mat-card-content style=\"height: 65%\">\n            <mat-progress-bar mode=\"query\" *ngIf=\"loaderShown\" ></mat-progress-bar>\n            <app-user-registration-form\n              (registrationCompleted)=\"confirmRegistration($event)\"\n              (requestError)=\"registrationRequestError($event)\"\n              (formValueError)=\"formValueError($event)\"\n              (formSubmitted)=\"registrationSubmitted($event)\"\n              >\n            </app-user-registration-form>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div class=\"w3-col l2\"><p> </p></div>\n    </div>\n  </div>\n</span>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pag-not-found/pag-not-found.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pag-not-found/pag-not-found.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPagNotFoundPagNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>pag-not-found works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-detail-group/transaction-detail-group.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-detail-group/transaction-detail-group.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTransactionDetailGroupTransactionDetailGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay; let i = index\">\n    <th mat-header-cell *matHeaderCellDef>{{column}}</th>\n  <!-- <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"(i <= 2)? 0: columnsToDisplay.length - 2\"> -->\n    <td mat-cell *matCellDef=\"let element\">\n    {{getGroupTitle(i, [element.name, element.dateTime, element.transactionId] )}}\n  </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element; let e2 = index\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"group-detail\"\n      [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"group-detail-description\" >\n          <app-transaction-detail-table [dataTableSource]=\"element.detail\" ></app-transaction-detail-table>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"group-row\"\n      [class.expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"detail-row\"></tr>\n</table>\n<mat-paginator [pageSizeOptions]=\"[5, 10, 15, 20]\" pageSize=5 showFirstLastButtons></mat-paginator>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-detail-table/transaction-detail-table.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-detail-table/transaction-detail-table.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTransactionDetailTableTransactionDetailTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"walletAddress\">\n          <th mat-header-cell *matHeaderCellDef> Wallet Address </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.walletAddress}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"totalCoins\">\n          <th mat-header-cell *matHeaderCellDef> Total Coins </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.totalCoins}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"deposits\">\n          <th mat-header-cell *matHeaderCellDef> Deposits </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.deposits}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"withdrawals\">\n          <th mat-header-cell *matHeaderCellDef> Withdrawals </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.withdrawals}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"percentageOverride\">\n          <th mat-header-cell *matHeaderCellDef> %Override </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.percentageOverride}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"dateAdded\">\n          <th mat-header-cell *matHeaderCellDef> Date Added </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.dateAdded}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"dateUpdated\">\n          <th mat-header-cell *matHeaderCellDef> Date Updated </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.dateUpdated}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"originalBalance\">\n          <th mat-header-cell *matHeaderCellDef> Orig Balance </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.originalBalance}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"previousBalance\">\n          <th mat-header-cell *matHeaderCellDef> Prev Balance </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.previousBalance}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"originalTransaction\">\n          <th mat-header-cell *matHeaderCellDef> Original Tx </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.originalTransaction}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"latestTransaction\">\n          <th mat-header-cell *matHeaderCellDef> Latest Tx </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.latestTransaction}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"remarks\">\n          <th mat-header-cell *matHeaderCellDef> Remarks </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.remarks}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"earnings\">\n          <th mat-header-cell *matHeaderCellDef> Earnings </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.earnings}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"currentPercentage\">\n          <th mat-header-cell *matHeaderCellDef> Current% </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.currentPercentage}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"stakingPercentage\">\n          <th mat-header-cell *matHeaderCellDef> Staking% </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.stakingPercentage}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"stakeReward\">\n          <th mat-header-cell *matHeaderCellDef> Stake Reward </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.stakeReward}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"depositStake\">\n          <th mat-header-cell *matHeaderCellDef> Deposit Stake </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.depositStake}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"currentBalance\">\n          <th mat-header-cell *matHeaderCellDef> Current Balance </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.currentBalance}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"stakeRewardAmount\">\n          <th mat-header-cell *matHeaderCellDef> Stake Rewards </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.stakeRewardAmount}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-detail/transaction-detail.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-detail/transaction-detail.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTransactionDetailTransactionDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-body pageHeaderTitle=\"Transaction Detail\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <app-transaction-detail-group></app-transaction-detail-group>\n      </div>\n    </div>\n  </div>\n</app-main-body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-summary-body/transaction-summary-body.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-summary-body/transaction-summary-body.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTransactionSummaryBodyTransactionSummaryBodyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-card-header>\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n  </mat-card-header>\n  <mat-card-content class=\"table-container\">\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n      <!-- walletAddress Column -->\n      <ng-container matColumnDef=\"walletAddress\">\n        <th mat-header-cell *matHeaderCellDef> Wallet Address </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.walletAddress}} </td>\n      </ng-container>\n\n      <!-- verusID Column -->\n      <ng-container matColumnDef=\"verusID\">\n        <th mat-header-cell *matHeaderCellDef> Verus ID </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.verusId}} </td>\n      </ng-container>\n\n      <!-- openingBalance Column -->\n      <ng-container matColumnDef=\"openingBalance\">\n        <th mat-header-cell *matHeaderCellDef> Opening<br>Balance </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.openingBalance}} </td>\n      </ng-container>\n\n      <!-- deposits Column -->\n      <ng-container matColumnDef=\"deposits\">\n        <th mat-header-cell *matHeaderCellDef> Deposits </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.deposits}} </td>\n      </ng-container>\n\n      <!-- withdrawals Column -->\n      <ng-container matColumnDef=\"withdrawals\">\n        <th mat-header-cell *matHeaderCellDef> Withdrawals </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.withdrawals}} </td>\n      </ng-container>\n\n      <!-- stakingBalance Column -->\n      <ng-container matColumnDef=\"stakingBalance\">\n        <th mat-header-cell *matHeaderCellDef> Staking<br>Balance </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.stakingBalance}} </td>\n      </ng-container>\n\n      <!-- currentPercentage Column -->\n      <ng-container matColumnDef=\"currentPercentage\">\n        <th mat-header-cell *matHeaderCellDef> Current% </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.currentPercentage}} </td>\n      </ng-container>\n\n      <!-- stakingPercentage Column -->\n      <ng-container matColumnDef=\"stakingPercentage\">\n        <th mat-header-cell *matHeaderCellDef> Staking% </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.stakingPercentage}} </td>\n      </ng-container>\n\n      <!-- stakeReward Column -->\n      <ng-container matColumnDef=\"stakeReward\">\n        <th mat-header-cell *matHeaderCellDef> Stake<br>Reward </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.stakeReward}} </td>\n      </ng-container>\n\n      <!-- depositStake Column -->\n      <ng-container matColumnDef=\"depositStake\">\n        <th mat-header-cell *matHeaderCellDef> Deposit<br>Stake </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.depositStake}} </td>\n      </ng-container>\n\n      <!-- currentBalance Column -->\n      <ng-container matColumnDef=\"currentBalance\">\n        <th mat-header-cell *matHeaderCellDef> Current<br>Balance </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.currentBalance}} </td>\n      </ng-container>\n\n      <!-- stakeRewardAmount Column -->\n      <ng-container matColumnDef=\"stakeRewardAmount\">\n        <th mat-header-cell *matHeaderCellDef> Stake Rewards </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.stakeRewardAmount}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 15, 20, 100]\" pageSize=15 showFirstLastButtons></mat-paginator>\n\n  </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-summary-chart/transaction-summary-chart.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-summary-chart/transaction-summary-chart.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTransactionSummaryChartTransactionSummaryChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"display: block;\">\n  <canvas baseChart\n    [data]=\"pieChartData\"\n    [labels]=\"pieChartLabels\"\n    [chartType]=\"pieChartType\"\n    [options]=\"pieChartOptions\"\n    [plugins]=\"pieChartPlugins\"\n    [legend]=\"pieChartLegend\">\n  </canvas>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-summary-header/transaction-summary-header.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-summary-header/transaction-summary-header.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTransactionSummaryHeaderTransactionSummaryHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">Total Member</div>\n    <div class=\"col\">\n      <span class=\"badge badge-pill badge-info\">18</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">Pool fee</div>\n    <div class=\"col\">\n      <span class=\"badge badge-pill badge-info\">1%</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">Latest Stake Date</div>\n    <div class=\"col\">\n      <span class=\"badge badge-pill badge-info\">January 8, 2020</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">Latest Stake TX</div>\n    <div class=\"col\">\n      <span class=\"badge badge-pill badge-info\">https://link.to.site</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">Stake Address</div>\n    <div class=\"col\">\n      <span class=\"badge badge-pill badge-info\">https://link.to.site</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">Latest Stake to Divide</div>\n    <div class=\"col\">\n      <span class=\"badge badge-pill badge-info\">23.808 VRSC</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">Loss on transactions</div>\n    <div class=\"col\">\n      <span class=\"badge badge-pill badge-info\">0.121290 VRSC</span>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">Document Update Date</div>\n    <div class=\"col\">\n      <span class=\"badge badge-pill badge-info\">January 8, 2020</span>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-summary/transaction-summary.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-summary/transaction-summary.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTransactionSummaryTransactionSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-body pageHeaderTitle=\"Transaction Summary\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-9\">\n        <app-transaction-summary-body></app-transaction-summary-body>\n      </div>\n      <div class=\"col-3\">\n        <mat-card>\n          <mat-card-content>\n            <div class=\"container-fluid\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <app-transaction-summary-chart></app-transaction-summary-chart>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\"><hr></div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h3>Total Stake</h3>\n                </div>\n                <div class=\"col\">\n                  <h3><span class=\"badge badge-secondary\">35,683.2987117</span></h3>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h3>Total Balance</h3>\n                </div>\n                <div class=\"col\">\n                  <h3><span class=\"badge badge-secondary\">35,683.2987117</span></h3>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\"><hr></div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <app-transaction-summary-header></app-transaction-summary-header>\n                </div>\n              </div>\n              <div class=\"row\" style=\"height: 25px;\">\n                <div class=\"col\"></div>\n              </div>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</app-main-body>\n<!--\n<div style=\"padding:30px;\">\n  <mat-toolbar color=\"basic\" style=\"min-height:20px; height:50px;\">\n    <div class=\"container-fluid text-right\">\n      <div class=\"row\">\n        <div class=\"col\">Transaction Summary</div>\n      </div>\n    </div>\n  </mat-toolbar>\n  <mat-card>\n    <mat q-card-content>\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-9\">\n            <app-transaction-summary-body></app-transaction-summary-body>\n          </div>\n          <div class=\"col-3\">\n            <mat-card>\n              <mat-card-content>\n                <div class=\"container-fluid\">\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <app-transaction-summary-chart></app-transaction-summary-chart>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col\"><hr></div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <h3>Total Stake</h3>\n                    </div>\n                    <div class=\"col\">\n                      <h3><span class=\"badge badge-secondary\">35,683.2987117</span></h3>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <h3>Total Balance</h3>\n                    </div>\n                    <div class=\"col\">\n                      <h3><span class=\"badge badge-secondary\">35,683.2987117</span></h3>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col\"><hr></div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <app-transaction-summary-header></app-transaction-summary-header>\n                    </div>\n                  </div>\n                  <div class=\"row\" style=\"height: 25px;\">\n                    <div class=\"col\"></div>\n                  </div>\n                </div>\n              </mat-card-content>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-history-table/update-history-table.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-history-table/update-history-table.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUpdateHistoryTableUpdateHistoryTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" matSort>\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> # </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"date\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"description\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"remarks\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Remarks </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.remarks}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"author\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Author </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.author}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" pageSize=10 showFirstLastButtons></mat-paginator>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-history/update-history.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-history/update-history.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUpdateHistoryUpdateHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-body pageHeaderTitle=\"Update History\">\n  <app-update-history-table></app-update-history-table>\n</app-main-body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-registration-form/user-registration-form.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-registration-form/user-registration-form.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserRegistrationFormUserRegistrationFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-horizontal-stepper linear #stepper>\n  <mat-step [stepControl]=\"addressFormGroup\"\n    label=\"Address\"\n    state=\"email\">\n    <form [formGroup]=\"addressFormGroup\" class=\"registration-form\" #formDirectAddressFormGroup=\"ngForm\">\n      <mat-form-field appearance=\"{{formFieldAppearance}}\">\n        <mat-label>Email Address</mat-label>\n        <input\n          matInput\n          placeholder=\"youremail@domain.com\"\n          formControlName=\"email\"\n          #emailTmp\n          required>\n        <mat-icon matSuffix>email</mat-icon>\n        <mat-hint align=\"start\">youremail@domain.com</mat-hint>\n        <mat-hint align=\"end\">{{emailTmp.value.length}} / (10-100)</mat-hint>\n          <mat-error *ngIf=\"!isValidEmail()\">\n            {{errorMessage.email}}\n          </mat-error>\n      </mat-form-field>\n      <mat-form-field appearance=\"{{formFieldAppearance}}\">\n        <mat-label>T-Address/Public Address</mat-label>\n        <input\n          matInput\n          placeholder=\"RFeHXibrwdnrxdKPozadvH8XAsNGXY7bxR\"\n          formControlName=\"publicAddress\"\n          #publicAddressTmp\n          required>\n        <mat-icon matSuffix>contact_mail</mat-icon>\n        <mat-hint align=\"start\">Allowed characters [a-zA-Z0-9]</mat-hint>\n        <mat-hint align=\"end\">{{publicAddressTmp.value.length}} / (34-40)</mat-hint>\n        <mat-error *ngIf=\"!isValidPublicAddress()\">\n          {{errorMessage.publicAddress}}\n        </mat-error>\n      </mat-form-field>\n      <mat-checkbox\n        formControlName=\"doneDeposit\"\n        (change)=\"doneDeposiToAccountToggle($event)\">\n        Deposited to Dudezmobi account\n      </mat-checkbox>\n\n      <br>\n      <div>\n        <button mat-raised-button\n          color=\"primary\"\n          (click)=\"goToNextStep()\">\n          Next\n        </button>\n      </div>\n    </form>\n  </mat-step>\n\n  <mat-step\n    [stepControl]=\"transactionDetailFormGroup\"\n    [optional]=\"!depositedToAccount()\"\n    label=\"Transaction\"\n    state=\"confirmation_number\">\n    <form [formGroup]=\"transactionDetailFormGroup\" class=\"registration-form\" #formDirectTransactionDetailFormGroup=\"ngForm\">\n      <mat-form-field appearance=\"{{formFieldAppearance}}\">\n        <mat-label>Transaction ID</mat-label>\n        <input matInput\n          placeholder=\"a901def22a610cd6e809c2e6765471b8c11732c6334ac7e0f9c9a6e2ee28cc48\"\n          formControlName=\"transactionId\"\n          #transactionIdTmp\n          [required]=\"depositedToAccount()\"\n          [readonly]=\"!depositedToAccount()\">\n        <mat-icon matSuffix>monetization_on</mat-icon>\n        <mat-hint align=\"start\">Allowed characters [a-zA-Z0-9]</mat-hint>\n        <mat-hint align=\"end\">{{transactionIdTmp.value.length}} / (64-70)</mat-hint>\n        <mat-error *ngIf=\"!isValidTransactionId()\">\n          {{errorMessage.transactionId}}\n        </mat-error>\n      </mat-form-field>\n\n      <br>\n      <div>\n        <button mat-stroked-button matStepperPrevious>Back</button>\n        <button mat-raised-button color=\"primary\" matStepperNext >Next</button>\n      </div>\n    </form>\n  </mat-step>\n\n  <mat-step\n    [stepControl]=\"secretWordsFormGroup\"\n    label=\"Secret words\"\n    state=\"lock\">\n    <form [formGroup]=\"secretWordsFormGroup\"\n      class=\"registration-form\"\n      #formDirectSecretWordsFormGroup=\"ngForm\">\n      <mat-form-field appearance=\"{{formFieldAppearance}}\">\n        <mat-label>Secret Word 1</mat-label>\n        <input matInput\n          placeholder=\"any word or combination of words\"\n          formControlName=\"secretWord1\"\n          required\n          #secretWord1Tmp\n          autocomplete=\"true\"\n          [type]=\"hideWord1 ? 'password' : 'text'\">\n        <button mat-icon-button matSuffix (click)=\"hideWord1 = !hideWord1\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hideWord1\">\n          <mat-icon>{{hideWord1 ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n        <mat-hint align=\"start\">Allowed characters [a-zA-Z0-9]</mat-hint>\n        <mat-hint align=\"end\">{{secretWord1Tmp.value.length}} / (5-15)</mat-hint>\n        <mat-error *ngIf=\"!isValidSecretWord(1)\">\n          {{errorMessage.secretWords[1]}}\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field appearance=\"{{formFieldAppearance}}\">\n        <mat-label>Secret Word 2</mat-label>\n        <input matInput\n          placeholder=\"any word or combination of words\"\n          formControlName=\"secretWord2\"\n          required\n          #secretWord2Tmp\n          autocomplete=\"true\"\n          [type]=\"hideWord2 ? 'password' : 'text'\">\n        <button mat-icon-button matSuffix (click)=\"hideWord2 = !hideWord2\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hideWord2\">\n          <mat-icon>{{hideWord2 ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n        <mat-hint align=\"start\">Allowed characters [a-zA-Z0-9]</mat-hint>\n        <mat-hint align=\"end\">{{secretWord2Tmp.value.length}} / (5-15)</mat-hint>\n        <mat-error *ngIf=\"!isValidSecretWord(2)\">\n          {{errorMessage.secretWords[2]}}\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"{{formFieldAppearance}}\">\n        <mat-label>Secret Word 3</mat-label>\n        <input matInput\n          placeholder=\"any word or combination of words\"\n          formControlName=\"secretWord3\"\n          required\n          #secretWord3Tmp\n          autocomplete=\"true\"\n          [type]=\"hideWord3 ? 'password' : 'text'\">\n        <button mat-icon-button matSuffix (click)=\"hideWord3 = !hideWord3\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hideWord3\">\n          <mat-icon>{{hideWord3 ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n        <mat-hint align=\"start\">Allowed characters [a-zA-Z0-9]</mat-hint>\n        <mat-hint align=\"end\">{{secretWord3Tmp.value.length}} / (5-15)</mat-hint>\n        <mat-error *ngIf=\"!isValidSecretWord(3)\">\n          {{errorMessage.secretWords[3]}}\n        </mat-error>\n      </mat-form-field>\n\n      <br>\n      <div>\n        <button mat-stroked-button matStepperPrevious>Back</button>\n        <button mat-raised-button color=\"primary\" matStepperNext (click)=\"isSecretWordUnique()\">Next</button>\n      </div>\n    </form>\n  </mat-step>\n\n  <mat-step label=\"Submit\" state=\"send\">\n    <h5 mat-card-title>Summary</h5>\n\n    <mat-accordion [multi]=\"true\">\n      <mat-expansion-panel [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>Input Confirmation</mat-panel-title>\n          <mat-panel-description>Check the values before submitting..</mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field appearance=\"fill\" style=\"width:50%;\">\n          <mat-label>Email Address</mat-label>\n          <input matInput readonly value=\"{{getEmail().value}}\">\n        </mat-form-field>\n        <mat-form-field  appearance=\"fill\" style=\"width:50%;\">\n          <mat-label>Public Address</mat-label>\n          <input matInput readonly value=\"{{getPublicAddress().value}}\">\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"full-width\">\n          <mat-label>Transaction ID</mat-label>\n          <input matInput readonly value=\"{{getTransactionId().value}}\">\n        </mat-form-field>\n\n        <mat-form-field appearance=\"fill\" style=\"width:33.3%;\">\n          <mat-label>Secret Word 1</mat-label>\n          <input matInput readonly value=\"{{getSecretWords(1).value}}\">\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" style=\"width:33.3%;\">\n          <mat-label>Secret Word 2</mat-label>\n          <input matInput readonly value=\"{{getSecretWords(2).value}}\">\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" style=\"width:33.3%;\">\n          <mat-label>Secret Word 3</mat-label>\n          <input matInput readonly value=\"{{getSecretWords(3).value}}\">\n        </mat-form-field>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <br>\n    <div>\n      <button mat-stroked-button matStepperPrevious>Back</button>\n      <button mat-raised-button color=\"primary\"\n        (click)=\"onSubmit()\">\n        Submit\n      </button>\n    </div>\n  </mat-step>\n\n  <ng-template matStepperIcon=\"email\">\n    <mat-icon>email</mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"confirmation_number\">\n    <mat-icon>confirmation_number</mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"lock\">\n    <mat-icon>lock</mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"send\">\n    <mat-icon>send</mat-icon>\n  </ng-template>\n</mat-horizontal-stepper>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-registration/user-registration.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-registration/user-registration.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserRegistrationUserRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-body pageHeaderTitle=\"Welcom to the Pool XD\">\n  <mat-card>\n    <mat-card-content>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-3\"></div>\n        <div class=\"col-lg-6\">\n          <mat-card-title>Register now!</mat-card-title>\n          <mat-card-subtitle>Put the transaction ID if you have already made the deposit before the registration</mat-card-subtitle>\n\n          <app-user-registration-form></app-user-registration-form>\n        </div>\n        <div class=\"col-lg-3\"></div>\n        <!-- <div class=\"col-lg-6\">\n          <mat-card>\n            <mat-card-header>\n              <mat-card-title>Join as new user</mat-card-title>\n              <mat-card-subtitle>Register here if no deposit has been made yet to the staking pool account</mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n              <app-user-registration-form registrationType=1></app-user-registration-form>\n            </mat-card-content>\n          </mat-card>\n        </div> -->\n      </div>\n    </div>\n    </mat-card-content>\n  </mat-card>\n</app-main-body>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/animation.ts":
  /*!******************************!*\
    !*** ./src/app/animation.ts ***!
    \******************************/

  /*! exports provided: slideInAnimation */

  /***/
  function srcAppAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInAnimation", function () {
      return slideInAnimation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js"); // Routable animations


    var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('heroes <=> hero', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      position: 'relative'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      left: '-100%'
    })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      left: '100%'
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      left: '0%'
    }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])())])]);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'dudezmobi-staking';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _interceptor_http_app_interceptor__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./interceptor/http.app.interceptor */
    "./src/app/interceptor/http.app.interceptor.ts");
    /* harmony import */


    var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./routing/app-routing.module */
    "./src/app/routing/app-routing.module.ts");
    /* harmony import */


    var _components_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/app-main/app-main.component */
    "./src/app/components/app-main/app-main.component.ts");
    /* harmony import */


    var _components_transaction_summary_transaction_summary_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/transaction-summary/transaction-summary.component */
    "./src/app/components/transaction-summary/transaction-summary.component.ts");
    /* harmony import */


    var _components_transaction_summary_header_transaction_summary_header_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/transaction-summary-header/transaction-summary-header.component */
    "./src/app/components/transaction-summary-header/transaction-summary-header.component.ts");
    /* harmony import */


    var _components_transaction_summary_body_transaction_summary_body_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./components/transaction-summary-body/transaction-summary-body.component */
    "./src/app/components/transaction-summary-body/transaction-summary-body.component.ts");
    /* harmony import */


    var _components_transaction_summary_chart_transaction_summary_chart_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./components/transaction-summary-chart/transaction-summary-chart.component */
    "./src/app/components/transaction-summary-chart/transaction-summary-chart.component.ts");
    /* harmony import */


    var _components_update_history_update_history_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./components/update-history/update-history.component */
    "./src/app/components/update-history/update-history.component.ts");
    /* harmony import */


    var _components_pag_not_found_pag_not_found_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./components/pag-not-found/pag-not-found.component */
    "./src/app/components/pag-not-found/pag-not-found.component.ts");
    /* harmony import */


    var _components_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./components/transaction-detail/transaction-detail.component */
    "./src/app/components/transaction-detail/transaction-detail.component.ts");
    /* harmony import */


    var _components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./components/user-registration/user-registration.component */
    "./src/app/components/user-registration/user-registration.component.ts");
    /* harmony import */


    var _components_transaction_detail_table_transaction_detail_table_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./components/transaction-detail-table/transaction-detail-table.component */
    "./src/app/components/transaction-detail-table/transaction-detail-table.component.ts");
    /* harmony import */


    var _components_transaction_detail_group_transaction_detail_group_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./components/transaction-detail-group/transaction-detail-group.component */
    "./src/app/components/transaction-detail-group/transaction-detail-group.component.ts");
    /* harmony import */


    var _components_app_main_body_app_main_body_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./components/app-main-body/app-main-body.component */
    "./src/app/components/app-main-body/app-main-body.component.ts");
    /* harmony import */


    var _components_update_history_table_update_history_table_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./components/update-history-table/update-history-table.component */
    "./src/app/components/update-history-table/update-history-table.component.ts");
    /* harmony import */


    var _components_user_registration_form_user_registration_form_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./components/user-registration-form/user-registration-form.component */
    "./src/app/components/user-registration-form/user-registration-form.component.ts");
    /* harmony import */


    var _components_main_registration_main_registration_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./components/main-registration/main-registration.component */
    "./src/app/components/main-registration/main-registration.component.ts");
    /* harmony import */


    var _components_dialog_loading_dialog_loading_dialog_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./components/dialog/loading-dialog/loading-dialog.component */
    "./src/app/components/dialog/loading-dialog/loading-dialog.component.ts");
    /* harmony import */


    var _components_dialog_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./components/dialog/message-dialog/message-dialog.component */
    "./src/app/components/dialog/message-dialog/message-dialog.component.ts");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_41__["AppMainComponent"], _components_transaction_summary_transaction_summary_component__WEBPACK_IMPORTED_MODULE_42__["TransactionSummaryComponent"], _components_transaction_summary_header_transaction_summary_header_component__WEBPACK_IMPORTED_MODULE_43__["TransactionSummaryHeaderComponent"], _components_transaction_summary_body_transaction_summary_body_component__WEBPACK_IMPORTED_MODULE_44__["TransactionSummaryBodyComponent"], _components_transaction_summary_chart_transaction_summary_chart_component__WEBPACK_IMPORTED_MODULE_45__["TransactionSummaryChartComponent"], _components_update_history_update_history_component__WEBPACK_IMPORTED_MODULE_46__["UpdateHistoryComponent"], _components_pag_not_found_pag_not_found_component__WEBPACK_IMPORTED_MODULE_47__["PagNotFoundComponent"], _components_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_48__["TransactionDetailComponent"], _components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_49__["UserRegistrationComponent"], _components_transaction_detail_table_transaction_detail_table_component__WEBPACK_IMPORTED_MODULE_50__["TransactionDetailTableComponent"], _components_transaction_detail_group_transaction_detail_group_component__WEBPACK_IMPORTED_MODULE_51__["TransactionDetailGroupComponent"], _components_app_main_body_app_main_body_component__WEBPACK_IMPORTED_MODULE_52__["AppMainBodyComponent"], _components_update_history_table_update_history_table_component__WEBPACK_IMPORTED_MODULE_53__["UpdateHistoryTableComponent"], _components_user_registration_form_user_registration_form_component__WEBPACK_IMPORTED_MODULE_54__["UserRegistrationFormComponent"], _components_main_registration_main_registration_component__WEBPACK_IMPORTED_MODULE_55__["MainRegistrationComponent"], _components_dialog_loading_dialog_loading_dialog_component__WEBPACK_IMPORTED_MODULE_56__["LoadingDialogComponent"], _components_dialog_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_57__["MessageDialogComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_38__["ReactiveFormsModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_40__["AppRoutingModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_http_app_interceptor__WEBPACK_IMPORTED_MODULE_39__["HttpAppInterceptor"],
        multi: true
      }, {
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_58__["STEPPER_GLOBAL_OPTIONS"],
        useValue: {
          displayDefaultIndicatorType: false
        }
      }],
      entryComponents: [_components_dialog_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_57__["MessageDialogComponent"], _components_dialog_loading_dialog_loading_dialog_component__WEBPACK_IMPORTED_MODULE_56__["LoadingDialogComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/app-main-body/app-main-body.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/app-main-body/app-main-body.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAppMainBodyAppMainBodyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLW1haW4tYm9keS9hcHAtbWFpbi1ib2R5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/app-main-body/app-main-body.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/app-main-body/app-main-body.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AppMainBodyComponent */

  /***/
  function srcAppComponentsAppMainBodyAppMainBodyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMainBodyComponent", function () {
      return AppMainBodyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppMainBodyComponent =
    /*#__PURE__*/
    function () {
      // @ViewChild('nameInput', true) inputNameRef: ElementRef;
      // pageBody: ElementRef;
      // @ViewChild('someInput') someInput: ElementRef;
      function AppMainBodyComponent() {
        _classCallCheck(this, AppMainBodyComponent);
      }

      _createClass(AppMainBodyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppMainBodyComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppMainBodyComponent.prototype, "pageHeaderTitle", void 0);
    AppMainBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-body',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-main-body.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-main-body/app-main-body.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-main-body.component.css */
      "./src/app/components/app-main-body/app-main-body.component.css")).default]
    })], AppMainBodyComponent);
    /***/
  },

  /***/
  "./src/app/components/app-main/app-main.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/app-main/app-main.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAppMainAppMainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-toolbar {\r\n  padding: 0px;\r\n}\r\n\r\n.sidenav-image-container {\r\n  border: 50px;\r\n  margin: 20px;\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.app-main-container {\r\n  width: 100%;\r\n  height: 90%;\r\n  border: 1px solid rgba(31, 20, 20, 0.5);\r\n}\r\n\r\n.app-sidenav {\r\n  padding: 20px;\r\n}\r\n\r\n.menu-item {\r\n  min-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\n/*\r\n.scrollbar {\r\n  background-color: #F5F5F5;\r\n  float: left;\r\n  height: 300px;\r\n  margin-bottom: 25px;\r\n  margin-left: 22px;\r\n  margin-top: 40px;\r\n  width: 65px;\r\n  overflow-y: scroll;\r\n} */\r\n\r\n/* .force-overflow {\r\n  min-height: 450px;\r\n} */\r\n\r\n.app-main-content {\r\n  /* display: flex; */\r\n  min-height: 90%;\r\n  /* height: 100%; */\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAtbWFpbi9hcHAtbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBOzs7Ozs7Ozs7O0dBVUc7O0FBRUg7O0dBRUc7O0FBRUg7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FwcC1tYWluL2FwcC1tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdi1pbWFnZS1jb250YWluZXIge1xyXG4gIGJvcmRlcjogNTBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5hcHAtbWFpbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzEsIDIwLCAyMCwgMC41KTtcclxufVxyXG5cclxuLmFwcC1zaWRlbmF2IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubWVudS1pdGVtIHtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qXHJcbi5zY3JvbGxiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59ICovXHJcblxyXG4vKiAuZm9yY2Utb3ZlcmZsb3cge1xyXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG59ICovXHJcblxyXG4uYXBwLW1haW4tY29udGVudCB7XHJcbiAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICBtaW4taGVpZ2h0OiA5MCU7XHJcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/app-main/app-main.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/app-main/app-main.component.ts ***!
    \***********************************************************/

  /*! exports provided: AppMainComponent */

  /***/
  function srcAppComponentsAppMainAppMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMainComponent", function () {
      return AppMainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../animation */
    "./src/app/animation.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppMainComponent =
    /*#__PURE__*/
    function () {
      function AppMainComponent() {
        _classCallCheck(this, AppMainComponent);
      }

      _createClass(AppMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAnimationData",
        value: function getAnimationData(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
        }
      }]);

      return AppMainComponent;
    }();

    AppMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-main/app-main.component.html")).default,
      animations: [_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-main.component.css */
      "./src/app/components/app-main/app-main.component.css")).default]
    })], AppMainComponent);
    /***/
  },

  /***/
  "./src/app/components/dialog/loading-dialog/loading-dialog.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/dialog/loading-dialog/loading-dialog.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDialogLoadingDialogLoadingDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .loading-parent {\r\n  padding: 0px;\r\n  margin:0px;\r\n  border-radius: 0px;\r\n  height: 0px;\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translate(-50%,-50%);\r\n  width: 0px;\r\n  z-index: 3;\r\n  opacity: 0.5;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2cvbG9hZGluZy1kaWFsb2cvbG9hZGluZy1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0dBWUciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RpYWxvZy9sb2FkaW5nLWRpYWxvZy9sb2FkaW5nLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmxvYWRpbmctcGFyZW50IHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOjBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgei1pbmRleDogMztcclxuICBvcGFjaXR5OiAwLjU7XHJcbn0gKi9cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/dialog/loading-dialog/loading-dialog.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/dialog/loading-dialog/loading-dialog.component.ts ***!
    \******************************************************************************/

  /*! exports provided: LoadingDialogComponent */

  /***/
  function srcAppComponentsDialogLoadingDialogLoadingDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingDialogComponent", function () {
      return LoadingDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoadingDialogComponent =
    /*#__PURE__*/
    function () {
      function LoadingDialogComponent() {
        _classCallCheck(this, LoadingDialogComponent);
      }

      _createClass(LoadingDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingDialogComponent;
    }();

    LoadingDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loading-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loading-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/loading-dialog/loading-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loading-dialog.component.css */
      "./src/app/components/dialog/loading-dialog/loading-dialog.component.css")).default]
    })], LoadingDialogComponent);
    /***/
  },

  /***/
  "./src/app/components/dialog/message-dialog/message-dialog.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/dialog/message-dialog/message-dialog.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDialogMessageDialogMessageDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9nL21lc3NhZ2UtZGlhbG9nL21lc3NhZ2UtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/dialog/message-dialog/message-dialog.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/dialog/message-dialog/message-dialog.component.ts ***!
    \******************************************************************************/

  /*! exports provided: MessageDialogComponent */

  /***/
  function srcAppComponentsDialogMessageDialogMessageDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageDialogComponent", function () {
      return MessageDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MessageDialogComponent_1;

    var MessageDialogComponent = MessageDialogComponent_1 =
    /*#__PURE__*/
    function () {
      function MessageDialogComponent(data) {
        _classCallCheck(this, MessageDialogComponent);

        this.data = data;
        this.type = null;
        this.type = data.type;
      }

      _createClass(MessageDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "typeIs",
        value: function typeIs(type) {
          return this.type === MessageDialogComponent_1.TYPE[type];
        }
      }]);

      return MessageDialogComponent;
    }();

    MessageDialogComponent.TYPE = {
      generic: 0,
      network_error: 1,
      error: 2,
      warning: 3,
      success: 4
    };

    MessageDialogComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    MessageDialogComponent = MessageDialogComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/message-dialog/message-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message-dialog.component.css */
      "./src/app/components/dialog/message-dialog/message-dialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], MessageDialogComponent);
    /***/
  },

  /***/
  "./src/app/components/main-registration/main-registration.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/main-registration/main-registration.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainRegistrationMainRegistrationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".parallax {\r\n  /* The image used */\r\n  background-image: url('background1.jpg');\r\n  /* background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)); */\r\n\r\n  /* Full height */\r\n  height: 100%;\r\n\r\n  /* Create the parallax scrolling effect */\r\n  /* background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;*/\r\n  background-size: cover;\r\n  -webkit-filter: opacity(25%);\r\n          filter: opacity(25%);\r\n}\r\n\r\n.page-header {\r\n  background-color: #413660;\r\n  height: 100%;\r\n  align-content: center;\r\n}\r\n\r\n.page-title{\r\n    align-content: center;\r\n    background-color:#e8c088;\r\n    font-size: 45px;\r\n    font-family: 'Arial Narrow';\r\n    font-weight: 700;\r\n}\r\n\r\n.content-center{\r\n    margin: auto;\r\n    /* border: solid #e8c088; */\r\n    padding: 10px;\r\n}\r\n\r\n.register-button {\r\n    width: 100%;\r\n    align-content: center;\r\n    font-size: 50px;\r\n    font-family: 'Arial Narrow';\r\n    font-weight: 700;\r\n    /* border: 8px solid #e8c088 */\r\n}\r\n\r\n.registration-form {\r\n  /* background-color: #413660; */\r\n  height: 100%;\r\n  padding: 0px;\r\n  /* align-content: center; */\r\n}\r\n\r\n.title-header {\r\n    font-size: 50px;\r\n    font-family: 'Arial Narrow';\r\n    font-weight: 700;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXJlZ2lzdHJhdGlvbi9tYWluLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHdDQUErRDtFQUMvRCxrRkFBa0Y7O0VBRWxGLGdCQUFnQjtFQUNoQixZQUFZOztFQUVaLHlDQUF5QztFQUN6Qzs7Z0NBRThCO0VBQzlCLHNCQUFzQjtFQUN0Qiw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1yZWdpc3RyYXRpb24vbWFpbi1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbGxheCB7XHJcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDEuanBnJyk7XHJcbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjksIDM4LCAxMTMsIDAuOCksIHJnYmEoMTk1LCA1NSwgMTAwLCAwLjgpKTsgKi9cclxuXHJcbiAgLyogRnVsbCBoZWlnaHQgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xyXG4gIC8qIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7Ki9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGZpbHRlcjogb3BhY2l0eSgyNSUpO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTM2NjA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGV7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlOGMwODg7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaWFsIE5hcnJvdyc7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY29udGVudC1jZW50ZXJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAvKiBib3JkZXI6IHNvbGlkICNlOGMwODg7ICovXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCBOYXJyb3cnO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIC8qIGJvcmRlcjogOHB4IHNvbGlkICNlOGMwODggKi9cclxufVxyXG5cclxuLnJlZ2lzdHJhdGlvbi1mb3JtIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNDEzNjYwOyAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgLyogYWxpZ24tY29udGVudDogY2VudGVyOyAqL1xyXG59XHJcblxyXG4udGl0bGUtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwgTmFycm93JztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/main-registration/main-registration.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/main-registration/main-registration.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: MainRegistrationComponent */

  /***/
  function srcAppComponentsMainRegistrationMainRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainRegistrationComponent", function () {
      return MainRegistrationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _service_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../service/dialog.service */
    "./src/app/service/dialog.service.ts");
    /* harmony import */


    var _dialog_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../dialog/message-dialog/message-dialog.component */
    "./src/app/components/dialog/message-dialog/message-dialog.component.ts");

    var MainRegistrationComponent =
    /*#__PURE__*/
    function () {
      function MainRegistrationComponent(snackBar, dialogService) {
        _classCallCheck(this, MainRegistrationComponent);

        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.loaderShown = false;
      }

      _createClass(MainRegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToRegsitration",
        value: function goToRegsitration() {
          window.scroll({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
          });
        }
      }, {
        key: "showSnackBarMessage",
        value: function showSnackBarMessage(message, action) {
          this.snackBar.open(message, action, {
            duration: 5000
          });
        }
      }, {
        key: "confirmRegistration",
        value: function confirmRegistration(successful) {
          if (successful) {
            this.showSnackBarMessage('Registration Successful!', 'ヽ(´ー｀)ﾉ');
          } else {
            this.showFailedRegistrationMessage();
          }

          this.toggleFormProgressBar();
        }
      }, {
        key: "registrationRequestError",
        value: function registrationRequestError() {
          this.toggleFormProgressBar();
        }
      }, {
        key: "formValueError",
        value: function formValueError(data) {
          this.dialogService.openDialog({
            type: _dialog_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MessageDialogComponent"].TYPE.warning,
            title: 'Invalid Form!',
            reason: data.message,
            status: '500'
          });
          this.loaderShown = false;
        }
      }, {
        key: "showFailedRegistrationMessage",
        value: function showFailedRegistrationMessage() {
          this.dialogService.openDialog({
            type: _dialog_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MessageDialogComponent"].TYPE.warning,
            title: 'Registration Unsuccesful!',
            reason: ' Email address or Public address already exist!',
            status: '500'
          });
        }
      }, {
        key: "toggleFormProgressBar",
        value: function toggleFormProgressBar() {
          this.loaderShown = !this.loaderShown;
        }
      }, {
        key: "registrationSubmitted",
        value: function registrationSubmitted() {
          this.toggleFormProgressBar();
        }
      }]);

      return MainRegistrationComponent;
    }();

    MainRegistrationComponent.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _service_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
      }];
    };

    MainRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-registration/main-registration.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-registration.component.css */
      "./src/app/components/main-registration/main-registration.component.css")).default]
    })], MainRegistrationComponent);
    /***/
  },

  /***/
  "./src/app/components/pag-not-found/pag-not-found.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/pag-not-found/pag-not-found.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPagNotFoundPagNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnLW5vdC1mb3VuZC9wYWctbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/pag-not-found/pag-not-found.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/pag-not-found/pag-not-found.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PagNotFoundComponent */

  /***/
  function srcAppComponentsPagNotFoundPagNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagNotFoundComponent", function () {
      return PagNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PagNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PagNotFoundComponent() {
        _classCallCheck(this, PagNotFoundComponent);
      }

      _createClass(PagNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagNotFoundComponent;
    }();

    PagNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pag-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pag-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pag-not-found/pag-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pag-not-found.component.css */
      "./src/app/components/pag-not-found/pag-not-found.component.css")).default]
    })], PagNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/components/transaction-detail-group/transaction-detail-group.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/transaction-detail-group/transaction-detail-group.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTransactionDetailGroupTransactionDetailGroupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n  width: 100%;\r\n}\r\n\r\ntr.detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.group-row:not(.expanded-row):hover {\r\n  background: #777;\r\n}\r\n\r\ntr.group-row:not(.expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.group-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.group-detail {\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n/* .example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n} */\r\n\r\n/* .example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n} */\r\n\r\n.group-detail-description {\r\n  width: 100%;\r\n  padding: 16px;\r\n}\r\n\r\n/* .example-element-description-attribution {\r\n  opacity: 0.5;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2FjdGlvbi1kZXRhaWwtZ3JvdXAvdHJhbnNhY3Rpb24tZGV0YWlsLWdyb3VwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBRUE7Ozs7Ozs7R0FPRzs7QUFFSDs7OztHQUlHOztBQUVIO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNhY3Rpb24tZGV0YWlsLWdyb3VwL3RyYW5zYWN0aW9uLWRldGFpbC1ncm91cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ci5kZXRhaWwtcm93IHtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbnRyLmdyb3VwLXJvdzpub3QoLmV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM3Nzc7XHJcbn1cclxuXHJcbnRyLmdyb3VwLXJvdzpub3QoLmV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZ3JvdXAtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uZ3JvdXAtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi8qIC5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn0gKi9cclxuXHJcbi8qIC5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufSAqL1xyXG5cclxuLmdyb3VwLWRldGFpbC1kZXNjcmlwdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLyogLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59ICovXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/transaction-detail-group/transaction-detail-group.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/transaction-detail-group/transaction-detail-group.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: TransactionDetailGroupComponent */

  /***/
  function srcAppComponentsTransactionDetailGroupTransactionDetailGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionDetailGroupComponent", function () {
      return TransactionDetailGroupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var src_app_service_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/query.service */
    "./src/app/service/query.service.ts");

    var TransactionDetailGroupComponent =
    /*#__PURE__*/
    function () {
      function TransactionDetailGroupComponent(queryService) {
        _classCallCheck(this, TransactionDetailGroupComponent);

        this.queryService = queryService; // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];

        this.headerColumns = ['id', 'stakeNumber', 'name', 'transactionId', 'description', 'dateTime'];
        this.columnsToDisplay = ['Wallet Address', 'Total Coins', 'Deposits', 'Withdrawals', '%Override', 'Date Added', 'Date Updated', 'Orig Balance', 'Prev Balance', 'Orig Tx', 'Latest Tx', 'Remarks', 'Earnings', 'Current%', 'Staking%', 'Stake Reward', 'Deposit Stake', 'Current Balance', 'Stake Rewards'];
        this.displayedColumns = ['walletAddress', 'totalCoins', 'deposits', 'withdrawals', 'percentageOverride', 'dateAdded', 'dateUpdated', 'originalBalance', 'previousBalance', 'originalTransaction', 'latestTransaction', 'remarks', 'earnings', 'currentPercentage', 'stakingPercentage', 'stakeReward', 'depositStake', 'currentBalance', 'stakeRewardAmount'];
      }

      _createClass(TransactionDetailGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.queryService.getTransactionList().subscribe(function (serverResponse) {
            console.log('Inside subscribe getTransactionList...');
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](serverResponse['data']);
            _this.dataSource.paginator = _this.paginator;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "getGroupTitle",
        value: function getGroupTitle(index, headerNameList) {
          return index <= 2 ? headerNameList[index] : '';
        }
      }]);

      return TransactionDetailGroupComponent;
    }();

    TransactionDetailGroupComponent.ctorParameters = function () {
      return [{
        type: src_app_service_query_service__WEBPACK_IMPORTED_MODULE_5__["QueryService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
      static: true
    })], TransactionDetailGroupComponent.prototype, "paginator", void 0);
    TransactionDetailGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transaction-detail-group',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transaction-detail-group.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-detail-group/transaction-detail-group.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '0px',
        minHeight: '0'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transaction-detail-group.component.css */
      "./src/app/components/transaction-detail-group/transaction-detail-group.component.css")).default]
    })], TransactionDetailGroupComponent);
    /***/
  },

  /***/
  "./src/app/components/transaction-detail-table/transaction-detail-table.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/transaction-detail-table/transaction-detail-table.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTransactionDetailTableTransactionDetailTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n  width: 100%;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #777;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2FjdGlvbi1kZXRhaWwtdGFibGUvdHJhbnNhY3Rpb24tZGV0YWlsLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFuc2FjdGlvbi1kZXRhaWwtdGFibGUvdHJhbnNhY3Rpb24tZGV0YWlsLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/transaction-detail-table/transaction-detail-table.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/transaction-detail-table/transaction-detail-table.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: TransactionDetailTableComponent */

  /***/
  function srcAppComponentsTransactionDetailTableTransactionDetailTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionDetailTableComponent", function () {
      return TransactionDetailTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");

    var TransactionDetailTableComponent =
    /*#__PURE__*/
    function () {
      function TransactionDetailTableComponent() {
        _classCallCheck(this, TransactionDetailTableComponent);

        this.columnsToDisplay = ['Wallet Address', 'Total Coins', 'Deposits', 'Withdrawals', '%Override', 'Date Added', 'Date Updated', 'Orig Balance', 'Prev Balance', 'Orig Tx', 'Latest Tx', 'Remarks', 'Earnings', 'Current%', 'Staking%', 'Stake Reward', 'Deposit Stake', 'Current Balance', 'Stake Rewards'];
        this.displayedColumns = ['walletAddress', 'totalCoins', 'deposits', 'withdrawals', 'percentageOverride', 'dateAdded', 'dateUpdated', 'originalBalance', 'previousBalance', 'originalTransaction', 'latestTransaction', 'remarks', 'earnings', 'currentPercentage', 'stakingPercentage', 'stakeReward', 'depositStake', 'currentBalance', 'stakeRewardAmount'];
      }

      _createClass(TransactionDetailTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataTableSource);
        }
      }]);

      return TransactionDetailTableComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TransactionDetailTableComponent.prototype, "dataTableSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      static: true
    })], TransactionDetailTableComponent.prototype, "paginator", void 0);
    TransactionDetailTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transaction-detail-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transaction-detail-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-detail-table/transaction-detail-table.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transaction-detail-table.component.css */
      "./src/app/components/transaction-detail-table/transaction-detail-table.component.css")).default]
    })], TransactionDetailTableComponent);
    /***/
  },

  /***/
  "./src/app/components/transaction-detail/transaction-detail.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/components/transaction-detail/transaction-detail.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTransactionDetailTransactionDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNhY3Rpb24tZGV0YWlsL3RyYW5zYWN0aW9uLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/transaction-detail/transaction-detail.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/transaction-detail/transaction-detail.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: TransactionDetailComponent */

  /***/
  function srcAppComponentsTransactionDetailTransactionDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionDetailComponent", function () {
      return TransactionDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TransactionDetailComponent =
    /*#__PURE__*/
    function () {
      function TransactionDetailComponent() {
        _classCallCheck(this, TransactionDetailComponent);
      }

      _createClass(TransactionDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TransactionDetailComponent;
    }();

    TransactionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transaction-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transaction-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-detail/transaction-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transaction-detail.component.css */
      "./src/app/components/transaction-detail/transaction-detail.component.css")).default]
    })], TransactionDetailComponent);
    /***/
  },

  /***/
  "./src/app/components/transaction-summary-body/transaction-summary-body.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/transaction-summary-body/transaction-summary-body.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTransactionSummaryBodyTransactionSummaryBodyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n  width: 100%;\r\n}\r\n\r\ntr.mat-row {\r\n  /* border: 1px solid #e7e7e7; */\r\n  height: 28px !important;\r\n  font-size: 10px;\r\n}\r\n\r\n.table-container {\r\n  overflow: auto;\r\n}\r\n\r\n.mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2FjdGlvbi1zdW1tYXJ5LWJvZHkvdHJhbnNhY3Rpb24tc3VtbWFyeS1ib2R5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFuc2FjdGlvbi1zdW1tYXJ5LWJvZHkvdHJhbnNhY3Rpb24tc3VtbWFyeS1ib2R5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRyLm1hdC1yb3cge1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7ICovXHJcbiAgaGVpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4udGFibGUtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/transaction-summary-body/transaction-summary-body.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/transaction-summary-body/transaction-summary-body.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: TransactionSummaryBodyComponent */

  /***/
  function srcAppComponentsTransactionSummaryBodyTransactionSummaryBodyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionSummaryBodyComponent", function () {
      return TransactionSummaryBodyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_service_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/service/query.service */
    "./src/app/service/query.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");

    var TransactionSummaryBodyComponent =
    /*#__PURE__*/
    function () {
      function TransactionSummaryBodyComponent(queryService) {
        _classCallCheck(this, TransactionSummaryBodyComponent);

        this.queryService = queryService;
        this.displayedColumns = ['walletAddress', 'verusID', 'openingBalance', 'deposits', 'withdrawals', 'stakingBalance', 'currentPercentage', 'stakingPercentage', 'stakeReward', 'depositStake', 'currentBalance', 'stakeRewardAmount'];
      }

      _createClass(TransactionSummaryBodyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.queryService.getTransactions().subscribe(function (serverResponse) {
            console.log('Inside subscribe...'); // tslint:disable-next-line:no-string-literal

            _this2.tableData = serverResponse['data'];

            _this2.setupDatatable(_this2.tableData);
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "setupDatatable",
        value: function setupDatatable(data) {
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
          this.dataSource.paginator = this.paginator;
        }
      }]);

      return TransactionSummaryBodyComponent;
    }();

    TransactionSummaryBodyComponent.ctorParameters = function () {
      return [{
        type: src_app_service_query_service__WEBPACK_IMPORTED_MODULE_1__["QueryService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      static: true
    })], TransactionSummaryBodyComponent.prototype, "paginator", void 0);
    TransactionSummaryBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-transaction-summary-body',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transaction-summary-body.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-summary-body/transaction-summary-body.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transaction-summary-body.component.css */
      "./src/app/components/transaction-summary-body/transaction-summary-body.component.css")).default]
    })], TransactionSummaryBodyComponent);
    /***/
  },

  /***/
  "./src/app/components/transaction-summary-chart/transaction-summary-chart.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/transaction-summary-chart/transaction-summary-chart.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTransactionSummaryChartTransactionSummaryChartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNhY3Rpb24tc3VtbWFyeS1jaGFydC90cmFuc2FjdGlvbi1zdW1tYXJ5LWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/transaction-summary-chart/transaction-summary-chart.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/transaction-summary-chart/transaction-summary-chart.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: TransactionSummaryChartComponent */

  /***/
  function srcAppComponentsTransactionSummaryChartTransactionSummaryChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionSummaryChartComponent", function () {
      return TransactionSummaryChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/query.service */
    "./src/app/service/query.service.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");

    var TransactionSummaryChartComponent =
    /*#__PURE__*/
    function () {
      function TransactionSummaryChartComponent(queryService) {
        _classCallCheck(this, TransactionSummaryChartComponent);

        // this.queryService.getBalanceSummary()
        // .subscribe(
        //   (serverResponse: PayloadTemplate[]) => {
        //     console.log('Inside subscribe getBalanceSummary...');
        //     const data = serverResponse['data'];
        //     // console.log(data);
        //     let tempTitle: string[] = [];
        //     let tempData: number[] = [];
        //     // tslint:disable-next-line:forin
        //     for (const item of data) {
        //       console.log(item);
        //       tempTitle.push(item['name']);
        //       tempData.push(item['value']);
        //     }
        this.queryService = queryService; // Pie

        this.pieChartOptions = {
          responsive: true,
          legend: {
            position: 'left'
          }
        };
        this.pieChartLabels = ['Current Balance', 'Stake Rewards']; // public pieChartLabels: Label[];

        this.pieChartData = [30, 70]; // public pieChartData: SingleDataSet;
        // public pieChartData: number[];

        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartPlugins = []; //     this.pieChartLabels = tempTitle;
        //     this.pieChartData = tempData;
        //     monkeyPatchChartJsTooltip();
        //     monkeyPatchChartJsLegend();
        //   },
        // );
      }

      _createClass(TransactionSummaryChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.queryService.getBalanceSummary().subscribe(function (serverResponse) {
            console.log('Inside subscribe getBalanceSummary...');
            var data = serverResponse['data']; // console.log(data);

            var tempTitle = [];
            var tempData = []; // tslint:disable-next-line:forin

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;
                console.log(item);
                tempTitle.push(item['name']);
                tempData.push(item['value']);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            _this3.pieChartLabels = tempTitle;
            _this3.pieChartData = tempData;
            Object(ng2_charts__WEBPACK_IMPORTED_MODULE_3__["monkeyPatchChartJsTooltip"])();
            Object(ng2_charts__WEBPACK_IMPORTED_MODULE_3__["monkeyPatchChartJsLegend"])();
          });
        }
      }]);

      return TransactionSummaryChartComponent;
    }();

    TransactionSummaryChartComponent.ctorParameters = function () {
      return [{
        type: src_app_service_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"]
      }];
    };

    TransactionSummaryChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transaction-summary-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transaction-summary-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-summary-chart/transaction-summary-chart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transaction-summary-chart.component.css */
      "./src/app/components/transaction-summary-chart/transaction-summary-chart.component.css")).default]
    })], TransactionSummaryChartComponent);
    /***/
  },

  /***/
  "./src/app/components/transaction-summary-header/transaction-summary-header.component.css":
  /*!************************************************************************************************!*\
    !*** ./src/app/components/transaction-summary-header/transaction-summary-header.component.css ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTransactionSummaryHeaderTransactionSummaryHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* mat-grid-tile {\r\n  background: darkgray;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2FjdGlvbi1zdW1tYXJ5LWhlYWRlci90cmFuc2FjdGlvbi1zdW1tYXJ5LWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFuc2FjdGlvbi1zdW1tYXJ5LWhlYWRlci90cmFuc2FjdGlvbi1zdW1tYXJ5LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbWF0LWdyaWQtdGlsZSB7XHJcbiAgYmFja2dyb3VuZDogZGFya2dyYXk7XHJcbn0gKi9cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/transaction-summary-header/transaction-summary-header.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/transaction-summary-header/transaction-summary-header.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: TransactionSummaryHeaderComponent */

  /***/
  function srcAppComponentsTransactionSummaryHeaderTransactionSummaryHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionSummaryHeaderComponent", function () {
      return TransactionSummaryHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TransactionSummaryHeaderComponent =
    /*#__PURE__*/
    function () {
      // panelOpenState = false;
      function TransactionSummaryHeaderComponent() {
        _classCallCheck(this, TransactionSummaryHeaderComponent);
      }

      _createClass(TransactionSummaryHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TransactionSummaryHeaderComponent;
    }();

    TransactionSummaryHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transaction-summary-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transaction-summary-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-summary-header/transaction-summary-header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transaction-summary-header.component.css */
      "./src/app/components/transaction-summary-header/transaction-summary-header.component.css")).default]
    })], TransactionSummaryHeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/transaction-summary/transaction-summary.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/transaction-summary/transaction-summary.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTransactionSummaryTransactionSummaryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-header {\r\n  font-size: 25px;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  padding: 10px;\r\n}\r\n\r\n.mat-figure {\r\n  display: inline;\r\n  -webkit-box-align: baseline !important;\r\n          align-items: baseline !important;\r\n  -webkit-box-pack: start !important;\r\n          justify-content: flex-start !important;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2FjdGlvbi1zdW1tYXJ5L3RyYW5zYWN0aW9uLXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZiw4Q0FBOEM7RUFDOUMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsa0NBQXNDO1VBQXRDLHNDQUFzQzs7QUFFeEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyYW5zYWN0aW9uLXN1bW1hcnkvdHJhbnNhY3Rpb24tc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWZpZ3VyZSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/transaction-summary/transaction-summary.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/transaction-summary/transaction-summary.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: TransactionSummaryComponent */

  /***/
  function srcAppComponentsTransactionSummaryTransactionSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionSummaryComponent", function () {
      return TransactionSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TransactionSummaryComponent =
    /*#__PURE__*/
    function () {
      function TransactionSummaryComponent() {
        _classCallCheck(this, TransactionSummaryComponent);
      }

      _createClass(TransactionSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TransactionSummaryComponent;
    }();

    TransactionSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transaction-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transaction-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transaction-summary/transaction-summary.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transaction-summary.component.css */
      "./src/app/components/transaction-summary/transaction-summary.component.css")).default]
    })], TransactionSummaryComponent);
    /***/
  },

  /***/
  "./src/app/components/update-history-table/update-history-table.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/components/update-history-table/update-history-table.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUpdateHistoryTableUpdateHistoryTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtaGlzdG9yeS10YWJsZS91cGRhdGUtaGlzdG9yeS10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWhpc3RvcnktdGFibGUvdXBkYXRlLWhpc3RvcnktdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/update-history-table/update-history-table.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/update-history-table/update-history-table.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: UpdateHistoryTableComponent */

  /***/
  function srcAppComponentsUpdateHistoryTableUpdateHistoryTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateHistoryTableComponent", function () {
      return UpdateHistoryTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var src_app_service_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/query.service */
    "./src/app/service/query.service.ts");

    var UpdateHistoryTableComponent =
    /*#__PURE__*/
    function () {
      function UpdateHistoryTableComponent(queryService) {
        _classCallCheck(this, UpdateHistoryTableComponent);

        this.queryService = queryService;
        this.displayedColumns = ['id', 'date', 'description', 'remarks', 'author'];
      }

      _createClass(UpdateHistoryTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.queryService.getUpdateHistorySummary().subscribe(function (serverResponse) {
            console.log('Inside subscribe getTransactionList...');
            _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](serverResponse['data']);
            _this4.dataSource.paginator = _this4.paginator;
            _this4.dataSource.sort = _this4.sort;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }]);

      return UpdateHistoryTableComponent;
    }();

    UpdateHistoryTableComponent.ctorParameters = function () {
      return [{
        type: src_app_service_query_service__WEBPACK_IMPORTED_MODULE_5__["QueryService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], UpdateHistoryTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      static: true
    })], UpdateHistoryTableComponent.prototype, "sort", void 0);
    UpdateHistoryTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-history-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-history-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-history-table/update-history-table.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-history-table.component.css */
      "./src/app/components/update-history-table/update-history-table.component.css")).default]
    })], UpdateHistoryTableComponent);
    /***/
  },

  /***/
  "./src/app/components/update-history/update-history.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/update-history/update-history.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUpdateHistoryUpdateHistoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWhpc3RvcnkvdXBkYXRlLWhpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/update-history/update-history.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/update-history/update-history.component.ts ***!
    \***********************************************************************/

  /*! exports provided: UpdateHistoryComponent */

  /***/
  function srcAppComponentsUpdateHistoryUpdateHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateHistoryComponent", function () {
      return UpdateHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UpdateHistoryComponent =
    /*#__PURE__*/
    function () {
      function UpdateHistoryComponent() {
        _classCallCheck(this, UpdateHistoryComponent);
      }

      _createClass(UpdateHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UpdateHistoryComponent;
    }();

    UpdateHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-history/update-history.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-history.component.css */
      "./src/app/components/update-history/update-history.component.css")).default]
    })], UpdateHistoryComponent);
    /***/
  },

  /***/
  "./src/app/components/user-registration-form/user-registration-form.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/user-registration-form/user-registration-form.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserRegistrationFormUserRegistrationFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".registration-form {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJlZ2lzdHJhdGlvbi1mb3JtL3VzZXItcmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJlZ2lzdHJhdGlvbi1mb3JtL3VzZXItcmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RyYXRpb24tZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/user-registration-form/user-registration-form.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/user-registration-form/user-registration-form.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: UserRegistrationFormComponent */

  /***/
  function srcAppComponentsUserRegistrationFormUserRegistrationFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegistrationFormComponent", function () {
      return UserRegistrationFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_pool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/pool.service */
    "./src/app/service/pool.service.ts");

    var UserRegistrationFormComponent =
    /*#__PURE__*/
    function () {
      function UserRegistrationFormComponent(formBuilder, poolService) {
        _classCallCheck(this, UserRegistrationFormComponent);

        this.formBuilder = formBuilder;
        this.poolService = poolService;
        this.registrationCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.requestError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formValueError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.withDeposit = true;
        this.validRegistration = false;
        this.formFieldAppearance = 'standard';
        this.hideWord1 = true;
        this.hideWord2 = true;
        this.hideWord3 = true;
        this.errorMessage = {
          email: '',
          publicAddress: '',
          transactionId: '',
          secretWords: []
        };
        this.defaultTxId = '0000000000000000000000000000000000000000000000000000000000000000';
      }

      _createClass(UserRegistrationFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buildFormDefault();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this5 = this;

          console.log(this.addressFormGroup.valid);
          console.log(this.transactionDetailFormGroup.valid);
          console.log(this.secretWordsFormGroup.valid); //Improve unique words validation

          this.isSecretWordUnique();
          this.validRegistration = this.addressFormGroup.valid && this.transactionDetailFormGroup.valid && this.secretWordsFormGroup.valid;

          if (this.validRegistration) {
            var user = {
              email: this.getEmail().value,
              publicAddress: this.getPublicAddress().value,
              transactionId: this.getTransactionId().value,
              secretWords: [this.getSecretWords(1).value, this.getSecretWords(2).value, this.getSecretWords(3).value]
            };
            this.formSubmitted.emit(true);
            this.poolService.registerUser(user).subscribe(function (result) {
              var success = false;
              var isValueValid = result.data.validation.validValues;
              _this5.responseData = result;
              console.log(' Data :: ');
              console.log(result);

              if (!isValueValid) {
                _this5.sendServerValidationError();

                return false;
              }

              if (result.status.code === 201) {
                success = true;
              }

              _this5.registrationCompleted.emit(success);

              _this5.resetForm();
            }, function (error) {
              _this5.requestError.emit(true);
            });
          }
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.stepper.reset();
          this.buildFormDefault(); // Error fields reset

          this.fdAddressFormGroup.resetForm();
          this.fdTransactionDetailFormGroup.resetForm();
          this.fdSecretWordsFormGroup.resetForm();
        }
      }, {
        key: "buildFormDefault",
        value: function buildFormDefault() {
          this.addressFormGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            publicAddress: ['', this.alphaNumericValidator(34, 40)],
            doneDeposit: [true]
          });
          this.transactionDetailFormGroup = this.formBuilder.group({
            transactionId: ['', this.alphaNumericValidator(64, 70)]
          });
          this.secretWordsFormGroup = this.formBuilder.group({
            secretWord1: ['', this.alphaNumericValidator(5, 15)],
            secretWord2: ['', this.alphaNumericValidator(5, 15)],
            secretWord3: ['', this.alphaNumericValidator(5, 15)]
          });
        }
      }, {
        key: "alphaNumericValidator",
        value: function alphaNumericValidator(min, max) {
          return [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(min), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(max), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9]*')];
        }
      }, {
        key: "nextStep",
        value: function nextStep(index) {
          this.stepper.selectedIndex = index;
        }
      }, {
        key: "goToNextStep",
        value: function goToNextStep() {
          if (this.addressFormGroup.get('doneDeposit').value) {
            this.nextStep(1);
          } else {
            this.nextStep(2);
          }
        }
      }, {
        key: "doneDeposiToAccountToggle",
        value: function doneDeposiToAccountToggle(el) {
          var transactionIdField = this.getTransactionId();

          if (el.checked) {
            transactionIdField.setValue('');
          } else {
            transactionIdField.setValue(this.defaultTxId);
          }
        }
      }, {
        key: "depositedToAccount",
        value: function depositedToAccount() {
          return this.getDoneDeposit().value;
        }
      }, {
        key: "isValidEmail",
        value: function isValidEmail() {
          this.errorMessage.email = '';
          var field = this.getEmail();

          if (field.invalid && (field.dirty || field.touched)) {
            this.errorMessage.email = 'Please input a valid email...';
            return false;
          }

          return true;
        }
      }, {
        key: "isValidPublicAddress",
        value: function isValidPublicAddress() {
          this.errorMessage.publicAddress = '';
          var field = this.getPublicAddress();

          if (field.invalid && (field.dirty || field.touched)) {
            if (field.value === '') {
              this.errorMessage.publicAddress = 'Please input a valid public/wallet address...';
              return false;
            }

            if (field.errors.minlength || field.errors.maxlength) {
              this.errorMessage.publicAddress = 'Allowed characters should be [a-zA-Z0-9] within 34 to 40 characters in length';
              return false;
            }

            if (field.errors.pattern) {
              this.errorMessage.publicAddress = 'Only [a-zA-Z0-9] characters are allowed....';
              return false;
            }
          }

          return true;
        }
      }, {
        key: "isValidTransactionId",
        value: function isValidTransactionId() {
          this.errorMessage.transactionId = '';
          var field = this.getTransactionId();

          if (field.invalid && (field.dirty || field.touched)) {
            if (field.value === '') {
              this.errorMessage.transactionId = 'Please input a valid transaction ID...';
              return false;
            }

            if (field.errors.minlength || field.errors.maxlength) {
              this.errorMessage.transactionId = 'Allowed characters should be [a-zA-Z0-9] within 64 to 70 characters in length';
              return false;
            }

            if (field.errors.pattern) {
              this.errorMessage.transactionId = 'Only [a-zA-Z0-9] characters are allowed....';
              return false;
            }
          }

          return true;
        }
      }, {
        key: "isValidSecretWord",
        value: function isValidSecretWord(num) {
          this.errorMessage.secretWords[num] = '';
          var field = this.getSecretWords(num);

          if (field.invalid && (field.dirty || field.touched)) {
            if (field.value === '') {
              this.errorMessage.secretWords[num] = 'Please input a valid secret word...';
              return false;
            }

            if (field.errors.minlength || field.errors.maxlength) {
              this.errorMessage.secretWords[num] = 'Allowed characters should be [a-zA-Z0-9] within 5 to 15 characters in length';
              return false;
            }

            if (field.errors.pattern) {
              this.errorMessage.secretWords[num] = 'Only [a-zA-Z0-9] characters are allowed....';
              return false;
            }
          }

          return true;
        }
      }, {
        key: "isSecretWordUnique",
        value: function isSecretWordUnique() {
          var word1 = this.getSecretWords(1).value;
          var word2 = this.getSecretWords(2).value;
          var word3 = this.getSecretWords(3).value;
          var sameWord = word1 === word2 || word1 === word3 || word2 === word3;

          if (sameWord) {
            this.errorMessage.secretWords[3] = 'Words should be unique...';
            console.log("Has same value");
            this.secretWordsFormGroup.setErrors({
              notUnique: true
            });
            this.formValueError.emit({
              from: 'secretWords',
              data: this.secretWordsFormGroup,
              message: 'Secret Words should be unique...'
            });
            this.nextStep(2);
          }
        }
      }, {
        key: "sendServerValidationError",
        value: function sendServerValidationError() {
          this.formValueError.emit({
            from: 'server',
            data: [],
            message: 'Some fields contain invalid value. Please recheck...'
          });
        }
      }, {
        key: "getEmail",
        value: function getEmail() {
          return this.addressFormGroup.get('email');
        }
      }, {
        key: "getPublicAddress",
        value: function getPublicAddress() {
          return this.addressFormGroup.get('publicAddress');
        }
      }, {
        key: "getDoneDeposit",
        value: function getDoneDeposit() {
          return this.addressFormGroup.get('doneDeposit');
        }
      }, {
        key: "getTransactionId",
        value: function getTransactionId() {
          return this.transactionDetailFormGroup.get('transactionId');
        }
      }, {
        key: "getSecretWords",
        value: function getSecretWords(num) {
          return this.secretWordsFormGroup.get('secretWord' + num);
        }
      }]);

      return UserRegistrationFormComponent;
    }();

    UserRegistrationFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _service_pool_service__WEBPACK_IMPORTED_MODULE_3__["PoolService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserRegistrationFormComponent.prototype, "registrationCompleted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserRegistrationFormComponent.prototype, "formSubmitted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserRegistrationFormComponent.prototype, "requestError", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserRegistrationFormComponent.prototype, "formValueError", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper', {
      static: false
    })], UserRegistrationFormComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formDirectAddressFormGroup', {
      static: false
    })], UserRegistrationFormComponent.prototype, "fdAddressFormGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formDirectTransactionDetailFormGroup', {
      static: false
    })], UserRegistrationFormComponent.prototype, "fdTransactionDetailFormGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formDirectSecretWordsFormGroup', {
      static: false
    })], UserRegistrationFormComponent.prototype, "fdSecretWordsFormGroup", void 0);
    UserRegistrationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-registration-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-registration-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-registration-form/user-registration-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-registration-form.component.css */
      "./src/app/components/user-registration-form/user-registration-form.component.css")).default]
    })], UserRegistrationFormComponent);
    /***/
  },

  /***/
  "./src/app/components/user-registration/user-registration.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/user-registration/user-registration.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserRegistrationUserRegistrationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/user-registration/user-registration.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/user-registration/user-registration.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: UserRegistrationComponent */

  /***/
  function srcAppComponentsUserRegistrationUserRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function () {
      return UserRegistrationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserRegistrationComponent =
    /*#__PURE__*/
    function () {
      function UserRegistrationComponent() {
        _classCallCheck(this, UserRegistrationComponent);
      }

      _createClass(UserRegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserRegistrationComponent;
    }();

    UserRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-registration/user-registration.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-registration.component.css */
      "./src/app/components/user-registration/user-registration.component.css")).default]
    })], UserRegistrationComponent);
    /***/
  },

  /***/
  "./src/app/interceptor/http.app.interceptor.ts":
  /*!*****************************************************!*\
    !*** ./src/app/interceptor/http.app.interceptor.ts ***!
    \*****************************************************/

  /*! exports provided: HttpAppInterceptor */

  /***/
  function srcAppInterceptorHttpAppInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpAppInterceptor", function () {
      return HttpAppInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../service/dialog.service */
    "./src/app/service/dialog.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _components_dialog_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/dialog/message-dialog/message-dialog.component */
    "./src/app/components/dialog/message-dialog/message-dialog.component.ts");

    var HttpAppInterceptor =
    /*#__PURE__*/
    function () {
      function HttpAppInterceptor(dialogService) {
        _classCallCheck(this, HttpAppInterceptor);

        this.dialogService = dialogService;
      }

      _createClass(HttpAppInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this6 = this;

          this.dialogService.openLoadingDialog({});
          request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
          });
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
              console.log('event--->>>', event);

              _this6.dialogService.close();
            }

            return event;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            var data = {};
            console.log("Catch error");
            console.log(error);
            data = {
              reason: error.statusText,
              status: error.status
            };

            _this6.showErrorMessage();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
          }));
        }
      }, {
        key: "showErrorMessage",
        value: function showErrorMessage() {
          this.dialogService.close();
          this.dialogService.openDialog({
            type: _components_dialog_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MessageDialogComponent"].TYPE.network_error,
            title: 'Network Connection Error!',
            reason: 'Unable to communicate with the server at the moment.',
            status: '500'
          });
        }
      }]);

      return HttpAppInterceptor;
    }();

    HttpAppInterceptor.ctorParameters = function () {
      return [{
        type: _service_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]
      }];
    };

    HttpAppInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HttpAppInterceptor);
    /***/
  },

  /***/
  "./src/app/routing/app-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/routing/app-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppRoutingAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_transaction_summary_transaction_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/transaction-summary/transaction-summary.component */
    "./src/app/components/transaction-summary/transaction-summary.component.ts");
    /* harmony import */


    var _components_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/transaction-detail/transaction-detail.component */
    "./src/app/components/transaction-detail/transaction-detail.component.ts");
    /* harmony import */


    var _components_update_history_update_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/update-history/update-history.component */
    "./src/app/components/update-history/update-history.component.ts");
    /* harmony import */


    var _components_pag_not_found_pag_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/pag-not-found/pag-not-found.component */
    "./src/app/components/pag-not-found/pag-not-found.component.ts");
    /* harmony import */


    var _components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/user-registration/user-registration.component */
    "./src/app/components/user-registration/user-registration.component.ts");
    /* harmony import */


    var _components_main_registration_main_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/main-registration/main-registration.component */
    "./src/app/components/main-registration/main-registration.component.ts");

    var appRoutes = [{
      path: 'transaction-summary',
      component: _components_transaction_summary_transaction_summary_component__WEBPACK_IMPORTED_MODULE_4__["TransactionSummaryComponent"]
    }, {
      path: 'transaction-detail',
      component: _components_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_5__["TransactionDetailComponent"]
    }, {
      path: 'update-history',
      component: _components_update_history_update_history_component__WEBPACK_IMPORTED_MODULE_6__["UpdateHistoryComponent"]
    }, {
      path: 'user-registration',
      component: _components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_8__["UserRegistrationComponent"]
    }, {
      path: 'welcome',
      component: _components_main_registration_main_registration_component__WEBPACK_IMPORTED_MODULE_9__["MainRegistrationComponent"]
    }, // Official Main - Remove this for and the one in update app.component
    // { path: '',   redirectTo: '/transaction-summary', pathMatch: 'full' },
    // Temporary Main
    {
      path: '',
      redirectTo: '/welcome',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _components_pag_not_found_pag_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PagNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/service/dialog.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/dialog.service.ts ***!
    \*******************************************/

  /*! exports provided: DialogService */

  /***/
  function srcAppServiceDialogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogService", function () {
      return DialogService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _components_dialog_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/dialog/message-dialog/message-dialog.component */
    "./src/app/components/dialog/message-dialog/message-dialog.component.ts");
    /* harmony import */


    var _components_dialog_loading_dialog_loading_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/dialog/loading-dialog/loading-dialog.component */
    "./src/app/components/dialog/loading-dialog/loading-dialog.component.ts");

    var DialogService =
    /*#__PURE__*/
    function () {
      function DialogService(dialog) {
        _classCallCheck(this, DialogService);

        this.dialog = dialog;
      }

      _createClass(DialogService, [{
        key: "openDialog",
        value: function openDialog(dialogData) {
          this.dialogRef = this.dialog.open(_components_dialog_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MessageDialogComponent"], {
            width: '25%',
            data: dialogData,
            disableClose: true
          });
          this.dialogRef.afterClosed().subscribe(function (result) {
            console.log('Message dialog was closed');
          });
        }
      }, {
        key: "openLoadingDialog",
        value: function openLoadingDialog(data) {
          this.dialogRef = this.dialog.open(_components_dialog_loading_dialog_loading_dialog_component__WEBPACK_IMPORTED_MODULE_4__["LoadingDialogComponent"], {
            width: '40%',
            disableClose: true
          });
          this.dialogRef.afterClosed().subscribe(function (result) {
            console.log('Loading dialog was closed');
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return DialogService;
    }();

    DialogService.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DialogService);
    /***/
  },

  /***/
  "./src/app/service/pool.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/pool.service.ts ***!
    \*****************************************/

  /*! exports provided: PoolService */

  /***/
  function srcAppServicePoolServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PoolService", function () {
      return PoolService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _setting_ApiSetting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../setting/ApiSetting */
    "./src/app/setting/ApiSetting.ts");

    var PoolService =
    /*#__PURE__*/
    function () {
      function PoolService(http) {
        _classCallCheck(this, PoolService);

        this.http = http;
      }

      _createClass(PoolService, [{
        key: "registerUser",
        value: function registerUser(user) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          console.log(user);
          return this.http.post(_setting_ApiSetting__WEBPACK_IMPORTED_MODULE_3__["ApiSetting"].resolveEndpoint('POOL_USER_REGISTRATION'), user);
        }
      }]);

      return PoolService;
    }();

    PoolService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PoolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PoolService);
    /***/
  },

  /***/
  "./src/app/service/query.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/query.service.ts ***!
    \******************************************/

  /*! exports provided: QueryService */

  /***/
  function srcAppServiceQueryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueryService", function () {
      return QueryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _setting_ApiSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../setting/ApiSetting */
    "./src/app/setting/ApiSetting.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var QueryService =
    /*#__PURE__*/
    function () {
      function QueryService(http) {
        _classCallCheck(this, QueryService);

        this.http = http;
      }

      _createClass(QueryService, [{
        key: "getTransactions",
        value: function getTransactions() {
          return this.http.get(_setting_ApiSetting__WEBPACK_IMPORTED_MODULE_1__["ApiSetting"].resolveEndpoint('TX_SUMMARY'));
        }
      }, {
        key: "getTransactionList",
        value: function getTransactionList() {
          return this.http.get(_setting_ApiSetting__WEBPACK_IMPORTED_MODULE_1__["ApiSetting"].resolveEndpoint('TX_LIST'));
        }
      }, {
        key: "getBalanceSummary",
        value: function getBalanceSummary() {
          return this.http.get(_setting_ApiSetting__WEBPACK_IMPORTED_MODULE_1__["ApiSetting"].resolveEndpoint('BALANCE_SUMMARY'));
        }
      }, {
        key: "getUpdateHistorySummary",
        value: function getUpdateHistorySummary() {
          return this.http.get(_setting_ApiSetting__WEBPACK_IMPORTED_MODULE_1__["ApiSetting"].resolveEndpoint('HISTORY_UPDATE_SUMMARY'));
        }
      }, {
        key: "fetchAny",
        value: function fetchAny() {
          return this.http.get(_setting_ApiSetting__WEBPACK_IMPORTED_MODULE_1__["ApiSetting"].resolveEndpoint('TX_SUMMARY'));
        }
      }]);

      return QueryService;
    }();

    QueryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    QueryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], QueryService);
    /***/
  },

  /***/
  "./src/app/setting/ApiSetting.ts":
  /*!***************************************!*\
    !*** ./src/app/setting/ApiSetting.ts ***!
    \***************************************/

  /*! exports provided: ApiSetting */

  /***/
  function srcAppSettingApiSettingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiSetting", function () {
      return ApiSetting;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ApiSetting =
    /*#__PURE__*/
    function () {
      function ApiSetting() {
        _classCallCheck(this, ApiSetting);
      }

      _createClass(ApiSetting, null, [{
        key: "resolveEndpoint",
        value: function resolveEndpoint(uri) {
          return ApiSetting.API_SERVER + ApiSetting.API_VERSION + ApiSetting.API_ENDPOINTS[uri];
        }
      }]);

      return ApiSetting;
    }();

    ApiSetting.API_SERVER = 'http://127.0.0.1:8888';
    ApiSetting.API_VERSION = '/v1';
    ApiSetting.API_ENDPOINTS = {
      TX_SUMMARY: '/transactions',
      TX_LIST: '/transactions/list',
      BALANCE_SUMMARY: '/balances/summary/stakevsrewards',
      HISTORY_UPDATE_SUMMARY: '/histories/update-summary',
      POOL_USER_REGISTRATION: '/pool/user'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Jerold\Documents\Project\Dudezmobi_Staking\dms-web-ui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map