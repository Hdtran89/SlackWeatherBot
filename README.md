### No Server No Problem
1. Join the Slack with this Invite Link.
`https://join.slack.com/t/teamrocketsecret/shared_invite/enQtNTYyNDMxNzU4MzUyLTJkMTlhM2EyZmQ1MGVlY2FlMWY1OWVmMTU0YTc3ZmJmZjY2NzQ1NzZkMDBiYzc5OTYwNGY1M2I4ZDBjMmQ0NjM`
2.  - Create a channel and invite weatherman, Or Join #weatherbot Channel
3. Run Slack Command

### How to run the project
1. Clone the project on server
2. cd `SlackWeatherBot`
3. `npm install`
4. run `node index.js`
5. Join Slack Url
6. Join Channel #weatherbot
7. Run slack command

### Slack Commands
1. Slack Message by calling these command 
	- today weather "zipcode"

### Architecture
1. Digital Ocean Server.
2. Node Run on it.
3. Node app will use express, bodyparser, async/await, request
4. Communicate with Slack Api via 
	#### Slack Message by calling these command 
	- today weather "zipcode"
5. Communicate with Open Weather Api
6. Return the message from Open Weather Api to Slack.
