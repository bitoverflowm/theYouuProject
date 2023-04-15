import { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const defaultCenter = {
  lat: 40.7128,
  lng: -74.0060,
};

const MapViewModal = ({locations}) => {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_KEY,
    });

    const [selectedMarker, setSelectedMarker] = useState(null)
    const [coldHotLocations, setColdHotLocations] = useState([])
    const [markers, setMarkers] = useState([])
    const [userLocation, setUserLocation] = useState(null)


    useEffect(() => {
        // Replace this with your list of addresses
        setColdHotLocations(locations);
      }, [locations]);

    useEffect(() => {
      async function geocodeAddresses() {
        if (!isLoaded) return;
        const geocoder = new window.google.maps.Geocoder();
        const newMarkers = [];

        async function geocodeAddress(location) {
          return new Promise((resolve, reject) => {
            let address = location.address;
            geocoder.geocode({ address }, (results, status) => {
              if (status === "OK") {
                let hotOrCold
                if(location.services.includes("Hot") && location.services.includes("Cold")){
                  if(location.nature){
                    hotOrCold = "NatureBoth"
                  }else{
                    hotOrCold = "Both"
                  }                  
                } else if(location.services.includes("Hot")){
                  if(location.nature){
                    hotOrCold = "NatureHot"
                  } else {
                    hotOrCold = "Hot"
                  }
                } else {
                  if(location.nature){
                    hotOrCold = "NatureCold"
                  } else {
                    hotOrCold = "Cold"
                  }
                }
                resolve({
                  position: results[0].geometry.location,
                  title: location.name,
                  phone: location.phone,
                  website: location.website,
                  icon: hotOrCold
                });
              } else {
                reject(status);
              }
            });
          });
        }
  
        for (const location of coldHotLocations) {
          try {
            const marker = await geocodeAddress(location);
            newMarkers.push(marker);
          } catch (error) {
            console.error(`Failed to geocode address: ${location.address}`, error);
          }
        }
        setMarkers(newMarkers);
      }
  
      if (coldHotLocations.length) {
        geocodeAddresses();
      }
    }, [coldHotLocations, isLoaded]);

    useEffect(() => {
      getUserLocation()
    }, [])

    const getUserLocation = () => {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            })
          },
          (error) => {
            console.log("Error getting user location:", error)
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
        )
      } else {
        console.log("Geolocation is not supported by this browser.")
      }
    }

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading maps...</div>;

    //mapContainerStyle={containerStyle} center={defaultCenter}

    return (
      <div className="">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-semibold mb-4">Addresses Map</h1>
          <GoogleMap mapContainerStyle={containerStyle} center={userLocation || defaultCenter} zoom={10}>
            {markers.map((marker, index) => (
              <Marker 
                key={index} 
                position={marker.position} 
                title={marker.name} 
                icon={{
                  url: 'http://localhost:3000/mapIcons/'+marker.icon+'.png',
                  scaledSize: new window.google.maps.Size(40, 40),
                }}
                onClick={()=> setSelectedMarker(marker)} />
            ))}
            {
              selectedMarker && (
                <InfoWindow 
                  position={selectedMarker.position} 
                  onCloseClick={()=> setSelectedMarker(null)}>
                  <div>
                    <h2>{selectedMarker.title}</h2>
                    <p>{selectedMarker.phone}</p>
                    <p>{selectedMarker.website}</p>
                  </div>
                </InfoWindow>
              )
            }
          </GoogleMap>
        </div>
      </div>
    )
}

export default MapViewModal;
