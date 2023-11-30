import { Seq, Map } from 'immutable';

export default function printBestStudents(object) {
  const filtered = Seq(object)
    .filter((student) => student.score > 70)
    .map((student) => Map(student)
      .update(
        'firstName',
        (firstName) => firstName.charAt(0).toUpperCase() + firstName.slice(1),
      )
      .update(
        'lastName',
        (lastName) => lastName.charAt(0).toUpperCase() + lastName.slice(1),
      ))
    .toObject();

  console.log(filtered);
}
