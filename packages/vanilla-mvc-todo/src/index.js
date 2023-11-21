import Model from './model';
import View from './view';
import Template from './template';
import Controller from './controller';

const controller = new Controller(new Model(), new View(Template));
const windowEventHandler = () => controller.setView(window.location.hash);

window.addEventListener('DOMContentLoaded', windowEventHandler);
window.addEventListener('hashchange', windowEventHandler);
