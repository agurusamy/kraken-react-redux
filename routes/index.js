
export default function (router) {
	router.get('/*', function (req, res) {
		return res.render(req.url);
	});
}
