try {
    var retailrocket = function (i) {
        return (i = i || {}).modules = i.modules || {
            ns: i,
            window: window,
            document: document
        }, i.setModule = function (e, t, r) {
            for (var n = 0; n < t.length; n++) t[n] = i.modules[t[n]];
            r = r.apply(r, t) || {};
            (i.modules[e] = r).useNs && (i[e] = r)
        }, i
    }(retailrocket), rrLibrary = (retailrocket.setModule("cdnurls", [], function () {
        return {cdn: "https://cdn.retailrocket.ru", cdnimg: "https://cdnimg.retailrocket.ru"}
    }), retailrocket.setModule("punycode", [], function () {
        var e, k, h, b, i, o, t, r, s, n, c, v, y;

        function I(e) {
            throw new RangeError(n[e])
        }

        function u(e, t) {
            for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
            return n
        }

        function d(e, t) {
            var r = e.split("@"), n = "",
                r = (1 < r.length && (n = r[0] + "@", e = r[1]), (e = e.replace(s, ".")).split("."));
            return n + u(r, t).join(".")
        }

        function C(e) {
            for (var t, r, n = [], i = 0, o = e.length; i < o;) 55296 <= (t = e.charCodeAt(i++)) && t <= 56319 && i < o ? 56320 == (64512 & (r = e.charCodeAt(i++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), i--) : n.push(t);
            return n
        }

        function g(e) {
            return u(e, function (e) {
                var t = "";
                return 65535 < e && (t += y((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + y(e)
            }).join("")
        }

        function w(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
        }

        function S(e, t, r) {
            var n = 0;
            for (e = r ? v(e / o) : e >> 1, e += v(e / t); c * b >> 1 < e; n += h) e = v(e / c);
            return v(n + (c + 1) * e / (e + i))
        }

        function l(e) {
            var t, r, n, i, o, a, s, c = [], u = e.length, d = 0, l = 128, m = 72, p = e.lastIndexOf("-");
            for (p < 0 && (p = 0), r = 0; r < p; ++r) 128 <= e.charCodeAt(r) && I("not-basic"), c.push(e.charCodeAt(r));
            for (n = 0 < p ? p + 1 : 0; n < u;) {
                for (i = d, o = 1, a = h; u <= n && I("invalid-input"), s = e.charCodeAt(n++), (h <= (s = s - 48 < 10 ? s - 22 : s - 65 < 26 ? s - 65 : s - 97 < 26 ? s - 97 : h) || s > v((k - d) / o)) && I("overflow"), d += s * o, !(s < (s = a <= m ? 1 : m + b <= a ? b : a - m)); a += h) o > v(k / (s = h - s)) && I("overflow"), o *= s;
                m = S(d - i, t = c.length + 1, 0 == i), v(d / t) > k - l && I("overflow"), l += v(d / t), d %= t, c.splice(d++, 0, l)
            }
            return g(c)
        }

        function m(e) {
            for (var t, r, n, i, o, a, s, c, u, d, l = [], m = (e = C(e)).length, p = 128, g = 72, f = t = 0; f < m; ++f) (s = e[f]) < 128 && l.push(y(s));
            for (r = n = l.length, n && l.push("-"); r < m;) {
                for (i = k, f = 0; f < m; ++f) p <= (s = e[f]) && s < i && (i = s);
                for (i - p > v((k - t) / (c = r + 1)) && I("overflow"), t += (i - p) * c, p = i, f = 0; f < m; ++f) if ((s = e[f]) < p && ++t > k && I("overflow"), s == p) {
                    for (o = t, a = h; !(o < (u = a <= g ? 1 : g + b <= a ? b : a - g)); a += h) l.push(y(w(u + (d = o - u) % (u = h - u), 0))), o = v(d / u);
                    l.push(y(w(o, 0))), g = S(t, c, r == n), t = 0, ++r
                }
                ++t, ++p
            }
            return l.join("")
        }

        return !(e = "object" == typeof global && global) || e.global !== e && e.window !== e && e.self !== e || (a = e), k = 2147483647, b = 26, i = 38, o = 700, t = /^xn--/, r = /[^\x20-\x7E]/, s = /[\x2E\u3002\uFF0E\uFF61]/g, n = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        }, c = (h = 36) - 1, v = Math.floor, y = String.fromCharCode, {
            version: "1.3.2",
            ucs2: {decode: C, encode: g},
            decode: l,
            encode: m,
            toASCII: function (e) {
                return d(e, function (e) {
                    return r.test(e) ? "xn--" + m(e) : e
                })
            },
            toUnicode: function (e) {
                return d(e, function (e) {
                    return t.test(e) ? l(e.slice(4).toLowerCase()) : e
                })
            }
        }
    }), retailrocket.setModule("cookies", ["punycode"], function (a) {
        var t = "rreiwfc", r = "rrtwdf", n = "rraem", i = "rrdev", o = "rrpvid", s = "rrmrlct", c = "rrlevt",
            u = "rcuid", d = "rrviewed", l = "rrbasket", m = "rr-RecomItemId", p = "rr-MethodName", g = "rr-Suggester",
            f = "rr-viewItemId", k = "rr-addToBasketItemId", h = "rr-RecomAddToCartItemId",
            b = "rr-AddToCartMethodName", v = "rr-AddToCartSuggester", e = "rr-subFormLastView",
            y = "rr-VisitorSegment", I = "rrwps", C = "rrwpswu", w = "rr-testCookie";

        function S(e) {
            return 24 * e * 60 * 60
        }

        var A = function (e) {
            for (var t, r, n = document.cookie.split(";"), i = 0; i < n.length; i++) if (t = n[i].substr(0, n[i].indexOf("=")), r = n[i].substr(n[i].indexOf("=") + 1), (t = t.replace(/^\s+|\s+$/g, "")) == e) return unescape(r);
            return null
        }, T = function (e, t, r, n, i) {
            var r = (r = null == t ? -1 : r) < 63072e3 ? r : 63072e3, o = new Date,
                t = (o.setSeconds(o.getSeconds() + r), escape(t || "") + (r ? "; expires=" + o.toUTCString() : "") + ";path=" + (n || "/") + (i ? ";domain=" + a.toASCII(i) : "") + "; SameSite=Lax;");
            document.cookie = e + "=" + t
        };

        function P(e, t, r) {
            for (var n = location.hostname.split("."), i = Math.min(2, n.length); i <= n.length; i++) {
                var o = n.slice(n.length - i).join(".");
                if (T(e, t, r, "/", o), A(e) == t) break
            }
        }

        return {
            areCookiesEnabled: function () {
                try {
                    document.cookie
                } catch (e) {
                    return !1
                }
                var e, t = !!navigator.cookieEnabled;
                return void 0 !== navigator.cookieEnabled || t || (document.cookie = w, t = -1 !== document.cookie.indexOf(w)), !0 === t && (P(w, e = "testvalue", 10), t = A(w) === e), t
            }, getForceClosedFlagCookie: function () {
                return A(t)
            }, getDeactivatedFlagCookie: function () {
                return A(r)
            }, getIsVisitorAgreedToReceiveMarketingMailCookie: function () {
                return A(n)
            }, getRrPvidCookie: function () {
                return A(o)
            }, getDevCookie: function () {
                return A(i)
            }, getLastEventTimeCookie: function () {
                return A(c)
            }, getMailRequestLastCallTimeCookie: function () {
                return A(s)
            }, getSessionIdCookie: function () {
                return A(u)
            }, getLastViewedCookie: function () {
                return A(d)
            }, getLastAddedBasketCookie: function () {
                return A(l)
            }, getRecomAddToCartItemIdCookie: function () {
                return A(h)
            }, getRecomAddToCartMethodNameCookie: function () {
                return A(b)
            }, getRecomAddToCartSuggesterCookie: function () {
                return A(v)
            }, getRecomItemIdCookie: function () {
                return A(m)
            }, getRecomMethodNameCookie: function () {
                return A(p)
            }, getRecomSuggesterCookie: function () {
                return A(g)
            }, getViewItemIdCookie: function () {
                return A(f)
            }, getAddToBasketItemIdCookie: function () {
                return A(k)
            }, getSubFormLastViewCookie: function () {
                return A(e)
            }, getVisitorSegmenRecordCookie: function (e) {
                return A(e || y)
            }, getWebPushSubscriptionSaved: function () {
                return A(I)
            }, getWebPushSwUpdated: function () {
                return A(C)
            }, setForceClosedFlagCookie: function (e) {
                T(t, e, 2592e3, "/")
            }, setDeactivatedFlagCookie: function (e) {
                T(r, e, 15768e3)
            }, setIsVisitorAgreedToReceiveMarketingMailCookie: function (e) {
                T(n, e)
            }, setSubFormLastViewCookie: function () {
                T(e, !0, 3600, "/")
            }, setOnRootRrPvidCookie: function (e, t) {
                P(o, e, t)
            }, setOnRootDevCookie: function (e, t) {
                P(i, e, t)
            }, setOnRootLastEventTimeCookie: function (e) {
                P(c, e)
            }, setOnRootMailRequestLastCallTimeCookie: function (e) {
                P(s, e)
            }, setOnRootSessionIdCookie: function (e) {
                P(u, e, 31536e3)
            }, setOnRootLastViewedCookie: function (e) {
                P(d, e, 3600)
            }, setOnRootLastAddedBasketCookie: function (e) {
                P(l, e, 3600)
            }, setOnRootViewItemIdCookie: function (e) {
                P(f, e, 600)
            }, setOnRootAddToBasketItemIdCookie: function (e) {
                P(k, e, 30)
            }, setOnRootRecomAddToCartItemIdCookie: function (e) {
                P(h, e, 30)
            }, setOnRootRecomAddToCartMethodNameCookie: function (e) {
                P(b, e, 60)
            }, setOnRootRecomAddToCartSuggesterCookie: function (e) {
                P(v, e, 60)
            }, setOnRootRecomItemIdCookie: function (e) {
                P(m, e, 60)
            }, setOnRootRecomMethodNameCookie: function (e) {
                P(p, e, 60)
            }, setOnRootRecomSuggesterCookie: function (e) {
                P(g, e, 60)
            }, setOnRootVisitorSegmenRecordCookie: function (e, t, r) {
                r = S(r || 60);
                P(e || y, t, r)
            }, setOnRootWebPushSubscriptionSaved: function (e) {
                P(I, !0, e)
            }, setOnRootWebPushSwUpdated: function (e) {
                P(C, !0, e)
            }, cleanOnRootLastViewedCookie: function () {
                P(d, null, -1)
            }, cleanOnRootLastAddedBasketCookie: function () {
                P(l, null, -1)
            }, cleanOnRootAddToBasketItemIdCookie: function () {
                P(k, null, -1)
            }, cleanOnRootViewItemIdCookie: function () {
                P(f, null, -1)
            }, cleanOnRootRecomAddToCartItemIdCookie: function () {
                P(h, null, -1)
            }, cleanOnRootRecomAddToCartMethodNameCookie: function () {
                P(b, null, -1)
            }, cleanOnRootRecomAddToCartSuggesterCookie: function () {
                P(v, null, -1)
            }, cleanOnRootRecomMethodNameCookie: function () {
                P(p, null, -1)
            }, cleanOnRootRecomSuggesterCookie: function () {
                P(g, null, -1)
            }, getSvyaznoyUserFilterType: function () {
                return A("userFilterType")
            }, useNs: !0
        }
    }), retailrocket.setModule("dev", ["cookies"], function (t) {
        return {
            developmentMode: function (e) {
                return null == e ? !!t.getDevCookie() : (t.setOnRootDevCookie(e, 86400), e)
            }, useNs: !0
        }
    }), retailrocket.setModule("segmentator", ["cookies"], function (i) {
        function u(e, t) {
            var r, n = i.getVisitorSegmenRecordCookie((t = t || {}).cookieName);
            return n && n.split(":")[0] == e || (n = e + ":" + (r = 1, e = e, Math.floor(Math.random() * (e - r + 1)) + r)), i.setOnRootVisitorSegmenRecordCookie(t.cookieName, n, t.expireInDay), n.split(":")[1]
        }

        function o(e, t) {
            for (var r = 0, n = 0; n < e.length; n++) r += e[n];
            for (var i = u(r, t), o = 0, a = 1; a <= e.length; a++) {
                for (var s = e[a - 1], c = 1; c <= s; c++) if (o + c == i) return a;
                o += s
            }
        }

        return {
            getVisitorSegment: u, getPseudoSegment: o, getPseudoNamedSegment: function (e, t) {
                var r, n = [], i = [];
                for (r in e) !{}.hasOwnProperty.call(e, r) || (n.push(r), i.push(e[r]));
                return n[o(i, t) - 1]
            }, useNs: !0
        }
    }), retailrocket.setModule("cors", [], function () {
        return {
            make: function (e, t, r, n, i, o, a) {
                var s;
                if (XMLHttpRequest) {
                    if ("withCredentials" in (s = new XMLHttpRequest)) {
                        s.open(t, e, !0);
                        for (var c = s, u = r || [], d = 0; d < u.length; ++d) {
                            var l = u[d];
                            c.setRequestHeader(l.name, l.value)
                        }
                        s.onerror = a, s.withCredentials = i, s.onreadystatechange = function () {
                            4 === s.readyState && (200 <= s.status && s.status < 400 ? o && o(s.responseText) : a && a(new Error("Response returned with non-OK status")))
                        }, s.send(n)
                    }
                } else XDomainRequest ? ((r || 0 < r.length) && a(new Error("custom headers not supported")), (s = new XDomainRequest).open(t, e), s.onerror = a, s.onload = function () {
                    o(s.responseText)
                }, s.send(n)) : a(new Error("CORS not supported"))
            }, useNs: !0
        }
    }), retailrocket.setModule("api", ["cookies", "document", "window"], function (r, e, t) {
        return {
            getSessionId: function () {
                return r.getSessionIdCookie()
            }, getPartnerVisitorId: function () {
                function e() {
                    return Math.floor(Math.random() * Math.pow(10, 15)).toString()
                }

                var t = (t = r.getRrPvidCookie() || e()).length < 13 ? e() : t;
                return r.setOnRootRrPvidCookie(t, 31536e3), t
            }, getPartnerId: function () {
                return t.rrPartnerId
            }, pushTrackingCall: function (e) {
                (t.rrApiOnReady = t.rrApiOnReady || []).push(function () {
                    e(t.rrApi)
                })
            }, baseUrl: "https://api.retailrocket.ru", useNs: !0
        }
    }), retailrocket.setModule("svyaznoy", ["api", "cookies", "window"], function (e, t, r) {
        return "52485de00d422d1cb4c83609" === e.getPartnerId() && (r.rrTestSegment = t.getSvyaznoyUserFilterType()), {}
    }), retailrocket.setModule("utils", ["ns", "document", "punycode"], function (e, i, n) {
        function a(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                return t
            }
        }

        function r(e) {
            if (i.querySelectorAll) return i.querySelectorAll(e);
            var t = i, r = t.documentElement.firstChild, n = t.createElement("STYLE");
            return r.appendChild(n), t.__qsaels = [], n.styleSheet.cssText = e + "{x:expression(document.__qsaels.push(this))}", window.scrollBy(0, 0), t.__qsaels
        }

        function o(e, t) {
            return -1 < (" " + e.className + " ").indexOf(" " + t + " ")
        }

        function s(e) {
            var t = Array.prototype.toJSON, e = (delete Array.prototype.toJSON, JSON.stringify(e));
            return t && (Array.prototype.toJSON = t), e
        }

        function c() {
            for (var e = i.getElementsByTagName("meta"), t = 0; t < e.length; t++) if ("Content-Type" === e[t].httpEquiv) return (e[t].charset || (e[t].content || "").replace(/.*charset=([^;]+).*/i, "$1") || "").toLowerCase()
        }

        function u(e) {
            e = (e || "").toLowerCase().trim();
            return "iso-8859-1" === e ? "windows-1252" : e
        }

        function d(e, t, r) {
            e.addEventListener ? e.addEventListener(t, r, !1) : e.attachEvent("on" + t, r)
        }

        return "indexOf" in Array.prototype || (Array.prototype.indexOf = function (e, t) {
            (t = void 0 === t ? 0 : t) < 0 && (t += this.length), t < 0 && (t = 0);
            for (var r = this.length; t < r; t++) if (t in this && this[t] === e) return t;
            return -1
        }), "filter" in Array.prototype || (Array.prototype.filter = function (e, t) {
            for (var r, n = [], i = 0, o = this.length; i < o; i++) i in this && e.call(t, r = this[i], i, this) && n.push(r);
            return n
        }), "forEach" in Array.prototype || (Array.prototype.forEach = function (e, t) {
            for (var r = 0, n = this.length; r < n; r++) r in this && e.call(t, this[r], r, this)
        }), "map" in Array.prototype || (Array.prototype.map = function (e, t) {
            for (var r = new Array(this.length), n = 0, i = this.length; n < i; n++) n in this && (r[n] = e.call(t, this[n], n, this));
            return r
        }), Array.isArray || (Array.isArray = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }), String.prototype.trim || (String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, "")
        }), {
            getQueryString: function () {
                return window.rrQueryString || window.location.search.substring(1)
            }, objToQueryString: function (e) {
                var t = "";
                if (e) for (var r in e) e.hasOwnProperty(r) && null !== e[r] && void 0 !== e[r] && (t += "&" + r + "=" + ((r = e[r]) instanceof Array ? r.map(encodeURIComponent).join(",") : encodeURIComponent(r)));
                return t
            }, queryStringToObj: function (e) {
                for (var t = e.split("&"), r = {}, n = 0; n < t.length; n++) {
                    var i = t[n].split("="), o = a(i[0]), i = a(i[1] || "");
                    0 < o.trim().length && (r[o] = i)
                }
                return r
            }, plainCopy: function (e, t) {
                var r, n = {};
                for (r in e) !{}.hasOwnProperty.call(e, r) || (n[(t || "") + r] = e[r]);
                return n
            }, getAllKeys: function (e) {
                var t, r = [];
                for (t in e) !{}.hasOwnProperty.call(e, t) || r.push(t);
                return r
            }, getElementsByClassName: function (e) {
                return i.getElementsByClassName ? i.getElementsByClassName(e) : r("." + e)
            }, isValidEmail: function (e) {
                return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(e)
            }, extend: function () {
                for (var e = 1; e < arguments.length; e++) for (var t in arguments[e]) arguments[e].hasOwnProperty(t) && (arguments[0][t] = arguments[e][t]);
                return arguments[0]
            }, uniq: function (e) {
                var t = [];
                return e.forEach(function (e) {
                    t.indexOf(e) < 0 && t.push(e)
                }), t
            }, registerCss: function (e) {
                var t = i.createElement("link");
                t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", e), i.getElementsByTagName("head")[0].appendChild(t)
            }, createEventProperty: function () {
                var t = [], r = {
                    subscribe: function (e) {
                        t.push(e)
                    }, publish: function () {
                        t.forEach(function (e) {
                            try {
                                e.apply(r, arguments || [])
                            } catch (e) {
                                (window.console || {
                                    log: function () {
                                    }
                                }).log(e)
                            }
                        })
                    }
                };
                return r
            }, $one: function (e) {
                return r(e)[0] || null
            }, $all: r, $forall: function (e, t) {
                [].forEach.call(r(e), t)
            }, hasClass: o, getContainerByClass: function (e, t) {
                for (var r = e.parentElement; r && !o(r, t);) r = r.parentElement;
                return r
            }, prototypeSafeJsonStringify: s, createMd5Hash: function (e) {
                var t, r, n = s(e), i = 0;
                if (0 !== n.length) for (t = 0, r = n.length; t < r; t++) i = (i << 5) - i + n.charCodeAt(t), i |= 0;
                return i
            }, getUrlWithoutQuery: function (e) {
                return e ? e.split(/[?#]/)[0] : ""
            }, getPerformanceEntries: function () {
                return "function" == typeof window.performance.getEntries ? window.performance.getEntries() : []
            }, isRobot: function () {
                return !!(document.referrer && -1 < document.referrer.indexOf("//metrika.yandex.ru/stat/visor/player/")) || !!(document.location && document.location.href && -1 < document.location.href.indexOf(".mtproxy.yandex.net"))
            }, getMetaCharset: c, encodingIsModified: function () {
                var e = u(c()), t = u(i.characterSet);
                return e && e !== t
            }, addEventListener: d, getParentsAttributeValueByEvent: function (e) {
                if (window.event) for (var t = window.event.target; t;) {
                    if (t.getAttribute && t.getAttribute(e)) return t.getAttribute(e);
                    t = t.parentNode
                }
                return null
            }, convertUrHostnameToASCII: function (e) {
                if (!e) return null;
                var t = document.createElement("a"), e = (t.href = e, n.toASCII(t.hostname)),
                    r = t.pathname && "/" === t.pathname[0] ? t.pathname : "/" + t.pathname;
                return t.protocol + "//" + e + r + t.search + t.hash
            }, htmlEncode: function (e) {
                return document.createElement("a").appendChild(document.createTextNode(e)).parentNode.innerHTML
            }, base64StringToUint8Array: function (e) {
                for (var e = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), t = window.atob(e), r = new window.Uint8Array(t.length), n = 0; n < t.length; ++n) r[n] = t.charCodeAt(n);
                return r
            }, getUint8Array: function (e) {
                return new window.Uint8Array(e)
            }, repeatUntilDOMLoaded: function (e, t, r) {
                var n;
                "interactive" !== i.readyState && "complete" !== i.readyState && (n = setInterval(function () {
                    e()
                }, r), d(i, "DOMContentLoaded", function () {
                    clearTimeout(n), t()
                }))
            }, extractInt: function (e) {
                return /^(\-|\+)?([0-9]+)$/.test(e) ? Number(e) : NaN
            }, useNs: !0, bind: function (e, t) {
                var r = Array.prototype.slice.call(arguments, 2);
                return function () {
                    return e.apply(t, r.concat(Array.prototype.slice.call(arguments)))
                }
            }
        }
    }), retailrocket.setModule("json", [], function () {
        return {
            stringify: function (e) {
                var t = Array.prototype.toJSON, e = (delete Array.prototype.toJSON, JSON.stringify(e.obj));
                return t && (Array.prototype.toJSON = t), e
            }, parse: function (e) {
                return JSON.parse(e.jsonString)
            }, ns: !1
        }
    }), retailrocket.setModule("visitor", ["cors", "api"], function (s, c) {
        function o(e, t, r, n, i, o) {
            var a = "https://api.retailrocket.ru/api/2.1/visitor/" + c.getSessionId() + "?partnerId=" + c.getPartnerId();
            s.make(a = r ? a + "&signature=" + r + "&validTill=" + n : a, e, [{
                name: "Content-type",
                value: "application/json"
            }], t, !1, i || function () {
            }, o || function () {
            })
        }

        return {
            post: function (e, t, r, n, i) {
                o("POST", e, t, r, n, i)
            }, patch: function (e, t, r, n, i) {
                o("PATCH", e, t, r, n, i)
            }, get: function (e, t, r, n) {
                s.make("https://api.retailrocket.ru/api/1.0/visitor/" + t + "?partnerId=" + e, "GET", [], null, !1, function (e) {
                    return r(JSON.parse(e))
                }, n || function () {
                })
            }, useNs: !0
        }
    }), retailrocket.setModule("products", ["cors", "api", "utils", "cdnurls"], function (s, c, u, d) {
        var a = ["id", "name", "price", "pictureUrl", "url", "isAvailable", "categoryPaths", "description", "stockId", "vendor", "model", "typePrefix", "oldPrice", "buyUrl", "params", "color", "size", "title", "artist"];

        function l(e, t, r, n, i, o) {
            var a = u.createMd5Hash(n),
                r = u.objToQueryString({stockId: r, signature: i, contentHash: a, validTill: o});
            s.make(d.cdn + "/api/1.0/partner/" + e + "/products/" + t + "?" + r, "POST", [{
                name: "Content-type",
                value: "application/json"
            }], n, !1, function () {
            }, function () {
            })
        }

        function m(e, t) {
            var r, n = t.id, i = t.stockId,
                o = (t.id = parseInt(t.id, 10), t.price = parseFloat(t.price), t.oldPrice = parseFloat(t.oldPrice), t.categoryPaths = t.categoryPaths || t.category, t.stockId && "string" != typeof t.stockId && (t.stockId = t.stockId.toString()), t);
            for (r in o) a.indexOf(r) < 0 && ((o.params = o.params || {})[r] = o[r], delete o[r]);
            l(e, n, i, u.prototypeSafeJsonStringify(t))
        }

        return {
            post: function (o, a, s) {
                u.encodingIsModified() || c.pushTrackingCall(function () {
                    var e, t, r, n, i;
                    {
                        if (!a) return m(c.getPartnerId(), o);
                        e = c.getPartnerId(), t = o, r = a, n = s, i = JSON.parse(t), l(e, i.id, i.stockId, t, r, n)
                    }
                })
            }, useNs: !0
        }
    }), retailrocket.setModule("productsGroup", ["cors", "api", "utils", "cdnurls"], function (s, c, u, d) {
        var l = ["groupId", "name", "price", "pictureUrl", "url", "isAvailable", "categoryPaths", "description", "stockId", "vendor", "model", "typePrefix", "oldPrice", "buyUrl", "params", "color", "size", "title", "artist", "products"];

        function m(e, t, r, n, i, o) {
            var a = u.createMd5Hash(n),
                r = u.objToQueryString({stockId: r, signature: i, contentHash: a, validTill: o});
            s.make(d.cdn + "/api/1.0/partner/" + e + "/productsgroup/" + t + "?" + r, "POST", [{
                name: "Content-type",
                value: "application/json"
            }], n, !1, function () {
            }, function () {
            })
        }

        function p(e, t) {
            t.categoryPaths = t.categoryPaths || t.category;
            var r, n = t.groupId, i = t.stockId,
                o = (t.price = parseFloat(t.price), t.oldPrice = parseFloat(t.oldPrice), t);
            for (r in o) l.indexOf(r) < 0 && ((o.params = o.params || {})[r] = o[r], delete o[r]);
            if (t.products) for (var a in t.products) t.products.hasOwnProperty(a) && ("string" == typeof (a = t.products[a]).price && (a.price = parseFloat(a.price)), "string" == typeof a.oldPrice && (a.oldPrice = parseFloat(a.oldPrice)), a.stockId && "string" != typeof a.stockId && (a.stockId = a.stockId.toString()), u.plainCopy(a.params));
            m(e, n, i, u.prototypeSafeJsonStringify(t))
        }

        return {
            post: function (o, a, s) {
                u.encodingIsModified() || c.pushTrackingCall(function () {
                    var e, t, r, n, i;
                    {
                        if (!a) return p(c.getPartnerId(), o);
                        e = c.getPartnerId(), t = o, r = a, n = s, i = JSON.parse(t), m(e, i.groupId, i.stockId, t, r, n)
                    }
                })
            }, useNs: !0
        }
    }), retailrocket.setModule("recommendationClient", ["cors", "utils", "api", "dev"], function (i, o, a, s) {
        return {
            get: function (e, t, r, n) {
                r = o.plainCopy(r || {}), r.session = r.session || a.getSessionId(), r.pvid = a.getPartnerVisitorId(), r.isDebug = s.developmentMode(), r.segmentId = o.queryStringToObj(o.getQueryString()).rr_segmentId, r.format = r.format || "json", t = "https://api.retailrocket.ru/api/2.0/recommendation/" + (r.algorithmType ? r.algorithmType + "/" : "") + t + "/" + e + "/?" + o.objToQueryString(r);
                i.make(t, "get", [], null, !1, function (e) {
                    (n || function () {
                    })(JSON.parse(e))
                })
            }
        }
    }), retailrocket.setModule("recommendation", ["utils", "recommendationClient"], function (c, u) {
        return {
            forProducts: function (e, t, r, n, i) {
                n = c.plainCopy(n || {});
                n.itemIds = t, u.get(e, r, n, i)
            }, forCategories: function (e, t, r, n, i) {
                var o = c.plainCopy(n || {});
                o.categoryIds = [], o.categoryPaths = [];
                for (var a = 0; a < t.length; ++a) {
                    var s = c.extractInt(t[a]);
                    (s || 0 === s ? o.categoryIds : o.categoryPaths).push(t[a])
                }
                u.get(e, r, o, i)
            }, forPerson: function (e, t, r, n, i, o) {
                i = c.plainCopy(i || {});
                i.algorithmType = "personal" !== n ? "personal" : null, u.get(e, n, i, o)
            }, forVisitor: function (e, t, r, n) {
                r = c.plainCopy(r || {});
                r.session = t, u.get(e, "visitorinterest", r, n)
            }, forSearch: function (e, t, r, n) {
                r = c.plainCopy(r || {});
                r.phrase = t, u.get(e, "Search", r, n)
            }, forVisitorCategoryInterest: function (e, t, r, n, i) {
                n = c.plainCopy(n || {});
                n.session = t, n.algorithmType = "VisitorCategoryInterest", u.get(e, r, n, i)
            }, forPreview: function (e, t) {
                u.get(e, "preview", {}, t)
            }, useNs: !0
        }
    }), retailrocket.setModule("items", ["cors"], function (i) {
        function o(e, t, r, n) {
            e = "https://api.retailrocket.ru/api/1.0/partner/" + e + "/items/?itemsIds=" + t.join(",") + (r ? "&stock=" + r : "") + "&format=json";
            i.make(e, "get", [], {}, !1, function (e) {
                n(JSON.parse(e))
            })
        }

        return {
            get: function (e, t, r, n) {
                return 4 === arguments.length ? o(e, t, r, n) : o(e, t, null, r)
            }, useNs: !0
        }
    }), window.rrApiOnReady = window.rrApiOnReady || [], window.rrLibrary = function () {
        String.prototype.trim || (String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, "")
        });
        var o = {
            objToQueryString: function (e) {
                var t = "";
                if (e) for (var r in e) null !== e[r] && void 0 !== e[r] && (t += "&" + r + "=" + encodeURIComponent(e[r]));
                return t
            }, getQueryString: function () {
                return window.rrQueryString || window.location.search.substring(1)
            }, getQueryParametr: function (e) {
                for (var t = o.getQueryString().split("&"), r = 0; r < t.length; r++) {
                    var n = t[r].split("=");
                    if (decodeURIComponent(n[0]) == e) return decodeURIComponent(n[1] || "")
                }
                return null
            }, queryStringToObject: function () {
                for (var e = o.getQueryString().split("&"), t = {}, r = 0; r < e.length; r++) {
                    var n = e[r].split("="), i = decodeURIComponent(n[0]), n = decodeURIComponent(n[1] || "");
                    0 < i.trim().length && (t[i] = n)
                }
                return t
            }, queryStringObjectByPrefix: function (e) {
                var t, r = o.queryStringToObject(), n = {};
                for (t in r) 0 === t.indexOf(e) && (n[t.replace(e, "")] = r[t]);
                return n
            }, getSubscriberDataFromQueryString: function () {
                return rrLibrary.queryStringObjectByPrefix("rrsd_")
            }, prototypeSafeJsonStringify: function (e) {
                var t = Array.prototype.toJSON, e = (delete Array.prototype.toJSON, JSON.stringify(e));
                return t && (Array.prototype.toJSON = t), e
            }, executeSubscribers: function (e, t) {
                if (0 !== e.length) {
                    for (var r = o.EventProperty(), n = 0; n < e.length; n++) try {
                        e[n].apply(r, t || [])
                    } catch (e) {
                        (window.console || {
                            log: function () {
                            }
                        }).log(e)
                    }
                    r()
                }
            }, EventProperty: function () {
                function e() {
                    o.executeSubscribers(t, arguments)
                }

                var t = [];
                return e.subscribe = function (e) {
                    t.push(e)
                }, e
            }, parseStringableProperty: function (e, t, r) {
                return "string" == typeof e ? e : typeof e == typeof {} ? e[t] : r
            }
        };
        return o
    }());
    retailrocket.setModule("rrLibrary", ["window"], function (e) {
        return e.rrLibrary
    }), retailrocket.setModule("localEventsEngine", ["rrLibrary"], function (e) {
        var r = "retailRocketEvents", n = [];

        function i(t) {
            try {
                localStorage.setItem(r, e.prototypeSafeJsonStringify(t))
            } catch (e) {
                n = t
            }
        }

        function o() {
            try {
                return JSON.parse(localStorage.getItem(r)) || []
            } catch (e) {
                return n
            }
        }

        "filter" in Array.prototype || (Array.prototype.filter = function (e, t) {
            for (var r, n = [], i = 0, o = this.length; i < o; i++) i in this && e.call(t, r = this[i], i, this) && n.push(r);
            return n
        });
        var t;
        return t = (new Date).getTime() - 864e5, i(o().filter(function (e) {
            return e.ts > t
        })), e.getLocalEvents = o, e.registerLocalEvent = function (e, t) {
            var r = o();
            r.push({ts: (new Date).getTime(), ev: e, dt: t}), i(r)
        }, e.findLocalEvents = function (t, r) {
            var e = o();
            return t && (e = e.filter(function (e) {
                return 0 <= t.indexOf(e.ev)
            })), e = r ? e.filter(function (e) {
                return e.ts > r
            }) : e
        }, {}
    }), !function (r) {
        var e;
        window.rrApi = window.rcApi = ((e = {
            initialized: !1,
            pageView: r.EventProperty(),
            pageViewCompleted: r.EventProperty(),
            view: r.EventProperty(),
            viewCompleted: r.EventProperty(),
            groupView: r.EventProperty(),
            addToBasket: r.EventProperty(),
            addToBasketCompleted: r.EventProperty(),
            removeFromBasket: r.EventProperty(),
            removeFromBasketCompleted: r.EventProperty(),
            categoryView: r.EventProperty(),
            categoryViewCompleted: r.EventProperty(),
            order: r.EventProperty(),
            orderCompleted: r.EventProperty(),
            recomAddToCart: r.EventProperty(),
            recomAddToCartCompleted: r.EventProperty(),
            recomAddToBasket: r.EventProperty(),
            recomAddToBasketCompleted: r.EventProperty(),
            recomTrack: r.EventProperty(),
            recomTrackCompleted: r.EventProperty(),
            recomMouseDown: r.EventProperty(),
            recomMouseDownCompleted: r.EventProperty(),
            setEmail: r.EventProperty(),
            setEmailCompleted: r.EventProperty(),
            setCustomer: r.EventProperty(),
            setCustomerCompleted: r.EventProperty(),
            subscribeOnItemBackInStock: r.EventProperty(),
            welcomeSequence: r.EventProperty(),
            setKeywords: r.EventProperty(),
            search: r.EventProperty(),
            mailRequest: r.EventProperty(),
            mailRequestFormView: r.EventProperty(),
            subscribeOnPriceDrop: r.EventProperty(),
            impressionContentViewed: r.EventProperty(),
            impressionContentClicked: r.EventProperty(),
            _initialize: r.EventProperty(),
            _empty: function () {
            }
        })._initialize.subscribe(function (t) {
            this.subscribe(function () {
                r.executeSubscribers(window.rrApiOnReady || [], [t]), window.rrApiOnReady = {
                    push: function (e) {
                        r.executeSubscribers([e], [t])
                    }
                }, (window.rrAsyncInit || window.rcAsyncInit || function () {
                })()
            })
        }), e)
    }(rrLibrary), retailrocket.setModule("rrApi", ["window"], function (e) {
        return e.rrApi
    }), retailrocket.setModule("trackingClient", ["cors", "utils", "document", "window", "api"], function (n, i, r, o, a) {
        function s(e) {
            var t = {};
            return t.session = a.getSessionId(), t.pvid = a.getPartnerVisitorId(), t.referrer = i.convertUrHostnameToASCII(r.referrer), t.partnerTestSegment = o.rrTestSegment, t.pageUrl = i.convertUrHostnameToASCII(o.location.href), t.email = o.rrUserEmail, t.keywords = o.rrSearchPhrase, t._no_cache_ = (new Date).getTime(), i.extend(t, e), i.objToQueryString(t)
        }

        return {
            call: function (e) {
                var t = "https://tracking.retailrocket.ru/1.0/event/" + e.eventName + "/" + a.getPartnerId() + (e.id ? "/" + e.id : ""),
                    r = s(e.params);
                n.make(t + "?" + r, e.method, e.headers, i.prototypeSafeJsonStringify(e.data), !1, e.onSuccessCallback || function () {
                })
            }, subscribe: function (e) {
                var t = "https://tracking.retailrocket.ru/1.0/partner/" + a.getPartnerId() + "/subscribe/" + e.eventName,
                    r = s(e.params);
                n.make(t + "?" + r, e.method, e.headers, i.prototypeSafeJsonStringify(e.data), !1, e.onSuccessCallback || function () {
                })
            }
        }
    }), retailrocket.setModule("tracking", ["trackingClient", "utils"], function (s, c) {
        function a(e, t, r, n, i, o) {
            var a = {};
            (a = "object" != typeof t || Array.isArray(t) ? a : c.plainCopy(t || {}, "rrsd_")).email = e, a.basket = r, a.viewed = n, a.isAgreedToReceiveMarketingMail = !1 !== o, s.call({
                eventName: "setEmail",
                method: "get",
                params: a,
                onSuccessCallback: i
            })
        }

        return {
            pageView: function (e) {
                s.call({eventName: "pageView", method: "get", onSuccessCallback: e.onSuccessCallback})
            }, groupView: function (e) {
                var t = [];
                e.productIds && (t = e.productIds.map(Number)), s.call({
                    eventName: "groupView",
                    method: "post",
                    headers: [{name: "Content-type", value: "application/json"}],
                    params: {email: e.email, recomItemId: e.recomItemId, stockId: e.stockId},
                    data: {productIds: t},
                    onSuccessCallback: e.onSuccessCallback
                })
            }, markupRendered: function (e) {
                s.call({
                    eventName: "markuprendered",
                    partnerId: e.partnerId,
                    method: "get",
                    params: {
                        blockId: e.blockId,
                        segmentId: e.segmentId,
                        pvid: e.pvid,
                        session: e.session,
                        isMarkupViewedSupported: e.isMarkupViewedSupported
                    },
                    onSuccessCallback: e.onSuccessCallback
                })
            }, view: function (e) {
                s.call({
                    eventName: "view",
                    method: "get",
                    id: e.itemId,
                    params: {recomItemId: e.recomItemId, stockId: e.stockId},
                    onSuccessCallback: e.onSuccessCallback
                })
            }, setEmail: a, setCustomer: function (e) {
                var t = "object" == typeof e.defaultStockId ? e.defaultStockId.stockId : e.defaultStockId;
                s.call({
                    eventName: "setCustomer",
                    method: "post",
                    headers: [{name: "Content-type", value: "application/json"}],
                    params: {},
                    data: {
                        customerId: e.customerId,
                        email: e.email,
                        phone: e.phone,
                        customData: e.customData,
                        softLinks: e.softLinks,
                        defaultStockId: t,
                        isAgreedToReceiveMarketingMail: !1 !== e.isAgreedToReceiveMarketingMail
                    },
                    onSuccessCallback: e.onSuccessCallback
                })
            }, addToBasket: function (e, t, r) {
                t = "object" == typeof t ? t.stockId : t;
                s.call({eventName: "addToBasket", method: "get", id: e, params: {stockId: t}, onSuccessCallback: r})
            }, removeFromBasket: function (e, t) {
                s.call({eventName: "removeFromBasket", method: "get", id: e, params: {}, onSuccessCallback: t})
            }, categoryView: function (e, t, r) {
                e = "string" == typeof e ? Number(e) : e;
                s.call({
                    eventName: "categoryView",
                    method: "get",
                    id: e,
                    params: {categoryPath: t},
                    onSuccessCallback: r
                })
            }, recomAddToBasket: function (e, t, r, n) {
                s.call({
                    eventName: "recomAddToBasket",
                    method: "get",
                    id: e,
                    params: {suggester: t, suggestMethod: r},
                    onSuccessCallback: n
                })
            }, order: function (e) {
                s.call({
                    eventName: "order",
                    method: "get",
                    id: e.itemId,
                    params: {
                        qnt: e.qnt,
                        price: e.price,
                        transaction: e.transaction,
                        email: e.email,
                        contactExternalId: e.contactExternalId,
                        stockId: e.stockId
                    },
                    onSuccessCallback: e.onSuccessCallback
                })
            }, search: function (e) {
                s.call({
                    eventName: "search",
                    method: "get",
                    params: {email: e.email, searchPhrase: e.searchPhrase},
                    onSuccessCallback: e.onSuccessCallback
                })
            }, recomMouseDown: function (e) {
                s.call({
                    eventName: "recomMouseDown",
                    method: "get",
                    id: e.itemId,
                    params: {suggester: e.suggester, suggestMethod: e.suggestMethod, rrmbid: e.rrmbid},
                    onSuccessCallback: e.onSuccessCallback
                })
            }, recomTrack: function (e) {
                var t = {suggestMethod: e.suggestMethod, recomms: e.recomms, to: e.recomms}, r = e.eventParams || {};
                c.extend(t, c.plainCopy(r)), s.call({
                    eventName: "recomTrack",
                    method: "get",
                    params: t,
                    onSuccessCallback: e.onSuccessCallback
                })
            }, viewSubscriptionForm: function (e) {
                s.call({
                    eventName: "viewsubscriptionform",
                    method: "get",
                    params: {isFirstView: e.isFirstView, requestType: e.requestType},
                    onSuccessCallback: e.onSuccessCallback
                })
            }, markupViewed: function (e) {
                s.call({
                    eventName: "markupViewed",
                    method: "get",
                    params: {blockId: e.blockId, segmentId: e.segmentId},
                    onSuccessCallback: e.onSuccessCallback
                })
            }, mailRequest: function (e, t, r, n, i, o) {
                a(e, o, [], [], function () {
                }, i);
                e = {email: e, session: t, requestType: r, productIds: n, isAgreedToReceiveMarketingMail: i};
                c.extend(e, c.plainCopy(o, "rrsd_")), s.call({eventName: "mailrequest", method: "get", params: e})
            }, priceDrop: function (e, t) {
                for (var r = [].concat(t), n = {email: e}, i = 0; i < r.length; i++) n["items[" + i + "].ItemId"] = r[i].id, n["items[" + i + "].Price"] = r[i].price;
                s.subscribe({eventName: "pricedrop", method: "get", params: n})
            }, impressionContentViewed: function (e) {
                s.call({
                    eventName: "impressionContentViewed",
                    method: "get",
                    params: {impressionContentId: e.impressionContentId},
                    onSuccessCallback: e.onSuccessCallback
                })
            }, impressionContentClicked: function (e) {
                s.call({
                    eventName: "impressionContentClicked",
                    method: "get",
                    params: {impressionContentId: e.impressionContentId},
                    onSuccessCallback: e.onSuccessCallback
                })
            }, emailClick: function (e, t) {
                s.call({eventName: "emailclick", method: "get", params: t, id: e})
            }, backInStock: function (e, t) {
                s.subscribe({eventName: "backinstock", method: "get", params: {email: e, itemId: t}})
            }, welcomeSequence: function (e) {
                a(e, null, [], [], function () {
                }, !1), s.subscribe({eventName: "welcomesequence", method: "get", params: {email: e}})
            }, webPushSubscription: function (e) {
                s.call({
                    eventName: "webpushsubscription",
                    method: "post",
                    headers: [{name: "Content-type", value: "application/json"}],
                    params: {subscriptionId: e.subscriptionId},
                    data: e.subscription,
                    onSuccessCallback: e.onSuccessCallback
                })
            }
        }
    }), retailrocket.setModule("eventsApiHandlers", ["cookies", "api", "utils", "rrApi", "rrLibrary", "tracking"], function (n, e, i, s, o, c) {
        var a, u, d;
        return !i.isRobot() && n.areCookiesEnabled() && (a = "rr_setemail", d = function (e, r) {
            u = e.trim(), setTimeout(function () {
                var e = n.getLastAddedBasketCookie(), t = n.getLastViewedCookie();
                n.cleanOnRootLastAddedBasketCookie(), n.cleanOnRootLastViewedCookie(), c.setEmail(u, r, e, t, s.setEmailCompleted)
            }, 100)
        }, s._initialize.subscribe(function (e) {
            var t, r;
            e && (null != (e = o.getQueryParametr(a)) && d(e, o.getSubscriberDataFromQueryString()), c.pageView({
                onSuccessCallback: function () {
                    s.pageViewCompleted()
                }
            }), e = n.getRecomAddToCartItemIdCookie(), t = n.getRecomAddToCartMethodNameCookie(), r = n.getRecomAddToCartSuggesterCookie(), null != e && s.recomAddToCart(e, {
                suggestMethod: t,
                suggester: r
            }), null != (e = n.getAddToBasketItemIdCookie()) && s.addToBasket(e, {}), t = n.getAddToBasketItemIdCookie(), r = n.getRecomMethodNameCookie(), e = n.getRecomSuggesterCookie(), null != t && null != e && s.recomMouseDown(t, {
                suggestMethod: r,
                suggester: e
            }), s.view.subscribe(function (e, t) {
                n.setOnRootViewItemIdCookie(e);
                t = t || {};
                c.view({
                    itemId: e,
                    recomItemId: n.getRecomItemIdCookie(),
                    stockId: t.stockId,
                    onSuccessCallback: s.viewCompleted
                })
            }), s.groupView.subscribe(function (e, t) {
                t = t || {};
                c.groupView({email: u, productIds: e, recomItemId: n.getRecomItemIdCookie(), stockId: t.stockId})
            }), s.addToBasket.subscribe(function (e, t) {
                n.setOnRootAddToBasketItemIdCookie(e), c.addToBasket(e, t, s.addToBasketCompleted)
            }), s.addToBasketCompleted.subscribe(function () {
                n.cleanOnRootAddToBasketItemIdCookie()
            }), s.removeFromBasket.subscribe(function (e) {
                c.removeFromBasket(e, s.removeFromBasketCompleted)
            }), s.categoryView.subscribe(function (e) {
                var t = e, r = null;
                parseInt(e, 10) != e && (t = null, r = e), c.categoryView(t, r, s.categoryViewCompleted)
            }), s.recomAddToCart.subscribe(function (e, t) {
                var t = t || {},
                    r = t.methodName || o.parseStringableProperty(t, "methodName", "") || t.suggestMethod || o.parseStringableProperty(t, "suggestMethod", ""),
                    t = t.suggester || "widget";
                n.setOnRootRecomAddToCartItemIdCookie(e), n.setOnRootRecomAddToCartMethodNameCookie(r), n.setOnRootRecomAddToCartSuggesterCookie(t), c.recomAddToBasket(e, t, r, s.recomAddToCartCompleted)
            }), s.recomAddToCartCompleted.subscribe(function () {
                n.cleanOnRootRecomAddToCartItemIdCookie(), n.cleanOnRootRecomAddToCartMethodNameCookie(), n.cleanOnRootRecomAddToCartSuggesterCookie()
            }), s.recomMouseDown.subscribe(function (e, t) {
                var r = o.parseStringableProperty(t, "methodName", "") || o.parseStringableProperty(t, "suggestMethod", ""),
                    t = t.suggester || "widget";
                n.setOnRootRecomItemIdCookie(e), n.setOnRootRecomMethodNameCookie(r), n.setOnRootRecomSuggesterCookie(t), c.recomMouseDown({
                    itemId: e,
                    suggester: t,
                    suggestMethod: r,
                    rrmbid: i.getParentsAttributeValueByEvent("data-retailrocket-markup-block"),
                    onSuccessCallback: s.recomMouseDownCompleted
                })
            }), s.recomMouseDownCompleted.subscribe(function () {
                n.cleanOnRootRecomMethodNameCookie(), n.cleanOnRootRecomSuggesterCookie()
            }), s.recomTrack.subscribe(function (e, t, r, n) {
                c.recomTrack({
                    suggestMethod: e,
                    to: t,
                    recomms: r.join(","),
                    onSuccessCallback: s.recomTrackCompleted,
                    eventParams: n
                })
            }), s.order.subscribe(function (e) {
                var t, r, n = function (e) {
                    for (var t = {}, r = 0; r < e.length; ++r) {
                        var n = e[r], i = (t[n.id.toString()] || {qnt: 0}).qnt;
                        t[n.id.toString()] = {
                            id: n.id,
                            qnt: i + (parseFloat(n.qnt) || 1),
                            price: parseFloat(n.price) || 0
                        }
                    }
                    return t
                }(e.items), i = Object.keys(n).length, o = 0;
                for (t in n) !{}.hasOwnProperty.call(n, t) || (o++, r = n[t], c.order({
                    itemId: r.id,
                    qnt: r.qnt,
                    price: r.price,
                    transaction: e.transaction,
                    email: u,
                    stockId: e.stockId,
                    onSuccessCallback: o === i ? s.orderCompleted : function () {
                    }
                }))
            }), s.setEmail.subscribe(d), s.setCustomer.subscribe(function (e, t, r, n, i, o, a) {
                c.setCustomer({
                    customerId: e,
                    email: t,
                    phone: r,
                    customData: n,
                    softLinks: i,
                    defaultStockId: o,
                    isAgreedToReceiveMarketingMail: !1 !== a,
                    onSuccessCallback: s.setCustomerCompleted
                })
            }), s.subscribeOnItemBackInStock.subscribe(c.backInStock), s.welcomeSequence.subscribe(c.welcomeSequence), s.search.subscribe(function (e) {
                c.search({
                    email: u, searchPhrase: e, onSuccessCallback: function () {
                    }
                })
            }), s.mailRequest.subscribe(c.mailRequest), s.mailRequestFormView.subscribe(function (e) {
                e = e || {};
                c.viewSubscriptionForm({
                    isFirstView: null == n.getSubFormLastViewCookie(),
                    requestType: e.requestType,
                    onSuccessCallback: function () {
                    }
                }), n.setSubFormLastViewCookie()
            }), s.subscribeOnPriceDrop.subscribe(c.priceDrop), s.impressionContentViewed.subscribe(c.impressionContentViewed), s.impressionContentClicked.subscribe(c.impressionContentClicked))
        })), {}
    }), retailrocket.setModule("localLog", ["rrApi", "rrLibrary"], function (e, i) {
        return e.view.subscribe(function (e) {
            i.registerLocalEvent("view", {id: e})
        }), e.groupView.subscribe(function (e) {
            i.registerLocalEvent("groupView", {ids: e})
        }), e.addToBasket.subscribe(function (e) {
            i.registerLocalEvent("addToBasket", {id: e})
        }), e.removeFromBasket.subscribe(function (e) {
            i.registerLocalEvent("removeFromBasket", {id: e})
        }), e.recomAddToCart.subscribe(function (e, t) {
            var t = t || {}, r = t.suggester || "widget",
                t = t.suggestMethod || t.methodName || i.parseStringableProperty(t, "methodName", "");
            i.registerLocalEvent("recomAddToCart", {id: e, sgr: r, met: t})
        }), e.order.subscribe(function (e) {
            for (var t, r = 0; r < e.items.length; ++r) {
                t = e.items[r], n = e.transaction;
                var n = {id: t.id, qnt: t.qnt, transaction: n, price: t.price};
                i.registerLocalEvent("order", n)
            }
        }), e.search.subscribe(function (e) {
            i.registerLocalEvent("search", e)
        }), e.mailRequest.subscribe(function () {
            i.registerLocalEvent("mailrequest", {})
        }), e.mailRequestFormView.subscribe(function (e) {
            i.registerLocalEvent("mailrequestFormView", e)
        }), {}
    }), retailrocket.setModule("lastTenItems", ["cookies", "utils", "rrApi"], function (r, e, n) {
        return !e.isRobot() && r.areCookiesEnabled() && n._initialize.subscribe(function (e) {
            function t(e) {
                var t = [];
                9 < (t = r.getLastAddedBasketCookie() ? r.getLastAddedBasketCookie().split(",") : t).length && t.shift(), parseInt(e, 10) && t.push(e.toString()), r.setOnRootLastAddedBasketCookie(t.join(","))
            }

            e && (n.view.subscribe(function (e) {
                var t = [];
                9 < (t = r.getLastViewedCookie() ? r.getLastViewedCookie().split(",") : t).length && t.shift(), parseInt(e, 10) && t.indexOf(e.toString()) < 0 && t.push(e), r.setOnRootLastViewedCookie(t.join(","))
            }), n.addToBasket.subscribe(t), n.recomAddToCart.subscribe(t), n.order.subscribe(function () {
                r.cleanOnRootLastAddedBasketCookie(), r.cleanOnRootLastViewedCookie()
            }))
        }), {}
    }), retailrocket.setModule("emailAttribution", ["api", "utils", "cookies", "rrApi", "rrLibrary", "tracking"], function (e, r, t, n, i, o) {
        return !r.isRobot() && t.areCookiesEnabled() && n._initialize.subscribe(function () {
            var e,
                t = i.getQueryParametr("rr_mailid") || i.getQueryParametr("MailTrackingId") || i.getQueryParametr("mailtrackingid");
            t && ((e = null != i.getQueryParametr("rr_setemail") ? {} : r.plainCopy(i.getSubscriberDataFromQueryString() || {}, "rrsd_")).rr_mailid = t, e.utm_source = i.getQueryParametr("utm_source"), e.rr_urlType = i.getQueryParametr("rr_urlType"), e.linkid = i.getQueryParametr("rr_linkid"), e.linkpos = i.getQueryParametr("rr_linkpos"), o.emailClick(t, e))
        }), {}
    }), retailrocket.setModule("localEvents", ["utils"], function (r) {
        var e = "retailRocketEvents";

        function n() {
            try {
                return JSON.parse(localStorage.getItem(e)) || []
            } catch (e) {
                return []
            }
        }

        function i(t, r) {
            var e = n();
            return t && (e = e.filter(function (e) {
                return 0 <= t.indexOf(e.ev)
            })), e = r ? e.filter(function (e) {
                return e.ts > r
            }) : e
        }

        return {
            getViewedProductIds: function (e) {
                var e = i(["view", "groupView"], e), t = [];
                return e.forEach(function (e) {
                    t.push("view" === e.ev ? e.dt.id : e.dt.ids[0])
                }), r.uniq(t)
            }, getOrderedProductIds: function (e) {
                return e = i(["order"], e).map(function (e) {
                    return e.dt.id
                }), r.uniq(e)
            }, getBasketProductIds: function (e) {
                var n, e = i(["addToBasket", "recomAddToCart", "removeFromBasket"], e);
                return r.getAllKeys((n = {}, e.forEach(function (e) {
                    var t = e.dt.id, r = parseInt(n[t], 10);
                    isNaN(r) && (r = 0), "addToBasket" === e.ev || "recomAddToCart" === e.ev ? n[t] = r + 1 : --r < 1 ? delete n[t] : n[t] = r
                }), n))
            }, getLastEventTimestamp: function () {
                var e = n();
                return e.length < 1 ? 0 : e[e.length - 1].ts
            }, getLastSearchPhrase: function (e) {
                return 0 < (e = i(["search"], e)).length ? e[e.length - 1].dt : null
            }, getLastMailRequestTimestamp: function () {
                var e = i(["mailrequest"], 0);
                return e.length < 1 ? 0 : e[e.length - 1].ts
            }, useNs: !0
        }
    }), retailrocket.setModule("exitIntendWidget", ["document", "utils", "api", "cookies"], function ($document, utils, api, cookies) {
        var exitIntendElem = null, stillHaveToHide = !1, showEvent = utils.createEventProperty();

        function showWidget(widget) {
            stillHaveToHide = !1, isWidgetOpen(widget) || "false" === widget.getAttribute("active") || cookies.getForceClosedFlagCookie() || (widget.className += " active", showEvent.publish({}), function emitOnShow() {
                eval(widget.getAttribute("data-on-show"))
            }.apply(widget))
        }

        function hideWidget(e) {
            stillHaveToHide = !0, setTimeout(function () {
                stillHaveToHide && (e.className = e.className.replace(/\bactive\b/g, "").trim())
            }, 50)
        }

        function isWidgetOpen(e) {
            return 0 <= e.className.indexOf("active")
        }

        function close(force) {
            force && cookies.setForceClosedFlagCookie(!0), hideWidget(exitIntendElem), !function emitOnHide(force) {
                eval(exitIntendElem.getAttribute("data-on-hide"))
            }.apply(exitIntendElem, [force])
        }

        function initialize() {
            exitIntendElem = utils.getElementsByClassName("retailrocket-notify-widget")[0] || utils.getElementsByClassName("retailrocket-exit-intend")[0];
            var e = utils.getElementsByClassName("retailrocket-popup")[0];
            exitIntendElem && !exitIntendElem.getAttribute("initialized") && (exitIntendElem.setAttribute("initialized", "true"), utils.addEventListener($document.documentElement, "mouseleave", function (e) {
                20 < e.clientY || showWidget(exitIntendElem)
            }), utils.addEventListener(exitIntendElem, "click", function (e) {
                e.stopPropagation(), window.event && window.event.cancelBubble && (window.event.cancelBubble = !0)
            }), utils.addEventListener($document.documentElement, "click", function () {
                close(!1)
            }), utils.addEventListener($document, "keydown", function (e) {
                27 === e.keyCode && close(!1)
            }), utils.addEventListener(exitIntendElem, "mouseleave", function () {
                e || close(!1)
            }), utils.addEventListener(exitIntendElem, "mouseover", function () {
                showWidget(exitIntendElem)
            }), e && utils.addEventListener(exitIntendElem, "click", function (e) {
                e.target === e.currentTarget && close(!1)
            }))
        }

        function isContainsElement(e) {
            return !!exitIntendElem && exitIntendElem.contains(e)
        }

        return initialize(), api.pushTrackingCall(function (e) {
            e.pageView.subscribe(initialize)
        }), {
            initialize: initialize,
            showEvent: showEvent,
            isContainsElement: isContainsElement,
            close: close,
            useNs: !0
        }
    }), retailrocket.setModule("timeOutWidget", ["document", "utils", "api", "cookies"], function ($document, utils, api, cookies) {
        var showClassName = "retailrocket-timeout-widget-show", widget = null, onShow, onHide,
            deactivate = function () {
                cookies.setDeactivatedFlagCookie(!0)
            }, show = function (force) {
                null != widget && (!cookies.getDeactivatedFlagCookie() && "false" !== widget.getAttribute("active") || force) && (deactivate(), widget.className = widget.className.replace(new RegExp("\\b" + showClassName + "\\b", "g"), "") + " " + showClassName, function emitOnShow() {
                    eval(onShow)
                }.apply(widget))
            }, hide = function () {
                null != widget && (widget.className = widget.className.replace(new RegExp("\\b" + showClassName + "\\b", "g"), ""), function emitOnHide() {
                    eval(onHide)
                }.apply(widget))
            };

        function initialize(e) {
            (widget = utils.getElementsByClassName(e || "retailrocket-timeout-widget")[0]) && !widget.getAttribute("retailrocket-timeout-initialized") && (widget.setAttribute("retailrocket-timeout-initialized", "true"), e = parseInt(widget.getAttribute("data-retailrocket-timeout-sec"), 10), onShow = widget.getAttribute("data-retailrocket-timeout-on-show"), onHide = widget.getAttribute("data-retailrocket-timeout-on-hide"), setTimeout(show, 1e3 * e))
        }

        return initialize(), api.pushTrackingCall(function (e) {
            e.pageView.subscribe(function () {
                initialize()
            })
        }), {initialize: initialize, show: show, hide: hide, deactivate: deactivate, useNs: !0}
    }), retailrocket.setModule("widget", ["ns", "recommendation", "items", "utils", "localEvents", "api", "exitIntendWidget", "cookies", "cdnurls"], function (ns, recommendationApi, itemsApi, utils, localEvents, api, exitIntendWidget, cookies, cdnurls) {
        api.pushTrackingCall(function (e) {
            function t() {
                cookies.setOnRootLastEventTimeCookie((new Date).getTime())
            }

            e.mailRequest.subscribe(function () {
                cookies.setOnRootMailRequestLastCallTimeCookie((new Date).getTime()), t()
            }), e.viewCompleted.subscribe(t), e.addToBasketCompleted.subscribe(t), e.recomAddToBasketCompleted.subscribe(t), e.orderCompleted.subscribe(t)
        });
        var defaultHtmlTemplate = '<header class="retailrocket-widgettitle"><%=headerText%><% if (typeof subHeaderText !== "undefined") { %>    <small><%=subHeaderText %></small><% } %></header><ul class="retailrocket-items">    <% for (var i = 0 ; i < numberOfItems; ++i) with(items[i]) { %>        <li class="retailrocket-item" style="width:<%=itemImageWidth%>px;">            <a class="retailrocket-item-info" href="<%=Url%>" onmousedown=\'retailrocket.widget.click(<%=ItemId%>,"<%=suggesterId%>","<%=algorithm%>") \'>                <div class="retailrocket-item-image">                    <img onerror="retailrocket.widget.hideProduct(this)" src="' + cdnurls.cdnimg + '/api/1.0/partner/<%=partnerId%>/item/<%=ItemId%>/picture/?format=png&width=<%=itemImageWidth%>&height=<%=itemImageHeight%>&scale=both" style="width:<%=itemImageWidth%>px;height:<%=itemImageHeight%>px"></div>                <div class="retailrocket-item-brand">                    <%=Vendor %>                </div>                <div class="retailrocket-item-title">                    <%=Name %>                </div>                <div class="retailrocket-item-description">                    <%=Description %>                </div>            </a>            <% if (OldPrice) { %>                <div class="retailrocket-item-old-price"> <span class="retailrocket-item-old-price-value"><%= OldPrice %></span> <span class="retailrocket-item-price-currency"></span> </div>            <% } %>            <div class="retailrocket-item-price"> <span class="retailrocket-item-price-value"><%= Price %></span> <span class="retailrocket-item-price-currency"></span> </div>            <nav class="retailrocket-actions">                <a class="retailrocket-actions-more" href="<%=Url%>" onmousedown=\'retailrocket.widget.click(<%=ItemId%>,"<%=suggesterId%>","<%=algorithm%>")\'></a>                <a class="retailrocket-actions-buy" href="<%=Url%>" onclick=\'return retailrocket._widgetAddToBasket("<%=ItemId%>", "<%=onAddToBasket%>")\'></a>            </nav>        </li>   <% } %></ul>',
            tmpl = function () {
                var n = {};
                return function e(t, r) {
                    t = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "',$1,'").split("<%").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : n[t] = n[t] || e(document.getElementById(t).innerHTML);
                    return r ? t(r) : t
                }
            }();

        function templateRender(e, t, r, n) {
            n = utils.plainCopy(n);
            t = t || [], e.innerHTML = "", n.recommendations = n.items = t, n.numberOfItems = (n.numberOfItems || 0) >= t.length ? t.length : n.numberOfItems, e.setAttribute("data-number-of-rendered-items", n.numberOfItems), e.setAttribute("data-rendered-items-ids", t.slice(0, n.numberOfItems).map(function (e) {
                return e.ItemId
            }).join(",")), n.numberOfItems && (e.innerHTML = tmpl(r, n))
        }

        function mailReqeustOrderRecommendation(e, t, r, n) {
            r.isPostransactionMailTemplateReady ? recommendationApi.forProducts(e, t, "related", {version: 1}, function (e) {
                n(e, "related", r.headerTextOrdered)
            }) : n([], "")
        }

        function mailRequestBasketRecommendation(e, t, r, n, i) {
            r.isBasketMailTemplateReady ? itemsApi.get(e, t, n, function (e) {
                i(e, "basket", r.headerTextBasket)
            }) : i([], "")
        }

        function mailRequestViewRecommendation(e, t, r, n, i) {
            function o(e) {
                for (var t = [], r = 0; r < e.length; ++r) {
                    var n = e[r], i = function (e, t) {
                        if (t) for (var r = 0; r < e.length; ++r) {
                            var n = e[r];
                            if (n.GroupId === t) return n
                        }
                        return null
                    }(t, n.GroupId);
                    i ? i.IsAvailable || (t[e.indexOf(i)] = i) : t.push(n)
                }
                return t
            }

            r.isViewedMailTemplateReady ? itemsApi.get(e, t, n, function (e) {
                var e = o(e), t = e.filter(function (e) {
                    return e.IsAvailable
                });
                !(0 < t.length) && r.isViewedNaMailTemplateReady ? i(e, "viewedna", r.headerTextViewedNa) : i(t, "viewed", r.headerTextViewed)
            }) : i([], "")
        }

        function toUtsTicks(e) {
            return 1e4 * (e.getTime() - 60 * e.getTimezoneOffset()) + 621355968e9
        }

        function getRecomsByServerSideHistory(e, t, r, n, i) {
            var o = toUtsTicks(new Date(cookies.getMailRequestLastCallTimeCookie() || 0)), t = t.filter(function (e) {
                return e.Weight > o
            }), a = t.filter(function (e) {
                return "Order" === e.Algorithm
            }).map(function (e) {
                return e.ItemId
            });
            0 < a.length ? mailReqeustOrderRecommendation(e, a, r, i) : 0 < (a = t.filter(function (e) {
                return "AddToBasket" === e.Algorithm || "RecomAddToBasket" === e.Algorithm
            }).map(function (e) {
                return e.ItemId
            })).length ? mailRequestBasketRecommendation(e, a, r, n, i) : 0 < (a = t.filter(function (e) {
                return "View" === e.Algorithm
            }).map(function (e) {
                return e.ItemId
            })).length && r.isViewedMailTemplateReady ? mailRequestViewRecommendation(e, a, r, n, i) : i([], "")
        }

        function getRecomsByLocalEvents(e, t, r, n) {
            var i = localEvents.getLastMailRequestTimestamp(), o = localEvents.getOrderedProductIds(i);
            0 < o.length ? mailReqeustOrderRecommendation(e, o, t, n) : 0 < (o = localEvents.getBasketProductIds(i)).length ? mailRequestBasketRecommendation(e, o, t, r.stockId, n) : 0 < (o = localEvents.getViewedProductIds(i)).length ? mailRequestViewRecommendation(e, o, t, r.stockId, n) : null != (o = localEvents.getLastSearchPhrase(i)) ? recommendationApi.forSearch(e, o, r, function (e) {
                n(e, "search", t.headerTextSearched)
            }) : n([], "")
        }

        function sendWidgetView(e) {
            var t = e.getAttribute("data-rendered-list-type");
            t && api.pushTrackingCall(function (e) {
                e.mailRequestFormView({requestType: t})
            })
        }

        function buildPreRenderDelegate(context, preRenderStr) {
            return preRenderStr ? function (data, renderFn) {
                !function () {
                    eval(preRenderStr)
                }.apply(context)
            } : function (e, t) {
                t(e)
            }
        }

        function buildPostRenderDelegate(context, postRenderStr) {
            return function () {
                !function () {
                    eval(postRenderStr)
                }.apply(context)
            }
        }

        function algorithmTypeByAlgorithm(e) {
            switch (e) {
                case"alternative":
                case"related":
                case"accessories":
                    return "product";
                case"popular":
                case"latest":
                case"saleByLatest":
                case"saleByPopular":
                    return "category";
                case"search":
                    return "search";
                case"personal":
                    return "personal";
                case"mailrequest":
                case"interacted-items":
                    return "mailrequest";
                case"mailrequest-server-side-history":
                    return "mailrequest-server-side-history";
                case"preview":
                    return "preview";
                default:
                    return null
            }
        }

        function toCamelStyle(e) {
            return e.replace(/-([a-z])/g, function (e, t) {
                return t.toUpperCase()
            })
        }

        function getParamsFromAttribe(e, t) {
            for (var r = e.attributes, n = {}, i = 0; i < r.length; i++) {
                var o = r[i];
                0 === o.nodeName.indexOf(t) && (n[toCamelStyle(o.nodeName.replace(t + "-", ""))] = o.nodeValue)
            }
            return n
        }

        function getAlgorithmParams(e) {
            var t = getParamsFromAttribe(e, "data-algorithm-param");
            return t.version = t.version || e.getAttribute("data-algorithm-ver"), "true" === e.getAttribute("data-exclude-basket-items") && (t.excludedItemIds = localEvents.getBasketProductIds(!1)), t
        }

        function getParentMarkupId(e) {
            for (var t = e, r = "data-retailrocket-markup-block"; t;) {
                if (t.getAttribute && t.getAttribute(r)) return t.getAttribute(r);
                t = t.parentNode
            }
            return null
        }

        function getTemplateParams(e) {
            var t = getParentMarkupId(e), r = getParamsFromAttribe(e, "data-template-param");
            return r.onAddToBasket = e.getAttribute("data-item-add-to-basket-action"), r.suggesterId = r.suggesterId || e.getAttribute("data-suggester-id") || t || "widget", r.numberOfItems = r.numberOfItems || e.getAttribute("data-number-of-items"), r.headerText = r.headerText || e.getAttribute("data-header-text"), r.itemImageWidth = r.itemImageWidth || e.getAttribute("data-image-width") || 170, r.itemImageHeight = r.itemImageHeight || e.getAttribute("data-image-height") || 170, r.headerTextViewed = r.headerTextViewed || e.getAttribute("data-header-text-viewed") || e.getAttribute("data-header-text") || r.headerText, r.headerTextViewedNa = r.headerTextViewedNa || e.getAttribute("data-header-text-viewedna") || e.getAttribute("data-header-text") || r.headerText, r.headerTextBasket = r.headerTextBasket || e.getAttribute("data-header-text-basket") || e.getAttribute("data-header-text") || r.headerText, r.headerTextOrdered = r.headerTextOrdered || e.getAttribute("data-header-text-ordered") || e.getAttribute("data-header-text") || r.headerText, r.headerTextSearched = r.headerTextSearched || e.getAttribute("data-header-text-searched") || e.getAttribute("data-header-text") || r.headerText, r.isViewedNaMailTemplateReady = "true" === r.isViewedNaMailTemplateReady || "true" === e.getAttribute("data-viewedna-mail-template-ready"), r.isViewedMailTemplateReady = !e.getAttribute("data-viewed-mail-template-ready") || "true" === e.getAttribute("data-viewed-mail-template-ready"), r.isBasketMailTemplateReady = !e.getAttribute("data-basket-mail-template-ready") || "true" === e.getAttribute("data-basket-mail-template-ready"), r.isPostransactionMailTemplateReady = !e.getAttribute("data-posttransaction-mail-template-ready") || "true" === e.getAttribute("data-posttransaction-mail-template-ready"), r
        }

        function renderWidget(widget) {
            var partnerId = api.getPartnerId();
            if (partnerId && "undefined" !== partnerId) {
                var lastRenderedEventTs = -1;
                if (!widget.getAttribute("data-widget-applied")) {
                    var algorithmType = widget.getAttribute("data-algorithm-type"),
                        algorithm = widget.getAttribute("data-algorithm");
                    if (algorithmType || algorithm) {
                        var templateContainerId = widget.getAttribute("data-template-container-id"),
                            template = templateContainerId ? document.getElementById(templateContainerId).innerText || document.getElementById(templateContainerId).textContent || document.getElementById(templateContainerId).innerHTML : defaultHtmlTemplate,
                            onPreRender = (exitIntendWidget.isContainsElement(widget) && exitIntendWidget.showEvent.subscribe(function () {
                                sendWidgetView(widget)
                            }), "interacted-items" !== algorithm || widget.getAttribute("data-on-update") || widget.setAttribute("data-on-update", 'Number(this.getAttribute("data-number-of-rendered-items")) ? this.parentElement.style.display = "block": this.parentElement.style.display = "none"'), buildPreRenderDelegate(widget, widget.getAttribute("data-on-pre-render"))),
                            onPostRender = buildPostRenderDelegate(widget, widget.getAttribute("data-on-update") || widget.getAttribute("data-on-post-render")),
                            templateParams = getTemplateParams(widget) || {},
                            algorithmParams = (templateParams.partnerId = partnerId, templateParams.algorithm = algorithm, getAlgorithmParams(widget) || {}),
                            algorithmType = algorithmType || algorithmTypeByAlgorithm(algorithm);
                        switch (algorithmType) {
                            case"product":
                                var productIds = widget.getAttribute("data-algorithm-argument") || widget.getAttribute("data-item-id");
                                if (!productIds) break;
                                recommendationApi.forProducts(partnerId, productIds.split(","), algorithm, algorithmParams, function (e) {
                                    onPreRender(e, function (e) {
                                        templateRender(widget, e, template, templateParams), onPostRender()
                                    })
                                });
                                break;
                            case"category":
                                var categoryPathsAttr = widget.getAttribute("data-algorithm-category-paths"),
                                    categoryArgs = null;
                                categoryPathsAttr && (categoryArgs = eval(categoryPathsAttr)), recommendationApi.forCategories(partnerId, categoryArgs || (widget.getAttribute("data-algorithm-argument") || widget.getAttribute("data-category-id")).split(","), algorithm, algorithmParams, function (e) {
                                    onPreRender(e, function (e) {
                                        templateRender(widget, e, template, templateParams), onPostRender()
                                    })
                                });
                                break;
                            case"search":
                                recommendationApi.forSearch(partnerId, widget.getAttribute("data-algorithm-argument") || widget.getAttribute("data-search-phrase"), algorithmParams, function (e) {
                                    onPreRender(e, function (e) {
                                        templateRender(widget, e, template, templateParams), onPostRender()
                                    })
                                });
                                break;
                            case"personal":
                                if (!api.getSessionId()) return;
                                "compositeForCategory" === algorithm && "categoryPaths" in algorithmParams && (algorithmParams.categoryPaths = eval(algorithmParams.categoryPaths)), recommendationApi.forPerson(partnerId, api.getSessionId(), null, algorithm, algorithmParams, function (e) {
                                    onPreRender(e, function (e) {
                                        templateRender(widget, e, template, templateParams), onPostRender()
                                    })
                                });
                                break;
                            case"mailrequest":
                                var tParam1 = utils.plainCopy(templateParams);
                                setInterval(function () {
                                    var e = localEvents.getLastEventTimestamp();
                                    lastRenderedEventTs !== e && (getRecomsByLocalEvents(partnerId, tParam1, algorithmParams, function (e, t, r) {
                                        tParam1.headerText = r, widget.setAttribute("data-rendered-list-type", t), onPreRender(e, function (e) {
                                            templateRender(widget, e, template, tParam1), onPostRender()
                                        })
                                    }), lastRenderedEventTs = e)
                                }, 1e3);
                                break;
                            case"mailrequest-server-side-history":
                                var tParam2 = utils.plainCopy(templateParams);
                                setInterval(function () {
                                    var e = parseInt(cookies.getLastEventTimeCookie() || 0, 10);
                                    lastRenderedEventTs < e && (recommendationApi.forPerson(partnerId, api.getSessionId(), null, "history", algorithmParams, function (e) {
                                        getRecomsByServerSideHistory(partnerId, e, tParam2, algorithmParams.stockId, function (e, t, r) {
                                            tParam2.headerText = r, widget.setAttribute("data-rendered-list-type", t), onPreRender(e, function (e) {
                                                templateRender(widget, e, template, tParam2), onPostRender()
                                            })
                                        })
                                    }), lastRenderedEventTs = (new Date).getTime())
                                }, 1e3);
                                break;
                            case"visitor-category-interest":
                                if (!api.getSessionId()) return;
                                recommendationApi.forVisitorCategoryInterest(partnerId, api.getSessionId(), algorithm, algorithmParams, function (e) {
                                    onPreRender(e, function (e) {
                                        templateRender(widget, e, template, templateParams), onPostRender()
                                    })
                                });
                                break;
                            case"preview":
                                recommendationApi.forPreview(partnerId, function (e) {
                                    onPreRender(e, function (e) {
                                        templateRender(widget, e, template, templateParams), onPostRender()
                                    })
                                })
                        }
                        widget.setAttribute("data-widget-applied", !0)
                    }
                }
            }
        }

        ns._widgetAddToBasket = function (itemId, callbackName) {
            return eval(callbackName + "('" + itemId + "')")
        };
        var cssHasBeenAdded = !1;

        function renderAll(e) {
            api.getSessionId() || api.pushTrackingCall(function () {
                api.getSessionId() && renderAll(e)
            });
            var t = utils.getElementsByClassName(e || "retailrocket-widget");
            0 < t.length && !cssHasBeenAdded && "5b4da99297a526e5d8224106" !== api.getPartnerId() && (cssHasBeenAdded = !0, utils.registerCss("https://rrstatic.retailrocket.ru/widget/retailrocket.widget.css"));
            for (var r = 0; r < t.length; ++r) renderWidget(t[r])
        }

        function click(t, r, n) {
            api.pushTrackingCall(function (e) {
                e.recomMouseDown(t, {suggester: r, methodName: n})
            })
        }

        function hideProduct(e) {
            e = utils.getContainerByClass(e, "retailrocket-item");
            e && (e.style.display = "none")
        }

        function formatNumber(e, t, r, n) {
            var n = isNaN(n = Math.abs(n)) ? 2 : n, t = null == t ? "." : t, r = null == r ? "," : r,
                i = e < 0 ? "-" : "", o = parseInt(e = Math.abs(+e || 0).toFixed(n), 10) + "",
                a = 3 < (a = o.length) ? a % 3 : 0;
            return i + (a ? o.substr(0, a) + r : "") + o.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + r) + (n ? t + Math.abs(e - o).toFixed(n).slice(2) : "")
        }

        return api.getPartnerId() && api.getSessionId() && "527a338aec92e6106859030b" !== api.getPartnerId() && renderAll(), api.pushTrackingCall(function (e) {
            e.pageView.subscribe(function () {
                renderAll()
            })
        }), {hideProduct: hideProduct, formatNumber: formatNumber, render: renderAll, click: click, useNs: !0}
    }), retailrocket.setModule("deactivateIfAgreedToReceiveMarketingMail", ["visitor", "utils", "api", "cookies"], function (r, e, n, i) {
        function o() {
            return e.getElementsByClassName("deactivate-if-visitor-agreed-to-receive-marketing-mail")
        }

        function a(e) {
            for (var t = o(), r = 0; r < t.length; ++r) t[r].setAttribute("active", e)
        }

        function t() {
            var e = n.getSessionId(), t = o();
            e && 0 !== t.length && ("true" === i.getIsVisitorAgreedToReceiveMarketingMailCookie() ? a(!1) : r.get(n.getPartnerId(), e, function (e) {
                var t = "true" === (e.HasEmail || "").toString(),
                    e = "true" === (e.IsAgreedToReceiveMarketingMail || "").toString();
                i.setIsVisitorAgreedToReceiveMarketingMailCookie(e && t), a(!t || !e)
            }))
        }

        return a(!1), n.getPartnerId() && n.getSessionId() && t(), n.pushTrackingCall(function (e) {
            e.pageView.subscribe(t)
        }), {initialize: t, useNs: !0}
    }), retailrocket.setModule("mailRequestForm", ["utils", "document", "api", "exitIntendWidget"], function (utils, $document, api, exitIntendWidget) {
        var productListElmIdAttributeName = "data-product-to-send-widget-id",
            emailInputElmIdAttributeName = "data-email-input-id",
            triggerEmailAgreeCheckboxIdAttributeName = "data-subscribe-on-trigger-email-checkbox-id",
            sendBtnElmIdAttributeName = "data-send-btn-id", dataOnSubscribeJsAttributeName = "data-on-subscribe";

        function getCustomEmailData(e) {
            for (var t = e.getElementsByClassName("data-custom-email-attribute"), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i.name] = i.value
            }
            return r
        }

        function getFormModel(e) {
            var t = {email: null, isAgreeToGetTriggerEmail: !1, listType: null, itemsId: [], onSubscribeJs: ""},
                r = $document.getElementById(e.getAttribute(emailInputElmIdAttributeName)),
                r = (t.email = (r.value || "").trim(), $document.getElementById(e.getAttribute(triggerEmailAgreeCheckboxIdAttributeName))),
                r = (r && (t.isAgreeToGetTriggerEmail = r.checked), $document.getElementById(e.getAttribute(productListElmIdAttributeName)));
            return r && r.getAttribute("data-rendered-items-ids") && (t.itemsId = r.getAttribute("data-rendered-items-ids").split(","), t.listType = r.getAttribute("data-rendered-list-type")), t.customData = getCustomEmailData(e), t.onSubscribeJs = e.getAttribute(dataOnSubscribeJsAttributeName), t
        }

        function sendMailRequest(mailRequestFormElm) {
            var model = getFormModel(mailRequestFormElm);
            utils.isValidEmail(model.email) && (api.pushTrackingCall(function (e) {
                e.mailRequest(model.email, api.getSessionId(), model.listType, model.itemsId, model.isAgreeToGetTriggerEmail, model.customData)
            }), function emitOnSunbscribe() {
                eval(model.onSubscribeJs)
            }.apply(mailRequestFormElm), exitIntendWidget.isContainsElement(mailRequestFormElm) && exitIntendWidget.close(model.isAgreeToGetTriggerEmail))
        }

        function initialize() {
            for (var e = utils.getElementsByClassName("retailrocket-mailrequest-form"), t = 0; t < e.length; ++t) {
                var r = e[t];
                if (!r || r.getAttribute("initialized")) return;
                r.setAttribute("initialized", "true");
                var n = $document.getElementById(r.getAttribute(emailInputElmIdAttributeName)),
                    i = $document.getElementById(r.getAttribute(sendBtnElmIdAttributeName));
                utils.addEventListener(i, "click", function (e) {
                    return function () {
                        sendMailRequest(e)
                    }
                }(r)), utils.addEventListener(n, "keydown", function (t) {
                    return function (e) {
                        13 === e.keyCode && sendMailRequest(t)
                    }
                }(r))
            }
        }

        return initialize(), api.pushTrackingCall(function (e) {
            e.pageView.subscribe(initialize)
        }), {initialize: initialize, useNs: !0}
    }), retailrocket.setModule("timing", ["cors", "api", "utils", "cookies"], function (s, e, c, t) {
        var u, d, l;
        return t.areCookiesEnabled() && e.getPartnerVisitorId() % 10 == 0 && (u = "https://tracking.retailrocket.ru/1.0/timing/", d = "?partnerId=" + e.getPartnerId() + "&session=" + e.getSessionId(), l = {}, window.performance && c.getPerformanceEntries() && e.pushTrackingCall(function (e) {
            e.pageView.subscribe(function () {
                setTimeout(m, 1e3)
            })
        })), {};

        function m() {
            for (var e, t, r = [], n = c.getPerformanceEntries(), i = 0; i < n.length; ++i) {
                var o = n[i], a = o.name ? c.getUrlWithoutQuery(o.name.toLowerCase()) : null,
                    o = Math.round(o.duration);
                a && (-1 < a.indexOf(".retailrocket.ru/") || -1 < a.indexOf(".retailrocket.ru/")) && a.indexOf(u) < 0 && 0 < o && !(a in l) && r.push({
                    url: a,
                    ms: o
                })
            }
            0 < r.length ? (e = c.prototypeSafeJsonStringify(r), t = function () {
                for (var e = 0; e < r.length; ++e) l[r[e].url] = !0;
                setTimeout(m, 1e3)
            }, s.make(u + d, "POST", [{name: "Content-type", value: "application/json"}], e, !1, t, function () {
            })) : setTimeout(m, 1e3)
        }
    }), retailrocket.setModule("elementViewedObserver", ["window"], function (e) {
        return {
            observe: function (r) {
                new e.IntersectionObserver(function (e, t) {
                    (e = e[0]).isIntersecting && (r.callback(), e = e.target, t.unobserve(e))
                }, {threshold: 0}).observe(r.htmlElement)
            }, isObserverSupported: function () {
                return typeof e.IntersectionObserver == typeof e.Function
            }
        }
    }), retailrocket.setModule("markup", ["utils", "api", "dev", "cors", "document", "tracking", "cdnurls", "elementViewedObserver"], function (d, l, i, o, m, p, a, g) {
        var s = "data-retailrocket-markup-block";

        function f(e, t, r) {
            t = {
                name: r.name, attributes: function (e) {
                    for (var t = {}, r = 0; r < e.attributes.length; r++) {
                        var n = e.attributes[r];
                        t[n.name] = n.value
                    }
                    return t
                }(t), message: r.message, stack: r.stack
            };
            o.make("https://tracking.retailrocket.ru/2.0/partner/" + e.PartnerId + "/markupblocks/" + e.Id + "/trackerror/?blockChangingDate=" + e.LastChangedAt, "POST", [{
                name: "Content-type",
                value: "application/json"
            }], d.prototypeSafeJsonStringify(t), !1, function () {
            }, function () {
            })
        }

        var c = {};

        function u(n, i) {
            if (i && i.Markup) {
                for (var e, t = i.Markup, r = n.attributes, o = 0, a = r.length; o < a; o++) e = r[o], t = t.replace(new RegExp("{{" + e.nodeName + "}}", "gi"), d.htmlEncode(e.nodeValue).replace(new RegExp('"', "g"), "&quot;").replace(new RegExp("'", "g"), "&#39;"));
                n.innerHTML = t, [].forEach.call(n.querySelectorAll("script"), function (e) {
                    if (e) if (e.src) t = e.src, (r = m.createElement("script")).type = "text/javascript", r.src = t, r.async = !0, m.getElementsByTagName("script")[0].parentElement.appendChild(r); else if (!e.type || "text/javascript" === e.type) try {
                        eval.apply(window, [e.text])
                    } catch (e) {
                        throw f(i, n, e), e
                    }
                    var t, r
                });
                var s, c, u = g.isObserverSupported();
                s = u, p.markupRendered({
                    partnerId: i.PartnerId,
                    blockId: i.Id,
                    segmentId: i.SegmentId,
                    pvid: l.getPartnerVisitorId(),
                    session: l.getSessionId(),
                    isMarkupViewedSupported: s
                }), !0 === u && (s = n, u = i.Id, c = i.SegmentId, u = d.bind(p.markupViewed, {}, {
                    blockId: u,
                    segmentId: c
                }), g.observe({htmlElement: s, callback: u}))
            }
        }

        function e(t) {
            var e, r, n;
            t.getAttribute("initialized") || (t.setAttribute("initialized", "true"), e = i.developmentMode(), r = d.queryStringToObj(d.getQueryString()), n = {
                blockId: t.getAttribute(s),
                pvid: l.getPartnerVisitorId(),
                partnerId: l.getPartnerId(),
                isDebug: e,
                segmentId: r.rr_segmentId
            }, e && (n.rnd = Date.now()), c[n.blockId] || (c[n.blockId] = {
                data: null,
                callbacks: []
            }, o.make(a.cdn + "/api/markupblocks/?" + d.objToQueryString(n), "get", {}, {}, !1, function (e) {
                var t = JSON.parse(e);
                c[n.blockId].data = t, c[n.blockId].callbacks.forEach(function (e) {
                    e(t)
                })
            })), null === c[n.blockId].data ? c[n.blockId].callbacks.push(function (e) {
                u(t, e)
            }) : u(t, c[n.blockId].data))
        }

        function t() {
            d.$forall("div[" + s + "]", e)
        }

        return t(), d.repeatUntilDOMLoaded(t, t, 100), {render: t, renderBlock: u, useNs: !0}
    }), retailrocket.setModule("partnerSettingsClient", ["cors"], function (n) {
        return {
            getPartnerSettings: function (e, t, r) {
                return n.make("https://cdn.retailrocket.ru/api/1.0/PushPartnerSettings/" + e + "?format=json", "get", [], null, !1, function (e) {
                    e = JSON.parse(e) || {}, e = {
                        publicKey: e.PublicKey,
                        emptyServiceWorkerUrl: e.EmptyServiceWorkerUrl,
                        webPushServiceWorkerUrl: e.WebPushServiceWorkerUrl
                    };
                    (t || function () {
                    })(e)
                }, r)
            }, useNs: !0
        }
    }), retailrocket.setModule("webpush", ["rrApi", "window", "partnerSettingsClient", "tracking", "cookies", "utils", "api"], function (e, n, i, r, o, a, s) {
        var c = 86400, u = 300, d = n.Promise;

        function l() {
            return new d(function (t, r) {
                i.getPartnerSettings(s.getPartnerId(), function (e) {
                    t(e)
                }, function (e) {
                    r(e)
                })
            })
        }

        function m(e) {
            return null == e ? d.reject("no partner settings") : null === e.publicKey || void 0 === e.publicKey ? d.reject("no public key found") : e.emptyServiceWorkerUrl === e.webPushServiceWorkerUrl ? d.reject("service workers urls must be different") : e
        }

        function p(e) {
            var t = a.htmlEncode(e.toJSON().endpoint);
            return r.webPushSubscription({
                subscriptionId: t, subscription: e, onSuccessCallback: function () {
                    o.setOnRootWebPushSubscriptionSaved(c)
                }
            }), d.resolve()
        }

        function g(e) {
            return n.navigator.serviceWorker.register(e.webPushServiceWorkerUrl)
        }

        function f(t) {
            return g(t).then(function (e) {
                return o.getWebPushSwUpdated() ? {
                    partnerSettings: t,
                    registration: e
                } : n.navigator.serviceWorker.register(t.emptyServiceWorkerUrl).then(function () {
                    return g(t)
                }).then(function (e) {
                    return o.setOnRootWebPushSwUpdated(u), {partnerSettings: t, registration: e}
                })
            })
        }

        function k(t, r) {
            return n.Notification.requestPermission().then(function (e) {
                return "denied" === e ? d.reject("Push Notification is denied") : t.pushManager.subscribe({
                    userVisibleOnly: !0,
                    applicationServerKey: r
                }).then(p)
            })
        }

        return e._initialize.subscribe(function () {
            return null != d && (e = "serviceWorker" in n.navigator, t = "PushManager" in n, (e ? t ? d.resolve() : d.reject("push is not supported") : d.reject("service worker not supported")).then(l).then(m).then(function (e) {
                return f(e).then(function (e) {
                    var n = e.registration, i = e.partnerSettings;
                    return n.pushManager.getSubscription().then(function (e) {
                        var t = null !== e, r = a.base64StringToUint8Array(i.publicKey);
                        return !0 == t ? function (e, t) {
                            if (e.byteLength !== t.byteLength) return !1;
                            for (var r = a.getUint8Array(e), n = a.getUint8Array(t), i = 0; i !== e.byteLength; i++) if (r[i] !== n[i]) return !1;
                            return !0
                        }(e.options.applicationServerKey, a.base64StringToUint8Array(i.publicKey)) ? o.getWebPushSubscriptionSaved() ? d.resolve() : p(e) : e.unsubscribe().then(function (e) {
                            return !0 === e ? d.resolve() : d.reject("Could not unsubscribe")
                        }).then(function () {
                            return k(n, r)
                        }) : k(n, r)
                    })
                })
            }).catch(function (e) {
                return e
            }));
            var e, t
        }), {}
    }), retailrocket.setModule("emailResubscription", ["api", "cors", "json"], function (r, n, i) {
        return {
            startResubscription: function (e) {
                e = e || {}, n.make("https://tracking.retailrocket.ru/2.0/partner/" + r.getPartnerId() + "/emailResubscription/visitors/" + r.getSessionId() + "/resubscription", "post", [], null, !1, e.onSuccessCallback || function () {
                })
            }, getVisitorState: function (e) {
                var t = e || {};
                n.make("https://api.retailrocket.ru/api/2.0/partner/" + r.getPartnerId() + "/emailResubscription/visitors/" + r.getSessionId(), "get", [], null, !1, function (e) {
                    t.onSuccessCallback && t.onSuccessCallback({data: i.parse({jsonString: e})})
                })
            }, useNs: !0
        }
    }), retailrocket.setModule("impression", ["cors", "utils"], function (e, t) {
        function r(e) {
            return "https://visitors-sp.retailrocket.ru/v1/partners/" + e
        }

        function n(r) {
            e.make(r.url, "GET", [{name: "Content-type", value: "application/json"}], {}, !1, function (e) {
                if (0 === e.length) return r.callbackContents.empty(), !1;
                var t = JSON.parse(e);
                switch (t.contentType) {
                    case"string":
                        r.callbackContents.string(t.content);
                        break;
                    case"productIds":
                        r.callbackContents.productIds(t.content);
                        break;
                    case"banners":
                        r.callbackContents.banners(t.content);
                        break;
                    case"sharedBanners":
                        r.callbackContents.sharedBanners(t.content)
                }
                return !0
            })
        }

        function i(e) {
            var t = [];
            return void 0 !== e.string && t.push("string"), void 0 !== e.banners && t.push("banners"), void 0 !== e.sharedBanners && t.push("sharedBanners"), void 0 !== e.productIds && t.push("productIds"), t.join(",")
        }

        return {
            forAnyPlacements: function (e) {
                n({
                    url: r(e.partnerId) + "/anyPlacements/" + e.placementId + "/impressions?" + t.objToQueryString({
                        session: e.session,
                        acceptContent: i(e.callbackContents),
                        apiKey: e.apiKey
                    }), callbackContents: e.callbackContents
                })
            }, forProductPlacement: function (e) {
                n({
                    url: r(e.partnerId) + "/productPlacements/" + e.placementId + "/impressions?" + t.objToQueryString({
                        session: e.session,
                        productId: e.productId,
                        stockId: e.stockId,
                        acceptContent: i(e.callbackContents),
                        apiKey: e.apiKey
                    }), callbackContents: e.callbackContents
                })
            }, forProductGroupPlacement: function (e) {
                n({
                    url: r(e.partnerId) + "/productGroupPlacements/" + e.placementId + "/impressions?" + t.objToQueryString({
                        session: e.session,
                        productIds: e.productIds,
                        stockId: e.stockId,
                        acceptContent: i(e.callbackContents),
                        apiKey: e.apiKey
                    }), callbackContents: e.callbackContents
                })
            }, forCategoryPlacement: function (e) {
                n({
                    url: r(e.partnerId) + "/categoryPlacements/" + e.placementId + "/impressions?" + t.objToQueryString({
                        session: e.session,
                        categoryId: e.categoryId,
                        acceptContent: i(e.callbackContents),
                        apiKey: e.apiKey
                    }), callbackContents: e.callbackContents
                })
            }, forSearchPlacement: function (e) {
                n({
                    url: r(e.partnerId) + "/searchPlacements/" + e.placementId + "/impressions?" + t.objToQueryString({
                        session: e.session,
                        searchQuery: e.searchQuery,
                        acceptContent: i(e.callbackContents),
                        apiKey: e.apiKey
                    }), callbackContents: e.callbackContents
                })
            }, useNs: !0
        }
    }), retailrocket.setModule("initPartnerSessionT", ["api", "cookies", "utils", "rrApi", "cors"], function (e, r, t, n, i) {
        var o;
        return r.areCookiesEnabled() && !t.isRobot() && ((o = r.getSessionIdCookie()) && n._initialize({sessionId: o}), t = t.objToQueryString({
            session: o,
            _nocache: (new Date).getTime() + "" + Math.random()
        }), i.make("https://tracking.retailrocket.ru/1.0/event/initialize/" + e.getPartnerId() + "?" + t, "get", [], {}, !0, function (e) {
            var e = JSON.parse(e), t = e.sessionId || e.RrSessionId;
            r.setOnRootSessionIdCookie(t), o || n._initialize(e)
        })), {}
    }, !0), retailrocket.setModule("pageViewOnLoad", ["document", "window", "rrApi"], function (r, n, e) {
        function t() {
            try {
                s.doScroll("left")
            } catch (e) {
                return void setTimeout(t, 50)
            }
            l("poll")
        }

        var i = function () {
                rrApiOnReady.push(e.pageView)
            }, o = !1, a = !0, s = r.documentElement, c = r.addEventListener ? "addEventListener" : "attachEvent",
            u = r.addEventListener ? "removeEventListener" : "detachEvent", d = r.addEventListener ? "" : "on",
            l = function (e) {
                var t = e.type || "";
                "readystatechange" === t && "complete" !== r.readyState || (("load" === t ? n : r)[u](d + t, l, !1), o || (o = !0, setTimeout(function () {
                    i(n, t || e)
                })))
            };
        if ("complete" === r.readyState) i(n, "lazy"); else {
            if (r.createEventObject && s.doScroll) {
                try {
                    a = !n.frameElement
                } catch (e) {
                }
                a && t()
            }
            r[c](d + "DOMContentLoaded", l, !1), r[c](d + "readystatechange", l, !1), n[c](d + "load", l, !1)
        }
        return {}
    })
} catch (exception) {
    var errorModel = {
        name: (exception.name || "").substring(0, 100),
        message: (exception.message || "").substring(0, 500),
        stack: (exception.stack || "").substring(0, 4e3),
        partnerId: window.rrPartnerId
    }, request;
    XMLHttpRequest && (request = new XMLHttpRequest, request.open("POST", "https://tracking.retailrocket.ru/javascripterrors", !0), request.setRequestHeader("Content-type", "application/json"), request.send(JSON.stringify(errorModel)))
}