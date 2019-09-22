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