/**
 * Interface Order
 * 
 * @interface IOrder
 */
export interface IOrder {
    id: number;
    title: string;
    description: string;
    weight: number;
    price_bid: number;
    reciver_name: string;
    reciver_phone: string;
    reciver_address: string;
    lnglat_start: string;
    lnglat_end: string;
    status: boolean;
    user_id: number;
    shipper_id: number;
}
/**
 * Model Order
 * 
 * @class Order
 */
export class Order implements IOrder {

    public id: number;
    public title: string;
    public description: string;
    public weight: number;
    public price_bid: number;
    public reciver_name: string;
    public reciver_phone: string;
    public reciver_address: string;
    public lnglat_start: string;
    public lnglat_end: string;
    public status: boolean;
    public user_id: number;
    public shipper_id: number;

    constructor(order: IOrder) {
        this.id = order.id;
        this.title = order.title;
        this.description = order.description;
        this.weight = order.weight;
        this.price_bid = order.price_bid;
        this.reciver_name = order.reciver_name;
        this.reciver_phone = order.reciver_phone;
        this.reciver_address = order.reciver_address;
        this.lnglat_start = order.lnglat_start;
        this.lnglat_end = order.lnglat_end;
        this.status = order.status;
        this.user_id = order.user_id;
        this.shipper_id = order.shipper_id;
    }
}