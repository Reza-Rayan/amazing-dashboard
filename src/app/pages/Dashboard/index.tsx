import { Box, Typography } from "@mui/material";

// Custom Components
import CContainer from "../../templates/CContainer";
import ContactsTable from "./components/ContactsTable";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
// -------------------------------------------------------

const Dashboard = () => {
  return (
    <section className="space-y-5">
      <CContainer>
        <div className="flex flex-col gap-y-3">
          <Typography
            variant="h2"
            fontSize={26}
            fontWeight={700}
            className="text-indigo-600"
          >
            Welcome Back, Reza!
          </Typography>
          <Typography fontSize={16}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Typography>
        </div>
      </CContainer>
      <section className="container mx-auto">
        <Box className="w-full grid grid-cols-3 gap-6">
          <CContainer extraClasses="col-span-2  rounded-2xl shadow-xl">
            <LineChart />
          </CContainer>
          <CContainer extraClasses="col-span-1  rounded-2xl shadow-xl">
            <PieChart />
          </CContainer>
        </Box>
      </section>
      <CContainer>
        <Typography
          variant="h2"
          fontSize={20}
          fontWeight={600}
          marginBottom={2}
        >
          Some Contacts:
        </Typography>
        <ContactsTable />
      </CContainer>
    </section>
  );
};

export default Dashboard;
