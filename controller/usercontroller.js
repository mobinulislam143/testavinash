exports.signUp = async (req, res) => {
    try {
        // Assuming `product` is a placeholder for actual data you want to return.
        // You should replace `product` with the actual data or object you want to send.
        const product = {}; // Replace with actual product data
        res.status(200).json({ status: "success", data: "successfully " });
    } catch (e) {
        res.status(400).json({ status: "fail", data: "product create failed" });
    }
};
