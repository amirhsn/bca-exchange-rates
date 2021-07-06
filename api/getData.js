const { default: axios } = require("axios");

const urlEndpoint = 'https://www.bca.co.id/id/informasi/kurs';
const getDataPromise = async ()=>{
    const response = await axios.get(
        urlEndpoint
    );
    return response.data;
};

module.exports = getDataPromise;