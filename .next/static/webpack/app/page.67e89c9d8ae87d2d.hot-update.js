"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Page_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Page.module.css */ \"(app-pages-browser)/./app/Page.module.css\");\n/* harmony import */ var _Page_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Page_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Components_carouselImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/carouselImage */ \"(app-pages-browser)/./app/Components/carouselImage.tsx\");\n/* harmony import */ var _Components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/card */ \"(app-pages-browser)/./app/Components/card.tsx\");\n/* harmony import */ var _Components_testimoni__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/testimoni */ \"(app-pages-browser)/./app/Components/testimoni.tsx\");\n/* harmony import */ var _Components_pesan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/pesan */ \"(app-pages-browser)/./app/Components/pesan.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [buttonVisible, setButtonVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            // Tentukan kapan tombol \"Hubungi\" harus muncul\n            if (window.scrollY > window.innerHeight / 2) {\n                setButtonVisible(true);\n            } else {\n                setButtonVisible(false);\n            }\n        };\n        // Tambahkan event listener untuk menggulir\n        window.addEventListener(\"scroll\", handleScroll);\n        // Hapus event listener saat komponen dibongkar\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const handleContactClick = ()=>{\n        const whatsappLink = \"https://api.whatsapp.com/send?phone=6281210390991&text=Halo%20Pak%20Rizki,%20saya%20mau%20bertanya%20tentang%20terapi.\";\n        window.open(whatsappLink, \"_blank\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: {\n            maxWidth: \"100vw\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Page_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/logo.png\",\n                            alt: \"Kiki Massage Logo\",\n                            style: {\n                                width: \"35px\",\n                                height: \"35px\",\n                                borderRadius: \"10px\",\n                                paddingTop: \"4px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Page_module_css__WEBPACK_IMPORTED_MODULE_6___default().pesan),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                const formSection = document.getElementById(\"form\");\n                                if (formSection) {\n                                    formSection.scrollIntoView({\n                                        behavior: \"smooth\"\n                                    });\n                                }\n                            },\n                            style: {\n                                background: \"rgb(30, 150, 300)\",\n                                color: \"white\",\n                                width: \"100px\",\n                                height: \"30px\",\n                                border: \"none\",\n                                borderRadius: \"1rem\",\n                                cursor: \"pointer\"\n                            },\n                            children: \"PESAN\"\n                        }, void 0, false, {\n                            fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_carouselImage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Page_module_css__WEBPACK_IMPORTED_MODULE_6___default().greeting),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Selamat Datang\"\n                    }, void 0, false, {\n                        fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Layanan jasa massage murah dan profesional di bidang nya. Kami siap datang ke lokasi anda dan siap melayani anda kapan saja dan dimana saja. Layanan kami di jamin aman dan sudah terbukti keampuhan nya. Jangan ragu untuk memesan layanan kami dan rasakan sensasinya sentuhan lembut dengan manja.\"\n                    }, void 0, false, {\n                        fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Kami Memberikan Layanan\"\n            }, void 0, false, {\n                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Page_module_css__WEBPACK_IMPORTED_MODULE_6___default().layanan),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100%\",\n                    display: \"flex\",\n                    flexWrap: \"wrap\",\n                    justifyContent: \"center\",\n                    gap: \"5rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"form\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Formulir Pemesanan\"\n                            }, void 0, false, {\n                                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_pesan__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Page_module_css__WEBPACK_IMPORTED_MODULE_6___default().testimoni),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Testimoni\"\n                            }, void 0, false, {\n                                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_testimoni__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            buttonVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                id: \"contactButton\",\n                src: \"/hubungi.png\",\n                alt: \"Hubungi\",\n                style: {\n                    width: 200,\n                    position: \"fixed\",\n                    bottom: 20,\n                    right: 20,\n                    cursor: \"pointer\"\n                },\n                onClick: handleContactClick\n            }, void 0, false, {\n                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                style: {\n                    background: \"rgb(30, 150, 300)\",\n                    width: \"100%\",\n                    height: \"max-content\",\n                    display: \"grid\",\n                    alignContent: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"13px\",\n                            color: \"white\",\n                            textAlign: \"center\",\n                            height: \"1px\",\n                            fontWeight: \"bold\"\n                        },\n                        children: \"\\xa9Kiki Massage\"\n                    }, void 0, false, {\n                        fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"11px\",\n                            color: \"white\",\n                            textAlign: \"center\",\n                            height: \"1px\"\n                        },\n                        children: \"Contact Us\"\n                    }, void 0, false, {\n                        fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flex: \"wrap\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/whatsapp.png\",\n                                alt: \"\",\n                                style: {\n                                    width: \"15px\",\n                                    height: \"15px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                                lineNumber: 168,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    fontSize: \"11px\",\n                                    color: \"white\",\n                                    textAlign: \"center\",\n                                    height: \"10px\"\n                                },\n                                children: \"+62 812-1039-0991\"\n                            }, void 0, false, {\n                                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                                lineNumber: 173,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arya/kiki-massage/app/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"AwC6YT+n9BzfUdlTQGS2aLtwyOo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMeUMsVUFBVTs0QkFDVm5CLE9BQU87NEJBQ1BvQixXQUFXOzRCQUNYaEMsUUFBUTs0QkFDUmlDLFlBQVk7d0JBQ2Q7a0NBQ0Q7Ozs7OztrQ0FHRCw4REFBQ2hCO3dCQUNDM0IsT0FBTzs0QkFDTHlDLFVBQVU7NEJBQ1ZuQixPQUFPOzRCQUNQb0IsV0FBVzs0QkFDWGhDLFFBQVE7d0JBQ1Y7a0NBQ0Q7Ozs7OztrQ0FHRCw4REFBQ1A7d0JBQ0NILE9BQU87NEJBQ0w2QixTQUFTOzRCQUNUZSxNQUFNOzRCQUNOQyxZQUFZOzRCQUNaZCxnQkFBZ0I7d0JBQ2xCOzswQ0FFQSw4REFBQ3pCO2dDQUNDQyxLQUFJO2dDQUNKQyxLQUFJO2dDQUNKUixPQUFPO29DQUFFUyxPQUFPO29DQUFRQyxRQUFRO2dDQUFPOzs7Ozs7MENBRXpDLDhEQUFDaUI7Z0NBQ0MzQixPQUFPO29DQUNMeUMsVUFBVTtvQ0FDVm5CLE9BQU87b0NBQ1BvQixXQUFXO29DQUNYaEMsUUFBUTtnQ0FDVjswQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FsTHdCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUGFnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9Db21wb25lbnRzL2Nhcm91c2VsSW1hZ2VcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ29tcG9uZW50cy9jYXJkXCI7XHJcbmltcG9ydCBUZXN0aW1vbmlhbFNsaWRlciBmcm9tIFwiLi9Db21wb25lbnRzL3Rlc3RpbW9uaVwiO1xyXG5pbXBvcnQgUGVzYW4gZnJvbSBcIi4vQ29tcG9uZW50cy9wZXNhblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbYnV0dG9uVmlzaWJsZSwgc2V0QnV0dG9uVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIC8vIFRlbnR1a2FuIGthcGFuIHRvbWJvbCBcIkh1YnVuZ2lcIiBoYXJ1cyBtdW5jdWxcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gd2luZG93LmlubmVySGVpZ2h0IC8gMikge1xyXG4gICAgICAgIHNldEJ1dHRvblZpc2libGUodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0QnV0dG9uVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gVGFtYmFoa2FuIGV2ZW50IGxpc3RlbmVyIHVudHVrIG1lbmdndWxpclxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICAvLyBIYXB1cyBldmVudCBsaXN0ZW5lciBzYWF0IGtvbXBvbmVuIGRpYm9uZ2thclxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb250YWN0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB3aGF0c2FwcExpbmsgPVxyXG4gICAgICBcImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTYyODEyMTAzOTA5OTEmdGV4dD1IYWxvJTIwUGFrJTIwUml6a2ksJTIwc2F5YSUyMG1hdSUyMGJlcnRhbnlhJTIwdGVudGFuZyUyMHRlcmFwaS5cIjtcclxuICAgIHdpbmRvdy5vcGVuKHdoYXRzYXBwTGluaywgXCJfYmxhbmtcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMHZ3XCIgfX0+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwiS2lraSBNYXNzYWdlIExvZ29cIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjM1cHhcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI0cHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wZXNhbn0+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBmb3JtU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcclxuICAgICAgICAgICAgICBpZiAoZm9ybVNlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGZvcm1TZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiKDMwLCAxNTAsIDMwMClcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUEVTQU5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIDxDYXJvdXNlbCAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmVldGluZ30+XHJcbiAgICAgICAgPGgzPlNlbGFtYXQgRGF0YW5nPC9oMz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIExheWFuYW4gamFzYSBtYXNzYWdlIG11cmFoIGRhbiBwcm9mZXNpb25hbCBkaSBiaWRhbmcgbnlhLiBLYW1pIHNpYXBcclxuICAgICAgICAgIGRhdGFuZyBrZSBsb2thc2kgYW5kYSBkYW4gc2lhcCBtZWxheWFuaSBhbmRhIGthcGFuIHNhamEgZGFuIGRpbWFuYVxyXG4gICAgICAgICAgc2FqYS4gTGF5YW5hbiBrYW1pIGRpIGphbWluIGFtYW4gZGFuIHN1ZGFoIHRlcmJ1a3RpIGtlYW1wdWhhbiBueWEuXHJcbiAgICAgICAgICBKYW5nYW4gcmFndSB1bnR1ayBtZW1lc2FuIGxheWFuYW4ga2FtaSBkYW4gcmFzYWthbiBzZW5zYXNpbnlhIHNlbnR1aGFuXHJcbiAgICAgICAgICBsZW1idXQgZGVuZ2FuIG1hbmphLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8aDM+S2FtaSBNZW1iZXJpa2FuIExheWFuYW48L2gzPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheWFuYW59PlxyXG4gICAgICAgIDxDYXJkIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgZ2FwOiBcIjVyZW1cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm1cIj5cclxuICAgICAgICAgIDxoMz5Gb3JtdWxpciBQZW1lc2FuYW48L2gzPlxyXG4gICAgICAgICAgPFBlc2FuIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXN0aW1vbml9PlxyXG4gICAgICAgICAgPGgzPlRlc3RpbW9uaTwvaDM+XHJcbiAgICAgICAgICA8VGVzdGltb25pYWxTbGlkZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxiciAvPlxyXG5cclxuICAgICAgey8qIEd1bmFrYW4ga29uZGlzaSB1bnR1ayBtZW5hbXBpbGthbiB0b21ib2wgXCJIdWJ1bmdpXCIgKi99XHJcbiAgICAgIHtidXR0b25WaXNpYmxlICYmIChcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBpZD1cImNvbnRhY3RCdXR0b25cIlxyXG4gICAgICAgICAgc3JjPVwiL2h1YnVuZ2kucG5nXCJcclxuICAgICAgICAgIGFsdD1cIkh1YnVuZ2lcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICAgICAgYm90dG9tOiAyMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDIwLFxyXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbnRhY3RDbGlja31cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGZvb3RlclxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYigzMCwgMTUwLCAzMDApXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwibWF4LWNvbnRlbnRcIixcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxcHhcIixcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIMKpS2lraSBNYXNzYWdlXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxMXB4XCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjFweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4OiBcIndyYXBcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiL3doYXRzYXBwLnBuZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1cHhcIiwgaGVpZ2h0OiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTFweFwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICs2MiA4MTItMTAzOS0wOTkxXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJDYXJvdXNlbCIsIkNhcmQiLCJUZXN0aW1vbmlhbFNsaWRlciIsIlBlc2FuIiwiSG9tZSIsImJ1dHRvblZpc2libGUiLCJzZXRCdXR0b25WaXNpYmxlIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDb250YWN0Q2xpY2siLCJ3aGF0c2FwcExpbmsiLCJvcGVuIiwibWFpbiIsInN0eWxlIiwibWF4V2lkdGgiLCJuYXYiLCJkaXYiLCJjbGFzc05hbWUiLCJsb2dvIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nVG9wIiwicGVzYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybVNlY3Rpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImN1cnNvciIsImdyZWV0aW5nIiwiaDMiLCJwIiwibGF5YW5hbiIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50IiwiZ2FwIiwiaWQiLCJ0ZXN0aW1vbmkiLCJiciIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJmb290ZXIiLCJhbGlnbkNvbnRlbnQiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJmbGV4IiwiYWxpZ25JdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});