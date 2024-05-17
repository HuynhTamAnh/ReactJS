let arr = [
  {
    id: 1,
    title: "quet nha",
    isComplete: false,
  },
  {
    id: 2,
    title: "lau nha",
    isComplete: false,
  },
  {
    id: 3,
    title: "rua chen",
    isComplete: false,
  },
  {
    id: 4,
    title: "nau com",
    isComplete: true,
  },
  {
    id: 5,
    title: "nau chao",
    isComplete: true,
  },
];

// Hiển thị
const render = (arr) => {
  let content = "";
  arr.forEach((item) => {
    content += `
      <ul class="list-group my-2">
        <li class="list-group-item" style="${dk(
          item.isComplete
        )}" onclick="toggleStatus(${item.id})">
          ${item.title} 
          ${button(item.isComplete, item.id)}
        </li>
      </ul>
    `;
  });
  document.getElementById("render").innerHTML = content;
};

// Điều kiện cho style của li
const dk = (isComplete) => {
  return isComplete
    ? "text-decoration: line-through;"
    : "background-color: white;";
};

// Tạo nút nếu isComplete là false
const button = (isComplete, id) => {
  return isComplete
    ? ""
    : `<button class="button" onclick="removeById(${id}); event.stopPropagation();">
    <i class="fa fa-times" aria-hidden="true"></i>
  </button>`;
};

// Thêm công việc
const addTitle = () => {
  let add = document.getElementById("in").value;
  if (add.trim() !== "") {
    const newTask = {
      id: arr.length > 0 ? arr[arr.length - 1].id + 1 : 1,
      title: add,
      isComplete: false,
    };
    arr = [...arr, newTask];
    render(arr);
    document.getElementById("in").value = "";
  } else {
    alert("Vui lòng nhập tiêu đề công việc");
  }
};

// Xóa công việc theo id
const removeById = (id) => {
  arr = arr.filter((item) => item.id !== id);
  render(arr);
};

// Thay đổi trạng thái công việc
const toggleStatus = (id) => {
  arr = arr.map((item) => {
    if (item.id === id) {
      return { ...item, isComplete: !item.isComplete };
    }
    return item;
  });
  render(arr);
};

// Lọc công việc theo trạng thái
const filterTasks = (status) => {
  let filteredArr = [];
  switch (status) {
    case "all":
      filteredArr = arr;
      break;
    case "active":
      filteredArr = arr.filter((item) => !item.isComplete);
      break;
    case "completed":
      filteredArr = arr.filter((item) => item.isComplete);
      break;
  }
  render(filteredArr);
};

// Tìm kiếm công việc
const searchTasks = (searchTerm) => {
  let searchedArr = arr.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  render(searchedArr);
};

// Sự kiện khi trang tải xong
document.addEventListener("DOMContentLoaded", () => {
  render(arr);
  document
    .getElementById("btnradio1")
    .addEventListener("click", () => filterTasks("all"));
  document
    .getElementById("btnradio2")
    .addEventListener("click", () => filterTasks("active"));
  document
    .getElementById("btnradio3")
    .addEventListener("click", () => filterTasks("completed"));
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = document.querySelector('input[type="search"]').value;
    searchTasks(searchTerm);
  });
});
