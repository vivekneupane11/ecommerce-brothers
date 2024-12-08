import { getDocs, collection } from "firebase/firestore";

export const fetchProducts = async (
  fireDB,
  setProducts,
  setLoading,
  documentName
) => {
  try {
    const querySnapshot = await getDocs(collection(fireDB, documentName));
    const productList = [];
    querySnapshot.forEach((doc) => {
      productList.push({ id: doc.id, ...doc.data() });
    });
    setProducts(productList);
    sessionStorage.setItem(documentName, JSON.stringify(productList));
    setLoading(false);
  } catch (error) {
    console.error("Error fetching products: ", error);
    setLoading(false);
  }
};
