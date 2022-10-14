import React from "react";
import classes from "./accordSearch.module.css";
export default function AccordionSearch(props) {
  return (
    <div>
      <h2 className="accordion-header" id={`heading${props.Num}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${props.Num}`}
          aria-expanded="true"
          aria-controls={`collapse${props.Num}`}
          title={`${props.Name} based on diff person`}
        >
          {props.Name}
        </button>
      </h2>
      <div
        id={`collapse${props.Num}`}
        className={`accordion-collapse collapse ${
          props.Num == "One" ? "show" : ""
        }`}
        aria-labelledby={`heading${props.Num}`}
      >
        <div className="accordion-body">
          <div id={classes.accordion_body}>
            <input
              type="checkbox"
              ref={props.refValue1}
              onChange={props.funcName}
              name=""
              id={props.Num + "1"}
              value={props.value1}
              className={classes.checkboxs}
            />
            &nbsp;&nbsp;
            <label htmlFor={props.Num + "1"} id={classes.labels}>
              Sutter Home
            </label>
          </div>
          <div id={classes.accordion_body}>
            <input
              type="checkbox"
              ref={props.refValue2}
              onChange={props.funcName}
              name=""
              id={props.Num + "2"}
              value={props.value2}
              className={classes.checkboxs}
            />
            &nbsp;&nbsp;
            <label htmlFor={props.Num + "2"} id={classes.labels}>
              Joel coat wines
            </label>
          </div>
          <div id={classes.accordion_body}>
            <input
              type="checkbox"
              ref={props.refValue3}
              onChange={props.funcName}
              name=""
              id={props.Num + "3"}
              value={props.value3}
              className={classes.checkboxs}
            />
            &nbsp;&nbsp;
            <label htmlFor={props.Num + "3"} id={classes.labels}>
              Manage tools
            </label>
            <br />
            <span id={classes.MoreItem}>Show 15 More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
