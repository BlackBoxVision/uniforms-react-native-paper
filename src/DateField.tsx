import React from 'react';
import { FieldProps, connectField } from 'uniforms';

/* istanbul ignore next */
// const DateConstructor = (typeof global === 'object' ? global : window).Date;
// const dateFormat = (value?: Date) => value && value.toISOString().slice(0, -8);
// const dateParse = (timestamp: number, onChange: DateFieldProps['onChange']) => {
//   const date = new DateConstructor(timestamp);
//   if (date.getFullYear() < 10000) {
//     onChange(date);
//   } else if (isNaN(timestamp)) {
//     onChange(undefined);
//   }
// };

export type DateFieldProps = FieldProps<any, any>;

function Date(props: DateFieldProps) {
  // const theme = useTheme();
  // const themeProps = theme.props?.MuiTextField;

  // return (
  //   <TextField
  //     disabled={disabled}
  //     error={!!error}
  //     fullWidth={themeProps?.fullWidth ?? true}
  //     helperText={(error && showInlineError && errorMessage) || helperText}
  //     label={label}
  //     InputLabelProps={{ shrink: true, ...labelProps, ...InputLabelProps }}
  //     inputProps={{ readOnly, ...(themeProps?.inputProps ?? {}) }}
  //     margin={themeProps?.margin ?? 'dense'}
  //     name={name}
  //     onChange={(event) =>
  //       // FIXME: `valueAsNumber` is not available in `EventTarget`.
  //       disabled || dateParse((event.target as any).valueAsNumber, onChange)
  //     }
  //     placeholder={placeholder}
  //     ref={inputRef}
  //     type="datetime-local"
  //     value={dateFormat(value) ?? ''}
  //     {...filterDOMProps(props)}
  //   />
  // );

  return null;
}

export default connectField<DateFieldProps>(Date, {
  kind: 'leaf',
});
