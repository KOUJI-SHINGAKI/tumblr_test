"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // フィルターボタン初期
  //   $(function(){
  //     var $btn = $('.filter__body [data-filter]'),
  //     $list = $('.gallery__grid [data-category]');
  //     $(document).on('click', '.filter__body [data-filter]', function(e) {
  //       e.preventDefault();
  //       var $btnTxt = $(this).attr('data-filter');
  //       console.log("選択されたフィルタ:", $btnTxt);
  //       var $list = $('.gallery__grid [data-category]');
  //       console.log("取得したリスト:", $list); // ここで確認
  //       if ($btnTxt === 'all') {
  //           $list.fadeIn();
  //       } else {
  //           $list.hide().filter('[data-category="' + $btnTxt + '"]').fadeIn();
  //       }
  //   });
  //     $btn.on('click', function(e) {
  //       e.preventDefault();
  //       var $btnTxt = $(this).attr('data-filter');
  //       if ($btnTxt == 'all'){
  //         $list.fadeOut().promise().done(function() {
  //           $list.fadeIn();
  //         });
  //       } else {
  //         $list.fadeOut().promise().done(function() {
  //           $list.filter('[data-category = "' + $btnTxt + '"]').fadeIn();
  //         });
  //       }
  //     });
  //   });
  //   $(function(){
  //     $('.filter__button').on('click', function(){
  //       $('.filter__button').removeClass('is-active');
  //       $(this).addClass('is-active');
  //     });
  //   }); 
  // 最新の6件だけ表示する場合
  function fetchTumblrMedia(_x, _x2) {
    return _fetchTumblrMedia.apply(this, arguments);
  }
  function _fetchTumblrMedia() {
    _fetchTumblrMedia = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(tag, containerId) {
      var limit,
        mediaGallery,
        url,
        response,
        posts,
        mediaPromises,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            limit = _args.length > 2 && _args[2] !== undefined ? _args[2] : 6;
            mediaGallery = document.getElementById(containerId);
            if (mediaGallery) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return");
          case 4:
            document.body.style.visibility = "hidden";
            url = "https://tumblr-api-server.vercel.app/tumblr-posts?tag=".concat(tag, "&limit=").concat(limit);
            _context.prev = 6;
            _context.next = 9;
            return fetch(url);
          case 9:
            response = _context.sent;
            if (response.ok) {
              _context.next = 12;
              break;
            }
            throw new Error("HTTP\u30A8\u30E9\u30FC! \u30B9\u30C6\u30FC\u30BF\u30B9: ".concat(response.status));
          case 12:
            _context.next = 14;
            return response.json();
          case 14:
            posts = _context.sent;
            if (posts.length) {
              _context.next = 18;
              break;
            }
            console.warn("\u300C".concat(tag, "\u300D\u30BF\u30B0\u306E\u6295\u7A3F\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093"));
            return _context.abrupt("return");
          case 18:
            mediaGallery.innerHTML = "";
            mediaPromises = posts.map(function (post) {
              var mediaUrl = post.mediaUrl,
                mediaType = post.mediaType,
                postUrl = post.postUrl,
                imageUrls = post.imageUrls;
              if (!mediaUrl && (!imageUrls || imageUrls.length === 0)) return null;
              if (imageUrls && imageUrls.length > 0) {
                mediaUrl = imageUrls[0];
                mediaType = "image";
              }
              var mediaContainer = document.createElement('div');
              mediaContainer.classList.add('gallery-item');
              if (mediaType === "video") {
                // 動画の処理
                var videoElement = document.createElement('video');
                videoElement.src = mediaUrl;
                videoElement.controls = true;
                videoElement.classList.add('gallery-video');
                mediaContainer.appendChild(videoElement);
              } else {
                // 画像の処理 (aタグの中にimgタグを入れる)
                var linkElement = document.createElement('a');
                linkElement.href = postUrl;
                linkElement.target = '_blank';
                linkElement.classList.add('gallery-item-link');
                var imageElement = document.createElement('img');
                imageElement.src = mediaUrl;
                imageElement.alt = 'Tumblr Image';
                imageElement.classList.add('gallery-image');
                linkElement.appendChild(imageElement);
                mediaContainer.appendChild(linkElement);
              }
              mediaGallery.appendChild(mediaContainer);
              return new Promise(function (resolve) {
                if (mediaType === "video") {
                  mediaContainer.firstChild.addEventListener('loadeddata', resolve);
                } else {
                  mediaContainer.firstChild.firstChild.addEventListener('load', resolve);
                }
              });
            }).filter(Boolean);
            _context.next = 22;
            return Promise.all(mediaPromises);
          case 22:
            _context.next = 27;
            break;
          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](6);
            console.error("エラー:", _context.t0);
          case 27:
            _context.prev = 27;
            document.body.style.visibility = "visible";
            return _context.finish(27);
          case 30:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[6, 24, 27, 30]]);
    }));
    return _fetchTumblrMedia.apply(this, arguments);
  }
  fetchTumblrMedia("works", "gallery__grid--works");
  fetchTumblrMedia("original", "gallery__grid--original");

  // 全件表示用
  var allPosts = [];
  var currentFilteredPosts = [];
  var currentPage = 1;
  var itemsPerPage = 9;
  function fetchTumblrMediaAll(_x3, _x4, _x5) {
    return _fetchTumblrMediaAll.apply(this, arguments);
  } // 指定したページの投稿を表示
  function _fetchTumblrMediaAll() {
    _fetchTumblrMediaAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(tag, containerId, paginationId) {
      var mediaGallery, paginationContainer, url, response, posts;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            mediaGallery = document.getElementById(containerId);
            paginationContainer = document.getElementById(paginationId);
            if (!(!mediaGallery || !paginationContainer)) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return");
          case 4:
            document.body.style.visibility = "hidden";
            mediaGallery.innerHTML = "";
            paginationContainer.innerHTML = "";
            url = "https://tumblr-api-server.vercel.app/tumblr-posts/".concat(tag);
            _context2.prev = 8;
            _context2.next = 11;
            return fetch(url);
          case 11:
            response = _context2.sent;
            if (response.ok) {
              _context2.next = 14;
              break;
            }
            throw new Error("HTTP\u30A8\u30E9\u30FC! \u30B9\u30C6\u30FC\u30BF\u30B9: ".concat(response.status));
          case 14:
            _context2.next = 16;
            return response.json();
          case 16:
            posts = _context2.sent;
            if (posts.length) {
              _context2.next = 20;
              break;
            }
            console.warn("\u300C".concat(tag, "\u300D\u30BF\u30B0\u306E\u6295\u7A3F\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093"));
            return _context2.abrupt("return");
          case 20:
            allPosts = posts;
            currentFilteredPosts = _toConsumableArray(allPosts);
            displayPage(1, containerId);
            renderPaginationControls(paginationId, containerId);
            _context2.next = 29;
            break;
          case 26:
            _context2.prev = 26;
            _context2.t0 = _context2["catch"](8);
            console.error("エラー:", _context2.t0);
          case 29:
            _context2.prev = 29;
            document.body.style.visibility = "visible";
            return _context2.finish(29);
          case 32:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[8, 26, 29, 32]]);
    }));
    return _fetchTumblrMediaAll.apply(this, arguments);
  }
  function displayPage(pageNum, containerId) {
    var withFade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var mediaGallery = document.getElementById(containerId);
    if (!mediaGallery) return;
    currentPage = pageNum;
    var start = (pageNum - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var postsToShow = currentFilteredPosts.slice(start, end);
    if (withFade) {
      $(".gallery-item").fadeOut(200, function () {
        mediaGallery.innerHTML = ""; // クリア
        appendMedia(postsToShow, mediaGallery);
        $(".gallery-item").fadeIn(200);
      });
    } else {
      mediaGallery.innerHTML = "";
      appendMedia(postsToShow, mediaGallery);
    }
  }

  // メディアを追加する関数（再利用）
  function appendMedia(posts, container) {
    posts.forEach(function (post) {
      var mediaUrl = post.mediaUrl,
        mediaType = post.mediaType,
        postUrl = post.postUrl,
        imageUrls = post.imageUrls;
      if (!mediaUrl && (!imageUrls || imageUrls.length === 0)) return;
      if (imageUrls && imageUrls.length > 0) {
        mediaUrl = imageUrls[0];
        mediaType = "image";
      }
      var mediaContainer = document.createElement('div');
      mediaContainer.classList.add('gallery-item');
      var mediaElement;
      if (mediaType === "video") {
        mediaElement = document.createElement('video');
        mediaElement.src = mediaUrl;
        mediaElement.controls = true;
        mediaElement.classList.add('gallery-video');
      } else {
        mediaElement = document.createElement('img');
        mediaElement.src = mediaUrl;
        mediaElement.alt = 'Tumblr Image';
        mediaElement.classList.add('gallery-image');
        var linkElement = document.createElement('a');
        linkElement.href = postUrl;
        linkElement.target = '_blank';
        linkElement.classList.add('gallery-item');
        linkElement.appendChild(mediaElement);
        mediaContainer.appendChild(linkElement);
      }
      mediaContainer.appendChild(mediaElement);
      container.appendChild(mediaContainer);
    });
  }

  // ページネーションボタンの生成
  function renderPaginationControls(paginationId, containerId) {
    var paginationContainer = document.getElementById(paginationId);
    if (!paginationContainer) return;
    paginationContainer.innerHTML = "";
    var totalPages = Math.ceil(currentFilteredPosts.length / itemsPerPage);
    var _loop = function _loop(i) {
      var pageButton = document.createElement("button");
      pageButton.innerText = i;
      pageButton.classList.add("pagination-button");
      if (i === currentPage) {
        pageButton.classList.add("is-active");
      }
      pageButton.addEventListener("click", function () {
        displayPage(i, containerId, true); // フェード付きページ遷移
        renderPaginationControls(paginationId, containerId);
      });
      paginationContainer.appendChild(pageButton);
    };
    for (var i = 1; i <= totalPages; i++) {
      _loop(i);
    }
  }

  // フィルタリング処理（フェード付き）
  function filterMedia(type, containerId, paginationId) {
    var mediaGallery = document.getElementById(containerId);
    if (!mediaGallery) return;
    $(".gallery-item, .no-results-message").fadeOut(200).promise().done(function () {
      mediaGallery.innerHTML = ""; // コンテンツをクリア
      currentFilteredPosts = allPosts.filter(function (post) {
        if (type === 'image' && post.mediaType === 'image') return true;
        if (type === 'video' && post.mediaType === 'video') return true;
        if (type === 'all') return true;
        return false;
      });
      if (currentFilteredPosts.length === 0) {
        // メディアがない場合のメッセージを追加
        var noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = "該当するメディアがありません";
        noResultsMessage.classList.add("no-results-message");
        mediaGallery.appendChild(noResultsMessage);

        // メッセージをフェードイン
        $(".no-results-message").hide().fadeIn(200);
      } else {
        displayPage(1, containerId, false);
        $(".gallery-item").hide().fadeIn(200); // フェードイン追加
      }

      renderPaginationControls(paginationId, containerId);

      // フィルターボタンの状態を更新
      document.querySelectorAll('.filter__button').forEach(function (button) {
        return button.classList.remove('is-active');
      });
      var activeButton = type === 'image' ? document.getElementById('filter-images') : type === 'video' ? document.getElementById('filter-videos') : document.getElementById('filter-all');
      activeButton.classList.add('is-active');
    });
  }

  // イベントリスナーの設定
  // works 用
  document.getElementById('filter-images').addEventListener('click', function () {
    return filterMedia('image', 'works-gallery__grid', 'pagination-container');
  });
  document.getElementById('filter-videos').addEventListener('click', function () {
    return filterMedia('video', 'works-gallery__grid', 'pagination-container');
  });
  document.getElementById('filter-all').addEventListener('click', function () {
    return filterMedia('all', 'works-gallery__grid', 'pagination-container');
  });

  // original 用
  document.getElementById('filter-images').addEventListener('click', function () {
    return filterMedia('image', 'original-gallery__grid', 'pagination-container');
  });
  document.getElementById('filter-videos').addEventListener('click', function () {
    return filterMedia('video', 'original-gallery__grid', 'pagination-container');
  });
  document.getElementById('filter-all').addEventListener('click', function () {
    return filterMedia('all', 'original-gallery__grid', 'pagination-container');
  });

  // データ取得
  fetchTumblrMediaAll("works", "works-gallery__grid", "pagination-container");
  fetchTumblrMediaAll("original", "original-gallery__grid", "pagination-container");

  // 下端
});