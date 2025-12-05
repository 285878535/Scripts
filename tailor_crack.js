/*
PROJECT: Tailor (滚动截屏) 会员破解
AUTHOR: xjx111111
DATE: 2025-12-05

****************** 核心配置 (请将以下内容复制到 QuanX 配置文件) ******************

[rewrite_local]
^http:\/\/tailor\.tomax\.xyz\/api\/users\/fetch\/info url script-response-body https://raw.githubusercontent.com/285878535/Scripts/main/tailor_crack.js

[mitm]
hostname = tailor.tomax.xyz

****************************************************************************
*/

// --- 以下是脚本的实际运行逻辑 ---
// 判断是不是在这个 URL 里面
var body = $response.body;
var obj = JSON.parse(body);
const vipPath = "/api/users/fetch/info";
if ($request.url.indexOf(vipPath) != -1) {
    
    // 动作 1：把外层的 isVip 改成 true
    obj['data']['isVip'] = true;

    // 动作 2：关键差异在这里！！
    // 他是在 data.vip 下面加了一个 'expire' 字段！
    // 而不是 expireTime，也不是 vip.expireTime
    obj['data']['vip']['expire'] = "2099-09-09T05:41:38.139Z";

    body = JSON.stringify(obj);
}
$done({ body: body });
