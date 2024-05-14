// Array of random placeholder texts
var placeholders = [
  "Adam is a ⓢⓚⓘⓓ",
  "What the 卐",
  "I Love ",
  "Hi 🅱ryce",
  "Me When Im: ☺"
];

// Function to set random placeholder text
function setRandomPlaceholder() {
  var randomIndex = Math.floor(Math.random() * placeholders.length);
  document.getElementById("urlInput").placeholder = placeholders[randomIndex];
}

// Call the function to set random placeholder text
setRandomPlaceholder();

function submitUrl() {
  var input = document.getElementById("urlInput").value;
  var url;

  if (isValidURL(input)) {
    url = addHttp(input);
  } else {
    url = "https://www.bing.com/search?q=" + input;
  }

  blank(url);
  return false; // Prevent default form submission behavior
}

// Function to check if a string is a valid URL
function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

// Function to add "https://" if not present
function addHttp(url) {
  if (!url.match(/^https?:\/\//i)) {
    url = 'https://' + url;
  }
  return url;
}

// Function to open URL in a new window
function blank(url) {
  // ... (your existing blank function code)
}
