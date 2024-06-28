const clearContent = function() {
    let content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}

export default clearContent