import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import stockApiary from "../stockapiary.jpg";
import stockHive from "../beehive.jpg";
import { URL } from "../App";

const SaveCard = (props) => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");

  const sendContent = () => {
    const slugTemp = title.replace(/\s+/g, "-").toLowerCase();
    axios
      .post(`${URL}/createApiary`, {
        user: props.user,
        title: title,
        slug: slugTemp,
        photo: photo,
      })
      .then((response) => {
        alert("Apiary Created");
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendHiveContent = () => {
    const slugTemp = title.replace(/\s+/g, "-").toLowerCase();
    axios
      .post(`${URL}/createHive`, {
        user: props.user,
        apiary: props.slug,
        title: title,
        slug: slugTemp,
        photo: photo,
        hiveType: "",
        breed: "",
        queenId: "",
        queenNote: "",
        hiveNote: "",
        broodBox: "",
        supers: "",
        topBar: "",
      })
      .then((response) => {
        alert("Hive Created");
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (props.slug) {
      setPhoto(stockHive);
    } else {
      setPhoto(stockApiary);
    }
  }, [props.slug]);

  return (
    <div className="lg:col-span-4 col-span-1">
      <div className="lg:sticky relative top-8">
        <div>
          <div className="bg-white shadow-lg rounded-lg p-7 mb-12">
            <h3 className="text-2xl mb-7 font-semibold border-b pb-4 text-black">
              {props.slug ? "Add a new hive" : "Add a new apiary"}
            </h3>
            <div>
              <div>
                <p className="font-semibold text-lg">Apiary image:</p>
                <FileBase64
                  className="text-gray-800 ml-2 w-full"
                  multiple={false}
                  onDone={({ base64 }) => setPhoto(base64)}
                />
                <img className="mt-4" src={photo} alt="" />

                <p className="font-semibold text-lg mt-8">Apiary name:</p>
                <input
                  className="text-gray-800 px-4 p-2 mb-1 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
                  placeholder="Name"
                  name="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="text-center" type="submit">
              <div onClick={props.slug ? sendHiveContent : sendContent}>
                <span className="transition duration-200 transform hover:-translate-y-1 inline-block hover:bg-yellow-500 bg-yellow-600 text-lg font-medium rounded-full text-white px-8 py-2 mt-7 cursor-pointer">
                  Save
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveCard;
