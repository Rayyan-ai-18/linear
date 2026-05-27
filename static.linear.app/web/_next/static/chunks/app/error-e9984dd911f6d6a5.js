! function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
            r = (new e.Error).stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9ffba850-b9ed-4dad-9847-247f1585cff2", e._sentryDebugIdIdentifier = "sentry-dbid-9ffba850-b9ed-4dad-9847-247f1585cff2")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [18039], {
        36893: (e, r, t) => {
            "use strict";
            t.d(r, {
                o: () => a
            });
            var s = t(49430);
            let n = "chunk_error_reload",
                o = [/ChunkLoadError/i, /Loading chunk/i, /Failed to fetch dynamically imported module/i];

            function a(e) {
                s.useEffect(() => {
                    let r, t;
                    if (r = e.message || "", t = e.name || "", !o.some(e => e.test(r) || e.test(t))) return;
                    let s = sessionStorage.getItem(n);
                    s && Date.now() - Number(s) < 1e4 || (sessionStorage.setItem(n, String(Date.now())), window.location.reload())
                }, [e])
            }
        },
        64535: (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, {
                default: () => c
            });
            var s = t(91702),
                n = t(49430),
                o = t(58915),
                a = t(89342),
                i = t(42326),
                l = t(91463);

            function d(e) {
                return n.useEffect(() => {
                    l.Cp(e.error)
                }, []), null
            }
            var u = t(76826),
                f = t(36893);

            function c(e) {
                return (0, f.o)(e.error), (0, s.jsxs)(u.w, {
                    layout: "center",
                    children: [(0, s.jsx)(i.O, {}), (0, s.jsx)(a.h, {
                        height: 32
                    }), (0, s.jsxs)("hgroup", {
                        children: [(0, s.jsx)(o.Text, {
                            as: "h1",
                            size: "regular",
                            children: "Unexpected error"
                        }), (0, s.jsx)(a.h, {
                            height: 4
                        }), (0, s.jsx)(o.Text, {
                            as: "p",
                            size: "regular",
                            weight: "normal",
                            color: "tertiary",
                            style: {
                                maxWidth: "30ch"
                            },
                            align: "center",
                            children: "There was an error loading this page and our team has been notified."
                        })]
                    }), (0, s.jsx)(d, { ...e
                    })]
                })
            }
        },
        98587: (e, r, t) => {
            Promise.resolve().then(t.bind(t, 64535))
        }
    },
    e => {
        e.O(0, [62743, 35837, 31221, 70511, 97017, 58792, 94055, 12134, 57167, 21709, 32218, 59936, 71304, 77964, 61258, 2401, 80590, 56914, 57117, 80387, 62456, 7593, 54528, 23288, 98203, 42252, 41022, 30655, 49516, 77358], () => e(e.s = 98587)), _N_E = e.O()
    }
]);