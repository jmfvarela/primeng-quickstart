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
        Nodo seleccionado: {{selectedNode?.label}} <br>
        Acción de contexto: {{actionContextMenuSelected}}<br>
        <br>
        <p-tree [value]="nodes" selectionMode="single" [(selection)]="selectedNode" (onNodeSelect)="nodeSelect($event)">
            <template let-node>
                <!-- input [(ngModel)]="node.label" type="text" style="width:100%"-->
                <span [context-menu]="node.links" (onNodeSelect)="nodeSelect($event)">{{node.label}}
                </span>
            </template>    
        </p-tree>
    </div>
    `,
	selector: 'my-app',
    directives: [Tree,ContextMenuHolderComponent, ContextMenuDirective],
	providers: [HTTP_PROVIDERS, NodesService]
})
export class AppComponent {
    
    nodes; //: TreeNode[];
    selectedNode: TreeNode;

    constructor(private nodesService:NodesService) { }
    
      ngOnInit() {
        this.nodes=this.nodesService.getNodes();
        this.nodes.forEach(node => {
            node.links.forEach(link => link.subject.subscribe(val=> this.actionContextMenu(val.action)) )
            node.children.forEach(child => 
                child.links.forEach(link2 => link2.subject.subscribe(val2=> this.actionContextMenu(val2.action)) )
            )
        });
    }
    
    nodeSelect(event) {
    } 
    
    actionContextMenuSelected; 

    actionContextMenu(action){
        this.actionContextMenuSelected = action;
    }

}

