interface LightProps {
  id?: string;
  color: string;
  turnOn: boolean;
  name: string;
  onClick: () => void;
}
export function Light({ id, color, turnOn, name, onClick }: LightProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={turnOn}
      className="light-button"
    >
      <div
        className={`sinalizacao_luz ${turnOn ? "sinalizacao_luz--ligado" : ""}`}
        style={{ backgroundColor: color }}
      />
      <span>Ligar cor {name}</span>
    </button>
  );
}
