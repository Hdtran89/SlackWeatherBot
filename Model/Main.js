function Main(temp, temp_min, temp_max, pressure, sea_level, grnd_level, humidty, temp_kf){
	this.temp = temp;
	this.temp_min = temp_min;
	this.temp_max = temp_max;
	this.pressure = pressure;
	this.sea_level = sea_level;
	this.grnd_level = grnd_level;
	this.humidty = humidty;
	this.temp_kf = temp_kf;
}

module.exports = Main;