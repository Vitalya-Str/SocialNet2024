import { connect } from "react-redux";
import { addMessageAC, addNewMessageTextAC } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageAC());
    },
    addNewMessage: (text) => {
      dispatch(addNewMessageTextAC(text));
    },
  };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs));
