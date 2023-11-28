import { enableMocking } from './mocks';
import App from './app';
import './reset.css';

enableMocking()
  .then(() => App());
