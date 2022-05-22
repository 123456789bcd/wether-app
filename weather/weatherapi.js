const request = require('postman-request');
const logger = require("../middleware/logger/mylog")

const weatherapi = (req, res) => {
    const value = req.body
    var city = value.value


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5cc0c17382db40b72346c4c826ca704a&units=metric`


    request({ url: url }, (error, response, body) => {
        try {

            const data = JSON.parse(response.body)
            logger.info("data", data);
            logger.info("city", city);

            if (city === "" || !data.name) {
                res.send(data)

                throw new Error(data.message);
            } else {
                res.send(data)
            }

        } catch (err) {
            logger.error("err", err.message);
        }


    })

}


module.exports = weatherapi