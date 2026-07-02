### The website must contain a drop-down which lists exactly 5 users

Tested by checking is website displays 5 users in drop-down list

### No user is selected on page load

Tested by checking if `select user` is the default/first option on launch

### All of the users must have no agenda when first loading (i.e. with clear localStorage). Data should be persisted across page loads (which is handled by the code in storage.mjs).

### Selecting a user must load the relevant user's agenda from storage

Tested by checking if agenda's load when selecting a user

### Selecting a user must display the agenda for the relevant user (see manual testing below)

Tested by checking if displayed data match expected results in rubric

### If there is no agenda for the selected user, a message is displayed to explain this

Tested by checking if a meaningful message is displayed for users with no agendas

### The website must contain a form with inputs for a topic name and a date picker. The form should also have a submit button.

Tested by checking if all the components display correctly when running

### The date picker must default to today’s date on first page load

Tested by checking if date on launch matches current date

### The form has validation to ensure that both the topic name and and selected date have been set by the user

Tested by checking if a message is displayed if field is empty

### Submitting the form adds a new topic to revise for the relevant user only. The topic’s dates to revise are calculated as one week, one month, three months, six months and one year from the selected date (see manual testing below)

Tested by checking if topics are added correctly and dates match the expected results in rubric

### After creating a new topic to revise, the agenda for the current user is shown, including the new topic

Tested by checking if new agenda is appended to user's current agenda

### The website must score 100 for accessibility in Lighthouse

Tested by checking accessibility score in safari and chrome

### Unit tests must be written for at least one non-trivial function

Unit tests in `common.test.mjs`
