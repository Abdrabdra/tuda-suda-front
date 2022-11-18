import * as React from "react";
import { Box, Stack, Tab, Tabs } from "@mui/material";

import { a11yProps, TabPanel } from "./TabConfig";
import { CommentsTab, DetailsTab } from "./Tabs";

const DoubleTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Детали" {...a11yProps(0)} sx={{ flex: "1" }} />
          <Tab label="Комментарии (176)" {...a11yProps(1)} sx={{ flex: "1" }} />
        </Tabs>
      </Box>
      <Box>
        <TabPanel value={value} index={0}>
          <DetailsTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CommentsTab />
        </TabPanel>
      </Box>
    </Stack>
  );
};

export default DoubleTab;
