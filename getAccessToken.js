const https = require('https');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const serviceAccount = require('./user-firebase.json');

const getAccessToken = () => {
  const now = Math.floor(Date.now() / 1000);
  const privateKey = serviceAccount.private_key;

  const payload = {
    iss: serviceAccount.client_email,
    sub: serviceAccount.client_email,
    scope: 'https://www.googleapis.com/auth/firebase.messaging',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  };

  const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });

  const postData = `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${token}`;

  const options = {
    hostname: 'oauth2.googleapis.com',
    path: '/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
    }
  };

  const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      const accessToken = JSON.parse(data).access_token;
      console.log('Access Token:', accessToken);
    });
  });

  req.on('error', (e) => {
    console.error('Error:', e);
  });

  req.write(postData);
  req.end();
};

getAccessToken();
