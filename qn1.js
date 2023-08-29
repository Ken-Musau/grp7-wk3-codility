// Split the list of names into an array.
// Create an email map and an empty result array.
// Loop through each name:
// Split the name into parts.
// Generate the email address.
// Check if the email exists in the map:
// If yes, increment count and add to result.
// If no, add to map and add to result.
// Join the result array for the final output.
// Define a function to generate emails:
// Get initials and sanitize last name.
// Return formatted email.

function solution(S, C) {
  const names = S.split(", ");
  const emailMap = new Map();

  const generateEmail = (firstName, middleName, lastName, company) => {
    const firstInitial = firstName[0].toLowerCase();
    const middleInitial = middleName ? middleName[0].toLowerCase() : "";
    const sanitizedLastName = lastName
      .replace(/-/g, "")
      .toLowerCase()
      .substring(0, 8);
    return `${firstInitial}${middleInitial}${sanitizedLastName}@${company}.com`;
  };

  const result = [];

  for (const name of names) {
    const nameParts = name.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];
    const middleName = nameParts.length === 3 ? nameParts[1] : null;

    const email = generateEmail(firstName, middleName, lastName, C);

    if (emailMap.has(email)) {
      const count = emailMap.get(email);
      emailMap.set(email, count + 1);
      result.push(`${name} <${email}${count}@${C.toLowerCase()}.com>`);
    } else {
      emailMap.set(email, 2);
      result.push(`${name} <${email}@${C.toLowerCase()}.com>`);
    }
  }

  return result.join(", ");
}
