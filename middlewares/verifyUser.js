const { creatorResponse, fileNotFoundResponse } = require("../response/auth");

const verifyUser = (model) => [
    async (req, res, next) => {
        let itinerary = await model.findOne({ _id: req.params.id });
        if (itinerary) {
            if (itinerary.userId.equals(req.user.id)) {
                return next();
            }
            return creatorResponse(req, res);
        }
        return fileNotFoundResponse(req, res);
    },
];

module.exports = verifyUser;