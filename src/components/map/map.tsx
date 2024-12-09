import {City} from '../../types/city.ts';
import {OfferBase} from '../../types/offer.ts';
import leaflet, {Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../consts/consts.ts';
import {useEffect, useRef} from 'react';
import {useMap} from '../../hooks/use-map.ts';

type MapProps = {
  city: City;
  offers: OfferBase[];
  activeOfferPreviewId: string | null;
}

const defaultCustomIcon = new leaflet.Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new leaflet.Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export function Map({city, offers, activeOfferPreviewId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      offers.forEach((offer) => {
        const marker = leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === activeOfferPreviewId)
              ? currentCustomIcon
              : defaultCustomIcon
          })
          .addTo(map);
        markers.push(marker);
      });
    }

    return () => {
      markers.forEach((marker) => {
        marker.remove();
      });
    };
  }, [map, city, offers, activeOfferPreviewId]);

  return (
    <div style={{height: '100%'}} ref={mapRef}/>
  );
}
