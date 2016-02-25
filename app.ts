import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
  selector: 'hello',
  template: `
    <div>Welcome to Angular2.0 base app</div>
  `
}) 

class HelloApp {

    constructor() { }
}

bootstrap(HelloApp);