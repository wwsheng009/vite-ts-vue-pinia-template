import { ReqParams } from '@/api/user/model';
import { router } from '@/router';
import { getToken, removeToken, setToken } from '@/utils/auth';
import { defineStore } from 'pinia';
import fetchApi from '@/api/user';

import { store } from '@/store';
interface IUserInfoProps {
  expire: string;
  token: string;
  name: string;
  avatar: string;
  mobile: number;
  auths: string[];
}

//定义用户属性
interface UserState {
  userInfo: IUserInfoProps;
  token: string;
}

function getUserInfo(): IUserInfoProps {
  const userinfo = localStorage.getItem('userInfo');
  return userinfo
    ? JSON.parse(userinfo)
    : { expire: '', token: '', name: '', avator: '', mobile: '', auths: [] };
}
// export const useUserStore = defineStore({
//   id: 'user', // id必填，且需要唯一
//   state: () => {
//     return {
//       name: '张三',
//     };
//   },
//   actions: {
//     updateName(name: string) {
//       this.name = name;
//     },
//   },
// });
export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    userInfo: getUserInfo(),
    token: localStorage.getItem('token') ?? '',
  }),
  getters: {
    getToken(): string {
      return this.token || getToken();
    },
  },
  actions: {
    setToken(info: string) {
      this.token = info ?? ''; // for null or undefined value
      setToken(info);
    },
    setAuth(auths: string[]) {
      this.userInfo.auths = auths;
    },
    resetState() {
      this.token = '';
      this.userInfo.auths = [];
    },
    async login(params: ReqParams) {
      // 密码加密
      // params.password = encryptByDES(params.password);
      const res = await fetchApi.login(params);
      if (res) {
        // save token
        this.setToken(res.token);
      }
      return res;
    },

    /**
     * @description: logout
     */
    async logout() {
      this.resetState();
      removeToken();
      router.replace('/login');
      // 路由表重置
      location.reload();
    },
  },
});
// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
