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
//refactor Start
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
let textureAttributeID;
let iter = 0; //For a simple movement demo
let Monkey;
let Cube;
let Axis;
let label; // For testing HTML based Text overlay
let Letter; //For testing WebGL text rendering
let Fonts;
let AxisLabels;
async function main() {
    //gl has already been checked so cannot be undefined- safe to cast
    gl = init();
    modelUniformID = gl.getUniformLocation(program, "model");
    viewUniformID = gl.getUniformLocation(program, "view");
    projectionUniformID = gl.getUniformLocation(program, "projection");
    lightToggleUniformID = gl.getUniformLocation(program, "light_toggle");
    let axisData = await (0, _loader.load_OBJ)("Axis");
    Axis = new (0, _model.Model)(positionAttributeID, normalAttributeID, textureAttributeID, gl.LINES);
    Axis.init(axisData[0], axisData[1], axisData[2], axisData[3], gl);
    let MonkeyData = await (0, _loader.load_OBJ)("Monkey");
    Monkey = new (0, _model.Model)(positionAttributeID, normalAttributeID, textureAttributeID, gl.TRIANGLES);
    Monkey.init(MonkeyData[0], MonkeyData[1], MonkeyData[2], MonkeyData[3], gl);
    let CubeData = await (0, _loader.load_OBJ)("Cube3");
    Cube = new (0, _model.Model)(positionAttributeID, normalAttributeID, textureAttributeID, gl.TRIANGLES);
    Cube.init(CubeData[0], CubeData[1], CubeData[2], CubeData[3], gl);
    Fonts = new (0, _font.Font)(0, gl); //Create a Font Object
    Fonts.init("X");
    let LetterData = await (0, _loader.load_OBJ)("Glyph");
    Letter = new (0, _model.Model)(positionAttributeID, normalAttributeID, textureAttributeID, gl.TRIANGLES);
    Letter.init(LetterData[0], LetterData[1], LetterData[2], Fonts.getTextureCords(), gl);
    AxisLabels = [];
    for(let i = 0; i < 3; i++){
        Fonts.init("1");
        AxisLabels[i] = new (0, _model.Model)(positionAttributeID, normalAttributeID, textureAttributeID, gl.TRIANGLES);
        AxisLabels[i].init(LetterData[0], LetterData[1], LetterData[2], Fonts.getTextureCords(), gl);
    }
    label = new (0, _text.Text)("div", gl.canvas.width, gl.canvas.height);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.FRONT);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LESS);
    gl.frontFace(gl.CW);
    gl.enable(gl.STENCIL_TEST);
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
    gl.enableVertexAttribArray(textureAttributeID);
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
    Cube.render(undefined, undefined);
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
    gl.stencilFunc(gl.ALWAYS, 1, 0xFF);
    let LetterModel = _glMatrix.mat4.create();
    _glMatrix.mat4.copy(LetterModel, globalAxisModel);
    _glMatrix.mat4.scale(LetterModel, LetterModel, [
        0.03,
        0.03,
        1
    ]);
    _glMatrix.mat4.translate(LetterModel, LetterModel, [
        36,
        0,
        0
    ]);
    gl.uniformMatrix4fv(modelUniformID, false, LetterModel);
    AxisLabels[0].render();
    _glMatrix.mat4.translate(LetterModel, LetterModel, [
        -36,
        36,
        0
    ]);
    gl.uniformMatrix4fv(modelUniformID, false, LetterModel);
    AxisLabels[1].render();
    _glMatrix.mat4.translate(LetterModel, LetterModel, [
        -2,
        -39,
        1
    ]);
    gl.uniformMatrix4fv(modelUniformID, false, LetterModel);
    AxisLabels[2].render();
    gl.stencilFunc(gl.EQUAL, 1, 0xFF);
    gl.stencilOp(gl.REPLACE, gl.KEEP, gl.REPLACE);
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
        Axis.render(undefined, undefined);
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
        Axis.render(undefined, undefined);
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
        Axis.render(undefined, undefined);
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
        Axis.render(undefined, undefined);
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
        Axis.render(undefined, undefined);
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
        Axis.render(undefined, undefined);
    }
    let Monkeymodel = _glMatrix.mat4.create();
    _glMatrix.mat4.scale(Monkeymodel, Monkeymodel, [
        0.2,
        0.2,
        0.2
    ]);
    _glMatrix.mat4.rotate(Monkeymodel, Monkeymodel, 0, [
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
    //LetterModel = glmath.mat4.create();
    //glmath.mat4.scale(LetterModel, LetterModel, [0.03, 0.03, 1]);
    //glmath.mat4.translate(LetterModel, LetterModel, [21, -9, 0]);
    //gl.uniformMatrix4fv(modelUniformID, false, LetterModel);
    //Letter.render();
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
    textureAttributeID = temp_gl.getAttribLocation(program, "a_texture");
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
module.exports = "// fragment shaders don't have a default precision so we need\n  // to pick one. mediump is a good default\n  precision mediump float;\n#define GLSLIFY 1\n\n\n  uniform int light_toggle;\n  uniform sampler2D u_texture;\n\n  varying vec4 colour;\n  varying vec3 v_normal;\n  varying vec4 position;\n  varying vec2 v_texcoord;\n\n  vec3 lightdir = vec3(0.2, 0.2, 1);\n \n  void main() {\n    // gl_FragColor is a special variable a fragment shader\n    // is responsible for setting\n\n    vec3 normal = normalize(v_normal);\n    float light = dot(normal, lightdir);\n\n    if(light_toggle == 1)\n    {\n          //gl_FragColor = vec4(colour.x, colour.y, colour.z, 1) * texture2D(u_texture, v_texcoord);\n          //gl_FragColor.rgb *= light;\n          gl_FragColor = texture2D(u_texture, v_texcoord);\n    }\n    else\n    {\n      //light = dot(normal, position.xyz);\n      gl_FragColor = vec4(0.8, 0.8, 0.8, 1);\n    }\n  }";

},{}],"fWka7":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\n// an attribute will receive data from a buffer\n  attribute vec3 a_position;\n  attribute vec3 a_normal;\n  attribute vec2 a_texture;\n\n  uniform mat4 model, projection, view;\n\n  varying vec4 colour;\n  varying vec3 v_normal;\n  varying vec4 position;\n  varying vec2 v_texcoord;\n \n  // all shaders have a main function\n  void main() {\n \n    // gl_Position is a special variable a vertex shader\n    // is responsible for setting\n    gl_Position = projection * view * model * vec4(a_position, 1);\n\n    position = gl_Position;\n    \n    colour = vec4(1, 1, 0.5, 1.0);\n    v_normal = a_normal;\n    v_texcoord = a_texture;\n  }\n\n";

},{}],"10WY5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Model", ()=>Model);
// @ts-ignore
var _arialPng = require("./fonts/Atlas/Arial.png");
var _arialPngDefault = parcelHelpers.interopDefault(_arialPng);
class Model {
    constructor(newPositionAttributeID, newNormalAttributeID, newTextureAttributeID, newDrawMode){
        this.positionAttributeID = newPositionAttributeID;
        this.normalAttributeID = newNormalAttributeID;
        this.textureAttributeID = newTextureAttributeID;
        this.drawmode = newDrawMode;
    }
    init(vertexData, indexData, normalData, textureCord, glRef) {
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
        // Create a Texture and ensure it is valid
        var temp_texture = this.gl.createTexture();
        if (temp_texture === null) {
            alert("An Error Occured while rendering (Texture Undefined), Please try reloading the page");
            return;
        } else this.texture = temp_texture;
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        // Temp data while waiting for image to load 
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 0, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array([
            0,
            0,
            255,
            255
        ]));
        this.image = new Image(341, 145);
        this.image.src = (0, _arialPngDefault.default); //Refactor
        this.image.addEventListener("load", this.textureLoaded.bind(null, this.gl, this.image), false);
        // Create a texture buffer and ensure it is valid 
        var temp_textureBuffer = this.gl.createBuffer();
        if (temp_textureBuffer === null) {
            alert("An Error Occured while rendering (Texture Buffer Undefined), Please try reloading the page");
            return;
        } else this.textureBuffer = temp_textureBuffer;
        //Bind Vertex Data to an array buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertexData), this.gl.STATIC_DRAW);
        //console.log(new Float32Array(vertexData));
        //Bind Index Data to an array buffer
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), this.gl.STATIC_DRAW);
        //console.log(new Uint16Array(indexData));
        //Bind Normal Data to an array buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(normalData), this.gl.STATIC_DRAW);
        //console.log(new Float32Array(normalData));
        //Bind Texture buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(textureCord), this.gl.STATIC_DRAW);
    }
    textureLoaded(gl, image) {
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
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
        // Bind the index buffer
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        // Bind the normal buffer.
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer);
        // Bind predefined texture
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureBuffer);
        //this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        // Tell the attribute how to get data out of normalBuffer (ARRAY_BUFFER)
        var size = 3; // 3 components per iteration
        var type = this.gl.FLOAT; // the data is 32bit floating point values
        var normalize = false; // normalize the data (convert from 0-255 to 0-1)
        var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0; // start at the beginning of the buffer
        this.gl.vertexAttribPointer(this.normalAttributeID, size, type, normalize, stride, offset);
        this.gl.vertexAttribPointer(this.textureAttributeID, 2, type, false, stride, offset);
        var primitiveType = this.drawmode;
        var offset = 0;
        var count = this.numIndices;
        var indexType = this.gl.UNSIGNED_SHORT;
        //this.gl.drawArrays(primitiveType, offset, count);
        this.gl.drawElements(primitiveType, count, indexType, offset);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./fonts/Atlas/Arial.png":"4axCz"}],"gkKU3":[function(require,module,exports) {
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

},{}],"4axCz":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ao0Rz") + "Arial.5339cec6.png" + "?" + Date.now();

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
    let Textures;
    let Combined;
    Vertices = [];
    Indicies = [];
    Normals = [];
    Textures = [];
    Combined = [
        [],
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
        //Extract Texture Values
        if (line.startsWith("vt ")) {
            let textures = line.split(" ");
            for(let i3 = 1; i3 < textures.length; i3++)Textures.push(Number(textures[i3]));
        }
    }
    Combined[0] = Combined[0].concat(Vertices);
    Combined[1] = Combined[1].concat(Indicies);
    Combined[2] = Combined[2].concat(Normals);
    Combined[3] = Combined[3].concat(Textures);
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
    } else if (model == "Glyph") {
        var raw = "v -1 1 0\r\nv -1 -1 0\r\nv 1 -1 0\r\nv 1 1 0\r\nf 3/3/3 4/4/4 1/1/1\r\nf 1/1/1 2/2/2 3/3/3\r\nvn 0 1 0 \r\nvn 0 1 0 \r\n";
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
    This is a class definition that handles WebGL Text using glyph textures
        x----x
        |    |    +   texture of a single letter
        |    |
        x----x
    A Single letter consists of a 2 triangle rect geometery with the glyph texture applied
*/ var _arialJson = require("./fonts/Atlas/Arial.json");
var _arialJsonDefault = parcelHelpers.interopDefault(_arialJson);
var _arialBoldJson = require("./fonts/Atlas/Arial-Bold.json");
var _arialBoldJsonDefault = parcelHelpers.interopDefault(_arialBoldJson);
// @ts-ignore
var _arialPng = require("./fonts/Atlas/Arial.png");
var _arialPngDefault = parcelHelpers.interopDefault(_arialPng);
class Font {
    constructor(set_font_option, set_gl){
        this.font_pointers = [
            (0, _arialPngDefault.default),
            (0, _arialBoldJsonDefault.default)
        ];
        this.font_data_pointers = [
            (0, _arialJsonDefault.default),
            (0, _arialBoldJsonDefault.default)
        ];
        this.font_option = set_font_option;
        this.gl = set_gl;
        this.textureCord = [];
        this.image = new Image();
        this.image.src = this.font_pointers[this.font_option];
    }
    init(char) {
        let x = this.font_data_pointers[this.font_option].characters[char].x;
        let y = this.font_data_pointers[this.font_option].characters[char].y;
        let width = this.font_data_pointers[this.font_option].characters[char].width;
        let height = this.font_data_pointers[this.font_option].characters[char].height;
        //Single Letter consists of 4 vertex points -> thus 4 texture cord pairs
        this.textureCord.push(x / 341);
        this.textureCord.push(y / 125);
        this.textureCord.push(x / 341);
        this.textureCord.push((y + height) / 125);
        this.textureCord.push((x + width) / 341);
        this.textureCord.push((y + height) / 125);
        this.textureCord.push((x + width) / 341);
        this.textureCord.push(y / 125);
    }
    getTextureCords() {
        return this.textureCord;
    }
}

},{"./fonts/Atlas/Arial.json":"bzou9","./fonts/Atlas/Arial-Bold.json":"hKcF4","./fonts/Atlas/Arial.png":"4axCz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzou9":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"Arial","size":32,"bold":false,"italic":false,"width":341,"height":125,"characters":{"0":{"x":59,"y":56,"width":18,"height":25,"originX":0,"originY":24,"advance":18},"1":{"x":87,"y":81,"width":11,"height":25,"originX":-2,"originY":24,"advance":18},"2":{"x":239,"y":56,"width":17,"height":25,"originX":0,"originY":24,"advance":18},"3":{"x":77,"y":56,"width":18,"height":25,"originX":0,"originY":24,"advance":18},"4":{"x":40,"y":56,"width":19,"height":25,"originX":1,"originY":24,"advance":18},"5":{"x":95,"y":56,"width":18,"height":25,"originX":0,"originY":24,"advance":18},"6":{"x":113,"y":56,"width":18,"height":25,"originX":0,"originY":24,"advance":18},"7":{"x":131,"y":56,"width":18,"height":25,"originX":0,"originY":24,"advance":18},"8":{"x":149,"y":56,"width":18,"height":25,"originX":0,"originY":24,"advance":18},"9":{"x":167,"y":56,"width":18,"height":25,"originX":0,"originY":24,"advance":18}," ":{"x":237,"y":106,"width":3,"height":3,"originX":1,"originY":1,"advance":9},"!":{"x":120,"y":81,"width":7,"height":25,"originX":-1,"originY":24,"advance":9},"\\"":{"x":148,"y":106,"width":11,"height":10,"originX":0,"originY":24,"advance":11},"#":{"x":284,"y":31,"width":20,"height":25,"originX":1,"originY":24,"advance":18},"$":{"x":108,"y":0,"width":18,"height":29,"originX":0,"originY":25,"advance":18},"%":{"x":183,"y":0,"width":28,"height":25,"originX":0,"originY":24,"advance":28},"&":{"x":92,"y":31,"width":22,"height":25,"originX":0,"originY":24,"advance":21},"\'":{"x":159,"y":106,"width":6,"height":10,"originX":0,"originY":24,"advance":6},"(":{"x":56,"y":0,"width":10,"height":31,"originX":-1,"originY":24,"advance":11},")":{"x":66,"y":0,"width":10,"height":31,"originX":-1,"originY":24,"advance":11},"*":{"x":135,"y":106,"width":13,"height":12,"originX":0,"originY":24,"advance":12},"+":{"x":84,"y":106,"width":18,"height":17,"originX":0,"originY":20,"advance":19},",":{"x":165,"y":106,"width":6,"height":10,"originX":-1,"originY":4,"advance":9},"-":{"x":199,"y":106,"width":11,"height":5,"originX":0,"originY":11,"advance":11},".":{"x":210,"y":106,"width":5,"height":5,"originX":-2,"originY":4,"advance":9},"/":{"x":76,"y":81,"width":11,"height":25,"originX":1,"originY":24,"advance":9},":":{"x":43,"y":106,"width":5,"height":19,"originX":-2,"originY":18,"advance":9},";":{"x":142,"y":81,"width":6,"height":24,"originX":-1,"originY":18,"advance":9},"<":{"x":48,"y":106,"width":18,"height":18,"originX":0,"originY":20,"advance":19},"=":{"x":117,"y":106,"width":18,"height":12,"originX":0,"originY":17,"advance":19},">":{"x":66,"y":106,"width":18,"height":18,"originX":0,"originY":20,"advance":19},"?":{"x":185,"y":56,"width":18,"height":25,"originX":0,"originY":24,"advance":18},"@":{"x":0,"y":0,"width":33,"height":31,"originX":0,"originY":24,"advance":32},"A":{"x":261,"y":0,"width":24,"height":25,"originX":1,"originY":24,"advance":21},"B":{"x":304,"y":31,"width":20,"height":25,"originX":-1,"originY":24,"advance":21},"C":{"x":309,"y":0,"width":23,"height":25,"originX":0,"originY":24,"advance":23},"D":{"x":114,"y":31,"width":22,"height":25,"originX":-1,"originY":24,"advance":23},"E":{"x":0,"y":56,"width":20,"height":25,"originX":-1,"originY":24,"advance":21},"F":{"x":203,"y":56,"width":18,"height":25,"originX":-1,"originY":24,"advance":20},"G":{"x":285,"y":0,"width":24,"height":25,"originX":0,"originY":24,"advance":25},"H":{"x":158,"y":31,"width":21,"height":25,"originX":-1,"originY":24,"advance":23},"I":{"x":127,"y":81,"width":5,"height":25,"originX":-2,"originY":24,"advance":9},"J":{"x":49,"y":81,"width":15,"height":25,"originX":0,"originY":24,"advance":16},"K":{"x":136,"y":31,"width":22,"height":25,"originX":-1,"originY":24,"advance":21},"L":{"x":256,"y":56,"width":17,"height":25,"originX":-1,"originY":24,"advance":18},"M":{"x":211,"y":0,"width":25,"height":25,"originX":-1,"originY":24,"advance":27},"N":{"x":179,"y":31,"width":21,"height":25,"originX":-1,"originY":24,"advance":23},"O":{"x":236,"y":0,"width":25,"height":25,"originX":0,"originY":24,"advance":25},"P":{"x":20,"y":56,"width":20,"height":25,"originX":-1,"originY":24,"advance":21},"Q":{"x":126,"y":0,"width":25,"height":26,"originX":0,"originY":24,"advance":25},"R":{"x":0,"y":31,"width":23,"height":25,"originX":-1,"originY":24,"advance":23},"S":{"x":200,"y":31,"width":21,"height":25,"originX":0,"originY":24,"advance":21},"T":{"x":221,"y":31,"width":21,"height":25,"originX":1,"originY":24,"advance":20},"U":{"x":242,"y":31,"width":21,"height":25,"originX":-1,"originY":24,"advance":23},"V":{"x":23,"y":31,"width":23,"height":25,"originX":1,"originY":24,"advance":21},"W":{"x":151,"y":0,"width":32,"height":25,"originX":1,"originY":24,"advance":30},"X":{"x":46,"y":31,"width":23,"height":25,"originX":1,"originY":24,"advance":21},"Y":{"x":69,"y":31,"width":23,"height":25,"originX":1,"originY":24,"advance":21},"Z":{"x":263,"y":31,"width":21,"height":25,"originX":1,"originY":24,"advance":20},"[":{"x":76,"y":0,"width":9,"height":31,"originX":-1,"originY":24,"advance":9},"\\\\":{"x":98,"y":81,"width":11,"height":25,"originX":1,"originY":24,"advance":9},"]":{"x":85,"y":0,"width":9,"height":31,"originX":1,"originY":24,"advance":9},"^":{"x":102,"y":106,"width":15,"height":15,"originX":0,"originY":24,"advance":15},"_":{"x":215,"y":106,"width":22,"height":4,"originX":2,"originY":-3,"advance":18},"`":{"x":190,"y":106,"width":9,"height":6,"originX":0,"originY":24,"advance":11},"a":{"x":198,"y":81,"width":18,"height":19,"originX":0,"originY":18,"advance":18},"b":{"x":273,"y":56,"width":17,"height":25,"originX":-1,"originY":24,"advance":18},"c":{"x":306,"y":81,"width":17,"height":19,"originX":0,"originY":18,"advance":16},"d":{"x":290,"y":56,"width":17,"height":25,"originX":0,"originY":24,"advance":18},"e":{"x":216,"y":81,"width":18,"height":19,"originX":0,"originY":18,"advance":18},"f":{"x":64,"y":81,"width":12,"height":25,"originX":1,"originY":24,"advance":9},"g":{"x":307,"y":56,"width":17,"height":25,"originX":0,"originY":18,"advance":18},"h":{"x":17,"y":81,"width":16,"height":25,"originX":-1,"originY":24,"advance":18},"i":{"x":132,"y":81,"width":5,"height":25,"originX":-1,"originY":24,"advance":7},"j":{"x":94,"y":0,"width":9,"height":31,"originX":3,"originY":24,"advance":7},"k":{"x":33,"y":81,"width":16,"height":25,"originX":-1,"originY":24,"advance":16},"l":{"x":137,"y":81,"width":5,"height":25,"originX":-1,"originY":24,"advance":7},"m":{"x":148,"y":81,"width":25,"height":19,"originX":-1,"originY":18,"advance":27},"n":{"x":323,"y":81,"width":16,"height":19,"originX":-1,"originY":18,"advance":18},"o":{"x":234,"y":81,"width":18,"height":19,"originX":0,"originY":18,"advance":18},"p":{"x":324,"y":56,"width":17,"height":25,"originX":-1,"originY":18,"advance":18},"q":{"x":0,"y":81,"width":17,"height":25,"originX":0,"originY":18,"advance":18},"r":{"x":32,"y":106,"width":11,"height":19,"originX":-1,"originY":18,"advance":11},"s":{"x":0,"y":106,"width":16,"height":19,"originX":0,"originY":18,"advance":16},"t":{"x":109,"y":81,"width":11,"height":25,"originX":1,"originY":24,"advance":9},"u":{"x":16,"y":106,"width":16,"height":19,"originX":-1,"originY":18,"advance":18},"v":{"x":252,"y":81,"width":18,"height":19,"originX":1,"originY":18,"advance":16},"w":{"x":173,"y":81,"width":25,"height":19,"originX":1,"originY":18,"advance":23},"x":{"x":270,"y":81,"width":18,"height":19,"originX":1,"originY":18,"advance":16},"y":{"x":221,"y":56,"width":18,"height":25,"originX":1,"originY":18,"advance":16},"z":{"x":288,"y":81,"width":18,"height":19,"originX":1,"originY":18,"advance":16},"{":{"x":45,"y":0,"width":11,"height":31,"originX":0,"originY":24,"advance":11},"|":{"x":103,"y":0,"width":5,"height":31,"originX":-2,"originY":24,"advance":8},"}":{"x":33,"y":0,"width":12,"height":31,"originX":1,"originY":24,"advance":11},"~":{"x":171,"y":106,"width":19,"height":7,"originX":0,"originY":15,"advance":19}}}');

},{}],"hKcF4":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"Arial","size":32,"bold":true,"italic":false,"width":351,"height":126,"characters":{"0":{"x":211,"y":57,"width":18,"height":25,"originX":0,"originY":24,"advance":18},"1":{"x":86,"y":82,"width":13,"height":25,"originX":-1,"originY":24,"advance":18},"2":{"x":40,"y":57,"width":19,"height":25,"originX":1,"originY":24,"advance":18},"3":{"x":229,"y":57,"width":18,"height":25,"originX":0,"originY":24,"advance":18},"4":{"x":59,"y":57,"width":19,"height":25,"originX":1,"originY":24,"advance":18},"5":{"x":247,"y":57,"width":18,"height":25,"originX":0,"originY":24,"advance":18},"6":{"x":265,"y":57,"width":18,"height":25,"originX":0,"originY":24,"advance":18},"7":{"x":283,"y":57,"width":18,"height":25,"originX":0,"originY":24,"advance":18},"8":{"x":301,"y":57,"width":18,"height":25,"originX":0,"originY":24,"advance":18},"9":{"x":319,"y":57,"width":18,"height":25,"originX":0,"originY":24,"advance":18}," ":{"x":298,"y":107,"width":3,"height":3,"originX":1,"originY":1,"advance":9},"!":{"x":134,"y":82,"width":8,"height":25,"originX":-1,"originY":24,"advance":11},"\\"":{"x":206,"y":107,"width":15,"height":10,"originX":0,"originY":24,"advance":15},"#":{"x":311,"y":32,"width":20,"height":25,"originX":1,"originY":24,"advance":18},"$":{"x":120,"y":0,"width":18,"height":30,"originX":0,"originY":26,"advance":18},"%":{"x":164,"y":0,"width":28,"height":26,"originX":0,"originY":24,"advance":28},"&":{"x":300,"y":0,"width":24,"height":25,"originX":0,"originY":24,"advance":23},"\'":{"x":221,"y":107,"width":8,"height":10,"originX":0,"originY":24,"advance":8},"(":{"x":65,"y":0,"width":11,"height":31,"originX":0,"originY":24,"advance":11},")":{"x":76,"y":0,"width":11,"height":31,"originX":0,"originY":24,"advance":11},"*":{"x":184,"y":107,"width":14,"height":12,"originX":1,"originY":24,"advance":12},"+":{"x":128,"y":107,"width":19,"height":18,"originX":0,"originY":20,"advance":19},",":{"x":198,"y":107,"width":8,"height":11,"originX":0,"originY":5,"advance":9},"-":{"x":258,"y":107,"width":12,"height":6,"originX":0,"originY":11,"advance":11},".":{"x":270,"y":107,"width":7,"height":6,"originX":-1,"originY":5,"advance":9},"/":{"x":112,"y":82,"width":11,"height":25,"originX":1,"originY":24,"advance":9},":":{"x":121,"y":107,"width":7,"height":19,"originX":-2,"originY":18,"advance":11},";":{"x":163,"y":82,"width":8,"height":24,"originX":-1,"originY":18,"advance":11},"<":{"x":306,"y":82,"width":18,"height":19,"originX":0,"originY":21,"advance":19},"=":{"x":165,"y":107,"width":19,"height":13,"originX":0,"originY":18,"advance":19},">":{"x":324,"y":82,"width":18,"height":19,"originX":0,"originY":21,"advance":19},"?":{"x":331,"y":32,"width":20,"height":25,"originX":0,"originY":24,"advance":20},"@":{"x":0,"y":0,"width":32,"height":32,"originX":0,"originY":24,"advance":31},"A":{"x":225,"y":0,"width":25,"height":25,"originX":1,"originY":24,"advance":23},"B":{"x":141,"y":32,"width":22,"height":25,"originX":-1,"originY":24,"advance":23},"C":{"x":72,"y":32,"width":23,"height":25,"originX":0,"originY":24,"advance":23},"D":{"x":163,"y":32,"width":22,"height":25,"originX":-1,"originY":24,"advance":23},"E":{"x":0,"y":57,"width":20,"height":25,"originX":-1,"originY":24,"advance":21},"F":{"x":0,"y":82,"width":18,"height":25,"originX":-1,"originY":24,"advance":20},"G":{"x":324,"y":0,"width":24,"height":25,"originX":0,"originY":24,"advance":25},"H":{"x":185,"y":32,"width":21,"height":25,"originX":-1,"originY":24,"advance":23},"I":{"x":142,"y":82,"width":7,"height":25,"originX":-1,"originY":24,"advance":9},"J":{"x":18,"y":82,"width":18,"height":25,"originX":1,"originY":24,"advance":18},"K":{"x":95,"y":32,"width":23,"height":25,"originX":-1,"originY":24,"advance":23},"L":{"x":78,"y":57,"width":19,"height":25,"originX":-1,"originY":24,"advance":20},"M":{"x":250,"y":0,"width":25,"height":25,"originX":-1,"originY":24,"advance":27},"N":{"x":206,"y":32,"width":21,"height":25,"originX":-1,"originY":24,"advance":23},"O":{"x":275,"y":0,"width":25,"height":25,"originX":0,"originY":24,"advance":25},"P":{"x":20,"y":57,"width":20,"height":25,"originX":-1,"originY":24,"advance":21},"Q":{"x":138,"y":0,"width":26,"height":27,"originX":0,"originY":24,"advance":25},"R":{"x":118,"y":32,"width":23,"height":25,"originX":-1,"originY":24,"advance":23},"S":{"x":227,"y":32,"width":21,"height":25,"originX":0,"originY":24,"advance":21},"T":{"x":248,"y":32,"width":21,"height":25,"originX":0,"originY":24,"advance":20},"U":{"x":269,"y":32,"width":21,"height":25,"originX":-1,"originY":24,"advance":23},"V":{"x":0,"y":32,"width":24,"height":25,"originX":1,"originY":24,"advance":21},"W":{"x":192,"y":0,"width":33,"height":25,"originX":1,"originY":24,"advance":30},"X":{"x":24,"y":32,"width":24,"height":25,"originX":1,"originY":24,"advance":21},"Y":{"x":48,"y":32,"width":24,"height":25,"originX":1,"originY":24,"advance":21},"Z":{"x":290,"y":32,"width":21,"height":25,"originX":1,"originY":24,"advance":20},"[":{"x":87,"y":0,"width":11,"height":31,"originX":-1,"originY":24,"advance":11},"\\\\":{"x":123,"y":82,"width":11,"height":25,"originX":1,"originY":24,"advance":9},"]":{"x":98,"y":0,"width":11,"height":31,"originX":1,"originY":24,"advance":11},"^":{"x":147,"y":107,"width":18,"height":14,"originX":0,"originY":24,"advance":19},"_":{"x":277,"y":107,"width":21,"height":5,"originX":2,"originY":-2,"advance":18},"`":{"x":248,"y":107,"width":10,"height":7,"originX":1,"originY":24,"advance":11},"a":{"x":0,"y":107,"width":18,"height":19,"originX":0,"originY":18,"advance":18},"b":{"x":97,"y":57,"width":19,"height":25,"originX":-1,"originY":24,"advance":20},"c":{"x":18,"y":107,"width":18,"height":19,"originX":0,"originY":18,"advance":18},"d":{"x":116,"y":57,"width":19,"height":25,"originX":0,"originY":24,"advance":20},"e":{"x":36,"y":107,"width":18,"height":19,"originX":0,"originY":18,"advance":18},"f":{"x":72,"y":82,"width":14,"height":25,"originX":1,"originY":24,"advance":11},"g":{"x":135,"y":57,"width":19,"height":25,"originX":0,"originY":18,"advance":20},"h":{"x":36,"y":82,"width":18,"height":25,"originX":-1,"originY":24,"advance":20},"i":{"x":149,"y":82,"width":7,"height":25,"originX":-1,"originY":24,"advance":9},"j":{"x":109,"y":0,"width":11,"height":31,"originX":3,"originY":24,"advance":9},"k":{"x":54,"y":82,"width":18,"height":25,"originX":-1,"originY":24,"advance":18},"l":{"x":156,"y":82,"width":7,"height":25,"originX":-1,"originY":24,"advance":9},"m":{"x":171,"y":82,"width":28,"height":19,"originX":0,"originY":18,"advance":28},"n":{"x":54,"y":107,"width":18,"height":19,"originX":-1,"originY":18,"advance":20},"o":{"x":227,"y":82,"width":20,"height":19,"originX":0,"originY":18,"advance":20},"p":{"x":154,"y":57,"width":19,"height":25,"originX":-1,"originY":18,"advance":20},"q":{"x":173,"y":57,"width":19,"height":25,"originX":0,"originY":18,"advance":20},"r":{"x":108,"y":107,"width":13,"height":19,"originX":-1,"originY":18,"advance":12},"s":{"x":287,"y":82,"width":19,"height":19,"originX":1,"originY":18,"advance":18},"t":{"x":99,"y":82,"width":13,"height":25,"originX":1,"originY":24,"advance":11},"u":{"x":72,"y":107,"width":18,"height":19,"originX":-1,"originY":18,"advance":20},"v":{"x":247,"y":82,"width":20,"height":19,"originX":1,"originY":18,"advance":18},"w":{"x":199,"y":82,"width":28,"height":19,"originX":1,"originY":18,"advance":25},"x":{"x":267,"y":82,"width":20,"height":19,"originX":1,"originY":18,"advance":18},"y":{"x":192,"y":57,"width":19,"height":25,"originX":1,"originY":18,"advance":18},"z":{"x":90,"y":107,"width":18,"height":19,"originX":1,"originY":18,"advance":16},"{":{"x":39,"y":0,"width":13,"height":31,"originX":0,"originY":24,"advance":12},"|":{"x":32,"y":0,"width":7,"height":32,"originX":-1,"originY":24,"advance":9},"}":{"x":52,"y":0,"width":13,"height":31,"originX":0,"originY":24,"advance":12},"~":{"x":229,"y":107,"width":19,"height":8,"originX":0,"originY":15,"advance":19}}}');

},{}]},["cWaoa","1jwFz"], "1jwFz", "parcelRequirec478")

//# sourceMappingURL=index.8e9bd240.js.map
