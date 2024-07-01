class Grocery {
    name: string;
    quantity: number;
    category: string;

    constructor(name: string, quantity: number, category: string) {
        this.name = name;
        this.quantity = quantity;
        this.category = category;
    }
}

const groceries: Grocery[] = [
    new Grocery("Milk", 3, "Dairy"),
    new Grocery("Bread", 6, "Bakery"),
    new Grocery("Eggs", 11, "Poultry")
];

function displayGroceries(groceries: Grocery[]): string {
    let htmlOutput = "<ul>";

    groceries.forEach(grocery => {
        htmlOutput += `<li>${grocery.name} - Quantity: ${grocery.quantity} (Category: ${grocery.category})</li>`;
    });

    htmlOutput += "</ul>";
    return htmlOutput;
}

document.getElementById('grocery-list')!.innerHTML = displayGroceries(groceries);

