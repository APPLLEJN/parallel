!
function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    }: e(t)
} ("undefined" != typeof window ? window: this,
function(t, e) {
    function i(t) {
        var e = "length" in t && t.length,
        i = st.type(t);
        return "function" !== i && !st.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }
    function n(t, e, i) {
        if (st.isFunction(e)) return st.grep(t,
        function(t, n) {
            return !! e.call(t, n, t) !== i
        });
        if (e.nodeType) return st.grep(t,
        function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (dt.test(e)) return st.filter(e, t, i);
            e = st.filter(e, t)
        }
        return st.grep(t,
        function(t) {
            return st.inArray(t, e) >= 0 !== i
        })
    }
    function s(t, e) {
        do {
            t = t[e]
        } while ( t && 1 !== t . nodeType );
        return t
    }
    function r(t) {
        var e = yt[t] = {};
        return st.each(t.match(vt) || [],
        function(t, i) {
            e[i] = !0
        }),
        e
    }
    function o() {
        ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (ft.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }
    function a() { (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (o(), st.ready())
    }
    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(St, "-$1").toLowerCase();
            if ("string" == typeof(i = t.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null: +i + "" === i ? +i: wt.test(i) ? st.parseJSON(i) : i)
                } catch(t) {}
                st.data(t, e, i)
            } else i = void 0
        }
        return i
    }
    function h(t) {
        var e;
        for (e in t) if (("data" !== e || !st.isEmptyObject(t[e])) && "toJSON" !== e) return ! 1;
        return ! 0
    }
    function c(t, e, i, n) {
        if (st.acceptData(t)) {
            var s, r, o = st.expando,
            a = t.nodeType,
            l = a ? st.cache: t,
            h = a ? t[o] : t[o] && o;
            if (h && l[h] && (n || l[h].data) || void 0 !== i || "string" != typeof e) return h || (h = a ? t[o] = $.pop() || st.guid++:o),
            l[h] || (l[h] = a ? {}: {
                toJSON: st.noop
            }),
            ("object" == typeof e || "function" == typeof e) && (n ? l[h] = st.extend(l[h], e) : l[h].data = st.extend(l[h].data, e)),
            r = l[h],
            n || (r.data || (r.data = {}), r = r.data),
            void 0 !== i && (r[st.camelCase(e)] = i),
            "string" == typeof e ? null == (s = r[e]) && (s = r[st.camelCase(e)]) : s = r,
            s
        }
    }
    function u(t, e, i) {
        if (st.acceptData(t)) {
            var n, s, r = t.nodeType,
            o = r ? st.cache: t,
            a = r ? t[st.expando] : st.expando;
            if (o[a]) {
                if (e && (n = i ? o[a] : o[a].data)) {
                    st.isArray(e) ? e = e.concat(st.map(e, st.camelCase)) : e in n ? e = [e] : (e = st.camelCase(e), e = e in n ? [e] : e.split(" ")),
                    s = e.length;
                    for (; s--;) delete n[e[s]];
                    if (i ? !h(n) : !st.isEmptyObject(n)) return
                } (i || (delete o[a].data, h(o[a]))) && (r ? st.cleanData([t], !0) : it.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
            }
        }
    }
    function d() {
        return ! 0
    }
    function p() {
        return ! 1
    }
    function f() {
        try {
            return ft.activeElement
        } catch(t) {}
    }
    function m(t) {
        var e = It.split("|"),
        i = t.createDocumentFragment();
        if (i.createElement) for (; e.length;) i.createElement(e.pop());
        return i
    }
    function g(t, e) {
        var i, n, s = 0,
        r = typeof t.getElementsByTagName !== Tt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Tt ? t.querySelectorAll(e || "*") : void 0;
        if (!r) for (r = [], i = t.childNodes || t; null != (n = i[s]); s++) ! e || st.nodeName(n, e) ? r.push(n) : st.merge(r, g(n, e));
        return void 0 === e || e && st.nodeName(t, e) ? st.merge([t], r) : r
    }
    function _(t) {
        At.test(t.type) && (t.defaultChecked = t.checked)
    }
    function v(t, e) {
        return st.nodeName(t, "table") && st.nodeName(11 !== e.nodeType ? e: e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function y(t) {
        return t.type = (null !== st.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function b(t) {
        var e = Wt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function x(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) st._data(i, "globalEval", !e || st._data(e[n], "globalEval"))
    }
    function T(t, e) {
        if (1 === e.nodeType && st.hasData(t)) {
            var i, n, s, r = st._data(t),
            o = st._data(e, r),
            a = r.events;
            if (a) {
                delete o.handle,
                o.events = {};
                for (i in a) for (n = 0, s = a[i].length; s > n; n++) st.event.add(e, i, a[i][n])
            }
            o.data && (o.data = st.extend({},
            o.data))
        }
    }
    function w(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !it.noCloneEvent && e[st.expando]) {
                s = st._data(e);
                for (n in s.events) st.removeEvent(e, n, s.handle);
                e.removeAttribute(st.expando)
            }
            "script" === i && e.text !== t.text ? (y(e).text = t.text, b(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), it.html5Clone && t.innerHTML && !st.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && At.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected: ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }
    function S(e, i) {
        var n, s = st(i.createElement(e)).appendTo(i.body),
        r = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display: st.css(s[0], "display");
        return s.detach(),
        r
    }
    function P(t) {
        var e = ft,
        i = Zt[t];
        return i || (i = S(t, e), "none" !== i && i || (Qt = (Qt || st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Qt[0].contentWindow || Qt[0].contentDocument).document, e.write(), e.close(), i = S(t, e), Qt.detach()), Zt[t] = i),
        i
    }
    function C(t, e) {
        return {
            get: function() {
                var i = t();
                if (null != i) return i ? void delete this.get: (this.get = e).apply(this, arguments)
            }
        }
    }
    function E(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = ue.length; s--;) if ((e = ue[s] + i) in t) return e;
        return n
    }
    function k(t, e) {
        for (var i, n, s, r = [], o = 0, a = t.length; a > o; o++) n = t[o],
        n.style && (r[o] = st._data(n, "olddisplay"), i = n.style.display, e ? (r[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Et(n) && (r[o] = st._data(n, "olddisplay", P(n.nodeName)))) : (s = Et(n), (i && "none" !== i || !s) && st._data(n, "olddisplay", s ? i: st.css(n, "display"))));
        for (o = 0; a > o; o++) n = t[o],
        n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[o] || "": "none"));
        return t
    }
    function A(t, e, i) {
        var n = ae.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }
    function R(t, e, i, n, s) {
        for (var r = i === (n ? "border": "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > r; r += 2)"margin" === i && (o += st.css(t, i + Ct[r], !0, s)),
        n ? ("content" === i && (o -= st.css(t, "padding" + Ct[r], !0, s)), "margin" !== i && (o -= st.css(t, "border" + Ct[r] + "Width", !0, s))) : (o += st.css(t, "padding" + Ct[r], !0, s), "padding" !== i && (o += st.css(t, "border" + Ct[r] + "Width", !0, s)));
        return o
    }
    function D(t, e, i) {
        var n = !0,
        s = "width" === e ? t.offsetWidth: t.offsetHeight,
        r = Kt(t),
        o = it.boxSizing && "border-box" === st.css(t, "boxSizing", !1, r);
        if (0 >= s || null == s) {
            if (s = te(t, e, r), (0 > s || null == s) && (s = t.style[e]), ie.test(s)) return s;
            n = o && (it.boxSizingReliable() || s === t.style[e]),
            s = parseFloat(s) || 0
        }
        return s + R(t, e, i || (o ? "border": "content"), n, r) + "px"
    }
    function M(t, e, i, n, s) {
        return new M.prototype.init(t, e, i, n, s)
    }
    function O() {
        return setTimeout(function() {
            de = void 0
        }),
        de = st.now()
    }
    function N(t, e) {
        var i, n = {
            height: t
        },
        s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = Ct[s],
        n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t),
        n
    }
    function I(t, e, i) {
        for (var n, s = (ve[e] || []).concat(ve["*"]), r = 0, o = s.length; o > r; r++) if (n = s[r].call(i, e, t)) return n
    }
    function F(t, e, i) {
        var n, s, r, o, a, l, h, c = this,
        u = {},
        d = t.style,
        p = t.nodeType && Et(t),
        f = st._data(t, "fxshow");
        i.queue || (a = st._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, c.always(function() {
            c.always(function() {
                a.unqueued--,
                st.queue(t, "fx").length || a.empty.fire()
            })
        })),
        1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], h = st.css(t, "display"), "inline" === ("none" === h ? st._data(t, "olddisplay") || P(t.nodeName) : h) && "none" === st.css(t, "float") && (it.inlineBlockNeedsLayout && "inline" !== P(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        i.overflow && (d.overflow = "hidden", it.shrinkWrapBlocks() || c.always(function() {
            d.overflow = i.overflow[0],
            d.overflowX = i.overflow[1],
            d.overflowY = i.overflow[2]
        }));
        for (n in e) if (s = e[n], fe.exec(s)) {
            if (delete e[n], r = r || "toggle" === s, s === (p ? "hide": "show")) {
                if ("show" !== s || !f || void 0 === f[n]) continue;
                p = !0
            }
            u[n] = f && f[n] || st.style(t, n)
        } else h = void 0;
        if (st.isEmptyObject(u))"inline" === ("none" === h ? P(t.nodeName) : h) && (d.display = h);
        else {
            f ? "hidden" in f && (p = f.hidden) : f = st._data(t, "fxshow", {}),
            r && (f.hidden = !p),
            p ? st(t).show() : c.done(function() {
                st(t).hide()
            }),
            c.done(function() {
                var e;
                st._removeData(t, "fxshow");
                for (e in u) st.style(t, e, u[e])
            });
            for (n in u) o = I(p ? f[n] : 0, n, c),
            n in f || (f[n] = o.start, p && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }
    function L(t, e) {
        var i, n, s, r, o;
        for (i in t) if (n = st.camelCase(i), s = e[n], r = t[i], st.isArray(r) && (s = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), (o = st.cssHooks[n]) && "expand" in o) {
            r = o.expand(r),
            delete t[n];
            for (i in r) i in t || (t[i] = r[i], e[i] = s)
        } else e[n] = s
    }
    function B(t, e, i) {
        var n, s, r = 0,
        o = _e.length,
        a = st.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (s) return ! 1;
            for (var e = de || O(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, r = 1 - n, o = 0, l = h.tweens.length; l > o; o++) h.tweens[o].run(r);
            return a.notifyWith(t, [h, r, i]),
            1 > r && l ? i: (a.resolveWith(t, [h]), !1)
        },
        h = a.promise({
            elem: t,
            props: st.extend({},
            e),
            opts: st.extend(!0, {
                specialEasing: {}
            },
            i),
            originalProperties: e,
            originalOptions: i,
            startTime: de || O(),
            duration: i.duration,
            tweens: [],
            createTween: function(e, i) {
                var n = st.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(n),
                n
            },
            stop: function(e) {
                var i = 0,
                n = e ? h.tweens.length: 0;
                if (s) return this;
                for (s = !0; n > i; i++) h.tweens[i].run(1);
                return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]),
                this
            }
        }),
        c = h.props;
        for (L(c, h.opts.specialEasing); o > r; r++) if (n = _e[r].call(h, t, c, h.opts)) return n;
        return st.map(c, I, h),
        st.isFunction(h.opts.start) && h.opts.start.call(t, h),
        st.fx.timer(st.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })),
        h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }
    function X(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
            r = e.toLowerCase().match(vt) || [];
            if (st.isFunction(i)) for (; n = r[s++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }
    function H(t, e, i, n) {
        function s(a) {
            var l;
            return r[a] = !0,
            st.each(t[a] || [],
            function(t, a) {
                var h = a(e, i, n);
                return "string" != typeof h || o || r[h] ? o ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
            }),
            l
        }
        var r = {},
        o = t === je;
        return s(e.dataTypes[0]) || !r["*"] && s("*")
    }
    function z(t, e) {
        var i, n, s = st.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t: i || (i = {}))[n] = e[n]);
        return i && st.extend(!0, t, i),
        t
    }
    function j(t, e, i) {
        for (var n, s, r, o, a = t.contents,
        l = t.dataTypes;
        "*" === l[0];) l.shift(),
        void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s) for (o in a) if (a[o] && a[o].test(s)) {
            l.unshift(o);
            break
        }
        if (l[0] in i) r = l[0];
        else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                n || (n = o)
            }
            r = r || n
        }
        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
    }
    function Y(t, e, i, n) {
        var s, r, o, a, l, h = {},
        c = t.dataTypes.slice();
        if (c[1]) for (o in t.converters) h[o.toLowerCase()] = t.converters[o];
        for (r = c.shift(); r;) if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift()) if ("*" === r) r = l;
        else if ("*" !== l && l !== r) {
            if (! (o = h[l + " " + r] || h["* " + r])) for (s in h) if (a = s.split(" "), a[1] === r && (o = h[l + " " + a[0]] || h["* " + a[0]])) { ! 0 === o ? o = h[s] : !0 !== h[s] && (r = a[0], c.unshift(a[1]));
                break
            }
            if (!0 !== o) if (o && t.throws) e = o(e);
            else try {
                e = o(e)
            } catch(t) {
                return {
                    state: "parsererror",
                    error: o ? t: "No conversion from " + l + " to " + r
                }
            }
        }
        return {
            state: "success",
            data: e
        }
    }
    function q(t, e, i, n) {
        var s;
        if (st.isArray(e)) st.each(e,
        function(e, s) {
            i || Ue.test(t) ? n(t, s) : q(t + "[" + ("object" == typeof s ? e: "") + "]", s, i, n)
        });
        else if (i || "object" !== st.type(e)) n(t, e);
        else for (s in e) q(t + "[" + s + "]", e[s], i, n)
    }
    function U() {
        try {
            return new t.XMLHttpRequest
        } catch(t) {}
    }
    function W() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function V(t) {
        return st.isWindow(t) ? t: 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var $ = [],
    G = $.slice,
    J = $.concat,
    Q = $.push,
    Z = $.indexOf,
    K = {},
    tt = K.toString,
    et = K.hasOwnProperty,
    it = {},
    nt = "1.11.3",
    st = function(t, e) {
        return new st.fn.init(t, e)
    },
    rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ot = /^-ms-/,
    at = /-([\da-z])/gi,
    lt = function(t, e) {
        return e.toUpperCase()
    };
    st.fn = st.prototype = {
        jquery: nt,
        constructor: st,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
        },
        pushStack: function(t) {
            var e = st.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t, e) {
            return st.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(st.map(this,
            function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(t) {
            var e = this.length,
            i = +t + (0 > t ? e: 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: $.sort,
        splice: $.splice
    },
    st.extend = st.fn.extend = function() {
        var t, e, i, n, s, r, o = arguments[0] || {},
        a = 1,
        l = arguments.length,
        h = !1;
        for ("boolean" == typeof o && (h = o, o = arguments[a] || {},
        a++), "object" == typeof o || st.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++) if (null != (s = arguments[a])) for (n in s) t = o[n],
        i = s[n],
        o !== i && (h && i && (st.isPlainObject(i) || (e = st.isArray(i))) ? (e ? (e = !1, r = t && st.isArray(t) ? t: []) : r = t && st.isPlainObject(t) ? t: {},
        o[n] = st.extend(h, r, i)) : void 0 !== i && (o[n] = i));
        return o
    },
    st.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === st.type(t)
        },
        isArray: Array.isArray ||
        function(t) {
            return "array" === st.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return ! st.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return ! 1;
            return ! 0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== st.type(t) || t.nodeType || st.isWindow(t)) return ! 1;
            try {
                if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(t) {
                return ! 1
            }
            if (it.ownLast) for (e in t) return et.call(t, e);
            for (e in t);
            return void 0 === e || et.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "": "object" == typeof t || "function" == typeof t ? K[tt.call(t)] || "object": typeof t
        },
        globalEval: function(e) {
            e && st.trim(e) && (t.execScript ||
            function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(ot, "ms-").replace(at, lt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var s = 0,
            r = t.length,
            o = i(t);
            if (n) {
                if (o) for (; r > s && !1 !== e.apply(t[s], n); s++);
                else for (s in t) if (!1 === e.apply(t[s], n)) break
            } else if (o) for (; r > s && !1 !== e.call(t[s], s, t[s]); s++);
            else for (s in t) if (!1 === e.call(t[s], s, t[s])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "": (t + "").replace(rt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? st.merge(n, "string" == typeof t ? [t] : t) : Q.call(n, t)),
            n
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (Z) return Z.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i: 0; n > i; i++) if (i in e && e[i] === t) return i
            }
            return - 1
        },
        merge: function(t, e) {
            for (var i = +e.length,
            n = 0,
            s = t.length; i > n;) t[s++] = e[n++];
            if (i !== i) for (; void 0 !== e[n];) t[s++] = e[n++];
            return t.length = s,
            t
        },
        grep: function(t, e, i) {
            for (var n = [], s = 0, r = t.length, o = !i; r > s; s++) ! e(t[s], s) !== o && n.push(t[s]);
            return n
        },
        map: function(t, e, n) {
            var s, r = 0,
            o = t.length,
            a = i(t),
            l = [];
            if (a) for (; o > r; r++) null != (s = e(t[r], r, n)) && l.push(s);
            else for (r in t) null != (s = e(t[r], r, n)) && l.push(s);
            return J.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e], e = t, t = s),
            st.isFunction(t) ? (i = G.call(arguments, 2), n = function() {
                return t.apply(e || this, i.concat(G.call(arguments)))
            },
            n.guid = t.guid = t.guid || st.guid++, n) : void 0
        },
        now: function() {
            return + new Date
        },
        support: it
    }),
    st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(t, e) {
        K["[object " + e + "]"] = e.toLowerCase()
    });
    var ht = function(t) {
        function e(t, e, i, n) {
            var s, r, o, a, h, u, d, p, f, m;
            if ((e ? e.ownerDocument || e: B) !== R && A(e), e = e || R, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!n && M) {
                if (11 !== a && (s = gt.exec(t))) if (o = s[1]) {
                    if (9 === a) {
                        if (! (r = e.getElementById(o)) || !r.parentNode) return i;
                        if (r.id === o) return i.push(r),
                        i
                    } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(o)) && F(e, r) && r.id === o) return i.push(r),
                    i
                } else {
                    if (s[2]) return J.apply(i, e.getElementsByTagName(t)),
                    i;
                    if ((o = s[3]) && y.getElementsByClassName) return J.apply(i, e.getElementsByClassName(o)),
                    i
                }
                if (y.qsa && (!O || !O.test(t))) {
                    if (p = d = L, f = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = w(t), (d = e.getAttribute("id")) ? p = d.replace(vt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", h = u.length; h--;) u[h] = p + c(u[h]);
                        f = _t.test(t) && l(e.parentNode) || e,
                        m = u.join(",")
                    }
                    if (m) try {
                        return J.apply(i, f.querySelectorAll(m)),
                        i
                    } catch(t) {} finally {
                        d || e.removeAttribute("id")
                    }
                }
            }
            return P(t.replace(ot, "$1"), e, i, n)
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > b.cacheLength && delete t[e.shift()],
                t[i + " "] = n
            }
            var e = [];
            return t
        }
        function n(t) {
            return t[L] = !0,
            t
        }
        function s(t) {
            var e = R.createElement("div");
            try {
                return !! t(e)
            } catch(t) {
                return ! 1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function r(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) b.attrHandle[i[n]] = e
        }
        function o(t, e) {
            var i = e && t,
            n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === e) return - 1;
            return t ? 1 : -1
        }
        function a(t) {
            return n(function(e) {
                return e = +e,
                n(function(i, n) {
                    for (var s, r = t([], i.length, e), o = r.length; o--;) i[s = r[o]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }
        function l(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        function h() {}
        function c(t) {
            for (var e = 0,
            i = t.length,
            n = ""; i > e; e++) n += t[e].value;
            return n
        }
        function u(t, e, i) {
            var n = e.dir,
            s = i && "parentNode" === n,
            r = H++;
            return e.first ?
            function(e, i, r) {
                for (; e = e[n];) if (1 === e.nodeType || s) return t(e, i, r)
            }: function(e, i, o) {
                var a, l, h = [X, r];
                if (o) {
                    for (; e = e[n];) if ((1 === e.nodeType || s) && t(e, i, o)) return ! 0
                } else for (; e = e[n];) if (1 === e.nodeType || s) {
                    if (l = e[L] || (e[L] = {}), (a = l[n]) && a[0] === X && a[1] === r) return h[2] = a[2];
                    if (l[n] = h, h[2] = t(e, i, o)) return ! 0
                }
            }
        }
        function d(t) {
            return t.length > 1 ?
            function(e, i, n) {
                for (var s = t.length; s--;) if (!t[s](e, i, n)) return ! 1;
                return ! 0
            }: t[0]
        }
        function p(t, i, n) {
            for (var s = 0,
            r = i.length; r > s; s++) e(t, i[s], n);
            return n
        }
        function f(t, e, i, n, s) {
            for (var r, o = [], a = 0, l = t.length, h = null != e; l > a; a++)(r = t[a]) && (!i || i(r, n, s)) && (o.push(r), h && e.push(a));
            return o
        }
        function m(t, e, i, s, r, o) {
            return s && !s[L] && (s = m(s)),
            r && !r[L] && (r = m(r, o)),
            n(function(n, o, a, l) {
                var h, c, u, d = [],
                m = [],
                g = o.length,
                _ = n || p(e || "*", a.nodeType ? [a] : a, []),
                v = !t || !n && e ? _: f(_, d, t, a, l),
                y = i ? r || (n ? t: g || s) ? [] : o: v;
                if (i && i(v, y, a, l), s) for (h = f(y, m), s(h, [], a, l), c = h.length; c--;)(u = h[c]) && (y[m[c]] = !(v[m[c]] = u));
                if (n) {
                    if (r || t) {
                        if (r) {
                            for (h = [], c = y.length; c--;)(u = y[c]) && h.push(v[c] = u);
                            r(null, y = [], h, l)
                        }
                        for (c = y.length; c--;)(u = y[c]) && (h = r ? Z(n, u) : d[c]) > -1 && (n[h] = !(o[h] = u))
                    }
                } else y = f(y === o ? y.splice(g, y.length) : y),
                r ? r(null, o, y, l) : J.apply(o, y)
            })
        }
        function g(t) {
            for (var e, i, n, s = t.length,
            r = b.relative[t[0].type], o = r || b.relative[" "], a = r ? 1 : 0, l = u(function(t) {
                return t === e
            },
            o, !0), h = u(function(t) {
                return Z(e, t) > -1
            },
            o, !0), p = [function(t, i, n) {
                var s = !r && (n || i !== C) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                return e = null,
                s
            }]; s > a; a++) if (i = b.relative[t[a].type]) p = [u(d(p), i)];
            else {
                if (i = b.filter[t[a].type].apply(null, t[a].matches), i[L]) {
                    for (n = ++a; s > n && !b.relative[t[n].type]; n++);
                    return m(a > 1 && d(p), a > 1 && c(t.slice(0, a - 1).concat({
                        value: " " === t[a - 2].type ? "*": ""
                    })).replace(ot, "$1"), i, n > a && g(t.slice(a, n)), s > n && g(t = t.slice(n)), s > n && c(t))
                }
                p.push(i)
            }
            return d(p)
        }
        function _(t, i) {
            var s = i.length > 0,
            r = t.length > 0,
            o = function(n, o, a, l, h) {
                var c, u, d, p = 0,
                m = "0",
                g = n && [],
                _ = [],
                v = C,
                y = n || r && b.find.TAG("*", h),
                x = X += null == v ? 1 : Math.random() || .1,
                T = y.length;
                for (h && (C = o !== R && o); m !== T && null != (c = y[m]); m++) {
                    if (r && c) {
                        for (u = 0; d = t[u++];) if (d(c, o, a)) {
                            l.push(c);
                            break
                        }
                        h && (X = x)
                    }
                    s && ((c = !d && c) && p--, n && g.push(c))
                }
                if (p += m, s && m !== p) {
                    for (u = 0; d = i[u++];) d(g, _, o, a);
                    if (n) {
                        if (p > 0) for (; m--;) g[m] || _[m] || (_[m] = $.call(l));
                        _ = f(_)
                    }
                    J.apply(l, _),
                    h && !n && _.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                }
                return h && (X = x, C = v),
                g
            };
            return s ? n(o) : o
        }
        var v, y, b, x, T, w, S, P, C, E, k, A, R, D, M, O, N, I, F, L = "sizzle" + 1 * new Date,
        B = t.document,
        X = 0,
        H = 0,
        z = i(),
        j = i(),
        Y = i(),
        q = function(t, e) {
            return t === e && (k = !0),
            0
        },
        U = 1 << 31,
        W = {}.hasOwnProperty,
        V = [],
        $ = V.pop,
        G = V.push,
        J = V.push,
        Q = V.slice,
        Z = function(t, e) {
            for (var i = 0,
            n = t.length; n > i; i++) if (t[i] === e) return i;
            return - 1
        },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        tt = "[\\x20\\t\\r\\n\\f]",
        et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        it = et.replace("w", "w#"),
        nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + tt + "*\\]",
        st = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
        rt = new RegExp(tt + "+", "g"),
        ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
        at = new RegExp("^" + tt + "*," + tt + "*"),
        lt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
        ht = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
        ct = new RegExp(st),
        ut = new RegExp("^" + it + "$"),
        dt = {
            ID: new RegExp("^#(" + et + ")"),
            CLASS: new RegExp("^\\.(" + et + ")"),
            TAG: new RegExp("^(" + et.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + nt),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
        },
        pt = /^(?:input|select|textarea|button)$/i,
        ft = /^h\d$/i,
        mt = /^[^{]+\{\s*\[native \w/,
        gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _t = /[+~]/,
        vt = /'|\\/g,
        yt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
        bt = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n !== n || i ? e: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        },
        xt = function() {
            A()
        };
        try {
            J.apply(V = Q.call(B.childNodes), B.childNodes),
            V[B.childNodes.length].nodeType
        } catch(t) {
            J = {
                apply: V.length ?
                function(t, e) {
                    G.apply(t, Q.call(e))
                }: function(t, e) {
                    for (var i = t.length,
                    n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        y = e.support = {},
        T = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !! e && "HTML" !== e.nodeName
        },
        A = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t: B;
            return n !== R && 9 === n.nodeType && n.documentElement ? (R = n, D = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", xt, !1) : i.attachEvent && i.attachEvent("onunload", xt)), M = !T(n), y.attributes = s(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }), y.getElementsByTagName = s(function(t) {
                return t.appendChild(n.createComment("")),
                !t.getElementsByTagName("*").length
            }), y.getElementsByClassName = mt.test(n.getElementsByClassName), y.getById = s(function(t) {
                return D.appendChild(t).id = L,
                !n.getElementsByName || !n.getElementsByName(L).length
            }), y.getById ? (b.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && M) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            },
            b.filter.ID = function(t) {
                var e = t.replace(yt, bt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete b.find.ID, b.filter.ID = function(t) {
                var e = t.replace(yt, bt);
                return function(t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), b.find.TAG = y.getElementsByTagName ?
            function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : y.qsa ? e.querySelectorAll(t) : void 0
            }: function(t, e) {
                var i, n = [],
                s = 0,
                r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            },
            b.find.CLASS = y.getElementsByClassName &&
            function(t, e) {
                return M ? e.getElementsByClassName(t) : void 0
            },
            N = [], O = [], (y.qsa = mt.test(n.querySelectorAll)) && (s(function(t) {
                D.appendChild(t).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\f]' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + tt + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || O.push("\\[" + tt + "*(?:value|" + K + ")"),
                t.querySelectorAll("[id~=" + L + "-]").length || O.push("~="),
                t.querySelectorAll(":checked").length || O.push(":checked"),
                t.querySelectorAll("a#" + L + "+*").length || O.push(".#.+[+~]")
            }), s(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && O.push("name" + tt + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                O.push(",.*:")
            })), (y.matchesSelector = mt.test(I = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && s(function(t) {
                y.disconnectedMatch = I.call(t, "div"),
                I.call(t, "[s!='']:x"),
                N.push("!=", st)
            }), O = O.length && new RegExp(O.join("|")), N = N.length && new RegExp(N.join("|")), e = mt.test(D.compareDocumentPosition), F = e || mt.test(D.contains) ?
            function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement: t,
                n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            }: function(t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
                return ! 1
            },
            q = e ?
            function(t, e) {
                if (t === e) return k = !0,
                0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !y.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === B && F(B, t) ? -1 : e === n || e.ownerDocument === B && F(B, e) ? 1 : E ? Z(E, t) - Z(E, e) : 0 : 4 & i ? -1 : 1)
            }: function(t, e) {
                if (t === e) return k = !0,
                0;
                var i, s = 0,
                r = t.parentNode,
                a = e.parentNode,
                l = [t],
                h = [e];
                if (!r || !a) return t === n ? -1 : e === n ? 1 : r ? -1 : a ? 1 : E ? Z(E, t) - Z(E, e) : 0;
                if (r === a) return o(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) h.unshift(i);
                for (; l[s] === h[s];) s++;
                return s ? o(l[s], h[s]) : l[s] === B ? -1 : h[s] === B ? 1 : 0
            },
            n) : R
        },
        e.matches = function(t, i) {
            return e(t, null, null, i)
        },
        e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== R && A(t), i = i.replace(ht, "='$1']"), !(!y.matchesSelector || !M || N && N.test(i) || O && O.test(i))) try {
                var n = I.call(t, i);
                if (n || y.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch(t) {}
            return e(i, R, null, [t]).length > 0
        },
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== R && A(t),
            F(t, e)
        },
        e.attr = function(t, e) { (t.ownerDocument || t) !== R && A(t);
            var i = b.attrHandle[e.toLowerCase()],
            n = i && W.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !M) : void 0;
            return void 0 !== n ? n: y.attributes || !M ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value: null
        },
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        },
        e.uniqueSort = function(t) {
            var e, i = [],
            n = 0,
            s = 0;
            if (k = !y.detectDuplicates, E = !y.sortStable && t.slice(0), t.sort(q), k) {
                for (; e = t[s++];) e === t[s] && (n = i.push(s));
                for (; n--;) t.splice(i[n], 1)
            }
            return E = null,
            t
        },
        x = e.getText = function(t) {
            var e, i = "",
            n = 0,
            s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += x(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else for (; e = t[n++];) i += x(e);
            return i
        },
        b = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: dt,
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(yt, bt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(yt, bt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return dt.CHILD.test(t[0]) ? null: (t[3] ? t[2] = t[4] || t[5] || "": i && ct.test(i) && (e = w(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(yt, bt).toLowerCase();
                    return "*" === t ?
                    function() {
                        return ! 0
                    }: function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && z(t,
                    function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var r = e.attr(s, t);
                        return null == r ? "!=" === i: !i || (r += "", "=" === i ? r === n: "!=" === i ? r !== n: "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice( - n.length) === n: "~=" === i ? (" " + r.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, i, n, s) {
                    var r = "nth" !== t.slice(0, 3),
                    o = "last" !== t.slice( - 4),
                    a = "of-type" === e;
                    return 1 === n && 0 === s ?
                    function(t) {
                        return !! t.parentNode
                    }: function(e, i, l) {
                        var h, c, u, d, p, f, m = r !== o ? "nextSibling": "previousSibling",
                        g = e.parentNode,
                        _ = a && e.nodeName.toLowerCase(),
                        v = !l && !a;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (u = e; u = u[m];) if (a ? u.nodeName.toLowerCase() === _: 1 === u.nodeType) return ! 1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return ! 0
                            }
                            if (f = [o ? g.firstChild: g.lastChild], o && v) {
                                for (c = g[L] || (g[L] = {}), h = c[t] || [], p = h[0] === X && h[1], d = h[0] === X && h[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (d = p = 0) || f.pop();) if (1 === u.nodeType && ++d && u === e) {
                                    c[t] = [X, p, d];
                                    break
                                }
                            } else if (v && (h = (e[L] || (e[L] = {}))[t]) && h[0] === X) d = h[1];
                            else for (; (u = ++p && u && u[m] || (d = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== _: 1 !== u.nodeType) || !++d || (v && ((u[L] || (u[L] = {}))[t] = [X, d]), u !== e)););
                            return (d -= s) === n || d % n == 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var s, r = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[L] ? r(i) : r.length > 1 ? (s = [t, t, "", i], b.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = r(t, i), o = s.length; o--;) n = Z(t, s[o]),
                        t[n] = !(e[n] = s[o])
                    }) : function(t) {
                        return r(t, 0, s)
                    }) : r
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                    i = [],
                    s = S(t.replace(ot, "$1"));
                    return s[L] ? n(function(t, e, i, n) {
                        for (var r, o = s(t, null, n, []), a = t.length; a--;)(r = o[a]) && (t[a] = !(e[a] = r))
                    }) : function(t, n, r) {
                        return e[0] = t,
                        s(e, null, r, i),
                        e[0] = null,
                        !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(yt, bt),
                    function(e) {
                        return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
                    }
                }),
                lang: n(function(t) {
                    return ut.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(yt, bt).toLowerCase(),
                    function(e) {
                        var i;
                        do {
                            if (i = M ? e.lang: e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                        } while (( e = e . parentNode ) && 1 === e.nodeType);
                        return ! 1
                    }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === D
                },
                focus: function(t) {
                    return t === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return ! 1 === t.disabled
                },
                disabled: function(t) {
                    return ! 0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(t) {
                    return ! b.pseudos.empty(t)
                },
                header: function(t) {
                    return ft.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(t, e) {
                    return [e - 1]
                }),
                eq: a(function(t, e, i) {
                    return [0 > i ? i + e: i]
                }),
                even: a(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: a(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: a(function(t, e, i) {
                    for (var n = 0 > i ? i + e: i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: a(function(t, e, i) {
                    for (var n = 0 > i ? i + e: i; ++n < e;) t.push(n);
                    return t
                })
            }
        },
        b.pseudos.nth = b.pseudos.eq;
        for (v in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[v] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        } (v);
        for (v in {
            submit: !0,
            reset: !0
        }) b.pseudos[v] = function(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        } (v);
        return h.prototype = b.filters = b.pseudos,
        b.setFilters = new h,
        w = e.tokenize = function(t, i) {
            var n, s, r, o, a, l, h, c = j[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = t, l = [], h = b.preFilter; a;) { (!n || (s = at.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(r = [])),
                n = !1,
                (s = lt.exec(a)) && (n = s.shift(), r.push({
                    value: n,
                    type: s[0].replace(ot, " ")
                }), a = a.slice(n.length));
                for (o in b.filter) ! (s = dt[o].exec(a)) || h[o] && !(s = h[o](s)) || (n = s.shift(), r.push({
                    value: n,
                    type: o,
                    matches: s
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length: a ? e.error(t) : j(t, l).slice(0)
        },
        S = e.compile = function(t, e) {
            var i, n = [],
            s = [],
            r = Y[t + " "];
            if (!r) {
                for (e || (e = w(t)), i = e.length; i--;) r = g(e[i]),
                r[L] ? n.push(r) : s.push(r);
                r = Y(t, _(s, n)),
                r.selector = t
            }
            return r
        },
        P = e.select = function(t, e, i, n) {
            var s, r, o, a, h, u = "function" == typeof t && t,
            d = !n && w(t = u.selector || t);
            if (i = i || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && y.getById && 9 === e.nodeType && M && b.relative[r[1].type]) {
                    if (! (e = (b.find.ID(o.matches[0].replace(yt, bt), e) || [])[0])) return i;
                    u && (e = e.parentNode),
                    t = t.slice(r.shift().value.length)
                }
                for (s = dt.needsContext.test(t) ? 0 : r.length; s--&&(o = r[s], !b.relative[a = o.type]);) if ((h = b.find[a]) && (n = h(o.matches[0].replace(yt, bt), _t.test(r[0].type) && l(e.parentNode) || e))) {
                    if (r.splice(s, 1), !(t = n.length && c(r))) return J.apply(i, n),
                    i;
                    break
                }
            }
            return (u || S(t, d))(n, e, !M, i, _t.test(t) && l(e.parentNode) || e),
            i
        },
        y.sortStable = L.split("").sort(q).join("") === L,
        y.detectDuplicates = !!k,
        A(),
        y.sortDetached = s(function(t) {
            return 1 & t.compareDocumentPosition(R.createElement("div"))
        }),
        s(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width",
        function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        y.attributes && s(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || r("value",
        function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        s(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(K,
        function(t, e, i) {
            var n;
            return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value: null
        }),
        e
    } (t);
    st.find = ht,
    st.expr = ht.selectors,
    st.expr[":"] = st.expr.pseudos,
    st.unique = ht.uniqueSort,
    st.text = ht.getText,
    st.isXMLDoc = ht.isXML,
    st.contains = ht.contains;
    var ct = st.expr.match.needsContext,
    ut = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    dt = /^.[^:#\[\.,]*$/;
    st.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"),
        1 === e.length && 1 === n.nodeType ? st.find.matchesSelector(n, t) ? [n] : [] : st.find.matches(t, st.grep(e,
        function(t) {
            return 1 === t.nodeType
        }))
    },
    st.fn.extend({
        find: function(t) {
            var e, i = [],
            n = this,
            s = n.length;
            if ("string" != typeof t) return this.pushStack(st(t).filter(function() {
                for (e = 0; s > e; e++) if (st.contains(n[e], this)) return ! 0
            }));
            for (e = 0; s > e; e++) st.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? st.unique(i) : i),
            i.selector = this.selector ? this.selector + " " + t: t,
            i
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !! n(this, "string" == typeof t && ct.test(t) ? st(t) : t || [], !1).length
        }
    });
    var pt, ft = t.document,
    mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; (st.fn.init = function(t, e) {
        var i, n;
        if (!t) return this;
        if ("string" == typeof t) {
            if (! (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t)) || !i[1] && e) return ! e || e.jquery ? (e || pt).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof st ? e[0] : e, st.merge(this, st.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e: ft, !0)), ut.test(i[1]) && st.isPlainObject(e)) for (i in e) st.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if ((n = ft.getElementById(i[2])) && n.parentNode) {
                if (n.id !== i[2]) return pt.find(t);
                this.length = 1,
                this[0] = n
            }
            return this.context = ft,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : st.isFunction(t) ? void 0 !== pt.ready ? pt.ready(t) : t(st) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), st.makeArray(t, this))
    }).prototype = st.fn,
    pt = st(ft);
    var gt = /^(?:parents|prev(?:Until|All))/,
    _t = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    st.extend({
        dir: function(t, e, i) {
            for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !st(s).is(i));) 1 === s.nodeType && n.push(s),
            s = s[e];
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }),
    st.fn.extend({
        has: function(t) {
            var e, i = st(t, this),
            n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++) if (st.contains(this, i[e])) return ! 0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0,
            s = this.length,
            r = [], o = ct.test(t) || "string" != typeof t ? st(t, e || this.context) : 0; s > n; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && st.find.matchesSelector(i, t))) {
                r.push(i);
                break
            }
            return this.pushStack(r.length > 1 ? st.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? st.inArray(this[0], st(t)) : st.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(t, e) {
            return this.pushStack(st.unique(st.merge(this.get(), st(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
        }
    }),
    st.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e: null
        },
        parents: function(t) {
            return st.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return st.dir(t, "parentNode", i)
        },
        next: function(t) {
            return s(t, "nextSibling")
        },
        prev: function(t) {
            return s(t, "previousSibling")
        },
        nextAll: function(t) {
            return st.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return st.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return st.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return st.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return st.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return st.sibling(t.firstChild)
        },
        contents: function(t) {
            return st.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document: st.merge([], t.childNodes)
        }
    },
    function(t, e) {
        st.fn[t] = function(i, n) {
            var s = st.map(this, e, i);
            return "Until" !== t.slice( - 5) && (n = i),
            n && "string" == typeof n && (s = st.filter(n, s)),
            this.length > 1 && (_t[t] || (s = st.unique(s)), gt.test(t) && (s = s.reverse())),
            this.pushStack(s)
        }
    });
    var vt = /\S+/g,
    yt = {};
    st.Callbacks = function(t) {
        t = "string" == typeof t ? yt[t] || r(t) : st.extend({},
        t);
        var e, i, n, s, o, a, l = [],
        h = !t.once && [],
        c = function(r) {
            for (i = t.memory && r, n = !0, o = a || 0, a = 0, s = l.length, e = !0; l && s > o; o++) if (!1 === l[o].apply(r[0], r[1]) && t.stopOnFalse) {
                i = !1;
                break
            }
            e = !1,
            l && (h ? h.length && c(h.shift()) : i ? l = [] : u.disable())
        },
        u = {
            add: function() {
                if (l) {
                    var n = l.length; !
                    function e(i) {
                        st.each(i,
                        function(i, n) {
                            var s = st.type(n);
                            "function" === s ? t.unique && u.has(n) || l.push(n) : n && n.length && "string" !== s && e(n)
                        })
                    } (arguments),
                    e ? s = l.length: i && (a = n, c(i))
                }
                return this
            },
            remove: function() {
                return l && st.each(arguments,
                function(t, i) {
                    for (var n; (n = st.inArray(i, l, n)) > -1;) l.splice(n, 1),
                    e && (s >= n && s--, o >= n && o--)
                }),
                this
            },
            has: function(t) {
                return t ? st.inArray(t, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                s = 0,
                this
            },
            disable: function() {
                return l = h = i = void 0,
                this
            },
            disabled: function() {
                return ! l
            },
            lock: function() {
                return h = void 0,
                i || u.disable(),
                this
            },
            locked: function() {
                return ! h
            },
            fireWith: function(t, i) {
                return ! l || n && !h || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? h.push(i) : c(i)),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! n
            }
        };
        return u
    },
    st.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", st.Callbacks("once memory"), "resolved"], ["reject", "fail", st.Callbacks("once memory"), "rejected"], ["notify", "progress", st.Callbacks("memory")]],
            i = "pending",
            n = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return st.Deferred(function(i) {
                        st.each(e,
                        function(e, r) {
                            var o = st.isFunction(t[e]) && t[e];
                            s[r[1]](function() {
                                var t = o && o.apply(this, arguments);
                                t && st.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? st.extend(t, n) : n
                }
            },
            s = {};
            return n.pipe = n.then,
            st.each(e,
            function(t, r) {
                var o = r[2],
                a = r[3];
                n[r[1]] = o.add,
                a && o.add(function() {
                    i = a
                },
                e[1 ^ t][2].disable, e[2][2].lock),
                s[r[0]] = function() {
                    return s[r[0] + "With"](this === s ? n: this, arguments),
                    this
                },
                s[r[0] + "With"] = o.fireWith
            }),
            n.promise(s),
            t && t.call(s, s),
            s
        },
        when: function(t) {
            var e, i, n, s = 0,
            r = G.call(arguments),
            o = r.length,
            a = 1 !== o || t && st.isFunction(t.promise) ? o: 0,
            l = 1 === a ? t: st.Deferred(),
            h = function(t, i, n) {
                return function(s) {
                    i[t] = this,
                    n[t] = arguments.length > 1 ? G.call(arguments) : s,
                    n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                }
            };
            if (o > 1) for (e = new Array(o), i = new Array(o), n = new Array(o); o > s; s++) r[s] && st.isFunction(r[s].promise) ? r[s].promise().done(h(s, n, r)).fail(l.reject).progress(h(s, i, e)) : --a;
            return a || l.resolveWith(n, r),
            l.promise()
        }
    });
    var bt;
    st.fn.ready = function(t) {
        return st.ready.promise().done(t),
        this
    },
    st.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? st.readyWait++:st.ready(!0)
        },
        ready: function(t) {
            if (!0 === t ? !--st.readyWait: !st.isReady) {
                if (!ft.body) return setTimeout(st.ready);
                st.isReady = !0,
                !0 !== t && --st.readyWait > 0 || (bt.resolveWith(ft, [st]), st.fn.triggerHandler && (st(ft).triggerHandler("ready"), st(ft).off("ready")))
            }
        }
    }),
    st.ready.promise = function(e) {
        if (!bt) if (bt = st.Deferred(), "complete" === ft.readyState) setTimeout(st.ready);
        else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", a, !1),
        t.addEventListener("load", a, !1);
        else {
            ft.attachEvent("onreadystatechange", a),
            t.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == t.frameElement && ft.documentElement
            } catch(t) {}
            i && i.doScroll &&
            function t() {
                if (!st.isReady) {
                    try {
                        i.doScroll("left")
                    } catch(e) {
                        return setTimeout(t, 50)
                    }
                    o(),
                    st.ready()
                }
            } ()
        }
        return bt.promise(e)
    };
    var xt, Tt = "undefined";
    for (xt in st(it)) break;
    it.ownLast = "0" !== xt,
    it.inlineBlockNeedsLayout = !1,
    st(function() {
        var t, e, i, n; (i = ft.getElementsByTagName("body")[0]) && i.style && (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Tt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", it.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
    }),
    function() {
        var t = ft.createElement("div");
        if (null == it.deleteExpando) {
            it.deleteExpando = !0;
            try {
                delete t.test
            } catch(t) {
                it.deleteExpando = !1
            }
        }
        t = null
    } (),
    st.acceptData = function(t) {
        var e = st.noData[(t.nodeName + " ").toLowerCase()],
        i = +t.nodeType || 1;
        return (1 === i || 9 === i) && (!e || !0 !== e && t.getAttribute("classid") === e)
    };
    var wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    St = /([A-Z])/g;
    st.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !! (t = t.nodeType ? st.cache[t[st.expando]] : t[st.expando]) && !h(t)
        },
        data: function(t, e, i) {
            return c(t, e, i)
        },
        removeData: function(t, e) {
            return u(t, e)
        },
        _data: function(t, e, i) {
            return c(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return u(t, e, !0)
        }
    }),
    st.fn.extend({
        data: function(t, e) {
            var i, n, s, r = this[0],
            o = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (s = st.data(r), 1 === r.nodeType && !st._data(r, "parsedAttrs"))) {
                    for (i = o.length; i--;) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = st.camelCase(n.slice(5)), l(r, n, s[n])));
                    st._data(r, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function() {
                st.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                st.data(this, t, e)
            }) : r ? l(r, t, st.data(r, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                st.removeData(this, t)
            })
        }
    }),
    st.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = st._data(t, e), i && (!n || st.isArray(i) ? n = st._data(t, e, st.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = st.queue(t, e),
            n = i.length,
            s = i.shift(),
            r = st._queueHooks(t, e),
            o = function() {
                st.dequeue(t, e)
            };
            "inprogress" === s && (s = i.shift(), n--),
            s && ("fx" === e && i.unshift("inprogress"), delete r.stop, s.call(t, o, r)),
            !n && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return st._data(t, i) || st._data(t, i, {
                empty: st.Callbacks("once memory").add(function() {
                    st._removeData(t, e + "queue"),
                    st._removeData(t, i)
                })
            })
        }
    }),
    st.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--),
            arguments.length < i ? st.queue(this[0], t) : void 0 === e ? this: this.each(function() {
                var i = st.queue(this, t, e);
                st._queueHooks(this, t),
                "fx" === t && "inprogress" !== i[0] && st.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                st.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
            s = st.Deferred(),
            r = this,
            o = this.length,
            a = function() {--n || s.resolveWith(r, [r])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(i = st._data(r[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(),
            s.promise(e)
        }
    });
    var Pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ct = ["Top", "Right", "Bottom", "Left"],
    Et = function(t, e) {
        return t = e || t,
        "none" === st.css(t, "display") || !st.contains(t.ownerDocument, t)
    },
    kt = st.access = function(t, e, i, n, s, r, o) {
        var a = 0,
        l = t.length,
        h = null == i;
        if ("object" === st.type(i)) {
            s = !0;
            for (a in i) st.access(t, e, a, i[a], !0, r, o)
        } else if (void 0 !== n && (s = !0, st.isFunction(n) || (o = !0), h && (o ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
            return h.call(st(t), i)
        })), e)) for (; l > a; a++) e(t[a], i, o ? n: n.call(t[a], a, e(t[a], i)));
        return s ? t: h ? e.call(t) : l ? e(t[0], i) : r
    },
    At = /^(?:checkbox|radio)$/i; !
    function() {
        var t = ft.createElement("input"),
        e = ft.createElement("div"),
        i = ft.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", it.leadingWhitespace = 3 === e.firstChild.nodeType, it.tbody = !e.getElementsByTagName("tbody").length, it.htmlSerialize = !!e.getElementsByTagName("link").length, it.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), it.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick",
        function() {
            it.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == it.deleteExpando) {
            it.deleteExpando = !0;
            try {
                delete e.test
            } catch(t) {
                it.deleteExpando = !1
            }
        }
    } (),
    function() {
        var e, i, n = ft.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) i = "on" + e,
        (it[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), it[e + "Bubbles"] = !1 === n.attributes[i].expando);
        n = null
    } ();
    var Rt = /^(?:input|select|textarea)$/i,
    Dt = /^key/,
    Mt = /^(?:mouse|pointer|contextmenu)|click/,
    Ot = /^(?:focusinfocus|focusoutblur)$/,
    Nt = /^([^.]*)(?:\.(.+)|)$/;
    st.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var r, o, a, l, h, c, u, d, p, f, m, g = st._data(t);
            if (g) {
                for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = st.guid++), (o = g.events) || (o = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
                    return typeof st === Tt || t && st.event.triggered === t.type ? void 0 : st.event.dispatch.apply(c.elem, arguments)
                },
                c.elem = t), e = (e || "").match(vt) || [""], a = e.length; a--;) r = Nt.exec(e[a]) || [],
                p = m = r[1],
                f = (r[2] || "").split(".").sort(),
                p && (h = st.event.special[p] || {},
                p = (s ? h.delegateType: h.bindType) || p, h = st.event.special[p] || {},
                u = st.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && st.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                },
                l), (d = o[p]) || (d = o[p] = [], d.delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, f, c) || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), st.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, s) {
            var r, o, a, l, h, c, u, d, p, f, m, g = st.hasData(t) && st._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(vt) || [""], h = e.length; h--;) if (a = Nt.exec(e[h]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (u = st.event.special[p] || {},
                    p = (n ? u.delegateType: u.bindType) || p, d = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--;) o = d[r],
                    !s && m !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (d.splice(r, 1), o.selector && d.delegateCount--, u.remove && u.remove.call(t, o));
                    l && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || st.removeEvent(t, p, g.handle), delete c[p])
                } else for (p in c) st.event.remove(t, p + e[h], i, n, !0);
                st.isEmptyObject(c) && (delete g.handle, st._removeData(t, "events"))
            }
        },
        trigger: function(e, i, n, s) {
            var r, o, a, l, h, c, u, d = [n || ft],
            p = et.call(e, "type") ? e.type: e,
            f = et.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = n = n || ft, 3 !== n.nodeType && 8 !== n.nodeType && !Ot.test(p + st.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[st.expando] ? e: new st.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : st.makeArray(i, [e]), h = st.event.special[p] || {},
            s || !h.trigger || !1 !== h.trigger.apply(n, i))) {
                if (!s && !h.noBubble && !st.isWindow(n)) {
                    for (l = h.delegateType || p, Ot.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a),
                    c = a;
                    c === (n.ownerDocument || ft) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (u = 0; (a = d[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l: h.bindType || p,
                r = (st._data(a, "events") || {})[e.type] && st._data(a, "handle"),
                r && r.apply(a, i),
                (r = o && a[o]) && r.apply && st.acceptData(a) && (e.result = r.apply(a, i), !1 === e.result && e.preventDefault());
                if (e.type = p, !s && !e.isDefaultPrevented() && (!h._default || !1 === h._default.apply(d.pop(), i)) && st.acceptData(n) && o && n[p] && !st.isWindow(n)) {
                    c = n[o],
                    c && (n[o] = null),
                    st.event.triggered = p;
                    try {
                        n[p]()
                    } catch(t) {}
                    st.event.triggered = void 0,
                    c && (n[o] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = st.event.fix(t);
            var e, i, n, s, r, o = [],
            a = G.call(arguments),
            l = (st._data(this, "events") || {})[t.type] || [],
            h = st.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
                for (o = st.event.handlers.call(this, t, l), e = 0; (s = o[e++]) && !t.isPropagationStopped();) for (t.currentTarget = s.elem, r = 0; (n = s.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, void 0 !== (i = ((st.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, a)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, r, o = [],
            a = e.delegateCount,
            l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                for (s = [], r = 0; a > r; r++) n = e[r],
                i = n.selector + " ",
                void 0 === s[i] && (s[i] = n.needsContext ? st(i, this).index(l) >= 0 : st.find(i, this, null, [l]).length),
                s[i] && s.push(n);
                s.length && o.push({
                    elem: l,
                    handlers: s
                })
            }
            return a < e.length && o.push({
                elem: this,
                handlers: e.slice(a)
            }),
            o
        },
        fix: function(t) {
            if (t[st.expando]) return t;
            var e, i, n, s = t.type,
            r = t,
            o = this.fixHooks[s];
            for (o || (this.fixHooks[s] = o = Mt.test(s) ? this.mouseHooks: Dt.test(s) ? this.keyHooks: {}), n = o.props ? this.props.concat(o.props) : this.props, t = new st.Event(r), e = n.length; e--;) i = n[e],
            t[i] = r[i];
            return t.target || (t.target = r.srcElement || ft),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            o.filter ? o.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode: e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, r = e.button,
                o = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || ft, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)),
                !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement: o),
                t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(t) {}
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
                    return st.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return st.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var s = st.extend(new st.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? st.event.trigger(s, null, e) : st.event.dispatch.call(e, s),
            s.isDefaultPrevented() && i.preventDefault()
        }
    },
    st.removeEvent = ft.removeEventListener ?
    function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }: function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === Tt && (t[n] = null), t.detachEvent(n, i))
    },
    st.Event = function(t, e) {
        return this instanceof st.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? d: p) : this.type = t, e && st.extend(this, e), this.timeStamp = t && t.timeStamp || st.now(), void(this[st.expando] = !0)) : new st.Event(t, e)
    },
    st.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = d,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = d,
            t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    st.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(t, e) {
        st.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                s = t.relatedTarget,
                r = t.handleObj;
                return (!s || s !== n && !st.contains(n, s)) && (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e),
                i
            }
        }
    }),
    it.submitBubbles || (st.event.special.submit = {
        setup: function() {
            return ! st.nodeName(this, "form") && void st.event.add(this, "click._submit keypress._submit",
            function(t) {
                var e = t.target,
                i = st.nodeName(e, "input") || st.nodeName(e, "button") ? e.form: void 0;
                i && !st._data(i, "submitBubbles") && (st.event.add(i, "submit._submit",
                function(t) {
                    t._submit_bubble = !0
                }), st._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && st.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return ! st.nodeName(this, "form") && void st.event.remove(this, "._submit")
        }
    }),
    it.changeBubbles || (st.event.special.change = {
        setup: function() {
            return Rt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (st.event.add(this, "propertychange._change",
            function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), st.event.add(this, "click._change",
            function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1),
                st.event.simulate("change", this, t, !0)
            })), !1) : void st.event.add(this, "beforeactivate._change",
            function(t) {
                var e = t.target;
                Rt.test(e.nodeName) && !st._data(e, "changeBubbles") && (st.event.add(e, "change._change",
                function(t) { ! this.parentNode || t.isSimulated || t.isTrigger || st.event.simulate("change", this.parentNode, t, !0)
                }), st._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return st.event.remove(this, "._change"),
            !Rt.test(this.nodeName)
        }
    }),
    it.focusinBubbles || st.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(t, e) {
        var i = function(t) {
            st.event.simulate(e, t.target, st.event.fix(t), !0)
        };
        st.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                s = st._data(n, e);
                s || n.addEventListener(t, i, !0),
                st._data(n, e, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                s = st._data(n, e) - 1;
                s ? st._data(n, e, s) : (n.removeEventListener(t, i, !0), st._removeData(n, e))
            }
        }
    }),
    st.fn.extend({
        on: function(t, e, i, n, s) {
            var r, o;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (r in t) this.on(r, e, i, t[r], s);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), !1 === n) n = p;
            else if (!n) return this;
            return 1 === s && (o = n, n = function(t) {
                return st().off(t),
                o.apply(this, arguments)
            },
            n.guid = o.guid || (o.guid = st.guid++)),
            this.each(function() {
                st.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj,
            st(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace: n.origType, n.selector, n.handler),
            this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return (!1 === e || "function" == typeof e) && (i = e, e = void 0),
            !1 === i && (i = p),
            this.each(function() {
                st.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                st.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? st.event.trigger(t, e, i, !0) : void 0
        }
    });
    var It = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Ft = / jQuery\d+="(?:null|\d+)"/g,
    Lt = new RegExp("<(?:" + It + ")[\\s/>]", "i"),
    Bt = /^\s+/,
    Xt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ht = /<([\w:]+)/,
    zt = /<tbody/i,
    jt = /<|&#?\w+;/,
    Yt = /<(?:script|style|link)/i,
    qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ut = /^$|\/(?:java|ecma)script/i,
    Wt = /^true\/(.*)/,
    Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    $t = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Gt = m(ft),
    Jt = Gt.appendChild(ft.createElement("div"));
    $t.optgroup = $t.option,
    $t.tbody = $t.tfoot = $t.colgroup = $t.caption = $t.thead,
    $t.th = $t.td,
    st.extend({
        clone: function(t, e, i) {
            var n, s, r, o, a, l = st.contains(t.ownerDocument, t);
            if (it.html5Clone || st.isXMLDoc(t) || !Lt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Jt.innerHTML = t.outerHTML, Jt.removeChild(r = Jt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || st.isXMLDoc(t))) for (n = g(r), a = g(t), o = 0; null != (s = a[o]); ++o) n[o] && w(s, n[o]);
            if (e) if (i) for (a = a || g(t), n = n || g(r), o = 0; null != (s = a[o]); o++) T(s, n[o]);
            else T(t, r);
            return n = g(r, "script"),
            n.length > 0 && x(n, !l && g(t, "script")),
            n = a = s = null,
            r
        },
        buildFragment: function(t, e, i, n) {
            for (var s, r, o, a, l, h, c, u = t.length,
            d = m(e), p = [], f = 0; u > f; f++) if ((r = t[f]) || 0 === r) if ("object" === st.type(r)) st.merge(p, r.nodeType ? [r] : r);
            else if (jt.test(r)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (Ht.exec(r) || ["", ""])[1].toLowerCase(), c = $t[l] || $t._default, a.innerHTML = c[1] + r.replace(Xt, "<$1></$2>") + c[2], s = c[0]; s--;) a = a.lastChild;
                if (!it.leadingWhitespace && Bt.test(r) && p.push(e.createTextNode(Bt.exec(r)[0])), !it.tbody) for (r = "table" !== l || zt.test(r) ? "<table>" !== c[1] || zt.test(r) ? 0 : a: a.firstChild, s = r && r.childNodes.length; s--;) st.nodeName(h = r.childNodes[s], "tbody") && !h.childNodes.length && r.removeChild(h);
                for (st.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else p.push(e.createTextNode(r));
            for (a && d.removeChild(a), it.appendChecked || st.grep(g(p, "input"), _), f = 0; r = p[f++];) if ((!n || -1 === st.inArray(r, n)) && (o = st.contains(r.ownerDocument, r), a = g(d.appendChild(r), "script"), o && x(a), i)) for (s = 0; r = a[s++];) Ut.test(r.type || "") && i.push(r);
            return a = null,
            d
        },
        cleanData: function(t, e) {
            for (var i, n, s, r, o = 0,
            a = st.expando,
            l = st.cache,
            h = it.deleteExpando,
            c = st.event.special; null != (i = t[o]); o++) if ((e || st.acceptData(i)) && (s = i[a], r = s && l[s])) {
                if (r.events) for (n in r.events) c[n] ? st.event.remove(i, n) : st.removeEvent(i, n, r.handle);
                l[s] && (delete l[s], h ? delete i[a] : typeof i.removeAttribute !== Tt ? i.removeAttribute(a) : i[a] = null, $.push(s))
            }
        }
    }),
    st.fn.extend({
        text: function(t) {
            return kt(this,
            function(t) {
                return void 0 === t ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(t))
            },
            null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    v(this, t).appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? st.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || st.cleanData(g(i)),
            i.parentNode && (e && st.contains(i.ownerDocument, i) && x(g(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && st.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && st.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t: e,
            this.map(function() {
                return st.clone(this, t, e)
            })
        },
        html: function(t) {
            return kt(this,
            function(t) {
                var e = this[0] || {},
                i = 0,
                n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Ft, "") : void 0;
                if (! ("string" != typeof t || Yt.test(t) || !it.htmlSerialize && Lt.test(t) || !it.leadingWhitespace && Bt.test(t) || $t[(Ht.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Xt, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {},
                        1 === e.nodeType && (st.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch(t) {}
                }
                e && this.empty().append(t)
            },
            null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments,
            function(e) {
                t = this.parentNode,
                st.cleanData(g(this)),
                t && t.replaceChild(e, this)
            }),
            t && (t.length || t.nodeType) ? this: this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = J.apply([], t);
            var i, n, s, r, o, a, l = 0,
            h = this.length,
            c = this,
            u = h - 1,
            d = t[0],
            p = st.isFunction(d);
            if (p || h > 1 && "string" == typeof d && !it.checkClone && qt.test(d)) return this.each(function(i) {
                var n = c.eq(i);
                p && (t[0] = d.call(this, i, n.html())),
                n.domManip(t, e)
            });
            if (h && (a = st.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                for (r = st.map(g(a, "script"), y), s = r.length; h > l; l++) n = a,
                l !== u && (n = st.clone(n, !0, !0), s && st.merge(r, g(n, "script"))),
                e.call(this[l], n, l);
                if (s) for (o = r[r.length - 1].ownerDocument, st.map(r, b), l = 0; s > l; l++) n = r[l],
                Ut.test(n.type || "") && !st._data(n, "globalEval") && st.contains(o, n) && (n.src ? st._evalUrl && st._evalUrl(n.src) : st.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Vt, "")));
                a = i = null
            }
            return this
        }
    }),
    st.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(t, e) {
        st.fn[t] = function(t) {
            for (var i, n = 0,
            s = [], r = st(t), o = r.length - 1; o >= n; n++) i = n === o ? this: this.clone(!0),
            st(r[n])[e](i),
            Q.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var Qt, Zt = {}; !
    function() {
        var t;
        it.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, i, n;
            return i = ft.getElementsByTagName("body")[0],
            i && i.style ? (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Tt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ft.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
    } ();
    var Kt, te, ee = /^margin/,
    ie = new RegExp("^(" + Pt + ")(?!px)[a-z%]+$", "i"),
    ne = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (Kt = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    },
    te = function(t, e, i) {
        var n, s, r, o, a = t.style;
        return i = i || Kt(t),
        o = i ? i.getPropertyValue(e) || i[e] : void 0,
        i && ("" !== o || st.contains(t.ownerDocument, t) || (o = st.style(t, e)), ie.test(o) && ee.test(e) && (n = a.width, s = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = s, a.maxWidth = r)),
        void 0 === o ? o: o + ""
    }) : ft.documentElement.currentStyle && (Kt = function(t) {
        return t.currentStyle
    },
    te = function(t, e, i) {
        var n, s, r, o, a = t.style;
        return i = i || Kt(t),
        o = i ? i[e] : void 0,
        null == o && a && a[e] && (o = a[e]),
        ie.test(o) && !ne.test(e) && (n = a.left, s = t.runtimeStyle, r = s && s.left, r && (s.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em": o, o = a.pixelLeft + "px", a.left = n, r && (s.left = r)),
        void 0 === o ? o: o + "" || "auto"
    }),
    !
    function() {
        function e() {
            var e, i, n, s; (i = ft.getElementsByTagName("body")[0]) && i.style && (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = o = !1, l = !0, t.getComputedStyle && (r = "1%" !== (t.getComputedStyle(e, null) || {}).top, o = "4px" === (t.getComputedStyle(e, null) || {
                width: "4px"
            }).width, s = e.appendChild(ft.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight), e.removeChild(s)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === s[0].offsetHeight, a && (s[0].style.display = "", s[1].style.display = "none", a = 0 === s[0].offsetHeight), i.removeChild(n))
        }
        var i, n, s, r, o, a, l;
        i = ft.createElement("div"),
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        s = i.getElementsByTagName("a")[0],
        (n = s && s.style) && (n.cssText = "float:left;opacity:.5", it.opacity = "0.5" === n.opacity, it.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === i.style.backgroundClip, it.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, st.extend(it, {
            reliableHiddenOffsets: function() {
                return null == a && e(),
                a
            },
            boxSizingReliable: function() {
                return null == o && e(),
                o
            },
            pixelPosition: function() {
                return null == r && e(),
                r
            },
            reliableMarginRight: function() {
                return null == l && e(),
                l
            }
        }))
    } (),
    st.swap = function(t, e, i, n) {
        var s, r, o = {};
        for (r in e) o[r] = t.style[r],
        t.style[r] = e[r];
        s = i.apply(t, n || []);
        for (r in e) t.style[r] = o[r];
        return s
    };
    var se = /alpha\([^)]*\)/i,
    re = /opacity\s*=\s*([^)]*)/,
    oe = /^(none|table(?!-c[ea]).+)/,
    ae = new RegExp("^(" + Pt + ")(.*)$", "i"),
    le = new RegExp("^([+-])=(" + Pt + ")", "i"),
    he = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    ce = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    ue = ["Webkit", "O", "Moz", "ms"];
    st.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = te(t, "opacity");
                        return "" === i ? "1": i
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
            float: it.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, r, o, a = st.camelCase(e),
                l = t.style;
                if (e = st.cssProps[a] || (st.cssProps[a] = E(l, a)), o = st.cssHooks[e] || st.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (s = o.get(t, !1, n)) ? s: l[e];
                if (r = typeof i, "string" === r && (s = le.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(st.css(t, e)), r = "number"), null != i && i === i && ("number" !== r || st.cssNumber[a] || (i += "px"), it.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && void 0 === (i = o.set(t, i, n))))) try {
                    l[e] = i
                } catch(t) {}
            }
        },
        css: function(t, e, i, n) {
            var s, r, o, a = st.camelCase(e);
            return e = st.cssProps[a] || (st.cssProps[a] = E(t.style, a)),
            o = st.cssHooks[e] || st.cssHooks[a],
            o && "get" in o && (r = o.get(t, !0, i)),
            void 0 === r && (r = te(t, e, n)),
            "normal" === r && e in ce && (r = ce[e]),
            "" === i || i ? (s = parseFloat(r), !0 === i || st.isNumeric(s) ? s || 0 : r) : r
        }
    }),
    st.each(["height", "width"],
    function(t, e) {
        st.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? oe.test(st.css(t, "display")) && 0 === t.offsetWidth ? st.swap(t, he,
                function() {
                    return D(t, e, n)
                }) : D(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var s = n && Kt(t);
                return A(t, i, n ? R(t, e, n, it.boxSizing && "border-box" === st.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }),
    it.opacity || (st.cssHooks.opacity = {
        get: function(t, e) {
            return re.test((e && t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": e ? "1": ""
        },
        set: function(t, e) {
            var i = t.style,
            n = t.currentStyle,
            s = st.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "",
            r = n && n.filter || i.filter || "";
            i.zoom = 1,
            (e >= 1 || "" === e) && "" === st.trim(r.replace(se, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = se.test(r) ? r.replace(se, s) : r + " " + s)
        }
    }),
    st.cssHooks.marginRight = C(it.reliableMarginRight,
    function(t, e) {
        return e ? st.swap(t, {
            display: "inline-block"
        },
        te, [t, "marginRight"]) : void 0
    }),
    st.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(t, e) {
        st.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0,
                s = {},
                r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + Ct[n] + e] = r[n] || r[n - 2] || r[0];
                return s
            }
        },
        ee.test(t) || (st.cssHooks[t + e].set = A)
    }),
    st.fn.extend({
        css: function(t, e) {
            return kt(this,
            function(t, e, i) {
                var n, s, r = {},
                o = 0;
                if (st.isArray(e)) {
                    for (n = Kt(t), s = e.length; s > o; o++) r[e[o]] = st.css(t, e[o], !1, n);
                    return r
                }
                return void 0 !== i ? st.style(t, e, i) : st.css(t, e)
            },
            t, e, arguments.length > 1)
        },
        show: function() {
            return k(this, !0)
        },
        hide: function() {
            return k(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Et(this) ? st(this).show() : st(this).hide()
            })
        }
    }),
    st.Tween = M,
    M.prototype = {
        constructor: M,
        init: function(t, e, i, n, s, r) {
            this.elem = t,
            this.prop = i,
            this.easing = s || "swing",
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = r || (st.cssNumber[i] ? "": "px")
        },
        cur: function() {
            var t = M.propHooks[this.prop];
            return t && t.get ? t.get(this) : M.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = M.propHooks[this.prop];
            return this.options.duration ? this.pos = e = st.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : M.propHooks._default.set(this),
            this
        }
    },
    M.prototype.init.prototype = M.prototype,
    M.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = st.css(t.elem, t.prop, ""), e && "auto" !== e ? e: 0) : t.elem[t.prop]
            },
            set: function(t) {
                st.fx.step[t.prop] ? st.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[st.cssProps[t.prop]] || st.cssHooks[t.prop]) ? st.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    },
    M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    st.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return.5 - Math.cos(t * Math.PI) / 2
        }
    },
    st.fx = M.prototype.init,
    st.fx.step = {};
    var de, pe, fe = /^(?:toggle|show|hide)$/,
    me = new RegExp("^(?:([+-])=|)(" + Pt + ")([a-z%]*)$", "i"),
    ge = /queueHooks$/,
    _e = [F],
    ve = {
        "*": [function(t, e) {
            var i = this.createTween(t, e),
            n = i.cur(),
            s = me.exec(e),
            r = s && s[3] || (st.cssNumber[t] ? "": "px"),
            o = (st.cssNumber[t] || "px" !== r && +n) && me.exec(st.css(i.elem, t)),
            a = 1,
            l = 20;
            if (o && o[3] !== r) {
                r = r || o[3],
                s = s || [],
                o = +n || 1;
                do {
                    a = a || ".5", o /= a, st.style(i.elem, t, o + r)
                } while ( a !== ( a = i . cur () / n) && 1 !== a && --l)
            }
            return s && (o = i.start = +o || +n || 0, i.unit = r, i.end = s[1] ? o + (s[1] + 1) * s[2] : +s[2]),
            i
        }]
    };
    st.Animation = st.extend(B, {
        tweener: function(t, e) {
            st.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0,
            s = t.length; s > n; n++) i = t[n],
            ve[i] = ve[i] || [],
            ve[i].unshift(e)
        },
        prefilter: function(t, e) {
            e ? _e.unshift(t) : _e.push(t)
        }
    }),
    st.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? st.extend({},
        t) : {
            complete: i || !i && e || st.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !st.isFunction(e) && e
        };
        return n.duration = st.fx.off ? 0 : "number" == typeof n.duration ? n.duration: n.duration in st.fx.speeds ? st.fx.speeds[n.duration] : st.fx.speeds._default,
        (null == n.queue || !0 === n.queue) && (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            st.isFunction(n.old) && n.old.call(this),
            n.queue && st.dequeue(this, n.queue)
        },
        n
    },
    st.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Et).css("opacity", 0).show().end().animate({
                opacity: e
            },
            t, i, n)
        },
        animate: function(t, e, i, n) {
            var s = st.isEmptyObject(t),
            r = st.speed(e, i, n),
            o = function() {
                var e = B(this, st.extend({},
                t), r); (s || st._data(this, "finish")) && e.stop(!0)
            };
            return o.finish = o,
            s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop,
                e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0,
                s = null != t && t + "queueHooks",
                r = st.timers,
                o = st._data(this);
                if (s) o[s] && o[s].stop && n(o[s]);
                else for (s in o) o[s] && o[s].stop && ge.test(s) && n(o[s]);
                for (s = r.length; s--;) r[s].elem !== this || null != t && r[s].queue !== t || (r[s].anim.stop(i), e = !1, r.splice(s, 1)); (e || !i) && st.dequeue(this, t)
            })
        },
        finish: function(t) {
            return ! 1 !== t && (t = t || "fx"),
            this.each(function() {
                var e, i = st._data(this),
                n = i[t + "queue"],
                s = i[t + "queueHooks"],
                r = st.timers,
                o = n ? n.length: 0;
                for (i.finish = !0, st.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }),
    st.each(["toggle", "show", "hide"],
    function(t, e) {
        var i = st.fn[e];
        st.fn[e] = function(t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(N(e, !0), t, n, s)
        }
    }),
    st.each({
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
    },
    function(t, e) {
        st.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }),
    st.timers = [],
    st.fx.tick = function() {
        var t, e = st.timers,
        i = 0;
        for (de = st.now(); i < e.length; i++)(t = e[i])() || e[i] !== t || e.splice(i--, 1);
        e.length || st.fx.stop(),
        de = void 0
    },
    st.fx.timer = function(t) {
        st.timers.push(t),
        t() ? st.fx.start() : st.timers.pop()
    },
    st.fx.interval = 13,
    st.fx.start = function() {
        pe || (pe = setInterval(st.fx.tick, st.fx.interval))
    },
    st.fx.stop = function() {
        clearInterval(pe),
        pe = null
    },
    st.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    st.fn.delay = function(t, e) {
        return t = st.fx ? st.fx.speeds[t] || t: t,
        e = e || "fx",
        this.queue(e,
        function(e, i) {
            var n = setTimeout(e, t);
            i.stop = function() {
                clearTimeout(n)
            }
        })
    },
    function() {
        var t, e, i, n, s;
        e = ft.createElement("div"),
        e.setAttribute("className", "t"),
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = e.getElementsByTagName("a")[0],
        i = ft.createElement("select"),
        s = i.appendChild(ft.createElement("option")),
        t = e.getElementsByTagName("input")[0],
        n.style.cssText = "top:1px",
        it.getSetAttribute = "t" !== e.className,
        it.style = /top/.test(n.getAttribute("style")),
        it.hrefNormalized = "/a" === n.getAttribute("href"),
        it.checkOn = !!t.value,
        it.optSelected = s.selected,
        it.enctype = !!ft.createElement("form").enctype,
        i.disabled = !0,
        it.optDisabled = !s.disabled,
        t = ft.createElement("input"),
        t.setAttribute("value", ""),
        it.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        it.radioValue = "t" === t.value
    } ();
    var ye = /\r/g;
    st.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0];
            return arguments.length ? (n = st.isFunction(t), this.each(function(i) {
                var s;
                1 === this.nodeType && (s = n ? t.call(this, i, st(this).val()) : t, null == s ? s = "": "number" == typeof s ? s += "": st.isArray(s) && (s = st.map(s,
                function(t) {
                    return null == t ? "": t + ""
                })), (e = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
            })) : s ? (e = st.valHooks[s.type] || st.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i: (i = s.value, "string" == typeof i ? i.replace(ye, "") : null == i ? "": i)) : void 0
        }
    }),
    st.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = st.find.attr(t, "value");
                    return null != e ? e: st.trim(st.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options,
                    s = t.selectedIndex,
                    r = "select-one" === t.type || 0 > s,
                    o = r ? null: [], a = r ? s + 1 : n.length, l = 0 > s ? a: r ? s: 0; a > l; l++) if (i = n[l], !(!i.selected && l !== s || (it.optDisabled ? i.disabled: null !== i.getAttribute("disabled")) || i.parentNode.disabled && st.nodeName(i.parentNode, "optgroup"))) {
                        if (e = st(i).val(), r) return e;
                        o.push(e)
                    }
                    return o
                },
                set: function(t, e) {
                    for (var i, n, s = t.options,
                    r = st.makeArray(e), o = s.length; o--;) if (n = s[o], st.inArray(st.valHooks.option.get(n), r) >= 0) try {
                        n.selected = i = !0
                    } catch(t) {
                        n.scrollHeight
                    } else n.selected = !1;
                    return i || (t.selectedIndex = -1),
                    s
                }
            }
        }
    }),
    st.each(["radio", "checkbox"],
    function() {
        st.valHooks[this] = {
            set: function(t, e) {
                return st.isArray(e) ? t.checked = st.inArray(st(t).val(), e) >= 0 : void 0
            }
        },
        it.checkOn || (st.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on": t.value
        })
    });
    var be, xe, Te = st.expr.attrHandle,
    we = /^(?:checked|selected)$/i,
    Se = it.getSetAttribute,
    Pe = it.input;
    st.fn.extend({
        attr: function(t, e) {
            return kt(this, st.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                st.removeAttr(this, t)
            })
        }
    }),
    st.extend({
        attr: function(t, e, i) {
            var n, s, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === Tt ? st.prop(t, e, i) : (1 === r && st.isXMLDoc(t) || (e = e.toLowerCase(), n = st.attrHooks[e] || (st.expr.match.bool.test(e) ? xe: be)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s: (s = st.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s: (t.setAttribute(e, i + ""), i) : void st.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, s = 0,
            r = e && e.match(vt);
            if (r && 1 === t.nodeType) for (; i = r[s++];) n = st.propFix[i] || i,
            st.expr.match.bool.test(i) ? Pe && Se || !we.test(i) ? t[n] = !1 : t[st.camelCase("default-" + i)] = t[n] = !1 : st.attr(t, i, ""),
            t.removeAttribute(Se ? i: n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!it.radioValue && "radio" === e && st.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e),
                        i && (t.value = i),
                        e
                    }
                }
            }
        }
    }),
    xe = {
        set: function(t, e, i) {
            return ! 1 === e ? st.removeAttr(t, i) : Pe && Se || !we.test(i) ? t.setAttribute(!Se && st.propFix[i] || i, i) : t[st.camelCase("default-" + i)] = t[i] = !0,
            i
        }
    },
    st.each(st.expr.match.bool.source.match(/\w+/g),
    function(t, e) {
        var i = Te[e] || st.find.attr;
        Te[e] = Pe && Se || !we.test(e) ?
        function(t, e, n) {
            var s, r;
            return n || (r = Te[e], Te[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, Te[e] = r),
            s
        }: function(t, e, i) {
            return i ? void 0 : t[st.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    Pe && Se || (st.attrHooks.value = {
        set: function(t, e, i) {
            return st.nodeName(t, "input") ? void(t.defaultValue = e) : be && be.set(t, e, i)
        }
    }),
    Se || (be = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)),
            n.value = e += "",
            "value" === i || e === t.getAttribute(i) ? e: void 0
        }
    },
    Te.id = Te.name = Te.coords = function(t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value: null
    },
    st.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value: void 0
        },
        set: be.set
    },
    st.attrHooks.contenteditable = {
        set: function(t, e, i) {
            be.set(t, "" !== e && e, i)
        }
    },
    st.each(["width", "height"],
    function(t, e) {
        st.attrHooks[e] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })),
    it.style || (st.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Ce = /^(?:input|select|textarea|button|object)$/i,
    Ee = /^(?:a|area)$/i;
    st.fn.extend({
        prop: function(t, e) {
            return kt(this, st.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = st.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch(t) {}
            })
        }
    }),
    st.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(t, e, i) {
            var n, s, r, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return r = 1 !== o || !st.isXMLDoc(t),
            r && (e = st.propFix[e] || e, s = st.propHooks[e]),
            void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n: t[e] = i: s && "get" in s && null !== (n = s.get(t, e)) ? n: t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = st.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Ce.test(t.nodeName) || Ee.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }),
    it.hrefNormalized || st.each(["href", "src"],
    function(t, e) {
        st.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    it.optSelected || (st.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
        }
    }),
    st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        st.propFix[this.toLowerCase()] = this
    }),
    it.enctype || (st.propFix.enctype = "encoding");
    var ke = /[\t\r\n\f]/g;
    st.fn.extend({
        addClass: function(t) {
            var e, i, n, s, r, o, a = 0,
            l = this.length,
            h = "string" == typeof t && t;
            if (st.isFunction(t)) return this.each(function(e) {
                st(this).addClass(t.call(this, e, this.className))
            });
            if (h) for (e = (t || "").match(vt) || []; l > a; a++) if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ke, " ") : " ")) {
                for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                o = st.trim(n),
                i.className !== o && (i.className = o)
            }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, r, o, a = 0,
            l = this.length,
            h = 0 === arguments.length || "string" == typeof t && t;
            if (st.isFunction(t)) return this.each(function(e) {
                st(this).removeClass(t.call(this, e, this.className))
            });
            if (h) for (e = (t || "").match(vt) || []; l > a; a++) if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ke, " ") : "")) {
                for (r = 0; s = e[r++];) for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                o = t ? st.trim(n) : "",
                i.className !== o && (i.className = o)
            }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(st.isFunction(t) ?
            function(i) {
                st(this).toggleClass(t.call(this, i, this.className, e), e)
            }: function() {
                if ("string" === i) for (var e, n = 0,
                s = st(this), r = t.match(vt) || []; e = r[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else(i === Tt || "boolean" === i) && (this.className && st._data(this, "__className__", this.className), this.className = this.className || !1 === t ? "": st._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ",
            i = 0,
            n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(ke, " ").indexOf(e) >= 0) return ! 0;
            return ! 1
        }
    }),
    st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(t, e) {
        st.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }),
    st.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Ae = st.now(),
    Re = /\?/,
    De = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    st.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null,
        s = st.trim(e + "");
        return s && !st.trim(s.replace(De,
        function(t, e, s, r) {
            return i && e && (n = 0),
            0 === n ? t: (i = s || e, n += !r - !s, "")
        })) ? Function("return " + s)() : st.error("Invalid JSON: " + e)
    },
    st.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch(t) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + e),
        i
    };
    var Me, Oe, Ne = /#.*$/,
    Ie = /([?&])_=[^&]*/,
    Fe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Le = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Be = /^(?:GET|HEAD)$/,
    Xe = /^\/\//,
    He = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    ze = {},
    je = {},
    Ye = "*/".concat("*");
    try {
        Oe = location.href
    } catch(t) {
        Oe = ft.createElement("a"),
        Oe.href = "",
        Oe = Oe.href
    }
    Me = He.exec(Oe.toLowerCase()) || [],
    st.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Oe,
            type: "GET",
            isLocal: Le.test(Me[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ye,
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
                "text json": st.parseJSON,
                "text xml": st.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? z(z(t, st.ajaxSettings), e) : z(st.ajaxSettings, t)
        },
        ajaxPrefilter: X(ze),
        ajaxTransport: X(je),
        ajax: function(t, e) {
            function i(t, e, i, n) {
                var s, c, _, v, b, T = e;
                2 !== y && (y = 2, a && clearTimeout(a), h = void 0, o = n || "", x.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (v = j(u, x, i)), v = Y(u, v, x, s), s ? (u.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (st.lastModified[r] = b), (b = x.getResponseHeader("etag")) && (st.etag[r] = b)), 204 === t || "HEAD" === u.type ? T = "nocontent": 304 === t ? T = "notmodified": (T = v.state, c = v.data, _ = v.error, s = !_)) : (_ = T, (t || !T) && (T = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || T) + "", s ? f.resolveWith(d, [c, T, x]) : f.rejectWith(d, [x, T, _]), x.statusCode(g), g = void 0, l && p.trigger(s ? "ajaxSuccess": "ajaxError", [x, u, s ? c: _]), m.fireWith(d, [x, T]), l && (p.trigger("ajaxComplete", [x, u]), --st.active || st.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0),
            e = e || {};
            var n, s, r, o, a, l, h, c, u = st.ajaxSetup({},
            e),
            d = u.context || u,
            p = u.context && (d.nodeType || d.jquery) ? st(d) : st.event,
            f = st.Deferred(),
            m = st.Callbacks("once memory"),
            g = u.statusCode || {},
            _ = {},
            v = {},
            y = 0,
            b = "canceled",
            x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === y) {
                        if (!c) for (c = {}; e = Fe.exec(o);) c[e[1].toLowerCase()] = e[2];
                        e = c[t.toLowerCase()]
                    }
                    return null == e ? null: e
                },
                getAllResponseHeaders: function() {
                    return 2 === y ? o: null
                },
                setRequestHeader: function(t, e) {
                    var i = t.toLowerCase();
                    return y || (t = v[i] = v[i] || t, _[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return y || (u.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (2 > y) for (e in t) g[e] = [g[e], t[e]];
                    else x.always(t[x.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || b;
                    return h && h.abort(e),
                    i(0, e),
                    this
                }
            };
            if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, u.url = ((t || u.url || Oe) + "").replace(Ne, "").replace(Xe, Me[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = st.trim(u.dataType || "*").toLowerCase().match(vt) || [""], null == u.crossDomain && (n = He.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === Me[1] && n[2] === Me[2] && (n[3] || ("http:" === n[1] ? "80": "443")) === (Me[3] || ("http:" === Me[1] ? "80": "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = st.param(u.data, u.traditional)), H(ze, u, e, x), 2 === y) return x;
            l = st.event && u.global,
            l && 0 == st.active++&&st.event.trigger("ajaxStart"),
            u.type = u.type.toUpperCase(),
            u.hasContent = !Be.test(u.type),
            r = u.url,
            u.hasContent || (u.data && (r = u.url += (Re.test(r) ? "&": "?") + u.data, delete u.data), !1 === u.cache && (u.url = Ie.test(r) ? r.replace(Ie, "$1_=" + Ae++) : r + (Re.test(r) ? "&": "?") + "_=" + Ae++)),
            u.ifModified && (st.lastModified[r] && x.setRequestHeader("If-Modified-Since", st.lastModified[r]), st.etag[r] && x.setRequestHeader("If-None-Match", st.etag[r])),
            (u.data && u.hasContent && !1 !== u.contentType || e.contentType) && x.setRequestHeader("Content-Type", u.contentType),
            x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Ye + "; q=0.01": "") : u.accepts["*"]);
            for (s in u.headers) x.setRequestHeader(s, u.headers[s]);
            if (u.beforeSend && (!1 === u.beforeSend.call(d, x, u) || 2 === y)) return x.abort();
            b = "abort";
            for (s in {
                success: 1,
                error: 1,
                complete: 1
            }) x[s](u[s]);
            if (h = H(je, u, e, x)) {
                x.readyState = 1,
                l && p.trigger("ajaxSend", [x, u]),
                u.async && u.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                },
                u.timeout));
                try {
                    y = 1,
                    h.send(_, i)
                } catch(t) {
                    if (! (2 > y)) throw t;
                    i( - 1, t)
                }
            } else i( - 1, "No Transport");
            return x
        },
        getJSON: function(t, e, i) {
            return st.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return st.get(t, void 0, e, "script")
        }
    }),
    st.each(["get", "post"],
    function(t, e) {
        st[e] = function(t, i, n, s) {
            return st.isFunction(i) && (s = s || n, n = i, i = void 0),
            st.ajax({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            })
        }
    }),
    st._evalUrl = function(t) {
        return st.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    },
    st.fn.extend({
        wrapAll: function(t) {
            if (st.isFunction(t)) return this.each(function(e) {
                st(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = st(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(st.isFunction(t) ?
            function(e) {
                st(this).wrapInner(t.call(this, e))
            }: function() {
                var e = st(this),
                i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = st.isFunction(t);
            return this.each(function(i) {
                st(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    st.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !it.reliableHiddenOffsets() && "none" === (t.style && t.style.display || st.css(t, "display"))
    },
    st.expr.filters.visible = function(t) {
        return ! st.expr.filters.hidden(t)
    };
    var qe = /%20/g,
    Ue = /\[\]$/,
    We = /\r?\n/g,
    Ve = /^(?:submit|button|image|reset|file)$/i,
    $e = /^(?:input|select|textarea|keygen)/i;
    st.param = function(t, e) {
        var i, n = [],
        s = function(t, e) {
            e = st.isFunction(e) ? e() : null == e ? "": e,
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(t) || t.jquery && !st.isPlainObject(t)) st.each(t,
        function() {
            s(this.name, this.value)
        });
        else for (i in t) q(i, t[i], e, s);
        return n.join("&").replace(qe, "+")
    },
    st.fn.extend({
        serialize: function() {
            return st.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = st.prop(this, "elements");
                return t ? st.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !st(this).is(":disabled") && $e.test(this.nodeName) && !Ve.test(t) && (this.checked || !At.test(t))
            }).map(function(t, e) {
                var i = st(this).val();
                return null == i ? null: st.isArray(i) ? st.map(i,
                function(t) {
                    return {
                        name: e.name,
                        value: t.replace(We, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(We, "\r\n")
                }
            }).get()
        }
    }),
    st.ajaxSettings.xhr = void 0 !== t.ActiveXObject ?
    function() {
        return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || W()
    }: U;
    var Ge = 0,
    Je = {},
    Qe = st.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload",
    function() {
        for (var t in Je) Je[t](void 0, !0)
    }),
    it.cors = !!Qe && "withCredentials" in Qe,
    (Qe = it.ajax = !!Qe) && st.ajaxTransport(function(t) {
        if (!t.crossDomain || it.cors) {
            var e;
            return {
                send: function(i, n) {
                    var s, r = t.xhr(),
                    o = ++Ge;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) r[s] = t.xhrFields[s];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) void 0 !== i[s] && r.setRequestHeader(s, i[s] + "");
                    r.send(t.hasContent && t.data || null),
                    e = function(i, s) {
                        var a, l, h;
                        if (e && (s || 4 === r.readyState)) if (delete Je[o], e = void 0, r.onreadystatechange = st.noop, s) 4 !== r.readyState && r.abort();
                        else {
                            h = {},
                            a = r.status,
                            "string" == typeof r.responseText && (h.text = r.responseText);
                            try {
                                l = r.statusText
                            } catch(t) {
                                l = ""
                            }
                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                        }
                        h && n(a, l, h, r.getAllResponseHeaders())
                    },
                    t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Je[o] = e: e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }),
    st.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return st.globalEval(t),
                t
            }
        }
    }),
    st.ajaxPrefilter("script",
    function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET", t.global = !1)
    }),
    st.ajaxTransport("script",
    function(t) {
        if (t.crossDomain) {
            var e, i = ft.head || st("head")[0] || ft.documentElement;
            return {
                send: function(n, s) {
                    e = ft.createElement("script"),
                    e.async = !0,
                    t.scriptCharset && (e.charset = t.scriptCharset),
                    e.src = t.url,
                    e.onload = e.onreadystatechange = function(t, i) { (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                    },
                    i.insertBefore(e, i.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var Ze = [],
    Ke = /(=)\?(?=&|$)|\?\?/;
    st.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ze.pop() || st.expando + "_" + Ae++;
            return this[t] = !0,
            t
        }
    }),
    st.ajaxPrefilter("json jsonp",
    function(e, i, n) {
        var s, r, o, a = !1 !== e.jsonp && (Ke.test(e.url) ? "url": "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = st.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ke, "$1" + s) : !1 !== e.jsonp && (e.url += (Re.test(e.url) ? "&": "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
            return o || st.error(s + " was not called"),
            o[0]
        },
        e.dataTypes[0] = "json", r = t[s], t[s] = function() {
            o = arguments
        },
        n.always(function() {
            t[s] = r,
            e[s] && (e.jsonpCallback = i.jsonpCallback, Ze.push(s)),
            o && st.isFunction(r) && r(o[0]),
            o = r = void 0
        }), "script") : void 0
    }),
    st.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1),
        e = e || ft;
        var n = ut.exec(t),
        s = !i && [];
        return n ? [e.createElement(n[1])] : (n = st.buildFragment([t], e, s), s && s.length && st(s).remove(), st.merge([], n.childNodes))
    };
    var ti = st.fn.load;
    st.fn.load = function(t, e, i) {
        if ("string" != typeof t && ti) return ti.apply(this, arguments);
        var n, s, r, o = this,
        a = t.indexOf(" ");
        return a >= 0 && (n = st.trim(t.slice(a, t.length)), t = t.slice(0, a)),
        st.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"),
        o.length > 0 && st.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments,
            o.html(n ? st("<div>").append(st.parseHTML(t)).find(n) : t)
        }).complete(i &&
        function(t, e) {
            o.each(i, s || [t.responseText, e, t])
        }),
        this
    },
    st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(t, e) {
        st.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    st.expr.filters.animated = function(t) {
        return st.grep(st.timers,
        function(e) {
            return t === e.elem
        }).length
    };
    var ei = t.document.documentElement;
    st.offset = {
        setOffset: function(t, e, i) {
            var n, s, r, o, a, l, h, c = st.css(t, "position"),
            u = st(t),
            d = {};
            "static" === c && (t.style.position = "relative"),
            a = u.offset(),
            r = st.css(t, "top"),
            l = st.css(t, "left"),
            h = ("absolute" === c || "fixed" === c) && st.inArray("auto", [r, l]) > -1,
            h ? (n = u.position(), o = n.top, s = n.left) : (o = parseFloat(r) || 0, s = parseFloat(l) || 0),
            st.isFunction(e) && (e = e.call(t, i, a)),
            null != e.top && (d.top = e.top - a.top + o),
            null != e.left && (d.left = e.left - a.left + s),
            "using" in e ? e.using.call(t, d) : u.css(d)
        }
    },
    st.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this: this.each(function(e) {
                st.offset.setOffset(this, t, e)
            });
            var e, i, n = {
                top: 0,
                left: 0
            },
            s = this[0],
            r = s && s.ownerDocument;
            return r ? (e = r.documentElement, st.contains(e, s) ? (typeof s.getBoundingClientRect !== Tt && (n = s.getBoundingClientRect()), i = V(r), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                    top: 0,
                    left: 0
                },
                n = this[0];
                return "fixed" === st.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), st.nodeName(t[0], "html") || (i = t.offset()), i.top += st.css(t[0], "borderTopWidth", !0), i.left += st.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - i.top - st.css(n, "marginTop", !0),
                    left: e.left - i.left - st.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || ei; t && !st.nodeName(t, "html") && "static" === st.css(t, "position");) t = t.offsetParent;
                return t || ei
            })
        }
    }),
    st.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(t, e) {
        var i = /Y/.test(e);
        st.fn[t] = function(n) {
            return kt(this,
            function(t, n, s) {
                var r = V(t);
                return void 0 === s ? r ? e in r ? r[e] : r.document.documentElement[n] : t[n] : void(r ? r.scrollTo(i ? st(r).scrollLeft() : s, i ? s: st(r).scrollTop()) : t[n] = s)
            },
            t, n, arguments.length, null)
        }
    }),
    st.each(["top", "left"],
    function(t, e) {
        st.cssHooks[e] = C(it.pixelPosition,
        function(t, i) {
            return i ? (i = te(t, e), ie.test(i) ? st(t).position()[e] + "px": i) : void 0
        })
    }),
    st.each({
        Height: "height",
        Width: "width"
    },
    function(t, e) {
        st.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        },
        function(i, n) {
            st.fn[n] = function(n, s) {
                var r = arguments.length && (i || "boolean" != typeof n),
                o = i || (!0 === n || !0 === s ? "margin": "border");
                return kt(this,
                function(e, i, n) {
                    var s;
                    return st.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? st.css(e, i, o) : st.style(e, i, n, o)
                },
                e, r ? n: void 0, r, null)
            }
        })
    }),
    st.fn.size = function() {
        return this.length
    },
    st.fn.andSelf = st.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return st
    });
    var ii = t.jQuery,
    ni = t.$;
    return st.noConflict = function(e) {
        return t.$ === st && (t.$ = ni),
        e && t.jQuery === st && (t.jQuery = ii),
        st
    },
    typeof e === Tt && (t.jQuery = t.$ = st),
    st
}),
$.fn.extend({
    animateCss: function(t, e) {
        var i = function(t) {
            var e = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "mozAnimationEnd",
                WebkitAnimation: "webkitAnimationEnd"
            };
            for (var i in e) if (void 0 !== t.style[i]) return e[i]
        } (document.createElement("div"));
        return this.addClass("animated " + t).one(i,
        function() {
            $(this).removeClass("animated " + t),
            "function" == typeof e && e()
        }),
        this
    }
});
var JSMpeg = {
    Player: null,
    VideoElement: null,
    BitBuffer: null,
    Source: {},
    Demuxer: {},
    Decoder: {},
    Renderer: {},
    AudioOutput: {},
    Now: function() {
        return window.performance ? window.performance.now() / 1e3: Date.now() / 1e3
    },
    CreateVideoElements: function() {
        for (var t = document.querySelectorAll(".jsmpeg"), e = 0; e < t.length; e++) new JSMpeg.VideoElement(t[e])
    },
    Fill: function(t, e) {
        if (t.fill) t.fill(e);
        else for (var i = 0; i < t.length; i++) t[i] = e
    }
};
"complete" === document.readyState ? JSMpeg.CreateVideoElements() : document.addEventListener("DOMContentLoaded", JSMpeg.CreateVideoElements),
JSMpeg.VideoElement = function() {
    "use strict";
    var t = function(e) {
        var i = e.dataset.url;
        if (!i) throw "VideoElement has no `data-url` attribute";
        var n = function(t, e) {
            for (var i in e) t.style[i] = e[i]
        };
        this.container = e,
        n(this.container, {
            display: "inline-block",
            position: "relative",
            minWidth: "80px",
            minHeight: "80px"
        }),
        this.canvas = document.createElement("canvas"),
        this.canvas.width = 960,
        this.canvas.height = 540,
        n(this.canvas, {
            display: "block",
            width: "100%"
        }),
        this.container.appendChild(this.canvas),
        this.playButton = document.createElement("div"),
        this.playButton.innerHTML = t.PLAY_BUTTON,
        n(this.playButton, {
            zIndex: 2,
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            maxWidth: "75px",
            maxHeight: "75px",
            margin: "auto",
            opacity: "0.7",
            cursor: "pointer"
        }),
        this.container.appendChild(this.playButton);
        var s = {
            canvas: this.canvas
        };
        for (var r in e.dataset) try {
            s[r] = JSON.parse(e.dataset[r])
        } catch(t) {
            s[r] = e.dataset[r]
        }
        if (this.player = new JSMpeg.Player(i, s), e.playerInstance = this.player, !s.poster || s.autoplay || this.player.options.streaming || (s.decodeFirstFrame = !1, this.poster = new Image, this.poster.src = s.poster, this.poster.addEventListener("load", this.posterLoaded), n(this.poster, {
            display: "block",
            zIndex: 1,
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }), this.container.appendChild(this.poster)), this.player.options.streaming || this.container.addEventListener("click", this.onClick.bind(this)), (s.autoplay || this.player.options.streaming) && (this.playButton.style.display = "none"), this.player.audioOut && !this.player.audioOut.unlocked) {
            var o = this.container; (s.autoplay || this.player.options.streaming) && (this.unmuteButton = document.createElement("div"), this.unmuteButton.innerHTML = t.UNMUTE_BUTTON, n(this.unmuteButton, {
                zIndex: 2,
                position: "absolute",
                bottom: "10px",
                right: "20px",
                width: "75px",
                height: "75px",
                margin: "auto",
                opacity: "0.7",
                cursor: "pointer"
            }), this.container.appendChild(this.unmuteButton), o = this.unmuteButton),
            this.unlockAudioBound = this.onUnlockAudio.bind(this, o),
            o.addEventListener("touchstart", this.unlockAudioBound, !1),
            o.addEventListener("click", this.unlockAudioBound, !0)
        }
    };
    return t.prototype.onUnlockAudio = function(t, e) {
        this.unmuteButton && (e.preventDefault(), e.stopPropagation()),
        this.player.audioOut.unlock(function() {
            this.unmuteButton && (this.unmuteButton.style.display = "none"),
            t.removeEventListener("touchstart", this.unlockAudioBound),
            t.removeEventListener("click", this.unlockAudioBound)
        }.bind(this))
    },
    t.prototype.onClick = function(t) {
        this.player.isPlaying ? (this.player.pause(), this.playButton.style.display = "block") : (this.player.play(), this.playButton.style.display = "none", this.poster && (this.poster.style.display = "none"))
    },
    t.PLAY_BUTTON = '<svg style="max-width: 75px; max-height: 75px;" viewBox="0 0 200 200" alt="Play video"><circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/><polygon points="70, 55 70, 145 145, 100" fill="#fff"/></svg>',
    t.UNMUTE_BUTTON = '<svg style="max-width: 75px; max-height: 75px;" viewBox="0 0 75 75"><polygon class="audio-speaker" stroke="none" fill="#fff" points="39,13 22,28 6,28 6,47 21,47 39,62 39,13"/><g stroke="#fff" stroke-width="5"><path d="M 49,50 69,26"/><path d="M 69,50 49,26"/></g></svg>',
    t
} (),
JSMpeg.Player = function() {
    "use strict";
    var t = function(t, e) {
        this.options = e || {},
        e.source ? (this.source = new e.source(t, e), e.streaming = !!this.source.streaming) : t.match(/^wss?:\/\//) ? (this.source = new JSMpeg.Source.WebSocket(t, e), e.streaming = !0) : !1 !== e.progressive ? (this.source = new JSMpeg.Source.AjaxProgressive(t, e), e.streaming = !1) : (this.source = new JSMpeg.Source.Ajax(t, e), e.streaming = !1),
        this.maxAudioLag = e.maxAudioLag || .25,
        this.loop = !1 !== e.loop,
        this.autoplay = !!e.autoplay || e.streaming,
        this.demuxer = new JSMpeg.Demuxer.TS(e),
        this.source.connect(this.demuxer),
        !1 !== e.video && (this.video = new JSMpeg.Decoder.MPEG1Video(e), this.renderer = !e.disableGl && JSMpeg.Renderer.WebGL.IsSupported() ? new JSMpeg.Renderer.WebGL(e) : new JSMpeg.Renderer.Canvas2D(e), this.demuxer.connect(JSMpeg.Demuxer.TS.STREAM.VIDEO_1, this.video), this.video.connect(this.renderer)),
        !1 !== e.audio && JSMpeg.AudioOutput.WebAudio.IsSupported() && (this.audio = new JSMpeg.Decoder.MP2Audio(e), this.audioOut = new JSMpeg.AudioOutput.WebAudio(e), this.demuxer.connect(JSMpeg.Demuxer.TS.STREAM.AUDIO_1, this.audio), this.audio.connect(this.audioOut)),
        Object.defineProperty(this, "currentTime", {
            get: this.getCurrentTime,
            set: this.setCurrentTime
        }),
        Object.defineProperty(this, "volume", {
            get: this.getVolume,
            set: this.setVolume
        }),
        this.unpauseOnShow = !1,
        !1 !== e.pauseWhenHidden && document.addEventListener("visibilitychange", this.showHide.bind(this)),
        this.source.start(),
        this.autoplay && this.play()
    };
    return t.prototype.showHide = function(t) {
        "hidden" === document.visibilityState ? (this.unpauseOnShow = this.wantsToPlay, this.pause()) : this.unpauseOnShow && this.play()
    },
    t.prototype.play = function(t) {
        this.animationId = requestAnimationFrame(this.update.bind(this)),
        this.wantsToPlay = !0
    },
    t.prototype.pause = function(t) {
        cancelAnimationFrame(this.animationId),
        this.wantsToPlay = !1,
        this.isPlaying = !1,
        this.audio && this.audio.canPlay && (this.audioOut.stop(), this.seek(this.currentTime))
    },
    t.prototype.getVolume = function() {
        return this.audioOut ? this.audioOut.volume: 0
    },
    t.prototype.setVolume = function(t) {
        this.audioOut && (this.audioOut.volume = t)
    },
    t.prototype.stop = function(t) {
        this.pause(),
        this.seek(0),
        this.video && !1 !== this.options.decodeFirstFrame && this.video.decode()
    },
    t.prototype.destroy = function() {
        this.pause(),
        this.source.destroy(),
        this.renderer.destroy(),
        this.audioOut.destroy()
    },
    t.prototype.seek = function(t) {
        var e = this.audio && this.audio.canPlay ? this.audio.startTime: this.video.startTime;
        this.video && this.video.seek(t + e),
        this.audio && this.audio.seek(t + e),
        this.startTime = JSMpeg.Now() - t
    },
    t.prototype.getCurrentTime = function() {
        return this.audio && this.audio.canPlay ? this.audio.currentTime - this.audio.startTime: this.video.currentTime - this.video.startTime
    },
    t.prototype.setCurrentTime = function(t) {
        this.seek(t)
    },
    t.prototype.update = function() {
        if (this.animationId = requestAnimationFrame(this.update.bind(this)), !this.source.established) return void(this.renderer && this.renderer.renderProgress(this.source.progress));
        this.isPlaying || (this.isPlaying = !0, this.startTime = JSMpeg.Now() - this.currentTime),
        this.options.streaming ? this.updateForStreaming() : this.updateForStaticFile()
    },
    t.prototype.updateForStreaming = function() {
        if (this.video && this.video.decode(), this.audio) {
            var t = !1;
            do {
                this.audioOut.enqueuedTime > this.maxAudioLag && (this.audioOut.resetEnqueuedTime(), this.audioOut.enabled = !1), t = this.audio.decode()
            } while ( t );
            this.audioOut.enabled = !0
        }
    },
    t.prototype.updateForStaticFile = function() {
        var t = !1,
        e = 0;
        if (this.audio && this.audio.canPlay) {
            for (; ! t && this.audio.decodedTime - this.audio.currentTime < .25;) t = !this.audio.decode();
            this.video && this.video.currentTime < this.audio.currentTime && (t = !this.video.decode()),
            e = this.demuxer.currentTime - this.audio.currentTime
        } else if (this.video) {
            var i = JSMpeg.Now() - this.startTime + this.video.startTime,
            n = i - this.video.currentTime,
            s = 1 / this.video.frameRate;
            this.video && n > 0 && (n > 2 * s && (this.startTime += n), t = !this.video.decode()),
            e = this.demuxer.currentTime - i
        }
        this.source.resume(e),
        t && this.source.completed && (this.loop ? this.seek(0) : this.pause())
    },
    t
} (),
JSMpeg.BitBuffer = function() {
    "use strict";
    var t = function(e, i) {
        "object" == typeof e ? (this.bytes = e instanceof Uint8Array ? e: new Uint8Array(e), this.byteLength = this.bytes.length) : (this.bytes = new Uint8Array(e || 1048576), this.byteLength = 0),
        this.mode = i || t.MODE.EXPAND,
        this.index = 0
    };
    return t.prototype.resize = function(t) {
        var e = new Uint8Array(t);
        0 !== this.byteLength && (this.byteLength = Math.min(this.byteLength, t), e.set(this.bytes, 0, this.byteLength)),
        this.bytes = e,
        this.index = Math.min(this.index, this.byteLength << 3)
    },
    t.prototype.evict = function(t) {
        var e = this.index >> 3,
        i = this.bytes.length - this.byteLength;
        if (this.index === this.byteLength << 3 || t > i + e) return this.byteLength = 0,
        void(this.index = 0);
        0 !== e && (this.bytes.copyWithin ? this.bytes.copyWithin(0, e, this.byteLength) : this.bytes.set(this.bytes.subarray(e, this.byteLength)), this.byteLength = this.byteLength - e, this.index -= e << 3)
    },
    t.prototype.write = function(e) {
        var i = "object" == typeof e[0],
        n = 0,
        s = this.bytes.length - this.byteLength;
        if (i) for (var n = 0,
        r = 0; r < e.length; r++) n += e[r].byteLength;
        else n = e.byteLength;
        if (n > s) if (this.mode === t.MODE.EXPAND) {
            var o = Math.max(2 * this.bytes.length, n - s);
            this.resize(o)
        } else this.evict(n);
        if (i) for (var r = 0; r < e.length; r++) this.appendSingleBuffer(e[r]);
        else this.appendSingleBuffer(e)
    },
    t.prototype.appendSingleBuffer = function(t) {
        t = t instanceof Uint8Array ? t: new Uint8Array(t),
        this.bytes.set(t, this.byteLength),
        this.byteLength += t.length
    },
    t.prototype.findNextStartCode = function() {
        for (var t = this.index + 7 >> 3; t < this.byteLength; t++) if (0 == this.bytes[t] && 0 == this.bytes[t + 1] && 1 == this.bytes[t + 2]) return this.index = t + 4 << 3,
        this.bytes[t + 3];
        return this.index = this.byteLength << 3,
        -1
    },
    t.prototype.findStartCode = function(t) {
        for (var e = 0;;) if ((e = this.findNextStartCode()) === t || -1 === e) return e;
        return - 1
    },
    t.prototype.nextBytesAreStartCode = function() {
        var t = this.index + 7 >> 3;
        return t >= this.byteLength || 0 == this.bytes[t] && 0 == this.bytes[t + 1] && 1 == this.bytes[t + 2]
    },
    t.prototype.peek = function(t) {
        for (var e = this.index,
        i = 0; t;) {
            var n = this.bytes[e >> 3],
            s = 8 - (7 & e),
            r = s < t ? s: t,
            o = s - r;
            i = i << r | (n & 255 >> 8 - r << o) >> o,
            e += r,
            t -= r
        }
        return i
    },
    t.prototype.read = function(t) {
        var e = this.peek(t);
        return this.index += t,
        e
    },
    t.prototype.skip = function(t) {
        return this.index += t
    },
    t.prototype.rewind = function(t) {
        this.index = Math.max(this.index - t, 0)
    },
    t.prototype.has = function(t) {
        return (this.byteLength << 3) - this.index >= t
    },
    t.MODE = {
        EVICT: 1,
        EXPAND: 2
    },
    t
} (),
JSMpeg.Source.Ajax = function() {
    "use strict";
    var t = function(t, e) {
        this.url = t,
        this.destination = null,
        this.request = null,
        this.completed = !1,
        this.established = !1,
        this.progress = 0
    };
    return t.prototype.connect = function(t) {
        this.destination = t
    },
    t.prototype.start = function() {
        this.request = new XMLHttpRequest,
        this.request.onreadystatechange = function() {
            this.request.readyState === this.request.DONE && 200 === this.request.status && this.onLoad(this.request.response)
        }.bind(this),
        this.request.onprogress = this.onProgress.bind(this),
        this.request.open("GET", this.url),
        this.request.responseType = "arraybuffer",
        this.request.send()
    },
    t.prototype.resume = function(t) {},
    t.prototype.destroy = function() {
        this.request.abort()
    },
    t.prototype.onProgress = function(t) {
        this.progress = t.loaded / t.total
    },
    t.prototype.onLoad = function(t) {
        this.established = !0,
        this.completed = !0,
        this.progress = 1,
        this.destination && this.destination.write(t)
    },
    t
} (),
JSMpeg.Source.AjaxProgressive = function() {
    "use strict";
    var t = function(t, e) {
        this.url = t,
        this.destination = null,
        this.request = null,
        this.completed = !1,
        this.established = !1,
        this.progress = 0,
        this.fileSize = 0,
        this.loadedSize = 0,
        this.chunkSize = e.chunkSize || 1048576,
        this.isLoading = !1,
        this.loadStartTime = 0,
        this.throttled = !1 !== e.throttled,
        this.aborted = !1
    };
    return t.prototype.connect = function(t) {
        this.destination = t
    },
    t.prototype.start = function() {
        this.request = new XMLHttpRequest,
        this.request.onreadystatechange = function() {
            this.request.readyState === this.request.DONE && (this.fileSize = parseInt(this.request.getResponseHeader("Content-Length")), this.loadNextChunk())
        }.bind(this),
        this.request.onprogress = this.onProgress.bind(this),
        this.request.open("HEAD", this.url),
        this.request.send()
    },
    t.prototype.resume = function(t) {
        if (!this.isLoading && this.throttled) {
            8 * this.loadTime + 2 > t && this.loadNextChunk()
        }
    },
    t.prototype.destroy = function() {
        this.request.abort(),
        this.aborted = !0
    },
    t.prototype.loadNextChunk = function() {
        var t = this.loadedSize,
        e = Math.min(this.loadedSize + this.chunkSize - 1, this.fileSize - 1);
        if (t >= this.fileSize || this.aborted) return void(this.completed = !0);
        this.isLoading = !0,
        this.loadStartTime = JSMpeg.Now(),
        this.request = new XMLHttpRequest,
        this.request.onreadystatechange = function() {
            this.request.readyState === this.request.DONE && this.request.status >= 200 && this.request.status < 300 ? this.onChunkLoad(this.request.response) : this.request.readyState === this.request.DONE && this.loadFails++<3 && this.loadNextChunk()
        }.bind(this),
        0 === t && (this.request.onprogress = this.onProgress.bind(this)),
        this.request.open("GET", this.url + "?" + t + "-" + e),
        this.request.setRequestHeader("Range", "bytes=" + t + "-" + e),
        this.request.responseType = "arraybuffer",
        this.request.send()
    },
    t.prototype.onProgress = function(t) {
        this.progress = t.loaded / t.total
    },
    t.prototype.onChunkLoad = function(t) {
        this.established = !0,
        this.progress = 1,
        this.loadedSize += t.byteLength,
        this.loadFails = 0,
        this.isLoading = !1,
        this.destination && this.destination.write(t),
        this.loadTime = JSMpeg.Now() - this.loadStartTime,
        this.throttled || this.loadNextChunk()
    },
    t
} (),
JSMpeg.Source.WebSocket = function() {
    "use strict";
    var t = function(t, e) {
        this.url = t,
        this.options = e,
        this.socket = null,
        this.callbacks = {
            connect: [],
            data: []
        },
        this.destination = null,
        this.reconnectInterval = void 0 !== e.reconnectInterval ? e.reconnectInterval: 5,
        this.shouldAttemptReconnect = !!this.reconnectInterval,
        this.completed = !1,
        this.established = !1,
        this.progress = 0,
        this.reconnectTimeoutId = 0
    };
    return t.prototype.connect = function(t) {
        this.destination = t
    },
    t.prototype.destroy = function() {
        clearTimeout(this.reconnectTimeoutId),
        this.shouldAttemptReconnect = !1,
        this.socket.close()
    },
    t.prototype.start = function() {
        this.shouldAttemptReconnect = !!this.reconnectInterval,
        this.progress = 0,
        this.established = !1,
        this.socket = new WebSocket(this.url, this.options.protocols || null),
        this.socket.binaryType = "arraybuffer",
        this.socket.onmessage = this.onMessage.bind(this),
        this.socket.onopen = this.onOpen.bind(this),
        this.socket.onerror = this.onClose.bind(this),
        this.socket.onclose = this.onClose.bind(this)
    },
    t.prototype.resume = function(t) {},
    t.prototype.onOpen = function() {
        this.progress = 1,
        this.established = !0
    },
    t.prototype.onClose = function() {
        this.shouldAttemptReconnect && (clearTimeout(this.reconnectTimeoutId), this.reconnectTimeoutId = setTimeout(function() {
            this.start()
        }.bind(this), 1e3 * this.reconnectInterval))
    },
    t.prototype.onMessage = function(t) {
        this.destination && this.destination.write(t.data)
    },
    t
} (),
JSMpeg.Demuxer.TS = function() {
    "use strict";
    var t = function(t) {
        this.bits = null,
        this.leftoverBytes = null,
        this.guessVideoFrameEnd = !0,
        this.pidsToStreamIds = {},
        this.pesPacketInfo = {},
        this.startTime = 0,
        this.currentTime = 0
    };
    return t.prototype.connect = function(t, e) {
        this.pesPacketInfo[t] = {
            destination: e,
            currentLength: 0,
            totalLength: 0,
            pts: 0,
            buffers: []
        }
    },
    t.prototype.write = function(t) {
        if (this.leftoverBytes) {
            var e = t.byteLength + this.leftoverBytes.byteLength;
            this.bits = new JSMpeg.BitBuffer(e),
            this.bits.write([this.leftoverBytes, t])
        } else this.bits = new JSMpeg.BitBuffer(t);
        for (; this.bits.has(1504) && this.parsePacket(););
        var i = this.bits.byteLength - (this.bits.index >> 3);
        this.leftoverBytes = i > 0 ? this.bits.bytes.subarray(this.bits.index >> 3) : null
    },
    t.prototype.parsePacket = function() {
        if (71 !== this.bits.read(8) && !this.resync()) return ! 1;
        var t = 187 + (this.bits.index >> 3),
        e = (this.bits.read(1), this.bits.read(1)),
        i = (this.bits.read(1), this.bits.read(13)),
        n = (this.bits.read(2), this.bits.read(2)),
        s = (this.bits.read(4), this.pidsToStreamIds[i]);
        if (e && s) {
            var r = this.pesPacketInfo[s];
            r && r.currentLength && this.packetComplete(r)
        }
        if (1 & n) {
            if (2 & n) {
                var o = this.bits.read(8);
                this.bits.skip(o << 3)
            }
            if (e && this.bits.nextBytesAreStartCode()) {
                this.bits.skip(24),
                s = this.bits.read(8),
                this.pidsToStreamIds[i] = s;
                var a = this.bits.read(16);
                this.bits.skip(8);
                var l = this.bits.read(2);
                this.bits.skip(6);
                var h = this.bits.read(8),
                c = this.bits.index + (h << 3),
                r = this.pesPacketInfo[s];
                if (r) {
                    var u = 0;
                    if (2 & l) {
                        this.bits.skip(4);
                        var d = this.bits.read(3);
                        this.bits.skip(1);
                        var p = this.bits.read(15);
                        this.bits.skip(1);
                        var f = this.bits.read(15);
                        this.bits.skip(1),
                        u = (1073741824 * d + 32768 * p + f) / 9e4,
                        this.currentTime = u,
                        -1 === this.startTime && (this.startTime = u)
                    }
                    var m = a ? a - h - 3 : 0;
                    this.packetStart(r, u, m)
                }
                this.bits.index = c
            }
            if (s) {
                var r = this.pesPacketInfo[s];
                if (r) {
                    var g = this.bits.index >> 3,
                    _ = this.packetAddData(r, g, t),
                    v = !e && 2 & n; (_ || this.guessVideoFrameEnd && v) && this.packetComplete(r)
                }
            }
        }
        return this.bits.index = t << 3,
        !0
    },
    t.prototype.resync = function() {
        if (!this.bits.has(9024)) return ! 1;
        for (var t = this.bits.index >> 3,
        e = 0; e < 187; e++) if (71 === this.bits.bytes[t + e]) {
            for (var i = !0,
            n = 1; n < 5; n++) if (71 !== this.bits.bytes[t + e + 188 * n]) {
                i = !1;
                break
            }
            if (i) return this.bits.index = t + e + 1 << 3,
            !0
        }
        return console.warn("JSMpeg: Possible garbage data. Skipping."),
        this.bits.skip(1496),
        !1
    },
    t.prototype.packetStart = function(t, e, i) {
        t.totalLength = i,
        t.currentLength = 0,
        t.pts = e
    },
    t.prototype.packetAddData = function(t, e, i) {
        return t.buffers.push(this.bits.bytes.subarray(e, i)),
        t.currentLength += i - e,
        0 !== t.totalLength && t.currentLength >= t.totalLength
    },
    t.prototype.packetComplete = function(t) {
        t.destination.write(t.pts, t.buffers),
        t.totalLength = 0,
        t.currentLength = 0,
        t.buffers = []
    },
    t.STREAM = {
        PACK_HEADER: 186,
        SYSTEM_HEADER: 187,
        PROGRAM_MAP: 188,
        PRIVATE_1: 189,
        PADDING: 190,
        PRIVATE_2: 191,
        AUDIO_1: 192,
        VIDEO_1: 224,
        DIRECTORY: 255
    },
    t
} (),
JSMpeg.Decoder.Base = function() {
    "use strict";
    var t = function(t) {
        this.destination = null,
        this.canPlay = !1,
        this.collectTimestamps = !t.streaming,
        this.timestamps = [],
        this.timestampIndex = 0,
        this.startTime = 0,
        this.decodedTime = 0,
        Object.defineProperty(this, "currentTime", {
            get: this.getCurrentTime
        })
    };
    return t.prototype.connect = function(t) {
        this.destination = t
    },
    t.prototype.write = function(t, e) {
        this.collectTimestamps && (0 === this.timestamps.length && (this.startTime = t, this.decodedTime = t), this.timestamps.push({
            index: this.bits.byteLength << 3,
            time: t
        })),
        this.bits.write(e),
        this.canPlay = !0
    },
    t.prototype.seek = function(t) {
        if (this.collectTimestamps) {
            this.timestampIndex = 0;
            for (var e = 0; e < this.timestamps.length && !(this.timestamps[e].time > t); e++) this.timestampIndex = e;
            var i = this.timestamps[this.timestampIndex];
            i ? (this.bits.index = i.index, this.decodedTime = i.time) : (this.bits.index = 0, this.decodedTime = this.startTime)
        }
    },
    t.prototype.decode = function() {
        this.advanceDecodedTime(0)
    },
    t.prototype.advanceDecodedTime = function(t) {
        if (this.collectTimestamps) {
            for (var e = -1,
            i = this.timestampIndex; i < this.timestamps.length && !(this.timestamps[i].index > this.bits.index); i++) e = i;
            if ( - 1 !== e && e !== this.timestampIndex) return this.timestampIndex = e,
            void(this.decodedTime = this.timestamps[this.timestampIndex].time)
        }
        this.decodedTime += t
    },
    t.prototype.getCurrentTime = function() {
        return this.decodedTime
    },
    t
} (),
JSMpeg.Decoder.MPEG1Video = function() {
    "use strict";
    var t = function(t) {
        JSMpeg.Decoder.Base.call(this, t);
        var e = t.videoBufferSize || 524288,
        i = t.streaming ? JSMpeg.BitBuffer.MODE.EVICT: JSMpeg.BitBuffer.MODE.EXPAND;
        this.bits = new JSMpeg.BitBuffer(e, i),
        this.customIntraQuantMatrix = new Uint8Array(64),
        this.customNonIntraQuantMatrix = new Uint8Array(64),
        this.blockData = new Int32Array(64),
        this.currentFrame = 0,
        this.decodeFirstFrame = !1 !== t.decodeFirstFrame
    };
    return t.prototype = Object.create(JSMpeg.Decoder.Base.prototype),
    t.prototype.constructor = t,
    t.prototype.write = function(e, i) {
        if (JSMpeg.Decoder.Base.prototype.write.call(this, e, i), !this.hasSequenceHeader) {
            if ( - 1 === this.bits.findStartCode(t.START.SEQUENCE)) return ! 1;
            this.decodeSequenceHeader(),
            this.decodeFirstFrame && this.decode()
        }
    },
    t.prototype.decode = function() {
        if (!this.hasSequenceHeader) return ! 1;
        if ( - 1 === this.bits.findStartCode(t.START.PICTURE)) {
            this.bits.byteLength,
            this.bits.index;
            return ! 1
        }
        return this.decodePicture(),
        this.advanceDecodedTime(1 / this.frameRate),
        !0
    },
    t.prototype.readHuffman = function(t) {
        var e = 0;
        do {
            e = t[e + this.bits.read(1)]
        } while ( e >= 0 && 0 !== t [ e ]);
        return t[e + 2]
    },
    t.prototype.frameRate = 30,
    t.prototype.decodeSequenceHeader = function() {
        var e = this.bits.read(12),
        i = this.bits.read(12);
        if (this.bits.skip(4), this.frameRate = t.PICTURE_RATE[this.bits.read(4)], this.bits.skip(30), e === this.width && i === this.height || (this.width = e, this.height = i, this.initBuffers(), this.destination && this.destination.resize(e, i)), this.bits.read(1)) {
            for (var n = 0; n < 64; n++) this.customIntraQuantMatrix[t.ZIG_ZAG[n]] = this.bits.read(8);
            this.intraQuantMatrix = this.customIntraQuantMatrix
        }
        if (this.bits.read(1)) {
            for (var n = 0; n < 64; n++) {
                var s = t.ZIG_ZAG[n];
                this.customNonIntraQuantMatrix[s] = this.bits.read(8)
            }
            this.nonIntraQuantMatrix = this.customNonIntraQuantMatrix
        }
        this.hasSequenceHeader = !0
    },
    t.prototype.initBuffers = function() {
        this.intraQuantMatrix = t.DEFAULT_INTRA_QUANT_MATRIX,
        this.nonIntraQuantMatrix = t.DEFAULT_NON_INTRA_QUANT_MATRIX,
        this.mbWidth = this.width + 15 >> 4,
        this.mbHeight = this.height + 15 >> 4,
        this.mbSize = this.mbWidth * this.mbHeight,
        this.codedWidth = this.mbWidth << 4,
        this.codedHeight = this.mbHeight << 4,
        this.codedSize = this.codedWidth * this.codedHeight,
        this.halfWidth = this.mbWidth << 3,
        this.halfHeight = this.mbHeight << 3,
        this.currentY = new Uint8ClampedArray(this.codedSize),
        this.currentY32 = new Uint32Array(this.currentY.buffer),
        this.currentCr = new Uint8ClampedArray(this.codedSize >> 2),
        this.currentCr32 = new Uint32Array(this.currentCr.buffer),
        this.currentCb = new Uint8ClampedArray(this.codedSize >> 2),
        this.currentCb32 = new Uint32Array(this.currentCb.buffer),
        this.forwardY = new Uint8ClampedArray(this.codedSize),
        this.forwardY32 = new Uint32Array(this.forwardY.buffer),
        this.forwardCr = new Uint8ClampedArray(this.codedSize >> 2),
        this.forwardCr32 = new Uint32Array(this.forwardCr.buffer),
        this.forwardCb = new Uint8ClampedArray(this.codedSize >> 2),
        this.forwardCb32 = new Uint32Array(this.forwardCb.buffer)
    },
    t.prototype.currentY = null,
    t.prototype.currentCr = null,
    t.prototype.currentCb = null,
    t.prototype.pictureType = 0,
    t.prototype.forwardY = null,
    t.prototype.forwardCr = null,
    t.prototype.forwardCb = null,
    t.prototype.fullPelForward = !1,
    t.prototype.forwardFCode = 0,
    t.prototype.forwardRSize = 0,
    t.prototype.forwardF = 0,
    t.prototype.decodePicture = function(e) {
        if (this.currentFrame++, this.bits.skip(10), this.pictureType = this.bits.read(3), this.bits.skip(16), !(this.pictureType <= 0 || this.pictureType >= t.PICTURE_TYPE.B)) {
            if (this.pictureType === t.PICTURE_TYPE.PREDICTIVE) {
                if (this.fullPelForward = this.bits.read(1), this.forwardFCode = this.bits.read(3), 0 === this.forwardFCode) return;
                this.forwardRSize = this.forwardFCode - 1,
                this.forwardF = 1 << this.forwardRSize
            }
            var i = 0;
            do {
                i = this.bits.findNextStartCode()
            } while ( i === t . START . EXTENSION || i === t . START . USER_DATA );
            for (; i >= t.START.SLICE_FIRST && i <= t.START.SLICE_LAST;) this.decodeSlice(255 & i),
            i = this.bits.findNextStartCode();
            if ( - 1 !== i && this.bits.rewind(32), this.destination && this.destination.render(this.currentY, this.currentCr, this.currentCb), this.pictureType === t.PICTURE_TYPE.INTRA || this.pictureType === t.PICTURE_TYPE.PREDICTIVE) {
                var n = this.forwardY,
                s = this.forwardY32,
                r = this.forwardCr,
                o = this.forwardCr32,
                a = this.forwardCb,
                l = this.forwardCb32;
                this.forwardY = this.currentY,
                this.forwardY32 = this.currentY32,
                this.forwardCr = this.currentCr,
                this.forwardCr32 = this.currentCr32,
                this.forwardCb = this.currentCb,
                this.forwardCb32 = this.currentCb32,
                this.currentY = n,
                this.currentY32 = s,
                this.currentCr = r,
                this.currentCr32 = o,
                this.currentCb = a,
                this.currentCb32 = l
            }
        }
    },
    t.prototype.quantizerScale = 0,
    t.prototype.sliceBegin = !1,
    t.prototype.decodeSlice = function(t) {
        for (this.sliceBegin = !0, this.macroblockAddress = (t - 1) * this.mbWidth - 1, this.motionFwH = this.motionFwHPrev = 0, this.motionFwV = this.motionFwVPrev = 0, this.dcPredictorY = 128, this.dcPredictorCr = 128, this.dcPredictorCb = 128, this.quantizerScale = this.bits.read(5); this.bits.read(1);) this.bits.skip(8);
        do {
            this.decodeMacroblock()
        } while (! this . bits . nextBytesAreStartCode ())
    },
    t.prototype.macroblockAddress = 0,
    t.prototype.mbRow = 0,
    t.prototype.mbCol = 0,
    t.prototype.macroblockType = 0,
    t.prototype.macroblockIntra = !1,
    t.prototype.macroblockMotFw = !1,
    t.prototype.motionFwH = 0,
    t.prototype.motionFwV = 0,
    t.prototype.motionFwHPrev = 0,
    t.prototype.motionFwVPrev = 0,
    t.prototype.decodeMacroblock = function() {
        for (var e = 0,
        i = this.readHuffman(t.MACROBLOCK_ADDRESS_INCREMENT); 34 === i;) i = this.readHuffman(t.MACROBLOCK_ADDRESS_INCREMENT);
        for (; 35 === i;) e += 33,
        i = this.readHuffman(t.MACROBLOCK_ADDRESS_INCREMENT);
        if (e += i, this.sliceBegin) this.sliceBegin = !1,
        this.macroblockAddress += e;
        else {
            if (this.macroblockAddress + e >= this.mbSize) return;
            for (e > 1 && (this.dcPredictorY = 128, this.dcPredictorCr = 128, this.dcPredictorCb = 128, this.pictureType === t.PICTURE_TYPE.PREDICTIVE && (this.motionFwH = this.motionFwHPrev = 0, this.motionFwV = this.motionFwVPrev = 0)); e > 1;) this.macroblockAddress++,
            this.mbRow = this.macroblockAddress / this.mbWidth | 0,
            this.mbCol = this.macroblockAddress % this.mbWidth,
            this.copyMacroblock(this.motionFwH, this.motionFwV, this.forwardY, this.forwardCr, this.forwardCb),
            e--;
            this.macroblockAddress++
        }
        this.mbRow = this.macroblockAddress / this.mbWidth | 0,
        this.mbCol = this.macroblockAddress % this.mbWidth;
        var n = t.MACROBLOCK_TYPE[this.pictureType];
        this.macroblockType = this.readHuffman(n),
        this.macroblockIntra = 1 & this.macroblockType,
        this.macroblockMotFw = 8 & this.macroblockType,
        0 != (16 & this.macroblockType) && (this.quantizerScale = this.bits.read(5)),
        this.macroblockIntra ? (this.motionFwH = this.motionFwHPrev = 0, this.motionFwV = this.motionFwVPrev = 0) : (this.dcPredictorY = 128, this.dcPredictorCr = 128, this.dcPredictorCb = 128, this.decodeMotionVectors(), this.copyMacroblock(this.motionFwH, this.motionFwV, this.forwardY, this.forwardCr, this.forwardCb));
        for (var s = 0 != (2 & this.macroblockType) ? this.readHuffman(t.CODE_BLOCK_PATTERN) : this.macroblockIntra ? 63 : 0, r = 0, o = 32; r < 6; r++) 0 != (s & o) && this.decodeBlock(r),
        o >>= 1
    },
    t.prototype.decodeMotionVectors = function() {
        var e, i, n = 0;
        this.macroblockMotFw ? (e = this.readHuffman(t.MOTION), 0 !== e && 1 !== this.forwardF ? (n = this.bits.read(this.forwardRSize), i = (Math.abs(e) - 1 << this.forwardRSize) + n + 1, e < 0 && (i = -i)) : i = e, this.motionFwHPrev += i, this.motionFwHPrev > (this.forwardF << 4) - 1 ? this.motionFwHPrev -= this.forwardF << 5 : this.motionFwHPrev < -this.forwardF << 4 && (this.motionFwHPrev += this.forwardF << 5), this.motionFwH = this.motionFwHPrev, this.fullPelForward && (this.motionFwH <<= 1), e = this.readHuffman(t.MOTION), 0 !== e && 1 !== this.forwardF ? (n = this.bits.read(this.forwardRSize), i = (Math.abs(e) - 1 << this.forwardRSize) + n + 1, e < 0 && (i = -i)) : i = e, this.motionFwVPrev += i, this.motionFwVPrev > (this.forwardF << 4) - 1 ? this.motionFwVPrev -= this.forwardF << 5 : this.motionFwVPrev < -this.forwardF << 4 && (this.motionFwVPrev += this.forwardF << 5), this.motionFwV = this.motionFwVPrev, this.fullPelForward && (this.motionFwV <<= 1)) : this.pictureType === t.PICTURE_TYPE.PREDICTIVE && (this.motionFwH = this.motionFwHPrev = 0, this.motionFwV = this.motionFwVPrev = 0)
    },
    t.prototype.copyMacroblock = function(t, e, i, n, s) {
        var r, o, a, l, h, c, u, d, p, f = this.currentY32,
        m = this.currentCb32,
        g = this.currentCr32;
        r = this.codedWidth,
        o = r - 16,
        a = t >> 1,
        l = e >> 1,
        h = 1 == (1 & t),
        c = 1 == (1 & e),
        u = ((this.mbRow << 4) + l) * r + (this.mbCol << 4) + a,
        d = this.mbRow * r + this.mbCol << 2,
        p = d + (r << 2);
        var _, v, y, b;
        if (h) if (c) for (; d < p;) {
            for (v = i[u] + i[u + r], u++, _ = 0; _ < 4; _++) y = i[u] + i[u + r],
            u++,
            b = v + y + 2 >> 2 & 255,
            v = i[u] + i[u + r],
            u++,
            b |= v + y + 2 << 6 & 65280,
            y = i[u] + i[u + r],
            u++,
            b |= v + y + 2 << 14 & 16711680,
            v = i[u] + i[u + r],
            u++,
            b |= v + y + 2 << 22 & 4278190080,
            f[d++] = b;
            d += o >> 2,
            u += o - 1
        } else for (; d < p;) {
            for (v = i[u++], _ = 0; _ < 4; _++) y = i[u++],
            b = v + y + 1 >> 1 & 255,
            v = i[u++],
            b |= v + y + 1 << 7 & 65280,
            y = i[u++],
            b |= v + y + 1 << 15 & 16711680,
            v = i[u++],
            b |= v + y + 1 << 23 & 4278190080,
            f[d++] = b;
            d += o >> 2,
            u += o - 1
        } else if (c) for (; d < p;) {
            for (_ = 0; _ < 4; _++) b = i[u] + i[u + r] + 1 >> 1 & 255,
            u++,
            b |= i[u] + i[u + r] + 1 << 7 & 65280,
            u++,
            b |= i[u] + i[u + r] + 1 << 15 & 16711680,
            u++,
            b |= i[u] + i[u + r] + 1 << 23 & 4278190080,
            u++,
            f[d++] = b;
            d += o >> 2,
            u += o
        } else for (; d < p;) {
            for (_ = 0; _ < 4; _++) b = i[u],
            u++,
            b |= i[u] << 8,
            u++,
            b |= i[u] << 16,
            u++,
            b |= i[u] << 24,
            u++,
            f[d++] = b;
            d += o >> 2,
            u += o
        }
        r = this.halfWidth,
        o = r - 8,
        a = t / 2 >> 1,
        l = e / 2 >> 1,
        h = 1 == (t / 2 & 1),
        c = 1 == (e / 2 & 1),
        u = ((this.mbRow << 3) + l) * r + (this.mbCol << 3) + a,
        d = this.mbRow * r + this.mbCol << 1,
        p = d + (r << 1);
        var x, T, w, S, P, C;
        if (h) if (c) for (; d < p;) {
            for (x = n[u] + n[u + r], S = s[u] + s[u + r], u++, _ = 0; _ < 2; _++) T = n[u] + n[u + r],
            P = s[u] + s[u + r],
            u++,
            w = x + T + 2 >> 2 & 255,
            C = S + P + 2 >> 2 & 255,
            x = n[u] + n[u + r],
            S = s[u] + s[u + r],
            u++,
            w |= x + T + 2 << 6 & 65280,
            C |= S + P + 2 << 6 & 65280,
            T = n[u] + n[u + r],
            P = s[u] + s[u + r],
            u++,
            w |= x + T + 2 << 14 & 16711680,
            C |= S + P + 2 << 14 & 16711680,
            x = n[u] + n[u + r],
            S = s[u] + s[u + r],
            u++,
            w |= x + T + 2 << 22 & 4278190080,
            C |= S + P + 2 << 22 & 4278190080,
            g[d] = w,
            m[d] = C,
            d++;
            d += o >> 2,
            u += o - 1
        } else for (; d < p;) {
            for (x = n[u], S = s[u], u++, _ = 0; _ < 2; _++) T = n[u],
            P = s[u++],
            w = x + T + 1 >> 1 & 255,
            C = S + P + 1 >> 1 & 255,
            x = n[u],
            S = s[u++],
            w |= x + T + 1 << 7 & 65280,
            C |= S + P + 1 << 7 & 65280,
            T = n[u],
            P = s[u++],
            w |= x + T + 1 << 15 & 16711680,
            C |= S + P + 1 << 15 & 16711680,
            x = n[u],
            S = s[u++],
            w |= x + T + 1 << 23 & 4278190080,
            C |= S + P + 1 << 23 & 4278190080,
            g[d] = w,
            m[d] = C,
            d++;
            d += o >> 2,
            u += o - 1
        } else if (c) for (; d < p;) {
            for (_ = 0; _ < 2; _++) w = n[u] + n[u + r] + 1 >> 1 & 255,
            C = s[u] + s[u + r] + 1 >> 1 & 255,
            u++,
            w |= n[u] + n[u + r] + 1 << 7 & 65280,
            C |= s[u] + s[u + r] + 1 << 7 & 65280,
            u++,
            w |= n[u] + n[u + r] + 1 << 15 & 16711680,
            C |= s[u] + s[u + r] + 1 << 15 & 16711680,
            u++,
            w |= n[u] + n[u + r] + 1 << 23 & 4278190080,
            C |= s[u] + s[u + r] + 1 << 23 & 4278190080,
            u++,
            g[d] = w,
            m[d] = C,
            d++;
            d += o >> 2,
            u += o
        } else for (; d < p;) {
            for (_ = 0; _ < 2; _++) w = n[u],
            C = s[u],
            u++,
            w |= n[u] << 8,
            C |= s[u] << 8,
            u++,
            w |= n[u] << 16,
            C |= s[u] << 16,
            u++,
            w |= n[u] << 24,
            C |= s[u] << 24,
            u++,
            g[d] = w,
            m[d] = C,
            d++;
            d += o >> 2,
            u += o
        }
    },
    t.prototype.dcPredictorY = 0,
    t.prototype.dcPredictorCr = 0,
    t.prototype.dcPredictorCb = 0,
    t.prototype.blockData = null,
    t.prototype.decodeBlock = function(e) {
        var i, n = 0;
        if (this.macroblockIntra) {
            var s, r;
            if (e < 4 ? (s = this.dcPredictorY, r = this.readHuffman(t.DCT_DC_SIZE_LUMINANCE)) : (s = 4 === e ? this.dcPredictorCr: this.dcPredictorCb, r = this.readHuffman(t.DCT_DC_SIZE_CHROMINANCE)), r > 0) {
                var o = this.bits.read(r);
                this.blockData[0] = 0 != (o & 1 << r - 1) ? s + o: s + ( - 1 << r | o + 1)
            } else this.blockData[0] = s;
            e < 4 ? this.dcPredictorY = this.blockData[0] : 4 === e ? this.dcPredictorCr = this.blockData[0] : this.dcPredictorCb = this.blockData[0],
            this.blockData[0] <<= 8,
            i = this.intraQuantMatrix,
            n = 1
        } else i = this.nonIntraQuantMatrix;
        for (var a = 0;;) {
            var l = 0,
            h = this.readHuffman(t.DCT_COEFF);
            if (1 === h && n > 0 && 0 === this.bits.read(1)) break;
            65535 === h ? (l = this.bits.read(6), a = this.bits.read(8), 0 === a ? a = this.bits.read(8) : 128 === a ? a = this.bits.read(8) - 256 : a > 128 && (a -= 256)) : (l = h >> 8, a = 255 & h, this.bits.read(1) && (a = -a)),
            n += l;
            var c = t.ZIG_ZAG[n];
            n++,
            a <<= 1,
            this.macroblockIntra || (a += a < 0 ? -1 : 1),
            a = a * this.quantizerScale * i[c] >> 4,
            0 == (1 & a) && (a -= a > 0 ? 1 : -1),
            a > 2047 ? a = 2047 : a < -2048 && (a = -2048),
            this.blockData[c] = a * t.PREMULTIPLIER_MATRIX[c]
        }
        var u, d, p;
        e < 4 ? (u = this.currentY, p = this.codedWidth - 8, d = this.mbRow * this.codedWidth + this.mbCol << 4, 0 != (1 & e) && (d += 8), 0 != (2 & e) && (d += this.codedWidth << 3)) : (u = 4 === e ? this.currentCb: this.currentCr, p = (this.codedWidth >> 1) - 8, d = (this.mbRow * this.codedWidth << 2) + (this.mbCol << 3)),
        this.macroblockIntra ? 1 === n ? (t.CopyValueToDestination(this.blockData[0] + 128 >> 8, u, d, p), this.blockData[0] = 0) : (t.IDCT(this.blockData), t.CopyBlockToDestination(this.blockData, u, d, p), JSMpeg.Fill(this.blockData, 0)) : 1 === n ? (t.AddValueToDestination(this.blockData[0] + 128 >> 8, u, d, p), this.blockData[0] = 0) : (t.IDCT(this.blockData), t.AddBlockToDestination(this.blockData, u, d, p), JSMpeg.Fill(this.blockData, 0)),
        n = 0
    },
    t.CopyBlockToDestination = function(t, e, i, n) {
        for (var s = 0; s < 64; s += 8, i += n + 8) e[i + 0] = t[s + 0],
        e[i + 1] = t[s + 1],
        e[i + 2] = t[s + 2],
        e[i + 3] = t[s + 3],
        e[i + 4] = t[s + 4],
        e[i + 5] = t[s + 5],
        e[i + 6] = t[s + 6],
        e[i + 7] = t[s + 7]
    },
    t.AddBlockToDestination = function(t, e, i, n) {
        for (var s = 0; s < 64; s += 8, i += n + 8) e[i + 0] += t[s + 0],
        e[i + 1] += t[s + 1],
        e[i + 2] += t[s + 2],
        e[i + 3] += t[s + 3],
        e[i + 4] += t[s + 4],
        e[i + 5] += t[s + 5],
        e[i + 6] += t[s + 6],
        e[i + 7] += t[s + 7]
    },
    t.CopyValueToDestination = function(t, e, i, n) {
        for (var s = 0; s < 64; s += 8, i += n + 8) e[i + 0] = t,
        e[i + 1] = t,
        e[i + 2] = t,
        e[i + 3] = t,
        e[i + 4] = t,
        e[i + 5] = t,
        e[i + 6] = t,
        e[i + 7] = t
    },
    t.AddValueToDestination = function(t, e, i, n) {
        for (var s = 0; s < 64; s += 8, i += n + 8) e[i + 0] += t,
        e[i + 1] += t,
        e[i + 2] += t,
        e[i + 3] += t,
        e[i + 4] += t,
        e[i + 5] += t,
        e[i + 6] += t,
        e[i + 7] += t
    },
    t.IDCT = function(t) {
        for (var e, i, n, s, r, o, a, l, h, c, u, d, p, f, m, g, _, v, y = 0; y < 8; ++y) e = t[32 + y],
        i = t[16 + y] + t[48 + y],
        n = t[40 + y] - t[24 + y],
        o = t[8 + y] + t[56 + y],
        a = t[24 + y] + t[40 + y],
        s = t[8 + y] - t[56 + y],
        r = o + a,
        l = t[0 + y],
        p = (473 * s - 196 * n + 128 >> 8) - r,
        h = p - (362 * (o - a) + 128 >> 8),
        c = l - e,
        u = (362 * (t[16 + y] - t[48 + y]) + 128 >> 8) - i,
        d = l + e,
        f = c + u,
        m = d + i,
        g = c - u,
        _ = d - i,
        v = -h - (473 * n + 196 * s + 128 >> 8),
        t[0 + y] = r + m,
        t[8 + y] = p + f,
        t[16 + y] = g - h,
        t[24 + y] = _ - v,
        t[32 + y] = _ + v,
        t[40 + y] = h + g,
        t[48 + y] = f - p,
        t[56 + y] = m - r;
        for (var y = 0; y < 64; y += 8) e = t[4 + y],
        i = t[2 + y] + t[6 + y],
        n = t[5 + y] - t[3 + y],
        o = t[1 + y] + t[7 + y],
        a = t[3 + y] + t[5 + y],
        s = t[1 + y] - t[7 + y],
        r = o + a,
        l = t[0 + y],
        p = (473 * s - 196 * n + 128 >> 8) - r,
        h = p - (362 * (o - a) + 128 >> 8),
        c = l - e,
        u = (362 * (t[2 + y] - t[6 + y]) + 128 >> 8) - i,
        d = l + e,
        f = c + u,
        m = d + i,
        g = c - u,
        _ = d - i,
        v = -h - (473 * n + 196 * s + 128 >> 8),
        t[0 + y] = r + m + 128 >> 8,
        t[1 + y] = p + f + 128 >> 8,
        t[2 + y] = g - h + 128 >> 8,
        t[3 + y] = _ - v + 128 >> 8,
        t[4 + y] = _ + v + 128 >> 8,
        t[5 + y] = h + g + 128 >> 8,
        t[6 + y] = f - p + 128 >> 8,
        t[7 + y] = m - r + 128 >> 8
    },
    t.PICTURE_RATE = [0, 23.976, 24, 25, 29.97, 30, 50, 59.94, 60, 0, 0, 0, 0, 0, 0, 0],
    t.ZIG_ZAG = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]),
    t.DEFAULT_INTRA_QUANT_MATRIX = new Uint8Array([8, 16, 19, 22, 26, 27, 29, 34, 16, 16, 22, 24, 27, 29, 34, 37, 19, 22, 26, 27, 29, 34, 34, 38, 22, 22, 26, 27, 29, 34, 37, 40, 22, 26, 27, 29, 32, 35, 40, 48, 26, 27, 29, 32, 35, 40, 48, 58, 26, 27, 29, 34, 38, 46, 56, 69, 27, 29, 35, 38, 46, 56, 69, 83]),
    t.DEFAULT_NON_INTRA_QUANT_MATRIX = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]),
    t.PREMULTIPLIER_MATRIX = new Uint8Array([32, 44, 42, 38, 32, 25, 17, 9, 44, 62, 58, 52, 44, 35, 24, 12, 42, 58, 55, 49, 42, 33, 23, 12, 38, 52, 49, 44, 38, 30, 20, 10, 32, 44, 42, 38, 32, 25, 17, 9, 25, 35, 33, 30, 25, 20, 14, 7, 17, 24, 23, 20, 17, 14, 9, 5, 9, 12, 12, 10, 9, 7, 5, 2]),
    t.MACROBLOCK_ADDRESS_INCREMENT = new Int16Array([3, 6, 0, 9, 12, 0, 0, 0, 1, 15, 18, 0, 21, 24, 0, 27, 30, 0, 33, 36, 0, 0, 0, 3, 0, 0, 2, 39, 42, 0, 45, 48, 0, 0, 0, 5, 0, 0, 4, 51, 54, 0, 57, 60, 0, 0, 0, 7, 0, 0, 6, 63, 66, 0, 69, 72, 0, 75, 78, 0, 81, 84, 0, -1, 87, 0, -1, 90, 0, 93, 96, 0, 99, 102, 0, 105, 108, 0, 111, 114, 0, 0, 0, 9, 0, 0, 8, 117, 120, 0, 123, 126, 0, 129, 132, 0, 135, 138, 0, 0, 0, 15, 0, 0, 14, 0, 0, 13, 0, 0, 12, 0, 0, 11, 0, 0, 10, 141, -1, 0, -1, 144, 0, 147, 150, 0, 153, 156, 0, 159, 162, 0, 165, 168, 0, 171, 174, 0, 177, 180, 0, 183, -1, 0, -1, 186, 0, 189, 192, 0, 195, 198, 0, 201, 204, 0, 207, 210, 0, 213, 216, 0, 219, 222, 0, 0, 0, 21, 0, 0, 20, 0, 0, 19, 0, 0, 18, 0, 0, 17, 0, 0, 16, 0, 0, 35, 0, 0, 34, 0, 0, 33, 0, 0, 32, 0, 0, 31, 0, 0, 30, 0, 0, 29, 0, 0, 28, 0, 0, 27, 0, 0, 26, 0, 0, 25, 0, 0, 24, 0, 0, 23, 0, 0, 22]),
    t.MACROBLOCK_TYPE_INTRA = new Int8Array([3, 6, 0, -1, 9, 0, 0, 0, 1, 0, 0, 17]),
    t.MACROBLOCK_TYPE_PREDICTIVE = new Int8Array([3, 6, 0, 9, 12, 0, 0, 0, 10, 15, 18, 0, 0, 0, 2, 21, 24, 0, 0, 0, 8, 27, 30, 0, 33, 36, 0, -1, 39, 0, 0, 0, 18, 0, 0, 26, 0, 0, 1, 0, 0, 17]),
    t.MACROBLOCK_TYPE_B = new Int8Array([3, 6, 0, 9, 15, 0, 12, 18, 0, 24, 21, 0, 0, 0, 12, 27, 30, 0, 0, 0, 14, 39, 42, 0, 36, 33, 0, 0, 0, 4, 0, 0, 6, 54, 48, 0, 45, 51, 0, 0, 0, 8, 0, 0, 10, -1, 57, 0, 0, 0, 1, 60, 63, 0, 0, 0, 30, 0, 0, 17, 0, 0, 22, 0, 0, 26]),
    t.MACROBLOCK_TYPE = [null, t.MACROBLOCK_TYPE_INTRA, t.MACROBLOCK_TYPE_PREDICTIVE, t.MACROBLOCK_TYPE_B],
    t.CODE_BLOCK_PATTERN = new Int16Array([6, 3, 0, 9, 18, 0, 12, 15, 0, 24, 33, 0, 36, 39, 0, 27, 21, 0, 30, 42, 0, 60, 57, 0, 54, 48, 0, 69, 51, 0, 81, 75, 0, 63, 84, 0, 45, 66, 0, 72, 78, 0, 0, 0, 60, 105, 120, 0, 132, 144, 0, 114, 108, 0, 126, 141, 0, 87, 93, 0, 117, 96, 0, 0, 0, 32, 135, 138, 0, 99, 123, 0, 129, 102, 0, 0, 0, 4, 90, 111, 0, 0, 0, 8, 0, 0, 16, 0, 0, 44, 150, 168, 0, 0, 0, 28, 0, 0, 52, 0, 0, 62, 183, 177, 0, 156, 180, 0, 0, 0, 1, 165, 162, 0, 0, 0, 61, 0, 0, 56, 171, 174, 0, 0, 0, 2, 0, 0, 40, 153, 186, 0, 0, 0, 48, 192, 189, 0, 147, 159, 0, 0, 0, 20, 0, 0, 12, 240, 249, 0, 0, 0, 63, 231, 225, 0, 195, 219, 0, 252, 198, 0, 0, 0, 24, 0, 0, 36, 0, 0, 3, 207, 261, 0, 243, 237, 0, 204, 213, 0, 210, 234, 0, 201, 228, 0, 216, 222, 0, 258, 255, 0, 264, 246, 0, -1, 282, 0, 285, 291, 0, 0, 0, 33, 0, 0, 9, 318, 330, 0, 306, 348, 0, 0, 0, 5, 0, 0, 10, 279, 267, 0, 0, 0, 6, 0, 0, 18, 0, 0, 17, 0, 0, 34, 339, 357, 0, 309, 312, 0, 270, 276, 0, 327, 321, 0, 351, 354, 0, 303, 297, 0, 294, 288, 0, 300, 273, 0, 342, 345, 0, 315, 324, 0, 336, 333, 0, 363, 375, 0, 0, 0, 41, 0, 0, 14, 0, 0, 21, 372, 366, 0, 360, 369, 0, 0, 0, 11, 0, 0, 19, 0, 0, 7, 0, 0, 35, 0, 0, 13, 0, 0, 50, 0, 0, 49, 0, 0, 58, 0, 0, 37, 0, 0, 25, 0, 0, 45, 0, 0, 57, 0, 0, 26, 0, 0, 29, 0, 0, 38, 0, 0, 53, 0, 0, 23, 0, 0, 43, 0, 0, 46, 0, 0, 42, 0, 0, 22, 0, 0, 54, 0, 0, 51, 0, 0, 15, 0, 0, 30, 0, 0, 39, 0, 0, 47, 0, 0, 55, 0, 0, 27, 0, 0, 59, 0, 0, 31]),
    t.MOTION = new Int16Array([3, 6, 0, 12, 9, 0, 0, 0, 0, 18, 15, 0, 24, 21, 0, 0, 0, -1, 0, 0, 1, 27, 30, 0, 36, 33, 0, 0, 0, 2, 0, 0, -2, 42, 45, 0, 48, 39, 0, 60, 54, 0, 0, 0, 3, 0, 0, -3, 51, 57, 0, -1, 69, 0, 81, 75, 0, 78, 63, 0, 72, 66, 0, 96, 84, 0, 87, 93, 0, -1, 99, 0, 108, 105, 0, 0, 0, -4, 90, 102, 0, 0, 0, 4, 0, 0, -7, 0, 0, 5, 111, 123, 0, 0, 0, -5, 0, 0, 7, 114, 120, 0, 126, 117, 0, 0, 0, -6, 0, 0, 6, 153, 162, 0, 150, 147, 0, 135, 138, 0, 156, 141, 0, 129, 159, 0, 132, 144, 0, 0, 0, 10, 0, 0, 9, 0, 0, 8, 0, 0, -8, 171, 198, 0, 0, 0, -9, 180, 192, 0, 168, 183, 0, 165, 186, 0, 174, 189, 0, 0, 0, -10, 177, 195, 0, 0, 0, 12, 0, 0, 16, 0, 0, 13, 0, 0, 14, 0, 0, 11, 0, 0, 15, 0, 0, -16, 0, 0, -12, 0, 0, -14, 0, 0, -15, 0, 0, -11, 0, 0, -13]),
    t.DCT_DC_SIZE_LUMINANCE = new Int8Array([6, 3, 0, 18, 15, 0, 9, 12, 0, 0, 0, 1, 0, 0, 2, 27, 24, 0, 21, 30, 0, 0, 0, 0, 36, 33, 0, 0, 0, 4, 0, 0, 3, 39, 42, 0, 0, 0, 5, 0, 0, 6, 48, 45, 0, 51, -1, 0, 0, 0, 7, 0, 0, 8]),
    t.DCT_DC_SIZE_CHROMINANCE = new Int8Array([6, 3, 0, 12, 9, 0, 18, 15, 0, 24, 21, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 30, 27, 0, 0, 0, 3, 36, 33, 0, 0, 0, 4, 42, 39, 0, 0, 0, 5, 48, 45, 0, 0, 0, 6, 51, -1, 0, 0, 0, 7, 0, 0, 8]),
    t.DCT_COEFF = new Int32Array([3, 6, 0, 12, 9, 0, 0, 0, 1, 21, 24, 0, 18, 15, 0, 39, 27, 0, 33, 30, 0, 42, 36, 0, 0, 0, 257, 60, 66, 0, 54, 63, 0, 48, 57, 0, 0, 0, 513, 51, 45, 0, 0, 0, 2, 0, 0, 3, 81, 75, 0, 87, 93, 0, 72, 78, 0, 96, 90, 0, 0, 0, 1025, 69, 84, 0, 0, 0, 769, 0, 0, 258, 0, 0, 1793, 0, 0, 65535, 0, 0, 1537, 111, 108, 0, 0, 0, 1281, 105, 102, 0, 117, 114, 0, 99, 126, 0, 120, 123, 0, 156, 150, 0, 162, 159, 0, 144, 147, 0, 129, 135, 0, 138, 132, 0, 0, 0, 2049, 0, 0, 4, 0, 0, 514, 0, 0, 2305, 153, 141, 0, 165, 171, 0, 180, 168, 0, 177, 174, 0, 183, 186, 0, 0, 0, 2561, 0, 0, 3329, 0, 0, 6, 0, 0, 259, 0, 0, 5, 0, 0, 770, 0, 0, 2817, 0, 0, 3073, 228, 225, 0, 201, 210, 0, 219, 213, 0, 234, 222, 0, 216, 231, 0, 207, 192, 0, 204, 189, 0, 198, 195, 0, 243, 261, 0, 273, 240, 0, 246, 237, 0, 249, 258, 0, 279, 276, 0, 252, 255, 0, 270, 282, 0, 264, 267, 0, 0, 0, 515, 0, 0, 260, 0, 0, 7, 0, 0, 1026, 0, 0, 1282, 0, 0, 4097, 0, 0, 3841, 0, 0, 3585, 315, 321, 0, 333, 342, 0, 312, 291, 0, 375, 357, 0, 288, 294, 0, -1, 369, 0, 285, 303, 0, 318, 363, 0, 297, 306, 0, 339, 309, 0, 336, 348, 0, 330, 300, 0, 372, 345, 0, 351, 366, 0, 327, 354, 0, 360, 324, 0, 381, 408, 0, 417, 420, 0, 390, 378, 0, 435, 438, 0, 384, 387, 0, 0, 0, 2050, 396, 402, 0, 465, 462, 0, 0, 0, 8, 411, 399, 0, 429, 432, 0, 453, 414, 0, 426, 423, 0, 0, 0, 10, 0, 0, 9, 0, 0, 11, 0, 0, 5377, 0, 0, 1538, 0, 0, 771, 0, 0, 5121, 0, 0, 1794, 0, 0, 4353, 0, 0, 4609, 0, 0, 4865, 444, 456, 0, 0, 0, 1027, 459, 450, 0, 0, 0, 261, 393, 405, 0, 0, 0, 516, 447, 441, 0, 516, 519, 0, 486, 474, 0, 510, 483, 0, 504, 498, 0, 471, 537, 0, 507, 501, 0, 522, 513, 0, 534, 531, 0, 468, 477, 0, 492, 495, 0, 549, 546, 0, 525, 528, 0, 0, 0, 263, 0, 0, 2562, 0, 0, 2306, 0, 0, 5633, 0, 0, 5889, 0, 0, 6401, 0, 0, 6145, 0, 0, 1283, 0, 0, 772, 0, 0, 13, 0, 0, 12, 0, 0, 14, 0, 0, 15, 0, 0, 517, 0, 0, 6657, 0, 0, 262, 540, 543, 0, 480, 489, 0, 588, 597, 0, 0, 0, 27, 609, 555, 0, 606, 603, 0, 0, 0, 19, 0, 0, 22, 591, 621, 0, 0, 0, 18, 573, 576, 0, 564, 570, 0, 0, 0, 20, 552, 582, 0, 0, 0, 21, 558, 579, 0, 0, 0, 23, 612, 594, 0, 0, 0, 25, 0, 0, 24, 600, 615, 0, 0, 0, 31, 0, 0, 30, 0, 0, 28, 0, 0, 29, 0, 0, 26, 0, 0, 17, 0, 0, 16, 567, 618, 0, 561, 585, 0, 654, 633, 0, 0, 0, 37, 645, 648, 0, 0, 0, 36, 630, 636, 0, 0, 0, 34, 639, 627, 0, 663, 666, 0, 657, 624, 0, 651, 642, 0, 669, 660, 0, 0, 0, 35, 0, 0, 267, 0, 0, 40, 0, 0, 268, 0, 0, 266, 0, 0, 32, 0, 0, 264, 0, 0, 265, 0, 0, 38, 0, 0, 269, 0, 0, 270, 0, 0, 33, 0, 0, 39, 0, 0, 7937, 0, 0, 6913, 0, 0, 7681, 0, 0, 4098, 0, 0, 7425, 0, 0, 7169, 0, 0, 271, 0, 0, 274, 0, 0, 273, 0, 0, 272, 0, 0, 1539, 0, 0, 2818, 0, 0, 3586, 0, 0, 3330, 0, 0, 3074, 0, 0, 3842]),
    t.PICTURE_TYPE = {
        INTRA: 1,
        PREDICTIVE: 2,
        B: 3
    },
    t.START = {
        SEQUENCE: 179,
        SLICE_FIRST: 1,
        SLICE_LAST: 175,
        PICTURE: 0,
        EXTENSION: 181,
        USER_DATA: 178
    },
    t
} (),
JSMpeg.Decoder.MP2Audio = function() {
    "use strict";
    var t = function(e) {
        JSMpeg.Decoder.Base.call(this, e);
        var i = e.audioBufferSize || 131072,
        n = e.streaming ? JSMpeg.BitBuffer.MODE.EVICT: JSMpeg.BitBuffer.MODE.EXPAND;
        this.bits = new JSMpeg.BitBuffer(i, n),
        this.left = new Float32Array(1152),
        this.right = new Float32Array(1152),
        this.sampleRate = 44100,
        this.D = new Float32Array(1024),
        this.D.set(t.SYNTHESIS_WINDOW, 0),
        this.D.set(t.SYNTHESIS_WINDOW, 512),
        this.V = new Float32Array(1024),
        this.U = new Int32Array(32),
        this.VPos = 0,
        this.allocation = [new Array(32), new Array(32)],
        this.scaleFactorInfo = [new Uint8Array(32), new Uint8Array(32)],
        this.scaleFactor = [new Array(32), new Array(32)],
        this.sample = [new Array(32), new Array(32)];
        for (var s = 0; s < 2; s++) for (var r = 0; r < 32; r++) this.scaleFactor[s][r] = [0, 0, 0],
        this.sample[s][r] = [0, 0, 0]
    };
    return t.prototype = Object.create(JSMpeg.Decoder.Base.prototype),
    t.prototype.constructor = t,
    t.prototype.decode = function() {
        var t = this.bits.index >> 3;
        if (t >= this.bits.byteLength) return ! 1;
        var e = this.decodeFrame(this.left, this.right);
        return this.bits.index = t + e << 3,
        !!e && (this.destination && this.destination.play(this.sampleRate, this.left, this.right), this.advanceDecodedTime(this.left.length / this.sampleRate), !0)
    },
    t.prototype.getCurrentTime = function() {
        var t = this.destination ? this.destination.enqueuedTime: 0;
        return this.decodedTime - t
    },
    t.prototype.decodeFrame = function(e, i) {
        var n = this.bits.read(11),
        s = this.bits.read(2),
        r = this.bits.read(2),
        o = !this.bits.read(1);
        if (n !== t.FRAME_SYNC || s !== t.VERSION.MPEG_1 || r !== t.LAYER.II) return 0;
        var a = this.bits.read(4) - 1;
        if (a > 13) return 0;
        var l = this.bits.read(2),
        h = t.SAMPLE_RATE[l];
        if (3 === l) return 0;
        s === t.VERSION.MPEG_2 && (l += 4, a += 14);
        var c = this.bits.read(1),
        u = (this.bits.read(1), this.bits.read(2)),
        d = 0;
        u === t.MODE.JOINT_STEREO ? d = this.bits.read(2) + 1 << 2 : (this.bits.skip(2), d = u === t.MODE.MONO ? 0 : 32),
        this.bits.skip(4),
        o && this.bits.skip(16);
        var p = t.BIT_RATE[a],
        h = t.SAMPLE_RATE[l],
        f = 144e3 * p / h + c | 0,
        m = 0,
        g = 0;
        if (s === t.VERSION.MPEG_2) m = 2,
        g = 30;
        else {
            var _ = u === t.MODE.MONO ? 0 : 1,
            v = t.QUANT_LUT_STEP_1[_][a];
            m = t.QUANT_LUT_STEP_2[v][l],
            g = 63 & m,
            m >>= 6
        }
        d > g && (d = g);
        for (var y = 0; y < d; y++) this.allocation[0][y] = this.readAllocation(y, m),
        this.allocation[1][y] = this.readAllocation(y, m);
        for (var y = d; y < g; y++) this.allocation[0][y] = this.allocation[1][y] = this.readAllocation(y, m);
        for (var b = u === t.MODE.MONO ? 1 : 2, y = 0; y < g; y++) {
            for (x = 0; x < b; x++) this.allocation[x][y] && (this.scaleFactorInfo[x][y] = this.bits.read(2));
            u === t.MODE.MONO && (this.scaleFactorInfo[1][y] = this.scaleFactorInfo[0][y])
        }
        for (var y = 0; y < g; y++) {
            for (var x = 0; x < b; x++) if (this.allocation[x][y]) {
                var T = this.scaleFactor[x][y];
                switch (this.scaleFactorInfo[x][y]) {
                case 0:
                    T[0] = this.bits.read(6),
                    T[1] = this.bits.read(6),
                    T[2] = this.bits.read(6);
                    break;
                case 1:
                    T[0] = T[1] = this.bits.read(6),
                    T[2] = this.bits.read(6);
                    break;
                case 2:
                    T[0] = T[1] = T[2] = this.bits.read(6);
                    break;
                case 3:
                    T[0] = this.bits.read(6),
                    T[1] = T[2] = this.bits.read(6)
                }
            }
            u === t.MODE.MONO && (this.scaleFactor[1][y][0] = this.scaleFactor[0][y][0], this.scaleFactor[1][y][1] = this.scaleFactor[0][y][1], this.scaleFactor[1][y][2] = this.scaleFactor[0][y][2])
        }
        for (var w = 0,
        S = 0; S < 3; S++) for (var P = 0; P < 4; P++) {
            for (var y = 0; y < d; y++) this.readSamples(0, y, S),
            this.readSamples(1, y, S);
            for (var y = d; y < g; y++) this.readSamples(0, y, S),
            this.sample[1][y][0] = this.sample[0][y][0],
            this.sample[1][y][1] = this.sample[0][y][1],
            this.sample[1][y][2] = this.sample[0][y][2];
            for (var y = g; y < 32; y++) this.sample[0][y][0] = 0,
            this.sample[0][y][1] = 0,
            this.sample[0][y][2] = 0,
            this.sample[1][y][0] = 0,
            this.sample[1][y][1] = 0,
            this.sample[1][y][2] = 0;
            for (var C = 0; C < 3; C++) {
                this.VPos = this.VPos - 64 & 1023;
                for (var x = 0; x < 2; x++) {
                    t.MatrixTransform(this.sample[x], C, this.V, this.VPos),
                    JSMpeg.Fill(this.U, 0);
                    for (var E = 512 - (this.VPos >> 1), k = this.VPos % 128 >> 1; k < 1024;) {
                        for (var A = 0; A < 32; ++A) this.U[A] += this.D[E++] * this.V[k++];
                        k += 96,
                        E += 32
                    }
                    for (k = 1120 - k, E -= 480; k < 1024;) {
                        for (var A = 0; A < 32; ++A) this.U[A] += this.D[E++] * this.V[k++];
                        k += 96,
                        E += 32
                    }
                    for (var R = 0 === x ? e: i, D = 0; D < 32; D++) R[w + D] = this.U[D] / 2147418112
                }
                w += 32
            }
        }
        return this.sampleRate = h,
        f
    },
    t.prototype.readAllocation = function(e, i) {
        var n = t.QUANT_LUT_STEP_3[i][e],
        s = t.QUANT_LUT_STEP4[15 & n][this.bits.read(n >> 4)];
        return s ? t.QUANT_TAB[s - 1] : 0
    },
    t.prototype.readSamples = function(e, i, n) {
        var s = this.allocation[e][i],
        r = this.scaleFactor[e][i][n],
        o = this.sample[e][i],
        a = 0;
        if (!s) return void(o[0] = o[1] = o[2] = 0);
        if (63 === r) r = 0;
        else {
            var l = r / 3 | 0;
            r = t.SCALEFACTOR_BASE[r % 3] + (1 << l >> 1) >> l
        }
        var h = s.levels;
        s.group ? (a = this.bits.read(s.bits), o[0] = a % h, a = a / h | 0, o[1] = a % h, o[2] = a / h | 0) : (o[0] = this.bits.read(s.bits), o[1] = this.bits.read(s.bits), o[2] = this.bits.read(s.bits));
        var c = 65536 / (h + 1) | 0;
        h = (h + 1 >> 1) - 1,
        a = (h - o[0]) * c,
        o[0] = a * (r >> 12) + (a * (4095 & r) + 2048 >> 12) >> 12,
        a = (h - o[1]) * c,
        o[1] = a * (r >> 12) + (a * (4095 & r) + 2048 >> 12) >> 12,
        a = (h - o[2]) * c,
        o[2] = a * (r >> 12) + (a * (4095 & r) + 2048 >> 12) >> 12
    },
    t.MatrixTransform = function(t, e, i, n) {
        var s, r, o, a, l, h, c, u, d, p, f, m, g, _, v, y, b, x, T, w, S, P, C, E, k, A, R, D, M, O, N, I, F;
        s = t[0][e] + t[31][e],
        r = .500602998235 * (t[0][e] - t[31][e]),
        o = t[1][e] + t[30][e],
        a = .505470959898 * (t[1][e] - t[30][e]),
        l = t[2][e] + t[29][e],
        h = .515447309923 * (t[2][e] - t[29][e]),
        c = t[3][e] + t[28][e],
        u = .53104259109 * (t[3][e] - t[28][e]),
        d = t[4][e] + t[27][e],
        p = .553103896034 * (t[4][e] - t[27][e]),
        f = t[5][e] + t[26][e],
        m = .582934968206 * (t[5][e] - t[26][e]),
        g = t[6][e] + t[25][e],
        _ = .622504123036 * (t[6][e] - t[25][e]),
        v = t[7][e] + t[24][e],
        y = .674808341455 * (t[7][e] - t[24][e]),
        b = t[8][e] + t[23][e],
        x = .744536271002 * (t[8][e] - t[23][e]),
        T = t[9][e] + t[22][e],
        w = .839349645416 * (t[9][e] - t[22][e]),
        S = t[10][e] + t[21][e],
        P = .972568237862 * (t[10][e] - t[21][e]),
        C = t[11][e] + t[20][e],
        E = 1.16943993343 * (t[11][e] - t[20][e]),
        k = t[12][e] + t[19][e],
        A = 1.48416461631 * (t[12][e] - t[19][e]),
        R = t[13][e] + t[18][e],
        D = 2.05778100995 * (t[13][e] - t[18][e]),
        M = t[14][e] + t[17][e],
        O = 3.40760841847 * (t[14][e] - t[17][e]),
        N = t[15][e] + t[16][e],
        I = 10.1900081235 * (t[15][e] - t[16][e]),
        F = s + N,
        N = .502419286188 * (s - N),
        s = o + M,
        M = .52249861494 * (o - M),
        o = l + R,
        R = .566944034816 * (l - R),
        l = c + k,
        k = .64682178336 * (c - k),
        c = d + C,
        C = .788154623451 * (d - C),
        d = f + S,
        S = 1.06067768599 * (f - S),
        f = g + T,
        T = 1.72244709824 * (g - T),
        g = v + b,
        b = 5.10114861869 * (v - b),
        v = F + g,
        g = .509795579104 * (F - g),
        F = s + f,
        s = .601344886935 * (s - f),
        f = o + d,
        d = .899976223136 * (o - d),
        o = l + c,
        c = 2.56291544774 * (l - c),
        l = v + o,
        v = .541196100146 * (v - o),
        o = F + f,
        f = 1.30656296488 * (F - f),
        F = l + o,
        l = .707106781187 * (l - o),
        o = v + f,
        v = .707106781187 * (v - f),
        o += v,
        f = g + c,
        g = .541196100146 * (g - c),
        c = s + d,
        d = 1.30656296488 * (s - d),
        s = f + c,
        c = .707106781187 * (f - c),
        f = g + d,
        g = .707106781187 * (g - d),
        f += g,
        s += f,
        f += c,
        c += g,
        d = N + b,
        N = .509795579104 * (N - b),
        b = M + T,
        M = .601344886935 * (M - T),
        T = R + S,
        S = .899976223136 * (R - S),
        R = k + C,
        C = 2.56291544774 * (k - C),
        k = d + R,
        d = .541196100146 * (d - R),
        R = b + T,
        T = 1.30656296488 * (b - T),
        b = k + R,
        R = .707106781187 * (k - R),
        k = d + T,
        T = .707106781187 * (d - T),
        k += T,
        d = N + C,
        N = .541196100146 * (N - C),
        C = M + S,
        S = 1.30656296488 * (M - S),
        M = d + C,
        C = .707106781187 * (d - C),
        d = N + S,
        N = .707106781187 * (N - S),
        d += N,
        M += d,
        d += C,
        C += N,
        b += M,
        M += k,
        k += d,
        d += R,
        R += C,
        C += T,
        T += N,
        S = r + I,
        r = .502419286188 * (r - I),
        I = a + O,
        a = .52249861494 * (a - O),
        O = h + D,
        D = .566944034816 * (h - D),
        h = u + A,
        u = .64682178336 * (u - A),
        A = p + E,
        p = .788154623451 * (p - E),
        E = m + P,
        P = 1.06067768599 * (m - P),
        m = _ + w,
        w = 1.72244709824 * (_ - w),
        _ = y + x,
        y = 5.10114861869 * (y - x),
        x = S + _,
        _ = .509795579104 * (S - _),
        S = I + m,
        I = .601344886935 * (I - m),
        m = O + E,
        E = .899976223136 * (O - E),
        O = h + A,
        A = 2.56291544774 * (h - A),
        h = x + O,
        x = .541196100146 * (x - O),
        O = S + m,
        m = 1.30656296488 * (S - m),
        S = h + O,
        O = .707106781187 * (h - O),
        h = x + m,
        m = .707106781187 * (x - m),
        h += m,
        x = _ + A,
        A = .541196100146 * (_ - A),
        _ = I + E,
        E = 1.30656296488 * (I - E),
        I = x + _,
        _ = .707106781187 * (x - _),
        x = A + E,
        E = .707106781187 * (A - E),
        x += E,
        I += x,
        x += _,
        A = _ + E,
        _ = r + y,
        r = .509795579104 * (r - y),
        y = a + w,
        a = .601344886935 * (a - w),
        w = D + P,
        P = .899976223136 * (D - P),
        D = u + p,
        p = 2.56291544774 * (u - p),
        u = _ + D,
        _ = .541196100146 * (_ - D),
        D = y + w,
        w = 1.30656296488 * (y - w),
        y = u + D,
        D = .707106781187 * (u - D),
        u = _ + w,
        w = .707106781187 * (_ - w),
        u += w,
        _ = r + p,
        r = .541196100146 * (r - p),
        p = a + P,
        P = 1.30656296488 * (a - P),
        a = _ + p,
        p = .707106781187 * (_ - p),
        _ = r + P,
        r = .707106781187 * (r - P),
        _ += r,
        a += _,
        _ += p,
        p += r,
        y += a,
        a += u,
        u += _,
        _ += D,
        D += p,
        p += w,
        w += r,
        S += y,
        y += I,
        I += a,
        a += h,
        h += u,
        u += x;
        x += _,
        _ += O,
        O += D,
        D += A,
        A += p,
        p += m,
        m += w,
        w += E,
        E += r,
        i[n + 48] = -F,
        i[n + 49] = i[n + 47] = -S,
        i[n + 50] = i[n + 46] = -b,
        i[n + 51] = i[n + 45] = -y,
        i[n + 52] = i[n + 44] = -s,
        i[n + 53] = i[n + 43] = -I,
        i[n + 54] = i[n + 42] = -M,
        i[n + 55] = i[n + 41] = -a,
        i[n + 56] = i[n + 40] = -o,
        i[n + 57] = i[n + 39] = -h,
        i[n + 58] = i[n + 38] = -k,
        i[n + 59] = i[n + 37] = -u,
        i[n + 60] = i[n + 36] = -f,
        i[n + 61] = i[n + 35] = -x,
        i[n + 62] = i[n + 34] = -d,
        i[n + 63] = i[n + 33] = -_,
        i[n + 32] = -l,
        i[n + 0] = l,
        i[n + 31] = -O,
        i[n + 1] = O,
        i[n + 30] = -R,
        i[n + 2] = R,
        i[n + 29] = -D,
        i[n + 3] = D,
        i[n + 28] = -c,
        i[n + 4] = c,
        i[n + 27] = -A,
        i[n + 5] = A,
        i[n + 26] = -C,
        i[n + 6] = C,
        i[n + 25] = -p,
        i[n + 7] = p,
        i[n + 24] = -v,
        i[n + 8] = v,
        i[n + 23] = -m,
        i[n + 9] = m,
        i[n + 22] = -T,
        i[n + 10] = T,
        i[n + 21] = -w,
        i[n + 11] = w,
        i[n + 20] = -g,
        i[n + 12] = g,
        i[n + 19] = -E,
        i[n + 13] = E,
        i[n + 18] = -N,
        i[n + 14] = N,
        i[n + 17] = -r,
        i[n + 15] = r,
        i[n + 16] = 0
    },
    t.FRAME_SYNC = 2047,
    t.VERSION = {
        MPEG_2_5: 0,
        MPEG_2: 2,
        MPEG_1: 3
    },
    t.LAYER = {
        III: 1,
        II: 2,
        I: 3
    },
    t.MODE = {
        STEREO: 0,
        JOINT_STEREO: 1,
        DUAL_CHANNEL: 2,
        MONO: 3
    },
    t.SAMPLE_RATE = new Uint16Array([44100, 48e3, 32e3, 0, 22050, 24e3, 16e3, 0]),
    t.BIT_RATE = new Uint16Array([32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160]),
    t.SCALEFACTOR_BASE = new Uint32Array([33554432, 26632170, 21137968]),
    t.SYNTHESIS_WINDOW = new Float32Array([0, -.5, -.5, -.5, -.5, -.5, -.5, -1, -1, -1, -1, -1.5, -1.5, -2, -2, -2.5, -2.5, -3, -3.5, -3.5, -4, -4.5, -5, -5.5, -6.5, -7, -8, -8.5, -9.5, -10.5, -12, -13, -14.5, -15.5, -17.5, -19, -20.5, -22.5, -24.5, -26.5, -29, -31.5, -34, -36.5, -39.5, -42.5, -45.5, -48.5, -52, -55.5, -58.5, -62.5, -66, -69.5, -73.5, -77, -80.5, -84.5, -88, -91.5, -95, -98, -101, -104, 106.5, 109, 111, 112.5, 113.5, 114, 114, 113.5, 112, 110.5, 107.5, 104, 100, 94.5, 88.5, 81.5, 73, 63.5, 53, 41.5, 28.5, 14.5, -1, -18, -36, -55.5, -76.5, -98.5, -122, -147, -173.5, -200.5, -229.5, -259.5, -290.5, -322.5, -355.5, -389.5, -424, -459.5, -495.5, -532, -568.5, -605, -641.5, -678, -714, -749, -783.5, -817, -849, -879.5, -908.5, -935, -959.5, -981, -1000.5, -1016, -1028.5, -1037.5, -1042.5, -1043.5, -1040, -1031.5, 1018.5, 1e3, 976, 946.5, 911, 869.5, 822, 767.5, 707, 640, 565.5, 485, 397, 302.5, 201, 92.5, -22.5, -144, -272.5, -407, -547.5, -694, -846, -1003, -1165, -1331.5, -1502, -1675.5, -1852.5, -2031.5, -2212.5, -2394, -2576.5, -2758.5, -2939.5, -3118.5, -3294.5, -3467.5, -3635.5, -3798.5, -3955, -4104.5, -4245.5, -4377.5, -4499, -4609.5, -4708, -4792.5, -4863.5, -4919, -4958, -4979.5, -4983, -4967.5, -4931.5, -4875, -4796, -4694.5, -4569.5, -4420, -4246, -4046, -3820, -3567, 3287, 2979.5, 2644, 2280.5, 1888, 1467.5, 1018.5, 541, 35, -499, -1061, -1650, -2266.5, -2909, -3577, -4270, -4987.5, -5727.5, -6490, -7274, -8077.5, -8899.5, -9739, -10594.5, -11464.5, -12347, -13241, -14144.5, -15056, -15973.5, -16895.5, -17820, -18744.5, -19668, -20588, -21503, -22410.5, -23308.5, -24195, -25068.5, -25926.5, -26767, -27589, -28389, -29166.5, -29919, -30644.5, -31342, -32009.5, -32645, -33247, -33814.5, -34346, -34839.5, -35295, -35710, -36084.5, -36417.5, -36707.5, -36954, -37156.5, -37315, -37428, -37496, 37519, 37496, 37428, 37315, 37156.5, 36954, 36707.5, 36417.5, 36084.5, 35710, 35295, 34839.5, 34346, 33814.5, 33247, 32645, 32009.5, 31342, 30644.5, 29919, 29166.5, 28389, 27589, 26767, 25926.5, 25068.5, 24195, 23308.5, 22410.5, 21503, 20588, 19668, 18744.5, 17820, 16895.5, 15973.5, 15056, 14144.5, 13241, 12347, 11464.5, 10594.5, 9739, 8899.5, 8077.5, 7274, 6490, 5727.5, 4987.5, 4270, 3577, 2909, 2266.5, 1650, 1061, 499, -35, -541, -1018.5, -1467.5, -1888, -2280.5, -2644, -2979.5, 3287, 3567, 3820, 4046, 4246, 4420, 4569.5, 4694.5, 4796, 4875, 4931.5, 4967.5, 4983, 4979.5, 4958, 4919, 4863.5, 4792.5, 4708, 4609.5, 4499, 4377.5, 4245.5, 4104.5, 3955, 3798.5, 3635.5, 3467.5, 3294.5, 3118.5, 2939.5, 2758.5, 2576.5, 2394, 2212.5, 2031.5, 1852.5, 1675.5, 1502, 1331.5, 1165, 1003, 846, 694, 547.5, 407, 272.5, 144, 22.5, -92.5, -201, -302.5, -397, -485, -565.5, -640, -707, -767.5, -822, -869.5, -911, -946.5, -976, -1e3, 1018.5, 1031.5, 1040, 1043.5, 1042.5, 1037.5, 1028.5, 1016, 1000.5, 981, 959.5, 935, 908.5, 879.5, 849, 817, 783.5, 749, 714, 678, 641.5, 605, 568.5, 532, 495.5, 459.5, 424, 389.5, 355.5, 322.5, 290.5, 259.5, 229.5, 200.5, 173.5, 147, 122, 98.5, 76.5, 55.5, 36, 18, 1, -14.5, -28.5, -41.5, -53, -63.5, -73, -81.5, -88.5, -94.5, -100, -104, -107.5, -110.5, -112, -113.5, -114, -114, -113.5, -112.5, -111, -109, 106.5, 104, 101, 98, 95, 91.5, 88, 84.5, 80.5, 77, 73.5, 69.5, 66, 62.5, 58.5, 55.5, 52, 48.5, 45.5, 42.5, 39.5, 36.5, 34, 31.5, 29, 26.5, 24.5, 22.5, 20.5, 19, 17.5, 15.5, 14.5, 13, 12, 10.5, 9.5, 8.5, 8, 7, 6.5, 5.5, 5, 4.5, 4, 3.5, 3.5, 3, 2.5, 2.5, 2, 2, 1.5, 1.5, 1, 1, 1, 1, .5, .5, .5, .5, .5, .5]),
    t.QUANT_LUT_STEP_1 = [[0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2]],
    t.QUANT_TAB = {
        A: 91,
        B: 94,
        C: 8,
        D: 12
    },
    t.QUANT_LUT_STEP_2 = [[t.QUANT_TAB.C, t.QUANT_TAB.C, t.QUANT_TAB.D], [t.QUANT_TAB.A, t.QUANT_TAB.A, t.QUANT_TAB.A], [t.QUANT_TAB.B, t.QUANT_TAB.A, t.QUANT_TAB.B]],
    t.QUANT_LUT_STEP_3 = [[68, 68, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52], [67, 67, 67, 66, 66, 66, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32], [69, 69, 69, 69, 52, 52, 52, 52, 52, 52, 52, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36]],
    t.QUANT_LUT_STEP4 = [[0, 1, 2, 17], [0, 1, 2, 3, 4, 5, 6, 17], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17], [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]],
    t.QUANT_TAB = [{
        levels: 3,
        group: 1,
        bits: 5
    },
    {
        levels: 5,
        group: 1,
        bits: 7
    },
    {
        levels: 7,
        group: 0,
        bits: 3
    },
    {
        levels: 9,
        group: 1,
        bits: 10
    },
    {
        levels: 15,
        group: 0,
        bits: 4
    },
    {
        levels: 31,
        group: 0,
        bits: 5
    },
    {
        levels: 63,
        group: 0,
        bits: 6
    },
    {
        levels: 127,
        group: 0,
        bits: 7
    },
    {
        levels: 255,
        group: 0,
        bits: 8
    },
    {
        levels: 511,
        group: 0,
        bits: 9
    },
    {
        levels: 1023,
        group: 0,
        bits: 10
    },
    {
        levels: 2047,
        group: 0,
        bits: 11
    },
    {
        levels: 4095,
        group: 0,
        bits: 12
    },
    {
        levels: 8191,
        group: 0,
        bits: 13
    },
    {
        levels: 16383,
        group: 0,
        bits: 14
    },
    {
        levels: 32767,
        group: 0,
        bits: 15
    },
    {
        levels: 65535,
        group: 0,
        bits: 16
    }],
    t
} (),
JSMpeg.Renderer.WebGL = function() {
    "use strict";
    var t = function(e) {
        this.canvas = e.canvas || document.createElement("canvas"),
        this.width = this.canvas.width,
        this.height = this.canvas.height,
        this.enabled = !0;
        var i = {
            preserveDrawingBuffer: !!e.preserveDrawingBuffer,
            alpha: !1,
            depth: !1,
            stencil: !1,
            antialias: !1
        };
        if (this.gl = this.canvas.getContext("webgl", i) || this.canvas.getContext("experimental-webgl", i), !this.gl) throw new Error("Failed to get WebGL Context");
        var n = this.gl,
        s = null;
        this.vertexBuffer = n.createBuffer();
        var r = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]);
        n.bindBuffer(n.ARRAY_BUFFER, this.vertexBuffer),
        n.bufferData(n.ARRAY_BUFFER, r, n.STATIC_DRAW),
        this.program = this.createProgram(t.SHADER.VERTEX_IDENTITY, t.SHADER.FRAGMENT_YCRCB_TO_RGBA),
        s = n.getAttribLocation(this.program, "vertex"),
        n.enableVertexAttribArray(s),
        n.vertexAttribPointer(s, 2, n.FLOAT, !1, 0, 0),
        this.textureY = this.createTexture(0, "textureY"),
        this.textureCb = this.createTexture(1, "textureCb"),
        this.textureCr = this.createTexture(2, "textureCr"),
        this.loadingProgram = this.createProgram(t.SHADER.VERTEX_IDENTITY, t.SHADER.FRAGMENT_LOADING),
        s = n.getAttribLocation(this.loadingProgram, "vertex"),
        n.enableVertexAttribArray(s),
        n.vertexAttribPointer(s, 2, n.FLOAT, !1, 0, 0),
        this.shouldCreateUnclampedViews = !this.allowsClampedTextureData()
    };
    return t.prototype.destroy = function() {
        var t = this.gl;
        t.deleteTexture(this.textureY),
        t.deleteTexture(this.textureCb),
        t.deleteTexture(this.textureCr),
        t.deleteProgram(this.program),
        t.deleteProgram(this.loadingProgram),
        t.deleteBuffer(this.vertexBuffer)
    },
    t.prototype.resize = function(t, e) {
        this.width = 0 | t,
        this.height = 0 | e,
        this.canvas.width = this.width,
        this.canvas.height = this.height,
        this.gl.useProgram(this.program),
        this.gl.viewport(0, 0, this.width, this.height)
    },
    t.prototype.createTexture = function(t, e) {
        var i = this.gl,
        n = i.createTexture();
        return i.bindTexture(i.TEXTURE_2D, n),
        i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR),
        i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR),
        i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
        i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE),
        i.uniform1i(i.getUniformLocation(this.program, e), t),
        n
    },
    t.prototype.createProgram = function(t, e) {
        var i = this.gl,
        n = i.createProgram();
        return i.attachShader(n, this.compileShader(i.VERTEX_SHADER, t)),
        i.attachShader(n, this.compileShader(i.FRAGMENT_SHADER, e)),
        i.linkProgram(n),
        i.useProgram(n),
        n
    },
    t.prototype.compileShader = function(t, e) {
        var i = this.gl,
        n = i.createShader(t);
        if (i.shaderSource(n, e), i.compileShader(n), !i.getShaderParameter(n, i.COMPILE_STATUS)) throw new Error(i.getShaderInfoLog(n));
        return n
    },
    t.prototype.allowsClampedTextureData = function() {
        var t = this.gl,
        e = t.createTexture();
        return t.bindTexture(t.TEXTURE_2D, e),
        t.texImage2D(t.TEXTURE_2D, 0, t.LUMINANCE, 1, 1, 0, t.LUMINANCE, t.UNSIGNED_BYTE, new Uint8ClampedArray([0])),
        0 === t.getError()
    },
    t.prototype.renderProgress = function(t) {
        var e = this.gl;
        e.useProgram(this.loadingProgram);
        var i = e.getUniformLocation(this.loadingProgram, "progress");
        e.uniform1f(i, t),
        e.drawArrays(e.TRIANGLE_STRIP, 0, 4)
    },
    t.prototype.render = function(t, e, i) {
        if (this.enabled) {
            var n = this.gl,
            s = this.width + 15 >> 4 << 4,
            r = this.height,
            o = s >> 1,
            a = r >> 1;
            this.shouldCreateUnclampedViews && (t = new Uint8Array(t.buffer), e = new Uint8Array(e.buffer), i = new Uint8Array(i.buffer)),
            n.useProgram(this.program),
            this.updateTexture(n.TEXTURE0, this.textureY, s, r, t),
            this.updateTexture(n.TEXTURE1, this.textureCb, o, a, e),
            this.updateTexture(n.TEXTURE2, this.textureCr, o, a, i),
            n.drawArrays(n.TRIANGLE_STRIP, 0, 4)
        }
    },
    t.prototype.updateTexture = function(t, e, i, n, s) {
        var r = this.gl;
        r.activeTexture(t),
        r.bindTexture(r.TEXTURE_2D, e),
        r.texImage2D(r.TEXTURE_2D, 0, r.LUMINANCE, i, n, 0, r.LUMINANCE, r.UNSIGNED_BYTE, s)
    },
    t.IsSupported = function() {
        try {
            if (!window.WebGLRenderingContext) return ! 1;
            var t = document.createElement("canvas");
            return ! (!t.getContext("webgl") && !t.getContext("experimental-webgl"))
        } catch(t) {
            return ! 1
        }
    },
    t.SHADER = {
        FRAGMENT_YCRCB_TO_RGBA: ["precision mediump float;", "uniform sampler2D textureY;", "uniform sampler2D textureCb;", "uniform sampler2D textureCr;", "varying vec2 texCoord;", "mat4 rec601 = mat4(", "1.16438,  0.00000,  1.59603, -0.87079,", "1.16438, -0.39176, -0.81297,  0.52959,", "1.16438,  2.01723,  0.00000, -1.08139,", "0, 0, 0, 1", ");", "void main() {", "float y = texture2D(textureY, texCoord).r;", "float cb = texture2D(textureCb, texCoord).r;", "float cr = texture2D(textureCr, texCoord).r;", "gl_FragColor = vec4(y, cr, cb, 1.0) * rec601;", "}"].join("\n"),
        FRAGMENT_LOADING: ["precision mediump float;", "uniform float progress;", "varying vec2 texCoord;", "void main() {", "float c = ceil(progress-(1.0-texCoord.y));", "gl_FragColor = vec4(c,c,c,1);", "}"].join("\n"),
        VERTEX_IDENTITY: ["attribute vec2 vertex;", "varying vec2 texCoord;", "void main() {", "texCoord = vertex;", "gl_Position = vec4((vertex * 2.0 - 1.0) * vec2(1, -1), 0.0, 1.0);", "}"].join("\n")
    },
    t
} (),
JSMpeg.Renderer.Canvas2D = function() {
    "use strict";
    var t = function(t) {
        this.canvas = t.canvas || document.createElement("canvas"),
        this.width = this.canvas.width,
        this.height = this.canvas.height,
        this.enabled = !0,
        this.context = this.canvas.getContext("2d")
    };
    return t.prototype.destroy = function() {},
    t.prototype.resize = function(t, e) {
        this.width = 0 | t,
        this.height = 0 | e,
        this.canvas.width = this.width,
        this.canvas.height = this.height,
        this.imageData = this.context.getImageData(0, 0, this.width, this.height),
        JSMpeg.Fill(this.imageData.data, 255)
    },
    t.prototype.renderProgress = function(t) {
        var e = this.canvas.width,
        i = this.canvas.height,
        n = this.context;
        n.fillStyle = "#222",
        n.fillRect(0, 0, e, i),
        n.fillStyle = "#fff",
        n.fillRect(0, i - i * t, e, i * t)
    },
    t.prototype.render = function(t, e, i) {
        this.YCbCrToRGBA(t, e, i, this.imageData.data),
        this.context.putImageData(this.imageData, 0, 0)
    },
    t.prototype.YCbCrToRGBA = function(t, e, i, n) {
        if (this.enabled) for (var s, r, o, a, l, h = this.width + 15 >> 4 << 4,
        c = h >> 1,
        u = 0,
        d = h,
        p = h + (h - this.width), f = 0, m = c - (this.width >> 1), g = 0, _ = 4 * this.width, v = 4 * this.width, y = this.width >> 1, b = this.height >> 1, x = 0; x < b; x++) {
            for (var T = 0; T < y; T++) {
                s = e[f],
                r = i[f],
                f++,
                o = s + (103 * s >> 8) - 179,
                a = (88 * r >> 8) - 44 + (183 * s >> 8) - 91,
                l = r + (198 * r >> 8) - 227;
                var w = t[u++],
                S = t[u++];
                n[g] = w + o,
                n[g + 1] = w - a,
                n[g + 2] = w + l,
                n[g + 4] = S + o,
                n[g + 5] = S - a,
                n[g + 6] = S + l,
                g += 8;
                var P = t[d++],
                C = t[d++];
                n[_] = P + o,
                n[_ + 1] = P - a,
                n[_ + 2] = P + l,
                n[_ + 4] = C + o,
                n[_ + 5] = C - a,
                n[_ + 6] = C + l,
                _ += 8
            }
            u += p,
            d += p,
            g += v,
            _ += v,
            f += m
        }
    },
    t
} (),
JSMpeg.AudioOutput.WebAudio = function() {
    "use strict";
    var t = function(e) {
        this.context = t.CachedContext = t.CachedContext || new(window.AudioContext || window.webkitAudioContext),
        this.gain = this.context.createGain(),
        this.destination = this.gain,
        this.gain.connect(this.context.destination),
        this.context._connections = (this.context._connections || 0) + 1,
        this.startTime = 0,
        this.buffer = null,
        this.wallclockStartTime = 0,
        this.volume = 1,
        this.enabled = !0,
        this.unlocked = !t.NeedsUnlocking(),
        Object.defineProperty(this, "enqueuedTime", {
            get: this.getEnqueuedTime
        })
    };
    return t.prototype.destroy = function() {
        this.gain.disconnect(),
        0 === --this.context._connections && (this.context.close(), t.CachedContext = null)
    },
    t.prototype.play = function(t, e, i) {
        if (this.enabled) {
            if (!this.unlocked) {
                var n = JSMpeg.Now();
                return this.wallclockStartTime < n && (this.wallclockStartTime = n),
                void(this.wallclockStartTime += e.length / t)
            }
            this.gain.gain.value = this.volume;
            var s = this.context.createBuffer(2, e.length, t);
            s.getChannelData(0).set(e),
            s.getChannelData(1).set(i);
            var r = this.context.createBufferSource();
            r.buffer = s,
            r.connect(this.destination);
            var o = this.context.currentTime,
            a = s.duration;
            this.startTime < o && (this.startTime = o, this.wallclockStartTime = JSMpeg.Now()),
            r.start(this.startTime),
            this.startTime += a,
            this.wallclockStartTime += a
        }
    },
    t.prototype.stop = function() {
        this.gain.gain.value = 0
    },
    t.prototype.getEnqueuedTime = function() {
        return Math.max(this.wallclockStartTime - JSMpeg.Now(), 0)
    },
    t.prototype.resetEnqueuedTime = function() {
        this.startTime = this.context.currentTime,
        this.wallclockStartTime = JSMpeg.Now()
    },
    t.prototype.unlock = function(t) {
        if (this.unlocked) return void(t && t());
        this.unlockCallback = t;
        var e = this.context.createBuffer(1, 1, 22050),
        i = this.context.createBufferSource();
        i.buffer = e,
        i.connect(this.destination),
        i.start(0),
        setTimeout(this.checkIfUnlocked.bind(this, i, 0), 0)
    },
    t.prototype.checkIfUnlocked = function(t, e) {
        t.playbackState === t.PLAYING_STATE || t.playbackState === t.FINISHED_STATE ? (this.unlocked = !0, this.unlockCallback && (this.unlockCallback(), this.unlockCallback = null)) : e < 10 && setTimeout(this.checkIfUnlocked.bind(this, t, e + 1), 100)
    },
    t.NeedsUnlocking = function() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent)
    },
    t.IsSupported = function() {
        return window.AudioContext || window.webkitAudioContext
    },
    t.CachedContext = null,
    t
} (),
function() {
    var t = [].slice,
    e = {}.hasOwnProperty,
    i = function(t, i) {
        function n() {
            this.constructor = t
        }
        for (var s in i) e.call(i, s) && (t[s] = i[s]);
        return n.prototype = i.prototype,
        t.prototype = new n,
        t.__super__ = i.prototype,
        t
    }; !
    function(e, n) {
        var s, r;
        s = e.ImgLoaderNs = {},
        s.support = {},
        s.support.xhr2 = null != n.FormData,
        s.createCachedFunction = function(t) {
            var i;
            return i = {},
            function(n, s) {
                return i[n] || (i[n] = e.Deferred(function(e) {
                    return t(e, n, s)
                }).promise()),
                i[n]
            }
        },
        s.fetchImg = s.createCachedFunction(function(t, i, n) {
            var r, o, a, l;
            return a = new Image,
            o = function() {
                return a.onload = a.onerror = null
            },
            t.always(o),
            r = e(a),
            a.onload = function() {
                return t.resolve(r)
            },
            a.onerror = function() {
                return t.reject(r)
            },
            s.support.xhr2 && (null != n ? n.useXHR2: void 0) ? (l = new s.Xhr2Request(i, {
                timeout: n.timeout
            }), t.xhr = l, l.on("progress",
            function() {
                return t.notify(l.currentLoadedInfo())
            }), l.on("loadend timeout",
            function() {
                return a.src = i
            }), l.send()) : a.src = i
        }),
        function() {
            var t;
            t = {},
            s.loadImg = function(i, n, r) {
                return e.Deferred(function(e) {
                    return s.fetchImg(i, {
                        useXHR2: n,
                        timeout: r
                    }).progress(function(t) {
                        return e.notify(t)
                    }).then(function(n) {
                        var s, r;
                        return t[i] || (t[i] = n),
                        s = t[i],
                        r = s.clone(),
                        t[i] = r,
                        e.resolve(s)
                    },
                    function(t) {
                        return e.reject(t)
                    })
                }).promise()
            }
        } (),
        s.loadImgWoCache = function(t, i, n) {
            return e.Deferred(function(e) {
                return s.fetchImg(t, {
                    useXHR2: i,
                    timeout: n
                }).progress(function(t) {
                    return e.notify(t)
                }).then(function(t) {
                    return e.resolve(t)
                },
                function(t) {
                    return e.reject(t)
                })
            }).promise()
        },
        r = function(t) {
            return e.Deferred(function(e) {
                return setTimeout(function() {
                    return e.resolve()
                },
                t)
            })
        },
        s.Event = function() {
            function e() {
                this._callbacks = {}
            }
            return e.prototype.on = function(t, e) {
                var i, n, s, r, o;
                for (i = t.split(" "), r = 0, o = i.length; o > r; r++) n = i[r],
                (s = this._callbacks)[n] || (s[n] = []),
                this._callbacks[n].push(e);
                return this
            },
            e.prototype.one = function(t, e) {
                return this.on(t,
                function() {
                    return this.off(t, arguments.callee),
                    e.apply(this, arguments)
                })
            },
            e.prototype.trigger = function() {
                var e, i, n, s, r, o, a;
                if (e = arguments.length >= 1 ? t.call(arguments, 0) : [], n = e.shift(), s = null != (a = this._callbacks) ? a[n] : void 0) {
                    for (r = 0, o = s.length; o > r && (i = s[r], !1 !== i.apply(this, e)); r++);
                    return this
                }
            },
            e.prototype.off = function(t, e) {
                var i, n, s, r, o;
                if (!t) return this._callbacks = {},
                this;
                if (! (n = null != (o = this._callbacks) ? o[t] : void 0)) return this;
                if (!e) return delete this._callbacks[t],
                this;
                for (i = s = 0, r = n.length; r > s; i = ++s) if (n[i] === e) {
                    n = n.slice(),
                    n.splice(i, 1),
                    this._callbacks[t] = n;
                    break
                }
                return this
            },
            e.prototype.bind = function() {
                return this.on.apply(this, arguments)
            },
            e.prototype.unbind = function() {
                return this.off.apply(this, arguments)
            },
            e
        } (),
        s.Xhr2Request = function(t) {
            function n(t, i) {
                this.url = t,
                n.__super__.constructor.apply(this, arguments),
                this.options = e.extend({
                    timeout: 1e4
                },
                i),
                this._prepare()
            }
            return i(n, t),
            n.prototype._prepare = function() {
                var t, e = this;
                return t = !1,
                this._request = new XMLHttpRequest,
                this._request.open("GET", this.url),
                this._request.timeout = this.options.timeout,
                this._request.onloadend = function() {
                    return e.trigger("loadend")
                },
                this._request.onprogress = function(i) {
                    return t || (t = !0, e.totalSize = i.totalSize, e.trigger("firstprogress")),
                    e.loadedSize = i.loaded,
                    e.loadedRatio = e.loadedSize / e.totalSize,
                    e.trigger("progress")
                },
                this._request.ontimeout = function() {
                    return e.options.timeout
                },
                this
            },
            n.prototype.currentLoadedInfo = function() {
                return {
                    totalSize: this.totalSize,
                    loadedSize: this.loadedSize,
                    loadedRatio: this.loadedRatio
                }
            },
            n.prototype.send = function() {
                return this._request.send(),
                this
            },
            n
        } (s.Event),
        s.LoaderItem = function(t) {
            function n(t, e, i) {
                this.src = t,
                this._useXHR2 = null == e || e,
                this._timeout = null != i ? i: 1e4,
                n.__super__.constructor.apply(this, arguments)
            }
            return i(n, t),
            n.prototype.load = function() {
                var t = this;
                return e.Deferred(function(e) {
                    return s.loadImg(t.src, t._useXHR2, t._timeout).progress(function(e) {
                        return t.trigger("progress", e)
                    }).then(function(i) {
                        return t.$img = i,
                        t.trigger("success", t.$img),
                        t.trigger("complete", t.$img),
                        e.resolve(t.$img)
                    },
                    function(i) {
                        return t.$img = i,
                        t.trigger("error", t.$img),
                        t.trigger("complete", t.$img),
                        e.reject(t.$img)
                    })
                })
            },
            n
        } (s.Event),
        s.AbstractLoader = function(t) {
            function e() {
                e.__super__.constructor.apply(this, arguments)
            }
            return i(e, t),
            e.prototype._prepareProgressInfo = function() {
                var t, e;
                return t = this.items || this._presets,
                e = t.length,
                this.progressInfo = {
                    loadedFileCount: 0,
                    totalFileCount: e,
                    loadedRatio: 0
                },
                this.ratioPerItem = 1 / e,
                this
            },
            e.prototype._updateProgressInfo = function(t, e) {
                var i, n;
                return n = this.progressInfo,
                i = e.loadedRatio * this.ratioPerItem,
                n.loadedRatio = n.loadedRatio + i - (t.lastLoadedRatio || 0),
                n.loadedRatio > 1 && (n.loadedRatio = 1),
                t.lastLoadedRatio = i,
                this
            },
            e
        } (s.Event),
        s.BasicLoader = function(n) {
            function r(t, e) {
                this._useXHR2 = null == t || t,
                this._timeout = null != e ? e: 1e4,
                r.__super__.constructor.apply(this, arguments),
                this.items = []
            }
            return i(r, n),
            r.prototype.add = function(t) {
                var i;
                return "string" === e.type(t) && (i = t, t = new s.LoaderItem(i, this._useXHR2, this._timeout)),
                this.items.push(t),
                t
            },
            r.prototype.load = function() {
                var i, n, r = this;
                return this._prepareProgressInfo(),
                n = this.progressInfo,
                i = e.map(this.items,
                function(t) {
                    return t.on("progress",
                    function(e) {
                        return r._updateProgressInfo(t, e),
                        r.trigger("progress", n)
                    }),
                    t.on("complete",
                    function(t) {
                        return n.loadedFileCount += 1,
                        s.support.xhr2 && r._useXHR2 || (n.loadedRatio = n.loadedFileCount / n.totalFileCount, r.trigger("progress", n)),
                        r.trigger("itemload", t, n)
                    }),
                    t.load()
                }),
                e.Deferred(function(s) {
                    return e.when.apply(r, i).always(function() {
                        var i, o;
                        return o = arguments.length >= 1 ? t.call(arguments, 0) : [],
                        i = e(o),
                        n.loadedRatio = 1,
                        r.trigger("progress", n),
                        r.trigger("allload", i, n),
                        s.resolve(i, n)
                    })
                }).promise()
            },
            r.prototype.kill = function() {
                var t, e, i, n;
                for (n = this.items, e = 0, i = n.length; i > e; e++) t = n[e],
                t.off();
                return this.trigger("kill"),
                this.off(),
                this
            },
            r
        } (s.AbstractLoader),
        s.ChainLoader = function(t) {
            function n(t, i, s, r) {
                this._pipesize = t,
                this._delay = null != i ? i: 0,
                this._useXHR2 = s,
                this._timeout = r,
                n.__super__.constructor.apply(this, arguments),
                this._presets = [],
                this._inLoadCount = 0,
                this._allDoneDefer = e.Deferred()
            }
            return i(n, t),
            n.prototype._finished = function() {
                return this.progressInfo.loadedFileCount === this._presets.length
            },
            n.prototype._nextLoadAllowed = function() {
                return this._inLoadCount < this._pipesize
            },
            n.prototype._getImgs = function() {
                return e(e.map(this._presets,
                function(t) {
                    return t.item.$img
                }))
            },
            n.prototype._handleNext = function() {
                var t, i, n = this;
                return i = this.progressInfo,
                this._finished() ? this._allloadFired ? this: (this._allloadFired = !0, t = this._getImgs(), this.trigger("progress", i), this.trigger("allload", t, i), this._allDoneDefer.resolve(t), this) : (e.each(this._presets,
                function(t, e) {
                    var o;
                    return o = e.item,
                    !!e.started || !!n._nextLoadAllowed() && (n._inLoadCount += 1, e.started = !0, o.on("progress",
                    function(t) {
                        return n._updateProgressInfo(o, t),
                        n.trigger("progress", i)
                    }), o.on("complete",
                    function(o) {
                        var a;
                        return e.done = !0,
                        a = function() {
                            return i.loadedFileCount += 1,
                            n._inLoadCount -= 1,
                            s.support.xhr2 && n._useXHR2 || (i.loadedRatio = i.loadedFileCount / i.totalFileCount, n.trigger("progress", i)),
                            n.trigger("itemload", o, i),
                            e.defer.resolve(o),
                            r(n._delay).done(function() {
                                return n._handleNext()
                            })
                        },
                        0 === t ? a() : n._presets[t - 1].defer.always(function() {
                            return a()
                        })
                    }), o.load())
                }), this)
            },
            n.prototype.add = function(t) {
                var i, n;
                return "string" === e.type(t) && (n = t, t = new s.LoaderItem(n, this._useXHR2, this._timeout)),
                i = {
                    item: t,
                    done: !1,
                    started: !1,
                    defer: e.Deferred()
                },
                this._presets.push(i),
                i.defer
            },
            n.prototype.load = function() {
                return this._prepareProgressInfo(),
                this._handleNext(),
                this._allDoneDefer
            },
            n.prototype.kill = function() {
                var t, e, i, n;
                for (n = this._presets, e = 0, i = n.length; i > e; e++) t = n[e],
                t.item.off();
                return this.trigger("kill"),
                this.off(),
                this
            },
            n
        } (s.AbstractLoader),
        s.LoaderFacade = function() {
            function i(t) {
                var i, n, r, o, a;
                for (this.options = i = e.extend({
                    srcs: [],
                    pipesize: 0,
                    delay: 100,
                    timeout: 1e4,
                    useXHR2: !1
                },
                t), this.loader = i.pipesize ? new s.ChainLoader(i.pipesize, i.delay, i.useXHR2, i.timeout) : new s.BasicLoader(i.useXHR2, i.timeout), a = i.srcs, r = 0, o = a.length; o > r; r++) n = a[r],
                this.loader.add(n)
            }
            var n, r, o, a, l;
            for (r = ["bind", "trigger", "on", "off", "load", "one", "unbind", "add", "kill"], o = function(e) {
                return i.prototype[e] = function() {
                    var i;
                    return i = arguments.length >= 1 ? t.call(arguments, 0) : [],
                    this.loader[e].apply(this.loader, i)
                }
            },
            a = 0, l = r.length; l > a; a++) n = r[a],
            o(n);
            return i
        }.call(this),
        e.loadImg = s.loadImg,
        e.loadImgWoCache = s.loadImgWoCache,
        e.ImgLoader = s.LoaderFacade,
        e.calcNaturalWH = s.calcNaturalWH,
        e.calcRectFitImgWH = s.calcRectFitImgWH
    } (jQuery, this, this.document)
}.call(this);
var Video; !
function() {
    Video = function(t, e) {
        var i, n, s = {
            loop: e.loop || !1,
            autoplay: e.autoplay || !1,
            objectFit: e.objectFit ? e.objectFit: "cover",
            chunkSize: 1024 * e.chunkSize || 524288
        },
        r = navigator.userAgent.toLowerCase(),
        o = r.indexOf("micromessenger") > -1,
        a = r.indexOf("android") > -1 || r.indexOf("linux") > -1;
        o && a ? (this.useTs = !0, n = document.createElement("canvas"), "fill" !== s.objectFit && (n.style.width = "100%", n.style.height = "100%", n.style.objectFit = s.objectFit), i = new JSMpeg.Player(t.replace(".mp4", ".ts"), {
            canvas: n,
            loop: s.loop || !1,
            autoplay: s.autoplay || !1,
            chunkSize: s.chunkSize
        })) : (i = document.createElement("video"), i.setAttribute("x5-video-player-type", "h5"), i.setAttribute("x-webkit-airplay", "true"), i.setAttribute("airplay", "allow"), i.setAttribute("playsinline", ""), i.setAttribute("webkit-playsinline", ""), i.controls = !1, s.autoplay && i.setAttribute("autoplay", "true"), s.loop && i.setAttribute("loop", "true"), i.setAttribute("src", t), "fill" !== s.objectFit && (i.style.width = "100%", i.style.height = "100%", i.style.objectFit = s.objectFit), i.webkitExitFullScreen(), i.addEventListener("webkitbeginfullscreen",
        function(t) {
            i.webkitExitFullScreen()
        }), n = i),
        this.totalTime = e.totalTime,
        this.video = i,
        this.domElement = n,
        this._Event = {},
        this._Temp = {},
        Object.defineProperty(this, "paused", {
            get: this.getPlayStatus
        }),
        Object.defineProperty(this, "currentTime", {
            get: this.getCurrentTime,
            set: this.setCurrentTime
        }),
        Object.defineProperty(this, "muted", {
            get: this.getMuted,
            set: this.setMuted
        })
    },
    Video.prototype = {
        load: function() {
            this.useTs || this.video.load()
        },
        play: function() {
            this.useTs && this._Temp.ended && (this.video.currentTime = 0),
            this.video.play()
        },
        pause: function() {
            this.video.pause()
        },
        stop: function() {
            this.useTs ? this.video.stop() : (this.video.currentTime = 0, this.video.pause())
        },
        destroy: function() {
            this.useTs && (this.animationFrame && cancelAnimationFrame(this.animationFrame), console.log(this.animationFrame), this.video.destroy())
        },
        getMuted: function() {
            return this.useTs ? !this.video.volume: this.video.muted
        },
        setMuted: function(t) {
            this.useTs ? this.video.volume = t ? 0 : 1 : this.video.muted = t
        },
        getCurrentTime: function() {
            return this.video.currentTime
        },
        setCurrentTime: function(t) {
            this.video.currentTime = t
        },
        getPlayStatus: function() {
            return this.useTs ? this.video.isPlaying: !this.video.paused
        },
        _loop: function() {
            this.animationFrame = requestAnimationFrame(this._loop.bind(this));
            var t = this;
            if (this.video.isPlaying) {
                if (this._Temp.pause = !1, this._Temp.ended = !1, this._Event.timeupdate) for (var e in this._Event.timeupdate) t._Event.timeupdate[e]();
                if (this._Event.play && !this._Temp.play) {
                    this._Temp.play = !0;
                    for (var i in this._Event.play) t._Event.play[i]()
                }
            } else if (this.video.currentTime >= this.totalTime) {
                if (0 !== this.video.currentTime && !this._Temp.ended) {
                    if (this._Temp.pause = !0, this._Temp.ended = !0, this._Event.pause) for (var n in this._Event.pause) t._Event.pause[n]();
                    if (this._Event.ended) for (var s in this._Event.ended) t._Event.ended[s]()
                }
            } else if (0 !== this.video.currentTime && !this._Temp.pause && (this._Temp.pause = !0, this._Event.pause)) for (var n in this._Event.pause) t._Event.pause[n]()
        },
        addEventListener: function(t, e) {
            var i = this;
            this.useTs ? (this._Event[t] || (this._Event[t] = {}), this._Event[t][e + ""] = e, this.animationFrame = requestAnimationFrame(this._loop.bind(this))) : i.video.addEventListener(t, e)
        },
        removeEventListener: function(t, e) {
            var i = this;
            this.useTs ? (delete i._Event[t][e + ""], 0 === Object.getOwnPropertyNames(i._Event[t]).length && delete i._Event[t], i._Event.play || i._Event.timeupdate || i._Event.pause || i._Event.ended || i.animationFrame && cancelAnimationFrame(i.animationFrame)) : i.video.removeEventListener("type", e)
        }
    }
} ();
var utils; !
function() {
    utils = {
        isAndroid: function() {
            var t = window.navigator.userAgent.toLowerCase();
            try {
                return t.indexOf("android") > -1 || t.indexOf("linux") > -1
            } catch(t) {
                return ! 1
            }
        } (),
        webgl: function() {
            try {
                return !! window.WebGLRenderingContext && !!document.createElement("canvas").getContext("experimental-webgl")
            } catch(t) {
                return ! 1
            }
        } (),
        isWeixin: function() {
            var t = window.navigator.userAgent.toLowerCase();
            try {
                return "micromessenger" == t.match(/MicroMessenger/i)
            } catch(t) {
                return ! 1
            }
        } (),
        path: function() {
            for (var t = document.location.href.toString(), e = t.split("/"), i = e[0] + "//", n = 2; n < e.length - 1; n++) i += e[n] + "/";
            return i
        } (),
        getQueryString: function(t) {
            var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
            i = window.location.search.substr(1).match(e);
            return null != i ? decodeURI(i[2]) : null
        },
        getImageWidth: function(t, e) {
            var i = new Image;
            i.src = t,
            i.complete ? e(i.width, i.height) : i.onload = function() {
                e(i.width, i.height)
            }
        },
        pad: function(t, e) {
            for (var i = t.toString().length; i < e;) t = "0" + t,
            i++;
            return t
        },
        randomInt: function(t, e) {
            return Math.floor(Math.random() * (e - t + 1) + t)
        }
    }
} (),
function(t, e, i) {
    function n(i, n) {
        this.wrapper = "string" == typeof i ? e.querySelector(i) : i,
        this.scroller = this.wrapper.children[0],
        this.scrollerStyle = this.scroller.style,
        this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            disablePointer: !a.hasPointer,
            disableTouch: a.hasPointer || !a.hasTouch,
            disableMouse: a.hasPointer || a.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: void 0 === t.onmousedown
        };
        for (var s in n) this.options[s] = n[s];
        this.translateZ = this.options.HWCompositing && a.hasPerspective ? " translateZ(0)": "",
        this.options.useTransition = a.hasTransition && this.options.useTransition,
        this.options.useTransform = a.hasTransform && this.options.useTransform,
        this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical": this.options.eventPassthrough,
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
        this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY,
        this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX,
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
        this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? a.ease[this.options.bounceEasing] || a.ease.circular: this.options.bounceEasing,
        this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
        !0 === this.options.tap && (this.options.tap = "tap"),
        this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"),
        "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1,
        this.x = 0,
        this.y = 0,
        this.directionX = 0,
        this.directionY = 0,
        this._events = {},
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable()
    }
    function s(t, i, n) {
        var s = e.createElement("div"),
        r = e.createElement("div");
        return ! 0 === n && (s.style.cssText = "position:absolute;z-index:9999", r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),
        r.className = "iScrollIndicator",
        "h" == t ? (!0 === n && (s.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", r.style.height = "100%"), s.className = "iScrollHorizontalScrollbar") : (!0 === n && (s.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", r.style.width = "100%"), s.className = "iScrollVerticalScrollbar"),
        s.style.cssText += ";overflow:hidden",
        i || (s.style.pointerEvents = "none"),
        s.appendChild(r),
        s
    }
    function r(i, n) {
        this.wrapper = "string" == typeof n.el ? e.querySelector(n.el) : n.el,
        this.wrapperStyle = this.wrapper.style,
        this.indicator = this.wrapper.children[0],
        this.indicatorStyle = this.indicator.style,
        this.scroller = i,
        this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var s in n) this.options[s] = n[s];
        if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (a.addEvent(this.indicator, "touchstart", this), a.addEvent(t, "touchend", this)), this.options.disablePointer || (a.addEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.addEvent(t, a.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (a.addEvent(this.indicator, "mousedown", this), a.addEvent(t, "mouseup", this))), this.options.fade) {
            this.wrapperStyle[a.style.transform] = this.scroller.translateZ;
            var r = a.style.transitionDuration;
            if (!r) return;
            this.wrapperStyle[r] = a.isBadAndroid ? "0.0001ms": "0ms";
            var l = this;
            a.isBadAndroid && o(function() {
                "0.0001ms" === l.wrapperStyle[r] && (l.wrapperStyle[r] = "0s")
            }),
            this.wrapperStyle.opacity = "0"
        }
    }
    var o = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame ||
    function(e) {
        t.setTimeout(e, 1e3 / 60)
    },
    a = function() {
        function n(t) {
            return ! 1 !== o && ("" === o ? t: o + t.charAt(0).toUpperCase() + t.substr(1))
        }
        var s = {},
        r = e.createElement("div").style,
        o = function() {
            for (var t = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, i = t.length; e < i; e++) if (t[e] + "ransform" in r) return t[e].substr(0, t[e].length - 1);
            return ! 1
        } ();
        s.getTime = Date.now ||
        function() {
            return (new Date).getTime()
        },
        s.extend = function(t, e) {
            for (var i in e) t[i] = e[i]
        },
        s.addEvent = function(t, e, i, n) {
            t.addEventListener(e, i, !!n)
        },
        s.removeEvent = function(t, e, i, n) {
            t.removeEventListener(e, i, !!n)
        },
        s.prefixPointerEvent = function(e) {
            return t.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e
        },
        s.momentum = function(t, e, n, s, r, o) {
            var a, l, h = t - e,
            c = i.abs(h) / n;
            return o = void 0 === o ? 6e-4: o,
            a = t + c * c / (2 * o) * (h < 0 ? -1 : 1),
            l = c / o,
            a < s ? (a = r ? s - r / 2.5 * (c / 8) : s, h = i.abs(a - t), l = h / c) : a > 0 && (a = r ? r / 2.5 * (c / 8) : 0, h = i.abs(t) + a, l = h / c),
            {
                destination: i.round(a),
                duration: l
            }
        };
        var a = n("transform");
        return s.extend(s, {
            hasTransform: !1 !== a,
            hasPerspective: n("perspective") in r,
            hasTouch: "ontouchstart" in t,
            hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
            hasTransition: n("transition") in r
        }),
        s.isBadAndroid = function() {
            var e = t.navigator.appVersion;
            if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {
                var i = e.match(/Safari\/(\d+.\d)/);
                return ! (i && "object" == typeof i && i.length >= 2) || parseFloat(i[1]) < 535.19
            }
            return ! 1
        } (),
        s.extend(s.style = {},
        {
            transform: a,
            transitionTimingFunction: n("transitionTimingFunction"),
            transitionDuration: n("transitionDuration"),
            transitionDelay: n("transitionDelay"),
            transformOrigin: n("transformOrigin"),
            touchAction: n("touchAction")
        }),
        s.hasClass = function(t, e) {
            return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
        },
        s.addClass = function(t, e) {
            if (!s.hasClass(t, e)) {
                var i = t.className.split(" ");
                i.push(e),
                t.className = i.join(" ")
            }
        },
        s.removeClass = function(t, e) {
            if (s.hasClass(t, e)) {
                var i = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
                t.className = t.className.replace(i, " ")
            }
        },
        s.offset = function(t) {
            for (var e = -t.offsetLeft,
            i = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft,
            i -= t.offsetTop;
            return {
                left: e,
                top: i
            }
        },
        s.preventDefaultException = function(t, e) {
            for (var i in e) if (e[i].test(t[i])) return ! 0;
            return ! 1
        },
        s.extend(s.eventType = {},
        {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }),
        s.extend(s.ease = {},
        {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(t) {
                    return t * (2 - t)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function(t) {
                    return i.sqrt(1 - --t * t)
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function(t) {
                    return (t -= 1) * t * (5 * t + 4) + 1
                }
            },
            bounce: {
                style: "",
                fn: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t: t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }
            },
            elastic: {
                style: "",
                fn: function(t) {
                    return 0 === t ? 0 : 1 == t ? 1 : .4 * i.pow(2, -10 * t) * i.sin((t - .055) * (2 * i.PI) / .22) + 1
                }
            }
        }),
        s.tap = function(t, i) {
            var n = e.createEvent("Event");
            n.initEvent(i, !0, !0),
            n.pageX = t.pageX,
            n.pageY = t.pageY,
            t.target.dispatchEvent(n)
        },
        s.click = function(i) {
            var n, s = i.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(s.tagName) || (n = e.createEvent(t.MouseEvent ? "MouseEvents": "Event"), n.initEvent("click", !0, !0), n.view = i.view || t, n.detail = 1, n.screenX = s.screenX || 0, n.screenY = s.screenY || 0, n.clientX = s.clientX || 0, n.clientY = s.clientY || 0, n.ctrlKey = !!i.ctrlKey, n.altKey = !!i.altKey, n.shiftKey = !!i.shiftKey, n.metaKey = !!i.metaKey, n.button = 0, n.relatedTarget = null, n._constructed = !0, s.dispatchEvent(n))
        },
        s.getTouchAction = function(t, e) {
            var i = "none";
            return "vertical" === t ? i = "pan-y": "horizontal" === t && (i = "pan-x"),
            e && "none" != i && (i += " pinch-zoom"),
            i
        },
        s.getRect = function(t) {
            if (t instanceof SVGElement) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top,
                    left: e.left,
                    width: e.width,
                    height: e.height
                }
            }
            return {
                top: t.offsetTop,
                left: t.offsetLeft,
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        },
        s
    } ();
    n.prototype = {
        version: "5.2.0-snapshot",
        _init: function() {
            this._initEvents(),
            (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
            this.options.mouseWheel && this._initWheel(),
            this.options.snap && this._initSnap(),
            this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0),
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = null,
            this._execEvent("destroy")
        },
        _transitionEnd: function(t) {
            t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        },
        _start: function(t) {
            if (1 != a.eventType[t.type]) {
                if (0 !== (t.which ? t.button: t.button < 2 ? 0 : 4 == t.button ? 1 : 2)) return
            }
            if (this.enabled && (!this.initiated || a.eventType[t.type] === this.initiated)) { ! this.options.preventDefault || a.isBadAndroid || a.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                var e, n = t.touches ? t.touches[0] : t;
                this.initiated = a.eventType[t.type],
                this.moved = !1,
                this.distX = 0,
                this.distY = 0,
                this.directionX = 0,
                this.directionY = 0,
                this.directionLocked = 0,
                this.startTime = a.getTime(),
                this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, e = this.getComputedPosition(), this._translate(i.round(e.x), i.round(e.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")),
                this.startX = this.x,
                this.startY = this.y,
                this.absStartX = this.x,
                this.absStartY = this.y,
                this.pointX = n.pageX,
                this.pointY = n.pageY,
                this._execEvent("beforeScrollStart")
            }
        },
        _move: function(t) {
            if (this.enabled && a.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var e, n, s, r, o = t.touches ? t.touches[0] : t,
                l = o.pageX - this.pointX,
                h = o.pageY - this.pointY,
                c = a.getTime();
                if (this.pointX = o.pageX, this.pointY = o.pageY, this.distX += l, this.distY += h, s = i.abs(this.distX), r = i.abs(this.distY), !(c - this.endTime > 300 && s < 10 && r < 10)) {
                    if (this.directionLocked || this.options.freeScroll || (s > r + this.options.directionLockThreshold ? this.directionLocked = "h": r >= s + this.options.directionLockThreshold ? this.directionLocked = "v": this.directionLocked = "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                        h = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                        l = 0
                    }
                    l = this.hasHorizontalScroll ? l: 0,
                    h = this.hasVerticalScroll ? h: 0,
                    e = this.x + l,
                    n = this.y + h,
                    (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + l / 3 : e > 0 ? 0 : this.maxScrollX),
                    (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + h / 3 : n > 0 ? 0 : this.maxScrollY),
                    this.directionX = l > 0 ? -1 : l < 0 ? 1 : 0,
                    this.directionY = h > 0 ? -1 : h < 0 ? 1 : 0,
                    this.moved || this._execEvent("scrollStart"),
                    this.moved = !0,
                    this._translate(e, n),
                    c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
                }
            }
        },
        _end: function(t) {
            if (this.enabled && a.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !a.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                var e, n, s = (t.changedTouches && t.changedTouches[0], a.getTime() - this.startTime),
                r = i.round(this.x),
                o = i.round(this.y),
                l = i.abs(r - this.startX),
                h = i.abs(o - this.startY),
                c = 0,
                u = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = a.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(r, o), !this.moved) return this.options.tap && a.tap(t, this.options.tap),
                    this.options.click && a.click(t),
                    void this._execEvent("scrollCancel");
                    if (this._events.flick && s < 200 && l < 100 && h < 100) return void this._execEvent("flick");
                    if (this.options.momentum && s < 300 && (e = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, s, this.maxScrollX, this.options.bounce ? this.wrapperWidth: 0, this.options.deceleration) : {
                        destination: r,
                        duration: 0
                    },
                    n = this.hasVerticalScroll ? a.momentum(this.y, this.startY, s, this.maxScrollY, this.options.bounce ? this.wrapperHeight: 0, this.options.deceleration) : {
                        destination: o,
                        duration: 0
                    },
                    r = e.destination, o = n.destination, c = i.max(e.duration, n.duration), this.isInTransition = 1), this.options.snap) {
                        var d = this._nearestSnap(r, o);
                        this.currentPage = d,
                        c = this.options.snapSpeed || i.max(i.max(i.min(i.abs(r - d.x), 1e3), i.min(i.abs(o - d.y), 1e3)), 300),
                        r = d.x,
                        o = d.y,
                        this.directionX = 0,
                        this.directionY = 0,
                        u = this.options.bounceEasing
                    }
                    if (r != this.x || o != this.y) return (r > 0 || r < this.maxScrollX || o > 0 || o < this.maxScrollY) && (u = a.ease.quadratic),
                    void this.scrollTo(r, o, c, u);
                    this._execEvent("scrollEnd")
                }
            }
        },
        _resize: function() {
            var t = this;
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout(function() {
                t.refresh()
            },
            this.options.resizePolling)
        },
        resetPosition: function(t) {
            var e = this.x,
            i = this.y;
            return t = t || 0,
            !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX),
            !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY),
            (e != this.x || i != this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            a.getRect(this.wrapper),
            this.wrapperWidth = this.wrapper.clientWidth,
            this.wrapperHeight = this.wrapper.clientHeight;
            var t = a.getRect(this.scroller);
            this.scrollerWidth = t.width,
            this.scrollerHeight = t.height,
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
            this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight),
            this.endTime = 0,
            this.directionX = 0,
            this.directionY = 0,
            a.hasPointer && !this.options.disablePointer && (this.wrapper.style[a.style.touchAction] = a.getTouchAction(this.options.eventPassthrough, !0), this.wrapper.style[a.style.touchAction] || (this.wrapper.style[a.style.touchAction] = a.getTouchAction(this.options.eventPassthrough, !1))),
            this.wrapperOffset = a.offset(this.wrapper),
            this._execEvent("refresh"),
            this.resetPosition()
        },
        on: function(t, e) {
            this._events[t] || (this._events[t] = []),
            this._events[t].push(e)
        },
        off: function(t, e) {
            if (this._events[t]) {
                var i = this._events[t].indexOf(e);
                i > -1 && this._events[t].splice(i, 1)
            }
        },
        _execEvent: function(t) {
            if (this._events[t]) {
                var e = 0,
                i = this._events[t].length;
                if (i) for (; e < i; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(t, e, i, n) {
            t = this.x + t,
            e = this.y + e,
            i = i || 0,
            this.scrollTo(t, e, i, n)
        },
        scrollTo: function(t, e, i, n) {
            n = n || a.ease.circular,
            this.isInTransition = this.options.useTransition && i > 0;
            var s = this.options.useTransition && n.style; ! i || s ? (s && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(t, e)) : this._animate(t, e, i, n.fn)
        },
        scrollToElement: function(t, e, n, s, r) {
            if (t = t.nodeType ? t: this.scroller.querySelector(t)) {
                var o = a.offset(t);
                o.left -= this.wrapperOffset.left,
                o.top -= this.wrapperOffset.top;
                var l = a.getRect(t),
                h = a.getRect(this.wrapper); ! 0 === n && (n = i.round(l.width / 2 - h.width / 2)),
                !0 === s && (s = i.round(l.height / 2 - h.height / 2)),
                o.left -= n || 0,
                o.top -= s || 0,
                o.left = o.left > 0 ? 0 : o.left < this.maxScrollX ? this.maxScrollX: o.left,
                o.top = o.top > 0 ? 0 : o.top < this.maxScrollY ? this.maxScrollY: o.top,
                e = void 0 === e || null === e || "auto" === e ? i.max(i.abs(this.x - o.left), i.abs(this.y - o.top)) : e,
                this.scrollTo(o.left, o.top, e, r)
            }
        },
        _transitionTime: function(t) {
            if (this.options.useTransition) {
                t = t || 0;
                var e = a.style.transitionDuration;
                if (e) {
                    if (this.scrollerStyle[e] = t + "ms", !t && a.isBadAndroid) {
                        this.scrollerStyle[e] = "0.0001ms";
                        var i = this;
                        o(function() {
                            "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s")
                        })
                    }
                    if (this.indicators) for (var n = this.indicators.length; n--;) this.indicators[n].transitionTime(t)
                }
            }
        },
        _transitionTimingFunction: function(t) {
            if (this.scrollerStyle[a.style.transitionTimingFunction] = t, this.indicators) for (var e = this.indicators.length; e--;) this.indicators[e].transitionTimingFunction(t)
        },
        _translate: function(t, e) {
            if (this.options.useTransform ? this.scrollerStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ: (t = i.round(t), e = i.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicators) for (var n = this.indicators.length; n--;) this.indicators[n].updatePosition()
        },
        _initEvents: function(e) {
            var i = e ? a.removeEvent: a.addEvent,
            n = this.options.bindToWrapper ? this.wrapper: t;
            i(t, "orientationchange", this),
            i(t, "resize", this),
            this.options.click && i(this.wrapper, "click", this, !0),
            this.options.disableMouse || (i(this.wrapper, "mousedown", this), i(n, "mousemove", this), i(n, "mousecancel", this), i(n, "mouseup", this)),
            a.hasPointer && !this.options.disablePointer && (i(this.wrapper, a.prefixPointerEvent("pointerdown"), this), i(n, a.prefixPointerEvent("pointermove"), this), i(n, a.prefixPointerEvent("pointercancel"), this), i(n, a.prefixPointerEvent("pointerup"), this)),
            a.hasTouch && !this.options.disableTouch && (i(this.wrapper, "touchstart", this), i(n, "touchmove", this), i(n, "touchcancel", this), i(n, "touchend", this)),
            i(this.scroller, "transitionend", this),
            i(this.scroller, "webkitTransitionEnd", this),
            i(this.scroller, "oTransitionEnd", this),
            i(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var e, i, n = t.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (n = n[a.style.transform].split(")")[0].split(", "), e = +(n[12] || n[4]), i = +(n[13] || n[5])) : (e = +n.left.replace(/[^-\d.]/g, ""), i = +n.top.replace(/[^-\d.]/g, "")),
            {
                x: e,
                y: i
            }
        },
        _initIndicators: function() {
            function t(t) {
                if (a.indicators) for (var e = a.indicators.length; e--;) t.call(a.indicators[e])
            }
            var e, i = this.options.interactiveScrollbars,
            n = "string" != typeof this.options.scrollbars,
            o = [],
            a = this;
            this.indicators = [],
            this.options.scrollbars && (this.options.scrollY && (e = {
                el: s("v", i, this.options.scrollbars),
                interactive: i,
                defaultScrollbars: !0,
                customStyle: n,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            },
            this.wrapper.appendChild(e.el), o.push(e)), this.options.scrollX && (e = {
                el: s("h", i, this.options.scrollbars),
                interactive: i,
                defaultScrollbars: !0,
                customStyle: n,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            },
            this.wrapper.appendChild(e.el), o.push(e))),
            this.options.indicators && (o = o.concat(this.options.indicators));
            for (var l = o.length; l--;) this.indicators.push(new r(this, o[l]));
            this.options.fadeScrollbars && (this.on("scrollEnd",
            function() {
                t(function() {
                    this.fade()
                })
            }), this.on("scrollCancel",
            function() {
                t(function() {
                    this.fade()
                })
            }), this.on("scrollStart",
            function() {
                t(function() {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart",
            function() {
                t(function() {
                    this.fade(1, !0)
                })
            })),
            this.on("refresh",
            function() {
                t(function() {
                    this.refresh()
                })
            }),
            this.on("destroy",
            function() {
                t(function() {
                    this.destroy()
                }),
                delete this.indicators
            })
        },
        _initWheel: function() {
            a.addEvent(this.wrapper, "wheel", this),
            a.addEvent(this.wrapper, "mousewheel", this),
            a.addEvent(this.wrapper, "DOMMouseScroll", this),
            this.on("destroy",
            function() {
                clearTimeout(this.wheelTimeout),
                this.wheelTimeout = null,
                a.removeEvent(this.wrapper, "wheel", this),
                a.removeEvent(this.wrapper, "mousewheel", this),
                a.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(t) {
            if (this.enabled) {
                t.preventDefault();
                var e, n, s, r, o = this;
                if (void 0 === this.wheelTimeout && o._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                    o.options.snap || o._execEvent("scrollEnd"),
                    o.wheelTimeout = void 0
                },
                400), "deltaX" in t) 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, n = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, n = -t.deltaY);
                else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
                n = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta" in t) e = n = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (! ("detail" in t)) return;
                    e = n = -t.detail / 3 * this.options.mouseWheelSpeed
                }
                if (e *= this.options.invertWheelDirection, n *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = n, n = 0), this.options.snap) return s = this.currentPage.pageX,
                r = this.currentPage.pageY,
                e > 0 ? s--:e < 0 && s++,
                n > 0 ? r--:n < 0 && r++,
                void this.goToPage(s, r);
                s = this.x + i.round(this.hasHorizontalScroll ? e: 0),
                r = this.y + i.round(this.hasVerticalScroll ? n: 0),
                this.directionX = e > 0 ? -1 : e < 0 ? 1 : 0,
                this.directionY = n > 0 ? -1 : n < 0 ? 1 : 0,
                s > 0 ? s = 0 : s < this.maxScrollX && (s = this.maxScrollX),
                r > 0 ? r = 0 : r < this.maxScrollY && (r = this.maxScrollY),
                this.scrollTo(s, r, 0)
            }
        },
        _initSnap: function() {
            this.currentPage = {},
            "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
            this.on("refresh",
            function() {
                var t, e, n, s, r, o, l, h = 0,
                c = 0,
                u = 0,
                d = this.options.snapStepX || this.wrapperWidth,
                p = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (!0 === this.options.snap) for (n = i.round(d / 2), s = i.round(p / 2); u > -this.scrollerWidth;) {
                        for (this.pages[h] = [], t = 0, r = 0; r > -this.scrollerHeight;) this.pages[h][t] = {
                            x: i.max(u, this.maxScrollX),
                            y: i.max(r, this.maxScrollY),
                            width: d,
                            height: p,
                            cx: u - n,
                            cy: r - s
                        },
                        r -= p,
                        t++;
                        u -= d,
                        h++
                    } else for (o = this.options.snap, t = o.length, e = -1; h < t; h++) l = a.getRect(o[h]),
                    (0 === h || l.left <= a.getRect(o[h - 1]).left) && (c = 0, e++),
                    this.pages[c] || (this.pages[c] = []),
                    u = i.max( - l.left, this.maxScrollX),
                    r = i.max( - l.top, this.maxScrollY),
                    n = u - i.round(l.width / 2),
                    s = r - i.round(l.height / 2),
                    this.pages[c][e] = {
                        x: u,
                        y: r,
                        width: l.width,
                        height: l.height,
                        cx: n,
                        cy: s
                    },
                    u > this.maxScrollX && c++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                    this.options.snapThreshold % 1 == 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }),
            this.on("flick",
            function() {
                var t = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.x - this.startX), 1e3), i.min(i.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
            })
        },
        _nearestSnap: function(t, e) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var n = 0,
            s = this.pages.length,
            r = 0;
            if (i.abs(t - this.absStartX) < this.snapThresholdX && i.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
            for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); n < s; n++) if (t >= this.pages[n][0].cx) {
                t = this.pages[n][0].x;
                break
            }
            for (s = this.pages[n].length; r < s; r++) if (e >= this.pages[0][r].cy) {
                e = this.pages[0][r].y;
                break
            }
            return n == this.currentPage.pageX && (n += this.directionX, n < 0 ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1), t = this.pages[n][0].x),
            r == this.currentPage.pageY && (r += this.directionY, r < 0 ? r = 0 : r >= this.pages[0].length && (r = this.pages[0].length - 1), e = this.pages[0][r].y),
            {
                x: t,
                y: e,
                pageX: n,
                pageY: r
            }
        },
        goToPage: function(t, e, n, s) {
            s = s || this.options.bounceEasing,
            t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0),
            e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
            var r = this.pages[t][e].x,
            o = this.pages[t][e].y;
            n = void 0 === n ? this.options.snapSpeed || i.max(i.max(i.min(i.abs(r - this.x), 1e3), i.min(i.abs(o - this.y), 1e3)), 300) : n,
            this.currentPage = {
                x: r,
                y: o,
                pageX: t,
                pageY: e
            },
            this.scrollTo(r, o, n, s)
        },
        next: function(t, e) {
            var i = this.currentPage.pageX,
            n = this.currentPage.pageY;
            i++,
            i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++),
            this.goToPage(i, n, t, e)
        },
        prev: function(t, e) {
            var i = this.currentPage.pageX,
            n = this.currentPage.pageY;
            i--,
            i < 0 && this.hasVerticalScroll && (i = 0, n--),
            this.goToPage(i, n, t, e)
        },
        _initKeys: function(e) {
            var i, n = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == typeof this.options.keyBindings) for (i in this.options.keyBindings)"string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (i in n) this.options.keyBindings[i] = this.options.keyBindings[i] || n[i];
            a.addEvent(t, "keydown", this),
            this.on("destroy",
            function() {
                a.removeEvent(t, "keydown", this)
            })
        },
        _key: function(t) {
            if (this.enabled) {
                var e, n = this.options.snap,
                s = n ? this.currentPage.pageX: this.x,
                r = n ? this.currentPage.pageY: this.y,
                o = a.getTime(),
                l = this.keyTime || 0;
                switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(i.round(e.x), i.round(e.y)), this.isInTransition = !1), this.keyAcceleration = o - l < 200 ? i.min(this.keyAcceleration + .25, 50) : 0, t.keyCode) {
                case this.options.keyBindings.pageUp:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? s += n ? 1 : this.wrapperWidth: r += n ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.pageDown:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? s -= n ? 1 : this.wrapperWidth: r -= n ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.end:
                    s = n ? this.pages.length - 1 : this.maxScrollX,
                    r = n ? this.pages[0].length - 1 : this.maxScrollY;
                    break;
                case this.options.keyBindings.home:
                    s = 0,
                    r = 0;
                    break;
                case this.options.keyBindings.left:
                    s += n ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.up:
                    r += n ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.right:
                    s -= n ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.down:
                    r -= n ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                default:
                    return
                }
                if (n) return void this.goToPage(s, r);
                s > 0 ? (s = 0, this.keyAcceleration = 0) : s < this.maxScrollX && (s = this.maxScrollX, this.keyAcceleration = 0),
                r > 0 ? (r = 0, this.keyAcceleration = 0) : r < this.maxScrollY && (r = this.maxScrollY, this.keyAcceleration = 0),
                this.scrollTo(s, r, 0),
                this.keyTime = o
            }
        },
        _animate: function(t, e, i, n) {
            function s() {
                var d, p, f, m = a.getTime();
                if (m >= u) return r.isAnimating = !1,
                r._translate(t, e),
                void(r.resetPosition(r.options.bounceTime) || r._execEvent("scrollEnd"));
                m = (m - c) / i,
                f = n(m),
                d = (t - l) * f + l,
                p = (e - h) * f + h,
                r._translate(d, p),
                r.isAnimating && o(s)
            }
            var r = this,
            l = this.x,
            h = this.y,
            c = a.getTime(),
            u = c + i;
            this.isAnimating = !0,
            s()
        },
        handleEvent: function(t) {
            switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(t);
                break;
            case "orientationchange":
            case "resize":
                this._resize();
                break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
                this._transitionEnd(t);
                break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
                this._wheel(t);
                break;
            case "keydown":
                this._key(t);
                break;
            case "click":
                this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation())
            }
        }
    },
    r.prototype = {
        handleEvent: function(t) {
            switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(t)
            }
        },
        destroy: function() {
            this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null),
            this.options.interactive && (a.removeEvent(this.indicator, "touchstart", this), a.removeEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.removeEvent(this.indicator, "mousedown", this), a.removeEvent(t, "touchmove", this), a.removeEvent(t, a.prefixPointerEvent("pointermove"), this), a.removeEvent(t, "mousemove", this), a.removeEvent(t, "touchend", this), a.removeEvent(t, a.prefixPointerEvent("pointerup"), this), a.removeEvent(t, "mouseup", this)),
            this.options.defaultScrollbars && this.wrapper.parentNode && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(e) {
            var i = e.touches ? e.touches[0] : e;
            e.preventDefault(),
            e.stopPropagation(),
            this.transitionTime(),
            this.initiated = !0,
            this.moved = !1,
            this.lastPointX = i.pageX,
            this.lastPointY = i.pageY,
            this.startTime = a.getTime(),
            this.options.disableTouch || a.addEvent(t, "touchmove", this),
            this.options.disablePointer || a.addEvent(t, a.prefixPointerEvent("pointermove"), this),
            this.options.disableMouse || a.addEvent(t, "mousemove", this),
            this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(t) {
            var e, i, n, s, r = t.touches ? t.touches[0] : t;
            a.getTime();
            this.moved || this.scroller._execEvent("scrollStart"),
            this.moved = !0,
            e = r.pageX - this.lastPointX,
            this.lastPointX = r.pageX,
            i = r.pageY - this.lastPointY,
            this.lastPointY = r.pageY,
            n = this.x + e,
            s = this.y + i,
            this._pos(n, s),
            t.preventDefault(),
            t.stopPropagation()
        },
        _end: function(e) {
            if (this.initiated) {
                if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), a.removeEvent(t, "touchmove", this), a.removeEvent(t, a.prefixPointerEvent("pointermove"), this), a.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
                    var n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                    s = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.scroller.x - n.x), 1e3), i.min(i.abs(this.scroller.y - n.y), 1e3)), 300);
                    this.scroller.x == n.x && this.scroller.y == n.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = n, this.scroller.scrollTo(n.x, n.y, s, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function(t) {
            t = t || 0;
            var e = a.style.transitionDuration;
            if (e && (this.indicatorStyle[e] = t + "ms", !t && a.isBadAndroid)) {
                this.indicatorStyle[e] = "0.0001ms";
                var i = this;
                o(function() {
                    "0.0001ms" === i.indicatorStyle[e] && (i.indicatorStyle[e] = "0s")
                })
            }
        },
        transitionTimingFunction: function(t) {
            this.indicatorStyle[a.style.transitionTimingFunction] = t
        },
        refresh: function() {
            this.transitionTime(),
            this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block": "none": this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block": "none": this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block": "none",
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (a.addClass(this.wrapper, "iScrollBothScrollbars"), a.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px": this.wrapper.style.bottom = "8px")) : (a.removeClass(this.wrapper, "iScrollBothScrollbars"), a.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px": this.wrapper.style.bottom = "2px")),
            a.getRect(this.wrapper),
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = i.max(i.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
            this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = i.max(i.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
            this.updatePosition()
        },
        updatePosition: function() {
            var t = this.options.listenX && i.round(this.sizeRatioX * this.scroller.x) || 0,
            e = this.options.listenY && i.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = i.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = i.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX: "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = i.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = i.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY: "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")),
            this.x = t,
            this.y = e,
            this.scroller.options.useTransform ? this.indicatorStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ: (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
        },
        _pos: function(t, e) {
            t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX),
            e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY),
            t = this.options.listenX ? i.round(t / this.sizeRatioX) : this.scroller.x,
            e = this.options.listenY ? i.round(e / this.sizeRatioY) : this.scroller.y,
            this.scroller.scrollTo(t, e)
        },
        fade: function(t, e) {
            if (!e || this.visible) {
                clearTimeout(this.fadeTimeout),
                this.fadeTimeout = null;
                var i = t ? 250 : 500,
                n = t ? 0 : 300;
                t = t ? "1": "0",
                this.wrapperStyle[a.style.transitionDuration] = i + "ms",
                this.fadeTimeout = setTimeout(function(t) {
                    this.wrapperStyle.opacity = t,
                    this.visible = +t
                }.bind(this, t), n)
            }
        }
    },
    n.utils = a,
    "undefined" != typeof module && module.exports ? module.exports = n: "function" == typeof define && define.amd ? define(function() {
        return n
    }) : t.IScroll = n
} (window, document, Math),
function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e(t, !0) : "function" == typeof define && define.amd ? define("vFramePlayer", [],
    function() {
        return e(t)
    }) : t.vFramePlayer = e(t)
} ("undefined" != typeof window ? window: this,
function(t, e) {
    "use strict";
    var i = function(t) {
        if (t) {
            this.dom = t.dom,
            this.startFrame = 0,
            this.endFrame = t.imgArr.length - 1,
            this.curFrame = 0,
            this.prevFrame = 0,
            this.fps = t.fps || 25,
            this.useCanvas = !!t.useCanvas,
            this.loop = t.loop || 0,
            this.yoyo = !!t.yoyo,
            this._imgObjArr = [],
            this._events = {},
            this._isPng = !0,
            this._isPlay = !1,
            this._times = 0,
            this._asc = !0,
            this._temp = {};
            for (var e in t.imgArr) {
                var i = new Image;
                i.src = t.imgArr[e],
                this._imgObjArr.push(i)
            }
            this.init()
        } else console.log("è¯·è®¾ç½®å‚æ•°ï¼")
    },
    n = function(t, e) {
        t.complete ? e() : t.onload = function() {
            e()
        }
    };
    return i.prototype = {
        init: function() {
            var t = this;
            if (this.dom.textContent = "", t.useCanvas) {
                var e = document.createElement("canvas");
                e.width = e.height = 0,
                e.style.width = e.style.height = "100%",
                this.ctx = e.getContext("2d"),
                this.dom.appendChild(e);
                var i = function() {
                    t._isPng = /(\.png(\?|$))|(image\/png;base64)/.test(t._imgObjArr[0].src),
                    t.width = e.width = t._imgObjArr[0].width,
                    t.height = e.height = t._imgObjArr[0].height
                };
                n(this._imgObjArr[0], i)
            } else {
                t.mc = document.createElement("div"),
                t.mc.setAttribute("class", "mc"),
                t.mc.style.width = t.mc.style.height = "100%",
                this.dom.appendChild(t.mc);
                for (var s = 0; s < this._imgObjArr.length; s++) this._imgObjArr[s].style.opacity = 0,
                this._imgObjArr[s].style.position = "absolute",
                this._imgObjArr[s].style.width = this._imgObjArr[s].style.height = "100%",
                this._imgObjArr[s].style.top = this._imgObjArr[s].style.left = 0,
                t.mc.appendChild(this._imgObjArr[s])
            }
        },
        set: function(t, e) {
            var i = this._temp;
            if (1 === arguments.length && "object" == typeof arguments[0]) for (var n in arguments[0]) this[n] = arguments[0][n];
            2 === arguments.length && (this[arguments[0]] = arguments[1]),
            "useCanvas" === t && this.init(),
            "fps" === t && this._isPlay && (clearInterval(this._interval), this._process(i.onUpdate, i.onComplete)),
            "startFrame" === t && (this._isPlay || (this.curFrame = this.startFrame))
        },
        get: function(t) {
            return this[t]
        },
        play: function(t, e, i) {
            if (!this._isPlay) {
                var n, s, r = this,
                o = 0;
                for (var a in arguments) switch (typeof arguments[a]) {
                case "number":
                    0 == o ? (r.set("startFrame", arguments[a]), o++) : r.set("endFrame", arguments[a]);
                    break;
                case "object":
                    arguments[a].onComplete && (n = arguments[a].onComplete),
                    delete arguments[a].onComplete,
                    arguments[a].onUpdate && (s = arguments[a].onUpdate),
                    delete arguments[a].onUpdate,
                    r.set(arguments[a])
                }
                r._temp.onComplete = n,
                r._temp.onUpdate = s,
                r._asc = r.startFrame < r.endFrame,
                r._isPlay || this.trigger("play"),
                this._process(s, n)
            }
        },
        _process: function(t, e) {
            var i = this;
            this._interval = setInterval(function() {
                i._imgObjArr[i.curFrame].complete && (i.useCanvas ? (i._isPng && i.ctx.clearRect(0, 0, i.width, i.height), i.ctx.drawImage(i._imgObjArr[i.curFrame], 0, 0, i.width, i.height)) : (i.mc.childNodes[i.prevFrame].style.opacity = 0, i.mc.childNodes[i.curFrame].style.opacity = 1), i.prevFrame = i.curFrame, i.trigger("update", i.curFrame, i._times + 1, i._asc), t && t(i.curFrame, i._times + 1, i._asc), i.curFrame != i.endFrame && i.curFrame != i.startFrame || !i._isPlay || i._temp.repeat ? (i._asc ? i.curFrame++:i.curFrame--, i._isPlay = !0, i._temp.repeat = !1) : i.loop && (i._times + 1 < i.loop || -1 == i.loop) ? (i.yoyo ? (i._asc ? i.curFrame = Math.max(i.startFrame, i.endFrame) - 1 : i.curFrame = Math.min(i.startFrame, i.endFrame) + 1, i._asc = !i._asc) : (i._temp.repeat = !0, i._asc ? i.curFrame = Math.min(i.startFrame, i.endFrame) : i.curFrame = Math.max(i.startFrame, i.endFrame)), i._times++) : (i.stop(), e && e()))
            },
            1e3 / this.fps)
        },
        goto: function(t) {
            var e = this;
            this.curFrame = t;
            var i = function() {
                e.useCanvas ? (e._isPng && e.ctx.clearRect(0, 0, e.width, e.height), e.ctx.drawImage(e._imgObjArr[e.curFrame], 0, 0, e.width, e.height)) : (e.mc.childNodes[e.prevFrame].style.opacity = 0, e.mc.childNodes[e.curFrame].style.opacity = 1),
                e.trigger("update", e.curFrame, e._times + 1, e._asc)
            };
            n(this._imgObjArr[this.curFrame], i)
        },
        pause: function() {
            this._isPlay = !1,
            this.trigger("pause"),
            clearInterval(this._interval)
        },
        stop: function() {
            this._isPlay = !1,
            this.trigger("stop"),
            this.curFrame = this.startFrame,
            clearInterval(this._interval),
            this._times = 0
        },
        on: function(t, e) {
            t = t.split(" ");
            for (var i = 0; i < t.length; ++i) this._events[t[i]] || (this._events[t[i]] = []),
            this._events[t[i]].unshift(e);
            return this
        },
        one: function(t, e) {
            var i = function() {
                e(),
                this.off(t, i)
            };
            return this.on(t, i)
        },
        off: function(t, e) {
            if (t) {
                t = t.split(" ");
                for (var i = this._events,
                n = 0; n < t.length; ++n) if (i[t[n]]) if (e) for (var s = i[t[n]].length - 1; s >= 0; --s) i[t[n]][s] == e && i[t[n]].splice(s, 1);
                else i[t[n]] = []
            } else this._events = {};
            return this
        },
        trigger: function() {
            var t = Array.prototype.shift.call(arguments);
            t = t.split(" ");
            for (var e = 0; e < t.length; ++e) if (this._events[t[e]]) for (var i = this._events[t[e]].length - 1; i >= 0; --i) try {
                this._events[t[e]][i].apply(this, arguments)
            } catch(t) {
                console.log(t)
            }
            return this
        },
        destroy: function() {
            clearInterval(this._interval),
            this.off()
        }
    },
    i
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global: this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function(t, e, i) {
        var n = function(t) {
            var e, i = [],
            n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i
        },
        s = function(t, e, i) {
            var n, s, r = t.cycle;
            for (n in r) s = r[n],
            t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
            delete t.cycle
        },
        r = function(t, e, n) {
            i.call(this, t, e, n),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._repeat && this._uncache(!0),
            this.render = r.prototype.render
        },
        o = 1e-10,
        a = i._internals,
        l = a.isSelector,
        h = a.isArray,
        c = r.prototype = i.to({},
        .1, {}),
        u = [];
        r.version = "1.20.4",
        c.constructor = r,
        c.kill()._gc = !1,
        r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf,
        r.getTweensOf = i.getTweensOf,
        r.lagSmoothing = i.lagSmoothing,
        r.ticker = i.ticker,
        r.render = i.render,
        c.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._yoyoEase = null,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        },
        c.updateTo = function(t, e) {
            var n, s = this.ratio,
            r = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (n in t) this.vars[n] = t[n];
            if (this._initted || r) if (e) this._initted = !1,
            r && this.render(0, !0, !0);
            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var o = this._totalTime;
                this.render(0, !0, !1),
                this._initted = !1,
                this.render(o, !0, !1)
            } else if (this._initted = !1, this._init(), this._time > 0 || r) for (var a, l = 1 / (1 - s), h = this._firstPT; h;) a = h.s + h.c,
            h.c *= l,
            h.s = a - h.c,
            h = h._next;
            return this
        },
        c.render = function(t, e, n) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var s, r, l, h, c, u, d, p, f, m = this._dirty ? this.totalDuration() : this._totalDuration,
            g = this._time,
            _ = this._totalTime,
            v = this._cycle,
            y = this._duration,
            b = this._rawPrevTime;
            if (t >= m - 1e-7 && t >= 0 ? (this._totalTime = m, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 > b || 0 >= t && t >= -1e-7 || b === o && "isPause" !== this.data) && b !== t && (n = !0, b > o && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || b === t ? t: o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === y && b > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (b >= 0 && (n = !0), this._rawPrevTime = p = !e || t || b === t ? t: o)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = y + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && t >= _ && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (f = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== f || this._initted ? this._yoyoEase = f = !0 === f ? this._ease: f instanceof Ease ? f: Ease.map[f] : (f = this.vars.ease, this._yoyoEase = f = f ? f instanceof Ease ? f: "function" == typeof f ? new Ease(f, this.vars.easeParams) : Ease.map[f] || i.defaultEase: i.defaultEase)), this.ratio = f ? 1 - f.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y: this._time < 0 && (this._time = 0)), this._easeType && !f ? (c = this._time / y, u = this._easeType, d = this._easePower, (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === d ? c *= c: 2 === d ? c *= c * c: 3 === d ? c *= c * c * c: 4 === d && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c: 2 === u ? this.ratio = c: this._time / y < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : f || (this.ratio = this._ease.getRatio(this._time / y))), g === this._time && !n && v === this._cycle) return void(_ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = g,
                this._totalTime = _,
                this._rawPrevTime = b,
                this._cycle = v,
                a.lazyTweens.push(this),
                void(this._lazy = [t, e]); ! this._time || s || f ? s && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
            }
            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== g && t >= 0 && (this._active = !0), 0 === _ && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s,
            l = l._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== _ || r) && this._callback("onUpdate")),
            this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
            r && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === y && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0))
        },
        r.to = function(t, e, i) {
            return new r(t, e, i)
        },
        r.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new r(t, e, i)
        },
        r.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new r(t, e, n)
        },
        r.staggerTo = r.allTo = function(t, e, o, a, c, d, p) {
            a = a || 0;
            var f, m, g, _, v = 0,
            y = [],
            b = function() {
                o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments),
                c.apply(p || o.callbackScope || this, d || u)
            },
            x = o.cycle,
            T = o.startAt && o.startAt.cycle;
            for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && (t = n(t), t.reverse(), a *= -1), f = t.length - 1, g = 0; f >= g; g++) {
                m = {};
                for (_ in o) m[_] = o[_];
                if (x && (s(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), T) {
                    T = m.startAt = {};
                    for (_ in o.startAt) T[_] = o.startAt[_];
                    s(m.startAt, t, g)
                }
                m.delay = v + (m.delay || 0),
                g === f && c && (m.onComplete = b),
                y[g] = new r(t[g], e, m),
                v += a
            }
            return y
        },
        r.staggerFrom = r.allFrom = function(t, e, i, n, s, o, a) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            r.staggerTo(t, e, i, n, s, o, a)
        },
        r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, o, a, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            r.staggerTo(t, e, n, s, o, a, l)
        },
        r.delayedCall = function(t, e, i, n, s) {
            return new r(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        },
        r.set = function(t, e) {
            return new r(t, 0, e)
        },
        r.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var d = function(t, e) {
            for (var n = [], s = 0, r = t._first; r;) r instanceof i ? n[s++] = r: (e && (n[s++] = r), n = n.concat(d(r, e)), s = n.length),
            r = r._next;
            return n
        },
        p = r.getAllTweens = function(e) {
            return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e))
        };
        r.killAll = function(t, i, n, s) {
            null == i && (i = !0),
            null == n && (n = !0);
            var r, o, a, l = p(0 != s),
            h = l.length,
            c = i && n && s;
            for (a = 0; h > a; a++) o = l[a],
            (c || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
        },
        r.killChildTweensOf = function(t, e) {
            if (null != t) {
                var s, o, c, u, d, p = a.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), h(t)) for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                else {
                    s = [];
                    for (c in p) for (o = p[c].target.parentNode; o;) o === t && (s = s.concat(p[c].tweens)),
                    o = o.parentNode;
                    for (d = s.length, u = 0; d > u; u++) e && s[u].totalTime(s[u].totalDuration()),
                    s[u]._enabled(!1, !1)
                }
            }
        };
        var f = function(t, i, n, s) {
            i = !1 !== i,
            n = !1 !== n,
            s = !1 !== s;
            for (var r, o, a = p(s), l = i && n && s, h = a.length; --h > -1;) o = a[h],
            (l || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && o.paused(t)
        };
        return r.pauseAll = function(t, e, i) {
            f(!0, t, e, i)
        },
        r.resumeAll = function(t, e, i) {
            f(!1, t, e, i)
        },
        r.globalTimeScale = function(e) {
            var n = t._rootTimeline,
            s = i.ticker.time;
            return arguments.length ? (e = e || o, n._startTime = s - (s - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, s = i.ticker.frame, n._startTime = s - (s - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
        },
        c.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t: t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        },
        c.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        },
        c.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        },
        c.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        },
        c.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this: this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        },
        c.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        },
        c.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        },
        c.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        },
        r
    },
    !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function(t, e, i) {
        var n = function(t) {
            e.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren,
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var i, n, s = this.vars;
            for (n in s) i = s[n],
            l(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
            l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
        },
        s = 1e-10,
        r = i._internals,
        o = n._internals = {},
        a = r.isSelector,
        l = r.isArray,
        h = r.lazyTweens,
        c = r.lazyRender,
        u = _gsScope._gsDefine.globals,
        d = function(t) {
            var e, i = {};
            for (e in t) i[e] = t[e];
            return i
        },
        p = function(t, e, i) {
            var n, s, r = t.cycle;
            for (n in r) s = r[n],
            t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
            delete t.cycle
        },
        f = o.pauseCallback = function() {},
        m = function(t) {
            var e, i = [],
            n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i
        },
        g = n.prototype = new e;
        return n.version = "1.20.4",
        g.constructor = n,
        g.kill()._gc = g._forcingPlayhead = g._hasPause = !1,
        g.to = function(t, e, n, s) {
            var r = n.repeat && u.TweenMax || i;
            return e ? this.add(new r(t, e, n), s) : this.set(t, n, s)
        },
        g.from = function(t, e, n, s) {
            return this.add((n.repeat && u.TweenMax || i).from(t, e, n), s)
        },
        g.fromTo = function(t, e, n, s, r) {
            var o = s.repeat && u.TweenMax || i;
            return e ? this.add(o.fromTo(t, e, n, s), r) : this.set(t, s, r)
        },
        g.staggerTo = function(t, e, s, r, o, l, h, c) {
            var u, f, g = new n({
                onComplete: l,
                onCompleteParams: h,
                callbackScope: c,
                smoothChildTiming: this.smoothChildTiming
            }),
            _ = s.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), r = r || 0, 0 > r && (t = m(t), t.reverse(), r *= -1), f = 0; f < t.length; f++) u = d(s),
            u.startAt && (u.startAt = d(u.startAt), u.startAt.cycle && p(u.startAt, t, f)),
            _ && (p(u, t, f), null != u.duration && (e = u.duration, delete u.duration)),
            g.to(t[f], e, u, f * r);
            return this.add(g, o)
        },
        g.staggerFrom = function(t, e, i, n, s, r, o, a) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, n, s, r, o, a)
        },
        g.staggerFromTo = function(t, e, i, n, s, r, o, a, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, n, s, r, o, a, l)
        },
        g.call = function(t, e, n, s) {
            return this.add(i.delayedCall(0, t, e, n), s)
        },
        g.set = function(t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0),
            null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused),
            this.add(new i(t, 0, e), n)
        },
        n.exportRoot = function(t, e) {
            t = t || {},
            null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var s, r, o, a, l = new n(t),
            h = l._timeline;
            for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, o = h._first; o;) a = o._next,
            e && o instanceof i && o.target === o.vars.onComplete || (r = o._startTime - o._delay, 0 > r && (s = 1), l.add(o, r)),
            o = a;
            return h.add(l, 0),
            s && l.totalDuration(),
            l
        },
        g.add = function(s, r, o, a) {
            var h, c, u, d, p, f;
            if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, s)), !(s instanceof t)) {
                if (s instanceof Array || s && s.push && l(s)) {
                    for (o = o || "normal", a = a || 0, h = r, c = s.length, u = 0; c > u; u++) l(d = s[u]) && (d = new n({
                        tweens: d
                    })),
                    this.add(d, h),
                    "string" != typeof d && "function" != typeof d && ("sequence" === o ? h = d._startTime + d.totalDuration() / d._timeScale: "start" === o && (d._startTime -= d.delay())),
                    h += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof s) return this.addLabel(s, r);
                if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                s = i.delayedCall(0, s)
            }
            if (e.prototype.add.call(this, s, r), s._time && s.render((this.rawTime() - s._startTime) * s._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (p = this, f = p.rawTime() > s._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1),
            p = p._timeline;
            return this
        },
        g.remove = function(e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline: t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime: i._time) - (e._reversed ? e.totalDuration() - e._totalTime: e._totalTime) / e._timeScale,
                this
            }
            if (e instanceof Array || e && e.push && l(e)) {
                for (var n = e.length; --n > -1;) this.remove(e[n]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        },
        g._remove = function(t, i) {
            return e.prototype._remove.call(this, t, i),
            this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        },
        g.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        },
        g.insert = g.insertMultiple = function(t, e, i, n) {
            return this.add(t, e || 0, i, n)
        },
        g.appendMultiple = function(t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        },
        g.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        },
        g.addPause = function(t, e, n, s) {
            var r = i.delayedCall(0, f, n, s || this);
            return r.vars.onComplete = r.vars.onReverseComplete = e,
            r.data = "isPause",
            this._hasPause = !0,
            this.add(r, t)
        },
        g.removeLabel = function(t) {
            return delete this._labels[t],
            this
        },
        g.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        },
        g._parseTimeOrLabel = function(e, i, n, s) {
            var r, o;
            if (s instanceof t && s.timeline === this) this.remove(s);
            else if (s && (s instanceof Array || s.push && l(s))) for (o = s.length; --o > -1;) s[o] instanceof t && s[o].timeline === this && this.remove(s[o]);
            if (r = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration: 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - r: 0, n);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = r);
            else {
                if ( - 1 === (o = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = r + i: i: this._labels[e] + i;
                i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)),
                e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : r
            }
            return Number(e) + i
        },
        g.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t: this._parseTimeOrLabel(t), !1 !== e)
        },
        g.stop = function() {
            return this.paused(!0)
        },
        g.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        },
        g.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        },
        g.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, o, a, l, u, d, p = this._time,
            f = this._dirty ? this.totalDuration() : this._totalDuration,
            m = this._startTime,
            g = this._timeScale,
            _ = this._paused;
            if (p !== this._time && (t += this._time - p), t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f,
            this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (a = "onReverseComplete"))),
            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t: s,
            t = f + 1e-4;
            else if (1e-7 > t) if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1,
            this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0),
            this._rawPrevTime = t;
            else {
                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t: s, 0 === t && r) for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1),
                n = n._next;
                t = 0,
                this._initted || (l = !0)
            } else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (t >= p) for (n = this._first; n && n._startTime <= t && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n),
                    n = n._next;
                    else for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n),
                    n = n._prev;
                    u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== p && this._first || i || l || u) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (d = this._time) >= p) for (n = this._first; n && (o = n._next, d === this._time && (!this._paused || _));)(n._active || n._startTime <= d && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                n = o;
                else for (n = this._last; n && (o = n._prev, d === this._time && (!this._paused || _));) {
                    if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                        if (u === n) {
                            for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale: (t - u._startTime) * u._timeScale, e, i),
                            u = u._prev;
                            u = null,
                            this.pause()
                        }
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                    }
                    n = o
                }
                this._onUpdate && (e || (h.length && c(), this._callback("onUpdate"))),
                a && (this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (r && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
            }
        },
        g._hasPausedChild = function() {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof n && t._hasPausedChild()) return ! 0;
                t = t._next
            }
            return ! 1
        },
        g.getChildren = function(t, e, n, s) {
            s = s || -9999999999;
            for (var r = [], o = this._first, a = 0; o;) o._startTime < s || (o instanceof i ? !1 !== e && (r[a++] = o) : (!1 !== n && (r[a++] = o), !1 !== t && (r = r.concat(o.getChildren(!0, e, n)), a = r.length))),
            o = o._next;
            return r
        },
        g.getTweensOf = function(t, e) {
            var n, s, r = this._gc,
            o = [],
            a = 0;
            for (r && this._enabled(!0, !0), n = i.getTweensOf(t), s = n.length; --s > -1;)(n[s].timeline === this || e && this._contains(n[s])) && (o[a++] = n[s]);
            return r && this._enabled(!1, !0),
            o
        },
        g.recent = function() {
            return this._recent
        },
        g._contains = function(t) {
            for (var e = t.timeline; e;) {
                if (e === this) return ! 0;
                e = e.timeline
            }
            return ! 1
        },
        g.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var n, s = this._first,
            r = this._labels; s;) s._startTime >= i && (s._startTime += t),
            s = s._next;
            if (e) for (n in r) r[n] >= i && (r[n] += t);
            return this._uncache(!0)
        },
        g._kill = function(t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(t, e) && (s = !0);
            return s
        },
        g.clear = function(t) {
            var e = this.getChildren(!1, !0, !0),
            i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
            return ! 1 !== t && (this._labels = {}),
            this._uncache(!0)
        },
        g.invalidate = function() {
            for (var e = this._first; e;) e.invalidate(),
            e = e._next;
            return t.prototype.invalidate.call(this)
        },
        g._enabled = function(t, i) {
            if (t === this._gc) for (var n = this._first; n;) n._enabled(t, !0),
            n = n._next;
            return e.prototype._enabled.call(this, t, i)
        },
        g.totalTime = function(e, i, n) {
            this._forcingPlayhead = !0;
            var s = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            s
        },
        g.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        },
        g.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0,
                    s = this._last,
                    r = 999999999999; s;) e = s._prev,
                    s._dirty && s.totalDuration(),
                    s._startTime > r && this._sortChildren && !s._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(s, s._startTime - s._delay), this._calculatingDuration = 0) : r = s._startTime,
                    s._startTime < 0 && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale, this._time -= s._startTime, this._totalTime -= s._startTime, this._rawPrevTime -= s._startTime), this.shiftChildren( - s._startTime, !1, -9999999999), r = 0),
                    i = s._startTime + s._totalDuration / s._timeScale,
                    i > n && (n = i),
                    s = e;
                    this._duration = this._totalDuration = n,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        },
        g.paused = function(e) {
            if (!e) for (var i = this._first,
            n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0),
            i = i._next;
            return t.prototype.paused.apply(this, arguments)
        },
        g.usesFrames = function() {
            for (var e = this._timeline; e._timeline;) e = e._timeline;
            return e === t._rootFramesTimeline
        },
        g.rawTime = function(t) {
            return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime: (this._timeline.rawTime(t) - this._startTime) * this._timeScale
        },
        n
    },
    !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"],
    function(t, e, i) {
        var n = function(e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._dirty = !0
        },
        s = 1e-10,
        r = e._internals,
        o = r.lazyTweens,
        a = r.lazyRender,
        l = _gsScope._gsDefine.globals,
        h = new i(null, null, 1, 0),
        c = n.prototype = new t;
        return c.constructor = n,
        c.kill()._gc = !1,
        n.version = "1.20.4",
        c.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        },
        c.addCallback = function(t, i, n, s) {
            return this.add(e.delayedCall(0, t, n, s), i)
        },
        c.removeCallback = function(t, e) {
            if (t) if (null == e) this._kill(null, t);
            else for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
            return this
        },
        c.removePause = function(e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        },
        c.tweenTo = function(t, i) {
            i = i || {};
            var n, s, r, o = {
                ease: h,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1
            },
            a = i.repeat && l.TweenMax || e;
            for (s in i) o[s] = i[s];
            return o.time = this._parseTimeOrLabel(t),
            n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001,
            r = new a(this, n, o),
            o.onStart = function() {
                r.target.paused(!0),
                r.vars.time === r.target.time() || n !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0),
                i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || r, i.onStartParams || [])
            },
            r
        },
        c.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            },
            i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(e, i);
            return n.isFromTo = 1,
            n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        },
        c.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, l, h, c, u, d, p, f = this._time,
            m = this._dirty ? this.totalDuration() : this._totalDuration,
            g = this._duration,
            _ = this._totalTime,
            v = this._startTime,
            y = this._timeScale,
            b = this._rawPrevTime,
            x = this._paused,
            T = this._cycle;
            if (f !== this._time && (t += this._time - f), t >= m - 1e-7 && t >= 0) this._locked || (this._totalTime = m, this._cycle = this._repeat),
            this._reversed || this._hasPausedChild() || (r = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > b || b === s) && b !== t && this._first && (c = !0, b > s && (h = "onReverseComplete"))),
            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t: s,
            this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = g, t = g + 1e-4);
            else if (1e-7 > t) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === g && b !== s && (b > 0 || 0 > t && b >= 0) && !this._locked) && (h = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1,
            this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, h = "onReverseComplete") : b >= 0 && this._first && (c = !0),
            this._rawPrevTime = t;
            else {
                if (this._rawPrevTime = g || !e || t || this._rawPrevTime === t ? t: s, 0 === t && r) for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1),
                n = n._next;
                t = 0,
                this._initted || (c = !0)
            } else if (0 === g && 0 > b && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = g + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && t >= _ && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? (this._time = g, t = g + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                if ((t = this._time) >= f || this._repeat && T !== this._cycle) for (n = this._first; n && n._startTime <= t && !d;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (d = n),
                n = n._next;
                else for (n = this._last; n && n._startTime >= t && !d;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n),
                n = n._prev;
                d && d._startTime < g && (this._time = t = d._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== T && !this._locked) {
                var w = this._yoyo && 0 != (1 & T),
                S = w === (this._yoyo && 0 != (1 & this._cycle)),
                P = this._totalTime,
                C = this._cycle,
                E = this._rawPrevTime,
                k = this._time;
                if (this._totalTime = T * g, this._cycle < T ? w = !w: this._totalTime += g, this._time = f, this._rawPrevTime = 0 === g ? b - 1e-4: b, this._cycle = T, this._locked = !0, f = w ? 0 : g, this.render(f, e, 0 === g), e || this._gc || this.vars.onRepeat && (this._cycle = C, this._locked = !1, this._callback("onRepeat")), f !== this._time) return;
                if (S && (this._cycle = T, this._locked = !0, f = w ? g + 1e-4: -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !x) return;
                this._time = k,
                this._totalTime = P,
                this._cycle = C,
                this._rawPrevTime = E
            }
            if (! (this._time !== f && this._first || i || c || d)) return void(_ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (p = this._time) >= f) for (n = this._first; n && (l = n._next, p === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (d === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
            n = l;
            else for (n = this._last; n && (l = n._prev, p === this._time && (!this._paused || x));) {
                if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                    if (d === n) {
                        for (d = n._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale: (t - d._startTime) * d._timeScale, e, i),
                        d = d._prev;
                        d = null,
                        this.pause()
                    }
                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                }
                n = l
            }
            this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))),
            h && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || m >= this.totalDuration()) && (r && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
        },
        c.getActive = function(t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            var n, s, r = [],
            o = this.getChildren(t, e, i),
            a = 0,
            l = o.length;
            for (n = 0; l > n; n++) s = o[n],
            s.isActive() && (r[a++] = s);
            return r
        },
        c.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(),
            n = i.length;
            for (e = 0; n > e; e++) if (i[e].time > t) return i[e].name;
            return null
        },
        c.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (e[i].time < t) return e[i].name;
            return null
        },
        c.getLabelsArray = function() {
            var t, e = [],
            i = 0;
            for (t in this._labels) e[i++] = {
                time: this._labels[t],
                name: t
            };
            return e.sort(function(t, e) {
                return t.time - e.time
            }),
            e
        },
        c.invalidate = function() {
            return this._locked = !1,
            t.prototype.invalidate.call(this)
        },
        c.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t: t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
        },
        c.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
        },
        c.totalDuration = function(e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this: (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        },
        c.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        },
        c.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        },
        c.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        },
        c.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        },
        c.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        },
        n
    },
    !0),
    function() {
        var t = 180 / Math.PI,
        e = [],
        i = [],
        n = [],
        s = {},
        r = _gsScope._gsDefine.globals,
        o = function(t, e, i, n) {
            i === n && (i = n - (n - e) / 1e6),
            t === e && (e = t + (i - t) / 1e6),
            this.a = t,
            this.b = e,
            this.c = i,
            this.d = n,
            this.da = n - t,
            this.ca = i - t,
            this.ba = e - t
        },
        a = function(t, e, i, n) {
            var s = {
                a: t
            },
            r = {},
            o = {},
            a = {
                c: n
            },
            l = (t + e) / 2,
            h = (e + i) / 2,
            c = (i + n) / 2,
            u = (l + h) / 2,
            d = (h + c) / 2,
            p = (d - u) / 8;
            return s.b = l + (t - l) / 4,
            r.b = u + p,
            s.c = r.a = (s.b + r.b) / 2,
            r.c = o.a = (u + d) / 2,
            o.b = d - p,
            a.b = c + (n - c) / 4,
            o.c = a.a = (o.b + a.b) / 2,
            [s, r, o, a]
        },
        l = function(t, s, r, o, l) {
            var h, c, u, d, p, f, m, g, _, v, y, b, x, T = t.length - 1,
            w = 0,
            S = t[0].a;
            for (h = 0; T > h; h++) p = t[w],
            c = p.a,
            u = p.d,
            d = t[w + 1].d,
            l ? (y = e[h], b = i[h], x = (b + y) * s * .25 / (o ? .5 : n[h] || .5), f = u - (u - c) * (o ? .5 * s: 0 !== y ? x / y: 0), m = u + (d - u) * (o ? .5 * s: 0 !== b ? x / b: 0), g = u - (f + ((m - f) * (3 * y / (y + b) + .5) / 4 || 0))) : (f = u - (u - c) * s * .5, m = u + (d - u) * s * .5, g = u - (f + m) / 2),
            f += g,
            m += g,
            p.c = _ = f,
            p.b = 0 !== h ? S: S = p.a + .6 * (p.c - p.a),
            p.da = u - c,
            p.ca = _ - c,
            p.ba = S - c,
            r ? (v = a(c, S, _, u), t.splice(w, 1, v[0], v[1], v[2], v[3]), w += 4) : w++,
            S = m;
            p = t[w],
            p.b = S,
            p.c = S + .4 * (p.d - S),
            p.da = p.d - p.a,
            p.ca = p.c - p.a,
            p.ba = S - p.a,
            r && (v = a(p.a, S, p.c, p.d), t.splice(w, 1, v[0], v[1], v[2], v[3]))
        },
        h = function(t, n, s, r) {
            var a, l, h, c, u, d, p = [];
            if (r) for (t = [r].concat(t), l = t.length; --l > -1;)"string" == typeof(d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = r[n] + Number(d.charAt(0) + d.substr(2)));
            if (0 > (a = t.length - 2)) return p[0] = new o(t[0][n], 0, 0, t[0][n]),
            p;
            for (l = 0; a > l; l++) h = t[l][n],
            c = t[l + 1][n],
            p[l] = new o(h, 0, 0, c),
            s && (u = t[l + 2][n], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
            return p[l] = new o(t[l][n], 0, 0, t[l + 1][n]),
            p
        },
        c = function(t, r, o, a, c, u) {
            var d, p, f, m, g, _, v, y, b = {},
            x = [],
            T = u || t[0];
            c = "string" == typeof c ? "," + c + ",": ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            null == r && (r = 1);
            for (p in t[0]) x.push(p);
            if (t.length > 1) {
                for (y = t[t.length - 1], v = !0, d = x.length; --d > -1;) if (p = x[d], Math.abs(T[p] - y[p]) > .05) {
                    v = !1;
                    break
                }
                v && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
            }
            for (e.length = i.length = n.length = 0, d = x.length; --d > -1;) p = x[d],
            s[p] = -1 !== c.indexOf("," + p + ","),
            b[p] = h(t, p, s[p], u);
            for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]),
            i[d] = Math.sqrt(i[d]);
            if (!a) {
                for (d = x.length; --d > -1;) if (s[p]) for (f = b[x[d]], _ = f.length - 1, m = 0; _ > m; m++) g = f[m + 1].da / i[m] + f[m].da / e[m] || 0,
                n[m] = (n[m] || 0) + g * g;
                for (d = n.length; --d > -1;) n[d] = Math.sqrt(n[d])
            }
            for (d = x.length, m = o ? 4 : 1; --d > -1;) p = x[d],
            f = b[p],
            l(f, r, o, a, s[p]),
            v && (f.splice(0, m), f.splice(f.length - m, m));
            return b
        },
        u = function(t, e, i) {
            e = e || "soft";
            var n, s, r, a, l, h, c, u, d, p, f, m = {},
            g = "cubic" === e ? 3 : 2,
            _ = "soft" === e,
            v = [];
            if (_ && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
            for (d in t[0]) v.push(d);
            for (h = v.length; --h > -1;) {
                for (d = v[h], m[d] = l = [], p = 0, u = t.length, c = 0; u > c; c++) n = null == i ? t[c][d] : "string" == typeof(f = t[c][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f),
                _ && c > 1 && u - 1 > c && (l[p++] = (n + l[p - 2]) / 2),
                l[p++] = n;
                for (u = p - g + 1, p = 0, c = 0; u > c; c += g) n = l[c],
                s = l[c + 1],
                r = l[c + 2],
                a = 2 === g ? 0 : l[c + 3],
                l[p++] = f = 3 === g ? new o(n, s, r, a) : new o(n, (2 * s + n) / 3, (2 * s + r) / 3, r);
                l.length = p
            }
            return m
        },
        d = function(t, e, i) {
            for (var n, s, r, o, a, l, h, c, u, d, p, f = 1 / i,
            m = t.length; --m > -1;) for (d = t[m], r = d.a, o = d.d - r, a = d.c - r, l = d.b - r, n = s = 0, c = 1; i >= c; c++) h = f * c,
            u = 1 - h,
            n = s - (s = (h * h * o + 3 * u * (h * a + u * l)) * h),
            p = m * i + c - 1,
            e[p] = (e[p] || 0) + n * n
        },
        p = function(t, e) {
            e = e >> 0 || 6;
            var i, n, s, r, o = [],
            a = [],
            l = 0,
            h = 0,
            c = e - 1,
            u = [],
            p = [];
            for (i in t) d(t[i], o, e);
            for (s = o.length, n = 0; s > n; n++) l += Math.sqrt(o[n]),
            r = n % e,
            p[r] = l,
            r === c && (h += l, r = n / e >> 0, u[r] = p, a[r] = h, l = 0, p = []);
            return {
                length: h,
                lengths: a,
                segments: u
            }
        },
        f = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.8",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t,
                e instanceof Array && (e = {
                    values: e
                }),
                this._func = {},
                this._mod = {},
                this._props = [],
                this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var n, s, r, o, a, l = e.values || [],
                h = {},
                d = l[0],
                f = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = f ? f instanceof Array ? f: [["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]] : null;
                for (n in d) this._props.push(n);
                for (r = this._props.length; --r > -1;) n = this._props[r],
                this._overwriteProps.push(n),
                s = this._func[n] = "function" == typeof t[n],
                h[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n: "get" + n.substr(3)]() : parseFloat(t[n]),
                a || h[n] !== l[0][n] && (a = h);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : u(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                    var m = p(this._beziers, this._timeRes);
                    this._length = m.length,
                    this._lengths = m.lengths,
                    this._segments = m.segments,
                    this._l1 = this._li = this._s1 = this._si = 0,
                    this._l2 = this._lengths[0],
                    this._curSeg = this._segments[0],
                    this._s2 = this._curSeg[0],
                    this._prec = 1 / this._curSeg.length
                }
                if (f = this._autoRotate) for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), r = f.length; --r > -1;) {
                    for (o = 0; 3 > o; o++) n = f[r][o],
                    this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n: "get" + n.substr(3)];
                    n = f[r][2],
                    this._initialRotations[r] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0,
                    this._overwriteProps.push(n)
                }
                return this._startRatio = i.vars.runBackwards ? 1 : 0,
                !0
            },
            set: function(e) {
                var i, n, s, r, o, a, l, h, c, u, d = this._segCount,
                p = this._func,
                f = this._target,
                m = e !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths, u = this._curSeg, e *= this._length, s = this._li, e > this._l2 && d - 1 > s) {
                        for (h = d - 1; h > s && (this._l2 = c[++s]) <= e;);
                        this._l1 = c[s - 1],
                        this._li = s,
                        this._curSeg = u = this._segments[s],
                        this._s2 = u[this._s1 = this._si = 0]
                    } else if (e < this._l1 && s > 0) {
                        for (; s > 0 && (this._l1 = c[--s]) >= e;);
                        0 === s && e < this._l1 ? this._l1 = 0 : s++,
                        this._l2 = c[s],
                        this._li = s,
                        this._curSeg = u = this._segments[s],
                        this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                        this._s2 = u[this._si]
                    }
                    if (i = s, e -= this._l1, s = this._si, e > this._s2 && s < u.length - 1) {
                        for (h = u.length - 1; h > s && (this._s2 = u[++s]) <= e;);
                        this._s1 = u[s - 1],
                        this._si = s
                    } else if (e < this._s1 && s > 0) {
                        for (; s > 0 && (this._s1 = u[--s]) >= e;);
                        0 === s && e < this._s1 ? this._s1 = 0 : s++,
                        this._s2 = u[s],
                        this._si = s
                    }
                    a = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0,
                a = (e - i * (1 / d)) * d;
                for (n = 1 - a, s = this._props.length; --s > -1;) r = this._props[s],
                o = this._beziers[r][i],
                l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a,
                this._mod[r] && (l = this._mod[r](l, f)),
                p[r] ? f[r](l) : f[r] = l;
                if (this._autoRotate) {
                    var g, _, v, y, b, x, T, w = this._autoRotate;
                    for (s = w.length; --s > -1;) r = w[s][2],
                    x = w[s][3] || 0,
                    T = !0 === w[s][4] ? 1 : t,
                    o = this._beziers[w[s][0]],
                    g = this._beziers[w[s][1]],
                    o && g && (o = o[i], g = g[i], _ = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, _ += (y - _) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = g.a + (g.b - g.a) * a, b = g.b + (g.c - g.b) * a, v += (b - v) * a, b += (g.c + (g.d - g.c) * a - b) * a, l = m ? Math.atan2(b - v, y - _) * T + x: this._initialRotations[s], this._mod[r] && (l = this._mod[r](l, f)), p[r] ? f[r](l) : f[r] = l)
                }
            }
        }),
        m = f.prototype;
        f.bezierThrough = c,
        f.cubicToQuadratic = a,
        f._autoCSS = !0,
        f.quadraticToCubic = function(t, e, i) {
            return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        },
        f._cssRegister = function() {
            var t = r.CSSPlugin;
            if (t) {
                var e = t._internals,
                i = e._parseToProxy,
                n = e._setPluginRatio,
                s = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, r, o, a, l) {
                        e instanceof Array && (e = {
                            values: e
                        }),
                        l = new f;
                        var h, c, u, d = e.values,
                        p = d.length - 1,
                        m = [],
                        g = {};
                        if (0 > p) return a;
                        for (h = 0; p >= h; h++) u = i(t, d[h], o, a, l, p !== h),
                        m[h] = u.end;
                        for (c in e) g[c] = e[c];
                        return g.values = m,
                        a = new s(t, "bezier", 0, 0, u.pt, 2),
                        a.data = u,
                        a.plugin = l,
                        a.setRatio = n,
                        0 === g.autoRotate && (g.autoRotate = !0),
                        !g.autoRotate || g.autoRotate instanceof Array || (h = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x && [["x", "y", "rotation", h, !1]]),
                        g.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, o._overwriteProps.push("rotation")),
                        l._onInitTween(u.proxy, g, o._tween),
                        a
                    }
                })
            }
        },
        m._mod = function(t) {
            for (var e, i = this._overwriteProps,
            n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
        },
        m._kill = function(t) {
            var e, i, n = this._props;
            for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
            if (n = this._autoRotate) for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    } (),
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"],
    function(t, e) {
        var i, n, s, r, o = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = o.prototype.setRatio
        },
        a = _gsScope._gsDefine.globals,
        l = {},
        h = o.prototype = new t("css");
        h.constructor = o,
        o.version = "1.20.4",
        o.API = 2,
        o.defaultTransformPerspective = 0,
        o.defaultSkewType = "compensated",
        o.defaultSmoothOrigin = !0,
        h = "px",
        o.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h,
            lineHeight: ""
        };
        var c, u, d, p, f, m, g, _, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
        y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        T = /(?:\d|\-|\+|=|#|\.)*/g,
        w = /opacity *= *([^)]*)/i,
        S = /opacity:([^;]*)/i,
        P = /alpha\(opacity *=.+?\)/i,
        C = /^(rgb|hsl)/,
        E = /([A-Z])/g,
        k = /-([a-z])/gi,
        A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        R = function(t, e) {
            return e.toUpperCase()
        },
        D = /(?:Left|Right|Width)/i,
        M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        N = /,(?=[^\)]*(?:\(|$))/gi,
        I = /[\s,\(]/i,
        F = Math.PI / 180,
        L = 180 / Math.PI,
        B = {},
        X = {
            style: {}
        },
        H = _gsScope.document || {
            createElement: function() {
                return X
            }
        },
        z = function(t, e) {
            return H.createElementNS ? H.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : H.createElement(t)
        },
        j = z("div"),
        Y = z("img"),
        q = o._internals = {
            _specialProps: l
        },
        U = (_gsScope.navigator || {}).userAgent || "",
        W = function() {
            var t = U.indexOf("Android"),
            e = z("a");
            return d = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && ( - 1 === t || parseFloat(U.substr(t + 8, 2)) > 3),
            f = d && parseFloat(U.substr(U.indexOf("Version/") + 8, 2)) < 6,
            p = -1 !== U.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) && (m = parseFloat(RegExp.$1)),
            !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
        } (),
        V = function(t) {
            return w.test("string" == typeof t ? t: (t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        },
        $ = function(t) {
            _gsScope.console && console.log(t)
        },
        G = "",
        J = "",
        Q = function(t, e) {
            e = e || j;
            var i, n, s = e.style;
            if (void 0 !== s[t]) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];);
            return n >= 0 ? (J = 3 === n ? "ms": i[n], G = "-" + J.toLowerCase() + "-", J + t) : null
        },
        Z = H.defaultView ? H.defaultView.getComputedStyle: function() {},
        K = o.getStyle = function(t, e, i, n, s) {
            var r;
            return W || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || Z(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(E, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r: s) : V(t)
        },
        tt = q.convertToPixels = function(t, i, n, s, r) {
            if ("px" === s || !s && "lineHeight" !== i) return n;
            if ("auto" === s || !n) return 0;
            var a, l, h, c = D.test(i),
            u = t,
            d = j.style,
            p = 0 > n,
            f = 1 === n;
            if (p && (n = -n), f && (n *= 100), "lineHeight" !== i || s) if ("%" === s && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth: t.clientHeight);
            else {
                if (d.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", "%" !== s && u.appendChild && "v" !== s.charAt(0) && "rem" !== s) d[c ? "borderLeftWidth": "borderTopWidth"] = n + s;
                else {
                    if (u = t.parentNode || H.body, -1 !== K(u, "display").indexOf("flex") && (d.position = "absolute"), l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * n / 100;
                    d[c ? "width": "height"] = n + s
                }
                u.appendChild(j),
                a = parseFloat(j[c ? "offsetWidth": "offsetHeight"]),
                u.removeChild(j),
                c && "%" === s && !1 !== o.cacheWidths && (l = u._gsCache = u._gsCache || {},
                l.time = h, l.width = a / n * 100),
                0 !== a || r || (a = tt(t, i, n, s, !0))
            } else l = Z(t).lineHeight,
            t.style.lineHeight = n,
            a = parseFloat(Z(t).lineHeight),
            t.style.lineHeight = l;
            return f && (a /= 100),
            p ? -a: a
        },
        et = q.calculateOffset = function(t, e, i) {
            if ("absolute" !== K(t, "position", i)) return 0;
            var n = "left" === e ? "Left": "Top",
            s = K(t, "margin" + n, i);
            return t["offset" + n] - (tt(t, e, parseFloat(s), s.replace(T, "")) || 0)
        },
        it = function(t, e) {
            var i, n, s, r = {};
            if (e = e || Z(t, null)) if (i = e.length) for (; --i > -1;) s = e[i],
            ( - 1 === s.indexOf("-transform") || At === s) && (r[s.replace(k, R)] = e.getPropertyValue(s));
            else for (i in e)( - 1 === i.indexOf("Transform") || kt === i) && (r[i] = e[i]);
            else if (e = t.currentStyle || t.style) for (i in e)"string" == typeof i && void 0 === r[i] && (r[i.replace(k, R)] = e[i]);
            return W || (r.opacity = V(t)),
            n = Yt(t, e, !1),
            r.rotation = n.rotation,
            r.skewX = n.skewX,
            r.scaleX = n.scaleX,
            r.scaleY = n.scaleY,
            r.x = n.x,
            r.y = n.y,
            Dt && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ),
            r.filters && delete r.filters,
            r
        },
        nt = function(t, e, i, n, s) {
            var r, o, a, l = {},
            h = t.style;
            for (o in i)"cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || s && s[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(x, "") ? r: 0 : et(t, o), void 0 !== h[o] && (a = new vt(h, o, h[o], a)));
            if (n) for (o in n)"className" !== o && (l[o] = n[o]);
            return {
                difs: l,
                firstMPT: a
            }
        },
        st = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        },
        rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        ot = function(t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase()) return (i || Z(t))[e] || 0;
            if (t.getCTM && Ht(t)) return t.getBBox()[e] || 0;
            var n = parseFloat("width" === e ? t.offsetWidth: t.offsetHeight),
            s = st[e],
            r = s.length;
            for (i = i || Z(t, null); --r > -1;) n -= parseFloat(K(t, "padding" + s[r], i, !0)) || 0,
            n -= parseFloat(K(t, "border" + s[r] + "Width", i, !0)) || 0;
            return n
        },
        at = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t) return t + " "; (null == t || "" === t) && (t = "0 0");
            var i, n = t.split(" "),
            s = -1 !== t.indexOf("left") ? "0%": -1 !== t.indexOf("right") ? "100%": n[0],
            r = -1 !== t.indexOf("top") ? "0%": -1 !== t.indexOf("bottom") ? "100%": n[1];
            if (n.length > 3 && !e) {
                for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(at(n[i]));
                return t.join(",")
            }
            return null == r ? r = "center" === s ? "50%": "0": "center" === r && (r = "50%"),
            ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"),
            t = s + " " + r + (n.length > 2 ? " " + n[2] : ""),
            e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(x, "")), e.oy = parseFloat(r.replace(x, "")), e.v = t),
            e || t
        },
        lt = function(t, e) {
            return "function" == typeof t && (t = t(_, g)),
            "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
        },
        ht = function(t, e) {
            return "function" == typeof t && (t = t(_, g)),
            null == t ? e: "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e: parseFloat(t) || 0
        },
        ct = function(t, e, i, n) {
            var s, r, o, a, l;
            return "function" == typeof t && (t = t(_, g)),
            null == t ? a = e: "number" == typeof t ? a = t: (s = 360, r = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * ( - 1 === t.indexOf("rad") ? 1 : L) - (l ? 0 : e), r.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= s) !== o % (s / 2) && (o = 0 > o ? o + s: o - s), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * s) % s - (o / s | 0) * s: -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * s) % s - (o / s | 0) * s)), a = e + o),
            1e-6 > a && a > -1e-6 && (a = 0),
            a
        },
        ut = {
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
        dt = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
            255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i: 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        pt = o.parseColor = function(t, e) {
            var i, n, s, r, o, a, l, h, c, u, d;
            if (t) if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
            else {
                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ut[t]) i = ut[t];
                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), s = t.charAt(2), r = t.charAt(3), t = "#" + n + n + s + s + r + r),
                t = parseInt(t.substr(1), 16),
                i = [t >> 16, t >> 8 & 255, 255 & t];
                else if ("hsl" === t.substr(0, 3)) if (i = d = t.match(v), e) {
                    if ( - 1 !== t.indexOf("=")) return t.match(y)
                } else o = Number(i[0]) % 360 / 360,
                a = Number(i[1]) / 100,
                l = Number(i[2]) / 100,
                s = .5 >= l ? l * (a + 1) : l + a - l * a,
                n = 2 * l - s,
                i.length > 3 && (i[3] = Number(i[3])),
                i[0] = dt(o + 1 / 3, n, s),
                i[1] = dt(o, n, s),
                i[2] = dt(o - 1 / 3, n, s);
                else i = t.match(v) || ut.transparent;
                i[0] = Number(i[0]),
                i[1] = Number(i[1]),
                i[2] = Number(i[2]),
                i.length > 3 && (i[3] = Number(i[3]))
            } else i = ut.black;
            return e && !d && (n = i[0] / 255, s = i[1] / 255, r = i[2] / 255, h = Math.max(n, s, r), c = Math.min(n, s, r), l = (h + c) / 2, h === c ? o = a = 0 : (u = h - c, a = l > .5 ? u / (2 - h - c) : u / (h + c), o = h === n ? (s - r) / u + (r > s ? 6 : 0) : h === s ? (r - n) / u + 2 : (n - s) / u + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0),
            i
        },
        ft = function(t, e) {
            var i, n, s, r = t.match(mt) || [],
            o = 0,
            a = "";
            if (!r.length) return t;
            for (i = 0; i < r.length; i++) n = r[i],
            s = t.substr(o, t.indexOf(n, o) - o),
            o += s.length + n.length,
            n = pt(n, e),
            3 === n.length && n.push(1),
            a += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
            return a + t.substr(o)
        },
        mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (h in ut) mt += "|" + h + "\\b";
        mt = new RegExp(mt + ")", "gi"),
        o.colorStringFilter = function(t) {
            var e, i = t[0] + " " + t[1];
            mt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ft(t[0], e), t[1] = ft(t[1], e)),
            mt.lastIndex = 0
        },
        e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
        var gt = function(t, e, i, n) {
            if (null == t) return function(t) {
                return t
            };
            var s, r = e ? (t.match(mt) || [""])[0] : "",
            o = t.split(r).join("").match(b) || [],
            a = t.substr(0, t.indexOf(o[0])),
            l = ")" === t.charAt(t.length - 1) ? ")": "",
            h = -1 !== t.indexOf(" ") ? " ": ",",
            c = o.length,
            u = c > 0 ? o[0].replace(v, "") : "";
            return c ? s = e ?
            function(t) {
                var e, d, p, f;
                if ("number" == typeof t) t += u;
                else if (n && N.test(t)) {
                    for (f = t.replace(N, "|").split("|"), p = 0; p < f.length; p++) f[p] = s(f[p]);
                    return f.join(",")
                }
                if (e = (t.match(mt) || [r])[0], d = t.split(e).join("").match(b) || [], p = d.length, c > p--) for (; ++p < c;) d[p] = i ? d[(p - 1) / 2 | 0] : o[p];
                return a + d.join(h) + h + e + l + ( - 1 !== t.indexOf("inset") ? " inset": "")
            }: function(t) {
                var e, r, d;
                if ("number" == typeof t) t += u;
                else if (n && N.test(t)) {
                    for (r = t.replace(N, "|").split("|"), d = 0; d < r.length; d++) r[d] = s(r[d]);
                    return r.join(",")
                }
                if (e = t.match(b) || [], d = e.length, c > d--) for (; ++d < c;) e[d] = i ? e[(d - 1) / 2 | 0] : o[d];
                return a + e.join(h) + l
            }: function(t) {
                return t
            }
        },
        _t = function(t) {
            return t = t.split(","),
            function(e, i, n, s, r, o, a) {
                var l, h = (i + "").split(" ");
                for (a = {},
                l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                return s.parse(e, a, r, o)
            }
        },
        vt = (q._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, n, s, r, o = this.data,
            a = o.proxy,
            l = o.firstMPT; l;) e = a[l.v],
            l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0),
            l.t[l.p] = e,
            l = l._next;
            if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t) for (l = o.firstMPT, r = 1 === t ? "e": "b"; l;) {
                if (i = l.t, i.type) {
                    if (1 === i.type) {
                        for (s = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                        i[r] = s
                    }
                } else i[r] = i.s + i.xs0;
                l = l._next
            }
        },
        function(t, e, i, n, s) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = s,
            n && (n._prev = this, this._next = n)
        }),
        yt = (q._parseToProxy = function(t, e, i, n, s, r) {
            var o, a, l, h, c, u = n,
            d = {},
            p = {},
            f = i._transform,
            m = B;
            for (i._transform = null, B = e, n = c = i.parse(t, e, n, s), B = m, r && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                if (n.type <= 1 && (a = n.p, p[a] = n.s + n.c, d[a] = n.s, r || (h = new vt(n, "s", a, h, n.r), n.c = 0), 1 === n.type)) for (o = n.l; --o > 0;) l = "xn" + o,
                a = n.p + "_" + l,
                p[a] = n.data[l],
                d[a] = n[l],
                r || (h = new vt(n, l, a, h, n.rxp[l]));
                n = n._next
            }
            return {
                proxy: d,
                end: p,
                firstMPT: h,
                pt: c
            }
        },
        q.CSSPropTween = function(t, e, n, s, o, a, l, h, c, u, d) {
            this.t = t,
            this.p = e,
            this.s = n,
            this.c = s,
            this.n = l || e,
            t instanceof yt || r.push(this.n),
            this.r = h,
            this.type = a || 0,
            c && (this.pr = c, i = !0),
            this.b = void 0 === u ? n: u,
            this.e = void 0 === d ? n + s: d,
            o && (this._next = o, o._prev = this)
        }),
        bt = function(t, e, i, n, s, r) {
            var o = new yt(t, e, i, n - i, s, -1, r);
            return o.b = i,
            o.e = o.xs0 = n,
            o
        },
        xt = o.parseComplex = function(t, e, i, n, s, r, a, l, h, u) {
            i = i || r || "",
            "function" == typeof n && (n = n(_, g)),
            a = new yt(t, e, 0, 0, a, u ? 2 : 1, null, !1, l, i, n),
            n += "",
            s && mt.test(n + i) && (n = [i, n], o.colorStringFilter(n), i = n[0], n = n[1]);
            var d, p, f, m, b, x, T, w, S, P, C, E, k, A = i.split(", ").join(",").split(" "),
            R = n.split(", ").join(",").split(" "),
            D = A.length,
            M = !1 !== c;
            for (( - 1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && ( - 1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (A = A.join(" ").replace(N, ", ").split(" "), R = R.join(" ").replace(N, ", ").split(" ")) : (A = A.join(" ").split(",").join(", ").split(" "), R = R.join(" ").split(",").join(", ").split(" ")), D = A.length), D !== R.length && (A = (r || "").split(" "), D = A.length), a.plugin = h, a.setRatio = u, mt.lastIndex = 0, d = 0; D > d; d++) if (m = A[d], b = R[d], (w = parseFloat(m)) || 0 === w) a.appendXtra("", w, lt(b, w), b.replace(y, ""), M && -1 !== b.indexOf("px"), !0);
            else if (s && mt.test(m)) E = b.indexOf(")") + 1,
            E = ")" + (E ? b.substr(E) : ""),
            k = -1 !== b.indexOf("hsl") && W,
            P = b,
            m = pt(m, k),
            b = pt(b, k),
            S = m.length + b.length > 6,
            S && !W && 0 === b[3] ? (a["xs" + a.l] += a.l ? " transparent": "transparent", a.e = a.e.split(R[d]).join("transparent")) : (W || (S = !1), k ? a.appendXtra(P.substr(0, P.indexOf("hsl")) + (S ? "hsla(": "hsl("), m[0], lt(b[0], m[0]), ",", !1, !0).appendXtra("", m[1], lt(b[1], m[1]), "%,", !1).appendXtra("", m[2], lt(b[2], m[2]), S ? "%,": "%" + E, !1) : a.appendXtra(P.substr(0, P.indexOf("rgb")) + (S ? "rgba(": "rgb("), m[0], b[0] - m[0], ",", !0, !0).appendXtra("", m[1], b[1] - m[1], ",", !0).appendXtra("", m[2], b[2] - m[2], S ? ",": E, !0), S && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (b.length < 4 ? 1 : b[3]) - m, E, !1))),
            mt.lastIndex = 0;
            else if (x = m.match(v)) {
                if (! (T = b.match(y)) || T.length !== x.length) return a;
                for (f = 0, p = 0; p < x.length; p++) C = x[p],
                P = m.indexOf(C, f),
                a.appendXtra(m.substr(f, P - f), Number(C), lt(T[p], C), "", M && "px" === m.substr(P + C.length, 2), 0 === p),
                f = P + C.length;
                a["xs" + a.l] += m.substr(f)
            } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + b: b;
            if ( - 1 !== n.indexOf("=") && a.data) {
                for (E = a.xs0 + a.data.s, d = 1; d < a.l; d++) E += a["xs" + d] + a.data["xn" + d];
                a.e = E + a["xs" + d]
            }
            return a.l || (a.type = -1, a.xs0 = a.e),
            a.xfirst || a
        },
        Tt = 9;
        for (h = yt.prototype, h.l = h.pr = 0; --Tt > 0;) h["xn" + Tt] = 0,
        h["xs" + Tt] = "";
        h.xs0 = "",
        h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null,
        h.appendXtra = function(t, e, i, n, s, r) {
            var o = this,
            a = o.l;
            return o["xs" + a] += r && (a || o["xs" + a]) ? " " + t: t || "",
            i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = s, o["xn" + a] = e, o.plugin || (o.xfirst = new yt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, s, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                s: e + i
            },
            o.rxp = {},
            o.s = e, o.c = i, o.r = s, o)) : (o["xs" + a] += e + (n || ""), o)
        };
        var wt = function(t, e) {
            e = e || {},
            this.p = e.prefix ? Q(t) || t: t,
            l[t] = l[this.p] = this,
            this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        },
        St = q._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var n, s = t.split(","),
            r = e.defaultValue;
            for (i = i || [r], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix,
            e.defaultValue = i[n] || r,
            new wt(s[n], e)
        },
        Pt = q._registerPluginProp = function(t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                St(t, {
                    parser: function(t, i, n, s, r, o, h) {
                        var c = a.com.greensock.plugins[e];
                        return c ? (c._cssRegister(), l[n].parse(t, i, n, s, r, o, h)) : ($("Error: " + e + " js file not loaded."), r)
                    }
                })
            }
        };
        h = wt.prototype,
        h.parseComplex = function(t, e, i, n, s, r) {
            var o, a, l, h, c, u, d = this.keyword;
            if (this.multi && (N.test(i) || N.test(e) ? (a = e.replace(N, "|").split("|"), l = i.replace(N, "|").split("|")) : d && (a = [e], l = [i])), l) {
                for (h = l.length > a.length ? l.length: a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt,
                i = l[o] = l[o] || this.dflt,
                d && (c = e.indexOf(d), u = i.indexOf(d), c !== u && ( - 1 === u ? a[o] = a[o].split(d).join("") : -1 === c && (a[o] += " " + d)));
                e = a.join(", "),
                i = l.join(", ")
            }
            return xt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r)
        },
        h.parse = function(t, e, i, n, r, o, a) {
            return this.parseComplex(t.style, this.format(K(t, this.p, s, !1, this.dflt)), this.format(e), r, o)
        },
        o.registerSpecialProp = function(t, e, i) {
            St(t, {
                parser: function(t, n, s, r, o, a, l) {
                    var h = new yt(t, s, 0, 0, o, 2, s, !1, i);
                    return h.plugin = a,
                    h.setRatio = e(t, n, r._tween, s),
                    h
                },
                priority: i
            })
        },
        o.useSVGTransformAttr = !0;
        var Ct, Et = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        kt = Q("transform"),
        At = G + "transform",
        Rt = Q("transformOrigin"),
        Dt = null !== Q("perspective"),
        Mt = q.Transform = function() {
            this.perspective = parseFloat(o.defaultTransformPerspective) || 0,
            this.force3D = !(!1 === o.defaultForce3D || !Dt) && (o.defaultForce3D || "auto")
        },
        Ot = _gsScope.SVGElement,
        Nt = function(t, e, i) {
            var n, s = H.createElementNS("http://www.w3.org/2000/svg", t),
            r = /([a-z])([A-Z])/g;
            for (n in i) s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(s),
            s
        },
        It = H.documentElement || {},
        Ft = function() {
            var t, e, i, n = m || /Android/i.test(U) && !_gsScope.chrome;
            return H.createElementNS && !n && (t = Nt("svg", It), e = Nt("rect", t, {
                width: 100,
                height: 50,
                x: 100
            }), i = e.getBoundingClientRect().width, e.style[Rt] = "50% 50%", e.style[kt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && Dt), It.removeChild(t)),
            n
        } (),
        Lt = function(t, e, i, n, s, r) {
            var a, l, h, c, u, d, p, f, m, g, _, v, y, b, x = t._gsTransform,
            T = jt(t, !0);
            x && (y = x.xOrigin, b = x.yOrigin),
            (!n || (a = n.split(" ")).length < 2) && (p = t.getBBox(), 0 === p.x && 0 === p.y && p.width + p.height === 0 && (p = {
                x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                width: 0,
                height: 0
            }), e = at(e).split(" "), a = [( - 1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width: parseFloat(e[0])) + p.x, ( - 1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height: parseFloat(e[1])) + p.y]),
            i.xOrigin = c = parseFloat(a[0]),
            i.yOrigin = u = parseFloat(a[1]),
            n && T !== zt && (d = T[0], p = T[1], f = T[2], m = T[3], g = T[4], _ = T[5], (v = d * m - p * f) && (l = c * (m / v) + u * ( - f / v) + (f * _ - m * g) / v, h = c * ( - p / v) + u * (d / v) - (d * _ - p * g) / v, c = i.xOrigin = a[0] = l, u = i.yOrigin = a[1] = h)),
            x && (r && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), s || !1 !== s && !1 !== o.defaultSmoothOrigin ? (l = c - y, h = u - b, x.xOffset += l * T[0] + h * T[2] - l, x.yOffset += l * T[1] + h * T[3] - h) : x.xOffset = x.yOffset = 0),
            r || t.setAttribute("data-svg-origin", a.join(" "))
        },
        Bt = function(t) {
            var e, i = z("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = this.parentNode,
            s = this.nextSibling,
            r = this.style.cssText;
            if (It.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                e = this.getBBox(),
                this._originalGetBBox = this.getBBox,
                this.getBBox = Bt
            } catch(t) {} else this._originalGetBBox && (e = this._originalGetBBox());
            return s ? n.insertBefore(this, s) : n.appendChild(this),
            It.removeChild(i),
            this.style.cssText = r,
            e
        },
        Xt = function(t) {
            try {
                return t.getBBox()
            } catch(e) {
                return Bt.call(t, !0)
            }
        },
        Ht = function(t) {
            return ! (!Ot || !t.getCTM || t.parentNode && !t.ownerSVGElement || !Xt(t))
        },
        zt = [1, 0, 0, 1, 0, 0],
        jt = function(t, e) {
            var i, n, s, r, o, a, l = t._gsTransform || new Mt,
            h = t.style;
            if (kt ? n = K(t, At, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(M), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !kt || !(a = !Z(t) || "none" === Z(t).display) && t.parentNode || (a && (r = h.display, h.display = "block"), t.parentNode || (o = 1, It.appendChild(t)), n = K(t, At, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, r ? h.display = r: a && Vt(h, "display"), o && It.removeChild(t)), (l.svg || t.getCTM && Ht(t)) && (i && -1 !== (h[kt] + "").indexOf("matrix") && (n = h[kt], i = 0), s = t.getAttribute("transform"), i && s && (s = t.transform.baseVal.consolidate().matrix, n = "matrix(" + s.a + "," + s.b + "," + s.c + "," + s.d + "," + s.e + "," + s.f + ")", i = 0)), i) return zt;
            for (s = (n || "").match(v) || [], Tt = s.length; --Tt > -1;) r = Number(s[Tt]),
            s[Tt] = (o = r - (r |= 0)) ? (1e5 * o + (0 > o ? -.5 : .5) | 0) / 1e5 + r: r;
            return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
        },
        Yt = q.getTransform = function(t, i, n, s) {
            if (t._gsTransform && n && !s) return t._gsTransform;
            var r, a, l, h, c, u, d = n ? t._gsTransform || new Mt: new Mt,
            p = d.scaleX < 0,
            f = 2e-5,
            m = 1e5,
            g = Dt ? parseFloat(K(t, Rt, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
            _ = parseFloat(o.defaultTransformPerspective) || 0;
            if (d.svg = !(!t.getCTM || !Ht(t)), d.svg && (Lt(t, K(t, Rt, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), Ct = o.useSVGTransformAttr || Ft), (r = jt(t)) !== zt) {
                if (16 === r.length) {
                    var v, y, b, x, T, w = r[0],
                    S = r[1],
                    P = r[2],
                    C = r[3],
                    E = r[4],
                    k = r[5],
                    A = r[6],
                    R = r[7],
                    D = r[8],
                    M = r[9],
                    O = r[10],
                    N = r[12],
                    I = r[13],
                    F = r[14],
                    B = r[11],
                    X = Math.atan2(A, O);
                    d.zOrigin && (F = -d.zOrigin, N = D * F - r[12], I = M * F - r[13], F = O * F + d.zOrigin - r[14]),
                    d.rotationX = X * L,
                    X && (x = Math.cos( - X), T = Math.sin( - X), v = E * x + D * T, y = k * x + M * T, b = A * x + O * T, D = E * -T + D * x, M = k * -T + M * x, O = A * -T + O * x, B = R * -T + B * x, E = v, k = y, A = b),
                    X = Math.atan2( - P, O),
                    d.rotationY = X * L,
                    X && (x = Math.cos( - X), T = Math.sin( - X), v = w * x - D * T, y = S * x - M * T, b = P * x - O * T, M = S * T + M * x, O = P * T + O * x, B = C * T + B * x, w = v, S = y, P = b),
                    X = Math.atan2(S, w),
                    d.rotation = X * L,
                    X && (x = Math.cos(X), T = Math.sin(X), v = w * x + S * T, y = E * x + k * T, b = D * x + M * T, S = S * x - w * T, k = k * x - E * T, M = M * x - D * T, w = v, E = y, D = b),
                    d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY),
                    X = Math.atan2(E, k),
                    d.scaleX = (Math.sqrt(w * w + S * S + P * P) * m + .5 | 0) / m,
                    d.scaleY = (Math.sqrt(k * k + A * A) * m + .5 | 0) / m,
                    d.scaleZ = (Math.sqrt(D * D + M * M + O * O) * m + .5 | 0) / m,
                    w /= d.scaleX,
                    E /= d.scaleY,
                    S /= d.scaleX,
                    k /= d.scaleY,
                    Math.abs(X) > f ? (d.skewX = X * L, E = 0, "simple" !== d.skewType && (d.scaleY *= 1 / Math.cos(X))) : d.skewX = 0,
                    d.perspective = B ? 1 / (0 > B ? -B: B) : 0,
                    d.x = N,
                    d.y = I,
                    d.z = F,
                    d.svg && (d.x -= d.xOrigin - (d.xOrigin * w - d.yOrigin * E), d.y -= d.yOrigin - (d.yOrigin * S - d.xOrigin * k))
                } else if (!Dt || s || !r.length || d.x !== r[4] || d.y !== r[5] || !d.rotationX && !d.rotationY) {
                    var H = r.length >= 6,
                    z = H ? r[0] : 1,
                    j = r[1] || 0,
                    Y = r[2] || 0,
                    q = H ? r[3] : 1;
                    d.x = r[4] || 0,
                    d.y = r[5] || 0,
                    l = Math.sqrt(z * z + j * j),
                    h = Math.sqrt(q * q + Y * Y),
                    c = z || j ? Math.atan2(j, z) * L: d.rotation || 0,
                    u = Y || q ? Math.atan2(Y, q) * L + c: d.skewX || 0,
                    d.scaleX = l,
                    d.scaleY = h,
                    d.rotation = c,
                    d.skewX = u,
                    Dt && (d.rotationX = d.rotationY = d.z = 0, d.perspective = _, d.scaleZ = 1),
                    d.svg && (d.x -= d.xOrigin - (d.xOrigin * z + d.yOrigin * Y), d.y -= d.yOrigin - (d.xOrigin * j + d.yOrigin * q))
                }
                Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (p ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180)),
                d.zOrigin = g;
                for (a in d) d[a] < f && d[a] > -f && (d[a] = 0)
            }
            return n && (t._gsTransform = d, d.svg && (Ct && t.style[kt] ? e.delayedCall(.001,
            function() {
                Vt(t.style, kt)
            }) : !Ct && t.getAttribute("transform") && e.delayedCall(.001,
            function() {
                t.removeAttribute("transform")
            }))),
            d
        },
        qt = function(t) {
            var e, i, n = this.data,
            s = -n.rotation * F,
            r = s + n.skewX * F,
            o = 1e5,
            a = (Math.cos(s) * n.scaleX * o | 0) / o,
            l = (Math.sin(s) * n.scaleX * o | 0) / o,
            h = (Math.sin(r) * -n.scaleY * o | 0) / o,
            c = (Math.cos(r) * n.scaleY * o | 0) / o,
            u = this.t.style,
            d = this.t.currentStyle;
            if (d) {
                i = l,
                l = -h,
                h = -i,
                e = d.filter,
                u.filter = "";
                var p, f, g = this.t.offsetWidth,
                _ = this.t.offsetHeight,
                v = "absolute" !== d.position,
                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                b = n.x + g * n.xPercent / 100,
                x = n.y + _ * n.yPercent / 100;
                if (null != n.ox && (p = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2, f = (n.oyp ? _ * n.oy * .01 : n.oy) - _ / 2, b += p - (p * a + f * l), x += f - (p * h + f * c)), v ? (p = g / 2, f = _ / 2, y += ", Dx=" + (p - (p * a + f * l) + b) + ", Dy=" + (f - (p * h + f * c) + x) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(O, y) : u.filter = y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === c && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                    var S, P, C, E = 8 > m ? 1 : -1;
                    for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a: a) * g + (0 > l ? -l: l) * _)) / 2 + b), n.ieOffsetY = Math.round((_ - ((0 > c ? -c: c) * _ + (0 > h ? -h: h) * g)) / 2 + x), Tt = 0; 4 > Tt; Tt++) P = rt[Tt],
                    S = d[P],
                    i = -1 !== S.indexOf("px") ? parseFloat(S) : tt(this.t, P, parseFloat(S), S.replace(T, "")) || 0,
                    C = i !== n[P] ? 2 > Tt ? -n.ieOffsetX: -n.ieOffsetY: 2 > Tt ? p - n.ieOffsetX: f - n.ieOffsetY,
                    u[P] = (n[P] = Math.round(i - C * (0 === Tt || 2 === Tt ? 1 : E))) + "px"
                }
            }
        },
        Ut = q.set3DTransformRatio = q.setTransformRatio = function(t) {
            var e, i, n, s, r, o, a, l, h, c, u, d, f, m, g, _, v, y, b, x, T, w, S, P = this.data,
            C = this.t.style,
            E = P.rotation,
            k = P.rotationX,
            A = P.rotationY,
            R = P.scaleX,
            D = P.scaleY,
            M = P.scaleZ,
            O = P.x,
            N = P.y,
            I = P.z,
            L = P.svg,
            B = P.perspective,
            X = P.force3D,
            H = P.skewY,
            z = P.skewX;
            if (H && (z += H, E += H), ((1 === t || 0 === t) && "auto" === X && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !X) && !I && !B && !A && !k && 1 === M || Ct && L || !Dt) return void(E || z || L ? (E *= F, w = z * F, S = 1e5, i = Math.cos(E) * R, r = Math.sin(E) * R, n = Math.sin(E - w) * -D, o = Math.cos(E - w) * D, w && "simple" === P.skewType && (e = Math.tan(w - H * F), e = Math.sqrt(1 + e * e), n *= e, o *= e, H && (e = Math.tan(H * F), e = Math.sqrt(1 + e * e), i *= e, r *= e)), L && (O += P.xOrigin - (P.xOrigin * i + P.yOrigin * n) + P.xOffset, N += P.yOrigin - (P.xOrigin * r + P.yOrigin * o) + P.yOffset, Ct && (P.xPercent || P.yPercent) && (g = this.t.getBBox(), O += .01 * P.xPercent * g.width, N += .01 * P.yPercent * g.height), g = 1e-6, g > O && O > -g && (O = 0), g > N && N > -g && (N = 0)), b = (i * S | 0) / S + "," + (r * S | 0) / S + "," + (n * S | 0) / S + "," + (o * S | 0) / S + "," + O + "," + N + ")", L && Ct ? this.t.setAttribute("transform", "matrix(" + b) : C[kt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(": "matrix(") + b) : C[kt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(": "matrix(") + R + ",0,0," + D + "," + O + "," + N + ")");
            if (p && (g = 1e-4, g > R && R > -g && (R = M = 2e-5), g > D && D > -g && (D = M = 2e-5), !B || P.z || P.rotationX || P.rotationY || (B = 0)), E || z) E *= F,
            _ = i = Math.cos(E),
            v = r = Math.sin(E),
            z && (E -= z * F, _ = Math.cos(E), v = Math.sin(E), "simple" === P.skewType && (e = Math.tan((z - H) * F), e = Math.sqrt(1 + e * e), _ *= e, v *= e, P.skewY && (e = Math.tan(H * F), e = Math.sqrt(1 + e * e), i *= e, r *= e))),
            n = -v,
            o = _;
            else {
                if (! (A || k || 1 !== M || B || L)) return void(C[kt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(": "translate3d(") + O + "px," + N + "px," + I + "px)" + (1 !== R || 1 !== D ? " scale(" + R + "," + D + ")": ""));
                i = o = 1,
                n = r = 0
            }
            c = 1,
            s = a = l = h = u = d = 0,
            f = B ? -1 / B: 0,
            m = P.zOrigin,
            g = 1e-6,
            x = ",",
            T = "0",
            E = A * F,
            E && (_ = Math.cos(E), v = Math.sin(E), l = -v, u = f * -v, s = i * v, a = r * v, c = _, f *= _, i *= _, r *= _),
            E = k * F,
            E && (_ = Math.cos(E), v = Math.sin(E), e = n * _ + s * v, y = o * _ + a * v, h = c * v, d = f * v, s = n * -v + s * _, a = o * -v + a * _, c *= _, f *= _, n = e, o = y),
            1 !== M && (s *= M, a *= M, c *= M, f *= M),
            1 !== D && (n *= D, o *= D, h *= D, d *= D),
            1 !== R && (i *= R, r *= R, l *= R, u *= R),
            (m || L) && (m && (O += s * -m, N += a * -m, I += c * -m + m), L && (O += P.xOrigin - (P.xOrigin * i + P.yOrigin * n) + P.xOffset, N += P.yOrigin - (P.xOrigin * r + P.yOrigin * o) + P.yOffset), g > O && O > -g && (O = T), g > N && N > -g && (N = T), g > I && I > -g && (I = 0)),
            b = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(": "matrix3d(",
            b += (g > i && i > -g ? T: i) + x + (g > r && r > -g ? T: r) + x + (g > l && l > -g ? T: l),
            b += x + (g > u && u > -g ? T: u) + x + (g > n && n > -g ? T: n) + x + (g > o && o > -g ? T: o),
            k || A || 1 !== M ? (b += x + (g > h && h > -g ? T: h) + x + (g > d && d > -g ? T: d) + x + (g > s && s > -g ? T: s), b += x + (g > a && a > -g ? T: a) + x + (g > c && c > -g ? T: c) + x + (g > f && f > -g ? T: f) + x) : b += ",0,0,0,0,1,0,",
            b += O + x + N + x + I + x + (B ? 1 + -I / B: 1) + ")",
            C[kt] = b
        };
        h = Mt.prototype,
        h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0,
        h.scaleX = h.scaleY = h.scaleZ = 1,
        St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, n, r, a, l) {
                if (n._lastParsedTransform === l) return r;
                n._lastParsedTransform = l;
                var h, c = l.scale && "function" == typeof l.scale ? l.scale: 0;
                "function" == typeof l[i] && (h = l[i], l[i] = e),
                c && (l.scale = c(_, t));
                var u, d, p, f, m, v, y, b, x, T = t._gsTransform,
                w = t.style,
                S = Et.length,
                P = l,
                C = {},
                E = "transformOrigin",
                k = Yt(t, s, !0, P.parseTransform),
                A = P.transform && ("function" == typeof P.transform ? P.transform(_, g) : P.transform);
                if (k.skewType = P.skewType || k.skewType || o.defaultSkewType, n._transform = k, A && "string" == typeof A && kt) d = j.style,
                d[kt] = A,
                d.display = "block",
                d.position = "absolute",
                H.body.appendChild(j),
                u = Yt(j, null, !1),
                "simple" === k.skewType && (u.scaleY *= Math.cos(u.skewX * F)),
                k.svg && (v = k.xOrigin, y = k.yOrigin, u.x -= k.xOffset, u.y -= k.yOffset, (P.transformOrigin || P.svgOrigin) && (A = {},
                Lt(t, at(P.transformOrigin), A, P.svgOrigin, P.smoothOrigin, !0), v = A.xOrigin, y = A.yOrigin, u.x -= A.xOffset - k.xOffset, u.y -= A.yOffset - k.yOffset), (v || y) && (b = jt(j, !0), u.x -= v - (v * b[0] + y * b[2]), u.y -= y - (v * b[1] + y * b[3]))),
                H.body.removeChild(j),
                u.perspective || (u.perspective = k.perspective),
                null != P.xPercent && (u.xPercent = ht(P.xPercent, k.xPercent)),
                null != P.yPercent && (u.yPercent = ht(P.yPercent, k.yPercent));
                else if ("object" == typeof P) {
                    if (u = {
                        scaleX: ht(null != P.scaleX ? P.scaleX: P.scale, k.scaleX),
                        scaleY: ht(null != P.scaleY ? P.scaleY: P.scale, k.scaleY),
                        scaleZ: ht(P.scaleZ, k.scaleZ),
                        x: ht(P.x, k.x),
                        y: ht(P.y, k.y),
                        z: ht(P.z, k.z),
                        xPercent: ht(P.xPercent, k.xPercent),
                        yPercent: ht(P.yPercent, k.yPercent),
                        perspective: ht(P.transformPerspective, k.perspective)
                    },
                    null != (m = P.directionalRotation)) if ("object" == typeof m) for (d in m) P[d] = m[d];
                    else P.rotation = m;
                    "string" == typeof P.x && -1 !== P.x.indexOf("%") && (u.x = 0, u.xPercent = ht(P.x, k.xPercent)),
                    "string" == typeof P.y && -1 !== P.y.indexOf("%") && (u.y = 0, u.yPercent = ht(P.y, k.yPercent)),
                    u.rotation = ct("rotation" in P ? P.rotation: "shortRotation" in P ? P.shortRotation + "_short": "rotationZ" in P ? P.rotationZ: k.rotation, k.rotation, "rotation", C),
                    Dt && (u.rotationX = ct("rotationX" in P ? P.rotationX: "shortRotationX" in P ? P.shortRotationX + "_short": k.rotationX || 0, k.rotationX, "rotationX", C), u.rotationY = ct("rotationY" in P ? P.rotationY: "shortRotationY" in P ? P.shortRotationY + "_short": k.rotationY || 0, k.rotationY, "rotationY", C)),
                    u.skewX = ct(P.skewX, k.skewX),
                    u.skewY = ct(P.skewY, k.skewY)
                }
                for (Dt && null != P.force3D && (k.force3D = P.force3D, f = !0), (p = k.force3D || k.z || k.rotationX || k.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == P.scale || (u.scaleZ = 1); --S > -1;) x = Et[S],
                ((A = u[x] - k[x]) > 1e-6 || -1e-6 > A || null != P[x] || null != B[x]) && (f = !0, r = new yt(k, x, k[x], A, r), x in C && (r.e = C[x]), r.xs0 = 0, r.plugin = a, n._overwriteProps.push(r.n));
                return A = P.transformOrigin,
                k.svg && (A || P.svgOrigin) && (v = k.xOffset, y = k.yOffset, Lt(t, at(A), u, P.svgOrigin, P.smoothOrigin), r = bt(k, "xOrigin", (T ? k: u).xOrigin, u.xOrigin, r, E), r = bt(k, "yOrigin", (T ? k: u).yOrigin, u.yOrigin, r, E), (v !== k.xOffset || y !== k.yOffset) && (r = bt(k, "xOffset", T ? v: k.xOffset, k.xOffset, r, E), r = bt(k, "yOffset", T ? y: k.yOffset, k.yOffset, r, E)), A = "0px 0px"),
                (A || Dt && p && k.zOrigin) && (kt ? (f = !0, x = Rt, A = (A || K(t, x, s, !1, "50% 50%")) + "", r = new yt(w, x, 0, 0, r, -1, E), r.b = w[x], r.plugin = a, Dt ? (d = k.zOrigin, A = A.split(" "), k.zOrigin = (A.length > 2 && (0 === d || "0px" !== A[2]) ? parseFloat(A[2]) : d) || 0, r.xs0 = r.e = A[0] + " " + (A[1] || "50%") + " 0px", r = new yt(k, "zOrigin", 0, 0, r, -1, r.n), r.b = d, r.xs0 = r.e = k.zOrigin) : r.xs0 = r.e = A) : at(A + "", k)),
                f && (n._transformType = k.svg && Ct || !p && 3 !== this._transformType ? 2 : 3),
                h && (l[i] = h),
                c && (l.scale = c),
                r
            },
            prefix: !0
        }),
        St("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        St("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, r, o, a) {
                e = this.format(e);
                var l, h, c, u, d, p, f, m, g, _, v, y, b, x, T, w, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                P = t.style;
                for (g = parseFloat(t.offsetWidth), _ = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < S.length; h++) this.p.indexOf("border") && (S[h] = Q(S[h])),
                d = u = K(t, S[h], s, !1, "0px"),
                -1 !== d.indexOf(" ") && (u = d.split(" "), d = u[0], u = u[1]),
                p = c = l[h],
                f = parseFloat(d),
                y = d.substr((f + "").length),
                b = "=" === p.charAt(1),
                b ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), v = p.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(p), v = p.substr((m + "").length)),
                "" === v && (v = n[i] || y),
                v !== y && (x = tt(t, "borderLeft", f, y), T = tt(t, "borderTop", f, y), "%" === v ? (d = x / g * 100 + "%", u = T / _ * 100 + "%") : "em" === v ? (w = tt(t, "borderLeft", 1, "em"), d = x / w + "em", u = T / w + "em") : (d = x + "px", u = T + "px"), b && (p = parseFloat(d) + m + v, c = parseFloat(u) + m + v)),
                o = xt(P, S[h], d + " " + u, p + " " + c, !1, "0px", o);
                return o
            },
            prefix: !0,
            formatter: gt("0px 0px 0px 0px", !1, !0)
        }),
        St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, r, o) {
                return xt(t.style, i, this.format(K(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", r)
            },
            prefix: !0,
            formatter: gt("0px 0px", !1, !0)
        }),
        St("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, n, r, o) {
                var a, l, h, c, u, d, p = "background-position",
                f = s || Z(t, null),
                g = this.format((f ? m ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                _ = this.format(e);
                if ( - 1 !== g.indexOf("%") != ( - 1 !== _.indexOf("%")) && _.split(",").length < 2 && (d = K(t, "backgroundImage").replace(A, "")) && "none" !== d) {
                    for (a = g.split(" "), l = _.split(" "), Y.setAttribute("src", d), h = 2; --h > -1;) g = a[h],
                    (c = -1 !== g.indexOf("%")) !== ( - 1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - Y.width: t.offsetHeight - Y.height, a[h] = c ? parseFloat(g) / 100 * u + "px": parseFloat(g) / u * 100 + "%");
                    g = a.join(" ")
                }
                return this.parseComplex(t.style, g, _, r, o)
            },
            formatter: at
        }),
        St("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
                return t += "",
                at( - 1 === t.indexOf(" ") ? t + " " + t: t)
            }
        }),
        St("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        St("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        St("transformStyle", {
            prefix: !0
        }),
        St("backfaceVisibility", {
            prefix: !0
        }),
        St("userSelect", {
            prefix: !0
        }),
        St("margin", {
            parser: _t("marginTop,marginRight,marginBottom,marginLeft")
        }),
        St("padding", {
            parser: _t("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        St("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, n, r, o) {
                var a, l, h;
                return 9 > m ? (l = t.currentStyle, h = 8 > m ? " ": ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(K(t, this.p, s, !1, this.dflt)), e = this.format(e)),
                this.parseComplex(t.style, a, e, r, o)
            }
        }),
        St("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        St("autoRound,strictUnits", {
            parser: function(t, e, i, n, s) {
                return s
            }
        }),
        St("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, n, r, o) {
                var a = K(t, "borderTopWidth", s, !1, "0px"),
                l = this.format(e).split(" "),
                h = l[0].replace(T, "");
                return "px" !== h && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, h) + h),
                this.parseComplex(t.style, this.format(a + " " + K(t, "borderTopStyle", s, !1, "solid") + " " + K(t, "borderTopColor", s, !1, "#000")), l.join(" "), r, o)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
            }
        }),
        St("borderWidth", {
            parser: _t("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        St("float,cssFloat,styleFloat", {
            parser: function(t, e, i, n, s, r) {
                var o = t.style,
                a = "cssFloat" in o ? "cssFloat": "styleFloat";
                return new yt(o, a, 0, 0, s, -1, i, !1, 0, o[a], e)
            }
        });
        var Wt = function(t) {
            var e, i = this.t,
            n = i.filter || K(this.data, "filter") || "",
            s = this.s + this.c * t | 0;
            100 === s && ( - 1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !K(this.data, "filter")) : (i.filter = n.replace(P, ""), e = !0)),
            e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(w, "opacity=" + s))
        };
        St("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, n, r, o) {
                var a = parseFloat(K(t, "opacity", s, !1, "1")),
                l = t.style,
                h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
                h && 1 === a && "hidden" === K(t, "visibility", s) && 0 !== e && (a = 0),
                W ? r = new yt(l, "opacity", a, e - a, r) : (r = new yt(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Wt),
                h && (r = new yt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit": "hidden", 0 === e ? "hidden": "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)),
                r
            }
        });
        var Vt = function(t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(E, "-$1").toLowerCase())) : t.removeAttribute(e))
        },
        $t = function(t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b: this.e);
                for (var e = this.data,
                i = this.t.style; e;) e.v ? i[e.p] = e.v: Vt(i, e.p),
                e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        St("className", {
            parser: function(t, e, n, r, o, a, l) {
                var h, c, u, d, p, f = t.getAttribute("class") || "",
                m = t.style.cssText;
                if (o = r._classNamePT = new yt(t, n, 0, 0, o, 2), o.setRatio = $t, o.pr = -11, i = !0, o.b = f, c = it(t, s), u = t._gsClassPT) {
                    for (d = {},
                    p = u.data; p;) d[p.p] = 1,
                    p = p._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = o,
                o.e = "=" !== e.charAt(1) ? e: f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                t.setAttribute("class", o.e),
                h = nt(t, c, it(t), l, d),
                t.setAttribute("class", f),
                o.data = h.firstMPT,
                t.style.cssText = m,
                o = o.xfirst = r.parse(t, h.difs, o, a)
            }
        });
        var Gt = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, s, r, o = this.t.style,
                a = l.transform.parse;
                if ("all" === this.e) o.cssText = "",
                s = !0;
                else for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n],
                l[i] && (l[i].parse === a ? s = !0 : i = "transformOrigin" === i ? Rt: l[i].p),
                Vt(o, i);
                s && (Vt(o, kt), (r = this.t._gsTransform) && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (St("clearProps", {
            parser: function(t, e, n, s, r) {
                return r = new yt(t, n, 0, 0, r, 2),
                r.setRatio = Gt,
                r.e = e,
                r.pr = -10,
                r.data = s._tween,
                i = !0,
                r
            }
        }), h = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = h.length; Tt--;) Pt(h[Tt]);
        h = o.prototype,
        h._firstPT = h._lastParsedTransform = h._transform = null,
        h._onInitTween = function(t, e, a, h) {
            if (!t.nodeType) return ! 1;
            this._target = g = t,
            this._tween = a,
            this._vars = e,
            _ = h,
            c = e.autoRound,
            i = !1,
            n = e.suffixMap || o.suffixMap,
            s = Z(t, ""),
            r = this._overwriteProps;
            var p, m, v, y, b, x, T, w, P, C = t.style;
            if (u && "" === C.zIndex && ("auto" === (p = K(t, "zIndex", s)) || "" === p) && this._addLazySet(C, "zIndex", 0), "string" == typeof e && (y = C.cssText, p = it(t, s), C.cssText = y + ";" + e, p = nt(t, p, it(t)).difs, !W && S.test(e) && (p.opacity = parseFloat(RegExp.$1)), e = p, C.cssText = y), e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null), this._transformType) {
                for (P = 3 === this._transformType, kt ? d && (u = !0, "" === C.zIndex && ("auto" === (T = K(t, "zIndex", s)) || "" === T) && this._addLazySet(C, "zIndex", 0), f && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible": "hidden"))) : C.zoom = 1, v = m; v && v._next;) v = v._next;
                w = new yt(t, "transform", 0, 0, null, 2),
                this._linkCSSP(w, null, v),
                w.setRatio = kt ? Ut: qt,
                w.data = this._transform || Yt(t, s, !0),
                w.tween = a,
                w.pr = -1,
                r.pop()
            }
            if (i) {
                for (; m;) {
                    for (x = m._next, v = y; v && v.pr > m.pr;) v = v._next; (m._prev = v ? v._prev: b) ? m._prev._next = m: y = m,
                    (m._next = v) ? v._prev = m: b = m,
                    m = x
                }
                this._firstPT = y
            }
            return ! 0
        },
        h.parse = function(t, e, i, r) {
            var o, a, h, u, d, p, f, m, v, y, b = t.style;
            for (o in e) {
                if (p = e[o], "function" == typeof p && (p = p(_, g)), a = l[o]) i = a.parse(t, p, o, this, i, r, e);
                else {
                    if ("--" === o.substr(0, 2)) {
                        this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", Z(t).getPropertyValue(o) + "", p + "", o, !1, o);
                        continue
                    }
                    d = K(t, o, s) + "",
                    v = "string" == typeof p,
                    "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || v && C.test(p) ? (v || (p = pt(p), p = (p.length > 3 ? "rgba(": "rgb(") + p.join(",") + ")"), i = xt(b, o, d, p, !0, "transparent", i, 0, r)) : v && I.test(p) ? i = xt(b, o, d, p, !0, null, i, 0, r) : (h = parseFloat(d), f = h || 0 === h ? d.substr((h + "").length) : "", ("" === d || "auto" === d) && ("width" === o || "height" === o ? (h = ot(t, o, s), f = "px") : "left" === o || "top" === o ? (h = et(t, o, s), f = "px") : (h = "opacity" !== o ? 0 : 1, f = "")), y = v && "=" === p.charAt(1), y ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), m = p.replace(T, "")) : (u = parseFloat(p), m = v ? p.replace(T, "") : ""), "" === m && (m = o in n ? n[o] : f), p = u || 0 === u ? (y ? u + h: u) + m: e[o], f !== m && ("" !== m || "lineHeight" === o) && (u || 0 === u) && h && (h = tt(t, o, h, f), "%" === m ? (h /= tt(t, o, 100, "%") / 100, !0 !== e.strictUnits && (d = h + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? h /= tt(t, o, 1, m) : "px" !== m && (u = tt(t, o, u, m), m = "px"), y && (u || 0 === u) && (p = u + h + m)), y && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== b[o] && (p || p + "" != "NaN" && null != p) ? (i = new yt(b, o, u || h || 0, 0, i, -1, o, !1, 0, d, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p: d) : $("invalid " + o + " tween value: " + e[o]) : (i = new yt(b, o, h, u - h, i, 0, o, !1 !== c && ("px" === m || "zIndex" === o), 0, d, p), i.xs0 = m))
                }
                r && i && !i.plugin && (i.plugin = r)
            }
            return i
        },
        h.setRatio = function(t) {
            var e, i, n, s = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime) for (; s;) {
                if (e = s.c * t + s.s, s.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), s.type) if (1 === s.type) if (2 === (n = s.l)) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                else {
                    for (i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                    s.t[s.p] = i
                } else - 1 === s.type ? s.t[s.p] = s.xs0: s.setRatio && s.setRatio(t);
                else s.t[s.p] = e + s.xs0;
                s = s._next
            } else for (; s;) 2 !== s.type ? s.t[s.p] = s.b: s.setRatio(t),
            s = s._next;
            else for (; s;) {
                if (2 !== s.type) if (s.r && -1 !== s.type) if (e = Math.round(s.s + s.c), s.type) {
                    if (1 === s.type) {
                        for (n = s.l, i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                        s.t[s.p] = i
                    }
                } else s.t[s.p] = e + s.xs0;
                else s.t[s.p] = s.e;
                else s.setRatio(t);
                s = s._next
            }
        },
        h._enableTransforms = function(t) {
            this._transform = this._transform || Yt(this._target, s, !0),
            this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3
        };
        var Jt = function(t) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        h._addLazySet = function(t, e, i) {
            var n = this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2);
            n.e = i,
            n.setRatio = Jt,
            n.data = this
        },
        h._linkCSSP = function(t, e, i, n) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next: this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t: n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i),
            t
        },
        h._mod = function(t) {
            for (var e = this._firstPT; e;)"function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1),
            e = e._next
        },
        h._kill = function(e) {
            var i, n, s, r = e;
            if (e.autoAlpha || e.alpha) {
                r = {};
                for (n in e) r[n] = e[n];
                r.opacity = 1,
                r.autoAlpha && (r.visibility = 1)
            }
            for (e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin),
            i = i._next;
            return t.prototype._kill.call(this, r)
        };
        var Qt = function(t, e, i) {
            var n, s, r, o;
            if (t.slice) for (s = t.length; --s > -1;) Qt(t[s], e, i);
            else for (n = t.childNodes, s = n.length; --s > -1;) r = n[s],
            o = r.type,
            r.style && (e.push(it(r)), i && i.push(r)),
            1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || Qt(r, e, i)
        };
        return o.cascadeTo = function(t, i, n) {
            var s, r, o, a, l = e.to(t, i, n),
            h = [l],
            c = [],
            u = [],
            d = [],
            p = e._internals.reservedProps;
            for (t = l._targets || l.target, Qt(t, c, d), l.render(i, !0, !0), Qt(t, u), l.render(0, !0, !0), l._enabled(!0), s = d.length; --s > -1;) if (r = nt(d[s], c[s], u[s]), r.firstMPT) {
                r = r.difs;
                for (o in n) p[o] && (r[o] = n[o]);
                a = {};
                for (o in r) a[o] = c[s][o];
                h.push(e.fromTo(d[s], i, a, r))
            }
            return h
        },
        t.activate([o]),
        o
    },
    !0),
    function() {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.6.0",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i,
                !0
            }
        }),
        e = function(t) {
            for (; t;) t.f || t.blob || (t.m = Math.round),
            t = t._next
        },
        i = t.prototype;
        i._onInitAllProps = function() {
            for (var t, i, n, s = this._tween,
            r = s.vars.roundProps.join ? s.vars.roundProps: s.vars.roundProps.split(","), o = r.length, a = {},
            l = s._propLookup.roundProps; --o > -1;) a[r[o]] = Math.round;
            for (o = r.length; --o > -1;) for (t = r[o], i = s._firstPT; i;) n = i._next,
            i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n: s._firstPT === i && (s._firstPT = n), i._next = i._prev = null, s._propLookup[t] = l)),
            i = n;
            return ! 1
        },
        i._add = function(t, e, i, n) {
            this._addTween(t, e, i, i + n, e, Math.round),
            this._overwriteProps.push(e)
        }
    } (),
    function() {
        _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function(t, e, i, n) {
                var s, r;
                if ("function" != typeof t.setAttribute) return ! 1;
                for (s in e) r = e[s],
                "function" == typeof r && (r = r(n, t)),
                this._addTween(t, "setAttribute", t.getAttribute(s) + "", r + "", s, !1, s),
                this._overwriteProps.push(s);
                return ! 0
            }
        })
    } (),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function(t, e, i, n) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var s, r, o, a, l, h, c = !0 === e.useRadians ? 2 * Math.PI: 360;
            for (s in e)"useRadians" !== s && (a = e[s], "function" == typeof a && (a = a(n, t)), h = (a + "").split("_"), r = h[0], o = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s: "get" + s.substr(3)]()), a = this.finals[s] = "string" == typeof r && "=" === r.charAt(1) ? o + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, l = a - o, h.length && (r = h.join("_"), -1 !== r.indexOf("short") && (l %= c) !== l % (c / 2) && (l = 0 > l ? l + c: l - c), -1 !== r.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * c) % c - (l / c | 0) * c: -1 !== r.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > 1e-6 || -1e-6 > l) && (this._addTween(t, s, o, o + l, s), this._overwriteProps.push(s)));
            return ! 0
        },
        set: function(t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t);
            else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
            e = e._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"],
    function(t) {
        var e, i, n, s, r = _gsScope.GreenSockGlobals || _gsScope,
        o = r.com.greensock,
        a = 2 * Math.PI,
        l = Math.PI / 2,
        h = o._class,
        c = function(e, i) {
            var n = h("easing." + e,
            function() {},
            !0),
            s = n.prototype = new t;
            return s.constructor = n,
            s.getRatio = i,
            n
        },
        u = t.register ||
        function() {},
        d = function(t, e, i, n, s) {
            var r = h("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new n
            },
            !0);
            return u(r, t),
            r
        },
        p = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        },
        f = function(e, i) {
            var n = h("easing." + e,
            function(t) {
                this._p1 = t || 0 === t ? t: 1.70158,
                this._p2 = 1.525 * this._p1
            },
            !0),
            s = n.prototype = new t;
            return s.constructor = n,
            s.getRatio = i,
            s.config = function(t) {
                return new n(t)
            },
            n
        },
        m = d("Back", f("BackOut",
        function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), f("BackIn",
        function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), f("BackInOut",
        function(t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })),
        g = h("easing.SlowMo",
        function(t, e, i) {
            e = e || 0 === e ? e: .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e: 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = !0 === i
        },
        !0),
        _ = g.prototype = new t;
        return _.constructor = g,
        _.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t: e - (t = 1 - t / this._p1) * t * t * t * e: t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t: e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t: this._calcEnd ? 1 : e
        },
        g.ease = new g(.7, .7),
        _.config = g.config = function(t, e, i) {
            return new g(t, e, i)
        },
        e = h("easing.SteppedEase",
        function(t, e) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + (e ? 0 : 1),
            this._p3 = e ? 1 : 0
        },
        !0),
        _ = e.prototype = new t,
        _.constructor = e,
        _.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            ((this._p2 * t | 0) + this._p3) * this._p1
        },
        _.config = e.config = function(t, i) {
            return new e(t, i)
        },
        i = h("easing.ExpoScaleEase",
        function(t, e, i) {
            this._p1 = Math.log(e / t),
            this._p2 = e - t,
            this._p3 = t,
            this._ease = i
        },
        !0),
        _ = i.prototype = new t,
        _.constructor = i,
        _.getRatio = function(t) {
            return this._ease && (t = this._ease.getRatio(t)),
            (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
        },
        _.config = i.config = function(t, e, n) {
            return new i(t, e, n)
        },
        n = h("easing.RoughEase",
        function(e) {
            e = e || {};
            for (var i, n, s, r, o, a, l = e.taper || "none",
            h = [], c = 0, u = 0 | (e.points || 20), d = u, f = !1 !== e.randomize, m = !0 === e.clamp, g = e.template instanceof t ? e.template: null, _ = "number" == typeof e.strength ? .4 * e.strength: .4; --d > -1;) i = f ? Math.random() : 1 / u * d,
            n = g ? g.getRatio(i) : i,
            "none" === l ? s = _: "out" === l ? (r = 1 - i, s = r * r * _) : "in" === l ? s = i * i * _: .5 > i ? (r = 2 * i, s = r * r * .5 * _) : (r = 2 * (1 - i), s = r * r * .5 * _),
            f ? n += Math.random() * s - .5 * s: d % 2 ? n += .5 * s: n -= .5 * s,
            m && (n > 1 ? n = 1 : 0 > n && (n = 0)),
            h[c++] = {
                x: i,
                y: n
            };
            for (h.sort(function(t, e) {
                return t.x - e.x
            }), a = new p(1, 1, null), d = u; --d > -1;) o = h[d],
            a = new p(o.x, o.y, a);
            this._prev = new p(0, 0, 0 !== a.t ? a: a.next)
        },
        !0),
        _ = n.prototype = new t,
        _.constructor = n,
        _.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else for (; e.prev && t <= e.t;) e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        },
        _.config = function(t) {
            return new n(t)
        },
        n.ease = new n,
        d("Bounce", c("BounceOut",
        function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), c("BounceIn",
        function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t: 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), c("BounceInOut",
        function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t: 2 * t - 1,
            t = 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        d("Circ", c("CircOut",
        function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), c("CircIn",
        function(t) {
            return - (Math.sqrt(1 - t * t) - 1)
        }), c("CircInOut",
        function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        s = function(e, i, n) {
            var s = h("easing." + e,
            function(t, e) {
                this._p1 = t >= 1 ? t: 1,
                this._p2 = (e || n) / (1 > t ? t: 1),
                this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0),
                this._p2 = a / this._p2
            },
            !0),
            r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            r.config = function(t, e) {
                return new s(t, e)
            },
            s
        },
        d("Elastic", s("ElasticOut",
        function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        },
        .3), s("ElasticIn",
        function(t) {
            return - this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
        },
        .3), s("ElasticInOut",
        function(t) {
            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        },
        .45)),
        d("Expo", c("ExpoOut",
        function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), c("ExpoIn",
        function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), c("ExpoInOut",
        function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        d("Sine", c("SineOut",
        function(t) {
            return Math.sin(t * l)
        }), c("SineIn",
        function(t) {
            return 1 - Math.cos(t * l)
        }), c("SineInOut",
        function(t) {
            return - .5 * (Math.cos(Math.PI * t) - 1)
        })),
        h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        },
        !0),
        u(r.SlowMo, "SlowMo", "ease,"),
        u(n, "RoughEase", "ease,"),
        u(e, "SteppedEase", "ease,"),
        m
    },
    !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t, e) {
    "use strict";
    var i = {},
    n = t.document,
    s = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!s.TweenLite) {
        var r, o, a, l, h, c = function(t) {
            var e, i = t.split("."),
            n = s;
            for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
            return n
        },
        u = c("com.greensock"),
        d = 1e-10,
        p = function(t) {
            var e, i = [],
            n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i
        },
        f = function() {},
        m = function() {
            var t = Object.prototype.toString,
            e = t.call([]);
            return function(i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        } (),
        g = {},
        _ = function(n, r, o, a) {
            this.sc = g[n] ? g[n].sc: [],
            g[n] = this,
            this.gsClass = null,
            this.func = o;
            var l = [];
            this.check = function(h) {
                for (var u, d, p, f, m = r.length,
                v = m; --m > -1;)(u = g[r[m]] || new _(r[m], [])).gsClass ? (l[m] = u.gsClass, v--) : h && u.sc.push(this);
                if (0 === v && o) {
                    if (d = ("com.greensock." + n).split("."), p = d.pop(), f = c(d.join("."))[p] = this.gsClass = o.apply(o, l), a) if (s[p] = i[p] = f, "undefined" != typeof module && module.exports) if (n === e) {
                        module.exports = i[e] = f;
                        for (m in i) f[m] = i[m]
                    } else i[e] && (i[e][p] = f);
                    else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/": "") + n.split(".").pop(), [],
                    function() {
                        return f
                    });
                    for (m = 0; m < this.sc.length; m++) this.sc[m].check()
                }
            },
            this.check(!0)
        },
        v = t._gsDefine = function(t, e, i, n) {
            return new _(t, e, i, n)
        },
        y = u._class = function(t, e, i) {
            return e = e ||
            function() {},
            v(t, [],
            function() {
                return e
            },
            i),
            e
        };
        v.globals = s;
        var b = [0, 0, 1, 1],
        x = y("easing.Ease",
        function(t, e, i, n) {
            this._func = t,
            this._type = i || 0,
            this._power = n || 0,
            this._params = e ? b.concat(e) : b
        },
        !0),
        T = x.map = {},
        w = x.register = function(t, e, i, n) {
            for (var s, r, o, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;) for (r = l[h], s = n ? y("easing." + r, null, !0) : u.easing[r] || {},
            o = c.length; --o > -1;) a = c[o],
            T[r + "." + a] = T[a + r] = s[a] = t.getRatio ? t: t[a] || new t
        };
        for (a = x.prototype, a._calcEnd = !1, a.getRatio = function(t) {
            if (this._func) return this._params[0] = t,
            this._func.apply(null, this._params);
            var e = this._type,
            i = this._power,
            n = 1 === e ? 1 - t: 2 === e ? t: .5 > t ? 2 * t: 2 * (1 - t);
            return 1 === i ? n *= n: 2 === i ? n *= n * n: 3 === i ? n *= n * n * n: 4 === i && (n *= n * n * n * n),
            1 === e ? 1 - n: 2 === e ? n: .5 > t ? n / 2 : 1 - n / 2
        },
        r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], o = r.length; --o > -1;) a = r[o] + ",Power" + o,
        w(new x(null, null, 1, o), a, "easeOut", !0),
        w(new x(null, null, 2, o), a, "easeIn" + (0 === o ? ",easeNone": "")),
        w(new x(null, null, 3, o), a, "easeInOut");
        T.linear = u.easing.Linear.easeIn,
        T.swing = u.easing.Quad.easeInOut;
        var S = y("events.EventDispatcher",
        function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        });
        a = S.prototype,
        a.addEventListener = function(t, e, i, n, s) {
            s = s || 0;
            var r, o, a = this._listeners[t],
            c = 0;
            for (this !== l || h || l.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;) r = a[o],
            r.c === e && r.s === i ? a.splice(o, 1) : 0 === c && r.pr < s && (c = o + 1);
            a.splice(c, 0, {
                c: e,
                s: i,
                up: n,
                pr: s
            })
        },
        a.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n) for (i = n.length; --i > -1;) if (n[i].c === e) return void n.splice(i, 1)
        },
        a.dispatchEvent = function(t) {
            var e, i, n, s = this._listeners[t];
            if (s) for (e = s.length, e > 1 && (s = s.slice(0)), i = this._eventTarget; --e > -1;)(n = s[e]) && (n.up ? n.c.call(n.s || i, {
                type: t,
                target: i
            }) : n.c.call(n.s || i))
        };
        var P = t.requestAnimationFrame,
        C = t.cancelAnimationFrame,
        E = Date.now ||
        function() {
            return (new Date).getTime()
        },
        k = E();
        for (r = ["ms", "moz", "webkit", "o"], o = r.length; --o > -1 && !P;) P = t[r[o] + "RequestAnimationFrame"],
        C = t[r[o] + "CancelAnimationFrame"] || t[r[o] + "CancelRequestAnimationFrame"];
        y("Ticker",
        function(t, e) {
            var i, s, r, o, a, c = this,
            u = E(),
            p = !(!1 === e || !P) && "auto",
            m = 500,
            g = 33,
            _ = function(t) {
                var e, n, l = E() - k;
                l > m && (u += l - g),
                k += l,
                c.time = (k - u) / 1e3,
                e = c.time - a,
                (!i || e > 0 || !0 === t) && (c.frame++, a += e + (e >= o ? .004 : o - e), n = !0),
                !0 !== t && (r = s(_)),
                n && c.dispatchEvent("tick")
            };
            S.call(c),
            c.time = c.frame = 0,
            c.tick = function() {
                _(!0)
            },
            c.lagSmoothing = function(t, e) {
                return arguments.length ? (m = t || 1 / d, void(g = Math.min(e, m, 0))) : 1 / d > m
            },
            c.sleep = function() {
                null != r && (p && C ? C(r) : clearTimeout(r), s = f, r = null, c === l && (h = !1))
            },
            c.wake = function(t) {
                null !== r ? c.sleep() : t ? u += -k + (k = E()) : c.frame > 10 && (k = E() - m + 5),
                s = 0 === i ? f: p && P ? P: function(t) {
                    return setTimeout(t, 1e3 * (a - c.time) + 1 | 0)
                },
                c === l && (h = !0),
                _(2)
            },
            c.fps = function(t) {
                return arguments.length ? (i = t, o = 1 / (i || 60), a = this.time + o, void c.wake()) : i
            },
            c.useRAF = function(t) {
                return arguments.length ? (c.sleep(), p = t, void c.fps(i)) : p
            },
            c.fps(t),
            setTimeout(function() {
                "auto" === p && c.frame < 5 && "hidden" !== (n || {}).visibilityState && c.useRAF(!1)
            },
            1500)
        }),
        a = u.Ticker.prototype = new u.events.EventDispatcher,
        a.constructor = u.Ticker;
        var A = y("core.Animation",
        function(t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, G) {
                h || l.wake();
                var i = this.vars.useFrames ? $: G;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        });
        l = A.ticker = new u.Ticker,
        a = A.prototype,
        a._dirty = a._gc = a._initted = a._paused = !1,
        a._totalTime = a._time = 0,
        a._rawPrevTime = -1,
        a._next = a._last = a._onUpdate = a._timeline = a.timeline = null,
        a._paused = !1;
        var R = function() {
            h && E() - k > 2e3 && ("hidden" !== (n || {}).visibilityState || !l.lagSmoothing()) && l.wake();
            var t = setTimeout(R, 2e3);
            t.unref && t.unref()
        };
        R(),
        a.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        },
        a.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        },
        a.resume = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!1)
        },
        a.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        },
        a.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay: 0, !1 !== e, !0)
        },
        a.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        },
        a.render = function(t, e, i) {},
        a.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        },
        a.isActive = function() {
            var t, e = this._timeline,
            i = this._startTime;
            return ! e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
        },
        a._enabled = function(t, e) {
            return h || l.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        },
        a._kill = function(t, e) {
            return this._enabled(!1, !1)
        },
        a.kill = function(t, e) {
            return this._kill(t, e),
            this
        },
        a._uncache = function(t) {
            for (var e = t ? this: this.timeline; e;) e._dirty = !0,
            e = e.timeline;
            return this
        },
        a._swapSelfInParams = function(t) {
            for (var e = t.length,
            i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
            return i
        },
        a._callback = function(t) {
            var e = this.vars,
            i = e[t],
            n = e[t + "Params"],
            s = e[t + "Scope"] || e.callbackScope || this;
            switch (n ? n.length: 0) {
            case 0:
                i.call(s);
                break;
            case 1:
                i.call(s, n[0]);
                break;
            case 2:
                i.call(s, n[0], n[1]);
                break;
            default:
                i.apply(s, n)
            }
        },
        a.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length) return s[t];
                null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        },
        a.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        },
        a.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        },
        a.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        },
        a.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration: t, e)) : this._time
        },
        a.totalTime = function(t, e, i) {
            if (h || l.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                    s = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime: s._time) - (this._reversed ? n - t: t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline) for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0),
                    s = s._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && (I.length && Q(), this.render(t, e, !1), I.length && Q())
            }
            return this
        },
        a.progress = a.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i: this.ratio
        },
        a.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        },
        a.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        },
        a.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            var e, i;
            for (t = t || d, this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime, i = e || 0 === e ? e: this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0,
            i.totalDuration(),
            i = i.timeline;
            return this
        },
        a.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime: this._totalTime, !0)), this) : this._reversed
        },
        a.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (h || t || l.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e: null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime: (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))),
            this._gc && !t && this._enabled(!0, !1),
            this
        };
        var D = y("core.SimpleTimeline",
        function(t) {
            A.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        a = D.prototype = new A,
        a.constructor = D,
        a.kill()._gc = !1,
        a._first = a._last = a._recent = null,
        a._sortChildren = !1,
        a.add = a.insert = function(t, e, i, n) {
            var s, r;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren) for (r = t._startTime; s && s._startTime > r;) s = s._prev;
            return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t),
            t._next ? t._next._prev = t: this._last = t,
            t._prev = s,
            this._recent = t,
            this._timeline && this._uncache(!0),
            this
        },
        a._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next: this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev: this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)),
            this
        },
        a.render = function(t, e, i) {
            var n, s = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next,
            (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
            s = n
        },
        a.rawTime = function() {
            return h || l.wake(),
            this._totalTime
        };
        var M = y("TweenLite",
        function(e, i, n) {
            if (A.call(this, i, n), this.render = M.prototype.render, null == e) throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e: M.selector(e) || e;
            var s, r, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
            l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? V[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l], (a || e instanceof Array || e.push && m(e)) && "number" != typeof e[0]) for (this._targets = o = p(e), this._propLookup = [], this._siblings = [], s = 0; s < o.length; s++) r = o[s],
            r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(s--, 1), this._targets = o = o.concat(p(r))) : (this._siblings[s] = Z(r, this, !1), 1 === l && this._siblings[s].length > 1 && tt(r, this, null, 1, this._siblings[s])) : "string" == typeof(r = o[s--] = M.selector(r)) && o.splice(s + 1, 1) : o.splice(s--, 1);
            else this._propLookup = {},
            this._siblings = Z(e, this, !1),
            1 === l && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -d, this.render(Math.min(0, -this._delay)))
        },
        !0),
        O = function(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        },
        N = function(t, e) {
            var i, n = {};
            for (i in t) W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!Y[i] || Y[i] && Y[i]._autoCSS) || (n[i] = t[i], delete t[i]);
            t.css = n
        };
        a = M.prototype = new A,
        a.constructor = M,
        a.kill()._gc = !1,
        a.ratio = 0,
        a._firstPT = a._targets = a._overwrittenProps = a._startAt = null,
        a._notifyPluginsOfEnabled = a._lazy = !1,
        M.version = "1.20.4",
        M.defaultEase = a._ease = new x(null, null, 1, 1),
        M.defaultOverwrite = "auto",
        M.ticker = l,
        M.autoSleep = 120,
        M.lagSmoothing = function(t, e) {
            l.lagSmoothing(t, e)
        },
        M.selector = t.$ || t.jQuery ||
        function(e) {
            var i = t.$ || t.jQuery;
            return i ? (M.selector = i, i(e)) : void 0 === n ? e: n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var I = [],
        F = {},
        L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        B = /[\+-]=-?[\.\d]/,
        X = function(t) {
            for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end: t ? this.join("") : this.start: i.c * t + i.s,
            i.m ? e = i.m(e, this._target || i.t) : 1e-6 > e && e > -1e-6 && !i.blob && (e = 0),
            i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
            i = i._next
        },
        H = function(t, e, i, n) {
            var s, r, o, a, l, h, c, u = [],
            d = 0,
            p = "",
            f = 0;
            for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, s = t.match(L) || [], r = e.match(L) || [], n && (n._next = null, n.blob = 1, u._firstPT = u._applyPT = n), l = r.length, a = 0; l > a; a++) c = r[a],
            h = e.substr(d, e.indexOf(c, d) - d),
            p += h || !a ? h: ",",
            d += h.length,
            f ? f = (f + 1) % 5 : "rgba(" === h.substr( - 5) && (f = 1),
            c === s[a] || s.length <= a ? p += c: (p && (u.push(p), p = ""), o = parseFloat(s[a]), u.push(o), u._firstPT = {
                _next: u._firstPT,
                t: u,
                p: u.length - 1,
                s: o,
                c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                f: 0,
                m: f && 4 > f ? Math.round: 0
            }),
            d += c.length;
            return p += e.substr(d),
            p && u.push(p),
            u.setRatio = X,
            B.test(e) && (u.end = null),
            u
        },
        z = function(t, e, i, n, s, r, o, a, l) {
            "function" == typeof n && (n = n(l || 0, t));
            var h, c = typeof t[e],
            u = "function" !== c ? "": e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e: "get" + e.substr(3),
            d = "get" !== i ? i: u ? o ? t[u](o) : t[u]() : t[e],
            p = "string" == typeof n && "=" === n.charAt(1),
            f = {
                t: t,
                p: e,
                s: d,
                f: "function" === c,
                pg: 0,
                n: s || e,
                m: r ? "function" == typeof r ? r: Math.round: 0,
                pr: 0,
                c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - d || 0
            };
            return ("number" != typeof d || "number" != typeof n && !p) && (o || isNaN(d) || !p && isNaN(n) || "boolean" == typeof d || "boolean" == typeof n ? (f.fp = o, h = H(d, p ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : n, a || M.defaultStringFilter, f), f = {
                t: h,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: s || e,
                pr: 0,
                m: 0
            }) : (f.s = parseFloat(d), p || (f.c = parseFloat(n) - f.s || 0))),
            f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
        },
        j = M._internals = {
            isArray: m,
            isSelector: O,
            lazyTweens: I,
            blobDif: H
        },
        Y = M._plugins = {},
        q = j.tweenLookup = {},
        U = 0,
        W = j.reservedProps = {
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
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1,
            yoyoEase: 1
        },
        V = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            true: 1,
            false: 0
        },
        $ = A._rootFramesTimeline = new D,
        G = A._rootTimeline = new D,
        J = 30,
        Q = j.lazyRender = function() {
            var t, e = I.length;
            for (F = {}; --e > -1;)(t = I[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            I.length = 0
        };
        G._startTime = l.time,
        $._startTime = l.frame,
        G._active = $._active = !0,
        setTimeout(Q, 1),
        A._updateRoot = M.render = function() {
            var t, e, i;
            if (I.length && Q(), G.render((l.time - G._startTime) * G._timeScale, !1, !1), $.render((l.frame - $._startTime) * $._timeScale, !1, !1), I.length && Q(), l.frame >= J) {
                J = l.frame + (parseInt(M.autoSleep, 10) || 120);
                for (i in q) {
                    for (e = q[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete q[i]
                }
                if ((! (i = G._first) || i._paused) && M.autoSleep && !$._first && 1 === l._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || l.sleep()
                }
            }
        },
        l.addEventListener("tick", A._updateRoot);
        var Z = function(t, e, i) {
            var n, s, r = t._gsTweenID;
            if (q[r || (t._gsTweenID = r = "t" + U++)] || (q[r] = {
                target: t,
                tweens: []
            }), e && (n = q[r].tweens, n[s = n.length] = e, i)) for (; --s > -1;) n[s] === e && n.splice(s, 1);
            return q[r].tweens
        },
        K = function(t, e, i, n) {
            var s, r, o = t.vars.onOverwrite;
            return o && (s = o(t, e, i, n)),
            o = M.onOverwrite,
            o && (r = o(t, e, i, n)),
            !1 !== s && !1 !== r
        },
        tt = function(t, e, i, n, s) {
            var r, o, a, l;
            if (1 === n || n >= 4) {
                for (l = s.length, r = 0; l > r; r++) if ((a = s[r]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                else if (5 === n) break;
                return o
            }
            var h, c = e._startTime + d,
            u = [],
            p = 0,
            f = 0 === e._duration;
            for (r = s.length; --r > -1;)(a = s[r]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || et(e, 0, f), 0 === et(a, h, f) && (u[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((f || !a._initted) && c - a._startTime <= 2e-10 || (u[p++] = a)));
            for (r = p; --r > -1;) if (a = u[r], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                if (2 !== n && !K(a, e)) continue;
                a._enabled(!1, !1) && (o = !0)
            }
            return o
        },
        et = function(t, e, i) {
            for (var n = t._timeline,
            s = n._timeScale,
            r = t._startTime; n._timeline;) {
                if (r += n._startTime, s *= n._timeScale, n._paused) return - 100;
                n = n._timeline
            }
            return r /= s,
            r > e ? r - e: i && r === e || !t._initted && 2 * d > r - e ? d: (r += t.totalDuration() / t._timeScale / s) > e + d ? 0 : r - e - d
        };
        a._init = function() {
            var t, e, i, n, s, r, o = this.vars,
            a = this._overwrittenProps,
            l = this._duration,
            h = !!o.immediateRender,
            c = o.ease;
            if (o.startAt) {
                this._startAt && (this._startAt.render( - 1, !0), this._startAt.kill()),
                s = {};
                for (n in o.startAt) s[n] = o.startAt[n];
                if (s.data = "isStart", s.overwrite = !1, s.immediateRender = !0, s.lazy = h && !1 !== o.lazy, s.startAt = s.delay = null, s.onUpdate = o.onUpdate, s.onUpdateParams = o.onUpdateParams, s.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = M.to(this.target, 0, s), h) if (this._time > 0) this._startAt = null;
                else if (0 !== l) return
            } else if (o.runBackwards && 0 !== l) if (this._startAt) this._startAt.render( - 1, !0),
            this._startAt.kill(),
            this._startAt = null;
            else {
                0 !== this._time && (h = !1),
                i = {};
                for (n in o) W[n] && "autoCSS" !== n || (i[n] = o[n]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== o.lazy, i.immediateRender = h, this._startAt = M.to(this.target, 0, i), h) {
                    if (0 === this._time) return
                } else this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = c = c ? c instanceof x ? c: "function" == typeof c ? new x(c, o.easeParams) : T[c] || M.defaultEase: M.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (r = this._targets.length, t = 0; r > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {},
            this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (e && M._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards) for (i = this._firstPT; i;) i.s += i.c,
            i.c = -i.c,
            i = i._next;
            this._onUpdate = o.onUpdate,
            this._initted = !0
        },
        a._initProps = function(e, i, n, s, r) {
            var o, a, l, h, c, u;
            if (null == e) return ! 1;
            F[e._gsTweenID] && Q(),
            this.vars.css || e.style && e !== t && e.nodeType && Y.css && !1 !== this.vars.autoCSS && N(this.vars, e);
            for (o in this.vars) if (u = this.vars[o], W[o]) u && (u instanceof Array || u.push && m(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this));
            else if (Y[o] && (h = new Y[o])._onInitTween(e, this.vars[o], this, r)) {
                for (this._firstPT = c = {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: o,
                    pg: 1,
                    pr: h._priority,
                    m: 0
                },
                a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT; (h._priority || h._onInitAllProps) && (l = !0),
                (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0),
                c._next && (c._next._prev = c)
            } else i[o] = z.call(this, e, o, "get", u, o, 0, null, this.vars.stringFilter, r);
            return s && this._kill(s, e) ? this._initProps(e, i, n, s, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && tt(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), l)
        },
        a.render = function(t, e, i) {
            var n, s, r, o, a = this._time,
            l = this._duration,
            h = this._rawPrevTime;
            if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
            this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren),
            0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === d && "isPause" !== this.data) && h !== t && (i = !0, h > d && (s = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t: d);
            else if (1e-7 > t) this._totalTime = this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== a || 0 === l && h > 0) && (s = "onReverseComplete", n = this._reversed),
            0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== d || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t: d)),
            (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var c = t / l,
                u = this._easeType,
                p = this._easePower; (1 === u || 3 === u && c >= .5) && (c = 1 - c),
                3 === u && (c *= 2),
                1 === p ? c *= c: 2 === p ? c *= c * c: 3 === p ? c *= c * c * c: 4 === p && (c *= c * c * c * c),
                this.ratio = 1 === u ? 1 - c: 2 === u ? c: .5 > t / l ? c / 2 : 1 - c / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a,
                    this._rawPrevTime = h,
                    I.push(this),
                    void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s,
                r = r._next;
                this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")),
                s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === d && o !== d && (this._rawPrevTime = 0))
            }
        },
        a._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1,
            this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target: M.selector(e) || e;
            var n, s, r, o, a, l, h, c, u, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((m(e) || O(e)) && "number" != typeof e[0]) for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;) if (e === this._targets[n]) {
                        a = this._propLookup[n] || {},
                        this._overwrittenProps = this._overwrittenProps || [],
                        s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {}: "all";
                        break
                    }
                } else {
                    if (e !== this.target) return ! 1;
                    a = this._propLookup,
                    s = this._overwrittenProps = t ? this._overwrittenProps || {}: "all"
                }
                if (a) {
                    if (h = t || a, c = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill), i && (M.onOverwrite || this.vars.onOverwrite)) {
                        for (r in h) a[r] && (u || (u = []), u.push(r));
                        if ((u || !t) && !K(this, i, e, u)) return ! 1
                    }
                    for (r in h)(o = a[r]) && (d && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next: o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[r]),
                    c && (s[r] = 1); ! this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        },
        a.invalidate = function() {
            return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {}: [],
            A.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -d, this.render(Math.min(0, -this._delay))),
            this
        },
        a._enabled = function(t, e) {
            if (h || l.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n) for (i = n.length; --i > -1;) this._siblings[i] = Z(n[i], this, !0);
                else this._siblings = Z(this.target, this, !0)
            }
            return A.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable": "_onDisable", this)
        },
        M.to = function(t, e, i) {
            return new M(t, e, i)
        },
        M.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new M(t, e, i)
        },
        M.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new M(t, e, n)
        },
        M.delayedCall = function(t, e, i, n, s) {
            return new M(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: s,
                overwrite: 0
            })
        },
        M.set = function(t, e) {
            return new M(t, 0, e)
        },
        M.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t: M.selector(t) || t;
            var i, n, s, r;
            if ((m(t) || O(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;) n = n.concat(M.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;) for (r = n[i], s = i; --s > -1;) r === n[s] && n.splice(i, 1)
            } else if (t._gsTweenID) for (n = Z(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n || []
        },
        M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = M.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t)
        };
        var it = y("plugins.TweenPlugin",
        function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = it.prototype
        },
        !0);
        if (a = it.prototype, it.version = "1.19.0", it.API = 2, a._firstPT = null, a._addTween = z, a.setRatio = X, a._kill = function(t) {
            var e, i = this._overwriteProps,
            n = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = [];
            else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
            for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)),
            n = n._next;
            return ! 1
        },
        a._mod = a._roundProps = function(t) {
            for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")],
            e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e: i.m = e),
            i = i._next
        },
        M._onPluginEvent = function(t, e) {
            var i, n, s, r, o, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a;) {
                    for (o = a._next, n = s; n && n.pr > a.pr;) n = n._next; (a._prev = n ? n._prev: r) ? a._prev._next = a: s = a,
                    (a._next = n) ? n._prev = a: r = a,
                    a = o
                }
                a = e._firstPT = s
            }
            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
            a = a._next;
            return i
        },
        it.activate = function(t) {
            for (var e = t.length; --e > -1;) t[e].API === it.API && (Y[(new t[e])._propName] = t[e]);
            return ! 0
        },
        v.plugin = function(t) {
            if (! (t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
            var e, i = t.propName,
            n = t.priority || 0,
            s = t.overwriteProps,
            r = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_mod",
                mod: "_mod",
                initAll: "_onInitAllProps"
            },
            o = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
            function() {
                it.call(this, i, n),
                this._overwriteProps = s || []
            },
            !0 === t.global),
            a = o.prototype = new it(i);
            a.constructor = o,
            o.API = t.API;
            for (e in r)"function" == typeof t[e] && (a[r[e]] = t[e]);
            return o.version = t.version,
            it.activate([o]),
            o
        },
        r = t._gsQueue) {
            for (o = 0; o < r.length; o++) r[o]();
            for (a in g) g[a].func || t.console.log("GSAP encountered missing dependency: " + a)
        }
        h = !1
    }
} ("undefined" != typeof module && module.exports && "undefined" != typeof global ? global: this || window, "TweenMax");
var Page; !
function() {
    Page = {
        pageList: {},
        curPage: null,
        init: function(t) {
            var e = this;
            e.element = t,
            e._rotate(),
            e.pageList.loading && e.gotoPage("loading")
        },
        gotoPage: function(t) {
            var e = this;
            e.curPage = t,
            Page.pageList[t].addDom(function() {
                Page.pageList[t].init(function() {
                    e._process(e.curPage)
                })
            })
        },
        _rotate: function() {
            var t = this,
            e = document.documentElement,
            i = function() {
                var i = e.clientWidth;
                e.clientHeight;
                t.dpi = 640 / i,
                e.style.fontSize = 100 / t.dpi + "px"
            };
            i(),
            document.addEventListener && (window.addEventListener("orientationchange", i, !1), window.addEventListener("resize", i, !1))
        },
        _process: function(t) {
            var e = this;
            Page.pageList[e.curPage].onLeave(),
            Page.pageList[t].onEnter()
        }
    }
} ();
var BaseMgr; !
function() {
    BaseMgr = function(t, e) {
        this.src = e,
        this.id = t
    },
    BaseMgr.prototype = {
        addDom: function(t) {
            var e = this;
            $.get(e.src,
            function(i, n, s) {
                $(Page.element).append(i),
                e.element = $("#" + e.id),
                console.log(e.src + " add!"),
                t && t()
            })
        },
        extend: function(t, e) {
            for (var i in t) ! t.hasOwnProperty(i) || this.hasOwnProperty(i) && !e || (this[i] = t[i])
        }
    }
} ();
var PageMgr; !
function() {
    PageMgr = function(t, e) {
        BaseMgr.call(this, t, e),
        Page.pageList[t] = this,
        this.extend({
            init: function(t) {
                this.beforeEnter(),
                t()
            },
            beforeEnter: function() {
                console.log("ç‰ˆå—è¿›å…¥å‰æ— æ‰§è¡Œæ•°æ®")
            },
            onEnter: function() {
                console.log("ç‰ˆå—è¿›å…¥æ— æ‰§è¡Œæ•°æ®")
            },
            onLeave: function() {
                console.log("ç‰ˆå—ç¦»å¼€æ— æ‰§è¡Œæ•°æ®")
            }
        })
    },
    PageMgr.prototype = new BaseMgr
} ();
var isTest = !1,
basePath = "",
userInfo = {
    name: "æŽæ²›",
    sex: "boy",
    personID: 0,
    answer: [0, 1, 2, 0, 1]
},
loadingMgr; !
function() {
    loadingMgr = {
        imgArr: {
            index: ["index/btn.png", "index/txt/0.png", "index/txt/1.png", "index/txt/2.png", "index/txt/3.png", "index/txt/4.png", "index/txt/5.png", "index/txt/6.png"],
            choose: ["choose/bg.jpg", "choose/boy_0.png", "choose/boy_1.png", "choose/boy_2.png", "choose/boy_3.png", "choose/boy_4.png", "choose/boy_5.png", "choose/boy_6.png", "choose/boy_7.png", "choose/boy_8.png", "choose/boy_9.png", "choose/boy_shadow.png", "choose/boy.png", "choose/girl_0.png", "choose/girl_1.png", "choose/girl_2.png", "choose/girl_3.png", "choose/girl_4.png", "choose/girl_5.png", "choose/girl_6.png", "choose/girl_7.png", "choose/girl_8.png", "choose/girl_9.png", "choose/girl_shadow.png", "choose/girl.png"],
            scene: ["scene/bg_0.jpg", "scene/bg_1.jpg", "scene/bg_2.jpg", "scene/bg_3.jpg", "scene/bg_4.jpg", "scene/bicycle_0.png", "scene/bird_0.png", "scene/bird_1.png", "scene/bird_2.gif", "scene/bird_3.gif", "scene/buildingFix_0.png", "scene/buildingFix_1.png", "scene/buildingFix_2.png", "scene/buildingFix_3.png", "scene/bus.png", "scene/car.png", "scene/cat_0.gif", "scene/cat_1_flash.png", "scene/cat_1.png", "scene/guitar.gif", "scene/lamp_0.gif", "scene/lamp_1.gif", "scene/leaflet.gif", "scene/liu.gif", "scene/moon.png", "scene/signal.gif", "scene/stage.gif", "scene/train.png", "scene/wire_2.png", "scene/zoo.gif"],
            walk: []
        },
        mc_arr: {
            index_bg: []
        }
    };
    var t, e = basePath + "asset/img/";
    for (t in loadingMgr.imgArr) for (var i = 0; i < loadingMgr.imgArr[t].length; i++) loadingMgr.imgArr[t][i] = e + loadingMgr.imgArr[t][i];
    for (t = 0; t < 150; t += 3) loadingMgr.mc_arr.index_bg.push(e + "index/bg/" + t + ".jpg")
} ();
var mediaMgr; !
function() {
    mediaMgr = {
        init: function() {
            var t = this;
            t.music = {},
            t.music.bg = new Audio,
            t.music.bg.src = "asset/music/bg.mp3",
            t.music.bg.loop = !0,
            t.music.click = new Audio,
            t.music.click.src = "asset/music/click.mp3",
            t.music.stage = new Audio,
            t.music.stage.src = "asset/music/stage.mp3",
            t.music.car = new Audio,
            t.music.car.src = "asset/music/car.mp3",
            t.music.choose = new Audio,
            t.music.choose.src = "asset/music/choose.mp3",
            t.music.bicycle = new Audio,
            t.music.bicycle.src = "asset/music/bicycle.mp3",
            t.music.cat = new Audio,
            t.music.cat.src = "asset/music/cat.mp3",
            t.music.fly = new Audio,
            t.music.fly.src = "asset/music/fly.mp3",
            t.music.train = new Audio,
            t.music.train.src = "asset/music/train.mp3",
            t.music.bird = new Audio,
            t.music.bird.src = "asset/music/bird.mp3",
            t.music.walk = new Audio,
            t.music.walk.src = "asset/music/walk.mp3",
            t.music.walk.loop = !0,
            t.video = {},
            t.video.index = new Video("asset/video/index.mp4", {
                totalTime: 22
            }),
            t.video.run = new Video("asset/video/run.mp4", {
                totalTime: 2
            }),
            t.music.bg.addEventListener("play",
            function() {
                $(".music").removeClass("off")
            }),
            t.music.bg.addEventListener("pause",
            function() {
                $(".music").addClass("off")
            }),
            utils.isWeixin ? wx && wx.ready(function() {
                t.music.bg.load(),
                t.video.index.load()
            }) : (t.music.bg.load(), t.video.index.load())
        }
    }
} ();
var LoadingPage = new PageMgr("loading", "asset/tpl/loading.html"); !
function() {
    LoadingPage.extend({
        onLeave: function() {},
        beforeEnter: function() {},
        onEnter: function() {
            var t = this;
            t.loader(),
            $(".music").hide(),
            t.element.find(".txt").addClass("animate"),
            t.element.find(".btn").on("touchend",
            function() {
                mediaMgr.music.bg.load(),
                mediaMgr.video.index.load(),
                t.element.animateCss("fadeOut",
                function() {
                    t.element.remove(),
                    Page.gotoPage("index")
                })
            })
        },
        loader: function() {
            var t, e, i = this;
            e = loadingMgr.imgArr.index.concat(loadingMgr.mc_arr.index_bg),
            t = new $.ImgLoader({
                srcs: e,
                pipesize: 5
            }),
            t.on("progress",
            function(t) {
                i.element.find(".percent").css({
                    width: parseInt(100 * t.loadedRatio) + "%"
                })
            }),
            t.on("allload",
            function(t) {
                i.element.find(".btn").show().animateCss("fadeIn"),
                i.element.find(".txt").animateCss("fadeOut",
                function() {
                    i.element.find(".txt").hide()
                }),
                wxdata.imgUrl = utils.path + "asset/img/share_" + utils.randomInt(0, 2) + ".jpg",
                WeixinApi.share(wxdata, !0)
            }),
            setTimeout(function() {
                t.load()
            },
            1e3)
        }
    },
    !0)
} ();
var IndexPage = new PageMgr("index", "asset/tpl/index.html"); !
function() {
    IndexPage.extend({
        onLeave: function() {},
        beforeEnter: function() {},
        onEnter: function() {
            var t = this;
            _hmt.push(["_trackPageview", "/kv"]),
            t.element.show().animateCss("fadeIn"),
            t.element.find(".video").html(mediaMgr.video.index.domElement),
            mediaMgr.video.index.play(),
            mediaMgr.video.index.addEventListener("ended",
            function() {
                t.element.find(".video").removeClass("show"),
                t.videoFinish()
            }),
            setTimeout(function() {
                t.framePlayer = new vFramePlayer({
                    dom: t.element.find(".bg")[0],
                    imgArr: loadingMgr.mc_arr.index_bg,
                    fps: 10,
                    useCanvas: !0,
                    loop: -1
                });
                var e;
                e = new $.ImgLoader({
                    srcs: loadingMgr.imgArr.choose,
                    pipesize: 5
                }),
                e.load()
            },
            2e3)
        },
        videoFinish: function() {
            var t = this;
            t.framePlayer.play(),
            mediaMgr.music.bg.play(),
            $(".music").fadeIn(),
            setTimeout(function() {
                t.element.find(".txt").children().addClass("show"),
                mediaMgr.video.index.destroy()
            },
            2e3),
            setTimeout(function() {
                t.element.find(".btn").addClass("show")
            },
            1e3),
            t.element.find(".btn").on("touchend",
            function() {
                mediaMgr.music.click.play(),
                Page.gotoPage("choose"),
                setTimeout(function() {
                    t.element.remove(),
                    t.framePlayer.stop(),
                    t.framePlayer.destroy()
                },
                1e3)
            })
        }
    },
    !0)
} ();
var ChoosePage = new PageMgr("choose", "asset/tpl/choose.html"); !
function() {
    ChoosePage.extend({
        onLeave: function() {},
        beforeEnter: function() {},
        onEnter: function() {
            var t = this;
            _hmt.push(["_trackPageview", "/choose"]),
            t.element.show().animateCss("fadeIn"),
            t.myScroll = new IScroll(".choose_person", {
                mouseWheel: !0,
                bounce: !1,
                tap: !0,
                momentum: !1
            });
            var e;
            e = new $.ImgLoader({
                srcs: loadingMgr.imgArr.scene,
                pipesize: 5
            }),
            e.load(),
            t.element.find(".sex").find(".boy").one("touchend",
            function() {
                t.element.find(".sex").find(".girl").off(),
                $(this).addClass("cur"),
                mediaMgr.music.click.play(),
                setTimeout(function() {
                    t.choose("boy")
                },
                800)
            }),
            t.element.find(".sex").find(".girl").one("touchend",
            function() {
                t.element.find(".sex").find(".boy").off(),
                $(this).addClass("cur"),
                mediaMgr.music.click.play(),
                setTimeout(function() {
                    t.choose("girl")
                },
                800)
            }),
            t.element.find(".btn_success").on("touchend",
            function() {
                var e = t.element.find(".input").find("input").val();
                "" == e ? alert("è¯·è¾“å…¥ä½ çš„åå­—") : t.filter(e,
                function(e) {
                    e ? alert("åŒ…å«éžæ³•å…³é”®è¯ï¼") : (mediaMgr.music.walk.load(), mediaMgr.music.bird.load(), t.element.find(".btn_success").off(), userInfo.name = t.element.find(".input").find("input").val(), Page.gotoPage("scene"), t.myScroll.destroy(), setTimeout(function() {
                        t.element.remove()
                    },
                    1e3))
                })
            }),
            t.element.find(".btn_repeat").on("touchend",
            function() {
                t.myScroll.enable(),
                t.element.find(".input_box").removeClass("show"),
                t.element.find(".cover").removeClass("show"),
                t.element.find(".choose_person").find("li.cur").removeClass("cur"),
                t.element.find(".tips").addClass("show")
            })
        },
        choose: function(t) {
            var e = this,
            i = e.element.find(".choose_person"),
            n = e.element.find(".cover");
            $("#orientLayer").hide(),
            i.addClass("show"),
            i.find("." + t + "list").show(),
            userInfo.sex = t,
            e.element.find("." + t + "list").find("li").on("tap",
            function() {
                mediaMgr.music.choose.play(),
                userInfo.personID = $(this).index();
                var t = parseInt($(this).css("top")),
                i = parseInt($(this).css("left")),
                s = $(this).width(),
                r = $(this).height(),
                o = 1e3 / Page.dpi,
                a = 3209 / Page.dpi;
                $(window).height();
                n.addClass("show"),
                n.css("-webkit-transform", "translate3d(" + (i + s / 2 - o / 2) + "px," + (t + r / 2 - a / 2) + "px,0)"),
                $(this).addClass("cur"),
                e.myScroll.disable(),
                e.element.find(".input_box").addClass("show"),
                e.element.find(".tips").removeClass("show"),
                loadingMgr.imgArr.walk = ["asset/img/scene/" + userInfo.sex + userInfo.personID + "/0.png", "asset/img/scene/" + userInfo.sex + userInfo.personID + "/1.png"];
                var l;
                l = new $.ImgLoader({
                    srcs: loadingMgr.imgArr.walk,
                    pipesize: 2
                }),
                l.load()
            })
        },
        filter: function(t, e) {
            $.ajax({
                url: "asset/js/filter.json",
                type: "GET",
                dataType: "json",
                data: {},
                success: function(i) {
                    for (var n = i.data,
                    s = "",
                    r = 0; r < n.length; r++) r == n.length - 1 ? s += n[r] : s += n[r] + "|";
                    var o = new RegExp(s, "g");
                    e(o.test(t))
                },
                error: function(t) {
                    console.log(t)
                }
            })
        }
    },
    !0)
} ();
var ScenePage = new PageMgr("scene", "asset/tpl/scene.html"); !
function() {
    ScenePage.extend({
        onLeave: function() {},
        beforeEnter: function() {},
        onEnter: function() {
            var t = this;
            t.element.show().animateCss("fadeIn"),
            $("#orientLayer").removeAttr("style"),
            _hmt.push(["_trackPageview", "/scene"]),
            t.framePlayer = new vFramePlayer({
                dom: t.element.find(".person")[0],
                imgArr: loadingMgr.imgArr.walk,
                fps: 2,
                useCanvas: !0,
                loop: -1
            }),
            setTimeout(function() {
                t.framePlayer.play(),
                t.step_0()
            },
            1e3)
        },
        step_0: function() {
            var t = this,
            e = t.element.find(".person"),
            i = t.element.find(".main");
            mediaMgr.music.walk.play(),
            mediaMgr.music.bird.play(),
            TweenMax.fromTo(e, 6, {
                y: 0
            },
            {
                y: -727 / Page.dpi,
                ease: Quad.easeOut,
                onComplete: function() {
                    mediaMgr.music.walk.pause(),
                    t.framePlayer.pause(),
                    t.question(0,
                    function() {
                        t.framePlayer.goto(0),
                        t.framePlayer.play(),
                        i.css({
                            "-webkit-transform": "translate3d(0," + parseInt(2076 / Page.dpi - window.innerHeight / 2) + "px,0)"
                        }),
                        setTimeout(function() {
                            t.step_1()
                        },
                        2e3)
                    })
                }
            })
        },
        step_1: function() {
            var t = this,
            e = window.innerHeight,
            i = t.element.find(".person"),
            n = t.element.find(".main");
            mediaMgr.music.cat.play(),
            mediaMgr.music.walk.play(),
            TweenMax.fromTo(i, 4, {
                x: -74 / Page.dpi,
                y: -2076 / Page.dpi + e / 2
            },
            {
                y: -2076 / Page.dpi,
                ease: Quad.easeOut,
                onComplete: function() {
                    mediaMgr.music.walk.pause(),
                    t.framePlayer.pause(),
                    t.question(1,
                    function() {
                        t.framePlayer.goto(0),
                        t.framePlayer.play(),
                        n.css({
                            "-webkit-transform": "translate3d(0," + parseInt(4114 / Page.dpi - e / 2) + "px,0)"
                        }),
                        setTimeout(function() {
                            t.step_2()
                        },
                        2e3)
                    })
                }
            })
        },
        step_2: function() {
            var t = this,
            e = window.innerHeight,
            i = t.element.find(".person"),
            n = t.element.find(".main"),
            s = t.element.find(".car_0"),
            r = t.element.find(".car_1");
            t.element.find(".bus").addClass("animate"),
            mediaMgr.music.fly.play(),
            mediaMgr.music.walk.play(),
            TweenMax.fromTo(i, 4, {
                x: -136 / Page.dpi,
                y: -4114 / Page.dpi + e / 2
            },
            {
                y: -4114 / Page.dpi,
                onComplete: function() {
                    mediaMgr.music.walk.pause(),
                    t.framePlayer.pause(),
                    t.question(2,
                    function() {
                        t.framePlayer.goto(0),
                        t.framePlayer.play(),
                        setTimeout(function() {
                            s.addClass("animate"),
                            r.addClass("animate"),
                            mediaMgr.music.car.play()
                        },
                        500),
                        n.css({
                            "-webkit-transform": "translate3d(0," + parseInt(5808 / Page.dpi - e / 2) + "px,0)"
                        }),
                        setTimeout(function() {
                            t.step_3()
                        },
                        2e3)
                    })
                }
            })
        },
        step_3: function() {
            var t = this,
            e = window.innerHeight,
            i = t.element.find(".person"),
            n = t.element.find(".main"),
            s = t.element.find(".bicycle_0");
            mediaMgr.music.walk.play(),
            TweenMax.fromTo(i, 4, {
                x: -286 / Page.dpi,
                y: -5808 / Page.dpi + e / 2
            },
            {
                y: -5808 / Page.dpi,
                onComplete: function() {
                    mediaMgr.music.walk.pause(),
                    t.framePlayer.pause(),
                    t.question(3,
                    function() {
                        t.framePlayer.goto(0),
                        t.framePlayer.play(),
                        s.addClass("animate"),
                        mediaMgr.music.bicycle.play(),
                        n.css({
                            "-webkit-transform": "translate3d(0," + parseInt(7035 / Page.dpi - e / 2) + "px,0)"
                        }),
                        setTimeout(function() {
                            t.step_4()
                        },
                        2e3)
                    })
                }
            })
        },
        step_4: function() {
            var t = this,
            e = window.innerHeight,
            i = t.element.find(".person"),
            n = t.element.find(".main"),
            s = t.element.find(".train"),
            r = t.element.find(".moon"),
            o = t.element.find(".video");
            mediaMgr.music.stage.play(),
            mediaMgr.music.walk.play(),
            TweenMax.fromTo(i, 4, {
                x: -50 / Page.dpi,
                y: -7100 / Page.dpi + e / 2
            },
            {
                y: -7100 / Page.dpi,
                onComplete: function() {
                    mediaMgr.music.walk.pause(),
                    t.framePlayer.pause(),
                    t.question(4,
                    function() {
                        s.addClass("animate"),
                        mediaMgr.music.train.play(),
                        setTimeout(function() {
                            r.addClass("animate")
                        },
                        1e3),
                        n.css({
                            "-webkit-transform": "translate3d(0," + parseInt(7790 / Page.dpi) + "px,0)"
                        }),
                        setTimeout(function() {
                            n.addClass("hide"),
                            setTimeout(function() {
                                o.addClass("show"),
                                mediaMgr.video.run.play()
                            },
                            2e3)
                        },
                        2e3)
                    })
                }
            }),
            mediaMgr.video.run.addEventListener("ended",
            function() {
                Page.gotoPage("result"),
                setTimeout(function() {
                    t.element.remove(),
                    mediaMgr.video.run.destroy()
                },
                1e3)
            })
        },
        question: function(t, e) {
            var i = this,
            n = i.element.find(".question_cover"),
            s = [{
                ask: "ä»–åœ¨å”±ä»€ä¹ˆï¼Œè®©ä½ ä¸ç¦åœä¸‹æ¥äº†è„šæ­¥ï¼Ÿ",
                answer: ["A.æ°‘è°£", "B.æ‘‡æ»š", "C.Rap"]
            },
            {
                ask: "å¦‚æžœæœ‰ä¸€æ¬¡æ¥ä¹‹ä¸æ˜“çš„ã€Œé¢†å…»ã€æœºä¼šï¼Œä½ ä¼š PICK å“ªåªå°å¯çˆ±ï¼Ÿ",
                answer: ["A.å°ç»µç¾Š", "B.é•¿é¢ˆé¹¿", "C.å¤§ç™½é²¸"]
            },
            {
                ask: "æ–°æˆ¿çƒ­æˆ¿ä¸Šçº¿ï¼Œä½ æœ€æƒ³åœ¨å“ªé‡Œå®‰ç½®æˆ¿äº§ï¼Ÿ",
                answer: ["A.å†°å·é›ªåŽŸ", "B.çƒ­å¸¦é›¨æž—", "C.ç¹åŽéƒ½å¸‚"]
            },
            {
                ask: "çŸ¥ä¹Žå‰ç¥¥ç‰©åˆ˜çœ‹å±±æƒ³é‚€è¯·ä½ åŽ»ä»–çš„å®¶ä¹¡åŒ—æžçŽ©è€ï¼Œä½ è¡ŒæŽä¸­çš„å¿…éœ€å“æ˜¯ä»€ä¹ˆï¼Ÿ",
                answer: ["A.æ³¡é¢ç«è…¿ç²‰ä¸€ç”Ÿ", "B.ç§‹è£¤æ­é…ç¾½ç»’æœ", "C.æ€Žèƒ½ä¸å¸¦æ´—æ¼±åŒ…"]
            },
            {
                ask: "å¦‚æžœä½ æˆä¸ºã€Œå¤‡å—çž©ç›®ã€çš„ä¸­å¿ƒï¼Œç¬¬ä¸€ä¸ªè¦åˆ†äº«å–œæ‚¦çš„å¯¹è±¡æ˜¯è°ï¼Ÿ",
                answer: ["A.ä½ çš„å¦ä¸€åŠ", "B.æœªæ¥çš„è‡ªå·±", "C.çˆ¶æ¯"]
            }];
            n.addClass("show"),
            n.find(".ask").html(s[t].ask),
            n.find(".answer").html(""),
            s[t].answer.forEach(function(t) {
                n.find(".answer").append("<li>" + t + "</li>")
            }),
            n.find(".answer").find("li").off().on("touchend",
            function() {
                0 === t && (mediaMgr.music.stage.load(), mediaMgr.music.car.load(), mediaMgr.music.bicycle.load(), mediaMgr.music.train.load(), mediaMgr.music.cat.load(), mediaMgr.music.fly.load()),
                4 === t && (i.element.find(".video").append(mediaMgr.video.run.domElement), mediaMgr.video.run.load()),
                n.find(".answer").find("li").off(),
                userInfo.answer[t] = $(this).index(),
                $(this).addClass("cur"),
                setTimeout(function() {
                    n.removeClass("show"),
                    e && e()
                },
                1e3)
            })
        }
    },
    !0)
} ();
var ResultPage = new PageMgr("result", "asset/tpl/result.html"); !
function() {
    ResultPage.extend({
        onLeave: function() {},
        beforeEnter: function() {},
        onEnter: function() {
            var t = this;
            _hmt.push(["_trackPageview", "/result"]),
            t.element.show().animateCss("fadeIn"),
            t.createCanvas(),
            t.element.find(".btn_replay").one("touchend",
            function() {
                Page.gotoPage("choose"),
                setTimeout(function() {
                    t.element.remove()
                },
                1e3)
            }),
            console.log(userInfo),
            t.element.find(".btn_entry").on("touchend",
            function() {
                _hmt.push(["_trackEvent", "result", "click", "link"]),
                t.element.find(".activity").show().animateCss("fadeIn")
            })
        },
        createCanvas: function() {
            var t = this,
            e = userInfo.answer,
            i = {
                question_0: [["çœ¼é‡Œæœ‰é£Žï¼Œå¿ƒä¸­æœ‰çˆ±ï¼Œåˆä¹–åˆæ±Ÿæ¹–", "ä½ æ˜¯æ°¸è¿œå¹´è½»çš„ã€Œè¿½é£Žå°‘å¹´ã€", "ä½ æœ‰ä¸€å—ç»µè½¯åˆå±žäºŽè‡ªå·±çš„ã€Œå¿ƒç†èˆ’é€‚åŒºã€"], ["é’¢é“æ£®æž—ï¼Œå¿ƒæœ‰ã€ŒçŒ›å…½ã€ï¼Œæ»šçƒ«åˆæ¸©æŸ”", "ä½ æ˜¯å¾ˆå¤šäººçœ¼ä¸­æ°¸è¿œä¸ç¾çš„ã€Œå°‘å¹´ã€", "ä½ æ˜¯å¤–è¡¨å†·é™ã€å†…å¿ƒç‹‚çƒ­çš„ã€Œå°‘å¹´ã€"], ["ç‰¹ç«‹ç‹¬è¡Œï¼Œæ€åº¦è‡³ä¸Šï¼ŒçœŸå®žåˆæžœæ•¢", "ä½ æ°¸è¿œæ‹¥æœ‰è‡ªæˆ‘ä¸»å¼ ã€æ„æ°”é£Žå‘", "ä½ å‹‡æ•¢å´ä¸æ¨ªå†²ç›´æ’žï¼Œå¤§èƒ†è¡¨è¾¾ç»ä¸ç›²ä»Ž"]],
                question_1: [["å†…å¿ƒæŸ”è½¯çš„ä½ ä¸äº‰ä¸æŠ¢ï¼Œä½›ç³»äººç”Ÿ", "åšå¼ºçš„å¤–è¡¨ä¸‹ï¼Œå†…å¿ƒå´æŸ”è½¯", "å³ä½¿ä¸æ˜Žç¡®è¡¨è¾¾ï¼Œå¿ƒä¸­å´æœ‰æ‰€ä¸»å¼ "], ["é¢œå€¼è¶…æ ‡çš„ä½ å®‰é™ä¸ºä¼ï¼Œä¼˜é›…ä¸€ç”Ÿ", "ç¦»å¼€ä¸€ä¸ªäººå¯¹ä½ æ¥è¯´æ˜¯å·¨å¤§çš„è€ƒéªŒ"], ["è‡ªç”±è‡ªåœ¨çš„ä½ å¿ƒæ¯”å¤©å¤§ã€èŒåˆ°å‘å…‰", "å¶å°”è´ªçŽ©å´ç»ä¸æ”¾çºµï¼Œå…·æœ‰å†’é™©å®¶ç²¾ç¥ž"]],
                question_2: [["å¶å°”é¿ä¸–ï¼Œæƒ³çŸ¥é“ 24 å°æ—¶ä¸å·¥ä½œçš„æ„Ÿè§‰", "æ¸´æœ›ä¸€æ®µã€Œç¦»å¼€ã€çš„æ—¶é—´ï¼Œè¿‡çº¯ç²¹è‡ªæˆ‘çš„æ—¶å…‰"], ["å‘å¾€è‡ªç„¶èˆ’é€‚çš„ç”Ÿæ´»çŽ¯å¢ƒï¼Œå¶å°”è€ƒè™‘ã€Œè£¸è¾žã€", "æ—…è¡Œçš„æ„ä¹‰å¯¹ä½ æ¥è¯´æ˜¯ã€Œæ°¸è¿œåœ¨è·¯ä¸Šã€"], ["ç”Ÿæ´»å¯¹ä½ è€Œè¨€ï¼Œæ¯å¤©éƒ½æ˜¯å…‰æ€ªé™†ç¦»çš„ç²¾è‡´ç‹‚æ¬¢", "å¼ æ‰¬åˆè‡ªç”±ï¼Œæ¯æ¬¡å’Œä½ äº¤æµéƒ½æ´»åŠ›é²œæ˜Ž", "ä½ æ°¸è¿œç›¸ä¿¡ï¼Œæœªæ¥é²œæ˜Žåˆå¹´è½»"]],
                question_3: [["ä½ è®¤ä¸ºï¼Œã€Œæ‡’ã€è¿™ä¸ªå­—ä¿ƒè¿›äº†å¤§åŠäººç±»å‘æ˜Žå²", "å¯¹å‹äººå…³ç…§æœ‰ä½³ï¼Œæœ‰æ—¶ä¼šç–äºŽç…§æ–™è‡ªå·±"], ["å¥½çœ‹ä¸é‡è¦ï¼Œæ´»ä¸‹åŽ»æœ€é‡è¦ï¼Œã€Œæƒœå‘½ç‹‚é­”ã€æœ¬å°Š", "ä½ çš„è¸å®žå’Œæ¸©æš–ï¼Œæ€»ä¼šè®©äººæƒ³è¦ä¾é "], ["ä½ èƒ½å¿å—å¾ˆå¤šè‹¦ï¼Œä½†è“¬å¤´åž¢é¢çš„è‹¦é™¤å¤–", "æ— æ•°çš„æ·±å¤œå¤±çœ ï¼Œåœ¨é»Žæ˜Žæ¥æ—¶æ€»ä¼šä¿æŒæœ€ä½³çŠ¶æ€", "ä½ å¾ˆä¼˜ç§€ï¼Œåœ¨ä¸è¢«çœ‹å¥½çš„æ—¶å€™å…¶å®žä¹Ÿå¾ˆå¥½çœ‹"]],
                question_4: [["æœ‰äº›äººæƒ³è¦çš„ä¸œè¥¿å¾ˆå¤šï¼Œè€Œä½ åªæƒ³è¦ä¸€ä¸ªäººçš„å¿ƒ", "çˆ±è®©ä½ æœ‰äº†è½¯è‚‹ï¼Œä½†ä¹ŸæŠ«ä¸Šç›”ç”²", "çˆ±åˆ°æ·±å¤„çš„æ—¶å€™ï¼Œæ€»è§‰å¾—ä¸€åˆ‡éƒ½å¯¹äº†"], ["ä½ çš„ã€Œåšè‡ªå·±ã€ï¼Œä»Žä¸è¢«ã€Œå¹´é¾„ã€å’Œã€Œæ—¶é—´ã€é™åˆ¶", "ä½ åªæƒ³æ‹¼å°½å…¨åŠ›è¿‡å¥½è¿™ä¸€ç”Ÿ", "ç‹¬ç«‹å†·é™ï¼ŒçŸ¥é“å®‰å…¨æ„Ÿé€šå¸¸æ¥æºäºŽè‡ªå·±"], ["æ— è®ºåˆ°å“ªå„¿ï¼Œéƒ½åœ¨ä»¥å®¶ä¸ºåŽŸç‚¹ã€ç‰µæŒ‚ä¸ºåŠå¾„çš„åœ†é‡Œ", "å®¶æ˜¯æ°¸æ’çš„ç‰µæŒ‚ï¼Œä¹Ÿæ˜¯æ°¸è¿œçš„å½’å®¿", "ä½ ç›¸ä¿¡ç”Ÿæ´»éœ€è¦æŸ´ç±³æ²¹ç›ï¼Œä¹Ÿéœ€è¦æƒŠå–œå’Œä»ªå¼æ„Ÿ"]]
            },
            n = [];
            e.forEach(function(t, e) {
                var s = i["question_" + e],
                r = s[t],
                o = r.length;
                n.push(r[utils.randomInt(0, o - 1)])
            }),
            n.splice(utils.randomInt(0, n.length - 1), 1),
            n.splice(utils.randomInt(0, n.length - 1), 1),
            console.log(n);
            var s = document.createElement("canvas"),
            r = s.getContext("2d");
            s.width = 640,
            s.height = 1138;
            var o = new Image,
            a = function(t) {
                var i = e[2],
                n = new Image;
                n.src = "asset/img/result/bg/" + i + ".png",
                n.onload = function() {
                    r.drawImage(n, 0, 0),
                    l(t)
                }
            },
            l = function(t) {
                var i = e[0],
                n = new Image;
                n.src = "asset/img/result/music/" + i + ".png",
                n.onload = function() {
                    r.drawImage(n, 0, 0),
                    h(t)
                }
            },
            h = function(t) {
                var i = e[1],
                n = new Image;
                n.src = "asset/img/result/animal/" + i + ".png",
                n.onload = function() {
                    r.drawImage(n, 0, 0),
                    c(t)
                }
            },
            c = function(t) {
                var e = userInfo.personID,
                i = userInfo.sex,
                n = new Image;
                n.src = "asset/img/choose/" + i + "_" + e + ".png",
                n.onload = function() {
                    var e = n.height / 600,
                    i = n.width / e;
                    r.drawImage(n, 0, 0, n.width, n.height, (640 - i) / 2 + 10, 170, i, 600),
                    u(t)
                }
            },
            u = function(e) {
                r.font = "26px font",
                r.textAlign = "center",
                r.textBaseline = "middle",
                r.fillStyle = "#494c50",
                r.fillText(n[0], 320, 885),
                r.fillText(n[1], 320, 925),
                r.fillText(n[2], 320, 965),
                r.font = "bold 46px Arial",
                r.textAlign = "left",
                r.fillStyle = "#6e737b",
                r.fillText("ä½ å¥½ï¼Œ" + userInfo.name, 97, 98);
                var i = s.toDataURL("image/jpeg"),
                o = new Image;
                o.src = i,
                o.id = "save",
                t.element.find(".card").append(o),
                t.press(),
                d()
            },
            d = function() {
                var e = new Image;
                e.src = "asset/img/result/tips.jpg",
                e.onload = function() {
                    r.drawImage(e, 0, 0, e.width, e.height, 0, 1e3, e.width, e.height),
                    t.element.find(".card").prepend(s),
                    _hmt.push(["_trackEvent", "result", "create", "shareImg"])
                }
            };
            o.src = "asset/img/result/save_bg.jpg",
            o.onload = function() {
                r.drawImage(o, 0, 0),
                a()
            }
        },
        press: function() {
            var t, e = this;
            e.element.find(".card").find("img").on({
                touchstart: function() {
                    t = setTimeout(function() {
                        _hmt.push(["_trackEvent", "result", "press", "save"])
                    },
                    1e3)
                },
                touchend: function() {
                    clearTimeout(t)
                }
            })
        }
    },
    !0)
} (),
$(document).ready(function() {
    $("*").on("touchstart touchmove mousedown mousemove",
    function(t) {
        var e = t.target.tagName,
        i = $(t.target)[0].id;
        "A" != e && "INPUT" != e && "TEXTAREA" != e && "SELECT" != e && "VIDEO" != e && "save" != i && "activity" != i && t.preventDefault()
    }),
    mediaMgr.init(),
    Page.init("#main"),
    $(".music").on("touchend",
    function() {
        mediaMgr.music.bg.paused ? mediaMgr.music.bg.play() : mediaMgr.music.bg.pause()
    })
});