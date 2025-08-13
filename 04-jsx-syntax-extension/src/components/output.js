export default function Output(props) {
  const classNames = `output ${props.isAnimate ? "is-animate" : ""}`.trim();

  return React.createElement(
    "output",
    { className: classNames },
    props.children
  );
}

function Jsx(props) {
  return (
    <output className={`output ${props.isAnimate ? "is-animate" : ""}`.trim()}>
      {props.children}
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        class="photo"
      />

      <div>
        <label htmlFor="search">검색</label>
        <input type="search" id="search" autoComplete="" />
      </div>
    </output>
  );
}
