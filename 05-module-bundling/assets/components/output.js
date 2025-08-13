export default function Output(props) {
  const classNames = `output ${props.isAnimate ? "is-animate" : ""}`.trim();
  return React.createElement("output", {
    className: classNames
  }, props.children);
}
function Jsx(props) {
  return /*#__PURE__*/React.createElement("output", {
    className: `output ${props.isAnimate ? "is-animate" : ""}`.trim()
  }, props.children, /*#__PURE__*/React.createElement("img", {
    src: "https://i.imgur.com/yXOvdOSs.jpg",
    alt: "Hedy Lamarr",
    class: "photo"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "search"
  }, "\uAC80\uC0C9"), /*#__PURE__*/React.createElement("input", {
    type: "search",
    id: "search",
    autoComplete: ""
  })));
}