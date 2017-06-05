var mode = {
    MANTIS: "SelectedMantisResolved",
    REFRESH: "SelectedRefresh"

}

function MSelectedResolved(value) {
    console.log(value);

    var elements = document.querySelectorAll('#buglist tr[bgcolor="' + value + '"] input[type="checkbox"]');
    for (var i = 0; i < elements.length; i++) {
        elements[i].checked = true;
    }

    var selector = document.querySelector('select[name="action"]');
    selector.value = "UP_STATUS";

    var submit = document.querySelector('form[name="bug_action"]');
    submit.submit();
}

function RefreshPage() {
    location.reload(true);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
        "from the extension");

    switch (request.mode) {
        case mode.MANTIS:
            MSelectedResolved(request.value);
            break;
        case mode.REFRESH:
            RefreshPage();
        default:
            break;
    }
});