import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TimeTrackerComponent extends Component {
  @tracked selectedDate = "";

  setSelectedDate = (e:Event) =>{
    const target = e.target as HTMLInputElement;
    const currentValue = target.value;
    // const [year, month, day] = currentValue.split("-"); 
    // const formattedDate = `${day}-${month}-${year}`;
    
    this.selectedDate = currentValue;
  }


}
