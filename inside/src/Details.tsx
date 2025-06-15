"use client";
import { useNavigationEvent, useRefetch } from "navigation-react";

const Details = ({ person }: any) => {
  const {
    data: { id },
  } = useNavigationEvent();
  useRefetch(({ data, oldData }) => data.id && data.id !== oldData.id);
  if (!id) return null;
  const { name, dateOfBirth, gender, email, phone } = person;
  return (
    <>
      <h2>{name}</h2>
      <div>{email}</div>
      <div>{dateOfBirth}</div>
      <div>{gender}</div>
      <div>{phone}</div>
    </>
  );
};

export default Details;
