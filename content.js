console.log("✅ Content script injected successfully!");

window.addEventListener("load", () => {
  const searchBox = document.querySelector('div[contenteditable="true"][data-tab="3"]');
  const chatTitle = document.querySelector('header span[title]');
  const messageInput = document.querySelector('div[contenteditable="true"][data-tab="10"]');
  const sendButton = document.querySelector('span[data-icon="send"]');

  console.log("Search Input Field:", searchBox);
  console.log("Chat Name Area:", chatTitle);
  console.log("Message Input Box:", messageInput);
  console.log("Send Button:", sendButton);

  if (searchBox && chatTitle && messageInput && sendButton) {
    console.log("✅ All key elements located successfully!");
  } else {
    console.log("⚠️ Some elements are missing. Double-check selectors.teri maa ka");
  }
});
