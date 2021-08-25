import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import {
  AppBar,
  Box,
  makeStyles,
  Tabs,
  Theme,
  Typography,
} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import { useHistory } from 'react-router-dom';
import { getRole } from "../service/apiRole";
import MyProfile from "../Table/MyProfile";

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  table: {
    minWidth: 500,
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const HomePageUser: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [res, setRes] = React.useState<any>({});

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const Logout = () => {
    localStorage.clear();
    history.push('/');
  }

  useEffect(() => {
    setRes({
      username: localStorage.getItem("username"),
      email: localStorage.getItem("email")
    })
    
  },[res.length]);

  // const showUser = async () =>{
  //   const token = localStorage.getItem("userrole_token");
  //   const res = await getRole({ accessToken: token });
  // }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="My Profile" {...a11yProps(0)} />
          <Tab label="Content" {...a11yProps(1)} />
          <Tab label="Setting" {...a11yProps(2)} />
          <Tab label="Other" {...a11yProps(3)} />
          <Tab label="Logout" onClick={Logout} {...a11yProps(4)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} > 
        <MyProfile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content
      </TabPanel>
      <TabPanel value={value} index={2}>
        Setting
      </TabPanel>
      <TabPanel value={value} index={3}>
        Other
      </TabPanel>
    </div>
  );
};

export default HomePageUser;
