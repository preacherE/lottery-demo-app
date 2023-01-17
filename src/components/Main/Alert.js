import { useSelector } from "react-redux";
import { Alert, Collapse } from "@mui/material";

const styles = {
  alert: ``,
};

const AlertTransaction = (props) => {
  const isSuccessful = useSelector(
    (state) => state.lottery.transaction.isSuccessful
  );
  const isRequest = useSelector((state) => state.lottery.transaction.isRequest);
  const isPending = useSelector((state) => state.lottery.transaction.isPending);
  const isError = useSelector((state) => state.lottery.transaction.isError);
  const { open, setOpen } = props;

  return (
    <div>
      {isRequest ? (
        <div className={styles.alert}>
          <Collapse in={open}>
            <Alert severity="info">
              <strong>Waiting For Approval</strong>
            </Alert>
          </Collapse>
        </div>
      ) : isError ? (
        <div className={styles.alert}>
          <Collapse in={open}>
            <Alert
              onClose={() => {
                setOpen(false);
              }}
              severity="error"
            >
              <strong>Transaction is error</strong>
            </Alert>
          </Collapse>
        </div>
      ) : isPending ? (
        <div className={styles.alert}>
          <Collapse in={open}>
            <Alert severity="info">
              <strong>Processing the transaction</strong>
            </Alert>
          </Collapse>
        </div>
      ) : !isPending && isSuccessful ? (
        <div className={styles.alert}>
          <Collapse in={open}>
            <Alert
              onClose={() => {
                setOpen(false);
              }}
              severity="success"
            >
              <strong>Transaction is successfull</strong>
            </Alert>
          </Collapse>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AlertTransaction;
