import { useEffect } from "react"
import GetLocation from 'react-native-get-location'

const LocationService = {
    
    GetLocation : (callback) => 
    {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            callback(location)
        })
        .catch(error => {
            const { code, message } = error;
            callback(code + message)
        })
    }

    /*
    GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            console.log(location);
            props.callback(location)
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
            props.callback(null)
        })
    */



}

export default LocationService