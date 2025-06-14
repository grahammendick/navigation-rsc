"use client";
import { RefreshLink, useNavigationEvent, useRefetch } from "navigation-react";

const Modal = ({ person }: any) => {
  const {
    data: { id },
  } = useNavigationEvent();
  useRefetch(({ data, oldData }) => data.id && data.id !== oldData.id);
  if (!id) return null;
  const { name, dateOfBirth, gender, email, phone } = person;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 100,
        width: 250,
        backgroundColor: "#fff",
        border: "1px solid #000",
      }}
    >
      <RefreshLink navigationData={{ id: null }}>Close</RefreshLink>
      <h2>{name}</h2>
      <div>{email}</div>
      <div>{dateOfBirth}</div>
      <div>{gender}</div>
      <div>{phone}</div>
    </div>
  );
};

export default Modal;
