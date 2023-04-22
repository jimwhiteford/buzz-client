import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { URL } from "../App";

const ApiaryCard = ({ post }) => {
  const navigate = useNavigate();
  const deleteHive = () => {
    axios
      .delete(`${URL}/deleteApiary/${post._id}`)
      .then((res) => {
        console.log("Hive successfully deleted!");
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.photo}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
        {/* <FileBase64
          className="text-gray-800 px-4 p-2 mb-8 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
          multiple={false}
          
        /> */}
      </div>
      <h1 className="text-slate-600 text-center mb-8 text-3xl font-semibold">
        {post.title}
      </h1>
      <div className="text-center">
        <Link to={`/apiarys/${post.slug}`}>
          <span className="transition duration-200 transform hover:-translate-y-1 inline-block hover:bg-yellow-500 bg-yellow-600 text-lg font-medium rounded-full text-white px-8 py-2 mb-4 cursor-pointer">
            See Your Hives
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

export default ApiaryCard;
