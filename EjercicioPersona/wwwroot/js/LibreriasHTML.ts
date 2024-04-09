export interface ILibreriaHTML {
    dameCss(): string;
    dameTextBox(id: string, placeholder: string): string;
    dameNumberBox(id: string, placeholder: string): string;
    dameCheckBox(id: string, contenido: string): string;
    dameBoton(id: string, texto: string): string;
    dameDiv(id: string): string;
}
export class HTMLChurrutero implements ILibreriaHTML {
    public dameDiv(id: string): string {
        return (`<div id='${id}'></div><br/>`);
    }
    public dameCss(): string {
        return "<br />";
    }
    public dameBoton(id: string, texto: string): string {
        return `<input type='button' id=${id} value='${texto}' />`;
    }
    public dameCheckBox(id: string, contenido: string): string {
        return `<input type='checkbox' id='${id}'/><label for='${id}'> ${contenido} </label>`;
    }
    public dameTextBox(id: string, placeholder: string): string {
        return `<input type ='text' id='${id}' placeholder='${placeholder}'/>`;
    }
    public dameNumberBox(id: string, placeholder: string): string {
        return `<input type='number' id='${id}' placeholder='${placeholder}' />`;
    }
}
export class HTMLBootStrap implements ILibreriaHTML {
    public dameDiv(id: string): string {
        return (`<div id='${id}' class='form-group col-md-6'></div><br/>`);
    }
    public dameCss(): string {
        return `<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>`;
    }
    public dameBoton(id: string, texto: string): string {
        return `<input type='button' id=${id} value='${texto}'/>`;
    }
    public dameCheckBox(id: string, contenido: string): string {
        return `<input type='checkbox' id='${id}'/><label for='${id}'> ${contenido} </label>`;
    }
    public dameTextBox(id: string, placeholder: string): string {
        return `<input type ='text' id='${id}' placeholder='${placeholder}' class='form-control'>`;
    }
    public dameNumberBox(id: string, placeholder: string): string {
        return `<input type='number' id='${id}' placeholder='${placeholder}' />`;
    }

}