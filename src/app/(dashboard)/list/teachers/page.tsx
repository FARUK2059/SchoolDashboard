import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";



const page = () => {
    return (
        <div>
            <Pagination></Pagination>
            <TableSearch></TableSearch>
            <FormModal></FormModal>
        </div>
    );
};

export default page;