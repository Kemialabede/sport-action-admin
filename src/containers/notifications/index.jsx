import React from 'react';
import './notifications.scss';

const allNotifications = [
  {
    text: 'A user just sent proof of payment for a buy order',
    time: '10 mins ago',
  },
  {
    text: 'A user just sent proof of payment for a buy order',
    time: '30 minutes ago',
  },
  {
    text: 'A user just sent proof of payment for a buy order',
    time: '1 hour ago',
  },
  {
    text: 'A user just sent proof of payment for a buy order',
    time: '2 hours ago',
  },
  {
    text: 'A user just sent proof of payment for a buy order',
    time: '3 hours ago',
  },
  {
    text: 'A user just sent proof of payment for a buy order',
    time: '4 hours ago',
  },
  {
    text: 'A user just sent proof of payment for a buy order',
    time: '6 hours ago',
  },
  {
    text: 'A new user has registered for an account on the app',
    time: '1 day ago',
  },
  {
    text: "A user has violated platform policies. Please review the user's activity and take appropriate action",
    time: '1 day ago',
  },
  {
    text: 'A user has submitted a support request. ',
    time: '2 days ago',
  },
  {
    text: 'A user just sent proof of payment for a buy order',
    time: '5 days ago',
  },
];

const NotificationItem = ({ text, time }) => (
  <div className="notification-item">
    <div className="notification-content">
      <div>
        <div className="notification-indicator" />
        <p className="notification-title">{text}</p>
      </div>
      <div>
        <p className="notification-time">{time}</p>
      </div>
    </div>
  </div>
);

const Notifications = ({ setIsOpen }) => {
  return (
    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="notification-modal" onClick={(e) => e.stopPropagation()}>
        <div>
          {' '}
          <button className="close-button" onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>
        <div className="notification-modal__header">
          <h2>Notifications</h2>
          <p>Mark All as Read</p>
        </div>
        <div className="notification-modal__content">
          {allNotifications.length > 0 ? (
            allNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                text={notification.text}
                time={notification.time}
              />
            ))
          ) : (
            <div className="no-notifications">No new notifications</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
