import {Directive, Input} from '@angular/core';
import {ContextMenu} from './contextmenu.mod';
import {MenuItem} from 'primeng/primeng';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Directive({
  selector:'[context-menu]',
  host:{'(contextmenu)':'rightClicked($event)'}
})
export class ContextMenuDirective{
  
  //@ViewChild('menu') contextMenu: ContextMenu
  
  @Input('context-menu') links;
  
  constructor(){ // private _contextMenuService:ContextMenuService
  }
  
  ngOnInit() {    
    this.items = [
        {label: 'Add entity', icon: 'fa-plus'}
    ];
  }
  
  items: MenuItem[];
  

  
  
  rightClicked(event:MouseEvent){
    //this._contextMenuService.show.next({event:event,obj:this.links});
    event.preventDefault(); // to prevent the browser contextmenu
    alert('hello world');
  }
}