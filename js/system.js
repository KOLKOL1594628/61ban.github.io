let accountAll = [{ // 存储账户json数据的数组
    username: 'gxc',
    passwd: 123
},
{
    username: 'xym',
    passwd: 123
},
{
    username: 'cmd',
    passwd: 123
}
]
function login() { //登陆判断
let username = document.getElementById('username').value;
let passwd = document.getElementById('passwd').value;
let account = accountAll.filter(function(e) {
    return e.username == username
})[0]; // 筛选账号返回数组，不存在则返回空数组
if (!account) {
    alert('账户不存在');
} else {
    if (account.username == username && account.passwd == passwd) {
        window.location.href ="http://juasd6n1ba.jmcs.cf/";
    } else {
        alert('密码错误');
    }
}
}
function doClear() { //获取页面所有的input框，是text和password框，内容=空串
let inputs = document.getElementsByTagName("input");
for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'text' || inputs[i].type == 'password') {
        inputs[i].value = '';
    }
}
}