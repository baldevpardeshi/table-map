const AddForm = () => {
  return (
    <form className="form">
      <div className="flex items-center mb-2.5">
        <label className="form__label">Name</label>
        <input type="text" className="form__input" />
      </div>
      <div className="flex items-center mb-2.5">
        <label className="form__label">Description</label>
        <input type="text" className="form__input" />
      </div>
      <div className="flex items-center mb-2.5">
        <label className="form__label">Web Ref.</label>
        <input type="text" className="form__input" />
      </div>
      <div className="flex justify-end">
        <button type="submit" value="Add" className="button-primary">Add</button>
      </div>
    </form>
  );
};
export default AddForm;