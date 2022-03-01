class System {
	apiRoute(): string {
		return '/api/microservices/v1';
	}	

	getRoutes(): any {
		return { code: 200, notification: { 
			options: {
				1: 'GET ▸ /api/microservices/v1/get-all-users',
				2: 'GET ▸ /api/microservices/v1/get-user&ID={ID}',
				3: 'POST ▸ /api/microservices/v1/create-user',
				4: 'UPDATE ▸ /api/microservices/v1/update-user&ID={ID}',
				5: 'DELETE ▸ /api/microservices/v1/delete-user&ID={ID}',
				6: 'DELETE ▸ /api/microservices/v1/delete-all'
			}}
		};
	}
}

export default new System;
