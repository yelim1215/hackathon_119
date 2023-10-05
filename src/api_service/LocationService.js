class LocationService {
  getCurrentLocation = () => {
    return navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      return new Location(lat, lng);
    });
  };
}

const locationService = new LocationService();
export default locationService;
