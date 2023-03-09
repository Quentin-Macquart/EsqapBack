import { WebSocketServer } from "ws";
import alertsList from "./alerts/alertsList.js";

const wssPort = 3020;
const nextAlertTimer = 30000;
const { argv } = process;

// Create the ws server
const server = new WebSocketServer({ port: wssPort });

/**
 * Looking for the alert you want to send to Fac-Api
 * And send the alert throught websocket
 *
 * @param {string} alertStr represent the alert added in the bash command
 * @param {WebSocketServer} ws the websocket connexion
 */
const sendingAlert = (alertStr, ws) => {
  const alertInfo = alertsList.find((alert) => alert.alertType === alertStr);
  if (!alertInfo) {
    throw new Error(
      "This alert is not implented in this project, please use the command 'npm run alert <AlertName>'"
    );
  }
  const toSend = JSON.stringify({
    label: alertInfo.alertType,
    args: alertInfo,
  });
  ws.send(toSend);
  console.log(`${alertInfo.alertType} is sent to Fac-API for an update !`);
  console.log(`Next alert will be sent in ${nextAlertTimer / 1000}secs`);
};

/**
 * Starting the WS server
 * Create potential connexions and apply logs in terms of the events
 * Send a first alert and then send it every 30secs
 */
const start = () => {
  if (!server) {
    throw new Error("Server is not available");
  } else {
    server.on("connection", (ws, req) => {
      console.log(`Websocket server is connected`);

      sendingAlert(argv[2], ws);

      setInterval(() => {
        sendingAlert(argv[2], ws);
      }, nextAlertTimer);

      ws.on("close", () => {
        console.log(`Connexion's closed`);
      });
    });
  }
  return server;
};

start();
