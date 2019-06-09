import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Geo } from '../../models/Geo';
import { URLSearchParams } from '@angular/http';
import { DataService } from './../data/data.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(
    private dataService: DataService
  ) { }

  public getGeoList(): any {
    const path = `${environment.restBackendUrl}usuario/plasticosenres`;
    return this.dataService.doGet(path, null, )
    .pipe(
        map(
          result => {
            let geoList: Array<Geo> = [];
            if (result && result.geolocalizadores && result.geolocalizadores.length > 0) {
              geoList = result.geolocalizadores.map(
                geo => new Geo(geo.id, geo.fecha)
              );
            }
            return geoList;
          },
        catchError((err) => {
          return err;
        })
        )
    );
  }

  public getGeoById(id: string, page: number = 0, size: number = 50) {
    const params = new URLSearchParams();
    params.append('page', page.toString());
    params.append('size', size.toString());
    const path = `${environment.restBackendUrl}api/geolocalizadores//${id}`;
    return this.dataService.doGet(path, null, params)
    .pipe(
        map(
          result => {
            console.log(result);
            if (result ) {
              //const emp = result.data.employees;
              // return [new Employee(emp.name, emp.surname, emp.email, emp.admin, emp._id)];
            }
            return [];
          },
        catchError((err) => {
          return err;
        })
        )
    );
  }
}
