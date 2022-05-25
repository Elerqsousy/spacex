import api from '../redux/api';
import local from '../redux/local';
import store from '../redux/store';

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
