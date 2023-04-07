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
      googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_KEY, //"AIzaSyDVrXWPJVBZRBnyDsQow_8NZyEAct-88RA",
    });

    const [selectedMarker, setSelectedMarker] = useState(null);

    const [coldHotLocations, setColdHotLocations] = useState([]);
    const [markers, setMarkers] = useState([]);
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
                  resolve({
                    position: results[0].geometry.location,
                    title: location.name,
                    phone: location.phone,
                    website: location.website,
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

      if (loadError) return <div>Error loading maps</div>;
      if (!isLoaded) return <div>Loading maps...</div>;

      //mapContainerStyle={containerStyle} center={defaultCenter}

      return (
        <div className="">
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Addresses Map</h1>
            <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={10}>
              {markers.map((marker, index) => (
                <Marker 
                  key={index} 
                  position={marker.position} 
                  title={marker.name} 
                  /*icon={{
                    url: 'https://picsum.photos/200',
                    scaledSize: new window.google.maps.Size(30, 30),
                  }}*/
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
