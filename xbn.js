/*********************************************
@zjy
日期:2022.04.03
[rewrite_local]
^https:\/\/xiaobien-api\.baobaobooks\.com\/bookshelf\/v1\/v3_3_0\/booktab\/play\/1011773 url script-response-body https://raw.githubusercontent.com/lzjyuan/xbe/main/xbn.js
hostname = xiaobien-api.baobaobooks.com
*********************************************/

//https://xiaobien-api.baobaobooks.com/bookshelf/v1/v3_3_0/booktab/books/1011773

var obj = JSON.parse($response.body);
//obj.is_buy = 5;
// obj.is_user_buy=1;
// obj.is_suit=1;
// obj.book_name = "zjy";
// obj.touch_talk = 0;
// obj.share.title ="zjy";
// obj.is_buy=1;
// obj.is_show_speak=1;

obj.show_type = 2;
obj.cate_info[0].play_show_type=1;
$done({body : JSON.stringify(obj)});
