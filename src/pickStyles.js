import { pick, weightedKey } from '@thi.ng/random-fxhash';
import { styleClasses } from './letterstyle';

export function pickStylesR(letters) {
  const pickedStyle = {};
  for (let letter of letters) {
    const s = pick(styleClasses);
    pickedStyle[letter] = s;
  }
  return pickedStyle;
}

export function pickStyles1R(letters) {
  const pickedStyle = {};
  const mode = weightedKey({
    mono: 5,
    random: 95,
  });
  console.log(mode);
  if (mode === 'mono') {
    const s = pick(styleClasses);
    for (let letter of letters) {
      pickedStyle[letter] = s;
    }
  }
  else {
    let valid = false;
    while (!valid) {
      const pickedName = {};
      for (let letter of letters) {
        const s = pick(styleClasses);
        pickedStyle[letter] = s;
        pickedName[`${s.name} by ${s.author}`] = 1;
      }
      if (Object.keys(pickedName).length > 1) {
        valid = true;
      }
    }
  }
  return pickedStyle;
}
