var FilterList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return (
        <li>
          {" "}
          <span>{item}</span>{" "}
          <a
            href
            data-id="{item.id}"
            class="remove-filter"
            onClick={this.props.remove.bind(item)}
          >
            remove
          </a>{" "}
        </li>
      );
    };
    return <ul>{this.props.items.map(createItem.bind(this))}</ul>;
  }
});
var FilterApp = React.createClass({
  getInitialState: function() {
    return { items: [], item: { id: 0, type: null } };
  },
  onChangeType: function(e) {
    this.setState({
      item: {
        id: this.state.items[this.state.items.length],
        type: e.target.value
      }
    });
  },
  remove: function(item, ev) {
    ev.preventDefault();
    var items = this.state.items.filter(function(itm) {
      return item.id !== itm.id;
    });
    this.setState({ items: items });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.item]);
    var item = {};
    this.setState({ items: nextItems, item: {} });
  },
  render: function() {
    return (
      <div>
        {" "}
        <h3>Filters</h3>{" "}
        <FilterList remove={this.remove} items={this.state.items} />{" "}
        <form className="filter" onSubmit={this.handleSubmit}>
          {" "}
          <fieldset>
            {" "}
            <legend>Filter</legend>{" "}
            <div className="form-grp">
              {" "}
              <select name="type" onChange={this.onChangeType}>
                {" "}
                <option>foo</option> <option>bar</option> <option>baz</option>{" "}
              </select>{" "}
            </div>{" "}
          </fieldset>{" "}
          <div className="actions">
            {" "}
            <button>{"Add #" + (this.state.items.length + 1)}</button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    );
  }
});
React.render(<FilterApp />, document.body);
