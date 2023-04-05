import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  isallowed= false
  serverCreateStatus="No server is created"
  serverName="Test"

  constructor(){
    setTimeout(()=>{
      this.isallowed=true
    },2000)
  }
  onServerCreation=()=>{
    this.serverCreateStatus= "Server Created Successfully! Name is " + this.serverName
  }
  onServerNameChange=(event:any)=>{
    this.serverName= event.target.value

  }
}
