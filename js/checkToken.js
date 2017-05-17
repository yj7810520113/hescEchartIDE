/**
 * Created by WebStorm
 * User:maomao,http://www.mmcode.top
 * Date:2017/5/17
 * Time:10:45
 **/
function checkSuccessStatus(d){
    console.log("校验的数据为：");
    console.log(d);
    if(typeof(d.success)!="undefined"&&d.success==false){
        alert('登陆超时或用户不存在！将返回登录界面！');
        location.href='../html/login.html';
    }
}
// $.fn.getJSONData=function (url) {
//     $.ajax({
//         type:"get",
//         dataType:"json",
//         url:url,
//         headers:{
//             token:localStorage.getItem("token")//将token放到请求头中
//         },
//         success:function(resp){
//             alert(resp.msg);
//             return resp;
//         }
//     });
// }

$.extend({
   getJSONData:function (url) {
       $.ajax({
           type:"get",
           dataType:"json",
           url:url,
           headers:{
               token:localStorage.getItem("token")//将token放到请求头中
           },
           success:function(d){

           }
       });
   }
});