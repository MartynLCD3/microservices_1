class DataConfiguration {
	captureInformation(information: any): Promise<any> {
		return new Promise(resolve => {
			let body = '';
			information.on('data', (chunk: any) => {
				body += chunk.toString();
			});
			information.on('end', async (): Promise<any> => {
				resolve(JSON.parse(body));
			});
		});
	}	
}

export default new DataConfiguration;
