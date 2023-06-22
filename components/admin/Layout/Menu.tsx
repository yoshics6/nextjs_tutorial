import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Collapse, ListItem, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Layers, BarChart, Person } from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import { useRouter } from "next/router";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PrintingIcon from "@mui/icons-material/FileCopy";
import Image from "next/image";
import { useSelector } from "react-redux";

import ListSubheader from "@mui/material/ListSubheader";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Settings from "@mui/icons-material/Settings";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

type MenuProps = {
  open: boolean;
  onDrawerClose: () => void;
};

export default function Menu({ open, onDrawerClose }: MenuProps) {
  const theme = useTheme();
  const router = useRouter();
  const userSelector = useSelector((store: any) => store.admin);
  const [userOpen, setUserOpen] = React.useState<boolean>(false);
  const [newsOpen, setNewsOpen] = React.useState<boolean>(false);
  const [bannerOpen, setBannerOpen] = React.useState<boolean>(false);
  const [saddleOpen, setsaddleOpen] = React.useState<boolean>(false);
  const [perfectBindingOpen, setperfectbindingOpen] =
    React.useState<boolean>(false);
  const [foldingOpen, setfoldingOpen] = React.useState<boolean>(false);
  const [coverPaperOpen, setcoverPaperOpen] = React.useState<boolean>(false);
  const [textPaperOpen, settextPaperOpen] = React.useState<boolean>(false);
  const [textPrintingOpen, setPrintingOpen] = React.useState<boolean>(false);

  const [open_menu, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open_menu);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Stack direction="row" alignItems="center">
          <Image
            width={200}
            height={68}
            unoptimized={true}
            alt="logo"
            src={"/static/images/logo.png"}
          />
          <IconButton onClick={onDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Stack>
      </DrawerHeader>
      <Divider />

      <List>
        <Link
          href="/admin/user"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            button
            onClick={() => setUserOpen(!userOpen)}
            className={
              router.pathname === "/admin/user"
                ? "Mui-selected"
                : router.pathname === "/admin/user/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/user/add"
                ? "Mui-selected"
                : router.pathname === "/admin/user/upload"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItem>
        </Link>
      </List>
      <hr />

      {/* <List>
        <Link
          href="/admin/banner"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            onClick={() => setBannerOpen(!bannerOpen)}
            className={
              router.pathname === "/admin/banner"
                ? "Mui-selected"
                : router.pathname === "/admin/banner/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/banner/add"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <PhotoSizeSelectActualIcon />
            </ListItemIcon>
            <ListItemText primary="Banner" />
          </ListItem>
        </Link>
      </List>

      <List>
        <Link
          href="/admin/news"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            onClick={() => setNewsOpen(!newsOpen)}
            className={
              router.pathname === "/admin/news"
                ? "Mui-selected"
                : router.pathname === "/admin/news/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/news/add"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <NewspaperIcon />
            </ListItemIcon>
            <ListItemText primary="News" />
          </ListItem>
        </Link>
      </List>

      <List>
        <Link
          href="/admin/contact"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            button
            onClick={() => setUserOpen(!userOpen)}
            className={
              router.pathname === "/admin/contact" ? "Mui-selected" : ""
            }
          >
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
      </List> */}

      <List>
        <Typography
          variant="h6"
          component="h6"
          style={{ marginLeft: "10px", color: "red" }}
        >
          Setting File
        </Typography>
      </List>

      <List>
        <Link
          href="/admin/saddle_stitch"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            button
            onClick={() => setsaddleOpen(!saddleOpen)}
            className={
              router.pathname === "/admin/saddle_stitch"
                ? "Mui-selected"
                : router.pathname === "/admin/saddle_stitch/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/saddle_stitch/add"
                ? "Mui-selected"
                : router.pathname === "/admin/saddle_stitch/upload"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <PrintingIcon />
            </ListItemIcon>
            <ListItemText primary="Saddle Stitch" />
          </ListItem>
        </Link>
      </List>

      <List>
        <Link
          href="/admin/perfect_binding"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            button
            onClick={() => setperfectbindingOpen(!perfectBindingOpen)}
            className={
              router.pathname === "/admin/perfect_binding"
                ? "Mui-selected"
                : router.pathname === "/admin/perfect_binding/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/perfect_binding/add"
                ? "Mui-selected"
                : router.pathname === "/admin/perfect_binding/upload"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <PrintingIcon />
            </ListItemIcon>
            <ListItemText primary="Perfect Binding" />
          </ListItem>
        </Link>
      </List>

      <List>
        <Link
          href="/admin/folding"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            button
            onClick={() => setfoldingOpen(!foldingOpen)}
            className={
              router.pathname === "/admin/folding"
                ? "Mui-selected"
                : router.pathname === "/admin/folding/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/folding/add"
                ? "Mui-selected"
                : router.pathname === "/admin/folding/upload"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <PrintingIcon />
            </ListItemIcon>
            <ListItemText primary="Folding" />
          </ListItem>
        </Link>
      </List>

      <hr />

      <List>
        <Typography
          variant="h6"
          component="h6"
          style={{ marginLeft: "10px", color: "red" }}
        >
          Database
        </Typography>
      </List>

      <List>
        <Link
          href="/admin/cover_paper"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            button
            onClick={() => setcoverPaperOpen(!coverPaperOpen)}
            className={
              router.pathname === "/admin/cover_paper"
                ? "Mui-selected"
                : router.pathname === "/admin/cover_paper/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/cover_paper/add"
                ? "Mui-selected"
                : router.pathname === "/admin/cover_paper/upload"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Cover Paper" />
          </ListItem>
        </Link>
      </List>

      <List>
        <Link
          href="/admin/text_paper"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            button
            onClick={() => settextPaperOpen(!textPaperOpen)}
            className={
              router.pathname === "/admin/text_paper"
                ? "Mui-selected"
                : router.pathname === "/admin/text_paper/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/text_paper/add"
                ? "Mui-selected"
                : router.pathname === "/admin/text_paper/upload"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Text Paper" />
          </ListItem>
        </Link>
      </List>

      <List>
        <Link
          href="/admin/text_no"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            button
            onClick={() => settextPaperOpen(!textPaperOpen)}
            className={
              router.pathname === "/admin/text_no"
                ? "Mui-selected"
                : router.pathname === "/admin/text_no/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/text_no/add"
                ? "Mui-selected"
                : router.pathname === "/admin/text_no/upload"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Text No" />
          </ListItem>
        </Link>
      </List>

      <List>
        <Link
          href="/admin/printing"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            button
            onClick={() => setPrintingOpen(!textPrintingOpen)}
            className={
              router.pathname === "/admin/printing"
                ? "Mui-selected"
                : router.pathname === "/admin/printing/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/printing/add"
                ? "Mui-selected"
                : router.pathname === "/admin/printing/upload"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Printing" />
          </ListItem>
        </Link>
      </List>
      <hr />

      {/* <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <hr />
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Database" />
          {open_menu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open_menu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List> */}
    </Drawer>
  );
}
