import { isDate } from "date-fns"

const isClient = () => {
    return typeof document != 'undefined'
}
const isEmptyObject = (obj = {}) => {
    return Object.keys(obj).length == 0
}

const numberFormatter = (number = 0) => {
    return number.toLocaleString('en-US', { minimumFractionDigits: 2 }) // 2,046,430.00
}

/**
 * 
 * @param {Date} date 
 * @param {string} spliter
 */
const dateTimeToThaiDate = (date, spliter = "/") => {
    if (!date instanceof Date) return;
    let y = date.getFullYear() + 543;
    let m = date.getMonth() + 1;
    let d = date.getDate();
    let arr = [d, m, y];
    return arr.join(spliter);
}

/**
 * 
 * @param {Date} date 
 */
const getTimeOfDate = (date) => {
    if (!date instanceof Date) return;
    let minutes = date.getMinutes();
    let hours = date.getHours();
    return `${integerToTimeformat(hours + "." + minutes)}`
}

/**
 * 
 * @param {number} int 
 */
const integerToTimeformat = (int) => {
    int = int.toString();
    let result = "";
    let hasDot = int.indexOf('.')
    if (hasDot > -1) {
        let rs = parseFloat(int).toFixed(2);
        let splitDot = rs.split('.');
        result = `${splitDot[0]}:${splitDot[1]}`
    } else {
        let rs = parseInt(int).toFixed(2);
        result = integerToTimeformat(rs);
    }

    return result
}



/**
 * 
 * @param {Date} orderDatetime 
 * @param {number} orderNumber 
 */
const orderNumberFormat = (orderDatetime, orderNumber) => {
    let currentMonth = orderDatetime.getMonth() + 1;
    let currentMonthFormatted = (currentMonth / 100)
        .toFixed(2)
        .split(".")[1];

    let formattedDate = orderDatetime.getFullYear() + (currentMonthFormatted) + orderDatetime.getDate();

    let formattedOrderNumber = (Number(orderNumber) / 10000).toFixed(4).split(".")[1];

    formattedOrderNumber = formattedDate + "-" + formattedOrderNumber;

    return formattedOrderNumber;
}


const flexMessageTemplate = ( adminName, userName, date, time, code) => {
    date = date ? date : "";
    let flexMessage = {
        "messages": [
            {
                "type": "flex",
                "altText": "บัตรคิว",
                "contents": {
                    "type": "bubble",
                    "direction": "ltr",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "บัตรคิว",
                                        "weight": "bold",
                                        "color": "#2159E8FF",
                                        "contents": []
                                    },
                                    {
                                        "type": "text",
                                        "text": adminName || "ร้านค้า",
                                        "weight": "bold",
                                        "align": "end",
                                        "contents": []
                                    }
                                ]
                            }
                        ]
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": userName,
                                "weight": "bold",
                                "size": "xxl",
                                "color": "#130909FF",
                                "align": "start",
                                "contents": []
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "รหัสอ้างอิง",
                                        "weight": "bold",
                                        "size": "xl",
                                        "color": "#0C0303FF",
                                        "contents": []
                                    },
                                    {
                                        "type": "text",
                                        "text": code,
                                        "weight": "bold",
                                        "size": "xl",
                                        "color": "#1D0606FF",
                                        "align": "start",
                                        "contents": []
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "baseline",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "วันที่จอง",
                                        "weight": "bold",
                                        "size": "xl",
                                        "color": "#1F0808FF",
                                        "contents": []
                                    },
                                    {
                                        "type": "text",
                                        "text": date,
                                        "weight": "bold",
                                        "size": "xl",
                                        "color": "#1D0101FF",
                                        "contents": []
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "เวลาที่จอง",
                                        "weight": "bold",
                                        "size": "xl",
                                        "color": "#0C0303FF",
                                        "contents": []
                                    },
                                    {
                                        "type": "text",
                                        "text": time,
                                        "weight": "bold",
                                        "size": "xl",
                                        "color": "#1D0606FF",
                                        "align": "start",
                                        "contents": []
                                    }
                                ]
                            }

                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "spacer"
                            }
                        ]
                    }
                }
            }
        ]
    }

    return flexMessage
}




export { isClient, isEmptyObject, numberFormatter, orderNumberFormat, dateTimeToThaiDate, getTimeOfDate, integerToTimeformat, flexMessageTemplate }