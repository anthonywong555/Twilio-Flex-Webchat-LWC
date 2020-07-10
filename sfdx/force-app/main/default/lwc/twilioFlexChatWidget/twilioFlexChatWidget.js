import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadScript } from 'lightning/platformResourceLoader';
import TwilioFlexWebchat from '@salesforce/resourceUrl/TwilioFlexWebchat';

export default class TwilioFlexChatWidget extends LightningElement {

  twilioFlexChatWidgetInitialized = false;

  renderedCallback = async () => {
    if (this.twilioFlexChatWidgetInitialized) {
        return;
    } else {
      try {
        this.twilioFlexChatWidgetInitialized = true;
        await loadScript(this, TwilioFlexWebchat + '/twilio-flex-webchat.min.js');
        this.initializeTwilioFlexWebchat();
      } catch (e) {
        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Error loading Twilio Flex Widget',
            message: e,
            variant: 'error'
          })
        );
      }
    }
  }

  initializeTwilioFlexWebchat() {
    console.log(`%c hit`, 'color: red; background-color: black');
    console.log(`Twilio.FlexWebChat ${Twilio.FlexWebChat}`);
  }
}