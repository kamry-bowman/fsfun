const https = require('https');

exports.handler = async (event, contect, callback) => {
  // const clientReq = https.request(
  //   'https://beer.fluentcloud.com/v1/beer',
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   },
  //   clientRes => {
  //     clientRes.setEncoding('utf8');
  //     let rawData = '';
  //     clientRes.on('data', chunk => {
  //       console.log(chunk);
  //       rawData += chunk;
  //     });
  //     clientRes.on('error', err => console.error(err));
  //     clientRes.on('end', () => {
  //       console.log('end');
  //       try {
  //         callback(null, {
  //           statusCode: 200,
  //           headers: {
  //             'content-type': 'application/json',
  //             'Access-Control-Allow-Origin': '*',
  //           },
  //           body: rawData,
  //         });
  //       } catch (e) {
  //         callback(e.message);
  //       }
  //     });
  //   }
  // );

  // clientReq.end();
  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify([
      { id: 423, name: "Daniel's Beer", likes: 22 },
      { id: 422, name: '', likes: 0 },
      { id: 421, name: 'Heisler', likes: 2 },
      { id: 193, name: 'Nitro Milk Porter', likes: 3 },
      { id: 189, name: 'Fat Tire', likes: 8 },
      { id: 188, name: 'Station 26 Juicy Banger IPA', likes: 5 },
      { id: 186, name: 'Duff', likes: 10 },
      { id: 184, name: 'Sierra Nevada', likes: 124 },
      { id: 183, name: 'New Belgium: Citradelic', likes: 3 },
      { id: 179, name: 'Shorts: Soft Parade', likes: 38 },
      { id: 174, name: 'Corona', likes: 28 },
      { id: 169, name: 'Magic Hat #9', likes: 26 },
      { id: 135, name: 'Oberon', likes: 17 },
      { id: 99, name: 'Two Hearted', likes: 37 },
    ]),
  };
};
