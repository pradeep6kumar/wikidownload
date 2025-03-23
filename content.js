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
  
  // Clean up the URL object
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 100);
  
  return true;
}

// Function to create download button
function createDownloadButton() {
  const button = document.createElement('div');
  button.className = 'wiki-table-download-btn';
  button.title = 'Download as CSV';
  return button;
}

// Function to show notification
function showNotification(message, type = 'success') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `wiki-table-notification ${type}`;
  notification.textContent = message;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Remove after delay
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 500);
  }, 3000);
}

// Function to add download buttons to all tables
function addDownloadButtonsToTables() {
  // Create styles for notifications
  const style = document.createElement('style');
  style.textContent = `
    .wiki-table-notification {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 12px 20px;
      background-color: rgba(76, 175, 80, 0.9);
      color: white;
      border-radius: 4px;
      z-index: 10000;
      font-size: 14px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      transform: translateY(100px);
      opacity: 0;
      transition: transform 0.3s, opacity 0.3s;
    }
    .wiki-table-notification.show {
      transform: translateY(0);
      opacity: 1;
    }
    .wiki-table-notification.error {
      background-color: rgba(244, 67, 54, 0.9);
    }
  `;
  document.head.appendChild(style);

  // Get all tables with class 'wikitable'
  const tables = document.querySelectorAll('table.wikitable');
  
  // If no tables found, don't do anything
  if (tables.length === 0) {
    return;
  }
  
  // Process each table
  tables.forEach((table, index) => {
    // Create a container for the table and button
    const container = document.createElement('div');
    container.className = 'wiki-table-container';
    
    // Get the page title for the filename
    const pageTitle = document.title.replace(' - Wikipedia', '').replace(/[^a-z0-9]/gi, '_');
    
    // Create download button
    const downloadBtn = createDownloadButton();
    
    // Add click event to download button
    downloadBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      
      // Add loading state
      downloadBtn.classList.add('loading');
      
      try {
        // Convert and download
        const csv = tableToCSV(table);
        const filename = `${pageTitle}_table_${index + 1}.csv`;
        const success = downloadCSV(csv, filename);
        
        if (success) {
          showNotification(`Table "${filename}" downloaded successfully`);
        }
      } catch (error) {
        console.error('Error downloading table:', error);
        showNotification('Error downloading table. Please try again.', 'error');
      } finally {
        // Remove loading state
        setTimeout(() => {
          downloadBtn.classList.remove('loading');
        }, 500);
      }
    });
    
    // Insert the button before the table
    table.parentNode.insertBefore(container, table);
    container.appendChild(downloadBtn);
    container.appendChild(table);
  });
}

// Run when the page is loaded
window.addEventListener('load', addDownloadButtonsToTables); 