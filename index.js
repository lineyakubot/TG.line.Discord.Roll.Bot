require('fs').readdirSync(__dirname + '/modules/').forEach(function (file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    exports[name] = require('./modules/' + file);
  }
});

/*
流程解釋

首先這裡會call modules/中的Discord line Telegram 三個檔案
如果在Heroku 有輸入它們各自的TOKEN 的話
服務就會各自啓動

Discord line Telegram三套BOT 都會統一呼叫analytics.js
再由analytics.js 呼叫roll/ 中各個的骰檔

所以基本上,要增加骰組
參考/roll中的DEMO骰組就好

以上, 有不明可以在GITHUB問我

另外, 使用或參考其中代碼的話, 請保持開源
感謝

*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log("Server Started. http://localhost:3000");
});

1
2
3
4
5
6
7
8
9
10
11
const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
 
app.listen(3000, () => {
    console.log("Server Started. http://localhost:3000");
});