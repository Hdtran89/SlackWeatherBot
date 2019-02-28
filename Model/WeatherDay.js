const Weather =  require('./Weather.js');
const Main = require('./Main.js');
const Wind = require('./Wind.js');
const Clouds = require('./Clouds.js');

function WeatherDay(dt){
	this.dt = dt;
	this.weather = new Weather();
	this.main = new Main();
	this.clouds = new Clouds();
	this.wind = new Wind();
}

module.exports = WeatherDay;