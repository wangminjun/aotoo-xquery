//index.js
//获取应用实例
const app = getApp()
const Pager = require('../../components/aotoo/core/index')
let source = require('../common/source')

const mydata = [{"date":"2020-01-14","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-15","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-16","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-17","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-18","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-19","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-20","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-21","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-22","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-23","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-24","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-25","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-26","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-27","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-28","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-29","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-30","content":{"dot":[{"title":">9"}]}},{"date":"2020-01-31","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-01","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-02","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-03","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-04","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-05","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-06","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-07","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-08","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-09","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-10","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-11","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-12","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-13","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-14","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-15","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-16","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-17","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-18","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-19","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-20","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-21","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-22","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-23","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-24","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-25","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-26","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-27","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-28","content":{"dot":[{"title":">9"}]}},{"date":"2020-02-29","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-01","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-02","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-03","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-04","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-05","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-06","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-07","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-08","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-09","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-10","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-11","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-12","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-13","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-14","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-15","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-16","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-17","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-18","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-19","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-20","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-21","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-22","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-23","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-24","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-25","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-26","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-27","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-28","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-29","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-30","content":{"dot":[{"title":">9"}]}},{"date":"2020-03-31","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-01","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-02","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-03","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-04","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-05","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-06","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-07","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-08","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-09","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-10","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-11","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-12","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-13","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-14","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-15","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-16","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-17","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-18","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-19","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-20","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-21","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-22","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-23","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-24","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-25","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-26","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-27","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-28","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-29","content":{"dot":[{"title":">9"}]}},{"date":"2020-04-30","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-01","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-02","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-03","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-04","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-05","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-06","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-07","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-08","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-09","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-10","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-11","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-12","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-13","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-14","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-15","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-16","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-17","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-18","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-19","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-20","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-21","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-22","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-23","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-24","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-25","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-26","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-27","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-28","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-29","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-30","content":{"dot":[{"title":">9"}]}},{"date":"2020-05-31","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-01","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-02","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-03","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-04","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-05","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-06","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-07","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-08","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-09","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-10","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-11","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-12","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-13","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-14","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-15","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-16","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-17","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-18","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-19","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-20","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-21","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-22","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-23","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-24","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-25","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-26","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-27","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-28","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-29","content":{"dot":[{"title":">9"}]}},{"date":"2020-06-30","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-01","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-02","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-03","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-04","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-05","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-06","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-07","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-08","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-09","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-10","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-11","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-12","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-13","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-14","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-15","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-16","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-17","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-18","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-19","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-20","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-21","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-22","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-23","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-24","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-25","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-26","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-27","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-28","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-29","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-30","content":{"dot":[{"title":">9"}]}},{"date":"2020-07-31","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-01","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-02","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-03","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-04","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-05","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-06","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-07","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-08","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-09","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-10","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-11","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-12","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-13","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-14","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-15","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-16","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-17","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-18","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-19","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-20","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-21","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-22","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-23","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-24","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-25","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-26","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-27","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-28","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-29","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-30","content":{"dot":[{"title":">9"}]}},{"date":"2020-08-31","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-01","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-02","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-03","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-04","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-05","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-06","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-07","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-08","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-09","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-10","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-11","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-12","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-13","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-14","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-15","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-16","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-17","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-18","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-19","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-20","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-21","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-22","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-23","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-24","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-25","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-26","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-27","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-28","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-29","content":{"dot":[{"title":">9"}]}},{"date":"2020-09-30","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-01","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-02","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-03","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-04","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-05","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-06","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-07","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-08","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-09","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-10","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-11","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-12","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-13","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-14","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-15","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-16","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-17","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-18","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-19","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-20","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-21","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-22","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-23","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-24","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-25","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-26","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-27","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-28","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-29","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-30","content":{"dot":[{"title":">9"}]}},{"date":"2020-10-31","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-01","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-02","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-03","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-04","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-05","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-06","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-07","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-08","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-09","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-10","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-11","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-12","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-13","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-14","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-15","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-16","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-17","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-18","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-19","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-20","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-21","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-22","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-23","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-24","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-25","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-26","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-27","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-28","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-29","content":{"dot":[{"title":">9"}]}},{"date":"2020-11-30","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-01","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-02","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-03","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-04","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-05","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-06","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-07","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-08","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-09","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-10","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-11","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-12","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-13","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-14","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-15","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-16","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-17","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-18","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-19","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-20","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-21","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-22","content":{"dot":[{"title":">9"}]}},{"date":"2020-12-23","content":{"dot":[{"title":">9"}]}}]

Pager({
  data: {
    calendarConfig: null,
    ...source
  },

  onReady(){
    this.setData({
      calendarConfig: {
        $$id: 'calendar',
        mode: 1,
        type: 'range',
        total: 180,
        festival: ['元旦', '情人节', '劳动节', '青年节', '儿童节', '教师节', '国庆节', '圣诞节', '清明节', '冬至', '除夕', '春节', '元宵节', '端午节', '中秋节', '重阳节'],
        tap: 'onTap',
        rangeCount: 15,
        disable: true,
        data: mydata,
        value: ['2020-04-20', '2020-04-28'],
        toolbox: {
          rangeEdge: function (nexts) {
            let that = this
            let tmp = null
            let newEdgeDate = null
            let curDayStamp = this.current
            let endDayStamp = this.end
            let calenderId = this.calenderId
            let getYmd = this.getYmd
            endDayStamp = endDayStamp + 1 * 24 * 60 * 60 * 1000 //离店需要加一天
            let curDate = getYmd(curDayStamp)
            let endDate = getYmd(endDayStamp)

            function checkInvalidDate(edgeMonth) {
              edgeMonth.forEach(_item => {
                let item = _item.getData()
                if (item.valid) {
                  _item.removeClass('invalid')
                }
                if (item.date &&
                  (item.timestamp && item.timestamp < endDayStamp && item.timestamp > curDayStamp) &&
                  item.valid === false &&
                  !newEdgeDate
                ) {
                  if (!tmp) {
                    tmp = _item
                    let tap = `onSelected?type=date&date=${item.date}`
                    _item.update({
                      itemClass: 'valid',
                      tap
                    })
                  }
                }
              })
            }

            nexts.forEach(monInstId => {
              let edgeMon = that.activePage.getElementsById(monInstId)
              if (edgeMon) {
                let config = edgeMon.getData()
                edgeMon.visible(true)
                edgeMon.show()
                if (config.data.length) {
                  checkInvalidDate(edgeMon)
                } else {
                  edgeMon.fillMonth(function () {
                    checkInvalidDate(edgeMon)
                  })
                }
              }
            })

            if (tmp) {
              let xstamp = tmp.getData().timestamp
              xstamp = xstamp + 1 * 24 * 60 * 60 * 1000
              let ymd = getYmd(xstamp)
              newEdgeDate = ymd.year + '-' + ymd.month + '-' + ymd.day
            }

            function handleTintInvalid(date, from) {
              let ymd = getYmd(date)
              let handleId = calenderId + '-' + ymd.year + '-' + ymd.month
              let handle = that.activePage.getElementsById(handleId)
              if (handle) {
                handle.tint(date, null, 'invalid')
                if (from) {
                  let opMonth = []
                  let matchIndex = null
                  nexts.forEach((m, ii) => {
                    if ((matchIndex || matchIndex === 0) && ii > matchIndex) {
                      opMonth.push(m)
                    } else {
                      if (m === handleId) {
                        matchIndex = ii
                      }
                    }
                  })

                  if (opMonth.length) {
                    opMonth.forEach(mid => {
                      let h = that.activePage.getElementsById(mid)
                      if (h) {
                        h.visible(false)
                        h.hide()
                      }
                    })
                  }
                }
              }
            }

            if (newEdgeDate) {
              handleTintInvalid(newEdgeDate, 'newEdgeDate')
            } else {
              handleTintInvalid(endDayStamp)
            }
          }
        }
      }
    })
  },

  onTap(e, param, inst){
    const ca = this.getElementsById('calendar')
    let value = ca.getValue()
    console.log(value)
  }
})
