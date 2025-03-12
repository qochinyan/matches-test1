import Image from "next/image";
import "./UpdateButton.scss";
import Refresh from "@app/assets/Refresh.png";

export default function TestButton({
  disabled,
  _class,
}: {
  disabled: boolean;
  _class: string;
}) {
  return (
    <button className="update-button" disabled={disabled}>
      <p className="text">Обновить</p>
      <Image
        className={`image ${_class}`}
        alt="refresh"
        src={Refresh}
      />
    </button>
  );
}
