function getBuild() {
    const build = {
        version: process.env.VERSION,
        build: process.env.BUILD,
        env: process.env.ENV
    };
    return build;
}

module.exports = { getBuild }