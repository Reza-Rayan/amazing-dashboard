import { Box, Container, Typography } from "@mui/material";

// Custom Components
import CContainer from "../../templates/CContainer";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import ContactsTable from "./components/ContactsTable";
// -----------------------------------------------------------

const Dashboard = () => {
  return (
    <section className="space-y-4">
      <CContainer>
        <Typography
          variant="h2"
          fontSize={26}
          fontWeight={700}
          className="text-indigo-600"
        >
          Welcome Back, Reza!
        </Typography>
        <Typography fontSize={14}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Typography>
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
