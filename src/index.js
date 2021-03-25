import { createElement } from 'lwc';

//import MyApp from 'my/app';
import MyDynamicApp from 'my/dynamicApp';

const app = createElement('my-app', { is: MyDynamicApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
