const categoriesList = document.getElementById("categories");

const categories = categoriesList.querySelectorAll(".item");

const numberOfCategories = categories.length;
console.log(`Number of categories: ${numberOfCategories}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
