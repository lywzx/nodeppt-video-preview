import { Pop } from './pop';
import './style/style.less';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const p = Pop.getInstance(document.body);
    p.init();
  },
  false
);
