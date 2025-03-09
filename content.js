/**
 * Wiki Table Downloader
 * Adds a download button to each table on Wikipedia pages
 */

// Function to convert table to CSV
function tableToCSV(table) {
  const rows = table.querySelectorAll('tr');
  const csvRows = [];
  
  // Process each row
  for (const row of rows) {
    const cells = row.querySelectorAll('th, td');
    const csvCells = [];
    
    // Process each cell
    for (const cell of cells) {
      // Get the text content and clean it
      let text = cell.textContent.trim();
      // Replace double quotes with two double quotes (CSV escape)
      text = text.replace(/"/g, '""');
      // Wrap with quotes to handle commas and newlines
      csvCells.push(`"${text}"`);
    }
    
    // Join cells with commas and add to rows
    csvRows.push(csvCells.join(','));
  }
  
  // Join rows with newlines
  return csvRows.join('\n');
}

// Function to download CSV
function downloadCSV(csv, filename) {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.display = 'none';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Function to create download button
function createDownloadButton() {
  const button = document.createElement('div');
  button.className = 'wiki-table-download-btn';
  button.title = 'Download as CSV';
  return button;
}

// Function to add download buttons to all tables
function addDownloadButtonsToTables() {
  // Get all tables with class 'wikitable'
  const tables = document.querySelectorAll('table.wikitable');
  
  // Process each table
  tables.forEach((table, index) => {
    // Create a container for the table and button
    const container = document.createElement('div');
    container.className = 'wiki-table-container';
    
    // Clone the table to avoid modifying the original
    const tableClone = table.cloneNode(true);
    
    // Get the page title for the filename
    const pageTitle = document.title.replace(' - Wikipedia', '').replace(/[^a-z0-9]/gi, '_');
    
    // Create download button
    const downloadBtn = createDownloadButton();
    
    // Add click event to download button
    downloadBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const csv = tableToCSV(table);
      downloadCSV(csv, `${pageTitle}_table_${index + 1}.csv`);
    });
    
    // Insert the button before the table
    table.parentNode.insertBefore(container, table);
    container.appendChild(downloadBtn);
    container.appendChild(table);
  });
}

// Run when the page is loaded
window.addEventListener('load', addDownloadButtonsToTables); 