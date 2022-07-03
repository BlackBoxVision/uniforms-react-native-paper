import React from 'react';
import { View } from 'react-native';
import {
  BaseFormProps,
  BaseFormState,
  context as UniformsContext,
  BaseForm as UniformsCoreBaseForm,
} from 'uniforms';

export class BaseForm<
  Model,
  Props extends BaseFormProps<Model> = BaseFormProps<Model>,
  State extends BaseFormState<Model> = BaseFormState<Model>
> extends UniformsCoreBaseForm<Model, Props, State> {
  render() {
    return (
      <UniformsContext.Provider value={this.getContext()}>
        <View {...this.getNativeFormProps()} />
      </UniformsContext.Provider>
    );
  }
}

function ReactNativePaper(parent: any) {
  class _ extends parent {
    static ReactNativePaper = ReactNativePaper;

    static displayName = `ReactNativePaper${parent.displayName}`;
  }

  return (_ as unknown) as typeof BaseForm;
}

export default ReactNativePaper(BaseForm);
