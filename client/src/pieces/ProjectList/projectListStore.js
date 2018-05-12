import { Listenable } from 'pockito';
import { client } from '../../sanity';
import REQ from './REQ';

const store = new Listenable({
  initialState: {
    projectsAsync: {
      req: REQ.INIT,
      projects: void 0,
    },
  },
});

export { store as projectListStore };

function apiCall() {
  return client.fetch(
    `*[_type == 'project']`
  );
}

export function fetchProjects() {
  const update = obj => store.set({ projectsAsync: obj });

  update({ req: REQ.PENDING });

  apiCall().then(
    projects => {
      Array.isArray(projects)
        ? update({ req: REQ.SUCCESS, projects })
        : update({ req: REQ.ERROR });
    },
    error => {
      update({ req: REQ.ERROR });
    },
  );
}
