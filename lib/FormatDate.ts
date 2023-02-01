export default function FormatDate(timeStamp:string) {

    let date = new Date(parseInt(timeStamp))
    let formatedDate = date.getFullYear()+"/"+date.getMonth()+"/"+date.getDay()+" "+date.getHours()+":"+date.getMinutes()

    return formatedDate
}