export function getRndInteger(min, max) {//randow number
    const delay = Math.floor(Math.random() * (max - min + 1) ) + min;
    return delay;
}

function addZero(number) { // add zero to time
    if(number < 10){
        return '0'+number
    }
    return number
}
export function getRndTime() { // random time
    const hour = addZero(getRndInteger(0, 23));
    const minutes = addZero(getRndInteger(0, 59));
    const time = hour + ':' + minutes;
    return time
}