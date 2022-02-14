import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { ref as databaseRef, push, set, get } from "firebase/database";
import { db, storage } from "./libs/firebase/firebaseConfig";
import { ref as databaseRef, push, set, get } from "firebase/database";

function onAddNewTea(e) {
  e.preventDefault();
  uploadNewTea();
}
document.forms["new-tea"].addEventListener("submit", onAddNewTea);

function onImageSelected(e) {
  //selected file
  let file = e.target.files[0];
  console.log(file);
  // update the display with the requested image
  document.querySelector(".display img").src = URL.createObjectURL(file);
  checkImageUpload(file);
}

async function checkImageUpload(file) {
  const imageRef = storageRef(storage, file.name);
  const confirmation = await uploadBytes(imageRef, file);
  console.log(confirmation);
}

document.querySelector("#teaimg").addEventListener("change", onImageSelected);

async function uploadNewTea() {
  const tea = document.querySelector("#tea-name").value.trim();
  const file = document.querySelector("#teaimg").files[0];

  const imageRef = storageRef(storage, `images/${file.name}`);
  const url = await getDownloadURL(imageRef);
  const dataRef = databaseRef(db, "products");
  const uploadResult = await uploadBytes(imageRef, file);
  const path = await getDownloadURL(imageRef);
  const imagePath = uploadResult.metadata.fullPath;
  const itemRef = push(dataRef);

  set(itemRef, {
    key: itemRef.key,
    image: imagePath,
    path,
    tea,
  });
}
