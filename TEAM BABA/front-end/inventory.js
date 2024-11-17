document.addEventListener("DOMContentLoaded", () => {
    const addItemForm = document.getElementById("addItemForm");
    const tableBody = document.querySelector("tbody");
    const searchBar = document.getElementById("searchBar");

    addItemForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const productName = document.getElementById("productName").value.trim();
        const productID = document.getElementById("productID").value.trim();
        const category = document.getElementById("category").value;
        const stock = parseInt(document.getElementById("stock").value.trim(), 10);

        const status = stock > 50 ? "Sufficient" : "Reorder Now";

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${productName}</td>
            <td>${productID}</td>
            <td>${category}</td>
            <td>${stock}</td>
            <td>${status}</td>
            <td><button class="btn btn-link">></button></td>
        `;

        tableBody.appendChild(newRow);

        addItemForm.reset();

        const modal = bootstrap.Modal.getInstance(document.getElementById("addItemModal"));
        modal.hide();
    });

    searchBar.addEventListener("input", () => {
        const searchTerm = searchBar.value.toLowerCase();
        const rows = tableBody.getElementsByTagName("tr");

        Array.from(rows).forEach((row) => {
            const cells = row.getElementsByTagName("td");
            let rowText = "";
            Array.from(cells).forEach((cell) => {
                rowText += cell.textContent.toLowerCase() + " ";
            });

            if (rowText.indexOf(searchTerm) !== -1) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});
