import home from '../public/components/Home';

export default function (router) {
	router.get(['/*'], function (req, res) {
		console.log("req.url: ", req.url);
		// react engine has a bug so we need this conditional check
		if (req.url === '/favicon.ico') {
			return res.sendStatus(204);
		}
		return res.render(req.url);
	});
}
