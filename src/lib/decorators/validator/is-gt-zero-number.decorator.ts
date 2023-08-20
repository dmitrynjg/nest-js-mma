import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export function IsGtZeroNumber(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isGtZeroNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsGtZeroNumberConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'isGtZeroNumber' })
export class IsGtZeroNumberConstraint implements ValidatorConstraintInterface {
  validate(value: number) {
    return value
      ? new RegExp(/^[1-9][0-9]*(\.\d+)?$/).test(`${value}`) &&
          typeof +value === 'number'
      : false;
  }

  defaultMessage() {
    return `The number must be greater than 0`;
  }
}
