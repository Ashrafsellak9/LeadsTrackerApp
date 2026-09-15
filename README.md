# Leads Tracker

A Chrome extension for saving and managing lead URLs from a popup. Saved links are stored in [Firebase Realtime Database](https://firebase.google.com/docs/database) so they persist across sessions.

## Features

- Save a URL from the popup input
- Open saved leads in a new tab
- Clear all leads with a double-click on **DELETE ALL**

## Install

1. Clone the repository:

   ```bash
   git clone https://github.com/Ashrafsellak9/ChromeExtension.git
   cd ChromeExtension
   ```

2. Create a `.env` file in the project root and add your Firebase Realtime Database URL:

   ```
   DATABASE_URL=https://YOUR-PROJECT-ID.firebaseio.com
   ```

3. Open Chrome and go to `chrome://extensions`.
4. Turn on **Developer mode**.
5. Click **Load unpacked** and select this project folder.

The extension icon appears in the toolbar. Click it to open the popup.

## Usage

1. Click the extension icon.
2. Paste a URL into the input field.
3. Click **SAVE INPUT** to add it to the list.
4. Click a saved link to open it in a new tab.
5. Double-click **DELETE ALL** to remove every saved lead.

## Project structure

```
ChromeExtension/
├── manifest.json   # Chrome Manifest V3 config
├── index.html      # Popup UI
├── index.css       # Popup styles
├── index.js        # Save / render / Firebase logic
└── icon16.png      # Toolbar icon
```

## Requirements

- Google Chrome (or another Chromium browser)
- A Firebase project with Realtime Database enabled
- Database rules that allow the extension to read and write the `leads` path

## License

MIT. See [LICENSE](LICENSE).
