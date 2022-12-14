import React, { useRef, useState } from "react";
import classes from "./assetbrowse.module.css";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import AssetHeader from "../components/Header/AssetHeader";
import Sidebar from "../../../Sidebar";
import Float from "../components/float/Float";
import Card from "../components/card/Card";
import { DUMMY_DATA } from "../../mainPage/Assets";
import AccordionBrowse from "../components/accordion/BrowseAside/AccordionBrowse";
let fdata = [];
const AssetBrowse = () => {
  const [data, setData] = useState(false);
  let refs = useRef();
  let refs2 = useRef();
  let refs3 = useRef();
  let refs4 = useRef();
  let refs5 = useRef();
  let refs6 = useRef();
  function filter(dId) {
    let NewData = DUMMY_DATA.filter((data) => {
      return data.uid == dId;
    });
    return NewData;
  }
  function filteredData() {
    if (refs.current.checked) {
      let dId = refs.current.value;
      fdata = filter(dId);
      setData(true);
    } else if (refs2.current.checked) {
      let dId = refs2.current.value;
      fdata = filter(dId);
      setData(true);
    } else if (refs3.current.checked) {
      let dId = refs3.current.value;
      fdata = filter(dId);
      setData(true);
    } else if (refs4.current.checked) {
      let dId = refs4.current.value;
      fdata = filter(dId);
      setData(true);
    } else if (refs5.current.checked) {
      let dId = refs5.current.value;
      fdata = filter(dId);
      setData(true);
    } else if (refs6.current.checked) {
      let dId = refs6.current.value;
      fdata = filter(dId);
      setData(true);
    } else {
      setData(false);
    }
  }
  const AccArray = [
    {
      Ref: refs,
      Val: "v1",
      Nums: "One",
      Names: "grocery",
    },
    {
      Ref: refs2,
      Val: "v2",
      Nums: "Two",
      Names: "grocery",
    },
    {
      Ref: refs3,
      Val: "v3",
      Nums: "Three",
      Names: "grocery",
    },
    {
      Ref: refs4,
      Val: "v4",
      Nums: "Four",
      Names: "grocery",
    },
    {
      Ref: refs5,
      Val: "v5",
      Nums: "Five",
      Names: "grocery",
    },
    {
      Ref: refs6,
      Val: "v6",
      Nums: "Six",
      Names: "furniture",
    },
    {
      Ref: null,
      Val: "v7",
      Nums: "Seven",
      Names: "furniture",
    },
  ];
  return (
    <Float>
      <Sidebar />
      <div id={classes.main_container}>
        <AssetHeader headName="Asset - Browse" />
        <section id={classes.browse_container}>
          <div id={classes.dropcard}>
            <div className="accordion" id="accordionExample">
              {AccArray.map((data, index) => {
                return (
                  <AccordionBrowse
                    key={index}
                    faFile={faFile}
                    refValue={data.Ref}
                    value={data.Val}
                    Num={data.Nums}
                    Name={data.Names}
                    funcName={filteredData}
                  ></AccordionBrowse>
                );
              })}
            </div>
          </div>
          <div id={classes.displayFilterCard}>
            {data &&
              fdata.map((datas, index) => {
                return (
                  <Card
                    key={index}
                    imgs={datas.pics}
                    Uid={datas.uid}
                    Pname={datas.pname}
                  ></Card>
                );
              })}
          </div>
        </section>
      </div>
    </Float>
  );
};
export default AssetBrowse;
