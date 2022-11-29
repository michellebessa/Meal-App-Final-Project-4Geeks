import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export const PantryScan = () => {
  const { store, actions } = useContext(Context);
  const [barcode, setBarcode] = useState("");

  return (
    <div className="container">
      <BarcodeScannerComponent onUpdate={(error, result)=>{
      setBarcode(result.text)
	  }}/>
      <p>{barcode}</p>
    </div>
  );
};
