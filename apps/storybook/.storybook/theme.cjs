import { create } from '@storybook/theming';
import logo from './kvib_logo.svg';

export default create({
  base: 'light',
  brandTitle: 'KVIB Components',
  brandUrl: 'https://kartverket.no',
  brandImage: logo,
  brandTarget: '_self',
});