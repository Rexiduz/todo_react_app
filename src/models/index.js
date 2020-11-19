class Product {
    branch_row_id = ""
    brand_row_id = ""
    categoryRowId = ""
    color_row_id = ""
    created_datetime = ""
    created_user_row_id = ""
    has_property = ""
    is_deleted = "N"
    is_promoted = ""
    is_show = "Y"
    itemStatusRowId = ""
    itemType = ""
    item_code = ""
    item_cost = ""
    item_description = ""
    item_image_name = ""
    item_image_path = ""
    item_name = ""
    /**@type {number} */
    item_price = null
    item_price_1 = ""
    item_price_2 = ""
    item_price_3 = ""
    item_price_4 = ""
    /**@type {number} */
    item_qty = null
    item_row_id = ""
    item_title = ""
    item_video_name = ""
    item_video_path = ""
    item_weight = ""
    last_updated_datetime = ""
    last_updated_username = ""
    model_row_id = ""
    ref_measure_row_id = ""
}

/**
 * @typedef OrderModel
 * @property orderRowId  {string}
 * @property orderNumber  {number}
 * @property branchRowId  {string}
 * @property shippingFee  {string}
 * @property shippingDistance  {string}
 * @property orderTax  {string}
 * @property discountBaht  {string}
 * @property discountPercent  {string}
 * @property refPaymentRowId  {string}
 * @property deliveredUserRowId  {string}
 * @property deliveredDateTime  {Date}
 * @property createdDatetime  {Date}
 * @property orderStatusId  {string}
 * @property trackingNumber  {string}
 * @property orderType  {string}
 * @property subscriptionOrderRowId  {string}
 * @property locationLat  {string}
 * @property locationLong  {string}
 * @property locationTitle  {string}
 * @property transportBillImagePath  {string}
 * @property transportBillImageName  {string}
 */

/**
 * @typedef OrderItemProps
 * @property {OrderModel} [data]  
 * @property {import('react').ReactNode} [children] 
 * @property {(e)=> void} [onClick]
 */


export { Product }