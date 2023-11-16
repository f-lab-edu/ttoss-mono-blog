import Model from './src/model';
import View from './src/view';
import Controller from './src/controller';

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

const setView = controller.setView.call(controller, window.location.hash);

window.addEventListener('DOMContentLoaded', setView);
window.addEventListener('hashchange', setView);
