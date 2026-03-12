<div align="center">

  <img src="./doc/InAndOut.logo.png" alt="logo" width="200" height="auto" />
  <h1>InAndOut</h1>
  <p>
    A web application designed to minimize the time spent shopping by mapping the interior of registered stores and generating the optimal route for users.
  </p>

<p>
  <a href="https://github.com/Vldddddd1/InAndOut/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/Vldddddd1/InAndOut" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/Vldddddd1/InAndOut" alt="last update" />
  </a>
  <a href="https://github.com/Vldddddd1/InAndOut/network/members">
    <img src="https://img.shields.io/github/forks/Vldddddd1/InAndOut" alt="forks" />
  </a>
  <a href="https://github.com/Vldddddd1/InAndOut/stargazers">
    <img src="https://img.shields.io/github/stars/Vldddddd1/InAndOut" alt="stars" />
  </a>
  <a href="https://github.com/Vldddddd1/InAndOut/issues/">
    <img src="https://img.shields.io/github/issues/Vldddddd1/InAndOut" alt="open issues" />
  </a>
  <a href="https://github.com/Vldddddd1/InAndOut/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/Vldddddd1/InAndOut.svg" alt="license" />
  </a>
</p>

<h4>
    <a href="./doc/demo.mp4">View Demo</a>
  <span> · </span>
    <a href="./doc/requirements.md">System requirments</a>
  <span> · </span>
    <a href="https://github.com/Vldddddd1/InAndOut/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Vldddddd1/InAndOut/issues/">Request Feature</a>
  </h4>
</div>

---

## ✨ Features

The primary goal is to help users find products efficiently. The core functionality solves the **Traveling Salesperson Problem (TSP)** within the context of a store layout, allowing users to select a list of products and receive an optimized itinerary to collect them.

1. **Store Selection**: Choose a registered store.
2. **Product Discovery**: List available articles in the selected store.
3. **Smart Itinerary**:
   - User selects products (locally on the client).
   - Backend calculates the optimal path (TSP) through the store's aisles (edges) and intersections (nodes).
   - This heavy calculation is handled asynchronously (returning a Job ID).

---

## ⚛ Technology Stack

This project follows a **Monorepo** approach.

- **Frontend**: React with TypeScript.
- **Backend**: Java.
- **Database**: PostgreSQL.
- **API Modeling**: [Smithy](https://smithy.io/2.0/) (Interface Definition Language).

## 🛠 Build Instructions

TODO

### Execution

TODO

---

## 📰 References:

https://docs.google.com/document/d/1HnRcB2SaG4f4QodOaaYZT4r4GYhibqBzA8wdl2zpID0/edit?pli=1&tab=t.0#heading=h.l24o73s4osth

https://www.figma.com/design/7azMP7m6IgGHTwVgTPKf3R/In-Out?node-id=1-1045&p=f

https://www.figma.com/design/BZ9Ezzy2PSLf8Hav5bMcn1/In-Out---App-MockUp?node-id=83-6&t=mezeZQIlcakN0zCW-0
