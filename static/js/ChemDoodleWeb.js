//
// ChemDoodle Web Components 7.0.1
//
// http://web.chemdoodle.com
//
// Copyright 2009-2015 iChemLabs, LLC.  All rights reserved.
//
// The ChemDoodle Web Components library is licensed under version 3
// of the GNU GENERAL PUBLIC LICENSE.
//
// You may redistribute it and/or modify it under the terms of the
// GNU General Public License as published by the Free Software Foundation,
// either version 3 of the License, or (at your option) any later version.
//
// As an exception to the GPL, you may distribute this packed form of
// the code without the copy of the GPL license normally required,
// provided you include this license notice and a URL through which
// recipients can access the corresponding unpacked source code. 
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// Please contact iChemLabs <http://www.ichemlabs.com/contact-us> for
// alternate licensing options.
//
var ChemDoodle = function () { var b = { iChemLabs: {}, informatics: {}, io: {}, lib: {}, notations: {}, structures: {} }; b.structures.d2 = {}; b.structures.d3 = {}; b.getVersion = function () { return "7.0.1" }; return b }();
(function (b, j, o) {
    function l(z) { var c = z.length, a = m.type(z); return m.isWindow(z) ? !1 : 1 === z.nodeType && c ? !0 : "array" === a || "function" !== a && (0 === c || "number" === typeof c && 0 < c && c - 1 in z) } function h(z, c, a, d) {
        if (m.acceptData(z)) {
            var k = m.expando, e = z.nodeType, f = e ? m.cache : z, b = e ? z[k] : z[k] && k; if (b && f[b] && (d || f[b].data) || !(a === o && "string" === typeof c)) {
                b || (b = e ? z[k] = ga.pop() || m.guid++ : k); f[b] || (f[b] = e ? {} : { toJSON: m.noop }); if ("object" === typeof c || "function" === typeof c) d ? f[b] = m.extend(f[b], c) : f[b].data = m.extend(f[b].data,
                    c); z = f[b]; d || (z.data || (z.data = {}), z = z.data); a !== o && (z[m.camelCase(c)] = a); "string" === typeof c ? (a = z[c], null == a && (a = z[m.camelCase(c)])) : a = z; return a
            }
        }
    } function g(z, c, d) {
        if (m.acceptData(z)) {
            var k, f, e = z.nodeType, b = e ? m.cache : z, g = e ? z[m.expando] : m.expando; if (b[g]) {
                if (c && (k = d ? b[g] : b[g].data)) { m.isArray(c) ? c = c.concat(m.map(c, m.camelCase)) : c in k ? c = [c] : (c = m.camelCase(c), c = c in k ? [c] : c.split(" ")); for (f = c.length; f--;)delete k[c[f]]; if (d ? !a(k) : !m.isEmptyObject(k)) return } if (!d && (delete b[g].data, !a(b[g]))) return;
                e ? m.cleanData([z], !0) : m.support.deleteExpando || b != b.window ? delete b[g] : b[g] = null
            }
        }
    } function e(z, c, a) { if (a === o && 1 === z.nodeType) if (a = "data-" + c.replace(yc, "-$1").toLowerCase(), a = z.getAttribute(a), "string" === typeof a) { try { a = "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : +a + "" === a ? +a : zc.test(a) ? m.parseJSON(a) : a } catch (d) { } m.data(z, c, a) } else a = o; return a } function a(z) { for (var c in z) if (!("data" === c && m.isEmptyObject(z[c])) && "toJSON" !== c) return !1; return !0 } function d() { return !0 } function n() { return !1 } function f() { try { return K.activeElement } catch (z) { } }
    function y(z, c) { do z = z[c]; while (z && 1 !== z.nodeType); return z } function p(z, c, a) { if (m.isFunction(c)) return m.grep(z, function (z, d) { return !!c.call(z, d, z) !== a }); if (c.nodeType) return m.grep(z, function (z) { return z === c !== a }); if ("string" === typeof c) { if (Ac.test(c)) return m.filter(c, z, a); c = m.filter(c, z) } return m.grep(z, function (z) { return 0 <= m.inArray(z, c) !== a }) } function q(z) { var c = Nb.split("|"); z = z.createDocumentFragment(); if (z.createElement) for (; c.length;)z.createElement(c.pop()); return z } function A(z, c) {
        return m.nodeName(z,
            "table") && m.nodeName(1 === c.nodeType ? c : c.firstChild, "tr") ? z.getElementsByTagName("tbody")[0] || z.appendChild(z.ownerDocument.createElement("tbody")) : z
    } function r(z) { z.type = (null !== m.find.attr(z, "type")) + "/" + z.type; return z } function v(z) { var c = Bc.exec(z.type); c ? z.type = c[1] : z.removeAttribute("type"); return z } function u(z, c) { for (var a, d = 0; null != (a = z[d]); d++)m._data(a, "globalEval", !c || m._data(c[d], "globalEval")) } function t(z, c) {
        if (1 === c.nodeType && m.hasData(z)) {
            var a, d, k; d = m._data(z); var f = m._data(c, d),
                e = d.events; if (e) for (a in delete f.handle, f.events = {}, e) { d = 0; for (k = e[a].length; d < k; d++)m.event.add(c, a, e[a][d]) } f.data && (f.data = m.extend({}, f.data))
        }
    } function w(z, c) { var a, d, k = 0, f = typeof z.getElementsByTagName !== oa ? z.getElementsByTagName(c || "*") : typeof z.querySelectorAll !== oa ? z.querySelectorAll(c || "*") : o; if (!f) { f = []; for (a = z.childNodes || z; null != (d = a[k]); k++)!c || m.nodeName(d, c) ? f.push(d) : m.merge(f, w(d, c)) } return c === o || c && m.nodeName(z, c) ? m.merge([z], f) : f } function x(z) {
        mb.test(z.type) && (z.defaultChecked =
            z.checked)
    } function B(z, c) { if (c in z) return c; for (var a = c.charAt(0).toUpperCase() + c.slice(1), d = c, k = Ob.length; k--;)if (c = Ob[k] + a, c in z) return c; return d } function c(z, c) { z = c || z; return "none" === m.css(z, "display") || !m.contains(z.ownerDocument, z) } function k(z, a) {
        for (var d, k, f, e = [], b = 0, g = z.length; b < g; b++)if (k = z[b], k.style) if (e[b] = m._data(k, "olddisplay"), d = k.style.display, a) !e[b] && "none" === d && (k.style.display = ""), "" === k.style.display && c(k) && (e[b] = m._data(k, "olddisplay", E(k.nodeName))); else if (!e[b] && (f = c(k),
            d && "none" !== d || !f)) m._data(k, "olddisplay", f ? d : m.css(k, "display")); for (b = 0; b < g; b++)if (k = z[b], k.style && (!a || "none" === k.style.display || "" === k.style.display)) k.style.display = a ? e[b] || "" : "none"; return z
    } function C(z, c, a) { return (z = Cc.exec(c)) ? Math.max(0, z[1] - (a || 0)) + (z[2] || "px") : c } function D(z, c, a, d, k) {
        c = a === (d ? "border" : "content") ? 4 : "width" === c ? 1 : 0; for (var f = 0; 4 > c; c += 2)"margin" === a && (f += m.css(z, a + Aa[c], !0, k)), d ? ("content" === a && (f -= m.css(z, "padding" + Aa[c], !0, k)), "margin" !== a && (f -= m.css(z, "border" + Aa[c] + "Width",
            !0, k))) : (f += m.css(z, "padding" + Aa[c], !0, k), "padding" !== a && (f += m.css(z, "border" + Aa[c] + "Width", !0, k))); return f
    } function G(z, c, a) { var d = !0, k = "width" === c ? z.offsetWidth : z.offsetHeight, f = Ba(z), e = m.support.boxSizing && "border-box" === m.css(z, "boxSizing", !1, f); if (0 >= k || null == k) { k = Ca(z, c, f); if (0 > k || null == k) k = z.style[c]; if (Wa.test(k)) return k; d = e && (m.support.boxSizingReliable || k === z.style[c]); k = parseFloat(k) || 0 } return k + D(z, c, a || (e ? "border" : "content"), d, f) + "px" } function E(z) {
        var c = K, a = Pb[z]; if (!a) {
            a = H(z, c); if ("none" ===
                a || !a) Ra = (Ra || m("\x3ciframe frameborder\x3d'0' width\x3d'0' height\x3d'0'/\x3e").css("cssText", "display:block !important")).appendTo(c.documentElement), c = (Ra[0].contentWindow || Ra[0].contentDocument).document, c.write("\x3c!doctype html\x3e\x3chtml\x3e\x3cbody\x3e"), c.close(), a = H(z, c), Ra.detach(); Pb[z] = a
        } return a
    } function H(z, c) { var a = m(c.createElement(z)).appendTo(c.body), d = m.css(a[0], "display"); a.remove(); return d } function I(z, c, a, d) {
        var k; if (m.isArray(c)) m.each(c, function (c, k) {
            a || Dc.test(z) ? d(z,
                k) : I(z + "[" + ("object" === typeof k ? c : "") + "]", k, a, d)
        }); else if (!a && "object" === m.type(c)) for (k in c) I(z + "[" + k + "]", c[k], a, d); else d(z, c)
    } function M(z) { return function (c, a) { "string" !== typeof c && (a = c, c = "*"); var d, k = 0, f = c.toLowerCase().match(pa) || []; if (m.isFunction(a)) for (; d = f[k++];)"+" === d[0] ? (d = d.slice(1) || "*", (z[d] = z[d] || []).unshift(a)) : (z[d] = z[d] || []).push(a) } } function J(z, c, a, d) {
        function k(b) {
            var g; f[b] = !0; m.each(z[b] || [], function (z, b) {
                var n = b(c, a, d); if ("string" === typeof n && !e && !f[n]) return c.dataTypes.unshift(n),
                    k(n), !1; if (e) return !(g = n)
            }); return g
        } var f = {}, e = z === nb; return k(c.dataTypes[0]) || !f["*"] && k("*")
    } function T(z, c) { var a, d, k = m.ajaxSettings.flatOptions || {}; for (d in c) c[d] !== o && ((k[d] ? z : a || (a = {}))[d] = c[d]); a && m.extend(!0, z, a); return z } function F() { try { return new b.XMLHttpRequest } catch (z) { } } function W() { setTimeout(function () { La = o }); return La = m.now() } function R(z, c, a) { for (var d, k = (Sa[c] || []).concat(Sa["*"]), f = 0, e = k.length; f < e; f++)if (d = k[f].call(a, c, z)) return d } function O(z, c, a) {
        var d, k, f = 0, e = Xa.length,
        b = m.Deferred().always(function () { delete g.elem }), g = function () { if (k) return !1; for (var c = La || W(), c = Math.max(0, n.startTime + n.duration - c), a = 1 - (c / n.duration || 0), d = 0, f = n.tweens.length; d < f; d++)n.tweens[d].run(a); b.notifyWith(z, [n, a, c]); if (1 > a && f) return c; b.resolveWith(z, [n]); return !1 }, n = b.promise({
            elem: z, props: m.extend({}, c), opts: m.extend(!0, { specialEasing: {} }, a), originalProperties: c, originalOptions: a, startTime: La || W(), duration: a.duration, tweens: [], createTween: function (c, a) {
                var d = m.Tween(z, n.opts, c, a, n.opts.specialEasing[c] ||
                    n.opts.easing); n.tweens.push(d); return d
            }, stop: function (c) { var a = 0, d = c ? n.tweens.length : 0; if (k) return this; for (k = !0; a < d; a++)n.tweens[a].run(1); c ? b.resolveWith(z, [n, c]) : b.rejectWith(z, [n, c]); return this }
        }); c = n.props; a = n.opts.specialEasing; var p, y, h, j; for (d in c) if (p = m.camelCase(d), y = a[p], h = c[d], m.isArray(h) && (y = h[1], h = c[d] = h[0]), d !== p && (c[p] = h, delete c[d]), (j = m.cssHooks[p]) && "expand" in j) for (d in h = j.expand(h), delete c[p], h) d in c || (c[d] = h[d], a[d] = y); else a[p] = y; for (; f < e; f++)if (d = Xa[f].call(n, z, c, n.opts)) return d;
        m.map(c, R, n); m.isFunction(n.opts.start) && n.opts.start.call(z, n); m.fx.timer(m.extend(g, { elem: z, anim: n, queue: n.opts.queue })); return n.progress(n.opts.progress).done(n.opts.done, n.opts.complete).fail(n.opts.fail).always(n.opts.always)
    } function L(z, c, a, d, k) { return new L.prototype.init(z, c, a, d, k) } function Z(z, c) { var a, d = { height: z }, k = 0; for (c = c ? 1 : 0; 4 > k; k += 2 - c)a = Aa[k], d["margin" + a] = d["padding" + a] = z; c && (d.opacity = d.width = z); return d } function Da(z) {
        return m.isWindow(z) ? z : 9 === z.nodeType ? z.defaultView || z.parentWindow :
            !1
    } var ka, $, oa = typeof o, Fc = b.location, K = b.document, ca = K.documentElement, da = b.jQuery, ea = b.$, Y = {}, ga = [], sa = ga.concat, qa = ga.push, U = ga.slice, Qb = ga.indexOf, Gc = Y.toString, Ma = Y.hasOwnProperty, ob = "1.10.2".trim, m = function (z, c) { return new m.fn.init(z, c, $) }, Ya = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, pa = /\S+/g, Hc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Ic = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Rb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Jc = /^[\],:{}\s]*$/, Kc = /(?:^|:|,)(?:\s*\[)+/g, Lc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Mc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, Nc = /^-ms-/, Oc = /-([\da-z])/gi, Pc = function (z, c) { return c.toUpperCase() }, ta = function (z) { if (K.addEventListener || "load" === z.type || "complete" === K.readyState) Sb(), m.ready() }, Sb = function () { K.addEventListener ? (K.removeEventListener("DOMContentLoaded", ta, !1), b.removeEventListener("load", ta, !1)) : (K.detachEvent("onreadystatechange", ta), b.detachEvent("onload", ta)) }; m.fn = m.prototype = {
            jquery: "1.10.2", constructor: m, init: function (z, c, a) {
                var d; if (!z) return this;
                if ("string" === typeof z) {
                    if ((d = "\x3c" === z.charAt(0) && "\x3e" === z.charAt(z.length - 1) && 3 <= z.length ? [null, z, null] : Ic.exec(z)) && (d[1] || !c)) { if (d[1]) { if (c = c instanceof m ? c[0] : c, m.merge(this, m.parseHTML(d[1], c && c.nodeType ? c.ownerDocument || c : K, !0)), Rb.test(d[1]) && m.isPlainObject(c)) for (d in c) if (m.isFunction(this[d])) this[d](c[d]); else this.attr(d, c[d]) } else { if ((c = K.getElementById(d[2])) && c.parentNode) { if (c.id !== d[2]) return a.find(z); this.length = 1; this[0] = c } this.context = K; this.selector = z } return this } return !c ||
                        c.jquery ? (c || a).find(z) : this.constructor(c).find(z)
                } if (z.nodeType) return this.context = this[0] = z, this.length = 1, this; if (m.isFunction(z)) return a.ready(z); z.selector !== o && (this.selector = z.selector, this.context = z.context); return m.makeArray(z, this)
            }, selector: "", length: 0, toArray: function () { return U.call(this) }, get: function (z) { return null == z ? this.toArray() : 0 > z ? this[this.length + z] : this[z] }, pushStack: function (z) { z = m.merge(this.constructor(), z); z.prevObject = this; z.context = this.context; return z }, each: function (z,
                c) { return m.each(this, z, c) }, ready: function (z) { m.ready.promise().done(z); return this }, slice: function () { return this.pushStack(U.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (z) { var c = this.length; z = +z + (0 > z ? c : 0); return this.pushStack(0 <= z && z < c ? [this[z]] : []) }, map: function (z) { return this.pushStack(m.map(this, function (c, a) { return z.call(c, a, c) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: qa, sort: [].sort, splice: [].splice
        };
    m.fn.init.prototype = m.fn; m.extend = m.fn.extend = function () { var z, c, a, d, k, f = arguments[0] || {}, e = 1, b = arguments.length, n = !1; "boolean" === typeof f && (n = f, f = arguments[1] || {}, e = 2); "object" !== typeof f && !m.isFunction(f) && (f = {}); b === e && (f = this, --e); for (; e < b; e++)if (null != (k = arguments[e])) for (d in k) z = f[d], a = k[d], f !== a && (n && a && (m.isPlainObject(a) || (c = m.isArray(a))) ? (c ? (c = !1, z = z && m.isArray(z) ? z : []) : z = z && m.isPlainObject(z) ? z : {}, f[d] = m.extend(n, z, a)) : a !== o && (f[d] = a)); return f }; m.extend({
        expando: "jQuery" + ("1.10.2" + Math.random()).replace(/\D/g,
            ""), noConflict: function (c) { b.$ === m && (b.$ = ea); c && b.jQuery === m && (b.jQuery = da); return m }, isReady: !1, readyWait: 1, holdReady: function (c) { c ? m.readyWait++ : m.ready(!0) }, ready: function (c) { if (!(!0 === c ? --m.readyWait : m.isReady)) { if (!K.body) return setTimeout(m.ready); m.isReady = !0; !0 !== c && 0 < --m.readyWait || (ka.resolveWith(K, [m]), m.fn.trigger && m(K).trigger("ready").off("ready")) } }, isFunction: function (c) { return "function" === m.type(c) }, isArray: Array.isArray || function (c) { return "array" === m.type(c) }, isWindow: function (c) {
                return null !=
                    c && c == c.window
            }, isNumeric: function (c) { return !isNaN(parseFloat(c)) && isFinite(c) }, type: function (c) { return null == c ? String(c) : "object" === typeof c || "function" === typeof c ? Y[Gc.call(c)] || "object" : typeof c }, isPlainObject: function (c) {
                var a; if (!c || "object" !== m.type(c) || c.nodeType || m.isWindow(c)) return !1; try { if (c.constructor && !Ma.call(c, "constructor") && !Ma.call(c.constructor.prototype, "isPrototypeOf")) return !1 } catch (d) { return !1 } if (m.support.ownLast) for (a in c) return Ma.call(c, a); for (a in c); return a === o || Ma.call(c,
                    a)
            }, isEmptyObject: function (c) { for (var a in c) return !1; return !0 }, error: function (c) { throw Error(c); }, parseHTML: function (c, a, d) { if (!c || "string" !== typeof c) return null; "boolean" === typeof a && (d = a, a = !1); a = a || K; var k = Rb.exec(c); d = !d && []; if (k) return [a.createElement(k[1])]; k = m.buildFragment([c], a, d); d && m(d).remove(); return m.merge([], k.childNodes) }, parseJSON: function (c) {
                if (b.JSON && b.JSON.parse) return b.JSON.parse(c); if (null === c) return c; if ("string" === typeof c && (c = m.trim(c)) && Jc.test(c.replace(Lc, "@").replace(Mc,
                    "]").replace(Kc, ""))) return (new Function("return " + c))(); m.error("Invalid JSON: " + c)
            }, parseXML: function (c) { var a, d; if (!c || "string" !== typeof c) return null; try { b.DOMParser ? (d = new DOMParser, a = d.parseFromString(c, "text/xml")) : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(c)) } catch (k) { a = o } (!a || !a.documentElement || a.getElementsByTagName("parsererror").length) && m.error("Invalid XML: " + c); return a }, noop: function () { }, globalEval: function (c) {
                c && m.trim(c) && (b.execScript || function (c) {
                    b.eval.call(b,
                        c)
                })(c)
            }, camelCase: function (c) { return c.replace(Nc, "ms-").replace(Oc, Pc) }, nodeName: function (c, a) { return c.nodeName && c.nodeName.toLowerCase() === a.toLowerCase() }, each: function (c, a, d) { var k, f = 0, e = c.length; k = l(c); if (d) if (k) for (; f < e && !(k = a.apply(c[f], d), !1 === k); f++); else for (f in c) { if (k = a.apply(c[f], d), !1 === k) break } else if (k) for (; f < e && !(k = a.call(c[f], f, c[f]), !1 === k); f++); else for (f in c) if (k = a.call(c[f], f, c[f]), !1 === k) break; return c }, trim: ob && !ob.call("\ufeff\u00a0") ? function (c) { return null == c ? "" : ob.call(c) } :
                function (c) { return null == c ? "" : (c + "").replace(Hc, "") }, makeArray: function (c, a) { var d = a || []; null != c && (l(Object(c)) ? m.merge(d, "string" === typeof c ? [c] : c) : qa.call(d, c)); return d }, inArray: function (c, a, d) { var k; if (a) { if (Qb) return Qb.call(a, c, d); k = a.length; for (d = d ? 0 > d ? Math.max(0, k + d) : d : 0; d < k; d++)if (d in a && a[d] === c) return d } return -1 }, merge: function (c, a) { var d = a.length, k = c.length, f = 0; if ("number" === typeof d) for (; f < d; f++)c[k++] = a[f]; else for (; a[f] !== o;)c[k++] = a[f++]; c.length = k; return c }, grep: function (c, a, d) {
                    var k,
                    f = [], e = 0, b = c.length; for (d = !!d; e < b; e++)k = !!a(c[e], e), d !== k && f.push(c[e]); return f
                }, map: function (c, a, d) { var k, f = 0, e = c.length, b = []; if (l(c)) for (; f < e; f++)k = a(c[f], f, d), null != k && (b[b.length] = k); else for (f in c) k = a(c[f], f, d), null != k && (b[b.length] = k); return sa.apply([], b) }, guid: 1, proxy: function (c, a) { var d, k; "string" === typeof a && (k = c[a], a = c, c = k); if (!m.isFunction(c)) return o; d = U.call(arguments, 2); k = function () { return c.apply(a || this, d.concat(U.call(arguments))) }; k.guid = c.guid = c.guid || m.guid++; return k }, access: function (c,
                    a, d, k, f, e, b) { var n = 0, g = c.length, p = null == d; if ("object" === m.type(d)) for (n in f = !0, d) m.access(c, a, n, d[n], !0, e, b); else if (k !== o && (f = !0, m.isFunction(k) || (b = !0), p && (b ? (a.call(c, k), a = null) : (p = a, a = function (c, a, z) { return p.call(m(c), z) })), a)) for (; n < g; n++)a(c[n], d, b ? k : k.call(c[n], n, a(c[n], d))); return f ? c : p ? a.call(c) : g ? a(c[0], d) : e }, now: function () { return (new Date).getTime() }, swap: function (c, a, d, k) { var f, e = {}; for (f in a) e[f] = c.style[f], c.style[f] = a[f]; d = d.apply(c, k || []); for (f in a) c.style[f] = e[f]; return d }
    });
    m.ready.promise = function (c) { if (!ka) if (ka = m.Deferred(), "complete" === K.readyState) setTimeout(m.ready); else if (K.addEventListener) K.addEventListener("DOMContentLoaded", ta, !1), b.addEventListener("load", ta, !1); else { K.attachEvent("onreadystatechange", ta); b.attachEvent("onload", ta); var a = !1; try { a = null == b.frameElement && K.documentElement } catch (d) { } a && a.doScroll && function xc() { if (!m.isReady) { try { a.doScroll("left") } catch (c) { return setTimeout(xc, 50) } Sb(); m.ready() } }() } return ka.promise(c) }; m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function (c, a) { Y["[object " + a + "]"] = a.toLowerCase() }); $ = m(K); var pb = b, S = function (c, a, d, k) {
            var f, e, b, n, g; (a ? a.ownerDocument || a : ra) !== aa && Ea(a); a = a || aa; d = d || []; if (!c || "string" !== typeof c) return d; if (1 !== (n = a.nodeType) && 9 !== n) return []; if (la && !k) {
                if (f = Qc.exec(c)) if (b = f[1]) if (9 === n) if ((e = a.getElementById(b)) && e.parentNode) { if (e.id === b) return d.push(e), d } else return d; else { if (a.ownerDocument && (e = a.ownerDocument.getElementById(b)) && Ta(a, e) && e.id === b) return d.push(e), d } else {
                    if (f[2]) return ua.apply(d, a.getElementsByTagName(c)),
                        d; if ((b = f[3]) && V.getElementsByClassName && a.getElementsByClassName) return ua.apply(d, a.getElementsByClassName(b)), d
                } if (V.qsa && (!fa || !fa.test(c))) { e = f = X; b = a; g = 9 === n && c; if (1 === n && "object" !== a.nodeName.toLowerCase()) { n = Za(c); (f = a.getAttribute("id")) ? e = f.replace(Rc, "\\$\x26") : a.setAttribute("id", e); e = "[id\x3d'" + e + "'] "; for (b = n.length; b--;)n[b] = e + $a(n[b]); b = qb.test(c) && a.parentNode || a; g = n.join(",") } if (g) try { return ua.apply(d, b.querySelectorAll(g)), d } catch (p) { } finally { f || a.removeAttribute("id") } }
            } var y;
            a: {
                c = c.replace(ab, "$1"); e = Za(c); if (!k && 1 === e.length) { f = e[0] = e[0].slice(0); if (2 < f.length && "ID" === (y = f[0]).type && V.getById && 9 === a.nodeType && la && Q.relative[f[1].type]) { a = (Q.find.ID(y.matches[0].replace(va, wa), a) || [])[0]; if (!a) { y = d; break a } c = c.slice(f.shift().value.length) } for (n = bb.needsContext.test(c) ? 0 : f.length; n--;) { y = f[n]; if (Q.relative[b = y.type]) break; if (b = Q.find[b]) if (k = b(y.matches[0].replace(va, wa), qb.test(f[0].type) && a.parentNode || a)) { f.splice(n, 1); c = k.length && $a(f); if (!c) { ua.apply(d, k); y = d; break a } break } } } rb(c,
                    e)(k, a, !la, d, qb.test(c)); y = d
            } return y
        }, sb = function () { function c(d, k) { a.push(d += " ") > Q.cacheLength && delete c[a.shift()]; return c[d] = k } var a = []; return c }, ia = function (c) { c[X] = !0; return c }, ja = function (c) { var a = aa.createElement("div"); try { return !!c(a) } catch (d) { return !1 } finally { a.parentNode && a.parentNode.removeChild(a) } }, tb = function (c, a) { for (var d = c.split("|"), k = c.length; k--;)Q.attrHandle[d[k]] = a }, Ub = function (c, a) {
            var d = a && c, k = d && 1 === c.nodeType && 1 === a.nodeType && (~a.sourceIndex || Tb) - (~c.sourceIndex || Tb);
            if (k) return k; if (d) for (; d = d.nextSibling;)if (d === a) return -1; return c ? 1 : -1
        }, Sc = function (c) { return function (a) { return "input" === a.nodeName.toLowerCase() && a.type === c } }, Tc = function (c) { return function (a) { var d = a.nodeName.toLowerCase(); return ("input" === d || "button" === d) && a.type === c } }, Fa = function (c) { return ia(function (a) { a = +a; return ia(function (d, k) { for (var f, e = c([], d.length, a), b = e.length; b--;)if (d[f = e[b]]) d[f] = !(k[f] = d[f]) }) }) }, Vb = function () { }, Za = function (c, a) {
            var d, k, f, e, b, n, g; if (b = Wb[c + " "]) return a ? 0 : b.slice(0);
            b = c; n = []; for (g = Q.preFilter; b;) { if (!d || (k = Uc.exec(b))) k && (b = b.slice(k[0].length) || b), n.push(f = []); d = !1; if (k = Vc.exec(b)) d = k.shift(), f.push({ value: d, type: k[0].replace(ab, " ") }), b = b.slice(d.length); for (e in Q.filter) if ((k = bb[e].exec(b)) && (!g[e] || (k = g[e](k)))) d = k.shift(), f.push({ value: d, type: e, matches: k }), b = b.slice(d.length); if (!d) break } return a ? b.length : b ? S.error(c) : Wb(c, n).slice(0)
        }, $a = function (c) { for (var a = 0, d = c.length, k = ""; a < d; a++)k += c[a].value; return k }, ub = function (c, a, d) {
            var k = a.dir, f = d && "parentNode" ===
                k, e = Wc++; return a.first ? function (a, d, e) { for (; a = a[k];)if (1 === a.nodeType || f) return c(a, d, e) } : function (a, d, b) { var n, g, p, y = ma + " " + e; if (b) for (; a = a[k];) { if ((1 === a.nodeType || f) && c(a, d, b)) return !0 } else for (; a = a[k];)if (1 === a.nodeType || f) if (p = a[X] || (a[X] = {}), (g = p[k]) && g[0] === y) { if (!0 === (n = g[1]) || n === cb) return !0 === n } else if (g = p[k] = [y], g[1] = c(a, d, b) || cb, !0 === g[1]) return !0 }
        }, vb = function (c) { return 1 < c.length ? function (a, d, k) { for (var f = c.length; f--;)if (!c[f](a, d, k)) return !1; return !0 } : c[0] }, db = function (c, a, d, k, f) {
            for (var e,
                b = [], n = 0, g = c.length, p = null != a; n < g; n++)if (e = c[n]) if (!d || d(e, k, f)) b.push(e), p && a.push(n); return b
        }, wb = function (c, a, d, k, f, e) {
            k && !k[X] && (k = wb(k)); f && !f[X] && (f = wb(f, e)); return ia(function (e, b, n, g) {
                var p, y, h = [], j = [], q = b.length, l; if (!(l = e)) { l = a || "*"; for (var C = n.nodeType ? [n] : n, m = [], r = 0, o = C.length; r < o; r++)S(l, C[r], m); l = m } l = c && (e || !a) ? db(l, h, c, n, g) : l; C = d ? f || (e ? c : q || k) ? [] : b : l; d && d(l, C, n, g); if (k) { p = db(C, j); k(p, [], n, g); for (n = p.length; n--;)if (y = p[n]) C[j[n]] = !(l[j[n]] = y) } if (e) {
                    if (f || c) {
                        if (f) {
                            p = []; for (n = C.length; n--;)if (y =
                                C[n]) p.push(l[n] = y); f(null, C = [], p, g)
                        } for (n = C.length; n--;)if ((y = C[n]) && -1 < (p = f ? Ga.call(e, y) : h[n])) e[p] = !(b[p] = y)
                    }
                } else C = db(C === b ? C.splice(q, C.length) : C), f ? f(null, b, C, g) : ua.apply(b, C)
            })
        }, xb = function (c) {
            var a, d, k, f = c.length, e = Q.relative[c[0].type]; d = e || Q.relative[" "]; for (var b = e ? 1 : 0, n = ub(function (c) { return c === a }, d, !0), g = ub(function (c) { return -1 < Ga.call(a, c) }, d, !0), p = [function (c, d, z) { return !e && (z || d !== eb) || ((a = d).nodeType ? n(c, d, z) : g(c, d, z)) }]; b < f; b++)if (d = Q.relative[c[b].type]) p = [ub(vb(p), d)]; else {
                d =
                Q.filter[c[b].type].apply(null, c[b].matches); if (d[X]) { for (k = ++b; k < f && !Q.relative[c[k].type]; k++); return wb(1 < b && vb(p), 1 < b && $a(c.slice(0, b - 1).concat({ value: " " === c[b - 2].type ? "*" : "" })).replace(ab, "$1"), d, b < k && xb(c.slice(b, k)), k < f && xb(c = c.slice(k)), k < f && $a(c)) } p.push(d)
            } return vb(p)
        }, Na, V, cb, Q, fb, Xb, rb, eb, Ha, Ea, aa, na, la, fa, Ia, gb, Ta, X = "sizzle" + -new Date, ra = pb.document, ma = 0, Wc = 0, Yb = sb(), Wb = sb(), Zb = sb(), Oa = !1, yb = function (c, a) { c === a && (Oa = !0); return 0 }, Tb = -2147483648, Xc = {}.hasOwnProperty, xa = [], Yc = xa.pop,
            Zc = xa.push, ua = xa.push, $b = xa.slice, Ga = xa.indexOf || function (c) { for (var a = 0, d = this.length; a < d; a++)if (this[a] === c) return a; return -1 }, ac = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ac + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", zb = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + bc.replace(3, 8) + ")*)|.*)\\)|)",
            ab = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), Uc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, Vc = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, qb = /[\x20\t\r\n\f]*[+~]/, $c = RegExp("\x3d[\\x20\\t\\r\\n\\f]*([^\\]'\"]*)[\\x20\\t\\r\\n\\f]*\\]", "g"), ad = RegExp(zb), bd = RegExp("^" + ac + "$"), bb = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"), ATTR: RegExp("^" + bc), PSEUDO: RegExp("^" +
                    zb), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"), needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[\x3e+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?\x3d[^-]|$)",
                        "i")
            }, Ab = /^[^{]+\{\s*\[native \w/, Qc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, cd = /^(?:input|select|textarea|button)$/i, dd = /^h\d$/i, Rc = /'|\\/g, va = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), wa = function (c, a, d) { c = "0x" + a - 65536; return c !== c || d ? a : 0 > c ? String.fromCharCode(c + 65536) : String.fromCharCode(c >> 10 | 55296, c & 1023 | 56320) }; try { ua.apply(xa = $b.call(ra.childNodes), ra.childNodes), xa[ra.childNodes.length].nodeType } catch (Gd) {
                ua = {
                    apply: xa.length ? function (c, a) { Zc.apply(c, $b.call(a)) } :
                        function (c, a) { for (var d = c.length, k = 0; c[d++] = a[k++];); c.length = d - 1 }
                }
            } Xb = S.isXML = function (c) { return (c = c && (c.ownerDocument || c).documentElement) ? "HTML" !== c.nodeName : !1 }; V = S.support = {}; Ea = S.setDocument = function (c) {
                var a = c ? c.ownerDocument || c : ra; c = a.defaultView; if (a === aa || 9 !== a.nodeType || !a.documentElement) return aa; aa = a; na = a.documentElement; la = !Xb(a); c && (c.attachEvent && c !== c.top) && c.attachEvent("onbeforeunload", function () { Ea() }); V.attributes = ja(function (c) { c.className = "i"; return !c.getAttribute("className") });
                V.getElementsByTagName = ja(function (c) { c.appendChild(a.createComment("")); return !c.getElementsByTagName("*").length }); V.getElementsByClassName = ja(function (c) { c.innerHTML = "\x3cdiv class\x3d'a'\x3e\x3c/div\x3e\x3cdiv class\x3d'a i'\x3e\x3c/div\x3e"; c.firstChild.className = "i"; return 2 === c.getElementsByClassName("i").length }); V.getById = ja(function (c) { na.appendChild(c).id = X; return !a.getElementsByName || !a.getElementsByName(X).length }); V.getById ? (Q.find.ID = function (c, a) {
                    if ("undefined" !== typeof a.getElementById &&
                        la) { var d = a.getElementById(c); return d && d.parentNode ? [d] : [] }
                }, Q.filter.ID = function (c) { var a = c.replace(va, wa); return function (c) { return c.getAttribute("id") === a } }) : (delete Q.find.ID, Q.filter.ID = function (c) { var a = c.replace(va, wa); return function (c) { return (c = "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id")) && c.value === a } }); Q.find.TAG = V.getElementsByTagName ? function (c, a) { if ("undefined" !== typeof a.getElementsByTagName) return a.getElementsByTagName(c) } : function (c, a) {
                    var d, k = [], z = 0, f = a.getElementsByTagName(c);
                    if ("*" === c) { for (; d = f[z++];)1 === d.nodeType && k.push(d); return k } return f
                }; Q.find.CLASS = V.getElementsByClassName && function (c, a) { if ("undefined" !== typeof a.getElementsByClassName && la) return a.getElementsByClassName(c) }; Ia = []; fa = []; if (V.qsa = Ab.test(a.querySelectorAll)) ja(function (c) {
                    c.innerHTML = "\x3cselect\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e"; c.querySelectorAll("[selected]").length || fa.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    c.querySelectorAll(":checked").length || fa.push(":checked")
                }), ja(function (c) { var d = a.createElement("input"); d.setAttribute("type", "hidden"); c.appendChild(d).setAttribute("t", ""); c.querySelectorAll("[t^\x3d'']").length && fa.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")"); c.querySelectorAll(":enabled").length || fa.push(":enabled", ":disabled"); c.querySelectorAll("*,:x"); fa.push(",.*:") }); (V.matchesSelector = Ab.test(gb = na.webkitMatchesSelector || na.mozMatchesSelector || na.oMatchesSelector || na.msMatchesSelector)) &&
                    ja(function (c) { V.disconnectedMatch = gb.call(c, "div"); gb.call(c, "[s!\x3d'']:x"); Ia.push("!\x3d", zb) }); fa = fa.length && RegExp(fa.join("|")); Ia = Ia.length && RegExp(Ia.join("|")); Ta = Ab.test(na.contains) || na.compareDocumentPosition ? function (c, a) { var d = 9 === c.nodeType ? c.documentElement : c, k = a && a.parentNode; return c === k || !(!k || !(1 === k.nodeType && (d.contains ? d.contains(k) : c.compareDocumentPosition && c.compareDocumentPosition(k) & 16))) } : function (c, a) { if (a) for (; a = a.parentNode;)if (a === c) return !0; return !1 }; yb = na.compareDocumentPosition ?
                        function (c, d) { if (c === d) return Oa = !0, 0; var k = d.compareDocumentPosition && c.compareDocumentPosition && c.compareDocumentPosition(d); return k ? k & 1 || !V.sortDetached && d.compareDocumentPosition(c) === k ? c === a || Ta(ra, c) ? -1 : d === a || Ta(ra, d) ? 1 : Ha ? Ga.call(Ha, c) - Ga.call(Ha, d) : 0 : k & 4 ? -1 : 1 : c.compareDocumentPosition ? -1 : 1 } : function (c, d) {
                            var k, z = 0; k = c.parentNode; var f = d.parentNode, e = [c], b = [d]; if (c === d) return Oa = !0, 0; if (!k || !f) return c === a ? -1 : d === a ? 1 : k ? -1 : f ? 1 : Ha ? Ga.call(Ha, c) - Ga.call(Ha, d) : 0; if (k === f) return Ub(c, d); for (k =
                                c; k = k.parentNode;)e.unshift(k); for (k = d; k = k.parentNode;)b.unshift(k); for (; e[z] === b[z];)z++; return z ? Ub(e[z], b[z]) : e[z] === ra ? -1 : b[z] === ra ? 1 : 0
                        }; return a
            }; S.matches = function (c, a) { return S(c, null, null, a) }; S.matchesSelector = function (c, a) { (c.ownerDocument || c) !== aa && Ea(c); a = a.replace($c, "\x3d'$1']"); if (V.matchesSelector && la && (!Ia || !Ia.test(a)) && (!fa || !fa.test(a))) try { var d = gb.call(c, a); if (d || V.disconnectedMatch || c.document && 11 !== c.document.nodeType) return d } catch (k) { } return 0 < S(a, aa, null, [c]).length }; S.contains =
                function (c, a) { (c.ownerDocument || c) !== aa && Ea(c); return Ta(c, a) }; S.attr = function (c, a) { (c.ownerDocument || c) !== aa && Ea(c); var d = Q.attrHandle[a.toLowerCase()], d = d && Xc.call(Q.attrHandle, a.toLowerCase()) ? d(c, a, !la) : void 0; return void 0 === d ? V.attributes || !la ? c.getAttribute(a) : (d = c.getAttributeNode(a)) && d.specified ? d.value : null : d }; S.error = function (c) { throw Error("Syntax error, unrecognized expression: " + c); }; S.uniqueSort = function (c) {
                    var a, d = [], k = 0, f = 0; Oa = !V.detectDuplicates; Ha = !V.sortStable && c.slice(0); c.sort(yb);
                    if (Oa) { for (; a = c[f++];)a === c[f] && (k = d.push(f)); for (; k--;)c.splice(d[k], 1) } return c
                }; fb = S.getText = function (c) { var a, d = "", k = 0; if (a = c.nodeType) if (1 === a || 9 === a || 11 === a) { if ("string" === typeof c.textContent) return c.textContent; for (c = c.firstChild; c; c = c.nextSibling)d += fb(c) } else { if (3 === a || 4 === a) return c.nodeValue } else for (; a = c[k]; k++)d += fb(a); return d }; Q = S.selectors = {
                    cacheLength: 50, createPseudo: ia, match: bb, attrHandle: {}, find: {}, relative: {
                        "\x3e": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": {
                            dir: "previousSibling",
                            first: !0
                        }, "~": { dir: "previousSibling" }
                    }, preFilter: {
                        ATTR: function (c) { c[1] = c[1].replace(va, wa); c[3] = (c[4] || c[5] || "").replace(va, wa); "~\x3d" === c[2] && (c[3] = " " + c[3] + " "); return c.slice(0, 4) }, CHILD: function (c) { c[1] = c[1].toLowerCase(); "nth" === c[1].slice(0, 3) ? (c[3] || S.error(c[0]), c[4] = +(c[4] ? c[5] + (c[6] || 1) : 2 * ("even" === c[3] || "odd" === c[3])), c[5] = +(c[7] + c[8] || "odd" === c[3])) : c[3] && S.error(c[0]); return c }, PSEUDO: function (c) {
                            var a, d = !c[5] && c[2]; if (bb.CHILD.test(c[0])) return null; if (c[3] && void 0 !== c[4]) c[2] = c[4];
                            else if (d && ad.test(d) && (a = Za(d, !0)) && (a = d.indexOf(")", d.length - a) - d.length)) c[0] = c[0].slice(0, a), c[2] = d.slice(0, a); return c.slice(0, 3)
                        }
                    }, filter: {
                        TAG: function (c) { var a = c.replace(va, wa).toLowerCase(); return "*" === c ? function () { return !0 } : function (c) { return c.nodeName && c.nodeName.toLowerCase() === a } }, CLASS: function (c) {
                            var a = Yb[c + " "]; return a || (a = RegExp("(^|[\\x20\\t\\r\\n\\f])" + c + "([\\x20\\t\\r\\n\\f]|$)")) && Yb(c, function (c) {
                                return a.test("string" === typeof c.className && c.className || "undefined" !== typeof c.getAttribute &&
                                    c.getAttribute("class") || "")
                            })
                        }, ATTR: function (c, a, d) { return function (k) { k = S.attr(k, c); if (null == k) return "!\x3d" === a; if (!a) return !0; k += ""; return "\x3d" === a ? k === d : "!\x3d" === a ? k !== d : "^\x3d" === a ? d && 0 === k.indexOf(d) : "*\x3d" === a ? d && -1 < k.indexOf(d) : "$\x3d" === a ? d && k.slice(-d.length) === d : "~\x3d" === a ? -1 < (" " + k + " ").indexOf(d) : "|\x3d" === a ? k === d || k.slice(0, d.length + 1) === d + "-" : !1 } }, CHILD: function (c, a, d, k, f) {
                            var e = "nth" !== c.slice(0, 3), b = "last" !== c.slice(-4), n = "of-type" === a; return 1 === k && 0 === f ? function (c) { return !!c.parentNode } :
                                function (a, d, g) {
                                    var p, y, h, j, q; d = e !== b ? "nextSibling" : "previousSibling"; var l = a.parentNode, C = n && a.nodeName.toLowerCase(); g = !g && !n; if (l) {
                                        if (e) { for (; d;) { for (y = a; y = y[d];)if (n ? y.nodeName.toLowerCase() === C : 1 === y.nodeType) return !1; q = d = "only" === c && !q && "nextSibling" } return !0 } q = [b ? l.firstChild : l.lastChild]; if (b && g) { g = l[X] || (l[X] = {}); p = g[c] || []; j = p[0] === ma && p[1]; h = p[0] === ma && p[2]; for (y = j && l.childNodes[j]; y = ++j && y && y[d] || (h = j = 0) || q.pop();)if (1 === y.nodeType && ++h && y === a) { g[c] = [ma, j, h]; break } } else if (g && (p = (a[X] ||
                                            (a[X] = {}))[c]) && p[0] === ma) h = p[1]; else for (; y = ++j && y && y[d] || (h = j = 0) || q.pop();)if ((n ? y.nodeName.toLowerCase() === C : 1 === y.nodeType) && ++h) if (g && ((y[X] || (y[X] = {}))[c] = [ma, h]), y === a) break; h -= f; return h === k || 0 === h % k && 0 <= h / k
                                    }
                                }
                        }, PSEUDO: function (c, a) {
                            var d, k = Q.pseudos[c] || Q.setFilters[c.toLowerCase()] || S.error("unsupported pseudo: " + c); return k[X] ? k(a) : 1 < k.length ? (d = [c, c, "", a], Q.setFilters.hasOwnProperty(c.toLowerCase()) ? ia(function (c, d) { for (var f, e = k(c, a), z = e.length; z--;)f = Ga.call(c, e[z]), c[f] = !(d[f] = e[z]) }) :
                                function (c) { return k(c, 0, d) }) : k
                        }
                    }, pseudos: {
                        not: ia(function (c) { var a = [], d = [], k = rb(c.replace(ab, "$1")); return k[X] ? ia(function (c, a, d, f) { f = k(c, null, f, []); for (var e = c.length; e--;)if (d = f[e]) c[e] = !(a[e] = d) }) : function (c, f, e) { a[0] = c; k(a, null, e, d); return !d.pop() } }), has: ia(function (c) { return function (a) { return 0 < S(c, a).length } }), contains: ia(function (c) { return function (a) { return -1 < (a.textContent || a.innerText || fb(a)).indexOf(c) } }), lang: ia(function (c) {
                            bd.test(c || "") || S.error("unsupported lang: " + c); c = c.replace(va,
                                wa).toLowerCase(); return function (a) { var d; do if (d = la ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang")) return d = d.toLowerCase(), d === c || 0 === d.indexOf(c + "-"); while ((a = a.parentNode) && 1 === a.nodeType); return !1 }
                        }), target: function (c) { var a = pb.location && pb.location.hash; return a && a.slice(1) === c.id }, root: function (c) { return c === na }, focus: function (c) { return c === aa.activeElement && (!aa.hasFocus || aa.hasFocus()) && !(!c.type && !c.href && !~c.tabIndex) }, enabled: function (c) { return !1 === c.disabled }, disabled: function (c) {
                            return !0 ===
                                c.disabled
                        }, checked: function (c) { var a = c.nodeName.toLowerCase(); return "input" === a && !!c.checked || "option" === a && !!c.selected }, selected: function (c) { c.parentNode && c.parentNode.selectedIndex; return !0 === c.selected }, empty: function (c) { for (c = c.firstChild; c; c = c.nextSibling)if ("@" < c.nodeName || 3 === c.nodeType || 4 === c.nodeType) return !1; return !0 }, parent: function (c) { return !Q.pseudos.empty(c) }, header: function (c) { return dd.test(c.nodeName) }, input: function (c) { return cd.test(c.nodeName) }, button: function (c) {
                            var a = c.nodeName.toLowerCase();
                            return "input" === a && "button" === c.type || "button" === a
                        }, text: function (c) { var a; return "input" === c.nodeName.toLowerCase() && "text" === c.type && (null == (a = c.getAttribute("type")) || a.toLowerCase() === c.type) }, first: Fa(function () { return [0] }), last: Fa(function (c, a) { return [a - 1] }), eq: Fa(function (c, a, d) { return [0 > d ? d + a : d] }), even: Fa(function (c, a) { for (var d = 0; d < a; d += 2)c.push(d); return c }), odd: Fa(function (c, a) { for (var d = 1; d < a; d += 2)c.push(d); return c }), lt: Fa(function (c, a, d) { for (a = 0 > d ? d + a : d; 0 <= --a;)c.push(a); return c }), gt: Fa(function (c,
                            a, d) { for (d = 0 > d ? d + a : d; ++d < a;)c.push(d); return c })
                    }
                }; Q.pseudos.nth = Q.pseudos.eq; for (Na in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) Q.pseudos[Na] = Sc(Na); for (Na in { submit: !0, reset: !0 }) Q.pseudos[Na] = Tc(Na); Vb.prototype = Q.filters = Q.pseudos; Q.setFilters = new Vb; rb = S.compile = function (c, a) {
                    var d, k = [], f = [], e = Zb[c + " "]; if (!e) {
                        a || (a = Za(c)); for (d = a.length; d--;)e = xb(a[d]), e[X] ? k.push(e) : f.push(e); var b = 0, n = 0 < k.length, g = 0 < f.length; d = function (c, a, d, e, z) {
                            var p, y, h = [], j = 0, q = "0", l = c && [], C = null != z, m = eb, r = c ||
                                g && Q.find.TAG("*", z && a.parentNode || a), o = ma += null == m ? 1 : Math.random() || 0.1; C && (eb = a !== aa && a, cb = b); for (; null != (z = r[q]); q++) { if (g && z) { for (p = 0; y = f[p++];)if (y(z, a, d)) { e.push(z); break } C && (ma = o, cb = ++b) } n && ((z = !y && z) && j--, c && l.push(z)) } j += q; if (n && q !== j) { for (p = 0; y = k[p++];)y(l, h, a, d); if (c) { if (0 < j) for (; q--;)!l[q] && !h[q] && (h[q] = Yc.call(e)); h = db(h) } ua.apply(e, h); C && (!c && 0 < h.length && 1 < j + k.length) && S.uniqueSort(e) } C && (ma = o, eb = m); return l
                        }; d = n ? ia(d) : d; e = Zb(c, d)
                    } return e
                }; V.sortStable = X.split("").sort(yb).join("") ===
                    X; V.detectDuplicates = Oa; Ea(); V.sortDetached = ja(function (c) { return c.compareDocumentPosition(aa.createElement("div")) & 1 }); ja(function (c) { c.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e"; return "#" === c.firstChild.getAttribute("href") }) || tb("type|href|height|width", function (c, a, d) { if (!d) return c.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2) }); (!V.attributes || !ja(function (c) { c.innerHTML = "\x3cinput/\x3e"; c.firstChild.setAttribute("value", ""); return "" === c.firstChild.getAttribute("value") })) && tb("value", function (c,
                        a, d) { if (!d && "input" === c.nodeName.toLowerCase()) return c.defaultValue }); ja(function (c) { return null == c.getAttribute("disabled") }) || tb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (c, a, d) { var k; if (!d) return (k = c.getAttributeNode(a)) && k.specified ? k.value : !0 === c[a] ? a.toLowerCase() : null }); m.find = S; m.expr = S.selectors; m.expr[":"] = m.expr.pseudos; m.unique = S.uniqueSort; m.text = S.getText; m.isXMLDoc = S.isXML; m.contains = S.contains;
    var cc = {}; m.Callbacks = function (c) {
        var a; if ("string" === typeof c) { if (!(a = cc[c])) { a = c; var d = cc[a] = {}; m.each(a.match(pa) || [], function (c, a) { d[a] = !0 }); a = d } } else a = m.extend({}, c); c = a; var k, f, e, b, n, g, p = [], y = !c.once && [], h = function (a) { f = c.memory && a; e = !0; n = g || 0; g = 0; b = p.length; for (k = !0; p && n < b; n++)if (!1 === p[n].apply(a[0], a[1]) && c.stopOnFalse) { f = !1; break } k = !1; p && (y ? y.length && h(y.shift()) : f ? p = [] : j.disable()) }, j = {
            add: function () {
                if (p) {
                    var a = p.length; (function Ec(a) {
                        m.each(a, function (a, d) {
                            var k = m.type(d); "function" ===
                                k ? (!c.unique || !j.has(d)) && p.push(d) : d && (d.length && "string" !== k) && Ec(d)
                        })
                    })(arguments); k ? b = p.length : f && (g = a, h(f))
                } return this
            }, remove: function () { p && m.each(arguments, function (c, a) { for (var d; -1 < (d = m.inArray(a, p, d));)p.splice(d, 1), k && (d <= b && b--, d <= n && n--) }); return this }, has: function (c) { return c ? -1 < m.inArray(c, p) : !(!p || !p.length) }, empty: function () { p = []; b = 0; return this }, disable: function () { p = y = f = o; return this }, disabled: function () { return !p }, lock: function () { y = o; f || j.disable(); return this }, locked: function () { return !y },
            fireWith: function (c, a) { if (p && (!e || y)) a = a || [], a = [c, a.slice ? a.slice() : a], k ? y.push(a) : h(a); return this }, fire: function () { j.fireWith(this, arguments); return this }, fired: function () { return !!e }
        }; return j
    }; m.extend({
        Deferred: function (c) {
            var a = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], d = "pending", k = {
                state: function () { return d }, always: function () { f.done(arguments).fail(arguments); return this }, then: function () {
                    var c =
                        arguments; return m.Deferred(function (d) { m.each(a, function (a, e) { var b = e[0], z = m.isFunction(c[a]) && c[a]; f[e[1]](function () { var c = z && z.apply(this, arguments); if (c && m.isFunction(c.promise)) c.promise().done(d.resolve).fail(d.reject).progress(d.notify); else d[b + "With"](this === k ? d.promise() : this, z ? [c] : arguments) }) }); c = null }).promise()
                }, promise: function (c) { return null != c ? m.extend(c, k) : k }
            }, f = {}; k.pipe = k.then; m.each(a, function (c, e) {
                var b = e[2], z = e[3]; k[e[1]] = b.add; z && b.add(function () { d = z }, a[c ^ 1][2].disable, a[2][2].lock);
                f[e[0]] = function () { f[e[0] + "With"](this === f ? k : this, arguments); return this }; f[e[0] + "With"] = b.fireWith
            }); k.promise(f); c && c.call(f, f); return f
        }, when: function (c) {
            var a = 0, d = U.call(arguments), k = d.length, f = 1 !== k || c && m.isFunction(c.promise) ? k : 0, e = 1 === f ? c : m.Deferred(), b = function (c, a, d) { return function (k) { a[c] = this; d[c] = 1 < arguments.length ? U.call(arguments) : k; d === n ? e.notifyWith(a, d) : --f || e.resolveWith(a, d) } }, n, g, p; if (1 < k) {
                n = Array(k); g = Array(k); for (p = Array(k); a < k; a++)d[a] && m.isFunction(d[a].promise) ? d[a].promise().done(b(a,
                    p, d)).fail(e.reject).progress(b(a, g, n)) : --f
            } f || e.resolveWith(p, d); return e.promise()
        }
    }); var ed = m; var N = {}, Bb, ya, ba, hb, ib, jb, Cb, dc, Ua, P = K.createElement("div"); P.setAttribute("className", "t"); P.innerHTML = "  \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e"; Bb = P.getElementsByTagName("*") || []; if ((ya = P.getElementsByTagName("a")[0]) && ya.style && Bb.length) {
        hb = K.createElement("select"); jb = hb.appendChild(K.createElement("option")); ba = P.getElementsByTagName("input")[0];
        ya.style.cssText = "top:1px;float:left;opacity:.5"; N.getSetAttribute = "t" !== P.className; N.leadingWhitespace = 3 === P.firstChild.nodeType; N.tbody = !P.getElementsByTagName("tbody").length; N.htmlSerialize = !!P.getElementsByTagName("link").length; N.style = /top/.test(ya.getAttribute("style")); N.hrefNormalized = "/a" === ya.getAttribute("href"); N.opacity = /^0.5/.test(ya.style.opacity); N.cssFloat = !!ya.style.cssFloat; N.checkOn = !!ba.value; N.optSelected = jb.selected; N.enctype = !!K.createElement("form").enctype; N.html5Clone =
            "\x3c:nav\x3e\x3c/:nav\x3e" !== K.createElement("nav").cloneNode(!0).outerHTML; N.inlineBlockNeedsLayout = !1; N.shrinkWrapBlocks = !1; N.pixelPosition = !1; N.deleteExpando = !0; N.noCloneEvent = !0; N.reliableMarginRight = !0; N.boxSizingReliable = !0; ba.checked = !0; N.noCloneChecked = ba.cloneNode(!0).checked; hb.disabled = !0; N.optDisabled = !jb.disabled; try { delete P.test } catch (Hd) { N.deleteExpando = !1 } ba = K.createElement("input"); ba.setAttribute("value", ""); N.input = "" === ba.getAttribute("value"); ba.value = "t"; ba.setAttribute("type",
                "radio"); N.radioValue = "t" === ba.value; ba.setAttribute("checked", "t"); ba.setAttribute("name", "t"); ib = K.createDocumentFragment(); ib.appendChild(ba); N.appendChecked = ba.checked; N.checkClone = ib.cloneNode(!0).cloneNode(!0).lastChild.checked; P.attachEvent && (P.attachEvent("onclick", function () { N.noCloneEvent = !1 }), P.cloneNode(!0).click()); for (Ua in { submit: !0, change: !0, focusin: !0 }) P.setAttribute(Cb = "on" + Ua, "t"), N[Ua + "Bubbles"] = Cb in b || !1 === P.attributes[Cb].expando; P.style.backgroundClip = "content-box"; P.cloneNode(!0).style.backgroundClip =
                    ""; N.clearCloneStyle = "content-box" === P.style.backgroundClip; for (Ua in m(N)) break; N.ownLast = "0" !== Ua; m(function () {
                        var c, a, d = K.getElementsByTagName("body")[0]; d && (c = K.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", d.appendChild(c).appendChild(P), P.innerHTML = "\x3ctable\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e", a = P.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                            dc = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", N.reliableHiddenOffsets = dc && 0 === a[0].offsetHeight, P.innerHTML = "", P.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", m.swap(d, null != d.style.zoom ? { zoom: 1 } : {}, function () { N.boxSizing = 4 === P.offsetWidth }), b.getComputedStyle && (N.pixelPosition = "1%" !== (b.getComputedStyle(P, null) || {}).top, N.boxSizingReliable =
                                "4px" === (b.getComputedStyle(P, null) || { width: "4px" }).width, a = P.appendChild(K.createElement("div")), a.style.cssText = P.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a.style.marginRight = a.style.width = "0", P.style.width = "1px", N.reliableMarginRight = !parseFloat((b.getComputedStyle(a, null) || {}).marginRight)), typeof P.style.zoom !== oa && (P.innerHTML = "", P.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1",
                                    N.inlineBlockNeedsLayout = 3 === P.offsetWidth, P.style.display = "block", P.innerHTML = "\x3cdiv\x3e\x3c/div\x3e", P.firstChild.style.width = "5px", N.shrinkWrapBlocks = 3 !== P.offsetWidth, N.inlineBlockNeedsLayout && (d.style.zoom = 1)), d.removeChild(c), c = P = a = a = null)
                    }); Bb = hb = ib = jb = ya = ba = null
    } ed.support = N; var zc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, yc = /([A-Z])/g; m.extend({
        cache: {}, noData: { applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (c) {
            c = c.nodeType ? m.cache[c[m.expando]] : c[m.expando];
            return !!c && !a(c)
        }, data: function (c, a, d) { return h(c, a, d) }, removeData: function (c, a) { return g(c, a) }, _data: function (c, a, d) { return h(c, a, d, !0) }, _removeData: function (c, a) { return g(c, a, !0) }, acceptData: function (c) { if (c.nodeType && 1 !== c.nodeType && 9 !== c.nodeType) return !1; var a = c.nodeName && m.noData[c.nodeName.toLowerCase()]; return !a || !0 !== a && c.getAttribute("classid") === a }
    }); m.fn.extend({
        data: function (c, a) {
            var d, k, f = null, b = 0, n = this[0]; if (c === o) {
                if (this.length && (f = m.data(n), 1 === n.nodeType && !m._data(n, "parsedAttrs"))) {
                    for (d =
                        n.attributes; b < d.length; b++)k = d[b].name, 0 === k.indexOf("data-") && (k = m.camelCase(k.slice(5)), e(n, k, f[k])); m._data(n, "parsedAttrs", !0)
                } return f
            } return "object" === typeof c ? this.each(function () { m.data(this, c) }) : 1 < arguments.length ? this.each(function () { m.data(this, c, a) }) : n ? e(n, c, m.data(n, c)) : null
        }, removeData: function (c) { return this.each(function () { m.removeData(this, c) }) }
    }); m.extend({
        queue: function (c, a, d) {
            var k; if (c) return a = (a || "fx") + "queue", k = m._data(c, a), d && (!k || m.isArray(d) ? k = m._data(c, a, m.makeArray(d)) :
                k.push(d)), k || []
        }, dequeue: function (c, a) { a = a || "fx"; var d = m.queue(c, a), k = d.length, f = d.shift(), e = m._queueHooks(c, a), b = function () { m.dequeue(c, a) }; "inprogress" === f && (f = d.shift(), k--); f && ("fx" === a && d.unshift("inprogress"), delete e.stop, f.call(c, b, e)); !k && e && e.empty.fire() }, _queueHooks: function (c, a) { var d = a + "queueHooks"; return m._data(c, d) || m._data(c, d, { empty: m.Callbacks("once memory").add(function () { m._removeData(c, a + "queue"); m._removeData(c, d) }) }) }
    }); m.fn.extend({
        queue: function (c, a) {
            var d = 2; "string" !==
                typeof c && (a = c, c = "fx", d--); return arguments.length < d ? m.queue(this[0], c) : a === o ? this : this.each(function () { var d = m.queue(this, c, a); m._queueHooks(this, c); "fx" === c && "inprogress" !== d[0] && m.dequeue(this, c) })
        }, dequeue: function (c) { return this.each(function () { m.dequeue(this, c) }) }, delay: function (c, a) { c = m.fx ? m.fx.speeds[c] || c : c; return this.queue(a || "fx", function (a, d) { var k = setTimeout(a, c); d.stop = function () { clearTimeout(k) } }) }, clearQueue: function (c) { return this.queue(c || "fx", []) }, promise: function (c, a) {
            var d, k =
                1, f = m.Deferred(), e = this, b = this.length, n = function () { --k || f.resolveWith(e, [e]) }; "string" !== typeof c && (a = c, c = o); for (c = c || "fx"; b--;)if ((d = m._data(e[b], c + "queueHooks")) && d.empty) k++, d.empty.add(n); n(); return f.promise(a)
        }
    }); var Pa, ec, Db = /[\t\r\n\f]/g, fd = /\r/g, gd = /^(?:input|select|textarea|button|object)$/i, hd = /^(?:a|area)$/i, Eb = /^(?:checked|selected)$/i, Ja = m.support.getSetAttribute, kb = m.support.input; m.fn.extend({
        attr: function (c, a) { return m.access(this, m.attr, c, a, 1 < arguments.length) }, removeAttr: function (c) {
            return this.each(function () {
                m.removeAttr(this,
                    c)
            })
        }, prop: function (c, a) { return m.access(this, m.prop, c, a, 1 < arguments.length) }, removeProp: function (c) { c = m.propFix[c] || c; return this.each(function () { try { this[c] = o, delete this[c] } catch (a) { } }) }, addClass: function (c) {
            var a, d, k, f, e, b = 0, n = this.length; a = "string" === typeof c && c; if (m.isFunction(c)) return this.each(function (a) { m(this).addClass(c.call(this, a, this.className)) }); if (a) for (a = (c || "").match(pa) || []; b < n; b++)if (d = this[b], k = 1 === d.nodeType && (d.className ? (" " + d.className + " ").replace(Db, " ") : " ")) {
                for (e =
                    0; f = a[e++];)0 > k.indexOf(" " + f + " ") && (k += f + " "); d.className = m.trim(k)
            } return this
        }, removeClass: function (c) {
            var a, d, k, f, e, b = 0, n = this.length; a = 0 === arguments.length || "string" === typeof c && c; if (m.isFunction(c)) return this.each(function (a) { m(this).removeClass(c.call(this, a, this.className)) }); if (a) for (a = (c || "").match(pa) || []; b < n; b++)if (d = this[b], k = 1 === d.nodeType && (d.className ? (" " + d.className + " ").replace(Db, " ") : "")) {
                for (e = 0; f = a[e++];)for (; 0 <= k.indexOf(" " + f + " ");)k = k.replace(" " + f + " ", " "); d.className =
                    c ? m.trim(k) : ""
            } return this
        }, toggleClass: function (c, a) {
            var d = typeof c; return "boolean" === typeof a && "string" === d ? a ? this.addClass(c) : this.removeClass(c) : m.isFunction(c) ? this.each(function (d) { m(this).toggleClass(c.call(this, d, this.className, a), a) }) : this.each(function () {
                if ("string" === d) for (var a, k = 0, f = m(this), e = c.match(pa) || []; a = e[k++];)f.hasClass(a) ? f.removeClass(a) : f.addClass(a); else if (d === oa || "boolean" === d) this.className && m._data(this, "__className__", this.className), this.className = this.className || !1 ===
                    c ? "" : m._data(this, "__className__") || ""
            })
        }, hasClass: function (c) { c = " " + c + " "; for (var a = 0, d = this.length; a < d; a++)if (1 === this[a].nodeType && 0 <= (" " + this[a].className + " ").replace(Db, " ").indexOf(c)) return !0; return !1 }, val: function (c) {
            var a, d, k, f = this[0]; if (arguments.length) return k = m.isFunction(c), this.each(function (a) {
                if (1 === this.nodeType && (a = k ? c.call(this, a, m(this).val()) : c, null == a ? a = "" : "number" === typeof a ? a += "" : m.isArray(a) && (a = m.map(a, function (c) { return null == c ? "" : c + "" })), d = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()],
                    !d || !("set" in d) || d.set(this, a, "value") === o)) this.value = a
            }); if (f) { if ((d = m.valHooks[f.type] || m.valHooks[f.nodeName.toLowerCase()]) && "get" in d && (a = d.get(f, "value")) !== o) return a; a = f.value; return "string" === typeof a ? a.replace(fd, "") : null == a ? "" : a }
        }
    }); m.extend({
        valHooks: {
            option: { get: function (c) { var a = m.find.attr(c, "value"); return null != a ? a : c.text } }, select: {
                get: function (c) {
                    for (var a, d = c.options, k = c.selectedIndex, f = (c = "select-one" === c.type || 0 > k) ? null : [], e = c ? k + 1 : d.length, b = 0 > k ? e : c ? k : 0; b < e; b++)if (a = d[b], (a.selected ||
                        b === k) && (m.support.optDisabled ? !a.disabled : null === a.getAttribute("disabled")) && (!a.parentNode.disabled || !m.nodeName(a.parentNode, "optgroup"))) { a = m(a).val(); if (c) return a; f.push(a) } return f
                }, set: function (c, a) { for (var d, k, f = c.options, e = m.makeArray(a), b = f.length; b--;)if (k = f[b], k.selected = 0 <= m.inArray(m(k).val(), e)) d = !0; d || (c.selectedIndex = -1); return e }
            }
        }, attr: function (c, a, d) {
            var k, f, e = c.nodeType; if (c && !(3 === e || 8 === e || 2 === e)) {
                if (typeof c.getAttribute === oa) return m.prop(c, a, d); if (1 !== e || !m.isXMLDoc(c)) a =
                    a.toLowerCase(), k = m.attrHooks[a] || (m.expr.match.bool.test(a) ? ec : Pa); if (d !== o) if (null === d) m.removeAttr(c, a); else { if (k && "set" in k && (f = k.set(c, d, a)) !== o) return f; c.setAttribute(a, d + ""); return d } else { if (k && "get" in k && null !== (f = k.get(c, a))) return f; f = m.find.attr(c, a); return null == f ? o : f }
            }
        }, removeAttr: function (c, a) {
            var d, k, f = 0, e = a && a.match(pa); if (e && 1 === c.nodeType) for (; d = e[f++];)k = m.propFix[d] || d, m.expr.match.bool.test(d) ? kb && Ja || !Eb.test(d) ? c[k] = !1 : c[m.camelCase("default-" + d)] = c[k] = !1 : m.attr(c, d, ""), c.removeAttribute(Ja ?
                d : k)
        }, attrHooks: { type: { set: function (c, a) { if (!m.support.radioValue && "radio" === a && m.nodeName(c, "input")) { var d = c.value; c.setAttribute("type", a); d && (c.value = d); return a } } } }, propFix: { "for": "htmlFor", "class": "className" }, prop: function (c, a, d) { var k, f, e; e = c.nodeType; if (c && !(3 === e || 8 === e || 2 === e)) { if (e = 1 !== e || !m.isXMLDoc(c)) a = m.propFix[a] || a, f = m.propHooks[a]; return d !== o ? f && "set" in f && (k = f.set(c, d, a)) !== o ? k : c[a] = d : f && "get" in f && null !== (k = f.get(c, a)) ? k : c[a] } }, propHooks: {
            tabIndex: {
                get: function (c) {
                    var a = m.find.attr(c,
                        "tabindex"); return a ? parseInt(a, 10) : gd.test(c.nodeName) || hd.test(c.nodeName) && c.href ? 0 : -1
                }
            }
        }
    }); ec = { set: function (c, a, d) { !1 === a ? m.removeAttr(c, d) : kb && Ja || !Eb.test(d) ? c.setAttribute(!Ja && m.propFix[d] || d, d) : c[m.camelCase("default-" + d)] = c[d] = !0; return d } }; m.each(m.expr.match.bool.source.match(/\w+/g), function (c, a) {
        var d = m.expr.attrHandle[a] || m.find.attr; m.expr.attrHandle[a] = kb && Ja || !Eb.test(a) ? function (c, a, k) {
            var f = m.expr.attrHandle[a]; c = k ? o : (m.expr.attrHandle[a] = o) != d(c, a, k) ? a.toLowerCase() : null; m.expr.attrHandle[a] =
                f; return c
        } : function (c, a, d) { return d ? o : c[m.camelCase("default-" + a)] ? a.toLowerCase() : null }
    }); if (!kb || !Ja) m.attrHooks.value = { set: function (c, a, d) { if (m.nodeName(c, "input")) c.defaultValue = a; else return Pa && Pa.set(c, a, d) } }; Ja || (Pa = { set: function (c, a, d) { var k = c.getAttributeNode(d); k || c.setAttributeNode(k = c.ownerDocument.createAttribute(d)); k.value = a += ""; return "value" === d || a === c.getAttribute(d) ? a : o } }, m.expr.attrHandle.id = m.expr.attrHandle.name = m.expr.attrHandle.coords = function (c, a, d) {
        var k; return d ? o : (k = c.getAttributeNode(a)) &&
            "" !== k.value ? k.value : null
    }, m.valHooks.button = { get: function (c, a) { var d = c.getAttributeNode(a); return d && d.specified ? d.value : o }, set: Pa.set }, m.attrHooks.contenteditable = { set: function (c, a, d) { Pa.set(c, "" === a ? !1 : a, d) } }, m.each(["width", "height"], function (c, a) { m.attrHooks[a] = { set: function (c, d) { if ("" === d) return c.setAttribute(a, "auto"), d } } })); m.support.hrefNormalized || m.each(["href", "src"], function (c, a) { m.propHooks[a] = { get: function (c) { return c.getAttribute(a, 4) } } }); m.support.style || (m.attrHooks.style = {
        get: function (c) {
            return c.style.cssText ||
                o
        }, set: function (c, a) { return c.style.cssText = a + "" }
    }); m.support.optSelected || (m.propHooks.selected = { get: function (c) { if (c = c.parentNode) c.selectedIndex, c.parentNode && c.parentNode.selectedIndex; return null } }); m.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () { m.propFix[this.toLowerCase()] = this }); m.support.enctype || (m.propFix.enctype = "encoding"); m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = {
            set: function (c, a) {
                if (m.isArray(a)) return c.checked =
                    0 <= m.inArray(m(c).val(), a)
            }
        }; m.support.checkOn || (m.valHooks[this].get = function (c) { return null === c.getAttribute("value") ? "on" : c.value })
    }); var Fb = /^(?:input|select|textarea)$/i, id = /^key/, jd = /^(?:mouse|contextmenu)|click/, fc = /^(?:focusinfocus|focusoutblur)$/, gc = /^([^.]*)(?:\.(.+)|)$/; m.event = {
        global: {}, add: function (c, a, d, k, f) {
            var e, b, n, g, p, y, h, j, q; if (n = m._data(c)) {
                d.handler && (g = d, d = g.handler, f = g.selector); d.guid || (d.guid = m.guid++); if (!(b = n.events)) b = n.events = {}; if (!(p = n.handle)) p = n.handle = function (c) {
                    return typeof m !==
                        oa && (!c || m.event.triggered !== c.type) ? m.event.dispatch.apply(p.elem, arguments) : o
                }, p.elem = c; a = (a || "").match(pa) || [""]; for (n = a.length; n--;)if (e = gc.exec(a[n]) || [], j = y = e[1], q = (e[2] || "").split(".").sort(), j) {
                    e = m.event.special[j] || {}; j = (f ? e.delegateType : e.bindType) || j; e = m.event.special[j] || {}; y = m.extend({ type: j, origType: y, data: k, handler: d, guid: d.guid, selector: f, needsContext: f && m.expr.match.needsContext.test(f), namespace: q.join(".") }, g); if (!(h = b[j])) if (h = b[j] = [], h.delegateCount = 0, !e.setup || !1 === e.setup.call(c,
                        k, q, p)) c.addEventListener ? c.addEventListener(j, p, !1) : c.attachEvent && c.attachEvent("on" + j, p); e.add && (e.add.call(c, y), y.handler.guid || (y.handler.guid = d.guid)); f ? h.splice(h.delegateCount++, 0, y) : h.push(y); m.event.global[j] = !0
                } c = null
            }
        }, remove: function (c, a, d, k, f) {
            var e, b, n, g, p, y, h, j, q, l, C, r = m.hasData(c) && m._data(c); if (r && (y = r.events)) {
                a = (a || "").match(pa) || [""]; for (p = a.length; p--;)if (n = gc.exec(a[p]) || [], q = C = n[1], l = (n[2] || "").split(".").sort(), q) {
                    h = m.event.special[q] || {}; q = (k ? h.delegateType : h.bindType) ||
                        q; j = y[q] || []; n = n[2] && RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)"); for (g = e = j.length; e--;)if (b = j[e], (f || C === b.origType) && (!d || d.guid === b.guid) && (!n || n.test(b.namespace)) && (!k || k === b.selector || "**" === k && b.selector)) j.splice(e, 1), b.selector && j.delegateCount--, h.remove && h.remove.call(c, b); g && !j.length && ((!h.teardown || !1 === h.teardown.call(c, l, r.handle)) && m.removeEvent(c, q, r.handle), delete y[q])
                } else for (q in y) m.event.remove(c, q + a[p], d, k, !0); m.isEmptyObject(y) && (delete r.handle, m._removeData(c, "events"))
            }
        },
        trigger: function (c, a, d, k) {
            var f, e, n, g, p, y, h = [d || K], j = Ma.call(c, "type") ? c.type : c; p = Ma.call(c, "namespace") ? c.namespace.split(".") : []; n = f = d = d || K; if (!(3 === d.nodeType || 8 === d.nodeType) && !fc.test(j + m.event.triggered)) if (0 <= j.indexOf(".") && (p = j.split("."), j = p.shift(), p.sort()), e = 0 > j.indexOf(":") && "on" + j, c = c[m.expando] ? c : new m.Event(j, "object" === typeof c && c), c.isTrigger = k ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = o, c.target || (c.target =
                d), a = null == a ? [c] : m.makeArray(a, [c]), p = m.event.special[j] || {}, k || !(p.trigger && !1 === p.trigger.apply(d, a))) {
                    if (!k && !p.noBubble && !m.isWindow(d)) { g = p.delegateType || j; fc.test(g + j) || (n = n.parentNode); for (; n; n = n.parentNode)h.push(n), f = n; if (f === (d.ownerDocument || K)) h.push(f.defaultView || f.parentWindow || b) } for (y = 0; (n = h[y++]) && !c.isPropagationStopped();)c.type = 1 < y ? g : p.bindType || j, (f = (m._data(n, "events") || {})[c.type] && m._data(n, "handle")) && f.apply(n, a), (f = e && n[e]) && (m.acceptData(n) && f.apply && !1 === f.apply(n, a)) &&
                        c.preventDefault(); c.type = j; if (!k && !c.isDefaultPrevented() && (!p._default || !1 === p._default.apply(h.pop(), a)) && m.acceptData(d) && e && d[j] && !m.isWindow(d)) { (f = d[e]) && (d[e] = null); m.event.triggered = j; try { d[j]() } catch (q) { } m.event.triggered = o; f && (d[e] = f) } return c.result
            }
        }, dispatch: function (c) {
            c = m.event.fix(c); var a, d, k, f, e = [], b = U.call(arguments); a = (m._data(this, "events") || {})[c.type] || []; var n = m.event.special[c.type] || {}; b[0] = c; c.delegateTarget = this; if (!(n.preDispatch && !1 === n.preDispatch.call(this, c))) {
                e =
                m.event.handlers.call(this, c, a); for (a = 0; (k = e[a++]) && !c.isPropagationStopped();) { c.currentTarget = k.elem; for (f = 0; (d = k.handlers[f++]) && !c.isImmediatePropagationStopped();)if (!c.namespace_re || c.namespace_re.test(d.namespace)) if (c.handleObj = d, c.data = d.data, d = ((m.event.special[d.origType] || {}).handle || d.handler).apply(k.elem, b), d !== o && !1 === (c.result = d)) c.preventDefault(), c.stopPropagation() } n.postDispatch && n.postDispatch.call(this, c); return c.result
            }
        }, handlers: function (c, a) {
            var d, k, f, e, b = [], n = a.delegateCount,
            p = c.target; if (n && p.nodeType && (!c.button || "click" !== c.type)) for (; p != this; p = p.parentNode || this)if (1 === p.nodeType && (!0 !== p.disabled || "click" !== c.type)) { f = []; for (e = 0; e < n; e++)k = a[e], d = k.selector + " ", f[d] === o && (f[d] = k.needsContext ? 0 <= m(d, this).index(p) : m.find(d, this, null, [p]).length), f[d] && f.push(k); f.length && b.push({ elem: p, handlers: f }) } n < a.length && b.push({ elem: this, handlers: a.slice(n) }); return b
        }, fix: function (c) {
            if (c[m.expando]) return c; var a, d, k; a = c.type; var f = c, e = this.fixHooks[a]; e || (this.fixHooks[a] =
                e = jd.test(a) ? this.mouseHooks : id.test(a) ? this.keyHooks : {}); k = e.props ? this.props.concat(e.props) : this.props; c = new m.Event(f); for (a = k.length; a--;)d = k[a], c[d] = f[d]; c.target || (c.target = f.srcElement || K); 3 === c.target.nodeType && (c.target = c.target.parentNode); c.metaKey = !!c.metaKey; return e.filter ? e.filter(c, f) : c
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function (c, a) { null == c.which && (c.which = null != a.charCode ? a.charCode : a.keyCode); return c }
        }, mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (c, a) {
                var d, k, f = a.button, e = a.fromElement; null == c.pageX && null != a.clientX && (d = c.target.ownerDocument || K, k = d.documentElement, d = d.body, c.pageX = a.clientX + (k && k.scrollLeft || d && d.scrollLeft || 0) - (k && k.clientLeft || d && d.clientLeft || 0), c.pageY = a.clientY + (k && k.scrollTop || d &&
                    d.scrollTop || 0) - (k && k.clientTop || d && d.clientTop || 0)); !c.relatedTarget && e && (c.relatedTarget = e === c.target ? a.toElement : e); !c.which && f !== o && (c.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0); return c
            }
        }, special: {
            load: { noBubble: !0 }, focus: { trigger: function () { if (this !== f() && this.focus) try { return this.focus(), !1 } catch (c) { } }, delegateType: "focusin" }, blur: { trigger: function () { if (this === f() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: {
                trigger: function () {
                    if (m.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(),
                        !1
                }, _default: function (c) { return m.nodeName(c.target, "a") }
            }, beforeunload: { postDispatch: function (c) { c.result !== o && (c.originalEvent.returnValue = c.result) } }
        }, simulate: function (c, a, d, k) { c = m.extend(new m.Event, d, { type: c, isSimulated: !0, originalEvent: {} }); k ? m.event.trigger(c, null, a) : m.event.dispatch.call(a, c); c.isDefaultPrevented() && d.preventDefault() }
    }; m.removeEvent = K.removeEventListener ? function (c, a, d) { c.removeEventListener && c.removeEventListener(a, d, !1) } : function (c, a, d) {
        a = "on" + a; c.detachEvent && (typeof c[a] ===
            oa && (c[a] = null), c.detachEvent(a, d))
    }; m.Event = function (c, a) { if (!(this instanceof m.Event)) return new m.Event(c, a); c && c.type ? (this.originalEvent = c, this.type = c.type, this.isDefaultPrevented = c.defaultPrevented || !1 === c.returnValue || c.getPreventDefault && c.getPreventDefault() ? d : n) : this.type = c; a && m.extend(this, a); this.timeStamp = c && c.timeStamp || m.now(); this[m.expando] = !0 }; m.Event.prototype = {
        isDefaultPrevented: n, isPropagationStopped: n, isImmediatePropagationStopped: n, preventDefault: function () {
            var c = this.originalEvent;
            this.isDefaultPrevented = d; c && (c.preventDefault ? c.preventDefault() : c.returnValue = !1)
        }, stopPropagation: function () { var c = this.originalEvent; this.isPropagationStopped = d; c && (c.stopPropagation && c.stopPropagation(), c.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = d; this.stopPropagation() }
    }; m.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (c, a) {
        m.event.special[c] = {
            delegateType: a, bindType: a, handle: function (c) {
                var d, k = c.relatedTarget, f = c.handleObj; if (!k ||
                    k !== this && !m.contains(this, k)) c.type = f.origType, d = f.handler.apply(this, arguments), c.type = a; return d
            }
        }
    }); m.support.submitBubbles || (m.event.special.submit = {
        setup: function () { if (m.nodeName(this, "form")) return !1; m.event.add(this, "click._submit keypress._submit", function (c) { c = c.target; if ((c = m.nodeName(c, "input") || m.nodeName(c, "button") ? c.form : o) && !m._data(c, "submitBubbles")) m.event.add(c, "submit._submit", function (c) { c._submit_bubble = !0 }), m._data(c, "submitBubbles", !0) }) }, postDispatch: function (c) {
            c._submit_bubble &&
            (delete c._submit_bubble, this.parentNode && !c.isTrigger && m.event.simulate("submit", this.parentNode, c, !0))
        }, teardown: function () { if (m.nodeName(this, "form")) return !1; m.event.remove(this, "._submit") }
    }); m.support.changeBubbles || (m.event.special.change = {
        setup: function () {
            if (Fb.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) m.event.add(this, "propertychange._change", function (c) { "checked" === c.originalEvent.propertyName && (this._just_changed = !0) }), m.event.add(this, "click._change", function (c) {
                    this._just_changed &&
                    !c.isTrigger && (this._just_changed = !1); m.event.simulate("change", this, c, !0)
                }); return !1
            } m.event.add(this, "beforeactivate._change", function (c) { c = c.target; Fb.test(c.nodeName) && !m._data(c, "changeBubbles") && (m.event.add(c, "change._change", function (c) { this.parentNode && (!c.isSimulated && !c.isTrigger) && m.event.simulate("change", this.parentNode, c, !0) }), m._data(c, "changeBubbles", !0)) })
        }, handle: function (c) {
            var a = c.target; if (this !== a || c.isSimulated || c.isTrigger || "radio" !== a.type && "checkbox" !== a.type) return c.handleObj.handler.apply(this,
                arguments)
        }, teardown: function () { m.event.remove(this, "._change"); return !Fb.test(this.nodeName) }
    }); m.support.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (c, a) { var d = 0, k = function (c) { m.event.simulate(a, c.target, m.event.fix(c), !0) }; m.event.special[a] = { setup: function () { 0 === d++ && K.addEventListener(c, k, !0) }, teardown: function () { 0 === --d && K.removeEventListener(c, k, !0) } } }); m.fn.extend({
        on: function (c, a, d, k, f) {
            var e, b; if ("object" === typeof c) {
                "string" !== typeof a && (d = d || a, a = o); for (e in c) this.on(e,
                    a, d, c[e], f); return this
            } null == d && null == k ? (k = a, d = a = o) : null == k && ("string" === typeof a ? (k = d, d = o) : (k = d, d = a, a = o)); if (!1 === k) k = n; else if (!k) return this; 1 === f && (b = k, k = function (c) { m().off(c); return b.apply(this, arguments) }, k.guid = b.guid || (b.guid = m.guid++)); return this.each(function () { m.event.add(this, c, k, d, a) })
        }, one: function (c, a, d, k) { return this.on(c, a, d, k, 1) }, off: function (c, a, d) {
            var k; if (c && c.preventDefault && c.handleObj) return k = c.handleObj, m(c.delegateTarget).off(k.namespace ? k.origType + "." + k.namespace : k.origType,
                k.selector, k.handler), this; if ("object" === typeof c) { for (k in c) this.off(k, a, c[k]); return this } if (!1 === a || "function" === typeof a) d = a, a = o; !1 === d && (d = n); return this.each(function () { m.event.remove(this, c, d, a) })
        }, trigger: function (c, a) { return this.each(function () { m.event.trigger(c, a, this) }) }, triggerHandler: function (c, a) { var d = this[0]; if (d) return m.event.trigger(c, a, d, !0) }
    }); var Ac = /^.[^:#\[\.,]*$/, kd = /^(?:parents|prev(?:Until|All))/, hc = m.expr.match.needsContext, ld = { children: !0, contents: !0, next: !0, prev: !0 };
    m.fn.extend({
        find: function (c) { var a, d = [], k = this, f = k.length; if ("string" !== typeof c) return this.pushStack(m(c).filter(function () { for (a = 0; a < f; a++)if (m.contains(k[a], this)) return !0 })); for (a = 0; a < f; a++)m.find(c, k[a], d); d = this.pushStack(1 < f ? m.unique(d) : d); d.selector = this.selector ? this.selector + " " + c : c; return d }, has: function (c) { var a, d = m(c, this), k = d.length; return this.filter(function () { for (a = 0; a < k; a++)if (m.contains(this, d[a])) return !0 }) }, not: function (c) { return this.pushStack(p(this, c || [], !0)) }, filter: function (c) {
            return this.pushStack(p(this,
                c || [], !1))
        }, is: function (c) { return !!p(this, "string" === typeof c && hc.test(c) ? m(c) : c || [], !1).length }, closest: function (c, a) { for (var d, k = 0, f = this.length, e = [], b = hc.test(c) || "string" !== typeof c ? m(c, a || this.context) : 0; k < f; k++)for (d = this[k]; d && d !== a; d = d.parentNode)if (11 > d.nodeType && (b ? -1 < b.index(d) : 1 === d.nodeType && m.find.matchesSelector(d, c))) { e.push(d); break } return this.pushStack(1 < e.length ? m.unique(e) : e) }, index: function (c) {
            return !c ? this[0] && this[0].parentNode ? this.first().prevAll().length : -1 : "string" === typeof c ?
                m.inArray(this[0], m(c)) : m.inArray(c.jquery ? c[0] : c, this)
        }, add: function (c, a) { var d = "string" === typeof c ? m(c, a) : m.makeArray(c && c.nodeType ? [c] : c), d = m.merge(this.get(), d); return this.pushStack(m.unique(d)) }, addBack: function (c) { return this.add(null == c ? this.prevObject : this.prevObject.filter(c)) }
    }); m.each({
        parent: function (c) { return (c = c.parentNode) && 11 !== c.nodeType ? c : null }, parents: function (c) { return m.dir(c, "parentNode") }, parentsUntil: function (c, a, d) { return m.dir(c, "parentNode", d) }, next: function (c) {
            return y(c,
                "nextSibling")
        }, prev: function (c) { return y(c, "previousSibling") }, nextAll: function (c) { return m.dir(c, "nextSibling") }, prevAll: function (c) { return m.dir(c, "previousSibling") }, nextUntil: function (c, a, d) { return m.dir(c, "nextSibling", d) }, prevUntil: function (c, a, d) { return m.dir(c, "previousSibling", d) }, siblings: function (c) { return m.sibling((c.parentNode || {}).firstChild, c) }, children: function (c) { return m.sibling(c.firstChild) }, contents: function (c) {
            return m.nodeName(c, "iframe") ? c.contentDocument || c.contentWindow.document :
                m.merge([], c.childNodes)
        }
    }, function (c, a) { m.fn[c] = function (d, k) { var f = m.map(this, a, d); "Until" !== c.slice(-5) && (k = d); k && "string" === typeof k && (f = m.filter(k, f)); 1 < this.length && (ld[c] || (f = m.unique(f)), kd.test(c) && (f = f.reverse())); return this.pushStack(f) } }); m.extend({
        filter: function (c, a, d) { var k = a[0]; d && (c = ":not(" + c + ")"); return 1 === a.length && 1 === k.nodeType ? m.find.matchesSelector(k, c) ? [k] : [] : m.find.matches(c, m.grep(a, function (c) { return 1 === c.nodeType })) }, dir: function (c, a, d) {
            var k = []; for (c = c[a]; c && 9 !== c.nodeType &&
                (d === o || 1 !== c.nodeType || !m(c).is(d));)1 === c.nodeType && k.push(c), c = c[a]; return k
        }, sibling: function (c, a) { for (var d = []; c; c = c.nextSibling)1 === c.nodeType && c !== a && d.push(c); return d }
    }); var Nb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", md = / jQuery\d+="(?:null|\d+)"/g, ic = RegExp("\x3c(?:" + Nb + ")[\\s/\x3e]", "i"), Gb = /^\s+/, jc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        kc = /<([\w:]+)/, lc = /<tbody/i, nd = /<|&#?\w+;/, od = /<(?:script|style|link)/i, mb = /^(?:checkbox|radio)$/i, pd = /checked\s*(?:[^=]|=\s*.checked.)/i, mc = /^$|\/(?:java|ecma)script/i, Bc = /^true\/(.*)/, qd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ha = {
            option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"], legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"], area: [1, "\x3cmap\x3e", "\x3c/map\x3e"], param: [1, "\x3cobject\x3e", "\x3c/object\x3e"], thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"], tr: [2, "\x3ctable\x3e\x3ctbody\x3e",
                "\x3c/tbody\x3e\x3c/table\x3e"], col: [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"], td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"], _default: m.support.htmlSerialize ? [0, "", ""] : [1, "X\x3cdiv\x3e", "\x3c/div\x3e"]
        }, Hb = q(K).appendChild(K.createElement("div")); ha.optgroup = ha.option; ha.tbody = ha.tfoot = ha.colgroup = ha.caption = ha.thead; ha.th = ha.td; m.fn.extend({
            text: function (c) {
                return m.access(this, function (c) {
                    return c ===
                        o ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || K).createTextNode(c))
                }, null, c, arguments.length)
            }, append: function () { return this.domManip(arguments, function (c) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && A(this, c).appendChild(c) }) }, prepend: function () { return this.domManip(arguments, function (c) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var a = A(this, c); a.insertBefore(c, a.firstChild) } }) }, before: function () {
                return this.domManip(arguments, function (c) {
                    this.parentNode &&
                    this.parentNode.insertBefore(c, this)
                })
            }, after: function () { return this.domManip(arguments, function (c) { this.parentNode && this.parentNode.insertBefore(c, this.nextSibling) }) }, remove: function (c, a) { for (var d, k = c ? m.filter(c, this) : this, f = 0; null != (d = k[f]); f++)!a && 1 === d.nodeType && m.cleanData(w(d)), d.parentNode && (a && m.contains(d.ownerDocument, d) && u(w(d, "script")), d.parentNode.removeChild(d)); return this }, empty: function () {
                for (var c, a = 0; null != (c = this[a]); a++) {
                    for (1 === c.nodeType && m.cleanData(w(c, !1)); c.firstChild;)c.removeChild(c.firstChild);
                    c.options && m.nodeName(c, "select") && (c.options.length = 0)
                } return this
            }, clone: function (c, a) { c = null == c ? !1 : c; a = null == a ? c : a; return this.map(function () { return m.clone(this, c, a) }) }, html: function (c) {
                return m.access(this, function (c) {
                    var a = this[0] || {}, d = 0, k = this.length; if (c === o) return 1 === a.nodeType ? a.innerHTML.replace(md, "") : o; if ("string" === typeof c && !od.test(c) && (m.support.htmlSerialize || !ic.test(c)) && (m.support.leadingWhitespace || !Gb.test(c)) && !ha[(kc.exec(c) || ["", ""])[1].toLowerCase()]) {
                        c = c.replace(jc, "\x3c$1\x3e\x3c/$2\x3e");
                        try { for (; d < k; d++)a = this[d] || {}, 1 === a.nodeType && (m.cleanData(w(a, !1)), a.innerHTML = c); a = 0 } catch (f) { }
                    } a && this.empty().append(c)
                }, null, c, arguments.length)
            }, replaceWith: function () { var c = m.map(this, function (c) { return [c.nextSibling, c.parentNode] }), a = 0; this.domManip(arguments, function (d) { var k = c[a++], f = c[a++]; f && (k && k.parentNode !== f && (k = this.nextSibling), m(this).remove(), f.insertBefore(d, k)) }, !0); return a ? this : this.remove() }, detach: function (c) { return this.remove(c, !0) }, domManip: function (c, a, d) {
                c = sa.apply([],
                    c); var k, f, e, b, n = 0, p = this.length, g = this, y = p - 1, h = c[0], j = m.isFunction(h); if (j || !(1 >= p || "string" !== typeof h || m.support.checkClone || !pd.test(h))) return this.each(function (k) { var f = g.eq(k); j && (c[0] = h.call(this, k, f.html())); f.domManip(c, a, d) }); if (p && (b = m.buildFragment(c, this[0].ownerDocument, !1, !d && this), k = b.firstChild, 1 === b.childNodes.length && (b = k), k)) {
                        e = m.map(w(b, "script"), r); for (f = e.length; n < p; n++)k = b, n !== y && (k = m.clone(k, !0, !0), f && m.merge(e, w(k, "script"))), a.call(this[n], k, n); if (f) {
                            b = e[e.length - 1].ownerDocument;
                            m.map(e, v); for (n = 0; n < f; n++)if (k = e[n], mc.test(k.type || "") && !m._data(k, "globalEval") && m.contains(b, k)) k.src ? m._evalUrl(k.src) : m.globalEval((k.text || k.textContent || k.innerHTML || "").replace(qd, ""))
                        } b = k = null
                    } return this
            }
        }); m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (c, a) { m.fn[c] = function (c) { for (var d = 0, k = [], f = m(c), e = f.length - 1; d <= e; d++)c = d === e ? this : this.clone(!0), m(f[d])[a](c), qa.apply(k, c.get()); return this.pushStack(k) } });
    m.extend({
        clone: function (c, a, d) {
            var k, f, e, b, n, p = m.contains(c.ownerDocument, c); m.support.html5Clone || m.isXMLDoc(c) || !ic.test("\x3c" + c.nodeName + "\x3e") ? e = c.cloneNode(!0) : (Hb.innerHTML = c.outerHTML, Hb.removeChild(e = Hb.firstChild)); if ((!m.support.noCloneEvent || !m.support.noCloneChecked) && (1 === c.nodeType || 11 === c.nodeType) && !m.isXMLDoc(c)) {
                k = w(e); n = w(c); for (b = 0; null != (f = n[b]); ++b)if (k[b]) {
                    var g = k[b], y = void 0, h = void 0, j = void 0; if (1 === g.nodeType) {
                        y = g.nodeName.toLowerCase(); if (!m.support.noCloneEvent && g[m.expando]) {
                            j =
                            m._data(g); for (h in j.events) m.removeEvent(g, h, j.handle); g.removeAttribute(m.expando)
                        } if ("script" === y && g.text !== f.text) r(g).text = f.text, v(g); else if ("object" === y) g.parentNode && (g.outerHTML = f.outerHTML), m.support.html5Clone && (f.innerHTML && !m.trim(g.innerHTML)) && (g.innerHTML = f.innerHTML); else if ("input" === y && mb.test(f.type)) g.defaultChecked = g.checked = f.checked, g.value !== f.value && (g.value = f.value); else if ("option" === y) g.defaultSelected = g.selected = f.defaultSelected; else if ("input" === y || "textarea" === y) g.defaultValue =
                            f.defaultValue
                    }
                }
            } if (a) if (d) { n = n || w(c); k = k || w(e); for (b = 0; null != (f = n[b]); b++)t(f, k[b]) } else t(c, e); k = w(e, "script"); 0 < k.length && u(k, !p && w(c, "script")); return e
        }, buildFragment: function (c, a, d, k) {
            for (var f, e, b, n, p, g, y = c.length, h = q(a), j = [], l = 0; l < y; l++)if ((e = c[l]) || 0 === e) if ("object" === m.type(e)) m.merge(j, e.nodeType ? [e] : e); else if (nd.test(e)) {
                b = b || h.appendChild(a.createElement("div")); n = (kc.exec(e) || ["", ""])[1].toLowerCase(); g = ha[n] || ha._default; b.innerHTML = g[1] + e.replace(jc, "\x3c$1\x3e\x3c/$2\x3e") + g[2];
                for (f = g[0]; f--;)b = b.lastChild; !m.support.leadingWhitespace && Gb.test(e) && j.push(a.createTextNode(Gb.exec(e)[0])); if (!m.support.tbody) for (f = (e = "table" === n && !lc.test(e) ? b.firstChild : "\x3ctable\x3e" === g[1] && !lc.test(e) ? b : 0) && e.childNodes.length; f--;)m.nodeName(p = e.childNodes[f], "tbody") && !p.childNodes.length && e.removeChild(p); m.merge(j, b.childNodes); for (b.textContent = ""; b.firstChild;)b.removeChild(b.firstChild); b = h.lastChild
            } else j.push(a.createTextNode(e)); b && h.removeChild(b); m.support.appendChecked ||
                m.grep(w(j, "input"), x); for (l = 0; e = j[l++];)if (!(k && -1 !== m.inArray(e, k)) && (c = m.contains(e.ownerDocument, e), b = w(h.appendChild(e), "script"), c && u(b), d)) for (f = 0; e = b[f++];)mc.test(e.type || "") && d.push(e); return h
        }, cleanData: function (c, a) {
            for (var d, k, f, e, b = 0, n = m.expando, p = m.cache, g = m.support.deleteExpando, y = m.event.special; null != (d = c[b]); b++)if (a || m.acceptData(d)) if (e = (f = d[n]) && p[f]) {
                if (e.events) for (k in e.events) y[k] ? m.event.remove(d, k) : m.removeEvent(d, k, e.handle); p[f] && (delete p[f], g ? delete d[n] : typeof d.removeAttribute !==
                    oa ? d.removeAttribute(n) : d[n] = null, ga.push(f))
            }
        }, _evalUrl: function (c) { return m.ajax({ url: c, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }
    }); m.fn.extend({
        wrapAll: function (c) { if (m.isFunction(c)) return this.each(function (a) { m(this).wrapAll(c.call(this, a)) }); if (this[0]) { var a = m(c, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && a.insertBefore(this[0]); a.map(function () { for (var c = this; c.firstChild && 1 === c.firstChild.nodeType;)c = c.firstChild; return c }).append(this) } return this }, wrapInner: function (c) {
            return m.isFunction(c) ?
                this.each(function (a) { m(this).wrapInner(c.call(this, a)) }) : this.each(function () { var a = m(this), d = a.contents(); d.length ? d.wrapAll(c) : a.append(c) })
        }, wrap: function (c) { var a = m.isFunction(c); return this.each(function (d) { m(this).wrapAll(a ? c.call(this, d) : c) }) }, unwrap: function () { return this.parent().each(function () { m.nodeName(this, "body") || m(this).replaceWith(this.childNodes) }).end() }
    }); var Ra, Ba, Ca, Ib = /alpha\([^)]*\)/i, rd = /opacity\s*=\s*([^)]*)/, sd = /^(top|right|bottom|left)$/, td = /^(none|table(?!-c[ea]).+)/,
        nc = /^margin/, Cc = RegExp("^(" + Ya + ")(.*)$", "i"), Wa = RegExp("^(" + Ya + ")(?!px)[a-z%]+$", "i"), ud = RegExp("^([+-])\x3d(" + Ya + ")", "i"), Pb = { BODY: "block" }, vd = { position: "absolute", visibility: "hidden", display: "block" }, oc = { letterSpacing: 0, fontWeight: 400 }, Aa = ["Top", "Right", "Bottom", "Left"], Ob = ["Webkit", "O", "Moz", "ms"]; m.fn.extend({
            css: function (c, a) {
                return m.access(this, function (c, a, d) {
                    var k, f = {}, e = 0; if (m.isArray(a)) { k = Ba(c); for (d = a.length; e < d; e++)f[a[e]] = m.css(c, a[e], !1, k); return f } return d !== o ? m.style(c, a, d) : m.css(c,
                        a)
                }, c, a, 1 < arguments.length)
            }, show: function () { return k(this, !0) }, hide: function () { return k(this) }, toggle: function (a) { return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function () { c(this) ? m(this).show() : m(this).hide() }) }
        }); m.extend({
            cssHooks: { opacity: { get: function (c, a) { if (a) { var d = Ca(c, "opacity"); return "" === d ? "1" : d } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {
                "float": m.support.cssFloat ? "cssFloat" :
                    "styleFloat"
            }, style: function (c, a, d, k) {
                if (c && !(3 === c.nodeType || 8 === c.nodeType || !c.style)) {
                    var f, e, b, n = m.camelCase(a), p = c.style; a = m.cssProps[n] || (m.cssProps[n] = B(p, n)); b = m.cssHooks[a] || m.cssHooks[n]; if (d !== o) {
                        e = typeof d; if ("string" === e && (f = ud.exec(d))) d = (f[1] + 1) * f[2] + parseFloat(m.css(c, a)), e = "number"; if (!(null == d || "number" === e && isNaN(d))) if ("number" === e && !m.cssNumber[n] && (d += "px"), !m.support.clearCloneStyle && ("" === d && 0 === a.indexOf("background")) && (p[a] = "inherit"), !b || !("set" in b) || (d = b.set(c, d, k)) !==
                            o) try { p[a] = d } catch (g) { }
                    } else return b && "get" in b && (f = b.get(c, !1, k)) !== o ? f : p[a]
                }
            }, css: function (c, a, d, k) { var f, e; e = m.camelCase(a); a = m.cssProps[e] || (m.cssProps[e] = B(c.style, e)); (e = m.cssHooks[a] || m.cssHooks[e]) && "get" in e && (f = e.get(c, !0, d)); f === o && (f = Ca(c, a, k)); "normal" === f && a in oc && (f = oc[a]); return "" === d || d ? (c = parseFloat(f), !0 === d || m.isNumeric(c) ? c || 0 : f) : f }
        }); b.getComputedStyle ? (Ba = function (c) { return b.getComputedStyle(c, null) }, Ca = function (c, a, d) {
            var k, f = (d = d || Ba(c)) ? d.getPropertyValue(a) || d[a] : o, e =
                c.style; d && ("" === f && !m.contains(c.ownerDocument, c) && (f = m.style(c, a)), Wa.test(f) && nc.test(a) && (c = e.width, a = e.minWidth, k = e.maxWidth, e.minWidth = e.maxWidth = e.width = f, f = d.width, e.width = c, e.minWidth = a, e.maxWidth = k)); return f
        }) : K.documentElement.currentStyle && (Ba = function (c) { return c.currentStyle }, Ca = function (c, a, d) {
            var k, f, e = (d = d || Ba(c)) ? d[a] : o, b = c.style; null == e && (b && b[a]) && (e = b[a]); if (Wa.test(e) && !sd.test(a)) {
                d = b.left; if (f = (k = c.runtimeStyle) && k.left) k.left = c.currentStyle.left; b.left = "fontSize" === a ? "1em" :
                    e; e = b.pixelLeft + "px"; b.left = d; f && (k.left = f)
            } return "" === e ? "auto" : e
        }); m.each(["height", "width"], function (c, a) { m.cssHooks[a] = { get: function (c, d, k) { if (d) return 0 === c.offsetWidth && td.test(m.css(c, "display")) ? m.swap(c, vd, function () { return G(c, a, k) }) : G(c, a, k) }, set: function (c, d, k) { var f = k && Ba(c); return C(c, d, k ? D(c, a, k, m.support.boxSizing && "border-box" === m.css(c, "boxSizing", !1, f), f) : 0) } } }); m.support.opacity || (m.cssHooks.opacity = {
            get: function (c, a) {
                return rd.test((a && c.currentStyle ? c.currentStyle.filter : c.style.filter) ||
                    "") ? 0.01 * parseFloat(RegExp.$1) + "" : a ? "1" : ""
            }, set: function (c, a) { var d = c.style, k = c.currentStyle, f = m.isNumeric(a) ? "alpha(opacity\x3d" + 100 * a + ")" : "", e = k && k.filter || d.filter || ""; d.zoom = 1; if ((1 <= a || "" === a) && "" === m.trim(e.replace(Ib, "")) && d.removeAttribute) if (d.removeAttribute("filter"), "" === a || k && !k.filter) return; d.filter = Ib.test(e) ? e.replace(Ib, f) : e + " " + f }
        }); m(function () {
            m.support.reliableMarginRight || (m.cssHooks.marginRight = { get: function (c, a) { if (a) return m.swap(c, { display: "inline-block" }, Ca, [c, "marginRight"]) } });
            !m.support.pixelPosition && m.fn.position && m.each(["top", "left"], function (c, a) { m.cssHooks[a] = { get: function (c, d) { if (d) return d = Ca(c, a), Wa.test(d) ? m(c).position()[a] + "px" : d } } })
        }); m.expr && m.expr.filters && (m.expr.filters.hidden = function (c) { return 0 >= c.offsetWidth && 0 >= c.offsetHeight || !m.support.reliableHiddenOffsets && "none" === (c.style && c.style.display || m.css(c, "display")) }, m.expr.filters.visible = function (c) { return !m.expr.filters.hidden(c) }); m.each({ margin: "", padding: "", border: "Width" }, function (c, a) {
            m.cssHooks[c +
                a] = { expand: function (d) { var k = 0, f = {}; for (d = "string" === typeof d ? d.split(" ") : [d]; 4 > k; k++)f[c + Aa[k] + a] = d[k] || d[k - 2] || d[0]; return f } }; nc.test(c) || (m.cssHooks[c + a].set = C)
        }); var wd = /%20/g, Dc = /\[\]$/, pc = /\r?\n/g, xd = /^(?:submit|button|image|reset|file)$/i, yd = /^(?:input|select|textarea|keygen)/i; m.fn.extend({
            serialize: function () { return m.param(this.serializeArray()) }, serializeArray: function () {
                return this.map(function () { var c = m.prop(this, "elements"); return c ? m.makeArray(c) : this }).filter(function () {
                    var c = this.type;
                    return this.name && !m(this).is(":disabled") && yd.test(this.nodeName) && !xd.test(c) && (this.checked || !mb.test(c))
                }).map(function (c, a) { var d = m(this).val(); return null == d ? null : m.isArray(d) ? m.map(d, function (c) { return { name: a.name, value: c.replace(pc, "\r\n") } }) : { name: a.name, value: d.replace(pc, "\r\n") } }).get()
            }
        }); m.param = function (c, a) {
            var d, k = [], f = function (c, a) { a = m.isFunction(a) ? a() : null == a ? "" : a; k[k.length] = encodeURIComponent(c) + "\x3d" + encodeURIComponent(a) }; a === o && (a = m.ajaxSettings && m.ajaxSettings.traditional);
            if (m.isArray(c) || c.jquery && !m.isPlainObject(c)) m.each(c, function () { f(this.name, this.value) }); else for (d in c) I(d, c[d], a, f); return k.join("\x26").replace(wd, "+")
        }; m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (c, a) { m.fn[a] = function (c, d) { return 0 < arguments.length ? this.on(a, null, c, d) : this.trigger(a) } }); m.fn.extend({
            hover: function (c,
                a) { return this.mouseenter(c).mouseleave(a || c) }, bind: function (c, a, d) { return this.on(c, null, a, d) }, unbind: function (c, a) { return this.off(c, null, a) }, delegate: function (c, a, d, k) { return this.on(a, c, d, k) }, undelegate: function (c, a, d) { return 1 === arguments.length ? this.off(c, "**") : this.off(a, c || "**", d) }
        }); var Ka, za, Jb = m.now(), Kb = /\?/, zd = /#.*$/, qc = /([?&])_=[^&]*/, Ad = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Bd = /^(?:GET|HEAD)$/, Cd = /^\/\//, rc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, sc = m.fn.load, tc = {}, nb = {}, uc = "*/".concat("*");
    try { za = Fc.href } catch (Id) { za = K.createElement("a"), za.href = "", za = za.href } Ka = rc.exec(za.toLowerCase()) || []; m.fn.load = function (c, a, d) {
        if ("string" !== typeof c && sc) return sc.apply(this, arguments); var k, f, e, b = this, n = c.indexOf(" "); 0 <= n && (k = c.slice(n, c.length), c = c.slice(0, n)); m.isFunction(a) ? (d = a, a = o) : a && "object" === typeof a && (e = "POST"); 0 < b.length && m.ajax({ url: c, type: e, dataType: "html", data: a }).done(function (c) { f = arguments; b.html(k ? m("\x3cdiv\x3e").append(m.parseHTML(c)).find(k) : c) }).complete(d && function (c,
            a) { b.each(d, f || [c.responseText, a, c]) }); return this
    }; m.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (c, a) { m.fn[a] = function (c) { return this.on(a, c) } }); m.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {
            url: za, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ka[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8", accepts: {
                "*": uc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 }
        }, ajaxSetup: function (c, a) { return a ? T(T(c, m.ajaxSettings), a) : T(m.ajaxSettings, c) }, ajaxPrefilter: M(tc), ajaxTransport: M(nb), ajax: function (c, a) {
            function d(c, a, k, f) {
                var y, v, A, z; z = a; if (2 !== D) {
                    D = 2; n && clearTimeout(n); g = o; b = f ||
                        ""; t.readyState = 0 < c ? 4 : 0; f = 200 <= c && 300 > c || 304 === c; if (k) { A = h; for (var u = t, w, G, H, x, E = A.contents, B = A.dataTypes; "*" === B[0];)B.shift(), G === o && (G = A.mimeType || u.getResponseHeader("Content-Type")); if (G) for (x in E) if (E[x] && E[x].test(G)) { B.unshift(x); break } if (B[0] in k) H = B[0]; else { for (x in k) { if (!B[0] || A.converters[x + " " + B[0]]) { H = x; break } w || (w = x) } H = H || w } H ? (H !== B[0] && B.unshift(H), A = k[H]) : A = void 0 } a: {
                            k = h; w = A; G = t; H = f; var F, I, J, u = {}, E = k.dataTypes.slice(); if (E[1]) for (I in k.converters) u[I.toLowerCase()] = k.converters[I];
                            for (x = E.shift(); x;)if (k.responseFields[x] && (G[k.responseFields[x]] = w), !J && (H && k.dataFilter) && (w = k.dataFilter(w, k.dataType)), J = x, x = E.shift()) if ("*" === x) x = J; else if ("*" !== J && J !== x) { I = u[J + " " + x] || u["* " + x]; if (!I) for (F in u) if (A = F.split(" "), A[1] === x && (I = u[J + " " + A[0]] || u["* " + A[0]])) { !0 === I ? I = u[F] : !0 !== u[F] && (x = A[0], E.unshift(A[1])); break } if (!0 !== I) if (I && k["throws"]) w = I(w); else try { w = I(w) } catch (M) { A = { state: "parsererror", error: I ? M : "No conversion from " + J + " to " + x }; break a } } A = { state: "success", data: w }
                        } if (f) h.ifModified &&
                            ((z = t.getResponseHeader("Last-Modified")) && (m.lastModified[e] = z), (z = t.getResponseHeader("etag")) && (m.etag[e] = z)), 204 === c || "HEAD" === h.type ? z = "nocontent" : 304 === c ? z = "notmodified" : (z = A.state, y = A.data, v = A.error, f = !v); else if (v = z, c || !z) z = "error", 0 > c && (c = 0); t.status = c; t.statusText = (a || z) + ""; f ? l.resolveWith(j, [y, z, t]) : l.rejectWith(j, [t, z, v]); t.statusCode(r); r = o; p && q.trigger(f ? "ajaxSuccess" : "ajaxError", [t, h, f ? y : v]); C.fireWith(j, [t, z]); p && (q.trigger("ajaxComplete", [t, h]), --m.active || m.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof c && (a = c, c = o); a = a || {}; var k, f, e, b, n, p, g, y, h = m.ajaxSetup({}, a), j = h.context || h, q = h.context && (j.nodeType || j.jquery) ? m(j) : m.event, l = m.Deferred(), C = m.Callbacks("once memory"), r = h.statusCode || {}, v = {}, A = {}, D = 0, u = "canceled", t = {
                readyState: 0, getResponseHeader: function (c) { var a; if (2 === D) { if (!y) for (y = {}; a = Ad.exec(b);)y[a[1].toLowerCase()] = a[2]; a = y[c.toLowerCase()] } return null == a ? null : a }, getAllResponseHeaders: function () { return 2 === D ? b : null }, setRequestHeader: function (c, a) {
                    var d = c.toLowerCase();
                    D || (c = A[d] = A[d] || c, v[c] = a); return this
                }, overrideMimeType: function (c) { D || (h.mimeType = c); return this }, statusCode: function (c) { var a; if (c) if (2 > D) for (a in c) r[a] = [r[a], c[a]]; else t.always(c[t.status]); return this }, abort: function (c) { c = c || u; g && g.abort(c); d(0, c); return this }
            }; l.promise(t).complete = C.add; t.success = t.done; t.error = t.fail; h.url = ((c || h.url || za) + "").replace(zd, "").replace(Cd, Ka[1] + "//"); h.type = a.method || a.type || h.method || h.type; h.dataTypes = m.trim(h.dataType || "*").toLowerCase().match(pa) || [""];
            null == h.crossDomain && (k = rc.exec(h.url.toLowerCase()), h.crossDomain = !(!k || !(k[1] !== Ka[1] || k[2] !== Ka[2] || (k[3] || ("http:" === k[1] ? "80" : "443")) !== (Ka[3] || ("http:" === Ka[1] ? "80" : "443"))))); h.data && (h.processData && "string" !== typeof h.data) && (h.data = m.param(h.data, h.traditional)); J(tc, h, a, t); if (2 === D) return t; (p = h.global) && 0 === m.active++ && m.event.trigger("ajaxStart"); h.type = h.type.toUpperCase(); h.hasContent = !Bd.test(h.type); e = h.url; h.hasContent || (h.data && (e = h.url += (Kb.test(e) ? "\x26" : "?") + h.data, delete h.data),
                !1 === h.cache && (h.url = qc.test(e) ? e.replace(qc, "$1_\x3d" + Jb++) : e + (Kb.test(e) ? "\x26" : "?") + "_\x3d" + Jb++)); h.ifModified && (m.lastModified[e] && t.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && t.setRequestHeader("If-None-Match", m.etag[e])); (h.data && h.hasContent && !1 !== h.contentType || a.contentType) && t.setRequestHeader("Content-Type", h.contentType); t.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + uc + "; q\x3d0.01" : "") :
                    h.accepts["*"]); for (f in h.headers) t.setRequestHeader(f, h.headers[f]); if (h.beforeSend && (!1 === h.beforeSend.call(j, t, h) || 2 === D)) return t.abort(); u = "abort"; for (f in { success: 1, error: 1, complete: 1 }) t[f](h[f]); if (g = J(nb, h, a, t)) { t.readyState = 1; p && q.trigger("ajaxSend", [t, h]); h.async && 0 < h.timeout && (n = setTimeout(function () { t.abort("timeout") }, h.timeout)); try { D = 1, g.send(v, d) } catch (w) { if (2 > D) d(-1, w); else throw w; } } else d(-1, "No Transport"); return t
        }, getJSON: function (c, a, d) { return m.get(c, a, d, "json") }, getScript: function (c,
            a) { return m.get(c, o, a, "script") }
    }); m.each(["get", "post"], function (c, a) { m[a] = function (c, d, k, f) { m.isFunction(d) && (f = f || k, k = d, d = o); return m.ajax({ url: c, type: a, dataType: f, data: d, success: k }) } }); m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (c) { m.globalEval(c); return c } } }); m.ajaxPrefilter("script", function (c) {
        c.cache === o && (c.cache = !1); c.crossDomain && (c.type =
            "GET", c.global = !1)
    }); m.ajaxTransport("script", function (c) {
        if (c.crossDomain) {
            var a, d = K.head || m("head")[0] || K.documentElement; return {
                send: function (k, f) { a = K.createElement("script"); a.async = !0; c.scriptCharset && (a.charset = c.scriptCharset); a.src = c.url; a.onload = a.onreadystatechange = function (c, d) { if (d || !a.readyState || /loaded|complete/.test(a.readyState)) a.onload = a.onreadystatechange = null, a.parentNode && a.parentNode.removeChild(a), a = null, d || f(200, "success") }; d.insertBefore(a, d.firstChild) }, abort: function () {
                    if (a) a.onload(o,
                        !0)
                }
            }
        }
    }); var vc = [], Lb = /(=)\?(?=&|$)|\?\?/; m.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var c = vc.pop() || m.expando + "_" + Jb++; this[c] = !0; return c } }); m.ajaxPrefilter("json jsonp", function (c, a, d) {
        var k, f, e, n = !1 !== c.jsonp && (Lb.test(c.url) ? "url" : "string" === typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Lb.test(c.data) && "data"); if (n || "jsonp" === c.dataTypes[0]) return k = c.jsonpCallback = m.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, n ? c[n] = c[n].replace(Lb,
            "$1" + k) : !1 !== c.jsonp && (c.url += (Kb.test(c.url) ? "\x26" : "?") + c.jsonp + "\x3d" + k), c.converters["script json"] = function () { e || m.error(k + " was not called"); return e[0] }, c.dataTypes[0] = "json", f = b[k], b[k] = function () { e = arguments }, d.always(function () { b[k] = f; c[k] && (c.jsonpCallback = a.jsonpCallback, vc.push(k)); e && m.isFunction(f) && f(e[0]); e = f = o }), "script"
    }); var Qa, Va, Dd = 0, Mb = b.ActiveXObject && function () { for (var c in Qa) Qa[c](o, !0) }; m.ajaxSettings.xhr = b.ActiveXObject ? function () {
        var c; if (!(c = !this.isLocal && F())) a: {
            try {
                c =
                new b.ActiveXObject("Microsoft.XMLHTTP"); break a
            } catch (a) { } c = void 0
        } return c
    } : F; Va = m.ajaxSettings.xhr(); m.support.cors = !!Va && "withCredentials" in Va; (Va = m.support.ajax = !!Va) && m.ajaxTransport(function (c) {
        if (!c.crossDomain || m.support.cors) {
            var a; return {
                send: function (d, k) {
                    var f, e, n = c.xhr(); c.username ? n.open(c.type, c.url, c.async, c.username, c.password) : n.open(c.type, c.url, c.async); if (c.xhrFields) for (e in c.xhrFields) n[e] = c.xhrFields[e]; c.mimeType && n.overrideMimeType && n.overrideMimeType(c.mimeType); !c.crossDomain &&
                        !d["X-Requested-With"] && (d["X-Requested-With"] = "XMLHttpRequest"); try { for (e in d) n.setRequestHeader(e, d[e]) } catch (p) { } n.send(c.hasContent && c.data || null); a = function (d, e) {
                            var b, p, g, h; try { if (a && (e || 4 === n.readyState)) if (a = o, f && (n.onreadystatechange = m.noop, Mb && delete Qa[f]), e) 4 !== n.readyState && n.abort(); else { h = {}; b = n.status; p = n.getAllResponseHeaders(); "string" === typeof n.responseText && (h.text = n.responseText); try { g = n.statusText } catch (y) { g = "" } !b && c.isLocal && !c.crossDomain ? b = h.text ? 200 : 404 : 1223 === b && (b = 204) } } catch (j) {
                                e ||
                                k(-1, j)
                            } h && k(b, g, h, p)
                        }; c.async ? 4 === n.readyState ? setTimeout(a) : (f = ++Dd, Mb && (Qa || (Qa = {}, m(b).unload(Mb)), Qa[f] = a), n.onreadystatechange = a) : a()
                }, abort: function () { a && a(o, !0) }
            }
        }
    }); var La, lb, Ed = /^(?:toggle|show|hide)$/, wc = RegExp("^(?:([+-])\x3d|)(" + Ya + ")([a-z%]*)$", "i"), Fd = /queueHooks$/, Xa = [function (a, d, k) {
        var f, e, b, n, p, g = this, h = {}, y = a.style, j = a.nodeType && c(a), q = m._data(a, "fxshow"); k.queue || (n = m._queueHooks(a, "fx"), null == n.unqueued && (n.unqueued = 0, p = n.empty.fire, n.empty.fire = function () { n.unqueued || p() }),
            n.unqueued++, g.always(function () { g.always(function () { n.unqueued--; m.queue(a, "fx").length || n.empty.fire() }) })); if (1 === a.nodeType && ("height" in d || "width" in d)) k.overflow = [y.overflow, y.overflowX, y.overflowY], "inline" === m.css(a, "display") && "none" === m.css(a, "float") && (!m.support.inlineBlockNeedsLayout || "inline" === E(a.nodeName) ? y.display = "inline-block" : y.zoom = 1); k.overflow && (y.overflow = "hidden", m.support.shrinkWrapBlocks || g.always(function () {
                y.overflow = k.overflow[0]; y.overflowX = k.overflow[1]; y.overflowY =
                    k.overflow[2]
            })); for (f in d) if (e = d[f], Ed.exec(e) && (delete d[f], b = b || "toggle" === e, e !== (j ? "hide" : "show"))) h[f] = q && q[f] || m.style(a, f); if (!m.isEmptyObject(h)) for (f in q ? "hidden" in q && (j = q.hidden) : q = m._data(a, "fxshow", {}), b && (q.hidden = !j), j ? m(a).show() : g.done(function () { m(a).hide() }), g.done(function () { var c; m._removeData(a, "fxshow"); for (c in h) m.style(a, c, h[c]) }), h) d = R(j ? q[f] : 0, f, g), f in q || (q[f] = d.start, j && (d.end = d.start, d.start = "width" === f || "height" === f ? 1 : 0))
    }], Sa = {
        "*": [function (c, a) {
            var d = this.createTween(c,
                a), k = d.cur(), f = wc.exec(a), e = f && f[3] || (m.cssNumber[c] ? "" : "px"), b = (m.cssNumber[c] || "px" !== e && +k) && wc.exec(m.css(d.elem, c)), n = 1, p = 20; if (b && b[3] !== e) { e = e || b[3]; f = f || []; b = +k || 1; do n = n || ".5", b /= n, m.style(d.elem, c, b + e); while (n !== (n = d.cur() / k) && 1 !== n && --p) } f && (b = d.start = +b || +k || 0, d.unit = e, d.end = f[1] ? b + (f[1] + 1) * f[2] : +f[2]); return d
        }]
    }; m.Animation = m.extend(O, {
        tweener: function (c, a) { m.isFunction(c) ? (a = c, c = ["*"]) : c = c.split(" "); for (var d, k = 0, f = c.length; k < f; k++)d = c[k], Sa[d] = Sa[d] || [], Sa[d].unshift(a) }, prefilter: function (c,
            a) { a ? Xa.unshift(c) : Xa.push(c) }
    }); m.Tween = L; L.prototype = {
        constructor: L, init: function (c, a, d, k, f, e) { this.elem = c; this.prop = d; this.easing = f || "swing"; this.options = a; this.start = this.now = this.cur(); this.end = k; this.unit = e || (m.cssNumber[d] ? "" : "px") }, cur: function () { var c = L.propHooks[this.prop]; return c && c.get ? c.get(this) : L.propHooks._default.get(this) }, run: function (c) {
            var a, d = L.propHooks[this.prop]; this.pos = this.options.duration ? a = m.easing[this.easing](c, this.options.duration * c, 0, 1, this.options.duration) : a =
                c; this.now = (this.end - this.start) * a + this.start; this.options.step && this.options.step.call(this.elem, this.now, this); d && d.set ? d.set(this) : L.propHooks._default.set(this); return this
        }
    }; L.prototype.init.prototype = L.prototype; L.propHooks = {
        _default: {
            get: function (c) { if (null != c.elem[c.prop] && (!c.elem.style || null == c.elem.style[c.prop])) return c.elem[c.prop]; c = m.css(c.elem, c.prop, ""); return !c || "auto" === c ? 0 : c }, set: function (c) {
                if (m.fx.step[c.prop]) m.fx.step[c.prop](c); else c.elem.style && (null != c.elem.style[m.cssProps[c.prop]] ||
                    m.cssHooks[c.prop]) ? m.style(c.elem, c.prop, c.now + c.unit) : c.elem[c.prop] = c.now
            }
        }
    }; L.propHooks.scrollTop = L.propHooks.scrollLeft = { set: function (c) { c.elem.nodeType && c.elem.parentNode && (c.elem[c.prop] = c.now) } }; m.each(["toggle", "show", "hide"], function (c, a) { var d = m.fn[a]; m.fn[a] = function (c, k, f) { return null == c || "boolean" === typeof c ? d.apply(this, arguments) : this.animate(Z(a, !0), c, k, f) } }); m.fn.extend({
        fadeTo: function (a, d, k, f) { return this.filter(c).css("opacity", 0).show().end().animate({ opacity: d }, a, k, f) }, animate: function (c,
            a, d, k) { var f = m.isEmptyObject(c), e = m.speed(a, d, k); a = function () { var a = O(this, m.extend({}, c), e); (f || m._data(this, "finish")) && a.stop(!0) }; a.finish = a; return f || !1 === e.queue ? this.each(a) : this.queue(e.queue, a) }, stop: function (c, a, d) {
                var k = function (c) { var a = c.stop; delete c.stop; a(d) }; "string" !== typeof c && (d = a, a = c, c = o); a && !1 !== c && this.queue(c || "fx", []); return this.each(function () {
                    var a = !0, f = null != c && c + "queueHooks", e = m.timers, b = m._data(this); if (f) b[f] && b[f].stop && k(b[f]); else for (f in b) b[f] && (b[f].stop && Fd.test(f)) &&
                        k(b[f]); for (f = e.length; f--;)if (e[f].elem === this && (null == c || e[f].queue === c)) e[f].anim.stop(d), a = !1, e.splice(f, 1); (a || !d) && m.dequeue(this, c)
                })
            }, finish: function (c) {
                !1 !== c && (c = c || "fx"); return this.each(function () {
                    var a, d = m._data(this), k = d[c + "queue"]; a = d[c + "queueHooks"]; var f = m.timers, e = k ? k.length : 0; d.finish = !0; m.queue(this, c, []); a && a.stop && a.stop.call(this, !0); for (a = f.length; a--;)f[a].elem === this && f[a].queue === c && (f[a].anim.stop(!0), f.splice(a, 1)); for (a = 0; a < e; a++)k[a] && k[a].finish && k[a].finish.call(this);
                    delete d.finish
                })
            }
    }); m.each({ slideDown: Z("show"), slideUp: Z("hide"), slideToggle: Z("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (c, a) { m.fn[c] = function (c, d, k) { return this.animate(a, c, d, k) } }); m.speed = function (c, a, d) {
        var k = c && "object" === typeof c ? m.extend({}, c) : { complete: d || !d && a || m.isFunction(c) && c, duration: c, easing: d && a || a && !m.isFunction(a) && a }; k.duration = m.fx.off ? 0 : "number" === typeof k.duration ? k.duration : k.duration in m.fx.speeds ? m.fx.speeds[k.duration] :
            m.fx.speeds._default; if (null == k.queue || !0 === k.queue) k.queue = "fx"; k.old = k.complete; k.complete = function () { m.isFunction(k.old) && k.old.call(this); k.queue && m.dequeue(this, k.queue) }; return k
    }; m.easing = { linear: function (c) { return c }, swing: function (c) { return 0.5 - Math.cos(c * Math.PI) / 2 } }; m.timers = []; m.fx = L.prototype.init; m.fx.tick = function () { var c, a = m.timers, d = 0; for (La = m.now(); d < a.length; d++)c = a[d], !c() && a[d] === c && a.splice(d--, 1); a.length || m.fx.stop(); La = o }; m.fx.timer = function (c) { c() && m.timers.push(c) && m.fx.start() };
    m.fx.interval = 13; m.fx.start = function () { lb || (lb = setInterval(m.fx.tick, m.fx.interval)) }; m.fx.stop = function () { clearInterval(lb); lb = null }; m.fx.speeds = { slow: 600, fast: 200, _default: 400 }; m.fx.step = {}; m.expr && m.expr.filters && (m.expr.filters.animated = function (c) { return m.grep(m.timers, function (a) { return c === a.elem }).length }); m.fn.offset = function (c) {
        if (arguments.length) return c === o ? this : this.each(function (a) { m.offset.setOffset(this, c, a) }); var a, d, k = { top: 0, left: 0 }, f = (d = this[0]) && d.ownerDocument; if (f) {
            a = f.documentElement;
            if (!m.contains(a, d)) return k; typeof d.getBoundingClientRect !== oa && (k = d.getBoundingClientRect()); d = Da(f); return { top: k.top + (d.pageYOffset || a.scrollTop) - (a.clientTop || 0), left: k.left + (d.pageXOffset || a.scrollLeft) - (a.clientLeft || 0) }
        }
    }; m.offset = {
        setOffset: function (c, a, d) {
            var k = m.css(c, "position"); "static" === k && (c.style.position = "relative"); var f = m(c), e = f.offset(), b = m.css(c, "top"), n = m.css(c, "left"), p = {}, g = {}; ("absolute" === k || "fixed" === k) && -1 < m.inArray("auto", [b, n]) ? (g = f.position(), k = g.top, n = g.left) : (k = parseFloat(b) ||
                0, n = parseFloat(n) || 0); m.isFunction(a) && (a = a.call(c, d, e)); null != a.top && (p.top = a.top - e.top + k); null != a.left && (p.left = a.left - e.left + n); "using" in a ? a.using.call(c, p) : f.css(p)
        }
    }; m.fn.extend({
        position: function () {
            if (this[0]) {
                var c, a, d = { top: 0, left: 0 }, k = this[0]; "fixed" === m.css(k, "position") ? a = k.getBoundingClientRect() : (c = this.offsetParent(), a = this.offset(), m.nodeName(c[0], "html") || (d = c.offset()), d.top += m.css(c[0], "borderTopWidth", !0), d.left += m.css(c[0], "borderLeftWidth", !0)); return {
                    top: a.top - d.top - m.css(k,
                        "marginTop", !0), left: a.left - d.left - m.css(k, "marginLeft", !0)
                }
            }
        }, offsetParent: function () { return this.map(function () { for (var c = this.offsetParent || ca; c && !m.nodeName(c, "html") && "static" === m.css(c, "position");)c = c.offsetParent; return c || ca }) }
    }); m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (c, a) {
        var d = /Y/.test(a); m.fn[c] = function (k) {
            return m.access(this, function (c, k, f) {
                var e = Da(c); if (f === o) return e ? a in e ? e[a] : e.document.documentElement[k] : c[k]; e ? e.scrollTo(!d ? f : m(e).scrollLeft(), d ?
                    f : m(e).scrollTop()) : c[k] = f
            }, c, k, arguments.length, null)
        }
    }); m.each({ Height: "height", Width: "width" }, function (c, a) {
        m.each({ padding: "inner" + c, content: a, "": "outer" + c }, function (d, k) {
            m.fn[k] = function (k, f) {
                var e = arguments.length && (d || "boolean" !== typeof k), b = d || (!0 === k || !0 === f ? "margin" : "border"); return m.access(this, function (a, d, k) {
                    return m.isWindow(a) ? a.document.documentElement["client" + c] : 9 === a.nodeType ? (d = a.documentElement, Math.max(a.body["scroll" + c], d["scroll" + c], a.body["offset" + c], d["offset" + c], d["client" +
                        c])) : k === o ? m.css(a, d, b) : m.style(a, d, k, b)
                }, a, e ? k : o, e, null)
            }
        })
    }); m.fn.size = function () { return this.length }; m.fn.andSelf = m.fn.addBack; j.jQuery = m
})(window, ChemDoodle.lib);
(function (b) { "function" === typeof define && define.amd ? define(["jquery"], b) : "object" === typeof exports ? module.exports = b : b(ChemDoodle.lib.jQuery) })(function (b) {
    function j(f) {
        var n = f || window.event, h = g.call(arguments, 1), j = 0, l = 0, v = 0, u = 0; f = b.event.fix(n); f.type = "mousewheel"; "detail" in n && (v = -1 * n.detail); "wheelDelta" in n && (v = n.wheelDelta); "wheelDeltaY" in n && (v = n.wheelDeltaY); "wheelDeltaX" in n && (l = -1 * n.wheelDeltaX); "axis" in n && n.axis === n.HORIZONTAL_AXIS && (l = -1 * v, v = 0); j = 0 === v ? l : v; "deltaY" in n && (j = v = -1 * n.deltaY);
        "deltaX" in n && (l = n.deltaX, 0 === v && (j = -1 * l)); if (!(0 === v && 0 === l)) {
            1 === n.deltaMode ? (n = b.data(this, "mousewheel-line-height"), j *= n, v *= n, l *= n) : 2 === n.deltaMode && (n = b.data(this, "mousewheel-page-height"), j *= n, v *= n, l *= n); u = Math.max(Math.abs(v), Math.abs(l)); if (!d || u < d) d = u, 120 === d && (e = !0, d /= 40); e && (j /= 40, l /= 40, v /= 40); j = Math[1 <= j ? "floor" : "ceil"](j / d); l = Math[1 <= l ? "floor" : "ceil"](l / d); v = Math[1 <= v ? "floor" : "ceil"](v / d); f.deltaX = l; f.deltaY = v; f.deltaFactor = d; f.deltaMode = 0; h.unshift(f, j, l, v); a && clearTimeout(a); a = setTimeout(o,
                200); return (b.event.dispatch || b.event.handle).apply(this, h)
        }
    } function o() { e = d = null } var l = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], g = Array.prototype.slice, e, a, d; if (b.event.fixHooks) for (var n = l.length; n;)b.event.fixHooks[l[--n]] = b.event.mouseHooks; var f = b.event.special.mousewheel = {
        version: "3.1.8", setup: function () {
            if (this.addEventListener) for (var a = h.length; a;)this.addEventListener(h[--a],
                j, !1); else this.onmousewheel = j; b.data(this, "mousewheel-line-height", f.getLineHeight(this)); b.data(this, "mousewheel-page-height", f.getPageHeight(this))
        }, teardown: function () { if (this.removeEventListener) for (var a = h.length; a;)this.removeEventListener(h[--a], j, !1); else this.onmousewheel = null }, getLineHeight: function (a) { return parseInt(b(a)["offsetParent" in b.fn ? "offsetParent" : "parent"]().css("fontSize"), 10) }, getPageHeight: function (a) { return b(a).height() }
    }; b.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel",
                a) : this.trigger("mousewheel")
        }, unmousewheel: function (a) { return this.unbind("mousewheel", a) }
    })
});
(function (b, j) { "object" === typeof exports ? module.exports = j(global) : "function" === typeof define && define.amd ? define([], function () { return j(b) }) : j(b) })(ChemDoodle.lib, function (b) {
    function j(c) { return e = c } function o() { return e = "undefined" !== typeof Float32Array ? Float32Array : Array } var l = {}; if ("undefined" != typeof Float32Array) { var h = new Float32Array(1), g = new Int32Array(h.buffer); l.invsqrt = function (c) { h[0] = c; g[0] = 1597463007 - (g[0] >> 1); var a = h[0]; return a * (1.5 - 0.5 * c * a * a) } } else l.invsqrt = function (c) {
        return 1 /
            Math.sqrt(c)
    }; var e = null; o(); var a = {
        create: function (c) { var a = new e(3); c ? (a[0] = c[0], a[1] = c[1], a[2] = c[2]) : a[0] = a[1] = a[2] = 0; return a }, createFrom: function (c, a, d) { var f = new e(3); f[0] = c; f[1] = a; f[2] = d; return f }, set: function (c, a) { a[0] = c[0]; a[1] = c[1]; a[2] = c[2]; return a }, equal: function (c, a) { return c === a || 1E-6 > Math.abs(c[0] - a[0]) && 1E-6 > Math.abs(c[1] - a[1]) && 1E-6 > Math.abs(c[2] - a[2]) }, add: function (c, a, d) { if (!d || c === d) return c[0] += a[0], c[1] += a[1], c[2] += a[2], c; d[0] = c[0] + a[0]; d[1] = c[1] + a[1]; d[2] = c[2] + a[2]; return d },
        subtract: function (c, a, d) { if (!d || c === d) return c[0] -= a[0], c[1] -= a[1], c[2] -= a[2], c; d[0] = c[0] - a[0]; d[1] = c[1] - a[1]; d[2] = c[2] - a[2]; return d }, multiply: function (c, a, d) { if (!d || c === d) return c[0] *= a[0], c[1] *= a[1], c[2] *= a[2], c; d[0] = c[0] * a[0]; d[1] = c[1] * a[1]; d[2] = c[2] * a[2]; return d }, negate: function (c, a) { a || (a = c); a[0] = -c[0]; a[1] = -c[1]; a[2] = -c[2]; return a }, scale: function (c, a, d) { if (!d || c === d) return c[0] *= a, c[1] *= a, c[2] *= a, c; d[0] = c[0] * a; d[1] = c[1] * a; d[2] = c[2] * a; return d }, normalize: function (c, a) {
            a || (a = c); var d = c[0],
                f = c[1], e = c[2], b = Math.sqrt(d * d + f * f + e * e); if (b) { if (1 === b) return a[0] = d, a[1] = f, a[2] = e, a } else return a[0] = 0, a[1] = 0, a[2] = 0, a; b = 1 / b; a[0] = d * b; a[1] = f * b; a[2] = e * b; return a
        }, cross: function (c, a, d) { d || (d = c); var f = c[0], e = c[1]; c = c[2]; var b = a[0], n = a[1]; a = a[2]; d[0] = e * a - c * n; d[1] = c * b - f * a; d[2] = f * n - e * b; return d }, length: function (c) { var a = c[0], d = c[1]; c = c[2]; return Math.sqrt(a * a + d * d + c * c) }, squaredLength: function (c) { var a = c[0], d = c[1]; c = c[2]; return a * a + d * d + c * c }, dot: function (c, a) { return c[0] * a[0] + c[1] * a[1] + c[2] * a[2] }, direction: function (c,
            a, d) { d || (d = c); var f = c[0] - a[0], e = c[1] - a[1]; c = c[2] - a[2]; a = Math.sqrt(f * f + e * e + c * c); if (!a) return d[0] = 0, d[1] = 0, d[2] = 0, d; a = 1 / a; d[0] = f * a; d[1] = e * a; d[2] = c * a; return d }, lerp: function (c, a, d, f) { f || (f = c); f[0] = c[0] + d * (a[0] - c[0]); f[1] = c[1] + d * (a[1] - c[1]); f[2] = c[2] + d * (a[2] - c[2]); return f }, dist: function (c, a) { var d = a[0] - c[0], f = a[1] - c[1], e = a[2] - c[2]; return Math.sqrt(d * d + f * f + e * e) }
    }, d = null, n = new e(4); a.unproject = function (c, a, f, e, b) {
        b || (b = c); d || (d = r.create()); var g = d; n[0] = 2 * (c[0] - e[0]) / e[2] - 1; n[1] = 2 * (c[1] - e[1]) / e[3] - 1; n[2] =
            2 * c[2] - 1; n[3] = 1; r.multiply(f, a, g); if (!r.inverse(g)) return null; r.multiplyVec4(g, n); if (0 === n[3]) return null; b[0] = n[0] / n[3]; b[1] = n[1] / n[3]; b[2] = n[2] / n[3]; return b
    }; var f = a.createFrom(1, 0, 0), y = a.createFrom(0, 1, 0), p = a.createFrom(0, 0, 1), q = a.create(); a.rotationTo = function (c, d, e) {
        e || (e = v.create()); var b = a.dot(c, d); if (1 <= b) v.set(u, e); else if (-0.999999 > b) a.cross(f, c, q), 1E-6 > a.length(q) && a.cross(y, c, q), 1E-6 > a.length(q) && a.cross(p, c, q), a.normalize(q), v.fromAngleAxis(Math.PI, q, e); else {
            var b = Math.sqrt(2 * (1 + b)),
            n = 1 / b; a.cross(c, d, q); e[0] = q[0] * n; e[1] = q[1] * n; e[2] = q[2] * n; e[3] = 0.5 * b; v.normalize(e)
        } 1 < e[3] ? e[3] = 1 : -1 > e[3] && (e[3] = -1); return e
    }; a.str = function (c) { return "[" + c[0] + ", " + c[1] + ", " + c[2] + "]" }; var A = {
        create: function (c) { var a = new e(9); c ? (a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3], a[4] = c[4], a[5] = c[5], a[6] = c[6], a[7] = c[7], a[8] = c[8]) : a[0] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = 0; return a }, createFrom: function (c, a, d, f, b, n, g, p, h) { var y = new e(9); y[0] = c; y[1] = a; y[2] = d; y[3] = f; y[4] = b; y[5] = n; y[6] = g; y[7] = p; y[8] = h; return y },
        determinant: function (c) { var a = c[3], d = c[4], f = c[5], e = c[6], b = c[7], n = c[8]; return c[0] * (n * d - f * b) + c[1] * (-n * a + f * e) + c[2] * (b * a - d * e) }, inverse: function (c, a) { var d = c[0], f = c[1], e = c[2], b = c[3], n = c[4], g = c[5], p = c[6], h = c[7], y = c[8], j = y * n - g * h, q = -y * b + g * p, l = h * b - n * p, r = d * j + f * q + e * l; if (!r) return null; r = 1 / r; a || (a = A.create()); a[0] = j * r; a[1] = (-y * f + e * h) * r; a[2] = (g * f - e * n) * r; a[3] = q * r; a[4] = (y * d - e * p) * r; a[5] = (-g * d + e * b) * r; a[6] = l * r; a[7] = (-h * d + f * p) * r; a[8] = (n * d - f * b) * r; return a }, multiply: function (c, a, d) {
            d || (d = c); var f = c[0], e = c[1], b = c[2],
                n = c[3], g = c[4], p = c[5], h = c[6], y = c[7]; c = c[8]; var j = a[0], q = a[1], l = a[2], r = a[3], o = a[4], v = a[5], A = a[6], t = a[7]; a = a[8]; d[0] = j * f + q * n + l * h; d[1] = j * e + q * g + l * y; d[2] = j * b + q * p + l * c; d[3] = r * f + o * n + v * h; d[4] = r * e + o * g + v * y; d[5] = r * b + o * p + v * c; d[6] = A * f + t * n + a * h; d[7] = A * e + t * g + a * y; d[8] = A * b + t * p + a * c; return d
        }, multiplyVec2: function (c, a, d) { d || (d = a); var f = a[0]; a = a[1]; d[0] = f * c[0] + a * c[3] + c[6]; d[1] = f * c[1] + a * c[4] + c[7]; return d }, multiplyVec3: function (c, a, d) {
            d || (d = a); var f = a[0], e = a[1]; a = a[2]; d[0] = f * c[0] + e * c[3] + a * c[6]; d[1] = f * c[1] + e * c[4] + a * c[7];
            d[2] = f * c[2] + e * c[5] + a * c[8]; return d
        }, set: function (c, a) { a[0] = c[0]; a[1] = c[1]; a[2] = c[2]; a[3] = c[3]; a[4] = c[4]; a[5] = c[5]; a[6] = c[6]; a[7] = c[7]; a[8] = c[8]; return a }, equal: function (c, a) { return c === a || 1E-6 > Math.abs(c[0] - a[0]) && 1E-6 > Math.abs(c[1] - a[1]) && 1E-6 > Math.abs(c[2] - a[2]) && 1E-6 > Math.abs(c[3] - a[3]) && 1E-6 > Math.abs(c[4] - a[4]) && 1E-6 > Math.abs(c[5] - a[5]) && 1E-6 > Math.abs(c[6] - a[6]) && 1E-6 > Math.abs(c[7] - a[7]) && 1E-6 > Math.abs(c[8] - a[8]) }, identity: function (c) {
            c || (c = A.create()); c[0] = 1; c[1] = 0; c[2] = 0; c[3] = 0; c[4] = 1; c[5] =
                0; c[6] = 0; c[7] = 0; c[8] = 1; return c
        }, transpose: function (c, a) { if (!a || c === a) { var d = c[1], f = c[2], e = c[5]; c[1] = c[3]; c[2] = c[6]; c[3] = d; c[5] = c[7]; c[6] = f; c[7] = e; return c } a[0] = c[0]; a[1] = c[3]; a[2] = c[6]; a[3] = c[1]; a[4] = c[4]; a[5] = c[7]; a[6] = c[2]; a[7] = c[5]; a[8] = c[8]; return a }, toMat4: function (c, a) { a || (a = r.create()); a[15] = 1; a[14] = 0; a[13] = 0; a[12] = 0; a[11] = 0; a[10] = c[8]; a[9] = c[7]; a[8] = c[6]; a[7] = 0; a[6] = c[5]; a[5] = c[4]; a[4] = c[3]; a[3] = 0; a[2] = c[2]; a[1] = c[1]; a[0] = c[0]; return a }, str: function (c) {
            return "[" + c[0] + ", " + c[1] + ", " + c[2] +
                ", " + c[3] + ", " + c[4] + ", " + c[5] + ", " + c[6] + ", " + c[7] + ", " + c[8] + "]"
        }
    }, r = {
        create: function (c) { var a = new e(16); c && (a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3], a[4] = c[4], a[5] = c[5], a[6] = c[6], a[7] = c[7], a[8] = c[8], a[9] = c[9], a[10] = c[10], a[11] = c[11], a[12] = c[12], a[13] = c[13], a[14] = c[14], a[15] = c[15]); return a }, createFrom: function (c, a, d, f, b, n, g, p, h, y, j, q, l, r, o, v) { var A = new e(16); A[0] = c; A[1] = a; A[2] = d; A[3] = f; A[4] = b; A[5] = n; A[6] = g; A[7] = p; A[8] = h; A[9] = y; A[10] = j; A[11] = q; A[12] = l; A[13] = r; A[14] = o; A[15] = v; return A }, set: function (c,
            a) { a[0] = c[0]; a[1] = c[1]; a[2] = c[2]; a[3] = c[3]; a[4] = c[4]; a[5] = c[5]; a[6] = c[6]; a[7] = c[7]; a[8] = c[8]; a[9] = c[9]; a[10] = c[10]; a[11] = c[11]; a[12] = c[12]; a[13] = c[13]; a[14] = c[14]; a[15] = c[15]; return a }, equal: function (c, a) {
                return c === a || 1E-6 > Math.abs(c[0] - a[0]) && 1E-6 > Math.abs(c[1] - a[1]) && 1E-6 > Math.abs(c[2] - a[2]) && 1E-6 > Math.abs(c[3] - a[3]) && 1E-6 > Math.abs(c[4] - a[4]) && 1E-6 > Math.abs(c[5] - a[5]) && 1E-6 > Math.abs(c[6] - a[6]) && 1E-6 > Math.abs(c[7] - a[7]) && 1E-6 > Math.abs(c[8] - a[8]) && 1E-6 > Math.abs(c[9] - a[9]) && 1E-6 > Math.abs(c[10] - a[10]) &&
                    1E-6 > Math.abs(c[11] - a[11]) && 1E-6 > Math.abs(c[12] - a[12]) && 1E-6 > Math.abs(c[13] - a[13]) && 1E-6 > Math.abs(c[14] - a[14]) && 1E-6 > Math.abs(c[15] - a[15])
            }, identity: function (c) { c || (c = r.create()); c[0] = 1; c[1] = 0; c[2] = 0; c[3] = 0; c[4] = 0; c[5] = 1; c[6] = 0; c[7] = 0; c[8] = 0; c[9] = 0; c[10] = 1; c[11] = 0; c[12] = 0; c[13] = 0; c[14] = 0; c[15] = 1; return c }, transpose: function (c, a) {
                if (!a || c === a) {
                    var d = c[1], f = c[2], e = c[3], b = c[6], n = c[7], g = c[11]; c[1] = c[4]; c[2] = c[8]; c[3] = c[12]; c[4] = d; c[6] = c[9]; c[7] = c[13]; c[8] = f; c[9] = b; c[11] = c[14]; c[12] = e; c[13] = n; c[14] = g;
                    return c
                } a[0] = c[0]; a[1] = c[4]; a[2] = c[8]; a[3] = c[12]; a[4] = c[1]; a[5] = c[5]; a[6] = c[9]; a[7] = c[13]; a[8] = c[2]; a[9] = c[6]; a[10] = c[10]; a[11] = c[14]; a[12] = c[3]; a[13] = c[7]; a[14] = c[11]; a[15] = c[15]; return a
            }, determinant: function (c) {
                var a = c[0], d = c[1], f = c[2], e = c[3], b = c[4], n = c[5], g = c[6], p = c[7], h = c[8], y = c[9], j = c[10], q = c[11], l = c[12], r = c[13], o = c[14]; c = c[15]; return l * y * g * e - h * r * g * e - l * n * j * e + b * r * j * e + h * n * o * e - b * y * o * e - l * y * f * p + h * r * f * p + l * d * j * p - a * r * j * p - h * d * o * p + a * y * o * p + l * n * f * q - b * r * f * q - l * d * g * q + a * r * g * q + b * d * o * q - a * n * o * q - h * n * f * c + b * y * f *
                    c + h * d * g * c - a * y * g * c - b * d * j * c + a * n * j * c
            }, inverse: function (c, a) {
                a || (a = c); var d = c[0], f = c[1], e = c[2], b = c[3], n = c[4], g = c[5], p = c[6], h = c[7], y = c[8], j = c[9], q = c[10], l = c[11], r = c[12], o = c[13], v = c[14], A = c[15], t = d * g - f * n, u = d * p - e * n, w = d * h - b * n, x = f * p - e * g, B = f * h - b * g, ca = e * h - b * p, da = y * o - j * r, ea = y * v - q * r, Y = y * A - l * r, ga = j * v - q * o, sa = j * A - l * o, qa = q * A - l * v, U = t * qa - u * sa + w * ga + x * Y - B * ea + ca * da; if (!U) return null; U = 1 / U; a[0] = (g * qa - p * sa + h * ga) * U; a[1] = (-f * qa + e * sa - b * ga) * U; a[2] = (o * ca - v * B + A * x) * U; a[3] = (-j * ca + q * B - l * x) * U; a[4] = (-n * qa + p * Y - h * ea) * U; a[5] = (d * qa - e *
                    Y + b * ea) * U; a[6] = (-r * ca + v * w - A * u) * U; a[7] = (y * ca - q * w + l * u) * U; a[8] = (n * sa - g * Y + h * da) * U; a[9] = (-d * sa + f * Y - b * da) * U; a[10] = (r * B - o * w + A * t) * U; a[11] = (-y * B + j * w - l * t) * U; a[12] = (-n * ga + g * ea - p * da) * U; a[13] = (d * ga - f * ea + e * da) * U; a[14] = (-r * x + o * u - v * t) * U; a[15] = (y * x - j * u + q * t) * U; return a
            }, toRotationMat: function (c, a) { a || (a = r.create()); a[0] = c[0]; a[1] = c[1]; a[2] = c[2]; a[3] = c[3]; a[4] = c[4]; a[5] = c[5]; a[6] = c[6]; a[7] = c[7]; a[8] = c[8]; a[9] = c[9]; a[10] = c[10]; a[11] = c[11]; a[12] = 0; a[13] = 0; a[14] = 0; a[15] = 1; return a }, toMat3: function (c, a) {
                a || (a = A.create());
                a[0] = c[0]; a[1] = c[1]; a[2] = c[2]; a[3] = c[4]; a[4] = c[5]; a[5] = c[6]; a[6] = c[8]; a[7] = c[9]; a[8] = c[10]; return a
            }, toInverseMat3: function (c, a) { var d = c[0], f = c[1], e = c[2], b = c[4], n = c[5], g = c[6], p = c[8], h = c[9], y = c[10], j = y * n - g * h, q = -y * b + g * p, l = h * b - n * p, r = d * j + f * q + e * l; if (!r) return null; r = 1 / r; a || (a = A.create()); a[0] = j * r; a[1] = (-y * f + e * h) * r; a[2] = (g * f - e * n) * r; a[3] = q * r; a[4] = (y * d - e * p) * r; a[5] = (-g * d + e * b) * r; a[6] = l * r; a[7] = (-h * d + f * p) * r; a[8] = (n * d - f * b) * r; return a }, multiply: function (c, a, d) {
                d || (d = c); var f = c[0], e = c[1], b = c[2], n = c[3], g = c[4], p =
                    c[5], h = c[6], y = c[7], j = c[8], q = c[9], l = c[10], r = c[11], o = c[12], v = c[13], A = c[14]; c = c[15]; var t = a[0], u = a[1], w = a[2], x = a[3]; d[0] = t * f + u * g + w * j + x * o; d[1] = t * e + u * p + w * q + x * v; d[2] = t * b + u * h + w * l + x * A; d[3] = t * n + u * y + w * r + x * c; t = a[4]; u = a[5]; w = a[6]; x = a[7]; d[4] = t * f + u * g + w * j + x * o; d[5] = t * e + u * p + w * q + x * v; d[6] = t * b + u * h + w * l + x * A; d[7] = t * n + u * y + w * r + x * c; t = a[8]; u = a[9]; w = a[10]; x = a[11]; d[8] = t * f + u * g + w * j + x * o; d[9] = t * e + u * p + w * q + x * v; d[10] = t * b + u * h + w * l + x * A; d[11] = t * n + u * y + w * r + x * c; t = a[12]; u = a[13]; w = a[14]; x = a[15]; d[12] = t * f + u * g + w * j + x * o; d[13] = t * e + u * p + w * q + x * v;
                d[14] = t * b + u * h + w * l + x * A; d[15] = t * n + u * y + w * r + x * c; return d
            }, multiplyVec3: function (c, a, d) { d || (d = a); var f = a[0], e = a[1]; a = a[2]; d[0] = c[0] * f + c[4] * e + c[8] * a + c[12]; d[1] = c[1] * f + c[5] * e + c[9] * a + c[13]; d[2] = c[2] * f + c[6] * e + c[10] * a + c[14]; return d }, multiplyVec4: function (c, a, d) { d || (d = a); var f = a[0], e = a[1], b = a[2]; a = a[3]; d[0] = c[0] * f + c[4] * e + c[8] * b + c[12] * a; d[1] = c[1] * f + c[5] * e + c[9] * b + c[13] * a; d[2] = c[2] * f + c[6] * e + c[10] * b + c[14] * a; d[3] = c[3] * f + c[7] * e + c[11] * b + c[15] * a; return d }, translate: function (c, a, d) {
                var f = a[0], e = a[1]; a = a[2]; var b, n,
                    g, p, h, y, j, q, l, r, o, v; if (!d || c === d) return c[12] = c[0] * f + c[4] * e + c[8] * a + c[12], c[13] = c[1] * f + c[5] * e + c[9] * a + c[13], c[14] = c[2] * f + c[6] * e + c[10] * a + c[14], c[15] = c[3] * f + c[7] * e + c[11] * a + c[15], c; b = c[0]; n = c[1]; g = c[2]; p = c[3]; h = c[4]; y = c[5]; j = c[6]; q = c[7]; l = c[8]; r = c[9]; o = c[10]; v = c[11]; d[0] = b; d[1] = n; d[2] = g; d[3] = p; d[4] = h; d[5] = y; d[6] = j; d[7] = q; d[8] = l; d[9] = r; d[10] = o; d[11] = v; d[12] = b * f + h * e + l * a + c[12]; d[13] = n * f + y * e + r * a + c[13]; d[14] = g * f + j * e + o * a + c[14]; d[15] = p * f + q * e + v * a + c[15]; return d
            }, scale: function (c, a, d) {
                var f = a[0], e = a[1]; a = a[2];
                if (!d || c === d) return c[0] *= f, c[1] *= f, c[2] *= f, c[3] *= f, c[4] *= e, c[5] *= e, c[6] *= e, c[7] *= e, c[8] *= a, c[9] *= a, c[10] *= a, c[11] *= a, c; d[0] = c[0] * f; d[1] = c[1] * f; d[2] = c[2] * f; d[3] = c[3] * f; d[4] = c[4] * e; d[5] = c[5] * e; d[6] = c[6] * e; d[7] = c[7] * e; d[8] = c[8] * a; d[9] = c[9] * a; d[10] = c[10] * a; d[11] = c[11] * a; d[12] = c[12]; d[13] = c[13]; d[14] = c[14]; d[15] = c[15]; return d
            }, rotate: function (c, a, d, f) {
                var e = d[0], b = d[1]; d = d[2]; var n = Math.sqrt(e * e + b * b + d * d), g, p, h, y, j, q, l, r, o, v, A, t, u, w, x, B, ca, da, ea, Y; if (!n) return null; 1 !== n && (n = 1 / n, e *= n, b *= n, d *= n); g = Math.sin(a);
                p = Math.cos(a); h = 1 - p; a = c[0]; n = c[1]; y = c[2]; j = c[3]; q = c[4]; l = c[5]; r = c[6]; o = c[7]; v = c[8]; A = c[9]; t = c[10]; u = c[11]; w = e * e * h + p; x = b * e * h + d * g; B = d * e * h - b * g; ca = e * b * h - d * g; da = b * b * h + p; ea = d * b * h + e * g; Y = e * d * h + b * g; e = b * d * h - e * g; b = d * d * h + p; f ? c !== f && (f[12] = c[12], f[13] = c[13], f[14] = c[14], f[15] = c[15]) : f = c; f[0] = a * w + q * x + v * B; f[1] = n * w + l * x + A * B; f[2] = y * w + r * x + t * B; f[3] = j * w + o * x + u * B; f[4] = a * ca + q * da + v * ea; f[5] = n * ca + l * da + A * ea; f[6] = y * ca + r * da + t * ea; f[7] = j * ca + o * da + u * ea; f[8] = a * Y + q * e + v * b; f[9] = n * Y + l * e + A * b; f[10] = y * Y + r * e + t * b; f[11] = j * Y + o * e + u * b; return f
            },
        rotateX: function (c, a, d) { var f = Math.sin(a); a = Math.cos(a); var e = c[4], b = c[5], n = c[6], g = c[7], p = c[8], h = c[9], y = c[10], j = c[11]; d ? c !== d && (d[0] = c[0], d[1] = c[1], d[2] = c[2], d[3] = c[3], d[12] = c[12], d[13] = c[13], d[14] = c[14], d[15] = c[15]) : d = c; d[4] = e * a + p * f; d[5] = b * a + h * f; d[6] = n * a + y * f; d[7] = g * a + j * f; d[8] = e * -f + p * a; d[9] = b * -f + h * a; d[10] = n * -f + y * a; d[11] = g * -f + j * a; return d }, rotateY: function (c, a, d) {
            var f = Math.sin(a); a = Math.cos(a); var e = c[0], b = c[1], n = c[2], g = c[3], p = c[8], h = c[9], y = c[10], j = c[11]; d ? c !== d && (d[4] = c[4], d[5] = c[5], d[6] = c[6], d[7] =
                c[7], d[12] = c[12], d[13] = c[13], d[14] = c[14], d[15] = c[15]) : d = c; d[0] = e * a + p * -f; d[1] = b * a + h * -f; d[2] = n * a + y * -f; d[3] = g * a + j * -f; d[8] = e * f + p * a; d[9] = b * f + h * a; d[10] = n * f + y * a; d[11] = g * f + j * a; return d
        }, rotateZ: function (c, a, d) {
            var f = Math.sin(a); a = Math.cos(a); var e = c[0], b = c[1], n = c[2], g = c[3], p = c[4], h = c[5], y = c[6], j = c[7]; d ? c !== d && (d[8] = c[8], d[9] = c[9], d[10] = c[10], d[11] = c[11], d[12] = c[12], d[13] = c[13], d[14] = c[14], d[15] = c[15]) : d = c; d[0] = e * a + p * f; d[1] = b * a + h * f; d[2] = n * a + y * f; d[3] = g * a + j * f; d[4] = e * -f + p * a; d[5] = b * -f + h * a; d[6] = n * -f + y * a; d[7] = g *
                -f + j * a; return d
        }, frustum: function (c, a, d, f, e, b, n) { n || (n = r.create()); var g = a - c, p = f - d, h = b - e; n[0] = 2 * e / g; n[1] = 0; n[2] = 0; n[3] = 0; n[4] = 0; n[5] = 2 * e / p; n[6] = 0; n[7] = 0; n[8] = (a + c) / g; n[9] = (f + d) / p; n[10] = -(b + e) / h; n[11] = -1; n[12] = 0; n[13] = 0; n[14] = -(2 * b * e) / h; n[15] = 0; return n }, perspective: function (c, a, d, f, e) { c = d * Math.tan(c * Math.PI / 360); a *= c; return r.frustum(-a, a, -c, c, d, f, e) }, ortho: function (c, a, d, f, e, b, n) {
            n || (n = r.create()); var g = a - c, p = f - d, h = b - e; n[0] = 2 / g; n[1] = 0; n[2] = 0; n[3] = 0; n[4] = 0; n[5] = 2 / p; n[6] = 0; n[7] = 0; n[8] = 0; n[9] = 0; n[10] =
                -2 / h; n[11] = 0; n[12] = -(c + a) / g; n[13] = -(f + d) / p; n[14] = -(b + e) / h; n[15] = 1; return n
        }, lookAt: function (c, a, d, f) {
            f || (f = r.create()); var e, b, n, g, p, h, y, j, q = c[0], l = c[1]; c = c[2]; n = d[0]; g = d[1]; b = d[2]; y = a[0]; d = a[1]; e = a[2]; if (q === y && l === d && c === e) return r.identity(f); a = q - y; d = l - d; y = c - e; j = 1 / Math.sqrt(a * a + d * d + y * y); a *= j; d *= j; y *= j; e = g * y - b * d; b = b * a - n * y; n = n * d - g * a; (j = Math.sqrt(e * e + b * b + n * n)) ? (j = 1 / j, e *= j, b *= j, n *= j) : n = b = e = 0; g = d * n - y * b; p = y * e - a * n; h = a * b - d * e; (j = Math.sqrt(g * g + p * p + h * h)) ? (j = 1 / j, g *= j, p *= j, h *= j) : h = p = g = 0; f[0] = e; f[1] = g; f[2] =
                a; f[3] = 0; f[4] = b; f[5] = p; f[6] = d; f[7] = 0; f[8] = n; f[9] = h; f[10] = y; f[11] = 0; f[12] = -(e * q + b * l + n * c); f[13] = -(g * q + p * l + h * c); f[14] = -(a * q + d * l + y * c); f[15] = 1; return f
        }, fromRotationTranslation: function (c, a, d) { d || (d = r.create()); var f = c[0], e = c[1], b = c[2], n = c[3], g = f + f, p = e + e, h = b + b; c = f * g; var y = f * p, f = f * h, j = e * p, e = e * h, b = b * h, g = n * g, p = n * p, n = n * h; d[0] = 1 - (j + b); d[1] = y + n; d[2] = f - p; d[3] = 0; d[4] = y - n; d[5] = 1 - (c + b); d[6] = e + g; d[7] = 0; d[8] = f + p; d[9] = e - g; d[10] = 1 - (c + j); d[11] = 0; d[12] = a[0]; d[13] = a[1]; d[14] = a[2]; d[15] = 1; return d }, str: function (c) {
            return "[" +
                c[0] + ", " + c[1] + ", " + c[2] + ", " + c[3] + ", " + c[4] + ", " + c[5] + ", " + c[6] + ", " + c[7] + ", " + c[8] + ", " + c[9] + ", " + c[10] + ", " + c[11] + ", " + c[12] + ", " + c[13] + ", " + c[14] + ", " + c[15] + "]"
        }
    }, v = {
        create: function (c) { var a = new e(4); c ? (a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3]) : a[0] = a[1] = a[2] = a[3] = 0; return a }, createFrom: function (c, a, d, f) { var b = new e(4); b[0] = c; b[1] = a; b[2] = d; b[3] = f; return b }, set: function (c, a) { a[0] = c[0]; a[1] = c[1]; a[2] = c[2]; a[3] = c[3]; return a }, equal: function (c, a) {
            return c === a || 1E-6 > Math.abs(c[0] - a[0]) && 1E-6 > Math.abs(c[1] -
                a[1]) && 1E-6 > Math.abs(c[2] - a[2]) && 1E-6 > Math.abs(c[3] - a[3])
        }, identity: function (c) { c || (c = v.create()); c[0] = 0; c[1] = 0; c[2] = 0; c[3] = 1; return c }
    }, u = v.identity(); v.calculateW = function (c, a) { var d = c[0], f = c[1], e = c[2]; if (!a || c === a) return c[3] = -Math.sqrt(Math.abs(1 - d * d - f * f - e * e)), c; a[0] = d; a[1] = f; a[2] = e; a[3] = -Math.sqrt(Math.abs(1 - d * d - f * f - e * e)); return a }; v.dot = function (c, a) { return c[0] * a[0] + c[1] * a[1] + c[2] * a[2] + c[3] * a[3] }; v.inverse = function (c, a) {
        var d = c[0], f = c[1], e = c[2], b = c[3], d = (d = d * d + f * f + e * e + b * b) ? 1 / d : 0; if (!a || c ===
            a) return c[0] *= -d, c[1] *= -d, c[2] *= -d, c[3] *= d, c; a[0] = -c[0] * d; a[1] = -c[1] * d; a[2] = -c[2] * d; a[3] = c[3] * d; return a
    }; v.conjugate = function (c, a) { if (!a || c === a) return c[0] *= -1, c[1] *= -1, c[2] *= -1, c; a[0] = -c[0]; a[1] = -c[1]; a[2] = -c[2]; a[3] = c[3]; return a }; v.length = function (c) { var a = c[0], d = c[1], f = c[2]; c = c[3]; return Math.sqrt(a * a + d * d + f * f + c * c) }; v.normalize = function (c, a) {
        a || (a = c); var d = c[0], f = c[1], e = c[2], b = c[3], n = Math.sqrt(d * d + f * f + e * e + b * b); if (0 === n) return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, a; n = 1 / n; a[0] = d * n; a[1] = f * n; a[2] = e * n; a[3] =
            b * n; return a
    }; v.add = function (c, a, d) { if (!d || c === d) return c[0] += a[0], c[1] += a[1], c[2] += a[2], c[3] += a[3], c; d[0] = c[0] + a[0]; d[1] = c[1] + a[1]; d[2] = c[2] + a[2]; d[3] = c[3] + a[3]; return d }; v.multiply = function (c, a, d) { d || (d = c); var f = c[0], e = c[1], b = c[2]; c = c[3]; var n = a[0], g = a[1], p = a[2]; a = a[3]; d[0] = f * a + c * n + e * p - b * g; d[1] = e * a + c * g + b * n - f * p; d[2] = b * a + c * p + f * g - e * n; d[3] = c * a - f * n - e * g - b * p; return d }; v.multiplyVec3 = function (c, a, d) {
        d || (d = a); var f = a[0], e = a[1], b = a[2]; a = c[0]; var n = c[1], g = c[2]; c = c[3]; var p = c * f + n * b - g * e, h = c * e + g * f - a * b, y = c * b +
            a * e - n * f, f = -a * f - n * e - g * b; d[0] = p * c + f * -a + h * -g - y * -n; d[1] = h * c + f * -n + y * -a - p * -g; d[2] = y * c + f * -g + p * -n - h * -a; return d
    }; v.scale = function (c, a, d) { if (!d || c === d) return c[0] *= a, c[1] *= a, c[2] *= a, c[3] *= a, c; d[0] = c[0] * a; d[1] = c[1] * a; d[2] = c[2] * a; d[3] = c[3] * a; return d }; v.toMat3 = function (c, a) { a || (a = A.create()); var d = c[0], f = c[1], e = c[2], b = c[3], n = d + d, g = f + f, p = e + e, h = d * n, y = d * g, d = d * p, j = f * g, f = f * p, e = e * p, n = b * n, g = b * g, b = b * p; a[0] = 1 - (j + e); a[1] = y + b; a[2] = d - g; a[3] = y - b; a[4] = 1 - (h + e); a[5] = f + n; a[6] = d + g; a[7] = f - n; a[8] = 1 - (h + j); return a }; v.toMat4 = function (c,
        a) { a || (a = r.create()); var d = c[0], f = c[1], e = c[2], b = c[3], n = d + d, g = f + f, p = e + e, h = d * n, y = d * g, d = d * p, j = f * g, f = f * p, e = e * p, n = b * n, g = b * g, b = b * p; a[0] = 1 - (j + e); a[1] = y + b; a[2] = d - g; a[3] = 0; a[4] = y - b; a[5] = 1 - (h + e); a[6] = f + n; a[7] = 0; a[8] = d + g; a[9] = f - n; a[10] = 1 - (h + j); a[11] = 0; a[12] = 0; a[13] = 0; a[14] = 0; a[15] = 1; return a }; v.slerp = function (c, a, d, f) {
            f || (f = c); var e = c[0] * a[0] + c[1] * a[1] + c[2] * a[2] + c[3] * a[3], b, n; if (1 <= Math.abs(e)) return f !== c && (f[0] = c[0], f[1] = c[1], f[2] = c[2], f[3] = c[3]), f; b = Math.acos(e); n = Math.sqrt(1 - e * e); if (0.001 > Math.abs(n)) return f[0] =
                0.5 * c[0] + 0.5 * a[0], f[1] = 0.5 * c[1] + 0.5 * a[1], f[2] = 0.5 * c[2] + 0.5 * a[2], f[3] = 0.5 * c[3] + 0.5 * a[3], f; e = Math.sin((1 - d) * b) / n; d = Math.sin(d * b) / n; f[0] = c[0] * e + a[0] * d; f[1] = c[1] * e + a[1] * d; f[2] = c[2] * e + a[2] * d; f[3] = c[3] * e + a[3] * d; return f
        }; v.fromRotationMatrix = function (c, a) {
            a || (a = v.create()); var d = c[0] + c[4] + c[8], f; if (0 < d) f = Math.sqrt(d + 1), a[3] = 0.5 * f, f = 0.5 / f, a[0] = (c[7] - c[5]) * f, a[1] = (c[2] - c[6]) * f, a[2] = (c[3] - c[1]) * f; else {
                f = v.fromRotationMatrix.s_iNext = v.fromRotationMatrix.s_iNext || [1, 2, 0]; d = 0; c[4] > c[0] && (d = 1); c[8] > c[3 * d + d] &&
                    (d = 2); var e = f[d], b = f[e]; f = Math.sqrt(c[3 * d + d] - c[3 * e + e] - c[3 * b + b] + 1); a[d] = 0.5 * f; f = 0.5 / f; a[3] = (c[3 * b + e] - c[3 * e + b]) * f; a[e] = (c[3 * e + d] + c[3 * d + e]) * f; a[b] = (c[3 * b + d] + c[3 * d + b]) * f
            } return a
        }; A.toQuat4 = v.fromRotationMatrix; var t = A.create(); v.fromAxes = function (a, d, f, e) { t[0] = d[0]; t[3] = d[1]; t[6] = d[2]; t[1] = f[0]; t[4] = f[1]; t[7] = f[2]; t[2] = a[0]; t[5] = a[1]; t[8] = a[2]; return v.fromRotationMatrix(t, e) }; v.identity = function (a) { a || (a = v.create()); a[0] = 0; a[1] = 0; a[2] = 0; a[3] = 1; return a }; v.fromAngleAxis = function (a, d, f) {
            f || (f = v.create());
            a *= 0.5; var e = Math.sin(a); f[3] = Math.cos(a); f[0] = e * d[0]; f[1] = e * d[1]; f[2] = e * d[2]; return f
        }; v.toAngleAxis = function (a, d) { d || (d = a); var f = a[0] * a[0] + a[1] * a[1] + a[2] * a[2]; 0 < f ? (d[3] = 2 * Math.acos(a[3]), f = l.invsqrt(f), d[0] = a[0] * f, d[1] = a[1] * f, d[2] = a[2] * f) : (d[3] = 0, d[0] = 1, d[1] = 0, d[2] = 0); return d }; v.str = function (a) { return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]" }; var w = {
            create: function (a) { var d = new e(2); a ? (d[0] = a[0], d[1] = a[1]) : (d[0] = 0, d[1] = 0); return d }, createFrom: function (a, d) { var f = new e(2); f[0] = a; f[1] = d; return f },
            add: function (a, d, f) { f || (f = d); f[0] = a[0] + d[0]; f[1] = a[1] + d[1]; return f }, subtract: function (a, d, f) { f || (f = d); f[0] = a[0] - d[0]; f[1] = a[1] - d[1]; return f }, multiply: function (a, d, f) { f || (f = d); f[0] = a[0] * d[0]; f[1] = a[1] * d[1]; return f }, divide: function (a, d, f) { f || (f = d); f[0] = a[0] / d[0]; f[1] = a[1] / d[1]; return f }, scale: function (a, d, f) { f || (f = a); f[0] = a[0] * d; f[1] = a[1] * d; return f }, dist: function (a, d) { var f = d[0] - a[0], e = d[1] - a[1]; return Math.sqrt(f * f + e * e) }, set: function (a, d) { d[0] = a[0]; d[1] = a[1]; return d }, equal: function (a, d) {
                return a ===
                    d || 1E-6 > Math.abs(a[0] - d[0]) && 1E-6 > Math.abs(a[1] - d[1])
            }, negate: function (a, d) { d || (d = a); d[0] = -a[0]; d[1] = -a[1]; return d }, normalize: function (a, d) { d || (d = a); var f = a[0] * a[0] + a[1] * a[1]; 0 < f ? (f = Math.sqrt(f), d[0] = a[0] / f, d[1] = a[1] / f) : d[0] = d[1] = 0; return d }, cross: function (a, d, f) { a = a[0] * d[1] - a[1] * d[0]; if (!f) return a; f[0] = f[1] = 0; f[2] = a; return f }, length: function (a) { var d = a[0]; a = a[1]; return Math.sqrt(d * d + a * a) }, squaredLength: function (a) { var d = a[0]; a = a[1]; return d * d + a * a }, dot: function (a, d) { return a[0] * d[0] + a[1] * d[1] },
            direction: function (a, d, f) { f || (f = a); var e = a[0] - d[0]; a = a[1] - d[1]; d = e * e + a * a; if (!d) return f[0] = 0, f[1] = 0, f[2] = 0, f; d = 1 / Math.sqrt(d); f[0] = e * d; f[1] = a * d; return f }, lerp: function (a, d, f, e) { e || (e = a); e[0] = a[0] + f * (d[0] - a[0]); e[1] = a[1] + f * (d[1] - a[1]); return e }, str: function (a) { return "[" + a[0] + ", " + a[1] + "]" }
        }, x = {
            create: function (a) { var d = new e(4); a ? (d[0] = a[0], d[1] = a[1], d[2] = a[2], d[3] = a[3]) : d[0] = d[1] = d[2] = d[3] = 0; return d }, createFrom: function (a, d, f, b) { var n = new e(4); n[0] = a; n[1] = d; n[2] = f; n[3] = b; return n }, set: function (a,
                d) { d[0] = a[0]; d[1] = a[1]; d[2] = a[2]; d[3] = a[3]; return d }, equal: function (a, d) { return a === d || 1E-6 > Math.abs(a[0] - d[0]) && 1E-6 > Math.abs(a[1] - d[1]) && 1E-6 > Math.abs(a[2] - d[2]) && 1E-6 > Math.abs(a[3] - d[3]) }, identity: function (a) { a || (a = x.create()); a[0] = 1; a[1] = 0; a[2] = 0; a[3] = 1; return a }, transpose: function (a, d) { if (!d || a === d) { var f = a[1]; a[1] = a[2]; a[2] = f; return a } d[0] = a[0]; d[1] = a[2]; d[2] = a[1]; d[3] = a[3]; return d }, determinant: function (a) { return a[0] * a[3] - a[2] * a[1] }, inverse: function (a, d) {
                    d || (d = a); var f = a[0], e = a[1], b = a[2],
                        n = a[3], g = f * n - b * e; if (!g) return null; g = 1 / g; d[0] = n * g; d[1] = -e * g; d[2] = -b * g; d[3] = f * g; return d
                }, multiply: function (a, d, f) { f || (f = a); var e = a[0], b = a[1], n = a[2]; a = a[3]; f[0] = e * d[0] + b * d[2]; f[1] = e * d[1] + b * d[3]; f[2] = n * d[0] + a * d[2]; f[3] = n * d[1] + a * d[3]; return f }, rotate: function (a, d, f) { f || (f = a); var e = a[0], b = a[1], n = a[2]; a = a[3]; var g = Math.sin(d); d = Math.cos(d); f[0] = e * d + b * g; f[1] = e * -g + b * d; f[2] = n * d + a * g; f[3] = n * -g + a * d; return f }, multiplyVec2: function (a, d, f) { f || (f = d); var e = d[0]; d = d[1]; f[0] = e * a[0] + d * a[1]; f[1] = e * a[2] + d * a[3]; return f },
            scale: function (a, d, f) { f || (f = a); var e = a[1], b = a[2], n = a[3], g = d[0]; d = d[1]; f[0] = a[0] * g; f[1] = e * d; f[2] = b * g; f[3] = n * d; return f }, str: function (a) { return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]" }
        }, B = {
            create: function (a) { var d = new e(4); a ? (d[0] = a[0], d[1] = a[1], d[2] = a[2], d[3] = a[3]) : (d[0] = 0, d[1] = 0, d[2] = 0, d[3] = 0); return d }, createFrom: function (a, d, f, b) { var n = new e(4); n[0] = a; n[1] = d; n[2] = f; n[3] = b; return n }, add: function (a, d, f) { f || (f = d); f[0] = a[0] + d[0]; f[1] = a[1] + d[1]; f[2] = a[2] + d[2]; f[3] = a[3] + d[3]; return f }, subtract: function (a,
                d, f) { f || (f = d); f[0] = a[0] - d[0]; f[1] = a[1] - d[1]; f[2] = a[2] - d[2]; f[3] = a[3] - d[3]; return f }, multiply: function (a, d, f) { f || (f = d); f[0] = a[0] * d[0]; f[1] = a[1] * d[1]; f[2] = a[2] * d[2]; f[3] = a[3] * d[3]; return f }, divide: function (a, d, f) { f || (f = d); f[0] = a[0] / d[0]; f[1] = a[1] / d[1]; f[2] = a[2] / d[2]; f[3] = a[3] / d[3]; return f }, scale: function (a, d, f) { f || (f = a); f[0] = a[0] * d; f[1] = a[1] * d; f[2] = a[2] * d; f[3] = a[3] * d; return f }, set: function (a, d) { d[0] = a[0]; d[1] = a[1]; d[2] = a[2]; d[3] = a[3]; return d }, equal: function (a, d) {
                    return a === d || 1E-6 > Math.abs(a[0] - d[0]) &&
                        1E-6 > Math.abs(a[1] - d[1]) && 1E-6 > Math.abs(a[2] - d[2]) && 1E-6 > Math.abs(a[3] - d[3])
                }, negate: function (a, d) { d || (d = a); d[0] = -a[0]; d[1] = -a[1]; d[2] = -a[2]; d[3] = -a[3]; return d }, length: function (a) { var d = a[0], f = a[1], e = a[2]; a = a[3]; return Math.sqrt(d * d + f * f + e * e + a * a) }, squaredLength: function (a) { var d = a[0], f = a[1], e = a[2]; a = a[3]; return d * d + f * f + e * e + a * a }, lerp: function (a, d, f, e) { e || (e = a); e[0] = a[0] + f * (d[0] - a[0]); e[1] = a[1] + f * (d[1] - a[1]); e[2] = a[2] + f * (d[2] - a[2]); e[3] = a[3] + f * (d[3] - a[3]); return e }, str: function (a) {
                    return "[" + a[0] + ", " +
                        a[1] + ", " + a[2] + ", " + a[3] + "]"
                }
        }; b && (b.glMatrixArrayType = e, b.MatrixArray = e, b.setMatrixArrayType = j, b.determineMatrixArrayType = o, b.glMath = l, b.vec2 = w, b.vec3 = a, b.vec4 = B, b.mat2 = x, b.mat3 = A, b.mat4 = r, b.quat4 = v); return { glMatrixArrayType: e, MatrixArray: e, setMatrixArrayType: j, determineMatrixArrayType: o, glMath: l, vec2: w, vec3: a, vec4: B, mat2: x, mat3: A, mat4: r, quat4: v }
});
ChemDoodle.animations = function (b) {
    var j = {}; b.requestAnimFrame = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function (j) { b.setTimeout(j, 1E3 / 60) }; j.requestInterval = function (j, l) {
        function h() { (new Date).getTime() - g >= l && (j.call(), g = (new Date).getTime()); e.value = b.requestAnimFrame(h) } if (!b.requestAnimationFrame && !b.webkitRequestAnimationFrame && (!b.mozRequestAnimationFrame || !b.mozCancelRequestAnimationFrame) && !b.oRequestAnimationFrame &&
            !b.msRequestAnimationFrame) return b.setInterval(j, l); var g = (new Date).getTime(), e = {}; e.value = b.requestAnimFrame(h); return e
    }; j.clearRequestInterval = function (j) {
        b.cancelAnimationFrame ? b.cancelAnimationFrame(j.value) : b.webkitCancelAnimationFrame ? b.webkitCancelAnimationFrame(j.value) : b.webkitCancelRequestAnimationFrame ? b.webkitCancelRequestAnimationFrame(j.value) : b.mozCancelRequestAnimationFrame ? b.mozCancelRequestAnimationFrame(j.value) : b.oCancelRequestAnimationFrame ? b.oCancelRequestAnimationFrame(j.value) :
            b.msCancelRequestAnimationFrame ? b.msCancelRequestAnimationFrame(j.value) : clearInterval(j)
    }; j.requestTimeout = function (j, l) { function h() { (new Date).getTime() - g >= l ? j.call() : e.value = b.requestAnimFrame(h) } if (!b.requestAnimationFrame && !b.webkitRequestAnimationFrame && (!b.mozRequestAnimationFrame || !b.mozCancelRequestAnimationFrame) && !b.oRequestAnimationFrame && !b.msRequestAnimationFrame) return b.setTimeout(j, l); var g = (new Date).getTime(), e = {}; e.value = b.requestAnimFrame(h); return e }; j.clearRequestTimeout = function (j) {
        b.cancelAnimationFrame ?
        b.cancelAnimationFrame(j.value) : b.webkitCancelAnimationFrame ? b.webkitCancelAnimationFrame(j.value) : b.webkitCancelRequestAnimationFrame ? b.webkitCancelRequestAnimationFrame(j.value) : b.mozCancelRequestAnimationFrame ? b.mozCancelRequestAnimationFrame(j.value) : b.oCancelRequestAnimationFrame ? b.oCancelRequestAnimationFrame(j.value) : b.msCancelRequestAnimationFrame ? b.msCancelRequestAnimationFrame(j.value) : clearTimeout(j)
    }; return j
}(window);
ChemDoodle.extensions = function (b, j, o) {
    return {
        stringStartsWith: function (b, h) { return b.slice(0, h.length) === h }, vec3AngleFrom: function (b, h) { var g = j.length(b), e = j.length(h), g = j.dot(b, h) / g / e; return o.acos(g) }, contextHashTo: function (j, h, g, e, a, d, n) { var f = 0, y = (new b.Point(h, g)).distance(new b.Point(e, a)), p = !1, q = h, o = g; h = e - h; for (g = a - g; f < y;) { if (p) if (f + n > y) { j.moveTo(e, a); break } else { var r = n / y, q = q + r * h, o = o + r * g; j.moveTo(q, o); f += n } else if (f + d > y) { j.lineTo(e, a); break } else r = d / y, q += r * h, o += r * g, j.lineTo(q, o), f += d; p = !p } },
        contextRoundRect: function (b, h, g, e, a, d) { b.beginPath(); b.moveTo(h + d, g); b.lineTo(h + e - d, g); b.quadraticCurveTo(h + e, g, h + e, g + d); b.lineTo(h + e, g + a - d); b.quadraticCurveTo(h + e, g + a, h + e - d, g + a); b.lineTo(h + d, g + a); b.quadraticCurveTo(h, g + a, h, g + a - d); b.lineTo(h, g + d); b.quadraticCurveTo(h, g, h + d, g); b.closePath() }, contextEllipse: function (b, h, g, e, a) {
            var d = 0.5522848 * (e / 2), n = 0.5522848 * (a / 2), f = h + e, y = g + a; e = h + e / 2; a = g + a / 2; b.beginPath(); b.moveTo(h, a); b.bezierCurveTo(h, a - n, e - d, g, e, g); b.bezierCurveTo(e + d, g, f, a - n, f, a); b.bezierCurveTo(f,
                a + n, e + d, y, e, y); b.bezierCurveTo(e - d, y, h, a + n, h, a); b.closePath()
        }, getFontString: function (b, h, g, e) { var a = []; g && a.push("bold "); e && a.push("italic "); a.push(b + "px "); b = 0; for (g = h.length; b < g; b++)e = h[b], -1 !== e.indexOf(" ") && (e = '"' + e + '"'), a.push((0 !== b ? "," : "") + e); return a.join("") }
    }
}(ChemDoodle.structures, ChemDoodle.lib.vec3, Math);
ChemDoodle.math = function (b, j, o, l, h) {
    var g = {}, e = {
        aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9", darkgreen: "#006400", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff",
        gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", honeydew: "#f0fff0", hotpink: "#ff69b4", "indianred ": "#cd5c5c", "indigo ": "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgrey: "#d3d3d3", lightgreen: "#90ee90", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa",
        lightslategray: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370d8", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080",
        oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#d87093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0",
        skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32"
    }; g.angleBetweenLargest = function (a) {
        if (0 === a.length) return { angle: 0, largest: 2 * h.PI }; if (1 === a.length) return { angle: a[0] + h.PI, largest: 2 * h.PI }; for (var d = 0, e = 0, f = 0, b = a.length - 1; f < b; f++) {
            var g = a[f + 1] - a[f];
            g > d && (d = g, e = (a[f + 1] + a[f]) / 2)
        } f = a[0] + 2 * h.PI - a[a.length - 1]; f > d && (e = a[0] - f / 2, d = f, 0 > e && (e += 2 * h.PI)); return { angle: e, largest: d }
    }; g.isBetween = function (a, d, e) { if (d > e) { var f = d; d = e; e = f } return a >= d && a <= e }; l(document).ready(function () { b && (b.iChemLabs && b.iChemLabs.checkForUpdates) && b.iChemLabs.checkForUpdates({}) }); g.getRGB = function (a, d) {
        var b = [0, 0, 0]; e[a.toLowerCase()] && (a = e[a.toLowerCase()]); if ("#" === a.charAt(0)) return 4 === a.length && (a = "#" + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2) + a.charAt(3) + a.charAt(3)),
            [parseInt(a.substring(1, 3), 16) / 255 * d, parseInt(a.substring(3, 5), 16) / 255 * d, parseInt(a.substring(5, 7), 16) / 255 * d]; if (j.stringStartsWith(a, "rgb")) { var f = a.replace(/rgb\(|\)/g, "").split(","); return 3 !== f.length ? b : [parseInt(f[0]) / 255 * d, parseInt(f[1]) / 255 * d, parseInt(f[2]) / 255 * d] } return b
    }; g.idx2color = function (a) { a = a.toString(16); for (var d = 0, e = 6 - a.length; d < e; d++)a = "0" + a; return "#" + a }; g.distanceFromPointToLineInclusive = function (a, d, e) {
        var f = d.distance(e); e = d.angle(e); e = h.PI / 2 - e; e = d.angle(a) + e; a = d.distance(a);
        a = new o.Point(a * h.cos(e), -a * h.sin(e)); return g.isBetween(-a.y, 0, f) ? h.abs(a.x) : -1
    }; g.calculateDistanceInterior = function (a, d, e) {
        if (this.isBetween(d.x, e.x, e.x + e.w) && this.isBetween(d.y, e.y, e.y + e.w)) return a.distance(d); var f = []; f.push({ x1: e.x, y1: e.y, x2: e.x + e.w, y2: e.y }); f.push({ x1: e.x, y1: e.y + e.h, x2: e.x + e.w, y2: e.y + e.h }); f.push({ x1: e.x, y1: e.y, x2: e.x, y2: e.y + e.h }); f.push({ x1: e.x + e.w, y1: e.y, x2: e.x + e.w, y2: e.y + e.h }); e = []; for (var b = 0; 4 > b; b++) {
            var g = f[b]; (g = this.intersectLines(d.x, d.y, a.x, a.y, g.x1, g.y1, g.x2, g.y2)) &&
                e.push(g)
        } if (0 === e.length) return 0; b = d = 0; for (f = e.length; b < f; b++) { var g = e[b], j = a.x - g.x, g = a.y - g.y; d = h.max(d, h.sqrt(j * j + g * g)) } return d
    }; g.intersectLines = function (a, d, e, f, b, g, h, j) { e -= a; f -= d; h -= b; j -= g; var l = f * h - e * j; if (0 === l) return !1; h = (j * (a - b) - h * (d - g)) / l; b = (f * (a - b) - e * (d - g)) / l; return 0 <= b && 1 >= b && 0 <= h && 1 >= h ? { x: a + h * e, y: d + h * f } : !1 }; g.hsl2rgb = function (a, d, e) {
        var f = function (a, d, f) { 0 > f ? f += 1 : 1 < f && (f -= 1); return f < 1 / 6 ? a + 6 * (d - a) * f : 0.5 > f ? d : f < 2 / 3 ? a + 6 * (d - a) * (2 / 3 - f) : a }; if (0 === d) e = d = a = e; else {
            var b = 0.5 > e ? e * (1 + d) : e + d - e *
                d, g = 2 * e - b; e = f(g, b, a + 1 / 3); d = f(g, b, a); a = f(g, b, a - 1 / 3)
        } return [255 * e, 255 * d, 255 * a]
    }; g.isPointInPoly = function (a, d) { for (var e = !1, f = -1, b = a.length, g = b - 1; ++f < b; g = f)(a[f].y <= d.y && d.y < a[g].y || a[g].y <= d.y && d.y < a[f].y) && d.x < (a[g].x - a[f].x) * (d.y - a[f].y) / (a[g].y - a[f].y) + a[f].x && (e = !e); return e }; g.clamp = function (a, d, e) { return a < d ? d : a > e ? e : a }; g.rainbowAt = function (a, d, e) {
        1 > e.length ? e.push("#000000", "#FFFFFF") : 2 > e.length && e.push("#FFFFFF"); var f = d / (e.length - 1); d = h.floor(a / f); a = (a - d * f) / f; f = g.getRGB(e[d], 1); e = g.getRGB(e[d +
            1], 1); return "rgb(" + [255 * (f[0] + (e[0] - f[0]) * a), 255 * (f[1] + (e[1] - f[1]) * a), 255 * (f[2] + (e[2] - f[2]) * a)].join() + ")"
    }; g.angleBounds = function (a, d, e) { for (var f = 2 * h.PI; 0 > a;)a += f; for (; a > f;)a -= f; e && a > h.PI && (a = 2 * h.PI - a); d && (a = 180 * a / h.PI); return a }; return g
}(ChemDoodle, ChemDoodle.extensions, ChemDoodle.structures, ChemDoodle.lib.jQuery, Math);
(function (b, j) {
    b.Bounds = function () { }; var o = b.Bounds.prototype; o.minX = o.minY = o.minZ = Infinity; o.maxX = o.maxY = o.maxZ = -Infinity; o.expand = function (l, h, g, e) {
        l instanceof b.Bounds ? (this.minX = j.min(this.minX, l.minX), this.minY = j.min(this.minY, l.minY), this.maxX = j.max(this.maxX, l.maxX), this.maxY = j.max(this.maxY, l.maxY), Infinity !== l.maxZ && (this.minZ = j.min(this.minZ, l.minZ), this.maxZ = j.max(this.maxZ, l.maxZ))) : (this.minX = j.min(this.minX, l), this.maxX = j.max(this.maxX, l), this.minY = j.min(this.minY, h), this.maxY = j.max(this.maxY,
            h), void 0 !== g && void 0 !== e && (this.minX = j.min(this.minX, g), this.maxX = j.max(this.maxX, g), this.minY = j.min(this.minY, e), this.maxY = j.max(this.maxY, e)))
    }; o.expand3D = function (b, h, g, e, a, d) {
        this.minX = j.min(this.minX, b); this.maxX = j.max(this.maxX, b); this.minY = j.min(this.minY, h); this.maxY = j.max(this.maxY, h); this.minZ = j.min(this.minZ, g); this.maxZ = j.max(this.maxZ, g); void 0 !== e && (void 0 !== a && void 0 !== d) && (this.minX = j.min(this.minX, e), this.maxX = j.max(this.maxX, e), this.minY = j.min(this.minY, a), this.maxY = j.max(this.maxY,
            a), this.minZ = j.min(this.minZ, d), this.maxZ = j.max(this.maxZ, d))
    }
})(ChemDoodle.math, Math);
(function () {
    var b = { subtract: function (a, d) { return { x: a.x - d.x, y: a.y - d.y } }, dotProduct: function (a, d) { return a.x * d.x + a.y * d.y }, square: function (a) { return Math.sqrt(a.x * a.x + a.y * a.y) }, scale: function (a, d) { return { x: a.x * d, y: a.y * d } } }, j = Math.pow(2, -65), o = function (a, d) {
        for (var e = [], n = d.length - 1, g = 2 * n - 1, j = [], o = [], u = [], t = [], w = [[1, 0.6, 0.3, 0.1], [0.4, 0.6, 0.6, 0.4], [0.1, 0.3, 0.6, 1]], x = 0; x <= n; x++)j[x] = b.subtract(d[x], a); for (x = 0; x <= n - 1; x++)o[x] = b.subtract(d[x + 1], d[x]), o[x] = b.scale(o[x], 3); for (x = 0; x <= n - 1; x++)for (var B = 0; B <=
            n; B++)u[x] || (u[x] = []), u[x][B] = b.dotProduct(o[x], j[B]); for (x = 0; x <= g; x++)t[x] || (t[x] = []), t[x].y = 0, t[x].x = parseFloat(x) / g; g = n - 1; for (j = 0; j <= n + g; j++) { x = Math.max(0, j - g); for (o = Math.min(j, n); x <= o; x++)B = j - x, t[x + B].y += u[B][x] * w[B][x] } n = d.length - 1; t = l(t, 2 * n - 1, e, 0); g = b.subtract(a, d[0]); u = b.square(g); for (x = w = 0; x < t; x++)g = b.subtract(a, h(d, n, e[x], null, null)), g = b.square(g), g < u && (u = g, w = e[x]); g = b.subtract(a, d[n]); g = b.square(g); g < u && (u = g, w = 1); return { location: w, distance: u }
    }, l = function (a, d, e, b) {
        var n = [], g = [], o = [], u = [],
        t = 0, w, x; x = 0 == a[0].y ? 0 : 0 < a[0].y ? 1 : -1; for (var B = 1; B <= d; B++)w = 0 == a[B].y ? 0 : 0 < a[B].y ? 1 : -1, w != x && t++, x = w; switch (t) {
            case 0: return 0; case 1: if (64 <= b) return e[0] = (a[0].x + a[d].x) / 2, 1; var c, k, C, t = a[0].y - a[d].y; w = a[d].x - a[0].x; x = a[0].x * a[d].y - a[d].x * a[0].y; B = c = 0; for (k = 1; k < d; k++)C = t * a[k].x + w * a[k].y + x, C > c ? c = C : C < B && (B = C); C = w; k = 0 * C - 1 * t; c = (1 * (x - c) - 0 * C) * (1 / k); C = w; k = 0 * C - 1 * t; t = (1 * (x - B) - 0 * C) * (1 / k); w = Math.min(c, t); if (Math.max(c, t) - w < j) return o = a[d].x - a[0].x, u = a[d].y - a[0].y, e[0] = 0 + 1 * (o * (a[0].y - 0) - u * (a[0].x - 0)) * (1 / (0 * o -
                1 * u)), 1
        }h(a, d, 0.5, n, g); a = l(n, d, o, b + 1); d = l(g, d, u, b + 1); for (b = 0; b < a; b++)e[b] = o[b]; for (b = 0; b < d; b++)e[b + a] = u[b]; return a + d
    }, h = function (a, d, e, b, n) { for (var g = [[]], h = 0; h <= d; h++)g[0][h] = a[h]; for (a = 1; a <= d; a++)for (h = 0; h <= d - a; h++)g[a] || (g[a] = []), g[a][h] || (g[a][h] = {}), g[a][h].x = (1 - e) * g[a - 1][h].x + e * g[a - 1][h + 1].x, g[a][h].y = (1 - e) * g[a - 1][h].y + e * g[a - 1][h + 1].y; if (null != b) for (h = 0; h <= d; h++)b[h] = g[h][0]; if (null != n) for (h = 0; h <= d; h++)n[h] = g[d - h][h]; return g[d][0] }, g = {}, e = function (a, d) {
        var e, b = a.length - 1; e = g[b]; if (!e) {
            e = [];
            var n = function (a) { return function () { return a } }, h = function () { return function (a) { return a } }, j = function () { return function (a) { return 1 - a } }, l = function (a) { return function (c) { for (var d = 1, f = 0; f < a.length; f++)d *= a[f](c); return d } }; e.push(new function () { return function (a) { return Math.pow(a, b) } }); for (var o = 1; o < b; o++) { for (var w = [new n(b)], x = 0; x < b - o; x++)w.push(new h); for (x = 0; x < o; x++)w.push(new j); e.push(new l(w)) } e.push(new function () { return function (a) { return Math.pow(1 - a, b) } }); g[b] = e
        } for (j = h = n = 0; j < a.length; j++)n +=
            a[j].x * e[j](d), h += a[j].y * e[j](d); return { x: n, y: h }
    }, a = function (a, d) { return Math.sqrt(Math.pow(a.x - d.x, 2) + Math.pow(a.y - d.y, 2)) }, d = function (d, b, n) { for (var g = e(d, b), h = 0, j = 0 < n ? 1 : -1, l = null; h < Math.abs(n);)b += 0.005 * j, l = e(d, b), h += a(l, g), g = l; return { point: l, location: b } }, n = function (a, d) { var b = e(a, d), n = e(a.slice(0, a.length - 1), d), g = n.y - b.y, b = n.x - b.x; return 0 == g ? Infinity : Math.atan(g / b) }; ChemDoodle.math.jsBezier = {
        distanceFromCurve: o, gradientAtPoint: n, gradientAtPointAlongCurveFrom: function (a, e, b) {
            e = d(a, e, b); 1 < e.location &&
                (e.location = 1); 0 > e.location && (e.location = 0); return n(a, e.location)
        }, nearestPointOnCurve: function (a, d) { var e = o(a, d); return { point: h(d, d.length - 1, e.location, null, null), location: e.location } }, pointOnCurve: e, pointAlongCurveFrom: function (a, e, b) { return d(a, e, b).point }, perpendicularToCurveAt: function (a, e, b, g) { e = d(a, e, null == g ? 0 : g); a = n(a, e.location); g = Math.atan(-1 / a); a = b / 2 * Math.sin(g); b = b / 2 * Math.cos(g); return [{ x: e.point.x + b, y: e.point.y + a }, { x: e.point.x - b, y: e.point.y - a }] }, locationAlongCurveFrom: function (a, e, b) {
            return d(a,
                e, b).location
        }, getLength: function (d) { for (var b = e(d, 0), n = 0, g = 0, h = null; 1 > g;)g += 0.005, h = e(d, g), n += a(h, b), b = h; return n }
    }
})(ChemDoodle.math);
ChemDoodle.featureDetection = function (b, j, o, l) {
    var h = {
        supports_canvas: function () { return !!o.createElement("canvas").getContext }, supports_canvas_text: function () { return !h.supports_canvas() ? !1 : "function" === typeof o.createElement("canvas").getContext("2d").fillText }, supports_webgl: function () { var b = o.createElement("canvas"); try { if (b.getContext("webgl") || b.getContext("experimental-webgl")) return !0 } catch (e) { } return !1 }, supports_xhr2: function () { return j.support.cors }, supports_touch: function () {
            return "ontouchstart" in
                l && navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|BB10/i)
        }, supports_gesture: function () { return "ongesturestart" in l }
    }; return h
}(ChemDoodle.iChemLabs, ChemDoodle.lib.jQuery, document, window); ChemDoodle.SYMBOLS = "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Uut Uuq Uup Uuh Uus Uuo".split(" ");
ChemDoodle.ELEMENT = function () {
    function b(b, j, h, g, e, a, d, n, f) { this.symbol = b; this.name = j; this.atomicNumber = h; this.addH = g; this.jmolColor = this.pymolColor = e; this.covalentRadius = a; this.vdWRadius = d; this.valency = n; this.mass = f } var j = []; j.H = new b("H", "Hydrogen", 1, !1, "#FFFFFF", 0.31, 1.2, 1, 1); j.He = new b("He", "Helium", 2, !1, "#D9FFFF", 0.28, 1.4, 0, 4); j.Li = new b("Li", "Lithium", 3, !1, "#CC80FF", 1.28, 1.82, 1, 7); j.Be = new b("Be", "Beryllium", 4, !1, "#C2FF00", 0.96, 0, 2, 9); j.B = new b("B", "Boron", 5, !0, "#FFB5B5", 0.84, 0, 3, 11); j.C = new b("C",
        "Carbon", 6, !0, "#909090", 0.76, 1.7, 4, 12); j.N = new b("N", "Nitrogen", 7, !0, "#3050F8", 0.71, 1.55, 3, 14); j.O = new b("O", "Oxygen", 8, !0, "#FF0D0D", 0.66, 1.52, 2, 16); j.F = new b("F", "Fluorine", 9, !0, "#90E050", 0.57, 1.47, 1, 19); j.Ne = new b("Ne", "Neon", 10, !1, "#B3E3F5", 0.58, 1.54, 0, 20); j.Na = new b("Na", "Sodium", 11, !1, "#AB5CF2", 1.66, 2.27, 1, 23); j.Mg = new b("Mg", "Magnesium", 12, !1, "#8AFF00", 1.41, 1.73, 0, 24); j.Al = new b("Al", "Aluminum", 13, !1, "#BFA6A6", 1.21, 0, 0, 27); j.Si = new b("Si", "Silicon", 14, !0, "#F0C8A0", 1.11, 2.1, 4, 28); j.P = new b("P",
            "Phosphorus", 15, !0, "#FF8000", 1.07, 1.8, 3, 31); j.S = new b("S", "Sulfur", 16, !0, "#FFFF30", 1.05, 1.8, 2, 32); j.Cl = new b("Cl", "Chlorine", 17, !0, "#1FF01F", 1.02, 1.75, 1, 35); j.Ar = new b("Ar", "Argon", 18, !1, "#80D1E3", 1.06, 1.88, 0, 40); j.K = new b("K", "Potassium", 19, !1, "#8F40D4", 2.03, 2.75, 0, 39); j.Ca = new b("Ca", "Calcium", 20, !1, "#3DFF00", 1.76, 0, 0, 40); j.Sc = new b("Sc", "Scandium", 21, !1, "#E6E6E6", 1.7, 0, 0, 45); j.Ti = new b("Ti", "Titanium", 22, !1, "#BFC2C7", 1.6, 0, 1, 48); j.V = new b("V", "Vanadium", 23, !1, "#A6A6AB", 1.53, 0, 1, 51); j.Cr = new b("Cr",
                "Chromium", 24, !1, "#8A99C7", 1.39, 0, 2, 52); j.Mn = new b("Mn", "Manganese", 25, !1, "#9C7AC7", 1.39, 0, 3, 55); j.Fe = new b("Fe", "Iron", 26, !1, "#E06633", 1.32, 0, 2, 56); j.Co = new b("Co", "Cobalt", 27, !1, "#F090A0", 1.26, 0, 1, 59); j.Ni = new b("Ni", "Nickel", 28, !1, "#50D050", 1.24, 1.63, 1, 58); j.Cu = new b("Cu", "Copper", 29, !1, "#C88033", 1.32, 1.4, 0, 63); j.Zn = new b("Zn", "Zinc", 30, !1, "#7D80B0", 1.22, 1.39, 0, 64); j.Ga = new b("Ga", "Gallium", 31, !1, "#C28F8F", 1.22, 1.87, 0, 69); j.Ge = new b("Ge", "Germanium", 32, !1, "#668F8F", 1.2, 0, 4, 74); j.As = new b("As",
                    "Arsenic", 33, !0, "#BD80E3", 1.19, 1.85, 3, 75); j.Se = new b("Se", "Selenium", 34, !0, "#FFA100", 1.2, 1.9, 2, 80); j.Br = new b("Br", "Bromine", 35, !0, "#A62929", 1.2, 1.85, 1, 79); j.Kr = new b("Kr", "Krypton", 36, !1, "#5CB8D1", 1.16, 2.02, 0, 84); j.Rb = new b("Rb", "Rubidium", 37, !1, "#702EB0", 2.2, 0, 0, 85); j.Sr = new b("Sr", "Strontium", 38, !1, "#00FF00", 1.95, 0, 0, 88); j.Y = new b("Y", "Yttrium", 39, !1, "#94FFFF", 1.9, 0, 0, 89); j.Zr = new b("Zr", "Zirconium", 40, !1, "#94E0E0", 1.75, 0, 0, 90); j.Nb = new b("Nb", "Niobium", 41, !1, "#73C2C9", 1.64, 0, 1, 93); j.Mo = new b("Mo",
                        "Molybdenum", 42, !1, "#54B5B5", 1.54, 0, 2, 98); j.Tc = new b("Tc", "Technetium", 43, !1, "#3B9E9E", 1.47, 0, 3, 0); j.Ru = new b("Ru", "Ruthenium", 44, !1, "#248F8F", 1.46, 0, 2, 102); j.Rh = new b("Rh", "Rhodium", 45, !1, "#0A7D8C", 1.42, 0, 1, 103); j.Pd = new b("Pd", "Palladium", 46, !1, "#006985", 1.39, 1.63, 0, 106); j.Ag = new b("Ag", "Silver", 47, !1, "#C0C0C0", 1.45, 1.72, 0, 107); j.Cd = new b("Cd", "Cadmium", 48, !1, "#FFD98F", 1.44, 1.58, 0, 114); j.In = new b("In", "Indium", 49, !1, "#A67573", 1.42, 1.93, 0, 115); j.Sn = new b("Sn", "Tin", 50, !1, "#668080", 1.39, 2.17, 4, 120);
    j.Sb = new b("Sb", "Antimony", 51, !1, "#9E63B5", 1.39, 0, 3, 121); j.Te = new b("Te", "Tellurium", 52, !0, "#D47A00", 1.38, 2.06, 2, 130); j.I = new b("I", "Iodine", 53, !0, "#940094", 1.39, 1.98, 1, 127); j.Xe = new b("Xe", "Xenon", 54, !1, "#429EB0", 1.4, 2.16, 0, 132); j.Cs = new b("Cs", "Cesium", 55, !1, "#57178F", 2.44, 0, 0, 133); j.Ba = new b("Ba", "Barium", 56, !1, "#00C900", 2.15, 0, 0, 138); j.La = new b("La", "Lanthanum", 57, !1, "#70D4FF", 2.07, 0, 0, 139); j.Ce = new b("Ce", "Cerium", 58, !1, "#FFFFC7", 2.04, 0, 0, 140); j.Pr = new b("Pr", "Praseodymium", 59, !1, "#D9FFC7", 2.03,
        0, 0, 141); j.Nd = new b("Nd", "Neodymium", 60, !1, "#C7FFC7", 2.01, 0, 0, 142); j.Pm = new b("Pm", "Promethium", 61, !1, "#A3FFC7", 1.99, 0, 0, 0); j.Sm = new b("Sm", "Samarium", 62, !1, "#8FFFC7", 1.98, 0, 0, 152); j.Eu = new b("Eu", "Europium", 63, !1, "#61FFC7", 1.98, 0, 0, 153); j.Gd = new b("Gd", "Gadolinium", 64, !1, "#45FFC7", 1.96, 0, 0, 158); j.Tb = new b("Tb", "Terbium", 65, !1, "#30FFC7", 1.94, 0, 0, 159); j.Dy = new b("Dy", "Dysprosium", 66, !1, "#1FFFC7", 1.92, 0, 0, 164); j.Ho = new b("Ho", "Holmium", 67, !1, "#00FF9C", 1.92, 0, 0, 165); j.Er = new b("Er", "Erbium", 68, !1, "#00E675",
            1.89, 0, 0, 166); j.Tm = new b("Tm", "Thulium", 69, !1, "#00D452", 1.9, 0, 0, 169); j.Yb = new b("Yb", "Ytterbium", 70, !1, "#00BF38", 1.87, 0, 0, 174); j.Lu = new b("Lu", "Lutetium", 71, !1, "#00AB24", 1.87, 0, 0, 175); j.Hf = new b("Hf", "Hafnium", 72, !1, "#4DC2FF", 1.75, 0, 0, 180); j.Ta = new b("Ta", "Tantalum", 73, !1, "#4DA6FF", 1.7, 0, 1, 181); j.W = new b("W", "Tungsten", 74, !1, "#2194D6", 1.62, 0, 2, 184); j.Re = new b("Re", "Rhenium", 75, !1, "#267DAB", 1.51, 0, 3, 187); j.Os = new b("Os", "Osmium", 76, !1, "#266696", 1.44, 0, 2, 192); j.Ir = new b("Ir", "Iridium", 77, !1, "#175487",
                1.41, 0, 3, 193); j.Pt = new b("Pt", "Platinum", 78, !1, "#D0D0E0", 1.36, 1.75, 0, 195); j.Au = new b("Au", "Gold", 79, !1, "#FFD123", 1.36, 1.66, 1, 197); j.Hg = new b("Hg", "Mercury", 80, !1, "#B8B8D0", 1.32, 1.55, 0, 202); j.Tl = new b("Tl", "Thallium", 81, !1, "#A6544D", 1.45, 1.96, 0, 205); j.Pb = new b("Pb", "Lead", 82, !1, "#575961", 1.46, 2.02, 4, 208); j.Bi = new b("Bi", "Bismuth", 83, !1, "#9E4FB5", 1.48, 0, 3, 209); j.Po = new b("Po", "Polonium", 84, !1, "#AB5C00", 1.4, 0, 2, 0); j.At = new b("At", "Astatine", 85, !0, "#754F45", 1.5, 0, 1, 0); j.Rn = new b("Rn", "Radon", 86, !1, "#428296",
                    1.5, 0, 0, 0); j.Fr = new b("Fr", "Francium", 87, !1, "#420066", 2.6, 0, 0, 0); j.Ra = new b("Ra", "Radium", 88, !1, "#007D00", 2.21, 0, 0, 0); j.Ac = new b("Ac", "Actinium", 89, !1, "#70ABFA", 2.15, 0, 0, 0); j.Th = new b("Th", "Thorium", 90, !1, "#00BAFF", 2.06, 0, 0, 232); j.Pa = new b("Pa", "Protactinium", 91, !1, "#00A1FF", 2, 0, 0, 231); j.U = new b("U", "Uranium", 92, !1, "#008FFF", 1.96, 1.86, 0, 238); j.Np = new b("Np", "Neptunium", 93, !1, "#0080FF", 1.9, 0, 0, 0); j.Pu = new b("Pu", "Plutonium", 94, !1, "#006BFF", 1.87, 0, 0, 0); j.Am = new b("Am", "Americium", 95, !1, "#545CF2", 1.8,
                        0, 0, 0); j.Cm = new b("Cm", "Curium", 96, !1, "#785CE3", 1.69, 0, 0, 0); j.Bk = new b("Bk", "Berkelium", 97, !1, "#8A4FE3", 0, 0, 0, 0); j.Cf = new b("Cf", "Californium", 98, !1, "#A136D4", 0, 0, 0, 0); j.Es = new b("Es", "Einsteinium", 99, !1, "#B31FD4", 0, 0, 0, 0); j.Fm = new b("Fm", "Fermium", 100, !1, "#B31FBA", 0, 0, 0, 0); j.Md = new b("Md", "Mendelevium", 101, !1, "#B30DA6", 0, 0, 0, 0); j.No = new b("No", "Nobelium", 102, !1, "#BD0D87", 0, 0, 0, 0); j.Lr = new b("Lr", "Lawrencium", 103, !1, "#C70066", 0, 0, 0, 0); j.Rf = new b("Rf", "Rutherfordium", 104, !1, "#CC0059", 0, 0, 0, 0); j.Db =
                            new b("Db", "Dubnium", 105, !1, "#D1004F", 0, 0, 0, 0); j.Sg = new b("Sg", "Seaborgium", 106, !1, "#D90045", 0, 0, 0, 0); j.Bh = new b("Bh", "Bohrium", 107, !1, "#E00038", 0, 0, 0, 0); j.Hs = new b("Hs", "Hassium", 108, !1, "#E6002E", 0, 0, 0, 0); j.Mt = new b("Mt", "Meitnerium", 109, !1, "#EB0026", 0, 0, 0, 0); j.Ds = new b("Ds", "Darmstadtium", 110, !1, "#000000", 0, 0, 0, 0); j.Rg = new b("Rg", "Roentgenium", 111, !1, "#000000", 0, 0, 0, 0); j.Cn = new b("Cn", "Copernicium", 112, !1, "#000000", 0, 0, 0, 0); j.Uut = new b("Uut", "Ununtrium", 113, !1, "#000000", 0, 0, 0, 0); j.Uuq = new b("Uuq",
                                "Ununquadium", 114, !1, "#000000", 0, 0, 0, 0); j.Uup = new b("Uup", "Ununpentium", 115, !1, "#000000", 0, 0, 0, 0); j.Uuh = new b("Uuh", "Ununhexium", 116, !1, "#000000", 0, 0, 0, 0); j.Uus = new b("Uus", "Ununseptium", 117, !1, "#000000", 0, 0, 0, 0); j.Uuo = new b("Uuo", "Ununoctium", 118, !1, "#000000", 0, 0, 0, 0); j.H.pymolColor = "#E6E6E6"; j.C.pymolColor = "#33FF33"; j.N.pymolColor = "#3333FF"; j.O.pymolColor = "#FF4D4D"; j.F.pymolColor = "#B3FFFF"; j.S.pymolColor = "#E6C640"; return j
}(ChemDoodle.SYMBOLS);
ChemDoodle.RESIDUE = function () {
    function b(b, j, h, g, e, a) { this.symbol = b; this.name = j; this.polar = h; this.aminoColor = g; this.shapelyColor = e; this.acidity = a } var j = []; j.Ala = new b("Ala", "Alanine", !1, "#C8C8C8", "#8CFF8C", 0); j.Arg = new b("Arg", "Arginine", !0, "#145AFF", "#00007C", 1); j.Asn = new b("Asn", "Asparagine", !0, "#00DCDC", "#FF7C70", 0); j.Asp = new b("Asp", "Aspartic Acid", !0, "#E60A0A", "#A00042", -1); j.Cys = new b("Cys", "Cysteine", !0, "#E6E600", "#FFFF70", 0); j.Gln = new b("Gln", "Glutamine", !0, "#00DCDC", "#FF4C4C", 0); j.Glu = new b("Glu",
        "Glutamic Acid", !0, "#E60A0A", "#660000", -1); j.Gly = new b("Gly", "Glycine", !1, "#EBEBEB", "#FFFFFF", 0); j.His = new b("His", "Histidine", !0, "#8282D2", "#7070FF", 1); j.Ile = new b("Ile", "Isoleucine", !1, "#0F820F", "#004C00", 0); j.Leu = new b("Leu", "Leucine", !1, "#0F820F", "#455E45", 0); j.Lys = new b("Lys", "Lysine", !0, "#145AFF", "#4747B8", 1); j.Met = new b("Met", "Methionine", !1, "#E6E600", "#B8A042", 0); j.Phe = new b("Phe", "Phenylalanine", !1, "#3232AA", "#534C52", 0); j.Pro = new b("Pro", "Proline", !1, "#DC9682", "#525252", 0); j.Ser = new b("Ser",
            "Serine", !0, "#FA9600", "#FF7042", 0); j.Thr = new b("Thr", "Threonine", !0, "#FA9600", "#B84C00", 0); j.Trp = new b("Trp", "Tryptophan", !0, "#B45AB4", "#4F4600", 0); j.Tyr = new b("Tyr", "Tyrosine", !0, "#3232AA", "#8C704C", 0); j.Val = new b("Val", "Valine", !1, "#0F820F", "#FF8CFF", 0); j.Asx = new b("Asx", "Asparagine/Aspartic Acid", !0, "#FF69B4", "#FF00FF", 0); j.Glx = new b("Glx", "Glutamine/Glutamic Acid", !0, "#FF69B4", "#FF00FF", 0); j["*"] = new b("*", "Other", !1, "#BEA06E", "#FF00FF", 0); j.A = new b("A", "Adenine", !1, "#BEA06E", "#A0A0FF", 0); j.G =
                new b("G", "Guanine", !1, "#BEA06E", "#FF7070", 0); j.I = new b("I", "", !1, "#BEA06E", "#80FFFF", 0); j.C = new b("C", "Cytosine", !1, "#BEA06E", "#FF8C4B", 0); j.T = new b("T", "Thymine", !1, "#BEA06E", "#A0FFA0", 0); j.U = new b("U", "Uracil", !1, "#BEA06E", "#FF8080", 0); return j
}();
(function (b) {
    b.Queue = function () { this.queue = [] }; b = b.Queue.prototype; b.queueSpace = 0; b.getSize = function () { return this.queue.length - this.queueSpace }; b.isEmpty = function () { return 0 === this.queue.length }; b.enqueue = function (b) { this.queue.push(b) }; b.dequeue = function () { var b; this.queue.length && (b = this.queue[this.queueSpace], 2 * ++this.queueSpace >= this.queue.length && (this.queue = this.queue.slice(this.queueSpace), this.queueSpace = 0)); return b }; b.getOldestElement = function () {
        var b; this.queue.length && (b = this.queue[this.queueSpace]);
        return b
    }
})(ChemDoodle.structures);
(function (b, j) {
    b.Point = function (b, h) { this.x = b ? b : 0; this.y = h ? h : 0 }; var o = b.Point.prototype; o.sub = function (b) { this.x -= b.x; this.y -= b.y }; o.add = function (b) { this.x += b.x; this.y += b.y }; o.distance = function (b) { var h = b.x - this.x; b = b.y - this.y; return j.sqrt(h * h + b * b) }; o.angleForStupidCanvasArcs = function (b) { var h = b.x - this.x; b = b.y - this.y; for (var g = 0, g = 0 === h ? 0 === b ? 0 : 0 < b ? j.PI / 2 : 3 * j.PI / 2 : 0 === b ? 0 < h ? 0 : j.PI : 0 > h ? j.atan(b / h) + j.PI : 0 > b ? j.atan(b / h) + 2 * j.PI : j.atan(b / h); 0 > g;)g += 2 * j.PI; return g %= 2 * j.PI }; o.angle = function (b) {
        var h = b.x -
            this.x; b = this.y - b.y; for (var g = 0, g = 0 === h ? 0 === b ? 0 : 0 < b ? j.PI / 2 : 3 * j.PI / 2 : 0 === b ? 0 < h ? 0 : j.PI : 0 > h ? j.atan(b / h) + j.PI : 0 > b ? j.atan(b / h) + 2 * j.PI : j.atan(b / h); 0 > g;)g += 2 * j.PI; return g %= 2 * j.PI
    }
})(ChemDoodle.structures, Math);
(function (b, j) {
    var o = /[ ,]+/, l = /\-+/, h = ["Helvetica", "Arial", "Dialog"]; j.Query = function (e) { this.type = e; this.elements = { v: [], not: !1 }; this.saturation = this.hydrogens = this.connectivityNoH = this.connectivity = this.chirality = this.charge = void 0; this.orders = { v: [], not: !1 }; this.cache = this.ringCount = this.aromatic = this.stereo = void 0 }; j.Query.TYPE_ATOM = 0; j.Query.TYPE_BOND = 1; var g = j.Query.prototype; g.parseRange = function (e) {
        var a = []; e = e.split(o); for (var d = 0, b = e.length; d < b; d++) {
            var f = e[d], g = !1, h = !1; "-" === f.charAt(0) &&
                (g = !0, f = f.substring(1)); -1 != f.indexOf("--") && (h = !0); -1 != f.indexOf("-") ? (f = f.split(l), g = { x: parseInt(f[0]) * (g ? -1 : 1), y: parseInt(f[1]) * (h ? -1 : 1) }, g.y < g.x && (h = g.y, g.y = g.x, g.x = h), a.push(g)) : a.push({ x: parseInt(f) * (g ? -1 : 1) })
        } return a
    }; g.draw = function (e, a, d) {
        this.cache || (this.cache = this.toString()); var n = this.cache, f = void 0, g = n.indexOf("("); -1 != g && (n = this.cache.substring(0, g), f = this.cache.substring(g, this.cache.length)); e.textAlign = "center"; e.textBaseline = "middle"; e.font = b.getFontString(12, h, !0, !1); g = e.measureText(n).width;
        e.fillStyle = a.backgroundColor; e.fillRect(d.x - g / 2, d.y - 6, g, 12); e.fillStyle = "black"; e.fillText(n, d.x, d.y); f && (e.font = b.getFontString(10, h, !1, !0), g = e.measureText(f).width, e.fillStyle = a.backgroundColor, e.fillRect(d.x - g / 2, d.y + 6, g, 11), e.fillStyle = "black", e.fillText(f, d.x, d.y + 11))
    }; g.outputRange = function (e) { for (var a = !1, d = [], b = 0, f = e.length; b < f; b++) { a && d.push(","); var a = !0, g = e[b]; g.y ? (d.push(g.x), d.push("-"), d.push(g.y)) : d.push(g.x) } return d.join("") }; g.toString = function () {
        var e = [], a = []; this.type === j.Query.TYPE_ATOM ?
            (!this.elements || 0 === this.elements.v.length ? e.push("[a]") : (this.elements.not && e.push("!"), e.push("["), e.push(this.elements.v.join(",")), e.push("]")), this.chirality && a.push((this.chirality.not ? "!" : "") + "@\x3d" + this.chirality.v), this.aromatic && a.push((this.aromatic.not ? "!" : "") + "A"), this.charge && a.push((this.charge.not ? "!" : "") + "C\x3d" + this.outputRange(this.charge.v)), this.hydrogens && a.push((this.hydrogens.not ? "!" : "") + "H\x3d" + this.outputRange(this.hydrogens.v)), this.ringCount && a.push((this.ringCount.not ?
                "!" : "") + "R\x3d" + this.outputRange(this.ringCount.v)), this.saturation && a.push((this.saturation.not ? "!" : "") + "S"), this.connectivity && a.push((this.connectivity.not ? "!" : "") + "X\x3d" + this.outputRange(this.connectivity.v)), this.connectivityNoH && a.push((this.connectivityNoH.not ? "!" : "") + "x\x3d" + this.outputRange(this.connectivityNoH.v))) : this.type === j.Query.TYPE_BOND && (!this.orders || 0 === this.orders.v.length ? e.push("[a]") : (this.orders.not && e.push("!"), e.push("["), e.push(this.orders.v.join(",")), e.push("]")), this.stereo &&
                    a.push((this.stereo.not ? "!" : "") + "@\x3d" + this.stereo.v), this.aromatic && a.push((this.aromatic.not ? "!" : "") + "A"), this.ringCount && a.push((this.ringCount.not ? "!" : "") + "R\x3d" + this.outputRange(this.ringCount.v))); 0 < a.length && (e.push("("), e.push(a.join(",")), e.push(")")); return e.join("")
    }
})(ChemDoodle.extensions, ChemDoodle.structures, Math);
(function (b, j, o, l, h, g) {
    l.Atom = function (e, a, d, n) { this.label = e ? e.replace(/\s/g, "") : "C"; b[this.label] || (this.label = "C"); this.x = a ? a : 0; this.y = d ? d : 0; this.z = n ? n : 0 }; l = l.Atom.prototype = new l.Point(0, 0); l.charge = 0; l.numLonePair = 0; l.numRadical = 0; l.mass = -1; l.coordinationNumber = 0; l.bondNumber = 0; l.angleOfLeastInterference = 0; l.isHidden = !1; l.altLabel = void 0; l.isLone = !1; l.isHover = !1; l.isSelected = !1; l.add3D = function (e) { this.x += e.x; this.y += e.y; this.z += e.z }; l.sub3D = function (e) { this.x -= e.x; this.y -= e.y; this.z -= e.z }; l.distance3D =
        function (e) { var a = e.x - this.x, d = e.y - this.y; e = e.z - this.z; return h.sqrt(a * a + d * d + e * e) }; l.draw = function (e, a) {
            if (this.isLassoed) { var d = e.createRadialGradient(this.x - 1, this.y - 1, 0, this.x, this.y, 7); d.addColorStop(0, "rgba(212, 99, 0, 0)"); d.addColorStop(0.7, "rgba(212, 99, 0, 0.8)"); e.fillStyle = d; e.beginPath(); e.arc(this.x, this.y, 5, 0, 2 * h.PI, !1); e.fill() } if (!this.query) {
                this.textBounds = []; this.specs && (a = this.specs); var b = j.getFontString(a.atoms_font_size_2D, a.atoms_font_families_2D, a.atoms_font_bold_2D, a.atoms_font_italic_2D);
                e.font = b; e.fillStyle = this.getElementColor(a.atoms_useJMOLColors, a.atoms_usePYMOLColors, a.atoms_color, 2); "H" === this.label && a.atoms_HBlack_2D && (e.fillStyle = "black"); var f; if (this.isLone && !a.atoms_displayAllCarbonLabels_2D || a.atoms_circles_2D) e.beginPath(), e.arc(this.x, this.y, a.atoms_circleDiameter_2D / 2, 0, 2 * h.PI, !1), e.fill(), 0 < a.atoms_circleBorderWidth_2D && (e.lineWidth = a.atoms_circleBorderWidth_2D, e.strokeStyle = "black", e.stroke()); else if (this.isLabelVisible(a)) if (e.textAlign = "center", e.textBaseline =
                    "middle", void 0 !== this.altLabel) { e.fillText(this.altLabel, this.x, this.y); var g = e.measureText(this.altLabel).width; this.textBounds.push({ x: this.x - g / 2, y: this.y - a.atoms_font_size_2D / 2 + 1, w: g, h: a.atoms_font_size_2D - 2 }) } else {
                        e.fillText(this.label, this.x, this.y); g = e.measureText(this.label).width; this.textBounds.push({ x: this.x - g / 2, y: this.y - a.atoms_font_size_2D / 2 + 1, w: g, h: a.atoms_font_size_2D - 2 }); var p = 0; -1 !== this.mass && (d = e.font, e.font = j.getFontString(0.7 * a.atoms_font_size_2D, a.atoms_font_families_2D, a.atoms_font_bold_2D,
                            a.atoms_font_italic_2D), p = e.measureText(this.mass).width, e.fillText(this.mass, this.x - p - 0.5, this.y - a.atoms_font_size_2D / 2 + 1), this.textBounds.push({ x: this.x - g / 2 - p - 0.5, y: this.y - 1.7 * a.atoms_font_size_2D / 2 + 1, w: p, h: a.atoms_font_size_2D / 2 - 1 }), e.font = d); var d = g / 2, q = this.getImplicitHydrogenCount(); if (a.atoms_implicitHydrogens_2D && 0 < q) {
                                f = 0; var l = e.measureText("H").width, r = !0; if (1 < q) {
                                    var v = g / 2 + l / 2, u = 0, t = j.getFontString(0.8 * a.atoms_font_size_2D, a.atoms_font_families_2D, a.atoms_font_bold_2D, a.atoms_font_italic_2D);
                                    e.font = t; var w = e.measureText(q).width; 1 === this.bondNumber ? this.angleOfLeastInterference > h.PI / 2 && this.angleOfLeastInterference < 3 * h.PI / 2 && (v = -g / 2 - w - l / 2 - p / 2, r = !1, f = h.PI) : this.angleOfLeastInterference <= h.PI / 4 || (this.angleOfLeastInterference < 3 * h.PI / 4 ? (v = 0, u = 0.9 * -a.atoms_font_size_2D, 0 !== this.charge && (u -= 0.3 * a.atoms_font_size_2D), r = !1, f = h.PI / 2) : this.angleOfLeastInterference <= 5 * h.PI / 4 ? (v = -g / 2 - w - l / 2 - p / 2, r = !1, f = h.PI) : this.angleOfLeastInterference < 7 * h.PI / 4 && (v = 0, u = 0.9 * a.atoms_font_size_2D, r = !1, f = 3 * h.PI / 2));
                                    e.font = b; e.fillText("H", this.x + v, this.y + u); e.font = t; e.fillText(q, this.x + v + l / 2 + w / 2, this.y + u + 0.3 * a.atoms_font_size_2D); this.textBounds.push({ x: this.x + v - l / 2, y: this.y + u - a.atoms_font_size_2D / 2 + 1, w: l, h: a.atoms_font_size_2D - 2 }); this.textBounds.push({ x: this.x + v + l / 2, y: this.y + u + 0.3 * a.atoms_font_size_2D - a.atoms_font_size_2D / 2 + 1, w: w, h: 0.8 * a.atoms_font_size_2D - 2 })
                                } else v = g / 2 + l / 2, u = 0, 1 === this.bondNumber ? this.angleOfLeastInterference > h.PI / 2 && this.angleOfLeastInterference < 3 * h.PI / 2 && (v = -g / 2 - l / 2 - p / 2, r = !1, f = h.PI) : this.angleOfLeastInterference <=
                                    h.PI / 4 || (this.angleOfLeastInterference < 3 * h.PI / 4 ? (v = 0, u = 0.9 * -a.atoms_font_size_2D, r = !1, f = h.PI / 2) : this.angleOfLeastInterference <= 5 * h.PI / 4 ? (v = -g / 2 - l / 2 - p / 2, r = !1, f = h.PI) : this.angleOfLeastInterference < 7 * h.PI / 4 && (v = 0, u = 0.9 * a.atoms_font_size_2D, r = !1, f = 3 * h.PI / 2)), e.fillText("H", this.x + v, this.y + u), this.textBounds.push({ x: this.x + v - l / 2, y: this.y + u - a.atoms_font_size_2D / 2 + 1, w: l, h: a.atoms_font_size_2D - 2 }); r && (d += l)
                            } 0 !== this.charge && (b = this.charge.toFixed(0), b = "1" === b ? "+" : "-1" === b ? "\u2013" : j.stringStartsWith(b, "-") ?
                                b.substring(1) + "\u2013" : b + "+", g = e.measureText(b).width, d += g / 2, e.textAlign = "center", e.textBaseline = "middle", e.font = j.getFontString(h.floor(0.8 * a.atoms_font_size_2D), a.atoms_font_families_2D, a.atoms_font_bold_2D, a.atoms_font_italic_2D), e.fillText(b, this.x + d - 1, this.y - a.atoms_font_size_2D / 2 + 1), this.textBounds.push({ x: this.x + d - g / 2 - 1, y: this.y - 1.8 * a.atoms_font_size_2D / 2 + 5, w: g, h: a.atoms_font_size_2D / 2 - 1 }))
                } if (0 < this.numLonePair || 0 < this.numRadical) {
                    e.fillStyle = "black"; q = this.angles.slice(0); d = this.angleOfLeastInterference;
                    b = this.largestAngle; void 0 !== f && (q.push(f), q.sort(), b = o.angleBetweenLargest(q), d = b.angle % (2 * h.PI), b = b.largest); g = []; for (p = 0; p < this.numLonePair; p++)g.push({ t: 2 }); for (p = 0; p < this.numRadical; p++)g.push({ t: 1 }); if (void 0 === f && h.abs(b - 2 * h.PI / q.length) < h.PI / 60) { q = h.ceil(g.length / q.length); p = 0; for (l = g.length; p < l; p += q, d += b)this.drawElectrons(e, a, g.slice(p, h.min(g.length, p + q)), d, b, f) } else this.drawElectrons(e, a, g, d, b, f)
                }
            }
        }; l.drawElectrons = function (e, a, d, b, f, g) {
            g = f / (d.length + (0 === this.bonds.length && void 0 ===
                g ? 0 : 1)); f = b - f / 2 + g; for (var j = 0; j < d.length; j++) {
                    var q = d[j]; b = f + j * g; var l = this.x + Math.cos(b) * a.atoms_lonePairDistance_2D, r = this.y - Math.sin(b) * a.atoms_lonePairDistance_2D; 2 === q.t ? (q = b + Math.PI / 2, b = Math.cos(q) * a.atoms_lonePairSpread_2D / 2, q = -Math.sin(q) * a.atoms_lonePairSpread_2D / 2, e.beginPath(), e.arc(l + b, r + q, a.atoms_lonePairDiameter_2D, 0, 2 * h.PI, !1), e.fill(), e.beginPath(), e.arc(l - b, r - q, a.atoms_lonePairDiameter_2D, 0, 2 * h.PI, !1), e.fill()) : 1 === q.t && (e.beginPath(), e.arc(l, r, a.atoms_lonePairDiameter_2D, 0, 2 * h.PI,
                        !1), e.fill())
                }
        }; l.drawDecorations = function (e) { if (this.isHover || this.isSelected) e.strokeStyle = this.isHover ? "#885110" : "#0060B2", e.lineWidth = 1.2, e.beginPath(), e.arc(this.x, this.y, this.isHover ? 7 : 15, 0, 2 * h.PI, !1), e.stroke(); this.isOverlap && (e.strokeStyle = "#C10000", e.lineWidth = 1.2, e.beginPath(), e.arc(this.x, this.y, 7, 0, 2 * h.PI, !1), e.stroke()) }; l.render = function (e, a, d) {
            this.specs && (a = this.specs); var n = g.translate(e.modelViewMatrix, [this.x, this.y, this.z], []), f = a.atoms_useVDWDiameters_3D ? b[this.label].vdWRadius *
                a.atoms_vdwMultiplier_3D : a.atoms_sphereDiameter_3D / 2; 0 === f && (f = 1); g.scale(n, [f, f, f]); d || (d = a.atoms_color, a.atoms_useJMOLColors ? d = b[this.label].jmolColor : a.atoms_usePYMOLColors && (d = b[this.label].pymolColor), e.material.setDiffuseColor(d)); e.setMatrixUniforms(n); e.drawElements(e.TRIANGLES, (this.renderAsStar ? e.starBuffer : e.sphereBuffer).vertexIndexBuffer.numItems, e.UNSIGNED_SHORT, 0)
        }; l.renderHighlight = function (e, a) {
            if (this.isSelected || this.isHover) {
                this.specs && (a = this.specs); var d = g.translate(e.modelViewMatrix,
                    [this.x, this.y, this.z], []), n = a.atoms_useVDWDiameters_3D ? b[this.label].vdWRadius * a.atoms_vdwMultiplier_3D : a.atoms_sphereDiameter_3D / 2; 0 === n && (n = 1); n *= 1.3; g.scale(d, [n, n, n]); e.setMatrixUniforms(d); e.material.setDiffuseColor(this.isHover ? "#885110" : "#0060B2"); e.drawElements(e.TRIANGLES, (this.renderAsStar ? e.starBuffer : e.sphereBuffer).vertexIndexBuffer.numItems, e.UNSIGNED_SHORT, 0)
            }
        }; l.isLabelVisible = function (e) {
            return e.atoms_displayAllCarbonLabels_2D || "C" !== this.label || this.altLabel || (-1 !== this.mass ||
                0 !== this.charge) || e.atoms_showAttributedCarbons_2D && (0 !== this.numRadical || 0 !== this.numLonePair) || this.isHidden && e.atoms_showHiddenCarbons_2D || e.atoms_displayTerminalCarbonLabels_2D && 1 === this.bondNumber ? !0 : !1
        }; l.getImplicitHydrogenCount = function () {
            if ("H" === this.label || !b[this.label] || !b[this.label].addH) return 0; var e = b[this.label].valency, a = e - this.coordinationNumber; 0 < this.numRadical && (a = h.max(0, a - this.numRadical)); 0 < this.charge ? (e = 4 - e, a = this.charge <= e ? a + this.charge : 4 - this.coordinationNumber - this.charge +
                e) : a += this.charge; return 0 > a ? 0 : h.floor(a)
        }; l.getBounds = function () { var e = new o.Bounds; e.expand(this.x, this.y); if (this.textBounds) for (var a = 0, d = this.textBounds.length; a < d; a++) { var b = this.textBounds[a]; e.expand(b.x, b.y, b.x + b.w, b.y + b.h) } return e }; l.getBounds3D = function () { var e = new o.Bounds; e.expand3D(this.x, this.y, this.z); return e }; l.getElementColor = function (e, a, d) { e ? d = b[this.label].jmolColor : a && (d = b[this.label].pymolColor); return d }
})(ChemDoodle.ELEMENT, ChemDoodle.extensions, ChemDoodle.math, ChemDoodle.structures,
    Math, ChemDoodle.lib.mat4);
(function (b, j, o, l, h, g, e) {
    o.Bond = function (a, d, e) { this.a1 = a; this.a2 = d; this.bondOrder = void 0 !== e ? e : 1 }; o.Bond.STEREO_NONE = "none"; o.Bond.STEREO_PROTRUDING = "protruding"; o.Bond.STEREO_RECESSED = "recessed"; o.Bond.STEREO_AMBIGUOUS = "ambiguous"; b = o.Bond.prototype; b.stereo = o.Bond.STEREO_NONE; b.isHover = !1; b.ring = void 0; b.getCenter = function () { return new o.Point((this.a1.x + this.a2.x) / 2, (this.a1.y + this.a2.y) / 2) }; b.getLength = function () { return this.a1.distance(this.a2) }; b.getLength3D = function () { return this.a1.distance3D(this.a2) }; b.contains =
        function (a) { return a === this.a1 || a === this.a2 }; b.getNeighbor = function (a) { if (a === this.a1) return this.a2; if (a === this.a2) return this.a1 }; b.draw = function (a, d) {
            if (!(this.a1.x === this.a2.x && this.a1.y === this.a2.y)) {
                this.specs && (d = this.specs); var e = this.a1.x, f = this.a2.x, b = this.a1.y, g = this.a2.y, q = this.a1.distance(this.a2), A = f - e, r = g - b; if (this.a1.isLassoed && this.a2.isLassoed) {
                    var v = a.createLinearGradient(e, b, f, g); v.addColorStop(0, "rgba(212, 99, 0, 0)"); v.addColorStop(0.5, "rgba(212, 99, 0, 0.8)"); v.addColorStop(1,
                        "rgba(212, 99, 0, 0)"); var u = 2.5, t = this.a1.angle(this.a2) + h.PI / 2, w = h.cos(t), t = h.sin(t), x = e - w * u, B = b + t * u, c = e + w * u, k = b - t * u, C = f + w * u, D = g - t * u, w = f - w * u, t = g + t * u; a.fillStyle = v; a.beginPath(); a.moveTo(x, B); a.lineTo(c, k); a.lineTo(C, D); a.lineTo(w, t); a.closePath(); a.fill()
                } if (d.atoms_display && !d.atoms_circles_2D && this.a1.isLabelVisible(d) && this.a1.textBounds) {
                    u = w = 0; for (x = this.a1.textBounds.length; u < x; u++)w = Math.max(w, l.calculateDistanceInterior(this.a1, this.a2, this.a1.textBounds[u])); w += d.bonds_atomLabelBuffer_2D;
                    w /= q; e += A * w; b += r * w
                } if (d.atoms_display && !d.atoms_circles_2D && this.a2.isLabelVisible(d) && this.a2.textBounds) { u = w = 0; for (x = this.a2.textBounds.length; u < x; u++)w = Math.max(w, l.calculateDistanceInterior(this.a2, this.a1, this.a2.textBounds[u])); w += d.bonds_atomLabelBuffer_2D; w /= q; f -= A * w; g -= r * w } d.bonds_clearOverlaps_2D && (w = e + 0.15 * A, t = b + 0.15 * r, u = f - 0.15 * A, q = g - 0.15 * r, a.strokeStyle = d.backgroundColor, a.lineWidth = d.bonds_width_2D + 2 * d.bonds_overlapClearWidth_2D, a.lineCap = "round", a.beginPath(), a.moveTo(w, t), a.lineTo(u,
                    q), a.closePath(), a.stroke()); a.strokeStyle = d.bonds_color; a.fillStyle = d.bonds_color; a.lineWidth = d.bonds_width_2D; a.lineCap = d.bonds_ends_2D; if (d.bonds_useJMOLColors || d.bonds_usePYMOLColors) w = a.createLinearGradient(e, b, f, g), t = this.a1.getElementColor(d.bonds_useJMOLColors, d.bonds_usePYMOLColors, d.atoms_color, 2), u = this.a2.getElementColor(d.bonds_useJMOLColors, d.bonds_usePYMOLColors, d.atoms_color, 2), w.addColorStop(0, t), d.bonds_colorGradient || (w.addColorStop(0.5, t), w.addColorStop(0.51, u)), w.addColorStop(1,
                        u), a.strokeStyle = w, a.fillStyle = w; if (d.bonds_lewisStyle_2D && 0 === this.bondOrder % 1) this.drawLewisStyle(a, d, e, b, f, g); else switch (this.query ? 1 : this.bondOrder) {
                            case 0: f -= e; g -= b; f = h.sqrt(f * f + g * g); g = h.floor(f / d.bonds_dotSize_2D); f = (f - (g - 1) * d.bonds_dotSize_2D) / 2; 1 === g % 2 ? f += d.bonds_dotSize_2D / 4 : (f -= d.bonds_dotSize_2D / 4, g += 2); g /= 2; r = this.a1.angle(this.a2); w = e + f * Math.cos(r); t = b - f * Math.sin(r); a.beginPath(); for (u = 0; u < g; u++)a.arc(w, t, d.bonds_dotSize_2D / 2, 0, 2 * h.PI, !1), w += 2 * d.bonds_dotSize_2D * Math.cos(r), t -= 2 * d.bonds_dotSize_2D *
                                Math.sin(r); a.fill(); break; case 0.5: a.beginPath(); a.moveTo(e, b); j.contextHashTo(a, e, b, f, g, d.bonds_hashSpacing_2D, d.bonds_hashSpacing_2D); a.stroke(); break; case 1: if (!this.query && (this.stereo === o.Bond.STEREO_PROTRUDING || this.stereo === o.Bond.STEREO_RECESSED)) r = d.bonds_width_2D / 2, u = this.a1.distance(this.a2) * d.bonds_wedgeThickness_2D / 2, t = this.a1.angle(this.a2) + h.PI / 2, w = h.cos(t), t = h.sin(t), x = e - w * r, B = b + t * r, c = e + w * r, k = b - t * r, C = f + w * u, D = g - t * u, w = f - w * u, t = g + t * u, a.beginPath(), a.moveTo(x, B), a.lineTo(c, k), a.lineTo(C,
                                    D), a.lineTo(w, t), a.closePath(), this.stereo === o.Bond.STEREO_PROTRUDING ? a.fill() : (a.save(), a.clip(), a.lineWidth = 2 * u, a.lineCap = "butt", a.beginPath(), a.moveTo(e, b), j.contextHashTo(a, e, b, f, g, d.bonds_hashWidth_2D, d.bonds_hashSpacing_2D), a.stroke(), a.restore()); else if (!this.query && this.stereo === o.Bond.STEREO_AMBIGUOUS) {
                                        a.beginPath(); a.moveTo(e, b); f = h.floor(h.sqrt(A * A + r * r) / d.bonds_wavyLength_2D); t = this.a1.angle(this.a2) + h.PI / 2; w = h.cos(t); t = h.sin(t); g = A / f; r /= f; u = 0; for (x = f; u < x; u++)e += g, b += r, f = d.bonds_wavyLength_2D *
                                            w + e - 0.5 * g, q = d.bonds_wavyLength_2D * -t + b - 0.5 * r, A = d.bonds_wavyLength_2D * -w + e - 0.5 * g, B = d.bonds_wavyLength_2D * t + b - 0.5 * r, 0 === u % 2 ? a.quadraticCurveTo(f, q, e, b) : a.quadraticCurveTo(A, B, e, b); a.stroke(); break
                                    } else a.beginPath(), a.moveTo(e, b), a.lineTo(f, g), a.stroke(), this.query && this.query.draw(a, d, this.getCenter()); break; case 1.5: case 2: this.stereo === o.Bond.STEREO_AMBIGUOUS ? (u = this.a1.distance(this.a2) * d.bonds_saturationWidth_2D / 2, t = this.a1.angle(this.a2) + h.PI / 2, w = h.cos(t), t = h.sin(t), x = e - w * u, B = b + t * u, c = e + w * u, k =
                                        b - t * u, C = f + w * u, D = g - t * u, w = f - w * u, t = g + t * u, a.beginPath(), a.moveTo(x, B), a.lineTo(C, D), a.moveTo(c, k), a.lineTo(w, t), a.stroke()) : !d.bonds_symmetrical_2D && (this.ring || "C" === this.a1.label && "C" === this.a2.label) ? (a.beginPath(), a.moveTo(e, b), a.lineTo(f, g), w = 0, q = this.a1.distance(this.a2), r = this.a1.angle(this.a2), t = r + h.PI / 2, u = q * d.bonds_saturationWidth_2D, A = d.bonds_saturationAngle_2D, A < h.PI / 2 && (w = -(u / h.tan(A))), h.abs(w) < q / 2 && (A = e - h.cos(r) * w, e = f + h.cos(r) * w, f = b + h.sin(r) * w, b = g - h.sin(r) * w, w = h.cos(t), t = h.sin(t), x = A - w *
                                            u, B = f + t * u, c = A + w * u, k = f - t * u, C = e - w * u, D = b + t * u, w = e + w * u, t = b - t * u, !this.ring || this.ring.center.angle(this.a1) > this.ring.center.angle(this.a2) && !(this.ring.center.angle(this.a1) - this.ring.center.angle(this.a2) > h.PI) || this.ring.center.angle(this.a1) - this.ring.center.angle(this.a2) < -h.PI ? (a.moveTo(x, B), 2 === this.bondOrder ? a.lineTo(C, D) : j.contextHashTo(a, x, B, C, D, d.bonds_hashSpacing_2D, d.bonds_hashSpacing_2D)) : (a.moveTo(c, k), 2 === this.bondOrder ? a.lineTo(w, t) : j.contextHashTo(a, c, k, w, t, d.bonds_hashSpacing_2D, d.bonds_hashSpacing_2D)),
                                            a.stroke())) : (u = this.a1.distance(this.a2) * d.bonds_saturationWidth_2D / 2, t = this.a1.angle(this.a2) + h.PI / 2, w = h.cos(t), t = h.sin(t), x = e - w * u, B = b + t * u, c = e + w * u, k = b - t * u, C = f + w * u, D = g - t * u, w = f - w * u, t = g + t * u, a.beginPath(), a.moveTo(x, B), a.lineTo(w, t), a.moveTo(c, k), 2 === this.bondOrder ? a.lineTo(C, D) : j.contextHashTo(a, c, k, C, D, d.bonds_hashSpacing_2D, d.bonds_hashSpacing_2D), a.stroke()); break; case 3: u = this.a1.distance(this.a2) * d.bonds_saturationWidth_2D, t = this.a1.angle(this.a2) + h.PI / 2, w = h.cos(t), t = h.sin(t), x = e - w * u, B = b + t * u,
                                                c = e + w * u, k = b - t * u, C = f + w * u, D = g - t * u, w = f - w * u, t = g + t * u, a.beginPath(), a.moveTo(x, B), a.lineTo(w, t), a.moveTo(c, k), a.lineTo(C, D), a.moveTo(e, b), a.lineTo(f, g), a.stroke()
                        }
            }
        }; b.drawDecorations = function (a) {
            if (this.isHover || this.isSelected) {
                var d = 2 * h.PI, e = (this.a1.angleForStupidCanvasArcs(this.a2) + h.PI / 2) % d; a.strokeStyle = this.isHover ? "#885110" : "#0060B2"; a.lineWidth = 1.2; a.beginPath(); var f = (e + h.PI) % d, f = f % (2 * h.PI); a.arc(this.a1.x, this.a1.y, 7, e, f, !1); a.stroke(); a.beginPath(); e += h.PI; f = (e + h.PI) % d; a.arc(this.a2.x, this.a2.y,
                    7, e, f, !1); a.stroke()
            }
        }; b.drawLewisStyle = function (a, d, e, f, b, g) {
            var j = this.a1.angle(this.a2), l = j + h.PI / 2; b -= e; g -= f; b = h.sqrt(b * b + g * g) / (this.bondOrder + 1); g = b * h.cos(j); j = -b * h.sin(j); e += g; f += j; for (b = 0; b < this.bondOrder; b++) {
                var r = d.atoms_lonePairSpread_2D / 2, o = e - h.cos(l) * r, u = f + h.sin(l) * r, t = e + h.cos(l) * r, r = f - h.sin(l) * r; a.beginPath(); a.arc(o - d.atoms_lonePairDiameter_2D / 2, u - d.atoms_lonePairDiameter_2D / 2, d.atoms_lonePairDiameter_2D, 0, 2 * h.PI, !1); a.fill(); a.beginPath(); a.arc(t - d.atoms_lonePairDiameter_2D / 2, r - d.atoms_lonePairDiameter_2D /
                    2, d.atoms_lonePairDiameter_2D, 0, 2 * h.PI, !1); a.fill(); e += g; f += j
            }
        }; b.render = function (a, d, b) {
            this.specs && (d = this.specs); var f = this.a1.distance3D(this.a2); if (0 !== f) {
                var y = d.bonds_cylinderDiameter_3D / 2, p = d.bonds_color, q, l = g.translate(a.modelViewMatrix, [this.a1.x, this.a1.y, this.a1.z], []), r, o = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z], u = [0, 1, 0], t = 0; this.a1.x === this.a2.x && this.a1.z === this.a2.z ? (u = [0, 0, 1], this.a2.y < this.a1.y && (t = h.PI)) : (t = j.vec3AngleFrom(u, o), u = e.cross(u, o, [])); var w = d.bonds_useJMOLColors,
                    x = d.bonds_usePYMOLColors; if (w || x) p = this.a1.getElementColor(w, x, p), q = this.a2.getElementColor(w, x, d.bonds_color), p != q && (r = g.translate(a.modelViewMatrix, [this.a2.x, this.a2.y, this.a2.z], [])); var w = [0], B; if (b) {
                        d.bonds_showBondOrders_3D && 1 < this.bondOrder && (w = [d.bonds_cylinderDiameter_3D], B = [0, 0, 1], b = g.inverse(a.rotationMatrix, []), g.multiplyVec3(b, B), B = e.cross(o, B, []), e.normalize(B)); var y = 1, c = d.bonds_pillSpacing_3D, o = d.bonds_pillHeight_3D; 0 == this.bondOrder && (d.bonds_renderAsLines_3D ? o = c : (o = d.bonds_pillDiameter_3D,
                            o < d.bonds_cylinderDiameter_3D && (o /= 2), y = o / 2, f /= y, c /= y / 2)); b = o + c; var x = h.floor(f / b), k = (c + d.bonds_pillDiameter_3D + (f - b * x)) / 2, C = x; r && (C = h.floor(x / 2)); f = 0; for (c = w.length; f < c; f++) {
                                var D = g.set(l, []); 0 !== w[f] && g.translate(D, e.scale(B, w[f], [])); 0 !== t && g.rotate(D, t, u); 1 != y && g.scale(D, [y, y, y]); p && a.material.setDiffuseColor(p); g.translate(D, [0, k, 0]); for (var G = 0; G < C; G++)d.bonds_renderAsLines_3D ? 0 == this.bondOrder ? (a.setMatrixUniforms(D), a.drawArrays(a.POINTS, 0, 1)) : (g.scale(D, [1, o, 1]), a.setMatrixUniforms(D), a.drawArrays(a.LINES,
                                    0, a.lineBuffer.vertexPositionBuffer.numItems), g.scale(D, [1, 1 / o, 1])) : (a.setMatrixUniforms(D), 0 == this.bondOrder ? a.drawElements(a.TRIANGLES, a.sphereBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0) : a.drawElements(a.TRIANGLES, a.pillBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0)), g.translate(D, [0, b, 0]); if (r) {
                                        var E, H; d.bonds_renderAsLines_3D ? (E = o, E /= 2, H = 0) : (E = 2 / 3, H = (1 - E) / 2); 0 != x % 2 && (g.scale(D, [1, E, 1]), a.setMatrixUniforms(D), d.bonds_renderAsLines_3D ? 0 == this.bondOrder ? a.drawArrays(a.POINTS, 0, 1) :
                                            a.drawArrays(a.LINES, 0, a.lineBuffer.vertexPositionBuffer.numItems) : 0 == this.bondOrder ? a.drawElements(a.TRIANGLES, a.sphereBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0) : a.drawElements(a.TRIANGLES, a.pillBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0), g.translate(D, [0, b * (1 + H), 0]), g.scale(D, [1, 1 / E, 1])); g.set(r, D); 0 !== w[f] && g.translate(D, e.scale(B, w[f], [])); g.rotate(D, t + h.PI, u); 1 != y && g.scale(D, [y, y, y]); q && a.material.setDiffuseColor(q); g.translate(D, [0, k, 0]); for (G = 0; G < C; G++)d.bonds_renderAsLines_3D ?
                                                0 == this.bondOrder ? (a.setMatrixUniforms(D), a.drawArrays(a.POINTS, 0, 1)) : (g.scale(D, [1, o, 1]), a.setMatrixUniforms(D), a.drawArrays(a.LINES, 0, a.lineBuffer.vertexPositionBuffer.numItems), g.scale(D, [1, 1 / o, 1])) : (a.setMatrixUniforms(D), 0 == this.bondOrder ? a.drawElements(a.TRIANGLES, a.sphereBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0) : a.drawElements(a.TRIANGLES, a.pillBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0)), g.translate(D, [0, b, 0]); 0 != x % 2 && (g.scale(D, [1, E, 1]), a.setMatrixUniforms(D), d.bonds_renderAsLines_3D ?
                                                    0 == this.bondOrder ? a.drawArrays(a.POINTS, 0, 1) : a.drawArrays(a.LINES, 0, a.lineBuffer.vertexPositionBuffer.numItems) : 0 == this.bondOrder ? a.drawElements(a.TRIANGLES, a.sphereBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0) : a.drawElements(a.TRIANGLES, a.pillBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0), g.translate(D, [0, b * (1 + H), 0]), g.scale(D, [1, 1 / E, 1]))
                                    }
                            }
                    } else {
                        if (d.bonds_showBondOrders_3D) {
                            switch (this.bondOrder) {
                                case 1.5: w = [-d.bonds_cylinderDiameter_3D]; break; case 2: w = [-d.bonds_cylinderDiameter_3D,
                                d.bonds_cylinderDiameter_3D]; break; case 3: w = [-1.2 * d.bonds_cylinderDiameter_3D, 0, 1.2 * d.bonds_cylinderDiameter_3D]
                            }1 < this.bondOrder && (B = [0, 0, 1], b = g.inverse(a.rotationMatrix, []), g.multiplyVec3(b, B), B = e.cross(o, B, []), e.normalize(B))
                        } else switch (this.bondOrder) { case 0: y *= 0.25; break; case 0.5: case 1.5: y *= 0.5 }r && (f /= 2); y = [y, f, y]; f = 0; for (c = w.length; f < c; f++)D = g.set(l, []), 0 !== w[f] && g.translate(D, e.scale(B, w[f], [])), 0 !== t && g.rotate(D, t, u), g.scale(D, y), p && a.material.setDiffuseColor(p), a.setMatrixUniforms(D), d.bonds_renderAsLines_3D ?
                            a.drawArrays(a.LINES, 0, a.lineBuffer.vertexPositionBuffer.numItems) : a.drawArrays(a.TRIANGLE_STRIP, 0, a.cylinderBuffer.vertexPositionBuffer.numItems), r && (g.set(r, D), 0 !== w[f] && g.translate(D, e.scale(B, w[f], [])), g.rotate(D, t + h.PI, u), g.scale(D, y), q && a.material.setDiffuseColor(q), a.setMatrixUniforms(D), d.bonds_renderAsLines_3D ? a.drawArrays(a.LINES, 0, a.lineBuffer.vertexPositionBuffer.numItems) : a.drawArrays(a.TRIANGLE_STRIP, 0, a.cylinderBuffer.vertexPositionBuffer.numItems))
                }
            }
        }; b.renderHighlight = function (a,
            d) {
                if (this.isSelected || this.isHover) {
                    this.specs && (d = this.specs); this.specs && (d = this.specs); var b = this.a1.distance3D(this.a2); if (0 !== b) {
                        var f = d.bonds_cylinderDiameter_3D / 1.2, y = g.translate(a.modelViewMatrix, [this.a1.x, this.a1.y, this.a1.z], []), p = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z], q = [0, 1, 0], l = 0; this.a1.x === this.a2.x && this.a1.z === this.a2.z ? (p = [0, 0, 1], this.a2.y < this.a1.y && (l = h.PI)) : (l = j.vec3AngleFrom(q, p), p = e.cross(q, p, [])); b = [f, b, f]; 0 !== l && g.rotate(y, l, p); g.scale(y, b); a.setMatrixUniforms(y);
                        a.material.setDiffuseColor(this.isHover ? "#885110" : "#0060B2"); a.drawArrays(a.TRIANGLE_STRIP, 0, a.cylinderBuffer.vertexPositionBuffer.numItems)
                    }
                }
        }; b.renderPicker = function (a, d) {
            this.specs && (d = this.specs); var b = this.a1.distance3D(this.a2); if (0 !== b) {
                var f = d.bonds_cylinderDiameter_3D / 2, y = g.translate(a.modelViewMatrix, [this.a1.x, this.a1.y, this.a1.z], []), p = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z], q = [0, 1, 0], l = 0; this.a1.x === this.a2.x && this.a1.z === this.a2.z ? (q = [0, 0, 1], this.a2.y < this.a1.y &&
                    (l = h.PI)) : (l = j.vec3AngleFrom(q, p), q = e.cross(q, p, [])); var o = [0], v; if (d.bonds_showBondOrders_3D) if (d.bonds_renderAsLines_3D) { switch (this.bondOrder) { case 1.5: case 2: o = [-d.bonds_cylinderDiameter_3D, d.bonds_cylinderDiameter_3D]; break; case 3: o = [-1.2 * d.bonds_cylinderDiameter_3D, 0, 1.2 * d.bonds_cylinderDiameter_3D] }if (1 < this.bondOrder) { v = [0, 0, 1]; var u = g.inverse(a.rotationMatrix, []); g.multiplyVec3(u, v); v = e.cross(p, v, []); e.normalize(v) } } else switch (this.bondOrder) { case 1.5: case 2: f *= 3; break; case 3: f *= 3.4 } else switch (this.bondOrder) {
                        case 0: f *=
                            0.25; break; case 0.5: case 1.5: f *= 0.5
                    }b = [f, b, f]; f = 0; for (p = o.length; f < p; f++)u = g.set(y, []), 0 !== o[f] && g.translate(u, e.scale(v, o[f], [])), 0 !== l && g.rotate(u, l, q), g.scale(u, b), a.setMatrixUniforms(u), d.bonds_renderAsLines_3D ? a.drawArrays(a.LINES, 0, a.lineBuffer.vertexPositionBuffer.numItems) : a.drawArrays(a.TRIANGLE_STRIP, 0, a.cylinderBuffer.vertexPositionBuffer.numItems)
            }
        }
})(ChemDoodle.ELEMENT, ChemDoodle.extensions, ChemDoodle.structures, ChemDoodle.math, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function (b, j) { b.Ring = function () { this.atoms = []; this.bonds = [] }; var o = b.Ring.prototype; o.center = void 0; o.setupBonds = function () { for (var b = 0, h = this.bonds.length; b < h; b++)this.bonds[b].ring = this; this.center = this.getCenter() }; o.getCenter = function () { for (var l = Infinity, h = Infinity, g = -Infinity, e = -Infinity, a = 0, d = this.atoms.length; a < d; a++)l = j.min(this.atoms[a].x, l), h = j.min(this.atoms[a].y, h), g = j.max(this.atoms[a].x, g), e = j.max(this.atoms[a].y, e); return new b.Point((g + l) / 2, (e + h) / 2) } })(ChemDoodle.structures, Math);
(function (b, j, o, l, h) {
    o.Molecule = function () { this.atoms = []; this.bonds = []; this.rings = [] }; var g = o.Molecule.prototype; g.findRings = !0; g.draw = function (e, a) { this.specs && (a = this.specs); if (a.atoms_display && !a.atoms_circles_2D) for (var d = 0, b = this.atoms.length; d < b; d++)this.atoms[d].draw(e, a); if (a.bonds_display) { d = 0; for (b = this.bonds.length; d < b; d++)this.bonds[d].draw(e, a) } if (a.atoms_display) { d = 0; for (b = this.atoms.length; d < b; d++) { var f = this.atoms[d]; a.atoms_circles_2D && f.draw(e, a); f.query && f.query.draw(e, a, f) } } };
    g.render = function (e, a) {
        this.specs && (a = this.specs); var d = 0 < this.atoms.length && void 0 !== this.atoms[0].hetatm; if (d) {
            if (a.macro_displayBonds) {
                0 < this.bonds.length && (a.bonds_renderAsLines_3D && !this.residueSpecs || this.residueSpecs && this.residueSpecs.bonds_renderAsLines_3D ? (e.lineWidth(this.residueSpecs ? this.residueSpecs.bonds_width_2D : a.bonds_width_2D), e.lineBuffer.bindBuffers(e)) : e.cylinderBuffer.bindBuffers(e), e.material.setTempColors(a.bonds_materialAmbientColor_3D, void 0, a.bonds_materialSpecularColor_3D,
                    a.bonds_materialShininess_3D)); for (var b = 0, f = this.bonds.length; b < f; b++) { var g = this.bonds[b]; if (!g.a1.hetatm && (-1 === a.macro_atomToLigandDistance || void 0 !== g.a1.closestDistance && a.macro_atomToLigandDistance >= g.a1.closestDistance && a.macro_atomToLigandDistance >= g.a2.closestDistance)) g.render(e, this.residueSpecs ? this.residueSpecs : a) }
            } if (a.macro_displayAtoms) {
                0 < this.atoms.length && (e.sphereBuffer.bindBuffers(e), e.material.setTempColors(a.atoms_materialAmbientColor_3D, void 0, a.atoms_materialSpecularColor_3D,
                    a.atoms_materialShininess_3D)); b = 0; for (f = this.atoms.length; b < f; b++)if (g = this.atoms[b], !g.hetatm && (-1 === a.macro_atomToLigandDistance || void 0 !== g.closestDistance && a.macro_atomToLigandDistance >= g.closestDistance)) g.render(e, this.residueSpecs ? this.residueSpecs : a)
            }
        } if (a.bonds_display) {
            var h = [], q = []; 0 < this.bonds.length && (a.bonds_renderAsLines_3D ? (e.lineWidth(a.bonds_width_2D), e.lineBuffer.bindBuffers(e)) : e.cylinderBuffer.bindBuffers(e), e.material.setTempColors(a.bonds_materialAmbientColor_3D, void 0, a.bonds_materialSpecularColor_3D,
                a.bonds_materialShininess_3D)); b = 0; for (f = this.bonds.length; b < f; b++)if (g = this.bonds[b], !d || g.a1.hetatm) a.bonds_showBondOrders_3D ? 0 == g.bondOrder ? q.push(g) : 0.5 == g.bondOrder ? h.push(g) : (1.5 == g.bondOrder && h.push(g), g.render(e, a)) : g.render(e, a); if (0 < h.length) { a.bonds_renderAsLines_3D || e.pillBuffer.bindBuffers(e); b = 0; for (f = h.length; b < f; b++)h[b].render(e, a, !0) } if (0 < q.length) { a.bonds_renderAsLines_3D || e.sphereBuffer.bindBuffers(e); b = 0; for (f = q.length; b < f; b++)q[b].render(e, a, !0) }
        } if (a.atoms_display) {
            b = 0; for (f =
                this.atoms.length; b < f; b++)g = this.atoms[b], g.bondNumber = 0, g.renderAsStar = !1; b = 0; for (f = this.bonds.length; b < f; b++)g = this.bonds[b], g.a1.bondNumber++, g.a2.bondNumber++; 0 < this.atoms.length && (e.sphereBuffer.bindBuffers(e), e.material.setTempColors(a.atoms_materialAmbientColor_3D, void 0, a.atoms_materialSpecularColor_3D, a.atoms_materialShininess_3D)); h = []; b = 0; for (f = this.atoms.length; b < f; b++)if (g = this.atoms[b], !d || g.hetatm && (a.macro_showWater || !g.isWater)) a.atoms_nonBondedAsStars_3D && 0 === g.bondNumber ? (g.renderAsStar =
                    !0, h.push(g)) : g.render(e, a); if (0 < h.length) { e.starBuffer.bindBuffers(e); b = 0; for (f = h.length; b < f; b++)h[b].render(e, a) }
        } if (this.chains) {
            e.setMatrixUniforms(e.modelViewMatrix); if (a.proteins_displayRibbon) {
                e.material.setTempColors(a.proteins_materialAmbientColor_3D, void 0, a.proteins_materialSpecularColor_3D, a.proteins_materialShininess_3D); g = a.proteins_ribbonCartoonize ? this.cartoons : this.ribbons; d = 0; for (h = g.length; d < h; d++)if (q = g[d], "none" !== a.proteins_residueColor) {
                    q.front.bindBuffers(e); for (var A = "rainbow" ===
                        a.proteins_residueColor, b = 0, f = q.front.segments.length; b < f; b++)A && e.material.setDiffuseColor(j.rainbowAt(b, f, a.macro_rainbowColors)), q.front.segments[b].render(e, a); q.back.bindBuffers(e); b = 0; for (f = q.back.segments.length; b < f; b++)A && e.material.setDiffuseColor(j.rainbowAt(b, f, a.macro_rainbowColors)), q.back.segments[b].render(e, a)
                } else q.front.render(e, a), q.back.render(e, a)
            } if (a.proteins_displayPipePlank) { d = 0; for (h = this.pipePlanks.length; d < h; d++)this.pipePlanks[d].render(e, a) } if (a.proteins_displayBackbone) {
                if (!this.alphaCarbonTrace) {
                    this.alphaCarbonTrace =
                    { nodes: [], edges: [] }; d = 0; for (h = this.chains.length; d < h; d++)if (q = this.chains[d], !(2 < q.length && l[q[2].name] && "#BEA06E" === l[q[2].name].aminoColor) && 0 < q.length) { b = 0; for (f = q.length - 2; b < f; b++)g = q[b].cp1, g.chainColor = q.chainColor, this.alphaCarbonTrace.nodes.push(g), g = new o.Bond(q[b].cp1, q[b + 1].cp1), g.residueName = q[b].name, g.chainColor = q.chainColor, this.alphaCarbonTrace.edges.push(g), b === q.length - 3 && (g = q[b + 1].cp1, g.chainColor = q.chainColor, this.alphaCarbonTrace.nodes.push(g)) }
                } if (0 < this.alphaCarbonTrace.nodes.length) {
                    d =
                    new o.VisualSpecifications; d.atoms_display = !0; d.bonds_display = !0; d.atoms_sphereDiameter_3D = a.proteins_backboneThickness; d.bonds_cylinderDiameter_3D = a.proteins_backboneThickness; d.bonds_useJMOLColors = !1; d.atoms_color = a.proteins_backboneColor; d.bonds_color = a.proteins_backboneColor; d.atoms_useVDWDiameters_3D = !1; e.material.setTempColors(a.proteins_materialAmbientColor_3D, void 0, a.proteins_materialSpecularColor_3D, a.proteins_materialShininess_3D); e.material.setDiffuseColor(a.proteins_backboneColor); b =
                        0; for (f = this.alphaCarbonTrace.nodes.length; b < f; b++)g = this.alphaCarbonTrace.nodes[b], a.macro_colorByChain && (d.atoms_color = g.chainColor), e.sphereBuffer.bindBuffers(e), g.render(e, d); b = 0; for (f = this.alphaCarbonTrace.edges.length; b < f; b++) {
                            var g = this.alphaCarbonTrace.edges[b], r, h = l[g.residueName] ? l[g.residueName] : l["*"]; a.macro_colorByChain ? r = g.chainColor : "shapely" === a.proteins_residueColor ? r = h.shapelyColor : "amino" === a.proteins_residueColor ? r = h.aminoColor : "polarity" === a.proteins_residueColor ? r = h.polar ? "#C10000" :
                                "#FFFFFF" : "acidity" === a.proteins_residueColor ? r = 1 === h.acidity ? "#0000FF" : -1 === h.acidity ? "#FF0000" : h.polar ? "#FFFFFF" : "#773300" : "rainbow" === a.proteins_residueColor && (r = j.rainbowAt(b, f, a.macro_rainbowColors)); r && (d.bonds_color = r); e.cylinderBuffer.bindBuffers(e); g.render(e, d)
                        }
                }
            } if (a.nucleics_display) {
                e.material.setTempColors(a.nucleics_materialAmbientColor_3D, void 0, a.nucleics_materialSpecularColor_3D, a.nucleics_materialShininess_3D); d = 0; for (h = this.tubes.length; d < h; d++)e.setMatrixUniforms(e.modelViewMatrix),
                    q = this.tubes[d], q.render(e, a)
            }
        } if (a.atoms_display) {
            r = !1; b = 0; for (f = this.atoms.length; b < f; b++)if (g = this.atoms[b], g.isHover || g.isSelected) { r = !0; break } if (!r) { b = 0; for (f = this.bonds.length; b < f; b++)if (g = this.bonds[b], g.isHover || g.isSelected) { r = !0; break } } if (r) {
                e.sphereBuffer.bindBuffers(e); e.blendFunc(e.SRC_ALPHA, e.ONE); e.material.setTempColors(a.atoms_materialAmbientColor_3D, void 0, "#000000", 0); e.enable(e.BLEND); e.depthMask(!1); e.material.setAlpha(0.4); e.sphereBuffer.bindBuffers(e); b = 0; for (f = this.atoms.length; b <
                    f; b++)g = this.atoms[b], (g.isHover || g.isSelected) && g.renderHighlight(e, a); e.cylinderBuffer.bindBuffers(e); b = 0; for (f = this.bonds.length; b < f; b++)g = this.bonds[b], (g.isHover || g.isSelected) && g.renderHighlight(e, a); e.depthMask(!0); e.disable(e.BLEND); e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)
            }
        } this.surface && a.surfaces_display && (e.setMatrixUniforms(e.modelViewMatrix), this.surface.bindBuffers(e), e.material.setTempColors(a.surfaces_materialAmbientColor_3D, a.surfaces_color,
            a.surfaces_materialSpecularColor_3D, a.surfaces_materialShininess_3D), "Dot" === a.surfaces_style ? e.drawArrays(e.POINTS, 0, this.surface.vertexPositionBuffer.numItems) : e.drawElements(e.TRIANGLES, this.surface.vertexIndexBuffer.numItems, e.UNSIGNED_SHORT, 0))
    }; g.renderPickFrame = function (e, a, d, b, f) {
        this.specs && (a = this.specs); var g = 0 < this.atoms.length && void 0 !== this.atoms[0].hetatm; if (f && a.bonds_display) {
            0 < this.bonds.length && (a.bonds_renderAsLines_3D ? (e.lineWidth(a.bonds_width_2D), e.lineBuffer.bindBuffers(e)) :
                e.cylinderBuffer.bindBuffers(e)); f = 0; for (var h = this.bonds.length; f < h; f++) { var q = this.bonds[f]; if (!g || q.a1.hetatm) e.material.setDiffuseColor(j.idx2color(d.length)), q.renderPicker(e, a), d.push(q) }
        } if (b && a.atoms_display) {
            f = 0; for (h = this.atoms.length; f < h; f++)b = this.atoms[f], b.bondNumber = 0, b.renderAsStar = !1; f = 0; for (h = this.bonds.length; f < h; f++)q = this.bonds[f], q.a1.bondNumber++, q.a2.bondNumber++; 0 < this.atoms.length && e.sphereBuffer.bindBuffers(e); q = []; f = 0; for (h = this.atoms.length; f < h; f++)if (b = this.atoms[f],
                !g || b.hetatm && (a.macro_showWater || !b.isWater)) a.atoms_nonBondedAsStars_3D && 0 === b.bondNumber ? (b.renderAsStar = !0, q.push(b)) : (e.material.setDiffuseColor(j.idx2color(d.length)), b.render(e, a, !0), d.push(b)); if (0 < q.length) { e.starBuffer.bindBuffers(e); f = 0; for (h = q.length; f < h; f++)b = q[f], e.material.setDiffuseColor(j.idx2color(d.length)), b.render(e, a, !0), d.push(b) }
        }
    }; g.getCenter3D = function () {
        if (1 === this.atoms.length) return new o.Atom("C", this.atoms[0].x, this.atoms[0].y, this.atoms[0].z); var e = Infinity, a = Infinity,
            d = Infinity, b = -Infinity, f = -Infinity, g = -Infinity; if (this.chains) for (var j = 0, q = this.chains.length; j < q; j++)for (var l = this.chains[j], r = 0, v = l.length; r < v; r++)var u = l[r], e = h.min(u.cp1.x, u.cp2.x, e), a = h.min(u.cp1.y, u.cp2.y, a), d = h.min(u.cp1.z, u.cp2.z, d), b = h.max(u.cp1.x, u.cp2.x, b), f = h.max(u.cp1.y, u.cp2.y, f), g = h.max(u.cp1.z, u.cp2.z, g); j = 0; for (q = this.atoms.length; j < q; j++)e = h.min(this.atoms[j].x, e), a = h.min(this.atoms[j].y, a), d = h.min(this.atoms[j].z, d), b = h.max(this.atoms[j].x, b), f = h.max(this.atoms[j].y, f), g = h.max(this.atoms[j].z,
                g); return new o.Atom("C", (b + e) / 2, (f + a) / 2, (g + d) / 2)
    }; g.getCenter = function () { if (1 === this.atoms.length) return new o.Point(this.atoms[0].x, this.atoms[0].y); for (var e = Infinity, a = Infinity, d = -Infinity, b = -Infinity, f = 0, g = this.atoms.length; f < g; f++)e = h.min(this.atoms[f].x, e), a = h.min(this.atoms[f].y, a), d = h.max(this.atoms[f].x, d), b = h.max(this.atoms[f].y, b); return new o.Point((d + e) / 2, (b + a) / 2) }; g.getDimension = function () {
        if (1 === this.atoms.length) return new o.Point(0, 0); var e = Infinity, a = Infinity, d = -Infinity, b = -Infinity;
        if (this.chains) { for (var f = 0, g = this.chains.length; f < g; f++)for (var j = this.chains[f], q = 0, l = j.length; q < l; q++)var r = j[q], e = h.min(r.cp1.x, r.cp2.x, e), a = h.min(r.cp1.y, r.cp2.y, a), d = h.max(r.cp1.x, r.cp2.x, d), b = h.max(r.cp1.y, r.cp2.y, b); e -= 30; a -= 30; d += 30; b += 30 } f = 0; for (g = this.atoms.length; f < g; f++)e = h.min(this.atoms[f].x, e), a = h.min(this.atoms[f].y, a), d = h.max(this.atoms[f].x, d), b = h.max(this.atoms[f].y, b); return new o.Point(d - e, b - a)
    }; g.check = function (e) {
        if (e && this.doChecks) {
            if (this.findRings) if (this.bonds.length -
                this.atoms.length !== this.fjNumCache) { this.rings = (new b.informatics.SSSRFinder(this)).rings; for (var a = 0, d = this.bonds.length; a < d; a++)this.bonds[a].ring = void 0; a = 0; for (d = this.rings.length; a < d; a++)this.rings[a].setupBonds() } else { a = 0; for (d = this.rings.length; a < d; a++) { var g = this.rings[a]; g.center = g.getCenter() } } a = 0; for (d = this.atoms.length; a < d; a++)if (this.atoms[a].isLone = !1, "C" === this.atoms[a].label) {
                    for (var f = g = 0, h = this.bonds.length; f < h; f++)(this.bonds[f].a1 === this.atoms[a] || this.bonds[f].a2 === this.atoms[a]) &&
                        g++; 0 === g && (this.atoms[a].isLone = !0)
                } g = !1; a = 0; for (d = this.atoms.length; a < d; a++)0 !== this.atoms[a].z && (g = !0); g && (this.sortAtomsByZ(), this.sortBondsByZ()); this.setupMetaData(); this.atomNumCache = this.atoms.length; this.bondNumCache = this.bonds.length; this.fjNumCache = this.bonds.length - this.atoms.length
        } this.doChecks = !e
    }; g.getAngles = function (e) { for (var a = [], d = 0, b = this.bonds.length; d < b; d++)this.bonds[d].contains(e) && a.push(e.angle(this.bonds[d].getNeighbor(e))); a.sort(); return a }; g.getCoordinationNumber = function (e) {
        for (var a =
            0, d = 0, b = e.length; d < b; d++)a += e[d].bondOrder; return a
    }; g.getBonds = function (e) { for (var a = [], d = 0, b = this.bonds.length; d < b; d++)this.bonds[d].contains(e) && a.push(this.bonds[d]); return a }; g.sortAtomsByZ = function () { for (var e = 1, a = this.atoms.length; e < a; e++)for (var d = e; 0 < d && this.atoms[d].z < this.atoms[d - 1].z;) { var b = this.atoms[d]; this.atoms[d] = this.atoms[d - 1]; this.atoms[d - 1] = b; d-- } }; g.sortBondsByZ = function () {
        for (var e = 1, a = this.bonds.length; e < a; e++)for (var d = e; 0 < d && this.bonds[d].a1.z + this.bonds[d].a2.z < this.bonds[d -
            1].a1.z + this.bonds[d - 1].a2.z;) { var b = this.bonds[d]; this.bonds[d] = this.bonds[d - 1]; this.bonds[d - 1] = b; d-- }
    }; g.setupMetaData = function () {
        for (var e = this.getCenter(), a = 0, d = this.atoms.length; a < d; a++) {
            var b = this.atoms[a]; b.bonds = this.getBonds(b); b.angles = this.getAngles(b); b.isHidden = 2 === b.bonds.length && h.abs(h.abs(b.angles[1] - b.angles[0]) - h.PI) < h.PI / 30 && b.bonds[0].bondOrder === b.bonds[1].bondOrder; var f = j.angleBetweenLargest(b.angles); b.angleOfLeastInterference = f.angle % (2 * h.PI); b.largestAngle = f.largest; b.coordinationNumber =
                this.getCoordinationNumber(b.bonds); b.bondNumber = b.bonds.length; b.molCenter = e
        } a = 0; for (d = this.bonds.length; a < d; a++)this.bonds[a].molCenter = e
    }; g.scaleToAverageBondLength = function (e) { var a = this.getAverageBondLength(); if (0 !== a) { e /= a; for (var a = 0, d = this.atoms.length; a < d; a++)this.atoms[a].x *= e, this.atoms[a].y *= e } }; g.getAverageBondLength = function () { if (0 === this.bonds.length) return 0; for (var e = 0, a = 0, d = this.bonds.length; a < d; a++)e += this.bonds[a].getLength(); return e /= this.bonds.length }; g.getBounds = function () {
        for (var e =
            new j.Bounds, a = 0, d = this.atoms.length; a < d; a++)e.expand(this.atoms[a].getBounds()); if (this.chains) { a = 0; for (d = this.chains.length; a < d; a++)for (var b = this.chains[a], f = 0, g = b.length; f < g; f++) { var h = b[f]; e.expand(h.cp1.x, h.cp1.y); e.expand(h.cp2.x, h.cp2.y) } e.minX -= 30; e.minY -= 30; e.maxX += 30; e.maxY += 30 } return e
    }; g.getBounds3D = function () {
        for (var e = new j.Bounds, a = 0, d = this.atoms.length; a < d; a++)e.expand(this.atoms[a].getBounds3D()); if (this.chains) {
            a = 0; for (d = this.chains.length; a < d; a++)for (var b = this.chains[a], f = 0, g =
                b.length; f < g; f++) { var h = b[f]; e.expand3D(h.cp1.x, h.cp1.y, h.cp1.z); e.expand3D(h.cp2.x, h.cp2.y, h.cp2.z) }
        } return e
    }
})(ChemDoodle, ChemDoodle.math, ChemDoodle.structures, ChemDoodle.RESIDUE, Math);
(function (b, j, o, l) {
    var h, g = -1; b.Residue = function (a) { this.resSeq = a }; var e = b.Residue.prototype; e.setup = function (a, d) {
        this.horizontalResolution = d; var e = [a.x - this.cp1.x, a.y - this.cp1.y, a.z - this.cp1.z], f = l.cross(e, [this.cp2.x - this.cp1.x, this.cp2.y - this.cp1.y, this.cp2.z - this.cp1.z], []); this.D = l.cross(f, e, []); l.normalize(f); l.normalize(this.D); this.guidePointsSmall = []; this.guidePointsLarge = []; e = [(a.x + this.cp1.x) / 2, (a.y + this.cp1.y) / 2, (a.z + this.cp1.z) / 2]; this.helix && (l.scale(f, 1.5), l.add(e, f)); this.guidePointsSmall[0] =
            new b.Atom("", e[0] - this.D[0] / 2, e[1] - this.D[1] / 2, e[2] - this.D[2] / 2); for (f = 1; f < d; f++)this.guidePointsSmall[f] = new b.Atom("", this.guidePointsSmall[0].x + this.D[0] * f / d, this.guidePointsSmall[0].y + this.D[1] * f / d, this.guidePointsSmall[0].z + this.D[2] * f / d); l.scale(this.D, 4); this.guidePointsLarge[0] = new b.Atom("", e[0] - this.D[0] / 2, e[1] - this.D[1] / 2, e[2] - this.D[2] / 2); for (f = 1; f < d; f++)this.guidePointsLarge[f] = new b.Atom("", this.guidePointsLarge[0].x + this.D[0] * f / d, this.guidePointsLarge[0].y + this.D[1] * f / d, this.guidePointsLarge[0].z +
                this.D[2] * f / d)
    }; e.getGuidePointSet = function (a) { if (0 === a) return this.helix || this.sheet ? this.guidePointsLarge : this.guidePointsSmall; if (1 === a) return this.guidePointsSmall; if (2 === a) return this.guidePointsLarge }; e.computeLineSegments = function (a, d, e, f, b) { this.setVerticalResolution(b); this.split = e.helix !== this.helix || e.sheet !== this.sheet; this.lineSegments = this.innerCompute(0, a, d, e, !1, b); f && (this.lineSegmentsCartoon = this.innerCompute(this.helix || this.sheet ? 2 : 1, a, d, e, !0, b)) }; e.innerCompute = function (a, d, e,
        f, g, p) {
            var q = [], A = this.getGuidePointSet(a); d = d.getGuidePointSet(a); e = e.getGuidePointSet(a); for (var r = f.getGuidePointSet(a), v = 0, u = A.length; v < u; v++) { for (var t = o.multiply([d[v].x, d[v].y, d[v].z, 1, e[v].x, e[v].y, e[v].z, 1, A[v].x, A[v].y, A[v].z, 1, r[v].x, r[v].y, r[v].z, 1], h, []), w = [], x = 0; x < p; x++) { for (a = 3; 0 < a; a--)for (f = 0; 4 > f; f++)t[4 * a + f] += t[4 * (a - 1) + f]; w[x] = new b.Atom("", t[12] / t[15], t[13] / t[15], t[14] / t[15]) } q[v] = w } if (g && this.arrow) for (a = 0; a < p; a++) {
                g = 1.5 - 1.3 * a / p; A = j.floor(this.horizontalResolution / 2); d = q[A]; f = 0;
                for (e = q.length; f < e; f++)f !== A && (r = d[a], v = q[f][a], u = [v.x - r.x, v.y - r.y, v.z - r.z], l.scale(u, g), v.x = r.x + u[0], v.y = r.y + u[1], v.z = r.z + u[2])
            } return q
    }; e.setVerticalResolution = function (a) { if (a !== g) { var d = a * a, e = a * a * a; h = o.multiply([-1 / 6, 0.5, -0.5, 1 / 6, 0.5, -1, 0.5, 0, -0.5, 0, 0.5, 0, 1 / 6, 2 / 3, 1 / 6, 0], [6 / e, 0, 0, 0, 6 / e, 2 / d, 0, 0, 1 / e, 1 / d, 1 / a, 0, 0, 0, 0, 1], []); g = a } }
})(ChemDoodle.structures, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function (b, j, o, l, h) {
    j.Spectrum = function () { this.data = []; this.metadata = []; this.dataDisplay = []; this.memory = { offsetTop: 0, offsetLeft: 0, offsetBottom: 0, flipXAxis: !1, scale: 1, width: 0, height: 0 } }; l = j.Spectrum.prototype; l.title = void 0; l.xUnit = void 0; l.yUnit = void 0; l.continuous = !0; l.integrationSensitivity = 0.01; l.draw = function (g, e, a, d) {
        this.specs && (e = this.specs); var j = 5, f = 0, l = 0; g.fillStyle = e.text_color; g.textAlign = "center"; g.textBaseline = "alphabetic"; g.font = b.getFontString(e.text_font_size, e.text_font_families);
        this.xUnit && (l += e.text_font_size, g.fillText(this.xUnit, a / 2, d - 2)); this.yUnit && e.plots_showYAxis && (f += e.text_font_size, g.save(), g.translate(e.text_font_size, d / 2), g.rotate(-h.PI / 2), g.fillText(this.yUnit, 0, 0), g.restore()); this.title && (j += e.text_font_size, g.fillText(this.title, a / 2, e.text_font_size)); g.lineCap = "square"; l += 5 + e.text_font_size; e.plots_showYAxis && (f += 5 + g.measureText("1000").width); e.plots_showGrid && (g.strokeStyle = e.plots_gridColor, g.lineWidth = e.plots_gridLineWidth, g.strokeRect(f, j, a - f, d - l -
            j)); g.textAlign = "center"; g.textBaseline = "top"; for (var p = this.maxX - this.minX, q = p / 100, o = 0.001; o < q || 25 < p / o;)o *= 10; for (var r = 0, v = e.plots_flipXAxis ? a : 0, p = h.round(this.minX / o) * o; p <= this.maxX; p += o / 2) {
                var u = this.getTransformedX(p, e, a, f); if (u > f) if (g.strokeStyle = "black", g.lineWidth = 1, 0 === r % 2) {
                    g.beginPath(); g.moveTo(u, d - l); g.lineTo(u, d - l + 2); g.stroke(); for (q = p.toFixed(5); "0" === q.charAt(q.length - 1);)q = q.substring(0, q.length - 1); "." === q.charAt(q.length - 1) && (q = q.substring(0, q.length - 1)); var t = g.measureText(q).width;
                    e.plots_flipXAxis && (t *= -1); var w = u - t / 2; if (e.plots_flipXAxis ? w < v : w > v) g.fillText(q, u, d - l + 2), v = u + t / 2; e.plots_showGrid && (g.strokeStyle = e.plots_gridColor, g.lineWidth = e.plots_gridLineWidth, g.beginPath(), g.moveTo(u, d - l), g.lineTo(u, j), g.stroke())
                } else g.beginPath(), g.moveTo(u, d - l), g.lineTo(u, d - l + 2), g.stroke(); r++
            } if (e.plots_showYAxis || e.plots_showGrid) {
                o = 1 / e.scale; g.textAlign = "right"; g.textBaseline = "middle"; for (p = 0; 10 >= p; p++)if (q = o / 10 * p, r = j + (d - l - j) * (1 - q * e.scale), e.plots_showGrid && (g.strokeStyle = e.plots_gridColor,
                    g.lineWidth = e.plots_gridLineWidth, g.beginPath(), g.moveTo(f, r), g.lineTo(a, r), g.stroke()), e.plots_showYAxis) { g.strokeStyle = "black"; g.lineWidth = 1; g.beginPath(); g.moveTo(f, r); g.lineTo(f - 3, r); g.stroke(); q *= 100; v = h.max(0, 3 - h.floor(q).toString().length); q = q.toFixed(v); if (0 < v) for (; "0" === q.charAt(q.length - 1);)q = q.substring(0, q.length - 1); "." === q.charAt(q.length - 1) && (q = q.substring(0, q.length - 1)); g.fillText(q, f - 3, r) }
            } g.strokeStyle = "black"; g.lineWidth = 1; g.beginPath(); g.moveTo(a, d - l); g.lineTo(f, d - l); e.plots_showYAxis &&
                g.lineTo(f, j); g.stroke(); if (0 < this.dataDisplay.length) {
                    g.textAlign = "left"; g.textBaseline = "top"; p = q = 0; for (o = this.dataDisplay.length; p < o; p++)if (this.dataDisplay[p].value) g.fillText([this.dataDisplay[p].display, ": ", this.dataDisplay[p].value].join(""), f + 10, j + 10 + q * (e.text_font_size + 5)), q++; else if (this.dataDisplay[p].tag) {
                        r = 0; for (v = this.metadata.length; r < v; r++)if (b.stringStartsWith(this.metadata[r], this.dataDisplay[p].tag)) {
                            v = this.metadata[r]; this.dataDisplay[p].display && (v = this.metadata[r].indexOf("\x3d"),
                                v = [this.dataDisplay[p].display, ": ", -1 < v ? this.metadata[r].substring(v + 2) : this.metadata[r]].join("")); g.fillText(v, f + 10, j + 10 + q * (e.text_font_size + 5)); q++; break
                        }
                    }
                } this.drawPlot(g, e, a, d, j, f, l); this.memory.offsetTop = j; this.memory.offsetLeft = f; this.memory.offsetBottom = l; this.memory.flipXAxis = e.plots_flipXAxis; this.memory.scale = e.scale; this.memory.width = a; this.memory.height = d
    }; l.drawPlot = function (b, e, a, d, n, f, l) {
        this.specs && (e = this.specs); b.strokeStyle = e.plots_color; b.lineWidth = e.plots_width; var p = []; b.save();
        b.rect(f, n, a - f, d - l - n); b.clip(); b.beginPath(); if (this.continuous) for (var q = !1, o = 0, r = !1, v = 0, u = this.data.length; v < u; v++) {
            var t = this.getTransformedX(this.data[v].x, e, a, f), w; v < u && (!q && this.data[v + 1]) && (w = this.getTransformedX(this.data[v + 1].x, e, a, f)); if (t >= f && t < a || void 0 !== w && w >= f && w < a) {
                var x = this.getTransformedY(this.data[v].y, e, d, l, n); e.plots_showIntegration && h.abs(this.data[v].y) > this.integrationSensitivity && p.push(new j.Point(this.data[v].x, this.data[v].y)); q || (b.moveTo(t, x), q = !0); b.lineTo(t, x); o++;
                0 === o % 1E3 && (b.stroke(), b.beginPath(), b.moveTo(t, x)); if (r) break
            } else q && (r = !0)
        } else { v = 0; for (u = this.data.length; v < u; v++)t = this.getTransformedX(this.data[v].x, e, a, f), t >= f && t < a && (b.moveTo(t, d - l), b.lineTo(t, this.getTransformedY(this.data[v].y, e, d, l, n))) } b.stroke(); if (e.plots_showIntegration && 1 < p.length) {
            b.strokeStyle = e.plots_integrationColor; b.lineWidth = e.plots_integrationLineWidth; b.beginPath(); v = p[1].x > p[0].x; if (this.flipXAxis && !v || !this.flipXAxis && v) { for (v = p.length - 2; 0 <= v; v--)p[v].y += p[v + 1].y; q = p[0].y } else {
                v =
                1; for (u = p.length; v < u; v++)p[v].y += p[v - 1].y; q = p[p.length - 1].y
            } v = 0; for (u = p.length; v < u; v++)t = this.getTransformedX(p[v].x, e, a, f), x = this.getTransformedY(p[v].y / e.scale / q, e, d, l, n), 0 === v ? b.moveTo(t, x) : b.lineTo(t, x); b.stroke()
        } b.restore()
    }; l.getTransformedY = function (b, e, a, d, h) { return h + (a - d - h) * (1 - b * e.scale) }; l.getInverseTransformedY = function (b) { return 100 * ((1 - (b - this.memory.offsetTop) / (this.memory.height - this.memory.offsetBottom - this.memory.offsetTop)) / this.memory.scale) }; l.getTransformedX = function (b, e, a,
        d) { b = d + (b - this.minX) / (this.maxX - this.minX) * (a - d); e.plots_flipXAxis && (b = a + d - b); return b }; l.getInverseTransformedX = function (b) { this.memory.flipXAxis && (b = this.memory.width + this.memory.offsetLeft - b); return (b - this.memory.offsetLeft) * (this.maxX - this.minX) / (this.memory.width - this.memory.offsetLeft) + this.minX }; l.setup = function () {
            for (var b = Number.MAX_VALUE, e = Number.MIN_VALUE, a = Number.MIN_VALUE, d = 0, j = this.data.length; d < j; d++)b = h.min(b, this.data[d].x), e = h.max(e, this.data[d].x), a = h.max(a, this.data[d].y); this.continuous ?
                (this.minX = b, this.maxX = e) : (this.minX = b - 1, this.maxX = e + 1); d = 0; for (j = this.data.length; d < j; d++)this.data[d].y /= a
        }; l.zoom = function (b, e, a, d) { b = this.getInverseTransformedX(b); e = this.getInverseTransformedX(e); this.minX = h.min(b, e); this.maxX = h.max(b, e); if (d) { d = Number.MIN_VALUE; e = 0; for (b = this.data.length; e < b; e++)o.isBetween(this.data[e].x, this.minX, this.maxX) && (d = h.max(d, this.data[e].y)); return 1 / d } }; l.translate = function (b, e) {
            var a = b / (e - this.memory.offsetLeft) * (this.maxX - this.minX) * (this.memory.flipXAxis ? 1 :
                -1); this.minX += a; this.maxX += a
        }; l.alertMetadata = function () { alert(this.metadata.join("\n")) }; l.getInternalCoordinates = function (b, e) { return new ChemDoodle.structures.Point(this.getInverseTransformedX(b), this.getInverseTransformedY(e)) }; l.getClosestPlotInternalCoordinates = function (b) {
            var e = this.getInverseTransformedX(b - 1); b = this.getInverseTransformedX(b + 1); if (e > b) { var a = e, e = b; b = a } for (var a = -1, d = -Infinity, h = !1, f = 0, j = this.data.length; f < j; f++) {
                var p = this.data[f]; if (o.isBetween(p.x, e, b)) p.y > d && (h = !0, d = p.y,
                    a = f); else if (h) break
            } if (-1 !== a) return p = this.data[a], new ChemDoodle.structures.Point(p.x, 100 * p.y)
        }; l.getClosestPeakInternalCoordinates = function (b) {
            var e = this.getInverseTransformedX(b); b = 0; for (var a = Infinity, d = 0, j = this.data.length; d < j; d++) { var f = h.abs(this.data[d].x - e); if (f <= a) a = f, b = d; else break } for (var a = e = b, f = this.data[b].y, l = this.data[b].y, d = b + 1, j = this.data.length; d < j; d++)if (this.data[d].y + 0.05 > l) l = this.data[d].y, a = d; else break; for (d = b - 1; 0 <= d; d--)if (this.data[d].y + 0.05 > f) f = this.data[d].y, e = d; else break;
            b = this.data[e - b > a - b ? a : e]; return new ChemDoodle.structures.Point(b.x, 100 * b.y)
        }
})(ChemDoodle.extensions, ChemDoodle.structures, ChemDoodle.math, ChemDoodle.lib.jQuery, Math);
(function (b, j, o) {
    j._Shape = function () { }; j = j._Shape.prototype; j.drawDecorations = function (b, h) { if (this.isHover) for (var g = this.getPoints(), e = 0, a = g.length; e < a; e++) { var d = g[e]; this.drawAnchor(b, h, d, d === this.hoverPoint) } }; j.getBounds = function () { for (var j = new b.Bounds, h = this.getPoints(), g = 0, e = h.length; g < e; g++) { var a = h[g]; j.expand(a.x, a.y) } return j }; j.drawAnchor = function (b, h, g, e) {
        b.save(); b.translate(g.x, g.y); b.rotate(o.PI / 4); b.scale(1 / h.scale, 1 / h.scale); b.beginPath(); b.moveTo(-4, -4); b.lineTo(4, -4); b.lineTo(4,
            4); b.lineTo(-4, 4); b.closePath(); b.fillStyle = e ? "#885110" : "white"; b.fill(); b.beginPath(); b.moveTo(-4, -2); b.lineTo(-4, -4); b.lineTo(-2, -4); b.moveTo(2, -4); b.lineTo(4, -4); b.lineTo(4, -2); b.moveTo(4, 2); b.lineTo(4, 4); b.lineTo(2, 4); b.moveTo(-2, 4); b.lineTo(-4, 4); b.lineTo(-4, 2); b.moveTo(-4, -2); b.strokeStyle = "rgba(0,0,0,.2)"; b.lineWidth = 5; b.stroke(); b.strokeStyle = "blue"; b.lineWidth = 1; b.stroke(); b.restore()
    }
})(ChemDoodle.math, ChemDoodle.structures.d2, Math);
(function (b, j, o, l, h) {
    l.Bracket = function (b, e) { this.p1 = b ? b : new o.Point; this.p2 = e ? e : new o.Point }; l = l.Bracket.prototype = new l._Shape; l.charge = 0; l.mult = 0; l.repeat = 0; l.draw = function (g, e) {
        var a = h.min(this.p1.x, this.p2.x), d = h.max(this.p1.x, this.p2.x), j = h.min(this.p1.y, this.p2.y), f = h.max(this.p1.y, this.p2.y), l = f - j, p = l / 10; g.beginPath(); g.moveTo(a + p, j); g.lineTo(a, j); g.lineTo(a, f); g.lineTo(a + p, f); g.moveTo(d - p, f); g.lineTo(d, f); g.lineTo(d, j); g.lineTo(d - p, j); this.isLassoed && (p = g.createLinearGradient(this.p1.x, this.p1.y,
            this.p2.x, this.p2.y), p.addColorStop(0, "rgba(212, 99, 0, 0)"), p.addColorStop(0.5, "rgba(212, 99, 0, 0.8)"), p.addColorStop(1, "rgba(212, 99, 0, 0)"), g.lineWidth = e.shapes_lineWidth + 5, g.strokeStyle = p, g.lineJoin = "miter", g.lineCap = "square", g.stroke()); g.strokeStyle = e.shapes_color; g.lineWidth = e.shapes_lineWidth; g.lineJoin = "miter"; g.lineCap = "butt"; g.stroke(); 0 !== this.charge && (g.fillStyle = e.text_color, g.textAlign = "left", g.textBaseline = "alphabetic", g.font = b.getFontString(e.text_font_size, e.text_font_families),
                p = this.charge.toFixed(0), p = "1" === p ? "+" : "-1" === p ? "\u2013" : b.stringStartsWith(p, "-") ? p.substring(1) + "\u2013" : p + "+", g.fillText(p, d + 5, j + 5)); 0 !== this.mult && (g.fillStyle = e.text_color, g.textAlign = "right", g.textBaseline = "middle", g.font = b.getFontString(e.text_font_size, e.text_font_families), g.fillText(this.mult.toFixed(0), a - 5, j + l / 2)); 0 !== this.repeat && (g.fillStyle = e.text_color, g.textAlign = "left", g.textBaseline = "top", g.font = b.getFontString(e.text_font_size, e.text_font_families), p = this.repeat.toFixed(0), g.fillText(p,
                    d + 5, f - 5))
    }; l.getPoints = function () { return [this.p1, this.p2] }; l.isOver = function (b) { return j.isBetween(b.x, this.p1.x, this.p2.x) && j.isBetween(b.y, this.p1.y, this.p2.y) }
})(ChemDoodle.extensions, ChemDoodle.math, ChemDoodle.structures, ChemDoodle.structures.d2, Math);
(function (b, j, o, l) {
    o.Line = function (b, e) { this.p1 = b ? b : new j.Point; this.p2 = e ? e : new j.Point }; o.Line.ARROW_SYNTHETIC = "synthetic"; o.Line.ARROW_RETROSYNTHETIC = "retrosynthetic"; o.Line.ARROW_RESONANCE = "resonance"; o.Line.ARROW_EQUILIBRIUM = "equilibrium"; var h = o.Line.prototype = new o._Shape; h.arrowType = void 0; h.topText = void 0; h.bottomText = void 0; h.draw = function (b, e) {
        if (this.isLassoed) {
            var a = b.createLinearGradient(this.p1.x, this.p1.y, this.p2.x, this.p2.y); a.addColorStop(0, "rgba(212, 99, 0, 0)"); a.addColorStop(0.5,
                "rgba(212, 99, 0, 0.8)"); a.addColorStop(1, "rgba(212, 99, 0, 0)"); var d = 2.5, h = this.p1.angle(this.p2) + l.PI / 2, f = l.cos(h), h = l.sin(h), j = this.p1.x - f * d, p = this.p1.y + h * d, q = this.p1.x + f * d, A = this.p1.y - h * d, r = this.p2.x + f * d, v = this.p2.y - h * d, u = this.p2.x - f * d, t = this.p2.y + h * d; b.fillStyle = a; b.beginPath(); b.moveTo(j, p); b.lineTo(q, A); b.lineTo(r, v); b.lineTo(u, t); b.closePath(); b.fill()
        } b.strokeStyle = e.shapes_color; b.fillStyle = e.shapes_color; b.lineWidth = e.shapes_lineWidth; b.lineJoin = "miter"; b.lineCap = "butt"; if (this.p1.x !==
            this.p2.x || this.p1.y !== this.p2.y) {
                if (this.arrowType === o.Line.ARROW_RETROSYNTHETIC) {
                    var a = 2 * l.sqrt(2), d = e.shapes_arrowLength_2D / a, f = this.p1.angle(this.p2), h = f + l.PI / 2, a = e.shapes_arrowLength_2D / a, w = l.cos(f), x = l.sin(f), f = l.cos(h), h = l.sin(h), j = this.p1.x - f * d, p = this.p1.y + h * d, q = this.p1.x + f * d, A = this.p1.y - h * d, r = this.p2.x + f * d - w * a, v = this.p2.y - h * d + x * a, u = this.p2.x - f * d - w * a, t = this.p2.y + h * d + x * a, B = this.p2.x + 2 * f * d - 2 * w * a, c = this.p2.y - 2 * h * d + 2 * x * a, k = this.p2.x - 2 * f * d - 2 * w * a, d = this.p2.y + 2 * h * d + 2 * x * a; b.beginPath(); b.moveTo(q,
                        A); b.lineTo(r, v); b.moveTo(B, c); b.lineTo(this.p2.x, this.p2.y); b.lineTo(k, d); b.moveTo(u, t); b.lineTo(j, p)
                } else this.arrowType === o.Line.ARROW_EQUILIBRIUM ? (a = 2 * l.sqrt(2), d = e.shapes_arrowLength_2D / a / 2, f = this.p1.angle(this.p2), h = f + l.PI / 2, a = 2 * e.shapes_arrowLength_2D / l.sqrt(3), w = l.cos(f), x = l.sin(f), f = l.cos(h), h = l.sin(h), j = this.p1.x - f * d, p = this.p1.y + h * d, q = this.p1.x + f * d, A = this.p1.y - h * d, r = this.p2.x + f * d, v = this.p2.y - h * d, u = this.p2.x - f * d, t = this.p2.y + h * d, b.beginPath(), b.moveTo(q, A), b.lineTo(r, v), b.moveTo(u, t), b.lineTo(j,
                    p), b.stroke(), q = r - 0.8 * w * a, A = v + 0.8 * x * a, B = r + f * e.shapes_arrowLength_2D / 3 - w * a, c = v - h * e.shapes_arrowLength_2D / 3 + x * a, b.beginPath(), b.moveTo(r, v), b.lineTo(B, c), b.lineTo(q, A), b.closePath(), b.fill(), b.stroke(), q = j + 0.8 * w * a, A = p - 0.8 * x * a, B = j - f * e.shapes_arrowLength_2D / 3 + w * a, c = p + h * e.shapes_arrowLength_2D / 3 - x * a, b.beginPath(), b.moveTo(j, p), b.lineTo(B, c), b.lineTo(q, A), b.closePath(), b.fill()) : this.arrowType === o.Line.ARROW_SYNTHETIC ? (f = this.p1.angle(this.p2), h = f + l.PI / 2, a = 2 * e.shapes_arrowLength_2D / l.sqrt(3), w = l.cos(f),
                        x = l.sin(f), f = l.cos(h), h = l.sin(h), b.beginPath(), b.moveTo(this.p1.x, this.p1.y), b.lineTo(this.p2.x - w * a / 2, this.p2.y + x * a / 2), b.stroke(), q = this.p2.x - 0.8 * w * a, A = this.p2.y + 0.8 * x * a, B = this.p2.x + f * e.shapes_arrowLength_2D / 3 - w * a, c = this.p2.y - h * e.shapes_arrowLength_2D / 3 + x * a, k = this.p2.x - f * e.shapes_arrowLength_2D / 3 - w * a, d = this.p2.y + h * e.shapes_arrowLength_2D / 3 + x * a, b.beginPath(), b.moveTo(this.p2.x, this.p2.y), b.lineTo(k, d), b.lineTo(q, A), b.lineTo(B, c), b.closePath(), b.fill()) : this.arrowType === o.Line.ARROW_RESONANCE ? (f = this.p1.angle(this.p2),
                            h = f + l.PI / 2, a = 2 * e.shapes_arrowLength_2D / l.sqrt(3), w = l.cos(f), x = l.sin(f), f = l.cos(h), h = l.sin(h), b.beginPath(), b.moveTo(this.p1.x + w * a / 2, this.p1.y - x * a / 2), b.lineTo(this.p2.x - w * a / 2, this.p2.y + x * a / 2), b.stroke(), q = this.p2.x - 0.8 * w * a, A = this.p2.y + 0.8 * x * a, B = this.p2.x + f * e.shapes_arrowLength_2D / 3 - w * a, c = this.p2.y - h * e.shapes_arrowLength_2D / 3 + x * a, k = this.p2.x - f * e.shapes_arrowLength_2D / 3 - w * a, d = this.p2.y + h * e.shapes_arrowLength_2D / 3 + x * a, b.beginPath(), b.moveTo(this.p2.x, this.p2.y), b.lineTo(k, d), b.lineTo(q, A), b.lineTo(B,
                                c), b.closePath(), b.fill(), b.stroke(), q = this.p1.x + 0.8 * w * a, A = this.p1.y - 0.8 * x * a, B = this.p1.x - f * e.shapes_arrowLength_2D / 3 + w * a, c = this.p1.y + h * e.shapes_arrowLength_2D / 3 - x * a, k = this.p1.x + f * e.shapes_arrowLength_2D / 3 + w * a, d = this.p1.y - h * e.shapes_arrowLength_2D / 3 - x * a, b.beginPath(), b.moveTo(this.p1.x, this.p1.y), b.lineTo(k, d), b.lineTo(q, A), b.lineTo(B, c), b.closePath(), b.fill()) : (b.beginPath(), b.moveTo(this.p1.x, this.p1.y), b.lineTo(this.p2.x, this.p2.y)); b.stroke(); this.topText && (b.textAlign = "center", b.textBaseline =
                                    "bottom", b.fillText(this.topText, (this.p1.x + this.p2.x) / 2, this.p1.y - 5)); this.bottomText && (b.textAlign = "center", b.textBaseline = "top", b.fillText(this.bottomText, (this.p1.x + this.p2.x) / 2, this.p1.y + 5))
        }
    }; h.getPoints = function () { return [this.p1, this.p2] }; h.isOver = function (g, e) { var a = b.distanceFromPointToLineInclusive(g, this.p1, this.p2); return -1 !== a && a < e }
})(ChemDoodle.math, ChemDoodle.structures, ChemDoodle.structures.d2, Math);
(function (b, j, o, l, h) {
    var g = function (a) {
        var b = []; if (a instanceof o.Atom) if (0 === a.bondNumber) b.push(h.PI); else {
            if (a.angles) {
                if (1 === a.angles.length) b.push(a.angles[0] + h.PI); else { for (var f = 1, e = a.angles.length; f < e; f++)b.push(a.angles[f - 1] + (a.angles[f] - a.angles[f - 1]) / 2); f = a.angles[a.angles.length - 1]; b.push(f + (a.angles[0] + 2 * h.PI - f) / 2) } a.largestAngle > h.PI && (b = [a.angleOfLeastInterference]); if (a.bonds) {
                    f = 0; for (e = a.bonds.length; f < e; f++) {
                        var g = a.bonds[f]; if (2 === g.bondOrder && (g = g.getNeighbor(a), "O" === g.label)) {
                            b =
                            [g.angle(a)]; break
                        }
                    }
                }
            }
        } else a = a.a1.angle(a.a2), b.push(a + h.PI / 2), b.push(a + 3 * h.PI / 2); f = 0; for (e = b.length; f < e; f++) { for (; b[f] > 2 * h.PI;)b[f] -= 2 * h.PI; for (; 0 > b[f];)b[f] += 2 * h.PI } return b
    }, e = function (a, b) { var e = 3; if (a instanceof o.Atom) { if (a.isLabelVisible(b) && (e = 8), 0 !== a.charge || 0 !== a.numRadical || 0 !== a.numLonePair) e = 13 } else a instanceof o.Point ? e = 0 : 1 < a.bondOrder && (e = 5); return e }, a = function (a, b, f, g, j, q, l, r, v, u) {
        var t = q.angle(j), w = l.angle(r), x = h.cos(t), t = h.sin(t), B = e(f, b); j.x -= x * B; j.y += t * B; B = w + h.PI / 2; f = 2 * b.shapes_arrowLength_2D /
            h.sqrt(3); var x = h.cos(w), t = h.sin(w), c = h.cos(B), k = h.sin(B); r.x -= 5 * x; r.y += 5 * t; w = new o.Point(r.x, r.y); B = e(g, b) / 3; w.x -= x * B; w.y += t * B; r.x -= x * (0.8 * f + B); r.y += t * (0.8 * f + B); g = w.x - 0.8 * x * f; var B = w.y + 0.8 * t * f, C = new o.Point(w.x + c * b.shapes_arrowLength_2D / 3 - x * f, w.y - k * b.shapes_arrowLength_2D / 3 + t * f); b = new o.Point(w.x - c * b.shapes_arrowLength_2D / 3 - x * f, w.y + k * b.shapes_arrowLength_2D / 3 + t * f); t = x = !0; 1 === v && (C.distance(q) > b.distance(q) ? t = !1 : x = !1); a.beginPath(); a.moveTo(w.x, w.y); t && a.lineTo(b.x, b.y); a.lineTo(g, B); x && a.lineTo(C.x,
                C.y); a.closePath(); a.fill(); a.stroke(); a.beginPath(); a.moveTo(j.x, j.y); a.bezierCurveTo(q.x, q.y, l.x, l.y, r.x, r.y); a.stroke(); u.push([j, q, l, r])
    }; l.Pusher = function (a, b, e) { this.o1 = a; this.o2 = b; this.numElectron = e ? e : 1 }; l = l.Pusher.prototype = new l._Shape; l.drawDecorations = function (a, b) {
        if (this.isHover) for (var e = this.o1 instanceof o.Atom ? new o.Point(this.o1.x, this.o1.y) : this.o1.getCenter(), g = this.o2 instanceof o.Atom ? new o.Point(this.o2.x, this.o2.y) : this.o2.getCenter(), e = [e, g], g = 0, h = e.length; g < h; g++) {
            var j =
                e[g]; this.drawAnchor(a, b, j, j === this.hoverPoint)
        }
    }; l.draw = function (d, e) {
        if (this.o1 && this.o2) {
            d.strokeStyle = e.shapes_color; d.fillStyle = e.shapes_color; d.lineWidth = e.shapes_lineWidth; d.lineJoin = "miter"; d.lineCap = "butt"; for (var f = this.o1 instanceof o.Atom ? new o.Point(this.o1.x, this.o1.y) : this.o1.getCenter(), j = this.o2 instanceof o.Atom ? new o.Point(this.o2.x, this.o2.y) : this.o2.getCenter(), p = g(this.o1), q = g(this.o2), l, r, v = Infinity, u = 0, t = p.length; u < t; u++)for (var w = 0, x = q.length; w < x; w++) {
                var B = new o.Point(f.x +
                    35 * h.cos(p[u]), f.y - 35 * h.sin(p[u])), c = new o.Point(j.x + 35 * h.cos(q[w]), j.y - 35 * h.sin(q[w])), k = B.distance(c); k < v && (v = k, l = B, r = c)
            } this.caches = []; -1 === this.numElectron ? (u = f.distance(j) / 2, q = f.angle(j), p = q + h.PI / 2, t = h.cos(q), w = h.sin(q), q = new o.Point(f.x + (u - 1) * t, f.y - (u - 1) * w), v = new o.Point(q.x + 35 * h.cos(p + h.PI / 6), q.y - 35 * h.sin(p + h.PI / 6)), u = new o.Point(f.x + (u + 1) * t, f.y - (u + 1) * w), p = new o.Point(u.x + 35 * h.cos(p - h.PI / 6), u.y - 35 * h.sin(p - h.PI / 6)), a(d, e, this.o1, q, f, l, v, q, 1, this.caches), a(d, e, this.o2, u, j, r, p, u, 1, this.caches)) :
                (b.intersectLines(f.x, f.y, l.x, l.y, j.x, j.y, r.x, r.y) && (p = l, l = r, r = p), p = l.angle(f), q = r.angle(j), v = h.max(p, q) - h.min(p, q), 0.001 > h.abs(v - h.PI) && this.o1.molCenter === this.o2.molCenter && (p += h.PI / 2, q -= h.PI / 2, l.x = f.x + 35 * h.cos(p + h.PI), l.y = f.y - 35 * h.sin(p + h.PI), r.x = j.x + 35 * h.cos(q + h.PI), r.y = j.y - 35 * h.sin(q + h.PI)), a(d, e, this.o1, this.o2, f, l, r, j, this.numElectron, this.caches))
        }
    }; l.getPoints = function () { return [] }; l.isOver = function (a, b) {
        for (var e = 0, g = this.caches.length; e < g; e++)if (j.distanceFromCurve(a, this.caches[e]).distance <
            b) return !0; return !1
    }
})(ChemDoodle.math, ChemDoodle.math.jsBezier, ChemDoodle.structures, ChemDoodle.structures.d2, Math);
(function (b) {
    b._Mesh = function () { }; b = b._Mesh.prototype; b.storeData = function (b, o, l) { this.positionData = b; this.normalData = o; this.indexData = l }; b.setupBuffers = function (b) {
        this.vertexPositionBuffer = b.createBuffer(); b.bindBuffer(b.ARRAY_BUFFER, this.vertexPositionBuffer); b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.positionData), b.STATIC_DRAW); this.vertexPositionBuffer.itemSize = 3; this.vertexPositionBuffer.numItems = this.positionData.length / 3; this.vertexNormalBuffer = b.createBuffer(); b.bindBuffer(b.ARRAY_BUFFER,
            this.vertexNormalBuffer); b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.normalData), b.STATIC_DRAW); this.vertexNormalBuffer.itemSize = 3; this.vertexNormalBuffer.numItems = this.normalData.length / 3; this.indexData && (this.vertexIndexBuffer = b.createBuffer(), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer), b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), b.STATIC_DRAW), this.vertexIndexBuffer.itemSize = 1, this.vertexIndexBuffer.numItems = this.indexData.length); if (this.partitions) for (var o =
                0, l = this.partitions.length; o < l; o++) { var h = this.partitions[o], g = this.generateBuffers(b, h.positionData, h.normalData, h.indexData); h.vertexPositionBuffer = g[0]; h.vertexNormalBuffer = g[1]; h.vertexIndexBuffer = g[2] }
    }; b.generateBuffers = function (b, o, l, h) {
        var g = b.createBuffer(); b.bindBuffer(b.ARRAY_BUFFER, g); b.bufferData(b.ARRAY_BUFFER, new Float32Array(o), b.STATIC_DRAW); g.itemSize = 3; g.numItems = o.length / 3; o = b.createBuffer(); b.bindBuffer(b.ARRAY_BUFFER, o); b.bufferData(b.ARRAY_BUFFER, new Float32Array(l), b.STATIC_DRAW);
        o.itemSize = 3; o.numItems = l.length / 3; var e; h && (e = b.createBuffer(), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, e), b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(h), b.STATIC_DRAW), e.itemSize = 1, e.numItems = h.length); return [g, o, e]
    }; b.bindBuffers = function (b) {
        this.vertexPositionBuffer || this.setupBuffers(b); b.bindBuffer(b.ARRAY_BUFFER, this.vertexPositionBuffer); b.vertexAttribPointer(b.shader.vertexPositionAttribute, this.vertexPositionBuffer.itemSize, b.FLOAT, !1, 0, 0); b.bindBuffer(b.ARRAY_BUFFER, this.vertexNormalBuffer);
        b.vertexAttribPointer(b.shader.vertexNormalAttribute, this.vertexNormalBuffer.itemSize, b.FLOAT, !1, 0, 0); this.vertexIndexBuffer && b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer)
    }
})(ChemDoodle.structures.d3, Math);
(function (b) {
    b._Measurement = function () { }; (b._Measurement.prototype = new b._Mesh).render = function (b, o) {
        b.setMatrixUniforms(b.modelViewMatrix); o.measurement_update_3D && (this.text = this.vertexPositionBuffer = void 0); this.vertexPositionBuffer || this.calculateData(o); this.bindBuffers(b); b.material.setDiffuseColor(o.shapes_color); b.lineWidth(o.shapes_lineWidth); b.drawElements(b.LINES, this.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0); if (o.measurement_displayText_3D) {
            this.text || (this.text = this.getText(o));
            var l = { position: [], texCoord: [], translation: [] }; b.textImage.pushVertexData(this.text.value, this.text.pos, 1, l); b.textMesh.storeData(b, l.position, l.texCoord, l.translation); b.enable(b.BLEND); b.depthMask(!1); b.enableVertexAttribArray(b.shader.vertexTexCoordAttribute); b.textImage.useTexture(b); b.textMesh.render(b); b.disableVertexAttribArray(b.shader.vertexTexCoordAttribute); b.disable(b.BLEND); b.depthMask(!0)
        }
    }
})(ChemDoodle.structures.d3);
(function (b, j, o, l, h, g, e) {
    o.Angle = function (a, d, b) { this.a1 = a; this.a2 = d; this.a3 = b }; b = o.Angle.prototype = new o._Measurement; b.calculateData = function (a) {
        var d = [], b = [], f = [], g = this.a2.distance3D(this.a1), p = this.a2.distance3D(this.a3); this.distUse = h.min(g, p) / 2; this.vec1 = e.normalize([this.a1.x - this.a2.x, this.a1.y - this.a2.y, this.a1.z - this.a2.z]); this.vec2 = e.normalize([this.a3.x - this.a2.x, this.a3.y - this.a2.y, this.a3.z - this.a2.z]); this.angle = j.vec3AngleFrom(this.vec1, this.vec2); g = e.normalize(e.cross(this.vec1,
            this.vec2, [])); g = e.normalize(e.cross(g, this.vec1, [])); a = a.measurement_angleBands_3D; for (p = 0; p <= a; ++p) { var l = this.angle * p / a, o = e.scale(this.vec1, h.cos(l), []), l = e.scale(g, h.sin(l), []), o = e.scale(e.normalize(e.add(o, l, [])), this.distUse); d.push(this.a2.x + o[0], this.a2.y + o[1], this.a2.z + o[2]); b.push(0, 0, 0); p < a && f.push(p, p + 1) } this.storeData(d, b, f)
    }; b.getText = function () {
        var a = e.scale(e.normalize(e.add(this.vec1, this.vec2, [])), this.distUse + 0.3); return {
            pos: [this.a2.x + a[0], this.a2.y + a[1], this.a2.z + a[2]], value: [l.angleBounds(this.angle,
                !0).toFixed(2), " \u00b0"].join("")
        }
    }
})(ChemDoodle.ELEMENT, ChemDoodle.extensions, ChemDoodle.structures.d3, ChemDoodle.math, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function (b, j) { b.Arrow = function (b, l) { for (var h = [], g = [], e = 0; e <= l; e++) { var a = 2 * e * j.PI / l, d = j.sin(a), a = j.cos(a); g.push(0, 0, -1, 0, 0, -1, a, d, 0, a, d, 0, 0, 0, -1, 0, 0, -1, a, d, 1, a, d, 1); h.push(0, 0, 0, b * a, b * d, 0, b * a, b * d, 0, b * a, b * d, 2, b * a, b * d, 2, 2 * b * a, 2 * b * d, 2, 2 * b * a, 2 * b * d, 2, 0, 0, 3) } e = []; for (d = 0; d < l; d++)for (var a = 8 * d, n = 0; 7 > n; n++) { var f = n + a, y = f + 7 + 2; e.push(f, y, f + 1, y, f, y - 1) } this.storeData(h, g, e) }; b.Arrow.prototype = new b._Mesh })(ChemDoodle.structures.d3, Math);
(function (b) {
    b.Box = function (b, o, l) {
        b /= 2; l /= 2; var h = [], g = []; h.push(b, o, -l); h.push(b, o, -l); h.push(-b, o, -l); h.push(b, o, l); h.push(-b, o, l); h.push(-b, o, l); for (var e = 6; e--; g.push(0, 1, 0)); h.push(-b, o, l); h.push(-b, o, l); h.push(-b, 0, l); h.push(b, o, l); h.push(b, 0, l); h.push(b, 0, l); for (e = 6; e--; g.push(0, 0, 1)); h.push(b, o, l); h.push(b, o, l); h.push(b, 0, l); h.push(b, o, -l); h.push(b, 0, -l); h.push(b, 0, -l); for (e = 6; e--; g.push(1, 0, 0)); h.push(b, o, -l); h.push(b, o, -l); h.push(b, 0, -l); h.push(-b, o, -l); h.push(-b, 0, -l); h.push(-b, 0, -l);
        for (e = 6; e--; g.push(0, 0, -1)); h.push(-b, o, -l); h.push(-b, o, -l); h.push(-b, 0, -l); h.push(-b, o, l); h.push(-b, 0, l); h.push(-b, 0, l); for (e = 6; e--; g.push(-1, 0, 0)); h.push(-b, 0, l); h.push(-b, 0, l); h.push(-b, 0, -l); h.push(b, 0, l); h.push(b, 0, -l); h.push(b, 0, -l); for (e = 6; e--; g.push(0, -1, 0)); this.storeData(h, g)
    }; b.Box.prototype = new b._Mesh
})(ChemDoodle.structures.d3, Math);
(function (b, j, o) {
    b.LineArrow = function () { this.storeData([0, 0, -3, 0.1, 0, -2.8, 0, 0, -3, -0.1, 0, -2.8, 0, 0, -3, 0, 0, 3, 0, 0, 3, 0.1, 0, 2.8, 0, 0, 3, -0.1, 0, 2.8], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) }; b.LineArrow.prototype = new b._Mesh; b.Compass = function (h, g) {
        this.textImage = new b.TextImage; this.textImage.init(h); this.textImage.updateFont(h, g.text_font_size, g.text_font_families, g.text_font_bold, g.text_font_italic, g.text_font_stroke_3D); this.textMesh = new b.TextMesh; this.textMesh.init(h); var e = 3 / (g.compass_size_3D /
            h.canvas.clientHeight), a = j.tan(g.projectionPerspectiveVerticalFieldOfView_3D / 360 * j.PI), d = e / a, n = j.max(d - e, 0.1), f = h.canvas.clientWidth / h.canvas.clientHeight, l, p; g.projectionPerspective_3D ? (p = n, l = o.frustum) : (p = d, l = o.ortho); var q = 2 * (p / h.canvas.clientHeight) * a, a = a * p; p = -a; var A = f * p, f = f * a; if (0 === g.compass_type_3D) { var r = (-(h.canvas.clientWidth - g.compass_size_3D) / 2 + this.textImage.charHeight) * q, q = (-(h.canvas.clientHeight - g.compass_size_3D) / 2 + this.textImage.charHeight) * q, A = A - r, f = f - r; p -= q; a -= q } this.projectionMatrix =
                l(A, f, p, a, n, d + e); this.translationMatrix = o.translate(o.identity([]), [0, 0, -d]); e = { position: [], texCoord: [], translation: [] }; this.textImage.pushVertexData("X", [3.5, 0, 0], 0, e); this.textImage.pushVertexData("Y", [0, 3.5, 0], 0, e); this.textImage.pushVertexData("Z", [0, 0, 3.5], 0, e); this.textMesh.storeData(h, e.position, e.texCoord, e.translation)
    }; var l = b.Compass.prototype; l.renderArrow = function (b, g, e, a) {
        b.material.setDiffuseColor(e); b.setMatrixUniforms(a); 1 === g ? b.drawArrays(b.LINES, 0, b.lineArrowBuffer.vertexPositionBuffer.numItems) :
            b.drawElements(b.TRIANGLES, b.arrowBuffer.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0)
    }; l.render = function (b, g) {
        1 === g.compass_type_3D ? b.lineArrowBuffer.bindBuffers(b) : b.arrowBuffer.bindBuffers(b); b.material.setTempColors(g.bonds_materialAmbientColor_3D, void 0, g.bonds_materialSpecularColor_3D, g.bonds_materialShininess_3D); var e = o.multiply(this.translationMatrix, b.rotationMatrix, []), a = j.PI / 2; b.fogging.setMode(0); this.renderArrow(b, g.compass_type_3D, g.compass_axisXColor_3D, o.rotateY(e, a, [])); this.renderArrow(b,
            g.compass_type_3D, g.compass_axisYColor_3D, o.rotateX(e, -a, [])); this.renderArrow(b, g.compass_type_3D, g.compass_axisZColor_3D, e)
    }; l.renderAxis = function (b) { var g = o.multiply(this.translationMatrix, b.rotationMatrix, []); b.setMatrixUniforms(g); this.textImage.useTexture(b); this.textMesh.render(b) }
})(ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4);
(function (b, j) {
    b.Cylinder = function (b, l, h, g) {
        var e = [], a = []; if (g) { for (g = 0; g <= h; g++) { var d = 2 * (g % h) * j.PI / h, n = j.cos(d), d = j.sin(d); a.push(0, -1, 0); e.push(0, 0, 0); a.push(0, -1, 0); e.push(b * n, 0, b * d) } for (g = 0; g <= h; g++)d = 2 * (g % h) * j.PI / h, n = j.cos(d), d = j.sin(d), a.push(n, 0, d), e.push(b * n, 0, b * d), a.push(n, 0, d), e.push(b * n, l, b * d); for (g = 0; g <= h; g++)d = 2 * (g % h) * j.PI / h, n = j.cos(d), d = j.sin(d), a.push(0, 1, 0), e.push(b * n, l, b * d), a.push(0, 1, 0), e.push(0, l, 0) } else {
            for (g = 0; g < h; g++)d = 2 * g * j.PI / h, n = j.cos(d), d = j.sin(d), a.push(n, 0, d), e.push(b *
                n, 0, b * d), a.push(n, 0, d), e.push(b * n, l, b * d); a.push(1, 0, 0); e.push(b, 0, 0); a.push(1, 0, 0); e.push(b, l, 0)
        } this.storeData(e, a)
    }; b.Cylinder.prototype = new b._Mesh
})(ChemDoodle.structures.d3, Math);
(function (b, j, o, l) {
    j.Distance = function (b, g, e, a) { this.a1 = b; this.a2 = g; this.node = e; this.offset = a ? a : 0 }; j = j.Distance.prototype = new j._Measurement; j.calculateData = function (h) {
        var g = [this.a1.x, this.a1.y, this.a1.z, this.a2.x, this.a2.y, this.a2.z]; this.node && (this.move = this.offset + o.max(h.atoms_useVDWDiameters_3D ? b[this.a1.label].vdWRadius * h.atoms_vdwMultiplier_3D : h.atoms_sphereDiameter_3D / 2, h.atoms_useVDWDiameters_3D ? b[this.a2.label].vdWRadius * h.atoms_vdwMultiplier_3D : h.atoms_sphereDiameter_3D / 2), this.displacement =
            [(this.a1.x + this.a2.x) / 2 - this.node.x, (this.a1.y + this.a2.y) / 2 - this.node.y, (this.a1.z + this.a2.z) / 2 - this.node.z], l.normalize(this.displacement), h = l.scale(this.displacement, this.move, []), g[0] += h[0], g[1] += h[1], g[2] += h[2], g[3] += h[0], g[4] += h[1], g[5] += h[2]); this.storeData(g, [0, 0, 0, 0, 0, 0], [0, 1])
    }; j.getText = function () {
        var b = this.a1.distance3D(this.a2), g = [(this.a1.x + this.a2.x) / 2, (this.a1.y + this.a2.y) / 2, (this.a1.z + this.a2.z) / 2]; if (this.node) {
            var e = l.scale(this.displacement, this.move + 0.1, []); g[0] += e[0]; g[1] +=
                e[1]; g[2] += e[2]
        } return { pos: g, value: [b.toFixed(2), " \u212b"].join("") }
    }
})(ChemDoodle.ELEMENT, ChemDoodle.structures.d3, Math, ChemDoodle.lib.vec3);
(function (b, j) {
    j.Fog = function (b) { this.gl = b; this.mUL = b.getUniformLocation(b.program, "u_fog_mode"); this.cUL = b.getUniformLocation(b.program, "u_fog_color"); this.sUL = b.getUniformLocation(b.program, "u_fog_start"); this.eUL = b.getUniformLocation(b.program, "u_fog_end"); this.dUL = b.getUniformLocation(b.program, "u_fog_density") }; var o = j.Fog.prototype; o.setTempParameter = function (j, h, g, e) {
        if (!this.cCache || this.cCache !== j) this.cCache = j, j = b.getRGB(j, 1), this.gl.uniform3f(this.cUL, j[0], j[1], j[2]); if (!this.sCache || this.sCache !==
            h) this.sCache = h, this.gl.uniform1f(this.sUL, h); if (!this.eCache || this.eCache !== g) this.eCache = g, this.gl.uniform1f(this.eUL, g); if (!this.dCache || this.dCache !== e) this.dCache = e, this.gl.uniform1f(this.dUL, e)
    }; o.setMode = function (b) { if (!this.mCache || this.mCache !== b) this.mCache = b, this.gl.uniform1i(this.mUL, b) }
})(ChemDoodle.math, ChemDoodle.structures.d3, ChemDoodle.lib.vec3);
(function (b, j) {
    j.Label = function () { this.textImage = new j.TextImage }; var o = j.Label.prototype; o.init = function (b, h) { this.textImage.init(b); this.textImage.updateFont(b, h.atoms_font_size_2D, h.atoms_font_families_2D, h.atoms_font_bold_2D, h.atoms_font_italic_2D, h.text_font_stroke_3D) }; o.updateVerticesBuffer = function (j, h, g) {
        for (var e = 0, a = h.length; e < a; e++) {
            for (var d = h[e], n = d.labelMesh, f = d.atoms, y = this.textImage, p = { position: [], texCoord: [], translation: [] }, q = 0 < f.length && void 0 != f[0].hetatm, o = 0, r = f.length; o < r; o++) {
                var v =
                    f[o], u = v.label, t = 0.05; g.atoms_useVDWDiameters_3D ? (u = b[u].vdWRadius * g.atoms_vdwMultiplier_3D, 0 === u && (u = 1), t += u) : g.atoms_sphereDiameter_3D && (t += 1.5 * (g.atoms_sphereDiameter_3D / 2)); if (q) if (v.hetatm) { if (v.isWater && !g.macro_showWaters) continue } else if (!g.macro_displayAtoms) continue; y.pushVertexData(v.altLabel ? v.altLabel : v.label, [v.x, v.y, v.z], t, p)
            } if ((d = d.chains) && (g.proteins_displayRibbon || g.proteins_displayBackbone)) {
                o = 0; for (r = d.length; o < r; o++) {
                    f = d[o]; q = 0; for (t = f.length; q < t; q++)u = f[q], u.name && (v = u.cp1,
                        y.pushVertexData(u.name, [v.x, v.y, v.z], 2, p))
                }
            } n.storeData(j, p.position, p.texCoord, p.translation, p.zDepth)
        }
    }; o.render = function (b, h, g) { b.setMatrixUniforms(b.modelViewMatrix); this.textImage.useTexture(b); h = 0; for (var e = g.length; h < e; h++)g[h].labelMesh && g[h].labelMesh.render(b) }
})(ChemDoodle.ELEMENT, ChemDoodle.structures.d3);
(function (b, j) { b.Sphere = function (b, l, h) { for (var g = [], e = [], a = 0; a <= l; a++)for (var d = a * j.PI / l, n = j.sin(d), f = j.cos(d), d = 0; d <= h; d++) { var y = 2 * d * j.PI / h, p = j.sin(y), y = j.cos(y) * n, q = f, p = p * n; e.push(y, q, p); g.push(b * y, b * q, b * p) } b = []; h += 1; for (a = 0; a < l; a++)for (d = 0; d < h; d++)n = a * h + d % h, f = n + h, b.push(n, n + 1, f), d < h - 1 && b.push(f, n + 1, f + 1); this.storeData(g, e, b) }; b.Sphere.prototype = new b._Mesh })(ChemDoodle.structures.d3, Math);
(function (b, j, o, l) {
    function h(b, a, d, g) { this.entire = b; this.name = a; this.indexes = d; this.pi = g } var g = h.prototype; g.getColor = function (e) { return e.macro_colorByChain ? this.entire.chainColor : this.name ? this.getResidueColor(b[this.name] ? this.name : "*", e) : this.helix ? this.entire.front ? e.proteins_ribbonCartoonHelixPrimaryColor : e.proteins_ribbonCartoonHelixSecondaryColor : this.sheet ? e.proteins_ribbonCartoonSheetColor : this.entire.front ? e.proteins_primaryColor : e.proteins_secondaryColor }; g.getResidueColor = function (e,
        a) { var d = b[e]; if ("shapely" === a.proteins_residueColor) return d.shapelyColor; if ("amino" === a.proteins_residueColor) return d.aminoColor; if ("polarity" === a.proteins_residueColor) { if (d.polar) return "#C10000" } else if ("acidity" === a.proteins_residueColor) { if (1 === d.acidity) return "#0000FF"; if (-1 === d.acidity) return "#FF0000"; if (!d.polar) return "#773300" } return "#FFFFFF" }; g.render = function (b, a, d) {
            if (this.entire.partitions && this.pi !== this.entire.partitions.lastRender) {
                var g = this.entire.partitions[this.pi]; b.bindBuffer(b.ARRAY_BUFFER,
                    g.vertexPositionBuffer); b.vertexAttribPointer(b.shader.vertexPositionAttribute, g.vertexPositionBuffer.itemSize, b.FLOAT, !1, 0, 0); b.bindBuffer(b.ARRAY_BUFFER, g.vertexNormalBuffer); b.vertexAttribPointer(b.shader.vertexNormalAttribute, g.vertexNormalBuffer.itemSize, b.FLOAT, !1, 0, 0); b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, g.vertexIndexBuffer); this.entire.partitions.lastRender = this.pi
            } this.vertexIndexBuffer || (this.vertexIndexBuffer = b.createBuffer(), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer), b.bufferData(b.ELEMENT_ARRAY_BUFFER,
                new Uint16Array(this.indexes), b.STATIC_DRAW), this.vertexIndexBuffer.itemSize = 1, this.vertexIndexBuffer.numItems = this.indexes.length); b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer); !d && "rainbow" !== a.proteins_residueColor && b.material.setDiffuseColor(this.getColor(a)); b.drawElements(b.TRIANGLES, this.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0)
        }; j.Ribbon = function (b, a, d) {
            var g = b[0].lineSegments.length, f = b[0].lineSegments[0].length; this.partitions = []; this.partitions.lastRender = 0; var j; this.front =
                0 < a; for (var p = 0, q = b.length; p < q; p++) {
                    if (!j || 65E3 < j.positionData.length) 0 < this.partitions.length && p--, j = { count: 0, positionData: [], normalData: [] }, this.partitions.push(j); var A = b[p]; j.count++; for (var r = 0; r < g; r++)for (var v = d ? A.lineSegmentsCartoon[r] : A.lineSegments[r], u = 0 === r, t = !1, w = 0; w < f; w++) {
                        var x = v[w], B = p, c = w + 1; p === b.length - 1 && w === f - 1 ? c-- : w === f - 1 && (B++, c = 0); var c = d ? b[B].lineSegmentsCartoon[r][c] : b[B].lineSegments[r][c], B = !1, k = r + 1; r === g - 1 && (k -= 2, B = !0); var k = d ? A.lineSegmentsCartoon[k][w] : A.lineSegments[k][w],
                            c = [c.x - x.x, c.y - x.y, c.z - x.z], k = [k.x - x.x, k.y - x.y, k.z - x.z], C = l.cross(c, k, []); 0 === w && (l.normalize(c), l.scale(c, -1), j.normalData.push(c[0], c[1], c[2]), j.positionData.push(x.x, x.y, x.z)); u || t ? (l.normalize(k), l.scale(k, -1), j.normalData.push(k[0], k[1], k[2]), j.positionData.push(x.x, x.y, x.z), u && w === f - 1 && (u = !1, w = -1)) : (l.normalize(C), (B && !this.front || !B && this.front) && l.scale(C, -1), j.normalData.push(C[0], C[1], C[2]), l.scale(C, o.abs(a)), j.positionData.push(x.x + C[0], x.y + C[1], x.z + C[2]), r === g - 1 && w === f - 1 && (t = !0, w = -1));
                        if (-1 === w || w === f - 1) l.normalize(c), j.normalData.push(c[0], c[1], c[2]), j.positionData.push(x.x, x.y, x.z)
                    }
                } g += 2; f += 2; this.segments = []; this.partitionSegments = []; a = 0; for (A = this.partitions.length; a < A; a++) {
                    j = this.partitions[a]; v = []; p = 0; for (q = j.count - 1; p < q; p++) {
                        for (var D = p, r = 0; r < a; r++)D += this.partitions[r].count - 1; D = b[D]; u = p * g * f; j = []; r = 0; for (t = g - 1; r < t; r++) {
                            x = u + r * f; for (w = 0; w < f; w++)B = 1, p === q ? B = 0 : w === f - 1 && (B = g * f - w), B = [x + w, x + f + w, x + f + w + B, x + w, x + w + B, x + f + w + B], w !== f - 1 && (this.front ? j.push(B[0], B[1], B[2], B[3], B[5], B[4]) :
                                j.push(B[0], B[2], B[1], B[3], B[4], B[5])), w === f - 2 && p < q && (c = g * f - w, B[2] += c, B[4] += c, B[5] += c), this.front ? v.push(B[0], B[1], B[2], B[3], B[5], B[4]) : v.push(B[0], B[2], B[1], B[3], B[4], B[5])
                        } d && D.split && (r = new h(this, void 0, v, a), r.helix = D.helix, r.sheet = D.sheet, this.partitionSegments.push(r), v = []); this.segments.push(new h(this, D.name, j, a))
                    } r = new h(this, void 0, v, a); r.helix = D.helix; r.sheet = D.sheet; this.partitionSegments.push(r)
                } this.storeData(this.partitions[0].positionData, this.partitions[0].normalData); 1 === this.partitions.length &&
                    (this.partitions = void 0)
        }; (j.Ribbon.prototype = new j._Mesh).render = function (b, a) { this.bindBuffers(b); var d = a.macro_colorByChain ? this.chainColor : void 0; d || (d = this.front ? a.proteins_primaryColor : a.proteins_secondaryColor); b.material.setDiffuseColor(d); for (var d = 0, g = this.partitionSegments.length; d < g; d++)this.partitionSegments[d].render(b, a, !a.proteins_ribbonCartoonize) }
})(ChemDoodle.RESIDUE, ChemDoodle.structures.d3, Math, ChemDoodle.lib.vec3);
(function (b, j, o) {
    j.Light = function (j, h, g) { this.diffuseRGB = b.getRGB(j, 1); this.specularRGB = b.getRGB(h, 1); this.direction = g }; j.Light.prototype.lightScene = function (b) {
        b.uniform3f(b.getUniformLocation(b.program, "u_light_diffuse_color"), this.diffuseRGB[0], this.diffuseRGB[1], this.diffuseRGB[2]); b.uniform3f(b.getUniformLocation(b.program, "u_light_specular_color"), this.specularRGB[0], this.specularRGB[1], this.specularRGB[2]); var h = o.create(this.direction); o.normalize(h); o.negate(h); b.uniform3f(b.getUniformLocation(b.program,
            "u_light_direction"), h[0], h[1], h[2]); var g = [0, 0, 0], h = [g[0] + h[0], g[1] + h[1], g[2] + h[2]], g = o.length(h); 0 === g ? h = [0, 0, 1] : o.scale(h, 1 / g); b.uniform3f(b.getUniformLocation(b.program, "u_light_half_vector"), h[0], h[1], h[2])
    }
})(ChemDoodle.math, ChemDoodle.structures.d3, ChemDoodle.lib.vec3); (function (b) { b.Line = function () { this.storeData([0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0]) }; b.Line.prototype = new b._Mesh })(ChemDoodle.structures.d3);
(function (b, j) {
    j.Material = function (b) { this.gl = b; this.aUL = b.getUniformLocation(b.program, "u_material_ambient_color"); this.dUL = b.getUniformLocation(b.program, "u_material_diffuse_color"); this.sUL = b.getUniformLocation(b.program, "u_material_specular_color"); this.snUL = b.getUniformLocation(b.program, "u_material_shininess"); this.alUL = b.getUniformLocation(b.program, "u_material_alpha") }; var o = j.Material.prototype; o.setTempColors = function (j, h, g, e) {
        if (!this.aCache || this.aCache !== j) this.aCache = j, j = b.getRGB(j,
            1), this.gl.uniform3f(this.aUL, j[0], j[1], j[2]); if (h && (!this.dCache || this.dCache !== h)) this.dCache = h, j = b.getRGB(h, 1), this.gl.uniform3f(this.dUL, j[0], j[1], j[2]); if (!this.sCache || this.sCache !== g) this.sCache = g, j = b.getRGB(g, 1), this.gl.uniform3f(this.sUL, j[0], j[1], j[2]); if (!this.snCache || this.snCache !== e) this.snCache = e, this.gl.uniform1f(this.snUL, e); this.alCache = 1; this.gl.uniform1f(this.alUL, 1)
    }; o.setDiffuseColor = function (j) {
        if (!this.dCache || this.dCache !== j) this.dCache = j, j = b.getRGB(j, 1), this.gl.uniform3f(this.dUL,
            j[0], j[1], j[2])
    }; o.setAlpha = function (b) { if (!this.alCache || this.alCache !== b) this.alCache = b, this.gl.uniform1f(this.alUL, b) }
})(ChemDoodle.math, ChemDoodle.structures.d3);
(function (b, j, o, l) {
    j.MolecularSurface = function (h, g, e, a, d) {
        function j(a, c, d, b) { var e = a.index; if (a.contained) for (var e = -1, f = Infinity, g = 0, h = c.length; g < h; g++)for (var p = c[g], n = 0, k = p.length; n < k; n++) { var q = p[n]; if (!q.contained && q.index !== d && q.index !== b) { var l = q.distance3D(a); l < f && (e = q.index, f = l) } } return e } for (var f = [], y = [], p = [], q = [], A = 0; A <= g; A++)for (var r = A * l.PI / g, v = l.sin(r), u = l.cos(r), r = 0; r <= e; r++) { var t = 2 * r * l.PI / e; q.push(l.cos(t) * v, u, l.sin(t) * v) } v = []; A = 0; for (r = h.atoms.length; A < r; A++) {
            for (var u = [], w = h.atoms[A],
                x = o[w.label][d] + a, B = [], t = 0, c = h.atoms.length; t < c; t++)if (t !== A) { var k = h.atoms[t]; k.index = t; w.distance3D(k) < x + o[k.label][d] + a && B.push(k) } t = 0; for (c = q.length; t < c; t += 3) { for (var C = new b.Atom("C", w.x + x * q[t], w.y + x * q[t + 1], w.z + x * q[t + 2]), D = 0, G = B.length; D < G; D++)if (k = B[D], C.distance3D(k) < o[k.label][d] + a) { C.contained = !0; break } u.push(C) } v.push(u)
        } h = []; e++; for (A = 0; A < g; A++)for (r = 0; r < e; r++)d = A * e + r % e, a = d + e, h.push(d), h.push(a), h.push(d + 1), r < e - 1 && (h.push(a), h.push(a + 1), h.push(d + 1)); A = D = 0; for (r = v.length; A < r; A++) {
            u = v[A];
            t = 0; for (c = u.length; t < c; t++)C = u[t], C.contained || (C.index = D, D++, f.push(C.x, C.y, C.z), y.push(q[3 * t], q[3 * t + 1], q[3 * t + 2])); t = 0; for (c = h.length; t < c; t += 3)d = u[h[t]], a = u[h[t + 1]], C = u[h[t + 2]], !d.contained && (!a.contained && !C.contained) && p.push(d.index, a.index, C.index)
        } q = []; A = 0; for (r = v.length; A < r; A++) {
            u = v[A]; t = 0; for (c = h.length; t < c; t += 3) {
                d = u[h[t]]; a = u[h[t + 1]]; C = u[h[t + 2]]; B = []; D = 0; for (G = v.length; D < G; D++)D !== A && B.push(v[D]); if ((!d.contained || !a.contained || !C.contained) && (d.contained || a.contained || C.contained)) if (g =
                    j(d, B, -1, -1), e = j(a, B, g, -1), B = j(C, B, g, e), -1 !== g && -1 !== e && -1 !== B) { a = !1; D = 0; for (G = q.length; D < G; D += 3)if (d = q[D], C = q[D + 1], w = q[D + 2], x = e === d || e === C || e === w, k = B === d || B === C || B === w, (g === d || g === C || g === w) && x && k) { a = !0; break } a || q.push(g, e, B) }
            }
        } p = p.concat(q); this.storeData(f, y, p)
    }; j.MolecularSurface.prototype = new j._Mesh
})(ChemDoodle.structures, ChemDoodle.structures.d3, ChemDoodle.ELEMENT, Math);
(function (b) {
    b.Picker = function () { }; b = b.Picker.prototype; b.init = function (b) {
        this.framebuffer = b.createFramebuffer(); var o = b.createTexture(), l = b.createRenderbuffer(); b.bindTexture(b.TEXTURE_2D, o); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE); b.bindRenderbuffer(b.RENDERBUFFER, l); b.bindFramebuffer(b.FRAMEBUFFER,
            this.framebuffer); b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, o, 0); b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, l); b.bindTexture(b.TEXTURE_2D, null); b.bindRenderbuffer(b.RENDERBUFFER, null); b.bindFramebuffer(b.FRAMEBUFFER, null)
    }; b.setDimension = function (b, o, l) {
        b.bindFramebuffer(b.FRAMEBUFFER, this.framebuffer); var h = b.getFramebufferAttachmentParameter(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME); b.isRenderbuffer(h) && (b.bindRenderbuffer(b.RENDERBUFFER,
            h), b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, o, l), b.bindRenderbuffer(b.RENDERBUFFER, null)); h = b.getFramebufferAttachmentParameter(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME); b.isTexture(h) && (b.bindTexture(b.TEXTURE_2D, h), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, o, l, 0, b.RGBA, b.UNSIGNED_BYTE, null), b.bindTexture(b.TEXTURE_2D, null)); b.bindFramebuffer(b.FRAMEBUFFER, null)
    }; b.pick = function (b, o, l, h, g, e, a) {
        var d = void 0, n = b.getParameter(b.COLOR_CLEAR_VALUE); b.bindFramebuffer(b.FRAMEBUFFER,
            this.framebuffer); b.clearColor(1, 1, 1, 0); b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT); b.fogging.setMode(0); b.disableVertexAttribArray(b.shader.vertexNormalAttribute); var f = []; b.material.setAlpha(255); for (var y = 0, p = o.length; y < p; y++)o[y].renderPickFrame(b, l, f, e, a); b.flush(); o = new Uint8Array(4); b.readPixels(h - 2, g + 2, 1, 1, b.RGBA, b.UNSIGNED_BYTE, o); 0 < o[3] && (d = f[o[2] | o[1] << 8 | o[0] << 16]); b.enableVertexAttribArray(b.shader.vertexNormalAttribute); b.fogging.setMode(l.fog_mode_3D); b.bindFramebuffer(b.FRAMEBUFFER,
                null); b.clearColor(n[0], n[1], n[2], n[3]); return d
    }
})(ChemDoodle.structures.d3, ChemDoodle.math, document);
(function (b, j) { b.Pill = function (b, l, h, g) { var e = 1, a = 2 * b; l -= a; 0 > l ? (e = 0, l += a) : l < a && (e = l / a, l = a); for (var a = [], d = [], n = 0; n <= h; n++)for (var f = n * j.PI / h, y = j.sin(f), p = j.cos(f) * e, f = 0; f <= g; f++) { var q = 2 * f * j.PI / g, A = j.sin(q), q = j.cos(q) * y, r = p, A = A * y; d.push(q, r, A); a.push(b * q, b * r + (n < h / 2 ? l : 0), b * A) } b = []; g += 1; for (n = 0; n < h; n++)for (f = 0; f < g; f++)l = n * g + f % g, e = l + g, b.push(l, l + 1, e), f < g - 1 && b.push(e, l + 1, e + 1); this.storeData(a, d, b) }; b.Pill.prototype = new b._Mesh })(ChemDoodle.structures.d3, Math);
(function (b, j, o, l, h, g, e) {
    function a(a, d, b) { var e = new o.Residue(-1); e.cp1 = e.cp2 = new o.Atom("", a, d, b); return e } function d(a, d) { this.a1 = a; this.a2 = d } function n(a, d, b) { this.a1 = a; this.a2 = d; this.vx = b } j = d.prototype; j.render = function (a, d) {
        var j = this.a1, n = this.a2, l = 1.001 * j.distance3D(n), r = d.proteins_cylinderHelixDiameter / 2, l = [r, l, r], r = g.translate(a.modelViewMatrix, [j.x, j.y, j.z], []), o = [0, 1, 0], u = 0; j.x === n.x && j.z === n.z ? (o = [0, 0, 1], n.y < j.y && (u = h.PI)) : (j = [n.x - j.x, n.y - j.y, n.z - j.z], u = b.vec3AngleFrom(o, j), o = e.cross(o,
            j, [])); 0 !== u && g.rotate(r, u, o); g.scale(r, l); a.setMatrixUniforms(r); a.drawArrays(a.TRIANGLE_STRIP, 0, a.cylinderClosedBuffer.vertexPositionBuffer.numItems)
    }; j = n.prototype; j.render = function (a, d) {
        this.specs && (d = this.specs); var b = 1.001 * this.a1.distance3D(this.a2), h = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z], j = e.cross(h, this.vx, []), n = e.cross(j, h, []); e.normalize(n); e.normalize(h); e.normalize(j); b = [d.proteins_plankSheetWidth, b, d.proteins_tubeThickness]; h = g.multiply(a.modelViewMatrix, [n[0],
        n[1], n[2], 0, h[0], h[1], h[2], 0, j[0], j[1], j[2], 0, this.a1.x, this.a1.y, this.a1.z, 1], []); g.scale(h, b); a.setMatrixUniforms(h); a.drawArrays(a.TRIANGLE_STRIP, 0, a.boxBuffer.vertexPositionBuffer.numItems)
    }; l.PipePlank = function (b, g) {
        this.tubes = []; this.helixCylinders = []; this.sheetPlanks = []; this.chainColor = b.chainColor; var j = [], q = [], A = [], r = []; if (1 < b.length) { var v = b[0], u = b[1]; u.helix ? A.push(v) : u.sheet ? r.push(v) : q.push(v) } v = 1; for (u = b.length - 1; v <= u; v++) {
            var t = b[v]; if (t.helix) {
                if (A.push(t), t.arrow) {
                    var w = e.create(),
                    x = e.create(); if (2 == A.length) w = [A[0].cp1.x, A[0].cp1.y, A[0].cp1.z], x = [A[1].cp1.x, A[1].cp1.y, A[1].cp1.z]; else {
                        3 == A.length && A.unshift(b[h.max(v - 3, 0)]); for (var B = [], c = [], k = 1, C = A.length - 1; k < C; k++) { var D = [A[k].cp1.x, A[k].cp1.y, A[k].cp1.z], G = [A[k - 1].cp1.x, A[k - 1].cp1.y, A[k - 1].cp1.z], E = [A[k + 1].cp1.x, A[k + 1].cp1.y, A[k + 1].cp1.z]; e.subtract(G, D); e.subtract(E, D); var H = e.scale(G, e.length(E), []), G = e.scale(E, e.length(G), []), H = e.normalize(e.add(H, G, [])); B.push(D); c.push(H) } A = []; k = 0; for (C = B.length - 1; k < C; k++) {
                            var G = B[k],
                            E = c[k], D = B[k + 1], H = c[k + 1], I = e.normalize(e.cross(E, H, [])), M = e.subtract(D, G, []), J = e.dot(M, I), I = e.scale(I, J, []), I = e.length(I), M = e.length(M), M = -(I * I - M * M) / (2 * e.dot(e.subtract(G, D, []), H)), G = e.add(G, e.scale(E, M, []), []), D = e.add(D, e.scale(H, M, []), []); A.push([G, D])
                        } k = A[0][0]; C = A[0][1]; C = e.subtract(k, C, []); e.add(k, C, w); k = A[A.length - 1][1]; C = A[A.length - 1][0]; C = e.subtract(k, C, []); e.add(k, C, x)
                    } k = new o.Atom("", w[0], w[1], w[2]); C = new o.Atom("", x[0], x[1], x[2]); this.helixCylinders.push(new d(k, C)); A = []; C = e.subtract(w,
                        x, []); e.normalize(C); e.scale(C, 0.5); 0 < q.length && (k = e.add(w, C, []), B = q[q.length - 1].cp1, B = e.subtract([B.x, B.y, B.z], k, []), e.normalize(B), e.scale(B, 0.5), e.add(k, B), B = new o.Residue(-1), B.cp1 = B.cp2 = new o.Atom("", k[0], k[1], k[2]), q.push(B), B = a(w[0], w[1], w[2]), q.push(B), j.push(q)); q = []; v < u && (B = a(x[0], x[1], x[2]), q.push(B), w = b[v + 1], w.sheet ? (q.push(t), q.push(t), j.push(q), q = [], r.push(t)) : (e.scale(C, -1), k = e.add(x, C, []), t = w.cp1, t = e.subtract([t.x, t.y, t.z], k, []), e.normalize(t), e.scale(t, 0.5), e.add(k, t), B = a(k[0], k[1],
                            k[2]), q.push(B)))
                }
            } else if (t.sheet) { if (r.push(t), t.arrow) { x = [0, 0, 0]; w = [0, 0, 0]; k = 0; for (C = r.length; k < C; k++)c = r[k].guidePointsLarge, B = c[0], c = c[c.length - 1], e.add(x, [B.x, B.y, B.z]), e.add(w, [c.x, c.y, c.z]); e.scale(x, 1 / C); e.scale(w, 1 / C); w = e.subtract(x, w); x = r[r.length - 1].guidePointsSmall[0]; this.sheetPlanks.push(new n(r[0].guidePointsSmall[0], x, w)); r = []; v < u && (w = b[v + 1], w.sheet ? r.push(t) : (B = a(x.x, x.y, x.z), q.push(B))) } } else q.push(t), v < u && (w = b[v + 1], w.sheet && (c = t.guidePointsSmall[0], B = a(c.x, c.y, c.z), q.push(B),
                j.push(q), q = [], r.push(t)))
        } 1 < q.length && (2 == q.length && q.push(q[q.length - 1]), j.push(q)); q = []; r = 0; for (t = j.length; r < t; r++) { x = j[r]; w = []; v = 0; for (u = x.length - 1; v <= u; v++)w.push(x[v].cp1); q.push(w) } v = 0; for (u = q.length; v < u; v++)j = new l.CatmullTube(q[v], g.proteins_tubeThickness, g.proteins_tubeResolution_3D, g.proteins_horizontalResolution), j.chainColor = b.chainColor, this.tubes.push(j)
    }; j = l.PipePlank.prototype = new l._Mesh; j.render = function (a, d) {
        a.material.setTempColors(d.proteins_materialAmbientColor_3D, void 0, d.proteins_materialSpecularColor_3D,
            d.proteins_materialShininess_3D); a.material.setDiffuseColor(d.macro_colorByChain ? this.chainColor : d.proteins_tubeColor); for (var b = 0, e = this.tubes.length; b < e; b++)a.setMatrixUniforms(a.modelViewMatrix), this.tubes[b].render(a, d); d.macro_colorByChain || a.material.setDiffuseColor(d.proteins_ribbonCartoonHelixSecondaryColor); a.cylinderClosedBuffer.bindBuffers(a); b = 0; for (e = this.helixCylinders.length; b < e; b++)this.helixCylinders[b].render(a, d); d.macro_colorByChain || a.material.setDiffuseColor(d.proteins_ribbonCartoonSheetColor);
        a.boxBuffer.bindBuffers(a); b = 0; for (e = this.sheetPlanks.length; b < e; b++)this.sheetPlanks[b].render(a, d)
    }
})(ChemDoodle.extensions, ChemDoodle.RESIDUE, ChemDoodle.structures, ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3, ChemDoodle.math);
(function (b, j) {
    b.Shader = function () { }; var o = b.Shader.prototype; o.init = function (b) {
        var h = this.getShader(b, "vertex-shader"); h || (h = this.loadDefaultVertexShader(b)); var g = this.getShader(b, "fragment-shader"); g || (g = this.loadDefaultFragmentShader(b)); b.attachShader(b.program, h); b.attachShader(b.program, g); this.vertexPositionAttribute = 0; b.bindAttribLocation(b.program, this.vertexPositionAttribute, "a_vertex_position"); b.linkProgram(b.program); b.getProgramParameter(b.program, b.LINK_STATUS) || alert("Could not initialize shaders: " +
            b.getProgramInfoLog(b.program)); b.useProgram(b.program); b.enableVertexAttribArray(this.vertexPositionAttribute); this.vertexTexCoordAttribute = b.getAttribLocation(b.program, "a_vertex_texcoord"); this.vertexNormalAttribute = b.getAttribLocation(b.program, "a_vertex_normal"); b.enableVertexAttribArray(this.vertexNormalAttribute); this.dimensionUniform = b.getUniformLocation(b.program, "u_dimension")
    }; o.getShader = function (b, h) {
        var g = j.getElementById(h); if (g) {
            for (var e = [], a = g.firstChild; a;)3 === a.nodeType && e.push(a.textContent),
                a = a.nextSibling; if ("x-shader/x-fragment" === g.type) a = b.createShader(b.FRAGMENT_SHADER); else if ("x-shader/x-vertex" === g.type) a = b.createShader(b.VERTEX_SHADER); else return; b.shaderSource(a, e.join("")); b.compileShader(a); if (b.getShaderParameter(a, b.COMPILE_STATUS)) return a; alert(g.type + " " + b.getShaderInfoLog(a))
        }
    }; o.loadDefaultVertexShader = function (b) {
        var h = b.createShader(b.VERTEX_SHADER); b.shaderSource(h, "precision mediump float;attribute vec3 a_vertex_position;attribute vec3 a_vertex_normal;attribute vec2 a_vertex_texcoord;uniform vec3 u_light_diffuse_color;uniform vec3 u_material_ambient_color;uniform vec3 u_material_diffuse_color;uniform mat4 u_model_view_matrix;uniform mat4 u_projection_matrix;uniform mat3 u_normal_matrix;uniform vec2 u_dimension;varying vec2 v_texcoord;varying vec3 v_diffuse;varying vec4 v_ambient;varying vec3 v_normal;void main() {v_texcoord \x3d a_vertex_texcoord;if(length(a_vertex_texcoord) !\x3d 0.) {gl_Position \x3d u_model_view_matrix * vec4(a_vertex_position, 1.);vec4 depth_pos \x3d vec4(gl_Position);depth_pos.z +\x3d a_vertex_normal.z;gl_Position \x3d u_projection_matrix * gl_Position;depth_pos \x3d u_projection_matrix * depth_pos;gl_Position /\x3d gl_Position.w;gl_Position.xy +\x3d a_vertex_normal.xy / u_dimension * 2.;gl_Position.z \x3d depth_pos.z / depth_pos.w;} else {v_normal \x3d length(a_vertex_normal)\x3d\x3d0. ? a_vertex_normal : normalize(u_normal_matrix * a_vertex_normal);v_ambient \x3d vec4(u_material_ambient_color, 1.);v_diffuse \x3d u_material_diffuse_color * u_light_diffuse_color;gl_Position \x3d u_projection_matrix * u_model_view_matrix * vec4(a_vertex_position, 1.);gl_Position /\x3d gl_Position.w;}}");
        b.compileShader(h); if (b.getShaderParameter(h, b.COMPILE_STATUS)) return h; alert("Vertex shader failed to compile: " + b.getShaderInfoLog(h))
    }; o.loadDefaultFragmentShader = function (b) {
        var h = b.createShader(b.FRAGMENT_SHADER); b.shaderSource(h, "precision mediump float;\nuniform vec3 u_light_specular_color;uniform vec3 u_light_direction;uniform vec3 u_light_half_vector;uniform vec3 u_material_specular_color;uniform float u_material_shininess;uniform float u_material_alpha;uniform int u_fog_mode;uniform vec3 u_fog_color;uniform float u_fog_density;uniform float u_fog_start;uniform float u_fog_end;uniform sampler2D u_image;varying vec2 v_texcoord;varying vec3 v_diffuse;varying vec4 v_ambient;varying vec3 v_normal;void main(void){if(length(v_texcoord)!\x3d0.) {gl_FragColor \x3d texture2D(u_image, v_texcoord);return;}if(length(v_normal)\x3d\x3d0.){gl_FragColor \x3d vec4(v_diffuse, u_material_alpha);}else{float nDotL \x3d max(dot(v_normal, u_light_direction), 0.);vec4 color \x3d vec4(v_diffuse*nDotL, 1.);float nDotHV \x3d max(dot(v_normal, u_light_half_vector), 0.);vec3 specular \x3d u_material_specular_color * u_light_specular_color;color+\x3dvec4(specular * pow(nDotHV, u_material_shininess), 1.);gl_FragColor \x3d color+v_ambient;gl_FragColor.a*\x3du_material_alpha;}float fogCoord \x3d 1.-clamp((u_fog_end - gl_FragCoord.z/gl_FragCoord.w) / (u_fog_end - u_fog_start), 0., 1.);float fogFactor \x3d 1.;if(u_fog_mode \x3d\x3d 1){fogFactor \x3d 1.-fogCoord;}else if(u_fog_mode \x3d\x3d 2) {fogFactor \x3d clamp(exp(-u_fog_density*fogCoord), 0., 1.);}else if(u_fog_mode \x3d\x3d 3) {fogFactor \x3d clamp(exp(-pow(u_fog_density*fogCoord, 2.)), 0., 1.);}gl_FragColor \x3d mix(vec4(u_fog_color, 1.), gl_FragColor, fogFactor);}");
        b.compileShader(h); if (b.getShaderParameter(h, b.COMPILE_STATUS)) return h; alert("Fragment shader failed to compile: " + b.getShaderInfoLog(h))
    }
})(ChemDoodle.structures.d3, document);
(function (b, j, o) {
    j.Shape = function (j, h) {
        for (var g = j.length, e = [], a = [], d = new b.Point, n = 0, f = g; n < f; n++) { var y = n + 1; n === f - 1 && (y = 0); for (var p = j[n], y = j[y], q = o.cross([0, 0, 1], [y.x - p.x, y.y - p.y, 0]), A = 0; 2 > A; A++)e.push(p.x, p.y, h / 2), e.push(p.x, p.y, -h / 2), e.push(y.x, y.y, h / 2), e.push(y.x, y.y, -h / 2); for (A = 0; 4 > A; A++)a.push(q[0], q[1], q[2]); a.push(0, 0, 1); a.push(0, 0, -1); a.push(0, 0, 1); a.push(0, 0, -1); d.add(p) } d.x /= g; d.y /= g; a.push(0, 0, 1); e.push(d.x, d.y, h / 2); a.push(0, 0, -1); e.push(d.x, d.y, -h / 2); d = []; p = 8 * g; n = 0; for (f = g; n < f; n++)g =
            8 * n, d.push(g), d.push(g + 3), d.push(g + 1), d.push(g), d.push(g + 2), d.push(g + 3), d.push(g + 4), d.push(p), d.push(g + 6), d.push(g + 5), d.push(g + 7), d.push(p + 1); this.storeData(e, a, d)
    }; j.Shape.prototype = new j._Mesh
})(ChemDoodle.structures, ChemDoodle.structures.d3, ChemDoodle.lib.vec3);
(function (b, j, o) {
    b.Star = function () {
        for (var b = [0.8944, 0.4472, 0, 0.2764, 0.4472, 0.8506, 0.2764, 0.4472, -0.8506, -0.7236, 0.4472, 0.5257, -0.7236, 0.4472, -0.5257, -0.3416, 0.4472, 0, -0.1056, 0.4472, 0.3249, -0.1056, 0.4472, -0.3249, 0.2764, 0.4472, 0.2008, 0.2764, 0.4472, -0.2008, -0.8944, -0.4472, 0, -0.2764, -0.4472, 0.8506, -0.2764, -0.4472, -0.8506, 0.7236, -0.4472, 0.5257, 0.7236, -0.4472, -0.5257, 0.3416, -0.4472, 0, 0.1056, -0.4472, 0.3249, 0.1056, -0.4472, -0.3249, -0.2764, -0.4472, 0.2008, -0.2764, -0.4472, -0.2008, -0.5527, 0.1058, 0, -0.1708, 0.1058,
            0.5527, -0.1708, 0.1058, -0.5527, 0.4471, 0.1058, 0.3249, 0.4471, 0.1058, -0.3249, 0.5527, -0.1058, 0, 0.1708, -0.1058, 0.5527, 0.1708, -0.1058, -0.5527, -0.4471, -0.1058, 0.3249, -0.4471, -0.1058, -0.3249, 0, 1, 0, 0, -1, 0], h = [0, 9, 8, 2, 7, 9, 4, 5, 7, 3, 6, 5, 1, 8, 6, 0, 8, 23, 30, 6, 8, 3, 21, 6, 11, 26, 21, 13, 23, 26, 2, 9, 24, 30, 8, 9, 1, 23, 8, 13, 25, 23, 14, 24, 25, 4, 7, 22, 30, 9, 7, 0, 24, 9, 14, 27, 24, 12, 22, 27, 3, 5, 20, 30, 7, 5, 2, 22, 7, 12, 29, 22, 10, 20, 29, 1, 6, 21, 30, 5, 6, 4, 20, 5, 10, 28, 20, 11, 21, 28, 10, 19, 18, 12, 17, 19, 14, 15, 17, 13, 16, 15, 11, 18, 16, 31, 19, 17, 14, 17, 27, 2, 27, 22, 4, 22, 29,
                10, 29, 19, 31, 18, 19, 12, 19, 29, 4, 29, 20, 3, 20, 28, 11, 28, 18, 31, 16, 18, 10, 18, 28, 3, 28, 21, 1, 21, 26, 13, 26, 16, 31, 15, 16, 11, 16, 26, 1, 26, 23, 0, 23, 25, 14, 25, 15, 31, 17, 15, 13, 15, 25, 0, 25, 24, 2, 24, 27, 12, 27, 17], g = [], e = [], a = [], d = 0, j = h.length; d < j; d += 3) {
                    var f = 3 * h[d], y = 3 * h[d + 1], p = 3 * h[d + 2], f = [b[f], b[f + 1], b[f + 2]], y = [b[y], b[y + 1], b[y + 2]], p = [b[p], b[p + 1], b[p + 2]], q = o.cross([p[0] - y[0], p[1] - y[1], p[2] - y[2]], [f[0] - y[0], f[1] - y[1], f[2] - y[2]], []); o.normalize(q); g.push(f[0], f[1], f[2], y[0], y[1], y[2], p[0], p[1], p[2]); e.push(q[0], q[1], q[2], q[0], q[1],
                        q[2], q[0], q[1], q[2]); a.push(d, d + 1, d + 2)
        } this.storeData(g, e, a)
    }; b.Star.prototype = new b._Mesh
})(ChemDoodle.structures.d3, Math, ChemDoodle.lib.vec3);
(function (b, j, o, l) {
    var h = 1; l.devicePixelRatio && (h = l.devicePixelRatio); b.TextImage = function () { this.ctx = o.createElement("canvas").getContext("2d"); this.data = []; this.text = ""; this.charHeight = 0 }; b = b.TextImage.prototype; b.init = function (b) {
        this.textureImage = b.createTexture(); b.bindTexture(b.TEXTURE_2D, this.textureImage); b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE); b.texParameteri(b.TEXTURE_2D,
            b.TEXTURE_MIN_FILTER, b.NEAREST); b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST); b.bindTexture(b.TEXTURE_2D, null); this.updateFont(b, 12, ["Sans-serif"], !1, !1, !1)
    }; b.charData = function (b) { b = this.text.indexOf(b); return 0 <= b ? this.data[b] : null }; b.updateFont = function (b, e, a, d, n, f) {
        var l = this.ctx, p = this.ctx.canvas, q = [], o = ""; e *= h; n = j.getFontString(e, a, d, n); l.font = n; l.save(); var r = 0; e *= 1.5; a = 32; for (d = 127; a < d; a++) {
            var v = String.fromCharCode(a), u = l.measureText(v).width; q.push({ text: v, width: u, height: e });
            r += 2 * u
        } var t = ["\u00b0", "\u212b", "\u00ae"]; a = 0; for (d = t.length; a < d; a++)v = t[a], u = l.measureText(v).width, q.push({ text: v, width: u, height: e }), r += 2 * u; a = Math.sqrt(r * e); a = Math.ceil(a / e); r = Math.ceil(r / (a - 1)); p.width = r; p.height = a * e; l.font = n; l.textAlign = "left"; l.textBaseline = "middle"; l.strokeStyle = "#000"; l.lineWidth = 1.4; l.fillStyle = "#fff"; a = v = n = 0; for (d = q.length; a < d; a++) { u = q[a]; t = 2 * u.width; e = u.height; var w = u.text; v + t > r && (n++, v = 0); var x = n * e; f && l.strokeText(w, v, x + e / 2); l.fillText(w, v, x + e / 2); u.x = v; u.y = x; o += w; v += t } this.text =
            o; this.data = q; this.charHeight = e; b.bindTexture(b.TEXTURE_2D, this.textureImage); b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, p); b.bindTexture(b.TEXTURE_2D, null)
    }; b.pushVertexData = function (b, e, a, d) {
        var j = b.toString().split(""), f = this.getHeight(), l = this.getWidth(); b = -this.textWidth(b) / 2 / h; for (var p = -this.charHeight / 2 / h, q = 0, o = j.length; q < o; q++) {
            var r = this.charData(j[q]), v = r.width, u = r.x / l, t = u + 1.8 * r.width / l, w = r.y / f, r = w + r.height / f, x = b + 1.8 * v / h, B = this.charHeight / 2 / h; d.position.push(e[0], e[1], e[2],
                e[0], e[1], e[2], e[0], e[1], e[2], e[0], e[1], e[2], e[0], e[1], e[2], e[0], e[1], e[2]); d.texCoord.push(u, w, t, r, t, w, u, w, u, r, t, r); d.translation.push(b, B, a, x, p, a, x, B, a, b, B, a, b, p, a, x, p, a); b = x + (v - 1.8 * v) / h
        }
    }; b.getCanvas = function () { return this.ctx.canvas }; b.getHeight = function () { return this.getCanvas().height }; b.getWidth = function () { return this.getCanvas().width }; b.textWidth = function (b) { return this.ctx.measureText(b).width }; b.test = function () { o.body.appendChild(this.getCanvas()) }; b.useTexture = function (b) {
        b.bindTexture(b.TEXTURE_2D,
            this.textureImage)
    }
})(ChemDoodle.structures.d3, ChemDoodle.extensions, document, window);
(function (b) {
    b.TextMesh = function () { }; b = b.TextMesh.prototype; b.init = function (b) { this.vertexPositionBuffer = b.createBuffer(); this.vertexTexCoordBuffer = b.createBuffer(); this.vertexTranslationBuffer = b.createBuffer() }; b.setVertexData = function (b, o, l, h) { b.bindBuffer(b.ARRAY_BUFFER, o); b.bufferData(b.ARRAY_BUFFER, new Float32Array(l), b.STATIC_DRAW); o.itemSize = h; o.numItems = l.length / h }; b.storeData = function (b, o, l, h) {
        this.setVertexData(b, this.vertexPositionBuffer, o, 3); this.setVertexData(b, this.vertexTexCoordBuffer,
            l, 2); this.setVertexData(b, this.vertexTranslationBuffer, h, 3)
    }; b.bindBuffers = function (b) {
        b.bindBuffer(b.ARRAY_BUFFER, this.vertexPositionBuffer); b.vertexAttribPointer(b.shader.vertexPositionAttribute, this.vertexPositionBuffer.itemSize, b.FLOAT, !1, 0, 0); b.bindBuffer(b.ARRAY_BUFFER, this.vertexTexCoordBuffer); b.vertexAttribPointer(b.shader.vertexTexCoordAttribute, this.vertexTexCoordBuffer.itemSize, b.FLOAT, !1, 0, 0); b.bindBuffer(b.ARRAY_BUFFER, this.vertexTranslationBuffer); b.vertexAttribPointer(b.shader.vertexNormalAttribute,
            this.vertexTranslationBuffer.itemSize, b.FLOAT, !1, 0, 0)
    }; b.render = function (b) { var o = this.vertexPositionBuffer.numItems; o && (this.bindBuffers(b), b.drawArrays(b.TRIANGLES, 0, o)) }
})(ChemDoodle.structures.d3, Math);
(function (b, j, o, l, h, g, e) {
    l.Torsion = function (a, d, b, e) { this.a1 = a; this.a2 = d; this.a3 = b; this.a4 = e }; b = l.Torsion.prototype = new l._Measurement; b.calculateData = function (a) {
        var d = [], b = [], f = [], g = this.a2.distance3D(this.a1), j = this.a2.distance3D(this.a3); this.distUse = h.min(g, j) / 2; var j = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z], g = [this.a3.x - this.a2.x, this.a3.y - this.a2.y, this.a3.z - this.a2.z], q = [this.a4.x - this.a3.x, this.a4.y - this.a3.y, this.a4.z - this.a3.z], l = e.cross(j, g, []), q = e.cross(g, q, []); e.scale(j,
            e.length(g)); this.torsion = h.atan2(e.dot(j, q), e.dot(l, q)); j = e.normalize(e.cross(l, g, [])); l = e.normalize(e.cross(g, j, [])); this.pos = e.add([this.a2.x, this.a2.y, this.a2.z], e.scale(e.normalize(g, []), this.distUse)); var q = [], o = a.measurement_angleBands_3D; for (a = 0; a <= o; ++a) { var v = this.torsion * a / o, u = e.scale(j, h.cos(v), []), v = e.scale(l, h.sin(v), []), u = e.scale(e.normalize(e.add(u, v, [])), this.distUse); 0 == a && (q = u); d.push(this.pos[0] + u[0], this.pos[1] + u[1], this.pos[2] + u[2]); b.push(0, 0, 0); a < o && f.push(a, a + 1) } this.vecText =
                e.normalize(e.add(q, u, [])); g = e.normalize(g, []); e.scale(g, 0.0625); v = this.torsion - 2 * h.asin(0.125) * this.torsion / h.abs(this.torsion); u = e.scale(j, h.cos(v), []); v = e.scale(l, h.sin(v), []); u = e.scale(e.normalize(e.add(u, v, [])), this.distUse); d.push(this.pos[0] + g[0] + u[0], this.pos[1] + g[1] + u[1], this.pos[2] + g[2] + u[2]); b.push(0, 0, 0); d.push(this.pos[0] - g[0] + u[0], this.pos[1] - g[1] + u[1], this.pos[2] - g[2] + u[2]); b.push(0, 0, 0); f.push(--a, a + 1, a, a + 2); this.storeData(d, b, f)
    }; b.getText = function () {
        e.add(this.pos, e.scale(this.vecText,
            this.distUse + 0.3, [])); return { pos: this.pos, value: [j.angleBounds(this.torsion, !0, !0).toFixed(2), " \u00b0"].join("") }
    }
})(ChemDoodle.ELEMENT, ChemDoodle.math, ChemDoodle.extensions, ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function (b, j, o, l, h, g, e, a) {
    var d = function (a, d) { a.bindBuffer(a.ARRAY_BUFFER, d.vertexPositionBuffer); a.vertexAttribPointer(a.shader.vertexPositionAttribute, d.vertexPositionBuffer.itemSize, a.FLOAT, !1, 0, 0); a.bindBuffer(a.ARRAY_BUFFER, d.vertexNormalBuffer); a.vertexAttribPointer(a.shader.vertexNormalAttribute, d.vertexNormalBuffer.itemSize, a.FLOAT, !1, 0, 0); a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, d.vertexIndexBuffer) }, n = function (a, d, b) {
        var e = h.sqrt(d[1] * d[1] + d[2] * d[2]), j = [1, 0, 0, 0, 0, d[2] / e, -d[1] / e, 0, 0, d[1] / e, d[2] /
            e, 0, 0, 0, 0, 1], n = [1, 0, 0, 0, 0, d[2] / e, d[1] / e, 0, 0, -d[1] / e, d[2] / e, 0, 0, 0, 0, 1], l = [e, 0, -d[0], 0, 0, 1, 0, 0, d[0], 0, e, 0, 0, 0, 0, 1]; d = [e, 0, d[0], 0, 0, 1, 0, 0, -d[0], 0, e, 0, 0, 0, 0, 1]; b = [h.cos(b), -h.sin(b), 0, 0, h.sin(b), h.cos(b), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; var o = g.multiply(j, g.multiply(l, g.multiply(b, g.multiply(d, n, [])))); this.rotate = function () { return g.multiplyVec3(o, a) }
    }; l.Tube = function (f, l, p) {
        var q = f[0].lineSegments[0].length; this.partitions = []; var A; this.ends = []; this.ends.push(f[0].lineSegments[0][0]); this.ends.push(f[f.length -
            1].lineSegments[0][0]); for (var r = [1, 0, 0], v = 0, u = f.length; v < u; v++) {
                if (!A || 65E3 < A.positionData.length) 0 < this.partitions.length && v--, A = { count: 0, positionData: [], normalData: [], indexData: [] }, this.partitions.push(A); var t = f[v]; A.count++; for (var w = Infinity, x = new o.Atom("", f[v].cp1.x, f[v].cp1.y, f[v].cp1.z), B = 0; B < q; B++) {
                    var c = t.lineSegments[0][B], k; k = B === q - 1 ? v === f.length - 1 ? t.lineSegments[0][B - 1] : f[v + 1].lineSegments[0][0] : t.lineSegments[0][B + 1]; k = [k.x - c.x, k.y - c.y, k.z - c.z]; e.normalize(k); v === f.length - 1 && B === q -
                        1 && e.scale(k, -1); var C = e.cross(k, r, []); e.normalize(C); e.scale(C, l / 2); C = new n(C, k, 2 * Math.PI / p); k = 0; for (var D = p; k < D; k++) { var G = C.rotate(); k === h.floor(p / 4) && (r = [G[0], G[1], G[2]]); A.normalData.push(G[0], G[1], G[2]); A.positionData.push(c.x + G[0], c.y + G[1], c.z + G[2]) } x && (k = c.distance3D(x), k < w && (w = k, f[v].pPoint = c))
                }
            } r = 0; for (t = this.partitions.length; r < t; r++) {
                A = this.partitions[r]; v = 0; for (u = A.count - 1; v < u; v++) {
                    w = v * q * p; B = 0; for (x = q; B < x; B++) {
                        c = w + B * p; for (k = 0; k < p; k++)C = c + k, A.indexData.push(C), A.indexData.push(C + p), A.indexData.push(C +
                            p + 1), A.indexData.push(C), A.indexData.push(C + p + 1), A.indexData.push(C + 1)
                    }
                }
            } this.storeData(this.partitions[0].positionData, this.partitions[0].normalData, this.partitions[0].indexData); p = [new o.Point(2, 0)]; for (v = 0; 60 > v; v++)q = v / 60 * h.PI, p.push(new o.Point(2 * h.cos(q), -2 * h.sin(q))); p.push(new o.Point(-2, 0), new o.Point(-2, 4), new o.Point(2, 4)); var E = new o.d3.Shape(p, 1); this.render = function (c, n) {
                this.bindBuffers(c); c.material.setDiffuseColor(n.macro_colorByChain ? this.chainColor : n.nucleics_tubeColor); c.drawElements(c.TRIANGLES,
                    this.vertexIndexBuffer.numItems, c.UNSIGNED_SHORT, 0); if (this.partitions) for (var k = 1, p = this.partitions.length; k < p; k++) { var q = this.partitions[k]; d(c, q); c.drawElements(c.TRIANGLES, q.vertexIndexBuffer.numItems, c.UNSIGNED_SHORT, 0) } c.sphereBuffer.bindBuffers(c); for (k = 0; 2 > k; k++)q = this.ends[k], q = g.translate(c.modelViewMatrix, [q.x, q.y, q.z], []), p = l / 2, g.scale(q, [p, p, p]), c.setMatrixUniforms(q), c.drawElements(c.TRIANGLES, c.sphereBuffer.vertexIndexBuffer.numItems, c.UNSIGNED_SHORT, 0); c.cylinderBuffer.bindBuffers(c);
                k = 0; for (p = f.length - 1; k < p; k++) { var r = f[k], v = r.pPoint, t = new o.Atom("", r.cp2.x, r.cp2.y, r.cp2.z), q = 1.001 * v.distance3D(t), r = [l / 4, q, l / 4], q = g.translate(c.modelViewMatrix, [v.x, v.y, v.z], []), u = [0, 1, 0], A = 0, w = [t.x - v.x, t.y - v.y, t.z - v.z]; v.x === t.x && v.z === t.z ? (u = [0, 0, 1], v.y < v.y && (A = h.PI)) : (A = b.vec3AngleFrom(u, w), u = e.cross(u, w, [])); 0 !== A && g.rotate(q, A, u); g.scale(q, r); c.setMatrixUniforms(q); c.drawArrays(c.TRIANGLE_STRIP, 0, c.cylinderBuffer.vertexPositionBuffer.numItems) } E.bindBuffers(c); "none" === n.nucleics_residueColor &&
                    !n.macro_colorByChain && c.material.setDiffuseColor(n.nucleics_baseColor); k = 0; for (p = f.length - 1; k < p; k++)r = f[k], t = r.cp2, q = g.translate(c.modelViewMatrix, [t.x, t.y, t.z], []), u = [0, 1, 0], A = 0, v = r.cp3, w = [v.x - t.x, v.y - t.y, v.z - t.z], t.x === v.x && t.z === v.z ? (u = [0, 0, 1], t.y < t.y && (A = h.PI)) : (A = b.vec3AngleFrom(u, w), u = e.cross(u, w, [])), 0 !== A && g.rotate(q, A, u), t = [1, 0, 0], A = g.rotate(g.identity([]), A, u), g.multiplyVec3(A, t), A = r.cp4, v = r.cp5, A.y === v.y && A.z === v.z || (A = [v.x - A.x, v.y - A.y, v.z - A.z], v = b.vec3AngleFrom(t, A), 0 > e.dot(w, e.cross(t,
                        A)) && (v *= -1), g.rotateY(q, v)), n.macro_colorByChain || ("shapely" === n.nucleics_residueColor ? j[r.name] ? c.material.setDiffuseColor(j[r.name].shapelyColor) : c.material.setDiffuseColor(j["*"].shapelyColor) : "rainbow" === n.nucleics_residueColor && c.material.setDiffuseColor(a.rainbowAt(k, p, n.macro_rainbowColors))), c.setMatrixUniforms(q), c.drawElements(c.TRIANGLES, E.vertexIndexBuffer.numItems, c.UNSIGNED_SHORT, 0)
            }
    }; l.Tube.prototype = new l._Mesh; l.CatmullTube = function (a, d, b, g) {
        var j = []; a.push(a[a.length - 1]); for (var l =
            0, v = a.length - 2; l <= v; l++) { for (var u = a[0 == l ? 0 : l - 1], t = a[l + 0], w = a[l + 1], x = a[l == v ? l + 1 : l + 2], B = [], c = 0; c < g; c++) { var k = c / g; l == v && (k = c / (g - 1)); k = new o.Atom("C", 0.5 * (2 * t.x + (w.x - u.x) * k + (2 * u.x - 5 * t.x + 4 * w.x - x.x) * k * k + (3 * t.x - u.x - 3 * w.x + x.x) * k * k * k), 0.5 * (2 * t.y + (w.y - u.y) * k + (2 * u.y - 5 * t.y + 4 * w.y - x.y) * k * k + (3 * t.y - u.y - 3 * w.y + x.y) * k * k * k), 0.5 * (2 * t.z + (w.z - u.z) * k + (2 * u.z - 5 * t.z + 4 * w.z - x.z) * k * k + (3 * t.z - u.z - 3 * w.z + x.z) * k * k * k)); B.push(k) } j.push(B) } a = j[0].length; this.partitions = []; var C; this.ends = []; this.ends.push(j[0][0]); this.ends.push(j[j.length -
                1][0]); u = [1, 0, 0]; l = 0; for (v = j.length; l < v; l++) {
                    if (!C || 65E3 < C.positionData.length) 0 < this.partitions.length && l--, C = { count: 0, positionData: [], normalData: [], indexData: [] }, this.partitions.push(C); t = j[l]; C.count++; for (c = 0; c < a; c++) {
                        w = t[c]; g = c === a - 1 ? l === j.length - 1 ? t[c - 1] : j[l + 1][0] : t[c + 1]; g = [g.x - w.x, g.y - w.y, g.z - w.z]; e.normalize(g); l === j.length - 1 && c === a - 1 && e.scale(g, -1); x = e.cross(g, u, []); e.normalize(x); e.scale(x, d / 2); x = new n(x, g, 2 * Math.PI / b); g = 0; for (B = b; g < B; g++)k = x.rotate(), g === h.floor(b / 4) && (u = [k[0], k[1], k[2]]),
                            C.normalData.push(k[0], k[1], k[2]), C.positionData.push(w.x + k[0], w.y + k[1], w.z + k[2])
                    }
                } d = 0; for (j = this.partitions.length; d < j; d++) { C = this.partitions[d]; l = 0; for (v = C.count - 1; l < v; l++) { u = l * a * b; c = 0; for (t = a; c < t; c++) { w = u + c * b; for (g = 0; g <= b; g++)x = w + g % b, C.indexData.push(x, x + b) } } } this.storeData(this.partitions[0].positionData, this.partitions[0].normalData, this.partitions[0].indexData)
    }; (l.CatmullTube.prototype = new l._Mesh).render = function (a, b) {
        this.bindBuffers(a); for (var e = 0, h = this.partitions.length; e < h; e++) {
            var j =
                this.partitions[e]; d(a, j); a.drawElements(a.TRIANGLE_STRIP, j.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0)
        } a.sphereBuffer.bindBuffers(a); for (e = 0; 2 > e; e++)j = this.ends[e], h = g.translate(a.modelViewMatrix, [j.x, j.y, j.z], []), j = b.proteins_tubeThickness / 2, g.scale(h, [j, j, j]), a.setMatrixUniforms(h), a.drawElements(a.TRIANGLES, a.sphereBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0)
    }
})(ChemDoodle.extensions, ChemDoodle.RESIDUE, ChemDoodle.structures, ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3,
    ChemDoodle.math);
(function (b) {
    b.UnitCell = function (b) { this.unitCell = b; var o = [], l = [], h = function (b, a, d, g) { o.push(b[0], b[1], b[2]); o.push(a[0], a[1], a[2]); o.push(d[0], d[1], d[2]); o.push(g[0], g[1], g[2]); for (b = 0; 4 > b; b++)l.push(0, 0, 0) }; h(b.o, b.x, b.xy, b.y); h(b.o, b.y, b.yz, b.z); h(b.o, b.z, b.xz, b.x); h(b.yz, b.y, b.xy, b.xyz); h(b.xyz, b.xz, b.z, b.yz); h(b.xy, b.x, b.xz, b.xyz); b = []; for (h = 0; 6 > h; h++) { var g = 4 * h; b.push(g, g + 1, g + 1, g + 2, g + 2, g + 3, g + 3, g) } this.storeData(o, l, b) }; (b.UnitCell.prototype = new b._Mesh).render = function (b, o) {
        b.setMatrixUniforms(b.modelViewMatrix); this.bindBuffers(b);
        b.material.setDiffuseColor(o.shapes_color); b.lineWidth(o.shapes_lineWidth); b.drawElements(b.LINES, this.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0)
    }
})(ChemDoodle.structures.d3, ChemDoodle.lib.vec3);
(function (b, j, o) {
    b.Plate = function (b) { this.lanes = Array(b); i = 0; for (ii = b; i < ii; i++)this.lanes[i] = [] }; var l = b.Plate.prototype; l.sort = function () { i = 0; for (ii = this.lanes.length; i < ii; i++)this.lanes[i].sort(function (b, g) { return b - g }) }; l.draw = function (b) {
        var g = b.canvas.width, e = b.canvas.height; this.origin = 9 * e / 10; this.front = e / 10; this.laneLength = this.origin - this.front; b.strokeStyle = "#000000"; b.beginPath(); b.moveTo(0, this.front); j.contextHashTo(b, 0, this.front, g, this.front, 3, 3); b.closePath(); b.stroke(); b.beginPath();
        b.moveTo(0, this.origin); b.lineTo(g, this.origin); b.closePath(); b.stroke(); i = 0; for (ii = this.lanes.length; i < ii; i++) {
            e = (i + 1) * g / (ii + 1); b.beginPath(); b.moveTo(e, this.origin); b.lineTo(e, this.origin + 3); b.closePath(); b.stroke(); s = 0; for (ss = this.lanes[i].length; s < ss; s++) {
                var a = this.origin - this.laneLength * this.lanes[i][s].rf; switch (this.lanes[i][s].type) {
                    case "compact": b.beginPath(); b.arc(e, a, 3, 0, 2 * o.PI, !1); b.closePath(); break; case "expanded": b.beginPath(); b.arc(e, a, 7, 0, 2 * o.PI, !1); b.closePath(); break; case "widened": j.contextOval(b,
                        e - 18, a - 10, 36, 10); break; case "cresent": b.beginPath(), b.arc(e, a, 9, 0, o.PI, !0), b.closePath()
                }switch (this.lanes[i][s].style) { case "solid": b.fillStyle = "#000000"; b.fill(); break; case "transparent": b.stroke() }
            }
        }
    }; b.Plate.Spot = function (b, g, e) { this.type = b; this.rf = g; this.style = e ? e : "solid" }
})(ChemDoodle.structures, ChemDoodle.extensions, Math);
(function (b, j, o) {
    b.default_backgroundColor = "#FFFFFF"; b.default_scale = 1; b.default_rotateAngle = 0; b.default_bondLength_2D = 20; b.default_angstromsPerBondLength = 1.25; b.default_lightDirection_3D = [-0.1, -0.1, -1]; b.default_lightDiffuseColor_3D = "#FFFFFF"; b.default_lightSpecularColor_3D = "#FFFFFF"; b.default_projectionPerspective_3D = !0; b.default_projectionPerspectiveVerticalFieldOfView_3D = 45; b.default_projectionOrthoWidth_3D = 40; b.default_projectionWidthHeightRatio_3D = void 0; b.default_projectionFrontCulling_3D =
        0.1; b.default_projectionBackCulling_3D = 1E4; b.default_cullBackFace_3D = !0; b.default_fog_mode_3D = 0; b.default_fog_color_3D = "#000000"; b.default_fog_start_3D = 0; b.default_fog_end_3D = 1; b.default_fog_density_3D = 1; b.default_atoms_display = !0; b.default_atoms_color = "#000000"; b.default_atoms_font_size_2D = 12; b.default_atoms_font_families_2D = ["Helvetica", "Arial", "Dialog"]; b.default_atoms_font_bold_2D = !1; b.default_atoms_font_italic_2D = !1; b.default_atoms_circles_2D = !1; b.default_atoms_circleDiameter_2D = 10; b.default_atoms_circleBorderWidth_2D =
            1; b.default_atoms_lonePairDistance_2D = 8; b.default_atoms_lonePairSpread_2D = 4; b.default_atoms_lonePairDiameter_2D = 1; b.default_atoms_useJMOLColors = !1; b.default_atoms_usePYMOLColors = !1; b.default_atoms_resolution_3D = 60; b.default_atoms_sphereDiameter_3D = 0.8; b.default_atoms_useVDWDiameters_3D = !1; b.default_atoms_vdwMultiplier_3D = 1; b.default_atoms_materialAmbientColor_3D = "#000000"; b.default_atoms_materialSpecularColor_3D = "#555555"; b.default_atoms_materialShininess_3D = 32; b.default_atoms_implicitHydrogens_2D =
                !0; b.default_atoms_displayTerminalCarbonLabels_2D = !1; b.default_atoms_showHiddenCarbons_2D = !0; b.default_atoms_showAttributedCarbons_2D = !0; b.default_atoms_displayAllCarbonLabels_2D = !1; b.default_atoms_nonBondedAsStars_3D = !1; b.default_atoms_displayLabels_3D = !1; b.default_atoms_HBlack_2D = !0; b.default_bonds_display = !0; b.default_bonds_color = "#000000"; b.default_bonds_width_2D = 1; b.default_bonds_saturationWidth_2D = 0.2; b.default_bonds_ends_2D = "round"; b.default_bonds_useJMOLColors = !1; b.default_bonds_usePYMOLColors =
                    !1; b.default_bonds_colorGradient = !1; b.default_bonds_saturationAngle_2D = o.PI / 3; b.default_bonds_symmetrical_2D = !1; b.default_bonds_clearOverlaps_2D = !1; b.default_bonds_overlapClearWidth_2D = 0.5; b.default_bonds_atomLabelBuffer_2D = 1; b.default_bonds_wedgeThickness_2D = 0.22; b.default_bonds_hashWidth_2D = 1; b.default_bonds_hashSpacing_2D = 2.5; b.default_bonds_dotSize_2D = 2; b.default_bonds_lewisStyle_2D = !1; b.default_bonds_showBondOrders_3D = !1; b.default_bonds_resolution_3D = 60; b.default_bonds_renderAsLines_3D = !1; b.default_bonds_cylinderDiameter_3D =
                        0.3; b.default_bonds_pillLatitudeResolution_3D = 10; b.default_bonds_pillLongitudeResolution_3D = 20; b.default_bonds_pillHeight_3D = 0.3; b.default_bonds_pillSpacing_3D = 0.1; b.default_bonds_pillDiameter_3D = 0.3; b.default_bonds_materialAmbientColor_3D = "#222222"; b.default_bonds_materialSpecularColor_3D = "#555555"; b.default_bonds_materialShininess_3D = 32; b.default_proteins_displayRibbon = !0; b.default_proteins_displayBackbone = !1; b.default_proteins_backboneThickness = 1.5; b.default_proteins_backboneColor = "#CCCCCC"; b.default_proteins_ribbonCartoonize =
                            !1; b.default_proteins_displayPipePlank = !1; b.default_proteins_residueColor = "none"; b.default_proteins_primaryColor = "#FF0D0D"; b.default_proteins_secondaryColor = "#FFFF30"; b.default_proteins_ribbonCartoonHelixPrimaryColor = "#00E740"; b.default_proteins_ribbonCartoonHelixSecondaryColor = "#9905FF"; b.default_proteins_ribbonCartoonSheetColor = "#E8BB99"; b.default_proteins_tubeColor = "#FF0D0D"; b.default_proteins_tubeResolution_3D = 30; b.default_proteins_ribbonThickness = 0.2; b.default_proteins_tubeThickness = 0.5; b.default_proteins_plankSheetWidth =
                                3.5; b.default_proteins_cylinderHelixDiameter = 4; b.default_proteins_verticalResolution = 10; b.default_proteins_horizontalResolution = 9; b.default_proteins_materialAmbientColor_3D = "#222222"; b.default_proteins_materialSpecularColor_3D = "#555555"; b.default_proteins_materialShininess_3D = 32; b.default_nucleics_display = !0; b.default_nucleics_tubeColor = "#CCCCCC"; b.default_nucleics_baseColor = "#C10000"; b.default_nucleics_residueColor = "none"; b.default_nucleics_tubeThickness = 1.5; b.default_nucleics_tubeResolution_3D =
                                    60; b.default_nucleics_verticalResolution = 10; b.default_nucleics_materialAmbientColor_3D = "#222222"; b.default_nucleics_materialSpecularColor_3D = "#555555"; b.default_nucleics_materialShininess_3D = 32; b.default_macro_displayAtoms = !1; b.default_macro_displayBonds = !1; b.default_macro_atomToLigandDistance = -1; b.default_macro_showWater = !1; b.default_macro_colorByChain = !1; b.default_macro_rainbowColors = ["#0000FF", "#00FFFF", "#00FF00", "#FFFF00", "#FF0000"]; b.default_surfaces_display = !0; b.default_surfaces_style = "Dot";
    b.default_surfaces_color = "#E9B862"; b.default_surfaces_materialAmbientColor_3D = "#000000"; b.default_surfaces_materialSpecularColor_3D = "#000000"; b.default_surfaces_materialShininess_3D = 32; b.default_plots_color = "#000000"; b.default_plots_width = 1; b.default_plots_showIntegration = !1; b.default_plots_integrationColor = "#c10000"; b.default_plots_integrationLineWidth = 1; b.default_plots_showGrid = !1; b.default_plots_gridColor = "gray"; b.default_plots_gridLineWidth = 0.5; b.default_plots_showYAxis = !0; b.default_plots_flipXAxis =
        !1; b.default_text_font_size = 12; b.default_text_font_families = ["Helvetica", "Arial", "Dialog"]; b.default_text_font_bold = !0; b.default_text_font_italic = !1; b.default_text_font_stroke_3D = !0; b.default_text_color = "#000000"; b.default_shapes_color = "#000000"; b.default_shapes_lineWidth = 1; b.default_shapes_arrowLength_2D = 8; b.default_compass_display = !1; b.default_compass_axisXColor_3D = "#FF0000"; b.default_compass_axisYColor_3D = "#00FF00"; b.default_compass_axisZColor_3D = "#0000FF"; b.default_compass_size_3D = 50; b.default_compass_resolution_3D =
            10; b.default_compass_displayText_3D = !0; b.default_compass_type_3D = 0; b.default_measurement_update_3D = !1; b.default_measurement_angleBands_3D = 10; b.default_measurement_displayText_3D = !0; j.VisualSpecifications = function () {
                this.backgroundColor = b.default_backgroundColor; this.scale = b.default_scale; this.rotateAngle = b.default_rotateAngle; this.bondLength_2D = b.default_bondLength_2D; this.angstromsPerBondLength = b.default_angstromsPerBondLength; this.lightDirection_3D = b.default_lightDirection_3D.slice(0); this.lightDiffuseColor_3D =
                    b.default_lightDiffuseColor_3D; this.lightSpecularColor_3D = b.default_lightSpecularColor_3D; this.projectionPerspective_3D = b.default_projectionPerspective_3D; this.projectionPerspectiveVerticalFieldOfView_3D = b.default_projectionPerspectiveVerticalFieldOfView_3D; this.projectionOrthoWidth_3D = b.default_projectionOrthoWidth_3D; this.projectionWidthHeightRatio_3D = b.default_projectionWidthHeightRatio_3D; this.projectionFrontCulling_3D = b.default_projectionFrontCulling_3D; this.projectionBackCulling_3D = b.default_projectionBackCulling_3D;
                this.cullBackFace_3D = b.default_cullBackFace_3D; this.fog_mode_3D = b.default_fog_mode_3D; this.fog_color_3D = b.default_fog_color_3D; this.fog_start_3D = b.default_fog_start_3D; this.fog_end_3D = b.default_fog_end_3D; this.fog_density_3D = b.default_fog_density_3D; this.atoms_display = b.default_atoms_display; this.atoms_color = b.default_atoms_color; this.atoms_font_size_2D = b.default_atoms_font_size_2D; this.atoms_font_families_2D = b.default_atoms_font_families_2D.slice(0); this.atoms_font_bold_2D = b.default_atoms_font_bold_2D;
                this.atoms_font_italic_2D = b.default_atoms_font_italic_2D; this.atoms_circles_2D = b.default_atoms_circles_2D; this.atoms_circleDiameter_2D = b.default_atoms_circleDiameter_2D; this.atoms_circleBorderWidth_2D = b.default_atoms_circleBorderWidth_2D; this.atoms_lonePairDistance_2D = b.default_atoms_lonePairDistance_2D; this.atoms_lonePairSpread_2D = b.default_atoms_lonePairSpread_2D; this.atoms_lonePairDiameter_2D = b.default_atoms_lonePairDiameter_2D; this.atoms_useJMOLColors = b.default_atoms_useJMOLColors; this.atoms_usePYMOLColors =
                    b.default_atoms_usePYMOLColors; this.atoms_resolution_3D = b.default_atoms_resolution_3D; this.atoms_sphereDiameter_3D = b.default_atoms_sphereDiameter_3D; this.atoms_useVDWDiameters_3D = b.default_atoms_useVDWDiameters_3D; this.atoms_vdwMultiplier_3D = b.default_atoms_vdwMultiplier_3D; this.atoms_materialAmbientColor_3D = b.default_atoms_materialAmbientColor_3D; this.atoms_materialSpecularColor_3D = b.default_atoms_materialSpecularColor_3D; this.atoms_materialShininess_3D = b.default_atoms_materialShininess_3D; this.atoms_implicitHydrogens_2D =
                        b.default_atoms_implicitHydrogens_2D; this.atoms_displayTerminalCarbonLabels_2D = b.default_atoms_displayTerminalCarbonLabels_2D; this.atoms_showHiddenCarbons_2D = b.default_atoms_showHiddenCarbons_2D; this.atoms_showAttributedCarbons_2D = b.default_atoms_showAttributedCarbons_2D; this.atoms_displayAllCarbonLabels_2D = b.default_atoms_displayAllCarbonLabels_2D; this.atoms_nonBondedAsStars_3D = b.default_atoms_nonBondedAsStars_3D; this.atoms_displayLabels_3D = b.default_atoms_displayLabels_3D; this.atoms_HBlack_2D = b.default_atoms_HBlack_2D;
                this.bonds_display = b.default_bonds_display; this.bonds_color = b.default_bonds_color; this.bonds_width_2D = b.default_bonds_width_2D; this.bonds_saturationWidth_2D = b.default_bonds_saturationWidth_2D; this.bonds_ends_2D = b.default_bonds_ends_2D; this.bonds_useJMOLColors = b.default_bonds_useJMOLColors; this.bonds_usePYMOLColors = b.default_bonds_usePYMOLColors; this.bonds_colorGradient = b.default_bonds_colorGradient; this.bonds_saturationAngle_2D = b.default_bonds_saturationAngle_2D; this.bonds_symmetrical_2D = b.default_bonds_symmetrical_2D;
                this.bonds_clearOverlaps_2D = b.default_bonds_clearOverlaps_2D; this.bonds_overlapClearWidth_2D = b.default_bonds_overlapClearWidth_2D; this.bonds_atomLabelBuffer_2D = b.default_bonds_atomLabelBuffer_2D; this.bonds_wedgeThickness_2D = b.default_bonds_wedgeThickness_2D; this.bonds_hashWidth_2D = b.default_bonds_hashWidth_2D; this.bonds_hashSpacing_2D = b.default_bonds_hashSpacing_2D; this.bonds_dotSize_2D = b.default_bonds_dotSize_2D; this.bonds_lewisStyle_2D = b.default_bonds_lewisStyle_2D; this.bonds_showBondOrders_3D =
                    b.default_bonds_showBondOrders_3D; this.bonds_resolution_3D = b.default_bonds_resolution_3D; this.bonds_renderAsLines_3D = b.default_bonds_renderAsLines_3D; this.bonds_cylinderDiameter_3D = b.default_bonds_cylinderDiameter_3D; this.bonds_pillHeight_3D = b.default_bonds_pillHeight_3D; this.bonds_pillLatitudeResolution_3D = b.default_bonds_pillLatitudeResolution_3D; this.bonds_pillLongitudeResolution_3D = b.default_bonds_pillLongitudeResolution_3D; this.bonds_pillSpacing_3D = b.default_bonds_pillSpacing_3D; this.bonds_pillDiameter_3D =
                        b.default_bonds_pillDiameter_3D; this.bonds_materialAmbientColor_3D = b.default_bonds_materialAmbientColor_3D; this.bonds_materialSpecularColor_3D = b.default_bonds_materialSpecularColor_3D; this.bonds_materialShininess_3D = b.default_bonds_materialShininess_3D; this.proteins_displayRibbon = b.default_proteins_displayRibbon; this.proteins_displayBackbone = b.default_proteins_displayBackbone; this.proteins_backboneThickness = b.default_proteins_backboneThickness; this.proteins_backboneColor = b.default_proteins_backboneColor;
                this.proteins_ribbonCartoonize = b.default_proteins_ribbonCartoonize; this.proteins_residueColor = b.default_proteins_residueColor; this.proteins_primaryColor = b.default_proteins_primaryColor; this.proteins_secondaryColor = b.default_proteins_secondaryColor; this.proteins_ribbonCartoonHelixPrimaryColor = b.default_proteins_ribbonCartoonHelixPrimaryColor; this.proteins_ribbonCartoonHelixSecondaryColor = b.default_proteins_ribbonCartoonHelixSecondaryColor; this.proteins_tubeColor = b.default_proteins_tubeColor; this.proteins_tubeResolution_3D =
                    b.default_proteins_tubeResolution_3D; this.proteins_displayPipePlank = b.default_proteins_displayPipePlank; this.proteins_ribbonCartoonSheetColor = b.default_proteins_ribbonCartoonSheetColor; this.proteins_ribbonThickness = b.default_proteins_ribbonThickness; this.proteins_tubeThickness = b.default_proteins_tubeThickness; this.proteins_plankSheetWidth = b.default_proteins_plankSheetWidth; this.proteins_cylinderHelixDiameter = b.default_proteins_cylinderHelixDiameter; this.proteins_verticalResolution = b.default_proteins_verticalResolution;
                this.proteins_horizontalResolution = b.default_proteins_horizontalResolution; this.proteins_materialAmbientColor_3D = b.default_proteins_materialAmbientColor_3D; this.proteins_materialSpecularColor_3D = b.default_proteins_materialSpecularColor_3D; this.proteins_materialShininess_3D = b.default_proteins_materialShininess_3D; this.macro_displayAtoms = b.default_macro_displayAtoms; this.macro_displayBonds = b.default_macro_displayBonds; this.macro_atomToLigandDistance = b.default_macro_atomToLigandDistance; this.nucleics_display =
                    b.default_nucleics_display; this.nucleics_tubeColor = b.default_nucleics_tubeColor; this.nucleics_baseColor = b.default_nucleics_baseColor; this.nucleics_residueColor = b.default_nucleics_residueColor; this.nucleics_tubeThickness = b.default_nucleics_tubeThickness; this.nucleics_tubeResolution_3D = b.default_nucleics_tubeResolution_3D; this.nucleics_verticalResolution = b.default_nucleics_verticalResolution; this.nucleics_materialAmbientColor_3D = b.default_nucleics_materialAmbientColor_3D; this.nucleics_materialSpecularColor_3D =
                        b.default_nucleics_materialSpecularColor_3D; this.nucleics_materialShininess_3D = b.default_nucleics_materialShininess_3D; this.macro_showWater = b.default_macro_showWater; this.macro_colorByChain = b.default_macro_colorByChain; this.macro_rainbowColors = b.default_macro_rainbowColors.slice(0); this.surfaces_display = b.default_surfaces_display; this.surfaces_style = b.default_surfaces_style; this.surfaces_color = b.default_surfaces_color; this.surfaces_materialAmbientColor_3D = b.default_surfaces_materialAmbientColor_3D;
                this.surfaces_materialSpecularColor_3D = b.default_surfaces_materialSpecularColor_3D; this.surfaces_materialShininess_3D = b.default_surfaces_materialShininess_3D; this.plots_color = b.default_plots_color; this.plots_width = b.default_plots_width; this.plots_showIntegration = b.default_plots_showIntegration; this.plots_integrationColor = b.default_plots_integrationColor; this.plots_integrationLineWidth = b.default_plots_integrationLineWidth; this.plots_showGrid = b.default_plots_showGrid; this.plots_gridColor = b.default_plots_gridColor;
                this.plots_gridLineWidth = b.default_plots_gridLineWidth; this.plots_showYAxis = b.default_plots_showYAxis; this.plots_flipXAxis = b.default_plots_flipXAxis; this.text_font_size = b.default_text_font_size; this.text_font_families = b.default_text_font_families.slice(0); this.text_font_bold = b.default_text_font_bold; this.text_font_italic = b.default_text_font_italic; this.text_font_stroke_3D = b.default_text_font_stroke_3D; this.text_color = b.default_text_color; this.shapes_color = b.default_shapes_color; this.shapes_lineWidth =
                    b.default_shapes_lineWidth; this.shapes_arrowLength_2D = b.default_shapes_arrowLength_2D; this.compass_display = b.default_compass_display; this.compass_axisXColor_3D = b.default_compass_axisXColor_3D; this.compass_axisYColor_3D = b.default_compass_axisYColor_3D; this.compass_axisZColor_3D = b.default_compass_axisZColor_3D; this.compass_size_3D = b.default_compass_size_3D; this.compass_resolution_3D = b.default_compass_resolution_3D; this.compass_displayText_3D = b.default_compass_displayText_3D; this.compass_type_3D = b.default_compass_type_3D;
                this.measurement_update_3D = b.default_measurement_update_3D; this.measurement_angleBands_3D = b.default_measurement_angleBands_3D; this.measurement_displayText_3D = b.default_measurement_displayText_3D
            }; j.VisualSpecifications.prototype.set3DRepresentation = function (j) {
                this.bonds_display = this.atoms_display = !0; this.bonds_color = "#777777"; this.bonds_showBondOrders_3D = this.bonds_useJMOLColors = this.atoms_useJMOLColors = this.atoms_useVDWDiameters_3D = !0; this.bonds_renderAsLines_3D = !1; "Ball and Stick" === j ? (this.atoms_vdwMultiplier_3D =
                    0.3, this.bonds_useJMOLColors = !1, this.bonds_cylinderDiameter_3D = 0.3, this.bonds_materialAmbientColor_3D = b.default_atoms_materialAmbientColor_3D, this.bonds_pillDiameter_3D = 0.15) : "van der Waals Spheres" === j ? (this.bonds_display = !1, this.atoms_vdwMultiplier_3D = 1) : "Stick" === j ? (this.bonds_showBondOrders_3D = this.atoms_useVDWDiameters_3D = !1, this.bonds_cylinderDiameter_3D = this.atoms_sphereDiameter_3D = 0.8, this.bonds_materialAmbientColor_3D = this.atoms_materialAmbientColor_3D) : "Wireframe" === j ? (this.atoms_useVDWDiameters_3D =
                        !1, this.bonds_cylinderDiameter_3D = this.bonds_pillDiameter_3D = 0.05, this.atoms_sphereDiameter_3D = 0.15, this.bonds_materialAmbientColor_3D = b.default_atoms_materialAmbientColor_3D) : "Line" === j ? (this.atoms_display = !1, this.bonds_renderAsLines_3D = !0, this.bonds_width_2D = 1, this.bonds_cylinderDiameter_3D = 0.05) : alert('"' + j + '" is not recognized. Use one of the following strings:\n\n1. Ball and Stick\n2. van der Waals Spheres\n3. Stick\n4. Wireframe\n5. Line\n')
            }
})(ChemDoodle, ChemDoodle.structures, Math);
(function (b, j, o, l) { o.getPointsPerAngstrom = function () { return b.default_bondLength_2D / b.default_angstromsPerBondLength }; o.BondDeducer = function () { }; var h = o.BondDeducer.prototype; h.margin = 1.1; h.deduceCovalentBonds = function (b, e) { var a = o.getPointsPerAngstrom(); e && (a = e); for (var d = 0, h = b.atoms.length; d < h; d++)for (var f = d + 1; f < h; f++) { var y = b.atoms[d], p = b.atoms[f]; y.distance3D(p) < (j[y.label].covalentRadius + j[p.label].covalentRadius) * a * this.margin && b.bonds.push(new l.Bond(y, p, 1)) } } })(ChemDoodle, ChemDoodle.ELEMENT,
    ChemDoodle.informatics, ChemDoodle.structures);
(function (b, j) { b.HydrogenDeducer = function () { }; b.HydrogenDeducer.prototype.removeHydrogens = function (b, l) { for (var h = [], g = [], e = 0, a = b.bonds.length; e < a; e++) { var d = b.bonds[e], n = "H" !== d.a1.label && "H" !== d.a2.label; !n && (!l && d.stereo !== j.Bond.STEREO_NONE) && (n = !0); n ? (d.a1.tag = !0, g.push(d)) : ("H" === d.a1.label && (d.a1.remove = !0), "H" === d.a2.label && (d.a2.remove = !0)) } e = 0; for (a = b.atoms.length; e < a; e++)d = b.atoms[e], d.remove ? d.remove = void 0 : h.push(d); b.atoms = h; b.bonds = g } })(ChemDoodle.informatics, ChemDoodle.structures);
(function (b, j, o) { j.MolecularSurfaceGenerator = function () { }; j.MolecularSurfaceGenerator.prototype.generateSurface = function (b, h, g, e, a) { return new o.MolecularSurface(b, h, g, e, a) } })(ChemDoodle, ChemDoodle.informatics, ChemDoodle.structures.d3);
(function (b, j) {
    b.Splitter = function () { }; b.Splitter.prototype.split = function (b) {
        for (var l = [], h = 0, g = b.atoms.length; h < g; h++)b.atoms[h].visited = !1; h = 0; for (g = b.bonds.length; h < g; h++)b.bonds[h].visited = !1; h = 0; for (g = b.atoms.length; h < g; h++) {
            var e = b.atoms[h]; if (!e.visited) {
                var a = new j.Molecule; a.atoms.push(e); e.visited = !0; var d = new j.Queue; for (d.enqueue(e); !d.isEmpty();)for (var e = d.dequeue(), n = 0, f = b.bonds.length; n < f; n++) {
                    var y = b.bonds[n]; y.contains(e) && !y.visited && (y.visited = !0, a.bonds.push(y), y = y.getNeighbor(e),
                        y.visited || (y.visited = !0, a.atoms.push(y), d.enqueue(y)))
                } l.push(a)
            }
        } return l
    }
})(ChemDoodle.informatics, ChemDoodle.structures); (function (b, j) { b.StructureBuilder = function () { }; b.StructureBuilder.prototype.copy = function (b) { var l = new j.JSONInterpreter; return l.molFrom(l.molTo(b)) } })(ChemDoodle.informatics, ChemDoodle.io, ChemDoodle.structures);
(function (b) { b._Counter = function () { }; b = b._Counter.prototype; b.value = 0; b.molecule = void 0; b.setMolecule = function (b) { this.value = 0; this.molecule = b; this.innerCalculate && this.innerCalculate() } })(ChemDoodle.informatics); (function (b) { b.FrerejacqueNumberCounter = function (b) { this.setMolecule(b) }; (b.FrerejacqueNumberCounter.prototype = new b._Counter).innerCalculate = function () { this.value = this.molecule.bonds.length - this.molecule.atoms.length + (new b.NumberOfMoleculesCounter(this.molecule)).value } })(ChemDoodle.informatics);
(function (b, j) {
    j.NumberOfMoleculesCounter = function (b) { this.setMolecule(b) }; (j.NumberOfMoleculesCounter.prototype = new j._Counter).innerCalculate = function () {
        for (var j = 0, l = this.molecule.atoms.length; j < l; j++)this.molecule.atoms[j].visited = !1; j = 0; for (l = this.molecule.atoms.length; j < l; j++)if (!this.molecule.atoms[j].visited) {
            this.value++; var h = new b.Queue; this.molecule.atoms[j].visited = !0; for (h.enqueue(this.molecule.atoms[j]); !h.isEmpty();)for (var g = h.dequeue(), e = 0, a = this.molecule.bonds.length; e < a; e++) {
                var d =
                    this.molecule.bonds[e]; d.contains(g) && (d = d.getNeighbor(g), d.visited || (d.visited = !0, h.enqueue(d)))
            }
        }
    }
})(ChemDoodle.structures, ChemDoodle.informatics);
(function (b) {
    b._RingFinder = function () { }; b = b._RingFinder.prototype; b.atoms = void 0; b.bonds = void 0; b.rings = void 0; b.reduce = function (b) {
        for (var o = 0, l = b.atoms.length; o < l; o++)b.atoms[o].visited = !1; o = 0; for (l = b.bonds.length; o < l; o++)b.bonds[o].visited = !1; for (var h = !0; h;) { h = !1; o = 0; for (l = b.atoms.length; o < l; o++) { for (var g = 0, e, a = 0, d = b.bonds.length; a < d; a++)if (b.bonds[a].contains(b.atoms[o]) && !b.bonds[a].visited) { g++; if (2 === g) break; e = b.bonds[a] } 1 === g && (h = !0, e.visited = !0, b.atoms[o].visited = !0) } } o = 0; for (l = b.atoms.length; o <
            l; o++)b.atoms[o].visited || this.atoms.push(b.atoms[o]); o = 0; for (l = b.bonds.length; o < l; o++)b.bonds[o].visited || this.bonds.push(b.bonds[o]); 0 === this.bonds.length && 0 !== this.atoms.length && (this.atoms = [])
    }; b.setMolecule = function (b) { this.atoms = []; this.bonds = []; this.rings = []; this.reduce(b); 2 < this.atoms.length && this.innerGetRings && this.innerGetRings() }; b.fuse = function () {
        for (var b = 0, o = this.rings.length; b < o; b++)for (var l = 0, h = this.bonds.length; l < h; l++)-1 !== this.rings[b].atoms.indexOf(this.bonds[l].a1) && -1 !== this.rings[b].atoms.indexOf(this.bonds[l].a2) &&
            this.rings[b].bonds.push(this.bonds[l])
    }
})(ChemDoodle.informatics);
(function (b, j) {
    function o(b, g) { this.atoms = []; if (g) for (var e = 0, a = g.atoms.length; e < a; e++)this.atoms[e] = g.atoms[e]; this.atoms.push(b) } var l = o.prototype; l.grow = function (b, g) { for (var e = this.atoms[this.atoms.length - 1], a = [], d = 0, j = b.length; d < j; d++)if (b[d].contains(e)) { var f = b[d].getNeighbor(e); -1 === g.indexOf(f) && a.push(f) } e = []; d = 0; for (j = a.length; d < j; d++)e.push(new o(a[d], this)); return e }; l.check = function (b, g, e) {
        for (var a = 0, d = g.atoms.length - 1; a < d; a++)if (-1 !== this.atoms.indexOf(g.atoms[a])) return; var n; if (g.atoms[g.atoms.length -
            1] === this.atoms[this.atoms.length - 1]) { n = new j.Ring; n.atoms[0] = e; a = 0; for (d = this.atoms.length; a < d; a++)n.atoms.push(this.atoms[a]); for (a = g.atoms.length - 2; 0 <= a; a--)n.atoms.push(g.atoms[a]) } else {
                for (var f = [], a = 0, d = b.length; a < d; a++)b[a].contains(g.atoms[g.atoms.length - 1]) && f.push(b[a]); a = 0; for (d = f.length; a < d; a++)if ((1 === g.atoms.length || !f[a].contains(g.atoms[g.atoms.length - 2])) && f[a].contains(this.atoms[this.atoms.length - 1])) {
                    n = new j.Ring; n.atoms[0] = e; b = 0; for (e = this.atoms.length; b < e; b++)n.atoms.push(this.atoms[b]);
                    for (b = g.atoms.length - 1; 0 <= b; b--)n.atoms.push(g.atoms[b]); break
                }
        } return n
    }; b.EulerFacetRingFinder = function (b) { this.setMolecule(b) }; l = b.EulerFacetRingFinder.prototype = new b._RingFinder; l.fingerBreak = 5; l.innerGetRings = function () {
        for (var b = 0, g = this.atoms.length; b < g; b++) {
            for (var e = [], a = 0, d = this.bonds.length; a < d; a++)this.bonds[a].contains(this.atoms[b]) && e.push(this.bonds[a].getNeighbor(this.atoms[b])); a = 0; for (d = e.length; a < d; a++)for (var j = a + 1; j < e.length; j++) {
                var f = []; f[0] = new o(e[a]); f[1] = new o(e[j]); var l =
                    []; l[0] = this.atoms[b]; for (var p = 0, q = e.length; p < q; p++)p !== a && p !== j && l.push(e[p]); var A = []; for ((p = f[0].check(this.bonds, f[1], this.atoms[b])) && (A[0] = p); 0 === A.length && 0 < f.length && f[0].atoms.length < this.fingerBreak;) {
                        for (var r = [], p = 0, q = f.length; p < q; p++)for (var v = f[p].grow(this.bonds, l), u = 0, t = v.length; u < t; u++)r.push(v[u]); f = r; p = 0; for (q = f.length; p < q; p++)for (u = p + 1; u < q; u++)(t = f[p].check(this.bonds, f[u], this.atoms[b])) && A.push(t); if (0 === A.length) {
                            r = []; p = 0; for (q = l.length; p < q; p++) {
                                u = 0; for (t = this.bonds.length; u <
                                    t; u++)this.bonds[u].contains(l[p]) && (e = this.bonds[u].getNeighbor(l[p]), -1 === l.indexOf(e) && -1 === r.indexOf(e) && r.push(e))
                            } p = 0; for (q = r.length; p < q; p++)l.push(r[p])
                        }
                    } if (0 < A.length) { f = void 0; p = 0; for (q = A.length; p < q; p++)if (!f || f.atoms.length > A[p].atoms.length) f = A[p]; A = !1; p = 0; for (q = this.rings.length; p < q; p++) { l = !0; u = 0; for (t = f.atoms.length; u < t; u++)if (-1 === this.rings[p].atoms.indexOf(f.atoms[u])) { l = !1; break } if (l) { A = !0; break } } A || this.rings.push(f) }
            }
        } this.fuse()
    }
})(ChemDoodle.informatics, ChemDoodle.structures);
(function (b) {
    b.SSSRFinder = function (j) {
        this.rings = []; if (0 < j.atoms.length) {
            var o = (new b.FrerejacqueNumberCounter(j)).value, l = (new b.EulerFacetRingFinder(j)).rings; l.sort(function (a, b) { return a.atoms.length - b.atoms.length }); for (var h = 0, g = j.bonds.length; h < g; h++)j.bonds[h].visited = !1; h = 0; for (g = l.length; h < g; h++) {
                j = !1; for (var e = 0, a = l[h].bonds.length; e < a; e++)if (!l[h].bonds[e].visited) { j = !0; break } if (j) { e = 0; for (a = l[h].bonds.length; e < a; e++)l[h].bonds[e].visited = !0; this.rings.push(l[h]) } if (this.rings.length ===
                    o) break
            }
        }
    }
})(ChemDoodle.informatics); (function (b) { b._Interpreter = function () { }; b._Interpreter.prototype.fit = function (b, o, l) { for (var h = b.length, g = [], e = 0; e < o - h; e++)g.push(" "); return l ? b + g.join("") : g.join("") + b } })(ChemDoodle.io);
(function (b, j, o, l, h, g, e) {
    var a = /\s+/g, d = /\(|\)|\s+/g, n = /\'|\s+/g, f = /,|\'|\s+/g, y = /^\s+/, p = /[0-9]/g, q = /[0-9]|\+|\-/g, A = function (a) { return 0 !== a.length }, r = { P: [], A: [[0, 0.5, 0.5]], B: [[0.5, 0, 0.5]], C: [[0.5, 0.5, 0]], I: [[0.5, 0.5, 0.5]], R: [[2 / 3, 1 / 3, 1 / 3], [1 / 3, 2 / 3, 2 / 3]], S: [[1 / 3, 1 / 3, 2 / 3], [2 / 3, 2 / 3, 1 / 3]], T: [[1 / 3, 2 / 3, 1 / 3], [2 / 3, 1 / 3, 2 / 3]], F: [[0, 0.5, 0.5], [0.5, 0, 0.5], [0.5, 0.5, 0]] }, v = function (a) {
        var b = 0, d = 0, e = 0, c = 0, f = a.indexOf("x"), g = a.indexOf("y"), h = a.indexOf("z"); -1 !== f && (d++, 0 < f && "+" !== a.charAt(f - 1) && (d *= -1)); -1 !== g &&
            (e++, 0 < g && "+" !== a.charAt(g - 1) && (e *= -1)); -1 !== h && (c++, 0 < h && "+" !== a.charAt(h - 1) && (c *= -1)); if (2 < a.length) { f = "+"; g = 0; for (h = a.length; g < h; g++) { var j = a.charAt(g); if (("-" === j || "/" === j) && (g === a.length - 1 || a.charAt(g + 1).match(p))) f = j; j.match(p) && ("+" === f ? b += parseInt(j) : "-" === f ? b -= parseInt(j) : "/" === f && (b /= parseInt(j))) } } return [b, d, e, c]
    }; o.CIFInterpreter = function () { }; (o.CIFInterpreter.prototype = new o._Interpreter).read = function (p, o, u, B) {
        o = o ? o : 1; u = u ? u : 1; B = B ? B : 1; var c = new l.Molecule; if (!p) return c; for (var k = p.split("\n"),
            C = 0, D = 0, G = 0, E = p = 0, H = 0, I = "P", M, J, T, F, W = !0; 0 < k.length;)if (W ? F = k.shift() : W = !0, 0 < F.length) if (j.stringStartsWith(F, "_cell_length_a")) C = parseFloat(F.split(d)[1]); else if (j.stringStartsWith(F, "_cell_length_b")) D = parseFloat(F.split(d)[1]); else if (j.stringStartsWith(F, "_cell_length_c")) G = parseFloat(F.split(d)[1]); else if (j.stringStartsWith(F, "_cell_angle_alpha")) p = g.PI * parseFloat(F.split(d)[1]) / 180; else if (j.stringStartsWith(F, "_cell_angle_beta")) E = g.PI * parseFloat(F.split(d)[1]) / 180; else if (j.stringStartsWith(F,
                "_cell_angle_gamma")) H = g.PI * parseFloat(F.split(d)[1]) / 180; else if (j.stringStartsWith(F, "_symmetry_space_group_name_H-M")) I = F.split(n)[1]; else if (j.stringStartsWith(F, "loop_")) {
                    for (var R = { fields: [], lines: [] }, O = !1; void 0 !== (F = k.shift()) && !j.stringStartsWith(F = F.replace(y, ""), "loop_") && 0 < F.length;)if (j.stringStartsWith(F, "_")) { if (O) break; R.fields = R.fields.concat(F.split(a).filter(A)) } else O = !0, R.lines.push(F); if (0 !== k.length && (j.stringStartsWith(F, "loop_") || j.stringStartsWith(F, "_"))) W = !1; -1 !== R.fields.indexOf("_symmetry_equiv_pos_as_xyz") ||
                        -1 !== R.fields.indexOf("_space_group_symop_operation_xyz") ? M = R : -1 !== R.fields.indexOf("_atom_site_label") ? J = R : -1 !== R.fields.indexOf("_geom_bond_atom_site_label_1") && (T = R)
                } F = C; p = (g.cos(p) - g.cos(H) * g.cos(E)) / g.sin(H); p = [F, 0, 0, 0, D * g.cos(H), D * g.sin(H), 0, 0, G * g.cos(E), G * p, G * g.sqrt(1 - g.pow(g.cos(E), 2) - p * p), 0, 0, 0, 0, 1]; if (J) {
                    R = W = C = k = G = -1; H = 0; for (E = J.fields.length; H < E; H++)F = J.fields[H], "_atom_site_type_symbol" === F ? G = H : "_atom_site_label" === F ? k = H : "_atom_site_fract_x" === F ? C = H : "_atom_site_fract_y" === F ? W = H : "_atom_site_fract_z" ===
                        F && (R = H); H = 0; for (E = J.lines.length; H < E; H++)F = J.lines[H], D = F.split(a).filter(A), F = new l.Atom(D[-1 === G ? k : G].split(q)[0], parseFloat(D[C]), parseFloat(D[W]), parseFloat(D[R])), c.atoms.push(F), -1 !== k && (F.cifId = D[k], F.cifPart = 0)
                } if (M && !T) {
                    H = D = 0; for (E = M.fields.length; H < E; H++)if (F = M.fields[H], "_symmetry_equiv_pos_as_xyz" === F || "_space_group_symop_operation_xyz" === F) D = H; W = r[I]; k = []; H = 0; for (E = M.lines.length; H < E; H++) {
                        F = M.lines[H].split(f).filter(A); for (var R = v(F[D]), O = v(F[D + 1]), L = v(F[D + 2]), I = 0, C = c.atoms.length; I <
                            C; I++) { F = c.atoms[I]; var Z = F.x * R[1] + F.y * R[2] + F.z * R[3] + R[0], Da = F.x * O[1] + F.y * O[2] + F.z * O[3] + O[0], ka = F.x * L[1] + F.y * L[2] + F.z * L[3] + L[0]; J = new l.Atom(F.label, Z, Da, ka); k.push(J); void 0 !== F.cifId && (J.cifId = F.cifId, J.cifPart = H + 1); if (W) { J = 0; for (G = W.length; J < G; J++) { var $ = W[J], $ = new l.Atom(F.label, Z + $[0], Da + $[1], ka + $[2]); k.push($); void 0 !== F.cifId && ($.cifId = F.cifId, $.cifPart = H + 1) } } }
                    } H = 0; for (E = k.length; H < E; H++) {
                        for (F = k[H]; 1 <= F.x;)F.x--; for (; 0 > F.x;)F.x++; for (; 1 <= F.y;)F.y--; for (; 0 > F.y;)F.y++; for (; 1 <= F.z;)F.z--; for (; 0 >
                            F.z;)F.z++
                    } J = []; H = 0; for (E = k.length; H < E; H++) { G = !1; F = k[H]; I = 0; for (C = c.atoms.length; I < C; I++)if (1E-4 > c.atoms[I].distance3D(F)) { G = !0; break } if (!G) { I = 0; for (C = J.length; I < C; I++)if (1E-4 > J[I].distance3D(F)) { G = !0; break } G || J.push(F) } } c.atoms = c.atoms.concat(J)
                } E = []; for (H = 0; H < o; H++)for (I = 0; I < u; I++)for (J = 0; J < B; J++)if (!(0 === H && 0 === I && 0 === J)) {
                    G = 0; for (D = c.atoms.length; G < D; G++)F = c.atoms[G], k = new l.Atom(F.label, F.x + H, F.y + I, F.z + J), E.push(k), void 0 !== F.cifId && (k.cifId = F.cifId, k.cifPart = F.cifPart + (M ? M.lines.length : 0) + H +
                        10 * I + 100 * J)
                } c.atoms = c.atoms.concat(E); H = 0; for (E = c.atoms.length; H < E; H++)F = c.atoms[H], M = e.multiplyVec3(p, [F.x, F.y, F.z]), F.x = M[0], F.y = M[1], F.z = M[2]; if (T) {
                    k = M = -1; H = 0; for (E = T.fields.length; H < E; H++)F = T.fields[H], "_geom_bond_atom_site_label_1" === F ? M = H : "_geom_bond_atom_site_label_2" === F && (k = H); J = 0; for (G = T.lines.length; J < G; J++) {
                        D = T.lines[J].split(a).filter(A); F = D[M]; D = D[k]; H = 0; for (E = c.atoms.length; H < E; H++)for (I = H + 1; I < E; I++) {
                            C = c.atoms[H]; W = c.atoms[I]; if (C.cifPart !== W.cifPart) break; (C.cifId === F && W.cifId === D ||
                                C.cifId === D && W.cifId === F) && c.bonds.push(new l.Bond(C, W))
                        }
                    }
                } else (new b.informatics.BondDeducer).deduceCovalentBonds(c, 1); o = [-o / 2, -u / 2, -B / 2]; o = { o: e.multiplyVec3(p, o, []), x: e.multiplyVec3(p, [o[0] + 1, o[1], o[2]]), y: e.multiplyVec3(p, [o[0], o[1] + 1, o[2]]), z: e.multiplyVec3(p, [o[0], o[1], o[2] + 1]), xy: e.multiplyVec3(p, [o[0] + 1, o[1] + 1, o[2]]), xz: e.multiplyVec3(p, [o[0] + 1, o[1], o[2] + 1]), yz: e.multiplyVec3(p, [o[0], o[1] + 1, o[2] + 1]), xyz: e.multiplyVec3(p, [o[0] + 1, o[1] + 1, o[2] + 1]) }; return { molecule: c, unitCell: new h.UnitCell(o) }
    };
    var u = new o.CIFInterpreter; b.readCIF = function (a, b, d, e) { return u.read(a, b, d, e) }
})(ChemDoodle, ChemDoodle.extensions, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function (b, j, o, l) {
    j.CMLInterpreter = function () { }; var h = j.CMLInterpreter.prototype = new j._Interpreter; h.read = function (b) {
        var a = []; b = l.parseXML(b); b = l(b).find("cml"); for (var d = 0, g = b.length; d < g; d++)for (var f = l(b[d]).find("molecule"), h = 0, j = f.length; h < j; h++) {
            for (var q = a[h] = new o.Molecule, A = [], r = l(f[h]).find("atom"), v = 0, u = r.length; v < u; v++) {
                var t = l(r[v]), w = t.attr("elementType"), x, B, c; void 0 == t.attr("x2") ? (x = t.attr("x3"), B = t.attr("y3"), c = t.attr("z3")) : (x = t.attr("x2"), B = t.attr("y2"), c = 0); w = a[h].atoms[v] = new o.Atom(w,
                    x, B, c); A[v] = t.attr("id"); void 0 != t.attr("formalCharge") && (w.charge = t.attr("formalCharge"))
            } r = l(f[h]).find("bond"); v = 0; for (u = r.length; v < u; v++) { t = l(r[v]); x = t.attr("atomRefs2").split(" "); w = q.atoms[l.inArray(x[0], A)]; x = q.atoms[l.inArray(x[1], A)]; switch (t.attr("order")) { case "2": case "D": B = 2; break; case "3": case "T": B = 3; break; case "A": B = 1.5; break; default: B = 1 }w = a[h].bonds[v] = new o.Bond(w, x, B); switch (t.find("bondStereo").text()) { case "W": w.stereo = o.Bond.STEREO_PROTRUDING; break; case "H": w.stereo = o.Bond.STEREO_RECESSED } }
        } return a
    };
    h.write = function (b) {
        var a = []; a.push('\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\n'); a.push('\x3ccml convention\x3d"conventions:molecular" xmlns\x3d"http://www.xml-cml.org/schema" xmlns:conventions\x3d"http://www.xml-cml.org/convention/" xmlns:dc\x3d"http://purl.org/dc/elements/1.1/"\x3e\n'); for (var d = 0, g = b.length; d < g; d++) {
            a.push('\x3cmolecule id\x3d"m'); a.push(d); a.push('"\x3e'); a.push("\x3catomArray\x3e"); for (var f = 0, h = b[d].atoms.length; f < h; f++) {
                var j = b[d].atoms[f]; a.push('\x3catom elementType\x3d"');
                a.push(j.label); a.push('" id\x3d"a'); a.push(f); a.push('" '); a.push('x3\x3d"'); a.push(j.x); a.push('" y3\x3d"'); a.push(j.y); a.push('" z3\x3d"'); a.push(j.z); a.push('" '); 0 != j.charge && (a.push('formalCharge\x3d"'), a.push(j.charge), a.push('" ')); a.push("/\x3e")
            } a.push("\x3c/atomArray\x3e"); a.push("\x3cbondArray\x3e"); f = 0; for (h = b[d].bonds.length; f < h; f++) {
                j = b[d].bonds[f]; a.push('\x3cbond atomRefs2\x3d"a'); a.push(b[d].atoms.indexOf(j.a1)); a.push(" a"); a.push(b[d].atoms.indexOf(j.a2)); a.push('" order\x3d"');
                switch (j.bondOrder) { case 1.5: a.push("A"); break; case 1: case 2: case 3: a.push(j.bondOrder); break; default: a.push("S") }a.push('"/\x3e')
            } a.push("\x3c/bondArray\x3e"); a.push("\x3c/molecule\x3e")
        } a.push("\x3c/cml\x3e"); return a.join("")
    }; var g = new j.CMLInterpreter; b.readCML = function (b) { return g.read(b) }; b.writeCML = function (b) { return g.write(b) }
})(ChemDoodle, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery);
(function (b, j, o, l) {
    o.MOLInterpreter = function () { }; var h = o.MOLInterpreter.prototype = new o._Interpreter; h.read = function (e, a) {
        a || (a = b.default_bondLength_2D); var d = new l.Molecule; if (!e) return d; for (var g = e.split("\n"), f = g[3], h = parseInt(f.substring(0, 3)), f = parseInt(f.substring(3, 6)), p = 0; p < h; p++) {
            var q = g[4 + p]; d.atoms[p] = new l.Atom(q.substring(31, 34), parseFloat(q.substring(0, 10)) * a, (1 === a ? 1 : -1) * parseFloat(q.substring(10, 20)) * a, parseFloat(q.substring(20, 30)) * a); var o = parseInt(q.substring(34, 36)); 0 !== o && j[d.atoms[p].label] &&
                (d.atoms[p].mass = j[d.atoms[p].label].mass + o); switch (parseInt(q.substring(36, 39))) { case 1: d.atoms[p].charge = 3; break; case 2: d.atoms[p].charge = 2; break; case 3: d.atoms[p].charge = 1; break; case 5: d.atoms[p].charge = -1; break; case 6: d.atoms[p].charge = -2; break; case 7: d.atoms[p].charge = -3 }
        } for (p = 0; p < f; p++) {
            var q = g[4 + h + p], r = parseInt(q.substring(6, 9)), o = parseInt(q.substring(9, 12)); if (3 < r) switch (r) { case 4: r = 1.5; break; default: r = 1 }q = new l.Bond(d.atoms[parseInt(q.substring(0, 3)) - 1], d.atoms[parseInt(q.substring(3, 6)) -
                1], r); switch (o) { case 3: q.stereo = l.Bond.STEREO_AMBIGUOUS; break; case 1: q.stereo = l.Bond.STEREO_PROTRUDING; break; case 6: q.stereo = l.Bond.STEREO_RECESSED }d.bonds[p] = q
        } return d
    }; h.write = function (e) {
        var a = []; a.push("Molecule from ChemDoodle Web Components\n\nhttp://www.ichemlabs.com\n"); a.push(this.fit(e.atoms.length.toString(), 3)); a.push(this.fit(e.bonds.length.toString(), 3)); a.push("  0  0  0  0            999 V2000\n"); for (var d = e.getCenter(), g = 0, f = e.atoms.length; g < f; g++) {
            var h = e.atoms[g], p = " 0"; if (-1 !==
                h.mass && j[h.label]) { var q = h.mass - j[h.label].mass; 5 > q && -4 < q && (p = (-1 < q ? " " : "") + q) } q = "  0"; if (0 !== h.charge) switch (h.charge) { case 3: q = "  1"; break; case 2: q = "  2"; break; case 1: q = "  3"; break; case -1: q = "  5"; break; case -2: q = "  6"; break; case -3: q = "  7" }a.push(this.fit(((h.x - d.x) / b.default_bondLength_2D).toFixed(4), 10)); a.push(this.fit((-(h.y - d.y) / b.default_bondLength_2D).toFixed(4), 10)); a.push(this.fit((h.z / b.default_bondLength_2D).toFixed(4), 10)); a.push(" "); a.push(this.fit(h.label, 3, !0)); a.push(p); a.push(q);
            a.push("  0  0  0  0\n")
        } g = 0; for (f = e.bonds.length; g < f; g++) { h = e.bonds[g]; d = 0; h.stereo === l.Bond.STEREO_AMBIGUOUS ? d = 3 : h.stereo === l.Bond.STEREO_PROTRUDING ? d = 1 : h.stereo === l.Bond.STEREO_RECESSED && (d = 6); a.push(this.fit((e.atoms.indexOf(h.a1) + 1).toString(), 3)); a.push(this.fit((e.atoms.indexOf(h.a2) + 1).toString(), 3)); h = h.bondOrder; if (1.5 == h) h = 4; else if (3 < h || 0 != h % 1) h = 1; a.push(this.fit(h, 3)); a.push("  "); a.push(d); a.push("     0  0\n") } a.push("M  END"); return a.join("")
    }; var g = new o.MOLInterpreter; b.readMOL =
        function (b, a) { return g.read(b, a) }; b.writeMOL = function (b) { return g.write(b) }
})(ChemDoodle, ChemDoodle.ELEMENT, ChemDoodle.io, ChemDoodle.structures);
(function (b, j, o, l, h, g, e) {
    function a(a, b, d, e, g) { for (var h = 0, j = b.length; h < j; h++) { var n = b[h]; if (n.id === d && e >= n.start && e <= n.end) { g ? a.helix = !0 : a.sheet = !0; e === n.end && (a.arrow = !0); break } } } o.PDBInterpreter = function () { }; var d = o.PDBInterpreter.prototype = new o._Interpreter; d.calculateRibbonDistances = !1; d.deduceResidueBonds = !1; d.read = function (d, n) {
        var p = new l.Molecule; p.chains = []; if (!d) return p; var q = d.split("\n"); n || (n = 1); for (var o = [], r = [], v, u = [], t = [], w = [], x = 0, B = q.length; x < B; x++) {
            var c = q[x]; if (j.stringStartsWith(c,
                "HELIX")) o.push({ id: c.substring(19, 20), start: parseInt(c.substring(21, 25)), end: parseInt(c.substring(33, 37)) }); else if (j.stringStartsWith(c, "SHEET")) r.push({ id: c.substring(21, 22), start: parseInt(c.substring(22, 26)), end: parseInt(c.substring(33, 37)) }); else if (j.stringStartsWith(c, "ATOM")) {
                    var k = c.substring(16, 17); if (" " === k || "A" === k) {
                        k = g(c.substring(76, 78)); if (0 === k.length) { var C = g(c.substring(12, 14)); "HD" === C ? k = "H" : 0 < C.length && (k = 1 < C.length ? C.charAt(0) + C.substring(1).toLowerCase() : C) } C = new l.Atom(k, parseFloat(c.substring(30,
                            38)) * n, parseFloat(c.substring(38, 46)) * n, parseFloat(c.substring(46, 54)) * n); C.hetatm = !1; t.push(C); var D = parseInt(c.substring(22, 26)); if (0 === u.length) for (k = 0; 3 > k; k++) { var G = new l.Residue(-1); G.cp1 = C; G.cp2 = C; u.push(G) } D !== Number.NaN && u[u.length - 1].resSeq !== D && (k = new l.Residue(D), k.name = g(c.substring(17, 20)), 3 === k.name.length ? k.name = k.name.substring(0, 1) + k.name.substring(1).toLowerCase() : 2 === k.name.length && "D" === k.name.charAt(0) && (k.name = k.name.substring(1)), u.push(k), G = c.substring(21, 22), a(k, o, G, D, !0),
                                a(k, r, G, D, !1)); c = g(c.substring(12, 16)); k = u[u.length - 1]; if ("CA" === c || "P" === c || "O5'" === c) k.cp1 || (k.cp1 = C); else if ("N3" === c && ("C" === k.name || "U" === k.name || "T" === k.name) || "N1" === c && ("A" === k.name || "G" === k.name)) k.cp3 = C; else if ("C2" === c) k.cp4 = C; else if ("C4" === c && ("C" === k.name || "U" === k.name || "T" === k.name) || "C6" === c && ("A" === k.name || "G" === k.name)) k.cp5 = C; else if ("O" === c || "C6" === c && ("C" === k.name || "U" === k.name || "T" === k.name) || "N9" === c) { if (!u[u.length - 1].cp2) { if ("C6" === c || "N9" === c) v = C; k.cp2 = C } } else "C" === c && (v =
                                    C)
                    }
                } else if (j.stringStartsWith(c, "HETATM")) k = g(c.substring(76, 78)), 0 === k.length && (k = g(c.substring(12, 16))), 1 < k.length && (k = k.substring(0, 1) + k.substring(1).toLowerCase()), k = new l.Atom(k, parseFloat(c.substring(30, 38)) * n, parseFloat(c.substring(38, 46)) * n, parseFloat(c.substring(46, 54)) * n), k.hetatm = !0, "HOH" === g(c.substring(17, 20)) && (k.isWater = !0), p.atoms.push(k), w[parseInt(g(c.substring(6, 11)))] = k; else if (j.stringStartsWith(c, "CONECT")) {
                    if (k = parseInt(g(c.substring(6, 11))), w[k]) {
                        C = w[k]; for (D = 0; 4 > D; D++)if (k =
                            g(c.substring(11 + 5 * D, 16 + 5 * D)), 0 !== k.length && (k = parseInt(k), w[k])) { for (var G = w[k], E = !1, k = 0, H = p.bonds.length; k < H; k++) { var I = p.bonds[k]; if (I.a1 === C && I.a2 === G || I.a1 === G && I.a2 === C) { E = !0; break } } E || p.bonds.push(new l.Bond(C, G)) }
                    }
                } else if (j.stringStartsWith(c, "TER")) this.endChain(p, u, v, t), u = []; else if (j.stringStartsWith(c, "ENDMDL")) break
        } this.endChain(p, u, v, t); 0 === p.bonds.size && (new b.informatics.BondDeducer).deduceCovalentBonds(p, n); if (this.deduceResidueBonds) {
            x = 0; for (B = t.length; x < B; x++) {
                q = e.min(B, x + 20);
                for (k = x + 1; k < q; k++)o = t[x], r = t[k], o.distance3D(r) < 1.1 * (h[o.label].covalentRadius + h[r.label].covalentRadius) && p.bonds.push(new l.Bond(o, r, 1))
            }
        } p.atoms = p.atoms.concat(t); this.calculateRibbonDistances && this.calculateDistances(p, t); return p
    }; d.endChain = function (a, b, d, e) { if (0 < b.length) { var g = b[b.length - 1]; g.cp1 || (g.cp1 = e[e.length - 2]); g.cp2 || (g.cp2 = e[e.length - 1]); for (e = 0; 4 > e; e++)g = new l.Residue(-1), g.cp1 = d, g.cp2 = b[b.length - 1].cp2, b.push(g); a.chains.push(b) } }; d.calculateDistances = function (a, b) {
        for (var d = [],
            e = 0, g = a.atoms.length; e < g; e++) { var h = a.atoms[e]; h.hetatm && (h.isWater || d.push(h)) } e = 0; for (g = b.length; e < g; e++)if (h = b[e], h.closestDistance = Number.POSITIVE_INFINITY, 0 === d.length) h.closestDistance = 0; else for (var j = 0, n = d.length; j < n; j++)h.closestDistance = Math.min(h.closestDistance, h.distance3D(d[j]))
    }; var n = new o.PDBInterpreter; b.readPDB = function (a, b) { return n.read(a, b) }
})(ChemDoodle, ChemDoodle.extensions, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.ELEMENT, ChemDoodle.lib.jQuery.trim, Math);
(function (b, j, o, l) {
    var h = { "@": 0, A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, a: -1, b: -2, c: -3, d: -4, e: -5, f: -6, g: -7, h: -8, i: -9 }, g = { "%": 0, J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9, j: -1, k: -2, l: -3, m: -4, n: -5, o: -6, p: -7, q: -8, r: -9 }, e = { S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8, s: 9 }; o.JCAMPInterpreter = function () { }; var a = o.JCAMPInterpreter.prototype = new o._Interpreter; a.convertHZ2PPM = !1; a.read = function (a) {
        this.isBreak = function (a) { return void 0 !== h[a] || void 0 !== g[a] || void 0 !== e[a] || " " === a || "-" === a || "+" === a }; this.getValue = function (a, b) {
            var c =
                a.charAt(0), d = a.substring(1); return void 0 !== h[c] ? parseFloat(h[c] + d) : void 0 !== g[c] ? parseFloat(g[c] + d) + b : parseFloat(d)
        }; var b = new l.Spectrum; if (void 0 === a || 0 === a.length) return b; a = a.split("\n"); for (var d = [], p, q, o, r, v = 1, u = 1, t = 1, w = -1, x = -1, B = -1, c = !0, k = !1, C = 0, D = a.length; C < D; C++) {
            var G = a[C].trim(), E = G.indexOf("$$"); -1 !== E && (G = G.substring(0, E)); if (0 === d.length || !j.stringStartsWith(a[C], "##")) G = G.trim(), 0 !== d.length && 0 !== G.length && d.push("\n"), d.push(G); else if (E = d.join(""), c && 100 > E.length && b.metadata.push(E),
                d = [G], j.stringStartsWith(E, "##TITLE\x3d")) b.title = E.substring(8).trim(); else if (j.stringStartsWith(E, "##XUNITS\x3d")) b.xUnit = E.substring(9).trim(), this.convertHZ2PPM && "HZ" === b.xUnit.toUpperCase() && (b.xUnit = "PPM", k = !0); else if (j.stringStartsWith(E, "##YUNITS\x3d")) b.yUnit = E.substring(9).trim(); else if (!j.stringStartsWith(E, "##XYPAIRS\x3d")) if (j.stringStartsWith(E, "##FIRSTX\x3d")) q = parseFloat(E.substring(9).trim()); else if (j.stringStartsWith(E, "##LASTX\x3d")) p = parseFloat(E.substring(8).trim()); else if (j.stringStartsWith(E,
                    "##FIRSTY\x3d")) o = parseFloat(E.substring(9).trim()); else if (j.stringStartsWith(E, "##NPOINTS\x3d")) r = parseFloat(E.substring(10).trim()); else if (j.stringStartsWith(E, "##XFACTOR\x3d")) v = parseFloat(E.substring(10).trim()); else if (j.stringStartsWith(E, "##YFACTOR\x3d")) u = parseFloat(E.substring(10).trim()); else if (j.stringStartsWith(E, "##DELTAX\x3d")) w = parseFloat(E.substring(9).trim()); else if (j.stringStartsWith(E, "##.OBSERVE FREQUENCY\x3d")) this.convertHZ2PPM && (t = parseFloat(E.substring(21).trim())); else if (j.stringStartsWith(E,
                        "##.SHIFT REFERENCE\x3d")) this.convertHZ2PPM && (B = E.substring(19).split(","), x = parseInt(B[2].trim()), B = parseFloat(B[3].trim())); else if (j.stringStartsWith(E, "##XYDATA\x3d")) {
                            k || (t = 1); var H = c = !1, G = E.split("\n"), I = (p - q) / (r - 1); if (-1 !== w) for (var E = 1, M = G.length; E < M; E++)if ("|" === G[E].charAt(0)) { I = w; break } for (var J = q - I, T = o, F = 0, W, E = 1, M = G.length; E < M; E++) {
                                for (var R = [], J = G[E].trim(), d = [], O = !1, L = 0, Z = J.length; L < Z; L++)this.isBreak(J.charAt(L)) ? (0 < d.length && !(1 === d.length && " " === d[0]) && R.push(d.join("")), d = [J.charAt(L)]) :
                                    "|" === J.charAt(L) ? O = !0 : d.push(J.charAt(L)); R.push(d.join("")); J = parseFloat(R[0]) * v - I; L = 1; for (Z = R.length; L < Z; L++)if (T = R[L], void 0 !== e[T.charAt(0)]) for (var Da = parseInt(e[T.charAt(0)] + T.substring(1)) - 1, ka = 0; ka < Da; ka++)J += I, F = this.getValue(W, F), T = F * u, $++, b.data[b.data.length - 1] = new l.Point(J / t, T); else void 0 !== h[T.charAt(0)] && H ? (T = this.getValue(T, F) * u, O && (J += I, b.data.push(new l.Point(J / t, T)))) : (H = void 0 !== g[T.charAt(0)], W = T, J += I, F = this.getValue(T, F), T = F * u, $++, b.data.push(new l.Point(J / t, T)))
                            } if (-1 !==
                                x) { G = B - b.data[x - 1].x; C = 0; for (D = b.data.length; C < D; C++)b.data[C].x += G }
                        } else if (j.stringStartsWith(E, "##PEAK TABLE\x3d")) { c = !1; b.continuous = !1; for (var G = E.split("\n"), $ = 0, H = /[\s,]+/, E = 1, M = G.length; E < M; E++) { O = G[E].split(H); $ += O.length / 2; L = 0; for (Z = O.length; L + 1 < Z; L += 2)b.data.push(new l.Point(parseFloat(O[L].trim()), parseFloat(O[L + 1].trim()))) } } else if (j.stringStartsWith(E, "##ATOMLIST\x3d")) { b.molecule = new l.Molecule; G = E.split("\n"); H = /[\s]+/; E = 1; for (M = G.length; E < M; E++)O = G[E].split(H), b.molecule.atoms.push(new l.Atom(O[1])) } else if (j.stringStartsWith(E,
                            "##BONDLIST\x3d")) { G = E.split("\n"); H = /[\s]+/; E = 1; for (M = G.length; E < M; E++)O = G[E].split(H), L = 1, "D" === O[2] ? L = 2 : "T" === O[2] && (L = 3), b.molecule.bonds.push(new l.Bond(b.molecule.atoms[parseInt(O[0]) - 1], b.molecule.atoms[parseInt(O[1]) - 1], L)) } else if (b.molecule && j.stringStartsWith(E, "##XY_RASTER\x3d")) { G = E.split("\n"); H = /[\s]+/; E = 1; for (M = G.length; E < M; E++)O = G[E].split(H), I = b.molecule.atoms[parseInt(O[0]) - 1], I.x = parseInt(O[1]), I.y = parseInt(O[2]), 4 == O.length && (I.z = parseInt(O[3])); b.molecule.scaleToAverageBondLength(20) } else if (j.stringStartsWith(E,
                                "##PEAK ASSIGNMENTS\x3d")) { G = E.split("\n"); H = /[\s,()<>]+/; b.assignments = []; E = 1; for (M = G.length; E < M; E++) { O = G[E].split(H); F = parseFloat(O[1]); R = parseFloat(O[2]); I = b.molecule.atoms[parseInt(O[3]) - 1]; O = !1; L = 0; for (Z = b.assignments.length; L < Z; L++)if (J = b.assignments[L], J.x === F) { J.as.push(I); I.assigned = J; O = !0; break } O || (J = { x: F, y: R, as: [I] }, I.assigned = J, b.assignments.push(J)) } }
        } b.setup(); return b
    }; a.makeStructureSpectrumSet = function (a, d) {
        this.convertHZ2PPM = !0; var e = this.read(d), g = new b.ViewerCanvas(a + "_molecule",
            200, 200); g.specs.atoms_displayTerminalCarbonLabels_2D = !0; g.specs.atoms_displayImplicitHydrogens_2D = !0; g.mouseout = function () { if (0 !== this.molecules.length) { for (var a = 0, b = this.molecules[0].atoms.length; a < b; a++)this.molecules[0].atoms[a].isHover = !1; e.hovered = void 0; this.repaint(); h.repaint() } }; g.touchend = g.mouseout; g.mousemove = function (a) {
                if (0 !== this.molecules.length) {
                    for (var b = void 0, d = 0, f = this.molecules[0].atoms.length; d < f; d++) {
                        var g = this.molecules[0].atoms[d]; g.isHover = !1; if (g.assigned && (void 0 ===
                            b || a.p.distance(g) < a.p.distance(b))) b = g
                    } e.hovered = void 0; if (20 > a.p.distance(b)) { d = 0; for (f = b.assigned.as.length; d < f; d++)b.assigned.as[d].isHover = !0; h.spectrum.hovered = b.assigned } this.repaint(); h.repaint()
                }
            }; g.touchmove = g.mousemove; g.drawChildExtras = function (a) { if (0 !== this.molecules.length) for (var b = 0, d = this.molecules[0].atoms.length; b < d; b++)this.molecules[0].atoms[b].drawDecorations(a) }; var h = new b.ObserverCanvas(a + "_spectrum", 400, 200); h.specs.plots_showYAxis = !1; h.specs.plots_flipXAxis = !0; h.mouseout =
                function () { if (this.spectrum && this.spectrum.assignments) { for (var a = 0, b = g.molecules[0].atoms.length; a < b; a++)g.molecules[0].atoms[a].isHover = !1; this.spectrum.hovered = void 0; g.repaint(); this.repaint() } }; h.touchend = h.mouseout; h.mousemove = function (a) {
                    if (this.spectrum && this.spectrum.assignments) {
                        for (var b = void 0, d = 0, e = g.molecules[0].atoms.length; d < e; d++)g.molecules[0].atoms[d].isHover = !1; this.spectrum.hovered = void 0; d = 0; for (e = this.spectrum.assignments.length; d < e; d++) {
                            var f = this.spectrum.assignments[d]; if (void 0 ===
                                b || Math.abs(this.spectrum.getTransformedX(f.x, this.specs, this.spectrum.memory.width, this.spectrum.memory.offsetLeft) - a.p.x) < Math.abs(this.spectrum.getTransformedX(b.x, this.specs, this.spectrum.memory.width, this.spectrum.memory.offsetLeft) - a.p.x)) b = f
                        } if (20 > Math.abs(this.spectrum.getTransformedX(b.x, this.specs, this.spectrum.memory.width, this.spectrum.memory.offsetLeft) - a.p.x)) { d = 0; for (e = b.as.length; d < e; d++)b.as[d].isHover = !0; this.spectrum.hovered = b } g.repaint(); this.repaint()
                    }
                }; h.touchmove = h.mousemove;
        h.drawChildExtras = function (a) {
            if (this.spectrum && this.spectrum.hovered) {
                var b = this.spectrum.getTransformedX(this.spectrum.hovered.x, h.specs, this.spectrum.memory.width, this.spectrum.memory.offsetLeft); b >= this.spectrum.memory.offsetLeft && b < this.spectrum.memory.width && (a.save(), a.strokeStyle = "#885110", a.lineWidth = 3, a.beginPath(), a.moveTo(b, this.spectrum.memory.height - this.spectrum.memory.offsetBottom), a.lineTo(b, this.spectrum.getTransformedY(this.spectrum.hovered.y, h.specs, this.spectrum.memory.height,
                    this.spectrum.memory.offsetBottom, this.spectrum.memory.offsetTop)), a.stroke(), a.restore())
            }
        }; e && (h.loadSpectrum(e), e.molecule && g.loadMolecule(e.molecule)); return [g, h]
    }; var d = new o.JCAMPInterpreter; d.convertHZ2PPM = !0; b.readJCAMP = function (a) { return d.read(a) }
})(ChemDoodle, ChemDoodle.extensions, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery);
(function (b, j, o, l, h, g) {
    j.JSONInterpreter = function () { }; var e = j.JSONInterpreter.prototype; e.contentTo = function (a, b) {
        for (var e = 0, g = 0, h = 0, j = a.length; h < j; h++) { for (var l = a[h], o = 0, v = l.atoms.length; o < v; o++)l.atoms[o].tmpid = "a" + e++; o = 0; for (v = l.bonds.length; o < v; o++)l.bonds[o].tmpid = "b" + g++ } h = e = 0; for (j = b.length; h < j; h++)b[h].tmpid = "s" + e++; e = {}; if (a && 0 < a.length) { e.m = []; h = 0; for (j = a.length; h < j; h++)e.m.push(this.molTo(a[h])) } if (b && 0 < b.length) { e.s = []; h = 0; for (j = b.length; h < j; h++)e.s.push(this.shapeTo(b[h])) } h = 0; for (j =
            a.length; h < j; h++) { l = a[h]; o = 0; for (v = l.atoms.length; o < v; o++)l.atoms[o].tmpid = void 0; o = 0; for (v = l.bonds.length; o < v; o++)l.bonds[o].tmpid = void 0 } h = 0; for (j = b.length; h < j; h++)b[h].tmpid = void 0; return e
    }; e.contentFrom = function (a) {
        var b = { molecules: [], shapes: [] }; if (a.m) for (var e = 0, g = a.m.length; e < g; e++)b.molecules.push(this.molFrom(a.m[e])); if (a.s) { e = 0; for (g = a.s.length; e < g; e++)b.shapes.push(this.shapeFrom(a.s[e], b.molecules)) } e = 0; for (g = b.molecules.length; e < g; e++) {
            a = b.molecules[e]; for (var h = 0, j = a.atoms.length; h <
                j; h++)a.atoms[h].tmpid = void 0; h = 0; for (j = a.bonds.length; h < j; h++)a.bonds[h].tmpid = void 0
        } e = 0; for (g = b.shapes.length; e < g; e++)b.shapes[e].tmpid = void 0; return b
    }; e.queryTo = function (a) {
        var b = {}, e = function (b, e, f, g) { e && (b[f] = { v: g ? a.outputRange(e.v) : e.v, n: e.not }) }; a.type === o.Query.TYPE_ATOM ? (e(b, a.elements, "as"), e(b, a.chirality, "@"), e(b, a.aromatic, "A"), e(b, a.charge, "C", !0), e(b, a.hydrogens, "H", !0), e(b, a.ringCount, "R", !0), e(b, a.saturation, "S"), e(b, a.connectivity, "X", !0), e(b, a.connectivityNoH, "x", !0)) : (e(b, a.orders,
            "bs"), e(b, a.stereo, "@"), e(b, a.aromatic, "A"), e(b, a.ringCount, "R", !0)); return b
    }; e.molTo = function (a) {
        for (var b = { a: [] }, e = 0, g = a.atoms.length; e < g; e++) { var h = a.atoms[e], j = { x: h.x, y: h.y }; h.tmpid && (j.i = h.tmpid); "C" !== h.label && (j.l = h.label); 0 !== h.z && (j.z = h.z); 0 !== h.charge && (j.c = h.charge); -1 !== h.mass && (j.m = h.mass); 0 !== h.numRadical && (j.r = h.numRadical); 0 !== h.numLonePair && (j.p = h.numLonePair); h.query && (j.q = this.queryTo(h.query)); b.a.push(j) } if (0 < a.bonds.length) {
            b.b = []; e = 0; for (g = a.bonds.length; e < g; e++)h = a.bonds[e],
                j = { b: a.atoms.indexOf(h.a1), e: a.atoms.indexOf(h.a2) }, h.tmpid && (j.i = h.tmpid), 1 !== h.bondOrder && (j.o = h.bondOrder), h.stereo !== o.Bond.STEREO_NONE && (j.s = h.stereo), h.query && (j.q = this.queryTo(h.query)), b.b.push(j)
        } return b
    }; e.queryFrom = function (a) {
        var b = new o.Query(a.as ? o.Query.TYPE_ATOM : o.Query.TYPE_BOND), e = function (a, b, d, e) { b && (a[d] = {}, a[d].v = e ? a.parseRange(b.v) : b.v, b.n && (a[d].not = !0)) }; b.type === o.Query.TYPE_ATOM ? (e(b, a.as, "elements"), e(b, a["@"], "chirality"), e(b, a.A, "aromatic"), e(b, a.C, "charge", !0), e(b,
            a.H, "hydrogens", !0), e(b, a.R, "ringCount", !0), e(b, a.S, "saturation"), e(b, a.X, "connectivity", !0), e(b, a.x, "connectivityNoH", !0)) : (e(b, a.bs, "orders"), e(b, a["@"], "stereo"), e(b, a.A, "aromatic"), e(b, a.R, "ringCount", !0)); return b
    }; e.molFrom = function (a) {
        for (var b = new o.Molecule, e = 0, g = a.a.length; e < g; e++) {
            var h = a.a[e], j = new o.Atom(h.l ? h.l : "C", h.x, h.y); h.i && (j.tmpid = h.i); h.z && (j.z = h.z); h.c && (j.charge = h.c); h.m && (j.mass = h.m); h.r && (j.numRadical = h.r); h.p && (j.numLonePair = h.p); h.q && (j.query = this.queryFrom(h.q)); void 0 !==
                h.p_h && (j.hetatm = h.p_h); void 0 !== h.p_w && (j.isWater = h.p_w); void 0 !== h.p_d && (j.closestDistance = h.p_d); b.atoms.push(j)
        } if (a.b) { e = 0; for (g = a.b.length; e < g; e++)h = a.b[e], j = new o.Bond(b.atoms[h.b], b.atoms[h.e], void 0 === h.o ? 1 : h.o), h.i && (j.tmpid = h.i), h.s && (j.stereo = h.s), h.q && (j.query = this.queryFrom(h.q)), b.bonds.push(j) } return b
    }; e.shapeTo = function (a) {
        var b = {}; a.tmpid && (b.i = a.tmpid); if (a instanceof l.Line) b.t = "Line", b.x1 = a.p1.x, b.y1 = a.p1.y, b.x2 = a.p2.x, b.y2 = a.p2.y, b.a = a.arrowType; else if (a instanceof l.Pusher) b.t =
            "Pusher", b.o1 = a.o1.tmpid, b.o2 = a.o2.tmpid, 1 !== a.numElectron && (b.e = a.numElectron); else if (a instanceof l.Bracket) b.t = "Bracket", b.x1 = a.p1.x, b.y1 = a.p1.y, b.x2 = a.p2.x, b.y2 = a.p2.y, 0 !== a.charge && (b.c = a.charge), 0 !== a.mult && (b.m = a.mult), 0 !== a.repeat && (b.r = a.repeat); else if (a instanceof h.Distance) b.t = "Distance", b.a1 = a.a1.tmpid, b.a2 = a.a2.tmpid, a.node && (b.n = a.node, b.o = a.offset); else if (a instanceof h.Angle) b.t = "Angle", b.a1 = a.a1.tmpid, b.a2 = a.a2.tmpid, b.a3 = a.a3.tmpid; else if (a instanceof h.Torsion) b.t = "Torsion",
                b.a1 = a.a1.tmpid, b.a2 = a.a2.tmpid, b.a3 = a.a3.tmpid, b.a4 = a.a4.tmpid; else if (a instanceof h.UnitCell) { b.t = "UnitCell"; for (var e in a.unitCell) b[e] = a.unitCell[e] } return b
    }; e.shapeFrom = function (a, b) {
        var e; if ("Line" === a.t) e = new l.Line(new o.Point(a.x1, a.y1), new o.Point(a.x2, a.y2)), e.arrowType = a.a; else if ("Pusher" === a.t) {
            var g, j, q = 0; for (e = b.length; q < e; q++) {
                for (var A = b[q], r = 0, v = A.atoms.length; r < v; r++) { var u = A.atoms[r]; u.tmpid === a.o1 ? g = u : u.tmpid === a.o2 && (j = u) } r = 0; for (v = A.bonds.length; r < v; r++) {
                    var t = A.bonds[r];
                    t.tmpid === a.o1 ? g = t : t.tmpid === a.o2 && (j = t)
                }
            } e = new l.Pusher(g, j); a.e && (e.numElectron = a.e)
        } else if ("Bracket" === a.t) e = new l.Bracket(new o.Point(a.x1, a.y1), new o.Point(a.x2, a.y2)), void 0 !== a.c && (e.charge = a.c), void 0 !== a.m && (e.mult = a.m), void 0 !== a.r && (e.repeat = a.r); else if ("Distance" === a.t) { var w, q = 0; for (e = b.length; q < e; q++) { A = b[q]; r = 0; for (v = A.atoms.length; r < v; r++)u = A.atoms[r], u.tmpid === a.a1 ? t = u : u.tmpid === a.a2 && (w = u) } e = new h.Distance(t, w, a.n, a.o) } else if ("Angle" === a.t) {
            var x, q = 0; for (e = b.length; q < e; q++) {
                A =
                b[q]; r = 0; for (v = A.atoms.length; r < v; r++)u = A.atoms[r], u.tmpid === a.a1 ? t = u : u.tmpid === a.a2 ? w = u : u.tmpid === a.a3 && (x = u)
            } e = new h.Angle(t, w, x)
        } else if ("Torsion" === a.t) { var B, q = 0; for (e = b.length; q < e; q++) { A = b[q]; r = 0; for (v = A.atoms.length; r < v; r++)u = A.atoms[r], u.tmpid === a.a1 ? t = u : u.tmpid === a.a2 ? w = u : u.tmpid === a.a3 ? x = u : u.tmpid === a.a4 && (B = u) } e = new h.Torsion(t, w, x, B) } else if ("UnitCell" === a.t) { g = {}; for (q in a) g[q] = a[q]; e = new h.UnitCell(g) } return e
    }; e.pdbFrom = function (a) {
        var b = this.molFrom(a.mol); b.findRings = !1; b.fromJSON =
            !0; b.chains = this.chainsFrom(a.ribbons); return b
    }; e.chainsFrom = function (a) { for (var b = [], e = 0, g = a.cs.length; e < g; e++) { for (var h = a.cs[e], j = [], l = 0, r = h.length; l < r; l++) { var v = h[l], u = new o.Residue; u.name = v.n; u.cp1 = new o.Atom("", v.x1, v.y1, v.z1); u.cp2 = new o.Atom("", v.x2, v.y2, v.z2); v.x3 && (u.cp3 = new o.Atom("", v.x3, v.y3, v.z3), u.cp4 = new o.Atom("", v.x4, v.y4, v.z4), u.cp5 = new o.Atom("", v.x5, v.y5, v.z5)); u.helix = v.h; u.sheet = v.s; u.arrow = 0 < l && h[l - 1].a; j.push(u) } b.push(j) } return b }; var a = new j.JSONInterpreter; b.readJSON =
        function (b) { var e; try { e = g.parse(b) } catch (f) { return } if (e) return e.m || e.s ? a.contentFrom(e) : e.a ? { molecules: [a.molFrom(e)], shapes: [] } : { molecules: [], shapes: [] } }; b.writeJSON = function (b, e) { return g.stringify(a.contentTo(b, e)) }
})(ChemDoodle, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.structures.d2, ChemDoodle.structures.d3, JSON);
(function (b, j, o) {
    j.RXNInterpreter = function () { }; var l = j.RXNInterpreter.prototype = new j._Interpreter; l.read = function (g, e) {
        e || (e = b.default_bondLength_2D); var a = [], d; if (g) {
            d = g.split("$MOL\n"); for (var h = d[0].split("\n")[4], f = parseInt(h.substring(0, 3)), h = parseInt(h.substring(3, 6)), j = 1, l = 0, q = 0, A = f + h; q < A; q++) { a[q] = b.readMOL(d[j], e); var r = a[q].getBounds(), r = r.maxX - r.minX, l = l - (r + 40); j++ } q = 0; for (A = f; q < A; q++) {
                var r = a[q].getBounds(), r = r.maxX - r.minX, j = a[q].getCenter(), v = 0; for (d = a[q].atoms.length; v < d; v++) {
                    var u =
                        a[q].atoms[v]; u.x += l + r / 2 - j.x; u.y -= j.y
                } l += r + 40
            } d = new o.d2.Line(new o.Point(l, 0), new o.Point(l + 40, 0)); l += 80; q = f; for (A = f + h; q < A; q++) { r = a[q].getBounds(); r = r.maxX - r.minX; j = a[q].getCenter(); for (v = 0; v < a[q].atoms.length; v++)u = a[q].atoms[v], u.x += l + r / 2 - j.x, u.y -= j.y; l += r + 40 }
        } else a.push(new o.Molecule), d = new o.d2.Line(new o.Point(-20, 0), new o.Point(20, 0)); d.arrowType = o.d2.Line.ARROW_SYNTHETIC; return { molecules: a, shapes: [d] }
    }; l.write = function (g, e) {
        var a = [[], []], d = void 0; if (g && e) {
            h = 0; for (f = e.length; h < f; h++)if (e[h] instanceof
                o.d2.Line) { d = e[h].getPoints(); break } if (!d) return ""; for (var h = 0, f = g.length; h < f; h++)g[h].getCenter().x < d[1].x ? a[0].push(g[h]) : a[1].push(g[h]); d = []; d.push("$RXN\nReaction from ChemDoodle Web Components\n\nhttp://www.ichemlabs.com\n"); d.push(this.fit(a[0].length.toString(), 3)); d.push(this.fit(a[1].length.toString(), 3)); d.push("\n"); for (h = 0; 2 > h; h++)for (var f = 0, j = a[h].length; f < j; f++)d.push("$MOL\n"), d.push(b.writeMOL(a[h][f])), d.push("\n"); return d.join("")
        }
    }; var h = new j.RXNInterpreter; b.readRXN = function (b,
        e) { return h.read(b, e) }; b.writeRXN = function (b, e) { return h.write(b, e) }
})(ChemDoodle, ChemDoodle.io, ChemDoodle.structures);
(function (b, j, o, l, h, g) {
    l.XYZInterpreter = function () { }; j = l.XYZInterpreter.prototype = new l._Interpreter; j.deduceCovalentBonds = !0; j.read = function (a) { var d = new h.Molecule; if (!a) return d; a = a.split("\n"); for (var e = parseInt(g(a[0])), f = 0; f < e; f++) { var j = a[f + 2].split(/\s+/g); d.atoms[f] = new h.Atom(isNaN(j[0]) ? j[0] : o[parseInt(j[0]) - 1], parseFloat(j[1]), parseFloat(j[2]), parseFloat(j[3])) } this.deduceCovalentBonds && (new b.informatics.BondDeducer).deduceCovalentBonds(d, 1); return d }; var e = new l.XYZInterpreter; b.readXYZ =
        function (a) { return e.read(a) }
})(ChemDoodle, ChemDoodle.ELEMENT, ChemDoodle.SYMBOLS, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery.trim);
ChemDoodle.monitor = function (b, j, o) {
    var l = { CANVAS_DRAGGING: void 0, CANVAS_OVER: void 0, ALT: !1, SHIFT: !1, META: !1 }; b.supports_touch() || j(o).ready(function () {
        j(o).mousemove(function (b) { l.CANVAS_DRAGGING && l.CANVAS_DRAGGING.drag && (l.CANVAS_DRAGGING.prehandleEvent(b), l.CANVAS_DRAGGING.drag(b)) }); j(o).mouseup(function (b) { l.CANVAS_DRAGGING && l.CANVAS_DRAGGING !== l.CANVAS_OVER && l.CANVAS_DRAGGING.mouseup && (l.CANVAS_DRAGGING.prehandleEvent(b), l.CANVAS_DRAGGING.mouseup(b)); l.CANVAS_DRAGGING = void 0 }); j(o).keydown(function (b) {
            l.SHIFT =
            b.shiftKey; l.ALT = b.altKey; l.META = b.metaKey || b.ctrlKey; var g = l.CANVAS_OVER; l.CANVAS_DRAGGING && (g = l.CANVAS_DRAGGING); g && g.keydown && (g.prehandleEvent(b), g.keydown(b))
        }); j(o).keypress(function (b) { var g = l.CANVAS_OVER; l.CANVAS_DRAGGING && (g = l.CANVAS_DRAGGING); g && g.keypress && (g.prehandleEvent(b), g.keypress(b)) }); j(o).keyup(function (b) { l.SHIFT = b.shiftKey; l.ALT = b.altKey; l.META = b.metaKey || b.ctrlKey; var g = l.CANVAS_OVER; l.CANVAS_DRAGGING && (g = l.CANVAS_DRAGGING); g && g.keyup && (g.prehandleEvent(b), g.keyup(b)) })
    });
    return l
}(ChemDoodle.featureDetection, ChemDoodle.lib.jQuery, document);
(function (b, j, o, l, h, g, e, a, d, n) {
    b._Canvas = function () { }; var f = b._Canvas.prototype; f.molecules = void 0; f.shapes = void 0; f.emptyMessage = void 0; f.image = void 0; f.repaint = function () {
        if (!this.test) {
            var b = a.getElementById(this.id); if (b.getContext) {
                var d = b.getContext("2d"); 1 !== this.pixelRatio && b.width === this.width && (b.width = this.width * this.pixelRatio, b.height = this.height * this.pixelRatio, d.scale(this.pixelRatio, this.pixelRatio)); this.image ? d.drawImage(this.image, 0, 0) : (this.specs.backgroundColor && this.bgCache !==
                    b.style.backgroundColor && (b.style.backgroundColor = this.specs.backgroundColor, this.bgCache = b.style.backgroundColor), d.fillStyle = this.specs.backgroundColor, d.fillRect(0, 0, this.width, this.height)); if (this.innerRepaint) this.innerRepaint(d); else if (0 !== this.molecules.length || 0 !== this.shapes.length) {
                        d.save(); d.translate(this.width / 2, this.height / 2); d.rotate(this.specs.rotateAngle); d.scale(this.specs.scale, this.specs.scale); d.translate(-this.width / 2, -this.height / 2); for (var b = 0, e = this.molecules.length; b < e; b++)this.molecules[b].check(!0),
                            this.molecules[b].draw(d, this.specs); b = 0; for (e = this.shapes.length; b < e; b++)this.shapes[b].draw(d, this.specs); d.restore()
                    } else this.emptyMessage && (d.fillStyle = "#737683", d.textAlign = "center", d.textBaseline = "middle", d.font = "18px Helvetica, Verdana, Arial, Sans-serif", d.fillText(this.emptyMessage, this.width / 2, this.height / 2)); this.drawChildExtras && this.drawChildExtras(d)
            }
        }
    }; f.resize = function (a, d) {
        var e = g("#" + this.id); e.attr({ width: a, height: d }); e.css("width", a); e.css("height", d); this.width = a; this.height =
            d; if (b._Canvas3D && this instanceof b._Canvas3D) { var e = a, f = d; 1 !== this.pixelRatio && (e *= this.pixelRatio, f *= this.pixelRatio, this.gl.canvas.width = e, this.gl.canvas.height = f); this.gl.viewport(0, 0, e, f); this.afterLoadContent() } else if (0 < this.molecules.length) { this.center(); e = 0; for (f = this.molecules.length; e < f; e++)this.molecules[e].check() } this.repaint()
    }; f.setBackgroundImage = function (a) { this.image = new Image; var b = this; this.image.onload = function () { b.repaint() }; this.image.src = a }; f.loadMolecule = function (a) {
        this.clear();
        this.molecules.push(a); this.center(); b._Canvas3D && this instanceof b._Canvas3D || a.check(); this.afterLoadContent && this.afterLoadContent(); this.repaint()
    }; f.loadContent = function (a, d) { this.molecules = a ? a : []; this.shapes = d ? d : []; this.center(); if (!(b._Canvas3D && this instanceof b._Canvas3D)) for (var e = 0, f = this.molecules.length; e < f; e++)this.molecules[e].check(); this.afterLoadContent && this.afterLoadContent(); this.repaint() }; f.addMolecule = function (a) {
        this.molecules.push(a); b._Canvas3D && this instanceof b._Canvas3D ||
            a.check(); this.repaint()
    }; f.removeMolecule = function (a) { this.molecules = g.grep(this.molecules, function (b) { return b !== a }); this.repaint() }; f.getMolecule = function () { return 0 < this.molecules.length ? this.molecules[0] : void 0 }; f.getMolecules = function () { return this.molecules }; f.addShape = function (a) { this.shapes.push(a); this.repaint() }; f.removeShape = function (a) { this.shapes = g.grep(this.shapes, function (b) { return b !== a }); this.repaint() }; f.getShapes = function () { return this.shapes }; f.clear = function () {
        this.molecules =
        []; this.shapes = []; this.specs.scale = 1; this.repaint()
    }; f.center = function () {
        for (var a = this.getContentBounds(), b = new h.Point((this.width - a.minX - a.maxX) / 2, (this.height - a.minY - a.maxY) / 2), d = 0, f = this.molecules.length; d < f; d++)for (var g = this.molecules[d], j = 0, l = g.atoms.length; j < l; j++)g.atoms[j].add(b); d = 0; for (f = this.shapes.length; d < f; d++) { g = this.shapes[d].getPoints(); j = 0; for (l = g.length; j < l; j++)g[j].add(b) } this.specs.scale = 1; b = a.maxX - a.minX; a = a.maxY - a.minY; if (b > this.width || a > this.height) this.specs.scale = 0.85 *
            e.min(this.width / b, this.height / a)
    }; f.bondExists = function (a, b) { for (var d = 0, e = this.molecules.length; d < e; d++)for (var f = this.molecules[d], g = 0, h = f.bonds.length; g < h; g++) { var j = f.bonds[g]; if (j.contains(a) && j.contains(b)) return !0 } return !1 }; f.getBond = function (a, b) { for (var d = 0, e = this.molecules.length; d < e; d++)for (var f = this.molecules[d], g = 0, h = f.bonds.length; g < h; g++) { var j = f.bonds[g]; if (j.contains(a) && j.contains(b)) return j } }; f.getMoleculeByAtom = function (a) {
        for (var b = 0, d = this.molecules.length; b < d; b++) {
            var e =
                this.molecules[b]; if (-1 !== e.atoms.indexOf(a)) return e
        }
    }; f.getAllAtoms = function () { for (var a = [], b = 0, d = this.molecules.length; b < d; b++)a = a.concat(this.molecules[b].atoms); return a }; f.getAllPoints = function () { for (var a = [], b = 0, d = this.molecules.length; b < d; b++)a = a.concat(this.molecules[b].atoms); b = 0; for (d = this.shapes.length; b < d; b++)a = a.concat(this.shapes[b].getPoints()); return a }; f.getContentBounds = function () {
        for (var a = new o.Bounds, b = 0, d = this.molecules.length; b < d; b++)a.expand(this.molecules[b].getBounds());
        b = 0; for (d = this.shapes.length; b < d; b++)a.expand(this.shapes[b].getBounds()); return a
    }; f.create = function (f, p, o) {
        this.id = f; this.width = p; this.height = o; this.molecules = []; this.shapes = []; if (a.getElementById(f)) { var A = g("#" + f); p ? A.attr("width", p) : this.width = A.attr("width"); o ? A.attr("height", o) : this.height = A.attr("height"); A.attr("class", "ChemDoodleWebComponent") } else {
            if (!b.featureDetection.supports_canvas_text() && -1 != n.indexOf("MSIE")) {
                a.writeln('\x3cdiv style\x3d"border: 1px solid black;" width\x3d"' + p + '" height\x3d"' +
                    o + '"\x3ePlease install \x3ca href\x3d"http://code.google.com/chrome/chromeframe/"\x3eGoogle Chrome Frame\x3c/a\x3e, then restart Internet Explorer.\x3c/div\x3e'); return
            } a.writeln('\x3ccanvas class\x3d"ChemDoodleWebComponent" id\x3d"' + f + '" width\x3d"' + p + '" height\x3d"' + o + '" alt\x3d"ChemDoodle Web Component"\x3eThis browser does not support HTML5/Canvas.\x3c/canvas\x3e')
        } f = g("#" + f); f.css("width", this.width); f.css("height", this.height); this.pixelRatio = d.devicePixelRatio ? d.devicePixelRatio : 1; this.specs =
            new h.VisualSpecifications; var r = this; j.supports_touch() ? (f.bind("touchstart", function (a) {
                var b = (new Date).getTime(); if (!j.supports_gesture() && 2 === a.originalEvent.touches.length) { var d = a.originalEvent.touches, e = new h.Point(d[0].pageX, d[0].pageY), d = new h.Point(d[1].pageX, d[1].pageY); r.implementedGestureDist = e.distance(d); r.implementedGestureAngle = e.angle(d); r.gesturestart && (r.prehandleEvent(a), r.gesturestart(a)) } r.lastTouch && 1 === a.originalEvent.touches.length && 500 > b - r.lastTouch ? r.dbltap ? (r.prehandleEvent(a),
                    r.dbltap(a)) : r.dblclick ? (r.prehandleEvent(a), r.dblclick(a)) : r.touchstart ? (r.prehandleEvent(a), r.touchstart(a)) : r.mousedown && (r.prehandleEvent(a), r.mousedown(a)) : r.touchstart ? (r.prehandleEvent(a), r.touchstart(a), this.hold && clearTimeout(this.hold), this.touchhold && (this.hold = setTimeout(function () { r.touchhold(a) }, 1E3))) : r.mousedown && (r.prehandleEvent(a), r.mousedown(a)); r.lastTouch = b
            }), f.bind("touchmove", function (a) {
                this.hold && (clearTimeout(this.hold), this.hold = void 0); if (!j.supports_gesture() && 2 === a.originalEvent.touches.length &&
                    r.gesturechange) { var b = a.originalEvent.touches, d = new h.Point(b[0].pageX, b[0].pageY), f = new h.Point(b[1].pageX, b[1].pageY), b = d.distance(f), d = d.angle(f); a.originalEvent.scale = b / r.implementedGestureDist; a.originalEvent.rotation = 180 * (r.implementedGestureAngle - d) / e.PI; r.prehandleEvent(a); r.gesturechange(a) } if (1 < a.originalEvent.touches.length && r.multitouchmove) {
                        d = a.originalEvent.touches.length; r.prehandleEvent(a); b = new h.Point(-a.offset.left * d, -a.offset.top * d); for (f = 0; f < d; f++)b.x += a.originalEvent.changedTouches[f].pageX,
                            b.y += a.originalEvent.changedTouches[f].pageY; b.x /= d; b.y /= d; a.p = b; r.multitouchmove(a, d)
                    } else r.touchmove ? (r.prehandleEvent(a), r.touchmove(a)) : r.drag && (r.prehandleEvent(a), r.drag(a))
            }), f.bind("touchend", function (a) {
                this.hold && (clearTimeout(this.hold), this.hold = void 0); !j.supports_gesture() && r.implementedGestureDist && (r.implementedGestureDist = void 0, r.implementedGestureAngle = void 0, r.gestureend && (r.prehandleEvent(a), r.gestureend(a))); r.touchend ? (r.prehandleEvent(a), r.touchend(a)) : r.mouseup && (r.prehandleEvent(a),
                    r.mouseup(a)); 250 > (new Date).getTime() - r.lastTouch && (r.tap ? (r.prehandleEvent(a), r.tap(a)) : r.click && (r.prehandleEvent(a), r.click(a)))
            }), f.bind("gesturestart", function (a) { r.gesturestart && (r.prehandleEvent(a), r.gesturestart(a)) }), f.bind("gesturechange", function (a) { r.gesturechange && (r.prehandleEvent(a), r.gesturechange(a)) }), f.bind("gestureend", function (a) { r.gestureend && (r.prehandleEvent(a), r.gestureend(a)) })) : (f.click(function (a) {
                switch (a.which) {
                    case 1: r.click && (r.prehandleEvent(a), r.click(a)); break;
                    case 2: r.middleclick && (r.prehandleEvent(a), r.middleclick(a)); break; case 3: r.rightclick && (r.prehandleEvent(a), r.rightclick(a))
                }
            }), f.dblclick(function (a) { r.dblclick && (r.prehandleEvent(a), r.dblclick(a)) }), f.mousedown(function (a) { switch (a.which) { case 1: l.CANVAS_DRAGGING = r; r.mousedown && (r.prehandleEvent(a), r.mousedown(a)); break; case 2: r.middlemousedown && (r.prehandleEvent(a), r.middlemousedown(a)); break; case 3: r.rightmousedown && (r.prehandleEvent(a), r.rightmousedown(a)) } }), f.mousemove(function (a) {
                !l.CANVAS_DRAGGING &&
                r.mousemove && (r.prehandleEvent(a), r.mousemove(a))
            }), f.mouseout(function (a) { l.CANVAS_OVER = void 0; r.mouseout && (r.prehandleEvent(a), r.mouseout(a)) }), f.mouseover(function (a) { l.CANVAS_OVER = r; r.mouseover && (r.prehandleEvent(a), r.mouseover(a)) }), f.mouseup(function (a) { switch (a.which) { case 1: r.mouseup && (r.prehandleEvent(a), r.mouseup(a)); break; case 2: r.middlemouseup && (r.prehandleEvent(a), r.middlemouseup(a)); break; case 3: r.rightmouseup && (r.prehandleEvent(a), r.rightmouseup(a)) } }), f.mousewheel(function (a, b) {
                r.mousewheel &&
                (r.prehandleEvent(a), r.mousewheel(a, b))
            })); this.subCreate && this.subCreate()
    }; f.prehandleEvent = function (a) { a.originalEvent.changedTouches && (a.pageX = a.originalEvent.changedTouches[0].pageX, a.pageY = a.originalEvent.changedTouches[0].pageY); a.preventDefault(); a.offset = g("#" + this.id).offset(); a.p = new h.Point(a.pageX - a.offset.left, a.pageY - a.offset.top) }
})(ChemDoodle, ChemDoodle.featureDetection, ChemDoodle.math, ChemDoodle.monitor, ChemDoodle.structures, ChemDoodle.lib.jQuery, Math, document, window, navigator.userAgent);
(function (b, j) {
    b._AnimatorCanvas = function (b, h, g) { b && this.create(b, h, g) }; var o = b._AnimatorCanvas.prototype = new b._Canvas; o.timeout = 33; o.startAnimation = function () { this.stopAnimation(); this.lastTime = (new Date).getTime(); var b = this; this.nextFrame && (this.handle = j.requestInterval(function () { var h = (new Date).getTime(); b.nextFrame(h - b.lastTime); b.repaint(); b.lastTime = h }, this.timeout)) }; o.stopAnimation = function () { this.handle && (j.clearRequestInterval(this.handle), this.handle = void 0) }; o.isRunning = function () {
        return void 0 !==
            this.handle
    }
})(ChemDoodle, ChemDoodle.animations);
(function (b, j) {
    b.FileCanvas = function (b, l, h, g) {
        b && this.create(b, l, h); j.writeln('\x3cbr\x3e\x3cform name\x3d"FileForm" enctype\x3d"multipart/form-data" method\x3d"POST" action\x3d"' + g + '" target\x3d"HiddenFileFrame"\x3e\x3cinput type\x3d"file" name\x3d"f" /\x3e\x3cinput type\x3d"submit" name\x3d"submitbutton" value\x3d"Show File" /\x3e\x3c/form\x3e\x3ciframe id\x3d"HFF-' + b + '" name\x3d"HiddenFileFrame" height\x3d"0" width\x3d"0" style\x3d"display:none;" onLoad\x3d"GetMolFromFrame(\'HFF-' + b + "', " + b + ')"\x3e\x3c/iframe\x3e');
        this.emptyMessage = "Click below to load file"; this.repaint()
    }; b.FileCanvas.prototype = new b._Canvas
})(ChemDoodle, document);
(function (b) {
    b.HyperlinkCanvas = function (b, o, l, h, g, e) { b && this.create(b, o, l); this.urlOrFunction = h; this.color = g ? g : "blue"; this.size = e ? e : 2 }; b = b.HyperlinkCanvas.prototype = new b._Canvas; b.openInNewWindow = !0; b.hoverImage = void 0; b.drawChildExtras = function (b) { this.e && (this.hoverImage ? b.drawImage(this.hoverImage, 0, 0) : (b.strokeStyle = this.color, b.lineWidth = 2 * this.size, b.strokeRect(0, 0, this.width, this.height))) }; b.setHoverImage = function (b) { this.hoverImage = new Image; this.hoverImage.src = b }; b.click = function () {
        this.e =
        void 0; this.repaint(); this.urlOrFunction instanceof Function ? this.urlOrFunction() : this.openInNewWindow ? window.open(this.urlOrFunction) : location.href = this.urlOrFunction
    }; b.mouseout = function () { this.e = void 0; this.repaint() }; b.mouseover = function (b) { this.e = b; this.repaint() }
})(ChemDoodle);
(function (b, j, o, l) {
    b.MolGrabberCanvas = function (b, g, e) {
        b && this.create(b, g, e); g = []; g.push('\x3cbr\x3e\x3cinput type\x3d"text" id\x3d"'); g.push(b); g.push('_query" size\x3d"32" value\x3d"" /\x3e'); g.push("\x3cbr\x3e\x3cnobr\x3e"); g.push('\x3cselect id\x3d"'); g.push(b); g.push('_select"\x3e'); g.push('\x3coption value\x3d"chemexper"\x3eChemExper'); g.push('\x3coption value\x3d"chemspider"\x3eChemSpider'); g.push('\x3coption value\x3d"pubchem" selected\x3ePubChem'); g.push("\x3c/select\x3e"); g.push('\x3cbutton id\x3d"');
        g.push(b); g.push('_submit"\x3eShow Molecule\x3c/button\x3e'); g.push("\x3c/nobr\x3e"); l.getElementById(b); o("#" + b).after(g.join("")); var a = this; o("#" + b + "_submit").click(function () { a.search() }); o("#" + b + "_query").keypress(function (b) { 13 === b.which && a.search() }); this.emptyMessage = "Enter search term below"; this.repaint()
    }; b = b.MolGrabberCanvas.prototype = new b._Canvas; b.setSearchTerm = function (b) { o("#" + this.id + "_query").val(b); this.search() }; b.search = function () {
        this.emptyMessage = "Searching..."; this.clear();
        var b = this; j.getMoleculeFromDatabase(o("#" + this.id + "_query").val(), { database: o("#" + this.id + "_select").val() }, function (g) { b.loadMolecule(g) })
    }
})(ChemDoodle, ChemDoodle.iChemLabs, ChemDoodle.lib.jQuery, document);
(function (b, j, o) {
    var l = [], h = [1, 0, 0], g = [0, 1, 0], e = [0, 0, 1]; b.RotatorCanvas = function (a, b, e, f) { a && this.create(a, b, e); this.rotate3D = f }; b = b.RotatorCanvas.prototype = new b._AnimatorCanvas; j = j.PI / 15; b.xIncrement = j; b.yIncrement = j; b.zIncrement = j; b.nextFrame = function (a) {
        if (0 === this.molecules.length && 0 === this.shapes.length) this.stopAnimation(); else if (a /= 1E3, this.rotate3D) {
            o.identity(l); o.rotate(l, this.xIncrement * a, h); o.rotate(l, this.yIncrement * a, g); o.rotate(l, this.zIncrement * a, e); a = 0; for (var b = this.molecules.length; a <
                b; a++) { for (var j = this.molecules[a], f = 0, y = j.atoms.length; f < y; f++) { var p = j.atoms[f], q = [p.x - this.width / 2, p.y - this.height / 2, p.z]; o.multiplyVec3(l, q); p.x = q[0] + this.width / 2; p.y = q[1] + this.height / 2; p.z = q[2] } f = 0; for (y = j.rings.length; f < y; f++)j.rings[f].center = j.rings[f].getCenter(); this.specs.atoms_display && this.specs.atoms_circles_2D && j.sortAtomsByZ(); this.specs.bonds_display && this.specs.bonds_clearOverlaps_2D && j.sortBondsByZ() } a = 0; for (b = this.shapes.length; a < b; a++) {
                    j = this.shapes[a].getPoints(); f = 0; for (y = j.length; f <
                        y; f++)p = j[f], q = [p.x - this.width / 2, p.y - this.height / 2, 0], o.multiplyVec3(l, q), p.x = q[0] + this.width / 2, p.y = q[1] + this.height / 2
                }
        } else this.specs.rotateAngle += this.zIncrement * a
    }; b.dblclick = function () { this.isRunning() ? this.stopAnimation() : this.startAnimation() }
})(ChemDoodle, Math, ChemDoodle.lib.mat4);
(function (b, j, o) {
    b.SlideshowCanvas = function (b, h, g) { b && this.create(b, h, g) }; b = b.SlideshowCanvas.prototype = new b._AnimatorCanvas; b.frames = []; b.curIndex = 0; b.timeout = 5E3; b.alpha = 0; b.innerHandle = void 0; b.phase = 0; b.drawChildExtras = function (b) { var h = o.getRGB(this.specs.backgroundColor, 255); b.fillStyle = "rgba(" + h[0] + ", " + h[1] + ", " + h[2] + ", " + this.alpha + ")"; b.fillRect(0, 0, this.width, this.height) }; b.nextFrame = function () {
        if (0 === this.frames.length) this.stopAnimation(); else {
            this.phase = 0; var b = this, h = 1; this.innerHandle =
                setInterval(function () { b.alpha = h / 15; b.repaint(); 15 === h && b.breakInnerHandle(); h++ }, 33)
        }
    }; b.breakInnerHandle = function () {
        this.innerHandle && (clearInterval(this.innerHandle), this.innerHandle = void 0); if (0 === this.phase) { this.curIndex++; this.curIndex > this.frames.length - 1 && (this.curIndex = 0); this.alpha = 1; var b = this.frames[this.curIndex]; this.loadContent(b.mols, b.shapes); this.phase = 1; var h = this, g = 1; this.innerHandle = setInterval(function () { h.alpha = (15 - g) / 15; h.repaint(); 15 === g && h.breakInnerHandle(); g++ }, 33) } else 1 ===
            this.phase && (this.alpha = 0, this.repaint())
    }; b.addFrame = function (b, h) { 0 === this.frames.length && this.loadContent(b, h); this.frames.push({ mols: b, shapes: h }) }
})(ChemDoodle, ChemDoodle.animations, ChemDoodle.math);
(function (b, j, o, l, h) {
    b.TransformCanvas = function (b, e, a, d) { b && this.create(b, e, a); this.rotate3D = d }; b = b.TransformCanvas.prototype = new b._Canvas; b.lastPoint = void 0; b.rotationMultMod = 1.3; b.lastPinchScale = 1; b.lastGestureRotate = 0; b.mousedown = function (b) { this.lastPoint = b.p }; b.dblclick = function () { this.center(); this.repaint() }; b.drag = function (b) {
        if (!this.lastPoint.multi) {
            if (j.ALT) {
                var e = new o.Point(b.p.x, b.p.y); e.sub(this.lastPoint); for (var a = 0, d = this.molecules.length; a < d; a++) {
                    for (var n = this.molecules[a], f =
                        0, y = n.atoms.length; f < y; f++)n.atoms[f].add(e); n.check()
                } a = 0; for (d = this.shapes.length; a < d; a++) { n = this.shapes[a].getPoints(); f = 0; for (y = n.length; f < y; f++)n[f].add(e) } this.lastPoint = b.p
            } else if (!0 === this.rotate3D) {
                y = l.max(this.width / 4, this.height / 4); f = (b.p.x - this.lastPoint.x) / y * this.rotationMultMod; y = -(b.p.y - this.lastPoint.y) / y * this.rotationMultMod; e = []; h.identity(e); h.rotate(e, y, [1, 0, 0]); h.rotate(e, f, [0, 1, 0]); a = 0; for (d = this.molecules.length; a < d; a++) {
                    n = this.molecules[a]; f = 0; for (y = n.atoms.length; f < y; f++)a =
                        n.atoms[f], d = [a.x - this.width / 2, a.y - this.height / 2, a.z], h.multiplyVec3(e, d), a.x = d[0] + this.width / 2, a.y = d[1] + this.height / 2, a.z = d[2]; a = 0; for (d = n.rings.length; a < d; a++)n.rings[a].center = n.rings[a].getCenter(); this.lastPoint = b.p; this.specs.atoms_display && this.specs.atoms_circles_2D && n.sortAtomsByZ(); this.specs.bonds_display && this.specs.bonds_clearOverlaps_2D && n.sortBondsByZ()
                }
            } else y = new o.Point(this.width / 2, this.height / 2), f = y.angle(this.lastPoint), y = y.angle(b.p), this.specs.rotateAngle -= y - f, this.lastPoint =
                b.p; this.repaint()
        }
    }; b.mousewheel = function (b, e) { this.specs.scale += e / 50; 0.01 > this.specs.scale && (this.specs.scale = 0.01); this.repaint() }; b.multitouchmove = function (b, e) {
        if (2 === e) if (this.lastPoint.multi) {
            var a = new o.Point(b.p.x, b.p.y); a.sub(this.lastPoint); for (var d = 0, h = this.molecules.length; d < h; d++) { for (var f = this.molecules[d], j = 0, l = f.atoms.length; j < l; j++)f.atoms[j].add(a); f.check() } d = 0; for (h = this.shapes.length; d < h; d++) { f = this.shapes[d].getPoints(); j = 0; for (l = f.length; j < l; j++)f[j].add(a) } this.lastPoint =
                b.p; this.lastPoint.multi = !0; this.repaint()
        } else this.lastPoint = b.p, this.lastPoint.multi = !0
    }; b.gesturechange = function (b) {
        0 !== b.originalEvent.scale - this.lastPinchScale && (this.specs.scale *= b.originalEvent.scale / this.lastPinchScale, 0.01 > this.specs.scale && (this.specs.scale = 0.01), this.lastPinchScale = b.originalEvent.scale); if (0 !== this.lastGestureRotate - b.originalEvent.rotation) {
            for (var e = (this.lastGestureRotate - b.originalEvent.rotation) / 180 * l.PI, a = new o.Point(this.width / 2, this.height / 2), d = 0, h = this.molecules.length; d <
                h; d++) { for (var f = this.molecules[d], j = 0, p = f.atoms.length; j < p; j++) { var q = f.atoms[j], A = a.distance(q), r = a.angle(q) + e; q.x = a.x + A * l.cos(r); q.y = a.y - A * l.sin(r) } f.check() } this.lastGestureRotate = b.originalEvent.rotation
        } this.repaint()
    }; b.gestureend = function () { this.lastPinchScale = 1; this.lastGestureRotate = 0 }
})(ChemDoodle, ChemDoodle.monitor, ChemDoodle.structures, Math, ChemDoodle.lib.mat4); (function (b) { b.ViewerCanvas = function (b, o, l) { b && this.create(b, o, l) }; b.ViewerCanvas.prototype = new b._Canvas })(ChemDoodle);
(function (b) {
    b._SpectrumCanvas = function (b, o, l) { b && this.create(b, o, l) }; b = b._SpectrumCanvas.prototype = new b._Canvas; b.spectrum = void 0; b.emptyMessage = "No Spectrum Loaded or Recognized"; b.loadMolecule = void 0; b.getMolecule = void 0; b.innerRepaint = function (b) {
        this.spectrum && 0 < this.spectrum.data.length ? this.spectrum.draw(b, this.specs, this.width, this.height) : this.emptyMessage && (b.fillStyle = "#737683", b.textAlign = "center", b.textBaseline = "middle", b.font = "18px Helvetica, Verdana, Arial, Sans-serif", b.fillText(this.emptyMessage,
            this.width / 2, this.height / 2))
    }; b.loadSpectrum = function (b) { this.spectrum = b; this.repaint() }; b.getSpectrum = function () { return this.spectrum }; b.getSpectrumCoordinates = function (b, o) { return spectrum.getInternalCoordinates(b, o, this.width, this.height) }
})(ChemDoodle, document); (function (b) { b.ObserverCanvas = function (b, o, l) { b && this.create(b, o, l) }; b.ObserverCanvas.prototype = new b._SpectrumCanvas })(ChemDoodle);
(function (b) {
    b.OverlayCanvas = function (b, o, l) { b && this.create(b, o, l) }; b = b.OverlayCanvas.prototype = new b._SpectrumCanvas; b.overlaySpectra = []; b.superRepaint = b.innerRepaint; b.innerRepaint = function (b) {
        this.superRepaint(b); if (this.spectrum && 0 < this.spectrum.data.length) for (var o = 0, l = this.overlaySpectra.length; o < l; o++) {
            var h = this.overlaySpectra[o]; h && 0 < h.data.length && (h.minX = this.spectrum.minX, h.maxX = this.spectrum.maxX, h.drawPlot(b, this.specs, this.width, this.height, this.spectrum.memory.offsetTop, this.spectrum.memory.offsetLeft,
                this.spectrum.memory.offsetBottom))
        }
    }; b.addSpectrum = function (b) { this.spectrum ? this.overlaySpectra.push(b) : this.spectrum = b }
})(ChemDoodle);
(function (b, j, o) {
    b.PerspectiveCanvas = function (b, g, e) { b && this.create(b, g, e) }; var l = b.PerspectiveCanvas.prototype = new b._SpectrumCanvas; l.dragRange = void 0; l.rescaleYAxisOnZoom = !0; l.lastPinchScale = 1; l.mousedown = function (h) { this.dragRange = new b.structures.Point(h.p.x, h.p.x) }; l.mouseup = function (b) {
        this.dragRange && this.dragRange.x !== this.dragRange.y && (this.dragRange.multi || (b = this.spectrum.zoom(this.dragRange.x, b.p.x, this.width, this.rescaleYAxisOnZoom), this.rescaleYAxisOnZoom && (this.specs.scale = b)), this.dragRange =
            void 0, this.repaint())
    }; l.drag = function (b) { this.dragRange && (this.dragRange.multi ? this.dragRange = void 0 : (j.SHIFT && (this.spectrum.translate(b.p.x - this.dragRange.x, this.width), this.dragRange.x = b.p.x), this.dragRange.y = b.p.x), this.repaint()) }; l.drawChildExtras = function (b) {
        if (this.dragRange) {
            var g = o.min(this.dragRange.x, this.dragRange.y), e = o.max(this.dragRange.x, this.dragRange.y); b.strokeStyle = "gray"; b.lineStyle = 1; b.beginPath(); for (b.moveTo(g, this.height / 2); g <= e; g++)5 > g % 10 ? b.lineTo(g, o.round(this.height /
                2)) : b.moveTo(g, o.round(this.height / 2)); b.stroke()
        }
    }; l.mousewheel = function (b, g) { this.specs.scale += g / 10; 0.01 > this.specs.scale && (this.specs.scale = 0.01); this.repaint() }; l.dblclick = function () { this.spectrum.setup(); this.specs.scale = 1; this.repaint() }; l.multitouchmove = function (h, g) {
        2 === g && (!this.dragRange || !this.dragRange.multi ? (this.dragRange = new b.structures.Point(h.p.x, h.p.x), this.dragRange.multi = !0) : (this.spectrum.translate(h.p.x - this.dragRange.x, this.width), this.dragRange.x = h.p.x, this.dragRange.y = h.p.x,
            this.repaint()))
    }; l.gesturechange = function (b) { this.specs.scale *= b.originalEvent.scale / this.lastPinchScale; 0.01 > this.specs.scale && (this.specs.scale = 0.01); this.lastPinchScale = b.originalEvent.scale; this.repaint() }; l.gestureend = function () { this.lastPinchScale = 1 }
})(ChemDoodle, ChemDoodle.monitor, Math);
(function (b, j, o) {
    b.SeekerCanvas = function (b, g, e, a) { b && this.create(b, g, e); this.seekType = a }; var l = b.SeekerCanvas.prototype = new b._SpectrumCanvas; l.superRepaint = l.innerRepaint; l.innerRepaint = function (h) {
        this.superRepaint(h); if (this.spectrum && 0 < this.spectrum.data.length && this.p) {
            var g, e; if (this.seekType === b.SeekerCanvas.SEEK_POINTER) g = this.p, e = this.spectrum.getInternalCoordinates(g.x, g.y); else if (this.seekType === b.SeekerCanvas.SEEK_PLOT || this.seekType === b.SeekerCanvas.SEEK_PEAK) {
                e = this.seekType === b.SeekerCanvas.SEEK_PLOT ?
                    this.spectrum.getClosestPlotInternalCoordinates(this.p.x) : this.spectrum.getClosestPeakInternalCoordinates(this.p.x); if (!e) return; g = { x: this.spectrum.getTransformedX(e.x, this.specs, this.width, this.spectrum.memory.offsetLeft), y: this.spectrum.getTransformedY(e.y / 100, this.specs, this.height, this.spectrum.memory.offsetBottom, this.spectrum.memory.offsetTop) }
            } h.fillStyle = "white"; h.strokeStyle = this.specs.plots_color; h.lineWidth = this.specs.plots_width; h.beginPath(); h.arc(g.x, g.y, 3, 0, 2 * o.PI, !1); h.fill(); h.stroke();
            h.font = j.getFontString(this.specs.text_font_size, this.specs.text_font_families); h.textAlign = "left"; h.textBaseline = "bottom"; e = "x:" + e.x.toFixed(3) + ", y:" + e.y.toFixed(3); var a = g.x + 3, d = h.measureText(e).width; a + d > this.width - 2 && (a -= 6 + d); g = g.y; 0 > g - this.specs.text_font_size - 2 && (g += this.specs.text_font_size); h.fillRect(a, g - this.specs.text_font_size, d, this.specs.text_font_size); h.fillStyle = "black"; h.fillText(e, a, g)
        }
    }; l.mouseout = function () { this.p = void 0; this.repaint() }; l.mousemove = function (b) {
        this.p = {
            x: b.p.x -
                2, y: b.p.y - 3
        }; this.repaint()
    }; l.touchstart = function (b) { this.mousemove(b) }; l.touchmove = function (b) { this.mousemove(b) }; l.touchend = function (b) { this.mouseout(b) }; b.SeekerCanvas.SEEK_POINTER = "pointer"; b.SeekerCanvas.SEEK_PLOT = "plot"; b.SeekerCanvas.SEEK_PEAK = "peak"
})(ChemDoodle, ChemDoodle.extensions, Math);
(function (b, j, o, l, h, g, e, a, d, n, f, y) {
    b._Canvas3D = function (a, b, d) { a && this.create(a, b, d) }; var p = b._Canvas3D.prototype = new b._Canvas; p.rotationMatrix = void 0; p.translationMatrix = void 0; p.lastPoint = void 0; p.emptyMessage = "WebGL is Unavailable!"; p.lastPinchScale = 1; p.lastGestureRotate = 0; p.afterLoadContent = function () {
        for (var a = new o.Bounds, b = 0, g = this.molecules.length; b < g; b++)a.expand(this.molecules[b].getBounds3D()); var h = f.dist([a.maxX, a.maxY, a.maxZ], [a.minX, a.minY, a.minZ]) / 2 + 1.5; Infinity === h && (h = 10); b = 45;
        g = Math.tan(b / 360 * Math.PI) / 0.8; this.depth = h / g; var g = e.max(this.depth - h, 0.1), h = this.depth + h, j = this.gl.canvas.clientWidth / this.gl.canvas.clientHeight; 1 > j && (b /= j); this.specs.projectionOrthoWidth_3D = 2 * (Math.tan(b / 360 * Math.PI) * this.depth) * j; this.specs.projectionPerspectiveVerticalFieldOfView_3D = b; this.specs.projectionFrontCulling_3D = g; this.specs.projectionBackCulling_3D = h; this.specs.projectionWidthHeightRatio_3D = j; this.translationMatrix = d.translate(d.identity([]), [0, 0, -this.depth]); this.maxDimension = e.max(a.maxX -
            a.minX, a.maxY - a.minY); this.setupScene()
    }; p.setViewDistance = function (a) { this.specs.projectionPerspectiveVerticalFieldOfView_3D = o.clamp(this.specs.projectionPerspectiveVerticalFieldOfView_3D / a, 0.1, 179.9); this.specs.projectionOrthoWidth_3D = 2 * (e.tan(this.specs.projectionPerspectiveVerticalFieldOfView_3D / 360 * Math.PI) * this.depth) * this.specs.projectionWidthHeightRatio_3D; this.updateScene() }; p.repaint = function () {
        if (this.gl) {
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT); this.gl.modelViewMatrix =
                d.multiply(this.translationMatrix, this.rotationMatrix, []); this.gl.rotationMatrix = this.rotationMatrix; var a = this.gl.getUniformLocation(this.gl.program, "u_projection_matrix"); this.gl.uniformMatrix4fv(a, !1, this.gl.projectionMatrix); this.gl.fogging.setMode(this.specs.fog_mode_3D); for (var b = 0, e = this.molecules.length; b < e; b++)this.molecules[b].render(this.gl, this.specs); b = 0; for (e = this.shapes.length; b < e; b++)this.shapes[b].render(this.gl, this.specs); this.specs.compass_display && (this.gl.uniformMatrix4fv(a,
                    !1, this.compass.projectionMatrix), this.compass.render(this.gl, this.specs), this.gl.setMatrixUniforms(this.gl.modelViewMatrix), this.gl.uniformMatrix4fv(a, !1, this.gl.projectionMatrix)); this.gl.enable(this.gl.BLEND); this.gl.depthMask(!1); this.gl.enableVertexAttribArray(this.gl.shader.vertexTexCoordAttribute); this.specs.atoms_displayLabels_3D && this.label3D.render(this.gl, this.specs, this.getMolecules()); this.specs.compass_display && this.specs.compass_displayText_3D && (this.gl.uniformMatrix4fv(a, !1, this.compass.projectionMatrix),
                        this.compass.renderAxis(this.gl), this.gl.setMatrixUniforms(this.gl.modelViewMatrix), this.gl.uniformMatrix4fv(a, !1, this.gl.projectionMatrix)); this.gl.disableVertexAttribArray(this.gl.shader.vertexTexCoordAttribute); this.gl.disable(this.gl.BLEND); this.gl.depthMask(!0); this.gl.disable(this.gl.DEPTH_TEST); this.drawChildExtras && this.drawChildExtras(this.gl); this.gl.enable(this.gl.DEPTH_TEST); this.gl.flush()
        }
    }; p.pick = function (a, b, e, f) {
        if (this.gl) {
            d.multiply(this.translationMatrix, this.rotationMatrix, this.gl.modelViewMatrix);
            this.gl.rotationMatrix = this.rotationMatrix; var g = this.gl.getUniformLocation(this.gl.program, "u_projection_matrix"); this.gl.uniformMatrix4fv(g, !1, this.gl.projectionMatrix); b = this.height - b; 1 !== this.pixelRatio && (a *= this.pixelRatio, b *= this.pixelRatio); return this.picker.pick(this.gl, this.molecules, this.specs, a, b, e, f)
        }
    }; p.center = function () {
        for (var a = new l.Atom, b = 0, d = this.molecules.length; b < d; b++) { var e = this.molecules[b]; a.add3D(e.getCenter3D()) } a.x /= this.molecules.length; a.y /= this.molecules.length; b = 0;
        for (d = this.molecules.length; b < d; b++) { for (var e = this.molecules[b], f = 0, g = e.atoms.length; f < g; f++)e.atoms[f].sub3D(a); if (e.chains && e.fromJSON) { f = 0; for (g = e.chains.length; f < g; f++)for (var h = e.chains[f], j = 0, n = h.length; j < n; j++) { var c = h[j]; c.cp1.sub3D(a); c.cp2.sub3D(a); c.cp3 && (c.cp3.sub3D(a), c.cp4.sub3D(a), c.cp5.sub3D(a)) } } }
    }; p.subCreate = function () {
        try { var b = a.getElementById(this.id); this.gl = b.getContext("webgl"); this.gl || (this.gl = b.getContext("experimental-webgl")) } catch (e) { } this.gl ? (1 !== this.pixelRatio &&
            this.gl.canvas.width === this.width && (this.gl.canvas.style.width = this.width + "px", this.gl.canvas.style.height = this.height + "px", this.gl.canvas.width = this.width * this.pixelRatio, this.gl.canvas.height = this.height * this.pixelRatio), this.rotationMatrix = d.identity([]), this.translationMatrix = d.identity([]), this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.gl.program = this.gl.createProgram(), this.gl.shader = new h.Shader, this.gl.shader.init(this.gl), this.gl.programLabel = this.gl.createProgram(),
            this.setupScene()) : this.displayMessage()
    }; b._Canvas.prototype.displayMessage = function () { var b = a.getElementById(this.id); b.getContext && (b = b.getContext("2d"), this.specs.backgroundColor && (b.fillStyle = this.specs.backgroundColor, b.fillRect(0, 0, this.width, this.height)), this.emptyMessage && (b.fillStyle = "#737683", b.textAlign = "center", b.textBaseline = "middle", b.font = "18px Helvetica, Verdana, Arial, Sans-serif", b.fillText(this.emptyMessage, this.width / 2, this.height / 2))) }; p.renderText = function (a, b) {
        if (this.gl) {
            var d =
                { position: [], texCoord: [], translation: [] }; this.gl.textImage.pushVertexData(a, b, 0, d); this.gl.textMesh.storeData(this.gl, d.position, d.texCoord, d.translation); this.gl.enable(this.gl.BLEND); this.gl.depthMask(!1); this.gl.enableVertexAttribArray(this.gl.shader.vertexTexCoordAttribute); this.gl.textImage.useTexture(this.gl); this.gl.textMesh.render(this.gl); this.gl.disableVertexAttribArray(this.gl.shader.vertexTexCoordAttribute); this.gl.disable(this.gl.BLEND); this.gl.depthMask(!0)
        }
    }; p.setupScene = function () {
        if (this.gl) {
            y("#" +
                this.id).css("background-color", this.specs.backgroundColor); var a = o.getRGB(this.specs.backgroundColor, 1); this.gl.clearColor(a[0], a[1], a[2], 1); this.gl.clearDepth(1); this.gl.enable(this.gl.DEPTH_TEST); this.gl.depthFunc(this.gl.LEQUAL); this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA); this.specs.cullBackFace_3D ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE); this.gl.sphereBuffer = new h.Sphere(1, this.specs.atoms_resolution_3D,
                    this.specs.atoms_resolution_3D); this.gl.starBuffer = new h.Star; this.gl.cylinderBuffer = new h.Cylinder(1, 1, this.specs.bonds_resolution_3D); this.gl.cylinderClosedBuffer = new h.Cylinder(1, 1, this.specs.bonds_resolution_3D, !0); this.gl.boxBuffer = new h.Box(1, 1, 1); this.gl.pillBuffer = new h.Pill(this.specs.bonds_pillDiameter_3D / 2, this.specs.bonds_pillHeight_3D, this.specs.bonds_pillLatitudeResolution_3D, this.specs.bonds_pillLongitudeResolution_3D); this.gl.lineBuffer = new h.Line; this.gl.lineArrowBuffer = new h.LineArrow;
            this.gl.arrowBuffer = new h.Arrow(0.3, this.specs.compass_resolution_3D); this.gl.textMesh = new h.TextMesh; this.gl.textMesh.init(this.gl); this.gl.textImage = new h.TextImage; this.gl.textImage.init(this.gl); this.gl.textImage.updateFont(this.gl, this.specs.text_font_size, this.specs.text_font_families, this.specs.text_font_bold, this.specs.text_font_italic, this.specs.text_font_stroke_3D); this.label3D = new h.Label; this.label3D.init(this.gl, this.specs); for (var p = 0, r = this.molecules.length; p < r; p++)if (a = this.molecules[p],
                a.labelMesh instanceof h.TextMesh || (a.labelMesh = new h.TextMesh, a.labelMesh.init(this.gl)), a.chains) {
                    a.ribbons = []; a.cartoons = []; a.tubes = []; a.pipePlanks = []; for (var v = 0, u = a.chains.length; v < u; v++) {
                        var t = a.chains[v], w = 2 < t.length && g[t[2].name] && "#BEA06E" === g[t[2].name].aminoColor; if (0 < t.length && !t[0].lineSegments) {
                            for (var x = 0, B = t.length - 1; x < B; x++)t[x].setup(t[x + 1].cp1, w ? 1 : this.specs.proteins_horizontalResolution); if (!w) {
                                x = 1; for (B = t.length - 1; x < B; x++)j.vec3AngleFrom(t[x - 1].D, t[x].D) > e.PI / 2 && (t[x].guidePointsSmall.reverse(),
                                    t[x].guidePointsLarge.reverse(), f.scale(t[x].D, -1))
                            } x = 2; for (B = t.length - 3; x < B; x++)t[x].computeLineSegments(t[x - 2], t[x - 1], t[x + 1], !w, w ? this.specs.nucleics_verticalResolution : this.specs.proteins_verticalResolution); t.pop(); t.pop(); t.pop(); t.shift(); t.shift()
                        } x = o.hsl2rgb(1 === u ? 0.5 : v / u, 1, 0.5); x = "rgb(" + x[0] + "," + x[1] + "," + x[2] + ")"; t.chainColor = x; w ? (w = new h.Tube(t, this.specs.nucleics_tubeThickness, this.specs.nucleics_tubeResolution_3D), w.chainColor = x, a.tubes.push(w)) : (w = new h.PipePlank(t, this.specs), a.pipePlanks.push(w),
                            w = t.shift(), B = { front: new h.Ribbon(t, this.specs.proteins_ribbonThickness, !1), back: new h.Ribbon(t, -this.specs.proteins_ribbonThickness, !1) }, B.front.chainColor = x, B.back.chainColor = x, a.ribbons.push(B), B = { front: new h.Ribbon(t, this.specs.proteins_ribbonThickness, !0), back: new h.Ribbon(t, -this.specs.proteins_ribbonThickness, !0) }, B.front.chainColor = x, B.back.chainColor = x, a.cartoons.push(B), t.unshift(w))
                    }
            } this.label3D.updateVerticesBuffer(this.gl, this.getMolecules(), this.specs); if (this instanceof b.MovieCanvas3D &&
                this.frames) { x = 0; for (B = this.frames.length; x < B; x++) { p = this.frames[x]; v = 0; for (u = p.mols.length; v < u; v++)a = p.mols[v], a.labelMesh instanceof l.d3.TextMesh || (a.labelMesh = new l.d3.TextMesh, a.labelMesh.init(this.gl)); this.label3D.updateVerticesBuffer(this.gl, p.mols, this.specs) } } this.gl.lighting = new h.Light(this.specs.lightDiffuseColor_3D, this.specs.lightSpecularColor_3D, this.specs.lightDirection_3D); this.gl.lighting.lightScene(this.gl); this.gl.material = new h.Material(this.gl); this.gl.fogging = new h.Fog(this.gl);
            this.gl.fogging.setTempParameter(this.specs.fog_color_3D || this.specs.backgroundColor, this.specs.fog_start_3D, this.specs.fog_end_3D, this.specs.fog_density_3D); this.compass = new h.Compass(this.gl, this.specs); a = this.width / this.height; this.specs.projectionWidthHeightRatio_3D && (a = this.specs.projectionWidthHeightRatio_3D); this.gl.projectionMatrix = this.specs.projectionPerspective_3D ? d.perspective(this.specs.projectionPerspectiveVerticalFieldOfView_3D, a, this.specs.projectionFrontCulling_3D, this.specs.projectionBackCulling_3D) :
                d.ortho(-this.specs.projectionOrthoWidth_3D / 2, this.specs.projectionOrthoWidth_3D / 2, -this.specs.projectionOrthoWidth_3D / 2 / a, this.specs.projectionOrthoWidth_3D / 2 / a, this.specs.projectionFrontCulling_3D, this.specs.projectionBackCulling_3D); a = this.gl.getUniformLocation(this.gl.program, "u_projection_matrix"); this.gl.uniformMatrix4fv(a, !1, this.gl.projectionMatrix); var c = this.gl.getUniformLocation(this.gl.program, "u_model_view_matrix"), k = this.gl.getUniformLocation(this.gl.program, "u_normal_matrix"); this.gl.setMatrixUniforms =
                    function (a) { this.uniformMatrix4fv(c, !1, a); a = n.transpose(d.toInverseMat3(a, [])); this.uniformMatrix3fv(k, !1, a) }; v = this.gl.getUniformLocation(this.gl.program, "u_dimension"); this.gl.uniformMatrix4fv(a, !1, this.gl.projectionMatrix); this.gl.uniform2f(v, this.gl.canvas.clientWidth, this.gl.canvas.clientHeight); this.picker = new h.Picker; this.picker.init(this.gl); this.picker.setDimension(this.gl, this.gl.canvas.width, this.gl.canvas.height)
        }
    }; p.updateScene = function () {
        this.gl.fogging.setTempParameter(this.specs.fog_color_3D ||
            this.specs.backgroundColor, this.specs.fog_start_3D, this.specs.fog_end_3D, this.specs.fog_density_3D); var a = this.width / this.height; this.specs.projectionWidthHeightRatio_3D && (a = this.specs.projectionWidthHeightRatio_3D); this.gl.projectionMatrix = this.specs.projectionPerspective_3D ? d.perspective(this.specs.projectionPerspectiveVerticalFieldOfView_3D, a, this.specs.projectionFrontCulling_3D, this.specs.projectionBackCulling_3D) : d.ortho(-this.specs.projectionOrthoWidth_3D / 2, this.specs.projectionOrthoWidth_3D /
                2, -this.specs.projectionOrthoWidth_3D / 2 / a, this.specs.projectionOrthoWidth_3D / 2 / a, this.specs.projectionFrontCulling_3D, this.specs.projectionBackCulling_3D); this.repaint()
    }; p.mousedown = function (a) { this.lastPoint = a.p }; p.mouseup = function () { this.lastPoint = void 0 }; p.rightmousedown = function (a) { this.lastPoint = a.p }; p.drag = function (a) {
        if (this.lastPoint) {
            if (b.monitor.ALT) {
                var f = new l.Point(a.p.x, a.p.y); f.sub(this.lastPoint); var g = e.tan(this.specs.projectionPerspectiveVerticalFieldOfView_3D / 360 * e.PI), g = this.depth /
                    (this.height / 2 / g); d.translate(this.translationMatrix, [f.x * g, -f.y * g, 0])
            } else g = a.p.x - this.lastPoint.x, f = a.p.y - this.lastPoint.y, g = d.rotate(d.identity([]), g * e.PI / 180, [0, 1, 0]), d.rotate(g, f * e.PI / 180, [1, 0, 0]), this.rotationMatrix = d.multiply(g, this.rotationMatrix); this.lastPoint = a.p; this.repaint()
        }
    }; p.mousewheel = function (a, b) {
        var d = this.specs.projectionPerspectiveVerticalFieldOfView_3D + b; this.specs.projectionPerspectiveVerticalFieldOfView_3D = 0.1 > d ? 0.1 : 179.9 < d ? 179.9 : d; this.specs.projectionOrthoWidth_3D = 2 *
            (Math.tan(this.specs.projectionPerspectiveVerticalFieldOfView_3D / 360 * Math.PI) * this.depth) * this.specs.projectionWidthHeightRatio_3D; this.updateScene()
    }; p.multitouchmove = function (a, b) {
        if (2 === b) if (this.lastPoint && this.lastPoint.multi) { var f = new l.Point(a.p.x, a.p.y); f.sub(this.lastPoint); var g = e.tan(this.specs.projectionPerspectiveVerticalFieldOfView_3D / 360 * e.PI), g = this.depth / (this.height / 2 / g); d.translate(this.translationMatrix, [f.x * g, -f.y * g, 0]); this.lastPoint = a.p; this.repaint() } else this.lastPoint = a.p,
            this.lastPoint.multi = !0
    }; p.gesturechange = function (a) {
        if (0 !== a.originalEvent.scale - this.lastPinchScale) {
            var b = 30 * -(a.originalEvent.scale / this.lastPinchScale - 1); if (isNaN(b)) return; b = this.specs.projectionPerspectiveVerticalFieldOfView_3D + b; this.specs.projectionPerspectiveVerticalFieldOfView_3D = 0.1 > b ? 0.1 : 179.9 < b ? 179.9 : b; this.specs.projectionOrthoWidth_3D = 2 * (Math.tan(this.specs.projectionPerspectiveVerticalFieldOfView_3D / 360 * Math.PI) * this.depth) * this.specs.projectionWidthHeightRatio_3D; this.updateScene();
            this.lastPinchScale = a.originalEvent.scale
        } this.repaint()
    }; p.gestureend = function () { this.lastPinchScale = 1; this.lastGestureRotate = 0 }
})(ChemDoodle, ChemDoodle.extensions, ChemDoodle.math, ChemDoodle.structures, ChemDoodle.structures.d3, ChemDoodle.RESIDUE, Math, document, ChemDoodle.lib.mat4, ChemDoodle.lib.mat3, ChemDoodle.lib.vec3, ChemDoodle.lib.jQuery, window);
(function (b, j, o, l) {
    b.MolGrabberCanvas3D = function (b, g, e) {
        b && this.create(b, g, e); g = []; g.push('\x3cbr\x3e\x3cinput type\x3d"text" id\x3d"'); g.push(b); g.push('_query" size\x3d"32" value\x3d"" /\x3e'); g.push("\x3cbr\x3e\x3cnobr\x3e"); g.push('\x3cselect id\x3d"'); g.push(b); g.push('_select"\x3e'); g.push('\x3coption value\x3d"pubchem" selected\x3ePubChem'); g.push("\x3c/select\x3e"); g.push('\x3cbutton id\x3d"'); g.push(b); g.push('_submit"\x3eShow Molecule\x3c/button\x3e'); g.push("\x3c/nobr\x3e"); l.writeln(g.join(""));
        var a = this; o("#" + b + "_submit").click(function () { a.search() }); o("#" + b + "_query").keypress(function (b) { 13 === b.which && a.search() })
    }; b = b.MolGrabberCanvas3D.prototype = new b._Canvas3D; b.setSearchTerm = function (b) { o("#" + this.id + "_query").val(b); this.search() }; b.search = function () { var b = this; j.getMoleculeFromDatabase(o("#" + this.id + "_query").val(), { database: o("#" + this.id + "_select").val(), dimension: 3 }, function (g) { b.loadMolecule(g) }) }
})(ChemDoodle, ChemDoodle.iChemLabs, ChemDoodle.lib.jQuery, document);
(function (b, j) {
    b.MovieCanvas3D = function (b, h, g) { b && this.create(b, h, g); this.frames = [] }; b.MovieCanvas3D.PLAY_ONCE = 0; b.MovieCanvas3D.PLAY_LOOP = 1; b.MovieCanvas3D.PLAY_SPRING = 2; var o = b.MovieCanvas3D.prototype = new b._Canvas3D; o.timeout = 50; o.frameNumber = 0; o.playMode = 2; o.reverse = !1; o.startAnimation = b._AnimatorCanvas.prototype.startAnimation; o.stopAnimation = b._AnimatorCanvas.prototype.stopAnimation; o.isRunning = b._AnimatorCanvas.prototype.isRunning; o.dblclick = b.RotatorCanvas.prototype.dblclick; o.nextFrame = function () {
        var b =
            this.frames[this.frameNumber]; this.molecules = b.mols; this.shapes = b.shapes; 2 === this.playMode && this.reverse ? (this.frameNumber--, 0 > this.frameNumber && (this.frameNumber = 1, this.reverse = !1)) : (this.frameNumber++, this.frameNumber >= this.frames.length && (2 === this.playMode ? (this.frameNumber -= 2, this.reverse = !0) : (this.frameNumber = 0, 0 === this.playMode && this.stopAnimation())))
    }; o.center = function () {
        for (var b = new j.Atom, h = this.frames[0], g = 0, e = h.mols.length; g < e; g++)b.add3D(h.mols[g].getCenter3D()); b.x /= h.mols.length; b.y /=
            h.mols.length; h = new j.Atom; h.sub3D(b); for (var b = 0, a = this.frames.length; b < a; b++)for (var d = this.frames[b], g = 0, e = d.mols.length; g < e; g++)for (var n = d.mols[g], f = 0, o = n.atoms.length; f < o; f++)n.atoms[f].add3D(h)
    }; o.addFrame = function (b, h) { this.frames.push({ mols: b, shapes: h }) }
})(ChemDoodle, ChemDoodle.structures);
(function (b, j, o) {
    var l = [], h = [1, 0, 0], g = [0, 1, 0], e = [0, 0, 1]; b.RotatorCanvas3D = function (a, b, e) { a && this.create(a, b, e) }; var a = b.RotatorCanvas3D.prototype = new b._Canvas3D; a.timeout = 33; j = j.PI / 15; a.xIncrement = j; a.yIncrement = j; a.zIncrement = j; a.startAnimation = b._AnimatorCanvas.prototype.startAnimation; a.stopAnimation = b._AnimatorCanvas.prototype.stopAnimation; a.isRunning = b._AnimatorCanvas.prototype.isRunning; a.dblclick = b.RotatorCanvas.prototype.dblclick; a.mousedown = void 0; a.rightmousedown = void 0; a.drag = void 0;
    a.mousewheel = void 0; a.nextFrame = function (a) { 0 === this.molecules.length && 0 === this.shapes.length ? this.stopAnimation() : (o.identity(l), a /= 1E3, o.rotate(l, this.xIncrement * a, h), o.rotate(l, this.yIncrement * a, g), o.rotate(l, this.zIncrement * a, e), o.multiply(this.rotationMatrix, l)) }
})(ChemDoodle, Math, ChemDoodle.lib.mat4); (function (b) { b.TransformCanvas3D = function (b, o, l) { b && this.create(b, o, l) }; b.TransformCanvas3D.prototype = new b._Canvas3D })(ChemDoodle);
(function (b) { b.ViewerCanvas3D = function (b, o, l) { b && this.create(b, o, l) }; b = b.ViewerCanvas3D.prototype = new b._Canvas3D; b.mousedown = void 0; b.rightmousedown = void 0; b.drag = void 0; b.mousewheel = void 0 })(ChemDoodle);
(function (b, j, o) {
    function l(b, e, a, d) { this.element = b; this.x = e; this.y = a; this.dimension = d; this.allowMultipleSelections = !1 } b.PeriodicTableCanvas = function (b, e) { this.padding = 5; b && this.create(b, 18 * e + 2 * this.padding, 10 * e + 2 * this.padding); this.cellDimension = e ? e : 20; this.setupTable(); this.repaint() }; var h = b.PeriodicTableCanvas.prototype = new b._Canvas; h.loadMolecule = void 0; h.getMolecule = void 0; h.getHoveredElement = function () { if (this.hovered) return this.hovered.element }; h.innerRepaint = function (b) {
        for (var e = 0, a = this.cells.length; e <
            a; e++)this.drawCell(b, this.specs, this.cells[e]); this.hovered && this.drawCell(b, this.specs, this.hovered); this.selected && this.drawCell(b, this.specs, this.selected)
    }; h.setupTable = function () {
        this.cells = []; for (var g = this.padding, e = this.padding, a = 0, d = 0, h = b.SYMBOLS.length; d < h; d++) {
            18 === a && (a = 0, e += this.cellDimension, g = this.padding); var f = b.ELEMENT[b.SYMBOLS[d]]; if (2 === f.atomicNumber) g += 16 * this.cellDimension, a += 16; else if (5 === f.atomicNumber || 13 === f.atomicNumber) g += 10 * this.cellDimension, a += 10; if ((58 > f.atomicNumber ||
                71 < f.atomicNumber && 90 > f.atomicNumber || 103 < f.atomicNumber) && 113 > f.atomicNumber) this.cells.push(new l(f, g, e, this.cellDimension)), g += this.cellDimension, a++
        } e += 2 * this.cellDimension; g = 3 * this.cellDimension + this.padding; for (d = 57; 104 > d; d++)if (f = b.ELEMENT[b.SYMBOLS[d]], 90 === f.atomicNumber && (e += this.cellDimension, g = 3 * this.cellDimension + this.padding), 58 <= f.atomicNumber && 71 >= f.atomicNumber || 90 <= f.atomicNumber && 103 >= f.atomicNumber) this.cells.push(new l(f, g, e, this.cellDimension)), g += this.cellDimension
    }; h.drawCell =
        function (b, e, a) {
            var d = b.createRadialGradient(a.x + a.dimension / 3, a.y + a.dimension / 3, 1.5 * a.dimension, a.x + a.dimension / 3, a.y + a.dimension / 3, a.dimension / 10); d.addColorStop(0, "#000000"); d.addColorStop(0.7, a.element.jmolColor); d.addColorStop(1, "#FFFFFF"); b.fillStyle = d; j.contextRoundRect(b, a.x, a.y, a.dimension, a.dimension, a.dimension / 8); if (a === this.hovered || a === this.selected || a.selected) b.lineWidth = 2, b.strokeStyle = "#c10000", b.stroke(), b.fillStyle = "white"; b.fill(); b.font = j.getFontString(e.text_font_size, e.text_font_families);
            b.fillStyle = e.text_color; b.textAlign = "center"; b.textBaseline = "middle"; b.fillText(a.element.symbol, a.x + a.dimension / 2, a.y + a.dimension / 2)
        }; h.click = function () { this.hovered && (this.allowMultipleSelections ? this.hovered.selected = !this.hovered.selected : this.selected = this.hovered, this.repaint()) }; h.touchstart = function (b) { this.mousemove(b) }; h.mousemove = function (b) {
            var e = b.p.x; b = b.p.y; this.hovered = void 0; for (var a = 0, d = this.cells.length; a < d; a++) {
                var h = this.cells[a]; if (o.isBetween(e, h.x, h.x + h.dimension) && o.isBetween(b,
                    h.y, h.y + h.dimension)) { this.hovered = h; break }
            } this.repaint()
        }; h.mouseout = function () { this.hovered = void 0; this.repaint() }
})(ChemDoodle, ChemDoodle.extensions, ChemDoodle.math, document); (function (b, j, o) { b.png = {}; b.png.create = function (b) { o.open(j.getElementById(b.id).toDataURL("image/png")) } })(ChemDoodle.io, document, window); (function (b, j) { b.file = {}; b.file.content = function (b, l) { j.get(b, "", l) } })(ChemDoodle.io, ChemDoodle.lib.jQuery);
(function (b, j, o, l, h, g) {
    j.SERVER_URL = "http://ichemlabs.cloud.chemdoodle.com/icl_cdc_v070000/WebHQ"; j.inRelay = !1; j.asynchronous = !0; j.INFO = { userAgent: navigator.userAgent, v_cwc: b.getVersion(), v_jQuery: h.version, v_jQuery_ui: h.ui ? h.ui.version : "N/A" }; var e = new o.JSONInterpreter, a = new l.Queue; j.useHTTPS = function () { j.SERVER_URL = "https" + j.SERVER_URL.substr(4) }; j._contactServer = function (b, e, f, g, l) {
        this.inRelay ? a.enqueue({ call: b, content: e, options: f, callback: g, errorback: l }) : (j.inRelay = !0, h.ajax({
            dataType: "text",
            type: "POST", data: JSON.stringify({ call: b, content: e, options: f, info: j.INFO }), url: this.SERVER_URL, success: function (b) { b = JSON.parse(b); b.message && alert(b.message); j.inRelay = !1; g && (b.content && !b.stop) && g(b.content); b.stop && l && l(); a.isEmpty() || (b = a.dequeue(), j.contactServer(b.call, b.content, b.options, b.callback, b.errorback)) }, error: function () {
                "checkForUpdates" != b && alert("Call failed. Please try again. If you continue to see this message, please contact iChemLabs customer support."); j.inRelay = !1; l && l(); if (!a.isEmpty()) {
                    var e =
                        a.dequeue(); j.contactServer(e.call, e.content, e.options, e.callback, e.errorback)
                }
            }, xhrFields: { withCredentials: !0 }, async: j.asynchronous
        }))
    }; j.authenticate = function (a, b, e, g) { this._contactServer("authenticate", { credential: a }, b, function (a) { e(a) }, g) }; j.calculate = function (a, b, f, g) { this._contactServer("calculate", { mol: e.molTo(a) }, b, function (a) { f(a) }, g) }; j.createLewisDotStructure = function (a, b, f, g) { this._contactServer("createLewisDot", { mol: e.molTo(a) }, b, function (a) { f(e.molFrom(a.mol)) }, g) }; j.generateImage = function (a,
        b, f, g) { this._contactServer("generateImage", { mol: e.molTo(a) }, b, function (a) { f(a.link) }, g) }; j.generateIUPACName = function (a, b, f, g) { this._contactServer("generateIUPACName", { mol: e.molTo(a) }, b, function (a) { f(a.iupac) }, g) }; j.getAd = function (a, b) { this._contactServer("getAd", {}, {}, function (b) { a(b.image_url, b.target_url) }, b) }; j.getMoleculeFromContent = function (a, b, f, g) {
            this._contactServer("getMoleculeFromContent", { content: a }, b, function (a) {
                for (var b = !1, d = 0, g = a.mol.a.length; d < g; d++)if (0 !== a.mol.a[d].z) { b = !0; break } if (b) {
                    d =
                    0; for (g = a.mol.a.length; d < g; d++)a.mol.a[d].x /= 20, a.mol.a[d].y /= 20, a.mol.a[d].z /= 20
                } f(e.molFrom(a.mol))
            }, g)
        }; j.getMoleculeFromDatabase = function (a, b, f, g) { this._contactServer("getMoleculeFromDatabase", { query: a }, b, function (a) { if (3 === b.dimension) for (var d = 0, g = a.mol.a.length; d < g; d++)a.mol.a[d].x /= 20, a.mol.a[d].y /= -20, a.mol.a[d].z /= 20; f(e.molFrom(a.mol)) }, g) }; j.getOptimizedPDBStructure = function (a, b, f, g) {
            this._contactServer("getOptimizedPDBStructure", { id: a }, b, function (a) {
                var b; b = a.mol ? e.molFrom(a.mol) : new l.Molecule;
                b.chains = e.chainsFrom(a.ribbons); b.fromJSON = !0; f(b)
            }, g)
        }; j.getZeoliteFromIZA = function (a, b, e, g) { this._contactServer("getZeoliteFromIZA", { query: a }, b, function (a) { e(ChemDoodle.readCIF(a.cif, b.xSuper, b.ySuper, b.zSuper)) }, g) }; j.isGraphIsomorphism = function (a, b, f, g, h) { this._contactServer("isGraphIsomorphism", { arrow: e.molTo(a), target: e.molTo(b) }, f, function (a) { g(a.value) }, h) }; j.isSubgraphIsomorphism = function (a, b, f, g, h) {
            this._contactServer("isSubgraphIsomorphism", { arrow: e.molTo(a), target: e.molTo(b) }, f, function (a) { g(a.value) },
                h)
        }; j.isSupergraphIsomorphism = function (a, b, f, g, h) { this._contactServer("isSupergraphIsomorphism", { arrow: e.molTo(a), target: e.molTo(b) }, f, function (a) { g(a.value) }, h) }; j.getSimilarityMeasure = function (a, b, f, g, h) { this._contactServer("getSimilarityMeasure", { first: e.molTo(a), second: e.molTo(b) }, f, function (a) { g(a.value) }, h) }; j.kekulize = function (a, b, f, g) { this._contactServer("kekulize", { mol: e.molTo(a) }, b, function (a) { f(e.molFrom(a.mol)) }, g) }; j.optimize = function (a, b, f, g) {
            this._contactServer("optimize", { mol: e.molTo(a) },
                b, function (g) { g = e.molFrom(g.mol); if (2 === b.dimension) { for (var h = 0, j = g.atoms.length; h < j; h++)a.atoms[h].x = g.atoms[h].x, a.atoms[h].y = g.atoms[h].y; f() } else if (3 === b.dimension) { h = 0; for (j = g.atoms.length; h < j; h++)g.atoms[h].x /= 20, g.atoms[h].y /= -20, g.atoms[h].z /= 20; f(g) } }, g)
        }; j.readIUPACName = function (a, b, f, g) { this._contactServer("readIUPACName", { iupac: a }, b, function (a) { f(e.molFrom(a.mol)) }, g) }; j.readSMILES = function (a, b, f, g) { this._contactServer("readSMILES", { smiles: a }, b, function (a) { f(e.molFrom(a.mol)) }, g) }; j.saveFile =
            function (a, b, f, g) { this._contactServer("saveFile", { mol: e.molTo(a) }, b, function (a) { f(a.link) }, g) }; j.simulate13CNMR = function (a, g, f, h) { g.nucleus = "C"; g.isotope = 13; this._contactServer("simulateNMR", { mol: e.molTo(a) }, g, function (a) { f(b.readJCAMP(a.jcamp)) }, h) }; j.simulate1HNMR = function (a, g, f, h) { g.nucleus = "H"; g.isotope = 1; this._contactServer("simulateNMR", { mol: e.molTo(a) }, g, function (a) { f(b.readJCAMP(a.jcamp)) }, h) }; j.simulateMassParentPeak = function (a, g, f, h) {
                this._contactServer("simulateMassParentPeak", { mol: e.molTo(a) },
                    g, function (a) { f(b.readJCAMP(a.jcamp)) }, h)
            }; j.writeSMILES = function (a, b, f, g) { this._contactServer("writeSMILES", { mol: e.molTo(a) }, b, function (a) { f(a.smiles) }, g) }; j.version = function (a, b, e) { this._contactServer("version", {}, a, function (a) { b(a.value) }, e) }; j.checkForUpdates = function (a) { this._contactServer("checkForUpdates", { value: g.href }, a, function () { }, function () { }) }
})(ChemDoodle, ChemDoodle.iChemLabs, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery, location);