import React from 'react';
import './FruitInventory.css'; // Import your CSS file for styling

const fruits = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150,
  },
];

const FruitInventory = () => {
  // 1. Buah apa saja yang dimiliki Andi? (fruitName)
  const andiFruits = fruits.map((fruit) => fruit.fruitName);

  // 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
  const fruitTypeMap = new Map();
  fruits.forEach((fruit) => {
    const { fruitType, fruitName } = fruit;
    if (!fruitTypeMap.has(fruitType)) {
      fruitTypeMap.set(fruitType, [fruitName]);
    } else {
      const existingFruits = fruitTypeMap.get(fruitType);
      fruitTypeMap.set(fruitType, [...existingFruits, fruitName]);
    }
  });

  // 3. Berapa total stock buah yang ada di masing-masing wadah?
  const fruitStockMap = new Map();
  fruits.forEach((fruit) => {
    const { fruitType, stock } = fruit;
    if (!fruitStockMap.has(fruitType)) {
      fruitStockMap.set(fruitType, stock);
    } else {
      const existingStock = fruitStockMap.get(fruitType);
      fruitStockMap.set(fruitType, existingStock + stock);
    }
  });

  return (
    <div className="fruit-inventory">
      <h2>Andi's Fruit Inventory</h2>
      {/* 1. Buah apa saja yang dimiliki Andi? */}
      <div className="section">
        <h3>1. Buah yang dimiliki Andi:</h3>
        <ul>
          {andiFruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
      {/* 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah */}
      <div className="section">
        <h3>2. Wadah berdasarkan tipe buah:</h3>
        <ul>
          {[...fruitTypeMap.keys()].map((type) => (
            <li key={type}>
              <strong>{type}:</strong> {fruitTypeMap.get(type).join(', ')}
            </li>
          ))}
        </ul>
        <p>Jumlah wadah: {fruitTypeMap.size}</p>
      </div>
      {/* 3. Berapa total stock buah yang ada di masing-masing wadah? */}
      <div className="section">
        <h3>3. Total stock buah di masing-masing wadah:</h3>
        <ul>
          {[...fruitStockMap.keys()].map((type) => (
            <li key={type}>
              <strong>{type}:</strong> {fruitStockMap.get(type)}
            </li>
          ))}
        </ul>
      </div>
      {/* Apakah ada komentar terkait kasus di atas? */}
      <div className="section">
        <h3>3. Total stock buah di masing-masing wadah:</h3>
        <li>
          Nama buah sebaiknya diubah agar data lebih konsisten, misalnya "apel"
          menjadi "Apel" dan "KURMA" menjadi "Kurma".
        </li>
        <li>
          Terdapat duplikasi pada fruitId 5, sehingga perlu diperbaiki agar data
          lebih akurat.
        </li>
        <li>
          Data dapat diorganisir dengan lebih baik, misalnya menggunakan objek
          atau array terpisah untuk setiap tipe buah atau menggunakan map untuk
          mengelompokkan buah berdasarkan tipe.
        </li>
      </div>
    </div>
  );
};

export default FruitInventory;
