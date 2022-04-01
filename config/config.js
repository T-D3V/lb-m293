import {landing} from '../pages/landing.js'
import {login} from '../pages/login.js'
import {overview} from '../pages/overview.js'
import {detail} from '../pages/detail.js'
import {changeview} from '../pages/changeview.js'
import {error404} from '../pages/errors.js'

//Files need to be in assets css or js

export const config = {
  'global': {
    'css': ['base','sanitize'],
    'js': []
  },
  'routes': [
    {
      'title': 'Home',
      'path': '/',
      'body': `${landing}`,
      'css': [],
      'js': [],
      'permissions': 0
    },
    {
      'title': 'Login',
      'path': '/login',
      'body': `${login}`,
      'css': ['login'],
      'js': [],
      'permissions': 0
    },
    {
      'title': 'Overview',
      'path': '/overview',
      'body': `${overview}`,
      'css': ['overview'],
      'js': [],
      'permissions': 1
    },
    {
      'title': 'Detail',
      'path': '/detail',
      'body': `${detail}`,
      'css': ['detail'],
      'js': [],
      'permissions': 1
    },
    {
      'title': 'Change View',
      'path': '/changeview',
      'body': `${changeview}`,
      'css': ['changeview'],
      'js': [],
      'permissions': 1
    },
    {
      'title': 'Not Found',
      'path': '/404',
      'body': `${error404}`,
      'css': ['error'],
      'js': [],
      'permissions': 0
    }
  ]
}