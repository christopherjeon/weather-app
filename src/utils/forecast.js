const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7233d6330bb3467302310489993413f2&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to location services.", undefined)
        }
        else if (body.error) {
            callback("Unable to find location.", undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " +
                body.current.temperature + " degrees out and it feels like " +
                body.current.feelslike + " degrees out." + "The humidity is currently " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast
