"use client";
import { RefreshLink, useNavigationEvent, useRefetch } from "navigation-react";
import { useEffect, useRef } from "react";

const Modal = ({ person }: any) => {
  const {
    oldState,
    data: { id },
  } = useNavigationEvent();
  const modal = useRef<HTMLDialogElement>(null);
  useRefetch(({ data, oldData }) => data.id && data.id !== oldData.id);
  const { name, dateOfBirth, gender, email, phone } = person;
  useEffect(() => {
    if (!oldState) {
      window.history.replaceState(
        { ...window.history.state, noback: true },
        ""
      );
    }
    if (id) modal.current?.showModal();
    else modal.current?.close();
  });
  return (
    <dialog ref={modal}>
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
