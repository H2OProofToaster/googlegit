function onOpen() {
  DocumentApp.getUi()
    .createMenu("Version Control")
    .addItem("Open Sidebar", "openSidebar")
    .addToUi();
}

function openSidebar() {
  const html = HtmlService.createHtmlOutputFromFile("sidebar")
    .setTitle("Version Control");
  DocumentApp.getUi().showSidebar(html);
}
