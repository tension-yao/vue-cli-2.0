import axios from '@/lib/js/axios'
import AxiosMockAdapter from 'axios-mock-adapter'

// response data
import { star } from './data/demo'

export default {
  init () {
    const mock = new AxiosMockAdapter(axios)

    mock.onGet('/demo').reply(this.demo)
  },
  demo (config) {
    /**
     * 成功的回调：Promise.resolve([status, { response: '要响应的内容' }])
     *
     * 失败的回调：Promise.reject([status, { response: '要响应的内容' }])
     */
    return Promise.resolve([200, { msg: '测试请求成功', star }])
  }
}
