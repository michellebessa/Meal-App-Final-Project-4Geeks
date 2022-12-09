import React, { useState, useEffect, useContext } from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export const PantryScan = () => {
  const { store, actions } = useContext(Context);

  const [data, setData] = React.useState("Not Found");

  return (
    <div className="d-flex align-items-center gap-3">
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      {/* <p>{data}</p> */}
      <div className="bg-light nutrition-facts">
        {/*nutrition label goes here*/}
        {parse("<strong>Ernesto</strong>")}
        <h1>HI</h1>
      </div>
    </div>
  );
};
