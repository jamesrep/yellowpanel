import { uiModules } from 'ui/modules';
import uiRoutes from 'ui/routes';
import { notify } from 'ui/notify';

import 'ui/autoload/modules';
import 'ui/autoload/styles';
import template from './templates/index.html';
import { yellowpanelApiUiPluginController } from './yellowpanel_controller';

uiRoutes.enable();
uiRoutes
.when('/', {
  template: template,
  controller: 'yellowpanelApiUiPluginController as controller'
});

uiModules
.get('app/yellowpanel-api-ui-plugin', [])
.controller('yellowpanelApiUiPluginController', yellowpanelApiUiPluginController);
