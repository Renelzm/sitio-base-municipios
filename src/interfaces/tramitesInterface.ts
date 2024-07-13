export interface TopLevel {
    clave:                 string;
    descargas:             Descargas[];
    puede_solicitar:       string;
    unidad_administrativa: string;
    requisitos:            string[];
    descripcion:           string;
    duracion:              string;
    procedimiento:         string[];
    presencial:            boolean;
    costo:                 string;
    fundamento_legal:      string;
    vigencia:              string;
    nombre:                string;
    key:                  string;
    label?:                string;
    children?:             React.ReactNode;
    icon?:                 React.ReactNode;
  }
  
  export interface Descargas {
    nombre: string;
    url:    string;
  }

  export interface TramiteProps {
    data: TopLevel;
  }
  