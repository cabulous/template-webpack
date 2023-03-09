import { createElement } from '../../../../utils/elements';
import StylerBase from '../stylerBase';
import classnames from './classnames';

class ColonStyler extends StylerBase {

  renderDays(days) {
    const digit = this.createDigitContainer(days);
    const divider = this.createColonContainer();
    const container = this.createDayContainer();
    container.append(digit, divider);
    return container;
  }

  renderHours(hours) {
    const digit = this.createDigitContainer(hours);
    const divider = this.createColonContainer();
    const container = this.createHourContainer();
    container.append(digit, divider);
    return container;
  }

  renderMins(mins) {
    const digit = this.createDigitContainer(mins);
    const divider = this.createColonContainer();
    const container = this.createMinContainer();
    container.append(digit, divider);
    return container;
  }

  renderSecs(secs) {
    const digit = this.createDigitContainer(secs);
    const container = this.createSecContainer();
    container.append(digit);
    return container;
  }

  /**
   * @return {HTMLElement}
   */
  // eslint-disable-next-line class-methods-use-this
  createColonContainer() {
    return createElement('span', {
      class: classnames.divider,
    }, ':');
  }
}

export default ColonStyler;
