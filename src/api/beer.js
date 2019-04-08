const https = require('https');
const url = require('url');

exports.handler = (event, context, callback) => {
  const routeParam = event.path.match(/\/beer\/(.+)/);
  console.log('route param', routeParam);
  if (event.httpMethod === 'OPTIONS') {
    preflight(callback);
  } else if (routeParam && event.httpMethod === 'PUT') {
    updateLikes(routeParam[1], JSON.parse(event.body).likes, callback);
  } else if (!routeParam && event.httpMethod === 'GET') {
    getBeers(callback);
  } else if (!routeParam && event.httpMethod === 'POST') {
    try {
      const { name, likes } = JSON.parse(event.body);
      createBeer(name, likes, callback);
    } catch {
      callback('Could not parse body.');
    }
  }
};

function preflight(callback) {
  callback(null, {
    statusCode: 204,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
    },
    body: {},
  });
}

function updateLikes(id, likes, callback) {
  const clientReq = https.request(
    `https://beer.fluentcloud.com/v1/beer/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    clientRes => {
      clientRes.setEncoding('utf8');
      clientRes.on('error', err => {
        callback(err.message);
      });
      clientRes.on('data', () => {
        // data is not needed, but res requires
        // data event to be processed to exit
      });
      clientRes.on('end', () => {
        try {
          callback(null, {
            statusCode: 204,
            headers: {
              'content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        } catch (e) {
          console.log(e, 'caught');
          callback(e.message);
        }
      });
    }
  );
  clientReq.write(
    JSON.stringify({
      likes,
    })
  );
  clientReq.end();
  console.log(
    'trying',
    JSON.stringify({
      likes,
    })
  );
}

function createBeer(name, likes, callback) {
  const clientReq = https.request(
    `https://beer.fluentcloud.com/v1/beer`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    clientRes => {
      clientRes.setEncoding('utf8');
      clientRes.on('error', err => {
        console.log(err);
        callback(err.message);
      });
      clientRes.on('data', () => {});
      clientRes.on('end', () => {
        try {
          callback(null, {
            statusCode: 204,
            headers: {
              'content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        } catch (e) {
          console.log(e, 'caught');
          callback(e.message);
        }
      });
    }
  );
  clientReq.write(
    JSON.stringify({
      name,
      likes,
    })
  );
  clientReq.end();
}

function getBeers(callback) {
  console.log('called getBeers');
  const clientReq = https.request(
    {
      ...url.parse('https://beer.fluentcloud.com/v1/beer'),
      headers: {
        'Content-Type': 'application/json',
      },
    },
    clientRes => {
      console.log('clientRes, line 133,', Object.keys(clientRes));
      clientRes.setEncoding('utf8');
      let rawData = '';
      clientRes.on('data', chunk => {
        console.log('chunk received', chunk);
        rawData += chunk;
      });
      clientRes.on('error', err => {
        console.log('error here line 140', err);
        callback(err.message);
      });
      clientRes.on('end', () => {
        console.log('end hit', rawData);
        callback(null, {
          statusCode: 200,
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: rawData,
        });
      });
    }
  );
  console.log('right before calling the clientReq');
  clientReq.end();
}
