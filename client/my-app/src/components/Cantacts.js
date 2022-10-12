import React, { useEffect } from "react";
import { motion } from "framer-motion";
import selectDate from "../photos/selectDate.svg";
import deleteButton from "../photos/deleteButton.svg";
import importButton from "../photos/importButton.svg";
import exportButton from "../photos/exportButton.svg";
import { useState,} from "react";
import deleteImage from '../photos/deleteImage.svg';
import uploadImage from '../photos/uploadImage.svg'
import './contacts.css';
import Header from "./Header";
import Contact from "./Contact";

const Contacts = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [confirm, setIsConfirm] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [selectAllCheckboxChecked, setSelectAllCheckboxChecked] = useState(false);

  const selectAllCheckboxChanged = (e) => {
    setSelectAllCheckboxChecked(e.target.checked);
  };

  return (
    <div className="table-conatainer">
      <div className="button-container">
        <Header />
        <div className="left">
          <motion.img src={selectDate} alt="selectdate and filter" />
        </div>
        <span className="right">
          <motion.img
            whileTap={{ scale: 0.85 }}
            src={deleteButton}
            alt="deleteButton"
            onClick={() => {
              setIsConfirm(!confirm);
              setIsAlert(false);
            }}
          />
          <motion.img
            whileTap={{ scale: 0.85 }}
            src={importButton}
            alt="importButton"
            onClick={() => {
              setIsAlert(!isAlert);
              setIsConfirm(false);
            }}
          />
          <motion.img
            whileTap={{ scale: 0.85 }}
            src={exportButton}
            alt="exportButton"
          />
        </span>
      </div>

      {isUpload ? <div className='import'>
        <img src={uploadImage} alt="uploadImage"  />
    </div> : null}
      {isDelete ? <div className="import">
      <img src={deleteImage} alt="deleteImage" />
    </div> : null}
      
      

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th className="checkboxes">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={selectAllCheckboxChecked}
                  onChange={e => {
                    selectAllCheckboxChanged(e);

                  }}
                />
              </th>
              <th className="name">Name</th>
              <th className="designation">Designation</th>
              <th className="company">Company</th>
              <th className="industry">Industry</th>
              <th className="email">Email</th>
              <th className="phoneNumber">Phone Number</th>
              <th className="country">Country</th>
              <th className="action">Action</th>
            </tr>
          </thead>
          <tbody>  
            <Contact />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;