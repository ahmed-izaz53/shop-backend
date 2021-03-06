const router = require("express").Router();
const {
  get_one_category,
  product_categories,
  create_category,
} = require("../controllers/productCategoryController");

router.post("/create-category", create_category);
router.get("/categories", product_categories);
router.get("/get-category/:category_id", get_one_category);

module.exports = router;
