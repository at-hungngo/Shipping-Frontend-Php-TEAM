/**
 * Interface Role
 * 
 * @interface IRole
 */
export interface IRole {
    id: number;
    name: string;
}
/**
 * Model Bid
 * 
 * @class Bid
 */
export class Role implements IRole {

    public id: number;
    public name: string;

    constructor(role: IRole) {
        this.id = role.id;
        this.name = role.name;
    }
}