import {header, footer} from '../modules/header_footer.js'
import {landing} from '../modules/landing.js'
import {login} from '../modules/login.js'
import {overview} from '../modules/overview.js'
import {detail} from '../modules/detail.js'
import {changeview} from '../modules/changeview.js'
import {error404} from '../modules/errors.js'
import {loading } from '../modules/loading.js'
import { imprint } from '../modules/imprint.js'

//Files need to be in assets css or js

export const config = {
  'global': {
    'css': ['base','sanitize'],
    'js': []
  },
  'loading': {
    'body': `${loading}`,
    'css': ['loading']
  },
  'routes': [
    {
      'title': 'Home',
      'path': '/',
      'body': `${header}${landing}${footer}`,
      'css': ['landing'],
      'js': [{
        src: 'base',
        type: 'application/javascript',
      }],
      'permissions': 0
    },
    {
      'title': 'Login',
      'path': '/login',
      'body': `${header}${login}${footer}`,
      'css': ['login'],
      'js': [{
        src: 'login',
        type: 'application/javascript',
      }],
      'permissions': 0
    },
    {
      'title': 'Overview',
      'path': '/overview',
      'body': `${header}${overview}${footer}`,
      'css': ['overview'],
      'js': [{
        src: 'overview',
        type: 'application/javascript',
      }],
      'permissions': 1
    },
    {
      'title': 'Detail',
      'path': '/detail',
      'body': `${header}${detail}${footer}`,
      'css': ['detail'],
      'js': [],
      'permissions': 1
    },
    {
      'title': 'Change View',
      'path': '/changeview',
      'body': `${header}${changeview}${footer}`,
      'css': ['changeview'],
      'js': [],
      'permissions': 1
    },
    {
      'title': 'Not Found',
      'path': '/404',
      'body': `${header}${error404}${footer}`,
      'css': ['error'],
      'js': [],
      'permissions': 0
    },
    {
      'title': 'Imprint',
      'path': '/imprint',
      'body': `${header}${imprint}${footer}`,
      'css': ['imprint'],
      'js': [],
      'permissions': 0
    }
  ]
}