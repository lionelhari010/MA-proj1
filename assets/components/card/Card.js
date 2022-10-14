import React from "react";
import classes from "./card.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  const { imgs, Uid, Pname } = props;
  return (
    <div className={classes.contain}>
      <div className={classes.products}>
        <div className={classes.products_image}>
          <img src={imgs} alt="image show here" className={classes.cardImg} />
        </div>
        <div className={classes.product_details}>
          <div className={classes.prod_name}>
            <h4>{Uid}</h4>
            <p>
              {Pname} <br />
              <span>Artwork</span>
            </p>
          </div>
          <FontAwesomeIcon icon={faBars} className={classes.prod_bar} />
        </div>
      </div>
      <div className={classes.hide_content}>
        <Link to="/Assets/Search" className={classes.pagelink}>
          <FontAwesomeIcon icon={faTableList} />
          &nbsp; Search
        </Link>{" "}
        <br />
        <Link to="/Assets/Browse" className={classes.pagelink}>
          <FontAwesomeIcon icon={faTableList} />
          &nbsp; Browse
        </Link>
      </div>
    </div>
  );
}
