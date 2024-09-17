import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";



const page = () => {
    return (
        <div>
            <div className="p-4 flex gap-4 flex-col md:flex-row">

                {/* LEFT */}
                <div className="w-full lg:w-2/3 flex flex-col gap-8">

                    {/* USER CARDS */}
                    <div className="flex gap-4 justify-between  flex-wrap">
                        <div className="bg-fPurple rounded-2xl">
                            <UserCard type="student" />
                        </div>
                        <div className="bg-fYellow rounded-2xl">
                            <UserCard type="teacher" />
                        </div>
                        <div className="bg-fPurple rounded-2xl" >
                            <UserCard type="parent" />
                        </div>
                        <div className="bg-fYellow rounded-2xl" >
                            <UserCard type="staff" />
                        </div>

                    </div>
                    
                    {/* MIDDLE CHARTS */}
                    <div className="flex gap-4 flex-col lg:flex-row">
                        {/* COUNT CHART */}
                        <div className="w-full lg:w-1/3 h-[450px]">
                            <CountChart></CountChart>
                        </div>
                        {/* ATTENDANCE CHART */}
                        <div className="w-full lg:w-2/3 h-[450px]">
                            <AttendanceChart></AttendanceChart>
                        </div>
                    </div>
                    {/* BOTTOM CHART */}
                    <div className="w-full h-[500px]">
                        {/* <FinanceChart /> */}
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-full lg:w-1/3 flex flex-col gap-8">
                    {/* <EventCalendar /> */}
                    {/* <Announcements /> */}
                </div>
            </div>
        </div>
    );
};

export default page;