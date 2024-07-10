const getProductById = async (id) => {
  try {
    const response = await fetch(`http://localhost:9999/products/${id}`, {
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else if (response.status === 404) {
      console.log("Không tìm thấy");
    } else {
      throw new Error(`lỗi: ${response.status}`);
    }
  } catch (error) {
    console.error("Không tìm thấy bản ghi:", error);
  }
};

getProductById(1);
