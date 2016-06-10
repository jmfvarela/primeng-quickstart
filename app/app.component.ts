import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {Tree, TreeNode} from 'primeng/primeng';


import {ViewChild} from '@angular/core';
import {ContextMenuDirective} from './contextmenudirective';

@Component({
	templateUrl: 'app/app.component.html',
	selector: 'my-app',
    directives: [Tree,ContextMenuDirective],
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

    }
    
    files: TreeNode[];
    selectedFile: TreeNode;
        
    nodeSelect(event) {
        //alert("nodeSelect: "+this.selectedFile.label);
        
    }


}

