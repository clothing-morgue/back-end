import { Router } from "express";
import Product from "../data/helpers/productHelpers";
import { runInNewContext } from "vm";

const router = Router();

// This get route makes sorting easy
// When you send a get request
// Simply add ?sortby=column_name to the end of the query string
// For example "http://localhost:3000/products?sortby=price"
// Will return all products sorted by price

router.get("/", (req, res) => {
  console.log(req.query);
  const sortField = req.query.sortby || "id";
  Product.find()
    .then((products) => {
      const response = products.sort((a, b) =>
        a[sortField] < b[sortField] ? -1 : 1
      );
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json({
        message: "failed to load products",
        error: err
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id).then((product) => {
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ err: "Invalid product id" });
    }
  });
});

router.post("/", async (req, res) => {
  let product;
  product = req.body;

  for (let requiredParameter of ["name", "price", "cost"]) {
    if (!product[requiredParameter]) {
      return res.status(422).send({
        error: `Expected format: { name: <String>, price: <Decimal>, cost: <Decimal> }. You're missing a '${requiredParameter}' property.`
      });
    }
  }

  Product.addProduct(product)
    .then(product => {
      res.status(201).json({ product });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.put("/:id", async (req, res) => {
  const product = {
    ...req.body,
    id: req.params.id
  };

  try {
    let validatedProduct = await Product.findById(product.id);
    if (validatedProduct) {
      let updatedProduct = await Product.updateProduct(product);
      return res.status(200).json(updatedProduct[0]);
    } else {
      return res
        .status(404)
        .json({ message: "Can't edit product; record not found."});
    }
  } catch (error) {
    return next(error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try{
    const del = await Product.deleteProduct(id);
    return res.status(200).json(del);
  } catch (error) {
    return next(error);
  }
});

export default router;