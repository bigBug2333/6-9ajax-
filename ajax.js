//type :请求类型
//url:请求的地址
//async: 同步或者是异步
//data: 参数 即允许传递 name=zs&age=18这种数据， 也允许直接传递一个对象 {name:"zs", age:18}
//dataType: 设定返回的数据的类型 xml/json/text  默认值text
//success: 成功时调用的函数
//error: 失败时调用的函数
function ajax(options) {
  //参数处理
  //如果没有传参数，或者传的参数不是一个对象，或者传的对象中没有url属性
  if (!options || typeof options != 'object' || !options.url) {
    return;
  }

  //传的type只要不是post，就是get
  var type = options.type === "post" ? "post" : "get";
  var url = options.url;
  //传的async只要不是false，就是true
  var async = options.async === false ? false : true;
  var data = options.data;

  //如果data传递不是string类型，而是对象类型
  //{name:"zs", age:18, gender:"男"}  ==> name=zs&age=18&gender=男
  if(typeof data === 'object') {
    //直接把对象类型给转换成字符串类型
    //遍历data
    var arr = [];
    for(var k in data) {
      var temp = k + "=" + data[k];
      arr.push(temp);
    }
    data = arr.join("&");
  }

  var success = options.success;
  var error = options.error;
  var dataType = options.dataType || "text";

  //发送请求
  var xhr = new XMLHttpRequest;
  //设置请求行
  //如果是get请求，需要把data拼接到url的后面（有data的情况）
  if (data && type === 'get') {
    url = url + "?" + data;
    data = null;
  }
  xhr.open(type, url, async);

  //设置请求头，只有post请求才需要设置
  if (type === 'post') {
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  }

  //发送请求体
  xhr.send(data);

  //获取响应结果
  xhr.onreadystatechange = function () {
    //响应结束了
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        //成功了
        // if(success) {
        //   success(xhr.responseText);
        // }
        var result;
        if (dataType == "xml") {
          result = xhr.responseXML;
        } else if (dataType == 'json') {
          result = xhr.responseText;
          //如果要json，自动帮你转换成json了
          result = JSON.parse(result);
        } else {
          result = xhr.responseText;
        }
        success && success(result);

      } else {
        // if(error) {
        //   error(xhr.responseText);
        // }
        error && error(xhr.responseText);
      }
    }
  }

}