
export default function (router) {
	router.get(['/*'], function (req, res) {
		// react engine has a bug so we need this conditional check
		if (!req.url.includes('.js') && ! req.url.includes('.css')) {
			return res.render(req.url);
		}
	});
}
