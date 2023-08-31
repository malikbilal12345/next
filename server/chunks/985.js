"use strict";
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 8985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PopularTours_PopularToursTwo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/popularToursTwo.js
const popularToursTwo = {
    tagline: "Discover",
    title: "Our Most Popular Tours",
    popularTours: [
        {
            id: 1,
            image: "popular-tours__img-1.jpg",
            title: "National Park 2 Days Tour",
            superb: "8.0",
            rate: "1870",
            meta: [
                "3 Days",
                "12+",
                "Los Angeles"
            ]
        },
        {
            id: 2,
            image: "popular-tours__img-2.jpg",
            title: "Dark Forest Adventure",
            superb: "8.0",
            rate: "1870",
            meta: [
                "3 Days",
                "12+",
                "Los Angeles"
            ]
        },
        {
            id: 3,
            image: "new-about-two-img.jpg",
            title: "Discover Depth of Beach",
            superb: "8.0",
            rate: "1870",
            meta: [
                "3 Days",
                "12+",
                "Los Angeles"
            ]
        },
        {
            id: 4,
            image: "popular-tours__img-4.jpg",
            title: "Moscow Red City Land",
            superb: "8.0",
            rate: "1870",
            meta: [
                "3 Days",
                "12+",
                "Los Angeles"
            ]
        }, 
    ]
};
/* harmony default export */ const data_popularToursTwo = (popularToursTwo);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/PopularTours/SingleTour.js
var SingleTour = __webpack_require__(8856);
;// CONCATENATED MODULE: ./src/components/PopularTours/PopularToursTwo.js





const { tagline , title , popularTours  } = data_popularToursTwo;
let urlMain = "/tour-details";
const PopularToursTwo = ({ toursPage =false  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "popular-tours-two PopularToursTwo",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "popular-tours__container",
            children: [
                !toursPage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-title text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "section-title__tagline",
                            children: tagline
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "section-title__title",
                            children: title
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                    children: popularTours.map((tour)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            xl: 3,
                            lg: 4,
                            md: 6,
                            className: "animated fadeInUp",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(SingleTour/* default */.Z, {
                                tour: tour,
                                urlMain: urlMain,
                                userSelect: true
                            })
                        }, tour.id)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const PopularTours_PopularToursTwo = (PopularToursTwo);


/***/ })

};
;