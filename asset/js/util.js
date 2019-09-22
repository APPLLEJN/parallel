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