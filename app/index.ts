import HttpServer from './config/HttpServer';
(async (): Promise<any> => {
	await HttpServer.run();
})();
