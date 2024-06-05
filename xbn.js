/*********************************************
@zjy
日期:2022.04.03
[rewrite_local]
^https:\/\/xiaobien-api\.baobaobooks\.com\/bookshelf\/v1\/v3_3_0 url script-response-body https://raw.githubusercontent.com/lzjyuan/xbe/main/xbn.js
hostname = xiaobien-api.baobaobooks.com
*********************************************/

//https://xiaobien-api.baobaobooks.com/bookshelf/v1/v3_3_0/booktab/books/1011773

const url = $response.url;
const method = $response.method;
const headers = $response.headers;
const body = $response.body;
    console.log(url);
    console.log(body);

// 定义重写规则函数
function rewriteRequest(url, method, headers, body) {
    console.log(url);
    // 根据 URL 和其他条件判断需要重写的接口
    // if (url.startsWith("https://xiaobien-api.baobaobooks.com/bookshelf/v1/v3_3_0/booktab/read/1011773")) {
    //   var obj = JSON.parse(body);
    //   obj.show_type = 2;
    //   obj.cate_info[0].play_show_type=1;
    //   body = JSON.stringify(obj)
    

    // } else if (url.startsWith("https://xiaobien-api.baobaobooks.com/bookshelf/v1/v3_3_0/newbook/route/1011773")) {
    //     var obj = JSON.parse(body);
    //     obj.buy_day="1733410693";
    //     obj.read_time=100;
    //     obj.is_new_buy=1;
    //     obj.now_day = "1717599493"
    //     body = JSON.stringify(obj)
    
    // }else if (url.startsWith("https://xiaobien-api.baobaobooks.com/bookshelf/v1/v3_3_0/booktab/play/1011773")) {
    //        var obj = JSON.parse(body);
    //       obj.show_type = 2;
    //       obj.cate_info[0].play_show_type=1;
    //       body = JSON.stringify(obj)
    // }

    // // 返回重写后的请求信息
    // return {
    //     url: url,
    //     method: method,
    //     headers: headers,
    //     body: body
    // };
}

// 执行重写规则函数
const rewrittenRequest = rewriteRequest(url, method, headers, body);
