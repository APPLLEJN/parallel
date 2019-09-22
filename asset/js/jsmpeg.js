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