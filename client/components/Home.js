let m = require('mithril');
let inspect = require('util').inspect;
let Home = {}

Home.controller = (model) => {
  return {
    updateTitle: model.updateTitle
  }
}

Home.view = (controller, model) => {
  let actions = controller;
  let title = m.prop(model.title)

  return (
    <div className="home">
      <h1> {title()} </h1>
      <input oninput={(e) => actions.updateTitle(e.target.value)} value={title()} />
      <p>
        <a href="/counter" config={m.route}>Counter</a>
      </p>
    </div>
  )
}

module.exports = Home
