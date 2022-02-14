import { ref, get } from "firebase/database";
import { db } from "./libs/firebase/firebaseConfig";
import { renderProduct } from "./templates/products";

async function pageInit() {
  const productRef = ref(db, "products/");
  const dataSnapShot = get(productRef);

  console.log(dataSnapShot);
}

pageInit();
