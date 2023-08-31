"use strict";
exports.id = 418;
exports.ids = [418];
exports.modules = {

/***/ 418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PageHeader_PageHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/assets/images/backgrounds/page-header-bg.jpg
/* harmony default export */ const page_header_bg = ({"src":"/_next/static/media/page-header-bg.0080c94b.jpg","height":258,"width":1894,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAEACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAvgyv/8QAGRAAAQUAAAAAAAAAAAAAAAAAAwACNXSx/9oACAEBAAE/ACzwKjtX/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Ar//Z"});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/PageHeader/PageHeader.js





const PageHeader = ({ title ="" , page ="" , outerPage =""  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "page-header",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page-header__top",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "page-header-bg",
                        style: {
                            backgroundImage: ` url(${page_header_bg.src})`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "page-header-bg-overly"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "page-header__top-inner",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: title || page
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "page-header__bottom",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "page-header__bottom-inner",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "thm-breadcrumb list-unstyled",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "."
                                    })
                                }),
                                " ",
                                outerPage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: outerPage
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "."
                                            })
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "active",
                                    children: page || title
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const PageHeader_PageHeader = (PageHeader);


/***/ })

};
;