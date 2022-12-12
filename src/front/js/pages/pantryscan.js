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
              <button type="button" className="btn" data-bs-dismiss="modal">
                Save item to my Pantry List
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
        <p className="pantryscandescription">
          Use our scanner to scan any food you have in your pantry and then it
          will be saved in your pantry list.
        </p>
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
            <p>
              <strong>
                As soon as this modal opens, the computer will ask permission to
                access my camera, so I can scan an item barcode.
              </strong>
            </p>
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
        <p className="pantryscandescription2">
          Every food that you scan will be saved in your pantry list.
        </p>
        <div className="accordion accordion-flush" id="pantryaccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <p className="pantrylisttitle">Pantry List</p>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Pantry items expiring next week
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">Item name/Expiration date</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Pantry items expiring next month
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">Item name/Expiration date</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                All Pantry Items
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">Item name/Expiration date</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col" id="barcodecol2">
        <h1 className="barcodeinfo">
          Here will be the information from the scanning...
        </h1>
      </div> */}
    </div>
  );
};
