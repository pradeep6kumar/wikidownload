# Wiki Table Downloader

A Firefox extension that adds an elegant green download button to tables on Wikipedia pages, allowing users to download specific tables as CSV files.

## Features

- Beautiful, unobtrusive UI with a green download button that appears when hovering over tables
- Downloads tables as CSV files with proper formatting
- Success notifications when tables are downloaded
- Automatically names files based on the page title and table number
- Works on all Wikipedia domains

## Installation

### From Firefox Add-ons Store

The easiest way to install the extension is from the Firefox Add-ons store:

1. Visit [Wiki Table Downloader on Firefox Add-ons](https://addons.mozilla.org/firefox/addon/wiki-table-downloader/) (link will be available after submission)
2. Click "Add to Firefox"
3. Follow the on-screen instructions to complete installation

### Temporary Installation (for Development)

For developers or testing:

1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" in the sidebar
3. Click "Load Temporary Add-on..."
4. Navigate to the directory containing this extension and select the `manifest.json` file

### Permanent Installation

To create a permanent installation package:

1. Zip all the files in this directory
2. Submit the zip file to the [Firefox Add-ons site](https://addons.mozilla.org/developers/)
3. Once approved, users can install it directly from the Firefox Add-ons site

## Usage

1. Navigate to any Wikipedia page containing tables
2. Hover over a table to see the green download button appear in the top-right corner
3. Click the button to download the table as a CSV file
4. A success notification will appear confirming the download
5. The file will be saved to your default downloads folder with a name based on the page title

## UI Features

- **Elegant Green Button**: Unobtrusive download button appears only when hovering over tables
- **Visual Feedback**: Download button shows loading animation during download process
- **Success Notifications**: Notification confirms successful downloads
- **Tooltips**: Hover over the button to see what it does
- **Table Highlighting**: Subtle highlight effect when hovering over tables with downloadable content

## Development

### File Structure

- `manifest.json` - Extension configuration
- `content.js` - Main script that adds download buttons and handles CSV conversion
- `styles.css` - Styles for the download button and notifications
- `icons/` - Directory containing extension icons

### Adding Custom Icons

Replace the placeholder icons in the `icons` directory with your own:
- `icon-48.png` (48x48 pixels)
- `icon-96.png` (96x96 pixels)
- `icon-128.png` (128x128 pixels)

### Firefox Add-ons Store Requirements

For successful submission to the Firefox Add-ons store:

1. Ensure all icon files are present and correctly sized
2. Complete the `author` and `homepage_url` fields in manifest.json
3. Test the extension on multiple Wikipedia pages
4. Take screenshots of the extension in action for your store listing
5. Prepare a detailed description based on this README

## License

This project is open source and available under the MIT License. 