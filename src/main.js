import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// {
//   "data_tables": {},
//   "disk_size": 0,
//   "data_size": 0,
//   "index_size": 0,
//   "disk_format_version": 0,
//   "committed_update_seq": 0,
//   "update_seq": 0,
//   "purge_seq": 0,
//   "compact_running": false,
//   "doc_count": 1302224,
//   "doc_del_count": 316,
//   "doc_version_count": 13268794,
//   "user_count": 445972,
//   "store_engine": "mysql",
//   "sync_status": 0,
//   "need_sync_num": 116,
//   "success_sync_num": 116,
//   "fail_sync_num": 0,
//   "left_sync_num": 0,
//   "last_sync_time": 1588659519888,
//   "last_exist_sync_time": 0,
//   "last_sync_module": "@volenday/input-reference",
//   "download": {
//     "today": 10645294,
//     "thisweek": 32256208,
//     "thismonth": 87797453,
//     "lastday": 21610914,
//     "lastweek": 278594168,
//     "lastmonth": 1397663827
//   },
//   "db_name": "registry",
//   "instance_start_time": "1586532491756",
//   "node_version": "v12.8.1",
//   "app_version": "3.0.0-rc.32",
//   "donate": "https://www.gittip.com/fengmk2",
//   "sync_model": "all",
//   "cache_time": 1588659798320
// }