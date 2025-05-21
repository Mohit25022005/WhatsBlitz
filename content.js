console.log("✅ Content script injected! Waiting for WhatsApp Web UI...");

function waitForElements() {
  const searchBox = document.querySelector('div[contenteditable="true"][data-tab="3"]');
  const chatTitle = document.querySelector('header span[title]');
  const messageInput = document.querySelector('div[contenteditable="true"][data-tab="10"]');
  const sendButton = document.querySelector('span[data-icon="send"]');

  if (searchBox && chatTitle && messageInput && sendButton) {
    console.log("All elements found!");
    console.log({ searchBox, chatTitle, messageInput, sendButton });
  } else {
    console.log("Waiting for DOM to load...");
    setTimeout(waitForElements, 1000); // Retry every 1s
  }
}

waitForElements();
