This project was created with Vite.js

# The mission: What does it do?

The aim of "alert-simulator" is to simulate the Courbon behavior by sending fake alerts to anticipate the bugs we can meet by programming tasks about alerts of the Bacterio Projects.

# The description: How can I use it?

This is the backend part linked the Bacterio Project : Fac-API
In this project, we are using expressJs framework https://expressjs.com/fr/.
After cloning the project, please run `npm install` before compiling anything.

# The features: What features does it provide?

This application handle a websocket server side part which is connected to the "websocket-clients.ts" of the Fac-API, it :

- Connects to the Fac-Api by using websocket library ("ws")
- Customize the alert you want to send and send it.

If you want to run the project, you just have to run `npm run dev`. It will load the server of the project but not the websocket implemented.

# How to send an alert ?

- First of all, an alert has its own properties. Make sure to complete the corresponding object of the alert in : `./alerts/alertList.js`

- After that, you can use the command : `npm run alert <alert-name>` (`< >` are not included in the command)
  This command will run the websocket server - Try to connect to Fac-API and send the alert if it's possible.

- The `alert-name` correspond to the property `alertType` of the alert you wanna send.

After the command is used, the alert will be sent every 30 seconds. This time-interval is important because Fac-Api retrieve the alert but has to send directly to Bacterio-UI which correspond to the front-end part. Everything needs to be connect to complete the path of the alert.
