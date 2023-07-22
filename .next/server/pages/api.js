"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/index.js


function handler(req, res) {
    const { date, from_currency, to_currency } = req.query;
    if (!date || !from_currency || !to_currency) {
        return res.status(400).json({
            error: "Missing required query parameters: date, from_currency, to_currency"
        });
    }
    // Path to the static file in your local filesystem
    const filePath = external_path_default().join(process.cwd(), "public", "data", date.replace(/-/g, "/"), "currencies", `${from_currency}.json`);
    // Check if the file exists
    if (!external_fs_default().existsSync(filePath)) {
        return res.status(404).json({
            error: "Data not found for the given date and currency."
        });
    }
    // Read the data from the file
    const data = JSON.parse(external_fs_default().readFileSync(filePath, "utf8"));
    // Check if the exchange rate for the 'to_currency' exists
    if (!data["exchange-rates"][to_currency]) {
        return res.status(404).json({
            error: `Exchange rate not found for the currency: ${to_currency}`
        });
    }
    // Send the data as a response
    res.status(200).json({
        date: data.date,
        from: from_currency,
        to: to_currency,
        rate: data["exchange-rates"][to_currency]
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(442));
module.exports = __webpack_exports__;

})();