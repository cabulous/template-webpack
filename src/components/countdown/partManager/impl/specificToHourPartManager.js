import PartManagerBase from '../partManagerBase';

class SpecificToHourPartManager extends PartManagerBase {

  uptoDay(data) {
    const day = this.styler.renderDays(data.days);
    const hour = this.styler.renderHours(data.hours);
    return [day, hour];
  }

  uptoHour(data) {
    const hour = this.styler.renderHours(data.hours);
    return [hour];
  }

  // eslint-disable-next-line no-unused-vars
  uptoMin(data) {
    const hour = this.styler.renderHours(1);
    return [hour];
  }

  // eslint-disable-next-line no-unused-vars
  uptoSec(data) {
    const hour = this.styler.renderHours(1);
    return [hour];
  }
}

export default SpecificToHourPartManager;
