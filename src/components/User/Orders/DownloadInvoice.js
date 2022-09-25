import React from 'react';
import jsPDFInvoiceTemplate, { OutputType } from "./jspdf-invoice-template";
import dhaam_logo from '../../../assets/images/dhaam_logo.png';
import moment from "moment";
import agent from '../../../agent';
import { useState } from "react";
import { API_STATUS, MESSAGES } from  '../../../constant';
import { HANDLE_ERROR } from '../../../Utils/utils';
import loadImg from "../../../assets/images/loading.gif";
const DownloadInvoice = ({ showTxt, orderId }) => {
  const [loading, setLoading] = useState(false); // Set loading to true on component mount
  // const [details, setDetails] = useState({}); // Set details to empty object on component mount

  const handleDownload = async () => {
    setLoading(true);
    agent.Orders.getById({ orderId }) // Get the details of the customer
      .then((res) => {
        // If the response is successful
        if (API_STATUS.SUCCESS_CODE.includes(res.status)) {
          setLoading(false); // Set loading to false
          // If the status is success
          generatePDF(res.data); // Generate the pdf
        } else {
          // setDetails({}); // Set details to empty object
          HANDLE_ERROR(MESSAGES, setLoading); // Handle the error
        }
      })
      .catch((err) => {
        // If there is an error
        HANDLE_ERROR(err.message, setLoading); // Handle the error
      });
  };
  const generatePDF = (details) => {
    var props = {
      outputType: OutputType.Save,
      returnJsPDFDocObject: false,
      fileName: `${details.clientId?.name + " " + details.orderId} Invoice`,
      orientationLandscape: false,
      // compress: true,
      logo: {
        src: dhaam_logo,
        width: 53.33, //aspect ratio = width/height
        height: 26.66,
        margin: {
          top: 0, //negative or positive num, from the current position
          left: 0, //negative or positive num, from the current position
        },
      },
      business: {
        name: "Dhaam Organic",
        address: "Village Chhudani Dhaam, Haryana-124504",
        phone: "9266027544,9810179526,8800203622",
        email: "dhaamorganic@gmail.com",
        email_1: "",
        website: "www.dhaamorganic.com",
      },
      contact: {
        label: "Invoice issued for:",
        name: details.clientId?.name,
        address: details?.clientId?.address?.[0]?.address,
        phone: String(details.clientId?.mobile),
        email: details.clientId?.email,
        // otherInfo: "www.website.al",
      },
      invoice: {
        label: "Order Id #: ",
        num: details.orderId,
        invGenDate: `Order Date: ${moment(details.orderPlacedAt).format(
          "DD-MM-YYYY HH:MM a"
        )}`,
        headerBorder: false,
        tableBodyBorder: false,
        header: [
          { title: "#" },
          { title: "Name", style: { width: 40 } },
          { title: "Price" },
          { title: "Quantity" },
          { title: "Unit" },
          { title: "Size" },
          { title: "Discount" },
          { title: "Final Price" },
          { title: "Total" },
        ],
        table: details.orderItem.map((item, index) => [
          index + 1,
          item.name,
          item.price,
          item.quantity,
          item.unit,
          item.size !=="None" ? item.size : "-",
          item.discount ? `${item.discount}%` : "-",
          item.finalPrice,
          item.subTotal,
        ]),
        invTotalLabel: "Total:",
        invTotal: `Rs. ${String(details.orderAmount)}`,
        row1: {
          col1: "Delivery Charge:",
          col2: `Rs. ${String(details.deliveryCharge)}`,
          style: {
            fontSize: 10, //optional, default 12
          },
        },
        row2: {
          col1: "SubTotal:",
          col2: `Rs. ${String(details.finalAmount)}`,
        },
        invDescLabel: "",
        invDesc:
          "",
      },
      footer: {
        text: "The invoice is created on a computer and is valid without the signature and stamp.",
      },
      pageEnable: true,
      pageLabel: "Page ",
    };
    jsPDFInvoiceTemplate(props);
  };
  return (
    <button
      type="reset"
      size="md"
      color="info"
      className='download_invoice mx-2'
      onClick={handleDownload}
      disabled={loading}
    >
      {loading ? (
        <img src={loadImg} className="white_load"  alt="" />
      ) : (
        <i className="fa fa-download" />
      )}
      {showTxt ? "Download Invoice" : ""}
    </button>
  );
};
export default DownloadInvoice;
