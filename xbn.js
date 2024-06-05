/*********************************************
@zjy
日期:2022.04.03
[rewrite_local]
^https:\/\/xiaobien-api\.baobaobooks\.com\/bookshelf\/v1\/v3_3_0\/booktab\/play\/1011773 url script-response-body xbn.js
hostname = xiaobien-api.baobaobooks.com
*********************************************/

//https://xiaobien-api.baobaobooks.com/bookshelf/v1/v3_3_0/booktab/play/1011773

var obj = JSON.parse($response.body);
//obj.is_buy = 5;
//obj.is_user_buy=true;
//obj.book_number = "姐姐";
//obj.book_brief = "gvccchjjn";
obj.show_type = 0;
$done({body : JSON.stringify(obj)});
