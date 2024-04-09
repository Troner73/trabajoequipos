"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLBootStrap = exports.HTMLChurrutero = void 0;
var HTMLChurrutero = /** @class */ (function () {
    function HTMLChurrutero() {
    }
    HTMLChurrutero.prototype.dameDiv = function (id) {
        return ("<div id='".concat(id, "'></div><br/>"));
    };
    HTMLChurrutero.prototype.dameCss = function () {
        return "<br />";
    };
    HTMLChurrutero.prototype.dameBoton = function (id, texto) {
        return "<input type='button' id=".concat(id, " value='").concat(texto, "' />");
    };
    HTMLChurrutero.prototype.dameCheckBox = function (id, contenido) {
        return "<input type='checkbox' id='".concat(id, "'/><label for='").concat(id, "'> ").concat(contenido, " </label>");
    };
    HTMLChurrutero.prototype.dameTextBox = function (id, placeholder) {
        return "<input type ='text' id='".concat(id, "' placeholder='").concat(placeholder, "'/>");
    };
    HTMLChurrutero.prototype.dameNumberBox = function (id, placeholder) {
        return "<input type='number' id='".concat(id, "' placeholder='").concat(placeholder, "' />");
    };
    return HTMLChurrutero;
}());
exports.HTMLChurrutero = HTMLChurrutero;
var HTMLBootStrap = /** @class */ (function () {
    function HTMLBootStrap() {
    }
    HTMLBootStrap.prototype.dameDiv = function (id) {
        return ("<div id='".concat(id, "' class='form-group col-md-6'></div><br/>"));
    };
    HTMLBootStrap.prototype.dameCss = function () {
        return "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>";
    };
    HTMLBootStrap.prototype.dameBoton = function (id, texto) {
        return "<input type='button' id=".concat(id, " value='").concat(texto, "'/>");
    };
    HTMLBootStrap.prototype.dameCheckBox = function (id, contenido) {
        return "<input type='checkbox' id='".concat(id, "'/><label for='").concat(id, "'> ").concat(contenido, " </label>");
    };
    HTMLBootStrap.prototype.dameTextBox = function (id, placeholder) {
        return "<input type ='text' id='".concat(id, "' placeholder='").concat(placeholder, "' class='form-control'>");
    };
    HTMLBootStrap.prototype.dameNumberBox = function (id, placeholder) {
        return "<input type='number' id='".concat(id, "' placeholder='").concat(placeholder, "' />");
    };
    return HTMLBootStrap;
}());
exports.HTMLBootStrap = HTMLBootStrap;
