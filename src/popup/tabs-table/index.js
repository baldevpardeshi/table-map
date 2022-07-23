import Tabs from './tabs';
import Table from './table';
import AddForm from './add-form';
const TabsTable = () => {
  return (
    <>
      <Tabs />
      <div className="flex flex-col md:flex-row">
        <div className="px-2.5">
          <Table />
        </div>
        <div className="px-2.5 form-section">
          <AddForm />
        </div>
      </div>
    </>
  );
};
export default TabsTable;