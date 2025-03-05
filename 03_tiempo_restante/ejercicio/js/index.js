
const fechaFinal = new Date('2050-06-27');

const resultado = document.getElementById('resultado');

const ms_anno = 1000*60*60*24*365;
const ms_month = 1000*60*60*24*30;
const ms_day = 1000*60*60*24;
const ms_hour = 1000*60*60;
const ms_minute = 1000*60;
const ms_second = 1000;


setInterval(() => {
    const diff = Math.abs(fechaFinal - new Date());
    let rest;
    
    const anno = Math.floor(diff/ms_anno);
    rest = diff % ms_anno;
    const month = Math.floor(rest/ms_month);
    rest = diff % ms_month;
    const day = Math.floor(rest/ms_day);
    rest = diff % ms_day;
    const hour = Math.floor(rest/ms_hour)
    rest = diff % ms_hour;
    const minute = Math.floor(rest/ms_minute);
    rest = diff % ms_minute;
    const second = Math.floor(rest/ms_second);
    
    resultado.innerText = `${anno}:${month}:${day}:${hour}:${minute}:${second}`;
}, 1000);