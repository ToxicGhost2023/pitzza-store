function CategoryAdmin({ menu, setMenu }) {
  const { category } = menu;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setMenu({ ...menu, [name]: value });
  };

  return (
    <>
      <p className="text-y1 pt-[20px]">دسته بندی منو</p>
      <div className="flex flex-wrap text-text3 justify-between w-[50%] pt-[10px] pb-[40px]">
        <div>
          <label htmlFor="american">پیتزا آمریکایی</label>
          <input
           
            type="radio"
            value="american"
            name="category"
            id="american"
            checked={category === "american"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="italiy">پیتزا ایتالیایی</label>
          <input
            type="radio"
            value="italiy"
            name="category"
            id="italiy"
            checked={category === "italiy"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="drink">نوشیدنی ها</label>
          <input
            type="radio"
            value="drink"
            name="category"
            id="drink"
            checked={category === "drink"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="food"> غذا ها</label>
          <input
            type="radio"
            value="food"
            name="category"
            id="food"
            checked={category === "food"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </>
  );
}

export default CategoryAdmin;
