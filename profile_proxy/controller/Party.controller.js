const axios = require("axios");
const local = "http://dev.profilebe.tuoitre.vn";

const createParty = async (req, res) => {
    try {
        let { headers: { authorization } } = req;
        // console.log(req.body, authorization)
        const result = await axios({
            url: `${local}/party`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: req.body
        })
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

const updateParty = async (req, res) => {
    try {
        let { party_id } = req.params;
        let { headers: { authorization } } = req;
        const result = await axios({
            url: `${local}/party/${party_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: req.body
        })
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    createParty,
    updateParty
}