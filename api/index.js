import { transform, prettyPrint } from "camaro";

const xml = `
    <players>
        <player jerseyNumber="10">
            <name>wayne rooney</name>
            <isRetired>false</isRetired>
            <yearOfBirth>1985</yearOfBirth>
        </player>
        <player jerseyNumber="7">
            <name>cristiano ronaldo</name>
            <isRetired>false</isRetired>
            <yearOfBirth>1985</yearOfBirth>
        </player>
        <player jerseyNumber="7">
            <name>eric cantona</name>
            <isRetired>true</isRetired>
            <yearOfBirth>1966</yearOfBirth>
        </player>
    </players>
`;

const template = [
  "players/player",
  {
    name: "title-case(name)",
    jerseyNumber: "@jerseyNumber",
    yearOfBirth: "number(yearOfBirth)",
    isRetired: 'boolean(isRetired = "true")',
  },
];

const getJSON = async () => {
  return await transform(xml, template);
};

module.exports = async (req, res) => {
  try {
    res.send(await getJSON());
  } catch (err) {
    res.send(err); // send the thrown error
  }
};
