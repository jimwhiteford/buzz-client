import { React, useEffect, useState } from "react";
import axios from "axios";

const HiveDetail = (props) => {
  const [hiveType, setHiveType] = useState("");
  const [queenId, setQueenId] = useState("");
  const [queenNote, setQueenNote] = useState("");
  const [hiveNote, setHiveNote] = useState("");
  const [topBar, setTopBar] = useState("");
  const [supers, setSupers] = useState("");
  const [broodBox, setBroodBox] = useState("");
  const [breed, setBreed] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setHiveType(props.hive.hiveType);
    setQueenId(props.hive.queenId);
    setQueenNote(props.hive.queenNote);
    setHiveNote(props.hive.hiveNote);
    setTopBar(props.hive.topBar);
    setSupers(props.hive.supers);
    setBroodBox(props.hive.broodBox);
    setBreed(props.hive.breed);
  }, [
    props.hive.hiveType,
    props.hive.queenId,
    props.hive.queenNote,
    props.hive.hiveNote,
    props.hive.topBar,
    props.hive.supers,
    props.hive.broodBox,
    props.hive.breed,
  ]);

  const edit = () => {
    setIsUpdate(true);
  };

  const save = () => {
    axios
      .put(`http://localhost:3001/updateHive/${props.hive._id}`, {
        //user: props.user,
        // apiary: props.slug,
        // title: title,
        // slug: slugTemp,
        // photo: photo,
        hiveType,
        breed,
        queenId,
        queenNote,
        hiveNote,
        broodBox,
        topBar,
        supers,
      })
      .then((res) => {
        console.log(res.data);
        console.log("Student successfully updated");
        setIsUpdate(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-white shadow-lg rounded-lg lg:p-4 mb-2">
      <div className="relative overflow-hidden shadow-md mb-4">
        <img
          src={props.hive.photo}
          alt={props.hive.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-4 w-full"></div>
        <h1 className=" text-slate-600 text-center mb-8 text-3xl font-semibold">
          {props.hive.title}
        </h1>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p className="text-xl font-semibold">Queen Details</p>
        {!isUpdate ? (
          <div>
            <div className="flex">
              <p className="text-md font-semibold">Queen Identifier: </p>
              <p className="ml-5">{queenId}</p>
            </div>
            <div className="flex">
              <p className="text-md font-semibold">Breed/Subspecies: </p>
              <p className="ml-5">{breed}</p>
            </div>
            <div className="disabled">
              <p className="text-md font-semibold">Queen Notes: </p>
              <textarea
                readOnly
                value={queenNote}
                className="text-gray-800 h-32 px-4 p-2 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
              ></textarea>
            </div>
          </div>
        ) : (
          <div>
            <input
              placeholder="Queen Identifier"
              value={queenId}
              onChange={(e) => setQueenId(e.target.value)}
              className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
            ></input>
            <select
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
            >
              {props.breed.map((breed) => (
                <option key={breed._id} value={breed.breed}>
                  {breed.breed}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Notes"
              value={queenNote}
              onChange={(e) => setQueenNote(e.target.value)}
              className="text-gray-800 h-32 px-4 p-2 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
            ></textarea>
          </div>
        )}

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p className="text-xl font-semibold">Hive Details</p>
        {!isUpdate ? (
          <div>
            <div className="flex">
              <p className="text-md font-semibold">Hive Model: </p>
              <p className="ml-5">{hiveType}</p>
            </div>
            {hiveType === "National" || hiveType === "Langstroth" ? (
              <div>
                <div className="flex">
                  <p className="text-md font-semibold">
                    Number of Brood Box's:
                  </p>
                  <p className="ml-5">{broodBox}</p>
                </div>
                <div className="flex">
                  <p className="text-md font-semibold">Number of supers:</p>
                  <p className="ml-5">{supers}</p>
                </div>
              </div>
            ) : (
              <></>
            )}
            {hiveType === "Layens" || hiveType === "Horizontal" ? (
              <div>
                <div className="flex">
                  <p className="text-md font-semibold">Number of Top Bars:</p>
                  <p className="ml-5">{topBar}</p>
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="disabled">
              <p className="text-md font-semibold">Hive Notes: </p>
              <textarea
                readOnly
                value={hiveNote}
                className="text-gray-800 h-32 px-4 p-2 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
              ></textarea>
            </div>
          </div>
        ) : (
          <div>
            <select
              value={hiveType}
              onChange={(e) => setHiveType(e.target.value)}
              className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
            >
              {props.hiveType.map((hive) => (
                <option key={hive._id} value={hive.hiveModel}>
                  {hive.hiveModel}
                </option>
              ))}
            </select>
            {hiveType === "Layens" || hiveType === "Horizontal" ? (
              <div>
                <input
                  type="number"
                  value={topBar}
                  onChange={(e) => setTopBar(e.target.value)}
                  placeholder="Number of Top Bars"
                  className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
                ></input>
              </div>
            ) : (
              <></>
            )}
            {hiveType === "National" || hiveType === "Langstroth" ? (
              <div>
                <input
                  type="number"
                  value={broodBox}
                  onChange={(e) => setBroodBox(e.target.value)}
                  placeholder="Number of Brood Box's"
                  className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
                ></input>
                <input
                  type="number"
                  value={supers}
                  onChange={(e) => setSupers(e.target.value)}
                  placeholder="Number of Supers"
                  className="text-gray-800 px-4 p-2 mb-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
                ></input>
              </div>
            ) : (
              <></>
            )}
            <textarea
              placeholder="Notes"
              value={hiveNote}
              onChange={(e) => setHiveNote(e.target.value)}
              className="text-gray-800 h-32 px-4 p-2 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
            ></textarea>
          </div>
        )}
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="text-center mt-3">
          <button>
            {!isUpdate ? (
              <span
                onClick={edit}
                className="transition duration-200 transform hover:-translate-y-1 inline-block hover:bg-yellow-500 bg-yellow-600 text-lg font-medium rounded-full text-white px-8 py-2 mb-4 cursor-pointer"
              >
                Edit
              </span>
            ) : (
              <span
                onClick={save}
                className="transition duration-200 transform hover:-translate-y-1 inline-block hover:bg-yellow-500 bg-yellow-600 text-lg font-medium rounded-full text-white px-8 py-2 mb-4 cursor-pointer"
              >
                Save
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HiveDetail;
