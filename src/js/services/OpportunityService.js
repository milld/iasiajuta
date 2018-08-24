import { database } from '../../firebase';

const opportunities = database.ref('opportunities');

const registerOpportunityListener = (callback, errorCallback) =>  {
    opportunities
        .on('value', (snapshot) => {
            callback(snapshot.val());
        })
        .catch((error) => {
            errorCallback(error);
        });
}

const unregisterOpportunityListener = () => {
    opportunities.off();
}

export default {
    registerOpportunityListener,
    unregisterOpportunityListener
}