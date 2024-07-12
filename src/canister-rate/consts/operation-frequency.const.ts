import {ETypeOperations} from '../enums/type-operations.enum';

export const OperationFrequency = {
  [ETypeOperations.Create]: 1,
  [ETypeOperations.Edit]: 2,
  [ETypeOperations.Delete]: 1,
};
