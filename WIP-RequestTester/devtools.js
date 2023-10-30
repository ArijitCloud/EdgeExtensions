import attachEventsToPanel from './panel.js';
chrome.devtools.panels.create("Network Request Tester", "icon.png", "panel.html", panel => {
  // code invoked on panel creation
  panel.onShown.addListener((extPanelWindow) => {      
    attachEventsToPanel(extPanelWindow.document);
  });
});