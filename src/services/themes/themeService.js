import axios from 'axios';
import moment from 'moment';

export async function switchTheme(theme) {
  let res = await axios.get('/api/getTheme', { params: { id: theme} })
  console.log("recu");
  const css = res.data;
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  head.appendChild(style);
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}