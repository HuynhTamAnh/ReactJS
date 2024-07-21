import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product, Products } from "../interface/index";

// Define Thunks
export const getAllProducts: any = createAsyncThunk<Product[]>(
  "products/getAllProducts",
  async () => {
    try {
      console.log("Fetching products...");
      const response = await axios.get("http://localhost:9999/books");
      console.log("Fetched products:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const createNewProduct: any = createAsyncThunk<Product, Product>(
  "products/createNewProduct",
  async (newProduct) => {
    try {
      const res = await axios.post("http://localhost:9999/books", newProduct, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 201) {
        return res.data;
      } else {
        throw new Error("Error creating product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  }
);

export const deleteProduct: any = createAsyncThunk<number, number>(
  "products/deleteProduct",
  async (id) => {
    try {
      const res = await axios.delete(`http://localhost:9999/books/${id}`);
      if (res.status === 200) {
        return id;
      } else {
        throw new Error("Error deleting product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  }
);

export const updateProduct: any = createAsyncThunk<
  Product,
  { updatedProduct: Product; id: number }
>("products/updateProduct", async ({ updatedProduct, id }) => {
  try {
    const res = await axios.put(
      `http://localhost:9999/books/${id}`,
      updatedProduct,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error("Error updating product");
    }
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
});

const initialState: Products = { items: [], status: "idle", error: null };

// Create Slice
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createNewProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(createNewProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { reducer } = productsSlice;
export default reducer;
