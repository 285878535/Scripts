/*
PROJECT: Tailor (滚动截屏) 会员破解
AUTHOR: xjx
DATE: 2025-12-05

****************** 核心配置 (请将以下内容复制到 QuanX 配置文件) ******************

[rewrite_local]
^http:\/\/tailor\.tomax\.xyz\/api\/users\/fetch\/info url script-response-body https://raw.githubusercontent.com/285878535/Scripts/main/tailor_crack.js

[mitm]
hostname = tailor.tomax.xyz

****************************************************************************
*/

// --- 以下是脚本的实际运行逻辑 ---

var body = $response.body;
var obj = JSON.parse(body);

if (obj && obj.data) {
    // 1. 基础会员开关
    obj.data.isVip = true;
    obj.data.coin = 999999;
    
  

   
}

$done({body: JSON.stringify(obj)});
