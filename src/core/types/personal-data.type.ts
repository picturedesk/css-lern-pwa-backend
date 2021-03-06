import {Favorite} from './favorite.type';

export interface PersonalData {
    id: number;
    stripeId: string;
    fullname: string;
    address: string;
    postcode: string;
    city: string;
    uid: string;
    favorites: Favorite;
}
