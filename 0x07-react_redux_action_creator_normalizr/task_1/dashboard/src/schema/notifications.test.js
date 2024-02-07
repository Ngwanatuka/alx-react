import { normalize } from 'normalizr';
import { schemaEntities } from './notifications';
import notificationsData from "../notification.json";

// Test case
describe('Normalized data has correct result array', () => {
  it('returns correct array of normalized entities', () => {
    // Normalize the data using the defined schema
    const normalizedData = normalize(notificationsData, [schemaEntities.notification]);

    // Extract the normalized entities
    const { entities } = normalizedData;

    // Define the expected result array
    const expectedResultArray = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
      "5debd76485ee4dfd1284f97b",
      "5debd7644e561e022d66e61a",
      "5debd7644aaed86c97bf9d5e",
      "5debd76413f0d5e5429c28a0",
      "5debd7642e815cd350407777",
      "5debd764c1127bc5a490a4d0",
      "5debd7646ef31e0861ec1cab",
      "5debd764a4f11eabef05a81d",
      "5debd764af0fdd1fc815ad9b",
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b"
    ];

    // Get the keys of the normalized entities
    const resultArray = Object.keys(entities.notifications);

    // Assert that the result array matches the expected result array
    expect(resultArray).toEqual(expect.arrayContaining(expectedResultArray));
  });

  it('returns correct user entity for a given user ID', () => {
    // Normalize the data using the defined schema
    const normalizedData = normalize(notificationsData, [schemaEntities.notification]);

    // Extract the normalized entities
    const { entities } = normalizedData;

    // Define the expected user entity
    const expectedUser = {
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32"
    };

    // Get the user entity with the given user ID
    const userEntity = entities.users["5debd764a7c57c7839d722e9"];

    // Assert that the user entity matches the expected user entity
    expect(userEntity).toEqual(expectedUser);
  });

  it('returns correct message entity for a given message GUID', () => {
    // Normalize the data using the defined schema
    const normalizedData = normalize(notificationsData, [schemaEntities.notification]);

    // Extract the normalized entities
    const { entities } = normalizedData;

    // Define the expected message entity
    const expectedMessage = {
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi."
    };

    // Get the message entity with the given message GUID
    const messageEntity = entities.messages["efb6c485-00f7-4fdf-97cc-5e12d14d6c41"];

    // Assert that the message entity matches the expected message entity
    expect(messageEntity).toEqual(expectedMessage);
  });

  it('returns correct notification entity for a given notification ID', () => {
    // Normalize the data using the defined schema
    const normalizedData = normalize(notificationsData, [schemaEntities.notification]);

    // Extract the normalized entities
    const { entities } = normalizedData;

    // Define the expected notification entity
    const expectedNotification = {
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: "5debd7642e815cd350407777"
    };

    // Get the notification entity with the given notification ID
    const notificationEntity = entities.notifications["5debd7642e815cd350407777"];

    // Assert that the notification entity matches the expected notification entity
    expect(notificationEntity).toEqual(expectedNotification);
  });
});
