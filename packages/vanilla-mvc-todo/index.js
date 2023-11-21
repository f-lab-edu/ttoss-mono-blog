import Model from './src/model';
import View from './src/view';
import Template from './src/template';
import Controller from './src/controller';

const controller = new Controller(new Model(), new View(Template));
const windowEventHandler = () => controller.setView(window.location.hash);

window.addEventListener('DOMContentLoaded', windowEventHandler);
window.addEventListener('hashchange', windowEventHandler);
