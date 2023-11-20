import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  QuerySnapshot,
  QueryDocumentSnapshot,
  CollectionReference,
  DocumentReference,
  Firestore,
  query,
  where,
} from "firebase/firestore";
import { Product, ProductDoc } from "./data-types";
import { init_products } from "./data-init";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF-CRMH-LsqbrVSB5ZF_eBUYU8P-kdAIE",
  authDomain: "cis371-demo-770dc.firebaseapp.com",
  projectId: "cis371-demo-770dc",
  storageBucket: "cis371-demo-770dc.appspot.com",
  messagingSenderId: "988644841148",
  appId: "1:988644841148:web:3b246d80be5da0bccb62b9",
  measurementId: "G-X2KWMBZYFB",
};

const app = initializeApp(firebaseConfig, "Firestore sample code");
const db: Firestore = getFirestore(app);

function initData() {
  getDocs(collection(db, "products"))
    .then((qs: QuerySnapshot) => {
      if (qs.size === 0) {
        // Firestore is empty, invoke data_init to populate data
        data_init();
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

function data_init() {
  init_products.forEach(async (item) => {
    try {
      const coll: CollectionReference = collection(db, "products");

      addDoc(coll, item).then((newDoc: DocumentReference) => {
        console.log(`New document with ID ${newDoc.id} inserted`);
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  });
}

function getProducts(category: string) {
  const productsColl =
    category === ""
      ? collection(db, "products")
      : query(collection(db, "products"), where("category", "==", category));

  return getDocs(productsColl).then((qs: QuerySnapshot) =>
    qs.docs.map(
      (qd: QueryDocumentSnapshot): ProductDoc => ({
        id: qd.id,
        data: qd.data() as Product,
      })
    )
  );
}

// function getClothing() {
//   const q = query(
//     collection(db, "products"),
//     where("category", "==", "Clothing")
//   );
//   return getDocs(q).then((qs: QuerySnapshot) =>
//     qs.docs.map(
//       (qd: QueryDocumentSnapshot): ProductDoc => ({
//         id: qd.id,
//         data: qd.data() as Product,
//       })
//     )
//   );
// }
// function getElectronics() {
//   const q = query(
//     collection(db, "products"),
//     where("category", "==", "Electronics")
//   );
//   return getDocs(q).then((qs: QuerySnapshot) =>
//     qs.docs.map(
//       (qd: QueryDocumentSnapshot): ProductDoc => ({
//         id: qd.id,
//         data: qd.data() as Product,
//       })
//     )
//   );
// }
// function getGroceries() {
//   const q = query(
//     collection(db, "products"),
//     where("category", "==", "Groceries")
//   );
//   return getDocs(q).then((qs: QuerySnapshot) =>
//     qs.docs.map(
//       (qd: QueryDocumentSnapshot): ProductDoc => ({
//         id: qd.id,
//         data: qd.data() as Product,
//       })
//     )
//   );
// }
function deleteProductByID(id) {
  const p = doc(db, "products", id);
  return deleteDoc(p);
}
function updateProduct(product: ProductDoc) {
  const productRef = doc(db, "products", product.id);
  return updateDoc(productRef, product.data);
}
// async function updateProduct(product: ProductDoc) {
//   try {
//     const productRef = doc(db, "products", product.id);
//     await updateDoc(productRef, { ...product });
//     console.log("Product updated successfully");
//   } catch (error) {
//     console.error("Error updating product:", error);
//   }
// }
function listen(category: string, callback: (products: ProductDoc[]) => void) {
  const productsColl =
    category === ""
      ? collection(db, "products")
      : query(collection(db, "products"), where("category", "==", category));
  return onSnapshot(
    productsColl,
    (qs: QuerySnapshot) => {
      const products = qs.docs.map(
        (qd: QueryDocumentSnapshot): ProductDoc => ({
          id: qd.id,
          data: qd.data() as Product,
        })
      );
      callback(products);
    },
    (error) => {
      console.error("Error listening to products collection:", error);
    }
  );
}

export {
  initData,
  getProducts,
  // getAllProducts,
  // getClothing,
  // getGroceries,
  // getElectronics,
  deleteProductByID,
  updateProduct,
  listen,
};
