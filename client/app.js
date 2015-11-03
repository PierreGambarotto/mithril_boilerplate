var m = require('mithril');
var Counter = require('./components/Counter');
var Home = require('./components/Home');
let inspect = require('util').inspect;
require('./index.html');

m.route.mode = 'hash';

var model = {
  page: {
    title: 'Mitril sample',
    updateTitle: (title) => {
      model.page.title = title
      console.log(inspect(model))
    }
  },
  counter: {
    value: 0,
    addCount: () => {
      model.counter.value++
      console.log(inspect(model))
    }
  }
};

(function(){
  return m.route(document.body, '/', {
    '/': m.component(Home, model.page) ,
    '/counter': m.component(Counter, model.counter)
  })
}())

