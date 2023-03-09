import PartManagerBase from '../partManagerBase';

class SpecificToSecPartManager extends PartManagerBase {

  uptoDay(data) {
    const day = this.styler.renderDays(data.days);
    const hour = this.styler.renderHours(data.hours);
    const min = this.styler.renderMins(data.min);
    const sec = this.styler.renderSecs(data.sec);
    return [day, hour, min, sec];
  }

  uptoHour(data) {
    const hour = this.styler.renderHours(data.hours);
    const min = this.styler.renderMins(data.min);
    const sec = this.styler.renderSecs(data.sec);
    return [hour, min, sec];
  }

  uptoMin(data) {
    const min = this.styler.renderMins(data.min);
    const sec = this.styler.renderSecs(data.sec);
    return [min, sec];
  }

  uptoSec(data) {
    const sec = this.styler.renderSecs(data.sec);
    return [sec];
  }
}

export default SpecificToSecPartManager;
