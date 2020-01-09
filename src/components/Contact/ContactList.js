import React from "react";
import InsertIcon from "../Icons/InsertIcon";

const contacts = [
  {
    name: "linkedin",
    icon: "linkedin",
    info: "wanwisa.silanan@gmail.com",
    hover: "",
    link: "https://www.linkedin.com/in/wanwisa-silanan-09578316a/"
  },
  {
    name: "github",
    icon: "github",
    info: "",
    hover: "",
    link: "https://github.com/maydayo"
  },
  {
    name: "mail",
    icon: "mail",
    info: "",
    hover: "",
    link: "mailto:wanwisa.silanan@gmail.com"
  },
  {
    name: "phone",
    icon: "phone",
    info: "0803677348",
    hover: "0803677348",
    notlink: true
  }
];

const ContactListItem = ({ contact }) => {
  const { icon, info, hover, link, notlink } = contact;
  return (
    <li className="contact-list-item">
      {notlink ? (
        <a
          onClick={() => {
            navigator.clipboard.writeText(info);
          }}
        >
          <InsertIcon icon={icon} />
        </a>
      ) : (
        <a target="_blank" href={link}>
          <InsertIcon icon={icon} />
        </a>
      )}
      {hover ? <label>{hover}</label> : null}
    </li>
  );

  //return <div className="contact-list-item">{name}</div>;
};

const ContactList = () => (
  <div className="contact-list-wrapper">
    {contacts.map(contact => (
      <ContactListItem key={contact.name} contact={contact} />
    ))}
  </div>
);

export default ContactList;
