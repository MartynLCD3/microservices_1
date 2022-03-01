import { UserModel } from '../models/UserModel';
import DataConfiguration from '../utilities/DataConfiguration';

class UserController {

	async getAllUsers(): Promise<any> {
		const users = await UserModel.findAll();
		return users.length > 0 ? { code: 200, notification: users } : { code: 404, notification: [] };	
	}

	async getOneUser(url: string): Promise<any> {
		const userID = url.match(/ID=(.*)/)![1];
		const user = await UserModel.findOne({
			where: { id: userID }
		});
		return user !== null ? { code: 200, notification: user } : { code: 404, notification: {} };
	}

	async createUser(request: any): Promise<any> {
		const { email, name, age } = await DataConfiguration.captureInformation(request);
		if(typeof email === 'undefined' || typeof name === 'undefined' || typeof name === 'undefined') return { code: 404, notification: {} };
		const user = await UserModel.create({ email, name, age });
		return { code: 201, notification: user };
	} 
	
	async updateUser(request: any, url: string): Promise<any> {
		const { email, name, age } = await DataConfiguration.captureInformation(request);
		if(typeof email === 'undefined' || typeof name === 'undefined' || typeof name === 'undefined') return { code: 200, notification: 'error' };
		const userID = url.match(/ID=(.*)/)![1];
		const user = await UserModel.update({ email ,name, age }, { where: { id: userID }});
		return user[0] !== 0 ? { code: 200, notification: { status: 'OK' }} : { code: 404, notification: {} };
	}

	async deleteUser(url: string): Promise<any> {
		const userID = url.match(/ID=(.*)/)![1];
		const completedProcess = await UserModel.destroy({ where: { id: userID }});
		return completedProcess !== 0 ? { code: 200, notification: { status: 'OK' }} : { code: 404, notification: {} };
	}

	async deleteAll(): Promise<any> {
		await UserModel.destroy({ where: {}, truncate: true });
		return { code: 200, notification: { status: 'OK'}};
	}
}

export default new UserController;
