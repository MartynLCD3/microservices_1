import UserController from '../controllers/UserController';
import System from '../utilities/System';
const apiRoute = System.apiRoute();
const notification = System.getRoutes();

class API {
	async processRequest(request: any): Promise<any> {

		const { url, method }: { url: string, method: string } = request;

		switch(method) {
		case 'GET':
			if(url.includes(`${apiRoute}/get-all-users`)) {
				return await UserController.getAllUsers();
			}

			if(url.includes(`${apiRoute}/get-user`) && url.match(/&ID=/) || url.match(/%26ID=/)) {
				return await UserController.getOneUser(url);
			}

			return notification;
			break;
		case 'POST':
			if(url.includes(`${apiRoute}/create-user`)) {
				return await UserController.createUser(request);
			}

			return notification;
			break;
		case 'PUT':
			if(url.includes(`${apiRoute}/update-user`) && url.match(/&ID=/) || url.match(/%26ID=/)) {
				return await UserController.updateUser(request, url);
			}

			return notification;
			break;
		case 'DELETE':
			if(url.includes(`${apiRoute}/delete-user`) && url.match(/%26ID=/) || url.match(/%26ID=/)) {
				return await UserController.deleteUser(url);
			}
		
			if(url.includes(`${apiRoute}/delete-all`)) {
				return await UserController.deleteAll();
			}

			return notification;
			break;
		default:
			return notification;
			break;
		}	
	}
}

export default new API;
