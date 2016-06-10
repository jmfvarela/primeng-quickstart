import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {Tree, TreeNode} from 'primeng/primeng';
import {ContextMenu} from './contextmenu.mod';
import {MenuItem} from 'primeng/primeng';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {ViewChild} from '@angular/core';

@Component({
	templateUrl: 'app/app.component.html',
	selector: 'my-app',
    directives: [Tree,ROUTER_DIRECTIVES,ContextMenu],
	providers: [HTTP_PROVIDERS]
})
export class AppComponent {
    
    constructor() { }

    ngOnInit() {
        this.files = [];
        this.files.push({
            "label": "Entities",
            "data": "Entities",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        },{
            "label": "Other",
            "data": "Reserved for future use",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        });
        
        this.items = [
            {label: 'Add entity', icon: 'fa-plus'}
        ];
    }
    
    files: TreeNode[];
    selectedFile: TreeNode;
    items: MenuItem[];
    
    @ViewChild('menu') contextMenu: ContextMenu
    
    nodeSelect(event) {
        //alert("nodeSelect: "+this.selectedFile.label);
        this.contextMenu.show(event);
        
    }
    
    simpleStringify (object){
    var simpleObject = {};
    for (var prop in object ){
        if (!object.hasOwnProperty(prop)){
            continue;
        }
        if (typeof(object[prop]) == 'object'){
            continue;
        }
        if (typeof(object[prop]) == 'function'){
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
};

}

