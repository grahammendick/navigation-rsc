"use client";
import { RefreshLink, useNavigationEvent, useRefetch } from "navigation-react";

const Toggle = ({ id, children }: any) => {
  const { data } = useNavigationEvent();
  return (
    <>
      <RefreshLink navigationData={{ id: data.id === id ? null : id }}>
        {children}
      </RefreshLink>
    </>
  );
};

export default Toggle;
