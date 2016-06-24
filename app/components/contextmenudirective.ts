import {Component, Directive, Input} from '@angular/core';
import {ContextMenuService} from '../services/context-menu.service';
import {Subject} from 'rxjs/Rx';

@Directive({
  selector:'[context-menu]',
  host:{'(contextmenu)':'rightClicked($event)'}
})
export class ContextMenuDirective{

  @Input('context-menu') links;

  constructor(private contextMenuService:ContextMenuService){
  }

  rightClicked(event:MouseEvent){
    if (this.links && this.links.length>0) {
      this.contextMenuService.show.next({event:event,obj:this.links});
    }
    event.preventDefault();
  }
}


@Component({
  selector:'context-menu-holder',
  styles:[
    '.container{width:200px;background-color:#eee}',
    '.link{cursor:pointer;padding:2px;}','.link:hover{background-color:#ddd}',
    'ul{margin:0px;padding:2px;list-style-type: none}'
  ],
  host:{
    '(document:click)':'clickedOutside()',
    //'(click)':'clickInside()'
  },
  template:
  `<div [ngStyle]="locationCss" class="container">
      <ul>
        <li (click)="link.subject.next(link)" class="link" *ngFor="let link of links">
          {{link.title}}
        </li>
      </ul>
    </div>
  `
})
export class ContextMenuHolderComponent{
  links = [];
  isShown = false;
  private mouseLocation :{left:number,top:number} = {left:0,top:0};
  constructor(private _contextMenuService:ContextMenuService){
    _contextMenuService.show.subscribe(e => this.showMenu(e.event,e.obj));
  }
  
  get locationCss(){ 
    return {
      'position':'fixed',
      'display':this.isShown ?  'block':'none',
      left:this.mouseLocation.left + 'px',
      top:this.mouseLocation.top + 'px',
    };
  }
  clickedOutside(){
    this.isShown= false
  }
  
  showMenu(event,links){
    this.isShown = true;
    this.links = links;
    this.mouseLocation = {
      left:event.clientX,
      top:event.clientY
    }
  }
}