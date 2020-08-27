import {languageMapping} from './language';

export const translate = (currentLanguage, stringKey) => {
  // console.log('in translate string key', stringKey);
  // console.log('in translate currentLanguage', currentLanguage);
  let requiredMapping = languageMapping[currentLanguage];
  // console.log('required mapping', requiredMapping);
  let stringValue = requiredMapping[stringKey];
  return stringValue;
};
