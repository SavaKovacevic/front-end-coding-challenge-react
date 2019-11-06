import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { OfficeContext } from '../../contexts/OfficeContext';

const Map = (props) => {
    const {offices, loading} = useContext(OfficeContext);

    const renderMarker = (map, maps) => {return offices && offices.length ? (
        offices.forEach(office => {
            let marker = new maps.Marker({
                map: map,
                position: new maps.LatLng(Number(office.latitude), Number(office.longitude)),
                });
            const infowindow = new maps.InfoWindow();
                marker.addListener("click", () => {
                infowindow.setContent(`<img src=${office.photo} alt=""></img><h1>${office.name}</h1><p>${office.description}</p>`);
                infowindow.open(map, marker);
            }); 
        })
    ) : null};

    const YOUR_API_KEY = 'YOUR API KEY GOES HERE';

    const mapRender = <GoogleMapReact
                            bootstrapURLKeys={{ key: YOUR_API_KEY }}
                            defaultCenter={[13, 0]}
                            defaultZoom={2.5}
                            yesIWantToUseGoogleMapApiInternals={true}
                            onGoogleApiLoaded={({ map, maps }) => renderMarker(map, maps)}
                        />

    return (
    <div style={{ margin: '1rem', height: 'calc(100vh - 6rem)', width: 'calc(100vw - 2 rem)' }}>
        {!loading ? mapRender : null}
    </div>
    );
  }


export default Map;