let m = require('mithril');
let Counter = require('./components/Counter');
let Home = require('./components/Home');
let inspect = require('util').inspect;
require('./index.html');
require('./app.styl');
let ud = require('ud') // Hot Module Replacement

m.route.mode = 'hash';

// module is an object defined by webpack listing all the modules


let Page = function(title) {
  this.title = m.prop(title)
  this.updateTitle= (title) => {
    this.title(title)
  }
  this.setFromServer = () => {
    m.request({method: 'GET', url: '/page'}).then((data) => {
      this.title(data.title)
    })
  }
}

let CounterModel = function(value) {
  this.value = m.prop(value)
  this.addCount = () => {
    this.value(this.value() + 1)
  }
}


let page = new Page('original title');
let counter = new CounterModel(0);

ud.defn(module, () => {
  m.route(document.body, '/', {
    '/': m.component(Home, page),
    '/counter': m.component(Counter, counter)
  })
  m.route(m.route()) // reload the current route
})()



