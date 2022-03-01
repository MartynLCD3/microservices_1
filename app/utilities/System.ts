class System {
	
	apiRoute(): string {
		return '/api/microservices/v1';
	}	

	getRoutes(): any {
		return { code: 200, notification: { 
			options: {
				1: 'GET ▸ /api/microservices/v1/get-article',
				2: 'POST ▸ /api/microservices/v1/post-article',
				3: 'UPDATE ▸ /api/microservices/v1/update-article',
				4: 'DELETE ▸ /api/microservices/v1/delete-article'
			}}
		};
	}
}

export default new System;
