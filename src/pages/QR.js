import { React } from "react";
import QRScanCard from "../components/QRScanCard";
import AddCard from "../components/AddCard";

export default function Qr() {
  return (
    <div className="container mx-auto px-10 mb-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-black">
        <div className="md:col-span-7 col-span-1">
          <QRScanCard />
        </div>
        <div className="md:col-span-5 col-span-1">
          <div className="md:sticky relative top-8">
            <AddCard />
          </div>
        </div>
      </div>
    </div>
  );
}
