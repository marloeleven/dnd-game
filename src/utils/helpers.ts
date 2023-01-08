import config from 'const/config';
import { colors } from 'const';

export const getRandom = {
  height: (maxHeight: number) => {
    const letterSize = config.container.width;
    const y = Math.floor(Math.random() * maxHeight);
    if (y + letterSize >= maxHeight) {
      return y - letterSize;
    }

    return y;
  },
  width: (maxWidth: number) => {
    const letterSize = config.container.width;
    const x = Math.floor(Math.random() * maxWidth);

    if (x + letterSize >= maxWidth) {
      return x - letterSize;
    }

    return x;
  },
  fromTwoValues: (a: any, b: any) =>
    Math.floor(Math.random() * 333) % 2 ? a : b,
  color: () => {
    const index = Math.floor(Math.random() * colors.length);

    return colors[index];
  },
  fromArray: (array: any[]) => {
    const index = Math.floor(Math.random() * array.length);

    return array[index];
  },
  numberString: (min: number, max: number): string => {
    const numberStr = String(Math.max(min, Math.floor(Math.random() * max)));

    const arrayStr = numberStr.split('');

    if (hasArrayDuplicate(arrayStr)) {
      return getRandom.numberString(min, max);
    }

    return numberStr;
  },
};

export const getVerticalAddOs = () => {
  if (navigator.userAgent.includes('Windows')) {
    return 0;
  }

  if (navigator.userAgent.includes('Android')) {
    return 0;
  }

  return 5;
};

export const getArrayDuplicate = (array: any[]) =>
  array.filter((item, index) => array.indexOf(item) !== index);

export const hasArrayDuplicate = (array: any[]) =>
  Boolean(getArrayDuplicate(array).length);
