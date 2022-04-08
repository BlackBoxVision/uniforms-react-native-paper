import { BaseForm } from 'uniforms';

function ReactNativePaper(parent: any) {
  class _ extends parent {
    static ReactNativePaper = ReactNativePaper;

    static displayName = `ReactNativePaper${parent.displayName}`;
  }

  return _ as unknown as typeof BaseForm;
}

export default ReactNativePaper(BaseForm);
