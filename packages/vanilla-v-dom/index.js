import h from './src/h';
import vDOM from './src/index';

/**
 * 예제: 실시간 시, 분, 초 업데이트
 * @function
 * @param {object} time
 * @param {string} time.hours
 * @param {string} time.minutes
 * @param {string} time.seconds
 * @returns {object}
 */
const template = ({ hours, minutes, seconds }) => (
  h(
    'div',
    {
      style: 'margin: 100px auto; width: max-content; border-radius: 22px; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; padding: 28px 48px;',
    },
    h('h1', null, 'tick tock 🚀'),
    h(
      'time',
      { style: 'font-size: 3rem;' },
      h(
        'strong',
        null,
        h('span', { class: 'time_hour' }, hours),
        h('span', { class: 'time_ico' }, ':'),
        h('span', { class: 'time_minute' }, minutes),
        h('span', { class: 'time_ico' }, ':'),
        h('span', { class: 'time_second' }, seconds),
      ),
    ),
  )
);

/**
 * @function
 * @returns {object}
 */
const getTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return {
    hours,
    minutes,
    seconds,
  };
};

/**
 *
 */
const ROOT = vDOM.createRoot(document.getElementById('root'));

setInterval(() => ROOT.render(template(getTime())), 1000);
