import titleize from '../../../helpers/titleize';

export const createDocument = (
  name: string,
  action: 'GetAll' | 'Get' | 'Add' | 'Update' | 'Remove',
) => {
  switch (action) {
    case 'GetAll':
      return `query get${titleize(name)}s {
  get${titleize(name)}s {
    id
  }
}`;

    case 'Get':
      return `query get${titleize(name)}($id: ID!) {
  get${titleize(name)}(id: $id) {
    id
  }
}`;

    case 'Add':
      return `mutation Add${titleize(name)}($${name}: Add${titleize(
        name,
      )}Input!) {
  add${titleize(name)}(${name}: $${name}) {
    id
  }
}
`;

    case 'Update':
      return `mutation Update${titleize(name)}($${name}: Update${titleize(
        name,
      )}Input!) {
  update${titleize(name)}(${name}: $${name}) {
    id
  }
}
`;

    case 'Remove':
      return `mutation Remove${titleize(name)}($${name}: Remove${titleize(
        name,
      )}Input!) {
  remove${titleize(name)}(${name}: $${name}) {
    id
  }
}
`;
  }
};
