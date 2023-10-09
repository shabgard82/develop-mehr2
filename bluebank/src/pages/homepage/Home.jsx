import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import styles from "./styles.module.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import tarakonesh from "../../images/tarakonesh.jpg";
import LabelBottomNavigation from "../../components/bottom-tabs/bottom-tabs";
import { Activity } from "iconsax-react";
import HomeDrawer from "../home-drawer/home-drawer";
import { useNavigate } from "react-router-dom";
import ChargeDrawer from "../charge-drawer/charge-drawer";

function Home() {
  const navigate = useNavigate();
  const handle = () => navigate("/notification");
  const handle1 = () => navigate("/box-info");
  const handle2 = () => navigate("/soorat-hesab");
  return (
    <>
      <Stack
        className={styles.body}
        display="flex"
        direction="column"
        justifyContent="space-between"
      >
        <Stack display="flex" direction="row" justifyContent="space-between">
          <Stack display="flex" direction="row">
            <MenuIcon
              sx={{ marginLeft: "10px", marginTop: "15px", color: "white" }}
            />
            <SearchIcon
              sx={{ color: "white", marginLeft: "15px", marginTop: "15px" }}
            />
          </Stack>
          <Typography
            sx={{ fontWeight: "600", color: "white", marginTop: "15px" }}
          >
            Home
          </Typography>
          <Stack>
            <IconButton sx={{ "& .MuiSvgIcon-root": { color: "#fff" } }}>
              <MuiDrawer />
              <NotificationsNoneIcon
                sx={{ color: "white", marginLeft: "15px" }}
                onClick={handle}
              />
            </IconButton>
          </Stack>
        </Stack>
        <Stack display="flex" direction="column" justifyContent="center">
          <Typography
            sx={{ color: "white", textAlign: "center", fontWeight: "600" }}
            fontSize={30}
          >
            0 $
          </Typography>
          <Stack
            display="flex"
            direction="row"
            justifyContent="center"
            pt={1}
            alignItems="center"
          >
            <Typography
              sx={{ color: "white", fontSize: 18, fontWeight: "600" }}
            >
              inventory
            </Typography>
            <HomeDrawer color="white" />
          </Stack>
        </Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          pb={2}
        >
          <Stack display="flex" direction="column" alignItems="center">
            <ChargeDrawer />
            <Typography sx={{ color: "white", fontWeight: "600" }}>
              charge account
            </Typography>
          </Stack>
          <Stack display="flex" direction="column" alignItems="center">
            <GroupWorkOutlinedIcon
              sx={{
                color: "white",
                fontSize: 32,
                padding: "15px",
                borderRadius: "50%",
                backgroundColor: " #b3daff55",
              }}
              onClick={handle1}
            />
            <Typography pt={1} color="white" fontWeight="600">
              Box
            </Typography>
          </Stack>
          <Stack display="flex" direction="column" alignItems="center">
            <Activity
              size="32"
              color="#FFF"
              style={{
                padding: "15px",
                borderRadius: "50%",
                backgroundColor: "#b3daff55",
              }}
              onClick={handle2}
            />
            <Typography
              pt={1}
              sx={{ color: "white", textAlign: "center", fontWeight: "600" }}
            >
              Management
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Stack display="flex" direction="row" justifyContent="center" pt={8}>
          <img src={tarakonesh} width="200px" height="200px" />
        </Stack>
        <Stack pt={2}>
          <Typography sx={{ fontWeight: "600", textAlign: "center" }}>
            You have no transaction
          </Typography>
          <Typography sx={{ color: "gray", textAlign: "center" }}>
            Make your first transaction
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ borderRadius: "40px" }} pb={2}>
        <LabelBottomNavigation />
      </Stack>
    </>
  );
}
export default Home;
