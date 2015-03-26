jQuery(function($){

	//region Tabs
	if($.fn.tab){
		$('.pi-tabs-navigation a').click(function (e) {
			$(this).tab('show');
			e.preventDefault();
		});

		$('.pi-tabs-vertical').each(function(){
			var $parent = $(this),
				$nav = $parent.find('.pi-tabs-navigation'),
				$content = $parent.find('.pi-tabs-content'),
				navHeight = $nav.height();
			$content.css({
				minHeight: Math.abs(navHeight) + 1
			});
		});
	}
	//endregion

});