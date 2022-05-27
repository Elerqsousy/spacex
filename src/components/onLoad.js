import api from '../reduxFiles/api';
import local from '../reduxFiles/local';
import store from '../reduxFiles/store';

const updateOnLoad = (list) => {
  if (!list.length) {
    if (!localStorage.getItem('rockets')) {
      store.dispatch(api.fetchRockets());
    } else {
      store.dispatch(local.getRockets());
    }
  }
};

export default updateOnLoad;
