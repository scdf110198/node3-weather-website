const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hhbmVmYWJybyIsImEiOiJja2NsOHRwZnAwaWhxMnp0ODIzanZicHVwIn0.BlOVaJcRkMQR4TfPoVzjlA&limit=1'

    request({ url , json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

// const url = 'http://api.weatherstack.com/current?access_key=3ae2aa018b36df7221f84ea7bc8c4ade&query=&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location!')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '\nIt is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' outside.')
//     }

    
// })



module.exports = {
    geocode
}