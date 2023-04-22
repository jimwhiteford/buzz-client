import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import QRCode from "qrcode";
import { URL } from "../App";

const HiveCard = ({ post }) => {
  const [qr, setQr] = useState("");
  const { slug } = useParams();
  const navigate = useNavigate();

  const deleteHive = () => {
    axios
      .delete(`${URL}/deleteHive/${post._id}`)
      .then((res) => {
        console.log("Hive successfully deleted!");
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const generateQR = async () => {
    try {
      const response = await QRCode.toDataURL(`/apiarys/${slug}/${post.slug}`);
      setQr(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.photo}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="text-slate-600 text-center mb-8 text-3xl font-semibold">
        {post.title}
      </h1>
      <div className="text-center">
        {qr ? (
          <div className="mb-3">
            <a href={qr} download={post.title}>
              <img src={qr} alt="img" className="mx-auto" />
              Click to download
            </a>
          </div>
        ) : null}

        <button
          type="button"
          onClick={generateQR}
          className="transition duration-200 transform hover:-translate-y-1 inline-block hover:bg-yellow-500 bg-yellow-600 text-lg font-medium rounded-full text-white px-8 py-2 mb-2 cursor-pointer"
        >
          Generate QR Code
        </button>
      </div>
      <div className="text-center">
        <Link to={`/apiarys/${slug}/${post.slug}`}>
          <span className="transition duration-200 transform hover:-translate-y-1 inline-block hover:bg-yellow-500 bg-yellow-600 text-lg font-medium rounded-full text-white px-8 py-2 mb-2 cursor-pointer">
            See Your Hive Details
          </span>
        </Link>
      </div>
      <div
        onClick={deleteHive}
        className="text-center cursor-pointer p-3 text-xl hover:text-red-700"
      >
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default HiveCard;
