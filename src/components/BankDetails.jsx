import { useState } from "react";
import { banks } from "../data/data";
import "./styles/BankDetails.css";

const BankDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleBank = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container py-5 bankDetails">
      <h1>Bank Details</h1>
      <div className="row">
        {banks.map((bank, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card bank-card">
              <button
                className="card-header d-flex justify-content-between align-items-center btn-toggle"
                onClick={() => toggleBank(index)}
              >
                <span className="bankName">{bank.name}</span>
                <span className="toggle-icon">{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <div className="card-body">
                  <p><strong>Address:</strong> {bank.address}</p>
                  <p><strong>Account#</strong> {bank.account}</p>
                  <p><strong>Swift Code:</strong> {bank.swiftCode}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankDetails;
