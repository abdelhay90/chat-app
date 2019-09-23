import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Marker} from '../../model/marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // google maps zoom level
  zoom = 18;
  // initial center position for the map
  lat = 30.0480283;
  lng = 31.2339171;
  markers: Marker[] = [
    {
      lat: 30.0480283,
      lng: 31.2339171
    }
  ];
  placeInfo: Object;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
  }

  /**
   * get the marker place info.
   */
  clickedMarker(marker: Marker) {
    this._http
      .get(
        `${environment.googleMapsApiEndPoint}?key=${environment.googleMapApiKey}&sensor=true&latlng=${marker.lat},${
          marker.lng
          }`
      )
      .subscribe(data => {
        this.placeInfo = data['results'][0]['formatted_address'];
      });
  }
}
