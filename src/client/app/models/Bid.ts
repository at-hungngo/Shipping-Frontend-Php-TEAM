/**
 * Interface Bid
 * 
 * @interface IBid
 */
export interface IBid {
    id: number;
    description: string;
    price_bid: number;
    user_id: number;
    order_id: number;
}
/**
 * Model Bid
 * 
 * @class Bid
 */
export class Bid implements IBid {

    public id: number;
    public description: string;
    public price_bid: number;
    public user_id: number;
    public order_id: number;

    constructor(bid: IBid) {
        this.id = bid.id;
        this.description = bid.description;
        this.price_bid = bid.price_bid;
        this.user_id = bid.user_id;
        this.order_id = bid.order_id;
    }
}