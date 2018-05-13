import { Listenable } from 'pockito';

const store = new  Listenable({
  initialState: {
    personAsync: {
      req: REQ.INIT,
      person: void 0,
    },
  },
});

function apiCall() {}
