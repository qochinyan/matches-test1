import Refresh from "@app/assets/Refresh.png";
import Image from "next/image";
import "./Loader.scss";

export default function Loader() {
  return (
    <div className="loader-container">
      <Image className="loader-icon" src={Refresh} alt="Loading..." />
    </div>
  );
}
