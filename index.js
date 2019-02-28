require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
const slackBot = require("slackbots");
const weatherDay =  require('./Model/WeatherDay.js');
const mainWeather = require('./Model/Main.js');
const fetch = require("node-fetch");

var channel = "weatherbot";
var botName = "weatherman";
//From npm slackbot api
var bot = new slackBot({
    token: process.env.SLACK_AUTH_TOKEN,
    name: botName
});

//From NPM for openweather apis
var weather = require('openweather-apis');
var openWeatherApi = process.env.OPEN_WEATHER_API_KEY;
weather.setAPPID(openWeatherApi);
weather.setLang('en');
weather.setUnits('imperial');

bot.on("start", function(){
	var params = {
        icon_emoji: ':dog:'
    };
});

bot.on("message", function(data){
	if(data.type !== "message"){
		return;
	}
	var params = {
        icon_emoji: ':dog:'
    }; 
	handleMessage(data.text, params);
});

//Handle and decide on what type of message
function handleMessage(message, params){
	var zipcode = "";
	var newmessage = "";
	if(message.length > 5){
		zipcode = message.substring(message.length-5,message.length);
		newmessage = message.substring(0,message.length-5);
		zipcode = zipcode.trim();
		newmessage = newmessage.trim();
	} else {
		newmessage = message.trim();
	}
	switch(newmessage){
		case "today weather":
			//getTodaysWeather(zipcode, params);
			/*
			//Built in API Solution with NPM.
			**/
			weather.setZipCode(zipcode);
			weather.getAllWeather(function(err,JSONObj) {
				sendMessage(JSONObj, params);
			});
			break;
		default:
			return;
	}
}
/**
Using fetch and promise to grab the data with Open API.
**/
function getTodaysWeather(zipcode, params){
	var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us" + "&APPID=" + openWeatherApi;
	getOpenWeatherMapData(url)
		.then( message => {
			sendMessage(message, params)
		})
		.catch(err => {
			if (err instanceof HttpError && err.response.status == 404) {
        		sendMessage("Please type in the right zipcode");
	      	} else {
	        	throw err;
	      	}
		});
}

async function getOpenWeatherMapData(url){
	return fetch(url)
		.then(response => {
			if(response.status == 200){
				return response.json();
			} else {
				throw new HttpError(response);
			}
		})
}
//Send the message to the Slack API using the bot
function sendMessage(message, params){
	bot.postMessageToChannel(channel, message, params)
		.fail(function(message){
			console.log("error");
		}).then(function(message){
			console.log("success");
		})
}

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
