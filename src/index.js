// @flow
/* eslint-disable no-unused-vars */

import React from 'react';
import {
  Form,
  Input as InputComponent,
  Radio as RadioComponent,
  Checkbox as CheckboxComponent,
  Select as SelectComponent,
  TextArea as TextAreaComponent,
  Dropdown as DropdownComponent,
  Label
} from 'semantic-ui-react';

type InputProps = {
  checked?: boolean,
  name: string,
  onBlur: { (eventOrValue: Event | any): void },
  onChange: { (eventOrValue: Event | any): void },
  onDrop: { (event: Event): void },
  onDragStart: { (event: Event): void },
  onFocus: { (event: Event): void },
  value: any
};

type FieldProps = {
  input: InputProps,
  meta: {
    error?: any,
    touched: boolean
  },
  required?: boolean,
  label?: string,
  defaultChecked?: boolean
};

export const InputField = ({
  input,
  label,
  required,
  meta: { touched, error },
  ...rest
}: FieldProps) => (
  <Form.Field error={!!(touched && error)} required={required}>
    {label && <label>{label}</label>}
    <InputComponent required={required} {...input} {...rest} />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

export const Input = ({ input, required, meta: { touched, error }, ...rest }: FieldProps) => (
  <InputComponent required={required} {...input} {...rest} />
);

export const TextAreaField = ({
  input,
  label,
  required,
  meta: { touched, error },
  ...rest
}: FieldProps) => (
  <Form.Field error={!!(touched && error)} required={required}>
    {label && <label>{label}</label>}
    <TextAreaComponent required={required} {...input} {...rest} />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

export const TextArea = ({ input, required, meta: { touched, error }, ...rest }: FieldProps) => (
  <TextAreaComponent required={required} {...input} {...rest} />
);

type OptionsFieldProps = FieldProps & {
  options: {
    text: string,
    value: string
  }[]
};

export const SelectField = ({
  input,
  label,
  required,
  options,
  meta: { touched, error },
  ...custom
}: OptionsFieldProps) => (
  <Form.Field error={!!(touched && error)} required={required}>
    {label && <label>{label}</label>}
    <SelectComponent
      search
      value={input.value}
      required={required}
      options={options}
      onChange={(event, data) => input.onChange(data.value)}
      {...custom}
    />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

export const Select = ({
  input,
  required,
  options,
  meta: { touched, error },
  ...rest
}: OptionsFieldProps) => (
  <SelectComponent
    search
    value={input.value}
    required={required}
    options={options}
    onChange={(event, data) => input.onChange(data.value)}
    {...rest}
  />
);

export const ToggleField = ({ input, label, defaultChecked }: FieldProps) => (
  <Form.Field
    control={RadioComponent}
    toggle
    label={label}
    checked={!!input.value}
    defaultChecked={defaultChecked}
    onClick={(event, data) => input.onChange(data.checked)}
  />
);

export const Toggle = ({ input, label, defaultChecked }: FieldProps) => (
  <RadioComponent
    toggle
    label={label}
    checked={!!input.value}
    defaultChecked={defaultChecked}
    onClick={(event, data) => input.onChange(data.checked)}
  />
);

export const Radio = ({ input, label, meta: { touched, error }, ...custom }: FieldProps) => (
  <RadioComponent
    label={label}
    checked={!!input.value}
    onClick={(event, data) => input.onChange(data.checked)}
    {...custom}
  />
);

export const RadioField = ({ input, label, meta: { touched, error }, ...custom }: FieldProps) => (
  <Form.Field
    control={RadioComponent}
    label={label}
    checked={!!input.value}
    onClick={(event, data) => input.onChange(data.checked)}
    {...custom}
  />
);

export const Checkbox = ({ input, label, meta: { touched, error }, ...custom }: FieldProps) => (
  <CheckboxComponent
    label={label}
    checked={!!input.value}
    onClick={(event, data) => input.onChange(data.checked)}
    {...custom}
  />
);

export const CheckboxField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}: FieldProps) => (
  <Form.Field
    control={CheckboxComponent}
    label={label}
    checked={!!input.value}
    onClick={(event, data) => input.onChange(data.checked)}
    {...custom}
  />
);

type RangeFieldProps = FieldProps & {
  min: number,
  max: number
};

export const RangeField = ({
  input,
  label,
  min,
  max,
  required,
  meta: { touched, error },
  ...rest
}: RangeFieldProps) => (
  <Form.Field error={!!(touched && error)} required={required}>
    <label>
      {label} : {input.value}
    </label>
    <input type="range" required={required} min={min} max={max} {...input} {...rest} />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

export const Range = ({
  input,
  min,
  max,
  required,
  meta: { touched, error },
  ...rest
}: RangeFieldProps) => (
  <input type="range" required={required} min={min} max={max} {...input} {...rest} />
);

export const DropdownField = ({
  input,
  label,
  required,
  options,
  meta: { touched, error },
  ...custom
}: OptionsFieldProps) => (
  <Form.Field error={!!(touched && error)} required={required}>
    {label && <label>{label}</label>}
    <DropdownComponent
      search
      value={input.value}
      required={required}
      options={options}
      onChange={(event, data) => input.onChange(data.value)}
      {...custom}
    />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

export const Dropdown = ({
  input,
  required,
  options,
  meta: { touched, error },
  ...rest
}: OptionsFieldProps) => (
  <DropdownComponent
    search
    value={input.value}
    required={required}
    options={options}
    onChange={(event, data) => input.onChange(data.value)}
    {...rest}
  />
);

export const UploadField = ({
  label,
  input,
  required,
  meta: { touched, error },
  ...rest
}: FieldProps) => (
  <Form.Field error={touched && error} required={required}>
    {label && <label>{label}</label>}
    <InputComponent
      type="file"
      value={input.value === '' && input.value}
      onChange={e => input.onChange(e.target.files[0])}
      {...rest}
    />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

export const Upload = ({ input, required, meta: { touched, error }, ...rest }: FieldProps) => (
  <InputComponent
    required={required}
    type="file"
    value={input.value === '' && input.value}
    onChange={e => input.onChange(e.target.files[0])}
    {...rest}
  />
);
