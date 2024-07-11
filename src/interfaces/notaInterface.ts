export interface notasInterface{
    autor:     string;
    documento: boolean;
    status:    string;
    publishAt: At;
    imgName:   string;
    docName:   string;
    video:     boolean;
    etiquetas: string[];
    updatedAt: At;
    contenido: string;
    imagen:    string;
    titulo:    string;
    excerpt:   string;
    createdAt: At;
    id:        number;
}

export interface At {
    seconds:     number;
    nanoseconds: number;
}
