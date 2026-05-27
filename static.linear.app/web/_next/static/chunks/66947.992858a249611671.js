! function() {
    try {
        var e = "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : {},
            s = (new e.Error).stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "b48f35c2-e2a2-46de-929e-3d9275c5875a", e._sentryDebugIdIdentifier = "sentry-dbid-b48f35c2-e2a2-46de-929e-3d9275c5875a")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [66947], {
        66947: (e, s, a) => {
            a.r(s), a.d(s, {
                default: () => t.Ay,
                getWasmInstance: () => t.En,
                wasmBinary: () => t.sh
            });
            var t = a(91053)
        }
    }
]);