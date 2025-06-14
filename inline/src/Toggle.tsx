"use client";
import { RefreshLink, useNavigationEvent, useRefetch } from "navigation-react";

const Toggle = ({ id, name, children }: any) => {
  const { data } = useNavigationEvent();
  useRefetch(({ data, oldData }) => data.id && data.id !== oldData.id);
  return (
    <>
      <RefreshLink navigationData={{ id: data.id === id ? null : id }}>
        {name}
      </RefreshLink>
      {data.id === id ? children : null}
    </>
  );
};

export default Toggle;
