
export interface Sensor {
  sensorType: SensorType;
  severity: Severity;
}

export enum SensorType {
  temperature = "Temperatura",
  pressure = "Presión",
  wind = "Viento",
  level = "Niveles",
  energy = "Energía",
  strain = "Tensión",
  carbonMonoxide = "Monóxido de carbono",
  gas = "Otros gases"
}

export interface Severity {
  normal: number;
  medium: number;
  high: number;
}
