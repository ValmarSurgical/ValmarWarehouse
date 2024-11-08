# Warehouse Tasks - Update Tracking

A simple web-based application for managing and updating tracking data of warehouse orders. The app allows users to upload a CSV file, process the data, and download the updated file.

## Features

- **CSV File Upload**: Select a CSV file containing tracking data.
- **Process Data**: Process the uploaded file, update the relevant fields, and display the data in a table format.
- **Download Processed File**: After processing, download the updated CSV as an Excel file.
- **Refresh Functionality**: Clear data and refresh the page for new file uploads.

## How to Use

1. **Choose File**: Click on the "Choose File" button and select a CSV file containing your warehouse order data.
2. **Process File**: After the file is selected, click on the "Process File" button to process the data.
3. **Download Processed File**: Once the processing is complete, the "Download Processed File" button will appear. Click it to download the updated data as an Excel file.
4. **Refresh**: Click the "Refresh" button to reset the app and allow you to upload a new file.

## Files Structure

- `index.html`: Front page for the application, listing warehouse tasks.
- `UpdateTracking.html`: Page where the CSV file is processed and data is displayed.
- `AllFiles.css`: Main stylesheet for styling the web application.
- `script.js`: Contains the JavaScript code for handling file uploads, processing data, and displaying results.

## Requirements

- A modern web browser (Chrome, Firefox, Safari, Edge).
- No server-side dependencies; this is a static site that works directly in the browser.

## Installation

1. Download or clone the repository to your local machine.
2. Open the `index.html` or `UpdateTracking.html` in any web browser to run the app.
3. Alternatively, you can deploy the app to a hosting platform such as **Netlify**, **Vercel**, or **GitHub Pages**.

## Deployment

To deploy your project to a hosting platform:

1. **Netlify**: Upload your files directly to Netlify using their drag-and-drop feature or connect your GitHub repository to automatically deploy.
2. **Vercel**: Link your GitHub repository to Vercel and it will automatically build and deploy the project.
3. **GitHub Pages**: Commit and push your files to a GitHub repository, then enable GitHub Pages to serve your static files.

## Technologies Used

- **HTML**: For creating the structure of the web pages.
- **CSS**: For styling the web application (custom styles in `AllFiles.css`).
- **JavaScript**: For handling file uploads, processing CSV data, and rendering dynamic content.
- **XLSX.js**: A library used to export processed data as an Excel file.

## Contributions

Feel free to fork this project and submit pull requests if you have any improvements or fixes! Contributions are welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

If you have any questions or need help, feel free to reach out!
