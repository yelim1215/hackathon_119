const {kakao} = window
class LocationService {

    geocoder = new kakao.maps.services.Geocoder();

    getCurrentLocation = () => {
        return navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            return this.geocoder.coord2RegionCode(lng, lat, (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    return new Location(
                        lat,
                        lng,
                        result[0].address_name,
                        result[0].region_1depth_name,
                        result[0].region_2depth_name
                    )
                }
            })
        })

    }
}
const locationService = new LocationService();
export default locationService