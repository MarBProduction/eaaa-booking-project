import moment from "moment-timezone";

export function isoTimeFormatter(isoTimeString:string){
  return moment(isoTimeString).format("HH:mm");
}

export function formatRoomNumber(number: number){
  return number < 10 ? `0${number}` : `${number}`;
}

export function formatFloorNumber(number: number){
  return number == 0 ? `S` : `${number}`;
}

export function currentDate() {
    const d = new Date();
    const year = d.getFullYear();
    let month: number | string = d.getMonth() + 1;
    let day: number | string = d.getDate();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    return year + "-" + month + "-" + day;
  }