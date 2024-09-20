import * as notificationsData from "../../../../notifications.json";

const getAllNotificationsByUser = (userId) => {
  const contextList = notificationsData
    .filter((notif) => notif.author.id === userId)
    .map(({ context }) => context);

  return contextList;
};

export default getAllNotificationsByUser;
