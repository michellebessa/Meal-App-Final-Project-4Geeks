import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import "../../styles/pantryscan.css";
import PantryScanImg from "../../img/pantryscan.png";

const PantryScanModal = (props) => {
  return (
    <div className="modal fade" id={props.modalid}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            {props.children}
            <div>
              <button type="button" className="btn" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PantryScan = () => {
  const { store, actions } = useContext(Context);
  const [barcode, setBarcode] = useState("");

  return (
    <div className="row">
      <div className="col" id="barcodecol1">
        <img className="barcodeimg" src={PantryScanImg} />
        <div>
          <button
            className="barcodebutton"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#pantryscanmodal"
          >
            <i className="fas fa-barcode"></i> Click here to scan an item
          </button>
          <PantryScanModal modalid="pantryscanmodal">
            <h1>test</h1>
          </PantryScanModal>

          {/* <BarcodeScannerComponent
            onUpdate={(error, result) => {
              setBarcode(result.text);
            }}
          />
          <p>{barcode}</p> */}
          
        </div>
      </div>
      <div className="col" id="barcodecol2">
        <h1 className="barcodeinfo">
          Here will be the information from the scanning...
        </h1>
      </div>
    </div>
  );
};
