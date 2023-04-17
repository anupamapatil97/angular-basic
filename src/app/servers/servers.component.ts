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
  serverCreated=false
  servers=["TestServer", "TestServer 2"]

  constructor(){
    setTimeout(()=>{
      this.isallowed=true
    },2000)
  }
  onServerCreation=()=>{
    this.serverCreated= true
    this.servers.push(this.serverName)
    this.serverCreateStatus= "Server Created Successfully! Name is " + this.serverName
  }
  onServerNameChange=(event:any)=>{
    this.serverName= event.target.value

  }
}
