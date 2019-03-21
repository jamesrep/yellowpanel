import { resolve } from 'path';
import yellowpanelroutes from './server/routes/yellowpanelapi';


export default function (kibana) 
{
  return new kibana.Plugin(
  {
    require: ['elasticsearch'],
    name: 'yellowpanel',
    uiExports: {
      app: {
        title: 'yellowpanel',
        description: 'James UI for stuff',
        main: 'plugins/yellowpanel/app'
      }
    },

  config(Joi) 
  {
      return Joi.object({
        enabled: Joi.boolean().default(true),
        esHost: Joi.string()
          .hostname()
          .default('localhost'),
        esPort: Joi.number()
          .integer()
          .default(9200)
      }).default();
    },
    
    init(server, options) 
	  {
      yellowpanelroutes(server, options);
    }

  });
};
