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

    const [addresses, setAddresses] = useState([]);
    const [markers, setMarkers] = useState([]);
    useEffect(() => {
        // Replace this with your list of addresses
        const sampleAddresses = [
          "1600 Amphitheatre Parkway, Mountain View, CA",
          "1355 Market St, San Francisco, CA 94103",
          "1 Infinite Loop, Cupertino, CA 95014",
        ];
        setAddresses(sampleAddresses);
      }, []);

      useEffect(() => {
        async function geocodeAddresses() {
          if (!isLoaded) return;
          const geocoder = new window.google.maps.Geocoder();
          const newMarkers = [];

          async function geocodeAddress(address) {
            return new Promise((resolve, reject) => {
              geocoder.geocode({ address }, (results, status) => {
                if (status === "OK") {
                  resolve({
                    position: results[0].geometry.location,
                    title: address,
                  });
                } else {
                  reject(status);
                }
              });
            });
          }
    
          for (const address of addresses) {
            try {
              const marker = await geocodeAddress(address);
              newMarkers.push(marker);
            } catch (error) {
              console.error(`Failed to geocode address: ${address}`, error);
            }
          }
          setMarkers(newMarkers);
        }
    
        if (addresses.length) {
          geocodeAddresses();
        }
      }, [addresses, isLoaded]);

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
                  title={marker.title} 
                  icon={{
                    url: 'https://picsum.photos/200',
                    scaledSize: new window.google.maps.Size(30, 30),
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
                      <p>Info location</p>
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
