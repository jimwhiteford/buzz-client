import { React, useState, useEffect } from "react";
import ApiaryCard from "../components/ApiaryCard";
import SaveCard from "../components/SaveCard";
import axios from "axios";
import Cookies from "universal-cookie";
import { URL } from "../App";

const cookies = new Cookies();
const user = cookies.get("EMAIL");

export default function Apiarys() {
  const [apiarys, setApiarys] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/getApiarys/${user}`)
      .then((response) => {
        setApiarys(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-black">
        <div className="md:col-span-7 col-span-1">
          {apiarys.map((post, index) => (
            <ApiaryCard post={post} key={post.title} />
          ))}
        </div>
        <div className="md:col-span-5 col-span-1">
          <div className="md:sticky relative top-8">
            <SaveCard user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
