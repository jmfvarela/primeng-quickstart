import {Component} from '@angular/core';
import {Tree, TreeNode} from 'primeng/primeng';

import {HTTP_PROVIDERS} from '@angular/http';

import {ContextMenuDirective, ContextMenuHolderComponent} from './contextmenudirective';
import {Subject} from 'rxjs/Rx';


@Component({
	templateUrl: 'app/app.component.html',
	selector: 'my-app',
    directives: [Tree,ContextMenuHolderComponent, ContextMenuDirective],
	providers: [HTTP_PROVIDERS]
})
export class AppComponent {
    
    constructor() { }
    
      ngOnInit() {
        this.files = [];
        this.files.push({
            "label": "Entities",
            "data": "links",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        },{
            "label": "Other",
            "data": "anotherLinks",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        });
        
        this.links = [
        {title:'link a',subject:new Subject()},
        {title:'link b',subject:new Subject()},
        {title:'link c',subject:new Subject()}
        ];
        this.anotherLinks = [
        {title:'link 1',subject:new Subject()},
        {title:'link 2',subject:new Subject()},
        {title:'link 3',subject:new Subject()}
        ];
        this.links.forEach(l => l.subject.subscribe(val=> this.firstCallback(val)));
        this.anotherLinks.forEach(l => l.subject.subscribe(val=> this.secondCallback(val)));
    }
    
    files: TreeNode[];
    selectedFile: TreeNode;
        
    nodeSelect(event) {
        //alert("nodeSelect: "+this.selectedFile.label);
    }
    
 
    
    firstRightClick; 
    secondRightClick;
    links;
    anotherLinks;
    getLinks(val) {
        if (val=="links") return this.links;       
        else return this.anotherLinks;
    }
    firstCallback(val){
        this.firstRightClick = val;
    }
    secondCallback(val){
        this.secondRightClick = val;
    }

}

