!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("APlayer", [], t) : "object" == typeof exports ? exports.APlayer = t() : e.APlayer = t()
}(window, function () {
  return function (e) {
    var t = {};

    function n(i) {
      if (t[i]) return t[i].exports;
      var a = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: i
      })
    }, n.r = function (e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return n.d(t, "a", t), t
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 41)
  }([function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = /mobile/i.test(window.navigator.userAgent),
      a = {
        secondToTime: function (e) {
          var t = Math.floor(e / 3600),
            n = Math.floor((e - 3600 * t) / 60),
            i = Math.floor(e - 3600 * t - 60 * n);
          return (t > 0 ? [t, n, i] : [n, i]).map(function (e) {
            return e < 10 ? "0" + e : "" + e
          }).join(":")
        },
        getElementViewLeft: function (e) {
          var t = e.offsetLeft,
            n = e.offsetParent,
            i = document.body.scrollLeft + document.documentElement.scrollLeft;
          if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement)
            for (; null !== n && n !== e;) t += n.offsetLeft, n = n.offsetParent;
          else
            for (; null !== n;) t += n.offsetLeft, n = n.offsetParent;
          return t - i
        },
        getElementViewTop: function (e, t) {
          for (var n, i = e.offsetTop, a = e.offsetParent; null !== a;) i += a.offsetTop, a = a.offsetParent;
          return n = document.body.scrollTop + document.documentElement.scrollTop, t ? i : i - n
        },
        isMobile: i,
        storage: {
          set: function (e, t) {
            localStorage.setItem(e, t)
          },
          get: function (e) {
            return localStorage.getItem(e)
          }
        },
        nameMap: {
          dragStart: i ? "touchstart" : "mousedown",
          dragMove: i ? "touchmove" : "mousemove",
          dragEnd: i ? "touchend" : "mouseup"
        },
        randomOrder: function (e) {
          return function (e) {
            for (var t = e.length - 1; t >= 0; t--) {
              var n = Math.floor(Math.random() * (t + 1)),
                i = e[n];
              e[n] = e[t], e[t] = i
            }
            return e
          }([].concat(function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
              return n
            }
            return Array.from(e)
          }(Array(e))).map(function (e, t) {
            return t
          }))
        }
      };
    t.default = a
  }, function (e, t, n) {
    var i = n(2);
    e.exports = function (e) {
      "use strict";
      e = e || {};
      var t = "",
        n = i.$each,
        a = e.audio,
        r = (e.$value, e.$index, i.$escape),
        o = e.theme,
        s = e.index;
      return n(a, function (e, n) {
        t += '\n<li>\n    <span class="aplayer-list-cur" style="background-color: ', t += r(e.theme || o), t += ';"></span>\n    <span class="aplayer-list-index">', t += r(n + s), t += '</span>\n    <span class="aplayer-list-title">', t += r(e.name), t += '</span>\n    <span class="aplayer-list-author">', t += r(e.artist), t += "</span>\n</li>\n"
      }), t
    }
  }, function (e, t, n) {
    "use strict";
    e.exports = n(15)
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = g(n(33)),
      a = g(n(32)),
      r = g(n(31)),
      o = g(n(30)),
      s = g(n(29)),
      l = g(n(28)),
      u = g(n(27)),
      c = g(n(26)),
      p = g(n(25)),
      d = g(n(24)),
      h = g(n(23)),
      y = g(n(22)),
      f = g(n(21)),
      v = g(n(20)),
      m = g(n(19));

    function g(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var w = {
      play: i.default,
      pause: a.default,
      volumeUp: r.default,
      volumeDown: o.default,
      volumeOff: s.default,
      orderRandom: l.default,
      orderList: u.default,
      menu: c.default,
      loopAll: p.default,
      loopOne: d.default,
      loopNone: h.default,
      loading: y.default,
      right: f.default,
      skip: v.default,
      lrc: m.default
    };
    t.default = w
  }, function (e, t, n) {
    "use strict";
    var i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    i = function () {
      return this
    }();
    try {
      i = i || Function("return this")() || (0, eval)("this")
    } catch (e) {
      "object" === ("undefined" == typeof window ? "undefined" : a(window)) && (i = window)
    }
    e.exports = i
  }, function (e, t, n) {
    "use strict";
    var i, a, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    void 0 === (a = "function" == typeof (i = function () {
      if ("object" === ("undefined" == typeof window ? "undefined" : r(window)) && void 0 !== document.querySelectorAll && void 0 !== window.pageYOffset && void 0 !== history.pushState) {
        var e = function (e, t, n, i) {
            return n > i ? t : e + (t - e) * ((a = n / i) < .5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1);
            var a
          },
          t = function (t, n, i, a) {
            n = n || 500;
            var r = (a = a || window).scrollTop || window.pageYOffset;
            if ("number" == typeof t) var o = parseInt(t);
            else var o = function (e, t) {
              return "HTML" === e.nodeName ? -t : e.getBoundingClientRect().top + t
            }(t, r);
            var s = Date.now(),
              l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (e) {
                window.setTimeout(e, 15)
              };
            ! function u() {
              var c = Date.now() - s;
              a !== window ? a.scrollTop = e(r, o, c, n) : window.scroll(0, e(r, o, c, n)), c > n ? "function" == typeof i && i(t) : l(u)
            }()
          },
          n = function (e) {
            if (!e.defaultPrevented) {
              e.preventDefault(), location.hash !== this.hash && window.history.pushState(null, null, this.hash);
              var n = document.getElementById(this.hash.substring(1));
              if (!n) return;
              t(n, 500, function (e) {
                location.replace("#" + e.id)
              })
            }
          };
        return document.addEventListener("DOMContentLoaded", function () {
          for (var e, t = document.querySelectorAll('a[href^="#"]:not([href="#"])'), i = t.length; e = t[--i];) e.addEventListener("click", n, !1)
        }), t
      }
    }) ? i.call(t, n, t, e) : i) || (e.exports = a)
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      a = s(n(1)),
      r = s(n(0)),
      o = s(n(5));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var l = function () {
      function e(t) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.player = t, this.index = 0, this.audios = this.player.options.audio, this.bindEvents()
      }
      return i(e, [{
        key: "bindEvents",
        value: function () {
          var e = this;
          this.player.template.list.addEventListener("click", function (t) {
            // 如果点击的不是li元素或其子元素,直接返回
            if(!t.target.closest('li')) return;
            
            var n = void 0;
            n = "LI" === t.target.tagName.toUpperCase() ? t.target : t.target.closest('li');
            var i = parseInt(n.getElementsByClassName("aplayer-list-index")[0].innerHTML) - 1;
            i !== e.index ? (e.switch(i), e.player.play()) : e.player.toggle()
          })
        }
      }, {
        key: "show",
        value: function () {
          this.player.events.trigger("listshow"), this.player.template.list.classList.remove("aplayer-list-hide"), this.player.template.listOl.scrollTop = 33 * this.index
        }
      }, {
        key: "hide",
        value: function () {
          this.player.events.trigger("listhide"), this.player.template.list.classList.add("aplayer-list-hide")
        }
      }, {
        key: "toggle",
        value: function () {
          if (window.innerWidth <= 768) {
            this.player.template.list.classList.contains("aplayer-list-hide") ? this.show() : this.hide()
          }
        }
      }, {
        key: "add",
        value: function (e) {
          this.player.events.trigger("listadd", {
            audios: e
          }), "[object Array]" !== Object.prototype.toString.call(e) && (e = [e]), e.map(function (e) {
            return e.name = e.name || e.title || "Audio name", e.artist = e.artist || e.author || "Audio artist", e.cover = e.cover || e.pic, e.type = e.type || "normal", e
          });
          var t = !(this.audios.length > 1),
            n = 0 === this.audios.length;
          this.player.template.listOl.innerHTML += (0, a.default)({
            theme: this.player.options.theme,
            audio: e,
            index: this.audios.length + 1
          }), this.audios = this.audios.concat(e), t && this.audios.length > 1 && this.player.container.classList.add("aplayer-withlist"), this.player.randomOrder = r.default.randomOrder(this.audios.length), this.player.template.listCurs = this.player.container.querySelectorAll(".aplayer-list-cur"), this.player.template.listCurs[this.audios.length - 1].style.backgroundColor = e.theme || this.player.options.theme, n && ("random" === this.player.options.order ? this.switch(this.player.randomOrder[0]) : this.switch(0))
        }
      }, {
        key: "remove",
        value: function (e) {
          if (this.player.events.trigger("listremove", {
              index: e
            }), this.audios[e])
            if (this.audios.length > 1) {
              var t = this.player.container.querySelectorAll(".aplayer-list li");
              t[e].remove(), this.audios.splice(e, 1), this.player.lrc && this.player.lrc.remove(e), e === this.index && (this.audios[e] ? this.switch(e) : this.switch(e - 1)), this.index > e && this.index--;
              for (var n = e; n < t.length; n++) t[n].getElementsByClassName("aplayer-list-index")[0].textContent = n;
              1 === this.audios.length && this.player.container.classList.remove("aplayer-withlist"), this.player.template.listCurs = this.player.container.querySelectorAll(".aplayer-list-cur")
            } else this.clear()
        }
      }, {
        key: "switch",
        value: function (e) {
          if (this.player.events.trigger("listswitch", {
              index: e
            }), void 0 !== e && this.audios[e]) {
            this.index = e;
            var t = this.audios[this.index];
            this.player.template.pic.style.backgroundImage = t.cover ? "url('" + t.cover + "')" : "";
            this.player.template.picShadow.style.backgroundImage = t.cover ? "url('" + t.cover + "')" : "";
            document.getElementById("music_bg").style.backgroundImage = t.cover ? "url('" + t.cover + "')" : "";
            this.player.theme(this.audios[this.index].theme || this.player.options.theme, this.index, !1), this.player.template.title.innerHTML = t.name, this.player.template.author.innerHTML = t.artist ? " - " + t.artist : "";
            var n = this.player.container.getElementsByClassName("aplayer-list-light")[0];
            n && n.classList.remove("aplayer-list-light"), this.player.container.querySelectorAll(".aplayer-list li")[this.index].classList.add("aplayer-list-light"), (0, o.default)(33 * this.index, 500, null, this.player.template.listOl), this.player.setAudio(t), this.player.lrc && this.player.lrc.switch(this.index), this.player.lrc && this.player.lrc.update(0), 1 !== this.player.duration && (this.player.template.dtime.innerHTML = r.default.secondToTime(this.player.duration));
            // 添加歌词点击事件
            heo.addLyricClickEvent();
            // 调用 updateThemeColorWithImage 函数
            if (t.cover) {
              var img = new Image();
              img.crossOrigin = 'Anonymous';
              img.src = t.cover;
              img.onload = function() {
                  heo.updateThemeColorWithImage(img);
              };
            }
          }
        }
      }, {
        key: "clear",
        value: function () {
          this.player.events.trigger("listclear"), this.index = 0, this.player.container.classList.remove("aplayer-withlist"), this.player.pause(), this.audios = [], this.player.lrc && this.player.lrc.clear(), this.player.audio.src = "", this.player.template.listOl.innerHTML = "", this.player.template.pic.style.backgroundImage = "", this.player.template.picShadow.style.backgroundImage = "", this.player.theme(this.player.options.theme, this.index, !1), this.player.template.title.innerHTML = "No audio", this.player.template.author.innerHTML = "", this.player.bar.set("loaded", 0, "width"), this.player.template.dtime.innerHTML = r.default.secondToTime(0)
        }
      }]), e
    }();
    t.default = l
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }();
    var a = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.events = {}, this.audioEvents = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "mozaudioavailable", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], this.playerEvents = ["destroy", "listshow", "listhide", "listadd", "listremove", "listswitch", "listclear", "noticeshow", "noticehide", "lrcshow", "lrchide"]
      }
      return i(e, [{
        key: "on",
        value: function (e, t) {
          this.type(e) && "function" == typeof t && (this.events[e] || (this.events[e] = []), this.events[e].push(t))
        }
      }, {
        key: "trigger",
        value: function (e, t) {
          if (this.events[e] && this.events[e].length)
            for (var n = 0; n < this.events[e].length; n++) this.events[e][n](t)
        }
      }, {
        key: "type",
        value: function (e) {
          return -1 !== this.playerEvents.indexOf(e) ? "player" : -1 !== this.audioEvents.indexOf(e) ? "audio" : (console.error("Unknown event name: " + e), null)
        }
      }]), e
    }();
    t.default = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }();
    var a = function () {
      function e(t) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.player = t, window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
          window.setTimeout(e, 1e3 / 60)
        }, this.types = ["loading"], this.init()
      }
      return i(e, [{
        key: "init",
        value: function () {
          var e = this;
          this.types.forEach(function (t) {
            e["init" + t + "Checker"]()
          })
        }
      }, {
        key: "initloadingChecker",
        value: function () {
          var e = this,
            t = 0,
            n = 0,
            i = !1;
          this.loadingChecker = setInterval(function () {
            e.enableloadingChecker && (n = e.player.audio.currentTime, i || n !== t || e.player.audio.paused || (e.player.container.classList.add("aplayer-loading"), i = !0), i && n > t && !e.player.audio.paused && (e.player.container.classList.remove("aplayer-loading"), i = !1), t = n)
          }, 100)
        }
      }, {
        key: "enable",
        value: function (e) {
          this["enable" + e + "Checker"] = !0, "fps" === e && this.initfpsChecker()
        }
      }, {
        key: "disable",
        value: function (e) {
          this["enable" + e + "Checker"] = !1
        }
      }, {
        key: "destroy",
        value: function () {
          var e = this;
          this.types.forEach(function (t) {
            e["enable" + t + "Checker"] = !1, e[t + "Checker"] && clearInterval(e[t + "Checker"])
          })
        }
      }]), e
    }();
    t.default = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      a = o(n(0)),
      r = o(n(3));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var s = function () {
      function e(t) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.player = t, this.initPlayButton(), this.initPlayBar(), this.initOrderButton(), this.initLoopButton(), this.initMenuButton(), a.default.isMobile || this.initVolumeButton(), this.initMiniSwitcher(), this.initSkipButton(), this.initLrcButton()
      }
      return i(e, [{
        key: "initPlayButton",
        value: function () {
          var e = this;
          this.player.template.pic.addEventListener("click", function () {
            e.player.toggle()
          })
        }
      }, {
        key: "initPlayBar",
        value: function () {
          var e = this,
            t = function (t) {
              var n = ((t.clientX || t.changedTouches[0].clientX) - a.default.getElementViewLeft(e.player.template.barWrap)) / e.player.template.barWrap.clientWidth;
              n = Math.max(n, 0), n = Math.min(n, 1), e.player.bar.set("played", n, "width"), e.player.lrc && e.player.lrc.update(n * e.player.duration), e.player.template.ptime.innerHTML = a.default.secondToTime(n * e.player.duration)
            },
            n = function n(i) {
              document.removeEventListener(a.default.nameMap.dragEnd, n), document.removeEventListener(a.default.nameMap.dragMove, t);
              var r = ((i.clientX || i.changedTouches[0].clientX) - a.default.getElementViewLeft(e.player.template.barWrap)) / e.player.template.barWrap.clientWidth;
              r = Math.max(r, 0), r = Math.min(r, 1), e.player.bar.set("played", r, "width"), e.player.seek(e.player.bar.get("played", "width") * e.player.duration), e.player.disableTimeupdate = !1
            };
          this.player.template.barWrap.addEventListener(a.default.nameMap.dragStart, function () {
            e.player.disableTimeupdate = !0, document.addEventListener(a.default.nameMap.dragMove, t), document.addEventListener(a.default.nameMap.dragEnd, n)
          })
        }
      }, {
        key: "initVolumeButton",
        value: function () {
          var e = this;
          this.player.template.volumeButton.addEventListener("click", function () {
            e.player.audio.muted ? (e.player.audio.muted = !1, e.player.switchVolumeIcon(), e.player.bar.set("volume", e.player.volume(), "height")) : (e.player.audio.muted = !0, e.player.switchVolumeIcon(), e.player.bar.set("volume", 0, "height"))
          });
          var t = function (t) {
              var n = 1 - ((t.clientY || t.changedTouches[0].clientY) - a.default.getElementViewTop(e.player.template.volumeBar, e.player.options.fixed)) / e.player.template.volumeBar.clientHeight;
              n = Math.max(n, 0), n = Math.min(n, 1), e.player.volume(n)
            },
            n = function n(i) {
              e.player.template.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"), document.removeEventListener(a.default.nameMap.dragEnd, n), document.removeEventListener(a.default.nameMap.dragMove, t);
              var r = 1 - ((i.clientY || i.changedTouches[0].clientY) - a.default.getElementViewTop(e.player.template.volumeBar, e.player.options.fixed)) / e.player.template.volumeBar.clientHeight;
              r = Math.max(r, 0), r = Math.min(r, 1), e.player.volume(r)
            };
          this.player.template.volumeBarWrap.addEventListener(a.default.nameMap.dragStart, function () {
            e.player.template.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"), document.addEventListener(a.default.nameMap.dragMove, t), document.addEventListener(a.default.nameMap.dragEnd, n)
          })
        }
      }, {
        key: "initOrderButton",
        value: function () {
          var e = this;
          this.player.template.order.addEventListener("click", function () {
            "list" === e.player.options.order ? (e.player.options.order = "random", e.player.template.order.innerHTML = r.default.orderRandom) : "random" === e.player.options.order && (e.player.options.order = "list", e.player.template.order.innerHTML = r.default.orderList)
          })
        }
      }, {
        key: "initLoopButton",
        value: function () {
          var e = this;
          this.player.template.loop.addEventListener("click", function () {
            e.player.list.audios.length > 1 ? "one" === e.player.options.loop ? (e.player.options.loop = "none", e.player.template.loop.innerHTML = r.default.loopNone) : "none" === e.player.options.loop ? (e.player.options.loop = "all", e.player.template.loop.innerHTML = r.default.loopAll) : "all" === e.player.options.loop && (e.player.options.loop = "one", e.player.template.loop.innerHTML = r.default.loopOne) : "one" === e.player.options.loop || "all" === e.player.options.loop ? (e.player.options.loop = "none", e.player.template.loop.innerHTML = r.default.loopNone) : "none" === e.player.options.loop && (e.player.options.loop = "all", e.player.template.loop.innerHTML = r.default.loopAll)
          })
        }
      }, {
        key: "initMenuButton",
        value: function () {
          var e = this;
          this.player.template.menu.addEventListener("click", function () {
            e.player.list.toggle()
          });       
        }
      }, {
        key: "initMiniSwitcher",
        value: function () {
          var e = this;
          this.player.template.miniSwitcher.addEventListener("click", function () {
            e.player.setMode("mini" === e.player.mode ? "normal" : "mini")
          })
        }
      }, {
        key: "initSkipButton",
        value: function () {
          var e = this;
          this.player.template.skipBackButton.addEventListener("click", function () {
            e.player.skipBack()
          }), this.player.template.skipForwardButton.addEventListener("click", function () {
            e.player.skipForward()
          }), this.player.template.skipPlayButton.addEventListener("click", function () {
            e.player.toggle()
          })
        }
      }, {
        key: "initLrcButton",
        value: function () {
          var e = this;
          this.player.template.lrcButton.addEventListener("click", function () {
            e.player.template.lrcButton.classList.contains("aplayer-icon-lrc-inactivity") ? (e.player.template.lrcButton.classList.remove("aplayer-icon-lrc-inactivity"), e.player.lrc && e.player.lrc.show()) : (e.player.template.lrcButton.classList.add("aplayer-icon-lrc-inactivity"), e.player.lrc && e.player.lrc.hide())
          })
        }
      }]), e
    }();
    t.default = s
  }, function (e, t, n) {
    var i = n(2);
    e.exports = function (e) {
      "use strict";
      e = e || {};
      var t = "",
        n = i.$each,
        a = e.lyrics,
        r = (e.$value, e.$index, i.$escape);
      return n(a, function (e, n) {
        t += "\n    <p", 0 === n && (t += ' class="aplayer-lrc-current"'), t += ">", t += r(e[1]), t += "</p>\n";
      }), t
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i, a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      r = n(10),
      o = (i = r) && i.__esModule ? i : {
        default: i
      };
    var s = function () {
      function e(t) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.container = t.container, this.async = t.async, this.player = t.player, this.parsed = [], this.index = 0, this.current = []
      }
      return a(e, [{
        key: "show",
        value: function () {
          this.player.events.trigger("lrcshow"), this.player.template.lrcWrap.classList.remove("aplayer-lrc-hide")
        }
      }, {
        key: "hide",
        value: function () {
          this.player.events.trigger("lrchide"), this.player.template.lrcWrap.classList.add("aplayer-lrc-hide")
        }
      }, {
        key: "toggle",
        value: function () {
          this.player.template.lrcWrap.classList.contains("aplayer-lrc-hide") ? this.show() : this.hide()
        }
      }, {
        key: "update",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.player.audio.currentTime;
          if (this.index > this.current.length - 1 || e < this.current[this.index][0] || !this.current[this.index + 1] || e >= this.current[this.index + 1][0])
            for (var t = 0; t < this.current.length; t++) e >= this.current[t][0] && (!this.current[t + 1] || e < this.current[t + 1][0]) && (this.index = t, this.container.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"), this.container.getElementsByTagName("p")[t].classList.add("aplayer-lrc-current"), handScrollFlag && heo.scrollLyric() )
        }
      }, {
        key: "switch",
        value: function (e) {
          var t = this;
          if (!this.parsed[e])
            if (this.async) {
              this.parsed[e] = [
                ["00:00", "Loading"]
              ];
              var n = new XMLHttpRequest;
              n.onreadystatechange = function () {
                e === t.player.list.index && 4 === n.readyState && (n.status >= 200 && n.status < 300 || 304 === n.status ? t.parsed[e] = t.parse(n.responseText) : (t.player.notice("LRC file request fails: status " + n.status), t.parsed[e] = [
                  ["00:00", "暂无歌词"]
                ]), t.container.innerHTML = (0, o.default)({
                  lyrics: t.parsed[e]
                }), t.update(0), t.current = t.parsed[e])
              };
              var i = this.player.list.audios[e].lrc;
              n.open("get", i, !0), n.send(null)
            } else this.player.list.audios[e].lrc ? this.parsed[e] = this.parse(this.player.list.audios[e].lrc) : this.parsed[e] = [
              ["00:00", "暂无歌词"]
            ];
          this.container.innerHTML = (0, o.default)({
            lyrics: this.parsed[e]
          }), this.update(0), this.current = this.parsed[e]
        }
      }, {
        key: "parse",
        value: function (e) {
          if (e) {
            for (var t = (e = e.replace(/([^\]^\n])\[/g, function (e, t) {
                return t + "\n["
              })).split("\n"), n = [], i = t.length, a = 0; a < i; a++) {
              var r = t[a].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),
                o = t[a].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
              if (r)
                for (var s = r.length, l = 0; l < s; l++) {
                  var u = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(r[l]),
                    c = 60 * u[1] + parseInt(u[2]) + (u[4] ? parseInt(u[4]) / (2 === (u[4] + "").length ? 100 : 1e3) : 0);
                  n.push([c, o])
                }
            }
            return (n = n.filter(function (e) {
              return e[1]
            })).sort(function (e, t) {
              return e[0] - t[0]
            }), n
          }
          return []
        }
      }, {
        key: "remove",
        value: function (e) {
          this.parsed.splice(e, 1)
        }
      }, {
        key: "clear",
        value: function () {
          this.parsed = [], this.container.innerHTML = ""
        }
      }]), e
    }();
    t.default = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i, a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      r = n(0),
      o = (i = r) && i.__esModule ? i : {
        default: i
      };
    var s = function () {
      function e(t) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.storageName = t.options.storageName, this.data = JSON.parse(o.default.storage.get(this.storageName)), this.data || (this.data = {}), this.data.volume = this.data.volume || t.options.volume
      }
      return a(e, [{
        key: "get",
        value: function (e) {
          return this.data[e]
        }
      }, {
        key: "set",
        value: function (e, t) {
          this.data[e] = t, o.default.storage.set(this.storageName, JSON.stringify(this.data))
        }
      }]), e
    }();
    t.default = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }();
    var a = function () {
      function e(t) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.elements = {}, this.elements.volume = t.volume, this.elements.played = t.played, this.elements.loaded = t.loaded
      }
      return i(e, [{
        key: "set",
        value: function (e, t, n) {
          t = Math.max(t, 0), t = Math.min(t, 1), this.elements[e].style[n] = 100 * t + "%"
        }
      }, {
        key: "get",
        value: function (e, t) {
          return parseFloat(this.elements[e].style[t]) / 100
        }
      }]), e
    }();
    t.default = a
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      e.exports = !1;
      try {
        e.exports = "[object process]" === Object.prototype.toString.call(t.process)
      } catch (e) {}
    }).call(this, n(4))
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      var i = n(14),
        a = Object.create(i ? t : window),
        r = /["&'<>]/;
      a.$escape = function (e) {
        return function (e) {
          var t = "" + e,
            n = r.exec(t);
          if (!n) return e;
          var i = "",
            a = void 0,
            o = void 0,
            s = void 0;
          for (a = n.index, o = 0; a < t.length; a++) {
            switch (t.charCodeAt(a)) {
              case 34:
                s = "&#34;";
                break;
              case 38:
                s = "&#38;";
                break;
              case 39:
                s = "&#39;";
                break;
              case 60:
                s = "&#60;";
                break;
              case 62:
                s = "&#62;";
                break;
              default:
                continue
            }
            o !== a && (i += t.substring(o, a)), o = a + 1, i += s
          }
          return o !== a ? i + t.substring(o, a) : i
        }(function e(t) {
          "string" != typeof t && (t = void 0 === t || null === t ? "" : "function" == typeof t ? e(t.call(t)) : JSON.stringify(t));
          return t
        }(e))
      }, a.$each = function (e, t) {
        if (Array.isArray(e))
          for (var n = 0, i = e.length; n < i; n++) t(e[n], n);
        else
          for (var a in e) t(e[a], a)
      }, e.exports = a
    }).call(this, n(4))
  }, function (e, t, n) {
    var i = n(2);
    e.exports = function (e) {
        "use strict";

        var t = "";
        var a = (e = e || {}).options;
        var r = e.cover;
        var o = i.$escape;
        var s = e.icons;
        var u = e.getObject;

        function appendContent(content) {
            t += content;
        }

        // Render fixed layout
        if (a.fixed) {
            appendContent(`
                <div id="music_bg" style="${r ? `background-image: url(&quot;${o(r)}&quot;);` : ""}background-color: ${o(a.theme)};"></div>
                <div class="aplayer-list${a.listFolded ? " aplayer-list-hide" : ""}"${a.listMaxHeight ? ` style="max-height: ${o(a.listMaxHeight)}"` : ""}>
                    <ol${a.listMaxHeight ? ` style="max-height: ${o(a.listMaxHeight)}"` : ""}>
                        ${n(1)(u({ theme: a.theme, audio: a.audio, index: 1 }))}
                    </ol>
                </div>
                <div class="aplayer-left">
                  <div class="aplayer-pic-shadow" style="${r ? `background-image: url(&quot;${o(r)}&quot;);` : ""}background-color: ${o(a.theme)};"></div>
                  <div class="aplayer-pic" style="${r ? `background-image: url(&quot;${o(r)}&quot;);` : ""}background-color: ${o(a.theme)};">
                      <div class="aplayer-button aplayer-play">${s.play}</div>
                  </div>
                  <div class="aplayer-lrc">
                      <div class="aplayer-lrc-contents"></div>
                  </div>
                </div>

                <div class="aplayer-body">
                    <div class="aplayer-info" style="display: none;">
                        <div class="aplayer-music">
                            <span class="aplayer-title">No audio</span>
                            <span class="aplayer-author"></span>
                        </div>
                        <div class="aplayer-controller">
                            <div class="aplayer-bar-wrap">
                                <div class="aplayer-bar">
                                    <div class="aplayer-loaded" style="width: 0"></div>
                                    <div class="aplayer-played" style="width: 0; background: ${o(a.theme)};">
                                        <span class="aplayer-thumb" style="background: ${o(a.theme)};">
                                            <span class="aplayer-loading-icon">${s.loading}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="aplayer-time">
                                <span class="aplayer-time-inner">
                                    <span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span>
                                </span>
                                <span class="aplayer-icon aplayer-icon-back">${s.skip}</span>
                                <span class="aplayer-icon aplayer-icon-play">${s.play}</span>
                                <span class="aplayer-icon aplayer-icon-forward">${s.skip}</span>
                                <div class="aplayer-volume-wrap">
                                    <button type="button" class="aplayer-icon aplayer-icon-volume-down">${s.volumeDown}</button>
                                    <div class="aplayer-volume-bar-wrap">
                                        <div class="aplayer-volume-bar">
                                            <div class="aplayer-volume" style="height: 80%; background: ${o(a.theme)};"></div>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="aplayer-icon aplayer-icon-order">${a.order === "list" ? s.orderList : a.order === "random" ? s.orderRandom : ""}</button>
                                <button type="button" class="aplayer-icon aplayer-icon-loop">${a.loop === "one" ? s.loopOne : a.loop === "all" ? s.loopAll : a.loop === "none" ? s.loopNone : ""}</button>
                                <button type="button" class="aplayer-icon aplayer-icon-menu">${s.menu}</button>
                                <button type="button" class="aplayer-icon aplayer-icon-lrc">${s.lrc}</button>
                            </div>
                        </div>
                    </div>
                    <div class="aplayer-notice"></div>
                    <div class="aplayer-miniswitcher"><button class="aplayer-icon">${s.right}</button></div>
                </div>
            `);
        } else {
            // Render non-fixed layout
            appendContent(`
               <div id="music_bg" style="${r ? `background-image: url(&quot;${o(r)}&quot;);` : ""}background-color: ${o(a.theme)};"></div>
                <div class="aplayer-left">
                    <div class="aplayer-pic-shadow" style="${r ? `background-image: url(&quot;${o(r)}&quot;);` : ""}background-color: ${o(a.theme)};"></div>
                    <div class="aplayer-pic" style="${r ? `background-image: url(&quot;${o(r)}&quot;);` : ""}background-color: ${o(a.theme)};">
                        <div class="aplayer-button aplayer-play">${s.play}</div>
                    </div>
                    <div class="aplayer-list${a.listFolded ? " aplayer-list-hide" : ""}"${a.listMaxHeight ? ` style="max-height: ${o(a.listMaxHeight)}"` : ""}>
                    <ol${a.listMaxHeight ? ` style="max-height: ${o(a.listMaxHeight)}"` : ""}>
                        ${n(1)(u({ theme: a.theme, audio: a.audio, index: 1 }))}
                    </ol>
                </div>
                </div>

                <div class="aplayer-body">
                    <div class="aplayer-info">
                        <div class="aplayer-music">
                            <span class="aplayer-title">No audio</span>
                            <span class="aplayer-author"></span>
                        </div>
                        <div class="aplayer-lrc">
                            <div class="aplayer-lrc-contents"></div>
                        </div>
                        <div class="aplayer-controller">
                            <div class="aplayer-bar-wrap">
                                <div class="aplayer-bar">
                                    <div class="aplayer-loaded" style="width: 0"></div>
                                    <div class="aplayer-played" style="width: 0; background: ${o(a.theme)};">
                                        <span class="aplayer-thumb" style="background: ${o(a.theme)};">
                                            <span class="aplayer-loading-icon">${s.loading}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="aplayer-time">
                                <span class="aplayer-time-inner">
                                    <span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span>
                                </span>
                                <span class="aplayer-icon aplayer-icon-back">${s.skip}</span>
                                <span class="aplayer-icon aplayer-icon-play">${s.play}</span>
                                <span class="aplayer-icon aplayer-icon-forward">${s.skip}</span>
                                <div class="aplayer-volume-wrap">
                                    <button type="button" class="aplayer-icon aplayer-icon-volume-down">${s.volumeDown}</button>
                                    <div class="aplayer-volume-bar-wrap">
                                        <div class="aplayer-volume-bar">
                                            <div class="aplayer-volume" style="height: 80%; background: ${o(a.theme)};"></div>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="aplayer-icon aplayer-icon-order">${a.order === "list" ? s.orderList : a.order === "random" ? s.orderRandom : ""}</button>
                                <button type="button" class="aplayer-icon aplayer-icon-loop">${a.loop === "one" ? s.loopOne : a.loop === "all" ? s.loopAll : a.loop === "none" ? s.loopNone : ""}</button>
                                <button type="button" class="aplayer-icon aplayer-icon-menu">${s.menu}</button>
                                <button type="button" class="aplayer-icon aplayer-icon-lrc">${s.lrc}</button>
                            </div>
                        </div>
                    </div>
                    <div class="aplayer-notice"></div>
                    <div class="aplayer-miniswitcher"><button class="aplayer-icon">${s.right}</button></div>
                </div>
            `);
        }

        return t;
    };
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      a = o(n(3)),
      r = o(n(16));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var s = function () {
      function e(t) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.container = t.container, this.options = t.options, this.randomOrder = t.randomOrder, this.init()
      }
      return i(e, [{
        key: "init",
        value: function () {
          var e = "";
          this.options.audio.length && (e = "random" === this.options.order ? this.options.audio[this.randomOrder[0]].cover : this.options.audio[0].cover), this.container.innerHTML = (0, r.default)({
            options: this.options,
            icons: a.default,
            cover: e,
            getObject: function (e) {
              return e
            }
          }), this.lrc = this.container.querySelector(".aplayer-lrc-contents"), this.lrcWrap = this.container.querySelector(".aplayer-lrc"), this.ptime = this.container.querySelector(".aplayer-ptime"), this.info = this.container.querySelector(".aplayer-info"), this.time = this.container.querySelector(".aplayer-time"), this.barWrap = this.container.querySelector(".aplayer-bar-wrap"), this.button = this.container.querySelector(".aplayer-button"), this.body = this.container.querySelector(".aplayer-body"), this.list = this.container.querySelector(".aplayer-list"), this.listOl = this.container.querySelector(".aplayer-list ol"), this.listCurs = this.container.querySelectorAll(".aplayer-list-cur"), this.played = this.container.querySelector(".aplayer-played"), this.loaded = this.container.querySelector(".aplayer-loaded"), this.thumb = this.container.querySelector(".aplayer-thumb"), this.volume = this.container.querySelector(".aplayer-volume"), this.volumeBar = this.container.querySelector(".aplayer-volume-bar"), this.volumeButton = this.container.querySelector(".aplayer-time button"), this.volumeBarWrap = this.container.querySelector(".aplayer-volume-bar-wrap"), this.loop = this.container.querySelector(".aplayer-icon-loop"), this.order = this.container.querySelector(".aplayer-icon-order"), this.menu = this.container.querySelector(".aplayer-icon-menu"), this.pic = this.container.querySelector(".aplayer-pic"), this.picShadow = this.container.querySelector(".aplayer-pic-shadow"), this.title = this.container.querySelector(".aplayer-title"), this.author = this.container.querySelector(".aplayer-author"), this.dtime = this.container.querySelector(".aplayer-dtime"), this.notice = this.container.querySelector(".aplayer-notice"), this.miniSwitcher = this.container.querySelector(".aplayer-miniswitcher"), this.skipBackButton = this.container.querySelector(".aplayer-icon-back"), this.skipForwardButton = this.container.querySelector(".aplayer-icon-forward"), this.skipPlayButton = this.container.querySelector(".aplayer-icon-play"), this.lrcButton = this.container.querySelector(".aplayer-icon-lrc")
        }
      }]), e
    }();
    t.default = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      var t = {
        container: e.element || document.getElementsByClassName("aplayer")[0],
        mini: e.narrow || e.fixed || !1,
        fixed: !1,
        autoplay: !1,
        mutex: !0,
        lrcType: e.showlrc || e.lrc || 0,
        preload: "auto",
        theme: "#b7daff",
        loop: "all",
        order: "list",
        volume: .7,
        listFolded: e.fixed,
        listMaxHeight: e.listmaxheight,
        audio: e.music || [],
        storageName: "aplayer-setting"
      };
      for (var n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      return "[object Array]" !== Object.prototype.toString.call(e.audio) && (e.audio = [e.audio]), e.audio.map(function (e) {
        return e.name = e.name || e.title || "Audio name", e.artist = e.artist || e.author || "Audio artist", e.cover = e.cover || e.pic, e.type = e.type || "normal", e
      }), e.audio.length <= 1 && "one" === e.loop && (e.loop = "all"), e
    }
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 11.3333L18.2227 4.51823C18.4524 4.36506 18.7628 4.42714 18.916 4.65691C18.9708 4.73904 19 4.83555 19 4.93426V19.0657C19 19.3419 18.7761 19.5657 18.5 19.5657C18.4013 19.5657 18.3048 19.5365 18.2227 19.4818L8 12.6667V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44772 4 7 4C7.55228 4 8 4.44772 8 5V11.3333Z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 18V20H2V18H22ZM2 3.5L10 8.5L2 13.5V3.5ZM22 11V13H12V11H22ZM4 7.1085V9.8915L6.22641 8.5L4 7.1085ZM22 4V6H12V4H22Z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 20V21.9325C8 22.2086 7.77614 22.4325 7.5 22.4325C7.38303 22.4325 7.26977 22.3915 7.17991 22.3166L3.06093 18.8841C2.84879 18.7073 2.82013 18.392 2.99691 18.1799C3.09191 18.0659 3.23264 18 3.38103 18L18 18C19.1046 18 20 17.1046 20 16V8H22V16C22 18.2091 20.2091 20 18 20H8ZM16 2.0675C16 1.79136 16.2239 1.5675 16.5 1.5675C16.617 1.5675 16.7302 1.60851 16.8201 1.68339L20.9391 5.11587C21.1512 5.29266 21.1799 5.60794 21.0031 5.82008C20.9081 5.93407 20.7674 5.99998 20.619 5.99998L6 6C4.89543 6 4 6.89543 4 8V16H2V8C2 5.79086 3.79086 4 6 4H16V2.0675ZM11 8H13V16H11V10H9V9L11 8Z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 20V21.9324C8 22.2086 7.77614 22.4324 7.5 22.4324C7.38303 22.4324 7.26977 22.3914 7.17991 22.3165L3.06093 18.8841C2.84879 18.7073 2.82013 18.392 2.99691 18.1799C3.09191 18.0659 3.23264 18 3.38103 18L18 18C19.1046 18 20 17.1045 20 16V7.99997H22V16C22 18.2091 20.2091 20 18 20H8ZM16 3.99997V2.0675C16 1.79136 16.2239 1.5675 16.5 1.5675C16.617 1.5675 16.7302 1.60851 16.8201 1.68339L20.9391 5.11587C21.1512 5.29266 21.1799 5.60794 21.0031 5.82008C20.9081 5.93407 20.7674 5.99998 20.619 5.99998L6 5.99997C4.89543 5.99997 4 6.8954 4 7.99997V16H2V7.99997C2 5.79083 3.79086 3.99997 6 3.99997H16Z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 3.99998V2.0675C17 1.79136 17.2239 1.5675 17.5 1.5675C17.617 1.5675 17.7302 1.60851 17.8201 1.68339L21.9391 5.11587C22.1512 5.29266 22.1799 5.60794 22.0031 5.82008C21.9081 5.93407 21.7674 5.99998 21.619 5.99998H2V3.99998H17ZM2 18H22V20H2V18ZM2 11H22V13H2V11Z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 17.8832V16L23 19L18 22V19.9095C14.9224 19.4698 12.2513 17.4584 11.0029 14.5453L11 14.5386L10.9971 14.5453C9.57893 17.8544 6.32508 20 2.72483 20H2V18H2.72483C5.52503 18 8.05579 16.3312 9.15885 13.7574L9.91203 12L9.15885 10.2426C8.05579 7.66878 5.52503 6 2.72483 6H2V4H2.72483C6.32508 4 9.57893 6.14557 10.9971 9.45473L11 9.46141L11.0029 9.45473C12.2513 6.5416 14.9224 4.53022 18 4.09051V2L23 5L18 8V6.11684C15.7266 6.53763 13.7737 8.0667 12.8412 10.2426L12.088 12L12.8412 13.7574C13.7737 15.9333 15.7266 17.4624 18 17.8832Z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.88889 16.0001H2C1.44772 16.0001 1 15.5524 1 15.0001V9.00007C1 8.44778 1.44772 8.00007 2 8.00007H5.88889L11.1834 3.66821C11.3971 3.49335 11.7121 3.52485 11.887 3.73857C11.9601 3.8279 12 3.93977 12 4.05519V19.9449C12 20.2211 11.7761 20.4449 11.5 20.4449C11.3846 20.4449 11.2727 20.405 11.1834 20.3319L5.88889 16.0001ZM20.4142 12.0001L23.9497 15.5356L22.5355 16.9498L19 13.4143L15.4645 16.9498L14.0503 15.5356L17.5858 12.0001L14.0503 8.46454L15.4645 7.05032L19 10.5859L22.5355 7.05032L23.9497 8.46454L20.4142 12.0001Z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.88889 16.0001H5C4.44772 16.0001 4 15.5524 4 15.0001V9.00007C4 8.44778 4.44772 8.00007 5 8.00007H8.88889L14.1834 3.66821C14.3971 3.49335 14.7121 3.52485 14.887 3.73857C14.9601 3.8279 15 3.93977 15 4.05519V19.9449C15 20.2211 14.7761 20.4449 14.5 20.4449C14.3846 20.4449 14.2727 20.405 14.1834 20.3319L8.88889 16.0001ZM18.8631 16.5911L17.4411 15.1691C18.3892 14.4376 19 13.2902 19 12.0001C19 10.5697 18.2493 9.31476 17.1203 8.60766L18.5589 7.16906C20.0396 8.26166 21 10.0187 21 12.0001C21 13.8422 20.1698 15.4905 18.8631 16.5911Z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'
  }, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path></svg>'
  }, function (e, t, n) {
    "use strict";
    var i, a, r = e.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined")
    }

    function s() {
      throw new Error("clearTimeout has not been defined")
    }

    function l(e) {
      if (i === setTimeout) return setTimeout(e, 0);
      if ((i === o || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
      try {
        return i(e, 0)
      } catch (t) {
        try {
          return i.call(null, e, 0)
        } catch (t) {
          return i.call(this, e, 0)
        }
      }
    }! function () {
      try {
        i = "function" == typeof setTimeout ? setTimeout : o
      } catch (e) {
        i = o
      }
      try {
        a = "function" == typeof clearTimeout ? clearTimeout : s
      } catch (e) {
        a = s
      }
    }();
    var u, c = [],
      p = !1,
      d = -1;

    function h() {
      p && u && (p = !1, u.length ? c = u.concat(c) : d = -1, c.length && y())
    }

    function y() {
      if (!p) {
        var e = l(h);
        p = !0;
        for (var t = c.length; t;) {
          for (u = c, c = []; ++d < t;) u && u[d].run();
          d = -1, t = c.length
        }
        u = null, p = !1,
          function (e) {
            if (a === clearTimeout) return clearTimeout(e);
            if ((a === s || !a) && clearTimeout) return a = clearTimeout, clearTimeout(e);
            try {
              a(e)
            } catch (t) {
              try {
                return a.call(null, e)
              } catch (t) {
                return a.call(this, e)
              }
            }
          }(e)
      }
    }

    function f(e, t) {
      this.fun = e, this.array = t
    }

    function v() {}
    r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new f(e, t)), 1 !== c.length || p || l(y)
    }, f.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = v, r.addListener = v, r.once = v, r.off = v, r.removeListener = v, r.removeAllListeners = v, r.emit = v, r.prependListener = v, r.prependOnceListener = v, r.listeners = function (e) {
      return []
    }, r.binding = function (e) {
      throw new Error("process.binding is not supported")
    }, r.cwd = function () {
      return "/"
    }, r.chdir = function (e) {
      throw new Error("process.chdir is not supported")
    }, r.umask = function () {
      return 0
    }
  }, function (e, t, n) {
    "use strict";
    (function (e, t) {
      ! function (e, n) {
        if (!e.setImmediate) {
          var i, a, r, o, s, l = 1,
            u = {},
            c = !1,
            p = e.document,
            d = Object.getPrototypeOf && Object.getPrototypeOf(e);
          d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? i = function (e) {
            t.nextTick(function () {
              y(e)
            })
          } : ! function () {
            if (e.postMessage && !e.importScripts) {
              var t = !0,
                n = e.onmessage;
              return e.onmessage = function () {
                t = !1
              }, e.postMessage("", "*"), e.onmessage = n, t
            }
          }() ? e.MessageChannel ? ((r = new MessageChannel).port1.onmessage = function (e) {
            y(e.data)
          }, i = function (e) {
            r.port2.postMessage(e)
          }) : p && "onreadystatechange" in p.createElement("script") ? (a = p.documentElement, i = function (e) {
            var t = p.createElement("script");
            t.onreadystatechange = function () {
              y(e), t.onreadystatechange = null, a.removeChild(t), t = null
            }, a.appendChild(t)
          }) : i = function (e) {
            setTimeout(y, 0, e)
          } : (o = "setImmediate$" + Math.random() + "$", s = function (t) {
            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(o) && y(+t.data.slice(o.length))
          }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), i = function (t) {
            e.postMessage(o + t, "*")
          }), d.setImmediate = function (e) {
            "function" != typeof e && (e = new Function("" + e));
            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
            var a = {
              callback: e,
              args: t
            };
            return u[l] = a, i(l), l++
          }, d.clearImmediate = h
        }

        function h(e) {
          delete u[e]
        }

        function y(e) {
          if (c) setTimeout(y, 0, e);
          else {
            var t = u[e];
            if (t) {
              c = !0;
              try {
                ! function (e) {
                  var t = e.callback,
                    i = e.args;
                  switch (i.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(i[0]);
                      break;
                    case 2:
                      t(i[0], i[1]);
                      break;
                    case 3:
                      t(i[0], i[1], i[2]);
                      break;
                    default:
                      t.apply(n, i)
                  }
                }(t)
              } finally {
                h(e), c = !1
              }
            }
          }
        }
      }("undefined" == typeof self ? void 0 === e ? void 0 : e : self)
    }).call(this, n(4), n(34))
  }, function (e, t, n) {
    "use strict";
    var i = Function.prototype.apply;

    function a(e, t) {
      this._id = e, this._clearFn = t
    }
    t.setTimeout = function () {
      return new a(i.call(setTimeout, window, arguments), clearTimeout)
    }, t.setInterval = function () {
      return new a(i.call(setInterval, window, arguments), clearInterval)
    }, t.clearTimeout = t.clearInterval = function (e) {
      e && e.close()
    }, a.prototype.unref = a.prototype.ref = function () {}, a.prototype.close = function () {
      this._clearFn.call(window, this._id)
    }, t.enroll = function (e, t) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = t
    }, t.unenroll = function (e) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
    }, t._unrefActive = t.active = function (e) {
      clearTimeout(e._idleTimeoutId);
      var t = e._idleTimeout;
      t >= 0 && (e._idleTimeoutId = setTimeout(function () {
        e._onTimeout && e._onTimeout()
      }, t))
    }, n(35), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = setTimeout;

      function a() {}

      function r(e) {
        if (!(this instanceof r)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
      }

      function o(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, r._immediateFn(function () {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== n) {
            var i;
            try {
              i = n(e._value)
            } catch (e) {
              return void l(t.promise, e)
            }
            s(t.promise, i)
          } else(1 === e._state ? s : l)(t.promise, e._value)
        })) : e._deferreds.push(t)
      }

      function s(e, t) {
        try {
          if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
          if (t && ("object" === (void 0 === t ? "undefined" : n(t)) || "function" == typeof t)) {
            var i = t.then;
            if (t instanceof r) return e._state = 3, e._value = t, void u(e);
            if ("function" == typeof i) return void c((a = i, o = t, function () {
              a.apply(o, arguments)
            }), e)
          }
          e._state = 1, e._value = t, u(e)
        } catch (t) {
          l(e, t)
        }
        var a, o
      }

      function l(e, t) {
        e._state = 2, e._value = t, u(e)
      }

      function u(e) {
        2 === e._state && 0 === e._deferreds.length && r._immediateFn(function () {
          e._handled || r._unhandledRejectionFn(e._value)
        });
        for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
        e._deferreds = null
      }

      function c(e, t) {
        var n = !1;
        try {
          e(function (e) {
            n || (n = !0, s(t, e))
          }, function (e) {
            n || (n = !0, l(t, e))
          })
        } catch (e) {
          if (n) return;
          n = !0, l(t, e)
        }
      }
      r.prototype.catch = function (e) {
        return this.then(null, e)
      }, r.prototype.then = function (e, t) {
        var n = new this.constructor(a);
        return o(this, new function (e, t, n) {
          this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }(e, t, n)), n
      }, r.prototype.finally = function (e) {
        var t = this.constructor;
        return this.then(function (n) {
          return t.resolve(e()).then(function () {
            return n
          })
        }, function (n) {
          return t.resolve(e()).then(function () {
            return t.reject(n)
          })
        })
      }, r.all = function (e) {
        return new r(function (t, i) {
          if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
          var a = Array.prototype.slice.call(e);
          if (0 === a.length) return t([]);
          var r = a.length;

          function o(e, s) {
            try {
              if (s && ("object" === (void 0 === s ? "undefined" : n(s)) || "function" == typeof s)) {
                var l = s.then;
                if ("function" == typeof l) return void l.call(s, function (t) {
                  o(e, t)
                }, i)
              }
              a[e] = s, 0 == --r && t(a)
            } catch (e) {
              i(e)
            }
          }
          for (var s = 0; s < a.length; s++) o(s, a[s])
        })
      }, r.resolve = function (e) {
        return e && "object" === (void 0 === e ? "undefined" : n(e)) && e.constructor === r ? e : new r(function (t) {
          t(e)
        })
      }, r.reject = function (e) {
        return new r(function (t, n) {
          n(e)
        })
      }, r.race = function (e) {
        return new r(function (t, n) {
          for (var i = 0, a = e.length; i < a; i++) e[i].then(t, n)
        })
      }, r._immediateFn = "function" == typeof t && function (e) {
        t(e)
      } || function (e) {
        i(e, 0)
      }, r._unhandledRejectionFn = function (e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
      }, e.exports = r
    }).call(this, n(36).setImmediate)
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      a = v(n(37)),
      r = v(n(0)),
      o = v(n(3)),
      s = v(n(18)),
      l = v(n(17)),
      u = v(n(13)),
      c = v(n(12)),
      p = v(n(11)),
      d = v(n(9)),
      h = v(n(8)),
      y = v(n(7)),
      f = v(n(6));

    function v(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var m = [],
      g = function () {
        function e(t) {
          if (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.options = (0, s.default)(t), this.container = this.options.container, this.paused = !0, this.playedPromise = a.default.resolve(), this.mode = "normal", this.randomOrder = r.default.randomOrder(this.options.audio.length), this.container.classList.add("aplayer"), this.options.lrcType && !this.options.fixed && this.container.classList.add("aplayer-withlrc"), this.options.audio.length > 1 && this.container.classList.add("aplayer-withlist"), r.default.isMobile && this.container.classList.add("aplayer-mobile"), this.arrow = this.container.offsetWidth <= 300, this.arrow && this.container.classList.add("aplayer-arrow"), this.container = this.options.container, 2 === this.options.lrcType || !0 === this.options.lrcType)
            for (var n = this.container.getElementsByClassName("aplayer-lrc-content"), i = 0; i < n.length; i++) this.options.audio[i] && (this.options.audio[i].lrc = n[i].innerHTML);
          this.template = new l.default({
            container: this.container,
            options: this.options,
            randomOrder: this.randomOrder
          }), this.options.fixed && (this.container.classList.add("aplayer-fixed"), this.template.body.style.width = this.template.body.offsetWidth - 18 + "px"), this.options.mini && (this.setMode("mini"), this.template.info.style.display = "block"), this.template.info.offsetWidth < 200 && this.template.time.classList.add("aplayer-time-narrow"), this.options.lrcType && (this.lrc = new p.default({
            container: this.template.lrc,
            async: 3 === this.options.lrcType,
            player: this
          })), this.events = new y.default, this.storage = new c.default(this), this.bar = new u.default(this.template), this.controller = new d.default(this), this.timer = new h.default(this), this.list = new f.default(this), this.initAudio(), this.bindEvents(), "random" === this.options.order ? this.list.switch(this.randomOrder[0]) : this.list.switch(0), this.options.autoplay && this.play(), m.push(this)
        }
        return i(e, [{
          key: "initAudio",
          value: function () {
            var e = this;
            this.audio = document.createElement("audio"), this.audio.preload = this.options.preload;
            for (var t = function (t) {
                e.audio.addEventListener(e.events.audioEvents[t], function (n) {
                  e.events.trigger(e.events.audioEvents[t], n)
                })
              }, n = 0; n < this.events.audioEvents.length; n++) t(n);
            this.volume(this.storage.get("volume"), !0)
          }
        }, {
          key: "bindEvents",
          value: function () {
            var e = this;
            this.on("play", function () {
              e.paused && e.setUIPlaying()
            }), this.on("pause", function () {
              e.paused || e.setUIPaused()
            }), this.on("timeupdate", function () {
              if (!e.disableTimeupdate) {
                e.bar.set("played", e.audio.currentTime / e.duration, "width"), e.lrc && e.lrc.update();
                var t = r.default.secondToTime(e.audio.currentTime);
                e.template.ptime.innerHTML !== t && (e.template.ptime.innerHTML = t)
              }
            }), this.on("durationchange", function () {
              1 !== e.duration && (e.template.dtime.innerHTML = r.default.secondToTime(e.duration))
            }), this.on("progress", function () {
              var t = e.audio.buffered.length ? e.audio.buffered.end(e.audio.buffered.length - 1) / e.duration : 0;
              e.bar.set("loaded", t, "width")
            });
            var t = void 0;
            this.on("error", function () {
              e.list.audios.length > 1 ? (e.notice("An audio error has occurred, player will skip forward in 2 seconds."), t = setTimeout(function () {
                e.skipForward(), e.paused || e.play()
              }, 2e3)) : 1 === e.list.audios.length && e.notice("An audio error has occurred.")
            }), this.events.on("listswitch", function () {
              t && clearTimeout(t)
            }), this.on("ended", function () {
              "none" === e.options.loop ? "list" === e.options.order ? e.list.index < e.list.audios.length - 1 ? (e.list.switch((e.list.index + 1) % e.list.audios.length), e.play()) : (e.list.switch((e.list.index + 1) % e.list.audios.length), e.pause()) : "random" === e.options.order && (e.randomOrder.indexOf(e.list.index) < e.randomOrder.length - 1 ? (e.list.switch(e.nextIndex()), e.play()) : (e.list.switch(e.nextIndex()), e.pause())) : "one" === e.options.loop ? (e.list.switch(e.list.index), e.play()) : "all" === e.options.loop && (e.skipForward(), e.play())
            })
          }
        }, {
          key: "setAudio",
          value: function (e) {
            this.hls && (this.hls.destroy(), this.hls = null);
            var t = e.type;
            this.options.customAudioType && this.options.customAudioType[t] ? "[object Function]" === Object.prototype.toString.call(this.options.customAudioType[t]) ? this.options.customAudioType[t](this.audio, e, this) : console.error("Illegal customType: " + t) : (t && "auto" !== t || (t = /m3u8(#|\?|$)/i.exec(e.url) ? "hls" : "normal"), "hls" === t ? Hls.isSupported() ? (this.hls = new Hls, this.hls.loadSource(e.url), this.hls.attachMedia(this.audio)) : this.audio.canPlayType("application/x-mpegURL") || this.audio.canPlayType("application/vnd.apple.mpegURL") ? this.audio.src = e.url : this.notice("Error: HLS is not supported.") : "normal" === t && (this.audio.src = e.url)), this.seek(0), this.paused || this.audio.play()
          }
        }, {
          key: "theme",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.list.audios[this.list.index].theme || this.options.theme,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.list.index;
            (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]) && this.list.audios[t] && (this.list.audios[t].theme = e), this.template.listCurs[t] && (this.template.listCurs[t].style.backgroundColor = e), t === this.list.index && (this.template.pic.style.backgroundColor = e, this.template.played.style.background = e, this.template.thumb.style.background = e, this.template.volume.style.background = e)
          }
        }, {
          key: "seek",
          value: function (e) {
            e = Math.max(e, 0), e = Math.min(e, this.duration), this.audio.currentTime = e, this.bar.set("played", e / this.duration, "width"), this.template.ptime.innerHTML = r.default.secondToTime(e)
          }
        }, {
          key: "setUIPlaying",
          value: function () {
            var e = this;
            if (this.paused && (this.paused = !1, this.template.button.classList.remove("aplayer-play"), this.template.button.classList.add("aplayer-pause"), this.template.button.innerHTML = "", setTimeout(function () {
                e.template.button.innerHTML = o.default.pause
              }, 100), this.template.skipPlayButton.innerHTML = o.default.pause), this.timer.enable("loading"), this.options.mutex)
              for (var t = 0; t < m.length; t++) this !== m[t] && m[t].pause()
          }
        }, {
          key: "play",
          value: function () {
            var e = this;
            this.setUIPlaying();
            var t = this.audio.play();
            t && t.catch(function (t) {
              console.warn(t), "NotAllowedError" === t.name && e.setUIPaused()
            })
            document.getElementById('heoMusic-page').classList.add('aplayer_playing');
          }
        }, {
          key: "setUIPaused",
          value: function () {
            var e = this;
            this.paused || (this.paused = !0, this.template.button.classList.remove("aplayer-pause"), this.template.button.classList.add("aplayer-play"), this.template.button.innerHTML = "", setTimeout(function () {
              e.template.button.innerHTML = o.default.play
            }, 100), this.template.skipPlayButton.innerHTML = o.default.play), this.container.classList.remove("aplayer-loading"), this.timer.disable("loading")
          }
        }, {
          key: "pause",
          value: function () {
            this.setUIPaused(), this.audio.pause(), document.getElementById('heoMusic-page').classList.remove('aplayer_playing');
          }
        }, {
          key: "switchVolumeIcon",
          value: function () {
            this.volume() >= .95 ? this.template.volumeButton.innerHTML = o.default.volumeUp : this.volume() > 0 ? this.template.volumeButton.innerHTML = o.default.volumeDown : this.template.volumeButton.innerHTML = o.default.volumeOff
          }
        }, {
          key: "volume",
          value: function (e, t) {
            return e = parseFloat(e), isNaN(e) || (e = Math.max(e, 0), e = Math.min(e, 1), this.bar.set("volume", e, "height"), t || this.storage.set("volume", e), this.audio.volume = e, this.audio.muted && (this.audio.muted = !1), this.switchVolumeIcon()), this.audio.muted ? 0 : this.audio.volume
          }
        }, {
          key: "on",
          value: function (e, t) {
            this.events.on(e, t)
          }
        }, {
          key: "toggle",
          value: function () {
            this.template.button.classList.contains("aplayer-play") ? this.play() : this.template.button.classList.contains("aplayer-pause") && this.pause()
          }
        }, {
          key: "switchAudio",
          value: function (e) {
            this.list.switch(e)
          }
        }, {
          key: "addAudio",
          value: function (e) {
            this.list.add(e)
          }
        }, {
          key: "removeAudio",
          value: function (e) {
            this.list.remove(e)
          }
        }, {
          key: "destroy",
          value: function () {
            m.splice(m.indexOf(this), 1), this.pause(), this.container.innerHTML = "", this.audio.src = "", this.timer.destroy(), this.events.trigger("destroy")
          }
        }, {
          key: "setMode",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "normal";
            this.mode = e, "mini" === e ? this.container.classList.add("aplayer-narrow") : "normal" === e && this.container.classList.remove("aplayer-narrow")
          }
        }, {
          key: "notice",
          value: function (e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8;
            this.template.notice.innerHTML = e, this.template.notice.style.opacity = i, this.noticeTime && clearTimeout(this.noticeTime), this.events.trigger("noticeshow", {
              text: e
            }), n && (this.noticeTime = setTimeout(function () {
              t.template.notice.style.opacity = 0, t.events.trigger("noticehide")
            }, n))
          }
        }, {
          key: "prevIndex",
          value: function () {
            if (!(this.list.audios.length > 1)) return 0;
            if ("list" === this.options.order) return this.list.index - 1 < 0 ? this.list.audios.length - 1 : this.list.index - 1;
            if ("random" === this.options.order) {
              var e = this.randomOrder.indexOf(this.list.index);
              return 0 === e ? this.randomOrder[this.randomOrder.length - 1] : this.randomOrder[e - 1]
            }
          }
        }, {
          key: "nextIndex",
          value: function () {
            if (!(this.list.audios.length > 1)) return 0;
            if ("list" === this.options.order) return (this.list.index + 1) % this.list.audios.length;
            if ("random" === this.options.order) {
              var e = this.randomOrder.indexOf(this.list.index);
              return e === this.randomOrder.length - 1 ? this.randomOrder[0] : this.randomOrder[e + 1]
            }
          }
        }, {
          key: "skipBack",
          value: function () {
            this.list.switch(this.prevIndex())
          }
        }, {
          key: "skipForward",
          value: function () {
            this.list.switch(this.nextIndex())
          }
        }, {
          key: "duration",
          get: function () {
            return isNaN(this.audio.duration) ? 0 : this.audio.duration
          }
        }], [{
          key: "version",
          get: function () {
            return "1.10.1"
          }
        }]), e
      }();
    t.default = g
  }, , function (e, t, n) {}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n(40);
    var i, a = n(38),
      r = (i = a) && i.__esModule ? i : {
        default: i
      };
    console.log("\n %c APlayer v1.10.1 af84efb %c http://aplayer.js.org \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"), t.default = r.default
  }]).default
});
//# sourceMappingURL=APlayer.min.js.map
