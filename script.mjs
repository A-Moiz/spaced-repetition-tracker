// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds } from "./common.mjs";
import { getData, addData, clearData } from "./storage.mjs";

const userSelect = document.getElementById("select-user");
const form = document.getElementById("topic-form");
const topicTitle = document.getElementById("topic-title");
const topicDate = document.getElementById("topic-date");
const topicList = document.getElementById("topic-list");
const userTopicStatus = document.getElementById("user-topic-status");
const clearDataBtn = document.getElementById("clear-data");

userSelect.addEventListener("change", () => {
  loadAgenda(userSelect.value);
});

form.addEventListener("submit", handleForm);

clearDataBtn.addEventListener("click", () => {
  clearUserData(userSelect.value);
});

function init() {
  createUserOptions();
  setTodayDate();
}

function createUserOptions() {
  const users = getUserIds();
  users.forEach((id) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = `User ${id}`;
    userSelect.appendChild(option);
  });
}

function setTodayDate() {
  const today = new Date().toISOString().split("T")[0];
  topicDate.value = today;
}

function loadAgenda(userID) {
  if (!userID) return;

  const agenda = getData(userID) || [];

  if (agenda.length === 0) {
    userTopicStatus.textContent = `No agenda for user ${userID}`;
    topicList.innerHTML = "";
    topicList.hidden = true;
    clearDataBtn.hidden = true;
    return;
  } else {
    topicList.hidden = false;
    clearDataBtn.hidden = false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const futureItems = agenda
    .filter((item) => new Date(item.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  renderAgenda(futureItems);
}

function renderAgenda(items) {
  topicList.innerHTML = "";
  userTopicStatus.textContent = "Upcoming revisions";

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.topic} - ${item.date}`;
    topicList.appendChild(listItem);
  });
}

function handleForm(event) {
  event.preventDefault();
  const userID = userSelect.value;

  if (!userID) {
    alert("Please select a user.");
    return;
  }

  const topic = topicTitle.value.trim();
  const date = topicDate.value;
  const revisionDates = createRevisionDates(topic, date);
  addData(userID, revisionDates);
  loadAgenda(userID);
  form.reset();
  setTodayDate();
}

function addMonths(date, months) {
  const d = new Date(date);
  const targetMonth = d.getMonth() + months;
  const year = d.getFullYear() + Math.floor(targetMonth / 12);
  const month = targetMonth % 12;
  return new Date(Date.UTC(year, month, d.getDate()));
}

function createRevisionDates(topic, startDate) {
  const start = new Date(startDate);
  const dates = [
    new Date(start),
    addMonths(start, 1),
    addMonths(start, 3),
    addMonths(start, 6),
    addMonths(start, 12),
  ];

  dates[0].setDate(dates[0].getDate() + 7);
  return dates.map((date) => ({
    topic,

    date: date.toISOString().split("T")[0],
  }));
}

function clearUserData(userID) {
  clearData(userID);
  loadAgenda(userID);
}

init();
