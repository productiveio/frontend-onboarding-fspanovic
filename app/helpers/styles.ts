import {helper} from '@ember/component/helper';

export function styles(
  [context, ...classNames]: [
    { styles: { [className: string]: string } },
    ...string[],
  ],
  named?: Record<string, unknown>
) {
  if (typeof context?.styles === 'undefined') {
    console.error(
      'Import and assign your styles to your component class or controller class'
    );

    return '';
  }

  let namedString = '';

  if (named) {
    namedString = Object.keys(named)
      .filter((name) => Boolean(named[name]))
      .map((name) => {
        if (context?.styles && context?.styles[name]) {
          return context.styles[name];
        }

        console.error(`The class or id named '${name}' does not exist`);

        return '';
      })
      .join(' ');
  }

  const positionalString = classNames
    .map((name) => {
      if (context?.styles && context?.styles[name]) {
        return context.styles[name];
      }

      console.error(`The class or id named '${name}' does not exist`);

      return '';
    })
    .join(' ');

  return `${positionalString} ${namedString}`;
}

const stylesHelper = helper(styles);

export default stylesHelper;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    styles: typeof stylesHelper;
  }
}
