$("#btn-mresolved").click(function(){
    console.log("Mantis Résolue");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {mode: "SelectedMantisResolved", value: $("#slct-mantistype").val()}, function(response) {});
	});   
})

$("#btn-refresh").click(function(){
    console.log("Refreshing . . .");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {mode: "SelectedRefresh"}, function(response) {});
	});   
})