# Wiki Table Downloader

A Firefox extension that adds a green download button to tables on Wikipedia pages, allowing users to download specific tables as CSV files.

## Features

- Adds a green download button to each table on Wikipedia pages
- Downloads tables as CSV files
- Automatically names files based on the page title and table number
- Works on all Wikipedia domains

## Installation

### Temporary Installation (for Development)

1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" in the sidebar
3. Click "Load Temporary Add-on..."
4. Navigate to the directory containing this extension and select the `manifest.json` file

### Permanent Installation

To create a permanent installation:

1. Zip all the files in this directory
2. Submit the zip file to the [Firefox Add-ons site](https://addons.mozilla.org/developers/)
3. Once approved, users can install it directly from the Firefox Add-ons site

## Usage

1. Navigate to any Wikipedia page containing tables
2. Hover over a table to see the green download button in the top-right corner
3. Click the button to download the table as a CSV file
4. The file will be saved to your default downloads folder with a name based on the page title

## Development

### File Structure

- `manifest.json` - Extension configuration
- `content.js` - Main script that adds download buttons and handles CSV conversion
- `styles.css` - Styles for the download button
- `icons/` - Directory containing extension icons

### Adding Custom Icons

Replace the placeholder icons in the `icons` directory with your own:
- `icon-48.png` (48x48 pixels)
- `icon-96.png` (96x96 pixels)

## License

This project is open source and available under the MIT License. 