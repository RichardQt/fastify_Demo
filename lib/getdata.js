// const fetch = require('./fetch_fileUrl.js')

import fetch from './fetch_fileUrl.js'
let locationData = {}
let combinedData = []
export async function getdata() {
    await fetch("file:///D:/2022_VS-compe_project/fastfiy_demo/data/location.json").then(res => res.json()).then(data => {
        locationData = data
    }
    )
    await fetch("file:///D:/2022_VS-compe_project/fastfiy_demo/data/ncovdata.json").then(res1 => res1.json()).then(data => {
        let cityData = [];
        data.results.forEach(item => {
            if (item.countryName === "中国") {
                item.cities.forEach(city => {
                    let singleCity = {};
                    singleCity.cityName = city.cityName;
                    singleCity.currentConfirmedCount = city.currentConfirmedCount;
                    cityData.push(singleCity);
                }
                )
            }
        }
        );
        return cityData
    }
    ).then(cityData => {
        cityData.forEach(city => {
            let key = locationData[city.cityName];
            if (key) {
                let item = {
                    cityName: '',
                    currentConfirmedCount: 0,
                    lon: 0,
                    lat: 0
                }
                item.cityName = city.cityName;
                item.currentConfirmedCount = city.currentConfirmedCount;
                item.lon = key.x;
                item.lat = key.y;
                combinedData.push(item);
            }
        }
        )
        // console.log(combinedData);
        
    })
    return combinedData
}


// export default getdata
