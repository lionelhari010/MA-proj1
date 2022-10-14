import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./accordBrowse.module.css";
export default function AccordionBrowse(props) {
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${props.Num}`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${props.Num}`}
            aria-expanded="false"
            id={classes.acccordBtn}
            aria-controls={`collapse${props.Num}`}
            title={`${props.Name} based on diff person`}
          >
            <FontAwesomeIcon icon={props.faFile} /> &nbsp; {props.Name} -{" "}
            {props.value}
          </button>
        </h2>

        <div
          id={`collapse${props.Num}`}
          className={`accordion-collapse collapse ${
            props.Num == "One" ? "show" : ""
          } `}
          aria-labelledby={`heading${props.Num}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <input
              type="checkbox"
              ref={props.refValue}
              onChange={props.funcName}
              name=""
              id={props.Num}
              value={props.value}
              className={classes.checkboxs}
            />
            &nbsp; &nbsp;
            <label htmlFor={props.Num} id={classes.labels}>
              {props.value} Items
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
