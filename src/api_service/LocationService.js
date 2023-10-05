import {Locution} from "../domain/Locution";

const {kakao} = window

class LocationService {

    geocoder = new kakao.maps.services.Geocoder();

    getCurrentLocation = ()=>{
        return new Promise((resolve)=>{
            navigator.geolocation.getCurrentPosition((position)=>{
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                this.geocoder.coord2RegionCode(lng, lat, (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        resolve(
                            new Locution(
                                lat,
                                lng,
                                result[0].address_name,
                                result[0].region_1depth_name,
                                result[0].region_2depth_name
                            )
                        )
                    }
                })
            })
        })
    }

}

const locationService = new LocationService();

export default locationService;
