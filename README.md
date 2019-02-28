### How to run the project
1. Clone the project on server
2. cd `SlackWeatherBot`
3. `npm install`
4. run `node index.js`
5. Join Slack Url
6. Join Channel #weatherbot
7. Run slack command

## Slack Commands
1. Slack Message by calling these command 
	- today weather "zipcode"

### Architecture
1. Digital Ocean Server.
2. Node Run on it.
3. Node app will use express, bodyparser, async/await, request
4. Communicate with Slack Api via 
	## Slack Message by calling these command 
	-today weather "zipcode"
5. Communicate with Open Weather Api
6. Return the message from Open Weather Api to Slack.
