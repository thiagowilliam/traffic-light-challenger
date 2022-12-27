import { useState } from "react";
import { Light } from "./Light";

interface TrafficWrapperProps {
  colors: { id: string; color: string; name: string }[];
}

export function TrafficWrapper({ colors = [] }: TrafficWrapperProps) {
  const [currentId, setCurrentId] = useState("");

  return (
    <div className="sinalizacao">
      {colors.map(({ id, color, name }) => (
        <Light
          key={id}
          color={color}
          name={name}
          turnOn={id === currentId}
          onClick={() => setCurrentId(id)}
        />
      ))}
    </div>
  );
}
