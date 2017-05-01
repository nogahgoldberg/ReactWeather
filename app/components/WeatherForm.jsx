var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault(); // prevents entire page from reloading
    var location = this.refs.location.value; // Getting location from input in form

    // Checking valid location
    if (location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location); // Calling parent onSearch function, passing up
    }
  },
  render: function() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"></input>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
