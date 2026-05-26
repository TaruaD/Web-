const readline = require('readline');

// 创建输入输出接口
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 使用 question 函数获取输入
rl.question('请输入您的名字：', (answer) => {
    console.log(`你好，${answer}！`);
    rl.close(); // 必须关闭接口以结束程序
});
