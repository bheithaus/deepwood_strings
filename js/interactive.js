$(function(){
	highlightCurrentTab();
	function highlightCurrentTab() {
		var sections = document.title.split(" | "),
			activeTab;
			
		$("ul.nav li").removeClass("active");
		activeTab = sections.length > 1 ? sections[0].toLowerCase() : "home";
		$("#"+ activeTab +"Link").addClass("active");
	}	
});