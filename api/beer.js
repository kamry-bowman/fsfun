const https = require('https');

module.exports = async (req, res) => {
  const clientReq = https.request('https://beer.fluentcloud.com/v1/beer', {
    headers: {
      'Content-Type': 'application/json'
    }
  }, (clientRes) => {
    const { statusCode } = clientRes;

    if (statusCode !== 200) {
      console.log('Request failed');
      return res.status(500).end();
    }
    clientRes.setEncoding('utf8');
    let rawData = '';
    clientRes.on('data', (chunk) => {
      console.log(chunk);
      rawData += chunk; 
    });
    clientRes.on('error', (err) => console.error(err));
    clientRes.on('end', () => {
      console.log('end');
      try {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(rawData);
      } catch (e) {
        console.error(e.message);
      }
    })
  })

  clientReq.end();
};