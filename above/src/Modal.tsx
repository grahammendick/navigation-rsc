"use client";
import { RefreshLink, useNavigationEvent, useRefetch } from "navigation-react";
import { useEffect } from "react";

const Modal = ({ person }: any) => {
  const {
    oldState,
    data: { id },
  } = useNavigationEvent();
  useRefetch(({ data, oldData }) => data.id && data.id !== oldData.id);
  const { name, dateOfBirth, gender, email, phone } = person;
  useEffect(() => {
    if (!oldState) window.history.replaceState({ noback: true }, "");
    if (id) document.querySelector("dialog")?.showModal();
    else document.querySelector("dialog")?.close();
  });
  return (
    <dialog>
      <RefreshLink
        navigating={(e) => {
          if (!!window.history.state.noback) return true;
          e.preventDefault();
          window.history.back();
          return false;
        }}
        navigationData={{ id: null }}
      >
        Close
      </RefreshLink>
      <h2>{name}</h2>
      <div>{email}</div>
      <div>{dateOfBirth}</div>
      <div>{gender}</div>
      <div>{phone}</div>
    </dialog>
  );
};

export default Modal;
