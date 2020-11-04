export function formatDate(dateStr){
    const initDate = new Date(dateStr);
    const date = (Number(initDate.getMonth())+1) + '/' + initDate.getDate()   + '/' + initDate.getFullYear()
    return date
}