import {Component} from '@angular/core';
import {Tree, TreeNode} from 'primeng/primeng';

import {HTTP_PROVIDERS} from '@angular/http';

import {ContextMenuDirective, ContextMenuHolderComponent} from './components/contextmenudirective';
import {Subject} from 'rxjs/Rx';

import {NodesService} from './services/nodeservice';

@Component({
    template: `
    <div class="ContentSideSections Implementation"> 
        <context-menu-holder></context-menu-holder>  
        {{firstRightClick}} {{secondRightClick}}
        <p-tree [value]="nodes" selectionMode="single" [(selection)]="selectedNode" (onNodeSelect)="nodeSelect($event)">
            <template let-node>
                <!-- input [(ngModel)]="node.label" type="text" style="width:100%"-->
                <span [context-menu]="node.links" (onNodeSelect)="nodeSelect($event)">{{node.label}}
                </span>
            </template>    
        </p-tree>
        <br>
        Selected:<br>
        {{selectedNode | json}}<br>
    </div>
    `,
	selector: 'my-app',
    directives: [Tree,ContextMenuHolderComponent, ContextMenuDirective],
	providers: [HTTP_PROVIDERS, NodesService]
})
export class AppComponent {
    
    nodes: TreeNode[];
    selectedNode: TreeNode;

    constructor(private nodesService:NodesService) { }
    
      ngOnInit() {
        this.nodes=this.nodesService.getNodes();
        //this.links.forEach(l => l.subject.subscribe(val=> this.firstCallback(val)));
    }
    
    nodeSelect(event) {
    } 
    
    firstRightClick; 
    secondRightClick;

    firstCallback(val){
        this.firstRightClick = val;
    }

}

