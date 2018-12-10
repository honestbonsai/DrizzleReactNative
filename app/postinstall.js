const fs = require('fs-extra');
const drizzlePackage = require('./node_modules/drizzle/package.json');

(async () => {
    // https://github.com/trufflesuite/drizzle/issues/130
    drizzlePackage['react-native'] = './src/index.js';

    await fs.writeFile(
        './node_modules/drizzle/package.json',
        JSON.stringify(drizzlePackage, null, 2)
    );
})().catch(console.log);