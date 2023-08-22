import {Webtoon} from "./Observer";


export interface User {
    username: string;
    password: string;
    subscribedWebtoons: Webtoon[];
}

export class UserFactory {
    createUser(username: string, password: string): User {
        return { username, password, subscribedWebtoons: [] };
    }
}
