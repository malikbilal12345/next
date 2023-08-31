"use strict";
exports.id = 295;
exports.ids = [295];
exports.modules = {

/***/ 3289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/footer-logo.2eb548ed.png","height":35,"width":132,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARklEQVR4nGPcUV76QlNJ/ot0Ylo8Myurwv9//64yMDJyMzAw2ALxTsalmZmX1ET5v5qUVIYx8PLp/f///ydQghmI5YH4GwDfsxSEWGWIMwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 8082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo-1.279e19a3.png","height":36,"width":137,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAS0lEQVR4nGN8tHXzi9f7d32pPnIj/v633wqCLExXf/z9z83AwGALxLsYXx0/cunLpQtfm9JzQg8ZueiL/P/749c/BmagpAIDA8M3AMlHINEI2Gr0AAAAAElFTkSuQmCC"});

/***/ }),

/***/ 1577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo-2.544c553c.png","height":35,"width":132,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARklEQVR4nGPcUV76QlNJ/ot0Ylo8Myurwv9//64yMDJyMzAw2ALxTsalmZmX1ET5v5qUVIYx8PLp/f///ydQghmI5YH4GwDfsxSEWGWIMwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 8295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/context/context.js
var context = __webpack_require__(2280);
// EXTERNAL MODULE: ./src/assets/images/resources/logo-1.png
var logo_1 = __webpack_require__(8082);
// EXTERNAL MODULE: ./src/assets/images/resources/logo-2.png
var logo_2 = __webpack_require__(1577);
;// CONCATENATED MODULE: ./src/data/headerData.js


const navItems = [
    {
        id: 1,
        name: "Home",
        href: "/",
        subNavItems: []
    },
    {
        id: 2,
        name: "Adventure Safari",
        href: "#",
        subNavItems: []
    },
    {
        id: 3,
        name: "Backpacker Budget",
        href: "#",
        subNavItems: []
    },
    {
        id: 4,
        name: "Excursions",
        href: "#",
        subNavItems: []
    },
    {
        id: 5,
        name: "Contact",
        href: "#",
        subNavItems: []
    },
    {
        id: 6,
        classs: 'openTheModalAppear',
        name: "Book with us now",
        href: "#",
        subNavItems: []
    }, 
];
const social = [
    {
        icon: "fa-facebook-square",
        link: ""
    },
    {
        icon: "fa-twitter",
        link: ""
    },
    {
        icon: "fa-instagram",
        link: ""
    },
    {
        icon: "fa-pinterest-p",
        link: ""
    }, 
];
const headerData = {
    icons: [
        {
            id: 1,
            icon: "icon-phone-call",
            content: "+ 92 666 999 0000",
            subHref: "tel"
        },
        {
            id: 2,
            icon: "icon-at",
            content: "needhelp@company.com",
            subHref: "mailto"
        }, 
    ],
    navItems,
    social,
    logo: logo_1["default"],
    logo2: logo_2["default"]
};
/* harmony default export */ const data_headerData = (headerData);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/useScroll.js

const useScroll = (scrollSize = 0)=>{
    const { 0: scrollTop , 1: setScrollTop  } = (0,external_react_.useState)(false);
    const handleSet = (0,external_react_.useCallback)(()=>{
        if ((window === null || window === void 0 ? void 0 : window.scrollY) > scrollSize) {
            setScrollTop(true);
        } else {
            setScrollTop(false);
        }
    }, [
        scrollSize
    ]);
    (0,external_react_.useEffect)(()=>{
        handleSet();
        window.addEventListener("scroll", handleSet);
        return ()=>window.removeEventListener("scroll", handleSet)
        ;
    }, [
        handleSet
    ]);
    return scrollTop;
};
/* harmony default export */ const hooks_useScroll = (useScroll);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Header/NavItem.js




const NavItem = ({ navItem ={}  })=>{
    const { pathname  } = (0,router_.useRouter)();
    const { classs , name , href , subNavItems  } = navItem;
    const subHref = subNavItems.map((item)=>item.href
    );
    const current = pathname === href || subHref.includes(pathname);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: `dropdown${current ? " current" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: href,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: href,
                    className: `${classs ? "openTheModalAppear" : ""}`,
                    children: name
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: subNavItems.map((subItem)=>{
                    var ref, ref1;
                    /*#__PURE__*/ return (0,jsx_runtime_.jsxs)("li", {
                        className: ((ref = subItem.subItems) === null || ref === void 0 ? void 0 : ref.length) ? "dropdown" : "",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: subItem.href,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: href,
                                    children: subItem.name
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: (ref1 = subItem.subItems) === null || ref1 === void 0 ? void 0 : ref1.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: item.href,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: href,
                                                children: item.name
                                            })
                                        })
                                    }, item.id)
                                )
                            })
                        ]
                    }, subItem.id);
                })
            })
        ]
    });
};
/* harmony default export */ const Header_NavItem = (NavItem);

;// CONCATENATED MODULE: ./src/components/Header/Header.js








const { icons , navItems: Header_navItems , social: Header_social , logo , logo2  } = data_headerData;
const Header = ({ pageTitle  })=>{
    const scrollTop = hooks_useScroll(130);
    const { toggleMenu , toggleSearch  } = (0,context/* useRootContext */.E)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: `main-header${pageTitle === "Home Two" ? " main-header-two" : ""} clearfix`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "main-header__top d-none",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main-header__top-inner clearfix",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "main-header__top-left",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "list-unstyled main-header__top-address",
                                    children: icons.map(({ id , icon , content , subHref  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: icon
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: `${subHref}:${content}`,
                                                        children: content
                                                    })
                                                })
                                            ]
                                        }, id)
                                    )
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "main-header__top-right",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-header__top-right-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-header__top-right-social",
                                            children: Header_social.map(({ icon , link  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: link,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: `fab ${icon}`
                                                    })
                                                }, index)
                                            )
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-header__top-right-btn-box",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "thm-btn main-header__top-right-btn",
                                                children: "Become a local guide"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: scrollTop ? `stricky-header stricked-menu main-menu${pageTitle === "Home Two" ? " main-menu-two" : ""} stricky-fixed slideInDown animated clearfix` : `main-menu${pageTitle === "Home Two" ? " main-menu-two" : ""} slideIn animated clearfix`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: scrollTop ? "sticky-header__content main-menu-wrapper clearfix" : "main-menu-wrapper clearfix",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                        className: "clearfix",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "main-menu-wrapper-inner clearfix",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu-wrapper__left clearfix",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-wrapper__logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                                        src: pageTitle === "Home Two" ? logo2.src : logo.src,
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu-wrapper__main-menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    onClick: ()=>toggleMenu()
                                                    ,
                                                    className: "mobile-nav__toggler",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-bars"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "main-menu__list",
                                                    children: Header_navItems.map((navItem)=>/*#__PURE__*/ jsx_runtime_.jsx(Header_NavItem, {
                                                            navItem: navItem
                                                        }, navItem.id)
                                                    )
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu-wrapper__right d-none",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            onClick: toggleSearch,
                                            style: {
                                                cursor: "pointer"
                                            },
                                            className: "main-menu__search search-toggler icon-magnifying-glass"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "main-menu__user icon-avatar"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./src/assets/images/loader.png
/* harmony default export */ const loader = ({"src":"/_next/static/media/loader.9d1b84e3.png","height":135,"width":146,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/Af///wDiAQFjCmVThP///hj7+vnv//8AkBsK/IIBthcBAfjk4mn7ta+W4ZxxAAcTK/8WHyYB/v7+AAT9+oPO+gl+Af3//+/t6OkQBPPw/cG8vwPramn+DygYAtERKAC0AQqSAf/////W3N7+6OvsAvn39wDb3uAAGxUT/x328gHwvLdJAfTJxdYGDA0p+QAA+gQEBAQHAwP8/OLgBvnFveMMfYogAfXPzDT//f25/uzqEv3t6wD73doA/NfMAPvhvEwNBgC1Ael3agD8tZYfAR0ndwD68SgABAviARUkkf7Quc8BEQADEjV5S2Mn+lgAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/Preloader/Preloader.js




const Preloader = ({ loading  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            opacity: loading ? 1 : 0,
            zIndex: loading ? 9999 : -1
        },
        className: "preloader",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
            className: "preloader__image",
            width: 60,
            src: loader.src,
            alt: ""
        })
    });
};
/* harmony default export */ const Preloader_Preloader = (Preloader);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/MobileMenu/SubNavItem.js



const SubNavItem = ({ subItem ={}  })=>{
    const { 0: expand , 1: setExpand  } = (0,external_react_.useState)(false);
    const handleExpand = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setExpand((preExpand)=>!preExpand
        );
    };
    const { href , subItems , name  } = subItem;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: href,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: expand && (subItems === null || subItems === void 0 ? void 0 : subItems.length) ? " expanded" : "",
                    children: [
                        name,
                        (subItems === null || subItems === void 0 ? void 0 : subItems.length) && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: handleExpand,
                            "aria-label": "dropdown toggler",
                            className: expand ? "expanded" : "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa fa-angle-down"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                style: {
                    display: expand ? "block" : "none"
                },
                children: subItems === null || subItems === void 0 ? void 0 : subItems.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: item.href,
                            children: item.name
                        })
                    }, item.id)
                )
            })
        ]
    });
};
/* harmony default export */ const MobileMenu_SubNavItem = (SubNavItem);

;// CONCATENATED MODULE: ./src/components/MobileMenu/NavItem.js





const NavItem_NavItem = ({ item ={}  })=>{
    const { pathname  } = (0,router_.useRouter)();
    const { 0: expand , 1: setExpand  } = (0,external_react_.useState)(false);
    const handleExpand = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setExpand((preExpand)=>!preExpand
        );
    };
    const { name , href , subNavItems  } = item;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: `dropdown${pathname === href ? " current" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: href,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: expand ? " expanded" : "",
                    children: [
                        name,
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: handleExpand,
                            "aria-label": "dropdown toggler",
                            className: expand ? "expanded" : "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa fa-angle-down"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                style: {
                    display: expand ? "block" : "none"
                },
                children: subNavItems.map((subItem)=>/*#__PURE__*/ jsx_runtime_.jsx(MobileMenu_SubNavItem, {
                        subItem: subItem
                    }, subItem.id)
                )
            })
        ]
    });
};
/* harmony default export */ const MobileMenu_NavItem = (NavItem_NavItem);

;// CONCATENATED MODULE: ./src/components/MobileMenu/MobileMenu.js







const { social: MobileMenu_social , logo: MobileMenu_logo , navItems: MobileMenu_navItems  } = data_headerData;
const MobileMenu = ()=>{
    const { toggleMenu , menuStatus  } = (0,context/* useRootContext */.E)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `mobile-nav__wrapper  animated fadeInLeft${menuStatus ? " expanded" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>toggleMenu()
                ,
                className: "mobile-nav__overlay mobile-nav__toggler"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mobile-nav__content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        onClick: ()=>toggleMenu()
                        ,
                        className: "mobile-nav__close mobile-nav__toggler",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa fa-times"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "logo-box",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                "aria-label": "logo image",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                    src: MobileMenu_logo.src,
                                    width: 155,
                                    alt: ""
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mobile-nav__container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "main-menu__list",
                            children: MobileMenu_navItems.map(({ id , ...item })=>/*#__PURE__*/ jsx_runtime_.jsx(MobileMenu_NavItem, {
                                    item: item
                                }, id)
                            )
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "mobile-nav__contact list-unstyled",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-envelope"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:needhelp@packageName__.com",
                                        children: "needhelp@tevily.com"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-phone-alt"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "tel:666-888-0000",
                                        children: "666 888 0000"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mobile-nav__top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mobile-nav__social",
                            children: MobileMenu_social.map(({ icon , link  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: link,
                                    className: `fab ${icon}`
                                }, index)
                            )
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const MobileMenu_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./src/components/Search/Search.js



const Search = ()=>{
    const { openSearch , toggleSearch  } = (0,context/* useRootContext */.E)();
    const handleSearch = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get("search"));
        toggleSearch();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `search-popup${openSearch ? " active" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: toggleSearch,
                className: "search-popup__overlay search-toggler"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "search-popup__content",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: handleSearch,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "search",
                            className: "sr-only",
                            children: "search here"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            id: "search",
                            name: "search",
                            placeholder: "Search Here..."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            "aria-label": "search submit",
                            className: "thm-btn",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "icon-magnifying-glass"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Search_Search = (Search);

// EXTERNAL MODULE: ./src/assets/images/resources/footer-logo.png
var footer_logo = __webpack_require__(3289);
;// CONCATENATED MODULE: ./src/data/footerData.js

const footerData_social = [
    {
        icon: "fa-twitter",
        link: ""
    },
    {
        icon: "fa-facebook-square",
        link: ""
    },
    {
        icon: "fa-pinterest-p",
        link: ""
    },
    {
        icon: "fa-instagram",
        link: ""
    }, 
];
const footerData = {
    logo: footer_logo["default"],
    social: footerData_social,
    year: new Date().getFullYear(),
    author: "Tevily",
    about: "Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.",
    icons: [
        {
            id: 1,
            icon: "fas fa-phone-square-alt",
            content: "+ 92 666 999 0000",
            subHref: "tel"
        },
        {
            id: 2,
            icon: "fas fa-envelope",
            content: "needhelp@company.com",
            subHref: "mailto"
        },
        {
            id: 3,
            icon: "fas fa-map-marker-alt",
            content: "666 road, broklyn street new york"
        }, 
    ],
    companies: [
        {
            id: 1,
            link: "/about",
            title: "About Us"
        },
        {
            id: 2,
            link: "#",
            title: "Community Blog"
        },
        {
            id: 3,
            link: "#",
            title: "Rewards"
        },
        {
            id: 4,
            link: "#",
            title: "Work with Us"
        },
        {
            id: 5,
            link: "#",
            title: "Meet the Team"
        }, 
    ],
    explore: [
        {
            id: 1,
            link: "#",
            title: "Account"
        },
        {
            id: 2,
            link: "#",
            title: "Legal"
        },
        {
            id: 3,
            link: "#",
            title: "Contact"
        },
        {
            id: 4,
            link: "#",
            title: "Affilitate Program"
        },
        {
            id: 5,
            link: "#",
            title: "Privacy Policy"
        }, 
    ]
};
/* harmony default export */ const data_footerData = (footerData);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9931);
;// CONCATENATED MODULE: ./src/components/SiteFooter/SiteFooter.js







const { logo: SiteFooter_logo , icons: SiteFooter_icons , companies , explore , social: SiteFooter_social , year , author , about  } = data_footerData;
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const SiteFooter = ()=>{
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get("email"));
    };
    (0,external_react_.useEffect)(()=>{
        const openTheModalAppear = document.querySelector(".openTheModalAppear");
        const openTheModalAppearModal = document.querySelector(".openTheModalAppearModal");
        const openTheModalAppearModalClosed = document.querySelector(".openTheModalAppearModalClosed");
        openTheModalAppear.addEventListener("click", function() {
            openTheModalAppearModal.classList.add("yes-modalShow");
        });
        openTheModalAppearModalClosed.addEventListener("click", function() {
            openTheModalAppearModal.classList.remove("yes-modalShow");
        });
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "site-footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "site-footer__top",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "site-footer__top-inner",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    xl: 4,
                                    lg: 6,
                                    md: 6,
                                    className: "animated fadeInUp",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-widget__column footer-widget__about",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "footer-widget__about-logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                                            src: SiteFooter_logo.src,
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "footer-widget__about-text",
                                                children: about
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "footer-widget__about-contact list-unstyled",
                                                children: SiteFooter_icons.map(({ id , icon , content , subHref  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: icon
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text",
                                                                children: subHref ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: `${subHref}:${content}`,
                                                                    children: content
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: content
                                                                })
                                                            })
                                                        ]
                                                    }, id)
                                                )
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    xl: 2,
                                    lg: 6,
                                    md: 6,
                                    className: "animated fadeInUp",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-widget__column footer-widget__company clearfix",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "footer-widget__title",
                                                children: "Top Destinations"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "footer-widget__company-list list-unstyled topDestinations",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Ngorongoro Conservation Area"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Serengeti National Park"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Zanzibar"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Kilimanjaro"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Lake Manyara"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Arusha National Park"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "Tarangire National Park"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    xl: 2,
                                    lg: 6,
                                    md: 6,
                                    className: "animated fadeInUp",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-widget__column footer-widget__explore",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "footer-widget__title",
                                                children: "Top Trips"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-unstyled footer-widget__explore-list topTrips",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "5 Day Safari"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "12 Day Kilimanjaro Trecking"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "7 Day Killimanjaro Trecking + Zanzibar"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: "5 Day Safari + 5 day Zanzibar"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    xl: 4,
                                    lg: 6,
                                    md: 6,
                                    className: "animated fadeInUp",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-widget__column footer-widget__newsletter",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "footer-widget__title",
                                                children: "Newsletter"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "socialNewsLetter",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-youtube"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-google"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-facebook"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-pinterest"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "newsletter_msg",
                                                children: "Make email address input field thinner and move down a bit. Make subscribe button smaller also and move down."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                className: "footer-widget__newsletter-form mc-form",
                                                onSubmit: handleSubmit,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "footer-widget__newsletter-input-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            placeholder: "Email address",
                                                            name: "email",
                                                            required: true
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "submit",
                                                            className: "footer-widget__newsletter-btn",
                                                            children: "Subscribe"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mc-form__response text-center"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "footer-widget__newsletter-bottom",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "footer-widget__newsletter-bottom-icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-check"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "footer-widget__newsletter-bottom-text",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "I agree to all terms and policies"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "site-footer__bottom",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "site-footer__bottom-inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "site-footer__bottom-left",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-widget__social",
                                            children: SiteFooter_social.map(({ icon , link  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: link,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: `fab ${icon}`
                                                    })
                                                }, index)
                                            )
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "site-footer__bottom-right",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "\xa9 2023 Safari Expert"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "site-footer__bottom-left-arrow",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "scroll-to-target scroll-to-top",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "icon-right-arrow"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal fade openTheModalAppearModal",
                id: "exampleModal",
                tabIndex: "-1",
                role: "dialog",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "modal-dialog",
                    role: "document",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "modal-content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "close openTheModalAppearModalClosed",
                                "data-dismiss": "modal",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "aria-hidden": "true",
                                    children: "\xd7"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        children: "Type of trip"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            children: "Safari"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        children: "Duration of your stay"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            children: "...."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        children: "Budget per person (excluding international flights)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            children: "...."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            "Estimated arrival date",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "date"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            "Country",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            children: "United Kingdom"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            "Number of Adults",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "number",
                                        value: "2"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            "Adults age 1",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "number"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two right",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            "Adults age 2",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "number"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            "Number of Children",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "number",
                                        value: "2"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            "Childs age 1",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "number"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two right",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            "Childs age 2",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "number"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            "Your first name",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            "Your last name",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            "Email address",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "two",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            "Phone number",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        children: "Announcements"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                        placeholder: "Tell us more about your wishes regarding budget and accommodation or if you have any other request."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "checkbox",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "checkbox"
                                    }),
                                    " By checking this, I accept that I will receive a proposal for my travel request, and that I can receive other news updates regarding my holidays."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "info",
                                children: [
                                    "Your data will be processed according to our ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Privacy Policy"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "btn btn-primary",
                                children: "Submit"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const SiteFooter_SiteFooter = (SiteFooter);

;// CONCATENATED MODULE: ./src/components/Layout/Layout.js









const Layout = ({ children , pageTitle  })=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const { menuStatus  } = (0,context/* useRootContext */.E)();
    (0,external_react_.useEffect)(()=>{
        const timeoutId = setTimeout(()=>{
            setLoading(false);
        }, 500);
        return ()=>clearTimeout(timeoutId)
        ;
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            pageTitle,
                            " || Tevily || Tevily NextJS Template For Tour"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Preloader_Preloader, {
                loading: loading
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                style: {
                    opacity: loading ? 0 : 1
                },
                className: "page-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {
                        pageTitle: pageTitle
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(SiteFooter_SiteFooter, {})
                ]
            }),
            menuStatus && /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu_MobileMenu, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Search_Search, {})
        ]
    });
};
/* harmony default export */ const Layout_Layout = (Layout);


/***/ }),

/***/ 2280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useRootContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useRootContext = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);


/***/ })

};
;