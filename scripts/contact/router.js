/**
 * Created by doyen on 2015/9/6.
 */
define(['base/lorinRouter'], function (lorinRouter) {
	return lorinRouter.extend({
		routes: {
			"contact": "contact"
		},
		contact: function () {
			this.switchWindow('contact');
		}
	});
})
