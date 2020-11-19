const { ERROR_MSSSGE } = require("../config/constant");

export default {
    alertPreConfirm: async function (title = "", callBack) {

        Swal.fire({
            title: title,
            // text: "สินค้าที่อยู่ในส่วนนี้จะถูกลบทั้งทั้งหมด!",
            showCancelButton: true,
            confirmButtonColor: '#409444',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ตกลง',
            showLoaderOnConfirm: true,
            cancelButtonText: 'ยกเลิก',
            preConfirm: async function (rs) {
                Swal.getCancelButton().setAttribute('hidden', true);
                return callBack(rs)
            },
            allowOutsideClick: false
        });

    },
    alertSuccess: async function (title,/** @type {Function} */ callBack, timer = 1000) {
        Swal.fire({
            title: title,
            icon: 'success',
            timer: timer,
            showConfirmButton: false,
        }).then(async (res) => {
            return callBack(res)
        })
    },
    alertDanger: async function (title, text = "",/** @type {Function} */ callBack = () => { }, timer = 1000) {
        Swal.fire({
            title: title,
            text: text,
            icon: 'error',
            timer: timer,
            showConfirmButton: false,
        }).then(async (res) => {
            return callBack(res)
        })
    },
    alertSomeThingWrong: async function () {
        Swal.fire('ผิดพลาด', ERROR_MSSSGE.SOMETHING_WRONG);
    }


}