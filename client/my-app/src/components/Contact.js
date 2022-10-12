import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Tooltip from '@mui/material/Tooltip';
import "./contacts.css";

const Contact = () => {
  return (
    <tr>
      <td className="chekboxes">
        <input
          className="checkbox"
          type="checkbox"
        />
      </td>
      <td className="name">sushma</td>
      <td className="designation">full stack developer</td>
      <td className="company">Hirewand</td>
      <td className="industry">IT</td>
      <Tooltip title="email"  placement="bottom" arrow>
        <td className="email">
          email
       
        </td>
      </Tooltip>
      <td className="phoneNumber">9876543211</td>
      <td className="country">India</td>
      <td className="action">
        {/* <RiDeleteBinLine
          className="dustbin"
        /> */}
      </td>
    </tr>
  );
};

export default Contact;