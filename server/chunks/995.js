"use strict";
exports.id = 995;
exports.ids = [995];
exports.modules = {

/***/ 6514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AboutTwo_AboutTwo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/assets/images/resources/new-about-two-img.jpg
var new_about_two_img = __webpack_require__(2861);
;// CONCATENATED MODULE: ./src/assets/images/shapes/about-two-shape.png
/* harmony default export */ const about_two_shape = ({"src":"/_next/static/media/about-two-shape.7f5ecf9b.png","height":107,"width":162,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAfElEQVR4nBWMsQoCQRBDEzhEK0s5EPRKW1v//wdsRMSzOgsXt7DQSnJvixmSzMv4Nd1XljaS95E6W1ZSZT+k1AacyC5RBsCOQ1HUS/rKublM4w4T5ke3T3JGHyltia8uzxGvJcgaqto64N/ov6OhAXymR0KrrQXwAPRh+hm81jIJICYg6AAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/data/aboutTwo.js


const aboutTwo_text = "Embark on our bespoke private safaris to explore the country at your pace. With exclusive felxibility, you'll have a private vehicle and guide. Decide where to go and when. Whether it's observing lions by a waterhole or spending an entire day in the bush. It's your adventure!";
const aboutTwo = {
    image1: about_two_shape,
    image2: new_about_two_img["default"],
    videoId: "Get7rqXYrbQ",
    tagline: "Experience our",
    title: "Private Safari2",
    rightTexts: [
        "Your safari, your way!",
        aboutTwo_text
    ],
    lists: [
        "Professional Safari Guide",
        "High Performance Safari Vehicle",
        "Quick and Easy Booking",
        "Best Price Guarantee", 
    ]
};
/* harmony default export */ const data_aboutTwo = (aboutTwo);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/VideoModal/VideoModal.js
var VideoModal = __webpack_require__(9821);
;// CONCATENATED MODULE: ./src/components/AboutTwo/AboutTwo.js





const { image1 , image2 , videoId , tagline , title , lists , rightTexts  } = data_aboutTwo;
const AboutTwo = ()=>{
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "about-two",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "about-two-shape float-bob-y",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                            src: image1.src,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    xl: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "about-two__left",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "about-tow__left-img animated slideInLeft",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                                    src: image2.src,
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    onClick: ()=>setOpen(true)
                                                    ,
                                                    className: "video-popup",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "about-two__video-btn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon-play-button"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    xl: 6,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "about-two__right",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "section-title text-left",
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
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "about-two__tour-points",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: "list-unstyled about-two__list",
                                                        children: lists.slice(0, 2).map((list, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "icon",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fa fa-check"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "text",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: list
                                                                        })
                                                                    })
                                                                ]
                                                            }, index)
                                                        )
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: "list-unstyled about-two__list about-two__list-two",
                                                        children: lists.slice(2).map((list, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "icon",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fa fa-check"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "text",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: list
                                                                        })
                                                                    })
                                                                ]
                                                            }, index)
                                                        )
                                                    })
                                                ]
                                            }),
                                            rightTexts.map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: `about-two__right-text-${index + 1}`,
                                                    children: text
                                                }, index)
                                            ),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "thm-btn about-two__btn",
                                                children: "Book with us now"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(VideoModal/* default */.Z, {
                isOpen: isOpen,
                setOpen: setOpen,
                id: videoId
            })
        ]
    });
};
/* harmony default export */ const AboutTwo_AboutTwo = (AboutTwo);


/***/ }),

/***/ 1897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ThreeIconBox_ThreeIconBox)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/threeIconBox.js
const ThreeIconBox = [
    {
        id: 1,
        icon: "icon-user",
        title: "STEP 1",
        text: "Select number travellers + departure date"
    },
    {
        id: 2,
        icon: "icon-booking",
        title: "STEP 2",
        text: "Select national park(s) + Island(s) and send"
    },
    {
        id: 3,
        icon: "icon-cashback",
        title: "STEP 3",
        text: "Together we create your dream holiday"
    },
    {
        id: 3,
        icon: "icon-travel",
        title: "STEP 4",
        text: "After the payment, you will get your once-in-a-lifetime experience!"
    }, 
];
/* harmony default export */ const threeIconBox = (ThreeIconBox);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/ThreeIconBox/ThreeIconBox.js




const ThreeIconBox_ThreeIconBox = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "three-icon-box",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "popular-tours__container",
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                children: threeIconBox.map(({ id , icon , title , text  })=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        xl: 3,
                        lg: 3,
                        className: "animated fadeInUp",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "three-icon-box__single",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "three-icon-box__icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: icon
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "three-icon-box__content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "three-icon-box__title",
                                            children: title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "three-icon-box__text",
                                            children: text
                                        })
                                    ]
                                })
                            ]
                        })
                    }, id)
                )
            })
        })
    });
};
/* harmony default export */ const components_ThreeIconBox_ThreeIconBox = (ThreeIconBox_ThreeIconBox);


/***/ }),

/***/ 9996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3554);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_select__WEBPACK_IMPORTED_MODULE_3__]);
react_select__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const typeOptions = [
    "Adventure Safari",
    "Backpacker",
    "Budget",
    "Excursion"
].map((it)=>({
        value: it,
        label: it
    })
);
const typeKeywords = [
    "Tanzania",
    "Kenya",
    "Uganda",
    "Custom"
].map((it)=>({
        value: it,
        label: it
    })
);
const customStyle = {
    container: (provided)=>({
            ...provided,
            zIndex: 100000
        })
    ,
    valueContainer: (provided)=>({
            ...provided,
            padding: 0
        })
    ,
    singleValue: (provided)=>({
            ...provided,
            cursor: "pointer"
        })
    ,
    menu: (provided)=>({
            ...provided,
            marginTop: 5,
            border: "none",
            boxShadow: "none",
            height: 0
        })
    ,
    option: (provided, state)=>({
            ...provided,
            color: "white",
            padding: "4px 20px",
            backgroundColor: state.isSelected ? "#e8604c" : "#313041",
            transition: "all 0.4s ease",
            cursor: "pointer",
            borderBottom: state.label === typeOptions[typeOptions.length - 1].label ? "none" : "0.5px solid #ffffff33",
            "&:hover": {
                backgroundColor: "#e8604c"
            },
            borderRadius: state.label === typeOptions[typeOptions.length - 1].label ? "0 0 8px 8px" : 0,
            fontSize: 16,
            fontWeight: 500
        })
    ,
    control: (base)=>({
            ...base,
            height: 0,
            borderColor: "transparent",
            boxShadow: "none",
            borderRadius: "8px",
            "&:hover": {
                borderColor: "transparent"
            }
        })
};
const TourSearchForm = ()=>{
    const { 0: startDate , 1: setStartDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Adventure");
    const handleSelect = ({ value  })=>{
        setSelected(value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            type: selected,
            date: startDate,
            place: formData.get("place")
        };
        console.log(data);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit,
        className: "tour-search-one",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "tour-search-one__inner",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "tour-search-one__inputs",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "tour-search-one__input-box",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "place",
                                    children: "Where to"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    defaultValue: typeKeywords[0],
                                    name: "place",
                                    options: typeKeywords,
                                    onChange: handleSelect,
                                    styles: customStyle,
                                    isSearchable: false,
                                    components: {
                                        DropdownIndicator: ()=>null
                                        ,
                                        IndicatorSeparator: ()=>null
                                    },
                                    instanceId: "enterKeywords"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "tour-search-one__input-box",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "When"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    selected: startDate,
                                    onChange: (date)=>setStartDate(date)
                                    ,
                                    className: "hasDatepicker",
                                    placeholderText: "September"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "tour-search-one__input-box tour-search-one__input-box-last",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "type",
                                    children: "Type"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    defaultValue: typeOptions[0],
                                    name: "type",
                                    options: typeOptions,
                                    onChange: handleSelect,
                                    styles: customStyle,
                                    isSearchable: false,
                                    components: {
                                        DropdownIndicator: ()=>null
                                        ,
                                        IndicatorSeparator: ()=>null
                                    },
                                    instanceId: "tourTypeSelect"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tour-search-one__btn-wrap",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "thm-btn tour-search-one__btn openTheModalAppear",
                        children: "Book Now"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TourSearchForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;