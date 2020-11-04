import * as axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fullNames } from '../common/fullNames';
import { letters } from '../common/letters';
import { getRndInteger, getRndTime } from '../common/randomNumber';

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {'Content-Type': 'application/json'},
});

var mock = new MockAdapter(instance);

mock.onGet("/api").reply(200, {
    statusCode: 0,
});

mock.onGet("/search").reply(function (config) {
    const fullName = fullNames[getRndInteger(0, fullNames.length-1)];
    const idnp = config.params.idnp !== null ? config.params.idnp : getRndInteger(100000000000, 999999999999);
    const number = config.params.number !== null ? config.params.number : ('+373'+getRndInteger(1000, 9999)+getRndInteger(1000, 9999));
    const panCard = String(getRndInteger(1000000, 9999999)) + String(getRndInteger(1000000, 9999999));
    const dateAccess = config.params.dateAccess;

    const rows = getRndInteger(1, 10);
    let itemsResp = [];
    for (let i = 0; i<rows; i++){
        itemsResp.push(
            {
                id: i,
                fullName: fullName,
                idnp: idnp,
                number: number,
                panCard: panCard,
                lastTransaction: getRndTime() + ' ' + dateAccess,
            },
        )
    }
    return [
      200,
      {
        statusCode: 0,
        items: itemsResp
      },
    ];
});

mock.onGet("/raport").reply(function (config) {
    const startDate = new Date(config.params.range.startDate)
    const endDate = new Date(config.params.range.endDate)
    const minDay = startDate.getDate()
    const maxDay = endDate.getDate()
    const minMonth = startDate.getMonth()
    const maxMonth = endDate.getMonth()
    const minYear = startDate.getFullYear()
    const maxYear = endDate.getFullYear()

    const installations = getRndInteger(1000, 10000);
    const increasePercent = getRndInteger(0.1, 50);

    const pages = getRndInteger(2, 15);
    let chartPages = [];
    for (let i = 0; i<pages; i++){
        chartPages.push(
            {
                id: i,
                label: 'Page ' + letters[i],
                clients: getRndInteger(0, 10000),
            }
        )
    }
    const datesCount = getRndInteger(2, 15);
    let dates = [];
    for (let i = 0; i<datesCount; i++){
        dates.push(
            {
                id: i,
                date: getRndInteger(minDay, maxDay)+'/'+getRndInteger(minMonth, maxMonth)+'/'+getRndInteger(minYear, maxYear),
                total: {
                    totalUnic: getRndInteger(0, 100),
                    totalFrecvent: getRndInteger(0, 50),
                }
            }
        )
    }
    return [
      200,
      {
        statusCode: 0,
        data: {
            installations,
            increasePercent,
            chartPages,
            dates
        }
      },
    ];
});

export const adminUiAPI = {
    getResponse(){//to initialize app
        return instance.get(`api`).then((res) => {
            return res
        })
    },
    searchClients(params){
        return instance.get(`search`, { params: 
            { 
                idnp: params.idnp ? params.idnp : null, 
                number: params.number ? params.number : null, 
                dateAccess: params.dateAccess
            }
            }).then((res) => {
            return res
        })
    },
    getRaport(range){
        return instance.get(`raport`, { params: { range } }).then((res) => {
            return res
        })
    }
}