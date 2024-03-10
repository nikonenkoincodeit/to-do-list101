const STORAGE_KEY = "tu-do-list";

export const loadForm = () => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : [];
  } catch (error) {
    console.log(error.message);
  }
};

export const saveForm = (data) => {
  const arrData = loadForm();
  arrData.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arrData));
};
