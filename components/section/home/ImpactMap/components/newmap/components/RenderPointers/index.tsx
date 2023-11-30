"use client";

//component
import Pointer from "../Pointer";

export default function ({
  data,
  active,
  setActive,
}: {
  data: any[];
  active: any;
  setActive: (key: any, data: any) => void;
}) {
  return data.map((cause: any, index: number) => (
    <Pointer
      key={index}
      info={{ ...cause, index: index }}
      active={active}
      setActive={setActive}
    />
  ));
}
