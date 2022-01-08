import axios from 'axios';
import {UserType} from '../redux/usersReducer';

type ResponseGetUsersType = {
    items: UserType[];
    totalCount: number;
    error: string | null;
}
type ResponseGeneralType<T> = {
    resultCode: number;
    messages: string[];
    data: T;
}
type ResponsePostAndDeleteFollowType = ResponseGeneralType<{}>
type ResponseGetAuthMeType =
    ResponseGeneralType<{ id: string; email: string; login: string }>

const apiKey = {'API-KEY': '38ccf673-39cc-47fa-a572-edc86d238c16'};
const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
});

export const userAPI = {
    getUsers: (page: number, count: number) => {
        return instance.get<ResponseGetUsersType>('/users', {
            params: {page, count,},
        }).then(res => res.data);
    },
    postFollow: (id: number) => {
        return instance.post<ResponsePostAndDeleteFollowType>(`/follow/${id}`, {}, {headers: apiKey,})
    },
    deleteFollow: (id: number) => {
        return instance.delete<ResponsePostAndDeleteFollowType>(`/follow/${id}`, {headers: apiKey});

    },
    getAuthMe: () => {
        return instance.get<ResponseGetAuthMeType>(`/auth/me`).then(res => res.data);
    },
}