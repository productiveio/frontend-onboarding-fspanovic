import ApplicationAdapter from './application';

export default class TimeEntryAdapter extends ApplicationAdapter {
    pathForType() {
        return 'time_entries';
    }    
}
