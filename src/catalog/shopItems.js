import { makeAutoObservable } from "mobx";

export class Items {
  constructor() {
    this._items = [
      {id: 1, name: "S2-3 Автоматический мини", price: "34 990$", info: {weight: 13, engine: 180, diameter: {from: 1.5, to: 25}}},
      {id: 2, name: "S2-3 Автоматический мини", price: "30 999$", info: {weight: 25, engine: 200, diameter: {from: 1.5, to: 25}}},
      {id: 3, name: "S2-2 Автоматический мини", price: "29 999$", info: {weight: 5, engine: 100, diameter: {from: 1.5, to: 25}}},
      {id: 2, name: "S2-1 Автоматический мини", price: "22 999$", info: {weight: 5, engine: 100, diameter: {from: 1.5, to: 25}}},
      {id: 1, name: "S2-4 Автоматический мини", price: "20 999$", info: {weight: 5, engine: 100, diameter: {from: 1.5, to: 25}}},
      {id: 3, name: "S2-5 Автоматический мини", price: "10 999$", info: {weight: 5, engine: 100, diameter: {from: 1.5, to: 25}}},
      {id: 2, name: "S2-5 Автоматический мини", price: "10 999$", info: {weight: 5, engine: 100, diameter: {from: 1.5, to: 25}}},
      {id: 1, name: "S2-5 Автоматический мини", price: "10 999$", info: {weight: 5, engine: 100, diameter: {from: 1.5, to: 25}}},
      {id: 3, name: "S2-5 Автоматический мини", price: "10 999$", info: {weight: 5, engine: 100, diameter: {from: 1.5, to: 25}}},
    ]
    makeAutoObservable(this);
  }

  setItems(items) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  get count() {
    return this._items.length;
  }

}