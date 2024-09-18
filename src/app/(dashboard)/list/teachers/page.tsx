import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";



const page = () => {
    return (
        <div>
            <Pagination></Pagination>
            <TableSearch></TableSearch>
            {/* <FormModal></FormModal> */}
            {/* <Table ></Table> */}
        </div>
    );
};

export default page;