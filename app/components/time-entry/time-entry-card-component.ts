import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject } from "@ember/service";

import type StoreService from '@ember-data/store'
import type TimeEntryModel from "frontend-onboarding-template/models/time-entry";

interface TimeTrackerCardComponentArgs {
    setIsLoading: (value: boolean) => void;
}

export default class TimeEntryCardComponent extends Component<TimeTrackerCardComponentArgs> {
    @inject('store') declare store: StoreService;

    @action
    async deleteEntry(e: MouseEvent) {
        const target = e.target as HTMLElement;

        this.args.setIsLoading(true);
        
        try {
            const timeEntry:TimeEntryModel =  await this.store.findRecord('time-entry', target.id, { reload: true });

            timeEntry.destroyRecord() 
        } catch (e) {
            alert('Something went wrong...')
        } finally {
            this.args.setIsLoading(false);
        }
    }
}