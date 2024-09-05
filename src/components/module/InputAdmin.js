import { p2e, sp } from "@/utils/replaceNumber";

function InputAdmin({ title, name, menu, setMenu, textarea = false }) {
  const changHandler = (e) => {
    const { name, value } = e.target;
    setMenu({ ...menu, [name]: sp(p2e(value)) });
  };

  return (
    <div>
      <p>{title}</p>
      {textarea ? (
        <textarea
          type="text"
          value={menu[name]}
          name={name}
          onChange={changHandler}
          className="bg-transparent border border-dashed border-y1 outline-none"
        />
      ) : (
        <input
          type="text"
          value={menu[name]}
          name={name}
          onChange={changHandler}
          className="bg-transparent border border-dashed border-y1 outline-none"
        />
      )}
    </div>
  );
}

export default InputAdmin;
