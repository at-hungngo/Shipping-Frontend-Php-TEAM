/**
 * Interface User
 * 
 * @interface IUser
 */
export interface IUser {
    id: number;
    username: string;
    email: string;
    point: number;
    age: number;
    description: string;
    roleId: number;
    sex: boolean;
    token: string;
}
/**
 * Model User
 * 
 * @class User
 */
export class User implements IUser {

    public id: number;
    public username: string;
    public email: string;
    public point: number;
    public age: number;
    public description: string;
    public roleId: number;
    public sex: boolean;
    public token: string;

    constructor(user: IUser) {
        this.id = user.id;
        this.username = user.username;
        this.email = user.email;
        this.point = user.point;
        this.age = user.age;
        this.description = user.description;
        this.roleId = user.roleId;
        this.sex = user.sex;
        this.token = user.token;
    }
}