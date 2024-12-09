import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TimeTrackerComponent extends Component {
  @tracked selectedDate = "";
  @tracked time = "";
  @tracked note = "";

  setSelectedDate = (e:Event) =>{
    const target = e.target as HTMLInputElement;
    const currentValue = target.value;
    // const [year, month, day] = currentValue.split("-"); 
    // const formattedDate = `${day}-${month}-${year}`;

    this.selectedDate = currentValue;
  }

  setTime = (e:Event) =>{
    const target = e.target as HTMLInputElement;
    const currentValue = target.value;

    this.time = currentValue;
  }

  setNote = (e:Event) => {
    const target = e.target as HTMLInputElement;
    const currentValue = target.value;

    this.note = currentValue;
  }

}
