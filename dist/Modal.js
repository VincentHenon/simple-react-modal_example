"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
require("./styles/modal.css");
var _CloseRounded = _interopRequireDefault(require("@mui/icons-material/CloseRounded"));
var _Error = _interopRequireDefault(require("@mui/icons-material/Error"));
var _CheckCircle = _interopRequireDefault(require("@mui/icons-material/CheckCircle"));
function Modal(_ref) {
  let {
    handleClose,
    handleBtn1,
    handleBtn2,
    isValid,
    textMainValid,
    textMainError,
    displayBtn1,
    textBtn1,
    displayBtn2,
    textBtn2
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "modalBackground",
    id: "modal_bg",
    onClick: e => {
      if (e.target.className === "modalBackground") {
        handleClose();
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modalBox",
    id: "modal_box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modalContent",
    id: "modal_content"
  }, isValid ? /*#__PURE__*/React.createElement(_CheckCircle.default, {
    className: "modalIcon checkIcon",
    id: "modal_icon"
  }) : /*#__PURE__*/React.createElement(_Error.default, {
    className: "modalIcon errorIcon",
    id: "modal_icon"
  }), /*#__PURE__*/React.createElement("p", {
    className: "modalText",
    id: "modal_text"
  }, isValid ? textMainValid : textMainError)), /*#__PURE__*/React.createElement("div", {
    className: "modalButtonsWrapper",
    id: "modal_btns"
  }, displayBtn1 && /*#__PURE__*/React.createElement("button", {
    className: "modalBtn modalBtn1",
    id: "modal_btn1",
    onClick: handleBtn1
  }, textBtn1), displayBtn2 && /*#__PURE__*/React.createElement("button", {
    className: "modalBtn modalBtn2",
    id: "modal_btn2",
    onClick: handleBtn2
  }, textBtn2)), /*#__PURE__*/React.createElement(_CloseRounded.default, {
    className: "xMarkIcon modalIcon",
    id: "modal_xmark",
    onClick: handleClose
  })));
}