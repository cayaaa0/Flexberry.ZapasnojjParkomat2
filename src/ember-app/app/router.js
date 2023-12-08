import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-zapasnojj-parkomat2-автомобиль-l');
  this.route('i-i-s-zapasnojj-parkomat2-автомобиль-e',
  { path: 'i-i-s-zapasnojj-parkomat2-автомобиль-e/:id' });
  this.route('i-i-s-zapasnojj-parkomat2-автомобиль-e.new',
  { path: 'i-i-s-zapasnojj-parkomat2-автомобиль-e/new' });
  this.route('i-i-s-zapasnojj-parkomat2-водитель-l');
  this.route('i-i-s-zapasnojj-parkomat2-водитель-e',
  { path: 'i-i-s-zapasnojj-parkomat2-водитель-e/:id' });
  this.route('i-i-s-zapasnojj-parkomat2-водитель-e.new',
  { path: 'i-i-s-zapasnojj-parkomat2-водитель-e/new' });
  this.route('i-i-s-zapasnojj-parkomat2-парк-место-l');
  this.route('i-i-s-zapasnojj-parkomat2-парк-место-e',
  { path: 'i-i-s-zapasnojj-parkomat2-парк-место-e/:id' });
  this.route('i-i-s-zapasnojj-parkomat2-парк-место-e.new',
  { path: 'i-i-s-zapasnojj-parkomat2-парк-место-e/new' });
  this.route('i-i-s-zapasnojj-parkomat2-паркомат-l');
  this.route('i-i-s-zapasnojj-parkomat2-паркомат-e',
  { path: 'i-i-s-zapasnojj-parkomat2-паркомат-e/:id' });
  this.route('i-i-s-zapasnojj-parkomat2-паркомат-e.new',
  { path: 'i-i-s-zapasnojj-parkomat2-паркомат-e/new' });
  this.route('i-i-s-zapasnojj-parkomat2-терминал-l');
  this.route('i-i-s-zapasnojj-parkomat2-терминал-e',
  { path: 'i-i-s-zapasnojj-parkomat2-терминал-e/:id' });
  this.route('i-i-s-zapasnojj-parkomat2-терминал-e.new',
  { path: 'i-i-s-zapasnojj-parkomat2-терминал-e/new' });
  this.route('i-i-s-zapasnojj-parkomat2-услуга-l');
  this.route('i-i-s-zapasnojj-parkomat2-услуга-e',
  { path: 'i-i-s-zapasnojj-parkomat2-услуга-e/:id' });
  this.route('i-i-s-zapasnojj-parkomat2-услуга-e.new',
  { path: 'i-i-s-zapasnojj-parkomat2-услуга-e/new' });
});

export default Router;
