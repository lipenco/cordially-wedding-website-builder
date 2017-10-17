! function() {
    "use strict";

    function e(e, t) {
        var i = new Date;
        i.setFullYear(i.getFullYear() + 1), document.cookie = e + "=" + t + "; expires=" + i + "; path=/"
    }

    var l = {
        currentLang: "en",
        createCookie: e
    };
    window.melanieLanguage = {
        util: l
    }
}(), ! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e) {
        var t = e.length,
            i = re.type(e);
        return "function" === i || re.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function n(e, t, i) {
        if (re.isFunction(t)) return re.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return re.grep(e, function(e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (de.test(t)) return re.filter(t, e, i);
            t = re.filter(t, e)
        }
        return re.grep(e, function(e) {
            return re.inArray(e, t) >= 0 !== i
        })
    }

    function r(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function s(e) {
        var t = we[e] = {};
        return re.each(e.match(ve) || [], function(e, i) {
            t[i] = !0
        }), t
    }

    function a() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", o, !1), e.removeEventListener("load", o, !1)) : (fe.detachEvent("onreadystatechange", o), e.detachEvent("onload", o))
    }

    function o() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (a(), re.ready())
    }

    function l(e, t, i) {
        if (void 0 === i && 1 === e.nodeType) {
            var n = "data-" + t.replace(Se, "-$1").toLowerCase();
            if (i = e.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ce.test(i) ? re.parseJSON(i) : i
                } catch (r) {}
                re.data(e, t, i)
            } else i = void 0
        }
        return i
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, i, n) {
        if (re.acceptData(e)) {
            var r, s, a = re.expando,
                o = e.nodeType,
                l = o ? re.cache : e,
                u = o ? e[a] : e[a] && a;
            if (u && l[u] && (n || l[u].data) || void 0 !== i || "string" != typeof t) return u || (u = o ? e[a] = U.pop() || re.guid++ : a), l[u] || (l[u] = o ? {} : {
                toJSON: re.noop
            }), ("object" == typeof t || "function" == typeof t) && (n ? l[u] = re.extend(l[u], t) : l[u].data = re.extend(l[u].data, t)), s = l[u], n || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[re.camelCase(t)] = i), "string" == typeof t ? (r = s[t], null == r && (r = s[re.camelCase(t)])) : r = s, r
        }
    }

    function h(e, t, i) {
        if (re.acceptData(e)) {
            var n, r, s = e.nodeType,
                a = s ? re.cache : e,
                o = s ? e[re.expando] : re.expando;
            if (a[o]) {
                if (t && (n = i ? a[o] : a[o].data)) {
                    re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in n ? t = [t] : (t = re.camelCase(t), t = t in n ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete n[t[r]];
                    if (i ? !u(n) : !re.isEmptyObject(n)) return
                }(i || (delete a[o].data, u(a[o]))) && (s ? re.cleanData([e], !0) : ie.deleteExpando || a != a.window ? delete a[o] : a[o] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return fe.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Me.split("|"),
            i = e.createDocumentFragment();
        if (i.createElement)
            for (; t.length;) i.createElement(t.pop());
        return i
    }

    function _(e, t) {
        var i, n, r = 0,
            s = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [], i = e.childNodes || e; null != (n = i[r]); r++) !t || re.nodeName(n, t) ? s.push(n) : re.merge(s, _(n, t));
        return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], s) : s
    }

    function g(e) {
        Ae.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function v(e) {
        return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = We.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++) re._data(i, "globalEval", !t || re._data(t[n], "globalEval"))
    }

    function b(e, t) {
        if (1 === t.nodeType && re.hasData(e)) {
            var i, n, r, s = re._data(e),
                a = re._data(t, s),
                o = s.events;
            if (o) {
                delete a.handle, a.events = {};
                for (i in o)
                    for (n = 0, r = o[i].length; r > n; n++) re.event.add(t, i, o[i][n])
            }
            a.data && (a.data = re.extend({}, a.data))
        }
    }

    function T(e, t) {
        var i, n, r;
        if (1 === t.nodeType) {
            if (i = t.nodeName.toLowerCase(), !ie.noCloneEvent && t[re.expando]) {
                r = re._data(t);
                for (n in r.events) re.removeEvent(t, n, r.handle);
                t.removeAttribute(re.expando)
            }
            "script" === i && t.text !== e.text ? (v(t).text = e.text, w(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), ie.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Ae.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
        }
    }

    function C(t, i) {
        var n, r = re(i.createElement(t)).appendTo(i.body),
            s = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(r[0])) ? n.display : re.css(r[0], "display");
        return r.detach(), s
    }

    function S(e) {
        var t = fe,
            i = Ke[e];
        return i || (i = C(e, t), "none" !== i && i || (Ze = (Ze || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ze[0].contentWindow || Ze[0].contentDocument).document, t.write(), t.close(), i = C(e, t), Ze.detach()), Ke[e] = i), i
    }

    function P(e, t) {
        return {
            get: function() {
                var i = e();
                return null != i ? i ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function k(e, t) {
        if (t in e) return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, r = dt.length; r--;)
            if (t = dt[r] + i, t in e) return t;
        return n
    }

    function L(e, t) {
        for (var i, n, r, s = [], a = 0, o = e.length; o > a; a++) n = e[a], n.style && (s[a] = re._data(n, "olddisplay"), i = n.style.display, t ? (s[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && Le(n) && (s[a] = re._data(n, "olddisplay", S(n.nodeName)))) : (r = Le(n), (i && "none" !== i || !r) && re._data(n, "olddisplay", r ? i : re.css(n, "display"))));
        for (a = 0; o > a; a++) n = e[a], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[a] || "" : "none"));
        return e
    }

    function E(e, t, i) {
        var n = lt.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function A(e, t, i, n, r) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > s; s += 2) "margin" === i && (a += re.css(e, i + ke[s], !0, r)), n ? ("content" === i && (a -= re.css(e, "padding" + ke[s], !0, r)), "margin" !== i && (a -= re.css(e, "border" + ke[s] + "Width", !0, r))) : (a += re.css(e, "padding" + ke[s], !0, r), "padding" !== i && (a += re.css(e, "border" + ke[s] + "Width", !0, r)));
        return a
    }

    function D(e, t, i) {
        var n = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = et(e),
            a = ie.boxSizing && "border-box" === re.css(e, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if (r = tt(e, t, s), (0 > r || null == r) && (r = e.style[t]), nt.test(r)) return r;
            n = a && (ie.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + A(e, t, i || (a ? "border" : "content"), n, s) + "px"
    }

    function O(e, t, i, n, r) {
        return new O.prototype.init(e, t, i, n, r)
    }

    function j() {
        return setTimeout(function() {
            pt = void 0
        }), pt = re.now()
    }

    function N(e, t) {
        var i, n = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) i = ke[r], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function R(e, t, i) {
        for (var n, r = (vt[t] || []).concat(vt["*"]), s = 0, a = r.length; a > s; s++)
            if (n = r[s].call(i, t, e)) return n
    }

    function M(e, t, i) {
        var n, r, s, a, o, l, u, c, h = this,
            d = {},
            p = e.style,
            f = e.nodeType && Le(e),
            m = re._data(e, "fxshow");
        i.queue || (o = re._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() {
            o.unqueued || l()
        }), o.unqueued++, h.always(function() {
            h.always(function() {
                o.unqueued--, re.queue(e, "fx").length || o.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = re.css(e, "display"), c = "none" === u ? re._data(e, "olddisplay") || S(e.nodeName) : u, "inline" === c && "none" === re.css(e, "float") && (ie.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || h.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (r = t[n], mt.exec(r)) {
                if (delete t[n], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[n]) continue;
                    f = !0
                }
                d[n] = m && m[n] || re.style(e, n)
            } else u = void 0;
        if (re.isEmptyObject(d)) "inline" === ("none" === u ? S(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (f = m.hidden) : m = re._data(e, "fxshow", {}), s && (m.hidden = !f), f ? re(e).show() : h.done(function() {
                re(e).hide()
            }), h.done(function() {
                var t;
                re._removeData(e, "fxshow");
                for (t in d) re.style(e, t, d[t])
            });
            for (n in d) a = R(f ? m[n] : 0, n, h), n in m || (m[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function I(e, t) {
        var i, n, r, s, a;
        for (i in e)
            if (n = re.camelCase(i), r = t[n], s = e[i], re.isArray(s) && (r = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), a = re.cssHooks[n], a && "expand" in a) {
                s = a.expand(s), delete e[n];
                for (i in s) i in e || (e[i] = s[i], t[i] = r)
            } else t[n] = r
    }

    function F(e, t, i) {
        var n, r, s = 0,
            a = yt.length,
            o = re.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = pt || j(), i = Math.max(0, u.startTime + u.duration - t), n = i / u.duration || 0, s = 1 - n, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(s);
                return o.notifyWith(e, [u, s, i]), 1 > s && l ? i : (o.resolveWith(e, [u]), !1)
            },
            u = o.promise({
                elem: e,
                props: re.extend({}, t),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: pt || j(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = re.Tween(e, u.opts, t, i, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > i; i++) u.tweens[i].run(1);
                    return t ? o.resolveWith(e, [u, t]) : o.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (I(c, u.opts.specialEasing); a > s; s++)
            if (n = yt[s].call(u, e, c, u.opts)) return n;
        return re.map(c, R, u), re.isFunction(u.opts.start) && u.opts.start.call(e, u), re.fx.timer(re.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function $(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, r = 0,
                s = t.toLowerCase().match(ve) || [];
            if (re.isFunction(i))
                for (; n = s[r++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function q(e, t, i, n) {
        function r(o) {
            var l;
            return s[o] = !0, re.each(e[o] || [], function(e, o) {
                var u = o(t, i, n);
                return "string" != typeof u || a || s[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var s = {},
            a = e === Xt;
        return r(t.dataTypes[0]) || !s["*"] && r("*")
    }

    function H(e, t) {
        var i, n, r = re.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && re.extend(!0, e, i), e
    }

    function z(e, t, i) {
        for (var n, r, s, a, o = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (a in o)
                if (o[a] && o[a].test(r)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in i) s = l[0];
        else {
            for (a in i) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    s = a;
                    break
                }
                n || (n = a)
            }
            s = s || n
        }
        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
    }

    function X(e, t, i, n) {
        var r, s, a, o, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (s = c.shift(); s;)
            if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (a = u[l + " " + s] || u["* " + s], !a)
                for (r in u)
                    if (o = r.split(" "), o[1] === s && (a = u[l + " " + o[0]] || u["* " + o[0]])) {
                        a === !0 ? a = u[r] : u[r] !== !0 && (s = o[0], c.unshift(o[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: a ? h : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function B(e, t, i, n) {
        var r;
        if (re.isArray(t)) re.each(t, function(t, r) {
            i || Wt.test(e) ? n(e, r) : B(e + "[" + ("object" == typeof r ? t : "") + "]", r, i, n)
        });
        else if (i || "object" !== re.type(t)) n(e, t);
        else
            for (r in t) B(e + "[" + r + "]", t[r], i, n)
    }

    function Q() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function V() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function W(e) {
        return re.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var U = [],
        Y = U.slice,
        J = U.concat,
        G = U.push,
        Z = U.indexOf,
        K = {},
        ee = K.toString,
        te = K.hasOwnProperty,
        ie = {},
        ne = "1.11.1",
        re = function(e, t) {
            return new re.fn.init(e, t)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        oe = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: ne,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
        },
        pushStack: function(e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return re.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(re.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: U.sort,
        splice: U.splice
    }, re.extend = re.fn.extend = function() {
        var e, t, i, n, r, s, a = arguments[0] || {},
            o = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[o] || {}, o++), "object" == typeof a || re.isFunction(a) || (a = {}), o === l && (a = this, o--); l > o; o++)
            if (null != (r = arguments[o]))
                for (n in r) e = a[n], i = r[n], a !== i && (u && i && (re.isPlainObject(i) || (t = re.isArray(i))) ? (t ? (t = !1, s = e && re.isArray(e) ? e : []) : s = e && re.isPlainObject(e) ? e : {}, a[n] = re.extend(u, s, i)) : void 0 !== i && (a[n] = i));
        return a
    }, re.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === re.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === re.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !re.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (ie.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && re.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(oe, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, s = 0,
                a = e.length,
                o = i(e);
            if (n) {
                if (o)
                    for (; a > s && (r = t.apply(e[s], n), r !== !1); s++);
                else
                    for (s in e)
                        if (r = t.apply(e[s], n), r === !1) break
            } else if (o)
                for (; a > s && (r = t.call(e[s], s, e[s]), r !== !1); s++);
            else
                for (s in e)
                    if (r = t.call(e[s], s, e[s]), r === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? re.merge(n, "string" == typeof e ? [e] : e) : G.call(n, e)), n
        },
        inArray: function(e, t, i) {
            var n;
            if (t) {
                if (Z) return Z.call(t, e, i);
                for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in t && t[i] === e) return i
            }
            return -1
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, r = e.length; i > n;) e[r++] = t[n++];
            if (i !== i)
                for (; void 0 !== t[n];) e[r++] = t[n++];
            return e.length = r, e
        },
        grep: function(e, t, i) {
            for (var n, r = [], s = 0, a = e.length, o = !i; a > s; s++) n = !t(e[s], s), n !== o && r.push(e[s]);
            return r
        },
        map: function(e, t, n) {
            var r, s = 0,
                a = e.length,
                o = i(e),
                l = [];
            if (o)
                for (; a > s; s++) r = t(e[s], s, n), null != r && l.push(r);
            else
                for (s in e) r = t(e[s], s, n), null != r && l.push(r);
            return J.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), re.isFunction(e) ? (i = Y.call(arguments, 2), n = function() {
                return e.apply(t || this, i.concat(Y.call(arguments)))
            }, n.guid = e.guid = e.guid || re.guid++, n) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ie
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(e) {
        function t(e, t, i, n) {
            var r, s, a, o, l, u, h, p, f, m;
            if ((t ? t.ownerDocument || t : q) !== O && D(t), t = t || O, i = i || [], !e || "string" != typeof e) return i;
            if (1 !== (o = t.nodeType) && 9 !== o) return [];
            if (N && !n) {
                if (r = ye.exec(e))
                    if (a = r[1]) {
                        if (9 === o) {
                            if (s = t.getElementById(a), !s || !s.parentNode) return i;
                            if (s.id === a) return i.push(s), i
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && F(t, s) && s.id === a) return i.push(s), i
                    } else {
                        if (r[2]) return K.apply(i, t.getElementsByTagName(e)), i;
                        if ((a = r[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(i, t.getElementsByClassName(a)), i
                    }
                if (x.qsa && (!R || !R.test(e))) {
                    if (p = h = $, f = t, m = 9 === o && e, 1 === o && "object" !== t.nodeName.toLowerCase()) {
                        for (u = S(e), (h = t.getAttribute("id")) ? p = h.replace(we, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + d(u[l]);
                        f = ve.test(e) && c(t.parentNode) || t, m = u.join(",")
                    }
                    if (m) try {
                        return K.apply(i, f.querySelectorAll(m)), i
                    } catch (_) {} finally {
                        h || t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(le, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > b.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[$] = !0, e
        }

        function r(e) {
            var t = O.createElement("div");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function s(e, t) {
            for (var i = e.split("|"), n = e.length; n--;) b.attrHandle[i[n]] = t
        }

        function a(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function o(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function u(e) {
            return n(function(t) {
                return t = +t, n(function(i, n) {
                    for (var r, s = e([], i.length, t), a = s.length; a--;) i[r = s[a]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== W && e
        }

        function h() {}

        function d(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
            return n
        }

        function p(e, t, i) {
            var n = t.dir,
                r = i && "parentNode" === n,
                s = z++;
            return t.first ? function(t, i, s) {
                for (; t = t[n];)
                    if (1 === t.nodeType || r) return e(t, i, s)
            } : function(t, i, a) {
                var o, l, u = [H, s];
                if (a) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || r) && e(t, i, a)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || r) {
                            if (l = t[$] || (t[$] = {}), (o = l[n]) && o[0] === H && o[1] === s) return u[2] = o[2];
                            if (l[n] = u, u[2] = e(t, i, a)) return !0
                        }
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var r = e.length; r--;)
                    if (!e[r](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function m(e, i, n) {
            for (var r = 0, s = i.length; s > r; r++) t(e, i[r], n);
            return n
        }

        function _(e, t, i, n, r) {
            for (var s, a = [], o = 0, l = e.length, u = null != t; l > o; o++)(s = e[o]) && (!i || i(s, n, r)) && (a.push(s), u && t.push(o));
            return a
        }

        function g(e, t, i, r, s, a) {
            return r && !r[$] && (r = g(r)), s && !s[$] && (s = g(s, a)), n(function(n, a, o, l) {
                var u, c, h, d = [],
                    p = [],
                    f = a.length,
                    g = n || m(t || "*", o.nodeType ? [o] : o, []),
                    y = !e || !n && t ? g : _(g, d, e, o, l),
                    v = i ? s || (n ? e : f || r) ? [] : a : y;
                if (i && i(y, v, o, l), r)
                    for (u = _(v, p), r(u, [], o, l), c = u.length; c--;)(h = u[c]) && (v[p[c]] = !(y[p[c]] = h));
                if (n) {
                    if (s || e) {
                        if (s) {
                            for (u = [], c = v.length; c--;)(h = v[c]) && u.push(y[c] = h);
                            s(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(h = v[c]) && (u = s ? te.call(n, h) : d[c]) > -1 && (n[u] = !(a[u] = h))
                    }
                } else v = _(v === a ? v.splice(f, v.length) : v), s ? s(null, a, v, l) : K.apply(a, v)
            })
        }

        function y(e) {
            for (var t, i, n, r = e.length, s = b.relative[e[0].type], a = s || b.relative[" "], o = s ? 1 : 0, l = p(function(e) {
                    return e === t
                }, a, !0), u = p(function(e) {
                    return te.call(t, e) > -1
                }, a, !0), c = [function(e, i, n) {
                    return !s && (n || i !== L) || ((t = i).nodeType ? l(e, i, n) : u(e, i, n))
                }]; r > o; o++)
                if (i = b.relative[e[o].type]) c = [p(f(c), i)];
                else {
                    if (i = b.filter[e[o].type].apply(null, e[o].matches), i[$]) {
                        for (n = ++o; r > n && !b.relative[e[n].type]; n++);
                        return g(o > 1 && f(c), o > 1 && d(e.slice(0, o - 1).concat({
                            value: " " === e[o - 2].type ? "*" : ""
                        })).replace(le, "$1"), i, n > o && y(e.slice(o, n)), r > n && y(e = e.slice(n)), r > n && d(e))
                    }
                    c.push(i)
                }
            return f(c)
        }

        function v(e, i) {
            var r = i.length > 0,
                s = e.length > 0,
                a = function(n, a, o, l, u) {
                    var c, h, d, p = 0,
                        f = "0",
                        m = n && [],
                        g = [],
                        y = L,
                        v = n || s && b.find.TAG("*", u),
                        w = H += null == y ? 1 : Math.random() || .1,
                        x = v.length;
                    for (u && (L = a !== O && a); f !== x && null != (c = v[f]); f++) {
                        if (s && c) {
                            for (h = 0; d = e[h++];)
                                if (d(c, a, o)) {
                                    l.push(c);
                                    break
                                }
                            u && (H = w)
                        }
                        r && ((c = !d && c) && p--, n && m.push(c))
                    }
                    if (p += f, r && f !== p) {
                        for (h = 0; d = i[h++];) d(m, g, a, o);
                        if (n) {
                            if (p > 0)
                                for (; f--;) m[f] || g[f] || (g[f] = G.call(l));
                            g = _(g)
                        }
                        K.apply(l, g), u && !n && g.length > 0 && p + i.length > 1 && t.uniqueSort(l)
                    }
                    return u && (H = w, L = y), m
                };
            return r ? n(a) : a
        }
        var w, x, b, T, C, S, P, k, L, E, A, D, O, j, N, R, M, I, F, $ = "sizzle" + -new Date,
            q = e.document,
            H = 0,
            z = 0,
            X = i(),
            B = i(),
            Q = i(),
            V = function(e, t) {
                return e === t && (A = !0), 0
            },
            W = "undefined",
            U = 1 << 31,
            Y = {}.hasOwnProperty,
            J = [],
            G = J.pop,
            Z = J.push,
            K = J.push,
            ee = J.slice,
            te = J.indexOf || function(e) {
                for (var t = 0, i = this.length; i > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            se = re.replace("w", "w#"),
            ae = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + se + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            he = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            pe = new RegExp("^" + se + "$"),
            fe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ie + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            _e = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            we = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            be = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            };
        try {
            K.apply(J = ee.call(q.childNodes), q.childNodes), J[q.childNodes.length].nodeType
        } catch (Te) {
            K = {
                apply: J.length ? function(e, t) {
                    Z.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        x = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = t.setDocument = function(e) {
            var t, i = e ? e.ownerDocument || e : q,
                n = i.defaultView;
            return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, j = i.documentElement, N = !C(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                D()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                D()
            })), x.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = r(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = ge.test(i.getElementsByClassName) && r(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), x.getById = r(function(e) {
                return j.appendChild(e).id = $, !i.getElementsByName || !i.getElementsByName($).length
            }), x.getById ? (b.find.ID = function(e, t) {
                if (typeof t.getElementById !== W && N) {
                    var i = t.getElementById(e);
                    return i && i.parentNode ? [i] : []
                }
            }, b.filter.ID = function(e) {
                var t = e.replace(xe, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete b.find.ID, b.filter.ID = function(e) {
                var t = e.replace(xe, be);
                return function(e) {
                    var i = typeof e.getAttributeNode !== W && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), b.find.TAG = x.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== W ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var i, n = [],
                    r = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, b.find.CLASS = x.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== W && N ? t.getElementsByClassName(e) : void 0
            }, M = [], R = [], (x.qsa = ge.test(i.querySelectorAll)) && (r(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && R.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || R.push("\\[" + ne + "*(?:value|" + ie + ")"), e.querySelectorAll(":checked").length || R.push(":checked")
            }), r(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && R.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
            })), (x.matchesSelector = ge.test(I = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function(e) {
                x.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), M.push("!=", oe)
            }), R = R.length && new RegExp(R.join("|")), M = M.length && new RegExp(M.join("|")), t = ge.test(j.compareDocumentPosition), F = t || ge.test(j.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === q && F(q, e) ? -1 : t === i || t.ownerDocument === q && F(q, t) ? 1 : E ? te.call(E, e) - te.call(E, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, r = 0,
                    s = e.parentNode,
                    o = t.parentNode,
                    l = [e],
                    u = [t];
                if (!s || !o) return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : E ? te.call(E, e) - te.call(E, t) : 0;
                if (s === o) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[r] === u[r];) r++;
                return r ? a(l[r], u[r]) : l[r] === q ? -1 : u[r] === q ? 1 : 0
            }, i) : O
        }, t.matches = function(e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== O && D(e), i = i.replace(he, "='$1']"), !(!x.matchesSelector || !N || M && M.test(i) || R && R.test(i))) try {
                var n = I.call(e, i);
                if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (r) {}
            return t(i, O, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== O && D(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== O && D(e);
            var i = b.attrHandle[t.toLowerCase()],
                n = i && Y.call(b.attrHandle, t.toLowerCase()) ? i(e, t, !N) : void 0;
            return void 0 !== n ? n : x.attributes || !N ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, i = [],
                n = 0,
                r = 0;
            if (A = !x.detectDuplicates, E = !x.sortStable && e.slice(0), e.sort(V), A) {
                for (; t = e[r++];) t === e[r] && (n = i.push(r));
                for (; n--;) e.splice(i[n], 1)
            }
            return E = null, e
        }, T = t.getText = function(e) {
            var t, i = "",
                n = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += T(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[n++];) i += T(t);
            return i
        }, b = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, be), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && de.test(i) && (t = S(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = X[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && X(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== W && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(r) {
                        var s = t.attr(r, e);
                        return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, i, n, r) {
                    var s = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        o = "of-type" === t;
                    return 1 === n && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, i, l) {
                        var u, c, h, d, p, f, m = s !== a ? "nextSibling" : "previousSibling",
                            _ = t.parentNode,
                            g = o && t.nodeName.toLowerCase(),
                            y = !l && !o;
                        if (_) {
                            if (s) {
                                for (; m;) {
                                    for (h = t; h = h[m];)
                                        if (o ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? _.firstChild : _.lastChild], a && y) {
                                for (c = _[$] || (_[$] = {}), u = c[e] || [], p = u[0] === H && u[1], d = u[0] === H && u[2], h = p && _.childNodes[p]; h = ++p && h && h[m] || (d = p = 0) || f.pop();)
                                    if (1 === h.nodeType && ++d && h === t) {
                                        c[e] = [H, p, d];
                                        break
                                    }
                            } else if (y && (u = (t[$] || (t[$] = {}))[e]) && u[0] === H) d = u[1];
                            else
                                for (;
                                    (h = ++p && h && h[m] || (d = p = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++d || (y && ((h[$] || (h[$] = {}))[e] = [H, d]), h !== t)););
                            return d -= r, d === n || d % n === 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var r, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[$] ? s(i) : s.length > 1 ? (r = [e, e, "", i], b.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, r = s(e, i), a = r.length; a--;) n = te.call(e, r[a]), e[n] = !(t[n] = r[a])
                    }) : function(e) {
                        return s(e, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = [],
                        i = [],
                        r = P(e.replace(le, "$1"));
                    return r[$] ? n(function(e, t, i, n) {
                        for (var s, a = r(e, null, n, []), o = e.length; o--;)(s = a[o]) && (e[o] = !(t[o] = s))
                    }) : function(e, n, s) {
                        return t[0] = e, r(t, null, s, i), !i.pop()
                    }
                }),
                has: n(function(e) {
                    return function(i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }),
                lang: n(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, be).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === j
                },
                focus: function(e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return _e.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: u(function(e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: u(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: u(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[w] = o(w);
        for (w in {
                submit: !0,
                reset: !0
            }) b.pseudos[w] = l(w);
        return h.prototype = b.filters = b.pseudos, b.setFilters = new h, S = t.tokenize = function(e, i) {
            var n, r, s, a, o, l, u, c = B[e + " "];
            if (c) return i ? 0 : c.slice(0);
            for (o = e, l = [], u = b.preFilter; o;) {
                (!n || (r = ue.exec(o))) && (r && (o = o.slice(r[0].length) || o), l.push(s = [])), n = !1, (r = ce.exec(o)) && (n = r.shift(), s.push({
                    value: n,
                    type: r[0].replace(le, " ")
                }), o = o.slice(n.length));
                for (a in b.filter) !(r = fe[a].exec(o)) || u[a] && !(r = u[a](r)) || (n = r.shift(), s.push({
                    value: n,
                    type: a,
                    matches: r
                }), o = o.slice(n.length));
                if (!n) break
            }
            return i ? o.length : o ? t.error(e) : B(e, l).slice(0)
        }, P = t.compile = function(e, t) {
            var i, n = [],
                r = [],
                s = Q[e + " "];
            if (!s) {
                for (t || (t = S(e)), i = t.length; i--;) s = y(t[i]), s[$] ? n.push(s) : r.push(s);
                s = Q(e, v(r, n)), s.selector = e
            }
            return s
        }, k = t.select = function(e, t, i, n) {
            var r, s, a, o, l, u = "function" == typeof e && e,
                h = !n && S(e = u.selector || e);
            if (i = i || [], 1 === h.length) {
                if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (a = s[0]).type && x.getById && 9 === t.nodeType && N && b.relative[s[1].type]) {
                    if (t = (b.find.ID(a.matches[0].replace(xe, be), t) || [])[0], !t) return i;
                    u && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : s.length; r-- && (a = s[r], !b.relative[o = a.type]);)
                    if ((l = b.find[o]) && (n = l(a.matches[0].replace(xe, be), ve.test(s[0].type) && c(t.parentNode) || t))) {
                        if (s.splice(r, 1), e = n.length && d(s), !e) return K.apply(i, n), i;
                        break
                    }
            }
            return (u || P(e, h))(n, t, !N, i, ve.test(e) && c(t.parentNode) || t), i
        }, x.sortStable = $.split("").sort(V).join("") === $, x.detectDuplicates = !!A, D(), x.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(O.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function(e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || s(ie, function(e, t, i) {
            var n;
            return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
    var ce = re.expr.match.needsContext,
        he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        de = /^.[^:#\[\.,]*$/;
    re.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? re.find.matchesSelector(n, e) ? [n] : [] : re.find.matches(e, re.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, re.fn.extend({
        find: function(e) {
            var t, i = [],
                n = this,
                r = n.length;
            if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (re.contains(n[t], this)) return !0
            }));
            for (t = 0; r > t; t++) re.find(e, n[t], i);
            return i = this.pushStack(r > 1 ? re.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function(e) {
            return !!n(this, "string" == typeof e && ce.test(e) ? re(e) : e || [], !1).length
        }
    });
    var pe, fe = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        _e = re.fn.init = function(e, t) {
            var i, n;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : fe, !0)), he.test(i[1]) && re.isPlainObject(t))
                        for (i in t) re.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (n = fe.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return pe.find(e);
                    this.length = 1, this[0] = n
                }
                return this.context = fe, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
        };
    _e.prototype = re.fn, pe = re(fe);
    var ge = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.extend({
        dir: function(e, t, i) {
            for (var n = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !re(r).is(i));) 1 === r.nodeType && n.push(r), r = r[t];
            return n
        },
        sibling: function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    }), re.fn.extend({
        has: function(e) {
            var t, i = re(e, this),
                n = i.length;
            return this.filter(function() {
                for (t = 0; n > t; t++)
                    if (re.contains(this, i[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0, r = this.length, s = [], a = ce.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && re.find.matchesSelector(i, e))) {
                        s.push(i);
                        break
                    }
            return this.pushStack(s.length > 1 ? re.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), re.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return re.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return re.dir(e, "parentNode", i)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return re.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return re.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return re.dir(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return re.dir(e, "previousSibling", i)
        },
        siblings: function(e) {
            return re.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return re.sibling(e.firstChild)
        },
        contents: function(e) {
            return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
        }
    }, function(e, t) {
        re.fn[e] = function(i, n) {
            var r = re.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = re.filter(n, r)), this.length > 1 && (ye[e] || (r = re.unique(r)), ge.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var ve = /\S+/g,
        we = {};
    re.Callbacks = function(e) {
        e = "string" == typeof e ? we[e] || s(e) : re.extend({}, e);
        var t, i, n, r, a, o, l = [],
            u = !e.once && [],
            c = function(s) {
                for (i = e.memory && s, n = !0, a = o || 0, o = 0, r = l.length, t = !0; l && r > a; a++)
                    if (l[a].apply(s[0], s[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                t = !1, l && (u ? u.length && c(u.shift()) : i ? l = [] : h.disable())
            },
            h = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function s(t) {
                            re.each(t, function(t, i) {
                                var n = re.type(i);
                                "function" === n ? e.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                            })
                        }(arguments), t ? r = l.length : i && (o = n, c(i))
                    }
                    return this
                },
                remove: function() {
                    return l && re.each(arguments, function(e, i) {
                        for (var n;
                            (n = re.inArray(i, l, n)) > -1;) l.splice(n, 1), t && (r >= n && r--, a >= n && a--)
                    }), this
                },
                has: function(e) {
                    return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], r = 0, this
                },
                disable: function() {
                    return l = u = i = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, i || h.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, i) {
                    return !l || n && !u || (i = i || [], i = [e, i.slice ? i.slice() : i], t ? u.push(i) : c(i)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return h
    }, re.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return re.Deferred(function(i) {
                            re.each(t, function(t, s) {
                                var a = re.isFunction(e[t]) && e[t];
                                r[s[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && re.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? re.extend(e, n) : n
                    }
                },
                r = {};
            return n.pipe = n.then, re.each(t, function(e, s) {
                var a = s[2],
                    o = s[3];
                n[s[1]] = a.add, o && a.add(function() {
                    i = o
                }, t[1 ^ e][2].disable, t[2][2].lock), r[s[0]] = function() {
                    return r[s[0] + "With"](this === r ? n : this, arguments), this
                }, r[s[0] + "With"] = a.fireWith
            }), n.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, i, n, r = 0,
                s = Y.call(arguments),
                a = s.length,
                o = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                l = 1 === o ? e : re.Deferred(),
                u = function(e, i, n) {
                    return function(r) {
                        i[e] = this, n[e] = arguments.length > 1 ? Y.call(arguments) : r, n === t ? l.notifyWith(i, n) : --o || l.resolveWith(i, n)
                    }
                };
            if (a > 1)
                for (t = new Array(a), i = new Array(a), n = new Array(a); a > r; r++) s[r] && re.isFunction(s[r].promise) ? s[r].promise().done(u(r, n, s)).fail(l.reject).progress(u(r, i, t)) : --o;
            return o || l.resolveWith(n, s), l.promise()
        }
    });
    var xe;
    re.fn.ready = function(e) {
        return re.ready.promise().done(e), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? re.readyWait++ : re.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--re.readyWait : !re.isReady) {
                if (!fe.body) return setTimeout(re.ready);
                re.isReady = !0, e !== !0 && --re.readyWait > 0 || (xe.resolveWith(fe, [re]), re.fn.triggerHandler && (re(fe).triggerHandler("ready"), re(fe).off("ready")))
            }
        }
    }), re.ready.promise = function(t) {
        if (!xe)
            if (xe = re.Deferred(), "complete" === fe.readyState) setTimeout(re.ready);
            else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", o, !1), e.addEventListener("load", o, !1);
        else {
            fe.attachEvent("onreadystatechange", o), e.attachEvent("onload", o);
            var i = !1;
            try {
                i = null == e.frameElement && fe.documentElement
            } catch (n) {}
            i && i.doScroll && ! function r() {
                if (!re.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (e) {
                        return setTimeout(r, 50)
                    }
                    a(), re.ready()
                }
            }()
        }
        return xe.promise(t)
    };
    var be, Te = "undefined";
    for (be in re(ie)) break;
    ie.ownLast = "0" !== be, ie.inlineBlockNeedsLayout = !1, re(function() {
            var e, t, i, n;
            i = fe.getElementsByTagName("body")[0], i && i.style && (t = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (i.style.zoom = 1)), i.removeChild(n))
        }),
        function() {
            var e = fe.createElement("div");
            if (null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ie.deleteExpando = !1
                }
            }
            e = null
        }(), re.acceptData = function(e) {
            var t = re.noData[(e.nodeName + " ").toLowerCase()],
                i = +e.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Se = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando], !!e && !u(e)
        },
        data: function(e, t, i) {
            return c(e, t, i)
        },
        removeData: function(e, t) {
            return h(e, t)
        },
        _data: function(e, t, i) {
            return c(e, t, i, !0)
        },
        _removeData: function(e, t) {
            return h(e, t, !0)
        }
    }), re.fn.extend({
        data: function(e, t) {
            var i, n, r, s = this[0],
                a = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (r = re.data(s), 1 === s.nodeType && !re._data(s, "parsedAttrs"))) {
                    for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = re.camelCase(n.slice(5)), l(s, n, r[n])));
                    re._data(s, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                re.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, e, t)
            }) : s ? l(s, e, re.data(s, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                re.removeData(this, e)
            })
        }
    }), re.extend({
        queue: function(e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = re._data(e, t), i && (!n || re.isArray(i) ? n = re._data(e, t, re.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = re.queue(e, t),
                n = i.length,
                r = i.shift(),
                s = re._queueHooks(e, t),
                a = function() {
                    re.dequeue(e, t)
                };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete s.stop, r.call(e, a, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return re._data(e, i) || re._data(e, i, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(e, t + "queue"), re._removeData(e, i)
                })
            })
        }
    }), re.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = re.queue(this, e, t);
                re._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && re.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                re.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                r = re.Deferred(),
                s = this,
                a = this.length,
                o = function() {
                    --n || r.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) i = re._data(s[a], e + "queueHooks"), i && i.empty && (n++, i.empty.add(o));
            return o(), r.promise(t)
        }
    });
    var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ke = ["Top", "Right", "Bottom", "Left"],
        Le = function(e, t) {
            return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
        },
        Ee = re.access = function(e, t, i, n, r, s, a) {
            var o = 0,
                l = e.length,
                u = null == i;
            if ("object" === re.type(i)) {
                r = !0;
                for (o in i) re.access(e, t, o, i[o], !0, s, a)
            } else if (void 0 !== n && (r = !0, re.isFunction(n) || (a = !0), u && (a ? (t.call(e, n), t = null) : (u = t, t = function(e, t, i) {
                    return u.call(re(e), i)
                })), t))
                for (; l > o; o++) t(e[o], i, a ? n : n.call(e[o], o, t(e[o], i)));
            return r ? e : u ? t.call(e) : l ? t(e[0], i) : s
        },
        Ae = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = fe.createElement("input"),
            t = fe.createElement("div"),
            i = fe.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === t.firstChild.nodeType, ie.tbody = !t.getElementsByTagName("tbody").length, ie.htmlSerialize = !!t.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, i.appendChild(e), ie.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, i.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ie.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (n) {
                ie.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, i, n = fe.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + t, (ie[t + "Bubbles"] = i in e) || (n.setAttribute(i, "t"), ie[t + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var De = /^(?:input|select|textarea)$/i,
        Oe = /^key/,
        je = /^(?:mouse|pointer|contextmenu)|click/,
        Ne = /^(?:focusinfocus|focusoutblur)$/,
        Re = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(e, t, i, n, r) {
            var s, a, o, l, u, c, h, d, p, f, m, _ = re._data(e);
            if (_) {
                for (i.handler && (l = i, i = l.handler, r = l.selector), i.guid || (i.guid = re.guid++), (a = _.events) || (a = _.events = {}), (c = _.handle) || (c = _.handle = function(e) {
                        return typeof re === Te || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(ve) || [""], o = t.length; o--;) s = Re.exec(t[o]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p && (u = re.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = re.event.special[p] || {}, h = re.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && re.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, l), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, u.setup && u.setup.call(e, n, f, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), re.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, i, n, r) {
            var s, a, o, l, u, c, h, d, p, f, m, _ = re.hasData(e) && re._data(e);
            if (_ && (c = _.events)) {
                for (t = (t || "").match(ve) || [""], u = t.length; u--;)
                    if (o = Re.exec(t[u]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p) {
                        for (h = re.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = c[p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = d.length; s--;) a = d[s], !r && m !== a.origType || i && i.guid !== a.guid || o && !o.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (d.splice(s, 1), a.selector && d.delegateCount--, h.remove && h.remove.call(e, a));
                        l && !d.length && (h.teardown && h.teardown.call(e, f, _.handle) !== !1 || re.removeEvent(e, p, _.handle), delete c[p])
                    } else
                        for (p in c) re.event.remove(e, p + t[u], i, n, !0);
                re.isEmptyObject(c) && (delete _.handle, re._removeData(e, "events"))
            }
        },
        trigger: function(t, i, n, r) {
            var s, a, o, l, u, c, h, d = [n || fe],
                p = te.call(t, "type") ? t.type : t,
                f = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = c = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !Ne.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[re.expando] ? t : new re.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : re.makeArray(i, [t]), u = re.event.special[p] || {}, r || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!r && !u.noBubble && !re.isWindow(n)) {
                    for (l = u.delegateType || p, Ne.test(l + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), c = o;
                    c === (n.ownerDocument || fe) && d.push(c.defaultView || c.parentWindow || e)
                }
                for (h = 0;
                    (o = d[h++]) && !t.isPropagationStopped();) t.type = h > 1 ? l : u.bindType || p, s = (re._data(o, "events") || {})[t.type] && re._data(o, "handle"), s && s.apply(o, i), s = a && o[a], s && s.apply && re.acceptData(o) && (t.result = s.apply(o, i), t.result === !1 && t.preventDefault());
                if (t.type = p, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), i) === !1) && re.acceptData(n) && a && n[p] && !re.isWindow(n)) {
                    c = n[a], c && (n[a] = null), re.event.triggered = p;
                    try {
                        n[p]()
                    } catch (m) {}
                    re.event.triggered = void 0, c && (n[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = re.event.fix(e);
            var t, i, n, r, s, a = [],
                o = Y.call(arguments),
                l = (re._data(this, "events") || {})[e.type] || [],
                u = re.event.special[e.type] || {};
            if (o[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = re.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, s = 0;
                        (n = r.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(n.namespace)) && (e.handleObj = n, e.data = n.data, i = ((re.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, o), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var i, n, r, s, a = [],
                o = t.delegateCount,
                l = e.target;
            if (o && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], s = 0; o > s; s++) n = t[s], i = n.selector + " ", void 0 === r[i] && (r[i] = n.needsContext ? re(i, this).index(l) >= 0 : re.find(i, this, null, [l]).length), r[i] && r.push(n);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return o < t.length && a.push({
                elem: this,
                handlers: t.slice(o)
            }), a
        },
        fix: function(e) {
            if (e[re.expando]) return e;
            var t, i, n, r = e.type,
                s = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = je.test(r) ? this.mouseHooks : Oe.test(r) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(s), t = n.length; t--;) i = n[t], e[i] = s[i];
            return e.target || (e.target = s.srcElement || fe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, n, r, s = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || fe, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return re.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, i, n) {
            var r = re.extend(new re.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? re.event.trigger(r, null, t) : re.event.dispatch.call(t, r), r.isDefaultPrevented() && i.preventDefault()
        }
    }, re.removeEvent = fe.removeEventListener ? function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function(e, t, i) {
        var n = "on" + t;
        e.detachEvent && (typeof e[n] === Te && (e[n] = null), e.detachEvent(n, i))
    }, re.Event = function(e, t) {
        return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : p) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
    }, re.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = d, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = d, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this,
                    r = e.relatedTarget,
                    s = e.handleObj;
                return (!r || r !== n && !re.contains(n, r)) && (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), ie.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    i = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
                i && !re._data(i, "submitBubbles") && (re.event.add(i, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), re._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }), ie.changeBubbles || (re.event.special.change = {
        setup: function() {
            return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                De.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                }), re._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"), !De.test(this.nodeName)
        }
    }), ie.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            re.event.simulate(t, e.target, re.event.fix(e), !0)
        };
        re.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    r = re._data(n, t);
                r || n.addEventListener(e, i, !0), re._data(n, t, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    r = re._data(n, t) - 1;
                r ? re._data(n, t, r) : (n.removeEventListener(e, i, !0), re._removeData(n, t))
            }
        }
    }), re.fn.extend({
        on: function(e, t, i, n, r) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof t && (i = i || t, t = void 0);
                for (s in e) this.on(s, t, i, e[s], r);
                return this
            }
            if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), n === !1) n = p;
            else if (!n) return this;
            return 1 === r && (a = n, n = function(e) {
                return re().off(e), a.apply(this, arguments)
            }, n.guid = a.guid || (a.guid = re.guid++)), this.each(function() {
                re.event.add(this, e, n, i, t)
            })
        },
        one: function(e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, re(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (i = t, t = void 0), i === !1 && (i = p), this.each(function() {
                re.event.remove(this, e, i, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                re.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            return i ? re.event.trigger(e, t, i, !0) : void 0
        }
    });
    var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ie = / jQuery\d+="(?:null|\d+)"/g,
        Fe = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
        $e = /^\s+/,
        qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        He = /<([\w:]+)/,
        ze = /<tbody/i,
        Xe = /<|&#?\w+;/,
        Be = /<(?:script|style|link)/i,
        Qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ve = /^$|\/(?:java|ecma)script/i,
        We = /^true\/(.*)/,
        Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ye = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Je = m(fe),
        Ge = Je.appendChild(fe.createElement("div"));
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td, re.extend({
        clone: function(e, t, i) {
            var n, r, s, a, o, l = re.contains(e.ownerDocument, e);
            if (ie.html5Clone || re.isXMLDoc(e) || !Fe.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ge.innerHTML = e.outerHTML, Ge.removeChild(s = Ge.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                for (n = _(s), o = _(e), a = 0; null != (r = o[a]); ++a) n[a] && T(r, n[a]);
            if (t)
                if (i)
                    for (o = o || _(e), n = n || _(s), a = 0; null != (r = o[a]); a++) b(r, n[a]);
                else b(e, s);
            return n = _(s, "script"), n.length > 0 && x(n, !l && _(e, "script")), n = o = r = null, s
        },
        buildFragment: function(e, t, i, n) {
            for (var r, s, a, o, l, u, c, h = e.length, d = m(t), p = [], f = 0; h > f; f++)
                if (s = e[f], s || 0 === s)
                    if ("object" === re.type(s)) re.merge(p, s.nodeType ? [s] : s);
                    else if (Xe.test(s)) {
                for (o = o || d.appendChild(t.createElement("div")), l = (He.exec(s) || ["", ""])[1].toLowerCase(), c = Ye[l] || Ye._default, o.innerHTML = c[1] + s.replace(qe, "<$1></$2>") + c[2], r = c[0]; r--;) o = o.lastChild;
                if (!ie.leadingWhitespace && $e.test(s) && p.push(t.createTextNode($e.exec(s)[0])), !ie.tbody)
                    for (s = "table" !== l || ze.test(s) ? "<table>" !== c[1] || ze.test(s) ? 0 : o : o.firstChild, r = s && s.childNodes.length; r--;) re.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
                for (re.merge(p, o.childNodes), o.textContent = ""; o.firstChild;) o.removeChild(o.firstChild);
                o = d.lastChild
            } else p.push(t.createTextNode(s));
            for (o && d.removeChild(o), ie.appendChecked || re.grep(_(p, "input"), g), f = 0; s = p[f++];)
                if ((!n || -1 === re.inArray(s, n)) && (a = re.contains(s.ownerDocument, s), o = _(d.appendChild(s), "script"), a && x(o), i))
                    for (r = 0; s = o[r++];) Ve.test(s.type || "") && i.push(s);
            return o = null, d
        },
        cleanData: function(e, t) {
            for (var i, n, r, s, a = 0, o = re.expando, l = re.cache, u = ie.deleteExpando, c = re.event.special; null != (i = e[a]); a++)
                if ((t || re.acceptData(i)) && (r = i[o], s = r && l[r])) {
                    if (s.events)
                        for (n in s.events) c[n] ? re.event.remove(i, n) : re.removeEvent(i, n, s.handle);
                    l[r] && (delete l[r], u ? delete i[o] : typeof i.removeAttribute !== Te ? i.removeAttribute(o) : i[o] = null, U.push(r))
                }
        }
    }), re.fn.extend({
        text: function(e) {
            return Ee(this, function(e) {
                return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var i, n = e ? re.filter(e, this) : this, r = 0; null != (i = n[r]); r++) t || 1 !== i.nodeType || re.cleanData(_(i)), i.parentNode && (t && re.contains(i.ownerDocument, i) && x(_(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && re.cleanData(_(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && re.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return re.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ee(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ie, "") : void 0;
                if (!("string" != typeof e || Be.test(e) || !ie.htmlSerialize && Fe.test(e) || !ie.leadingWhitespace && $e.test(e) || Ye[(He.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(qe, "<$1></$2>");
                    try {
                        for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (re.cleanData(_(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, re.cleanData(_(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = J.apply([], e);
            var i, n, r, s, a, o, l = 0,
                u = this.length,
                c = this,
                h = u - 1,
                d = e[0],
                p = re.isFunction(d);
            if (p || u > 1 && "string" == typeof d && !ie.checkClone && Qe.test(d)) return this.each(function(i) {
                var n = c.eq(i);
                p && (e[0] = d.call(this, i, n.html())), n.domManip(e, t)
            });
            if (u && (o = re.buildFragment(e, this[0].ownerDocument, !1, this), i = o.firstChild, 1 === o.childNodes.length && (o = i), i)) {
                for (s = re.map(_(o, "script"), v), r = s.length; u > l; l++) n = o, l !== h && (n = re.clone(n, !0, !0), r && re.merge(s, _(n, "script"))), t.call(this[l], n, l);
                if (r)
                    for (a = s[s.length - 1].ownerDocument, re.map(s, w), l = 0; r > l; l++) n = s[l], Ve.test(n.type || "") && !re._data(n, "globalEval") && re.contains(a, n) && (n.src ? re._evalUrl && re._evalUrl(n.src) : re.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ue, "")));
                o = i = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        re.fn[e] = function(e) {
            for (var i, n = 0, r = [], s = re(e), a = s.length - 1; a >= n; n++) i = n === a ? this : this.clone(!0), re(s[n])[t](i), G.apply(r, i.get());
            return this.pushStack(r)
        }
    });
    var Ze, Ke = {};
    ! function() {
        var e;
        ie.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, i, n;
            return i = fe.getElementsByTagName("body")[0], i && i.style ? (t = fe.createElement("div"),
                n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(fe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), i.removeChild(n), e) : void 0
        }
    }();
    var et, tt, it = /^margin/,
        nt = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
        rt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, tt = function(e, t, i) {
        var n, r, s, a, o = e.style;
        return i = i || et(e), a = i ? i.getPropertyValue(t) || i[t] : void 0, i && ("" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), nt.test(a) && it.test(t) && (n = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = i.width, o.width = n, o.minWidth = r, o.maxWidth = s)), void 0 === a ? a : a + ""
    }) : fe.documentElement.currentStyle && (et = function(e) {
        return e.currentStyle
    }, tt = function(e, t, i) {
        var n, r, s, a, o = e.style;
        return i = i || et(e), a = i ? i[t] : void 0, null == a && o && o[t] && (a = o[t]), nt.test(a) && !rt.test(t) && (n = o.left, r = e.runtimeStyle, s = r && r.left, s && (r.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : a, a = o.pixelLeft + "px", o.left = n, s && (r.left = s)), void 0 === a ? a : a + "" || "auto"
    }), ! function() {
        function t() {
            var t, i, n, r;
            i = fe.getElementsByTagName("body")[0], i && i.style && (t = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = a = !1, l = !0, e.getComputedStyle && (s = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                width: "4px"
            }).width, r = t.appendChild(fe.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === r[0].offsetHeight, o && (r[0].style.display = "", r[1].style.display = "none", o = 0 === r[0].offsetHeight), i.removeChild(n))
        }
        var i, n, r, s, a, o, l;
        i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = i.getElementsByTagName("a")[0], (n = r && r.style) && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, re.extend(ie, {
            reliableHiddenOffsets: function() {
                return null == o && t(), o
            },
            boxSizingReliable: function() {
                return null == a && t(), a
            },
            pixelPosition: function() {
                return null == s && t(), s
            },
            reliableMarginRight: function() {
                return null == l && t(), l
            }
        }))
    }(), re.swap = function(e, t, i, n) {
        var r, s, a = {};
        for (s in t) a[s] = e.style[s], e.style[s] = t[s];
        r = i.apply(e, n || []);
        for (s in t) e.style[s] = a[s];
        return r
    };
    var st = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        ot = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + Pe + ")(.*)$", "i"),
        ut = new RegExp("^([+-])=(" + Pe + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ht = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dt = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = tt(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ie.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, s, a, o = re.camelCase(t),
                    l = e.style;
                if (t = re.cssProps[o] || (re.cssProps[o] = k(l, o)), a = re.cssHooks[t] || re.cssHooks[o], void 0 === i) return a && "get" in a && void 0 !== (r = a.get(e, !1, n)) ? r : l[t];
                if (s = typeof i, "string" === s && (r = ut.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)), s = "number"), null != i && i === i && ("number" !== s || re.cssNumber[o] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (i = a.set(e, i, n))))) try {
                    l[t] = i
                } catch (u) {}
            }
        },
        css: function(e, t, i, n) {
            var r, s, a, o = re.camelCase(t);
            return t = re.cssProps[o] || (re.cssProps[o] = k(e.style, o)), a = re.cssHooks[t] || re.cssHooks[o], a && "get" in a && (s = a.get(e, !0, i)), void 0 === s && (s = tt(e, t, n)), "normal" === s && t in ht && (s = ht[t]), "" === i || i ? (r = parseFloat(s), i === !0 || re.isNumeric(r) ? r || 0 : s) : s
        }
    }), re.each(["height", "width"], function(e, t) {
        re.cssHooks[t] = {
            get: function(e, i, n) {
                return i ? ot.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, ct, function() {
                    return D(e, t, n)
                }) : D(e, t, n) : void 0
            },
            set: function(e, i, n) {
                var r = n && et(e);
                return E(e, i, n ? A(e, t, n, ie.boxSizing && "border-box" === re.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ie.opacity || (re.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var i = e.style,
                n = e.currentStyle,
                r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = n && n.filter || i.filter || "";
            i.zoom = 1, (t >= 1 || "" === t) && "" === re.trim(s.replace(st, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = st.test(s) ? s.replace(st, r) : s + " " + r)
        }
    }), re.cssHooks.marginRight = P(ie.reliableMarginRight, function(e, t) {
        return t ? re.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        re.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[e + ke[n] + t] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, it.test(e) || (re.cssHooks[e + t].set = E)
    }), re.fn.extend({
        css: function(e, t) {
            return Ee(this, function(e, t, i) {
                var n, r, s = {},
                    a = 0;
                if (re.isArray(t)) {
                    for (n = et(e), r = t.length; r > a; a++) s[t[a]] = re.css(e, t[a], !1, n);
                    return s
                }
                return void 0 !== i ? re.style(e, t, i) : re.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return L(this, !0)
        },
        hide: function() {
            return L(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Le(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = O, O.prototype = {
        constructor: O,
        init: function(e, t, i, n, r, s) {
            this.elem = e, this.prop = i, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (re.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = O.propHooks[this.prop];
            return this.pos = t = this.options.duration ? re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : O.propHooks._default.set(this), this
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, re.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, re.fx = O.prototype.init, re.fx.step = {};
    var pt, ft, mt = /^(?:toggle|show|hide)$/,
        _t = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
        gt = /queueHooks$/,
        yt = [M],
        vt = {
            "*": [function(e, t) {
                var i = this.createTween(e, t),
                    n = i.cur(),
                    r = _t.exec(t),
                    s = r && r[3] || (re.cssNumber[e] ? "" : "px"),
                    a = (re.cssNumber[e] || "px" !== s && +n) && _t.exec(re.css(i.elem, e)),
                    o = 1,
                    l = 20;
                if (a && a[3] !== s) {
                    s = s || a[3], r = r || [], a = +n || 1;
                    do o = o || ".5", a /= o, re.style(i.elem, e, a + s); while (o !== (o = i.cur() / n) && 1 !== o && --l)
                }
                return r && (a = i.start = +a || +n || 0, i.unit = s, i.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), i
            }]
        };
    re.Animation = re.extend(F, {
            tweener: function(e, t) {
                re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var i, n = 0, r = e.length; r > n; n++) i = e[n], vt[i] = vt[i] || [], vt[i].unshift(t)
            },
            prefilter: function(e, t) {
                t ? yt.unshift(e) : yt.push(e)
            }
        }), re.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? re.extend({}, e) : {
                complete: i || !i && t || re.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !re.isFunction(t) && t
            };
            return n.duration = re.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in re.fx.speeds ? re.fx.speeds[n.duration] : re.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                re.isFunction(n.old) && n.old.call(this), n.queue && re.dequeue(this, n.queue)
            }, n
        }, re.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(Le).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, t, i, n) {
                var r = re.isEmptyObject(e),
                    s = re.speed(t, i, n),
                    a = function() {
                        var t = F(this, re.extend({}, e), s);
                        (r || re._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || s.queue === !1 ? this.each(a) : this.queue(s.queue, a)
            },
            stop: function(e, t, i) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        s = re.timers,
                        a = re._data(this);
                    if (r) a[r] && a[r].stop && n(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && gt.test(r) && n(a[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(i), t = !1, s.splice(r, 1));
                    (t || !i) && re.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, i = re._data(this),
                        n = i[e + "queue"],
                        r = i[e + "queueHooks"],
                        s = re.timers,
                        a = n ? n.length : 0;
                    for (i.finish = !0, re.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; a > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function(e, t) {
            var i = re.fn[t];
            re.fn[t] = function(e, n, r) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(N(t, !0), e, n, r)
            }
        }), re.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            re.fn[e] = function(e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), re.timers = [], re.fx.tick = function() {
            var e, t = re.timers,
                i = 0;
            for (pt = re.now(); i < t.length; i++) e = t[i], e() || t[i] !== e || t.splice(i--, 1);
            t.length || re.fx.stop(), pt = void 0
        }, re.fx.timer = function(e) {
            re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function() {
            ft || (ft = setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function() {
            clearInterval(ft), ft = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function(e, t) {
            return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) {
                var n = setTimeout(t, e);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var e, t, i, n, r;
            t = fe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = t.getElementsByTagName("a")[0], i = fe.createElement("select"), r = i.appendChild(fe.createElement("option")), e = t.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== t.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!e.value, ie.optSelected = r.selected, ie.enctype = !!fe.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !r.disabled, e = fe.createElement("input"), e.setAttribute("value", ""), ie.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ie.radioValue = "t" === e.value
        }();
    var wt = /\r/g;
    re.fn.extend({
        val: function(e) {
            var t, i, n, r = this[0];
            return arguments.length ? (n = re.isFunction(e), this.each(function(i) {
                var r;
                1 === this.nodeType && (r = n ? e.call(this, i, re(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(wt, "") : null == i ? "" : i)) : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = re.find.attr(e, "value");
                    return null != t ? t : re.trim(re.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, r = e.selectedIndex, s = "select-one" === e.type || 0 > r, a = s ? null : [], o = s ? r + 1 : n.length, l = 0 > r ? o : s ? r : 0; o > l; l++)
                        if (i = n[l], !(!i.selected && l !== r || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && re.nodeName(i.parentNode, "optgroup"))) {
                            if (t = re(i).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var i, n, r = e.options, s = re.makeArray(t), a = r.length; a--;)
                        if (n = r[a], re.inArray(re.valHooks.option.get(n), s) >= 0) try {
                            n.selected = i = !0
                        } catch (o) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (e.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(e, t) {
                return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
            }
        }, ie.checkOn || (re.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xt, bt, Tt = re.expr.attrHandle,
        Ct = /^(?:checked|selected)$/i,
        St = ie.getSetAttribute,
        Pt = ie.input;
    re.fn.extend({
        attr: function(e, t) {
            return Ee(this, re.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                re.removeAttr(this, e)
            })
        }
    }), re.extend({
        attr: function(e, t, i) {
            var n, r, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === Te ? re.prop(e, t, i) : (1 === s && re.isXMLDoc(e) || (t = t.toLowerCase(), n = re.attrHooks[t] || (re.expr.match.bool.test(t) ? bt : xt)), void 0 === i ? n && "get" in n && null !== (r = n.get(e, t)) ? r : (r = re.find.attr(e, t), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(e, i, t)) ? r : (e.setAttribute(t, i + ""), i) : void re.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var i, n, r = 0,
                s = t && t.match(ve);
            if (s && 1 === e.nodeType)
                for (; i = s[r++];) n = re.propFix[i] || i, re.expr.match.bool.test(i) ? Pt && St || !Ct.test(i) ? e[n] = !1 : e[re.camelCase("default-" + i)] = e[n] = !1 : re.attr(e, i, ""), e.removeAttribute(St ? i : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ie.radioValue && "radio" === t && re.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }
    }), bt = {
        set: function(e, t, i) {
            return t === !1 ? re.removeAttr(e, i) : Pt && St || !Ct.test(i) ? e.setAttribute(!St && re.propFix[i] || i, i) : e[re.camelCase("default-" + i)] = e[i] = !0, i
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = Tt[t] || re.find.attr;
        Tt[t] = Pt && St || !Ct.test(t) ? function(e, t, n) {
            var r, s;
            return n || (s = Tt[t], Tt[t] = r, r = null != i(e, t, n) ? t.toLowerCase() : null, Tt[t] = s), r
        } : function(e, t, i) {
            return i ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Pt && St || (re.attrHooks.value = {
        set: function(e, t, i) {
            return re.nodeName(e, "input") ? void(e.defaultValue = t) : xt && xt.set(e, t, i)
        }
    }), St || (xt = {
        set: function(e, t, i) {
            var n = e.getAttributeNode(i);
            return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)), n.value = t += "", "value" === i || t === e.getAttribute(i) ? t : void 0
        }
    }, Tt.id = Tt.name = Tt.coords = function(e, t, i) {
        var n;
        return i ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
    }, re.valHooks.button = {
        get: function(e, t) {
            var i = e.getAttributeNode(t);
            return i && i.specified ? i.value : void 0
        },
        set: xt.set
    }, re.attrHooks.contenteditable = {
        set: function(e, t, i) {
            xt.set(e, "" === t ? !1 : t, i)
        }
    }, re.each(["width", "height"], function(e, t) {
        re.attrHooks[t] = {
            set: function(e, i) {
                return "" === i ? (e.setAttribute(t, "auto"), i) : void 0
            }
        }
    })), ie.style || (re.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var kt = /^(?:input|select|textarea|button|object)$/i,
        Lt = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(e, t) {
            return Ee(this, re.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = re.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, i) {
            var n, r, s, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (s = 1 !== a || !re.isXMLDoc(e), s && (t = re.propFix[t] || t, r = re.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = re.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : kt.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || re.each(["href", "src"], function(e, t) {
        re.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ie.optSelected || (re.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }), ie.enctype || (re.propFix.enctype = "encoding");
    var Et = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(e) {
            var t, i, n, r, s, a, o = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ve) || []; l > o; o++)
                    if (i = this[o], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Et, " ") : " ")) {
                        for (s = 0; r = t[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        a = re.trim(n), i.className !== a && (i.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, r, s, a, o = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ve) || []; l > o; o++)
                    if (i = this[o], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Et, " ") : "")) {
                        for (s = 0; r = t[s++];)
                            for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                        a = e ? re.trim(n) : "", i.className !== a && (i.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : this.each(re.isFunction(e) ? function(i) {
                re(this).toggleClass(e.call(this, i, this.className, t), t)
            } : function() {
                if ("string" === i)
                    for (var t, n = 0, r = re(this), s = e.match(ve) || []; t = s[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(i === Te || "boolean" === i) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Et, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        re.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), re.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var At = re.now(),
        Dt = /\?/,
        Ot = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var i, n = null,
            r = re.trim(t + "");
        return r && !re.trim(r.replace(Ot, function(e, t, r, s) {
            return i && t && (n = 0), 0 === n ? e : (i = r || t, n += !s - !r, "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + t)
    }, re.parseXML = function(t) {
        var i, n;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (n = new DOMParser, i = n.parseFromString(t, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(t))
        } catch (r) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), i
    };
    var jt, Nt, Rt = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        $t = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Ht = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        zt = {},
        Xt = {},
        Bt = "*/".concat("*");
    try {
        Nt = location.href
    } catch (Qt) {
        Nt = fe.createElement("a"), Nt.href = "", Nt = Nt.href
    }
    jt = Ht.exec(Nt.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Nt,
            type: "GET",
            isLocal: Ft.test(jt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, re.ajaxSettings), t) : H(re.ajaxSettings, e)
        },
        ajaxPrefilter: $(zt),
        ajaxTransport: $(Xt),
        ajax: function(e, t) {
            function i(e, t, i, n) {
                var r, c, g, y, w, b = t;
                2 !== v && (v = 2, o && clearTimeout(o), u = void 0, a = n || "", x.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, i && (y = z(h, x, i)), y = X(h, y, x, r), r ? (h.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (re.lastModified[s] = w), w = x.getResponseHeader("etag"), w && (re.etag[s] = w)), 204 === e || "HEAD" === h.type ? b = "nocontent" : 304 === e ? b = "notmodified" : (b = y.state, c = y.data, g = y.error, r = !g)) : (g = b, (e || !b) && (b = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || b) + "", r ? f.resolveWith(d, [c, b, x]) : f.rejectWith(d, [x, b, g]), x.statusCode(_), _ = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [x, h, r ? c : g]), m.fireWith(d, [x, b]), l && (p.trigger("ajaxComplete", [x, h]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, r, s, a, o, l, u, c, h = re.ajaxSetup({}, t),
                d = h.context || h,
                p = h.context && (d.nodeType || d.jquery) ? re(d) : re.event,
                f = re.Deferred(),
                m = re.Callbacks("once memory"),
                _ = h.statusCode || {},
                g = {},
                y = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === v) {
                            if (!c)
                                for (c = {}; t = It.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return v || (e = y[i] = y[i] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return v || (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > v)
                                for (t in e) _[t] = [_[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), i(0, t), this
                    }
                };
            if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, h.url = ((e || h.url || Nt) + "").replace(Rt, "").replace(qt, jt[1] + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = re.trim(h.dataType || "*").toLowerCase().match(ve) || [""], null == h.crossDomain && (n = Ht.exec(h.url.toLowerCase()), h.crossDomain = !(!n || n[1] === jt[1] && n[2] === jt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (jt[3] || ("http:" === jt[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = re.param(h.data, h.traditional)), q(zt, h, t, x), 2 === v) return x;
            l = h.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !$t.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (Dt.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Mt.test(s) ? s.replace(Mt, "$1_=" + At++) : s + (Dt.test(s) ? "&" : "?") + "_=" + At++)), h.ifModified && (re.lastModified[s] && x.setRequestHeader("If-Modified-Since", re.lastModified[s]), re.etag[s] && x.setRequestHeader("If-None-Match", re.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]);
            for (r in h.headers) x.setRequestHeader(r, h.headers[r]);
            if (h.beforeSend && (h.beforeSend.call(d, x, h) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[r](h[r]);
            if (u = q(Xt, h, t, x)) {
                x.readyState = 1, l && p.trigger("ajaxSend", [x, h]), h.async && h.timeout > 0 && (o = setTimeout(function() {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    v = 1, u.send(g, i)
                } catch (b) {
                    if (!(2 > v)) throw b;
                    i(-1, b)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, i) {
            return re.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return re.get(e, void 0, t, "script")
        }
    }), re.each(["get", "post"], function(e, t) {
        re[t] = function(e, i, n, r) {
            return re.isFunction(i) && (r = r || n, n = i, i = void 0), re.ajax({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: n
            })
        }
    }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        re.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), re._evalUrl = function(e) {
        return re.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, re.fn.extend({
        wrapAll: function(e) {
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(re.isFunction(e) ? function(t) {
                re(this).wrapInner(e.call(this, t))
            } : function() {
                var t = re(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = re.isFunction(e);
            return this.each(function(i) {
                re(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
    }, re.expr.filters.visible = function(e) {
        return !re.expr.filters.hidden(e)
    };
    var Vt = /%20/g,
        Wt = /\[\]$/,
        Ut = /\r?\n/g,
        Yt = /^(?:submit|button|image|reset|file)$/i,
        Jt = /^(?:input|select|textarea|keygen)/i;
    re.param = function(e, t) {
        var i, n = [],
            r = function(e, t) {
                t = re.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (i in e) B(i, e[i], t, r);
        return n.join("&").replace(Vt, "+")
    }, re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = re.prop(this, "elements");
                return e ? re.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !re(this).is(":disabled") && Jt.test(this.nodeName) && !Yt.test(e) && (this.checked || !Ae.test(e))
            }).map(function(e, t) {
                var i = re(this).val();
                return null == i ? null : re.isArray(i) ? re.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ut, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Ut, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || V()
    } : Q;
    var Gt = 0,
        Zt = {},
        Kt = re.ajaxSettings.xhr();
    e.ActiveXObject && re(e).on("unload", function() {
        for (var e in Zt) Zt[e](void 0, !0)
    }), ie.cors = !!Kt && "withCredentials" in Kt, Kt = ie.ajax = !!Kt, Kt && re.ajaxTransport(function(e) {
      return;
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return re.globalEval(e), e
            }
        }
    }), re.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), re.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i = fe.head || re("head")[0] || fe.documentElement;
            return {
                send: function(n, r) {
                    t = fe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || r(200, "success"))
                    }, i.insertBefore(t, i.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ei = [],
        ti = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ei.pop() || re.expando + "_" + At++;
            return this[e] = !0, e
        }
    }), re.ajaxPrefilter("json jsonp", function(t, i, n) {
        var r, s, a, o = t.jsonp !== !1 && (ti.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
        return o || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(ti, "$1" + r) : t.jsonp !== !1 && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || re.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", s = e[r], e[r] = function() {
            a = arguments
        }, n.always(function() {
            e[r] = s, t[r] && (t.jsonpCallback = i.jsonpCallback, ei.push(r)), a && re.isFunction(s) && s(a[0]), a = s = void 0
        }), "script") : void 0
    }), re.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || fe;
        var n = he.exec(e),
            r = !i && [];
        return n ? [t.createElement(n[1])] : (n = re.buildFragment([e], t, r), r && r.length && re(r).remove(), re.merge([], n.childNodes))
    };
    var ii = re.fn.load;
    re.fn.load = function(e, t, i) {
        if ("string" != typeof e && ii) return ii.apply(this, arguments);
        var n, r, s, a = this,
            o = e.indexOf(" ");
        return o >= 0 && (n = re.trim(e.slice(o, e.length)), e = e.slice(0, o)), re.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), a.length > 0 && re.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, a.html(n ? re("<div>").append(re.parseHTML(e)).find(n) : e)
        }).complete(i && function(e, t) {
            a.each(i, r || [e.responseText, t, e])
        }), this
    }, re.expr.filters.animated = function(e) {
        return re.grep(re.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ni = e.document.documentElement;
    re.offset = {
        setOffset: function(e, t, i) {
            var n, r, s, a, o, l, u, c = re.css(e, "position"),
                h = re(e),
                d = {};
            "static" === c && (e.style.position = "relative"), o = h.offset(), s = re.css(e, "top"), l = re.css(e, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [s, l]) > -1, u ? (n = h.position(), a = n.top, r = n.left) : (a = parseFloat(s) || 0, r = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, i, o)), null != t.top && (d.top = t.top - o.top + a), null != t.left && (d.left = t.left - o.left + r), "using" in t ? t.using.call(e, d) : h.css(d)
        }
    }, re.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                re.offset.setOffset(this, e, t)
            });
            var t, i, n = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                s = r && r.ownerDocument;
            return s ? (t = s.documentElement, re.contains(t, r) ? (typeof r.getBoundingClientRect !== Te && (n = r.getBoundingClientRect()), i = W(s), {
                top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : n) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === re.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (i = e.offset()), i.top += re.css(e[0], "borderTopWidth", !0), i.left += re.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - re.css(n, "marginTop", !0),
                    left: t.left - i.left - re.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ni; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent;
                return e || ni
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = /Y/.test(t);
        re.fn[e] = function(n) {
            return Ee(this, function(e, n, r) {
                var s = W(e);
                return void 0 === r ? s ? t in s ? s[t] : s.document.documentElement[n] : e[n] : void(s ? s.scrollTo(i ? re(s).scrollLeft() : r, i ? r : re(s).scrollTop()) : e[n] = r)
            }, e, n, arguments.length, null)
        }
    }), re.each(["top", "left"], function(e, t) {
        re.cssHooks[t] = P(ie.pixelPosition, function(e, i) {
            return i ? (i = tt(e, t), nt.test(i) ? re(e).position()[t] + "px" : i) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        re.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            re.fn[n] = function(n, r) {
                var s = arguments.length && (i || "boolean" != typeof n),
                    a = i || (n === !0 || r === !0 ? "margin" : "border");
                return Ee(this, function(t, i, n) {
                    var r;
                    return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === n ? re.css(t, i, a) : re.style(t, i, n, a)
                }, t, s ? n : void 0, s, null)
            }
        })
    }), re.fn.size = function() {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var ri = e.jQuery,
        si = e.$;
    return re.noConflict = function(t) {
        return e.$ === re && (e.$ = si), t && e.jQuery === re && (e.jQuery = ri), re
    }, typeof t === Te && (e.jQuery = e.$ = re), re
}), window.Modernizr = function(e, t, i) {
    function n(e) {
        g.cssText = e
    }

    function r(e, t) {
        return typeof e === t
    }

    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function a(e, t) {
        for (var n in e) {
            var r = e[n];
            if (!s(r, "-") && g[r] !== i) return "pfx" == t ? r : !0
        }
        return !1
    }

    function o(e, t, n) {
        for (var s in e) {
            var a = t[e[s]];
            if (a !== i) return n === !1 ? e[s] : r(a, "function") ? a.bind(n || t) : a
        }
        return !1
    }

    function l(e, t, i) {
        var n = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + w.join(n + " ") + n).split(" ");
        return r(t, "string") || r(t, "undefined") ? a(s, t) : (s = (e + " " + x.join(n + " ") + n).split(" "), o(s, t, i))
    }
    var u, c, h, d = "2.8.3",
        p = {},
        f = t.documentElement,
        m = "modernizr",
        _ = t.createElement(m),
        g = _.style,
        y = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
        v = "Webkit Moz O ms",
        w = v.split(" "),
        x = v.toLowerCase().split(" "),
        b = {},
        T = [],
        C = T.slice,
        S = function(e, i, n, r) {
            var s, a, o, l, u = t.createElement("div"),
                c = t.body,
                h = c || t.createElement("body");
            if (parseInt(n, 10))
                for (; n--;) o = t.createElement("div"), o.id = r ? r[n] : m + (n + 1), u.appendChild(o);
            return s = ["&#173;", '<style id="s', m, '">', e, "</style>"].join(""), u.id = m, (c ? u : h).innerHTML += s, h.appendChild(u), c || (h.style.background = "", h.style.overflow = "hidden", l = f.style.overflow, f.style.overflow = "hidden", f.appendChild(h)), a = i(u, e), c ? u.parentNode.removeChild(u) : (h.parentNode.removeChild(h), f.style.overflow = l), !!a
        },
        P = {}.hasOwnProperty;
    h = r(P, "undefined") || r(P.call, "undefined") ? function(e, t) {
        return t in e && r(e.constructor.prototype[t], "undefined")
    } : function(e, t) {
        return P.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var i = C.call(arguments, 1),
            n = function() {
                if (this instanceof n) {
                    var r = function() {};
                    r.prototype = t.prototype;
                    var s = new r,
                        a = t.apply(s, i.concat(C.call(arguments)));
                    return Object(a) === a ? a : s
                }
                return t.apply(e, i.concat(C.call(arguments)))
            };
        return n
    }), b.touch = function() {
        var i;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? i = !0 : S(["@media (", y.join("touch-enabled),("), m, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            i = 9 === e.offsetTop
        }), i
    }, b.csstransitions = function() {
        return l("transition")
    };
    for (var k in b) h(b, k) && (c = k.toLowerCase(), p[c] = b[k](), T.push((p[c] ? "" : "no-") + c));
    return p.addTest = function(e, t) {
        if ("object" == typeof e)
            for (var n in e) h(e, n) && p.addTest(n, e[n]);
        else {
            if (e = e.toLowerCase(), p[e] !== i) return p;
            t = "function" == typeof t ? t() : t, "undefined" != typeof enableClasses && enableClasses && (f.className += " " + (t ? "" : "no-") + e), p[e] = t
        }
        return p
    }, n(""), _ = u = null, p._version = d, p._prefixes = y, p._domPrefixes = x, p._cssomPrefixes = w, p.testProp = function(e) {
        return a([e])
    }, p.testAllProps = l, p.testStyles = S, p
}(this, this.document);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
                var n = function(e) {
                        var t, i = [],
                            n = e.length;
                        for (t = 0; t !== n; i.push(e[t++]));
                        return i
                    },
                    r = function(e, t, n) {
                        i.call(this, e, t, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    s = 1e-10,
                    a = i._internals,
                    o = a.isSelector,
                    l = a.isArray,
                    u = r.prototype = i.to({}, .1, {}),
                    c = [];
                r.version = "1.13.1", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, u.updateTo = function(e, t) {
                    var n, r = this.ratio;
                    t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in e) this.vars[n] = e[n];
                    if (this._initted)
                        if (t) this._initted = !1;
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var s = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var a, o = 1 / (1 - r), l = this._firstPT; l;) a = l.s + l.c, l.c *= o, l.s = a - l.c, l = l._next
                    }
                    return this
                }, u.render = function(e, t, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, o, l, u, h, d, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        _ = this._totalTime,
                        g = this._cycle,
                        y = this._duration,
                        v = this._rawPrevTime;
                    if (e >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete"), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > v || v === s) && v !== e && (i = !0, v > s && (r = "onReverseComplete")), this._rawPrevTime = p = !t || e || v === e ? e : s)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === y && v > 0 && v !== s) && (r = "onReverseComplete", n = this._reversed), 0 > e ? (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = p = !t || e || v === e ? e : s)) : this._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : 0 > this._time && (this._time = 0)), this._easeType ? (u = this._time / y, h = this._easeType, d = this._easePower, (1 === h || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === d ? u *= u : 2 === d ? u *= u * u : 3 === d ? u *= u * u * u : 4 === d && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : .5 > this._time / y ? u / 2 : 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / y)), m === this._time && !i && g === this._cycle) return void(_ !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = _, this._rawPrevTime = v, this._cycle = g, a.lazyTweens.push(this), void(this._lazy = e);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / y) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && e >= 0 && (this._active = !0), 0 === _ && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, i), t || (this._totalTime !== _ || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)), this._cycle !== g && (t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || c)), r && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || c), 0 === y && this._rawPrevTime === s && p !== s && (this._rawPrevTime = 0))
                }, r.to = function(e, t, i) {
                    return new r(e, t, i)
                }, r.from = function(e, t, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(e, t, i)
                }, r.fromTo = function(e, t, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(e, t, n)
                }, r.staggerTo = r.allTo = function(e, t, s, a, u, h, d) {
                    a = a || 0;
                    var p, f, m, _, g = s.delay || 0,
                        y = [],
                        v = function() {
                            s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), u.apply(d || this, h || c)
                        };
                    for (l(e) || ("string" == typeof e && (e = i.selector(e) || e), o(e) && (e = n(e))), p = e.length, m = 0; p > m; m++) {
                        f = {};
                        for (_ in s) f[_] = s[_];
                        f.delay = g, m === p - 1 && u && (f.onComplete = v), y[m] = new r(e[m], t, f), g += a
                    }
                    return y
                }, r.staggerFrom = r.allFrom = function(e, t, i, n, s, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(e, t, i, n, s, a, o)
                }, r.staggerFromTo = r.allFromTo = function(e, t, i, n, s, a, o, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(e, t, n, s, a, o, l)
                }, r.delayedCall = function(e, t, i, n, s) {
                    return new r(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: i,
                        onCompleteScope: n,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: n,
                        immediateRender: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, r.set = function(e, t) {
                    return new r(e, 0, t)
                }, r.isTweening = function(e) {
                    return i.getTweensOf(e, !0).length > 0
                };
                var h = function(e, t) {
                        for (var n = [], r = 0, s = e._first; s;) s instanceof i ? n[r++] = s : (t && (n[r++] = s), n = n.concat(h(s, t)), r = n.length), s = s._next;
                        return n
                    },
                    d = r.getAllTweens = function(t) {
                        return h(e._rootTimeline, t).concat(h(e._rootFramesTimeline, t))
                    };
                r.killAll = function(e, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, a, o, l = d(0 != r),
                        u = l.length,
                        c = i && n && r;
                    for (o = 0; u > o; o++) a = l[o], (c || a instanceof t || (s = a.target === a.vars.onComplete) && n || i && !s) && (e ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(e, t) {
                    if (null != e) {
                        var s, u, c, h, d, p = a.tweenLookup;
                        if ("string" == typeof e && (e = i.selector(e) || e), o(e) && (e = n(e)), l(e))
                            for (h = e.length; --h > -1;) r.killChildTweensOf(e[h], t);
                        else {
                            s = [];
                            for (c in p)
                                for (u = p[c].target.parentNode; u;) u === e && (s = s.concat(p[c].tweens)), u = u.parentNode;
                            for (d = s.length, h = 0; d > h; h++) t && s[h].totalTime(s[h].totalDuration()), s[h]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(e, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var s, a, o = d(r), l = i && n && r, u = o.length; --u > -1;) a = o[u], (l || a instanceof t || (s = a.target === a.vars.onComplete) && n || i && !s) && a.paused(e)
                };
                return r.pauseAll = function(e, t, i) {
                    p(!0, e, t, i)
                }, r.resumeAll = function(e, t, i) {
                    p(!1, e, t, i)
                }, r.globalTimeScale = function(t) {
                    var n = e._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (t = t || s, n._startTime = r - (r - n._startTime) * n._timeScale / t, n = e._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / t, n._timeScale = e._rootTimeline._timeScale = t, t) : n._timeScale
                }, u.progress = function(e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, u.totalProgress = function(e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
                }, u.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, u.duration = function(t) {
                    return arguments.length ? e.prototype.duration.call(this, t) : this._duration
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, u.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
                var n = function(e) {
                        t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], o(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        o(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    s = i._internals,
                    a = s.isSelector,
                    o = s.isArray,
                    l = s.lazyTweens,
                    u = s.lazyRender,
                    c = [],
                    h = _gsScope._gsDefine.globals,
                    d = function(e) {
                        var t, i = {};
                        for (t in e) i[t] = e[t];
                        return i
                    },
                    p = function(e, t, i, n) {
                        e._timeline.pause(e._startTime), t && t.apply(n || e._timeline, i || c)
                    },
                    f = function(e) {
                        var t, i = [],
                            n = e.length;
                        for (t = 0; t !== n; i.push(e[t++]));
                        return i
                    },
                    m = n.prototype = new t;
                return n.version = "1.13.1", m.constructor = n, m.kill()._gc = !1, m.to = function(e, t, n, r) {
                    var s = n.repeat && h.TweenMax || i;
                    return t ? this.add(new s(e, t, n), r) : this.set(e, n, r)
                }, m.from = function(e, t, n, r) {
                    return this.add((n.repeat && h.TweenMax || i).from(e, t, n), r)
                }, m.fromTo = function(e, t, n, r, s) {
                    var a = r.repeat && h.TweenMax || i;
                    return t ? this.add(a.fromTo(e, t, n, r), s) : this.set(e, r, s)
                }, m.staggerTo = function(e, t, r, s, o, l, u, c) {
                    var h, p = new n({
                        onComplete: l,
                        onCompleteParams: u,
                        onCompleteScope: c,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof e && (e = i.selector(e) || e), a(e) && (e = f(e)), s = s || 0, h = 0; e.length > h; h++) r.startAt && (r.startAt = d(r.startAt)), p.to(e[h], t, d(r), h * s);
                    return this.add(p, o)
                }, m.staggerFrom = function(e, t, i, n, r, s, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, n, r, s, a, o)
                }, m.staggerFromTo = function(e, t, i, n, r, s, a, o, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, n, r, s, a, o, l)
                }, m.call = function(e, t, n, r) {
                    return this.add(i.delayedCall(0, e, t, n), r)
                }, m.set = function(e, t, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == t.immediateRender && (t.immediateRender = n === this._time && !this._paused), this.add(new i(e, 0, t), n)
                }, n.exportRoot = function(e, t) {
                    e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
                    var r, s, a = new n(e),
                        o = a._timeline;
                    for (null == t && (t = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) s = r._next, t && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = s;
                    return o.add(a, 0), a
                }, m.add = function(r, s, a, l) {
                    var u, c, h, d, p, f;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof e)) {
                        if (r instanceof Array || r && r.push && o(r)) {
                            for (a = a || "normal", l = l || 0, u = s, c = r.length, h = 0; c > h; h++) o(d = r[h]) && (d = new n({
                                tweens: d
                            })), this.add(d, u), "string" != typeof d && "function" != typeof d && ("sequence" === a ? u = d._startTime + d.totalDuration() / d._timeScale : "start" === a && (d._startTime -= d.delay())), u += l;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, s);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (t.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, f = p.rawTime() > r._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, m.remove = function(t) {
                    if (t instanceof e) return this._remove(t, !1);
                    if (t instanceof Array || t && t.push && o(t)) {
                        for (var i = t.length; --i > -1;) this.remove(t[i]);
                        return this
                    }
                    return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                }, m._remove = function(e, i) {
                    t.prototype._remove.call(this, e, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, m.insert = m.insertMultiple = function(e, t, i, n) {
                    return this.add(e, t || 0, i, n)
                }, m.appendMultiple = function(e, t, i, n) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n)
                }, m.addLabel = function(e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, m.addPause = function(e, t, i, n) {
                    return this.call(p, ["{self}", t, i, n], this, e)
                }, m.removeLabel = function(e) {
                    return delete this._labels[e], this
                }, m.getLabelTime = function(e) {
                    return null != this._labels[e] ? this._labels[e] : -1
                }, m._parseTimeOrLabel = function(t, i, n, r) {
                    var s;
                    if (r instanceof e && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && o(r)))
                        for (s = r.length; --s > -1;) r[s] instanceof e && r[s].timeline === this && this.remove(r[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                    else {
                        if (s = t.indexOf("="), -1 === s) return null == this._labels[t] ? n ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
                        i = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, n) : this.duration()
                    }
                    return Number(t) + i
                }, m.seek = function(e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(e, t) {
                    return this.play(e, t)
                }, m.gotoAndStop = function(e, t) {
                    return this.pause(e, t)
                }, m.render = function(e, t, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, a, o, h, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        f = this._startTime,
                        m = this._timeScale,
                        _ = this._paused;
                    if (e >= d ? (this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (s = !0, o = "onComplete", 0 === this._duration && (0 === e || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== e && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, e = d + 1e-4) : 1e-7 > e ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (o = "onReverseComplete", s = this._reversed), 0 > e ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = e) : (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, e = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = e, this._time !== p && this._first || i || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && e > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c)), this._time >= p)
                            for (n = this._first; n && (a = n._next, !this._paused || _);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = a;
                        else
                            for (n = this._last; n && (a = n._prev, !this._paused || _);)(n._active || p >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = a;
                        this._onUpdate && (t || (l.length && u(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c))), o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (s && (l.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || c)))
                    }
                }, m._hasPausedChild = function() {
                    for (var e = this._first; e;) {
                        if (e._paused || e instanceof n && e._hasPausedChild()) return !0;
                        e = e._next
                    }
                    return !1
                }, m.getChildren = function(e, t, n, r) {
                    r = r || -9999999999;
                    for (var s = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? t !== !1 && (s[o++] = a) : (n !== !1 && (s[o++] = a), e !== !1 && (s = s.concat(a.getChildren(!0, t, n)), o = s.length))), a = a._next;
                    return s
                }, m.getTweensOf = function(e, t) {
                    var n, r, s = this._gc,
                        a = [],
                        o = 0;
                    for (s && this._enabled(!0, !0), n = i.getTweensOf(e), r = n.length; --r > -1;)(n[r].timeline === this || t && this._contains(n[r])) && (a[o++] = n[r]);
                    return s && this._enabled(!1, !0), a
                }, m._contains = function(e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, m.shiftChildren = function(e, t, i) {
                    i = i || 0;
                    for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += e), r = r._next;
                    if (t)
                        for (n in s) s[n] >= i && (s[n] += e);
                    return this._uncache(!0)
                }, m._kill = function(e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(e, t) && (r = !0);
                    return r
                }, m.clear = function(e) {
                    var t = this.getChildren(!1, !0, !0),
                        i = t.length;
                    for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
                    return e !== !1 && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return this
                }, m._enabled = function(e, i) {
                    if (e === this._gc)
                        for (var n = this._first; n;) n._enabled(e, !0), n = n._next;
                    return t.prototype._enabled.call(this, e, i)
                }, m.duration = function(e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(e) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var t, i, n = 0, r = this._last, s = 999999999999; r;) t = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = t;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e), this
                }, m.usesFrames = function() {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === e._rootFramesTimeline
                }, m.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, i) {
                var n = function(t) {
                        e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    s = [],
                    a = t._internals,
                    o = a.lazyTweens,
                    l = a.lazyRender,
                    u = new i(null, null, 1, 0),
                    c = n.prototype = new e;
                return c.constructor = n, c.kill()._gc = !1, n.version = "1.13.1", c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
                }, c.addCallback = function(e, i, n, r) {
                    return this.add(t.delayedCall(0, e, n, r), i)
                }, c.removeCallback = function(e, t) {
                    if (e)
                        if (null == t) this._kill(null, e);
                        else
                            for (var i = this.getTweensOf(e, !1), n = i.length, r = this._parseTimeOrLabel(t); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, c.tweenTo = function(e, i) {
                    i = i || {};
                    var n, r, a, o = {
                        ease: u,
                        overwrite: i.delay ? 2 : 1,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) o[r] = i[r];
                    return o.time = this._parseTimeOrLabel(e), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new t(this, n, o), o.onStart = function() {
                        a.target.paused(!0), a.vars.time !== a.target.time() && n === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || s)
                    }, a
                }, c.tweenFromTo = function(e, t, i) {
                    i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [e],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(t, i);
                    return n.duration(Math.abs(n.vars.time - e) / this._timeScale || .001)
                }, c.render = function(e, t, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, a, u, c, h, d, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        m = this._time,
                        _ = this._totalTime,
                        g = this._startTime,
                        y = this._timeScale,
                        v = this._rawPrevTime,
                        w = this._paused,
                        x = this._cycle;
                    if (e >= p ? (this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, c = "onComplete", 0 === this._duration && (0 === e || 0 > v || v === r) && v !== e && this._first && (h = !0, v > r && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = f, e = f + 1e-4)) : 1e-7 > e ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && v !== r && (v > 0 || 0 > e && v >= 0) && !this._locked) && (c = "onReverseComplete", a = this._reversed), 0 > e ? (this._active = !1, v >= 0 && this._first && (h = !0), this._rawPrevTime = e) : (this._rawPrevTime = f || !t || e || this._rawPrevTime === e ? e : r, e = 0, this._initted || (h = !0))) : (0 === f && 0 > v && (h = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (d = f + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, e = f + 1e-4) : 0 > this._time ? this._time = e = 0 : e = this._time))), this._cycle !== x && !this._locked) {
                        var b = this._yoyo && 0 !== (1 & x),
                            T = b === (this._yoyo && 0 !== (1 & this._cycle)),
                            C = this._totalTime,
                            S = this._cycle,
                            P = this._rawPrevTime,
                            k = this._time;
                        if (this._totalTime = x * f, x > this._cycle ? b = !b : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? v - 1e-4 : v, this._cycle = x, this._locked = !0, m = b ? 0 : f, this.render(m, t, 0 === f), t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), T && (m = b ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !w) return;
                        this._time = k, this._totalTime = C, this._cycle = S, this._rawPrevTime = P
                    }
                    if (!(this._time !== m && this._first || i || h)) return void(_ !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && e > 0 && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._totalTime && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= m)
                        for (n = this._first; n && (u = n._next, !this._paused || w);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = u;
                    else
                        for (n = this._last; n && (u = n._prev, !this._paused || w);)(n._active || m >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = u;
                    this._onUpdate && (t || (o.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s))), c && (this._locked || this._gc || (g === this._startTime || y !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (a && (o.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || s)))
                }, c.getActive = function(e, t, i) {
                    null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
                    var n, r, s = [],
                        a = this.getChildren(e, t, i),
                        o = 0,
                        l = a.length;
                    for (n = 0; l > n; n++) r = a[n], r.isActive() && (s[o++] = r);
                    return s
                }, c.getLabelAfter = function(e) {
                    e || 0 !== e && (e = this._time);
                    var t, i = this.getLabelsArray(),
                        n = i.length;
                    for (t = 0; n > t; t++)
                        if (i[t].time > e) return i[t].name;
                    return null
                }, c.getLabelBefore = function(e) {
                    null == e && (e = this._time);
                    for (var t = this.getLabelsArray(), i = t.length; --i > -1;)
                        if (e > t[i].time) return t[i].name;
                    return null
                }, c.getLabelsArray = function() {
                    var e, t = [],
                        i = 0;
                    for (e in this._labels) t[i++] = {
                        time: this._labels[e],
                        name: e
                    };
                    return t.sort(function(e, t) {
                        return e.time - t.time
                    }), t
                }, c.progress = function(e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, c.totalProgress = function(e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
                }, c.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, c.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, c.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, c.currentLabel = function(e) {
                    return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var e = 180 / Math.PI,
                    t = [],
                    i = [],
                    n = [],
                    r = {},
                    s = function(e, t, i, n) {
                        this.a = e, this.b = t, this.c = i, this.d = n, this.da = n - e, this.ca = i - e, this.ba = t - e
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    o = function(e, t, i, n) {
                        var r = {
                                a: e
                            },
                            s = {},
                            a = {},
                            o = {
                                c: n
                            },
                            l = (e + t) / 2,
                            u = (t + i) / 2,
                            c = (i + n) / 2,
                            h = (l + u) / 2,
                            d = (u + c) / 2,
                            p = (d - h) / 8;
                        return r.b = l + (e - l) / 4, s.b = h + p, r.c = s.a = (r.b + s.b) / 2, s.c = a.a = (h + d) / 2, a.b = d - p, o.b = c + (n - c) / 4, a.c = o.a = (a.b + o.b) / 2, [r, s, a, o]
                    },
                    l = function(e, r, s, a, l) {
                        var u, c, h, d, p, f, m, _, g, y, v, w, x, b = e.length - 1,
                            T = 0,
                            C = e[0].a;
                        for (u = 0; b > u; u++) p = e[T], c = p.a, h = p.d, d = e[T + 1].d, l ? (v = t[u], w = i[u], x = .25 * (w + v) * r / (a ? .5 : n[u] || .5), f = h - (h - c) * (a ? .5 * r : 0 !== v ? x / v : 0), m = h + (d - h) * (a ? .5 * r : 0 !== w ? x / w : 0), _ = h - (f + ((m - f) * (3 * v / (v + w) + .5) / 4 || 0))) : (f = h - .5 * (h - c) * r, m = h + .5 * (d - h) * r, _ = h - (f + m) / 2), f += _, m += _, p.c = g = f, p.b = 0 !== u ? C : C = p.a + .6 * (p.c - p.a), p.da = h - c, p.ca = g - c, p.ba = C - c, s ? (y = o(c, C, g, h), e.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, C = m;
                        p = e[T], p.b = C, p.c = C + .4 * (p.d - C), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = C - p.a, s && (y = o(p.a, C, p.c, p.d), e.splice(T, 1, y[0], y[1], y[2], y[3]))
                    },
                    u = function(e, n, r, a) {
                        var o, l, u, c, h, d, p = [];
                        if (a)
                            for (e = [a].concat(e), l = e.length; --l > -1;) "string" == typeof(d = e[l][n]) && "=" === d.charAt(1) && (e[l][n] = a[n] + Number(d.charAt(0) + d.substr(2)));
                        if (o = e.length - 2, 0 > o) return p[0] = new s(e[0][n], 0, 0, e[-1 > o ? 0 : 1][n]), p;
                        for (l = 0; o > l; l++) u = e[l][n], c = e[l + 1][n], p[l] = new s(u, 0, 0, c), r && (h = e[l + 2][n], t[l] = (t[l] || 0) + (c - u) * (c - u), i[l] = (i[l] || 0) + (h - c) * (h - c));
                        return p[l] = new s(e[l][n], 0, 0, e[l + 1][n]), p
                    },
                    c = function(e, s, o, c, h, d) {
                        var p, f, m, _, g, y, v, w, x = {},
                            b = [],
                            T = d || e[0];
                        h = "string" == typeof h ? "," + h + "," : a, null == s && (s = 1);
                        for (f in e[0]) b.push(f);
                        if (e.length > 1) {
                            for (w = e[e.length - 1], v = !0, p = b.length; --p > -1;)
                                if (f = b[p], Math.abs(T[f] - w[f]) > .05) {
                                    v = !1;
                                    break
                                }
                            v && (e = e.concat(), d && e.unshift(d), e.push(e[1]), d = e[e.length - 3])
                        }
                        for (t.length = i.length = n.length = 0, p = b.length; --p > -1;) f = b[p], r[f] = -1 !== h.indexOf("," + f + ","), x[f] = u(e, f, r[f], d);
                        for (p = t.length; --p > -1;) t[p] = Math.sqrt(t[p]), i[p] = Math.sqrt(i[p]);
                        if (!c) {
                            for (p = b.length; --p > -1;)
                                if (r[f])
                                    for (m = x[b[p]], y = m.length - 1, _ = 0; y > _; _++) g = m[_ + 1].da / i[_] + m[_].da / t[_], n[_] = (n[_] || 0) + g * g;
                            for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                        }
                        for (p = b.length, _ = o ? 4 : 1; --p > -1;) f = b[p], m = x[f], l(m, s, o, c, r[f]), v && (m.splice(0, _), m.splice(m.length - _, _));
                        return x
                    },
                    h = function(e, t, i) {
                        t = t || "soft";
                        var n, r, a, o, l, u, c, h, d, p, f, m = {},
                            _ = "cubic" === t ? 3 : 2,
                            g = "soft" === t,
                            y = [];
                        if (g && i && (e = [i].concat(e)), null == e || _ + 1 > e.length) throw "invalid Bezier data";
                        for (d in e[0]) y.push(d);
                        for (u = y.length; --u > -1;) {
                            for (d = y[u], m[d] = l = [], p = 0, h = e.length, c = 0; h > c; c++) n = null == i ? e[c][d] : "string" == typeof(f = e[c][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && c > 1 && h - 1 > c && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                            for (h = p - _ + 1, p = 0, c = 0; h > c; c += _) n = l[c], r = l[c + 1], a = l[c + 2], o = 2 === _ ? 0 : l[c + 3], l[p++] = f = 3 === _ ? new s(n, r, a, o) : new s(n, (2 * r + n) / 3, (2 * r + a) / 3, a);
                            l.length = p
                        }
                        return m
                    },
                    d = function(e, t, i) {
                        for (var n, r, s, a, o, l, u, c, h, d, p, f = 1 / i, m = e.length; --m > -1;)
                            for (d = e[m], s = d.a, a = d.d - s, o = d.c - s, l = d.b - s, n = r = 0, c = 1; i >= c; c++) u = f * c, h = 1 - u, n = r - (r = (u * u * a + 3 * h * (u * o + h * l)) * u), p = m * i + c - 1, t[p] = (t[p] || 0) + n * n
                    },
                    p = function(e, t) {
                        t = t >> 0 || 6;
                        var i, n, r, s, a = [],
                            o = [],
                            l = 0,
                            u = 0,
                            c = t - 1,
                            h = [],
                            p = [];
                        for (i in e) d(e[i], a, t);
                        for (r = a.length, n = 0; r > n; n++) l += Math.sqrt(a[n]), s = n % t, p[s] = l, s === c && (u += l, s = n / t >> 0, h[s] = p, o[s] = u, l = 0, p = []);
                        return {
                            length: u,
                            lengths: o,
                            segments: h
                        }
                    },
                    f = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.3",
                        API: 2,
                        global: !0,
                        init: function(e, t, i) {
                            this._target = e, t instanceof Array && (t = {
                                values: t
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                            var n, r, s, a, o, l = t.values || [],
                                u = {},
                                d = l[0],
                                f = t.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (n in d) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof e[n], u[n] = r ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), o || u[n] !== l[0][n] && (o = u);
                            if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? c(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, o) : h(l, t.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = p(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), s = f.length; --s > -1;) {
                                    for (a = 0; 3 > a; a++) n = f[s][a], this._func[n] = "function" == typeof e[n] ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                    n = f[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(t) {
                            var i, n, r, s, a, o, l, u, c, h, d = this._segCount,
                                p = this._func,
                                f = this._target,
                                m = t !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, h = this._curSeg, t *= this._length, r = this._li, t > this._l2 && d - 1 > r) {
                                    for (u = d - 1; u > r && t >= (this._l2 = c[++r]););
                                    this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                                } else if (this._l1 > t && r > 0) {
                                    for (; r > 0 && (this._l1 = c[--r]) >= t;);
                                    0 === r && this._l1 > t ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                                }
                                if (i = r, t -= this._l1, r = this._si, t > this._s2 && h.length - 1 > r) {
                                    for (u = h.length - 1; u > r && t >= (this._s2 = h[++r]););
                                    this._s1 = h[r - 1], this._si = r
                                } else if (this._s1 > t && r > 0) {
                                    for (; r > 0 && (this._s1 = h[--r]) >= t;);
                                    0 === r && this._s1 > t ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                                }
                                o = (r + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > t ? 0 : t >= 1 ? d - 1 : d * t >> 0, o = (t - i * (1 / d)) * d;
                            for (n = 1 - o, r = this._props.length; --r > -1;) s = this._props[r], a = this._beziers[s][i], l = (o * o * a.da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a, this._round[s] && (l = Math.round(l)), p[s] ? f[s](l) : f[s] = l;
                            if (this._autoRotate) {
                                var _, g, y, v, w, x, b, T = this._autoRotate;
                                for (r = T.length; --r > -1;) s = T[r][2], x = T[r][3] || 0, b = T[r][4] === !0 ? 1 : e, a = this._beziers[T[r][0]], _ = this._beziers[T[r][1]], a && _ && (a = a[i], _ = _[i], g = a.a + (a.b - a.a) * o, v = a.b + (a.c - a.b) * o, g += (v - g) * o, v += (a.c + (a.d - a.c) * o - v) * o, y = _.a + (_.b - _.a) * o, w = _.b + (_.c - _.b) * o, y += (w - y) * o, w += (_.c + (_.d - _.c) * o - w) * o, l = m ? Math.atan2(w - y, v - g) * b + x : this._initialRotations[r], p[s] ? f[s](l) : f[s] = l)
                            }
                        }
                    }),
                    m = f.prototype;
                f.bezierThrough = c, f.cubicToQuadratic = o, f._autoCSS = !0, f.quadraticToCubic = function(e, t, i) {
                    return new s(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
                }, f._cssRegister = function() {
                    var e = _gsScope._gsDefine.globals.CSSPlugin;
                    if (e) {
                        var t = e._internals,
                            i = t._parseToProxy,
                            n = t._setPluginRatio,
                            r = t.CSSPropTween;
                        t._registerComplexSpecialProp("bezier", {
                            parser: function(e, t, s, a, o, l) {
                                t instanceof Array && (t = {
                                    values: t
                                }), l = new f;
                                var u, c, h, d = t.values,
                                    p = d.length - 1,
                                    m = [],
                                    _ = {};
                                if (0 > p) return o;
                                for (u = 0; p >= u; u++) h = i(e, d[u], a, o, l, p !== u), m[u] = h.end;
                                for (c in t) _[c] = t[c];
                                return _.values = m, o = new r(e, "bezier", 0, 0, h.pt, 2), o.data = h, o.plugin = l, o.setRatio = n, 0 === _.autoRotate && (_.autoRotate = !0), !_.autoRotate || _.autoRotate instanceof Array || (u = _.autoRotate === !0 ? 0 : Number(_.autoRotate), _.autoRotate = null != h.end.left ? [
                                    ["left", "top", "rotation", u, !1]
                                ] : null != h.end.x ? [
                                    ["x", "y", "rotation", u, !1]
                                ] : !1), _.autoRotate && (a._transform || a._enableTransforms(!1), h.autoRotate = a._target._gsTransform), l._onInitTween(h.proxy, _, a._tween), o
                            }
                        })
                    }
                }, m._roundProps = function(e, t) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(e[i[n]] || e.bezier || e.bezierThrough) && (this._round[i[n]] = t)
                }, m._kill = function(e) {
                    var t, i, n = this._props;
                    for (t in this._beziers)
                        if (t in e)
                            for (delete this._beziers[t], delete this._func[t], i = n.length; --i > -1;) n[i] === t && n.splice(i, 1);
                    return this._super._kill.call(this, e)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
                var i, n, r, s, a = function() {
                        e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = {},
                    l = a.prototype = new e("css");
                l.constructor = a, a.version = "1.13.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", l = "px", a.suffixMap = {
                    top: l,
                    right: l,
                    bottom: l,
                    left: l,
                    width: l,
                    height: l,
                    fontSize: l,
                    padding: l,
                    margin: l,
                    perspective: l,
                    lineHeight: ""
                };
                var u, c, h, d, p, f, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /[^\d\-\.]/g,
                    v = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/i,
                    x = /opacity:([^;]*)/i,
                    b = /alpha\(opacity *=.+?\)/i,
                    T = /^(rgb|hsl)/,
                    C = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    k = function(e, t) {
                        return t.toUpperCase()
                    },
                    L = /(?:Left|Right|Width)/i,
                    E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    A = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    D = /,(?=[^\)]*(?:\(|$))/gi,
                    O = Math.PI / 180,
                    j = 180 / Math.PI,
                    N = {},
                    R = document,
                    M = R.createElement("div"),
                    I = R.createElement("img"),
                    F = a._internals = {
                        _specialProps: o
                    },
                    $ = navigator.userAgent,
                    q = function() {
                        var e, t = $.indexOf("Android"),
                            i = R.createElement("div");
                        return h = -1 !== $.indexOf("Safari") && -1 === $.indexOf("Chrome") && (-1 === t || Number($.substr(t + 8, 1)) > 3), p = h && 6 > Number($.substr($.indexOf("Version/") + 8, 1)), d = -1 !== $.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec($) && (f = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", e = i.getElementsByTagName("a")[0], e ? /^0.55/.test(e.style.opacity) : !1
                    }(),
                    H = function(e) {
                        return w.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    z = function(e) {
                        window.console && console.log(e)
                    },
                    X = "",
                    B = "",
                    Q = function(e, t) {
                        t = t || M;
                        var i, n, r = t.style;
                        if (void 0 !== r[e]) return e;
                        for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + e];);
                        return n >= 0 ? (B = 3 === n ? "ms" : i[n], X = "-" + B.toLowerCase() + "-", B + e) : null
                    },
                    V = R.defaultView ? R.defaultView.getComputedStyle : function() {},
                    W = a.getStyle = function(e, t, i, n, r) {
                        var s;
                        return q || "opacity" !== t ? (!n && e.style[t] ? s = e.style[t] : (i = i || V(e)) ? s = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(C, "-$1").toLowerCase()) : e.currentStyle && (s = e.currentStyle[t]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : H(e)
                    },
                    U = F.convertToPixels = function(e, i, n, r, s) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var o, l, u, c = L.test(i),
                            h = e,
                            d = M.style,
                            p = 0 > n;
                        if (p && (n = -n), "%" === r && -1 !== i.indexOf("border")) o = n / 100 * (c ? e.clientWidth : e.clientHeight);
                        else {
                            if (d.cssText = "border:0 solid red;position:" + W(e, "position") + ";line-height:0;", "%" !== r && h.appendChild) d[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (h = e.parentNode || R.body, l = h._gsCache, u = t.ticker.frame, l && c && l.time === u) return l.width * n / 100;
                                d[c ? "width" : "height"] = n + r
                            }
                            h.appendChild(M), o = parseFloat(M[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(M), c && "%" === r && a.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = u, l.width = 100 * (o / n)), 0 !== o || s || (o = U(e, i, n, r, !0))
                        }
                        return p ? -o : o
                    },
                    Y = F.calculateOffset = function(e, t, i) {
                        if ("absolute" !== W(e, "position", i)) return 0;
                        var n = "left" === t ? "Left" : "Top",
                            r = W(e, "margin" + n, i);
                        return e["offset" + n] - (U(e, t, parseFloat(r), r.replace(v, "")) || 0)
                    },
                    J = function(e, t) {
                        var i, n, r = {};
                        if (t = t || V(e, null))
                            if (i = t.length)
                                for (; --i > -1;) r[t[i].replace(S, k)] = t.getPropertyValue(t[i]);
                            else
                                for (i in t) r[i] = t[i];
                        else if (t = e.currentStyle || e.style)
                            for (i in t) "string" == typeof i && void 0 === r[i] && (r[i.replace(S, k)] = t[i]);
                        return q || (r.opacity = H(e)), n = Ce(e, t, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, be && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
                    },
                    G = function(e, t, i, n, r) {
                        var s, a, o, l = {},
                            u = e.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (s = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[a] || "" === t[a].replace(y, "") ? s : 0 : Y(e, a), void 0 !== u[a] && (o = new he(u, a, u[a], o)));
                        if (n)
                            for (a in n) "className" !== a && (l[a] = n[a]);
                        return {
                            difs: l,
                            firstMPT: o
                        }
                    },
                    Z = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    K = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ee = function(e, t, i) {
                        var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                            r = Z[t],
                            s = r.length;
                        for (i = i || V(e, null); --s > -1;) n -= parseFloat(W(e, "padding" + r[s], i, !0)) || 0, n -= parseFloat(W(e, "border" + r[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    te = function(e, t) {
                        (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
                        var i = e.split(" "),
                            n = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                            r = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t && (t.oxp = -1 !== n.indexOf("%"), t.oyp = -1 !== r.indexOf("%"), t.oxr = "=" === n.charAt(1), t.oyr = "=" === r.charAt(1), t.ox = parseFloat(n.replace(y, "")), t.oy = parseFloat(r.replace(y, ""))), n + " " + r + (i.length > 2 ? " " + i[2] : "")
                    },
                    ie = function(e, t) {
                        return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
                    },
                    ne = function(e, t) {
                        return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) + t : parseFloat(e)
                    },
                    re = function(e, t, i, n) {
                        var r, s, a, o, l = 1e-6;
                        return null == e ? o = t : "number" == typeof e ? o = e : (r = 360, s = e.split("_"), a = Number(s[0].replace(y, "")) * (-1 === e.indexOf("rad") ? 1 : j) - ("=" === e.charAt(1) ? 0 : t), s.length && (n && (n[i] = t + a), -1 !== e.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== e.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== e.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = t + a), l > o && o > -l && (o = 0), o
                    },
                    se = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ae = function(e, t, i) {
                        return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 0 | 255 * (1 > 6 * e ? t + 6 * (i - t) * e : .5 > e ? i : 2 > 3 * e ? t + 6 * (i - t) * (2 / 3 - e) : t) + .5
                    },
                    oe = function(e) {
                        var t, i, n, r, s, a;
                        return e && "" !== e ? "number" == typeof e ? [e >> 16, 255 & e >> 8, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), se[e] ? se[e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), i = e.charAt(2), n = e.charAt(3), e = "#" + t + t + i + i + n + n), e = parseInt(e.substr(1), 16), [e >> 16, 255 & e >> 8, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(m), r = Number(e[0]) % 360 / 360, s = Number(e[1]) / 100, a = Number(e[2]) / 100, i = .5 >= a ? a * (s + 1) : a + s - a * s, t = 2 * a - i, e.length > 3 && (e[3] = Number(e[3])), e[0] = ae(r + 1 / 3, t, i), e[1] = ae(r, t, i), e[2] = ae(r - 1 / 3, t, i), e) : (e = e.match(m) || se.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : se.black
                    },
                    le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in se) le += "|" + l + "\\b";
                le = RegExp(le + ")", "gi");
                var ue = function(e, t, i, n) {
                        if (null == e) return function(e) {
                            return e
                        };
                        var r, s = t ? (e.match(le) || [""])[0] : "",
                            a = e.split(s).join("").match(g) || [],
                            o = e.substr(0, e.indexOf(a[0])),
                            l = ")" === e.charAt(e.length - 1) ? ")" : "",
                            u = -1 !== e.indexOf(" ") ? " " : ",",
                            c = a.length,
                            h = c > 0 ? a[0].replace(m, "") : "";
                        return c ? r = t ? function(e) {
                            var t, d, p, f;
                            if ("number" == typeof e) e += h;
                            else if (n && D.test(e)) {
                                for (f = e.replace(D, "|").split("|"), p = 0; f.length > p; p++) f[p] = r(f[p]);
                                return f.join(",")
                            }
                            if (t = (e.match(le) || [s])[0], d = e.split(t).join("").match(g) || [], p = d.length, c > p--)
                                for (; c > ++p;) d[p] = i ? d[0 | (p - 1) / 2] : a[p];
                            return o + d.join(u) + u + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                        } : function(e) {
                            var t, s, d;
                            if ("number" == typeof e) e += h;
                            else if (n && D.test(e)) {
                                for (s = e.replace(D, "|").split("|"), d = 0; s.length > d; d++) s[d] = r(s[d]);
                                return s.join(",")
                            }
                            if (t = e.match(g) || [], d = t.length, c > d--)
                                for (; c > ++d;) t[d] = i ? t[0 | (d - 1) / 2] : a[d];
                            return o + t.join(u) + l
                        } : function(e) {
                            return e
                        }
                    },
                    ce = function(e) {
                        return e = e.split(","),
                            function(t, i, n, r, s, a, o) {
                                var l, u = (i + "").split(" ");
                                for (o = {}, l = 0; 4 > l; l++) o[e[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                                return r.parse(t, o, s, a)
                            }
                    },
                    he = (F._setPluginRatio = function(e) {
                        this.plugin.setRatio(e);
                        for (var t, i, n, r, s = this.data, a = s.proxy, o = s.firstMPT, l = 1e-6; o;) t = a[o.v], o.r ? t = Math.round(t) : l > t && t > -l && (t = 0), o.t[o.p] = t, o = o._next;
                        if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === e)
                            for (o = s.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(e, t, i, n, r) {
                        this.t = e, this.p = t, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    de = (F._parseToProxy = function(e, t, i, n, r, s) {
                        var a, o, l, u, c, h = n,
                            d = {},
                            p = {},
                            f = i._transform,
                            m = N;
                        for (i._transform = null, N = t, n = c = i.parse(e, t, n, r), N = m, s && (i._transform = f, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                            if (1 >= n.type && (o = n.p, p[o] = n.s + n.c, d[o] = n.s, s || (u = new he(n, "s", o, u, n.r), n.c = 0), 1 === n.type))
                                for (a = n.l; --a > 0;) l = "xn" + a, o = n.p + "_" + l, p[o] = n.data[l], d[o] = n[l], s || (u = new he(n, l, o, u, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: d,
                            end: p,
                            firstMPT: u,
                            pt: c
                        }
                    }, F.CSSPropTween = function(e, t, n, r, a, o, l, u, c, h, d) {
                        this.t = e, this.p = t, this.s = n, this.c = r, this.n = l || t, e instanceof de || s.push(this.n), this.r = u, this.type = o || 0, c && (this.pr = c, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === d ? n + r : d, a && (this._next = a, a._prev = this)
                    }),
                    pe = a.parseComplex = function(e, t, i, n, r, s, a, o, l, c) {
                        i = i || s || "", a = new de(e, t, 0, 0, a, c ? 2 : 1, null, !1, o, i, n), n += "";
                        var h, d, p, f, g, y, v, w, x, b, C, S, P = i.split(", ").join(",").split(" "),
                            k = n.split(", ").join(",").split(" "),
                            L = P.length,
                            E = u !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (P = P.join(" ").replace(D, ", ").split(" "), k = k.join(" ").replace(D, ", ").split(" "), L = P.length), L !== k.length && (P = (s || "").split(" "), L = P.length), a.plugin = l, a.setRatio = c, h = 0; L > h; h++)
                            if (f = P[h], g = k[h], w = parseFloat(f), w || 0 === w) a.appendXtra("", w, ie(g, w), g.replace(_, ""), E && -1 !== g.indexOf("px"), !0);
                            else if (r && ("#" === f.charAt(0) || se[f] || T.test(f))) S = "," === g.charAt(g.length - 1) ? ")," : ")", f = oe(f), g = oe(g), x = f.length + g.length > 6, x && !q && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(k[h]).join("transparent")) : (q || (x = !1), a.appendXtra(x ? "rgba(" : "rgb(", f[0], g[0] - f[0], ",", !0, !0).appendXtra("", f[1], g[1] - f[1], ",", !0).appendXtra("", f[2], g[2] - f[2], x ? "," : S, !0), x && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > g.length ? 1 : g[3]) - f, S, !1)));
                        else if (y = f.match(m)) {
                            if (v = g.match(_), !v || v.length !== y.length) return a;
                            for (p = 0, d = 0; y.length > d; d++) C = y[d], b = f.indexOf(C, p), a.appendXtra(f.substr(p, b - p), Number(C), ie(v[d], C), "", E && "px" === f.substr(b + C.length, 2), 0 === d), p = b + C.length;
                            a["xs" + a.l] += f.substr(p)
                        } else a["xs" + a.l] += a.l ? " " + f : f;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (S = a.xs0 + a.data.s, h = 1; a.l > h; h++) S += a["xs" + h] + a.data["xn" + h];
                            a.e = S + a["xs" + h]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    fe = 9;
                for (l = de.prototype, l.l = l.pr = 0; --fe > 0;) l["xn" + fe] = 0, l["xs" + fe] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(e, t, i, n, r, s) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += s && o ? " " + e : e || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = t + i, a.rxp["xn" + o] = r, a["xn" + o] = t, a.plugin || (a.xfirst = new de(a, "xn" + o, t, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: t + i
                    }, a.rxp = {}, a.s = t, a.c = i, a.r = r, a)) : (a["xs" + o] += t + (n || ""), a)
                };
                var me = function(e, t) {
                        t = t || {}, this.p = t.prefix ? Q(e) || e : e, o[e] = o[this.p] = this, this.format = t.formatter || ue(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                    },
                    _e = F._registerComplexSpecialProp = function(e, t, i) {
                        "object" != typeof t && (t = {
                            parser: i
                        });
                        var n, r, s = e.split(","),
                            a = t.defaultValue;
                        for (i = i || [a], n = 0; s.length > n; n++) t.prefix = 0 === n && t.prefix, t.defaultValue = i[n] || a, r = new me(s[n], t)
                    },
                    ge = function(e) {
                        if (!o[e]) {
                            var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            _e(e, {
                                parser: function(e, i, n, r, s, a, l) {
                                    var u = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[t];
                                    return u ? (u._cssRegister(), o[n].parse(e, i, n, r, s, a, l)) : (z("Error: " + t + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                l = me.prototype, l.parseComplex = function(e, t, i, n, r, s) {
                    var a, o, l, u, c, h, d = this.keyword;
                    if (this.multi && (D.test(i) || D.test(t) ? (o = t.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : d && (o = [t], l = [i])), l) {
                        for (u = l.length > o.length ? l.length : o.length, a = 0; u > a; a++) t = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, d && (c = t.indexOf(d), h = i.indexOf(d), c !== h && (i = -1 === h ? l : o, i[a] += " " + d));
                        t = o.join(", "), i = l.join(", ")
                    }
                    return pe(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, r, s)
                }, l.parse = function(e, t, i, n, s, a) {
                    return this.parseComplex(e.style, this.format(W(e, this.p, r, !1, this.dflt)), this.format(t), s, a)
                }, a.registerSpecialProp = function(e, t, i) {
                    _e(e, {
                        parser: function(e, n, r, s, a, o) {
                            var l = new de(e, r, 0, 0, a, 2, r, !1, i);
                            return l.plugin = o, l.setRatio = t(e, n, s._tween, r), l
                        },
                        priority: i
                    })
                };
                var ye = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    ve = Q("transform"),
                    we = X + "transform",
                    xe = Q("transformOrigin"),
                    be = null !== Q("perspective"),
                    Te = F.Transform = function() {
                        this.skewY = 0
                    },
                    Ce = F.getTransform = function(e, t, i, n) {
                        if (e._gsTransform && i && !n) return e._gsTransform;
                        var r, s, o, l, u, c, h, d, p, f, m, _, g, y = i ? e._gsTransform || new Te : new Te,
                            v = 0 > y.scaleX,
                            w = 2e-5,
                            x = 1e5,
                            b = 179.99,
                            T = b * O,
                            C = be ? parseFloat(W(e, xe, t, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0;
                        if (ve ? r = W(e, we, t, !0) : e.currentStyle && (r = e.currentStyle.filter.match(E), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), r && "none" !== r && "matrix(1, 0, 0, 1, 0, 0)" !== r) {
                            for (s = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = s.length; --o > -1;) l = Number(s[o]), s[o] = (u = l - (l |= 0)) ? (0 | u * x + (0 > u ? -.5 : .5)) / x + l : l;
                            if (16 === s.length) {
                                var S = s[8],
                                    P = s[9],
                                    k = s[10],
                                    L = s[12],
                                    A = s[13],
                                    D = s[14];
                                if (y.zOrigin && (D = -y.zOrigin, L = S * D - s[12], A = P * D - s[13], D = k * D + y.zOrigin - s[14]), !i || n || null == y.rotationX) {
                                    var N, R, M, I, F, $, q, H = s[0],
                                        z = s[1],
                                        X = s[2],
                                        B = s[3],
                                        Q = s[4],
                                        V = s[5],
                                        U = s[6],
                                        Y = s[7],
                                        J = s[11],
                                        G = Math.atan2(U, k),
                                        Z = -T > G || G > T;
                                    y.rotationX = G * j, G && (I = Math.cos(-G), F = Math.sin(-G), N = Q * I + S * F, R = V * I + P * F, M = U * I + k * F, S = Q * -F + S * I, P = V * -F + P * I, k = U * -F + k * I, J = Y * -F + J * I, Q = N, V = R, U = M), G = Math.atan2(S, H), y.rotationY = G * j, G && ($ = -T > G || G > T, I = Math.cos(-G), F = Math.sin(-G), N = H * I - S * F, R = z * I - P * F, M = X * I - k * F, P = z * F + P * I, k = X * F + k * I, J = B * F + J * I, H = N, z = R, X = M), G = Math.atan2(z, V), y.rotation = G * j, G && (q = -T > G || G > T, I = Math.cos(-G), F = Math.sin(-G), H = H * I + Q * F, R = z * I + V * F, V = z * -F + V * I, U = X * -F + U * I, z = R), q && Z ? y.rotation = y.rotationX = 0 : q && $ ? y.rotation = y.rotationY = 0 : $ && Z && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(H * H + z * z) * x + .5) / x, y.scaleY = (0 | Math.sqrt(V * V + P * P) * x + .5) / x, y.scaleZ = (0 | Math.sqrt(U * U + k * k) * x + .5) / x, y.skewX = 0, y.perspective = J ? 1 / (0 > J ? -J : J) : 0, y.x = L, y.y = A, y.z = D
                                }
                            } else if (!(be && !n && s.length && y.x === s[4] && y.y === s[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === W(e, "display", t))) {
                                var K = s.length >= 6,
                                    ee = K ? s[0] : 1,
                                    te = s[1] || 0,
                                    ie = s[2] || 0,
                                    ne = K ? s[3] : 1;
                                y.x = s[4] || 0, y.y = s[5] || 0, c = Math.sqrt(ee * ee + te * te), h = Math.sqrt(ne * ne + ie * ie), d = ee || te ? Math.atan2(te, ee) * j : y.rotation || 0, p = ie || ne ? Math.atan2(ie, ne) * j + d : y.skewX || 0, f = c - Math.abs(y.scaleX || 0), m = h - Math.abs(y.scaleY || 0), Math.abs(p) > 90 && 270 > Math.abs(p) && (v ? (c *= -1, p += 0 >= d ? 180 : -180, d += 0 >= d ? 180 : -180) : (h *= -1, p += 0 >= p ? 180 : -180)), _ = (d - y.rotation) % 180, g = (p - y.skewX) % 180, (void 0 === y.skewX || f > w || -w > f || m > w || -w > m || _ > -b && b > _ && !1 | _ * x || g > -b && b > g && !1 | g * x) && (y.scaleX = c, y.scaleY = h, y.rotation = d, y.skewX = p), be && (y.rotationX = y.rotationY = y.z = 0, y.perspective = parseFloat(a.defaultTransformPerspective) || 0, y.scaleZ = 1)
                            }
                            y.zOrigin = C;
                            for (o in y) w > y[o] && y[o] > -w && (y[o] = 0)
                        } else y = {
                            x: 0,
                            y: 0,
                            z: 0,
                            scaleX: 1,
                            scaleY: 1,
                            scaleZ: 1,
                            skewX: 0,
                            perspective: 0,
                            rotation: 0,
                            rotationX: 0,
                            rotationY: 0,
                            zOrigin: 0
                        };
                        return i && (e._gsTransform = y), y.xPercent = y.yPercent = 0, y
                    },
                    Se = function(e) {
                        var t, i, n = this.data,
                            r = -n.rotation * O,
                            s = r + n.skewX * O,
                            a = 1e5,
                            o = (0 | Math.cos(r) * n.scaleX * a) / a,
                            l = (0 | Math.sin(r) * n.scaleX * a) / a,
                            u = (0 | Math.sin(s) * -n.scaleY * a) / a,
                            c = (0 | Math.cos(s) * n.scaleY * a) / a,
                            h = this.t.style,
                            d = this.t.currentStyle;
                        if (d) {
                            i = l, l = -u, u = -i, t = d.filter, h.filter = "";
                            var p, m, _ = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                y = "absolute" !== d.position,
                                x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                                b = n.x + _ * n.xPercent / 100,
                                T = n.y + g * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? .01 * _ * n.ox : n.ox) - _ / 2, m = (n.oyp ? .01 * g * n.oy : n.oy) - g / 2, b += p - (p * o + m * l), T += m - (p * u + m * c)), y ? (p = _ / 2, m = g / 2, x += ", Dx=" + (p - (p * o + m * l) + b) + ", Dy=" + (m - (p * u + m * c) + T) + ")") : x += ", sizingMethod='auto expand')", h.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(A, x) : x + " " + t, (0 === e || 1 === e) && 1 === o && 0 === l && 0 === u && 1 === c && (y && -1 === x.indexOf("Dx=0, Dy=0") || w.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && h.removeAttribute("filter")), !y) {
                                var C, S, P, k = 8 > f ? 1 : -1;
                                for (p = n.ieOffsetX || 0, m = n.ieOffsetY || 0, n.ieOffsetX = Math.round((_ - ((0 > o ? -o : o) * _ + (0 > l ? -l : l) * g)) / 2 + b), n.ieOffsetY = Math.round((g - ((0 > c ? -c : c) * g + (0 > u ? -u : u) * _)) / 2 + T), fe = 0; 4 > fe; fe++) S = K[fe], C = d[S], i = -1 !== C.indexOf("px") ? parseFloat(C) : U(this.t, S, parseFloat(C), C.replace(v, "")) || 0, P = i !== n[S] ? 2 > fe ? -n.ieOffsetX : -n.ieOffsetY : 2 > fe ? p - n.ieOffsetX : m - n.ieOffsetY, h[S] = (n[S] = Math.round(i - P * (0 === fe || 2 === fe ? 1 : k))) + "px"
                            }
                        }
                    },
                    Pe = F.set3DTransformRatio = function(e) {
                        var t, i, n, r, s, a, o, l, u, c, h, p, f, m, _, g, y, v, w, x, b, T, C, S = this.data,
                            P = this.t.style,
                            k = S.rotation * O,
                            L = S.scaleX,
                            E = S.scaleY,
                            A = S.scaleZ,
                            D = S.x,
                            j = S.y,
                            N = S.z,
                            R = S.perspective;
                        if (!(1 !== e && 0 !== e || "auto" !== S.force3D || S.rotationY || S.rotationX || 1 !== A || R || N)) return void ke.call(this, e);
                        if (d) {
                            var M = 1e-4;
                            M > L && L > -M && (L = A = 2e-5), M > E && E > -M && (E = A = 2e-5), !R || S.z || S.rotationX || S.rotationY || (R = 0)
                        }
                        if (k || S.skewX) v = Math.cos(k), w = Math.sin(k), t = v, s = w, S.skewX && (k -= S.skewX * O, v = Math.cos(k), w = Math.sin(k), "simple" === S.skewType && (x = Math.tan(S.skewX * O), x = Math.sqrt(1 + x * x), v *= x, w *= x)), i = -w, a = v;
                        else {
                            if (!(S.rotationY || S.rotationX || 1 !== A || R)) return void(P[ve] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + j + "px," + N + "px)" + (1 !== L || 1 !== E ? " scale(" + L + "," + E + ")" : ""));
                            t = a = 1, i = s = 0
                        }
                        h = 1, n = r = o = l = u = c = p = f = m = 0, _ = R ? -1 / R : 0, g = S.zOrigin, y = 1e5, k = S.rotationY * O, k && (v = Math.cos(k), w = Math.sin(k), u = h * -w, f = _ * -w, n = t * w, o = s * w, h *= v, _ *= v, t *= v, s *= v), k = S.rotationX * O, k && (v = Math.cos(k), w = Math.sin(k), x = i * v + n * w, b = a * v + o * w, T = c * v + h * w, C = m * v + _ * w, n = i * -w + n * v, o = a * -w + o * v, h = c * -w + h * v, _ = m * -w + _ * v, i = x, a = b, c = T, m = C), 1 !== A && (n *= A, o *= A, h *= A, _ *= A), 1 !== E && (i *= E, a *= E, c *= E, m *= E), 1 !== L && (t *= L, s *= L, u *= L, f *= L), g && (p -= g, r = n * p, l = o * p, p = h * p + g), r = (x = (r += D) - (r |= 0)) ? (0 | x * y + (0 > x ? -.5 : .5)) / y + r : r, l = (x = (l += j) - (l |= 0)) ? (0 | x * y + (0 > x ? -.5 : .5)) / y + l : l, p = (x = (p += N) - (p |= 0)) ? (0 | x * y + (0 > x ? -.5 : .5)) / y + p : p, P[ve] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | t * y) / y, (0 | s * y) / y, (0 | u * y) / y, (0 | f * y) / y, (0 | i * y) / y, (0 | a * y) / y, (0 | c * y) / y, (0 | m * y) / y, (0 | n * y) / y, (0 | o * y) / y, (0 | h * y) / y, (0 | _ * y) / y, r, l, p, R ? 1 + -p / R : 1].join(",") + ")"
                    },
                    ke = F.set2DTransformRatio = function(e) {
                        var t, i, n, r, s, a = this.data,
                            o = this.t,
                            l = o.style,
                            u = a.x,
                            c = a.y;
                        return a.rotationX || a.rotationY || a.z || a.force3D === !0 || "auto" === a.force3D && 1 !== e && 0 !== e ? (this.setRatio = Pe, void Pe.call(this, e)) : void(a.rotation || a.skewX ? (t = a.rotation * O, i = t - a.skewX * O, n = 1e5, r = a.scaleX * n, s = a.scaleY * n, l[ve] = (a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) matrix(" : "matrix(") + (0 | Math.cos(t) * r) / n + "," + (0 | Math.sin(t) * r) / n + "," + (0 | Math.sin(i) * -s) / n + "," + (0 | Math.cos(i) * s) / n + "," + u + "," + c + ")") : l[ve] = (a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) matrix(" : "matrix(") + a.scaleX + ",0,0," + a.scaleY + "," + u + "," + c + ")")
                    };
                _e("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                    parser: function(e, t, i, n, s, o, l) {
                        if (n._transform) return s;
                        var u, c, h, d, p, f, m, _ = n._transform = Ce(e, r, !0, l.parseTransform),
                            g = e.style,
                            y = 1e-6,
                            v = ye.length,
                            w = l,
                            x = {};
                        if ("string" == typeof w.transform && ve) h = M.style, h[ve] = w.transform, h.display = "block", h.position = "absolute", R.body.appendChild(M), u = Ce(M, null, !1), R.body.removeChild(M);
                        else if ("object" == typeof w) {
                            if (u = {
                                    scaleX: ne(null != w.scaleX ? w.scaleX : w.scale, _.scaleX),
                                    scaleY: ne(null != w.scaleY ? w.scaleY : w.scale, _.scaleY),
                                    scaleZ: ne(w.scaleZ, _.scaleZ),
                                    x: ne(w.x, _.x),
                                    y: ne(w.y, _.y),
                                    z: ne(w.z, _.z),
                                    xPercent: ne(w.xPercent, _.xPercent),
                                    yPercent: ne(w.yPercent, _.yPercent),
                                    perspective: ne(w.transformPerspective, _.perspective)
                                }, m = w.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (h in m) w[h] = m[h];
                                else w.rotation = m;
                            "string" == typeof w.x && -1 !== w.x.indexOf("%") && (u.x = 0, u.xPercent = ne(w.x, _.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (u.y = 0, u.yPercent = ne(w.y, _.yPercent)), u.rotation = re("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : _.rotation, _.rotation, "rotation", x), be && (u.rotationX = re("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : _.rotationX || 0, _.rotationX, "rotationX", x), u.rotationY = re("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : _.rotationY || 0, _.rotationY, "rotationY", x)), u.skewX = null == w.skewX ? _.skewX : re(w.skewX, _.skewX), u.skewY = null == w.skewY ? _.skewY : re(w.skewY, _.skewY), (c = u.skewY - _.skewY) && (u.skewX += c, u.rotation += c)
                        }
                        for (be && null != w.force3D && (_.force3D = w.force3D, f = !0), _.skewType = w.skewType || _.skewType || a.defaultSkewType, p = _.force3D || _.z || _.rotationX || _.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == w.scale || (u.scaleZ = 1); --v > -1;) i = ye[v], d = u[i] - _[i], (d > y || -y > d || null != N[i]) && (f = !0, s = new de(_, i, _[i], d, s), i in x && (s.e = x[i]), s.xs0 = 0, s.plugin = o, n._overwriteProps.push(s.n));
                        return d = w.transformOrigin, (d || be && p && _.zOrigin) && (ve ? (f = !0, i = xe, d = (d || W(e, i, r, !1, "50% 50%")) + "", s = new de(g, i, 0, 0, s, -1, "transformOrigin"), s.b = g[i], s.plugin = o, be ? (h = _.zOrigin, d = d.split(" "), _.zOrigin = (d.length > 2 && (0 === h || "0px" !== d[2]) ? parseFloat(d[2]) : h) || 0, s.xs0 = s.e = d[0] + " " + (d[1] || "50%") + " 0px", s = new de(_, "zOrigin", 0, 0, s, -1, s.n), s.b = h, s.xs0 = s.e = _.zOrigin) : s.xs0 = s.e = d) : te(d + "", _)), f && (n._transformType = p || 3 === this._transformType ? 3 : 2), s
                    },
                    prefix: !0
                }), _e("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), _e("borderRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, i, s, a) {
                        t = this.format(t);
                        var o, l, u, c, h, d, p, f, m, _, g, y, v, w, x, b, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            C = e.style;
                        for (m = parseFloat(e.offsetWidth), _ = parseFloat(e.offsetHeight), o = t.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = Q(T[l])), h = c = W(e, T[l], r, !1, "0px"), -1 !== h.indexOf(" ") && (c = h.split(" "), h = c[0], c = c[1]), d = u = o[l], p = parseFloat(h), y = h.substr((p + "").length), v = "=" === d.charAt(1), v ? (f = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), f *= parseFloat(d), g = d.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(d), g = d.substr((f + "").length)), "" === g && (g = n[i] || y), g !== y && (w = U(e, "borderLeft", p, y), x = U(e, "borderTop", p, y), "%" === g ? (h = 100 * (w / m) + "%", c = 100 * (x / _) + "%") : "em" === g ? (b = U(e, "borderLeft", 1, "em"), h = w / b + "em", c = x / b + "em") : (h = w + "px", c = x + "px"), v && (d = parseFloat(h) + f + g, u = parseFloat(c) + f + g)), a = pe(C, T[l], h + " " + c, d + " " + u, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: ue("0px 0px 0px 0px", !1, !0)
                }), _e("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(e, t, i, n, s, a) {
                        var o, l, u, c, h, d, p = "background-position",
                            m = r || V(e, null),
                            _ = this.format((m ? f ? m.getPropertyValue(p + "-x") + " " + m.getPropertyValue(p + "-y") : m.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(t);
                        if (-1 !== _.indexOf("%") != (-1 !== g.indexOf("%")) && (d = W(e, "backgroundImage").replace(P, ""), d && "none" !== d)) {
                            for (o = _.split(" "), l = g.split(" "), I.setAttribute("src", d), u = 2; --u > -1;) _ = o[u], c = -1 !== _.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? e.offsetWidth - I.width : e.offsetHeight - I.height, o[u] = c ? parseFloat(_) / 100 * h + "px" : 100 * (parseFloat(_) / h) + "%");
                            _ = o.join(" ")
                        }
                        return this.parseComplex(e.style, _, g, s, a)
                    },
                    formatter: te
                }), _e("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: te
                }), _e("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), _e("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), _e("transformStyle", {
                    prefix: !0
                }), _e("backfaceVisibility", {
                    prefix: !0
                }), _e("userSelect", {
                    prefix: !0
                }), _e("margin", {
                    parser: ce("marginTop,marginRight,marginBottom,marginLeft")
                }), _e("padding", {
                    parser: ce("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), _e("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(e, t, i, n, s, a) {
                        var o, l, u;
                        return 9 > f ? (l = e.currentStyle, u = 8 > f ? " " : ",", o = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", t = this.format(t).split(",").join(u)) : (o = this.format(W(e, this.p, r, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, o, t, s, a)
                    }
                }), _e("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), _e("autoRound,strictUnits", {
                    parser: function(e, t, i, n, r) {
                        return r
                    }
                }), _e("border", {
                    defaultValue: "0px solid #000",
                    parser: function(e, t, i, n, s, a) {
                        return this.parseComplex(e.style, this.format(W(e, "borderTopWidth", r, !1, "0px") + " " + W(e, "borderTopStyle", r, !1, "solid") + " " + W(e, "borderTopColor", r, !1, "#000")), this.format(t), s, a)
                    },
                    color: !0,
                    formatter: function(e) {
                        var t = e.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (e.match(le) || ["#000"])[0]
                    }
                }), _e("borderWidth", {
                    parser: ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), _e("float,cssFloat,styleFloat", {
                    parser: function(e, t, i, n, r) {
                        var s = e.style,
                            a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new de(s, a, 0, 0, r, -1, i, !1, 0, s[a], t)
                    }
                });
                var Le = function(e) {
                    var t, i = this.t,
                        n = i.filter || W(this.data, "filter"),
                        r = 0 | this.s + this.c * e;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), t = !W(this.data, "filter")) : (i.filter = n.replace(b, ""), t = !0)), t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(w, "opacity=" + r))
                };
                _e("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(e, t, i, n, s, a) {
                        var o = parseFloat(W(e, "opacity", r, !1, "1")),
                            l = e.style,
                            u = "autoAlpha" === i;
                        return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + o), u && 1 === o && "hidden" === W(e, "visibility", r) && 0 !== t && (o = 0), q ? s = new de(l, "opacity", o, t - o, s) : (s = new de(l, "opacity", 100 * o, 100 * (t - o), s), s.xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = a, s.setRatio = Le), u && (s = new de(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var Ee = function(e, t) {
                        t && (e.removeProperty ? ("ms" === t.substr(0, 2) && (t = "M" + t.substr(1)),
                            e.removeProperty(t.replace(C, "-$1").toLowerCase())) : e.removeAttribute(t))
                    },
                    Ae = function(e) {
                        if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                            this.t.setAttribute("class", 0 === e ? this.b : this.e);
                            for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : Ee(i, t.p), t = t._next;
                            1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                _e("className", {
                    parser: function(e, t, n, s, a, o, l) {
                        var u, c, h, d, p, f = e.getAttribute("class") || "",
                            m = e.style.cssText;
                        if (a = s._classNamePT = new de(e, n, 0, 0, a, 2), a.setRatio = Ae, a.pr = -11, i = !0, a.b = f, c = J(e, r), h = e._gsClassPT) {
                            for (d = {}, p = h.data; p;) d[p.p] = 1, p = p._next;
                            h.setRatio(1)
                        }
                        return e._gsClassPT = a, a.e = "=" !== t.charAt(1) ? t : f.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), s._tween._duration && (e.setAttribute("class", a.e), u = G(e, c, J(e), l, d), e.setAttribute("class", f), a.data = u.firstMPT, e.style.cssText = m, a = a.xfirst = s.parse(e, u.difs, a, o)), a
                    }
                });
                var De = function(e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var t, i, n, r, s = this.t.style,
                            a = o.transform.parse;
                        if ("all" === this.e) s.cssText = "", r = !0;
                        else
                            for (t = this.e.split(","), n = t.length; --n > -1;) i = t[n], o[i] && (o[i].parse === a ? r = !0 : i = "transformOrigin" === i ? xe : o[i].p), Ee(s, i);
                        r && (Ee(s, ve), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (_e("clearProps", {
                        parser: function(e, t, n, r, s) {
                            return s = new de(e, n, 0, 0, s, 2), s.setRatio = De, s.e = t, s.pr = -10, s.data = r._tween, i = !0, s
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), fe = l.length; fe--;) ge(l[fe]);
                l = a.prototype, l._firstPT = null, l._onInitTween = function(e, t, o) {
                    if (!e.nodeType) return !1;
                    this._target = e, this._tween = o, this._vars = t, u = t.autoRound, i = !1, n = t.suffixMap || a.suffixMap, r = V(e, ""), s = this._overwriteProps;
                    var l, d, f, m, _, g, y, v, w, b = e.style;
                    if (c && "" === b.zIndex && (l = W(e, "zIndex", r), ("auto" === l || "" === l) && this._addLazySet(b, "zIndex", 0)), "string" == typeof t && (m = b.cssText, l = J(e, r), b.cssText = m + ";" + t, l = G(e, l, J(e)).difs, !q && x.test(t) && (l.opacity = parseFloat(RegExp.$1)), t = l, b.cssText = m), this._firstPT = d = this.parse(e, t, null), this._transformType) {
                        for (w = 3 === this._transformType, ve ? h && (c = !0, "" === b.zIndex && (y = W(e, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : b.zoom = 1, f = d; f && f._next;) f = f._next;
                        v = new de(e, "transform", 0, 0, null, 2), this._linkCSSP(v, null, f), v.setRatio = w && be ? Pe : ve ? ke : Se, v.data = this._transform || Ce(e, r, !0), s.pop()
                    }
                    if (i) {
                        for (; d;) {
                            for (g = d._next, f = m; f && f.pr > d.pr;) f = f._next;
                            (d._prev = f ? f._prev : _) ? d._prev._next = d: m = d, (d._next = f) ? f._prev = d : _ = d, d = g
                        }
                        this._firstPT = m
                    }
                    return !0
                }, l.parse = function(e, t, i, s) {
                    var a, l, c, h, d, p, f, m, _, g, y = e.style;
                    for (a in t) p = t[a], l = o[a], l ? i = l.parse(e, p, a, this, i, s, t) : (d = W(e, a, r) + "", _ = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || _ && T.test(p) ? (_ || (p = oe(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = pe(y, a, d, p, !0, "transparent", i, 0, s)) : !_ || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (c = parseFloat(d), f = c || 0 === c ? d.substr((c + "").length) : "", ("" === d || "auto" === d) && ("width" === a || "height" === a ? (c = ee(e, a, r), f = "px") : "left" === a || "top" === a ? (c = Y(e, a, r), f = "px") : (c = "opacity" !== a ? 0 : 1, f = "")), g = _ && "=" === p.charAt(1), g ? (h = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), h *= parseFloat(p), m = p.replace(v, "")) : (h = parseFloat(p), m = _ ? p.substr((h + "").length) || "" : ""), "" === m && (m = a in n ? n[a] : f), p = h || 0 === h ? (g ? h + c : h) + m : t[a], f !== m && "" !== m && (h || 0 === h) && c && (c = U(e, a, c, f), "%" === m ? (c /= U(e, a, 100, "%") / 100, t.strictUnits !== !0 && (d = c + "%")) : "em" === m ? c /= U(e, a, 1, "em") : "px" !== m && (h = U(e, a, h, m), m = "px"), g && (h || 0 === h) && (p = h + c + m)), g && (h += c), !c && 0 !== c || !h && 0 !== h ? void 0 !== y[a] && (p || "NaN" != p + "" && null != p) ? (i = new de(y, a, h || c || 0, 0, i, -1, a, !1, 0, d, p), i.xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : d) : z("invalid " + a + " tween value: " + t[a]) : (i = new de(y, a, c, h - c, i, 0, a, u !== !1 && ("px" === m || "zIndex" === a), 0, d, p), i.xs0 = m)) : i = pe(y, a, d, p, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                    return i
                }, l.setRatio = function(e) {
                    var t, i, n, r = this._firstPT,
                        s = 1e-6;
                    if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (t = r.c * e + r.s, r.r ? t = Math.round(t) : s > t && t > -s && (t = 0), r.type)
                                    if (1 === r.type)
                                        if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + t + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
                                else r.t[r.p] = t + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e), r = r._next;
                        else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(e), r = r._next
                }, l._enableTransforms = function(e) {
                    this._transformType = e || 3 === this._transformType ? 3 : 2, this._transform = this._transform || Ce(this._target, r, !0)
                };
                var Oe = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                l._addLazySet = function(e, t, i) {
                    var n = this._firstPT = new de(e, t, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Oe, n.data = this
                }, l._linkCSSP = function(e, t, i, n) {
                    return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, n = !0), i ? i._next = e : n || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
                }, l._kill = function(t) {
                    var i, n, r, s = t;
                    if (t.autoAlpha || t.alpha) {
                        s = {};
                        for (n in t) s[n] = t[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    return t.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), e.prototype._kill.call(this, s)
                };
                var je = function(e, t, i) {
                    var n, r, s, a;
                    if (e.slice)
                        for (r = e.length; --r > -1;) je(e[r], t, i);
                    else
                        for (n = e.childNodes, r = n.length; --r > -1;) s = n[r], a = s.type, s.style && (t.push(J(s)), i && i.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || je(s, t, i)
                };
                return a.cascadeTo = function(e, i, n) {
                    var r, s, a, o = t.to(e, i, n),
                        l = [o],
                        u = [],
                        c = [],
                        h = [],
                        d = t._internals.reservedProps;
                    for (e = o._targets || o.target, je(e, u, h), o.render(i, !0), je(e, c), o.render(0, !0), o._enabled(!0), r = h.length; --r > -1;)
                        if (s = G(h[r], u[r], c[r]), s.firstMPT) {
                            s = s.difs;
                            for (a in n) d[a] && (s[a] = n[a]);
                            l.push(t.to(h[r], i, s))
                        }
                    return l
                }, e.activate([a]), a
            }, !0),
            function() {
                var e = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(e, t, i) {
                            return this._tween = i, !0
                        }
                    }),
                    t = e.prototype;
                t._onInitAllProps = function() {
                    for (var e, t, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, a = {}, o = n._propLookup.roundProps; --s > -1;) a[r[s]] = 1;
                    for (s = r.length; --s > -1;)
                        for (e = r[s], t = n._firstPT; t;) i = t._next, t.pg ? t.t._roundProps(a, !0) : t.n === e && (this._add(t.t, e, t.s, t.c), i && (i._prev = t._prev), t._prev ? t._prev._next = i : n._firstPT === t && (n._firstPT = i), t._next = t._prev = null, n._propLookup[e] = o), t = i;
                    return !1
                }, t._add = function(e, t, i, n) {
                    this._addTween(e, t, i, i + n, t, !0), this._overwriteProps.push(t)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.3.3",
                init: function(e, t) {
                    var i, n, r;
                    if ("function" != typeof e.setAttribute) return !1;
                    this._target = e, this._proxy = {}, this._start = {}, this._end = {};
                    for (i in t) this._start[i] = this._proxy[i] = n = e.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(n), t[i], i), this._end[i] = r ? r.s + r.c : t[i], this._overwriteProps.push(i);
                    return !0
                },
                set: function(e) {
                    this._super.setRatio.call(this, e);
                    for (var t, i = this._overwriteProps, n = i.length, r = 1 === e ? this._end : e ? this._proxy : this._start; --n > -1;) t = i[n], this._target.setAttribute(t, r[t] + "")
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(e, t) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var i, n, r, s, a, o, l = t.useRadians === !0 ? 2 * Math.PI : 360,
                        u = 1e-6;
                    for (i in t) "useRadians" !== i && (o = (t[i] + "").split("_"), n = o[0], r = parseFloat("function" != typeof e[i] ? e[i] : e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), s = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, a = s - r, o.length && (n = o.join("_"), -1 !== n.indexOf("short") && (a %= l, a !== a % (l / 2) && (a = 0 > a ? a + l : a - l)), -1 !== n.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (0 | a / l) * l : -1 !== n.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (0 | a / l) * l)), (a > u || -u > a) && (this._addTween(e, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(e) {
                    var t;
                    if (1 !== e) this._super.setRatio.call(this, e);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
                var t, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    s = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    l = s._class,
                    u = function(t, i) {
                        var n = l("easing." + t, function() {}, !0),
                            r = n.prototype = new e;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    c = e.register || function() {},
                    h = function(e, t, i, n) {
                        var r = l("easing." + e, {
                            easeOut: new t,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(r, e), r
                    },
                    d = function(e, t, i) {
                        this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
                    },
                    p = function(t, i) {
                        var n = l("easing." + t, function(e) {
                                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new e;
                        return r.constructor = n, r.getRatio = i, r.config = function(e) {
                            return new n(e)
                        }, n
                    },
                    f = h("Back", p("BackOut", function(e) {
                        return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), p("BackIn", function(e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), p("BackInOut", function(e) {
                        return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(e, t, i) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    _ = m.prototype = new e;
                return _.constructor = m, _.getRatio = function(e) {
                    var t = e + (.5 - e) * this._p;
                    return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, m.ease = new m(.7, .7), _.config = m.config = function(e, t, i) {
                    return new m(e, t, i)
                }, t = l("easing.SteppedEase", function(e) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
                }, !0), _ = t.prototype = new e, _.constructor = t, _.getRatio = function(e) {
                    return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
                }, _.config = t.config = function(e) {
                    return new t(e)
                }, i = l("easing.RoughEase", function(t) {
                    t = t || {};
                    for (var i, n, r, s, a, o, l = t.taper || "none", u = [], c = 0, h = 0 | (t.points || 20), p = h, f = t.randomize !== !1, m = t.clamp === !0, _ = t.template instanceof e ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;) i = f ? Math.random() : 1 / h * p, n = _ ? _.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (s = 1 - i, r = s * s * g) : "in" === l ? r = i * i * g : .5 > i ? (s = 2 * i, r = .5 * s * s * g) : (s = 2 * (1 - i), r = .5 * s * s * g), f ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[c++] = {
                        x: i,
                        y: n
                    };
                    for (u.sort(function(e, t) {
                            return e.x - t.x
                        }), o = new d(1, 1, null), p = h; --p > -1;) a = u[p], o = new d(a.x, a.y, o);
                    this._prev = new d(0, 0, 0 !== o.t ? o : o.next)
                }, !0), _ = i.prototype = new e, _.constructor = i, _.getRatio = function(e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && t.t >= e;) t = t.prev;
                    return this._prev = t, t.v + (e - t.t) / t.gap * t.c
                }, _.config = function(e) {
                    return new i(e)
                }, i.ease = new i, h("Bounce", u("BounceOut", function(e) {
                    return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), u("BounceIn", function(e) {
                    return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), u("BounceInOut", function(e) {
                    var t = .5 > e;
                    return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), h("Circ", u("CircOut", function(e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }), u("CircIn", function(e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                }), u("CircInOut", function(e) {
                    return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })), n = function(t, i, n) {
                    var r = l("easing." + t, function(e, t) {
                            this._p1 = e || 1, this._p2 = t || n, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        s = r.prototype = new e;
                    return s.constructor = r, s.getRatio = i, s.config = function(e, t) {
                        return new r(e, t)
                    }, r
                }, h("Elastic", n("ElasticOut", function(e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * a / this._p2) + 1
                }, .3), n("ElasticIn", function(e) {
                    return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * a / this._p2))
                }, .3), n("ElasticInOut", function(e) {
                    return 1 > (e *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * a / this._p2) + 1
                }, .45)), h("Expo", u("ExpoOut", function(e) {
                    return 1 - Math.pow(2, -10 * e)
                }), u("ExpoIn", function(e) {
                    return Math.pow(2, 10 * (e - 1)) - .001
                }), u("ExpoInOut", function(e) {
                    return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })), h("Sine", u("SineOut", function(e) {
                    return Math.sin(e * o)
                }), u("SineIn", function(e) {
                    return -Math.cos(e * o) + 1
                }), u("SineInOut", function(e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                })), l("easing.EaseLookup", {
                    find: function(t) {
                        return e.map[t]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(t, "SteppedEase", "ease,"), f
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e, t) {
        "use strict";
        var i = e.GreenSockGlobals = e.GreenSockGlobals || e;
        if (!i.TweenLite) {
            var n, r, s, a, o, l = function(e) {
                    var t, n = e.split("."),
                        r = i;
                    for (t = 0; n.length > t; t++) r[n[t]] = r = r[n[t]] || {};
                    return r
                },
                u = l("com.greensock"),
                c = 1e-10,
                h = function(e) {
                    var t, i = [],
                        n = e.length;
                    for (t = 0; t !== n; i.push(e[t++]));
                    return i
                },
                d = function() {},
                p = function() {
                    var e = Object.prototype.toString,
                        t = e.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
                    }
                }(),
                f = {},
                m = function(n, r, s, a) {
                    this.sc = f[n] ? f[n].sc : [], f[n] = this, this.gsClass = null, this.func = s;
                    var o = [];
                    this.check = function(u) {
                        for (var c, h, d, p, _ = r.length, g = _; --_ > -1;)(c = f[r[_]] || new m(r[_], [])).gsClass ? (o[_] = c.gsClass, g--) : u && c.sc.push(this);
                        if (0 === g && s)
                            for (h = ("com.greensock." + n).split("."), d = h.pop(), p = l(h.join("."))[d] = this.gsClass = s.apply(s, o), a && (i[d] = p, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return p
                                }) : n === t && "undefined" != typeof module && module.exports && (module.exports = p)), _ = 0; this.sc.length > _; _++) this.sc[_].check()
                    }, this.check(!0)
                },
                _ = e._gsDefine = function(e, t, i, n) {
                    return new m(e, t, i, n)
                },
                g = u._class = function(e, t, i) {
                    return t = t || function() {}, _(e, [], function() {
                        return t
                    }, i), t
                };
            _.globals = i;
            var y = [0, 0, 1, 1],
                v = [],
                w = g("easing.Ease", function(e, t, i, n) {
                    this._func = e, this._type = i || 0, this._power = n || 0, this._params = t ? y.concat(t) : y
                }, !0),
                x = w.map = {},
                b = w.register = function(e, t, i, n) {
                    for (var r, s, a, o, l = t.split(","), c = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (s = l[c], r = n ? g("easing." + s, null, !0) : u.easing[s] || {}, a = h.length; --a > -1;) o = h[a], x[s + "." + o] = x[o + s] = r[o] = e.getRatio ? e : e[o] || new e
                };
            for (s = w.prototype, s._calcEnd = !1, s.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        i = this._power,
                        n = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : .5 > e ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, b(new w(null, null, 1, r), s, "easeOut", !0), b(new w(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), b(new w(null, null, 3, r), s, "easeInOut");
            x.linear = u.easing.Linear.easeIn, x.swing = u.easing.Quad.easeInOut;
            var T = g("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            s = T.prototype, s.addEventListener = function(e, t, i, n, r) {
                r = r || 0;
                var s, l, u = this._listeners[e],
                    c = 0;
                for (null == u && (this._listeners[e] = u = []), l = u.length; --l > -1;) s = u[l], s.c === t && s.s === i ? u.splice(l, 1) : 0 === c && r > s.pr && (c = l + 1);
                u.splice(c, 0, {
                    c: t,
                    s: i,
                    up: n,
                    pr: r
                }), this !== a || o || a.wake()
            }, s.removeEventListener = function(e, t) {
                var i, n = this._listeners[e];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === t) return void n.splice(i, 1)
            }, s.dispatchEvent = function(e) {
                var t, i, n, r = this._listeners[e];
                if (r)
                    for (t = r.length, i = this._eventTarget; --t > -1;) n = r[t], n.up ? n.c.call(n.s || i, {
                        type: e,
                        target: i
                    }) : n.c.call(n.s || i)
            };
            var C = e.requestAnimationFrame,
                S = e.cancelAnimationFrame,
                P = Date.now || function() {
                    return (new Date).getTime()
                },
                k = P();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !C;) C = e[n[r] + "RequestAnimationFrame"], S = e[n[r] + "CancelAnimationFrame"] || e[n[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(e, t) {
                var i, n, r, s, l, u = this,
                    h = P(),
                    p = t !== !1 && C,
                    f = 500,
                    m = 33,
                    _ = function(e) {
                        var t, a, o = P() - k;
                        o > f && (h += o - m), k += o, u.time = (k - h) / 1e3, t = u.time - l, (!i || t > 0 || e === !0) && (u.frame++, l += t + (t >= s ? .004 : s - t), a = !0), e !== !0 && (r = n(_)), a && u.dispatchEvent("tick")
                    };
                T.call(u), u.time = u.frame = 0, u.tick = function() {
                    _(!0)
                }, u.lagSmoothing = function(e, t) {
                    f = e || 1 / c, m = Math.min(t, f, 0)
                }, u.sleep = function() {
                    null != r && (p && S ? S(r) : clearTimeout(r), n = d, r = null, u === a && (o = !1))
                }, u.wake = function() {
                    null !== r ? u.sleep() : u.frame > 10 && (k = P() - f + 5), n = 0 === i ? d : p && C ? C : function(e) {
                        return setTimeout(e, 0 | 1e3 * (l - u.time) + 1)
                    }, u === a && (o = !0), _(2)
                }, u.fps = function(e) {
                    return arguments.length ? (i = e, s = 1 / (i || 60), l = this.time + s, void u.wake()) : i
                }, u.useRAF = function(e) {
                    return arguments.length ? (u.sleep(), p = e, void u.fps(i)) : p
                }, u.fps(e), setTimeout(function() {
                    p && (!r || 5 > u.frame) && u.useRAF(!1)
                }, 1500)
            }), s = u.Ticker.prototype = new u.events.EventDispatcher, s.constructor = u.Ticker;
            var L = g("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, X) {
                    o || a.wake();
                    var i = this.vars.useFrames ? z : X;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = L.ticker = new u.Ticker, s = L.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var E = function() {
                o && P() - k > 2e3 && a.wake(), setTimeout(E, 2e3)
            };
            E(), s.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, s.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, s.resume = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, s.seek = function(e, t) {
                return this.totalTime(Number(e), t !== !1)
            }, s.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
            }, s.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, s.render = function() {}, s.invalidate = function() {
                return this
            }, s.isActive = function() {
                var e, t = this._timeline,
                    i = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && i + this.totalDuration() / this._timeScale > e
            }, s._enabled = function(e, t) {
                return o || a.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function() {
                return this._enabled(!1, !1)
            }, s.kill = function(e, t) {
                return this._kill(e, t), this
            }, s._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, s._swapSelfInParams = function(e) {
                for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
                return i
            }, s.eventCallback = function(e, t, i, n) {
                if ("on" === (e || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[e];
                    null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[e + "Scope"] = n), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, s.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, s.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, s.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, s.totalTime = function(e, t, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (e > n && !i && (e = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (this.render(e, t, !1), N.length && B())
                }
                return this
            }, s.progress = s.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
            }, s.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, s.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || c, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        i = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, s.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function(e) {
                if (!arguments.length) return this._paused;
                if (e != this._paused && this._timeline) {
                    o || e || a.wake();
                    var t = this._timeline,
                        i = t.rawTime(),
                        n = i - this._pauseTime;
                    !e && t.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? i : null, this._paused = e, this._active = this.isActive(), !e && 0 !== n && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !e && this._enabled(!0, !1), this
            };
            var A = g("core.SimpleTimeline", function(e) {
                L.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = A.prototype = new L, s.constructor = A, s.kill()._gc = !1, s._first = s._last = null, s._sortChildren = !1, s.add = s.insert = function(e, t) {
                var i, n;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = e._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._timeline && this._uncache(!0), this
            }, s._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, this._timeline && this._uncache(!0)), this
            }, s.render = function(e, t, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; r;) n = r._next, (r._active || e >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = n
            }, s.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var D = g("TweenLite", function(t, i, n) {
                    if (L.call(this, i, n), this.render = D.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : D.selector(t) || t;
                    var r, s, a, o = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? H[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : H[l], (o || t instanceof Array || t.push && p(t)) && "number" != typeof t[0])
                        for (this._targets = a = h(t), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) s = a[r], s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(h(s))) : (this._siblings[r] = Q(s, this, !1), 1 === l && this._siblings[r].length > 1 && V(s, this, null, 1, this._siblings[r])) : (s = a[r--] = D.selector(s), "string" == typeof s && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = Q(t, this, !1), 1 === l && this._siblings.length > 1 && V(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                O = function(t) {
                    return t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                },
                j = function(e, t) {
                    var i, n = {};
                    for (i in e) q[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (n[i] = e[i], delete e[i]);
                    e.css = n
                };
            s = D.prototype = new L, s.constructor = D, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, D.version = "1.13.1", D.defaultEase = s._ease = new w(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = !0, D.lagSmoothing = function(e, t) {
                a.lagSmoothing(e, t)
            }, D.selector = e.$ || e.jQuery || function(t) {
                var i = e.$ || e.jQuery;
                return i ? (D.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var N = [],
                R = {},
                M = D._internals = {
                    isArray: p,
                    isSelector: O,
                    lazyTweens: N
                },
                I = D._plugins = {},
                F = M.tweenLookup = {},
                $ = 0,
                q = M.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1
                },
                H = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                z = L._rootFramesTimeline = new A,
                X = L._rootTimeline = new A,
                B = M.lazyRender = function() {
                    var e = N.length;
                    for (R = {}; --e > -1;) n = N[e], n && n._lazy !== !1 && (n.render(n._lazy, !1, !0), n._lazy = !1);
                    N.length = 0
                };
            X._startTime = a.time, z._startTime = a.frame, X._active = z._active = !0, setTimeout(B, 1), L._updateRoot = D.render = function() {
                var e, t, i;
                if (N.length && B(), X.render((a.time - X._startTime) * X._timeScale, !1, !1), z.render((a.frame - z._startTime) * z._timeScale, !1, !1), N.length && B(), !(a.frame % 120)) {
                    for (i in F) {
                        for (t = F[i].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete F[i]
                    }
                    if (i = X._first, (!i || i._paused) && D.autoSleep && !z._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", L._updateRoot);
            var Q = function(e, t, i) {
                    var n, r, s = e._gsTweenID;
                    if (F[s || (e._gsTweenID = s = "t" + $++)] || (F[s] = {
                            target: e,
                            tweens: []
                        }), t && (n = F[s].tweens, n[r = n.length] = t, i))
                        for (; --r > -1;) n[r] === t && n.splice(r, 1);
                    return F[s].tweens
                },
                V = function(e, t, i, n, r) {
                    var s, a, o, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((o = r[s]) !== t) o._gc || o._enabled(!1, !1) && (a = !0);
                            else if (5 === n) break;
                        return a
                    }
                    var u, h = t._startTime + c,
                        d = [],
                        p = 0,
                        f = 0 === t._duration;
                    for (s = r.length; --s > -1;)(o = r[s]) === t || o._gc || o._paused || (o._timeline !== t._timeline ? (u = u || W(t, 0, f), 0 === W(o, u, f) && (d[p++] = o)) : h >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > h && ((f || !o._initted) && 2e-10 >= h - o._startTime || (d[p++] = o)));
                    for (s = p; --s > -1;) o = d[s], 2 === n && o._kill(i, e) && (a = !0), (2 !== n || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                    return a
                },
                W = function(e, t, i) {
                    for (var n = e._timeline, r = n._timeScale, s = e._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= r, s > t ? s - t : i && s === t || !e._initted && 2 * c > s - t ? c : (s += e.totalDuration() / e._timeScale / r) > t + c ? 0 : s - t - c
                };
            s._init = function() {
                var e, t, i, n, r, s = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!s.immediateRender,
                    u = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in s.startAt) r[n] = s.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (s.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        i = {};
                        for (n in s) q[n] && "autoCSS" !== n || (i[n] = s[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1)
                    }
                if (this._ease = u = u ? u instanceof w ? u : "function" == typeof u ? new w(u, s.easeParams) : x[u] || D.defaultEase : D.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (t && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, s._initProps = function(t, i, n, r) {
                var s, a, o, l, u, c;
                if (null == t) return !1;
                R[t._gsTweenID] && B(), this.vars.css || t.style && t !== e && t.nodeType && I.css && this.vars.autoCSS !== !1 && j(this.vars, t);
                for (s in this.vars) {
                    if (c = this.vars[s], q[s]) c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                    else if (I[s] && (l = new I[s])._onInitTween(t, this.vars[s], this)) {
                        for (this._firstPT = u = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: s,
                                pg: !0,
                                pr: l._priority
                            }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[s] = u = {
                        _next: this._firstPT,
                        t: t,
                        p: s,
                        f: "function" == typeof t[s],
                        n: s,
                        pg: !1,
                        pr: 0
                    }, u.s = u.f ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), u.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - u.s || 0;
                    u && u._next && (u._next._prev = u)
                }
                return r && this._kill(r, t) ? this._initProps(t, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && V(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (R[t._gsTweenID] = !0), o)
            }, s.render = function(e, t, i) {
                var n, r, s, a, o = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (e >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > u || u === c) && u !== e && (i = !0, u > c && (r = "onReverseComplete")), this._rawPrevTime = a = !t || e || u === e ? e : c);
                else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && u > 0 && u !== c) && (r = "onReverseComplete", n = this._reversed), 0 > e ? (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (i = !0), this._rawPrevTime = a = !t || e || u === e ? e : c)) : this._initted || (i = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var h = e / l,
                        d = this._easeType,
                        p = this._easePower;
                    (1 === d || 3 === d && h >= .5) && (h = 1 - h), 3 === d && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), this.ratio = 1 === d ? 1 - h : 2 === d ? h : .5 > e / l ? h / 2 : 1 - h / 2
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = u, N.push(this), void(this._lazy = e);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && e >= 0 && (this._active = !0), 0 === o && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || v))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, i), t || (this._time !== o || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || v)), r && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || v), 0 === l && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0))
                }
            }, s._kill = function(e, t) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : D.selector(t) || t;
                var i, n, r, s, a, o, l, u;
                if ((p(t) || O(t)) && "number" != typeof t[0])
                    for (i = t.length; --i > -1;) this._kill(e, t[i]) && (o = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (t === this._targets[i]) {
                                a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        a = this._propLookup, n = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        l = e || a, u = e !== n && "all" !== n && e !== a && ("object" != typeof e || !e._tempKill);
                        for (r in l)(s = a[r]) && (s.pg && s.t._kill(l) && (o = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[r]), u && (n[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return o
            }, s.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1, this._propLookup = this._targets ? {} : [], this
            }, s._enabled = function(e, t) {
                if (o || a.wake(), e && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = Q(n[i], this, !0);
                    else this._siblings = Q(this.target, this, !0)
                }
                return L.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(e, t, i) {
                return new D(e, t, i)
            }, D.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(e, t, i)
            }, D.fromTo = function(e, t, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(e, t, n)
            }, D.delayedCall = function(e, t, i, n, r) {
                return new D(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    onCompleteScope: n,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: n,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(e, t) {
                return new D(e, 0, t)
            }, D.getTweensOf = function(e, t) {
                if (null == e) return [];
                e = "string" != typeof e ? e : D.selector(e) || e;
                var i, n, r, s;
                if ((p(e) || O(e)) && "number" != typeof e[0]) {
                    for (i = e.length, n = []; --i > -1;) n = n.concat(D.getTweensOf(e[i], t));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else
                    for (n = Q(e).concat(), i = n.length; --i > -1;)(n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, D.killTweensOf = D.killDelayedCallsTo = function(e, t, i) {
                "object" == typeof t && (i = t, t = !1);
                for (var n = D.getTweensOf(e, t), r = n.length; --r > -1;) n[r]._kill(i, e)
            };
            var U = g("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = U.prototype
            }, !0);
            if (s = U.prototype, U.version = "1.10.1", U.API = 2, s._firstPT = null, s._addTween = function(e, t, i, n, r, s) {
                    var a, o;
                    return null != n && (a = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: e,
                        p: t,
                        s: i,
                        c: a,
                        f: "function" == typeof e[t],
                        n: r || t,
                        r: s
                    }, o._next && (o._next._prev = o), o) : void 0
                }, s.setRatio = function(e) {
                    for (var t, i = this._firstPT, n = 1e-6; i;) t = i.c * e + i.s, i.r ? t = Math.round(t) : n > t && t > -n && (t = 0), i.f ? i.t[i.p](t) : i.t[i.p] = t, i = i._next
                }, s._kill = function(e) {
                    var t, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
                    for (; n;) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, s._roundProps = function(e, t) {
                    for (var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
                }, D._onPluginEvent = function(e, t) {
                    var i, n, r, s, a, o = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; o;) {
                            for (a = o._next, n = r; n && n.pr > o.pr;) n = n._next;
                            (o._prev = n ? n._prev : s) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : s = o, o = a
                        }
                        o = t._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[e] && o.t[e]() && (i = !0), o = o._next;
                    return i
                }, U.activate = function(e) {
                    for (var t = e.length; --t > -1;) e[t].API === U.API && (I[(new e[t])._propName] = e[t]);
                    return !0
                }, _.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, i = e.propName,
                        n = e.priority || 0,
                        r = e.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            U.call(this, i, n), this._overwriteProps = r || []
                        }, e.global === !0),
                        o = a.prototype = new U(i);
                    o.constructor = a, a.API = e.API;
                    for (t in s) "function" == typeof e[t] && (o[s[t]] = e[t]);
                    return a.version = e.version, U.activate([a]), a
                }, n = e._gsQueue) {
                for (r = 0; n.length > r; r++) n[r]();
                for (s in f) f[s].func || e.console.log("GSAP encountered missing dependency: com.greensock." + s)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e =  {};
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, i) {
                this.initialize(e, t, i)
            },
            t = e.prototype;
        t.type = null, t.target = null, t.currentTarget = null, t.eventPhase = 0, t.bubbles = !1, t.cancelable = !1, t.timeStamp = 0, t.defaultPrevented = !1, t.propagationStopped = !1, t.immediatePropagationStopped = !1, t.removed = !1, t.initialize = function(e, t, i) {
            this.type = e, this.bubbles = t, this.cancelable = i, this.timeStamp = (new Date).getTime()
        }, t.preventDefault = function() {
            this.defaultPrevented = !0
        }, t.stopPropagation = function() {
            this.propagationStopped = !0
        }, t.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, t.remove = function() {
            this.removed = !0
        }, t.clone = function() {
            return new e(this.type, this.bubbles, this.cancelable)
        }, t.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function() {},
            t = e.prototype;
        e.initialize = function(e) {
            e.addEventListener = t.addEventListener, e.on = t.on, e.removeEventListener = e.off = t.removeEventListener, e.removeAllEventListeners = t.removeAllEventListeners, e.hasEventListener = t.hasEventListener, e.dispatchEvent = t.dispatchEvent, e._dispatchEvent = t._dispatchEvent, e.willTrigger = t.willTrigger
        }, t._listeners = null, t._captureListeners = null, t.initialize = function() {}, t.addEventListener = function(e, t, i) {
            var n;
            n = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var r = n[e];
            return r && this.removeEventListener(e, t, i), r = n[e], r ? r.push(t) : n[e] = [t], t
        }, t.on = function(e, t, i, n, r, s) {
            return t.handleEvent && (i = i || t, t = t.handleEvent), i = i || this, this.addEventListener(e, function(e) {
                t.call(i, e, r), n && e.remove()
            }, s)
        }, t.removeEventListener = function(e, t, i) {
            var n = i ? this._captureListeners : this._listeners;
            if (n) {
                var r = n[e];
                if (r)
                    for (var s = 0, a = r.length; a > s; s++)
                        if (r[s] == t) {
                            1 == a ? delete n[e] : r.splice(s, 1);
                            break
                        }
            }
        }, t.off = t.removeEventListener, t.removeAllEventListeners = function(e) {
            e ? (this._listeners && delete this._listeners[e], this._captureListeners && delete this._captureListeners[e]) : this._listeners = this._captureListeners = null
        }, t.dispatchEvent = function(e, t) {
            if ("string" == typeof e) {
                var i = this._listeners;
                if (!i || !i[e]) return !1;
                e = new createjs.Event(e)
            }
            if (e.target = t || this, e.bubbles && this.parent) {
                for (var n = this, r = [n]; n.parent;) r.push(n = n.parent);
                var s, a = r.length;
                for (s = a - 1; s >= 0 && !e.propagationStopped; s--) r[s]._dispatchEvent(e, 1 + (0 == s));
                for (s = 1; a > s && !e.propagationStopped; s++) r[s]._dispatchEvent(e, 3)
            } else this._dispatchEvent(e, 2);
            return e.defaultPrevented
        }, t.hasEventListener = function(e) {
            var t = this._listeners,
                i = this._captureListeners;
            return !!(t && t[e] || i && i[e])
        }, t.willTrigger = function(e) {
            for (var t = this; t;) {
                if (t.hasEventListener(e)) return !0;
                t = t.parent
            }
            return !1
        }, t.toString = function() {
            return "[EventDispatcher]"
        }, t._dispatchEvent = function(e, t) {
            var i, n = 1 == t ? this._captureListeners : this._listeners;
            if (e && n) {
                var r = n[e.type];
                if (!r || !(i = r.length)) return;
                e.currentTarget = this, e.eventPhase = t, e.removed = !1, r = r.slice();
                for (var s = 0; i > s && !e.immediatePropagationStopped; s++) {
                    var a = r[s];
                    a.handleEvent ? a.handleEvent(e) : a(e), e.removed && (this.off(e.type, a, 1 == t), e.removed = !1)
                }
            }
        }, createjs.EventDispatcher = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.indexOf = function(e, t) {
            for (var i = 0, n = e.length; n > i; i++)
                if (t === e[i]) return i;
            return -1
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.proxy = function(e, t) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function() {
                return e.apply(t, Array.prototype.slice.call(arguments, 0).concat(i))
            }
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function() {
            this.init()
        };
        e.prototype = new createjs.EventDispatcher;
        var t = e.prototype,
            i = e;
        i.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?)|(.{0,2}\/{1}))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/, i.PATH_PATTERN = /^(?:(\w+:)\/{2})|(.{0,2}\/{1})?([\/.]*?(?:[^?]+)?\/?)?$/, t.loaded = !1, t.canceled = !1, t.progress = 0, t._item = null, t.getItem = function() {
            return this._item
        }, t.init = function() {}, t.load = function() {}, t.close = function() {}, t._sendLoadStart = function() {
            this._isCanceled() || this.dispatchEvent("loadstart")
        }, t._sendProgress = function(e) {
            if (!this._isCanceled()) {
                var t = null;
                "number" == typeof e ? (this.progress = e, t = new createjs.Event("progress"), t.loaded = this.progress, t.total = 1) : (t = e, this.progress = e.loaded / e.total, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), t.progress = this.progress, this.hasEventListener("progress") && this.dispatchEvent(t)
            }
        }, t._sendComplete = function() {
            this._isCanceled() || this.dispatchEvent("complete")
        }, t._sendError = function(e) {
            !this._isCanceled() && this.hasEventListener("error") && (null == e && (e = new createjs.Event("error")), this.dispatchEvent(e))
        }, t._isCanceled = function() {
            return null == window.createjs || this.canceled ? !0 : !1
        }, t._parseURI = function(e) {
            return e ? e.match(i.FILE_PATTERN) : null
        }, t._parsePath = function(e) {
            return e ? e.match(i.PATH_PATTERN) : null
        }, t._formatQueryString = function(e, t) {
            if (null == e) throw new Error("You must specify data.");
            var i = [];
            for (var n in e) i.push(n + "=" + escape(e[n]));
            return t && (i = i.concat(t)), i.join("&")
        }, t.buildPath = function(e, t) {
            if (null == t) return e;
            var i = [],
                n = e.indexOf("?");
            if (-1 != n) {
                var r = e.slice(n + 1);
                i = i.concat(r.split("&"))
            }
            return -1 != n ? e.slice(0, n) + "?" + this._formatQueryString(t, i) : e + "?" + this._formatQueryString(t, i)
        }, t._isCrossDomain = function(e) {
            var t = document.createElement("a");
            t.href = e.src;
            var i = document.createElement("a");
            i.href = location.href;
            var n = "" != t.hostname && (t.port != i.port || t.protocol != i.protocol || t.hostname != i.hostname);
            return n
        }, t._isLocal = function(e) {
            var t = document.createElement("a");
            return t.href = e.src, "" == t.hostname && "file:" == t.protocol
        }, t.toString = function() {
            return "[PreloadJS AbstractLoader]"
        }, createjs.AbstractLoader = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e, t, i) {
                this.init(e, t, i)
            },
            t = e.prototype = new createjs.AbstractLoader,
            i = e;
        i.loadTimeout = 8e3, i.LOAD_TIMEOUT = 0, i.BINARY = "binary", i.CSS = "css", i.IMAGE = "image", i.JAVASCRIPT = "javascript", i.JSON = "json", i.JSONP = "jsonp", i.MANIFEST = "manifest", i.SOUND = "sound", i.SVG = "svg", i.TEXT = "text", i.XML = "xml", i.POST = "POST", i.GET = "GET", t._basePath = null, t._crossOrigin = "", t.useXHR = !0, t.stopOnError = !1, t.maintainScriptOrder = !0, t.next = null, t._typeCallbacks = null, t._extensionCallbacks = null, t._loadStartWasDispatched = !1, t._maxConnections = 1, t._currentlyLoadingScript = null, t._currentLoads = null, t._loadQueue = null, t._loadQueueBackup = null, t._loadItemsById = null, t._loadItemsBySrc = null, t._loadedResults = null, t._loadedRawResults = null, t._numItems = 0, t._numItemsLoaded = 0, t._scriptOrder = null, t._loadedScripts = null, t.init = function(e, t, i) {
            this._numItems = this._numItemsLoaded = 0, this._paused = !1, this._loadStartWasDispatched = !1, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._scriptOrder = [], this._loadedScripts = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._typeCallbacks = {}, this._extensionCallbacks = {}, this._basePath = t, this.setUseXHR(e), this._crossOrigin = i === !0 ? "Anonymous" : i === !1 || null == i ? "" : i
        }, t.setUseXHR = function(e) {
            return this.useXHR = 0 != e && null != window.XMLHttpRequest, this.useXHR
        }, t.removeAll = function() {
            this.remove()
        }, t.remove = function(e) {
            var t = null;
            if (!e || e instanceof Array) {
                if (e) t = e;
                else if (arguments.length > 0) return
            } else t = [e];
            var i = !1;
            if (t) {
                for (; t.length;) {
                    var n = t.pop(),
                        r = this.getResult(n);
                    for (s = this._loadQueue.length - 1; s >= 0; s--)
                        if (a = this._loadQueue[s].getItem(), a.id == n || a.src == n) {
                            this._loadQueue.splice(s, 1)[0].cancel();
                            break
                        }
                    for (s = this._loadQueueBackup.length - 1; s >= 0; s--)
                        if (a = this._loadQueueBackup[s].getItem(), a.id == n || a.src == n) {
                            this._loadQueueBackup.splice(s, 1)[0].cancel();
                            break
                        }
                    if (r) delete this._loadItemsById[r.id], delete this._loadItemsBySrc[r.src], this._disposeItem(r);
                    else
                        for (var s = this._currentLoads.length - 1; s >= 0; s--) {
                            var a = this._currentLoads[s].getItem();
                            if (a.id == n || a.src == n) {
                                this._currentLoads.splice(s, 1)[0].cancel(), i = !0;
                                break
                            }
                        }
                }
                i && this._loadNext()
            } else {
                this.close();
                for (var o in this._loadItemsById) this._disposeItem(this._loadItemsById[o]);
                this.init(this.useXHR)
            }
        }, t.reset = function() {
            this.close();
            for (var e in this._loadItemsById) this._disposeItem(this._loadItemsById[e]);
            for (var t = [], i = 0, n = this._loadQueueBackup.length; n > i; i++) t.push(this._loadQueueBackup[i].getItem());
            this.loadManifest(t, !1)
        }, i.isBinary = function(e) {
            switch (e) {
                case createjs.LoadQueue.IMAGE:
                case createjs.LoadQueue.BINARY:
                    return !0;
                default:
                    return !1
            }
        }, i.isText = function(e) {
            switch (e) {
                case createjs.LoadQueue.TEXT:
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.MANIFEST:
                case createjs.LoadQueue.XML:
                case createjs.LoadQueue.HTML:
                case createjs.LoadQueue.CSS:
                case createjs.LoadQueue.SVG:
                case createjs.LoadQueue.JAVASCRIPT:
                    return !0;
                default:
                    return !1
            }
        }, t.installPlugin = function(e) {
            if (null != e && null != e.getPreloadHandlers) {
                var t = e.getPreloadHandlers();
                if (t.scope = e, null != t.types)
                    for (var i = 0, n = t.types.length; n > i; i++) this._typeCallbacks[t.types[i]] = t;
                if (null != t.extensions)
                    for (i = 0, n = t.extensions.length; n > i; i++) this._extensionCallbacks[t.extensions[i]] = t
            }
        }, t.setMaxConnections = function(e) {
            this._maxConnections = e, !this._paused && this._loadQueue.length > 0 && this._loadNext()
        }, t.loadFile = function(e, t, i) {
            if (null == e) {
                var n = new createjs.Event("error");
                return n.text = "PRELOAD_NO_FILE", void this._sendError(n)
            }
            this._addItem(e, null, i), this.setPaused(t !== !1 ? !1 : !0)
        }, t.loadManifest = function(e, t, n) {
            var r = null,
                s = null;
            if (e instanceof Array) {
                if (0 == e.length) {
                    var a = new createjs.Event("error");
                    return a.text = "PRELOAD_MANIFEST_EMPTY", void this._sendError(a)
                }
                r = e
            } else if ("string" == typeof e) r = [{
                src: e,
                type: i.MANIFEST
            }];
            else {
                if ("object" != typeof e) {
                    var a = new createjs.Event("error");
                    return a.text = "PRELOAD_MANIFEST_NULL", void this._sendError(a)
                }
                if (void 0 !== e.src) {
                    if (null == e.type) e.type = i.MANIFEST;
                    else if (e.type != i.MANIFEST) {
                        var a = new createjs.Event("error");
                        a.text = "PRELOAD_MANIFEST_ERROR", this._sendError(a)
                    }
                    r = [e]
                } else void 0 !== e.manifest && (r = e.manifest, s = e.path)
            }
            for (var o = 0, l = r.length; l > o; o++) this._addItem(r[o], s, n);
            this.setPaused(t !== !1 ? !1 : !0)
        }, t.load = function() {
            this.setPaused(!1)
        }, t.getItem = function(e) {
            return this._loadItemsById[e] || this._loadItemsBySrc[e]
        }, t.getResult = function(e, t) {
            var i = this._loadItemsById[e] || this._loadItemsBySrc[e];
            if (null == i) return null;
            var n = i.id;
            return t && this._loadedRawResults[n] ? this._loadedRawResults[n] : this._loadedResults[n]
        }, t.setPaused = function(e) {
            this._paused = e, this._paused || this._loadNext()
        }, t.close = function() {
            for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
            this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1
        }, t._addItem = function(e, t, i) {
            var n = this._createLoadItem(e, t, i);
            if (null != n) {
                var r = this._createLoader(n);
                null != r && (this._loadQueue.push(r), this._loadQueueBackup.push(r), this._numItems++, this._updateProgress(), this.maintainScriptOrder && n.type == createjs.LoadQueue.JAVASCRIPT && r instanceof createjs.XHRLoader && (this._scriptOrder.push(n), this._loadedScripts.push(null)))
            }
        }, t._createLoadItem = function(e, t, i) {
            var n = null;
            switch (typeof e) {
                case "string":
                    n = {
                        src: e
                    };
                    break;
                case "object":
                    n = window.HTMLAudioElement && e instanceof window.HTMLAudioElement ? {
                        tag: e,
                        src: n.tag.src,
                        type: createjs.LoadQueue.SOUND
                    } : e;
                    break;
                default:
                    return null
            }
            var r = this._parseURI(n.src);
            null != r && (n.ext = r[6]), null == n.type && (n.type = this._getTypeByExtension(n.ext));
            var s = "",
                a = i || this._basePath,
                o = n.src;
            if (r && null == r[1] && null == r[3])
                if (t) {
                    s = t;
                    var l = this._parsePath(t);
                    o = t + o, null != a && l && null == l[1] && null == l[2] && (s = a + s)
                } else null != a && (s = a);
            if (n.src = s + n.src, n.path = s, (n.type == createjs.LoadQueue.JSON || n.type == createjs.LoadQueue.MANIFEST) && (n._loadAsJSONP = null != n.callback), n.type == createjs.LoadQueue.JSONP && null == n.callback) throw new Error("callback is required for loading JSONP requests.");
            (void 0 === n.tag || null === n.tag) && (n.tag = this._createTag(n)), (void 0 === n.id || null === n.id || "" === n.id) && (n.id = o);
            var u = this._typeCallbacks[n.type] || this._extensionCallbacks[n.ext];
            if (u) {
                var c = u.callback.call(u.scope, n.src, n.type, n.id, n.data, s, this);
                if (c === !1) return null;
                c === !0 || (null != c.src && (n.src = c.src), null != c.id && (n.id = c.id), null != c.tag && (n.tag = c.tag), null != c.completeHandler && (n.completeHandler = c.completeHandler), c.type && (n.type = c.type), r = this._parseURI(n.src), null != r && null != r[6] && (n.ext = r[6].toLowerCase()))
            }
            return this._loadItemsById[n.id] = n, this._loadItemsBySrc[n.src] = n, n
        }, t._createLoader = function(e) {
            var t = this.useXHR;
            return t ? new createjs.XHRLoader(e, this._crossOrigin) : new createjs.TagLoader(e)
        }, t._loadNext = function() {
            if (!this._paused) {
                this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
                for (var e = 0; e < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); e++) {
                    var t = this._loadQueue[e];
                    if (this.maintainScriptOrder && t instanceof createjs.TagLoader && t.getItem().type == createjs.LoadQueue.JAVASCRIPT) {
                        if (this._currentlyLoadingScript) continue;
                        this._currentlyLoadingScript = !0
                    }
                    this._loadQueue.splice(e, 1), e--, this._loadItem(t)
                }
            }
        }, t._loadItem = function(e) {
            e.on("progress", this._handleProgress, this), e.on("complete", this._handleFileComplete, this), e.on("error", this._handleFileError, this), this._currentLoads.push(e), this._sendFileStart(e.getItem()), e.load()
        }, t._handleFileError = function(e) {
            var t = e.target;
            this._numItemsLoaded++, this._updateProgress();
            var i = new createjs.Event("error");
            i.text = "FILE_LOAD_ERROR", i.item = t.getItem(), this._sendError(i), this.stopOnError || (this._removeLoadItem(t), this._loadNext())
        }, t._handleFileComplete = function(e) {
            var t = e.target,
                i = t.getItem();
            if (this._loadedResults[i.id] = t.getResult(), t instanceof createjs.XHRLoader && (this._loadedRawResults[i.id] = t.getResult(!0)), this._removeLoadItem(t), this.maintainScriptOrder && i.type == createjs.LoadQueue.JAVASCRIPT) {
                if (!(t instanceof createjs.TagLoader)) return this._loadedScripts[createjs.indexOf(this._scriptOrder, i)] = i, void this._checkScriptLoadOrder(t);
                this._currentlyLoadingScript = !1
            }
            if (delete i._loadAsJSONP, i.type == createjs.LoadQueue.MANIFEST) {
                var n = t.getResult();
                null != n && void 0 !== n.manifest && this.loadManifest(n, !0)
            }
            this._processFinishedLoad(i, t)
        }, t._processFinishedLoad = function(e, t) {
            this._numItemsLoaded++, this._updateProgress(), this._sendFileComplete(e, t), this._loadNext()
        }, t._checkScriptLoadOrder = function() {
            for (var e = this._loadedScripts.length, t = 0; e > t; t++) {
                var i = this._loadedScripts[t];
                if (null === i) break;
                if (i !== !0) {
                    var n = this._loadedResults[i.id];
                    (document.body || document.getElementsByTagName("body")[0]).appendChild(n), this._processFinishedLoad(i), this._loadedScripts[t] = !0
                }
            }
        }, t._removeLoadItem = function(e) {
            for (var t = this._currentLoads.length, i = 0; t > i; i++)
                if (this._currentLoads[i] == e) {
                    this._currentLoads.splice(i, 1);
                    break
                }
        }, t._handleProgress = function(e) {
            var t = e.target;
            this._sendFileProgress(t.getItem(), t.progress), this._updateProgress()
        }, t._updateProgress = function() {
            var e = this._numItemsLoaded / this._numItems,
                t = this._numItems - this._numItemsLoaded;
            if (t > 0) {
                for (var i = 0, n = 0, r = this._currentLoads.length; r > n; n++) i += this._currentLoads[n].progress;
                e += i / t * (t / this._numItems)
            }
            this._sendProgress(e)
        }, t._disposeItem = function(e) {
            delete this._loadedResults[e.id], delete this._loadedRawResults[e.id], delete this._loadItemsById[e.id], delete this._loadItemsBySrc[e.src]
        }, t._createTag = function(e) {
            var t = null;
            return null
        }, t._getTypeByExtension = function(e) {
            if (null == e) return createjs.LoadQueue.TEXT;
        }, t._sendFileProgress = function(e, t) {
            if (this._isCanceled()) return void this._cleanUp();
            if (this.hasEventListener("fileprogress")) {
                var i = new createjs.Event("fileprogress");
                i.progress = t, i.loaded = t, i.total = 1, i.item = e, this.dispatchEvent(i)
            }
        }, t._sendFileComplete = function(e, t) {
            if (!this._isCanceled()) {
                var i = new createjs.Event("fileload");
                i.loader = t, i.item = e, i.result = this._loadedResults[e.id], i.rawResult = this._loadedRawResults[e.id], e.completeHandler && e.completeHandler(i), this.hasEventListener("fileload") && this.dispatchEvent(i)
            }
        }, t._sendFileStart = function(e) {
            var t = new createjs.Event("filestart");
            t.item = e, this.hasEventListener("filestart") && this.dispatchEvent(t)
        }, t.toString = function() {
            return "[PreloadJS LoadQueue]"
        }, createjs.LoadQueue = e;
        var n = function() {};
        n.init = function() {
            var e = navigator.userAgent;
            n.isFirefox = e.indexOf("Firefox") > -1, n.isOpera = null != window.opera, n.isChrome = e.indexOf("Chrome") > -1, n.isIOS = e.indexOf("iPod") > -1 || e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1
        }, n.init(), createjs.LoadQueue.BrowserDetect = n
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var e = function(e) {
                this.init(e)
            },
            t = e.prototype = new createjs.AbstractLoader;
        t._loadTimeout = null, t._tagCompleteProxy = null, t._isAudio = !1, t._tag = null, t._jsonResult = null, t.init = function(e) {
            this._item = e, this._tag = e.tag, this._isAudio = window.HTMLAudioElement && e.tag instanceof window.HTMLAudioElement, this._tagCompleteProxy = createjs.proxy(this._handleLoad, this)
        }, t.getResult = function() {
            return this._item.type == createjs.LoadQueue.JSONP || this._item.type == createjs.LoadQueue.MANIFEST ? this._jsonResult : this._tag
        }, t.cancel = function() {
            this.canceled = !0, this._clean()
        }, t.load = function() {
            var e = this._item,
                t = this._tag;
            clearTimeout(this._loadTimeout);
            var i = createjs.LoadQueue.LOAD_TIMEOUT;
            0 == i && (i = createjs.LoadQueue.loadTimeout), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), i), this._isAudio && (t.src = null, t.preload = "auto"), t.onerror = createjs.proxy(this._handleError, this), this._isAudio ? (t.onstalled = createjs.proxy(this._handleStalled, this), t.addEventListener("canplaythrough", this._tagCompleteProxy, !1)) : (t.onload = createjs.proxy(this._handleLoad, this), t.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this));
            var n = this.buildPath(e.src, e.values);
            switch (e.type) {
                case createjs.LoadQueue.CSS:
                    t.href = n;
                    break;
                case createjs.LoadQueue.SVG:
                    t.data = n;
                    break;
                default:
                    t.src = n
            }
            if (e.type == createjs.LoadQueue.JSONP || e.type == createjs.LoadQueue.JSON || e.type == createjs.LoadQueue.MANIFEST) {
                if (null == e.callback) throw new Error("callback is required for loading JSONP requests.");
                if (null != window[e.callback]) throw new Error('JSONP callback "' + e.callback + '" already exists on window. You need to specify a different callback. Or re-name the current one.');
                window[e.callback] = createjs.proxy(this._handleJSONPLoad, this)
            }(e.type == createjs.LoadQueue.SVG || e.type == createjs.LoadQueue.JSONP || e.type == createjs.LoadQueue.JSON || e.type == createjs.LoadQueue.MANIFEST || e.type == createjs.LoadQueue.JAVASCRIPT || e.type == createjs.LoadQueue.CSS) && (this._startTagVisibility = t.style.visibility, t.style.visibility = "hidden", (document.body || document.getElementsByTagName("body")[0]).appendChild(t)), null != t.load && t.load()
        }, t._handleJSONPLoad = function(e) {
            this._jsonResult = e
        }, t._handleTimeout = function() {
            this._clean();
            var e = new createjs.Event("error");
            e.text = "PRELOAD_TIMEOUT", this._sendError(e)
        }, t._handleStalled = function() {}, t._handleError = function() {
            this._clean();
            var e = new createjs.Event("error");
            this._sendError(e)
        }, t._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var e = this.getItem().tag;
            ("loaded" == e.readyState || "complete" == e.readyState) && this._handleLoad()
        }, t._handleLoad = function() {
            if (!this._isCanceled()) {
                var e = this.getItem(),
                    t = e.tag;
                if (!(this.loaded || this._isAudio && 4 !== t.readyState)) {
                    switch (this.loaded = !0, e.type) {
                        case createjs.LoadQueue.SVG:
                        case createjs.LoadQueue.JSON:
                        case createjs.LoadQueue.JSONP:
                        case createjs.LoadQueue.MANIFEST:
                        case createjs.LoadQueue.CSS:
                            t.style.visibility = this._startTagVisibility, (document.body || document.getElementsByTagName("body")[0]).removeChild(t)
                    }
                    this._clean(), this._sendComplete()
                }
            }
        }, t._clean = function() {
            clearTimeout(this._loadTimeout);
            var e = this.getItem(),
                t = e.tag;
            null != t && (t.onload = null, t.removeEventListener && t.removeEventListener("canplaythrough", this._tagCompleteProxy, !1), t.onstalled = null, t.onprogress = null, t.onerror = null, null != t.parentNode && e.type == createjs.LoadQueue.SVG && e.type == createjs.LoadQueue.JSON && e.type == createjs.LoadQueue.MANIFEST && e.type == createjs.LoadQueue.CSS && e.type == createjs.LoadQueue.JSONP && t.parentNode.removeChild(t));
            var e = this.getItem();
            (e.type == createjs.LoadQueue.JSONP || e.type == createjs.LoadQueue.MANIFEST) && (window[e.callback] = null)
        }, t.toString = function() {
            return "[PreloadJS TagLoader]"
        }, createjs.TagLoader = e
    }(), this.createjs = this.createjs || {},
    // function() {
    //     "use strict";
    //     var e = function(e, t) {
    //             this.init(e, t)
    //         },
    //         t = e.prototype = new createjs.AbstractLoader;
    //     t._request = null, t._loadTimeout = null, t._xhrLevel = 1, t._response = null, t._rawResponse = null, t._crossOrigin = "", t.init = function(e, t) {
    //         this._item = e, this._crossOrigin = t, !this._createXHR(e)
    //     }, t.getResult = function(e) {
    //         return e && this._rawResponse ? this._rawResponse : this._response
    //     }, t.cancel = function() {
    //         this.canceled = !0, this._clean(), this._request.abort()
    //     }, t.load = function() {
    //         if (null == this._request) return void this._handleError();
    //         if (this._request.onloadstart = createjs.proxy(this._handleLoadStart, this), this._request.onprogress = createjs.proxy(this._handleProgress, this), this._request.onabort = createjs.proxy(this._handleAbort, this), this._request.onerror = createjs.proxy(this._handleError, this), this._request.ontimeout = createjs.proxy(this._handleTimeout, this), 1 == this._xhrLevel) {
    //             var e = createjs.LoadQueue.LOAD_TIMEOUT;
    //             if (0 == e) e = createjs.LoadQueue.loadTimeout;
    //             else try {
    //                 console.warn("LoadQueue.LOAD_TIMEOUT has been deprecated in favor of LoadQueue.loadTimeout")
    //             } catch (t) {}
    //             this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), e)
    //         }
    //         this._request.onload = createjs.proxy(this._handleLoad, this), this._request.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
    //         try {
    //             this._item.values && this._item.method != createjs.LoadQueue.GET ? this._item.method == createjs.LoadQueue.POST && this._request.send(this._formatQueryString(this._item.values)) : this._request.send()
    //         } catch (i) {
    //             var n = new createjs.Event("error");
    //             n.error = i, this._sendError(n)
    //         }
    //     }, t.getAllResponseHeaders = function() {
    //         return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
    //     }, t.getResponseHeader = function(e) {
    //         return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(e) : null
    //     }, t._handleProgress = function(e) {
    //         if (e && !(e.loaded > 0 && 0 == e.total)) {
    //             var t = new createjs.Event("progress");
    //             t.loaded = e.loaded, t.total = e.total, this._sendProgress(t)
    //         }
    //     }, t._handleLoadStart = function() {
    //         clearTimeout(this._loadTimeout), this._sendLoadStart()
    //     }, t._handleAbort = function() {
    //         this._clean();
    //         var e = new createjs.Event("error");
    //         e.text = "XHR_ABORTED", this._sendError(e)
    //     }, t._handleError = function() {
    //         this._clean();
    //         var e = new createjs.Event("error");
    //         this._sendError(e)
    //     }, t._handleReadyStateChange = function() {
    //         4 == this._request.readyState && this._handleLoad()
    //     }, t._handleLoad = function() {
    //         if (!this.loaded) {
    //             if (this.loaded = !0, !this._checkError()) return void this._handleError();
    //             this._response = this._getResponse(), this._clean();
    //             var e = this._generateTag();
    //             e && this._sendComplete()
    //         }
    //     }, t._handleTimeout = function(e) {
    //         this._clean();
    //         var t = new createjs.Event("error");
    //         t.text = "PRELOAD_TIMEOUT", this._sendError(e)
    //     }, t._checkError = function() {
    //         var e = parseInt(this._request.status);
    //         switch (e) {
    //             case 404:
    //             case 0:
    //                 return !1
    //         }
    //         return !0
    //     }, t._getResponse = function() {
    //         if (null != this._response) return this._response;
    //         if (null != this._request.response) return this._request.response;
    //         try {
    //             if (null != this._request.responseText) return this._request.responseText
    //         } catch (e) {}
    //         try {
    //             if (null != this._request.responseXML) return this._request.responseXML
    //         } catch (e) {}
    //         return null
    //     }, t._createXHR = function(e) {
    //         var t = this._isCrossDomain(e),
    //             i = null;
    //         if (t && window.XDomainRequest) i = new XDomainRequest;
    //         else if (window.XMLHttpRequest) i = new XMLHttpRequest;
    //         else try {
    //             i = new ActiveXObject("Msxml2.XMLHTTP.6.0")
    //         } catch (n) {
    //             try {
    //                 i = new ActiveXObject("Msxml2.XMLHTTP.3.0")
    //             } catch (n) {
    //                 try {
    //                     i = new ActiveXObject("Msxml2.XMLHTTP")
    //                 } catch (n) {
    //                     return !1
    //                 }
    //             }
    //         }
    //         createjs.LoadQueue.isText(e.type) && i.overrideMimeType && i.overrideMimeType("text/plain; charset=utf-8"), this._xhrLevel = "string" == typeof i.responseType ? 2 : 1;
    //         var r = null;
    //         return r = e.method == createjs.LoadQueue.GET ? this.buildPath(e.src, e.values) : e.src, i.open(e.method || createjs.LoadQueue.GET, r, !0), t && i instanceof XMLHttpRequest && 1 == this._xhrLevel && i.setRequestHeader("Origin", location.origin), e.values && e.method == createjs.LoadQueue.POST && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), createjs.LoadQueue.isBinary(e.type) && (i.responseType = "arraybuffer"), this._request = i, !0
    //     }, t._clean = function() {
    //         clearTimeout(this._loadTimeout);
    //         var e = this._request;
    //         e.onloadstart = null, e.onprogress = null, e.onabort = null, e.onerror = null, e.onload = null, e.ontimeout = null, e.onloadend = null, e.onreadystatechange = null
    //     }, t._generateTag = function() {
    //         var e = this._item.type,
    //             t = this._item.tag;
    //         return !0
    //     }, t._parseXML = function(e, t) {
    //         var i = null;
    //         try {
    //             if (window.DOMParser) {
    //                 var n = new DOMParser;
    //                 i = n.parseFromString(e, t)
    //             } else i = new ActiveXObject("Microsoft.XMLDOM"), i.async = !1, i.loadXML(e)
    //         } catch (r) {}
    //         return i
    //     }, t._handleTagReady = function() {
    //         this._sendComplete()
    //     }, t.toString = function() {
    //         return "[PreloadJS XHRLoader]"
    //     }, createjs.XHRLoader = e
    // }(), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(e) {
            return 10 > e ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var i, n, r, s, a, o = gap,
                l = t[e];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? String(l) : "null";
                case "boolean":
                case "null":
                    return String(l);
                case "object":
                    if (!l) return "null";
                    if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (s = l.length, i = 0; s > i; i += 1) a[i] = str(i, l) || "null";
                        return r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + o + "]" : "[" + a.join(",") + "]", gap = o, r
                    }
                    if (rep && "object" == typeof rep)
                        for (s = rep.length, i = 0; s > i; i += 1) "string" == typeof rep[i] && (n = rep[i], r = str(n, l), r && a.push(quote(n) + (gap ? ": " : ":") + r));
                    else
                        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (r = str(n, l), r && a.push(quote(n) + (gap ? ": " : ":") + r));
                    return r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + o + "}" : "{" + a.join(",") + "}", gap = o, r
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, i) {
            var n;
            if (gap = "", indent = "", "number" == typeof i)
                for (n = 0; i > n; n += 1) indent += " ";
            else "string" == typeof i && (indent = i);
            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
            return str("", {
                "": e
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var i, n, r = e[t];
                if (r && "object" == typeof r)
                    for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (n = walk(r, i), void 0 !== n ? r[i] = n : delete r[i]);
                return reviver.call(e, t, r)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), ! function() {
        "use strict";

        function e(e) {
            return Math.round(100 * e) / 100
        }

        function t(e, t) {
            return e > t ? e : t
        }

        function i(e, t) {
            return t > e ? e : t
        }

        function n(e, t, i) {
            return e > i ? e : i > t ? t : i
        }

        function r(e, t) {
            return Math.floor(Math.random() * (t - e) + e)
        }
        var s = {
            mobile: window.Modernizr.touch,
            click: ""
        };
        s.mobile ? (s.click = "touchstart", $("body").addClass("parallax-mobile")) : s.click = "click";
        var a = {
            roundTwo: e,
            minVal: t,
            maxVal: i,
            betweenVal: n,
            randomVal: r
        };
        window.melanieClient = s, window.melanieClient.util = a, window.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                window.setTimeout(e, 1e3 / 60)
            }
        }()
    }(),
    function() {
        "use strict";

        function e() {
            n = new l.LoadQueue, n.on("complete", i, window), n.on("progress", t, window), n.loadManifest(r)
        }

        function t(e) {
            a = Math.round(100 * e.loaded), c.text(a), u = 20 + 80 * a / 100, o.to(h, .2, {
                width: u + "%",
                ease: "easeIn"
            })
        }

        function i() {
            $(".nb-count").html("<span>1</span><span>0</span><span>0</span>"), window.MelanieStart.intro()
        }
        var n, r, s, a, o = window.TweenMax,
            l = window.createjs,
            u = 10;
        s = window.melanieClient.mobile ? {} : {}, $.ajax({
            url: s,
            dataType: "json",
            success: function(t) {
                r = t.preload_files, e()
            }
        });
        var c = $(".nb-count").find("span"),
            h = $(".gradient-loader")
    }(),
    function() {
        "use strict";

        function e() {
             this.navMenu = $(".nav-menu"),
             e.prototype.intro = function() {
                var e = this,
                    t = $(window).height() / -1.5;
                $("body").addClass("ready"),
                $(window).trigger("resize"),
                s.to(".shapes", 1, {
                    alpha: 1,
                    delay: .08
                }), e.navMenu.addClass("active"), s.to(this.navMenu, .3, {
                    alpha: 1,
                    delay: .01,
                }), s.to(".gradient-wrapper", 1.5, {
                    yPercent: -99,
                    ease: "Expo.easeInOut",
                    force3D: !0,
                    onComplete: function() {
                        $(".preloader").remove(), window.melanieClient.mobile ? e.animTypoMobile() : $(window).width() <= 1024 ? e.animTypoMobile() : e.animTypo()
                    }
                }), s.to(".gradient-splash", .2, {
                    alpha: 1,
                    delay: 0.9
                })
            }, e.prototype.animTypo = function() {
                $(".mobile-lookbook").addClass("no-anim"), this.spriteAnim(".sprite-lookbook img", 400, 807, 2, 84, k), s.to(".baseline h4", 1, {
                    alpha: 1,
                    ease: "easeOut",
                    delay: 2.5
                }), s.to(".scroll-text", .8, {
                    alpha: 1,
                    ease: "easeOut",
                    delay: 2.8
                }), s.to(".line", 1, {
                    yPercent: 100,
                    ease: "easeOut",
                    delay: 2.8
                })
            }, e.prototype.animTypoMobile = function() {
                $(".desktop-lookbook").addClass("no-anim"), s.to(".baseline h3", .6, {
                    alpha: 1,
                    ease: "easeOut"
                }), s.to(".baseline h4", 1, {
                    alpha: 1,
                    ease: "easeOut",
                    delay: .6
                }), s.to(".scroll-text", .8, {
                    alpha: 1,
                    ease: "easeOut",
                    delay: 1
                }), s.to(".line", 1, {
                    yPercent: 100,
                    ease: "easeOut",
                    delay: 1.1
                })
            }, e.prototype.spriteAnim = function(e, t, i, n, r, a) {
                var o = -t * Math.floor(a.state / 4),
                    l = -i * (a.state % n),
                    u = a.state;
                clearInterval(a.val), a.val = setInterval(function() {
                    a.state = u, o = -t * Math.floor(u / n), l = -i * (u % n), u++, s.set(e, {
                        y: o,
                        x: l,
                        force3D: !0
                    }), u === r && (clearInterval(a.val), $(window).trigger("resize"), $("body").addClass("ready"))
                }, 30)
            }, e.prototype.resetSpriteAnim = function(e, t, i, n, r) {
                var a = -t * Math.floor(r.state / n),
                    o = -i * (r.state % n),
                    l = r.state;
                clearInterval(r.val), r.val = setInterval(function() {
                    r.state = l, a = -t * Math.floor(l / n), o = -i * (l % n), l--, s.set(e, {
                        y: a,
                        x: o,
                        force3D: !0
                    }), -1 === l && clearInterval(r.val)
                }, 20)
            }
        }

        function t() {
            this.navMenu = $(".nav-menu"), this.lineMenu = $(".line-menu"), this.lettersMenu = $(".wrapper-letters").find("span"), this.menu = $(".menu"), this.mainLogo = $(".logo-wrapper"), this.contentWrapper = $(".content-wrapper"), this.gradientSplash = $(".gradient-splash"), this.contentSplash = $(".content-splash"), this.logo = $(".logo"), this.descriptionSlipper = $(".description-slipper"), this.letter = $(".letter"), this.gradient = $(".gradient"), this.shapes = $(".shapes"), this.logoMenu = $(".logo-menu"), this.slipperLink = $(".slipper-link"), this.socialIcons = $(".social-menu").find("a"), this.animFlag = !1, t.prototype.open = function() {
                var e = this;
                this.animFlag = !0, this.openFlag = !0, this.menu.addClass("active"), s.to(this.menu, .8, {
                    alpha: 1,
                    ease: "easeIn"
                }), this.navMenu.addClass("white"), s.to(this.mainLogo, .6, {
                    alpha: 0,
                    onComplete: function() {
                        e.mainLogo.addClass("hide")
                    }
                }), s.to(this.logoMenu, 1, {
                    alpha: 1,
                    ease: "easeIn",
                    delay: .2
                }), s.to(".half-screen .left a", .6, {
                    alpha: 1,
                    x: 25,
                    ease: "easeIn",
                    force3D: !0,
                    delay: .4
                }), s.to(".half-screen .right a", .6, {
                    alpha: 1,
                    x: 25,
                    ease: "easeIn",
                    force3D: !0,
                    delay: .8
                }), s.to(this.slipperLink.eq(0), .3, {
                    alpha: 1,
                    x: 25,
                    ease: "easeIn",
                    force3D: !0,
                    delay: .5
                }), s.to(this.slipperLink.eq(1), .3, {
                    alpha: 1,
                    x: 25,
                    ease: "easeIn",
                    force3D: !0,
                    delay: .6
                }), s.to(this.slipperLink.eq(2), .3, {
                    alpha: 1,
                    x: 25,
                    ease: "easeIn",
                    force3D: !0,
                    delay: .7
                }), s.to(this.slipperLink.eq(3), .3, {
                    alpha: 1,
                    x: 25,
                    ease: "easeIn",
                    force3D: !0,
                    delay: .8
                }), s.to(this.slipperLink.eq(4), .3, {
                    alpha: 1,
                    x: 25,
                    ease: "easeIn",
                    force3D: !0,
                    delay: .9
                }), s.to(this.slipperLink.eq(5), .3, {
                    alpha: 1,
                    x: 25,
                    ease: "easeIn",
                    force3D: !0,
                    delay: 1,
                    onComplete: function() {
                        e.animFlag = !1
                    }
                })
            }, t.prototype.close = function() {
                var e = this;
                this.animFlag = !0, this.openFlag = !1, this.navMenu.removeClass("white"), s.to(this.logoMenu, .2, {
                    alpha: 0,
                    ease: "easeIn"
                }), s.to(".half-screen .left a", .2, {
                    alpha: 0,
                    x: 40,
                    ease: "easeIn",
                    clearProps: "all",
                    force3D: !0
                }), s.to(".half-screen .right a", .2, {
                    alpha: 0,
                    x: 40,
                    ease: "easeIn",
                    clearProps: "all",
                    force3D: !0,
                    delay: .15
                }), s.to(this.slipperLink.eq(0), .2, {
                    alpha: 0,
                    x: 40,
                    ease: "easeIn",
                    clearProps: "all",
                    force3D: !0
                }), s.to(this.slipperLink.eq(1), .2, {
                    alpha: 0,
                    x: 40,
                    ease: "easeIn",
                    clearProps: "all",
                    force3D: !0,
                    delay: .05
                }), s.to(this.slipperLink.eq(2), .2, {
                    alpha: 0,
                    x: 40,
                    ease: "easeIn",
                    clearProps: "all",
                    force3D: !0,
                    delay: .1
                }), s.to(this.slipperLink.eq(3), .2, {
                    alpha: 0,
                    x: 40,
                    ease: "easeIn",
                    clearProps: "all",
                    force3D: !0,
                    delay: .15
                }), s.to(this.slipperLink.eq(4), .2, {
                    alpha: 0,
                    x: 40,
                    ease: "easeIn",
                    clearProps: "all",
                    force3D: !0,
                    delay: .2
                }), s.to(this.slipperLink.eq(5), .2, {
                    alpha: 0,
                    x: 40,
                    ease: "easeIn",
                    clearProps: "all",
                    force3D: !0,
                    delay: .25
                }), e.mainLogo.removeClass("hide"), s.to(this.mainLogo, 1, {
                    alpha: 1,
                    delay: .4
                }), s.to(this.menu, 1, {
                    alpha: 0,
                    ease: "easeIn",
                    delay: .4,
                    onComplete: function() {
                        e.menu.removeClass("active"), e.animFlag = !1
                    }
                })
            }, t.prototype.hover = function() {
                s.to(this.lineMenu, .4, {
                    xPercent: 100,
                    ease: "Circ.easeIn"
                }), s.to(this.lettersMenu.eq(0), .2, {
                    y: -8,
                    ease: "Sine.easeInOut",
                    delay: .05
                }), s.to(this.lettersMenu.eq(1), .2, {
                    y: -8,
                    ease: "Sine.easeInOut",
                    delay: .1
                }), s.to(this.lettersMenu.eq(2), .2, {
                    y: -8,
                    ease: "Sine.easeInOut",
                    delay: .15
                }), s.to(this.lettersMenu.eq(3), .2, {
                    y: -8,
                    ease: "Sine.easeInOut",
                    delay: .2
                }), s.to(this.lettersMenu.eq(0), .2, {
                    y: 0,
                    ease: "Sine.easeInOut",
                    delay: .25
                }), s.to(this.lettersMenu.eq(1), .2, {
                    y: 0,
                    ease: "Sine.easeInOut",
                    delay: .3
                }), s.to(this.lettersMenu.eq(2), .2, {
                    y: 0,
                    ease: "Sine.easeInOut",
                    delay: .35
                }), s.to(this.lettersMenu.eq(3), .2, {
                    y: 0,
                    ease: "Sine.easeInOut",
                    delay: .4
                })
            }, t.prototype.leave = function() {
                var e = this;
                s.to(this.lineMenu, .2, {
                    xPercent: 200,
                    ease: "Circ.easeOut",
                    onComplete: function() {
                        s.set(e.lineMenu, {
                            xPercent: 0
                        })
                    }
                })
            }, t.prototype.hoverLink = function(e) {
                s.to(e, .15, {
                    width: "100%",
                    ease: "Sine.easeOut"
                })
            }, t.prototype.leaveLink = function(e) {
                s.to(e, .15, {
                    width: "0%",
                    ease: "Sine.easeOut"
                })
            }, t.prototype.hoverSocial = function(e, t) {
                1 === t ? s.to(e, .15, {
                    rotation: -20,
                    force3D: !0,
                    ease: "Sine.easeOut"
                }) : s.to(e, .15, {
                    rotation: 20,
                    force3D: !0,
                    ease: "Sine.easeOut"
                })
            }, t.prototype.leaveSocial = function(e) {
                s.to(e, .15, {
                    rotation: 0,
                    force3D: !0,
                    ease: "Sine.easeOut"
                })
            }
        }

        function i() {
            i.prototype.hoverShop = function(e) {
                s.to(e.find("span"), .5, {
                    color: "#fff",
                    ease: "Sine.easeInOut"
                }), s.to(e.find(".overlay-color"), .5, {
                    alpha: 1,
                    ease: "Sine.easeInOut"
                }), s.to(e.find("span").eq(0), .2, {
                    y: -5,
                    ease: "Sine.easeInOut",
                    delay: .05
                }), s.to(e.find("span").eq(1), .2, {
                    y: -5,
                    ease: "Sine.easeInOut",
                    delay: .1
                }), s.to(e.find("span").eq(2), .2, {
                    y: -5,
                    ease: "Sine.easeInOut",
                    delay: .15
                }), s.to(e.find("span").eq(3), .2, {
                    y: -5,
                    ease: "Sine.easeInOut",
                    delay: .2
                }), s.to(e.find("span").eq(0), .2, {
                    y: 0,
                    ease: "Sine.easeInOut",
                    delay: .25
                }), s.to(e.find("span").eq(1), .2, {
                    y: 0,
                    ease: "Sine.easeInOut",
                    delay: .3
                }), s.to(e.find("span").eq(2), .2, {
                    y: 0,
                    ease: "Sine.easeInOut",
                    delay: .35
                }), s.to(e.find("span").eq(3), .2, {
                    y: 0,
                    ease: "Sine.easeInOut",
                    delay: .4
                })
            }, i.prototype.leaveShop = function(e, t) {
                s.to(e.find("span"), .3, {
                    color: t,
                    ease: "Sine.easeInOut"
                }), s.to(e.find(".overlay-color"), .3, {
                    alpha: 0,
                    ease: "Sine.easeInOut"
                })
            }, i.prototype.hoverFooter = function(e) {
                s.to(e.find("span"), .5, {
                    color: "#fff",
                    ease: "Sine.easeInOut"
                }), s.to(e.find(".overlay-color"), .5, {
                    alpha: 1,
                    ease: "Sine.easeInOut"
                })
            }, i.prototype.leaveFooter = function(e, t) {
                s.to(e.find("span"), .3, {
                    color: t,
                    ease: "Sine.easeInOut"
                }), s.to(e.find(".overlay-color"), .3, {
                    alpha: 0,
                    ease: "Sine.easeInOut"
                })
            }, i.prototype.fontAnim = function(e) {
                for (var t = e.find("h3 span").length, i = 0; t > i; i++) s.to(e.find("span").eq(i), .5, {
                    y: 0,
                    alpha: 1,
                    delay: .05 * i,
                    force3D: !0
                });
                s.to(e.find("p"), 1.2, {
                    alpha: 1,
                    delay: .25
                })
            }, i.prototype.spriteAnim = function(e, t, i, n, r, a) {
                var o = -t * Math.floor(a.state / 4),
                    l = -i * (a.state % n),
                    u = a.state;
                clearInterval(a.val), a.val = setInterval(function() {
                    a.state = u, o = -t * Math.floor(u / n), l = -i * (u % n), u++, s.set(e, {
                        y: o,
                        x: l,
                        force3D: !0
                    }), u === r && clearInterval(a.val)
                }, 30)
            }, i.prototype.resetSpriteAnim = function(e, t, i, n, r) {
                var a = -t * Math.floor(r.state / n),
                    o = -i * (r.state % n),
                    l = r.state;
                clearInterval(r.val), r.val = setInterval(function() {
                    r.state = l, a = -t * Math.floor(l / n), o = -i * (l % n), l--, s.set(e, {
                        y: a,
                        x: o,
                        force3D: !0
                    }), -1 === l && clearInterval(r.val)
                }, 20)
            }
        }

        function n() {
            P++, _.shapes_y = 6 * Math.sin(P / 150), _.rotate1 = P / 3, _.rotate2 = P / 1.5, _.rotate3 = P / -2, _.y_0 = window.melanieClient.util.roundTwo(.1 * (u / -26 - _.y_0) + _.y_0), _.y_0_bis = window.melanieClient.util.roundTwo(.1 * (u / -14 - _.y_0_bis) + _.y_0_bis), _.y_1 = window.melanieClient.util.roundTwo(.1 * (u / -12 - _.y_1) + _.y_1), _.y_2 = window.melanieClient.util.roundTwo(.1 * (u / -10 - _.y_2) + _.y_2), _.y_3 = window.melanieClient.util.roundTwo(.1 * (u / -14 - _.y_3) + _.y_3), _.y_4 = window.melanieClient.util.roundTwo(.1 * (u / -10 - _.y_4) + _.y_4), g.y = window.melanieClient.util.minVal(-350, window.melanieClient.util.roundTwo(.1 * (u / -15 - g.y) + g.y)), g.y_0 = window.melanieClient.util.maxVal(150, window.melanieClient.util.roundTwo(.1 * (u / 25 - g.y_0) + g.y_0)), g.y_1 = window.melanieClient.util.minVal(0, window.melanieClient.util.roundTwo(.1 * (u / -6 - g.y_1 + g.start_y_1) + g.y_1)), y.y = window.melanieClient.util.minVal(-280, window.melanieClient.util.roundTwo(.1 * (u / -17 - y.y) + y.y)), y.y_1 = window.melanieClient.util.maxVal(-25, window.melanieClient.util.roundTwo(.1 * (u / 150 - y.y_1 + y.start_y_1) + y.y_1)), y.y_2 = window.melanieClient.util.betweenVal(-50, 50, window.melanieClient.util.roundTwo(.1 * (u / -25 - y.y_2 + y.start_y_2) + y.y_2)), v.y = window.melanieClient.util.minVal(-406, window.melanieClient.util.roundTwo(.1 * (u / -17 - v.y) + v.y)), v.y_1 = window.melanieClient.util.maxVal(-25, window.melanieClient.util.roundTwo(.1 * (u / 150 - v.y_1 + v.start_y_1) + v.y_1)), v.y_2 = window.melanieClient.util.betweenVal(-50, 50, window.melanieClient.util.roundTwo(.1 * (u / -25 - v.y_2 + v.start_y_2) + v.y_2)), w.y = window.melanieClient.util.minVal(-540, window.melanieClient.util.roundTwo(.1 * (u / -17 - w.y) + w.y)), w.y_1 = window.melanieClient.util.maxVal(-25, window.melanieClient.util.roundTwo(.1 * (u / 150 - w.y_1 + w.start_y_1) + w.y_1)), w.y_2 = window.melanieClient.util.betweenVal(-50, 60, window.melanieClient.util.roundTwo(.1 * (u / -25 - w.y_2 + w.start_y_2) + w.y_2)), x.y = window.melanieClient.util.minVal(-680, window.melanieClient.util.roundTwo(.1 * (u / -17 - x.y) + x.y)), x.y_1 = window.melanieClient.util.maxVal(-25, window.melanieClient.util.roundTwo(.1 * (u / 150 - x.y_1 + x.start_y_1) + x.y_1)), x.y_2 = window.melanieClient.util.betweenVal(-50, 50, window.melanieClient.util.roundTwo(.1 * (u / -25 - x.y_2 + x.start_y_2) + x.y_2)), b.y = window.melanieClient.util.minVal(-800, window.melanieClient.util.roundTwo(.1 * (u / -17 - b.y) + b.y)), b.y_1 = window.melanieClient.util.maxVal(-25, window.melanieClient.util.roundTwo(.1 * (u / 150 - b.y_1 + b.start_y_1) + b.y_1)), b.y_2 = window.melanieClient.util.betweenVal(-50, 50, window.melanieClient.util.roundTwo(.1 * (u / -25 - b.y_2 + b.start_y_2) + b.y_2)), T.y = window.melanieClient.util.minVal(-920, window.melanieClient.util.roundTwo(.1 * (u / -17 - T.y) + T.y)), T.y_1 = window.melanieClient.util.maxVal(-25, window.melanieClient.util.roundTwo(.1 * (u / 150 - T.y_1 + T.start_y_1) + T.y_1)), T.y_2 = window.melanieClient.util.betweenVal(-50, 50, window.melanieClient.util.roundTwo(.1 * (u / -25 - T.y_2 + T.start_y_2) + T.y_2)), C.y0 = window.melanieClient.util.roundTwo(.1 * (u / -34 - C.y0) + C.y0), C.y1 = window.melanieClient.util.maxVal(85, window.melanieClient.util.roundTwo(.1 * (u / -50 - C.y1 + C.start_y_1) + C.y1)), C.y2 = window.melanieClient.util.maxVal(35, window.melanieClient.util.roundTwo(.1 * (u / -50 - C.y2 + C.start_y_2) + C.y2)), C.y3 = window.melanieClient.util.maxVal(35, window.melanieClient.util.roundTwo(.1 * (u / -50 - C.y3 + C.start_y_3) + C.y3)), C.y4 = window.melanieClient.util.maxVal(20, window.melanieClient.util.roundTwo(.1 * (u / -50 - C.y4 + C.start_y_4) + C.y4)), S.y = window.melanieClient.util.maxVal(30, window.melanieClient.util.roundTwo(.1 * (u / -50 - S.y + S.start_y) + S.y)), s.set(_.all, {
                yPercent: _.shapes_y,
                force3D: !0
            }), s.set(_.triangle, {
                yPercent: _.y_0,
                rotation: _.rotate1,
                force3D: !0
            }), s.set(_.triangleSmall, {
                yPercent: _.y_0_bis,
                rotation: -1 * _.rotate1,
                force3D: !0
            }), s.set(_.circle, {
                yPercent: _.y_1,
                force3D: !0
            }), s.set(_.diamond, {
                yPercent: _.y_2,
                rotation: _.rotate2,
                force3D: !0
            }), s.set(_.waves, {
                yPercent: _.y_3,
                rotation: -1 * _.rotate3,
                force3D: !0
            }), s.set(_.hexa, {
                yPercent: _.y_4,
                rotation: -1 * _.rotate2,
                force3D: !0
            }), s.set(g.selector, {
                yPercent: g.y,
                force3D: !0
            }), s.set(g.selector_0, {
                yPercent: g.y_0,
                force3D: !0
            }), s.set(g.selector_1, {
                yPercent: g.y_1,
                force3D: !0
            }), s.set(y.selector, {
                yPercent: y.y,
                force3D: !0
            }), s.set(y.selector_1, {
                yPercent: y.y_1,
                force3D: !0
            }), s.set(y.selector_2, {
                yPercent: y.y_2,
                force3D: !0
            }), s.set(v.selector, {
                yPercent: v.y,
                force3D: !0
            }), s.set(v.selector_1, {
                yPercent: v.y_1,
                force3D: !0
            }), s.set(v.selector_2, {
                yPercent: v.y_2,
                force3D: !0
            }), s.set(w.selector, {
                yPercent: w.y,
                force3D: !0
            }), s.set(w.selector_1, {
                yPercent: w.y_1,
                force3D: !0
            }), s.set(w.selector_2, {
                yPercent: w.y_2,
                force3D: !0
            }), s.set(x.selector, {
                yPercent: x.y,
                force3D: !0
            }), s.set(x.selector_1, {
                yPercent: x.y_1,
                force3D: !0
            }), s.set(x.selector_2, {
                yPercent: x.y_2,
                force3D: !0
            }), s.set(b.selector, {
                yPercent: b.y,
                force3D: !0
            }), s.set(b.selector_1, {
                yPercent: b.y_1,
                force3D: !0
            }), s.set(b.selector_2, {
                yPercent: b.y_2,
                force3D: !0
            }), s.set(T.selector, {
                yPercent: T.y,
                force3D: !0
            }), s.set(T.selector_1, {
                yPercent: T.y_1,
                force3D: !0
            }), s.set(T.selector_2, {
                yPercent: T.y_2,
                force3D: !0
            }), s.set(C.selector0, {
                yPercent: C.y0,
                force3D: !0
            }), s.set(C.selector1, {
                yPercent: C.y1,
                force3D: !0
            }), s.set(C.selector2, {
                yPercent: C.y2,
                force3D: !0
            }), s.set(C.selector3, {
                yPercent: C.y3,
                force3D: !0
            }), s.set(C.selector4, {
                yPercent: C.y4,
                force3D: !0
            }), s.set(S.selector, {
                yPercent: S.y,
                force3D: !0
            }), g.y < -110 ? g.flag_sprite || (window.MelanieStart.resetSpriteAnim(".sprite-lookbook img", 400, 807, 2, k), g.flag_sprite = !0) : g.flag_sprite && (window.MelanieStart.spriteAnim(".sprite-lookbook img", 400, 807, 2, 84, k), g.flag_sprite = !1), y.y < -110 ? y.flag_sprite || (y.flag_sprite = !0, o.spriteAnim(y.selector_3, 378, 429, 4, 44, L)) : y.flag_sprite && (o.resetSpriteAnim(y.selector_3, 378, 429, 4, L), y.flag_sprite = !1), v.y < -240 ? v.flag_sprite || (v.flag_sprite = !0, o.spriteAnim(v.selector_3, 378, 429, 4, 44, E)) : v.flag_sprite && (o.resetSpriteAnim(v.selector_3, 378, 429, 4, E), v.flag_sprite = !1), w.y < -360 ? w.flag_sprite || (w.flag_sprite = !0, o.spriteAnim(w.selector_3, 378, 429, 4, 42, A)) : w.flag_sprite && (o.resetSpriteAnim(w.selector_3, 378, 429, 4, A), w.flag_sprite = !1), x.y < -480 ? x.flag_sprite || (x.flag_sprite = !0, o.spriteAnim(x.selector_3, 378, 429, 4, 43, D)) : x.flag_sprite && (o.resetSpriteAnim(x.selector_3, 378, 429, 4, D), x.flag_sprite = !1), b.y < -600 ? b.flag_sprite || (b.flag_sprite = !0, o.spriteAnim(b.selector_3, 378, 429, 4, 40, O)) : b.flag_sprite && (o.resetSpriteAnim(b.selector_3, 378, 429, 4, O), b.flag_sprite = !1), T.y < -720 ? T.flag_sprite || (T.flag_sprite = !0, o.spriteAnim(T.selector_3, 378, 429, 4, 44, j)) : T.flag_sprite && (o.resetSpriteAnim(T.selector_3, 378, 429, 4, j), T.flag_sprite = !1), C.y0 < -414 && (C.flag_font1 || (C.flag_font1 = !0, o.fontAnim($(".style")))), C.y0 < -430 && (C.flag_font2 || (C.flag_font2 = !0, o.fontAnim($(".pratique")))), C.y0 < -448 && (C.flag_font3 || (C.flag_font3 = !0, o.fontAnim($(".antiderapant")))), C.y0 < -468 && (C.flag_font4 || (C.flag_font4 = !0, o.fontAnim($(".confort")))), C.y0 < -484 && (C.flag_font5 || (C.flag_font5 = !0, o.fontAnim($(".maintien")))), C.y0 < -502 && (C.flag_font6 || (C.flag_font6 = !0, o.fontAnim($(".raffinement")))), y.y < -50 ? _.all.hasClass("red") || (_.all.addClass("red"), g.selector_1.addClass("mini")) : _.all.hasClass("red") && (_.all.removeClass("red"), g.selector_1.removeClass("mini")), v.y < -200 ? _.all.hasClass("grey") || _.all.addClass("grey") : _.all.hasClass("grey") && _.all.removeClass("grey"), w.y < -320 ? _.all.hasClass("yellow") || _.all.addClass("yellow") : _.all.hasClass("yellow") && _.all.removeClass("yellow"), x.y < -430 ? _.all.hasClass("pink") || _.all.addClass("pink") : _.all.hasClass("pink") && _.all.removeClass("pink"), b.y < -550 ? _.all.hasClass("victoria") || _.all.addClass("victoria") : _.all.hasClass("victoria") && _.all.removeClass("victoria"), T.y < -710 ? _.all.hasClass("blue") || _.all.addClass("blue") : _.all.hasClass("blue") && _.all.removeClass("blue"), T.y < -810 ? _.all.hasClass("green2") || _.all.addClass("green2") : _.all.hasClass("green2") && _.all.removeClass("green2"), window.requestAnimFrame(n)
        }

        function r() {
            g.y = window.melanieClient.util.minVal(-190, window.melanieClient.util.roundTwo(.08 * (u / -7.5 - g.y) + g.y)), g.y_0 = window.melanieClient.util.maxVal(100, window.melanieClient.util.roundTwo(.08 * (u / 15 - g.y_0) + g.y_0)), g.y_1 = window.melanieClient.util.minVal(0, window.melanieClient.util.roundTwo(.08 * (u / -3 - g.y_1 + g.start_y_1) + g.y_1)), y.y = window.melanieClient.util.minVal(-285, window.melanieClient.util.roundTwo(.08 * (u / -8.5 - y.y) + y.y)), y.y_0 = window.melanieClient.util.maxVal(60, window.melanieClient.util.roundTwo(.08 * (u / 25 - y.y_0 + y.start_y_0) + y.y_0)), v.y = window.melanieClient.util.minVal(-405, window.melanieClient.util.roundTwo(.08 * (u / -8.5 - v.y) + v.y)), v.y_0 = window.melanieClient.util.maxVal(60, window.melanieClient.util.roundTwo(.08 * (u / 25 - v.y_0 + v.start_y_0) + v.y_0)), w.y = window.melanieClient.util.minVal(-530, window.melanieClient.util.roundTwo(.08 * (u / -8.5 - w.y) + w.y)), w.y_0 = window.melanieClient.util.maxVal(60, window.melanieClient.util.roundTwo(.08 * (u / 25 - w.y_0 + w.start_y_0) + w.y_0)), x.y = window.melanieClient.util.minVal(-670, window.melanieClient.util.roundTwo(.08 * (u / -8.5 - x.y) + x.y)), x.y_0 = window.melanieClient.util.maxVal(60, window.melanieClient.util.roundTwo(.08 * (u / 25 - x.y_0 + x.start_y_0) + x.y_0)), b.y = window.melanieClient.util.minVal(-800, window.melanieClient.util.roundTwo(.08 * (u / -8.5 - b.y) + b.y)), b.y_0 = window.melanieClient.util.maxVal(60, window.melanieClient.util.roundTwo(.08 * (u / 25 - b.y_0 + b.start_y_0) + b.y_0)), T.y = window.melanieClient.util.minVal(-930, window.melanieClient.util.roundTwo(.08 * (u / -8.5 - T.y) + T.y)), T.y_0 = window.melanieClient.util.maxVal(60, window.melanieClient.util.roundTwo(.08 * (u / 25 - T.y_0 + T.start_y_0) + T.y_0)), C.y0 = window.melanieClient.util.roundTwo(.08 * (u / -17 - C.y0) + C.y0), S.y = window.melanieClient.util.roundTwo(.08 * (u / -25 - S.y + S.start_y) + S.y), s.set(g.selector, {
                yPercent: g.y,
                force3D: !0
            }), s.set(g.selector_0, {
                yPercent: g.y_0,
                alpha: g.opacity,
                force3D: !0
            }), s.set(g.selector_1, {
                yPercent: g.y_1,
                force3D: !0
            }), s.set(y.selector, {
                yPercent: y.y,
                force3D: !0
            }), s.set(y.selector_0, {
                yPercent: y.y_0,
                force3D: !0
            }), s.set(v.selector, {
                yPercent: v.y,
                force3D: !0
            }), s.set(v.selector_0, {
                yPercent: v.y_0,
                force3D: !0
            }), s.set(w.selector, {
                yPercent: w.y,
                force3D: !0
            }), s.set(w.selector_0, {
                yPercent: w.y_0,
                force3D: !0
            }), s.set(x.selector, {
                yPercent: x.y,
                force3D: !0
            }), s.set(x.selector_0, {
                yPercent: x.y_0,
                force3D: !0
            }), s.set(b.selector, {
                yPercent: b.y,
                force3D: !0
            }), s.set(b.selector_0, {
                yPercent: b.y_0,
                force3D: !0
            }), s.set(T.selector, {
                yPercent: T.y,
                force3D: !0
            }), s.set(T.selector_0, {
                yPercent: T.y_0,
                force3D: !0
            }), s.set(C.selector0, {
                yPercent: C.y0,
                force3D: !0
            }), s.set(S.selector, {
                yPercent: S.y,
                force3D: !0
            }), y.y < -50 ? g.selector_1.hasClass("mini") || g.selector_1.addClass("mini") : g.selector_1.hasClass("mini") && g.selector_1.removeClass("mini"), window.requestAnimFrame(r)
        }
        var s = window.TweenMax;
        window.MelanieStart = new e;
        var a = new t,
            o = new i,
            l = !0,
            u = 0,
            c = 0,
            h = 0,
            d = 0,
            p = $(".scroll");
        window.melanieClient.mobile ? ($(document).on("touchstart", function(e) {
            c = 2.5 * e.originalEvent.changedTouches[0].pageY
        }), $(document).on("touchmove", function(e) {
            e.preventDefault(), d = 2.5 * e.originalEvent.changedTouches[0].pageY, h = c - d, u > 20 ? p.hasClass("hide") || (p.addClass("hide"), s.to(p, .8, {
                alpha: 0,
                ease: "easeIn"
            })) : p.hasClass("hide") && (p.removeClass("hide"), s.to(p, .8, {
                alpha: 1,
                ease: "easeIn"
            })), h > 0 ? u += Math.abs(h) : u -= Math.abs(h), u = window.melanieClient.util.betweenVal(0, m, u), c = d
        })) : $(window).on("scroll", function() {
            l && (l = !1, window.scroll(0, 0)), u = $(this).scrollTop(), u > 200 ? p.hasClass("hide") || (p.addClass("hide"), s.to(p, .4, {
                alpha: 0,
                ease: "easeIn"
            })) : p.hasClass("hide") && (p.removeClass("hide"), s.to(p, .4, {
                alpha: 1,
                ease: "easeIn"
            }))
        }), $(".logo").on(window.melanieClient.click, function() {
            window.melanieClient.mobile ? u = 0 : window.scroll(0, 0)
        }), $(".nav-menu").on(window.melanieClient.click, function(e) {
            e.preventDefault(), a.animFlag || (a.openFlag ? a.close() : a.open())
        }), $(".nav-menu").on("mouseenter", function() {
            a.hover()
        }).on("mouseleave", function() {
            a.leave()
        }), $(".menu").find(".slipper-link").on("mouseenter", function() {
            a.hoverLink($(this).find(".line-link"))
        }).on("mouseleave", function() {
            a.leaveLink($(this).find(".line-link"))
        }), $(".half-screen").find("a").on("mouseenter", function() {
            a.hoverLink($(this).find(".line-link"))
        }).on("mouseleave", function() {
            a.leaveLink($(this).find(".line-link"))
        }), $(".social-menu").find("a").on("mouseenter", function() {
            a.hoverSocial($(this), $(this).index())
        }).on("mouseleave", function() {
            a.leaveSocial($(this))
        }), $(".menu").find(".slipper-link").on(window.melanieClient.click, function() {
            var e = $(this).index(".slipper-link");
            l = !1, window.melanieClient.mobile ? (p.hasClass("hide") || (p.addClass("hide"), s.to(p, .8, {
                alpha: 0,
                ease: "easeIn"
            })), u = 0 === e ? 1275 : 1275 + 1020 * e) : 0 === e ? window.scroll(0, 2550) : window.scroll(0, 2550 + 2040 * e - 1), a.close()
        }), $(".half-screen").find(".left a").on(window.melanieClient.click, function(e) {
            e.preventDefault(), l = !1, window.melanieClient.mobile ? (p.hasClass("hide") || (p.addClass("hide"), s.to(p, .8, {
                alpha: 0,
                ease: "easeIn"
            })), u = 6375 + $(window).height() / 1.25) : window.scroll(0, 12750 + $(window).height() + $(window).height() / 2)
        }), $(".half-screen").on(window.melanieClient.click, function() {
            a.animFlag || a.close()
        }), $(".sound").on("click", function() {
            $(this).toggleClass("on"), $(".loop-audio").get(0).volume = $(this).hasClass("on") ? 1 : 0
        }), $(".link-shop").on("mouseenter", function() {
            o.hoverShop($(this))
        }).on("mouseleave", function() {
            o.leaveShop($(this), $(this).attr("data-color"))
        }), $(".link-footer").on("mouseenter", function() {
            o.hoverFooter($(this))
        }).on("mouseleave", function() {
            o.leaveFooter($(this), $(this).attr("data-color"))
        });
        var f = $(".usual-nav"),
            m = 0;
        window.melanieClient.mobile ? $(window).on("resize", function() {
            m = 9350
        }) : $(window).on("resize", function() {
            m = 18700 + $(window).height(), f.height(m)
        });
        var _ = {
                shapes_y: 0,
                rotate1: 0,
                rotate2: 0,
                rotate3: 0,
                all: $(".shapes"),
                triangle: $(".triangle.big"),
                triangleSmall: $(".triangle.small"),
                circle: $(".circle"),
                diamond: $(".diamond"),
                waves: $(".waves"),
                hexa: $(".hexa"),
                y_0: 0,
                y_0_bis: 0,
                y_1: 0,
                y_2: 0,
                y_3: 0,
                y_4: 0
            },
            g = {
                selector: $(".splash"),
                selector_0: $(".content-splash"),
                selector_1: $(".logo-wrapper"),
                flag_sprite: !1,
                y: 0,
                y_0: 0,
                y_1: 350,
                start_y_1: 370
            },
            y = {
                selector: $(".slipper.one"),
                selector_0: $(".slipper.one").find(".gradient"),
                selector_1: $(".slipper.one").find(".slipper-object"),
                selector_2: $(".slipper.one").find(".letter"),
                selector_3: $(".slipper.one").find(".sprite-letter"),
                flag_sprite: !1,
                y: 0,
                y_0: 0,
                start_y_0: -34.25,
                y_1: 0,
                start_y_1: -50,
                y_2: 0,
                start_y_2: 102
            },
            v = {
                selector: $(".slipper.two"),
                selector_0: $(".slipper.two").find(".gradient"),
                selector_1: $(".slipper.two").find(".slipper-object"),
                selector_2: $(".slipper.two").find(".letter"),
                selector_3: $(".slipper.two").find(".sprite-letter"),
                flag_sprite: !1,
                y: 0,
                y_0: 0,
                start_y_0: -78.5,
                y_1: 0,
                start_y_1: -65,
                y_2: 0,
                start_y_2: 184
            },
            w = {
                selector: $(".slipper.three"),
                selector_0: $(".slipper.three").find(".gradient"),
                selector_1: $(".slipper.three").find(".slipper-object"),
                selector_2: $(".slipper.three").find(".letter"),
                selector_3: $(".slipper.three").find(".sprite-letter"),
                flag_sprite: !1,
                y: 0,
                y_0: 0,
                start_y_0: -122.75,
                y_1: 0,
                start_y_1: -80,
                y_2: 0,
                start_y_2: 266
            },
            x = {
                selector: $(".slipper.four"),
                selector_0: $(".slipper.four").find(".gradient"),
                selector_1: $(".slipper.four").find(".slipper-object"),
                selector_2: $(".slipper.four").find(".letter"),
                selector_3: $(".slipper.four").find(".sprite-letter"),
                flag_sprite: !1,
                y: 0,
                y_0: 0,
                start_y_0: -167,
                y_1: 0,
                start_y_1: -95,
                y_2: 0,
                start_y_2: 348
            },
            b = {
                selector: $(".slipper.five"),
                selector_0: $(".slipper.five").find(".gradient"),
                selector_1: $(".slipper.five").find(".slipper-object"),
                selector_2: $(".slipper.five").find(".letter"),
                selector_3: $(".slipper.five").find(".sprite-letter"),
                flag_sprite: !1,
                y: 0,
                y_0: 0,
                start_y_0: -211.25,
                y_1: 0,
                start_y_1: -110,
                y_2: 0,
                start_y_2: 430
            },
            T = {
                selector: $(".slipper.six"),
                selector_0: $(".slipper.six").find(".gradient"),
                selector_1: $(".slipper.six").find(".slipper-object"),
                selector_2: $(".slipper.six").find(".letter"),
                selector_3: $(".slipper.six").find(".sprite-letter"),
                flag_sprite: !1,
                y: 0,
                y_0: 0,
                start_y_0: -245.5,
                y_1: 0,
                start_y_1: -125,
                y_2: 0,
                start_y_2: 512
            },
            C = {
                selector0: $(".design"),
                selector1: $(".design-1"),
                selector2: $(".design-2"),
                selector3: $(".design-3"),
                selector4: $(".design-4"),
                y0: 0,
                y1: 0,
                start_y_1: 350,
                y2: 0,
                start_y_2: 320,
                y3: 0,
                start_y_3: 350,
                y4: 0,
                start_y_4: 350,
                flag_font1: !1,
                flag_font2: !1,
                flag_font3: !1,
                flag_font4: !1,
                flag_font5: !1,
                flag_font6: !1
            },
            S = {
                selector: $(".gradient-footer"),
                y: 0,
                start_y: 375
            },
            P = 0,
            k = {
                val: !1,
                state: 0
            },
            L = {
                val: !1,
                state: 0
            },
            E = {
                val: !1,
                state: 0
            },
            A = {
                val: !1,
                state: 0
            },
            D = {
                val: !1,
                state: 0
            },
            O = {
                val: !1,
                state: 0
            },
            j = {
                val: !1,
                state: 0
            };
        window.melanieClient.mobile ? r() : n(), $(".logo").addClass("show"), window.MelanieStart.intro()
    }();
