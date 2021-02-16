export class City {

    setData(data: any): City {
        if (data) {
            Object.assign(this, data);
        }
        return this;
    }

    setLatitude(latitude: any) {
        localStorage.setItem('latitude', JSON.stringify(latitude));
    }

    getlatitude() {
        return JSON.parse(localStorage.getItem('latitude'));
    }

    setLongitude(longitude: any) {
        localStorage.setItem('longitude', JSON.stringify(longitude));
    }

    getLongitude() {
        return JSON.parse(localStorage.getItem('longitude'));
    }
}
