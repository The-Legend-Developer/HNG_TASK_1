function Input({ id, type, hint, name, placeholder }) {
  return (
    <div className="flex flex-col w-1/2">
      <label htmlFor={id}>{name}</label>
      {id === "message" ? (
        <textarea
          id={id}
          className="border rounded-lg px-3 py-2 mt-2 h-32 focus:outline outline-sky-200"
          placeholder={placeholder}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={
            type === "text"
              ? "border rounded-lg px-3 py-2 mt-2 focus:outline outline-sky-200"
              : "border rounded-lg px-3 py-2 mt-2 focus:outline outline-sky-200"
          }
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default Input;
