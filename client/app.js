let m = require('mithril');
let Counter = require('./components/Counter');
let Home = require('./components/Home');
let inspect = require('util').inspect;
require('./index.html');
require('./app.styl');
let ud = require('ud') // Hot Module Replacement

m.route.mode = 'hash';

// module is an object defined by webpack listing all the modules


let model = ud.defobj(module,{
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
});

ud.defn(module, () => {
  m.route(document.body, '/', {
    '/': m.component(Home, m.prop(model.page)) ,
    '/counter': m.component(Counter, model.counter)
  })
  m.route(m.route()) // reload the current route
})()
                 


