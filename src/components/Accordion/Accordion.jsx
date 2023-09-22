import { useState } from "react";

/* eslint-disable react/prop-types */
const Accordion = ({ question }) => {
  const { title, info } = question;
  const accordionStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  };

  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState("");

  const handleToggle = () => {
    setOpen(!open);
  };

  console.log(open);
  return (
    <>
      <div style={accordionStyle}>
        <h2>{title}</h2>
        <button onClick={handleToggle}>+</button>
      </div>

      <div>{!open && <p>{info}</p>}</div>
    </>
  );
};

export default Accordion;
