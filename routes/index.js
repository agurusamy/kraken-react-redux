export default function (router) {
	router.get(['/*'], function (req, res) {
		console.log("req.url: ", req.url);
		// react engine has a bug so we need this conditional check
		if (req.url === '/favicon.ico' || req.url.includes(".css") || req.url.includes(".js")) {
			return res.sendStatus(204);
		}
		return res.render(req.url);
	});
}
