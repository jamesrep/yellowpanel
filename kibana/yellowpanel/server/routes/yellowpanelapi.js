
export default function (server, options) 
{
	const https = 		require('http');
	const strESHost = 	`${options.esHost}` ;
	const esPort = 		`${options.esPort}` ;
	
	function getURL(strHost, strPath, port, strMethod)
	{
		return new Promise((resolve, strURL) => 
		{
			try
			{
				https.get({host:strHost,path:strPath,port:port,method:strMethod}, (resp) => 
				{
					  let data = '';

					  // A chunk of data is received.
					  resp.on('data', (chunk) => 
					  {
						data += chunk;
					  });

					  // The whole response is done.
					  resp.on('end', () => 
					  {
						  console.log(data);

						  resolve( data);

					  });

				}).on("error", function (httperror)
				{
					console.log("GET request error");
					resolve( "GET request error " + httperror);
				});		
			
			}
			catch(err)
			{
				console.log(err.message);
			}			
		});
	}
	

  server.route(
  {
    path: '/api/yellowpanel/gettasks',
    method: 'GET',
    async handler(req, reply) 
    {
		try
		{
			var strData = await getURL(strESHost, '_tasks', esPort, 'GET');
			
			return strData;
		}
		catch(err)
		{
			console.log(err.message);
			return err.message;
		}
    }
  }
  
  );
  
  
  server.route(
  {
    path: '/api/yellowpanel/stoptask/{name}',
    method: 'GET',
    async handler(req, reply) 
    {
		try
		{		
			console.log(req.params.name);
			
			var strData = await getURL(strESHost, '_tasks/' + req.params.name + '/_cancel', esPort, 'POST');
			
			return strData;
		
		}
		catch(err)
		{
			console.log(err.message);
			return err.message;
		}	
    }
  }
  
  ); 
  
  server.route(
  {
    path: '/api/yellowpanel/stopalltasks',
    method: 'GET',
    async handler(req, reply) 
    {
		try
		{
			var strData = await getURL(strESHost, '_tasks/_cancel', esPort, 'POST');
			
			return strData;
		}
		catch(err)
		{
			console.log(err.message);
			return err.message;
		}	
    }
  }
  
  );   
  


}
