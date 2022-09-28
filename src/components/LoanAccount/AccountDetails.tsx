import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { AccountDetailsType } from "./types";

const createDetailGrid = (title: string, value: string) => (
  <Grid container spacing={1} alignItems="center">
    <Grid item>
      <Typography variant="h6">{title}:</Typography>
    </Grid>
    <Grid item>
      <Typography>{value}</Typography>
    </Grid>
  </Grid>
);

const AccountDetails = (props: { accountDetails: AccountDetailsType }) => {
  const {
    accountDetails: {
      name,
      startDate,
      cycleInterval,
      limit,
      interestRate,
      monthlyFee,
    },
  } = props;

  return (
    <Box className="AccountDetails">
      <Card sx={{ width: "100%" }} elevation={2}>
        <CardContent className="cardContent">
          <Grid
            className="test"
            container
            spacing={5}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="h6">Account Name</Typography>
                  <Typography>{name}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Start Date</Typography>
                  <Typography>{startDate}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {createDetailGrid("Cycle Interval", cycleInterval.toUpperCase())}
              {createDetailGrid("Limit", `$${limit}`)}
              {createDetailGrid("Interest Rate", `${interestRate}% p.a`)}
              {createDetailGrid("Monthly Fee", `$${monthlyFee}`)}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AccountDetails;
