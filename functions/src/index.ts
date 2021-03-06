import * as functions from "firebase-functions";
import {IncomingWebhook} from "@slack/webhook";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const sendOpinionToSlack = functions.database
    .ref("/opinions/{opinionId}")
    .onCreate(async (snapshot, context) => {
      const url = functions.config().slack.webhookurl;
      const webhook = new IncomingWebhook(url);
      const original = snapshot.val();
      functions.logger.log("Uppercasing", context.params.opinionId, original);
      functions.logger.log("Post URL", url);

      let sendText = "";

      sendText += `お名前: ${original.userName}\n `;
      sendText += `メールアドレス: ${original.email}\n `;
      sendText += `電話番号: ${original.phoneNumber}\n `;
      sendText += `ご意見:\n\n${original.opinion}\n`;

      functions.logger.log("Send text", sendText);

      await webhook.send({
        text: sendText,
      });
    });

export const sendContactToSlack = functions.database
    .ref("/contacts/{contactId}")
    .onCreate(async (snapshot, context) => {
      const url = functions.config().slack.webhookurl;
      const webhook = new IncomingWebhook(url);
      const original = snapshot.val();
      functions.logger.log("Uppercasing", context.params.contactId, original);
      functions.logger.log("Contact URL", url);

      let sendText = "";

      sendText += `お名前: ${original.userName}\n `;
      sendText += `メールアドレス: ${original.email}\n `;
      sendText += `電話番号: ${original.phoneNumber}\n `;
      sendText += `問い合わせ内容:\n\n${original.content}\n`;

      functions.logger.log("Send text", sendText);

      await webhook.send({
        text: sendText,
      });
    });
