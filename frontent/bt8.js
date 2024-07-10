const showAddProductForm = () => {
  document.getElementById("addProductForm").style.display = "block";
};

const hideAddProductForm = () => {
  document.getElementById("addProductForm").style.display = "none";
};

const validateProduct = (product) => {
  if (
    !product.name ||
    !product.image ||
    !product.price ||
    !product.quantity ||
    !product.date
  ) {
    alert("Các trường không được phép để trống");
    return false;
  }
  return true;
};

const addProduct = () => {
  const product = {
    name: document.getElementById("name").value,
    image: document.getElementById("image").value,
    price: document.getElementById("price").value,
    quantity: document.getElementById("quantity").value,
    date: document.getElementById("date").value,
  };

  if (!validateProduct(product)) return;

  fetch("http://localhost:9999/products")
    .then((res) => res.json())
    .then((products) => {
      if (products.some((p) => p.name === product.name)) {
        alert("Tên sản phẩm không được phép trùng");
        return;
      }

      fetch("http://localhost:9999/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Sản phẩm đã được thêm:", data);
          hideAddProductForm();
          renderProducts();
        })
        .catch((error) => {
          console.error("Lỗi khi thêm sản phẩm:", error);
        });
    });
};

const deleteProduct = (id) => {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
    fetch(`http://localhost:9999/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Lỗi khi xóa sản phẩm");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Sản phẩm đã được xóa:", data);
        renderProducts();
      })
      .catch((error) => {
        console.error("Lỗi khi xóa sản phẩm:", error);
      });
  }
};

const renderProducts = () => {
  fetch("http://localhost:9999/products")
    .then((res) => res.json())
    .then((products) => {
      const sortOrder = document.getElementById("sortOrder").value;
      if (sortOrder === "latest") {
        products.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else {
        products.sort((a, b) => new Date(a.date) - new Date(b.date));
      }
      const productList = document.querySelector("#productList");
      productList.innerHTML = products
        .map(
          (product) => `
        <tr>
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td><img src="${product.image}" alt="${product.name}" width="50"></td>
          <td>${product.price}</td>
          <td>${product.quantity}</td>
          <td>${product.date}</td>
          <td>
            <button onclick="editProduct(${product.id})">Sửa</button>
            <button onclick="deleteProduct(${product.id})">Xóa</button>
          </td>
        </tr>
      `
        )
        .join("");
    });
};

const editProduct = (id) => {
  console.log(`Editing product with ID ${id}`);
};

renderProducts();
