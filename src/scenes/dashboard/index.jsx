import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Pie from '../pie/index';
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box  display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              color:"white"
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          border="1px solid #dfdfdf"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textSize="40px"
        >
          <StatBox
            title="85%"
            size="40px"
            subtitle="Overall Attendance"
            progress="0.85"
            increase="+10%"
            
            
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          border="1px solid #dfdfdf"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textSize="40px"
        >
          <StatBox
            title="35"
            size="40px"
            subtitle="Credits Earned"
            progress="0.25"
            
            
            
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          border="1px solid #dfdfdf"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textSize="40px"
        >
          <StatBox
            title="9.1"
            size="40px"
            subtitle="CGPA"
            progress="0.91"
            increase="+10%"
            
            
          />
        </Box>
        
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          border="1px solid #dfdfdf"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textSize="40px"
        >
          <StatBox
            title="8.9"
            size="40px"
            subtitle="GPA"
            progress="0.89"
            increase="+10%"
            
            
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          border="1px solid #dfdfdf"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          borderRadius="20px"
          padding="0.75rem"
        >
          

          <div style={{"backgroundColor":"#071437",color:"white",border:"1px solid white","display":"flex","flexDirection":"column","padding":"2rem",borderRadius:"20px"}} className="w-1/2"><img className="w-1/2 mx-auto my-0" src="https://www.klipfolio.com/gatsby-files/static/fd30d98bb5f73cdf97d36191c1a847b9/05877/algorithm.jpg">
            
            </img>
            <p className="p-2 text-xl font-medium text-center">DSA</p>
            <p className="p-1 text-md font-medium text-center">A Course Where You Learn Algorithms</p>

            </div>
          
            <div style={{"backgroundColor":"#071437",color:"white",border:"1px solid white","display":"flex","flexDirection":"column","padding":"2rem",borderRadius:"20px"}} className="w-1/2"><img className="w-1/2 mx-auto my-0" src="https://www.klipfolio.com/gatsby-files/static/fd30d98bb5f73cdf97d36191c1a847b9/05877/algorithm.jpg">
            
            </img>
            <p className="p-2 text-xl font-medium text-center">DSA</p>
            <p className="p-1 text-md font-medium text-center">A Course Where You Learn Algorithms</p>

            </div>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          border="1px solid #dfdfdf"
          backgroundColor="white"
          overflow="auto"
        >
          <Box
            display="flex"
            border="1px solid #dfdfdf"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
             <h1 className="text-center text-xl font-bold">Student Updates</h1> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Box>
        </Box>
 
        {/* ROW 3 */}
        <Box
          gridColumn="span 4"   
          border="1px solid #dfdfdf"
          gridRow="span 2"
          backgroundColor="white"
          p="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography variant="h5" fontWeight="600">
            Percentile Ranking
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="16px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              9.1 CGPA Scored
            </Typography>
            <Typography>In the top 5% students of VIT</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="white"
          border="1px solid #dfdfdf"
        >
          <Pie></Pie>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="white"
          padding="30px"
          border="1px solid #dfdfdf"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
           
          </Typography>
          <Box height="200px">
            <h1 className="text-3xl font-bold">Important Messages</h1>
            <p className="text-lg text-red-600 font-medium py-3">You may get debarred in Maths class.You have 70 percent Attendance.</p>
            <p className="text-lg text-red-500 font-medium ">You got 40/100 in DSD class. You need to work hard.</p>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
