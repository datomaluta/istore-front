import IncreaseIcon from "../../../icons/IncreaseIcon";
import { PropsType } from "./types";

const InfoCard = ({ count, label, percent, children }: PropsType) => {
  return (
    <div className="rounded bg-white dark:bg-adminBgLightDark p-6 shadow-md">
      <div>
        <div className="rounded-full bg-adminBgWhite dark:bg-adminBgLightDark2 w-10 h-10 flex justify-center items-center mb-6">
          {children}
        </div>
        <p className="text-2xl font-bold">${count}</p>
        <div className="flex justify-between text-sm">
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-green-500 flex gap-1 items-center">
            <span>{percent}%</span>
            <span className="mb-1">{<IncreaseIcon />}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
