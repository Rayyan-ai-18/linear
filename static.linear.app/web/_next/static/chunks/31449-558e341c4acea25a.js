! function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c265a5aa-1d4f-473f-9a11-a3b0366696f4", e._sentryDebugIdIdentifier = "sentry-dbid-c265a5aa-1d4f-473f-9a11-a3b0366696f4")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [31449], {
        1578: (e, t, l) => {
            "use strict";
            l.d(t, {
                H: () => u
            });
            var r = l(91702);
            l(49430);
            var a = l(2898),
                s = l.n(a),
                i = l(23420),
                n = l(28329),
                o = l(10860),
                c = l(37286),
                d = l.n(c);
            let u = e => {
                let t = s()(e.url);
                return t ? (0, r.jsxs)("div", {
                    className: (0, i.A)(e.className, d().root),
                    style: { ...e.style,
                        "--poster": e.poster && `url(${e.poster})`
                    },
                    "data-poster": !!e.poster,
                    children: [(0, r.jsx)(o.LiteYouTubeEmbed, {
                        id: t,
                        title: e.title
                    }), (0, r.jsx)("div", {
                        className: d().overlay,
                        children: e.overlay ? ? (0, r.jsx)("button", {
                            className: d().defaultOverlay
                        })
                    })]
                }) : (n.V.warning(`Failed to parse YouTube video ID from URL: ${e.url}`), null)
            }
        },
        5348: (e, t, l) => {
            "use strict";
            l.d(t, {
                g: () => i
            });
            var r = l(43911),
                a = l.n(r),
                s = l(40084);
            class i {
                static urlForImage(e, t, l) {
                    let {
                        width: r,
                        dataset: s
                    } = l || {}, o = a()(n(e)).image(t).quality(95).dpr(2).auto("format");
                    return r && (o = o.width(r)), s && (o = o.dataset(s)), i.rewriteUrl(o.url())
                }
                static getImageDimensions(e) {
                    let t = new URL(e);
                    return t.hostname = "cdn.sanity.io", (0, s.vX)({
                        url: t.toString()
                    })
                }
                static urlForVideo(e, t, l) {
                    let r = n(e).config(),
                        a = (0, s.HM)(t, { ...r,
                            dataset: l ? .dataset ? ? r.dataset
                        }).url;
                    return i.rewriteUrl(a)
                }
                static urlForFile(e, t, l) {
                    let r = n(e).config(),
                        a = (0, s.HM)(t, { ...r,
                            dataset: l ? .dataset ? ? r.dataset
                        }).url;
                    return l ? .download ? `${a}?dl=${encodeURIComponent(l.download)}` : i.rewriteUrl(a)
                }
                static rewriteUrl(e) {
                    let t = new URL(e);
                    return t.hostname = "webassets.linear.app", t.toString()
                }
            }

            function n(e) {
                return e.withConfig({
                    apiHost: "https://cdn.sanity.io"
                })
            }
        },
        11227: e => {
            e.exports = {
                primary: "color_primary__jHBCr",
                secondary: "color_secondary__mHf9W",
                tertiary: "color_tertiary__ZyP50",
                quaternary: "color_quaternary__rW263"
            }
        },
        27783: (e, t, l) => {
            "use strict";
            l.d(t, {
                E: () => o
            });
            var r = l(91702),
                a = l(49430),
                s = l(23420),
                i = l(42861),
                n = l.n(i);
            let o = a.forwardRef((e, t) => {
                let {
                    variant: l = "regular",
                    size: a = "regular",
                    className: i,
                    ...o
                } = e;
                return (0, r.jsx)("div", { ...o,
                    ref: t,
                    className: (0, s.A)(i, n().root, n()[`variant-${l}`], n()[`size-${a}`])
                })
            })
        },
        29940: (e, t, l) => {
            "use strict";
            l.d(t, {
                S: () => s
            });
            var r = l(1325),
                a = l(90329);
            let s = (0, r.UU)({
                perspective: "published",
                dataset: "production",
                projectId: a.T.SANITY_PROJECT_ID,
                useCdn: a.T.IS_PRODUCTION,
                token: void 0,
                maxRetries: 3,
                stega: {
                    studioUrl: a.T.SANITY_STUDIO_URL
                },
                apiVersion: "2022-06-13"
            }).withConfig({
                fetch: {
                    next: {
                        revalidate: 240
                    }
                }
            })
        },
        33926: (e, t, l) => {
            "use strict";
            l.d(t, {
                L: () => h
            });
            var r = l(91702);
            l(49430);
            var a = l(23420),
                s = l(80750),
                i = l(51496),
                n = l(68843),
                o = l(58915),
                c = l(88232),
                d = l(10530),
                u = l.n(d);
            let h = e => {
                let {
                    type: t,
                    title: l,
                    icon: d,
                    className: h
                } = e, m = d ? ? (t ? function(e) {
                    switch (e) {
                        case "tip":
                            return (0, r.jsx)(s.B, {});
                        case "warning":
                            return (0, r.jsx)(i.ks, {
                                icon: "Alert"
                            });
                        default:
                            return
                    }
                }(t) : null);
                return (0, r.jsxs)(n.Flex, {
                    className: (0, a.A)(h, u().container),
                    children: [m && (0, r.jsx)(n.Flex, {
                        justify: "center",
                        align: "flex-start",
                        className: u().icon,
                        children: m
                    }), (0, r.jsxs)(n.Flex, {
                        direction: "column",
                        children: [l && (0, r.jsx)(o.Text, {
                            color: "var(--color-text-primary)",
                            size: "small",
                            weight: "medium",
                            margin: "0 0 2px 0",
                            children: l
                        }), (0, r.jsx)(c.s, {
                            className: u().content,
                            children: e.children
                        })]
                    })]
                })
            }
        },
        40736: (e, t, l) => {
            "use strict";
            l.d(t, {
                D: () => n
            });
            var r = l(91702),
                a = l(58915),
                s = l(68843);
            let i = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
                n = e => {
                    let {
                        children: t,
                        caption: l,
                        captionPrefix: n,
                        ...o
                    } = e;
                    return (0, r.jsxs)("figure", { ...o,
                        children: [t, l && (0, r.jsx)(a.Text, {
                            as: "figcaption",
                            size: "mini",
                            color: "tertiary",
                            margin: "10px 0 0 0",
                            wrap: "pretty",
                            children: (0, r.jsxs)(s.Flex, {
                                gap: 6,
                                "data-figure-flex": !0,
                                align: "center",
                                justify: "center",
                                children: [n && (0, r.jsx)(a.Text, {
                                    font: "serif-display",
                                    color: "quaternary",
                                    "data-caption-prefix": "",
                                    style: {
                                        fontStyle: "italic",
                                        display: "inline-block",
                                        fontSize: 13,
                                        flexShrink: 0
                                    },
                                    children: n
                                }), (0, r.jsx)(a.Text, {
                                    children: "string" == typeof l ? function(e) {
                                        let t = [],
                                            l = 0;
                                        for (let a of e.matchAll(i)) {
                                            let [s, i, n] = a;
                                            a.index > l && t.push(e.slice(l, a.index)), t.push((0, r.jsx)("a", {
                                                href: n,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: i
                                            }, a.index)), l = a.index + s.length
                                        }
                                        return 0 === t.length ? e : (l < e.length && t.push(e.slice(l)), t)
                                    }(l) : l
                                })]
                            })
                        })]
                    })
                }
        },
        42187: (e, t, l) => {
            "use strict";
            l.d(t, {
                w: () => n
            });
            var r = l(91702),
                a = l(23420),
                s = l(5129),
                i = l.n(s);
            let n = e => {
                let {
                    variant: t,
                    margin: l,
                    orientation: s = "horizontal",
                    decorative: n = !0,
                    ...o
                } = e;
                return (0, r.jsx)("div", { ...o,
                    role: n ? void 0 : "separator",
                    "aria-orientation": n ? void 0 : s,
                    "data-orientation": s,
                    className: (0, a.A)(e.className, i().root, t && i()[`variant-${t}`]),
                    style: { ...e.style,
                        margin: l
                    }
                })
            }
        },
        55715: (e, t, l) => {
            "use strict";
            l.d(t, {
                _V: () => r.Image,
                sn: () => o,
                GP: () => c.Zoom
            });
            var r = l(90071),
                a = l(91702),
                s = l(23420),
                i = l(5348),
                n = l(29940);
            let o = e => {
                let {
                    image: t,
                    ...l
                } = e, c = function(e) {
                    if (!e.image.asset ? ._ref) return;
                    let t = i.g.urlForImage(n.S, e.image, {
                            width: e.width
                        }),
                        {
                            width: l,
                            height: r
                        } = i.g.getImageDimensions(t);
                    return {
                        src: i.g.rewriteUrl(t),
                        width: l,
                        height: r
                    }
                }(e);
                if (!c) return null;
                let d = c.src,
                    u = e.width ? ? c.width,
                    h = e.height ? ? c.height,
                    m = e.alt ? ? e.image.alt ? ? e.image.caption ? ? "";
                if (!d) return null;
                let g = (0, a.jsx)(r.Image, { ...l,
                    height: h,
                    width: u,
                    src: d,
                    alt: m
                });
                return e.image.alternateImage ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: (0, s.A)("hide-dark", e.image.mobileImage && "hide-mobile"),
                        style: {
                            lineHeight: 0
                        },
                        children: (0, a.jsx)(o, { ...e,
                            image: e.image.alternateImage,
                            alt: e.image.alt
                        })
                    }), (0, a.jsx)("div", {
                        className: (0, s.A)("hide-light", e.image.mobileImage && "hide-mobile"),
                        style: {
                            lineHeight: 0
                        },
                        children: g
                    }), e.image.mobileImage && (0, a.jsx)("div", {
                        className: "show-mobile",
                        style: {
                            lineHeight: 0
                        },
                        children: (0, a.jsx)(o, { ...e,
                            image: e.image.mobileImage,
                            alt: e.image.alt
                        })
                    })]
                }) : e.image.mobileImage ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "hide-mobile",
                        style: {
                            lineHeight: 0
                        },
                        children: g
                    }), (0, a.jsx)("div", {
                        className: "show-mobile",
                        style: {
                            lineHeight: 0
                        },
                        children: (0, a.jsx)(o, { ...e,
                            image: e.image.mobileImage,
                            alt: e.image.alt
                        })
                    })]
                }) : g
            };
            var c = l(66797)
        },
        60323: e => {
            e.exports = {
                logotype: "Icon_logotype__QxI2T"
            }
        },
        62017: (e, t, l) => {
            "use strict";
            l.d(t, {
                F: () => ep,
                K: () => ej
            });
            var r = l(91702),
                a = l(49430),
                s = l(12845),
                i = l(5348);
            let n = (e, t = "") => e ? "string" == typeof e ? e : "number" == typeof e ? e.toString() : Array.isArray(e) ? e.map(e => n(e)).join(t) : a.isValidElement(e) ? n(e.props.children) : "" : "";
            class o {
                static {
                    this.colors = {
                        lightGrey: {
                            label: "Grey",
                            color: "#bec2c8"
                        },
                        darkGrey: {
                            label: "Dark Grey",
                            color: "#95a2b3"
                        },
                        controlPrimary: {
                            label: "Purple",
                            color: "#5e6ad2"
                        },
                        tealBase: {
                            label: "Teal",
                            color: "#26b5ce"
                        },
                        greenBase: {
                            label: "Green",
                            color: "#4cb782"
                        },
                        yellowBase: {
                            label: "Yellow",
                            color: "#f2c94c"
                        },
                        orangeBase: {
                            label: "Orange",
                            color: "#f2994a"
                        },
                        redBg: {
                            label: "Pink",
                            color: "#f7c8c1"
                        },
                        redBase: {
                            label: "Red",
                            color: "#eb5757"
                        }
                    }
                }
                static {
                    this.colorValues = Object.values(o.colors)
                }
                static {
                    this.colorsList = o.colorValues.map(e => e.color)
                }
                static {
                    this.defaultTeamIconColor = o.colors.lightGrey.color
                }
                static {
                    this.defaultTeamIconBackground = o.colorsList[0]
                }
            }
            let c = o.colorsList;
            var d = l(84853),
                u = l.n(d);
            let h = e => {
                let {
                    color: t,
                    children: l,
                    ...a
                } = e, s = t ? ? function(e) {
                    let t = 0;
                    for (let l = 0; l < e.length; l++) t = (t << 5) - t + e.charCodeAt(l), t &= t;
                    let l = Math.abs(t) % c.length;
                    return c[l]
                }(n(l));
                return (0, r.jsx)("div", { ...a,
                    className: u().root,
                    style: {
                        "--color": s
                    },
                    children: l
                })
            };
            var m = l(29940),
                g = l(28956);
            let x = ({
                quote: e
            }) => (0, r.jsxs)("figure", {
                children: [(0, r.jsx)("blockquote", {
                    children: (0, r.jsx)(s.RK, {
                        value: e.text
                    })
                }), e.authorName && (0, r.jsxs)("figcaption", {
                    children: [e.authorName, e.authorShortBio && (0, r.jsxs)(r.Fragment, {
                        children: [" — ", e.authorShortBio]
                    })]
                }), e.company && e.company.slug && e.company.buildPage && (0, r.jsx)(g.Link, {
                    href: `/customers/${e.company.slug.current}`,
                    children: "Read more →"
                })]
            });
            var p = l(27783),
                j = l(23420),
                y = l(68843),
                v = l(58915),
                f = l(86373),
                b = l.n(f);
            let w = a.forwardRef((e, t) => {
                let l = e.name && e.title,
                    a = l || e.logo;
                return (0, r.jsxs)("blockquote", {
                    ref: t,
                    className: (0, j.A)(b().root, l && b().cite),
                    children: [(0, r.jsx)(v.Text, {
                        as: "p",
                        size: "regular",
                        weight: "medium",
                        color: "secondary",
                        className: b().quotes,
                        children: e.children
                    }), a && (0, r.jsx)("footer", {
                        className: b().footer,
                        children: (0, r.jsx)("cite", {
                            className: b().cite,
                            children: (0, r.jsxs)(y.Flex, {
                                direction: "column",
                                children: [e.name && e.title && (0, r.jsxs)(v.Text, {
                                    size: "regular",
                                    weight: "medium",
                                    color: "tertiary",
                                    as: "p",
                                    children: [e.name, ", ", e.title]
                                }), e.logo]
                            })
                        })
                    })]
                })
            });
            var N = l(32009),
                _ = l(51560),
                C = l(88232),
                k = l(88043),
                L = l.n(k);

            function I(e) {
                let t = e.renderer,
                    [l, ...a] = e.table.rows;
                return (0, r.jsx)("div", {
                    className: L().root,
                    "data-custom-scrollbar": !0,
                    children: (0, r.jsxs)("table", {
                        className: L().table,
                        children: [(0, r.jsx)("thead", {
                            className: L().thead,
                            children: (0, r.jsx)("tr", {
                                className: L().tr,
                                children: l ? .cells ? .map(e => (0, r.jsx)("th", {
                                    className: L().th,
                                    children: (0, r.jsx)(t, {
                                        value: e.content ? ? []
                                    })
                                }, e._key))
                            })
                        }), (0, r.jsx)("tbody", {
                            className: L().tbody,
                            children: a.map(e => (0, r.jsx)("tr", {
                                className: L().tr,
                                children: e.cells.map(e => (0, r.jsx)("td", {
                                    className: L().td,
                                    children: (0, r.jsx)(C.s, {
                                        center: !1,
                                        size: "small",
                                        children: (0, r.jsx)(t, {
                                            value: e.content ? ? []
                                        })
                                    })
                                }, e._key))
                            }, e._key))
                        })]
                    })
                })
            }

            function A(e) {
                let {
                    data: t
                } = e;
                return (0, r.jsx)("div", {
                    className: L().root,
                    "data-custom-scrollbar": !0,
                    children: (0, r.jsxs)("table", {
                        className: L().table,
                        children: [(0, r.jsx)("thead", {
                            className: L().thead,
                            children: (0, r.jsx)("tr", {
                                className: L().tr,
                                children: t.head.map(e => (0, r.jsx)("th", {
                                    className: L().th,
                                    children: e.label
                                }, e.id))
                            })
                        }), (0, r.jsx)("tbody", {
                            className: L().tbody,
                            children: t.body.map(e => (0, r.jsxs)("tr", {
                                className: L().tr,
                                children: [e.items.map(e => (0, r.jsx)("td", {
                                    className: L().td,
                                    children: e.label
                                }, e.id)), e.items.length < t.head.length ? Array.from({
                                    length: t.head.length - e.items.length
                                }).map((e, t) => (0, r.jsx)("td", {
                                    className: L().td
                                }, t)) : null]
                            }, e.id))
                        })]
                    })
                })
            }
            var T = l(83913),
                S = l(55715),
                $ = l(40736),
                F = l(85254),
                R = l(33926),
                z = l(42187),
                H = l(91695),
                B = l(45837),
                D = l(35551),
                U = l(35250),
                V = l(1945),
                E = l(12209),
                P = l(6426),
                q = l(8826),
                G = l(89555),
                O = l.n(G);
            let M = e => {
                let t = (0, H.nl)(e.tweet);
                return (0, r.jsx)("div", {
                    className: O().theme,
                    children: (0, r.jsxs)(B.X, {
                        children: [(0, r.jsx)(D.V, {
                            tweet: t
                        }), t.in_reply_to_status_id_str && (0, r.jsx)(U.G, {
                            tweet: t
                        }), (0, r.jsx)(V.W, {
                            tweet: t
                        }), t.mediaDetails ? .length ? (0, r.jsx)(E.k, {
                            tweet: t
                        }) : null, t.quoted_tweet && (0, r.jsx)(P.K, {
                            tweet: t.quoted_tweet
                        }), (0, r.jsx)(q.i, {
                            tweet: t
                        })]
                    })
                })
            };
            var Y = l(80986),
                K = l.n(Y);
            let Z = a.forwardRef((e, t) => {
                let {
                    variant: l = "regular",
                    ...a
                } = e;
                return (0, r.jsx)("span", {
                    ref: t,
                    ...a,
                    className: (0, j.A)(e.className, K().root, K()[`variant-${l}`])
                })
            });
            var W = l(59129),
                X = l(1578),
                J = l(28329),
                Q = l(30631),
                ee = l(37072),
                et = l(14532),
                el = l(90356),
                er = l(19534),
                ea = l(43443),
                es = l(77137),
                ei = l(33783),
                en = l(38657),
                eo = l.n(en),
                ec = l(41988),
                ed = l.n(ec);
            async function eu(e) {
                let t = `
\`\`\`${e.language??""} ${e.title?`title=${e.title}`:""} ${e.showLineNumbers?"showLineNumbers":""}${e.highlightedLines?`{${e.highlightedLines}}`:""}${e.highlightChars?`/${e.highlightChars}/`:""}
${e.code}
\`\`\``.trim(),
                    l = await eh(t);
                return (0, r.jsxs)("figure", {
                    className: ed().root,
                    children: [(0, r.jsx)("div", {
                        className: eo().contents,
                        dangerouslySetInnerHTML: {
                            __html: l
                        }
                    }), (0, r.jsx)("div", {
                        className: ed().copy,
                        children: (0, r.jsx)(ei.Tooltip, {
                            asChild: !0,
                            title: "Copy code",
                            sideOffset: 8,
                            children: (0, r.jsx)(es.CopyButton, {
                                data: e.code,
                                size: "small",
                                variant: "secondary",
                                "aria-label": "Copy code"
                            })
                        })
                    })]
                })
            }
            async function eh(e) {
                return String(await (0, ee.l)().use(et.A).use(el.A).use(ea.A, {
                    keepBackground: !1,
                    defaultLang: "plaintext",
                    theme: {
                        light: "github-light",
                        dark: "github-dark-dimmed"
                    },
                    transformers: [{
                        pre(e) {
                            e.properties["data-custom-scrollbar"] = ""
                        },
                        code(e) {
                            this.addClassToHast(e, ed().code)
                        }
                    }]
                }).use(er.A).process(e))
            }

            function em(e) {
                return void 0 === e || /[\s(\[{—\u201C\u2018]/.test(e)
            }
            let eg = new Set(["code"]);

            function ex(e) {
                if ("block" !== e._type) return e;
                let t = e.children;
                return Array.isArray(t) ? { ...e,
                    children: t.map(e => {
                        let t;
                        return e ? ._type !== "span" || "string" != typeof e.text || Array.isArray(t = e.marks) && t.some(e => "string" == typeof e && eg.has(e)) ? e : { ...e,
                            text: function(e) {
                                let t = "";
                                for (let l = 0; l < e.length; l++) {
                                    let r = e[l],
                                        a = l > 0 ? e[l - 1] : void 0;
                                    '"' === r ? t += em(a) ? "“" : "”" : "'" === r ? a && /[\w\u2014]/.test(a) ? t += "’" : t += em(a) ? "‘" : "’" : t += r
                                }
                                return t
                            }(e.text)
                        }
                    })
                } : e
            }
            let ep = ej();

            function ej(e) {
                let t = a => {
                        var i;
                        let n = (0, s.Vh)((0, s.Vh)(s.wS, l), e ? .(t) ? ? {}),
                            o = Array.isArray(i = a.value) ? i.map(e => e && "object" == typeof e ? ex(e) : e) : i && "object" == typeof i ? ex(i) : i;
                        return (0, r.jsx)(F.SlugifyProvider, {
                            children: (0, r.jsx)(s.RK, { ...m.S.config,
                                components: n,
                                value: o
                            })
                        })
                    },
                    l = {
                        block: {
                            h1: e => (0, r.jsx)("h1", {
                                children: (0, r.jsx)(r.Fragment, {
                                    children: e.children
                                })
                            }),
                            h2: e => (0, r.jsx)("h2", {
                                children: (0, r.jsx)(F.LinkHeading, {
                                    children: e.children
                                })
                            }),
                            h3: e => (0, r.jsx)("h3", {
                                children: (0, r.jsx)(F.LinkHeading, {
                                    children: e.children
                                })
                            }),
                            h4: e => (0, r.jsx)("h4", {
                                children: (0, r.jsx)(F.LinkHeading, {
                                    children: e.children
                                })
                            }),
                            blockquote: e => (0, r.jsx)(w, {
                                children: e.children
                            })
                        },
                        marks: {
                            underline: e => (0, r.jsx)(Z, {
                                variant: "regular",
                                children: e.children
                            }),
                            kbd: e => {
                                if (!e.children) return null;
                                let t = a.Children.map(e.children, e => "string" == typeof e ? e.split("+") : a.isValidElement(e) ? e.props.text ? ? "" : "") ? .flat().reduce((e, t) => "string" == typeof t ? [...e, t] : e, []).filter(e => e.length > 0) || [];
                                return (0, r.jsx)(r.Fragment, {
                                    children: t.map((e, t) => (0, r.jsx)("kbd", {
                                        children: e.replace("+", "")
                                    }, t))
                                })
                            },
                            code: e => (0, r.jsx)("code", {
                                children: e.children
                            }),
                            label: e => (0, r.jsx)(h, {
                                children: e.children
                            }),
                            badge: e => (0, r.jsx)(p.E, {
                                variant: e.value ? .kind,
                                style: {
                                    marginLeft: 8
                                },
                                children: e.text
                            }),
                            decryptionAnimation: e => (0, r.jsx)(N.DecryptionAnimation, {
                                text: e.text
                            })
                        },
                        types: {
                            code: e => e.value.code ? (0, r.jsx)(eu, {
                                code: e.value.code,
                                language: e.value.language
                            }) : null,
                            youtubeVideo: e => (0, r.jsx)(X.H, { ...e.value
                            }),
                            video: e => {
                                let t = i.g.urlForVideo(m.S, e.value.video.asset),
                                    l = e.value.poster ? i.g.urlForImage(m.S, e.value.poster.asset) : void 0,
                                    a = e.value.captions && i.g.urlForFile(m.S, e.value.captions.asset);
                                return (0, r.jsx)($.D, {
                                    "data-wide": e.value.wide,
                                    caption: e.value.caption,
                                    children: (0, r.jsx)(W.VideoPlayer, {
                                        autoPlay: !1,
                                        src: t,
                                        width: e.value.width,
                                        height: e.value.height,
                                        poster: l,
                                        loop: e.value.loop,
                                        variant: "inline",
                                        children: a && (0, r.jsx)("track", {
                                            src: a,
                                            kind: "captions",
                                            srcLang: "en",
                                            label: "English"
                                        })
                                    })
                                })
                            },
                            horizontalRule: () => (0, r.jsx)(z.w, {
                                style: {
                                    marginBlock: 40
                                },
                                variant: "border"
                            }),
                            callout: e => (0, r.jsx)(R.L, {
                                icon: e.value.icon && (0, r.jsx)(S.sn, {
                                    image: e.value.icon
                                }),
                                children: (0, r.jsx)(t, {
                                    value: e.value.content
                                })
                            }),
                            collapsibles: e => {
                                let l = e.value;
                                return l ? .collapsibles ? (0, r.jsx)(_.Collapsibles, {
                                    data: l.collapsibles.map(e => ({
                                        id: e._key,
                                        collapsibleName: e.title,
                                        collapsibleContent: (0, r.jsx)(C.s, {
                                            center: !1,
                                            size: "inherit",
                                            children: (0, r.jsx)(t, {
                                                value: e.content ? ? []
                                            })
                                        })
                                    }))
                                }) : null
                            },
                            statCollapsibles: e => {
                                let l = e.value;
                                return l ? .collapsibles ? (0, r.jsx)(a.Suspense, {
                                    children: (0, r.jsx)(_.Collapsibles, {
                                        style: {
                                            "--title-line-height": "32px"
                                        },
                                        data: l.collapsibles.map(e => ({
                                            id: e._key,
                                            collapsibleName: (0, r.jsxs)("span", {
                                                "aria-label": e.stat + " " + e.title,
                                                children: [(0, r.jsx)(v.Text, {
                                                    size: "title-3",
                                                    style: {
                                                        marginRight: 12
                                                    },
                                                    children: e.stat
                                                }), (0, r.jsx)(v.Text, {
                                                    size: "regular",
                                                    color: "tertiary",
                                                    children: e.title
                                                })]
                                            }),
                                            collapsibleContent: (0, r.jsx)(C.s, {
                                                center: !1,
                                                size: "inherit",
                                                children: (0, r.jsx)(t, {
                                                    value: e.content ? ? []
                                                })
                                            })
                                        }))
                                    })
                                }) : null
                            },
                            stats: e => e.value ? (0, r.jsx)(Q.Stats, {
                                stats: e.value.stats
                            }) : null,
                            tabs: e => {
                                let l = e.value;
                                return l ? .tabs ? (0, r.jsx)(T.Tabs, {
                                    syncToUrl: !0,
                                    style: {
                                        paddingBlock: "12px 24px"
                                    },
                                    tabs: l.tabs.map(e => ({
                                        id: e._key,
                                        label: e.title,
                                        content: (0, r.jsx)(C.s, {
                                            size: "small",
                                            center: !1,
                                            children: (0, r.jsx)(t, {
                                                value: e.content ? ? []
                                            })
                                        })
                                    }))
                                }) : null
                            },
                            image: function(e) {
                                return (0, r.jsx)($.D, {
                                    caption: e.value.caption,
                                    captionPrefix: e.value.captionPrefix,
                                    children: (0, r.jsx)(S.sn, {
                                        image: e.value,
                                        priority: e.index < 5
                                    })
                                })
                            },
                            table: e => {
                                let t = e.value,
                                    [l, ...a] = t ? .rows ? ? [];
                                return (0, r.jsx)(A, {
                                    data: {
                                        head: l ? .cells ? .map((e, t) => ({
                                            id: `${l._key}-${t}`,
                                            label: e
                                        })) ? ? [],
                                        body: a.map((e, t) => {
                                            let l = e._key ? ? `row-${t}`;
                                            return {
                                                id: l,
                                                items: e ? .cells ? .map((e, t) => ({
                                                    id: `${l}-${t}`,
                                                    label: e
                                                })) ? ? []
                                            }
                                        }) ? ? []
                                    }
                                })
                            },
                            "web.table": e => (0, r.jsx)(I, {
                                table: e.value,
                                renderer: t
                            }),
                            quote: e => (0, r.jsx)(x, {
                                quote: e.value
                            }),
                            tweet: e => e.value.tweet ? (0, r.jsx)(M, {
                                tweet: e.value.tweet
                            }) : (J.V.error("Tweet value is missing", e.value), null)
                        }
                    };
                return t
            }
        },
        73337: (e, t, l) => {
            "use strict";
            l.d(t, {
                I: () => u,
                p: () => d
            });
            var r = l(49430),
                a = l(23420),
                s = l(82864),
                i = l(11227),
                n = l.n(i),
                o = l(60323),
                c = l.n(o);
            let d = e => {
                    let {
                        size: t,
                        color: l = "currentColor",
                        title: i,
                        className: o,
                        children: d,
                        ...u
                    } = e, h = r.Children.only(d);
                    if (r.isValidElement(h)) {
                        let e = { ...u,
                            className: (0, a.A)(c().logotype, n()[l], o),
                            style: { ...u.style,
                                "--Logotype-width": (0, s.c)(t)
                            },
                            width: void 0,
                            height: void 0,
                            fill: l in n() ? "currentColor" : l,
                            "aria-label": i,
                            "aria-hidden": i ? void 0 : "true",
                            role: "img",
                            focusable: "false",
                            xmlns: void 0
                        };
                        return r.cloneElement(h, e, d)
                    }
                    return null
                },
                u = e => {
                    let {
                        color: t = "currentColor"
                    } = e;
                    return r.cloneElement(r.Children.only(e.children), { ...e,
                        className: (0, a.A)(e.className, n()[t]),
                        color: t in n() ? "currentColor" : t
                    })
                }
        },
        80750: (e, t, l) => {
            "use strict";
            l.d(t, {
                B: () => s
            });
            var r = l(91702);
            l(49430);
            var a = l(18841);

            function s(e) {
                return (0, r.jsx)(a.I, { ...e,
                    children: (0, r.jsxs)("svg", {
                        children: [(0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M6.5 1C6.73834 1 6.94355 1.16823 6.99029 1.40194L7.92824 6.09167L11.6213 7.01493C11.8439 7.07057 12 7.27057 12 7.5C12 7.72943 11.8439 7.92943 11.6213 7.98507L7.92824 8.90833L6.99029 13.5981C6.94355 13.8318 6.73834 14 6.5 14C6.26166 14 6.05645 13.8318 6.00971 13.5981L5.07176 8.90833L1.37873 7.98507C1.15615 7.92943 1 7.72943 1 7.5C1 7.27057 1.15615 7.07057 1.37873 7.01493L5.07176 6.09167L6.00971 1.40194C6.05645 1.16823 6.26166 1 6.5 1Z"
                        }), (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.5 10C12.7152 10 12.9063 10.1377 12.9743 10.3419L13.3953 11.6047L14.6581 12.0256C14.8623 12.0937 15 12.2848 15 12.5C15 12.7152 14.8623 12.9063 14.6581 12.9743L13.3953 13.3953L12.9743 14.6581C12.9063 14.8623 12.7152 15 12.5 15C12.2848 15 12.0937 14.8623 12.0257 14.6581L11.6047 13.3953L10.3419 12.9743C10.1377 12.9063 10 12.7152 10 12.5C10 12.2848 10.1377 12.0937 10.3419 12.0256L11.6047 11.6047L12.0257 10.3419C12.0937 10.1377 12.2848 10 12.5 10Z"
                        })]
                    })
                })
            }
        },
        88232: (e, t, l) => {
            "use strict";
            l.d(t, {
                s: () => n
            });
            var r = l(91702),
                a = l(23420),
                s = l(64100),
                i = l.n(s);
            let n = e => {
                let {
                    center: t = !0,
                    size: l = "regular",
                    ...s
                } = e;
                return (0, r.jsx)("div", { ...s,
                    className: (0, a.A)(e.className, i().prose, t && i().center, i()[`size-${l}`], "inherit" !== l && i()["size-defaults"])
                })
            }
        }
    }
]);