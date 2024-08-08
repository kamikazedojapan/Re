const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('\n', string => {
    console.log(`${string}`);
    readline.close();
})
