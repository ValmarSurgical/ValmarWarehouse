function processFile() {
    const fileInput = document.getElementById('fileInput').files[0];
    if (!fileInput) {
        alert("Please upload a file.");
        return;
    }

    Papa.parse(fileInput, {
        complete: function(results) {
            let data = results.data;
            data = processTrackingData(data); // Process data here
            downloadCSV(data);
        },
        header: false
    });
}

function processTrackingData(data) {
    // Example: Modify data to uppercase column E and prefix column A
    data.forEach((row, index) => {
        if (index > 0) {
            row[0] = row[0].slice(0, 7); // Similar to Left function
            row[4] = row[4].toUpperCase(); // Convert to uppercase
        }
    });
    return data;
}

function downloadCSV(data) {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "UpdatedTracking.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
