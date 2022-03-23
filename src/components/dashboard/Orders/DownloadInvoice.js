import React from 'react';
import jsPDFInvoiceTemplate, { OutputType } from "./jspdf-invoice-template";
import dhaam_logo from '../../../assets/images/dhaam_logo.png';
import moment from "moment";
import agent from '../../../agent';
import { useState } from "react";
import { API_STATUS, MESSAGES } from  '../../../constant';
import { HANDLE_ERROR } from '../../../Utils/utils';

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
        address: "Najafgarh, Delhi",
        phone: "9716718367",
        email: "dhaam_organic@example.com",
        email_1: "dhaam_organic@example.al",
        website: "www.example.al",
      },
      contact: {
        label: "Invoice issued for:",
        name: details.clientId?.name,
        address: details?.locality,
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
          item.size,
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
        invDescLabel: "Invoice Note",
        invDesc:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
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
      onClick={handleDownload}
      disabled={loading}
    >
      {loading ? (
        'loading....'
      ) : (
        <i className="fa fa-download" />
      )}{" "}
      {showTxt ? "Download Invoice" : ""}
    </button>
  );
};
export default DownloadInvoice;
