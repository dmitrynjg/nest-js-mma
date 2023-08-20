import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export function IsGtZeroAndInt(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isGtZeroAndInt',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsGtZeroAndIntConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'isGtZeroAndInt' })
export class IsGtZeroAndIntConstraint implements ValidatorConstraintInterface {
  validate(value: number) {
    return value
      ? new RegExp(/^[1-9][0-9]*$/).test(`${value}`) &&
          typeof +value === 'number'
      : false;
  }

  defaultMessage() {
    return `You passed a non-integer greater than 0`;
  }
}
