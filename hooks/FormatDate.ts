export default function FormatDate(timeStamp: string) {
  let date = new Date(parseInt(timeStamp));
  // month must be returning index starting from 0
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let time = date.getHours() + ":" + date.getMinutes();

  let formatedDate = year + "/" + month + "/" + day + " " + time;

  return formatedDate;
}
