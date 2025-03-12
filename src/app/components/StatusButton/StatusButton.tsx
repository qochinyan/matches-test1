import { statusButtonEnum } from "@app/scripts/types";
import "./StatusButton.scss";

export default function statusButton({ status }: { status: statusButtonEnum }) {
  return (
    <button className={`status-button ${status}`}>
      {status === statusButtonEnum.Scheduled
        ? "Match preparing"
        : status === statusButtonEnum.ongoing
        ? "Live"
        : status === statusButtonEnum.finished
        ? statusButtonEnum.finished
        : ""}
    </button>
  );
}
