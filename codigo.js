const tablaBody = document.querySelector('#tabla-datos tbody');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td class="address-cell">Address</td>
        <td>${item.phone}</td>
        <td>${item.website}</td>
      `;
      tablaBody.appendChild(fila);

      fila.querySelector('.address-cell').addEventListener('click', () => {
        const addressInfo = `
          Street: ${item.address.street}<br>
          Suite: ${item.address.suite}<br>
          City: ${item.address.city}<br>
          Zipcode: ${item.address.zipcode}<br>
          Latitude: ${item.address.geo.lat}<br>
          Longitude: ${item.address.geo.lng}
        `;
        const addressRow = document.createElement('tr');
        addressRow.innerHTML = `<td colspan="5">${addressInfo}</td>`;
        tablaBody.insertBefore(addressRow, fila.nextSibling);
      });
    });
  })
  .catch(err => console.error(err));