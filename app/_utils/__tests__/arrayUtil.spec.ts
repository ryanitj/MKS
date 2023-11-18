// importe a função que você deseja testar

import { ArrayUtil } from "../arrayUtil";
import { arrayUtilMock } from './MOCK';

describe('removeItemByKey function', () => {
  test('should remove item correctly', () => {
    const newArray = ArrayUtil.removeItemByKey(arrayUtilMock, { id: 2, nome: 'Item 2' }, 'id');

    expect(newArray).toHaveLength(2);
    expect(newArray).not.toContainEqual({ id: 2, nome: 'Item 2' });
  });

  test('should return equal length if item not found', () => {
    const newArray = ArrayUtil.removeItemByKey(arrayUtilMock, { id: 4, nome: 'Item 4' }, 'id');

    expect(newArray).toEqual(newArray);
  });
});
