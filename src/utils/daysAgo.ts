import { split } from "lodash";
import moment from "moment";

export function daysAgo(date: string): number {
  const currentDate = new Intl.DateTimeFormat(undefined, {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }).format(Date.now());

  return moment(formatDateForDaysAgo(currentDate)).diff(
    moment(formatDateForDaysAgo(date)),
    "days"
  );
}

type DateType = string | number;
type DateArray = [DateType, DateType, DateType];
function decrementMonth(date: DateArray): DateArray {
  const [year, month, day] = date;
  const newMonth = Number(month) - 1;
  return [year, newMonth, day];
}

function formatDateForDaysAgo(date: string): DateArray {
  let formattedDate = date.split("/") as DateArray;
  formattedDate.reverse();
  formattedDate = decrementMonth(formattedDate);
  return formattedDate;
}
