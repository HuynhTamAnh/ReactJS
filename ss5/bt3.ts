type arrT = {
  id: number;
  title: string;
  isComplete: boolean;
};

let arr: arrT[] = [
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
const render = (arr: arrT[]): void => {
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
  const renderElement = document.getElementById("render");
  if (renderElement) {
    renderElement.innerHTML = content;
  }
};

// Điều kiện cho style của li
const dk = (isComplete: boolean): string => {
  return isComplete
    ? "text-decoration: line-through;"
    : "background-color: white;";
};

// Tạo nút nếu isComplete là false
const button = (isComplete: boolean, id: number): string => {
  return isComplete
    ? ""
    : `<button class="button" onclick="removeById(${id}); event.stopPropagation();">
    <i class="fa fa-times" aria-hidden="true"></i>
  </button>`;
};

// Thêm công việc
const addTitle = (): void => {
  const addInput = document.getElementById("in") as HTMLInputElement;
  if (addInput) {
    const add = addInput.value;
    if (add.trim() !== "") {
      const newTask: arrT = {
        id: arr.length > 0 ? arr[arr.length - 1].id + 1 : 1,
        title: add,
        isComplete: false,
      };
      arr = [...arr, newTask];
      render(arr);
      addInput.value = "";
    } else {
      alert("Vui lòng nhập tiêu đề công việc");
    }
  }
};

// Xóa công việc theo id
const removeById = (id: number): void => {
  arr = arr.filter((item) => item.id !== id);
  render(arr);
};

// Thay đổi trạng thái công việc
const toggleStatus = (id: number): void => {
  arr = arr.map((item) => {
    if (item.id === id) {
      return { ...item, isComplete: !item.isComplete };
    }
    return item;
  });
  render(arr);
};

// Lọc công việc theo trạng thái
const filterTasks = (status: string): void => {
  let filteredArr: arrT[] = [];
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
const searchTasks = (searchTerm: string): void => {
  const searchedArr = arr.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  render(searchedArr);
};

// Sự kiện khi trang tải xong
document.addEventListener("DOMContentLoaded", () => {
  render(arr);
  const btnradio1 = document.getElementById("btnradio1");
  const btnradio2 = document.getElementById("btnradio2");
  const btnradio3 = document.getElementById("btnradio3");
  const form = document.querySelector("form");
  if (btnradio1) {
    btnradio1.addEventListener("click", () => filterTasks("all"));
  }
  if (btnradio2) {
    btnradio2.addEventListener("click", () => filterTasks("active"));
  }
  if (btnradio3) {
    btnradio3.addEventListener("click", () => filterTasks("completed"));
  }
  if (form) {
    form.addEventListener("input", (event) => {
      event.preventDefault();
      const searchInput = document.querySelector(
        'input[type="search"]'
      ) as HTMLInputElement;
      if (searchInput) {
        const searchTerm = searchInput.value;
        searchTasks(searchTerm);
      }
    });
  }
});
