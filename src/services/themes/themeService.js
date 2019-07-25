import axios from 'axios';

export function switchTheme(theme) {
  axios.get('http://api.njak.fr/getTheme', { params: { theme: theme} }).then(res => {
    const css = res.data,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  })
}