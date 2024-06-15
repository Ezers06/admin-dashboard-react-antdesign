import CustomAvatar from "@/components/CustomAvatar";
import { Text } from "@/components/Text";
import React from "react";

type Props = {
  name: string;
  avatarUrl?: string;
  shape?: "circle" | "square";
};

const SelectAvatar = ({ avatarUrl, name, shape }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <CustomAvatar shape={shape} name={name} src={avatarUrl} />
      <Text>{name}</Text>
    </div>
  );
};

export default SelectAvatar;
