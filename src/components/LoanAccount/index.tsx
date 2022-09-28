import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { LoanAccountPayload, AccountDetailsType } from "./types";
import TransacitonTable from "./TransactionsTable";
import AccountDetails from "./AccountDetails";

interface LoanAccountProps {
  payload: LoanAccountPayload;
}

const LoanAccount = (props: LoanAccountProps) => {
  const { payload } = props;
  const {
    account: {
      name,
      interestRate,
      limit,
      cycleInterval,
      monthlyFee,
      startDate,
      transactions,
    },
  } = payload;

  const accountDetails: AccountDetailsType = {
    name,
    interestRate,
    limit,
    cycleInterval,
    monthlyFee,
    startDate,
  };

  return (
    <Box justifyContent="center" height='100%'>
      <Grid
        container
        direction="column"
        spacing={8}
        justifyContent="center"
        alignItems="center"
        height='100%'
      >
        <Grid item width="25%">
          <AccountDetails accountDetails={accountDetails} />
        </Grid>
        <Grid item width="70%">
          <TransacitonTable transactions={transactions} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoanAccount;
