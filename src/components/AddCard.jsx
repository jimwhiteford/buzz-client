import { React } from "react";

const imageURL =
  "https://scottishbeekeepers.org.uk/images/events/ubka_conf_2023.png";
const altText = "pic";
const AddCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-7 mb-3">
      {/* <h3 className="text-xl mb-7 font-semibold border-b pb-4 text-black">
        Advertisment
      </h3> */}
      <img src={imageURL} alt={altText} />
    </div>
  );
};

export default AddCard;
