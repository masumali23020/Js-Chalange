

document.addEventListener('DOMContentLoaded', function() {
  const addItemBtn = document.getElementById('addItemBtn');
  const itemsTableBody = document.querySelector('#itemsTable tbody');
  const totalAmountElement = document.getElementById('totalAmount');
  const generateInvoiceBtn = document.getElementById('generateInvoiceBtn');
  const downloadInvoiceBtn = document.getElementById('downloadInvoiceBtn');
  const invoicePreview = document.getElementById('invoicePreview');
  const invoiceContent = invoicePreview.querySelector('.invoice-content');

  let items = [];
 
  

  // Add item to table
  addItemBtn.addEventListener('click', function() {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td> ${items.length + 1}</td>
      <td><input type="text" class="item-description" placeholder="Item Description"></td>
      <td><input type="text" class="item-rate" value="1800"></td>
      <td><input type="number" class="item-prevWork" value="0" min="0"></td>
      <td><input type="number" class="item-courenWork" value="0" min="0"></td>
      <td><input type="number" class="item-price" value="0.00" min="0"></td>
      <td><span class="item-total">0.00</span></td>
      <td><button class="remove-item-btn">Remove</button></td>
    `;
    itemsTableBody.appendChild(row);

    // Remove item from table
    row.querySelector('.remove-item-btn').addEventListener('click', function() {
      row.remove();
      calculateTotal();
    });

    // Add event listeners for quantity and price input fields
    row.querySelector('.item-quantity').addEventListener('input', calculateTotal);
    row.querySelector('.item-price').addEventListener('input', calculateTotal);
    row.querySelector('.item-description').addEventListener('input', calculateTotal);
  });

  // Calculate the total amount for the invoice
  function calculateTotal() {
    items = [];
    let total = 0;

    document.querySelectorAll('#itemsTable tbody tr').forEach(row => {
      const description = row.querySelector('.item-description').value;
      const itemRate = row.querySelector('.item-rate').value;
      const itemPrevWork = row.querySelector('.item-prevWork').value;
      const itemCourentWork = row.querySelector('.item-courenWork').value;
      const quantity = parseFloat(row.querySelector('.item-quantity').value) || 0;
      const price = parseFloat(row.querySelector('.item-price').value) || 0;
      const itemTotal = quantity * price;
      row.querySelector('.item-total').textContent = itemTotal.toFixed(2);
      total += itemTotal;
    });

    totalAmountElement.textContent = total.toFixed(2);
  }

  // Generate the invoice preview
  generateInvoiceBtn.addEventListener('click', function() {
    const customerName = document.getElementById('customerName').value;
    const invoiceDate = document.getElementById('invoiceDate').value;
    const invoiceNumber = document.getElementById('invoiceNumber').value;

    let itemsHtml = '';
    document.querySelectorAll('#itemsTable tbody tr').forEach(row => {
      const description = row.querySelector('.item-description').value;
      const quantity = row.querySelector('.item-quantity').value;
      const price = row.querySelector('.item-price').value;
      const total = row.querySelector('.item-total').textContent;
      itemsHtml += `
        <tr>
          <td>${description}</td>
          <td>${quantity}</td>
          <td>${price}</td>
          <td>${total}</td>
        </tr>
      `;
    });

    invoiceContent.innerHTML = `
      <h3>Invoice #${invoiceNumber}</h3>
      <p><strong>Customer Name:</strong> ${customerName}</p>
      <p><strong>Date:</strong> ${invoiceDate}</p>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>
      <h3>Total: $${totalAmountElement.textContent}</h3>
    `;

    invoicePreview.style.display = 'block';
  });

  // Download invoice as a PDF (simplified version)
  downloadInvoiceBtn.addEventListener('click', function() {
    const pdfContent = invoiceContent.innerHTML;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    console.log("download");
    
    doc.html(pdfContent, {
      callback: function (doc) {
        doc.save('invoice.pdf');
      }
    });
  });
});
