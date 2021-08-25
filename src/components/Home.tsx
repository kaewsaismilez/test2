import React, { useEffect } from "react";
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
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

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

const HomePage: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [res, setRes] = React.useState<any>({});

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Login" {...a11yProps(2)} />
          <Tab label="Register" {...a11yProps(3)} />
         
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} > 
        Home
      </TabPanel>

      <TabPanel value={value} index={1}>
        About
      </TabPanel>

      <TabPanel value={value} index={2}>
        <LoginPage />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <RegisterPage />
      </TabPanel>
    </div>
  );
};

export default HomePage;
