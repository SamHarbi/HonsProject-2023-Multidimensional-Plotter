// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cWaoa":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "78fcd0ac8e9bd240";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1jwFz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
//Note: Adapted from https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html
//Imports will give errors if not using parcel
// @ts-ignore
var _fragmentGlsl = require("./shaders/fragment.glsl");
var _fragmentGlslDefault = parcelHelpers.interopDefault(_fragmentGlsl);
// @ts-ignore
var _vertexGlsl = require("./shaders/vertex.glsl");
var _vertexGlslDefault = parcelHelpers.interopDefault(_vertexGlsl);
var _model = require("./Model");
var _loader = require("./Loader");
var _text = require("./Text");
var _font = require("./Font");
var _glMatrix = require("gl-matrix");
let gl;
let canvas;
let program;
let modelUniformID;
let viewUniformID;
let projectionUniformID;
let lightToggleUniformID;
let positionAttributeID;
let normalAttributeID;
let iter = 0; //For a simple movment demo
let Monkey;
let Cube;
let Axis;
let label;
let label2;
let AxisLabels;
let f;
async function main() {
    //gl has already been checked so cannot be undefined- safe to cast
    gl = init();
    modelUniformID = gl.getUniformLocation(program, "model");
    viewUniformID = gl.getUniformLocation(program, "view");
    projectionUniformID = gl.getUniformLocation(program, "projection");
    lightToggleUniformID = gl.getUniformLocation(program, "light_toggle");
    let axisData = await (0, _loader.load_OBJ)("Axis");
    Axis = new (0, _model.Model)(positionAttributeID, normalAttributeID, gl.LINES);
    Axis.init(axisData[0], axisData[1], axisData[2], gl);
    let MonkeyData = await (0, _loader.load_OBJ)("Monkey");
    Monkey = new (0, _model.Model)(positionAttributeID, normalAttributeID, gl.TRIANGLES);
    Monkey.init(MonkeyData[0], MonkeyData[1], MonkeyData[2], gl);
    let CubeData = await (0, _loader.load_OBJ)("Cube3");
    Cube = new (0, _model.Model)(positionAttributeID, normalAttributeID, gl.TRIANGLES);
    Cube.init(CubeData[0], CubeData[1], CubeData[2], gl);
    label = new (0, _text.Text)("aa", gl.canvas.width, gl.canvas.height);
    label2 = new (0, _text.Text)("bb", gl.canvas.width, gl.canvas.height);
    AxisLabels = [];
    for(let i = 0; i < 33; i++)AxisLabels.push(new (0, _text.Text)("div", gl.canvas.width, gl.canvas.height));
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.FRONT);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LESS);
    gl.frontFace(gl.CW);
    gl.enable(gl.STENCIL_TEST);
    f = new (0, _font.Font)();
    f.make("IBMPlexSans-Regular");
    //Start render loop 
    window.requestAnimationFrame(render);
}
/*
    Render Loop 
*/ function render(timestamp) {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    iter = iter + 0.01;
    if (iter > 100) iter = 0;
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.enableVertexAttribArray(positionAttributeID);
    gl.enableVertexAttribArray(normalAttributeID);
    gl.uniform1i(lightToggleUniformID, 1);
    let projection = _glMatrix.mat4.create();
    projection = _glMatrix.mat4.perspective(projection, 0.5, gl.canvas.width / gl.canvas.height, 0.1, 700);
    gl.uniformMatrix4fv(projectionUniformID, false, projection);
    let view = _glMatrix.mat4.create();
    let viewPos = _glMatrix.vec3.create();
    let viewRotation = _glMatrix.vec3.create();
    let viewUp = _glMatrix.vec3.create();
    _glMatrix.mat4.lookAt(view, _glMatrix.vec3.set(viewPos, 1, 1, 3), _glMatrix.vec3.set(viewRotation, 0, 0, 0), _glMatrix.vec3.set(viewUp, 0, 1, 0));
    gl.uniformMatrix4fv(viewUniformID, false, view);
    // +++ DRAWING POLYGONS START +++
    // DRAW STENCIL CUBE
    gl.stencilFunc(gl.ALWAYS, 1, 0xFF);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
    gl.uniform1i(lightToggleUniformID, 0); // Don't Use Light
    // Bounding Cube
    let cubeModel = _glMatrix.mat4.create();
    _glMatrix.mat4.scale(cubeModel, cubeModel, [
        0.5,
        0.5,
        0.5
    ]);
    _glMatrix.mat4.translate(cubeModel, cubeModel, [
        0,
        0,
        0
    ]);
    gl.uniformMatrix4fv(modelUniformID, false, cubeModel);
    gl.cullFace(gl.BACK);
    Cube.render();
    gl.cullFace(gl.FRONT);
    gl.stencilFunc(gl.EQUAL, 1, 0xFF);
    gl.stencilOp(gl.REPLACE, gl.KEEP, gl.REPLACE);
    // ALL OTHER POLYGONS WITHIN BOUNDING CUBE START
    gl.uniform1i(lightToggleUniformID, 1); // Use Light
    let Axismodel = _glMatrix.mat4.create();
    let globalAxisModel = _glMatrix.mat4.create();
    _glMatrix.mat4.scale(globalAxisModel, globalAxisModel, [
        0.9,
        0.9,
        0.9
    ]);
    _glMatrix.mat4.translate(globalAxisModel, globalAxisModel, [
        -0.42,
        -0.42,
        -0.25
    ]);
    for(let i = 0; i < 11; i++){
        Axismodel = _glMatrix.mat4.create();
        _glMatrix.mat4.copy(Axismodel, globalAxisModel);
        _glMatrix.mat4.translate(Axismodel, Axismodel, [
            0.5,
            0,
            i / 10
        ]);
        _glMatrix.mat4.scale(Axismodel, Axismodel, [
            0.5,
            1,
            1
        ]);
        gl.uniformMatrix4fv(modelUniformID, false, Axismodel);
        Axis.render();
        _glMatrix.mat4.copy(Axismodel, globalAxisModel);
        _glMatrix.mat4.rotate(Axismodel, Axismodel, 1.5708, [
            0,
            1,
            0
        ]);
        _glMatrix.mat4.translate(Axismodel, Axismodel, [
            -0.5,
            0,
            i / 10
        ]);
        _glMatrix.mat4.scale(Axismodel, Axismodel, [
            0.5,
            1,
            0
        ]);
        gl.uniformMatrix4fv(modelUniformID, false, Axismodel);
        Axis.render();
    }
    _glMatrix.mat4.rotate(globalAxisModel, globalAxisModel, 1.5708, [
        1,
        0,
        0
    ]);
    _glMatrix.mat4.translate(globalAxisModel, globalAxisModel, [
        0,
        0,
        -1
    ]);
    for(let i1 = 0; i1 < 11; i1++){
        _glMatrix.mat4.copy(Axismodel, globalAxisModel);
        _glMatrix.mat4.translate(Axismodel, Axismodel, [
            0.5,
            0,
            i1 / 10
        ]);
        _glMatrix.mat4.scale(Axismodel, Axismodel, [
            0.5,
            1,
            1
        ]);
        gl.uniformMatrix4fv(modelUniformID, false, Axismodel);
        Axis.render();
        _glMatrix.mat4.copy(Axismodel, globalAxisModel);
        _glMatrix.mat4.rotate(Axismodel, Axismodel, 1.5708, [
            0,
            1,
            0
        ]);
        _glMatrix.mat4.translate(Axismodel, Axismodel, [
            -0.5,
            0,
            i1 / 10
        ]);
        _glMatrix.mat4.scale(Axismodel, Axismodel, [
            0.5,
            1,
            0
        ]);
        gl.uniformMatrix4fv(modelUniformID, false, Axismodel);
        Axis.render();
    }
    _glMatrix.mat4.rotate(globalAxisModel, globalAxisModel, 1.5708, [
        0,
        0,
        1
    ]);
    _glMatrix.mat4.translate(globalAxisModel, globalAxisModel, [
        0,
        0,
        0
    ]);
    for(let i2 = 0; i2 < 11; i2++){
        _glMatrix.mat4.copy(Axismodel, globalAxisModel);
        _glMatrix.mat4.translate(Axismodel, Axismodel, [
            0.5,
            0,
            i2 / 10
        ]);
        _glMatrix.mat4.scale(Axismodel, Axismodel, [
            0.5,
            1,
            1
        ]);
        gl.uniformMatrix4fv(modelUniformID, false, Axismodel);
        Axis.render();
        _glMatrix.mat4.copy(Axismodel, globalAxisModel);
        _glMatrix.mat4.rotate(Axismodel, Axismodel, 1.5708, [
            0,
            1,
            0
        ]);
        _glMatrix.mat4.translate(Axismodel, Axismodel, [
            -0.5,
            0,
            i2 / 10
        ]);
        _glMatrix.mat4.scale(Axismodel, Axismodel, [
            0.5,
            1,
            0
        ]);
        gl.uniformMatrix4fv(modelUniformID, false, Axismodel);
        Axis.render();
    }
    let Monkeymodel = _glMatrix.mat4.create();
    _glMatrix.mat4.scale(Monkeymodel, Monkeymodel, [
        0.2,
        0.2,
        0.2
    ]);
    _glMatrix.mat4.rotate(Monkeymodel, Monkeymodel, iter, [
        0.2,
        1,
        0
    ]);
    gl.uniformMatrix4fv(modelUniformID, false, Monkeymodel);
    Monkey.render();
    let point = _glMatrix.vec4.create();
    point = _glMatrix.vec4.clone([
        -0.5,
        -0.5,
        -0.390625,
        1
    ]);
    label.render(point, Monkeymodel, projection, view, "label");
    //Repeat
    window.requestAnimationFrame(render);
}
/*
    Initialise WebGL Context and setup everything before render loop
*/ function init() {
    //Get canvas and initalise it 
    canvas = document.querySelector("#glCanvas");
    const temp_gl = canvas.getContext("webgl", {
        stencil: true
    });
    // Only continue if WebGL is available and working
    if (temp_gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }
    //Create, compile and link shaders
    let vertex = createShader(temp_gl, temp_gl.VERTEX_SHADER, (0, _vertexGlslDefault.default));
    let fragment = createShader(temp_gl, temp_gl.FRAGMENT_SHADER, (0, _fragmentGlslDefault.default));
    program = createProgram(temp_gl, vertex, fragment);
    positionAttributeID = temp_gl.getAttribLocation(program, "a_position");
    normalAttributeID = temp_gl.getAttribLocation(program, "a_normal");
    return temp_gl;
}
function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) return shader;
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}
function createProgram(gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) return program;
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}
window.onload = main;

},{"./shaders/fragment.glsl":"6yofB","./shaders/vertex.glsl":"fWka7","./Model":"10WY5","./Loader":"blLsM","gl-matrix":"1mBhM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Text":"eAFEk","./Font":"kj6Xh"}],"6yofB":[function(require,module,exports) {
module.exports = "// fragment shaders don't have a default precision so we need\n  // to pick one. mediump is a good default\n  precision mediump float;\n#define GLSLIFY 1\n\n\n  uniform int light_toggle;\n\n  varying vec4 colour;\n  varying vec3 v_normal;\n  varying vec4 position;\n\n  vec3 lightdir = vec3(0.2, 0.2, 1);\n \n  void main() {\n    // gl_FragColor is a special variable a fragment shader\n    // is responsible for setting\n\n    vec3 normal = normalize(v_normal);\n    float light = dot(normal, lightdir);\n\n    \n    if(light_toggle == 1)\n    {\n          gl_FragColor = vec4(colour.x, colour.y, colour.z, 1);\n          gl_FragColor.rgb *= light;\n    }\n    else\n    {\n      //light = dot(normal, position.xyz);\n      gl_FragColor = vec4(0.8, 0.8, 0.8, 1);\n    }\n  }";

},{}],"fWka7":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\n// an attribute will receive data from a buffer\n  attribute vec3 a_position;\n  attribute vec3 a_normal;\n\n  uniform mat4 model, projection, view;\n\n  varying vec4 colour;\n  varying vec3 v_normal;\n  varying vec4 position;\n \n  // all shaders have a main function\n  void main() {\n \n    // gl_Position is a special variable a vertex shader\n    // is responsible for setting\n    gl_Position = projection * view * model * vec4(a_position, 1);\n\n    position = gl_Position;\n    \n    colour = vec4(1, 1, 0.5, 1.0);\n    v_normal = a_normal;\n  }\n\n";

},{}],"10WY5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
    This is a class definition for a Model Object, Which act's as a store and renderer for a 3D object
*/ parcelHelpers.export(exports, "Model", ()=>Model);
class Model {
    constructor(newPositionAttributeID, newNormalAttributeID, newDrawMode){
        this.positionAttributeID = newPositionAttributeID;
        this.normalAttributeID = newNormalAttributeID;
        this.drawmode = newDrawMode;
    }
    init(vertexData, indexData, normalData, glRef) {
        this.gl = glRef;
        this.numIndices = indexData.length;
        // Create a Vertex buffer and ensure it is valid
        var temp_positionBuffer = this.gl.createBuffer();
        if (temp_positionBuffer === null) {
            alert("An Error Occured while rendering (Vertex Buffer Undefined), Please try reloading the page");
            return;
        } else this.positionBuffer = temp_positionBuffer;
        // Create a Index buffer and ensure it is valid
        var temp_indexBuffer = this.gl.createBuffer();
        if (temp_indexBuffer === null) {
            alert("An Error Occured while rendering (Index Buffer Undefined), Please try reloading the page");
            return;
        } else this.indexBuffer = temp_indexBuffer;
        // Create a Normal buffer and ensure it is valid
        var temp_normalBuffer = this.gl.createBuffer();
        if (temp_normalBuffer === null) {
            alert("An Error Occured while rendering (Normal Buffer Undefined), Please try reloading the page");
            return;
        } else this.normalBuffer = temp_normalBuffer;
        //Bind Vertex Data to an array buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertexData), this.gl.STATIC_DRAW);
        console.log(new Float32Array(vertexData));
        //Bind Index Data to an array buffer
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), this.gl.STATIC_DRAW);
        console.log(new Uint16Array(indexData));
        //Bind Normal Data to an array buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(normalData), this.gl.STATIC_DRAW);
        console.log(new Float32Array(normalData));
    }
    render() {
        // Bind the position buffer.
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        var size = 3; // 3 components per iteration
        var type = this.gl.FLOAT; // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0; // start at the beginning of the buffer
        this.gl.vertexAttribPointer(this.positionAttributeID, size, type, normalize, stride, offset);
        //Bind the index buffer
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        // Bind the normal buffer.
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer);
        // Tell the attribute how to get data out of normalBuffer (ARRAY_BUFFER)
        var size = 3; // 3 components per iteration
        var type = this.gl.FLOAT; // the data is 32bit floating point values
        var normalize = false; // normalize the data (convert from 0-255 to 0-1)
        var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0; // start at the beginning of the buffer
        this.gl.vertexAttribPointer(this.normalAttributeID, size, type, normalize, stride, offset);
        var primitiveType = this.drawmode;
        var offset = 0;
        var count = this.numIndices;
        var indexType = this.gl.UNSIGNED_SHORT;
        //this.gl.drawArrays(primitiveType, offset, count);
        this.gl.drawElements(primitiveType, count, indexType, offset);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"blLsM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "load_OBJ", ()=>load_OBJ);
/*
    This is a collection of functions for dealing with loading in models 
*/ //Imports will give errors if not using parcel
// @ts-ignore
var _fs = require("fs");
var _fsDefault = parcelHelpers.interopDefault(_fs);
// @ts-ignore
var _path = require("path");
var _pathDefault = parcelHelpers.interopDefault(_path);
async function load_OBJ(model) {
    let raw = await ReadFile(model); //The Model to load
    const lines = raw.split("\n");
    let Vertices;
    let Indicies;
    let Normals;
    let Combined;
    Vertices = [];
    Indicies = [];
    Normals = [];
    Combined = [
        [],
        [],
        []
    ];
    for(let i = 0; i < lines.length; i++){
        const line = lines[i].trim(); //Remove uneeded data
        //Skip empty lines and comments
        if (line[i] === "" || line.startsWith("#")) continue;
        //Extract Vertex Values
        if (line.startsWith("v ")) {
            let vertices = line.split(" ");
            for(let j = 1; j < vertices.length; j++)Vertices.push(Number(vertices[j]));
        }
        //Extract Face Values
        if (line.startsWith("f ")) {
            let points = line.split(" ");
            for(let i1 = 1; i1 < points.length; i1++){
                let indicies = points[i1].split("/");
                // @ts-ignore
                Indicies.push(Number(indicies[0] - 1));
            }
        }
        //Extract Vertex Normal Values
        if (line.startsWith("vn ")) {
            let normals = line.split(" ");
            for(let i2 = 1; i2 < normals.length; i2++)Normals.push(Number(normals[i2]));
        }
    }
    Combined[0] = Combined[0].concat(Vertices);
    Combined[1] = Combined[1].concat(Indicies);
    Combined[2] = Combined[2].concat(Normals);
    console.log(Combined);
    return Combined;
}
//Read a file 
async function ReadFile(model) {
    if (model === "Monkey") {
        var raw = "# Blender v2.82 (sub 7) OBJ File: ''\r\n# www.blender.org\r\no Suzanne\r\nv 0.437500 0.164062 0.765625\r\nv -0.437500 0.164062 0.765625\r\nv 0.500000 0.093750 0.687500\r\nv -0.500000 0.093750 0.687500\r\nv 0.546875 0.054688 0.578125\r\nv -0.546875 0.054688 0.578125\r\nv 0.351562 -0.023438 0.617188\r\nv -0.351562 -0.023438 0.617188\r\nv 0.351562 0.031250 0.718750\r\nv -0.351562 0.031250 0.718750\r\nv 0.351562 0.132812 0.781250\r\nv -0.351562 0.132812 0.781250\r\nv 0.273438 0.164062 0.796875\r\nv -0.273438 0.164062 0.796875\r\nv 0.203125 0.093750 0.742188\r\nv -0.203125 0.093750 0.742188\r\nv 0.156250 0.054688 0.648438\r\nv -0.156250 0.054688 0.648438\r\nv 0.078125 0.242188 0.656250\r\nv -0.078125 0.242188 0.656250\r\nv 0.140625 0.242188 0.742188\r\nv -0.140625 0.242188 0.742188\r\nv 0.242188 0.242188 0.796875\r\nv -0.242188 0.242188 0.796875\r\nv 0.273438 0.328125 0.796875\r\nv -0.273438 0.328125 0.796875\r\nv 0.203125 0.390625 0.742188\r\nv -0.203125 0.390625 0.742188\r\nv 0.156250 0.437500 0.648438\r\nv -0.156250 0.437500 0.648438\r\nv 0.351562 0.515625 0.617188\r\nv -0.351562 0.515625 0.617188\r\nv 0.351562 0.453125 0.718750\r\nv -0.351562 0.453125 0.718750\r\nv 0.351562 0.359375 0.781250\r\nv -0.351562 0.359375 0.781250\r\nv 0.437500 0.328125 0.765625\r\nv -0.437500 0.328125 0.765625\r\nv 0.500000 0.390625 0.687500\r\nv -0.500000 0.390625 0.687500\r\nv 0.546875 0.437500 0.578125\r\nv -0.546875 0.437500 0.578125\r\nv 0.625000 0.242188 0.562500\r\nv -0.625000 0.242188 0.562500\r\nv 0.562500 0.242188 0.671875\r\nv -0.562500 0.242188 0.671875\r\nv 0.468750 0.242188 0.757812\r\nv -0.468750 0.242188 0.757812\r\nv 0.476562 0.242188 0.773438\r\nv -0.476562 0.242188 0.773438\r\nv 0.445312 0.335938 0.781250\r\nv -0.445312 0.335938 0.781250\r\nv 0.351562 0.375000 0.804688\r\nv -0.351562 0.375000 0.804688\r\nv 0.265625 0.335938 0.820312\r\nv -0.265625 0.335938 0.820312\r\nv 0.226562 0.242188 0.820312\r\nv -0.226562 0.242188 0.820312\r\nv 0.265625 0.156250 0.820312\r\nv -0.265625 0.156250 0.820312\r\nv 0.351562 0.242188 0.828125\r\nv -0.351562 0.242188 0.828125\r\nv 0.351562 0.117188 0.804688\r\nv -0.351562 0.117188 0.804688\r\nv 0.445312 0.156250 0.781250\r\nv -0.445312 0.156250 0.781250\r\nv 0.000000 0.429688 0.742188\r\nv 0.000000 0.351562 0.820312\r\nv 0.000000 -0.679688 0.734375\r\nv 0.000000 -0.320312 0.781250\r\nv 0.000000 -0.187500 0.796875\r\nv 0.000000 -0.773438 0.718750\r\nv 0.000000 0.406250 0.601562\r\nv 0.000000 0.570312 0.570312\r\nv 0.000000 0.898438 -0.546875\r\nv 0.000000 0.562500 -0.851562\r\nv 0.000000 0.070312 -0.828125\r\nv 0.000000 -0.382812 -0.351562\r\nv 0.203125 -0.187500 0.562500\r\nv -0.203125 -0.187500 0.562500\r\nv 0.312500 -0.437500 0.570312\r\nv -0.312500 -0.437500 0.570312\r\nv 0.351562 -0.695312 0.570312\r\nv -0.351562 -0.695312 0.570312\r\nv 0.367188 -0.890625 0.531250\r\nv -0.367188 -0.890625 0.531250\r\nv 0.328125 -0.945312 0.523438\r\nv -0.328125 -0.945312 0.523438\r\nv 0.179688 -0.968750 0.554688\r\nv -0.179688 -0.968750 0.554688\r\nv 0.000000 -0.984375 0.578125\r\nv 0.437500 -0.140625 0.531250\r\nv -0.437500 -0.140625 0.531250\r\nv 0.632812 -0.039062 0.539062\r\nv -0.632812 -0.039062 0.539062\r\nv 0.828125 0.148438 0.445312\r\nv -0.828125 0.148438 0.445312\r\nv 0.859375 0.429688 0.593750\r\nv -0.859375 0.429688 0.593750\r\nv 0.710938 0.484375 0.625000\r\nv -0.710938 0.484375 0.625000\r\nv 0.492188 0.601562 0.687500\r\nv -0.492188 0.601562 0.687500\r\nv 0.320312 0.757812 0.734375\r\nv -0.320312 0.757812 0.734375\r\nv 0.156250 0.718750 0.757812\r\nv -0.156250 0.718750 0.757812\r\nv 0.062500 0.492188 0.750000\r\nv -0.062500 0.492188 0.750000\r\nv 0.164062 0.414062 0.773438\r\nv -0.164062 0.414062 0.773438\r\nv 0.125000 0.304688 0.765625\r\nv -0.125000 0.304688 0.765625\r\nv 0.203125 0.093750 0.742188\r\nv -0.203125 0.093750 0.742188\r\nv 0.375000 0.015625 0.703125\r\nv -0.375000 0.015625 0.703125\r\nv 0.492188 0.062500 0.671875\r\nv -0.492188 0.062500 0.671875\r\nv 0.625000 0.187500 0.648438\r\nv -0.625000 0.187500 0.648438\r\nv 0.640625 0.296875 0.648438\r\nv -0.640625 0.296875 0.648438\r\nv 0.601562 0.375000 0.664062\r\nv -0.601562 0.375000 0.664062\r\nv 0.429688 0.437500 0.718750\r\nv -0.429688 0.437500 0.718750\r\nv 0.250000 0.468750 0.757812\r\nv -0.250000 0.468750 0.757812\r\nv 0.000000 -0.765625 0.734375\r\nv 0.109375 -0.718750 0.734375\r\nv -0.109375 -0.718750 0.734375\r\nv 0.117188 -0.835938 0.710938\r\nv -0.117188 -0.835938 0.710938\r\nv 0.062500 -0.882812 0.695312\r\nv -0.062500 -0.882812 0.695312\r\nv 0.000000 -0.890625 0.687500\r\nv 0.000000 -0.195312 0.750000\r\nv 0.000000 -0.140625 0.742188\r\nv 0.101562 -0.148438 0.742188\r\nv -0.101562 -0.148438 0.742188\r\nv 0.125000 -0.226562 0.750000\r\nv -0.125000 -0.226562 0.750000\r\nv 0.085938 -0.289062 0.742188\r\nv -0.085938 -0.289062 0.742188\r\nv 0.398438 -0.046875 0.671875\r\nv -0.398438 -0.046875 0.671875\r\nv 0.617188 0.054688 0.625000\r\nv -0.617188 0.054688 0.625000\r\nv 0.726562 0.203125 0.601562\r\nv -0.726562 0.203125 0.601562\r\nv 0.742188 0.375000 0.656250\r\nv -0.742188 0.375000 0.656250\r\nv 0.687500 0.414062 0.726562\r\nv -0.687500 0.414062 0.726562\r\nv 0.437500 0.546875 0.796875\r\nv -0.437500 0.546875 0.796875\r\nv 0.312500 0.640625 0.835938\r\nv -0.312500 0.640625 0.835938\r\nv 0.203125 0.617188 0.851562\r\nv -0.203125 0.617188 0.851562\r\nv 0.101562 0.429688 0.843750\r\nv -0.101562 0.429688 0.843750\r\nv 0.125000 -0.101562 0.812500\r\nv -0.125000 -0.101562 0.812500\r\nv 0.210938 -0.445312 0.710938\r\nv -0.210938 -0.445312 0.710938\r\nv 0.250000 -0.703125 0.687500\r\nv -0.250000 -0.703125 0.687500\r\nv 0.265625 -0.820312 0.664062\r\nv -0.265625 -0.820312 0.664062\r\nv 0.234375 -0.914062 0.632812\r\nv -0.234375 -0.914062 0.632812\r\nv 0.164062 -0.929688 0.632812\r\nv -0.164062 -0.929688 0.632812\r\nv 0.000000 -0.945312 0.640625\r\nv 0.000000 0.046875 0.726562\r\nv 0.000000 0.210938 0.765625\r\nv 0.328125 0.476562 0.742188\r\nv -0.328125 0.476562 0.742188\r\nv 0.164062 0.140625 0.750000\r\nv -0.164062 0.140625 0.750000\r\nv 0.132812 0.210938 0.757812\r\nv -0.132812 0.210938 0.757812\r\nv 0.117188 -0.687500 0.734375\r\nv -0.117188 -0.687500 0.734375\r\nv 0.078125 -0.445312 0.750000\r\nv -0.078125 -0.445312 0.750000\r\nv 0.000000 -0.445312 0.750000\r\nv 0.000000 -0.328125 0.742188\r\nv 0.093750 -0.273438 0.781250\r\nv -0.093750 -0.273438 0.781250\r\nv 0.132812 -0.226562 0.796875\r\nv -0.132812 -0.226562 0.796875\r\nv 0.109375 -0.132812 0.781250\r\nv -0.109375 -0.132812 0.781250\r\nv 0.039062 -0.125000 0.781250\r\nv -0.039062 -0.125000 0.781250\r\nv 0.000000 -0.203125 0.828125\r\nv 0.046875 -0.148438 0.812500\r\nv -0.046875 -0.148438 0.812500\r\nv 0.093750 -0.156250 0.812500\r\nv -0.093750 -0.156250 0.812500\r\nv 0.109375 -0.226562 0.828125\r\nv -0.109375 -0.226562 0.828125\r\nv 0.078125 -0.250000 0.804688\r\nv -0.078125 -0.250000 0.804688\r\nv 0.000000 -0.289062 0.804688\r\nv 0.257812 -0.312500 0.554688\r\nv -0.257812 -0.312500 0.554688\r\nv 0.164062 -0.242188 0.710938\r\nv -0.164062 -0.242188 0.710938\r\nv 0.179688 -0.312500 0.710938\r\nv -0.179688 -0.312500 0.710938\r\nv 0.234375 -0.250000 0.554688\r\nv -0.234375 -0.250000 0.554688\r\nv 0.000000 -0.875000 0.687500\r\nv 0.046875 -0.867188 0.687500\r\nv -0.046875 -0.867188 0.687500\r\nv 0.093750 -0.820312 0.710938\r\nv -0.093750 -0.820312 0.710938\r\nv 0.093750 -0.742188 0.726562\r\nv -0.093750 -0.742188 0.726562\r\nv 0.000000 -0.781250 0.656250\r\nv 0.093750 -0.750000 0.664062\r\nv -0.093750 -0.750000 0.664062\r\nv 0.093750 -0.812500 0.640625\r\nv -0.093750 -0.812500 0.640625\r\nv 0.046875 -0.851562 0.632812\r\nv -0.046875 -0.851562 0.632812\r\nv 0.000000 -0.859375 0.632812\r\nv 0.171875 0.218750 0.781250\r\nv -0.171875 0.218750 0.781250\r\nv 0.187500 0.156250 0.773438\r\nv -0.187500 0.156250 0.773438\r\nv 0.335938 0.429688 0.757812\r\nv -0.335938 0.429688 0.757812\r\nv 0.273438 0.421875 0.773438\r\nv -0.273438 0.421875 0.773438\r\nv 0.421875 0.398438 0.773438\r\nv -0.421875 0.398438 0.773438\r\nv 0.562500 0.351562 0.695312\r\nv -0.562500 0.351562 0.695312\r\nv 0.585938 0.289062 0.687500\r\nv -0.585938 0.289062 0.687500\r\nv 0.578125 0.195312 0.679688\r\nv -0.578125 0.195312 0.679688\r\nv 0.476562 0.101562 0.718750\r\nv -0.476562 0.101562 0.718750\r\nv 0.375000 0.062500 0.742188\r\nv -0.375000 0.062500 0.742188\r\nv 0.226562 0.109375 0.781250\r\nv -0.226562 0.109375 0.781250\r\nv 0.179688 0.296875 0.781250\r\nv -0.179688 0.296875 0.781250\r\nv 0.210938 0.375000 0.781250\r\nv -0.210938 0.375000 0.781250\r\nv 0.234375 0.359375 0.757812\r\nv -0.234375 0.359375 0.757812\r\nv 0.195312 0.296875 0.757812\r\nv -0.195312 0.296875 0.757812\r\nv 0.242188 0.125000 0.757812\r\nv -0.242188 0.125000 0.757812\r\nv 0.375000 0.085938 0.726562\r\nv -0.375000 0.085938 0.726562\r\nv 0.460938 0.117188 0.703125\r\nv -0.460938 0.117188 0.703125\r\nv 0.546875 0.210938 0.671875\r\nv -0.546875 0.210938 0.671875\r\nv 0.554688 0.281250 0.671875\r\nv -0.554688 0.281250 0.671875\r\nv 0.531250 0.335938 0.679688\r\nv -0.531250 0.335938 0.679688\r\nv 0.414062 0.390625 0.750000\r\nv -0.414062 0.390625 0.750000\r\nv 0.281250 0.398438 0.765625\r\nv -0.281250 0.398438 0.765625\r\nv 0.335938 0.406250 0.750000\r\nv -0.335938 0.406250 0.750000\r\nv 0.203125 0.171875 0.750000\r\nv -0.203125 0.171875 0.750000\r\nv 0.195312 0.226562 0.750000\r\nv -0.195312 0.226562 0.750000\r\nv 0.109375 0.460938 0.609375\r\nv -0.109375 0.460938 0.609375\r\nv 0.195312 0.664062 0.617188\r\nv -0.195312 0.664062 0.617188\r\nv 0.335938 0.687500 0.593750\r\nv -0.335938 0.687500 0.593750\r\nv 0.484375 0.554688 0.554688\r\nv -0.484375 0.554688 0.554688\r\nv 0.679688 0.453125 0.492188\r\nv -0.679688 0.453125 0.492188\r\nv 0.796875 0.406250 0.460938\r\nv -0.796875 0.406250 0.460938\r\nv 0.773438 0.164062 0.375000\r\nv -0.773438 0.164062 0.375000\r\nv 0.601562 0.000000 0.414062\r\nv -0.601562 0.000000 0.414062\r\nv 0.437500 -0.093750 0.468750\r\nv -0.437500 -0.093750 0.468750\r\nv 0.000000 0.898438 0.289062\r\nv 0.000000 0.984375 -0.078125\r\nv 0.000000 -0.195312 -0.671875\r\nv 0.000000 -0.460938 0.187500\r\nv 0.000000 -0.976562 0.460938\r\nv 0.000000 -0.804688 0.343750\r\nv 0.000000 -0.570312 0.320312\r\nv 0.000000 -0.484375 0.281250\r\nv 0.851562 0.234375 0.054688\r\nv -0.851562 0.234375 0.054688\r\nv 0.859375 0.320312 -0.046875\r\nv -0.859375 0.320312 -0.046875\r\nv 0.773438 0.265625 -0.437500\r\nv -0.773438 0.265625 -0.437500\r\nv 0.460938 0.437500 -0.703125\r\nv -0.460938 0.437500 -0.703125\r\nv 0.734375 -0.046875 0.070312\r\nv -0.734375 -0.046875 0.070312\r\nv 0.593750 -0.125000 -0.164062\r\nv -0.593750 -0.125000 -0.164062\r\nv 0.640625 -0.007812 -0.429688\r\nv -0.640625 -0.007812 -0.429688\r\nv 0.335938 0.054688 -0.664062\r\nv -0.335938 0.054688 -0.664062\r\nv 0.234375 -0.351562 0.406250\r\nv -0.234375 -0.351562 0.406250\r\nv 0.179688 -0.414062 0.257812\r\nv -0.179688 -0.414062 0.257812\r\nv 0.289062 -0.710938 0.382812\r\nv -0.289062 -0.710938 0.382812\r\nv 0.250000 -0.500000 0.390625\r\nv -0.250000 -0.500000 0.390625\r\nv 0.328125 -0.914062 0.398438\r\nv -0.328125 -0.914062 0.398438\r\nv 0.140625 -0.757812 0.367188\r\nv -0.140625 -0.757812 0.367188\r\nv 0.125000 -0.539062 0.359375\r\nv -0.125000 -0.539062 0.359375\r\nv 0.164062 -0.945312 0.437500\r\nv -0.164062 -0.945312 0.437500\r\nv 0.218750 -0.281250 0.429688\r\nv -0.218750 -0.281250 0.429688\r\nv 0.210938 -0.226562 0.468750\r\nv -0.210938 -0.226562 0.468750\r\nv 0.203125 -0.171875 0.500000\r\nv -0.203125 -0.171875 0.500000\r\nv 0.210938 -0.390625 0.164062\r\nv -0.210938 -0.390625 0.164062\r\nv 0.296875 -0.312500 -0.265625\r\nv -0.296875 -0.312500 -0.265625\r\nv 0.343750 -0.148438 -0.539062\r\nv -0.343750 -0.148438 -0.539062\r\nv 0.453125 0.867188 -0.382812\r\nv -0.453125 0.867188 -0.382812\r\nv 0.453125 0.929688 -0.070312\r\nv -0.453125 0.929688 -0.070312\r\nv 0.453125 0.851562 0.234375\r\nv -0.453125 0.851562 0.234375\r\nv 0.460938 0.523438 0.429688\r\nv -0.460938 0.523438 0.429688\r\nv 0.726562 0.406250 0.335938\r\nv -0.726562 0.406250 0.335938\r\nv 0.632812 0.453125 0.281250\r\nv -0.632812 0.453125 0.281250\r\nv 0.640625 0.703125 0.054688\r\nv -0.640625 0.703125 0.054688\r\nv 0.796875 0.562500 0.125000\r\nv -0.796875 0.562500 0.125000\r\nv 0.796875 0.617188 -0.117188\r\nv -0.796875 0.617188 -0.117188\r\nv 0.640625 0.750000 -0.195312\r\nv -0.640625 0.750000 -0.195312\r\nv 0.640625 0.679688 -0.445312\r\nv -0.640625 0.679688 -0.445312\r\nv 0.796875 0.539062 -0.359375\r\nv -0.796875 0.539062 -0.359375\r\nv 0.617188 0.328125 -0.585938\r\nv -0.617188 0.328125 -0.585938\r\nv 0.484375 0.023438 -0.546875\r\nv -0.484375 0.023438 -0.546875\r\nv 0.820312 0.328125 -0.203125\r\nv -0.820312 0.328125 -0.203125\r\nv 0.406250 -0.171875 0.148438\r\nv -0.406250 -0.171875 0.148438\r\nv 0.429688 -0.195312 -0.210938\r\nv -0.429688 -0.195312 -0.210938\r\nv 0.890625 0.406250 -0.234375\r\nv -0.890625 0.406250 -0.234375\r\nv 0.773438 -0.140625 -0.125000\r\nv -0.773438 -0.140625 -0.125000\r\nv 1.039062 -0.101562 -0.328125\r\nv -1.039062 -0.101562 -0.328125\r\nv 1.281250 0.054688 -0.429688\r\nv -1.281250 0.054688 -0.429688\r\nv 1.351562 0.320312 -0.421875\r\nv -1.351562 0.320312 -0.421875\r\nv 1.234375 0.507812 -0.421875\r\nv -1.234375 0.507812 -0.421875\r\nv 1.023438 0.476562 -0.312500\r\nv -1.023438 0.476562 -0.312500\r\nv 1.015625 0.414062 -0.289062\r\nv -1.015625 0.414062 -0.289062\r\nv 1.187500 0.437500 -0.390625\r\nv -1.187500 0.437500 -0.390625\r\nv 1.265625 0.289062 -0.406250\r\nv -1.265625 0.289062 -0.406250\r\nv 1.210938 0.078125 -0.406250\r\nv -1.210938 0.078125 -0.406250\r\nv 1.031250 -0.039062 -0.304688\r\nv -1.031250 -0.039062 -0.304688\r\nv 0.828125 -0.070312 -0.132812\r\nv -0.828125 -0.070312 -0.132812\r\nv 0.921875 0.359375 -0.218750\r\nv -0.921875 0.359375 -0.218750\r\nv 0.945312 0.304688 -0.289062\r\nv -0.945312 0.304688 -0.289062\r\nv 0.882812 -0.023438 -0.210938\r\nv -0.882812 -0.023438 -0.210938\r\nv 1.039062 0.000000 -0.367188\r\nv -1.039062 0.000000 -0.367188\r\nv 1.187500 0.093750 -0.445312\r\nv -1.187500 0.093750 -0.445312\r\nv 1.234375 0.250000 -0.445312\r\nv -1.234375 0.250000 -0.445312\r\nv 1.171875 0.359375 -0.437500\r\nv -1.171875 0.359375 -0.437500\r\nv 1.023438 0.343750 -0.359375\r\nv -1.023438 0.343750 -0.359375\r\nv 0.843750 0.289062 -0.210938\r\nv -0.843750 0.289062 -0.210938\r\nv 0.835938 0.171875 -0.273438\r\nv -0.835938 0.171875 -0.273438\r\nv 0.757812 0.093750 -0.273438\r\nv -0.757812 0.093750 -0.273438\r\nv 0.820312 0.085938 -0.273438\r\nv -0.820312 0.085938 -0.273438\r\nv 0.843750 0.015625 -0.273438\r\nv -0.843750 0.015625 -0.273438\r\nv 0.812500 -0.015625 -0.273438\r\nv -0.812500 -0.015625 -0.273438\r\nv 0.726562 0.000000 -0.070312\r\nv -0.726562 0.000000 -0.070312\r\nv 0.718750 -0.023438 -0.171875\r\nv -0.718750 -0.023438 -0.171875\r\nv 0.718750 0.039062 -0.187500\r\nv -0.718750 0.039062 -0.187500\r\nv 0.796875 0.203125 -0.210938\r\nv -0.796875 0.203125 -0.210938\r\nv 0.890625 0.242188 -0.265625\r\nv -0.890625 0.242188 -0.265625\r\nv 0.890625 0.234375 -0.320312\r\nv -0.890625 0.234375 -0.320312\r\nv 0.812500 -0.015625 -0.320312\r\nv -0.812500 -0.015625 -0.320312\r\nv 0.851562 0.015625 -0.320312\r\nv -0.851562 0.015625 -0.320312\r\nv 0.828125 0.078125 -0.320312\r\nv -0.828125 0.078125 -0.320312\r\nv 0.765625 0.093750 -0.320312\r\nv -0.765625 0.093750 -0.320312\r\nv 0.843750 0.171875 -0.320312\r\nv -0.843750 0.171875 -0.320312\r\nv 1.039062 0.328125 -0.414062\r\nv -1.039062 0.328125 -0.414062\r\nv 1.187500 0.343750 -0.484375\r\nv -1.187500 0.343750 -0.484375\r\nv 1.257812 0.242188 -0.492188\r\nv -1.257812 0.242188 -0.492188\r\nv 1.210938 0.085938 -0.484375\r\nv -1.210938 0.085938 -0.484375\r\nv 1.046875 0.000000 -0.421875\r\nv -1.046875 0.000000 -0.421875\r\nv 0.882812 -0.015625 -0.265625\r\nv -0.882812 -0.015625 -0.265625\r\nv 0.953125 0.289062 -0.343750\r\nv -0.953125 0.289062 -0.343750\r\nv 0.890625 0.109375 -0.328125\r\nv -0.890625 0.109375 -0.328125\r\nv 0.937500 0.062500 -0.335938\r\nv -0.937500 0.062500 -0.335938\r\nv 1.000000 0.125000 -0.367188\r\nv -1.000000 0.125000 -0.367188\r\nv 0.960938 0.171875 -0.351562\r\nv -0.960938 0.171875 -0.351562\r\nv 1.015625 0.234375 -0.375000\r\nv -1.015625 0.234375 -0.375000\r\nv 1.054688 0.187500 -0.382812\r\nv -1.054688 0.187500 -0.382812\r\nv 1.109375 0.210938 -0.390625\r\nv -1.109375 0.210938 -0.390625\r\nv 1.085938 0.273438 -0.390625\r\nv -1.085938 0.273438 -0.390625\r\nv 1.023438 0.437500 -0.484375\r\nv -1.023438 0.437500 -0.484375\r\nv 1.250000 0.468750 -0.546875\r\nv -1.250000 0.468750 -0.546875\r\nv 1.367188 0.296875 -0.500000\r\nv -1.367188 0.296875 -0.500000\r\nv 1.312500 0.054688 -0.531250\r\nv -1.312500 0.054688 -0.531250\r\nv 1.039062 -0.085938 -0.492188\r\nv -1.039062 -0.085938 -0.492188\r\nv 0.789062 -0.125000 -0.328125\r\nv -0.789062 -0.125000 -0.328125\r\nv 0.859375 0.382812 -0.382812\r\nv -0.859375 0.382812 -0.382812\r\nvt 0.890955 0.590063\r\nvt 0.860081 0.560115\r\nvt 0.904571 0.559404\r\nvt 0.856226 0.850547\r\nvt 0.888398 0.821999\r\nvt 0.900640 0.853232\r\nvt 0.853018 0.521562\r\nvt 0.920166 0.524546\r\nvt 0.847458 0.888748\r\nvt 0.914672 0.888748\r\nvt 0.798481 0.569535\r\nvt 0.795104 0.838402\r\nvt 0.870622 0.589649\r\nvt 0.828900 0.590771\r\nvt 0.826436 0.818537\r\nvt 0.868067 0.821510\r\nvt 0.854402 0.604754\r\nvt 0.828171 0.633354\r\nvt 0.827598 0.775964\r\nvt 0.852534 0.805700\r\nvt 0.791018 0.645443\r\nvt 0.791018 0.762238\r\nvt 0.855181 0.668527\r\nvt 0.856142 0.742025\r\nvt 0.844839 0.707525\r\nvt 0.854107 0.625459\r\nvt 0.853157 0.785002\r\nvt 0.867508 0.642291\r\nvt 0.900375 0.666964\r\nvt 0.901223 0.745592\r\nvt 0.867293 0.768782\r\nvt 0.842358 0.702491\r\nvt 0.921180 0.713713\r\nvt 0.931889 0.636832\r\nvt 0.918898 0.699697\r\nvt 0.931368 0.777093\r\nvt 0.968213 0.770220\r\nvt 0.905882 0.627902\r\nvt 0.890474 0.641909\r\nvt 0.904990 0.784860\r\nvt 0.906232 0.605742\r\nvt 0.904357 0.807013\r\nvt 0.931250 0.820926\r\nvt 0.933717 0.593037\r\nvt 0.968392 0.645333\r\nvt 0.965038 0.841671\r\nvt 0.968392 0.573812\r\nvt 0.889591 0.593275\r\nvt 0.887178 0.818729\r\nvt 0.900583 0.804677\r\nvt 0.902359 0.607909\r\nvt 0.898822 0.786233\r\nvt 0.899781 0.626257\r\nvt 0.890219 0.770183\r\nvt 0.887351 0.775442\r\nvt 0.887842 0.636527\r\nvt 0.870376 0.775972\r\nvt 0.859881 0.623942\r\nvt 0.870908 0.635245\r\nvt 0.858859 0.786774\r\nvt 0.859664 0.608186\r\nvt 0.857942 0.802505\r\nvt 0.871664 0.593961\r\nvt 0.869299 0.817249\r\nvt 0.879400 0.616512\r\nvt 0.878029 0.795063\r\nvt 0.536419 0.062072\r\nvt 0.518916 0.050294\r\nvt 0.540260 0.053805\r\nvt 0.501452 0.062043\r\nvt 0.518925 0.059681\r\nvt 0.542788 0.064089\r\nvt 0.551930 0.058338\r\nvt 0.495083 0.064047\r\nvt 0.497626 0.053770\r\nvt 0.555073 0.061900\r\nvt 0.482805 0.061829\r\nvt 0.485955 0.058273\r\nvt 0.563812 0.076586\r\nvt 0.546290 0.072669\r\nvt 0.491565 0.072625\r\nvt 0.474014 0.076511\r\nvt 0.583135 0.108495\r\nvt 0.548333 0.084893\r\nvt 0.489507 0.084858\r\nvt 0.454527 0.108481\r\nvt 0.605512 0.165134\r\nvt 0.621513 0.227818\r\nvt 0.553118 0.209599\r\nvt 0.416514 0.229490\r\nvt 0.432024 0.165644\r\nvt 0.485339 0.210053\r\nvt 0.676379 0.233241\r\nvt 0.647395 0.200502\r\nvt 0.360308 0.235899\r\nvt 0.372747 0.256357\r\nvt 0.683908 0.279995\r\nvt 0.664761 0.253225\r\nvt 0.353696 0.284606\r\nvt 0.707254 0.310054\r\nvt 0.715342 0.265392\r\nvt 0.330721 0.316853\r\nvt 0.351187 0.317440\r\nvt 0.697446 0.332673\r\nvt 0.687515 0.311539\r\nvt 0.341964 0.339667\r\nvt 0.362723 0.329722\r\nvt 0.662817 0.372521\r\nvt 0.676824 0.323937\r\nvt 0.379297 0.378686\r\nvt 0.402772 0.362131\r\nvt 0.618316 0.375151\r\nvt 0.639050 0.357330\r\nvt 0.424583 0.379267\r\nvt 0.604826 0.397804\r\nvt 0.626842 0.395792\r\nvt 0.439252 0.401540\r\nvt 0.442396 0.381222\r\nvt 0.553095 0.390512\r\nvt 0.600808 0.377857\r\nvt 0.490934 0.391862\r\nvt 0.482938 0.358497\r\nvt 0.521923 0.386009\r\nvt 0.559674 0.357011\r\nvt 0.521086 0.343868\r\nvt 0.599845 0.344815\r\nvt 0.577279 0.340156\r\nvt 0.441977 0.347815\r\nvt 0.615546 0.342005\r\nvt 0.634472 0.332311\r\nvt 0.425972 0.345582\r\nvt 0.662406 0.312804\r\nvt 0.406362 0.336480\r\nvt 0.668440 0.297958\r\nvt 0.377061 0.317685\r\nvt 0.664101 0.277872\r\nvt 0.370304 0.302644\r\nvt 0.639236 0.253047\r\nvt 0.374100 0.281778\r\nvt 0.613992 0.242662\r\nvt 0.398938 0.255633\r\nvt 0.572941 0.258564\r\nvt 0.424464 0.244473\r\nvt 0.519760 0.248864\r\nvt 0.466409 0.259709\r\nvt 0.558527 0.316594\r\nvt 0.482619 0.317843\r\nvt 0.520277 0.294764\r\nvt 0.556923 0.291214\r\nvt 0.483433 0.292249\r\nvt 0.563905 0.272007\r\nvt 0.475886 0.273078\r\nvt 0.525483 0.068967\r\nvt 0.512375 0.068956\r\nvt 0.531231 0.073829\r\nvt 0.506626 0.073811\r\nvt 0.531019 0.087431\r\nvt 0.555621 0.121749\r\nvt 0.532669 0.090920\r\nvt 0.505177 0.090908\r\nvt 0.482177 0.121781\r\nvt 0.506827 0.087416\r\nvt 0.518981 0.151749\r\nvt 0.532042 0.127713\r\nvt 0.538112 0.158382\r\nvt 0.505828 0.127728\r\nvt 0.518941 0.128358\r\nvt 0.518925 0.093952\r\nvt 0.518927 0.085180\r\nvt 0.548362 0.173560\r\nvt 0.535214 0.166808\r\nvt 0.502799 0.166857\r\nvt 0.489683 0.173693\r\nvt 0.499851 0.158434\r\nvt 0.544281 0.193366\r\nvt 0.537959 0.175966\r\nvt 0.500100 0.176033\r\nvt 0.493996 0.193428\r\nvt 0.528757 0.191785\r\nvt 0.519841 0.200843\r\nvt 0.509219 0.191626\r\nvt 0.500890 0.187571\r\nvt 0.519132 0.185382\r\nvt 0.517577 0.190607\r\nvt 0.518998 0.159028\r\nvt 0.519016 0.165599\r\nvt 0.506910 0.171667\r\nvt 0.528222 0.186316\r\nvt 0.509787 0.186260\r\nvt 0.533528 0.184215\r\nvt 0.537248 0.187577\r\nvt 0.504547 0.184206\r\nvt 0.504604 0.176791\r\nvt 0.531131 0.171631\r\nvt 0.533449 0.176739\r\nvt 0.519099 0.179457\r\nvt 0.561572 0.167779\r\nvt 0.476363 0.167996\r\nvt 0.478371 0.149447\r\nvt 0.559475 0.149319\r\nvt 0.596138 0.133426\r\nvt 0.441395 0.133592\r\nvt 0.601169 0.147885\r\nvt 0.436337 0.148194\r\nvt 0.528933 0.084957\r\nvt 0.508915 0.084945\r\nvt 0.518925 0.083865\r\nvt 0.529036 0.075429\r\nvt 0.508820 0.075415\r\nvt 0.523751 0.070508\r\nvt 0.514106 0.070501\r\nvt 0.518928 0.067899\r\nvt 0.518929 0.069468\r\nvt 0.518928 0.074259\r\nvt 0.516297 0.074966\r\nvt 0.524236 0.076691\r\nvt 0.521560 0.074970\r\nvt 0.513619 0.076684\r\nvt 0.524601 0.079886\r\nvt 0.513252 0.079879\r\nvt 0.518926 0.079331\r\nvt 0.571787 0.277295\r\nvt 0.568351 0.292904\r\nvt 0.468070 0.278617\r\nvt 0.471978 0.294282\r\nvt 0.573085 0.311386\r\nvt 0.467790 0.313081\r\nvt 0.584855 0.327708\r\nvt 0.456477 0.329961\r\nvt 0.458737 0.268049\r\nvt 0.611720 0.255725\r\nvt 0.580734 0.266620\r\nvt 0.427062 0.257728\r\nvt 0.632494 0.262853\r\nvt 0.406068 0.265508\r\nvt 0.653658 0.279971\r\nvt 0.384904 0.283634\r\nvt 0.656064 0.297636\r\nvt 0.383015 0.301864\r\nvt 0.386858 0.314615\r\nvt 0.652752 0.310186\r\nvt 0.411556 0.327673\r\nvt 0.614408 0.331972\r\nvt 0.629040 0.323864\r\nvt 0.426727 0.335361\r\nvt 0.601033 0.333624\r\nvt 0.440344 0.336537\r\nvt 0.601799 0.328453\r\nvt 0.439372 0.331331\r\nvt 0.450408 0.323919\r\nvt 0.613335 0.327083\r\nvt 0.427623 0.330358\r\nvt 0.626851 0.320513\r\nvt 0.413648 0.324175\r\nvt 0.646248 0.306421\r\nvt 0.393381 0.310510\r\nvt 0.649541 0.296225\r\nvt 0.389662 0.300183\r\nvt 0.647785 0.283486\r\nvt 0.391040 0.287071\r\nvt 0.629829 0.267263\r\nvt 0.408893 0.269959\r\nvt 0.612641 0.261560\r\nvt 0.426254 0.263693\r\nvt 0.585166 0.270991\r\nvt 0.454369 0.272583\r\nvt 0.578124 0.281900\r\nvt 0.461798 0.283441\r\nvt 0.579548 0.309340\r\nvt 0.590644 0.321516\r\nvt 0.461204 0.311233\r\nvt 0.577524 0.293776\r\nvt 0.462754 0.295432\r\nvt 0.553209 0.433063\r\nvt 0.523031 0.433628\r\nvt 0.492809 0.434538\r\nvt 0.609819 0.431516\r\nvt 0.435860 0.435740\r\nvt 0.416915 0.400552\r\nvt 0.396518 0.425416\r\nvt 0.648174 0.419316\r\nvt 0.350292 0.396229\r\nvt 0.692106 0.388274\r\nvt 0.312756 0.350588\r\nvt 0.735879 0.312112\r\nvt 0.726332 0.341754\r\nvt 0.301067 0.320593\r\nvt 0.320452 0.270303\r\nvt 0.304876 0.261087\r\nvt 0.698172 0.216906\r\nvt 0.729900 0.256393\r\nvt 0.337414 0.219179\r\nvt 0.663103 0.190671\r\nvt 0.373474 0.191872\r\nvt 0.649444 0.022378\r\nvt 0.621440 0.048089\r\nvt 0.626908 0.015608\r\nvt 0.388827 0.021586\r\nvt 0.416419 0.047631\r\nvt 0.376796 0.075296\r\nvt 0.577206 0.032801\r\nvt 0.567460 0.000144\r\nvt 0.411318 0.015131\r\nvt 0.460782 0.032656\r\nvt 0.547413 0.041724\r\nvt 0.518922 0.024886\r\nvt 0.470636 0.000144\r\nvt 0.490511 0.041669\r\nvt 0.558059 0.053871\r\nvt 0.479842 0.053785\r\nvt 0.576951 0.057998\r\nvt 0.460920 0.057845\r\nvt 0.611687 0.078268\r\nvt 0.425932 0.077985\r\nvt 0.660451 0.076084\r\nvt 0.626663 0.111357\r\nvt 0.410618 0.111244\r\nvt 0.629482 0.130456\r\nvt 0.407648 0.130594\r\nvt 0.413741 0.147158\r\nvt 0.619303 0.159841\r\nvt 0.418035 0.160361\r\nvt 0.389677 0.201890\r\nvt 0.886245 0.121777\r\nvt 0.891780 0.036916\r\nvt 0.945900 0.079569\r\nvt 0.141314 0.112482\r\nvt 0.142277 0.021467\r\nvt 0.183115 0.092127\r\nvt 0.849114 0.099732\r\nvt 0.805584 0.010786\r\nvt 0.232648 0.003484\r\nvt 0.246353 0.076510\r\nvt 0.687018 0.077204\r\nvt 0.672384 0.022201\r\nvt 0.349875 0.075955\r\nvt 0.365979 0.020991\r\nvt 0.760215 0.193244\r\nvt 0.789046 0.233323\r\nvt 0.271553 0.193871\r\nvt 0.241255 0.236977\r\nvt 0.909112 0.183261\r\nvt 0.994525 0.167705\r\nvt 0.107928 0.179083\r\nvt 0.078961 0.060719\r\nvt 0.862868 0.338556\r\nvt 0.962901 0.344752\r\nvt 0.911671 0.402429\r\nvt 0.160557 0.356821\r\nvt 0.043968 0.367038\r\nvt 0.123776 0.315519\r\nvt 0.915360 0.259804\r\nvt 0.999856 0.254640\r\nvt 0.098965 0.266968\r\nvt 0.000144 0.259113\r\nvt 0.011829 0.155367\r\nvt 0.749542 0.334683\r\nvt 0.766337 0.300809\r\nvt 0.789162 0.313727\r\nvt 0.267408 0.310142\r\nvt 0.288183 0.346496\r\nvt 0.242992 0.325552\r\nvt 0.815314 0.276388\r\nvt 0.846174 0.293397\r\nvt 0.213065 0.285164\r\nvt 0.178537 0.304983\r\nvt 0.845007 0.256352\r\nvt 0.873517 0.265922\r\nvt 0.179662 0.263312\r\nvt 0.147089 0.274284\r\nvt 0.859075 0.228168\r\nvt 0.886999 0.233769\r\nvt 0.162803 0.231720\r\nvt 0.131514 0.237587\r\nvt 0.875030 0.184705\r\nvt 0.842355 0.195160\r\nvt 0.145224 0.182749\r\nvt 0.894128 0.301884\r\nvt 0.794286 0.364062\r\nvt 0.770185 0.379538\r\nvt 0.239776 0.382592\r\nvt 0.845499 0.449967\r\nvt 0.106400 0.432652\r\nvt 0.815858 0.445381\r\nvt 0.755700 0.418603\r\nvt 0.287033 0.442912\r\nvt 0.219260 0.477186\r\nvt 0.268122 0.398737\r\nvt 0.185281 0.484099\r\nvt 0.819845 0.468071\r\nvt 0.215894 0.503605\r\nvt 0.809631 0.233887\r\nvt 0.219168 0.237388\r\nvt 0.829287 0.219562\r\nvt 0.199067 0.222464\r\nvt 0.788458 0.080826\r\nvt 0.715482 0.139727\r\nvt 0.319538 0.139409\r\nvt 0.246666 0.114850\r\nvt 0.785486 0.152330\r\nvt 0.245969 0.151002\r\nvt 0.623495 0.146796\r\nvt 0.837382 0.156361\r\nvt 0.196622 0.155241\r\nvt 0.171653 0.132294\r\nvt 0.786480 0.117591\r\nvt 0.858171 0.137775\r\nvt 0.432388 0.894943\r\nvt 0.491058 0.881714\r\nvt 0.506166 0.904851\r\nvt 0.321637 0.893225\r\nvt 0.263032 0.878321\r\nvt 0.315867 0.868209\r\nvt 0.572792 0.860484\r\nvt 0.604825 0.879946\r\nvt 0.181486 0.854693\r\nvt 0.247207 0.901159\r\nvt 0.148729 0.873349\r\nvt 0.619962 0.791615\r\nvt 0.136063 0.784093\r\nvt 0.169745 0.787474\r\nvt 0.586396 0.793977\r\nvt 0.563786 0.739211\r\nvt 0.194086 0.733241\r\nvt 0.208656 0.740879\r\nvt 0.549027 0.746412\r\nvt 0.508270 0.697693\r\nvt 0.250811 0.693249\r\nvt 0.258399 0.707497\r\nvt 0.438641 0.680683\r\nvt 0.434803 0.658882\r\nvt 0.320962 0.677959\r\nvt 0.325318 0.656224\r\nvt 0.500314 0.711729\r\nvt 0.452955 0.700023\r\nvt 0.306136 0.696976\r\nvt 0.505666 0.730944\r\nvt 0.252524 0.726592\r\nvt 0.568148 0.787367\r\nvt 0.188269 0.781375\r\nvt 0.214575 0.750414\r\nvt 0.555495 0.826352\r\nvt 0.199850 0.820889\r\nvt 0.501231 0.844356\r\nvt 0.253846 0.840502\r\nvt 0.457832 0.840040\r\nvt 0.297562 0.837358\r\nvt 0.783193 0.187449\r\nvt 0.246955 0.187075\r\nvt 0.233625 0.175620\r\nvt 0.394766 0.686125\r\nvt 0.391039 0.611891\r\nvt 0.364838 0.684445\r\nvt 0.391747 0.862097\r\nvt 0.438797 0.870229\r\nvt 0.363377 0.861308\r\nvt 0.435018 0.718280\r\nvt 0.323658 0.715731\r\nvt 0.384658 0.710299\r\nvt 0.433669 0.729661\r\nvt 0.374400 0.708969\r\nvt 0.410995 0.747662\r\nvt 0.427812 0.742828\r\nvt 0.324726 0.727177\r\nvt 0.347028 0.745816\r\nvt 0.330270 0.740536\r\nvt 0.384657 0.795423\r\nvt 0.418086 0.784946\r\nvt 0.372270 0.794472\r\nvt 0.431333 0.817535\r\nvt 0.401605 0.841460\r\nvt 0.324790 0.815460\r\nvt 0.338952 0.783073\r\nvt 0.354026 0.840297\r\nvt 0.825107 0.209762\r\nvt 0.199767 0.214827\r\nvt 0.816266 0.203086\r\nvt 0.209828 0.206161\r\nvt 0.226485 0.183086\r\nvt 0.796021 0.176969\r\nvt 0.802192 0.184609\r\nvt 0.448505 0.804621\r\nvt 0.473386 0.824700\r\nvt 0.307886 0.802031\r\nvt 0.282357 0.821525\r\nvt 0.321237 0.777208\r\nvt 0.423718 0.754191\r\nvt 0.435868 0.779569\r\nvt 0.334089 0.752045\r\nvt 0.319919 0.747250\r\nvt 0.437950 0.749777\r\nvt 0.312907 0.729222\r\nvt 0.440995 0.724383\r\nvt 0.445392 0.731997\r\nvt 0.317510 0.721697\r\nvt 0.455277 0.713731\r\nvt 0.303460 0.710657\r\nvt 0.512485 0.828811\r\nvt 0.242975 0.824574\r\nvt 0.550942 0.811814\r\nvt 0.204839 0.806417\r\nvt 0.552139 0.787682\r\nvt 0.204331 0.782156\r\nvt 0.539407 0.764539\r\nvt 0.542850 0.755753\r\nvt 0.217774 0.759319\r\nvt 0.508439 0.743135\r\nvt 0.249419 0.738732\r\nvt 0.454776 0.761665\r\nvt 0.302729 0.758742\r\nvt 0.286960 0.745020\r\nvt 0.470841 0.748408\r\nvt 0.475403 0.783904\r\nvt 0.281439 0.780511\r\nvt 0.268291 0.766661\r\nvt 0.503673 0.787562\r\nvt 0.494476 0.802470\r\nvt 0.252972 0.783410\r\nvt 0.261790 0.798626\r\nvt 0.516802 0.807339\r\nvt 0.239243 0.802891\r\nvt 0.237920 0.787045\r\nvt 0.518562 0.791602\r\nvt 0.484068 0.628776\r\nvt 0.543385 0.683538\r\nvt 0.276936 0.625067\r\nvt 0.216123 0.678120\r\nvt 0.581052 0.726933\r\nvt 0.177176 0.720426\r\nvt 0.616701 0.759965\r\nvt 0.140379 0.752377\r\nvt 0.660647 0.741167\r\nvt 0.707492 0.759884\r\nvt 0.097038 0.732052\r\nvt 0.677256 0.670436\r\nvt 0.745511 0.652100\r\nvt 0.049526 0.748824\r\nvt 0.083564 0.662038\r\nvt 0.671403 0.592656\r\nvt 0.740843 0.572428\r\nvt 0.019409 0.639749\r\nvt 0.092820 0.589862\r\nvt 0.834705 0.206959\r\nvt 0.051216 0.522659\r\nvt 0.033664 0.564403\r\nvt 0.620420 0.565675\r\nvt 0.498072 0.552315\r\nvt 0.145041 0.562595\r\nvt 0.264218 0.550140\r\nvt 0.369913 0.610196\r\nvt 0.464579 0.342230\r\nvt 0.176788 0.196179\r\nvt 0.770572 0.444261\r\nvt 0.271364 0.473316\r\nvt 0.488870 0.770464\r\nvt 0.834578 0.206879\r\nvn 0.6617 -0.2026 0.7219\r\nvn -0.6617 -0.2026 0.7219\r\nvn 0.8268 -0.3051 0.4725\r\nvn -0.8268 -0.3051 0.4725\r\nvn 0.4076 -0.7905 0.4570\r\nvn -0.4076 -0.7905 0.4570\r\nvn 0.3791 -0.5163 0.7679\r\nvn -0.3791 -0.5163 0.7679\r\nvn -0.0859 -0.5222 0.8485\r\nvn 0.0859 -0.5222 0.8485\r\nvn -0.2664 -0.8487 0.4570\r\nvn 0.2664 -0.8487 0.4570\r\nvn -0.7824 -0.3294 0.5285\r\nvn 0.7606 -0.3400 0.5531\r\nvn -0.4706 -0.1981 0.8598\r\nvn 0.4706 -0.1981 0.8598\r\nvn -0.4649 0.1958 0.8634\r\nvn 0.4649 0.1958 0.8634\r\nvn -0.7656 0.3223 0.5568\r\nvn 0.7683 0.3293 0.5488\r\nvn -0.2560 0.8073 0.5317\r\nvn 0.2487 0.8249 0.5076\r\nvn -0.0821 0.6023 0.7940\r\nvn 0.1017 0.5518 0.8277\r\nvn 0.3329 0.5231 0.7846\r\nvn -0.3861 0.5446 0.7445\r\nvn 0.4246 0.7711 0.4745\r\nvn -0.4059 0.7641 0.5014\r\nvn 0.8251 0.2968 0.4808\r\nvn -0.8299 0.2940 0.4742\r\nvn 0.6888 0.1868 0.7005\r\nvn -0.6617 0.2026 0.7219\r\nvn 0.8400 0.3436 -0.4200\r\nvn -0.7816 0.3058 -0.5437\r\nvn 0.2074 0.8296 -0.5185\r\nvn -0.2037 0.8146 -0.5431\r\nvn -0.4056 0.7605 -0.5070\r\nvn 0.4381 0.7988 -0.4123\r\nvn -0.8642 0.3143 -0.3928\r\nvn 0.7861 0.3276 -0.5241\r\nvn -0.7782 -0.3537 -0.5188\r\nvn 0.7782 -0.3537 -0.5188\r\nvn -0.4381 -0.7988 -0.4123\r\nvn 0.4381 -0.7988 -0.4123\r\nvn 0.2037 -0.8146 -0.5431\r\nvn -0.2037 -0.8146 -0.5431\r\nvn 0.7683 -0.3293 -0.5488\r\nvn -0.7683 -0.3293 -0.5488\r\nvn 0.4000 -0.0623 0.9144\r\nvn -0.4000 -0.0623 0.9144\r\nvn 0.3069 -0.1754 0.9354\r\nvn -0.3069 -0.1754 0.9354\r\nvn 0.0945 -0.1835 0.9785\r\nvn -0.0945 -0.1835 0.9785\r\nvn -0.0624 -0.0283 0.9977\r\nvn 0.0624 -0.0283 0.9977\r\nvn -0.0624 0.0260 0.9977\r\nvn 0.0624 0.0260 0.9977\r\nvn 0.0996 0.1729 0.9799\r\nvn -0.0996 0.1729 0.9799\r\nvn 0.3036 0.1656 0.9383\r\nvn -0.3036 0.1656 0.9383\r\nvn 0.4002 0.0572 0.9147\r\nvn -0.4002 0.0572 0.9147\r\nvn 0.1367 -0.8748 0.4648\r\nvn -0.1054 -0.8433 0.5270\r\nvn 0.2303 -0.8656 0.4447\r\nvn -0.1916 -0.8620 0.4693\r\nvn 0.5788 -0.5049 0.6404\r\nvn -0.5788 -0.5049 0.6404\r\nvn 0.7763 -0.0633 0.6272\r\nvn -0.7763 -0.0633 0.6272\r\nvn 0.7471 0.1132 0.6550\r\nvn -0.7471 0.1132 0.6550\r\nvn 0.3747 -0.8345 0.4040\r\nvn -0.3747 -0.8345 0.4040\r\nvn 0.3557 -0.7290 0.5848\r\nvn -0.4177 -0.5751 0.7034\r\nvn 0.6947 -0.4197 0.5841\r\nvn -0.6947 -0.4197 0.5841\r\nvn 0.7028 -0.3915 0.5939\r\nvn -0.5537 -0.2978 0.7777\r\nvn 0.3127 0.3425 0.8860\r\nvn -0.8227 0.3606 0.4395\r\nvn 0.5091 0.6482 0.5663\r\nvn -0.5041 0.6448 0.5745\r\nvn 0.5977 0.5565 0.5771\r\nvn -0.5977 0.5565 0.5771\r\nvn -0.0486 0.6560 0.7532\r\nvn 0.0371 0.6685 0.7428\r\nvn -0.7104 0.2715 0.6494\r\nvn 0.7386 0.3768 0.5590\r\nvn -0.6013 0.5262 0.6013\r\nvn 0.5774 0.5774 0.5774\r\nvn 0.5070 -0.6281 0.5903\r\nvn -0.5364 -0.3230 0.7797\r\nvn 0.2226 -0.4694 0.8545\r\nvn -0.2226 -0.4694 0.8545\r\nvn -0.0348 -0.5792 0.8144\r\nvn 0.1073 -0.5010 0.8588\r\nvn -0.0899 -0.7843 0.6138\r\nvn 0.0770 -0.5759 0.8139\r\nvn 0.0547 -0.1695 0.9840\r\nvn -0.0279 -0.8645 0.5019\r\nvn 0.4260 -0.0609 0.9027\r\nvn -0.1687 -0.3128 0.9347\r\nvn 0.3352 -0.1828 0.9243\r\nvn -0.4350 -0.1812 0.8820\r\nvn 0.3579 -0.3068 0.8819\r\nvn -0.3223 -0.2762 0.9054\r\nvn 0.3069 0.2113 0.9280\r\nvn -0.4815 -0.2408 0.8427\r\nvn -0.1598 0.3903 0.9067\r\nvn 0.1598 0.3903 0.9067\r\nvn 0.6819 -0.2915 0.6709\r\nvn -0.1854 -0.4956 0.8485\r\nvn 0.0585 -0.0781 0.9952\r\nvn -0.0585 -0.0781 0.9952\r\nvn -0.0066 -0.2316 0.9728\r\nvn -0.0585 -0.0845 0.9947\r\nvn 0.1008 -0.7103 0.6966\r\nvn -0.1008 -0.7103 0.6966\r\nvn 0.1322 -0.5947 0.7930\r\nvn -0.1322 -0.5947 0.7930\r\nvn 0.3128 -0.1662 0.9352\r\nvn -0.3143 -0.3928 0.8642\r\nvn 0.3288 -0.0360 0.9437\r\nvn -0.3288 -0.0360 0.9437\r\nvn 0.3233 -0.0808 0.9429\r\nvn -0.3233 -0.0808 0.9429\r\nvn -0.0232 0.0511 0.9984\r\nvn 0.0000 0.0665 0.9978\r\nvn -0.0043 -0.0651 0.9979\r\nvn 0.0000 -0.0665 0.9978\r\nvn 0.0000 0.0000 1.0000\r\nvn 0.8447 -0.5335 0.0445\r\nvn -0.8447 -0.5335 0.0445\r\nvn 0.9500 0.2692 -0.1583\r\nvn -0.9500 0.2692 -0.1583\r\nvn 0.0693 0.9004 -0.4294\r\nvn -0.1018 0.9165 -0.3870\r\nvn -1.0000 0.0000 0.0000\r\nvn 0.6905 0.5492 0.4708\r\nvn 0.4071 -0.8956 0.1791\r\nvn -0.4319 -0.8639 0.2592\r\nvn 0.2873 -0.5747 0.7663\r\nvn -0.2873 -0.5747 0.7663\r\nvn -0.6326 0.5353 0.5596\r\nvn 0.6326 0.5353 0.5596\r\nvn 0.0862 0.7759 0.6250\r\nvn -0.0862 0.7759 0.6250\r\nvn 0.7532 0.2870 0.5918\r\nvn -0.7639 0.2971 0.5729\r\nvn 0.3416 -0.5409 0.7686\r\nvn -0.3416 -0.5409 0.7686\r\nvn 0.0502 0.2343 0.9709\r\nvn -0.0375 0.2247 0.9737\r\nvn -0.1304 -0.6087 0.7826\r\nvn 0.1304 -0.6087 0.7826\r\nvn -0.5059 0.0716 0.8596\r\nvn 0.5059 0.0716 0.8596\r\nvn -0.5774 -0.5774 0.5774\r\nvn 0.5774 -0.5774 0.5774\r\nvn 0.5460 -0.4310 0.7184\r\nvn -0.3319 0.0738 0.9404\r\nvn 0.3231 0.0311 0.9459\r\nvn -0.2815 0.0662 0.9573\r\nvn 0.7357 0.3910 0.5531\r\nvn -0.8753 0.2059 0.4376\r\nvn 0.8480 0.3180 0.4240\r\nvn -0.8973 0.1994 0.3938\r\nvn 0.8505 0.3798 0.3638\r\nvn -0.8505 0.3798 0.3638\r\nvn 0.1783 -0.4161 0.8917\r\nvn -0.2524 -0.8655 0.4327\r\nvn -0.1296 -0.1945 0.9723\r\nvn 0.1296 -0.1945 0.9723\r\nvn -0.4472 0.0000 0.8944\r\nvn 0.4472 0.0000 0.8944\r\nvn -0.1582 0.9494 0.2713\r\nvn 0.1582 0.9494 0.2713\r\nvn -0.6463 0.7337 0.2096\r\nvn 0.6463 0.7337 0.2096\r\nvn 1.0000 0.0000 0.0000\r\nvn 0.3051 -0.9450 0.1181\r\nvn -0.3051 -0.9450 0.1181\r\nvn 0.0217 -0.3031 0.9527\r\nvn -0.0217 -0.3031 0.9527\r\nvn 0.1353 -0.3479 0.9277\r\nvn -0.1353 -0.3479 0.9277\r\nvn -0.4681 -0.2239 0.8548\r\nvn 0.4681 -0.2239 0.8548\r\nvn -0.2710 0.0271 0.9622\r\nvn 0.2710 0.0271 0.9622\r\nvn -0.1717 -0.0090 0.9851\r\nvn 0.2595 0.1038 0.9601\r\nvn -0.4332 -0.4874 0.7581\r\nvn 0.6684 -0.4595 0.5849\r\nvn -0.1599 -0.8797 0.4478\r\nvn 0.1599 -0.8797 0.4478\r\nvn 0.3900 -0.5895 0.7074\r\nvn -0.3900 -0.5895 0.7074\r\nvn 0.6547 -0.4589 0.6007\r\nvn -0.6547 -0.4589 0.6007\r\nvn 0.5378 -0.1144 0.8353\r\nvn -0.5378 -0.1144 0.8353\r\nvn 0.5657 0.1197 0.8159\r\nvn -0.5774 0.1155 0.8083\r\nvn 0.4082 0.4082 0.8165\r\nvn -0.5214 0.6574 0.5441\r\nvn 0.1796 0.7882 0.5886\r\nvn -0.1796 0.7882 0.5886\r\nvn 0.1881 0.3387 0.9219\r\nvn -0.1881 0.3387 0.9219\r\nvn -0.0870 0.2756 0.9573\r\nvn 0.0870 0.2756 0.9573\r\nvn 0.2804 -0.2181 0.9348\r\nvn -0.3553 -0.5739 0.7379\r\nvn 0.3015 -0.3015 0.9045\r\nvn -0.3015 -0.3015 0.9045\r\nvn -0.3766 -0.8339 0.4035\r\nvn 0.0631 -0.3156 0.9468\r\nvn 0.0823 -0.7822 0.6175\r\nvn 0.2016 -0.9071 0.3696\r\nvn -0.3707 -0.2851 0.8839\r\nvn 0.3707 -0.2851 0.8839\r\nvn -0.2692 -0.0577 0.9614\r\nvn 0.4568 0.0508 0.8881\r\nvn -0.2797 0.5245 0.8042\r\nvn 0.2797 0.5245 0.8042\r\nvn -0.0213 0.5546 0.8319\r\nvn 0.0487 0.6815 0.7302\r\nvn 0.3778 0.6342 0.6746\r\nvn -0.3378 0.5221 0.7831\r\nvn 0.4988 0.5300 0.6858\r\nvn -0.4988 0.5300 0.6858\r\nvn 0.5425 -0.3391 0.7686\r\nvn -0.5425 -0.3391 0.7686\r\nvn 0.8305 -0.0615 0.5536\r\nvn -0.8305 -0.0615 0.5536\r\nvn 0.7814 0.1116 0.6140\r\nvn -0.7814 0.1116 0.6140\r\nvn -0.4338 0.8888 -0.1481\r\nvn 0.4338 0.8888 -0.1481\r\nvn -0.8515 0.3744 -0.3670\r\nvn 0.8515 0.3744 -0.3670\r\nvn -0.2664 0.8710 -0.4127\r\nvn 0.2197 0.8626 -0.4557\r\nvn 0.5932 0.7445 -0.3063\r\nvn -0.5914 0.7489 -0.2991\r\nvn 0.3714 0.8685 -0.3284\r\nvn -0.3653 0.8833 -0.2938\r\nvn 0.2901 0.9141 -0.2833\r\nvn -0.2901 0.9141 -0.2833\r\nvn 0.8873 0.1343 -0.4412\r\nvn -0.7964 0.1323 -0.5901\r\nvn 0.5108 -0.6649 -0.5450\r\nvn -0.5108 -0.6649 -0.5450\r\nvn 0.3695 -0.8566 -0.3601\r\nvn -0.3695 -0.8566 -0.3601\r\nvn 0.3617 -0.3858 -0.8487\r\nvn -0.1649 -0.6644 -0.7289\r\nvn 0.1952 -0.0976 -0.9759\r\nvn -0.3011 -0.0125 -0.9535\r\nvn -0.0107 -0.5633 -0.8262\r\nvn -0.2562 -0.3112 -0.9152\r\nvn 0.1533 -0.9649 -0.2134\r\nvn -0.1533 -0.9649 -0.2134\r\nvn 0.1260 -0.9624 -0.2406\r\nvn -0.1260 -0.9624 -0.2406\r\nvn 0.9396 0.1573 -0.3041\r\nvn -0.9396 0.1573 -0.3041\r\nvn 0.9278 0.1838 -0.3246\r\nvn -0.9278 0.1838 -0.3246\r\nvn 0.2192 0.0766 -0.9727\r\nvn -0.2192 0.0766 -0.9727\r\nvn 0.1211 -0.0530 -0.9912\r\nvn 0.1497 -0.3635 -0.9195\r\nvn 0.9094 0.1371 -0.3927\r\nvn -0.3706 -0.6780 -0.6349\r\nvn 0.9202 0.1355 -0.3672\r\nvn -0.9202 0.1355 -0.3672\r\nvn 0.9173 0.3440 -0.2007\r\nvn -0.9457 0.2673 -0.1850\r\nvn 0.9004 0.3642 -0.2380\r\nvn -0.9337 0.2813 -0.2215\r\nvn 0.8945 0.4337 0.1084\r\nvn -0.9501 0.2455 -0.1922\r\nvn 0.1596 -0.9577 -0.2394\r\nvn -0.1835 -0.7864 -0.5898\r\nvn 0.3693 -0.4712 -0.8010\r\nvn -0.3727 -0.4759 -0.7966\r\nvn 0.2986 -0.8236 -0.4821\r\nvn -0.3263 -0.8342 -0.4446\r\nvn 0.2995 -0.9442 -0.1368\r\nvn -0.2995 -0.9442 -0.1368\r\nvn 0.3287 -0.9163 -0.2291\r\nvn -0.3287 -0.9163 -0.2291\r\nvn 0.8305 0.3333 -0.4463\r\nvn -0.8642 -0.4737 0.1696\r\nvn 0.9166 -0.3740 0.1414\r\nvn -0.9166 -0.3740 0.1414\r\nvn 0.2950 -0.0454 -0.9544\r\nvn -0.4189 -0.2265 -0.8793\r\nvn 0.1272 0.9658 0.2260\r\nvn -0.1119 0.9626 0.2468\r\nvn 0.1320 0.9750 -0.1788\r\nvn -0.1320 0.9750 -0.1788\r\nvn 0.3878 0.6192 -0.6828\r\nvn -0.3878 0.6192 -0.6828\r\nvn 0.4951 0.8618 -0.1100\r\nvn -0.4951 0.8618 -0.1100\r\nvn 0.2561 0.6447 0.7202\r\nvn -0.2561 0.6447 0.7202\r\nvn 0.5966 0.7888 0.1479\r\nvn -0.5966 0.7888 0.1479\r\nvn 0.7125 0.6755 -0.1900\r\nvn -0.7125 0.6755 -0.1900\r\nvn 0.7104 0.1364 -0.6904\r\nvn -0.6304 0.2517 -0.7343\r\nvn 0.6823 0.2318 -0.6933\r\nvn -0.6823 0.2318 -0.6933\r\nvn 0.6574 0.7254 -0.2040\r\nvn -0.6574 0.7254 -0.2040\r\nvn 0.7289 0.6729 0.1262\r\nvn -0.7289 0.6729 0.1262\r\nvn 0.7791 0.4074 0.4764\r\nvn -0.7791 0.4074 0.4764\r\nvn 0.3669 0.8840 -0.2898\r\nvn -0.3238 0.9434 -0.0720\r\nvn 0.2854 0.6237 0.7277\r\nvn -0.1548 0.5080 0.8473\r\nvn -0.1681 0.1005 -0.9806\r\nvn 0.1681 0.1005 -0.9806\r\nvn 0.2925 0.5674 0.7697\r\nvn -0.2925 0.5674 0.7697\r\nvn -0.1616 0.1847 0.9694\r\nvn 0.1616 0.1847 0.9694\r\nvn 0.8681 0.0893 -0.4883\r\nvn -0.9340 0.2255 0.2773\r\nvn 0.9276 0.0762 0.3657\r\nvn -0.9276 0.0762 0.3657\r\nvn 0.9750 0.2169 0.0490\r\nvn -0.9750 0.2169 0.0490\r\nvn 0.9817 -0.0304 -0.1882\r\nvn -0.9956 0.0893 -0.0288\r\nvn 0.7466 -0.6646 0.0285\r\nvn -0.6374 -0.7651 0.0915\r\nvn 0.3723 -0.9243 0.0847\r\nvn -0.3720 -0.9244 0.0845\r\nvn 0.3986 -0.8754 0.2734\r\nvn -0.3986 -0.8754 0.2734\r\nvn 0.6328 -0.7642 0.1247\r\nvn -0.6328 -0.7642 0.1247\r\nvn 0.7325 -0.6368 0.2407\r\nvn -0.7325 -0.6368 0.2407\r\nvn 0.2637 -0.4499 0.8533\r\nvn -0.2637 -0.4499 0.8533\r\nvn 0.5881 -0.3070 -0.7483\r\nvn -0.5236 -0.3290 -0.7859\r\nvn 0.4694 -0.2400 -0.8498\r\nvn -0.5396 -0.3343 -0.7727\r\nvn 0.4463 -0.8452 -0.2941\r\nvn -0.2144 -0.8341 -0.5082\r\nvn 0.6973 -0.6610 -0.2771\r\nvn -0.7365 -0.6154 -0.2808\r\nvn 0.4972 -0.4408 -0.7473\r\nvn -0.4972 -0.4408 -0.7473\r\nvn 0.3691 0.2855 0.8844\r\nvn -0.3244 0.4867 0.8111\r\nvn 0.4467 0.0975 0.8894\r\nvn -0.4467 0.0975 0.8894\r\nvn 0.3188 0.1993 0.9266\r\nvn -0.1817 -0.0079 0.9833\r\nvn 0.2076 -0.0836 0.9746\r\nvn -0.2925 -0.0758 0.9533\r\nvn 0.3398 0.0824 0.9369\r\nvn -0.5847 -0.2198 0.7809\r\nvn 0.5957 -0.3850 0.7049\r\nvn -0.5957 -0.3850 0.7049\r\nvn 0.4843 0.5580 0.6738\r\nvn -0.4843 0.5580 0.6738\r\nvn -0.2675 0.8318 0.4864\r\nvn 0.2675 0.8318 0.4864\r\nvn -0.8576 0.2223 0.4637\r\nvn 0.7885 0.2366 0.5677\r\nvn -0.5257 -0.3579 0.7717\r\nvn 0.5242 -0.3548 0.7742\r\nvn 0.4663 -0.5991 0.6509\r\nvn -0.4390 -0.5252 0.7290\r\nvn 0.7104 -0.4567 0.5356\r\nvn -0.7104 -0.4567 0.5356\r\nvn 0.7507 -0.6131 -0.2461\r\nvn -0.6302 -0.7658 0.1282\r\nvn -0.1788 0.2923 0.9395\r\nvn 0.2175 0.2733 0.9370\r\nvn 0.9042 -0.3578 -0.2332\r\nvn -0.9042 -0.3578 -0.2332\r\nvn 0.0400 0.3399 0.9396\r\nvn -0.0400 0.3399 0.9396\r\nvn 0.2734 0.9064 0.3221\r\nvn -0.2734 0.9064 0.3221\r\nvn 0.4480 -0.4480 0.7737\r\nvn -0.7177 0.1689 0.6755\r\nvn 0.5534 -0.5534 0.6225\r\nvn -0.9008 -0.4075 0.1501\r\nvn 0.5724 -0.3122 0.7582\r\nvn -0.5815 -0.5217 0.6243\r\nvn 0.5597 -0.5533 0.6169\r\nvn -0.6138 -0.2571 0.7465\r\nvn 0.8271 0.5323 -0.1802\r\nvn -0.8271 0.5323 -0.1802\r\nvn 0.9227 -0.3765 -0.0825\r\nvn -0.8717 -0.4446 -0.2063\r\nvn 0.9972 -0.0181 -0.0725\r\nvn -0.9972 -0.0181 -0.0725\r\nvn 0.6895 -0.6644 0.2883\r\nvn -0.6895 -0.6644 0.2883\r\nvn 0.7815 -0.6176 0.0882\r\nvn -0.7930 -0.5947 0.1322\r\nvn 0.7022 -0.7022 0.1170\r\nvn -0.7022 -0.7022 0.1170\r\nvn 0.1240 0.9921 0.0207\r\nvn -0.2408 0.9631 -0.1204\r\nvn 0.9435 0.3145 0.1048\r\nvn -0.9251 0.3469 0.1542\r\nvn 0.6213 -0.7767 0.1036\r\nvn -0.6213 -0.7767 0.1036\r\nvn 0.0000 1.0000 0.0000\r\nvn 0.6197 -0.6899 0.3742\r\nvn -0.6197 -0.6899 0.3742\r\nvn 0.2752 -0.8808 0.3853\r\nvn -0.2752 -0.8808 0.3853\r\nvn -0.7929 -0.5252 -0.3089\r\nvn 0.7929 -0.5252 -0.3089\r\nvn -0.8096 0.2429 -0.5343\r\nvn 0.8538 0.2328 -0.4657\r\nvn -0.5621 0.8231 -0.0803\r\nvn 0.5433 0.6985 -0.4657\r\nvn -0.0071 0.9899 0.1414\r\nvn 0.1096 0.9939 -0.0157\r\nvn 0.1046 0.0392 0.9937\r\nvn -0.1738 0.0097 0.9847\r\nvn 0.2461 0.0852 0.9655\r\nvn -0.4134 0.0413 0.9096\r\nvn 0.3009 0.0926 0.9491\r\nvn -0.3009 0.0926 0.9491\r\nvn 0.2104 0.0124 0.9775\r\nvn -0.1220 0.0458 0.9915\r\nvn -0.0099 0.3867 0.9221\r\nvn 0.0099 0.3867 0.9221\r\nvn 0.3787 -0.0364 0.9248\r\nvn -0.4244 -0.0320 0.9049\r\nvn 0.2530 -0.1897 0.9487\r\nvn -0.2570 0.0723 0.9637\r\nvn -0.4870 0.6088 0.6262\r\nvn 0.2981 0.7454 0.5963\r\nvn 0.6693 0.1802 0.7208\r\nvn -0.6693 0.1802 0.7208\r\nvn 0.4388 -0.2008 0.8759\r\nvn -0.4723 -0.1986 0.8588\r\nvn 0.5786 -0.1334 0.8046\r\nvn -0.2975 -0.4062 0.8640\r\nvn 0.5002 0.2833 0.8182\r\nvn -0.5002 0.2833 0.8182\r\nvn 0.2980 0.5802 0.7580\r\nvn -0.2980 0.5802 0.7580\r\nvn 0.0929 -0.9912 -0.0944\r\nvn -0.0929 -0.9912 -0.0944\r\nvn 0.4688 -0.8715 0.1442\r\nvn -0.4688 -0.8715 0.1442\r\nvn 0.9309 -0.2541 0.2624\r\nvn -0.9264 -0.2460 0.2851\r\nvn 0.8465 0.5291 -0.0595\r\nvn -0.8267 0.5627 -0.0035\r\nvn -0.2511 0.9439 -0.2145\r\nvn 0.2146 0.9243 -0.3157\r\nvn -0.4841 0.8743 -0.0361\r\nvn 0.4196 0.8851 -0.2012\r\nvn -0.5256 -0.0030 -0.8507\r\nvn 0.5470 -0.0144 -0.8370\r\nvn -0.1466 0.0104 -0.9891\r\nvn 0.1466 0.0104 -0.9891\r\nvn 0.4046 0.0266 -0.9141\r\nvn -0.4046 0.0266 -0.9141\r\nvn -0.8073 0.5901 0.0041\r\nvn 0.7330 0.6786 0.0472\r\nvn 0.4200 -0.2291 -0.8781\r\nvn -0.4200 -0.2291 -0.8781\r\nvn -0.0687 -0.9943 -0.0818\r\nvn 0.0687 -0.9943 -0.0818\r\nvn 0.6713 -0.1971 0.7145\r\nvn -0.6713 -0.1971 0.7145\r\nvn 0.8326 -0.3017 0.4646\r\nvn -0.8326 -0.3017 0.4646\r\nvn 0.4258 -0.7967 0.4290\r\nvn -0.4258 -0.7967 0.4290\r\nvn 0.3265 -0.4954 0.8050\r\nvn -0.3265 -0.4954 0.8050\r\nvn -0.0649 -0.5714 0.8181\r\nvn 0.0649 -0.5714 0.8181\r\nvn -0.2738 -0.8315 0.4834\r\nvn 0.2738 -0.8315 0.4834\r\nvn -0.7606 -0.3400 0.5531\r\nvn 0.7824 -0.3294 0.5285\r\nvn -0.4658 -0.1863 0.8651\r\nvn 0.4658 -0.1863 0.8651\r\nvn -0.4983 0.1812 0.8478\r\nvn 0.4983 0.1812 0.8478\r\nvn -0.7683 0.3293 0.5488\r\nvn 0.7656 0.3223 0.5568\r\nvn -0.2487 0.8249 0.5076\r\nvn 0.2560 0.8073 0.5317\r\nvn -0.1017 0.5518 0.8277\r\nvn 0.0821 0.6023 0.7940\r\nvn 0.3861 0.5446 0.7445\r\nvn -0.3329 0.5231 0.7846\r\nvn 0.4059 0.7641 0.5014\r\nvn -0.4246 0.7711 0.4745\r\nvn 0.8299 0.2940 0.4742\r\nvn -0.8251 0.2968 0.4808\r\nvn 0.6617 0.2026 0.7219\r\nvn -0.6888 0.1868 0.7005\r\nvn 0.7816 0.3058 -0.5437\r\nvn -0.8400 0.3436 -0.4200\r\nvn 0.2037 0.8146 -0.5431\r\nvn -0.2074 0.8296 -0.5185\r\nvn -0.4381 0.7988 -0.4123\r\nvn 0.4056 0.7605 -0.5070\r\nvn -0.7861 0.3276 -0.5241\r\nvn 0.8642 0.3143 -0.3928\r\nvn -0.8519 -0.3408 -0.3976\r\nvn 0.8519 -0.3408 -0.3976\r\nvn -0.4056 -0.7605 -0.5070\r\nvn 0.4056 -0.7605 -0.5070\r\nvn 0.2074 -0.8296 -0.5185\r\nvn -0.2074 -0.8296 -0.5185\r\nvn 0.8297 -0.3734 -0.4149\r\nvn -0.8297 -0.3734 -0.4149\r\nvn 0.1054 -0.8433 0.5270\r\nvn -0.1367 -0.8748 0.4648\r\nvn 0.1916 -0.8620 0.4693\r\nvn -0.2303 -0.8656 0.4447\r\nvn 0.5959 -0.4256 0.6810\r\nvn -0.5959 -0.4256 0.6810\r\nvn 0.7563 -0.0299 0.6535\r\nvn -0.7563 -0.0299 0.6535\r\nvn 0.8069 0.0689 0.5866\r\nvn -0.8069 0.0689 0.5866\r\nvn 0.2334 -0.7779 0.5834\r\nvn -0.2334 -0.7779 0.5834\r\nvn 0.4177 -0.5751 0.7034\r\nvn -0.3557 -0.7290 0.5848\r\nvn 0.6872 -0.4191 0.5934\r\nvn -0.6872 -0.4191 0.5934\r\nvn 0.5537 -0.2978 0.7777\r\nvn -0.7028 -0.3915 0.5939\r\nvn 0.8227 0.3606 0.4395\r\nvn -0.3127 0.3425 0.8860\r\nvn 0.5041 0.6448 0.5745\r\nvn -0.5091 0.6482 0.5663\r\nvn 0.6155 0.4924 0.6155\r\nvn -0.6155 0.4924 0.6155\r\nvn -0.0371 0.6685 0.7428\r\nvn 0.0486 0.6560 0.7532\r\nvn -0.7386 0.3768 0.5590\r\nvn 0.7104 0.2715 0.6494\r\nvn -0.5774 0.5774 0.5774\r\nvn 0.6013 0.5262 0.6013\r\nvn 0.5364 -0.3230 0.7797\r\nvn -0.5070 -0.6281 0.5903\r\nvn 0.2181 -0.4685 0.8561\r\nvn -0.2181 -0.4685 0.8561\r\nvn -0.1073 -0.5010 0.8588\r\nvn 0.0348 -0.5792 0.8144\r\nvn -0.0770 -0.5759 0.8139\r\nvn 0.0899 -0.7843 0.6138\r\nvn 0.0279 -0.8645 0.5019\r\nvn -0.0547 -0.1695 0.9840\r\nvn 0.1687 -0.3128 0.9347\r\nvn -0.4260 -0.0609 0.9027\r\nvn 0.4350 -0.1812 0.8820\r\nvn -0.3352 -0.1828 0.9243\r\nvn 0.3223 -0.2762 0.9054\r\nvn -0.3579 -0.3068 0.8819\r\nvn 0.4815 -0.2408 0.8427\r\nvn -0.3069 0.2113 0.9280\r\nvn -0.0317 -0.1899 0.9813\r\nvn 0.0317 -0.1899 0.9813\r\nvn 0.1854 -0.4956 0.8485\r\nvn -0.6819 -0.2915 0.6709\r\nvn 0.2623 -0.3498 0.8994\r\nvn -0.2623 -0.3498 0.8994\r\nvn 0.0585 -0.0845 0.9947\r\nvn 0.0066 -0.2316 0.9728\r\nvn -0.0136 -0.6507 0.7592\r\nvn 0.0136 -0.6507 0.7592\r\nvn 0.2404 -0.5476 0.8014\r\nvn -0.2404 -0.5476 0.8014\r\nvn 0.3143 -0.3928 0.8642\r\nvn -0.3128 -0.1662 0.9352\r\nvn 0.2821 -0.0164 0.9592\r\nvn -0.2821 -0.0164 0.9592\r\nvn 0.3273 -0.1432 0.9340\r\nvn -0.3273 -0.1432 0.9340\r\nvn 0.0232 0.0511 0.9984\r\nvn 0.0043 -0.0651 0.9979\r\nvn 0.7826 -0.6087 -0.1304\r\nvn -0.7826 -0.6087 -0.1304\r\nvn 0.9448 0.1919 -0.2657\r\nvn -0.9448 0.1919 -0.2657\r\nvn 0.1018 0.9165 -0.3870\r\nvn -0.0693 0.9004 -0.4294\r\nvn -0.6905 0.5492 0.4708\r\nvn 0.4319 -0.8639 0.2592\r\nvn -0.4071 -0.8956 0.1791\r\nvn -0.6667 0.6667 0.3333\r\nvn 0.6667 0.6667 0.3333\r\nvn 0.1348 0.8086 0.5727\r\nvn -0.1348 0.8086 0.5727\r\nvn 0.7639 0.2971 0.5729\r\nvn -0.7532 0.2870 0.5918\r\nvn 0.4116 -0.8575 0.3087\r\nvn -0.4116 -0.8575 0.3087\r\nvn 0.0375 0.2247 0.9737\r\nvn -0.0502 0.2343 0.9709\r\nvn 0.1304 -0.2609 0.9565\r\nvn -0.1304 -0.2609 0.9565\r\nvn -0.0631 -0.8206 0.5681\r\nvn 0.0631 -0.8206 0.5681\r\nvn 0.7325 0.2817 0.6198\r\nvn -0.7325 0.2817 0.6198\r\nvn 0.3319 0.0738 0.9404\r\nvn -0.5460 -0.4310 0.7184\r\nvn 0.2815 0.0662 0.9573\r\nvn -0.3231 0.0311 0.9459\r\nvn 0.8753 0.2059 0.4376\r\nvn -0.7357 0.3910 0.5531\r\nvn 0.8973 0.1994 0.3938\r\nvn -0.8480 0.3180 0.4240\r\nvn 0.9586 0.0664 0.2767\r\nvn -0.9586 0.0664 0.2767\r\nvn 0.2524 -0.8655 0.4327\r\nvn -0.1783 -0.4161 0.8917\r\nvn -0.1751 -0.2043 0.9631\r\nvn 0.1751 -0.2043 0.9631\r\nvn -0.1219 -0.1829 0.9755\r\nvn 0.1219 -0.1829 0.9755\r\nvn -0.1562 0.3123 0.9370\r\nvn 0.1562 0.3123 0.9370\r\nvn -0.7238 0.6857 0.0762\r\nvn 0.7238 0.6857 0.0762\r\nvn 0.0478 -0.2870 0.9567\r\nvn -0.0478 -0.2870 0.9567\r\nvn -0.5488 -0.3293 0.7683\r\nvn 0.5488 -0.3293 0.7683\r\nvn -0.4945 -0.1130 0.8618\r\nvn 0.4945 -0.1130 0.8618\r\nvn -0.2595 0.1038 0.9601\r\nvn 0.1717 -0.0090 0.9851\r\nvn -0.6684 -0.4595 0.5849\r\nvn 0.4332 -0.4874 0.7581\r\nvn -0.1156 -0.6359 0.7631\r\nvn 0.1156 -0.6359 0.7631\r\nvn 0.4242 -0.6211 0.6590\r\nvn -0.4242 -0.6211 0.6590\r\nvn 0.4767 -0.3557 0.8039\r\nvn -0.4767 -0.3557 0.8039\r\nvn 0.5871 -0.0839 0.8052\r\nvn -0.5871 -0.0839 0.8052\r\nvn 0.5774 0.1155 0.8083\r\nvn -0.5657 0.1197 0.8159\r\nvn 0.5214 0.6574 0.5441\r\nvn -0.4082 0.4082 0.8165\r\nvn 0.3358 0.3478 0.8754\r\nvn -0.3358 0.3478 0.8754\r\nvn 0.1452 0.3774 0.9146\r\nvn -0.1452 0.3774 0.9146\r\nvn 0.0301 0.2306 0.9726\r\nvn -0.0301 0.2306 0.9726\r\nvn 0.3553 -0.5739 0.7379\r\nvn -0.2804 -0.2181 0.9348\r\nvn 0.2627 -0.2252 0.9382\r\nvn -0.2627 -0.2252 0.9382\r\nvn -0.0631 -0.3156 0.9468\r\nvn 0.3766 -0.8339 0.4035\r\nvn -0.2016 -0.9071 0.3696\r\nvn -0.0823 -0.7822 0.6175\r\nvn -0.3356 -0.2397 0.9110\r\nvn 0.3356 -0.2397 0.9110\r\nvn -0.4568 0.0508 0.8881\r\nvn 0.2692 -0.0577 0.9614\r\nvn -0.0247 0.4072 0.9130\r\nvn 0.0247 0.4072 0.9130\r\nvn -0.0487 0.6815 0.7302\r\nvn 0.0213 0.5546 0.8319\r\nvn 0.3378 0.5221 0.7831\r\nvn -0.3778 0.6342 0.6746\r\nvn 0.7895 -0.3158 0.5263\r\nvn -0.7895 -0.3158 0.5263\r\nvn 0.8070 -0.0807 0.5851\r\nvn -0.8070 -0.0807 0.5851\r\nvn 0.7868 0.1210 0.6052\r\nvn -0.7868 0.1210 0.6052\r\nvn -0.6357 0.6811 -0.3633\r\nvn 0.6357 0.6811 -0.3633\r\nvn -0.8507 0.3650 -0.3783\r\nvn 0.8507 0.3650 -0.3783\r\nvn -0.2197 0.8626 -0.4557\r\nvn 0.2664 0.8710 -0.4127\r\nvn 0.5914 0.7489 -0.2991\r\nvn -0.5932 0.7445 -0.3063\r\nvn 0.3653 0.8833 -0.2938\r\nvn -0.3714 0.8685 -0.3284\r\nvn 0.2760 0.9159 -0.2915\r\nvn -0.2760 0.9159 -0.2915\r\nvn 0.7964 0.1323 -0.5901\r\nvn -0.8873 0.1343 -0.4412\r\nvn 0.5442 -0.7524 -0.3712\r\nvn -0.5442 -0.7524 -0.3712\r\nvn 0.4027 -0.7323 -0.5492\r\nvn -0.4027 -0.7323 -0.5492\r\nvn 0.1649 -0.6644 -0.7289\r\nvn -0.3617 -0.3858 -0.8487\r\nvn 0.3011 -0.0125 -0.9535\r\nvn -0.1952 -0.0976 -0.9759\r\nvn 0.2562 -0.3112 -0.9152\r\nvn 0.0107 -0.5633 -0.8262\r\nvn 0.0779 -0.9948 -0.0663\r\nvn -0.0779 -0.9948 -0.0663\r\nvn 0.1094 -0.9718 -0.2089\r\nvn -0.1094 -0.9718 -0.2089\r\nvn 0.8150 -0.5621 -0.1405\r\nvn -0.8150 -0.5621 -0.1405\r\nvn 0.9358 0.1396 -0.3236\r\nvn -0.9358 0.1396 -0.3236\r\nvn 0.1132 -0.0274 -0.9932\r\nvn -0.1132 -0.0274 -0.9932\r\nvn -0.1497 -0.3635 -0.9195\r\nvn -0.1211 -0.0530 -0.9912\r\nvn 0.3706 -0.6780 -0.6349\r\nvn -0.9094 0.1371 -0.3927\r\nvn 0.9193 0.1393 -0.3682\r\nvn -0.9193 0.1393 -0.3682\r\nvn 0.9457 0.2673 -0.1850\r\nvn -0.9173 0.3440 -0.2007\r\nvn 0.9337 0.2813 -0.2215\r\nvn -0.9004 0.3642 -0.2380\r\nvn 0.9501 0.2455 -0.1922\r\nvn -0.8945 0.4337 0.1084\r\nvn 0.1835 -0.7864 -0.5898\r\nvn -0.1596 -0.9577 -0.2394\r\nvn 0.3727 -0.4759 -0.7966\r\nvn -0.3693 -0.4712 -0.8010\r\nvn 0.3263 -0.8342 -0.4446\r\nvn -0.2986 -0.8236 -0.4821\r\nvn 0.2620 -0.9574 -0.1217\r\nvn -0.2620 -0.9574 -0.1217\r\nvn 0.2996 -0.9443 -0.1362\r\nvn -0.2996 -0.9443 -0.1362\r\nvn 0.8642 -0.4737 0.1696\r\nvn -0.8305 0.3333 -0.4463\r\nvn 0.6869 -0.6358 0.3521\r\nvn -0.6869 -0.6358 0.3521\r\nvn 0.4189 -0.2265 -0.8793\r\nvn -0.2950 -0.0454 -0.9544\r\nvn 0.1119 0.9626 0.2468\r\nvn -0.1272 0.9658 0.2260\r\nvn 0.1208 0.9734 -0.1947\r\nvn -0.1208 0.9734 -0.1947\r\nvn 0.3140 0.5711 -0.7585\r\nvn -0.3140 0.5711 -0.7585\r\nvn 0.3231 0.9288 -0.1817\r\nvn -0.3231 0.9288 -0.1817\r\nvn 0.0452 0.7955 0.6043\r\nvn -0.0452 0.7955 0.6043\r\nvn 0.6144 0.7696 0.1738\r\nvn -0.6144 0.7696 0.1738\r\nvn 0.6935 0.6857 -0.2212\r\nvn -0.6935 0.6857 -0.2212\r\nvn 0.6304 0.2517 -0.7343\r\nvn -0.7104 0.1364 -0.6904\r\nvn 0.3179 0.5704 -0.7574\r\nvn -0.3179 0.5704 -0.7574\r\nvn 0.6289 0.7624 -0.1525\r\nvn -0.6289 0.7624 -0.1525\r\nvn 0.7088 0.6833 0.1752\r\nvn -0.7088 0.6833 0.1752\r\nvn 0.6885 0.3830 0.6158\r\nvn -0.6885 0.3830 0.6158\r\nvn 0.3238 0.9434 -0.0720\r\nvn -0.3669 0.8840 -0.2898\r\nvn 0.1548 0.5080 0.8473\r\nvn -0.2854 0.6237 0.7277\r\nvn -0.1819 0.1145 -0.9766\r\nvn 0.1819 0.1145 -0.9766\r\nvn -0.2638 0.9462 -0.1871\r\nvn 0.2638 0.9462 -0.1871\r\nvn 0.9340 0.2255 0.2773\r\nvn -0.8681 0.0893 -0.4883\r\nvn 0.9758 0.1241 0.1800\r\nvn -0.9758 0.1241 0.1800\r\nvn 0.9613 0.1472 -0.2330\r\nvn -0.9613 0.1472 -0.2330\r\nvn 0.9956 0.0893 -0.0288\r\nvn -0.9817 -0.0304 -0.1882\r\nvn 0.6374 -0.7651 0.0915\r\nvn -0.7466 -0.6646 0.0285\r\nvn 0.3720 -0.9244 0.0845\r\nvn -0.3723 -0.9243 0.0847\r\nvn 0.5281 -0.8354 0.1522\r\nvn -0.5281 -0.8354 0.1522\r\nvn 0.3070 -0.5237 0.7946\r\nvn -0.3070 -0.5237 0.7946\r\nvn 0.5236 -0.3290 -0.7859\r\nvn -0.5881 -0.3070 -0.7483\r\nvn 0.5396 -0.3343 -0.7727\r\nvn -0.4694 -0.2400 -0.8498\r\nvn 0.2144 -0.8341 -0.5082\r\nvn -0.4463 -0.8452 -0.2941\r\nvn 0.7365 -0.6154 -0.2808\r\nvn -0.6973 -0.6610 -0.2771\r\nvn 0.3244 0.4867 0.8111\r\nvn -0.3691 0.2855 0.8844\r\nvn 0.4649 0.2593 0.8465\r\nvn -0.4649 0.2593 0.8465\r\nvn 0.1817 -0.0079 0.9833\r\nvn -0.3188 0.1993 0.9266\r\nvn 0.2925 -0.0758 0.9533\r\nvn -0.2076 -0.0836 0.9746\r\nvn 0.5847 -0.2198 0.7809\r\nvn -0.3398 0.0824 0.9369\r\nvn 0.6509 -0.1939 0.7340\r\nvn -0.6509 -0.1939 0.7340\r\nvn 0.4075 0.7506 0.5201\r\nvn -0.4075 0.7506 0.5201\r\nvn -0.2655 0.8296 0.4911\r\nvn 0.2655 0.8296 0.4911\r\nvn -0.7885 0.2366 0.5677\r\nvn 0.8576 0.2223 0.4637\r\nvn -0.5242 -0.3548 0.7742\r\nvn 0.5257 -0.3579 0.7717\r\nvn 0.4390 -0.5252 0.7290\r\nvn -0.4663 -0.5991 0.6509\r\nvn 0.6888 -0.4428 0.5740\r\nvn -0.6888 -0.4428 0.5740\r\nvn 0.6302 -0.7658 0.1282\r\nvn -0.7507 -0.6131 -0.2461\r\nvn -0.2175 0.2733 0.9370\r\nvn 0.1788 0.2923 0.9395\r\nvn 0.9046 -0.3869 -0.1792\r\nvn -0.9046 -0.3869 -0.1792\r\nvn 0.1782 -0.0891 0.9800\r\nvn -0.1782 -0.0891 0.9800\r\nvn -0.2335 0.8972 0.3749\r\nvn 0.2335 0.8972 0.3749\r\nvn 0.7177 0.1689 0.6755\r\nvn -0.4480 -0.4480 0.7737\r\nvn 0.5313 0.5844 0.6134\r\nvn -0.5313 0.5844 0.6134\r\nvn 0.9008 -0.4075 0.1501\r\nvn -0.5534 -0.5534 0.6225\r\nvn 0.5815 -0.5217 0.6243\r\nvn -0.5724 -0.3122 0.7582\r\nvn 0.6138 -0.2571 0.7465\r\nvn -0.5597 -0.5533 0.6169\r\nvn 0.8779 -0.4788 0.0076\r\nvn -0.8779 -0.4788 0.0076\r\nvn 0.8717 -0.4446 -0.2063\r\nvn -0.9227 -0.3765 -0.0825\r\nvn 0.7661 -0.6363 0.0909\r\nvn -0.7661 -0.6363 0.0909\r\nvn 0.7930 -0.5947 0.1322\r\nvn -0.7815 -0.6176 0.0882\r\nvn 0.2408 0.9631 -0.1204\r\nvn -0.1240 0.9921 0.0207\r\nvn 0.9251 0.3469 0.1542\r\nvn -0.9435 0.3145 0.1048\r\nvn 0.7071 -0.7071 0.0000\r\nvn -0.7071 -0.7071 0.0000\r\nvn -0.0157 0.9898 0.1414\r\nvn 0.0157 0.9898 0.1414\r\nvn 0.6266 -0.7211 0.2956\r\nvn -0.6266 -0.7211 0.2956\r\nvn 0.2714 -0.9022 0.3353\r\nvn -0.2714 -0.9022 0.3353\r\nvn -0.8651 -0.4853 -0.1266\r\nvn 0.8651 -0.4853 -0.1266\r\nvn -0.8538 0.2328 -0.4657\r\nvn 0.8096 0.2429 -0.5343\r\nvn -0.5433 0.6985 -0.4657\r\nvn 0.5621 0.8231 -0.0803\r\nvn -0.1096 0.9939 -0.0157\r\nvn 0.0071 0.9899 0.1414\r\nvn 0.1738 0.0097 0.9847\r\nvn -0.1046 0.0392 0.9937\r\nvn 0.4134 0.0413 0.9096\r\nvn -0.2461 0.0852 0.9655\r\nvn 0.3228 -0.0461 0.9453\r\nvn -0.3228 -0.0461 0.9453\r\nvn 0.1220 0.0458 0.9915\r\nvn -0.2104 0.0124 0.9775\r\nvn 0.5679 0.1916 0.8005\r\nvn -0.5679 0.1916 0.8005\r\nvn 0.4244 -0.0320 0.9049\r\nvn -0.3787 -0.0364 0.9248\r\nvn 0.2570 0.0723 0.9637\r\nvn -0.2530 -0.1897 0.9487\r\nvn 0.1351 -0.0225 0.9906\r\nvn -0.1351 -0.0225 0.9906\r\nvn -0.2981 0.7454 0.5963\r\nvn 0.4870 0.6088 0.6262\r\nvn 0.5571 -0.1486 0.8171\r\nvn -0.5571 -0.1486 0.8171\r\nvn 0.4723 -0.1986 0.8588\r\nvn -0.4388 -0.2008 0.8759\r\nvn 0.2975 -0.4062 0.8640\r\nvn -0.5786 -0.1334 0.8046\r\nvn 0.5771 0.2164 0.7875\r\nvn -0.5771 0.2164 0.7875\r\nvn 0.0931 -0.9932 -0.0692\r\nvn -0.0931 -0.9932 -0.0692\r\nvn 0.5161 -0.8527 -0.0812\r\nvn -0.5161 -0.8527 -0.0812\r\nvn 0.9264 -0.2460 0.2851\r\nvn -0.9309 -0.2541 0.2624\r\nvn 0.8267 0.5627 -0.0035\r\nvn -0.8465 0.5291 -0.0595\r\nvn -0.2146 0.9243 -0.3157\r\nvn 0.2511 0.9439 -0.2145\r\nvn -0.4196 0.8851 -0.2012\r\nvn 0.4841 0.8743 -0.0361\r\nvn -0.5470 -0.0144 -0.8370\r\nvn 0.5256 -0.0030 -0.8507\r\nvn -0.2556 -0.0749 -0.9639\r\nvn 0.2556 -0.0749 -0.9639\r\nvn -0.7330 0.6786 0.0472\r\nvn 0.8073 0.5901 0.0041\r\nvn 0.6844 -0.1711 -0.7088\r\nvn -0.6844 -0.1711 -0.7088\r\nvn -0.3604 -0.8283 -0.4290\r\nvn 0.3604 -0.8283 -0.4290\r\ns off\r\nf 47/1/1 3/2/1 45/3/1\r\nf 4/4/2 48/5/2 46/6/2\r\nf 45/3/3 5/7/3 43/8/3\r\nf 6/9/4 46/6/4 44/10/4\r\nf 3/2/5 7/11/5 5/7/5\r\nf 8/12/6 4/4/6 6/9/6\r\nf 1/13/7 9/14/7 3/2/7\r\nf 10/15/8 2/16/8 4/4/8\r\nf 11/17/9 15/18/9 9/14/9\r\nf 16/19/10 12/20/10 10/15/10\r\nf 9/14/11 17/21/11 7/11/11\r\nf 18/22/12 10/15/12 8/12/12\r\nf 21/23/13 17/21/13 15/18/13\r\nf 22/24/14 18/22/14 20/25/14\r\nf 13/26/15 21/23/15 15/18/15\r\nf 22/24/16 14/27/16 16/19/16\r\nf 23/28/17 27/29/17 21/23/17\r\nf 28/30/18 24/31/18 22/24/18\r\nf 27/29/19 19/32/19 21/23/19\r\nf 28/30/20 20/25/20 30/33/20\r\nf 33/34/21 29/35/21 27/29/21\r\nf 34/36/22 30/33/22 32/37/22\r\nf 35/38/23 27/29/23 25/39/23\r\nf 36/40/24 28/30/24 34/36/24\r\nf 37/41/25 33/34/25 35/38/25\r\nf 38/42/26 34/36/26 40/43/26\r\nf 39/44/27 31/45/27 33/34/27\r\nf 40/43/28 32/37/28 42/46/28\r\nf 45/3/29 41/47/29 39/44/29\r\nf 46/6/30 42/46/30 44/10/30\r\nf 47/1/31 39/44/31 37/41/31\r\nf 48/5/32 40/43/32 46/6/32\r\nf 37/41/33 49/48/33 47/1/33\r\nf 38/42/34 50/49/34 52/50/34\r\nf 35/38/35 51/51/35 37/41/35\r\nf 36/40/36 52/50/36 54/52/36\r\nf 25/39/37 53/53/37 35/38/37\r\nf 26/54/38 54/52/38 56/55/38\r\nf 23/28/39 55/56/39 25/39/39\r\nf 24/31/40 56/55/40 58/57/40\r\nf 23/28/41 59/58/41 57/59/41\r\nf 60/60/42 24/31/42 58/57/42\r\nf 13/26/43 63/61/43 59/58/43\r\nf 64/62/44 14/27/44 60/60/44\r\nf 11/17/45 65/63/45 63/61/45\r\nf 66/64/46 12/20/46 64/62/46\r\nf 1/13/47 49/48/47 65/63/47\r\nf 50/49/48 2/16/48 66/64/48\r\nf 61/65/49 65/63/49 49/48/49\r\nf 50/49/50 66/64/50 62/66/50\r\nf 63/61/51 65/63/51 61/65/51\r\nf 62/66/52 66/64/52 64/62/52\r\nf 61/65/53 59/58/53 63/61/53\r\nf 64/62/54 60/60/54 62/66/54\r\nf 61/65/55 57/59/55 59/58/55\r\nf 60/60/56 58/57/56 62/66/56\r\nf 61/65/57 55/56/57 57/59/57\r\nf 58/57/58 56/55/58 62/66/58\r\nf 61/65/59 53/53/59 55/56/59\r\nf 56/55/60 54/52/60 62/66/60\r\nf 61/65/61 51/51/61 53/53/61\r\nf 54/52/62 52/50/62 62/66/62\r\nf 61/65/63 49/48/63 51/51/63\r\nf 52/50/64 50/49/64 62/66/64\r\nf 174/67/65 91/68/65 89/69/65\r\nf 175/70/66 91/68/66 176/71/66\r\nf 172/72/67 89/69/67 87/73/67\r\nf 173/74/68 90/75/68 175/70/68\r\nf 85/76/69 172/72/69 87/73/69\r\nf 173/74/70 86/77/70 88/78/70\r\nf 83/79/71 170/80/71 85/76/71\r\nf 171/81/72 84/82/72 86/77/72\r\nf 81/83/73 168/84/73 83/79/73\r\nf 169/85/74 82/86/74 84/82/74\r\nf 79/87/75 146/88/75 164/89/75\r\nf 147/90/76 80/91/76 165/92/76\r\nf 94/93/77 146/88/77 92/94/77\r\nf 95/95/78 147/90/78 149/96/78\r\nf 94/93/79 150/97/79 148/98/79\r\nf 151/99/80 95/95/80 149/96/80\r\nf 98/100/81 150/97/81 96/101/81\r\nf 99/102/82 151/99/82 153/103/82\r\nf 100/104/83 152/105/83 98/100/83\r\nf 101/106/84 153/103/84 155/107/84\r\nf 102/108/85 154/109/85 100/104/85\r\nf 103/110/86 155/107/86 157/111/86\r\nf 102/108/87 158/112/87 156/113/87\r\nf 159/114/88 103/110/88 157/111/88\r\nf 106/115/89 158/112/89 104/116/89\r\nf 107/117/90 159/114/90 161/118/90\r\nf 108/119/91 160/120/91 106/115/91\r\nf 109/121/92 161/118/92 163/122/92\r\nf 67/123/93 162/124/93 108/119/93\r\nf 67/123/94 163/122/94 68/125/94\r\nf 128/126/95 162/124/95 110/127/95\r\nf 129/128/96 163/122/96 161/118/96\r\nf 128/126/97 158/112/97 160/120/97\r\nf 159/114/98 129/128/98 161/118/98\r\nf 156/113/99 179/129/99 126/130/99\r\nf 157/111/100 180/131/100 159/114/100\r\nf 154/109/101 126/130/101 124/132/101\r\nf 155/107/102 127/133/102 157/111/102\r\nf 152/105/103 124/132/103 122/134/103\r\nf 153/103/104 125/135/104 155/107/104\r\nf 150/97/105 122/134/105 120/136/105\r\nf 151/99/106 123/137/106 153/103/106\r\nf 148/98/107 120/136/107 118/138/107\r\nf 149/96/108 121/139/108 151/99/108\r\nf 146/88/109 118/138/109 116/140/109\r\nf 147/90/110 119/141/110 149/96/110\r\nf 164/89/111 116/140/111 114/142/111\r\nf 165/92/112 117/143/112 147/90/112\r\nf 114/142/113 177/144/113 164/89/113\r\nf 177/144/114 115/145/114 165/92/114\r\nf 162/124/115 112/146/115 110/127/115\r\nf 163/122/116 113/147/116 68/125/116\r\nf 112/146/117 178/148/117 183/149/117\r\nf 178/148/118 113/147/118 184/150/118\r\nf 181/151/119 178/148/119 177/144/119\r\nf 182/152/120 178/148/120 184/150/120\r\nf 135/153/121 176/71/121 174/67/121\r\nf 176/71/122 136/154/122 175/70/122\r\nf 133/155/123 174/67/123 172/72/123\r\nf 175/70/124 134/156/124 173/74/124\r\nf 133/155/125 170/80/125 131/157/125\r\nf 134/156/126 171/81/126 173/74/126\r\nf 166/158/127 185/159/127 168/84/127\r\nf 186/160/128 167/161/128 169/85/128\r\nf 131/157/129 168/84/129 185/159/129\r\nf 169/85/130 132/162/130 186/160/130\r\nf 190/163/131 187/164/131 144/165/131\r\nf 190/163/132 188/166/132 189/167/132\r\nf 187/164/133 69/168/133 185/159/133\r\nf 188/166/134 69/168/134 189/167/134\r\nf 131/157/135 69/168/135 130/169/135\r\nf 132/162/135 69/168/135 186/160/135\r\nf 142/170/136 191/171/136 144/165/136\r\nf 192/172/137 143/173/137 145/174/137\r\nf 140/175/138 193/176/138 142/170/138\r\nf 194/177/139 141/178/139 143/173/139\r\nf 197/179/140 140/175/140 139/180/140\r\nf 198/181/141 141/178/141 196/182/141\r\nf 71/183/142 139/180/142 138/184/142\r\nf 71/183/143 139/180/143 198/181/143\r\nf 144/165/144 70/185/144 190/163/144\r\nf 145/174/145 70/185/145 192/172/145\r\nf 191/171/146 208/186/146 70/185/146\r\nf 192/172/147 208/186/147 207/187/147\r\nf 71/183/148 200/188/148 197/179/148\r\nf 201/189/149 71/183/149 198/181/149\r\nf 197/179/150 202/190/150 195/191/150\r\nf 203/192/151 198/181/151 196/182/151\r\nf 202/190/152 193/176/152 195/191/152\r\nf 203/192/153 194/177/153 205/193/153\r\nf 193/176/154 206/194/154 191/171/154\r\nf 207/187/155 194/177/155 192/172/155\r\nf 204/195/156 200/188/156 199/196/156\r\nf 205/193/157 201/189/157 203/192/157\r\nf 199/196/158 206/194/158 204/195/158\r\nf 207/187/159 199/196/159 205/193/159\r\nf 139/180/160 164/89/160 177/144/160\r\nf 165/92/161 139/180/161 177/144/161\r\nf 140/175/162 211/197/162 164/89/162\r\nf 212/198/163 141/178/163 165/92/163\r\nf 144/165/164 211/197/164 142/170/164\r\nf 145/174/165 212/198/165 214/199/165\r\nf 187/164/166 213/200/166 144/165/166\r\nf 188/166/167 214/199/167 167/161/167\r\nf 209/201/168 166/158/168 81/83/168\r\nf 210/202/169 167/161/169 214/199/169\r\nf 215/203/170 213/200/170 209/201/170\r\nf 216/204/171 214/199/171 212/198/171\r\nf 79/87/172 211/197/172 215/203/172\r\nf 212/198/173 80/91/173 216/204/173\r\nf 130/169/174 222/205/174 131/157/174\r\nf 130/169/175 223/206/175 72/207/175\r\nf 133/155/176 222/205/176 220/208/176\r\nf 223/206/177 134/156/177 221/209/177\r\nf 135/153/178 220/208/178 218/210/178\r\nf 221/209/179 136/154/179 219/211/179\r\nf 137/212/135 218/210/135 217/213/135\r\nf 219/211/135 137/212/135 217/213/135\r\nf 218/210/180 231/214/180 217/213/180\r\nf 219/211/181 231/214/181 230/215/181\r\nf 218/210/182 227/216/182 229/217/182\r\nf 228/218/183 219/211/183 230/215/183\r\nf 220/208/142 225/219/142 227/216/142\r\nf 226/220/184 221/209/184 228/218/184\r\nf 72/207/185 225/219/185 222/205/185\r\nf 72/207/186 226/220/186 224/221/186\r\nf 224/221/187 229/217/187 225/219/187\r\nf 230/215/188 224/221/188 226/220/188\r\nf 225/219/189 229/217/189 227/216/189\r\nf 228/218/190 230/215/190 226/220/190\r\nf 183/149/191 234/222/191 232/223/191\r\nf 235/224/192 184/150/192 233/225/192\r\nf 112/146/193 232/223/193 254/226/193\r\nf 233/225/194 113/147/194 255/227/194\r\nf 112/146/195 256/228/195 110/127/195\r\nf 113/147/196 257/229/196 255/227/196\r\nf 114/142/197 234/222/197 181/151/197\r\nf 115/145/198 235/224/198 253/230/198\r\nf 114/142/199 250/231/199 252/232/199\r\nf 251/233/200 115/145/200 253/230/200\r\nf 116/140/201 248/234/201 250/231/201\r\nf 249/235/202 117/143/202 251/233/202\r\nf 118/138/203 246/236/203 248/234/203\r\nf 247/237/204 119/141/204 249/235/204\r\nf 120/136/205 244/238/205 246/236/205\r\nf 245/239/206 121/139/206 247/237/206\r\nf 124/132/207 244/238/207 122/134/207\r\nf 125/135/208 245/239/208 243/240/208\r\nf 126/130/209 242/241/209 124/132/209\r\nf 127/133/210 243/240/210 241/242/210\r\nf 126/130/211 236/243/211 240/244/211\r\nf 237/245/212 127/133/212 241/242/212\r\nf 179/129/213 238/246/213 236/243/213\r\nf 239/247/214 180/131/214 237/245/214\r\nf 128/126/215 256/228/215 238/246/215\r\nf 257/229/216 129/128/216 239/247/216\r\nf 256/228/217 276/248/217 238/246/217\r\nf 257/229/218 277/249/218 259/250/218\r\nf 236/243/219 276/248/219 278/251/219\r\nf 277/249/220 237/245/220 279/252/220\r\nf 236/243/221 274/253/221 240/244/221\r\nf 237/245/222 275/254/222 279/252/222\r\nf 240/244/223 272/255/223 242/241/223\r\nf 241/242/224 273/256/224 275/254/224\r\nf 244/238/225 272/255/225 270/257/225\r\nf 273/256/226 245/239/226 271/258/226\r\nf 244/238/227 268/259/227 246/236/227\r\nf 245/239/228 269/260/228 271/258/228\r\nf 248/234/229 268/259/229 266/261/229\r\nf 269/260/230 249/235/230 267/262/230\r\nf 248/234/231 264/263/231 250/231/231\r\nf 249/235/232 265/264/232 267/262/232\r\nf 250/231/233 262/265/233 252/232/233\r\nf 251/233/234 263/266/234 265/264/234\r\nf 234/222/235 262/265/235 280/267/235\r\nf 263/266/236 235/224/236 281/268/236\r\nf 256/228/237 260/269/237 258/270/237\r\nf 261/271/238 257/229/238 259/250/238\r\nf 254/226/239 282/272/239 260/269/239\r\nf 283/273/240 255/227/240 261/271/240\r\nf 232/223/241 280/267/241 282/272/241\r\nf 281/268/242 233/225/242 283/273/242\r\nf 67/123/243 284/274/243 73/275/243\r\nf 285/276/244 67/123/244 73/275/244\r\nf 108/119/245 286/277/245 284/274/245\r\nf 287/278/246 109/121/246 285/276/246\r\nf 104/116/247 286/277/247 106/115/247\r\nf 105/279/248 287/278/248 289/280/248\r\nf 102/108/249 288/281/249 104/116/249\r\nf 103/110/250 289/280/250 291/282/250\r\nf 100/104/251 290/283/251 102/108/251\r\nf 101/106/252 291/282/252 293/284/252\r\nf 100/104/253 294/285/253 292/286/253\r\nf 295/287/254 101/106/254 293/284/254\r\nf 96/101/255 294/285/255 98/100/255\r\nf 97/288/256 295/287/256 297/289/256\r\nf 96/101/257 298/290/257 296/291/257\r\nf 299/292/258 97/288/258 297/289/258\r\nf 94/93/259 300/293/259 298/290/259\r\nf 301/294/260 95/95/260 299/292/260\r\nf 309/295/261 338/296/261 308/297/261\r\nf 309/298/262 339/299/262 329/300/262\r\nf 308/297/263 336/301/263 307/302/263\r\nf 308/303/264 337/304/264 339/299/264\r\nf 307/302/265 340/305/265 306/306/265\r\nf 307/307/266 341/308/266 337/304/266\r\nf 89/69/267 306/306/267 340/305/267\r\nf 306/306/268 90/75/268 341/308/268\r\nf 87/73/269 340/305/269 334/309/269\r\nf 341/308/270 88/78/270 335/310/270\r\nf 85/76/271 334/309/271 330/311/271\r\nf 335/310/272 86/77/272 331/312/272\r\nf 83/79/273 330/311/273 332/313/273\r\nf 331/312/274 84/82/274 333/314/274\r\nf 330/311/275 338/296/275 332/313/275\r\nf 339/299/276 331/312/276 333/314/276\r\nf 334/309/277 336/301/277 330/311/277\r\nf 335/310/278 337/304/278 341/308/278\r\nf 332/313/279 328/315/279 326/316/279\r\nf 333/314/280 329/300/280 339/299/280\r\nf 81/83/281 332/313/281 326/316/281\r\nf 333/314/282 82/86/282 327/317/282\r\nf 342/318/283 215/203/283 209/201/283\r\nf 343/319/284 216/204/284 345/320/284\r\nf 326/316/285 209/201/285 81/83/285\r\nf 327/317/286 210/202/286 343/319/286\r\nf 215/203/287 346/321/287 79/87/287\r\nf 216/204/288 347/322/288 345/320/288\r\nf 346/321/289 92/94/289 79/87/289\r\nf 347/322/290 93/323/290 301/294/290\r\nf 324/324/291 304/325/291 77/326/291\r\nf 325/327/292 304/328/292 353/329/292\r\nf 352/330/293 78/331/293 304/325/293\r\nf 353/329/294 78/332/294 351/333/294\r\nf 78/331/295 348/334/295 305/335/295\r\nf 349/336/296 78/332/296 305/337/296\r\nf 305/335/297 328/315/297 309/295/297\r\nf 329/300/298 305/337/298 309/298/298\r\nf 328/315/299 342/318/299 326/316/299\r\nf 329/300/300 343/319/300 349/336/300\r\nf 296/291/301 318/338/301 310/339/301\r\nf 319/340/302 297/289/302 311/341/302\r\nf 316/342/303 77/326/303 76/343/303\r\nf 317/344/304 77/345/304 325/327/304\r\nf 358/346/305 303/347/305 302/348/305\r\nf 359/349/306 303/350/306 357/351/306\r\nf 303/347/307 354/352/307 75/353/307\r\nf 355/354/308 303/350/308 75/355/308\r\nf 75/353/309 316/342/309 76/343/309\r\nf 317/344/310 75/355/310 76/356/310\r\nf 292/357/311 362/358/311 364/359/311\r\nf 363/360/312 293/361/312 365/362/312\r\nf 364/359/313 368/363/313 366/364/313\r\nf 369/365/314 365/362/314 367/366/314\r\nf 366/364/315 370/367/315 372/368/315\r\nf 371/369/316 367/366/316 373/370/316\r\nf 372/368/317 376/371/317 374/372/317\r\nf 377/373/318 373/370/318 375/374/318\r\nf 378/375/319 376/371/319 314/376/319\r\nf 379/377/320 377/373/320 375/374/320\r\nf 316/342/321 374/372/321 378/375/321\r\nf 375/374/322 317/344/322 379/377/322\r\nf 354/352/323 372/368/323 374/372/323\r\nf 373/370/324 355/354/324 375/374/324\r\nf 356/378/325 366/364/325 372/368/325\r\nf 367/366/326 357/351/326 373/370/326\r\nf 358/346/327 364/359/327 366/364/327\r\nf 365/362/328 359/349/328 367/366/328\r\nf 292/357/329 360/379/329 290/380/329\r\nf 293/361/330 361/381/330 365/362/330\r\nf 360/379/331 302/348/331 74/382/331\r\nf 361/381/332 302/383/332 359/349/332\r\nf 284/384/333 288/385/333 290/380/333\r\nf 289/386/334 285/387/334 291/388/334\r\nf 284/384/335 360/379/335 74/382/335\r\nf 361/381/336 285/387/336 74/389/336\r\nf 73/390/337 284/384/337 74/382/337\r\nf 74/389/338 285/387/338 73/391/338\r\nf 296/291/339 362/358/339 294/285/339\r\nf 297/289/340 363/360/340 311/341/340\r\nf 310/339/341 368/363/341 362/358/341\r\nf 369/365/342 311/341/342 363/360/342\r\nf 312/392/343 370/367/343 368/363/343\r\nf 371/369/344 313/393/344 369/365/344\r\nf 376/371/345 382/394/345 314/376/345\r\nf 377/373/346 383/395/346 371/369/346\r\nf 350/396/347 384/397/347 348/334/347\r\nf 351/333/348 385/398/348 387/399/348\r\nf 384/397/349 320/400/349 318/338/349\r\nf 385/398/350 321/401/350 387/399/350\r\nf 298/290/351 384/397/351 318/338/351\r\nf 385/398/352 299/292/352 319/340/352\r\nf 300/293/353 342/318/353 384/397/353\r\nf 343/319/354 301/294/354 385/398/354\r\nf 342/318/355 348/334/355 384/397/355\r\nf 385/398/356 349/336/356 343/319/356\r\nf 300/293/357 346/321/357 344/402/357\r\nf 345/320/358 347/322/358 301/294/358\r\nf 322/403/359 378/375/359 314/376/359\r\nf 323/404/360 379/377/360 381/405/360\r\nf 378/375/361 324/324/361 316/342/361\r\nf 379/377/362 325/327/362 381/405/362\r\nf 386/406/363 322/403/363 320/400/363\r\nf 387/399/364 323/404/364 381/405/364\r\nf 352/330/365 386/406/365 350/396/365\r\nf 353/329/366 387/399/366 381/405/366\r\nf 324/324/367 380/407/367 352/330/367\r\nf 353/329/368 381/405/368 325/327/368\r\nf 388/408/369 402/409/369 400/410/369\r\nf 389/411/370 403/412/370 415/413/370\r\nf 400/410/371 404/414/371 398/415/371\r\nf 405/416/372 401/417/372 399/418/372\r\nf 404/414/373 396/419/373 398/415/373\r\nf 405/416/374 397/420/374 407/421/374\r\nf 406/422/375 394/423/375 396/419/375\r\nf 407/421/376 395/424/376 409/425/376\r\nf 408/426/377 392/427/377 394/423/377\r\nf 409/425/378 393/428/378 411/429/378\r\nf 392/427/379 412/430/379 390/431/379\r\nf 413/432/380 393/428/380 391/433/380\r\nf 410/434/381 418/435/381 412/430/381\r\nf 419/436/382 411/429/382 413/432/382\r\nf 408/426/383 420/437/383 410/434/383\r\nf 421/438/384 409/425/384 411/429/384\r\nf 424/439/385 408/426/385 406/422/385\r\nf 425/440/386 409/425/386 423/441/386\r\nf 426/442/387 406/422/387 404/414/387\r\nf 427/443/388 407/421/388 425/440/388\r\nf 428/444/389 404/414/389 402/409/389\r\nf 429/445/390 405/416/390 427/443/390\r\nf 402/409/391 416/446/391 428/444/391\r\nf 417/447/392 403/412/392 429/445/392\r\nf 320/400/393 442/448/393 318/338/393\r\nf 321/401/394 443/449/394 445/450/394\r\nf 390/431/395 444/451/395 320/452/395\r\nf 391/433/396 445/453/396 413/432/396\r\nf 310/339/397 442/448/397 312/392/397\r\nf 443/449/398 311/341/398 313/393/398\r\nf 382/454/399 414/455/399 388/408/399\r\nf 415/413/400 383/456/400 389/411/400\r\nf 412/430/401 440/457/401 444/451/401\r\nf 441/458/402 413/432/402 445/453/402\r\nf 446/459/403 440/457/403 438/460/403\r\nf 447/461/404 441/458/404 445/453/404\r\nf 434/462/135 438/460/135 436/463/135\r\nf 439/464/135 435/465/135 437/466/135\r\nf 448/467/405 434/462/405 432/468/405\r\nf 449/469/406 435/465/406 447/461/406\r\nf 448/467/407 450/470/407 430/471/407\r\nf 449/469/408 451/472/408 433/473/408\r\nf 430/471/409 416/446/409 414/455/409\r\nf 431/474/410 417/447/410 451/472/410\r\nf 312/392/411 430/475/411 382/394/411\r\nf 431/476/412 313/393/412 383/395/412\r\nf 442/448/413 448/477/413 312/392/413\r\nf 443/449/414 449/478/414 447/479/414\r\nf 442/448/415 444/480/415 446/481/415\r\nf 447/479/416 445/450/416 443/449/416\r\nf 416/446/417 452/482/417 476/483/417\r\nf 453/484/418 417/447/418 477/485/418\r\nf 432/468/419 452/482/419 450/470/419\r\nf 433/473/420 453/484/420 463/486/420\r\nf 432/468/421 460/487/421 462/488/421\r\nf 461/489/422 433/473/422 463/486/422\r\nf 436/463/423 460/487/423 434/462/423\r\nf 437/466/424 461/489/424 459/490/424\r\nf 438/460/425 458/491/425 436/463/425\r\nf 439/464/426 459/490/426 457/492/426\r\nf 438/460/427 454/493/427 456/494/427\r\nf 455/495/428 439/464/428 457/492/428\r\nf 440/457/429 474/496/429 454/493/429\r\nf 475/497/429 441/458/429 455/495/429\r\nf 428/444/430 476/483/430 464/498/430\r\nf 477/485/431 429/445/431 465/499/431\r\nf 426/442/432 464/498/432 466/500/432\r\nf 465/499/433 427/443/433 467/501/433\r\nf 424/439/434 466/500/434 468/502/434\r\nf 467/501/435 425/440/435 469/503/435\r\nf 424/439/436 470/504/436 422/505/436\r\nf 425/440/437 471/506/437 469/503/437\r\nf 422/505/438 472/507/438 420/437/438\r\nf 423/441/439 473/508/439 471/506/439\r\nf 420/437/440 474/496/440 418/435/440\r\nf 421/438/441 475/497/441 473/508/441\r\nf 456/494/442 478/509/442 458/491/442\r\nf 457/492/443 479/510/443 481/511/443\r\nf 480/512/444 484/513/444 478/509/444\r\nf 481/511/445 485/514/445 483/515/445\r\nf 484/513/446 488/516/446 486/517/446\r\nf 489/518/447 485/514/447 487/519/447\r\nf 488/516/448 492/520/448 486/517/448\r\nf 489/518/449 493/521/449 491/522/449\r\nf 464/498/450 486/517/450 492/520/450\r\nf 487/519/451 465/499/451 493/521/451\r\nf 484/513/452 476/483/452 452/482/452\r\nf 485/514/453 477/485/453 487/519/453\r\nf 462/488/454 484/513/454 452/482/454\r\nf 463/486/455 485/514/455 479/510/455\r\nf 458/491/135 462/488/135 460/487/135\r\nf 463/486/135 459/490/135 461/489/135\r\nf 474/496/456 456/494/456 454/493/456\r\nf 475/497/457 457/492/457 481/511/457\r\nf 472/507/458 480/512/458 474/496/458\r\nf 481/511/459 473/508/459 475/497/459\r\nf 488/516/460 472/507/460 470/504/460\r\nf 489/518/461 473/508/461 483/515/461\r\nf 490/523/462 470/504/462 468/502/462\r\nf 491/522/463 471/506/463 489/518/463\r\nf 466/500/464 490/523/464 468/502/464\r\nf 491/522/465 467/501/465 469/503/465\r\nf 464/498/466 492/520/466 466/500/466\r\nf 467/501/467 493/521/467 465/499/467\r\nf 392/427/468 504/524/468 502/525/468\r\nf 505/526/469 393/428/469 503/527/469\r\nf 394/423/470 502/525/470 500/528/470\r\nf 503/527/471 395/424/471 501/529/471\r\nf 394/423/472 498/530/472 396/419/472\r\nf 395/424/473 499/531/473 501/529/473\r\nf 396/419/474 496/532/474 398/533/474\r\nf 397/420/475 497/534/475 499/531/475\r\nf 398/533/476 494/535/476 400/536/476\r\nf 399/537/477 495/538/477 497/534/477\r\nf 400/536/478 506/539/478 388/540/478\r\nf 401/541/479 507/542/479 495/538/479\r\nf 502/525/480 506/539/480 494/535/480\r\nf 503/527/481 507/542/481 505/526/481\r\nf 494/535/482 500/528/482 502/525/482\r\nf 501/529/483 495/538/483 503/527/483\r\nf 496/532/484 498/530/484 500/528/484\r\nf 501/529/485 499/531/485 497/534/485\r\nf 382/394/486 506/543/486 314/376/486\r\nf 383/544/487 507/542/487 389/545/487\r\nf 314/546/488 504/524/488 322/547/488\r\nf 505/526/489 315/548/489 323/549/489\r\nf 320/452/490 504/524/490 390/431/490\r\nf 505/526/491 321/550/491 391/433/491\r\nf 47/1/492 1/13/492 3/2/492\r\nf 4/4/493 2/16/493 48/5/493\r\nf 45/3/494 3/2/494 5/7/494\r\nf 6/9/495 4/4/495 46/6/495\r\nf 3/2/496 9/14/496 7/11/496\r\nf 8/12/497 10/15/497 4/4/497\r\nf 1/13/498 11/17/498 9/14/498\r\nf 10/15/499 12/20/499 2/16/499\r\nf 11/17/500 13/26/500 15/18/500\r\nf 16/19/501 14/27/501 12/20/501\r\nf 9/14/502 15/18/502 17/21/502\r\nf 18/22/503 16/19/503 10/15/503\r\nf 21/23/504 19/32/504 17/21/504\r\nf 22/24/505 16/19/505 18/22/505\r\nf 13/26/506 23/28/506 21/23/506\r\nf 22/24/507 24/31/507 14/27/507\r\nf 23/28/508 25/39/508 27/29/508\r\nf 28/30/509 26/54/509 24/31/509\r\nf 27/29/510 29/35/510 19/32/510\r\nf 28/30/511 22/24/511 20/25/511\r\nf 33/34/512 31/45/512 29/35/512\r\nf 34/36/513 28/30/513 30/33/513\r\nf 35/38/514 33/34/514 27/29/514\r\nf 36/40/515 26/54/515 28/30/515\r\nf 37/41/516 39/44/516 33/34/516\r\nf 38/42/517 36/40/517 34/36/517\r\nf 39/44/518 41/47/518 31/45/518\r\nf 40/43/519 34/36/519 32/37/519\r\nf 45/3/520 43/8/520 41/47/520\r\nf 46/6/521 40/43/521 42/46/521\r\nf 47/1/522 45/3/522 39/44/522\r\nf 48/5/523 38/42/523 40/43/523\r\nf 37/41/524 51/51/524 49/48/524\r\nf 38/42/525 48/5/525 50/49/525\r\nf 35/38/526 53/53/526 51/51/526\r\nf 36/40/527 38/42/527 52/50/527\r\nf 25/39/528 55/56/528 53/53/528\r\nf 26/54/529 36/40/529 54/52/529\r\nf 23/28/530 57/59/530 55/56/530\r\nf 24/31/531 26/54/531 56/55/531\r\nf 23/28/532 13/26/532 59/58/532\r\nf 60/60/533 14/27/533 24/31/533\r\nf 13/26/534 11/17/534 63/61/534\r\nf 64/62/535 12/20/535 14/27/535\r\nf 11/17/536 1/13/536 65/63/536\r\nf 66/64/537 2/16/537 12/20/537\r\nf 1/13/538 47/1/538 49/48/538\r\nf 50/49/539 48/5/539 2/16/539\r\nf 174/67/540 176/71/540 91/68/540\r\nf 175/70/541 90/75/541 91/68/541\r\nf 172/72/542 174/67/542 89/69/542\r\nf 173/74/543 88/78/543 90/75/543\r\nf 85/76/544 170/80/544 172/72/544\r\nf 173/74/545 171/81/545 86/77/545\r\nf 83/79/546 168/84/546 170/80/546\r\nf 171/81/547 169/85/547 84/82/547\r\nf 81/83/548 166/158/548 168/84/548\r\nf 169/85/549 167/161/549 82/86/549\r\nf 79/87/550 92/94/550 146/88/550\r\nf 147/90/551 93/323/551 80/91/551\r\nf 94/93/552 148/98/552 146/88/552\r\nf 95/95/553 93/323/553 147/90/553\r\nf 94/93/554 96/101/554 150/97/554\r\nf 151/99/555 97/288/555 95/95/555\r\nf 98/100/556 152/105/556 150/97/556\r\nf 99/102/557 97/288/557 151/99/557\r\nf 100/104/558 154/109/558 152/105/558\r\nf 101/106/559 99/102/559 153/103/559\r\nf 102/108/560 156/113/560 154/109/560\r\nf 103/110/561 101/106/561 155/107/561\r\nf 102/108/562 104/116/562 158/112/562\r\nf 159/114/563 105/279/563 103/110/563\r\nf 106/115/564 160/120/564 158/112/564\r\nf 107/117/565 105/279/565 159/114/565\r\nf 108/119/566 162/124/566 160/120/566\r\nf 109/121/567 107/117/567 161/118/567\r\nf 67/123/568 68/125/568 162/124/568\r\nf 67/123/569 109/121/569 163/122/569\r\nf 128/126/570 160/120/570 162/124/570\r\nf 129/128/571 111/551/571 163/122/571\r\nf 128/126/572 179/129/572 158/112/572\r\nf 159/114/573 180/131/573 129/128/573\r\nf 156/113/574 158/112/574 179/129/574\r\nf 157/111/575 127/133/575 180/131/575\r\nf 154/109/576 156/113/576 126/130/576\r\nf 155/107/577 125/135/577 127/133/577\r\nf 152/105/578 154/109/578 124/132/578\r\nf 153/103/579 123/137/579 125/135/579\r\nf 150/97/580 152/105/580 122/134/580\r\nf 151/99/581 121/139/581 123/137/581\r\nf 148/98/582 150/97/582 120/136/582\r\nf 149/96/583 119/141/583 121/139/583\r\nf 146/88/584 148/98/584 118/138/584\r\nf 147/90/585 117/143/585 119/141/585\r\nf 164/89/586 146/88/586 116/140/586\r\nf 165/92/587 115/145/587 117/143/587\r\nf 114/142/588 181/151/588 177/144/588\r\nf 177/144/589 182/152/589 115/145/589\r\nf 162/124/590 68/125/590 112/146/590\r\nf 163/122/591 111/551/591 113/147/591\r\nf 112/146/592 68/125/592 178/148/592\r\nf 178/148/593 68/125/593 113/147/593\r\nf 181/151/594 183/149/594 178/148/594\r\nf 182/152/595 177/144/595 178/148/595\r\nf 135/153/596 137/212/596 176/71/596\r\nf 176/71/597 137/212/597 136/154/597\r\nf 133/155/598 135/153/598 174/67/598\r\nf 175/70/599 136/154/599 134/156/599\r\nf 133/155/600 172/72/600 170/80/600\r\nf 134/156/601 132/162/601 171/81/601\r\nf 166/158/602 187/164/602 185/159/602\r\nf 186/160/603 188/166/603 167/161/603\r\nf 131/157/604 170/80/604 168/84/604\r\nf 169/85/605 171/81/605 132/162/605\r\nf 190/163/132 189/167/132 187/164/132\r\nf 190/163/606 145/174/606 188/166/606\r\nf 187/164/134 189/167/134 69/168/134\r\nf 188/166/607 186/160/607 69/168/607\r\nf 131/157/135 185/159/135 69/168/135\r\nf 132/162/135 130/169/135 69/168/135\r\nf 142/170/608 193/176/608 191/171/608\r\nf 192/172/609 194/177/609 143/173/609\r\nf 140/175/610 195/191/610 193/176/610\r\nf 194/177/611 196/182/611 141/178/611\r\nf 197/179/612 195/191/612 140/175/612\r\nf 198/181/613 139/180/613 141/178/613\r\nf 71/183/614 197/179/614 139/180/614\r\nf 71/183/184 138/184/184 139/180/184\r\nf 144/165/615 191/171/615 70/185/615\r\nf 145/174/616 190/163/616 70/185/616\r\nf 191/171/146 206/194/146 208/186/146\r\nf 192/172/147 70/185/147 208/186/147\r\nf 71/183/617 199/196/617 200/188/617\r\nf 201/189/618 199/196/618 71/183/618\r\nf 197/179/619 200/188/619 202/190/619\r\nf 203/192/620 201/189/620 198/181/620\r\nf 202/190/621 204/195/621 193/176/621\r\nf 203/192/622 196/182/622 194/177/622\r\nf 193/176/623 204/195/623 206/194/623\r\nf 207/187/624 205/193/624 194/177/624\r\nf 204/195/625 202/190/625 200/188/625\r\nf 205/193/626 199/196/626 201/189/626\r\nf 199/196/627 208/186/627 206/194/627\r\nf 207/187/628 208/186/628 199/196/628\r\nf 139/180/629 140/175/629 164/89/629\r\nf 165/92/630 141/178/630 139/180/630\r\nf 140/175/631 142/170/631 211/197/631\r\nf 212/198/632 143/173/632 141/178/632\r\nf 144/165/633 213/200/633 211/197/633\r\nf 145/174/634 143/173/634 212/198/634\r\nf 187/164/635 166/158/635 213/200/635\r\nf 188/166/636 145/174/636 214/199/636\r\nf 209/201/637 213/200/637 166/158/637\r\nf 210/202/638 82/86/638 167/161/638\r\nf 215/203/639 211/197/639 213/200/639\r\nf 216/204/640 210/202/640 214/199/640\r\nf 79/87/641 164/89/641 211/197/641\r\nf 212/198/642 165/92/642 80/91/642\r\nf 130/169/643 72/207/643 222/205/643\r\nf 130/169/644 132/162/644 223/206/644\r\nf 133/155/645 131/157/645 222/205/645\r\nf 223/206/646 132/162/646 134/156/646\r\nf 135/153/647 133/155/647 220/208/647\r\nf 221/209/648 134/156/648 136/154/648\r\nf 137/212/649 135/153/649 218/210/649\r\nf 219/211/650 136/154/650 137/212/650\r\nf 218/210/180 229/217/180 231/214/180\r\nf 219/211/181 217/213/181 231/214/181\r\nf 218/210/651 220/208/651 227/216/651\r\nf 228/218/652 221/209/652 219/211/652\r\nf 220/208/142 222/205/142 225/219/142\r\nf 226/220/184 223/206/184 221/209/184\r\nf 72/207/185 224/221/185 225/219/185\r\nf 72/207/186 223/206/186 226/220/186\r\nf 224/221/653 231/214/653 229/217/653\r\nf 230/215/654 231/214/654 224/221/654\r\nf 183/149/655 181/151/655 234/222/655\r\nf 235/224/656 182/152/656 184/150/656\r\nf 112/146/657 183/149/657 232/223/657\r\nf 233/225/658 184/150/658 113/147/658\r\nf 112/146/659 254/226/659 256/228/659\r\nf 113/147/660 111/551/660 257/229/660\r\nf 114/142/661 252/232/661 234/222/661\r\nf 115/145/662 182/152/662 235/224/662\r\nf 114/142/663 116/140/663 250/231/663\r\nf 251/233/664 117/143/664 115/145/664\r\nf 116/140/665 118/138/665 248/234/665\r\nf 249/235/666 119/141/666 117/143/666\r\nf 118/138/667 120/136/667 246/236/667\r\nf 247/237/668 121/139/668 119/141/668\r\nf 120/136/669 122/134/669 244/238/669\r\nf 245/239/670 123/137/670 121/139/670\r\nf 124/132/671 242/241/671 244/238/671\r\nf 125/135/672 123/137/672 245/239/672\r\nf 126/130/673 240/244/673 242/241/673\r\nf 127/133/674 125/135/674 243/240/674\r\nf 126/130/675 179/129/675 236/243/675\r\nf 237/245/676 180/131/676 127/133/676\r\nf 179/129/677 128/126/677 238/246/677\r\nf 239/247/678 129/128/678 180/131/678\r\nf 128/126/679 110/127/679 256/228/679\r\nf 257/229/680 111/551/680 129/128/680\r\nf 256/228/681 258/270/681 276/248/681\r\nf 257/229/682 239/247/682 277/249/682\r\nf 236/243/683 238/246/683 276/248/683\r\nf 277/249/684 239/247/684 237/245/684\r\nf 236/243/685 278/251/685 274/253/685\r\nf 237/245/686 241/242/686 275/254/686\r\nf 240/244/687 274/253/687 272/255/687\r\nf 241/242/688 243/240/688 273/256/688\r\nf 244/238/689 242/241/689 272/255/689\r\nf 273/256/690 243/240/690 245/239/690\r\nf 244/238/691 270/257/691 268/259/691\r\nf 245/239/692 247/237/692 269/260/692\r\nf 248/234/693 246/236/693 268/259/693\r\nf 269/260/694 247/237/694 249/235/694\r\nf 248/234/695 266/261/695 264/263/695\r\nf 249/235/696 251/233/696 265/264/696\r\nf 250/231/697 264/263/697 262/265/697\r\nf 251/233/698 253/230/698 263/266/698\r\nf 234/222/235 252/232/235 262/265/235\r\nf 263/266/236 253/230/236 235/224/236\r\nf 256/228/699 254/226/699 260/269/699\r\nf 261/271/700 255/227/700 257/229/700\r\nf 254/226/701 232/223/701 282/272/701\r\nf 283/273/702 233/225/702 255/227/702\r\nf 232/223/703 234/222/703 280/267/703\r\nf 281/268/704 235/224/704 233/225/704\r\nf 67/123/705 108/119/705 284/274/705\r\nf 285/276/706 109/121/706 67/123/706\r\nf 108/119/707 106/115/707 286/277/707\r\nf 287/278/708 107/117/708 109/121/708\r\nf 104/116/709 288/281/709 286/277/709\r\nf 105/279/710 107/117/710 287/278/710\r\nf 102/108/711 290/283/711 288/281/711\r\nf 103/110/712 105/279/712 289/280/712\r\nf 100/104/713 292/286/713 290/283/713\r\nf 101/106/714 103/110/714 291/282/714\r\nf 100/104/715 98/100/715 294/285/715\r\nf 295/287/716 99/102/716 101/106/716\r\nf 96/101/717 296/291/717 294/285/717\r\nf 97/288/718 99/102/718 295/287/718\r\nf 96/101/719 94/93/719 298/290/719\r\nf 299/292/720 95/95/720 97/288/720\r\nf 94/93/721 92/94/721 300/293/721\r\nf 301/294/722 93/323/722 95/95/722\r\nf 309/295/723 328/315/723 338/296/723\r\nf 309/298/724 308/303/724 339/299/724\r\nf 308/297/725 338/296/725 336/301/725\r\nf 308/303/726 307/307/726 337/304/726\r\nf 307/302/727 336/301/727 340/305/727\r\nf 307/307/728 306/306/728 341/308/728\r\nf 89/69/729 91/68/729 306/306/729\r\nf 306/306/730 91/68/730 90/75/730\r\nf 87/73/731 89/69/731 340/305/731\r\nf 341/308/732 90/75/732 88/78/732\r\nf 85/76/733 87/73/733 334/309/733\r\nf 335/310/734 88/78/734 86/77/734\r\nf 83/79/735 85/76/735 330/311/735\r\nf 331/312/736 86/77/736 84/82/736\r\nf 330/311/737 336/301/737 338/296/737\r\nf 339/299/738 337/304/738 331/312/738\r\nf 334/309/739 340/305/739 336/301/739\r\nf 335/310/740 331/312/740 337/304/740\r\nf 332/313/741 338/296/741 328/315/741\r\nf 333/314/742 327/317/742 329/300/742\r\nf 81/83/743 83/79/743 332/313/743\r\nf 333/314/744 84/82/744 82/86/744\r\nf 342/318/745 344/402/745 215/203/745\r\nf 343/319/746 210/202/746 216/204/746\r\nf 326/316/747 342/318/747 209/201/747\r\nf 327/317/748 82/86/748 210/202/748\r\nf 215/203/749 344/402/749 346/321/749\r\nf 216/204/750 80/91/750 347/322/750\r\nf 346/321/751 300/293/751 92/94/751\r\nf 347/322/752 80/91/752 93/323/752\r\nf 324/324/753 352/330/753 304/325/753\r\nf 325/327/754 77/345/754 304/328/754\r\nf 352/330/755 350/396/755 78/331/755\r\nf 353/329/756 304/328/756 78/332/756\r\nf 78/331/757 350/396/757 348/334/757\r\nf 349/336/758 351/333/758 78/332/758\r\nf 305/335/759 348/334/759 328/315/759\r\nf 329/300/760 349/336/760 305/337/760\r\nf 328/315/761 348/334/761 342/318/761\r\nf 329/300/762 327/317/762 343/319/762\r\nf 296/291/763 298/290/763 318/338/763\r\nf 319/340/764 299/292/764 297/289/764\r\nf 316/342/765 324/324/765 77/326/765\r\nf 317/344/766 76/356/766 77/345/766\r\nf 358/346/767 356/378/767 303/347/767\r\nf 359/349/768 302/383/768 303/350/768\r\nf 303/347/769 356/378/769 354/352/769\r\nf 355/354/770 357/351/770 303/350/770\r\nf 75/353/771 354/352/771 316/342/771\r\nf 317/344/772 355/354/772 75/355/772\r\nf 292/357/773 294/285/773 362/358/773\r\nf 363/360/774 295/287/774 293/361/774\r\nf 364/359/775 362/358/775 368/363/775\r\nf 369/365/776 363/360/776 365/362/776\r\nf 366/364/777 368/363/777 370/367/777\r\nf 371/369/778 369/365/778 367/366/778\r\nf 372/368/779 370/367/779 376/371/779\r\nf 377/373/780 371/369/780 373/370/780\r\nf 378/375/781 374/372/781 376/371/781\r\nf 379/377/782 315/552/782 377/373/782\r\nf 316/342/783 354/352/783 374/372/783\r\nf 375/374/784 355/354/784 317/344/784\r\nf 354/352/785 356/378/785 372/368/785\r\nf 373/370/786 357/351/786 355/354/786\r\nf 356/378/787 358/346/787 366/364/787\r\nf 367/366/788 359/349/788 357/351/788\r\nf 358/346/789 360/379/789 364/359/789\r\nf 365/362/790 361/381/790 359/349/790\r\nf 292/357/791 364/359/791 360/379/791\r\nf 293/361/792 291/388/792 361/381/792\r\nf 360/379/793 358/346/793 302/348/793\r\nf 361/381/794 74/389/794 302/383/794\r\nf 284/384/795 286/553/795 288/385/795\r\nf 289/386/796 287/554/796 285/387/796\r\nf 284/384/797 290/380/797 360/379/797\r\nf 361/381/798 291/388/798 285/387/798\r\nf 296/291/799 310/339/799 362/358/799\r\nf 297/289/800 295/287/800 363/360/800\r\nf 310/339/801 312/392/801 368/363/801\r\nf 369/365/802 313/393/802 311/341/802\r\nf 312/392/803 382/394/803 370/367/803\r\nf 371/369/804 383/395/804 313/393/804\r\nf 376/371/805 370/367/805 382/394/805\r\nf 377/373/806 315/552/806 383/395/806\r\nf 350/396/807 386/406/807 384/397/807\r\nf 351/333/808 349/336/808 385/398/808\r\nf 384/397/809 386/406/809 320/400/809\r\nf 385/398/810 319/340/810 321/401/810\r\nf 298/290/811 300/293/811 384/397/811\r\nf 385/398/812 301/294/812 299/292/812\r\nf 300/293/813 344/402/813 342/318/813\r\nf 343/319/814 345/320/814 301/294/814\r\nf 322/403/815 380/407/815 378/375/815\r\nf 323/404/816 315/552/816 379/377/816\r\nf 378/375/817 380/407/817 324/324/817\r\nf 379/377/818 317/344/818 325/327/818\r\nf 386/406/819 380/407/819 322/403/819\r\nf 387/399/820 321/401/820 323/404/820\r\nf 352/330/821 380/407/821 386/406/821\r\nf 353/329/822 351/333/822 387/399/822\r\nf 388/408/823 414/455/823 402/409/823\r\nf 389/411/824 401/417/824 403/412/824\r\nf 400/410/825 402/409/825 404/414/825\r\nf 405/416/826 403/412/826 401/417/826\r\nf 404/414/827 406/422/827 396/419/827\r\nf 405/416/828 399/418/828 397/420/828\r\nf 406/422/829 408/426/829 394/423/829\r\nf 407/421/830 397/420/830 395/424/830\r\nf 408/426/831 410/434/831 392/427/831\r\nf 409/425/832 395/424/832 393/428/832\r\nf 392/427/833 410/434/833 412/430/833\r\nf 413/432/834 411/429/834 393/428/834\r\nf 410/434/835 420/437/835 418/435/835\r\nf 419/436/836 421/438/836 411/429/836\r\nf 408/426/837 422/505/837 420/437/837\r\nf 421/438/838 423/441/838 409/425/838\r\nf 424/439/839 422/505/839 408/426/839\r\nf 425/440/840 407/421/840 409/425/840\r\nf 426/442/841 424/439/841 406/422/841\r\nf 427/443/842 405/416/842 407/421/842\r\nf 428/444/843 426/442/843 404/414/843\r\nf 429/445/844 403/412/844 405/416/844\r\nf 402/409/845 414/455/845 416/446/845\r\nf 417/447/846 415/413/846 403/412/846\r\nf 320/400/847 444/480/847 442/448/847\r\nf 321/401/848 319/340/848 443/449/848\r\nf 390/431/849 412/430/849 444/451/849\r\nf 391/433/850 321/550/850 445/453/850\r\nf 310/339/851 318/338/851 442/448/851\r\nf 443/449/852 319/340/852 311/341/852\r\nf 382/454/853 430/471/853 414/455/853\r\nf 415/413/854 431/474/854 383/456/854\r\nf 412/430/855 418/435/855 440/457/855\r\nf 441/458/856 419/436/856 413/432/856\r\nf 446/459/857 444/451/857 440/457/857\r\nf 447/461/858 439/464/858 441/458/858\r\nf 434/462/859 446/459/859 438/460/859\r\nf 439/464/860 447/461/860 435/465/860\r\nf 448/467/861 446/459/861 434/462/861\r\nf 449/469/862 433/473/862 435/465/862\r\nf 448/467/863 432/468/863 450/470/863\r\nf 449/469/864 431/474/864 451/472/864\r\nf 430/471/865 450/470/865 416/446/865\r\nf 431/474/866 415/413/866 417/447/866\r\nf 312/392/867 448/477/867 430/475/867\r\nf 431/476/868 449/478/868 313/393/868\r\nf 442/448/869 446/481/869 448/477/869\r\nf 443/449/870 313/393/870 449/478/870\r\nf 416/446/871 450/470/871 452/482/871\r\nf 453/484/872 451/472/872 417/447/872\r\nf 432/468/873 462/488/873 452/482/873\r\nf 433/473/874 451/472/874 453/484/874\r\nf 432/468/421 434/462/421 460/487/421\r\nf 461/489/422 435/465/422 433/473/422\r\nf 436/463/875 458/491/875 460/487/875\r\nf 437/466/876 435/465/876 461/489/876\r\nf 438/460/877 456/494/877 458/491/877\r\nf 439/464/878 437/466/878 459/490/878\r\nf 438/460/879 440/457/879 454/493/879\r\nf 455/495/880 441/458/880 439/464/880\r\nf 440/457/881 418/435/881 474/496/881\r\nf 475/497/882 419/436/882 441/458/882\r\nf 428/444/883 416/446/883 476/483/883\r\nf 477/485/884 417/447/884 429/445/884\r\nf 426/442/885 428/444/885 464/498/885\r\nf 465/499/886 429/445/886 427/443/886\r\nf 424/439/887 426/442/887 466/500/887\r\nf 467/501/888 427/443/888 425/440/888\r\nf 424/439/889 468/502/889 470/504/889\r\nf 425/440/890 423/441/890 471/506/890\r\nf 422/505/891 470/504/891 472/507/891\r\nf 423/441/892 421/438/892 473/508/892\r\nf 420/437/893 472/507/893 474/496/893\r\nf 421/438/894 419/436/894 475/497/894\r\nf 456/494/895 480/512/895 478/509/895\r\nf 457/492/896 459/490/896 479/510/896\r\nf 480/512/897 482/555/897 484/513/897\r\nf 481/511/898 479/510/898 485/514/898\r\nf 484/513/899 482/555/899 488/516/899\r\nf 489/518/900 483/515/900 485/514/900\r\nf 488/516/901 490/523/901 492/520/901\r\nf 489/518/902 487/519/902 493/521/902\r\nf 464/498/903 476/483/903 486/517/903\r\nf 487/519/904 477/485/904 465/499/904\r\nf 484/513/905 486/517/905 476/483/905\r\nf 485/514/906 453/484/906 477/485/906\r\nf 462/488/907 478/509/907 484/513/907\r\nf 463/486/908 453/484/908 485/514/908\r\nf 458/491/909 478/509/909 462/488/909\r\nf 463/486/910 479/510/910 459/490/910\r\nf 474/496/911 480/512/911 456/494/911\r\nf 475/497/912 455/495/912 457/492/912\r\nf 472/507/913 482/555/913 480/512/913\r\nf 481/511/914 483/515/914 473/508/914\r\nf 488/516/915 482/555/915 472/507/915\r\nf 489/518/916 471/506/916 473/508/916\r\nf 490/523/917 488/516/917 470/504/917\r\nf 491/522/918 469/503/918 471/506/918\r\nf 466/500/919 492/520/919 490/523/919\r\nf 491/522/920 493/521/920 467/501/920\r\nf 392/427/921 390/431/921 504/524/921\r\nf 505/526/922 391/433/922 393/428/922\r\nf 394/423/923 392/427/923 502/525/923\r\nf 503/527/924 393/428/924 395/424/924\r\nf 394/423/925 500/528/925 498/530/925\r\nf 395/424/926 397/420/926 499/531/926\r\nf 396/419/927 498/530/927 496/532/927\r\nf 397/420/928 399/537/928 497/534/928\r\nf 398/533/929 496/532/929 494/535/929\r\nf 399/537/930 401/541/930 495/538/930\r\nf 400/536/931 494/535/931 506/539/931\r\nf 401/541/932 389/545/932 507/542/932\r\nf 502/525/933 504/524/933 506/539/933\r\nf 503/527/934 495/538/934 507/542/934\r\nf 494/535/935 496/532/935 500/528/935\r\nf 501/529/936 497/534/936 495/538/936\r\nf 382/394/937 388/556/937 506/543/937\r\nf 383/544/938 315/548/938 507/542/938\r\nf 314/546/939 506/539/939 504/524/939\r\nf 505/526/940 507/542/940 315/548/940\r\nf 320/452/941 322/547/941 504/524/941\r\nf 505/526/942 323/549/942 321/550/942\r\n";
        return raw;
    } else if (model === "Triangle") {
        var raw = "v 0.500000 0.500000 -1.000000\r\nv -0.500000 -0.500000 1.000000\r\nv 0.500000 -0.500000 -1.000000\r\nf 1/1/1 2/2/2 3/3/3";
        return raw;
    } else if (model == "Axis") {
        var raw = "v -1 0 0\r\nv 1 0 0\r\nf 1/1/1 2/2/2 \r\nvn 0 1 0 \r\nvn 0 1 0 \r\n\r\n";
        return raw;
    } else {
        var raw = "# Blender v2.82 (sub 7) OBJ File: ''\r\n# www.blender.org\r\nmtllib Cube2.mtl\r\no Cube\r\nv 1.000000 1.000000 -1.000000\r\nv 1.000000 -1.000000 -1.000000\r\nv 1.000000 1.000000 1.000000\r\nv 1.000000 -1.000000 1.000000\r\nv -1.000000 1.000000 -1.000000\r\nv -1.000000 -1.000000 -1.000000\r\nv -1.000000 1.000000 1.000000\r\nv -1.000000 -1.000000 1.000000\r\nvt 0.875000 0.500000\r\nvt 0.625000 0.750000\r\nvt 0.625000 0.500000\r\nvt 0.375000 1.000000\r\nvt 0.375000 0.750000\r\nvt 0.625000 0.000000\r\nvt 0.375000 0.250000\r\nvt 0.375000 0.000000\r\nvt 0.375000 0.500000\r\nvt 0.125000 0.750000\r\nvt 0.125000 0.500000\r\nvt 0.625000 0.250000\r\nvt 0.875000 0.750000\r\nvt 0.625000 1.000000\r\nvn 0.0000 1.0000 0.0000\r\nvn 0.0000 0.0000 1.0000\r\nvn -1.0000 0.0000 0.0000\r\nvn 0.0000 -1.0000 0.0000\r\nvn 1.0000 0.0000 0.0000\r\nvn 0.0000 0.0000 -1.0000\r\nusemtl Material\r\ns off\r\nf 5/1/1 3/2/1 1/3/1\r\nf 3/2/2 8/4/2 4/5/2\r\nf 7/6/3 6/7/3 8/8/3\r\nf 2/9/4 8/10/4 6/11/4\r\nf 1/3/5 4/5/5 2/9/5\r\nf 5/12/6 2/9/6 6/7/6\r\nf 5/1/1 7/13/1 3/2/1\r\nf 3/2/2 7/14/2 8/4/2\r\nf 7/6/3 5/12/3 6/7/3\r\nf 2/9/4 4/5/4 8/10/4\r\nf 1/3/5 3/2/5 4/5/5\r\nf 5/12/6 1/3/6 2/9/6\r\n\r\n";
        return raw;
    }
}

},{"fs":"jhUEF","path":"loE3o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"loE3o":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var process = require("process");
function assertPath(path) {
    if (typeof path !== "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += "/..";
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return "/" + resolvedPath;
            else return "/";
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return ".";
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = ".";
        if (path.length > 0 && trailingSeparator) path += "/";
        if (isAbsolute) return "/" + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return ".";
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += "/" + arg;
            }
        }
        if (joined === undefined) return ".";
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return "";
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = "";
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return "";
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return "";
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format("/", pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = "/";
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"1mBhM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glMatrix", ()=>_commonJs);
parcelHelpers.export(exports, "mat2", ()=>_mat2Js);
parcelHelpers.export(exports, "mat2d", ()=>_mat2DJs);
parcelHelpers.export(exports, "mat3", ()=>_mat3Js);
parcelHelpers.export(exports, "mat4", ()=>_mat4Js);
parcelHelpers.export(exports, "quat", ()=>_quatJs);
parcelHelpers.export(exports, "quat2", ()=>_quat2Js);
parcelHelpers.export(exports, "vec2", ()=>_vec2Js);
parcelHelpers.export(exports, "vec3", ()=>_vec3Js);
parcelHelpers.export(exports, "vec4", ()=>_vec4Js);
var _commonJs = require("./common.js");
var _mat2Js = require("./mat2.js");
var _mat2DJs = require("./mat2d.js");
var _mat3Js = require("./mat3.js");
var _mat4Js = require("./mat4.js");
var _quatJs = require("./quat.js");
var _quat2Js = require("./quat2.js");
var _vec2Js = require("./vec2.js");
var _vec3Js = require("./vec3.js");
var _vec4Js = require("./vec4.js");

},{"./common.js":"lYeTq","./mat2.js":"hSVNq","./mat2d.js":"16HLA","./mat3.js":"ig9fq","./mat4.js":"eQTXr","./quat.js":"b7LcS","./quat2.js":"15VTk","./vec2.js":"5mYHR","./vec3.js":"6mCNm","./vec4.js":"lplGD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lYeTq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EPSILON", ()=>EPSILON);
parcelHelpers.export(exports, "ARRAY_TYPE", ()=>ARRAY_TYPE);
parcelHelpers.export(exports, "RANDOM", ()=>RANDOM);
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */ parcelHelpers.export(exports, "setMatrixArrayType", ()=>setMatrixArrayType);
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */ parcelHelpers.export(exports, "toRadian", ()=>toRadian);
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
var RANDOM = Math.random;
function setMatrixArrayType(type) {
    ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
function toRadian(a) {
    return a * degree;
}
function equals(a, b) {
    return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function() {
    var y = 0, i = arguments.length;
    while(i--)y += arguments[i] * arguments[i];
    return Math.sqrt(y);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hSVNq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 2x2 Matrix
 * @module mat2
 */ /**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "transpose", ()=>transpose);
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "adjoint", ()=>adjoint);
/**
 * Calculates the determinant of a mat2
 *
 * @param {ReadonlyMat2} a the source matrix
 * @returns {Number} determinant of a
 */ parcelHelpers.export(exports, "determinant", ()=>determinant);
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "fromRotation", ()=>fromRotation);
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "fromScaling", ()=>fromScaling);
/**
 * Returns a string representation of a mat2
 *
 * @param {ReadonlyMat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */ parcelHelpers.export(exports, "frob", ()=>frob);
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {ReadonlyMat2} L the lower triangular matrix
 * @param {ReadonlyMat2} D the diagonal matrix
 * @param {ReadonlyMat2} U the upper triangular matrix
 * @param {ReadonlyMat2} a the input matrix to factorize
 */ parcelHelpers.export(exports, "LDU", ()=>LDU);
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "multiplyScalar", ()=>multiplyScalar);
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "multiplyScalarAndAdd", ()=>multiplyScalarAndAdd);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "sub", ()=>sub);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(4);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
    }
    out[0] = 1;
    out[3] = 1;
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}
function fromValues(m00, m01, m10, m11) {
    var out = new _commonJs.ARRAY_TYPE(4);
    out[0] = m00;
    out[1] = m01;
    out[2] = m10;
    out[3] = m11;
    return out;
}
function set(out, m00, m01, m10, m11) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m10;
    out[3] = m11;
    return out;
}
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache
    // some values
    if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
    } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    return out;
}
function invert(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3]; // Calculate the determinant
    var det = a0 * a3 - a2 * a1;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = a3 * det;
    out[1] = -a1 * det;
    out[2] = -a2 * det;
    out[3] = a0 * det;
    return out;
}
function adjoint(out, a) {
    // Caching this value is nessecary if out == a
    var a0 = a[0];
    out[0] = a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a0;
    return out;
}
function determinant(a) {
    return a[0] * a[3] - a[2] * a[1];
}
function multiply(out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
}
function rotate(out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = a0 * c + a2 * s;
    out[1] = a1 * c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
}
function scale(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
}
function fromRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;
    return out;
}
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    return out;
}
function str(a) {
    return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
function frob(a) {
    return Math.hypot(a[0], a[1], a[2], a[3]);
}
function LDU(L, D, U, a) {
    L[2] = a[2] / a[0];
    U[0] = a[0];
    U[1] = a[1];
    U[3] = a[3] - L[2] * U[1];
    return [
        L,
        D,
        U
    ];
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    return out;
}
var mul = multiply;
var sub = subtract;

},{"./common.js":"lYeTq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"16HLA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 2x3 Matrix
 * @module mat2d
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */ /**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the determinant of a mat2d
 *
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {Number} determinant of a
 */ parcelHelpers.export(exports, "determinant", ()=>determinant);
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/ parcelHelpers.export(exports, "translate", ()=>translate);
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "fromRotation", ()=>fromRotation);
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "fromScaling", ()=>fromScaling);
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "fromTranslation", ()=>fromTranslation);
/**
 * Returns a string representation of a mat2d
 *
 * @param {ReadonlyMat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */ parcelHelpers.export(exports, "frob", ()=>frob);
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "multiplyScalar", ()=>multiplyScalar);
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "multiplyScalarAndAdd", ()=>multiplyScalarAndAdd);
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "sub", ()=>sub);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(6);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[4] = 0;
        out[5] = 0;
    }
    out[0] = 1;
    out[3] = 1;
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(6);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
}
function fromValues(a, b, c, d, tx, ty) {
    var out = new _commonJs.ARRAY_TYPE(6);
    out[0] = a;
    out[1] = b;
    out[2] = c;
    out[3] = d;
    out[4] = tx;
    out[5] = ty;
    return out;
}
function set(out, a, b, c, d, tx, ty) {
    out[0] = a;
    out[1] = b;
    out[2] = c;
    out[3] = d;
    out[4] = tx;
    out[5] = ty;
    return out;
}
function invert(out, a) {
    var aa = a[0], ab = a[1], ac = a[2], ad = a[3];
    var atx = a[4], aty = a[5];
    var det = aa * ad - ab * ac;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
}
function determinant(a) {
    return a[0] * a[3] - a[1] * a[2];
}
function multiply(out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;
    return out;
}
function rotate(out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = a0 * c + a2 * s;
    out[1] = a1 * c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    out[4] = a4;
    out[5] = a5;
    return out;
}
function scale(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    out[4] = a4;
    out[5] = a5;
    return out;
}
function translate(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var v0 = v[0], v1 = v[1];
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = a0 * v0 + a2 * v1 + a4;
    out[5] = a1 * v0 + a3 * v1 + a5;
    return out;
}
function fromRotation(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;
    out[4] = 0;
    out[5] = 0;
    return out;
}
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    out[4] = 0;
    out[5] = 0;
    return out;
}
function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = v[0];
    out[5] = v[1];
    return out;
}
function str(a) {
    return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
}
function frob(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    return out;
}
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    return out;
}
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    out[4] = a[4] + b[4] * scale;
    out[5] = a[5] + b[5] * scale;
    return out;
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
var mul = multiply;
var sub = subtract;

},{"./common.js":"lYeTq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ig9fq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 3x3 Matrix
 * @module mat3
 */ /**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "fromMat4", ()=>fromMat4);
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "transpose", ()=>transpose);
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "adjoint", ()=>adjoint);
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */ parcelHelpers.export(exports, "determinant", ()=>determinant);
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "translate", ()=>translate);
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "fromTranslation", ()=>fromTranslation);
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "fromRotation", ()=>fromRotation);
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "fromScaling", ()=>fromScaling);
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/ parcelHelpers.export(exports, "fromMat2d", ()=>fromMat2d);
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "fromQuat", ()=>fromQuat);
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "normalFromMat4", ()=>normalFromMat4);
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "projection", ()=>projection);
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */ parcelHelpers.export(exports, "frob", ()=>frob);
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "multiplyScalar", ()=>multiplyScalar);
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "multiplyScalarAndAdd", ()=>multiplyScalarAndAdd);
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "sub", ()=>sub);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(9);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
    }
    out[0] = 1;
    out[4] = 1;
    out[8] = 1;
    return out;
}
function fromMat4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    var out = new _commonJs.ARRAY_TYPE(9);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    return out;
}
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b01 = a22 * a11 - a12 * a21;
    var b11 = -a22 * a10 + a12 * a20;
    var b21 = a21 * a10 - a11 * a20; // Calculate the determinant
    var det = a00 * b01 + a01 * b11 + a02 * b21;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}
function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    out[0] = a11 * a22 - a12 * a21;
    out[1] = a02 * a21 - a01 * a22;
    out[2] = a01 * a12 - a02 * a11;
    out[3] = a12 * a20 - a10 * a22;
    out[4] = a00 * a22 - a02 * a20;
    out[5] = a02 * a10 - a00 * a12;
    out[6] = a10 * a21 - a11 * a20;
    out[7] = a01 * a20 - a00 * a21;
    out[8] = a00 * a11 - a01 * a10;
    return out;
}
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b00 = b[0], b01 = b[1], b02 = b[2];
    var b10 = b[3], b11 = b[4], b12 = b[5];
    var b20 = b[6], b21 = b[7], b22 = b[8];
    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
}
function translate(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a10;
    out[4] = a11;
    out[5] = a12;
    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
}
function rotate(out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;
    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;
    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
}
function scale(out, a, v) {
    var x = v[0], y = v[1];
    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];
    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = v[0];
    out[7] = v[1];
    out[8] = 1;
    return out;
}
function fromRotation(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = -s;
    out[4] = c;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = v[1];
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
function fromMat2d(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;
    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;
    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
}
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;
    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;
    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;
    return out;
}
function normalFromMat4(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    return out;
}
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}
function str(a) {
    return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
function frob(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
}
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    return out;
}
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    out[4] = a[4] + b[4] * scale;
    out[5] = a[5] + b[5] * scale;
    out[6] = a[6] + b[6] * scale;
    out[7] = a[7] + b[7] * scale;
    out[8] = a[8] + b[8] * scale;
    return out;
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
var mul = multiply;
var sub = subtract;

},{"./common.js":"lYeTq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eQTXr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */ /**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "transpose", ()=>transpose);
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "adjoint", ()=>adjoint);
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */ parcelHelpers.export(exports, "determinant", ()=>determinant);
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "translate", ()=>translate);
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "rotateX", ()=>rotateX);
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "rotateY", ()=>rotateY);
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "rotateZ", ()=>rotateZ);
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromTranslation", ()=>fromTranslation);
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromScaling", ()=>fromScaling);
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromRotation", ()=>fromRotation);
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromXRotation", ()=>fromXRotation);
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromYRotation", ()=>fromYRotation);
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromZRotation", ()=>fromZRotation);
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromRotationTranslation", ()=>fromRotationTranslation);
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */ parcelHelpers.export(exports, "fromQuat2", ()=>fromQuat2);
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */ parcelHelpers.export(exports, "getTranslation", ()=>getTranslation);
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */ parcelHelpers.export(exports, "getScaling", ()=>getScaling);
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */ parcelHelpers.export(exports, "getRotation", ()=>getRotation);
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromRotationTranslationScale", ()=>fromRotationTranslationScale);
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromRotationTranslationScaleOrigin", ()=>fromRotationTranslationScaleOrigin);
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromQuat", ()=>fromQuat);
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "frustum", ()=>frustum);
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "perspectiveNO", ()=>perspectiveNO);
parcelHelpers.export(exports, "perspective", ()=>perspective);
/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "perspectiveZO", ()=>perspectiveZO);
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "perspectiveFromFieldOfView", ()=>perspectiveFromFieldOfView);
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "orthoNO", ()=>orthoNO);
parcelHelpers.export(exports, "ortho", ()=>ortho);
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "orthoZO", ()=>orthoZO);
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "lookAt", ()=>lookAt);
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "targetTo", ()=>targetTo);
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */ parcelHelpers.export(exports, "frob", ()=>frob);
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "multiplyScalar", ()=>multiplyScalar);
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "multiplyScalarAndAdd", ()=>multiplyScalarAndAdd);
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "sub", ()=>sub);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(16);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
    }
    out[0] = 1;
    out[5] = 1;
    out[10] = 1;
    out[15] = 1;
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new _commonJs.ARRAY_TYPE(16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3];
        var a12 = a[6], a13 = a[7];
        var a23 = a[11];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    return out;
}
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
}
function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
    out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
    return out;
}
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]; // Cache only the current line of the second matrix
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;
        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return out;
}
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len = Math.hypot(x, y, z);
    var s, c, t;
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    var b00, b01, b02;
    var b10, b11, b12;
    var b20, b21, b22;
    if (len < _commonJs.EPSILON) return null;
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11]; // Construct the elements of the rotation matrix
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c; // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
}
function rotateX(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    } // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
}
function rotateY(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    } // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
}
function rotateZ(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    } // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
}
function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromRotation(out, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len = Math.hypot(x, y, z);
    var s, c, t;
    if (len < _commonJs.EPSILON) return null;
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c; // Perform rotation-specific matrix multiplication
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromXRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromYRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromZRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function fromQuat2(out, a) {
    var translation = new _commonJs.ARRAY_TYPE(3);
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
    var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense
    if (magnitude > 0) {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
    } else {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    }
    fromRotationTranslation(out, a, translation);
    return out;
}
function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
}
function getScaling(out, mat) {
    var m11 = mat[0];
    var m12 = mat[1];
    var m13 = mat[2];
    var m21 = mat[4];
    var m22 = mat[5];
    var m23 = mat[6];
    var m31 = mat[8];
    var m32 = mat[9];
    var m33 = mat[10];
    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);
    return out;
}
function getRotation(out, mat) {
    var scaling = new _commonJs.ARRAY_TYPE(3);
    getScaling(scaling, mat);
    var is1 = 1 / scaling[0];
    var is2 = 1 / scaling[1];
    var is3 = 1 / scaling[2];
    var sm11 = mat[0] * is1;
    var sm12 = mat[1] * is2;
    var sm13 = mat[2] * is3;
    var sm21 = mat[4] * is1;
    var sm22 = mat[5] * is2;
    var sm23 = mat[6] * is3;
    var sm31 = mat[8] * is1;
    var sm32 = mat[9] * is2;
    var sm33 = mat[10] * is3;
    var trace = sm11 + sm22 + sm33;
    var S = 0;
    if (trace > 0) {
        S = Math.sqrt(trace + 1.0) * 2;
        out[3] = 0.25 * S;
        out[0] = (sm23 - sm32) / S;
        out[1] = (sm31 - sm13) / S;
        out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
        S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
        out[3] = (sm23 - sm32) / S;
        out[0] = 0.25 * S;
        out[1] = (sm12 + sm21) / S;
        out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
        S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
        out[3] = (sm31 - sm13) / S;
        out[0] = (sm12 + sm21) / S;
        out[1] = 0.25 * S;
        out[2] = (sm23 + sm32) / S;
    } else {
        S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
        out[3] = (sm12 - sm21) / S;
        out[0] = (sm31 + sm13) / S;
        out[1] = (sm23 + sm32) / S;
        out[2] = 0.25 * S;
    }
    return out;
}
function fromRotationTranslationScale(out, q, v, s) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    var ox = o[0];
    var oy = o[1];
    var oz = o[2];
    var out0 = (1 - (yy + zz)) * sx;
    var out1 = (xy + wz) * sx;
    var out2 = (xz - wy) * sx;
    var out4 = (xy - wz) * sy;
    var out5 = (1 - (xx + zz)) * sy;
    var out6 = (yz + wx) * sy;
    var out8 = (xz + wy) * sz;
    var out9 = (yz - wx) * sz;
    var out10 = (1 - (xx + yy)) * sz;
    out[0] = out0;
    out[1] = out1;
    out[2] = out2;
    out[3] = 0;
    out[4] = out4;
    out[5] = out5;
    out[6] = out6;
    out[7] = 0;
    out[8] = out8;
    out[9] = out9;
    out[10] = out10;
    out[11] = 0;
    out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
    out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
    out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
    out[15] = 1;
    return out;
}
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left);
    var tb = 1 / (top - bottom);
    var nf = 1 / (near - far);
    out[0] = near * 2 * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = near * 2 * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near * 2 * nf;
    out[15] = 0;
    return out;
}
function perspectiveNO(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = (far + near) * nf;
        out[14] = 2 * far * near * nf;
    } else {
        out[10] = -1;
        out[14] = -2 * near;
    }
    return out;
}
var perspective = perspectiveNO;
function perspectiveZO(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = far * nf;
        out[14] = far * near * nf;
    } else {
        out[10] = -1;
        out[14] = -near;
    }
    return out;
}
function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
    var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
    var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
    var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
    var xScale = 2.0 / (leftTan + rightTan);
    var yScale = 2.0 / (upTan + downTan);
    out[0] = xScale;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    out[4] = 0.0;
    out[5] = yScale;
    out[6] = 0.0;
    out[7] = 0.0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = (upTan - downTan) * yScale * 0.5;
    out[10] = far / (near - far);
    out[11] = -1;
    out[12] = 0.0;
    out[13] = 0.0;
    out[14] = far * near / (near - far);
    out[15] = 0.0;
    return out;
}
function orthoNO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
}
var ortho = orthoNO;
function orthoZO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = near * nf;
    out[15] = 1;
    return out;
}
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
    var eyex = eye[0];
    var eyey = eye[1];
    var eyez = eye[2];
    var upx = up[0];
    var upy = up[1];
    var upz = up[2];
    var centerx = center[0];
    var centery = center[1];
    var centerz = center[2];
    if (Math.abs(eyex - centerx) < _commonJs.EPSILON && Math.abs(eyey - centery) < _commonJs.EPSILON && Math.abs(eyez - centerz) < _commonJs.EPSILON) return identity(out);
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len = 1 / Math.hypot(z0, z1, z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.hypot(x0, x1, x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len = Math.hypot(y0, y1, y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
}
function targetTo(out, eye, target, up) {
    var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    var len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
    }
    var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
}
function str(a) {
    return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
function frob(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
}
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
}
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    out[4] = a[4] + b[4] * scale;
    out[5] = a[5] + b[5] * scale;
    out[6] = a[6] + b[6] * scale;
    out[7] = a[7] + b[7] * scale;
    out[8] = a[8] + b[8] * scale;
    out[9] = a[9] + b[9] * scale;
    out[10] = a[10] + b[10] * scale;
    out[11] = a[11] + b[11] * scale;
    out[12] = a[12] + b[12] * scale;
    out[13] = a[13] + b[13] * scale;
    out[14] = a[14] + b[14] * scale;
    out[15] = a[15] + b[15] * scale;
    return out;
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
    var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
    var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
var mul = multiply;
var sub = subtract;

},{"./common.js":"lYeTq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7LcS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Quaternion
 * @module quat
 */ /**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/ parcelHelpers.export(exports, "setAxisAngle", ()=>setAxisAngle);
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */ parcelHelpers.export(exports, "getAxisAngle", ()=>getAxisAngle);
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */ parcelHelpers.export(exports, "getAngle", ()=>getAngle);
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */ parcelHelpers.export(exports, "rotateX", ()=>rotateX);
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */ parcelHelpers.export(exports, "rotateY", ()=>rotateY);
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */ parcelHelpers.export(exports, "rotateZ", ()=>rotateZ);
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */ parcelHelpers.export(exports, "calculateW", ()=>calculateW);
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */ parcelHelpers.export(exports, "exp", ()=>exp);
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */ parcelHelpers.export(exports, "ln", ()=>ln);
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */ parcelHelpers.export(exports, "pow", ()=>pow);
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */ parcelHelpers.export(exports, "slerp", ()=>slerp);
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */ parcelHelpers.export(exports, "random", ()=>random);
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */ parcelHelpers.export(exports, "conjugate", ()=>conjugate);
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */ parcelHelpers.export(exports, "fromMat3", ()=>fromMat3);
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */ parcelHelpers.export(exports, "fromEuler", ()=>fromEuler);
/**
 * Returns a string representation of a quatenion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */ parcelHelpers.export(exports, "str", ()=>str);
parcelHelpers.export(exports, "clone", ()=>clone);
parcelHelpers.export(exports, "fromValues", ()=>fromValues);
parcelHelpers.export(exports, "copy", ()=>copy);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "dot", ()=>dot);
parcelHelpers.export(exports, "lerp", ()=>lerp);
parcelHelpers.export(exports, "length", ()=>length);
parcelHelpers.export(exports, "len", ()=>len);
parcelHelpers.export(exports, "squaredLength", ()=>squaredLength);
parcelHelpers.export(exports, "sqrLen", ()=>sqrLen);
parcelHelpers.export(exports, "normalize", ()=>normalize);
parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "rotationTo", ()=>rotationTo);
parcelHelpers.export(exports, "sqlerp", ()=>sqlerp);
parcelHelpers.export(exports, "setAxes", ()=>setAxes);
var _commonJs = require("./common.js");
var _mat3Js = require("./mat3.js");
var _vec3Js = require("./vec3.js");
var _vec4Js = require("./vec4.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(4);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
    }
    out[3] = 1;
    return out;
}
function identity(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}
function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
}
function getAxisAngle(out_axis, q) {
    var rad = Math.acos(q[3]) * 2.0;
    var s = Math.sin(rad / 2.0);
    if (s > _commonJs.EPSILON) {
        out_axis[0] = q[0] / s;
        out_axis[1] = q[1] / s;
        out_axis[2] = q[2] / s;
    } else {
        // If s is zero, return any axis (no rotation - axis does not matter)
        out_axis[0] = 1;
        out_axis[1] = 0;
        out_axis[2] = 0;
    }
    return rad;
}
function getAngle(a, b) {
    var dotproduct = dot(a, b);
    return Math.acos(2 * dotproduct * dotproduct - 1);
}
function multiply(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
}
function rotateX(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
}
function rotateY(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var by = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
}
function rotateZ(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bz = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
}
function calculateW(out, a) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
}
function exp(out, a) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    var r = Math.sqrt(x * x + y * y + z * z);
    var et = Math.exp(w);
    var s = r > 0 ? et * Math.sin(r) / r : 0;
    out[0] = x * s;
    out[1] = y * s;
    out[2] = z * s;
    out[3] = et * Math.cos(r);
    return out;
}
function ln(out, a) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    var r = Math.sqrt(x * x + y * y + z * z);
    var t = r > 0 ? Math.atan2(r, w) / r : 0;
    out[0] = x * t;
    out[1] = y * t;
    out[2] = z * t;
    out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
    return out;
}
function pow(out, a, b) {
    ln(out, a);
    scale(out, out, b);
    exp(out, out);
    return out;
}
function slerp(out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    var omega, cosom, sinom, scale0, scale1; // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)
    if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
    } // calculate coefficients
    if (1.0 - cosom > _commonJs.EPSILON) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    } // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
}
function random(out) {
    // Implementation of http://planning.cs.uiuc.edu/node198.html
    // TODO: Calling random 3 times is probably not the fastest solution
    var u1 = _commonJs.RANDOM();
    var u2 = _commonJs.RANDOM();
    var u3 = _commonJs.RANDOM();
    var sqrt1MinusU1 = Math.sqrt(1 - u1);
    var sqrtU1 = Math.sqrt(u1);
    out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
    out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
    out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
    out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
    return out;
}
function invert(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
}
function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
}
function fromMat3(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;
    if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
    } else {
        // |w| <= 1/2
        var i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        var j = (i + 1) % 3;
        var k = (i + 2) % 3;
        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }
    return out;
}
function fromEuler(out, x, y, z) {
    var halfToRad = 0.5 * Math.PI / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;
    var sx = Math.sin(x);
    var cx = Math.cos(x);
    var sy = Math.sin(y);
    var cy = Math.cos(y);
    var sz = Math.sin(z);
    var cz = Math.cos(z);
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
    return out;
}
function str(a) {
    return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
var clone = _vec4Js.clone;
var fromValues = _vec4Js.fromValues;
var copy = _vec4Js.copy;
var set = _vec4Js.set;
var add = _vec4Js.add;
var mul = multiply;
var scale = _vec4Js.scale;
var dot = _vec4Js.dot;
var lerp = _vec4Js.lerp;
var length = _vec4Js.length;
var len = length;
var squaredLength = _vec4Js.squaredLength;
var sqrLen = squaredLength;
var normalize = _vec4Js.normalize;
var exactEquals = _vec4Js.exactEquals;
var equals = _vec4Js.equals;
var rotationTo = function() {
    var tmpvec3 = _vec3Js.create();
    var xUnitVec3 = _vec3Js.fromValues(1, 0, 0);
    var yUnitVec3 = _vec3Js.fromValues(0, 1, 0);
    return function(out, a, b) {
        var dot = _vec3Js.dot(a, b);
        if (dot < -0.999999) {
            _vec3Js.cross(tmpvec3, xUnitVec3, a);
            if (_vec3Js.len(tmpvec3) < 0.000001) _vec3Js.cross(tmpvec3, yUnitVec3, a);
            _vec3Js.normalize(tmpvec3, tmpvec3);
            setAxisAngle(out, tmpvec3, Math.PI);
            return out;
        } else if (dot > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        } else {
            _vec3Js.cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot;
            return normalize(out, out);
        }
    };
}();
var sqlerp = function() {
    var temp1 = create();
    var temp2 = create();
    return function(out, a, b, c, d, t) {
        slerp(temp1, a, d, t);
        slerp(temp2, b, c, t);
        slerp(out, temp1, temp2, 2 * t * (1 - t));
        return out;
    };
}();
var setAxes = function() {
    var matr = _mat3Js.create();
    return function(out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];
        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];
        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];
        return normalize(out, fromMat3(out, matr));
    };
}();

},{"./common.js":"lYeTq","./mat3.js":"ig9fq","./vec3.js":"6mCNm","./vec4.js":"lplGD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6mCNm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 3 Dimensional Vector
 * @module vec3
 */ /**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */ parcelHelpers.export(exports, "length", ()=>length);
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "divide", ()=>divide);
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "ceil", ()=>ceil);
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "floor", ()=>floor);
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "min", ()=>min);
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "max", ()=>max);
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "round", ()=>round);
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "scaleAndAdd", ()=>scaleAndAdd);
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */ parcelHelpers.export(exports, "distance", ()=>distance);
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance);
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */ parcelHelpers.export(exports, "squaredLength", ()=>squaredLength);
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "negate", ()=>negate);
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "inverse", ()=>inverse);
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */ parcelHelpers.export(exports, "dot", ()=>dot);
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "cross", ()=>cross);
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "hermite", ()=>hermite);
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "bezier", ()=>bezier);
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "random", ()=>random);
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "transformMat4", ()=>transformMat4);
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "transformMat3", ()=>transformMat3);
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "transformQuat", ()=>transformQuat);
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "rotateX", ()=>rotateX);
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "rotateY", ()=>rotateY);
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "rotateZ", ()=>rotateZ);
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */ parcelHelpers.export(exports, "angle", ()=>angle);
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "zero", ()=>zero);
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "sub", ()=>sub);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "div", ()=>div);
parcelHelpers.export(exports, "dist", ()=>dist);
parcelHelpers.export(exports, "sqrDist", ()=>sqrDist);
parcelHelpers.export(exports, "len", ()=>len);
parcelHelpers.export(exports, "sqrLen", ()=>sqrLen);
parcelHelpers.export(exports, "forEach", ()=>forEach);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(3);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
    }
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return Math.hypot(x, y, z);
}
function fromValues(x, y, z) {
    var out = new _commonJs.ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
function set(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
}
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
}
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
}
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
}
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
}
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
}
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
}
function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
}
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
}
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    return out;
}
function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return Math.hypot(x, y, z);
}
function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return x * x + y * y + z * z;
}
function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return x * x + y * y + z * z;
}
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
}
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
}
function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var len = x * x + y * y + z * z;
    if (len > 0) //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
    return out;
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2];
    var bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
}
function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
}
function hermite(out, a, b, c, d, t) {
    var factorTimes2 = t * t;
    var factor1 = factorTimes2 * (2 * t - 3) + 1;
    var factor2 = factorTimes2 * (t - 2) + t;
    var factor3 = factorTimes2 * (t - 1);
    var factor4 = factorTimes2 * (3 - 2 * t);
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
function bezier(out, a, b, c, d, t) {
    var inverseFactor = 1 - t;
    var inverseFactorTimesTwo = inverseFactor * inverseFactor;
    var factorTimes2 = t * t;
    var factor1 = inverseFactorTimesTwo * inverseFactor;
    var factor2 = 3 * t * inverseFactorTimesTwo;
    var factor3 = 3 * factorTimes2 * inverseFactor;
    var factor4 = factorTimes2 * t;
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
function random(out, scale) {
    scale = scale || 1.0;
    var r = _commonJs.RANDOM() * 2.0 * Math.PI;
    var z = _commonJs.RANDOM() * 2.0 - 1.0;
    var zScale = Math.sqrt(1.0 - z * z) * scale;
    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
}
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    var w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
}
function transformMat3(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
}
function transformQuat(out, a, q) {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var x = a[0], y = a[1], z = a[2]; // var qvec = [qx, qy, qz];
    // var uv = vec3.cross([], qvec, a);
    var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);
    var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);
    var w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2; // vec3.scale(uuv, uuv, 2);
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
}
function rotateX(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[0];
    r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
    r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function rotateY(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
    r[1] = p[1];
    r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function rotateZ(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
    r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
    r[2] = p[2]; //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function angle(a, b) {
    var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    return out;
}
function str(a) {
    return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
var sub = subtract;
var mul = multiply;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var len = length;
var sqrLen = squaredLength;
var forEach = function() {
    var vec = create();
    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) stride = 3;
        if (!offset) offset = 0;
        if (count) l = Math.min(count * stride + offset, a.length);
        else l = a.length;
        for(i = offset; i < l; i += stride){
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
        }
        return a;
    };
}();

},{"./common.js":"lYeTq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lplGD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 4 Dimensional Vector
 * @module vec4
 */ /**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "divide", ()=>divide);
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "ceil", ()=>ceil);
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "floor", ()=>floor);
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "min", ()=>min);
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "max", ()=>max);
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "round", ()=>round);
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "scaleAndAdd", ()=>scaleAndAdd);
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */ parcelHelpers.export(exports, "distance", ()=>distance);
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance);
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */ parcelHelpers.export(exports, "length", ()=>length);
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */ parcelHelpers.export(exports, "squaredLength", ()=>squaredLength);
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "negate", ()=>negate);
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "inverse", ()=>inverse);
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */ parcelHelpers.export(exports, "dot", ()=>dot);
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */ parcelHelpers.export(exports, "cross", ()=>cross);
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "random", ()=>random);
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "transformMat4", ()=>transformMat4);
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "transformQuat", ()=>transformQuat);
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "zero", ()=>zero);
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "sub", ()=>sub);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "div", ()=>div);
parcelHelpers.export(exports, "dist", ()=>dist);
parcelHelpers.export(exports, "sqrDist", ()=>sqrDist);
parcelHelpers.export(exports, "len", ()=>len);
parcelHelpers.export(exports, "sqrLen", ()=>sqrLen);
parcelHelpers.export(exports, "forEach", ()=>forEach);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(4);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
    }
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
function fromValues(x, y, z, w) {
    var out = new _commonJs.ARRAY_TYPE(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
function set(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
}
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
}
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
}
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    out[3] = Math.ceil(a[3]);
    return out;
}
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    out[3] = Math.floor(a[3]);
    return out;
}
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
}
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
}
function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    out[3] = Math.round(a[3]);
    return out;
}
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    return out;
}
function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return Math.hypot(x, y, z, w);
}
function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return x * x + y * y + z * z + w * w;
}
function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return Math.hypot(x, y, z, w);
}
function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return x * x + y * y + z * z + w * w;
}
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
}
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    out[3] = 1.0 / a[3];
    return out;
}
function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    var len = x * x + y * y + z * z + w * w;
    if (len > 0) len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
    return out;
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
function cross(out, u, v, w) {
    var A = v[0] * w[1] - v[1] * w[0], B = v[0] * w[2] - v[2] * w[0], C = v[0] * w[3] - v[3] * w[0], D = v[1] * w[2] - v[2] * w[1], E = v[1] * w[3] - v[3] * w[1], F = v[2] * w[3] - v[3] * w[2];
    var G = u[0];
    var H = u[1];
    var I = u[2];
    var J = u[3];
    out[0] = H * F - I * E + J * D;
    out[1] = -(G * F) + I * C - J * B;
    out[2] = G * E - H * C + J * A;
    out[3] = -(G * D) + H * B - I * A;
    return out;
}
function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
}
function random(out, scale) {
    scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
    // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
    // http://projecteuclid.org/euclid.aoms/1177692644;
    var v1, v2, v3, v4;
    var s1, s2;
    do {
        v1 = _commonJs.RANDOM() * 2 - 1;
        v2 = _commonJs.RANDOM() * 2 - 1;
        s1 = v1 * v1 + v2 * v2;
    }while (s1 >= 1);
    do {
        v3 = _commonJs.RANDOM() * 2 - 1;
        v4 = _commonJs.RANDOM() * 2 - 1;
        s2 = v3 * v3 + v4 * v4;
    }while (s2 >= 1);
    var d = Math.sqrt((1 - s1) / s2);
    out[0] = scale * v1;
    out[1] = scale * v2;
    out[2] = scale * v3 * d;
    out[3] = scale * v4 * d;
    return out;
}
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
}
function transformQuat(out, a, q) {
    var x = a[0], y = a[1], z = a[2];
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3]; // calculate quat * vec
    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    out[3] = a[3];
    return out;
}
function zero(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    return out;
}
function str(a) {
    return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
var sub = subtract;
var mul = multiply;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var len = length;
var sqrLen = squaredLength;
var forEach = function() {
    var vec = create();
    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) stride = 4;
        if (!offset) offset = 0;
        if (count) l = Math.min(count * stride + offset, a.length);
        else l = a.length;
        for(i = offset; i < l; i += stride){
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            vec[3] = a[i + 3];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
            a[i + 3] = vec[3];
        }
        return a;
    };
}();

},{"./common.js":"lYeTq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"15VTk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */ /**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */ parcelHelpers.export(exports, "fromRotationTranslationValues", ()=>fromRotationTranslationValues);
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q a normalized quaternion
 * @param {ReadonlyVec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */ parcelHelpers.export(exports, "fromRotationTranslation", ()=>fromRotationTranslation);
/**
 * Creates a dual quat from a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyVec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */ parcelHelpers.export(exports, "fromTranslation", ()=>fromTranslation);
/**
 * Creates a dual quat from a quaternion
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */ parcelHelpers.export(exports, "fromRotation", ()=>fromRotation);
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {ReadonlyMat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */ parcelHelpers.export(exports, "fromMat4", ()=>fromMat4);
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */ parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "getReal", ()=>getReal);
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} dual part
 */ parcelHelpers.export(exports, "getDual", ()=>getDual);
parcelHelpers.export(exports, "setReal", ()=>setReal);
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */ parcelHelpers.export(exports, "setDual", ()=>setDual);
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */ parcelHelpers.export(exports, "getTranslation", ()=>getTranslation);
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "translate", ()=>translate);
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "rotateX", ()=>rotateX);
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "rotateY", ()=>rotateY);
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "rotateZ", ()=>rotateZ);
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "rotateByQuatAppend", ()=>rotateByQuatAppend);
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "rotateByQuatPrepend", ()=>rotateByQuatPrepend);
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "rotateAroundAxis", ()=>rotateAroundAxis);
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 * @function
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
parcelHelpers.export(exports, "mul", ()=>mul);
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */ parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "dot", ()=>dot);
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "conjugate", ()=>conjugate);
parcelHelpers.export(exports, "length", ()=>length);
parcelHelpers.export(exports, "len", ()=>len);
parcelHelpers.export(exports, "squaredLength", ()=>squaredLength);
parcelHelpers.export(exports, "sqrLen", ()=>sqrLen);
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {ReadonlyQuat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2} a the first dual quaternion.
 * @param {ReadonlyQuat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2} a the first dual quat.
 * @param {ReadonlyQuat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
var _commonJs = require("./common.js");
var _quatJs = require("./quat.js");
var _mat4Js = require("./mat4.js");
function create() {
    var dq = new _commonJs.ARRAY_TYPE(8);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        dq[0] = 0;
        dq[1] = 0;
        dq[2] = 0;
        dq[4] = 0;
        dq[5] = 0;
        dq[6] = 0;
        dq[7] = 0;
    }
    dq[3] = 1;
    return dq;
}
function clone(a) {
    var dq = new _commonJs.ARRAY_TYPE(8);
    dq[0] = a[0];
    dq[1] = a[1];
    dq[2] = a[2];
    dq[3] = a[3];
    dq[4] = a[4];
    dq[5] = a[5];
    dq[6] = a[6];
    dq[7] = a[7];
    return dq;
}
function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
    var dq = new _commonJs.ARRAY_TYPE(8);
    dq[0] = x1;
    dq[1] = y1;
    dq[2] = z1;
    dq[3] = w1;
    dq[4] = x2;
    dq[5] = y2;
    dq[6] = z2;
    dq[7] = w2;
    return dq;
}
function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
    var dq = new _commonJs.ARRAY_TYPE(8);
    dq[0] = x1;
    dq[1] = y1;
    dq[2] = z1;
    dq[3] = w1;
    var ax = x2 * 0.5, ay = y2 * 0.5, az = z2 * 0.5;
    dq[4] = ax * w1 + ay * z1 - az * y1;
    dq[5] = ay * w1 + az * x1 - ax * z1;
    dq[6] = az * w1 + ax * y1 - ay * x1;
    dq[7] = -ax * x1 - ay * y1 - az * z1;
    return dq;
}
function fromRotationTranslation(out, q, t) {
    var ax = t[0] * 0.5, ay = t[1] * 0.5, az = t[2] * 0.5, bx = q[0], by = q[1], bz = q[2], bw = q[3];
    out[0] = bx;
    out[1] = by;
    out[2] = bz;
    out[3] = bw;
    out[4] = ax * bw + ay * bz - az * by;
    out[5] = ay * bw + az * bx - ax * bz;
    out[6] = az * bw + ax * by - ay * bx;
    out[7] = -ax * bx - ay * by - az * bz;
    return out;
}
function fromTranslation(out, t) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = t[0] * 0.5;
    out[5] = t[1] * 0.5;
    out[6] = t[2] * 0.5;
    out[7] = 0;
    return out;
}
function fromRotation(out, q) {
    out[0] = q[0];
    out[1] = q[1];
    out[2] = q[2];
    out[3] = q[3];
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
}
function fromMat4(out, a) {
    //TODO Optimize this
    var outer = _quatJs.create();
    _mat4Js.getRotation(outer, a);
    var t = new _commonJs.ARRAY_TYPE(3);
    _mat4Js.getTranslation(t, a);
    fromRotationTranslation(out, outer, t);
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    return out;
}
function identity(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
}
function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
    out[0] = x1;
    out[1] = y1;
    out[2] = z1;
    out[3] = w1;
    out[4] = x2;
    out[5] = y2;
    out[6] = z2;
    out[7] = w2;
    return out;
}
var getReal = _quatJs.copy;
function getDual(out, a) {
    out[0] = a[4];
    out[1] = a[5];
    out[2] = a[6];
    out[3] = a[7];
    return out;
}
var setReal = _quatJs.copy;
function setDual(out, q) {
    out[4] = q[0];
    out[5] = q[1];
    out[6] = q[2];
    out[7] = q[3];
    return out;
}
function getTranslation(out, a) {
    var ax = a[4], ay = a[5], az = a[6], aw = a[7], bx = -a[0], by = -a[1], bz = -a[2], bw = a[3];
    out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    return out;
}
function translate(out, a, v) {
    var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3], bx1 = v[0] * 0.5, by1 = v[1] * 0.5, bz1 = v[2] * 0.5, ax2 = a[4], ay2 = a[5], az2 = a[6], aw2 = a[7];
    out[0] = ax1;
    out[1] = ay1;
    out[2] = az1;
    out[3] = aw1;
    out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
    out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
    out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
    out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
    return out;
}
function rotateX(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    _quatJs.rotateX(out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
}
function rotateY(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    _quatJs.rotateY(out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
}
function rotateZ(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    _quatJs.rotateZ(out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
}
function rotateByQuatAppend(out, a, q) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3], ax = a[0], ay = a[1], az = a[2], aw = a[3];
    out[0] = ax * qw + aw * qx + ay * qz - az * qy;
    out[1] = ay * qw + aw * qy + az * qx - ax * qz;
    out[2] = az * qw + aw * qz + ax * qy - ay * qx;
    out[3] = aw * qw - ax * qx - ay * qy - az * qz;
    ax = a[4];
    ay = a[5];
    az = a[6];
    aw = a[7];
    out[4] = ax * qw + aw * qx + ay * qz - az * qy;
    out[5] = ay * qw + aw * qy + az * qx - ax * qz;
    out[6] = az * qw + aw * qz + ax * qy - ay * qx;
    out[7] = aw * qw - ax * qx - ay * qy - az * qz;
    return out;
}
function rotateByQuatPrepend(out, q, a) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3], bx = a[0], by = a[1], bz = a[2], bw = a[3];
    out[0] = qx * bw + qw * bx + qy * bz - qz * by;
    out[1] = qy * bw + qw * by + qz * bx - qx * bz;
    out[2] = qz * bw + qw * bz + qx * by - qy * bx;
    out[3] = qw * bw - qx * bx - qy * by - qz * bz;
    bx = a[4];
    by = a[5];
    bz = a[6];
    bw = a[7];
    out[4] = qx * bw + qw * bx + qy * bz - qz * by;
    out[5] = qy * bw + qw * by + qz * bx - qx * bz;
    out[6] = qz * bw + qw * bz + qx * by - qy * bx;
    out[7] = qw * bw - qx * bx - qy * by - qz * bz;
    return out;
}
function rotateAroundAxis(out, a, axis, rad) {
    //Special case for rad = 0
    if (Math.abs(rad) < _commonJs.EPSILON) return copy(out, a);
    var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
    rad = rad * 0.5;
    var s = Math.sin(rad);
    var bx = s * axis[0] / axisLength;
    var by = s * axis[1] / axisLength;
    var bz = s * axis[2] / axisLength;
    var bw = Math.cos(rad);
    var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3];
    out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    var ax = a[4], ay = a[5], az = a[6], aw = a[7];
    out[4] = ax * bw + aw * bx + ay * bz - az * by;
    out[5] = ay * bw + aw * by + az * bx - ax * bz;
    out[6] = az * bw + aw * bz + ax * by - ay * bx;
    out[7] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    return out;
}
function multiply(out, a, b) {
    var ax0 = a[0], ay0 = a[1], az0 = a[2], aw0 = a[3], bx1 = b[4], by1 = b[5], bz1 = b[6], bw1 = b[7], ax1 = a[4], ay1 = a[5], az1 = a[6], aw1 = a[7], bx0 = b[0], by0 = b[1], bz0 = b[2], bw0 = b[3];
    out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
    out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
    out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
    out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
    out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
    out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
    out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
    out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
    return out;
}
var mul = multiply;
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    return out;
}
var dot = _quatJs.dot;
function lerp(out, a, b, t) {
    var mt = 1 - t;
    if (dot(a, b) < 0) t = -t;
    out[0] = a[0] * mt + b[0] * t;
    out[1] = a[1] * mt + b[1] * t;
    out[2] = a[2] * mt + b[2] * t;
    out[3] = a[3] * mt + b[3] * t;
    out[4] = a[4] * mt + b[4] * t;
    out[5] = a[5] * mt + b[5] * t;
    out[6] = a[6] * mt + b[6] * t;
    out[7] = a[7] * mt + b[7] * t;
    return out;
}
function invert(out, a) {
    var sqlen = squaredLength(a);
    out[0] = -a[0] / sqlen;
    out[1] = -a[1] / sqlen;
    out[2] = -a[2] / sqlen;
    out[3] = a[3] / sqlen;
    out[4] = -a[4] / sqlen;
    out[5] = -a[5] / sqlen;
    out[6] = -a[6] / sqlen;
    out[7] = a[7] / sqlen;
    return out;
}
function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    out[4] = -a[4];
    out[5] = -a[5];
    out[6] = -a[6];
    out[7] = a[7];
    return out;
}
var length = _quatJs.length;
var len = length;
var squaredLength = _quatJs.squaredLength;
var sqrLen = squaredLength;
function normalize(out, a) {
    var magnitude = squaredLength(a);
    if (magnitude > 0) {
        magnitude = Math.sqrt(magnitude);
        var a0 = a[0] / magnitude;
        var a1 = a[1] / magnitude;
        var a2 = a[2] / magnitude;
        var a3 = a[3] / magnitude;
        var b0 = a[4];
        var b1 = a[5];
        var b2 = a[6];
        var b3 = a[7];
        var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
        out[0] = a0;
        out[1] = a1;
        out[2] = a2;
        out[3] = a3;
        out[4] = (b0 - a0 * a_dot_b) / magnitude;
        out[5] = (b1 - a1 * a_dot_b) / magnitude;
        out[6] = (b2 - a2 * a_dot_b) / magnitude;
        out[7] = (b3 - a3 * a_dot_b) / magnitude;
    }
    return out;
}
function str(a) {
    return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

},{"./common.js":"lYeTq","./quat.js":"b7LcS","./mat4.js":"eQTXr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5mYHR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 2 Dimensional Vector
 * @module vec2
 */ /**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "divide", ()=>divide);
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "ceil", ()=>ceil);
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "floor", ()=>floor);
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "min", ()=>min);
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "max", ()=>max);
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "round", ()=>round);
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "scaleAndAdd", ()=>scaleAndAdd);
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */ parcelHelpers.export(exports, "distance", ()=>distance);
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance);
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */ parcelHelpers.export(exports, "length", ()=>length);
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */ parcelHelpers.export(exports, "squaredLength", ()=>squaredLength);
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "negate", ()=>negate);
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "inverse", ()=>inverse);
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */ parcelHelpers.export(exports, "dot", ()=>dot);
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "cross", ()=>cross);
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "random", ()=>random);
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "transformMat2", ()=>transformMat2);
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "transformMat2d", ()=>transformMat2d);
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "transformMat3", ()=>transformMat3);
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "transformMat4", ()=>transformMat4);
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */ parcelHelpers.export(exports, "angle", ()=>angle);
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "zero", ()=>zero);
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "len", ()=>len);
parcelHelpers.export(exports, "sub", ()=>sub);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "div", ()=>div);
parcelHelpers.export(exports, "dist", ()=>dist);
parcelHelpers.export(exports, "sqrDist", ()=>sqrDist);
parcelHelpers.export(exports, "sqrLen", ()=>sqrLen);
parcelHelpers.export(exports, "forEach", ()=>forEach);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(2);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
    }
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
}
function fromValues(x, y) {
    var out = new _commonJs.ARRAY_TYPE(2);
    out[0] = x;
    out[1] = y;
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
}
function set(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
}
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
}
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
}
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    return out;
}
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    return out;
}
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
}
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
}
function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    return out;
}
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
}
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    return out;
}
function distance(a, b) {
    var x = b[0] - a[0], y = b[1] - a[1];
    return Math.hypot(x, y);
}
function squaredDistance(a, b) {
    var x = b[0] - a[0], y = b[1] - a[1];
    return x * x + y * y;
}
function length(a) {
    var x = a[0], y = a[1];
    return Math.hypot(x, y);
}
function squaredLength(a) {
    var x = a[0], y = a[1];
    return x * x + y * y;
}
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
}
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    return out;
}
function normalize(out, a) {
    var x = a[0], y = a[1];
    var len = x * x + y * y;
    if (len > 0) //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    return out;
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}
function cross(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
}
function lerp(out, a, b, t) {
    var ax = a[0], ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
}
function random(out, scale) {
    scale = scale || 1.0;
    var r = _commonJs.RANDOM() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
}
function transformMat2(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
}
function transformMat2d(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
}
function transformMat3(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
}
function transformMat4(out, a, m) {
    var x = a[0];
    var y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
}
function rotate(out, a, b, rad) {
    //Translate point to the origin
    var p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(rad), cosC = Math.cos(rad); //perform rotation and translate to correct position
    out[0] = p0 * cosC - p1 * sinC + b[0];
    out[1] = p0 * sinC + p1 * cosC + b[1];
    return out;
}
function angle(a, b) {
    var x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1], // mag is the product of the magnitudes of a and b
    mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2), // mag &&.. short circuits if mag == 0
    cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    return out;
}
function str(a) {
    return "vec2(" + a[0] + ", " + a[1] + ")";
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1];
    var b0 = b[0], b1 = b[1];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
var len = length;
var sub = subtract;
var mul = multiply;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var sqrLen = squaredLength;
var forEach = function() {
    var vec = create();
    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) stride = 2;
        if (!offset) offset = 0;
        if (count) l = Math.min(count * stride + offset, a.length);
        else l = a.length;
        for(i = offset; i < l; i += stride){
            vec[0] = a[i];
            vec[1] = a[i + 1];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
        }
        return a;
    };
}();

},{"./common.js":"lYeTq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eAFEk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Text", ()=>Text);
/*
    This is a class definition for a Text Object, Which is an abstraction for dealing with HTML that refrences vertex positions in the webgl scene
    Idea for this implmentation was based on https://webglfundamentals.org/webgl/lessons/webgl-text-html.html
*/ var _glMatrix = require("gl-matrix");
class Text {
    constructor(set_ID, set_canvasWidth, set_canvasHeight){
        this.parentDiv = document.createElement(set_ID);
        this.parentDiv.classList.add("Label");
        document.getElementById("Labels")?.appendChild(this.parentDiv);
        this.ID = set_ID;
        this.canvasHeight = set_canvasHeight;
        this.canvasWidth = set_canvasWidth;
    }
    render(position, model, view, projection, value) {
        //glmath.vec4.normalize(position, position);
        let fin_matrix = _glMatrix.mat4.create();
        fin_matrix = _glMatrix.mat4.multiply(fin_matrix, view, projection);
        fin_matrix = _glMatrix.mat4.multiply(fin_matrix, fin_matrix, model);
        let translated_position = _glMatrix.vec4.transformMat4(position, position, fin_matrix);
        translated_position[0] /= translated_position[3];
        translated_position[1] /= translated_position[3];
        // convert from clipspace to pixels
        var pixelX = (translated_position[0] * 0.5 + 0.5) * this.canvasWidth;
        var pixelY = (translated_position[1] * -0.5 + 0.5) * this.canvasHeight;
        var pixelZ = (translated_position[2] * -0.5 + 0.5) * this.canvasHeight / 20;
        // position the div
        this.parentDiv.style.left = Math.floor(pixelX) + "px";
        this.parentDiv.style.top = Math.floor(pixelY) + "px";
        this.parentDiv.style.fontSize = 1 - Math.floor(pixelZ) + "px";
        this.parentDiv.innerHTML = value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","gl-matrix":"1mBhM"}],"kj6Xh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Font", ()=>Font);
/*
    This is a class definition for a Font Object, Which is an abstraction for dealing with and loading fonts using the opentype.js npm package
*/ var _opentypeJs = require("opentype.js");
var _opentypeJsDefault = parcelHelpers.interopDefault(_opentypeJs);
class Font {
    async make(name) {
        const font = await (0, _opentypeJsDefault.default).load(new URL(require("13e9df5cd2fc2ad5")));
        const path = font.getPath("Hello, World!", 0, 150, 72);
        console.log(path);
    }
}

},{"opentype.js":"590Xq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","13e9df5cd2fc2ad5":"dppWS"}],"590Xq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BoundingBox", ()=>BoundingBox);
parcelHelpers.export(exports, "Font", ()=>Font);
parcelHelpers.export(exports, "Glyph", ()=>Glyph);
parcelHelpers.export(exports, "Path", ()=>Path);
parcelHelpers.export(exports, "_parse", ()=>parse);
parcelHelpers.export(exports, "load", ()=>load);
parcelHelpers.export(exports, "loadSync", ()=>loadSync);
parcelHelpers.export(exports, "parse", ()=>parseBuffer);
var Buffer = require("buffer").Buffer;
/**
 * https://opentype.js.org v1.3.4 | (c) Frederik De Bleser and other contributors | MIT License | Uses tiny-inflate by Devon Govett and string.prototype.codepointat polyfill by Mathias Bynens
 */ /*! https://mths.be/codepointat v0.2.0 by @mathias */ if (!String.prototype.codePointAt) (function() {
    var defineProperty = function() {
        // IE 8 only supports `Object.defineProperty` on DOM elements
        try {
            var object = {};
            var $defineProperty = Object.defineProperty;
            var result = $defineProperty(object, object, object) && $defineProperty;
        } catch (error) {}
        return result;
    }();
    var codePointAt = function(position) {
        if (this == null) throw TypeError();
        var string = String(this);
        var size = string.length;
        // `ToInteger`
        var index = position ? Number(position) : 0;
        if (index != index) index = 0;
        // Account for out-of-bounds indices:
        if (index < 0 || index >= size) return undefined;
        // Get the first code unit
        var first = string.charCodeAt(index);
        var second;
        if (first >= 0xD800 && first <= 0xDBFF && size > index + 1 // there is a next code unit
        ) {
            second = string.charCodeAt(index + 1);
            if (second >= 0xDC00 && second <= 0xDFFF) // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
        return first;
    };
    if (defineProperty) defineProperty(String.prototype, "codePointAt", {
        "value": codePointAt,
        "configurable": true,
        "writable": true
    });
    else String.prototype.codePointAt = codePointAt;
})();
var TINF_OK = 0;
var TINF_DATA_ERROR = -3;
function Tree() {
    this.table = new Uint16Array(16); /* table of code length counts */ 
    this.trans = new Uint16Array(288); /* code -> symbol translation table */ 
}
function Data(source, dest) {
    this.source = source;
    this.sourceIndex = 0;
    this.tag = 0;
    this.bitcount = 0;
    this.dest = dest;
    this.destLen = 0;
    this.ltree = new Tree(); /* dynamic length/symbol tree */ 
    this.dtree = new Tree(); /* dynamic distance tree */ 
}
/* --------------------------------------------------- *
 * -- uninitialized global data (static structures) -- *
 * --------------------------------------------------- */ var sltree = new Tree();
var sdtree = new Tree();
/* extra bits and base tables for length codes */ var length_bits = new Uint8Array(30);
var length_base = new Uint16Array(30);
/* extra bits and base tables for distance codes */ var dist_bits = new Uint8Array(30);
var dist_base = new Uint16Array(30);
/* special ordering of code length codes */ var clcidx = new Uint8Array([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]);
/* used by tinf_decode_trees, avoids allocations every call */ var code_tree = new Tree();
var lengths = new Uint8Array(320);
/* ----------------------- *
 * -- utility functions -- *
 * ----------------------- */ /* build extra bits and base tables */ function tinf_build_bits_base(bits, base, delta, first) {
    var i, sum;
    /* build bits table */ for(i = 0; i < delta; ++i)bits[i] = 0;
    for(i = 0; i < 30 - delta; ++i)bits[i + delta] = i / delta | 0;
    /* build base table */ for(sum = first, i = 0; i < 30; ++i){
        base[i] = sum;
        sum += 1 << bits[i];
    }
}
/* build the fixed huffman trees */ function tinf_build_fixed_trees(lt, dt) {
    var i;
    /* build fixed length tree */ for(i = 0; i < 7; ++i)lt.table[i] = 0;
    lt.table[7] = 24;
    lt.table[8] = 152;
    lt.table[9] = 112;
    for(i = 0; i < 24; ++i)lt.trans[i] = 256 + i;
    for(i = 0; i < 144; ++i)lt.trans[24 + i] = i;
    for(i = 0; i < 8; ++i)lt.trans[168 + i] = 280 + i;
    for(i = 0; i < 112; ++i)lt.trans[176 + i] = 144 + i;
    /* build fixed distance tree */ for(i = 0; i < 5; ++i)dt.table[i] = 0;
    dt.table[5] = 32;
    for(i = 0; i < 32; ++i)dt.trans[i] = i;
}
/* given an array of code lengths, build a tree */ var offs = new Uint16Array(16);
function tinf_build_tree(t, lengths, off, num) {
    var i, sum;
    /* clear code length count table */ for(i = 0; i < 16; ++i)t.table[i] = 0;
    /* scan symbol lengths, and sum code length counts */ for(i = 0; i < num; ++i)t.table[lengths[off + i]]++;
    t.table[0] = 0;
    /* compute offset table for distribution sort */ for(sum = 0, i = 0; i < 16; ++i){
        offs[i] = sum;
        sum += t.table[i];
    }
    /* create code->symbol translation table (symbols sorted by code) */ for(i = 0; i < num; ++i)if (lengths[off + i]) t.trans[offs[lengths[off + i]]++] = i;
}
/* ---------------------- *
 * -- decode functions -- *
 * ---------------------- */ /* get one bit from source stream */ function tinf_getbit(d) {
    /* check if tag is empty */ if (!d.bitcount--) {
        /* load next tag */ d.tag = d.source[d.sourceIndex++];
        d.bitcount = 7;
    }
    /* shift bit out of tag */ var bit = d.tag & 1;
    d.tag >>>= 1;
    return bit;
}
/* read a num bit value from a stream and add base */ function tinf_read_bits(d, num, base) {
    if (!num) return base;
    while(d.bitcount < 24){
        d.tag |= d.source[d.sourceIndex++] << d.bitcount;
        d.bitcount += 8;
    }
    var val = d.tag & 0xffff >>> 16 - num;
    d.tag >>>= num;
    d.bitcount -= num;
    return val + base;
}
/* given a data stream and a tree, decode a symbol */ function tinf_decode_symbol(d, t) {
    while(d.bitcount < 24){
        d.tag |= d.source[d.sourceIndex++] << d.bitcount;
        d.bitcount += 8;
    }
    var sum = 0, cur = 0, len = 0;
    var tag = d.tag;
    /* get more bits while code value is above sum */ do {
        cur = 2 * cur + (tag & 1);
        tag >>>= 1;
        ++len;
        sum += t.table[len];
        cur -= t.table[len];
    }while (cur >= 0);
    d.tag = tag;
    d.bitcount -= len;
    return t.trans[sum + cur];
}
/* given a data stream, decode dynamic trees from it */ function tinf_decode_trees(d, lt, dt) {
    var hlit, hdist, hclen;
    var i, num, length;
    /* get 5 bits HLIT (257-286) */ hlit = tinf_read_bits(d, 5, 257);
    /* get 5 bits HDIST (1-32) */ hdist = tinf_read_bits(d, 5, 1);
    /* get 4 bits HCLEN (4-19) */ hclen = tinf_read_bits(d, 4, 4);
    for(i = 0; i < 19; ++i)lengths[i] = 0;
    /* read code lengths for code length alphabet */ for(i = 0; i < hclen; ++i){
        /* get 3 bits code length (0-7) */ var clen = tinf_read_bits(d, 3, 0);
        lengths[clcidx[i]] = clen;
    }
    /* build code length tree */ tinf_build_tree(code_tree, lengths, 0, 19);
    /* decode code lengths for the dynamic trees */ for(num = 0; num < hlit + hdist;){
        var sym = tinf_decode_symbol(d, code_tree);
        switch(sym){
            case 16:
                /* copy previous code length 3-6 times (read 2 bits) */ var prev = lengths[num - 1];
                for(length = tinf_read_bits(d, 2, 3); length; --length)lengths[num++] = prev;
                break;
            case 17:
                /* repeat code length 0 for 3-10 times (read 3 bits) */ for(length = tinf_read_bits(d, 3, 3); length; --length)lengths[num++] = 0;
                break;
            case 18:
                /* repeat code length 0 for 11-138 times (read 7 bits) */ for(length = tinf_read_bits(d, 7, 11); length; --length)lengths[num++] = 0;
                break;
            default:
                /* values 0-15 represent the actual code lengths */ lengths[num++] = sym;
                break;
        }
    }
    /* build dynamic trees */ tinf_build_tree(lt, lengths, 0, hlit);
    tinf_build_tree(dt, lengths, hlit, hdist);
}
/* ----------------------------- *
 * -- block inflate functions -- *
 * ----------------------------- */ /* given a stream and two trees, inflate a block of data */ function tinf_inflate_block_data(d, lt, dt) {
    while(true){
        var sym = tinf_decode_symbol(d, lt);
        /* check for end of block */ if (sym === 256) return TINF_OK;
        if (sym < 256) d.dest[d.destLen++] = sym;
        else {
            var length, dist, offs;
            var i;
            sym -= 257;
            /* possibly get more bits from length code */ length = tinf_read_bits(d, length_bits[sym], length_base[sym]);
            dist = tinf_decode_symbol(d, dt);
            /* possibly get more bits from distance code */ offs = d.destLen - tinf_read_bits(d, dist_bits[dist], dist_base[dist]);
            /* copy match */ for(i = offs; i < offs + length; ++i)d.dest[d.destLen++] = d.dest[i];
        }
    }
}
/* inflate an uncompressed block of data */ function tinf_inflate_uncompressed_block(d) {
    var length, invlength;
    var i;
    /* unread from bitbuffer */ while(d.bitcount > 8){
        d.sourceIndex--;
        d.bitcount -= 8;
    }
    /* get length */ length = d.source[d.sourceIndex + 1];
    length = 256 * length + d.source[d.sourceIndex];
    /* get one's complement of length */ invlength = d.source[d.sourceIndex + 3];
    invlength = 256 * invlength + d.source[d.sourceIndex + 2];
    /* check length */ if (length !== (~invlength & 0x0000ffff)) return TINF_DATA_ERROR;
    d.sourceIndex += 4;
    /* copy block */ for(i = length; i; --i)d.dest[d.destLen++] = d.source[d.sourceIndex++];
    /* make sure we start next block on a byte boundary */ d.bitcount = 0;
    return TINF_OK;
}
/* inflate stream from source to dest */ function tinf_uncompress(source, dest) {
    var d = new Data(source, dest);
    var bfinal, btype, res;
    do {
        /* read final block flag */ bfinal = tinf_getbit(d);
        /* read block type (2 bits) */ btype = tinf_read_bits(d, 2, 0);
        /* decompress block */ switch(btype){
            case 0:
                /* decompress uncompressed block */ res = tinf_inflate_uncompressed_block(d);
                break;
            case 1:
                /* decompress block with fixed huffman trees */ res = tinf_inflate_block_data(d, sltree, sdtree);
                break;
            case 2:
                /* decompress block with dynamic huffman trees */ tinf_decode_trees(d, d.ltree, d.dtree);
                res = tinf_inflate_block_data(d, d.ltree, d.dtree);
                break;
            default:
                res = TINF_DATA_ERROR;
        }
        if (res !== TINF_OK) throw new Error("Data error");
    }while (!bfinal);
    if (d.destLen < d.dest.length) {
        if (typeof d.dest.slice === "function") return d.dest.slice(0, d.destLen);
        else return d.dest.subarray(0, d.destLen);
    }
    return d.dest;
}
/* -------------------- *
 * -- initialization -- *
 * -------------------- */ /* build fixed huffman trees */ tinf_build_fixed_trees(sltree, sdtree);
/* build extra bits and base tables */ tinf_build_bits_base(length_bits, length_base, 4, 3);
tinf_build_bits_base(dist_bits, dist_base, 2, 1);
/* fix a special case */ length_bits[28] = 0;
length_base[28] = 258;
var tinyInflate = tinf_uncompress;
// The Bounding Box object
function derive(v0, v1, v2, v3, t) {
    return Math.pow(1 - t, 3) * v0 + 3 * Math.pow(1 - t, 2) * t * v1 + 3 * (1 - t) * Math.pow(t, 2) * v2 + Math.pow(t, 3) * v3;
}
/**
 * A bounding box is an enclosing box that describes the smallest measure within which all the points lie.
 * It is used to calculate the bounding box of a glyph or text path.
 *
 * On initialization, x1/y1/x2/y2 will be NaN. Check if the bounding box is empty using `isEmpty()`.
 *
 * @exports opentype.BoundingBox
 * @class
 * @constructor
 */ function BoundingBox() {
    this.x1 = Number.NaN;
    this.y1 = Number.NaN;
    this.x2 = Number.NaN;
    this.y2 = Number.NaN;
}
/**
 * Returns true if the bounding box is empty, that is, no points have been added to the box yet.
 */ BoundingBox.prototype.isEmpty = function() {
    return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
};
/**
 * Add the point to the bounding box.
 * The x1/y1/x2/y2 coordinates of the bounding box will now encompass the given point.
 * @param {number} x - The X coordinate of the point.
 * @param {number} y - The Y coordinate of the point.
 */ BoundingBox.prototype.addPoint = function(x, y) {
    if (typeof x === "number") {
        if (isNaN(this.x1) || isNaN(this.x2)) {
            this.x1 = x;
            this.x2 = x;
        }
        if (x < this.x1) this.x1 = x;
        if (x > this.x2) this.x2 = x;
    }
    if (typeof y === "number") {
        if (isNaN(this.y1) || isNaN(this.y2)) {
            this.y1 = y;
            this.y2 = y;
        }
        if (y < this.y1) this.y1 = y;
        if (y > this.y2) this.y2 = y;
    }
};
/**
 * Add a X coordinate to the bounding box.
 * This extends the bounding box to include the X coordinate.
 * This function is used internally inside of addBezier.
 * @param {number} x - The X coordinate of the point.
 */ BoundingBox.prototype.addX = function(x) {
    this.addPoint(x, null);
};
/**
 * Add a Y coordinate to the bounding box.
 * This extends the bounding box to include the Y coordinate.
 * This function is used internally inside of addBezier.
 * @param {number} y - The Y coordinate of the point.
 */ BoundingBox.prototype.addY = function(y) {
    this.addPoint(null, y);
};
/**
 * Add a Bézier curve to the bounding box.
 * This extends the bounding box to include the entire Bézier.
 * @param {number} x0 - The starting X coordinate.
 * @param {number} y0 - The starting Y coordinate.
 * @param {number} x1 - The X coordinate of the first control point.
 * @param {number} y1 - The Y coordinate of the first control point.
 * @param {number} x2 - The X coordinate of the second control point.
 * @param {number} y2 - The Y coordinate of the second control point.
 * @param {number} x - The ending X coordinate.
 * @param {number} y - The ending Y coordinate.
 */ BoundingBox.prototype.addBezier = function(x0, y0, x1, y1, x2, y2, x, y) {
    // This code is based on http://nishiohirokazu.blogspot.com/2009/06/how-to-calculate-bezier-curves-bounding.html
    // and https://github.com/icons8/svg-path-bounding-box
    var p0 = [
        x0,
        y0
    ];
    var p1 = [
        x1,
        y1
    ];
    var p2 = [
        x2,
        y2
    ];
    var p3 = [
        x,
        y
    ];
    this.addPoint(x0, y0);
    this.addPoint(x, y);
    for(var i = 0; i <= 1; i++){
        var b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
        var a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
        var c = 3 * p1[i] - 3 * p0[i];
        if (a === 0) {
            if (b === 0) continue;
            var t = -c / b;
            if (0 < t && t < 1) {
                if (i === 0) this.addX(derive(p0[i], p1[i], p2[i], p3[i], t));
                if (i === 1) this.addY(derive(p0[i], p1[i], p2[i], p3[i], t));
            }
            continue;
        }
        var b2ac = Math.pow(b, 2) - 4 * c * a;
        if (b2ac < 0) continue;
        var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
        if (0 < t1 && t1 < 1) {
            if (i === 0) this.addX(derive(p0[i], p1[i], p2[i], p3[i], t1));
            if (i === 1) this.addY(derive(p0[i], p1[i], p2[i], p3[i], t1));
        }
        var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
        if (0 < t2 && t2 < 1) {
            if (i === 0) this.addX(derive(p0[i], p1[i], p2[i], p3[i], t2));
            if (i === 1) this.addY(derive(p0[i], p1[i], p2[i], p3[i], t2));
        }
    }
};
/**
 * Add a quadratic curve to the bounding box.
 * This extends the bounding box to include the entire quadratic curve.
 * @param {number} x0 - The starting X coordinate.
 * @param {number} y0 - The starting Y coordinate.
 * @param {number} x1 - The X coordinate of the control point.
 * @param {number} y1 - The Y coordinate of the control point.
 * @param {number} x - The ending X coordinate.
 * @param {number} y - The ending Y coordinate.
 */ BoundingBox.prototype.addQuad = function(x0, y0, x1, y1, x, y) {
    var cp1x = x0 + 2 / 3 * (x1 - x0);
    var cp1y = y0 + 2 / 3 * (y1 - y0);
    var cp2x = cp1x + 1 / 3 * (x - x0);
    var cp2y = cp1y + 1 / 3 * (y - y0);
    this.addBezier(x0, y0, cp1x, cp1y, cp2x, cp2y, x, y);
};
// Geometric objects
/**
 * A bézier path containing a set of path commands similar to a SVG path.
 * Paths can be drawn on a context using `draw`.
 * @exports opentype.Path
 * @class
 * @constructor
 */ function Path() {
    this.commands = [];
    this.fill = "black";
    this.stroke = null;
    this.strokeWidth = 1;
}
/**
 * @param  {number} x
 * @param  {number} y
 */ Path.prototype.moveTo = function(x, y) {
    this.commands.push({
        type: "M",
        x: x,
        y: y
    });
};
/**
 * @param  {number} x
 * @param  {number} y
 */ Path.prototype.lineTo = function(x, y) {
    this.commands.push({
        type: "L",
        x: x,
        y: y
    });
};
/**
 * Draws cubic curve
 * @function
 * curveTo
 * @memberof opentype.Path.prototype
 * @param  {number} x1 - x of control 1
 * @param  {number} y1 - y of control 1
 * @param  {number} x2 - x of control 2
 * @param  {number} y2 - y of control 2
 * @param  {number} x - x of path point
 * @param  {number} y - y of path point
 */ /**
 * Draws cubic curve
 * @function
 * bezierCurveTo
 * @memberof opentype.Path.prototype
 * @param  {number} x1 - x of control 1
 * @param  {number} y1 - y of control 1
 * @param  {number} x2 - x of control 2
 * @param  {number} y2 - y of control 2
 * @param  {number} x - x of path point
 * @param  {number} y - y of path point
 * @see curveTo
 */ Path.prototype.curveTo = Path.prototype.bezierCurveTo = function(x1, y1, x2, y2, x, y) {
    this.commands.push({
        type: "C",
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        x: x,
        y: y
    });
};
/**
 * Draws quadratic curve
 * @function
 * quadraticCurveTo
 * @memberof opentype.Path.prototype
 * @param  {number} x1 - x of control
 * @param  {number} y1 - y of control
 * @param  {number} x - x of path point
 * @param  {number} y - y of path point
 */ /**
 * Draws quadratic curve
 * @function
 * quadTo
 * @memberof opentype.Path.prototype
 * @param  {number} x1 - x of control
 * @param  {number} y1 - y of control
 * @param  {number} x - x of path point
 * @param  {number} y - y of path point
 */ Path.prototype.quadTo = Path.prototype.quadraticCurveTo = function(x1, y1, x, y) {
    this.commands.push({
        type: "Q",
        x1: x1,
        y1: y1,
        x: x,
        y: y
    });
};
/**
 * Closes the path
 * @function closePath
 * @memberof opentype.Path.prototype
 */ /**
 * Close the path
 * @function close
 * @memberof opentype.Path.prototype
 */ Path.prototype.close = Path.prototype.closePath = function() {
    this.commands.push({
        type: "Z"
    });
};
/**
 * Add the given path or list of commands to the commands of this path.
 * @param  {Array} pathOrCommands - another opentype.Path, an opentype.BoundingBox, or an array of commands.
 */ Path.prototype.extend = function(pathOrCommands) {
    if (pathOrCommands.commands) pathOrCommands = pathOrCommands.commands;
    else if (pathOrCommands instanceof BoundingBox) {
        var box = pathOrCommands;
        this.moveTo(box.x1, box.y1);
        this.lineTo(box.x2, box.y1);
        this.lineTo(box.x2, box.y2);
        this.lineTo(box.x1, box.y2);
        this.close();
        return;
    }
    Array.prototype.push.apply(this.commands, pathOrCommands);
};
/**
 * Calculate the bounding box of the path.
 * @returns {opentype.BoundingBox}
 */ Path.prototype.getBoundingBox = function() {
    var box = new BoundingBox();
    var startX = 0;
    var startY = 0;
    var prevX = 0;
    var prevY = 0;
    for(var i = 0; i < this.commands.length; i++){
        var cmd = this.commands[i];
        switch(cmd.type){
            case "M":
                box.addPoint(cmd.x, cmd.y);
                startX = prevX = cmd.x;
                startY = prevY = cmd.y;
                break;
            case "L":
                box.addPoint(cmd.x, cmd.y);
                prevX = cmd.x;
                prevY = cmd.y;
                break;
            case "Q":
                box.addQuad(prevX, prevY, cmd.x1, cmd.y1, cmd.x, cmd.y);
                prevX = cmd.x;
                prevY = cmd.y;
                break;
            case "C":
                box.addBezier(prevX, prevY, cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
                prevX = cmd.x;
                prevY = cmd.y;
                break;
            case "Z":
                prevX = startX;
                prevY = startY;
                break;
            default:
                throw new Error("Unexpected path command " + cmd.type);
        }
    }
    if (box.isEmpty()) box.addPoint(0, 0);
    return box;
};
/**
 * Draw the path to a 2D context.
 * @param {CanvasRenderingContext2D} ctx - A 2D drawing context.
 */ Path.prototype.draw = function(ctx) {
    ctx.beginPath();
    for(var i = 0; i < this.commands.length; i += 1){
        var cmd = this.commands[i];
        if (cmd.type === "M") ctx.moveTo(cmd.x, cmd.y);
        else if (cmd.type === "L") ctx.lineTo(cmd.x, cmd.y);
        else if (cmd.type === "C") ctx.bezierCurveTo(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
        else if (cmd.type === "Q") ctx.quadraticCurveTo(cmd.x1, cmd.y1, cmd.x, cmd.y);
        else if (cmd.type === "Z") ctx.closePath();
    }
    if (this.fill) {
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
    if (this.stroke) {
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = this.strokeWidth;
        ctx.stroke();
    }
};
/**
 * Convert the Path to a string of path data instructions
 * See http://www.w3.org/TR/SVG/paths.html#PathData
 * @param  {number} [decimalPlaces=2] - The amount of decimal places for floating-point values
 * @return {string}
 */ Path.prototype.toPathData = function(decimalPlaces) {
    decimalPlaces = decimalPlaces !== undefined ? decimalPlaces : 2;
    function floatToString(v) {
        if (Math.round(v) === v) return "" + Math.round(v);
        else return v.toFixed(decimalPlaces);
    }
    function packValues() {
        var arguments$1 = arguments;
        var s = "";
        for(var i = 0; i < arguments.length; i += 1){
            var v = arguments$1[i];
            if (v >= 0 && i > 0) s += " ";
            s += floatToString(v);
        }
        return s;
    }
    var d = "";
    for(var i = 0; i < this.commands.length; i += 1){
        var cmd = this.commands[i];
        if (cmd.type === "M") d += "M" + packValues(cmd.x, cmd.y);
        else if (cmd.type === "L") d += "L" + packValues(cmd.x, cmd.y);
        else if (cmd.type === "C") d += "C" + packValues(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
        else if (cmd.type === "Q") d += "Q" + packValues(cmd.x1, cmd.y1, cmd.x, cmd.y);
        else if (cmd.type === "Z") d += "Z";
    }
    return d;
};
/**
 * Convert the path to an SVG <path> element, as a string.
 * @param  {number} [decimalPlaces=2] - The amount of decimal places for floating-point values
 * @return {string}
 */ Path.prototype.toSVG = function(decimalPlaces) {
    var svg = '<path d="';
    svg += this.toPathData(decimalPlaces);
    svg += '"';
    if (this.fill && this.fill !== "black") {
        if (this.fill === null) svg += ' fill="none"';
        else svg += ' fill="' + this.fill + '"';
    }
    if (this.stroke) svg += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"';
    svg += "/>";
    return svg;
};
/**
 * Convert the path to a DOM element.
 * @param  {number} [decimalPlaces=2] - The amount of decimal places for floating-point values
 * @return {SVGPathElement}
 */ Path.prototype.toDOMElement = function(decimalPlaces) {
    var temporaryPath = this.toPathData(decimalPlaces);
    var newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newPath.setAttribute("d", temporaryPath);
    return newPath;
};
// Run-time checking of preconditions.
function fail(message) {
    throw new Error(message);
}
// Precondition function that checks if the given predicate is true.
// If not, it will throw an error.
function argument(predicate, message) {
    if (!predicate) fail(message);
}
var check = {
    fail: fail,
    argument: argument,
    assert: argument
};
// Data types used in the OpenType font file.
var LIMIT16 = 32768; // The limit at which a 16-bit number switches signs == 2^15
var LIMIT32 = 2147483648; // The limit at which a 32-bit number switches signs == 2 ^ 31
/**
 * @exports opentype.decode
 * @class
 */ var decode = {};
/**
 * @exports opentype.encode
 * @class
 */ var encode = {};
/**
 * @exports opentype.sizeOf
 * @class
 */ var sizeOf = {};
// Return a function that always returns the same value.
function constant(v) {
    return function() {
        return v;
    };
}
// OpenType data types //////////////////////////////////////////////////////
/**
 * Convert an 8-bit unsigned integer to a list of 1 byte.
 * @param {number}
 * @returns {Array}
 */ encode.BYTE = function(v) {
    check.argument(v >= 0 && v <= 255, "Byte value should be between 0 and 255.");
    return [
        v
    ];
};
/**
 * @constant
 * @type {number}
 */ sizeOf.BYTE = constant(1);
/**
 * Convert a 8-bit signed integer to a list of 1 byte.
 * @param {string}
 * @returns {Array}
 */ encode.CHAR = function(v) {
    return [
        v.charCodeAt(0)
    ];
};
/**
 * @constant
 * @type {number}
 */ sizeOf.CHAR = constant(1);
/**
 * Convert an ASCII string to a list of bytes.
 * @param {string}
 * @returns {Array}
 */ encode.CHARARRAY = function(v) {
    if (typeof v === "undefined") {
        v = "";
        console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name.");
    }
    var b = [];
    for(var i = 0; i < v.length; i += 1)b[i] = v.charCodeAt(i);
    return b;
};
/**
 * @param {Array}
 * @returns {number}
 */ sizeOf.CHARARRAY = function(v) {
    if (typeof v === "undefined") return 0;
    return v.length;
};
/**
 * Convert a 16-bit unsigned integer to a list of 2 bytes.
 * @param {number}
 * @returns {Array}
 */ encode.USHORT = function(v) {
    return [
        v >> 8 & 0xFF,
        v & 0xFF
    ];
};
/**
 * @constant
 * @type {number}
 */ sizeOf.USHORT = constant(2);
/**
 * Convert a 16-bit signed integer to a list of 2 bytes.
 * @param {number}
 * @returns {Array}
 */ encode.SHORT = function(v) {
    // Two's complement
    if (v >= LIMIT16) v = -(2 * LIMIT16 - v);
    return [
        v >> 8 & 0xFF,
        v & 0xFF
    ];
};
/**
 * @constant
 * @type {number}
 */ sizeOf.SHORT = constant(2);
/**
 * Convert a 24-bit unsigned integer to a list of 3 bytes.
 * @param {number}
 * @returns {Array}
 */ encode.UINT24 = function(v) {
    return [
        v >> 16 & 0xFF,
        v >> 8 & 0xFF,
        v & 0xFF
    ];
};
/**
 * @constant
 * @type {number}
 */ sizeOf.UINT24 = constant(3);
/**
 * Convert a 32-bit unsigned integer to a list of 4 bytes.
 * @param {number}
 * @returns {Array}
 */ encode.ULONG = function(v) {
    return [
        v >> 24 & 0xFF,
        v >> 16 & 0xFF,
        v >> 8 & 0xFF,
        v & 0xFF
    ];
};
/**
 * @constant
 * @type {number}
 */ sizeOf.ULONG = constant(4);
/**
 * Convert a 32-bit unsigned integer to a list of 4 bytes.
 * @param {number}
 * @returns {Array}
 */ encode.LONG = function(v) {
    // Two's complement
    if (v >= LIMIT32) v = -(2 * LIMIT32 - v);
    return [
        v >> 24 & 0xFF,
        v >> 16 & 0xFF,
        v >> 8 & 0xFF,
        v & 0xFF
    ];
};
/**
 * @constant
 * @type {number}
 */ sizeOf.LONG = constant(4);
encode.FIXED = encode.ULONG;
sizeOf.FIXED = sizeOf.ULONG;
encode.FWORD = encode.SHORT;
sizeOf.FWORD = sizeOf.SHORT;
encode.UFWORD = encode.USHORT;
sizeOf.UFWORD = sizeOf.USHORT;
/**
 * Convert a 32-bit Apple Mac timestamp integer to a list of 8 bytes, 64-bit timestamp.
 * @param {number}
 * @returns {Array}
 */ encode.LONGDATETIME = function(v) {
    return [
        0,
        0,
        0,
        0,
        v >> 24 & 0xFF,
        v >> 16 & 0xFF,
        v >> 8 & 0xFF,
        v & 0xFF
    ];
};
/**
 * @constant
 * @type {number}
 */ sizeOf.LONGDATETIME = constant(8);
/**
 * Convert a 4-char tag to a list of 4 bytes.
 * @param {string}
 * @returns {Array}
 */ encode.TAG = function(v) {
    check.argument(v.length === 4, "Tag should be exactly 4 ASCII characters.");
    return [
        v.charCodeAt(0),
        v.charCodeAt(1),
        v.charCodeAt(2),
        v.charCodeAt(3)
    ];
};
/**
 * @constant
 * @type {number}
 */ sizeOf.TAG = constant(4);
// CFF data types ///////////////////////////////////////////////////////////
encode.Card8 = encode.BYTE;
sizeOf.Card8 = sizeOf.BYTE;
encode.Card16 = encode.USHORT;
sizeOf.Card16 = sizeOf.USHORT;
encode.OffSize = encode.BYTE;
sizeOf.OffSize = sizeOf.BYTE;
encode.SID = encode.USHORT;
sizeOf.SID = sizeOf.USHORT;
// Convert a numeric operand or charstring number to a variable-size list of bytes.
/**
 * Convert a numeric operand or charstring number to a variable-size list of bytes.
 * @param {number}
 * @returns {Array}
 */ encode.NUMBER = function(v) {
    if (v >= -107 && v <= 107) return [
        v + 139
    ];
    else if (v >= 108 && v <= 1131) {
        v = v - 108;
        return [
            (v >> 8) + 247,
            v & 0xFF
        ];
    } else if (v >= -1131 && v <= -108) {
        v = -v - 108;
        return [
            (v >> 8) + 251,
            v & 0xFF
        ];
    } else if (v >= -32768 && v <= 32767) return encode.NUMBER16(v);
    else return encode.NUMBER32(v);
};
/**
 * @param {number}
 * @returns {number}
 */ sizeOf.NUMBER = function(v) {
    return encode.NUMBER(v).length;
};
/**
 * Convert a signed number between -32768 and +32767 to a three-byte value.
 * This ensures we always use three bytes, but is not the most compact format.
 * @param {number}
 * @returns {Array}
 */ encode.NUMBER16 = function(v) {
    return [
        28,
        v >> 8 & 0xFF,
        v & 0xFF
    ];
};
/**
 * @constant
 * @type {number}
 */ sizeOf.NUMBER16 = constant(3);
/**
 * Convert a signed number between -(2^31) and +(2^31-1) to a five-byte value.
 * This is useful if you want to be sure you always use four bytes,
 * at the expense of wasting a few bytes for smaller numbers.
 * @param {number}
 * @returns {Array}
 */ encode.NUMBER32 = function(v) {
    return [
        29,
        v >> 24 & 0xFF,
        v >> 16 & 0xFF,
        v >> 8 & 0xFF,
        v & 0xFF
    ];
};
/**
 * @constant
 * @type {number}
 */ sizeOf.NUMBER32 = constant(5);
/**
 * @param {number}
 * @returns {Array}
 */ encode.REAL = function(v) {
    var value = v.toString();
    // Some numbers use an epsilon to encode the value. (e.g. JavaScript will store 0.0000001 as 1e-7)
    // This code converts it back to a number without the epsilon.
    var m = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(value);
    if (m) {
        var epsilon = parseFloat("1e" + ((m[2] ? +m[2] : 0) + m[1].length));
        value = (Math.round(v * epsilon) / epsilon).toString();
    }
    var nibbles = "";
    for(var i = 0, ii = value.length; i < ii; i += 1){
        var c = value[i];
        if (c === "e") nibbles += value[++i] === "-" ? "c" : "b";
        else if (c === ".") nibbles += "a";
        else if (c === "-") nibbles += "e";
        else nibbles += c;
    }
    nibbles += nibbles.length & 1 ? "f" : "ff";
    var out = [
        30
    ];
    for(var i$1 = 0, ii$1 = nibbles.length; i$1 < ii$1; i$1 += 2)out.push(parseInt(nibbles.substr(i$1, 2), 16));
    return out;
};
/**
 * @param {number}
 * @returns {number}
 */ sizeOf.REAL = function(v) {
    return encode.REAL(v).length;
};
encode.NAME = encode.CHARARRAY;
sizeOf.NAME = sizeOf.CHARARRAY;
encode.STRING = encode.CHARARRAY;
sizeOf.STRING = sizeOf.CHARARRAY;
/**
 * @param {DataView} data
 * @param {number} offset
 * @param {number} numBytes
 * @returns {string}
 */ decode.UTF8 = function(data, offset, numBytes) {
    var codePoints = [];
    var numChars = numBytes;
    for(var j = 0; j < numChars; j++, offset += 1)codePoints[j] = data.getUint8(offset);
    return String.fromCharCode.apply(null, codePoints);
};
/**
 * @param {DataView} data
 * @param {number} offset
 * @param {number} numBytes
 * @returns {string}
 */ decode.UTF16 = function(data, offset, numBytes) {
    var codePoints = [];
    var numChars = numBytes / 2;
    for(var j = 0; j < numChars; j++, offset += 2)codePoints[j] = data.getUint16(offset);
    return String.fromCharCode.apply(null, codePoints);
};
/**
 * Convert a JavaScript string to UTF16-BE.
 * @param {string}
 * @returns {Array}
 */ encode.UTF16 = function(v) {
    var b = [];
    for(var i = 0; i < v.length; i += 1){
        var codepoint = v.charCodeAt(i);
        b[b.length] = codepoint >> 8 & 0xFF;
        b[b.length] = codepoint & 0xFF;
    }
    return b;
};
/**
 * @param {string}
 * @returns {number}
 */ sizeOf.UTF16 = function(v) {
    return v.length * 2;
};
// Data for converting old eight-bit Macintosh encodings to Unicode.
// This representation is optimized for decoding; encoding is slower
// and needs more memory. The assumption is that all opentype.js users
// want to open fonts, but saving a font will be comparatively rare
// so it can be more expensive. Keyed by IANA character set name.
//
// Python script for generating these strings:
//
//     s = u''.join([chr(c).decode('mac_greek') for c in range(128, 256)])
//     print(s.encode('utf-8'))
/**
 * @private
 */ var eightBitMacEncodings = {
    "x-mac-croatian": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xaeŠ™\xb4\xa8≠Ž\xd8∞\xb1≤≥∆\xb5∂∑∏š∫\xaa\xbaΩž\xf8\xbf\xa1\xac√ƒ≈Ć\xabČ…\xa0\xc0\xc3\xd5ŒœĐ—“”‘’\xf7◊\xa9⁄€‹›\xc6\xbb–\xb7‚„‰\xc2ć\xc1č\xc8\xcd\xce\xcf\xcc\xd3\xd4đ\xd2\xda\xdb\xd9ıˆ˜\xafπ\xcb˚\xb8\xca\xe6ˇ",
    "x-mac-cyrillic": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†\xb0Ґ\xa3\xa7•\xb6І\xae\xa9™Ђђ≠Ѓѓ∞\xb1≤≥і\xb5ґЈЄєЇїЉљЊњјЅ\xac√ƒ≈∆\xab\xbb…\xa0ЋћЌќѕ–—“”‘’\xf7„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю",
    "x-mac-gaelic": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8Ḃ\xb1≤≥ḃĊċḊḋḞḟĠġṀ\xe6\xf8ṁṖṗɼƒſṠ\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’ṡẛ\xffŸṪ€‹›Ŷŷṫ\xb7Ỳỳ⁊\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4♣\xd2\xda\xdb\xd9ı\xdd\xfdŴŵẄẅẀẁẂẃ",
    "x-mac-greek": "\xc4\xb9\xb2\xc9\xb3\xd6\xdc΅\xe0\xe2\xe4΄\xa8\xe7\xe9\xe8\xea\xeb\xa3™\xee\xef•\xbd‰\xf4\xf6\xa6€\xf9\xfb\xfc†ΓΔΘΛΞΠ\xdf\xae\xa9ΣΪ\xa7≠\xb0\xb7Α\xb1≤≥\xa5ΒΕΖΗΙΚΜΦΫΨΩάΝ\xacΟΡ≈Τ\xab\xbb…\xa0ΥΧΆΈœ–―“”‘’\xf7ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ\xad",
    "x-mac-icelandic": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\xdd\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€\xd0\xf0\xde\xfe\xfd\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
    "x-mac-inuit": "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ\xb0ᒡᒥᒦ•\xb6ᒧ\xae\xa9™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ…\xa0ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł",
    "x-mac-ce": "\xc4Āā\xc9Ą\xd6\xdc\xe1ąČ\xe4čĆć\xe9ŹźĎ\xedďĒēĖ\xf3ė\xf4\xf6\xf5\xfaĚě\xfc†\xb0Ę\xa3\xa7•\xb6\xdf\xae\xa9™ę\xa8≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ\xac√ńŇ∆\xab\xbb…\xa0ňŐ\xd5őŌ–—“”‘’\xf7◊ōŔŕŘ‹›řŖŗŠ‚„šŚś\xc1Ťť\xcdŽžŪ\xd3\xd4ūŮ\xdaůŰűŲų\xdd\xfdķŻŁżĢˇ",
    macintosh: "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€‹›ﬁﬂ‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
    "x-mac-romanian": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠ĂȘ∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩăș\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸ⁄€‹›Țț‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ıˆ˜\xaf˘˙˚\xb8˝˛ˇ",
    "x-mac-turkish": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc†\xb0\xa2\xa3\xa7•\xb6\xdf\xae\xa9™\xb4\xa8≠\xc6\xd8∞\xb1≤≥\xa5\xb5∂∑∏π∫\xaa\xbaΩ\xe6\xf8\xbf\xa1\xac√ƒ≈∆\xab\xbb…\xa0\xc0\xc3\xd5Œœ–—“”‘’\xf7◊\xffŸĞğİıŞş‡\xb7‚„‰\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\xd2\xda\xdb\xd9ˆ˜\xaf˘˙˚\xb8˝˛ˇ"
};
/**
 * Decodes an old-style Macintosh string. Returns either a Unicode JavaScript
 * string, or 'undefined' if the encoding is unsupported. For example, we do
 * not support Chinese, Japanese or Korean because these would need large
 * mapping tables.
 * @param {DataView} dataView
 * @param {number} offset
 * @param {number} dataLength
 * @param {string} encoding
 * @returns {string}
 */ decode.MACSTRING = function(dataView, offset, dataLength, encoding) {
    var table = eightBitMacEncodings[encoding];
    if (table === undefined) return undefined;
    var result = "";
    for(var i = 0; i < dataLength; i++){
        var c = dataView.getUint8(offset + i);
        // In all eight-bit Mac encodings, the characters 0x00..0x7F are
        // mapped to U+0000..U+007F; we only need to look up the others.
        if (c <= 0x7F) result += String.fromCharCode(c);
        else result += table[c & 0x7F];
    }
    return result;
};
// Helper function for encode.MACSTRING. Returns a dictionary for mapping
// Unicode character codes to their 8-bit MacOS equivalent. This table
// is not exactly a super cheap data structure, but we do not care because
// encoding Macintosh strings is only rarely needed in typical applications.
var macEncodingTableCache = typeof WeakMap === "function" && new WeakMap();
var macEncodingCacheKeys;
var getMacEncodingTable = function(encoding) {
    // Since we use encoding as a cache key for WeakMap, it has to be
    // a String object and not a literal. And at least on NodeJS 2.10.1,
    // WeakMap requires that the same String instance is passed for cache hits.
    if (!macEncodingCacheKeys) {
        macEncodingCacheKeys = {};
        for(var e in eightBitMacEncodings)/*jshint -W053 */ // Suppress "Do not use String as a constructor."
        macEncodingCacheKeys[e] = new String(e);
    }
    var cacheKey = macEncodingCacheKeys[encoding];
    if (cacheKey === undefined) return undefined;
    // We can't do "if (cache.has(key)) {return cache.get(key)}" here:
    // since garbage collection may run at any time, it could also kick in
    // between the calls to cache.has() and cache.get(). In that case,
    // we would return 'undefined' even though we do support the encoding.
    if (macEncodingTableCache) {
        var cachedTable = macEncodingTableCache.get(cacheKey);
        if (cachedTable !== undefined) return cachedTable;
    }
    var decodingTable = eightBitMacEncodings[encoding];
    if (decodingTable === undefined) return undefined;
    var encodingTable = {};
    for(var i = 0; i < decodingTable.length; i++)encodingTable[decodingTable.charCodeAt(i)] = i + 0x80;
    if (macEncodingTableCache) macEncodingTableCache.set(cacheKey, encodingTable);
    return encodingTable;
};
/**
 * Encodes an old-style Macintosh string. Returns a byte array upon success.
 * If the requested encoding is unsupported, or if the input string contains
 * a character that cannot be expressed in the encoding, the function returns
 * 'undefined'.
 * @param {string} str
 * @param {string} encoding
 * @returns {Array}
 */ encode.MACSTRING = function(str, encoding) {
    var table = getMacEncodingTable(encoding);
    if (table === undefined) return undefined;
    var result = [];
    for(var i = 0; i < str.length; i++){
        var c = str.charCodeAt(i);
        // In all eight-bit Mac encodings, the characters 0x00..0x7F are
        // mapped to U+0000..U+007F; we only need to look up the others.
        if (c >= 0x80) {
            c = table[c];
            if (c === undefined) // str contains a Unicode character that cannot be encoded
            // in the requested encoding.
            return undefined;
        }
        result[i] = c;
    // result.push(c);
    }
    return result;
};
/**
 * @param {string} str
 * @param {string} encoding
 * @returns {number}
 */ sizeOf.MACSTRING = function(str, encoding) {
    var b = encode.MACSTRING(str, encoding);
    if (b !== undefined) return b.length;
    else return 0;
};
// Helper for encode.VARDELTAS
function isByteEncodable(value) {
    return value >= -128 && value <= 127;
}
// Helper for encode.VARDELTAS
function encodeVarDeltaRunAsZeroes(deltas, pos, result) {
    var runLength = 0;
    var numDeltas = deltas.length;
    while(pos < numDeltas && runLength < 64 && deltas[pos] === 0){
        ++pos;
        ++runLength;
    }
    result.push(0x80 | runLength - 1);
    return pos;
}
// Helper for encode.VARDELTAS
function encodeVarDeltaRunAsBytes(deltas, offset, result) {
    var runLength = 0;
    var numDeltas = deltas.length;
    var pos = offset;
    while(pos < numDeltas && runLength < 64){
        var value = deltas[pos];
        if (!isByteEncodable(value)) break;
        // Within a byte-encoded run of deltas, a single zero is best
        // stored literally as 0x00 value. However, if we have two or
        // more zeroes in a sequence, it is better to start a new run.
        // Fore example, the sequence of deltas [15, 15, 0, 15, 15]
        // becomes 6 bytes (04 0F 0F 00 0F 0F) when storing the zero
        // within the current run, but 7 bytes (01 0F 0F 80 01 0F 0F)
        // when starting a new run.
        if (value === 0 && pos + 1 < numDeltas && deltas[pos + 1] === 0) break;
        ++pos;
        ++runLength;
    }
    result.push(runLength - 1);
    for(var i = offset; i < pos; ++i)result.push(deltas[i] + 256 & 0xff);
    return pos;
}
// Helper for encode.VARDELTAS
function encodeVarDeltaRunAsWords(deltas, offset, result) {
    var runLength = 0;
    var numDeltas = deltas.length;
    var pos = offset;
    while(pos < numDeltas && runLength < 64){
        var value = deltas[pos];
        // Within a word-encoded run of deltas, it is easiest to start
        // a new run (with a different encoding) whenever we encounter
        // a zero value. For example, the sequence [0x6666, 0, 0x7777]
        // needs 7 bytes when storing the zero inside the current run
        // (42 66 66 00 00 77 77), and equally 7 bytes when starting a
        // new run (40 66 66 80 40 77 77).
        if (value === 0) break;
        // Within a word-encoded run of deltas, a single value in the
        // range (-128..127) should be encoded within the current run
        // because it is more compact. For example, the sequence
        // [0x6666, 2, 0x7777] becomes 7 bytes when storing the value
        // literally (42 66 66 00 02 77 77), but 8 bytes when starting
        // a new run (40 66 66 00 02 40 77 77).
        if (isByteEncodable(value) && pos + 1 < numDeltas && isByteEncodable(deltas[pos + 1])) break;
        ++pos;
        ++runLength;
    }
    result.push(0x40 | runLength - 1);
    for(var i = offset; i < pos; ++i){
        var val = deltas[i];
        result.push(val + 0x10000 >> 8 & 0xff, val + 0x100 & 0xff);
    }
    return pos;
}
/**
 * Encode a list of variation adjustment deltas.
 *
 * Variation adjustment deltas are used in ‘gvar’ and ‘cvar’ tables.
 * They indicate how points (in ‘gvar’) or values (in ‘cvar’) get adjusted
 * when generating instances of variation fonts.
 *
 * @see https://www.microsoft.com/typography/otspec/gvar.htm
 * @see https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6gvar.html
 * @param {Array}
 * @return {Array}
 */ encode.VARDELTAS = function(deltas) {
    var pos = 0;
    var result = [];
    while(pos < deltas.length){
        var value = deltas[pos];
        if (value === 0) pos = encodeVarDeltaRunAsZeroes(deltas, pos, result);
        else if (value >= -128 && value <= 127) pos = encodeVarDeltaRunAsBytes(deltas, pos, result);
        else pos = encodeVarDeltaRunAsWords(deltas, pos, result);
    }
    return result;
};
// Convert a list of values to a CFF INDEX structure.
// The values should be objects containing name / type / value.
/**
 * @param {Array} l
 * @returns {Array}
 */ encode.INDEX = function(l) {
    //var offset, offsets, offsetEncoder, encodedOffsets, encodedOffset, data,
    //    i, v;
    // Because we have to know which data type to use to encode the offsets,
    // we have to go through the values twice: once to encode the data and
    // calculate the offsets, then again to encode the offsets using the fitting data type.
    var offset = 1; // First offset is always 1.
    var offsets = [
        offset
    ];
    var data = [];
    for(var i = 0; i < l.length; i += 1){
        var v = encode.OBJECT(l[i]);
        Array.prototype.push.apply(data, v);
        offset += v.length;
        offsets.push(offset);
    }
    if (data.length === 0) return [
        0,
        0
    ];
    var encodedOffsets = [];
    var offSize = 1 + Math.floor(Math.log(offset) / Math.log(2)) / 8 | 0;
    var offsetEncoder = [
        undefined,
        encode.BYTE,
        encode.USHORT,
        encode.UINT24,
        encode.ULONG
    ][offSize];
    for(var i$1 = 0; i$1 < offsets.length; i$1 += 1){
        var encodedOffset = offsetEncoder(offsets[i$1]);
        Array.prototype.push.apply(encodedOffsets, encodedOffset);
    }
    return Array.prototype.concat(encode.Card16(l.length), encode.OffSize(offSize), encodedOffsets, data);
};
/**
 * @param {Array}
 * @returns {number}
 */ sizeOf.INDEX = function(v) {
    return encode.INDEX(v).length;
};
/**
 * Convert an object to a CFF DICT structure.
 * The keys should be numeric.
 * The values should be objects containing name / type / value.
 * @param {Object} m
 * @returns {Array}
 */ encode.DICT = function(m) {
    var d = [];
    var keys = Object.keys(m);
    var length = keys.length;
    for(var i = 0; i < length; i += 1){
        // Object.keys() return string keys, but our keys are always numeric.
        var k = parseInt(keys[i], 0);
        var v = m[k];
        // Value comes before the key.
        d = d.concat(encode.OPERAND(v.value, v.type));
        d = d.concat(encode.OPERATOR(k));
    }
    return d;
};
/**
 * @param {Object}
 * @returns {number}
 */ sizeOf.DICT = function(m) {
    return encode.DICT(m).length;
};
/**
 * @param {number}
 * @returns {Array}
 */ encode.OPERATOR = function(v) {
    if (v < 1200) return [
        v
    ];
    else return [
        12,
        v - 1200
    ];
};
/**
 * @param {Array} v
 * @param {string}
 * @returns {Array}
 */ encode.OPERAND = function(v, type) {
    var d = [];
    if (Array.isArray(type)) for(var i = 0; i < type.length; i += 1){
        check.argument(v.length === type.length, "Not enough arguments given for type" + type);
        d = d.concat(encode.OPERAND(v[i], type[i]));
    }
    else {
        if (type === "SID") d = d.concat(encode.NUMBER(v));
        else if (type === "offset") // We make it easy for ourselves and always encode offsets as
        // 4 bytes. This makes offset calculation for the top dict easier.
        d = d.concat(encode.NUMBER32(v));
        else if (type === "number") d = d.concat(encode.NUMBER(v));
        else if (type === "real") d = d.concat(encode.REAL(v));
        else throw new Error("Unknown operand type " + type);
    }
    return d;
};
encode.OP = encode.BYTE;
sizeOf.OP = sizeOf.BYTE;
// memoize charstring encoding using WeakMap if available
var wmm = typeof WeakMap === "function" && new WeakMap();
/**
 * Convert a list of CharString operations to bytes.
 * @param {Array}
 * @returns {Array}
 */ encode.CHARSTRING = function(ops) {
    // See encode.MACSTRING for why we don't do "if (wmm && wmm.has(ops))".
    if (wmm) {
        var cachedValue = wmm.get(ops);
        if (cachedValue !== undefined) return cachedValue;
    }
    var d = [];
    var length = ops.length;
    for(var i = 0; i < length; i += 1){
        var op = ops[i];
        d = d.concat(encode[op.type](op.value));
    }
    if (wmm) wmm.set(ops, d);
    return d;
};
/**
 * @param {Array}
 * @returns {number}
 */ sizeOf.CHARSTRING = function(ops) {
    return encode.CHARSTRING(ops).length;
};
// Utility functions ////////////////////////////////////////////////////////
/**
 * Convert an object containing name / type / value to bytes.
 * @param {Object}
 * @returns {Array}
 */ encode.OBJECT = function(v) {
    var encodingFunction = encode[v.type];
    check.argument(encodingFunction !== undefined, "No encoding function for type " + v.type);
    return encodingFunction(v.value);
};
/**
 * @param {Object}
 * @returns {number}
 */ sizeOf.OBJECT = function(v) {
    var sizeOfFunction = sizeOf[v.type];
    check.argument(sizeOfFunction !== undefined, "No sizeOf function for type " + v.type);
    return sizeOfFunction(v.value);
};
/**
 * Convert a table object to bytes.
 * A table contains a list of fields containing the metadata (name, type and default value).
 * The table itself has the field values set as attributes.
 * @param {opentype.Table}
 * @returns {Array}
 */ encode.TABLE = function(table) {
    var d = [];
    var length = table.fields.length;
    var subtables = [];
    var subtableOffsets = [];
    for(var i = 0; i < length; i += 1){
        var field = table.fields[i];
        var encodingFunction = encode[field.type];
        check.argument(encodingFunction !== undefined, "No encoding function for field type " + field.type + " (" + field.name + ")");
        var value = table[field.name];
        if (value === undefined) value = field.value;
        var bytes = encodingFunction(value);
        if (field.type === "TABLE") {
            subtableOffsets.push(d.length);
            d = d.concat([
                0,
                0
            ]);
            subtables.push(bytes);
        } else d = d.concat(bytes);
    }
    for(var i$1 = 0; i$1 < subtables.length; i$1 += 1){
        var o = subtableOffsets[i$1];
        var offset = d.length;
        check.argument(offset < 65536, "Table " + table.tableName + " too big.");
        d[o] = offset >> 8;
        d[o + 1] = offset & 0xff;
        d = d.concat(subtables[i$1]);
    }
    return d;
};
/**
 * @param {opentype.Table}
 * @returns {number}
 */ sizeOf.TABLE = function(table) {
    var numBytes = 0;
    var length = table.fields.length;
    for(var i = 0; i < length; i += 1){
        var field = table.fields[i];
        var sizeOfFunction = sizeOf[field.type];
        check.argument(sizeOfFunction !== undefined, "No sizeOf function for field type " + field.type + " (" + field.name + ")");
        var value = table[field.name];
        if (value === undefined) value = field.value;
        numBytes += sizeOfFunction(value);
        // Subtables take 2 more bytes for offsets.
        if (field.type === "TABLE") numBytes += 2;
    }
    return numBytes;
};
encode.RECORD = encode.TABLE;
sizeOf.RECORD = sizeOf.TABLE;
// Merge in a list of bytes.
encode.LITERAL = function(v) {
    return v;
};
sizeOf.LITERAL = function(v) {
    return v.length;
};
// Table metadata
/**
 * @exports opentype.Table
 * @class
 * @param {string} tableName
 * @param {Array} fields
 * @param {Object} options
 * @constructor
 */ function Table(tableName, fields, options) {
    // For coverage tables with coverage format 2, we do not want to add the coverage data directly to the table object,
    // as this will result in wrong encoding order of the coverage data on serialization to bytes.
    // The fallback of using the field values directly when not present on the table is handled in types.encode.TABLE() already.
    if (fields.length && (fields[0].name !== "coverageFormat" || fields[0].value === 1)) for(var i = 0; i < fields.length; i += 1){
        var field = fields[i];
        this[field.name] = field.value;
    }
    this.tableName = tableName;
    this.fields = fields;
    if (options) {
        var optionKeys = Object.keys(options);
        for(var i$1 = 0; i$1 < optionKeys.length; i$1 += 1){
            var k = optionKeys[i$1];
            var v = options[k];
            if (this[k] !== undefined) this[k] = v;
        }
    }
}
/**
 * Encodes the table and returns an array of bytes
 * @return {Array}
 */ Table.prototype.encode = function() {
    return encode.TABLE(this);
};
/**
 * Get the size of the table.
 * @return {number}
 */ Table.prototype.sizeOf = function() {
    return sizeOf.TABLE(this);
};
/**
 * @private
 */ function ushortList(itemName, list, count) {
    if (count === undefined) count = list.length;
    var fields = new Array(list.length + 1);
    fields[0] = {
        name: itemName + "Count",
        type: "USHORT",
        value: count
    };
    for(var i = 0; i < list.length; i++)fields[i + 1] = {
        name: itemName + i,
        type: "USHORT",
        value: list[i]
    };
    return fields;
}
/**
 * @private
 */ function tableList(itemName, records, itemCallback) {
    var count = records.length;
    var fields = new Array(count + 1);
    fields[0] = {
        name: itemName + "Count",
        type: "USHORT",
        value: count
    };
    for(var i = 0; i < count; i++)fields[i + 1] = {
        name: itemName + i,
        type: "TABLE",
        value: itemCallback(records[i], i)
    };
    return fields;
}
/**
 * @private
 */ function recordList(itemName, records, itemCallback) {
    var count = records.length;
    var fields = [];
    fields[0] = {
        name: itemName + "Count",
        type: "USHORT",
        value: count
    };
    for(var i = 0; i < count; i++)fields = fields.concat(itemCallback(records[i], i));
    return fields;
}
// Common Layout Tables
/**
 * @exports opentype.Coverage
 * @class
 * @param {opentype.Table}
 * @constructor
 * @extends opentype.Table
 */ function Coverage(coverageTable) {
    if (coverageTable.format === 1) Table.call(this, "coverageTable", [
        {
            name: "coverageFormat",
            type: "USHORT",
            value: 1
        }
    ].concat(ushortList("glyph", coverageTable.glyphs)));
    else if (coverageTable.format === 2) Table.call(this, "coverageTable", [
        {
            name: "coverageFormat",
            type: "USHORT",
            value: 2
        }
    ].concat(recordList("rangeRecord", coverageTable.ranges, function(RangeRecord) {
        return [
            {
                name: "startGlyphID",
                type: "USHORT",
                value: RangeRecord.start
            },
            {
                name: "endGlyphID",
                type: "USHORT",
                value: RangeRecord.end
            },
            {
                name: "startCoverageIndex",
                type: "USHORT",
                value: RangeRecord.index
            }
        ];
    })));
    else check.assert(false, "Coverage format must be 1 or 2.");
}
Coverage.prototype = Object.create(Table.prototype);
Coverage.prototype.constructor = Coverage;
function ScriptList(scriptListTable) {
    Table.call(this, "scriptListTable", recordList("scriptRecord", scriptListTable, function(scriptRecord, i) {
        var script = scriptRecord.script;
        var defaultLangSys = script.defaultLangSys;
        check.assert(!!defaultLangSys, "Unable to write GSUB: script " + scriptRecord.tag + " has no default language system.");
        return [
            {
                name: "scriptTag" + i,
                type: "TAG",
                value: scriptRecord.tag
            },
            {
                name: "script" + i,
                type: "TABLE",
                value: new Table("scriptTable", [
                    {
                        name: "defaultLangSys",
                        type: "TABLE",
                        value: new Table("defaultLangSys", [
                            {
                                name: "lookupOrder",
                                type: "USHORT",
                                value: 0
                            },
                            {
                                name: "reqFeatureIndex",
                                type: "USHORT",
                                value: defaultLangSys.reqFeatureIndex
                            }
                        ].concat(ushortList("featureIndex", defaultLangSys.featureIndexes)))
                    }
                ].concat(recordList("langSys", script.langSysRecords, function(langSysRecord, i) {
                    var langSys = langSysRecord.langSys;
                    return [
                        {
                            name: "langSysTag" + i,
                            type: "TAG",
                            value: langSysRecord.tag
                        },
                        {
                            name: "langSys" + i,
                            type: "TABLE",
                            value: new Table("langSys", [
                                {
                                    name: "lookupOrder",
                                    type: "USHORT",
                                    value: 0
                                },
                                {
                                    name: "reqFeatureIndex",
                                    type: "USHORT",
                                    value: langSys.reqFeatureIndex
                                }
                            ].concat(ushortList("featureIndex", langSys.featureIndexes)))
                        }
                    ];
                })))
            }
        ];
    }));
}
ScriptList.prototype = Object.create(Table.prototype);
ScriptList.prototype.constructor = ScriptList;
/**
 * @exports opentype.FeatureList
 * @class
 * @param {opentype.Table}
 * @constructor
 * @extends opentype.Table
 */ function FeatureList(featureListTable) {
    Table.call(this, "featureListTable", recordList("featureRecord", featureListTable, function(featureRecord, i) {
        var feature = featureRecord.feature;
        return [
            {
                name: "featureTag" + i,
                type: "TAG",
                value: featureRecord.tag
            },
            {
                name: "feature" + i,
                type: "TABLE",
                value: new Table("featureTable", [
                    {
                        name: "featureParams",
                        type: "USHORT",
                        value: feature.featureParams
                    }
                ].concat(ushortList("lookupListIndex", feature.lookupListIndexes)))
            }
        ];
    }));
}
FeatureList.prototype = Object.create(Table.prototype);
FeatureList.prototype.constructor = FeatureList;
/**
 * @exports opentype.LookupList
 * @class
 * @param {opentype.Table}
 * @param {Object}
 * @constructor
 * @extends opentype.Table
 */ function LookupList(lookupListTable, subtableMakers) {
    Table.call(this, "lookupListTable", tableList("lookup", lookupListTable, function(lookupTable) {
        var subtableCallback = subtableMakers[lookupTable.lookupType];
        check.assert(!!subtableCallback, "Unable to write GSUB lookup type " + lookupTable.lookupType + " tables.");
        return new Table("lookupTable", [
            {
                name: "lookupType",
                type: "USHORT",
                value: lookupTable.lookupType
            },
            {
                name: "lookupFlag",
                type: "USHORT",
                value: lookupTable.lookupFlag
            }
        ].concat(tableList("subtable", lookupTable.subtables, subtableCallback)));
    }));
}
LookupList.prototype = Object.create(Table.prototype);
LookupList.prototype.constructor = LookupList;
// Record = same as Table, but inlined (a Table has an offset and its data is further in the stream)
// Don't use offsets inside Records (probable bug), only in Tables.
var table = {
    Table: Table,
    Record: Table,
    Coverage: Coverage,
    ScriptList: ScriptList,
    FeatureList: FeatureList,
    LookupList: LookupList,
    ushortList: ushortList,
    tableList: tableList,
    recordList: recordList
};
// Parsing utility functions
// Retrieve an unsigned byte from the DataView.
function getByte(dataView, offset) {
    return dataView.getUint8(offset);
}
// Retrieve an unsigned 16-bit short from the DataView.
// The value is stored in big endian.
function getUShort(dataView, offset) {
    return dataView.getUint16(offset, false);
}
// Retrieve a signed 16-bit short from the DataView.
// The value is stored in big endian.
function getShort(dataView, offset) {
    return dataView.getInt16(offset, false);
}
// Retrieve an unsigned 32-bit long from the DataView.
// The value is stored in big endian.
function getULong(dataView, offset) {
    return dataView.getUint32(offset, false);
}
// Retrieve a 32-bit signed fixed-point number (16.16) from the DataView.
// The value is stored in big endian.
function getFixed(dataView, offset) {
    var decimal = dataView.getInt16(offset, false);
    var fraction = dataView.getUint16(offset + 2, false);
    return decimal + fraction / 65535;
}
// Retrieve a 4-character tag from the DataView.
// Tags are used to identify tables.
function getTag(dataView, offset) {
    var tag = "";
    for(var i = offset; i < offset + 4; i += 1)tag += String.fromCharCode(dataView.getInt8(i));
    return tag;
}
// Retrieve an offset from the DataView.
// Offsets are 1 to 4 bytes in length, depending on the offSize argument.
function getOffset(dataView, offset, offSize) {
    var v = 0;
    for(var i = 0; i < offSize; i += 1){
        v <<= 8;
        v += dataView.getUint8(offset + i);
    }
    return v;
}
// Retrieve a number of bytes from start offset to the end offset from the DataView.
function getBytes(dataView, startOffset, endOffset) {
    var bytes = [];
    for(var i = startOffset; i < endOffset; i += 1)bytes.push(dataView.getUint8(i));
    return bytes;
}
// Convert the list of bytes to a string.
function bytesToString(bytes) {
    var s = "";
    for(var i = 0; i < bytes.length; i += 1)s += String.fromCharCode(bytes[i]);
    return s;
}
var typeOffsets = {
    byte: 1,
    uShort: 2,
    short: 2,
    uLong: 4,
    fixed: 4,
    longDateTime: 8,
    tag: 4
};
// A stateful parser that changes the offset whenever a value is retrieved.
// The data is a DataView.
function Parser(data, offset) {
    this.data = data;
    this.offset = offset;
    this.relativeOffset = 0;
}
Parser.prototype.parseByte = function() {
    var v = this.data.getUint8(this.offset + this.relativeOffset);
    this.relativeOffset += 1;
    return v;
};
Parser.prototype.parseChar = function() {
    var v = this.data.getInt8(this.offset + this.relativeOffset);
    this.relativeOffset += 1;
    return v;
};
Parser.prototype.parseCard8 = Parser.prototype.parseByte;
Parser.prototype.parseUShort = function() {
    var v = this.data.getUint16(this.offset + this.relativeOffset);
    this.relativeOffset += 2;
    return v;
};
Parser.prototype.parseCard16 = Parser.prototype.parseUShort;
Parser.prototype.parseSID = Parser.prototype.parseUShort;
Parser.prototype.parseOffset16 = Parser.prototype.parseUShort;
Parser.prototype.parseShort = function() {
    var v = this.data.getInt16(this.offset + this.relativeOffset);
    this.relativeOffset += 2;
    return v;
};
Parser.prototype.parseF2Dot14 = function() {
    var v = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
    this.relativeOffset += 2;
    return v;
};
Parser.prototype.parseULong = function() {
    var v = getULong(this.data, this.offset + this.relativeOffset);
    this.relativeOffset += 4;
    return v;
};
Parser.prototype.parseOffset32 = Parser.prototype.parseULong;
Parser.prototype.parseFixed = function() {
    var v = getFixed(this.data, this.offset + this.relativeOffset);
    this.relativeOffset += 4;
    return v;
};
Parser.prototype.parseString = function(length) {
    var dataView = this.data;
    var offset = this.offset + this.relativeOffset;
    var string = "";
    this.relativeOffset += length;
    for(var i = 0; i < length; i++)string += String.fromCharCode(dataView.getUint8(offset + i));
    return string;
};
Parser.prototype.parseTag = function() {
    return this.parseString(4);
};
// LONGDATETIME is a 64-bit integer.
// JavaScript and unix timestamps traditionally use 32 bits, so we
// only take the last 32 bits.
// + Since until 2038 those bits will be filled by zeros we can ignore them.
Parser.prototype.parseLongDateTime = function() {
    var v = getULong(this.data, this.offset + this.relativeOffset + 4);
    // Subtract seconds between 01/01/1904 and 01/01/1970
    // to convert Apple Mac timestamp to Standard Unix timestamp
    v -= 2082844800;
    this.relativeOffset += 8;
    return v;
};
Parser.prototype.parseVersion = function(minorBase) {
    var major = getUShort(this.data, this.offset + this.relativeOffset);
    // How to interpret the minor version is very vague in the spec. 0x5000 is 5, 0x1000 is 1
    // Default returns the correct number if minor = 0xN000 where N is 0-9
    // Set minorBase to 1 for tables that use minor = N where N is 0-9
    var minor = getUShort(this.data, this.offset + this.relativeOffset + 2);
    this.relativeOffset += 4;
    if (minorBase === undefined) minorBase = 0x1000;
    return major + minor / minorBase / 10;
};
Parser.prototype.skip = function(type, amount) {
    if (amount === undefined) amount = 1;
    this.relativeOffset += typeOffsets[type] * amount;
};
///// Parsing lists and records ///////////////////////////////
// Parse a list of 32 bit unsigned integers.
Parser.prototype.parseULongList = function(count) {
    if (count === undefined) count = this.parseULong();
    var offsets = new Array(count);
    var dataView = this.data;
    var offset = this.offset + this.relativeOffset;
    for(var i = 0; i < count; i++){
        offsets[i] = dataView.getUint32(offset);
        offset += 4;
    }
    this.relativeOffset += count * 4;
    return offsets;
};
// Parse a list of 16 bit unsigned integers. The length of the list can be read on the stream
// or provided as an argument.
Parser.prototype.parseOffset16List = Parser.prototype.parseUShortList = function(count) {
    if (count === undefined) count = this.parseUShort();
    var offsets = new Array(count);
    var dataView = this.data;
    var offset = this.offset + this.relativeOffset;
    for(var i = 0; i < count; i++){
        offsets[i] = dataView.getUint16(offset);
        offset += 2;
    }
    this.relativeOffset += count * 2;
    return offsets;
};
// Parses a list of 16 bit signed integers.
Parser.prototype.parseShortList = function(count) {
    var list = new Array(count);
    var dataView = this.data;
    var offset = this.offset + this.relativeOffset;
    for(var i = 0; i < count; i++){
        list[i] = dataView.getInt16(offset);
        offset += 2;
    }
    this.relativeOffset += count * 2;
    return list;
};
// Parses a list of bytes.
Parser.prototype.parseByteList = function(count) {
    var list = new Array(count);
    var dataView = this.data;
    var offset = this.offset + this.relativeOffset;
    for(var i = 0; i < count; i++)list[i] = dataView.getUint8(offset++);
    this.relativeOffset += count;
    return list;
};
/**
 * Parse a list of items.
 * Record count is optional, if omitted it is read from the stream.
 * itemCallback is one of the Parser methods.
 */ Parser.prototype.parseList = function(count, itemCallback) {
    if (!itemCallback) {
        itemCallback = count;
        count = this.parseUShort();
    }
    var list = new Array(count);
    for(var i = 0; i < count; i++)list[i] = itemCallback.call(this);
    return list;
};
Parser.prototype.parseList32 = function(count, itemCallback) {
    if (!itemCallback) {
        itemCallback = count;
        count = this.parseULong();
    }
    var list = new Array(count);
    for(var i = 0; i < count; i++)list[i] = itemCallback.call(this);
    return list;
};
/**
 * Parse a list of records.
 * Record count is optional, if omitted it is read from the stream.
 * Example of recordDescription: { sequenceIndex: Parser.uShort, lookupListIndex: Parser.uShort }
 */ Parser.prototype.parseRecordList = function(count, recordDescription) {
    // If the count argument is absent, read it in the stream.
    if (!recordDescription) {
        recordDescription = count;
        count = this.parseUShort();
    }
    var records = new Array(count);
    var fields = Object.keys(recordDescription);
    for(var i = 0; i < count; i++){
        var rec = {};
        for(var j = 0; j < fields.length; j++){
            var fieldName = fields[j];
            var fieldType = recordDescription[fieldName];
            rec[fieldName] = fieldType.call(this);
        }
        records[i] = rec;
    }
    return records;
};
Parser.prototype.parseRecordList32 = function(count, recordDescription) {
    // If the count argument is absent, read it in the stream.
    if (!recordDescription) {
        recordDescription = count;
        count = this.parseULong();
    }
    var records = new Array(count);
    var fields = Object.keys(recordDescription);
    for(var i = 0; i < count; i++){
        var rec = {};
        for(var j = 0; j < fields.length; j++){
            var fieldName = fields[j];
            var fieldType = recordDescription[fieldName];
            rec[fieldName] = fieldType.call(this);
        }
        records[i] = rec;
    }
    return records;
};
// Parse a data structure into an object
// Example of description: { sequenceIndex: Parser.uShort, lookupListIndex: Parser.uShort }
Parser.prototype.parseStruct = function(description) {
    if (typeof description === "function") return description.call(this);
    else {
        var fields = Object.keys(description);
        var struct = {};
        for(var j = 0; j < fields.length; j++){
            var fieldName = fields[j];
            var fieldType = description[fieldName];
            struct[fieldName] = fieldType.call(this);
        }
        return struct;
    }
};
/**
 * Parse a GPOS valueRecord
 * https://docs.microsoft.com/en-us/typography/opentype/spec/gpos#value-record
 * valueFormat is optional, if omitted it is read from the stream.
 */ Parser.prototype.parseValueRecord = function(valueFormat) {
    if (valueFormat === undefined) valueFormat = this.parseUShort();
    if (valueFormat === 0) // valueFormat2 in kerning pairs is most often 0
    // in this case return undefined instead of an empty object, to save space
    return;
    var valueRecord = {};
    if (valueFormat & 0x0001) valueRecord.xPlacement = this.parseShort();
    if (valueFormat & 0x0002) valueRecord.yPlacement = this.parseShort();
    if (valueFormat & 0x0004) valueRecord.xAdvance = this.parseShort();
    if (valueFormat & 0x0008) valueRecord.yAdvance = this.parseShort();
    // Device table (non-variable font) / VariationIndex table (variable font) not supported
    // https://docs.microsoft.com/fr-fr/typography/opentype/spec/chapter2#devVarIdxTbls
    if (valueFormat & 0x0010) {
        valueRecord.xPlaDevice = undefined;
        this.parseShort();
    }
    if (valueFormat & 0x0020) {
        valueRecord.yPlaDevice = undefined;
        this.parseShort();
    }
    if (valueFormat & 0x0040) {
        valueRecord.xAdvDevice = undefined;
        this.parseShort();
    }
    if (valueFormat & 0x0080) {
        valueRecord.yAdvDevice = undefined;
        this.parseShort();
    }
    return valueRecord;
};
/**
 * Parse a list of GPOS valueRecords
 * https://docs.microsoft.com/en-us/typography/opentype/spec/gpos#value-record
 * valueFormat and valueCount are read from the stream.
 */ Parser.prototype.parseValueRecordList = function() {
    var valueFormat = this.parseUShort();
    var valueCount = this.parseUShort();
    var values = new Array(valueCount);
    for(var i = 0; i < valueCount; i++)values[i] = this.parseValueRecord(valueFormat);
    return values;
};
Parser.prototype.parsePointer = function(description) {
    var structOffset = this.parseOffset16();
    if (structOffset > 0) // NULL offset => return undefined
    return new Parser(this.data, this.offset + structOffset).parseStruct(description);
    return undefined;
};
Parser.prototype.parsePointer32 = function(description) {
    var structOffset = this.parseOffset32();
    if (structOffset > 0) // NULL offset => return undefined
    return new Parser(this.data, this.offset + structOffset).parseStruct(description);
    return undefined;
};
/**
 * Parse a list of offsets to lists of 16-bit integers,
 * or a list of offsets to lists of offsets to any kind of items.
 * If itemCallback is not provided, a list of list of UShort is assumed.
 * If provided, itemCallback is called on each item and must parse the item.
 * See examples in tables/gsub.js
 */ Parser.prototype.parseListOfLists = function(itemCallback) {
    var offsets = this.parseOffset16List();
    var count = offsets.length;
    var relativeOffset = this.relativeOffset;
    var list = new Array(count);
    for(var i = 0; i < count; i++){
        var start = offsets[i];
        if (start === 0) {
            // NULL offset
            // Add i as owned property to list. Convenient with assert.
            list[i] = undefined;
            continue;
        }
        this.relativeOffset = start;
        if (itemCallback) {
            var subOffsets = this.parseOffset16List();
            var subList = new Array(subOffsets.length);
            for(var j = 0; j < subOffsets.length; j++){
                this.relativeOffset = start + subOffsets[j];
                subList[j] = itemCallback.call(this);
            }
            list[i] = subList;
        } else list[i] = this.parseUShortList();
    }
    this.relativeOffset = relativeOffset;
    return list;
};
///// Complex tables parsing //////////////////////////////////
// Parse a coverage table in a GSUB, GPOS or GDEF table.
// https://www.microsoft.com/typography/OTSPEC/chapter2.htm
// parser.offset must point to the start of the table containing the coverage.
Parser.prototype.parseCoverage = function() {
    var startOffset = this.offset + this.relativeOffset;
    var format = this.parseUShort();
    var count = this.parseUShort();
    if (format === 1) return {
        format: 1,
        glyphs: this.parseUShortList(count)
    };
    else if (format === 2) {
        var ranges = new Array(count);
        for(var i = 0; i < count; i++)ranges[i] = {
            start: this.parseUShort(),
            end: this.parseUShort(),
            index: this.parseUShort()
        };
        return {
            format: 2,
            ranges: ranges
        };
    }
    throw new Error("0x" + startOffset.toString(16) + ": Coverage format must be 1 or 2.");
};
// Parse a Class Definition Table in a GSUB, GPOS or GDEF table.
// https://www.microsoft.com/typography/OTSPEC/chapter2.htm
Parser.prototype.parseClassDef = function() {
    var startOffset = this.offset + this.relativeOffset;
    var format = this.parseUShort();
    if (format === 1) return {
        format: 1,
        startGlyph: this.parseUShort(),
        classes: this.parseUShortList()
    };
    else if (format === 2) return {
        format: 2,
        ranges: this.parseRecordList({
            start: Parser.uShort,
            end: Parser.uShort,
            classId: Parser.uShort
        })
    };
    throw new Error("0x" + startOffset.toString(16) + ": ClassDef format must be 1 or 2.");
};
///// Static methods ///////////////////////////////////
// These convenience methods can be used as callbacks and should be called with "this" context set to a Parser instance.
Parser.list = function(count, itemCallback) {
    return function() {
        return this.parseList(count, itemCallback);
    };
};
Parser.list32 = function(count, itemCallback) {
    return function() {
        return this.parseList32(count, itemCallback);
    };
};
Parser.recordList = function(count, recordDescription) {
    return function() {
        return this.parseRecordList(count, recordDescription);
    };
};
Parser.recordList32 = function(count, recordDescription) {
    return function() {
        return this.parseRecordList32(count, recordDescription);
    };
};
Parser.pointer = function(description) {
    return function() {
        return this.parsePointer(description);
    };
};
Parser.pointer32 = function(description) {
    return function() {
        return this.parsePointer32(description);
    };
};
Parser.tag = Parser.prototype.parseTag;
Parser.byte = Parser.prototype.parseByte;
Parser.uShort = Parser.offset16 = Parser.prototype.parseUShort;
Parser.uShortList = Parser.prototype.parseUShortList;
Parser.uLong = Parser.offset32 = Parser.prototype.parseULong;
Parser.uLongList = Parser.prototype.parseULongList;
Parser.struct = Parser.prototype.parseStruct;
Parser.coverage = Parser.prototype.parseCoverage;
Parser.classDef = Parser.prototype.parseClassDef;
///// Script, Feature, Lookup lists ///////////////////////////////////////////////
// https://www.microsoft.com/typography/OTSPEC/chapter2.htm
var langSysTable = {
    reserved: Parser.uShort,
    reqFeatureIndex: Parser.uShort,
    featureIndexes: Parser.uShortList
};
Parser.prototype.parseScriptList = function() {
    return this.parsePointer(Parser.recordList({
        tag: Parser.tag,
        script: Parser.pointer({
            defaultLangSys: Parser.pointer(langSysTable),
            langSysRecords: Parser.recordList({
                tag: Parser.tag,
                langSys: Parser.pointer(langSysTable)
            })
        })
    })) || [];
};
Parser.prototype.parseFeatureList = function() {
    return this.parsePointer(Parser.recordList({
        tag: Parser.tag,
        feature: Parser.pointer({
            featureParams: Parser.offset16,
            lookupListIndexes: Parser.uShortList
        })
    })) || [];
};
Parser.prototype.parseLookupList = function(lookupTableParsers) {
    return this.parsePointer(Parser.list(Parser.pointer(function() {
        var lookupType = this.parseUShort();
        check.argument(1 <= lookupType && lookupType <= 9, "GPOS/GSUB lookup type " + lookupType + " unknown.");
        var lookupFlag = this.parseUShort();
        var useMarkFilteringSet = lookupFlag & 0x10;
        return {
            lookupType: lookupType,
            lookupFlag: lookupFlag,
            subtables: this.parseList(Parser.pointer(lookupTableParsers[lookupType])),
            markFilteringSet: useMarkFilteringSet ? this.parseUShort() : undefined
        };
    }))) || [];
};
Parser.prototype.parseFeatureVariationsList = function() {
    return this.parsePointer32(function() {
        var majorVersion = this.parseUShort();
        var minorVersion = this.parseUShort();
        check.argument(majorVersion === 1 && minorVersion < 1, "GPOS/GSUB feature variations table unknown.");
        var featureVariations = this.parseRecordList32({
            conditionSetOffset: Parser.offset32,
            featureTableSubstitutionOffset: Parser.offset32
        });
        return featureVariations;
    }) || [];
};
var parse = {
    getByte: getByte,
    getCard8: getByte,
    getUShort: getUShort,
    getCard16: getUShort,
    getShort: getShort,
    getULong: getULong,
    getFixed: getFixed,
    getTag: getTag,
    getOffset: getOffset,
    getBytes: getBytes,
    bytesToString: bytesToString,
    Parser: Parser
};
// The `cmap` table stores the mappings from characters to glyphs.
function parseCmapTableFormat12(cmap, p) {
    //Skip reserved.
    p.parseUShort();
    // Length in bytes of the sub-tables.
    cmap.length = p.parseULong();
    cmap.language = p.parseULong();
    var groupCount;
    cmap.groupCount = groupCount = p.parseULong();
    cmap.glyphIndexMap = {};
    for(var i = 0; i < groupCount; i += 1){
        var startCharCode = p.parseULong();
        var endCharCode = p.parseULong();
        var startGlyphId = p.parseULong();
        for(var c = startCharCode; c <= endCharCode; c += 1){
            cmap.glyphIndexMap[c] = startGlyphId;
            startGlyphId++;
        }
    }
}
function parseCmapTableFormat4(cmap, p, data, start, offset) {
    // Length in bytes of the sub-tables.
    cmap.length = p.parseUShort();
    cmap.language = p.parseUShort();
    // segCount is stored x 2.
    var segCount;
    cmap.segCount = segCount = p.parseUShort() >> 1;
    // Skip searchRange, entrySelector, rangeShift.
    p.skip("uShort", 3);
    // The "unrolled" mapping from character codes to glyph indices.
    cmap.glyphIndexMap = {};
    var endCountParser = new parse.Parser(data, start + offset + 14);
    var startCountParser = new parse.Parser(data, start + offset + 16 + segCount * 2);
    var idDeltaParser = new parse.Parser(data, start + offset + 16 + segCount * 4);
    var idRangeOffsetParser = new parse.Parser(data, start + offset + 16 + segCount * 6);
    var glyphIndexOffset = start + offset + 16 + segCount * 8;
    for(var i = 0; i < segCount - 1; i += 1){
        var glyphIndex = void 0;
        var endCount = endCountParser.parseUShort();
        var startCount = startCountParser.parseUShort();
        var idDelta = idDeltaParser.parseShort();
        var idRangeOffset = idRangeOffsetParser.parseUShort();
        for(var c = startCount; c <= endCount; c += 1){
            if (idRangeOffset !== 0) {
                // The idRangeOffset is relative to the current position in the idRangeOffset array.
                // Take the current offset in the idRangeOffset array.
                glyphIndexOffset = idRangeOffsetParser.offset + idRangeOffsetParser.relativeOffset - 2;
                // Add the value of the idRangeOffset, which will move us into the glyphIndex array.
                glyphIndexOffset += idRangeOffset;
                // Then add the character index of the current segment, multiplied by 2 for USHORTs.
                glyphIndexOffset += (c - startCount) * 2;
                glyphIndex = parse.getUShort(data, glyphIndexOffset);
                if (glyphIndex !== 0) glyphIndex = glyphIndex + idDelta & 0xFFFF;
            } else glyphIndex = c + idDelta & 0xFFFF;
            cmap.glyphIndexMap[c] = glyphIndex;
        }
    }
}
// Parse the `cmap` table. This table stores the mappings from characters to glyphs.
// There are many available formats, but we only support the Windows format 4 and 12.
// This function returns a `CmapEncoding` object or null if no supported format could be found.
function parseCmapTable(data, start) {
    var cmap = {};
    cmap.version = parse.getUShort(data, start);
    check.argument(cmap.version === 0, "cmap table version should be 0.");
    // The cmap table can contain many sub-tables, each with their own format.
    // We're only interested in a "platform 0" (Unicode format) and "platform 3" (Windows format) table.
    cmap.numTables = parse.getUShort(data, start + 2);
    var offset = -1;
    for(var i = cmap.numTables - 1; i >= 0; i -= 1){
        var platformId = parse.getUShort(data, start + 4 + i * 8);
        var encodingId = parse.getUShort(data, start + 4 + i * 8 + 2);
        if (platformId === 3 && (encodingId === 0 || encodingId === 1 || encodingId === 10) || platformId === 0 && (encodingId === 0 || encodingId === 1 || encodingId === 2 || encodingId === 3 || encodingId === 4)) {
            offset = parse.getULong(data, start + 4 + i * 8 + 4);
            break;
        }
    }
    if (offset === -1) // There is no cmap table in the font that we support.
    throw new Error("No valid cmap sub-tables found.");
    var p = new parse.Parser(data, start + offset);
    cmap.format = p.parseUShort();
    if (cmap.format === 12) parseCmapTableFormat12(cmap, p);
    else if (cmap.format === 4) parseCmapTableFormat4(cmap, p, data, start, offset);
    else throw new Error("Only format 4 and 12 cmap tables are supported (found format " + cmap.format + ").");
    return cmap;
}
function addSegment(t, code, glyphIndex) {
    t.segments.push({
        end: code,
        start: code,
        delta: -(code - glyphIndex),
        offset: 0,
        glyphIndex: glyphIndex
    });
}
function addTerminatorSegment(t) {
    t.segments.push({
        end: 0xFFFF,
        start: 0xFFFF,
        delta: 1,
        offset: 0
    });
}
// Make cmap table, format 4 by default, 12 if needed only
function makeCmapTable(glyphs) {
    // Plan 0 is the base Unicode Plan but emojis, for example are on another plan, and needs cmap 12 format (with 32bit)
    var isPlan0Only = true;
    var i;
    // Check if we need to add cmap format 12 or if format 4 only is fine
    for(i = glyphs.length - 1; i > 0; i -= 1){
        var g = glyphs.get(i);
        if (g.unicode > 65535) {
            console.log("Adding CMAP format 12 (needed!)");
            isPlan0Only = false;
            break;
        }
    }
    var cmapTable = [
        {
            name: "version",
            type: "USHORT",
            value: 0
        },
        {
            name: "numTables",
            type: "USHORT",
            value: isPlan0Only ? 1 : 2
        },
        // CMAP 4 header
        {
            name: "platformID",
            type: "USHORT",
            value: 3
        },
        {
            name: "encodingID",
            type: "USHORT",
            value: 1
        },
        {
            name: "offset",
            type: "ULONG",
            value: isPlan0Only ? 12 : 20
        }
    ];
    if (!isPlan0Only) cmapTable = cmapTable.concat([
        // CMAP 12 header
        {
            name: "cmap12PlatformID",
            type: "USHORT",
            value: 3
        },
        {
            name: "cmap12EncodingID",
            type: "USHORT",
            value: 10
        },
        {
            name: "cmap12Offset",
            type: "ULONG",
            value: 0
        }
    ]);
    cmapTable = cmapTable.concat([
        // CMAP 4 Subtable
        {
            name: "format",
            type: "USHORT",
            value: 4
        },
        {
            name: "cmap4Length",
            type: "USHORT",
            value: 0
        },
        {
            name: "language",
            type: "USHORT",
            value: 0
        },
        {
            name: "segCountX2",
            type: "USHORT",
            value: 0
        },
        {
            name: "searchRange",
            type: "USHORT",
            value: 0
        },
        {
            name: "entrySelector",
            type: "USHORT",
            value: 0
        },
        {
            name: "rangeShift",
            type: "USHORT",
            value: 0
        }
    ]);
    var t = new table.Table("cmap", cmapTable);
    t.segments = [];
    for(i = 0; i < glyphs.length; i += 1){
        var glyph = glyphs.get(i);
        for(var j = 0; j < glyph.unicodes.length; j += 1)addSegment(t, glyph.unicodes[j], i);
        t.segments = t.segments.sort(function(a, b) {
            return a.start - b.start;
        });
    }
    addTerminatorSegment(t);
    var segCount = t.segments.length;
    var segCountToRemove = 0;
    // CMAP 4
    // Set up parallel segment arrays.
    var endCounts = [];
    var startCounts = [];
    var idDeltas = [];
    var idRangeOffsets = [];
    var glyphIds = [];
    // CMAP 12
    var cmap12Groups = [];
    // Reminder this loop is not following the specification at 100%
    // The specification -> find suites of characters and make a group
    // Here we're doing one group for each letter
    // Doing as the spec can save 8 times (or more) space
    for(i = 0; i < segCount; i += 1){
        var segment = t.segments[i];
        // CMAP 4
        if (segment.end <= 65535 && segment.start <= 65535) {
            endCounts = endCounts.concat({
                name: "end_" + i,
                type: "USHORT",
                value: segment.end
            });
            startCounts = startCounts.concat({
                name: "start_" + i,
                type: "USHORT",
                value: segment.start
            });
            idDeltas = idDeltas.concat({
                name: "idDelta_" + i,
                type: "SHORT",
                value: segment.delta
            });
            idRangeOffsets = idRangeOffsets.concat({
                name: "idRangeOffset_" + i,
                type: "USHORT",
                value: segment.offset
            });
            if (segment.glyphId !== undefined) glyphIds = glyphIds.concat({
                name: "glyph_" + i,
                type: "USHORT",
                value: segment.glyphId
            });
        } else // Skip Unicode > 65535 (16bit unsigned max) for CMAP 4, will be added in CMAP 12
        segCountToRemove += 1;
        // CMAP 12
        // Skip Terminator Segment
        if (!isPlan0Only && segment.glyphIndex !== undefined) {
            cmap12Groups = cmap12Groups.concat({
                name: "cmap12Start_" + i,
                type: "ULONG",
                value: segment.start
            });
            cmap12Groups = cmap12Groups.concat({
                name: "cmap12End_" + i,
                type: "ULONG",
                value: segment.end
            });
            cmap12Groups = cmap12Groups.concat({
                name: "cmap12Glyph_" + i,
                type: "ULONG",
                value: segment.glyphIndex
            });
        }
    }
    // CMAP 4 Subtable
    t.segCountX2 = (segCount - segCountToRemove) * 2;
    t.searchRange = Math.pow(2, Math.floor(Math.log(segCount - segCountToRemove) / Math.log(2))) * 2;
    t.entrySelector = Math.log(t.searchRange / 2) / Math.log(2);
    t.rangeShift = t.segCountX2 - t.searchRange;
    t.fields = t.fields.concat(endCounts);
    t.fields.push({
        name: "reservedPad",
        type: "USHORT",
        value: 0
    });
    t.fields = t.fields.concat(startCounts);
    t.fields = t.fields.concat(idDeltas);
    t.fields = t.fields.concat(idRangeOffsets);
    t.fields = t.fields.concat(glyphIds);
    t.cmap4Length = 14 + endCounts.length * 2 + 2 + startCounts.length * 2 + idDeltas.length * 2 + idRangeOffsets.length * 2 + glyphIds.length * 2;
    if (!isPlan0Only) {
        // CMAP 12 Subtable
        var cmap12Length = 16 + cmap12Groups.length * 4;
        t.cmap12Offset = 20 + t.cmap4Length;
        t.fields = t.fields.concat([
            {
                name: "cmap12Format",
                type: "USHORT",
                value: 12
            },
            {
                name: "cmap12Reserved",
                type: "USHORT",
                value: 0
            },
            {
                name: "cmap12Length",
                type: "ULONG",
                value: cmap12Length
            },
            {
                name: "cmap12Language",
                type: "ULONG",
                value: 0
            },
            {
                name: "cmap12nGroups",
                type: "ULONG",
                value: cmap12Groups.length / 3
            }
        ]);
        t.fields = t.fields.concat(cmap12Groups);
    }
    return t;
}
var cmap = {
    parse: parseCmapTable,
    make: makeCmapTable
};
// Glyph encoding
var cffStandardStrings = [
    ".notdef",
    "space",
    "exclam",
    "quotedbl",
    "numbersign",
    "dollar",
    "percent",
    "ampersand",
    "quoteright",
    "parenleft",
    "parenright",
    "asterisk",
    "plus",
    "comma",
    "hyphen",
    "period",
    "slash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "colon",
    "semicolon",
    "less",
    "equal",
    "greater",
    "question",
    "at",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "bracketleft",
    "backslash",
    "bracketright",
    "asciicircum",
    "underscore",
    "quoteleft",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "braceleft",
    "bar",
    "braceright",
    "asciitilde",
    "exclamdown",
    "cent",
    "sterling",
    "fraction",
    "yen",
    "florin",
    "section",
    "currency",
    "quotesingle",
    "quotedblleft",
    "guillemotleft",
    "guilsinglleft",
    "guilsinglright",
    "fi",
    "fl",
    "endash",
    "dagger",
    "daggerdbl",
    "periodcentered",
    "paragraph",
    "bullet",
    "quotesinglbase",
    "quotedblbase",
    "quotedblright",
    "guillemotright",
    "ellipsis",
    "perthousand",
    "questiondown",
    "grave",
    "acute",
    "circumflex",
    "tilde",
    "macron",
    "breve",
    "dotaccent",
    "dieresis",
    "ring",
    "cedilla",
    "hungarumlaut",
    "ogonek",
    "caron",
    "emdash",
    "AE",
    "ordfeminine",
    "Lslash",
    "Oslash",
    "OE",
    "ordmasculine",
    "ae",
    "dotlessi",
    "lslash",
    "oslash",
    "oe",
    "germandbls",
    "onesuperior",
    "logicalnot",
    "mu",
    "trademark",
    "Eth",
    "onehalf",
    "plusminus",
    "Thorn",
    "onequarter",
    "divide",
    "brokenbar",
    "degree",
    "thorn",
    "threequarters",
    "twosuperior",
    "registered",
    "minus",
    "eth",
    "multiply",
    "threesuperior",
    "copyright",
    "Aacute",
    "Acircumflex",
    "Adieresis",
    "Agrave",
    "Aring",
    "Atilde",
    "Ccedilla",
    "Eacute",
    "Ecircumflex",
    "Edieresis",
    "Egrave",
    "Iacute",
    "Icircumflex",
    "Idieresis",
    "Igrave",
    "Ntilde",
    "Oacute",
    "Ocircumflex",
    "Odieresis",
    "Ograve",
    "Otilde",
    "Scaron",
    "Uacute",
    "Ucircumflex",
    "Udieresis",
    "Ugrave",
    "Yacute",
    "Ydieresis",
    "Zcaron",
    "aacute",
    "acircumflex",
    "adieresis",
    "agrave",
    "aring",
    "atilde",
    "ccedilla",
    "eacute",
    "ecircumflex",
    "edieresis",
    "egrave",
    "iacute",
    "icircumflex",
    "idieresis",
    "igrave",
    "ntilde",
    "oacute",
    "ocircumflex",
    "odieresis",
    "ograve",
    "otilde",
    "scaron",
    "uacute",
    "ucircumflex",
    "udieresis",
    "ugrave",
    "yacute",
    "ydieresis",
    "zcaron",
    "exclamsmall",
    "Hungarumlautsmall",
    "dollaroldstyle",
    "dollarsuperior",
    "ampersandsmall",
    "Acutesmall",
    "parenleftsuperior",
    "parenrightsuperior",
    "266 ff",
    "onedotenleader",
    "zerooldstyle",
    "oneoldstyle",
    "twooldstyle",
    "threeoldstyle",
    "fouroldstyle",
    "fiveoldstyle",
    "sixoldstyle",
    "sevenoldstyle",
    "eightoldstyle",
    "nineoldstyle",
    "commasuperior",
    "threequartersemdash",
    "periodsuperior",
    "questionsmall",
    "asuperior",
    "bsuperior",
    "centsuperior",
    "dsuperior",
    "esuperior",
    "isuperior",
    "lsuperior",
    "msuperior",
    "nsuperior",
    "osuperior",
    "rsuperior",
    "ssuperior",
    "tsuperior",
    "ff",
    "ffi",
    "ffl",
    "parenleftinferior",
    "parenrightinferior",
    "Circumflexsmall",
    "hyphensuperior",
    "Gravesmall",
    "Asmall",
    "Bsmall",
    "Csmall",
    "Dsmall",
    "Esmall",
    "Fsmall",
    "Gsmall",
    "Hsmall",
    "Ismall",
    "Jsmall",
    "Ksmall",
    "Lsmall",
    "Msmall",
    "Nsmall",
    "Osmall",
    "Psmall",
    "Qsmall",
    "Rsmall",
    "Ssmall",
    "Tsmall",
    "Usmall",
    "Vsmall",
    "Wsmall",
    "Xsmall",
    "Ysmall",
    "Zsmall",
    "colonmonetary",
    "onefitted",
    "rupiah",
    "Tildesmall",
    "exclamdownsmall",
    "centoldstyle",
    "Lslashsmall",
    "Scaronsmall",
    "Zcaronsmall",
    "Dieresissmall",
    "Brevesmall",
    "Caronsmall",
    "Dotaccentsmall",
    "Macronsmall",
    "figuredash",
    "hypheninferior",
    "Ogoneksmall",
    "Ringsmall",
    "Cedillasmall",
    "questiondownsmall",
    "oneeighth",
    "threeeighths",
    "fiveeighths",
    "seveneighths",
    "onethird",
    "twothirds",
    "zerosuperior",
    "foursuperior",
    "fivesuperior",
    "sixsuperior",
    "sevensuperior",
    "eightsuperior",
    "ninesuperior",
    "zeroinferior",
    "oneinferior",
    "twoinferior",
    "threeinferior",
    "fourinferior",
    "fiveinferior",
    "sixinferior",
    "seveninferior",
    "eightinferior",
    "nineinferior",
    "centinferior",
    "dollarinferior",
    "periodinferior",
    "commainferior",
    "Agravesmall",
    "Aacutesmall",
    "Acircumflexsmall",
    "Atildesmall",
    "Adieresissmall",
    "Aringsmall",
    "AEsmall",
    "Ccedillasmall",
    "Egravesmall",
    "Eacutesmall",
    "Ecircumflexsmall",
    "Edieresissmall",
    "Igravesmall",
    "Iacutesmall",
    "Icircumflexsmall",
    "Idieresissmall",
    "Ethsmall",
    "Ntildesmall",
    "Ogravesmall",
    "Oacutesmall",
    "Ocircumflexsmall",
    "Otildesmall",
    "Odieresissmall",
    "OEsmall",
    "Oslashsmall",
    "Ugravesmall",
    "Uacutesmall",
    "Ucircumflexsmall",
    "Udieresissmall",
    "Yacutesmall",
    "Thornsmall",
    "Ydieresissmall",
    "001.000",
    "001.001",
    "001.002",
    "001.003",
    "Black",
    "Bold",
    "Book",
    "Light",
    "Medium",
    "Regular",
    "Roman",
    "Semibold"
];
var cffStandardEncoding = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "space",
    "exclam",
    "quotedbl",
    "numbersign",
    "dollar",
    "percent",
    "ampersand",
    "quoteright",
    "parenleft",
    "parenright",
    "asterisk",
    "plus",
    "comma",
    "hyphen",
    "period",
    "slash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "colon",
    "semicolon",
    "less",
    "equal",
    "greater",
    "question",
    "at",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "bracketleft",
    "backslash",
    "bracketright",
    "asciicircum",
    "underscore",
    "quoteleft",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "braceleft",
    "bar",
    "braceright",
    "asciitilde",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "exclamdown",
    "cent",
    "sterling",
    "fraction",
    "yen",
    "florin",
    "section",
    "currency",
    "quotesingle",
    "quotedblleft",
    "guillemotleft",
    "guilsinglleft",
    "guilsinglright",
    "fi",
    "fl",
    "",
    "endash",
    "dagger",
    "daggerdbl",
    "periodcentered",
    "",
    "paragraph",
    "bullet",
    "quotesinglbase",
    "quotedblbase",
    "quotedblright",
    "guillemotright",
    "ellipsis",
    "perthousand",
    "",
    "questiondown",
    "",
    "grave",
    "acute",
    "circumflex",
    "tilde",
    "macron",
    "breve",
    "dotaccent",
    "dieresis",
    "",
    "ring",
    "cedilla",
    "",
    "hungarumlaut",
    "ogonek",
    "caron",
    "emdash",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "AE",
    "",
    "ordfeminine",
    "",
    "",
    "",
    "",
    "Lslash",
    "Oslash",
    "OE",
    "ordmasculine",
    "",
    "",
    "",
    "",
    "",
    "ae",
    "",
    "",
    "",
    "dotlessi",
    "",
    "",
    "lslash",
    "oslash",
    "oe",
    "germandbls"
];
var cffExpertEncoding = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "space",
    "exclamsmall",
    "Hungarumlautsmall",
    "",
    "dollaroldstyle",
    "dollarsuperior",
    "ampersandsmall",
    "Acutesmall",
    "parenleftsuperior",
    "parenrightsuperior",
    "twodotenleader",
    "onedotenleader",
    "comma",
    "hyphen",
    "period",
    "fraction",
    "zerooldstyle",
    "oneoldstyle",
    "twooldstyle",
    "threeoldstyle",
    "fouroldstyle",
    "fiveoldstyle",
    "sixoldstyle",
    "sevenoldstyle",
    "eightoldstyle",
    "nineoldstyle",
    "colon",
    "semicolon",
    "commasuperior",
    "threequartersemdash",
    "periodsuperior",
    "questionsmall",
    "",
    "asuperior",
    "bsuperior",
    "centsuperior",
    "dsuperior",
    "esuperior",
    "",
    "",
    "isuperior",
    "",
    "",
    "lsuperior",
    "msuperior",
    "nsuperior",
    "osuperior",
    "",
    "",
    "rsuperior",
    "ssuperior",
    "tsuperior",
    "",
    "ff",
    "fi",
    "fl",
    "ffi",
    "ffl",
    "parenleftinferior",
    "",
    "parenrightinferior",
    "Circumflexsmall",
    "hyphensuperior",
    "Gravesmall",
    "Asmall",
    "Bsmall",
    "Csmall",
    "Dsmall",
    "Esmall",
    "Fsmall",
    "Gsmall",
    "Hsmall",
    "Ismall",
    "Jsmall",
    "Ksmall",
    "Lsmall",
    "Msmall",
    "Nsmall",
    "Osmall",
    "Psmall",
    "Qsmall",
    "Rsmall",
    "Ssmall",
    "Tsmall",
    "Usmall",
    "Vsmall",
    "Wsmall",
    "Xsmall",
    "Ysmall",
    "Zsmall",
    "colonmonetary",
    "onefitted",
    "rupiah",
    "Tildesmall",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "exclamdownsmall",
    "centoldstyle",
    "Lslashsmall",
    "",
    "",
    "Scaronsmall",
    "Zcaronsmall",
    "Dieresissmall",
    "Brevesmall",
    "Caronsmall",
    "",
    "Dotaccentsmall",
    "",
    "",
    "Macronsmall",
    "",
    "",
    "figuredash",
    "hypheninferior",
    "",
    "",
    "Ogoneksmall",
    "Ringsmall",
    "Cedillasmall",
    "",
    "",
    "",
    "onequarter",
    "onehalf",
    "threequarters",
    "questiondownsmall",
    "oneeighth",
    "threeeighths",
    "fiveeighths",
    "seveneighths",
    "onethird",
    "twothirds",
    "",
    "",
    "zerosuperior",
    "onesuperior",
    "twosuperior",
    "threesuperior",
    "foursuperior",
    "fivesuperior",
    "sixsuperior",
    "sevensuperior",
    "eightsuperior",
    "ninesuperior",
    "zeroinferior",
    "oneinferior",
    "twoinferior",
    "threeinferior",
    "fourinferior",
    "fiveinferior",
    "sixinferior",
    "seveninferior",
    "eightinferior",
    "nineinferior",
    "centinferior",
    "dollarinferior",
    "periodinferior",
    "commainferior",
    "Agravesmall",
    "Aacutesmall",
    "Acircumflexsmall",
    "Atildesmall",
    "Adieresissmall",
    "Aringsmall",
    "AEsmall",
    "Ccedillasmall",
    "Egravesmall",
    "Eacutesmall",
    "Ecircumflexsmall",
    "Edieresissmall",
    "Igravesmall",
    "Iacutesmall",
    "Icircumflexsmall",
    "Idieresissmall",
    "Ethsmall",
    "Ntildesmall",
    "Ogravesmall",
    "Oacutesmall",
    "Ocircumflexsmall",
    "Otildesmall",
    "Odieresissmall",
    "OEsmall",
    "Oslashsmall",
    "Ugravesmall",
    "Uacutesmall",
    "Ucircumflexsmall",
    "Udieresissmall",
    "Yacutesmall",
    "Thornsmall",
    "Ydieresissmall"
];
var standardNames = [
    ".notdef",
    ".null",
    "nonmarkingreturn",
    "space",
    "exclam",
    "quotedbl",
    "numbersign",
    "dollar",
    "percent",
    "ampersand",
    "quotesingle",
    "parenleft",
    "parenright",
    "asterisk",
    "plus",
    "comma",
    "hyphen",
    "period",
    "slash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "colon",
    "semicolon",
    "less",
    "equal",
    "greater",
    "question",
    "at",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "bracketleft",
    "backslash",
    "bracketright",
    "asciicircum",
    "underscore",
    "grave",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "braceleft",
    "bar",
    "braceright",
    "asciitilde",
    "Adieresis",
    "Aring",
    "Ccedilla",
    "Eacute",
    "Ntilde",
    "Odieresis",
    "Udieresis",
    "aacute",
    "agrave",
    "acircumflex",
    "adieresis",
    "atilde",
    "aring",
    "ccedilla",
    "eacute",
    "egrave",
    "ecircumflex",
    "edieresis",
    "iacute",
    "igrave",
    "icircumflex",
    "idieresis",
    "ntilde",
    "oacute",
    "ograve",
    "ocircumflex",
    "odieresis",
    "otilde",
    "uacute",
    "ugrave",
    "ucircumflex",
    "udieresis",
    "dagger",
    "degree",
    "cent",
    "sterling",
    "section",
    "bullet",
    "paragraph",
    "germandbls",
    "registered",
    "copyright",
    "trademark",
    "acute",
    "dieresis",
    "notequal",
    "AE",
    "Oslash",
    "infinity",
    "plusminus",
    "lessequal",
    "greaterequal",
    "yen",
    "mu",
    "partialdiff",
    "summation",
    "product",
    "pi",
    "integral",
    "ordfeminine",
    "ordmasculine",
    "Omega",
    "ae",
    "oslash",
    "questiondown",
    "exclamdown",
    "logicalnot",
    "radical",
    "florin",
    "approxequal",
    "Delta",
    "guillemotleft",
    "guillemotright",
    "ellipsis",
    "nonbreakingspace",
    "Agrave",
    "Atilde",
    "Otilde",
    "OE",
    "oe",
    "endash",
    "emdash",
    "quotedblleft",
    "quotedblright",
    "quoteleft",
    "quoteright",
    "divide",
    "lozenge",
    "ydieresis",
    "Ydieresis",
    "fraction",
    "currency",
    "guilsinglleft",
    "guilsinglright",
    "fi",
    "fl",
    "daggerdbl",
    "periodcentered",
    "quotesinglbase",
    "quotedblbase",
    "perthousand",
    "Acircumflex",
    "Ecircumflex",
    "Aacute",
    "Edieresis",
    "Egrave",
    "Iacute",
    "Icircumflex",
    "Idieresis",
    "Igrave",
    "Oacute",
    "Ocircumflex",
    "apple",
    "Ograve",
    "Uacute",
    "Ucircumflex",
    "Ugrave",
    "dotlessi",
    "circumflex",
    "tilde",
    "macron",
    "breve",
    "dotaccent",
    "ring",
    "cedilla",
    "hungarumlaut",
    "ogonek",
    "caron",
    "Lslash",
    "lslash",
    "Scaron",
    "scaron",
    "Zcaron",
    "zcaron",
    "brokenbar",
    "Eth",
    "eth",
    "Yacute",
    "yacute",
    "Thorn",
    "thorn",
    "minus",
    "multiply",
    "onesuperior",
    "twosuperior",
    "threesuperior",
    "onehalf",
    "onequarter",
    "threequarters",
    "franc",
    "Gbreve",
    "gbreve",
    "Idotaccent",
    "Scedilla",
    "scedilla",
    "Cacute",
    "cacute",
    "Ccaron",
    "ccaron",
    "dcroat"
];
/**
 * This is the encoding used for fonts created from scratch.
 * It loops through all glyphs and finds the appropriate unicode value.
 * Since it's linear time, other encodings will be faster.
 * @exports opentype.DefaultEncoding
 * @class
 * @constructor
 * @param {opentype.Font}
 */ function DefaultEncoding(font) {
    this.font = font;
}
DefaultEncoding.prototype.charToGlyphIndex = function(c) {
    var code = c.codePointAt(0);
    var glyphs = this.font.glyphs;
    if (glyphs) for(var i = 0; i < glyphs.length; i += 1){
        var glyph = glyphs.get(i);
        for(var j = 0; j < glyph.unicodes.length; j += 1){
            if (glyph.unicodes[j] === code) return i;
        }
    }
    return null;
};
/**
 * @exports opentype.CmapEncoding
 * @class
 * @constructor
 * @param {Object} cmap - a object with the cmap encoded data
 */ function CmapEncoding(cmap) {
    this.cmap = cmap;
}
/**
 * @param  {string} c - the character
 * @return {number} The glyph index.
 */ CmapEncoding.prototype.charToGlyphIndex = function(c) {
    return this.cmap.glyphIndexMap[c.codePointAt(0)] || 0;
};
/**
 * @exports opentype.CffEncoding
 * @class
 * @constructor
 * @param {string} encoding - The encoding
 * @param {Array} charset - The character set.
 */ function CffEncoding(encoding, charset) {
    this.encoding = encoding;
    this.charset = charset;
}
/**
 * @param  {string} s - The character
 * @return {number} The index.
 */ CffEncoding.prototype.charToGlyphIndex = function(s) {
    var code = s.codePointAt(0);
    var charName = this.encoding[code];
    return this.charset.indexOf(charName);
};
/**
 * @exports opentype.GlyphNames
 * @class
 * @constructor
 * @param {Object} post
 */ function GlyphNames(post) {
    switch(post.version){
        case 1:
            this.names = standardNames.slice();
            break;
        case 2:
            this.names = new Array(post.numberOfGlyphs);
            for(var i = 0; i < post.numberOfGlyphs; i++)if (post.glyphNameIndex[i] < standardNames.length) this.names[i] = standardNames[post.glyphNameIndex[i]];
            else this.names[i] = post.names[post.glyphNameIndex[i] - standardNames.length];
            break;
        case 2.5:
            this.names = new Array(post.numberOfGlyphs);
            for(var i$1 = 0; i$1 < post.numberOfGlyphs; i$1++)this.names[i$1] = standardNames[i$1 + post.glyphNameIndex[i$1]];
            break;
        case 3:
            this.names = [];
            break;
        default:
            this.names = [];
            break;
    }
}
/**
 * Gets the index of a glyph by name.
 * @param  {string} name - The glyph name
 * @return {number} The index
 */ GlyphNames.prototype.nameToGlyphIndex = function(name) {
    return this.names.indexOf(name);
};
/**
 * @param  {number} gid
 * @return {string}
 */ GlyphNames.prototype.glyphIndexToName = function(gid) {
    return this.names[gid];
};
function addGlyphNamesAll(font) {
    var glyph;
    var glyphIndexMap = font.tables.cmap.glyphIndexMap;
    var charCodes = Object.keys(glyphIndexMap);
    for(var i = 0; i < charCodes.length; i += 1){
        var c = charCodes[i];
        var glyphIndex = glyphIndexMap[c];
        glyph = font.glyphs.get(glyphIndex);
        glyph.addUnicode(parseInt(c));
    }
    for(var i$1 = 0; i$1 < font.glyphs.length; i$1 += 1){
        glyph = font.glyphs.get(i$1);
        if (font.cffEncoding) {
            if (font.isCIDFont) glyph.name = "gid" + i$1;
            else glyph.name = font.cffEncoding.charset[i$1];
        } else if (font.glyphNames.names) glyph.name = font.glyphNames.glyphIndexToName(i$1);
    }
}
function addGlyphNamesToUnicodeMap(font) {
    font._IndexToUnicodeMap = {};
    var glyphIndexMap = font.tables.cmap.glyphIndexMap;
    var charCodes = Object.keys(glyphIndexMap);
    for(var i = 0; i < charCodes.length; i += 1){
        var c = charCodes[i];
        var glyphIndex = glyphIndexMap[c];
        if (font._IndexToUnicodeMap[glyphIndex] === undefined) font._IndexToUnicodeMap[glyphIndex] = {
            unicodes: [
                parseInt(c)
            ]
        };
        else font._IndexToUnicodeMap[glyphIndex].unicodes.push(parseInt(c));
    }
}
/**
 * @alias opentype.addGlyphNames
 * @param {opentype.Font}
 * @param {Object}
 */ function addGlyphNames(font, opt) {
    if (opt.lowMemory) addGlyphNamesToUnicodeMap(font);
    else addGlyphNamesAll(font);
}
// Drawing utility functions.
// Draw a line on the given context from point `x1,y1` to point `x2,y2`.
function line(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
var draw = {
    line: line
};
// The Glyph object
// import glyf from './tables/glyf' Can't be imported here, because it's a circular dependency
function getPathDefinition(glyph, path) {
    var _path = path || new Path();
    return {
        configurable: true,
        get: function() {
            if (typeof _path === "function") _path = _path();
            return _path;
        },
        set: function(p) {
            _path = p;
        }
    };
}
/**
 * @typedef GlyphOptions
 * @type Object
 * @property {string} [name] - The glyph name
 * @property {number} [unicode]
 * @property {Array} [unicodes]
 * @property {number} [xMin]
 * @property {number} [yMin]
 * @property {number} [xMax]
 * @property {number} [yMax]
 * @property {number} [advanceWidth]
 */ // A Glyph is an individual mark that often corresponds to a character.
// Some glyphs, such as ligatures, are a combination of many characters.
// Glyphs are the basic building blocks of a font.
//
// The `Glyph` class contains utility methods for drawing the path and its points.
/**
 * @exports opentype.Glyph
 * @class
 * @param {GlyphOptions}
 * @constructor
 */ function Glyph(options) {
    // By putting all the code on a prototype function (which is only declared once)
    // we reduce the memory requirements for larger fonts by some 2%
    this.bindConstructorValues(options);
}
/**
 * @param  {GlyphOptions}
 */ Glyph.prototype.bindConstructorValues = function(options) {
    this.index = options.index || 0;
    // These three values cannot be deferred for memory optimization:
    this.name = options.name || null;
    this.unicode = options.unicode || undefined;
    this.unicodes = options.unicodes || options.unicode !== undefined ? [
        options.unicode
    ] : [];
    // But by binding these values only when necessary, we reduce can
    // the memory requirements by almost 3% for larger fonts.
    if ("xMin" in options) this.xMin = options.xMin;
    if ("yMin" in options) this.yMin = options.yMin;
    if ("xMax" in options) this.xMax = options.xMax;
    if ("yMax" in options) this.yMax = options.yMax;
    if ("advanceWidth" in options) this.advanceWidth = options.advanceWidth;
    // The path for a glyph is the most memory intensive, and is bound as a value
    // with a getter/setter to ensure we actually do path parsing only once the
    // path is actually needed by anything.
    Object.defineProperty(this, "path", getPathDefinition(this, options.path));
};
/**
 * @param {number}
 */ Glyph.prototype.addUnicode = function(unicode) {
    if (this.unicodes.length === 0) this.unicode = unicode;
    this.unicodes.push(unicode);
};
/**
 * Calculate the minimum bounding box for this glyph.
 * @return {opentype.BoundingBox}
 */ Glyph.prototype.getBoundingBox = function() {
    return this.path.getBoundingBox();
};
/**
 * Convert the glyph to a Path we can draw on a drawing context.
 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
 * @param  {Object=} options - xScale, yScale to stretch the glyph.
 * @param  {opentype.Font} if hinting is to be used, the font
 * @return {opentype.Path}
 */ Glyph.prototype.getPath = function(x, y, fontSize, options, font) {
    x = x !== undefined ? x : 0;
    y = y !== undefined ? y : 0;
    fontSize = fontSize !== undefined ? fontSize : 72;
    var commands;
    var hPoints;
    if (!options) options = {};
    var xScale = options.xScale;
    var yScale = options.yScale;
    if (options.hinting && font && font.hinting) // in case of hinting, the hinting engine takes care
    // of scaling the points (not the path) before hinting.
    hPoints = this.path && font.hinting.exec(this, fontSize);
    if (hPoints) {
        // Call font.hinting.getCommands instead of `glyf.getPath(hPoints).commands` to avoid a circular dependency
        commands = font.hinting.getCommands(hPoints);
        x = Math.round(x);
        y = Math.round(y);
        // TODO in case of hinting xyScaling is not yet supported
        xScale = yScale = 1;
    } else {
        commands = this.path.commands;
        var scale = 1 / (this.path.unitsPerEm || 1000) * fontSize;
        if (xScale === undefined) xScale = scale;
        if (yScale === undefined) yScale = scale;
    }
    var p = new Path();
    for(var i = 0; i < commands.length; i += 1){
        var cmd = commands[i];
        if (cmd.type === "M") p.moveTo(x + cmd.x * xScale, y + -cmd.y * yScale);
        else if (cmd.type === "L") p.lineTo(x + cmd.x * xScale, y + -cmd.y * yScale);
        else if (cmd.type === "Q") p.quadraticCurveTo(x + cmd.x1 * xScale, y + -cmd.y1 * yScale, x + cmd.x * xScale, y + -cmd.y * yScale);
        else if (cmd.type === "C") p.curveTo(x + cmd.x1 * xScale, y + -cmd.y1 * yScale, x + cmd.x2 * xScale, y + -cmd.y2 * yScale, x + cmd.x * xScale, y + -cmd.y * yScale);
        else if (cmd.type === "Z") p.closePath();
    }
    return p;
};
/**
 * Split the glyph into contours.
 * This function is here for backwards compatibility, and to
 * provide raw access to the TrueType glyph outlines.
 * @return {Array}
 */ Glyph.prototype.getContours = function() {
    if (this.points === undefined) return [];
    var contours = [];
    var currentContour = [];
    for(var i = 0; i < this.points.length; i += 1){
        var pt = this.points[i];
        currentContour.push(pt);
        if (pt.lastPointOfContour) {
            contours.push(currentContour);
            currentContour = [];
        }
    }
    check.argument(currentContour.length === 0, "There are still points left in the current contour.");
    return contours;
};
/**
 * Calculate the xMin/yMin/xMax/yMax/lsb/rsb for a Glyph.
 * @return {Object}
 */ Glyph.prototype.getMetrics = function() {
    var commands = this.path.commands;
    var xCoords = [];
    var yCoords = [];
    for(var i = 0; i < commands.length; i += 1){
        var cmd = commands[i];
        if (cmd.type !== "Z") {
            xCoords.push(cmd.x);
            yCoords.push(cmd.y);
        }
        if (cmd.type === "Q" || cmd.type === "C") {
            xCoords.push(cmd.x1);
            yCoords.push(cmd.y1);
        }
        if (cmd.type === "C") {
            xCoords.push(cmd.x2);
            yCoords.push(cmd.y2);
        }
    }
    var metrics = {
        xMin: Math.min.apply(null, xCoords),
        yMin: Math.min.apply(null, yCoords),
        xMax: Math.max.apply(null, xCoords),
        yMax: Math.max.apply(null, yCoords),
        leftSideBearing: this.leftSideBearing
    };
    if (!isFinite(metrics.xMin)) metrics.xMin = 0;
    if (!isFinite(metrics.xMax)) metrics.xMax = this.advanceWidth;
    if (!isFinite(metrics.yMin)) metrics.yMin = 0;
    if (!isFinite(metrics.yMax)) metrics.yMax = 0;
    metrics.rightSideBearing = this.advanceWidth - metrics.leftSideBearing - (metrics.xMax - metrics.xMin);
    return metrics;
};
/**
 * Draw the glyph on the given context.
 * @param  {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
 * @param  {Object=} options - xScale, yScale to stretch the glyph.
 */ Glyph.prototype.draw = function(ctx, x, y, fontSize, options) {
    this.getPath(x, y, fontSize, options).draw(ctx);
};
/**
 * Draw the points of the glyph.
 * On-curve points will be drawn in blue, off-curve points will be drawn in red.
 * @param  {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
 */ Glyph.prototype.drawPoints = function(ctx, x, y, fontSize) {
    function drawCircles(l, x, y, scale) {
        ctx.beginPath();
        for(var j = 0; j < l.length; j += 1){
            ctx.moveTo(x + l[j].x * scale, y + l[j].y * scale);
            ctx.arc(x + l[j].x * scale, y + l[j].y * scale, 2, 0, Math.PI * 2, false);
        }
        ctx.closePath();
        ctx.fill();
    }
    x = x !== undefined ? x : 0;
    y = y !== undefined ? y : 0;
    fontSize = fontSize !== undefined ? fontSize : 24;
    var scale = 1 / this.path.unitsPerEm * fontSize;
    var blueCircles = [];
    var redCircles = [];
    var path = this.path;
    for(var i = 0; i < path.commands.length; i += 1){
        var cmd = path.commands[i];
        if (cmd.x !== undefined) blueCircles.push({
            x: cmd.x,
            y: -cmd.y
        });
        if (cmd.x1 !== undefined) redCircles.push({
            x: cmd.x1,
            y: -cmd.y1
        });
        if (cmd.x2 !== undefined) redCircles.push({
            x: cmd.x2,
            y: -cmd.y2
        });
    }
    ctx.fillStyle = "blue";
    drawCircles(blueCircles, x, y, scale);
    ctx.fillStyle = "red";
    drawCircles(redCircles, x, y, scale);
};
/**
 * Draw lines indicating important font measurements.
 * Black lines indicate the origin of the coordinate system (point 0,0).
 * Blue lines indicate the glyph bounding box.
 * Green line indicates the advance width of the glyph.
 * @param  {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
 */ Glyph.prototype.drawMetrics = function(ctx, x, y, fontSize) {
    var scale;
    x = x !== undefined ? x : 0;
    y = y !== undefined ? y : 0;
    fontSize = fontSize !== undefined ? fontSize : 24;
    scale = 1 / this.path.unitsPerEm * fontSize;
    ctx.lineWidth = 1;
    // Draw the origin
    ctx.strokeStyle = "black";
    draw.line(ctx, x, -10000, x, 10000);
    draw.line(ctx, -10000, y, 10000, y);
    // This code is here due to memory optimization: by not using
    // defaults in the constructor, we save a notable amount of memory.
    var xMin = this.xMin || 0;
    var yMin = this.yMin || 0;
    var xMax = this.xMax || 0;
    var yMax = this.yMax || 0;
    var advanceWidth = this.advanceWidth || 0;
    // Draw the glyph box
    ctx.strokeStyle = "blue";
    draw.line(ctx, x + xMin * scale, -10000, x + xMin * scale, 10000);
    draw.line(ctx, x + xMax * scale, -10000, x + xMax * scale, 10000);
    draw.line(ctx, -10000, y + -yMin * scale, 10000, y + -yMin * scale);
    draw.line(ctx, -10000, y + -yMax * scale, 10000, y + -yMax * scale);
    // Draw the advance width
    ctx.strokeStyle = "green";
    draw.line(ctx, x + advanceWidth * scale, -10000, x + advanceWidth * scale, 10000);
};
// The GlyphSet object
// Define a property on the glyph that depends on the path being loaded.
function defineDependentProperty(glyph, externalName, internalName) {
    Object.defineProperty(glyph, externalName, {
        get: function() {
            // Request the path property to make sure the path is loaded.
            glyph.path; // jshint ignore:line
            return glyph[internalName];
        },
        set: function(newValue) {
            glyph[internalName] = newValue;
        },
        enumerable: true,
        configurable: true
    });
}
/**
 * A GlyphSet represents all glyphs available in the font, but modelled using
 * a deferred glyph loader, for retrieving glyphs only once they are absolutely
 * necessary, to keep the memory footprint down.
 * @exports opentype.GlyphSet
 * @class
 * @param {opentype.Font}
 * @param {Array}
 */ function GlyphSet(font, glyphs) {
    this.font = font;
    this.glyphs = {};
    if (Array.isArray(glyphs)) for(var i = 0; i < glyphs.length; i++){
        var glyph = glyphs[i];
        glyph.path.unitsPerEm = font.unitsPerEm;
        this.glyphs[i] = glyph;
    }
    this.length = glyphs && glyphs.length || 0;
}
/**
 * @param  {number} index
 * @return {opentype.Glyph}
 */ GlyphSet.prototype.get = function(index) {
    // this.glyphs[index] is 'undefined' when low memory mode is on. glyph is pushed on request only.
    if (this.glyphs[index] === undefined) {
        this.font._push(index);
        if (typeof this.glyphs[index] === "function") this.glyphs[index] = this.glyphs[index]();
        var glyph = this.glyphs[index];
        var unicodeObj = this.font._IndexToUnicodeMap[index];
        if (unicodeObj) for(var j = 0; j < unicodeObj.unicodes.length; j++)glyph.addUnicode(unicodeObj.unicodes[j]);
        if (this.font.cffEncoding) {
            if (this.font.isCIDFont) glyph.name = "gid" + index;
            else glyph.name = this.font.cffEncoding.charset[index];
        } else if (this.font.glyphNames.names) glyph.name = this.font.glyphNames.glyphIndexToName(index);
        this.glyphs[index].advanceWidth = this.font._hmtxTableData[index].advanceWidth;
        this.glyphs[index].leftSideBearing = this.font._hmtxTableData[index].leftSideBearing;
    } else if (typeof this.glyphs[index] === "function") this.glyphs[index] = this.glyphs[index]();
    return this.glyphs[index];
};
/**
 * @param  {number} index
 * @param  {Object}
 */ GlyphSet.prototype.push = function(index, loader) {
    this.glyphs[index] = loader;
    this.length++;
};
/**
 * @alias opentype.glyphLoader
 * @param  {opentype.Font} font
 * @param  {number} index
 * @return {opentype.Glyph}
 */ function glyphLoader(font, index) {
    return new Glyph({
        index: index,
        font: font
    });
}
/**
 * Generate a stub glyph that can be filled with all metadata *except*
 * the "points" and "path" properties, which must be loaded only once
 * the glyph's path is actually requested for text shaping.
 * @alias opentype.ttfGlyphLoader
 * @param  {opentype.Font} font
 * @param  {number} index
 * @param  {Function} parseGlyph
 * @param  {Object} data
 * @param  {number} position
 * @param  {Function} buildPath
 * @return {opentype.Glyph}
 */ function ttfGlyphLoader(font, index, parseGlyph, data, position, buildPath) {
    return function() {
        var glyph = new Glyph({
            index: index,
            font: font
        });
        glyph.path = function() {
            parseGlyph(glyph, data, position);
            var path = buildPath(font.glyphs, glyph);
            path.unitsPerEm = font.unitsPerEm;
            return path;
        };
        defineDependentProperty(glyph, "xMin", "_xMin");
        defineDependentProperty(glyph, "xMax", "_xMax");
        defineDependentProperty(glyph, "yMin", "_yMin");
        defineDependentProperty(glyph, "yMax", "_yMax");
        return glyph;
    };
}
/**
 * @alias opentype.cffGlyphLoader
 * @param  {opentype.Font} font
 * @param  {number} index
 * @param  {Function} parseCFFCharstring
 * @param  {string} charstring
 * @return {opentype.Glyph}
 */ function cffGlyphLoader(font, index, parseCFFCharstring, charstring) {
    return function() {
        var glyph = new Glyph({
            index: index,
            font: font
        });
        glyph.path = function() {
            var path = parseCFFCharstring(font, glyph, charstring);
            path.unitsPerEm = font.unitsPerEm;
            return path;
        };
        return glyph;
    };
}
var glyphset = {
    GlyphSet: GlyphSet,
    glyphLoader: glyphLoader,
    ttfGlyphLoader: ttfGlyphLoader,
    cffGlyphLoader: cffGlyphLoader
};
// The `CFF` table contains the glyph outlines in PostScript format.
// Custom equals function that can also check lists.
function equals(a, b) {
    if (a === b) return true;
    else if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        for(var i = 0; i < a.length; i += 1){
            if (!equals(a[i], b[i])) return false;
        }
        return true;
    } else return false;
}
// Subroutines are encoded using the negative half of the number space.
// See type 2 chapter 4.7 "Subroutine operators".
function calcCFFSubroutineBias(subrs) {
    var bias;
    if (subrs.length < 1240) bias = 107;
    else if (subrs.length < 33900) bias = 1131;
    else bias = 32768;
    return bias;
}
// Parse a `CFF` INDEX array.
// An index array consists of a list of offsets, then a list of objects at those offsets.
function parseCFFIndex(data, start, conversionFn) {
    var offsets = [];
    var objects = [];
    var count = parse.getCard16(data, start);
    var objectOffset;
    var endOffset;
    if (count !== 0) {
        var offsetSize = parse.getByte(data, start + 2);
        objectOffset = start + (count + 1) * offsetSize + 2;
        var pos = start + 3;
        for(var i = 0; i < count + 1; i += 1){
            offsets.push(parse.getOffset(data, pos, offsetSize));
            pos += offsetSize;
        }
        // The total size of the index array is 4 header bytes + the value of the last offset.
        endOffset = objectOffset + offsets[count];
    } else endOffset = start + 2;
    for(var i$1 = 0; i$1 < offsets.length - 1; i$1 += 1){
        var value = parse.getBytes(data, objectOffset + offsets[i$1], objectOffset + offsets[i$1 + 1]);
        if (conversionFn) value = conversionFn(value);
        objects.push(value);
    }
    return {
        objects: objects,
        startOffset: start,
        endOffset: endOffset
    };
}
function parseCFFIndexLowMemory(data, start) {
    var offsets = [];
    var count = parse.getCard16(data, start);
    var objectOffset;
    var endOffset;
    if (count !== 0) {
        var offsetSize = parse.getByte(data, start + 2);
        objectOffset = start + (count + 1) * offsetSize + 2;
        var pos = start + 3;
        for(var i = 0; i < count + 1; i += 1){
            offsets.push(parse.getOffset(data, pos, offsetSize));
            pos += offsetSize;
        }
        // The total size of the index array is 4 header bytes + the value of the last offset.
        endOffset = objectOffset + offsets[count];
    } else endOffset = start + 2;
    return {
        offsets: offsets,
        startOffset: start,
        endOffset: endOffset
    };
}
function getCffIndexObject(i, offsets, data, start, conversionFn) {
    var count = parse.getCard16(data, start);
    var objectOffset = 0;
    if (count !== 0) {
        var offsetSize = parse.getByte(data, start + 2);
        objectOffset = start + (count + 1) * offsetSize + 2;
    }
    var value = parse.getBytes(data, objectOffset + offsets[i], objectOffset + offsets[i + 1]);
    if (conversionFn) value = conversionFn(value);
    return value;
}
// Parse a `CFF` DICT real value.
function parseFloatOperand(parser) {
    var s = "";
    var eof = 15;
    var lookup = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ".",
        "E",
        "E-",
        null,
        "-"
    ];
    while(true){
        var b = parser.parseByte();
        var n1 = b >> 4;
        var n2 = b & 15;
        if (n1 === eof) break;
        s += lookup[n1];
        if (n2 === eof) break;
        s += lookup[n2];
    }
    return parseFloat(s);
}
// Parse a `CFF` DICT operand.
function parseOperand(parser, b0) {
    var b1;
    var b2;
    var b3;
    var b4;
    if (b0 === 28) {
        b1 = parser.parseByte();
        b2 = parser.parseByte();
        return b1 << 8 | b2;
    }
    if (b0 === 29) {
        b1 = parser.parseByte();
        b2 = parser.parseByte();
        b3 = parser.parseByte();
        b4 = parser.parseByte();
        return b1 << 24 | b2 << 16 | b3 << 8 | b4;
    }
    if (b0 === 30) return parseFloatOperand(parser);
    if (b0 >= 32 && b0 <= 246) return b0 - 139;
    if (b0 >= 247 && b0 <= 250) {
        b1 = parser.parseByte();
        return (b0 - 247) * 256 + b1 + 108;
    }
    if (b0 >= 251 && b0 <= 254) {
        b1 = parser.parseByte();
        return -(b0 - 251) * 256 - b1 - 108;
    }
    throw new Error("Invalid b0 " + b0);
}
// Convert the entries returned by `parseDict` to a proper dictionary.
// If a value is a list of one, it is unpacked.
function entriesToObject(entries) {
    var o = {};
    for(var i = 0; i < entries.length; i += 1){
        var key = entries[i][0];
        var values = entries[i][1];
        var value = void 0;
        if (values.length === 1) value = values[0];
        else value = values;
        if (o.hasOwnProperty(key) && !isNaN(o[key])) throw new Error("Object " + o + " already has key " + key);
        o[key] = value;
    }
    return o;
}
// Parse a `CFF` DICT object.
// A dictionary contains key-value pairs in a compact tokenized format.
function parseCFFDict(data, start, size) {
    start = start !== undefined ? start : 0;
    var parser = new parse.Parser(data, start);
    var entries = [];
    var operands = [];
    size = size !== undefined ? size : data.length;
    while(parser.relativeOffset < size){
        var op = parser.parseByte();
        // The first byte for each dict item distinguishes between operator (key) and operand (value).
        // Values <= 21 are operators.
        if (op <= 21) {
            // Two-byte operators have an initial escape byte of 12.
            if (op === 12) op = 1200 + parser.parseByte();
            entries.push([
                op,
                operands
            ]);
            operands = [];
        } else // Since the operands (values) come before the operators (keys), we store all operands in a list
        // until we encounter an operator.
        operands.push(parseOperand(parser, op));
    }
    return entriesToObject(entries);
}
// Given a String Index (SID), return the value of the string.
// Strings below index 392 are standard CFF strings and are not encoded in the font.
function getCFFString(strings, index) {
    if (index <= 390) index = cffStandardStrings[index];
    else index = strings[index - 391];
    return index;
}
// Interpret a dictionary and return a new dictionary with readable keys and values for missing entries.
// This function takes `meta` which is a list of objects containing `operand`, `name` and `default`.
function interpretDict(dict, meta, strings) {
    var newDict = {};
    var value;
    // Because we also want to include missing values, we start out from the meta list
    // and lookup values in the dict.
    for(var i = 0; i < meta.length; i += 1){
        var m = meta[i];
        if (Array.isArray(m.type)) {
            var values = [];
            values.length = m.type.length;
            for(var j = 0; j < m.type.length; j++){
                value = dict[m.op] !== undefined ? dict[m.op][j] : undefined;
                if (value === undefined) value = m.value !== undefined && m.value[j] !== undefined ? m.value[j] : null;
                if (m.type[j] === "SID") value = getCFFString(strings, value);
                values[j] = value;
            }
            newDict[m.name] = values;
        } else {
            value = dict[m.op];
            if (value === undefined) value = m.value !== undefined ? m.value : null;
            if (m.type === "SID") value = getCFFString(strings, value);
            newDict[m.name] = value;
        }
    }
    return newDict;
}
// Parse the CFF header.
function parseCFFHeader(data, start) {
    var header = {};
    header.formatMajor = parse.getCard8(data, start);
    header.formatMinor = parse.getCard8(data, start + 1);
    header.size = parse.getCard8(data, start + 2);
    header.offsetSize = parse.getCard8(data, start + 3);
    header.startOffset = start;
    header.endOffset = start + 4;
    return header;
}
var TOP_DICT_META = [
    {
        name: "version",
        op: 0,
        type: "SID"
    },
    {
        name: "notice",
        op: 1,
        type: "SID"
    },
    {
        name: "copyright",
        op: 1200,
        type: "SID"
    },
    {
        name: "fullName",
        op: 2,
        type: "SID"
    },
    {
        name: "familyName",
        op: 3,
        type: "SID"
    },
    {
        name: "weight",
        op: 4,
        type: "SID"
    },
    {
        name: "isFixedPitch",
        op: 1201,
        type: "number",
        value: 0
    },
    {
        name: "italicAngle",
        op: 1202,
        type: "number",
        value: 0
    },
    {
        name: "underlinePosition",
        op: 1203,
        type: "number",
        value: -100
    },
    {
        name: "underlineThickness",
        op: 1204,
        type: "number",
        value: 50
    },
    {
        name: "paintType",
        op: 1205,
        type: "number",
        value: 0
    },
    {
        name: "charstringType",
        op: 1206,
        type: "number",
        value: 2
    },
    {
        name: "fontMatrix",
        op: 1207,
        type: [
            "real",
            "real",
            "real",
            "real",
            "real",
            "real"
        ],
        value: [
            0.001,
            0,
            0,
            0.001,
            0,
            0
        ]
    },
    {
        name: "uniqueId",
        op: 13,
        type: "number"
    },
    {
        name: "fontBBox",
        op: 5,
        type: [
            "number",
            "number",
            "number",
            "number"
        ],
        value: [
            0,
            0,
            0,
            0
        ]
    },
    {
        name: "strokeWidth",
        op: 1208,
        type: "number",
        value: 0
    },
    {
        name: "xuid",
        op: 14,
        type: [],
        value: null
    },
    {
        name: "charset",
        op: 15,
        type: "offset",
        value: 0
    },
    {
        name: "encoding",
        op: 16,
        type: "offset",
        value: 0
    },
    {
        name: "charStrings",
        op: 17,
        type: "offset",
        value: 0
    },
    {
        name: "private",
        op: 18,
        type: [
            "number",
            "offset"
        ],
        value: [
            0,
            0
        ]
    },
    {
        name: "ros",
        op: 1230,
        type: [
            "SID",
            "SID",
            "number"
        ]
    },
    {
        name: "cidFontVersion",
        op: 1231,
        type: "number",
        value: 0
    },
    {
        name: "cidFontRevision",
        op: 1232,
        type: "number",
        value: 0
    },
    {
        name: "cidFontType",
        op: 1233,
        type: "number",
        value: 0
    },
    {
        name: "cidCount",
        op: 1234,
        type: "number",
        value: 8720
    },
    {
        name: "uidBase",
        op: 1235,
        type: "number"
    },
    {
        name: "fdArray",
        op: 1236,
        type: "offset"
    },
    {
        name: "fdSelect",
        op: 1237,
        type: "offset"
    },
    {
        name: "fontName",
        op: 1238,
        type: "SID"
    }
];
var PRIVATE_DICT_META = [
    {
        name: "subrs",
        op: 19,
        type: "offset",
        value: 0
    },
    {
        name: "defaultWidthX",
        op: 20,
        type: "number",
        value: 0
    },
    {
        name: "nominalWidthX",
        op: 21,
        type: "number",
        value: 0
    }
];
// Parse the CFF top dictionary. A CFF table can contain multiple fonts, each with their own top dictionary.
// The top dictionary contains the essential metadata for the font, together with the private dictionary.
function parseCFFTopDict(data, strings) {
    var dict = parseCFFDict(data, 0, data.byteLength);
    return interpretDict(dict, TOP_DICT_META, strings);
}
// Parse the CFF private dictionary. We don't fully parse out all the values, only the ones we need.
function parseCFFPrivateDict(data, start, size, strings) {
    var dict = parseCFFDict(data, start, size);
    return interpretDict(dict, PRIVATE_DICT_META, strings);
}
// Returns a list of "Top DICT"s found using an INDEX list.
// Used to read both the usual high-level Top DICTs and also the FDArray
// discovered inside CID-keyed fonts.  When a Top DICT has a reference to
// a Private DICT that is read and saved into the Top DICT.
//
// In addition to the expected/optional values as outlined in TOP_DICT_META
// the following values might be saved into the Top DICT.
//
//    _subrs []        array of local CFF subroutines from Private DICT
//    _subrsBias       bias value computed from number of subroutines
//                      (see calcCFFSubroutineBias() and parseCFFCharstring())
//    _defaultWidthX   default widths for CFF characters
//    _nominalWidthX   bias added to width embedded within glyph description
//
//    _privateDict     saved copy of parsed Private DICT from Top DICT
function gatherCFFTopDicts(data, start, cffIndex, strings) {
    var topDictArray = [];
    for(var iTopDict = 0; iTopDict < cffIndex.length; iTopDict += 1){
        var topDictData = new DataView(new Uint8Array(cffIndex[iTopDict]).buffer);
        var topDict = parseCFFTopDict(topDictData, strings);
        topDict._subrs = [];
        topDict._subrsBias = 0;
        topDict._defaultWidthX = 0;
        topDict._nominalWidthX = 0;
        var privateSize = topDict.private[0];
        var privateOffset = topDict.private[1];
        if (privateSize !== 0 && privateOffset !== 0) {
            var privateDict = parseCFFPrivateDict(data, privateOffset + start, privateSize, strings);
            topDict._defaultWidthX = privateDict.defaultWidthX;
            topDict._nominalWidthX = privateDict.nominalWidthX;
            if (privateDict.subrs !== 0) {
                var subrOffset = privateOffset + privateDict.subrs;
                var subrIndex = parseCFFIndex(data, subrOffset + start);
                topDict._subrs = subrIndex.objects;
                topDict._subrsBias = calcCFFSubroutineBias(topDict._subrs);
            }
            topDict._privateDict = privateDict;
        }
        topDictArray.push(topDict);
    }
    return topDictArray;
}
// Parse the CFF charset table, which contains internal names for all the glyphs.
// This function will return a list of glyph names.
// See Adobe TN #5176 chapter 13, "Charsets".
function parseCFFCharset(data, start, nGlyphs, strings) {
    var sid;
    var count;
    var parser = new parse.Parser(data, start);
    // The .notdef glyph is not included, so subtract 1.
    nGlyphs -= 1;
    var charset = [
        ".notdef"
    ];
    var format = parser.parseCard8();
    if (format === 0) for(var i = 0; i < nGlyphs; i += 1){
        sid = parser.parseSID();
        charset.push(getCFFString(strings, sid));
    }
    else if (format === 1) while(charset.length <= nGlyphs){
        sid = parser.parseSID();
        count = parser.parseCard8();
        for(var i$1 = 0; i$1 <= count; i$1 += 1){
            charset.push(getCFFString(strings, sid));
            sid += 1;
        }
    }
    else if (format === 2) while(charset.length <= nGlyphs){
        sid = parser.parseSID();
        count = parser.parseCard16();
        for(var i$2 = 0; i$2 <= count; i$2 += 1){
            charset.push(getCFFString(strings, sid));
            sid += 1;
        }
    }
    else throw new Error("Unknown charset format " + format);
    return charset;
}
// Parse the CFF encoding data. Only one encoding can be specified per font.
// See Adobe TN #5176 chapter 12, "Encodings".
function parseCFFEncoding(data, start, charset) {
    var code;
    var enc = {};
    var parser = new parse.Parser(data, start);
    var format = parser.parseCard8();
    if (format === 0) {
        var nCodes = parser.parseCard8();
        for(var i = 0; i < nCodes; i += 1){
            code = parser.parseCard8();
            enc[code] = i;
        }
    } else if (format === 1) {
        var nRanges = parser.parseCard8();
        code = 1;
        for(var i$1 = 0; i$1 < nRanges; i$1 += 1){
            var first = parser.parseCard8();
            var nLeft = parser.parseCard8();
            for(var j = first; j <= first + nLeft; j += 1){
                enc[j] = code;
                code += 1;
            }
        }
    } else throw new Error("Unknown encoding format " + format);
    return new CffEncoding(enc, charset);
}
// Take in charstring code and return a Glyph object.
// The encoding is described in the Type 2 Charstring Format
// https://www.microsoft.com/typography/OTSPEC/charstr2.htm
function parseCFFCharstring(font, glyph, code) {
    var c1x;
    var c1y;
    var c2x;
    var c2y;
    var p = new Path();
    var stack = [];
    var nStems = 0;
    var haveWidth = false;
    var open = false;
    var x = 0;
    var y = 0;
    var subrs;
    var subrsBias;
    var defaultWidthX;
    var nominalWidthX;
    if (font.isCIDFont) {
        var fdIndex = font.tables.cff.topDict._fdSelect[glyph.index];
        var fdDict = font.tables.cff.topDict._fdArray[fdIndex];
        subrs = fdDict._subrs;
        subrsBias = fdDict._subrsBias;
        defaultWidthX = fdDict._defaultWidthX;
        nominalWidthX = fdDict._nominalWidthX;
    } else {
        subrs = font.tables.cff.topDict._subrs;
        subrsBias = font.tables.cff.topDict._subrsBias;
        defaultWidthX = font.tables.cff.topDict._defaultWidthX;
        nominalWidthX = font.tables.cff.topDict._nominalWidthX;
    }
    var width = defaultWidthX;
    function newContour(x, y) {
        if (open) p.closePath();
        p.moveTo(x, y);
        open = true;
    }
    function parseStems() {
        var hasWidthArg;
        // The number of stem operators on the stack is always even.
        // If the value is uneven, that means a width is specified.
        hasWidthArg = stack.length % 2 !== 0;
        if (hasWidthArg && !haveWidth) width = stack.shift() + nominalWidthX;
        nStems += stack.length >> 1;
        stack.length = 0;
        haveWidth = true;
    }
    function parse(code) {
        var b1;
        var b2;
        var b3;
        var b4;
        var codeIndex;
        var subrCode;
        var jpx;
        var jpy;
        var c3x;
        var c3y;
        var c4x;
        var c4y;
        var i = 0;
        while(i < code.length){
            var v = code[i];
            i += 1;
            switch(v){
                case 1:
                    parseStems();
                    break;
                case 3:
                    parseStems();
                    break;
                case 4:
                    if (stack.length > 1 && !haveWidth) {
                        width = stack.shift() + nominalWidthX;
                        haveWidth = true;
                    }
                    y += stack.pop();
                    newContour(x, y);
                    break;
                case 5:
                    while(stack.length > 0){
                        x += stack.shift();
                        y += stack.shift();
                        p.lineTo(x, y);
                    }
                    break;
                case 6:
                    while(stack.length > 0){
                        x += stack.shift();
                        p.lineTo(x, y);
                        if (stack.length === 0) break;
                        y += stack.shift();
                        p.lineTo(x, y);
                    }
                    break;
                case 7:
                    while(stack.length > 0){
                        y += stack.shift();
                        p.lineTo(x, y);
                        if (stack.length === 0) break;
                        x += stack.shift();
                        p.lineTo(x, y);
                    }
                    break;
                case 8:
                    while(stack.length > 0){
                        c1x = x + stack.shift();
                        c1y = y + stack.shift();
                        c2x = c1x + stack.shift();
                        c2y = c1y + stack.shift();
                        x = c2x + stack.shift();
                        y = c2y + stack.shift();
                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
                    }
                    break;
                case 10:
                    codeIndex = stack.pop() + subrsBias;
                    subrCode = subrs[codeIndex];
                    if (subrCode) parse(subrCode);
                    break;
                case 11:
                    return;
                case 12:
                    v = code[i];
                    i += 1;
                    switch(v){
                        case 35:
                            // |- dx1 dy1 dx2 dy2 dx3 dy3 dx4 dy4 dx5 dy5 dx6 dy6 fd flex (12 35) |-
                            c1x = x + stack.shift(); // dx1
                            c1y = y + stack.shift(); // dy1
                            c2x = c1x + stack.shift(); // dx2
                            c2y = c1y + stack.shift(); // dy2
                            jpx = c2x + stack.shift(); // dx3
                            jpy = c2y + stack.shift(); // dy3
                            c3x = jpx + stack.shift(); // dx4
                            c3y = jpy + stack.shift(); // dy4
                            c4x = c3x + stack.shift(); // dx5
                            c4y = c3y + stack.shift(); // dy5
                            x = c4x + stack.shift(); // dx6
                            y = c4y + stack.shift(); // dy6
                            stack.shift(); // flex depth
                            p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
                            p.curveTo(c3x, c3y, c4x, c4y, x, y);
                            break;
                        case 34:
                            // |- dx1 dx2 dy2 dx3 dx4 dx5 dx6 hflex (12 34) |-
                            c1x = x + stack.shift(); // dx1
                            c1y = y; // dy1
                            c2x = c1x + stack.shift(); // dx2
                            c2y = c1y + stack.shift(); // dy2
                            jpx = c2x + stack.shift(); // dx3
                            jpy = c2y; // dy3
                            c3x = jpx + stack.shift(); // dx4
                            c3y = c2y; // dy4
                            c4x = c3x + stack.shift(); // dx5
                            c4y = y; // dy5
                            x = c4x + stack.shift(); // dx6
                            p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
                            p.curveTo(c3x, c3y, c4x, c4y, x, y);
                            break;
                        case 36:
                            // |- dx1 dy1 dx2 dy2 dx3 dx4 dx5 dy5 dx6 hflex1 (12 36) |-
                            c1x = x + stack.shift(); // dx1
                            c1y = y + stack.shift(); // dy1
                            c2x = c1x + stack.shift(); // dx2
                            c2y = c1y + stack.shift(); // dy2
                            jpx = c2x + stack.shift(); // dx3
                            jpy = c2y; // dy3
                            c3x = jpx + stack.shift(); // dx4
                            c3y = c2y; // dy4
                            c4x = c3x + stack.shift(); // dx5
                            c4y = c3y + stack.shift(); // dy5
                            x = c4x + stack.shift(); // dx6
                            p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
                            p.curveTo(c3x, c3y, c4x, c4y, x, y);
                            break;
                        case 37:
                            // |- dx1 dy1 dx2 dy2 dx3 dy3 dx4 dy4 dx5 dy5 d6 flex1 (12 37) |-
                            c1x = x + stack.shift(); // dx1
                            c1y = y + stack.shift(); // dy1
                            c2x = c1x + stack.shift(); // dx2
                            c2y = c1y + stack.shift(); // dy2
                            jpx = c2x + stack.shift(); // dx3
                            jpy = c2y + stack.shift(); // dy3
                            c3x = jpx + stack.shift(); // dx4
                            c3y = jpy + stack.shift(); // dy4
                            c4x = c3x + stack.shift(); // dx5
                            c4y = c3y + stack.shift(); // dy5
                            if (Math.abs(c4x - x) > Math.abs(c4y - y)) x = c4x + stack.shift();
                            else y = c4y + stack.shift();
                            p.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
                            p.curveTo(c3x, c3y, c4x, c4y, x, y);
                            break;
                        default:
                            console.log("Glyph " + glyph.index + ": unknown operator " + 1200 + v);
                            stack.length = 0;
                    }
                    break;
                case 14:
                    if (stack.length > 0 && !haveWidth) {
                        width = stack.shift() + nominalWidthX;
                        haveWidth = true;
                    }
                    if (open) {
                        p.closePath();
                        open = false;
                    }
                    break;
                case 18:
                    parseStems();
                    break;
                case 19:
                case 20:
                    parseStems();
                    i += nStems + 7 >> 3;
                    break;
                case 21:
                    if (stack.length > 2 && !haveWidth) {
                        width = stack.shift() + nominalWidthX;
                        haveWidth = true;
                    }
                    y += stack.pop();
                    x += stack.pop();
                    newContour(x, y);
                    break;
                case 22:
                    if (stack.length > 1 && !haveWidth) {
                        width = stack.shift() + nominalWidthX;
                        haveWidth = true;
                    }
                    x += stack.pop();
                    newContour(x, y);
                    break;
                case 23:
                    parseStems();
                    break;
                case 24:
                    while(stack.length > 2){
                        c1x = x + stack.shift();
                        c1y = y + stack.shift();
                        c2x = c1x + stack.shift();
                        c2y = c1y + stack.shift();
                        x = c2x + stack.shift();
                        y = c2y + stack.shift();
                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
                    }
                    x += stack.shift();
                    y += stack.shift();
                    p.lineTo(x, y);
                    break;
                case 25:
                    while(stack.length > 6){
                        x += stack.shift();
                        y += stack.shift();
                        p.lineTo(x, y);
                    }
                    c1x = x + stack.shift();
                    c1y = y + stack.shift();
                    c2x = c1x + stack.shift();
                    c2y = c1y + stack.shift();
                    x = c2x + stack.shift();
                    y = c2y + stack.shift();
                    p.curveTo(c1x, c1y, c2x, c2y, x, y);
                    break;
                case 26:
                    if (stack.length % 2) x += stack.shift();
                    while(stack.length > 0){
                        c1x = x;
                        c1y = y + stack.shift();
                        c2x = c1x + stack.shift();
                        c2y = c1y + stack.shift();
                        x = c2x;
                        y = c2y + stack.shift();
                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
                    }
                    break;
                case 27:
                    if (stack.length % 2) y += stack.shift();
                    while(stack.length > 0){
                        c1x = x + stack.shift();
                        c1y = y;
                        c2x = c1x + stack.shift();
                        c2y = c1y + stack.shift();
                        x = c2x + stack.shift();
                        y = c2y;
                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
                    }
                    break;
                case 28:
                    b1 = code[i];
                    b2 = code[i + 1];
                    stack.push((b1 << 24 | b2 << 16) >> 16);
                    i += 2;
                    break;
                case 29:
                    codeIndex = stack.pop() + font.gsubrsBias;
                    subrCode = font.gsubrs[codeIndex];
                    if (subrCode) parse(subrCode);
                    break;
                case 30:
                    while(stack.length > 0){
                        c1x = x;
                        c1y = y + stack.shift();
                        c2x = c1x + stack.shift();
                        c2y = c1y + stack.shift();
                        x = c2x + stack.shift();
                        y = c2y + (stack.length === 1 ? stack.shift() : 0);
                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
                        if (stack.length === 0) break;
                        c1x = x + stack.shift();
                        c1y = y;
                        c2x = c1x + stack.shift();
                        c2y = c1y + stack.shift();
                        y = c2y + stack.shift();
                        x = c2x + (stack.length === 1 ? stack.shift() : 0);
                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
                    }
                    break;
                case 31:
                    while(stack.length > 0){
                        c1x = x + stack.shift();
                        c1y = y;
                        c2x = c1x + stack.shift();
                        c2y = c1y + stack.shift();
                        y = c2y + stack.shift();
                        x = c2x + (stack.length === 1 ? stack.shift() : 0);
                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
                        if (stack.length === 0) break;
                        c1x = x;
                        c1y = y + stack.shift();
                        c2x = c1x + stack.shift();
                        c2y = c1y + stack.shift();
                        x = c2x + stack.shift();
                        y = c2y + (stack.length === 1 ? stack.shift() : 0);
                        p.curveTo(c1x, c1y, c2x, c2y, x, y);
                    }
                    break;
                default:
                    if (v < 32) console.log("Glyph " + glyph.index + ": unknown operator " + v);
                    else if (v < 247) stack.push(v - 139);
                    else if (v < 251) {
                        b1 = code[i];
                        i += 1;
                        stack.push((v - 247) * 256 + b1 + 108);
                    } else if (v < 255) {
                        b1 = code[i];
                        i += 1;
                        stack.push(-(v - 251) * 256 - b1 - 108);
                    } else {
                        b1 = code[i];
                        b2 = code[i + 1];
                        b3 = code[i + 2];
                        b4 = code[i + 3];
                        i += 4;
                        stack.push((b1 << 24 | b2 << 16 | b3 << 8 | b4) / 65536);
                    }
            }
        }
    }
    parse(code);
    glyph.advanceWidth = width;
    return p;
}
function parseCFFFDSelect(data, start, nGlyphs, fdArrayCount) {
    var fdSelect = [];
    var fdIndex;
    var parser = new parse.Parser(data, start);
    var format = parser.parseCard8();
    if (format === 0) // Simple list of nGlyphs elements
    for(var iGid = 0; iGid < nGlyphs; iGid++){
        fdIndex = parser.parseCard8();
        if (fdIndex >= fdArrayCount) throw new Error("CFF table CID Font FDSelect has bad FD index value " + fdIndex + " (FD count " + fdArrayCount + ")");
        fdSelect.push(fdIndex);
    }
    else if (format === 3) {
        // Ranges
        var nRanges = parser.parseCard16();
        var first = parser.parseCard16();
        if (first !== 0) throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID " + first);
        var next;
        for(var iRange = 0; iRange < nRanges; iRange++){
            fdIndex = parser.parseCard8();
            next = parser.parseCard16();
            if (fdIndex >= fdArrayCount) throw new Error("CFF table CID Font FDSelect has bad FD index value " + fdIndex + " (FD count " + fdArrayCount + ")");
            if (next > nGlyphs) throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID " + next);
            for(; first < next; first++)fdSelect.push(fdIndex);
            first = next;
        }
        if (next !== nGlyphs) throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID " + next);
    } else throw new Error("CFF Table CID Font FDSelect table has unsupported format " + format);
    return fdSelect;
}
// Parse the `CFF` table, which contains the glyph outlines in PostScript format.
function parseCFFTable(data, start, font, opt) {
    font.tables.cff = {};
    var header = parseCFFHeader(data, start);
    var nameIndex = parseCFFIndex(data, header.endOffset, parse.bytesToString);
    var topDictIndex = parseCFFIndex(data, nameIndex.endOffset);
    var stringIndex = parseCFFIndex(data, topDictIndex.endOffset, parse.bytesToString);
    var globalSubrIndex = parseCFFIndex(data, stringIndex.endOffset);
    font.gsubrs = globalSubrIndex.objects;
    font.gsubrsBias = calcCFFSubroutineBias(font.gsubrs);
    var topDictArray = gatherCFFTopDicts(data, start, topDictIndex.objects, stringIndex.objects);
    if (topDictArray.length !== 1) throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + topDictArray.length);
    var topDict = topDictArray[0];
    font.tables.cff.topDict = topDict;
    if (topDict._privateDict) {
        font.defaultWidthX = topDict._privateDict.defaultWidthX;
        font.nominalWidthX = topDict._privateDict.nominalWidthX;
    }
    if (topDict.ros[0] !== undefined && topDict.ros[1] !== undefined) font.isCIDFont = true;
    if (font.isCIDFont) {
        var fdArrayOffset = topDict.fdArray;
        var fdSelectOffset = topDict.fdSelect;
        if (fdArrayOffset === 0 || fdSelectOffset === 0) throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
        fdArrayOffset += start;
        var fdArrayIndex = parseCFFIndex(data, fdArrayOffset);
        var fdArray = gatherCFFTopDicts(data, start, fdArrayIndex.objects, stringIndex.objects);
        topDict._fdArray = fdArray;
        fdSelectOffset += start;
        topDict._fdSelect = parseCFFFDSelect(data, fdSelectOffset, font.numGlyphs, fdArray.length);
    }
    var privateDictOffset = start + topDict.private[1];
    var privateDict = parseCFFPrivateDict(data, privateDictOffset, topDict.private[0], stringIndex.objects);
    font.defaultWidthX = privateDict.defaultWidthX;
    font.nominalWidthX = privateDict.nominalWidthX;
    if (privateDict.subrs !== 0) {
        var subrOffset = privateDictOffset + privateDict.subrs;
        var subrIndex = parseCFFIndex(data, subrOffset);
        font.subrs = subrIndex.objects;
        font.subrsBias = calcCFFSubroutineBias(font.subrs);
    } else {
        font.subrs = [];
        font.subrsBias = 0;
    }
    // Offsets in the top dict are relative to the beginning of the CFF data, so add the CFF start offset.
    var charStringsIndex;
    if (opt.lowMemory) {
        charStringsIndex = parseCFFIndexLowMemory(data, start + topDict.charStrings);
        font.nGlyphs = charStringsIndex.offsets.length;
    } else {
        charStringsIndex = parseCFFIndex(data, start + topDict.charStrings);
        font.nGlyphs = charStringsIndex.objects.length;
    }
    var charset = parseCFFCharset(data, start + topDict.charset, font.nGlyphs, stringIndex.objects);
    if (topDict.encoding === 0) // Standard encoding
    font.cffEncoding = new CffEncoding(cffStandardEncoding, charset);
    else if (topDict.encoding === 1) // Expert encoding
    font.cffEncoding = new CffEncoding(cffExpertEncoding, charset);
    else font.cffEncoding = parseCFFEncoding(data, start + topDict.encoding, charset);
    // Prefer the CMAP encoding to the CFF encoding.
    font.encoding = font.encoding || font.cffEncoding;
    font.glyphs = new glyphset.GlyphSet(font);
    if (opt.lowMemory) font._push = function(i) {
        var charString = getCffIndexObject(i, charStringsIndex.offsets, data, start + topDict.charStrings);
        font.glyphs.push(i, glyphset.cffGlyphLoader(font, i, parseCFFCharstring, charString));
    };
    else for(var i = 0; i < font.nGlyphs; i += 1){
        var charString = charStringsIndex.objects[i];
        font.glyphs.push(i, glyphset.cffGlyphLoader(font, i, parseCFFCharstring, charString));
    }
}
// Convert a string to a String ID (SID).
// The list of strings is modified in place.
function encodeString(s, strings) {
    var sid;
    // Is the string in the CFF standard strings?
    var i = cffStandardStrings.indexOf(s);
    if (i >= 0) sid = i;
    // Is the string already in the string index?
    i = strings.indexOf(s);
    if (i >= 0) sid = i + cffStandardStrings.length;
    else {
        sid = cffStandardStrings.length + strings.length;
        strings.push(s);
    }
    return sid;
}
function makeHeader() {
    return new table.Record("Header", [
        {
            name: "major",
            type: "Card8",
            value: 1
        },
        {
            name: "minor",
            type: "Card8",
            value: 0
        },
        {
            name: "hdrSize",
            type: "Card8",
            value: 4
        },
        {
            name: "major",
            type: "Card8",
            value: 1
        }
    ]);
}
function makeNameIndex(fontNames) {
    var t = new table.Record("Name INDEX", [
        {
            name: "names",
            type: "INDEX",
            value: []
        }
    ]);
    t.names = [];
    for(var i = 0; i < fontNames.length; i += 1)t.names.push({
        name: "name_" + i,
        type: "NAME",
        value: fontNames[i]
    });
    return t;
}
// Given a dictionary's metadata, create a DICT structure.
function makeDict(meta, attrs, strings) {
    var m = {};
    for(var i = 0; i < meta.length; i += 1){
        var entry = meta[i];
        var value = attrs[entry.name];
        if (value !== undefined && !equals(value, entry.value)) {
            if (entry.type === "SID") value = encodeString(value, strings);
            m[entry.op] = {
                name: entry.name,
                type: entry.type,
                value: value
            };
        }
    }
    return m;
}
// The Top DICT houses the global font attributes.
function makeTopDict(attrs, strings) {
    var t = new table.Record("Top DICT", [
        {
            name: "dict",
            type: "DICT",
            value: {}
        }
    ]);
    t.dict = makeDict(TOP_DICT_META, attrs, strings);
    return t;
}
function makeTopDictIndex(topDict) {
    var t = new table.Record("Top DICT INDEX", [
        {
            name: "topDicts",
            type: "INDEX",
            value: []
        }
    ]);
    t.topDicts = [
        {
            name: "topDict_0",
            type: "TABLE",
            value: topDict
        }
    ];
    return t;
}
function makeStringIndex(strings) {
    var t = new table.Record("String INDEX", [
        {
            name: "strings",
            type: "INDEX",
            value: []
        }
    ]);
    t.strings = [];
    for(var i = 0; i < strings.length; i += 1)t.strings.push({
        name: "string_" + i,
        type: "STRING",
        value: strings[i]
    });
    return t;
}
function makeGlobalSubrIndex() {
    // Currently we don't use subroutines.
    return new table.Record("Global Subr INDEX", [
        {
            name: "subrs",
            type: "INDEX",
            value: []
        }
    ]);
}
function makeCharsets(glyphNames, strings) {
    var t = new table.Record("Charsets", [
        {
            name: "format",
            type: "Card8",
            value: 0
        }
    ]);
    for(var i = 0; i < glyphNames.length; i += 1){
        var glyphName = glyphNames[i];
        var glyphSID = encodeString(glyphName, strings);
        t.fields.push({
            name: "glyph_" + i,
            type: "SID",
            value: glyphSID
        });
    }
    return t;
}
function glyphToOps(glyph) {
    var ops = [];
    var path = glyph.path;
    ops.push({
        name: "width",
        type: "NUMBER",
        value: glyph.advanceWidth
    });
    var x = 0;
    var y = 0;
    for(var i = 0; i < path.commands.length; i += 1){
        var dx = void 0;
        var dy = void 0;
        var cmd = path.commands[i];
        if (cmd.type === "Q") {
            // CFF only supports bézier curves, so convert the quad to a bézier.
            var _13 = 1 / 3;
            var _23 = 2 / 3;
            // We're going to create a new command so we don't change the original path.
            // Since all coordinates are relative, we round() them ASAP to avoid propagating errors.
            cmd = {
                type: "C",
                x: cmd.x,
                y: cmd.y,
                x1: Math.round(_13 * x + _23 * cmd.x1),
                y1: Math.round(_13 * y + _23 * cmd.y1),
                x2: Math.round(_13 * cmd.x + _23 * cmd.x1),
                y2: Math.round(_13 * cmd.y + _23 * cmd.y1)
            };
        }
        if (cmd.type === "M") {
            dx = Math.round(cmd.x - x);
            dy = Math.round(cmd.y - y);
            ops.push({
                name: "dx",
                type: "NUMBER",
                value: dx
            });
            ops.push({
                name: "dy",
                type: "NUMBER",
                value: dy
            });
            ops.push({
                name: "rmoveto",
                type: "OP",
                value: 21
            });
            x = Math.round(cmd.x);
            y = Math.round(cmd.y);
        } else if (cmd.type === "L") {
            dx = Math.round(cmd.x - x);
            dy = Math.round(cmd.y - y);
            ops.push({
                name: "dx",
                type: "NUMBER",
                value: dx
            });
            ops.push({
                name: "dy",
                type: "NUMBER",
                value: dy
            });
            ops.push({
                name: "rlineto",
                type: "OP",
                value: 5
            });
            x = Math.round(cmd.x);
            y = Math.round(cmd.y);
        } else if (cmd.type === "C") {
            var dx1 = Math.round(cmd.x1 - x);
            var dy1 = Math.round(cmd.y1 - y);
            var dx2 = Math.round(cmd.x2 - cmd.x1);
            var dy2 = Math.round(cmd.y2 - cmd.y1);
            dx = Math.round(cmd.x - cmd.x2);
            dy = Math.round(cmd.y - cmd.y2);
            ops.push({
                name: "dx1",
                type: "NUMBER",
                value: dx1
            });
            ops.push({
                name: "dy1",
                type: "NUMBER",
                value: dy1
            });
            ops.push({
                name: "dx2",
                type: "NUMBER",
                value: dx2
            });
            ops.push({
                name: "dy2",
                type: "NUMBER",
                value: dy2
            });
            ops.push({
                name: "dx",
                type: "NUMBER",
                value: dx
            });
            ops.push({
                name: "dy",
                type: "NUMBER",
                value: dy
            });
            ops.push({
                name: "rrcurveto",
                type: "OP",
                value: 8
            });
            x = Math.round(cmd.x);
            y = Math.round(cmd.y);
        }
    // Contours are closed automatically.
    }
    ops.push({
        name: "endchar",
        type: "OP",
        value: 14
    });
    return ops;
}
function makeCharStringsIndex(glyphs) {
    var t = new table.Record("CharStrings INDEX", [
        {
            name: "charStrings",
            type: "INDEX",
            value: []
        }
    ]);
    for(var i = 0; i < glyphs.length; i += 1){
        var glyph = glyphs.get(i);
        var ops = glyphToOps(glyph);
        t.charStrings.push({
            name: glyph.name,
            type: "CHARSTRING",
            value: ops
        });
    }
    return t;
}
function makePrivateDict(attrs, strings) {
    var t = new table.Record("Private DICT", [
        {
            name: "dict",
            type: "DICT",
            value: {}
        }
    ]);
    t.dict = makeDict(PRIVATE_DICT_META, attrs, strings);
    return t;
}
function makeCFFTable(glyphs, options) {
    var t = new table.Table("CFF ", [
        {
            name: "header",
            type: "RECORD"
        },
        {
            name: "nameIndex",
            type: "RECORD"
        },
        {
            name: "topDictIndex",
            type: "RECORD"
        },
        {
            name: "stringIndex",
            type: "RECORD"
        },
        {
            name: "globalSubrIndex",
            type: "RECORD"
        },
        {
            name: "charsets",
            type: "RECORD"
        },
        {
            name: "charStringsIndex",
            type: "RECORD"
        },
        {
            name: "privateDict",
            type: "RECORD"
        }
    ]);
    var fontScale = 1 / options.unitsPerEm;
    // We use non-zero values for the offsets so that the DICT encodes them.
    // This is important because the size of the Top DICT plays a role in offset calculation,
    // and the size shouldn't change after we've written correct offsets.
    var attrs = {
        version: options.version,
        fullName: options.fullName,
        familyName: options.familyName,
        weight: options.weightName,
        fontBBox: options.fontBBox || [
            0,
            0,
            0,
            0
        ],
        fontMatrix: [
            fontScale,
            0,
            0,
            fontScale,
            0,
            0
        ],
        charset: 999,
        encoding: 0,
        charStrings: 999,
        private: [
            0,
            999
        ]
    };
    var privateAttrs = {};
    var glyphNames = [];
    var glyph;
    // Skip first glyph (.notdef)
    for(var i = 1; i < glyphs.length; i += 1){
        glyph = glyphs.get(i);
        glyphNames.push(glyph.name);
    }
    var strings = [];
    t.header = makeHeader();
    t.nameIndex = makeNameIndex([
        options.postScriptName
    ]);
    var topDict = makeTopDict(attrs, strings);
    t.topDictIndex = makeTopDictIndex(topDict);
    t.globalSubrIndex = makeGlobalSubrIndex();
    t.charsets = makeCharsets(glyphNames, strings);
    t.charStringsIndex = makeCharStringsIndex(glyphs);
    t.privateDict = makePrivateDict(privateAttrs, strings);
    // Needs to come at the end, to encode all custom strings used in the font.
    t.stringIndex = makeStringIndex(strings);
    var startOffset = t.header.sizeOf() + t.nameIndex.sizeOf() + t.topDictIndex.sizeOf() + t.stringIndex.sizeOf() + t.globalSubrIndex.sizeOf();
    attrs.charset = startOffset;
    // We use the CFF standard encoding; proper encoding will be handled in cmap.
    attrs.encoding = 0;
    attrs.charStrings = attrs.charset + t.charsets.sizeOf();
    attrs.private[1] = attrs.charStrings + t.charStringsIndex.sizeOf();
    // Recreate the Top DICT INDEX with the correct offsets.
    topDict = makeTopDict(attrs, strings);
    t.topDictIndex = makeTopDictIndex(topDict);
    return t;
}
var cff = {
    parse: parseCFFTable,
    make: makeCFFTable
};
// The `head` table contains global information about the font.
// Parse the header `head` table
function parseHeadTable(data, start) {
    var head = {};
    var p = new parse.Parser(data, start);
    head.version = p.parseVersion();
    head.fontRevision = Math.round(p.parseFixed() * 1000) / 1000;
    head.checkSumAdjustment = p.parseULong();
    head.magicNumber = p.parseULong();
    check.argument(head.magicNumber === 0x5F0F3CF5, "Font header has wrong magic number.");
    head.flags = p.parseUShort();
    head.unitsPerEm = p.parseUShort();
    head.created = p.parseLongDateTime();
    head.modified = p.parseLongDateTime();
    head.xMin = p.parseShort();
    head.yMin = p.parseShort();
    head.xMax = p.parseShort();
    head.yMax = p.parseShort();
    head.macStyle = p.parseUShort();
    head.lowestRecPPEM = p.parseUShort();
    head.fontDirectionHint = p.parseShort();
    head.indexToLocFormat = p.parseShort();
    head.glyphDataFormat = p.parseShort();
    return head;
}
function makeHeadTable(options) {
    // Apple Mac timestamp epoch is 01/01/1904 not 01/01/1970
    var timestamp = Math.round(new Date().getTime() / 1000) + 2082844800;
    var createdTimestamp = timestamp;
    if (options.createdTimestamp) createdTimestamp = options.createdTimestamp + 2082844800;
    return new table.Table("head", [
        {
            name: "version",
            type: "FIXED",
            value: 0x00010000
        },
        {
            name: "fontRevision",
            type: "FIXED",
            value: 0x00010000
        },
        {
            name: "checkSumAdjustment",
            type: "ULONG",
            value: 0
        },
        {
            name: "magicNumber",
            type: "ULONG",
            value: 0x5F0F3CF5
        },
        {
            name: "flags",
            type: "USHORT",
            value: 0
        },
        {
            name: "unitsPerEm",
            type: "USHORT",
            value: 1000
        },
        {
            name: "created",
            type: "LONGDATETIME",
            value: createdTimestamp
        },
        {
            name: "modified",
            type: "LONGDATETIME",
            value: timestamp
        },
        {
            name: "xMin",
            type: "SHORT",
            value: 0
        },
        {
            name: "yMin",
            type: "SHORT",
            value: 0
        },
        {
            name: "xMax",
            type: "SHORT",
            value: 0
        },
        {
            name: "yMax",
            type: "SHORT",
            value: 0
        },
        {
            name: "macStyle",
            type: "USHORT",
            value: 0
        },
        {
            name: "lowestRecPPEM",
            type: "USHORT",
            value: 0
        },
        {
            name: "fontDirectionHint",
            type: "SHORT",
            value: 2
        },
        {
            name: "indexToLocFormat",
            type: "SHORT",
            value: 0
        },
        {
            name: "glyphDataFormat",
            type: "SHORT",
            value: 0
        }
    ], options);
}
var head = {
    parse: parseHeadTable,
    make: makeHeadTable
};
// The `hhea` table contains information for horizontal layout.
// Parse the horizontal header `hhea` table
function parseHheaTable(data, start) {
    var hhea = {};
    var p = new parse.Parser(data, start);
    hhea.version = p.parseVersion();
    hhea.ascender = p.parseShort();
    hhea.descender = p.parseShort();
    hhea.lineGap = p.parseShort();
    hhea.advanceWidthMax = p.parseUShort();
    hhea.minLeftSideBearing = p.parseShort();
    hhea.minRightSideBearing = p.parseShort();
    hhea.xMaxExtent = p.parseShort();
    hhea.caretSlopeRise = p.parseShort();
    hhea.caretSlopeRun = p.parseShort();
    hhea.caretOffset = p.parseShort();
    p.relativeOffset += 8;
    hhea.metricDataFormat = p.parseShort();
    hhea.numberOfHMetrics = p.parseUShort();
    return hhea;
}
function makeHheaTable(options) {
    return new table.Table("hhea", [
        {
            name: "version",
            type: "FIXED",
            value: 0x00010000
        },
        {
            name: "ascender",
            type: "FWORD",
            value: 0
        },
        {
            name: "descender",
            type: "FWORD",
            value: 0
        },
        {
            name: "lineGap",
            type: "FWORD",
            value: 0
        },
        {
            name: "advanceWidthMax",
            type: "UFWORD",
            value: 0
        },
        {
            name: "minLeftSideBearing",
            type: "FWORD",
            value: 0
        },
        {
            name: "minRightSideBearing",
            type: "FWORD",
            value: 0
        },
        {
            name: "xMaxExtent",
            type: "FWORD",
            value: 0
        },
        {
            name: "caretSlopeRise",
            type: "SHORT",
            value: 1
        },
        {
            name: "caretSlopeRun",
            type: "SHORT",
            value: 0
        },
        {
            name: "caretOffset",
            type: "SHORT",
            value: 0
        },
        {
            name: "reserved1",
            type: "SHORT",
            value: 0
        },
        {
            name: "reserved2",
            type: "SHORT",
            value: 0
        },
        {
            name: "reserved3",
            type: "SHORT",
            value: 0
        },
        {
            name: "reserved4",
            type: "SHORT",
            value: 0
        },
        {
            name: "metricDataFormat",
            type: "SHORT",
            value: 0
        },
        {
            name: "numberOfHMetrics",
            type: "USHORT",
            value: 0
        }
    ], options);
}
var hhea = {
    parse: parseHheaTable,
    make: makeHheaTable
};
// The `hmtx` table contains the horizontal metrics for all glyphs.
function parseHmtxTableAll(data, start, numMetrics, numGlyphs, glyphs) {
    var advanceWidth;
    var leftSideBearing;
    var p = new parse.Parser(data, start);
    for(var i = 0; i < numGlyphs; i += 1){
        // If the font is monospaced, only one entry is needed. This last entry applies to all subsequent glyphs.
        if (i < numMetrics) {
            advanceWidth = p.parseUShort();
            leftSideBearing = p.parseShort();
        }
        var glyph = glyphs.get(i);
        glyph.advanceWidth = advanceWidth;
        glyph.leftSideBearing = leftSideBearing;
    }
}
function parseHmtxTableOnLowMemory(font, data, start, numMetrics, numGlyphs) {
    font._hmtxTableData = {};
    var advanceWidth;
    var leftSideBearing;
    var p = new parse.Parser(data, start);
    for(var i = 0; i < numGlyphs; i += 1){
        // If the font is monospaced, only one entry is needed. This last entry applies to all subsequent glyphs.
        if (i < numMetrics) {
            advanceWidth = p.parseUShort();
            leftSideBearing = p.parseShort();
        }
        font._hmtxTableData[i] = {
            advanceWidth: advanceWidth,
            leftSideBearing: leftSideBearing
        };
    }
}
// Parse the `hmtx` table, which contains the horizontal metrics for all glyphs.
// This function augments the glyph array, adding the advanceWidth and leftSideBearing to each glyph.
function parseHmtxTable(font, data, start, numMetrics, numGlyphs, glyphs, opt) {
    if (opt.lowMemory) parseHmtxTableOnLowMemory(font, data, start, numMetrics, numGlyphs);
    else parseHmtxTableAll(data, start, numMetrics, numGlyphs, glyphs);
}
function makeHmtxTable(glyphs) {
    var t = new table.Table("hmtx", []);
    for(var i = 0; i < glyphs.length; i += 1){
        var glyph = glyphs.get(i);
        var advanceWidth = glyph.advanceWidth || 0;
        var leftSideBearing = glyph.leftSideBearing || 0;
        t.fields.push({
            name: "advanceWidth_" + i,
            type: "USHORT",
            value: advanceWidth
        });
        t.fields.push({
            name: "leftSideBearing_" + i,
            type: "SHORT",
            value: leftSideBearing
        });
    }
    return t;
}
var hmtx = {
    parse: parseHmtxTable,
    make: makeHmtxTable
};
// The `ltag` table stores IETF BCP-47 language tags. It allows supporting
function makeLtagTable(tags) {
    var result = new table.Table("ltag", [
        {
            name: "version",
            type: "ULONG",
            value: 1
        },
        {
            name: "flags",
            type: "ULONG",
            value: 0
        },
        {
            name: "numTags",
            type: "ULONG",
            value: tags.length
        }
    ]);
    var stringPool = "";
    var stringPoolOffset = 12 + tags.length * 4;
    for(var i = 0; i < tags.length; ++i){
        var pos = stringPool.indexOf(tags[i]);
        if (pos < 0) {
            pos = stringPool.length;
            stringPool += tags[i];
        }
        result.fields.push({
            name: "offset " + i,
            type: "USHORT",
            value: stringPoolOffset + pos
        });
        result.fields.push({
            name: "length " + i,
            type: "USHORT",
            value: tags[i].length
        });
    }
    result.fields.push({
        name: "stringPool",
        type: "CHARARRAY",
        value: stringPool
    });
    return result;
}
function parseLtagTable(data, start) {
    var p = new parse.Parser(data, start);
    var tableVersion = p.parseULong();
    check.argument(tableVersion === 1, "Unsupported ltag table version.");
    // The 'ltag' specification does not define any flags; skip the field.
    p.skip("uLong", 1);
    var numTags = p.parseULong();
    var tags = [];
    for(var i = 0; i < numTags; i++){
        var tag = "";
        var offset = start + p.parseUShort();
        var length = p.parseUShort();
        for(var j = offset; j < offset + length; ++j)tag += String.fromCharCode(data.getInt8(j));
        tags.push(tag);
    }
    return tags;
}
var ltag = {
    make: makeLtagTable,
    parse: parseLtagTable
};
// The `maxp` table establishes the memory requirements for the font.
// Parse the maximum profile `maxp` table.
function parseMaxpTable(data, start) {
    var maxp = {};
    var p = new parse.Parser(data, start);
    maxp.version = p.parseVersion();
    maxp.numGlyphs = p.parseUShort();
    if (maxp.version === 1.0) {
        maxp.maxPoints = p.parseUShort();
        maxp.maxContours = p.parseUShort();
        maxp.maxCompositePoints = p.parseUShort();
        maxp.maxCompositeContours = p.parseUShort();
        maxp.maxZones = p.parseUShort();
        maxp.maxTwilightPoints = p.parseUShort();
        maxp.maxStorage = p.parseUShort();
        maxp.maxFunctionDefs = p.parseUShort();
        maxp.maxInstructionDefs = p.parseUShort();
        maxp.maxStackElements = p.parseUShort();
        maxp.maxSizeOfInstructions = p.parseUShort();
        maxp.maxComponentElements = p.parseUShort();
        maxp.maxComponentDepth = p.parseUShort();
    }
    return maxp;
}
function makeMaxpTable(numGlyphs) {
    return new table.Table("maxp", [
        {
            name: "version",
            type: "FIXED",
            value: 0x00005000
        },
        {
            name: "numGlyphs",
            type: "USHORT",
            value: numGlyphs
        }
    ]);
}
var maxp = {
    parse: parseMaxpTable,
    make: makeMaxpTable
};
// The `name` naming table.
// NameIDs for the name table.
var nameTableNames = [
    "copyright",
    "fontFamily",
    "fontSubfamily",
    "uniqueID",
    "fullName",
    "version",
    "postScriptName",
    "trademark",
    "manufacturer",
    "designer",
    "description",
    "manufacturerURL",
    "designerURL",
    "license",
    "licenseURL",
    "reserved",
    "preferredFamily",
    "preferredSubfamily",
    "compatibleFullName",
    "sampleText",
    "postScriptFindFontName",
    "wwsFamily",
    "wwsSubfamily" // 22
];
var macLanguages = {
    0: "en",
    1: "fr",
    2: "de",
    3: "it",
    4: "nl",
    5: "sv",
    6: "es",
    7: "da",
    8: "pt",
    9: "no",
    10: "he",
    11: "ja",
    12: "ar",
    13: "fi",
    14: "el",
    15: "is",
    16: "mt",
    17: "tr",
    18: "hr",
    19: "zh-Hant",
    20: "ur",
    21: "hi",
    22: "th",
    23: "ko",
    24: "lt",
    25: "pl",
    26: "hu",
    27: "es",
    28: "lv",
    29: "se",
    30: "fo",
    31: "fa",
    32: "ru",
    33: "zh",
    34: "nl-BE",
    35: "ga",
    36: "sq",
    37: "ro",
    38: "cz",
    39: "sk",
    40: "si",
    41: "yi",
    42: "sr",
    43: "mk",
    44: "bg",
    45: "uk",
    46: "be",
    47: "uz",
    48: "kk",
    49: "az-Cyrl",
    50: "az-Arab",
    51: "hy",
    52: "ka",
    53: "mo",
    54: "ky",
    55: "tg",
    56: "tk",
    57: "mn-CN",
    58: "mn",
    59: "ps",
    60: "ks",
    61: "ku",
    62: "sd",
    63: "bo",
    64: "ne",
    65: "sa",
    66: "mr",
    67: "bn",
    68: "as",
    69: "gu",
    70: "pa",
    71: "or",
    72: "ml",
    73: "kn",
    74: "ta",
    75: "te",
    76: "si",
    77: "my",
    78: "km",
    79: "lo",
    80: "vi",
    81: "id",
    82: "tl",
    83: "ms",
    84: "ms-Arab",
    85: "am",
    86: "ti",
    87: "om",
    88: "so",
    89: "sw",
    90: "rw",
    91: "rn",
    92: "ny",
    93: "mg",
    94: "eo",
    128: "cy",
    129: "eu",
    130: "ca",
    131: "la",
    132: "qu",
    133: "gn",
    134: "ay",
    135: "tt",
    136: "ug",
    137: "dz",
    138: "jv",
    139: "su",
    140: "gl",
    141: "af",
    142: "br",
    143: "iu",
    144: "gd",
    145: "gv",
    146: "ga",
    147: "to",
    148: "el-polyton",
    149: "kl",
    150: "az",
    151: "nn"
};
// MacOS language ID → MacOS script ID
//
// Note that the script ID is not sufficient to determine what encoding
// to use in TrueType files. For some languages, MacOS used a modification
// of a mainstream script. For example, an Icelandic name would be stored
// with smRoman in the TrueType naming table, but the actual encoding
// is a special Icelandic version of the normal Macintosh Roman encoding.
// As another example, Inuktitut uses an 8-bit encoding for Canadian Aboriginal
// Syllables but MacOS had run out of available script codes, so this was
// done as a (pretty radical) "modification" of Ethiopic.
//
// http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/Readme.txt
var macLanguageToScript = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 5,
    11: 1,
    12: 4,
    13: 0,
    14: 6,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 2,
    20: 4,
    21: 9,
    22: 21,
    23: 3,
    24: 29,
    25: 29,
    26: 29,
    27: 29,
    28: 29,
    29: 0,
    30: 0,
    31: 4,
    32: 7,
    33: 25,
    34: 0,
    35: 0,
    36: 0,
    37: 0,
    38: 29,
    39: 29,
    40: 0,
    41: 5,
    42: 7,
    43: 7,
    44: 7,
    45: 7,
    46: 7,
    47: 7,
    48: 7,
    49: 7,
    50: 4,
    51: 24,
    52: 23,
    53: 7,
    54: 7,
    55: 7,
    56: 7,
    57: 27,
    58: 7,
    59: 4,
    60: 4,
    61: 4,
    62: 4,
    63: 26,
    64: 9,
    65: 9,
    66: 9,
    67: 13,
    68: 13,
    69: 11,
    70: 10,
    71: 12,
    72: 17,
    73: 16,
    74: 14,
    75: 15,
    76: 18,
    77: 19,
    78: 20,
    79: 22,
    80: 30,
    81: 0,
    82: 0,
    83: 0,
    84: 4,
    85: 28,
    86: 28,
    87: 28,
    88: 0,
    89: 0,
    90: 0,
    91: 0,
    92: 0,
    93: 0,
    94: 0,
    128: 0,
    129: 0,
    130: 0,
    131: 0,
    132: 0,
    133: 0,
    134: 0,
    135: 7,
    136: 4,
    137: 26,
    138: 0,
    139: 0,
    140: 0,
    141: 0,
    142: 0,
    143: 28,
    144: 0,
    145: 0,
    146: 0,
    147: 0,
    148: 6,
    149: 0,
    150: 0,
    151: 0 // langNynorsk → smRoman
};
// While Microsoft indicates a region/country for all its language
// IDs, we omit the region code if it's equal to the "most likely
// region subtag" according to Unicode CLDR. For scripts, we omit
// the subtag if it is equal to the Suppress-Script entry in the
// IANA language subtag registry for IETF BCP 47.
//
// For example, Microsoft states that its language code 0x041A is
// Croatian in Croatia. We transform this to the BCP 47 language code 'hr'
// and not 'hr-HR' because Croatia is the default country for Croatian,
// according to Unicode CLDR. As another example, Microsoft states
// that 0x101A is Croatian (Latin) in Bosnia-Herzegovina. We transform
// this to 'hr-BA' and not 'hr-Latn-BA' because Latin is the default script
// for the Croatian language, according to IANA.
//
// http://www.unicode.org/cldr/charts/latest/supplemental/likely_subtags.html
// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
var windowsLanguages = {
    0x0436: "af",
    0x041C: "sq",
    0x0484: "gsw",
    0x045E: "am",
    0x1401: "ar-DZ",
    0x3C01: "ar-BH",
    0x0C01: "ar",
    0x0801: "ar-IQ",
    0x2C01: "ar-JO",
    0x3401: "ar-KW",
    0x3001: "ar-LB",
    0x1001: "ar-LY",
    0x1801: "ary",
    0x2001: "ar-OM",
    0x4001: "ar-QA",
    0x0401: "ar-SA",
    0x2801: "ar-SY",
    0x1C01: "aeb",
    0x3801: "ar-AE",
    0x2401: "ar-YE",
    0x042B: "hy",
    0x044D: "as",
    0x082C: "az-Cyrl",
    0x042C: "az",
    0x046D: "ba",
    0x042D: "eu",
    0x0423: "be",
    0x0845: "bn",
    0x0445: "bn-IN",
    0x201A: "bs-Cyrl",
    0x141A: "bs",
    0x047E: "br",
    0x0402: "bg",
    0x0403: "ca",
    0x0C04: "zh-HK",
    0x1404: "zh-MO",
    0x0804: "zh",
    0x1004: "zh-SG",
    0x0404: "zh-TW",
    0x0483: "co",
    0x041A: "hr",
    0x101A: "hr-BA",
    0x0405: "cs",
    0x0406: "da",
    0x048C: "prs",
    0x0465: "dv",
    0x0813: "nl-BE",
    0x0413: "nl",
    0x0C09: "en-AU",
    0x2809: "en-BZ",
    0x1009: "en-CA",
    0x2409: "en-029",
    0x4009: "en-IN",
    0x1809: "en-IE",
    0x2009: "en-JM",
    0x4409: "en-MY",
    0x1409: "en-NZ",
    0x3409: "en-PH",
    0x4809: "en-SG",
    0x1C09: "en-ZA",
    0x2C09: "en-TT",
    0x0809: "en-GB",
    0x0409: "en",
    0x3009: "en-ZW",
    0x0425: "et",
    0x0438: "fo",
    0x0464: "fil",
    0x040B: "fi",
    0x080C: "fr-BE",
    0x0C0C: "fr-CA",
    0x040C: "fr",
    0x140C: "fr-LU",
    0x180C: "fr-MC",
    0x100C: "fr-CH",
    0x0462: "fy",
    0x0456: "gl",
    0x0437: "ka",
    0x0C07: "de-AT",
    0x0407: "de",
    0x1407: "de-LI",
    0x1007: "de-LU",
    0x0807: "de-CH",
    0x0408: "el",
    0x046F: "kl",
    0x0447: "gu",
    0x0468: "ha",
    0x040D: "he",
    0x0439: "hi",
    0x040E: "hu",
    0x040F: "is",
    0x0470: "ig",
    0x0421: "id",
    0x045D: "iu",
    0x085D: "iu-Latn",
    0x083C: "ga",
    0x0434: "xh",
    0x0435: "zu",
    0x0410: "it",
    0x0810: "it-CH",
    0x0411: "ja",
    0x044B: "kn",
    0x043F: "kk",
    0x0453: "km",
    0x0486: "quc",
    0x0487: "rw",
    0x0441: "sw",
    0x0457: "kok",
    0x0412: "ko",
    0x0440: "ky",
    0x0454: "lo",
    0x0426: "lv",
    0x0427: "lt",
    0x082E: "dsb",
    0x046E: "lb",
    0x042F: "mk",
    0x083E: "ms-BN",
    0x043E: "ms",
    0x044C: "ml",
    0x043A: "mt",
    0x0481: "mi",
    0x047A: "arn",
    0x044E: "mr",
    0x047C: "moh",
    0x0450: "mn",
    0x0850: "mn-CN",
    0x0461: "ne",
    0x0414: "nb",
    0x0814: "nn",
    0x0482: "oc",
    0x0448: "or",
    0x0463: "ps",
    0x0415: "pl",
    0x0416: "pt",
    0x0816: "pt-PT",
    0x0446: "pa",
    0x046B: "qu-BO",
    0x086B: "qu-EC",
    0x0C6B: "qu",
    0x0418: "ro",
    0x0417: "rm",
    0x0419: "ru",
    0x243B: "smn",
    0x103B: "smj-NO",
    0x143B: "smj",
    0x0C3B: "se-FI",
    0x043B: "se",
    0x083B: "se-SE",
    0x203B: "sms",
    0x183B: "sma-NO",
    0x1C3B: "sms",
    0x044F: "sa",
    0x1C1A: "sr-Cyrl-BA",
    0x0C1A: "sr",
    0x181A: "sr-Latn-BA",
    0x081A: "sr-Latn",
    0x046C: "nso",
    0x0432: "tn",
    0x045B: "si",
    0x041B: "sk",
    0x0424: "sl",
    0x2C0A: "es-AR",
    0x400A: "es-BO",
    0x340A: "es-CL",
    0x240A: "es-CO",
    0x140A: "es-CR",
    0x1C0A: "es-DO",
    0x300A: "es-EC",
    0x440A: "es-SV",
    0x100A: "es-GT",
    0x480A: "es-HN",
    0x080A: "es-MX",
    0x4C0A: "es-NI",
    0x180A: "es-PA",
    0x3C0A: "es-PY",
    0x280A: "es-PE",
    0x500A: "es-PR",
    // Microsoft has defined two different language codes for
    // “Spanish with modern sorting” and “Spanish with traditional
    // sorting”. This makes sense for collation APIs, and it would be
    // possible to express this in BCP 47 language tags via Unicode
    // extensions (eg., es-u-co-trad is Spanish with traditional
    // sorting). However, for storing names in fonts, the distinction
    // does not make sense, so we give “es” in both cases.
    0x0C0A: "es",
    0x040A: "es",
    0x540A: "es-US",
    0x380A: "es-UY",
    0x200A: "es-VE",
    0x081D: "sv-FI",
    0x041D: "sv",
    0x045A: "syr",
    0x0428: "tg",
    0x085F: "tzm",
    0x0449: "ta",
    0x0444: "tt",
    0x044A: "te",
    0x041E: "th",
    0x0451: "bo",
    0x041F: "tr",
    0x0442: "tk",
    0x0480: "ug",
    0x0422: "uk",
    0x042E: "hsb",
    0x0420: "ur",
    0x0843: "uz-Cyrl",
    0x0443: "uz",
    0x042A: "vi",
    0x0452: "cy",
    0x0488: "wo",
    0x0485: "sah",
    0x0478: "ii",
    0x046A: "yo"
};
// Returns a IETF BCP 47 language code, for example 'zh-Hant'
// for 'Chinese in the traditional script'.
function getLanguageCode(platformID, languageID, ltag) {
    switch(platformID){
        case 0:
            if (languageID === 0xFFFF) return "und";
            else if (ltag) return ltag[languageID];
            break;
        case 1:
            return macLanguages[languageID];
        case 3:
            return windowsLanguages[languageID];
    }
    return undefined;
}
var utf16 = "utf-16";
// MacOS script ID → encoding. This table stores the default case,
// which can be overridden by macLanguageEncodings.
var macScriptEncodings = {
    0: "macintosh",
    1: "x-mac-japanese",
    2: "x-mac-chinesetrad",
    3: "x-mac-korean",
    6: "x-mac-greek",
    7: "x-mac-cyrillic",
    9: "x-mac-devanagai",
    10: "x-mac-gurmukhi",
    11: "x-mac-gujarati",
    12: "x-mac-oriya",
    13: "x-mac-bengali",
    14: "x-mac-tamil",
    15: "x-mac-telugu",
    16: "x-mac-kannada",
    17: "x-mac-malayalam",
    18: "x-mac-sinhalese",
    19: "x-mac-burmese",
    20: "x-mac-khmer",
    21: "x-mac-thai",
    22: "x-mac-lao",
    23: "x-mac-georgian",
    24: "x-mac-armenian",
    25: "x-mac-chinesesimp",
    26: "x-mac-tibetan",
    27: "x-mac-mongolian",
    28: "x-mac-ethiopic",
    29: "x-mac-ce",
    30: "x-mac-vietnamese",
    31: "x-mac-extarabic" // smExtArabic
};
// MacOS language ID → encoding. This table stores the exceptional
// cases, which override macScriptEncodings. For writing MacOS naming
// tables, we need to emit a MacOS script ID. Therefore, we cannot
// merge macScriptEncodings into macLanguageEncodings.
//
// http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/Readme.txt
var macLanguageEncodings = {
    15: "x-mac-icelandic",
    17: "x-mac-turkish",
    18: "x-mac-croatian",
    24: "x-mac-ce",
    25: "x-mac-ce",
    26: "x-mac-ce",
    27: "x-mac-ce",
    28: "x-mac-ce",
    30: "x-mac-icelandic",
    37: "x-mac-romanian",
    38: "x-mac-ce",
    39: "x-mac-ce",
    40: "x-mac-ce",
    143: "x-mac-inuit",
    146: "x-mac-gaelic" // langIrishGaelicScript
};
function getEncoding(platformID, encodingID, languageID) {
    switch(platformID){
        case 0:
            return utf16;
        case 1:
            return macLanguageEncodings[languageID] || macScriptEncodings[encodingID];
        case 3:
            if (encodingID === 1 || encodingID === 10) return utf16;
            break;
    }
    return undefined;
}
// Parse the naming `name` table.
// FIXME: Format 1 additional fields are not supported yet.
// ltag is the content of the `ltag' table, such as ['en', 'zh-Hans', 'de-CH-1904'].
function parseNameTable(data, start, ltag) {
    var name = {};
    var p = new parse.Parser(data, start);
    var format = p.parseUShort();
    var count = p.parseUShort();
    var stringOffset = p.offset + p.parseUShort();
    for(var i = 0; i < count; i++){
        var platformID = p.parseUShort();
        var encodingID = p.parseUShort();
        var languageID = p.parseUShort();
        var nameID = p.parseUShort();
        var property = nameTableNames[nameID] || nameID;
        var byteLength = p.parseUShort();
        var offset = p.parseUShort();
        var language = getLanguageCode(platformID, languageID, ltag);
        var encoding = getEncoding(platformID, encodingID, languageID);
        if (encoding !== undefined && language !== undefined) {
            var text = void 0;
            if (encoding === utf16) text = decode.UTF16(data, stringOffset + offset, byteLength);
            else text = decode.MACSTRING(data, stringOffset + offset, byteLength, encoding);
            if (text) {
                var translations = name[property];
                if (translations === undefined) translations = name[property] = {};
                translations[language] = text;
            }
        }
    }
    var langTagCount = 0;
    if (format === 1) // FIXME: Also handle Microsoft's 'name' table 1.
    langTagCount = p.parseUShort();
    return name;
}
// {23: 'foo'} → {'foo': 23}
// ['bar', 'baz'] → {'bar': 0, 'baz': 1}
function reverseDict(dict) {
    var result = {};
    for(var key in dict)result[dict[key]] = parseInt(key);
    return result;
}
function makeNameRecord(platformID, encodingID, languageID, nameID, length, offset) {
    return new table.Record("NameRecord", [
        {
            name: "platformID",
            type: "USHORT",
            value: platformID
        },
        {
            name: "encodingID",
            type: "USHORT",
            value: encodingID
        },
        {
            name: "languageID",
            type: "USHORT",
            value: languageID
        },
        {
            name: "nameID",
            type: "USHORT",
            value: nameID
        },
        {
            name: "length",
            type: "USHORT",
            value: length
        },
        {
            name: "offset",
            type: "USHORT",
            value: offset
        }
    ]);
}
// Finds the position of needle in haystack, or -1 if not there.
// Like String.indexOf(), but for arrays.
function findSubArray(needle, haystack) {
    var needleLength = needle.length;
    var limit = haystack.length - needleLength + 1;
    loop: for(var pos = 0; pos < limit; pos++)for(; pos < limit; pos++){
        for(var k = 0; k < needleLength; k++){
            if (haystack[pos + k] !== needle[k]) continue loop;
        }
        return pos;
    }
    return -1;
}
function addStringToPool(s, pool) {
    var offset = findSubArray(s, pool);
    if (offset < 0) {
        offset = pool.length;
        var i = 0;
        var len = s.length;
        for(; i < len; ++i)pool.push(s[i]);
    }
    return offset;
}
function makeNameTable(names, ltag) {
    var nameID;
    var nameIDs = [];
    var namesWithNumericKeys = {};
    var nameTableIds = reverseDict(nameTableNames);
    for(var key in names){
        var id = nameTableIds[key];
        if (id === undefined) id = key;
        nameID = parseInt(id);
        if (isNaN(nameID)) throw new Error('Name table entry "' + key + '" does not exist, see nameTableNames for complete list.');
        namesWithNumericKeys[nameID] = names[key];
        nameIDs.push(nameID);
    }
    var macLanguageIds = reverseDict(macLanguages);
    var windowsLanguageIds = reverseDict(windowsLanguages);
    var nameRecords = [];
    var stringPool = [];
    for(var i = 0; i < nameIDs.length; i++){
        nameID = nameIDs[i];
        var translations = namesWithNumericKeys[nameID];
        for(var lang in translations){
            var text = translations[lang];
            // For MacOS, we try to emit the name in the form that was introduced
            // in the initial version of the TrueType spec (in the late 1980s).
            // However, this can fail for various reasons: the requested BCP 47
            // language code might not have an old-style Mac equivalent;
            // we might not have a codec for the needed character encoding;
            // or the name might contain characters that cannot be expressed
            // in the old-style Macintosh encoding. In case of failure, we emit
            // the name in a more modern fashion (Unicode encoding with BCP 47
            // language tags) that is recognized by MacOS 10.5, released in 2009.
            // If fonts were only read by operating systems, we could simply
            // emit all names in the modern form; this would be much easier.
            // However, there are many applications and libraries that read
            // 'name' tables directly, and these will usually only recognize
            // the ancient form (silently skipping the unrecognized names).
            var macPlatform = 1; // Macintosh
            var macLanguage = macLanguageIds[lang];
            var macScript = macLanguageToScript[macLanguage];
            var macEncoding = getEncoding(macPlatform, macScript, macLanguage);
            var macName = encode.MACSTRING(text, macEncoding);
            if (macName === undefined) {
                macPlatform = 0; // Unicode
                macLanguage = ltag.indexOf(lang);
                if (macLanguage < 0) {
                    macLanguage = ltag.length;
                    ltag.push(lang);
                }
                macScript = 4; // Unicode 2.0 and later
                macName = encode.UTF16(text);
            }
            var macNameOffset = addStringToPool(macName, stringPool);
            nameRecords.push(makeNameRecord(macPlatform, macScript, macLanguage, nameID, macName.length, macNameOffset));
            var winLanguage = windowsLanguageIds[lang];
            if (winLanguage !== undefined) {
                var winName = encode.UTF16(text);
                var winNameOffset = addStringToPool(winName, stringPool);
                nameRecords.push(makeNameRecord(3, 1, winLanguage, nameID, winName.length, winNameOffset));
            }
        }
    }
    nameRecords.sort(function(a, b) {
        return a.platformID - b.platformID || a.encodingID - b.encodingID || a.languageID - b.languageID || a.nameID - b.nameID;
    });
    var t = new table.Table("name", [
        {
            name: "format",
            type: "USHORT",
            value: 0
        },
        {
            name: "count",
            type: "USHORT",
            value: nameRecords.length
        },
        {
            name: "stringOffset",
            type: "USHORT",
            value: 6 + nameRecords.length * 12
        }
    ]);
    for(var r = 0; r < nameRecords.length; r++)t.fields.push({
        name: "record_" + r,
        type: "RECORD",
        value: nameRecords[r]
    });
    t.fields.push({
        name: "strings",
        type: "LITERAL",
        value: stringPool
    });
    return t;
}
var _name = {
    parse: parseNameTable,
    make: makeNameTable
};
// The `OS/2` table contains metrics required in OpenType fonts.
var unicodeRanges = [
    {
        begin: 0x0000,
        end: 0x007F
    },
    {
        begin: 0x0080,
        end: 0x00FF
    },
    {
        begin: 0x0100,
        end: 0x017F
    },
    {
        begin: 0x0180,
        end: 0x024F
    },
    {
        begin: 0x0250,
        end: 0x02AF
    },
    {
        begin: 0x02B0,
        end: 0x02FF
    },
    {
        begin: 0x0300,
        end: 0x036F
    },
    {
        begin: 0x0370,
        end: 0x03FF
    },
    {
        begin: 0x2C80,
        end: 0x2CFF
    },
    {
        begin: 0x0400,
        end: 0x04FF
    },
    {
        begin: 0x0530,
        end: 0x058F
    },
    {
        begin: 0x0590,
        end: 0x05FF
    },
    {
        begin: 0xA500,
        end: 0xA63F
    },
    {
        begin: 0x0600,
        end: 0x06FF
    },
    {
        begin: 0x07C0,
        end: 0x07FF
    },
    {
        begin: 0x0900,
        end: 0x097F
    },
    {
        begin: 0x0980,
        end: 0x09FF
    },
    {
        begin: 0x0A00,
        end: 0x0A7F
    },
    {
        begin: 0x0A80,
        end: 0x0AFF
    },
    {
        begin: 0x0B00,
        end: 0x0B7F
    },
    {
        begin: 0x0B80,
        end: 0x0BFF
    },
    {
        begin: 0x0C00,
        end: 0x0C7F
    },
    {
        begin: 0x0C80,
        end: 0x0CFF
    },
    {
        begin: 0x0D00,
        end: 0x0D7F
    },
    {
        begin: 0x0E00,
        end: 0x0E7F
    },
    {
        begin: 0x0E80,
        end: 0x0EFF
    },
    {
        begin: 0x10A0,
        end: 0x10FF
    },
    {
        begin: 0x1B00,
        end: 0x1B7F
    },
    {
        begin: 0x1100,
        end: 0x11FF
    },
    {
        begin: 0x1E00,
        end: 0x1EFF
    },
    {
        begin: 0x1F00,
        end: 0x1FFF
    },
    {
        begin: 0x2000,
        end: 0x206F
    },
    {
        begin: 0x2070,
        end: 0x209F
    },
    {
        begin: 0x20A0,
        end: 0x20CF
    },
    {
        begin: 0x20D0,
        end: 0x20FF
    },
    {
        begin: 0x2100,
        end: 0x214F
    },
    {
        begin: 0x2150,
        end: 0x218F
    },
    {
        begin: 0x2190,
        end: 0x21FF
    },
    {
        begin: 0x2200,
        end: 0x22FF
    },
    {
        begin: 0x2300,
        end: 0x23FF
    },
    {
        begin: 0x2400,
        end: 0x243F
    },
    {
        begin: 0x2440,
        end: 0x245F
    },
    {
        begin: 0x2460,
        end: 0x24FF
    },
    {
        begin: 0x2500,
        end: 0x257F
    },
    {
        begin: 0x2580,
        end: 0x259F
    },
    {
        begin: 0x25A0,
        end: 0x25FF
    },
    {
        begin: 0x2600,
        end: 0x26FF
    },
    {
        begin: 0x2700,
        end: 0x27BF
    },
    {
        begin: 0x3000,
        end: 0x303F
    },
    {
        begin: 0x3040,
        end: 0x309F
    },
    {
        begin: 0x30A0,
        end: 0x30FF
    },
    {
        begin: 0x3100,
        end: 0x312F
    },
    {
        begin: 0x3130,
        end: 0x318F
    },
    {
        begin: 0xA840,
        end: 0xA87F
    },
    {
        begin: 0x3200,
        end: 0x32FF
    },
    {
        begin: 0x3300,
        end: 0x33FF
    },
    {
        begin: 0xAC00,
        end: 0xD7AF
    },
    {
        begin: 0xD800,
        end: 0xDFFF
    },
    {
        begin: 0x10900,
        end: 0x1091F
    },
    {
        begin: 0x4E00,
        end: 0x9FFF
    },
    {
        begin: 0xE000,
        end: 0xF8FF
    },
    {
        begin: 0x31C0,
        end: 0x31EF
    },
    {
        begin: 0xFB00,
        end: 0xFB4F
    },
    {
        begin: 0xFB50,
        end: 0xFDFF
    },
    {
        begin: 0xFE20,
        end: 0xFE2F
    },
    {
        begin: 0xFE10,
        end: 0xFE1F
    },
    {
        begin: 0xFE50,
        end: 0xFE6F
    },
    {
        begin: 0xFE70,
        end: 0xFEFF
    },
    {
        begin: 0xFF00,
        end: 0xFFEF
    },
    {
        begin: 0xFFF0,
        end: 0xFFFF
    },
    {
        begin: 0x0F00,
        end: 0x0FFF
    },
    {
        begin: 0x0700,
        end: 0x074F
    },
    {
        begin: 0x0780,
        end: 0x07BF
    },
    {
        begin: 0x0D80,
        end: 0x0DFF
    },
    {
        begin: 0x1000,
        end: 0x109F
    },
    {
        begin: 0x1200,
        end: 0x137F
    },
    {
        begin: 0x13A0,
        end: 0x13FF
    },
    {
        begin: 0x1400,
        end: 0x167F
    },
    {
        begin: 0x1680,
        end: 0x169F
    },
    {
        begin: 0x16A0,
        end: 0x16FF
    },
    {
        begin: 0x1780,
        end: 0x17FF
    },
    {
        begin: 0x1800,
        end: 0x18AF
    },
    {
        begin: 0x2800,
        end: 0x28FF
    },
    {
        begin: 0xA000,
        end: 0xA48F
    },
    {
        begin: 0x1700,
        end: 0x171F
    },
    {
        begin: 0x10300,
        end: 0x1032F
    },
    {
        begin: 0x10330,
        end: 0x1034F
    },
    {
        begin: 0x10400,
        end: 0x1044F
    },
    {
        begin: 0x1D000,
        end: 0x1D0FF
    },
    {
        begin: 0x1D400,
        end: 0x1D7FF
    },
    {
        begin: 0xFF000,
        end: 0xFFFFD
    },
    {
        begin: 0xFE00,
        end: 0xFE0F
    },
    {
        begin: 0xE0000,
        end: 0xE007F
    },
    {
        begin: 0x1900,
        end: 0x194F
    },
    {
        begin: 0x1950,
        end: 0x197F
    },
    {
        begin: 0x1980,
        end: 0x19DF
    },
    {
        begin: 0x1A00,
        end: 0x1A1F
    },
    {
        begin: 0x2C00,
        end: 0x2C5F
    },
    {
        begin: 0x2D30,
        end: 0x2D7F
    },
    {
        begin: 0x4DC0,
        end: 0x4DFF
    },
    {
        begin: 0xA800,
        end: 0xA82F
    },
    {
        begin: 0x10000,
        end: 0x1007F
    },
    {
        begin: 0x10140,
        end: 0x1018F
    },
    {
        begin: 0x10380,
        end: 0x1039F
    },
    {
        begin: 0x103A0,
        end: 0x103DF
    },
    {
        begin: 0x10450,
        end: 0x1047F
    },
    {
        begin: 0x10480,
        end: 0x104AF
    },
    {
        begin: 0x10800,
        end: 0x1083F
    },
    {
        begin: 0x10A00,
        end: 0x10A5F
    },
    {
        begin: 0x1D300,
        end: 0x1D35F
    },
    {
        begin: 0x12000,
        end: 0x123FF
    },
    {
        begin: 0x1D360,
        end: 0x1D37F
    },
    {
        begin: 0x1B80,
        end: 0x1BBF
    },
    {
        begin: 0x1C00,
        end: 0x1C4F
    },
    {
        begin: 0x1C50,
        end: 0x1C7F
    },
    {
        begin: 0xA880,
        end: 0xA8DF
    },
    {
        begin: 0xA900,
        end: 0xA92F
    },
    {
        begin: 0xA930,
        end: 0xA95F
    },
    {
        begin: 0xAA00,
        end: 0xAA5F
    },
    {
        begin: 0x10190,
        end: 0x101CF
    },
    {
        begin: 0x101D0,
        end: 0x101FF
    },
    {
        begin: 0x102A0,
        end: 0x102DF
    },
    {
        begin: 0x1F030,
        end: 0x1F09F
    } // Domino Tiles
];
function getUnicodeRange(unicode) {
    for(var i = 0; i < unicodeRanges.length; i += 1){
        var range = unicodeRanges[i];
        if (unicode >= range.begin && unicode < range.end) return i;
    }
    return -1;
}
// Parse the OS/2 and Windows metrics `OS/2` table
function parseOS2Table(data, start) {
    var os2 = {};
    var p = new parse.Parser(data, start);
    os2.version = p.parseUShort();
    os2.xAvgCharWidth = p.parseShort();
    os2.usWeightClass = p.parseUShort();
    os2.usWidthClass = p.parseUShort();
    os2.fsType = p.parseUShort();
    os2.ySubscriptXSize = p.parseShort();
    os2.ySubscriptYSize = p.parseShort();
    os2.ySubscriptXOffset = p.parseShort();
    os2.ySubscriptYOffset = p.parseShort();
    os2.ySuperscriptXSize = p.parseShort();
    os2.ySuperscriptYSize = p.parseShort();
    os2.ySuperscriptXOffset = p.parseShort();
    os2.ySuperscriptYOffset = p.parseShort();
    os2.yStrikeoutSize = p.parseShort();
    os2.yStrikeoutPosition = p.parseShort();
    os2.sFamilyClass = p.parseShort();
    os2.panose = [];
    for(var i = 0; i < 10; i++)os2.panose[i] = p.parseByte();
    os2.ulUnicodeRange1 = p.parseULong();
    os2.ulUnicodeRange2 = p.parseULong();
    os2.ulUnicodeRange3 = p.parseULong();
    os2.ulUnicodeRange4 = p.parseULong();
    os2.achVendID = String.fromCharCode(p.parseByte(), p.parseByte(), p.parseByte(), p.parseByte());
    os2.fsSelection = p.parseUShort();
    os2.usFirstCharIndex = p.parseUShort();
    os2.usLastCharIndex = p.parseUShort();
    os2.sTypoAscender = p.parseShort();
    os2.sTypoDescender = p.parseShort();
    os2.sTypoLineGap = p.parseShort();
    os2.usWinAscent = p.parseUShort();
    os2.usWinDescent = p.parseUShort();
    if (os2.version >= 1) {
        os2.ulCodePageRange1 = p.parseULong();
        os2.ulCodePageRange2 = p.parseULong();
    }
    if (os2.version >= 2) {
        os2.sxHeight = p.parseShort();
        os2.sCapHeight = p.parseShort();
        os2.usDefaultChar = p.parseUShort();
        os2.usBreakChar = p.parseUShort();
        os2.usMaxContent = p.parseUShort();
    }
    return os2;
}
function makeOS2Table(options) {
    return new table.Table("OS/2", [
        {
            name: "version",
            type: "USHORT",
            value: 0x0003
        },
        {
            name: "xAvgCharWidth",
            type: "SHORT",
            value: 0
        },
        {
            name: "usWeightClass",
            type: "USHORT",
            value: 0
        },
        {
            name: "usWidthClass",
            type: "USHORT",
            value: 0
        },
        {
            name: "fsType",
            type: "USHORT",
            value: 0
        },
        {
            name: "ySubscriptXSize",
            type: "SHORT",
            value: 650
        },
        {
            name: "ySubscriptYSize",
            type: "SHORT",
            value: 699
        },
        {
            name: "ySubscriptXOffset",
            type: "SHORT",
            value: 0
        },
        {
            name: "ySubscriptYOffset",
            type: "SHORT",
            value: 140
        },
        {
            name: "ySuperscriptXSize",
            type: "SHORT",
            value: 650
        },
        {
            name: "ySuperscriptYSize",
            type: "SHORT",
            value: 699
        },
        {
            name: "ySuperscriptXOffset",
            type: "SHORT",
            value: 0
        },
        {
            name: "ySuperscriptYOffset",
            type: "SHORT",
            value: 479
        },
        {
            name: "yStrikeoutSize",
            type: "SHORT",
            value: 49
        },
        {
            name: "yStrikeoutPosition",
            type: "SHORT",
            value: 258
        },
        {
            name: "sFamilyClass",
            type: "SHORT",
            value: 0
        },
        {
            name: "bFamilyType",
            type: "BYTE",
            value: 0
        },
        {
            name: "bSerifStyle",
            type: "BYTE",
            value: 0
        },
        {
            name: "bWeight",
            type: "BYTE",
            value: 0
        },
        {
            name: "bProportion",
            type: "BYTE",
            value: 0
        },
        {
            name: "bContrast",
            type: "BYTE",
            value: 0
        },
        {
            name: "bStrokeVariation",
            type: "BYTE",
            value: 0
        },
        {
            name: "bArmStyle",
            type: "BYTE",
            value: 0
        },
        {
            name: "bLetterform",
            type: "BYTE",
            value: 0
        },
        {
            name: "bMidline",
            type: "BYTE",
            value: 0
        },
        {
            name: "bXHeight",
            type: "BYTE",
            value: 0
        },
        {
            name: "ulUnicodeRange1",
            type: "ULONG",
            value: 0
        },
        {
            name: "ulUnicodeRange2",
            type: "ULONG",
            value: 0
        },
        {
            name: "ulUnicodeRange3",
            type: "ULONG",
            value: 0
        },
        {
            name: "ulUnicodeRange4",
            type: "ULONG",
            value: 0
        },
        {
            name: "achVendID",
            type: "CHARARRAY",
            value: "XXXX"
        },
        {
            name: "fsSelection",
            type: "USHORT",
            value: 0
        },
        {
            name: "usFirstCharIndex",
            type: "USHORT",
            value: 0
        },
        {
            name: "usLastCharIndex",
            type: "USHORT",
            value: 0
        },
        {
            name: "sTypoAscender",
            type: "SHORT",
            value: 0
        },
        {
            name: "sTypoDescender",
            type: "SHORT",
            value: 0
        },
        {
            name: "sTypoLineGap",
            type: "SHORT",
            value: 0
        },
        {
            name: "usWinAscent",
            type: "USHORT",
            value: 0
        },
        {
            name: "usWinDescent",
            type: "USHORT",
            value: 0
        },
        {
            name: "ulCodePageRange1",
            type: "ULONG",
            value: 0
        },
        {
            name: "ulCodePageRange2",
            type: "ULONG",
            value: 0
        },
        {
            name: "sxHeight",
            type: "SHORT",
            value: 0
        },
        {
            name: "sCapHeight",
            type: "SHORT",
            value: 0
        },
        {
            name: "usDefaultChar",
            type: "USHORT",
            value: 0
        },
        {
            name: "usBreakChar",
            type: "USHORT",
            value: 0
        },
        {
            name: "usMaxContext",
            type: "USHORT",
            value: 0
        }
    ], options);
}
var os2 = {
    parse: parseOS2Table,
    make: makeOS2Table,
    unicodeRanges: unicodeRanges,
    getUnicodeRange: getUnicodeRange
};
// The `post` table stores additional PostScript information, such as glyph names.
// Parse the PostScript `post` table
function parsePostTable(data, start) {
    var post = {};
    var p = new parse.Parser(data, start);
    post.version = p.parseVersion();
    post.italicAngle = p.parseFixed();
    post.underlinePosition = p.parseShort();
    post.underlineThickness = p.parseShort();
    post.isFixedPitch = p.parseULong();
    post.minMemType42 = p.parseULong();
    post.maxMemType42 = p.parseULong();
    post.minMemType1 = p.parseULong();
    post.maxMemType1 = p.parseULong();
    switch(post.version){
        case 1:
            post.names = standardNames.slice();
            break;
        case 2:
            post.numberOfGlyphs = p.parseUShort();
            post.glyphNameIndex = new Array(post.numberOfGlyphs);
            for(var i = 0; i < post.numberOfGlyphs; i++)post.glyphNameIndex[i] = p.parseUShort();
            post.names = [];
            for(var i$1 = 0; i$1 < post.numberOfGlyphs; i$1++)if (post.glyphNameIndex[i$1] >= standardNames.length) {
                var nameLength = p.parseChar();
                post.names.push(p.parseString(nameLength));
            }
            break;
        case 2.5:
            post.numberOfGlyphs = p.parseUShort();
            post.offset = new Array(post.numberOfGlyphs);
            for(var i$2 = 0; i$2 < post.numberOfGlyphs; i$2++)post.offset[i$2] = p.parseChar();
            break;
    }
    return post;
}
function makePostTable() {
    return new table.Table("post", [
        {
            name: "version",
            type: "FIXED",
            value: 0x00030000
        },
        {
            name: "italicAngle",
            type: "FIXED",
            value: 0
        },
        {
            name: "underlinePosition",
            type: "FWORD",
            value: 0
        },
        {
            name: "underlineThickness",
            type: "FWORD",
            value: 0
        },
        {
            name: "isFixedPitch",
            type: "ULONG",
            value: 0
        },
        {
            name: "minMemType42",
            type: "ULONG",
            value: 0
        },
        {
            name: "maxMemType42",
            type: "ULONG",
            value: 0
        },
        {
            name: "minMemType1",
            type: "ULONG",
            value: 0
        },
        {
            name: "maxMemType1",
            type: "ULONG",
            value: 0
        }
    ]);
}
var post = {
    parse: parsePostTable,
    make: makePostTable
};
// The `GSUB` table contains ligatures, among other things.
var subtableParsers = new Array(9); // subtableParsers[0] is unused
// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#SS
subtableParsers[1] = function parseLookup1() {
    var start = this.offset + this.relativeOffset;
    var substFormat = this.parseUShort();
    if (substFormat === 1) return {
        substFormat: 1,
        coverage: this.parsePointer(Parser.coverage),
        deltaGlyphId: this.parseUShort()
    };
    else if (substFormat === 2) return {
        substFormat: 2,
        coverage: this.parsePointer(Parser.coverage),
        substitute: this.parseOffset16List()
    };
    check.assert(false, "0x" + start.toString(16) + ": lookup type 1 format must be 1 or 2.");
};
// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#MS
subtableParsers[2] = function parseLookup2() {
    var substFormat = this.parseUShort();
    check.argument(substFormat === 1, "GSUB Multiple Substitution Subtable identifier-format must be 1");
    return {
        substFormat: substFormat,
        coverage: this.parsePointer(Parser.coverage),
        sequences: this.parseListOfLists()
    };
};
// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#AS
subtableParsers[3] = function parseLookup3() {
    var substFormat = this.parseUShort();
    check.argument(substFormat === 1, "GSUB Alternate Substitution Subtable identifier-format must be 1");
    return {
        substFormat: substFormat,
        coverage: this.parsePointer(Parser.coverage),
        alternateSets: this.parseListOfLists()
    };
};
// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#LS
subtableParsers[4] = function parseLookup4() {
    var substFormat = this.parseUShort();
    check.argument(substFormat === 1, "GSUB ligature table identifier-format must be 1");
    return {
        substFormat: substFormat,
        coverage: this.parsePointer(Parser.coverage),
        ligatureSets: this.parseListOfLists(function() {
            return {
                ligGlyph: this.parseUShort(),
                components: this.parseUShortList(this.parseUShort() - 1)
            };
        })
    };
};
var lookupRecordDesc = {
    sequenceIndex: Parser.uShort,
    lookupListIndex: Parser.uShort
};
// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#CSF
subtableParsers[5] = function parseLookup5() {
    var start = this.offset + this.relativeOffset;
    var substFormat = this.parseUShort();
    if (substFormat === 1) return {
        substFormat: substFormat,
        coverage: this.parsePointer(Parser.coverage),
        ruleSets: this.parseListOfLists(function() {
            var glyphCount = this.parseUShort();
            var substCount = this.parseUShort();
            return {
                input: this.parseUShortList(glyphCount - 1),
                lookupRecords: this.parseRecordList(substCount, lookupRecordDesc)
            };
        })
    };
    else if (substFormat === 2) return {
        substFormat: substFormat,
        coverage: this.parsePointer(Parser.coverage),
        classDef: this.parsePointer(Parser.classDef),
        classSets: this.parseListOfLists(function() {
            var glyphCount = this.parseUShort();
            var substCount = this.parseUShort();
            return {
                classes: this.parseUShortList(glyphCount - 1),
                lookupRecords: this.parseRecordList(substCount, lookupRecordDesc)
            };
        })
    };
    else if (substFormat === 3) {
        var glyphCount = this.parseUShort();
        var substCount = this.parseUShort();
        return {
            substFormat: substFormat,
            coverages: this.parseList(glyphCount, Parser.pointer(Parser.coverage)),
            lookupRecords: this.parseRecordList(substCount, lookupRecordDesc)
        };
    }
    check.assert(false, "0x" + start.toString(16) + ": lookup type 5 format must be 1, 2 or 3.");
};
// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#CC
subtableParsers[6] = function parseLookup6() {
    var start = this.offset + this.relativeOffset;
    var substFormat = this.parseUShort();
    if (substFormat === 1) return {
        substFormat: 1,
        coverage: this.parsePointer(Parser.coverage),
        chainRuleSets: this.parseListOfLists(function() {
            return {
                backtrack: this.parseUShortList(),
                input: this.parseUShortList(this.parseShort() - 1),
                lookahead: this.parseUShortList(),
                lookupRecords: this.parseRecordList(lookupRecordDesc)
            };
        })
    };
    else if (substFormat === 2) return {
        substFormat: 2,
        coverage: this.parsePointer(Parser.coverage),
        backtrackClassDef: this.parsePointer(Parser.classDef),
        inputClassDef: this.parsePointer(Parser.classDef),
        lookaheadClassDef: this.parsePointer(Parser.classDef),
        chainClassSet: this.parseListOfLists(function() {
            return {
                backtrack: this.parseUShortList(),
                input: this.parseUShortList(this.parseShort() - 1),
                lookahead: this.parseUShortList(),
                lookupRecords: this.parseRecordList(lookupRecordDesc)
            };
        })
    };
    else if (substFormat === 3) return {
        substFormat: 3,
        backtrackCoverage: this.parseList(Parser.pointer(Parser.coverage)),
        inputCoverage: this.parseList(Parser.pointer(Parser.coverage)),
        lookaheadCoverage: this.parseList(Parser.pointer(Parser.coverage)),
        lookupRecords: this.parseRecordList(lookupRecordDesc)
    };
    check.assert(false, "0x" + start.toString(16) + ": lookup type 6 format must be 1, 2 or 3.");
};
// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#ES
subtableParsers[7] = function parseLookup7() {
    // Extension Substitution subtable
    var substFormat = this.parseUShort();
    check.argument(substFormat === 1, "GSUB Extension Substitution subtable identifier-format must be 1");
    var extensionLookupType = this.parseUShort();
    var extensionParser = new Parser(this.data, this.offset + this.parseULong());
    return {
        substFormat: 1,
        lookupType: extensionLookupType,
        extension: subtableParsers[extensionLookupType].call(extensionParser)
    };
};
// https://www.microsoft.com/typography/OTSPEC/GSUB.htm#RCCS
subtableParsers[8] = function parseLookup8() {
    var substFormat = this.parseUShort();
    check.argument(substFormat === 1, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1");
    return {
        substFormat: substFormat,
        coverage: this.parsePointer(Parser.coverage),
        backtrackCoverage: this.parseList(Parser.pointer(Parser.coverage)),
        lookaheadCoverage: this.parseList(Parser.pointer(Parser.coverage)),
        substitutes: this.parseUShortList()
    };
};
// https://www.microsoft.com/typography/OTSPEC/gsub.htm
function parseGsubTable(data, start) {
    start = start || 0;
    var p = new Parser(data, start);
    var tableVersion = p.parseVersion(1);
    check.argument(tableVersion === 1 || tableVersion === 1.1, "Unsupported GSUB table version.");
    if (tableVersion === 1) return {
        version: tableVersion,
        scripts: p.parseScriptList(),
        features: p.parseFeatureList(),
        lookups: p.parseLookupList(subtableParsers)
    };
    else return {
        version: tableVersion,
        scripts: p.parseScriptList(),
        features: p.parseFeatureList(),
        lookups: p.parseLookupList(subtableParsers),
        variations: p.parseFeatureVariationsList()
    };
}
// GSUB Writing //////////////////////////////////////////////
var subtableMakers = new Array(9);
subtableMakers[1] = function makeLookup1(subtable) {
    if (subtable.substFormat === 1) return new table.Table("substitutionTable", [
        {
            name: "substFormat",
            type: "USHORT",
            value: 1
        },
        {
            name: "coverage",
            type: "TABLE",
            value: new table.Coverage(subtable.coverage)
        },
        {
            name: "deltaGlyphID",
            type: "USHORT",
            value: subtable.deltaGlyphId
        }
    ]);
    else return new table.Table("substitutionTable", [
        {
            name: "substFormat",
            type: "USHORT",
            value: 2
        },
        {
            name: "coverage",
            type: "TABLE",
            value: new table.Coverage(subtable.coverage)
        }
    ].concat(table.ushortList("substitute", subtable.substitute)));
};
subtableMakers[2] = function makeLookup2(subtable) {
    check.assert(subtable.substFormat === 1, "Lookup type 2 substFormat must be 1.");
    return new table.Table("substitutionTable", [
        {
            name: "substFormat",
            type: "USHORT",
            value: 1
        },
        {
            name: "coverage",
            type: "TABLE",
            value: new table.Coverage(subtable.coverage)
        }
    ].concat(table.tableList("seqSet", subtable.sequences, function(sequenceSet) {
        return new table.Table("sequenceSetTable", table.ushortList("sequence", sequenceSet));
    })));
};
subtableMakers[3] = function makeLookup3(subtable) {
    check.assert(subtable.substFormat === 1, "Lookup type 3 substFormat must be 1.");
    return new table.Table("substitutionTable", [
        {
            name: "substFormat",
            type: "USHORT",
            value: 1
        },
        {
            name: "coverage",
            type: "TABLE",
            value: new table.Coverage(subtable.coverage)
        }
    ].concat(table.tableList("altSet", subtable.alternateSets, function(alternateSet) {
        return new table.Table("alternateSetTable", table.ushortList("alternate", alternateSet));
    })));
};
subtableMakers[4] = function makeLookup4(subtable) {
    check.assert(subtable.substFormat === 1, "Lookup type 4 substFormat must be 1.");
    return new table.Table("substitutionTable", [
        {
            name: "substFormat",
            type: "USHORT",
            value: 1
        },
        {
            name: "coverage",
            type: "TABLE",
            value: new table.Coverage(subtable.coverage)
        }
    ].concat(table.tableList("ligSet", subtable.ligatureSets, function(ligatureSet) {
        return new table.Table("ligatureSetTable", table.tableList("ligature", ligatureSet, function(ligature) {
            return new table.Table("ligatureTable", [
                {
                    name: "ligGlyph",
                    type: "USHORT",
                    value: ligature.ligGlyph
                }
            ].concat(table.ushortList("component", ligature.components, ligature.components.length + 1)));
        }));
    })));
};
subtableMakers[6] = function makeLookup6(subtable) {
    if (subtable.substFormat === 1) {
        var returnTable = new table.Table("chainContextTable", [
            {
                name: "substFormat",
                type: "USHORT",
                value: subtable.substFormat
            },
            {
                name: "coverage",
                type: "TABLE",
                value: new table.Coverage(subtable.coverage)
            }
        ].concat(table.tableList("chainRuleSet", subtable.chainRuleSets, function(chainRuleSet) {
            return new table.Table("chainRuleSetTable", table.tableList("chainRule", chainRuleSet, function(chainRule) {
                var tableData = table.ushortList("backtrackGlyph", chainRule.backtrack, chainRule.backtrack.length).concat(table.ushortList("inputGlyph", chainRule.input, chainRule.input.length + 1)).concat(table.ushortList("lookaheadGlyph", chainRule.lookahead, chainRule.lookahead.length)).concat(table.ushortList("substitution", [], chainRule.lookupRecords.length));
                chainRule.lookupRecords.forEach(function(record, i) {
                    tableData = tableData.concat({
                        name: "sequenceIndex" + i,
                        type: "USHORT",
                        value: record.sequenceIndex
                    }).concat({
                        name: "lookupListIndex" + i,
                        type: "USHORT",
                        value: record.lookupListIndex
                    });
                });
                return new table.Table("chainRuleTable", tableData);
            }));
        })));
        return returnTable;
    } else if (subtable.substFormat === 2) check.assert(false, "lookup type 6 format 2 is not yet supported.");
    else if (subtable.substFormat === 3) {
        var tableData = [
            {
                name: "substFormat",
                type: "USHORT",
                value: subtable.substFormat
            }
        ];
        tableData.push({
            name: "backtrackGlyphCount",
            type: "USHORT",
            value: subtable.backtrackCoverage.length
        });
        subtable.backtrackCoverage.forEach(function(coverage, i) {
            tableData.push({
                name: "backtrackCoverage" + i,
                type: "TABLE",
                value: new table.Coverage(coverage)
            });
        });
        tableData.push({
            name: "inputGlyphCount",
            type: "USHORT",
            value: subtable.inputCoverage.length
        });
        subtable.inputCoverage.forEach(function(coverage, i) {
            tableData.push({
                name: "inputCoverage" + i,
                type: "TABLE",
                value: new table.Coverage(coverage)
            });
        });
        tableData.push({
            name: "lookaheadGlyphCount",
            type: "USHORT",
            value: subtable.lookaheadCoverage.length
        });
        subtable.lookaheadCoverage.forEach(function(coverage, i) {
            tableData.push({
                name: "lookaheadCoverage" + i,
                type: "TABLE",
                value: new table.Coverage(coverage)
            });
        });
        tableData.push({
            name: "substitutionCount",
            type: "USHORT",
            value: subtable.lookupRecords.length
        });
        subtable.lookupRecords.forEach(function(record, i) {
            tableData = tableData.concat({
                name: "sequenceIndex" + i,
                type: "USHORT",
                value: record.sequenceIndex
            }).concat({
                name: "lookupListIndex" + i,
                type: "USHORT",
                value: record.lookupListIndex
            });
        });
        var returnTable$1 = new table.Table("chainContextTable", tableData);
        return returnTable$1;
    }
    check.assert(false, "lookup type 6 format must be 1, 2 or 3.");
};
function makeGsubTable(gsub) {
    return new table.Table("GSUB", [
        {
            name: "version",
            type: "ULONG",
            value: 0x10000
        },
        {
            name: "scripts",
            type: "TABLE",
            value: new table.ScriptList(gsub.scripts)
        },
        {
            name: "features",
            type: "TABLE",
            value: new table.FeatureList(gsub.features)
        },
        {
            name: "lookups",
            type: "TABLE",
            value: new table.LookupList(gsub.lookups, subtableMakers)
        }
    ]);
}
var gsub = {
    parse: parseGsubTable,
    make: makeGsubTable
};
// The `GPOS` table contains kerning pairs, among other things.
// Parse the metadata `meta` table.
// https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6meta.html
function parseMetaTable(data, start) {
    var p = new parse.Parser(data, start);
    var tableVersion = p.parseULong();
    check.argument(tableVersion === 1, "Unsupported META table version.");
    p.parseULong(); // flags - currently unused and set to 0
    p.parseULong(); // tableOffset
    var numDataMaps = p.parseULong();
    var tags = {};
    for(var i = 0; i < numDataMaps; i++){
        var tag = p.parseTag();
        var dataOffset = p.parseULong();
        var dataLength = p.parseULong();
        var text = decode.UTF8(data, start + dataOffset, dataLength);
        tags[tag] = text;
    }
    return tags;
}
function makeMetaTable(tags) {
    var numTags = Object.keys(tags).length;
    var stringPool = "";
    var stringPoolOffset = 16 + numTags * 12;
    var result = new table.Table("meta", [
        {
            name: "version",
            type: "ULONG",
            value: 1
        },
        {
            name: "flags",
            type: "ULONG",
            value: 0
        },
        {
            name: "offset",
            type: "ULONG",
            value: stringPoolOffset
        },
        {
            name: "numTags",
            type: "ULONG",
            value: numTags
        }
    ]);
    for(var tag in tags){
        var pos = stringPool.length;
        stringPool += tags[tag];
        result.fields.push({
            name: "tag " + tag,
            type: "TAG",
            value: tag
        });
        result.fields.push({
            name: "offset " + tag,
            type: "ULONG",
            value: stringPoolOffset + pos
        });
        result.fields.push({
            name: "length " + tag,
            type: "ULONG",
            value: tags[tag].length
        });
    }
    result.fields.push({
        name: "stringPool",
        type: "CHARARRAY",
        value: stringPool
    });
    return result;
}
var meta = {
    parse: parseMetaTable,
    make: makeMetaTable
};
// The `sfnt` wrapper provides organization for the tables in the font.
function log2(v) {
    return Math.log(v) / Math.log(2) | 0;
}
function computeCheckSum(bytes) {
    while(bytes.length % 4 !== 0)bytes.push(0);
    var sum = 0;
    for(var i = 0; i < bytes.length; i += 4)sum += (bytes[i] << 24) + (bytes[i + 1] << 16) + (bytes[i + 2] << 8) + bytes[i + 3];
    sum %= Math.pow(2, 32);
    return sum;
}
function makeTableRecord(tag, checkSum, offset, length) {
    return new table.Record("Table Record", [
        {
            name: "tag",
            type: "TAG",
            value: tag !== undefined ? tag : ""
        },
        {
            name: "checkSum",
            type: "ULONG",
            value: checkSum !== undefined ? checkSum : 0
        },
        {
            name: "offset",
            type: "ULONG",
            value: offset !== undefined ? offset : 0
        },
        {
            name: "length",
            type: "ULONG",
            value: length !== undefined ? length : 0
        }
    ]);
}
function makeSfntTable(tables) {
    var sfnt = new table.Table("sfnt", [
        {
            name: "version",
            type: "TAG",
            value: "OTTO"
        },
        {
            name: "numTables",
            type: "USHORT",
            value: 0
        },
        {
            name: "searchRange",
            type: "USHORT",
            value: 0
        },
        {
            name: "entrySelector",
            type: "USHORT",
            value: 0
        },
        {
            name: "rangeShift",
            type: "USHORT",
            value: 0
        }
    ]);
    sfnt.tables = tables;
    sfnt.numTables = tables.length;
    var highestPowerOf2 = Math.pow(2, log2(sfnt.numTables));
    sfnt.searchRange = 16 * highestPowerOf2;
    sfnt.entrySelector = log2(highestPowerOf2);
    sfnt.rangeShift = sfnt.numTables * 16 - sfnt.searchRange;
    var recordFields = [];
    var tableFields = [];
    var offset = sfnt.sizeOf() + makeTableRecord().sizeOf() * sfnt.numTables;
    while(offset % 4 !== 0){
        offset += 1;
        tableFields.push({
            name: "padding",
            type: "BYTE",
            value: 0
        });
    }
    for(var i = 0; i < tables.length; i += 1){
        var t = tables[i];
        check.argument(t.tableName.length === 4, "Table name" + t.tableName + " is invalid.");
        var tableLength = t.sizeOf();
        var tableRecord = makeTableRecord(t.tableName, computeCheckSum(t.encode()), offset, tableLength);
        recordFields.push({
            name: tableRecord.tag + " Table Record",
            type: "RECORD",
            value: tableRecord
        });
        tableFields.push({
            name: t.tableName + " table",
            type: "RECORD",
            value: t
        });
        offset += tableLength;
        check.argument(!isNaN(offset), "Something went wrong calculating the offset.");
        while(offset % 4 !== 0){
            offset += 1;
            tableFields.push({
                name: "padding",
                type: "BYTE",
                value: 0
            });
        }
    }
    // Table records need to be sorted alphabetically.
    recordFields.sort(function(r1, r2) {
        if (r1.value.tag > r2.value.tag) return 1;
        else return -1;
    });
    sfnt.fields = sfnt.fields.concat(recordFields);
    sfnt.fields = sfnt.fields.concat(tableFields);
    return sfnt;
}
// Get the metrics for a character. If the string has more than one character
// this function returns metrics for the first available character.
// You can provide optional fallback metrics if no characters are available.
function metricsForChar(font, chars, notFoundMetrics) {
    for(var i = 0; i < chars.length; i += 1){
        var glyphIndex = font.charToGlyphIndex(chars[i]);
        if (glyphIndex > 0) {
            var glyph = font.glyphs.get(glyphIndex);
            return glyph.getMetrics();
        }
    }
    return notFoundMetrics;
}
function average(vs) {
    var sum = 0;
    for(var i = 0; i < vs.length; i += 1)sum += vs[i];
    return sum / vs.length;
}
// Convert the font object to a SFNT data structure.
// This structure contains all the necessary tables and metadata to create a binary OTF file.
function fontToSfntTable(font) {
    var xMins = [];
    var yMins = [];
    var xMaxs = [];
    var yMaxs = [];
    var advanceWidths = [];
    var leftSideBearings = [];
    var rightSideBearings = [];
    var firstCharIndex;
    var lastCharIndex = 0;
    var ulUnicodeRange1 = 0;
    var ulUnicodeRange2 = 0;
    var ulUnicodeRange3 = 0;
    var ulUnicodeRange4 = 0;
    for(var i = 0; i < font.glyphs.length; i += 1){
        var glyph = font.glyphs.get(i);
        var unicode = glyph.unicode | 0;
        if (isNaN(glyph.advanceWidth)) throw new Error("Glyph " + glyph.name + " (" + i + "): advanceWidth is not a number.");
        if (firstCharIndex > unicode || firstCharIndex === undefined) // ignore .notdef char
        {
            if (unicode > 0) firstCharIndex = unicode;
        }
        if (lastCharIndex < unicode) lastCharIndex = unicode;
        var position = os2.getUnicodeRange(unicode);
        if (position < 32) ulUnicodeRange1 |= 1 << position;
        else if (position < 64) ulUnicodeRange2 |= 1 << position - 32;
        else if (position < 96) ulUnicodeRange3 |= 1 << position - 64;
        else if (position < 123) ulUnicodeRange4 |= 1 << position - 96;
        else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
        // Skip non-important characters.
        if (glyph.name === ".notdef") continue;
        var metrics = glyph.getMetrics();
        xMins.push(metrics.xMin);
        yMins.push(metrics.yMin);
        xMaxs.push(metrics.xMax);
        yMaxs.push(metrics.yMax);
        leftSideBearings.push(metrics.leftSideBearing);
        rightSideBearings.push(metrics.rightSideBearing);
        advanceWidths.push(glyph.advanceWidth);
    }
    var globals = {
        xMin: Math.min.apply(null, xMins),
        yMin: Math.min.apply(null, yMins),
        xMax: Math.max.apply(null, xMaxs),
        yMax: Math.max.apply(null, yMaxs),
        advanceWidthMax: Math.max.apply(null, advanceWidths),
        advanceWidthAvg: average(advanceWidths),
        minLeftSideBearing: Math.min.apply(null, leftSideBearings),
        maxLeftSideBearing: Math.max.apply(null, leftSideBearings),
        minRightSideBearing: Math.min.apply(null, rightSideBearings)
    };
    globals.ascender = font.ascender;
    globals.descender = font.descender;
    var headTable = head.make({
        flags: 3,
        unitsPerEm: font.unitsPerEm,
        xMin: globals.xMin,
        yMin: globals.yMin,
        xMax: globals.xMax,
        yMax: globals.yMax,
        lowestRecPPEM: 3,
        createdTimestamp: font.createdTimestamp
    });
    var hheaTable = hhea.make({
        ascender: globals.ascender,
        descender: globals.descender,
        advanceWidthMax: globals.advanceWidthMax,
        minLeftSideBearing: globals.minLeftSideBearing,
        minRightSideBearing: globals.minRightSideBearing,
        xMaxExtent: globals.maxLeftSideBearing + (globals.xMax - globals.xMin),
        numberOfHMetrics: font.glyphs.length
    });
    var maxpTable = maxp.make(font.glyphs.length);
    var os2Table = os2.make(Object.assign({
        xAvgCharWidth: Math.round(globals.advanceWidthAvg),
        usFirstCharIndex: firstCharIndex,
        usLastCharIndex: lastCharIndex,
        ulUnicodeRange1: ulUnicodeRange1,
        ulUnicodeRange2: ulUnicodeRange2,
        ulUnicodeRange3: ulUnicodeRange3,
        ulUnicodeRange4: ulUnicodeRange4,
        // See http://typophile.com/node/13081 for more info on vertical metrics.
        // We get metrics for typical characters (such as "x" for xHeight).
        // We provide some fallback characters if characters are unavailable: their
        // ordering was chosen experimentally.
        sTypoAscender: globals.ascender,
        sTypoDescender: globals.descender,
        sTypoLineGap: 0,
        usWinAscent: globals.yMax,
        usWinDescent: Math.abs(globals.yMin),
        ulCodePageRange1: 1,
        sxHeight: metricsForChar(font, "xyvw", {
            yMax: Math.round(globals.ascender / 2)
        }).yMax,
        sCapHeight: metricsForChar(font, "HIKLEFJMNTZBDPRAGOQSUVWXY", globals).yMax,
        usDefaultChar: font.hasChar(" ") ? 32 : 0,
        usBreakChar: font.hasChar(" ") ? 32 : 0
    }, font.tables.os2));
    var hmtxTable = hmtx.make(font.glyphs);
    var cmapTable = cmap.make(font.glyphs);
    var englishFamilyName = font.getEnglishName("fontFamily");
    var englishStyleName = font.getEnglishName("fontSubfamily");
    var englishFullName = englishFamilyName + " " + englishStyleName;
    var postScriptName = font.getEnglishName("postScriptName");
    if (!postScriptName) postScriptName = englishFamilyName.replace(/\s/g, "") + "-" + englishStyleName;
    var names = {};
    for(var n in font.names)names[n] = font.names[n];
    if (!names.uniqueID) names.uniqueID = {
        en: font.getEnglishName("manufacturer") + ":" + englishFullName
    };
    if (!names.postScriptName) names.postScriptName = {
        en: postScriptName
    };
    if (!names.preferredFamily) names.preferredFamily = font.names.fontFamily;
    if (!names.preferredSubfamily) names.preferredSubfamily = font.names.fontSubfamily;
    var languageTags = [];
    var nameTable = _name.make(names, languageTags);
    var ltagTable = languageTags.length > 0 ? ltag.make(languageTags) : undefined;
    var postTable = post.make();
    var cffTable = cff.make(font.glyphs, {
        version: font.getEnglishName("version"),
        fullName: englishFullName,
        familyName: englishFamilyName,
        weightName: englishStyleName,
        postScriptName: postScriptName,
        unitsPerEm: font.unitsPerEm,
        fontBBox: [
            0,
            globals.yMin,
            globals.ascender,
            globals.advanceWidthMax
        ]
    });
    var metaTable = font.metas && Object.keys(font.metas).length > 0 ? meta.make(font.metas) : undefined;
    // The order does not matter because makeSfntTable() will sort them.
    var tables = [
        headTable,
        hheaTable,
        maxpTable,
        os2Table,
        nameTable,
        cmapTable,
        postTable,
        cffTable,
        hmtxTable
    ];
    if (ltagTable) tables.push(ltagTable);
    // Optional tables
    if (font.tables.gsub) tables.push(gsub.make(font.tables.gsub));
    if (metaTable) tables.push(metaTable);
    var sfntTable = makeSfntTable(tables);
    // Compute the font's checkSum and store it in head.checkSumAdjustment.
    var bytes = sfntTable.encode();
    var checkSum = computeCheckSum(bytes);
    var tableFields = sfntTable.fields;
    var checkSumAdjusted = false;
    for(var i$1 = 0; i$1 < tableFields.length; i$1 += 1)if (tableFields[i$1].name === "head table") {
        tableFields[i$1].value.checkSumAdjustment = 0xB1B0AFBA - checkSum;
        checkSumAdjusted = true;
        break;
    }
    if (!checkSumAdjusted) throw new Error("Could not find head table with checkSum to adjust.");
    return sfntTable;
}
var sfnt = {
    make: makeSfntTable,
    fontToTable: fontToSfntTable,
    computeCheckSum: computeCheckSum
};
// The Layout object is the prototype of Substitution objects, and provides
function searchTag(arr, tag) {
    /* jshint bitwise: false */ var imin = 0;
    var imax = arr.length - 1;
    while(imin <= imax){
        var imid = imin + imax >>> 1;
        var val = arr[imid].tag;
        if (val === tag) return imid;
        else if (val < tag) imin = imid + 1;
        else imax = imid - 1;
    }
    // Not found: return -1-insertion point
    return -imin - 1;
}
function binSearch(arr, value) {
    /* jshint bitwise: false */ var imin = 0;
    var imax = arr.length - 1;
    while(imin <= imax){
        var imid = imin + imax >>> 1;
        var val = arr[imid];
        if (val === value) return imid;
        else if (val < value) imin = imid + 1;
        else imax = imid - 1;
    }
    // Not found: return -1-insertion point
    return -imin - 1;
}
// binary search in a list of ranges (coverage, class definition)
function searchRange(ranges, value) {
    // jshint bitwise: false
    var range;
    var imin = 0;
    var imax = ranges.length - 1;
    while(imin <= imax){
        var imid = imin + imax >>> 1;
        range = ranges[imid];
        var start = range.start;
        if (start === value) return range;
        else if (start < value) imin = imid + 1;
        else imax = imid - 1;
    }
    if (imin > 0) {
        range = ranges[imin - 1];
        if (value > range.end) return 0;
        return range;
    }
}
/**
 * @exports opentype.Layout
 * @class
 */ function Layout(font, tableName) {
    this.font = font;
    this.tableName = tableName;
}
Layout.prototype = {
    /**
     * Binary search an object by "tag" property
     * @instance
     * @function searchTag
     * @memberof opentype.Layout
     * @param  {Array} arr
     * @param  {string} tag
     * @return {number}
     */ searchTag: searchTag,
    /**
     * Binary search in a list of numbers
     * @instance
     * @function binSearch
     * @memberof opentype.Layout
     * @param  {Array} arr
     * @param  {number} value
     * @return {number}
     */ binSearch: binSearch,
    /**
     * Get or create the Layout table (GSUB, GPOS etc).
     * @param  {boolean} create - Whether to create a new one.
     * @return {Object} The GSUB or GPOS table.
     */ getTable: function(create) {
        var layout = this.font.tables[this.tableName];
        if (!layout && create) layout = this.font.tables[this.tableName] = this.createDefaultTable();
        return layout;
    },
    /**
     * Returns all scripts in the substitution table.
     * @instance
     * @return {Array}
     */ getScriptNames: function() {
        var layout = this.getTable();
        if (!layout) return [];
        return layout.scripts.map(function(script) {
            return script.tag;
        });
    },
    /**
     * Returns the best bet for a script name.
     * Returns 'DFLT' if it exists.
     * If not, returns 'latn' if it exists.
     * If neither exist, returns undefined.
     */ getDefaultScriptName: function() {
        var layout = this.getTable();
        if (!layout) return;
        var hasLatn = false;
        for(var i = 0; i < layout.scripts.length; i++){
            var name = layout.scripts[i].tag;
            if (name === "DFLT") return name;
            if (name === "latn") hasLatn = true;
        }
        if (hasLatn) return "latn";
    },
    /**
     * Returns all LangSysRecords in the given script.
     * @instance
     * @param {string} [script='DFLT']
     * @param {boolean} create - forces the creation of this script table if it doesn't exist.
     * @return {Object} An object with tag and script properties.
     */ getScriptTable: function(script, create) {
        var layout = this.getTable(create);
        if (layout) {
            script = script || "DFLT";
            var scripts = layout.scripts;
            var pos = searchTag(layout.scripts, script);
            if (pos >= 0) return scripts[pos].script;
            else if (create) {
                var scr = {
                    tag: script,
                    script: {
                        defaultLangSys: {
                            reserved: 0,
                            reqFeatureIndex: 0xffff,
                            featureIndexes: []
                        },
                        langSysRecords: []
                    }
                };
                scripts.splice(-1 - pos, 0, scr);
                return scr.script;
            }
        }
    },
    /**
     * Returns a language system table
     * @instance
     * @param {string} [script='DFLT']
     * @param {string} [language='dlft']
     * @param {boolean} create - forces the creation of this langSysTable if it doesn't exist.
     * @return {Object}
     */ getLangSysTable: function(script, language, create) {
        var scriptTable = this.getScriptTable(script, create);
        if (scriptTable) {
            if (!language || language === "dflt" || language === "DFLT") return scriptTable.defaultLangSys;
            var pos = searchTag(scriptTable.langSysRecords, language);
            if (pos >= 0) return scriptTable.langSysRecords[pos].langSys;
            else if (create) {
                var langSysRecord = {
                    tag: language,
                    langSys: {
                        reserved: 0,
                        reqFeatureIndex: 0xffff,
                        featureIndexes: []
                    }
                };
                scriptTable.langSysRecords.splice(-1 - pos, 0, langSysRecord);
                return langSysRecord.langSys;
            }
        }
    },
    /**
     * Get a specific feature table.
     * @instance
     * @param {string} [script='DFLT']
     * @param {string} [language='dlft']
     * @param {string} feature - One of the codes listed at https://www.microsoft.com/typography/OTSPEC/featurelist.htm
     * @param {boolean} create - forces the creation of the feature table if it doesn't exist.
     * @return {Object}
     */ getFeatureTable: function(script, language, feature, create) {
        var langSysTable = this.getLangSysTable(script, language, create);
        if (langSysTable) {
            var featureRecord;
            var featIndexes = langSysTable.featureIndexes;
            var allFeatures = this.font.tables[this.tableName].features;
            // The FeatureIndex array of indices is in arbitrary order,
            // even if allFeatures is sorted alphabetically by feature tag.
            for(var i = 0; i < featIndexes.length; i++){
                featureRecord = allFeatures[featIndexes[i]];
                if (featureRecord.tag === feature) return featureRecord.feature;
            }
            if (create) {
                var index = allFeatures.length;
                // Automatic ordering of features would require to shift feature indexes in the script list.
                check.assert(index === 0 || feature >= allFeatures[index - 1].tag, "Features must be added in alphabetical order.");
                featureRecord = {
                    tag: feature,
                    feature: {
                        params: 0,
                        lookupListIndexes: []
                    }
                };
                allFeatures.push(featureRecord);
                featIndexes.push(index);
                return featureRecord.feature;
            }
        }
    },
    /**
     * Get the lookup tables of a given type for a script/language/feature.
     * @instance
     * @param {string} [script='DFLT']
     * @param {string} [language='dlft']
     * @param {string} feature - 4-letter feature code
     * @param {number} lookupType - 1 to 9
     * @param {boolean} create - forces the creation of the lookup table if it doesn't exist, with no subtables.
     * @return {Object[]}
     */ getLookupTables: function(script, language, feature, lookupType, create) {
        var featureTable = this.getFeatureTable(script, language, feature, create);
        var tables = [];
        if (featureTable) {
            var lookupTable;
            var lookupListIndexes = featureTable.lookupListIndexes;
            var allLookups = this.font.tables[this.tableName].lookups;
            // lookupListIndexes are in no particular order, so use naive search.
            for(var i = 0; i < lookupListIndexes.length; i++){
                lookupTable = allLookups[lookupListIndexes[i]];
                if (lookupTable.lookupType === lookupType) tables.push(lookupTable);
            }
            if (tables.length === 0 && create) {
                lookupTable = {
                    lookupType: lookupType,
                    lookupFlag: 0,
                    subtables: [],
                    markFilteringSet: undefined
                };
                var index = allLookups.length;
                allLookups.push(lookupTable);
                lookupListIndexes.push(index);
                return [
                    lookupTable
                ];
            }
        }
        return tables;
    },
    /**
     * Find a glyph in a class definition table
     * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#class-definition-table
     * @param {object} classDefTable - an OpenType Layout class definition table
     * @param {number} glyphIndex - the index of the glyph to find
     * @returns {number} -1 if not found
     */ getGlyphClass: function(classDefTable, glyphIndex) {
        switch(classDefTable.format){
            case 1:
                if (classDefTable.startGlyph <= glyphIndex && glyphIndex < classDefTable.startGlyph + classDefTable.classes.length) return classDefTable.classes[glyphIndex - classDefTable.startGlyph];
                return 0;
            case 2:
                var range = searchRange(classDefTable.ranges, glyphIndex);
                return range ? range.classId : 0;
        }
    },
    /**
     * Find a glyph in a coverage table
     * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-table
     * @param {object} coverageTable - an OpenType Layout coverage table
     * @param {number} glyphIndex - the index of the glyph to find
     * @returns {number} -1 if not found
     */ getCoverageIndex: function(coverageTable, glyphIndex) {
        switch(coverageTable.format){
            case 1:
                var index = binSearch(coverageTable.glyphs, glyphIndex);
                return index >= 0 ? index : -1;
            case 2:
                var range = searchRange(coverageTable.ranges, glyphIndex);
                return range ? range.index + glyphIndex - range.start : -1;
        }
    },
    /**
     * Returns the list of glyph indexes of a coverage table.
     * Format 1: the list is stored raw
     * Format 2: compact list as range records.
     * @instance
     * @param  {Object} coverageTable
     * @return {Array}
     */ expandCoverage: function(coverageTable) {
        if (coverageTable.format === 1) return coverageTable.glyphs;
        else {
            var glyphs = [];
            var ranges = coverageTable.ranges;
            for(var i = 0; i < ranges.length; i++){
                var range = ranges[i];
                var start = range.start;
                var end = range.end;
                for(var j = start; j <= end; j++)glyphs.push(j);
            }
            return glyphs;
        }
    }
};
// The Position object provides utility methods to manipulate
/**
 * @exports opentype.Position
 * @class
 * @extends opentype.Layout
 * @param {opentype.Font}
 * @constructor
 */ function Position(font) {
    Layout.call(this, font, "gpos");
}
Position.prototype = Layout.prototype;
/**
 * Init some data for faster and easier access later.
 */ Position.prototype.init = function() {
    var script = this.getDefaultScriptName();
    this.defaultKerningTables = this.getKerningTables(script);
};
/**
 * Find a glyph pair in a list of lookup tables of type 2 and retrieve the xAdvance kerning value.
 *
 * @param {integer} leftIndex - left glyph index
 * @param {integer} rightIndex - right glyph index
 * @returns {integer}
 */ Position.prototype.getKerningValue = function(kerningLookups, leftIndex, rightIndex) {
    for(var i = 0; i < kerningLookups.length; i++){
        var subtables = kerningLookups[i].subtables;
        for(var j = 0; j < subtables.length; j++){
            var subtable = subtables[j];
            var covIndex = this.getCoverageIndex(subtable.coverage, leftIndex);
            if (covIndex < 0) continue;
            switch(subtable.posFormat){
                case 1:
                    // Search Pair Adjustment Positioning Format 1
                    var pairSet = subtable.pairSets[covIndex];
                    for(var k = 0; k < pairSet.length; k++){
                        var pair = pairSet[k];
                        if (pair.secondGlyph === rightIndex) return pair.value1 && pair.value1.xAdvance || 0;
                    }
                    break; // left glyph found, not right glyph - try next subtable
                case 2:
                    // Search Pair Adjustment Positioning Format 2
                    var class1 = this.getGlyphClass(subtable.classDef1, leftIndex);
                    var class2 = this.getGlyphClass(subtable.classDef2, rightIndex);
                    var pair$1 = subtable.classRecords[class1][class2];
                    return pair$1.value1 && pair$1.value1.xAdvance || 0;
            }
        }
    }
    return 0;
};
/**
 * List all kerning lookup tables.
 *
 * @param {string} [script='DFLT'] - use font.position.getDefaultScriptName() for a better default value
 * @param {string} [language='dflt']
 * @return {object[]} The list of kerning lookup tables (may be empty), or undefined if there is no GPOS table (and we should use the kern table)
 */ Position.prototype.getKerningTables = function(script, language) {
    if (this.font.tables.gpos) return this.getLookupTables(script, language, "kern", 2);
};
// The Substitution object provides utility methods to manipulate
/**
 * @exports opentype.Substitution
 * @class
 * @extends opentype.Layout
 * @param {opentype.Font}
 * @constructor
 */ function Substitution(font) {
    Layout.call(this, font, "gsub");
}
// Check if 2 arrays of primitives are equal.
function arraysEqual(ar1, ar2) {
    var n = ar1.length;
    if (n !== ar2.length) return false;
    for(var i = 0; i < n; i++){
        if (ar1[i] !== ar2[i]) return false;
    }
    return true;
}
// Find the first subtable of a lookup table in a particular format.
function getSubstFormat(lookupTable, format, defaultSubtable) {
    var subtables = lookupTable.subtables;
    for(var i = 0; i < subtables.length; i++){
        var subtable = subtables[i];
        if (subtable.substFormat === format) return subtable;
    }
    if (defaultSubtable) {
        subtables.push(defaultSubtable);
        return defaultSubtable;
    }
    return undefined;
}
Substitution.prototype = Layout.prototype;
/**
 * Create a default GSUB table.
 * @return {Object} gsub - The GSUB table.
 */ Substitution.prototype.createDefaultTable = function() {
    // Generate a default empty GSUB table with just a DFLT script and dflt lang sys.
    return {
        version: 1,
        scripts: [
            {
                tag: "DFLT",
                script: {
                    defaultLangSys: {
                        reserved: 0,
                        reqFeatureIndex: 0xffff,
                        featureIndexes: []
                    },
                    langSysRecords: []
                }
            }
        ],
        features: [],
        lookups: []
    };
};
/**
 * List all single substitutions (lookup type 1) for a given script, language, and feature.
 * @param {string} [script='DFLT']
 * @param {string} [language='dflt']
 * @param {string} feature - 4-character feature name ('aalt', 'salt', 'ss01'...)
 * @return {Array} substitutions - The list of substitutions.
 */ Substitution.prototype.getSingle = function(feature, script, language) {
    var substitutions = [];
    var lookupTables = this.getLookupTables(script, language, feature, 1);
    for(var idx = 0; idx < lookupTables.length; idx++){
        var subtables = lookupTables[idx].subtables;
        for(var i = 0; i < subtables.length; i++){
            var subtable = subtables[i];
            var glyphs = this.expandCoverage(subtable.coverage);
            var j = void 0;
            if (subtable.substFormat === 1) {
                var delta = subtable.deltaGlyphId;
                for(j = 0; j < glyphs.length; j++){
                    var glyph = glyphs[j];
                    substitutions.push({
                        sub: glyph,
                        by: glyph + delta
                    });
                }
            } else {
                var substitute = subtable.substitute;
                for(j = 0; j < glyphs.length; j++)substitutions.push({
                    sub: glyphs[j],
                    by: substitute[j]
                });
            }
        }
    }
    return substitutions;
};
/**
 * List all multiple substitutions (lookup type 2) for a given script, language, and feature.
 * @param {string} [script='DFLT']
 * @param {string} [language='dflt']
 * @param {string} feature - 4-character feature name ('ccmp', 'stch')
 * @return {Array} substitutions - The list of substitutions.
 */ Substitution.prototype.getMultiple = function(feature, script, language) {
    var substitutions = [];
    var lookupTables = this.getLookupTables(script, language, feature, 2);
    for(var idx = 0; idx < lookupTables.length; idx++){
        var subtables = lookupTables[idx].subtables;
        for(var i = 0; i < subtables.length; i++){
            var subtable = subtables[i];
            var glyphs = this.expandCoverage(subtable.coverage);
            var j = void 0;
            for(j = 0; j < glyphs.length; j++){
                var glyph = glyphs[j];
                var replacements = subtable.sequences[j];
                substitutions.push({
                    sub: glyph,
                    by: replacements
                });
            }
        }
    }
    return substitutions;
};
/**
 * List all alternates (lookup type 3) for a given script, language, and feature.
 * @param {string} [script='DFLT']
 * @param {string} [language='dflt']
 * @param {string} feature - 4-character feature name ('aalt', 'salt'...)
 * @return {Array} alternates - The list of alternates
 */ Substitution.prototype.getAlternates = function(feature, script, language) {
    var alternates = [];
    var lookupTables = this.getLookupTables(script, language, feature, 3);
    for(var idx = 0; idx < lookupTables.length; idx++){
        var subtables = lookupTables[idx].subtables;
        for(var i = 0; i < subtables.length; i++){
            var subtable = subtables[i];
            var glyphs = this.expandCoverage(subtable.coverage);
            var alternateSets = subtable.alternateSets;
            for(var j = 0; j < glyphs.length; j++)alternates.push({
                sub: glyphs[j],
                by: alternateSets[j]
            });
        }
    }
    return alternates;
};
/**
 * List all ligatures (lookup type 4) for a given script, language, and feature.
 * The result is an array of ligature objects like { sub: [ids], by: id }
 * @param {string} feature - 4-letter feature name ('liga', 'rlig', 'dlig'...)
 * @param {string} [script='DFLT']
 * @param {string} [language='dflt']
 * @return {Array} ligatures - The list of ligatures.
 */ Substitution.prototype.getLigatures = function(feature, script, language) {
    var ligatures = [];
    var lookupTables = this.getLookupTables(script, language, feature, 4);
    for(var idx = 0; idx < lookupTables.length; idx++){
        var subtables = lookupTables[idx].subtables;
        for(var i = 0; i < subtables.length; i++){
            var subtable = subtables[i];
            var glyphs = this.expandCoverage(subtable.coverage);
            var ligatureSets = subtable.ligatureSets;
            for(var j = 0; j < glyphs.length; j++){
                var startGlyph = glyphs[j];
                var ligSet = ligatureSets[j];
                for(var k = 0; k < ligSet.length; k++){
                    var lig = ligSet[k];
                    ligatures.push({
                        sub: [
                            startGlyph
                        ].concat(lig.components),
                        by: lig.ligGlyph
                    });
                }
            }
        }
    }
    return ligatures;
};
/**
 * Add or modify a single substitution (lookup type 1)
 * Format 2, more flexible, is always used.
 * @param {string} feature - 4-letter feature name ('liga', 'rlig', 'dlig'...)
 * @param {Object} substitution - { sub: id, by: id } (format 1 is not supported)
 * @param {string} [script='DFLT']
 * @param {string} [language='dflt']
 */ Substitution.prototype.addSingle = function(feature, substitution, script, language) {
    var lookupTable = this.getLookupTables(script, language, feature, 1, true)[0];
    var subtable = getSubstFormat(lookupTable, 2, {
        substFormat: 2,
        coverage: {
            format: 1,
            glyphs: []
        },
        substitute: []
    });
    check.assert(subtable.coverage.format === 1, "Single: unable to modify coverage table format " + subtable.coverage.format);
    var coverageGlyph = substitution.sub;
    var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
    if (pos < 0) {
        pos = -1 - pos;
        subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
        subtable.substitute.splice(pos, 0, 0);
    }
    subtable.substitute[pos] = substitution.by;
};
/**
 * Add or modify a multiple substitution (lookup type 2)
 * @param {string} feature - 4-letter feature name ('ccmp', 'stch')
 * @param {Object} substitution - { sub: id, by: [id] } for format 2.
 * @param {string} [script='DFLT']
 * @param {string} [language='dflt']
 */ Substitution.prototype.addMultiple = function(feature, substitution, script, language) {
    check.assert(substitution.by instanceof Array && substitution.by.length > 1, 'Multiple: "by" must be an array of two or more ids');
    var lookupTable = this.getLookupTables(script, language, feature, 2, true)[0];
    var subtable = getSubstFormat(lookupTable, 1, {
        substFormat: 1,
        coverage: {
            format: 1,
            glyphs: []
        },
        sequences: []
    });
    check.assert(subtable.coverage.format === 1, "Multiple: unable to modify coverage table format " + subtable.coverage.format);
    var coverageGlyph = substitution.sub;
    var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
    if (pos < 0) {
        pos = -1 - pos;
        subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
        subtable.sequences.splice(pos, 0, 0);
    }
    subtable.sequences[pos] = substitution.by;
};
/**
 * Add or modify an alternate substitution (lookup type 3)
 * @param {string} feature - 4-letter feature name ('liga', 'rlig', 'dlig'...)
 * @param {Object} substitution - { sub: id, by: [ids] }
 * @param {string} [script='DFLT']
 * @param {string} [language='dflt']
 */ Substitution.prototype.addAlternate = function(feature, substitution, script, language) {
    var lookupTable = this.getLookupTables(script, language, feature, 3, true)[0];
    var subtable = getSubstFormat(lookupTable, 1, {
        substFormat: 1,
        coverage: {
            format: 1,
            glyphs: []
        },
        alternateSets: []
    });
    check.assert(subtable.coverage.format === 1, "Alternate: unable to modify coverage table format " + subtable.coverage.format);
    var coverageGlyph = substitution.sub;
    var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
    if (pos < 0) {
        pos = -1 - pos;
        subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
        subtable.alternateSets.splice(pos, 0, 0);
    }
    subtable.alternateSets[pos] = substitution.by;
};
/**
 * Add a ligature (lookup type 4)
 * Ligatures with more components must be stored ahead of those with fewer components in order to be found
 * @param {string} feature - 4-letter feature name ('liga', 'rlig', 'dlig'...)
 * @param {Object} ligature - { sub: [ids], by: id }
 * @param {string} [script='DFLT']
 * @param {string} [language='dflt']
 */ Substitution.prototype.addLigature = function(feature, ligature, script, language) {
    var lookupTable = this.getLookupTables(script, language, feature, 4, true)[0];
    var subtable = lookupTable.subtables[0];
    if (!subtable) {
        subtable = {
            substFormat: 1,
            coverage: {
                format: 1,
                glyphs: []
            },
            ligatureSets: []
        };
        lookupTable.subtables[0] = subtable;
    }
    check.assert(subtable.coverage.format === 1, "Ligature: unable to modify coverage table format " + subtable.coverage.format);
    var coverageGlyph = ligature.sub[0];
    var ligComponents = ligature.sub.slice(1);
    var ligatureTable = {
        ligGlyph: ligature.by,
        components: ligComponents
    };
    var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
    if (pos >= 0) {
        // ligatureSet already exists
        var ligatureSet = subtable.ligatureSets[pos];
        for(var i = 0; i < ligatureSet.length; i++){
            // If ligature already exists, return.
            if (arraysEqual(ligatureSet[i].components, ligComponents)) return;
        }
        // ligature does not exist: add it.
        ligatureSet.push(ligatureTable);
    } else {
        // Create a new ligatureSet and add coverage for the first glyph.
        pos = -1 - pos;
        subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
        subtable.ligatureSets.splice(pos, 0, [
            ligatureTable
        ]);
    }
};
/**
 * List all feature data for a given script and language.
 * @param {string} feature - 4-letter feature name
 * @param {string} [script='DFLT']
 * @param {string} [language='dflt']
 * @return {Array} substitutions - The list of substitutions.
 */ Substitution.prototype.getFeature = function(feature, script, language) {
    if (/ss\d\d/.test(feature)) // ss01 - ss20
    return this.getSingle(feature, script, language);
    switch(feature){
        case "aalt":
        case "salt":
            return this.getSingle(feature, script, language).concat(this.getAlternates(feature, script, language));
        case "dlig":
        case "liga":
        case "rlig":
            return this.getLigatures(feature, script, language);
        case "ccmp":
            return this.getMultiple(feature, script, language).concat(this.getLigatures(feature, script, language));
        case "stch":
            return this.getMultiple(feature, script, language);
    }
    return undefined;
};
/**
 * Add a substitution to a feature for a given script and language.
 * @param {string} feature - 4-letter feature name
 * @param {Object} sub - the substitution to add (an object like { sub: id or [ids], by: id or [ids] })
 * @param {string} [script='DFLT']
 * @param {string} [language='dflt']
 */ Substitution.prototype.add = function(feature, sub, script, language) {
    if (/ss\d\d/.test(feature)) // ss01 - ss20
    return this.addSingle(feature, sub, script, language);
    switch(feature){
        case "aalt":
        case "salt":
            if (typeof sub.by === "number") return this.addSingle(feature, sub, script, language);
            return this.addAlternate(feature, sub, script, language);
        case "dlig":
        case "liga":
        case "rlig":
            return this.addLigature(feature, sub, script, language);
        case "ccmp":
            if (sub.by instanceof Array) return this.addMultiple(feature, sub, script, language);
            return this.addLigature(feature, sub, script, language);
    }
    return undefined;
};
function isBrowser() {
    return typeof window !== "undefined";
}
function nodeBufferToArrayBuffer(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for(var i = 0; i < buffer.length; ++i)view[i] = buffer[i];
    return ab;
}
function arrayBufferToNodeBuffer(ab) {
    var buffer = new Buffer(ab.byteLength);
    var view = new Uint8Array(ab);
    for(var i = 0; i < buffer.length; ++i)buffer[i] = view[i];
    return buffer;
}
function checkArgument(expression, message) {
    if (!expression) throw message;
}
// The `glyf` table describes the glyphs in TrueType outline format.
// Parse the coordinate data for a glyph.
function parseGlyphCoordinate(p, flag, previousValue, shortVectorBitMask, sameBitMask) {
    var v;
    if ((flag & shortVectorBitMask) > 0) {
        // The coordinate is 1 byte long.
        v = p.parseByte();
        // The `same` bit is re-used for short values to signify the sign of the value.
        if ((flag & sameBitMask) === 0) v = -v;
        v = previousValue + v;
    } else //  The coordinate is 2 bytes long.
    // If the `same` bit is set, the coordinate is the same as the previous coordinate.
    if ((flag & sameBitMask) > 0) v = previousValue;
    else // Parse the coordinate as a signed 16-bit delta value.
    v = previousValue + p.parseShort();
    return v;
}
// Parse a TrueType glyph.
function parseGlyph(glyph, data, start) {
    var p = new parse.Parser(data, start);
    glyph.numberOfContours = p.parseShort();
    glyph._xMin = p.parseShort();
    glyph._yMin = p.parseShort();
    glyph._xMax = p.parseShort();
    glyph._yMax = p.parseShort();
    var flags;
    var flag;
    if (glyph.numberOfContours > 0) {
        // This glyph is not a composite.
        var endPointIndices = glyph.endPointIndices = [];
        for(var i = 0; i < glyph.numberOfContours; i += 1)endPointIndices.push(p.parseUShort());
        glyph.instructionLength = p.parseUShort();
        glyph.instructions = [];
        for(var i$1 = 0; i$1 < glyph.instructionLength; i$1 += 1)glyph.instructions.push(p.parseByte());
        var numberOfCoordinates = endPointIndices[endPointIndices.length - 1] + 1;
        flags = [];
        for(var i$2 = 0; i$2 < numberOfCoordinates; i$2 += 1){
            flag = p.parseByte();
            flags.push(flag);
            // If bit 3 is set, we repeat this flag n times, where n is the next byte.
            if ((flag & 8) > 0) {
                var repeatCount = p.parseByte();
                for(var j = 0; j < repeatCount; j += 1){
                    flags.push(flag);
                    i$2 += 1;
                }
            }
        }
        check.argument(flags.length === numberOfCoordinates, "Bad flags.");
        if (endPointIndices.length > 0) {
            var points = [];
            var point;
            // X/Y coordinates are relative to the previous point, except for the first point which is relative to 0,0.
            if (numberOfCoordinates > 0) {
                for(var i$3 = 0; i$3 < numberOfCoordinates; i$3 += 1){
                    flag = flags[i$3];
                    point = {};
                    point.onCurve = !!(flag & 1);
                    point.lastPointOfContour = endPointIndices.indexOf(i$3) >= 0;
                    points.push(point);
                }
                var px = 0;
                for(var i$4 = 0; i$4 < numberOfCoordinates; i$4 += 1){
                    flag = flags[i$4];
                    point = points[i$4];
                    point.x = parseGlyphCoordinate(p, flag, px, 2, 16);
                    px = point.x;
                }
                var py = 0;
                for(var i$5 = 0; i$5 < numberOfCoordinates; i$5 += 1){
                    flag = flags[i$5];
                    point = points[i$5];
                    point.y = parseGlyphCoordinate(p, flag, py, 4, 32);
                    py = point.y;
                }
            }
            glyph.points = points;
        } else glyph.points = [];
    } else if (glyph.numberOfContours === 0) glyph.points = [];
    else {
        glyph.isComposite = true;
        glyph.points = [];
        glyph.components = [];
        var moreComponents = true;
        while(moreComponents){
            flags = p.parseUShort();
            var component = {
                glyphIndex: p.parseUShort(),
                xScale: 1,
                scale01: 0,
                scale10: 0,
                yScale: 1,
                dx: 0,
                dy: 0
            };
            if ((flags & 1) > 0) {
                // The arguments are words
                if ((flags & 2) > 0) {
                    // values are offset
                    component.dx = p.parseShort();
                    component.dy = p.parseShort();
                } else // values are matched points
                component.matchedPoints = [
                    p.parseUShort(),
                    p.parseUShort()
                ];
            } else // The arguments are bytes
            if ((flags & 2) > 0) {
                // values are offset
                component.dx = p.parseChar();
                component.dy = p.parseChar();
            } else // values are matched points
            component.matchedPoints = [
                p.parseByte(),
                p.parseByte()
            ];
            if ((flags & 8) > 0) // We have a scale
            component.xScale = component.yScale = p.parseF2Dot14();
            else if ((flags & 64) > 0) {
                // We have an X / Y scale
                component.xScale = p.parseF2Dot14();
                component.yScale = p.parseF2Dot14();
            } else if ((flags & 128) > 0) {
                // We have a 2x2 transformation
                component.xScale = p.parseF2Dot14();
                component.scale01 = p.parseF2Dot14();
                component.scale10 = p.parseF2Dot14();
                component.yScale = p.parseF2Dot14();
            }
            glyph.components.push(component);
            moreComponents = !!(flags & 32);
        }
        if (flags & 0x100) {
            // We have instructions
            glyph.instructionLength = p.parseUShort();
            glyph.instructions = [];
            for(var i$6 = 0; i$6 < glyph.instructionLength; i$6 += 1)glyph.instructions.push(p.parseByte());
        }
    }
}
// Transform an array of points and return a new array.
function transformPoints(points, transform) {
    var newPoints = [];
    for(var i = 0; i < points.length; i += 1){
        var pt = points[i];
        var newPt = {
            x: transform.xScale * pt.x + transform.scale01 * pt.y + transform.dx,
            y: transform.scale10 * pt.x + transform.yScale * pt.y + transform.dy,
            onCurve: pt.onCurve,
            lastPointOfContour: pt.lastPointOfContour
        };
        newPoints.push(newPt);
    }
    return newPoints;
}
function getContours(points) {
    var contours = [];
    var currentContour = [];
    for(var i = 0; i < points.length; i += 1){
        var pt = points[i];
        currentContour.push(pt);
        if (pt.lastPointOfContour) {
            contours.push(currentContour);
            currentContour = [];
        }
    }
    check.argument(currentContour.length === 0, "There are still points left in the current contour.");
    return contours;
}
// Convert the TrueType glyph outline to a Path.
function getPath(points) {
    var p = new Path();
    if (!points) return p;
    var contours = getContours(points);
    for(var contourIndex = 0; contourIndex < contours.length; ++contourIndex){
        var contour = contours[contourIndex];
        var prev = null;
        var curr = contour[contour.length - 1];
        var next = contour[0];
        if (curr.onCurve) p.moveTo(curr.x, curr.y);
        else if (next.onCurve) p.moveTo(next.x, next.y);
        else {
            // If both first and last points are off-curve, start at their middle.
            var start = {
                x: (curr.x + next.x) * 0.5,
                y: (curr.y + next.y) * 0.5
            };
            p.moveTo(start.x, start.y);
        }
        for(var i = 0; i < contour.length; ++i){
            prev = curr;
            curr = next;
            next = contour[(i + 1) % contour.length];
            if (curr.onCurve) // This is a straight line.
            p.lineTo(curr.x, curr.y);
            else {
                var prev2 = prev;
                var next2 = next;
                if (!prev.onCurve) prev2 = {
                    x: (curr.x + prev.x) * 0.5,
                    y: (curr.y + prev.y) * 0.5
                };
                if (!next.onCurve) next2 = {
                    x: (curr.x + next.x) * 0.5,
                    y: (curr.y + next.y) * 0.5
                };
                p.quadraticCurveTo(curr.x, curr.y, next2.x, next2.y);
            }
        }
        p.closePath();
    }
    return p;
}
function buildPath(glyphs, glyph) {
    if (glyph.isComposite) for(var j = 0; j < glyph.components.length; j += 1){
        var component = glyph.components[j];
        var componentGlyph = glyphs.get(component.glyphIndex);
        // Force the ttfGlyphLoader to parse the glyph.
        componentGlyph.getPath();
        if (componentGlyph.points) {
            var transformedPoints = void 0;
            if (component.matchedPoints === undefined) // component positioned by offset
            transformedPoints = transformPoints(componentGlyph.points, component);
            else {
                // component positioned by matched points
                if (component.matchedPoints[0] > glyph.points.length - 1 || component.matchedPoints[1] > componentGlyph.points.length - 1) throw Error("Matched points out of range in " + glyph.name);
                var firstPt = glyph.points[component.matchedPoints[0]];
                var secondPt = componentGlyph.points[component.matchedPoints[1]];
                var transform = {
                    xScale: component.xScale,
                    scale01: component.scale01,
                    scale10: component.scale10,
                    yScale: component.yScale,
                    dx: 0,
                    dy: 0
                };
                secondPt = transformPoints([
                    secondPt
                ], transform)[0];
                transform.dx = firstPt.x - secondPt.x;
                transform.dy = firstPt.y - secondPt.y;
                transformedPoints = transformPoints(componentGlyph.points, transform);
            }
            glyph.points = glyph.points.concat(transformedPoints);
        }
    }
    return getPath(glyph.points);
}
function parseGlyfTableAll(data, start, loca, font) {
    var glyphs = new glyphset.GlyphSet(font);
    // The last element of the loca table is invalid.
    for(var i = 0; i < loca.length - 1; i += 1){
        var offset = loca[i];
        var nextOffset = loca[i + 1];
        if (offset !== nextOffset) glyphs.push(i, glyphset.ttfGlyphLoader(font, i, parseGlyph, data, start + offset, buildPath));
        else glyphs.push(i, glyphset.glyphLoader(font, i));
    }
    return glyphs;
}
function parseGlyfTableOnLowMemory(data, start, loca, font) {
    var glyphs = new glyphset.GlyphSet(font);
    font._push = function(i) {
        var offset = loca[i];
        var nextOffset = loca[i + 1];
        if (offset !== nextOffset) glyphs.push(i, glyphset.ttfGlyphLoader(font, i, parseGlyph, data, start + offset, buildPath));
        else glyphs.push(i, glyphset.glyphLoader(font, i));
    };
    return glyphs;
}
// Parse all the glyphs according to the offsets from the `loca` table.
function parseGlyfTable(data, start, loca, font, opt) {
    if (opt.lowMemory) return parseGlyfTableOnLowMemory(data, start, loca, font);
    else return parseGlyfTableAll(data, start, loca, font);
}
var glyf = {
    getPath: getPath,
    parse: parseGlyfTable
};
/* A TrueType font hinting interpreter.
*
* (c) 2017 Axel Kittenberger
*
* This interpreter has been implemented according to this documentation:
* https://developer.apple.com/fonts/TrueType-Reference-Manual/RM05/Chap5.html
*
* According to the documentation F24DOT6 values are used for pixels.
* That means calculation is 1/64 pixel accurate and uses integer operations.
* However, Javascript has floating point operations by default and only
* those are available. One could make a case to simulate the 1/64 accuracy
* exactly by truncating after every division operation
* (for example with << 0) to get pixel exactly results as other TrueType
* implementations. It may make sense since some fonts are pixel optimized
* by hand using DELTAP instructions. The current implementation doesn't
* and rather uses full floating point precision.
*
* xScale, yScale and rotation is currently ignored.
*
* A few non-trivial instructions are missing as I didn't encounter yet
* a font that used them to test a possible implementation.
*
* Some fonts seem to use undocumented features regarding the twilight zone.
* Only some of them are implemented as they were encountered.
*
* The exports.DEBUG statements are removed on the minified distribution file.
*/ var instructionTable;
var exec;
var execGlyph;
var execComponent;
/*
* Creates a hinting object.
*
* There ought to be exactly one
* for each truetype font that is used for hinting.
*/ function Hinting(font) {
    // the font this hinting object is for
    this.font = font;
    this.getCommands = function(hPoints) {
        return glyf.getPath(hPoints).commands;
    };
    // cached states
    this._fpgmState = this._prepState = undefined;
    // errorState
    // 0 ... all okay
    // 1 ... had an error in a glyf,
    //       continue working but stop spamming
    //       the console
    // 2 ... error at prep, stop hinting at this ppem
    // 3 ... error at fpeg, stop hinting for this font at all
    this._errorState = 0;
}
/*
* Not rounding.
*/ function roundOff(v) {
    return v;
}
/*
* Rounding to grid.
*/ function roundToGrid(v) {
    //Rounding in TT is supposed to "symmetrical around zero"
    return Math.sign(v) * Math.round(Math.abs(v));
}
/*
* Rounding to double grid.
*/ function roundToDoubleGrid(v) {
    return Math.sign(v) * Math.round(Math.abs(v * 2)) / 2;
}
/*
* Rounding to half grid.
*/ function roundToHalfGrid(v) {
    return Math.sign(v) * (Math.round(Math.abs(v) + 0.5) - 0.5);
}
/*
* Rounding to up to grid.
*/ function roundUpToGrid(v) {
    return Math.sign(v) * Math.ceil(Math.abs(v));
}
/*
* Rounding to down to grid.
*/ function roundDownToGrid(v) {
    return Math.sign(v) * Math.floor(Math.abs(v));
}
/*
* Super rounding.
*/ var roundSuper = function(v) {
    var period = this.srPeriod;
    var phase = this.srPhase;
    var threshold = this.srThreshold;
    var sign = 1;
    if (v < 0) {
        v = -v;
        sign = -1;
    }
    v += threshold - phase;
    v = Math.trunc(v / period) * period;
    v += phase;
    // according to http://xgridfit.sourceforge.net/round.html
    if (v < 0) return phase * sign;
    return v * sign;
};
/*
* Unit vector of x-axis.
*/ var xUnitVector = {
    x: 1,
    y: 0,
    axis: "x",
    // Gets the projected distance between two points.
    // o1/o2 ... if true, respective original position is used.
    distance: function(p1, p2, o1, o2) {
        return (o1 ? p1.xo : p1.x) - (o2 ? p2.xo : p2.x);
    },
    // Moves point p so the moved position has the same relative
    // position to the moved positions of rp1 and rp2 than the
    // original positions had.
    //
    // See APPENDIX on INTERPOLATE at the bottom of this file.
    interpolate: function(p, rp1, rp2, pv) {
        var do1;
        var do2;
        var doa1;
        var doa2;
        var dm1;
        var dm2;
        var dt;
        if (!pv || pv === this) {
            do1 = p.xo - rp1.xo;
            do2 = p.xo - rp2.xo;
            dm1 = rp1.x - rp1.xo;
            dm2 = rp2.x - rp2.xo;
            doa1 = Math.abs(do1);
            doa2 = Math.abs(do2);
            dt = doa1 + doa2;
            if (dt === 0) {
                p.x = p.xo + (dm1 + dm2) / 2;
                return;
            }
            p.x = p.xo + (dm1 * doa2 + dm2 * doa1) / dt;
            return;
        }
        do1 = pv.distance(p, rp1, true, true);
        do2 = pv.distance(p, rp2, true, true);
        dm1 = pv.distance(rp1, rp1, false, true);
        dm2 = pv.distance(rp2, rp2, false, true);
        doa1 = Math.abs(do1);
        doa2 = Math.abs(do2);
        dt = doa1 + doa2;
        if (dt === 0) {
            xUnitVector.setRelative(p, p, (dm1 + dm2) / 2, pv, true);
            return;
        }
        xUnitVector.setRelative(p, p, (dm1 * doa2 + dm2 * doa1) / dt, pv, true);
    },
    // Slope of line normal to this
    normalSlope: Number.NEGATIVE_INFINITY,
    // Sets the point 'p' relative to point 'rp'
    // by the distance 'd'.
    //
    // See APPENDIX on SETRELATIVE at the bottom of this file.
    //
    // p   ... point to set
    // rp  ... reference point
    // d   ... distance on projection vector
    // pv  ... projection vector (undefined = this)
    // org ... if true, uses the original position of rp as reference.
    setRelative: function(p, rp, d, pv, org) {
        if (!pv || pv === this) {
            p.x = (org ? rp.xo : rp.x) + d;
            return;
        }
        var rpx = org ? rp.xo : rp.x;
        var rpy = org ? rp.yo : rp.y;
        var rpdx = rpx + d * pv.x;
        var rpdy = rpy + d * pv.y;
        p.x = rpdx + (p.y - rpdy) / pv.normalSlope;
    },
    // Slope of vector line.
    slope: 0,
    // Touches the point p.
    touch: function(p) {
        p.xTouched = true;
    },
    // Tests if a point p is touched.
    touched: function(p) {
        return p.xTouched;
    },
    // Untouches the point p.
    untouch: function(p) {
        p.xTouched = false;
    }
};
/*
* Unit vector of y-axis.
*/ var yUnitVector = {
    x: 0,
    y: 1,
    axis: "y",
    // Gets the projected distance between two points.
    // o1/o2 ... if true, respective original position is used.
    distance: function(p1, p2, o1, o2) {
        return (o1 ? p1.yo : p1.y) - (o2 ? p2.yo : p2.y);
    },
    // Moves point p so the moved position has the same relative
    // position to the moved positions of rp1 and rp2 than the
    // original positions had.
    //
    // See APPENDIX on INTERPOLATE at the bottom of this file.
    interpolate: function(p, rp1, rp2, pv) {
        var do1;
        var do2;
        var doa1;
        var doa2;
        var dm1;
        var dm2;
        var dt;
        if (!pv || pv === this) {
            do1 = p.yo - rp1.yo;
            do2 = p.yo - rp2.yo;
            dm1 = rp1.y - rp1.yo;
            dm2 = rp2.y - rp2.yo;
            doa1 = Math.abs(do1);
            doa2 = Math.abs(do2);
            dt = doa1 + doa2;
            if (dt === 0) {
                p.y = p.yo + (dm1 + dm2) / 2;
                return;
            }
            p.y = p.yo + (dm1 * doa2 + dm2 * doa1) / dt;
            return;
        }
        do1 = pv.distance(p, rp1, true, true);
        do2 = pv.distance(p, rp2, true, true);
        dm1 = pv.distance(rp1, rp1, false, true);
        dm2 = pv.distance(rp2, rp2, false, true);
        doa1 = Math.abs(do1);
        doa2 = Math.abs(do2);
        dt = doa1 + doa2;
        if (dt === 0) {
            yUnitVector.setRelative(p, p, (dm1 + dm2) / 2, pv, true);
            return;
        }
        yUnitVector.setRelative(p, p, (dm1 * doa2 + dm2 * doa1) / dt, pv, true);
    },
    // Slope of line normal to this.
    normalSlope: 0,
    // Sets the point 'p' relative to point 'rp'
    // by the distance 'd'
    //
    // See APPENDIX on SETRELATIVE at the bottom of this file.
    //
    // p   ... point to set
    // rp  ... reference point
    // d   ... distance on projection vector
    // pv  ... projection vector (undefined = this)
    // org ... if true, uses the original position of rp as reference.
    setRelative: function(p, rp, d, pv, org) {
        if (!pv || pv === this) {
            p.y = (org ? rp.yo : rp.y) + d;
            return;
        }
        var rpx = org ? rp.xo : rp.x;
        var rpy = org ? rp.yo : rp.y;
        var rpdx = rpx + d * pv.x;
        var rpdy = rpy + d * pv.y;
        p.y = rpdy + pv.normalSlope * (p.x - rpdx);
    },
    // Slope of vector line.
    slope: Number.POSITIVE_INFINITY,
    // Touches the point p.
    touch: function(p) {
        p.yTouched = true;
    },
    // Tests if a point p is touched.
    touched: function(p) {
        return p.yTouched;
    },
    // Untouches the point p.
    untouch: function(p) {
        p.yTouched = false;
    }
};
Object.freeze(xUnitVector);
Object.freeze(yUnitVector);
/*
* Creates a unit vector that is not x- or y-axis.
*/ function UnitVector(x, y) {
    this.x = x;
    this.y = y;
    this.axis = undefined;
    this.slope = y / x;
    this.normalSlope = -x / y;
    Object.freeze(this);
}
/*
* Gets the projected distance between two points.
* o1/o2 ... if true, respective original position is used.
*/ UnitVector.prototype.distance = function(p1, p2, o1, o2) {
    return this.x * xUnitVector.distance(p1, p2, o1, o2) + this.y * yUnitVector.distance(p1, p2, o1, o2);
};
/*
* Moves point p so the moved position has the same relative
* position to the moved positions of rp1 and rp2 than the
* original positions had.
*
* See APPENDIX on INTERPOLATE at the bottom of this file.
*/ UnitVector.prototype.interpolate = function(p, rp1, rp2, pv) {
    var dm1;
    var dm2;
    var do1;
    var do2;
    var doa1;
    var doa2;
    var dt;
    do1 = pv.distance(p, rp1, true, true);
    do2 = pv.distance(p, rp2, true, true);
    dm1 = pv.distance(rp1, rp1, false, true);
    dm2 = pv.distance(rp2, rp2, false, true);
    doa1 = Math.abs(do1);
    doa2 = Math.abs(do2);
    dt = doa1 + doa2;
    if (dt === 0) {
        this.setRelative(p, p, (dm1 + dm2) / 2, pv, true);
        return;
    }
    this.setRelative(p, p, (dm1 * doa2 + dm2 * doa1) / dt, pv, true);
};
/*
* Sets the point 'p' relative to point 'rp'
* by the distance 'd'
*
* See APPENDIX on SETRELATIVE at the bottom of this file.
*
* p   ...  point to set
* rp  ... reference point
* d   ... distance on projection vector
* pv  ... projection vector (undefined = this)
* org ... if true, uses the original position of rp as reference.
*/ UnitVector.prototype.setRelative = function(p, rp, d, pv, org) {
    pv = pv || this;
    var rpx = org ? rp.xo : rp.x;
    var rpy = org ? rp.yo : rp.y;
    var rpdx = rpx + d * pv.x;
    var rpdy = rpy + d * pv.y;
    var pvns = pv.normalSlope;
    var fvs = this.slope;
    var px = p.x;
    var py = p.y;
    p.x = (fvs * px - pvns * rpdx + rpdy - py) / (fvs - pvns);
    p.y = fvs * (p.x - px) + py;
};
/*
* Touches the point p.
*/ UnitVector.prototype.touch = function(p) {
    p.xTouched = true;
    p.yTouched = true;
};
/*
* Returns a unit vector with x/y coordinates.
*/ function getUnitVector(x, y) {
    var d = Math.sqrt(x * x + y * y);
    x /= d;
    y /= d;
    if (x === 1 && y === 0) return xUnitVector;
    else if (x === 0 && y === 1) return yUnitVector;
    else return new UnitVector(x, y);
}
/*
* Creates a point in the hinting engine.
*/ function HPoint(x, y, lastPointOfContour, onCurve) {
    this.x = this.xo = Math.round(x * 64) / 64; // hinted x value and original x-value
    this.y = this.yo = Math.round(y * 64) / 64; // hinted y value and original y-value
    this.lastPointOfContour = lastPointOfContour;
    this.onCurve = onCurve;
    this.prevPointOnContour = undefined;
    this.nextPointOnContour = undefined;
    this.xTouched = false;
    this.yTouched = false;
    Object.preventExtensions(this);
}
/*
* Returns the next touched point on the contour.
*
* v  ... unit vector to test touch axis.
*/ HPoint.prototype.nextTouched = function(v) {
    var p = this.nextPointOnContour;
    while(!v.touched(p) && p !== this)p = p.nextPointOnContour;
    return p;
};
/*
* Returns the previous touched point on the contour
*
* v  ... unit vector to test touch axis.
*/ HPoint.prototype.prevTouched = function(v) {
    var p = this.prevPointOnContour;
    while(!v.touched(p) && p !== this)p = p.prevPointOnContour;
    return p;
};
/*
* The zero point.
*/ var HPZero = Object.freeze(new HPoint(0, 0));
/*
* The default state of the interpreter.
*
* Note: Freezing the defaultState and then deriving from it
* makes the V8 Javascript engine going awkward,
* so this is avoided, albeit the defaultState shouldn't
* ever change.
*/ var defaultState = {
    cvCutIn: 1.0625,
    deltaBase: 9,
    deltaShift: 0.125,
    loop: 1,
    minDis: 1,
    autoFlip: true
};
/*
* The current state of the interpreter.
*
* env  ... 'fpgm' or 'prep' or 'glyf'
* prog ... the program
*/ function State(env, prog) {
    this.env = env;
    this.stack = [];
    this.prog = prog;
    switch(env){
        case "glyf":
            this.zp0 = this.zp1 = this.zp2 = 1;
            this.rp0 = this.rp1 = this.rp2 = 0;
        /* fall through */ case "prep":
            this.fv = this.pv = this.dpv = xUnitVector;
            this.round = roundToGrid;
    }
}
/*
* Executes a glyph program.
*
* This does the hinting for each glyph.
*
* Returns an array of moved points.
*
* glyph: the glyph to hint
* ppem: the size the glyph is rendered for
*/ Hinting.prototype.exec = function(glyph, ppem) {
    if (typeof ppem !== "number") throw new Error("Point size is not a number!");
    // Received a fatal error, don't do any hinting anymore.
    if (this._errorState > 2) return;
    var font = this.font;
    var prepState = this._prepState;
    if (!prepState || prepState.ppem !== ppem) {
        var fpgmState = this._fpgmState;
        if (!fpgmState) {
            // Executes the fpgm state.
            // This is used by fonts to define functions.
            State.prototype = defaultState;
            fpgmState = this._fpgmState = new State("fpgm", font.tables.fpgm);
            fpgmState.funcs = [];
            fpgmState.font = font;
            if (exports.DEBUG) {
                console.log("---EXEC FPGM---");
                fpgmState.step = -1;
            }
            try {
                exec(fpgmState);
            } catch (e) {
                console.log("Hinting error in FPGM:" + e);
                this._errorState = 3;
                return;
            }
        }
        // Executes the prep program for this ppem setting.
        // This is used by fonts to set cvt values
        // depending on to be rendered font size.
        State.prototype = fpgmState;
        prepState = this._prepState = new State("prep", font.tables.prep);
        prepState.ppem = ppem;
        // Creates a copy of the cvt table
        // and scales it to the current ppem setting.
        var oCvt = font.tables.cvt;
        if (oCvt) {
            var cvt = prepState.cvt = new Array(oCvt.length);
            var scale = ppem / font.unitsPerEm;
            for(var c = 0; c < oCvt.length; c++)cvt[c] = oCvt[c] * scale;
        } else prepState.cvt = [];
        if (exports.DEBUG) {
            console.log("---EXEC PREP---");
            prepState.step = -1;
        }
        try {
            exec(prepState);
        } catch (e1) {
            if (this._errorState < 2) console.log("Hinting error in PREP:" + e1);
            this._errorState = 2;
        }
    }
    if (this._errorState > 1) return;
    try {
        return execGlyph(glyph, prepState);
    } catch (e2) {
        if (this._errorState < 1) {
            console.log("Hinting error:" + e2);
            console.log("Note: further hinting errors are silenced");
        }
        this._errorState = 1;
        return undefined;
    }
};
/*
* Executes the hinting program for a glyph.
*/ execGlyph = function(glyph, prepState) {
    // original point positions
    var xScale = prepState.ppem / prepState.font.unitsPerEm;
    var yScale = xScale;
    var components = glyph.components;
    var contours;
    var gZone;
    var state;
    State.prototype = prepState;
    if (!components) {
        state = new State("glyf", glyph.instructions);
        if (exports.DEBUG) {
            console.log("---EXEC GLYPH---");
            state.step = -1;
        }
        execComponent(glyph, state, xScale, yScale);
        gZone = state.gZone;
    } else {
        var font = prepState.font;
        gZone = [];
        contours = [];
        for(var i = 0; i < components.length; i++){
            var c = components[i];
            var cg = font.glyphs.get(c.glyphIndex);
            state = new State("glyf", cg.instructions);
            if (exports.DEBUG) {
                console.log("---EXEC COMP " + i + "---");
                state.step = -1;
            }
            execComponent(cg, state, xScale, yScale);
            // appends the computed points to the result array
            // post processes the component points
            var dx = Math.round(c.dx * xScale);
            var dy = Math.round(c.dy * yScale);
            var gz = state.gZone;
            var cc = state.contours;
            for(var pi = 0; pi < gz.length; pi++){
                var p = gz[pi];
                p.xTouched = p.yTouched = false;
                p.xo = p.x = p.x + dx;
                p.yo = p.y = p.y + dy;
            }
            var gLen = gZone.length;
            gZone.push.apply(gZone, gz);
            for(var j = 0; j < cc.length; j++)contours.push(cc[j] + gLen);
        }
        if (glyph.instructions && !state.inhibitGridFit) {
            // the composite has instructions on its own
            state = new State("glyf", glyph.instructions);
            state.gZone = state.z0 = state.z1 = state.z2 = gZone;
            state.contours = contours;
            // note: HPZero cannot be used here, since
            //       the point might be modified
            gZone.push(new HPoint(0, 0), new HPoint(Math.round(glyph.advanceWidth * xScale), 0));
            if (exports.DEBUG) {
                console.log("---EXEC COMPOSITE---");
                state.step = -1;
            }
            exec(state);
            gZone.length -= 2;
        }
    }
    return gZone;
};
/*
* Executes the hinting program for a component of a multi-component glyph
* or of the glyph itself for a non-component glyph.
*/ execComponent = function(glyph, state, xScale, yScale) {
    var points = glyph.points || [];
    var pLen = points.length;
    var gZone = state.gZone = state.z0 = state.z1 = state.z2 = [];
    var contours = state.contours = [];
    // Scales the original points and
    // makes copies for the hinted points.
    var cp; // current point
    for(var i = 0; i < pLen; i++){
        cp = points[i];
        gZone[i] = new HPoint(cp.x * xScale, cp.y * yScale, cp.lastPointOfContour, cp.onCurve);
    }
    // Chain links the contours.
    var sp; // start point
    var np; // next point
    for(var i$1 = 0; i$1 < pLen; i$1++){
        cp = gZone[i$1];
        if (!sp) {
            sp = cp;
            contours.push(i$1);
        }
        if (cp.lastPointOfContour) {
            cp.nextPointOnContour = sp;
            sp.prevPointOnContour = cp;
            sp = undefined;
        } else {
            np = gZone[i$1 + 1];
            cp.nextPointOnContour = np;
            np.prevPointOnContour = cp;
        }
    }
    if (state.inhibitGridFit) return;
    if (exports.DEBUG) {
        console.log("PROCESSING GLYPH", state.stack);
        for(var i$2 = 0; i$2 < pLen; i$2++)console.log(i$2, gZone[i$2].x, gZone[i$2].y);
    }
    gZone.push(new HPoint(0, 0), new HPoint(Math.round(glyph.advanceWidth * xScale), 0));
    exec(state);
    // Removes the extra points.
    gZone.length -= 2;
    if (exports.DEBUG) {
        console.log("FINISHED GLYPH", state.stack);
        for(var i$3 = 0; i$3 < pLen; i$3++)console.log(i$3, gZone[i$3].x, gZone[i$3].y);
    }
};
/*
* Executes the program loaded in state.
*/ exec = function(state) {
    var prog = state.prog;
    if (!prog) return;
    var pLen = prog.length;
    var ins;
    for(state.ip = 0; state.ip < pLen; state.ip++){
        if (exports.DEBUG) state.step++;
        ins = instructionTable[prog[state.ip]];
        if (!ins) throw new Error("unknown instruction: 0x" + Number(prog[state.ip]).toString(16));
        ins(state);
    // very extensive debugging for each step
    /*
        if (exports.DEBUG) {
            var da;
            if (state.gZone) {
                da = [];
                for (let i = 0; i < state.gZone.length; i++)
                {
                    da.push(i + ' ' +
                        state.gZone[i].x * 64 + ' ' +
                        state.gZone[i].y * 64 + ' ' +
                        (state.gZone[i].xTouched ? 'x' : '') +
                        (state.gZone[i].yTouched ? 'y' : '')
                    );
                }
                console.log('GZ', da);
            }

            if (state.tZone) {
                da = [];
                for (let i = 0; i < state.tZone.length; i++) {
                    da.push(i + ' ' +
                        state.tZone[i].x * 64 + ' ' +
                        state.tZone[i].y * 64 + ' ' +
                        (state.tZone[i].xTouched ? 'x' : '') +
                        (state.tZone[i].yTouched ? 'y' : '')
                    );
                }
                console.log('TZ', da);
            }

            if (state.stack.length > 10) {
                console.log(
                    state.stack.length,
                    '...', state.stack.slice(state.stack.length - 10)
                );
            } else {
                console.log(state.stack.length, state.stack);
            }
        }
        */ }
};
/*
* Initializes the twilight zone.
*
* This is only done if a SZPx instruction
* refers to the twilight zone.
*/ function initTZone(state) {
    var tZone = state.tZone = new Array(state.gZone.length);
    // no idea if this is actually correct...
    for(var i = 0; i < tZone.length; i++)tZone[i] = new HPoint(0, 0);
}
/*
* Skips the instruction pointer ahead over an IF/ELSE block.
* handleElse .. if true breaks on matching ELSE
*/ function skip(state, handleElse) {
    var prog = state.prog;
    var ip = state.ip;
    var nesting = 1;
    var ins;
    do {
        ins = prog[++ip];
        if (ins === 0x58) nesting++;
        else if (ins === 0x59) nesting--;
        else if (ins === 0x40) ip += prog[ip + 1] + 1;
        else if (ins === 0x41) ip += 2 * prog[ip + 1] + 1;
        else if (ins >= 0xB0 && ins <= 0xB7) ip += ins - 0xB0 + 1;
        else if (ins >= 0xB8 && ins <= 0xBF) ip += (ins - 0xB8 + 1) * 2;
        else if (handleElse && nesting === 1 && ins === 0x1B) break;
    }while (nesting > 0);
    state.ip = ip;
}
/*----------------------------------------------------------*
*          And then a lot of instructions...                *
*----------------------------------------------------------*/ // SVTCA[a] Set freedom and projection Vectors To Coordinate Axis
// 0x00-0x01
function SVTCA(v, state) {
    if (exports.DEBUG) console.log(state.step, "SVTCA[" + v.axis + "]");
    state.fv = state.pv = state.dpv = v;
}
// SPVTCA[a] Set Projection Vector to Coordinate Axis
// 0x02-0x03
function SPVTCA(v, state) {
    if (exports.DEBUG) console.log(state.step, "SPVTCA[" + v.axis + "]");
    state.pv = state.dpv = v;
}
// SFVTCA[a] Set Freedom Vector to Coordinate Axis
// 0x04-0x05
function SFVTCA(v, state) {
    if (exports.DEBUG) console.log(state.step, "SFVTCA[" + v.axis + "]");
    state.fv = v;
}
// SPVTL[a] Set Projection Vector To Line
// 0x06-0x07
function SPVTL(a, state) {
    var stack = state.stack;
    var p2i = stack.pop();
    var p1i = stack.pop();
    var p2 = state.z2[p2i];
    var p1 = state.z1[p1i];
    if (exports.DEBUG) console.log("SPVTL[" + a + "]", p2i, p1i);
    var dx;
    var dy;
    if (!a) {
        dx = p1.x - p2.x;
        dy = p1.y - p2.y;
    } else {
        dx = p2.y - p1.y;
        dy = p1.x - p2.x;
    }
    state.pv = state.dpv = getUnitVector(dx, dy);
}
// SFVTL[a] Set Freedom Vector To Line
// 0x08-0x09
function SFVTL(a, state) {
    var stack = state.stack;
    var p2i = stack.pop();
    var p1i = stack.pop();
    var p2 = state.z2[p2i];
    var p1 = state.z1[p1i];
    if (exports.DEBUG) console.log("SFVTL[" + a + "]", p2i, p1i);
    var dx;
    var dy;
    if (!a) {
        dx = p1.x - p2.x;
        dy = p1.y - p2.y;
    } else {
        dx = p2.y - p1.y;
        dy = p1.x - p2.x;
    }
    state.fv = getUnitVector(dx, dy);
}
// SPVFS[] Set Projection Vector From Stack
// 0x0A
function SPVFS(state) {
    var stack = state.stack;
    var y = stack.pop();
    var x = stack.pop();
    if (exports.DEBUG) console.log(state.step, "SPVFS[]", y, x);
    state.pv = state.dpv = getUnitVector(x, y);
}
// SFVFS[] Set Freedom Vector From Stack
// 0x0B
function SFVFS(state) {
    var stack = state.stack;
    var y = stack.pop();
    var x = stack.pop();
    if (exports.DEBUG) console.log(state.step, "SPVFS[]", y, x);
    state.fv = getUnitVector(x, y);
}
// GPV[] Get Projection Vector
// 0x0C
function GPV(state) {
    var stack = state.stack;
    var pv = state.pv;
    if (exports.DEBUG) console.log(state.step, "GPV[]");
    stack.push(pv.x * 0x4000);
    stack.push(pv.y * 0x4000);
}
// GFV[] Get Freedom Vector
// 0x0C
function GFV(state) {
    var stack = state.stack;
    var fv = state.fv;
    if (exports.DEBUG) console.log(state.step, "GFV[]");
    stack.push(fv.x * 0x4000);
    stack.push(fv.y * 0x4000);
}
// SFVTPV[] Set Freedom Vector To Projection Vector
// 0x0E
function SFVTPV(state) {
    state.fv = state.pv;
    if (exports.DEBUG) console.log(state.step, "SFVTPV[]");
}
// ISECT[] moves point p to the InterSECTion of two lines
// 0x0F
function ISECT(state) {
    var stack = state.stack;
    var pa0i = stack.pop();
    var pa1i = stack.pop();
    var pb0i = stack.pop();
    var pb1i = stack.pop();
    var pi = stack.pop();
    var z0 = state.z0;
    var z1 = state.z1;
    var pa0 = z0[pa0i];
    var pa1 = z0[pa1i];
    var pb0 = z1[pb0i];
    var pb1 = z1[pb1i];
    var p = state.z2[pi];
    if (exports.DEBUG) console.log("ISECT[], ", pa0i, pa1i, pb0i, pb1i, pi);
    // math from
    // en.wikipedia.org/wiki/Line%E2%80%93line_intersection#Given_two_points_on_each_line
    var x1 = pa0.x;
    var y1 = pa0.y;
    var x2 = pa1.x;
    var y2 = pa1.y;
    var x3 = pb0.x;
    var y3 = pb0.y;
    var x4 = pb1.x;
    var y4 = pb1.y;
    var div = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    var f1 = x1 * y2 - y1 * x2;
    var f2 = x3 * y4 - y3 * x4;
    p.x = (f1 * (x3 - x4) - f2 * (x1 - x2)) / div;
    p.y = (f1 * (y3 - y4) - f2 * (y1 - y2)) / div;
}
// SRP0[] Set Reference Point 0
// 0x10
function SRP0(state) {
    state.rp0 = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "SRP0[]", state.rp0);
}
// SRP1[] Set Reference Point 1
// 0x11
function SRP1(state) {
    state.rp1 = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "SRP1[]", state.rp1);
}
// SRP1[] Set Reference Point 2
// 0x12
function SRP2(state) {
    state.rp2 = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "SRP2[]", state.rp2);
}
// SZP0[] Set Zone Pointer 0
// 0x13
function SZP0(state) {
    var n = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "SZP0[]", n);
    state.zp0 = n;
    switch(n){
        case 0:
            if (!state.tZone) initTZone(state);
            state.z0 = state.tZone;
            break;
        case 1:
            state.z0 = state.gZone;
            break;
        default:
            throw new Error("Invalid zone pointer");
    }
}
// SZP1[] Set Zone Pointer 1
// 0x14
function SZP1(state) {
    var n = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "SZP1[]", n);
    state.zp1 = n;
    switch(n){
        case 0:
            if (!state.tZone) initTZone(state);
            state.z1 = state.tZone;
            break;
        case 1:
            state.z1 = state.gZone;
            break;
        default:
            throw new Error("Invalid zone pointer");
    }
}
// SZP2[] Set Zone Pointer 2
// 0x15
function SZP2(state) {
    var n = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "SZP2[]", n);
    state.zp2 = n;
    switch(n){
        case 0:
            if (!state.tZone) initTZone(state);
            state.z2 = state.tZone;
            break;
        case 1:
            state.z2 = state.gZone;
            break;
        default:
            throw new Error("Invalid zone pointer");
    }
}
// SZPS[] Set Zone PointerS
// 0x16
function SZPS(state) {
    var n = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "SZPS[]", n);
    state.zp0 = state.zp1 = state.zp2 = n;
    switch(n){
        case 0:
            if (!state.tZone) initTZone(state);
            state.z0 = state.z1 = state.z2 = state.tZone;
            break;
        case 1:
            state.z0 = state.z1 = state.z2 = state.gZone;
            break;
        default:
            throw new Error("Invalid zone pointer");
    }
}
// SLOOP[] Set LOOP variable
// 0x17
function SLOOP(state) {
    state.loop = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "SLOOP[]", state.loop);
}
// RTG[] Round To Grid
// 0x18
function RTG(state) {
    if (exports.DEBUG) console.log(state.step, "RTG[]");
    state.round = roundToGrid;
}
// RTHG[] Round To Half Grid
// 0x19
function RTHG(state) {
    if (exports.DEBUG) console.log(state.step, "RTHG[]");
    state.round = roundToHalfGrid;
}
// SMD[] Set Minimum Distance
// 0x1A
function SMD(state) {
    var d = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "SMD[]", d);
    state.minDis = d / 0x40;
}
// ELSE[] ELSE clause
// 0x1B
function ELSE(state) {
    // This instruction has been reached by executing a then branch
    // so it just skips ahead until matching EIF.
    //
    // In case the IF was negative the IF[] instruction already
    // skipped forward over the ELSE[]
    if (exports.DEBUG) console.log(state.step, "ELSE[]");
    skip(state, false);
}
// JMPR[] JuMP Relative
// 0x1C
function JMPR(state) {
    var o = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "JMPR[]", o);
    // A jump by 1 would do nothing.
    state.ip += o - 1;
}
// SCVTCI[] Set Control Value Table Cut-In
// 0x1D
function SCVTCI(state) {
    var n = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "SCVTCI[]", n);
    state.cvCutIn = n / 0x40;
}
// DUP[] DUPlicate top stack element
// 0x20
function DUP(state) {
    var stack = state.stack;
    if (exports.DEBUG) console.log(state.step, "DUP[]");
    stack.push(stack[stack.length - 1]);
}
// POP[] POP top stack element
// 0x21
function POP(state) {
    if (exports.DEBUG) console.log(state.step, "POP[]");
    state.stack.pop();
}
// CLEAR[] CLEAR the stack
// 0x22
function CLEAR(state) {
    if (exports.DEBUG) console.log(state.step, "CLEAR[]");
    state.stack.length = 0;
}
// SWAP[] SWAP the top two elements on the stack
// 0x23
function SWAP(state) {
    var stack = state.stack;
    var a = stack.pop();
    var b = stack.pop();
    if (exports.DEBUG) console.log(state.step, "SWAP[]");
    stack.push(a);
    stack.push(b);
}
// DEPTH[] DEPTH of the stack
// 0x24
function DEPTH(state) {
    var stack = state.stack;
    if (exports.DEBUG) console.log(state.step, "DEPTH[]");
    stack.push(stack.length);
}
// LOOPCALL[] LOOPCALL function
// 0x2A
function LOOPCALL(state) {
    var stack = state.stack;
    var fn = stack.pop();
    var c = stack.pop();
    if (exports.DEBUG) console.log(state.step, "LOOPCALL[]", fn, c);
    // saves callers program
    var cip = state.ip;
    var cprog = state.prog;
    state.prog = state.funcs[fn];
    // executes the function
    for(var i = 0; i < c; i++){
        exec(state);
        if (exports.DEBUG) console.log(++state.step, i + 1 < c ? "next loopcall" : "done loopcall", i);
    }
    // restores the callers program
    state.ip = cip;
    state.prog = cprog;
}
// CALL[] CALL function
// 0x2B
function CALL(state) {
    var fn = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "CALL[]", fn);
    // saves callers program
    var cip = state.ip;
    var cprog = state.prog;
    state.prog = state.funcs[fn];
    // executes the function
    exec(state);
    // restores the callers program
    state.ip = cip;
    state.prog = cprog;
    if (exports.DEBUG) console.log(++state.step, "returning from", fn);
}
// CINDEX[] Copy the INDEXed element to the top of the stack
// 0x25
function CINDEX(state) {
    var stack = state.stack;
    var k = stack.pop();
    if (exports.DEBUG) console.log(state.step, "CINDEX[]", k);
    // In case of k == 1, it copies the last element after popping
    // thus stack.length - k.
    stack.push(stack[stack.length - k]);
}
// MINDEX[] Move the INDEXed element to the top of the stack
// 0x26
function MINDEX(state) {
    var stack = state.stack;
    var k = stack.pop();
    if (exports.DEBUG) console.log(state.step, "MINDEX[]", k);
    stack.push(stack.splice(stack.length - k, 1)[0]);
}
// FDEF[] Function DEFinition
// 0x2C
function FDEF(state) {
    if (state.env !== "fpgm") throw new Error("FDEF not allowed here");
    var stack = state.stack;
    var prog = state.prog;
    var ip = state.ip;
    var fn = stack.pop();
    var ipBegin = ip;
    if (exports.DEBUG) console.log(state.step, "FDEF[]", fn);
    while(prog[++ip] !== 0x2D);
    state.ip = ip;
    state.funcs[fn] = prog.slice(ipBegin + 1, ip);
}
// MDAP[a] Move Direct Absolute Point
// 0x2E-0x2F
function MDAP(round, state) {
    var pi = state.stack.pop();
    var p = state.z0[pi];
    var fv = state.fv;
    var pv = state.pv;
    if (exports.DEBUG) console.log(state.step, "MDAP[" + round + "]", pi);
    var d = pv.distance(p, HPZero);
    if (round) d = state.round(d);
    fv.setRelative(p, HPZero, d, pv);
    fv.touch(p);
    state.rp0 = state.rp1 = pi;
}
// IUP[a] Interpolate Untouched Points through the outline
// 0x30
function IUP(v, state) {
    var z2 = state.z2;
    var pLen = z2.length - 2;
    var cp;
    var pp;
    var np;
    if (exports.DEBUG) console.log(state.step, "IUP[" + v.axis + "]");
    for(var i = 0; i < pLen; i++){
        cp = z2[i]; // current point
        // if this point has been touched go on
        if (v.touched(cp)) continue;
        pp = cp.prevTouched(v);
        // no point on the contour has been touched?
        if (pp === cp) continue;
        np = cp.nextTouched(v);
        if (pp === np) // only one point on the contour has been touched
        // so simply moves the point like that
        v.setRelative(cp, cp, v.distance(pp, pp, false, true), v, true);
        v.interpolate(cp, pp, np, v);
    }
}
// SHP[] SHift Point using reference point
// 0x32-0x33
function SHP(a, state) {
    var stack = state.stack;
    var rpi = a ? state.rp1 : state.rp2;
    var rp = (a ? state.z0 : state.z1)[rpi];
    var fv = state.fv;
    var pv = state.pv;
    var loop = state.loop;
    var z2 = state.z2;
    while(loop--){
        var pi = stack.pop();
        var p = z2[pi];
        var d = pv.distance(rp, rp, false, true);
        fv.setRelative(p, p, d, pv);
        fv.touch(p);
        if (exports.DEBUG) console.log(state.step, (state.loop > 1 ? "loop " + (state.loop - loop) + ": " : "") + "SHP[" + (a ? "rp1" : "rp2") + "]", pi);
    }
    state.loop = 1;
}
// SHC[] SHift Contour using reference point
// 0x36-0x37
function SHC(a, state) {
    var stack = state.stack;
    var rpi = a ? state.rp1 : state.rp2;
    var rp = (a ? state.z0 : state.z1)[rpi];
    var fv = state.fv;
    var pv = state.pv;
    var ci = stack.pop();
    var sp = state.z2[state.contours[ci]];
    var p = sp;
    if (exports.DEBUG) console.log(state.step, "SHC[" + a + "]", ci);
    var d = pv.distance(rp, rp, false, true);
    do {
        if (p !== rp) fv.setRelative(p, p, d, pv);
        p = p.nextPointOnContour;
    }while (p !== sp);
}
// SHZ[] SHift Zone using reference point
// 0x36-0x37
function SHZ(a, state) {
    var stack = state.stack;
    var rpi = a ? state.rp1 : state.rp2;
    var rp = (a ? state.z0 : state.z1)[rpi];
    var fv = state.fv;
    var pv = state.pv;
    var e = stack.pop();
    if (exports.DEBUG) console.log(state.step, "SHZ[" + a + "]", e);
    var z;
    switch(e){
        case 0:
            z = state.tZone;
            break;
        case 1:
            z = state.gZone;
            break;
        default:
            throw new Error("Invalid zone");
    }
    var p;
    var d = pv.distance(rp, rp, false, true);
    var pLen = z.length - 2;
    for(var i = 0; i < pLen; i++){
        p = z[i];
        fv.setRelative(p, p, d, pv);
    //if (p !== rp) fv.setRelative(p, p, d, pv);
    }
}
// SHPIX[] SHift point by a PIXel amount
// 0x38
function SHPIX(state) {
    var stack = state.stack;
    var loop = state.loop;
    var fv = state.fv;
    var d = stack.pop() / 0x40;
    var z2 = state.z2;
    while(loop--){
        var pi = stack.pop();
        var p = z2[pi];
        if (exports.DEBUG) console.log(state.step, (state.loop > 1 ? "loop " + (state.loop - loop) + ": " : "") + "SHPIX[]", pi, d);
        fv.setRelative(p, p, d);
        fv.touch(p);
    }
    state.loop = 1;
}
// IP[] Interpolate Point
// 0x39
function IP(state) {
    var stack = state.stack;
    var rp1i = state.rp1;
    var rp2i = state.rp2;
    var loop = state.loop;
    var rp1 = state.z0[rp1i];
    var rp2 = state.z1[rp2i];
    var fv = state.fv;
    var pv = state.dpv;
    var z2 = state.z2;
    while(loop--){
        var pi = stack.pop();
        var p = z2[pi];
        if (exports.DEBUG) console.log(state.step, (state.loop > 1 ? "loop " + (state.loop - loop) + ": " : "") + "IP[]", pi, rp1i, "<->", rp2i);
        fv.interpolate(p, rp1, rp2, pv);
        fv.touch(p);
    }
    state.loop = 1;
}
// MSIRP[a] Move Stack Indirect Relative Point
// 0x3A-0x3B
function MSIRP(a, state) {
    var stack = state.stack;
    var d = stack.pop() / 64;
    var pi = stack.pop();
    var p = state.z1[pi];
    var rp0 = state.z0[state.rp0];
    var fv = state.fv;
    var pv = state.pv;
    fv.setRelative(p, rp0, d, pv);
    fv.touch(p);
    if (exports.DEBUG) console.log(state.step, "MSIRP[" + a + "]", d, pi);
    state.rp1 = state.rp0;
    state.rp2 = pi;
    if (a) state.rp0 = pi;
}
// ALIGNRP[] Align to reference point.
// 0x3C
function ALIGNRP(state) {
    var stack = state.stack;
    var rp0i = state.rp0;
    var rp0 = state.z0[rp0i];
    var loop = state.loop;
    var fv = state.fv;
    var pv = state.pv;
    var z1 = state.z1;
    while(loop--){
        var pi = stack.pop();
        var p = z1[pi];
        if (exports.DEBUG) console.log(state.step, (state.loop > 1 ? "loop " + (state.loop - loop) + ": " : "") + "ALIGNRP[]", pi);
        fv.setRelative(p, rp0, 0, pv);
        fv.touch(p);
    }
    state.loop = 1;
}
// RTG[] Round To Double Grid
// 0x3D
function RTDG(state) {
    if (exports.DEBUG) console.log(state.step, "RTDG[]");
    state.round = roundToDoubleGrid;
}
// MIAP[a] Move Indirect Absolute Point
// 0x3E-0x3F
function MIAP(round, state) {
    var stack = state.stack;
    var n = stack.pop();
    var pi = stack.pop();
    var p = state.z0[pi];
    var fv = state.fv;
    var pv = state.pv;
    var cv = state.cvt[n];
    if (exports.DEBUG) console.log(state.step, "MIAP[" + round + "]", n, "(", cv, ")", pi);
    var d = pv.distance(p, HPZero);
    if (round) {
        if (Math.abs(d - cv) < state.cvCutIn) d = cv;
        d = state.round(d);
    }
    fv.setRelative(p, HPZero, d, pv);
    if (state.zp0 === 0) {
        p.xo = p.x;
        p.yo = p.y;
    }
    fv.touch(p);
    state.rp0 = state.rp1 = pi;
}
// NPUSB[] PUSH N Bytes
// 0x40
function NPUSHB(state) {
    var prog = state.prog;
    var ip = state.ip;
    var stack = state.stack;
    var n = prog[++ip];
    if (exports.DEBUG) console.log(state.step, "NPUSHB[]", n);
    for(var i = 0; i < n; i++)stack.push(prog[++ip]);
    state.ip = ip;
}
// NPUSHW[] PUSH N Words
// 0x41
function NPUSHW(state) {
    var ip = state.ip;
    var prog = state.prog;
    var stack = state.stack;
    var n = prog[++ip];
    if (exports.DEBUG) console.log(state.step, "NPUSHW[]", n);
    for(var i = 0; i < n; i++){
        var w = prog[++ip] << 8 | prog[++ip];
        if (w & 0x8000) w = -((w ^ 0xffff) + 1);
        stack.push(w);
    }
    state.ip = ip;
}
// WS[] Write Store
// 0x42
function WS(state) {
    var stack = state.stack;
    var store = state.store;
    if (!store) store = state.store = [];
    var v = stack.pop();
    var l = stack.pop();
    if (exports.DEBUG) console.log(state.step, "WS", v, l);
    store[l] = v;
}
// RS[] Read Store
// 0x43
function RS(state) {
    var stack = state.stack;
    var store = state.store;
    var l = stack.pop();
    if (exports.DEBUG) console.log(state.step, "RS", l);
    var v = store && store[l] || 0;
    stack.push(v);
}
// WCVTP[] Write Control Value Table in Pixel units
// 0x44
function WCVTP(state) {
    var stack = state.stack;
    var v = stack.pop();
    var l = stack.pop();
    if (exports.DEBUG) console.log(state.step, "WCVTP", v, l);
    state.cvt[l] = v / 0x40;
}
// RCVT[] Read Control Value Table entry
// 0x45
function RCVT(state) {
    var stack = state.stack;
    var cvte = stack.pop();
    if (exports.DEBUG) console.log(state.step, "RCVT", cvte);
    stack.push(state.cvt[cvte] * 0x40);
}
// GC[] Get Coordinate projected onto the projection vector
// 0x46-0x47
function GC(a, state) {
    var stack = state.stack;
    var pi = stack.pop();
    var p = state.z2[pi];
    if (exports.DEBUG) console.log(state.step, "GC[" + a + "]", pi);
    stack.push(state.dpv.distance(p, HPZero, a, false) * 0x40);
}
// MD[a] Measure Distance
// 0x49-0x4A
function MD(a, state) {
    var stack = state.stack;
    var pi2 = stack.pop();
    var pi1 = stack.pop();
    var p2 = state.z1[pi2];
    var p1 = state.z0[pi1];
    var d = state.dpv.distance(p1, p2, a, a);
    if (exports.DEBUG) console.log(state.step, "MD[" + a + "]", pi2, pi1, "->", d);
    state.stack.push(Math.round(d * 64));
}
// MPPEM[] Measure Pixels Per EM
// 0x4B
function MPPEM(state) {
    if (exports.DEBUG) console.log(state.step, "MPPEM[]");
    state.stack.push(state.ppem);
}
// FLIPON[] set the auto FLIP Boolean to ON
// 0x4D
function FLIPON(state) {
    if (exports.DEBUG) console.log(state.step, "FLIPON[]");
    state.autoFlip = true;
}
// LT[] Less Than
// 0x50
function LT(state) {
    var stack = state.stack;
    var e2 = stack.pop();
    var e1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "LT[]", e2, e1);
    stack.push(e1 < e2 ? 1 : 0);
}
// LTEQ[] Less Than or EQual
// 0x53
function LTEQ(state) {
    var stack = state.stack;
    var e2 = stack.pop();
    var e1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "LTEQ[]", e2, e1);
    stack.push(e1 <= e2 ? 1 : 0);
}
// GTEQ[] Greater Than
// 0x52
function GT(state) {
    var stack = state.stack;
    var e2 = stack.pop();
    var e1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "GT[]", e2, e1);
    stack.push(e1 > e2 ? 1 : 0);
}
// GTEQ[] Greater Than or EQual
// 0x53
function GTEQ(state) {
    var stack = state.stack;
    var e2 = stack.pop();
    var e1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "GTEQ[]", e2, e1);
    stack.push(e1 >= e2 ? 1 : 0);
}
// EQ[] EQual
// 0x54
function EQ(state) {
    var stack = state.stack;
    var e2 = stack.pop();
    var e1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "EQ[]", e2, e1);
    stack.push(e2 === e1 ? 1 : 0);
}
// NEQ[] Not EQual
// 0x55
function NEQ(state) {
    var stack = state.stack;
    var e2 = stack.pop();
    var e1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "NEQ[]", e2, e1);
    stack.push(e2 !== e1 ? 1 : 0);
}
// ODD[] ODD
// 0x56
function ODD(state) {
    var stack = state.stack;
    var n = stack.pop();
    if (exports.DEBUG) console.log(state.step, "ODD[]", n);
    stack.push(Math.trunc(n) % 2 ? 1 : 0);
}
// EVEN[] EVEN
// 0x57
function EVEN(state) {
    var stack = state.stack;
    var n = stack.pop();
    if (exports.DEBUG) console.log(state.step, "EVEN[]", n);
    stack.push(Math.trunc(n) % 2 ? 0 : 1);
}
// IF[] IF test
// 0x58
function IF(state) {
    var test = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "IF[]", test);
    // if test is true it just continues
    // if not the ip is skipped until matching ELSE or EIF
    if (!test) {
        skip(state, true);
        if (exports.DEBUG) console.log(state.step, "EIF[]");
    }
}
// EIF[] End IF
// 0x59
function EIF(state) {
    // this can be reached normally when
    // executing an else branch.
    // -> just ignore it
    if (exports.DEBUG) console.log(state.step, "EIF[]");
}
// AND[] logical AND
// 0x5A
function AND(state) {
    var stack = state.stack;
    var e2 = stack.pop();
    var e1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "AND[]", e2, e1);
    stack.push(e2 && e1 ? 1 : 0);
}
// OR[] logical OR
// 0x5B
function OR(state) {
    var stack = state.stack;
    var e2 = stack.pop();
    var e1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "OR[]", e2, e1);
    stack.push(e2 || e1 ? 1 : 0);
}
// NOT[] logical NOT
// 0x5C
function NOT(state) {
    var stack = state.stack;
    var e = stack.pop();
    if (exports.DEBUG) console.log(state.step, "NOT[]", e);
    stack.push(e ? 0 : 1);
}
// DELTAP1[] DELTA exception P1
// DELTAP2[] DELTA exception P2
// DELTAP3[] DELTA exception P3
// 0x5D, 0x71, 0x72
function DELTAP123(b, state) {
    var stack = state.stack;
    var n = stack.pop();
    var fv = state.fv;
    var pv = state.pv;
    var ppem = state.ppem;
    var base = state.deltaBase + (b - 1) * 16;
    var ds = state.deltaShift;
    var z0 = state.z0;
    if (exports.DEBUG) console.log(state.step, "DELTAP[" + b + "]", n, stack);
    for(var i = 0; i < n; i++){
        var pi = stack.pop();
        var arg = stack.pop();
        var appem = base + ((arg & 0xF0) >> 4);
        if (appem !== ppem) continue;
        var mag = (arg & 0x0F) - 8;
        if (mag >= 0) mag++;
        if (exports.DEBUG) console.log(state.step, "DELTAPFIX", pi, "by", mag * ds);
        var p = z0[pi];
        fv.setRelative(p, p, mag * ds, pv);
    }
}
// SDB[] Set Delta Base in the graphics state
// 0x5E
function SDB(state) {
    var stack = state.stack;
    var n = stack.pop();
    if (exports.DEBUG) console.log(state.step, "SDB[]", n);
    state.deltaBase = n;
}
// SDS[] Set Delta Shift in the graphics state
// 0x5F
function SDS(state) {
    var stack = state.stack;
    var n = stack.pop();
    if (exports.DEBUG) console.log(state.step, "SDS[]", n);
    state.deltaShift = Math.pow(0.5, n);
}
// ADD[] ADD
// 0x60
function ADD(state) {
    var stack = state.stack;
    var n2 = stack.pop();
    var n1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "ADD[]", n2, n1);
    stack.push(n1 + n2);
}
// SUB[] SUB
// 0x61
function SUB(state) {
    var stack = state.stack;
    var n2 = stack.pop();
    var n1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "SUB[]", n2, n1);
    stack.push(n1 - n2);
}
// DIV[] DIV
// 0x62
function DIV(state) {
    var stack = state.stack;
    var n2 = stack.pop();
    var n1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "DIV[]", n2, n1);
    stack.push(n1 * 64 / n2);
}
// MUL[] MUL
// 0x63
function MUL(state) {
    var stack = state.stack;
    var n2 = stack.pop();
    var n1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "MUL[]", n2, n1);
    stack.push(n1 * n2 / 64);
}
// ABS[] ABSolute value
// 0x64
function ABS(state) {
    var stack = state.stack;
    var n = stack.pop();
    if (exports.DEBUG) console.log(state.step, "ABS[]", n);
    stack.push(Math.abs(n));
}
// NEG[] NEGate
// 0x65
function NEG(state) {
    var stack = state.stack;
    var n = stack.pop();
    if (exports.DEBUG) console.log(state.step, "NEG[]", n);
    stack.push(-n);
}
// FLOOR[] FLOOR
// 0x66
function FLOOR(state) {
    var stack = state.stack;
    var n = stack.pop();
    if (exports.DEBUG) console.log(state.step, "FLOOR[]", n);
    stack.push(Math.floor(n / 0x40) * 0x40);
}
// CEILING[] CEILING
// 0x67
function CEILING(state) {
    var stack = state.stack;
    var n = stack.pop();
    if (exports.DEBUG) console.log(state.step, "CEILING[]", n);
    stack.push(Math.ceil(n / 0x40) * 0x40);
}
// ROUND[ab] ROUND value
// 0x68-0x6B
function ROUND(dt, state) {
    var stack = state.stack;
    var n = stack.pop();
    if (exports.DEBUG) console.log(state.step, "ROUND[]");
    stack.push(state.round(n / 0x40) * 0x40);
}
// WCVTF[] Write Control Value Table in Funits
// 0x70
function WCVTF(state) {
    var stack = state.stack;
    var v = stack.pop();
    var l = stack.pop();
    if (exports.DEBUG) console.log(state.step, "WCVTF[]", v, l);
    state.cvt[l] = v * state.ppem / state.font.unitsPerEm;
}
// DELTAC1[] DELTA exception C1
// DELTAC2[] DELTA exception C2
// DELTAC3[] DELTA exception C3
// 0x73, 0x74, 0x75
function DELTAC123(b, state) {
    var stack = state.stack;
    var n = stack.pop();
    var ppem = state.ppem;
    var base = state.deltaBase + (b - 1) * 16;
    var ds = state.deltaShift;
    if (exports.DEBUG) console.log(state.step, "DELTAC[" + b + "]", n, stack);
    for(var i = 0; i < n; i++){
        var c = stack.pop();
        var arg = stack.pop();
        var appem = base + ((arg & 0xF0) >> 4);
        if (appem !== ppem) continue;
        var mag = (arg & 0x0F) - 8;
        if (mag >= 0) mag++;
        var delta = mag * ds;
        if (exports.DEBUG) console.log(state.step, "DELTACFIX", c, "by", delta);
        state.cvt[c] += delta;
    }
}
// SROUND[] Super ROUND
// 0x76
function SROUND(state) {
    var n = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "SROUND[]", n);
    state.round = roundSuper;
    var period;
    switch(n & 0xC0){
        case 0x00:
            period = 0.5;
            break;
        case 0x40:
            period = 1;
            break;
        case 0x80:
            period = 2;
            break;
        default:
            throw new Error("invalid SROUND value");
    }
    state.srPeriod = period;
    switch(n & 0x30){
        case 0x00:
            state.srPhase = 0;
            break;
        case 0x10:
            state.srPhase = 0.25 * period;
            break;
        case 0x20:
            state.srPhase = 0.5 * period;
            break;
        case 0x30:
            state.srPhase = 0.75 * period;
            break;
        default:
            throw new Error("invalid SROUND value");
    }
    n &= 0x0F;
    if (n === 0) state.srThreshold = 0;
    else state.srThreshold = (n / 8 - 0.5) * period;
}
// S45ROUND[] Super ROUND 45 degrees
// 0x77
function S45ROUND(state) {
    var n = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "S45ROUND[]", n);
    state.round = roundSuper;
    var period;
    switch(n & 0xC0){
        case 0x00:
            period = Math.sqrt(2) / 2;
            break;
        case 0x40:
            period = Math.sqrt(2);
            break;
        case 0x80:
            period = 2 * Math.sqrt(2);
            break;
        default:
            throw new Error("invalid S45ROUND value");
    }
    state.srPeriod = period;
    switch(n & 0x30){
        case 0x00:
            state.srPhase = 0;
            break;
        case 0x10:
            state.srPhase = 0.25 * period;
            break;
        case 0x20:
            state.srPhase = 0.5 * period;
            break;
        case 0x30:
            state.srPhase = 0.75 * period;
            break;
        default:
            throw new Error("invalid S45ROUND value");
    }
    n &= 0x0F;
    if (n === 0) state.srThreshold = 0;
    else state.srThreshold = (n / 8 - 0.5) * period;
}
// ROFF[] Round Off
// 0x7A
function ROFF(state) {
    if (exports.DEBUG) console.log(state.step, "ROFF[]");
    state.round = roundOff;
}
// RUTG[] Round Up To Grid
// 0x7C
function RUTG(state) {
    if (exports.DEBUG) console.log(state.step, "RUTG[]");
    state.round = roundUpToGrid;
}
// RDTG[] Round Down To Grid
// 0x7D
function RDTG(state) {
    if (exports.DEBUG) console.log(state.step, "RDTG[]");
    state.round = roundDownToGrid;
}
// SCANCTRL[] SCAN conversion ConTRoL
// 0x85
function SCANCTRL(state) {
    var n = state.stack.pop();
    // ignored by opentype.js
    if (exports.DEBUG) console.log(state.step, "SCANCTRL[]", n);
}
// SDPVTL[a] Set Dual Projection Vector To Line
// 0x86-0x87
function SDPVTL(a, state) {
    var stack = state.stack;
    var p2i = stack.pop();
    var p1i = stack.pop();
    var p2 = state.z2[p2i];
    var p1 = state.z1[p1i];
    if (exports.DEBUG) console.log(state.step, "SDPVTL[" + a + "]", p2i, p1i);
    var dx;
    var dy;
    if (!a) {
        dx = p1.x - p2.x;
        dy = p1.y - p2.y;
    } else {
        dx = p2.y - p1.y;
        dy = p1.x - p2.x;
    }
    state.dpv = getUnitVector(dx, dy);
}
// GETINFO[] GET INFOrmation
// 0x88
function GETINFO(state) {
    var stack = state.stack;
    var sel = stack.pop();
    var r = 0;
    if (exports.DEBUG) console.log(state.step, "GETINFO[]", sel);
    // v35 as in no subpixel hinting
    if (sel & 0x01) r = 35;
    // TODO rotation and stretch currently not supported
    // and thus those GETINFO are always 0.
    // opentype.js is always gray scaling
    if (sel & 0x20) r |= 0x1000;
    stack.push(r);
}
// ROLL[] ROLL the top three stack elements
// 0x8A
function ROLL(state) {
    var stack = state.stack;
    var a = stack.pop();
    var b = stack.pop();
    var c = stack.pop();
    if (exports.DEBUG) console.log(state.step, "ROLL[]");
    stack.push(b);
    stack.push(a);
    stack.push(c);
}
// MAX[] MAXimum of top two stack elements
// 0x8B
function MAX(state) {
    var stack = state.stack;
    var e2 = stack.pop();
    var e1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "MAX[]", e2, e1);
    stack.push(Math.max(e1, e2));
}
// MIN[] MINimum of top two stack elements
// 0x8C
function MIN(state) {
    var stack = state.stack;
    var e2 = stack.pop();
    var e1 = stack.pop();
    if (exports.DEBUG) console.log(state.step, "MIN[]", e2, e1);
    stack.push(Math.min(e1, e2));
}
// SCANTYPE[] SCANTYPE
// 0x8D
function SCANTYPE(state) {
    var n = state.stack.pop();
    // ignored by opentype.js
    if (exports.DEBUG) console.log(state.step, "SCANTYPE[]", n);
}
// INSTCTRL[] INSTCTRL
// 0x8D
function INSTCTRL(state) {
    var s = state.stack.pop();
    var v = state.stack.pop();
    if (exports.DEBUG) console.log(state.step, "INSTCTRL[]", s, v);
    switch(s){
        case 1:
            state.inhibitGridFit = !!v;
            return;
        case 2:
            state.ignoreCvt = !!v;
            return;
        default:
            throw new Error("invalid INSTCTRL[] selector");
    }
}
// PUSHB[abc] PUSH Bytes
// 0xB0-0xB7
function PUSHB(n, state) {
    var stack = state.stack;
    var prog = state.prog;
    var ip = state.ip;
    if (exports.DEBUG) console.log(state.step, "PUSHB[" + n + "]");
    for(var i = 0; i < n; i++)stack.push(prog[++ip]);
    state.ip = ip;
}
// PUSHW[abc] PUSH Words
// 0xB8-0xBF
function PUSHW(n, state) {
    var ip = state.ip;
    var prog = state.prog;
    var stack = state.stack;
    if (exports.DEBUG) console.log(state.ip, "PUSHW[" + n + "]");
    for(var i = 0; i < n; i++){
        var w = prog[++ip] << 8 | prog[++ip];
        if (w & 0x8000) w = -((w ^ 0xffff) + 1);
        stack.push(w);
    }
    state.ip = ip;
}
// MDRP[abcde] Move Direct Relative Point
// 0xD0-0xEF
// (if indirect is 0)
//
// and
//
// MIRP[abcde] Move Indirect Relative Point
// 0xE0-0xFF
// (if indirect is 1)
function MDRP_MIRP(indirect, setRp0, keepD, ro, dt, state) {
    var stack = state.stack;
    var cvte = indirect && stack.pop();
    var pi = stack.pop();
    var rp0i = state.rp0;
    var rp = state.z0[rp0i];
    var p = state.z1[pi];
    var md = state.minDis;
    var fv = state.fv;
    var pv = state.dpv;
    var od; // original distance
    var d; // moving distance
    var sign; // sign of distance
    var cv;
    d = od = pv.distance(p, rp, true, true);
    sign = d >= 0 ? 1 : -1; // Math.sign would be 0 in case of 0
    // TODO consider autoFlip
    d = Math.abs(d);
    if (indirect) {
        cv = state.cvt[cvte];
        if (ro && Math.abs(d - cv) < state.cvCutIn) d = cv;
    }
    if (keepD && d < md) d = md;
    if (ro) d = state.round(d);
    fv.setRelative(p, rp, sign * d, pv);
    fv.touch(p);
    if (exports.DEBUG) console.log(state.step, (indirect ? "MIRP[" : "MDRP[") + (setRp0 ? "M" : "m") + (keepD ? ">" : "_") + (ro ? "R" : "_") + (dt === 0 ? "Gr" : dt === 1 ? "Bl" : dt === 2 ? "Wh" : "") + "]", indirect ? cvte + "(" + state.cvt[cvte] + "," + cv + ")" : "", pi, "(d =", od, "->", sign * d, ")");
    state.rp1 = state.rp0;
    state.rp2 = pi;
    if (setRp0) state.rp0 = pi;
}
/*
* The instruction table.
*/ instructionTable = [
    /* 0x00 */ SVTCA.bind(undefined, yUnitVector),
    /* 0x01 */ SVTCA.bind(undefined, xUnitVector),
    /* 0x02 */ SPVTCA.bind(undefined, yUnitVector),
    /* 0x03 */ SPVTCA.bind(undefined, xUnitVector),
    /* 0x04 */ SFVTCA.bind(undefined, yUnitVector),
    /* 0x05 */ SFVTCA.bind(undefined, xUnitVector),
    /* 0x06 */ SPVTL.bind(undefined, 0),
    /* 0x07 */ SPVTL.bind(undefined, 1),
    /* 0x08 */ SFVTL.bind(undefined, 0),
    /* 0x09 */ SFVTL.bind(undefined, 1),
    /* 0x0A */ SPVFS,
    /* 0x0B */ SFVFS,
    /* 0x0C */ GPV,
    /* 0x0D */ GFV,
    /* 0x0E */ SFVTPV,
    /* 0x0F */ ISECT,
    /* 0x10 */ SRP0,
    /* 0x11 */ SRP1,
    /* 0x12 */ SRP2,
    /* 0x13 */ SZP0,
    /* 0x14 */ SZP1,
    /* 0x15 */ SZP2,
    /* 0x16 */ SZPS,
    /* 0x17 */ SLOOP,
    /* 0x18 */ RTG,
    /* 0x19 */ RTHG,
    /* 0x1A */ SMD,
    /* 0x1B */ ELSE,
    /* 0x1C */ JMPR,
    /* 0x1D */ SCVTCI,
    /* 0x1E */ undefined,
    /* 0x1F */ undefined,
    /* 0x20 */ DUP,
    /* 0x21 */ POP,
    /* 0x22 */ CLEAR,
    /* 0x23 */ SWAP,
    /* 0x24 */ DEPTH,
    /* 0x25 */ CINDEX,
    /* 0x26 */ MINDEX,
    /* 0x27 */ undefined,
    /* 0x28 */ undefined,
    /* 0x29 */ undefined,
    /* 0x2A */ LOOPCALL,
    /* 0x2B */ CALL,
    /* 0x2C */ FDEF,
    /* 0x2D */ undefined,
    /* 0x2E */ MDAP.bind(undefined, 0),
    /* 0x2F */ MDAP.bind(undefined, 1),
    /* 0x30 */ IUP.bind(undefined, yUnitVector),
    /* 0x31 */ IUP.bind(undefined, xUnitVector),
    /* 0x32 */ SHP.bind(undefined, 0),
    /* 0x33 */ SHP.bind(undefined, 1),
    /* 0x34 */ SHC.bind(undefined, 0),
    /* 0x35 */ SHC.bind(undefined, 1),
    /* 0x36 */ SHZ.bind(undefined, 0),
    /* 0x37 */ SHZ.bind(undefined, 1),
    /* 0x38 */ SHPIX,
    /* 0x39 */ IP,
    /* 0x3A */ MSIRP.bind(undefined, 0),
    /* 0x3B */ MSIRP.bind(undefined, 1),
    /* 0x3C */ ALIGNRP,
    /* 0x3D */ RTDG,
    /* 0x3E */ MIAP.bind(undefined, 0),
    /* 0x3F */ MIAP.bind(undefined, 1),
    /* 0x40 */ NPUSHB,
    /* 0x41 */ NPUSHW,
    /* 0x42 */ WS,
    /* 0x43 */ RS,
    /* 0x44 */ WCVTP,
    /* 0x45 */ RCVT,
    /* 0x46 */ GC.bind(undefined, 0),
    /* 0x47 */ GC.bind(undefined, 1),
    /* 0x48 */ undefined,
    /* 0x49 */ MD.bind(undefined, 0),
    /* 0x4A */ MD.bind(undefined, 1),
    /* 0x4B */ MPPEM,
    /* 0x4C */ undefined,
    /* 0x4D */ FLIPON,
    /* 0x4E */ undefined,
    /* 0x4F */ undefined,
    /* 0x50 */ LT,
    /* 0x51 */ LTEQ,
    /* 0x52 */ GT,
    /* 0x53 */ GTEQ,
    /* 0x54 */ EQ,
    /* 0x55 */ NEQ,
    /* 0x56 */ ODD,
    /* 0x57 */ EVEN,
    /* 0x58 */ IF,
    /* 0x59 */ EIF,
    /* 0x5A */ AND,
    /* 0x5B */ OR,
    /* 0x5C */ NOT,
    /* 0x5D */ DELTAP123.bind(undefined, 1),
    /* 0x5E */ SDB,
    /* 0x5F */ SDS,
    /* 0x60 */ ADD,
    /* 0x61 */ SUB,
    /* 0x62 */ DIV,
    /* 0x63 */ MUL,
    /* 0x64 */ ABS,
    /* 0x65 */ NEG,
    /* 0x66 */ FLOOR,
    /* 0x67 */ CEILING,
    /* 0x68 */ ROUND.bind(undefined, 0),
    /* 0x69 */ ROUND.bind(undefined, 1),
    /* 0x6A */ ROUND.bind(undefined, 2),
    /* 0x6B */ ROUND.bind(undefined, 3),
    /* 0x6C */ undefined,
    /* 0x6D */ undefined,
    /* 0x6E */ undefined,
    /* 0x6F */ undefined,
    /* 0x70 */ WCVTF,
    /* 0x71 */ DELTAP123.bind(undefined, 2),
    /* 0x72 */ DELTAP123.bind(undefined, 3),
    /* 0x73 */ DELTAC123.bind(undefined, 1),
    /* 0x74 */ DELTAC123.bind(undefined, 2),
    /* 0x75 */ DELTAC123.bind(undefined, 3),
    /* 0x76 */ SROUND,
    /* 0x77 */ S45ROUND,
    /* 0x78 */ undefined,
    /* 0x79 */ undefined,
    /* 0x7A */ ROFF,
    /* 0x7B */ undefined,
    /* 0x7C */ RUTG,
    /* 0x7D */ RDTG,
    /* 0x7E */ POP,
    /* 0x7F */ POP,
    /* 0x80 */ undefined,
    /* 0x81 */ undefined,
    /* 0x82 */ undefined,
    /* 0x83 */ undefined,
    /* 0x84 */ undefined,
    /* 0x85 */ SCANCTRL,
    /* 0x86 */ SDPVTL.bind(undefined, 0),
    /* 0x87 */ SDPVTL.bind(undefined, 1),
    /* 0x88 */ GETINFO,
    /* 0x89 */ undefined,
    /* 0x8A */ ROLL,
    /* 0x8B */ MAX,
    /* 0x8C */ MIN,
    /* 0x8D */ SCANTYPE,
    /* 0x8E */ INSTCTRL,
    /* 0x8F */ undefined,
    /* 0x90 */ undefined,
    /* 0x91 */ undefined,
    /* 0x92 */ undefined,
    /* 0x93 */ undefined,
    /* 0x94 */ undefined,
    /* 0x95 */ undefined,
    /* 0x96 */ undefined,
    /* 0x97 */ undefined,
    /* 0x98 */ undefined,
    /* 0x99 */ undefined,
    /* 0x9A */ undefined,
    /* 0x9B */ undefined,
    /* 0x9C */ undefined,
    /* 0x9D */ undefined,
    /* 0x9E */ undefined,
    /* 0x9F */ undefined,
    /* 0xA0 */ undefined,
    /* 0xA1 */ undefined,
    /* 0xA2 */ undefined,
    /* 0xA3 */ undefined,
    /* 0xA4 */ undefined,
    /* 0xA5 */ undefined,
    /* 0xA6 */ undefined,
    /* 0xA7 */ undefined,
    /* 0xA8 */ undefined,
    /* 0xA9 */ undefined,
    /* 0xAA */ undefined,
    /* 0xAB */ undefined,
    /* 0xAC */ undefined,
    /* 0xAD */ undefined,
    /* 0xAE */ undefined,
    /* 0xAF */ undefined,
    /* 0xB0 */ PUSHB.bind(undefined, 1),
    /* 0xB1 */ PUSHB.bind(undefined, 2),
    /* 0xB2 */ PUSHB.bind(undefined, 3),
    /* 0xB3 */ PUSHB.bind(undefined, 4),
    /* 0xB4 */ PUSHB.bind(undefined, 5),
    /* 0xB5 */ PUSHB.bind(undefined, 6),
    /* 0xB6 */ PUSHB.bind(undefined, 7),
    /* 0xB7 */ PUSHB.bind(undefined, 8),
    /* 0xB8 */ PUSHW.bind(undefined, 1),
    /* 0xB9 */ PUSHW.bind(undefined, 2),
    /* 0xBA */ PUSHW.bind(undefined, 3),
    /* 0xBB */ PUSHW.bind(undefined, 4),
    /* 0xBC */ PUSHW.bind(undefined, 5),
    /* 0xBD */ PUSHW.bind(undefined, 6),
    /* 0xBE */ PUSHW.bind(undefined, 7),
    /* 0xBF */ PUSHW.bind(undefined, 8),
    /* 0xC0 */ MDRP_MIRP.bind(undefined, 0, 0, 0, 0, 0),
    /* 0xC1 */ MDRP_MIRP.bind(undefined, 0, 0, 0, 0, 1),
    /* 0xC2 */ MDRP_MIRP.bind(undefined, 0, 0, 0, 0, 2),
    /* 0xC3 */ MDRP_MIRP.bind(undefined, 0, 0, 0, 0, 3),
    /* 0xC4 */ MDRP_MIRP.bind(undefined, 0, 0, 0, 1, 0),
    /* 0xC5 */ MDRP_MIRP.bind(undefined, 0, 0, 0, 1, 1),
    /* 0xC6 */ MDRP_MIRP.bind(undefined, 0, 0, 0, 1, 2),
    /* 0xC7 */ MDRP_MIRP.bind(undefined, 0, 0, 0, 1, 3),
    /* 0xC8 */ MDRP_MIRP.bind(undefined, 0, 0, 1, 0, 0),
    /* 0xC9 */ MDRP_MIRP.bind(undefined, 0, 0, 1, 0, 1),
    /* 0xCA */ MDRP_MIRP.bind(undefined, 0, 0, 1, 0, 2),
    /* 0xCB */ MDRP_MIRP.bind(undefined, 0, 0, 1, 0, 3),
    /* 0xCC */ MDRP_MIRP.bind(undefined, 0, 0, 1, 1, 0),
    /* 0xCD */ MDRP_MIRP.bind(undefined, 0, 0, 1, 1, 1),
    /* 0xCE */ MDRP_MIRP.bind(undefined, 0, 0, 1, 1, 2),
    /* 0xCF */ MDRP_MIRP.bind(undefined, 0, 0, 1, 1, 3),
    /* 0xD0 */ MDRP_MIRP.bind(undefined, 0, 1, 0, 0, 0),
    /* 0xD1 */ MDRP_MIRP.bind(undefined, 0, 1, 0, 0, 1),
    /* 0xD2 */ MDRP_MIRP.bind(undefined, 0, 1, 0, 0, 2),
    /* 0xD3 */ MDRP_MIRP.bind(undefined, 0, 1, 0, 0, 3),
    /* 0xD4 */ MDRP_MIRP.bind(undefined, 0, 1, 0, 1, 0),
    /* 0xD5 */ MDRP_MIRP.bind(undefined, 0, 1, 0, 1, 1),
    /* 0xD6 */ MDRP_MIRP.bind(undefined, 0, 1, 0, 1, 2),
    /* 0xD7 */ MDRP_MIRP.bind(undefined, 0, 1, 0, 1, 3),
    /* 0xD8 */ MDRP_MIRP.bind(undefined, 0, 1, 1, 0, 0),
    /* 0xD9 */ MDRP_MIRP.bind(undefined, 0, 1, 1, 0, 1),
    /* 0xDA */ MDRP_MIRP.bind(undefined, 0, 1, 1, 0, 2),
    /* 0xDB */ MDRP_MIRP.bind(undefined, 0, 1, 1, 0, 3),
    /* 0xDC */ MDRP_MIRP.bind(undefined, 0, 1, 1, 1, 0),
    /* 0xDD */ MDRP_MIRP.bind(undefined, 0, 1, 1, 1, 1),
    /* 0xDE */ MDRP_MIRP.bind(undefined, 0, 1, 1, 1, 2),
    /* 0xDF */ MDRP_MIRP.bind(undefined, 0, 1, 1, 1, 3),
    /* 0xE0 */ MDRP_MIRP.bind(undefined, 1, 0, 0, 0, 0),
    /* 0xE1 */ MDRP_MIRP.bind(undefined, 1, 0, 0, 0, 1),
    /* 0xE2 */ MDRP_MIRP.bind(undefined, 1, 0, 0, 0, 2),
    /* 0xE3 */ MDRP_MIRP.bind(undefined, 1, 0, 0, 0, 3),
    /* 0xE4 */ MDRP_MIRP.bind(undefined, 1, 0, 0, 1, 0),
    /* 0xE5 */ MDRP_MIRP.bind(undefined, 1, 0, 0, 1, 1),
    /* 0xE6 */ MDRP_MIRP.bind(undefined, 1, 0, 0, 1, 2),
    /* 0xE7 */ MDRP_MIRP.bind(undefined, 1, 0, 0, 1, 3),
    /* 0xE8 */ MDRP_MIRP.bind(undefined, 1, 0, 1, 0, 0),
    /* 0xE9 */ MDRP_MIRP.bind(undefined, 1, 0, 1, 0, 1),
    /* 0xEA */ MDRP_MIRP.bind(undefined, 1, 0, 1, 0, 2),
    /* 0xEB */ MDRP_MIRP.bind(undefined, 1, 0, 1, 0, 3),
    /* 0xEC */ MDRP_MIRP.bind(undefined, 1, 0, 1, 1, 0),
    /* 0xED */ MDRP_MIRP.bind(undefined, 1, 0, 1, 1, 1),
    /* 0xEE */ MDRP_MIRP.bind(undefined, 1, 0, 1, 1, 2),
    /* 0xEF */ MDRP_MIRP.bind(undefined, 1, 0, 1, 1, 3),
    /* 0xF0 */ MDRP_MIRP.bind(undefined, 1, 1, 0, 0, 0),
    /* 0xF1 */ MDRP_MIRP.bind(undefined, 1, 1, 0, 0, 1),
    /* 0xF2 */ MDRP_MIRP.bind(undefined, 1, 1, 0, 0, 2),
    /* 0xF3 */ MDRP_MIRP.bind(undefined, 1, 1, 0, 0, 3),
    /* 0xF4 */ MDRP_MIRP.bind(undefined, 1, 1, 0, 1, 0),
    /* 0xF5 */ MDRP_MIRP.bind(undefined, 1, 1, 0, 1, 1),
    /* 0xF6 */ MDRP_MIRP.bind(undefined, 1, 1, 0, 1, 2),
    /* 0xF7 */ MDRP_MIRP.bind(undefined, 1, 1, 0, 1, 3),
    /* 0xF8 */ MDRP_MIRP.bind(undefined, 1, 1, 1, 0, 0),
    /* 0xF9 */ MDRP_MIRP.bind(undefined, 1, 1, 1, 0, 1),
    /* 0xFA */ MDRP_MIRP.bind(undefined, 1, 1, 1, 0, 2),
    /* 0xFB */ MDRP_MIRP.bind(undefined, 1, 1, 1, 0, 3),
    /* 0xFC */ MDRP_MIRP.bind(undefined, 1, 1, 1, 1, 0),
    /* 0xFD */ MDRP_MIRP.bind(undefined, 1, 1, 1, 1, 1),
    /* 0xFE */ MDRP_MIRP.bind(undefined, 1, 1, 1, 1, 2),
    /* 0xFF */ MDRP_MIRP.bind(undefined, 1, 1, 1, 1, 3)
];
/*****************************
  Mathematical Considerations
******************************

fv ... refers to freedom vector
pv ... refers to projection vector
rp ... refers to reference point
p  ... refers to to point being operated on
d  ... refers to distance

SETRELATIVE:
============

case freedom vector == x-axis:
------------------------------

                        (pv)
                     .-'
              rpd .-'
               .-*
          d .-'90°'
         .-'       '
      .-'           '
   *-'               ' b
  rp                  '
                       '
                        '
            p *----------*-------------- (fv)
                          pm

  rpdx = rpx + d * pv.x
  rpdy = rpy + d * pv.y

  equation of line b

   y - rpdy = pvns * (x- rpdx)

   y = p.y

   x = rpdx + ( p.y - rpdy ) / pvns


case freedom vector == y-axis:
------------------------------

    * pm
    |\
    | \
    |  \
    |   \
    |    \
    |     \
    |      \
    |       \
    |        \
    |         \ b
    |          \
    |           \
    |            \    .-' (pv)
    |         90° \.-'
    |           .-'* rpd
    |        .-'
    *     *-'  d
    p     rp

  rpdx = rpx + d * pv.x
  rpdy = rpy + d * pv.y

  equation of line b:
           pvns ... normal slope to pv

   y - rpdy = pvns * (x - rpdx)

   x = p.x

   y = rpdy +  pvns * (p.x - rpdx)



generic case:
-------------


                              .'(fv)
                            .'
                          .* pm
                        .' !
                      .'    .
                    .'      !
                  .'         . b
                .'           !
               *              .
              p               !
                         90°   .    ... (pv)
                           ...-*-'''
                  ...---'''    rpd
         ...---'''   d
   *--'''
  rp

    rpdx = rpx + d * pv.x
    rpdy = rpy + d * pv.y

 equation of line b:
    pvns... normal slope to pv

    y - rpdy = pvns * (x - rpdx)

 equation of freedom vector line:
    fvs ... slope of freedom vector (=fy/fx)

    y - py = fvs * (x - px)


  on pm both equations are true for same x/y

    y - rpdy = pvns * (x - rpdx)

    y - py = fvs * (x - px)

  form to y and set equal:

    pvns * (x - rpdx) + rpdy = fvs * (x - px) + py

  expand:

    pvns * x - pvns * rpdx + rpdy = fvs * x - fvs * px + py

  switch:

    fvs * x - fvs * px + py = pvns * x - pvns * rpdx + rpdy

  solve for x:

    fvs * x - pvns * x = fvs * px - pvns * rpdx - py + rpdy



          fvs * px - pvns * rpdx + rpdy - py
    x =  -----------------------------------
                 fvs - pvns

  and:

    y = fvs * (x - px) + py



INTERPOLATE:
============

Examples of point interpolation.

The weight of the movement of the reference point gets bigger
the further the other reference point is away, thus the safest
option (that is avoiding 0/0 divisions) is to weight the
original distance of the other point by the sum of both distances.

If the sum of both distances is 0, then move the point by the
arithmetic average of the movement of both reference points.




           (+6)
    rp1o *---->*rp1
         .     .                          (+12)
         .     .                  rp2o *---------->* rp2
         .     .                       .           .
         .     .                       .           .
         .    10          20           .           .
         |.........|...................|           .
               .   .                               .
               .   . (+8)                          .
                po *------>*p                      .
               .           .                       .
               .    12     .          24           .
               |...........|.......................|
                                  36


-------



           (+10)
    rp1o *-------->*rp1
         .         .                      (-10)
         .         .              rp2 *<---------* rpo2
         .         .                   .         .
         .         .                   .         .
         .    10   .          30       .         .
         |.........|.............................|
                   .                   .
                   . (+5)              .
                po *--->* p            .
                   .    .              .
                   .    .   20         .
                   |....|..............|
                     5        15


-------


           (+10)
    rp1o *-------->*rp1
         .         .
         .         .
    rp2o *-------->*rp2


                               (+10)
                          po *-------->* p

-------


           (+10)
    rp1o *-------->*rp1
         .         .
         .         .(+30)
    rp2o *---------------------------->*rp2


                                        (+25)
                          po *----------------------->* p



vim: set ts=4 sw=4 expandtab:
*****/ /**
 * Converts a string into a list of tokens.
 */ /**
 * Create a new token
 * @param {string} char a single char
 */ function Token(char) {
    this.char = char;
    this.state = {};
    this.activeState = null;
}
/**
 * Create a new context range
 * @param {number} startIndex range start index
 * @param {number} endOffset range end index offset
 * @param {string} contextName owner context name
 */ function ContextRange(startIndex, endOffset, contextName) {
    this.contextName = contextName;
    this.startIndex = startIndex;
    this.endOffset = endOffset;
}
/**
 * Check context start and end
 * @param {string} contextName a unique context name
 * @param {function} checkStart a predicate function the indicates a context's start
 * @param {function} checkEnd a predicate function the indicates a context's end
 */ function ContextChecker(contextName, checkStart, checkEnd) {
    this.contextName = contextName;
    this.openRange = null;
    this.ranges = [];
    this.checkStart = checkStart;
    this.checkEnd = checkEnd;
}
/**
 * @typedef ContextParams
 * @type Object
 * @property {array} context context items
 * @property {number} currentIndex current item index
 */ /**
 * Create a context params
 * @param {array} context a list of items
 * @param {number} currentIndex current item index
 */ function ContextParams(context, currentIndex) {
    this.context = context;
    this.index = currentIndex;
    this.length = context.length;
    this.current = context[currentIndex];
    this.backtrack = context.slice(0, currentIndex);
    this.lookahead = context.slice(currentIndex + 1);
}
/**
 * Create an event instance
 * @param {string} eventId event unique id
 */ function Event(eventId) {
    this.eventId = eventId;
    this.subscribers = [];
}
/**
 * Initialize a core events and auto subscribe required event handlers
 * @param {any} events an object that enlists core events handlers
 */ function initializeCoreEvents(events) {
    var this$1 = this;
    var coreEvents = [
        "start",
        "end",
        "next",
        "newToken",
        "contextStart",
        "contextEnd",
        "insertToken",
        "removeToken",
        "removeRange",
        "replaceToken",
        "replaceRange",
        "composeRUD",
        "updateContextsRanges"
    ];
    coreEvents.forEach(function(eventId) {
        Object.defineProperty(this$1.events, eventId, {
            value: new Event(eventId)
        });
    });
    if (!!events) coreEvents.forEach(function(eventId) {
        var event = events[eventId];
        if (typeof event === "function") this$1.events[eventId].subscribe(event);
    });
    var requiresContextUpdate = [
        "insertToken",
        "removeToken",
        "removeRange",
        "replaceToken",
        "replaceRange",
        "composeRUD"
    ];
    requiresContextUpdate.forEach(function(eventId) {
        this$1.events[eventId].subscribe(this$1.updateContextsRanges);
    });
}
/**
 * Converts a string into a list of tokens
 * @param {any} events tokenizer core events
 */ function Tokenizer(events) {
    this.tokens = [];
    this.registeredContexts = {};
    this.contextCheckers = [];
    this.events = {};
    this.registeredModifiers = [];
    initializeCoreEvents.call(this, events);
}
/**
 * Sets the state of a token, usually called by a state modifier.
 * @param {string} key state item key
 * @param {any} value state item value
 */ Token.prototype.setState = function(key, value) {
    this.state[key] = value;
    this.activeState = {
        key: key,
        value: this.state[key]
    };
    return this.activeState;
};
Token.prototype.getState = function(stateId) {
    return this.state[stateId] || null;
};
/**
 * Checks if an index exists in the tokens list.
 * @param {number} index token index
 */ Tokenizer.prototype.inboundIndex = function(index) {
    return index >= 0 && index < this.tokens.length;
};
/**
 * Compose and apply a list of operations (replace, update, delete)
 * @param {array} RUDs replace, update and delete operations
 * TODO: Perf. Optimization (lengthBefore === lengthAfter ? dispatch once)
 */ Tokenizer.prototype.composeRUD = function(RUDs) {
    var this$1 = this;
    var silent = true;
    var state = RUDs.map(function(RUD) {
        return this$1[RUD[0]].apply(this$1, RUD.slice(1).concat(silent));
    });
    var hasFAILObject = function(obj) {
        return typeof obj === "object" && obj.hasOwnProperty("FAIL");
    };
    if (state.every(hasFAILObject)) return {
        FAIL: "composeRUD: one or more operations hasn't completed successfully",
        report: state.filter(hasFAILObject)
    };
    this.dispatch("composeRUD", [
        state.filter(function(op) {
            return !hasFAILObject(op);
        })
    ]);
};
/**
 * Replace a range of tokens with a list of tokens
 * @param {number} startIndex range start index
 * @param {number} offset range offset
 * @param {token} tokens a list of tokens to replace
 * @param {boolean} silent dispatch events and update context ranges
 */ Tokenizer.prototype.replaceRange = function(startIndex, offset, tokens, silent) {
    offset = offset !== null ? offset : this.tokens.length;
    var isTokenType = tokens.every(function(token) {
        return token instanceof Token;
    });
    if (!isNaN(startIndex) && this.inboundIndex(startIndex) && isTokenType) {
        var replaced = this.tokens.splice.apply(this.tokens, [
            startIndex,
            offset
        ].concat(tokens));
        if (!silent) this.dispatch("replaceToken", [
            startIndex,
            offset,
            tokens
        ]);
        return [
            replaced,
            tokens
        ];
    } else return {
        FAIL: "replaceRange: invalid tokens or startIndex."
    };
};
/**
 * Replace a token with another token
 * @param {number} index token index
 * @param {token} token a token to replace
 * @param {boolean} silent dispatch events and update context ranges
 */ Tokenizer.prototype.replaceToken = function(index, token, silent) {
    if (!isNaN(index) && this.inboundIndex(index) && token instanceof Token) {
        var replaced = this.tokens.splice(index, 1, token);
        if (!silent) this.dispatch("replaceToken", [
            index,
            token
        ]);
        return [
            replaced[0],
            token
        ];
    } else return {
        FAIL: "replaceToken: invalid token or index."
    };
};
/**
 * Removes a range of tokens
 * @param {number} startIndex range start index
 * @param {number} offset range offset
 * @param {boolean} silent dispatch events and update context ranges
 */ Tokenizer.prototype.removeRange = function(startIndex, offset, silent) {
    offset = !isNaN(offset) ? offset : this.tokens.length;
    var tokens = this.tokens.splice(startIndex, offset);
    if (!silent) this.dispatch("removeRange", [
        tokens,
        startIndex,
        offset
    ]);
    return tokens;
};
/**
 * Remove a token at a certain index
 * @param {number} index token index
 * @param {boolean} silent dispatch events and update context ranges
 */ Tokenizer.prototype.removeToken = function(index, silent) {
    if (!isNaN(index) && this.inboundIndex(index)) {
        var token = this.tokens.splice(index, 1);
        if (!silent) this.dispatch("removeToken", [
            token,
            index
        ]);
        return token;
    } else return {
        FAIL: "removeToken: invalid token index."
    };
};
/**
 * Insert a list of tokens at a certain index
 * @param {array} tokens a list of tokens to insert
 * @param {number} index insert the list of tokens at index
 * @param {boolean} silent dispatch events and update context ranges
 */ Tokenizer.prototype.insertToken = function(tokens, index, silent) {
    var tokenType = tokens.every(function(token) {
        return token instanceof Token;
    });
    if (tokenType) {
        this.tokens.splice.apply(this.tokens, [
            index,
            0
        ].concat(tokens));
        if (!silent) this.dispatch("insertToken", [
            tokens,
            index
        ]);
        return tokens;
    } else return {
        FAIL: "insertToken: invalid token(s)."
    };
};
/**
 * A state modifier that is called on 'newToken' event
 * @param {string} modifierId state modifier id
 * @param {function} condition a predicate function that returns true or false
 * @param {function} modifier a function to update token state
 */ Tokenizer.prototype.registerModifier = function(modifierId, condition, modifier) {
    this.events.newToken.subscribe(function(token, contextParams) {
        var conditionParams = [
            token,
            contextParams
        ];
        var canApplyModifier = condition === null || condition.apply(this, conditionParams) === true;
        var modifierParams = [
            token,
            contextParams
        ];
        if (canApplyModifier) {
            var newStateValue = modifier.apply(this, modifierParams);
            token.setState(modifierId, newStateValue);
        }
    });
    this.registeredModifiers.push(modifierId);
};
/**
 * Subscribe a handler to an event
 * @param {function} eventHandler an event handler function
 */ Event.prototype.subscribe = function(eventHandler) {
    if (typeof eventHandler === "function") return this.subscribers.push(eventHandler) - 1;
    else return {
        FAIL: "invalid '" + this.eventId + "' event handler"
    };
};
/**
 * Unsubscribe an event handler
 * @param {string} subsId subscription id
 */ Event.prototype.unsubscribe = function(subsId) {
    this.subscribers.splice(subsId, 1);
};
/**
 * Sets context params current value index
 * @param {number} index context params current value index
 */ ContextParams.prototype.setCurrentIndex = function(index) {
    this.index = index;
    this.current = this.context[index];
    this.backtrack = this.context.slice(0, index);
    this.lookahead = this.context.slice(index + 1);
};
/**
 * Get an item at an offset from the current value
 * example (current value is 3):
 *  1    2   [3]   4    5   |   items values
 * -2   -1    0    1    2   |   offset values
 * @param {number} offset an offset from current value index
 */ ContextParams.prototype.get = function(offset) {
    switch(true){
        case offset === 0:
            return this.current;
        case offset < 0 && Math.abs(offset) <= this.backtrack.length:
            return this.backtrack.slice(offset)[0];
        case offset > 0 && offset <= this.lookahead.length:
            return this.lookahead[offset - 1];
        default:
            return null;
    }
};
/**
 * Converts a context range into a string value
 * @param {contextRange} range a context range
 */ Tokenizer.prototype.rangeToText = function(range) {
    if (range instanceof ContextRange) return this.getRangeTokens(range).map(function(token) {
        return token.char;
    }).join("");
};
/**
 * Converts all tokens into a string
 */ Tokenizer.prototype.getText = function() {
    return this.tokens.map(function(token) {
        return token.char;
    }).join("");
};
/**
 * Get a context by name
 * @param {string} contextName context name to get
 */ Tokenizer.prototype.getContext = function(contextName) {
    var context = this.registeredContexts[contextName];
    return !!context ? context : null;
};
/**
 * Subscribes a new event handler to an event
 * @param {string} eventName event name to subscribe to
 * @param {function} eventHandler a function to be invoked on event
 */ Tokenizer.prototype.on = function(eventName, eventHandler) {
    var event = this.events[eventName];
    if (!!event) return event.subscribe(eventHandler);
    else return null;
};
/**
 * Dispatches an event
 * @param {string} eventName event name
 * @param {any} args event handler arguments
 */ Tokenizer.prototype.dispatch = function(eventName, args) {
    var this$1 = this;
    var event = this.events[eventName];
    if (event instanceof Event) event.subscribers.forEach(function(subscriber) {
        subscriber.apply(this$1, args || []);
    });
};
/**
 * Register a new context checker
 * @param {string} contextName a unique context name
 * @param {function} contextStartCheck a predicate function that returns true on context start
 * @param {function} contextEndCheck  a predicate function that returns true on context end
 * TODO: call tokenize on registration to update context ranges with the new context.
 */ Tokenizer.prototype.registerContextChecker = function(contextName, contextStartCheck, contextEndCheck) {
    if (!!this.getContext(contextName)) return {
        FAIL: "context name '" + contextName + "' is already registered."
    };
    if (typeof contextStartCheck !== "function") return {
        FAIL: "missing context start check."
    };
    if (typeof contextEndCheck !== "function") return {
        FAIL: "missing context end check."
    };
    var contextCheckers = new ContextChecker(contextName, contextStartCheck, contextEndCheck);
    this.registeredContexts[contextName] = contextCheckers;
    this.contextCheckers.push(contextCheckers);
    return contextCheckers;
};
/**
 * Gets a context range tokens
 * @param {contextRange} range a context range
 */ Tokenizer.prototype.getRangeTokens = function(range) {
    var endIndex = range.startIndex + range.endOffset;
    return [].concat(this.tokens.slice(range.startIndex, endIndex));
};
/**
 * Gets the ranges of a context
 * @param {string} contextName context name
 */ Tokenizer.prototype.getContextRanges = function(contextName) {
    var context = this.getContext(contextName);
    if (!!context) return context.ranges;
    else return {
        FAIL: "context checker '" + contextName + "' is not registered."
    };
};
/**
 * Resets context ranges to run context update
 */ Tokenizer.prototype.resetContextsRanges = function() {
    var registeredContexts = this.registeredContexts;
    for(var contextName in registeredContexts)if (registeredContexts.hasOwnProperty(contextName)) {
        var context = registeredContexts[contextName];
        context.ranges = [];
    }
};
/**
 * Updates context ranges
 */ Tokenizer.prototype.updateContextsRanges = function() {
    this.resetContextsRanges();
    var chars = this.tokens.map(function(token) {
        return token.char;
    });
    for(var i = 0; i < chars.length; i++){
        var contextParams = new ContextParams(chars, i);
        this.runContextCheck(contextParams);
    }
    this.dispatch("updateContextsRanges", [
        this.registeredContexts
    ]);
};
/**
 * Sets the end offset of an open range
 * @param {number} offset range end offset
 * @param {string} contextName context name
 */ Tokenizer.prototype.setEndOffset = function(offset, contextName) {
    var startIndex = this.getContext(contextName).openRange.startIndex;
    var range = new ContextRange(startIndex, offset, contextName);
    var ranges = this.getContext(contextName).ranges;
    range.rangeId = contextName + "." + ranges.length;
    ranges.push(range);
    this.getContext(contextName).openRange = null;
    return range;
};
/**
 * Runs a context check on the current context
 * @param {contextParams} contextParams current context params
 */ Tokenizer.prototype.runContextCheck = function(contextParams) {
    var this$1 = this;
    var index = contextParams.index;
    this.contextCheckers.forEach(function(contextChecker) {
        var contextName = contextChecker.contextName;
        var openRange = this$1.getContext(contextName).openRange;
        if (!openRange && contextChecker.checkStart(contextParams)) {
            openRange = new ContextRange(index, null, contextName);
            this$1.getContext(contextName).openRange = openRange;
            this$1.dispatch("contextStart", [
                contextName,
                index
            ]);
        }
        if (!!openRange && contextChecker.checkEnd(contextParams)) {
            var offset = index - openRange.startIndex + 1;
            var range = this$1.setEndOffset(offset, contextName);
            this$1.dispatch("contextEnd", [
                contextName,
                range
            ]);
        }
    });
};
/**
 * Converts a text into a list of tokens
 * @param {string} text a text to tokenize
 */ Tokenizer.prototype.tokenize = function(text) {
    this.tokens = [];
    this.resetContextsRanges();
    var chars = Array.from(text);
    this.dispatch("start");
    for(var i = 0; i < chars.length; i++){
        var char = chars[i];
        var contextParams = new ContextParams(chars, i);
        this.dispatch("next", [
            contextParams
        ]);
        this.runContextCheck(contextParams);
        var token = new Token(char);
        this.tokens.push(token);
        this.dispatch("newToken", [
            token,
            contextParams
        ]);
    }
    this.dispatch("end", [
        this.tokens
    ]);
    return this.tokens;
};
// ╭─┄┄┄────────────────────────┄─────────────────────────────────────────────╮
// ┊ Character Class Assertions ┊ Checks if a char belongs to a certain class ┊
// ╰─╾──────────────────────────┄─────────────────────────────────────────────╯
// jscs:disable maximumLineLength
/**
 * Check if a char is Arabic
 * @param {string} c a single char
 */ function isArabicChar(c) {
    return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(c);
}
/**
 * Check if a char is an isolated arabic char
 * @param {string} c a single char
 */ function isIsolatedArabicChar(char) {
    return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(char);
}
/**
 * Check if a char is an Arabic Tashkeel char
 * @param {string} c a single char
 */ function isTashkeelArabicChar(char) {
    return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(char);
}
/**
 * Check if a char is Latin
 * @param {string} c a single char
 */ function isLatinChar(c) {
    return /[A-z]/.test(c);
}
/**
 * Check if a char is whitespace char
 * @param {string} c a single char
 */ function isWhiteSpace(c) {
    return /\s/.test(c);
}
/**
 * Query a feature by some of it's properties to lookup a glyph substitution.
 */ /**
 * Create feature query instance
 * @param {Font} font opentype font instance
 */ function FeatureQuery(font) {
    this.font = font;
    this.features = {};
}
/**
 * @typedef SubstitutionAction
 * @type Object
 * @property {number} id substitution type
 * @property {string} tag feature tag
 * @property {any} substitution substitution value(s)
 */ /**
 * Create a substitution action instance
 * @param {SubstitutionAction} action
 */ function SubstitutionAction(action) {
    this.id = action.id;
    this.tag = action.tag;
    this.substitution = action.substitution;
}
/**
 * Lookup a coverage table
 * @param {number} glyphIndex glyph index
 * @param {CoverageTable} coverage coverage table
 */ function lookupCoverage(glyphIndex, coverage) {
    if (!glyphIndex) return -1;
    switch(coverage.format){
        case 1:
            return coverage.glyphs.indexOf(glyphIndex);
        case 2:
            var ranges = coverage.ranges;
            for(var i = 0; i < ranges.length; i++){
                var range = ranges[i];
                if (glyphIndex >= range.start && glyphIndex <= range.end) {
                    var offset = glyphIndex - range.start;
                    return range.index + offset;
                }
            }
            break;
        default:
            return -1; // not found
    }
    return -1;
}
/**
 * Handle a single substitution - format 1
 * @param {ContextParams} contextParams context params to lookup
 */ function singleSubstitutionFormat1(glyphIndex, subtable) {
    var substituteIndex = lookupCoverage(glyphIndex, subtable.coverage);
    if (substituteIndex === -1) return null;
    return glyphIndex + subtable.deltaGlyphId;
}
/**
 * Handle a single substitution - format 2
 * @param {ContextParams} contextParams context params to lookup
 */ function singleSubstitutionFormat2(glyphIndex, subtable) {
    var substituteIndex = lookupCoverage(glyphIndex, subtable.coverage);
    if (substituteIndex === -1) return null;
    return subtable.substitute[substituteIndex];
}
/**
 * Lookup a list of coverage tables
 * @param {any} coverageList a list of coverage tables
 * @param {ContextParams} contextParams context params to lookup
 */ function lookupCoverageList(coverageList, contextParams) {
    var lookupList = [];
    for(var i = 0; i < coverageList.length; i++){
        var coverage = coverageList[i];
        var glyphIndex = contextParams.current;
        glyphIndex = Array.isArray(glyphIndex) ? glyphIndex[0] : glyphIndex;
        var lookupIndex = lookupCoverage(glyphIndex, coverage);
        if (lookupIndex !== -1) lookupList.push(lookupIndex);
    }
    if (lookupList.length !== coverageList.length) return -1;
    return lookupList;
}
/**
 * Handle chaining context substitution - format 3
 * @param {ContextParams} contextParams context params to lookup
 */ function chainingSubstitutionFormat3(contextParams, subtable) {
    var lookupsCount = subtable.inputCoverage.length + subtable.lookaheadCoverage.length + subtable.backtrackCoverage.length;
    if (contextParams.context.length < lookupsCount) return [];
    // INPUT LOOKUP //
    var inputLookups = lookupCoverageList(subtable.inputCoverage, contextParams);
    if (inputLookups === -1) return [];
    // LOOKAHEAD LOOKUP //
    var lookaheadOffset = subtable.inputCoverage.length - 1;
    if (contextParams.lookahead.length < subtable.lookaheadCoverage.length) return [];
    var lookaheadContext = contextParams.lookahead.slice(lookaheadOffset);
    while(lookaheadContext.length && isTashkeelArabicChar(lookaheadContext[0].char))lookaheadContext.shift();
    var lookaheadParams = new ContextParams(lookaheadContext, 0);
    var lookaheadLookups = lookupCoverageList(subtable.lookaheadCoverage, lookaheadParams);
    // BACKTRACK LOOKUP //
    var backtrackContext = [].concat(contextParams.backtrack);
    backtrackContext.reverse();
    while(backtrackContext.length && isTashkeelArabicChar(backtrackContext[0].char))backtrackContext.shift();
    if (backtrackContext.length < subtable.backtrackCoverage.length) return [];
    var backtrackParams = new ContextParams(backtrackContext, 0);
    var backtrackLookups = lookupCoverageList(subtable.backtrackCoverage, backtrackParams);
    var contextRulesMatch = inputLookups.length === subtable.inputCoverage.length && lookaheadLookups.length === subtable.lookaheadCoverage.length && backtrackLookups.length === subtable.backtrackCoverage.length;
    var substitutions = [];
    if (contextRulesMatch) for(var i = 0; i < subtable.lookupRecords.length; i++){
        var lookupRecord = subtable.lookupRecords[i];
        var lookupListIndex = lookupRecord.lookupListIndex;
        var lookupTable = this.getLookupByIndex(lookupListIndex);
        for(var s = 0; s < lookupTable.subtables.length; s++){
            var subtable$1 = lookupTable.subtables[s];
            var lookup = this.getLookupMethod(lookupTable, subtable$1);
            var substitutionType = this.getSubstitutionType(lookupTable, subtable$1);
            if (substitutionType === "12") for(var n = 0; n < inputLookups.length; n++){
                var glyphIndex = contextParams.get(n);
                var substitution = lookup(glyphIndex);
                if (substitution) substitutions.push(substitution);
            }
        }
    }
    return substitutions;
}
/**
 * Handle ligature substitution - format 1
 * @param {ContextParams} contextParams context params to lookup
 */ function ligatureSubstitutionFormat1(contextParams, subtable) {
    // COVERAGE LOOKUP //
    var glyphIndex = contextParams.current;
    var ligSetIndex = lookupCoverage(glyphIndex, subtable.coverage);
    if (ligSetIndex === -1) return null;
    // COMPONENTS LOOKUP
    // (!) note, components are ordered in the written direction.
    var ligature;
    var ligatureSet = subtable.ligatureSets[ligSetIndex];
    for(var s = 0; s < ligatureSet.length; s++){
        ligature = ligatureSet[s];
        for(var l = 0; l < ligature.components.length; l++){
            var lookaheadItem = contextParams.lookahead[l];
            var component = ligature.components[l];
            if (lookaheadItem !== component) break;
            if (l === ligature.components.length - 1) return ligature;
        }
    }
    return null;
}
/**
 * Handle decomposition substitution - format 1
 * @param {number} glyphIndex glyph index
 * @param {any} subtable subtable
 */ function decompositionSubstitutionFormat1(glyphIndex, subtable) {
    var substituteIndex = lookupCoverage(glyphIndex, subtable.coverage);
    if (substituteIndex === -1) return null;
    return subtable.sequences[substituteIndex];
}
/**
 * Get default script features indexes
 */ FeatureQuery.prototype.getDefaultScriptFeaturesIndexes = function() {
    var scripts = this.font.tables.gsub.scripts;
    for(var s = 0; s < scripts.length; s++){
        var script = scripts[s];
        if (script.tag === "DFLT") return script.script.defaultLangSys.featureIndexes;
    }
    return [];
};
/**
 * Get feature indexes of a specific script
 * @param {string} scriptTag script tag
 */ FeatureQuery.prototype.getScriptFeaturesIndexes = function(scriptTag) {
    var tables = this.font.tables;
    if (!tables.gsub) return [];
    if (!scriptTag) return this.getDefaultScriptFeaturesIndexes();
    var scripts = this.font.tables.gsub.scripts;
    for(var i = 0; i < scripts.length; i++){
        var script = scripts[i];
        if (script.tag === scriptTag && script.script.defaultLangSys) return script.script.defaultLangSys.featureIndexes;
        else {
            var langSysRecords = script.langSysRecords;
            if (!!langSysRecords) for(var j = 0; j < langSysRecords.length; j++){
                var langSysRecord = langSysRecords[j];
                if (langSysRecord.tag === scriptTag) {
                    var langSys = langSysRecord.langSys;
                    return langSys.featureIndexes;
                }
            }
        }
    }
    return this.getDefaultScriptFeaturesIndexes();
};
/**
 * Map a feature tag to a gsub feature
 * @param {any} features gsub features
 * @param {string} scriptTag script tag
 */ FeatureQuery.prototype.mapTagsToFeatures = function(features, scriptTag) {
    var tags = {};
    for(var i = 0; i < features.length; i++){
        var tag = features[i].tag;
        var feature = features[i].feature;
        tags[tag] = feature;
    }
    this.features[scriptTag].tags = tags;
};
/**
 * Get features of a specific script
 * @param {string} scriptTag script tag
 */ FeatureQuery.prototype.getScriptFeatures = function(scriptTag) {
    var features = this.features[scriptTag];
    if (this.features.hasOwnProperty(scriptTag)) return features;
    var featuresIndexes = this.getScriptFeaturesIndexes(scriptTag);
    if (!featuresIndexes) return null;
    var gsub = this.font.tables.gsub;
    features = featuresIndexes.map(function(index) {
        return gsub.features[index];
    });
    this.features[scriptTag] = features;
    this.mapTagsToFeatures(features, scriptTag);
    return features;
};
/**
 * Get substitution type
 * @param {any} lookupTable lookup table
 * @param {any} subtable subtable
 */ FeatureQuery.prototype.getSubstitutionType = function(lookupTable, subtable) {
    var lookupType = lookupTable.lookupType.toString();
    var substFormat = subtable.substFormat.toString();
    return lookupType + substFormat;
};
/**
 * Get lookup method
 * @param {any} lookupTable lookup table
 * @param {any} subtable subtable
 */ FeatureQuery.prototype.getLookupMethod = function(lookupTable, subtable) {
    var this$1 = this;
    var substitutionType = this.getSubstitutionType(lookupTable, subtable);
    switch(substitutionType){
        case "11":
            return function(glyphIndex) {
                return singleSubstitutionFormat1.apply(this$1, [
                    glyphIndex,
                    subtable
                ]);
            };
        case "12":
            return function(glyphIndex) {
                return singleSubstitutionFormat2.apply(this$1, [
                    glyphIndex,
                    subtable
                ]);
            };
        case "63":
            return function(contextParams) {
                return chainingSubstitutionFormat3.apply(this$1, [
                    contextParams,
                    subtable
                ]);
            };
        case "41":
            return function(contextParams) {
                return ligatureSubstitutionFormat1.apply(this$1, [
                    contextParams,
                    subtable
                ]);
            };
        case "21":
            return function(glyphIndex) {
                return decompositionSubstitutionFormat1.apply(this$1, [
                    glyphIndex,
                    subtable
                ]);
            };
        default:
            throw new Error("lookupType: " + lookupTable.lookupType + " - " + "substFormat: " + subtable.substFormat + " " + "is not yet supported");
    }
};
/**
 * [ LOOKUP TYPES ]
 * -------------------------------
 * Single                        1;
 * Multiple                      2;
 * Alternate                     3;
 * Ligature                      4;
 * Context                       5;
 * ChainingContext               6;
 * ExtensionSubstitution         7;
 * ReverseChainingContext        8;
 * -------------------------------
 *
 */ /**
 * @typedef FQuery
 * @type Object
 * @param {string} tag feature tag
 * @param {string} script feature script
 * @param {ContextParams} contextParams context params
 */ /**
 * Lookup a feature using a query parameters
 * @param {FQuery} query feature query
 */ FeatureQuery.prototype.lookupFeature = function(query) {
    var contextParams = query.contextParams;
    var currentIndex = contextParams.index;
    var feature = this.getFeature({
        tag: query.tag,
        script: query.script
    });
    if (!feature) return new Error("font '" + this.font.names.fullName.en + "' " + "doesn't support feature '" + query.tag + "' " + "for script '" + query.script + "'.");
    var lookups = this.getFeatureLookups(feature);
    var substitutions = [].concat(contextParams.context);
    for(var l = 0; l < lookups.length; l++){
        var lookupTable = lookups[l];
        var subtables = this.getLookupSubtables(lookupTable);
        for(var s = 0; s < subtables.length; s++){
            var subtable = subtables[s];
            var substType = this.getSubstitutionType(lookupTable, subtable);
            var lookup = this.getLookupMethod(lookupTable, subtable);
            var substitution = void 0;
            switch(substType){
                case "11":
                    substitution = lookup(contextParams.current);
                    if (substitution) substitutions.splice(currentIndex, 1, new SubstitutionAction({
                        id: 11,
                        tag: query.tag,
                        substitution: substitution
                    }));
                    break;
                case "12":
                    substitution = lookup(contextParams.current);
                    if (substitution) substitutions.splice(currentIndex, 1, new SubstitutionAction({
                        id: 12,
                        tag: query.tag,
                        substitution: substitution
                    }));
                    break;
                case "63":
                    substitution = lookup(contextParams);
                    if (Array.isArray(substitution) && substitution.length) substitutions.splice(currentIndex, 1, new SubstitutionAction({
                        id: 63,
                        tag: query.tag,
                        substitution: substitution
                    }));
                    break;
                case "41":
                    substitution = lookup(contextParams);
                    if (substitution) substitutions.splice(currentIndex, 1, new SubstitutionAction({
                        id: 41,
                        tag: query.tag,
                        substitution: substitution
                    }));
                    break;
                case "21":
                    substitution = lookup(contextParams.current);
                    if (substitution) substitutions.splice(currentIndex, 1, new SubstitutionAction({
                        id: 21,
                        tag: query.tag,
                        substitution: substitution
                    }));
                    break;
            }
            contextParams = new ContextParams(substitutions, currentIndex);
            if (Array.isArray(substitution) && !substitution.length) continue;
            substitution = null;
        }
    }
    return substitutions.length ? substitutions : null;
};
/**
 * Checks if a font supports a specific features
 * @param {FQuery} query feature query object
 */ FeatureQuery.prototype.supports = function(query) {
    if (!query.script) return false;
    this.getScriptFeatures(query.script);
    var supportedScript = this.features.hasOwnProperty(query.script);
    if (!query.tag) return supportedScript;
    var supportedFeature = this.features[query.script].some(function(feature) {
        return feature.tag === query.tag;
    });
    return supportedScript && supportedFeature;
};
/**
 * Get lookup table subtables
 * @param {any} lookupTable lookup table
 */ FeatureQuery.prototype.getLookupSubtables = function(lookupTable) {
    return lookupTable.subtables || null;
};
/**
 * Get lookup table by index
 * @param {number} index lookup table index
 */ FeatureQuery.prototype.getLookupByIndex = function(index) {
    var lookups = this.font.tables.gsub.lookups;
    return lookups[index] || null;
};
/**
 * Get lookup tables for a feature
 * @param {string} feature
 */ FeatureQuery.prototype.getFeatureLookups = function(feature) {
    // TODO: memoize
    return feature.lookupListIndexes.map(this.getLookupByIndex.bind(this));
};
/**
 * Query a feature by it's properties
 * @param {any} query an object that describes the properties of a query
 */ FeatureQuery.prototype.getFeature = function getFeature(query) {
    if (!this.font) return {
        FAIL: "No font was found"
    };
    if (!this.features.hasOwnProperty(query.script)) this.getScriptFeatures(query.script);
    var scriptFeatures = this.features[query.script];
    if (!scriptFeatures) return {
        FAIL: "No feature for script " + query.script
    };
    if (!scriptFeatures.tags[query.tag]) return null;
    return this.features[query.script].tags[query.tag];
};
/**
 * Arabic word context checkers
 */ function arabicWordStartCheck(contextParams) {
    var char = contextParams.current;
    var prevChar = contextParams.get(-1);
    return(// ? arabic first char
    prevChar === null && isArabicChar(char) || !isArabicChar(prevChar) && isArabicChar(char));
}
function arabicWordEndCheck(contextParams) {
    var nextChar = contextParams.get(1);
    return(// ? last arabic char
    nextChar === null || !isArabicChar(nextChar));
}
var arabicWordCheck = {
    startCheck: arabicWordStartCheck,
    endCheck: arabicWordEndCheck
};
/**
 * Arabic sentence context checkers
 */ function arabicSentenceStartCheck(contextParams) {
    var char = contextParams.current;
    var prevChar = contextParams.get(-1);
    return(// ? an arabic char preceded with a non arabic char
    (isArabicChar(char) || isTashkeelArabicChar(char)) && !isArabicChar(prevChar));
}
function arabicSentenceEndCheck(contextParams) {
    var nextChar = contextParams.get(1);
    switch(true){
        case nextChar === null:
            return true;
        case !isArabicChar(nextChar) && !isTashkeelArabicChar(nextChar):
            var nextIsWhitespace = isWhiteSpace(nextChar);
            if (!nextIsWhitespace) return true;
            if (nextIsWhitespace) {
                var arabicCharAhead = false;
                arabicCharAhead = contextParams.lookahead.some(function(c) {
                    return isArabicChar(c) || isTashkeelArabicChar(c);
                });
                if (!arabicCharAhead) return true;
            }
            break;
        default:
            return false;
    }
}
var arabicSentenceCheck = {
    startCheck: arabicSentenceStartCheck,
    endCheck: arabicSentenceEndCheck
};
/**
 * Apply single substitution format 1
 * @param {Array} substitutions substitutions
 * @param {any} tokens a list of tokens
 * @param {number} index token index
 */ function singleSubstitutionFormat1$1(action, tokens, index) {
    tokens[index].setState(action.tag, action.substitution);
}
/**
 * Apply single substitution format 2
 * @param {Array} substitutions substitutions
 * @param {any} tokens a list of tokens
 * @param {number} index token index
 */ function singleSubstitutionFormat2$1(action, tokens, index) {
    tokens[index].setState(action.tag, action.substitution);
}
/**
 * Apply chaining context substitution format 3
 * @param {Array} substitutions substitutions
 * @param {any} tokens a list of tokens
 * @param {number} index token index
 */ function chainingSubstitutionFormat3$1(action, tokens, index) {
    action.substitution.forEach(function(subst, offset) {
        var token = tokens[index + offset];
        token.setState(action.tag, subst);
    });
}
/**
 * Apply ligature substitution format 1
 * @param {Array} substitutions substitutions
 * @param {any} tokens a list of tokens
 * @param {number} index token index
 */ function ligatureSubstitutionFormat1$1(action, tokens, index) {
    var token = tokens[index];
    token.setState(action.tag, action.substitution.ligGlyph);
    var compsCount = action.substitution.components.length;
    for(var i = 0; i < compsCount; i++){
        token = tokens[index + i + 1];
        token.setState("deleted", true);
    }
}
/**
 * Supported substitutions
 */ var SUBSTITUTIONS = {
    11: singleSubstitutionFormat1$1,
    12: singleSubstitutionFormat2$1,
    63: chainingSubstitutionFormat3$1,
    41: ligatureSubstitutionFormat1$1
};
/**
 * Apply substitutions to a list of tokens
 * @param {Array} substitutions substitutions
 * @param {any} tokens a list of tokens
 * @param {number} index token index
 */ function applySubstitution(action, tokens, index) {
    if (action instanceof SubstitutionAction && SUBSTITUTIONS[action.id]) SUBSTITUTIONS[action.id](action, tokens, index);
}
/**
 * Apply Arabic presentation forms to a range of tokens
 */ /**
 * Check if a char can be connected to it's preceding char
 * @param {ContextParams} charContextParams context params of a char
 */ function willConnectPrev(charContextParams) {
    var backtrack = [].concat(charContextParams.backtrack);
    for(var i = backtrack.length - 1; i >= 0; i--){
        var prevChar = backtrack[i];
        var isolated = isIsolatedArabicChar(prevChar);
        var tashkeel = isTashkeelArabicChar(prevChar);
        if (!isolated && !tashkeel) return true;
        if (isolated) return false;
    }
    return false;
}
/**
 * Check if a char can be connected to it's proceeding char
 * @param {ContextParams} charContextParams context params of a char
 */ function willConnectNext(charContextParams) {
    if (isIsolatedArabicChar(charContextParams.current)) return false;
    for(var i = 0; i < charContextParams.lookahead.length; i++){
        var nextChar = charContextParams.lookahead[i];
        var tashkeel = isTashkeelArabicChar(nextChar);
        if (!tashkeel) return true;
    }
    return false;
}
/**
 * Apply arabic presentation forms to a list of tokens
 * @param {ContextRange} range a range of tokens
 */ function arabicPresentationForms(range) {
    var this$1 = this;
    var script = "arab";
    var tags = this.featuresTags[script];
    var tokens = this.tokenizer.getRangeTokens(range);
    if (tokens.length === 1) return;
    var contextParams = new ContextParams(tokens.map(function(token) {
        return token.getState("glyphIndex");
    }), 0);
    var charContextParams = new ContextParams(tokens.map(function(token) {
        return token.char;
    }), 0);
    tokens.forEach(function(token, index) {
        if (isTashkeelArabicChar(token.char)) return;
        contextParams.setCurrentIndex(index);
        charContextParams.setCurrentIndex(index);
        var CONNECT = 0; // 2 bits 00 (10: can connect next) (01: can connect prev)
        if (willConnectPrev(charContextParams)) CONNECT |= 1;
        if (willConnectNext(charContextParams)) CONNECT |= 2;
        var tag;
        switch(CONNECT){
            case 1:
                tag = "fina";
                break;
            case 2:
                tag = "init";
                break;
            case 3:
                tag = "medi";
                break;
        }
        if (tags.indexOf(tag) === -1) return;
        var substitutions = this$1.query.lookupFeature({
            tag: tag,
            script: script,
            contextParams: contextParams
        });
        if (substitutions instanceof Error) return console.info(substitutions.message);
        substitutions.forEach(function(action, index) {
            if (action instanceof SubstitutionAction) {
                applySubstitution(action, tokens, index);
                contextParams.context[index] = action.substitution;
            }
        });
    });
}
/**
 * Apply Arabic required ligatures feature to a range of tokens
 */ /**
 * Update context params
 * @param {any} tokens a list of tokens
 * @param {number} index current item index
 */ function getContextParams(tokens, index) {
    var context = tokens.map(function(token) {
        return token.activeState.value;
    });
    return new ContextParams(context, index || 0);
}
/**
 * Apply Arabic required ligatures to a context range
 * @param {ContextRange} range a range of tokens
 */ function arabicRequiredLigatures(range) {
    var this$1 = this;
    var script = "arab";
    var tokens = this.tokenizer.getRangeTokens(range);
    var contextParams = getContextParams(tokens);
    contextParams.context.forEach(function(glyphIndex, index) {
        contextParams.setCurrentIndex(index);
        var substitutions = this$1.query.lookupFeature({
            tag: "rlig",
            script: script,
            contextParams: contextParams
        });
        if (substitutions.length) {
            substitutions.forEach(function(action) {
                return applySubstitution(action, tokens, index);
            });
            contextParams = getContextParams(tokens);
        }
    });
}
/**
 * Latin word context checkers
 */ function latinWordStartCheck(contextParams) {
    var char = contextParams.current;
    var prevChar = contextParams.get(-1);
    return(// ? latin first char
    prevChar === null && isLatinChar(char) || !isLatinChar(prevChar) && isLatinChar(char));
}
function latinWordEndCheck(contextParams) {
    var nextChar = contextParams.get(1);
    return(// ? last latin char
    nextChar === null || !isLatinChar(nextChar));
}
var latinWordCheck = {
    startCheck: latinWordStartCheck,
    endCheck: latinWordEndCheck
};
/**
 * Apply Latin ligature feature to a range of tokens
 */ /**
 * Update context params
 * @param {any} tokens a list of tokens
 * @param {number} index current item index
 */ function getContextParams$1(tokens, index) {
    var context = tokens.map(function(token) {
        return token.activeState.value;
    });
    return new ContextParams(context, index || 0);
}
/**
 * Apply Arabic required ligatures to a context range
 * @param {ContextRange} range a range of tokens
 */ function latinLigature(range) {
    var this$1 = this;
    var script = "latn";
    var tokens = this.tokenizer.getRangeTokens(range);
    var contextParams = getContextParams$1(tokens);
    contextParams.context.forEach(function(glyphIndex, index) {
        contextParams.setCurrentIndex(index);
        var substitutions = this$1.query.lookupFeature({
            tag: "liga",
            script: script,
            contextParams: contextParams
        });
        if (substitutions.length) {
            substitutions.forEach(function(action) {
                return applySubstitution(action, tokens, index);
            });
            contextParams = getContextParams$1(tokens);
        }
    });
}
/**
 * Infer bidirectional properties for a given text and apply
 * the corresponding layout rules.
 */ /**
 * Create Bidi. features
 * @param {string} baseDir text base direction. value either 'ltr' or 'rtl'
 */ function Bidi(baseDir) {
    this.baseDir = baseDir || "ltr";
    this.tokenizer = new Tokenizer();
    this.featuresTags = {};
}
/**
 * Sets Bidi text
 * @param {string} text a text input
 */ Bidi.prototype.setText = function(text) {
    this.text = text;
};
/**
 * Store essential context checks:
 * arabic word check for applying gsub features
 * arabic sentence check for adjusting arabic layout
 */ Bidi.prototype.contextChecks = {
    latinWordCheck: latinWordCheck,
    arabicWordCheck: arabicWordCheck,
    arabicSentenceCheck: arabicSentenceCheck
};
/**
 * Register arabic word check
 */ function registerContextChecker(checkId) {
    var check = this.contextChecks[checkId + "Check"];
    return this.tokenizer.registerContextChecker(checkId, check.startCheck, check.endCheck);
}
/**
 * Perform pre tokenization procedure then
 * tokenize text input
 */ function tokenizeText() {
    registerContextChecker.call(this, "latinWord");
    registerContextChecker.call(this, "arabicWord");
    registerContextChecker.call(this, "arabicSentence");
    return this.tokenizer.tokenize(this.text);
}
/**
 * Reverse arabic sentence layout
 * TODO: check base dir before applying adjustments - priority low
 */ function reverseArabicSentences() {
    var this$1 = this;
    var ranges = this.tokenizer.getContextRanges("arabicSentence");
    ranges.forEach(function(range) {
        var rangeTokens = this$1.tokenizer.getRangeTokens(range);
        this$1.tokenizer.replaceRange(range.startIndex, range.endOffset, rangeTokens.reverse());
    });
}
/**
 * Register supported features tags
 * @param {script} script script tag
 * @param {Array} tags features tags list
 */ Bidi.prototype.registerFeatures = function(script, tags) {
    var this$1 = this;
    var supportedTags = tags.filter(function(tag) {
        return this$1.query.supports({
            script: script,
            tag: tag
        });
    });
    if (!this.featuresTags.hasOwnProperty(script)) this.featuresTags[script] = supportedTags;
    else this.featuresTags[script] = this.featuresTags[script].concat(supportedTags);
};
/**
 * Apply GSUB features
 * @param {Array} tagsList a list of features tags
 * @param {string} script a script tag
 * @param {Font} font opentype font instance
 */ Bidi.prototype.applyFeatures = function(font, features) {
    if (!font) throw new Error("No valid font was provided to apply features");
    if (!this.query) this.query = new FeatureQuery(font);
    for(var f = 0; f < features.length; f++){
        var feature = features[f];
        if (!this.query.supports({
            script: feature.script
        })) continue;
        this.registerFeatures(feature.script, feature.tags);
    }
};
/**
 * Register a state modifier
 * @param {string} modifierId state modifier id
 * @param {function} condition a predicate function that returns true or false
 * @param {function} modifier a modifier function to set token state
 */ Bidi.prototype.registerModifier = function(modifierId, condition, modifier) {
    this.tokenizer.registerModifier(modifierId, condition, modifier);
};
/**
 * Check if 'glyphIndex' is registered
 */ function checkGlyphIndexStatus() {
    if (this.tokenizer.registeredModifiers.indexOf("glyphIndex") === -1) throw new Error("glyphIndex modifier is required to apply arabic presentation features.");
}
/**
 * Apply arabic presentation forms features
 */ function applyArabicPresentationForms() {
    var this$1 = this;
    var script = "arab";
    if (!this.featuresTags.hasOwnProperty(script)) return;
    checkGlyphIndexStatus.call(this);
    var ranges = this.tokenizer.getContextRanges("arabicWord");
    ranges.forEach(function(range) {
        arabicPresentationForms.call(this$1, range);
    });
}
/**
 * Apply required arabic ligatures
 */ function applyArabicRequireLigatures() {
    var this$1 = this;
    var script = "arab";
    if (!this.featuresTags.hasOwnProperty(script)) return;
    var tags = this.featuresTags[script];
    if (tags.indexOf("rlig") === -1) return;
    checkGlyphIndexStatus.call(this);
    var ranges = this.tokenizer.getContextRanges("arabicWord");
    ranges.forEach(function(range) {
        arabicRequiredLigatures.call(this$1, range);
    });
}
/**
 * Apply required arabic ligatures
 */ function applyLatinLigatures() {
    var this$1 = this;
    var script = "latn";
    if (!this.featuresTags.hasOwnProperty(script)) return;
    var tags = this.featuresTags[script];
    if (tags.indexOf("liga") === -1) return;
    checkGlyphIndexStatus.call(this);
    var ranges = this.tokenizer.getContextRanges("latinWord");
    ranges.forEach(function(range) {
        latinLigature.call(this$1, range);
    });
}
/**
 * Check if a context is registered
 * @param {string} contextId context id
 */ Bidi.prototype.checkContextReady = function(contextId) {
    return !!this.tokenizer.getContext(contextId);
};
/**
 * Apply features to registered contexts
 */ Bidi.prototype.applyFeaturesToContexts = function() {
    if (this.checkContextReady("arabicWord")) {
        applyArabicPresentationForms.call(this);
        applyArabicRequireLigatures.call(this);
    }
    if (this.checkContextReady("latinWord")) applyLatinLigatures.call(this);
    if (this.checkContextReady("arabicSentence")) reverseArabicSentences.call(this);
};
/**
 * process text input
 * @param {string} text an input text
 */ Bidi.prototype.processText = function(text) {
    if (!this.text || this.text !== text) {
        this.setText(text);
        tokenizeText.call(this);
        this.applyFeaturesToContexts();
    }
};
/**
 * Process a string of text to identify and adjust
 * bidirectional text entities.
 * @param {string} text input text
 */ Bidi.prototype.getBidiText = function(text) {
    this.processText(text);
    return this.tokenizer.getText();
};
/**
 * Get the current state index of each token
 * @param {text} text an input text
 */ Bidi.prototype.getTextGlyphs = function(text) {
    this.processText(text);
    var indexes = [];
    for(var i = 0; i < this.tokenizer.tokens.length; i++){
        var token = this.tokenizer.tokens[i];
        if (token.state.deleted) continue;
        var index = token.activeState.value;
        indexes.push(Array.isArray(index) ? index[0] : index);
    }
    return indexes;
};
// The Font object
/**
 * @typedef FontOptions
 * @type Object
 * @property {Boolean} empty - whether to create a new empty font
 * @property {string} familyName
 * @property {string} styleName
 * @property {string=} fullName
 * @property {string=} postScriptName
 * @property {string=} designer
 * @property {string=} designerURL
 * @property {string=} manufacturer
 * @property {string=} manufacturerURL
 * @property {string=} license
 * @property {string=} licenseURL
 * @property {string=} version
 * @property {string=} description
 * @property {string=} copyright
 * @property {string=} trademark
 * @property {Number} unitsPerEm
 * @property {Number} ascender
 * @property {Number} descender
 * @property {Number} createdTimestamp
 * @property {string=} weightClass
 * @property {string=} widthClass
 * @property {string=} fsSelection
 */ /**
 * A Font represents a loaded OpenType font file.
 * It contains a set of glyphs and methods to draw text on a drawing context,
 * or to get a path representing the text.
 * @exports opentype.Font
 * @class
 * @param {FontOptions}
 * @constructor
 */ function Font(options) {
    options = options || {};
    options.tables = options.tables || {};
    if (!options.empty) {
        // Check that we've provided the minimum set of names.
        checkArgument(options.familyName, "When creating a new Font object, familyName is required.");
        checkArgument(options.styleName, "When creating a new Font object, styleName is required.");
        checkArgument(options.unitsPerEm, "When creating a new Font object, unitsPerEm is required.");
        checkArgument(options.ascender, "When creating a new Font object, ascender is required.");
        checkArgument(options.descender <= 0, "When creating a new Font object, negative descender value is required.");
        // OS X will complain if the names are empty, so we put a single space everywhere by default.
        this.names = {
            fontFamily: {
                en: options.familyName || " "
            },
            fontSubfamily: {
                en: options.styleName || " "
            },
            fullName: {
                en: options.fullName || options.familyName + " " + options.styleName
            },
            // postScriptName may not contain any whitespace
            postScriptName: {
                en: options.postScriptName || (options.familyName + options.styleName).replace(/\s/g, "")
            },
            designer: {
                en: options.designer || " "
            },
            designerURL: {
                en: options.designerURL || " "
            },
            manufacturer: {
                en: options.manufacturer || " "
            },
            manufacturerURL: {
                en: options.manufacturerURL || " "
            },
            license: {
                en: options.license || " "
            },
            licenseURL: {
                en: options.licenseURL || " "
            },
            version: {
                en: options.version || "Version 0.1"
            },
            description: {
                en: options.description || " "
            },
            copyright: {
                en: options.copyright || " "
            },
            trademark: {
                en: options.trademark || " "
            }
        };
        this.unitsPerEm = options.unitsPerEm || 1000;
        this.ascender = options.ascender;
        this.descender = options.descender;
        this.createdTimestamp = options.createdTimestamp;
        this.tables = Object.assign(options.tables, {
            os2: Object.assign({
                usWeightClass: options.weightClass || this.usWeightClasses.MEDIUM,
                usWidthClass: options.widthClass || this.usWidthClasses.MEDIUM,
                fsSelection: options.fsSelection || this.fsSelectionValues.REGULAR
            }, options.tables.os2)
        });
    }
    this.supported = true; // Deprecated: parseBuffer will throw an error if font is not supported.
    this.glyphs = new glyphset.GlyphSet(this, options.glyphs || []);
    this.encoding = new DefaultEncoding(this);
    this.position = new Position(this);
    this.substitution = new Substitution(this);
    this.tables = this.tables || {};
    // needed for low memory mode only.
    this._push = null;
    this._hmtxTableData = {};
    Object.defineProperty(this, "hinting", {
        get: function() {
            if (this._hinting) return this._hinting;
            if (this.outlinesFormat === "truetype") return this._hinting = new Hinting(this);
        }
    });
}
/**
 * Check if the font has a glyph for the given character.
 * @param  {string}
 * @return {Boolean}
 */ Font.prototype.hasChar = function(c) {
    return this.encoding.charToGlyphIndex(c) !== null;
};
/**
 * Convert the given character to a single glyph index.
 * Note that this function assumes that there is a one-to-one mapping between
 * the given character and a glyph; for complex scripts this might not be the case.
 * @param  {string}
 * @return {Number}
 */ Font.prototype.charToGlyphIndex = function(s) {
    return this.encoding.charToGlyphIndex(s);
};
/**
 * Convert the given character to a single Glyph object.
 * Note that this function assumes that there is a one-to-one mapping between
 * the given character and a glyph; for complex scripts this might not be the case.
 * @param  {string}
 * @return {opentype.Glyph}
 */ Font.prototype.charToGlyph = function(c) {
    var glyphIndex = this.charToGlyphIndex(c);
    var glyph = this.glyphs.get(glyphIndex);
    if (!glyph) // .notdef
    glyph = this.glyphs.get(0);
    return glyph;
};
/**
 * Update features
 * @param {any} options features options
 */ Font.prototype.updateFeatures = function(options) {
    // TODO: update all features options not only 'latn'.
    return this.defaultRenderOptions.features.map(function(feature) {
        if (feature.script === "latn") return {
            script: "latn",
            tags: feature.tags.filter(function(tag) {
                return options[tag];
            })
        };
        else return feature;
    });
};
/**
 * Convert the given text to a list of Glyph objects.
 * Note that there is no strict one-to-one mapping between characters and
 * glyphs, so the list of returned glyphs can be larger or smaller than the
 * length of the given string.
 * @param  {string}
 * @param  {GlyphRenderOptions} [options]
 * @return {opentype.Glyph[]}
 */ Font.prototype.stringToGlyphs = function(s, options) {
    var this$1 = this;
    var bidi = new Bidi();
    // Create and register 'glyphIndex' state modifier
    var charToGlyphIndexMod = function(token) {
        return this$1.charToGlyphIndex(token.char);
    };
    bidi.registerModifier("glyphIndex", null, charToGlyphIndexMod);
    // roll-back to default features
    var features = options ? this.updateFeatures(options.features) : this.defaultRenderOptions.features;
    bidi.applyFeatures(this, features);
    var indexes = bidi.getTextGlyphs(s);
    var length = indexes.length;
    // convert glyph indexes to glyph objects
    var glyphs = new Array(length);
    var notdef = this.glyphs.get(0);
    for(var i = 0; i < length; i += 1)glyphs[i] = this.glyphs.get(indexes[i]) || notdef;
    return glyphs;
};
/**
 * @param  {string}
 * @return {Number}
 */ Font.prototype.nameToGlyphIndex = function(name) {
    return this.glyphNames.nameToGlyphIndex(name);
};
/**
 * @param  {string}
 * @return {opentype.Glyph}
 */ Font.prototype.nameToGlyph = function(name) {
    var glyphIndex = this.nameToGlyphIndex(name);
    var glyph = this.glyphs.get(glyphIndex);
    if (!glyph) // .notdef
    glyph = this.glyphs.get(0);
    return glyph;
};
/**
 * @param  {Number}
 * @return {String}
 */ Font.prototype.glyphIndexToName = function(gid) {
    if (!this.glyphNames.glyphIndexToName) return "";
    return this.glyphNames.glyphIndexToName(gid);
};
/**
 * Retrieve the value of the kerning pair between the left glyph (or its index)
 * and the right glyph (or its index). If no kerning pair is found, return 0.
 * The kerning value gets added to the advance width when calculating the spacing
 * between glyphs.
 * For GPOS kerning, this method uses the default script and language, which covers
 * most use cases. To have greater control, use font.position.getKerningValue .
 * @param  {opentype.Glyph} leftGlyph
 * @param  {opentype.Glyph} rightGlyph
 * @return {Number}
 */ Font.prototype.getKerningValue = function(leftGlyph, rightGlyph) {
    leftGlyph = leftGlyph.index || leftGlyph;
    rightGlyph = rightGlyph.index || rightGlyph;
    var gposKerning = this.position.defaultKerningTables;
    if (gposKerning) return this.position.getKerningValue(gposKerning, leftGlyph, rightGlyph);
    // "kern" table
    return this.kerningPairs[leftGlyph + "," + rightGlyph] || 0;
};
/**
 * @typedef GlyphRenderOptions
 * @type Object
 * @property {string} [script] - script used to determine which features to apply. By default, 'DFLT' or 'latn' is used.
 *                               See https://www.microsoft.com/typography/otspec/scripttags.htm
 * @property {string} [language='dflt'] - language system used to determine which features to apply.
 *                                        See https://www.microsoft.com/typography/developers/opentype/languagetags.aspx
 * @property {boolean} [kerning=true] - whether to include kerning values
 * @property {object} [features] - OpenType Layout feature tags. Used to enable or disable the features of the given script/language system.
 *                                 See https://www.microsoft.com/typography/otspec/featuretags.htm
 */ Font.prototype.defaultRenderOptions = {
    kerning: true,
    features: [
        /**
         * these 4 features are required to render Arabic text properly
         * and shouldn't be turned off when rendering arabic text.
         */ {
            script: "arab",
            tags: [
                "init",
                "medi",
                "fina",
                "rlig"
            ]
        },
        {
            script: "latn",
            tags: [
                "liga",
                "rlig"
            ]
        }
    ]
};
/**
 * Helper function that invokes the given callback for each glyph in the given text.
 * The callback gets `(glyph, x, y, fontSize, options)`.* @param  {string} text
 * @param {string} text - The text to apply.
 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
 * @param  {GlyphRenderOptions=} options
 * @param  {Function} callback
 */ Font.prototype.forEachGlyph = function(text, x, y, fontSize, options, callback) {
    x = x !== undefined ? x : 0;
    y = y !== undefined ? y : 0;
    fontSize = fontSize !== undefined ? fontSize : 72;
    options = Object.assign({}, this.defaultRenderOptions, options);
    var fontScale = 1 / this.unitsPerEm * fontSize;
    var glyphs = this.stringToGlyphs(text, options);
    var kerningLookups;
    if (options.kerning) {
        var script = options.script || this.position.getDefaultScriptName();
        kerningLookups = this.position.getKerningTables(script, options.language);
    }
    for(var i = 0; i < glyphs.length; i += 1){
        var glyph = glyphs[i];
        callback.call(this, glyph, x, y, fontSize, options);
        if (glyph.advanceWidth) x += glyph.advanceWidth * fontScale;
        if (options.kerning && i < glyphs.length - 1) {
            // We should apply position adjustment lookups in a more generic way.
            // Here we only use the xAdvance value.
            var kerningValue = kerningLookups ? this.position.getKerningValue(kerningLookups, glyph.index, glyphs[i + 1].index) : this.getKerningValue(glyph, glyphs[i + 1]);
            x += kerningValue * fontScale;
        }
        if (options.letterSpacing) x += options.letterSpacing * fontSize;
        else if (options.tracking) x += options.tracking / 1000 * fontSize;
    }
    return x;
};
/**
 * Create a Path object that represents the given text.
 * @param  {string} text - The text to create.
 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
 * @param  {GlyphRenderOptions=} options
 * @return {opentype.Path}
 */ Font.prototype.getPath = function(text, x, y, fontSize, options) {
    var fullPath = new Path();
    this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
        var glyphPath = glyph.getPath(gX, gY, gFontSize, options, this);
        fullPath.extend(glyphPath);
    });
    return fullPath;
};
/**
 * Create an array of Path objects that represent the glyphs of a given text.
 * @param  {string} text - The text to create.
 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
 * @param  {GlyphRenderOptions=} options
 * @return {opentype.Path[]}
 */ Font.prototype.getPaths = function(text, x, y, fontSize, options) {
    var glyphPaths = [];
    this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
        var glyphPath = glyph.getPath(gX, gY, gFontSize, options, this);
        glyphPaths.push(glyphPath);
    });
    return glyphPaths;
};
/**
 * Returns the advance width of a text.
 *
 * This is something different than Path.getBoundingBox() as for example a
 * suffixed whitespace increases the advanceWidth but not the bounding box
 * or an overhanging letter like a calligraphic 'f' might have a quite larger
 * bounding box than its advance width.
 *
 * This corresponds to canvas2dContext.measureText(text).width
 *
 * @param  {string} text - The text to create.
 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
 * @param  {GlyphRenderOptions=} options
 * @return advance width
 */ Font.prototype.getAdvanceWidth = function(text, fontSize, options) {
    return this.forEachGlyph(text, 0, 0, fontSize, options, function() {});
};
/**
 * Draw the text on the given drawing context.
 * @param  {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
 * @param  {string} text - The text to create.
 * @param  {number} [x=0] - Horizontal position of the beginning of the text.
 * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
 * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
 * @param  {GlyphRenderOptions=} options
 */ Font.prototype.draw = function(ctx, text, x, y, fontSize, options) {
    this.getPath(text, x, y, fontSize, options).draw(ctx);
};
/**
 * Draw the points of all glyphs in the text.
 * On-curve points will be drawn in blue, off-curve points will be drawn in red.
 * @param {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
 * @param {string} text - The text to create.
 * @param {number} [x=0] - Horizontal position of the beginning of the text.
 * @param {number} [y=0] - Vertical position of the *baseline* of the text.
 * @param {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
 * @param {GlyphRenderOptions=} options
 */ Font.prototype.drawPoints = function(ctx, text, x, y, fontSize, options) {
    this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
        glyph.drawPoints(ctx, gX, gY, gFontSize);
    });
};
/**
 * Draw lines indicating important font measurements for all glyphs in the text.
 * Black lines indicate the origin of the coordinate system (point 0,0).
 * Blue lines indicate the glyph bounding box.
 * Green line indicates the advance width of the glyph.
 * @param {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
 * @param {string} text - The text to create.
 * @param {number} [x=0] - Horizontal position of the beginning of the text.
 * @param {number} [y=0] - Vertical position of the *baseline* of the text.
 * @param {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
 * @param {GlyphRenderOptions=} options
 */ Font.prototype.drawMetrics = function(ctx, text, x, y, fontSize, options) {
    this.forEachGlyph(text, x, y, fontSize, options, function(glyph, gX, gY, gFontSize) {
        glyph.drawMetrics(ctx, gX, gY, gFontSize);
    });
};
/**
 * @param  {string}
 * @return {string}
 */ Font.prototype.getEnglishName = function(name) {
    var translations = this.names[name];
    if (translations) return translations.en;
};
/**
 * Validate
 */ Font.prototype.validate = function() {
    var _this = this;
    function assert(predicate, message) {}
    function assertNamePresent(name) {
        var englishName = _this.getEnglishName(name);
        assert(englishName && englishName.trim().length > 0);
    }
    // Identification information
    assertNamePresent("fontFamily");
    assertNamePresent("weightName");
    assertNamePresent("manufacturer");
    assertNamePresent("copyright");
    assertNamePresent("version");
    // Dimension information
    assert(this.unitsPerEm > 0);
};
/**
 * Convert the font object to a SFNT data structure.
 * This structure contains all the necessary tables and metadata to create a binary OTF file.
 * @return {opentype.Table}
 */ Font.prototype.toTables = function() {
    return sfnt.fontToTable(this);
};
/**
 * @deprecated Font.toBuffer is deprecated. Use Font.toArrayBuffer instead.
 */ Font.prototype.toBuffer = function() {
    console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead.");
    return this.toArrayBuffer();
};
/**
 * Converts a `opentype.Font` into an `ArrayBuffer`
 * @return {ArrayBuffer}
 */ Font.prototype.toArrayBuffer = function() {
    var sfntTable = this.toTables();
    var bytes = sfntTable.encode();
    var buffer = new ArrayBuffer(bytes.length);
    var intArray = new Uint8Array(buffer);
    for(var i = 0; i < bytes.length; i++)intArray[i] = bytes[i];
    return buffer;
};
/**
 * Initiate a download of the OpenType font.
 */ Font.prototype.download = function(fileName) {
    var familyName = this.getEnglishName("fontFamily");
    var styleName = this.getEnglishName("fontSubfamily");
    fileName = fileName || familyName.replace(/\s/g, "") + "-" + styleName + ".otf";
    var arrayBuffer = this.toArrayBuffer();
    if (isBrowser()) {
        window.URL = window.URL || window.webkitURL;
        if (window.URL) {
            var dataView = new DataView(arrayBuffer);
            var blob = new Blob([
                dataView
            ], {
                type: "font/opentype"
            });
            var link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            var event = document.createEvent("MouseEvents");
            event.initEvent("click", true, false);
            link.dispatchEvent(event);
        } else console.warn("Font file could not be downloaded. Try using a different browser.");
    } else {
        var fs = require("fs");
        var buffer = arrayBufferToNodeBuffer(arrayBuffer);
        fs.writeFileSync(fileName, buffer);
    }
};
/**
 * @private
 */ Font.prototype.fsSelectionValues = {
    ITALIC: 0x001,
    UNDERSCORE: 0x002,
    NEGATIVE: 0x004,
    OUTLINED: 0x008,
    STRIKEOUT: 0x010,
    BOLD: 0x020,
    REGULAR: 0x040,
    USER_TYPO_METRICS: 0x080,
    WWS: 0x100,
    OBLIQUE: 0x200 //512
};
/**
 * @private
 */ Font.prototype.usWidthClasses = {
    ULTRA_CONDENSED: 1,
    EXTRA_CONDENSED: 2,
    CONDENSED: 3,
    SEMI_CONDENSED: 4,
    MEDIUM: 5,
    SEMI_EXPANDED: 6,
    EXPANDED: 7,
    EXTRA_EXPANDED: 8,
    ULTRA_EXPANDED: 9
};
/**
 * @private
 */ Font.prototype.usWeightClasses = {
    THIN: 100,
    EXTRA_LIGHT: 200,
    LIGHT: 300,
    NORMAL: 400,
    MEDIUM: 500,
    SEMI_BOLD: 600,
    BOLD: 700,
    EXTRA_BOLD: 800,
    BLACK: 900
};
// The `fvar` table stores font variation axes and instances.
function addName(name, names) {
    var nameString = JSON.stringify(name);
    var nameID = 256;
    for(var nameKey in names){
        var n = parseInt(nameKey);
        if (!n || n < 256) continue;
        if (JSON.stringify(names[nameKey]) === nameString) return n;
        if (nameID <= n) nameID = n + 1;
    }
    names[nameID] = name;
    return nameID;
}
function makeFvarAxis(n, axis, names) {
    var nameID = addName(axis.name, names);
    return [
        {
            name: "tag_" + n,
            type: "TAG",
            value: axis.tag
        },
        {
            name: "minValue_" + n,
            type: "FIXED",
            value: axis.minValue << 16
        },
        {
            name: "defaultValue_" + n,
            type: "FIXED",
            value: axis.defaultValue << 16
        },
        {
            name: "maxValue_" + n,
            type: "FIXED",
            value: axis.maxValue << 16
        },
        {
            name: "flags_" + n,
            type: "USHORT",
            value: 0
        },
        {
            name: "nameID_" + n,
            type: "USHORT",
            value: nameID
        }
    ];
}
function parseFvarAxis(data, start, names) {
    var axis = {};
    var p = new parse.Parser(data, start);
    axis.tag = p.parseTag();
    axis.minValue = p.parseFixed();
    axis.defaultValue = p.parseFixed();
    axis.maxValue = p.parseFixed();
    p.skip("uShort", 1); // reserved for flags; no values defined
    axis.name = names[p.parseUShort()] || {};
    return axis;
}
function makeFvarInstance(n, inst, axes, names) {
    var nameID = addName(inst.name, names);
    var fields = [
        {
            name: "nameID_" + n,
            type: "USHORT",
            value: nameID
        },
        {
            name: "flags_" + n,
            type: "USHORT",
            value: 0
        }
    ];
    for(var i = 0; i < axes.length; ++i){
        var axisTag = axes[i].tag;
        fields.push({
            name: "axis_" + n + " " + axisTag,
            type: "FIXED",
            value: inst.coordinates[axisTag] << 16
        });
    }
    return fields;
}
function parseFvarInstance(data, start, axes, names) {
    var inst = {};
    var p = new parse.Parser(data, start);
    inst.name = names[p.parseUShort()] || {};
    p.skip("uShort", 1); // reserved for flags; no values defined
    inst.coordinates = {};
    for(var i = 0; i < axes.length; ++i)inst.coordinates[axes[i].tag] = p.parseFixed();
    return inst;
}
function makeFvarTable(fvar, names) {
    var result = new table.Table("fvar", [
        {
            name: "version",
            type: "ULONG",
            value: 0x10000
        },
        {
            name: "offsetToData",
            type: "USHORT",
            value: 0
        },
        {
            name: "countSizePairs",
            type: "USHORT",
            value: 2
        },
        {
            name: "axisCount",
            type: "USHORT",
            value: fvar.axes.length
        },
        {
            name: "axisSize",
            type: "USHORT",
            value: 20
        },
        {
            name: "instanceCount",
            type: "USHORT",
            value: fvar.instances.length
        },
        {
            name: "instanceSize",
            type: "USHORT",
            value: 4 + fvar.axes.length * 4
        }
    ]);
    result.offsetToData = result.sizeOf();
    for(var i = 0; i < fvar.axes.length; i++)result.fields = result.fields.concat(makeFvarAxis(i, fvar.axes[i], names));
    for(var j = 0; j < fvar.instances.length; j++)result.fields = result.fields.concat(makeFvarInstance(j, fvar.instances[j], fvar.axes, names));
    return result;
}
function parseFvarTable(data, start, names) {
    var p = new parse.Parser(data, start);
    var tableVersion = p.parseULong();
    check.argument(tableVersion === 0x00010000, "Unsupported fvar table version.");
    var offsetToData = p.parseOffset16();
    // Skip countSizePairs.
    p.skip("uShort", 1);
    var axisCount = p.parseUShort();
    var axisSize = p.parseUShort();
    var instanceCount = p.parseUShort();
    var instanceSize = p.parseUShort();
    var axes = [];
    for(var i = 0; i < axisCount; i++)axes.push(parseFvarAxis(data, start + offsetToData + i * axisSize, names));
    var instances = [];
    var instanceStart = start + offsetToData + axisCount * axisSize;
    for(var j = 0; j < instanceCount; j++)instances.push(parseFvarInstance(data, instanceStart + j * instanceSize, axes, names));
    return {
        axes: axes,
        instances: instances
    };
}
var fvar = {
    make: makeFvarTable,
    parse: parseFvarTable
};
// The `GDEF` table contains various glyph properties
var attachList = function() {
    return {
        coverage: this.parsePointer(Parser.coverage),
        attachPoints: this.parseList(Parser.pointer(Parser.uShortList))
    };
};
var caretValue = function() {
    var format = this.parseUShort();
    check.argument(format === 1 || format === 2 || format === 3, "Unsupported CaretValue table version.");
    if (format === 1) return {
        coordinate: this.parseShort()
    };
    else if (format === 2) return {
        pointindex: this.parseShort()
    };
    else if (format === 3) // Device / Variation Index tables unsupported
    return {
        coordinate: this.parseShort()
    };
};
var ligGlyph = function() {
    return this.parseList(Parser.pointer(caretValue));
};
var ligCaretList = function() {
    return {
        coverage: this.parsePointer(Parser.coverage),
        ligGlyphs: this.parseList(Parser.pointer(ligGlyph))
    };
};
var markGlyphSets = function() {
    this.parseUShort(); // Version
    return this.parseList(Parser.pointer(Parser.coverage));
};
function parseGDEFTable(data, start) {
    start = start || 0;
    var p = new Parser(data, start);
    var tableVersion = p.parseVersion(1);
    check.argument(tableVersion === 1 || tableVersion === 1.2 || tableVersion === 1.3, "Unsupported GDEF table version.");
    var gdef = {
        version: tableVersion,
        classDef: p.parsePointer(Parser.classDef),
        attachList: p.parsePointer(attachList),
        ligCaretList: p.parsePointer(ligCaretList),
        markAttachClassDef: p.parsePointer(Parser.classDef)
    };
    if (tableVersion >= 1.2) gdef.markGlyphSets = p.parsePointer(markGlyphSets);
    return gdef;
}
var gdef = {
    parse: parseGDEFTable
};
// The `GPOS` table contains kerning pairs, among other things.
var subtableParsers$1 = new Array(10); // subtableParsers[0] is unused
// https://docs.microsoft.com/en-us/typography/opentype/spec/gpos#lookup-type-1-single-adjustment-positioning-subtable
// this = Parser instance
subtableParsers$1[1] = function parseLookup1() {
    var start = this.offset + this.relativeOffset;
    var posformat = this.parseUShort();
    if (posformat === 1) return {
        posFormat: 1,
        coverage: this.parsePointer(Parser.coverage),
        value: this.parseValueRecord()
    };
    else if (posformat === 2) return {
        posFormat: 2,
        coverage: this.parsePointer(Parser.coverage),
        values: this.parseValueRecordList()
    };
    check.assert(false, "0x" + start.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.");
};
// https://docs.microsoft.com/en-us/typography/opentype/spec/gpos#lookup-type-2-pair-adjustment-positioning-subtable
subtableParsers$1[2] = function parseLookup2() {
    var start = this.offset + this.relativeOffset;
    var posFormat = this.parseUShort();
    check.assert(posFormat === 1 || posFormat === 2, "0x" + start.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
    var coverage = this.parsePointer(Parser.coverage);
    var valueFormat1 = this.parseUShort();
    var valueFormat2 = this.parseUShort();
    if (posFormat === 1) // Adjustments for Glyph Pairs
    return {
        posFormat: posFormat,
        coverage: coverage,
        valueFormat1: valueFormat1,
        valueFormat2: valueFormat2,
        pairSets: this.parseList(Parser.pointer(Parser.list(function() {
            return {
                secondGlyph: this.parseUShort(),
                value1: this.parseValueRecord(valueFormat1),
                value2: this.parseValueRecord(valueFormat2)
            };
        })))
    };
    else if (posFormat === 2) {
        var classDef1 = this.parsePointer(Parser.classDef);
        var classDef2 = this.parsePointer(Parser.classDef);
        var class1Count = this.parseUShort();
        var class2Count = this.parseUShort();
        return {
            // Class Pair Adjustment
            posFormat: posFormat,
            coverage: coverage,
            valueFormat1: valueFormat1,
            valueFormat2: valueFormat2,
            classDef1: classDef1,
            classDef2: classDef2,
            class1Count: class1Count,
            class2Count: class2Count,
            classRecords: this.parseList(class1Count, Parser.list(class2Count, function() {
                return {
                    value1: this.parseValueRecord(valueFormat1),
                    value2: this.parseValueRecord(valueFormat2)
                };
            }))
        };
    }
};
subtableParsers$1[3] = function parseLookup3() {
    return {
        error: "GPOS Lookup 3 not supported"
    };
};
subtableParsers$1[4] = function parseLookup4() {
    return {
        error: "GPOS Lookup 4 not supported"
    };
};
subtableParsers$1[5] = function parseLookup5() {
    return {
        error: "GPOS Lookup 5 not supported"
    };
};
subtableParsers$1[6] = function parseLookup6() {
    return {
        error: "GPOS Lookup 6 not supported"
    };
};
subtableParsers$1[7] = function parseLookup7() {
    return {
        error: "GPOS Lookup 7 not supported"
    };
};
subtableParsers$1[8] = function parseLookup8() {
    return {
        error: "GPOS Lookup 8 not supported"
    };
};
subtableParsers$1[9] = function parseLookup9() {
    return {
        error: "GPOS Lookup 9 not supported"
    };
};
// https://docs.microsoft.com/en-us/typography/opentype/spec/gpos
function parseGposTable(data, start) {
    start = start || 0;
    var p = new Parser(data, start);
    var tableVersion = p.parseVersion(1);
    check.argument(tableVersion === 1 || tableVersion === 1.1, "Unsupported GPOS table version " + tableVersion);
    if (tableVersion === 1) return {
        version: tableVersion,
        scripts: p.parseScriptList(),
        features: p.parseFeatureList(),
        lookups: p.parseLookupList(subtableParsers$1)
    };
    else return {
        version: tableVersion,
        scripts: p.parseScriptList(),
        features: p.parseFeatureList(),
        lookups: p.parseLookupList(subtableParsers$1),
        variations: p.parseFeatureVariationsList()
    };
}
// GPOS Writing //////////////////////////////////////////////
// NOT SUPPORTED
var subtableMakers$1 = new Array(10);
function makeGposTable(gpos) {
    return new table.Table("GPOS", [
        {
            name: "version",
            type: "ULONG",
            value: 0x10000
        },
        {
            name: "scripts",
            type: "TABLE",
            value: new table.ScriptList(gpos.scripts)
        },
        {
            name: "features",
            type: "TABLE",
            value: new table.FeatureList(gpos.features)
        },
        {
            name: "lookups",
            type: "TABLE",
            value: new table.LookupList(gpos.lookups, subtableMakers$1)
        }
    ]);
}
var gpos = {
    parse: parseGposTable,
    make: makeGposTable
};
// The `kern` table contains kerning pairs.
function parseWindowsKernTable(p) {
    var pairs = {};
    // Skip nTables.
    p.skip("uShort");
    var subtableVersion = p.parseUShort();
    check.argument(subtableVersion === 0, "Unsupported kern sub-table version.");
    // Skip subtableLength, subtableCoverage
    p.skip("uShort", 2);
    var nPairs = p.parseUShort();
    // Skip searchRange, entrySelector, rangeShift.
    p.skip("uShort", 3);
    for(var i = 0; i < nPairs; i += 1){
        var leftIndex = p.parseUShort();
        var rightIndex = p.parseUShort();
        var value = p.parseShort();
        pairs[leftIndex + "," + rightIndex] = value;
    }
    return pairs;
}
function parseMacKernTable(p) {
    var pairs = {};
    // The Mac kern table stores the version as a fixed (32 bits) but we only loaded the first 16 bits.
    // Skip the rest.
    p.skip("uShort");
    var nTables = p.parseULong();
    //check.argument(nTables === 1, 'Only 1 subtable is supported (got ' + nTables + ').');
    if (nTables > 1) console.warn("Only the first kern subtable is supported.");
    p.skip("uLong");
    var coverage = p.parseUShort();
    var subtableVersion = coverage & 0xFF;
    p.skip("uShort");
    if (subtableVersion === 0) {
        var nPairs = p.parseUShort();
        // Skip searchRange, entrySelector, rangeShift.
        p.skip("uShort", 3);
        for(var i = 0; i < nPairs; i += 1){
            var leftIndex = p.parseUShort();
            var rightIndex = p.parseUShort();
            var value = p.parseShort();
            pairs[leftIndex + "," + rightIndex] = value;
        }
    }
    return pairs;
}
// Parse the `kern` table which contains kerning pairs.
function parseKernTable(data, start) {
    var p = new parse.Parser(data, start);
    var tableVersion = p.parseUShort();
    if (tableVersion === 0) return parseWindowsKernTable(p);
    else if (tableVersion === 1) return parseMacKernTable(p);
    else throw new Error("Unsupported kern table version (" + tableVersion + ").");
}
var kern = {
    parse: parseKernTable
};
// The `loca` table stores the offsets to the locations of the glyphs in the font.
// Parse the `loca` table. This table stores the offsets to the locations of the glyphs in the font,
// relative to the beginning of the glyphData table.
// The number of glyphs stored in the `loca` table is specified in the `maxp` table (under numGlyphs)
// The loca table has two versions: a short version where offsets are stored as uShorts, and a long
// version where offsets are stored as uLongs. The `head` table specifies which version to use
// (under indexToLocFormat).
function parseLocaTable(data, start, numGlyphs, shortVersion) {
    var p = new parse.Parser(data, start);
    var parseFn = shortVersion ? p.parseUShort : p.parseULong;
    // There is an extra entry after the last index element to compute the length of the last glyph.
    // That's why we use numGlyphs + 1.
    var glyphOffsets = [];
    for(var i = 0; i < numGlyphs + 1; i += 1){
        var glyphOffset = parseFn.call(p);
        if (shortVersion) // The short table version stores the actual offset divided by 2.
        glyphOffset *= 2;
        glyphOffsets.push(glyphOffset);
    }
    return glyphOffsets;
}
var loca = {
    parse: parseLocaTable
};
// opentype.js
/**
 * The opentype library.
 * @namespace opentype
 */ // File loaders /////////////////////////////////////////////////////////
/**
 * Loads a font from a file. The callback throws an error message as the first parameter if it fails
 * and the font as an ArrayBuffer in the second parameter if it succeeds.
 * @param  {string} path - The path of the file
 * @param  {Function} callback - The function to call when the font load completes
 */ function loadFromFile(path, callback) {
    var fs = require("fs");
    fs.readFile(path, function(err, buffer) {
        if (err) return callback(err.message);
        callback(null, nodeBufferToArrayBuffer(buffer));
    });
}
/**
 * Loads a font from a URL. The callback throws an error message as the first parameter if it fails
 * and the font as an ArrayBuffer in the second parameter if it succeeds.
 * @param  {string} url - The URL of the font file.
 * @param  {Function} callback - The function to call when the font load completes
 */ function loadFromUrl(url, callback) {
    var request = new XMLHttpRequest();
    request.open("get", url, true);
    request.responseType = "arraybuffer";
    request.onload = function() {
        if (request.response) return callback(null, request.response);
        else return callback("Font could not be loaded: " + request.statusText);
    };
    request.onerror = function() {
        callback("Font could not be loaded");
    };
    request.send();
}
// Table Directory Entries //////////////////////////////////////////////
/**
 * Parses OpenType table entries.
 * @param  {DataView}
 * @param  {Number}
 * @return {Object[]}
 */ function parseOpenTypeTableEntries(data, numTables) {
    var tableEntries = [];
    var p = 12;
    for(var i = 0; i < numTables; i += 1){
        var tag = parse.getTag(data, p);
        var checksum = parse.getULong(data, p + 4);
        var offset = parse.getULong(data, p + 8);
        var length = parse.getULong(data, p + 12);
        tableEntries.push({
            tag: tag,
            checksum: checksum,
            offset: offset,
            length: length,
            compression: false
        });
        p += 16;
    }
    return tableEntries;
}
/**
 * Parses WOFF table entries.
 * @param  {DataView}
 * @param  {Number}
 * @return {Object[]}
 */ function parseWOFFTableEntries(data, numTables) {
    var tableEntries = [];
    var p = 44; // offset to the first table directory entry.
    for(var i = 0; i < numTables; i += 1){
        var tag = parse.getTag(data, p);
        var offset = parse.getULong(data, p + 4);
        var compLength = parse.getULong(data, p + 8);
        var origLength = parse.getULong(data, p + 12);
        var compression = void 0;
        if (compLength < origLength) compression = "WOFF";
        else compression = false;
        tableEntries.push({
            tag: tag,
            offset: offset,
            compression: compression,
            compressedLength: compLength,
            length: origLength
        });
        p += 20;
    }
    return tableEntries;
}
/**
 * @typedef TableData
 * @type Object
 * @property {DataView} data - The DataView
 * @property {number} offset - The data offset.
 */ /**
 * @param  {DataView}
 * @param  {Object}
 * @return {TableData}
 */ function uncompressTable(data, tableEntry) {
    if (tableEntry.compression === "WOFF") {
        var inBuffer = new Uint8Array(data.buffer, tableEntry.offset + 2, tableEntry.compressedLength - 2);
        var outBuffer = new Uint8Array(tableEntry.length);
        tinyInflate(inBuffer, outBuffer);
        if (outBuffer.byteLength !== tableEntry.length) throw new Error("Decompression error: " + tableEntry.tag + " decompressed length doesn't match recorded length");
        var view = new DataView(outBuffer.buffer, 0);
        return {
            data: view,
            offset: 0
        };
    } else return {
        data: data,
        offset: tableEntry.offset
    };
}
// Public API ///////////////////////////////////////////////////////////
/**
 * Parse the OpenType file data (as an ArrayBuffer) and return a Font object.
 * Throws an error if the font could not be parsed.
 * @param  {ArrayBuffer}
 * @param  {Object} opt - options for parsing
 * @return {opentype.Font}
 */ function parseBuffer(buffer, opt) {
    opt = opt === undefined || opt === null ? {} : opt;
    var indexToLocFormat;
    var ltagTable;
    // Since the constructor can also be called to create new fonts from scratch, we indicate this
    // should be an empty font that we'll fill with our own data.
    var font = new Font({
        empty: true
    });
    // OpenType fonts use big endian byte ordering.
    // We can't rely on typed array view types, because they operate with the endianness of the host computer.
    // Instead we use DataViews where we can specify endianness.
    var data = new DataView(buffer, 0);
    var numTables;
    var tableEntries = [];
    var signature = parse.getTag(data, 0);
    if (signature === String.fromCharCode(0, 1, 0, 0) || signature === "true" || signature === "typ1") {
        font.outlinesFormat = "truetype";
        numTables = parse.getUShort(data, 4);
        tableEntries = parseOpenTypeTableEntries(data, numTables);
    } else if (signature === "OTTO") {
        font.outlinesFormat = "cff";
        numTables = parse.getUShort(data, 4);
        tableEntries = parseOpenTypeTableEntries(data, numTables);
    } else if (signature === "wOFF") {
        var flavor = parse.getTag(data, 4);
        if (flavor === String.fromCharCode(0, 1, 0, 0)) font.outlinesFormat = "truetype";
        else if (flavor === "OTTO") font.outlinesFormat = "cff";
        else throw new Error("Unsupported OpenType flavor " + signature);
        numTables = parse.getUShort(data, 12);
        tableEntries = parseWOFFTableEntries(data, numTables);
    } else throw new Error("Unsupported OpenType signature " + signature);
    var cffTableEntry;
    var fvarTableEntry;
    var glyfTableEntry;
    var gdefTableEntry;
    var gposTableEntry;
    var gsubTableEntry;
    var hmtxTableEntry;
    var kernTableEntry;
    var locaTableEntry;
    var nameTableEntry;
    var metaTableEntry;
    var p;
    for(var i = 0; i < numTables; i += 1){
        var tableEntry = tableEntries[i];
        var table = void 0;
        switch(tableEntry.tag){
            case "cmap":
                table = uncompressTable(data, tableEntry);
                font.tables.cmap = cmap.parse(table.data, table.offset);
                font.encoding = new CmapEncoding(font.tables.cmap);
                break;
            case "cvt ":
                table = uncompressTable(data, tableEntry);
                p = new parse.Parser(table.data, table.offset);
                font.tables.cvt = p.parseShortList(tableEntry.length / 2);
                break;
            case "fvar":
                fvarTableEntry = tableEntry;
                break;
            case "fpgm":
                table = uncompressTable(data, tableEntry);
                p = new parse.Parser(table.data, table.offset);
                font.tables.fpgm = p.parseByteList(tableEntry.length);
                break;
            case "head":
                table = uncompressTable(data, tableEntry);
                font.tables.head = head.parse(table.data, table.offset);
                font.unitsPerEm = font.tables.head.unitsPerEm;
                indexToLocFormat = font.tables.head.indexToLocFormat;
                break;
            case "hhea":
                table = uncompressTable(data, tableEntry);
                font.tables.hhea = hhea.parse(table.data, table.offset);
                font.ascender = font.tables.hhea.ascender;
                font.descender = font.tables.hhea.descender;
                font.numberOfHMetrics = font.tables.hhea.numberOfHMetrics;
                break;
            case "hmtx":
                hmtxTableEntry = tableEntry;
                break;
            case "ltag":
                table = uncompressTable(data, tableEntry);
                ltagTable = ltag.parse(table.data, table.offset);
                break;
            case "maxp":
                table = uncompressTable(data, tableEntry);
                font.tables.maxp = maxp.parse(table.data, table.offset);
                font.numGlyphs = font.tables.maxp.numGlyphs;
                break;
            case "name":
                nameTableEntry = tableEntry;
                break;
            case "OS/2":
                table = uncompressTable(data, tableEntry);
                font.tables.os2 = os2.parse(table.data, table.offset);
                break;
            case "post":
                table = uncompressTable(data, tableEntry);
                font.tables.post = post.parse(table.data, table.offset);
                font.glyphNames = new GlyphNames(font.tables.post);
                break;
            case "prep":
                table = uncompressTable(data, tableEntry);
                p = new parse.Parser(table.data, table.offset);
                font.tables.prep = p.parseByteList(tableEntry.length);
                break;
            case "glyf":
                glyfTableEntry = tableEntry;
                break;
            case "loca":
                locaTableEntry = tableEntry;
                break;
            case "CFF ":
                cffTableEntry = tableEntry;
                break;
            case "kern":
                kernTableEntry = tableEntry;
                break;
            case "GDEF":
                gdefTableEntry = tableEntry;
                break;
            case "GPOS":
                gposTableEntry = tableEntry;
                break;
            case "GSUB":
                gsubTableEntry = tableEntry;
                break;
            case "meta":
                metaTableEntry = tableEntry;
                break;
        }
    }
    var nameTable = uncompressTable(data, nameTableEntry);
    font.tables.name = _name.parse(nameTable.data, nameTable.offset, ltagTable);
    font.names = font.tables.name;
    if (glyfTableEntry && locaTableEntry) {
        var shortVersion = indexToLocFormat === 0;
        var locaTable = uncompressTable(data, locaTableEntry);
        var locaOffsets = loca.parse(locaTable.data, locaTable.offset, font.numGlyphs, shortVersion);
        var glyfTable = uncompressTable(data, glyfTableEntry);
        font.glyphs = glyf.parse(glyfTable.data, glyfTable.offset, locaOffsets, font, opt);
    } else if (cffTableEntry) {
        var cffTable = uncompressTable(data, cffTableEntry);
        cff.parse(cffTable.data, cffTable.offset, font, opt);
    } else throw new Error("Font doesn't contain TrueType or CFF outlines.");
    var hmtxTable = uncompressTable(data, hmtxTableEntry);
    hmtx.parse(font, hmtxTable.data, hmtxTable.offset, font.numberOfHMetrics, font.numGlyphs, font.glyphs, opt);
    addGlyphNames(font, opt);
    if (kernTableEntry) {
        var kernTable = uncompressTable(data, kernTableEntry);
        font.kerningPairs = kern.parse(kernTable.data, kernTable.offset);
    } else font.kerningPairs = {};
    if (gdefTableEntry) {
        var gdefTable = uncompressTable(data, gdefTableEntry);
        font.tables.gdef = gdef.parse(gdefTable.data, gdefTable.offset);
    }
    if (gposTableEntry) {
        var gposTable = uncompressTable(data, gposTableEntry);
        font.tables.gpos = gpos.parse(gposTable.data, gposTable.offset);
        font.position.init();
    }
    if (gsubTableEntry) {
        var gsubTable = uncompressTable(data, gsubTableEntry);
        font.tables.gsub = gsub.parse(gsubTable.data, gsubTable.offset);
    }
    if (fvarTableEntry) {
        var fvarTable = uncompressTable(data, fvarTableEntry);
        font.tables.fvar = fvar.parse(fvarTable.data, fvarTable.offset, font.names);
    }
    if (metaTableEntry) {
        var metaTable = uncompressTable(data, metaTableEntry);
        font.tables.meta = meta.parse(metaTable.data, metaTable.offset);
        font.metas = font.tables.meta;
    }
    return font;
}
/**
 * Asynchronously load the font from a URL or a filesystem. When done, call the callback
 * with two arguments `(err, font)`. The `err` will be null on success,
 * the `font` is a Font object.
 * We use the node.js callback convention so that
 * opentype.js can integrate with frameworks like async.js.
 * @alias opentype.load
 * @param  {string} url - The URL of the font to load.
 * @param  {Function} callback - The callback.
 */ function load(url, callback, opt) {
    opt = opt === undefined || opt === null ? {} : opt;
    var isNode = typeof window === "undefined";
    var loadFn = isNode && !opt.isUrl ? loadFromFile : loadFromUrl;
    return new Promise(function(resolve, reject) {
        loadFn(url, function(err, arrayBuffer) {
            if (err) {
                if (callback) return callback(err);
                else reject(err);
            }
            var font;
            try {
                font = parseBuffer(arrayBuffer, opt);
            } catch (e) {
                if (callback) return callback(e, null);
                else reject(e);
            }
            if (callback) return callback(null, font);
            else resolve(font);
        });
    });
}
/**
 * Synchronously load the font from a URL or file.
 * When done, returns the font object or throws an error.
 * @alias opentype.loadSync
 * @param  {string} url - The URL of the font to load.
 * @param  {Object} opt - opt.lowMemory
 * @return {opentype.Font}
 */ function loadSync(url, opt) {
    var fs = require("fs");
    var buffer = fs.readFileSync(url);
    return parseBuffer(nodeBufferToArrayBuffer(buffer), opt);
}
var opentype = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Font: Font,
    Glyph: Glyph,
    Path: Path,
    BoundingBox: BoundingBox,
    _parse: parse,
    parse: parseBuffer,
    load: load,
    loadSync: loadSync
});
exports.default = opentype;

},{"buffer":"fCgem","fs":"jhUEF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("base64-js");
const ieee754 = require("ieee754");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 65536 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 65536 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"base64-js":"eIiSV","ieee754":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"dppWS":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ao0Rz") + "IBMPlexSans-Regular.ca8e7f1c.ttf" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["cWaoa","1jwFz"], "1jwFz", "parcelRequirec478")

//# sourceMappingURL=index.8e9bd240.js.map
