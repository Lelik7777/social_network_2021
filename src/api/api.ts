import axios from 'axios';
import {UserType} from '../redux/usersReducer';
import {ProfileType} from '../redux/profileReducer/profileReducer';

type ResponseGetUsersType = {
    items: UserType[];
    totalCount: number;
    error: string | null;
}
type ResponseGeneralType<T = {}> = {
    resultCode: number;
    messages: string[];
    data: T;
}
const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {
        'API-KEY': 'd159ee21-92e5-491f-8ae2-2ba43dfb0380',
    },
});
export const userAPI = {
    getUsers: (page: number, count: number) => {
        return instance.get<ResponseGetUsersType>('/users', {
            params: {page, count,},
        }).then(res => res.data);
    },
    postFollow: (id: number) => {
        return instance.post<ResponseGeneralType>(`/follow/${id}`);
    },
    deleteFollow: (id: number) => {
        return instance.delete<ResponseGeneralType>(`/follow/${id}`);

    },
    getAuthMe: () => {
        return instance.get<ResponseGeneralType<{ id: number; email: string; login: string }>>(`/auth/me`)
            .then(res => res.data);
    },
    getProfile: (id: string)=>{
        return  instance.get<ProfileType>(`/profile/${id}`);
    }
}