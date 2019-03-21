import { uiModules } from 'ui/modules';
import uiRoutes from 'ui/routes';
import { notify } from 'ui/notify';

import 'ui/autoload/modules';
import 'ui/autoload/styles';
import template from './templates/index.html';

uiRoutes.enable();
uiRoutes
.when('/', {
  template: template
});

uiModules
.get('app/yellowpanel-api-ui-plugin', []);
