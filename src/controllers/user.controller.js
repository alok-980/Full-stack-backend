import { asyncHandler } from "../utils/asyncHandler.js";

console.log(asyncHandler);

const registerUser = asyncHandler( async (req, res) => {
    return res.status(200).json({
        message: "ok"
    })
})

export { registerUser }