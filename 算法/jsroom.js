/*
* 获取某个元素下标
*
*       arrays  : 传入的数组
*
*       obj     : 需要获取下标的元素
* */
function contains(arrays, obj) {
  var i = arrays.length;
  while (i--) {
      if (arrays[i] === obj) {
          return i;
      }
  }
  return false;
}
// 附上其它JS 代码:

// 格式化时间 年-月-日 时：分：秒
function formatDate(value) {
  if (value === undefined || value === null || value === '') {
      return "";
  } else {
      var date = new Date(value);
      var year = date.getFullYear().toString();
      var month = (date.getMonth() + 1);
      var day = date.getDate().toString();
      var hour = date.getHours().toString();
      var minutes = date.getMinutes().toString();
      var seconds = date.getSeconds().toString();
      if (month < 10) {
          month = "0" + month;
      }
      if (day < 10) {
          day = "0" + day;
      }
      if (hour < 10) {
          hour = "0" + hour;
      }
      if (minutes < 10) {
          minutes = "0" + minutes;
      }
      if (seconds < 10) {
          seconds = "0" + seconds;
      }
      return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
  }
}
// 格式化时间 年-月-日
function formatDateTime(value) {
  if (value === undefined || value === null || value === '') {
      return "";
  } else {
      var date = new Date(value);
      var year = date.getFullYear().toString();
      var month = (date.getMonth() + 1);
      var day = date.getDate().toString();
      if (month < 10) {
          month = "0" + month;
      }
      if (day < 10) {
          day = "0" + day;
      }
      return year + "-" + month + "-" + day;
  }
}

/*
*   功能:实现VBScript的DateAdd功能.
*   参数:interval,字符串表达式，表示要添加的时间间隔.
*   参数:number,数值表达式，表示要添加的时间间隔的个数.
*   参数:date,时间对象.
*   返回:新的时间对象.
*/
function DateAdd(interval, number, date) {
  switch (interval) {
      case "年": {
          date.setFullYear(date.getFullYear() + number);
          return date;
      }
      case "季": {
          date.setMonth(date.getMonth() + number * 3);
          return date;
      }
      case "月": {
          date.setMonth(date.getMonth() + number);
          return date;
      }
      case "周": {
          date.setDate(date.getDate() + number * 7);
          return date;
      }
      case "天": {
          date.setDate(date.getDate() + number);
          return date;
      }
      case "时": {
          date.setHours(date.getHours() + number);
          return date;
      }
      case "分": {
          date.setMinutes(date.getMinutes() + number);
          return date;
      }
      case "秒": {
          date.setSeconds(date.getSeconds() + number);
          return date;
      }
      default: {
          date.setDate(date.getDate() + number);
          return date;
      }
  }
}

/**参数说明：
* 根据长度截取先使用字符串，超长部分追加…
* str 对象字符串
* len 目标字节长度
* 返回值： 处理结果字符串
*/
function cutString(str, len) {
  //length属性读出来的汉字长度为1
  if(str.length*2 <= len) {
      return str;
  }
  var strlen = 0;
  var s = "";
  for(var i = 0;i < str.length; i++) {
      s = s + str.charAt(i);
      if (str.charCodeAt(i) > 128) {
          strlen = strlen + 2;
          if(strlen >= len){
              return s.substring(0,s.length-1) + "...";
          }
      } else {
          strlen = strlen + 1;
          if(strlen >= len){
              return s.substring(0,s.length-2) + "...";
          }
      }
  }
  return s;
}

function formatStatus(status) {
  return status === 'N' ? "冻结" : "激活";
}
function formatStatusH(status){
  return status === 'Y' ? "Y" : "N";
}
function formulaStatus(status){
  if(status === 'N'){
      return "<a href='#' style='color: red;'>无原材料</a>";
  }else{
     return "<span style='color: gold;'>正常</span>";
  }
}
function formulaStatusH(status){
  if(status === 'N'){
      return "<span style='color: gold;'>已下架</span>";
  }else{
      return "<span style='color: gold;'>正常</span>";
  }
}
function vipGrade(Grade){
  if(Grade>0){
      return '普通会员';
  }
  if(Grade>1){
      return '黄金会员';
  }
  if (Grade>2){
      return '钻石会员';
  }
}

function formatHalfProStatus(status) {
  if(status === '0') {
      return '预订';
  } else if(status === '1') {
      return '就餐中';
  } else {
      return '已预订';
  }
}
/*
* 获取某个元素下标
*
*       arrays  : 传入的数组
*
*       obj     : 需要获取下标的元素
* */
function contains(arrays, obj) {
  var i = arrays.length;
  while (i--) {
      if (arrays[i] === obj) {
          return i;
      }
  }
  return false;
}
function formatStart(status) {
  return status === 'N' ? "已暂停" : "运行中";
}

function formatDefault(status) {
  return status === 'N' ? "否" : "是";
}
function formatArea(value) {
  return value.split("-")[0];
}
//获取url上的值,获取页面传过来的值
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
      return unescape(r[2]);
  }
  return null;
}

/**
* 上传图片的通用js
* @param upload 必填
* @param elemId 按钮id
* @param url 上传路径
* @param imgEx 缩略图片id
* @param realImg 返回真实图片路径
* @param errorText 错误信息显示位置
*/
function uploadImg(upload, elemId, url, imgEx, realImg, errorText) {
  var uploadImg = upload.render({
      elem: '#'+elemId
      , url: url
      , before: function (obj) {
          //预读本地文件示例，不支持ie8
          obj.preview(function (index, file, result) {
              $('#'+imgEx).attr('src', result); //图片链接（base64）
          });
      }
      , done: function (res) {
          //如果上传失败
          if (res > 0) {
              return utils.alert('失败！');
          } else {
              return $('#'+realImg).val(res.msg);
          }
          //上传成功
      }
      , error: function () {
          //演示失败状态，并实现重传
          var demoText = $('#'+errorText);
          demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-mini demo-reload">重试</a>');
          demoText.find('.demo-reload').on('click', function () {
              uploadImg.upload();
          });
      }
  });
}