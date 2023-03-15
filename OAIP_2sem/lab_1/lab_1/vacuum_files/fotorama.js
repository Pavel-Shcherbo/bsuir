/*! Fotorama 2.0.2 (v1320) | http://fotoramajs.com/license.txt */
!function(da){function e(t){for(var a={},e=0;e<r.length;e++){var o=r[e][0],i=r[e][1];if(t){var n=t.attr("data-"+o);n&&("number"==i?(n=Number(n),isNaN(n)||(a[o]=n)):"boolean"==i?"true"==n?a[o]=!0:"false"==n&&(a[o]=!1):"string"==i?a[o]=n:"boolean-number"==i&&("true"==n?a[o]=!0:"false"==n?a[o]=!1:(n=Number(n),isNaN(n)||(a[o]=n))))}else a[o]=r[e][2]}return a}function o(t,a){for(var e={},o=0;o<s.length;o++)e[s[o]+t]=a;return e}function ca(t,a){if(Ca)return o("transform",a?"translate(0,"+t+"px)":"translate("+t+"px,0)");var e={};return e[a?"top":"left"]=t,e}function ha(){return!1}function ma(t){return o("transition-duration",t+"ms")}function fa(t){t.mousemove(function(t){t.preventDefault()}).mousedown(function(t){t.preventDefault()})}function ba(){document.selection&&document.selection.empty?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges()}function n(g,M){function n(t,a,e){if(t&&(st=lt.no.test(t)||lt.px.test(t)?(I=p=Number((""+t).replace("px","")),z=!1):!lt["%"].test(t)||(nt=Number((""+t).replace("%",""))/100,z=!M().flexible,p||(p=g.width()*(F?1:nt)-(M().vertical&&jt?jt.width():0)),!1)),a&&(rt=!lt.no.test(a)&&!lt.px.test(a)||(R=N=Number((""+a).replace("px","")),!1)),"auto"==t||!t||"auto"==a||!a){e=Number(e);var o=Kt.filter(function(){return"error"!=da(this).data("state")}).filter(":first").data("srcKey");!isNaN(e)&&e||(e=null,o&&(e=b[o].imgRatio)),e&&(D=B=q=e,o&&("auto"!=t&&t||(I=p=b[o].imgWidth,st=!0),"auto"!=a&&a||(R=N=b[o].imgHeight,rt=!0)),rt&&e&&!st&&(R=N=Math.round(p/e)),!rt&&e&&st&&(I=p=Math.round(N*e)))}}function s(t,a,e){!function(t){var a;(M().fitToWindowHeight||F)&&(a=Aa.height()),q&&!t||(D=B=q=p/N),M().thumbs&&!Lt&&(Lt=M().vertical?jt.width():jt.height()),q=L?D:B,g.css({overflow:z||F?"hidden":""}),z||F?p=g.width()*(F?1:nt)-(M().vertical&&Lt?Lt:0):I&&(p=I),F?(N=a-(!M().vertical&&Lt?Lt:0),q=p/N):rt?N=Math.round(p/q):q=p/(N=R),M().fitToWindowHeight&&!F&&N>a-20-(!M().vertical&&Lt?Lt:0)&&(N=a-20-(!M().vertical&&Lt?Lt:0),q=p/N)}(t),a||(a=0);var o=p!=O||N!=W||q!=K;if(t||o){c=M().vertical?(A=N,p):(A=p,N),Ct.add(Kt).animate({width:p,height:N},a),M().thumbs&&M().vertical&&(M().thumbsOnRight?jt.animate({left:p},a):Ct.animate({left:Lt},a)),M().touchStyle?(ct=(A+M().margin)*S-M().margin,ut=c,(t={})[et]=ct,t[ot]=ut,Tt.animate(t,a).data(t).data({minPos:-(ct-A),maxPos:0})):Tt.animate({width:p,height:N},a),M().thumbs&&(M().vertical?jt.animate({height:N},a):jt.animate({width:p},a),M().thumbsPreview&&o&&r(a,e),jt.css({visibility:"visible"})),Ta&&!M().vertical&&(M().arrows&&St.animate({top:N/2},a),(t={})[Z]=c/2,Mt.animate(t,a)),"loading"!=P&&"error"!=P||((t={})[V]=(M().touchStyle?Ot:0)*(A+M().margin)+A/2,Mt.animate(t,a)),Dt&&M().touchStyle&&(e=-Ot*(A+M().margin),C(Tt,e,0)),H=!0;var i=0;da(ia).each(function(){clearTimeout(this)}),ia=[],f(Dt,Ot,a),Kt.each(function(t){if(t!=Ot){var a=da(this);a.data("img")&&a.data("img").css({visibility:"hidden"});var e=setTimeout(function(){f(a,t)},50*i+50);ia.push(e),i++}})}O=p,W=N,K=q}function v(){var t=Dt.data("srcKey");t&&b[t].imgWidth&&b[t].imgHeight&&b[t].imgRatio&&(I=p=b[t].imgWidth,R=N=b[t].imgHeight,B=q=b[t].imgRatio,s(!1,M().transitionDuration))}function _(t,a,e){function o(){M().touchStyle||(a=0),Mt.css(V,a*(A+M().margin)+A/2),yt=setTimeout(function(){Mt.stop().show().fadeTo(0,1)},100)}clearTimeout(yt),"loading"==t?(o(),g.addClass(Sa+"_loading").removeClass(Sa+"_error"),Ia||Mt.html("<span>&middot;&middot;&middot;</span>").css({backgroundImage:"none"})):"error"==t?(o(),g.addClass(Sa+"_error").removeClass(Sa+"_loading"),Ia||Mt.html("<span>?</span>").css({backgroundImage:"none"})):"loaded"==t&&(g.removeClass(Sa+"_loading "+Sa+"_error"),Mt.stop().fadeTo(Math.min(xa,e),0,function(){Mt.hide()})),P=t}function w(){return{index:Ot,src:b[Ot],img:Dt[0],thumb:M().thumbs?Et[0]:null,caption:Wt}}function C(t,a,e,o){var i=isNaN(a)?0:Math.round(a);clearTimeout(t.data("backAnimate")),o?(i=o,t.data({backAnimate:setTimeout(function(){C(t,a,Math.max(xa,e/2))},e)})):M().onSlideStop&&setTimeout(function(){M().onSlideStop.call(g[0],w())},e),e&&(clearTimeout(X),Q=!0),Ca?(t.css(ma(e)),setTimeout(function(){t.css(ca(i,M().vertical))},1)):t.stop().animate(ca(i,M().vertical),e,Pa),X=setTimeout(function(){Q=!1,M().flexible&&t==Tt&&v()},e)}function T(t,a,e){if(Xt){(!e||Xt<A)&&(pt=!1);var o=Et.position()[V];if(!(e=Et.data()[et])&&Jt)Vt.hide(),Jt=!1;else{if(Jt||(Vt.show(),Jt=!0),A<Xt){var i,n=o+e/2,r=A/2,s=Zt.index(Et),l=s-Ft;if(null==Yt&&(Yt=Qt.position()[V]),_t&&a&&a>Math.max(36,2*M().thumbMargin)&&a<A-Math.max(36,2*M().thumbMargin)&&(0<l&&.75*r<a||l<0&&a<1.25*r))(i=0<l?s+1:s-1)<0?i=0:S-1<i&&(i=S-1),s!=i&&(n=(n=Zt.eq(i)).position()[V]+n.data()[et]/2,r=a);a=-(Xt-A),a=M().has_eurolabel?M().vertical&&M().has_video?a-160:a-80:M().vertical&&M().has_video?a-80:a,n=Math.round(-(n-r)+M().thumbMargin),(0<l&&Yt<n||l<0&&n<Yt)&&(n=o+Yt<M().thumbMargin?-(o-M().thumbMargin):A<o+Yt+e?-(2*o-A+e+M().thumbMargin):Yt),n<=a?n=a:n>=M().thumbMargin&&(n=M().thumbMargin),Qt.data({minPos:a}),d(n),bt||Qt.data({maxPos:M().thumbMargin})}else n=M().vertical?0:A/2-Xt/2,Qt.data({minPos:n}),bt||Qt.data({maxPos:n});pt||bt?gt=!0:(C(Qt,n,t),gt&&(pt=!0),Yt=n);var u=e-(Ma?0:2*M().thumbBorderWidth);Ca?(Vt.css(ma(t)),setTimeout(function(){Vt.css(ca(o,M().vertical)).css(et,u)},1)):M().vertical?Vt.stop().animate({top:o,height:u},t,Pa):Vt.stop().animate({left:o,width:u},t,Pa)}}}function d(t){M().shadows&&A<Xt&&(jt.addClass(Sa+"__thumbs_shadow"),t<=Qt.data("minPos")?jt.removeClass(Sa+"__thumbs_shadow_no-left").addClass(Sa+"__thumbs_shadow_no-right"):t>=M().thumbMargin?jt.removeClass(Sa+"__thumbs_shadow_no-right").addClass(Sa+"__thumbs_shadow_no-left"):jt.removeClass(Sa+"__thumbs_shadow_no-left "+Sa+"__thumbs_shadow_no-right"))}function r(t,a){(vt||bt||mt||Q)&&!a||(F||d(),T(t||0,!1,!a))}function f(t,a,e){var o=t.data("img"),i=t.data("detached");e=e||0;if(o&&!i){var n=t.data("srcKey"),r=(i=b[n].imgWidth,b[n].imgHeight),s=b[n].imgRatio,l=n=0;if(M().touchStyle&&t.css(V,a*(A+M().margin)),i!=p||r!=N||M().alwaysPadding||F){var u=0;(s/q<.99||1.01<s/q||M().alwaysPadding||F)&&(u=2*M().minPadding),q<=s?M().cropToFit?(r=N,i=Math.round(r*s)):(i=Math.round(p-u)<i||M().zoomToFit||F&&b[a].imgRel?Math.round(p-u):i,r=Math.round(i/s),N-r<4&&(r+=N-r)):M().cropToFit?(i=p,r=Math.round(i/s)):(r=Math.round(N-u)<r||M().zoomToFit||F&&b[a].imgRel?Math.round(N-u):r,i=Math.round(r*s),p-i<4&&(i+=p-i))}i&&r&&(s={width:i,height:r},r!=N&&(n=Math.round((N-r)/2)),i!=p&&(l=Math.round((p-i)/2)),M().vertical?s.top=Math.round(3*n/4):s.top=n,s.left=l,o.animate(s,e)),o.css({visibility:"visible"}),e=t.data("img"),o=t.data("srcKey"),a=b[a].imgRel,e&&a&&a!=o&&!wa&&(i=e.data("full"),t=t.data("detached"),(F&&!i||!F&&i)&&!t)&&(e[0].src=F?a:o,e.data({full:F}))}else o&&i&&t.data({needToResize:!0})}function a(r,s,l,u){Kt.eq(r);var d=new Image,c=da(d),h=[],m=0,t=b[r].imgHref,a=b[r].imgSrc,e=b[r].thumbSrc;"img"==u?(t&&(h.push(t),h.push(t+"?"+o)),a&&(h.push(a),h.push(a+"?"+o)),e&&(h.push(e),h.push(e+"?"+o))):(e&&(h.push(e),h.push(e+"?"+o)),a&&(h.push(a),h.push(a+"?"+o)),t&&(h.push(t),h.push(t+"?"+o))),function a(e){function t(){c.css({visibility:"hidden"}),d.src=e,0==m&&(c.appendTo(s),"thumb"==u&&(Xt+=Ht+M().thumbMargin+6,Qt.css(et,Xt).data(et,Xt),s.css(et,Ht).data(et,Ht)))}function o(){it[e]="loaded",c.unbind("error load").error(function(){c[0].src=e,b[r].imgRel=!1,f(Kt.eq(r),r),c.unbind("error")}),s.trigger("load."+Sa).data({state:"loaded"}),setTimeout(function(){b[e]||(b[e]=[],b[e].imgWidth=c.width(),b[e].imgHeight=c.height(),b[e].imgRatio=b[e].imgWidth/b[e].imgHeight),l(d,b[e].imgWidth,b[e].imgHeight,b[e].imgRatio,e,r)},100),"thumb"!=u||++wt==S&&(_t=!0)}function i(t){it[e]="error",c.unbind("error load"),m<h.length&&t?a(h[++m]):(s.trigger("error."+Sa).data({state:"error"}),"thumb"!=u||++wt==S&&(_t=!0))}if(it[e]){var n=function(){"error"==it[e]?i(!1):"loaded"==it[e]?o():setTimeout(n,100)};t(),n()}else it[e]="loading",c.unbind("error load").error(function(){i(!0)}).load(o),t()}(h[m])}function y(n,r){if(n.data("wraped"))M().detachSiblings&&n.data("detached")&&(n.data({detached:!1}).appendTo(Tt),n.data("needToResize")&&(f(n,r),n.data({needToResize:!1})));else if(Tt.append(n.data({state:"loading"})),r==Ot||M().touchStyle||n.stop().fadeTo(0,0),n.data({wraped:!0,detached:!1}),a(r,n,function(t,a,e,o,i){(t=da(t)).addClass(Sa+"__img"),n.data({img:t,srcKey:i}),i=!1,(p&&N||H)&&(E||r!=M().startImg)||(p=a,M().width=a,rt?(N=e,M().height=e):st&&(p=Math.round(N*(a/e)),M().width=p),i=!0,E=r==M().startImg),i||M().flexible?s(!0):f(n,r),n.css({visibility:"visible"})},"img"),l&&x[r].html&&x[r].html.length||M().html&&M().html[r]&&M().html[r].length){var t=x[r].html||M().html[r];n.append(t)}}function k(t){t||(t=0),clearTimeout(J),J=setTimeout(function(){$&&g.trigger("showimg",[Ot+1,!1,!0])},Math.max(M().autoplay,2*t))}function h(o,t,a,n,r,e,s){function l(){M().caption&&((Wt=x[m].caption?x[m].caption:x[m].title)?ea.html(Wt).show():ea.html("").hide())}function u(){!M().shadows&&M().touchStyle||(d.removeClass(Sa+"__frame_active"),o.addClass(Sa+"__frame_active"))}var d,c,h,m=Kt.index(o);if(Kt.each(function(){da(this).unbind("load."+Sa+" error."+Sa)}),"number"!=typeof r&&(r=n?0:M().transitionDuration),!n&&t&&t.altKey&&(r*=10),"loading"!=(t=o.data("state"))&&t?"error"==t?_("error",m,r):t!=P&&_("loaded",m,0):(_("loading",m,r),o.one("load."+Sa,function(){_("loaded",m,r),l()}),o.one("error."+Sa,function(){_("error",m,r),l()})),l(),Dt?(d=Dt,h=Ot,M().thumbs&&(c=Et)):(d=Kt.not(o),M().thumbs&&(c=Zt.not(Zt.eq(m)))),M().thumbs&&(Et=Zt.eq(m),h&&(Ft=h),c.removeClass(Sa+"__thumb_selected").data("disabled",!1),Et.addClass(Sa+"__thumb_selected").data("disabled",!0)),M().thumbs&&M().thumbsPreview&&(h!=m||n)&&T(r,a),M().touchStyle)a=-m*(A+M().margin),u(),C(Tt,a,r,e);else{function f(t){if(h!=m||n){var a=r,e=0;t&&(a=0,e=r),Kt.not(d.stop()).stop().fadeTo(0,0),setTimeout(function(){u(),o.stop().fadeTo(a,1,function(){d.not(o).stop().fadeTo(e,0,function(){M().flexible&&v()})})},10)}}"loaded"==t?f():"error"==t?f(!0):(o.one("load."+Sa,function(){f()}),o.one("error."+Sa,function(){f(!0)}))}Dt=o,Ot=m,M().hash&&document.location.replace("#"+(Ot+1)),$&&!s&&M().stopAutoplayOnAction&&($=!1),k(r);var b=w();g.data(b),M().arrows&&((0==Ot||S<2)&&!M().loop?At.addClass(Sa+"__arr_disabled").data("disabled",!0):At.removeClass(Sa+"__arr_disabled").data("disabled",!1),(Ot==S-1||S<2)&&!M().loop?Nt.addClass(Sa+"__arr_disabled").data("disabled",!0):Nt.removeClass(Sa+"__arr_disabled").data("disabled",!1));var p=o.data("wraped");clearTimeout(U),U=setTimeout(function(){p||m==M().startImg||(y(o,m),M().onShowImg&&M().onShowImg.call(g[0],b,s)),function(t,n){var a=0,e=!1,o=[],r=[],s=F?Math.min(1,M().preload):M().preload;for(i=0;i<2*s+1;i++){var l=n-s+i;0<=l&&l<S&&!M().loop||M().loop?(l<0&&(l=S+l),S-1<l&&(l-=S),Kt.eq(l).data("wraped")&&!Kt.eq(l).data("detached")||(a++,o.push(l)),r.push(l)):e=!0}(s<=a||e)&&(da(o).each(function(t){setTimeout(function(){y(Kt.eq(o[t]),o[t])},50*t)}),M().detachSiblings&&Kt.filter(function(t){for(var a=da(this),e=!1,o=0;o<r.length&&!e;o++)r[o]==t&&(e=!0);return"loading"!=a.data("state")&&!e&&n!=t}).data({detached:!0}).detach())}(0,m)},r+10),!p&&m!=M().startImg||(y(o,m),M().onShowImg&&M().onShowImg.call(g[0],b,s))}function m(t,a){a.stopPropagation(),a.preventDefault();var e=Ot+t;e<0&&(e=M().loop?S-1:0),S-1<e&&(e=M().loop?0:S-1),h(Kt.eq(e),a)}function t(){clearTimeout(na),na=setTimeout(function(){s()},50)}function e(){j||(Aa.bind("resize",t),_a&&window.addEventListener("orientationchange",t,!1),j=!0)}g.data({ini:!0,options:M}),(M=function(){return g.data("options")})().backgroundColor&&!M().background&&(M().background=M().backgroundColor),M().thumbsBackgroundColor&&!M().navBackground&&(M().navBackground=M().thumbsBackgroundColor),M().thumbColor&&!M().dotColor&&(M().dotColor=M().thumbColor),null!==M().click&&(M().pseudoClick=M().click),!0===M().nav||"true"==M().nav||"thumbs"==M().nav?(M().thumbs=!0,M().thumbsPreview=!0):"dots"==M().nav?(M().thumbs=!0,M().thumbsPreview=!1):!1!==M().nav&&"false"!=M().nav&&"none"!=M().nav||(M().thumbs=!1),M().caption&&(!0===M().caption||"true"==M().caption||"simple"==M().caption?M().caption=!0:"overlay"!=M().caption&&(M().caption=!1)),"top"==M().navPosition?(M().thumbsOnTop=!0,M().thumbsOnRight=!1):"right"==M().navPosition?(M().thumbsOnTop=!1,M().thumbsOnRight=!0):"bottom"==M().navPosition?(M().thumbsOnTop=!1,M().thumbsOnRight=!1):"left"==M().navPosition&&(M().thumbsOnTop=!1,M().thumbsOnRight=!1);var P,o=(new Date).getTime();M().hash&&document.location.hash&&(M().startImg=parseInt(document.location.hash.replace("#",""))-1);var x,l=M().data&&("object"==typeof M().data||"string"==typeof M().data),S=(x=l?da(M().data).filter(function(){return this.img||this.href||this.length}):g.children().filter(function(){var t=da(this);return(t.is("a")&&t.children("img").size()||t.is("img"))&&(t.attr("href")||t.attr("src")||t.children().attr("src"))})).size();g.data({size:S}),M().preload=Math.min(M().preload,S),(M().startImg>S-1||"number"!=typeof M().startImg)&&(M().startImg=0);var b=[];if(x.each(function(t){if(l)b[t]={imgHref:this.img?this.img:this.href?this.href:this.length?""+this:null,thumbSrc:this.thumb,imgRel:this.full};else{var a=da(this);b[t]={imgHref:a.attr("href"),imgSrc:a.attr("src"),thumbSrc:a.children().attr("src"),imgRel:a.attr("rel")?a.attr("rel"):a.children().attr("rel")},M().caption&&(this.caption=a.attr("alt")||a.children().attr("alt"))}}),g.html("").addClass(Sa+" "+(M().vertical?Sa+"_vertical":Sa+"_horizontal")),ya||wa)var u=g.wrap('<div class="fotorama-outer"></div>').parent();M().arrows||(M().loop=!0);var A,c,p,N,I,R,z,q,B,D,O,W,K,H,E,L,F,j,Q,X,Y,G,U,$,J,V,Z,tt,at,et,ot,it=[],nt=1,rt=!0,st=!0,lt={no:/^[0-9.]+$/,px:/^[0-9.]+px/,"%":/^[0-9.]+%/};if((!0===M().autoplay||"true"==M().autoplay||0<M().autoplay)&&($=!0),"number"!=typeof M().autoplay&&(M().autoplay=5e3),M().touchStyle)var ut,dt,ct=0,ht=!1,mt=!1;if(M().thumbs&&M().thumbsPreview)var ft,bt=!1,pt=!1,gt=!1,vt=!1,_t=!1,wt=0;ot=M().vertical?(V="top",Z="left",tt="pageY",at="pageX",et="height","width"):(V="left",Z="top",tt="pageX",at="pageY",et="width","height");var Ct=da('<div class="'+Sa+'__wrap"></div>').appendTo(g),Tt=da('<div class="'+Sa+'__shaft"></div>').appendTo(Ct);M().touchStyle||(fa(Ct),fa(Tt));var yt,Mt=da('<div class="'+Sa+'__state"></div>').appendTo(Tt);if(("white"==M().preloader||M().background&&M().background.match(/(white|#fff|#FFF)/))&&Mt.addClass(Sa+"__state_white"),M().fullscreenIcon)var kt=da('<div class="'+Sa+'__fsi"><i class="i1"><i class="i1"></i></i><i class="i2"><i class="i2"></i></i><i class="i3"><i class="i3"></i></i><i class="i4"><i class="i4"></i></i><i class="i0"></i></div>').appendTo(Ct);if(_a&&g.addClass(Sa+"_touch"),wa&&(M().shadows=!1),M().touchStyle?(Ct.addClass(Sa+"__wrap_style_touch"),M().shadows&&Ct.append('<i class="'+Sa+"__shadow "+Sa+'__shadow_prev"></i><i class="'+Sa+"__shadow "+Sa+'__shadow_next"></i>')):Ct.addClass(Sa+"__wrap_style_fade"),M().shadows&&g.addClass(Sa+"_shadows"),Ca&&g.addClass(Sa+"_csstransitions"),M().arrows){var Pt,xt;xt=(M().vertical,Pt=M().arrowPrev?M().arrowPrev:"",M().arrowNext?M().arrowNext:"");var St=da('<i class="'+Sa+"__arr "+Sa+'__arr_prev">'+Pt+'</i><i class="'+Sa+"__arr "+Sa+'__arr_next">'+xt+"</i>").appendTo(Ct),At=St.eq(0),Nt=St.eq(1);if(!_a&&M().pseudoClick){var It,Rt;Ct.mousemove(function(t){It=t[tt]-Ct.offset()[V],clearTimeout(Rt),Rt=setTimeout(function(){var t=A/2<=It;Nt[t?"addClass":"removeClass"](Sa+"__arr_hover"),At[t?"removeClass":"addClass"](Sa+"__arr_hover"),M().touchStyle||Tt.css({cursor:t&&Nt.data("disabled")||!t&&At.data("disabled")?"default":"pointer"})},10)})}}else!M().touchStyle&&M().pseudoClick&&1<S&&Tt.css({cursor:"pointer"});if(!_a){var zt,qt=!1,Bt=function(){clearTimeout(zt),zt=setTimeout(function(){ht||qt||Ct.removeClass(Sa+"__wrap_mouseover").addClass(Sa+"__wrap_mouseout")},3*M().transitionDuration)};Ct.mouseenter(function(){qt=!0,clearTimeout(zt),M().arrows&&St.css(ma(0)),Ct.removeClass(Sa+"__wrap_mouseout"),setTimeout(function(){M().arrows&&St.css(ma(M().transitionDuration)),setTimeout(function(){Ct.addClass(Sa+"__wrap_mouseover")},1)},1)}),Ct.mouseleave(function(){qt=!1,Bt()})}var Dt,Ot,Wt,Kt=da();if(x.each(function(){var t=da('<div class="'+Sa+'__frame" style="visibility: hidden;"></div>');Kt=Kt.add(t)}),M().thumbs){var Ht=Number(M().thumbSize);!isNaN(Ht)&&Ht||(Ht=M().vertical?64:48);var Et,Lt,Ft=0,jt=da('<div class="'+Sa+'__thumbs" style="visibility: hidden;"></div>')[M().thumbsOnTop?"prependTo":"appendTo"](g);M().thumbsPreview&&(Lt=Ht+4*M().thumbMargin,jt.addClass(Sa+"__thumbs_previews").css(ot,Lt)),M().has_eurolabel?M().vertical&&M().has_video?jt.css("margin-top","130px"):jt.css("margin-top","65px"):M().vertical&&M().has_video&&jt.css("margin-top","65px"),M().vertical&&M().has_elabel;var Qt=da('<div class="'+Sa+'__thumbs-shaft"></div>').appendTo(jt);if(M().thumbsPreview){var Xt=0,Yt=void 0;M().shadows&&da('<i class="'+Sa+"__shadow "+Sa+'__shadow_prev"></i><i class="'+Sa+"__shadow "+Sa+'__shadow_next"></i>').appendTo(jt);var Gt=Ht-(Ma?0:2*M().thumbBorderWidth),Ut=M().thumbMargin,$t={};$t[ot]=Gt,$t[Z]=M().vertical?0:Ut,$t.borderWidth=M().thumbBorderWidth;var Jt,Vt=da('<i class="'+Sa+'__thumb-border"></i>').css($t).appendTo(Qt)}x.each(function(){var t;if(M().thumbsPreview){t=da('<div class="'+Sa+'__thumb"></div>');var a={};a[ot]=Ht,a.margin=M().thumbMargin,t.css(a)}else t=da('<i class="'+Sa+'__thumb"><i class="'+Sa+'__thumb__dot"></i></i>');t.appendTo(Qt)});var Zt=da("."+Sa+"__thumb",g);if(M().thumbsPreview){function ta(t,a,e,o,i,n){a=da(t),n2=o,nsh=n2<1?Math.round(n2*Ht):Ht,nvs=1<=n2?Math.round(Ht/n2):Ht,n2=n2<1?Math.round(Ht*n2):Math.round(Ht/n2),o=M().vertical?Math.round(Ht/o):Math.round(Ht),pa.canvas?(a.remove(),(a=da('<canvas class="'+Sa+'__thumb__img"></canvas>')).appendTo(Zt.eq(n))):a.addClass(Sa+"__thumb__img"),(e={})[et]=Ht,e[ot]=Ht,a.attr(e).css(e).css({visibility:"visible"}),pa.canvas&&(a[0].getContext("2d"),a[0].getContext("2d").drawImage(t,(Ht-nsh)/2,(Ht-nvs)/2,nsh,nvs)),Qt.css(et,Xt),e[ot]=null,Zt.eq(n).css(e).data(e),r()}var aa=function(t){vt||bt||mt||Q?setTimeout(function(){aa(t)},100):(t||(t=0),a(t,Zt.eq(t),ta,"thumb"),setTimeout(function(){t+1<S&&aa(t+1)},50))}}}if(M().caption){var ea=da('<p class="'+Sa+'__caption"></p>');if("overlay"==M().caption)ea.appendTo(Ct).addClass(Sa+"__caption_overlay");else{ea.appendTo(g);var oa=ea.wrap('<div class="'+Sa+'__caption-outer"></div>').parent()}}n(M().width,M().height,M().aspectRatio);var ia=[];h(Kt.eq(M().startImg),!1,!1,!0,!1,!1,!0),p&&N&&(E=!0,s()),M().thumbs&&M().thumbsPreview&&aa(0),M().thumbs&&(M().dotColor&&!M().thumbsPreview&&Zt.children().css({backgroundColor:M().dotColor}),M().navBackground&&jt.css({background:M().navBackground}),M().thumbsPreview&&M().thumbBorderColor&&Vt.css({borderColor:M().thumbBorderColor})),M().background&&Ct.add(Kt).css({background:M().background}),M().arrowsColor&&M().arrows&&St.css({color:M().arrowsColor});var na=!1;if(e(),g.bind("dblclick",ba),g.bind("showimg",function(t,a,e,o){"number"!=typeof a&&("next"==a?a=Ot+1:"prev"==a?a=Ot-1:"first"==a?a=0:"last"==a?a=S-1:(a=Ot,o=!0)),S-1<a&&(a=0),M().touchStyle&&mt||h(Kt.eq(a),t,!1,!1,e,!1,o)}),g.bind("play",function(t,a){$=!0,a=Number(a),isNaN(a)||(M().autoplay=a),k(xa)}),g.bind("pause",function(){$=!1}),g.bind("rescale",function(t,a,e,o,i){n(a,e,o),D=q=p/N,L=!z,i=Number(i),isNaN(i)&&(i=0),s(!1,i)}),g.bind("fullscreenopen",function(){Y=Aa.scrollTop(),G=Aa.scrollLeft(),F=!0,kt&&kt.trigger("mouseleave",!0),Aa.scrollTop(0),ga.add(va).addClass("fullscreen"),g.addClass(Sa+"_fullscreen"),(ya||wa)&&g.appendTo(va).addClass(Sa+"_fullscreen_quirks"),M().caption&&"overlay"!=!M().caption&&ea.appendTo(Ct),e(),Dt&&h(Dt,!1,!1,!0,0,!1,!0),s(!1,!1,!0)}),g.bind("fullscreenclose",function(){F=!1,kt&&kt.trigger("mouseleave",!0),ga.add(va).removeClass("fullscreen"),g.removeClass(Sa+"_fullscreen"),(ya||wa)&&g.appendTo(u).removeClass(Sa+"_fullscreen_quirks"),M().caption&&"overlay"!=!M().caption&&ea.appendTo(oa),Aa.scrollTop(Y),Aa.scrollLeft(G),z||(p=M().width,N=M().height),Dt&&h(Dt,!1,!1,!0,0,!1,!0),M().flexible?v():s(!1,!1,!0)}),Na.bind("keydown",function(t){F&&(27!=t.keyCode||M().fullscreen?39==t.keyCode||40==t.keyCode?g.trigger("showimg",Ot+1):37!=t.keyCode&&38!=t.keyCode||g.trigger("showimg",Ot-1):g.trigger("fullscreenclose"))}),M().thumbs){var ra=function(t){if(t.stopPropagation(),!da(this).data("disabled")){var a=Zt.index(da(this)),e=t[tt]-jt.offset()[V];h(Kt.eq(a),t,e)}};Zt.bind("click",ra)}if(M().arrows&&(At.bind("click",function(t){da(this).data("disabled")||m(-1,t)}),Nt.bind("click",function(t){da(this).data("disabled")||m(1,t)})),M().touchStyle||_a||!M().pseudoClick||Ct.bind("click",function(t){var a=t[tt]-Ct.offset()[V]>=A/2;if(M().onClick)var e=M().onClick.call(g[0],w());!1!==e&&(!t.shiftKey&&a&&M().arrows||t.shiftKey&&!a&&M().arrows||!M().arrows&&!t.shiftKey?m(1,t):m(-1,t))}),kt&&kt.bind("click",function(t){t.stopPropagation(),g.trigger(F?"fullscreenclose":"fullscreenopen")}).bind("mouseenter mouseleave",function(t,a){a&&t.stopPropagation(),kt["mouseenter"==t.type?"addClass":"removeClass"](Sa+"__fsi_hover")}),M().fullscreen&&g.trigger("fullscreenopen"),M().touchStyle||_a||M().thumbs&&M().thumbsPreview)var sa=function(l,e,o,u){function t(t){if((_a||t.which<2)&&Dt){function a(){b=(new Date).getTime(),s=n,_=[[b,r=m]],clearTimeout(l.data("backAnimate")),Ca?l.css(ma(0)):l.stop(),h=l.position()[V],l.css(ca(h,M().vertical)),f=h,e()}if(_a){if(_a&&1==t.targetTouches.length)m=t.targetTouches[0][tt],n=t.targetTouches[0][at],a(),l[0].addEventListener("touchmove",d,!1),l[0].addEventListener("touchend",c,!1);else if(_a&&1<t.targetTouches.length)return!1}else m=t[tt],t.preventDefault(),a(),Na.mousemove(d),Na.mouseup(c)}}function d(a){function t(){a.preventDefault(),p=(new Date).getTime(),_.push([p,m]);var t=r-m;y=(h=f-t)>l.data("maxPos")?(h=Math.round(h+(l.data("maxPos")-h)/1.5),"left"):h<l.data("minPos")&&(h=Math.round(h+(l.data("minPos")-h)/1.5),"right"),M().touchStyle&&l.css(ca(h,M().vertical)),o(h,t,y)}_a?_a&&1==a.targetTouches.length&&(m=a.targetTouches[0][tt],n=a.targetTouches[0][at],T?!0===C&&t():-5<=Math.abs(m-r)-Math.abs(n-s)?(C=!0,a.preventDefault(),T=!0):-5<=Math.abs(n-s)-Math.abs(m-r)&&(C="prevent",T=!0)):(m=a[tt],t())}function c(t){if(!_a||!t.targetTouches.length){_a?(l[0].removeEventListener("touchmove",d,!1),l[0].removeEventListener("touchend",c,!1)):(Na.unbind("mouseup"),Na.unbind("mousemove")),v=(new Date).getTime();var a,e,o,n,r=-h,s=v-ka;for(i=0;i<_.length;i++)a=Math.abs(s-_[i][0]),0==i&&(e=a,o=v-_[i][0],n=_[i][1]),a<=e&&(e=a,o=_[i][0],n=_[i][1]);u(r,o=v-o,o<=ka,v-w,(a=0<=(s=n-m))===g,s,t,C),w=v,g=a,T=C=!1}}var h,m,n,r,s,f,b,p,g,v,_=[],w=0,C=!1,T=!1,y=!1;_a?l[0].addEventListener("touchstart",t,!1):l.mousedown(t)};if(M().touchStyle||_a){var la=!1;if(sa(Tt,function(){mt=!0},function(t,a,e){clearTimeout(dt),ht||(M().shadows&&Ct.addClass(Sa+"__wrap_shadow"),_a||Tt.addClass(Sa+"__shaft_grabbing"),ht=!0),M().shadows&&(e?(t="left"==e?"right":"left",Ct.addClass(Sa+"__wrap_shadow_no-"+e).removeClass(Sa+"__wrap_shadow_no-"+t)):M().shadows&&Ct.removeClass(Sa+"__wrap_shadow_no-left "+Sa+"__wrap_shadow_no-right")),5<=Math.abs(a)&&!la&&(la=!0,da("a",Ct).bind("click",ha))},function(t,a,e,o,i,n,r,s){mt=!1,dt=setTimeout(function(){!_a&&M().arrows&&Bt(),la=!1,da("a",Ct).unbind("click",ha)},ka),_a||Tt.removeClass(Sa+"__shaft_grabbing"),M().shadows&&Ct.removeClass(Sa+"__wrap_shadow");var l,u;i=o=!1;if(M().html&&((u=(l=da(r.target)).filter("a")).length||(u=l.parents("a"))),M().touchStyle)if(ht){if(e&&(n<=-10?o=!0:10<=n&&(i=!0)),e=xa,s=Math.round(t/(A+M().margin)),o||i){var d;a=-n/a,n=Math.round(250*a-t);o?(t=-(s=Math.ceil(t/(A+M().margin))-1)*(A+M().margin))<n&&(d=Math.abs(n-t),e=Math.abs(e/(250*a/(Math.abs(250*a)-.97*d))),d=t+.03*d):i&&n<(t=-(s=Math.floor(t/(A+M().margin))+1)*(A+M().margin))&&(d=Math.abs(n-t),e=Math.abs(e/(250*a/(Math.abs(250*a)-.97*d))),d=t-.03*d)}s<0&&(s=0,d=!1,e=xa),S-1<s&&(s=S-1,d=!1,e=xa),h(Kt.eq(s),r,!1,!1,e,d)}else{if(M().html&&u.length)return!1;if(M().onClick&&"prevent"!=s)var c=M().onClick.call(g[0],w());!1!==c&&M().pseudoClick&&!_a&&a<ka?(d=r[tt]-Ct.offset()[V]>=A/2,!r.shiftKey&&d&&M().arrows||r.shiftKey&&!d&&M().arrows||!M().arrows&&!r.shiftKey?m(1,r):m(-1,r)):h(Dt,r,!1,!1,!1,!1,!0)}else{if(0==n&&M().html&&u.length)return!1;0<=n?m(1,r):n<0&&m(-1,r)}ht=!1}),M().touchStyle&&M().thumbs&&M().thumbsPreview){var ua=!1;sa(Qt,function(){pt=bt=!0},function(t,a){!vt&&5<=Math.abs(a)&&(Zt.unbind("click",ra),ua=!0,clearTimeout(ft),vt=!0),d(t)},function(t,a,e,o,i,n,r){vt=bt=!1,ft=setTimeout(function(){ua&&(Zt.bind("click",ra),ua=!1)},ka);var s;o=t=-t,i=2*xa;gt&&vt&&(T(0,!1,!1),gt=!1),t>Qt.data("maxPos")?(o=Qt.data("maxPos"),i/=2):t<Qt.data("minPos")?(o=Qt.data("minPos"),i/=2):e&&(a=-n/a,(o=Math.round(t+250*a))>Qt.data("maxPos")?(s=Math.abs(o-Qt.data("maxPos")),i=Math.abs(i/(250*a/(Math.abs(250*a)-.96*s))),s=(o=Qt.data("maxPos"))+.04*s):o<Qt.data("minPos")&&(s=Math.abs(o-Qt.data("minPos")),i=Math.abs(i/(250*a/(Math.abs(250*a)-.96*s))),s=(o=Qt.data("minPos"))-.04*s)),r.altKey&&(i*=10),(Yt=o)!=t&&(C(Qt,o,i,s),d(o))})}}}var pa=function(t,a,o){function e(t,a){var e=t.charAt(0).toUpperCase()+t.substr(1);return i(e=(t+" "+l.join(e+" ")+e).split(" "),a)}function i(t,a){for(var e in t)if(s[t[e]]!==o)return"pfx"!=a||t[e];return!1}t={},a.head||a.getElementsByTagName("head");var n,r,s=(u=a.createElement("modernizr")).style,l=["Webkit","Moz","O","ms","Khtml"],u={},d=[],c={}.hasOwnProperty;for(var h in r=typeof c!==o&&typeof c.call!==o?function(t,a){return c.call(t,a)}:function(t,a){return a in t&&typeof t.constructor.prototype[a]===o},u.canvas=function(){var t=a.createElement("canvas");return!!t.getContext&&!!t.getContext("2d")},u.csstransforms=function(){return!!i(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},u.csstransitions=function(){return e("transitionProperty")},u)r(u,h)&&(t[n=h.toLowerCase()]=u[h](),d.push((t[n]?"":"no-")+n));return s.cssText="",u=null,t._version="2.0.6",t._domPrefixes=l,t.testProp=function(t){return i([t])},t.testAllProps=e,t}(this,this.document);da.extend({bez:function(n){var t="bez_"+da.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof jQuery.easing[t]){jQuery.easing[t]=function(t,a,e,o,i){return o*function(e,o){function i(t,a){return s[a]=3*e[a],r[a]=3*(o[a]-e[a])-s[a],n[a]=1-s[a]-r[a],t*(s[a]+t*(r[a]+t*n[a]))}var n=[null,null],r=[null,null],s=[null,null];return function(t){for(var a,e=t,o=0;++o<14&&(a=i(e,0)-t,!(Math.abs(a)<.001));)e-=a/(s[0]+e*(2*r[0]+3*n[0]*e));return i(e,1)}}([n[0],n[1]],[n[2],n[3]])(a/i)+e}}return t}});var ga,va,_a="ontouchstart"in document,wa=navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|iemobile|windows ce|netfront|playstation|midp|up\.browser|symbian|nintendo|wii)/),Ca=pa.csstransforms&&pa.csstransitions&&!da.browser.mozilla,Ta=da.browser.msie,ya=Ta&&"6.0"==da.browser.version,Ma="CSS1Compat"!=document.compatMode&&Ta,ka=300,Pa=da.bez([.1,0,.25,1]),xa=333,Sa="fotorama",Aa=da(window),Na=da(document),r=[["width","string",null],["height","string",null],["aspectRatio","number",null],["touchStyle","boolean",!0],["click","boolean",null],["pseudoClick","boolean",!0],["loop","boolean",!1],["autoplay","boolean-number",!1],["stopAutoplayOnAction","boolean",!0],["transitionDuration","number",xa],["background","string",null],["backgroundColor","string",null],["margin","number",5],["minPadding","number",10],["alwaysPadding","boolean",!1],["zoomToFit","boolean",!0],["cropToFit","boolean",!1],["flexible","boolean",!1],["fitToWindowHeight","boolean",!1],["fullscreen","boolean",!1],["fullscreenIcon","boolean",!1],["vertical","boolean",!1],["arrows","boolean",!0],["arrowsColor","string",null],["arrowPrev","string",null],["arrowNext","string",null],["nav","string",null],["thumbs","boolean",!0],["navPosition","string",null],["thumbsOnTop","boolean",!1],["thumbsOnRight","boolean",!1],["navBackground","string",null],["thumbsBackgroundColor","string",null],["dotColor","string",null],["thumbColor","string",null],["thumbsPreview","boolean",!0],["thumbSize","number",null],["thumbMargin","number",5],["thumbBorderWidth","number",3],["thumbBorderColor","string",null],["caption","string",!1],["preload","number",3],["preloader","boolean","dark"],["shadows","boolean",!0],["data","array",null],["html","array",null],["hash","boolean",!1],["startImg","number",0],["onShowImg","function",null],["onClick","function",null],["onSlideStop","function",null],["detachSiblings","boolean",!0]];da.fn[Sa]=function(t){"undefined"==typeof fotoramaDefaults&&(fotoramaDefaults={});var a=da.extend(e(),da.extend({},fotoramaDefaults,t));return this.each(function(){var t=da(this);t.data("ini")||n(t,a)}),this},da(function(){ga=da("html"),va=da("body"),da("."+Sa).each(function(){var t=da(this);t[Sa](e(t))})});var s=["-webkit-","-moz-","-o-","-ms-",""],t=new Image,Ia=!0;t.onerror=function(){1==this.width&&1==this.height||(Ia=!1)},t.src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}(jQuery);
/********************************************************************************/
/*GALEREIES*******************************************************************************/
/********************************************************************************/
$(function () {
    var act = 0;
    var gallery = [], zom = [], gallery_preview = [], i = 0;
    var $img_list = $('#fotorama img');
    var has_gallery = ($img_list.size() > 0 && $($img_list[0]).attr('src').indexOf("default_preview") === -1);
    var has_many_img = $img_list.size() > 1;
    var containerHeight = $('#j-buyzone').height();
    var height = containerHeight > 340 ? containerHeight : 340;

    $img_list.each(function () {
        var src = $(this).attr('src');
        gallery[i] = {
            img: src.replace('preview_b/', ''),
            thumb: src.replace('preview_b/', 'preview_s/'),
            caption: $(this).attr('alt')
        };
        gallery_preview[i] = {img: src, thumb: src.replace('preview_b/', 'preview_s/')};
        zom[i] = "<img class='prop' style='display:none;' src='" + src.replace('preview_b/', '') + "'>";
        i++;
    });
    var fotoramaFullsize = function () {
        if ($(this).hasClass('j-sale_fotorama')) {
            //fotorama for sale
            var active_gallery = [], i = 0;
            $(this).find('.photo').each(function () {
                active_gallery[i] = {img: $(this).html(), caption: $(this).data('desc')};
                i++;
            });
        } else {
            var active_gallery = gallery;
        }
        var dialog_width = $(window).width() - 100 - getScrollWidth();
        var showZoom = function () {
            if ($(".fotorama__frame_active .prop").width() >= ($(window).width() - 100) || $(".fotorama__frame_active .prop").height() >= ($(window).height() - 110)) {
                $('#flsize').show();
            } else {
                $('#flsize').hide();
            }
        };
        var data = jQuery('<div id="fotoramaactive_gallery" />');
        var zoomer = "<div class='zoomer' id='flsize' style = 'display:none; height:12px;  position:absolute; top:" + ($(window).height() - 150) / 2 + "px; left:" + ($(window).width() - 170) / 2 + "px; color:white;text-shadow:0 0 5px black; cursor: pointer;padding-left: 20px; height: 20px;'>Увеличить</div>";
        $('<div id="dialog"/>')
            .html(data)
            .dialog({
                close: function (event, ui) {
                    $('.prop').remove();
                    $('.zoomer').remove();
                    $windowStyles = {marginRight: ''};
                    $windowStyles.overflow = '';
                    $windowStyles.width = '';
                    $('html').css($windowStyles);
                },
                dialogClass: 'g-gallery',
                modal: true,
                position: ['center', 10],
                width: dialog_width,
                closeText: 'Закрыть'
            })
            .fotorama({
                onShowImg: function (data) {
                    showZoom();
                },
                onClick: function (data) {
                    showZoom();
                },
                startImg: act,
                //startImg : data.index, было так, убрано при решении BUGS-522
                data: active_gallery,
                html: zom,
                margin: 0,
                minPadding: 15,
                loop: true,
                /*height: 300,*/
//					resize : true,
                zoomToFit: false, /*не растягивать картинки */
                caption: 'overlay',
                nav: 'thumbs',
                vertical: false,
                thumbSize: '50',
                //если только одна картинка, то убераем стрелки
                touchStyle: active_gallery.length > 1 ? true : false,
                arrows: active_gallery.length > 1 ? true : false,
                fullscreenIcon: true,
                //margin : 30,
                //minPadding  : 30,
                fullscreenIcon: true
            }).trigger('rescale', [dialog_width, $(window).height() - 110]).append(zoomer);
        $(".fotorama__frame_active .prop").ready(function () {
            showZoom();
        });
        $(".ui-widget-overlay").click(function () {
            $('.ui-widget-content').dialog("close");
        });

        return false;
    };

    var has_video = ($('#j-show_videos').length == 1),
        has_eurolabel = ($('#j-show_eurolabel').length == 1);
    if(has_video && has_eurolabel){
        $('#j-show_eurolabel').css('top', '65px');
    }

    $('#fotorama')
        .fotorama({//preview
            onShowImg: function (data) {
                act = data.index;
            },
            onClick: function () {
                fotoramaFullsize();
                return false;
            }, //если клик по сайо картинке, то открываем галерею},
            data: gallery_preview,
            width: '100%',
            height: height,
            vertical: $(window).width() > 1140,
            margin: 0,
            minPadding: 0,
            caption: false,
            has_video: has_video,
            has_eurolabel:has_eurolabel,
            loop: true,
            thumbSize: '50',
            //если только одна картинка, то убераем стрелки
            touchStyle: has_many_img, // если стоит false, то не кликается картинка
            arrows: false,
            click: has_gallery,	//Переход между изображениями по клику, но у нас не нем висит открытие полноэкранного режима.
            nav: has_gallery ? 'thumbs' : false,
            zoomToFit: false, /*не растягивать картинки */
            pseudoClickLoop: false
        })
        .find('.fotorama__arr_next').addClass('g-slider__rarrow cr-slider__ractive').end()
        .find('.fotorama__arr_prev').addClass('g-slider__larrow cr-slider__lactive')

    $('#j-photo__zoom, .j-sale_fotorama, .l-content_right #fotorama:not(:has(i))').live('click', fotoramaFullsize);

    function fullSize() {
        $image = $(this).parent().find(".fotorama__frame_active img[class='fotorama__img']");
        if ($image.parent().hasClass('dd')) {
            $image.parent().kinetic('attach');
        } else {
            $image.parent().kinetic();
        }
        ;

        $('#flsize').attr('id', 'smlsize').html('Уменьшить');
        $('.fotorama__thumbs_previews').append("<div class='clcover' style='width:100%; height: 100%;'></div>")
        $attr = $image.attr('style');
        $image.removeAttr('style');
        if ($image.width() < ($(window).width() - 100)) {
            $image.attr('style', 'left:' + ((($(window).width()) - $image.width() - 100) / 2) + 'px;')
        }
        ;
        if ($image.height() < ($(window).height() - 110)) {
            $image.attr('style', ' top:' + ((($(window).height()) - $image.height() - 110) / 2) + 'px;')
        }
        ;

        $('#smlsize, .ui-icon-closethick, #dialog:has(.kinetic-active) .fotorama__thumbs, #dialog:has(.kinetic-active) .fotorama__thumb').live('click', function () {
            $image.parent().addClass('dd');
            $image.parent().kinetic('detach');
            $image.attr('style', $attr);
            $('.clcover').remove();
            $('#smlsize').attr('id', 'flsize').html('Увеличить');

        });
    };
    $('#flsize').live('click', fullSize);

    $('#j-show_eurolabel').click(function () {
        var dialog_width = $(window).width() - 100 - getScrollWidth();
        $('#eurolabel').dialog({
                close: function (event, ui) {
                    $('.prop').remove();
                    $('.zoomer').remove();
                    $windowStyles = {marginRight: ''};
                    $windowStyles.overflow = '';
                    $windowStyles.width = '';
                    $('html').css($windowStyles);
                },
                dialogClass: 'g-gallery',
                modal: true,
                position: ['center', 'center'],
                width: 493,
                closeText: 'Закрыть'
            });
        $(".ui-widget-overlay").on('click',function() {
            $('#eurolabel').dialog('close');
        });
    })


});