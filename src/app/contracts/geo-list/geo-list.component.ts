import { Component, OnInit } from '@angular/core';
import { GeoService } from '../../services/geo/geo.service';
import { Geo } from '../../models/Geo';

@Component({
  selector: 'app-geo-list',
  templateUrl: './geo-list.component.html',
  styleUrls: ['./geo-list.component.scss']
})
export class GeoListComponent implements OnInit {
  public isLoading: boolean;
  public geoList: Array<Geo> = [];
  constructor( private geoService: GeoService) { }

  ngOnInit() {
    this.init();
  }

  public init() {
    this.isLoading = true;
    this.geoService.getGeoList().subscribe(
      res => {
        if (res) {
          this.geoList = res;
        }
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        console.log('Error getGeoList');
      }
    );
  }

}
