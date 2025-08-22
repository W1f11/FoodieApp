
# 🍽️ FoodieApp

Application web de gestion de restaurants et menus avec panier.  
Développée en **React.js** avec **Redux Toolkit** pour la gestion d’état.

---

## 🚀 Installation

### 1. Cloner le projet
```bash
git clone https://github.com/W1f11/FoodieApp.git
cd foodieapp
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer l’application
```bash
npm start
```

L’application sera disponible sur `http://localhost:3000/`.

---

## 🛠️ Choix techniques

### ⚛️ Frontend : React.js
- **React Router** pour la navigation (`/restaurants`, `/restaurant/:id`, `/cart`).
- **Composants fonctionnels + Hooks** (`useState`, `useEffect`, `useSelector`, `useDispatch`).

### 📦 Gestion d’état : Redux Toolkit
- Utilisation de `createSlice` et `createAsyncThunk` pour gérer :
  - `restaurants` → liste des restaurants
  - `menu` → menu d’un restaurant
  - `cart` → panier (ajout, suppression, quantité, vider)
- Avantages :
  - Centralisation de l’état (pas besoin de prop drilling).
  - Lisibilité et maintenabilité.
  - Gestion facile des états asynchrones (loading / error).

### 🔄 Alternatives envisagées
- **Redux** (plus léger, syntaxe plus simple) → abandonné car Redux Toolkit offre une meilleure structure pour un projet évolutif.
- **Context API** → suffisant pour de petits projets, mais moins optimisé pour des données complexes comme le panier.

### ⚠️ Gestion des erreurs
- Les appels API sont gérés avec `createAsyncThunk` (Redux Toolkit).
- Chaque requête possède 3 états :
  - `pending` → chargement (`loading = true`)
  - `fulfilled` → données reçues
  - `rejected` → erreur (`error` affichée dans l’UI)

Exemple dans un composant :
```jsx
if (loading) return <p>Chargement...</p>;
if (error) return <p style={{ color: "red" }}>Erreur : {error}</p>;
```

### ⚡ Optimisations
- **Pagination** : menus découpés en pages de 10 items pour éviter l’affichage massif.
- **Redux DevTools** activé → debug facile.
- **Séparation des slices** :  `cartSlice` → logique claire.
- **Composants réutilisables** : `RestaurantList`, `RestaurantDetail`, `Cart`.

---

## 📂 Structure du projet

```
src/
 ├── api/               # Ancienne logique fetch (remplacée par Redux)
 ├── store/
 │    ├── store.js      # Configuration Redux
 │    ├── cartSlice.js  # Panier
 │     # Restaurants & Menus
 ├── components/
 │    ├── Cart.jsx
 │    ├── RestaurantsList.js
 │    └── RestaurantDetail.js
 ├── App.js
 ├── main.js
 └── index.css
```

---

## 🛒 Fonctionnalités principales

- Voir la liste des restaurants.
- Voir le menu d’un restaurant.
- Ajouter un plat au panier.
- Modifier la quantité d’un plat.
- Supprimer un plat du panier.
- Vider le panier.
- Pagination des menus (10 plats par page).
- Navigation fluide avec React Router.

---

## 🔮 Améliorations futures

- Authentification utilisateur.
- Système de favoris.
- Sauvegarde du panier dans `Redux`.
- Déploiement sur Github.

---

## 👩‍💻 Développement

- React 18 + Vite
- Redux Toolkit
- React Router v6
- CSS 
