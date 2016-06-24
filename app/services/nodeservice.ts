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
        var linksFolder=[
                {title:'Nuevo', action:"new", subject:new Subject()},
                {title:'Nuevo grupo', action:"newGroup", subject:new Subject()},
                {title:'Copiar', action:"copy", subject:new Subject()},
                {title:'Cambiar nombre', action:"rename", subject:new Subject()},
                {title:'Eliminar', action:"delete", subject:new Subject()}];

        var linksLeaf=[
                {title:'Copiar', action:"copy", subject:new Subject()},
                {title:'Cambiar nombre', action:"rename", subject:new Subject()},
                {title:'Eliminar', action:"delete", subject:new Subject()}];

        return [{
            "label": "Menú", 
            "data": "",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "links": linksFolder,
            "children": [
                {"label": "Usuarios", "icon": "fa-file-code-o", "data": "", "links": linksLeaf},
                {"label": "Roles", "icon": "fa-file-code-o", "data": "", "links": linksLeaf}]
        },{
            "label": "Pantallas",
            "data": "",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "links": linksFolder,
            "children": [
                {"label": "Usuarios", "icon": "fa-file-code-o", "data": "", "links": linksLeaf},
                {"label": "Roles", "icon": "fa-file-code-o", "data": "", "links": linksLeaf}]
        },{
            "label": "Servicios",
            "data": "",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "links": linksFolder,
            "children": [
                {"label": "Administración", "icon": "fa-file-code-o", "data": "", "links": linksLeaf}]
        },{
            "label": "Entidades",
            "data": "",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "links": linksFolder,
            "children": [
                {"label": "Usuario", "icon": "fa-file-code-o", "data": "", "links": linksLeaf},
                {"label": "Rol", "icon": "fa-file-code-o", "data": "", "links": linksLeaf}]
        }]; 

    }
}
