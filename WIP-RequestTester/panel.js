export default function attachEventsToPanel(document) {
  document.getElementById("sendRequest").addEventListener("click", function () {
    const url = document.getElementById("urlInput").value;   

    console.log(url);
    const headers = JSON.parse(document.getElementById("headersInput").value);
    const body = document.getElementById("bodyInput").value;

    // Create and send the request using the fetch API
    // This also needs to take care of CORS problems - workaround
    fetch(url, {
      method: "POST", // Change the method as needed (GET, POST, etc.)
      headers: headers,
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        const responseDiv = document.getElementById("responseDiv");
        responseDiv.innerHTML = JSON.stringify(data, null, 2);
      })
      .catch((error) => {
        const responseDiv = document.getElementById("responseDiv");
        responseDiv.innerHTML = `Error: ${error.message}`;
      });
  });
}
