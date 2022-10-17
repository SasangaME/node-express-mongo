const buildService = require('../services/build.service');

function build(req, res, next) {
    try {
        const buildRes = buildService.getBuild();
        res.json(buildRes);
    } catch (err) {
        next(err);
    }
}

module.exports = { build }