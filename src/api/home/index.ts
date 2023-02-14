import { ReqParams, ResInfoList, ResResult } from './model';
import { get } from '@/utils/http';

enum URL {
  list = '/v1/home/list',
  info = '/v1/home/info',
}

const list = async (data: ReqParams) => get<ResResult>(URL.list, data);

const info = async () => get<ResInfoList>(URL.info);

export default { list, info };
