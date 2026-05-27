! function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "355ef7a9-e310-4204-9c16-eb4578fd944c", e._sentryDebugIdIdentifier = "sentry-dbid-355ef7a9-e310-4204-9c16-eb4578fd944c")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [54528], {
        8366: e => {
            e.exports = {
                root: "Link_root__cNtak",
                "variant-none": "Link_variant-none__aXaOH",
                "variant-underline": "Link_variant-underline__z5z7W",
                "variant-dimmed": "Link_variant-dimmed__kvcr0",
                "variant-primary": "Link_variant-primary___PVxF",
                "variant-fade": "Link_variant-fade__U2YWc"
            }
        },
        8442: (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => a,
                h: () => i
            });
            let i = () => {
                    let {
                        activeElement: e
                    } = window.document;
                    return !!e && a(e)
                },
                a = e => {
                    if (null === e) return !0;
                    let t = e instanceof Element ? e : e instanceof Node ? e.parentElement : null;
                    if (t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement && !["checkbox", "radio", "button", "submit", "reset"].includes(t.type) && !t.disabled) return !0;
                    let r = t ? .closest("[contenteditable]");
                    return r instanceof HTMLElement && "false" !== r.getAttribute("contenteditable")
                }
        },
        18841: (e, t, r) => {
            "use strict";
            r.d(t, {
                G: () => d,
                I: () => c
            });
            var i = r(91702),
                a = r(49430),
                l = r(9954),
                n = r(23420),
                o = r(93355),
                s = r(56348);
            r(36062);
            let c = e => {
                    let t, {
                            size: r = 16,
                            width: c,
                            height: d,
                            viewBox: v = "0 0 16 16",
                            color: g = "labelMuted",
                            blurGradient: x = !1,
                            style: p,
                            noFill: _ = !1,
                            className: h,
                            sx: f,
                            includeColorVariables: m,
                            ...b
                        } = e,
                        w = "brand" === g || !!h ? .includes("color-override"),
                        y = l.xk(f, !w && u.recolor),
                        {
                            children: k
                        } = e,
                        A = a.Children.only(k),
                        S = A.props.children;
                    if ("string" == typeof r) try {
                        t = (0, o.d)(r)
                    } catch (e) {} else t = r;
                    let H = a.useId(),
                        B = "gradient-x" === g || "gradient-y" === g,
                        F = { ...b,
                            $color: B || "brand" === g || _ ? void 0 : g,
                            className: (0, n.A)(y ? .className, h, {
                                "color-override": "brand" === g
                            }),
                            style: { ...y ? .style,
                                ...p,
                                ...B && {
                                    overflow: "visible"
                                }
                            },
                            width: c ? ? t ? ? r,
                            height: d ? ? t ? ? r,
                            viewBox: v,
                            fill: B ? `url(#${H}-gradient)` : void 0,
                            role: "img",
                            focusable: "false",
                            "aria-hidden": "aria-hidden" in b ? b["aria-hidden"] : !("aria-label" in b) || void 0,
                            xmlns: "http://www.w3.org/2000/svg"
                        };
                    return a.isValidElement(A) ? B ? (0, i.jsx)(s.IconClient, { ...F,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("g", {
                                opacity: x ? "0.15" : "0",
                                filter: `url(#${H}-filter0)`,
                                style: {
                                    transition: "opacity 0.2s ease-in-out"
                                },
                                children: S
                            }), (0, i.jsx)("g", {
                                opacity: x ? "0.3" : "0",
                                filter: `url(#${H}-filter1)`,
                                style: {
                                    transition: "opacity 0.2s ease-in-out"
                                },
                                children: S
                            }), S, (0, i.jsxs)("defs", {
                                children: [(0, i.jsxs)("filter", {
                                    id: `${H}-filter0`,
                                    x: "-50%",
                                    y: "-50%",
                                    width: "200%",
                                    height: "200%",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [(0, i.jsx)("feFlood", {
                                        floodOpacity: "0",
                                        result: "BackgroundImageFix"
                                    }), (0, i.jsx)("feBlend", {
                                        mode: "normal",
                                        in: "SourceGraphic",
                                        in2: "BackgroundImageFix",
                                        result: "shape"
                                    }), (0, i.jsx)("feGaussianBlur", {
                                        stdDeviation: "4",
                                        result: "effect1_foregroundBlur_425_75660"
                                    })]
                                }), (0, i.jsxs)("filter", {
                                    id: `${H}-filter1`,
                                    x: "-50%",
                                    y: "-50%",
                                    width: "200%",
                                    height: "200%",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [(0, i.jsx)("feFlood", {
                                        floodOpacity: "0",
                                        result: "BackgroundImageFix"
                                    }), (0, i.jsx)("feBlend", {
                                        mode: "normal",
                                        in: "SourceGraphic",
                                        in2: "BackgroundImageFix",
                                        result: "shape"
                                    }), (0, i.jsx)("feGaussianBlur", {
                                        stdDeviation: "2",
                                        result: "effect1_foregroundBlur_425_75660"
                                    })]
                                }), (0, i.jsx)("linearGradient", {
                                    id: `${H}-gradient`,
                                    x1: "0",
                                    y1: "0",
                                    x2: "gradient-x" === g ? "1" : "0",
                                    y2: "gradient-y" === g ? "1" : "0",
                                    children: (0, i.jsx)(s.IconGradientStops, {})
                                })]
                            })]
                        })
                    }) : (0, i.jsx)(s.IconClient, { ...F,
                        children: S
                    }) : null
                },
                d = ({
                    includeColorVariables: e = !0
                }, t = "currentColor") => e ? `var(--icon-color, ${t})` : t,
                u = {
                    recolor: {
                        k1ekBW: "sx-1fwcy2r",
                        kIyJzY: "sx-pa2zml sx-1rs86hs sx-qw9c6x",
                        kDwRjp: "sx-12owwp2 sx-2z1d8y sx-1tad8l3 sx-djdcfr sx-5cnwxw",
                        $$css: !0
                    }
                }
        },
        22225: (e, t, r) => {
            "use strict";
            r.d(t, {
                u: () => a
            });
            var i = r(9954);

            function a(e, t, r) {
                let a = i.xk(e);
                if (!t && !r) return a;
                let l = a.className;
                if ("string" == typeof t) l = l ? l + " " + t : t;
                else if (t)
                    for (let e = 0; e < t.length; e++) {
                        let r = t[e];
                        r && (l = l ? l + " " + r : r)
                    }
                return { ...a,
                    className: l,
                    style: r ? a.style ? Object.assign({}, a.style, r) : r : a.style
                }
            }
        },
        26935: (e, t, r) => {
            "use strict";
            r.d(t, {
                _: () => l
            });
            var i = r(49430),
                a = r(46183);
            let l = (e, t, r, l) => {
                let o = (() => {
                        let e = (0, i.useContext)(a.y);
                        if (!e) throw Error("Trying to call useKeyboardEventListeners outside KeyboardEventListenersContext");
                        return e
                    })(),
                    s = i.useMemo(() => "function" == typeof e ? e : "string" == typeof e ? t => t.key === e : e ? () => !0 : () => !1, [e]),
                    c = i.useMemo(() => t ? [{
                        callback: e => {
                            n(e) && s(e) && t(e)
                        },
                        runWithInputElementFocus: l ? .runWithInputElementFocus || !1
                    }] : [], [t, s, l ? .runWithInputElementFocus]),
                    d = i.useMemo(() => r ? [{
                        callback: e => {
                            n(e) && s(e) && r(e)
                        },
                        runWithInputElementFocus: l ? .runWithInputElementFocus || !1
                    }] : [], [r, s, l ? .runWithInputElementFocus]);
                i.useEffect(() => o.addListeners("keydown", ...c), [c]), i.useEffect(() => o.addListeners("keyup", ...d), [d])
            };

            function n(e) {
                return "nativeEvent" in e ? e.nativeEvent instanceof KeyboardEvent : e instanceof KeyboardEvent
            }
        },
        28956: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                Link: () => h
            });
            var i = r(91702),
                a = r(49430),
                l = r(23420),
                n = r(1245),
                o = r.n(n),
                s = r(62491),
                c = r(95444),
                d = r(94141),
                u = r(19609),
                v = r(38657),
                g = r.n(v);
            let x = a.forwardRef((e, t) => (0, i.jsx)(u.Z, {
                asChild: !0,
                children: (0, i.jsx)("div", {
                    ref: t,
                    "aria-hidden": !0,
                    className: g().visuallyOffscreen,
                    children: e.children
                })
            }));
            var p = r(8366),
                _ = r.n(p);
            let h = a.forwardRef((e, t) => {
                let {
                    tab: r,
                    track: n,
                    href: u,
                    onClick: v,
                    variant: g,
                    className: p,
                    active: h,
                    dragImage: f,
                    ...m
                } = e, b = a.useRef(null), {
                    isDragging: w,
                    dragProps: y
                } = (0, c.t)(b);
                return (0, i.jsxs)(o(), {
                    ref: t,
                    ...m,
                    className: (0, l.A)(p, _().root, g && _()[`variant-${g}`]),
                    href: u,
                    target: r ? "_blank" : void 0,
                    rel: r ? "noopener noreferrer" : "noopener",
                    "aria-current": h ? "page" : void 0,
                    onClick: (0, s.m)(e.onClick, n ? e => {
                        d.j.track(n.event, n.properties), v ? .(e)
                    } : void 0),
                    ...f ? y : {},
                    children: [e.children, w && f && (0, i.jsx)(x, {
                        ref: b,
                        children: f
                    })]
                })
            })
        },
        32414: (e, t, r) => {
            "use strict";
            r.d(t, {
                $_: () => a,
                mb: () => l,
                ux: () => n
            });
            var i = r(48006);
            let a = {
                    mobile: "(max-width: 640px)",
                    tablet: "(max-width: 768px)",
                    laptop: "(max-width: 1024px)",
                    desktop: "(max-width: 1280px)",
                    wide: "(max-width: 1536px)",
                    all: "(min-width: 0px)"
                },
                l = {
                    mobile: "@media " + a.mobile,
                    tablet: "@media " + a.tablet,
                    laptop: "@media " + a.laptop,
                    desktop: "@media " + a.desktop,
                    wide: "@media " + a.wide,
                    all: "@media " + a.all
                },
                n = () => {
                    let e = (0, i.l)();
                    if (void 0 !== e.width) return e.width < 640 ? "mobile" : e.width < 768 ? "tablet" : e.width < 1024 ? "laptop" : e.width < 1280 ? "desktop" : "wide"
                }
        },
        38275: (e, t, r) => {
            "use strict";
            r.d(t, {
                N6: () => i,
                XB: () => a
            });
            class i extends Error {
                constructor(e) {
                    super(`Unreachable case: ${e}`)
                }
            }

            function a(e) {
                return new i(e)
            }
        },
        38657: e => {
            e.exports = {
                "smooth-scroll": "utils_smooth-scroll__5y7P_",
                truncate: "utils_truncate__Oqoey",
                truncateMultiline: "utils_truncateMultiline__u5R8W",
                hideScrollbars: "utils_hideScrollbars__TzPqp",
                gradientBorder: "utils_gradientBorder__9rE2_",
                gradientText: "utils_gradientText__DM4qD",
                inert: "utils_inert__sliHw",
                moreHitArea: "utils_moreHitArea__ppEW8",
                visuallyOffscreen: "utils_visuallyOffscreen__HZ4R3",
                visuallyHidden: "utils_visuallyHidden__DJ_eB",
                contents: "utils_contents__LBeQD",
                noSelect: "utils_noSelect__2Z_cP",
                relative: "utils_relative__t1wXD",
                flex: "utils_flex__gabkl",
                slashedZero: "utils_slashedZero__RsR0l",
                bottomGradientBorder: "utils_bottomGradientBorder__OEIzU",
                inset: "utils_inset__Xhl3T",
                insetLarge: "utils_insetLarge__6UCke",
                insetSmall: "utils_insetSmall__z5AWU"
            }
        },
        46183: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => o,
                y: () => n
            });
            var i = r(49430),
                a = r(18426),
                l = r(8442);
            let n = i.createContext(null);
            class o {
                addListeners(e, ...t) {
                    for (let r of t) this.listenersForEventType(e).unshift(r);
                    return () => {
                        for (let r of t) {
                            let t = this.listenersForEventType(e).indexOf(r);
                            this.listenersForEventType(e).splice(t, 1)
                        }
                    }
                }
                attachGlobalEventListeners() {
                    window.addEventListener("keydown", this.handleEvent), window.addEventListener("keyup", this.handleEvent)
                }
                removeGlobalEventListeners() {
                    window.removeEventListener("keydown", this.handleEvent), window.removeEventListener("keyup", this.handleEvent)
                }
                listenersForEventType(e) {
                    return "keydown" === e ? this.keydownListeners : "keyup" === e ? this.keyupListeners : []
                }
                constructor() {
                    this.handleEvent = e => {
                        let t = this.listenersForEventType(e.type),
                            r = e.target && (0, l.C)(e.target);
                        (0, a.h5)(() => {
                            for (let i of t) {
                                if (!0 === e.defaultPrevented || e.target instanceof HTMLElement && e.target.hasAttribute("data-prevent-global-listener")) break;
                                (!r || i.runWithInputElementFocus) && i.callback(e)
                            }
                        })
                    }, this.keydownListeners = [], this.keyupListeners = []
                }
            }
        },
        48006: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => a
            });
            var i = r(49430);
            let a = () => {
                let [e, t] = i.useState({
                    width: void 0,
                    height: void 0
                });
                return i.useEffect(() => {
                    function e() {
                        t({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    }
                    return e(), window.addEventListener("resize", e), window.addEventListener("orientationchange", e), () => {
                        window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e)
                    }
                }, []), e
            }
        },
        56348: (e, t, r) => {
            "use strict";
            r.d(t, {
                IconClient: () => o,
                IconGradientStops: () => s
            });
            var i = r(91702),
                a = r(22225),
                l = r(75503);
            r(33815);
            let n = {
                    kDwRjp: "sx-13wgh6h",
                    "--icon-color": "sx-31pjnn",
                    $$css: !0
                },
                o = e => {
                    let {
                        $color: t,
                        className: r,
                        fill: n,
                        style: o,
                        sx: s,
                        ...d
                    } = e, u = (0, l.DP)(), v = t && t in u.color ? u.color[t] : "brand" === t ? void 0 : t, g = t && !r ? .includes("color-override");
                    return (0, i.jsx)("svg", { ...d,
                        ...(0, a.u)([!t ? null : g ? c.colorAcceptingReplacement(v ? ? "initial") : c.colorRejectingReplacement(v ? ? "initial"), s], r, o),
                        fill: n ? ? v,
                        children: e.children
                    })
                },
                s = () => {
                    let e = (0, l.DP)();
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("stop", {
                            offset: "0%",
                            stopColor: e.color.labelTitle
                        }, "0"), (0, i.jsx)("stop", {
                            offset: "100%",
                            stopColor: e.color.labelMuted
                        }, "1")]
                    })
                },
                c = {
                    colorAcceptingReplacement: e => [n, {
                        "--icon-default-color": null != e ? "sx-m5nenu" : e,
                        $$css: !0
                    }, {
                        "--x---icon-default-color": null != e ? e : void 0
                    }],
                    colorRejectingReplacement: e => [{
                        kDwRjp: null != e ? "sx-19zyb68" : e,
                        "--icon-color": null != e ? "sx-1khkorv" : e,
                        "--icon-default-color": null != e ? "sx-m5nenu" : e,
                        $$css: !0
                    }, {
                        "--x-fill": null != e ? e : void 0,
                        "--x---icon-color": null != e ? e : void 0,
                        "--x---icon-default-color": null != e ? e : void 0
                    }]
                }
        },
        58915: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                Text: () => u
            });
            var i = r(77964),
                a = r(38275),
                l = r(82042),
                n = r(32414),
                o = r(82864);
            let s = e => {
                    switch (e) {
                        case "annotation":
                            return (0, i.AH)(["font-size:11px;line-height:14px;letter-spacing:0;"]);
                        case "tiny":
                            return (0, i.AH)(["font-size:var(--text-tiny-size);line-height:var(--text-tiny-line-height);letter-spacing:var(--text-tiny-letter-spacing);"]);
                        case "micro":
                            return (0, i.AH)(["font-size:var(--text-micro-size);line-height:var(--text-micro-line-height);letter-spacing:var(--text-micro-letter-spacing);"]);
                        case "mini":
                            return (0, i.AH)(["font-size:var(--text-mini-size);line-height:var(--text-mini-line-height);letter-spacing:var(--text-mini-letter-spacing);"]);
                        case "small":
                            return (0, i.AH)(["font-size:var(--text-small-size);line-height:var(--text-small-line-height);letter-spacing:var(--text-small-letter-spacing);"]);
                        case "regular":
                            return (0, i.AH)(["font-size:var(--text-regular-size);line-height:var(--text-regular-line-height);letter-spacing:var(--text-regular-letter-spacing);"]);
                        case "large":
                            return (0, i.AH)(["font-size:var(--text-large-size);line-height:var(--text-large-line-height);letter-spacing:var(--text-large-letter-spacing);"]);
                        case "title-1":
                            return (0, i.AH)(["font-size:var(--title-1-size);line-height:var(--title-1-line-height);letter-spacing:var(--title-1-letter-spacing);"]);
                        case "title-2":
                            return (0, i.AH)(["font-size:var(--title-2-size);line-height:var(--title-2-line-height);letter-spacing:var(--title-2-letter-spacing);"]);
                        case "title-3":
                            return (0, i.AH)(["font-size:var(--title-3-size);line-height:var(--title-3-line-height);letter-spacing:var(--title-3-letter-spacing);"]);
                        case "title-4":
                            return (0, i.AH)(["font-size:var(--title-4-size);line-height:var(--title-4-line-height);letter-spacing:var(--title-4-letter-spacing);"]);
                        case "title-5":
                            return (0, i.AH)(["font-size:var(--title-5-size);line-height:var(--title-5-line-height);letter-spacing:var(--title-5-letter-spacing);"]);
                        case "title-6":
                            return (0, i.AH)(["font-size:var(--title-6-size);line-height:var(--title-6-line-height);letter-spacing:var(--title-6-letter-spacing);"]);
                        case "title-7":
                            return (0, i.AH)(["font-size:var(--title-7-size);line-height:var(--title-7-line-height);letter-spacing:var(--title-7-letter-spacing);"]);
                        case "title-8":
                            return (0, i.AH)(["font-size:var(--title-8-size);line-height:var(--title-8-line-height);letter-spacing:var(--title-8-letter-spacing);"]);
                        case "title-9":
                            return (0, i.AH)(["font-size:var(--title-9-size);line-height:var(--title-9-line-height);letter-spacing:var(--title-9-letter-spacing);"]);
                        default:
                            throw new a.N6(e)
                    }
                },
                c = {
                    primary: "var(--color-text-primary)",
                    secondary: "var(--color-text-secondary)",
                    tertiary: "var(--color-text-tertiary)",
                    quaternary: "var(--color-text-quaternary)"
                },
                d = new Set(["kind", "color", "weight", "fontWeight", "fontSize", "lineHeight", "letterSpacing", "transform", "align", "truncate", "gradient", "tabularNums", "margin", "theme", "wrap", "select", "font"]),
                u = i.Ay.span.withConfig({
                    shouldForwardProp: e => !d.has(e)
                }).withConfig({
                    componentId: "sc-d5151d0-0"
                })(["", ""], e => (0, i.AH)(["", ";color:", ";margin:", ";", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " u&{text-decoration:underline;text-decoration-style:solid;text-decoration-thickness:1.5px;text-decoration-color:var(--color-text-quaternary);text-underline-offset:2.5px;}sup&{position:relative;vertical-align:initial;top:-0.5em;font-size:0.6em;}code&{font-family:var(--font-monospace);font-size:0.9em;background:none;padding:0;}label&{user-select:none;}"], () => "string" == typeof e.size ? s(e.size) : e.size ? (0, i.AH)(["", " ", " ", " ", " ", " ", ""], s(e.size.initial), e.size.wide && (0, i.AH)(["", "{", "}"], n.mb.wide, s(e.size.wide)), e.size.desktop && (0, i.AH)(["", "{", "}"], n.mb.desktop, s(e.size.desktop)), e.size.laptop && (0, i.AH)(["", "{", "}"], n.mb.laptop, s(e.size.laptop)), e.size.tablet && (0, i.AH)(["", "{", "}"], n.mb.tablet, s(e.size.tablet)), e.size.mobile && (0, i.AH)(["", "{", "}"], n.mb.mobile, s(e.size.mobile))) : void 0, e.color ? c[e.color] ? ? e.color : void 0, e.margin, "none" === e.wrap && (0, i.AH)(["white-space:nowrap;"]), "wrap" === e.wrap && (0, i.AH)(["white-space:normal;"]), "balance" === e.wrap && (0, i.AH)(["text-wrap:balance;"]), "pretty" === e.wrap && (0, i.AH)(["text-wrap:pretty;"]), "character" === e.wrap && (0, i.AH)(["overflow-wrap:anywhere;"]), "word" === e.wrap && (0, i.AH)(["overflow-wrap:break-word;"]), "justify" === e.align && (0, i.AH)(["hyphens:auto;"]), e.transform && (0, i.AH)(["text-transform:", ";"], e.transform), "none" === e.select && (0, i.AH)(["user-select:none;"]), e.tabularNums && (0, i.AH)(['font-variant-numeric:tabular-nums;font-feature-settings:var(--font-settings),"ss01";']), "mono" === e.font && (0, i.AH)(["font-family:var(--font-monospace);font-feature-settings:normal;font-variation-settings:normal;letter-spacing:normal;"]), "serif-display" === e.font && (0, i.AH)(["font-family:var(--font-serif-display);font-feature-settings:normal;font-variation-settings:normal;"]), e.truncate && ("boolean" == typeof e.truncate ? (0, l.xv)() : (0, l.Gf)(e.truncate)), e.gradient && (0, i.AH)(["background:", ";", ";padding-bottom:0.13em;&::selection,& *::selection{background:var(--color-selection-dim);}"], e.gradient, (0, l.wU)()), () => "string" == typeof e.align ? (0, i.AH)(["text-align:", ";"], e.align) : e.align ? (0, i.AH)(["text-align:", ";", " ", " ", " ", " ", ""], e.align.initial, e.align.wide && (0, i.AH)(["", "{text-align:", ";}"], n.mb.wide, e.align.wide), e.align.desktop && (0, i.AH)(["", "{text-align:", ";}"], n.mb.desktop, e.align.desktop), e.align.laptop && (0, i.AH)(["", "{text-align:", ";}"], n.mb.laptop, e.align.laptop), e.align.tablet && (0, i.AH)(["", "{text-align:", ";}"], n.mb.tablet, e.align.tablet), e.align.mobile && (0, i.AH)(["", "{text-align:", ";}"], n.mb.mobile, e.align.mobile)) : void 0, e.fontSize && (0, i.AH)(["font-size:", ";"], (0, o.c)(e.fontSize)), e.lineHeight && (0, i.AH)(["line-height:", ";"], e.lineHeight), e.letterSpacing && (0, i.AH)(["letter-spacing:", ";"], e.letterSpacing), e.weight && (0, i.AH)(["font-weight:", ";"], "light" === e.weight ? "var(--font-weight-light)" : "normal" === e.weight ? "var(--font-weight-normal)" : "medium" === e.weight ? "var(--font-weight-medium)" : "semibold" === e.weight ? "var(--font-weight-semibold)" : "bold" === e.weight ? "var(--font-weight-bold)" : "var(--font-weight-normal)"), e.fontWeight && (0, i.AH)(["font-weight:", ";"], e.fontWeight)))
        },
        63166: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ig: () => n,
                O9: () => i,
                Pq: () => a,
                TM: () => o,
                YG: () => s,
                nP: () => l,
                uz: () => c
            }), r(83841);
            let i = {
                    bgSub: "var(--sx-1m4y240)",
                    bgSubHover: "var(--sx-g52i5g)",
                    bgBase: "var(--sx-1ubxoo9)",
                    bgBaseHover: "var(--sx-1gxylln)",
                    bgShade: "var(--sx-1gm0lru)",
                    bgShadeHover: "var(--sx-1gcjx5j)",
                    bgSelected: "var(--sx-1gakdvt)",
                    bgSelectedHover: "var(--sx-1rsaf4u)",
                    bgFocus: "var(--sx-7jk47a)",
                    bgModalOverlay: "var(--sx-1qdowq0)",
                    bgBorder: "var(--sx-142jeir)",
                    bgBorderHover: "var(--sx-k68kma)",
                    bgBorderThin: "var(--sx-1o1lnwn)",
                    bgBorderFaint: "var(--sx-d29rh7)",
                    bgBorderFaintHover: "var(--sx-1uv3w6h)",
                    bgBorderFaintThin: "var(--sx-15wwovl)",
                    bgBorderSolid: "var(--sx-cx2ark)",
                    bgBorderSolidHover: "var(--sx-138kmyo)",
                    bgBorderSolidThin: "var(--sx-w1p5jj)",
                    bgBorderAlpha: "var(--sx-5igtf4)",
                    bgBorderAlphaHover: "var(--sx-1ospiv4)",
                    bgBorderAlphaThin: "var(--sx-1jmjcvw)",
                    bgBorderFaintAlpha: "var(--sx-1n1r1h9)",
                    bgBorderFaintAlphaHover: "var(--sx-irmyh9)",
                    bgBorderFaintAlphaThin: "var(--sx-1urpf9d)",
                    bgBorderSolidAlpha: "var(--sx-193njt9)",
                    bgBorderSolidAlphaHover: "var(--sx-1uztw8p)",
                    bgBorderSolidAlphaThin: "var(--sx-1ikf7kw)",
                    bgSelectedBorder: "var(--sx-pqiwo2)",
                    bgSelectedBorderHover: "var(--sx-35jz1e)",
                    labelTitle: "var(--sx-ys2i3t)",
                    labelBase: "var(--sx-3zwjav)",
                    labelMuted: "var(--sx-1dd5bcf)",
                    labelFaint: "var(--sx-1eapsa9)",
                    labelLink: "var(--sx-1xaoi8i)",
                    controlPrimary: "var(--sx-n8xqcl)",
                    controlPrimaryLabel: "var(--sx-ickszr)",
                    controlPrimaryHover: "var(--sx-1jffjrl)",
                    controlSecondary: "var(--sx-hfmm6c)",
                    controlSecondaryLabel: "var(--sx-10o0rs5)",
                    controlSecondaryHover: "var(--sx-13kjjc4)",
                    controlSecondarySelected: "var(--sx-1ccqs4f)",
                    controlTertiary: "var(--sx-1fphd1n)",
                    controlTertiaryLabel: "var(--sx-j1ai0m)",
                    controlTertiaryHover: "var(--sx-629164)",
                    controlTertiarySelected: "var(--sx-ljw4h1)",
                    tealBg: "var(--sx-1qlh175)",
                    tealBase: "var(--sx-1uoekal)",
                    tealBaseHover: "var(--sx-9o00jb)",
                    tealMid: "var(--sx-ot17o6)",
                    tealText: "var(--sx-1cxqmhc)",
                    tealForeground: "var(--sx-10845vo)",
                    tealTint: "var(--sx-1ps2i54)",
                    greenBg: "var(--sx-18uyzu6)",
                    greenBase: "var(--sx-wsz0k3)",
                    greenBaseHover: "var(--sx-jw5zf4)",
                    greenMid: "var(--sx-8gevfv)",
                    greenText: "var(--sx-ciqj87)",
                    greenForeground: "var(--sx-180qi0f)",
                    greenTint: "var(--sx-14ggo8w)",
                    yellowBg: "var(--sx-129bhjt)",
                    yellowBase: "var(--sx-1h56kua)",
                    yellowBaseHover: "var(--sx-91u3ar)",
                    yellowMid: "var(--sx-ugsh4)",
                    yellowText: "var(--sx-105wzx7)",
                    yellowForeground: "var(--sx-1k7nh0l)",
                    yellowTint: "var(--sx-msgncm)",
                    yellowHighlight: "var(--sx-sfnrch)",
                    orangeBg: "var(--sx-fwc8so)",
                    orangeBase: "var(--sx-11vg3qk)",
                    orangeBaseHover: "var(--sx-1hz3utq)",
                    orangeMid: "var(--sx-1ijrdvx)",
                    orangeText: "var(--sx-183dfpr)",
                    orangeForeground: "var(--sx-1vyp3gc)",
                    orangeTint: "var(--sx-ikq9iy)",
                    redBg: "var(--sx-34xdpc)",
                    redBase: "var(--sx-i20l48)",
                    redBaseHover: "var(--sx-17ckey5)",
                    redMid: "var(--sx-1q6smeb)",
                    redText: "var(--sx-1bu05id)",
                    redForeground: "var(--sx-tw6awd)",
                    redTint: "var(--sx-1dcvabv)",
                    blueBg: "var(--sx-13m9wh7)",
                    blueBase: "var(--sx-or1tl7)",
                    blueBaseHover: "var(--sx-1vqca58)",
                    blueMid: "var(--sx-1stx5uy)",
                    blueText: "var(--sx-5t1vcl)",
                    blueForeground: "var(--sx-6od1kq)",
                    blueTint: "var(--sx-1em7oyp)",
                    purpleBg: "var(--sx-bpgheo)",
                    purpleBase: "var(--sx-1yxqotz)",
                    purpleBaseHover: "var(--sx-kthb5v)",
                    purpleMid: "var(--sx-7ide1)",
                    purpleText: "var(--sx-19hxmp1)",
                    purpleForeground: "var(--sx-ws85c5)",
                    purpleTint: "var(--sx-1glqxor)",
                    controlLabel: "var(--sx-ay0skx)",
                    controlSelectLabel: "var(--sx-feitbp)",
                    controlSecondaryHighlight: "var(--sx-vatjr0)",
                    githubLogo: "var(--sx-1fh23cp)",
                    scrollBackground: "var(--sx-74qs5)",
                    focusColor: "var(--sx-ch85qk)",
                    shadowColor: "var(--sx-d1bcc1)",
                    sidebarLinkBg: "var(--sx-16hn3q3)",
                    sidebarLinkBgActive: "var(--sx-1edn6di)",
                    scrollbarBg: "var(--sx-1ltkoa)",
                    scrollbarBgHover: "var(--sx-v3o8qy)",
                    scrollbarBgActive: "var(--sx-1rzu7x2)",
                    chromeTabBg: "var(--sx-as9fd0)",
                    chromeTabBgHover: "var(--sx-6ayg1n)",
                    chromeTabBgActive: "var(--sx-cb0zzs)",
                    __varGroupHash__: "sx-1xr6qsj"
                },
                a = {
                    focus: "var(--sx-c3gk8m)",
                    color: "var(--sx-2icmlu)",
                    border: "var(--sx-axo4ug)",
                    low: "var(--sx-10lzhmx)",
                    medium: "var(--sx-1dhg814)",
                    high: "var(--sx-1k7v50d)",
                    inset: "var(--sx-umgfby)",
                    __varGroupHash__: "sx-1g0ld38"
                },
                l = {
                    inputPadding: "var(--sx-18pfyxa)",
                    inputPaddingBlock: "var(--sx-x8afrf)",
                    inputPaddingInline: "var(--sx-1uu732i)",
                    inputBackground: "var(--sx-1mc3c6y)",
                    inputBorder: "var(--sx-6zt3z6)",
                    inputBorderRadius: "var(--sx-ykavoc)",
                    inputFontSize: "var(--sx-11lpf43)",
                    __varGroupHash__: "sx-18yeszy"
                },
                n = {
                    thinPixel: "var(--sx-1ele6il)",
                    modalMargin: "var(--sx-138rywl)",
                    __varGroupHash__: "sx-id5b6m"
                },
                o = {
                    "--focus-ring-color": "var(--focus-ring-color)",
                    "--focus-ring-width": "var(--focus-ring-width)",
                    "--focus-ring-outline": "var(--focus-ring-outline)",
                    __varGroupHash__: "sx-10sn7k"
                },
                s = {
                    "--editor-block-spacing": "var(--editor-block-spacing)",
                    "--editor-block-spacing-large": "var(--editor-block-spacing-large)",
                    "--editor-block-spacing-small": "var(--editor-block-spacing-small)",
                    "--editor-block-radius": "var(--editor-block-radius)",
                    "--editor-block-menu-size": "var(--editor-block-menu-size)",
                    "--editor-block-menu-offset": "var(--editor-block-menu-offset)",
                    "--editor-last-invisible-paragraph-spacing": "var(--editor-last-invisible-paragraph-spacing)",
                    "--editor-line-height": "var(--editor-line-height)",
                    "--editor-letter-spacing": "var(--editor-letter-spacing)",
                    "--editor-list-inset": "var(--editor-list-inset)",
                    "--editor-bullet-disc-width": "var(--editor-bullet-disc-width)",
                    "--editor-bullet-disc-offset": "var(--editor-bullet-disc-offset)",
                    "--editor-todolist-checkbox-width": "var(--editor-todolist-checkbox-width)",
                    "--editor-font-size": "var(--editor-font-size)",
                    "--editor-text-color": "var(--editor-text-color)",
                    "--editor-safe-area": "var(--editor-safe-area)",
                    __varGroupHash__: "sx-16acs0i"
                },
                c = {
                    phone: 640,
                    tablet: 768,
                    laptop: 1024,
                    normal: 1025,
                    large: 1400,
                    xlarge: 1800
                }
        },
        68843: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                Flex: () => s
            });
            var i = r(91702),
                a = r(49430),
                l = r(23420),
                n = r(95521),
                o = r.n(n);
            let s = a.forwardRef((e, t) => {
                let {
                    gap: r,
                    grow: n,
                    shrink: s,
                    inline: c,
                    reverse: d,
                    center: u,
                    align: v,
                    justify: g,
                    auto: x,
                    wrap: p,
                    style: _,
                    className: h,
                    direction: f,
                    as: m = "div",
                    ...b
                } = e, w = Object.entries(f || {}).map(([e, t]) => [o()[`${e}-${t}`]]), y = a.useMemo(() => r ? "object" != typeof r ? {
                    gap: r
                } : Object.entries(r).reduce((e, [t, r]) => (e[`--gap-${t}`] = `${r}px`, e), {}) : {}, [r]);
                return (0, i.jsx)(m, { ...b,
                    ref: t,
                    className: (0, l.A)(h, ...w, o().root, "object" == typeof r && o().gap, v && o()[`align-${v}`], g && o()[`justify-${g}`], {
                        [o().inline]: c,
                        [o().wrap]: p,
                        [o().column]: "column" === f,
                        [o().reverse]: d,
                        [o().center]: u,
                        [o().auto]: x
                    }),
                    style: { ..._,
                        ...y,
                        flexShrink: s,
                        flexGrow: n
                    }
                })
            })
        },
        75503: (e, t, r) => {
            "use strict";
            let i;
            r.d(t, {
                NP: () => g,
                DP: () => x
            });
            var a = r(91702),
                l = r(49430),
                n = r(77964);
            let o = new Map,
                s = new Map,
                c = new Map;
            var d = r(63166),
                u = r(82042);
            class v {
                static extractVarName(e) {
                    if (!e) return;
                    let [t, r] = e.split(",");
                    return t.slice(4, r ? void 0 : -1)
                }
                static declareCssVar(e, t) {
                    return e && t ? e + ":" + t + ";" : ""
                }
                static buildVarNameMap(e) {
                    let t = {};
                    for (let r in e) {
                        if (r.startsWith("__")) continue;
                        let i = v.extractVarName(e[r]);
                        i && (t[r] = i)
                    }
                    return t
                }
            }

            function g(e) {
                let {
                    display: t = "contents",
                    theme: r,
                    rootConfig: d,
                    children: g
                } = e, x = null == l.useContext(_), A = `theme-provider-${r.hash}`;
                return l.useInsertionEffect(() => {
                    let e = x ? ":root" : `.${A}`;
                    ! function(e) {
                        if (o.get(e.id) !== e.rule)
                            if (void 0 === document.adoptedStyleSheets) {
                                let t = c.get(e.id);
                                t || ((t = document.createElement("style")).setAttribute("data-css-injection", e.id), c.set(e.id, t), document.head.appendChild(t)), t.textContent = e.rule, o.set(e.id, e.rule)
                            } else {
                                null == i && (i = new CSSStyleSheet, document.adoptedStyleSheets = [...document.adoptedStyleSheets, i]);
                                let t = s.get(e.id);
                                void 0 !== t ? (i.insertRule(e.rule, t + 1), i.deleteRule(t)) : s.set(e.id, i.insertRule(e.rule)), o.set(e.id, e.rule)
                            }
                    }({
                        rule: `${e}{${function(e,t,r){let i="",a=e.color;for(let e in a)i+=v.declareCssVar(h[e],a[e]);for(let t in e){let r=e[t];if("string"!=typeof r)continue;let a=p[t];i+=v.declareCssVar(a?f[a]:m[t],r)}return i+=k(w["--focus-ring-color"],h.focusColor),i+=k(y["--editor-text-color"],h.labelBase),t&&(i+=v.declareCssVar(b.thinPixel,(0,u.Yy)()),r&&(i+=v.declareCssVar(w["--focus-ring-color"],r.focusRingColor??e.color.focusColor),i+=v.declareCssVar(w["--focus-ring-width"],r.focusRingWidth))),i}(r,x,d)}}`,
                        id: x ? "theme-root" : `theme-${r.hash}`
                    })
                }, [x, d, r, A]), (0, a.jsx)(_.Provider, {
                    value: r,
                    children: (0, a.jsx)(n.NP, {
                        theme: r,
                        children: x ? g : (0, a.jsx)("div", {
                            className: A,
                            style: {
                                display: t
                            },
                            children: g
                        })
                    })
                })
            }

            function x() {
                let e = l.useContext(_);
                if (!e) throw Error("useTheme must be used within a Orbiter ThemeProvider");
                return e
            }
            let p = {
                    focusShadow: "focus",
                    shadowColor: "color",
                    shadowBorder: "border",
                    shadowLow: "low",
                    shadowMedium: "medium",
                    shadowHigh: "high",
                    shadowInset: "inset"
                },
                _ = l.createContext(void 0),
                h = v.buildVarNameMap(d.O9),
                f = v.buildVarNameMap(d.Pq),
                m = v.buildVarNameMap(d.nP),
                b = v.buildVarNameMap(d.Ig),
                w = v.buildVarNameMap(d.TM),
                y = v.buildVarNameMap(d.YG);

            function k(e, t) {
                return v.declareCssVar(e, t ? `var(${t})` : void 0)
            }
        },
        75894: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                Button: () => v
            });
            var i = r(91702),
                a = r(49430),
                l = r(23420),
                n = r(31136),
                o = r(26935),
                s = r(85601),
                c = r(28956),
                d = r(79942),
                u = r.n(d);
            let v = a.forwardRef((e, t) => {
                let {
                    variant: r,
                    size: d = "default",
                    shape: v,
                    className: g,
                    keyboardShortcut: x,
                    href: p,
                    children: _,
                    ...h
                } = e, [f, m] = a.useState(!1), b = a.useRef(null);
                (0, o._)(e => e.key === x && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey, () => {
                    let t = b.current;
                    t ? t.click() : "function" == typeof e.onClick && e.onClick(), m(!0)
                }, () => m(!1));
                let w = (0, l.A)(g, u().root, u()[`variant-${r}`], u()[`size-${d}`], u()[`shape-${v}`], {
                    [u().variant]: !!r,
                    [u().active]: f
                });
                if (void 0 !== p) return (0, i.jsx)(c.Link, { ...h,
                    href: p,
                    ref: (0, s.P)([t, b]),
                    className: w,
                    children: _
                });
                let {
                    asChild: y,
                    ...k
                } = h, A = y && a.isValidElement(_) ? _ : void 0, S = !A || "button" === A.type;
                return (0, i.jsx)(n.$, {
                    type: "button",
                    ...k,
                    render: A,
                    nativeButton: S,
                    ref: (0, s.P)([t, b]),
                    className: w,
                    children: A ? void 0 : _
                })
            })
        },
        79942: e => {
            e.exports = {
                root: "Button_root__Stmhv",
                variant: "Button_variant__1FJO9",
                active: "Button_active__rTwBh",
                "size-mini": "Button_size-mini__qsCkZ",
                "size-small": "Button_size-small__sjtMt",
                "size-medium": "Button_size-medium__Jjx5p",
                "size-default": "Button_size-default__6r2_r",
                "size-large": "Button_size-large__fvxeb",
                "variant-primary": "Button_variant-primary__K5Ty_",
                "variant-secondary": "Button_variant-secondary__Y2SNH",
                "variant-tertiary": "Button_variant-tertiary__xvF9W",
                "variant-invert": "Button_variant-invert__ECHZN",
                "variant-ghost": "Button_variant-ghost__a06I_",
                "variant-glass": "Button_variant-glass__QDeFs",
                "variant-inline": "Button_variant-inline__2MkHV",
                "variant-border": "Button_variant-border__9pfLp",
                "shape-circle": "Button_shape-circle__yYFxC",
                "shape-square": "Button_shape-square__H9vjp"
            }
        },
        80297: e => {
            e.exports = {
                toast: "Toast_toast__K4dn_",
                iconWrapper: "Toast_iconWrapper__aioTP",
                toastWrapper: "Toast_toastWrapper__R1r6F"
            }
        },
        82042: (e, t, r) => {
            "use strict";
            r.d(t, {
                Gf: () => l,
                S: () => c,
                Yy: () => o,
                vi: () => s,
                wU: () => n,
                xv: () => a
            });
            var i = r(77964);
            let a = () => `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,
                l = e => `
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${e};
  overflow: hidden;
  overflow-wrap: anywhere;
`,
                n = () => `
   /* Ensure the gradient repeats across line breaks */
   box-decoration-break: clone;
   -webkit-box-decoration-break: clone;
   background-clip: text;
   -webkit-background-clip: text;
   text-fill-color: transparent;
   -webkit-text-fill-color: transparent;
   color: unset;
 `;

            function o() {
                return c ? "0.5px" : "1px"
            }
            let s = (e, t, r) => `
  position: relative;

  &::${r?.applyOnAfter?"after":"before"} {
    content: "";
    pointer-events: none;
    user-select: none;
    position: absolute;
    inset: ${r?.inset??0}px;
    border-radius: inherit;
    padding: ${e}px;
    background: ${t};

    mask: linear-gradient(black, black) content-box, linear-gradient(black, black);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    opacity: ${r?.opacity??1};
    z-index: ${r?.zIndex??0};
  }
`,
                c = window.matchMedia ? .("only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi)").matches || !1;
            (0, i.AH)(["outline-offset:calc(-1 * var(--focus-ring-width));"]), (0, i.AH)(["outline:var(--focus-ring-outline);"])
        },
        82864: (e, t, r) => {
            "use strict";
            r.d(t, {
                c: () => i
            });
            let i = e => {
                if (e) return "number" == typeof e ? `${e}px` : e
            }
        },
        85601: (e, t, r) => {
            "use strict";

            function i(e) {
                return t => {
                    e.forEach(e => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t)
                    })
                }
            }
            r.d(t, {
                P: () => i
            })
        },
        91379: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ck: () => u,
                l$: () => v,
                oR: () => g
            });
            var i, a = r(91702),
                l = r(53961),
                n = r(13445),
                o = r(80297),
                s = r.n(o),
                c = r(58915);

            function d({
                title: e,
                icon: t
            }) {
                return (0, a.jsxs)("div", {
                    className: s().toast,
                    children: [t && (0, a.jsx)("span", {
                        className: s().iconWrapper,
                        children: t
                    }), (0, a.jsx)(c.Text, {
                        size: "small",
                        weight: "medium",
                        style: {
                            fontFamily: "var(--font-regular)"
                        },
                        children: e
                    })]
                })
            }
            var u = ((i = {})[i.Info = 0] = "Info", i[i.Success = 1] = "Success", i[i.Error = 2] = "Error", i);
            let v = () => {
                let {
                    resolvedTheme: e
                } = (0, n.D)();
                return (0, a.jsx)(l.l$, {
                    expand: !0,
                    toastOptions: {
                        style: {
                            right: 8,
                            margin: 0
                        }
                    },
                    visibleToasts: 3,
                    duration: 5e3,
                    className: s().toastWrapper,
                    mobileOffset: 16,
                    theme: e || "dark"
                })
            };

            function g({
                type: e = 0,
                title: t = "",
                icon: r = null
            }) {
                l.oR.custom(() => (0, a.jsx)(d, {
                    type: e,
                    title: t,
                    icon: r
                }))
            }
        },
        93355: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => l,
                d: () => a
            });
            var i = r(38275);

            function a(e) {
                switch (e) {
                    case "micro":
                        return 14;
                    case "tiny":
                        return 16;
                    case "small":
                        return 18;
                    case "regular":
                        return 24;
                    case "large":
                        return 32;
                    case "xlarge":
                        return 44;
                    case "huge":
                        return 54;
                    default:
                        throw (0, i.XB)(e)
                }
            }

            function l(e, t) {
                let r = "normal";
                return (t ? .length ? ? 0) > 2 ? r = "threeInitials" : "WW" === t && (r = "ww"), ({
                    micro: {
                        normal: 8,
                        ww: 5,
                        threeInitials: 4
                    },
                    tiny: {
                        normal: 9,
                        ww: 6,
                        threeInitials: 5
                    },
                    small: {
                        normal: 9,
                        ww: 7,
                        threeInitials: 5
                    },
                    regular: {
                        normal: 11,
                        ww: 9,
                        threeInitials: 7
                    },
                    large: {
                        normal: 14,
                        ww: 12,
                        threeInitials: 9
                    },
                    xlarge: {
                        normal: 18,
                        ww: 15,
                        threeInitials: 12
                    },
                    huge: {
                        normal: 22,
                        ww: 18,
                        threeInitials: 16
                    }
                })[e][r]
            }
        },
        94141: (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => n,
                X: () => l
            });
            var i, a = r(66673),
                l = ((i = {}).SIGN_UP_CLICKED = "Sign Up Button Clicked", i.FEATURES_CTA_CLICKED = "Feature Group CTA Clicked", i.PRICING_CYCLE_TOGGLED = "Pricing Billing Cycle Toggled", i.PRICING_CONTACT_CLICKED = "Pricing Contact Us Link Clicked", i.PRICING_PLAN_SELECTED = "Pricing Plan Selected", i.DESKTOP_APP_DOWNLOADED = "Desktop App Downloaded", i.ALL_HANDS_CTA = "LYYSNY All Hands Slide Clicked", i.ALL_HANDS_POWERPOINT = "LYYSNY All Hands PowerPoint Downloaded", i.ALL_HANDS_KEYNOTE = "LYYSNY All Hands Keynote Downloaded", i.ALL_HANDS_GOOGLE = "LYYSNY All Hands Google Slides Downloaded", i.POSTERS_CTA = "LYYSNY Posters Clicked", i.POSTERS_DOWNLOAD = "LYYSNY Poster Downloaded", i.PITCH_DECK_CTA = "LYYSNY Pitch Deck Clicked", i.PITCH_DECK_DOWNLOAD = "LYYSNY Pitch Deck Downloaded", i.LYYSNY_TALK_TO_SALES = "LYYSNY Talk to Sales Clicked", i.LYYSNY_SIGN_UP = "LYYSNY Sign Up Clicked", i.LYYSNY_IMPORTERS = "LYYSNY Importers Clicked", i.LYYSNY_JIRA_SYNC = "LYYSNY Jira Sync Clicked", i.LYYSNY_GITHUB_SYNC = "LYYSNY GitHub Sync Clicked", i.FIGMA_PLUGIN_DEMO = "Figma Plugin Demo Clicked", i.FIGMA_PLUGIN_INSTALL = "Figma Plugin Install Clicked", i.ASKS_PLUS_TRIAL_CLICKED = "Asks Plus Trial Clicked", i.ASKS_BOOK_DEMO_CLICKED = "Asks Book Demo Clicked", i.QUALITY_VIDEO_PLAY = "Quality Video Play Clicked", i.QUALITY_VIDEO_COMPLETED = "Quality Video Watched Completely", i.QUALITY_VIDEO_HEARTBEAT = "Quality Video Playing Heartbeat", i.AGENTS_WAITLIST = "Agents Waitlist", i.REVIEWS_WAITLIST = "Reviews Waitlist", i.CONTACT_SALES = "Contact Sales", i);
            class n {
                static track(e, t) {
                    try {
                        a.Ay.capture(e, t ? n.normalizeProperties(t) : {})
                    } catch (e) {}
                }
                static normalizeProperties(e) {
                    let t = {};
                    for (let [r, i] of Object.entries(e)) t[r.replace(/([A-Z])/g, e => `_${e.toLowerCase()}`).replace(/^_/, "")] = "boolean" == typeof i ? i.toString() : i;
                    return t
                }
            }
        },
        95444: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => l
            });
            var i = r(49430),
                a = r(59875);
            let l = e => {
                let [t, r] = i.useState(!1);
                return {
                    isDragging: t,
                    dragProps: {
                        draggable: !0,
                        onDragEnd: () => {
                            r(!1)
                        },
                        onDragStart: t => {
                            a.flushSync(() => {
                                r(!0)
                            }), e.current && (t.dataTransfer.dropEffect = "link", t.dataTransfer ? .setDragImage(e.current, 0, 0))
                        }
                    }
                }
            }
        },
        95521: e => {
            e.exports = {
                root: "Flex_root__DOQCW",
                gap: "Flex_gap__UeNZy",
                inline: "Flex_inline__8Gx2p",
                auto: "Flex_auto__ezENw",
                reverse: "Flex_reverse__7ZfsO",
                column: "Flex_column__eg2kV",
                "align-flex-start": "Flex_align-flex-start__QBSOx",
                "align-start": "Flex_align-start__S1hLo",
                "align-flex-end": "Flex_align-flex-end__giGRQ",
                "align-end": "Flex_align-end__QJ1Yx",
                "align-center": "Flex_align-center__oXK9F",
                "align-baseline": "Flex_align-baseline__VVH_q",
                "align-stretch": "Flex_align-stretch__dB9Rh",
                "justify-flex-start": "Flex_justify-flex-start__Mi8ih",
                "justify-start": "Flex_justify-start__sNYF8",
                "justify-flex-end": "Flex_justify-flex-end__FGhIz",
                "justify-end": "Flex_justify-end__cTGlW",
                "justify-center": "Flex_justify-center__GW4P8",
                "justify-space-between": "Flex_justify-space-between__Txsv7",
                "justify-space-around": "Flex_justify-space-around__PplOf",
                "justify-space-evenly": "Flex_justify-space-evenly__IqwPg",
                "justify-stretch": "Flex_justify-stretch__96R5f",
                wrap: "Flex_wrap__E4ecg",
                center: "Flex_center__qqy7h",
                "initial-row": "Flex_initial-row__dm25J",
                "initial-column": "Flex_initial-column__qFcHX",
                "initial-row-reverse": "Flex_initial-row-reverse__Jp430",
                "initial-column-reverse": "Flex_initial-column-reverse__OHbXs",
                "mobile-row": "Flex_mobile-row__f3htZ",
                "mobile-column": "Flex_mobile-column__y7__s",
                "mobile-row-reverse": "Flex_mobile-row-reverse__FNvpn",
                "mobile-column-reverse": "Flex_mobile-column-reverse__jqX6H",
                "tablet-row": "Flex_tablet-row__GCooQ",
                "tablet-column": "Flex_tablet-column__2T71o",
                "tablet-row-reverse": "Flex_tablet-row-reverse__dM4Ed",
                "tablet-column-reverse": "Flex_tablet-column-reverse__hG5Ro",
                "laptop-row": "Flex_laptop-row__hISdT",
                "laptop-column": "Flex_laptop-column___WNPC",
                "laptop-row-reverse": "Flex_laptop-row-reverse__iGxEk",
                "laptop-column-reverse": "Flex_laptop-column-reverse__izsYc",
                "desktop-row": "Flex_desktop-row__zhbjh",
                "desktop-column": "Flex_desktop-column__9Wr5u",
                "desktop-row-reverse": "Flex_desktop-row-reverse__rOcXh",
                "desktop-column-reverse": "Flex_desktop-column-reverse__j_iPb",
                "wide-row": "Flex_wide-row__8EAEZ",
                "wide-column": "Flex_wide-column__xuAr7",
                "wide-row-reverse": "Flex_wide-row-reverse__BRArh",
                "wide-column-reverse": "Flex_wide-column-reverse__SlISg"
            }
        }
    }
]);