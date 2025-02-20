import React from "react";
import Button from "./button";
import DropDownCard from "./DropDownCard";
import "./dropdownbutton.css"
const DropDownButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  function handleClick(e) {
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  }
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <div className="dropdown" ref={drop}>
      <Button header={props.header} onClick={() => setOpen((open) => !open)} />

      {open && <DropDownCard text={props.text} setOpen={setOpen} />}
    </div>
  );
};

export default DropDownButton;
