import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";

const HiveCard = () => {
  const [scanResult, setScanResult] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    navigate(scanResult);
  }, [scanResult, navigate]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8">
      <div className="relative overflow-hidden shadow-md mb-4">
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setScanResult(result?.text);
            }
            if (!!error) {
              console.log(error);
            }
          }}
          style={{ width: "100%" }}
        />
        <p className="text-center font-bold text-3xl mb-9 text-yellow-600">
          Scan Your Hives QR Code!
        </p>
      </div>
    </div>
  );
};

export default HiveCard;
