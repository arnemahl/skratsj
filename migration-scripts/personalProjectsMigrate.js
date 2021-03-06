const sanity = require('./sanity');

const personal = project => ({
  ...project,
  // Let sanity generate id. Old project still exists, the new one must have
  // another id as it must be unique for any document in the database
  _id: void 0,
  // Migrate to new document type
  _type: 'personalProject',
  // Move technologies out of role
  technologies: project.role ? project.role.technologies : [],
  role: !project.role ? project.role : {
    ...project.role,
    technologies: void 0,
  },
  // Url is now a url, but readableUrl is still a string
  url: void 0,
  readableUrl: project.url,
});

const titleMatch =
  [
    'Deckito',
    'Pockito.js',
    'Nitefilter',
    'PokéPicker',
    'Skrætsj.no',
  ]
  .map(title => `title == '${title}'`)
  .join(' || ');

sanity
  .fetch(
    `*[_type == 'project' && (${titleMatch})]`
  )
  .then(
    projects => {
      projects
        .reduce(
          (transaction, project) => {
            return transaction.create(personal(project))
          },
          sanity.transaction()
        )
        .commit()
        .then(
          result => console.log('Success:', result),
          error => console.error('Failed to create projects:', error),
        );
    },
    error => console.error('Failed to fetch projets', error),
  )
  .catch(error => console.error('Something went wrong:', error));
