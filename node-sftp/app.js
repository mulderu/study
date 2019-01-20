
let Client = require('ssh2-sftp-client');
let sftp = new Client();
sftp.connect({
    host: 'lab.ddhinc.net',
    port: '10122',
    username: 'ddh',
    password: 'ddh123'
}).then(() => {
    sftp.list('./work').then((data) => {

      console.log('DATA', data.length);
      console.log(data);

      sftp.fastGet('./work/r.txt', '/tmp/aaa_r.txt').then((data) => {
          console.log('GET END', data);
          sftp.fastPut('./demo.png', './work/demo.png').then((data) => {
           console.log('PUT END', data);
           console.log('SYSTEM END');
           process.exit(0);
          });
        }
      );
      
    });
}).then((data) => {
    //console.log(data, 'the data info');
}).catch((err) => {
    console.log(err, 'catch error');
});

