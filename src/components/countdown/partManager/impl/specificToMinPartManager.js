import PartManagerBase from '../partManagerBase';

class SpecificToMinPartManager extends PartManagerBase {

  uptoDay(data) {
    const day = this.styler.renderDays(data.days);
    const hour = this.styler.renderHours(data.hours);
    const min = this.styler.renderMins(data.min);
    return [day, hour, min];
  }

  uptoHour(data) {
    const hour = this.styler.renderHours(data.hours);
    const min = this.styler.renderMins(data.min);
    return [hour, min];
  }

  uptoMin(data) {
    const min = this.styler.renderMins(data.min);
    return [min];
  }

  // eslint-disable-next-line no-unused-vars
  uptoSec(data) {
    const min = this.styler.renderMins(1);
    return [min];
  }
}

export default SpecificToMinPartManager;
