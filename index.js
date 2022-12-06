const sdk = require('api')('@verbwire/v1.0#1xnglab5r6l9');

sdk.auth('sk_live_3f558f7c-a695-4830-90ca-8287d145e426');
sdk.postNftStoreFile({filePath: 'PHR-2.jpeg'},{accept: 'application/json'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

