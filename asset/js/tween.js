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