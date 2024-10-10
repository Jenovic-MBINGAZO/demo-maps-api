import { useEffect, useState } from 'react';
import { GoogleMapsView } from './components/GoogleMapsView'

function App() {

  const [userLocation, setUserLocation] = useState([])

  useEffect(() => {
    getUserLocation()
  }, [])

  const getUserLocation= ()=> {
    navigator.geolocation.getCurrentPosition(function(pos){
      
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      })
    }
    )
  }

  return (
      <div>
          <GoogleMapsView userLocation={userLocation} />
      </div>
  )
}

export default App
