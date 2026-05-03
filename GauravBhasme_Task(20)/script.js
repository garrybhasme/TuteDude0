const backupData = [
  {
    service: "Dry Cleaning",
    price: 200,
    action: `<a class="btn add-btn" id="add-btn-0" >Add Item <img src="./images/circle.png" alt=""></a>`,
  },
  {
    service: "Wash & Fold",
    price: 100,
    action: `<a class="btn add-btn" id="add-btn-1" >Add Item <img src="./images/circle.png" alt=""></a>`,
  },
  {
    service: "Ironing",
    price: 30,
    action: `<a class="btn add-btn" id="add-btn-2" >Add Item <img src="./images/circle.png" alt=""></a>`,
  },
  {
    service: "Stain Removal",
    price: 500,
    action: `<a class="btn add-btn" id="add-btn-3" >Add Item <img src="./images/circle.png" alt=""></a>`,
  },
  {
    service: "Leathehr & Suede Cleaning",
    price: 999,
    action: `<a class="btn add-btn" id="add-btn-4" >Add Item <img src="./images/circle.png" alt=""></a>`,
  },
  {
    service: "Wedding Dress Cleaning",
    price: 2800,
    action: `<a class="btn add-btn" id="add-btn-5" >Add Item <img src="./images/circle.png" alt=""></a>`,
  },
];
let data = [
  {
    service: "Dry Cleaning",
    price: 200,
    action: `<a class="btn add-btn" id="add-btn-0" >Add Item <img src="./images/circle.png" alt=""></a>`,
  },
  {
    service: "Wash & Fold",
    price: 100,
    action: `<a class="btn add-btn" id="add-btn-1" >Add Item <img src="./images/circle.png" alt=""></a>`,
  },
  {
    service: "Ironing",
    price: 30,
    action: `<a class="btn add-btn" id="add-btn-2" >Add Item <img src="./images/circle.png" alt=""></a>`,
  },
  {
    service: "Stain Removal",
    price: 500,
    action: `<a class="btn add-btn" id="add-btn-3" >Add Item <img src="./images/circle.png" alt=""></a>`,
  },
  {
    service: "Leathehr & Suede Cleaning",
    price: 999,
    action: `<a class="btn add-btn" id="add-btn-4" >Add Item <img src="./images/circle.png" alt=""></a>`,
  },
  {
    service: "Wedding Dress Cleaning",
    price: 2800,
    action: `<a class="btn add-btn" id="add-btn-5" >Add Item <img src="./images/circle.png" alt=""></a>`,
  },
];
const addedItemsList = [];
const tbody = document.getElementById("tbody");
let srNo = 0;
let totalAmount = 0;
showServices();
function addItemBill(item) {
  srNo++;
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${srNo}</td><td>${item.service}</td><td>₹${item.price}</td>`;
  const tobody = document.getElementById("billtbody");
  tobody.appendChild(tr);
  if (addedItemsList.length === 0) {
    document.querySelector("#noItemsAdded").style.display = "block";
  } else {
    document.querySelector("#noItemsAdded").style.display = "none";
  }
}

function showServices() {
  tbody.innerHTML = "";
  data.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${item.service}</td><td>₹${item.price}</td><td>${item.action}</td>`;
    tbody.appendChild(tr);
  });
}

function warningMessage() {
  const message = document.getElementById("bookNowMsg");
  if (addedItemsList.length === 0) {
    message.className = "warningText";
    message.innerHTML = `<span class="info-icon warning">i</span>Add the items to the cart and book now`;
  } else {
    message.innerHTML = "";
  }
}

function clearAddedItems() {
  addedItemsList.length = 0;
  totalAmount = 0;
  srNo = 0;
  document.querySelector("#noItemsAdded").style.display = "flex";
  document.getElementById("amount").innerText = `₹${totalAmount}`;
  data = backupData;
}

tbody.addEventListener("click", (e) => {
  const actionLink = e.target.closest("a.btn");
  if (!actionLink || !tbody.contains(actionLink)) {
    return;
  }

  e.preventDefault();
  const parts = actionLink.id.split("-");
  const actionType = parts[0];
  const itemIndex = parseInt(parts.pop(), 10);
  const selectedItem = data[itemIndex];
  if (!selectedItem) {
    return;
  }

  if (actionType === "add") {
    addedItemsList.push(selectedItem);
    addItemBill(selectedItem);
    selectedItem.action = `<a class="btn remove-btn" id="remove-btn-${itemIndex}">Remove Item <img src="./images/round.png" alt=""></a>`;
    totalAmount += selectedItem.price;
    document.getElementById("amount").innerText = `₹${totalAmount}`;
    showServices();
  } else if (actionType === "remove") {
    selectedItem.action = `<a class="btn add-btn" id="add-btn-${itemIndex}">Add Item <img src="./images/circle.png" alt=""></a>`;
    totalAmount -= selectedItem.price;
    if (totalAmount < 0) totalAmount = 0;
    document.getElementById("amount").innerText = `₹${totalAmount}`;
    srNo = 0;
    const billBody = document.getElementById("billtbody");
    billBody.innerHTML = "";
    addedItemsList.splice(
      addedItemsList.findIndex(
        (item) =>
          item.service === selectedItem.service &&
          item.price === selectedItem.price,
      ),
      1,
    );
    addedItemsList.forEach((item) => addItemBill(item));
    showServices();
    if (addedItemsList.length === 0) {
      document.querySelector("#noItemsAdded").style.display = "flex";
    } else {
      document.querySelector("#noItemsAdded").style.display = "none";
    }
  }
  warningMessage();
});

document.querySelector(".bookNowSection").addEventListener("click", (e) => {
  warningMessage();
});

const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", (e) => {
  if (!bookingForm.checkValidity()) {
    e.preventDefault();
    bookingForm.reportValidity();
    warningMessage();
    return;
  }

  e.preventDefault();
  if (addedItemsList.length === 0) {
    warningMessage();
    return;
  }

  const message = document.getElementById("bookNowMsg");
  message.className = "successText";
  message.innerHTML = `<span class="info-icon success">i</span>Email sent successfully, we will get back to you soon!`;
  document.getElementById("billtbody").innerHTML = "";
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phoneNumber").value = "";
  clearAddedItems();
  showServices();
});
