var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {

    // Ins/Outs in JSX the this bindings gets lost in the API scope, so we save it before hand
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      console.log(temp);
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({
        isLoading: false
      });
        alert(errorMessage);
      });
  },
  render: function() {
    var {isLoading, temp, location} = this.state; // creating var from state to pass

    function renderMessage(){
      if (isLoading) { // loading data
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location) { // valid temp and location
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
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

addPromise(2,3).then(function(sum){
  console.log('promise success', sum);
}, function(err){
  console.log('promise error', err);
});
