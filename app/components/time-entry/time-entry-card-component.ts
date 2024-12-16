import Component from "@glimmer/component";
import {action} from "@ember/object";
import {inject} from "@ember/service";

import type StoreService from '@ember-data/store'
import type TimeEntryModel from "frontend-onboarding-template/models/time-entry";

interface TimeTrackerCardComponentArgs {
    setIsLoading: (value: boolean) => void;
}

export default class TimeEntryCardComponent extends Component<TimeTrackerCardComponentArgs> {
    @inject('store') declare store: StoreService;

    @action
    async deleteEntry(timeEntry: TimeEntryModel) {
        this.args.setIsLoading(true);
        
        try {
            await timeEntry.destroyRecord();
        } catch(e) {
            alert('Something went wrong...');
        } finally {
            this.args.setIsLoading(false);
        }
    }
}