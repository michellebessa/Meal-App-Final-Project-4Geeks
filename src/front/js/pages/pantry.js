import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import "../../styles/pantry.css";
import PantryScanImg from "../../img/pantryscan.png";

const PantryModal = (props) => {
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

export const Pantry = () => {
  const { store, actions } = useContext(Context);
  const [barcode, setBarcode] = useState("");

  return (
    <div className="accordion accordion-flush mt-5" id="pantryaccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <h1 className="pantrylisttitle">Pantry List</h1>

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
          <div className="accordion-body mb-4 mt-3">
            <div className="itemname">Item name</div>
            <div className="expirationdate">Expiration date</div>
          </div>
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
          <div className="accordion-body mb-4 mt-3">
            <div className="itemname">Item name</div>
            <div className="expirationdate2">Expiration date</div>
          </div>
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
          <div className="accordion-body mb-4 mt-3">
            <div className="itemname">Item name</div>
            <div className="expirationdate3">Expiration date</div>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Manualy add an item from your pantry
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body mb-4 mt-3" id="pantryplaceholder1">
            <input placeholder="Add an item" />
          </div>

          <div className="accordion-body mb-4 mt-3" id="pantryplaceholder2">
            <input placeholder="Enter expiration date" />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            Scan an item from your pantry
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFive"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p>
              Use our scanner to scan any food you have in your pantry and then
              it will be saved in your pantry list.
            </p>
            <button
              className="barcodebutton"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#pantryscanmodal"
              // onClick={BarcodeScannerComponent}
            >
              <i className="fas fa-barcode"></i> Click here to scan an item
              <BarcodeScannerComponent
                width={10}
                height={10}
                onUpdate={(error, result) => {
                  setBarcode(result.text);
                }}
              />
              <p>{barcode}</p>
            </button>
            <img className="barcodeimg" src={PantryScanImg} />

            <PantryModal modalid="pantryscanmodal">
              <p>
                <strong>
                  As soon as this modal opens, the computer will ask permission
                  to access my camera, so I can scan an item barcode.
                </strong>
              </p>
            </PantryModal>
          </div>
        </div>
      </div>
    </div>
  );
};
