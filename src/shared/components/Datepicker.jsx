import React, { Component } from 'react'
import ReactDatePicker from 'react-datepicker'

const MOUNTHS = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

const getMonth = (date) => {
    return moment(date).month()
}

const getYear = (date) => {
    return moment(date).year() + 543
}

const Datepicker = (props) => {


    const { name, value, minDate } = props

    let newValue = "";
    try {
        let m = moment(value);
        let year = m.get("years") + 543;
        let month = m.get("month") + 1;
        let date = m.get("date");
        newValue = `${date}/${month}/${year}`;
    } catch (error) { }



    return <ReactDatePicker
        renderCustomHeader={({
            date,
            // changeYear,
            // changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled
        }) => (
                < >
                    <button
                        type="button"
                        className="react-datepicker__navigation react-datepicker__navigation--previous"
                        aria-label="Previous Month"
                        onClick={e => {
                            decreaseMonth()
                        }}
                        disabled={prevMonthButtonDisabled}>
                        {"<"}
                    </button>

                    <div className="react-datepicker__current-month">{MOUNTHS[getMonth(date)]} {getYear(date)} </div>

                    <button
                        className="react-datepicker__navigation react-datepicker__navigation--next" aria-label="Next Month"
                        type="button"
                        onClick={e => {
                            increaseMonth()
                        }}
                        disabled={nextMonthButtonDisabled}>
                        {">"}
                    </button>
                </>
            )}
        dateFormat="dd/MM/yyyy"
        name={name}
        minDate={minDate}
        onChange={e => {
            return props.onChange(e)
        }}
        className={props.className}
        value={newValue}
        todayButton="วันนี้"
        selected={value}
        locale='th'
        onFocus={e => {
            e.currentTarget.blur()
        }}
        withPortal
    />
}

export default Datepicker