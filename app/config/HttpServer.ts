import './environment/environment';
import http from 'http';
import { db } from './Database';
import API from '../api/API';

class HttpServer {
	run(): void {
		http.createServer(async (request: any, response: any): Promise<void> => {
			db.sync();
			const { code, notification }: { code: number, notification: string } = await API.processRequest(request);
			if(code && notification) {
				response.writeHead(code, {
					'Content-type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Request-Method': '*',
					'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
					'Access-Control-Allow-Headers': '*'
				});
				response.end(JSON.stringify(notification));
			}
		}).listen(process.env.PORT);
	}
}

export default new HttpServer;
