import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
}

// Drinks Interface
export interface IDrinks {
  id: number,
  name: string,
  price: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Womens',
      image: '../../assets/categories/category-1.png'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Mens',
      image: '../../assets/categories/category-2.png'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Kids',
      image: '../../assets/categories/category-3.png'
    }

    categories.push(cat1, cat2, cat3);

    return categories;
  }

  getFeaturedProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Burger Steak with Drinks',
      price: 70,
      image: '../../assets/products/Burger steak with drinks.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Carbonara with Garlic Bread',
      price: 60,
      image: '../../assets/products/carbonara with garlic bread.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Creamy Bacon Carbonara Chicken',
      price: 89,
      image: '../../assets/products/Creamy Bacon Carbonara Chicken.png'
    }
    let prod4: IProduct = {
      id: 2,
      name: 'Fillet Alaking with Drink',
      price: 79,
      image: '../../assets/products/fillet alaking with drink.png'
    }
    let prod5: IProduct = {
      id: 1,
      name: 'Rice with Chicken with Drinks and Dries',
      price: 99,
      image: '../../assets/products/Rice with chicken with drinks and fries.png'
    }

    products.push(prod1, prod2, prod3, prod4, prod5);

    return products;
  }

  getBestSellProducts() {
    let desserts = [];

    let desserts1: IProduct = {
      id: 1,
      name: 'Chocopao',
      price: 29,
      image: '../../assets/products/chocopao.png'
    }
    let desserts2: IProduct = {
      id: 2,
      name: 'Cola Float',
      price: 39,
      image: '../../assets/products/Cola Float.png'
    }
    let desserts3: IProduct = {
      id: 1,
      name: 'Halo-Halo',
      price: 49,
      image: '../../assets/products/halo halo.png'
    }
    let desserts4: IProduct = {
      id: 2,
      name: 'Oreo Ice Cream',
      price: 50,
      image: '../../assets/products/oreo ice cream.png'
    }
    let desserts5: IProduct = {
      id: 1,
      name: 'Sundae',
      price: 29,
      image: '../../assets/products/sundae.png'
    }

    desserts.push(desserts1, desserts2, desserts3, desserts4, desserts5);

    return desserts;
  }
  getDrinks() {
    let drinks = [];

    let drinks1: IDrinks = {
      id: 1,
      name: 'Coke',
      price: 20,
      image: '../../assets/products/Coke.png'
    }
    let drinks2: IDrinks = {
      id: 2,
      name: 'Nestea',
      price: 20,
      image: '../../assets/products/Nestea.png'
    }
    let drinks3: IDrinks = {
      id: 1,
      name: 'Orange Juice',
      price: 20,
      image: '../../assets/products/orange juice.png'
    }
    let drinks4: IDrinks = {
      id: 2,
      name: 'Pepsi',
      price: 20,
      image: '../../assets/products/Pepsi.png'
    }
    let drinks5: IDrinks = {
      id: 1,
      name: 'Red Iced Tea',
      price: 20,
      image: '../../assets/products/Red iced tea.png'
    }

    drinks.push(drinks1, drinks2, drinks3, drinks4, drinks5);

    return drinks;
  }
}
