import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../assets/component/interface";

// Giả sử state ban đầu là một mảng rỗng
const initialState: Product[] = [];

// Tạo slice cho sản phẩm
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      // Thiết lập danh sách sản phẩm từ payload
      return action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      // Thêm sản phẩm mới vào danh sách
      state.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      // Cập nhật thông tin sản phẩm dựa trên ID
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      // Loại bỏ sản phẩm dựa trên ID
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

// Export các action
export const { setProducts, addProduct, updateProduct, removeProduct } =
  productSlice.actions;

// Export reducer
export default productSlice.reducer;
