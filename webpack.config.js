const Dotenv = require('dotenv-webpack');
module.exports = {
    plugins: [
        new Dotenv()
    ],
    externals: {
        'Config':  {
            serverUrl: JSON.stringify(process.env.REACT_APP_API_KEY)
        }
      }
}

