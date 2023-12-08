import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.услуги.caption'),
          title: i18n.t('forms.application.sitemap.услуги.title'),
          children: [{
            link: 'i-i-s-zapasnojj-parkomat2-услуга-l',
            caption: i18n.t('forms.application.sitemap.услуги.i-i-s-zapasnojj-parkomat2-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.услуги.i-i-s-zapasnojj-parkomat2-услуга-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.паркомат.caption'),
          title: i18n.t('forms.application.sitemap.паркомат.title'),
          children: [{
            link: 'i-i-s-zapasnojj-parkomat2-терминал-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-zapasnojj-parkomat2-терминал-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-zapasnojj-parkomat2-терминал-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-zapasnojj-parkomat2-парк-место-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-zapasnojj-parkomat2-парк-место-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-zapasnojj-parkomat2-парк-место-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-zapasnojj-parkomat2-паркомат-l',
            caption: i18n.t('forms.application.sitemap.паркомат.i-i-s-zapasnojj-parkomat2-паркомат-l.caption'),
            title: i18n.t('forms.application.sitemap.паркомат.i-i-s-zapasnojj-parkomat2-паркомат-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.водитель.caption'),
          title: i18n.t('forms.application.sitemap.водитель.title'),
          children: [{
            link: 'i-i-s-zapasnojj-parkomat2-водитель-l',
            caption: i18n.t('forms.application.sitemap.водитель.i-i-s-zapasnojj-parkomat2-водитель-l.caption'),
            title: i18n.t('forms.application.sitemap.водитель.i-i-s-zapasnojj-parkomat2-водитель-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-zapasnojj-parkomat2-автомобиль-l',
            caption: i18n.t('forms.application.sitemap.водитель.i-i-s-zapasnojj-parkomat2-автомобиль-l.caption'),
            title: i18n.t('forms.application.sitemap.водитель.i-i-s-zapasnojj-parkomat2-автомобиль-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})