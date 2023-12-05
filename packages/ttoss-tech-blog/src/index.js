import { enableMocking } from './mocks';
import App from './app';
import './reset.css';
import './styles.css';

enableMocking()
  .then(() => App());
