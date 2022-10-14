import React from "react";
import "./assets.css";

import Card from "../assets/components/card/Card";
import AssetHeader from "../assets/components/Header/AssetHeader";
import Sidebar from "../../Sidebar";

export const DUMMY_DATA = [
  {
    uname: "Sutter Home",
    pname: "Milk",
    uid: "v1",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568380/prod1_wrycvd.webp",
  },
  {
    uname: "Manage tools",
    pname: "Biscuit",
    uid: "v2",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
  {
    uname: "Sutter Home",
    pname: "Bread",
    uid: "v3",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    uname: "Joel coat wines",
    pname: "water",
    uid: "v4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod4_rrr0jj.jpg",
  },
  {
    uname: "Joel coat wines",
    pname: "Biscuit",
    uid: "v4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
  {
    uname: " Manage tools",
    pname: "Biscuit",
    uid: "v2",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568380/prod1_wrycvd.webp",
  },
  {
    uname: "Sutter Home",
    pname: "Bread",
    uid: "v4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    uname: "Joel coat wines",
    pname: "Sofa",
    uid: "v6",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665574021/furniImg_ncmisz.jpg",
  },
  {
    uname: "Manage tools",
    pname: "Bread",
    uid: "v3",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    uname: "Joel coat wines",
    pname: "Bread",
    uid: "v5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    uname: " Manage tools",
    pname: "Biscuit",
    uid: "v5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
  {
    uname: "Sutter Home",
    pname: "water",
    uid: "v2",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod4_rrr0jj.jpg",
  },
  {
    uname: " Manage tools",
    pname: "water",
    uid: "v3",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod4_rrr0jj.jpg",
  },
  {
    uname: " Manage tools",
    pname: "Biscuit",
    uid: "v2",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568380/prod1_wrycvd.webp",
  },
  {
    uname: "Joel coat wines",
    pname: "Bread",
    uid: "v5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    uname: "Joel coat wines",
    pname: "Sofa",
    uid: "v6",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665574021/furniImg_ncmisz.jpg",
  },
  {
    uname: "Sutter Home",
    pname: "Milk",
    uid: "v1",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568380/prod1_wrycvd.webp",
  },
  {
    uname: "Joel coat wines",
    pname: "Bread",
    uid: "v5",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568453/prod3_ypf7bv.jpg",
  },
  {
    uname: "Joel coat wines",
    pname: "Biscuit",
    uid: "v4",
    pics: "https://res.cloudinary.com/duwkxxbeh/image/upload/v1665568432/prod2_z1sbza.jpg",
  },
];
export default function Assets() {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="main_container">
        <AssetHeader headName="Assets"></AssetHeader>
        <section className="product_container">
          {DUMMY_DATA.map((data, index) => {
            return (
              <Card
                key={index}
                Name1={data.uname}
                imgs={data.pics}
                Uid={data.uid}
                Pname={data.pname}
              ></Card>
            );
          })}
        </section>
      </div>
    </>
  );
}
