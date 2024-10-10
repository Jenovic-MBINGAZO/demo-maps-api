import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

export function GoogleMapsView({userLocation}){

    const containerStyle = {
        width: '50%',
        height: '50vh',
      }
      
      console.log(userLocation);
      
    return(
        <div className="bg-red-400 w-full">
            <LoadScript 
                googleMapsApiKey="AIzaSyDnnMLteTRrwog46pgKy0sHY5bERkXdoJ0"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={userLocation}
                    zoom={12}
                >
                    <MarkerF
                        position={userLocation}
                        
                    >

                    </MarkerF>
                </GoogleMap>
            </LoadScript>
        </div>
    )
}