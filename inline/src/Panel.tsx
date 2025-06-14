"use client";
import { useNavigationEvent } from "navigation-react";

const Panel = ({ id, children }: any) => {
  const { data } = useNavigationEvent();
  return data.id === id ? children : null;
};

export default Panel;
