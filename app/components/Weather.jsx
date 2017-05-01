var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {

    // Ins/Outs in JSX the this bindings gets lost in the API scope, so we save it before hand
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
        that.setState({
          isLoading: false,
          errorMessage: e.message 
        });
      });
  },
  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state; // creating var from state to pass

    function renderMessage(){
      if (isLoading) { // loading data
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location) { // valid temp and location
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;

function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    } else{
      reject('Cannot add both arguments');
    }
  });
}
