import axios from 'axios';
import {UserType} from '../redux/usersReducer';
import {ProfileType} from '../redux/profileReducer/profileReducer';


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
}
export const authAPI = {
    getAuthMe: () => {
        return instance.get<ResponseGeneralType<{ id: number; email: string; login: string }>>(`/auth/me`)
            .then(res => res.data);
    },
}

export const profileAPI = {
    getProfile: (id: string) =>
        instance.get<ProfileType>(`/profile/${id}`),
    getStatus: (id: string) =>
        instance.get<string>(`/profile/status/${id}`),

}
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