// json2html.js

export default function json2html(data) {
  // Check if all rows have the required columns (Name, Age, Gender)
  const requiredColumns = ["Name", "Age", "Gender"];
  
  // Start the table with the data-user attribute
  let html = `<table data-user="shivashankerreddycheruku@gmail.com">\n<thead>\n<tr>`;
  
  // Create the table header with the fixed required columns
  requiredColumns.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += `</tr>\n</thead>\n<tbody>\n`;

  // Loop through each object in the array to create the table rows
  data.forEach(row => {
    html += `<tr>`;
    
    // Ensure each row includes only the required columns: Name, Age, Gender
    requiredColumns.forEach(column => {
      html += `<td>${row[column] || ""}</td>`;  // If a value is missing, insert an empty cell
    });
    
    html += `</tr>\n`;
  });

  html += `</tbody>\n</table>`;
  return html;
}
