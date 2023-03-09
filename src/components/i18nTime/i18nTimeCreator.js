import ArabicTime from './impl/arabicTime';
import BulgarianTime from './impl/bulgarianTime';
import ChineseSimplifiedTime from './impl/chineseSimplifiedTime';
import ChineseTraditionalTime from './impl/chineseTraditionalTime';
import CroatianTime from './impl/croatianTime';
import CzechTime from './impl/czechTime';
import DanishTime from './impl/danishTime';
import DutchTime from './impl/dutchTime';
import EnglishAbbreviatedTime from './impl/englishAbbreviatedTime';
import EnglishTime from './impl/englishTime';
import EstonianTime from './impl/estonianTime';
import FinnishTime from './impl/finnishTime';
import FrenchTime from './impl/frenchTime';
import GermanTime from './impl/germanTime';
import GreekTime from './impl/greekTime';
import HebrewTime from './impl/hebrewTime';
import HindiTime from './impl/hindiTime';
import IcelandicTime from './impl/icelandicTime';
import IndonesianTime from './impl/indonesianTime';
import ItalianTime from './impl/italianTime';
import JapaneseTime from './impl/japaneseTime';
import KoreanTime from './impl/koreanTime';
import LatvianTime from './impl/latvianTime';
import LithuanianTime from './impl/lithuanianTime';
import MalayTime from './impl/malayTime';
import NorwegianTime from './impl/norwegianTime';
import PersianTime from './impl/persianTime';
import PolishTime from './impl/polishTime';
import PortugueseTime from './impl/portugueseTime';
import RomanianTime from './impl/romanianTime';
import RussianTime from './impl/russianTime';
import SerbianTime from './impl/serbianTime';
import SlovakTime from './impl/slovakTime';
import SlovenianTime from './impl/slovenianTime';
import SpanishTime from './impl/spanishTime';
import SwedishTime from './impl/swedishTime';
import ThaiTime from './impl/thaiTime';
import TurkishTime from './impl/turkishTime';
import UkrainianTime from './impl/ukrainianTime';
import VietnameseTime from './impl/vietnameseTime';

class I18nTimeCreator {

  /**
   * @param {string} language
   * @param {I18nTimeOptionsTypes} options
   * @return {I18nTimeBase}
   */
  static create(language, options = {}) {
    switch (language) {
      case 'arabic':
        return new ArabicTime();
      case 'bulgarian':
        return new BulgarianTime();
      case 'chinese_simplified':
        return new ChineseSimplifiedTime();
      case 'chinese_traditional':
        return new ChineseTraditionalTime();
      case 'croatian':
        return new CroatianTime();
      case 'czech':
        return new CzechTime();
      case 'danish':
        return new DanishTime();
      case 'dutch':
        return new DutchTime();
      case 'englishAbbreviated':
        return new EnglishAbbreviatedTime(options);
      case 'english':
        return new EnglishTime(options);
      case 'estonian':
        return new EstonianTime();
      case 'finnish':
        return new FinnishTime();
      case 'french':
        return new FrenchTime();
      case 'german':
        return new GermanTime();
      case 'greek':
        return new GreekTime();
      case 'hebrew':
        return new HebrewTime();
      case 'hindi':
        return new HindiTime();
      case 'icelandic':
        return new IcelandicTime();
      case 'indonesian':
        return new IndonesianTime();
      case 'italian':
        return new ItalianTime();
      case 'japanese':
        return new JapaneseTime(options);
      case 'korean':
        return new KoreanTime();
      case 'latvian':
        return new LatvianTime();
      case 'lithuanian':
        return new LithuanianTime();
      case 'malay':
        return new MalayTime();
      case 'norwegian':
        return new NorwegianTime();
      case 'persian':
        return new PersianTime();
      case 'polish':
        return new PolishTime();
      case 'portuguese':
        return new PortugueseTime();
      case 'romanian':
        return new RomanianTime();
      case 'russian':
        return new RussianTime();
      case 'serbian':
        return new SerbianTime();
      case 'slovak':
        return new SlovakTime();
      case 'slovenian':
        return new SlovenianTime();
      case 'spanish':
        return new SpanishTime();
      case 'swedish':
        return new SwedishTime();
      case 'thai':
        return new ThaiTime();
      case 'turkish':
        return new TurkishTime();
      case 'ukrainian':
        return new UkrainianTime();
      case 'vietnamese':
        return new VietnameseTime();
      default:
        return new EnglishTime();
    }
  }
}

export default I18nTimeCreator;
