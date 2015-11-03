let m = require('mithril')

let Counter =  {}


Counter.controller = (model) => ({
  addCount: model.addCount
})

Counter.view = (controller, model) => {
  let actions = controller
  let count = model.value;

  return (
    <div className="counter">
      <h1> {count} clicked </h1>
      <button onclick={actions.addCount}>
        click me
      </button>
      <a href="/" config={m.route}>Back Home</a>  
    </div>
      
  );
}

module.exports = Counter
