import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Subject} from 'rxjs/Rx';

@Injectable()
export class NodesService {

    constructor(private http: Http) {}

    getNodes() {
        /*
        return this.http.get('app/resources/data/nodes.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });*/
        var links=[
                {title:'Nuevo',subject:new Subject()},
                {title:'Nuevo grupo',subject:new Subject()},
                {title:'Copiar',subject:new Subject()},
                {title:'Cambiar nombre',subject:new Subject()},
                {title:'Eliminar',subject:new Subject()}];

        return [{
            "label": "Menú",
            "data": "",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "links": links
        },{
            "label": "Pantallas",
            "data": "",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "links": links
        },{
            "label": "Servicios",
            "data": "",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        },{
            "label": "Entidades",
            "data": "",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "links": links
        }]; 

    }
}
