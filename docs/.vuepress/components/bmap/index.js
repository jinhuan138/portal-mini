/*
 * @Author: zhoushiyong
 * @LastEditors: Zhou Shiyong
 * @email: zhoushiyong@agree.com.cn
 * @Date: 2020-12-30 09:33:39
 * @LastEditTime: 2020-12-30 09:40:23
 */
import AuiMap from './src/BMap.vue';

/* istanbul ignore next */
AuiMap.install = function(Vue) {
  Vue.component(AuiMap.name, AuiMap);
};

export default AuiMap;