/**
 * @name account
 * @description 系统设置 - 账户模块
 */

import { ReqAccount, ResAccount } from './model';
import { get, post } from '@/utils/http';

enum URL {
  update = '/v1/account/edit',
  account = '/v1/account/info',
}

const account = async () => get<ResAccount>(URL.account);

const update = async (data: ReqAccount) => post<any>(URL.update, data);

export default { account, update };
