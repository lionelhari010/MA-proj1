import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faQuestionCircle,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import "./assetheader.css";
import { Link } from "react-router-dom";
export default function AssetHeader(props) {
  return (
    <div>
      <header>
        <div id="heading-left">
          <div class="dropdown">
            <FontAwesomeIcon icon={faSliders} className="asset-logo" />
            <div class="dropdown-content">
              <Link to="/Assets/Search">
                <FontAwesomeIcon icon={faTableList} />
                &nbsp; Search
              </Link>
              <Link to="/Assets/Browse">
                <FontAwesomeIcon icon={faTableList} />
                &nbsp; Browse
              </Link>
            </div>
          </div>
          <p>{props.headName}</p>
        </div>
        <div id="heading-right">
          <FontAwesomeIcon icon={faBell} id="asset-logo1" />
          <FontAwesomeIcon icon={faQuestionCircle} />
        </div>
      </header>
    </div>
  );
}
