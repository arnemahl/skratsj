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

const norwegianDomain = window.location.hostname.split('.').slice(-1)[0] === 'no';
const localized = norwegianDomain
  ? fieldName => `"${fieldName}": coalesce(${fieldName}.nb, ${fieldName}.en)`
  : fieldName => `"${fieldName}": ${fieldName}.en`;

function apiCall() {
  return client.fetch(
    `*[_type == 'person' && name == 'Arne Mæhlum'] | [0] {
      name,
      image,
      ${localized('title')},
      ${localized('introduction')},
      keyInfo{
        ${localized('location')},
        birthYear,
        emailAddress,
        phoneNumber,
        websiteUrl,
        linkedInUrl,
        twitterHandle,
      },
      expertise[]{
        name,
        technologies,
      },
      jobs[]->{
        _id,
        company->{
          name,
        },
        ${localized('title')},
        start,
        end,
        ${localized('description')},
      },
      professionalProjects[]->{
        _id,
        ${localized('title')},
        company->{
          name
        },
        readableUrl,
        url,
        githubUrl,
        logo,
        start,
        end,
        ${localized('description')},
        role {
          ${localized('title')},
          ${localized('description')},
        },
        technologies,
      },
      personalProjects[]->{
        _id,
        ${localized('title')},
        readableUrl,
        url,
        githubUrl,
        logo,
        start,
        end,
        ${localized('description')},
        role {
          ${localized('title')},
          ${localized('description')},
        },
        technologies,
      },
      education[]->{
        _id,
        ${localized('institutionName')},
        ${localized('degree')},
        ${localized('description')},
        start,
        end,
      },
      volunteerWorkPositions[]->{
        _id,
        ${localized('title')},
        organizationName,
        ${localized('position')},
        ${localized('description')},
        start,
        end,
      },
    }`
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
