# 📍 TypeScript OOP Map Project

A **TypeScript project built using Object-Oriented Programming (OOP)** principles that displays **randomly generated users and companies on a map**.  
The project uses **Faker.js** to generate realistic random data and the **Map API** to visualize locations interactively.

---

## 🚀 Features

- 🧠 **Object-Oriented Programming (OOP)**
  - Clean class-based architecture
  - Separation of concerns
- 🧩 **Interfaces in TypeScript**
  - Strong typing and reusable contracts
- 🌍 **Map Integration**
  - Displays markers for users and companies
- 🎲 **Random Data Generation**
  - Uses `faker.js` to generate:
    - User names & locations
    - Company names & locations
- 📌 **Dynamic Map Markers**
  - Each marker shows relevant information on click

---

## 🛠️ Tech Stack

- **TypeScript**
- **OOP (Classes & Interfaces)**
- **Faker.js**
- **Map JavaScript API**
- **HTML / CSS**

---

## 📂 Project Structure

---

## 🧩 Core Concepts Used

- Classes & Constructors
- Interfaces
- Access Modifiers
- Composition
- Type Safety
- Reusability

---

## 🗺️ How It Works

1. Random **users** and **companies** are generated using `faker.js`
2. Each entity implements a common **interface**
3. The map class accepts any object that follows this interface
4. Locations are displayed as markers on the map
5. Clicking a marker shows entity-specific information

---

## ⚙️ Setup & Run Locally

```bash
# Install dependencies
npm install

# Start the project
npx parcel index.html
```
