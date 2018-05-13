import { Listenable } from 'pockito';
import { client } from 'sanity';
import REQ from 'util/REQ';

const store = new  Listenable({
  initialState: {
    personAsync: {
      req: REQ.INIT,
      person: void 0,
    },
  },
});

export { store as personStore };

function apiCall() {
  return client.fetch(
    `*[_type == 'person' && name == 'Arne Mæhlum'] | [0]`
  );
}

export function fetchPerson() {
  const update = obj => store.set({ personAsync: obj });

  update({ req: REQ.PENDING });

  apiCall().then(
    person => {
      person
        ? update({ req: REQ.SUCCESS, person })
        : update({ req: REQ.ERROR });
    },
    error => {
      update({ req: REQ.ERROR });
    },
  );
}
