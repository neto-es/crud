const cars = [
    {
        id: 1,
        brand: 'Chevrolet',
        model: 'Aveo',
        color: 'Rojo',
        year: '2020',
        price: '20'
    },
    {
        id: 2,
        brand: 'Ford',
        model: 'Fiesta',
        color: 'Azul',
        year: '2018',
        price: '30'
    },
    {
        id: 3,
        brand: 'Volkswagen',
        model: 'Vento',
        color: 'Blanco',
        year: '2019',
        price: '10'
    },
    {
        id: 4,
        brand: 'Nissan',
        model: 'Versa',
        color: 'Naranja',
        year: '2017',
        price: '40'
    },
    {
        id: 5,
        brand: 'KIA',
        model: 'Rio Sedan',
        color: 'Negro',
        year: '2016',
        price: '50'
    }
];


let editingCar = false;

function printCars() {

    const tableBody = document.getElementById('cars-table-body')
    tableBody.innerHTML = ''
    cars.forEach((car) => {
        const td = `<tr>
                        <td title="Marca">
                            ${car.brand}
                        </td>
                        <td title="Modelo">
                            ${car.model}
                        </td>
                        <td>
                            ${car.color}
                        </td>
                        <td>
                            ${car.year}
                        </td>
                        <td>
                            $${car.price}
                        </td>
                        <td>
                            <button class="btn btn-danger fas fa-trash-alt" onclick="removeCar(${car.id})">
                                Delete
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-warning fas fa-edit" onclick="editCarButton(${car.id})">
                                Edit
                            </button>                            
                        </td>
                    </tr>`
        tableBody.innerHTML += td;
    })
}
function sendAndClean() {
    limpiarFormulario();
    return true;
  }

function submitCar() {
    console.log(editingCar)
    if(editingCar) {
        editCar();
    } else {
        addCar();
    }
}

function editCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    editingCar.brand = brand
    editingCar.model = model
    editingCar.color = color
    editingCar.year = year
    editingCar.price = price
    printCars();
    editingCar = false;
    document.getElementById('cars-table-body').value = ''
}

function editCarButton(id) {
    const car = cars.find((car) => car.id === id);
    document.getElementById('brand').value = car.brand;
    document.getElementById('model').value = car.model;
    document.getElementById('color').value = car.color;
    document.getElementById('year').value = car.year;
    document.getElementById('price').value = car.price;    
    editingCar = car;
}

function removeCar(id) {

    const position = cars.findIndex((car) => car.id === id);
    cars.splice(position, 1);
    printCars();
}

function addCar() {
    let newCar = {
        brand: $("#brand").val(),
        model: $("#model").val(),
        color: $("#color").val(),
        year: $("#year").val(),
        price: $("#price").val(),
        id: cars.length + 1

    }

    cars.push(newCar);
    printCars()
}

printCars();